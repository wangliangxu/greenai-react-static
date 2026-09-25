import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,u as i}from"./router-vendor-C4C_6Mfu.js";import{a}from"./query-vendor-KR0ej7Li.js";import{l as o,o as s}from"./api-C6QdgyJO.js";import{F as c,Gt as l,In as u,Rr as d,Rt as f,Wt as p,bn as m,br as h,er as g,et as _,ma as v,o as y,qn as b,ra as x}from"./ui-vendor-BJACYxZ2.js";import{gn as S}from"./index-CCWUv77F.js";import{t as C}from"./Skeleton-DFVLJhLY.js";/* empty css                   */import{K as w,M as T,R as E,Y as D,a as O,b as k,c as A,f as j,p as M}from"./admin-media-avVPWqPX.js";import{t as N}from"./InlineVideoEditor-BJmeH_BD.js";import{i as P,n as F,r as I,t as L}from"./formatters-BG0XNSDQ.js";/* empty css                        */import{t as R}from"./ConfirmModal-DmqdBImj.js";var z=e(t(),1),B=n();function V(e,t,n=``){if(Array.isArray(e))return e.find(e=>e?.lang===t)?.value||e[0]?.value||n;if(typeof e==`object`&&e&&!Array.isArray(e)){let r=e;return r[t]||r.zh||n}return typeof e==`string`?e:n}function H(e,t){if(e&&typeof e==`object`&&!Array.isArray(e)){let n=e[t];return Array.isArray(n)?n:[]}return Array.isArray(e)?e.map(String):[]}function U(e,t){return e==null||e===``?(0,B.jsx)(`span`,{className:`vd-text-empty`,children:t}):String(e)}function W(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return typeof e==`object`&&!Array.isArray(e)?e:{}}function G({audio:e,metadata:t,displayLang:n=`zh`,hasScripts:r=!1}){let i=W(t),a=i.attrs||{},o=i.stats||{},s=i[`ga:audio`]||{},c=(i.variables||{}).audio_stream?.attrs||{},l=Array.isArray(i.files)?i.files:[],u=l.find(e=>e?.role===`primary`)||l[0],d=V(i.title,n)||P(e.display_title,e.title).replace(`视频`,`音频`),f=V(i.abstract,n)||e.display_description||e.description||``,p=V(i.subject,n)||e.category||``,m=H(i.tags,n),h=Array.isArray(e.tags)?e.tags.map(String):[],g=m.length>0?m:h,_=o.duration_seconds||s.duration_seconds||e.duration,v=o.file_size_bytes||s.file_size_bytes||e.file_size,y=c.sample_rate||s.sample_rate,b=c.channels||s.channels,x=c.bitrate||s.bitrate,S=c.codec||s.codec,C=a.format||u?.extension||e.file_format,w=a.language||i.language,T=n===`en`?{secDescription:`Description`,secTechnical:`Audio Technical`,secFiles:`Files`,secLicense:`License & Source`,title:`Title:`,abstract:`Abstract:`,subject:`Subject:`,tags:`Tags:`,resourceId:`Resource ID:`,duration:`Duration:`,fileSize:`File Size:`,codec:`Codec:`,sampleRate:`Sample Rate:`,channels:`Channels:`,bitrate:`Bitrate:`,scripts:`Scripts:`,format:`Format:`,fileName:`File:`,hash:`SHA-256:`,license:`License:`,creator:`Creator:`,language:`Language:`,provider:`Provider:`,originUrl:`Source URL:`,created:`Created:`,updated:`Updated:`,notFilled:`N/A`,ready:`Ready`,missing:`Missing`}:{secDescription:`📋 描述信息`,secTechnical:`🎧 音频参数`,secFiles:`📁 文件清单`,secLicense:`©️ 许可与来源`,title:`标题:`,abstract:`摘要:`,subject:`主题分类:`,tags:`标签:`,resourceId:`资源 ID:`,duration:`时长:`,fileSize:`文件大小:`,codec:`音频编码:`,sampleRate:`采样率:`,channels:`声道:`,bitrate:`码率:`,scripts:`脚本:`,format:`格式:`,fileName:`文件:`,hash:`SHA-256:`,license:`许可证:`,creator:`创建者:`,language:`语言:`,provider:`来源:`,originUrl:`来源链接:`,created:`创建日期:`,updated:`修改日期:`,notFilled:`未填写`,ready:`已生成`,missing:`未生成`};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`div`,{className:`vd-card`,children:[(0,B.jsx)(`div`,{className:`vd-card-header`,children:T.secDescription}),(0,B.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.title}),(0,B.jsx)(`span`,{className:`vd-value`,style:{fontWeight:600},children:d})]}),f&&(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.abstract}),(0,B.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,lineHeight:1.5},children:f})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.subject}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(p,T.notFilled)})]}),g.length>0&&(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.tags}),(0,B.jsx)(`div`,{className:`vd-tags`,children:g.map((e,t)=>(0,B.jsx)(`span`,{className:`vd-tag`,children:e},`${e}-${t}`))})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.resourceId}),(0,B.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.75rem`},children:e.id})]})]})]}),(0,B.jsxs)(`div`,{className:`vd-card`,children:[(0,B.jsx)(`div`,{className:`vd-card-header`,children:T.secTechnical}),(0,B.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.duration}),(0,B.jsx)(`span`,{className:`vd-value`,children:F(Number(_||0))})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.fileSize}),(0,B.jsx)(`span`,{className:`vd-value`,children:I(Number(v||0))})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.codec}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(S,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.sampleRate}),(0,B.jsx)(`span`,{className:`vd-value`,children:y?`${y} Hz`:(0,B.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.channels}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(b,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.bitrate}),(0,B.jsx)(`span`,{className:`vd-value`,children:x?`${Math.round(Number(x)/1e3)} kbps`:(0,B.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.scripts}),(0,B.jsx)(`span`,{className:`vd-value`,children:r?T.ready:(0,B.jsx)(`span`,{className:`vd-text-empty`,children:T.missing})})]})]})]}),(0,B.jsxs)(`div`,{className:`vd-card`,children:[(0,B.jsx)(`div`,{className:`vd-card-header`,children:T.secFiles}),(0,B.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.format}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(C,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.fileName}),(0,B.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:U(u?.name||e.url,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.hash}),(0,B.jsx)(`span`,{className:`vd-value`,style:{fontFamily:`monospace`,fontSize:`0.7rem`,wordBreak:`break-all`},children:U(u?.sha256||e.file_hash,T.notFilled)})]})]})]}),(0,B.jsxs)(`div`,{className:`vd-card`,children:[(0,B.jsx)(`div`,{className:`vd-card-header`,children:T.secLicense}),(0,B.jsxs)(`div`,{className:`vd-card-rows`,children:[(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.license}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(i.license,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.creator}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(i.creator||e.creator,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.language}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(w,T.notFilled)})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.provider}),(0,B.jsx)(`span`,{className:`vd-value`,children:U(a.provider||i.source,T.notFilled)})]}),a.origin_address&&(0,B.jsxs)(`div`,{className:`vd-row-start`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.originUrl}),(0,B.jsx)(`span`,{className:`vd-value`,style:{wordBreak:`break-all`},children:a.origin_address})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.created}),(0,B.jsx)(`span`,{className:`vd-value`,children:L(String(u?.ctime||i.date_created||e.created_at||``))||(0,B.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]}),(0,B.jsxs)(`div`,{className:`vd-row`,children:[(0,B.jsx)(`span`,{className:`vd-label`,children:T.updated}),(0,B.jsx)(`span`,{className:`vd-value`,children:L(String(i.date_modified||e.updated_at||``))||(0,B.jsx)(`span`,{className:`vd-text-empty`,children:T.notFilled})})]})]})]})]})}function ee({audio:e,metadata:t,onSave:n,onGenerated:r,scriptJob:i,onCancelScript:a,onClearScriptJob:o,isEditing:s,setIsEditing:c,editorRef:d,hasScripts:h=!1}){let{addToast:b}=S(),[x,C]=(0,z.useState)(!1),[T,E]=(0,z.useState)(300),[D,O]=(0,z.useState)(!1),[k,A]=(0,z.useState)(!1),[j,M]=(0,z.useState)(`zh`),P=(0,z.useRef)(null),F=w(),I=s===void 0?k:s,L=c||A,R=async()=>{if(e?.id)try{await F.mutateAsync(e.id),await r?.(),b({type:`success`,message:`音频元数据计算与同步已完成`})}catch(e){let t=e,n=t.response?.data?.detail||t.message||`未知错误`;b({type:`error`,message:`智能生成失败: ${n}`})}},V=(0,z.useCallback)(e=>{e.preventDefault(),O(!0)},[]);return(0,z.useEffect)(()=>{let e=e=>{if(!D)return;let t=Math.min(Math.max(220,window.innerWidth-e.clientX),440);E(t)},t=()=>O(!1);return D&&(document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t),document.body.style.cursor=``,document.body.style.userSelect=``}},[D]),(0,B.jsxs)(`aside`,{ref:P,className:`video-sidebar ${x?`collapsed`:``}`,style:{width:x?48:T},children:[(0,B.jsxs)(`div`,{className:`sidebar-header`,children:[(0,B.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>C(!x),title:x?`展开侧边栏`:`收起侧边栏`,children:x?(0,B.jsx)(l,{size:20}):(0,B.jsx)(p,{size:20})}),!x&&(0,B.jsx)(`div`,{className:`audio-sidebar-actions`,children:I?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`button`,{className:`sidebar-header-action audio-save-btn`,onClick:()=>d?.current?.save(),children:`保存`}),(0,B.jsx)(`button`,{className:`sidebar-header-action audio-cancel-btn`,onClick:()=>L(!1),children:`取消`})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`button`,{className:`sidebar-header-action smart-generate-btn`,onClick:R,disabled:F.isPending,title:`根据音频脚本和描述智能生成元数据`,children:[F.isPending?(0,B.jsx)(m,{size:13,className:`animate-spin`}):(0,B.jsx)(_,{size:13}),(0,B.jsx)(`span`,{children:F.isPending?`生成中...`:`智能生成`})]}),n&&(0,B.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>L(!0),title:`编辑元数据`,children:[(0,B.jsx)(f,{size:13}),(0,B.jsx)(`span`,{children:`编辑`})]}),(0,B.jsxs)(`button`,{className:`sidebar-header-action`,onClick:()=>M(e=>e===`zh`?`en`:`zh`),title:j===`zh`?`切换到英文显示`:`切换到中文显示`,children:[(0,B.jsx)(u,{size:12}),(0,B.jsx)(`span`,{children:j===`zh`?`EN`:`中`})]})]})})]}),!x&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:`sidebar-resizer ${D?`active`:``}`,onMouseDown:V,children:(0,B.jsx)(g,{size:12})}),(0,B.jsxs)(`nav`,{className:`video-tree-view`,children:[i&&i.status!==`completed`&&(0,B.jsxs)(`div`,{className:`sidebar-task-section`,children:[(0,B.jsxs)(`div`,{className:`tree-section-label audio-task-label`,children:[(0,B.jsxs)(`span`,{children:[(0,B.jsx)(v,{size:12}),`正在进行任务`]}),(i.status===`failed`||i.status===`cancelled`)&&o&&(0,B.jsx)(`button`,{onClick:o,className:`task-close-btn`,children:(0,B.jsx)(y,{size:12})})]}),(0,B.jsxs)(`div`,{className:`sidebar-task-card`,children:[(0,B.jsxs)(`div`,{className:`task-info`,children:[(0,B.jsx)(`span`,{className:`task-status`,children:i.status===`failed`?`生成失败`:i.job_mode===`continue`?`脚本续生成`:`脚本提取`}),(0,B.jsx)(`span`,{className:`task-stage`,children:i.stage?`[ ${i.stage} ]`:``}),(0,B.jsx)(`span`,{className:`task-percent`,children:typeof i.progress_percentage==`number`?`${Math.round(i.progress_percentage)}%`:``})]}),(0,B.jsx)(`div`,{className:`task-progress-bg`,children:(0,B.jsx)(`div`,{className:`task-progress-bar ${i.status===`failed`?`failed`:``}`,style:{width:`${i.progress_percentage||0}%`}})}),(0,B.jsxs)(`div`,{className:`task-footer`,children:[(0,B.jsx)(`span`,{className:`task-message`,title:i.message,children:i.message||(i.status===`processing`?`正在提取中...`:`准备中...`)}),i.status===`processing`&&a&&(0,B.jsx)(`button`,{onClick:a,className:`task-action-link`,children:`停止`})]})]})]}),(0,B.jsx)(`div`,{children:e?I?(0,B.jsx)(N,{ref:d,video:e,mediaLabel:`音频`,onSave:async e=>{n&&await n(e),L(!1)},onCancel:()=>L(!1)}):(0,B.jsx)(G,{audio:e,metadata:t,displayLang:j,hasScripts:h}):(0,B.jsx)(`div`,{className:`empty-state`,children:`未选中音频`})})]})]}),(0,B.jsx)(`style`,{children:`
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
      `})]})}function te(e){return e?.effective_audio_model?`${{aliyun:`阿里云`,openai:`OpenAI`,"local-sensevoice":`本地 SenseVoice`,"local-whisper":`本地 Whisper（旧链路）`}[(e.effective_audio_provider||``).toLowerCase()]||e.effective_audio_provider||`未知来源`} · ${e.effective_audio_model}`:``}function ne(e){return e.split(`
`).map(e=>e.trim()).filter(e=>e&&e!==`WEBVTT`&&!e.includes(`-->`)&&!/^\d+$/.test(e)).join(`
`)}function re(e){if(!e)return{};if(typeof e==`string`)try{let t=JSON.parse(e);return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}catch{return{}}return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}function ie(e){if(!e||e<=0)return``;let t=Math.round(e/1e3),n=Math.floor(t/60),r=t%60;return n>=60?`${Math.floor(n/60)}小时${n%60}分`:`${n}分${r.toString().padStart(2,`0`)}秒`}function K(){let{id:e}=r(),t=i(),n=a(),{data:l,isLoading:u,refetch:f}=T(e),p=E(),g=D(),[_,v]=(0,z.useState)(!1),[y,S]=(0,z.useState)(!1),[w,N]=(0,z.useState)(``),[P,F]=(0,z.useState)(!1),[I,L]=(0,z.useState)(null),[V,H]=(0,z.useState)(null),[U,W]=(0,z.useState)(``),G=(0,z.useRef)(null),[K,ae]=(0,z.useState)(`zh`),[oe,se]=(0,z.useState)(1),[ce,le]=(0,z.useState)(!1),ue=(0,z.useRef)(null),[q,de]=(0,z.useState)({zh:``,en:``}),[J,Y]=(0,z.useState)(!1),[fe,X]=(0,z.useState)(null),pe=te(V),me=re(l?.metadata);(0,z.useEffect)(()=>{if(!l?.id)return;let e=!1;return(async()=>{let t={zh:``,en:``};for(let e of[`zh`,`en`])try{let n=await s(o(`/api/admin/audios/${l.id}/scripts.vtt?lang=${e}`));n.ok&&(t[e]=ne(await n.text()))}catch{}if(!e){try{let e=await M(l.id);X(e),Y(e.has_scripts)}catch{X(null),Y(!!(t.zh||t.en))}de(t)}})(),()=>{e=!0}},[l?.id,V?.status]),(0,z.useEffect)(()=>{if(!I)return;let e=null,t=async()=>{try{let t=await j(I);if(H(t.job),(t.job.status===`completed`||t.job.status===`failed`||t.job.status===`cancelled`)&&(e&&clearInterval(e),L(null),t.job.status===`completed`)){if(await n.invalidateQueries({queryKey:[`audio`,l?.id]}),await f(),l?.id)try{let e=await M(l.id);X(e),Y(e.has_scripts),W(e.can_continue?`本次续生成已完成，脚本仍未到音频结尾，可继续生成。`:`脚本已自动生成完毕！`)}catch{Y(!0),W(`脚本已自动生成完毕！`)}else Y(!0),W(`脚本已自动生成完毕！`);setTimeout(()=>W(``),5e3)}}catch(t){let n=t;N(n?.response?.data?.detail||n?.message||`获取脚本任务失败`),e&&clearInterval(e)}};return t(),e=setInterval(()=>void t(),2e3),()=>{e&&clearInterval(e)}},[I,n,l?.id,f]);let he=async()=>{if(e){v(!0);try{await p.mutateAsync(e),t(`/admin/audios`)}catch(e){let t=e;N(t?.response?.data?.detail||t?.message||`删除音频失败`),S(!1)}finally{v(!1)}}},ge=async()=>{if(e){F(!0),N(``),W(``),H(null);try{let t=await k(e);L(t.job_id),H(t.job)}catch(e){let t=e;N(t?.response?.data?.detail||t?.message||`生成脚本失败`)}finally{F(!1)}}},_e=async()=>{if(e){F(!0),N(``),W(``),H(null);try{let t=await A(e);L(t.job_id),H(t.job)}catch(e){let t=e;N(t?.response?.data?.detail||t?.message||`继续生成脚本失败`)}finally{F(!1)}}},ve=async()=>{if(I)try{await O(I)}catch(e){let t=e;N(t?.response?.data?.detail||t?.message||`取消任务失败`)}},ye=async e=>{l&&(await g.mutateAsync({audioId:l.id,audioData:e}),await n.invalidateQueries({queryKey:[`audio`,l.id]}),await n.invalidateQueries({queryKey:[`audios`]}),await n.invalidateQueries({queryKey:[`resources`]}),await f(),W(`元数据保存成功！`),setTimeout(()=>W(``),3e3))};if(u)return(0,B.jsx)(`div`,{className:`page-container`,children:(0,B.jsx)(C,{height:400})});if(!l)return(0,B.jsx)(`div`,{className:`page-container`,children:(0,B.jsxs)(`div`,{className:`card`,style:{textAlign:`center`,padding:`48px`},children:[(0,B.jsx)(`div`,{style:{fontSize:`3rem`,marginBottom:`16px`},children:`🎧`}),(0,B.jsx)(`h3`,{style:{marginBottom:`8px`},children:`音频不存在`}),(0,B.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,marginBottom:`24px`},children:`找不到指定的音频`}),(0,B.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>t(`/admin/audios`),children:`返回列表`})]})});let Z=l.url;if(Z&&!Z.startsWith(`http`)){let e=localStorage.getItem(`token`);Z=o(`${Z}?token=${e}`)}let Q=!!fe?.can_continue,$=Q?ie(fe?.remaining_ms):``;return(0,B.jsxs)(`div`,{className:`page-container audio-detail-page`,children:[(0,B.jsxs)(`div`,{className:`video-detail-layout`,children:[(0,B.jsxs)(`div`,{className:`detail-main`,children:[(0,B.jsxs)(`div`,{className:`vd-toolbar`,children:[(0,B.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,B.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-back`,onClick:()=>t(`/admin/audios`),children:[(0,B.jsx)(x,{size:18}),`返回列表`]}),(0,B.jsx)(`span`,{className:`vd-toolbar-label`,children:`音频详情`})]}),(0,B.jsxs)(`div`,{className:`vd-toolbar-actions`,children:[(0,B.jsxs)(`button`,{className:`vd-toolbar-btn ${J&&!Q?`vd-toolbar-btn-success`:``}`,onClick:()=>{if(Q){_e();return}(!J||window.confirm(`该音频已有脚本，确定要重新提取吗？`))&&ge()},disabled:P||!!I,title:Q?`当前脚本未到音频结尾${$?`，约剩余 ${$}`:``}，点击继续生成`:J?`该音频已有完整脚本，点击可重新生成`:`自动提取中英文脚本`,children:[P?(0,B.jsx)(m,{size:16,className:`vd-spinning`}):(0,B.jsx)(h,{size:16}),Q?`继续生成`:J?`✓ 已有脚本`:`提取脚本`]}),(0,B.jsxs)(`a`,{href:Z,download:!0,className:`vd-toolbar-btn`,title:`下载源音频`,target:`_blank`,rel:`noreferrer`,children:[(0,B.jsx)(d,{size:16}),`下载音频`]}),(0,B.jsx)(`div`,{className:`vd-toolbar-divider`}),(0,B.jsxs)(`button`,{className:`vd-toolbar-btn vd-toolbar-btn-danger`,onClick:()=>S(!0),disabled:p.isPending||_,title:`删除音频`,children:[p.isPending||_?(0,B.jsx)(m,{size:16,className:`vd-spinning`}):(0,B.jsx)(c,{size:16}),`删除`]})]})]}),(0,B.jsx)(`div`,{className:`vd-header`,style:{marginBottom:`16px`},children:(0,B.jsxs)(`div`,{className:`vd-header-title`,style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,B.jsx)(`button`,{onClick:()=>t(`/admin/audios`),className:`vd-back-btn`,style:{display:`none`},children:(0,B.jsx)(x,{size:20})}),(0,B.jsx)(b,{size:24,className:`text-cg-primary`,style:{flexShrink:0}}),(0,B.jsx)(`h1`,{className:`text-2xl font-bold text-cg-text truncate`,title:l.title,style:{margin:0,minWidth:0},children:l.title})]})}),w&&(0,B.jsxs)(`div`,{className:`vd-error-message`,children:[(0,B.jsx)(`span`,{className:`vd-error-icon`,children:`⚠️`}),w]}),U&&(0,B.jsxs)(`div`,{className:`vd-success-message`,children:[(0,B.jsx)(`span`,{className:`vd-success-icon`,children:`✅`}),U]}),(0,B.jsx)(`div`,{className:`card`,style:{marginBottom:`24px`},children:(0,B.jsxs)(`div`,{className:`vd-player-section`,children:[(0,B.jsx)(`div`,{className:`vd-player-toolbar`,children:(0,B.jsxs)(`div`,{className:`vd-toolbar-left`,children:[(0,B.jsxs)(`span`,{className:`vd-toolbar-label`,children:[`ID: `,l.id.substring(0,8),`...`]}),(0,B.jsxs)(`span`,{className:`vd-toolbar-label ml-4`,children:[`大小: `,((l.file_size||0)/1024/1024).toFixed(2),` MB`]})]})}),(0,B.jsx)(`div`,{className:`vd-player-wrapper`,children:l.url?(0,B.jsxs)(`audio`,{ref:G,src:Z,controls:!0,className:`w-full h-[54px] rounded-md bg-[var(--cg-surface-raised)]`,crossOrigin:`anonymous`,children:[K!==`off`&&(0,B.jsx)(`track`,{kind:`subtitles`,src:o(`/api/admin/audios/${l.id}/scripts.vtt?lang=${K}`),srcLang:K,label:K===`zh`?`中文`:`English`,default:!0}),`您的浏览器不支持 HTML5 audio 标签。`]}):(0,B.jsx)(`div`,{className:`vd-player-placeholder`,children:`音频地址无效`})}),(0,B.jsx)(`div`,{className:`vd-content-vertical`,children:(0,B.jsxs)(`div`,{className:`vd-desc-block`,children:[(0,B.jsxs)(`div`,{className:`vd-desc-label`,children:[`🎧 音频脚本 · Audio Scripts`,Q&&(0,B.jsxs)(`span`,{style:{marginLeft:10,color:`var(--cg-warning)`,fontWeight:500},children:[`未到音频结尾`,$?`，约剩余 ${$}`:``]})]}),q.zh||q.en?(0,B.jsxs)(`div`,{className:`vd-bilingual-grid`,children:[(0,B.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,B.jsx)(`div`,{className:`vd-bilingual-tag cn`,children:`中文脚本`}),(0,B.jsx)(`div`,{className:`vd-subtitle-container`,children:q.zh?(0,B.jsx)(`pre`,{className:`vd-subtitle-pre`,children:q.zh}):(0,B.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`暂无中文脚本`})})]}),(0,B.jsxs)(`div`,{className:`vd-bilingual-col`,children:[(0,B.jsx)(`div`,{className:`vd-bilingual-tag en`,children:`English Script`}),(0,B.jsx)(`div`,{className:`vd-subtitle-container`,children:q.en?(0,B.jsx)(`pre`,{className:`vd-subtitle-pre`,children:q.en}):(0,B.jsx)(`div`,{className:`vd-text-empty`,style:{padding:`20px`,textAlign:`center`},children:`No English script found.`})})]})]}):(0,B.jsxs)(`div`,{className:`vd-empty-placeholder`,children:[(0,B.jsx)(`div`,{className:`vd-empty-icon`,children:`🎧`}),(0,B.jsxs)(`div`,{className:`vd-empty-text`,children:[`暂无脚本信息。请点击工具栏的 `,(0,B.jsx)(`strong`,{children:`“提取脚本”`}),` 自动转换音频内容。`]})]})]})}),V&&(0,B.jsxs)(`div`,{className:`vd-task-panel`,children:[(0,B.jsxs)(`div`,{className:`vd-task-header`,children:[(0,B.jsx)(`h3`,{className:`vd-task-title`,children:V.job_mode===`continue`?`脚本续生成任务状态`:`脚本提取任务状态`}),(0,B.jsx)(`span`,{className:`vd-task-badge vd-task-badge-${V.status}`,children:V.status===`pending`?`等待中`:V.status===`processing`?`处理中`:V.status===`completed`?`已完成`:V.status===`cancelled`?`已取消`:`失败`})]}),(0,B.jsxs)(`div`,{className:`vd-task-body`,children:[(0,B.jsxs)(`div`,{className:`vd-task-row`,children:[(0,B.jsx)(`span`,{className:`vd-task-label`,children:`阶段：`}),(0,B.jsx)(`span`,{className:`vd-task-value`,children:V.stage||`queued`})]}),(0,B.jsxs)(`div`,{className:`vd-task-row`,children:[(0,B.jsx)(`span`,{className:`vd-task-label`,children:`信息：`}),(0,B.jsx)(`span`,{className:`vd-task-value`,children:V.message||`-`})]}),V.effective_audio_provider&&(0,B.jsxs)(`div`,{className:`vd-task-row`,children:[(0,B.jsx)(`span`,{className:`vd-task-label`,children:`实际 ASR 引擎：`}),(0,B.jsx)(`span`,{className:`vd-task-value text-cg-info font-medium`,children:pe})]}),(0,B.jsxs)(`div`,{className:`vd-task-progress-container`,children:[(0,B.jsxs)(`div`,{className:`vd-task-progress-header`,children:[(0,B.jsx)(`span`,{children:`提取进度`}),(0,B.jsxs)(`span`,{children:[Math.round(V.progress_percentage||0),`%`]})]}),(0,B.jsx)(`div`,{className:`vd-task-progress-bar-bg`,children:(0,B.jsx)(`div`,{className:`vd-task-progress-bar-fill`,style:{width:`${V.progress_percentage||0}%`}})})]}),V.error_detail&&(0,B.jsx)(`div`,{className:`vd-task-error-detail`,children:JSON.stringify(V.error_detail,null,2)})]}),(V.status===`pending`||V.status===`processing`)&&(0,B.jsx)(`div`,{className:`vd-task-footer`,children:(0,B.jsx)(`button`,{onClick:ve,className:`vd-task-btn-cancel`,children:`取消任务`})})]})]})})]}),(0,B.jsx)(ee,{audio:l,metadata:me,onSave:async e=>{await ye(e),le(!1)},onGenerated:async()=>{await n.invalidateQueries({queryKey:[`audio`,l.id]}),await f()},scriptJob:V,onCancelScript:ve,onClearScriptJob:()=>L(null),isEditing:ce,setIsEditing:le,editorRef:ue,hasScripts:J})]}),(0,B.jsx)(R,{isOpen:y,onClose:()=>S(!1),onConfirm:he,title:`删除音频`,message:`确定要删除音频 "${l.title}" 吗？此操作不可恢复。`,confirmText:`立即删除`,cancelText:`取消`,type:`danger`,isLoading:p.isPending||_}),(0,B.jsx)(`style`,{children:`
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
      `})]})}export{K as AudioDetail};