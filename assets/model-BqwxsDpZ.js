const c=e=>Array.isArray(e)?e.join(""):e;function y(e){const r=e.metadata.greenai,n=r&&typeof r=="object"?r:{};return{execution_enabled:n.execution_enabled!==!1,title:typeof n.title=="string"?n.title:"",instruction:typeof n.instruction=="string"?n.instruction:"",group:typeof n.instruction_group=="string"?n.instruction_group:""}}function d(e,r){const n=y(e[r]),t=r>0&&e[r-1].cell_type==="code"?y(e[r-1]):void 0;return n.group&&t?.group===n.group&&t.instruction===n.instruction?"":n.instruction}const p=e=>({id:`cell-${crypto.randomUUID()}`,cell_type:e,source:"",metadata:{},...e==="code"?{outputs:[],execution_count:null}:{}});function m(e){if(new TextEncoder().encode(e).length>8*1024*1024)throw new Error("Notebook 不能超过 8 MB");const r=JSON.parse(e);if(r.nbformat!==4||!Number.isInteger(r.nbformat_minor)||!Array.isArray(r.cells)||r.cells.length>200||!r.metadata||typeof r.metadata!="object")throw new Error("请选择有效的 nbformat 4 Notebook（最多 200 个单元）");const n=new Set;return r.cells=r.cells.map(t=>{if(!t||!["code","markdown","raw"].includes(t.cell_type)||typeof t.source!="string"&&!(Array.isArray(t.source)&&t.source.every(o=>typeof o=="string")))throw new Error("Notebook 单元类型或内容无效");if(t.metadata&&(typeof t.metadata!="object"||Array.isArray(t.metadata)))throw new Error("Notebook 单元 metadata 无效");if(t.outputs&&(!Array.isArray(t.outputs)||t.outputs.some(o=>!o||!["stream","error","execute_result","display_data"].includes(o.output_type)||o.traceback&&(!Array.isArray(o.traceback)||o.traceback.some(s=>typeof s!="string"))||o.text&&typeof o.text!="string"&&!(Array.isArray(o.text)&&o.text.every(s=>typeof s=="string"))||o.data&&(typeof o.data!="object"||Object.entries(o.data).some(([s,i])=>s.startsWith("text/")&&typeof i!="string"&&!(Array.isArray(i)&&i.every(u=>typeof u=="string")))))))throw new Error("Notebook 输出格式无效");const a=t.id||`cell-${crypto.randomUUID()}`;if(!/^[a-zA-Z0-9_-]{1,64}$/.test(a)||n.has(a))throw new Error("单元编号重复或无效");return n.add(a),{...t,id:a,metadata:t.metadata||{},...t.cell_type==="code"?{outputs:t.outputs||[],execution_count:t.execution_count??null}:{}}}),r.nbformat_minor=Math.max(5,r.nbformat_minor),r}function f(e){const r=(e.outputs||[]).map(o=>o.output_type==="error"?o.traceback?.join(`
`)||o.evalue:c(o.text||o.data?.["text/plain"]||"")).join(`
`),n=y(e).instruction,t=e.metadata.greenai?.executed_source,a=typeof t=="string"&&t!==c(e.source)?`

这些输出来自修改前的代码，当前代码还没有重新运行。上次运行的代码：
\`\`\`python
${t}
\`\`\``:"";return`请帮助我理解这段代码，先给提示，帮助我自己检查结果。${n?`

练习提示：${n}`:""}

当前代码：
\`\`\`python
${c(e.source)}
\`\`\`

运行结果：
${r.slice(0,12e3)}${a}`}export{y as a,f as b,c,p as n,m as p,d as v};
