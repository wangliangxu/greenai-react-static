import{r as n,j as e}from"./react-vendor-DZdvhec1.js";import"./index-DEf65DpF.js";import{b as y,j as v,k as j,l as k}from"./admin-settings-DY6X7njE.js";import{M as z}from"./Modal-Cnt4ficm.js";import{A as C,T as s}from"./AdminToolbar-r8gKKq_M.js";import"./ToolbarSelect-DQhv_JzV.js";import{A as S,r as T,v as w,bN as D,bq as _,s as A,g as R}from"./ui-vendor-tV6DikQD.js";import{useNavigate as W}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";const Te=()=>{const l=W(),{data:d,isLoading:m}=y(),c=v(),p=j(),g=k(),[i,t]=n.useState(null),[x,o]=n.useState(!1),u=()=>{t({theme_key:"",name:"",icon:"📄",description:""}),o(!0)},f=r=>{t(r),o(!0)},h=async r=>{if(r.is_system){alert("系统主题无法删除");return}if(window.confirm(`确定要删除主题 "${r.name}" 吗？这可能导致关联数据失去分类。`))try{await g.mutateAsync(r.id),alert("主题已删除")}catch(a){alert(`删除失败: ${a.message}`)}},b=async r=>{if(r.preventDefault(),!i?.theme_key||!i?.name){alert("主键和名称为必填项");return}try{i.id?(await p.mutateAsync({themeId:i.id,themeData:i}),alert("主题已更新")):(await c.mutateAsync(i),alert("主题已创建")),o(!1),t(null)}catch(a){alert(`保存失败: ${a.message}`)}};return e.jsxs("div",{className:"page-container",children:[e.jsx(C,{leftActions:e.jsxs(e.Fragment,{children:[e.jsx(s,{icon:e.jsx(S,{size:18}),variant:"secondary",onClick:()=>l("/admin/data"),children:"返回"}),e.jsx(s,{icon:e.jsx(T,{size:18}),variant:"primary",onClick:u,children:"新增主题"})]})}),e.jsx("div",{className:"glass-panel",style:{marginTop:"1rem",padding:"2rem",borderRadius:"24px",background:"var(--cg-surface)",minHeight:"calc(100vh - 250px)"},children:m?e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"5rem 0",gap:"1rem"},children:[e.jsx(w,{size:40,className:"spinning",style:{color:"var(--admin-primary)"}}),e.jsx("p",{style:{color:"var(--admin-primary)",fontWeight:700},children:"正在加载分类体系..."})]}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"1.5rem"},children:d?.map(r=>e.jsxs("div",{style:{backgroundColor:"var(--cg-surface)",border:"1px solid var(--cg-bg)",borderRadius:"16px",padding:"1.25rem",display:"flex",alignItems:"flex-start",gap:"1rem",transition:"all 0.2s",position:"relative",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},className:"theme-card-hover",children:[e.jsx("div",{style:{fontSize:"2rem",padding:"0.75rem",backgroundColor:"var(--cg-bg)",borderRadius:"12px"},children:r.icon||"📄"}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.25rem"},children:[e.jsx("h3",{style:{fontWeight:800,color:"var(--cg-text)",fontSize:"1rem",margin:0},children:r.name}),r.is_system===1&&e.jsx(D,{size:14,color:"var(--admin-primary)"})]}),e.jsx("code",{style:{fontSize:"10px",color:"var(--admin-primary)",fontWeight:800,backgroundColor:"var(--admin-primary-light)",padding:"0.125rem 0.5rem",borderRadius:"100px",display:"inline-block",marginBottom:"0.5rem"},children:r.theme_key}),e.jsx("p",{style:{fontSize:"0.8125rem",color:"var(--cg-text-muted)",lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",margin:0},children:r.description||"暂无详细描述"})]}),e.jsxs("div",{className:"theme-card-actions",style:{display:"flex",flexDirection:"column",gap:"0.625rem"},children:[e.jsx("button",{onClick:()=>f(r),className:"action-btn edit-btn",title:"编辑内容",children:e.jsx(_,{size:16})}),e.jsx("button",{onClick:()=>h(r),className:`action-btn delete-btn ${r.is_system?"disabled":""}`,disabled:r.is_system===1,title:r.is_system?"系统保护：禁止删除":"彻底移除主题",children:e.jsx(A,{size:16})})]})]},r.id))})}),e.jsx(z,{isOpen:x,onClose:()=>o(!1),title:i?.id?"修订科学主题":"开辟新科学主题",width:"500px",children:e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("label",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--cg-text)"},children:"主题标识符 (Theme Key)"}),e.jsx("input",{disabled:!!i?.id,value:i?.theme_key,onChange:r=>t({...i,theme_key:r.target.value}),placeholder:"例如: polar_ice_core",style:{padding:"0.75rem 1rem",border:"1px solid var(--cg-border)",borderRadius:"10px",fontSize:"0.875rem",fontFamily:"monospace",backgroundColor:i?.id?"var(--cg-bg)":"var(--cg-surface)",outline:"none"}}),!i?.id&&e.jsx("p",{style:{fontSize:"10px",color:"var(--cg-text-muted)"},children:"创建后不可修改，建议使用小写字母与下划线"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"3fr 1fr",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("label",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--cg-text)"},children:"显示名称"}),e.jsx("input",{disabled:i?.is_system===1,value:i?.name,onChange:r=>t({...i,name:r.target.value}),placeholder:"请输入主题名称",style:{padding:"0.75rem 1rem",border:"1px solid var(--cg-border)",borderRadius:"10px",fontSize:"0.875rem",outline:"none"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("label",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--cg-text)"},children:"图标"}),e.jsx("input",{value:i?.icon,onChange:r=>t({...i,icon:r.target.value}),placeholder:"Emoji",style:{padding:"0.75rem",border:"1px solid var(--cg-border)",borderRadius:"10px",fontSize:"1.25rem",textAlign:"center",outline:"none"}})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("label",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--cg-text)"},children:"科学描述"}),e.jsx("textarea",{value:i?.description,onChange:r=>t({...i,description:r.target.value}),placeholder:"概括该科学主题覆盖的具体范畴...",rows:4,style:{padding:"0.75rem 1rem",border:"1px solid var(--cg-border)",borderRadius:"10px",fontSize:"0.875rem",outline:"none",resize:"none"}})]}),i?.is_system===1&&e.jsxs("div",{style:{padding:"0.75rem 1rem",backgroundColor:"var(--admin-warning-light)",border:"1px solid #ffedd5",borderRadius:"12px",display:"flex",gap:"0.5rem",color:"#c2410c"},children:[e.jsx(R,{size:16,style:{flexShrink:0}}),e.jsx("p",{style:{fontSize:"10px",lineHeight:1.5,margin:0},children:"系统内置主题受物理锁保护，名称不可编辑。"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem",marginTop:"1rem"},children:[e.jsx("button",{type:"button",onClick:()=>o(!1),style:{padding:"0.625rem 1.25rem",border:"1px solid var(--cg-border)",borderRadius:"10px",backgroundColor:"var(--cg-surface)",cursor:"pointer",fontWeight:600,fontSize:"0.875rem"},children:"取消"}),e.jsx("button",{type:"submit",className:"btn-premium",style:{padding:"0.625rem 1.5rem",background:"var(--brand-gradient)",color:"white",border:"none",borderRadius:"10px",fontWeight:700,cursor:"pointer",fontSize:"0.875rem"},children:"确认保存"})]})]})})}),e.jsx("style",{children:`
        .theme-card-hover:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          transform: translateY(-2px);
          border-color: #e0e7ff !important;
        }
        .theme-card-hover .theme-card-actions {
          opacity: 1; /* 始终可见 */
          transition: transform 0.2s ease;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          background: var(--cg-surface);
        }

        .edit-btn {
          color: #4f46e5;
          border: 1px solid #e0e7ff;
        }

        .edit-btn:hover {
          background: var(--cg-bg);
          border-color: #c4b5fd;
          transform: scale(1.05);
        }

        .delete-btn {
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger-light);
        }

        .delete-btn:hover:not(.disabled) {
          background: var(--cg-bg);
          border-color: var(--admin-danger-light);
          transform: scale(1.05);
        }

        .delete-btn.disabled {
          color: var(--cg-text-muted);
          border-color: var(--cg-bg);
          background-color: var(--cg-bg);
          cursor: not-allowed;
          opacity: 0.6;
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})};export{Te as default};
