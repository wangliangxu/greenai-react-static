/* Dedicated Pyodide instance; all filesystem access stays inside this Worker. */
let python;
let count = 0;
let queue = Promise.resolve();
const MAX_FILE = 10 * 1024 * 1024;
const MAX_OUTPUT = 200000;
function checkedPath(path) {
  if (typeof path !== 'string' || !/^\/(data|work)\/[^/\\\0]{1,180}$/.test(path) || path.split('/').at(-1).startsWith('.')) throw new Error('无效的工作文件路径');
  return path;
}
const runner = `
import os as _os
_os.environ["MPLBACKEND"] = "Agg"
import ast as _ast, inspect as _inspect, io as _io, base64 as _base64, traceback as _traceback
_ga_namespace = {"__name__": "__main__"}
async def _ga_execute(source):
    tree = _ast.parse(source)
    last = tree.body.pop() if tree.body and isinstance(tree.body[-1], _ast.Expr) else None
    result = eval(compile(tree, "<notebook>", "exec", flags=_ast.PyCF_ALLOW_TOP_LEVEL_AWAIT), _ga_namespace)
    if _inspect.isawaitable(result):
        await result
    value = None
    if last is not None:
        value = eval(compile(_ast.Expression(last.value), "<notebook>", "eval", flags=_ast.PyCF_ALLOW_TOP_LEVEL_AWAIT), _ga_namespace)
        if _inspect.isawaitable(value):
            value = await value
    outputs = []
    if value is not None:
        data = {"text/plain": repr(value)[:200000]}
        if hasattr(value, "_repr_html_"):
            html = value._repr_html_()
            if html:
                data["text/html"] = str(html)[:200000]
        outputs.append({"output_type": "execute_result", "data": data, "metadata": {}, "execution_count": None})
    import sys
    if "matplotlib.pyplot" in sys.modules:
        plt = sys.modules["matplotlib.pyplot"]
        for number in plt.get_fignums()[:6]:
            buffer = _io.BytesIO()
            plt.figure(number).savefig(buffer, format="png", bbox_inches="tight")
            if buffer.tell() <= 2000000:
                outputs.append({"output_type": "display_data", "data": {"image/png": _base64.b64encode(buffer.getvalue()).decode()}, "metadata": {}})
        plt.close("all")
    return outputs
`;
async function handle(method, args) {
  if (method === 'init') {
    importScripts(args.indexURL + 'pyodide.js');
    python = await loadPyodide({ indexURL: args.indexURL });
    python.FS.mkdirTree('/data'); python.FS.mkdirTree('/work'); python.FS.chdir('/work');
    await python.runPythonAsync(runner);
    return { version: python.version };
  }
  if (!python) throw new Error('运行环境尚未连接');
  if (method === 'writeFile') {
    const bytes = new Uint8Array(args.bytes);
    if (bytes.byteLength > MAX_FILE) throw new Error('单个文件不能超过 10 MB');
    python.FS.writeFile(checkedPath(args.path), bytes);
    return null;
  }
  if (method === 'readFile') {
    const path = checkedPath(args.path);
    if (python.FS.stat(path).size > MAX_FILE) throw new Error('单个文件不能超过 10 MB');
    return python.FS.readFile(path);
  }
  if (method === 'listFiles') {
    const names = python.FS.readdir('/work').filter(name => !name.startsWith('.'));
    if (names.length > 100) throw new Error('工作文件最多 100 个，请清理后保存。');
    if (names.some(name => python.FS.isDir(python.FS.stat('/work/' + name).mode))) throw new Error('暂不支持保存子目录，请把作品文件移到 /work/ 根目录后保存。');
    return names.flatMap(name => {
      try { const stat = python.FS.stat('/work/' + name); return python.FS.isFile(stat.mode) ? [{ name, size: stat.size }] : []; } catch { return []; }
    });
  }
  if (method === 'execute') {
    count += 1;
    const outputs = [];
    let outputSize = 0;
    let truncated = false;
    const stream = name => text => {
      const remaining = MAX_OUTPUT - outputSize;
      if (remaining <= 0) { truncated = true; return; }
      const value = (String(text) + '\n').slice(0, remaining);
      outputSize += value.length;
      const previous = outputs.at(-1);
      if (previous?.output_type === 'stream' && previous.name === name) previous.text += value;
      else outputs.push({ output_type: 'stream', name, text: value });
    };
    python.setStdout({ batched: stream('stdout') });
    python.setStderr({ batched: stream('stderr') });
    python.setStdin({ stdin: () => { throw new Error('请用变量提供输入；当前浏览器 Notebook 不支持 input() 对话框。'); } });
    try {
      // Only load packages bundled by the platform. Unknown imports report clearly.
      await python.loadPackagesFromImports(args.source);
      python.globals.set('_ga_source', args.source);
      const rich = await python.runPythonAsync('await _ga_execute(_ga_source)');
      if (rich) {
        const values = rich.toJs({ dict_converter: entries => Object.fromEntries(entries) });
        rich.destroy();
        outputs.push(...values.map(value => value.output_type === 'execute_result' ? { ...value, execution_count: count } : value));
      }
    } catch (error) {
      outputs.push({ output_type: 'error', ename: 'PythonError', evalue: String(error).slice(0, MAX_OUTPUT), traceback: [String(error).slice(0, MAX_OUTPUT)] });
    } finally { python.globals.delete('_ga_source'); }
    if (truncated) outputs.push({ output_type: 'stream', name: 'stderr', text: '\n输出过多，已截断。\n' });
    return { execution_count: count, outputs };
  }
  throw new Error('不支持的运行操作');
}
self.onmessage = ({ data }) => {
  queue = queue.then(async () => {
    try { self.postMessage({ id: data.id, result: await handle(data.method, data.args || {}) }); }
    catch (error) { self.postMessage({ id: data.id, error: String(error) }); }
  });
};
