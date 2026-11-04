const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GovernanceReport-BYNjSsBz.js","assets/rolldown-runtime-Bjp52BOI.js","assets/chart-vendor-CaAGlfls.js","assets/editor-vendor-DNpPfJmi.js","assets/api-DrSRLQJE.js","assets/vendor-axios-CimMC2LF.js","assets/ui-vendor-hkI7IWbu.js","assets/GovernanceReport-1I_TeBP5.css","assets/DependencyGraph-D-n32e-7.js","assets/graph-xyflow-vendor-B4UT6nEi.js","assets/graph-xyflow-vendor-CHpVij2M.css","assets/graphFallbackLayout-AQBWgRjT.js","assets/FeedbackGraph-Ci4q458t.js"])))=>i.map(i=>d[i]);
import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{Yt as t}from"./chart-vendor-CaAGlfls.js";import{g as n,p as r}from"./router-vendor-D8ZmRCh1.js";import{a as i}from"./query-vendor-BAFTaE_c.js";import{g as a,h as o,m as s}from"./editor-vendor-DNpPfJmi.js";import{n as c,o as l}from"./api-DrSRLQJE.js";import{$r as u,Ai as d,Ar as f,Bt as p,Ca as m,Cr as h,Di as g,Ei as _,En as v,Et as ee,F as te,Ji as ne,Jn as y,K as re,Mi as ie,Oi as ae,On as b,Or as oe,Q as se,Qr as ce,T as le,Ur as ue,Vt as x,Xr as de,Xt as S,Yn as fe,Yt as pe,_r as me,ba as C,bt as w,ct as T,dt as he,ga as ge,gi as _e,hr as E,ji as D,k as ve,lt as O,mt as ye,na as be,o as k,oi as A,pt as xe,qi as Se,qr as Ce,ri as we,s as j,st as Te,va as Ee,vr as M,wi as De,wt as N,zt as Oe}from"./ui-vendor-hkI7IWbu.js";import"./index-C-_MGd53.js";import{t as ke}from"./vendor-js-yaml-Csu1eKKQ.js";import{n as Ae,t as je}from"./publicationResult-Yhjrb0c6.js";import{t as Me}from"./Modal-BHEvax_N.js";import{n as Ne,r as Pe}from"./bilingual-BAihdQ31.js";import{t as Fe}from"./AiAnalysisSidebar-PagaOruS.js";import{n as P,t as Ie}from"./AdminToolbar-DnyeTKkW.js";import"./Toolbar-DcdPhKTd.js";import{t as Le}from"./AdminSidebar-BlFC8dv9.js";import"./Sidebar-C1tv2u0l.js";/* empty css                        */import{t as Re}from"./ConfirmModal-D9U0MQC7.js";import{D as ze,E as Be,I as Ve,L as He,P as Ue,_ as We,b as Ge,h as Ke,m as qe,t as Je,v as Ye,w as Xe,x as Ze,y as Qe}from"./adminQueries-CzYBwYA0.js";import{t as $e}from"./governanceQueue-DHeZNsBY.js";import{t as et}from"./IntakeMetadataEditor-DCx1pxA1.js";import{n as tt,r as nt,t as rt}from"./vendor-react-syntax-highlighter-W0PgVpNz.js";var F=e(t(),1),I=a();function it({isOpen:e,onClose:t,onSuccess:n}){let[r,i]=(0,F.useState)(`file`),[a,o]=(0,F.useState)(``),[s,c]=(0,F.useState)(``),[l,u]=(0,F.useState)(``),d=(0,F.useRef)(!1),f=He(e&&r===`table`),p=ze(),m=async()=>{if(a.trim()&&!d.current){d.current=!0,c(``),u(``);try{let e=await p.mutateAsync(a.trim());c(e.message),n?.(e.source_name)}catch(e){let t=e;u(t.response?.data?.detail||t.message||`创建元数据失败，请重试`)}finally{d.current=!1}}},[h,g]=(0,F.useState)([]),[v,ee]=(0,F.useState)(``),[te,ne]=(0,F.useState)({}),[y,re]=(0,F.useState)({}),{data:ie}=Je(),ae=(0,F.useRef)(!1),[b,ce]=(0,F.useState)(!1),ue=Ve(),x=(0,F.useCallback)(e=>{if(ae.current)return;let t=Array.from(e.target.files||[]);g(e=>Array.from(new Map([...e,...t].map(e=>[`${e.name}-${e.size}-${e.lastModified}`,e])).values()))},[]),de=(0,F.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),S=(0,F.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),ae.current)return;let t=Array.from(e.dataTransfer.files);g(e=>Array.from(new Map([...e,...t].map(e=>[`${e.name}-${e.size}-${e.lastModified}`,e])).values()))},[]),fe=(0,F.useCallback)(e=>{g(t=>t.filter((t,n)=>n!==e))},[]),pe=(0,F.useCallback)(async()=>{if(h.length===0||ae.current)return;ae.current=!0,ce(!0);let e=!1;for(let t of h){let n=`${t.name}-${t.size}-${t.lastModified}`;if(te[n]!==`success`){ne(e=>({...e,[n]:`uploading`}));try{let r=await ue.mutateAsync({file:t,category:v||void 0,auto_metadata:!0});e=!0,ne(e=>({...e,[n]:`success`})),re(e=>({...e,[n]:r.message||`上传成功`}))}catch(e){let t=e;ne(e=>({...e,[n]:`error`})),re(e=>({...e,[n]:t.response?.data?.detail||t.message||`上传失败`}))}}}ae.current=!1,ce(!1),e&&n?.()},[h,v,ue,n,te]),me=()=>{ae.current||d.current||(o(``),c(``),u(``),g([]),ne({}),re({}),t())},C=h.some(e=>te[`${e.name}-${e.size}-${e.lastModified}`]!==`success`),w=e=>e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(2)} KB`:e<1073741824?`${(e/1048576).toFixed(2)} MB`:`${(e/1073741824).toFixed(2)} GB`;return(0,I.jsx)(Me,{isOpen:e,onClose:me,title:`上传数据文件`,children:(0,I.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,I.jsxs)(`div`,{role:`tablist`,"aria-label":`入库方式`,style:{display:`flex`,gap:`1rem`,marginBottom:`1.5rem`},children:[(0,I.jsx)(`button`,{role:`tab`,"aria-selected":r===`file`,disabled:b||p.isPending,onClick:()=>i(`file`),children:`上传文件`}),(0,I.jsx)(`button`,{role:`tab`,"aria-selected":r===`table`,disabled:b||p.isPending,onClick:()=>i(`table`),children:`数据库表（weather）`})]}),r===`table`?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{children:`选择 weather 数据库中已有的表，系统会读取字段结构并创建元数据，随后在后台自动进行 AI 补全。`}),(0,I.jsx)(`label`,{htmlFor:`weather-intake-table`,children:`具体表格`}),(0,I.jsx)(`input`,{id:`weather-intake-table`,list:`weather-table-options`,value:a,disabled:p.isPending,onChange:e=>{o(e.target.value),c(``),u(``)},placeholder:`选择或输入表名`,style:{width:`100%`,margin:`0.5rem 0`,padding:`0.6rem`}}),(0,I.jsx)(`datalist`,{id:`weather-table-options`,children:f.data?.tables.map(e=>(0,I.jsx)(`option`,{value:e},e))}),f.isLoading&&(0,I.jsx)(`p`,{children:`正在读取表列表…`}),f.isError&&(0,I.jsxs)(`p`,{role:`alert`,children:[`表列表加载失败，可输入完整表名，或`,(0,I.jsx)(`button`,{onClick:()=>void f.refetch(),children:`重试`})]}),s&&(0,I.jsx)(`p`,{role:`status`,children:s}),l&&(0,I.jsx)(`p`,{role:`alert`,children:l}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,justifyContent:`flex-end`,marginTop:`1rem`},children:[(0,I.jsx)(`button`,{disabled:p.isPending,onClick:me,children:`关闭`}),(0,I.jsx)(`button`,{disabled:!a.trim()||p.isPending||!!s,onClick:()=>void m(),children:p.isPending?`正在创建…`:`创建表格元数据`})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,I.jsx)(`label`,{style:{display:`block`,marginBottom:`0.5rem`,fontWeight:500},children:`所属主题（可选，文件格式自动识别）`}),(0,I.jsxs)(`select`,{disabled:b,value:v,onChange:e=>ee(e.target.value),style:{width:`100%`,padding:`0.5rem`,border:`1px solid var(--cg-border)`,borderRadius:`6px`},children:[(0,I.jsx)(`option`,{value:``,children:`自动识别`}),ie?.map(e=>(0,I.jsx)(`option`,{value:e.theme_key,children:e.name},e.theme_key))]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`0.65rem`,marginBottom:`1.5rem`,padding:`0.75rem 0.9rem`,borderRadius:`8px`,background:`var(--admin-primary-light)`,color:`var(--cg-text)`,fontSize:`0.82rem`},children:[(0,I.jsx)(se,{size:17,style:{color:`var(--admin-primary)`,flexShrink:0,marginTop:`1px`}}),(0,I.jsx)(`span`,{children:`上传后先完成基础入库，AI 将默认在后台补全标题、摘要等元数据。入库成功后可关闭窗口，稍后刷新列表查看结果。`})]}),(0,I.jsxs)(`div`,{onDragOver:de,onDrop:S,style:{border:`2px dashed var(--cg-text-muted)`,borderRadius:`8px`,padding:`2rem`,textAlign:`center`,marginBottom:`1.5rem`,backgroundColor:`var(--cg-bg)`,cursor:`pointer`},children:[(0,I.jsx)(le,{size:48,style:{color:`var(--cg-text-muted)`,marginBottom:`1rem`}}),(0,I.jsx)(`p`,{style:{margin:`0.5rem 0`,color:`var(--cg-text-muted)`},children:`拖拽文件到此处或点击选择文件`}),(0,I.jsx)(`input`,{type:`file`,multiple:!0,disabled:b,onChange:x,style:{display:`none`},id:`file-upload-input`}),(0,I.jsx)(`label`,{htmlFor:`file-upload-input`,style:{display:`inline-block`,padding:`0.5rem 1rem`,backgroundColor:`var(--admin-primary)`,color:`white`,borderRadius:`6px`,cursor:`pointer`,marginTop:`1rem`},children:`选择文件`})]}),h.length>0&&(0,I.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,I.jsxs)(`h4`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:[`已选择文件 (`,h.length,`)`]}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:h.map((e,t)=>{let n=`${e.name}-${e.size}-${e.lastModified}`,r=te[n]||`idle`,i=y[n];return(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,padding:`0.75rem`,backgroundColor:`var(--cg-bg)`,borderRadius:`6px`,border:`1px solid var(--cg-border)`},children:[(0,I.jsx)(oe,{size:16,style:{color:`var(--cg-text-muted)`}}),(0,I.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,I.jsx)(`div`,{style:{fontWeight:500,fontSize:`0.875rem`},children:e.name}),(0,I.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:w(e.size)}),i&&(0,I.jsxs)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:r===`success`?`var(--admin-success)`:r===`error`?`var(--admin-danger)`:`var(--cg-text-muted)`},children:[r===`success`&&(0,I.jsx)(De,{size:12,style:{marginRight:`0.25rem`}}),r===`error`&&(0,I.jsx)(_,{size:12,style:{marginRight:`0.25rem`}}),i]})]}),!b&&r!==`success`&&(0,I.jsx)(`button`,{onClick:()=>fe(t),style:{background:`none`,border:`none`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`0.25rem`},children:(0,I.jsx)(k,{size:16})})]},t)})})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,justifyContent:`flex-end`},children:[(0,I.jsx)(`button`,{onClick:me,disabled:b,style:{padding:`0.5rem 1rem`,border:`1px solid var(--cg-border)`,borderRadius:`6px`,backgroundColor:`var(--cg-surface)`,cursor:`pointer`},children:`关闭`}),(0,I.jsx)(`button`,{onClick:pe,disabled:b||!C,style:{padding:`0.5rem 1rem`,border:`none`,borderRadius:`6px`,backgroundColor:b||!C?`var(--cg-text-muted)`:`var(--admin-primary)`,color:`white`,cursor:b||!C?`not-allowed`:`pointer`},children:b?`正在入库…`:C?`上传未成功的文件`:`入库完成`})]})]})]})})}function at({sourceName:e,metadata:t,onSuccess:n,onCancel:r}){return(0,I.jsx)(et,{isOpen:!0,sourceName:e,metadata:t,onClose:r,onSuccess:n})}var ot=({isOpen:e,onClose:t,preview:n,onGoToGovernance:r,onGoToEditMetadata:i,onRegenerateMetadata:a})=>{if(!n)return null;let o=n.evaluation,s=o?.total_score??0,c=o?.governance_gaps||[],l=o?.pending_tasks||[],u=o?.deductions?.vetos||[],d=o?.deductions?.penalties||[];return(0,I.jsx)(Me,{isOpen:e,onClose:t,title:`发布条件核对未通过`,width:`680px`,children:(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontSize:`0.9rem`},children:[(0,I.jsxs)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.08)`,border:`1px solid rgba(239, 68, 68, 0.25)`,borderRadius:`8px`,padding:`14px 16px`,display:`flex`,gap:`12px`,alignItems:`flex-start`},children:[(0,I.jsx)(S,{size:22,style:{color:`#ef4444`,flexShrink:0,marginTop:`2px`}}),(0,I.jsxs)(`div`,{style:{flex:1},children:[(0,I.jsxs)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`,marginBottom:`4px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,I.jsx)(`span`,{children:`数据源尚未满足正式发布要求`}),(0,I.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600,padding:`2px 8px`,borderRadius:`12px`,backgroundColor:s>=60?`rgba(34, 197, 94, 0.15)`:`rgba(239, 68, 68, 0.15)`,color:s>=60?`#16a34a`:`#ef4444`},children:[`当前质量得分: `,s,` 分 (及格线: 60分)`]})]}),(0,I.jsx)(`div`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.85rem`,lineHeight:1.5},children:o?.recommendation||`当前数据源未通过发布准入核对，请解决以下阻断问题后再次尝试发布。`})]})]}),c.length>0&&(0,I.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`14px 16px`},children:[(0,I.jsxs)(`div`,{style:{fontWeight:600,fontSize:`0.88rem`,color:`var(--cg-text)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(ve,{size:16,style:{color:`#f59e0b`}}),(0,I.jsxs)(`span`,{children:[`未达标项与治理缺口 (`,c.length,`)`]})]}),(0,I.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,color:`var(--cg-text)`,fontSize:`0.84rem`,lineHeight:1.6},children:c.map((e,t)=>(0,I.jsx)(`li`,{style:{marginBottom:`4px`},children:e},t))})]}),l.length>0&&(0,I.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`14px 16px`},children:[(0,I.jsxs)(`div`,{style:{fontWeight:600,fontSize:`0.88rem`,color:`var(--cg-text)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,I.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(O,{size:16,style:{color:`#3b82f6`}}),(0,I.jsxs)(`span`,{children:[`关联的待处理治理任务 (`,l.length,` 项)`]})]}),r&&(0,I.jsxs)(`button`,{type:`button`,onClick:()=>{t(),r()},style:{background:`none`,border:`none`,color:`#3b82f6`,cursor:`pointer`,fontSize:`0.8rem`,display:`flex`,alignItems:`center`,gap:`2px`,padding:0},children:[`前往解决 `,(0,I.jsx)(Ee,{size:12})]})]}),(0,I.jsx)(`div`,{style:{maxHeight:`160px`,overflowY:`auto`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`},children:(0,I.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.8rem`},children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{style:{backgroundColor:`var(--cg-bg)`,textAlign:`left`,borderBottom:`1px solid var(--cg-border)`},children:[(0,I.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`},children:`涉及字段`}),(0,I.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`},children:`任务类型`}),(0,I.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`,width:`70px`},children:`状态`})]})}),(0,I.jsx)(`tbody`,{children:l.map((e,t)=>(0,I.jsxs)(`tr`,{style:{borderBottom:t<l.length-1?`1px solid var(--cg-border)`:`none`},children:[(0,I.jsx)(`td`,{style:{padding:`6px 10px`,fontFamily:`monospace`,color:`#2563eb`},children:e.target_field||`-`}),(0,I.jsx)(`td`,{style:{padding:`6px 10px`,color:`var(--cg-text)`},children:e.task_type||`待治理校验`}),(0,I.jsx)(`td`,{style:{padding:`6px 10px`},children:(0,I.jsx)(`span`,{style:{fontSize:`0.72rem`,padding:`2px 6px`,borderRadius:`4px`,backgroundColor:`rgba(234, 179, 8, 0.15)`,color:`#b45309`},children:e.status||`pending`})})]},t))})]})})]}),u.length>0&&(0,I.jsxs)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.05)`,border:`1px solid rgba(239, 68, 68, 0.2)`,borderRadius:`8px`,padding:`12px 16px`},children:[(0,I.jsx)(`div`,{style:{fontWeight:600,color:`#ef4444`,marginBottom:`6px`,fontSize:`0.88rem`},children:`硬性阻断否决项`}),u.map((e,t)=>(0,I.jsxs)(`div`,{style:{fontSize:`0.84rem`,color:`var(--cg-text)`,marginBottom:`4px`},children:[`• `,(0,I.jsx)(`strong`,{children:e.label||e.code}),`: `,e.detail||`未通过`]},t))]}),d.length>0&&(0,I.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`12px 16px`},children:[(0,I.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text-muted)`,marginBottom:`8px`,fontSize:`0.85rem`},children:`质量扣分明细 (改善后可提高质量得分)`}),(0,I.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:d.map((e,t)=>(0,I.jsxs)(`div`,{style:{fontSize:`0.78rem`,padding:`4px 10px`,borderRadius:`6px`,backgroundColor:`rgba(245, 158, 11, 0.1)`,color:`#b45309`,border:`1px solid rgba(245, 158, 11, 0.25)`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(`span`,{children:e.label||e.code}),e.detail&&(0,I.jsxs)(`span`,{style:{opacity:.75},children:[`(`,e.detail,`)`]})]},t))})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,alignItems:`center`,gap:`10px`,marginTop:`8px`,paddingTop:`14px`,borderTop:`1px solid var(--cg-border)`},children:[a&&(0,I.jsxs)(`button`,{type:`button`,onClick:()=>{t(),a()},style:{padding:`7px 14px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`,color:`var(--cg-text)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,I.jsx)(se,{size:15,style:{color:`#8b5cf6`}}),`重新生成元数据`]}),i&&(0,I.jsxs)(`button`,{type:`button`,onClick:()=>{t(),i()},style:{padding:`7px 14px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`,color:`var(--cg-text)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,I.jsx)(x,{size:15,style:{color:`#3b82f6`}}),`编辑元数据`]}),r&&l.length>0&&(0,I.jsxs)(`button`,{type:`button`,onClick:()=>{t(),r()},style:{padding:`7px 16px`,borderRadius:`6px`,border:`none`,backgroundColor:`#3b82f6`,color:`#fff`,cursor:`pointer`,fontWeight:500,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,I.jsx)(O,{size:15}),`解决待处理问题 (`,l.length,`)`]}),(0,I.jsx)(`button`,{type:`button`,onClick:t,style:{padding:`7px 16px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-bg)`,color:`var(--cg-text)`,cursor:`pointer`,fontSize:`0.85rem`},children:`关闭`})]})]})})};o();var st=(0,F.lazy)(()=>s(()=>import(`./GovernanceReport-BYNjSsBz.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))),L=(0,F.lazy)(()=>s(()=>import(`./DependencyGraph-D-n32e-7.js`),__vite__mapDeps([8,1,2,3,9,10,11]))),ct=(0,F.lazy)(()=>s(()=>import(`./FeedbackGraph-Ci4q458t.js`),__vite__mapDeps([12,1,2,3,9,10,11]))),lt=`/api/admin/governance`,ut=new Map,dt=({sourceName:e,className:t=``,onFieldSelect:n,selectedField:r,contentViewMode:i=`panorama`,onActionItemCount:a,filterLayer:o,selectedCausalField:s,onGraphDataLoad:l,selectedFeedbackField:u,onFeedbackGraphDataLoad:d})=>{let[f,p]=(0,F.useState)(null),[m,h]=(0,F.useState)(!0),[g,ee]=(0,F.useState)(null),[te,ne]=(0,F.useState)(null);if((0,F.useEffect)(()=>{if(!e)return;h(!0),ee(null);let t=ut.get(e);t&&(p(t),h(!1)),(async()=>{try{let t=(await c.get(`${lt}/context/${encodeURIComponent(e)}/full`)).data;ut.set(e,t),p(t)}catch(e){ee(e.message)}finally{h(!1)}})(),(async()=>{try{let t=(await c.get(`${lt}/tasks/${encodeURIComponent(e)}/by-layer`)).data;ne(t.layers||[])}catch(e){console.error(`Failed to fetch layer data:`,e)}})()},[e]),m)return(0,I.jsxs)(`div`,{className:t,style:{padding:`12px`,color:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(v,{className:`animate-spin`,size:14}),(0,I.jsx)(`span`,{children:`加载中...`})]});if(g||!f)return(0,I.jsxs)(`div`,{className:t,style:{padding:`12px`,color:`var(--admin-danger)`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(_,{size:14}),g||`无数据`]});let{background:y,review_suggestions:re}=f;return(0,I.jsxs)(`div`,{className:t,style:{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,fontSize:`13px`,lineHeight:1.7,color:`var(--cg-text)`,padding:`12px 16px`,background:`var(--cg-bg)`,borderRadius:`6px`,border:`1px solid var(--cg-border)`},children:[y&&(0,I.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`0.5rem`},children:[(0,I.jsx)(`div`,{style:{marginBottom:`6px`},children:(0,I.jsx)(`span`,{style:{fontWeight:800,fontSize:`1.1rem`,color:`var(--cg-text)`,letterSpacing:`-0.01em`},children:y.source_name||e})}),(()=>{let e=y,t=e.governance_started_at,n=e.governance_updated_at,r=e.governance_duration_hours,i=y.task_stats??{total:0,pending:0,completed:0};return(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`12px`,fontSize:`12px`,color:`var(--cg-text-muted)`,flexWrap:`wrap`},children:[(0,I.jsx)(`span`,{style:{background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`11px`,fontWeight:600},children:y.driver}),(0,I.jsxs)(`span`,{children:[`L`,y.current_layer??0]}),(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`span`,{children:[`任务 `,i.completed,`/`,i.total]}),i.pending>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`span`,{children:[`待办 `,i.pending]})]}),t&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`span`,{children:[`开始 `,new Date(t).toLocaleDateString(`zh-CN`,{month:`short`,day:`numeric`})]})]}),n&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`span`,{children:[`更新 `,new Date(n).toLocaleDateString(`zh-CN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})]})]}),r!=null&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{children:`·`}),(0,I.jsxs)(`span`,{children:[`耗时 `,r>=24?`${Math.round(r/24)}天`:`${r}小时`]})]})]})})()]}),(i===`panorama`||i===`action`)&&(0,I.jsx)(ft,{layerData:te,viewMode:i,onActionItemCount:a,selectedField:r,filterLayer:o,onFieldClick:(e,t)=>n?.(e,t)}),i===`causal`&&(0,I.jsx)(F.Suspense,{fallback:(0,I.jsx)(`div`,{style:{padding:`12px`,color:`var(--cg-text-muted)`},children:`正在加载因果图...`}),children:(0,I.jsx)(L,{sourceName:e,selectedField:s,onFieldClick:e=>n?.(e),onGraphDataLoad:l})}),i===`feedback`&&(0,I.jsx)(F.Suspense,{fallback:(0,I.jsx)(`div`,{style:{padding:`12px`,color:`var(--cg-text-muted)`},children:`正在加载反馈图...`}),children:(0,I.jsx)(ct,{sourceName:e,selectedField:u,onFieldClick:e=>n?.(e),onGraphDataLoad:d})}),i===`report`&&(0,I.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,I.jsx)(F.Suspense,{fallback:(0,I.jsx)(`div`,{style:{padding:`24px`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`正在载入质量报告模块...`}),children:(0,I.jsx)(st,{sourceName:e})})})]})},R={COMPLETE:{bg:`var(--admin-success-light)`,text:`var(--admin-success)`,label:`✅`},COMMITTED:{bg:`var(--admin-success-light)`,text:`var(--admin-success)`,label:`✅`},APPROVED:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`👍`},PENDING_REVIEW:{bg:`var(--admin-warning-light)`,text:`var(--admin-warning)`,label:`⏳`},PENDING:{bg:`var(--cg-bg)`,text:`var(--cg-text-muted)`,label:`⬜`},IN_PROGRESS:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`🔄`},EXTRACTING:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`🔄`},MISSING:{bg:`var(--admin-danger-light)`,text:`var(--admin-danger)`,label:`❌`},DEFERRED:{bg:`var(--cg-surface)`,text:`var(--cg-text-muted)`,label:`⏸️`}},ft=({layerData:e,viewMode:t=`panorama`,onActionItemCount:n,onFieldClick:r,selectedField:i,filterLayer:a})=>{let o=F.useMemo(()=>e?a==null?e:e.filter(e=>e.layer===a):null,[e,a]),s=o&&o.some(e=>e.fields.length>0||e.tasks.length>0),[c,l]=F.useState(()=>{if(!o)return new Set;let e=new Set;return o.forEach(t=>{let{stats:n}=t,r=n.total_fields>0&&n.done_fields===n.total_fields,i=n.total_fields===0&&n.total_tasks===0;!r&&!i&&e.add(t.layer)}),e}),[u,d]=F.useState(!1),f=e=>{l(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},p=F.useMemo(()=>e?e.filter(e=>{let{stats:t}=e;return t.total_fields>0&&t.done_fields===t.total_fields}):[],[e]),m=F.useMemo(()=>e?e.filter(e=>{let{stats:t}=e,n=t.total_fields>0&&t.done_fields===t.total_fields,r=t.total_fields===0&&t.total_tasks===0;return!n&&!r}):[],[e]),h=F.useMemo(()=>{let e=0;return m.forEach(t=>{t.fields.forEach(t=>{t.status!==`COMPLETE`&&t.status!==`COMMITTED`&&e++})}),e},[m]),g=F.useMemo(()=>p.reduce((e,t)=>e+t.stats.done_fields,0),[p]);F.useEffect(()=>{n?.(h)},[h,n]);let _=e=>e.status===`BLOCKED`||e.review_tier===`MUST_REVIEW`?0:e.status===`PENDING_REVIEW`||e.review_tier===`SHOULD_REVIEW`?1:e.status===`MISSING`?2:3,v=e=>e.status===`BLOCKED`||e.review_tier===`MUST_REVIEW`?{emoji:`🟠`,text:`Arbiter 待协调`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:e.status===`PENDING_REVIEW`||e.review_tier===`SHOULD_REVIEW`?{emoji:`🟡`,text:`等待人工操作`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:e.status===`MISSING`?{emoji:`🟡`,text:`待填写`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:{emoji:`🟢`,text:`建议改进`,color:`var(--admin-success)`,bg:`var(--admin-success-light)`};return s?t===`action`?(0,I.jsxs)(`div`,{style:{marginTop:`1rem`},children:[(0,I.jsxs)(`h4`,{style:{margin:`0 0 0.75rem 0`,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[`🎯 待办事项`,h>0&&(0,I.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:700,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[h,` 项`]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[p.length>0&&(0,I.jsxs)(`div`,{onClick:()=>d(!u),style:{padding:`8px 12px`,borderRadius:`8px`,border:`1px solid #bbf7d0`,background:`var(--cg-bg)`,cursor:`pointer`,userSelect:`none`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(`span`,{style:{fontSize:`0.65rem`,color:`var(--admin-success)`,transition:`transform 0.2s ease`,transform:u?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`},children:`▶`}),(0,I.jsxs)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--admin-success)`},children:[`✅ `,p.map(e=>`L${e.layer}`).join(`-`),` 全部达标 (`,g,`/`,g,`)`]})]}),u&&(0,I.jsx)(`div`,{style:{marginTop:`8px`,display:`flex`,flexDirection:`column`,gap:`4px`,marginLeft:`20px`},children:p.map(e=>{let t=c.has(`completed-${e.layer}`);return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{onClick:t=>{t.stopPropagation(),f(`completed-${e.layer}`)},style:{display:`flex`,alignItems:`center`,gap:`6px`,cursor:`pointer`,padding:`2px 0`},children:[(0,I.jsx)(`span`,{style:{fontSize:`0.55rem`,color:`var(--cg-text-muted)`,transform:t?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,transition:`transform 0.2s`},children:`▶`}),(0,I.jsx)(`span`,{style:{fontSize:`0.8rem`},children:e.icon}),(0,I.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:600,color:`var(--admin-success)`},children:[`L`,e.layer,` `,e.name]}),(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,color:`var(--admin-success)`,background:`var(--admin-success-light)`,padding:`1px 6px`,borderRadius:`8px`,fontWeight:600},children:[e.stats.done_fields,`/`,e.stats.total_fields]})]}),t&&e.fields.length>0&&(0,I.jsx)(`div`,{style:{marginLeft:`24px`,marginTop:`4px`,fontSize:`0.75rem`,fontFamily:`ui-monospace, monospace`},children:e.fields.map(e=>(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,padding:`1px 0`,color:`var(--cg-text-muted)`},children:[(0,I.jsx)(`span`,{children:`✓`}),(0,I.jsx)(`span`,{style:{minWidth:`120px`},children:e.field_path}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.value?e.value.length>30?e.value.substring(0,27)+`...`:e.value:`—`})]},e.field_path))})]},e.layer)})})]}),m.map(e=>{let{stats:t}=e,n=e.fields.filter(e=>e.status!==`COMPLETE`&&e.status!==`COMMITTED`).sort((e,t)=>_(e)-_(t)),a=t.total_fields>0?Math.round(t.done_fields/t.total_fields*100):0,o=e.fields.some(e=>e.score!=null)?e.fields.reduce((e,t)=>e+(t.score||0),0):a;return n.length===0?null:(0,I.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:`8px`,border:`1px solid #e0e7ff`,background:`var(--cg-surface)`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:[(0,I.jsx)(`span`,{style:{fontSize:`1rem`},children:e.icon}),(0,I.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:700,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 6px`,borderRadius:`4px`,fontFamily:`ui-monospace, monospace`},children:[`L`,e.layer]}),(0,I.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--cg-text)`},children:e.name}),(0,I.jsx)(`div`,{style:{flex:1}}),(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:o>=80?`var(--admin-success)`:o>=60?`var(--admin-warning)`:`var(--admin-danger)`,background:o>=80?`var(--admin-success-light)`:o>=60?`var(--admin-warning-light)`:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[o,`分`]}),(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[n.length,` 项待办`]})]}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:n.map((t,n)=>{let a=v(t),o=i===t.field_path;return(0,I.jsxs)(`div`,{onClick:()=>r?.(t.field_path,{value:t.value,layer:e.layer,status:t.status,suggestion:t.suggestion}),style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`6px 10px`,borderRadius:`6px`,border:o?`1.5px solid #6366f1`:`1px solid var(--cg-border)`,background:o?`var(--admin-primary-light)`:n%2==0?`var(--cg-surface)`:`var(--cg-bg)`,cursor:`pointer`,transition:`all 0.15s ease`,fontSize:`0.8rem`},children:[(0,I.jsx)(`span`,{style:{fontSize:`0.75rem`,width:`20px`,textAlign:`center`},children:a.emoji}),(0,I.jsx)(`code`,{style:{fontWeight:600,color:`var(--cg-text)`,fontSize:`0.8rem`,background:`var(--cg-bg)`,padding:`1px 6px`,borderRadius:`3px`},children:t.field_path}),(0,I.jsx)(`span`,{style:{fontSize:`0.7rem`,color:a.color,background:a.bg,padding:`1px 6px`,borderRadius:`8px`,fontWeight:600,whiteSpace:`nowrap`},children:a.text}),t.confidence!=null&&(0,I.jsxs)(`span`,{style:{fontSize:`0.65rem`,color:`var(--cg-text-muted)`,marginLeft:`auto`},children:[`置信度 `,(t.confidence*100).toFixed(0),`%`]})]},t.field_path)})})]},e.layer)}),h===0&&(0,I.jsx)(`div`,{style:{padding:`24px`,textAlign:`center`,color:`var(--admin-success)`,fontSize:`1rem`,fontWeight:600,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px solid #bbf7d0`},children:`🎉 所有字段均已达标，无待处理事项`})]})]}):(0,I.jsxs)(`div`,{style:{marginTop:`1rem`},children:[(0,I.jsx)(`h4`,{style:{margin:`0 0 0.75rem 0`,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:`🏗️ 治理任务进度`}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:o.map(e=>{let{stats:t}=e,n=t.total_fields===0&&t.total_tasks===0,r=t.total_fields>0&&t.done_fields===t.total_fields,i=t.total_fields>0?Math.round(t.done_fields/t.total_fields*100):0,a=c.has(e.layer),o=e.fields.length>0||e.tasks.length>0,s=e.fields.some(e=>e.score!=null)?e.fields.reduce((e,t)=>e+(t.score||0),0):i,l=s>=80?`var(--admin-success)`:s>=60?`var(--admin-warning)`:`var(--admin-danger)`,u=s>=80?`var(--admin-success-light)`:s>=60?`var(--admin-warning-light)`:`var(--admin-danger-light)`;return(0,I.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:`8px`,border:`1px solid ${r?`var(--admin-success-light)`:n?`var(--cg-border)`:`var(--admin-primary-light)`}`,background:r||n?`var(--cg-bg)`:`var(--cg-surface)`},children:[(0,I.jsxs)(`div`,{onClick:()=>o&&f(e.layer),style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:o?`pointer`:`default`,userSelect:`none`},children:[o&&(0,I.jsx)(`span`,{style:{fontSize:`0.65rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:a?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`},children:`▶`}),(0,I.jsx)(`span`,{style:{fontSize:`1rem`},children:e.icon}),(0,I.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:700,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 6px`,borderRadius:`4px`,fontFamily:`ui-monospace, monospace`},children:[`L`,e.layer]}),(0,I.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--cg-text)`},children:e.name}),(0,I.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:e.name_en}),(0,I.jsx)(`div`,{style:{flex:1}}),t.total_fields>0&&(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:l,background:u,padding:`2px 8px`,borderRadius:`10px`,marginRight:`4px`},children:[s,`分`]}),t.total_fields>0&&(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:600,color:r?`var(--admin-success)`:`var(--cg-text-muted)`,background:r?`var(--admin-success-light)`:`var(--cg-bg)`,padding:`2px 8px`,borderRadius:`10px`},children:[t.done_fields,`/`,t.total_fields]})]}),n&&(0,I.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginLeft:`28px`},children:e.description}),o&&(0,I.jsxs)(`div`,{style:{overflow:`hidden`,maxHeight:a?`2000px`:`0`,opacity:+!!a,transition:`max-height 0.25s ease, opacity 0.2s ease`,marginTop:a?`8px`:`0`},children:[t.total_fields>0&&(0,I.jsx)(`div`,{style:{height:`3px`,background:`var(--cg-border)`,borderRadius:`2px`,overflow:`hidden`,marginBottom:`8px`},children:(0,I.jsx)(`div`,{style:{height:`100%`,width:`${i}%`,background:r?`var(--admin-success)`:`var(--admin-primary)`,borderRadius:`2px`,transition:`width 0.3s ease`}})}),e.fields.length>0&&(0,I.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.75rem`,fontFamily:`ui-monospace, monospace`},children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-border)`},children:[(0,I.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600,width:`30px`},children:`#`}),(0,I.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600},children:`要素名`}),(0,I.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600},children:`要素值`}),(0,I.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600,minWidth:`80px`},children:`评语`}),(0,I.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`right`,color:`var(--cg-text-muted)`,fontWeight:600,width:`50px`},children:`评分`})]})}),(0,I.jsx)(`tbody`,{children:e.fields.map((t,n)=>{let r=R[t.status]||R.MISSING,i=t.value??(t.status===`COMPLETE`?`✓`:`—`),a=typeof i==`string`&&i.length>40?i.substring(0,37)+`...`:i,o=t.score??(t.confidence?Math.round(t.confidence*100):null);t.score!=null&&t.score;let s=t.children&&t.children.length>0,l=`${e.layer}-${t.field_path}`,u=c.has(l);return(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:n%2==0?`transparent`:`var(--cg-bg)`},children:[(0,I.jsx)(`td`,{style:{padding:`3px 6px`,color:`var(--cg-text-muted)`},children:n+1}),(0,I.jsxs)(`td`,{style:{padding:`3px 6px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(`span`,{style:{display:`inline-block`,width:`6px`,height:`6px`,borderRadius:`50%`,background:r.bg===`var(--cg-bg)`?`var(--admin-success)`:r.bg===`var(--admin-warning-light)`?`var(--admin-warning)`:`var(--admin-danger)`,flexShrink:0}}),s&&(0,I.jsx)(`span`,{onClick:e=>{e.stopPropagation(),f(l)},style:{cursor:`pointer`,fontSize:`0.55rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:u?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,userSelect:`none`},children:`▶`}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text)`},children:t.field_path})]}),(0,I.jsx)(`td`,{style:{padding:`3px 6px`,color:(t.status,`var(--cg-text-muted)`),maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:typeof i==`string`?i:void 0,children:a==null?`—`:String(a)}),(0,I.jsx)(`td`,{style:{padding:`3px 6px`,fontSize:`0.65rem`,color:t.comment?.includes(`⚠️`)?`var(--admin-warning)`:t.comment?.includes(`✅`)?`var(--admin-success)`:`var(--cg-text-muted)`,maxWidth:`120px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:t.comment||``,children:t.comment||`—`}),(0,I.jsx)(`td`,{style:{padding:`3px 6px`,textAlign:`right`,color:o==null?`var(--cg-text-muted)`:o>=80?`var(--admin-success)`:o>=60?`var(--admin-warning)`:`var(--admin-danger)`,fontWeight:600,fontSize:`0.7rem`},children:o==null?`—`:`${o}%`})]}),s&&u&&t.children.map(n=>{let r=R[n.status]||R.MISSING,i=n.value??(n.status===`COMPLETE`?`✓`:`—`),a=typeof i==`string`&&i.length>36?i.substring(0,33)+`...`:i,o=n.children&&n.children.length>0,s=`${e.layer}-${t.field_path}-${n.field_path}`,l=c.has(s);return(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:`var(--cg-bg)`},children:[(0,I.jsx)(`td`,{style:{padding:`2px 6px`}}),(0,I.jsxs)(`td`,{style:{padding:`2px 6px 2px 28px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(`span`,{style:{display:`inline-block`,width:`5px`,height:`5px`,borderRadius:`50%`,background:r.bg===`var(--cg-bg)`?`var(--admin-success)`:r.bg===`var(--admin-warning-light)`?`var(--admin-warning)`:`var(--admin-danger)`,flexShrink:0,opacity:.7}}),o&&(0,I.jsx)(`span`,{onClick:e=>{e.stopPropagation(),f(s)},style:{cursor:`pointer`,fontSize:`0.5rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:l?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,userSelect:`none`},children:`▶`}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:n.field_path})]}),(0,I.jsx)(`td`,{style:{padding:`2px 6px`,color:(n.status,`var(--cg-text-muted)`),fontSize:`0.75rem`,maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:typeof i==`string`?i:void 0,children:a==null?`—`:String(a)}),(0,I.jsx)(`td`,{style:{padding:`2px 6px`,textAlign:`right`,color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:n.status===`COMPLETE`?`✓`:`—`})]}),o&&l&&n.children.map(e=>(0,I.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:`var(--cg-surface)`},children:[(0,I.jsx)(`td`,{style:{padding:`2px 6px`}}),(0,I.jsxs)(`td`,{style:{padding:`2px 6px 2px 48px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(`span`,{style:{display:`inline-block`,width:`4px`,height:`4px`,borderRadius:`50%`,background:`var(--cg-text-muted)`,flexShrink:0,opacity:.5}}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.7rem`,fontFamily:`ui-monospace, monospace`},children:e.field_path})]}),(0,I.jsx)(`td`,{style:{padding:`2px 6px`,color:`var(--cg-text-muted)`,fontSize:`0.7rem`,fontFamily:`ui-monospace, monospace`},children:e.value??`—`}),(0,I.jsx)(`td`,{style:{padding:`2px 6px`}})]},`${t.field_path}.${n.field_path}.${e.field_path}`))]},`${t.field_path}.${n.field_path}`)})]},t.field_path)})})]}),e.tasks.length>0&&(0,I.jsxs)(`div`,{style:{marginTop:`6px`,marginLeft:`2px`,display:`flex`,flexDirection:`column`,gap:`2px`},children:[e.tasks.slice(0,5).map(e=>{let t=R[e.status]||R.PENDING,n=e.priority_class===`P0`||e.priority_class===`P1`?`var(--admin-primary)`:`var(--admin-danger)`;return(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,padding:`2px 0`},children:[(0,I.jsx)(`span`,{style:{fontFamily:`ui-monospace, monospace`,fontSize:`0.65rem`,color:n,fontWeight:600},children:e.priority_class}),(0,I.jsx)(`span`,{style:{color:t.text},children:t.label}),(0,I.jsx)(`code`,{style:{fontSize:`0.7rem`,background:`var(--cg-bg)`,padding:`1px 4px`,borderRadius:`3px`},children:e.target_field}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.65rem`},children:e.task_type}),e.role&&(0,I.jsx)(`span`,{style:{fontSize:`0.6rem`,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 4px`,borderRadius:`3px`},children:e.role})]},e.id)}),e.tasks.length>5&&(0,I.jsxs)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,paddingLeft:`4px`},children:[`+`,e.tasks.length-5,` more...`]})]})]})]},e.layer)})})]}):(0,I.jsx)(`div`,{style:{marginTop:`1rem`,padding:`12px 16px`,color:`var(--cg-text-muted)`,fontSize:`0.85rem`,fontStyle:`italic`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`暂无治理任务数据，请先运行审计或执行自动推进。`})};nt.registerLanguage(`yaml`,tt);var pt=e=>e?new Date(e*1e3).toLocaleString(`zh-CN`):`-`,z=e=>e==null?!1:typeof e==`string`?e.trim()!==``&&e!==`-`:Array.isArray(e)?e.length>0:typeof e==`object`?Array.isArray(e)&&e.length>0&&typeof e[0]==`object`&&`value`in e[0]?e.some(e=>e.value&&e.value.trim()!==``):Object.keys(e).length>0:!0,B=e=>{if(e==null)return`-`;if(typeof e==`boolean`)return e?`是`:`否`;if(Array.isArray(e)){if(e.length===0)return`-`;if(typeof e[0]==`object`&&`lang`in e[0]&&`value`in e[0]){let t=e,n=t.find(e=>e.lang===`zh`)?.value,r=t.find(e=>e.lang===`en`)?.value;return n||r||`-`}return e.join(`, `)}return typeof e==`object`&&e?`text`in e?B(e.text):JSON.stringify(e,null,2):String(e)},V={title:`标题`,author:`创建者/作者`,tags:`主题/标签`,description:`描述信息`,publisher:`出版/发布者`,contributors:`贡献者`,date:`日期`,data_type:`资源类型`,format:`数据格式`,id:`唯一标识符`,source:`数据来源`,language:`语言`,relation:`关联资源`,spatial:`空间范围`,license:`权利/许可`,license_url:`许可链接`,usage_terms:`使用条款`,columns:`属性列`,bands:`波段信息`,bbox:`地理边界 (BBox)`,crs:`坐标系 (CRS)`,resolution:`分辨率`,temporal:`时间跨度`,academic_narrative:`学术叙事增强`,mqm:`元数据质量 (MQM)`},mt=[`file_name`,`file_extension`,`relative_path`,`file_size_bytes`,`created_time`,`modified_time`,`accessed_time`,`category`,`category_name`];function H({sourceName:e}){let[t,n]=(0,F.useState)([]),[r,i]=(0,F.useState)(!0);return(0,F.useEffect)(()=>{e&&(async()=>{i(!0);try{let t=await c.get(`/api/admin/datasets/${e}/units`);n(Array.isArray(t.data)?t.data:[])}catch(e){console.error(`获取关联单元失败:`,e)}finally{i(!1)}})()},[e]),r?(0,I.jsx)(`div`,{className:`loading`,style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`加载关联单元...`}):t.length===0?null:(0,I.jsxs)(`div`,{className:`metadata-section card`,style:{marginTop:`1.5rem`},children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(be,{size:20}),`关联课程单元`,(0,I.jsx)(`span`,{className:`section-subtitle`,children:`Associated Curriculum Units`})]}),(0,I.jsx)(`div`,{className:`associated-units-list`,style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:t.map(e=>(0,I.jsxs)(`div`,{className:`unit-item-mini`,style:{display:`flex`,alignItems:`center`,gap:`1rem`,padding:`1rem`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px solid var(--cg-border)`},children:[(0,I.jsx)(`div`,{className:`unit-icon`,style:{width:`32px`,height:`32px`,borderRadius:`6px`,background:`var(--admin-primary-light)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--admin-primary)`},children:(0,I.jsx)(be,{size:18})}),(0,I.jsxs)(`div`,{className:`unit-info`,style:{flex:1},children:[(0,I.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`},children:e.title}),(0,I.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:[`ID: `,e.id]})]})]},e.id))})]})}function ht({file:e,onBack:t,onDownload:n,onMetadataEdited:r}){let[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(`yaml`),[l,u]=(0,F.useState)(!1),[d,p]=(0,F.useState)(e.publication_status===`published`?`files`:`governance`),[m,h]=(0,F.useState)(`action`),[g,te]=(0,F.useState)(null),[ne,re]=(0,F.useState)(!1),[ie,ae]=(0,F.useState)(null),[b,le]=(0,F.useState)(!1),[x,S]=(0,F.useState)(null),[fe,w]=(0,F.useState)(``),[ge,_e]=(0,F.useState)(null),[E,D]=(0,F.useState)(`idle`),[ve,O]=(0,F.useState)(e.publication_status||`draft`);(0,F.useEffect)(()=>{O(e.publication_status||`draft`)},[e.publication_status]);let ye=async()=>{w(``),D(`publishing`);try{if(!await Ae(e.name)){D(`idle`);return}D(`done`),O(`published`),r(),setTimeout(()=>D(`idle`),3e3)}catch(e){e instanceof je?(_e(e.preview),w(e.preview.evaluation?.recommendation||e.message)):w(e instanceof Error?e.message:`发布失败`),console.error(`发布失败:`,e),D(`error`),setTimeout(()=>D(`idle`),3e3)}},be=async()=>{if(window.confirm(`确定要取消发布该数据源吗？
取消发布后当前数据将暂停对外公开访问并退回治理状态，您可以继续修改元数据并重新发布。是否继续？`)){w(``),D(`unpublishing`);try{let t=new URLSearchParams({target_status:`governing`,reason:`取消发布`});await c.put(`/api/admin/data/intake/source/${encodeURIComponent(e.name)}/publication-status?${t}`),D(`idle`),O(`governing`),r()}catch(e){console.error(`取消发布失败:`,e),w(e instanceof Error?e.message:`取消发布失败`),D(`error`),setTimeout(()=>D(`idle`),3e3)}}},Ce=async()=>{if(window.confirm(`将依据当前数据结构重新生成标题、摘要等描述性元数据，并替换这些字段的现有内容。是否继续？`)){le(!0),S(null);try{let t=await c.post(`/api/admin/governance/enrich/${encodeURIComponent(e.name)}`,{},{params:{regenerate:!0},timeout:6e5});r(),p(`metadata`);let n=t.data?.regenerated_fields?.length||0;S({tone:`success`,text:n>0?`元数据已重新生成，共更新 ${n} 个字段。`:`生成已完成，没有可更新的字段。`})}catch(e){console.error(`生成元数据失败:`,e),S({tone:`error`,text:e?.response?.data?.detail||e?.message||`元数据重新生成失败`})}finally{le(!1)}}};(0,F.useEffect)(()=>{d!==`files`||e.driver!==`sql`&&e.type!==`sql`||g||(async()=>{re(!0),ae(null);try{let t=await c.get(`/api/admin/data/assets/${encodeURIComponent(e.path)}/sql-sample`,{params:{_t:Date.now()}});te(t.data)}catch(e){ae(e.response?.data?.detail||e.message||`获取样例数据失败`)}finally{re(!1)}})()},[d,e,g]);let we=String(e.metadata?.[`intake:name`]||e.name||``),j={},Te={},Ee={},M={},N={};if(e.metadata){let t=Object.keys(V);Object.entries(e.metadata).forEach(([e,n])=>{e===`intake`&&n&&typeof n==`object`?j._intake=n:e.startsWith(`intake:`)?j[e]=n:t.includes(e)?Te[e]=n:mt.includes(e)?N[e]=n:e===`file_info`&&n&&typeof n==`object`?Object.assign(N,n):e===`_file_info`?Object.assign(M,n):Ee[e]=n})}return(0,I.jsxs)(`div`,{className:`page-container`,children:[i?(0,I.jsx)(at,{sourceName:e.name,filePath:e.path,metadata:e.metadata||{},onSuccess:()=>{e&&r(),a(!1)},onCancel:()=>a(!1)}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ie,{leftActions:(0,I.jsx)(P,{icon:(0,I.jsx)(C,{size:18}),variant:`secondary`,onClick:t,children:`返回列表`}),stats:[{label:``,value:B(e.metadata?.title)===`-`?e.name:B(e.metadata?.title),icon:(0,I.jsx)(f,{size:18})}],rightActions:(0,I.jsxs)(I.Fragment,{children:[d===`metadata`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P,{icon:o===`yaml`?(0,I.jsx)(ue,{size:18}):(0,I.jsx)(A,{size:18}),variant:`secondary`,onClick:()=>s(o===`yaml`?`visual`:`yaml`),title:o===`yaml`?`切换到结构化视图`:`切换到 YAML 视图`,children:o===`yaml`?`结构化`:`YAML`}),(0,I.jsx)(P,{icon:(0,I.jsx)(Oe,{size:18}),variant:`secondary`,onClick:()=>a(!0),children:`编辑`})]}),(0,I.jsx)(P,{icon:(0,I.jsx)(de,{size:18}),variant:`secondary`,onClick:()=>n(e.path),children:`下载`}),d===`governance`&&(0,I.jsx)(P,{icon:(0,I.jsx)(ee,{size:18}),variant:`secondary`,onClick:()=>{we&&$e.enqueue(we)},title:`重新检查当前数据和元数据`,children:`重新检查`}),ve!==`published`&&(0,I.jsx)(P,{icon:(0,I.jsx)(se,{size:18}),variant:`secondary`,onClick:Ce,disabled:b,title:`依据当前数据重新生成标题、摘要等描述性元数据`,children:b?`重新生成中...`:`重新生成元数据`}),x&&(0,I.jsx)(`span`,{role:x.tone===`error`?`alert`:`status`,style:{color:x.tone===`error`?`var(--admin-danger)`:`var(--admin-success)`,fontSize:`0.78rem`},children:x.text}),fe&&(0,I.jsxs)(`span`,{role:`alert`,style:{color:`#b91c1c`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.82rem`},children:[(0,I.jsx)(`span`,{children:fe}),ge&&(0,I.jsx)(`button`,{type:`button`,onClick:()=>_e({...ge}),style:{background:`none`,border:`none`,color:`#2563eb`,cursor:`pointer`,fontSize:`0.82rem`,textDecoration:`underline`,padding:0,fontWeight:500},children:`查看详情`})]}),ve===`published`?(0,I.jsx)(P,{icon:E===`unpublishing`?(0,I.jsx)(v,{size:18,style:{animation:`spin 1s linear infinite`}}):(0,I.jsx)(k,{size:18}),variant:`secondary`,onClick:be,disabled:E===`unpublishing`,title:`取消当前发布状态，退回治理中以修改元数据并准备重新发布`,style:{color:`var(--admin-warning)`,borderColor:`var(--admin-warning)`},children:E===`unpublishing`?`取消中...`:`取消发布 / 创建新版本`}):(0,I.jsx)(P,{icon:E===`publishing`?(0,I.jsx)(v,{size:18,style:{animation:`spin 1s linear infinite`}}):E===`done`?(0,I.jsx)(De,{size:18}):E===`error`?(0,I.jsx)(_,{size:18}):(0,I.jsx)(xe,{size:18}),variant:`primary`,onClick:ye,disabled:E===`publishing`,title:`核对当前版本并发布`,children:E===`publishing`?`发布中...`:E===`done`?`已发布`:E===`error`?`发布失败`:`核对并发布`}),(0,I.jsx)(P,{icon:(0,I.jsx)(Se,{size:18}),variant:l?`primary`:`secondary`,onClick:()=>u(!l),children:`AI 分析`})]})}),(0,I.jsxs)(`div`,{className:`detail-tabs-container`,children:[(0,I.jsxs)(`button`,{className:`detail-tab ${d===`files`?`active`:``}`,onClick:()=>p(`files`),children:[(0,I.jsx)(me,{size:16}),` 数据概览`]}),(0,I.jsxs)(`button`,{className:`detail-tab ${d===`governance`?`active`:``}`,onClick:()=>p(`governance`),children:[(0,I.jsx)(T,{size:16}),` 待处理问题`]}),(0,I.jsxs)(`button`,{className:`detail-tab ${d===`metadata`?`active`:``}`,onClick:()=>p(`metadata`),children:[(0,I.jsx)(f,{size:16}),` 元数据与结构`]})]}),(0,I.jsx)(`div`,{style:{margin:`0 1rem 1rem`,padding:`10px 14px`,borderRadius:10,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`},children:ve===`published`?`当前版本已发布。创建新版本后，数据会暂时停止公开访问，重新发布后恢复。`:`处理阻断问题并保存修改；达到发布条件后，点击“核对并发布”完成最终审定。`}),(0,I.jsxs)(`div`,{className:`detail-with-sidebar ${l?`sidebar-open`:``}`,children:[(0,I.jsxs)(`div`,{className:`metadata-detail-view`,children:[d===`metadata`&&(o===`yaml`?(0,I.jsxs)(`div`,{className:`metadata-section card`,style:{padding:0,overflow:`hidden`},children:[(0,I.jsx)(`div`,{style:{padding:`1rem 1.5rem`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,I.jsxs)(`h2`,{className:`section-title`,style:{margin:0,fontSize:`0.9rem`,color:`var(--cg-text-muted)`},children:[(0,I.jsx)(f,{size:16,style:{marginRight:`0.5rem`}}),`RAW METADATA (YAML)`]})}),(0,I.jsx)(`div`,{style:{maxHeight:`calc(100vh - 220px)`,overflow:`auto`},children:(0,I.jsx)(nt,{language:`yaml`,style:rt,customStyle:{margin:0,padding:`1.5rem`,fontSize:`0.875rem`,lineHeight:`1.6`,background:`#1e1e1e`,borderRadius:0},showLineNumbers:!0,lineNumberStyle:{color:`#6a737d`,paddingRight:`1em`,borderRight:`1px solid #30363d`,marginRight:`1em`,minWidth:`2em`,textAlign:`right`},children:e.raw_yaml||ke.dump(e.metadata||{},{indent:2,lineWidth:120,noRefs:!0,sortKeys:!1})})})]}):(0,I.jsxs)(I.Fragment,{children:[(j._intake||Object.keys(j).some(e=>e!==`_intake`)||Object.keys(N).length>0||Object.keys(M).length>0)&&(0,I.jsxs)(`div`,{className:`metadata-section card intake-hierarchy`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(pe,{size:20}),`Intake 元数据`,(0,I.jsx)(`span`,{className:`section-subtitle`,children:`Intake Metadata`})]}),e.metadata?.duplicate_of&&(0,I.jsxs)(`div`,{className:`duplicate-alert-banner`,children:[(0,I.jsx)(_,{size:18}),(0,I.jsxs)(`div`,{className:`duplicate-alert-content`,children:[(0,I.jsx)(`strong`,{children:`智库提醒：检测到内容冲突`}),(0,I.jsxs)(`p`,{children:[`当前文件的物理内容（SH256 指纹）与已登记的数据源`,(0,I.jsx)(`code`,{style:{background:`rgba(0,0,0,0.1)`,padding:`0 4px`,borderRadius:`3px`},children:e.metadata.duplicate_of}),`完全一致。建议您直接使用现有记录，或删除多余的物理副本。`]})]})]}),(z(j[`intake:name`])||z(j._intake?.driver??j[`intake:driver`])||z(j._intake?.args??j[`intake:args`]))&&(0,I.jsxs)(`div`,{className:`metadata-subsection`,"data-path":`intake`,children:[(0,I.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,I.jsx)(he,{size:16}),(0,I.jsx)(`span`,{className:`metadata-path`,children:`intake`}),(0,I.jsx)(`span`,{className:`metadata-path-desc`,children:`数据源与驱动`})]}),(0,I.jsxs)(`div`,{className:`metadata-grid`,children:[z(j[`intake:name`])&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`数据源名称`,(0,I.jsx)(`span`,{className:`field-key`,children:`intake.name / intake:name`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(j[`intake:name`])})]}),z(j._intake?.driver??j[`intake:driver`])&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`驱动`,(0,I.jsx)(`span`,{className:`field-key`,children:`intake.driver`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(j._intake?.driver??j[`intake:driver`])})]}),z(j._intake?.args??j[`intake:args`])&&(0,I.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`参数`,(0,I.jsx)(`span`,{className:`field-key`,children:`intake.args`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(j._intake?.args??j[`intake:args`])})]})]})]}),(()=>{let t={file_name:N.file_name??M.file_name,file_extension:N.file_extension??M.file_extension,relative_path:N.relative_path??M.relative_path,file_size_bytes:N.file_size_bytes??M.file_size_bytes,created_time:N.created_time??M.created_time,modified_time:N.modified_time??M.modified_time,accessed_time:N.accessed_time??M.accessed_time,category:N.category??M.category,category_name:N.category_name??M.category_name};return z(t.file_name??e.name)||z(t.file_extension??e.type)||z(t.relative_path??e.path)||t.file_size_bytes!=null||t.created_time!=null||t.modified_time!=null||t.accessed_time!=null||z(t.category_name??t.category??e.theme)?(0,I.jsxs)(`div`,{className:`metadata-subsection metadata-subsection-nested`,"data-path":`metadata`,children:[(0,I.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,I.jsx)(oe,{size:16}),(0,I.jsx)(`span`,{className:`metadata-path`,children:`metadata`}),(0,I.jsx)(`span`,{className:`metadata-path-desc`,children:`文件信息（已平铺到 metadata 顶层，不再使用 file_info）`})]}),(0,I.jsxs)(`div`,{className:`metadata-grid`,children:[(t.file_name??e.name)!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`文件名`,(0,I.jsx)(`span`,{className:`field-key`,children:`file_name`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t.file_name??e.name)})]}),(t.file_extension??e.type)!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`文件扩展名`,(0,I.jsx)(`span`,{className:`field-key`,children:`file_extension`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t.file_extension??e.type)})]}),(t.relative_path??e.path)!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`相对路径`,(0,I.jsx)(`span`,{className:`field-key`,children:`relative_path`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t.relative_path??e.path)})]}),(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`文件大小`,(0,I.jsx)(`span`,{className:`field-key`,children:`file_size_bytes`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:(t=>t==null?e.size_formatted??`-`:`${(Number(t)/1024).toFixed(2)} KB (${t} 字节)`)(t.file_size_bytes)})]}),t.created_time!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`创建时间`,(0,I.jsx)(`span`,{className:`field-key`,children:`created_time`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:pt(t.created_time)})]}),t.modified_time!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`修改时间`,(0,I.jsx)(`span`,{className:`field-key`,children:`modified_time`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:pt(t.modified_time)})]}),t.accessed_time!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`访问时间`,(0,I.jsx)(`span`,{className:`field-key`,children:`accessed_time`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:pt(t.accessed_time)})]}),(t.category_name??t.category??e.theme)!=null&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`数据分类`,(0,I.jsx)(`span`,{className:`field-key`,children:`category / category_name`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t.category_name??t.category??e.theme)})]})]})]}):null})(),(()=>{let e=Object.entries(j).filter(([e,t])=>e!==`_intake`&&![`intake:name`,`intake:driver`,`intake:args`].includes(e)&&z(t));return e.length===0?null:(0,I.jsxs)(`div`,{className:`metadata-subsection metadata-subsection-other`,"data-path":`intake:*`,children:[(0,I.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,I.jsx)(`span`,{className:`metadata-path`,children:`intake:*`}),(0,I.jsx)(`span`,{className:`metadata-path-desc`,children:`其它数据源参数`})]}),(0,I.jsx)(`div`,{className:`metadata-grid`,children:e.map(([e,t])=>(0,I.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[e.replace(`intake:`,``),(0,I.jsx)(`span`,{className:`field-key`,children:e})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t)})]},e))})]})})()]}),Object.values(Te).some(e=>z(e))&&(0,I.jsxs)(`div`,{className:`metadata-section card`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(ce,{size:20}),`基本业务元数据`,(0,I.jsx)(`span`,{className:`section-subtitle`,children:`Basic Context Metadata`})]}),(0,I.jsx)(`div`,{className:`metadata-grid`,children:Object.entries(Te).filter(([e])=>z(Te[e])).map(([e,t])=>(0,I.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[V[e]||e,(0,I.jsx)(`span`,{className:`field-key`,children:e})]}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t)})]},e))})]}),(z(e.metadata?.academic_narrative)||z(e.metadata?.mqm))&&(0,I.jsxs)(`div`,{className:`metadata-section card smart-enhancement-section`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(se,{size:20,style:{color:`var(--admin-primary)`}}),`智能增强信息`,(0,I.jsx)(`span`,{className:`section-subtitle`,children:`AI Enhanced Insights`})]}),z(e.metadata?.mqm)&&(0,I.jsxs)(`div`,{className:`mqm-container`,style:{marginBottom:`1.5rem`,padding:`1.25rem`,background:`var(--cg-bg)`,borderRadius:`12px`,border:`1px solid var(--cg-border)`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginBottom:`1rem`},children:[(0,I.jsx)(`div`,{style:{padding:`6px`,background:`var(--admin-primary-light)`,borderRadius:`8px`},children:(0,I.jsx)(T,{size:20,style:{color:`var(--admin-primary)`}})}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`span`,{style:{fontWeight:600,fontSize:`1rem`,color:`var(--cg-text)`},children:[`元数据质量评分 (MQM): `,(e.metadata?.mqm).score||`-`]}),(0,I.jsxs)(`span`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginLeft:`0.75rem`},children:[`最后评估时间: `,new Date((e.metadata?.mqm).evaluated_at).toLocaleDateString()]})]})]}),(e.metadata?.mqm).narrative&&(0,I.jsx)(`div`,{className:`narrative-content`,style:{lineHeight:1.6,color:`var(--cg-text)`,fontStyle:`italic`,background:`var(--cg-surface)`,padding:`1.25rem`,borderLeft:`4px solid var(--admin-primary)`,borderRadius:`4px`},children:(e.metadata?.mqm).narrative})]}),z(e.metadata?.academic_narrative)&&(0,I.jsx)(`div`,{className:`narrative-container`,children:(()=>{let t=e.metadata?.academic_narrative,n=Array.isArray(t)?t.find(e=>e.lang===`zh`)?.value||t[0].value:t;return(0,I.jsx)(`div`,{className:`narrative-content`,style:{lineHeight:1.6,color:`var(--cg-text)`,fontStyle:`italic`,background:`#fdfcfe`,padding:`1.25rem`,borderLeft:`4px solid var(--admin-primary)`,borderRadius:`4px`},children:n})})()})]}),Object.entries(Ee).some(([e,t])=>!e.startsWith(`_`)&&![`academic_narrative`,`mqm`].includes(e)&&z(t))&&(0,I.jsxs)(`div`,{className:`metadata-section card`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(y,{size:20}),`拓展/底层元数据`]}),(0,I.jsx)(`div`,{className:`metadata-grid`,children:Object.entries(Ee).filter(([e])=>!e.startsWith(`_`)&&![`academic_narrative`,`mqm`].includes(e)&&z(Ee[e])).map(([e,t])=>(0,I.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,I.jsx)(`span`,{className:`field-label`,children:e}),(0,I.jsx)(`span`,{className:`field-value`,children:B(t)})]},e))})]}),(0,I.jsx)(H,{sourceName:e.name})]})),d===`governance`&&(0,I.jsxs)(`div`,{className:`metadata-section card`,style:{padding:`1rem`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,background:`var(--cg-bg)`,padding:`4px`,borderRadius:`8px`,border:`1px solid var(--cg-border)`},children:[(0,I.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:m===`action`?`var(--admin-primary-light)`:`transparent`,color:m===`action`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>h(`action`),children:`必须修复`}),(0,I.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:m===`panorama`?`var(--admin-primary-light)`:`transparent`,color:m===`panorama`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>h(`panorama`),children:`全部检查`}),(0,I.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:m===`report`?`var(--admin-primary-light)`:`transparent`,color:m===`report`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>h(`report`),children:`质量报告`})]}),we?(0,I.jsx)(dt,{sourceName:we,contentViewMode:m,onActionItemCount:e=>console.log(`Action items:`,e)}):(0,I.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`无法获取有效的 Intake 数据源名称`})]}),d===`files`&&(0,I.jsxs)(I.Fragment,{children:[e.metadata?.duplicate_of&&(0,I.jsxs)(`div`,{className:`duplicate-alert-banner`,style:{marginBottom:`1.5rem`},children:[(0,I.jsx)(_,{size:18}),(0,I.jsxs)(`div`,{className:`duplicate-alert-content`,children:[(0,I.jsx)(`strong`,{children:`智库提醒：检测到内容冲突`}),(0,I.jsxs)(`p`,{children:[`当前文件的物理内容（SH256 指纹）与已登记的数据源`,(0,I.jsx)(`code`,{style:{background:`rgba(0,0,0,0.1)`,padding:`0 4px`,borderRadius:`3px`},children:e.metadata.duplicate_of}),`完全一致。建议您直接使用现有记录，或删除多余的物理副本。`]})]})]}),e.driver===`sql`||e.type===`sql`?(()=>{let t=e.args?.uri||e.args?.urlpath||(e.path?.startsWith(`sql://`)?e.path:``)||``,n=e.args?.table||(t?t.replace(/^sql:\/\//,``):e.path?.startsWith(`sql://`)?e.path.replace(/^sql:\/\//,``):``),r=e.args?.sql_expr||g?.sql_expr||(n?`SELECT * FROM ${n}`:``),i=!e.args?.sql_expr,a=e.args?.index||e.args?.index_col||``;return(0,I.jsxs)(`div`,{className:`metadata-section card`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(ce,{size:20}),`SQL 虚拟数据源配置`]}),(0,I.jsxs)(`div`,{className:`metadata-grid`,children:[(0,I.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`连接 URI `,(0,I.jsx)(`span`,{className:`field-key`,children:`uri / urlpath`})]}),(0,I.jsx)(`span`,{className:`field-value`,style:{wordBreak:`break-all`},children:t||`-`})]}),n&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`目标表名 `,(0,I.jsx)(`span`,{className:`field-key`,children:`table`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:n})]}),r&&(0,I.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`SQL 表达式 `,(0,I.jsx)(`span`,{className:`field-key`,children:`sql_expr`}),i&&(0,I.jsx)(`span`,{style:{marginLeft:`8px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,fontWeight:`normal`},children:`(默认全表查询)`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:(0,I.jsx)(`pre`,{style:{background:`var(--cg-bg)`,border:`1px solid var(--cg-border-light)`,padding:`12px`,borderRadius:`6px`,overflowX:`auto`,margin:`4px 0 0 0`,whiteSpace:`pre-wrap`},children:r})})]}),a&&(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`索引列 `,(0,I.jsx)(`span`,{className:`field-key`,children:`index`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:a})]}),(0,I.jsxs)(`div`,{className:`metadata-field`,children:[(0,I.jsxs)(`span`,{className:`field-label`,children:[`数据总量 `,(0,I.jsx)(`span`,{className:`field-key`,children:`row_count`})]}),(0,I.jsx)(`span`,{className:`field-value`,children:g?.total??e.metadata?.row_count??e.metadata?.stats?.global?.row_count??`-`})]})]}),(0,I.jsxs)(`div`,{style:{marginTop:`2rem`},children:[(0,I.jsxs)(`h3`,{style:{fontSize:`1rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`1rem`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,I.jsx)(ce,{size:18}),`样例数据`]}),ne?(0,I.jsxs)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`},children:[(0,I.jsx)(ee,{size:24,className:`spin`,style:{margin:`0 auto 1rem`,display:`block`,opacity:.5}}),`正在获取样例数据...`]}):ie?(0,I.jsxs)(`div`,{style:{padding:`1.5rem`,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,borderRadius:`8px`,border:`1px solid var(--admin-danger)`,display:`flex`,alignItems:`flex-start`,gap:`0.75rem`},children:[(0,I.jsx)(_,{size:20,style:{flexShrink:0,marginTop:`2px`}}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.25rem`},children:`样例数据获取失败`}),(0,I.jsx)(`div`,{style:{fontSize:`0.875rem`},children:ie})]})]}):g&&g.data.length>0?(0,I.jsx)(`div`,{style:{overflowX:`auto`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,background:`var(--cg-surface)`},children:(0,I.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,I.jsx)(`thead`,{children:(0,I.jsx)(`tr`,{children:g.columns.map(e=>(0,I.jsx)(`th`,{style:{padding:`0.75rem 1rem`,textAlign:`left`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,fontWeight:600,color:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:e},e))})}),(0,I.jsx)(`tbody`,{children:g.data.map((e,t)=>(0,I.jsx)(`tr`,{style:{borderBottom:`1px solid var(--cg-border-light)`},children:g.columns.map(t=>(0,I.jsx)(`td`,{style:{padding:`0.75rem 1rem`,color:`var(--cg-text)`,whiteSpace:`nowrap`,maxWidth:`300px`,overflow:`hidden`,textOverflow:`ellipsis`},children:e[t]===null?(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontStyle:`italic`},children:`null`}):String(e[t])},t))},t))})]})}):(0,I.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`暂无样例数据`})]})]})})():e.files&&e.files.length>0?(0,I.jsxs)(`div`,{className:`metadata-section card`,children:[(0,I.jsxs)(`h2`,{className:`section-title`,children:[(0,I.jsx)(me,{size:20}),`文件列表 (`,e.file_count||e.files.length,`)`]}),(0,I.jsxs)(`div`,{className:`file-list-detail`,children:[e.files.map((e,t)=>(0,I.jsxs)(`div`,{className:`file-item-detail`,children:[(0,I.jsx)(oe,{size:16}),(0,I.jsx)(`span`,{className:`file-name`,children:e.name}),(0,I.jsx)(`span`,{className:`file-type`,children:e.type}),(0,I.jsx)(`span`,{className:`file-size`,children:e.size_formatted})]},t)),e.file_count>e.files.length&&(0,I.jsxs)(`div`,{className:`file-item-more`,children:[`还有 `,e.file_count-e.files.length,` 个文件未显示`]})]})]}):(0,I.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`该数据源未包含物理切片文件`})]})]}),l&&(0,I.jsx)(`div`,{className:`ai-sidebar-container`,children:(0,I.jsx)(Fe,{sourceName:we,onClose:()=>u(!1)})})]}),(0,I.jsx)(`style`,{children:`
        /* Tabs */
        .detail-tabs-container {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          border-bottom: 1px solid var(--cg-border);
        }
        .detail-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--cg-text-muted);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .detail-tab:hover {
          color: var(--cg-text);
        }
        .detail-tab.active {
          color: var(--admin-primary);
          border-bottom-color: var(--admin-primary);
        }

        /* Two-column layout with sidebar */
        .detail-with-sidebar {
          display: flex;
          gap: 0;
          margin-top: 1.5rem;
          align-items: flex-start;
        }
        .detail-with-sidebar .metadata-detail-view {
          flex: 1;
          min-width: 0;
          transition: flex 0.3s ease;
        }
        .detail-with-sidebar.sidebar-open .metadata-detail-view {
          flex: 1 1 60%;
        }
        .ai-sidebar-container {
          width: 380px;
          flex-shrink: 0;
          position: sticky;
          top: 80px;
          animation: slideInRight 0.3s ease-out;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 1200px) {
          .ai-sidebar-container {
            width: 320px;
          }
        }
        @media (max-width: 900px) {
          .detail-with-sidebar {
            flex-direction: column;
          }
          .ai-sidebar-container {
            width: 100%;
            position: relative;
            top: 0;
          }
        }

        .metadata-detail-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metadata-section {
          padding: 1.5rem;
        }

        .intake-hierarchy .metadata-subsection {
          margin-top: 1.25rem;
          padding: 1rem 1.25rem;
          background: var(--cg-bg);
          border-radius: 8px;
          border-left: 3px solid var(--cg-border);
        }

        .intake-hierarchy .metadata-subsection:first-of-type {
          margin-top: 0;
        }

        .intake-hierarchy .metadata-subsection + .metadata-subsection {
          margin-top: 1rem;
        }

        .intake-hierarchy .metadata-subsection-nested {
          margin-left: 1rem;
          border-left-color: var(--cg-text-muted);
          background: var(--cg-bg);
        }

        .intake-hierarchy .metadata-subsection-other {
          border-left-color: var(--cg-text-muted);
        }

        .metadata-subsection-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0 0 0.75rem 0;
        }

        .metadata-subsection-title .metadata-path {
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
          background: rgba(255,255,255,0.8);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .metadata-subsection-title .metadata-path-desc {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--cg-text-muted);
          margin-left: 0.25rem;
        }

        .intake-hierarchy .metadata-subsection .metadata-grid {
          gap: 1rem;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0 0 1.5rem 0;
        }

        .section-subtitle {
          margin-left: auto;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--cg-text-muted);
          font-style: italic;
        }

        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .metadata-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metadata-field.full-width {
          grid-column: 1 / -1;
        }

        .field-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0.35rem;
        }

        .field-key {
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--cg-text-muted);
          text-transform: none;
          letter-spacing: 0;
          font-family: 'Monaco', 'Courier New', monospace;
        }

        .field-label .field-key::before {
          content: '· ';
          color: var(--cg-text-muted);
        }

        .field-value {
          font-size: 0.9375rem;
          color: var(--cg-text);
          word-break: break-all;
          white-space: pre-wrap;
          background: var(--cg-bg);
          padding: 0.75rem;
          border-radius: 4px;
          border: 1px solid var(--cg-border);
        }

        .file-list-detail {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .file-item-detail {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--cg-bg);
          border-radius: 6px;
          border: 1px solid var(--cg-border);
        }

        .file-name {
          flex: 1;
          font-weight: 500;
          color: var(--cg-text);
        }

        .file-type {
          padding: 0.25rem 0.5rem;
          background: var(--admin-primary-light);
        }

        .gov-btn {
          background: var(--cg-surface);
          border: 1px solid var(--cg-text-muted);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .gov-btn:hover {
          border-color: var(--admin-primary);
          color: var(--admin-primary);
        }
        .gov-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .governance-dashboard {
          margin-bottom: 0.5rem;
        }
        .governance-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .governance-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .governance-dashboard.highlight-flash {
          animation: flashHighlight 0.5s ease-out 2;
        }
        @keyframes flashHighlight {
          0%, 100% { background: transparent; }
          50% { background: rgba(59, 130, 246, 0.1); }
        }
        `})]}),(0,I.jsx)(ot,{isOpen:!!ge,onClose:()=>_e(null),preview:ge,onGoToGovernance:()=>p(`governance`),onGoToEditMetadata:()=>a(!0),onRegenerateMetadata:Ce})]})}function gt({searchQuery:e,category:t,fileType:n}){return{q:e,category:t,file_type:n,page:1,limit:1e4}}function _t({currentPage:e,pageSize:t,governanceStatusFilter:n,governanceReviewFilter:r,governancePublishableFilter:i,publishingMode:a,publishingFilter:o,isGovernanceDriven:s,governanceKeyword:c,shouldUseGovernanceScopeArrays:l,governanceQuerySourceNames:u,governanceQueryFilePaths:d,isSearchMode:f,selectedCategory:p,fileType:m,sortField:h,sortOrder:g,isGovernanceSort:_,mapSortField:v}){return{page:s?e:1,page_size:s?t:Math.max(u.length,1),status:n===`all`?void 0:n,review_status:r===`all`?void 0:r,publishable:i===`all`?void 0:i===`true`,published:a&&o?o===`published`:void 0,keyword:s&&c?c:void 0,source_names:l?u:void 0,file_paths:l?d:void 0,driver:!f&&p?p:void 0,file_type:f?m:void 0,sort_by:s?v(h):void 0,sort_order:_?g:`desc`}}var vt={csv:{label:`CSV 表格`,icon:`📊`},excel:{label:`Excel 工作簿`,icon:`📗`},ods:{label:`ODS 表格`,icon:`📋`},json:{label:`JSON 数据`,icon:`🔤`},nested_json:{label:`嵌套 JSON`,icon:`🔗`},netcdf4:{label:`NetCDF 科学网格`,icon:`🌐`},rasterio:{label:`GeoTIFF 栅格影像`,icon:`🛰️`},geopandasfile:{label:`GIS 矢量地理`,icon:`🗺️`},sql:{label:`SQL 关系数据库`,icon:`🗄️`},image:{label:`教学插图/图片`,icon:`🖼️`},video:{label:`示范视频`,icon:`🎬`},audio:{label:`教学音频`,icon:`🎵`},document:{label:`学术/技术文档 (PDF)`,icon:`📄`},textfiles:{label:`纯文本文件`,icon:`📝`},wmo_normals:{label:`WMO 气候标准值`,icon:`🌡️`},metadata_dict:{label:`元数据字典`,icon:`📋`},dictionary:{label:`配置字典`,icon:`📖`},annotation:{label:`标注数据`,icon:`🏷️`}};function U(){let e=r(),t=i(),[a]=n(),[o,s]=(0,F.useState)(null),[l,u]=(0,F.useState)(null),[p,ee]=(0,F.useState)(()=>$e.getStatuses()),y=(0,F.useRef)(()=>{});(0,F.useEffect)(()=>{$e.setRefetchCallback(()=>{y.current&&y.current()});let e=$e.subscribe(e=>{ee(e)});return()=>{e(),$e.setRefetchCallback(()=>{})}},[]);let oe=(0,F.useCallback)(async e=>{$e.enqueue(e)},[]),ue=(0,F.useCallback)(e=>{let t=Pe(),n=t===`zh`?`en`:`zh`,r=Ne(e,t),i=Ne(e,n);return!i||i===r?null:i},[]),[x,de]=(0,F.useState)({}),[S,pe]=(0,F.useState)({}),[C,w]=(0,F.useState)({}),[T,he]=(0,F.useState)(null),[ve,O]=(0,F.useState)(!1),[A,xe]=(0,F.useState)(a.get(`q`)||``),[Se,j]=(0,F.useState)(a.get(`q`)||``),[Ee]=(0,F.useState)({});(0,F.useEffect)(()=>{let e=setTimeout(()=>{j(A)},300);return()=>clearTimeout(e)},[A]);let Oe=!!Se.trim(),ke=`right`,[Ae,je]=(0,F.useState)(()=>{if(typeof window>`u`)return!0;let e=window.localStorage.getItem(`admin-data-sidebar-visible`);return e===null||e===`true`}),[Me,Fe]=(0,F.useState)(null),[ze,Ve]=(0,F.useState)(!1),[He,Ke]=(0,F.useState)(new Set),[Je,et]=(0,F.useState)(!1),[tt,nt]=(0,F.useState)(null),[rt,at]=(0,F.useState)(!1),[ot,st]=(0,F.useState)(null),[L,ct]=(0,F.useState)(`scientific`),[lt,ut]=(0,F.useState)(!1),[dt,R]=(0,F.useState)(`all`),[ft,pt]=(0,F.useState)(`all`),[z,B]=(0,F.useState)(`all`),[V,mt]=(0,F.useState)(`all`),[H,U]=(0,F.useState)(null),[W,G]=(0,F.useState)(`desc`),[yt,K]=(0,F.useState)(null),[St,Ct]=(0,F.useState)(`bottom`),wt=(0,F.useRef)(null),[Tt,Et]=(0,F.useState)(null),[Dt,Ot]=(0,F.useState)(null),[kt,At]=(0,F.useState)([]),[jt,q]=(0,F.useState)(1);(0,F.useEffect)(()=>{let e=a.get(`q`);e!=null&&(xe(e),j(e))},[a]);let Mt=(e,t)=>{if(t.stopPropagation(),yt===e){K(null);return}let n=t.currentTarget.getBoundingClientRect(),r=wt.current?.getBoundingClientRect(),i=r?r.bottom:window.innerHeight,a=r?r.top:0,o=i-n.bottom,s=n.top-a;Ct(o<220&&s>o?`top`:`bottom`),K(e)};(0,F.useEffect)(()=>{let e=()=>K(null);return document.addEventListener(`click`,e),window.addEventListener(`resize`,e),()=>{document.removeEventListener(`click`,e),window.removeEventListener(`resize`,e)}},[]);let{data:Nt,isLoading:Pt}=We(L),{data:J,isLoading:Ft,error:It,refetch:Y}=Xe({page:jt,limit:20,q:Se.trim(),scope:L,driver:ft===`all`?o||``:ft,theme:z===`all`?``:z,publication:dt===`all`?Je&&tt?tt===`published`?`published`:`draft`:``:dt,days:{all:0,"7d":7,"30d":30,"90d":90,"1y":365}[V],sort_by:H||`modified`,sort_order:W});(0,F.useEffect)(()=>{typeof window<`u`&&window.localStorage.removeItem(`admin-data-sidebar-position`)},[]),(0,F.useEffect)(()=>{y.current=Y},[Y]);let{data:Lt}=Qe(),Rt=Ge(),zt=(0,F.useCallback)(async e=>{if(window.confirm(`将依据当前数据重新生成标题、摘要等描述性元数据，并替换这些字段的现有内容。是否继续？`)){pe(t=>({...t,[e]:`running`}));try{await c.post(`/api/admin/governance/enrich/${encodeURIComponent(e)}`,{},{params:{regenerate:!0},timeout:6e5}),pe(t=>({...t,[e]:`done`})),await Promise.all([Y(),t.invalidateQueries({queryKey:[`governanceSourceOverviews`]})]),window.setTimeout(()=>{pe(t=>{let n={...t};return delete n[e],n})},3e3)}catch(t){console.error(`重新生成元数据失败 [${e}]`,t),pe(t=>({...t,[e]:`error`}))}}},[t,Y]),Bt=(0,F.useCallback)(async e=>{if(window.confirm(`确定要取消发布数据源「${e}」吗？\n取消发布后该数据将进入治理状态（暂停对外开放），您可以继续修改元数据并重新发布。`)){w(t=>({...t,[e]:`unpublishing`}));try{let n=new URLSearchParams({target_status:`governing`,reason:`取消发布`});await c.put(`/api/admin/data/intake/source/${encodeURIComponent(e)}/publication-status?${n}`),w(t=>({...t,[e]:`done`})),await Promise.all([Y(),t.invalidateQueries({queryKey:[`governanceSourceOverviews`]}),t.invalidateQueries({queryKey:[`publishingStats`]})]),window.setTimeout(()=>{w(t=>{let n={...t};return delete n[e],n})},3e3)}catch(t){console.error(`取消发布失败 [${e}]`,t),w(t=>({...t,[e]:`error`})),alert(t instanceof Error?t.message:`取消发布失败，请稍后重试`),window.setTimeout(()=>{w(t=>{let n={...t};return delete n[e],n})},3e3)}}},[t,Y]),Vt=(0,F.useMemo)(()=>gt({searchQuery:A,category:Ee.category,fileType:Ee.file_type}),[Ee.category,Ee.file_type,A]),Ht=Ft,[Ut,Wt]=(0,F.useState)(`idle`),Gt=(0,F.useRef)(!1),{data:Kt,refetch:qt}=Ye(),Jt=Ue();(0,F.useEffect)(()=>{if(Ut!==`scanning`)return;let e=setInterval(()=>qt(),2e3);return()=>clearInterval(e)},[Ut,qt]),(0,F.useEffect)(()=>{Ut===`scanning`&&Kt&&(Kt.is_scanning&&(Gt.current=!0),Gt.current&&!Kt.is_scanning&&(Gt.current=!1,setTimeout(()=>Wt(`deduping`),0),Jt.mutate(void 0,{onSuccess:e=>{Fe(e),Ve(!0),e.groups&&Ke(new Set(e.groups.map(e=>e.sha256))),Y(),Wt(`idle`)},onError:()=>Wt(`idle`)})))},[Ut,Kt,Jt,Y]);let Yt=e=>{Ke(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},Xt=e=>e?e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`:`-`,Zt=e=>e===`PASSED`?`通过`:e===`WARNING`?`警告`:`未通过`,Qt=e=>e===`PASSED`?{background:`var(--admin-success-light)`,color:`var(--admin-success)`}:e===`WARNING`?{background:`var(--admin-warning-light)`,color:`var(--admin-warning)`}:{background:`var(--admin-danger-light)`,color:`var(--admin-danger)`},$t=e=>e?`建议发布`:`暂不发布`;(0,F.useCallback)(e=>e===`governance_status`?`治理状态`:e===`publish_recommend`?`发布建议`:e===`governance_score`?`治理评分`:e===`governance_updated_at`?`治理更新时间`:null,[]);let en=e=>{let t=`/api/admin/data/download/${e}`;window.open(t,`_blank`)},tn=e=>{switch(e){case`data`:return(0,I.jsx)(f,{className:`icon`,size:18});case`dataset`:return(0,I.jsx)(ce,{className:`icon`,size:18});case`image`:return(0,I.jsx)(fe,{className:`icon`,size:18});default:return(0,I.jsx)(me,{className:`icon`,size:18})}},nn=(0,F.useCallback)(e=>{ct(`scientific`),s(null);let n=e||``;xe(n),j(n),R(`all`),pt(`all`),B(`all`),mt(`all`),U(`modified`),G(`desc`),q(1),t.invalidateQueries({queryKey:[`dataFiles`]}),O(!1)},[t]),rn=(0,F.useCallback)(()=>{je(!1),typeof window<`u`&&window.localStorage.setItem(`admin-data-sidebar-visible`,`false`)},[]),an=(0,F.useCallback)(()=>{at(!1),et(!1),je(!0),typeof window<`u`&&window.localStorage.setItem(`admin-data-sidebar-visible`,`true`)},[]),on=(0,F.useCallback)(()=>{Y()},[Y]),sn=(0,F.useCallback)(()=>{H?G(e=>e===`asc`?`desc`:`asc`):(U(`name`),G(`asc`))},[H]),cn=(0,F.useCallback)(e=>{q(1),H===e?G(e=>e===`asc`?`desc`:`asc`):(U(e),G(`asc`))},[H]);(0,F.useCallback)(e=>{q(1),e===`none`?(U(null),G(`asc`)):(U(e),G(e===`governance_score`||e===`governance_updated_at`?`desc`:`asc`))},[]);let ln=(0,F.useCallback)(e=>e===`governance_status`?`overall_status`:e===`publish_recommend`?`recommend_publish`:e===`governance_score`?`score`:`updated_at`,[]),un=(0,F.useCallback)((e,t)=>{let n=e;return n?.response?.data?.detail||n?.response?.data?.message||n?.message||t},[]),dn=(0,F.useCallback)(async e=>{de(t=>({...t,[e]:`auditing`}));try{let n=await t.fetchQuery({queryKey:[`governanceSourceOverview`,e],queryFn:()=>qe(e),staleTime:3e4});de(t=>({...t,[e]:`done`})),he(n),setTimeout(()=>{de(t=>({...t,[e]:`idle`}))},3e3)}catch(t){let n=un(t,`治理总览加载失败，请重试。`);console.error(`治理总览加载失败:`,t),de(t=>({...t,[e]:`error`})),alert(n),setTimeout(()=>{de(t=>({...t,[e]:`idle`}))},3e3)}},[un,t]),fn=(0,F.useCallback)(e=>{At(t=>t.includes(e)?t:[...t,e])},[]),pn=(0,F.useCallback)(e=>{At(t=>t.filter(t=>t!==e))},[]),mn=(0,F.useCallback)(e=>{t.setQueriesData({queryKey:[`dataFiles`]},t=>{if(!t)return t;let n=t.files.filter(t=>t.name!==e);return n.length===t.files.length?t:{...t,files:n,total:typeof t.total==`number`?Math.max(0,t.total-1):t.total}}),t.setQueryData([`searchDataFiles`,Vt],t=>{if(!t)return t;let n=t.results.filter(t=>t.name!==e);return n.length===t.results.length?t:{...t,results:n,total:typeof t.total==`number`?Math.max(0,t.total-1):t.total}})},[t,Vt]),hn=(0,F.useCallback)(e=>{Et(null),Ot(e),fn(e),Rt.mutate(e,{onSuccess:()=>{Ot(null),u(t=>t?.name===e?null:t),mn(e)},onError:t=>{let n=un(t,`移入回收站失败，请重试。`);console.error(`移入回收站失败:`,n,t),Ot(null),pn(e),alert(n)}})},[Rt,un,fn,mn,pn]),gn=(0,F.useMemo)(()=>(0,I.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`},children:(0,I.jsx)(`button`,{className:`admin-sidebar__toggle`,onClick:rn,title:`关闭数据类型侧边栏`,children:(0,I.jsx)(k,{size:16})})}),[rn]),X={scientific:Number(J?.facets?.scopes?.scientific||0),tutorial:Number(J?.facets?.scopes?.tutorial||0),literature:Number(J?.facets?.scopes?.literature||0),all:Object.values(J?.facets?.scopes||{}).reduce((e,t)=>e+Number(t),0)},_n=J?.facets?.drivers||{},vn=Object.values(_n).reduce((e,t)=>e+Number(t),0),yn=(0,F.useMemo)(()=>{if(!o)return null;let e=(Nt||[]).find(e=>e.key&&String(e.key).toLowerCase()===o.toLowerCase()||e.name&&String(e.name).toLowerCase()===o.toLowerCase());return e?e.name:o},[Nt,o]),bn=Object.entries(J?.facets?.drivers||{}).filter(([e])=>L!==`scientific`||![`image`,`video`,`audio`,`document`].includes(e.toLowerCase())).map(([e,t])=>({driver:e,count:Number(t),label:vt[e]?.label||e,icon:vt[e]?.icon||`📦`})),xn=Object.entries(J?.facets?.themes||{}).map(([e,t])=>({key:e,name:e===`__unclassified__`?`未分类主题`:e,count:Number(t)})),Sn={published:Number(J?.facets?.publication?.published||0),draft:Number(J?.facets?.publication?.draft||0)},Z=(0,F.useMemo)(()=>{let e=0;return A.trim()&&e++,dt!==`all`&&e++,ft!==`all`&&e++,z!==`all`&&e++,V!==`all`&&e++,H!==null&&e++,e},[A,dt,ft,z,V,H]),Cn=(0,F.useCallback)(()=>{xe(``),j(``),R(`all`),pt(`all`),B(`all`),mt(`all`),U(null),G(`desc`),q(1)},[]);(0,F.useEffect)(()=>{s(null),pt(`all`),B(`all`),q(1)},[L]);let wn=(J?.files||[]).filter(e=>!kt.includes(e.name)),Tn=Oe?Ht:Pt||Ft&&!J,En=l?.name??null,Dn=Me?.groups?.length??0,On=Me?.duplicates_found??Dn,{data:kn}=Be(),An=(0,F.useMemo)(()=>kn?{total:kn.total||0,published:kn.published||0,draft:kn.draft||0}:{total:vn,published:Sn.published,draft:Sn.draft},[kn,vn,Sn.published,Sn.draft]),jn=J?.total||0,Q=Math.max(1,Math.ceil(jn/20)),$=jt,Mn=wn,Nn=($-1)*20,Pn=Mn,Fn=(0,F.useMemo)(()=>Pn.map(e=>e.name).filter(Boolean),[Pn]),In=(0,F.useMemo)(()=>Pn.map(e=>e.path).filter(Boolean),[Pn]),Ln=(0,F.useMemo)(()=>_t({currentPage:1,pageSize:Math.max(Fn.length,1),governanceStatusFilter:`all`,governanceReviewFilter:`all`,governancePublishableFilter:`all`,publishingMode:!1,publishingFilter:``,isGovernanceDriven:!1,governanceKeyword:``,shouldUseGovernanceScopeArrays:!0,governanceQuerySourceNames:Fn,governanceQueryFilePaths:In,isSearchMode:!1,selectedCategory:null,fileType:void 0,sortField:null,sortOrder:`desc`,isGovernanceSort:!1,mapSortField:ln}),[In,Fn,ln]),Rn=!rt&&Fn.length>0,{data:zn}=Ze(Ln,{enabled:Rn,staleTime:3e4}),Bn=(0,F.useMemo)(()=>(zn?.items||[]).reduce((e,t)=>(e[t.source_name]=t,e),{}),[zn]);if((0,F.useEffect)(()=>{J&&jt>Q&&setTimeout(()=>q(Q),0)},[jt,Q,J]),(0,F.useEffect)(()=>{setTimeout(()=>q(1),0)},[o,A,tt,L]),l)return(0,I.jsx)(ht,{file:l,onBack:()=>u(null),onDownload:en,onMetadataEdited:()=>{Y(),c.get(`/api/admin/data/metadata/${l.path}`).then(e=>{u(t=>t?{...t,metadata:e.data.metadata,raw_yaml:e.data.raw_yaml,publication_status:e.data.publication_status??t.publication_status}:null)})}});let Vn={border:`1px solid var(--cg-border)`,background:`var(--cg-surface)`,borderRadius:`4px`,padding:`4px 8px`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,minWidth:`28px`,height:`28px`,fontSize:`0.8125rem`,color:`var(--cg-text-muted)`,transition:`all 0.15s`},Hn=rt?(0,I.jsx)(bt,{agentFilter:ot,setAgentFilter:st,position:ke,headerActions:gn,onRefresh:on,onSort:sn}):Je?(0,I.jsx)(Le,{header:{title:`数据发布`,count:An.total,actions:gn},items:[{id:`all`,label:`全部`,icon:(0,I.jsx)(b,{size:18,style:{color:`var(--cg-text-muted)`}}),count:An.total,onClick:()=>nt(null)},{id:`published`,label:`已发布`,icon:(0,I.jsx)(De,{size:18,style:{color:`var(--admin-success)`}}),count:An.published,onClick:()=>nt(`published`)},{id:`not_ready`,label:`未达标`,icon:(0,I.jsx)(_,{size:18,style:{color:`var(--admin-warning)`}}),count:An.draft,onClick:()=>nt(`not_ready`)}],selectedId:tt===null?`all`:tt,onSelect:e=>{nt(e===`all`?null:String(e))},position:ke,resizable:!0,width:280,minWidth:200,maxWidth:500,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:on,onSort:sn}):(0,I.jsx)(Le,{header:{title:`数据类型`,actions:gn},items:[{id:`all`,label:`全部数据`,icon:(0,I.jsx)(`span`,{children:`📁`}),count:L===`scientific`?X.scientific:L===`tutorial`?X.tutorial:L===`literature`?X.literature:Lt?Lt.data_files.count+(Lt.datasets?.count||0)+Lt.images.count:void 0,onClick:()=>s(null)},...(Nt||[]).filter(e=>{let t=String(e.key??e.name).toLowerCase();return L===`scientific`&&[`image`,`video`,`audio`,`document`].includes(t)?!1:L===`all`||(_n[t]??0)>0}).map((e,t)=>{let n=String(e.key??e.name).toLowerCase(),r=L===`all`?e.count:_n[n]??0;return{id:e.key||t,label:e.name,icon:(0,I.jsx)(`span`,{children:e.icon}),count:r,onClick:()=>s(e.key??e.name)}})],selectedId:o===null?`all`:o,onSelect:e=>{s(e===`all`?null:String(e))},position:ke,resizable:!0,width:280,minWidth:200,maxWidth:500,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:on,onSort:sn});return(0,I.jsxs)(`div`,{className:`page-container`,children:[(0,I.jsxs)(`div`,{className:`data-management-layout`,children:[(0,I.jsxs)(`div`,{className:`data-content`,children:[(0,I.jsxs)(`div`,{className:`data-page-toolbar`,children:[(0,I.jsx)(Ie,{shortcuts:{refresh:()=>Y(),upload:()=>O(!0)},leftActions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P,{icon:(0,I.jsx)(le,{size:16}),variant:`primary`,onClick:()=>O(!0),title:`上传或登记一个新的数据源`,children:`添加数据`}),(0,I.jsxs)(`div`,{className:`data-scope-button-group`,role:`tablist`,"aria-label":`数据范围选择`,children:[(0,I.jsxs)(P,{icon:(0,I.jsx)(h,{size:16}),variant:`secondary`,active:L===`scientific`,className:`data-scope-btn ${L===`scientific`?`data-scope-btn--active`:``}`,onClick:()=>{ct(`scientific`),q(1)},title:`科学数据：仅包含科学数据集（观测表格、栅格影像、气象数据库、GIS矢量图层等，与前台科学数据一致）`,children:[(0,I.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[L===`scientific`&&(0,I.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,I.jsxs)(`span`,{children:[`科学数据`,X.scientific>0?` (${X.scientific})`:``]})]}),L===`scientific`&&(0,I.jsx)(`span`,{className:`data-scope-active-bar`})]}),(0,I.jsxs)(P,{icon:(0,I.jsx)(be,{size:16}),variant:`secondary`,active:L===`tutorial`,className:`data-scope-btn ${L===`tutorial`?`data-scope-btn--active`:``}`,onClick:()=>{ct(`tutorial`),q(1)},title:`教程数据：教学相关的数据（课程教材、课件插图、章节横幅、示范音视频及实训样例表格）`,children:[(0,I.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[L===`tutorial`&&(0,I.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,I.jsxs)(`span`,{children:[`教程数据`,X.tutorial>0?` (${X.tutorial})`:``]})]}),L===`tutorial`&&(0,I.jsx)(`span`,{className:`data-scope-active-bar`})]}),(0,I.jsxs)(P,{icon:(0,I.jsx)(f,{size:16}),variant:`secondary`,active:L===`literature`,className:`data-scope-btn ${L===`literature`?`data-scope-btn--active`:``}`,onClick:()=>{ct(`literature`),q(1)},title:`科学文献：学术论文、研究报告、专著文献与技术文档资料`,children:[(0,I.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[L===`literature`&&(0,I.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,I.jsxs)(`span`,{children:[`科学文献`,X.literature>0?` (${X.literature})`:``]})]}),L===`literature`&&(0,I.jsx)(`span`,{className:`data-scope-active-bar`})]})]}),(0,I.jsx)(P,{icon:(0,I.jsx)(te,{size:16}),variant:`secondary`,onClick:()=>e(`/admin/data/trash`),title:`已删除的数据源`,children:`回收站`}),(0,I.jsx)(`span`,{style:{width:`1px`,height:`20px`,background:`var(--cg-border)`,margin:`0 4px`}})]}),rightActions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P,{icon:(0,I.jsx)(E,{size:18}),variant:`secondary`,active:lt||Z>0,onClick:()=>ut(!lt),title:`筛选与排序${Z>0?` (已启用 ${Z} 项条件)`:``}`,children:(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[`筛选`,Z>0&&(0,I.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,minWidth:`17px`,height:`17px`,padding:`0 4px`,borderRadius:`999px`,background:`var(--admin-primary)`,color:`#fff`,fontSize:`0.68rem`,fontWeight:700,lineHeight:1},children:Z})]})}),!Ae&&(0,I.jsx)(P,{icon:(0,I.jsx)(M,{size:18}),variant:`secondary`,active:o!==null,onClick:an,title:o?`当前类型: ${yn} (点击展开类型面板)`:`展开数据类型面板`,children:(0,I.jsx)(`span`,{children:o?`类型: ${yn}`:`类型`})}),(0,I.jsx)(P,{icon:(0,I.jsx)(ne,{size:18}),variant:`secondary`,active:rt,onClick:()=>{let e=!rt;at(e),et(!1),st(null),nt(null),e?je(!0):s(null)},title:`智能体运行状态`,children:`智能体状态`})]})}),lt&&!rt&&(0,I.jsxs)(`div`,{className:`data-filter-panel`,children:[(0,I.jsxs)(`div`,{className:`data-filter-panel-header`,children:[(0,I.jsxs)(`div`,{className:`data-filter-panel-title`,children:[(0,I.jsx)(E,{size:15,style:{color:`var(--admin-primary)`}}),(0,I.jsx)(`span`,{children:`多维数据筛选与排序`}),Z>0&&(0,I.jsxs)(`span`,{className:`data-filter-active-count`,children:[Z,` 个条件生效中`]})]}),Z>0&&(0,I.jsxs)(`button`,{type:`button`,onClick:Cn,className:`data-filter-reset-btn`,title:`重置所有筛选与排序条件`,children:[(0,I.jsx)(N,{size:13}),(0,I.jsx)(`span`,{children:`重置筛选`})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-grid`,children:[(0,I.jsxs)(`div`,{className:`data-filter-item data-filter-item--keyword`,children:[(0,I.jsxs)(`label`,{className:`data-filter-label`,htmlFor:`data-filter-keyword-input`,children:[(0,I.jsx)(ye,{size:13}),(0,I.jsx)(`span`,{children:`查询关键词`})]}),(0,I.jsxs)(`div`,{className:`data-filter-input-wrapper`,children:[(0,I.jsx)(`input`,{id:`data-filter-keyword-input`,type:`text`,value:A,onChange:e=>{xe(e.target.value),q(1)},placeholder:`匹配标题、摘要、名称或路径...`,className:`data-filter-input`}),A&&(0,I.jsx)(`button`,{type:`button`,onClick:()=>{xe(``),j(``),q(1)},className:`data-filter-input-clear-btn`,title:`清除关键词`,"aria-label":`清除关键词`,children:(0,I.jsx)(k,{size:13})})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`发布状态`})}),(0,I.jsxs)(`select`,{value:dt,onChange:e=>{R(e.target.value),q(1)},className:`data-filter-select`,children:[(0,I.jsxs)(`option`,{value:`all`,children:[`全部状态 (`,vn,`)`]}),(0,I.jsxs)(`option`,{value:`published`,children:[`已发布 (`,Sn.published,`)`]}),(0,I.jsxs)(`option`,{value:`draft`,children:[`草稿 / 未发布 (`,Sn.draft,`)`]})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`数据格式`})}),(0,I.jsxs)(`select`,{value:ft,onChange:e=>{pt(e.target.value),q(1)},className:`data-filter-select`,children:[(0,I.jsxs)(`option`,{value:`all`,children:[`全部格式 (`,vn,`)`]}),bn.map(e=>(0,I.jsxs)(`option`,{value:e.driver,children:[e.icon,` `,e.label,` (`,e.count,`)`]},e.driver))]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`数据主题`})}),(0,I.jsxs)(`select`,{value:z,onChange:e=>{B(e.target.value),q(1)},className:`data-filter-select`,children:[(0,I.jsxs)(`option`,{value:`all`,children:[`全部主题 (`,vn,`)`]}),xn.map(e=>(0,I.jsxs)(`option`,{value:e.key||e.name,children:[e.name,` (`,e.count,`)`]},e.key||e.name))]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`更新时间`})}),(0,I.jsxs)(`select`,{value:V,onChange:e=>{mt(e.target.value),q(1)},className:`data-filter-select`,children:[(0,I.jsx)(`option`,{value:`all`,children:`全部时间`}),(0,I.jsx)(`option`,{value:`7d`,children:`最近 7 天内`}),(0,I.jsx)(`option`,{value:`30d`,children:`最近 30 天内`}),(0,I.jsx)(`option`,{value:`90d`,children:`最近 90 天内`}),(0,I.jsx)(`option`,{value:`1y`,children:`1 年以内`})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`排序依据`})}),(0,I.jsxs)(`select`,{value:H||`default`,onChange:e=>{let t=e.target.value;if(t==="default")U(null);else{let e=t;U(e),G(e===`modified`||e===`size`?`desc`:`asc`)}q(1)},className:`data-filter-select`,children:[(0,I.jsx)(`option`,{value:`default`,children:`默认排序`}),(0,I.jsx)(`option`,{value:`modified`,children:`更新时间`}),(0,I.jsx)(`option`,{value:`name`,children:`数据源名称`}),(0,I.jsx)(`option`,{value:`size`,children:`文件大小`}),(0,I.jsx)(`option`,{value:`category`,children:`分类主题`})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-item`,children:[(0,I.jsx)(`label`,{className:`data-filter-label`,children:(0,I.jsx)(`span`,{children:`排序方向`})}),(0,I.jsxs)(`select`,{value:W,onChange:e=>{G(e.target.value),q(1)},disabled:!H,className:`data-filter-select ${H?``:`data-filter-select--disabled`}`,children:[(0,I.jsx)(`option`,{value:`desc`,children:`降序 (从大到小 / 最新)`}),(0,I.jsx)(`option`,{value:`asc`,children:`升序 (从小到大 / 最早)`})]})]})]}),(0,I.jsxs)(`div`,{className:`data-filter-footer`,children:[(0,I.jsxs)(`div`,{className:`data-filter-footer-info`,children:[(0,I.jsxs)(`span`,{children:[`当前范围共 `,(0,I.jsx)(`strong`,{children:vn}),` 项`]}),(0,I.jsx)(`span`,{className:`data-filter-divider`,children:`/`}),(0,I.jsxs)(`span`,{children:[`筛选匹配 `,(0,I.jsx)(`strong`,{style:{color:wn.length===0?`var(--admin-danger)`:`var(--admin-primary)`},children:jn}),` 项`]})]}),Z>0&&(0,I.jsxs)(`div`,{className:`data-filter-tags`,children:[A.trim()&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>{xe(``),j(``),q(1)},title:`点击清除关键词筛选`,children:[`关键词: `,A.trim(),(0,I.jsx)(k,{size:12})]}),dt!==`all`&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>R(`all`),children:[`状态: `,dt===`published`?`已发布`:`草稿/未发布`,(0,I.jsx)(k,{size:12})]}),ft!==`all`&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>pt(`all`),children:[`格式: `,vt[ft]?.label||ft,(0,I.jsx)(k,{size:12})]}),z!==`all`&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>B(`all`),children:[`主题: `,z===`__unclassified__`?`未分类主题`:z,(0,I.jsx)(k,{size:12})]}),V!==`all`&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>mt(`all`),children:[`时间: `,V===`7d`?`7天内`:V===`30d`?`30天内`:V===`90d`?`90天内`:`1年内`,(0,I.jsx)(k,{size:12})]}),H&&(0,I.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>U(null),children:[`排序: `,H===`modified`?`更新时间`:H===`name`?`名称`:H===`size`?`大小`:`分类`,` (`,W===`asc`?`升`:`降`,`)`,(0,I.jsx)(k,{size:12})]})]})]})]}),!rt&&!lt&&Z>0&&(0,I.jsxs)(`div`,{className:`data-filter-banner`,children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(E,{size:14}),(0,I.jsxs)(`span`,{children:[`已启用 `,(0,I.jsx)(`strong`,{children:Z}),` 项筛选条件 · 当前范围共 `,vn,` 项，匹配 `,(0,I.jsx)(`strong`,{children:jn}),` 项`]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>ut(!0),style:{background:`none`,border:`none`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`0.8rem`,textDecoration:`underline`},children:`展开调整`}),(0,I.jsxs)(`button`,{type:`button`,onClick:Cn,style:{background:`none`,border:`none`,color:`var(--cg-text-muted)`,cursor:`pointer`,fontSize:`0.8rem`,display:`inline-flex`,alignItems:`center`,gap:`2px`},children:[(0,I.jsx)(N,{size:12}),`清空`]})]})]}),Oe&&A&&(0,I.jsxs)(`p`,{className:`content-description`,style:{margin:0,padding:`0 1.5rem 1rem`,fontSize:`0.875rem`,color:`var(--cg-text-muted)`},children:[`搜索关键词: "`,A,`"`]}),!Oe&&o&&Nt&&(0,I.jsx)(`p`,{className:`content-description`,style:{margin:0,padding:`0 1.5rem 1rem`,fontSize:`0.875rem`,color:`var(--cg-text-muted)`},children:(Nt||[]).find(e=>e.name===o)?.description||``})]}),rt?(0,I.jsx)(`div`,{style:{flex:1,overflowY:`auto`},children:(0,I.jsx)(xt,{agentFilter:ot})}):Tn?(0,I.jsx)(`div`,{className:`loading`,children:`加载中...`}):It?(0,I.jsxs)(`div`,{role:`alert`,className:`loading`,children:[`数据列表加载失败，请重试。`,(0,I.jsx)(`button`,{onClick:()=>void Y(),children:`重新加载`})]}):ze?(0,I.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,padding:`0 1rem 1rem`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`0.75rem 0.5rem`,marginBottom:`0.5rem`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(we,{size:20,style:{color:`var(--admin-warning)`}}),(0,I.jsx)(`h3`,{style:{margin:0,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`},children:`查重结果`}),(0,I.jsx)(`span`,{style:{background:On>0?`var(--admin-warning-light)`:`var(--admin-success-light)`,color:On>0?`var(--admin-warning)`:`var(--admin-success)`,padding:`2px 10px`,borderRadius:`12px`,fontSize:`0.75rem`,fontWeight:600},children:On>0?`发现 ${On} 组重复`:`无重复数据`})]}),(0,I.jsxs)(`button`,{onClick:()=>Ve(!1),style:{border:`none`,background:`var(--cg-bg)`,borderRadius:`6px`,padding:`6px 12px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.8rem`,color:`var(--cg-text-muted)`},children:[(0,I.jsx)(k,{size:14}),` 关闭`]})]}),Dn>0&&Me?(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:Me.groups.map((e,t)=>(0,I.jsxs)(`div`,{style:{border:`1px solid var(--cg-border)`,borderRadius:`8px`,overflow:`hidden`,background:`var(--cg-surface)`},children:[(0,I.jsxs)(`div`,{onClick:()=>Yt(e.sha256),style:{padding:`10px 14px`,background:`var(--cg-bg)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`8px`,borderBottom:He.has(e.sha256)?`1px solid var(--cg-border)`:`none`},children:[He.has(e.sha256)?(0,I.jsx)(ie,{size:16,style:{color:`var(--cg-text-muted)`}}):(0,I.jsx)(d,{size:16,style:{color:`var(--cg-text-muted)`}}),(0,I.jsxs)(`span`,{style:{fontWeight:600,fontSize:`0.875rem`,color:`var(--cg-text)`},children:[`重复组 `,t+1]}),(0,I.jsxs)(`span`,{style:{background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,padding:`1px 8px`,borderRadius:`10px`,fontSize:`0.7rem`,fontWeight:600},children:[e.file_count,` 个文件`]}),(0,I.jsxs)(`span`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,marginLeft:`auto`,fontFamily:`monospace`},children:[`SHA256: `,e.sha256.slice(0,12),`…`]})]}),He.has(e.sha256)&&(0,I.jsx)(`div`,{style:{padding:`0`},children:e.members.map((t,n)=>(0,I.jsxs)(`div`,{style:{padding:`10px 14px 10px 38px`,display:`flex`,alignItems:`center`,gap:`10px`,borderBottom:n<e.members.length-1?`1px solid var(--cg-bg)`:`none`,background:t.is_canonical?`var(--cg-bg)`:`var(--cg-surface)`},children:[t.is_canonical?(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`3px`,background:`var(--admin-warning)`,color:`var(--admin-primary-text)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.7rem`,fontWeight:700,whiteSpace:`nowrap`,flexShrink:0},children:[(0,I.jsx)(re,{size:11}),` 推荐数据源`]}):(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`3px`,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.7rem`,fontWeight:500,whiteSpace:`nowrap`,flexShrink:0},children:[(0,I.jsx)(we,{size:11}),` 副本`]}),(0,I.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,I.jsx)(`div`,{style:{fontWeight:t.is_canonical?600:400,fontSize:`0.85rem`,color:`var(--cg-text)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:t.file_name}),(0,I.jsxs)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[t.file_path,t.source_name&&(0,I.jsxs)(`span`,{style:{marginLeft:`8px`,color:`var(--admin-primary)`},children:[`(`,t.source_name,`)`]})]})]}),(0,I.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:Xt(t.size)}),(0,I.jsx)(`span`,{style:{fontSize:`0.65rem`,padding:`1px 6px`,borderRadius:`4px`,background:(t.status===`duplicate`||t.status,`var(--cg-bg)`),color:t.status===`duplicate`?`var(--admin-danger)`:t.status===`discovered`?`var(--admin-primary)`:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:t.status})]},n))})]},e.sha256))}):(0,I.jsxs)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:`var(--cg-text-muted)`},children:[(0,I.jsx)(De,{size:48,style:{color:`var(--admin-success)`,marginBottom:`12px`}}),(0,I.jsx)(`p`,{style:{fontSize:`1rem`,fontWeight:600},children:`数据无重复 ✓`}),(0,I.jsx)(`p`,{style:{fontSize:`0.85rem`},children:Me?.message})]})]}):jn>0?(0,I.jsxs)(`div`,{ref:wt,onScroll:()=>{yt&&K(null)},style:{flex:1,overflowY:`auto`,padding:`0 1rem 1.5rem`},children:[(0,I.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.85rem`},children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{style:{background:`var(--cg-bg)`,borderBottom:`2px solid var(--cg-border)`},children:[(0,I.jsx)(`th`,{style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`50px`},children:`#`}),(0,I.jsx)(`th`,{onClick:()=>cn(`name`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,cursor:`pointer`,userSelect:`none`},title:`按数据源名称排序${H===`name`?`（当前${W===`asc`?`升序`:`降序`}）`:``}`,children:(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`数据源名称`,H===`name`&&(W===`asc`?(0,I.jsx)(ge,{size:14}):(0,I.jsx)(m,{size:14}))]})}),(0,I.jsx)(`th`,{onClick:()=>cn(`category`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`100px`,cursor:`pointer`,userSelect:`none`},title:`按分类排序${H===`category`?`（当前${W===`asc`?`升序`:`降序`}）`:``}`,children:(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`分类`,H===`category`&&(W===`asc`?(0,I.jsx)(ge,{size:14}):(0,I.jsx)(m,{size:14}))]})}),(0,I.jsx)(`th`,{onClick:()=>cn(`governance_status`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`220px`,cursor:`pointer`,userSelect:`none`},title:`按治理状态排序${H===`governance_status`?`（当前${W===`asc`?`升序`:`降序`}）`:``}`,children:(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`治理概览`,H===`governance_status`&&(W===`asc`?(0,I.jsx)(ge,{size:14}):(0,I.jsx)(m,{size:14}))]})}),(0,I.jsx)(`th`,{onClick:()=>cn(`publish_recommend`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`140px`,cursor:`pointer`,userSelect:`none`},title:`按发布建议排序${H===`publish_recommend`?`（当前${W===`asc`?`升序`:`降序`}）`:``}`,children:(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`发布建议`,H===`publish_recommend`&&(W===`asc`?(0,I.jsx)(ge,{size:14}):(0,I.jsx)(m,{size:14}))]})}),(0,I.jsx)(`th`,{style:{padding:`10px 12px`,textAlign:`right`,fontWeight:700,color:`var(--cg-text-muted)`,width:`230px`},children:`下一步`})]})}),(0,I.jsx)(`tbody`,{children:Mn.map((e,t)=>{let n=Nn+t+1,r=Bn[e.name],i=Qt(r?.overall_status);return(0,I.jsxs)(`tr`,{onClick:()=>u(e),onDoubleClick:t=>{t.stopPropagation(),u(e)},style:{cursor:`pointer`,background:En===e.name?`var(--admin-primary-light)`:`transparent`,borderBottom:`1px solid var(--cg-border)`,transition:`background 0.15s`},onMouseEnter:t=>t.currentTarget.style.background=En===e.name?`var(--admin-primary-light)`:`var(--cg-bg)`,onMouseLeave:t=>t.currentTarget.style.background=En===e.name?`var(--admin-primary-light)`:`transparent`,children:[(0,I.jsx)(`td`,{style:{padding:`10px 12px`,color:`var(--cg-text-muted)`,fontWeight:500},children:n}),(0,I.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(`span`,{style:{fontSize:`1.1rem`},children:tn(e.category)}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`},children:e.metadata?.title?Ne(e.metadata.title,Pe()):e.name}),e.metadata?.title&&Ne(e.metadata.title,Pe())!==e.name&&(0,I.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--admin-primary)`,fontFamily:`monospace`},children:e.name}),(()=>{let t=ue(e.metadata?.title);return t?(0,I.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:t}):null})()]})]})}),(0,I.jsx)(`td`,{style:{padding:`10px 12px`,color:`var(--cg-text-muted)`,fontSize:`0.8rem`},children:e.theme_category_name?(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`,background:`var(--cg-bg)`,color:`var(--admin-success)`,padding:`2px 8px`,borderRadius:`6px`,fontSize:`0.75rem`,fontWeight:500,whiteSpace:`nowrap`},children:[e.theme_category_icon&&(0,I.jsx)(`span`,{children:e.theme_category_icon}),e.theme_category_name]}):(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:`未分类`})}),(0,I.jsx)(`td`,{style:{padding:`10px 12px`},children:r?(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,I.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:(0,I.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`2px 8px`,borderRadius:`999px`,background:i.background,color:i.color,fontSize:`0.72rem`,fontWeight:600},children:Zt(r.overall_status)})}),(0,I.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:[`评分 `,Math.round(r.score),` · 问题 `,r.total_issues,` · 待处理 `,r.task_pending]})]}):(0,I.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:zn?`未同步`:`加载中`})}),(0,I.jsx)(`td`,{style:{padding:`10px 12px`},children:r?(0,I.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`2px 8px`,borderRadius:`999px`,background:r.recommend_publish?`var(--admin-success-light)`:`var(--cg-bg)`,color:r.recommend_publish?`var(--admin-success)`:`var(--cg-text-muted)`,fontSize:`0.72rem`,fontWeight:600},children:$t(r.recommend_publish)}):(0,I.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:`-`})}),(0,I.jsx)(`td`,{style:{padding:`10px 12px`,textAlign:`right`,position:`relative`,zIndex:yt===e.name?50:void 0},onClick:e=>e.stopPropagation(),children:(0,I.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,justifyContent:`flex-end`},children:[(e.publication_status||`draft`)===`published`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>u(e),title:`查看已发布的数据与元数据版本`,style:{padding:`6px 10px`,borderRadius:`8px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`12px`,whiteSpace:`nowrap`},children:`查看发布版本`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>void Bt(e.name),disabled:C[e.name]===`unpublishing`,title:`取消发布，暂停对外开放并进入治理修改状态`,style:{padding:`6px 10px`,borderRadius:`8px`,border:`1px solid var(--admin-warning, #f59e0b)`,background:`var(--admin-warning-light, rgba(245, 158, 11, 0.1))`,color:`var(--admin-warning, #d97706)`,cursor:C[e.name]===`unpublishing`?`not-allowed`:`pointer`,fontWeight:600,fontSize:`12px`,display:`inline-flex`,alignItems:`center`,gap:`4px`,whiteSpace:`nowrap`,opacity:C[e.name]===`unpublishing`?.6:1},children:C[e.name]===`unpublishing`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{size:12,style:{animation:`spin 1s linear infinite`}}),(0,I.jsx)(`span`,{children:`取消中...`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{size:12}),(0,I.jsx)(`span`,{children:`取消发布`})]})})]}):(0,I.jsx)(`button`,{type:`button`,onClick:()=>u(e),style:{padding:`6px 11px`,borderRadius:`8px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`12px`,whiteSpace:`nowrap`},children:r?.recommend_publish?`核对并发布`:`继续完善`}),(0,I.jsxs)(`div`,{style:{position:`relative`,display:`inline-flex`},children:[(0,I.jsx)(`button`,{type:`button`,onClick:t=>Mt(e.name,t),title:`更多操作`,style:{width:`34px`,height:`34px`,minWidth:`34px`,borderRadius:`10px`,border:`1px solid var(--cg-border)`,background:yt===e.name?`var(--cg-bg)`:`var(--cg-surface)`,color:`var(--cg-text-muted)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsx)(Ce,{size:16})}),yt===e.name&&(0,I.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,...St===`top`?{bottom:`calc(100% + 6px)`}:{top:`calc(100% + 6px)`},zIndex:60,minWidth:`136px`,background:`var(--cg-surface)`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,boxShadow:`0 10px 24px rgba(15, 23, 42, 0.16)`,padding:`6px`,display:`flex`,flexDirection:`column`,gap:`4px`,maxHeight:`280px`,overflowY:`auto`},children:[(e.publication_status||`draft`)===`published`&&(0,I.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),K(null),Bt(e.name)},disabled:C[e.name]===`unpublishing`,title:`取消发布，暂停对外开放并进入治理修改状态`,style:{border:`none`,background:`transparent`,cursor:C[e.name]===`unpublishing`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--admin-warning, #d97706)`,opacity:C[e.name]===`unpublishing`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[C[e.name]===`unpublishing`?(0,I.jsx)(v,{size:14,style:{animation:`spin 1s linear infinite`}}):(0,I.jsx)(k,{size:14}),(0,I.jsx)(`span`,{children:C[e.name]===`unpublishing`?`取消中...`:`取消发布`})]}),(0,I.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),K(null),zt(e.name)},disabled:S[e.name]===`running`||(e.publication_status||`draft`)===`published`,title:(e.publication_status||`draft`)===`published`?`请先取消发布，再重新生成元数据`:`重新生成标题、摘要等描述性元数据`,style:{border:`none`,background:`transparent`,cursor:S[e.name]===`running`||(e.publication_status||`draft`)===`published`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:S[e.name]===`running`||(e.publication_status||`draft`)===`published`?.5:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[S[e.name]===`running`?(0,I.jsx)(v,{size:14,style:{animation:`spin 1s linear infinite`}}):S[e.name]===`done`?(0,I.jsx)(De,{size:14}):S[e.name]===`error`?(0,I.jsx)(_,{size:14}):(0,I.jsx)(se,{size:14}),(0,I.jsx)(`span`,{children:S[e.name]===`running`?`重新生成中`:S[e.name]===`done`?`生成完成`:S[e.name]===`error`?`生成失败，请重试`:`重新生成元数据`})]}),(0,I.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),K(null),oe(e.name)},title:$e.getDetail(e.name),disabled:p[e.name]===`governing`||p[e.name]===`waiting`,style:{border:`none`,background:`transparent`,cursor:p[e.name]===`governing`||p[e.name]===`waiting`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:p[e.name]===`governing`||p[e.name]===`waiting`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[p[e.name]===`governing`?(0,I.jsx)(v,{size:14,style:{animation:`spin 1s linear infinite`}}):p[e.name]===`success`?(0,I.jsx)(De,{size:14}):p[e.name]===`error`?(0,I.jsx)(_,{size:14}):(0,I.jsx)(Te,{size:14}),(0,I.jsx)(`span`,{children:p[e.name]===`waiting`?`检查排队中`:p[e.name]===`governing`?`检查中`:p[e.name]===`success`?`检查完成`:p[e.name]===`error`?`检查失败，重试`:p[e.name]===`blocked`?`待补充信息，重试`:`继续完善`})]}),(0,I.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),K(null),dn(e.name)},disabled:x[e.name]===`auditing`,style:{border:`none`,background:`transparent`,cursor:x[e.name]===`auditing`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:x[e.name]===`auditing`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[x[e.name]===`auditing`?(0,I.jsx)(v,{size:14,style:{animation:`spin 1s linear infinite`}}):x[e.name]===`done`?(0,I.jsx)(De,{size:14}):x[e.name]===`error`?(0,I.jsx)(_,{size:14}):(0,I.jsx)(_e,{size:14}),(0,I.jsx)(`span`,{children:x[e.name]===`auditing`?`检查中`:x[e.name]===`done`?`已打开`:x[e.name]===`error`?`加载失败`:`查看问题`})]}),(0,I.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),K(null),Et(e.name)},disabled:Dt===e.name,style:{border:`none`,background:`transparent`,cursor:Dt===e.name?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--admin-danger)`,opacity:Dt===e.name?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[Dt===e.name?(0,I.jsx)(v,{size:14,style:{animation:`spin 1s linear infinite`}}):(0,I.jsx)(te,{size:14}),(0,I.jsx)(`span`,{children:Dt===e.name?`移入回收站中`:`删除`})]})]})]})]})})]},t)})})]}),Q>1&&(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`12px 16px`,borderTop:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,fontSize:`0.8125rem`,color:`var(--cg-text-muted)`},children:[(0,I.jsxs)(`span`,{children:[`共 `,jn,` 条，第 `,$,`/`,Q,` 页`]}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`4px`,alignItems:`center`},children:[(0,I.jsx)(`button`,{onClick:()=>q(1),disabled:$<=1,style:{...Vn,opacity:$<=1?.4:1},children:(0,I.jsx)(ae,{size:14})}),(0,I.jsx)(`button`,{onClick:()=>q(e=>Math.max(1,e-1)),disabled:$<=1,style:{...Vn,opacity:$<=1?.4:1},children:(0,I.jsx)(D,{size:14})}),(()=>{let e=[],t=Math.max(1,$-2),n=Math.min(Q,t+4);t=Math.max(1,n-4);for(let r=t;r<=n;r++)e.push(r);return e.map(e=>(0,I.jsx)(`button`,{onClick:()=>q(e),style:{...Vn,background:e===$?`var(--admin-primary)`:`var(--cg-surface)`,color:e===$?`var(--cg-surface)`:`var(--cg-text-muted)`,fontWeight:e===$?700:400},children:e},e))})(),(0,I.jsx)(`button`,{onClick:()=>q(e=>Math.min(Q,e+1)),disabled:$>=Q,style:{...Vn,opacity:$>=Q?.4:1},children:(0,I.jsx)(d,{size:14})}),(0,I.jsx)(`button`,{onClick:()=>q(Q),disabled:$>=Q,style:{...Vn,opacity:$>=Q?.4:1},children:(0,I.jsx)(g,{size:14})})]})]})]}):(0,I.jsxs)(`div`,{className:`empty-state`,children:[(0,I.jsx)(ce,{size:48,color:`var(--cg-text-muted)`}),(0,I.jsx)(`p`,{children:Z>0?`未找到符合当前筛选条件的数据`:Oe?`未找到匹配的数据文件`:`该分类下暂无数据文件`}),(0,I.jsx)(`div`,{className:`empty-hint`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,marginTop:`6px`},children:Z>0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`span`,{children:[`当前已启用 `,Z,` 项筛选条件，请尝试放宽或重置条件。`]}),(0,I.jsxs)(`button`,{type:`button`,onClick:Cn,style:{padding:`6px 14px`,borderRadius:`6px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(N,{size:13}),`重置所有筛选条件`]})]}):Oe?`请尝试其他搜索关键词`:`请选择其他分类查看`})]})]}),Ae&&Hn]}),(0,I.jsx)(it,{isOpen:ve,onClose:()=>O(!1),defaultCategory:o||void 0,onSuccess:nn}),(0,I.jsx)(Re,{isOpen:!!Tt,title:`移入回收站`,message:`确定要将数据源 ${Tt||``} 移入回收站吗？移入后可在回收站中恢复或永久删除。`,type:`warning`,confirmText:`移入回收站`,isLoading:Dt===Tt,onClose:()=>Et(null),onConfirm:()=>{Tt&&hn(Tt)}}),T&&(0,I.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,backdropFilter:`blur(4px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:1e4},onClick:()=>he(null),children:(0,I.jsxs)(`div`,{style:{background:`var(--cg-surface)`,borderRadius:`12px`,padding:`24px`,maxWidth:`560px`,width:`90%`,maxHeight:`80vh`,overflow:`auto`,boxShadow:`0 20px 60px rgba(0,0,0,0.4)`,border:`1px solid rgba(255,255,255,0.1)`},onClick:e=>e.stopPropagation(),children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`16px`},children:[(0,I.jsxs)(`h3`,{style:{margin:0,fontSize:`1.1rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,I.jsx)(_e,{size:20}),`数据治理总览`]}),(0,I.jsx)(`button`,{onClick:()=>he(null),style:{background:`none`,border:`none`,cursor:`pointer`,color:`inherit`,padding:`4px`},children:(0,I.jsx)(k,{size:18})})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,marginBottom:`20px`,padding:`16px`,borderRadius:`8px`,background:T.quality_summary.overall_status===`PASSED`?`var(--admin-success-light)`:T.quality_summary.overall_status===`WARNING`?`var(--admin-warning-light)`:`var(--admin-danger-light)`,border:`1px solid ${T.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:T.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`}`},children:[(0,I.jsxs)(`div`,{style:{fontSize:`2.2rem`,fontWeight:700,lineHeight:1,color:T.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:T.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`},children:[Math.round(T.quality_summary.score),`%`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{style:{display:`inline-block`,padding:`2px 10px`,borderRadius:`12px`,fontSize:`0.75rem`,fontWeight:600,background:T.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:T.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`,color:`var(--admin-primary-text)`},children:Zt(T.quality_summary.overall_status)}),(0,I.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:T.source_name}),(0,I.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:T.meta.driver||`未识别驱动`})]})]}),(0,I.jsx)(`div`,{style:{display:`flex`,gap:`12px`,marginBottom:`16px`},children:[{label:`总检查`,value:T.quality_summary.stats.total_checks,color:`var(--cg-text-muted)`},{label:`总问题`,value:T.issue_summary.total_issues,color:`var(--admin-danger)`},{label:`待处理`,value:T.governance_progress.task_pending,color:`var(--admin-warning)`},{label:`处理中`,value:T.governance_progress.task_in_progress,color:`var(--admin-primary)`}].map(e=>(0,I.jsxs)(`div`,{style:{flex:1,textAlign:`center`,padding:`8px`,borderRadius:`8px`,background:`rgba(255,255,255,0.05)`},children:[(0,I.jsx)(`div`,{style:{fontSize:`1.3rem`,fontWeight:700,color:e.color},children:e.value}),(0,I.jsx)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`},children:e.label})]},e.label))}),(0,I.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,marginBottom:`16px`},children:[`结构${T.quality_summary.structure_passed?`通过`:`待修复`}`,`完整性${T.quality_summary.completeness_passed?`通过`:`待修复`}`,`语义${T.quality_summary.semantic_passed?`通过`:`待修复`}`,`建议发布${T.publishing_decision.recommend_publish?`是`:`否`}`].map(e=>(0,I.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`4px 10px`,borderRadius:`999px`,background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(255,255,255,0.08)`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:e},e))}),T.field_diagnostics.length>0?(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{fontSize:`0.85rem`,fontWeight:600,marginBottom:`8px`},children:[`字段诊断 (`,T.field_diagnostics.length,`)`]}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:T.field_diagnostics.slice(0,8).map((e,t)=>(0,I.jsxs)(`div`,{style:{padding:`8px 12px`,borderRadius:`6px`,fontSize:`0.8rem`,display:`flex`,alignItems:`flex-start`,gap:`8px`,background:e.severity===`error`||e.severity===`critical`?`var(--admin-danger-light)`:`var(--admin-warning-light)`,borderLeft:`3px solid ${e.severity===`error`||e.severity===`critical`?`var(--admin-danger)`:`var(--admin-warning)`}`},children:[(0,I.jsx)(`span`,{style:{flexShrink:0,marginTop:`1px`},children:e.severity===`error`||e.severity===`critical`?`❌`:`⚠️`}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.7rem`},children:[`[`,e.field_path,`]`]}),` `,e.message]}),(0,I.jsxs)(`div`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.72rem`,marginTop:`4px`},children:[`建议：`,e.suggestion]})]})]},t))}),T.field_diagnostics.length>8&&(0,I.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:`仅展示前 8 条诊断，请前往治理工作台查看完整任务。`})]}):(0,I.jsxs)(`div`,{style:{textAlign:`center`,padding:`20px`,color:`var(--admin-success)`},children:[(0,I.jsx)(De,{size:32,style:{marginBottom:`8px`}}),(0,I.jsx)(`div`,{children:`当前没有字段级诊断问题`})]})]})}),(0,I.jsx)(`style`,{children:`
        /* 数据多维筛选面板 */
        .data-filter-panel {
          margin: 0 1.5rem 1rem;
          padding: 1rem 1.25rem;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: filterFadeIn 0.2s ease-out;
        }

        @keyframes filterFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .data-filter-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--cg-border);
        }

        .data-filter-panel-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--cg-text);
        }

        .data-filter-active-count {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 999px;
          background: var(--admin-primary-light);
          color: var(--admin-primary);
        }

        .data-filter-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          background: transparent;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          padding: 4px 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .data-filter-reset-btn:hover {
          color: var(--admin-danger);
          border-color: var(--admin-danger);
          background: rgba(239, 68, 68, 0.08);
        }

        .data-filter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 12px;
        }

        .data-filter-item--keyword {
          grid-column: span 2;
          min-width: 240px;
        }

        @media (max-width: 768px) {
          .data-filter-item--keyword {
            grid-column: span 1;
            min-width: 100%;
          }
        }

        .data-filter-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .data-filter-input {
          padding: 8px 30px 8px 10px;
          border-radius: 8px;
          border: 1px solid var(--cg-border);
          background: var(--cg-bg);
          color: var(--cg-text);
          font-size: 0.8125rem;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          width: 100%;
        }

        .data-filter-input:focus {
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 2px var(--admin-primary-light);
        }

        .data-filter-input::placeholder {
          color: var(--cg-text-muted);
          opacity: 0.7;
        }

        .data-filter-input-clear-btn {
          position: absolute;
          right: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--cg-text-muted);
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .data-filter-input-clear-btn:hover {
          background: var(--cg-border);
          color: var(--cg-text);
        }

        .data-filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .data-filter-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .data-filter-select {
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid var(--cg-border);
          background: var(--cg-bg);
          color: var(--cg-text);
          font-size: 0.8125rem;
          outline: none;
          cursor: pointer;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          width: 100%;
        }

        .data-filter-select:focus {
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 2px var(--admin-primary-light);
        }

        .data-filter-select--disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .data-filter-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px dashed var(--cg-border);
          font-size: 0.8rem;
        }

        .data-filter-footer-info {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--cg-text-muted);
        }

        .data-filter-footer-info strong {
          color: var(--cg-text);
        }

        .data-filter-divider {
          color: var(--cg-border);
        }

        .data-filter-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .data-filter-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 4px;
          background: var(--admin-primary-light);
          color: var(--admin-primary);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .data-filter-tag:hover {
          background: var(--admin-danger);
          color: #fff;
        }

        .data-filter-banner {
          margin: 0 1.5rem 1rem;
          padding: 8px 12px;
          border-radius: 8px;
          background: var(--admin-primary-light);
          color: var(--admin-primary);
          font-size: 0.8rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .data-scope-button-group {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 2px;
          background: var(--cg-bg, rgba(0, 0, 0, 0.04));
          border: 1px solid var(--cg-border);
          border-radius: 8px;
        }

        .data-scope-btn {
          position: relative !important;
          border-radius: 6px !important;
          transition: all 0.2s ease !important;
          font-weight: 500;
        }

        .data-scope-btn--active {
          background: var(--admin-primary-light) !important;
          color: var(--admin-primary) !important;
          font-weight: 600 !important;
          border: 1px solid var(--admin-primary) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .data-scope-btn-inner {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .data-scope-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--admin-primary, #008080);
          box-shadow: 0 0 6px var(--admin-primary, #008080);
          display: inline-block;
          animation: pulse-scope-dot 2s infinite ease-in-out;
          flex-shrink: 0;
        }

        @keyframes pulse-scope-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.65;
          }
        }

        .data-scope-active-bar {
          position: absolute;
          bottom: 0;
          left: 8px;
          right: 8px;
          height: 2px;
          background: var(--admin-primary, #008080);
          border-radius: 2px 2px 0 0;
        }

        .data-management-layout {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.75rem;
          height: calc(100vh - 140px);
          min-height: 600px;
        }

        .data-sidebar {
          background: var(--cg-surface);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          order: 2; /* 移到右侧 */
          flex-shrink: 0;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .sidebar-header h3 {
          margin: 0 0 1rem 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .sidebar-stats {
          padding-top: 0.75rem;
          border-top: 1px solid var(--cg-bg);
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--admin-primary);
        }

        .category-list {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem;
        }

        .category-item {
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s;
          text-align: left;
          margin-bottom: 0.25rem;
        }

        .category-item:hover {
          background: var(--cg-bg);
        }

        .category-item.active {
          background: var(--cg-bg);
          color: var(--admin-primary);
        }

        .category-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .category-info {
          flex: 1;
          min-width: 0;
        }

        .category-name {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--cg-text);
          margin-bottom: 0.25rem;
        }

        .category-item.active .category-name {
          color: var(--admin-primary);
        }

        .category-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .category-count {
          font-weight: 500;
        }

        .category-size {
          color: var(--cg-text-muted);
        }

        .category-description {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          margin-top: 0.25rem;
          line-height: 1.4;
        }

        .data-content {
          flex: 1;
          background: var(--cg-surface);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .data-page-toolbar {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0;
          padding: 1rem 1rem 0;
          border-bottom: 1px solid var(--cg-border);
          background: var(--cg-surface);
        }

        .data-page-toolbar .admin-toolbar {
          margin-bottom: 1rem;
        }

        .data-page-toolbar h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .content-description {
          margin: 0;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
        }

        .data-content > .loading,
        .data-content > .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .data-list {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .data-grid {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
          align-content: flex-start;
        }

        .data-grid .data-item {
          display: flex;
          flex-direction: column;
          min-height: 180px;
        }

        .data-grid .data-item-header {
          flex-direction: column;
          gap: 0.75rem;
        }

        .data-grid .data-item-icon {
          display: none;
        }

        .data-grid .data-item-actions {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--cg-bg);
        }

        .data-grid .metadata-preview {
          flex: 1;
        }

        .data-item {
          padding: 1.5rem;
          transition: all 0.2s;
        }

        .data-item.clickable:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transform: translateY(-2px);
        }

        .data-item-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .data-item-icon {
          color: var(--cg-text-muted);
        }

        .data-item-info {
          flex: 1;
        }

        .data-item-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: var(--cg-text);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.3;
        }

        .main-title {
          font-size: 1.125rem;
        }

        .sub-title {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--cg-text-muted);
          font-style: italic;
          margin-top: 1px;
        }

        .data-item-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
        }

        .data-item-category,
        .data-item-theme,
        .data-item-type {
          padding: 0.25rem 0.5rem;
          background: var(--cg-bg);
          border-radius: 4px;
        }

        .data-item-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-success {
          background: var(--admin-success);
          color: white;
          border-color: var(--admin-success);
        }

        .btn-success:hover {
          background: var(--admin-success);
          border-color: var(--admin-success);
        }

        .import-message {
          margin-top: 0.75rem;
          padding: 0.75rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .import-message.success {
          background: var(--admin-success-light);
          color: var(--admin-success);
          border: 1px solid var(--admin-success);
        }

        .import-message.error {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger);
        }

        .import-message.info {
          background: var(--admin-primary-light);
          color: var(--admin-primary);
          border: 1px solid var(--admin-primary);
        }

        .data-item-duplicate {
          padding: 0.25rem 0.6rem;
          background: var(--cg-bg);
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger-light);
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .duplicate-alert-banner {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--admin-danger-light);
          border: 1px solid var(--admin-danger);
          border-radius: 8px;
          color: var(--admin-danger);
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .duplicate-alert-content strong {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.9375rem;
        }

        .duplicate-alert-content p {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .data-item-metadata,
        .data-item-files {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--cg-border);
        }

        .metadata-content {
          background: var(--cg-bg);
          padding: 1rem;
          border-radius: 4px;
          font-size: 0.875rem;
          overflow-x: auto;
          margin-top: 0.5rem;
        }

        .file-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: var(--cg-bg);
          border-radius: 4px;
          font-size: 0.875rem;
        }

        .file-size {
          margin-left: auto;
          color: var(--cg-text-muted);
        }

        .file-item-more {
          padding: 0.5rem;
          text-align: center;
          color: var(--cg-text-muted);
          font-size: 0.875rem;
        }

        .empty-hint {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          margin-top: 0.5rem;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .data-management-layout {
            flex-direction: column;
            height: auto;
          }

          .data-sidebar {
            width: 100%;
            max-height: 300px;
          }
        }
      `})]})}var W=[{key:`all`,label:`全部智能体`,icon:(0,I.jsx)(ne,{size:16}),color:`var(--cg-text-muted)`},{key:`commander`,label:`指挥官`,icon:(0,I.jsx)(u,{size:16}),color:`var(--admin-primary)`},{key:`data_engineer`,label:`数据工程师`,icon:(0,I.jsx)(j,{size:16}),color:`var(--admin-primary)`},{key:`metadata_editor`,label:`元数据编辑`,icon:(0,I.jsx)(p,{size:16}),color:`var(--admin-warning)`},{key:`domain_expert`,label:`领域顾问`,icon:(0,I.jsx)(be,{size:16}),color:`var(--admin-success)`},{key:`arbiter`,label:`仲裁官`,icon:(0,I.jsx)(w,{size:16}),color:`var(--admin-primary)`},{key:`inspector`,label:`督察官`,icon:(0,I.jsx)(O,{size:16}),color:`var(--admin-danger)`}],G={commander:`指挥官`,data_engineer:`数据工程师`,metadata_editor:`元数据编辑`,domain_expert:`领域顾问`,arbiter:`仲裁官`,inspector:`督察官`},yt={PENDING:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`排队`},IN_PROGRESS:{bg:`var(--admin-primary-light)`,color:`var(--admin-primary)`,label:`运行中`},COMMITTED:{bg:`var(--admin-success-light)`,color:`var(--admin-success)`,label:`已完成`},AWAITING_INPUT:{bg:`var(--admin-primary-light)`,color:`var(--admin-primary)`,label:`等待`},BLOCKED:{bg:`var(--admin-danger-light)`,color:`var(--admin-danger)`,label:`阻塞`},INSUFFICIENT_EVIDENCE:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`证据不足`},DEFERRED:{bg:`var(--cg-bg)`,color:`var(--cg-text-muted)`,label:`延后`},TIMEOUT:{bg:`var(--admin-danger-light)`,color:`var(--admin-danger)`,label:`超时`}};function bt({agentFilter:e,setAgentFilter:t,position:n=`right`,headerActions:r,onRefresh:i,onSort:a}){let o={},[s,c]=(0,F.useState)(null);(0,F.useEffect)(()=>{let e=!0,t=()=>{l(`/api/admin/governance/agents/status`).then(e=>e.ok?e.json():null).then(t=>{e&&t?.daemon&&c(t.daemon)}).catch(()=>{})};t();let n=setInterval(t,1e4);return()=>{e=!1,clearInterval(n)}},[]);let[u,d]=(0,F.useState)(0);(0,F.useEffect)(()=>{let e=!0;return l(`/api/admin/governance/tasks/inspector/health`).then(e=>e.ok?e.json():null).then(t=>{e&&t&&d(t.alerts?.length||0)}).catch(()=>{}),()=>{e=!1}},[]);let f=Object.values(o||{}).reduce((e,t)=>e+(t?.total||0),0),p=s?.running||s?.state===`running`,m=p?`var(--admin-success)`:`var(--cg-text-muted)`,h=p?`运行中`:s?`空闲`:`未知`,g=W.map(n=>{let r=n.key===`all`,i=n.key===`inspector`,a=0;return a=r?f:i?u:o?.[n.key]?.total||0,{id:n.key,label:n.label,icon:(0,I.jsx)(`span`,{style:{color:n.color},children:n.icon}),count:a,active:r?!e||e===`all`:e===n.key,onClick:()=>t(n.key)}});return(0,I.jsx)(Le,{header:{title:`智能体状态`,actions:r},items:g,selectedId:e||`all`,onSelect:e=>t(String(e)),position:n,resizable:!0,width:280,minWidth:200,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:i,onSort:a,children:(0,I.jsx)(`div`,{style:{padding:`0 4px 12px 4px`},children:(0,I.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:10,background:p?`var(--admin-success-light)`:`var(--cg-bg)`,border:`1px solid ${p?`var(--admin-success)`:`var(--cg-border)`}`,marginBottom:8},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,I.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,background:m,boxShadow:p?`0 0 6px var(--admin-success)`:`none`,animation:p?`pulse 2s infinite`:`none`}}),(0,I.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--cg-text)`},children:`治理守护进程`}),(0,I.jsx)(`span`,{style:{marginLeft:`auto`,fontSize:11,fontWeight:600,padding:`2px 8px`,borderRadius:8,background:p?`var(--admin-success-light)`:`var(--cg-bg)`,color:p?`var(--admin-success)`:`var(--cg-text-muted)`},children:h})]}),p&&s?.current_source&&(0,I.jsxs)(`div`,{style:{marginTop:6,paddingLeft:16,fontSize:11,color:`var(--cg-text-muted)`},children:[`🔄 正在处理: `,(0,I.jsx)(`span`,{style:{color:`var(--admin-primary)`,fontWeight:500},children:s.current_source.length>20?s.current_source.slice(0,18)+`…`:s.current_source})]})]})})})}function xt({agentFilter:e}){return e===`inspector`?(0,I.jsx)(K,{}):(0,I.jsx)(St,{agentFilter:e})}function K(){let[e,t]=(0,F.useState)([]),[n,r]=(0,F.useState)(!0),i=(0,F.useCallback)(async()=>{r(!0);try{let e=await(await l(`/api/admin/governance/tasks/inspector/health`)).json();t(e.alerts||[])}catch{}finally{r(!1)}},[]);(0,F.useEffect)(()=>{i()},[i]);let a={critical:{bg:`var(--cg-bg)`,color:`var(--admin-danger)`,label:`致命`},error:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`错误`},warning:{bg:`var(--cg-bg)`,color:`var(--admin-warning)`,label:`警告`},info:{bg:`var(--cg-bg)`,color:`var(--admin-primary)`,label:`提示`}},o={phantom_commit:`虚假提交`,feedback_diagnosis:`反馈诊断`,stalled_backlog:`积压停滞`,missing_detection:`缺失检测`,config_drift:`配置偏移`,rule_coverage:`规则覆盖`};return n?(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200},children:[(0,I.jsx)(ee,{size:20,className:`spin`,style:{color:`var(--cg-text-muted)`}}),(0,I.jsx)(`span`,{style:{marginLeft:8,color:`var(--cg-text-muted)`},children:`加载督察官巡检日志...`})]}):e.length?(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`10px 12px`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`},children:[(0,I.jsxs)(`span`,{style:{fontSize:14,fontWeight:600,color:`var(--admin-danger)`},children:[`🔍 督察官巡检日志 (`,e.length,` 条告警)`]}),(0,I.jsx)(`button`,{onClick:i,style:{display:`flex`,alignItems:`center`,gap:4,padding:`4px 10px`,fontSize:12,borderRadius:6,border:`1px solid var(--cg-border)`,background:`var(--cg-surface)`,color:`var(--cg-text-muted)`,cursor:`pointer`},children:`🔄 重新巡检`})]}),(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`60px 90px 100px 1fr 1fr 130px`,padding:`8px 12px`,fontSize:12,fontWeight:600,color:`var(--cg-text-muted)`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,position:`sticky`,top:0,zIndex:1},children:[(0,I.jsx)(`span`,{children:`级别`}),(0,I.jsx)(`span`,{children:`类别`}),(0,I.jsx)(`span`,{children:`字段`}),(0,I.jsx)(`span`,{children:`错误信息`}),(0,I.jsx)(`span`,{children:`建议`}),(0,I.jsx)(`span`,{children:`时间`})]}),e.map((e,t)=>{let n=a[e.severity]||a.warning,r=o[e.category]||e.category;return(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`60px 90px 100px 1fr 1fr 130px`,padding:`8px 12px`,fontSize:13,color:`var(--cg-text)`,borderBottom:`1px solid var(--cg-bg)`,alignItems:`start`,background:t%2==0?`var(--cg-surface)`:`var(--cg-bg)`},children:[(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:600,padding:`2px 6px`,borderRadius:6,background:n.bg,color:n.color,textAlign:`center`,display:`inline-block`},children:n.label}),(0,I.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text-muted)`},children:r}),(0,I.jsx)(`span`,{style:{fontSize:12,fontWeight:500,color:`var(--admin-primary)`,fontFamily:`monospace`},children:e.field_path||`-`}),(0,I.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text)`,lineHeight:`1.4`,overflow:`hidden`,textOverflow:`ellipsis`},title:e.message,children:e.message.length>80?e.message.slice(0,78)+`…`:e.message}),(0,I.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`,lineHeight:`1.4`},title:e.suggestion||``,children:e.suggestion?e.suggestion.length>60?e.suggestion.slice(0,58)+`…`:e.suggestion:`-`}),(0,I.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]},e.id)}),(0,I.jsxs)(`div`,{style:{padding:`12px`,textAlign:`center`,fontSize:12,color:`var(--cg-text-muted)`},children:[`共 `,e.length,` 条告警`]})]}):(0,I.jsxs)(`div`,{className:`empty-state`,children:[(0,I.jsx)(T,{size:48,color:`var(--admin-success)`}),(0,I.jsx)(`p`,{children:`✅ 系统正常，无告警`}),(0,I.jsx)(`p`,{className:`empty-hint`,children:`督察官未发现异常`})]})}function St({agentFilter:e}){let{data:t,isLoading:n}=Ke(e),r=t?.items||[],[i,a]=(0,F.useState)(`flat`),[o,s]=(0,F.useState)(new Set),[c,l]=(0,F.useState)(null);if(n)return(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200},children:[(0,I.jsx)(ee,{size:20,className:`spin`,style:{color:`var(--cg-text-muted)`}}),(0,I.jsx)(`span`,{style:{marginLeft:8,color:`var(--cg-text-muted)`},children:`加载智能体任务...`})]});if(!r.length)return(0,I.jsxs)(`div`,{className:`empty-state`,children:[(0,I.jsx)(ne,{size:48,color:`var(--cg-text-muted)`}),(0,I.jsx)(`p`,{children:`暂无智能体任务`}),(0,I.jsx)(`p`,{className:`empty-hint`,children:`当治理守护进程运行时，任务将会出现在这里`})]});let u={BLOCKED:0,TIMEOUT:1,IN_PROGRESS:2,PENDING:3,AWAITING_INPUT:4,INSUFFICIENT_EVIDENCE:5,DEFERRED:6,COMMITTED:7},d=[...r].sort((e,t)=>(u[e.status]??99)-(u[t.status]??99)),f=new Set([`BLOCKED`,`TIMEOUT`]),p=r.filter(e=>f.has(e.status)||e.retry_count&&e.retry_count>=3),m=new Map;for(let e of r){let t=m.get(e.source_name)||[];t.push(e),m.set(e.source_name,t)}let h=e=>{s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},g=r.filter(e=>f.has(e.status)).length,_=r.filter(e=>e.status===`IN_PROGRESS`).length,v=r.filter(e=>e.status===`PENDING`).length;return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[p.length>0&&(0,I.jsxs)(`div`,{style:{padding:`8px 12px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--admin-danger-light)`,display:`flex`,alignItems:`center`,gap:8,fontSize:12},children:[(0,I.jsx)(O,{size:14,color:`var(--admin-danger)`}),(0,I.jsxs)(`span`,{style:{fontWeight:600,color:`var(--admin-danger)`},children:[p.length,` 项需要关注`]}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`—`}),p.filter(e=>f.has(e.status)).length>0&&(0,I.jsxs)(`span`,{style:{color:`var(--admin-danger)`},children:[p.filter(e=>f.has(e.status)).length,` 个失败/阻塞`]}),p.filter(e=>(e.retry_count||0)>=3&&!f.has(e.status)).length>0&&(0,I.jsxs)(`span`,{style:{color:`var(--admin-warning)`},children:[p.filter(e=>(e.retry_count||0)>=3&&!f.has(e.status)).length,` 个高重试(≥3)`]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`8px 12px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,fontSize:12,color:`var(--cg-text-muted)`},children:[(0,I.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,I.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`var(--admin-success)`,animation:`pulse 2s infinite`}}),`实时刷新中`]}),(0,I.jsxs)(`span`,{children:[`共 `,r.length,` 条`]}),g>0&&(0,I.jsxs)(`span`,{style:{color:`var(--admin-danger)`,fontWeight:600},children:[`⚠ `,g,` 异常`]}),_>0&&(0,I.jsxs)(`span`,{style:{color:`var(--admin-primary)`},children:[`🔄 `,_,` 运行中`]}),v>0&&(0,I.jsxs)(`span`,{style:{color:`var(--admin-warning)`},children:[`⏳ `,v,` 排队`]}),(0,I.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:2,background:`var(--cg-border)`,borderRadius:6,padding:2},children:[(0,I.jsx)(`button`,{onClick:()=>a(`flat`),style:{padding:`3px 10px`,fontSize:11,border:`none`,borderRadius:4,cursor:`pointer`,background:i===`flat`?`var(--cg-surface)`:`transparent`,color:i===`flat`?`var(--cg-text)`:`var(--cg-text-muted)`,fontWeight:i===`flat`?600:400,boxShadow:i===`flat`?`0 1px 2px rgba(0,0,0,0.08)`:`none`},children:`列表`}),(0,I.jsx)(`button`,{onClick:()=>a(`grouped`),style:{padding:`3px 10px`,fontSize:11,border:`none`,borderRadius:4,cursor:`pointer`,background:i===`grouped`?`var(--cg-surface)`:`transparent`,color:i===`grouped`?`var(--cg-text)`:`var(--cg-text-muted)`,fontWeight:i===`grouped`?600:400,boxShadow:i===`grouped`?`0 1px 2px rgba(0,0,0,0.08)`:`none`},children:`按数据源`})]})]}),i===`flat`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 1fr 110px 90px 72px 60px 50px 1fr 130px`,padding:`8px 12px`,fontSize:11,fontWeight:600,color:`var(--cg-text-muted)`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,position:`sticky`,top:0,zIndex:1},children:[(0,I.jsx)(`span`,{children:`#`}),(0,I.jsx)(`span`,{children:`数据源`}),(0,I.jsx)(`span`,{children:`目标字段`}),(0,I.jsx)(`span`,{children:`智能体`}),(0,I.jsx)(`span`,{children:`状态`}),(0,I.jsx)(`span`,{children:`置信度`}),(0,I.jsx)(`span`,{children:`重试`}),(0,I.jsx)(`span`,{children:`失败原因`}),(0,I.jsx)(`span`,{children:`时间`})]}),d.map((e,t)=>{let n=yt[e.status]||yt.PENDING,r=G[e.agent]||e.agent,i=W.find(t=>t.key===e.agent)?.color||`var(--cg-text-muted)`,a=f.has(e.status),o=e.retry_count||0,s=c===e.id;return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{onClick:()=>l(s?null:e.id),style:{display:`grid`,gridTemplateColumns:`40px 1fr 110px 90px 72px 60px 50px 1fr 130px`,padding:`8px 12px`,fontSize:13,color:`var(--cg-text)`,borderBottom:s?`none`:`1px solid var(--cg-bg)`,alignItems:`center`,background:s||a?`var(--cg-bg)`:t%2==0?`var(--cg-surface)`:`var(--cg-bg)`,borderLeft:a?`3px solid var(--admin-danger)`:`3px solid transparent`,transition:`background 0.1s`,cursor:`pointer`},children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:12},children:t+1}),(0,I.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,fontWeight:500},title:e.source_name,children:e.source_name.length>30?e.source_name.slice(0,28)+`…`:e.source_name}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:12},children:e.target_field}),(0,I.jsx)(`span`,{style:{fontSize:11,color:i,fontWeight:500,display:`flex`,alignItems:`center`,gap:4},children:r}),(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:600,padding:`2px 6px`,borderRadius:6,background:n.bg,color:n.color,textAlign:`center`,display:`inline-block`},children:n.label}),(0,I.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text-muted)`},children:e.confidence==null?`-`:`${Math.round(e.confidence*100)}%`}),(0,I.jsx)(`span`,{style:{fontSize:12},children:o>0?(0,I.jsxs)(`span`,{style:{padding:`1px 5px`,borderRadius:4,fontSize:10,fontWeight:600,background:o>=3?`var(--cg-bg)`:`var(--admin-warning-light)`,color:o>=3?`var(--admin-danger)`:`var(--admin-warning)`},children:[o,`×`]}):(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`-`})}),(0,I.jsx)(`span`,{style:{fontSize:11,color:a?`var(--admin-danger)`:`var(--cg-text-muted)`,fontWeight:a?500:400,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e.failure_reason||``,children:e.failure_reason?e.failure_reason.length>40?e.failure_reason.slice(0,38)+`…`:e.failure_reason:`-`}),(0,I.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.committed_at?e.committed_at.slice(0,16).replace(`T`,` `):e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]}),s&&(0,I.jsxs)(`div`,{style:{padding:`12px 16px 12px 52px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--admin-primary)`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px 24px`,fontSize:12,color:`var(--cg-text)`},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`数据源`}),(0,I.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,wordBreak:`break-all`},children:e.source_name})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`智能体 · 状态`}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,marginTop:2},children:[(0,I.jsx)(`span`,{style:{color:i,fontWeight:600},children:r}),(0,I.jsx)(`span`,{style:{fontSize:10,padding:`1px 6px`,borderRadius:4,background:n.bg,color:n.color,fontWeight:600},children:n.label}),o>0&&(0,I.jsxs)(`span`,{style:{fontSize:10,color:`var(--admin-warning)`},children:[`重试 `,o,` 次`]})]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`置信度`}),(0,I.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginTop:2},children:e.confidence==null?(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`未评估`}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{style:{width:80,height:4,borderRadius:2,background:`var(--cg-border)`},children:(0,I.jsx)(`div`,{style:{width:`${Math.round(e.confidence*100)}%`,height:`100%`,borderRadius:2,background:e.confidence>=.7?`var(--admin-success)`:e.confidence>=.4?`var(--admin-warning)`:`var(--admin-danger)`}})}),(0,I.jsxs)(`span`,{style:{fontWeight:600},children:[Math.round(e.confidence*100),`%`]})]})})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`时间线`}),(0,I.jsxs)(`div`,{style:{fontSize:11,marginTop:2},children:[(0,I.jsxs)(`div`,{children:[`创建: `,e.created_at?e.created_at.slice(0,19).replace(`T`,` `):`-`]}),e.committed_at&&(0,I.jsxs)(`div`,{children:[`提交: `,e.committed_at.slice(0,19).replace(`T`,` `)]})]})]}),e.final_value_preview&&(0,I.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`写入值预览`}),(0,I.jsx)(`div`,{style:{marginTop:2,padding:`6px 10px`,borderRadius:6,background:`var(--cg-surface)`,border:`1px solid var(--cg-border)`,fontFamily:`monospace`,fontSize:11,wordBreak:`break-all`,maxHeight:60,overflow:`auto`},children:e.final_value_preview})]}),e.failure_reason&&(0,I.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,I.jsx)(`span`,{style:{color:`var(--admin-danger)`,fontSize:10,textTransform:`uppercase`},children:`失败原因`}),(0,I.jsx)(`div`,{style:{marginTop:2,padding:`6px 10px`,borderRadius:6,background:`var(--cg-bg)`,border:`1px solid var(--admin-danger-light)`,fontSize:11,lineHeight:1.5,wordBreak:`break-all`,maxHeight:80,overflow:`auto`},children:e.failure_reason})]})]})]},e.id)})]}),i===`grouped`&&(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:Array.from(m.entries()).sort(([,e],[,t])=>{let n=+!e.some(e=>f.has(e.status)),r=+!t.some(e=>f.has(e.status));return n===r?e.filter(e=>e.status===`COMMITTED`).length/e.length-t.filter(e=>e.status===`COMMITTED`).length/t.length:n-r}).map(([e,t])=>{let n=o.has(e),r=t.length,i=t.filter(e=>e.status===`COMMITTED`).length,a=t.filter(e=>f.has(e.status)).length,s=r>0?Math.round(i/r*100):0,c=a>0,l={};for(let e of t)l[e.agent]=(l[e.agent]||0)+1;return(0,I.jsxs)(`div`,{style:{borderBottom:`1px solid var(--cg-border)`},children:[(0,I.jsxs)(`button`,{onClick:()=>h(e),style:{display:`flex`,alignItems:`center`,gap:10,padding:`10px 12px`,width:`100%`,border:`none`,background:c?`var(--admin-danger-light)`:n?`var(--cg-bg)`:`var(--cg-surface)`,borderLeft:c?`3px solid var(--admin-danger)`:`3px solid transparent`,cursor:`pointer`,textAlign:`left`,transition:`background 0.1s`},children:[(0,I.jsx)(`span`,{style:{transition:`transform 0.15s`,transform:n?`rotate(90deg)`:`rotate(0deg)`,color:`var(--cg-text-muted)`,fontSize:12},children:`▶`}),(0,I.jsx)(`span`,{style:{flex:1,fontSize:13,fontWeight:600,color:`var(--cg-text)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e,children:e}),c&&(0,I.jsxs)(`span`,{style:{fontSize:10,fontWeight:600,padding:`2px 6px`,borderRadius:4,background:`var(--cg-bg)`,color:`var(--admin-danger)`},children:[`⚠ `,a]}),(0,I.jsx)(`div`,{style:{display:`flex`,gap:3},children:Object.entries(l).map(([e,t])=>{let n=G[e]||e,r=W.find(t=>t.key===e)?.color||`var(--cg-text-muted)`;return(0,I.jsxs)(`span`,{style:{fontSize:10,padding:`1px 5px`,borderRadius:4,background:`${r}14`,color:r,fontWeight:500},children:[n,` `,t]},e)})}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,minWidth:100},children:[(0,I.jsx)(`div`,{style:{width:60,height:4,borderRadius:2,background:`var(--cg-border)`,overflow:`hidden`},children:(0,I.jsx)(`div`,{style:{width:`${s}%`,height:`100%`,borderRadius:2,background:s>=95?`var(--admin-success)`:s>=50?`var(--admin-warning)`:`var(--admin-danger)`,transition:`width 0.3s`}})}),(0,I.jsxs)(`span`,{style:{fontSize:11,fontWeight:600,minWidth:40,textAlign:`right`,color:s>=95?`var(--admin-success)`:s>=50?`var(--admin-warning)`:`var(--admin-danger)`},children:[i,`/`,r]})]})]}),n&&(0,I.jsx)(`div`,{style:{background:`var(--cg-bg)`},children:t.map((e,t)=>{let n=yt[e.status]||yt.PENDING,r=G[e.agent]||e.agent,i=W.find(t=>t.key===e.agent)?.color||`var(--cg-text-muted)`,a=f.has(e.status),o=e.retry_count||0;return(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`24px 110px 80px 72px 55px 44px 1fr 120px`,padding:`6px 12px 6px 30px`,fontSize:12,color:`var(--cg-text)`,borderBottom:`1px solid var(--cg-bg)`,alignItems:`center`,background:a||t%2==0?`var(--cg-bg)`:`var(--cg-surface)`},children:[(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10},children:t+1}),(0,I.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:e.target_field}),(0,I.jsx)(`span`,{style:{fontSize:10,color:i,fontWeight:500},children:r}),(0,I.jsx)(`span`,{style:{fontSize:10,fontWeight:600,padding:`1px 5px`,borderRadius:4,background:n.bg,color:n.color,textAlign:`center`},children:n.label}),(0,I.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.confidence==null?`-`:`${Math.round(e.confidence*100)}%`}),(0,I.jsx)(`span`,{style:{fontSize:11},children:o>0?(0,I.jsxs)(`span`,{style:{padding:`0px 4px`,borderRadius:3,fontSize:9,fontWeight:600,background:o>=3?`var(--cg-bg)`:`var(--admin-warning-light)`,color:o>=3?`var(--admin-danger)`:`var(--admin-warning)`},children:[o,`×`]}):`-`}),(0,I.jsx)(`span`,{style:{fontSize:10,color:a?`var(--admin-danger)`:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e.failure_reason||``,children:e.failure_reason?e.failure_reason.length>50?e.failure_reason.slice(0,48)+`…`:e.failure_reason:`-`}),(0,I.jsx)(`span`,{style:{fontSize:10,color:`var(--cg-text-muted)`},children:e.committed_at?e.committed_at.slice(0,16).replace(`T`,` `):e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]},e.id)})})]},e)})})]})}export{U as DataManagement};