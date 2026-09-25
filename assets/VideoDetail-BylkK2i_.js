import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,l as i,u as a}from"./router-vendor-C4C_6Mfu.js";import{a as o}from"./query-vendor-KR0ej7Li.js";import{l as s,o as c}from"./api-C6QdgyJO.js";import{D as l,F as u,Gt as d,In as f,Rr as p,Rt as m,Wt as h,bn as g,br as _,er as v,et as y,g as b,ir as x,lr as S,ma as C,o as w,ra as ee,sr as T}from"./ui-vendor-BJACYxZ2.js";import{gn as E}from"./index-CCWUv77F.js";import{t as D}from"./Skeleton-DFVLJhLY.js";/* empty css                   */import{B as O,J as k,Z as A,m as j,nt as M,o as N,tt as P,x as F}from"./admin-media-avVPWqPX.js";import{t as I}from"./InlineVideoEditor-BJmeH_BD.js";/* empty css                        */import{t as L}from"./ConfirmModal-DmqdBImj.js";import"./adminQueries-C-W6N3Cr.js";import{t as R}from"./VideoMetadataDisplay-BXRnFtdS.js";import{t as z}from"./VideoInfoCards-DeDxAIbG.js";var B=e(t(),1),V=n(),H={basic:{name:`认知与启蒙`,icon:`🌱`},intermediate:{name:`方法与工具`,icon:`🔧`},advanced:{name:`实践与探究`,icon:`🔬`},other:{name:`其他`,icon:`📦`}};function U({mode:e=`categories`,video:t,metadata:n,onSave:r,subtitleJob:i,onCancelSubtitle:o,onClearSubtitleJob:s,isEditing:c,setIsEditing:l,editorRef:u}){let p=a(),[_,b]=(0,B.useState)(!1),[x,ee]=(0,B.useState)(!1),D=c===void 0?x:c,O=l||ee,[A,j]=(0,B.useState)(280),[N,P]=(0,B.useState)(!1),F=(0,B.useRef)(null),{addToast:L}=E(),R=k(),[U,W]=(0,B.useState)(`zh`),G=async()=>{if(t?.id)try{await R.mutateAsync(t.id),L({type:`success`,message:`元数据计算与同步已完成`})}catch(e){let t=e,n=t.response?.data?.detail||t.message||`未知错误`;L({type:`error`,message:`智能生成失败: ${n}`})}},{data:K}=M({page:1,page_size:1e3}),q=Array.isArray(K)?K:K?.items||[],J=Array.isArray(K)?K.length:K?.total||0,Y={basic:q.filter(e=>e.curriculum_category===`basic`).length,intermediate:q.filter(e=>e.curriculum_category===`intermediate`).length,advanced:q.filter(e=>e.curriculum_category===`advanced`).length,other:q.filter(e=>!e.curriculum_category||e.curriculum_category===`other`).length},X=Array.from(new Set(q.map(e=>e.category).filter(Boolean))).sort(),Z={};q.forEach(e=>{e.category&&(Z[e.category]=(Z[e.category]||0)+1)});let Q=(0,B.useCallback)(e=>{e.preventDefault(),P(!0)},[]);return(0,B.useEffect)(()=>{let e=e=>{if(!N)return;let t=Math.min(Math.max(200,window.innerWidth-e.clientX),400);j(t)},t=()=>{P(!1)};return N&&(document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t),document.body.style.cursor=``,document.body.style.userSelect=``}},[N]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`aside`,{ref:F,className:`video-sidebar ${_?`collapsed`:``}`,style:{width:_?48:A},children:[(0,V.jsxs)(`div`,{className:`sidebar-header`,children:[(0,V.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>b(!_),title:_?`展开侧边栏`:`收起侧边栏`,children:_?(0,V.jsx)(d,{size:20}):(0,V.jsx)(h,{size:20})}),!_&&(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,flex:1,gap:`8px`},children:[(0,V.jsx)(`span`,{className:`sidebar-title`,style:{marginRight:`auto`},children:e===`metadata`?``:`视频分类`}),e===`metadata`&&D?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{className:`sidebar-header-action`,onClick:()=>u?.current?.save(),style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 12px`,background:`var(--cg-info)`,color:`white`,border:`1px solid var(--cg-info)`,borderRadius:`6px`,cursor:`pointer`,fontWeight:600,transition:`all 0.2s ease`,boxShadow:`0 1px 3px color-mix(in srgb, var(--cg-info) 30%, transparent)`},children:`保存`}),(0,V.jsx)(`button`,{className:`sidebar-header-action`,onClick:()=>O(!1),style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 10px`,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`,border:`1px solid var(--cg-border)`,borderRadius:`6px`,cursor:`pointer`,fontWeight:500,transition:`all 0.2s ease`},children:`取消`})]}):(0,V.jsxs)(V.Fragment,{children:[e===`metadata`&&(0,V.jsxs)(`button`,{className:`sidebar-header-action smart-generate-btn`,onClick:G,disabled:R.isPending,title:`利用 LLM 大模型根据字幕智能生成元数据`,style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 10px`,background:`linear-gradient(135deg, var(--cg-bg) 0%, color-mix(in srgb, var(--cg-info) 15%, var(--cg-bg)) 100%)`,color:`var(--cg-info)`,border:`1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))`,borderRadius:`6px`,cursor:R.isPending?`not-allowed`:`pointer`,fontWeight:500,transition:`all 0.2s ease`,boxShadow:`0 1px 2px rgba(0,0,0,0.05)`},children:[R.isPending?(0,V.jsx)(g,{size:13,className:`animate-spin`}):(0,V.jsx)(y,{size:13}),(0,V.jsx)(`span`,{children:R.isPending?`智能生成中...`:`智能生成`})]}),e===`metadata`&&r&&(0,V.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>O(!0),title:`编辑元数据`,style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 10px`,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`,border:`1px solid var(--cg-border)`,borderRadius:`6px`,cursor:`pointer`,fontWeight:500,transition:`all 0.2s ease`},children:[(0,V.jsx)(m,{size:13}),(0,V.jsx)(`span`,{children:`编辑`})]}),e===`metadata`&&(0,V.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>W(e=>e===`zh`?`en`:`zh`),title:U===`zh`?`切换到英文显示`:`切换到中文显示`,style:{display:`flex`,alignItems:`center`,gap:`3px`,fontSize:`0.7rem`,padding:`4px 8px`,background:U===`en`?`color-mix(in srgb, var(--cg-info) 10%, var(--cg-bg))`:`var(--cg-bg)`,color:U===`en`?`var(--cg-info)`:`var(--cg-text-muted)`,border:`1px solid ${U===`en`?`color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))`:`var(--cg-border)`}`,borderRadius:`6px`,cursor:`pointer`,fontWeight:600,transition:`all 0.2s ease`,letterSpacing:`0.03em`},children:[(0,V.jsx)(f,{size:12}),(0,V.jsx)(`span`,{children:U===`zh`?`EN`:`中`})]})]})]})]}),!_&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`sidebar-resizer ${N?`active`:``}`,onMouseDown:Q,children:(0,V.jsx)(v,{size:12})}),(0,V.jsxs)(`nav`,{className:`video-tree-view`,children:[e===`metadata`&&i&&i.status!==`completed`&&(0,V.jsxs)(`div`,{className:`sidebar-task-section`,children:[(0,V.jsxs)(`div`,{className:`tree-section-label`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,V.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,V.jsx)(C,{size:12}),`正在进行任务`]}),(i.status===`failed`||i.status===`cancelled`)&&s&&(0,V.jsx)(`button`,{onClick:s,className:`task-close-btn`,children:(0,V.jsx)(w,{size:12})})]}),(0,V.jsxs)(`div`,{className:`sidebar-task-card`,children:[(0,V.jsxs)(`div`,{className:`task-info`,children:[(0,V.jsx)(`span`,{className:`task-status`,children:i.status===`failed`?`❌ 生成失败`:`📹 字幕生成`}),(0,V.jsx)(`span`,{className:`task-stage`,children:i.stage?`[ ${i.stage} ]`:``}),(0,V.jsx)(`span`,{className:`task-percent`,children:typeof i.progress_percentage==`number`?`${Math.round(i.progress_percentage)}%`:``})]}),(0,V.jsx)(`div`,{className:`task-progress-bg`,children:(0,V.jsx)(`div`,{className:`task-progress-bar ${i.status===`failed`?`failed`:``}`,style:{width:`${i.progress_percentage||0}%`}})}),(0,V.jsxs)(`div`,{className:`task-footer`,children:[(0,V.jsx)(`span`,{className:`task-message`,title:i.message,children:i.message||(i.status===`processing`?`正在渲染中...`:`准备中...`)}),i.status===`processing`&&o&&(0,V.jsx)(`button`,{onClick:o,className:`task-action-link`,children:`停止`})]})]})]}),e===`metadata`?(0,V.jsx)(`div`,{style:{padding:`0`},children:t?D?(0,V.jsx)(I,{ref:u,video:t,onSave:async e=>{r&&await r(e),O(!1)},onCancel:()=>O(!1)}):(0,V.jsx)(z,{video:t,metadata:n,displayLang:U}):(0,V.jsx)(`div`,{className:`empty-state`,children:`未选中视频`})}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`tree-node root-node`,children:(0,V.jsxs)(`button`,{className:`tree-item`,onClick:()=>p(`/admin/videos`),children:[(0,V.jsx)(S,{size:16,className:`tree-icon`}),(0,V.jsx)(`span`,{className:`tree-label`,children:`全部视频`}),(0,V.jsx)(`span`,{className:`tree-count`,children:J})]})}),(0,V.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,overflowX:`hidden`},children:[(0,V.jsx)(`div`,{className:`tree-section-label`,children:`按课程分类`}),Object.entries(H).map(([e,{name:t,icon:n}])=>{let r=Y[e]||0;return(0,V.jsx)(`div`,{className:`tree-node`,children:(0,V.jsxs)(`button`,{className:`tree-item`,onClick:()=>p(`/admin/videos?curriculum=${e}`),children:[(0,V.jsx)(`span`,{className:`tree-icon`,children:n}),(0,V.jsx)(`span`,{className:`tree-label`,children:t}),(0,V.jsx)(`span`,{className:`tree-count`,children:r})]})},e)}),(0,V.jsx)(`div`,{className:`tree-section-label`,children:`按主题分类`}),X.length>0?X.map(e=>{let t=Z[e]||0;return(0,V.jsx)(`div`,{className:`tree-node`,children:(0,V.jsxs)(`button`,{className:`tree-item`,onClick:()=>p(`/admin/videos?category=${encodeURIComponent(e)}`),title:e,children:[(0,V.jsx)(T,{size:16,className:`tree-icon`}),(0,V.jsx)(`span`,{className:`tree-label`,children:e}),(0,V.jsx)(`span`,{className:`tree-count`,children:t})]})},e)}):(0,V.jsx)(`div`,{className:`empty-state`,children:`暂无主题`})]})]})]}),e===`categories`&&(0,V.jsxs)(`div`,{className:`sidebar-stats`,children:[(0,V.jsxs)(`div`,{className:`stat-item`,children:[(0,V.jsx)(`span`,{className:`stat-label`,children:`总视频数`}),(0,V.jsx)(`span`,{className:`stat-value`,children:J})]}),(0,V.jsxs)(`div`,{className:`stat-item`,children:[(0,V.jsx)(`span`,{className:`stat-label`,children:`当前显示`}),(0,V.jsx)(`span`,{className:`stat-value`,children:q.length})]}),(0,V.jsxs)(`div`,{className:`stat-item`,children:[(0,V.jsx)(`span`,{className:`stat-label`,children:`主题数量`}),(0,V.jsx)(`span`,{className:`stat-value`,children:X.length})]})]})]})]}),(0,V.jsx)(`style`,{children:`
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
    `})]})}function W(e){return e?.effective_audio_model?`${{aliyun:`阿里云`,openai:`OpenAI`,"local-sensevoice":`本地 SenseVoice`,"local-whisper":`本地 Whisper（旧链路）`}[(e.effective_audio_provider||``).toLowerCase()]||e.effective_audio_provider||`未知来源`} · ${e.effective_audio_model}`:``}function G(){let{id:e}=r(),t=a(),n=i().state?.returnTo,d=typeof n==`string`&&n.startsWith(`/admin/videos`)?n:`/admin/videos`,f=o(),{data:m,isLoading:h,refetch:v}=P(e),y=O(),S=A(),[C,w]=(0,B.useState)(``),[T,E]=(0,B.useState)(``),[k,M]=(0,B.useState)(!1),[I,z]=(0,B.useState)(``),[H,G]=(0,B.useState)(null),[K,q]=(0,B.useState)(!1),[J,Y]=(0,B.useState)(!1),X=(0,B.useRef)(null),[Z,Q]=(0,B.useState)(`zh`),[te,ne]=(0,B.useState)(1),[$,re]=(0,B.useState)(!1),ie=W(H);(0,B.useEffect)(()=>{if(!m)return;let e=m.has_subtitles;re(e===!0)},[m]);let ae=async()=>{if(m?.id)try{w(``);let e=await(await c(s(`/api/admin/videos/${m.id}/subtitles/zip`))).blob(),t=window.URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`${m.title||m.id}-subtitles.zip`,document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(t)}catch(e){console.error(`Failed to download subtitle zip:`,e),w(e instanceof Error?e.message:`下载字幕失败，请稍后重试`)}};(0,B.useEffect)(()=>{if(!I)return;let e=null,t=async()=>{try{let t=await j(I);G(t.job),(t.job.status===`completed`||t.job.status===`failed`||t.job.status===`cancelled`)&&(e&&clearInterval(e),t.job.status===`completed`&&(await f.invalidateQueries({queryKey:[`video`,m?.id]}),await v(),re(!0),E(`字幕已自动生成完毕！`),setTimeout(()=>E(``),5e3)))}catch(t){let n=t;w(n?.response?.data?.detail||n?.message||`获取字幕任务失败`),e&&clearInterval(e)}};return t(),e=setInterval(t,2e3),()=>{e&&clearInterval(e)}},[I,f,m?.id,v]);let oe=async()=>{if(m){q(!0),G(null);try{let e=await F(m.id);z(e.job_id),G(e.job)}catch(e){let t=e;w(t?.response?.data?.detail||t?.message||`生成字幕失败`)}finally{q(!1)}}},se=async()=>{if(I)try{await N(I)}catch{}},ce=()=>{m&&M(!0)},le=async()=>{if(m)try{await y.mutateAsync(m.id),M(!1),t(d)}catch(e){let t=e;w(t?.response?.data?.detail||t?.message||`删除视频失败`),M(!1)}},ue=async e=>{m&&(await S.mutateAsync({videoId:m.id,data:e}),await f.invalidateQueries({queryKey:[`video`,m.id]}),await f.invalidateQueries({queryKey:[`videos`]}),await v(),E(`快速编辑保存成功！`),setTimeout(()=>E(``),3e3))};return h?(0,V.jsx)(`div`,{className:`page-container`,children:(0,V.jsx)(D,{height:400})}):m?(0,V.jsxs)(`div`,{className:`page-container`,children:[(0,V.jsxs)(`div`,{className:`video-detail-layout`,children:[(0,V.jsxs)(`div`,{className:`detail-main`,children:[(0,V.jsxs)(`div`,{className:`vd-toolbar`,children:[(0,V.jsx)(`div`,{className:`vd-toolbar-left`,children:(0,V.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-back`,onClick:()=>t(d),children:[(0,V.jsx)(ee,{size:18}),`返回列表`]})}),(0,V.jsxs)(`div`,{className:`vd-toolbar-actions`,children:[(0,V.jsxs)(`button`,{className:`vd-toolbar-btn ${$?`vd-toolbar-btn-success`:``}`,onClick:()=>{(!$||window.confirm(`该视频已有字幕，确定要重新生成吗？`))&&oe()},disabled:K||!!I,title:$?`该视频已有字幕，点击可重新生成`:`自动生成中英文字幕`,children:[K?(0,V.jsx)(g,{size:16,className:`vd-spinning`}):(0,V.jsx)(_,{size:16}),$?`✓ 已有字幕`:`字幕生成`]}),(0,V.jsxs)(`a`,{className:`vd-toolbar-btn`,href:`${s(m.url)}?download=true`,target:`_blank`,rel:`noreferrer`,title:`下载原视频文件`,children:[(0,V.jsx)(b,{size:16}),`下载视频`]}),(H?.status===`completed`||$)&&(0,V.jsxs)(`button`,{className:`vd-toolbar-btn`,onClick:()=>{ae()},title:`下载中英双语 SRT 字幕包`,children:[(0,V.jsx)(p,{size:16}),`下载字幕`]}),(0,V.jsxs)(`div`,{className:`vd-toolbar-select-group`,children:[(0,V.jsx)(x,{size:16,className:`vd-toolbar-icon`}),(0,V.jsxs)(`select`,{className:`vd-toolbar-select`,value:te,onChange:e=>ne(parseFloat(e.target.value)),children:[(0,V.jsx)(`option`,{value:`0.5`,children:`0.5x`}),(0,V.jsx)(`option`,{value:`0.75`,children:`0.75x`}),(0,V.jsx)(`option`,{value:`1`,children:`1.0x`}),(0,V.jsx)(`option`,{value:`1.25`,children:`1.25x`}),(0,V.jsx)(`option`,{value:`1.5`,children:`1.5x`}),(0,V.jsx)(`option`,{value:`2`,children:`2.0x`})]})]}),(0,V.jsxs)(`div`,{className:`vd-toolbar-select-group`,children:[(0,V.jsx)(l,{size:16,className:`vd-toolbar-icon`}),(0,V.jsxs)(`select`,{className:`vd-toolbar-select`,value:Z,onChange:e=>Q(e.target.value),children:[(0,V.jsx)(`option`,{value:`zh`,children:`中文`}),(0,V.jsx)(`option`,{value:`en`,children:`English`}),(0,V.jsx)(`option`,{value:`off`,children:`关闭字幕`})]})]}),(0,V.jsx)(`div`,{className:`vd-toolbar-divider`}),(0,V.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-danger`,onClick:ce,disabled:y.isPending,title:`删除视频`,children:[y.isPending?(0,V.jsx)(g,{size:16,className:`vd-spinning`}):(0,V.jsx)(u,{size:16}),`删除`]})]})]}),(0,V.jsx)(L,{isOpen:k,onClose:()=>M(!1),onConfirm:le,title:`确认删除视频`,message:`确定要删除视频 "${m.title}" 吗？此操作不可恢复。`,confirmText:`立即删除`,cancelText:`取消`,type:`danger`,isLoading:y.isPending}),C&&(0,V.jsxs)(`div`,{style:{padding:`12px`,background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,borderRadius:`8px`,marginBottom:`24px`,fontSize:`0.875rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`span`,{children:`❌`}),(0,V.jsx)(`span`,{children:C})]}),T&&(0,V.jsxs)(`div`,{style:{padding:`12px`,background:`var(--admin-success-light)`,color:`var(--admin-success)`,borderRadius:`8px`,marginBottom:`24px`,fontSize:`0.875rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`span`,{children:`✅`}),(0,V.jsx)(`span`,{children:T})]}),H&&ie&&(0,V.jsxs)(`div`,{style:{padding:`12px 14px`,background:`color-mix(in srgb, var(--cg-info) 10%, var(--cg-surface))`,color:`var(--cg-info)`,borderRadius:`8px`,marginBottom:`24px`,fontSize:`0.875rem`,border:`1px solid color-mix(in srgb, var(--cg-info) 30%, var(--cg-border))`},children:[(0,V.jsxs)(`div`,{style:{fontWeight:600,marginBottom:`4px`},children:[`实际字幕 ASR：`,ie]}),H.effective_audio_reason&&(0,V.jsx)(`div`,{style:{color:`var(--cg-text-muted)`},children:H.effective_audio_reason})]}),(0,V.jsx)(`div`,{className:`card`,style:{marginBottom:`24px`},children:(0,V.jsx)(R,{metadata:m.metadata,compact:!1,video:m,onStatusChange:async e=>{m&&(await S.mutateAsync({videoId:m.id,data:{status:e}}),await f.invalidateQueries({queryKey:[`video`,m.id]}),await v())},subtitleSelection:Z,playbackRate:te})})]}),(0,V.jsx)(U,{video:m,metadata:m.metadata,mode:`metadata`,onSave:async e=>{await ue(e),Y(!1)},subtitleJob:H,onCancelSubtitle:se,onClearSubtitleJob:()=>z(``),isEditing:J,setIsEditing:Y,editorRef:X})]}),(0,V.jsx)(`style`,{children:`
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
  `})]}):(0,V.jsx)(`div`,{className:`page-container`,children:(0,V.jsxs)(`div`,{className:`card`,style:{textAlign:`center`,padding:`48px`},children:[(0,V.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`📹`}),(0,V.jsx)(`h3`,{style:{marginBottom:`8px`},children:`视频不存在`}),(0,V.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,marginBottom:`24px`},children:`找不到指定的视频`}),(0,V.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>t(d),children:`返回列表`})]})})}export{G as VideoDetail};