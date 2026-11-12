import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{Zt as t}from"./chart-vendor-BPF8xWyP.js";import{n,o as r,r as i}from"./query-vendor-xPwMjWJi.js";import{v as a}from"./editor-vendor-BIp18fLh.js";import{n as o}from"./api-v2yi2bCy.js";import{Aa as ee,Et as s,Fi as te,H as c,Ii as ne,It as l,Mi as re,Ni as ie,fr as ae,ji as u,ka as oe,ki as d,qr as se,ri as ce,ti as f}from"./ui-vendor-D6jQdMK5.js";import"./index-Bsx-KQFz.js";import{n as p,r as m,t as le}from"./AdminToolbar-BvVye6B9.js";import"./Toolbar-B2ZJxIWc.js";import{t as ue}from"./AdminSidebar-DaHmwb0S.js";import"./Sidebar-DkawOR_f.js";import{t as de}from"./AdminPageLayout-CX5ezFYh.js";import"./Layout-Q-a9ZfB6.js";/* empty css                        */var h=e(t(),1),g=a(),_=`public`,fe=30,pe=[10,20,30,50,100],v=(0,h.memo)(function({row:e,columns:t,rowIndex:n}){return(0,g.jsx)(`tr`,{children:t.map(t=>(0,g.jsx)(`td`,{title:String(e[t]??``),children:y(e[t])},t))})});function y(e){if(e==null)return``;let t=String(e);return t.length>100?t.substring(0,100)+`...`:t}function b(){let e=r(),[t,a]=(0,h.useState)(null),[y,b]=(0,h.useState)(`data`),[x,S]=(0,h.useState)(``),[C,w]=(0,h.useState)(null),[T,E]=(0,h.useState)(1),[D,me]=(0,h.useState)(fe),[O,k]=(0,h.useState)(``),[he,ge]=(0,h.useState)(280),[A,_e]=(0,h.useState)(`name`),[j,M]=(0,h.useState)(null),[N,P]=(0,h.useState)(null),[F,I]=(0,h.useState)(null);(0,h.useEffect)(()=>{let t;return N&&(t=setInterval(()=>{o.get(`/api/admin/databases/${_}/backup/status/${N}`).then(n=>{let r=n.data;I(r),r.status===`success`?(clearInterval(t),M({type:`success`,message:r.message}),y===`backup`&&e&&e.invalidateQueries({queryKey:[`admin`,`databases`,_,`backups`]}),setTimeout(()=>{M(null),P(null),I(null)},3e3)):r.status===`error`&&(clearInterval(t),M({type:`error`,message:r.message}),setTimeout(()=>{M(null),P(null),I(null)},3e3))}).catch(e=>{clearInterval(t),P(null),I(null),M({type:`error`,message:`获取备份进度失败`})})},500)),()=>clearInterval(t)},[N,y,e]);let{data:L,isLoading:R,refetch:z}=i({queryKey:[`admin`,`databases`,_,`tables`],queryFn:()=>o.get(`/api/admin/databases/${_}/tables`).then(e=>e.data),staleTime:6e4,gcTime:6e5}),{data:B,isLoading:V,refetch:H,isFetching:U}=i({queryKey:[`admin`,`databases`,_,`tables`,t,`data`,T,D],queryFn:()=>o.get(`/api/admin/databases/${_}/tables/${t}/data?page=${T}&page_size=${D}`).then(e=>e.data),enabled:!!t&&y===`data`,staleTime:3e4,gcTime:3e5,placeholderData:e=>e}),{data:ve,refetch:ye}=i({queryKey:[`admin`,`databases`,_,`backups`],queryFn:()=>o.get(`/api/admin/databases/${_}/backups`).then(e=>e.data),enabled:y===`backup`,staleTime:3e4}),W=n({mutationFn:e=>o.post(`/api/admin/databases/${_}/query`,{sql:e}).then(e=>e.data),onSuccess:e=>{w(e)},onError:e=>{w({success:!1,error:e.response?.data?.detail||e.message})}}),G=n({mutationFn:()=>o.post(`/api/admin/databases/${_}/backup`).then(e=>e.data),onSuccess:t=>{t.task_id?P(t.task_id):(M({type:`success`,message:t.message}),y===`backup`&&e.invalidateQueries({queryKey:[`admin`,`databases`,_,`backups`]}),setTimeout(()=>M(null),3e3))},onError:e=>{M({type:`error`,message:e.response?.data?.detail||`备份失败`})}});n({mutationFn:e=>o.delete(`/api/admin/databases/${_}/backups/${e}`).then(e=>e.data),onSuccess:()=>{M({type:`success`,message:`备份已删除`}),ye(),setTimeout(()=>M(null),3e3)},onError:e=>{M({type:`error`,message:e.response?.data?.detail||`删除失败`})}});let K=n({mutationFn:()=>o.post(`/api/admin/databases/${_}/vacuum`).then(e=>e.data),onSuccess:t=>{M({type:`success`,message:`${t.message}，节省空间：${t.saved}`}),e.invalidateQueries({queryKey:[`admin`,`databases`]}),setTimeout(()=>M(null),5e3)},onError:e=>{M({type:`error`,message:e.response?.data?.detail||`优化失败`})}}),be=()=>{x.trim()&&W.mutate(x)};(0,h.useCallback)(e=>e?new Date(e).toLocaleString(`zh-CN`):`-`,[]);let q=(0,h.useMemo)(()=>L?.tables?.find(e=>e.name===t),[L?.tables,t]),J=(0,h.useCallback)(e=>{a(e),b(`data`),E(1),k(``)},[]),Y=(0,h.useMemo)(()=>{let e=L?.tables||[];return A===`count`?[...e].sort((e,t)=>(t.row_count||0)-(e.row_count||0)):e},[L?.tables,A]);(0,h.useEffect)(()=>{!t&&Y.length>0&&J(Y[0].name)},[Y,t,J]);let X=(0,h.useCallback)(e=>{let t=B?.pagination?.total_pages||1;e>=1&&e<=t&&(E(e),k(``))},[B?.pagination?.total_pages]),xe=(0,h.useCallback)(e=>{me(e),E(1),k(``)},[]),Z=(0,h.useCallback)(()=>{let e=parseInt(O);isNaN(e)||X(e)},[O,X]),Se=(0,h.useMemo)(()=>{let e=B?.pagination?.total_pages||1,t=B?.pagination?.page||1,n=[];if(e<=7)for(let t=1;t<=e;t++)n.push(t);else if(t<=4){for(let e=1;e<=5;e++)n.push(e);n.push(`...`),n.push(e)}else if(t>=e-3){n.push(1),n.push(`...`);for(let t=e-4;t<=e;t++)n.push(t)}else{n.push(1),n.push(`...`);for(let e=t-1;e<=t+1;e++)n.push(e);n.push(`...`),n.push(e)}return n},[B?.pagination]),Q=(0,h.useMemo)(()=>B?.columns||[],[B?.columns]),$=(0,h.useMemo)(()=>B?.rows||[],[B?.rows]),Ce=(0,g.jsx)(le,{shortcuts:{refresh:()=>{z(),t&&H()}},leftActions:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{icon:(0,g.jsx)(s,{size:18}),onClick:()=>{z(),t&&H()},loading:R||V,title:`刷新 (F5)`}),(0,g.jsx)(m,{}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{icon:(0,g.jsx)(se,{size:18}),active:y===`data`,onClick:()=>b(`data`),children:`数据`}),(0,g.jsx)(p,{icon:(0,g.jsx)(c,{size:18}),active:y===`structure`,onClick:()=>b(`structure`),children:`结构`}),(0,g.jsx)(p,{icon:(0,g.jsx)(l,{size:18}),active:y===`query`,onClick:()=>b(`query`),children:`查询`}),(0,g.jsx)(m,{})]}),(0,g.jsx)(p,{icon:(0,g.jsx)(ae,{size:18}),onClick:()=>K.mutate(),loading:K.isPending,children:`优化`}),(0,g.jsx)(p,{icon:(0,g.jsx)(f,{size:18}),onClick:()=>G.mutate(),loading:G.isPending||!!N,disabled:!!N,variant:`primary`,children:N?`备份中...`:`备份`})]})}),we=R?(0,g.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,width:280},children:`加载中...`}):(0,g.jsx)(ue,{header:{title:`数据表`,count:L?.total,actions:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`button`,{onClick:()=>z(),title:`刷新表列表`,style:{background:`none`,border:`none`,cursor:`pointer`,padding:`2px`,color:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`},children:(0,g.jsx)(s,{size:14})}),(0,g.jsx)(`button`,{onClick:()=>_e(A===`name`?`count`:`name`),title:A===`name`?`按记录数排序`:`按名称排序`,style:{background:`none`,border:`none`,cursor:`pointer`,padding:`2px`,color:A===`count`?`var(--admin-primary)`:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`},children:A===`name`?(0,g.jsx)(oe,{size:14}):(0,g.jsx)(ee,{size:14})})]})},items:Y.length>0?Y.map(e=>({id:e.name,label:e.name,icon:(0,g.jsx)(c,{size:16}),count:e.row_count,onClick:()=>J(e.name)})):[],selectedId:t,onSelect:e=>J(e),position:`right`,resizable:!0,width:he,onWidthChange:ge,collapsible:!1});return(0,g.jsxs)(de,{toolbar:Ce,sidebar:we,className:`db-management`,children:[j&&(0,g.jsxs)(`div`,{className:`status-alert ${j.type}`,children:[j.type===`success`&&(0,g.jsx)(d,{size:16}),j.type===`error`&&(0,g.jsx)(u,{size:16}),j.message]}),F&&F.status===`running`&&(0,g.jsxs)(`div`,{className:`status-alert info backup-progress-container`,style:{display:`flex`,flexDirection:`column`,gap:`8px`,padding:`12px 16px`,borderLeft:`4px solid var(--admin-primary)`,backgroundColor:`var(--cg-bg)`,borderRadius:`4px`,marginBottom:`16px`,boxShadow:`0 1px 3px rgba(0,0,0,0.05)`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,g.jsxs)(`span`,{style:{fontWeight:500,color:`var(--admin-primary)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,g.jsx)(`div`,{className:`spinner placeholder`,style:{width:`16px`,height:`16px`,border:`2px solid rgba(59, 130, 246, 0.3)`,borderTopColor:`var(--admin-primary)`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),`全量备份进行中`]}),(0,g.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#2563eb`,fontFamily:`monospace`},children:[F.progress,`%`]})]}),(0,g.jsx)(`div`,{style:{width:`100%`,height:`6px`,backgroundColor:`var(--admin-primary)`,borderRadius:`3px`,overflow:`hidden`},children:(0,g.jsx)(`div`,{style:{width:`${F.progress}%`,height:`100%`,backgroundColor:`#2563eb`,transition:`width 0.3s ease`}})}),(0,g.jsx)(`div`,{style:{fontSize:`12px`,color:`#60a5fa`,marginTop:`2px`,fontFamily:`monospace`},children:F.message})]}),t?(0,g.jsxs)(`div`,{className:`content-panel`,children:[y===`data`&&(0,g.jsxs)(`div`,{className:`data-view`,children:[(0,g.jsx)(`div`,{className:`view-header`,children:(0,g.jsx)(`h3`,{children:t})}),V?(0,g.jsx)(`div`,{className:`loading-state`,children:`加载中...`}):$.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`data-table-container`,children:(0,g.jsxs)(`table`,{className:`data-table`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsx)(`tr`,{children:Q.map(e=>(0,g.jsx)(`th`,{children:e},e))})}),(0,g.jsx)(`tbody`,{children:$.map((e,t)=>(0,g.jsx)(v,{row:e,columns:Q,rowIndex:t},t))})]})}),(0,g.jsxs)(`div`,{className:`pagination-enhanced`,children:[(0,g.jsxs)(`div`,{className:`pagination-left`,children:[(0,g.jsxs)(`span`,{className:`pagination-info`,children:[`共 `,(0,g.jsx)(`strong`,{children:B?.pagination?.total_rows?.toLocaleString()||0}),` 条记录`,B?.pagination&&(0,g.jsxs)(g.Fragment,{children:[`，第 `,(0,g.jsx)(`strong`,{children:B.pagination.page}),` / `,(0,g.jsx)(`strong`,{children:B.pagination.total_pages}),` 页`]})]}),(0,g.jsxs)(`div`,{className:`page-size-selector`,children:[(0,g.jsx)(`label`,{children:`每页显示：`}),(0,g.jsx)(`select`,{value:D,onChange:e=>xe(Number(e.target.value)),disabled:U,className:`page-size-select`,children:pe.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,g.jsxs)(`div`,{className:`pagination-controls`,children:[(0,g.jsx)(`button`,{className:`pagination-btn`,disabled:!B?.pagination?.has_prev||U,onClick:()=>X(1),title:`首页`,children:(0,g.jsx)(ie,{size:16})}),(0,g.jsx)(`button`,{className:`pagination-btn`,disabled:!B?.pagination?.has_prev||U,onClick:()=>X((B?.pagination?.page||1)-1),title:`上一页`,children:(0,g.jsx)(ne,{size:16})}),(0,g.jsx)(`div`,{className:`page-numbers`,children:Se.map((e,t)=>{if(e===`...`)return(0,g.jsx)(`span`,{className:`page-ellipsis`,children:`...`},`ellipsis-${t}`);let n=e,r=n===(B?.pagination?.page||1);return(0,g.jsx)(`button`,{className:`page-number ${r?`active`:``}`,disabled:U,onClick:()=>X(n),children:n},n)})}),(0,g.jsx)(`button`,{className:`pagination-btn`,disabled:!B?.pagination?.has_next||U,onClick:()=>X((B?.pagination?.page||1)+1),title:`下一页`,children:(0,g.jsx)(te,{size:16})}),(0,g.jsx)(`button`,{className:`pagination-btn`,disabled:!B?.pagination?.has_next||U,onClick:()=>X(B?.pagination?.total_pages||1),title:`末页`,children:(0,g.jsx)(re,{size:16})})]}),(0,g.jsxs)(`div`,{className:`pagination-jump`,children:[(0,g.jsx)(`label`,{children:`跳转到：`}),(0,g.jsx)(`input`,{type:`number`,min:`1`,max:B?.pagination?.total_pages||1,value:O,onChange:e=>k(e.target.value),onKeyPress:e=>{e.key===`Enter`&&Z()},placeholder:`页码`,className:`jump-input`,disabled:U}),(0,g.jsx)(`button`,{className:`btn btn-sm btn-secondary`,onClick:Z,disabled:U||!O,children:`跳转`})]})]})]}):(0,g.jsxs)(`div`,{className:`empty-state`,children:[(0,g.jsx)(c,{size:32}),(0,g.jsx)(`p`,{children:`表中暂无数据`})]})]}),y===`structure`&&q&&(0,g.jsxs)(`div`,{className:`structure-view`,children:[(0,g.jsx)(`div`,{className:`view-header`,children:(0,g.jsxs)(`h3`,{children:[`表结构 - `,t]})}),(0,g.jsx)(`div`,{className:`structure-table-container`,children:(0,g.jsxs)(`table`,{className:`structure-table`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:`#`}),(0,g.jsx)(`th`,{children:`列名`}),(0,g.jsx)(`th`,{children:`类型`}),(0,g.jsx)(`th`,{children:`主键`}),(0,g.jsx)(`th`,{children:`非空`}),(0,g.jsx)(`th`,{children:`默认值`})]})}),(0,g.jsx)(`tbody`,{children:q.columns.map(e=>(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:e.id+1}),(0,g.jsxs)(`td`,{className:`col-name`,children:[e.primary_key&&(0,g.jsx)(`span`,{className:`pk-badge`,children:`🔑`}),e.name]}),(0,g.jsx)(`td`,{children:(0,g.jsx)(`code`,{children:e.type||`TEXT`})}),(0,g.jsx)(`td`,{children:e.primary_key?`✓`:``}),(0,g.jsx)(`td`,{children:e.not_null?`✓`:``}),(0,g.jsx)(`td`,{children:(0,g.jsx)(`code`,{children:e.default??`-`})})]},e.id))})]})})]}),y===`query`&&(0,g.jsxs)(`div`,{className:`query-view`,children:[(0,g.jsx)(`div`,{className:`view-header`,children:(0,g.jsx)(`h3`,{children:`SQL 查询`})}),(0,g.jsxs)(`div`,{className:`query-input-area`,children:[(0,g.jsx)(`textarea`,{className:`sql-input`,placeholder:`输入 SELECT 查询语句...\n例如: SELECT * FROM ${t} LIMIT 10`,value:x,onChange:e=>S(e.target.value),rows:4}),(0,g.jsxs)(`div`,{className:`query-actions`,children:[(0,g.jsx)(`button`,{className:`btn btn-primary`,onClick:be,disabled:W.isPending||!x.trim(),children:W.isPending?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{size:14,className:`spinning`}),` 执行中...`]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{size:14}),` 执行`]})}),(0,g.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>{S(``),w(null)},children:`清空`})]})]}),C&&(0,g.jsx)(`div`,{className:`query-result`,children:C.success===!1?(0,g.jsxs)(`div`,{className:`query-error`,children:[(0,g.jsx)(u,{size:16}),(0,g.jsx)(`span`,{children:C.error})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`result-info`,children:[(0,g.jsx)(d,{size:14}),`返回 `,C.row_count,` 行`,C.limited&&(0,g.jsx)(`span`,{className:`warning`,children:`（结果已截断）`})]}),C.rows?.length>0&&(0,g.jsx)(`div`,{className:`data-table-container`,children:(0,g.jsxs)(`table`,{className:`data-table`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsx)(`tr`,{children:C.columns.map(e=>(0,g.jsx)(`th`,{children:e},e))})}),(0,g.jsx)(`tbody`,{children:C.rows.map((e,t)=>(0,g.jsx)(v,{row:e,columns:C.columns,rowIndex:t},t))})]})})]})})]})]}):(0,g.jsx)(`div`,{className:`content-panel empty-panel`,children:(0,g.jsxs)(`div`,{className:`empty-state`,children:[(0,g.jsx)(ce,{size:48}),(0,g.jsx)(`h3`,{children:`系统数据库`}),(0,g.jsx)(`p`,{children:`请从右侧选择一个数据表查看`})]})}),(0,g.jsx)(`style`,{children:`
        .status-alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .status-alert.success {
          background: var(--admin-success-light);
          color: var(--admin-success);
          border: 1px solid var(--admin-success);
        }

        .status-alert.error {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger);
        }


        .content-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .empty-panel {
          justify-content: center;
          align-items: center;
        }

        /* 标签页 */
        .content-tabs {
          display: flex;
          border-bottom: 1px solid var(--cg-border);
          background: var(--cg-bg);
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.75rem 1.25rem;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          transition: all 0.15s;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
        }

        .tab-btn:hover {
          color: var(--cg-text);
          background: var(--cg-bg);
        }

        .tab-btn.active {
          color: var(--admin-primary);
          border-bottom-color: var(--admin-primary);
          background: var(--cg-surface);
        }

        /* 视图通用样式 */
        .data-view, .structure-view, .query-view {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .view-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .view-header h3 {
          margin: 0;
          font-size: 0.9375rem;
          color: var(--cg-text);
        }

        .view-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .fetching-indicator {
          color: var(--admin-primary);
          display: flex;
          align-items: center;
        }

        /* 数据表格 - 优化性能 */
        .data-table-container, .structure-table-container {
          flex: 1;
          overflow: auto;
          /* 启用硬件加速 */
          transform: translateZ(0);
          will-change: scroll-position;
        }

        .data-table, .structure-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8125rem;
          /* 固定表格布局，提高渲染性能 */
          table-layout: fixed;
        }

        .data-table th, .data-table td,
        .structure-table th, .structure-table td {
          padding: 0.5rem 0.75rem;
          text-align: left;
          border-bottom: 1px solid var(--cg-border);
          white-space: nowrap;
          /* 性能优化 */
          contain: content;
        }

        .data-table td {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .data-table th, .structure-table th {
          background: var(--cg-bg);
          font-weight: 600;
          color: var(--cg-text-muted);
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .data-table tbody tr:hover,
        .structure-table tbody tr:hover {
          background: var(--cg-bg);
        }

        /* 减少重绘 */
        .data-table tbody tr {
          contain: layout style;
        }

        .col-name {
          font-weight: 500;
        }

        .pk-badge {
          margin-right: 0.25rem;
        }

        code {
          background: var(--cg-bg);
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        /* 增强分页 */
        .pagination-enhanced {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--cg-border);
          background: var(--cg-bg);
          flex-wrap: wrap;
        }

        .pagination-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 0;
        }

        .pagination-info {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          white-space: nowrap;
        }

        .pagination-info strong {
          color: var(--cg-text);
          font-weight: 600;
        }

        .page-size-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
        }

        .page-size-selector label {
          white-space: nowrap;
        }

        .page-size-select {
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--cg-border);
          border-radius: 4px;
          font-size: 0.875rem;
          background: var(--cg-surface);
          cursor: pointer;
          transition: border-color 0.15s;
        }

        .page-size-select:hover:not(:disabled) {
          border-color: var(--admin-primary);
        }

        .page-size-select:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          padding: 0;
          border: 1px solid var(--cg-border);
          border-radius: 4px;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          cursor: pointer;
          transition: all 0.15s;
          font-size: 0.875rem;
        }

        .pagination-btn:hover:not(:disabled) {
          background: var(--cg-bg);
          border-color: var(--cg-text-muted);
          color: var(--cg-text);
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .page-numbers {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin: 0 0.5rem;
        }

        .page-number {
          min-width: 32px;
          height: 32px;
          padding: 0 0.5rem;
          border: 1px solid var(--cg-border);
          border-radius: 4px;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          cursor: pointer;
          transition: all 0.15s;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .page-number:hover:not(:disabled) {
          background: var(--cg-bg);
          border-color: var(--cg-text-muted);
          color: var(--cg-text);
        }

        .page-number.active {
          background: var(--admin-primary);
          border-color: var(--admin-primary);
          color: white;
          font-weight: 600;
        }

        .page-number:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .page-ellipsis {
          padding: 0 0.5rem;
          color: var(--cg-text-muted);
          font-size: 0.875rem;
        }

        .pagination-jump {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
        }

        .pagination-jump label {
          white-space: nowrap;
        }

        .jump-input {
          width: 60px;
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--cg-border);
          border-radius: 4px;
          font-size: 0.875rem;
          text-align: center;
          transition: border-color 0.15s;
        }

        .jump-input:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .jump-input:disabled {
          background: var(--cg-bg);
          cursor: not-allowed;
        }

        /* 响应式：小屏幕时分页控件换行 */
        @media (max-width: 1024px) {
          .pagination-enhanced {
            flex-direction: column;
            align-items: stretch;
          }

          .pagination-left {
            justify-content: space-between;
          }

          .pagination-controls {
            justify-content: center;
          }

          .pagination-jump {
            justify-content: center;
          }
        }

        /* 查询视图 */
        .query-input-area {
          padding: 1rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .sql-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.8125rem;
          resize: vertical;
          margin-bottom: 0.75rem;
        }

        .sql-input:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .query-actions {
          display: flex;
          gap: 0.5rem;
        }

        .query-result {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .result-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--cg-bg);
          color: var(--admin-success);
          font-size: 0.875rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .result-info .warning {
          color: #d97706;
        }

        .query-error {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--cg-bg);
          color: var(--admin-danger);
          font-size: 0.875rem;
          margin: 1rem;
          border-radius: 6px;
        }

        /* 备份列表 */
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .panel-header h2 {
          margin: 0;
          font-size: 1rem;
        }

        .backup-list {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }

        .backup-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: var(--cg-bg);
          border-radius: 6px;
          margin-bottom: 0.5rem;
          border: 1px solid var(--cg-border);
        }

        .backup-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .backup-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cg-text);
        }

        .backup-meta {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .btn-icon {
          padding: 0.375rem;
        }

        .btn-danger {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger-light);
        }

        .btn-danger:hover {
          background: var(--admin-danger-light);
        }

        /* 空状态 */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: var(--cg-text-muted);
          text-align: center;
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--cg-text);
        }

        .empty-state p {
          margin: 0;
        }

        .empty-hint {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          margin-top: 0.5rem;
        }

        .loading-state {
          padding: 3rem;
          text-align: center;
          color: var(--cg-text-muted);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

      `})]})}export{b as DatabaseManagement};