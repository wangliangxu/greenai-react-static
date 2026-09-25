import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{F as r,Gr as i,W as a,et as o,fi as s,hi as c,o as l}from"./ui-vendor-BJACYxZ2.js";import{a as u,i as d}from"./markdown-vendor-g6IVHhYp.js";import{a as f}from"./aiClient-CP9NE_wq.js";var p=e(t(),1),m=n(),h=[`请介绍这个数据集`,`数据有哪些变量？各自含义是什么？`,`统计各字段的缺失值情况`,`数据的时间和空间覆盖范围是什么？`,`计算主要数值字段的统计摘要`];function g({sourceName:e,onClose:t}){let[n,s]=(0,p.useState)([]),[c,g]=(0,p.useState)(``),[v,y]=(0,p.useState)(!1),[b,x]=(0,p.useState)(null),S=(0,p.useRef)(null),C=(0,p.useRef)(null);(0,p.useEffect)(()=>{s([]),x(null)},[e]),(0,p.useEffect)(()=>{S.current?.scrollIntoView({behavior:`smooth`})},[n]);let w=(0,p.useCallback)(async t=>{if(t.trim()&&!v){g(``),s(e=>[...e,{role:`user`,content:t}]),y(!0);try{let n={role:`assistant`,content:``,isStreaming:!0};s(e=>[...e,n]),await f({message:t,session_id:b,table_context:e,stream:!0},{onEvent:e=>{if(e.stage&&(n.currentStage=String(e.stage)),e.thinking_chunk&&(n.thinkingContent=(n.thinkingContent||``)+String(e.thinking_chunk)),e.summary_chunk&&(n.summaryContent=(n.summaryContent||``)+String(e.summary_chunk)),e.task_progress&&(n.taskProgress=e.task_progress),typeof e.answer==`string`&&e.task_index===void 0&&(n.content+=e.answer),e.pandasai_code){let t=typeof e.task_index==`number`?e.task_index:0;for(n.computingResults||=[];n.computingResults.length<=t;)n.computingResults.push({});n.computingResults[t].pandasaiCode=String(e.pandasai_code)}if(e.pandasai_type){let t=typeof e.task_index==`number`?e.task_index:0;for(n.computingResults||=[];n.computingResults.length<=t;)n.computingResults.push({});let r=n.computingResults[t];r.pandasaiType=String(e.pandasai_type),typeof e.chart_url==`string`&&(r.chartUrl=e.chart_url),e.dataframe&&(r.dataframe=e.dataframe),typeof e.value==`number`&&(r.numericValue=e.value),n.taskProgress&&(r.purpose=n.taskProgress.purpose)}if(typeof e.answer==`string`&&typeof e.task_index==`number`){let t=e.task_index;n.computingResults?.[t]&&(n.computingResults[t].answer=e.answer)}typeof e.session_id==`string`&&!b&&x(e.session_id),e.error&&(n.content+=`\n❌ ${String(e.error)}`),s(e=>{let t=[...e];return t[t.length-1]={...n},t})}}),n.isStreaming=!1,s(e=>{let t=[...e];return t[t.length-1]={...n},t})}catch(e){let t=e instanceof Error?e.message:`网络错误`;s(e=>[...e,{role:`assistant`,content:`❌ 请求失败: ${t}`}])}finally{y(!1)}}},[v,b,e]);return(0,m.jsxs)(`div`,{className:`ai-sidebar`,children:[(0,m.jsxs)(`div`,{className:`ai-sidebar-header`,children:[(0,m.jsxs)(`div`,{className:`ai-sidebar-title`,children:[(0,m.jsx)(o,{size:16,className:`ai-sidebar-icon`}),(0,m.jsx)(`span`,{children:`AI 智能分析`})]}),(0,m.jsxs)(`div`,{className:`ai-sidebar-actions`,children:[(0,m.jsx)(`button`,{className:`ai-sidebar-btn`,onClick:()=>{s([]),x(null)},title:`清空对话`,children:(0,m.jsx)(r,{size:15})}),(0,m.jsx)(`button`,{className:`ai-sidebar-btn`,onClick:t,title:`关闭面板`,children:(0,m.jsx)(l,{size:16})})]})]}),(0,m.jsxs)(`div`,{className:`ai-sidebar-context`,children:[(0,m.jsx)(`span`,{className:`ai-sidebar-context-label`,children:`数据源`}),(0,m.jsx)(`span`,{className:`ai-sidebar-context-value`,children:e})]}),(0,m.jsxs)(`div`,{className:`ai-sidebar-messages`,children:[n.length===0&&(0,m.jsxs)(`div`,{className:`ai-sidebar-welcome`,children:[(0,m.jsx)(`div`,{className:`ai-sidebar-welcome-icon`,children:`🔬`}),(0,m.jsx)(`div`,{className:`ai-sidebar-welcome-text`,children:`我可以帮你分析这个数据集，试试下面的问题：`}),(0,m.jsx)(`div`,{className:`ai-sidebar-suggestions`,children:h.map((e,t)=>(0,m.jsx)(`button`,{className:`ai-sidebar-suggestion`,onClick:()=>w(e),disabled:v,children:e},t))})]}),n.map((e,t)=>(0,m.jsxs)(`div`,{className:`ai-sidebar-msg ai-sidebar-msg--${e.role}`,children:[(0,m.jsx)(`div`,{className:`ai-sidebar-msg-avatar`,children:e.role===`user`?`👤`:`🤖`}),(0,m.jsxs)(`div`,{className:`ai-sidebar-msg-body`,children:[e.thinkingContent&&(0,m.jsx)(_,{icon:`💭`,title:`分析思路`,defaultOpen:!1,children:(0,m.jsx)(u,{remarkPlugins:[d],children:e.thinkingContent.replace(/```json[\s\S]*?```/g,``).trim()})}),e.computingResults?.map((t,n)=>!t.pandasaiType||t.pandasaiType===`skip`?null:(0,m.jsxs)(`div`,{className:`ai-sidebar-computing`,children:[t.pandasaiCode&&(0,m.jsx)(_,{icon:(0,m.jsx)(i,{size:13}),title:t.purpose||`代码 ${(e.computingResults?.length??0)>1?n+1:``}`,defaultOpen:!1,children:(0,m.jsx)(`pre`,{className:`ai-sidebar-code`,children:(0,m.jsx)(`code`,{children:t.pandasaiCode})})}),t.pandasaiType===`number`&&t.numericValue!==void 0&&(0,m.jsx)(`div`,{className:`ai-sidebar-number`,children:t.numericValue}),t.chartUrl&&(0,m.jsx)(`div`,{className:`ai-sidebar-chart`,children:(0,m.jsx)(`img`,{src:t.chartUrl,alt:`图表`,style:{maxWidth:`100%`,borderRadius:`6px`}})}),t.dataframe&&t.dataframe.data?.length>0&&(0,m.jsx)(_,{icon:(0,m.jsx)(a,{size:13}),title:`数据表 (${t.dataframe.total_rows} 行)`,defaultOpen:!0,children:(0,m.jsxs)(`div`,{className:`ai-sidebar-table-wrap`,children:[(0,m.jsxs)(`table`,{className:`ai-sidebar-table`,children:[(0,m.jsx)(`thead`,{children:(0,m.jsx)(`tr`,{children:t.dataframe.columns.map(e=>(0,m.jsx)(`th`,{children:e},e))})}),(0,m.jsx)(`tbody`,{children:t.dataframe.data.slice(0,15).map((e,n)=>(0,m.jsx)(`tr`,{children:t.dataframe.columns.map(t=>(0,m.jsx)(`td`,{children:String(e[t]??``)},t))},n))})]}),t.dataframe.total_rows>15&&(0,m.jsxs)(`div`,{className:`ai-sidebar-more`,children:[`...还有 `,t.dataframe.total_rows-15,` 行`]})]})}),t.pandasaiType===`text`&&t.answer&&(0,m.jsx)(`div`,{className:`ai-sidebar-text`,children:(0,m.jsx)(u,{remarkPlugins:[d],children:t.answer})})]},n)),e.summaryContent&&(0,m.jsxs)(`div`,{className:`ai-sidebar-summary`,children:[(0,m.jsxs)(`div`,{className:`ai-sidebar-summary-header`,children:[(0,m.jsx)(`span`,{children:`📝`}),` `,(0,m.jsx)(`span`,{children:`分析结论`})]}),(0,m.jsx)(`div`,{className:`ai-sidebar-summary-body`,children:(0,m.jsx)(u,{remarkPlugins:[d],children:e.summaryContent})})]}),e.content&&!e.thinkingContent&&!e.summaryContent&&(0,m.jsx)(`div`,{className:`ai-sidebar-text`,children:e.role===`assistant`?(0,m.jsx)(u,{remarkPlugins:[d],children:e.content}):e.content}),e.isStreaming&&e.currentStage&&(0,m.jsxs)(`div`,{className:`ai-sidebar-streaming`,children:[e.currentStage===`thinking`&&`💭 正在分析思路...`,e.currentStage===`computing`&&(e.taskProgress&&e.taskProgress.total>1?`🐍 执行子任务 ${e.taskProgress.index+1}/${e.taskProgress.total}...`:`🐍 正在计算...`),e.currentStage===`summary`&&`📝 正在生成结论...`]})]})]},t)),v&&n.length>0&&!n[n.length-1]?.isStreaming&&(0,m.jsxs)(`div`,{className:`ai-sidebar-msg ai-sidebar-msg--assistant`,children:[(0,m.jsx)(`div`,{className:`ai-sidebar-msg-avatar`,children:`🤖`}),(0,m.jsx)(`div`,{className:`ai-sidebar-msg-body`,children:(0,m.jsx)(`div`,{className:`ai-sidebar-streaming`,children:`⏳ 正在分析中...`})})]}),(0,m.jsx)(`div`,{ref:S})]}),(0,m.jsxs)(`div`,{className:`ai-sidebar-input`,children:[(0,m.jsx)(`textarea`,{ref:C,className:`ai-sidebar-textarea`,value:c,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),w(c))},placeholder:`输入问题，如：请分析温度趋势...`,disabled:v,rows:2}),(0,m.jsx)(`div`,{className:`ai-sidebar-input-toolbar`,children:(0,m.jsx)(`button`,{className:`ai-sidebar-send`,onClick:()=>w(c),disabled:!c.trim()||v,children:(0,m.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,m.jsx)(`line`,{x1:`12`,y1:`19`,x2:`12`,y2:`5`}),(0,m.jsx)(`polyline`,{points:`5 12 12 5 19 12`})]})})})]}),(0,m.jsx)(`style`,{children:`
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
      `})]})}function _({icon:e,title:t,defaultOpen:n=!1,children:r}){let[i,a]=(0,p.useState)(n);return(0,m.jsxs)(`div`,{className:`ai-sidebar-collapsible`,children:[(0,m.jsxs)(`button`,{className:`ai-sidebar-collapsible-header`,onClick:()=>a(!i),children:[(0,m.jsx)(`span`,{children:e}),(0,m.jsx)(`span`,{style:{flex:1},children:t}),i?(0,m.jsx)(s,{size:13}):(0,m.jsx)(c,{size:13})]}),i&&(0,m.jsx)(`div`,{className:`ai-sidebar-collapsible-body`,children:r})]})}export{g as t};