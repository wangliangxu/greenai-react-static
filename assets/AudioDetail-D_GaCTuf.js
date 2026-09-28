import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,u as i}from"./router-vendor-C4C_6Mfu.js";import{a}from"./query-vendor-KR0ej7Li.js";import{l as o,o as s}from"./api-C6QdgyJO.js";import{Cr as c,F as l,Hr as u,Kt as d,Rn as f,Sn as p,Yn as m,ca as h,et as g,nr as _,o as v,qt as y,ya as b,zt as x}from"./ui-vendor-DRemX-fT.js";import{_n as S}from"./index-DHvEJx79.js";import{t as C}from"./Skeleton-DFVLJhLY.js";/* empty css                   */import{K as w,M as T,R as E,Y as D,a as O,b as ee,c as te,f as k,p as A}from"./admin-media-avVPWqPX.js";import{t as j}from"./InlineVideoEditor-Bs9SwypU.js";import{i as M,n as N,r as P,t as F}from"./formatters-BG0XNSDQ.js";/* empty css                        */import{t as I}from"./ConfirmModal-DOLcbNQv.js";var L=e(t(),1),R=n();function z(e,t,n=``){if(Array.isArray(e))return e.find(e=>e?.lang===t)?.value||e[0]?.value||n;if(typeof e==`object`&&e&&!Array.isArray(e)){let r=e;return r[t]||r.zh||n}return typeof e==`string`?e:n}function B(e,t){if(e&&typeof e==`object`&&!Array.isArray(e)){let n=e[t];return Array.isArray(n)?n:[]}return Array.isArray(e)?e.map(String):[]}function V(e,t){return e==null||e===``?(0,R.jsx)(`span`,{className:`vd-text-empty`,children:t}):String(e)}function H(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return typeof e==`object`&&!Array.isArray(e)?e:{}}function U({audio:e,metadata:t,displayLang:n=`zh`,hasScripts:r=!1}){let i=H(t),a=i.attrs||{},o=i.stats||{},s=i[`ga:audio`]||{},c=(i.variables||{}).audio_stream?.attrs||{},l=Array.isArray(i.files)?i.files:[],u=l.find(e=>e?.role===`primary`)||l[0],d=z(i.title,n)||M(e.display_title,e.title).replace(`视频`,`音频`),f=z(i.abstract,n)||e.display_description||e.description||``,p=z(i.subject,n)||e.category||``,m=B(i.tags,n),h=Array.isArray(e.tags)?e.tags.map(String):[],g=m.length>0?m:h,_=o.duration_seconds||s.duration_seconds||e.duration,v=o.file_size_bytes||s.file_size_bytes||e.file_size,y=c.sample_rate||s.sample_rate,b=c.channels||s.channels,x=c.bitrate||s.bitrate,S=c.codec||s.codec,C=a.format||u?.extension||e.file_format,w=a.language||i.language,T=n===`en`?{secDescription:`Description`,secTechnical:`Audio Technical`,secFiles:`Files`,secLicense:`License & Source`,title:`Title:`,abstract:`Abstract:`,subject:`Subject:`,tags:`Tags:`,resourceId:`Resource ID:`,duration:`Duration:`,fileSize:`File Size:`,codec:`Codec:`,sampleRate:`Sample Rate:`,channels:`Channels:`,bitrate:`Bitrate:`,scripts:`Scripts:`,format:`Format:`,fileName:`File:`,hash:`SHA-256:`,license:`License:`,creator:`Creator:`,language:`Language:`,provider:`Provider:`,originUrl:`Source URL:`,created:`Created:`,updated:`Updated:`,notFilled:`N/A`,ready:`Ready`,missing:`Missing`}:{secDescription:`📋 描述信息`,secTechnical:`🎧 音频参数`,secFiles:`📁 文件清单`,secLicense:`©️ 许可与来源`,title:`标题:`,abstract:`摘要:`,subject:`主题分类:`,tags:`标签:`,resourceId:`资源 ID:`,duration:`时长:`,fileSize:`文件大小:`,codec:`音频编码:`,sampleRate:`采样率:`,channels:`声道:`,bitrate:`码率:`,scripts:`脚本:`,format:`格式:`,fileName:`文件:`,hash:`SHA-256:`,license:`许可证:`,creator:`创建者:`,language:`语言:`,provider:`来源:`,originUrl:`来源链接:`,created:`创建日期:`,updated:`修改日期:`,notFilled:`未填写`,ready:`已生成`,missing:`未生成`};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`div`,{className:`vd-card`,children:[(0,R.jsx)(`div`,{className:`vd-card-header`,children:T.secDescription}),(0,R.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.title}),(0,R.jsx)(`span`,{className:`vd-value`,style:{fontWeight:600},children:d})]}),f&&(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.abstract}),(0,R.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,lineHeight:1.5},children:f})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.subject}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(p,T.notFilled)})]}),g.length>0&&(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.tags}),(0,R.jsx)(`div`,{className:`vd-tags`,children:g.map((e,t)=>(0,R.jsx)(`span`,{className:`vd-tag`,children:e},`${e}-${t}`))})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.resourceId}),(0,R.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.75rem`},children:e.id})]})]})]}),(0,R.jsxs)(`div`,{className:`vd-card`,children:[(0,R.jsx)(`div`,{className:`vd-card-header`,children:T.secTechnical}),(0,R.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.duration}),(0,R.jsx)(`span`,{className:`vd-value`,children:N(Number(_||0))})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.fileSize}),(0,R.jsx)(`span`,{className:`vd-value`,children:P(Number(v||0))})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.codec}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(S,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.sampleRate}),(0,R.jsx)(`span`,{className:`vd-value`,children:y?`${y} Hz`:(0,R.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.channels}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(b,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.bitrate}),(0,R.jsx)(`span`,{className:`vd-value`,children:x?`${Math.round(Number(x)/1e3)} kbps`:(0,R.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.scripts}),(0,R.jsx)(`span`,{className:`vd-value`,children:r?T.ready:(0,R.jsx)(`span`,{className:`vd-text-empty`,children:T.missing})})]})]})]}),(0,R.jsxs)(`div`,{className:`vd-card`,children:[(0,R.jsx)(`div`,{className:`vd-card-header`,children:T.secFiles}),(0,R.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.format}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(C,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.fileName}),(0,R.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:V(u?.name||e.url,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.hash}),(0,R.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.7rem`,wordBreak:`break-all`},children:V(u?.sha256||e.file_hash,T.notFilled)})]})]})]}),(0,R.jsxs)(`div`,{className:`vd-card`,children:[(0,R.jsx)(`div`,{className:`vd-card-header`,children:T.secLicense}),(0,R.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.license}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(i.license,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.creator}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(i.creator||e.creator,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.language}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(w,T.notFilled)})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.provider}),(0,R.jsx)(`span`,{className:`vd-value`,children:V(a.provider||i.source,T.notFilled)})]}),a.origin_address&&(0,R.jsxs)(`div`,{className:`vd-row-start`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.originUrl}),(0,R.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:a.origin_address})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.created}),(0,R.jsx)(`span`,{className:`vd-value`,children:F(String(u?.ctime||i.date_created||e.created_at||``))||(0,R.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,R.jsxs)(`div`,{className:`vd-row`,children:[(0,R.jsx)(`span`,{className:`vd-label`,children:T.updated}),(0,R.jsx)(`span`,{className:`vd-value`,children:F(String(i.date_modified||e.updated_at||``))||(0,R.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]})]})]})]})}function ne({audio:e,metadata:t,onSave:n,onGenerated:r,scriptJob:i,onCancelScript:a,onClearScriptJob:o,isEditing:s,setIsEditing:c,editorRef:l,hasScripts:u=!1}){let{addToast:m}=S(),[h,C]=(0,L.useState)(!1),[T,E]=(0,L.useState)(300),[D,O]=(0,L.useState)(!1),[ee,te]=(0,L.useState)(!1),[k,A]=(0,L.useState)(`zh`),M=(0,L.useRef)(null),N=w(),P=s===void 0?ee:s,F=c||te,I=async()=>{if(e?.id)try{await N.mutateAsync(e.id),await r?.(),m({type:`success`,message:`音频元数据计算与同步已完成`})}catch(e){let t=e,n=t.response?.data?.detail||t.message||`未知错误`;m({type:`error`,message:`智能生成失败: ${n}`})}},z=(0,L.useCallback)(e=>{e.preventDefault(),O(!0)},[]);return(0,L.useEffect)(()=>{let e=e=>{if(!D)return;let t=Math.min(Math.max(220,window.innerWidth-e.clientX),440);E(t)},t=()=>O(!1);return D&&(document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t),document.body.style.cursor=``,document.body.style.userSelect=``}},[D]),(0,R.jsxs)(`aside`,{ref:M,className:`video-sidebar ${h?`collapsed`:``}`,style:{width:h?48:T},children:[(0,R.jsxs)(`div`,{className:`sidebar-header`,children:[(0,R.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>C(!h),title:h?`展开侧边栏`:`收起侧边栏`,children:h?(0,R.jsx)(y,{size:20}):(0,R.jsx)(d,{size:20})}),!h&&(0,R.jsx)(`div`,{className:`audio-sidebar-actions`,children:P?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`button`,{className:`sidebar-header-action audio-save-btn`,onClick:()=>l?.current?.save(),children:`保存`}),(0,R.jsx)(`button`,{className:`sidebar-header-action audio-cancel-btn`,onClick:()=>F(!1),children:`取消`})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`button`,{className:`sidebar-header-action smart-generate-btn`,onClick:I,disabled:N.isPending,title:`根据音频脚本和描述智能生成元数据`,children:[N.isPending?(0,R.jsx)(p,{size:13,className:`animate-spin`}):(0,R.jsx)(g,{size:13}),(0,R.jsx)(`span`,{children:N.isPending?`生成中...`:`智能生成`})]}),n&&(0,R.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>F(!0),title:`编辑元数据`,children:[(0,R.jsx)(x,{size:13}),(0,R.jsx)(`span`,{children:`编辑`})]}),(0,R.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>A(e=>e===`zh`?`en`:`zh`),title:k===`zh`?`切换到英文显示`:`切换到中文显示`,children:[(0,R.jsx)(f,{size:12}),(0,R.jsx)(`span`,{children:k===`zh`?`EN`:`中`})]})]})})]}),!h&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:`sidebar-resizer ${D?`active`:``}`,onMouseDown:z,children:(0,R.jsx)(_,{size:12})}),(0,R.jsxs)(`nav`,{className:`video-tree-view`,children:[i&&i.status!==`completed`&&(0,R.jsxs)(`div`,{className:`sidebar-task-section`,children:[(0,R.jsxs)(`div`,{className:`tree-section-label audio-task-label`,children:[(0,R.jsxs)(`span`,{children:[(0,R.jsx)(b,{size:12}),`正在进行任务`]}),(i.status===`failed`||i.status===`cancelled`)&&o&&(0,R.jsx)(`button`,{onClick:o,className:`task-close-btn`,children:(0,R.jsx)(v,{size:12})})]}),(0,R.jsxs)(`div`,{className:`sidebar-task-card`,children:[(0,R.jsxs)(`div`,{className:`task-info`,children:[(0,R.jsx)(`span`,{className:`task-status`,children:i.status===`failed`?`生成失败`:i.job_mode===`continue`?`脚本续生成`:`脚本提取`}),(0,R.jsx)(`span`,{className:`task-stage`,children:i.stage?`[ ${i.stage} ]`:``}),(0,R.jsx)(`span`,{className:`task-percent`,children:typeof i.progress_percentage==`number`?`${Math.round(i.progress_percentage)}%`:``})]}),(0,R.jsx)(`div`,{className:`task-progress-bg`,children:(0,R.jsx)(`div`,{className:`task-progress-bar ${i.status===`failed`?`failed`:``}`,style:{width:`${i.progress_percentage||0}%`}})}),(0,R.jsxs)(`div`,{className:`task-footer`,children:[(0,R.jsx)(`span`,{className:`task-message`,title:i.message,children:i.message||(i.status===`processing`?`正在提取中...`:`准备中...`)}),i.status===`processing`&&a&&(0,R.jsx)(`button`,{onClick:a,className:`task-action-link`,children:`停止`})]})]})]}),(0,R.jsx)(`div`,{children:e?P?(0,R.jsx)(j,{ref:l,video:e,mediaLabel:`音频`,onSave:async e=>{n&&await n(e),F(!1)},onCancel:()=>F(!1)}):(0,R.jsx)(U,{audio:e,metadata:t,displayLang:k,hasScripts:u}):(0,R.jsx)(`div`,{className:`empty-state`,children:`未选中音频`})})]})]}),(0,R.jsx)(`style`,{children:`
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
      `})]})}function re(e){return e?.effective_audio_model?`${{aliyun:`阿里云`,openai:`OpenAI`,"local-sensevoice":`本地 SenseVoice`,"local-whisper":`本地 Whisper（旧链路）`}[(e.effective_audio_provider||``).toLowerCase()]||e.effective_audio_provider||`未知来源`} · ${e.effective_audio_model}`:``}function ie(e){return e.split(`
`).map(e=>e.trim()).filter(e=>e&&e!==`WEBVTT`&&!e.includes(`-->`)&&!/^\d+$/.test(e)).join(`
`)}function ae(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}function oe(e){if(!e||e<=0)return``;let t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return n>=60?`${Math.floor(n/60)}小时${n%60}分`:`${n}分${r.toString().padStart(2,`0`)}秒`}function W(){let{id:e}=r(),t=i(),n=a(),{data:d,isLoading:f,refetch:g}=T(e),_=E(),v=D(),[y,b]=(0,L.useState)(!1),[x,S]=(0,L.useState)(!1),[w,j]=(0,L.useState)(``),[M,N]=(0,L.useState)(!1),[P,F]=(0,L.useState)(null),[z,B]=(0,L.useState)(null),[V,H]=(0,L.useState)(``),U=(0,L.useRef)(null),[W,se]=(0,L.useState)(`zh`),[ce,le]=(0,L.useState)(1),[ue,G]=(0,L.useState)(!1),de=(0,L.useRef)(null),[K,fe]=(0,L.useState)({zh:``,en:``}),[q,J]=(0,L.useState)(!1),[Y,X]=(0,L.useState)(null),pe=re(z),me=ae(d?.metadata);(0,L.useEffect)(()=>{if(!d?.id)return;let e=!1;return(async()=>{let t={zh:``,en:``};for(let e of[`zh`,`en`])try{let n=await s(o(`/api/admin/audios/${d.id}/scripts.vtt?lang=${e}`));n.ok&&(t[e]=ie(await n.text()))}catch{}if(!e){try{let e=await A(d.id);X(e),J(e.has_scripts)}catch{X(null),J(!!(t.zh||t.en))}fe(t)}})(),()=>{e=!0}},[d?.id,z?.status]),(0,L.useEffect)(()=>{if(!P)return;let e=null,t=async()=>{try{let t=await k(P);if(B(t.job),(t.job.status===`completed`||t.job.status===`failed`||t.job.status===`cancelled`)&&(e&&clearInterval(e),F(null),t.job.status===`completed`)){if(await n.invalidateQueries({queryKey:[`audio`,d?.id]}),await g(),d?.id)try{let e=await A(d.id);X(e),J(e.has_scripts),H(e.can_continue?`本次续生成已完成，脚本仍未到音频结尾，可继续生成。`:`脚本已自动生成完毕！`)}catch{J(!0),H(`脚本已自动生成完毕！`)}else J(!0),H(`脚本已自动生成完毕！`);setTimeout(()=>H(``),5e3)}}catch(t){let n=t;j(n?.response?.data?.detail||n?.message||`获取脚本任务失败`),e&&clearInterval(e)}};return t(),e=setInterval(()=>void t(),2e3),()=>{e&&clearInterval(e)}},[P,n,d?.id,g]);let he=async()=>{if(e){b(!0);try{await _.mutateAsync(e),t(`/admin/audios`)}catch(e){let t=e;j(t?.response?.data?.detail||t?.message||`删除音频失败`),S(!1)}finally{b(!1)}}},ge=async()=>{if(e){N(!0),j(``),H(``),B(null);try{let t=await ee(e);F(t.job_id),B(t.job)}catch(e){let t=e;j(t?.response?.data?.detail||t?.message||`生成脚本失败`)}finally{N(!1)}}},_e=async()=>{if(e){N(!0),j(``),H(``),B(null);try{let t=await te(e);F(t.job_id),B(t.job)}catch(e){let t=e;j(t?.response?.data?.detail||t?.message||`继续生成脚本失败`)}finally{N(!1)}}},ve=async()=>{if(P)try{await O(P)}catch(e){let t=e;j(t?.response?.data?.detail||t?.message||`取消任务失败`)}},ye=async e=>{d&&(await v.mutateAsync({audioId:d.id,audioData:e}),await n.invalidateQueries({queryKey:[`audio`,d.id]}),await n.invalidateQueries({queryKey:[`audios`]}),await n.invalidateQueries({queryKey:[`resources`]}),await g(),H(`元数据保存成功！`),setTimeout(()=>H(``),3e3))};if(f)return(0,R.jsx)(`div`,{className:`page-container`,children:(0,R.jsx)(C,{height:400})});if(!d)return(0,R.jsx)(`div`,{className:`page-container`,children:(0,R.jsxs)(`div`,{className:`card`,style:{textAlign:`center`,padding:`48px`},children:[(0,R.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🎧`}),(0,R.jsx)(`h3`,{style:{marginBottom:`8px`},children:`音频不存在`}),(0,R.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,marginBottom:`24px`},children:`找不到指定的音频`}),(0,R.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>t(`/admin/audios`),children:`返回列表`})]})});let Z=d.url;if(Z&&!Z.startsWith(`http`)){let e=localStorage.getItem(`token`);Z=o(`${Z}?token=${e}`)}let Q=!!Y?.can_continue,$=Q?oe(Y?.remaining_ms):``;return(0,R.jsxs)(`div`,{className:`page-container audio-detail-page`,children:[(0,R.jsxs)(`div`,{className:`video-detail-layout`,children:[(0,R.jsxs)(`div`,{className:`detail-main`,children:[(0,R.jsxs)(`div`,{className:`vd-toolbar`,children:[(0,R.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,R.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-back`,onClick:()=>t(`/admin/audios`),children:[(0,R.jsx)(h,{size:18}),`返回列表`]}),(0,R.jsx)(`span`,{className:`vd-toolbar-label`,children:`音频详情`})]}),(0,R.jsxs)(`div`,{className:`vd-toolbar-actions`,children:[(0,R.jsxs)(`button`,{className:`vd-toolbar-btn ${q&&!Q?`vd-toolbar-btn-success`:``}`,onClick:()=>{if(Q){_e();return}(!q||window.confirm(`该音频已有脚本，确定要重新提取吗？`))&&ge()},disabled:M||!!P,title:Q?`当前脚本未到音频结尾${$?`，约剩余 ${$}`:``}，点击继续生成`:q?`该音频已有完整脚本，点击可重新生成`:`自动提取中英文脚本`,children:[M?(0,R.jsx)(p,{size:16,className:`vd-spinning`}):(0,R.jsx)(c,{size:16}),Q?`继续生成`:q?`✓ 已有脚本`:`提取脚本`]}),(0,R.jsxs)(`a`,{href:Z,download:!0,className:`vd-toolbar-btn`,title:`下载源音频`,target:`_blank`,rel:`noreferrer`,children:[(0,R.jsx)(u,{size:16}),`下载音频`]}),(0,R.jsx)(`div`,{className:`vd-toolbar-divider`}),(0,R.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-danger`,onClick:()=>S(!0),disabled:_.isPending||y,title:`删除音频`,children:[_.isPending||y?(0,R.jsx)(p,{size:16,className:`vd-spinning`}):(0,R.jsx)(l,{size:16}),`删除`]})]})]}),(0,R.jsx)(`div`,{className:`vd-header`,style:{marginBottom:`16px`},children:(0,R.jsxs)(`div`,{className:`vd-header-title`,style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,R.jsx)(`button`,{onClick:()=>t(`/admin/audios`),className:`vd-back-btn`,style:{display:`none`},children:(0,R.jsx)(h,{size:20})}),(0,R.jsx)(m,{size:24,className:`text-cg-primary`,style:{flexShrink:0}}),(0,R.jsx)(`h1`,{className:`text-2xl font-bold text-cg-text truncate`,title:d.title,style:{margin:0,minWidth:0},children:d.title})]})}),w&&(0,R.jsxs)(`div`,{className:`vd-error-message`,children:[(0,R.jsx)(`span`,{className:`vd-error-icon`,children:`⚠️`}),w]}),V&&(0,R.jsxs)(`div`,{className:`vd-success-message`,children:[(0,R.jsx)(`span`,{className:`vd-success-icon`,children:`✅`}),V]}),(0,R.jsx)(`div`,{className:`card`,style:{marginBottom:`24px`},children:(0,R.jsxs)(`div`,{className:`vd-player-section`,children:[(0,R.jsx)(`div`,{className:`vd-player-toolbar`,children:(0,R.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,R.jsxs)(`span`,{className:`vd-toolbar-label`,children:[`ID: `,d.id.substring(0,8),`...`]}),(0,R.jsxs)(`span`,{className:`vd-toolbar-label ml-4`,children:[`大小: `,((d.file_size||0)/1024/1024).toFixed(2),` MB`]})]})}),(0,R.jsx)(`div`,{className:`vd-player-wrapper`,children:d.url?(0,R.jsxs)(`audio`,{ref:U,src:Z,controls:!0,className:`w-full h-[54px] rounded-md bg-[var(--cg-surface-raised)]`,crossOrigin:`anonymous`,children:[W!==`off`&&(0,R.jsx)(`track`,{kind:`subtitles`,src:o(`/api/admin/audios/${d.id}/scripts.vtt?lang=${W}`),srcLang:W,label:W===`zh`?`中文`:`English`,default:!0}),`您的浏览器不支持 HTML5 audio 标签。`]}):(0,R.jsx)(`div`,{className:`vd-player-placeholder`,children:`音频地址无效`})}),(0,R.jsx)(`div`,{className:`vd-content-vertical`,children:(0,R.jsxs)(`div`,{className:`vd-desc-block`,children:[(0,R.jsxs)(`div`,{className:`vd-desc-label`,children:[`🎧 音频脚本 · Audio Scripts`,Q&&(0,R.jsxs)(`span`,{style:{marginLeft:10,color:`var(--cg-warning)`,fontWeight:500},children:[`未到音频结尾`,$?`，约剩余 ${$}`:``]})]}),K.zh||K.en?(0,R.jsxs)(`div`,{className:`vd-bilingual-grid`,children:[(0,R.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,R.jsx)(`div`,{className:`vd-bilingual-tag cn`,children:`中文脚本`}),(0,R.jsx)(`div`,{className:`vd-subtitle-container`,children:K.zh?(0,R.jsx)(`pre`,{className:`vd-subtitle-pre`,children:K.zh}):(0,R.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`暂无中文脚本`})})]}),(0,R.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,R.jsx)(`div`,{className:`vd-bilingual-tag en`,children:`English Script`}),(0,R.jsx)(`div`,{className:`vd-subtitle-container`,children:K.en?(0,R.jsx)(`pre`,{className:`vd-subtitle-pre`,children:K.en}):(0,R.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`No English script found.`})})]})]}):(0,R.jsxs)(`div`,{className:`vd-empty-placeholder`,children:[(0,R.jsx)(`div`,{className:`vd-empty-icon`,children:`🎧`}),(0,R.jsxs)(`div`,{className:`vd-empty-text`,children:[`暂无脚本信息。请点击工具栏的 `,(0,R.jsx)(`strong`,{children:`“提取脚本”`}),` 自动转换音频内容。`]})]})]})}),z&&(0,R.jsxs)(`div`,{className:`vd-task-panel`,children:[(0,R.jsxs)(`div`,{className:`vd-task-header`,children:[(0,R.jsx)(`h3`,{className:`vd-task-title`,children:z.job_mode===`continue`?`脚本续生成任务状态`:`脚本提取任务状态`}),(0,R.jsx)(`span`,{className:`vd-task-badge vd-task-badge-${z.status}`,children:z.status===`pending`?`等待中`:z.status===`processing`?`处理中`:z.status===`completed`?`已完成`:z.status===`cancelled`?`已取消`:`失败`})]}),(0,R.jsxs)(`div`,{className:`vd-task-body`,children:[(0,R.jsxs)(`div`,{className:`vd-task-row`,children:[(0,R.jsx)(`span`,{className:`vd-task-label`,children:`阶段：`}),(0,R.jsx)(`span`,{className:`vd-task-value`,children:z.stage||`queued`})]}),(0,R.jsxs)(`div`,{className:`vd-task-row`,children:[(0,R.jsx)(`span`,{className:`vd-task-label`,children:`信息：`}),(0,R.jsx)(`span`,{className:`vd-task-value`,children:z.message||`-`})]}),z.effective_audio_provider&&(0,R.jsxs)(`div`,{className:`vd-task-row`,children:[(0,R.jsx)(`span`,{className:`vd-task-label`,children:`实际 ASR 引擎：`}),(0,R.jsx)(`span`,{className:`vd-task-value text-cg-info font-medium`,children:pe})]}),(0,R.jsxs)(`div`,{className:`vd-task-progress-container`,children:[(0,R.jsxs)(`div`,{className:`vd-task-progress-header`,children:[(0,R.jsx)(`span`,{children:`提取进度`}),(0,R.jsxs)(`span`,{children:[Math.round(z.progress_percentage||0),`%`]})]}),(0,R.jsx)(`div`,{className:`vd-task-progress-bar-bg`,children:(0,R.jsx)(`div`,{className:`vd-task-progress-bar-fill`,style:{width:`${z.progress_percentage||0}%`}})})]}),z.error_detail&&(0,R.jsx)(`div`,{className:`vd-task-error-detail`,children:JSON.stringify(z.error_detail,null,2)})]}),(z.status===`pending`||z.status===`processing`)&&(0,R.jsx)(`div`,{className:`vd-task-footer`,children:(0,R.jsx)(`button`,{onClick:ve,className:`vd-task-btn-cancel`,children:`取消任务`})})]})]})})]}),(0,R.jsx)(ne,{audio:d,metadata:me,onSave:async e=>{await ye(e),G(!1)},onGenerated:async()=>{await n.invalidateQueries({queryKey:[`audio`,d.id]}),await g()},scriptJob:z,onCancelScript:ve,onClearScriptJob:()=>F(null),isEditing:ue,setIsEditing:G,editorRef:de,hasScripts:q})]}),(0,R.jsx)(I,{isOpen:x,onClose:()=>S(!1),onConfirm:he,title:`删除音频`,message:`确定要删除音频 "${d.title}" 吗？此操作不可恢复。`,confirmText:`立即删除`,cancelText:`取消`,type:`danger`,isLoading:_.isPending||y}),(0,R.jsx)(`style`,{children:`
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
      `})]})}export{W as AudioDetail};