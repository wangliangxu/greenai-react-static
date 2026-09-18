import{r,j as e}from"./react-vendor-DZdvhec1.js";import{u as X}from"./query-vendor-CyHNoBeC.js";import{a_ as H,r as G,l as Y}from"./index-DEf65DpF.js";import{q as Z,i as J,r as ee,j as te,s as se,h as ae,m as re,t as ie}from"./admin-media-Cp7GqDZX.js";import{V as oe}from"./VideoMetadataDisplay-DT3UF5HO.js";import{V as ne}from"./VideoInfoCards-BQTMAsKn.js";import{I as de}from"./InlineVideoEditor-Bf2cxIli.js";import{j as ce,bf as le,v as q,U as pe,bq as me,bY as ge,bg as xe,bS as ue,X as be,as as ve,bZ as he,A as fe,F as je,V as ye,a9 as ke,bE as we,b_ as Ne,s as ze}from"./ui-vendor-tV6DikQD.js";import{useNavigate as O,useParams as Se,useLocation as Ce}from"./router-vendor-BF2jFopG.js";import{C as Ie}from"./ConfirmModal-DbdaVUl5.js";import{S as Ee}from"./Skeleton-CJQlb5jy.js";/* empty css                   *//* empty css                        */import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./bilingual-BJHF5Vc6.js";import"./formatters-D5xmu4G_.js";import"./Modal-Cnt4ficm.js";const Re={basic:{name:"认知与启蒙",icon:"🌱"},intermediate:{name:"方法与工具",icon:"🔧"},advanced:{name:"实践与探究",icon:"🔬"},other:{name:"其他",icon:"📦"}};function _e({mode:o="categories",video:n,metadata:F,onSave:j,subtitleJob:i,onCancelSubtitle:b,onClearSubtitleJob:a,isEditing:M,setIsEditing:S,editorRef:y}){const C=O(),[l,k]=r.useState(!1),[V,I]=r.useState(!1),$=M!==void 0?M:V,x=S||I,[v,D]=r.useState(280),[d,E]=r.useState(!1),W=r.useRef(null),{addToast:L}=H(),w=Z(),[u,U]=r.useState("zh"),P=async()=>{if(n?.id)try{await w.mutateAsync(n.id),L({type:"success",message:"元数据计算与同步已完成"})}catch(t){const c=t,z=c.response?.data?.detail||c.message||"未知错误";L({type:"error",message:`智能生成失败: ${z}`})}},{data:h}=J({page:1,page_size:1e3}),p=Array.isArray(h)?h:h?.items||[],T=Array.isArray(h)?h.length:h?.total||0,N={basic:p.filter(t=>t.curriculum_category==="basic").length,intermediate:p.filter(t=>t.curriculum_category==="intermediate").length,advanced:p.filter(t=>t.curriculum_category==="advanced").length,other:p.filter(t=>!t.curriculum_category||t.curriculum_category==="other").length},R=Array.from(new Set(p.map(t=>t.category).filter(Boolean))).sort(),_={};p.forEach(t=>{t.category&&(_[t.category]=(_[t.category]||0)+1)});const B=r.useCallback(t=>{t.preventDefault(),E(!0)},[]);return r.useEffect(()=>{const t=z=>{if(!d)return;const A=Math.min(Math.max(200,window.innerWidth-z.clientX),400);D(A)},c=()=>{E(!1)};return d&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",c),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",c),document.body.style.cursor="",document.body.style.userSelect=""}},[d]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{ref:W,className:`video-sidebar ${l?"collapsed":""}`,style:{width:l?48:v},children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("button",{className:"sidebar-toggle",onClick:()=>k(!l),title:l?"展开侧边栏":"收起侧边栏",children:l?e.jsx(ce,{size:20}):e.jsx(le,{size:20})}),!l&&e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:1,gap:"8px"},children:[e.jsx("span",{className:"sidebar-title",style:{marginRight:"auto"},children:o==="metadata"?"":"视频分类"}),o==="metadata"&&$?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"sidebar-header-action",onClick:()=>y?.current?.save(),style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 12px",background:"var(--cg-info)",color:"white",border:"1px solid var(--cg-info)",borderRadius:"6px",cursor:"pointer",fontWeight:600,transition:"all 0.2s ease",boxShadow:"0 1px 3px color-mix(in srgb, var(--cg-info) 30%, transparent)"},children:"保存"}),e.jsx("button",{className:"sidebar-header-action",onClick:()=>x(!1),style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"var(--cg-bg)",color:"var(--cg-text-muted)",border:"1px solid var(--cg-border)",borderRadius:"6px",cursor:"pointer",fontWeight:500,transition:"all 0.2s ease"},children:"取消"})]}):e.jsxs(e.Fragment,{children:[o==="metadata"&&e.jsxs("button",{className:"sidebar-header-action smart-generate-btn",onClick:P,disabled:w.isPending,title:"利用 LLM 大模型根据字幕智能生成元数据",style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"linear-gradient(135deg, var(--cg-bg) 0%, color-mix(in srgb, var(--cg-info) 15%, var(--cg-bg)) 100%)",color:"var(--cg-info)",border:"1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))",borderRadius:"6px",cursor:w.isPending?"not-allowed":"pointer",fontWeight:500,transition:"all 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:[w.isPending?e.jsx(q,{size:13,className:"animate-spin"}):e.jsx(pe,{size:13}),e.jsx("span",{children:w.isPending?"智能生成中...":"智能生成"})]}),o==="metadata"&&j&&e.jsxs("button",{className:"sidebar-header-action",onClick:()=>x(!0),title:"编辑元数据",style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"var(--cg-bg)",color:"var(--cg-text-muted)",border:"1px solid var(--cg-border)",borderRadius:"6px",cursor:"pointer",fontWeight:500,transition:"all 0.2s ease"},children:[e.jsx(me,{size:13}),e.jsx("span",{children:"编辑"})]}),o==="metadata"&&e.jsxs("button",{className:"sidebar-header-action",onClick:()=>U(t=>t==="zh"?"en":"zh"),title:u==="zh"?"切换到英文显示":"切换到中文显示",style:{display:"flex",alignItems:"center",gap:"3px",fontSize:"0.7rem",padding:"4px 8px",background:u==="en"?"color-mix(in srgb, var(--cg-info) 10%, var(--cg-bg))":"var(--cg-bg)",color:u==="en"?"var(--cg-info)":"var(--cg-text-muted)",border:`1px solid ${u==="en"?"color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))":"var(--cg-border)"}`,borderRadius:"6px",cursor:"pointer",fontWeight:600,transition:"all 0.2s ease",letterSpacing:"0.03em"},children:[e.jsx(ge,{size:12}),e.jsx("span",{children:u==="zh"?"EN":"中"})]})]})]})]}),!l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`sidebar-resizer ${d?"active":""}`,onMouseDown:B,children:e.jsx(xe,{size:12})}),e.jsxs("nav",{className:"video-tree-view",children:[o==="metadata"&&i&&i.status!=="completed"&&e.jsxs("div",{className:"sidebar-task-section",children:[e.jsxs("div",{className:"tree-section-label",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(ue,{size:12}),"正在进行任务"]}),(i.status==="failed"||i.status==="cancelled")&&a&&e.jsx("button",{onClick:a,className:"task-close-btn",children:e.jsx(be,{size:12})})]}),e.jsxs("div",{className:"sidebar-task-card",children:[e.jsxs("div",{className:"task-info",children:[e.jsx("span",{className:"task-status",children:i.status==="failed"?"❌ 生成失败":"📹 字幕生成"}),e.jsx("span",{className:"task-stage",children:i.stage?`[ ${i.stage} ]`:""}),e.jsx("span",{className:"task-percent",children:typeof i.progress_percentage=="number"?`${Math.round(i.progress_percentage)}%`:""})]}),e.jsx("div",{className:"task-progress-bg",children:e.jsx("div",{className:`task-progress-bar ${i.status==="failed"?"failed":""}`,style:{width:`${i.progress_percentage||0}%`}})}),e.jsxs("div",{className:"task-footer",children:[e.jsx("span",{className:"task-message",title:i.message,children:i.message||(i.status==="processing"?"正在渲染中...":"准备中...")}),i.status==="processing"&&b&&e.jsx("button",{onClick:b,className:"task-action-link",children:"停止"})]})]})]}),o==="metadata"?e.jsx("div",{style:{padding:"0"},children:n?$?e.jsx(de,{ref:y,video:n,onSave:async t=>{j&&await j(t),x(!1)},onCancel:()=>x(!1)}):e.jsx(ne,{video:n,metadata:F,displayLang:u}):e.jsx("div",{className:"empty-state",children:"未选中视频"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tree-node root-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>C("/admin/videos"),children:[e.jsx(ve,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:"全部视频"}),e.jsx("span",{className:"tree-count",children:T})]})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden"},children:[e.jsx("div",{className:"tree-section-label",children:"按课程分类"}),Object.entries(Re).map(([t,{name:c,icon:z}])=>{const A=N[t]||0;return e.jsx("div",{className:"tree-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>C(`/admin/videos?curriculum=${t}`),children:[e.jsx("span",{className:"tree-icon",children:z}),e.jsx("span",{className:"tree-label",children:c}),e.jsx("span",{className:"tree-count",children:A})]})},t)}),e.jsx("div",{className:"tree-section-label",children:"按主题分类"}),R.length>0?R.map(t=>{const c=_[t]||0;return e.jsx("div",{className:"tree-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>C(`/admin/videos?category=${encodeURIComponent(t)}`),title:t,children:[e.jsx(he,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:t}),e.jsx("span",{className:"tree-count",children:c})]})},t)}):e.jsx("div",{className:"empty-state",children:"暂无主题"})]})]})]}),o==="categories"&&e.jsxs("div",{className:"sidebar-stats",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"总视频数"}),e.jsx("span",{className:"stat-value",children:T})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"当前显示"}),e.jsx("span",{className:"stat-value",children:p.length})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"主题数量"}),e.jsx("span",{className:"stat-value",children:R.length})]})]})]})]}),e.jsx("style",{children:`
      /* 右侧导航栏 */
      .video-sidebar {
        background: var(--cg-surface);
        border-left: 1px solid var(--cg-border);
        display: flex;
        flex-direction: column;
        height: calc(100vh - 144px);
        overflow: hidden;
        transition: width 0.2s ease;
        flex-shrink: 0;
        position: relative;
        order: 2;
      }

      .vd-side {
        flex: 30;
        min-width: 0;
        padding: 8px 0;
        display: flex;
        flex-direction: column;
        gap: 0;
        border-left: 1px solid var(--cg-border);
        overflow-y: auto;
        max-height: calc(100vh - 240px);
        background: var(--cg-surface);
      }

      .video-sidebar.collapsed {
        width: 48px !important;
      }

      /* 侧边栏头部 */
      .video-sidebar .sidebar-header {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 8px;
        padding: 8px 12px;
        border-bottom: 1px solid var(--cg-border);
        height: 48px;
        box-sizing: border-box;
      }

      .video-sidebar .sidebar-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        background: transparent;
        border: 1px solid transparent;
        cursor: pointer;
        color: var(--cg-text-muted);
        transition: all 0.2s;
      }

      .video-sidebar .sidebar-toggle:hover {
        background: var(--cg-bg);
        border-color: var(--cg-border);
        color: var(--cg-info);
      }

      .video-sidebar .sidebar-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--cg-text);
      }

      .vd-label {
        color: var(--cg-text-muted);
        font-size: 0.8125rem;
        font-weight: 500;
        flex-shrink: 0;
        min-width: 64px;
      }

      /* 拖拽调整器 */
      .video-sidebar .sidebar-resizer {
        position: absolute;
        left: 0;
        top: 48px;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.2s, background 0.2s;
      }

      .video-sidebar:hover .sidebar-resizer,
      .video-sidebar .sidebar-resizer.active {
        opacity: 1;
      }

      .video-sidebar .sidebar-resizer:hover,
      .video-sidebar .sidebar-resizer.active {
        background: var(--cg-border);
      }

      .video-sidebar .sidebar-resizer svg {
        color: var(--cg-text-muted);
      }

      /* 树形导航 */
      .video-sidebar .video-tree-view {
        flex: 1;
        padding: 8px 0;
        overflow-y: auto;
      }

      .video-sidebar .tree-item {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 10px 12px;
        border: none;
        background: transparent;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.875rem;
        color: var(--cg-text-muted);
        transition: all 0.15s;
      }

      .video-sidebar .tree-item:hover {
        background: var(--cg-bg);
        color: var(--cg-text);
      }

      .video-sidebar .tree-item.active {
        background: var(--cg-bg);
        color: var(--cg-info);
      }

      .video-sidebar .tree-icon {
        flex-shrink: 0;
      }

      .video-sidebar .tree-label {
        flex: 1;
        text-align: left;
      }

      .vd-card {
        padding: 16px 12px;
        background: transparent;
        border: none;
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid var(--cg-bg);
      }

      .vd-card:last-of-type {
        border-bottom: none;
      }

      .video-sidebar .tree-count {
        padding: 2px 8px;
        background: var(--cg-bg);
        border-radius: 10px;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--cg-text-muted);
      }

      .video-sidebar .tree-item.active .tree-count {
        background: color-mix(in srgb, var(--cg-info) 10%, var(--cg-bg));
        color: var(--cg-info);
      }

      .video-sidebar .tree-section-label {
        padding: 12px 12px 6px;
        font-size: 0.6875rem;
        font-weight: 600;
        color: var(--cg-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      /* 统计信息 */
      .video-sidebar .sidebar-stats {
        padding: 16px;
        border-top: 1px solid var(--cg-border);
        background: var(--cg-bg);
      }

      .video-sidebar .stat-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
      }

      .video-sidebar .stat-item:not(:last-child) {
        border-bottom: 1px solid var(--cg-border);
      }

      .video-sidebar .stat-label {
        color: var(--cg-text-muted);
        font-size: 0.8125rem;
      }

      .video-sidebar .stat-value {
        font-weight: 600;
        color: var(--cg-text);
      }

      .video-sidebar .empty-state {
        padding: 12px;
        color: var(--cg-text-muted);
        font-size: 0.8125rem;
        text-align: center;
      }

      /* 任务进度条样式 */
      .sidebar-task-section {
        padding: 0 12px 16px;
        border-bottom: 1px solid var(--cg-bg);
        margin-bottom: 8px;
      }

      .sidebar-task-card {
        background: var(--cg-bg);
        border: 1px solid var(--cg-border);
        border-radius: 8px;
        padding: 10px;
        margin-top: 4px;
      }

      .task-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
      }

      .task-status {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--cg-text);
      }

      .task-stage {
        font-size: 0.7rem;
        color: var(--cg-text-muted);
        margin-left: 4px;
        flex: 1;
      }

      .task-percent {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--cg-info);
      }

      .task-progress-bg {
        height: 4px;
        background: var(--cg-border);
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 6px;
      }

      .task-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--cg-info), color-mix(in srgb, var(--cg-info) 60%, white));
        border-radius: 2px;
        transition: width 0.4s ease-out;
      }

      .task-progress-bar.failed {
        background: var(--cg-error);
      }

      .task-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      }

      .task-message {
        font-size: 0.65rem;
        color: var(--cg-text-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
      }

      .task-action-link {
        font-size: 0.65rem;
        color: var(--cg-error);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        text-decoration: underline;
      }

      .task-close-btn {
        background: none;
        border: none;
        padding: 2px;
        cursor: pointer;
        color: var(--cg-text-muted);
        display: flex;
        align-items: center;
      }

      .task-close-btn:hover {
        color: var(--cg-text-muted);
      }

      /* 响应式 */
      @media (max-width: 1024px) {
        .video-sidebar {
          display: none;
        }
      }
    `})]})}function Le(o){if(!o?.effective_audio_model)return"";const n=(o.effective_audio_provider||"").toLowerCase();return`${{aliyun:"阿里云",openai:"OpenAI","local-sensevoice":"本地 SenseVoice","local-whisper":"本地 Whisper（旧链路）"}[n]||o.effective_audio_provider||"未知来源"} · ${o.effective_audio_model}`}function At(){const{id:o}=Se(),n=O(),j=Ce().state?.returnTo,i=typeof j=="string"&&j.startsWith("/admin/videos")?j:"/admin/videos",b=X(),{data:a,isLoading:M,refetch:S}=ee(o),y=te(),C=se(),[l,k]=r.useState(""),[V,I]=r.useState(""),[$,x]=r.useState(!1),[v,D]=r.useState(""),[d,E]=r.useState(null),[W,L]=r.useState(!1),[w,u]=r.useState(!1),U=r.useRef(null),[P,h]=r.useState("zh"),[p,T]=r.useState(1),[N,R]=r.useState(!1),_=Le(d);r.useEffect(()=>{if(!a)return;const s=a.has_subtitles;R(s===!0)},[a]);const B=async()=>{if(a?.id)try{k("");const m=await(await Y(G(`/api/admin/videos/${a.id}/subtitles/zip`))).blob(),g=window.URL.createObjectURL(m),f=document.createElement("a");f.href=g,f.download=`${a.title||a.id}-subtitles.zip`,document.body.appendChild(f),f.click(),f.remove(),window.URL.revokeObjectURL(g)}catch(s){console.error("Failed to download subtitle zip:",s),k(s instanceof Error?s.message:"下载字幕失败，请稍后重试")}};r.useEffect(()=>{if(!v)return;let s=null;const m=async()=>{try{const g=await ae(v);E(g.job),(g.job.status==="completed"||g.job.status==="failed"||g.job.status==="cancelled")&&(s&&clearInterval(s),g.job.status==="completed"&&(await b.invalidateQueries({queryKey:["video",a?.id]}),await S(),R(!0),I("字幕已自动生成完毕！"),setTimeout(()=>I(""),5e3)))}catch(g){const f=g;k(f?.response?.data?.detail||f?.message||"获取字幕任务失败"),s&&clearInterval(s)}};return m(),s=setInterval(m,2e3),()=>{s&&clearInterval(s)}},[v,b,a?.id,S]);const t=async()=>{if(a){L(!0),E(null);try{const s=await re(a.id);D(s.job_id),E(s.job)}catch(s){const m=s;k(m?.response?.data?.detail||m?.message||"生成字幕失败")}finally{L(!1)}}},c=async()=>{if(v)try{await ie(v)}catch{}},z=()=>{a&&x(!0)},A=async()=>{if(a)try{await y.mutateAsync(a.id),x(!1),n(i)}catch(s){const m=s;k(m?.response?.data?.detail||m?.message||"删除视频失败"),x(!1)}},Q=async s=>{a&&(await C.mutateAsync({videoId:a.id,data:s}),await b.invalidateQueries({queryKey:["video",a.id]}),await b.invalidateQueries({queryKey:["videos"]}),await S(),I("快速编辑保存成功！"),setTimeout(()=>I(""),3e3))},K=async s=>{a&&(await C.mutateAsync({videoId:a.id,data:{status:s}}),await b.invalidateQueries({queryKey:["video",a.id]}),await S())};return M?e.jsx("div",{className:"page-container",children:e.jsx(Ee,{height:400})}):a?e.jsxs("div",{className:"page-container",children:[e.jsxs("div",{className:"video-detail-layout",children:[e.jsxs("div",{className:"detail-main",children:[e.jsxs("div",{className:"vd-toolbar",children:[e.jsx("div",{className:"vd-toolbar-left",children:e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-back",onClick:()=>n(i),children:[e.jsx(fe,{size:18}),"返回列表"]})}),e.jsxs("div",{className:"vd-toolbar-actions",children:[e.jsxs("button",{className:`vd-toolbar-btn ${N?"vd-toolbar-btn-success":""}`,onClick:()=>{N&&!window.confirm("该视频已有字幕，确定要重新生成吗？")||t()},disabled:W||!!v,title:N?"该视频已有字幕，点击可重新生成":"自动生成中英文字幕",children:[W?e.jsx(q,{size:16,className:"vd-spinning"}):e.jsx(je,{size:16}),N?"✓ 已有字幕":"字幕生成"]}),e.jsxs("a",{className:"vd-toolbar-btn",href:`${G(a.url)}?download=true`,target:"_blank",rel:"noreferrer",title:"下载原视频文件",children:[e.jsx(ye,{size:16}),"下载视频"]}),(d?.status==="completed"||N)&&e.jsxs("button",{className:"vd-toolbar-btn",onClick:()=>{B()},title:"下载中英双语 SRT 字幕包",children:[e.jsx(ke,{size:16}),"下载字幕"]}),e.jsxs("div",{className:"vd-toolbar-select-group",children:[e.jsx(we,{size:16,className:"vd-toolbar-icon"}),e.jsxs("select",{className:"vd-toolbar-select",value:p,onChange:s=>T(parseFloat(s.target.value)),children:[e.jsx("option",{value:"0.5",children:"0.5x"}),e.jsx("option",{value:"0.75",children:"0.75x"}),e.jsx("option",{value:"1",children:"1.0x"}),e.jsx("option",{value:"1.25",children:"1.25x"}),e.jsx("option",{value:"1.5",children:"1.5x"}),e.jsx("option",{value:"2",children:"2.0x"})]})]}),e.jsxs("div",{className:"vd-toolbar-select-group",children:[e.jsx(Ne,{size:16,className:"vd-toolbar-icon"}),e.jsxs("select",{className:"vd-toolbar-select",value:P,onChange:s=>h(s.target.value),children:[e.jsx("option",{value:"zh",children:"中文"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"off",children:"关闭字幕"})]})]}),e.jsx("div",{className:"vd-toolbar-divider"}),e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-danger",onClick:z,disabled:y.isPending,title:"删除视频",children:[y.isPending?e.jsx(q,{size:16,className:"vd-spinning"}):e.jsx(ze,{size:16}),"删除"]})]})]}),e.jsx(Ie,{isOpen:$,onClose:()=>x(!1),onConfirm:A,title:"确认删除视频",message:`确定要删除视频 "${a.title}" 吗？此操作不可恢复。`,confirmText:"立即删除",cancelText:"取消",type:"danger",isLoading:y.isPending}),l&&e.jsxs("div",{style:{padding:"12px",background:"var(--admin-danger-light)",color:"var(--admin-danger)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:l})]}),V&&e.jsxs("div",{style:{padding:"12px",background:"var(--admin-success-light)",color:"var(--admin-success)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"✅"}),e.jsx("span",{children:V})]}),d&&_&&e.jsxs("div",{style:{padding:"12px 14px",background:"color-mix(in srgb, var(--cg-info) 10%, var(--cg-surface))",color:"var(--cg-info)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",border:"1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))"},children:[e.jsxs("div",{style:{fontWeight:600,marginBottom:"4px"},children:["实际字幕 ASR：",_]}),d.effective_audio_reason&&e.jsx("div",{style:{color:"var(--cg-text-muted)"},children:d.effective_audio_reason})]}),e.jsx("div",{className:"card",style:{marginBottom:"24px"},children:e.jsx(oe,{metadata:a.metadata,compact:!1,video:a,onStatusChange:K,subtitleSelection:P,playbackRate:p})})]}),e.jsx(_e,{video:a,metadata:a.metadata,mode:"metadata",onSave:async s=>{await Q(s),u(!1)},subtitleJob:d,onCancelSubtitle:c,onClearSubtitleJob:()=>D(""),isEditing:w,setIsEditing:u,editorRef:U})]}),e.jsx("style",{children:`
    .video-detail-layout {
      display: flex;
      gap: 0;
      height: calc(100vh - 144px);
      width: 100%;
      box-sizing: border-box;
      margin: 0 -16px;
    }

    .detail-main {
      flex: 1;
      overflow-y: auto;
      min-width: 0;
      width: 100%;
      box-sizing: border-box;
    }
  `})]}):e.jsx("div",{className:"page-container",children:e.jsxs("div",{className:"card",style:{textAlign:"center",padding:"48px"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"📹"}),e.jsx("h3",{style:{marginBottom:"8px"},children:"视频不存在"}),e.jsx("p",{style:{color:"var(--cg-text-muted)",marginBottom:"24px"},children:"找不到指定的视频"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>n(i),children:"返回列表"})]})})}export{At as VideoDetail};
