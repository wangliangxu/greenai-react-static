import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{Yt as t}from"./chart-vendor-CaAGlfls.js";import{m as n,p as r}from"./router-vendor-D8ZmRCh1.js";import{a as i}from"./query-vendor-BAFTaE_c.js";import{g as a}from"./editor-vendor-DNpPfJmi.js";import{l as o,o as s}from"./api-DrSRLQJE.js";import{$n as c,Da as l,Dr as u,F as d,Jt as f,Q as p,Tn as m,Vn as h,_a as g,o as _,or as v,qr as y,qt as b,zt as x}from"./ui-vendor-DMKiJq3S.js";import{gn as S}from"./index-BtBQeYe_.js";import{t as C}from"./Skeleton-RfflXIQ8.js";/* empty css                   */import{M as w,R as T,X as E,a as D,b as O,c as ee,f as k,p as A,q as j}from"./admin-media-Da_GJ6SX.js";import{t as M}from"./InlineVideoEditor-pT3tV-iw.js";import{i as N,n as P,r as F,t as I}from"./formatters-BG0XNSDQ.js";/* empty css                        */import{t as L}from"./ConfirmModal-ChwP5kDf.js";var R=e(t(),1),z=a();function B(e,t,n=``){if(Array.isArray(e))return e.find(e=>e?.lang===t)?.value||e[0]?.value||n;if(typeof e==`object`&&e&&!Array.isArray(e)){let r=e;return r[t]||r.zh||n}return typeof e==`string`?e:n}function V(e,t){if(e&&typeof e==`object`&&!Array.isArray(e)){let n=e[t];return Array.isArray(n)?n:[]}return Array.isArray(e)?e.map(String):[]}function H(e,t){return e==null||e===``?(0,z.jsx)(`span`,{className:`vd-text-empty`,children:t}):String(e)}function U(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return typeof e==`object`&&!Array.isArray(e)?e:{}}function W({audio:e,metadata:t,displayLang:n=`zh`,hasScripts:r=!1}){let i=U(t),a=i.attrs||{},o=i.stats||{},s=i[`ga:audio`]||{},c=(i.variables||{}).audio_stream?.attrs||{},l=Array.isArray(i.files)?i.files:[],u=l.find(e=>e?.role===`primary`)||l[0],d=B(i.title,n)||N(e.display_title,e.title).replace(`视频`,`音频`),f=B(i.abstract,n)||e.display_description||e.description||``,p=B(i.subject,n)||e.category||``,m=V(i.tags,n),h=Array.isArray(e.tags)?e.tags.map(String):[],g=m.length>0?m:h,_=o.duration_seconds||s.duration_seconds||e.duration,v=o.file_size_bytes||s.file_size_bytes||e.file_size,y=c.sample_rate||s.sample_rate,b=c.channels||s.channels,x=c.bitrate||s.bitrate,S=c.codec||s.codec,C=a.format||u?.extension||e.file_format,w=a.language||i.language,T=n===`en`?{secDescription:`Description`,secTechnical:`Audio Technical`,secFiles:`Files`,secLicense:`License & Source`,title:`Title:`,abstract:`Abstract:`,subject:`Subject:`,tags:`Tags:`,resourceId:`Resource ID:`,duration:`Duration:`,fileSize:`File Size:`,codec:`Codec:`,sampleRate:`Sample Rate:`,channels:`Channels:`,bitrate:`Bitrate:`,scripts:`Scripts:`,format:`Format:`,fileName:`File:`,hash:`SHA-256:`,license:`License:`,creator:`Creator:`,language:`Language:`,provider:`Provider:`,originUrl:`Source URL:`,created:`Created:`,updated:`Updated:`,notFilled:`N/A`,ready:`Ready`,missing:`Missing`}:{secDescription:`📋 描述信息`,secTechnical:`🎧 音频参数`,secFiles:`📁 文件清单`,secLicense:`©️ 许可与来源`,title:`标题:`,abstract:`摘要:`,subject:`主题分类:`,tags:`标签:`,resourceId:`资源 ID:`,duration:`时长:`,fileSize:`文件大小:`,codec:`音频编码:`,sampleRate:`采样率:`,channels:`声道:`,bitrate:`码率:`,scripts:`脚本:`,format:`格式:`,fileName:`文件:`,hash:`SHA-256:`,license:`许可证:`,creator:`创建者:`,language:`语言:`,provider:`来源:`,originUrl:`来源链接:`,created:`创建日期:`,updated:`修改日期:`,notFilled:`未填写`,ready:`已生成`,missing:`未生成`};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:`vd-card`,children:[(0,z.jsx)(`div`,{className:`vd-card-header`,children:T.secDescription}),(0,z.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.title}),(0,z.jsx)(`span`,{className:`vd-value`,style:{fontWeight:600},children:d})]}),f&&(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.abstract}),(0,z.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,lineHeight:1.5},children:f})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.subject}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(p,T.notFilled)})]}),g.length>0&&(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.tags}),(0,z.jsx)(`div`,{className:`vd-tags`,children:g.map((e,t)=>(0,z.jsx)(`span`,{className:`vd-tag`,children:e},`${e}-${t}`))})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.resourceId}),(0,z.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.75rem`},children:e.id})]})]})]}),(0,z.jsxs)(`div`,{className:`vd-card`,children:[(0,z.jsx)(`div`,{className:`vd-card-header`,children:T.secTechnical}),(0,z.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.duration}),(0,z.jsx)(`span`,{className:`vd-value`,children:P(Number(_||0))})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.fileSize}),(0,z.jsx)(`span`,{className:`vd-value`,children:F(Number(v||0))})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.codec}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(S,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.sampleRate}),(0,z.jsx)(`span`,{className:`vd-value`,children:y?`${y} Hz`:(0,z.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.channels}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(b,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.bitrate}),(0,z.jsx)(`span`,{className:`vd-value`,children:x?`${Math.round(Number(x)/1e3)} kbps`:(0,z.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.scripts}),(0,z.jsx)(`span`,{className:`vd-value`,children:r?T.ready:(0,z.jsx)(`span`,{className:`vd-text-empty`,children:T.missing})})]})]})]}),(0,z.jsxs)(`div`,{className:`vd-card`,children:[(0,z.jsx)(`div`,{className:`vd-card-header`,children:T.secFiles}),(0,z.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.format}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(C,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.fileName}),(0,z.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:H(u?.name||e.url,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.hash}),(0,z.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.7rem`,wordBreak:`break-all`},children:H(u?.sha256||e.file_hash,T.notFilled)})]})]})]}),(0,z.jsxs)(`div`,{className:`vd-card`,children:[(0,z.jsx)(`div`,{className:`vd-card-header`,children:T.secLicense}),(0,z.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.license}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(i.license,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.creator}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(i.creator||e.creator,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.language}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(w,T.notFilled)})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.provider}),(0,z.jsx)(`span`,{className:`vd-value`,children:H(a.provider||i.source,T.notFilled)})]}),a.origin_address&&(0,z.jsxs)(`div`,{className:`vd-row-start`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.originUrl}),(0,z.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:a.origin_address})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.created}),(0,z.jsx)(`span`,{className:`vd-value`,children:I(String(u?.ctime||i.date_created||e.created_at||``))||(0,z.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,z.jsxs)(`div`,{className:`vd-row`,children:[(0,z.jsx)(`span`,{className:`vd-label`,children:T.updated}),(0,z.jsx)(`span`,{className:`vd-value`,children:I(String(i.date_modified||e.updated_at||``))||(0,z.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]})]})]})]})}function te({audio:e,metadata:t,onSave:n,onGenerated:r,scriptJob:i,onCancelScript:a,onClearScriptJob:o,isEditing:s,setIsEditing:c,editorRef:u,hasScripts:d=!1}){let{addToast:g}=S(),[y,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(300),[E,D]=(0,R.useState)(!1),[O,ee]=(0,R.useState)(!1),[k,A]=(0,R.useState)(`zh`),N=(0,R.useRef)(null),P=j(),F=s===void 0?O:s,I=c||ee,L=async()=>{if(e?.id)try{await P.mutateAsync(e.id),await r?.(),g({type:`success`,message:`音频元数据计算与同步已完成`})}catch(e){let t=e,n=t.response?.data?.detail||t.message||`未知错误`;g({type:`error`,message:`智能生成失败: ${n}`})}},B=(0,R.useCallback)(e=>{e.preventDefault(),D(!0)},[]);return(0,R.useEffect)(()=>{let e=e=>{if(!E)return;let t=Math.min(Math.max(220,window.innerWidth-e.clientX),440);T(t)},t=()=>D(!1);return E&&(document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t),document.body.style.cursor=``,document.body.style.userSelect=``}},[E]),(0,z.jsxs)(`aside`,{ref:N,className:`video-sidebar ${y?`collapsed`:``}`,style:{width:y?48:w},children:[(0,z.jsxs)(`div`,{className:`sidebar-header`,children:[(0,z.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>C(!y),title:y?`展开侧边栏`:`收起侧边栏`,children:y?(0,z.jsx)(f,{size:20}):(0,z.jsx)(b,{size:20})}),!y&&(0,z.jsx)(`div`,{className:`audio-sidebar-actions`,children:F?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`button`,{className:`sidebar-header-action audio-save-btn`,onClick:()=>u?.current?.save(),children:`保存`}),(0,z.jsx)(`button`,{className:`sidebar-header-action audio-cancel-btn`,onClick:()=>I(!1),children:`取消`})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`button`,{className:`sidebar-header-action smart-generate-btn`,onClick:L,disabled:P.isPending,title:`根据音频脚本和描述智能生成元数据`,children:[P.isPending?(0,z.jsx)(m,{size:13,className:`animate-spin`}):(0,z.jsx)(p,{size:13}),(0,z.jsx)(`span`,{children:P.isPending?`生成中...`:`智能生成`})]}),n&&(0,z.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>I(!0),title:`编辑元数据`,children:[(0,z.jsx)(x,{size:13}),(0,z.jsx)(`span`,{children:`编辑`})]}),(0,z.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>A(e=>e===`zh`?`en`:`zh`),title:k===`zh`?`切换到英文显示`:`切换到中文显示`,children:[(0,z.jsx)(h,{size:12}),(0,z.jsx)(`span`,{children:k===`zh`?`EN`:`中`})]})]})})]}),!y&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`sidebar-resizer ${E?`active`:``}`,onMouseDown:B,children:(0,z.jsx)(v,{size:12})}),(0,z.jsxs)(`nav`,{className:`video-tree-view`,children:[i&&i.status!==`completed`&&(0,z.jsxs)(`div`,{className:`sidebar-task-section`,children:[(0,z.jsxs)(`div`,{className:`tree-section-label audio-task-label`,children:[(0,z.jsxs)(`span`,{children:[(0,z.jsx)(l,{size:12}),`正在进行任务`]}),(i.status===`failed`||i.status===`cancelled`)&&o&&(0,z.jsx)(`button`,{onClick:o,className:`task-close-btn`,children:(0,z.jsx)(_,{size:12})})]}),(0,z.jsxs)(`div`,{className:`sidebar-task-card`,children:[(0,z.jsxs)(`div`,{className:`task-info`,children:[(0,z.jsx)(`span`,{className:`task-status`,children:i.status===`failed`?`生成失败`:i.job_mode===`continue`?`脚本续生成`:`脚本提取`}),(0,z.jsx)(`span`,{className:`task-stage`,children:i.stage?`[ ${i.stage} ]`:``}),(0,z.jsx)(`span`,{className:`task-percent`,children:typeof i.progress_percentage==`number`?`${Math.round(i.progress_percentage)}%`:``})]}),(0,z.jsx)(`div`,{className:`task-progress-bg`,children:(0,z.jsx)(`div`,{className:`task-progress-bar ${i.status===`failed`?`failed`:``}`,style:{width:`${i.progress_percentage||0}%`}})}),(0,z.jsxs)(`div`,{className:`task-footer`,children:[(0,z.jsx)(`span`,{className:`task-message`,title:i.message,children:i.message||(i.status===`processing`?`正在提取中...`:`准备中...`)}),i.status===`processing`&&a&&(0,z.jsx)(`button`,{onClick:a,className:`task-action-link`,children:`停止`})]})]})]}),(0,z.jsx)(`div`,{children:e?F?(0,z.jsx)(M,{ref:u,video:e,mediaLabel:`音频`,onSave:async e=>{n&&await n(e),I(!1)},onCancel:()=>I(!1)}):(0,z.jsx)(W,{audio:e,metadata:t,displayLang:k,hasScripts:d}):(0,z.jsx)(`div`,{className:`empty-state`,children:`未选中音频`})})]})]}),(0,z.jsx)(`style`,{children:`
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

        .video-sidebar.collapsed {
          width: 48px !important;
        }

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

        .audio-sidebar-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          gap: 8px;
          min-width: 0;
        }

        .sidebar-header-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          padding: 4px 10px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sidebar-header-action:hover:not(:disabled) {
          color: var(--cg-info);
          border-color: color-mix(in srgb, var(--cg-info) 35%, var(--cg-border));
        }

        .sidebar-header-action:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .smart-generate-btn {
          background: linear-gradient(135deg, var(--cg-bg) 0%, color-mix(in srgb, var(--cg-info) 15%, var(--cg-bg)) 100%);
          color: var(--cg-info);
          border-color: color-mix(in srgb, var(--cg-info) 30%, var(--cg-border));
        }

        .audio-save-btn {
          background: var(--cg-info);
          color: white;
          border-color: var(--cg-info);
          font-weight: 600;
        }

        .audio-cancel-btn {
          background: var(--cg-bg);
        }

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

        .video-sidebar .video-tree-view {
          flex: 1;
          padding: 8px 0;
          overflow-y: auto;
        }

        .audio-task-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .audio-task-label > span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tree-section-label {
          padding: 10px 12px 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0;
        }

        .sidebar-task-section {
          padding: 0 8px 8px;
          border-bottom: 1px solid var(--cg-bg);
        }

        .sidebar-task-card {
          padding: 10px;
          border: 1px solid color-mix(in srgb, var(--cg-info) 20%, var(--cg-border));
          border-radius: 8px;
          background: color-mix(in srgb, var(--cg-info) 6%, var(--cg-surface));
        }

        .task-info,
        .task-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }

        .task-status {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--cg-text);
        }

        .task-stage,
        .task-percent,
        .task-message {
          font-size: 0.72rem;
          color: var(--cg-text-muted);
        }

        .task-percent {
          margin-left: auto;
          font-weight: 700;
        }

        .task-progress-bg {
          height: 6px;
          margin: 8px 0;
          border-radius: 999px;
          background: var(--cg-bg);
          overflow: hidden;
        }

        .task-progress-bar {
          height: 100%;
          border-radius: inherit;
          background: var(--cg-info);
          transition: width 0.2s ease;
        }

        .task-progress-bar.failed {
          background: var(--cg-error);
        }

        .task-message {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .task-action-link,
        .task-close-btn {
          border: none;
          background: transparent;
          color: var(--cg-info);
          cursor: pointer;
          font-size: 0.72rem;
          padding: 0;
        }

        .task-close-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--cg-text-muted);
        }
      `})]})}function ne(e){return e?.effective_audio_model?`${{aliyun:`阿里云`,openai:`OpenAI`,"local-sensevoice":`本地 SenseVoice`,"local-whisper":`本地 Whisper（旧链路）`}[(e.effective_audio_provider||``).toLowerCase()]||e.effective_audio_provider||`未知来源`} · ${e.effective_audio_model}`:``}function re(e){return e.split(`
`).map(e=>e.trim()).filter(e=>e&&e!==`WEBVTT`&&!e.includes(`-->`)&&!/^\d+$/.test(e)).join(`
`)}function ie(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}function ae(e){if(!e||e<=0)return``;let t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return n>=60?`${Math.floor(n/60)}小时${n%60}分`:`${n}分${r.toString().padStart(2,`0`)}秒`}function G(){let{id:e}=n(),t=r(),a=i(),{data:l,isLoading:f,refetch:p}=w(e),h=T(),_=E(),[v,b]=(0,R.useState)(!1),[x,S]=(0,R.useState)(!1),[j,M]=(0,R.useState)(``),[N,P]=(0,R.useState)(!1),[F,I]=(0,R.useState)(null),[B,V]=(0,R.useState)(null),[H,U]=(0,R.useState)(``),W=(0,R.useRef)(null),[G,oe]=(0,R.useState)(`zh`),[se,ce]=(0,R.useState)(1),[le,K]=(0,R.useState)(!1),ue=(0,R.useRef)(null),[q,de]=(0,R.useState)({zh:``,en:``}),[J,Y]=(0,R.useState)(!1),[fe,X]=(0,R.useState)(null),pe=ne(B),me=ie(l?.metadata);(0,R.useEffect)(()=>{if(!l?.id)return;let e=!1;return(async()=>{let t={zh:``,en:``};for(let e of[`zh`,`en`])try{let n=await s(o(`/api/admin/audios/${l.id}/scripts.vtt?lang=${e}`));n.ok&&(t[e]=re(await n.text()))}catch{}if(!e){try{let e=await A(l.id);X(e),Y(e.has_scripts)}catch{X(null),Y(!!(t.zh||t.en))}de(t)}})(),()=>{e=!0}},[l?.id,B?.status]),(0,R.useEffect)(()=>{if(!F)return;let e=null,t=async()=>{try{let t=await k(F);if(V(t.job),(t.job.status===`completed`||t.job.status===`failed`||t.job.status===`cancelled`)&&(e&&clearInterval(e),I(null),t.job.status===`completed`)){if(await a.invalidateQueries({queryKey:[`audio`,l?.id]}),await p(),l?.id)try{let e=await A(l.id);X(e),Y(e.has_scripts),U(e.can_continue?`本次续生成已完成，脚本仍未到音频结尾，可继续生成。`:`脚本已自动生成完毕！`)}catch{Y(!0),U(`脚本已自动生成完毕！`)}else Y(!0),U(`脚本已自动生成完毕！`);setTimeout(()=>U(``),5e3)}}catch(t){let n=t;M(n?.response?.data?.detail||n?.message||`获取脚本任务失败`),e&&clearInterval(e)}};return t(),e=setInterval(()=>void t(),2e3),()=>{e&&clearInterval(e)}},[F,a,l?.id,p]);let he=async()=>{if(e){b(!0);try{await h.mutateAsync(e),t(`/admin/audios`)}catch(e){let t=e;M(t?.response?.data?.detail||t?.message||`删除音频失败`),S(!1)}finally{b(!1)}}},ge=async()=>{if(e){P(!0),M(``),U(``),V(null);try{let t=await O(e);I(t.job_id),V(t.job)}catch(e){let t=e;M(t?.response?.data?.detail||t?.message||`生成脚本失败`)}finally{P(!1)}}},_e=async()=>{if(e){P(!0),M(``),U(``),V(null);try{let t=await ee(e);I(t.job_id),V(t.job)}catch(e){let t=e;M(t?.response?.data?.detail||t?.message||`继续生成脚本失败`)}finally{P(!1)}}},ve=async()=>{if(F)try{await D(F)}catch(e){let t=e;M(t?.response?.data?.detail||t?.message||`取消任务失败`)}},ye=async e=>{l&&(await _.mutateAsync({audioId:l.id,audioData:e}),await a.invalidateQueries({queryKey:[`audio`,l.id]}),await a.invalidateQueries({queryKey:[`audios`]}),await a.invalidateQueries({queryKey:[`resources`]}),await p(),U(`元数据保存成功！`),setTimeout(()=>U(``),3e3))};if(f)return(0,z.jsx)(`div`,{className:`page-container`,children:(0,z.jsx)(C,{height:400})});if(!l)return(0,z.jsx)(`div`,{className:`page-container`,children:(0,z.jsxs)(`div`,{className:`card`,style:{textAlign:`center`,padding:`48px`},children:[(0,z.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🎧`}),(0,z.jsx)(`h3`,{style:{marginBottom:`8px`},children:`音频不存在`}),(0,z.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,marginBottom:`24px`},children:`找不到指定的音频`}),(0,z.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>t(`/admin/audios`),children:`返回列表`})]})});let Z=l.url;if(Z&&!Z.startsWith(`http`)){let e=localStorage.getItem(`token`);Z=o(`${Z}?token=${e}`)}let Q=!!fe?.can_continue,$=Q?ae(fe?.remaining_ms):``;return(0,z.jsxs)(`div`,{className:`page-container audio-detail-page`,children:[(0,z.jsxs)(`div`,{className:`video-detail-layout`,children:[(0,z.jsxs)(`div`,{className:`detail-main`,children:[(0,z.jsxs)(`div`,{className:`vd-toolbar`,children:[(0,z.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,z.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-back`,onClick:()=>t(`/admin/audios`),children:[(0,z.jsx)(g,{size:18}),`返回列表`]}),(0,z.jsx)(`span`,{className:`vd-toolbar-label`,children:`音频详情`})]}),(0,z.jsxs)(`div`,{className:`vd-toolbar-actions`,children:[(0,z.jsxs)(`button`,{className:`vd-toolbar-btn ${J&&!Q?`vd-toolbar-btn-success`:``}`,onClick:()=>{Q?_e():(!J||window.confirm(`该音频已有脚本，确定要重新提取吗？`))&&ge()},disabled:N||!!F,title:Q?`当前脚本未到音频结尾${$?`，约剩余 ${$}`:``}，点击继续生成`:J?`该音频已有完整脚本，点击可重新生成`:`自动提取中英文脚本`,children:[N?(0,z.jsx)(m,{size:16,className:`vd-spinning`}):(0,z.jsx)(u,{size:16}),Q?`继续生成`:J?`✓ 已有脚本`:`提取脚本`]}),(0,z.jsxs)(`a`,{href:Z,download:!0,className:`vd-toolbar-btn`,title:`下载源音频`,target:`_blank`,rel:`noreferrer`,children:[(0,z.jsx)(y,{size:16}),`下载音频`]}),(0,z.jsx)(`div`,{className:`vd-toolbar-divider`}),(0,z.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-danger`,onClick:()=>S(!0),disabled:h.isPending||v,title:`删除音频`,children:[h.isPending||v?(0,z.jsx)(m,{size:16,className:`vd-spinning`}):(0,z.jsx)(d,{size:16}),`删除`]})]})]}),(0,z.jsx)(`div`,{className:`vd-header`,style:{marginBottom:`16px`},children:(0,z.jsxs)(`div`,{className:`vd-header-title`,style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,z.jsx)(`button`,{onClick:()=>t(`/admin/audios`),className:`vd-back-btn`,style:{display:`none`},children:(0,z.jsx)(g,{size:20})}),(0,z.jsx)(c,{size:24,className:`text-cg-primary`,style:{flexShrink:0}}),(0,z.jsx)(`h1`,{className:`text-2xl font-bold text-cg-text truncate`,title:l.title,style:{margin:0,minWidth:0},children:l.title})]})}),j&&(0,z.jsxs)(`div`,{className:`vd-error-message`,children:[(0,z.jsx)(`span`,{className:`vd-error-icon`,children:`⚠️`}),j]}),H&&(0,z.jsxs)(`div`,{className:`vd-success-message`,children:[(0,z.jsx)(`span`,{className:`vd-success-icon`,children:`✅`}),H]}),(0,z.jsx)(`div`,{className:`card`,style:{marginBottom:`24px`},children:(0,z.jsxs)(`div`,{className:`vd-player-section`,children:[(0,z.jsx)(`div`,{className:`vd-player-toolbar`,children:(0,z.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,z.jsxs)(`span`,{className:`vd-toolbar-label`,children:[`ID: `,l.id.substring(0,8),`...`]}),(0,z.jsxs)(`span`,{className:`vd-toolbar-label ml-4`,children:[`大小: `,((l.file_size||0)/1024/1024).toFixed(2),` MB`]})]})}),(0,z.jsx)(`div`,{className:`vd-player-wrapper`,children:l.url?(0,z.jsxs)(`audio`,{ref:W,src:Z,controls:!0,className:`w-full h-[54px] rounded-md bg-[var(--cg-surface-raised)]`,crossOrigin:`anonymous`,children:[G!==`off`&&(0,z.jsx)(`track`,{kind:`subtitles`,src:o(`/api/admin/audios/${l.id}/scripts.vtt?lang=${G}`),srcLang:G,label:G===`zh`?`中文`:`English`,default:!0}),`您的浏览器不支持 HTML5 audio 标签。`]}):(0,z.jsx)(`div`,{className:`vd-player-placeholder`,children:`音频地址无效`})}),(0,z.jsx)(`div`,{className:`vd-content-vertical`,children:(0,z.jsxs)(`div`,{className:`vd-desc-block`,children:[(0,z.jsxs)(`div`,{className:`vd-desc-label`,children:[`🎧 音频脚本 · Audio Scripts`,Q&&(0,z.jsxs)(`span`,{style:{marginLeft:10,color:`var(--cg-warning)`,fontWeight:500},children:[`未到音频结尾`,$?`，约剩余 ${$}`:``]})]}),q.zh||q.en?(0,z.jsxs)(`div`,{className:`vd-bilingual-grid`,children:[(0,z.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,z.jsx)(`div`,{className:`vd-bilingual-tag cn`,children:`中文脚本`}),(0,z.jsx)(`div`,{className:`vd-subtitle-container`,children:q.zh?(0,z.jsx)(`pre`,{className:`vd-subtitle-pre`,children:q.zh}):(0,z.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`暂无中文脚本`})})]}),(0,z.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,z.jsx)(`div`,{className:`vd-bilingual-tag en`,children:`English Script`}),(0,z.jsx)(`div`,{className:`vd-subtitle-container`,children:q.en?(0,z.jsx)(`pre`,{className:`vd-subtitle-pre`,children:q.en}):(0,z.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`No English script found.`})})]})]}):(0,z.jsxs)(`div`,{className:`vd-empty-placeholder`,children:[(0,z.jsx)(`div`,{className:`vd-empty-icon`,children:`🎧`}),(0,z.jsxs)(`div`,{className:`vd-empty-text`,children:[`暂无脚本信息。请点击工具栏的 `,(0,z.jsx)(`strong`,{children:`“提取脚本”`}),` 自动转换音频内容。`]})]})]})}),B&&(0,z.jsxs)(`div`,{className:`vd-task-panel`,children:[(0,z.jsxs)(`div`,{className:`vd-task-header`,children:[(0,z.jsx)(`h3`,{className:`vd-task-title`,children:B.job_mode===`continue`?`脚本续生成任务状态`:`脚本提取任务状态`}),(0,z.jsx)(`span`,{className:`vd-task-badge vd-task-badge-${B.status}`,children:B.status===`pending`?`等待中`:B.status===`processing`?`处理中`:B.status===`completed`?`已完成`:B.status===`cancelled`?`已取消`:`失败`})]}),(0,z.jsxs)(`div`,{className:`vd-task-body`,children:[(0,z.jsxs)(`div`,{className:`vd-task-row`,children:[(0,z.jsx)(`span`,{className:`vd-task-label`,children:`阶段：`}),(0,z.jsx)(`span`,{className:`vd-task-value`,children:B.stage||`queued`})]}),(0,z.jsxs)(`div`,{className:`vd-task-row`,children:[(0,z.jsx)(`span`,{className:`vd-task-label`,children:`信息：`}),(0,z.jsx)(`span`,{className:`vd-task-value`,children:B.message||`-`})]}),B.effective_audio_provider&&(0,z.jsxs)(`div`,{className:`vd-task-row`,children:[(0,z.jsx)(`span`,{className:`vd-task-label`,children:`实际 ASR 引擎：`}),(0,z.jsx)(`span`,{className:`vd-task-value text-cg-info font-medium`,children:pe})]}),(0,z.jsxs)(`div`,{className:`vd-task-progress-container`,children:[(0,z.jsxs)(`div`,{className:`vd-task-progress-header`,children:[(0,z.jsx)(`span`,{children:`提取进度`}),(0,z.jsxs)(`span`,{children:[Math.round(B.progress_percentage||0),`%`]})]}),(0,z.jsx)(`div`,{className:`vd-task-progress-bar-bg`,children:(0,z.jsx)(`div`,{className:`vd-task-progress-bar-fill`,style:{width:`${B.progress_percentage||0}%`}})})]}),B.error_detail&&(0,z.jsx)(`div`,{className:`vd-task-error-detail`,children:JSON.stringify(B.error_detail,null,2)})]}),(B.status===`pending`||B.status===`processing`)&&(0,z.jsx)(`div`,{className:`vd-task-footer`,children:(0,z.jsx)(`button`,{onClick:ve,className:`vd-task-btn-cancel`,children:`取消任务`})})]})]})})]}),(0,z.jsx)(te,{audio:l,metadata:me,onSave:async e=>{await ye(e),K(!1)},onGenerated:async()=>{await a.invalidateQueries({queryKey:[`audio`,l.id]}),await p()},scriptJob:B,onCancelScript:ve,onClearScriptJob:()=>I(null),isEditing:le,setIsEditing:K,editorRef:ue,hasScripts:J})]}),(0,z.jsx)(L,{isOpen:x,onClose:()=>S(!1),onConfirm:he,title:`删除音频`,message:`确定要删除音频 "${l.title}" 吗？此操作不可恢复。`,confirmText:`立即删除`,cancelText:`取消`,type:`danger`,isLoading:h.isPending||v}),(0,z.jsx)(`style`,{children:`
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

        .audio-detail-page .vd-toolbar {
          min-height: 48px;
          height: 48px;
          padding-top: 8px;
          padding-bottom: 8px;
        }
      `})]})}export{G as AudioDetail};