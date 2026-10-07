/* Runs in an opaque-origin sandbox: never receives login credentials. */
(() => {
  let worker;
  let channel;
  let parentOrigin;
  addEventListener('message', (event) => {
    if (event.source !== parent) return;
    const message = event.data;
    if (message?.type === 'bootstrap' && !worker) {
      channel = message.channel;
      parentOrigin = event.origin;
      const source = `importScripts(${JSON.stringify(new URL('./worker.js', location.href).href)});`;
      const url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
      worker = new Worker(url);
      URL.revokeObjectURL(url);
      worker.onmessage = ({ data }) => parent.postMessage({ ...data, channel }, parentOrigin);
      worker.onerror = () => parent.postMessage({ channel, id: message.id, error: '浏览器运行环境启动失败，请检查静态资源及 CORS 配置。' }, parentOrigin);
      worker.postMessage({ id: message.id, method: 'init', args: message.args });
    } else if (worker && message?.channel === channel) {
      worker.postMessage(message);
    }
  });
  parent.postMessage({ type: 'sandbox-ready' }, '*');
})();
