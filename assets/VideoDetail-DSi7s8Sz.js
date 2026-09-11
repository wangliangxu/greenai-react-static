import{r,j as e}from"./react-vendor-Dq4ExT0-.js";import{u as O}from"./query-vendor-BdrigI4O.js";import{aZ as Q,r as G,l as K}from"./index-Bhg77C9U.js";import{q as X,i as H,r as Y,j as Z,s as J,h as ee,m as te,t as se}from"./admin-media-CkyPoyp_.js";import{V as ae}from"./VideoMetadataDisplay-DGuhsdow.js";import{V as re}from"./VideoInfoCards-yTnQyPlT.js";import{I as ie}from"./InlineVideoEditor-Dz1RC1LA.js";import{j as oe,bg as ne,v as T,U as de,bo as ce,bU as le,bh as me,bP as pe,X as ge,as as xe,bV as ue,A as be,F as ve,V as he,a9 as fe,bB as je,bW as ye,s as ke}from"./ui-vendor-x7M0t6WS.js";import{useNavigate as q,useParams as we}from"./router-vendor-DsxEqWhI.js";import{C as Ne}from"./ConfirmModal-C2c4TPr8.js";import{S as ze}from"./Skeleton-DBO_5h0b.js";/* empty css                   *//* empty css                        */import"./graph-elk-vendor-Li36BjGE.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./editor-vendor-LSTs8a79.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-BJGgNZpU.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ktve15hT.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-DG9ngAKL.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./bilingual-BJHF5Vc6.js";import"./formatters-D5xmu4G_.js";import"./Modal-DfM7YLUw.js";const Se={basic:{name:"认知与启蒙",icon:"🌱"},intermediate:{name:"方法与工具",icon:"🔧"},advanced:{name:"实践与探究",icon:"🔬"},other:{name:"其他",icon:"📦"}};function Ce({mode:o="categories",video:c,metadata:u,onSave:a,subtitleJob:i,onCancelSubtitle:y,onClearSubtitleJob:k,isEditing:C,setIsEditing:V,editorRef:b}){const z=q(),[n,W]=r.useState(!1),[S,v]=r.useState(!1),I=C!==void 0?C:S,l=V||v,[E,A]=r.useState(280),[w,M]=r.useState(!1),$=r.useRef(null),{addToast:D}=Q(),h=X(),[f,P]=r.useState("zh"),U=async()=>{if(c?.id)try{await h.mutateAsync(c.id),D({type:"success",message:"元数据计算与同步已完成"})}catch(t){const m=t,N=m.response?.data?.detail||m.message||"未知错误";D({type:"error",message:`智能生成失败: ${N}`})}},{data:d}=H({page:1,page_size:1e3}),p=Array.isArray(d)?d:d?.items||[],R=Array.isArray(d)?d.length:d?.total||0,B={basic:p.filter(t=>t.curriculum_category==="basic").length,intermediate:p.filter(t=>t.curriculum_category==="intermediate").length,advanced:p.filter(t=>t.curriculum_category==="advanced").length,other:p.filter(t=>!t.curriculum_category||t.curriculum_category==="other").length},L=Array.from(new Set(p.map(t=>t.category).filter(Boolean))).sort(),_={};p.forEach(t=>{t.category&&(_[t.category]=(_[t.category]||0)+1)});const F=r.useCallback(t=>{t.preventDefault(),M(!0)},[]);return r.useEffect(()=>{const t=N=>{if(!w)return;const s=Math.min(Math.max(200,window.innerWidth-N.clientX),400);A(s)},m=()=>{M(!1)};return w&&(document.addEventListener("mousemove",t),document.addEventListener("mouseup",m),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""}},[w]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{ref:$,className:`video-sidebar ${n?"collapsed":""}`,style:{width:n?48:E},children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("button",{className:"sidebar-toggle",onClick:()=>W(!n),title:n?"展开侧边栏":"收起侧边栏",children:n?e.jsx(oe,{size:20}):e.jsx(ne,{size:20})}),!n&&e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:1,gap:"8px"},children:[e.jsx("span",{className:"sidebar-title",style:{marginRight:"auto"},children:o==="metadata"?"":"视频分类"}),o==="metadata"&&I?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"sidebar-header-action",onClick:()=>b?.current?.save(),style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 12px",background:"var(--cg-info)",color:"white",border:"1px solid var(--cg-info)",borderRadius:"6px",cursor:"pointer",fontWeight:600,transition:"all 0.2s ease",boxShadow:"0 1px 3px color-mix(in srgb, var(--cg-info) 30%, transparent)"},children:"保存"}),e.jsx("button",{className:"sidebar-header-action",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"var(--cg-bg)",color:"var(--cg-text-muted)",border:"1px solid var(--cg-border)",borderRadius:"6px",cursor:"pointer",fontWeight:500,transition:"all 0.2s ease"},children:"取消"})]}):e.jsxs(e.Fragment,{children:[o==="metadata"&&e.jsxs("button",{className:"sidebar-header-action smart-generate-btn",onClick:U,disabled:h.isPending,title:"利用 LLM 大模型根据字幕智能生成元数据",style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"linear-gradient(135deg, var(--cg-bg) 0%, color-mix(in srgb, var(--cg-info) 15%, var(--cg-bg)) 100%)",color:"var(--cg-info)",border:"1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))",borderRadius:"6px",cursor:h.isPending?"not-allowed":"pointer",fontWeight:500,transition:"all 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:[h.isPending?e.jsx(T,{size:13,className:"animate-spin"}):e.jsx(de,{size:13}),e.jsx("span",{children:h.isPending?"智能生成中...":"智能生成"})]}),o==="metadata"&&a&&e.jsxs("button",{className:"sidebar-header-action",onClick:()=>l(!0),title:"编辑元数据",style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"var(--cg-bg)",color:"var(--cg-text-muted)",border:"1px solid var(--cg-border)",borderRadius:"6px",cursor:"pointer",fontWeight:500,transition:"all 0.2s ease"},children:[e.jsx(ce,{size:13}),e.jsx("span",{children:"编辑"})]}),o==="metadata"&&e.jsxs("button",{className:"sidebar-header-action",onClick:()=>P(t=>t==="zh"?"en":"zh"),title:f==="zh"?"切换到英文显示":"切换到中文显示",style:{display:"flex",alignItems:"center",gap:"3px",fontSize:"0.7rem",padding:"4px 8px",background:f==="en"?"color-mix(in srgb, var(--cg-info) 10%, var(--cg-bg))":"var(--cg-bg)",color:f==="en"?"var(--cg-info)":"var(--cg-text-muted)",border:`1px solid ${f==="en"?"color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))":"var(--cg-border)"}`,borderRadius:"6px",cursor:"pointer",fontWeight:600,transition:"all 0.2s ease",letterSpacing:"0.03em"},children:[e.jsx(le,{size:12}),e.jsx("span",{children:f==="zh"?"EN":"中"})]})]})]})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`sidebar-resizer ${w?"active":""}`,onMouseDown:F,children:e.jsx(me,{size:12})}),e.jsxs("nav",{className:"video-tree-view",children:[o==="metadata"&&i&&i.status!=="completed"&&e.jsxs("div",{className:"sidebar-task-section",children:[e.jsxs("div",{className:"tree-section-label",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(pe,{size:12}),"正在进行任务"]}),(i.status==="failed"||i.status==="cancelled")&&k&&e.jsx("button",{onClick:k,className:"task-close-btn",children:e.jsx(ge,{size:12})})]}),e.jsxs("div",{className:"sidebar-task-card",children:[e.jsxs("div",{className:"task-info",children:[e.jsx("span",{className:"task-status",children:i.status==="failed"?"❌ 生成失败":"📹 字幕生成"}),e.jsx("span",{className:"task-stage",children:i.stage?`[ ${i.stage} ]`:""}),e.jsx("span",{className:"task-percent",children:typeof i.progress_percentage=="number"?`${Math.round(i.progress_percentage)}%`:""})]}),e.jsx("div",{className:"task-progress-bg",children:e.jsx("div",{className:`task-progress-bar ${i.status==="failed"?"failed":""}`,style:{width:`${i.progress_percentage||0}%`}})}),e.jsxs("div",{className:"task-footer",children:[e.jsx("span",{className:"task-message",title:i.message,children:i.message||(i.status==="processing"?"正在渲染中...":"准备中...")}),i.status==="processing"&&y&&e.jsx("button",{onClick:y,className:"task-action-link",children:"停止"})]})]})]}),o==="metadata"?e.jsx("div",{style:{padding:"0"},children:c?I?e.jsx(ie,{ref:b,video:c,onSave:async t=>{a&&await a(t),l(!1)},onCancel:()=>l(!1)}):e.jsx(re,{video:c,metadata:u,displayLang:f}):e.jsx("div",{className:"empty-state",children:"未选中视频"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tree-node root-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>z("/admin/videos"),children:[e.jsx(xe,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:"全部视频"}),e.jsx("span",{className:"tree-count",children:R})]})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden"},children:[e.jsx("div",{className:"tree-section-label",children:"按课程分类"}),Object.entries(Se).map(([t,{name:m,icon:N}])=>{const s=B[t]||0;return e.jsx("div",{className:"tree-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>z(`/admin/videos?curriculum=${t}`),children:[e.jsx("span",{className:"tree-icon",children:N}),e.jsx("span",{className:"tree-label",children:m}),e.jsx("span",{className:"tree-count",children:s})]})},t)}),e.jsx("div",{className:"tree-section-label",children:"按主题分类"}),L.length>0?L.map(t=>{const m=_[t]||0;return e.jsx("div",{className:"tree-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>z(`/admin/videos?category=${encodeURIComponent(t)}`),title:t,children:[e.jsx(ue,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:t}),e.jsx("span",{className:"tree-count",children:m})]})},t)}):e.jsx("div",{className:"empty-state",children:"暂无主题"})]})]})]}),o==="categories"&&e.jsxs("div",{className:"sidebar-stats",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"总视频数"}),e.jsx("span",{className:"stat-value",children:R})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"当前显示"}),e.jsx("span",{className:"stat-value",children:p.length})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-label",children:"主题数量"}),e.jsx("span",{className:"stat-value",children:L.length})]})]})]})]}),e.jsx("style",{children:`
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
    `})]})}function Ie(o){if(!o?.effective_audio_model)return"";const c=(o.effective_audio_provider||"").toLowerCase();return`${{aliyun:"阿里云",openai:"OpenAI","local-sensevoice":"本地 SenseVoice","local-whisper":"本地 Whisper（旧链路）"}[c]||o.effective_audio_provider||"未知来源"} · ${o.effective_audio_model}`}function Et(){const{id:o}=we(),c=q(),u=O(),{data:a,isLoading:i,refetch:y}=Y(o),k=Z(),C=J(),[V,b]=r.useState(""),[z,n]=r.useState(""),[W,S]=r.useState(!1),[v,I]=r.useState(""),[l,E]=r.useState(null),[A,w]=r.useState(!1),[M,$]=r.useState(!1),D=r.useRef(null),[h,f]=r.useState("zh"),[P,U]=r.useState(1),[d,p]=r.useState(!1),R=Ie(l);r.useEffect(()=>{if(!a)return;const s=a.has_subtitles;p(s===!0)},[a]);const B=async()=>{if(a?.id)try{b("");const g=await(await K(G(`/api/admin/videos/${a.id}/subtitles/zip`))).blob(),x=window.URL.createObjectURL(g),j=document.createElement("a");j.href=x,j.download=`${a.title||a.id}-subtitles.zip`,document.body.appendChild(j),j.click(),j.remove(),window.URL.revokeObjectURL(x)}catch(s){console.error("Failed to download subtitle zip:",s),b(s instanceof Error?s.message:"下载字幕失败，请稍后重试")}};r.useEffect(()=>{if(!v)return;let s=null;const g=async()=>{try{const x=await ee(v);E(x.job),(x.job.status==="completed"||x.job.status==="failed"||x.job.status==="cancelled")&&(s&&clearInterval(s),x.job.status==="completed"&&(await u.invalidateQueries({queryKey:["video",a?.id]}),await y(),p(!0),n("字幕已自动生成完毕！"),setTimeout(()=>n(""),5e3)))}catch(x){const j=x;b(j?.response?.data?.detail||j?.message||"获取字幕任务失败"),s&&clearInterval(s)}};return g(),s=setInterval(g,2e3),()=>{s&&clearInterval(s)}},[v,u,a?.id,y]);const L=async()=>{if(a){w(!0),E(null);try{const s=await te(a.id);I(s.job_id),E(s.job)}catch(s){const g=s;b(g?.response?.data?.detail||g?.message||"生成字幕失败")}finally{w(!1)}}},_=async()=>{if(v)try{await se(v)}catch{}},F=()=>{a&&S(!0)},t=async()=>{if(a)try{await k.mutateAsync(a.id),S(!1),c("/admin/videos")}catch(s){const g=s;b(g?.response?.data?.detail||g?.message||"删除视频失败"),S(!1)}},m=async s=>{a&&(await C.mutateAsync({videoId:a.id,data:s}),await u.invalidateQueries({queryKey:["video",a.id]}),await u.invalidateQueries({queryKey:["videos"]}),await y(),n("快速编辑保存成功！"),setTimeout(()=>n(""),3e3))},N=async s=>{a&&(await C.mutateAsync({videoId:a.id,data:{status:s}}),await u.invalidateQueries({queryKey:["video",a.id]}),await y())};return i?e.jsx("div",{className:"page-container",children:e.jsx(ze,{height:400})}):a?e.jsxs("div",{className:"page-container",children:[e.jsxs("div",{className:"video-detail-layout",children:[e.jsxs("div",{className:"detail-main",children:[e.jsxs("div",{className:"vd-toolbar",children:[e.jsx("div",{className:"vd-toolbar-left",children:e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-back",onClick:()=>c("/admin/videos"),children:[e.jsx(be,{size:18}),"返回列表"]})}),e.jsxs("div",{className:"vd-toolbar-actions",children:[e.jsxs("button",{className:`vd-toolbar-btn ${d?"vd-toolbar-btn-success":""}`,onClick:()=>{d&&!window.confirm("该视频已有字幕，确定要重新生成吗？")||L()},disabled:A||!!v,title:d?"该视频已有字幕，点击可重新生成":"自动生成中英文字幕",children:[A?e.jsx(T,{size:16,className:"vd-spinning"}):e.jsx(ve,{size:16}),d?"✓ 已有字幕":"字幕生成"]}),e.jsxs("a",{className:"vd-toolbar-btn",href:`${G(a.url)}?download=true`,target:"_blank",rel:"noreferrer",title:"下载原视频文件",children:[e.jsx(he,{size:16}),"下载视频"]}),(l?.status==="completed"||d)&&e.jsxs("button",{className:"vd-toolbar-btn",onClick:()=>{B()},title:"下载中英双语 SRT 字幕包",children:[e.jsx(fe,{size:16}),"下载字幕"]}),e.jsxs("div",{className:"vd-toolbar-select-group",children:[e.jsx(je,{size:16,className:"vd-toolbar-icon"}),e.jsxs("select",{className:"vd-toolbar-select",value:P,onChange:s=>U(parseFloat(s.target.value)),children:[e.jsx("option",{value:"0.5",children:"0.5x"}),e.jsx("option",{value:"0.75",children:"0.75x"}),e.jsx("option",{value:"1",children:"1.0x"}),e.jsx("option",{value:"1.25",children:"1.25x"}),e.jsx("option",{value:"1.5",children:"1.5x"}),e.jsx("option",{value:"2",children:"2.0x"})]})]}),e.jsxs("div",{className:"vd-toolbar-select-group",children:[e.jsx(ye,{size:16,className:"vd-toolbar-icon"}),e.jsxs("select",{className:"vd-toolbar-select",value:h,onChange:s=>f(s.target.value),children:[e.jsx("option",{value:"zh",children:"中文"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"off",children:"关闭字幕"})]})]}),e.jsx("div",{className:"vd-toolbar-divider"}),e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-danger",onClick:F,disabled:k.isPending,title:"删除视频",children:[k.isPending?e.jsx(T,{size:16,className:"vd-spinning"}):e.jsx(ke,{size:16}),"删除"]})]})]}),e.jsx(Ne,{isOpen:W,onClose:()=>S(!1),onConfirm:t,title:"确认删除视频",message:`确定要删除视频 "${a.title}" 吗？此操作不可恢复。`,confirmText:"立即删除",cancelText:"取消",type:"danger",isLoading:k.isPending}),V&&e.jsxs("div",{style:{padding:"12px",background:"var(--admin-danger-light)",color:"var(--admin-danger)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:V})]}),z&&e.jsxs("div",{style:{padding:"12px",background:"var(--admin-success-light)",color:"var(--admin-success)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"✅"}),e.jsx("span",{children:z})]}),l&&R&&e.jsxs("div",{style:{padding:"12px 14px",background:"color-mix(in srgb, var(--cg-info) 10%, var(--cg-surface))",color:"var(--cg-info)",borderRadius:"8px",marginBottom:"24px",fontSize:"0.875rem",border:"1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))"},children:[e.jsxs("div",{style:{fontWeight:600,marginBottom:"4px"},children:["实际字幕 ASR：",R]}),l.effective_audio_reason&&e.jsx("div",{style:{color:"var(--cg-text-muted)"},children:l.effective_audio_reason})]}),e.jsx("div",{className:"card",style:{marginBottom:"24px"},children:e.jsx(ae,{metadata:a.metadata,compact:!1,video:a,onStatusChange:N,subtitleSelection:h,playbackRate:P})})]}),e.jsx(Ce,{video:a,metadata:a.metadata,mode:"metadata",onSave:async s=>{await m(s),$(!1)},subtitleJob:l,onCancelSubtitle:_,onClearSubtitleJob:()=>I(""),isEditing:M,setIsEditing:$,editorRef:D})]}),e.jsx("style",{children:`
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
  `})]}):e.jsx("div",{className:"page-container",children:e.jsxs("div",{className:"card",style:{textAlign:"center",padding:"48px"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"📹"}),e.jsx("h3",{style:{marginBottom:"8px"},children:"视频不存在"}),e.jsx("p",{style:{color:"var(--cg-text-muted)",marginBottom:"24px"},children:"找不到指定的视频"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>c("/admin/videos"),children:"返回列表"})]})})}export{Et as VideoDetail};
