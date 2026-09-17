import{r as n,j as e}from"./react-vendor-DZdvhec1.js";import{a as S}from"./aiClient-fcOVO7yL.js";import{U as z,s as _,X as R,u as P,be as E,a_ as I,ah as T}from"./ui-vendor-DNC3fIfU.js";import{M as m,r as p}from"./markdown-vendor-BexutAEn.js";const M=["请介绍这个数据集","数据有哪些变量？各自含义是什么？","统计各字段的缺失值情况","数据的时间和空间覆盖范围是什么？","计算主要数值字段的统计摘要"];function L({sourceName:c,onClose:x}){const[d,o]=n.useState([]),[l,g]=n.useState(""),[b,y]=n.useState(!1),[u,f]=n.useState(null),w=n.useRef(null),j=n.useRef(null);n.useEffect(()=>{o([]),f(null)},[c]),n.useEffect(()=>{w.current?.scrollIntoView({behavior:"smooth"})},[d]);const h=n.useCallback(async r=>{if(!(!r.trim()||b)){g(""),o(i=>[...i,{role:"user",content:r}]),y(!0);try{const i={role:"assistant",content:"",isStreaming:!0};o(a=>[...a,i]),await S({message:r,session_id:u,table_context:c,stream:!0},{onEvent:a=>{if(a.stage&&(i.currentStage=String(a.stage)),a.thinking_chunk&&(i.thinkingContent=(i.thinkingContent||"")+String(a.thinking_chunk)),a.summary_chunk&&(i.summaryContent=(i.summaryContent||"")+String(a.summary_chunk)),a.task_progress&&(i.taskProgress=a.task_progress),typeof a.answer=="string"&&a.task_index===void 0&&(i.content+=a.answer),a.pandasai_code){const s=typeof a.task_index=="number"?a.task_index:0;for(i.computingResults||(i.computingResults=[]);i.computingResults.length<=s;)i.computingResults.push({});i.computingResults[s].pandasaiCode=String(a.pandasai_code)}if(a.pandasai_type){const s=typeof a.task_index=="number"?a.task_index:0;for(i.computingResults||(i.computingResults=[]);i.computingResults.length<=s;)i.computingResults.push({});const t=i.computingResults[s];t.pandasaiType=String(a.pandasai_type),typeof a.chart_url=="string"&&(t.chartUrl=a.chart_url),a.dataframe&&(t.dataframe=a.dataframe),typeof a.value=="number"&&(t.numericValue=a.value),i.taskProgress&&(t.purpose=i.taskProgress.purpose)}if(typeof a.answer=="string"&&typeof a.task_index=="number"){const s=a.task_index;i.computingResults?.[s]&&(i.computingResults[s].answer=a.answer)}typeof a.session_id=="string"&&!u&&f(a.session_id),a.error&&(i.content+=`
❌ ${String(a.error)}`),o(s=>{const t=[...s];return t[t.length-1]={...i},t})}}),i.isStreaming=!1,o(a=>{const s=[...a];return s[s.length-1]={...i},s})}catch(i){const a=i instanceof Error?i.message:"网络错误";o(s=>[...s,{role:"assistant",content:`❌ 请求失败: ${a}`}])}finally{y(!1)}}},[b,u,c]),N=()=>{o([]),f(null)};return e.jsxs("div",{className:"ai-sidebar",children:[e.jsxs("div",{className:"ai-sidebar-header",children:[e.jsxs("div",{className:"ai-sidebar-title",children:[e.jsx(z,{size:16,className:"ai-sidebar-icon"}),e.jsx("span",{children:"AI 智能分析"})]}),e.jsxs("div",{className:"ai-sidebar-actions",children:[e.jsx("button",{className:"ai-sidebar-btn",onClick:N,title:"清空对话",children:e.jsx(_,{size:15})}),e.jsx("button",{className:"ai-sidebar-btn",onClick:x,title:"关闭面板",children:e.jsx(R,{size:16})})]})]}),e.jsxs("div",{className:"ai-sidebar-context",children:[e.jsx("span",{className:"ai-sidebar-context-label",children:"数据源"}),e.jsx("span",{className:"ai-sidebar-context-value",children:c})]}),e.jsxs("div",{className:"ai-sidebar-messages",children:[d.length===0&&e.jsxs("div",{className:"ai-sidebar-welcome",children:[e.jsx("div",{className:"ai-sidebar-welcome-icon",children:"🔬"}),e.jsx("div",{className:"ai-sidebar-welcome-text",children:"我可以帮你分析这个数据集，试试下面的问题："}),e.jsx("div",{className:"ai-sidebar-suggestions",children:M.map((r,i)=>e.jsx("button",{className:"ai-sidebar-suggestion",onClick:()=>h(r),disabled:b,children:r},i))})]}),d.map((r,i)=>e.jsxs("div",{className:`ai-sidebar-msg ai-sidebar-msg--${r.role}`,children:[e.jsx("div",{className:"ai-sidebar-msg-avatar",children:r.role==="user"?"👤":"🤖"}),e.jsxs("div",{className:"ai-sidebar-msg-body",children:[r.thinkingContent&&e.jsx(v,{icon:"💭",title:"分析思路",defaultOpen:!1,children:e.jsx(m,{remarkPlugins:[p],children:r.thinkingContent.replace(/```json[\s\S]*?```/g,"").trim()})}),r.computingResults?.map((a,s)=>!a.pandasaiType||a.pandasaiType==="skip"?null:e.jsxs("div",{className:"ai-sidebar-computing",children:[a.pandasaiCode&&e.jsx(v,{icon:e.jsx(P,{size:13}),title:a.purpose||`代码 ${(r.computingResults?.length??0)>1?s+1:""}`,defaultOpen:!1,children:e.jsx("pre",{className:"ai-sidebar-code",children:e.jsx("code",{children:a.pandasaiCode})})}),a.pandasaiType==="number"&&a.numericValue!==void 0&&e.jsx("div",{className:"ai-sidebar-number",children:a.numericValue}),a.chartUrl&&e.jsx("div",{className:"ai-sidebar-chart",children:e.jsx("img",{src:a.chartUrl,alt:"图表",style:{maxWidth:"100%",borderRadius:"6px"}})}),a.dataframe&&a.dataframe.data?.length>0&&e.jsx(v,{icon:e.jsx(E,{size:13}),title:`数据表 (${a.dataframe.total_rows} 行)`,defaultOpen:!0,children:e.jsxs("div",{className:"ai-sidebar-table-wrap",children:[e.jsxs("table",{className:"ai-sidebar-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:a.dataframe.columns.map(t=>e.jsx("th",{children:t},t))})}),e.jsx("tbody",{children:a.dataframe.data.slice(0,15).map((t,C)=>e.jsx("tr",{children:a.dataframe.columns.map(k=>e.jsx("td",{children:String(t[k]??"")},k))},C))})]}),a.dataframe.total_rows>15&&e.jsxs("div",{className:"ai-sidebar-more",children:["...还有 ",a.dataframe.total_rows-15," 行"]})]})}),a.pandasaiType==="text"&&a.answer&&e.jsx("div",{className:"ai-sidebar-text",children:e.jsx(m,{remarkPlugins:[p],children:a.answer})})]},s)),r.summaryContent&&e.jsxs("div",{className:"ai-sidebar-summary",children:[e.jsxs("div",{className:"ai-sidebar-summary-header",children:[e.jsx("span",{children:"📝"})," ",e.jsx("span",{children:"分析结论"})]}),e.jsx("div",{className:"ai-sidebar-summary-body",children:e.jsx(m,{remarkPlugins:[p],children:r.summaryContent})})]}),r.content&&!r.thinkingContent&&!r.summaryContent&&e.jsx("div",{className:"ai-sidebar-text",children:r.role==="assistant"?e.jsx(m,{remarkPlugins:[p],children:r.content}):r.content}),r.isStreaming&&r.currentStage&&e.jsxs("div",{className:"ai-sidebar-streaming",children:[r.currentStage==="thinking"&&"💭 正在分析思路...",r.currentStage==="computing"&&(r.taskProgress&&r.taskProgress.total>1?`🐍 执行子任务 ${r.taskProgress.index+1}/${r.taskProgress.total}...`:"🐍 正在计算..."),r.currentStage==="summary"&&"📝 正在生成结论..."]})]})]},i)),b&&d.length>0&&!d[d.length-1]?.isStreaming&&e.jsxs("div",{className:"ai-sidebar-msg ai-sidebar-msg--assistant",children:[e.jsx("div",{className:"ai-sidebar-msg-avatar",children:"🤖"}),e.jsx("div",{className:"ai-sidebar-msg-body",children:e.jsx("div",{className:"ai-sidebar-streaming",children:"⏳ 正在分析中..."})})]}),e.jsx("div",{ref:w})]}),e.jsxs("div",{className:"ai-sidebar-input",children:[e.jsx("textarea",{ref:j,className:"ai-sidebar-textarea",value:l,onChange:r=>g(r.target.value),onKeyDown:r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),h(l))},placeholder:"输入问题，如：请分析温度趋势...",disabled:b,rows:2}),e.jsx("div",{className:"ai-sidebar-input-toolbar",children:e.jsx("button",{className:"ai-sidebar-send",onClick:()=>h(l),disabled:!l.trim()||b,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]})})})]}),e.jsx("style",{children:`
        /* ===== AI Sidebar — 统一 ai-chatbox 风格 ===== */
        .ai-sidebar {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--cg-surface, var(--cg-surface));
          overflow: hidden;
          min-width: 0;
          width: 100%;
        }

        /* Header — 白色底，底部边框 */
        .ai-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--cg-border, var(--cg-border));
          background: var(--cg-surface, var(--cg-surface));
          min-height: 56px;
          height: 56px;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .ai-sidebar-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--cg-text, var(--cg-text));
        }
        .ai-sidebar-icon { color: #6366f1; }
        .ai-sidebar-actions { display: flex; gap: 6px; }
        .ai-sidebar-btn {
          border: 1px solid var(--cg-border, var(--cg-border));
          background: var(--cg-surface, var(--cg-surface));
          color: var(--cg-text, var(--cg-text));
          width: 32px;
          height: 32px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .ai-sidebar-btn:hover {
          background: var(--cg-bg);
          border-color: #d1d5db;
        }

        /* Context bar */
        .ai-sidebar-context {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--cg-bg);
          border-bottom: 1px solid var(--cg-border, var(--cg-border));
          font-size: 0.8125rem;
          flex-shrink: 0;
        }
        .ai-sidebar-context-label {
          color: var(--cg-text-muted);
          font-weight: 500;
        }
        .ai-sidebar-context-value {
          color: #6366f1;
          font-weight: 600;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.75rem;
          background: #eef2ff;
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 220px;
        }

        /* Messages */
        .ai-sidebar-messages {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 12px 12px 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 0;
          min-width: 0;
        }

        /* Welcome */
        .ai-sidebar-welcome {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }
        .ai-sidebar-welcome-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .ai-sidebar-welcome-text {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          margin-bottom: 1rem;
        }
        .ai-sidebar-suggestions {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .ai-sidebar-suggestion {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          font-size: 0.8125rem;
          color: var(--cg-text);
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
          line-height: 1.4;
        }
        .ai-sidebar-suggestion:hover {
          background: #eef2ff;
          border-color: #c7d2fe;
          color: #4f46e5;
        }
        .ai-sidebar-suggestion:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Message bubbles */
        .ai-sidebar-msg {
          display: flex;
          align-items: flex-start;
          min-width: 0;
          max-width: 100%;
          animation: aiFadeIn 0.2s ease-out;
        }
        @keyframes aiFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ai-sidebar-msg-avatar {
          display: inline-flex;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          flex-shrink: 0;
          background: linear-gradient(135deg, #e0e7ff 0%, #fae8ff 100%);
          border: 1px solid rgba(0, 0, 0, 0.06);
          margin-right: 6px;
          margin-top: 2px;
        }
        .ai-sidebar-msg--user .ai-sidebar-msg-avatar {
          background: linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%);
          border: 1px solid rgba(0, 0, 0, 0.08);
          margin-right: 0;
          margin-left: 6px;
        }
        .ai-sidebar-msg-body {
          flex: 1;
          min-width: 0;
        }
        .ai-sidebar-msg--user {
          flex-direction: row-reverse;
        }
        .ai-sidebar-msg--user .ai-sidebar-text {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          color: var(--cg-text);
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-left: auto;
          max-width: 85%;
        }
        .ai-sidebar-msg--assistant .ai-sidebar-text {
          background: var(--cg-bg, var(--cg-bg));
          border: none;
          color: var(--cg-text, var(--cg-text));
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.6;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .ai-sidebar-msg--assistant .ai-sidebar-text p {
          margin: 0.25rem 0;
        }
        .ai-sidebar-msg--assistant .ai-sidebar-text strong {
          font-weight: 600;
          color: var(--cg-primary, #2563eb);
        }
        .ai-sidebar-msg-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.5rem 0;
          font-size: 0.75rem;
          line-height: 1.45;
        }
        .ai-sidebar-msg-body th,
        .ai-sidebar-msg-body td {
          border: 1px solid var(--cg-border);
          padding: 0.35rem 0.5rem;
          text-align: left;
          vertical-align: top;
          word-break: break-word;
        }
        .ai-sidebar-msg-body th {
          background: var(--cg-bg);
          color: var(--cg-text);
          font-weight: 600;
        }
        .ai-sidebar-text,
        .ai-sidebar-summary-body,
        .ai-sidebar-collapsible-body {
          overflow-x: auto;
        }

        /* Collapsible sections */
        .ai-sidebar-collapsible {
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          margin-bottom: 0.5rem;
          overflow: hidden;
        }
        .ai-sidebar-collapsible-header {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.625rem;
          background: var(--cg-bg);
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cg-text-muted);
          border: none;
          width: 100%;
          text-align: left;
          transition: background 0.15s;
        }
        .ai-sidebar-collapsible-header:hover { background: var(--cg-bg); }
        .ai-sidebar-collapsible-body {
          padding: 0.5rem 0.625rem;
          font-size: 0.8125rem;
          border-top: 1px solid var(--cg-border);
        }

        /* Code block */
        .ai-sidebar-code {
          background: linear-gradient(135deg, var(--cg-text) 0%, #0f172a 100%);
          color: var(--cg-border);
          padding: 0.625rem;
          border-radius: 8px;
          font-size: 0.6875rem;
          line-height: 1.5;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
          margin: 0;
        }

        /* Number result */
        .ai-sidebar-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #6366f1;
          text-align: center;
          padding: 0.5rem;
          background: #eef2ff;
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }

        /* Chart */
        .ai-sidebar-chart {
          margin-bottom: 0.5rem;
        }

        /* Table */
        .ai-sidebar-table-wrap {
          overflow-x: auto;
          max-height: 200px;
          overflow-y: auto;
        }
        .ai-sidebar-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.6875rem;
        }
        .ai-sidebar-table th {
          background: var(--cg-bg);
          padding: 0.25rem 0.5rem;
          text-align: left;
          font-weight: 600;
          color: var(--cg-text-muted);
          border-bottom: 1px solid var(--cg-border);
          white-space: nowrap;
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .ai-sidebar-table td {
          padding: 0.2rem 0.5rem;
          border-bottom: 1px solid var(--cg-bg);
          color: var(--cg-text);
          white-space: nowrap;
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ai-sidebar-table tr:hover td { background: var(--cg-bg); }
        .ai-sidebar-more {
          text-align: center;
          font-size: 0.6875rem;
          color: var(--cg-text-muted);
          padding: 0.25rem;
        }

        /* Summary */
        .ai-sidebar-summary {
          background: var(--cg-bg);
          border: 1px solid #fde68a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 0.25rem;
        }
        .ai-sidebar-summary-header {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.625rem;
          background: #fef9c3;
          font-size: 0.75rem;
          font-weight: 600;
          color: #a16207;
        }
        .ai-sidebar-summary-body {
          padding: 0.5rem 0.625rem;
          font-size: 0.8125rem;
          line-height: 1.6;
          color: var(--cg-text);
        }
        .ai-sidebar-summary-body p { margin: 0.25rem 0; }

        /* Streaming indicator */
        .ai-sidebar-streaming {
          font-size: 0.75rem;
          color: #8b5cf6;
          padding: 0.25rem 0;
          animation: aiPulse 1.5s ease-in-out infinite;
        }
        @keyframes aiPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Computing wrapper */
        .ai-sidebar-computing { margin-bottom: 0.25rem; }

        /* Input area — 统一 Claude 风格 */
        .ai-sidebar-input {
          position: relative;
          margin: 8px 12px 12px;
          border: 1px solid var(--cg-border, var(--cg-border));
          border-radius: 12px;
          background: var(--cg-surface, var(--cg-surface));
          overflow: visible;
          transition: border-color 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .ai-sidebar-input:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }
        .ai-sidebar-textarea {
          width: 100%;
          border: none;
          outline: none;
          resize: none;
          padding: 12px 14px 4px;
          font-family: inherit;
          font-size: 0.9rem;
          line-height: 1.5;
          background: transparent;
          color: var(--cg-text);
          box-sizing: border-box;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
        .ai-sidebar-textarea:disabled { opacity: 0.6; }
        .ai-sidebar-input-toolbar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 4px 8px 8px;
        }
        .ai-sidebar-send {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: var(--cg-text);
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ai-sidebar-send:disabled {
          background: var(--cg-border);
          color: #9ca3af;
          cursor: default;
        }
      `})]})}function v({icon:c,title:x,defaultOpen:d=!1,children:o}){const[l,g]=n.useState(d);return e.jsxs("div",{className:"ai-sidebar-collapsible",children:[e.jsxs("button",{className:"ai-sidebar-collapsible-header",onClick:()=>g(!l),children:[e.jsx("span",{children:c}),e.jsx("span",{style:{flex:1},children:x}),l?e.jsx(I,{size:13}):e.jsx(T,{size:13})]}),l&&e.jsx("div",{className:"ai-sidebar-collapsible-body",children:o})]})}export{L as A};
