import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r}from"./router-vendor-L3Bq1iQd.js";import{Bi as i,Cn as a,F as o,Fr as s,In as c,Ji as l,Nt as u,Tt as d,U as f,X as p,dr as m,jn as h,o as g,rt as _,s as v}from"./ui-vendor-DRemX-fT.js";import{at as y,bt as b,nn as x,ot as S,st as C,tn as ee,wt as te,zt as w}from"./index-Dd165VW7.js";import{n as T,r as E,t as D}from"./AdminToolbar--r4F70Nm.js";import"./Toolbar-nijkmpni.js";import{t as ne}from"./AdminSidebar-Cy9-CfWf.js";import"./Sidebar-DAKavy-B.js";import{t as re}from"./AdminPageLayout-BYQNl95N.js";import"./Layout-BYvT_ga5.js";/* empty css                        */var O=e(t(),1),k=n(),A=[{id:`basics`,label:`认知与启蒙`,icon:i,color:`var(--admin-primary)`},{id:`intermediate`,label:`方法与工具`,icon:v,color:`var(--admin-success)`},{id:`advanced`,label:`实践与探究`,icon:l,color:`var(--admin-warning)`}],j=[{id:`temperature`,label:`气温观测`},{id:`precipitation`,label:`降水观测`},{id:`humidity`,label:`湿度观测`},{id:`wind`,label:`风力观测`},{id:`cloud`,label:`云量观测`},{id:`climate`,label:`气候认知`},{id:`paleoclimate`,label:`古气候探索`},{id:`system`,label:`气候系统`},{id:`greenhouse`,label:`温室效应`},{id:`carbon`,label:`碳循环`},{id:`emission`,label:`排放分析`},{id:`glacier`,label:`冰川冰盖`},{id:`sea`,label:`海洋变化`},{id:`ecosystem`,label:`生态影响`},{id:`adaptation`,label:`适应措施`},{id:`mitigation`,label:`减缓措施`},{id:`action`,label:`低碳行动`},{id:`diy`,label:`DIY制作`},{id:`simulation`,label:`模拟实验`},{id:`visualization`,label:`数据可视化`},{id:`calculator`,label:`计算工具`},{id:`recorder`,label:`记录工具`},{id:`analyzer`,label:`分析工具`}];function M(e){return A.find(t=>t.id===e)}function N(){let e=r(),{data:t,isLoading:n,refetch:i}=S(),{data:l}=S(void 0,void 0,`deleted`),{data:v}=ee(),y=x(),b=te(),[C,w]=(0,O.useState)(null),[N,P]=(0,O.useState)(null),[F,L]=(0,O.useState)(!1),[ie,ae]=(0,O.useState)(new Set),[B,V]=(0,O.useState)(null),[oe,H]=(0,O.useState)(!1),[U,W]=(0,O.useState)(null),[G,K]=(0,O.useState)(`list`),[se,ce]=(0,O.useState)(280),q=(0,O.useMemo)(()=>{if(!t)return{};let e={};for(let n of A)e[n.id]=t.filter(e=>e.module===n.id).length;return e},[t]),J=(0,O.useMemo)(()=>{if(!t)return{};let e={};for(let n of A){e[n.id]={};let r=t.filter(e=>e.module===n.id);for(let t of r)t.theme&&(e[n.id][t.theme]=(e[n.id][t.theme]||0)+1)}return e},[t]),Y=e=>{w(e),P(null),L(!1)},le=(e,t)=>{w(e),P(t),L(!1)},X=()=>{w(null),P(null),L(!0)},Z=(0,O.useMemo)(()=>F?l||[]:t?t.filter(e=>!(C&&e.module!==C||N&&e.theme!==N)):[],[t,l,C,N,F]);(0,O.useMemo)(()=>{let e={};for(let t of Z){let n=t.id.substring(0,10);e[n]||(e[n]=[]),e[n].push(t)}return Object.entries(e).sort(([e],[t])=>e.localeCompare(t))},[Z]);let ue=async e=>{if(confirm(`确定要将工具 "${e.title}" 移入回收站吗？之后可以在回收站中恢复。`))try{await b.mutateAsync({appId:e.id})}catch{alert(`删除失败`)}},Q=async e=>{if(confirm(`确定要恢复工具 "${e.title}" 吗？`))try{await y.mutateAsync({appId:e.id,data:{status:`active`}}),await i()}catch{alert(`恢复失败`)}},$=async e=>{if(confirm(`确定要彻底删除工具 "${e.title}" 吗？此操作不可恢复。`))try{await b.mutateAsync({appId:e.id,hard:!0})}catch{alert(`彻底删除失败`)}},de=(0,O.useMemo)(()=>{let e=[{id:`all`,label:`全部工具`,icon:(0,k.jsx)(m,{size:16}),count:t?.length||0,onClick:()=>Y(null)}];for(let t of A){let n=t.icon,r=J[t.id]||{},i=Object.entries(r).sort(([,e],[,t])=>t-e).map(([e,t])=>({...j.find(t=>t.id===e),id:e,count:t})).filter(e=>e.label);e.push({id:t.id,label:t.label,icon:(0,k.jsx)(n,{size:16,style:{color:t.color}}),count:q[t.id]||0,expandable:i.length>0,defaultExpanded:!1,onClick:()=>Y(t.id),children:i.map(e=>({id:`${t.id}_${e.id}`,label:e.label||e.id,icon:(0,k.jsx)(f,{size:14}),count:e.count,onClick:()=>le(t.id,e.id)}))})}return e.push({id:`trash`,label:`回收站`,icon:(0,k.jsx)(o,{size:16,style:{color:`var(--cg-text-muted)`}}),count:l?.length||0,onClick:X}),e},[t,l,q,J]),fe=F?`trash`:N&&C?`${C}_${N}`:C||`all`,pe=(0,k.jsx)(D,{shortcuts:{refresh:()=>i(),create:()=>H(!0)},leftActions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{icon:(0,k.jsx)(u,{size:18}),label:`新建应用`,variant:`primary`,onClick:()=>H(!0)}),(0,k.jsx)(E,{}),(C||N)&&(0,k.jsxs)(k.Fragment,{children:[C&&(0,k.jsxs)(`span`,{style:{fontSize:`14px`,padding:`4px 8px`,background:`var(--admin-primary)`,color:`white`,borderRadius:`var(--admin-radius-sm)`,display:`flex`,alignItems:`center`,gap:`4px`,marginRight:`8px`},children:[A.find(e=>e.id===C)?.label,(0,k.jsx)(`button`,{onClick:()=>Y(null),style:{background:`none`,border:`none`,color:`white`,cursor:`pointer`,padding:0,display:`flex`,alignItems:`center`},children:(0,k.jsx)(g,{size:14})})]}),N&&(0,k.jsxs)(`span`,{style:{fontSize:`14px`,padding:`4px 8px`,background:`var(--admin-secondary)`,color:`white`,borderRadius:`var(--admin-radius-sm)`,display:`flex`,alignItems:`center`,gap:`4px`,marginRight:`8px`},children:[j.find(e=>e.id===N)?.label,(0,k.jsx)(`button`,{onClick:()=>P(null),style:{background:`none`,border:`none`,color:`white`,cursor:`pointer`,padding:0,display:`flex`,alignItems:`center`},children:(0,k.jsx)(g,{size:14})})]}),C&&N&&(0,k.jsxs)(`button`,{onClick:()=>{Y(null),P(null)},style:{fontSize:`13px`,padding:`4px 8px`,background:`var(--admin-bg-tertiary)`,color:`var(--admin-text-secondary)`,border:`1px solid var(--admin-border-color)`,borderRadius:`var(--admin-radius-sm)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,k.jsx)(g,{size:12}),`清除全部`]}),(0,k.jsx)(E,{})]})]}),rightActions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(T,{icon:(0,k.jsx)(c,{size:18}),onClick:()=>K(`card`),variant:G===`card`?`primary`:`default`,title:`卡片视图`}),(0,k.jsx)(T,{icon:(0,k.jsx)(a,{size:18}),onClick:()=>K(`list`),variant:G===`list`?`primary`:`default`,title:`列表视图`})]})}),me=(0,k.jsx)(ne,{header:{title:`目录`,count:t?.length||0},items:de,selectedId:fe,position:`right`,variant:`tree`,resizable:!0,width:se,onWidthChange:ce,collapsible:!0});return(0,k.jsxs)(re,{toolbar:pe,sidebar:me,children:[n?(0,k.jsx)(`div`,{className:`loading`,children:`加载中...`}):Z.length>0?G===`card`?(0,k.jsx)(`div`,{className:`app-card-grid`,children:Z.map(t=>{let n=M(t.module);return(0,k.jsxs)(`div`,{className:`app-card-item`,style:{"--cat-color":n?.color||`var(--cg-text-muted)`},children:[(0,k.jsxs)(`div`,{className:`card-header`,children:[(0,k.jsx)(`span`,{className:`card-id`,children:t.id}),t.theme&&(0,k.jsx)(`span`,{className:`card-badge`,children:j.find(e=>e.id===t.theme)?.label||t.theme})]}),(0,k.jsx)(`h3`,{className:`card-title`,children:t.title}),(0,k.jsx)(`p`,{className:`card-desc`,children:t.description||`暂无描述`}),(0,k.jsx)(`div`,{className:`card-actions`,children:F?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{className:`btn-icon btn-icon-success`,title:`恢复`,onClick:()=>Q(t),disabled:y.isPending,children:(0,k.jsx)(d,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon btn-icon-danger`,title:`彻底删除`,onClick:()=>$(t),disabled:b.isPending,children:(0,k.jsx)(o,{size:16})})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{className:`btn-icon btn-icon-secondary`,title:`查看`,onClick:()=>e(`/admin/apps/${t.id}`),children:(0,k.jsx)(s,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon btn-icon-primary`,title:`编辑`,onClick:()=>V(t),children:(0,k.jsx)(p,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon btn-icon-primary`,title:`管理关联`,onClick:()=>W(t),children:(0,k.jsx)(h,{size:16})})]})})]},t.id)})}):(0,k.jsx)(`div`,{className:`app-table-container`,children:(0,k.jsxs)(`table`,{className:`app-table`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{className:`col-id`,children:`ID`}),(0,k.jsx)(`th`,{className:`col-title`,children:`标题`}),(0,k.jsx)(`th`,{className:`col-score`,children:`完成度`}),(0,k.jsx)(`th`,{className:`col-actions`,children:`操作`})]})}),(0,k.jsx)(`tbody`,{children:Z.map(t=>{let n=M(t.module);return(0,k.jsxs)(`tr`,{className:`app-table-row`,children:[(0,k.jsx)(`td`,{className:`col-id`,children:(0,k.jsx)(`span`,{className:`table-id`,style:{borderLeftColor:n?.color||`var(--cg-text-muted)`},children:t.id})}),(0,k.jsxs)(`td`,{className:`col-title`,children:[(0,k.jsx)(`div`,{className:`table-title`,children:t.title}),(0,k.jsxs)(`div`,{className:`table-desc`,children:[t.description?.slice(0,50)||`暂无描述`,t.description&&t.description.length>50?`...`:``]})]}),(0,k.jsx)(`td`,{className:`col-score`,children:t.completeness_score!==void 0&&t.completeness_score!==null?(0,k.jsxs)(`div`,{className:`score-cell`,children:[(0,k.jsx)(`div`,{className:`score-bar`,style:{width:`${t.completeness_score}%`,backgroundColor:t.completeness_score>=70?`var(--admin-success)`:t.completeness_score>=40?`var(--admin-warning)`:`var(--admin-danger)`}}),(0,k.jsxs)(`span`,{className:`score-text`,children:[t.completeness_score,`分`]})]}):(0,k.jsx)(`span`,{className:`score-na`,children:`-`})}),(0,k.jsx)(`td`,{className:`col-actions`,children:(0,k.jsx)(`div`,{className:`table-actions`,children:F?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{className:`btn-table btn-table-success`,title:`恢复`,onClick:()=>Q(t),disabled:y.isPending,children:(0,k.jsx)(d,{size:14})}),(0,k.jsx)(`button`,{className:`btn-table btn-table-danger`,title:`彻底删除`,onClick:()=>$(t),disabled:b.isPending,children:(0,k.jsx)(o,{size:14})})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`button`,{className:`btn-table`,title:`查看详情`,onClick:()=>e(`/admin/apps/${t.id}`),children:(0,k.jsx)(s,{size:14})}),(0,k.jsx)(`button`,{className:`btn-table`,title:`移入回收站`,onClick:()=>ue(t),disabled:b.isPending,children:(0,k.jsx)(o,{size:14})}),(0,k.jsx)(`button`,{className:`btn-table`,title:`管理关联`,onClick:()=>W(t),children:(0,k.jsx)(h,{size:14})})]})})})]},t.id)})})]})}):(0,k.jsxs)(`div`,{className:`empty-state`,children:[(0,k.jsx)(_,{size:48,color:`var(--cg-text-muted)`}),(0,k.jsx)(`p`,{children:`没有找到匹配的工具`}),(0,k.jsx)(`p`,{className:`empty-hint`,children:`尝试调整搜索条件或筛选条件`})]}),B&&(0,k.jsx)(I,{app:B,onClose:()=>V(null)}),oe&&(0,k.jsx)(R,{onClose:()=>H(!1)}),U&&(0,k.jsx)(z,{app:U,units:v||[],onClose:()=>W(null)}),(0,k.jsx)(`style`,{children:`
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
      `})]})}function P(e){if(!e)return``;if(typeof e==`string`)try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}return JSON.stringify(e,null,2)}function F(e){return e.trim()?JSON.parse(e):null}function I({app:e,onClose:t}){let n=x(),[r,i]=(0,O.useState)({title:e.title,description:e.description||``,module:e.module,theme:e.theme||``,icon:``,plugin_type:e.plugin_type||`native`,plugin_manifest:P(e.plugin_manifest)});return(0,k.jsx)(`div`,{className:`modal-overlay`,onClick:t,children:(0,k.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,k.jsxs)(`div`,{className:`modal-header`,children:[(0,k.jsx)(`h2`,{children:`编辑工具`}),(0,k.jsx)(`button`,{className:`modal-close`,onClick:t,children:(0,k.jsx)(g,{size:20})})]}),(0,k.jsxs)(`form`,{onSubmit:async i=>{i.preventDefault();try{await n.mutateAsync({appId:e.id,data:{...r,plugin_manifest:F(r.plugin_manifest)}}),t()}catch{alert(`更新失败`)}},children:[(0,k.jsxs)(`div`,{className:`modal-body`,children:[(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`工具 ID`}),(0,k.jsx)(`input`,{type:`text`,className:`form-input`,value:e.id,disabled:!0})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`标题`}),(0,k.jsx)(`input`,{type:`text`,className:`form-input`,value:r.title,onChange:e=>i({...r,title:e.target.value}),required:!0})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`描述`}),(0,k.jsx)(`textarea`,{className:`form-textarea`,rows:3,value:r.description,onChange:e=>i({...r,description:e.target.value})})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`实现方式`}),(0,k.jsxs)(`select`,{className:`form-select`,value:r.plugin_type,onChange:e=>i({...r,plugin_type:e.target.value}),children:[(0,k.jsx)(`option`,{value:`config`,children:`声明式互动与动画`}),(0,k.jsx)(`option`,{value:`component`,children:`React 动画插件`}),(0,k.jsx)(`option`,{value:`native`,children:`原生工具`})]})]}),r.plugin_type!==`native`&&(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`插件清单（JSON）`}),(0,k.jsx)(`textarea`,{className:`form-textarea`,rows:12,value:r.plugin_manifest,onChange:e=>i({...r,plugin_manifest:e.target.value}),required:r.plugin_type===`config`,spellCheck:!1})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`主题`}),(0,k.jsxs)(`select`,{className:`form-select`,value:r.theme,onChange:e=>i({...r,theme:e.target.value}),children:[(0,k.jsx)(`option`,{value:``,children:`未分类`}),j.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.label},e.id))]})]})]}),(0,k.jsxs)(`div`,{className:`modal-footer`,children:[(0,k.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:t,children:`取消`}),(0,k.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:n.isPending,children:n.isPending?`保存中...`:`保存`})]})]})]})})}function L(e){if(e.startsWith(`tools/`))return`tools`;let t=e.match(/apps\/(module\d+)\//);return t?t[1]:`module1`}function R({onClose:e}){let t=b(),[n,r]=(0,O.useState)({id:``,title:``,description:``,component_path:``,theme:``,plugin_type:`native`,plugin_manifest:``});return(0,k.jsx)(`div`,{className:`modal-overlay`,onClick:e,children:(0,k.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,k.jsxs)(`div`,{className:`modal-header`,children:[(0,k.jsx)(`h2`,{children:`新建工具`}),(0,k.jsx)(`button`,{className:`modal-close`,onClick:e,children:(0,k.jsx)(g,{size:20})})]}),(0,k.jsxs)(`form`,{onSubmit:async r=>{r.preventDefault();try{let r=L(n.component_path);await t.mutateAsync({...n,module:r,plugin_manifest:F(n.plugin_manifest)}),e()}catch{alert(`创建失败`)}},children:[(0,k.jsxs)(`div`,{className:`modal-body`,children:[(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`工具 ID (unit-X-XX-tool-YY)`}),(0,k.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`例如: a1b2c3d4`,value:n.id,onChange:e=>r({...n,id:e.target.value}),required:!0})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`标题`}),(0,k.jsx)(`input`,{type:`text`,className:`form-input`,value:n.title,onChange:e=>r({...n,title:e.target.value}),required:!0})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`描述`}),(0,k.jsx)(`textarea`,{className:`form-textarea`,rows:3,value:n.description,onChange:e=>r({...n,description:e.target.value})})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`实现方式`}),(0,k.jsxs)(`select`,{className:`form-select`,value:n.plugin_type,onChange:e=>r({...n,plugin_type:e.target.value}),children:[(0,k.jsx)(`option`,{value:`config`,children:`声明式互动与动画`}),(0,k.jsx)(`option`,{value:`component`,children:`React 动画插件`}),(0,k.jsx)(`option`,{value:`native`,children:`原生工具`})]})]}),n.plugin_type!==`native`&&(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`插件清单（JSON）`}),(0,k.jsx)(`textarea`,{className:`form-textarea`,rows:12,placeholder:`粘贴 tool-manifest.json`,value:n.plugin_manifest,onChange:e=>r({...n,plugin_manifest:e.target.value}),required:n.plugin_type===`config`,spellCheck:!1})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`组件路径`}),(0,k.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`例如: tools/NewTool`,value:n.component_path,onChange:e=>r({...n,component_path:e.target.value}),required:n.plugin_type!==`config`})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`主题`}),(0,k.jsxs)(`select`,{className:`form-select`,value:n.theme,onChange:e=>r({...n,theme:e.target.value}),children:[(0,k.jsx)(`option`,{value:``,children:`未分类`}),j.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.label},e.id))]})]})]}),(0,k.jsxs)(`div`,{className:`modal-footer`,children:[(0,k.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:e,children:`取消`}),(0,k.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:t.isPending,children:t.isPending?`创建中...`:`创建`})]})]})]})})}function z({app:e,units:t,onClose:n}){let{data:r,isLoading:i}=y(e.id),a=C(),s=w(),[c,l]=(0,O.useState)(``),d=new Set(r?.map(e=>e.id)||[]),f=t.filter(e=>!d.has(e.id)),p=async()=>{if(c)try{await a.mutateAsync({appId:e.id,unitId:c}),l(``)}catch{alert(`添加关联失败`)}},m=async t=>{if(confirm(`确定要移除此关联吗？`))try{await s.mutateAsync({appId:e.id,unitId:t})}catch{alert(`移除关联失败`)}};return(0,k.jsx)(`div`,{className:`modal-overlay`,onClick:n,children:(0,k.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:`700px`},children:[(0,k.jsxs)(`div`,{className:`modal-header`,children:[(0,k.jsxs)(`h2`,{children:[`管理单元关联 - `,e.title]}),(0,k.jsx)(`button`,{className:`modal-close`,onClick:n,children:(0,k.jsx)(g,{size:20})})]}),(0,k.jsxs)(`div`,{className:`modal-body`,children:[(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsx)(`label`,{className:`form-label`,children:`添加单元关联`}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,k.jsxs)(`select`,{className:`form-select`,value:c,onChange:e=>l(e.target.value),style:{flex:1},children:[(0,k.jsx)(`option`,{value:``,children:`选择单元...`}),f.map(e=>(0,k.jsxs)(`option`,{value:e.id,children:[e.id,` - `,e.title]},e.id))]}),(0,k.jsxs)(`button`,{type:`button`,className:`btn btn-primary`,onClick:p,disabled:!c||a.isPending,children:[(0,k.jsx)(u,{size:16}),`添加`]})]}),f.length===0&&(0,k.jsx)(`p`,{style:{fontSize:`0.8125rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`所有单元已关联`})]}),(0,k.jsxs)(`div`,{className:`form-group`,children:[(0,k.jsxs)(`label`,{className:`form-label`,children:[`已关联单元 (`,r?.length||0,`)`]}),i?(0,k.jsx)(`p`,{children:`加载中...`}):r&&r.length>0?(0,k.jsx)(`div`,{style:{border:`1px solid var(--cg-border)`,borderRadius:`8px`,maxHeight:`300px`,overflowY:`auto`},children:r.map(e=>(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 16px`,borderBottom:`1px solid var(--cg-border)`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{style:{fontWeight:500},children:e.title||e.id}),(0,k.jsxs)(`div`,{style:{fontSize:`0.8125rem`,color:`var(--cg-text-muted)`},children:[e.id,` `,e.is_recommended?`· 推荐`:``]})]}),(0,k.jsx)(`button`,{className:`btn-icon btn-icon-danger`,onClick:()=>m(e.id),disabled:s.isPending,children:(0,k.jsx)(o,{size:16})})]},e.id))}):(0,k.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,padding:`20px`,textAlign:`center`},children:`暂无关联单元`})]})]}),(0,k.jsx)(`div`,{className:`modal-footer`,children:(0,k.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:n,children:`关闭`})})]})})}export{N as AppManagement};