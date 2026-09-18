import{r as d,j as e}from"./react-vendor-DZdvhec1.js";import{aW as W,af as oe,b4 as X,b5 as ce,b6 as de,b7 as me,aC as pe,aD as xe}from"./index-DEf65DpF.js";import{A as ue,T,a as L}from"./AdminToolbar-r8gKKq_M.js";import"./ToolbarSelect-DQhv_JzV.js";import{A as be}from"./AdminSidebar-BUNbylSs.js";import{A as ge}from"./AdminPageLayout-C-3xdruj.js";/* empty css                        */import{aj as he,W as fe,aU as ve,c9 as je,ab as ye,s as k,n as Ne,o as ke,r as H,X as j,E as q,az as J,bA as we,bo as Y,cp as Ce}from"./ui-vendor-tV6DikQD.js";import{useNavigate as ze}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./useResizableSidebar-D2sNFezQ.js";const w=[{id:"basics",label:"认知与启蒙",icon:he,color:"var(--admin-primary)"},{id:"intermediate",label:"方法与工具",icon:fe,color:"var(--admin-success)"},{id:"advanced",label:"实践与探究",icon:ve,color:"var(--admin-warning)"}],C=[{id:"temperature",label:"气温观测"},{id:"precipitation",label:"降水观测"},{id:"humidity",label:"湿度观测"},{id:"wind",label:"风力观测"},{id:"cloud",label:"云量观测"},{id:"climate",label:"气候认知"},{id:"paleoclimate",label:"古气候探索"},{id:"system",label:"气候系统"},{id:"greenhouse",label:"温室效应"},{id:"carbon",label:"碳循环"},{id:"emission",label:"排放分析"},{id:"glacier",label:"冰川冰盖"},{id:"sea",label:"海洋变化"},{id:"ecosystem",label:"生态影响"},{id:"adaptation",label:"适应措施"},{id:"mitigation",label:"减缓措施"},{id:"action",label:"低碳行动"},{id:"diy",label:"DIY制作"},{id:"simulation",label:"模拟实验"},{id:"visualization",label:"数据可视化"},{id:"calculator",label:"计算工具"},{id:"recorder",label:"记录工具"},{id:"analyzer",label:"分析工具"}];function B(a){return w.find(n=>n.id===a)}function St(){const a=ze(),{data:n,isLoading:r,refetch:s}=W(),{data:m}=W(void 0,void 0,"deleted"),{data:l}=oe(),o=X(),g=ce(),[p,y]=d.useState(null),[u,h]=d.useState(null),[f,c]=d.useState(!1),[V,Pe]=d.useState(new Set),[P,M]=d.useState(null),[K,A]=d.useState(!1),[D,S]=d.useState(null),[_,E]=d.useState("list"),[Q,Z]=d.useState(280),R=d.useMemo(()=>{if(!n)return{};const t={};for(const i of w)t[i.id]=n.filter(x=>x.module===i.id).length;return t},[n]),U=d.useMemo(()=>{if(!n)return{};const t={};for(const i of w){t[i.id]={};const x=n.filter(v=>v.module===i.id);for(const v of x)v.theme&&(t[i.id][v.theme]=(t[i.id][v.theme]||0)+1)}return t},[n]),z=t=>{y(t),h(null),c(!1)},ee=(t,i)=>{y(t),h(i),c(!1)},te=()=>{y(null),h(null),c(!0)},N=d.useMemo(()=>f?m||[]:n?n.filter(t=>!(p&&t.module!==p||u&&t.theme!==u)):[],[n,m,p,u,f]);d.useMemo(()=>{const t={};for(const i of N){const x=i.id.substring(0,10);t[x]||(t[x]=[]),t[x].push(i)}return Object.entries(t).sort(([i],[x])=>i.localeCompare(x))},[N]);const ae=async t=>{if(confirm(`确定要将工具 "${t.title}" 移入回收站吗？之后可以在回收站中恢复。`))try{await g.mutateAsync({appId:t.id})}catch{alert("删除失败")}},F=async t=>{if(confirm(`确定要恢复工具 "${t.title}" 吗？`))try{await o.mutateAsync({appId:t.id,data:{status:"active"}}),await s()}catch{alert("恢复失败")}},$=async t=>{if(confirm(`确定要彻底删除工具 "${t.title}" 吗？此操作不可恢复。`))try{await g.mutateAsync({appId:t.id,hard:!0})}catch{alert("彻底删除失败")}},se=d.useMemo(()=>{const t=[{id:"all",label:"全部工具",icon:e.jsx(je,{size:16}),count:n?.length||0,onClick:()=>z(null)}];for(const i of w){const x=i.icon,v=U[i.id]||{},O=Object.entries(v).sort(([,b],[,I])=>I-b).map(([b,I])=>({...C.find(le=>le.id===b),id:b,count:I})).filter(b=>b.label);t.push({id:i.id,label:i.label,icon:e.jsx(x,{size:16,style:{color:i.color}}),count:R[i.id]||0,expandable:O.length>0,defaultExpanded:!1,onClick:()=>z(i.id),children:O.map(b=>({id:`${i.id}_${b.id}`,label:b.label||b.id,icon:e.jsx(ye,{size:14}),count:b.count,onClick:()=>ee(i.id,b.id)}))})}return t.push({id:"trash",label:"回收站",icon:e.jsx(k,{size:16,style:{color:"var(--cg-text-muted)"}}),count:m?.length||0,onClick:te}),t},[n,m,R,U]),ie=f?"trash":u&&p?`${p}_${u}`:p||"all",re=e.jsx(ue,{shortcuts:{refresh:()=>s(),create:()=>A(!0)},leftActions:e.jsxs(e.Fragment,{children:[e.jsx(T,{icon:e.jsx(H,{size:18}),label:"新建应用",variant:"primary",onClick:()=>A(!0)}),e.jsx(L,{}),(p||u)&&e.jsxs(e.Fragment,{children:[p&&e.jsxs("span",{style:{fontSize:"14px",padding:"4px 8px",background:"var(--admin-primary)",color:"white",borderRadius:"var(--admin-radius-sm)",display:"flex",alignItems:"center",gap:"4px",marginRight:"8px"},children:[w.find(t=>t.id===p)?.label,e.jsx("button",{onClick:()=>z(null),style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:0,display:"flex",alignItems:"center"},children:e.jsx(j,{size:14})})]}),u&&e.jsxs("span",{style:{fontSize:"14px",padding:"4px 8px",background:"var(--admin-secondary)",color:"white",borderRadius:"var(--admin-radius-sm)",display:"flex",alignItems:"center",gap:"4px",marginRight:"8px"},children:[C.find(t=>t.id===u)?.label,e.jsx("button",{onClick:()=>h(null),style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:0,display:"flex",alignItems:"center"},children:e.jsx(j,{size:14})})]}),p&&u&&e.jsxs("button",{onClick:()=>{z(null),h(null)},style:{fontSize:"13px",padding:"4px 8px",background:"var(--admin-bg-tertiary)",color:"var(--admin-text-secondary)",border:"1px solid var(--admin-border-color)",borderRadius:"var(--admin-radius-sm)",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(j,{size:12}),"清除全部"]}),e.jsx(L,{})]})]}),rightActions:e.jsxs(e.Fragment,{children:[e.jsx(T,{icon:e.jsx(Ne,{size:18}),onClick:()=>E("card"),variant:_==="card"?"primary":"default",title:"卡片视图"}),e.jsx(T,{icon:e.jsx(ke,{size:18}),onClick:()=>E("list"),variant:_==="list"?"primary":"default",title:"列表视图"})]})}),ne=e.jsx(be,{header:{title:"目录",count:n?.length||0},items:se,selectedId:ie,position:"right",variant:"tree",resizable:!0,width:Q,onWidthChange:Z,collapsible:!0});return e.jsxs(ge,{toolbar:re,sidebar:ne,children:[r?e.jsx("div",{className:"loading",children:"加载中..."}):N.length>0?_==="card"?e.jsx("div",{className:"app-card-grid",children:N.map(t=>{const i=B(t.module);return e.jsxs("div",{className:"app-card-item",style:{"--cat-color":i?.color||"var(--cg-text-muted)"},children:[e.jsxs("div",{className:"card-header",children:[e.jsx("span",{className:"card-id",children:t.id}),t.theme&&e.jsx("span",{className:"card-badge",children:C.find(x=>x.id===t.theme)?.label||t.theme})]}),e.jsx("h3",{className:"card-title",children:t.title}),e.jsx("p",{className:"card-desc",children:t.description||"暂无描述"}),e.jsx("div",{className:"card-actions",children:f?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-icon btn-icon-success",title:"恢复",onClick:()=>F(t),disabled:o.isPending,children:e.jsx(q,{size:16})}),e.jsx("button",{className:"btn-icon btn-icon-danger",title:"彻底删除",onClick:()=>$(t),disabled:g.isPending,children:e.jsx(k,{size:16})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-icon btn-icon-secondary",title:"查看",onClick:()=>a(`/admin/apps/${t.id}`),children:e.jsx(J,{size:16})}),e.jsx("button",{className:"btn-icon btn-icon-primary",title:"编辑",onClick:()=>M(t),children:e.jsx(we,{size:16})}),e.jsx("button",{className:"btn-icon btn-icon-primary",title:"管理关联",onClick:()=>S(t),children:e.jsx(Y,{size:16})})]})})]},t.id)})}):e.jsx("div",{className:"app-table-container",children:e.jsxs("table",{className:"app-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"col-id",children:"ID"}),e.jsx("th",{className:"col-title",children:"标题"}),e.jsx("th",{className:"col-score",children:"完成度"}),e.jsx("th",{className:"col-actions",children:"操作"})]})}),e.jsx("tbody",{children:N.map(t=>{const i=B(t.module);return e.jsxs("tr",{className:"app-table-row",children:[e.jsx("td",{className:"col-id",children:e.jsx("span",{className:"table-id",style:{borderLeftColor:i?.color||"var(--cg-text-muted)"},children:t.id})}),e.jsxs("td",{className:"col-title",children:[e.jsx("div",{className:"table-title",children:t.title}),e.jsxs("div",{className:"table-desc",children:[t.description?.slice(0,50)||"暂无描述",t.description&&t.description.length>50?"...":""]})]}),e.jsx("td",{className:"col-score",children:t.completeness_score!==void 0&&t.completeness_score!==null?e.jsxs("div",{className:"score-cell",children:[e.jsx("div",{className:"score-bar",style:{width:`${t.completeness_score}%`,backgroundColor:t.completeness_score>=70?"var(--admin-success)":t.completeness_score>=40?"var(--admin-warning)":"var(--admin-danger)"}}),e.jsxs("span",{className:"score-text",children:[t.completeness_score,"分"]})]}):e.jsx("span",{className:"score-na",children:"-"})}),e.jsx("td",{className:"col-actions",children:e.jsx("div",{className:"table-actions",children:f?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-table btn-table-success",title:"恢复",onClick:()=>F(t),disabled:o.isPending,children:e.jsx(q,{size:14})}),e.jsx("button",{className:"btn-table btn-table-danger",title:"彻底删除",onClick:()=>$(t),disabled:g.isPending,children:e.jsx(k,{size:14})})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn-table",title:"查看详情",onClick:()=>a(`/admin/apps/${t.id}`),children:e.jsx(J,{size:14})}),e.jsx("button",{className:"btn-table",title:"移入回收站",onClick:()=>ae(t),disabled:g.isPending,children:e.jsx(k,{size:14})}),e.jsx("button",{className:"btn-table",title:"管理关联",onClick:()=>S(t),children:e.jsx(Y,{size:14})})]})})})]},t.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx(Ce,{size:48,color:"var(--cg-text-muted)"}),e.jsx("p",{children:"没有找到匹配的工具"}),e.jsx("p",{className:"empty-hint",children:"尝试调整搜索条件或筛选条件"})]}),P&&e.jsx(Se,{app:P,onClose:()=>M(null)}),K&&e.jsx(Ie,{onClose:()=>A(!1)}),D&&e.jsx(Te,{app:D,units:l||[],onClose:()=>S(null)}),e.jsx("style",{children:`
        /* 卡片视图 */
        .app-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          padding: 20px;
        }

        .app-card-item {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-top: 3px solid var(--cat-color, var(--cg-text-muted));
          display: flex;
          flex-direction: column;
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .app-card-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-id {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .card-badge {
          font-size: 0.6875rem;
          padding: 2px 8px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border-radius: 10px;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .card-desc {
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
          margin: 0 0 16px 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          padding-top: 12px;
          border-top: 1px solid var(--cg-bg);
        }

        /* 数据表格样式 */
        .app-table-container {
          background: var(--cg-surface);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          margin: 20px;
        }

        .app-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .app-table thead {
          background: var(--cg-bg);
          border-bottom: 1px solid var(--cg-border);
        }

        .app-table th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: var(--cg-text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .app-table tbody tr {
          border-bottom: 1px solid var(--cg-bg);
          transition: background 0.15s;
        }

        .app-table tbody tr:hover {
          background: var(--cg-bg);
        }

        .app-table tbody tr:last-child {
          border-bottom: none;
        }

        .app-table td {
          padding: 12px 16px;
          vertical-align: middle;
        }

        .col-id { width: 180px; }
        .col-title { min-width: 200px; }
        .col-score { width: 120px; }
        .col-actions { width: 140px; text-align: right; }

        .table-id {
          font-family: monospace;
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
          padding-left: 8px;
          border-left: 3px solid var(--cg-text-muted);
        }

        .table-title {
          font-weight: 500;
          color: var(--cg-text);
          margin-bottom: 2px;
        }

        .table-desc {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .score-cell {
          position: relative;
          width: 80px;
          height: 20px;
          background: var(--cg-bg);
          border-radius: 10px;
          overflow: hidden;
        }

        .score-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          border-radius: 10px;
          opacity: 0.3;
        }

        .score-text {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cg-text-muted);
        }

        .score-na {
          color: var(--cg-text-muted);
        }

        .table-actions {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
        }

        .btn-table {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: none;
          color: var(--cg-text-muted);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .btn-table:hover {
          background: var(--cg-border);
          color: var(--cg-text);
        }

        .btn-table-success {
          color: var(--admin-success);
        }

        .btn-table-success:hover {
          background: var(--admin-success-light);
          color: var(--admin-success);
        }

        .btn-table-danger {
          color: var(--admin-danger);
        }

        .btn-table-danger:hover {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-icon-secondary {
          background: var(--cg-bg);
          color: var(--cg-text-muted);
        }

        .btn-icon-secondary:hover {
          background: var(--cg-border);
          color: var(--cg-text);
        }

        .btn-icon-primary {
          background: var(--cg-bg);
          color: var(--admin-primary);
        }

        .btn-icon-primary:hover {
          background: var(--admin-primary-light);
          color: #2563eb;
        }

        .btn-icon-danger {
          background: var(--cg-bg);
          color: var(--admin-danger);
        }

        .btn-icon-danger:hover {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
        }

        .btn-icon-success {
          background: var(--cg-bg);
          color: var(--admin-success);
        }

        .btn-icon-success:hover {
          background: var(--admin-success-light);
          color: var(--admin-success);
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: var(--cg-text-muted);
        }

        .empty-state svg {
          margin-bottom: 16px;
        }

        .empty-hint {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          margin-top: 8px;
        }

        .loading {
          text-align: center;
          padding: 60px 20px;
          color: var(--cg-text-muted);
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: var(--cg-surface);
          border-radius: 12px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--cg-border);
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .modal-close {
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: var(--cg-text-muted);
          border-radius: 6px;
        }

        .modal-close:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .modal-body {
          padding: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--cg-text);
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          font-size: 0.9375rem;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid var(--cg-border);
        }
      `})]})}function Ae(a){if(!a)return"";if(typeof a=="string")try{return JSON.stringify(JSON.parse(a),null,2)}catch{return a}return JSON.stringify(a,null,2)}function G(a){return a.trim()?JSON.parse(a):null}function Se({app:a,onClose:n}){const r=X(),[s,m]=d.useState({title:a.title,description:a.description||"",module:a.module,theme:a.theme||"",icon:"",plugin_type:a.plugin_type||"native",plugin_manifest:Ae(a.plugin_manifest)}),l=async o=>{o.preventDefault();try{await r.mutateAsync({appId:a.id,data:{...s,plugin_manifest:G(s.plugin_manifest)}}),n()}catch{alert("更新失败")}};return e.jsx("div",{className:"modal-overlay",onClick:n,children:e.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"编辑工具"}),e.jsx("button",{className:"modal-close",onClick:n,children:e.jsx(j,{size:20})})]}),e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"工具 ID"}),e.jsx("input",{type:"text",className:"form-input",value:a.id,disabled:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"标题"}),e.jsx("input",{type:"text",className:"form-input",value:s.title,onChange:o=>m({...s,title:o.target.value}),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"描述"}),e.jsx("textarea",{className:"form-textarea",rows:3,value:s.description,onChange:o=>m({...s,description:o.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"实现方式"}),e.jsxs("select",{className:"form-select",value:s.plugin_type,onChange:o=>m({...s,plugin_type:o.target.value}),children:[e.jsx("option",{value:"config",children:"声明式互动与动画"}),e.jsx("option",{value:"component",children:"React 动画插件"}),e.jsx("option",{value:"native",children:"原生工具"})]})]}),s.plugin_type!=="native"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"插件清单（JSON）"}),e.jsx("textarea",{className:"form-textarea",rows:12,value:s.plugin_manifest,onChange:o=>m({...s,plugin_manifest:o.target.value}),required:s.plugin_type==="config",spellCheck:!1})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"主题"}),e.jsxs("select",{className:"form-select",value:s.theme,onChange:o=>m({...s,theme:o.target.value}),children:[e.jsx("option",{value:"",children:"未分类"}),C.map(o=>e.jsx("option",{value:o.id,children:o.label},o.id))]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:n,children:"取消"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:r.isPending,children:r.isPending?"保存中...":"保存"})]})]})]})})}function _e(a){if(a.startsWith("tools/"))return"tools";const n=a.match(/apps\/(module\d+)\//);return n?n[1]:"module1"}function Ie({onClose:a}){const n=de(),[r,s]=d.useState({id:"",title:"",description:"",component_path:"",theme:"",plugin_type:"native",plugin_manifest:""}),m=async l=>{l.preventDefault();try{const o=_e(r.component_path);await n.mutateAsync({...r,module:o,plugin_manifest:G(r.plugin_manifest)}),a()}catch{alert("创建失败")}};return e.jsx("div",{className:"modal-overlay",onClick:a,children:e.jsxs("div",{className:"modal-content",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"新建工具"}),e.jsx("button",{className:"modal-close",onClick:a,children:e.jsx(j,{size:20})})]}),e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"工具 ID (unit-X-XX-tool-YY)"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"例如: a1b2c3d4",value:r.id,onChange:l=>s({...r,id:l.target.value}),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"标题"}),e.jsx("input",{type:"text",className:"form-input",value:r.title,onChange:l=>s({...r,title:l.target.value}),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"描述"}),e.jsx("textarea",{className:"form-textarea",rows:3,value:r.description,onChange:l=>s({...r,description:l.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"实现方式"}),e.jsxs("select",{className:"form-select",value:r.plugin_type,onChange:l=>s({...r,plugin_type:l.target.value}),children:[e.jsx("option",{value:"config",children:"声明式互动与动画"}),e.jsx("option",{value:"component",children:"React 动画插件"}),e.jsx("option",{value:"native",children:"原生工具"})]})]}),r.plugin_type!=="native"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"插件清单（JSON）"}),e.jsx("textarea",{className:"form-textarea",rows:12,placeholder:"粘贴 tool-manifest.json",value:r.plugin_manifest,onChange:l=>s({...r,plugin_manifest:l.target.value}),required:r.plugin_type==="config",spellCheck:!1})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"组件路径"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"例如: tools/NewTool",value:r.component_path,onChange:l=>s({...r,component_path:l.target.value}),required:r.plugin_type!=="config"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"主题"}),e.jsxs("select",{className:"form-select",value:r.theme,onChange:l=>s({...r,theme:l.target.value}),children:[e.jsx("option",{value:"",children:"未分类"}),C.map(l=>e.jsx("option",{value:l.id,children:l.label},l.id))]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:a,children:"取消"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:n.isPending,children:n.isPending?"创建中...":"创建"})]})]})]})})}function Te({app:a,units:n,onClose:r}){const{data:s,isLoading:m}=me(a.id),l=pe(),o=xe(),[g,p]=d.useState(""),y=new Set(s?.map(c=>c.id)||[]),u=n.filter(c=>!y.has(c.id)),h=async()=>{if(g)try{await l.mutateAsync({appId:a.id,unitId:g}),p("")}catch{alert("添加关联失败")}},f=async c=>{if(confirm("确定要移除此关联吗？"))try{await o.mutateAsync({appId:a.id,unitId:c})}catch{alert("移除关联失败")}};return e.jsx("div",{className:"modal-overlay",onClick:r,children:e.jsxs("div",{className:"modal-content",onClick:c=>c.stopPropagation(),style:{maxWidth:"700px"},children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h2",{children:["管理单元关联 - ",a.title]}),e.jsx("button",{className:"modal-close",onClick:r,children:e.jsx(j,{size:20})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"添加单元关联"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("select",{className:"form-select",value:g,onChange:c=>p(c.target.value),style:{flex:1},children:[e.jsx("option",{value:"",children:"选择单元..."}),u.map(c=>e.jsxs("option",{value:c.id,children:[c.id," - ",c.title]},c.id))]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:h,disabled:!g||l.isPending,children:[e.jsx(H,{size:16}),"添加"]})]}),u.length===0&&e.jsx("p",{style:{fontSize:"0.8125rem",color:"var(--cg-text-muted)",marginTop:"8px"},children:"所有单元已关联"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["已关联单元 (",s?.length||0,")"]}),m?e.jsx("p",{children:"加载中..."}):s&&s.length>0?e.jsx("div",{style:{border:"1px solid var(--cg-border)",borderRadius:"8px",maxHeight:"300px",overflowY:"auto"},children:s.map(c=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid var(--cg-border)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500},children:c.title||c.id}),e.jsxs("div",{style:{fontSize:"0.8125rem",color:"var(--cg-text-muted)"},children:[c.id," ",c.is_recommended?"· 推荐":""]})]}),e.jsx("button",{className:"btn-icon btn-icon-danger",onClick:()=>f(c.id),disabled:o.isPending,children:e.jsx(k,{size:16})})]},c.id))}):e.jsx("p",{style:{color:"var(--cg-text-muted)",padding:"20px",textAlign:"center"},children:"暂无关联单元"})]})]}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"关闭"})})]})})}export{St as AppManagement};
