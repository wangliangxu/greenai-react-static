import{r,j as e}from"./react-vendor-Dq4ExT0-.js";import{u as pe,b as D,a as _}from"./query-vendor-BdrigI4O.js";import{k as b}from"./index-CsQ9h10Z.js";import{A as ue,T as v,a as U}from"./AdminToolbar-QAhBdfNT.js";import"./ToolbarSelect-D0E0l3ip.js";import{A as ge}from"./AdminSidebar-CBl6ZtXk.js";import{A as be}from"./AdminPageLayout-EljMbvW1.js";/* empty css                        */import{w as L,az as xe,be as M,aC as X,cg as he,a9 as fe,ch as ve,ci as je,h as Y,g as ee,cb as ye,ai as we,q as ke,cc as ze,D as Ne}from"./ui-vendor-x7M0t6WS.js";import"./graph-elk-vendor-Li36BjGE.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./router-vendor-DsxEqWhI.js";import"./editor-vendor-LSTs8a79.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-BJGgNZpU.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ktve15hT.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-DG9ngAKL.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./useResizableSidebar-BlDZ-IoY.js";const d="public",Ce=30,Te=[10,20,30,50,100],ae=r.memo(function({row:n,columns:E,rowIndex:c}){return e.jsx("tr",{children:E.map(u=>e.jsx("td",{title:String(n[u]??""),children:Se(n[u])},u))})});function Se(m){if(m==null)return"";const n=String(m);return n.length>100?n.substring(0,100)+"...":n}function Na(){const m=pe(),[n,E]=r.useState(null),[c,u]=r.useState("data"),[z,R]=r.useState(""),[p,P]=r.useState(null),[Q,F]=r.useState(1),[I,te]=r.useState(Ce),[N,C]=r.useState(""),[re,se]=r.useState(280),[h,ne]=r.useState("name"),[j,l]=r.useState(null),[f,T]=r.useState(null),[y,S]=r.useState(null);r.useEffect(()=>{let a;return f&&(a=setInterval(()=>{b.get(`/api/admin/databases/${d}/backup/status/${f}`).then(s=>{const t=s.data;S(t),t.status==="success"?(clearInterval(a),l({type:"success",message:t.message}),c==="backup"&&m&&m.invalidateQueries({queryKey:["admin","databases",d,"backups"]}),setTimeout(()=>{l(null),T(null),S(null)},3e3)):t.status==="error"&&(clearInterval(a),l({type:"error",message:t.message}),setTimeout(()=>{l(null),T(null),S(null)},3e3))}).catch(s=>{clearInterval(a),T(null),S(null),l({type:"error",message:"获取备份进度失败"})})},500)),()=>clearInterval(a)},[f,c,m]);const{data:w,isLoading:B,refetch:$}=D({queryKey:["admin","databases",d,"tables"],queryFn:()=>b.get(`/api/admin/databases/${d}/tables`).then(a=>a.data),staleTime:6e4,gcTime:600*1e3}),{data:i,isLoading:K,refetch:W,isFetching:g}=D({queryKey:["admin","databases",d,"tables",n,"data",Q,I],queryFn:()=>b.get(`/api/admin/databases/${d}/tables/${n}/data?page=${Q}&page_size=${I}`).then(a=>a.data),enabled:!!n&&c==="data",staleTime:3e4,gcTime:300*1e3,placeholderData:a=>a}),{data:qe,refetch:ie}=D({queryKey:["admin","databases",d,"backups"],queryFn:()=>b.get(`/api/admin/databases/${d}/backups`).then(a=>a.data),enabled:c==="backup",staleTime:3e4}),A=_({mutationFn:a=>b.post(`/api/admin/databases/${d}/query`,{sql:a}).then(s=>s.data),onSuccess:a=>{P(a)},onError:a=>{P({success:!1,error:a.response?.data?.detail||a.message})}}),O=_({mutationFn:()=>b.post(`/api/admin/databases/${d}/backup`).then(a=>a.data),onSuccess:a=>{a.task_id?T(a.task_id):(l({type:"success",message:a.message}),c==="backup"&&m.invalidateQueries({queryKey:["admin","databases",d,"backups"]}),setTimeout(()=>l(null),3e3))},onError:a=>{l({type:"error",message:a.response?.data?.detail||"备份失败"})}});_({mutationFn:a=>b.delete(`/api/admin/databases/${d}/backups/${a}`).then(s=>s.data),onSuccess:()=>{l({type:"success",message:"备份已删除"}),ie(),setTimeout(()=>l(null),3e3)},onError:a=>{l({type:"error",message:a.response?.data?.detail||"删除失败"})}});const Z=_({mutationFn:()=>b.post(`/api/admin/databases/${d}/vacuum`).then(a=>a.data),onSuccess:a=>{l({type:"success",message:`${a.message}，节省空间：${a.saved}`}),m.invalidateQueries({queryKey:["admin","databases"]}),setTimeout(()=>l(null),5e3)},onError:a=>{l({type:"error",message:a.response?.data?.detail||"优化失败"})}}),oe=()=>{z.trim()&&A.mutate(z)};r.useCallback(a=>a?new Date(a).toLocaleString("zh-CN"):"-",[]);const G=r.useMemo(()=>w?.tables?.find(a=>a.name===n),[w?.tables,n]),q=r.useCallback(a=>{E(a),u("data"),F(1),C("")},[]),k=r.useMemo(()=>{const a=w?.tables||[];return h==="count"?[...a].sort((s,t)=>(t.row_count||0)-(s.row_count||0)):a},[w?.tables,h]);r.useEffect(()=>{!n&&k.length>0&&q(k[0].name)},[k,n,q]);const x=r.useCallback(a=>{const s=i?.pagination?.total_pages||1;a>=1&&a<=s&&(F(a),C(""))},[i?.pagination?.total_pages]),le=r.useCallback(a=>{te(a),F(1),C("")},[]),J=r.useCallback(()=>{const a=parseInt(N);isNaN(a)||x(a)},[N,x]),de=r.useMemo(()=>{const a=i?.pagination?.total_pages||1,s=i?.pagination?.page||1,t=[];if(a<=7)for(let o=1;o<=a;o++)t.push(o);else if(s<=4){for(let o=1;o<=5;o++)t.push(o);t.push("..."),t.push(a)}else if(s>=a-3){t.push(1),t.push("...");for(let o=a-4;o<=a;o++)t.push(o)}else{t.push(1),t.push("...");for(let o=s-1;o<=s+1;o++)t.push(o);t.push("..."),t.push(a)}return t},[i?.pagination]),V=r.useMemo(()=>i?.columns||[],[i?.columns]),H=r.useMemo(()=>i?.rows||[],[i?.rows]),ce=e.jsx(ue,{shortcuts:{refresh:()=>{$(),n&&W()}},leftActions:e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:e.jsx(L,{size:18}),onClick:()=>{$(),n&&W()},loading:B||K,title:"刷新 (F5)"}),e.jsx(U,{}),n&&e.jsxs(e.Fragment,{children:[e.jsx(v,{icon:e.jsx(xe,{size:18}),active:c==="data",onClick:()=>u("data"),children:"数据"}),e.jsx(v,{icon:e.jsx(M,{size:18}),active:c==="structure",onClick:()=>u("structure"),children:"结构"}),e.jsx(v,{icon:e.jsx(X,{size:18}),active:c==="query",onClick:()=>u("query"),children:"查询"}),e.jsx(U,{})]}),e.jsx(v,{icon:e.jsx(he,{size:18}),onClick:()=>Z.mutate(),loading:Z.isPending,children:"优化"}),e.jsx(v,{icon:e.jsx(fe,{size:18}),onClick:()=>O.mutate(),loading:O.isPending||!!f,disabled:!!f,variant:"primary",children:f?"备份中...":"备份"})]})}),me=B?e.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"var(--cg-text-muted)",width:280},children:"加载中..."}):e.jsx(ge,{header:{title:"数据表",count:w?.total,actions:e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>$(),title:"刷新表列表",style:{background:"none",border:"none",cursor:"pointer",padding:"2px",color:"var(--cg-text-muted)",display:"flex",alignItems:"center"},children:e.jsx(L,{size:14})}),e.jsx("button",{onClick:()=>ne(h==="name"?"count":"name"),title:h==="name"?"按记录数排序":"按名称排序",style:{background:"none",border:"none",cursor:"pointer",padding:"2px",color:h==="count"?"var(--admin-primary)":"var(--cg-text-muted)",display:"flex",alignItems:"center"},children:h==="name"?e.jsx(ve,{size:14}):e.jsx(je,{size:14})})]})},items:k.length>0?k.map(a=>({id:a.name,label:a.name,icon:e.jsx(M,{size:16}),count:a.row_count,onClick:()=>q(a.name)})):[],selectedId:n,onSelect:a=>q(a),position:"right",resizable:!0,width:re,onWidthChange:se,collapsible:!1});return e.jsxs(be,{toolbar:ce,sidebar:me,className:"db-management",children:[j&&e.jsxs("div",{className:`status-alert ${j.type}`,children:[j.type==="success"&&e.jsx(Y,{size:16}),j.type==="error"&&e.jsx(ee,{size:16}),j.message]}),y&&y.status==="running"&&e.jsxs("div",{className:"status-alert info backup-progress-container",style:{display:"flex",flexDirection:"column",gap:"8px",padding:"12px 16px",borderLeft:"4px solid var(--admin-primary)",backgroundColor:"var(--cg-bg)",borderRadius:"4px",marginBottom:"16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontWeight:500,color:"var(--admin-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{className:"spinner placeholder",style:{width:"16px",height:"16px",border:"2px solid rgba(59, 130, 246, 0.3)",borderTopColor:"var(--admin-primary)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"全量备份进行中"]}),e.jsxs("span",{style:{fontSize:"13px",fontWeight:600,color:"#2563eb",fontFamily:"monospace"},children:[y.progress,"%"]})]}),e.jsx("div",{style:{width:"100%",height:"6px",backgroundColor:"var(--admin-primary)",borderRadius:"3px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${y.progress}%`,height:"100%",backgroundColor:"#2563eb",transition:"width 0.3s ease"}})}),e.jsx("div",{style:{fontSize:"12px",color:"#60a5fa",marginTop:"2px",fontFamily:"monospace"},children:y.message})]}),n?e.jsxs("div",{className:"content-panel",children:[c==="data"&&e.jsxs("div",{className:"data-view",children:[e.jsx("div",{className:"view-header",children:e.jsx("h3",{children:n})}),K?e.jsx("div",{className:"loading-state",children:"加载中..."}):H.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"data-table-container",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:V.map(a=>e.jsx("th",{children:a},a))})}),e.jsx("tbody",{children:H.map((a,s)=>e.jsx(ae,{row:a,columns:V,rowIndex:s},s))})]})}),e.jsxs("div",{className:"pagination-enhanced",children:[e.jsxs("div",{className:"pagination-left",children:[e.jsxs("span",{className:"pagination-info",children:["共 ",e.jsx("strong",{children:i?.pagination?.total_rows?.toLocaleString()||0})," 条记录",i?.pagination&&e.jsxs(e.Fragment,{children:["，第 ",e.jsx("strong",{children:i.pagination.page})," / ",e.jsx("strong",{children:i.pagination.total_pages})," 页"]})]}),e.jsxs("div",{className:"page-size-selector",children:[e.jsx("label",{children:"每页显示："}),e.jsx("select",{value:I,onChange:a=>le(Number(a.target.value)),disabled:g,className:"page-size-select",children:Te.map(a=>e.jsx("option",{value:a,children:a},a))})]})]}),e.jsxs("div",{className:"pagination-controls",children:[e.jsx("button",{className:"pagination-btn",disabled:!i?.pagination?.has_prev||g,onClick:()=>x(1),title:"首页",children:e.jsx(ye,{size:16})}),e.jsx("button",{className:"pagination-btn",disabled:!i?.pagination?.has_prev||g,onClick:()=>x((i?.pagination?.page||1)-1),title:"上一页",children:e.jsx(we,{size:16})}),e.jsx("div",{className:"page-numbers",children:de.map((a,s)=>{if(a==="...")return e.jsx("span",{className:"page-ellipsis",children:"..."},`ellipsis-${s}`);const t=a,o=t===(i?.pagination?.page||1);return e.jsx("button",{className:`page-number ${o?"active":""}`,disabled:g,onClick:()=>x(t),children:t},t)})}),e.jsx("button",{className:"pagination-btn",disabled:!i?.pagination?.has_next||g,onClick:()=>x((i?.pagination?.page||1)+1),title:"下一页",children:e.jsx(ke,{size:16})}),e.jsx("button",{className:"pagination-btn",disabled:!i?.pagination?.has_next||g,onClick:()=>x(i?.pagination?.total_pages||1),title:"末页",children:e.jsx(ze,{size:16})})]}),e.jsxs("div",{className:"pagination-jump",children:[e.jsx("label",{children:"跳转到："}),e.jsx("input",{type:"number",min:"1",max:i?.pagination?.total_pages||1,value:N,onChange:a=>C(a.target.value),onKeyPress:a=>{a.key==="Enter"&&J()},placeholder:"页码",className:"jump-input",disabled:g}),e.jsx("button",{className:"btn btn-sm btn-secondary",onClick:J,disabled:g||!N,children:"跳转"})]})]})]}):e.jsxs("div",{className:"empty-state",children:[e.jsx(M,{size:32}),e.jsx("p",{children:"表中暂无数据"})]})]}),c==="structure"&&G&&e.jsxs("div",{className:"structure-view",children:[e.jsx("div",{className:"view-header",children:e.jsxs("h3",{children:["表结构 - ",n]})}),e.jsx("div",{className:"structure-table-container",children:e.jsxs("table",{className:"structure-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"列名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"主键"}),e.jsx("th",{children:"非空"}),e.jsx("th",{children:"默认值"})]})}),e.jsx("tbody",{children:G.columns.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id+1}),e.jsxs("td",{className:"col-name",children:[a.primary_key&&e.jsx("span",{className:"pk-badge",children:"🔑"}),a.name]}),e.jsx("td",{children:e.jsx("code",{children:a.type||"TEXT"})}),e.jsx("td",{children:a.primary_key?"✓":""}),e.jsx("td",{children:a.not_null?"✓":""}),e.jsx("td",{children:e.jsx("code",{children:a.default??"-"})})]},a.id))})]})})]}),c==="query"&&e.jsxs("div",{className:"query-view",children:[e.jsx("div",{className:"view-header",children:e.jsx("h3",{children:"SQL 查询"})}),e.jsxs("div",{className:"query-input-area",children:[e.jsx("textarea",{className:"sql-input",placeholder:`输入 SELECT 查询语句...
例如: SELECT * FROM ${n} LIMIT 10`,value:z,onChange:a=>R(a.target.value),rows:4}),e.jsxs("div",{className:"query-actions",children:[e.jsx("button",{className:"btn btn-primary",onClick:oe,disabled:A.isPending||!z.trim(),children:A.isPending?e.jsxs(e.Fragment,{children:[e.jsx(L,{size:14,className:"spinning"})," 执行中..."]}):e.jsxs(e.Fragment,{children:[e.jsx(X,{size:14})," 执行"]})}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>{R(""),P(null)},children:"清空"})]})]}),p&&e.jsx("div",{className:"query-result",children:p.success===!1?e.jsxs("div",{className:"query-error",children:[e.jsx(ee,{size:16}),e.jsx("span",{children:p.error})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"result-info",children:[e.jsx(Y,{size:14}),"返回 ",p.row_count," 行",p.limited&&e.jsx("span",{className:"warning",children:"（结果已截断）"})]}),p.rows?.length>0&&e.jsx("div",{className:"data-table-container",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:p.columns.map(a=>e.jsx("th",{children:a},a))})}),e.jsx("tbody",{children:p.rows.map((a,s)=>e.jsx(ae,{row:a,columns:p.columns,rowIndex:s},s))})]})})]})})]})]}):e.jsx("div",{className:"content-panel empty-panel",children:e.jsxs("div",{className:"empty-state",children:[e.jsx(Ne,{size:48}),e.jsx("h3",{children:"系统数据库"}),e.jsx("p",{children:"请从右侧选择一个数据表查看"})]})}),e.jsx("style",{children:`
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

      `})]})}export{Na as DatabaseManagement};
