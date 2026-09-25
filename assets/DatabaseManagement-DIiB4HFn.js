import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{a as r,n as i,t as a}from"./query-vendor-KR0ej7Li.js";import{n as o}from"./api-C6QdgyJO.js";import{$n as ee,Et as s,Mr as te,Pt as c,Rr as ne,W as l,ca as re,di as ie,la as ae,li as u,mi as oe,pi as se,si as d,ui as ce,zr as le}from"./ui-vendor-BJACYxZ2.js";import"./index-CE3QzMvF.js";import{n as f,r as p,t as ue}from"./AdminToolbar-DlGMLpSD.js";import"./Toolbar-B1CAJCx3.js";import{t as de}from"./AdminSidebar-Dj_yW167.js";import"./Sidebar-D4eOJeZB.js";import{t as fe}from"./AdminPageLayout-BYQNl95N.js";import"./Layout-BYvT_ga5.js";/* empty css                        */var m=e(t(),1),h=n(),g=`public`,pe=30,me=[10,20,30,50,100],_=(0,m.memo)(function({row:e,columns:t,rowIndex:n}){return(0,h.jsx)(`tr`,{children:t.map(t=>(0,h.jsx)(`td`,{title:String(e[t]??``),children:v(e[t])},t))})});function v(e){if(e==null)return``;let t=String(e);return t.length>100?t.substring(0,100)+`...`:t}function y(){let e=r(),[t,n]=(0,m.useState)(null),[v,y]=(0,m.useState)(`data`),[b,x]=(0,m.useState)(``),[S,C]=(0,m.useState)(null),[w,T]=(0,m.useState)(1),[E,he]=(0,m.useState)(pe),[D,O]=(0,m.useState)(``),[ge,_e]=(0,m.useState)(280),[k,ve]=(0,m.useState)(`name`),[A,j]=(0,m.useState)(null),[M,N]=(0,m.useState)(null),[P,F]=(0,m.useState)(null);(0,m.useEffect)(()=>{let t;return M&&(t=setInterval(()=>{o.get(`/api/admin/databases/${g}/backup/status/${M}`).then(n=>{let r=n.data;F(r),r.status===`success`?(clearInterval(t),j({type:`success`,message:r.message}),v===`backup`&&e&&e.invalidateQueries({queryKey:[`admin`,`databases`,g,`backups`]}),setTimeout(()=>{j(null),N(null),F(null)},3e3)):r.status===`error`&&(clearInterval(t),j({type:`error`,message:r.message}),setTimeout(()=>{j(null),N(null),F(null)},3e3))}).catch(e=>{clearInterval(t),N(null),F(null),j({type:`error`,message:`获取备份进度失败`})})},500)),()=>clearInterval(t)},[M,v,e]);let{data:I,isLoading:L,refetch:R}=i({queryKey:[`admin`,`databases`,g,`tables`],queryFn:()=>o.get(`/api/admin/databases/${g}/tables`).then(e=>e.data),staleTime:6e4,gcTime:6e5}),{data:z,isLoading:B,refetch:V,isFetching:H}=i({queryKey:[`admin`,`databases`,g,`tables`,t,`data`,w,E],queryFn:()=>o.get(`/api/admin/databases/${g}/tables/${t}/data?page=${w}&page_size=${E}`).then(e=>e.data),enabled:!!t&&v===`data`,staleTime:3e4,gcTime:3e5,placeholderData:e=>e}),{data:ye,refetch:be}=i({queryKey:[`admin`,`databases`,g,`backups`],queryFn:()=>o.get(`/api/admin/databases/${g}/backups`).then(e=>e.data),enabled:v===`backup`,staleTime:3e4}),U=a({mutationFn:e=>o.post(`/api/admin/databases/${g}/query`,{sql:e}).then(e=>e.data),onSuccess:e=>{C(e)},onError:e=>{C({success:!1,error:e.response?.data?.detail||e.message})}}),W=a({mutationFn:()=>o.post(`/api/admin/databases/${g}/backup`).then(e=>e.data),onSuccess:t=>{t.task_id?N(t.task_id):(j({type:`success`,message:t.message}),v===`backup`&&e.invalidateQueries({queryKey:[`admin`,`databases`,g,`backups`]}),setTimeout(()=>j(null),3e3))},onError:e=>{j({type:`error`,message:e.response?.data?.detail||`备份失败`})}});a({mutationFn:e=>o.delete(`/api/admin/databases/${g}/backups/${e}`).then(e=>e.data),onSuccess:()=>{j({type:`success`,message:`备份已删除`}),be(),setTimeout(()=>j(null),3e3)},onError:e=>{j({type:`error`,message:e.response?.data?.detail||`删除失败`})}});let G=a({mutationFn:()=>o.post(`/api/admin/databases/${g}/vacuum`).then(e=>e.data),onSuccess:t=>{j({type:`success`,message:`${t.message}，节省空间：${t.saved}`}),e.invalidateQueries({queryKey:[`admin`,`databases`]}),setTimeout(()=>j(null),5e3)},onError:e=>{j({type:`error`,message:e.response?.data?.detail||`优化失败`})}}),xe=()=>{b.trim()&&U.mutate(b)};(0,m.useCallback)(e=>e?new Date(e).toLocaleString(`zh-CN`):`-`,[]);let K=(0,m.useMemo)(()=>I?.tables?.find(e=>e.name===t),[I?.tables,t]),q=(0,m.useCallback)(e=>{n(e),y(`data`),T(1),O(``)},[]),J=(0,m.useMemo)(()=>{let e=I?.tables||[];return k===`count`?[...e].sort((e,t)=>(t.row_count||0)-(e.row_count||0)):e},[I?.tables,k]);(0,m.useEffect)(()=>{!t&&J.length>0&&q(J[0].name)},[J,t,q]);let Y=(0,m.useCallback)(e=>{let t=z?.pagination?.total_pages||1;e>=1&&e<=t&&(T(e),O(``))},[z?.pagination?.total_pages]),X=(0,m.useCallback)(e=>{he(e),T(1),O(``)},[]),Z=(0,m.useCallback)(()=>{let e=parseInt(D);isNaN(e)||Y(e)},[D,Y]),Se=(0,m.useMemo)(()=>{let e=z?.pagination?.total_pages||1,t=z?.pagination?.page||1,n=[];if(e<=7)for(let t=1;t<=e;t++)n.push(t);else if(t<=4){for(let e=1;e<=5;e++)n.push(e);n.push(`...`),n.push(e)}else if(t>=e-3){n.push(1),n.push(`...`);for(let t=e-4;t<=e;t++)n.push(t)}else{n.push(1),n.push(`...`);for(let e=t-1;e<=t+1;e++)n.push(e);n.push(`...`),n.push(e)}return n},[z?.pagination]),Q=(0,m.useMemo)(()=>z?.columns||[],[z?.columns]),$=(0,m.useMemo)(()=>z?.rows||[],[z?.rows]),Ce=(0,h.jsx)(ue,{shortcuts:{refresh:()=>{R(),t&&V()}},leftActions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{icon:(0,h.jsx)(s,{size:18}),onClick:()=>{R(),t&&V()},loading:L||B,title:`刷新 (F5)`}),(0,h.jsx)(p,{}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{icon:(0,h.jsx)(te,{size:18}),active:v===`data`,onClick:()=>y(`data`),children:`数据`}),(0,h.jsx)(f,{icon:(0,h.jsx)(l,{size:18}),active:v===`structure`,onClick:()=>y(`structure`),children:`结构`}),(0,h.jsx)(f,{icon:(0,h.jsx)(c,{size:18}),active:v===`query`,onClick:()=>y(`query`),children:`查询`}),(0,h.jsx)(p,{})]}),(0,h.jsx)(f,{icon:(0,h.jsx)(ee,{size:18}),onClick:()=>G.mutate(),loading:G.isPending,children:`优化`}),(0,h.jsx)(f,{icon:(0,h.jsx)(ne,{size:18}),onClick:()=>W.mutate(),loading:W.isPending||!!M,disabled:!!M,variant:`primary`,children:M?`备份中...`:`备份`})]})}),we=L?(0,h.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,width:280},children:`加载中...`}):(0,h.jsx)(de,{header:{title:`数据表`,count:I?.total,actions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{onClick:()=>R(),title:`刷新表列表`,style:{background:`none`,border:`none`,cursor:`pointer`,padding:`2px`,color:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`},children:(0,h.jsx)(s,{size:14})}),(0,h.jsx)(`button`,{onClick:()=>ve(k===`name`?`count`:`name`),title:k===`name`?`按记录数排序`:`按名称排序`,style:{background:`none`,border:`none`,cursor:`pointer`,padding:`2px`,color:k===`count`?`var(--admin-primary)`:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`},children:k===`name`?(0,h.jsx)(re,{size:14}):(0,h.jsx)(ae,{size:14})})]})},items:J.length>0?J.map(e=>({id:e.name,label:e.name,icon:(0,h.jsx)(l,{size:16}),count:e.row_count,onClick:()=>q(e.name)})):[],selectedId:t,onSelect:e=>q(e),position:`right`,resizable:!0,width:ge,onWidthChange:_e,collapsible:!1});return(0,h.jsxs)(fe,{toolbar:Ce,sidebar:we,className:`db-management`,children:[A&&(0,h.jsxs)(`div`,{className:`status-alert ${A.type}`,children:[A.type===`success`&&(0,h.jsx)(d,{size:16}),A.type===`error`&&(0,h.jsx)(u,{size:16}),A.message]}),P&&P.status===`running`&&(0,h.jsxs)(`div`,{className:`status-alert info backup-progress-container`,style:{display:`flex`,flexDirection:`column`,gap:`8px`,padding:`12px 16px`,borderLeft:`4px solid var(--admin-primary)`,backgroundColor:`var(--cg-bg)`,borderRadius:`4px`,marginBottom:`16px`,boxShadow:`0 1px 3px rgba(0,0,0,0.05)`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,h.jsxs)(`span`,{style:{fontWeight:500,color:`var(--admin-primary)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,h.jsx)(`div`,{className:`spinner placeholder`,style:{width:`16px`,height:`16px`,border:`2px solid rgba(59, 130, 246, 0.3)`,borderTopColor:`var(--admin-primary)`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),`全量备份进行中`]}),(0,h.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#2563eb`,fontFamily:`monospace`},children:[P.progress,`%`]})]}),(0,h.jsx)(`div`,{style:{width:`100%`,height:`6px`,backgroundColor:`var(--admin-primary)`,borderRadius:`3px`,overflow:`hidden`},children:(0,h.jsx)(`div`,{style:{width:`${P.progress}%`,height:`100%`,backgroundColor:`#2563eb`,transition:`width 0.3s ease`}})}),(0,h.jsx)(`div`,{style:{fontSize:`12px`,color:`#60a5fa`,marginTop:`2px`,fontFamily:`monospace`},children:P.message})]}),t?(0,h.jsxs)(`div`,{className:`content-panel`,children:[v===`data`&&(0,h.jsxs)(`div`,{className:`data-view`,children:[(0,h.jsx)(`div`,{className:`view-header`,children:(0,h.jsx)(`h3`,{children:t})}),B?(0,h.jsx)(`div`,{className:`loading-state`,children:`加载中...`}):$.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`data-table-container`,children:(0,h.jsxs)(`table`,{className:`data-table`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{children:Q.map(e=>(0,h.jsx)(`th`,{children:e},e))})}),(0,h.jsx)(`tbody`,{children:$.map((e,t)=>(0,h.jsx)(_,{row:e,columns:Q,rowIndex:t},t))})]})}),(0,h.jsxs)(`div`,{className:`pagination-enhanced`,children:[(0,h.jsxs)(`div`,{className:`pagination-left`,children:[(0,h.jsxs)(`span`,{className:`pagination-info`,children:[`共 `,(0,h.jsx)(`strong`,{children:z?.pagination?.total_rows?.toLocaleString()||0}),` 条记录`,z?.pagination&&(0,h.jsxs)(h.Fragment,{children:[`，第 `,(0,h.jsx)(`strong`,{children:z.pagination.page}),` / `,(0,h.jsx)(`strong`,{children:z.pagination.total_pages}),` 页`]})]}),(0,h.jsxs)(`div`,{className:`page-size-selector`,children:[(0,h.jsx)(`label`,{children:`每页显示：`}),(0,h.jsx)(`select`,{value:E,onChange:e=>X(Number(e.target.value)),disabled:H,className:`page-size-select`,children:me.map(e=>(0,h.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,h.jsxs)(`div`,{className:`pagination-controls`,children:[(0,h.jsx)(`button`,{className:`pagination-btn`,disabled:!z?.pagination?.has_prev||H,onClick:()=>Y(1),title:`首页`,children:(0,h.jsx)(ie,{size:16})}),(0,h.jsx)(`button`,{className:`pagination-btn`,disabled:!z?.pagination?.has_prev||H,onClick:()=>Y((z?.pagination?.page||1)-1),title:`上一页`,children:(0,h.jsx)(oe,{size:16})}),(0,h.jsx)(`div`,{className:`page-numbers`,children:Se.map((e,t)=>{if(e===`...`)return(0,h.jsx)(`span`,{className:`page-ellipsis`,children:`...`},`ellipsis-${t}`);let n=e,r=n===(z?.pagination?.page||1);return(0,h.jsx)(`button`,{className:`page-number ${r?`active`:``}`,disabled:H,onClick:()=>Y(n),children:n},n)})}),(0,h.jsx)(`button`,{className:`pagination-btn`,disabled:!z?.pagination?.has_next||H,onClick:()=>Y((z?.pagination?.page||1)+1),title:`下一页`,children:(0,h.jsx)(se,{size:16})}),(0,h.jsx)(`button`,{className:`pagination-btn`,disabled:!z?.pagination?.has_next||H,onClick:()=>Y(z?.pagination?.total_pages||1),title:`末页`,children:(0,h.jsx)(ce,{size:16})})]}),(0,h.jsxs)(`div`,{className:`pagination-jump`,children:[(0,h.jsx)(`label`,{children:`跳转到：`}),(0,h.jsx)(`input`,{type:`number`,min:`1`,max:z?.pagination?.total_pages||1,value:D,onChange:e=>O(e.target.value),onKeyPress:e=>{e.key===`Enter`&&Z()},placeholder:`页码`,className:`jump-input`,disabled:H}),(0,h.jsx)(`button`,{className:`btn btn-sm btn-secondary`,onClick:Z,disabled:H||!D,children:`跳转`})]})]})]}):(0,h.jsxs)(`div`,{className:`empty-state`,children:[(0,h.jsx)(l,{size:32}),(0,h.jsx)(`p`,{children:`表中暂无数据`})]})]}),v===`structure`&&K&&(0,h.jsxs)(`div`,{className:`structure-view`,children:[(0,h.jsx)(`div`,{className:`view-header`,children:(0,h.jsxs)(`h3`,{children:[`表结构 - `,t]})}),(0,h.jsx)(`div`,{className:`structure-table-container`,children:(0,h.jsxs)(`table`,{className:`structure-table`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`#`}),(0,h.jsx)(`th`,{children:`列名`}),(0,h.jsx)(`th`,{children:`类型`}),(0,h.jsx)(`th`,{children:`主键`}),(0,h.jsx)(`th`,{children:`非空`}),(0,h.jsx)(`th`,{children:`默认值`})]})}),(0,h.jsx)(`tbody`,{children:K.columns.map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:e.id+1}),(0,h.jsxs)(`td`,{className:`col-name`,children:[e.primary_key&&(0,h.jsx)(`span`,{className:`pk-badge`,children:`🔑`}),e.name]}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:e.type||`TEXT`})}),(0,h.jsx)(`td`,{children:e.primary_key?`✓`:``}),(0,h.jsx)(`td`,{children:e.not_null?`✓`:``}),(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:e.default??`-`})})]},e.id))})]})})]}),v===`query`&&(0,h.jsxs)(`div`,{className:`query-view`,children:[(0,h.jsx)(`div`,{className:`view-header`,children:(0,h.jsx)(`h3`,{children:`SQL 查询`})}),(0,h.jsxs)(`div`,{className:`query-input-area`,children:[(0,h.jsx)(`textarea`,{className:`sql-input`,placeholder:`输入 SELECT 查询语句...\n例如: SELECT * FROM ${t} LIMIT 10`,value:b,onChange:e=>x(e.target.value),rows:4}),(0,h.jsxs)(`div`,{className:`query-actions`,children:[(0,h.jsx)(`button`,{className:`btn btn-primary`,onClick:xe,disabled:U.isPending||!b.trim(),children:U.isPending?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{size:14,className:`spinning`}),` 执行中...`]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{size:14}),` 执行`]})}),(0,h.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>{x(``),C(null)},children:`清空`})]})]}),S&&(0,h.jsx)(`div`,{className:`query-result`,children:S.success===!1?(0,h.jsxs)(`div`,{className:`query-error`,children:[(0,h.jsx)(u,{size:16}),(0,h.jsx)(`span`,{children:S.error})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`result-info`,children:[(0,h.jsx)(d,{size:14}),`返回 `,S.row_count,` 行`,S.limited&&(0,h.jsx)(`span`,{className:`warning`,children:`（结果已截断）`})]}),S.rows?.length>0&&(0,h.jsx)(`div`,{className:`data-table-container`,children:(0,h.jsxs)(`table`,{className:`data-table`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{children:S.columns.map(e=>(0,h.jsx)(`th`,{children:e},e))})}),(0,h.jsx)(`tbody`,{children:S.rows.map((e,t)=>(0,h.jsx)(_,{row:e,columns:S.columns,rowIndex:t},t))})]})})]})})]})]}):(0,h.jsx)(`div`,{className:`content-panel empty-panel`,children:(0,h.jsxs)(`div`,{className:`empty-state`,children:[(0,h.jsx)(le,{size:48}),(0,h.jsx)(`h3`,{children:`系统数据库`}),(0,h.jsx)(`p`,{children:`请从右侧选择一个数据表查看`})]})}),(0,h.jsx)(`style`,{children:`
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

      `})]})}export{y as DatabaseManagement};