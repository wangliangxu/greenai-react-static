import{r as p,j as e}from"./react-vendor-DZdvhec1.js";import{E as M,aw as U,ax as Q}from"./index-CVWhNe1A.js";import{v as T,A as D,bn as E,a_ as L,ah as $,U as R}from"./ui-vendor-CkboYbyr.js";import{useParams as B,useNavigate as F}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";function G(s){return s.map((x,b)=>({...x,order:x.selection_sort_order??x.sort_order??b}))}function Ue(){const{unitId:s}=B(),x=F(),{data:b}=M(s),{data:y=[],isLoading:N,refetch:k}=U(s),u=Q(),v=p.useMemo(()=>G(y),[y]),[z,_]=p.useState(null),[j,I]=p.useState(null),m=z??v,n=p.useMemo(()=>[...m].sort((a,r)=>a.selected!==r.selected?a.selected?-1:1:a.order!==r.order?a.order-r.order:a.sort_order!==r.sort_order?a.sort_order-r.sort_order:a.action_key.localeCompare(r.action_key)),[m]),A=p.useMemo(()=>m.filter(a=>a.selected).length,[m]),l=p.useMemo(()=>n.find(a=>a.preset_action_id===j)??n[0],[j,n]),C=(a,r)=>{_(i=>{const d=[...i??v],h=d.filter(o=>o.selected),g=r?h.length:0;return d.map(o=>o.preset_action_id!==a?o:{...o,selected:r,selection_enabled:r,order:r?g:o.order})})},w=(a,r)=>{_(i=>{const d=[...i??v],h=[...d].filter(t=>t.selected).sort((t,q)=>t.order-q.order),g=h.findIndex(t=>t.preset_action_id===a),o=g+r;if(g===-1||o<0||o>=h.length)return d;const f=[...h],[O]=f.splice(g,1);f.splice(o,0,O);const P=new Map(f.map((t,q)=>[t.preset_action_id,q]));return d.map(t=>t.selected?{...t,order:P.get(t.preset_action_id)??t.order}:t)})},S=async()=>{if(!s)return;const a=[...m].filter(r=>r.selected).sort((r,i)=>r.order-i.order).map((r,i)=>({preset_action_id:r.preset_action_id,enabled:!0,sort_order:i}));try{await u.mutateAsync({unitId:s,items:a}),_(null),alert("教师侧 AI 快捷按钮选择已保存"),await k()}catch(r){console.error("保存教师侧 AI 快捷按钮选择失败",r),alert("保存失败，请稍后重试")}};return N?e.jsxs("div",{className:"page-container teacher-aiqa-state",children:[e.jsx(T,{size:24,className:"spinner"}),e.jsx("span",{children:"正在加载 AI 快捷按钮预设..."})]}):e.jsxs("div",{className:"page-container teacher-aiqa-page",children:[e.jsxs("div",{className:"teacher-aiqa-toolbar",children:[e.jsxs("div",{className:"teacher-aiqa-toolbar__left",children:[e.jsxs("button",{type:"button",className:"toolbar-btn",onClick:()=>x(s?`/teacher/course/${s}`:"/teacher/course"),children:[e.jsx(D,{size:16}),e.jsx("span",{children:"返回章节页"})]}),e.jsxs("div",{className:"teacher-aiqa-toolbar__title",children:[e.jsxs("h1",{children:[b?.title||"本单元"," - AI 快捷按钮选择"]}),e.jsx("p",{children:"管理员负责预设按钮模板，教师只需选择本单元给学生展示哪些按钮以及显示顺序。"})]})]}),e.jsxs("button",{type:"button",className:"toolbar-btn toolbar-btn-primary",onClick:()=>void S(),disabled:u.isPending,children:[e.jsx(E,{size:16}),e.jsx("span",{children:u.isPending?"保存中...":"保存选择"})]})]}),e.jsxs("div",{className:"teacher-aiqa-summary",children:[e.jsxs("div",{className:"teacher-aiqa-summary__card",children:[e.jsx("div",{className:"teacher-aiqa-summary__label",children:"可选预设"}),e.jsx("div",{className:"teacher-aiqa-summary__value",children:n.length})]}),e.jsxs("div",{className:"teacher-aiqa-summary__card",children:[e.jsx("div",{className:"teacher-aiqa-summary__label",children:"已选按钮"}),e.jsx("div",{className:"teacher-aiqa-summary__value",children:A})]})]}),n.length===0?e.jsx("div",{className:"teacher-aiqa-empty",children:"当前单元还没有管理员预设按钮，请先到管理员后台配置。"}):e.jsxs("div",{className:"teacher-aiqa-layout",children:[e.jsxs("section",{className:"teacher-aiqa-panel",children:[e.jsxs("div",{className:"teacher-aiqa-panel__header",children:[e.jsx("h2",{children:"预设列表"}),e.jsx("p",{children:"勾选表示该按钮会出现在学生侧边栏；未勾选则不会展示。"})]}),e.jsx("div",{className:"teacher-aiqa-list",children:n.map(a=>{const r=n.filter(c=>c.selected),i=r.findIndex(c=>c.preset_action_id===a.preset_action_id);return e.jsxs("article",{className:`teacher-aiqa-card ${l?.preset_action_id===a.preset_action_id?"teacher-aiqa-card--active":""}`,onClick:()=>I(a.preset_action_id),children:[e.jsxs("div",{className:"teacher-aiqa-card__header",children:[e.jsxs("label",{className:"teacher-aiqa-checkbox",onClick:c=>c.stopPropagation(),children:[e.jsx("input",{type:"checkbox",checked:a.selected,onChange:c=>C(a.preset_action_id,c.target.checked)}),e.jsx("span",{children:a.label})]}),e.jsxs("div",{className:"teacher-aiqa-card__actions",onClick:c=>c.stopPropagation(),children:[e.jsx("button",{type:"button",className:"teacher-aiqa-move-btn",disabled:!a.selected||i<=0,onClick:()=>w(a.preset_action_id,-1),children:e.jsx(L,{size:14})}),e.jsx("button",{type:"button",className:"teacher-aiqa-move-btn",disabled:!a.selected||i===-1||i>=r.length-1,onClick:()=>w(a.preset_action_id,1),children:e.jsx($,{size:14})})]})]}),e.jsxs("div",{className:"teacher-aiqa-card__meta",children:[e.jsx("span",{className:"teacher-aiqa-tag",children:a.action_key}),a.is_system_default&&e.jsx("span",{className:"teacher-aiqa-tag teacher-aiqa-tag--system",children:"系统默认"}),a.selected&&e.jsxs("span",{className:"teacher-aiqa-tag teacher-aiqa-tag--selected",children:["已选第 ",a.order+1," 位"]})]}),e.jsx("p",{className:"teacher-aiqa-card__text",children:a.display_text||a.label})]},a.preset_action_id)})})]}),e.jsxs("aside",{className:"teacher-aiqa-panel teacher-aiqa-panel--preview",children:[e.jsxs("div",{className:"teacher-aiqa-panel__header",children:[e.jsx("h2",{children:"预设预览"}),e.jsx("p",{children:"教师不能修改 Prompt，只能从管理员提供的预设中进行选择与排序。"})]}),l?e.jsxs("div",{className:"teacher-aiqa-preview",children:[e.jsxs("div",{className:"teacher-aiqa-preview__section",children:[e.jsx("div",{className:"teacher-aiqa-preview__label",children:"按钮预览"}),e.jsxs("button",{type:"button",className:"teacher-aiqa-preview__chip",children:[e.jsx(R,{size:14}),e.jsx("span",{children:l.label})]})]}),e.jsxs("div",{className:"teacher-aiqa-preview__section",children:[e.jsx("div",{className:"teacher-aiqa-preview__label",children:"学生显示文案"}),e.jsx("div",{className:"teacher-aiqa-preview__bubble",children:l.display_text||l.label})]}),e.jsxs("div",{className:"teacher-aiqa-preview__section",children:[e.jsx("div",{className:"teacher-aiqa-preview__label",children:"Prompt 预览"}),e.jsx("pre",{className:"teacher-aiqa-preview__prompt",children:l.prompt})]})]}):null]})]}),e.jsx("style",{children:`
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
      `})]})}export{Ue as TeacherUnitAIQuickActionSettings};
