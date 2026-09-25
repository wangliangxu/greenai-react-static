const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GovernanceReport-DPdXh4Rv.js","assets/rolldown-runtime-C0FnF6B9.js","assets/chart-vendor-C5Vqh4H_.js","assets/editor-vendor-Ch6zc3nG.js","assets/api-C6QdgyJO.js","assets/vendor-axios-BvVu_ug-.js","assets/ui-vendor-BJACYxZ2.js","assets/GovernanceReport-1I_TeBP5.css","assets/DependencyGraph-BVeOIQSE.js","assets/graph-xyflow-vendor-B86gX_yA.js","assets/graph-xyflow-vendor-CHpVij2M.css","assets/graphFallbackLayout-dVNGG5ML.js","assets/FeedbackGraph-DLbdfol_.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{c as n,l as r,s as i}from"./editor-vendor-Ch6zc3nG.js";import{p as a,u as o}from"./router-vendor-C4C_6Mfu.js";import{a as s}from"./query-vendor-KR0ej7Li.js";import{n as c,o as l}from"./api-C6QdgyJO.js";import{Ai as u,Bn as d,Br as f,Bt as p,Et as m,F as h,Fr as g,Gr as _,Jt as v,Mr as y,Qi as b,Rr as ee,Rt as x,Sn as te,T as ne,Ur as S,ar as C,bn as w,br as re,bt as ie,cr as ae,di as oe,dt as T,ei as se,et as ce,gt as E,hi as le,ht as ue,ji as de,k as D,li as O,lt as k,mi as fe,o as A,oa as pe,pi as me,pr as he,pt as ge,q as _e,qt as ve,ra as ye,s as j,si as be,sr as xe,ta as M,ui as Se,ut as Ce,vr as we,wt as Te,zi as N,zn as Ee,zr as De,zt as P}from"./ui-vendor-BJACYxZ2.js";import"./index-CE3QzMvF.js";import{t as Oe}from"./vendor-js-yaml-dMJmn1G9.js";import{n as ke,t as Ae}from"./publicationResult-CDUXWSnM.js";import{n as je,r as Me}from"./bilingual-BAihdQ31.js";import{t as Ne}from"./AiAnalysisSidebar-DWYrMJlF.js";import{t as Pe}from"./Modal-CfKwmEAE.js";import{n as F,t as Fe}from"./AdminToolbar-DlGMLpSD.js";import"./Toolbar-B1CAJCx3.js";import{t as Ie}from"./AdminSidebar-Dj_yW167.js";import"./Sidebar-D4eOJeZB.js";/* empty css                        */import{t as Le}from"./ConfirmModal-DmqdBImj.js";import{D as Re,E as ze,I as Be,L as Ve,P as He,_ as Ue,b as We,h as Ge,m as Ke,t as qe,v as Je,w as Ye,x as Xe,y as Ze}from"./adminQueries-C-W6N3Cr.js";import{t as Qe}from"./governanceQueue-C7vWtmCX.js";import{t as $e}from"./IntakeMetadataEditor-BCS23Ryi.js";import{n as et,r as tt,t as nt}from"./vendor-react-syntax-highlighter-BSCpUi_E.js";var I=e(t(),1),L=i();function rt({isOpen:e,onClose:t,onSuccess:n}){let[r,i]=(0,I.useState)(`file`),[a,o]=(0,I.useState)(``),[s,c]=(0,I.useState)(``),[l,u]=(0,I.useState)(``),d=(0,I.useRef)(!1),f=Ve(e&&r===`table`),p=Re(),m=async()=>{if(a.trim()&&!d.current){d.current=!0,c(``),u(``);try{let e=await p.mutateAsync(a.trim());c(e.message),n?.(e.source_name)}catch(e){let t=e;u(t.response?.data?.detail||t.message||`创建元数据失败，请重试`)}finally{d.current=!1}}},[h,g]=(0,I.useState)([]),[_,v]=(0,I.useState)(``),[y,b]=(0,I.useState)({}),[ee,x]=(0,I.useState)({}),{data:te}=qe(),S=(0,I.useRef)(!1),[C,w]=(0,I.useState)(!1),re=Be(),ie=(0,I.useCallback)(e=>{if(S.current)return;let t=Array.from(e.target.files||[]);g(e=>Array.from(new Map([...e,...t].map(e=>[`${e.name}-${e.size}-${e.lastModified}`,e])).values()))},[]),ae=(0,I.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),oe=(0,I.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),S.current)return;let t=Array.from(e.dataTransfer.files);g(e=>Array.from(new Map([...e,...t].map(e=>[`${e.name}-${e.size}-${e.lastModified}`,e])).values()))},[]),T=(0,I.useCallback)(e=>{g(t=>t.filter((t,n)=>n!==e))},[]),se=(0,I.useCallback)(async()=>{if(h.length===0||S.current)return;S.current=!0,w(!0);let e=!1;for(let t of h){let n=`${t.name}-${t.size}-${t.lastModified}`;if(y[n]!==`success`){b(e=>({...e,[n]:`uploading`}));try{let r=await re.mutateAsync({file:t,category:_||void 0,auto_metadata:!0});e=!0,b(e=>({...e,[n]:`success`})),x(e=>({...e,[n]:r.message||`上传成功`}))}catch(e){let t=e;b(e=>({...e,[n]:`error`})),x(e=>({...e,[n]:t.response?.data?.detail||t.message||`上传失败`}))}}}S.current=!1,w(!1),e&&n?.()},[h,_,re,n,y]),E=()=>{S.current||d.current||(o(``),c(``),u(``),g([]),b({}),x({}),t())},le=h.some(e=>y[`${e.name}-${e.size}-${e.lastModified}`]!==`success`),ue=e=>e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(2)} KB`:e<1073741824?`${(e/1048576).toFixed(2)} MB`:`${(e/1073741824).toFixed(2)} GB`;return(0,L.jsx)(Pe,{isOpen:e,onClose:E,title:`上传数据文件`,children:(0,L.jsxs)(`div`,{style:{padding:`1.5rem`},children:[(0,L.jsxs)(`div`,{role:`tablist`,"aria-label":`入库方式`,style:{display:`flex`,gap:`1rem`,marginBottom:`1.5rem`},children:[(0,L.jsx)(`button`,{role:`tab`,"aria-selected":r===`file`,disabled:C||p.isPending,onClick:()=>i(`file`),children:`上传文件`}),(0,L.jsx)(`button`,{role:`tab`,"aria-selected":r===`table`,disabled:C||p.isPending,onClick:()=>i(`table`),children:`数据库表（weather）`})]}),r===`table`?(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`p`,{children:`选择 weather 数据库中已有的表，系统会读取字段结构并创建元数据，随后在后台自动进行 AI 补全。`}),(0,L.jsx)(`label`,{htmlFor:`weather-intake-table`,children:`具体表格`}),(0,L.jsx)(`input`,{id:`weather-intake-table`,list:`weather-table-options`,value:a,disabled:p.isPending,onChange:e=>{o(e.target.value),c(``),u(``)},placeholder:`选择或输入表名`,style:{width:`100%`,margin:`0.5rem 0`,padding:`0.6rem`}}),(0,L.jsx)(`datalist`,{id:`weather-table-options`,children:f.data?.tables.map(e=>(0,L.jsx)(`option`,{value:e},e))}),f.isLoading&&(0,L.jsx)(`p`,{children:`正在读取表列表…`}),f.isError&&(0,L.jsxs)(`p`,{role:`alert`,children:[`表列表加载失败，可输入完整表名，或`,(0,L.jsx)(`button`,{onClick:()=>void f.refetch(),children:`重试`})]}),s&&(0,L.jsx)(`p`,{role:`status`,children:s}),l&&(0,L.jsx)(`p`,{role:`alert`,children:l}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,justifyContent:`flex-end`,marginTop:`1rem`},children:[(0,L.jsx)(`button`,{disabled:p.isPending,onClick:E,children:`关闭`}),(0,L.jsx)(`button`,{disabled:!a.trim()||p.isPending||!!s,onClick:()=>void m(),children:p.isPending?`正在创建…`:`创建表格元数据`})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,L.jsx)(`label`,{style:{display:`block`,marginBottom:`0.5rem`,fontWeight:500},children:`所属主题（可选，文件格式自动识别）`}),(0,L.jsxs)(`select`,{disabled:C,value:_,onChange:e=>v(e.target.value),style:{width:`100%`,padding:`0.5rem`,border:`1px solid var(--cg-border)`,borderRadius:`6px`},children:[(0,L.jsx)(`option`,{value:``,children:`自动识别`}),te?.map(e=>(0,L.jsx)(`option`,{value:e.theme_key,children:e.name},e.theme_key))]})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`0.65rem`,marginBottom:`1.5rem`,padding:`0.75rem 0.9rem`,borderRadius:`8px`,background:`var(--admin-primary-light)`,color:`var(--cg-text)`,fontSize:`0.82rem`},children:[(0,L.jsx)(ce,{size:17,style:{color:`var(--admin-primary)`,flexShrink:0,marginTop:`1px`}}),(0,L.jsx)(`span`,{children:`上传后先完成基础入库，AI 将默认在后台补全标题、摘要等元数据。入库成功后可关闭窗口，稍后刷新列表查看结果。`})]}),(0,L.jsxs)(`div`,{onDragOver:ae,onDrop:oe,style:{border:`2px dashed var(--cg-text-muted)`,borderRadius:`8px`,padding:`2rem`,textAlign:`center`,marginBottom:`1.5rem`,backgroundColor:`var(--cg-bg)`,cursor:`pointer`},children:[(0,L.jsx)(ne,{size:48,style:{color:`var(--cg-text-muted)`,marginBottom:`1rem`}}),(0,L.jsx)(`p`,{style:{margin:`0.5rem 0`,color:`var(--cg-text-muted)`},children:`拖拽文件到此处或点击选择文件`}),(0,L.jsx)(`input`,{type:`file`,multiple:!0,disabled:C,onChange:ie,style:{display:`none`},id:`file-upload-input`}),(0,L.jsx)(`label`,{htmlFor:`file-upload-input`,style:{display:`inline-block`,padding:`0.5rem 1rem`,backgroundColor:`var(--admin-primary)`,color:`white`,borderRadius:`6px`,cursor:`pointer`,marginTop:`1rem`},children:`选择文件`})]}),h.length>0&&(0,L.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,L.jsxs)(`h4`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,fontWeight:600},children:[`已选择文件 (`,h.length,`)`]}),(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:h.map((e,t)=>{let n=`${e.name}-${e.size}-${e.lastModified}`,r=y[n]||`idle`,i=ee[n];return(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,padding:`0.75rem`,backgroundColor:`var(--cg-bg)`,borderRadius:`6px`,border:`1px solid var(--cg-border)`},children:[(0,L.jsx)(we,{size:16,style:{color:`var(--cg-text-muted)`}}),(0,L.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,L.jsx)(`div`,{style:{fontWeight:500,fontSize:`0.875rem`},children:e.name}),(0,L.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:ue(e.size)}),i&&(0,L.jsxs)(`div`,{style:{fontSize:`0.75rem`,marginTop:`0.25rem`,color:r===`success`?`var(--admin-success)`:r===`error`?`var(--admin-danger)`:`var(--cg-text-muted)`},children:[r===`success`&&(0,L.jsx)(be,{size:12,style:{marginRight:`0.25rem`}}),r===`error`&&(0,L.jsx)(O,{size:12,style:{marginRight:`0.25rem`}}),i]})]}),!C&&r!==`success`&&(0,L.jsx)(`button`,{onClick:()=>T(t),style:{background:`none`,border:`none`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`0.25rem`},children:(0,L.jsx)(A,{size:16})})]},t)})})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,justifyContent:`flex-end`},children:[(0,L.jsx)(`button`,{onClick:E,disabled:C,style:{padding:`0.5rem 1rem`,border:`1px solid var(--cg-border)`,borderRadius:`6px`,backgroundColor:`var(--cg-surface)`,cursor:`pointer`},children:`关闭`}),(0,L.jsx)(`button`,{onClick:se,disabled:C||!le,style:{padding:`0.5rem 1rem`,border:`none`,borderRadius:`6px`,backgroundColor:C||!le?`var(--cg-text-muted)`:`var(--admin-primary)`,color:`white`,cursor:C||!le?`not-allowed`:`pointer`},children:C?`正在入库…`:le?`上传未成功的文件`:`入库完成`})]})]})]})})}function it({sourceName:e,metadata:t,onSuccess:n,onCancel:r}){return(0,L.jsx)($e,{isOpen:!0,sourceName:e,metadata:t,onClose:r,onSuccess:n})}var at=({isOpen:e,onClose:t,preview:n,onGoToGovernance:r,onGoToEditMetadata:i,onRegenerateMetadata:a})=>{if(!n)return null;let o=n.evaluation,s=o?.total_score??0,c=o?.governance_gaps||[],l=o?.pending_tasks||[],u=o?.deductions?.vetos||[],d=o?.deductions?.penalties||[];return(0,L.jsx)(Pe,{isOpen:e,onClose:t,title:`发布条件核对未通过`,width:`680px`,children:(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontSize:`0.9rem`},children:[(0,L.jsxs)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.08)`,border:`1px solid rgba(239, 68, 68, 0.25)`,borderRadius:`8px`,padding:`14px 16px`,display:`flex`,gap:`12px`,alignItems:`flex-start`},children:[(0,L.jsx)(v,{size:22,style:{color:`#ef4444`,flexShrink:0,marginTop:`2px`}}),(0,L.jsxs)(`div`,{style:{flex:1},children:[(0,L.jsxs)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`,marginBottom:`4px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,L.jsx)(`span`,{children:`数据源尚未满足正式发布要求`}),(0,L.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600,padding:`2px 8px`,borderRadius:`12px`,backgroundColor:s>=60?`rgba(34, 197, 94, 0.15)`:`rgba(239, 68, 68, 0.15)`,color:s>=60?`#16a34a`:`#ef4444`},children:[`当前质量得分: `,s,` 分 (及格线: 60分)`]})]}),(0,L.jsx)(`div`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.85rem`,lineHeight:1.5},children:o?.recommendation||`当前数据源未通过发布准入核对，请解决以下阻断问题后再次尝试发布。`})]})]}),c.length>0&&(0,L.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`14px 16px`},children:[(0,L.jsxs)(`div`,{style:{fontWeight:600,fontSize:`0.88rem`,color:`var(--cg-text)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,L.jsx)(D,{size:16,style:{color:`#f59e0b`}}),(0,L.jsxs)(`span`,{children:[`未达标项与治理缺口 (`,c.length,`)`]})]}),(0,L.jsx)(`ul`,{style:{margin:0,paddingLeft:`20px`,color:`var(--cg-text)`,fontSize:`0.84rem`,lineHeight:1.6},children:c.map((e,t)=>(0,L.jsx)(`li`,{style:{marginBottom:`4px`},children:e},t))})]}),l.length>0&&(0,L.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`14px 16px`},children:[(0,L.jsxs)(`div`,{style:{fontWeight:600,fontSize:`0.88rem`,color:`var(--cg-text)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,L.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,L.jsx)(T,{size:16,style:{color:`#3b82f6`}}),(0,L.jsxs)(`span`,{children:[`关联的待处理治理任务 (`,l.length,` 项)`]})]}),r&&(0,L.jsxs)(`button`,{type:`button`,onClick:()=>{t(),r()},style:{background:`none`,border:`none`,color:`#3b82f6`,cursor:`pointer`,fontSize:`0.8rem`,display:`flex`,alignItems:`center`,gap:`2px`,padding:0},children:[`前往解决 `,(0,L.jsx)(M,{size:12})]})]}),(0,L.jsx)(`div`,{style:{maxHeight:`160px`,overflowY:`auto`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`},children:(0,L.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.8rem`},children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{style:{backgroundColor:`var(--cg-bg)`,textAlign:`left`,borderBottom:`1px solid var(--cg-border)`},children:[(0,L.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`},children:`涉及字段`}),(0,L.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`},children:`任务类型`}),(0,L.jsx)(`th`,{style:{padding:`6px 10px`,color:`var(--cg-text-muted)`,width:`70px`},children:`状态`})]})}),(0,L.jsx)(`tbody`,{children:l.map((e,t)=>(0,L.jsxs)(`tr`,{style:{borderBottom:t<l.length-1?`1px solid var(--cg-border)`:`none`},children:[(0,L.jsx)(`td`,{style:{padding:`6px 10px`,fontFamily:`monospace`,color:`#2563eb`},children:e.target_field||`-`}),(0,L.jsx)(`td`,{style:{padding:`6px 10px`,color:`var(--cg-text)`},children:e.task_type||`待治理校验`}),(0,L.jsx)(`td`,{style:{padding:`6px 10px`},children:(0,L.jsx)(`span`,{style:{fontSize:`0.72rem`,padding:`2px 6px`,borderRadius:`4px`,backgroundColor:`rgba(234, 179, 8, 0.15)`,color:`#b45309`},children:e.status||`pending`})})]},t))})]})})]}),u.length>0&&(0,L.jsxs)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.05)`,border:`1px solid rgba(239, 68, 68, 0.2)`,borderRadius:`8px`,padding:`12px 16px`},children:[(0,L.jsx)(`div`,{style:{fontWeight:600,color:`#ef4444`,marginBottom:`6px`,fontSize:`0.88rem`},children:`硬性阻断否决项`}),u.map((e,t)=>(0,L.jsxs)(`div`,{style:{fontSize:`0.84rem`,color:`var(--cg-text)`,marginBottom:`4px`},children:[`• `,(0,L.jsx)(`strong`,{children:e.label||e.code}),`: `,e.detail||`未通过`]},t))]}),d.length>0&&(0,L.jsxs)(`div`,{style:{backgroundColor:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`12px 16px`},children:[(0,L.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text-muted)`,marginBottom:`8px`,fontSize:`0.85rem`},children:`质量扣分明细 (改善后可提高质量得分)`}),(0,L.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:d.map((e,t)=>(0,L.jsxs)(`div`,{style:{fontSize:`0.78rem`,padding:`4px 10px`,borderRadius:`6px`,backgroundColor:`rgba(245, 158, 11, 0.1)`,color:`#b45309`,border:`1px solid rgba(245, 158, 11, 0.25)`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,L.jsx)(`span`,{children:e.label||e.code}),e.detail&&(0,L.jsxs)(`span`,{style:{opacity:.75},children:[`(`,e.detail,`)`]})]},t))})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,alignItems:`center`,gap:`10px`,marginTop:`8px`,paddingTop:`14px`,borderTop:`1px solid var(--cg-border)`},children:[a&&(0,L.jsxs)(`button`,{type:`button`,onClick:()=>{t(),a()},style:{padding:`7px 14px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`,color:`var(--cg-text)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,L.jsx)(ce,{size:15,style:{color:`#8b5cf6`}}),`重新生成元数据`]}),i&&(0,L.jsxs)(`button`,{type:`button`,onClick:()=>{t(),i()},style:{padding:`7px 14px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-surface)`,color:`var(--cg-text)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,L.jsx)(p,{size:15,style:{color:`#3b82f6`}}),`编辑元数据`]}),r&&l.length>0&&(0,L.jsxs)(`button`,{type:`button`,onClick:()=>{t(),r()},style:{padding:`7px 16px`,borderRadius:`6px`,border:`none`,backgroundColor:`#3b82f6`,color:`#fff`,cursor:`pointer`,fontWeight:500,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.85rem`},children:[(0,L.jsx)(T,{size:15}),`解决待处理问题 (`,l.length,`)`]}),(0,L.jsx)(`button`,{type:`button`,onClick:t,style:{padding:`7px 16px`,borderRadius:`6px`,border:`1px solid var(--cg-border)`,backgroundColor:`var(--cg-bg)`,color:`var(--cg-text)`,cursor:`pointer`,fontSize:`0.85rem`},children:`关闭`})]})]})})};r();var ot=(0,I.lazy)(()=>n(()=>import(`./GovernanceReport-DPdXh4Rv.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))),R=(0,I.lazy)(()=>n(()=>import(`./DependencyGraph-BVeOIQSE.js`),__vite__mapDeps([8,1,2,3,9,10,11]))),st=(0,I.lazy)(()=>n(()=>import(`./FeedbackGraph-DLbdfol_.js`),__vite__mapDeps([12,1,2,3,9,10,11]))),ct=`/api/admin/governance`,lt=new Map,ut=({sourceName:e,className:t=``,onFieldSelect:n,selectedField:r,contentViewMode:i=`panorama`,onActionItemCount:a,filterLayer:o,selectedCausalField:s,onGraphDataLoad:l,selectedFeedbackField:u,onFeedbackGraphDataLoad:d})=>{let[f,p]=(0,I.useState)(null),[m,h]=(0,I.useState)(!0),[g,_]=(0,I.useState)(null),[v,y]=(0,I.useState)(null);if((0,I.useEffect)(()=>{if(!e)return;h(!0),_(null);let t=lt.get(e);t&&(p(t),h(!1)),(async()=>{try{let t=(await c.get(`${ct}/context/${encodeURIComponent(e)}/full`)).data;lt.set(e,t),p(t)}catch(e){_(e.message)}finally{h(!1)}})(),(async()=>{try{let t=(await c.get(`${ct}/tasks/${encodeURIComponent(e)}/by-layer`)).data;y(t.layers||[])}catch(e){console.error(`Failed to fetch layer data:`,e)}})()},[e]),m)return(0,L.jsxs)(`div`,{className:t,style:{padding:`12px`,color:`var(--cg-text-muted)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(w,{className:`animate-spin`,size:14}),(0,L.jsx)(`span`,{children:`加载中...`})]});if(g||!f)return(0,L.jsxs)(`div`,{className:t,style:{padding:`12px`,color:`var(--admin-danger)`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,L.jsx)(O,{size:14}),g||`无数据`]});let{background:b,review_suggestions:ee}=f;return(0,L.jsxs)(`div`,{className:t,style:{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,fontSize:`13px`,lineHeight:1.7,color:`var(--cg-text)`,padding:`12px 16px`,background:`var(--cg-bg)`,borderRadius:`6px`,border:`1px solid var(--cg-border)`},children:[b&&(0,L.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`0.5rem`},children:[(0,L.jsx)(`div`,{style:{marginBottom:`6px`},children:(0,L.jsx)(`span`,{style:{fontWeight:800,fontSize:`1.1rem`,color:`var(--cg-text)`,letterSpacing:`-0.01em`},children:b.source_name||e})}),(()=>{let e=b,t=e.governance_started_at,n=e.governance_updated_at,r=e.governance_duration_hours,i=b.task_stats??{total:0,pending:0,completed:0};return(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`12px`,fontSize:`12px`,color:`var(--cg-text-muted)`,flexWrap:`wrap`},children:[(0,L.jsx)(`span`,{style:{background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`11px`,fontWeight:600},children:b.driver}),(0,L.jsxs)(`span`,{children:[`L`,b.current_layer??0]}),(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[`任务 `,i.completed,`/`,i.total]}),i.pending>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[`待办 `,i.pending]})]}),t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[`开始 `,new Date(t).toLocaleDateString(`zh-CN`,{month:`short`,day:`numeric`})]})]}),n&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[`更新 `,new Date(n).toLocaleDateString(`zh-CN`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})]})]}),r!=null&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{children:`·`}),(0,L.jsxs)(`span`,{children:[`耗时 `,r>=24?`${Math.round(r/24)}天`:`${r}小时`]})]})]})})()]}),(i===`panorama`||i===`action`)&&(0,L.jsx)(dt,{layerData:v,viewMode:i,onActionItemCount:a,selectedField:r,filterLayer:o,onFieldClick:(e,t)=>n?.(e,t)}),i===`causal`&&(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(`div`,{style:{padding:`12px`,color:`var(--cg-text-muted)`},children:`正在加载因果图...`}),children:(0,L.jsx)(R,{sourceName:e,selectedField:s,onFieldClick:e=>n?.(e),onGraphDataLoad:l})}),i===`feedback`&&(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(`div`,{style:{padding:`12px`,color:`var(--cg-text-muted)`},children:`正在加载反馈图...`}),children:(0,L.jsx)(st,{sourceName:e,selectedField:u,onFieldClick:e=>n?.(e),onGraphDataLoad:d})}),i===`report`&&(0,L.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,L.jsx)(I.Suspense,{fallback:(0,L.jsx)(`div`,{style:{padding:`24px`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`正在载入质量报告模块...`}),children:(0,L.jsx)(ot,{sourceName:e})})})]})},z={COMPLETE:{bg:`var(--admin-success-light)`,text:`var(--admin-success)`,label:`✅`},COMMITTED:{bg:`var(--admin-success-light)`,text:`var(--admin-success)`,label:`✅`},APPROVED:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`👍`},PENDING_REVIEW:{bg:`var(--admin-warning-light)`,text:`var(--admin-warning)`,label:`⏳`},PENDING:{bg:`var(--cg-bg)`,text:`var(--cg-text-muted)`,label:`⬜`},IN_PROGRESS:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`🔄`},EXTRACTING:{bg:`var(--admin-primary-light)`,text:`var(--admin-primary)`,label:`🔄`},MISSING:{bg:`var(--admin-danger-light)`,text:`var(--admin-danger)`,label:`❌`},DEFERRED:{bg:`var(--cg-surface)`,text:`var(--cg-text-muted)`,label:`⏸️`}},dt=({layerData:e,viewMode:t=`panorama`,onActionItemCount:n,onFieldClick:r,selectedField:i,filterLayer:a})=>{let o=I.useMemo(()=>e?a==null?e:e.filter(e=>e.layer===a):null,[e,a]),s=o&&o.some(e=>e.fields.length>0||e.tasks.length>0),[c,l]=I.useState(()=>{if(!o)return new Set;let e=new Set;return o.forEach(t=>{let{stats:n}=t,r=n.total_fields>0&&n.done_fields===n.total_fields,i=n.total_fields===0&&n.total_tasks===0;!r&&!i&&e.add(t.layer)}),e}),[u,d]=I.useState(!1),f=e=>{l(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},p=I.useMemo(()=>e?e.filter(e=>{let{stats:t}=e;return t.total_fields>0&&t.done_fields===t.total_fields}):[],[e]),m=I.useMemo(()=>e?e.filter(e=>{let{stats:t}=e,n=t.total_fields>0&&t.done_fields===t.total_fields,r=t.total_fields===0&&t.total_tasks===0;return!n&&!r}):[],[e]),h=I.useMemo(()=>{let e=0;return m.forEach(t=>{t.fields.forEach(t=>{t.status!==`COMPLETE`&&t.status!==`COMMITTED`&&e++})}),e},[m]),g=I.useMemo(()=>p.reduce((e,t)=>e+t.stats.done_fields,0),[p]);I.useEffect(()=>{n?.(h)},[h,n]);let _=e=>e.status===`BLOCKED`||e.review_tier===`MUST_REVIEW`?0:e.status===`PENDING_REVIEW`||e.review_tier===`SHOULD_REVIEW`?1:e.status===`MISSING`?2:3,v=e=>e.status===`BLOCKED`||e.review_tier===`MUST_REVIEW`?{emoji:`🟠`,text:`Arbiter 待协调`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:e.status===`PENDING_REVIEW`||e.review_tier===`SHOULD_REVIEW`?{emoji:`🟡`,text:`等待人工操作`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:e.status===`MISSING`?{emoji:`🟡`,text:`待填写`,color:`var(--admin-warning)`,bg:`var(--admin-warning-light)`}:{emoji:`🟢`,text:`建议改进`,color:`var(--admin-success)`,bg:`var(--admin-success-light)`};return s?t===`action`?(0,L.jsxs)(`div`,{style:{marginTop:`1rem`},children:[(0,L.jsxs)(`h4`,{style:{margin:`0 0 0.75rem 0`,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[`🎯 待办事项`,h>0&&(0,L.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:700,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[h,` 项`]})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[p.length>0&&(0,L.jsxs)(`div`,{onClick:()=>d(!u),style:{padding:`8px 12px`,borderRadius:`8px`,border:`1px solid #bbf7d0`,background:`var(--cg-bg)`,cursor:`pointer`,userSelect:`none`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(`span`,{style:{fontSize:`0.65rem`,color:`var(--admin-success)`,transition:`transform 0.2s ease`,transform:u?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`},children:`▶`}),(0,L.jsxs)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--admin-success)`},children:[`✅ `,p.map(e=>`L${e.layer}`).join(`-`),` 全部达标 (`,g,`/`,g,`)`]})]}),u&&(0,L.jsx)(`div`,{style:{marginTop:`8px`,display:`flex`,flexDirection:`column`,gap:`4px`,marginLeft:`20px`},children:p.map(e=>{let t=c.has(`completed-${e.layer}`);return(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{onClick:t=>{t.stopPropagation(),f(`completed-${e.layer}`)},style:{display:`flex`,alignItems:`center`,gap:`6px`,cursor:`pointer`,padding:`2px 0`},children:[(0,L.jsx)(`span`,{style:{fontSize:`0.55rem`,color:`var(--cg-text-muted)`,transform:t?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,transition:`transform 0.2s`},children:`▶`}),(0,L.jsx)(`span`,{style:{fontSize:`0.8rem`},children:e.icon}),(0,L.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:600,color:`var(--admin-success)`},children:[`L`,e.layer,` `,e.name]}),(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,color:`var(--admin-success)`,background:`var(--admin-success-light)`,padding:`1px 6px`,borderRadius:`8px`,fontWeight:600},children:[e.stats.done_fields,`/`,e.stats.total_fields]})]}),t&&e.fields.length>0&&(0,L.jsx)(`div`,{style:{marginLeft:`24px`,marginTop:`4px`,fontSize:`0.75rem`,fontFamily:`ui-monospace, monospace`},children:e.fields.map(e=>(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,padding:`1px 0`,color:`var(--cg-text-muted)`},children:[(0,L.jsx)(`span`,{children:`✓`}),(0,L.jsx)(`span`,{style:{minWidth:`120px`},children:e.field_path}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.value?e.value.length>30?e.value.substring(0,27)+`...`:e.value:`—`})]},e.field_path))})]},e.layer)})})]}),m.map(e=>{let{stats:t}=e,n=e.fields.filter(e=>e.status!==`COMPLETE`&&e.status!==`COMMITTED`).sort((e,t)=>_(e)-_(t)),a=t.total_fields>0?Math.round(t.done_fields/t.total_fields*100):0,o=e.fields.some(e=>e.score!=null)?e.fields.reduce((e,t)=>e+(t.score||0),0):a;return n.length===0?null:(0,L.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:`8px`,border:`1px solid #e0e7ff`,background:`var(--cg-surface)`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:[(0,L.jsx)(`span`,{style:{fontSize:`1rem`},children:e.icon}),(0,L.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:700,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 6px`,borderRadius:`4px`,fontFamily:`ui-monospace, monospace`},children:[`L`,e.layer]}),(0,L.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--cg-text)`},children:e.name}),(0,L.jsx)(`div`,{style:{flex:1}}),(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:o>=80?`var(--admin-success)`:o>=60?`var(--admin-warning)`:`var(--admin-danger)`,background:o>=80?`var(--admin-success-light)`:o>=60?`var(--admin-warning-light)`:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[o,`分`]}),(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,padding:`2px 8px`,borderRadius:`10px`},children:[n.length,` 项待办`]})]}),(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:n.map((t,n)=>{let a=v(t),o=i===t.field_path;return(0,L.jsxs)(`div`,{onClick:()=>r?.(t.field_path,{value:t.value,layer:e.layer,status:t.status,suggestion:t.suggestion}),style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`6px 10px`,borderRadius:`6px`,border:o?`1.5px solid #6366f1`:`1px solid var(--cg-border)`,background:o?`var(--admin-primary-light)`:n%2==0?`var(--cg-surface)`:`var(--cg-bg)`,cursor:`pointer`,transition:`all 0.15s ease`,fontSize:`0.8rem`},children:[(0,L.jsx)(`span`,{style:{fontSize:`0.75rem`,width:`20px`,textAlign:`center`},children:a.emoji}),(0,L.jsx)(`code`,{style:{fontWeight:600,color:`var(--cg-text)`,fontSize:`0.8rem`,background:`var(--cg-bg)`,padding:`1px 6px`,borderRadius:`3px`},children:t.field_path}),(0,L.jsx)(`span`,{style:{fontSize:`0.7rem`,color:a.color,background:a.bg,padding:`1px 6px`,borderRadius:`8px`,fontWeight:600,whiteSpace:`nowrap`},children:a.text}),t.confidence!=null&&(0,L.jsxs)(`span`,{style:{fontSize:`0.65rem`,color:`var(--cg-text-muted)`,marginLeft:`auto`},children:[`置信度 `,(t.confidence*100).toFixed(0),`%`]})]},t.field_path)})})]},e.layer)}),h===0&&(0,L.jsx)(`div`,{style:{padding:`24px`,textAlign:`center`,color:`var(--admin-success)`,fontSize:`1rem`,fontWeight:600,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px solid #bbf7d0`},children:`🎉 所有字段均已达标，无待处理事项`})]})]}):(0,L.jsxs)(`div`,{style:{marginTop:`1rem`},children:[(0,L.jsx)(`h4`,{style:{margin:`0 0 0.75rem 0`,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:`🏗️ 治理任务进度`}),(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:o.map(e=>{let{stats:t}=e,n=t.total_fields===0&&t.total_tasks===0,r=t.total_fields>0&&t.done_fields===t.total_fields,i=t.total_fields>0?Math.round(t.done_fields/t.total_fields*100):0,a=c.has(e.layer),o=e.fields.length>0||e.tasks.length>0,s=e.fields.some(e=>e.score!=null)?e.fields.reduce((e,t)=>e+(t.score||0),0):i,l=s>=80?`var(--admin-success)`:s>=60?`var(--admin-warning)`:`var(--admin-danger)`,u=s>=80?`var(--admin-success-light)`:s>=60?`var(--admin-warning-light)`:`var(--admin-danger-light)`;return(0,L.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:`8px`,border:`1px solid ${r?`var(--admin-success-light)`:n?`var(--cg-border)`:`var(--admin-primary-light)`}`,background:r||n?`var(--cg-bg)`:`var(--cg-surface)`},children:[(0,L.jsxs)(`div`,{onClick:()=>o&&f(e.layer),style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:o?`pointer`:`default`,userSelect:`none`},children:[o&&(0,L.jsx)(`span`,{style:{fontSize:`0.65rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:a?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`},children:`▶`}),(0,L.jsx)(`span`,{style:{fontSize:`1rem`},children:e.icon}),(0,L.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:700,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 6px`,borderRadius:`4px`,fontFamily:`ui-monospace, monospace`},children:[`L`,e.layer]}),(0,L.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--cg-text)`},children:e.name}),(0,L.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:e.name_en}),(0,L.jsx)(`div`,{style:{flex:1}}),t.total_fields>0&&(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:700,color:l,background:u,padding:`2px 8px`,borderRadius:`10px`,marginRight:`4px`},children:[s,`分`]}),t.total_fields>0&&(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,fontWeight:600,color:r?`var(--admin-success)`:`var(--cg-text-muted)`,background:r?`var(--admin-success-light)`:`var(--cg-bg)`,padding:`2px 8px`,borderRadius:`10px`},children:[t.done_fields,`/`,t.total_fields]})]}),n&&(0,L.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginLeft:`28px`},children:e.description}),o&&(0,L.jsxs)(`div`,{style:{overflow:`hidden`,maxHeight:a?`2000px`:`0`,opacity:+!!a,transition:`max-height 0.25s ease, opacity 0.2s ease`,marginTop:a?`8px`:`0`},children:[t.total_fields>0&&(0,L.jsx)(`div`,{style:{height:`3px`,background:`var(--cg-border)`,borderRadius:`2px`,overflow:`hidden`,marginBottom:`8px`},children:(0,L.jsx)(`div`,{style:{height:`100%`,width:`${i}%`,background:r?`var(--admin-success)`:`var(--admin-primary)`,borderRadius:`2px`,transition:`width 0.3s ease`}})}),e.fields.length>0&&(0,L.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.75rem`,fontFamily:`ui-monospace, monospace`},children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-border)`},children:[(0,L.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600,width:`30px`},children:`#`}),(0,L.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600},children:`要素名`}),(0,L.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600},children:`要素值`}),(0,L.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`left`,color:`var(--cg-text-muted)`,fontWeight:600,minWidth:`80px`},children:`评语`}),(0,L.jsx)(`th`,{style:{padding:`4px 6px`,textAlign:`right`,color:`var(--cg-text-muted)`,fontWeight:600,width:`50px`},children:`评分`})]})}),(0,L.jsx)(`tbody`,{children:e.fields.map((t,n)=>{let r=z[t.status]||z.MISSING,i=t.value??(t.status===`COMPLETE`?`✓`:`—`),a=typeof i==`string`&&i.length>40?i.substring(0,37)+`...`:i,o=t.score??(t.confidence?Math.round(t.confidence*100):null);t.score!=null&&t.score;let s=t.children&&t.children.length>0,l=`${e.layer}-${t.field_path}`,u=c.has(l);return(0,L.jsxs)(I.Fragment,{children:[(0,L.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:n%2==0?`transparent`:`var(--cg-bg)`},children:[(0,L.jsx)(`td`,{style:{padding:`3px 6px`,color:`var(--cg-text-muted)`},children:n+1}),(0,L.jsxs)(`td`,{style:{padding:`3px 6px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,L.jsx)(`span`,{style:{display:`inline-block`,width:`6px`,height:`6px`,borderRadius:`50%`,background:r.bg===`var(--cg-bg)`?`var(--admin-success)`:r.bg===`var(--admin-warning-light)`?`var(--admin-warning)`:`var(--admin-danger)`,flexShrink:0}}),s&&(0,L.jsx)(`span`,{onClick:e=>{e.stopPropagation(),f(l)},style:{cursor:`pointer`,fontSize:`0.55rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:u?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,userSelect:`none`},children:`▶`}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text)`},children:t.field_path})]}),(0,L.jsx)(`td`,{style:{padding:`3px 6px`,color:(t.status,`var(--cg-text-muted)`),maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:typeof i==`string`?i:void 0,children:a==null?`—`:String(a)}),(0,L.jsx)(`td`,{style:{padding:`3px 6px`,fontSize:`0.65rem`,color:t.comment?.includes(`⚠️`)?`var(--admin-warning)`:t.comment?.includes(`✅`)?`var(--admin-success)`:`var(--cg-text-muted)`,maxWidth:`120px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:t.comment||``,children:t.comment||`—`}),(0,L.jsx)(`td`,{style:{padding:`3px 6px`,textAlign:`right`,color:o==null?`var(--cg-text-muted)`:o>=80?`var(--admin-success)`:o>=60?`var(--admin-warning)`:`var(--admin-danger)`,fontWeight:600,fontSize:`0.7rem`},children:o==null?`—`:`${o}%`})]}),s&&u&&t.children.map(n=>{let r=z[n.status]||z.MISSING,i=n.value??(n.status===`COMPLETE`?`✓`:`—`),a=typeof i==`string`&&i.length>36?i.substring(0,33)+`...`:i,o=n.children&&n.children.length>0,s=`${e.layer}-${t.field_path}-${n.field_path}`,l=c.has(s);return(0,L.jsxs)(I.Fragment,{children:[(0,L.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:`var(--cg-bg)`},children:[(0,L.jsx)(`td`,{style:{padding:`2px 6px`}}),(0,L.jsxs)(`td`,{style:{padding:`2px 6px 2px 28px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,L.jsx)(`span`,{style:{display:`inline-block`,width:`5px`,height:`5px`,borderRadius:`50%`,background:r.bg===`var(--cg-bg)`?`var(--admin-success)`:r.bg===`var(--admin-warning-light)`?`var(--admin-warning)`:`var(--admin-danger)`,flexShrink:0,opacity:.7}}),o&&(0,L.jsx)(`span`,{onClick:e=>{e.stopPropagation(),f(s)},style:{cursor:`pointer`,fontSize:`0.5rem`,color:`var(--cg-text-muted)`,transition:`transform 0.2s ease`,transform:l?`rotate(90deg)`:`rotate(0deg)`,display:`inline-block`,userSelect:`none`},children:`▶`}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:n.field_path})]}),(0,L.jsx)(`td`,{style:{padding:`2px 6px`,color:(n.status,`var(--cg-text-muted)`),fontSize:`0.75rem`,maxWidth:`200px`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:typeof i==`string`?i:void 0,children:a==null?`—`:String(a)}),(0,L.jsx)(`td`,{style:{padding:`2px 6px`,textAlign:`right`,color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:n.status===`COMPLETE`?`✓`:`—`})]}),o&&l&&n.children.map(e=>(0,L.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--cg-bg)`,background:`var(--cg-surface)`},children:[(0,L.jsx)(`td`,{style:{padding:`2px 6px`}}),(0,L.jsxs)(`td`,{style:{padding:`2px 6px 2px 48px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,L.jsx)(`span`,{style:{display:`inline-block`,width:`4px`,height:`4px`,borderRadius:`50%`,background:`var(--cg-text-muted)`,flexShrink:0,opacity:.5}}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.7rem`,fontFamily:`ui-monospace, monospace`},children:e.field_path})]}),(0,L.jsx)(`td`,{style:{padding:`2px 6px`,color:`var(--cg-text-muted)`,fontSize:`0.7rem`,fontFamily:`ui-monospace, monospace`},children:e.value??`—`}),(0,L.jsx)(`td`,{style:{padding:`2px 6px`}})]},`${t.field_path}.${n.field_path}.${e.field_path}`))]},`${t.field_path}.${n.field_path}`)})]},t.field_path)})})]}),e.tasks.length>0&&(0,L.jsxs)(`div`,{style:{marginTop:`6px`,marginLeft:`2px`,display:`flex`,flexDirection:`column`,gap:`2px`},children:[e.tasks.slice(0,5).map(e=>{let t=z[e.status]||z.PENDING,n=e.priority_class===`P0`||e.priority_class===`P1`?`var(--admin-primary)`:`var(--admin-danger)`;return(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,padding:`2px 0`},children:[(0,L.jsx)(`span`,{style:{fontFamily:`ui-monospace, monospace`,fontSize:`0.65rem`,color:n,fontWeight:600},children:e.priority_class}),(0,L.jsx)(`span`,{style:{color:t.text},children:t.label}),(0,L.jsx)(`code`,{style:{fontSize:`0.7rem`,background:`var(--cg-bg)`,padding:`1px 4px`,borderRadius:`3px`},children:e.target_field}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.65rem`},children:e.task_type}),e.role&&(0,L.jsx)(`span`,{style:{fontSize:`0.6rem`,color:`var(--admin-primary)`,background:`var(--admin-primary-light)`,padding:`1px 4px`,borderRadius:`3px`},children:e.role})]},e.id)}),e.tasks.length>5&&(0,L.jsxs)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,paddingLeft:`4px`},children:[`+`,e.tasks.length-5,` more...`]})]})]})]},e.layer)})})]}):(0,L.jsx)(`div`,{style:{marginTop:`1rem`,padding:`12px 16px`,color:`var(--cg-text-muted)`,fontSize:`0.85rem`,fontStyle:`italic`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`暂无治理任务数据，请先运行审计或执行自动推进。`})};tt.registerLanguage(`yaml`,et);var ft=e=>e?new Date(e*1e3).toLocaleString(`zh-CN`):`-`,B=e=>e==null?!1:typeof e==`string`?e.trim()!==``&&e!==`-`:Array.isArray(e)?e.length>0:typeof e==`object`?Array.isArray(e)&&e.length>0&&typeof e[0]==`object`&&`value`in e[0]?e.some(e=>e.value&&e.value.trim()!==``):Object.keys(e).length>0:!0,V=e=>{if(e==null)return`-`;if(typeof e==`boolean`)return e?`是`:`否`;if(Array.isArray(e)){if(e.length===0)return`-`;if(typeof e[0]==`object`&&`lang`in e[0]&&`value`in e[0]){let t=e,n=t.find(e=>e.lang===`zh`)?.value,r=t.find(e=>e.lang===`en`)?.value;return n||r||`-`}return e.join(`, `)}return typeof e==`object`&&e?`text`in e?V(e.text):JSON.stringify(e,null,2):String(e)},H={title:`标题`,author:`创建者/作者`,tags:`主题/标签`,description:`描述信息`,publisher:`出版/发布者`,contributors:`贡献者`,date:`日期`,data_type:`资源类型`,format:`数据格式`,id:`唯一标识符`,source:`数据来源`,language:`语言`,relation:`关联资源`,spatial:`空间范围`,license:`权利/许可`,license_url:`许可链接`,usage_terms:`使用条款`,columns:`属性列`,bands:`波段信息`,bbox:`地理边界 (BBox)`,crs:`坐标系 (CRS)`,resolution:`分辨率`,temporal:`时间跨度`,academic_narrative:`学术叙事增强`,mqm:`元数据质量 (MQM)`},pt=[`file_name`,`file_extension`,`relative_path`,`file_size_bytes`,`created_time`,`modified_time`,`accessed_time`,`category`,`category_name`];function U({sourceName:e}){let[t,n]=(0,I.useState)([]),[r,i]=(0,I.useState)(!0);return(0,I.useEffect)(()=>{e&&(async()=>{i(!0);try{let t=await c.get(`/api/admin/datasets/${e}/units`);n(Array.isArray(t.data)?t.data:[])}catch(e){console.error(`获取关联单元失败:`,e)}finally{i(!1)}})()},[e]),r?(0,L.jsx)(`div`,{className:`loading`,style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`加载关联单元...`}):t.length===0?null:(0,L.jsxs)(`div`,{className:`metadata-section card`,style:{marginTop:`1.5rem`},children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(N,{size:20}),`关联课程单元`,(0,L.jsx)(`span`,{className:`section-subtitle`,children:`Associated Curriculum Units`})]}),(0,L.jsx)(`div`,{className:`associated-units-list`,style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:t.map(e=>(0,L.jsxs)(`div`,{className:`unit-item-mini`,style:{display:`flex`,alignItems:`center`,gap:`1rem`,padding:`1rem`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px solid var(--cg-border)`},children:[(0,L.jsx)(`div`,{className:`unit-icon`,style:{width:`32px`,height:`32px`,borderRadius:`6px`,background:`var(--admin-primary-light)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--admin-primary)`},children:(0,L.jsx)(N,{size:18})}),(0,L.jsxs)(`div`,{className:`unit-info`,style:{flex:1},children:[(0,L.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`},children:e.title}),(0,L.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:[`ID: `,e.id]})]})]},e.id))})]})}function mt({file:e,onBack:t,onDownload:n,onMetadataEdited:r}){let[i,a]=(0,I.useState)(!1),[o,s]=(0,I.useState)(`yaml`),[l,d]=(0,I.useState)(!1),[f,p]=(0,I.useState)(e.publication_status===`published`?`files`:`governance`),[h,g]=(0,I.useState)(`action`),[v,b]=(0,I.useState)(null),[te,ne]=(0,I.useState)(!1),[S,C]=(0,I.useState)(null),[ie,ae]=(0,I.useState)(!1),[oe,T]=(0,I.useState)(null),[se,E]=(0,I.useState)(``),[le,de]=(0,I.useState)(null),[D,k]=(0,I.useState)(`idle`),[fe,pe]=(0,I.useState)(e.publication_status||`draft`);(0,I.useEffect)(()=>{pe(e.publication_status||`draft`)},[e.publication_status]);let me=async()=>{E(``),k(`publishing`);try{if(!await ke(e.name)){k(`idle`);return}k(`done`),pe(`published`),r(),setTimeout(()=>k(`idle`),3e3)}catch(e){e instanceof Ae?(de(e.preview),E(e.preview.evaluation?.recommendation||e.message)):E(e instanceof Error?e.message:`发布失败`),console.error(`发布失败:`,e),k(`error`),setTimeout(()=>k(`idle`),3e3)}},he=async()=>{if(window.confirm(`确定要取消发布该数据源吗？
取消发布后当前数据将暂停对外公开访问并退回治理状态，您可以继续修改元数据并重新发布。是否继续？`)){E(``),k(`unpublishing`);try{let t=new URLSearchParams({target_status:`governing`,reason:`取消发布`});await c.put(`/api/admin/data/intake/source/${encodeURIComponent(e.name)}/publication-status?${t}`),k(`idle`),pe(`governing`),r()}catch(e){console.error(`取消发布失败:`,e),E(e instanceof Error?e.message:`取消发布失败`),k(`error`),setTimeout(()=>k(`idle`),3e3)}}},_e=async()=>{if(window.confirm(`将依据当前数据结构重新生成标题、摘要等描述性元数据，并替换这些字段的现有内容。是否继续？`)){ae(!0),T(null);try{let t=await c.post(`/api/admin/governance/enrich/${encodeURIComponent(e.name)}`,{},{params:{regenerate:!0},timeout:6e5});r(),p(`metadata`);let n=t.data?.regenerated_fields?.length||0;T({tone:`success`,text:n>0?`元数据已重新生成，共更新 ${n} 个字段。`:`生成已完成，没有可更新的字段。`})}catch(e){console.error(`生成元数据失败:`,e),T({tone:`error`,text:e?.response?.data?.detail||e?.message||`元数据重新生成失败`})}finally{ae(!1)}}};(0,I.useEffect)(()=>{f===`files`&&(e.driver===`sql`||e.type===`sql`)&&!v&&(async()=>{ne(!0),C(null);try{let t=await c.get(`/api/admin/data/assets/${encodeURIComponent(e.path)}/sql-sample`,{params:{_t:Date.now()}});b(t.data)}catch(e){C(e.response?.data?.detail||e.message||`获取样例数据失败`)}finally{ne(!1)}})()},[f,e,v]);let j=String(e.metadata?.[`intake:name`]||e.name||``),M={},Se={},Te={},N={},P={};if(e.metadata){let t=Object.keys(H);Object.entries(e.metadata).forEach(([e,n])=>{e===`intake`&&n&&typeof n==`object`?M._intake=n:e.startsWith(`intake:`)?M[e]=n:t.includes(e)?Se[e]=n:pt.includes(e)?P[e]=n:e===`file_info`&&n&&typeof n==`object`?Object.assign(P,n):e===`_file_info`?Object.assign(N,n):Te[e]=n})}return(0,L.jsxs)(`div`,{className:`page-container`,children:[i?(0,L.jsx)(it,{sourceName:e.name,filePath:e.path,metadata:e.metadata||{},onSuccess:()=>{e&&r(),a(!1)},onCancel:()=>a(!1)}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Fe,{leftActions:(0,L.jsx)(F,{icon:(0,L.jsx)(ye,{size:18}),variant:`secondary`,onClick:t,children:`返回列表`}),stats:[{label:``,value:V(e.metadata?.title)===`-`?e.name:V(e.metadata?.title),icon:(0,L.jsx)(re,{size:18})}],rightActions:(0,L.jsxs)(L.Fragment,{children:[f===`metadata`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{icon:o===`yaml`?(0,L.jsx)(y,{size:18}):(0,L.jsx)(_,{size:18}),variant:`secondary`,onClick:()=>s(o===`yaml`?`visual`:`yaml`),title:o===`yaml`?`切换到结构化视图`:`切换到 YAML 视图`,children:o===`yaml`?`结构化`:`YAML`}),(0,L.jsx)(F,{icon:(0,L.jsx)(x,{size:18}),variant:`secondary`,onClick:()=>a(!0),children:`编辑`})]}),(0,L.jsx)(F,{icon:(0,L.jsx)(ee,{size:18}),variant:`secondary`,onClick:()=>n(e.path),children:`下载`}),f===`governance`&&(0,L.jsx)(F,{icon:(0,L.jsx)(m,{size:18}),variant:`secondary`,onClick:()=>{j&&Qe.enqueue(j)},title:`重新检查当前数据和元数据`,children:`重新检查`}),fe!==`published`&&(0,L.jsx)(F,{icon:(0,L.jsx)(ce,{size:18}),variant:`secondary`,onClick:_e,disabled:ie,title:`依据当前数据重新生成标题、摘要等描述性元数据`,children:ie?`重新生成中...`:`重新生成元数据`}),oe&&(0,L.jsx)(`span`,{role:oe.tone===`error`?`alert`:`status`,style:{color:oe.tone===`error`?`var(--admin-danger)`:`var(--admin-success)`,fontSize:`0.78rem`},children:oe.text}),se&&(0,L.jsxs)(`span`,{role:`alert`,style:{color:`#b91c1c`,display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.82rem`},children:[(0,L.jsx)(`span`,{children:se}),le&&(0,L.jsx)(`button`,{type:`button`,onClick:()=>de({...le}),style:{background:`none`,border:`none`,color:`#2563eb`,cursor:`pointer`,fontSize:`0.82rem`,textDecoration:`underline`,padding:0,fontWeight:500},children:`查看详情`})]}),fe===`published`?(0,L.jsx)(F,{icon:D===`unpublishing`?(0,L.jsx)(w,{size:18,style:{animation:`spin 1s linear infinite`}}):(0,L.jsx)(A,{size:18}),variant:`secondary`,onClick:he,disabled:D===`unpublishing`,title:`取消当前发布状态，退回治理中以修改元数据并准备重新发布`,style:{color:`var(--admin-warning)`,borderColor:`var(--admin-warning)`},children:D===`unpublishing`?`取消中...`:`取消发布 / 创建新版本`}):(0,L.jsx)(F,{icon:D===`publishing`?(0,L.jsx)(w,{size:18,style:{animation:`spin 1s linear infinite`}}):D===`done`?(0,L.jsx)(be,{size:18}):D===`error`?(0,L.jsx)(O,{size:18}):(0,L.jsx)(ue,{size:18}),variant:`primary`,onClick:me,disabled:D===`publishing`,title:`核对当前版本并发布`,children:D===`publishing`?`发布中...`:D===`done`?`已发布`:D===`error`?`发布失败`:`核对并发布`}),(0,L.jsx)(F,{icon:(0,L.jsx)(u,{size:18}),variant:l?`primary`:`secondary`,onClick:()=>d(!l),children:`AI 分析`})]})}),(0,L.jsxs)(`div`,{className:`detail-tabs-container`,children:[(0,L.jsxs)(`button`,{className:`detail-tab ${f===`files`?`active`:``}`,onClick:()=>p(`files`),children:[(0,L.jsx)(xe,{size:16}),` 数据概览`]}),(0,L.jsxs)(`button`,{className:`detail-tab ${f===`governance`?`active`:``}`,onClick:()=>p(`governance`),children:[(0,L.jsx)(Ce,{size:16}),` 待处理问题`]}),(0,L.jsxs)(`button`,{className:`detail-tab ${f===`metadata`?`active`:``}`,onClick:()=>p(`metadata`),children:[(0,L.jsx)(re,{size:16}),` 元数据与结构`]})]}),(0,L.jsx)(`div`,{style:{margin:`0 1rem 1rem`,padding:`10px 14px`,borderRadius:10,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`},children:fe===`published`?`当前版本已发布。创建新版本后，数据会暂时停止公开访问，重新发布后恢复。`:`处理阻断问题并保存修改；达到发布条件后，点击“核对并发布”完成最终审定。`}),(0,L.jsxs)(`div`,{className:`detail-with-sidebar ${l?`sidebar-open`:``}`,children:[(0,L.jsxs)(`div`,{className:`metadata-detail-view`,children:[f===`metadata`&&(o===`yaml`?(0,L.jsxs)(`div`,{className:`metadata-section card`,style:{padding:0,overflow:`hidden`},children:[(0,L.jsx)(`div`,{style:{padding:`1rem 1.5rem`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:(0,L.jsxs)(`h2`,{className:`section-title`,style:{margin:0,fontSize:`0.9rem`,color:`var(--cg-text-muted)`},children:[(0,L.jsx)(re,{size:16,style:{marginRight:`0.5rem`}}),`RAW METADATA (YAML)`]})}),(0,L.jsx)(`div`,{style:{maxHeight:`calc(100vh - 220px)`,overflow:`auto`},children:(0,L.jsx)(tt,{language:`yaml`,style:nt,customStyle:{margin:0,padding:`1.5rem`,fontSize:`0.875rem`,lineHeight:`1.6`,background:`#1e1e1e`,borderRadius:0},showLineNumbers:!0,lineNumberStyle:{color:`#6a737d`,paddingRight:`1em`,borderRight:`1px solid #30363d`,marginRight:`1em`,minWidth:`2em`,textAlign:`right`},children:e.raw_yaml||Oe.dump(e.metadata||{},{indent:2,lineWidth:120,noRefs:!0,sortKeys:!1})})})]}):(0,L.jsxs)(L.Fragment,{children:[(M._intake||Object.keys(M).some(e=>e!==`_intake`)||Object.keys(P).length>0||Object.keys(N).length>0)&&(0,L.jsxs)(`div`,{className:`metadata-section card intake-hierarchy`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(ve,{size:20}),`Intake 元数据`,(0,L.jsx)(`span`,{className:`section-subtitle`,children:`Intake Metadata`})]}),e.metadata?.duplicate_of&&(0,L.jsxs)(`div`,{className:`duplicate-alert-banner`,children:[(0,L.jsx)(O,{size:18}),(0,L.jsxs)(`div`,{className:`duplicate-alert-content`,children:[(0,L.jsx)(`strong`,{children:`智库提醒：检测到内容冲突`}),(0,L.jsxs)(`p`,{children:[`当前文件的物理内容（SH256 指纹）与已登记的数据源`,(0,L.jsx)(`code`,{style:{background:`rgba(0,0,0,0.1)`,padding:`0 4px`,borderRadius:`3px`},children:e.metadata.duplicate_of}),`完全一致。建议您直接使用现有记录，或删除多余的物理副本。`]})]})]}),(B(M[`intake:name`])||B(M._intake?.driver??M[`intake:driver`])||B(M._intake?.args??M[`intake:args`]))&&(0,L.jsxs)(`div`,{className:`metadata-subsection`,"data-path":`intake`,children:[(0,L.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,L.jsx)(ge,{size:16}),(0,L.jsx)(`span`,{className:`metadata-path`,children:`intake`}),(0,L.jsx)(`span`,{className:`metadata-path-desc`,children:`数据源与驱动`})]}),(0,L.jsxs)(`div`,{className:`metadata-grid`,children:[B(M[`intake:name`])&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`数据源名称`,(0,L.jsx)(`span`,{className:`field-key`,children:`intake.name / intake:name`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(M[`intake:name`])})]}),B(M._intake?.driver??M[`intake:driver`])&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`驱动`,(0,L.jsx)(`span`,{className:`field-key`,children:`intake.driver`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(M._intake?.driver??M[`intake:driver`])})]}),B(M._intake?.args??M[`intake:args`])&&(0,L.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`参数`,(0,L.jsx)(`span`,{className:`field-key`,children:`intake.args`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(M._intake?.args??M[`intake:args`])})]})]})]}),(()=>{let t={file_name:P.file_name??N.file_name,file_extension:P.file_extension??N.file_extension,relative_path:P.relative_path??N.relative_path,file_size_bytes:P.file_size_bytes??N.file_size_bytes,created_time:P.created_time??N.created_time,modified_time:P.modified_time??N.modified_time,accessed_time:P.accessed_time??N.accessed_time,category:P.category??N.category,category_name:P.category_name??N.category_name};return B(t.file_name??e.name)||B(t.file_extension??e.type)||B(t.relative_path??e.path)||t.file_size_bytes!=null||t.created_time!=null||t.modified_time!=null||t.accessed_time!=null||B(t.category_name??t.category??e.theme)?(0,L.jsxs)(`div`,{className:`metadata-subsection metadata-subsection-nested`,"data-path":`metadata`,children:[(0,L.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,L.jsx)(we,{size:16}),(0,L.jsx)(`span`,{className:`metadata-path`,children:`metadata`}),(0,L.jsx)(`span`,{className:`metadata-path-desc`,children:`文件信息（已平铺到 metadata 顶层，不再使用 file_info）`})]}),(0,L.jsxs)(`div`,{className:`metadata-grid`,children:[(t.file_name??e.name)!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`文件名`,(0,L.jsx)(`span`,{className:`field-key`,children:`file_name`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t.file_name??e.name)})]}),(t.file_extension??e.type)!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`文件扩展名`,(0,L.jsx)(`span`,{className:`field-key`,children:`file_extension`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t.file_extension??e.type)})]}),(t.relative_path??e.path)!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`相对路径`,(0,L.jsx)(`span`,{className:`field-key`,children:`relative_path`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t.relative_path??e.path)})]}),(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`文件大小`,(0,L.jsx)(`span`,{className:`field-key`,children:`file_size_bytes`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:(t=>t==null?e.size_formatted??`-`:`${(Number(t)/1024).toFixed(2)} KB (${t} 字节)`)(t.file_size_bytes)})]}),t.created_time!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`创建时间`,(0,L.jsx)(`span`,{className:`field-key`,children:`created_time`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:ft(t.created_time)})]}),t.modified_time!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`修改时间`,(0,L.jsx)(`span`,{className:`field-key`,children:`modified_time`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:ft(t.modified_time)})]}),t.accessed_time!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`访问时间`,(0,L.jsx)(`span`,{className:`field-key`,children:`accessed_time`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:ft(t.accessed_time)})]}),(t.category_name??t.category??e.theme)!=null&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`数据分类`,(0,L.jsx)(`span`,{className:`field-key`,children:`category / category_name`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t.category_name??t.category??e.theme)})]})]})]}):null})(),(()=>{let e=Object.entries(M).filter(([e,t])=>e!==`_intake`&&![`intake:name`,`intake:driver`,`intake:args`].includes(e)&&B(t));return e.length===0?null:(0,L.jsxs)(`div`,{className:`metadata-subsection metadata-subsection-other`,"data-path":`intake:*`,children:[(0,L.jsxs)(`h3`,{className:`metadata-subsection-title`,children:[(0,L.jsx)(`span`,{className:`metadata-path`,children:`intake:*`}),(0,L.jsx)(`span`,{className:`metadata-path-desc`,children:`其它数据源参数`})]}),(0,L.jsx)(`div`,{className:`metadata-grid`,children:e.map(([e,t])=>(0,L.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[e.replace(`intake:`,``),(0,L.jsx)(`span`,{className:`field-key`,children:e})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t)})]},e))})]})})()]}),Object.values(Se).some(e=>B(e))&&(0,L.jsxs)(`div`,{className:`metadata-section card`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(De,{size:20}),`基本业务元数据`,(0,L.jsx)(`span`,{className:`section-subtitle`,children:`Basic Context Metadata`})]}),(0,L.jsx)(`div`,{className:`metadata-grid`,children:Object.entries(Se).filter(([e])=>B(Se[e])).map(([e,t])=>(0,L.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[H[e]||e,(0,L.jsx)(`span`,{className:`field-key`,children:e})]}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t)})]},e))})]}),(B(e.metadata?.academic_narrative)||B(e.metadata?.mqm))&&(0,L.jsxs)(`div`,{className:`metadata-section card smart-enhancement-section`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(ce,{size:20,style:{color:`var(--admin-primary)`}}),`智能增强信息`,(0,L.jsx)(`span`,{className:`section-subtitle`,children:`AI Enhanced Insights`})]}),B(e.metadata?.mqm)&&(0,L.jsxs)(`div`,{className:`mqm-container`,style:{marginBottom:`1.5rem`,padding:`1.25rem`,background:`var(--cg-bg)`,borderRadius:`12px`,border:`1px solid var(--cg-border)`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginBottom:`1rem`},children:[(0,L.jsx)(`div`,{style:{padding:`6px`,background:`var(--admin-primary-light)`,borderRadius:`8px`},children:(0,L.jsx)(Ce,{size:20,style:{color:`var(--admin-primary)`}})}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`span`,{style:{fontWeight:600,fontSize:`1rem`,color:`var(--cg-text)`},children:[`元数据质量评分 (MQM): `,(e.metadata?.mqm).score||`-`]}),(0,L.jsxs)(`span`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginLeft:`0.75rem`},children:[`最后评估时间: `,new Date((e.metadata?.mqm).evaluated_at).toLocaleDateString()]})]})]}),(e.metadata?.mqm).narrative&&(0,L.jsx)(`div`,{className:`narrative-content`,style:{lineHeight:1.6,color:`var(--cg-text)`,fontStyle:`italic`,background:`var(--cg-surface)`,padding:`1.25rem`,borderLeft:`4px solid var(--admin-primary)`,borderRadius:`4px`},children:(e.metadata?.mqm).narrative})]}),B(e.metadata?.academic_narrative)&&(0,L.jsx)(`div`,{className:`narrative-container`,children:(()=>{let t=e.metadata?.academic_narrative,n=Array.isArray(t)?t.find(e=>e.lang===`zh`)?.value||t[0].value:t;return(0,L.jsx)(`div`,{className:`narrative-content`,style:{lineHeight:1.6,color:`var(--cg-text)`,fontStyle:`italic`,background:`#fdfcfe`,padding:`1.25rem`,borderLeft:`4px solid var(--admin-primary)`,borderRadius:`4px`},children:n})})()})]}),Object.entries(Te).some(([e,t])=>!e.startsWith(`_`)&&![`academic_narrative`,`mqm`].includes(e)&&B(t))&&(0,L.jsxs)(`div`,{className:`metadata-section card`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(Ee,{size:20}),`拓展/底层元数据`]}),(0,L.jsx)(`div`,{className:`metadata-grid`,children:Object.entries(Te).filter(([e])=>!e.startsWith(`_`)&&![`academic_narrative`,`mqm`].includes(e)&&B(Te[e])).map(([e,t])=>(0,L.jsxs)(`div`,{className:`metadata-field ${typeof t==`object`?`full-width`:``}`,children:[(0,L.jsx)(`span`,{className:`field-label`,children:e}),(0,L.jsx)(`span`,{className:`field-value`,children:V(t)})]},e))})]}),(0,L.jsx)(U,{sourceName:e.name})]})),f===`governance`&&(0,L.jsxs)(`div`,{className:`metadata-section card`,style:{padding:`1rem`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,background:`var(--cg-bg)`,padding:`4px`,borderRadius:`8px`,border:`1px solid var(--cg-border)`},children:[(0,L.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:h===`action`?`var(--admin-primary-light)`:`transparent`,color:h===`action`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>g(`action`),children:`必须修复`}),(0,L.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:h===`panorama`?`var(--admin-primary-light)`:`transparent`,color:h===`panorama`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>g(`panorama`),children:`全部检查`}),(0,L.jsx)(`button`,{style:{padding:`6px 12px`,fontSize:`0.85rem`,fontWeight:600,borderRadius:`6px`,border:`none`,cursor:`pointer`,background:h===`report`?`var(--admin-primary-light)`:`transparent`,color:h===`report`?`var(--admin-primary)`:`var(--cg-text-muted)`},onClick:()=>g(`report`),children:`质量报告`})]}),j?(0,L.jsx)(ut,{sourceName:j,contentViewMode:h,onActionItemCount:e=>console.log(`Action items:`,e)}):(0,L.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`},children:`无法获取有效的 Intake 数据源名称`})]}),f===`files`&&(0,L.jsxs)(L.Fragment,{children:[e.metadata?.duplicate_of&&(0,L.jsxs)(`div`,{className:`duplicate-alert-banner`,style:{marginBottom:`1.5rem`},children:[(0,L.jsx)(O,{size:18}),(0,L.jsxs)(`div`,{className:`duplicate-alert-content`,children:[(0,L.jsx)(`strong`,{children:`智库提醒：检测到内容冲突`}),(0,L.jsxs)(`p`,{children:[`当前文件的物理内容（SH256 指纹）与已登记的数据源`,(0,L.jsx)(`code`,{style:{background:`rgba(0,0,0,0.1)`,padding:`0 4px`,borderRadius:`3px`},children:e.metadata.duplicate_of}),`完全一致。建议您直接使用现有记录，或删除多余的物理副本。`]})]})]}),e.driver===`sql`||e.type===`sql`?(()=>{let t=e.args?.uri||e.args?.urlpath||(e.path?.startsWith(`sql://`)?e.path:``)||``,n=e.args?.table||(t?t.replace(/^sql:\/\//,``):e.path?.startsWith(`sql://`)?e.path.replace(/^sql:\/\//,``):``),r=e.args?.sql_expr||v?.sql_expr||(n?`SELECT * FROM ${n}`:``),i=!e.args?.sql_expr,a=e.args?.index||e.args?.index_col||``;return(0,L.jsxs)(`div`,{className:`metadata-section card`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(De,{size:20}),`SQL 虚拟数据源配置`]}),(0,L.jsxs)(`div`,{className:`metadata-grid`,children:[(0,L.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`连接 URI `,(0,L.jsx)(`span`,{className:`field-key`,children:`uri / urlpath`})]}),(0,L.jsx)(`span`,{className:`field-value`,style:{wordBreak:`break-all`},children:t||`-`})]}),n&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`目标表名 `,(0,L.jsx)(`span`,{className:`field-key`,children:`table`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:n})]}),r&&(0,L.jsxs)(`div`,{className:`metadata-field full-width`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`SQL 表达式 `,(0,L.jsx)(`span`,{className:`field-key`,children:`sql_expr`}),i&&(0,L.jsx)(`span`,{style:{marginLeft:`8px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,fontWeight:`normal`},children:`(默认全表查询)`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:(0,L.jsx)(`pre`,{style:{background:`var(--cg-bg)`,border:`1px solid var(--cg-border-light)`,padding:`12px`,borderRadius:`6px`,overflowX:`auto`,margin:`4px 0 0 0`,whiteSpace:`pre-wrap`},children:r})})]}),a&&(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`索引列 `,(0,L.jsx)(`span`,{className:`field-key`,children:`index`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:a})]}),(0,L.jsxs)(`div`,{className:`metadata-field`,children:[(0,L.jsxs)(`span`,{className:`field-label`,children:[`数据总量 `,(0,L.jsx)(`span`,{className:`field-key`,children:`row_count`})]}),(0,L.jsx)(`span`,{className:`field-value`,children:v?.total??e.metadata?.row_count??e.metadata?.stats?.global?.row_count??`-`})]})]}),(0,L.jsxs)(`div`,{style:{marginTop:`2rem`},children:[(0,L.jsxs)(`h3`,{style:{fontSize:`1rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`1rem`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,L.jsx)(De,{size:18}),`样例数据`]}),te?(0,L.jsxs)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`},children:[(0,L.jsx)(m,{size:24,className:`spin`,style:{margin:`0 auto 1rem`,display:`block`,opacity:.5}}),`正在获取样例数据...`]}):S?(0,L.jsxs)(`div`,{style:{padding:`1.5rem`,color:`var(--admin-danger)`,background:`var(--admin-danger-light)`,borderRadius:`8px`,border:`1px solid var(--admin-danger)`,display:`flex`,alignItems:`flex-start`,gap:`0.75rem`},children:[(0,L.jsx)(O,{size:20,style:{flexShrink:0,marginTop:`2px`}}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.25rem`},children:`样例数据获取失败`}),(0,L.jsx)(`div`,{style:{fontSize:`0.875rem`},children:S})]})]}):v&&v.data.length>0?(0,L.jsx)(`div`,{style:{overflowX:`auto`,border:`1px solid var(--cg-border)`,borderRadius:`8px`,background:`var(--cg-surface)`},children:(0,L.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,L.jsx)(`thead`,{children:(0,L.jsx)(`tr`,{children:v.columns.map(e=>(0,L.jsx)(`th`,{style:{padding:`0.75rem 1rem`,textAlign:`left`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,fontWeight:600,color:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:e},e))})}),(0,L.jsx)(`tbody`,{children:v.data.map((e,t)=>(0,L.jsx)(`tr`,{style:{borderBottom:`1px solid var(--cg-border-light)`},children:v.columns.map(t=>(0,L.jsx)(`td`,{style:{padding:`0.75rem 1rem`,color:`var(--cg-text)`,whiteSpace:`nowrap`,maxWidth:`300px`,overflow:`hidden`,textOverflow:`ellipsis`},children:e[t]===null?(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontStyle:`italic`},children:`null`}):String(e[t])},t))},t))})]})}):(0,L.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`暂无样例数据`})]})]})})():e.files&&e.files.length>0?(0,L.jsxs)(`div`,{className:`metadata-section card`,children:[(0,L.jsxs)(`h2`,{className:`section-title`,children:[(0,L.jsx)(xe,{size:20}),`文件列表 (`,e.file_count||e.files.length,`)`]}),(0,L.jsxs)(`div`,{className:`file-list-detail`,children:[e.files.map((e,t)=>(0,L.jsxs)(`div`,{className:`file-item-detail`,children:[(0,L.jsx)(we,{size:16}),(0,L.jsx)(`span`,{className:`file-name`,children:e.name}),(0,L.jsx)(`span`,{className:`file-type`,children:e.type}),(0,L.jsx)(`span`,{className:`file-size`,children:e.size_formatted})]},t)),e.file_count>e.files.length&&(0,L.jsxs)(`div`,{className:`file-item-more`,children:[`还有 `,e.file_count-e.files.length,` 个文件未显示`]})]})]}):(0,L.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`,borderRadius:`8px`,border:`1px dashed var(--cg-border)`},children:`该数据源未包含物理切片文件`})]})]}),l&&(0,L.jsx)(`div`,{className:`ai-sidebar-container`,children:(0,L.jsx)(Ne,{sourceName:j,onClose:()=>d(!1)})})]}),(0,L.jsx)(`style`,{children:`
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
        `})]}),(0,L.jsx)(at,{isOpen:!!le,onClose:()=>de(null),preview:le,onGoToGovernance:()=>p(`governance`),onGoToEditMetadata:()=>a(!0),onRegenerateMetadata:_e})]})}function ht({searchQuery:e,category:t,fileType:n}){return{q:e,category:t,file_type:n,page:1,limit:1e4}}function gt({currentPage:e,pageSize:t,governanceStatusFilter:n,governanceReviewFilter:r,governancePublishableFilter:i,publishingMode:a,publishingFilter:o,isGovernanceDriven:s,governanceKeyword:c,shouldUseGovernanceScopeArrays:l,governanceQuerySourceNames:u,governanceQueryFilePaths:d,isSearchMode:f,selectedCategory:p,fileType:m,sortField:h,sortOrder:g,isGovernanceSort:_,mapSortField:v}){return{page:s?e:1,page_size:s?t:Math.max(u.length,1),status:n===`all`?void 0:n,review_status:r===`all`?void 0:r,publishable:i===`all`?void 0:i===`true`,published:a&&o?o===`published`:void 0,keyword:s&&c?c:void 0,source_names:l?u:void 0,file_paths:l?d:void 0,driver:!f&&p?p:void 0,file_type:f?m:void 0,sort_by:s?v(h):void 0,sort_order:_?g:`desc`}}var _t={csv:{label:`CSV 表格`,icon:`📊`},excel:{label:`Excel 工作簿`,icon:`📗`},ods:{label:`ODS 表格`,icon:`📋`},json:{label:`JSON 数据`,icon:`🔤`},nested_json:{label:`嵌套 JSON`,icon:`🔗`},netcdf4:{label:`NetCDF 科学网格`,icon:`🌐`},rasterio:{label:`GeoTIFF 栅格影像`,icon:`🛰️`},geopandasfile:{label:`GIS 矢量地理`,icon:`🗺️`},sql:{label:`SQL 关系数据库`,icon:`🗄️`},image:{label:`教学插图/图片`,icon:`🖼️`},video:{label:`示范视频`,icon:`🎬`},audio:{label:`教学音频`,icon:`🎵`},document:{label:`学术/技术文档 (PDF)`,icon:`📄`},textfiles:{label:`纯文本文件`,icon:`📝`},wmo_normals:{label:`WMO 气候标准值`,icon:`🌡️`},metadata_dict:{label:`元数据字典`,icon:`📋`},dictionary:{label:`配置字典`,icon:`📖`},annotation:{label:`标注数据`,icon:`🏷️`}};function W(){let e=o(),t=s(),[n]=a(),[r,i]=(0,I.useState)(null),[l,u]=(0,I.useState)(null),[f,p]=(0,I.useState)(()=>Qe.getStatuses()),m=(0,I.useRef)(()=>{});(0,I.useEffect)(()=>{Qe.setRefetchCallback(()=>{m.current&&m.current()});let e=Qe.subscribe(e=>{p(e)});return()=>{e(),Qe.setRefetchCallback(()=>{})}},[]);let _=(0,I.useCallback)(async e=>{Qe.enqueue(e)},[]),v=(0,I.useCallback)(e=>{let t=Me(),n=t===`zh`?`en`:`zh`,r=je(e,t),i=je(e,n);return!i||i===r?null:i},[]),[y,ee]=(0,I.useState)({}),[x,ie]=(0,I.useState)({}),[T,ue]=(0,I.useState)({}),[D,ge]=(0,I.useState)(null),[ve,ye]=(0,I.useState)(!1),[j,M]=(0,I.useState)(n.get(`q`)||``),[Ce,we]=(0,I.useState)(n.get(`q`)||``),[Ee]=(0,I.useState)({});(0,I.useEffect)(()=>{let e=setTimeout(()=>{we(j)},300);return()=>clearTimeout(e)},[j]);let P=!!Ce.trim(),Oe=`right`,[ke,Ae]=(0,I.useState)(()=>{if(typeof window>`u`)return!0;let e=window.localStorage.getItem(`admin-data-sidebar-visible`);return e===null||e===`true`}),[Ne,Pe]=(0,I.useState)(null),[Re,Be]=(0,I.useState)(!1),[Ve,Ge]=(0,I.useState)(new Set),[qe,$e]=(0,I.useState)(!1),[et,tt]=(0,I.useState)(null),[nt,it]=(0,I.useState)(!1),[at,ot]=(0,I.useState)(null),[R,st]=(0,I.useState)(`scientific`),[ct,lt]=(0,I.useState)(!1),[ut,z]=(0,I.useState)(`all`),[dt,ft]=(0,I.useState)(`all`),[B,V]=(0,I.useState)(`all`),[H,pt]=(0,I.useState)(`all`),[U,W]=(0,I.useState)(null),[G,K]=(0,I.useState)(`desc`),[vt,q]=(0,I.useState)(null),[xt,St]=(0,I.useState)(`bottom`),Ct=(0,I.useRef)(null),[wt,Tt]=(0,I.useState)(null),[Et,Dt]=(0,I.useState)(null),[Ot,kt]=(0,I.useState)([]),[At,J]=(0,I.useState)(1);(0,I.useEffect)(()=>{let e=n.get(`q`);e!=null&&(M(e),we(e))},[n]);let jt=(e,t)=>{if(t.stopPropagation(),vt===e){q(null);return}let n=t.currentTarget.getBoundingClientRect(),r=Ct.current?.getBoundingClientRect(),i=r?r.bottom:window.innerHeight,a=r?r.top:0,o=i-n.bottom,s=n.top-a;St(o<220&&s>o?`top`:`bottom`),q(e)};(0,I.useEffect)(()=>{let e=()=>q(null);return document.addEventListener(`click`,e),window.addEventListener(`resize`,e),()=>{document.removeEventListener(`click`,e),window.removeEventListener(`resize`,e)}},[]);let{data:Mt,isLoading:Nt}=Ue(R),{data:Y,isLoading:Pt,error:Ft,refetch:X}=Ye({page:At,limit:20,q:Ce.trim(),scope:R,driver:dt===`all`?r||``:dt,theme:B===`all`?``:B,publication:ut===`all`?qe&&et?et===`published`?`published`:`draft`:``:ut,days:{all:0,"7d":7,"30d":30,"90d":90,"1y":365}[H],sort_by:U||`modified`,sort_order:G});(0,I.useEffect)(()=>{typeof window<`u`&&window.localStorage.removeItem(`admin-data-sidebar-position`)},[]),(0,I.useEffect)(()=>{m.current=X},[X]);let{data:It}=Ze(),Lt=We(),Rt=(0,I.useCallback)(async e=>{if(window.confirm(`将依据当前数据重新生成标题、摘要等描述性元数据，并替换这些字段的现有内容。是否继续？`)){ie(t=>({...t,[e]:`running`}));try{await c.post(`/api/admin/governance/enrich/${encodeURIComponent(e)}`,{},{params:{regenerate:!0},timeout:6e5}),ie(t=>({...t,[e]:`done`})),await Promise.all([X(),t.invalidateQueries({queryKey:[`governanceSourceOverviews`]})]),window.setTimeout(()=>{ie(t=>{let n={...t};return delete n[e],n})},3e3)}catch(t){console.error(`重新生成元数据失败 [${e}]`,t),ie(t=>({...t,[e]:`error`}))}}},[t,X]),zt=(0,I.useCallback)(async e=>{if(window.confirm(`确定要取消发布数据源「${e}」吗？\n取消发布后该数据将进入治理状态（暂停对外开放），您可以继续修改元数据并重新发布。`)){ue(t=>({...t,[e]:`unpublishing`}));try{let n=new URLSearchParams({target_status:`governing`,reason:`取消发布`});await c.put(`/api/admin/data/intake/source/${encodeURIComponent(e)}/publication-status?${n}`),ue(t=>({...t,[e]:`done`})),await Promise.all([X(),t.invalidateQueries({queryKey:[`governanceSourceOverviews`]}),t.invalidateQueries({queryKey:[`publishingStats`]})]),window.setTimeout(()=>{ue(t=>{let n={...t};return delete n[e],n})},3e3)}catch(t){console.error(`取消发布失败 [${e}]`,t),ue(t=>({...t,[e]:`error`})),alert(t instanceof Error?t.message:`取消发布失败，请稍后重试`),window.setTimeout(()=>{ue(t=>{let n={...t};return delete n[e],n})},3e3)}}},[t,X]),Bt=(0,I.useMemo)(()=>ht({searchQuery:j,category:Ee.category,fileType:Ee.file_type}),[Ee.category,Ee.file_type,j]),Vt=Pt,[Ht,Ut]=(0,I.useState)(`idle`),Wt=(0,I.useRef)(!1),{data:Gt,refetch:Kt}=Je(),qt=He();(0,I.useEffect)(()=>{if(Ht!==`scanning`)return;let e=setInterval(()=>Kt(),2e3);return()=>clearInterval(e)},[Ht,Kt]),(0,I.useEffect)(()=>{Ht===`scanning`&&Gt&&(Gt.is_scanning&&(Wt.current=!0),Wt.current&&!Gt.is_scanning&&(Wt.current=!1,setTimeout(()=>Ut(`deduping`),0),qt.mutate(void 0,{onSuccess:e=>{Pe(e),Be(!0),e.groups&&Ge(new Set(e.groups.map(e=>e.sha256))),X(),Ut(`idle`)},onError:()=>Ut(`idle`)})))},[Ht,Gt,qt,X]);let Jt=e=>{Ge(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},Yt=e=>e?e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`:`-`,Xt=e=>e===`PASSED`?`通过`:e===`WARNING`?`警告`:`未通过`,Zt=e=>e===`PASSED`?{background:`var(--admin-success-light)`,color:`var(--admin-success)`}:e===`WARNING`?{background:`var(--admin-warning-light)`,color:`var(--admin-warning)`}:{background:`var(--admin-danger-light)`,color:`var(--admin-danger)`},Qt=e=>e?`建议发布`:`暂不发布`;(0,I.useCallback)(e=>e===`governance_status`?`治理状态`:e===`publish_recommend`?`发布建议`:e===`governance_score`?`治理评分`:e===`governance_updated_at`?`治理更新时间`:null,[]);let $t=e=>{let t=`/api/admin/data/download/${e}`;window.open(t,`_blank`)},en=e=>{switch(e){case`data`:return(0,L.jsx)(re,{className:`icon`,size:18});case`dataset`:return(0,L.jsx)(De,{className:`icon`,size:18});case`image`:return(0,L.jsx)(d,{className:`icon`,size:18});default:return(0,L.jsx)(xe,{className:`icon`,size:18})}},tn=(0,I.useCallback)(e=>{st(`scientific`),i(null);let n=e||``;M(n),we(n),z(`all`),ft(`all`),V(`all`),pt(`all`),W(`modified`),K(`desc`),J(1),t.invalidateQueries({queryKey:[`dataFiles`]}),ye(!1)},[t]),nn=(0,I.useCallback)(()=>{Ae(!1),typeof window<`u`&&window.localStorage.setItem(`admin-data-sidebar-visible`,`false`)},[]),rn=(0,I.useCallback)(()=>{it(!1),$e(!1),Ae(!0),typeof window<`u`&&window.localStorage.setItem(`admin-data-sidebar-visible`,`true`)},[]),an=(0,I.useCallback)(()=>{X()},[X]),on=(0,I.useCallback)(()=>{if(!U){W(`name`),K(`asc`);return}K(e=>e===`asc`?`desc`:`asc`)},[U]),sn=(0,I.useCallback)(e=>{if(J(1),U===e){K(e=>e===`asc`?`desc`:`asc`);return}W(e),K(`asc`)},[U]);(0,I.useCallback)(e=>{if(J(1),e===`none`){W(null),K(`asc`);return}if(W(e),e===`governance_score`||e===`governance_updated_at`){K(`desc`);return}K(`asc`)},[]);let cn=(0,I.useCallback)(e=>e===`governance_status`?`overall_status`:e===`publish_recommend`?`recommend_publish`:e===`governance_score`?`score`:`updated_at`,[]),ln=(0,I.useCallback)((e,t)=>{let n=e;return n?.response?.data?.detail||n?.response?.data?.message||n?.message||t},[]),un=(0,I.useCallback)(async e=>{ee(t=>({...t,[e]:`auditing`}));try{let n=await t.fetchQuery({queryKey:[`governanceSourceOverview`,e],queryFn:()=>Ke(e),staleTime:3e4});ee(t=>({...t,[e]:`done`})),ge(n),setTimeout(()=>{ee(t=>({...t,[e]:`idle`}))},3e3)}catch(t){let n=ln(t,`治理总览加载失败，请重试。`);console.error(`治理总览加载失败:`,t),ee(t=>({...t,[e]:`error`})),alert(n),setTimeout(()=>{ee(t=>({...t,[e]:`idle`}))},3e3)}},[ln,t]),dn=(0,I.useCallback)(e=>{kt(t=>t.includes(e)?t:[...t,e])},[]),fn=(0,I.useCallback)(e=>{kt(t=>t.filter(t=>t!==e))},[]),pn=(0,I.useCallback)(e=>{t.setQueriesData({queryKey:[`dataFiles`]},t=>{if(!t)return t;let n=t.files.filter(t=>t.name!==e);return n.length===t.files.length?t:{...t,files:n,total:typeof t.total==`number`?Math.max(0,t.total-1):t.total}}),t.setQueryData([`searchDataFiles`,Bt],t=>{if(!t)return t;let n=t.results.filter(t=>t.name!==e);return n.length===t.results.length?t:{...t,results:n,total:typeof t.total==`number`?Math.max(0,t.total-1):t.total}})},[t,Bt]),mn=(0,I.useCallback)(e=>{Tt(null),Dt(e),dn(e),Lt.mutate(e,{onSuccess:()=>{Dt(null),u(t=>t?.name===e?null:t),pn(e)},onError:t=>{let n=ln(t,`移入回收站失败，请重试。`);console.error(`移入回收站失败:`,n,t),Dt(null),fn(e),alert(n)}})},[Lt,ln,dn,pn,fn]),hn=(0,I.useMemo)(()=>(0,L.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`},children:(0,L.jsx)(`button`,{className:`admin-sidebar__toggle`,onClick:nn,title:`关闭数据类型侧边栏`,children:(0,L.jsx)(A,{size:16})})}),[nn]),gn={scientific:Number(Y?.facets?.scopes?.scientific||0),tutorial:Number(Y?.facets?.scopes?.tutorial||0),literature:Number(Y?.facets?.scopes?.literature||0),all:Object.values(Y?.facets?.scopes||{}).reduce((e,t)=>e+Number(t),0)},_n=Y?.facets?.drivers||{},vn=Object.values(_n).reduce((e,t)=>e+Number(t),0),yn=(0,I.useMemo)(()=>{if(!r)return null;let e=(Mt||[]).find(e=>e.key&&String(e.key).toLowerCase()===r.toLowerCase()||e.name&&String(e.name).toLowerCase()===r.toLowerCase());return e?e.name:r},[Mt,r]),bn=Object.entries(Y?.facets?.drivers||{}).filter(([e])=>R!==`scientific`||![`image`,`video`,`audio`,`document`].includes(e.toLowerCase())).map(([e,t])=>({driver:e,count:Number(t),label:_t[e]?.label||e,icon:_t[e]?.icon||`📦`})),xn=Object.entries(Y?.facets?.themes||{}).map(([e,t])=>({key:e,name:e===`__unclassified__`?`未分类主题`:e,count:Number(t)})),Sn={published:Number(Y?.facets?.publication?.published||0),draft:Number(Y?.facets?.publication?.draft||0)},Z=(0,I.useMemo)(()=>{let e=0;return j.trim()&&e++,ut!==`all`&&e++,dt!==`all`&&e++,B!==`all`&&e++,H!==`all`&&e++,U!==null&&e++,e},[j,ut,dt,B,H,U]),Cn=(0,I.useCallback)(()=>{M(``),we(``),z(`all`),ft(`all`),V(`all`),pt(`all`),W(null),K(`desc`),J(1)},[]);(0,I.useEffect)(()=>{i(null),ft(`all`),V(`all`),J(1)},[R]);let wn=(Y?.files||[]).filter(e=>!Ot.includes(e.name)),Tn=P?Vt:Nt||Pt&&!Y,En=l?.name??null,Dn=Ne?.groups?.length??0,On=Ne?.duplicates_found??Dn,{data:kn}=ze(),An=(0,I.useMemo)(()=>kn?{total:kn.total||0,published:kn.published||0,draft:kn.draft||0}:{total:vn,published:Sn.published,draft:Sn.draft},[kn,vn,Sn.published,Sn.draft]),jn=Y?.total||0,Q=Math.max(1,Math.ceil(jn/20)),$=At,Mn=wn,Nn=($-1)*20,Pn=Mn,Fn=(0,I.useMemo)(()=>Pn.map(e=>e.name).filter(Boolean),[Pn]),In=(0,I.useMemo)(()=>Pn.map(e=>e.path).filter(Boolean),[Pn]),Ln=(0,I.useMemo)(()=>gt({currentPage:1,pageSize:Math.max(Fn.length,1),governanceStatusFilter:`all`,governanceReviewFilter:`all`,governancePublishableFilter:`all`,publishingMode:!1,publishingFilter:``,isGovernanceDriven:!1,governanceKeyword:``,shouldUseGovernanceScopeArrays:!0,governanceQuerySourceNames:Fn,governanceQueryFilePaths:In,isSearchMode:!1,selectedCategory:null,fileType:void 0,sortField:null,sortOrder:`desc`,isGovernanceSort:!1,mapSortField:cn}),[In,Fn,cn]),Rn=!nt&&Fn.length>0,{data:zn}=Xe(Ln,{enabled:Rn,staleTime:3e4}),Bn=(0,I.useMemo)(()=>(zn?.items||[]).reduce((e,t)=>(e[t.source_name]=t,e),{}),[zn]);if((0,I.useEffect)(()=>{Y&&At>Q&&setTimeout(()=>J(Q),0)},[At,Q,Y]),(0,I.useEffect)(()=>{setTimeout(()=>J(1),0)},[r,j,et,R]),l)return(0,L.jsx)(mt,{file:l,onBack:()=>u(null),onDownload:$t,onMetadataEdited:()=>{X(),c.get(`/api/admin/data/metadata/${l.path}`).then(e=>{u(t=>t?{...t,metadata:e.data.metadata,raw_yaml:e.data.raw_yaml,publication_status:e.data.publication_status??t.publication_status}:null)})}});let Vn={border:`1px solid var(--cg-border)`,background:`var(--cg-surface)`,borderRadius:`4px`,padding:`4px 8px`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,minWidth:`28px`,height:`28px`,fontSize:`0.8125rem`,color:`var(--cg-text-muted)`,transition:`all 0.15s`},Hn=nt?(0,L.jsx)(yt,{agentFilter:at,setAgentFilter:ot,position:Oe,headerActions:hn,onRefresh:an,onSort:on}):qe?(0,L.jsx)(Ie,{header:{title:`数据发布`,count:An.total,actions:hn},items:[{id:`all`,label:`全部`,icon:(0,L.jsx)(te,{size:18,style:{color:`var(--cg-text-muted)`}}),count:An.total,onClick:()=>tt(null)},{id:`published`,label:`已发布`,icon:(0,L.jsx)(be,{size:18,style:{color:`var(--admin-success)`}}),count:An.published,onClick:()=>tt(`published`)},{id:`not_ready`,label:`未达标`,icon:(0,L.jsx)(O,{size:18,style:{color:`var(--admin-warning)`}}),count:An.draft,onClick:()=>tt(`not_ready`)}],selectedId:et===null?`all`:et,onSelect:e=>{tt(e===`all`?null:String(e))},position:Oe,resizable:!0,width:280,minWidth:200,maxWidth:500,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:an,onSort:on}):(0,L.jsx)(Ie,{header:{title:`数据类型`,actions:hn},items:[{id:`all`,label:`全部数据`,icon:(0,L.jsx)(`span`,{children:`📁`}),count:R===`scientific`?gn.scientific:R===`tutorial`?gn.tutorial:R===`literature`?gn.literature:It?It.data_files.count+(It.datasets?.count||0)+It.images.count:void 0,onClick:()=>i(null)},...(Mt||[]).filter(e=>{let t=String(e.key??e.name).toLowerCase();return R===`scientific`&&[`image`,`video`,`audio`,`document`].includes(t)?!1:R===`all`||(_n[t]??0)>0}).map((e,t)=>{let n=String(e.key??e.name).toLowerCase(),r=R===`all`?e.count:_n[n]??0;return{id:e.key||t,label:e.name,icon:(0,L.jsx)(`span`,{children:e.icon}),count:r,onClick:()=>i(e.key??e.name)}})],selectedId:r===null?`all`:r,onSelect:e=>{i(e===`all`?null:String(e))},position:Oe,resizable:!0,width:280,minWidth:200,maxWidth:500,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:an,onSort:on});return(0,L.jsxs)(`div`,{className:`page-container`,children:[(0,L.jsxs)(`div`,{className:`data-management-layout`,children:[(0,L.jsxs)(`div`,{className:`data-content`,children:[(0,L.jsxs)(`div`,{className:`data-page-toolbar`,children:[(0,L.jsx)(Fe,{shortcuts:{refresh:()=>X(),upload:()=>ye(!0)},leftActions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{icon:(0,L.jsx)(ne,{size:16}),variant:`primary`,onClick:()=>ye(!0),title:`上传或登记一个新的数据源`,children:`添加数据`}),(0,L.jsxs)(`div`,{className:`data-scope-button-group`,role:`tablist`,"aria-label":`数据范围选择`,children:[(0,L.jsxs)(F,{icon:(0,L.jsx)(he,{size:16}),variant:`secondary`,active:R===`scientific`,className:`data-scope-btn ${R===`scientific`?`data-scope-btn--active`:``}`,onClick:()=>{st(`scientific`),J(1)},title:`科学数据：仅包含科学数据集（观测表格、栅格影像、气象数据库、GIS矢量图层等，与前台科学数据一致）`,children:[(0,L.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[R===`scientific`&&(0,L.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,L.jsxs)(`span`,{children:[`科学数据`,gn.scientific>0?` (${gn.scientific})`:``]})]}),R===`scientific`&&(0,L.jsx)(`span`,{className:`data-scope-active-bar`})]}),(0,L.jsxs)(F,{icon:(0,L.jsx)(N,{size:16}),variant:`secondary`,active:R===`tutorial`,className:`data-scope-btn ${R===`tutorial`?`data-scope-btn--active`:``}`,onClick:()=>{st(`tutorial`),J(1)},title:`教程数据：教学相关的数据（课程教材、课件插图、章节横幅、示范音视频及实训样例表格）`,children:[(0,L.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[R===`tutorial`&&(0,L.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,L.jsxs)(`span`,{children:[`教程数据`,gn.tutorial>0?` (${gn.tutorial})`:``]})]}),R===`tutorial`&&(0,L.jsx)(`span`,{className:`data-scope-active-bar`})]}),(0,L.jsxs)(F,{icon:(0,L.jsx)(re,{size:16}),variant:`secondary`,active:R===`literature`,className:`data-scope-btn ${R===`literature`?`data-scope-btn--active`:``}`,onClick:()=>{st(`literature`),J(1)},title:`科学文献：学术论文、研究报告、专著文献与技术文档资料`,children:[(0,L.jsxs)(`span`,{className:`data-scope-btn-inner`,children:[R===`literature`&&(0,L.jsx)(`span`,{className:`data-scope-active-dot`,"aria-label":`当前活动`}),(0,L.jsxs)(`span`,{children:[`科学文献`,gn.literature>0?` (${gn.literature})`:``]})]}),R===`literature`&&(0,L.jsx)(`span`,{className:`data-scope-active-bar`})]})]}),(0,L.jsx)(F,{icon:(0,L.jsx)(h,{size:16}),variant:`secondary`,onClick:()=>e(`/admin/data/trash`),title:`已删除的数据源`,children:`回收站`}),(0,L.jsx)(`span`,{style:{width:`1px`,height:`20px`,background:`var(--cg-border)`,margin:`0 4px`}})]}),rightActions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{icon:(0,L.jsx)(C,{size:18}),variant:`secondary`,active:ct||Z>0,onClick:()=>lt(!ct),title:`筛选与排序${Z>0?` (已启用 ${Z} 项条件)`:``}`,children:(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[`筛选`,Z>0&&(0,L.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,minWidth:`17px`,height:`17px`,padding:`0 4px`,borderRadius:`999px`,background:`var(--admin-primary)`,color:`#fff`,fontSize:`0.68rem`,fontWeight:700,lineHeight:1},children:Z})]})}),!ke&&(0,L.jsx)(F,{icon:(0,L.jsx)(ae,{size:18}),variant:`secondary`,active:r!==null,onClick:rn,title:r?`当前类型: ${yn} (点击展开类型面板)`:`展开数据类型面板`,children:(0,L.jsx)(`span`,{children:r?`类型: ${yn}`:`类型`})}),(0,L.jsx)(F,{icon:(0,L.jsx)(de,{size:18}),variant:`secondary`,active:nt,onClick:()=>{let e=!nt;it(e),$e(!1),ot(null),tt(null),e?Ae(!0):i(null)},title:`智能体运行状态`,children:`智能体状态`})]})}),ct&&!nt&&(0,L.jsxs)(`div`,{className:`data-filter-panel`,children:[(0,L.jsxs)(`div`,{className:`data-filter-panel-header`,children:[(0,L.jsxs)(`div`,{className:`data-filter-panel-title`,children:[(0,L.jsx)(C,{size:15,style:{color:`var(--admin-primary)`}}),(0,L.jsx)(`span`,{children:`多维数据筛选与排序`}),Z>0&&(0,L.jsxs)(`span`,{className:`data-filter-active-count`,children:[Z,` 个条件生效中`]})]}),Z>0&&(0,L.jsxs)(`button`,{type:`button`,onClick:Cn,className:`data-filter-reset-btn`,title:`重置所有筛选与排序条件`,children:[(0,L.jsx)(Te,{size:13}),(0,L.jsx)(`span`,{children:`重置筛选`})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-grid`,children:[(0,L.jsxs)(`div`,{className:`data-filter-item data-filter-item--keyword`,children:[(0,L.jsxs)(`label`,{className:`data-filter-label`,htmlFor:`data-filter-keyword-input`,children:[(0,L.jsx)(E,{size:13}),(0,L.jsx)(`span`,{children:`查询关键词`})]}),(0,L.jsxs)(`div`,{className:`data-filter-input-wrapper`,children:[(0,L.jsx)(`input`,{id:`data-filter-keyword-input`,type:`text`,value:j,onChange:e=>{M(e.target.value),J(1)},placeholder:`匹配标题、摘要、名称或路径...`,className:`data-filter-input`}),j&&(0,L.jsx)(`button`,{type:`button`,onClick:()=>{M(``),we(``),J(1)},className:`data-filter-input-clear-btn`,title:`清除关键词`,"aria-label":`清除关键词`,children:(0,L.jsx)(A,{size:13})})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`发布状态`})}),(0,L.jsxs)(`select`,{value:ut,onChange:e=>{z(e.target.value),J(1)},className:`data-filter-select`,children:[(0,L.jsxs)(`option`,{value:`all`,children:[`全部状态 (`,vn,`)`]}),(0,L.jsxs)(`option`,{value:`published`,children:[`已发布 (`,Sn.published,`)`]}),(0,L.jsxs)(`option`,{value:`draft`,children:[`草稿 / 未发布 (`,Sn.draft,`)`]})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`数据格式`})}),(0,L.jsxs)(`select`,{value:dt,onChange:e=>{ft(e.target.value),J(1)},className:`data-filter-select`,children:[(0,L.jsxs)(`option`,{value:`all`,children:[`全部格式 (`,vn,`)`]}),bn.map(e=>(0,L.jsxs)(`option`,{value:e.driver,children:[e.icon,` `,e.label,` (`,e.count,`)`]},e.driver))]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`数据主题`})}),(0,L.jsxs)(`select`,{value:B,onChange:e=>{V(e.target.value),J(1)},className:`data-filter-select`,children:[(0,L.jsxs)(`option`,{value:`all`,children:[`全部主题 (`,vn,`)`]}),xn.map(e=>(0,L.jsxs)(`option`,{value:e.key||e.name,children:[e.name,` (`,e.count,`)`]},e.key||e.name))]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`更新时间`})}),(0,L.jsxs)(`select`,{value:H,onChange:e=>{pt(e.target.value),J(1)},className:`data-filter-select`,children:[(0,L.jsx)(`option`,{value:`all`,children:`全部时间`}),(0,L.jsx)(`option`,{value:`7d`,children:`最近 7 天内`}),(0,L.jsx)(`option`,{value:`30d`,children:`最近 30 天内`}),(0,L.jsx)(`option`,{value:`90d`,children:`最近 90 天内`}),(0,L.jsx)(`option`,{value:`1y`,children:`1 年以内`})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`排序依据`})}),(0,L.jsxs)(`select`,{value:U||`default`,onChange:e=>{let t=e.target.value;if(t==="default")W(null);else{let e=t;W(e),K(e===`modified`||e===`size`?`desc`:`asc`)}J(1)},className:`data-filter-select`,children:[(0,L.jsx)(`option`,{value:`default`,children:`默认排序`}),(0,L.jsx)(`option`,{value:`modified`,children:`更新时间`}),(0,L.jsx)(`option`,{value:`name`,children:`数据源名称`}),(0,L.jsx)(`option`,{value:`size`,children:`文件大小`}),(0,L.jsx)(`option`,{value:`category`,children:`分类主题`})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-item`,children:[(0,L.jsx)(`label`,{className:`data-filter-label`,children:(0,L.jsx)(`span`,{children:`排序方向`})}),(0,L.jsxs)(`select`,{value:G,onChange:e=>{K(e.target.value),J(1)},disabled:!U,className:`data-filter-select ${U?``:`data-filter-select--disabled`}`,children:[(0,L.jsx)(`option`,{value:`desc`,children:`降序 (从大到小 / 最新)`}),(0,L.jsx)(`option`,{value:`asc`,children:`升序 (从小到大 / 最早)`})]})]})]}),(0,L.jsxs)(`div`,{className:`data-filter-footer`,children:[(0,L.jsxs)(`div`,{className:`data-filter-footer-info`,children:[(0,L.jsxs)(`span`,{children:[`当前范围共 `,(0,L.jsx)(`strong`,{children:vn}),` 项`]}),(0,L.jsx)(`span`,{className:`data-filter-divider`,children:`/`}),(0,L.jsxs)(`span`,{children:[`筛选匹配 `,(0,L.jsx)(`strong`,{style:{color:wn.length===0?`var(--admin-danger)`:`var(--admin-primary)`},children:jn}),` 项`]})]}),Z>0&&(0,L.jsxs)(`div`,{className:`data-filter-tags`,children:[j.trim()&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>{M(``),we(``),J(1)},title:`点击清除关键词筛选`,children:[`关键词: `,j.trim(),(0,L.jsx)(A,{size:12})]}),ut!==`all`&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>z(`all`),children:[`状态: `,ut===`published`?`已发布`:`草稿/未发布`,(0,L.jsx)(A,{size:12})]}),dt!==`all`&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>ft(`all`),children:[`格式: `,_t[dt]?.label||dt,(0,L.jsx)(A,{size:12})]}),B!==`all`&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>V(`all`),children:[`主题: `,B===`__unclassified__`?`未分类主题`:B,(0,L.jsx)(A,{size:12})]}),H!==`all`&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>pt(`all`),children:[`时间: `,H===`7d`?`7天内`:H===`30d`?`30天内`:H===`90d`?`90天内`:`1年内`,(0,L.jsx)(A,{size:12})]}),U&&(0,L.jsxs)(`span`,{className:`data-filter-tag`,onClick:()=>W(null),children:[`排序: `,U===`modified`?`更新时间`:U===`name`?`名称`:U===`size`?`大小`:`分类`,` (`,G===`asc`?`升`:`降`,`)`,(0,L.jsx)(A,{size:12})]})]})]})]}),!nt&&!ct&&Z>0&&(0,L.jsxs)(`div`,{className:`data-filter-banner`,children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(C,{size:14}),(0,L.jsxs)(`span`,{children:[`已启用 `,(0,L.jsx)(`strong`,{children:Z}),` 项筛选条件 · 当前范围共 `,vn,` 项，匹配 `,(0,L.jsx)(`strong`,{children:jn}),` 项`]})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>lt(!0),style:{background:`none`,border:`none`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`0.8rem`,textDecoration:`underline`},children:`展开调整`}),(0,L.jsxs)(`button`,{type:`button`,onClick:Cn,style:{background:`none`,border:`none`,color:`var(--cg-text-muted)`,cursor:`pointer`,fontSize:`0.8rem`,display:`inline-flex`,alignItems:`center`,gap:`2px`},children:[(0,L.jsx)(Te,{size:12}),`清空`]})]})]}),P&&j&&(0,L.jsxs)(`p`,{className:`content-description`,style:{margin:0,padding:`0 1.5rem 1rem`,fontSize:`0.875rem`,color:`var(--cg-text-muted)`},children:[`搜索关键词: "`,j,`"`]}),!P&&r&&Mt&&(0,L.jsx)(`p`,{className:`content-description`,style:{margin:0,padding:`0 1.5rem 1rem`,fontSize:`0.875rem`,color:`var(--cg-text-muted)`},children:(Mt||[]).find(e=>e.name===r)?.description||``})]}),nt?(0,L.jsx)(`div`,{style:{flex:1,overflowY:`auto`},children:(0,L.jsx)(bt,{agentFilter:at})}):Tn?(0,L.jsx)(`div`,{className:`loading`,children:`加载中...`}):Ft?(0,L.jsxs)(`div`,{role:`alert`,className:`loading`,children:[`数据列表加载失败，请重试。`,(0,L.jsx)(`button`,{onClick:()=>void X(),children:`重新加载`})]}):Re?(0,L.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,padding:`0 1rem 1rem`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`0.75rem 0.5rem`,marginBottom:`0.5rem`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(S,{size:20,style:{color:`var(--admin-warning)`}}),(0,L.jsx)(`h3`,{style:{margin:0,fontSize:`1rem`,fontWeight:700,color:`var(--cg-text)`},children:`查重结果`}),(0,L.jsx)(`span`,{style:{background:On>0?`var(--admin-warning-light)`:`var(--admin-success-light)`,color:On>0?`var(--admin-warning)`:`var(--admin-success)`,padding:`2px 10px`,borderRadius:`12px`,fontSize:`0.75rem`,fontWeight:600},children:On>0?`发现 ${On} 组重复`:`无重复数据`})]}),(0,L.jsxs)(`button`,{onClick:()=>Be(!1),style:{border:`none`,background:`var(--cg-bg)`,borderRadius:`6px`,padding:`6px 12px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.8rem`,color:`var(--cg-text-muted)`},children:[(0,L.jsx)(A,{size:14}),` 关闭`]})]}),Dn>0&&Ne?(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:Ne.groups.map((e,t)=>(0,L.jsxs)(`div`,{style:{border:`1px solid var(--cg-border)`,borderRadius:`8px`,overflow:`hidden`,background:`var(--cg-surface)`},children:[(0,L.jsxs)(`div`,{onClick:()=>Jt(e.sha256),style:{padding:`10px 14px`,background:`var(--cg-bg)`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`8px`,borderBottom:Ve.has(e.sha256)?`1px solid var(--cg-border)`:`none`},children:[Ve.has(e.sha256)?(0,L.jsx)(le,{size:16,style:{color:`var(--cg-text-muted)`}}):(0,L.jsx)(me,{size:16,style:{color:`var(--cg-text-muted)`}}),(0,L.jsxs)(`span`,{style:{fontWeight:600,fontSize:`0.875rem`,color:`var(--cg-text)`},children:[`重复组 `,t+1]}),(0,L.jsxs)(`span`,{style:{background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,padding:`1px 8px`,borderRadius:`10px`,fontSize:`0.7rem`,fontWeight:600},children:[e.file_count,` 个文件`]}),(0,L.jsxs)(`span`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,marginLeft:`auto`,fontFamily:`monospace`},children:[`SHA256: `,e.sha256.slice(0,12),`…`]})]}),Ve.has(e.sha256)&&(0,L.jsx)(`div`,{style:{padding:`0`},children:e.members.map((t,n)=>(0,L.jsxs)(`div`,{style:{padding:`10px 14px 10px 38px`,display:`flex`,alignItems:`center`,gap:`10px`,borderBottom:n<e.members.length-1?`1px solid var(--cg-bg)`:`none`,background:t.is_canonical?`var(--cg-bg)`:`var(--cg-surface)`},children:[t.is_canonical?(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`3px`,background:`var(--admin-warning)`,color:`var(--admin-primary-text)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.7rem`,fontWeight:700,whiteSpace:`nowrap`,flexShrink:0},children:[(0,L.jsx)(_e,{size:11}),` 推荐数据源`]}):(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`3px`,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.7rem`,fontWeight:500,whiteSpace:`nowrap`,flexShrink:0},children:[(0,L.jsx)(S,{size:11}),` 副本`]}),(0,L.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,L.jsx)(`div`,{style:{fontWeight:t.is_canonical?600:400,fontSize:`0.85rem`,color:`var(--cg-text)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:t.file_name}),(0,L.jsxs)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[t.file_path,t.source_name&&(0,L.jsxs)(`span`,{style:{marginLeft:`8px`,color:`var(--admin-primary)`},children:[`(`,t.source_name,`)`]})]})]}),(0,L.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:Yt(t.size)}),(0,L.jsx)(`span`,{style:{fontSize:`0.65rem`,padding:`1px 6px`,borderRadius:`4px`,background:(t.status===`duplicate`||t.status,`var(--cg-bg)`),color:t.status===`duplicate`?`var(--admin-danger)`:t.status===`discovered`?`var(--admin-primary)`:`var(--cg-text-muted)`,whiteSpace:`nowrap`},children:t.status})]},n))})]},e.sha256))}):(0,L.jsxs)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:`var(--cg-text-muted)`},children:[(0,L.jsx)(be,{size:48,style:{color:`var(--admin-success)`,marginBottom:`12px`}}),(0,L.jsx)(`p`,{style:{fontSize:`1rem`,fontWeight:600},children:`数据无重复 ✓`}),(0,L.jsx)(`p`,{style:{fontSize:`0.85rem`},children:Ne?.message})]})]}):jn>0?(0,L.jsxs)(`div`,{ref:Ct,onScroll:()=>{vt&&q(null)},style:{flex:1,overflowY:`auto`,padding:`0 1rem 1.5rem`},children:[(0,L.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.85rem`},children:[(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{style:{background:`var(--cg-bg)`,borderBottom:`2px solid var(--cg-border)`},children:[(0,L.jsx)(`th`,{style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`50px`},children:`#`}),(0,L.jsx)(`th`,{onClick:()=>sn(`name`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,cursor:`pointer`,userSelect:`none`},title:`按数据源名称排序${U===`name`?`（当前${G===`asc`?`升序`:`降序`}）`:``}`,children:(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`数据源名称`,U===`name`&&(G===`asc`?(0,L.jsx)(b,{size:14}):(0,L.jsx)(pe,{size:14}))]})}),(0,L.jsx)(`th`,{onClick:()=>sn(`category`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`100px`,cursor:`pointer`,userSelect:`none`},title:`按分类排序${U===`category`?`（当前${G===`asc`?`升序`:`降序`}）`:``}`,children:(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`分类`,U===`category`&&(G===`asc`?(0,L.jsx)(b,{size:14}):(0,L.jsx)(pe,{size:14}))]})}),(0,L.jsx)(`th`,{onClick:()=>sn(`governance_status`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`220px`,cursor:`pointer`,userSelect:`none`},title:`按治理状态排序${U===`governance_status`?`（当前${G===`asc`?`升序`:`降序`}）`:``}`,children:(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`治理概览`,U===`governance_status`&&(G===`asc`?(0,L.jsx)(b,{size:14}):(0,L.jsx)(pe,{size:14}))]})}),(0,L.jsx)(`th`,{onClick:()=>sn(`publish_recommend`),style:{padding:`10px 12px`,textAlign:`left`,fontWeight:700,color:`var(--cg-text-muted)`,width:`140px`,cursor:`pointer`,userSelect:`none`},title:`按发布建议排序${U===`publish_recommend`?`（当前${G===`asc`?`升序`:`降序`}）`:``}`,children:(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[`发布建议`,U===`publish_recommend`&&(G===`asc`?(0,L.jsx)(b,{size:14}):(0,L.jsx)(pe,{size:14}))]})}),(0,L.jsx)(`th`,{style:{padding:`10px 12px`,textAlign:`right`,fontWeight:700,color:`var(--cg-text-muted)`,width:`230px`},children:`下一步`})]})}),(0,L.jsx)(`tbody`,{children:Mn.map((e,t)=>{let n=Nn+t+1,r=Bn[e.name],i=Zt(r?.overall_status);return(0,L.jsxs)(`tr`,{onClick:()=>u(e),onDoubleClick:t=>{t.stopPropagation(),u(e)},style:{cursor:`pointer`,background:En===e.name?`var(--admin-primary-light)`:`transparent`,borderBottom:`1px solid var(--cg-border)`,transition:`background 0.15s`},onMouseEnter:t=>t.currentTarget.style.background=En===e.name?`var(--admin-primary-light)`:`var(--cg-bg)`,onMouseLeave:t=>t.currentTarget.style.background=En===e.name?`var(--admin-primary-light)`:`transparent`,children:[(0,L.jsx)(`td`,{style:{padding:`10px 12px`,color:`var(--cg-text-muted)`,fontWeight:500},children:n}),(0,L.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(`span`,{style:{fontSize:`1.1rem`},children:en(e.category)}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{fontWeight:600,color:`var(--cg-text)`},children:e.metadata?.title?je(e.metadata.title,Me()):e.name}),e.metadata?.title&&je(e.metadata.title,Me())!==e.name&&(0,L.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--admin-primary)`,fontFamily:`monospace`},children:e.name}),(()=>{let t=v(e.metadata?.title);return t?(0,L.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:t}):null})()]})]})}),(0,L.jsx)(`td`,{style:{padding:`10px 12px`,color:`var(--cg-text-muted)`,fontSize:`0.8rem`},children:e.theme_category_name?(0,L.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`,background:`var(--cg-bg)`,color:`var(--admin-success)`,padding:`2px 8px`,borderRadius:`6px`,fontSize:`0.75rem`,fontWeight:500,whiteSpace:`nowrap`},children:[e.theme_category_icon&&(0,L.jsx)(`span`,{children:e.theme_category_icon}),e.theme_category_name]}):(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.75rem`},children:`未分类`})}),(0,L.jsx)(`td`,{style:{padding:`10px 12px`},children:r?(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:(0,L.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`2px 8px`,borderRadius:`999px`,background:i.background,color:i.color,fontSize:`0.72rem`,fontWeight:600},children:Xt(r.overall_status)})}),(0,L.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:[`评分 `,Math.round(r.score),` · 问题 `,r.total_issues,` · 待处理 `,r.task_pending]})]}):(0,L.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:zn?`未同步`:`加载中`})}),(0,L.jsx)(`td`,{style:{padding:`10px 12px`},children:r?(0,L.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`2px 8px`,borderRadius:`999px`,background:r.recommend_publish?`var(--admin-success-light)`:`var(--cg-bg)`,color:r.recommend_publish?`var(--admin-success)`:`var(--cg-text-muted)`,fontSize:`0.72rem`,fontWeight:600},children:Qt(r.recommend_publish)}):(0,L.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:`-`})}),(0,L.jsx)(`td`,{style:{padding:`10px 12px`,textAlign:`right`,position:`relative`,zIndex:vt===e.name?50:void 0},onClick:e=>e.stopPropagation(),children:(0,L.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,justifyContent:`flex-end`},children:[(e.publication_status||`draft`)===`published`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`button`,{type:`button`,onClick:()=>u(e),title:`查看已发布的数据与元数据版本`,style:{padding:`6px 10px`,borderRadius:`8px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`12px`,whiteSpace:`nowrap`},children:`查看发布版本`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>void zt(e.name),disabled:T[e.name]===`unpublishing`,title:`取消发布，暂停对外开放并进入治理修改状态`,style:{padding:`6px 10px`,borderRadius:`8px`,border:`1px solid var(--admin-warning, #f59e0b)`,background:`var(--admin-warning-light, rgba(245, 158, 11, 0.1))`,color:`var(--admin-warning, #d97706)`,cursor:T[e.name]===`unpublishing`?`not-allowed`:`pointer`,fontWeight:600,fontSize:`12px`,display:`inline-flex`,alignItems:`center`,gap:`4px`,whiteSpace:`nowrap`,opacity:T[e.name]===`unpublishing`?.6:1},children:T[e.name]===`unpublishing`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(w,{size:12,style:{animation:`spin 1s linear infinite`}}),(0,L.jsx)(`span`,{children:`取消中...`})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{size:12}),(0,L.jsx)(`span`,{children:`取消发布`})]})})]}):(0,L.jsx)(`button`,{type:`button`,onClick:()=>u(e),style:{padding:`6px 11px`,borderRadius:`8px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`12px`,whiteSpace:`nowrap`},children:r?.recommend_publish?`核对并发布`:`继续完善`}),(0,L.jsxs)(`div`,{style:{position:`relative`,display:`inline-flex`},children:[(0,L.jsx)(`button`,{type:`button`,onClick:t=>jt(e.name,t),title:`更多操作`,style:{width:`34px`,height:`34px`,minWidth:`34px`,borderRadius:`10px`,border:`1px solid var(--cg-border)`,background:vt===e.name?`var(--cg-bg)`:`var(--cg-surface)`,color:`var(--cg-text-muted)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`},children:(0,L.jsx)(g,{size:16})}),vt===e.name&&(0,L.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{position:`absolute`,right:0,...xt===`top`?{bottom:`calc(100% + 6px)`}:{top:`calc(100% + 6px)`},zIndex:60,minWidth:`136px`,background:`var(--cg-surface)`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,boxShadow:`0 10px 24px rgba(15, 23, 42, 0.16)`,padding:`6px`,display:`flex`,flexDirection:`column`,gap:`4px`,maxHeight:`280px`,overflowY:`auto`},children:[(e.publication_status||`draft`)===`published`&&(0,L.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),q(null),zt(e.name)},disabled:T[e.name]===`unpublishing`,title:`取消发布，暂停对外开放并进入治理修改状态`,style:{border:`none`,background:`transparent`,cursor:T[e.name]===`unpublishing`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--admin-warning, #d97706)`,opacity:T[e.name]===`unpublishing`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[T[e.name]===`unpublishing`?(0,L.jsx)(w,{size:14,style:{animation:`spin 1s linear infinite`}}):(0,L.jsx)(A,{size:14}),(0,L.jsx)(`span`,{children:T[e.name]===`unpublishing`?`取消中...`:`取消发布`})]}),(0,L.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),q(null),Rt(e.name)},disabled:x[e.name]===`running`||(e.publication_status||`draft`)===`published`,title:(e.publication_status||`draft`)===`published`?`请先取消发布，再重新生成元数据`:`重新生成标题、摘要等描述性元数据`,style:{border:`none`,background:`transparent`,cursor:x[e.name]===`running`||(e.publication_status||`draft`)===`published`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:x[e.name]===`running`||(e.publication_status||`draft`)===`published`?.5:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[x[e.name]===`running`?(0,L.jsx)(w,{size:14,style:{animation:`spin 1s linear infinite`}}):x[e.name]===`done`?(0,L.jsx)(be,{size:14}):x[e.name]===`error`?(0,L.jsx)(O,{size:14}):(0,L.jsx)(ce,{size:14}),(0,L.jsx)(`span`,{children:x[e.name]===`running`?`重新生成中`:x[e.name]===`done`?`生成完成`:x[e.name]===`error`?`生成失败，请重试`:`重新生成元数据`})]}),(0,L.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),q(null),_(e.name)},title:Qe.getDetail(e.name),disabled:f[e.name]===`governing`||f[e.name]===`waiting`,style:{border:`none`,background:`transparent`,cursor:f[e.name]===`governing`||f[e.name]===`waiting`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:f[e.name]===`governing`||f[e.name]===`waiting`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[f[e.name]===`governing`?(0,L.jsx)(w,{size:14,style:{animation:`spin 1s linear infinite`}}):f[e.name]===`success`?(0,L.jsx)(be,{size:14}):f[e.name]===`error`?(0,L.jsx)(O,{size:14}):(0,L.jsx)(k,{size:14}),(0,L.jsx)(`span`,{children:f[e.name]===`waiting`?`检查排队中`:f[e.name]===`governing`?`检查中`:f[e.name]===`success`?`检查完成`:f[e.name]===`error`?`检查失败，重试`:f[e.name]===`blocked`?`待补充信息，重试`:`继续完善`})]}),(0,L.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),q(null),un(e.name)},disabled:y[e.name]===`auditing`,style:{border:`none`,background:`transparent`,cursor:y[e.name]===`auditing`?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--cg-text)`,opacity:y[e.name]===`auditing`?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[y[e.name]===`auditing`?(0,L.jsx)(w,{size:14,style:{animation:`spin 1s linear infinite`}}):y[e.name]===`done`?(0,L.jsx)(be,{size:14}):y[e.name]===`error`?(0,L.jsx)(O,{size:14}):(0,L.jsx)(se,{size:14}),(0,L.jsx)(`span`,{children:y[e.name]===`auditing`?`检查中`:y[e.name]===`done`?`已打开`:y[e.name]===`error`?`加载失败`:`查看问题`})]}),(0,L.jsxs)(`button`,{onClick:t=>{t.stopPropagation(),q(null),Tt(e.name)},disabled:Et===e.name,style:{border:`none`,background:`transparent`,cursor:Et===e.name?`not-allowed`:`pointer`,borderRadius:`8px`,padding:`8px 10px`,textAlign:`left`,fontSize:`13px`,color:`var(--admin-danger)`,opacity:Et===e.name?.6:1,display:`flex`,alignItems:`center`,gap:`8px`},children:[Et===e.name?(0,L.jsx)(w,{size:14,style:{animation:`spin 1s linear infinite`}}):(0,L.jsx)(h,{size:14}),(0,L.jsx)(`span`,{children:Et===e.name?`移入回收站中`:`删除`})]})]})]})]})})]},t)})})]}),Q>1&&(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`12px 16px`,borderTop:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,fontSize:`0.8125rem`,color:`var(--cg-text-muted)`},children:[(0,L.jsxs)(`span`,{children:[`共 `,jn,` 条，第 `,$,`/`,Q,` 页`]}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`4px`,alignItems:`center`},children:[(0,L.jsx)(`button`,{onClick:()=>J(1),disabled:$<=1,style:{...Vn,opacity:$<=1?.4:1},children:(0,L.jsx)(oe,{size:14})}),(0,L.jsx)(`button`,{onClick:()=>J(e=>Math.max(1,e-1)),disabled:$<=1,style:{...Vn,opacity:$<=1?.4:1},children:(0,L.jsx)(fe,{size:14})}),(()=>{let e=[],t=Math.max(1,$-2),n=Math.min(Q,t+4);t=Math.max(1,n-4);for(let r=t;r<=n;r++)e.push(r);return e.map(e=>(0,L.jsx)(`button`,{onClick:()=>J(e),style:{...Vn,background:e===$?`var(--admin-primary)`:`var(--cg-surface)`,color:e===$?`var(--cg-surface)`:`var(--cg-text-muted)`,fontWeight:e===$?700:400},children:e},e))})(),(0,L.jsx)(`button`,{onClick:()=>J(e=>Math.min(Q,e+1)),disabled:$>=Q,style:{...Vn,opacity:$>=Q?.4:1},children:(0,L.jsx)(me,{size:14})}),(0,L.jsx)(`button`,{onClick:()=>J(Q),disabled:$>=Q,style:{...Vn,opacity:$>=Q?.4:1},children:(0,L.jsx)(Se,{size:14})})]})]})]}):(0,L.jsxs)(`div`,{className:`empty-state`,children:[(0,L.jsx)(De,{size:48,color:`var(--cg-text-muted)`}),(0,L.jsx)(`p`,{children:Z>0?`未找到符合当前筛选条件的数据`:P?`未找到匹配的数据文件`:`该分类下暂无数据文件`}),(0,L.jsx)(`div`,{className:`empty-hint`,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,marginTop:`6px`},children:Z>0?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`span`,{children:[`当前已启用 `,Z,` 项筛选条件，请尝试放宽或重置条件。`]}),(0,L.jsxs)(`button`,{type:`button`,onClick:Cn,style:{padding:`6px 14px`,borderRadius:`6px`,border:`1px solid var(--admin-primary)`,background:`var(--admin-primary-light)`,color:`var(--admin-primary)`,cursor:`pointer`,fontWeight:600,fontSize:`0.85rem`,display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[(0,L.jsx)(Te,{size:13}),`重置所有筛选条件`]})]}):P?`请尝试其他搜索关键词`:`请选择其他分类查看`})]})]}),ke&&Hn]}),(0,L.jsx)(rt,{isOpen:ve,onClose:()=>ye(!1),defaultCategory:r||void 0,onSuccess:tn}),(0,L.jsx)(Le,{isOpen:!!wt,title:`移入回收站`,message:`确定要将数据源 ${wt||``} 移入回收站吗？移入后可在回收站中恢复或永久删除。`,type:`warning`,confirmText:`移入回收站`,isLoading:Et===wt,onClose:()=>Tt(null),onConfirm:()=>{wt&&mn(wt)}}),D&&(0,L.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,backdropFilter:`blur(4px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:1e4},onClick:()=>ge(null),children:(0,L.jsxs)(`div`,{style:{background:`var(--cg-surface)`,borderRadius:`12px`,padding:`24px`,maxWidth:`560px`,width:`90%`,maxHeight:`80vh`,overflow:`auto`,boxShadow:`0 20px 60px rgba(0,0,0,0.4)`,border:`1px solid rgba(255,255,255,0.1)`},onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`16px`},children:[(0,L.jsxs)(`h3`,{style:{margin:0,fontSize:`1.1rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(se,{size:20}),`数据治理总览`]}),(0,L.jsx)(`button`,{onClick:()=>ge(null),style:{background:`none`,border:`none`,cursor:`pointer`,color:`inherit`,padding:`4px`},children:(0,L.jsx)(A,{size:18})})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,marginBottom:`20px`,padding:`16px`,borderRadius:`8px`,background:D.quality_summary.overall_status===`PASSED`?`var(--admin-success-light)`:D.quality_summary.overall_status===`WARNING`?`var(--admin-warning-light)`:`var(--admin-danger-light)`,border:`1px solid ${D.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:D.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`}`},children:[(0,L.jsxs)(`div`,{style:{fontSize:`2.2rem`,fontWeight:700,lineHeight:1,color:D.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:D.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`},children:[Math.round(D.quality_summary.score),`%`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{display:`inline-block`,padding:`2px 10px`,borderRadius:`12px`,fontSize:`0.75rem`,fontWeight:600,background:D.quality_summary.overall_status===`PASSED`?`var(--admin-success)`:D.quality_summary.overall_status===`WARNING`?`var(--admin-warning)`:`var(--admin-danger)`,color:`var(--admin-primary-text)`},children:Xt(D.quality_summary.overall_status)}),(0,L.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:D.source_name}),(0,L.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:D.meta.driver||`未识别驱动`})]})]}),(0,L.jsx)(`div`,{style:{display:`flex`,gap:`12px`,marginBottom:`16px`},children:[{label:`总检查`,value:D.quality_summary.stats.total_checks,color:`var(--cg-text-muted)`},{label:`总问题`,value:D.issue_summary.total_issues,color:`var(--admin-danger)`},{label:`待处理`,value:D.governance_progress.task_pending,color:`var(--admin-warning)`},{label:`处理中`,value:D.governance_progress.task_in_progress,color:`var(--admin-primary)`}].map(e=>(0,L.jsxs)(`div`,{style:{flex:1,textAlign:`center`,padding:`8px`,borderRadius:`8px`,background:`rgba(255,255,255,0.05)`},children:[(0,L.jsx)(`div`,{style:{fontSize:`1.3rem`,fontWeight:700,color:e.color},children:e.value}),(0,L.jsx)(`div`,{style:{fontSize:`0.7rem`,color:`var(--cg-text-muted)`},children:e.label})]},e.label))}),(0,L.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,marginBottom:`16px`},children:[`结构${D.quality_summary.structure_passed?`通过`:`待修复`}`,`完整性${D.quality_summary.completeness_passed?`通过`:`待修复`}`,`语义${D.quality_summary.semantic_passed?`通过`:`待修复`}`,`建议发布${D.publishing_decision.recommend_publish?`是`:`否`}`].map(e=>(0,L.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,padding:`4px 10px`,borderRadius:`999px`,background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(255,255,255,0.08)`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:e},e))}),D.field_diagnostics.length>0?(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{style:{fontSize:`0.85rem`,fontWeight:600,marginBottom:`8px`},children:[`字段诊断 (`,D.field_diagnostics.length,`)`]}),(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:D.field_diagnostics.slice(0,8).map((e,t)=>(0,L.jsxs)(`div`,{style:{padding:`8px 12px`,borderRadius:`6px`,fontSize:`0.8rem`,display:`flex`,alignItems:`flex-start`,gap:`8px`,background:e.severity===`error`||e.severity===`critical`?`var(--admin-danger-light)`:`var(--admin-warning-light)`,borderLeft:`3px solid ${e.severity===`error`||e.severity===`critical`?`var(--admin-danger)`:`var(--admin-warning)`}`},children:[(0,L.jsx)(`span`,{style:{flexShrink:0,marginTop:`1px`},children:e.severity===`error`||e.severity===`critical`?`❌`:`⚠️`}),(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.7rem`},children:[`[`,e.field_path,`]`]}),` `,e.message]}),(0,L.jsxs)(`div`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.72rem`,marginTop:`4px`},children:[`建议：`,e.suggestion]})]})]},t))}),D.field_diagnostics.length>8&&(0,L.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`},children:`仅展示前 8 条诊断，请前往治理工作台查看完整任务。`})]}):(0,L.jsxs)(`div`,{style:{textAlign:`center`,padding:`20px`,color:`var(--admin-success)`},children:[(0,L.jsx)(be,{size:32,style:{marginBottom:`8px`}}),(0,L.jsx)(`div`,{children:`当前没有字段级诊断问题`})]})]})}),(0,L.jsx)(`style`,{children:`
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
      `})]})}var G=[{key:`all`,label:`全部智能体`,icon:(0,L.jsx)(de,{size:16}),color:`var(--cg-text-muted)`},{key:`commander`,label:`指挥官`,icon:(0,L.jsx)(f,{size:16}),color:`var(--admin-primary)`},{key:`data_engineer`,label:`数据工程师`,icon:(0,L.jsx)(j,{size:16}),color:`var(--admin-primary)`},{key:`metadata_editor`,label:`元数据编辑`,icon:(0,L.jsx)(P,{size:16}),color:`var(--admin-warning)`},{key:`domain_expert`,label:`领域顾问`,icon:(0,L.jsx)(N,{size:16}),color:`var(--admin-success)`},{key:`arbiter`,label:`仲裁官`,icon:(0,L.jsx)(ie,{size:16}),color:`var(--admin-primary)`},{key:`inspector`,label:`督察官`,icon:(0,L.jsx)(T,{size:16}),color:`var(--admin-danger)`}],K={commander:`指挥官`,data_engineer:`数据工程师`,metadata_editor:`元数据编辑`,domain_expert:`领域顾问`,arbiter:`仲裁官`,inspector:`督察官`},vt={PENDING:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`排队`},IN_PROGRESS:{bg:`var(--admin-primary-light)`,color:`var(--admin-primary)`,label:`运行中`},COMMITTED:{bg:`var(--admin-success-light)`,color:`var(--admin-success)`,label:`已完成`},AWAITING_INPUT:{bg:`var(--admin-primary-light)`,color:`var(--admin-primary)`,label:`等待`},BLOCKED:{bg:`var(--admin-danger-light)`,color:`var(--admin-danger)`,label:`阻塞`},INSUFFICIENT_EVIDENCE:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`证据不足`},DEFERRED:{bg:`var(--cg-bg)`,color:`var(--cg-text-muted)`,label:`延后`},TIMEOUT:{bg:`var(--admin-danger-light)`,color:`var(--admin-danger)`,label:`超时`}};function yt({agentFilter:e,setAgentFilter:t,position:n=`right`,headerActions:r,onRefresh:i,onSort:a}){let o={},[s,c]=(0,I.useState)(null);(0,I.useEffect)(()=>{let e=!0,t=()=>{l(`/api/admin/governance/agents/status`).then(e=>e.ok?e.json():null).then(t=>{e&&t?.daemon&&c(t.daemon)}).catch(()=>{})};t();let n=setInterval(t,1e4);return()=>{e=!1,clearInterval(n)}},[]);let[u,d]=(0,I.useState)(0);(0,I.useEffect)(()=>{let e=!0;return l(`/api/admin/governance/tasks/inspector/health`).then(e=>e.ok?e.json():null).then(t=>{e&&t&&d(t.alerts?.length||0)}).catch(()=>{}),()=>{e=!1}},[]);let f=Object.values(o||{}).reduce((e,t)=>e+(t?.total||0),0),p=s?.running||s?.state===`running`,m=p?`var(--admin-success)`:`var(--cg-text-muted)`,h=p?`运行中`:s?`空闲`:`未知`,g=G.map(n=>{let r=n.key===`all`,i=n.key===`inspector`,a=0;return a=r?f:i?u:o?.[n.key]?.total||0,{id:n.key,label:n.label,icon:(0,L.jsx)(`span`,{style:{color:n.color},children:n.icon}),count:a,active:r?!e||e===`all`:e===n.key,onClick:()=>t(n.key)}});return(0,L.jsx)(Ie,{header:{title:`智能体状态`,actions:r},items:g,selectedId:e||`all`,onSelect:e=>t(String(e)),position:n,resizable:!0,width:280,minWidth:200,persistKey:`admin-data-sidebar`,collapsible:!1,onRefresh:i,onSort:a,children:(0,L.jsx)(`div`,{style:{padding:`0 4px 12px 4px`},children:(0,L.jsxs)(`div`,{style:{padding:`10px 12px`,borderRadius:10,background:p?`var(--admin-success-light)`:`var(--cg-bg)`,border:`1px solid ${p?`var(--admin-success)`:`var(--cg-border)`}`,marginBottom:8},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,L.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,background:m,boxShadow:p?`0 0 6px var(--admin-success)`:`none`,animation:p?`pulse 2s infinite`:`none`}}),(0,L.jsx)(`span`,{style:{fontSize:13,fontWeight:600,color:`var(--cg-text)`},children:`治理守护进程`}),(0,L.jsx)(`span`,{style:{marginLeft:`auto`,fontSize:11,fontWeight:600,padding:`2px 8px`,borderRadius:8,background:p?`var(--admin-success-light)`:`var(--cg-bg)`,color:p?`var(--admin-success)`:`var(--cg-text-muted)`},children:h})]}),p&&s?.current_source&&(0,L.jsxs)(`div`,{style:{marginTop:6,paddingLeft:16,fontSize:11,color:`var(--cg-text-muted)`},children:[`🔄 正在处理: `,(0,L.jsx)(`span`,{style:{color:`var(--admin-primary)`,fontWeight:500},children:s.current_source.length>20?s.current_source.slice(0,18)+`…`:s.current_source})]})]})})})}function bt({agentFilter:e}){return e===`inspector`?(0,L.jsx)(q,{}):(0,L.jsx)(xt,{agentFilter:e})}function q(){let[e,t]=(0,I.useState)([]),[n,r]=(0,I.useState)(!0),i=(0,I.useCallback)(async()=>{r(!0);try{let e=await(await l(`/api/admin/governance/tasks/inspector/health`)).json();t(e.alerts||[])}catch{}finally{r(!1)}},[]);(0,I.useEffect)(()=>{i()},[i]);let a={critical:{bg:`var(--cg-bg)`,color:`var(--admin-danger)`,label:`致命`},error:{bg:`var(--admin-warning-light)`,color:`var(--admin-warning)`,label:`错误`},warning:{bg:`var(--cg-bg)`,color:`var(--admin-warning)`,label:`警告`},info:{bg:`var(--cg-bg)`,color:`var(--admin-primary)`,label:`提示`}},o={phantom_commit:`虚假提交`,feedback_diagnosis:`反馈诊断`,stalled_backlog:`积压停滞`,missing_detection:`缺失检测`,config_drift:`配置偏移`,rule_coverage:`规则覆盖`};return n?(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200},children:[(0,L.jsx)(m,{size:20,className:`spin`,style:{color:`var(--cg-text-muted)`}}),(0,L.jsx)(`span`,{style:{marginLeft:8,color:`var(--cg-text-muted)`},children:`加载督察官巡检日志...`})]}):e.length?(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`10px 12px`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`},children:[(0,L.jsxs)(`span`,{style:{fontSize:14,fontWeight:600,color:`var(--admin-danger)`},children:[`🔍 督察官巡检日志 (`,e.length,` 条告警)`]}),(0,L.jsx)(`button`,{onClick:i,style:{display:`flex`,alignItems:`center`,gap:4,padding:`4px 10px`,fontSize:12,borderRadius:6,border:`1px solid var(--cg-border)`,background:`var(--cg-surface)`,color:`var(--cg-text-muted)`,cursor:`pointer`},children:`🔄 重新巡检`})]}),(0,L.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`60px 90px 100px 1fr 1fr 130px`,padding:`8px 12px`,fontSize:12,fontWeight:600,color:`var(--cg-text-muted)`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,position:`sticky`,top:0,zIndex:1},children:[(0,L.jsx)(`span`,{children:`级别`}),(0,L.jsx)(`span`,{children:`类别`}),(0,L.jsx)(`span`,{children:`字段`}),(0,L.jsx)(`span`,{children:`错误信息`}),(0,L.jsx)(`span`,{children:`建议`}),(0,L.jsx)(`span`,{children:`时间`})]}),e.map((e,t)=>{let n=a[e.severity]||a.warning,r=o[e.category]||e.category;return(0,L.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`60px 90px 100px 1fr 1fr 130px`,padding:`8px 12px`,fontSize:13,color:`var(--cg-text)`,borderBottom:`1px solid var(--cg-bg)`,alignItems:`start`,background:t%2==0?`var(--cg-surface)`:`var(--cg-bg)`},children:[(0,L.jsx)(`span`,{style:{fontSize:11,fontWeight:600,padding:`2px 6px`,borderRadius:6,background:n.bg,color:n.color,textAlign:`center`,display:`inline-block`},children:n.label}),(0,L.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text-muted)`},children:r}),(0,L.jsx)(`span`,{style:{fontSize:12,fontWeight:500,color:`var(--admin-primary)`,fontFamily:`monospace`},children:e.field_path||`-`}),(0,L.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text)`,lineHeight:`1.4`,overflow:`hidden`,textOverflow:`ellipsis`},title:e.message,children:e.message.length>80?e.message.slice(0,78)+`…`:e.message}),(0,L.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`,lineHeight:`1.4`},title:e.suggestion||``,children:e.suggestion?e.suggestion.length>60?e.suggestion.slice(0,58)+`…`:e.suggestion:`-`}),(0,L.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]},e.id)}),(0,L.jsxs)(`div`,{style:{padding:`12px`,textAlign:`center`,fontSize:12,color:`var(--cg-text-muted)`},children:[`共 `,e.length,` 条告警`]})]}):(0,L.jsxs)(`div`,{className:`empty-state`,children:[(0,L.jsx)(Ce,{size:48,color:`var(--admin-success)`}),(0,L.jsx)(`p`,{children:`✅ 系统正常，无告警`}),(0,L.jsx)(`p`,{className:`empty-hint`,children:`督察官未发现异常`})]})}function xt({agentFilter:e}){let{data:t,isLoading:n}=Ge(e),r=t?.items||[],[i,a]=(0,I.useState)(`flat`),[o,s]=(0,I.useState)(new Set),[c,l]=(0,I.useState)(null);if(n)return(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:200},children:[(0,L.jsx)(m,{size:20,className:`spin`,style:{color:`var(--cg-text-muted)`}}),(0,L.jsx)(`span`,{style:{marginLeft:8,color:`var(--cg-text-muted)`},children:`加载智能体任务...`})]});if(!r.length)return(0,L.jsxs)(`div`,{className:`empty-state`,children:[(0,L.jsx)(de,{size:48,color:`var(--cg-text-muted)`}),(0,L.jsx)(`p`,{children:`暂无智能体任务`}),(0,L.jsx)(`p`,{className:`empty-hint`,children:`当治理守护进程运行时，任务将会出现在这里`})]});let u={BLOCKED:0,TIMEOUT:1,IN_PROGRESS:2,PENDING:3,AWAITING_INPUT:4,INSUFFICIENT_EVIDENCE:5,DEFERRED:6,COMMITTED:7},d=[...r].sort((e,t)=>(u[e.status]??99)-(u[t.status]??99)),f=new Set([`BLOCKED`,`TIMEOUT`]),p=r.filter(e=>f.has(e.status)||e.retry_count&&e.retry_count>=3),h=new Map;for(let e of r){let t=h.get(e.source_name)||[];t.push(e),h.set(e.source_name,t)}let g=e=>{s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},_=r.filter(e=>f.has(e.status)).length,v=r.filter(e=>e.status===`IN_PROGRESS`).length,y=r.filter(e=>e.status===`PENDING`).length;return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:[p.length>0&&(0,L.jsxs)(`div`,{style:{padding:`8px 12px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--admin-danger-light)`,display:`flex`,alignItems:`center`,gap:8,fontSize:12},children:[(0,L.jsx)(T,{size:14,color:`var(--admin-danger)`}),(0,L.jsxs)(`span`,{style:{fontWeight:600,color:`var(--admin-danger)`},children:[p.length,` 项需要关注`]}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`—`}),p.filter(e=>f.has(e.status)).length>0&&(0,L.jsxs)(`span`,{style:{color:`var(--admin-danger)`},children:[p.filter(e=>f.has(e.status)).length,` 个失败/阻塞`]}),p.filter(e=>(e.retry_count||0)>=3&&!f.has(e.status)).length>0&&(0,L.jsxs)(`span`,{style:{color:`var(--admin-warning)`},children:[p.filter(e=>(e.retry_count||0)>=3&&!f.has(e.status)).length,` 个高重试(≥3)`]})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:`8px 12px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--cg-border)`,fontSize:12,color:`var(--cg-text-muted)`},children:[(0,L.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,L.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`var(--admin-success)`,animation:`pulse 2s infinite`}}),`实时刷新中`]}),(0,L.jsxs)(`span`,{children:[`共 `,r.length,` 条`]}),_>0&&(0,L.jsxs)(`span`,{style:{color:`var(--admin-danger)`,fontWeight:600},children:[`⚠ `,_,` 异常`]}),v>0&&(0,L.jsxs)(`span`,{style:{color:`var(--admin-primary)`},children:[`🔄 `,v,` 运行中`]}),y>0&&(0,L.jsxs)(`span`,{style:{color:`var(--admin-warning)`},children:[`⏳ `,y,` 排队`]}),(0,L.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,gap:2,background:`var(--cg-border)`,borderRadius:6,padding:2},children:[(0,L.jsx)(`button`,{onClick:()=>a(`flat`),style:{padding:`3px 10px`,fontSize:11,border:`none`,borderRadius:4,cursor:`pointer`,background:i===`flat`?`var(--cg-surface)`:`transparent`,color:i===`flat`?`var(--cg-text)`:`var(--cg-text-muted)`,fontWeight:i===`flat`?600:400,boxShadow:i===`flat`?`0 1px 2px rgba(0,0,0,0.08)`:`none`},children:`列表`}),(0,L.jsx)(`button`,{onClick:()=>a(`grouped`),style:{padding:`3px 10px`,fontSize:11,border:`none`,borderRadius:4,cursor:`pointer`,background:i===`grouped`?`var(--cg-surface)`:`transparent`,color:i===`grouped`?`var(--cg-text)`:`var(--cg-text-muted)`,fontWeight:i===`grouped`?600:400,boxShadow:i===`grouped`?`0 1px 2px rgba(0,0,0,0.08)`:`none`},children:`按数据源`})]})]}),i===`flat`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`40px 1fr 110px 90px 72px 60px 50px 1fr 130px`,padding:`8px 12px`,fontSize:11,fontWeight:600,color:`var(--cg-text-muted)`,borderBottom:`1px solid var(--cg-border)`,background:`var(--cg-bg)`,position:`sticky`,top:0,zIndex:1},children:[(0,L.jsx)(`span`,{children:`#`}),(0,L.jsx)(`span`,{children:`数据源`}),(0,L.jsx)(`span`,{children:`目标字段`}),(0,L.jsx)(`span`,{children:`智能体`}),(0,L.jsx)(`span`,{children:`状态`}),(0,L.jsx)(`span`,{children:`置信度`}),(0,L.jsx)(`span`,{children:`重试`}),(0,L.jsx)(`span`,{children:`失败原因`}),(0,L.jsx)(`span`,{children:`时间`})]}),d.map((e,t)=>{let n=vt[e.status]||vt.PENDING,r=K[e.agent]||e.agent,i=G.find(t=>t.key===e.agent)?.color||`var(--cg-text-muted)`,a=f.has(e.status),o=e.retry_count||0,s=c===e.id;return(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{onClick:()=>l(s?null:e.id),style:{display:`grid`,gridTemplateColumns:`40px 1fr 110px 90px 72px 60px 50px 1fr 130px`,padding:`8px 12px`,fontSize:13,color:`var(--cg-text)`,borderBottom:s?`none`:`1px solid var(--cg-bg)`,alignItems:`center`,background:s||a?`var(--cg-bg)`:t%2==0?`var(--cg-surface)`:`var(--cg-bg)`,borderLeft:a?`3px solid var(--admin-danger)`:`3px solid transparent`,transition:`background 0.1s`,cursor:`pointer`},children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:12},children:t+1}),(0,L.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,fontWeight:500},title:e.source_name,children:e.source_name.length>30?e.source_name.slice(0,28)+`…`:e.source_name}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:12},children:e.target_field}),(0,L.jsx)(`span`,{style:{fontSize:11,color:i,fontWeight:500,display:`flex`,alignItems:`center`,gap:4},children:r}),(0,L.jsx)(`span`,{style:{fontSize:11,fontWeight:600,padding:`2px 6px`,borderRadius:6,background:n.bg,color:n.color,textAlign:`center`,display:`inline-block`},children:n.label}),(0,L.jsx)(`span`,{style:{fontSize:12,color:`var(--cg-text-muted)`},children:e.confidence==null?`-`:`${Math.round(e.confidence*100)}%`}),(0,L.jsx)(`span`,{style:{fontSize:12},children:o>0?(0,L.jsxs)(`span`,{style:{padding:`1px 5px`,borderRadius:4,fontSize:10,fontWeight:600,background:o>=3?`var(--cg-bg)`:`var(--admin-warning-light)`,color:o>=3?`var(--admin-danger)`:`var(--admin-warning)`},children:[o,`×`]}):(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`-`})}),(0,L.jsx)(`span`,{style:{fontSize:11,color:a?`var(--admin-danger)`:`var(--cg-text-muted)`,fontWeight:a?500:400,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e.failure_reason||``,children:e.failure_reason?e.failure_reason.length>40?e.failure_reason.slice(0,38)+`…`:e.failure_reason:`-`}),(0,L.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.committed_at?e.committed_at.slice(0,16).replace(`T`,` `):e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]}),s&&(0,L.jsxs)(`div`,{style:{padding:`12px 16px 12px 52px`,background:`var(--cg-bg)`,borderBottom:`1px solid var(--admin-primary)`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px 24px`,fontSize:12,color:`var(--cg-text)`},children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`数据源`}),(0,L.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,wordBreak:`break-all`},children:e.source_name})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`智能体 · 状态`}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,marginTop:2},children:[(0,L.jsx)(`span`,{style:{color:i,fontWeight:600},children:r}),(0,L.jsx)(`span`,{style:{fontSize:10,padding:`1px 6px`,borderRadius:4,background:n.bg,color:n.color,fontWeight:600},children:n.label}),o>0&&(0,L.jsxs)(`span`,{style:{fontSize:10,color:`var(--admin-warning)`},children:[`重试 `,o,` 次`]})]})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`置信度`}),(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginTop:2},children:e.confidence==null?(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:`未评估`}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{style:{width:80,height:4,borderRadius:2,background:`var(--cg-border)`},children:(0,L.jsx)(`div`,{style:{width:`${Math.round(e.confidence*100)}%`,height:`100%`,borderRadius:2,background:e.confidence>=.7?`var(--admin-success)`:e.confidence>=.4?`var(--admin-warning)`:`var(--admin-danger)`}})}),(0,L.jsxs)(`span`,{style:{fontWeight:600},children:[Math.round(e.confidence*100),`%`]})]})})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`时间线`}),(0,L.jsxs)(`div`,{style:{fontSize:11,marginTop:2},children:[(0,L.jsxs)(`div`,{children:[`创建: `,e.created_at?e.created_at.slice(0,19).replace(`T`,` `):`-`]}),e.committed_at&&(0,L.jsxs)(`div`,{children:[`提交: `,e.committed_at.slice(0,19).replace(`T`,` `)]})]})]}),e.final_value_preview&&(0,L.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10,textTransform:`uppercase`},children:`写入值预览`}),(0,L.jsx)(`div`,{style:{marginTop:2,padding:`6px 10px`,borderRadius:6,background:`var(--cg-surface)`,border:`1px solid var(--cg-border)`,fontFamily:`monospace`,fontSize:11,wordBreak:`break-all`,maxHeight:60,overflow:`auto`},children:e.final_value_preview})]}),e.failure_reason&&(0,L.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,L.jsx)(`span`,{style:{color:`var(--admin-danger)`,fontSize:10,textTransform:`uppercase`},children:`失败原因`}),(0,L.jsx)(`div`,{style:{marginTop:2,padding:`6px 10px`,borderRadius:6,background:`var(--cg-bg)`,border:`1px solid var(--admin-danger-light)`,fontSize:11,lineHeight:1.5,wordBreak:`break-all`,maxHeight:80,overflow:`auto`},children:e.failure_reason})]})]})]},e.id)})]}),i===`grouped`&&(0,L.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:0},children:Array.from(h.entries()).sort(([,e],[,t])=>{let n=+!e.some(e=>f.has(e.status)),r=+!t.some(e=>f.has(e.status));return n===r?e.filter(e=>e.status===`COMMITTED`).length/e.length-t.filter(e=>e.status===`COMMITTED`).length/t.length:n-r}).map(([e,t])=>{let n=o.has(e),r=t.length,i=t.filter(e=>e.status===`COMMITTED`).length,a=t.filter(e=>f.has(e.status)).length,s=r>0?Math.round(i/r*100):0,c=a>0,l={};for(let e of t)l[e.agent]=(l[e.agent]||0)+1;return(0,L.jsxs)(`div`,{style:{borderBottom:`1px solid var(--cg-border)`},children:[(0,L.jsxs)(`button`,{onClick:()=>g(e),style:{display:`flex`,alignItems:`center`,gap:10,padding:`10px 12px`,width:`100%`,border:`none`,background:c?`var(--admin-danger-light)`:n?`var(--cg-bg)`:`var(--cg-surface)`,borderLeft:c?`3px solid var(--admin-danger)`:`3px solid transparent`,cursor:`pointer`,textAlign:`left`,transition:`background 0.1s`},children:[(0,L.jsx)(`span`,{style:{transition:`transform 0.15s`,transform:n?`rotate(90deg)`:`rotate(0deg)`,color:`var(--cg-text-muted)`,fontSize:12},children:`▶`}),(0,L.jsx)(`span`,{style:{flex:1,fontSize:13,fontWeight:600,color:`var(--cg-text)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e,children:e}),c&&(0,L.jsxs)(`span`,{style:{fontSize:10,fontWeight:600,padding:`2px 6px`,borderRadius:4,background:`var(--cg-bg)`,color:`var(--admin-danger)`},children:[`⚠ `,a]}),(0,L.jsx)(`div`,{style:{display:`flex`,gap:3},children:Object.entries(l).map(([e,t])=>{let n=K[e]||e,r=G.find(t=>t.key===e)?.color||`var(--cg-text-muted)`;return(0,L.jsxs)(`span`,{style:{fontSize:10,padding:`1px 5px`,borderRadius:4,background:`${r}14`,color:r,fontWeight:500},children:[n,` `,t]},e)})}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,minWidth:100},children:[(0,L.jsx)(`div`,{style:{width:60,height:4,borderRadius:2,background:`var(--cg-border)`,overflow:`hidden`},children:(0,L.jsx)(`div`,{style:{width:`${s}%`,height:`100%`,borderRadius:2,background:s>=95?`var(--admin-success)`:s>=50?`var(--admin-warning)`:`var(--admin-danger)`,transition:`width 0.3s`}})}),(0,L.jsxs)(`span`,{style:{fontSize:11,fontWeight:600,minWidth:40,textAlign:`right`,color:s>=95?`var(--admin-success)`:s>=50?`var(--admin-warning)`:`var(--admin-danger)`},children:[i,`/`,r]})]})]}),n&&(0,L.jsx)(`div`,{style:{background:`var(--cg-bg)`},children:t.map((e,t)=>{let n=vt[e.status]||vt.PENDING,r=K[e.agent]||e.agent,i=G.find(t=>t.key===e.agent)?.color||`var(--cg-text-muted)`,a=f.has(e.status),o=e.retry_count||0;return(0,L.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`24px 110px 80px 72px 55px 44px 1fr 120px`,padding:`6px 12px 6px 30px`,fontSize:12,color:`var(--cg-text)`,borderBottom:`1px solid var(--cg-bg)`,alignItems:`center`,background:a||t%2==0?`var(--cg-bg)`:`var(--cg-surface)`},children:[(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:10},children:t+1}),(0,L.jsx)(`span`,{style:{color:`var(--cg-text-muted)`},children:e.target_field}),(0,L.jsx)(`span`,{style:{fontSize:10,color:i,fontWeight:500},children:r}),(0,L.jsx)(`span`,{style:{fontSize:10,fontWeight:600,padding:`1px 5px`,borderRadius:4,background:n.bg,color:n.color,textAlign:`center`},children:n.label}),(0,L.jsx)(`span`,{style:{fontSize:11,color:`var(--cg-text-muted)`},children:e.confidence==null?`-`:`${Math.round(e.confidence*100)}%`}),(0,L.jsx)(`span`,{style:{fontSize:11},children:o>0?(0,L.jsxs)(`span`,{style:{padding:`0px 4px`,borderRadius:3,fontSize:9,fontWeight:600,background:o>=3?`var(--cg-bg)`:`var(--admin-warning-light)`,color:o>=3?`var(--admin-danger)`:`var(--admin-warning)`},children:[o,`×`]}):`-`}),(0,L.jsx)(`span`,{style:{fontSize:10,color:a?`var(--admin-danger)`:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},title:e.failure_reason||``,children:e.failure_reason?e.failure_reason.length>50?e.failure_reason.slice(0,48)+`…`:e.failure_reason:`-`}),(0,L.jsx)(`span`,{style:{fontSize:10,color:`var(--cg-text-muted)`},children:e.committed_at?e.committed_at.slice(0,16).replace(`T`,` `):e.created_at?e.created_at.slice(0,16).replace(`T`,` `):`-`})]},e.id)})})]},e)})})]})}export{W as DataManagement};