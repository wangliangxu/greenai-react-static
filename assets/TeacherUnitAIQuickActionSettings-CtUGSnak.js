import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,u as i}from"./router-vendor-C4C_6Mfu.js";import{bn as a,et as o,fi as s,hi as c,ra as l,xt as u}from"./ui-vendor-BJACYxZ2.js";import{Gt as d,Xt as f,qt as p}from"./index-CE3QzMvF.js";var m=e(t(),1),h=n();function g(e){return e.map((e,t)=>({...e,order:e.selection_sort_order??e.sort_order??t}))}function _(){let{unitId:e}=r(),t=i(),{data:n}=f(e),{data:_=[],isLoading:v,refetch:y}=p(e),b=d(),x=(0,m.useMemo)(()=>g(_),[_]),[S,C]=(0,m.useState)(null),[w,T]=(0,m.useState)(null),E=S??x,D=(0,m.useMemo)(()=>[...E].sort((e,t)=>e.selected===t.selected?e.order===t.order?e.sort_order===t.sort_order?e.action_key.localeCompare(t.action_key):e.sort_order-t.sort_order:e.order-t.order:e.selected?-1:1),[E]),O=(0,m.useMemo)(()=>E.filter(e=>e.selected).length,[E]),k=(0,m.useMemo)(()=>D.find(e=>e.preset_action_id===w)??D[0],[w,D]),A=(e,t)=>{C(n=>{let r=[...n??x],i=r.filter(e=>e.selected),a=t?i.length:0;return r.map(n=>n.preset_action_id===e?{...n,selected:t,selection_enabled:t,order:t?a:n.order}:n)})},j=(e,t)=>{C(n=>{let r=[...n??x],i=[...r].filter(e=>e.selected).sort((e,t)=>e.order-t.order),a=i.findIndex(t=>t.preset_action_id===e),o=a+t;if(a===-1||o<0||o>=i.length)return r;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c);let l=new Map(s.map((e,t)=>[e.preset_action_id,t]));return r.map(e=>e.selected?{...e,order:l.get(e.preset_action_id)??e.order}:e)})},M=async()=>{if(!e)return;let t=[...E].filter(e=>e.selected).sort((e,t)=>e.order-t.order).map((e,t)=>({preset_action_id:e.preset_action_id,enabled:!0,sort_order:t}));try{await b.mutateAsync({unitId:e,items:t}),C(null),alert(`教师侧 AI 快捷按钮选择已保存`),await y()}catch(e){console.error(`保存教师侧 AI 快捷按钮选择失败`,e),alert(`保存失败，请稍后重试`)}};return v?(0,h.jsxs)(`div`,{className:`page-container teacher-aiqa-state`,children:[(0,h.jsx)(a,{size:24,className:`spinner`}),(0,h.jsx)(`span`,{children:`正在加载 AI 快捷按钮预设...`})]}):(0,h.jsxs)(`div`,{className:`page-container teacher-aiqa-page`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-toolbar`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-toolbar__left`,children:[(0,h.jsxs)(`button`,{type:`button`,className:`toolbar-btn`,onClick:()=>t(e?`/teacher/course/${e}`:`/teacher/course`),children:[(0,h.jsx)(l,{size:16}),(0,h.jsx)(`span`,{children:`返回章节页`})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-toolbar__title`,children:[(0,h.jsxs)(`h1`,{children:[n?.title||`本单元`,` - AI 快捷按钮选择`]}),(0,h.jsx)(`p`,{children:`管理员负责预设按钮模板，教师只需选择本单元给学生展示哪些按钮以及显示顺序。`})]})]}),(0,h.jsxs)(`button`,{type:`button`,className:`toolbar-btn toolbar-btn-primary`,onClick:()=>void M(),disabled:b.isPending,children:[(0,h.jsx)(u,{size:16}),(0,h.jsx)(`span`,{children:b.isPending?`保存中...`:`保存选择`})]})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-summary`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-summary__card`,children:[(0,h.jsx)(`div`,{className:`teacher-aiqa-summary__label`,children:`可选预设`}),(0,h.jsx)(`div`,{className:`teacher-aiqa-summary__value`,children:D.length})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-summary__card`,children:[(0,h.jsx)(`div`,{className:`teacher-aiqa-summary__label`,children:`已选按钮`}),(0,h.jsx)(`div`,{className:`teacher-aiqa-summary__value`,children:O})]})]}),D.length===0?(0,h.jsx)(`div`,{className:`teacher-aiqa-empty`,children:`当前单元还没有管理员预设按钮，请先到管理员后台配置。`}):(0,h.jsxs)(`div`,{className:`teacher-aiqa-layout`,children:[(0,h.jsxs)(`section`,{className:`teacher-aiqa-panel`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-panel__header`,children:[(0,h.jsx)(`h2`,{children:`预设列表`}),(0,h.jsx)(`p`,{children:`勾选表示该按钮会出现在学生侧边栏；未勾选则不会展示。`})]}),(0,h.jsx)(`div`,{className:`teacher-aiqa-list`,children:D.map(e=>{let t=D.filter(e=>e.selected),n=t.findIndex(t=>t.preset_action_id===e.preset_action_id);return(0,h.jsxs)(`article`,{className:`teacher-aiqa-card ${k?.preset_action_id===e.preset_action_id?`teacher-aiqa-card--active`:``}`,onClick:()=>T(e.preset_action_id),children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-card__header`,children:[(0,h.jsxs)(`label`,{className:`teacher-aiqa-checkbox`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`input`,{type:`checkbox`,checked:e.selected,onChange:t=>A(e.preset_action_id,t.target.checked)}),(0,h.jsx)(`span`,{children:e.label})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-card__actions`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`button`,{type:`button`,className:`teacher-aiqa-move-btn`,disabled:!e.selected||n<=0,onClick:()=>j(e.preset_action_id,-1),children:(0,h.jsx)(s,{size:14})}),(0,h.jsx)(`button`,{type:`button`,className:`teacher-aiqa-move-btn`,disabled:!e.selected||n===-1||n>=t.length-1,onClick:()=>j(e.preset_action_id,1),children:(0,h.jsx)(c,{size:14})})]})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-card__meta`,children:[(0,h.jsx)(`span`,{className:`teacher-aiqa-tag`,children:e.action_key}),e.is_system_default&&(0,h.jsx)(`span`,{className:`teacher-aiqa-tag teacher-aiqa-tag--system`,children:`系统默认`}),e.selected&&(0,h.jsxs)(`span`,{className:`teacher-aiqa-tag teacher-aiqa-tag--selected`,children:[`已选第 `,e.order+1,` 位`]})]}),(0,h.jsx)(`p`,{className:`teacher-aiqa-card__text`,children:e.display_text||e.label})]},e.preset_action_id)})})]}),(0,h.jsxs)(`aside`,{className:`teacher-aiqa-panel teacher-aiqa-panel--preview`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-panel__header`,children:[(0,h.jsx)(`h2`,{children:`预设预览`}),(0,h.jsx)(`p`,{children:`教师不能修改 Prompt，只能从管理员提供的预设中进行选择与排序。`})]}),k?(0,h.jsxs)(`div`,{className:`teacher-aiqa-preview`,children:[(0,h.jsxs)(`div`,{className:`teacher-aiqa-preview__section`,children:[(0,h.jsx)(`div`,{className:`teacher-aiqa-preview__label`,children:`按钮预览`}),(0,h.jsxs)(`button`,{type:`button`,className:`teacher-aiqa-preview__chip`,children:[(0,h.jsx)(o,{size:14}),(0,h.jsx)(`span`,{children:k.label})]})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-preview__section`,children:[(0,h.jsx)(`div`,{className:`teacher-aiqa-preview__label`,children:`学生显示文案`}),(0,h.jsx)(`div`,{className:`teacher-aiqa-preview__bubble`,children:k.display_text||k.label})]}),(0,h.jsxs)(`div`,{className:`teacher-aiqa-preview__section`,children:[(0,h.jsx)(`div`,{className:`teacher-aiqa-preview__label`,children:`Prompt 预览`}),(0,h.jsx)(`pre`,{className:`teacher-aiqa-preview__prompt`,children:k.prompt})]})]}):null]})]}),(0,h.jsx)(`style`,{children:`
        .teacher-aiqa-page {
          padding: 24px;
          background: var(--cg-bg);
          min-height: calc(100vh - 64px);
        }

        .teacher-aiqa-state {
          min-height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--cg-text-muted);
        }

        .teacher-aiqa-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 14px;
          padding: 12px;
        }

        .teacher-aiqa-page .toolbar-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .teacher-aiqa-page .toolbar-btn:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: var(--cg-text);
          border-color: color-mix(in srgb, var(--cg-border) 55%, var(--admin-primary) 45%);
        }

        .teacher-aiqa-page .toolbar-btn-primary {
          background: var(--admin-primary);
          border-color: var(--admin-primary);
          color: #fff;
        }

        .teacher-aiqa-page .toolbar-btn-primary:hover {
          background: color-mix(in srgb, var(--admin-primary) 86%, #000 14%);
          color: #fff;
        }

        .teacher-aiqa-page .toolbar-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .teacher-aiqa-toolbar__left {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }

        .teacher-aiqa-toolbar__title h1 {
          margin: 0 0 6px 0;
          font-size: 28px;
          color: var(--cg-text);
        }

        .teacher-aiqa-toolbar__title p {
          margin: 0;
          color: var(--cg-text-muted);
          font-size: 14px;
          line-height: 1.6;
          max-width: 860px;
        }

        .teacher-aiqa-summary {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .teacher-aiqa-summary__card {
          min-width: 160px;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 16px;
          padding: 16px 18px;
        }

        .teacher-aiqa-summary__label {
          color: var(--cg-text-muted);
          font-size: 13px;
          margin-bottom: 8px;
        }

        .teacher-aiqa-summary__value {
          color: var(--cg-text);
          font-size: 24px;
          font-weight: 700;
        }

        .teacher-aiqa-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(320px, 0.9fr);
          gap: 20px;
        }

        .teacher-aiqa-panel {
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
        }

        .teacher-aiqa-panel__header {
          margin-bottom: 16px;
        }

        .teacher-aiqa-panel__header h2 {
          margin: 0 0 6px 0;
          color: var(--cg-text);
          font-size: 18px;
        }

        .teacher-aiqa-panel__header p {
          margin: 0;
          color: var(--cg-text-muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .teacher-aiqa-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .teacher-aiqa-card {
          border: 1px solid var(--cg-border);
          border-radius: 14px;
          padding: 16px;
          cursor: pointer;
          background: var(--cg-bg);
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .teacher-aiqa-card:hover,
        .teacher-aiqa-card--active {
          border-color: color-mix(in srgb, var(--cg-border) 45%, var(--admin-primary) 55%);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.08);
        }

        .teacher-aiqa-card__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .teacher-aiqa-checkbox {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--cg-text);
          cursor: pointer;
        }

        .teacher-aiqa-card__actions {
          display: inline-flex;
          gap: 8px;
        }

        .teacher-aiqa-move-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          background: var(--cg-surface);
          cursor: pointer;
          color: var(--cg-text-muted);
        }

        .teacher-aiqa-move-btn:hover:not(:disabled) {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: var(--cg-text);
        }

        .teacher-aiqa-move-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .teacher-aiqa-card__meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .teacher-aiqa-tag {
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--cg-surface) 88%, var(--cg-text-muted) 12%);
          color: var(--cg-text-muted);
        }

        .teacher-aiqa-tag--system {
          background: color-mix(in srgb, var(--cg-surface) 84%, #22c55e 16%);
          color: color-mix(in srgb, var(--cg-text) 76%, #22c55e 24%);
        }

        .teacher-aiqa-tag--selected {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: color-mix(in srgb, var(--cg-text) 76%, var(--admin-primary) 24%);
        }

        .teacher-aiqa-card__text {
          margin: 0;
          color: var(--cg-text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .teacher-aiqa-preview {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .teacher-aiqa-preview__section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .teacher-aiqa-preview__label {
          font-size: 13px;
          font-weight: 600;
          color: var(--cg-text);
        }

        .teacher-aiqa-preview__chip {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid color-mix(in srgb, var(--cg-border) 55%, var(--admin-primary) 45%);
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: color-mix(in srgb, var(--cg-text) 76%, var(--admin-primary) 24%);
          border-radius: 999px;
          padding: 8px 12px;
        }

        .teacher-aiqa-preview__bubble {
          border: 1px solid var(--cg-border);
          border-radius: 14px;
          padding: 14px 16px;
          color: var(--cg-text);
          background: var(--cg-bg);
        }

        .teacher-aiqa-preview__prompt {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
          background: color-mix(in srgb, var(--cg-bg) 82%, #020617 18%);
          color: var(--cg-text);
          border: 1px solid var(--cg-border);
          border-radius: 12px;
          padding: 14px;
          font-size: 13px;
          line-height: 1.6;
          min-height: 140px;
        }

        .teacher-aiqa-empty {
          background: var(--cg-surface);
          border: 1px dashed var(--cg-border);
          border-radius: 18px;
          padding: 32px;
          text-align: center;
          color: var(--cg-text-muted);
        }

        @media (max-width: 1080px) {
          .teacher-aiqa-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{_ as TeacherUnitAIQuickActionSettings};