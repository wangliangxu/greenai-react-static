import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{Yt as t}from"./chart-vendor-CaAGlfls.js";import{t as n}from"./react-vendor-aFS6SG-0.js";import{f as r,m as i,p as a}from"./router-vendor-D8ZmRCh1.js";import{a as o,g as s,i as c,n as l,t as u}from"./editor-vendor-DNpPfJmi.js";import{l as d,n as f}from"./api-DrSRLQJE.js";import{An as p,At as m,Br as h,Dr as g,En as _,G as ee,H as v,Kn as te,Mr as ne,Mt as re,Nt as ie,Pn as ae,Q as y,T as b,U as oe,Vr as se,Wn as ce,Wt as le,Y as x,_a as S,an as ue,er as de,mt as C,nr as fe,o as w,or as pe,ri as me,rr as T,ta as he,tr as ge,xt as E,zt as _e}from"./ui-vendor-DMKiJq3S.js";import{$t as D,Yt as ve,an as ye,in as be}from"./index-CjL7pBlT.js";import{a as O,i as k,n as A,o as j,r as M}from"./markdown-vendor-Czd3_F8U.js";/* empty css                   *//* empty css                        */import{i as N,t as P}from"./markdownHeadings-BBGavgS5.js";import{t as xe}from"./UnitSlidesView-BaASfgIl.js";import{H as F,K as Se,j as I}from"./admin-media-Da_GJ6SX.js";import"./adminQueries-CzYBwYA0.js";import{n as L,t as R}from"./ImageCard-BaIuTVm9.js";import{n as Ce,t as we}from"./NotebookCellsEditor-C01APQn2.js";var z=n(),B=e(t(),1),V=s();function Te({unitId:e,onClose:t,onSuccess:n}){let[r,i]=(0,B.useState)(``),[a,o]=(0,B.useState)(!1),{data:s,isLoading:c}=F({search:r}),l=I(),u=async t=>{try{await l.mutateAsync({resourceId:t.id,unitId:e}),n()}catch(e){console.error(`Failed to associate image:`,e),alert(`添加图片失败，请重试`)}};return a?(0,V.jsx)(L,{onClose:()=>o(!1),onSuccess:()=>{o(!1)}}):(0,V.jsx)(`div`,{className:`modal-overlay`,children:(0,V.jsxs)(`div`,{className:`modal-content`,style:{maxWidth:`900px`,width:`90%`,height:`80vh`,display:`flex`,flexDirection:`column`},children:[(0,V.jsxs)(`div`,{className:`modal-header`,children:[(0,V.jsx)(`h2`,{children:`选择图片`}),(0,V.jsx)(`button`,{className:`modal-close`,onClick:t,children:(0,V.jsx)(w,{size:24})})]}),(0,V.jsxs)(`div`,{className:`modal-body`,style:{flex:1,overflow:`hidden`,display:`flex`,flexDirection:`column`,padding:0},children:[(0,V.jsxs)(`div`,{style:{padding:`1rem`,borderBottom:`1px solid var(--cg-border)`,display:`flex`,gap:`1rem`},children:[(0,V.jsxs)(`div`,{className:`search-box`,style:{flex:1},children:[(0,V.jsx)(C,{size:18,className:`search-icon`}),(0,V.jsx)(`input`,{type:`text`,placeholder:`搜索图片...`,value:r,onChange:e=>i(e.target.value),className:`search-input`})]}),(0,V.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>o(!0),children:[(0,V.jsx)(b,{size:16}),`上传新图片`]})]}),(0,V.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`1rem`},children:c?(0,V.jsx)(`div`,{className:`loading`,children:`加载中...`}):s&&s.length>0?(0,V.jsx)(`div`,{className:`image-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`1rem`},children:s.map(e=>(0,V.jsxs)(`div`,{className:`image-selection-item`,style:{position:`relative`},children:[(0,V.jsx)(R,{image:e}),(0,V.jsx)(`div`,{className:`image-overlay`,style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s`,borderRadius:`8px`,cursor:`pointer`},onClick:()=>u(e),onMouseEnter:e=>e.currentTarget.style.opacity=`1`,onMouseLeave:e=>e.currentTarget.style.opacity=`0`,children:(0,V.jsx)(`button`,{className:`btn btn-primary btn-sm`,children:`选择此图片`})})]},e.id))}):(0,V.jsx)(`div`,{className:`empty-state`,children:(0,V.jsx)(`p`,{children:`没有找到图片`})})})]})]})})}function Ee({lesson:e,contentType:t,unitId:n,onClose:r,onSave:i}){let[a,o]=(0,B.useState)(e.title||``),[s,c]=(0,B.useState)(e.description||``),[l,u]=(0,B.useState)((e.tags||[]).join(`, `)),[d,f]=(0,B.useState)(e.id||``),[p,m]=(0,B.useState)(!1),[h,_]=(0,B.useState)(``);return(0,V.jsx)(`div`,{className:`modal-overlay`,onClick:r,children:(0,V.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:`600px`,maxHeight:`90vh`,overflow:`auto`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`24px`,paddingBottom:`16px`,borderBottom:`1px solid var(--cg-border)`},children:[(0,V.jsxs)(`h2`,{style:{margin:0,fontSize:`1.25rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`span`,{style:{background:`var(--admin-primary)`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`},children:(e=>({concept:`概念`,method:`原理`,app:`活动`,case:`案例`,practice:`练习`,tool:`工具`,resource:`资源`})[e]||e)(t)}),`管理课程`]}),(0,V.jsx)(`button`,{onClick:r,style:{background:`none`,border:`none`,fontSize:`1.5rem`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`4px`},children:(0,V.jsx)(w,{size:20})})]}),(0,V.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),_(``),m(!0);try{await i({...e,id:d,title:a,description:s,tags:l.split(`,`).map(e=>e.trim()).filter(Boolean)}),r()}catch(e){_(e.message||`保存失败`)}finally{m(!1)}},children:[(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,V.jsx)(g,{size:16}),`课程标题 *`]}),(0,V.jsx)(`input`,{type:`text`,className:`form-input`,value:a,onChange:e=>o(e.target.value),placeholder:`输入课程标题`,required:!0})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,V.jsx)(g,{size:16}),`摘要 / 描述`]}),(0,V.jsx)(`textarea`,{className:`form-input`,value:s,onChange:e=>c(e.target.value),placeholder:`输入课程摘要或描述`,rows:3,style:{resize:`vertical`}})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,V.jsx)(v,{size:16}),`标签 / 关键词`]}),(0,V.jsx)(`input`,{type:`text`,className:`form-input`,value:l,onChange:e=>u(e.target.value),placeholder:`用逗号分隔，例如：温度, 测量, 科学`}),(0,V.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:`多个标签用逗号分隔`})]}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,V.jsx)(T,{size:16}),`课程 ID`]}),(0,V.jsx)(`input`,{type:`text`,className:`form-input`,value:d,onChange:e=>f(e.target.value),placeholder:`例如：activity-01`}),(0,V.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:`用于系统内部标识，建议使用英文和数字`})]}),h&&(0,V.jsx)(`div`,{style:{padding:`12px`,background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,borderRadius:`8px`,marginBottom:`16px`,fontSize:`0.875rem`},children:h}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,justifyContent:`flex-end`,marginTop:`24px`,paddingTop:`16px`,borderTop:`1px solid var(--cg-border)`},children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:r,disabled:p,children:`取消`}),(0,V.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:p||!a.trim(),style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,V.jsx)(E,{size:16}),p?`保存中...`:`保存`]})]})]})]})})}function De({lesson:e,contentType:t,unitId:n,onClose:r,onSave:i}){let[a,o]=(0,B.useState)(e.associated_units||[n]),[s,c]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!0),[d,p]=(0,B.useState)(``),{data:m}=D();(0,B.useEffect)(()=>{(async()=>{try{let r=e.id||e.title,i=await f.get(`/api/content/lesson/${r}/${t}/units`);i.data&&i.data.unit_ids&&i.data.unit_ids.length>0?o(i.data.unit_ids):e.associated_units||o([n])}catch(t){t.response?.status!==404&&console.error(`Failed to load associations:`,t),e.associated_units||o([n])}finally{u(!1)}})()},[e.id,e.title,t,n,e.associated_units]);let h=async e=>{e.preventDefault(),p(``),c(!0);try{if(a.length===0){p(`请至少选择一个单元`),c(!1);return}await i({associated_units:a})}catch(e){let t=e?.response?.data?.detail||e?.message||`保存失败，请重试`;p(t),console.error(`保存关联关系失败:`,e)}finally{c(!1)}},g=e=>{o(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,V.jsx)(`div`,{className:`modal-overlay`,onClick:r,children:(0,V.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:`600px`,maxHeight:`90vh`,overflow:`auto`},children:[(0,V.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`24px`,paddingBottom:`16px`,borderBottom:`1px solid var(--cg-border)`},children:[(0,V.jsxs)(`h2`,{style:{margin:0,fontSize:`1.25rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,V.jsx)(`span`,{style:{background:`var(--admin-primary)`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`},children:(e=>({concept:`概念`,method:`原理`,app:`活动`,case:`案例`,practice:`练习`,tool:`工具`,resource:`资源`})[e]||e)(t)}),`管理单元关联`]}),(0,V.jsx)(`button`,{onClick:r,style:{background:`none`,border:`none`,fontSize:`1.5rem`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`4px`},children:(0,V.jsx)(w,{size:20})})]}),l?(0,V.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`},children:(0,V.jsx)(`p`,{children:`加载关联关系...`})}):(0,V.jsxs)(`form`,{onSubmit:h,children:[(0,V.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,V.jsxs)(`p`,{style:{fontSize:`0.875rem`,color:`var(--cg-text-muted)`,margin:`0 0 16px 0`},children:[`当前课程：`,(0,V.jsx)(`strong`,{children:e.title})]})}),(0,V.jsxs)(`div`,{className:`form-group`,children:[(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,V.jsx)(ae,{size:16}),`关联单元（可多选）`]}),(0,V.jsxs)(`div`,{style:{border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`12px`,maxHeight:`300px`,overflowY:`auto`,background:`var(--cg-bg)`},children:[m?.map(e=>(0,V.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`8px`,cursor:`pointer`,borderRadius:`4px`,background:a.includes(e.id)?`var(--admin-primary-light)`:`transparent`,marginBottom:`4px`,transition:`background 0.2s`},children:[(0,V.jsx)(`input`,{type:`checkbox`,checked:a.includes(e.id),onChange:()=>g(e.id),style:{cursor:`pointer`}}),(0,V.jsxs)(`div`,{style:{flex:1},children:[(0,V.jsxs)(`span`,{style:{fontWeight:a.includes(e.id)?600:400,fontSize:`0.875rem`},children:[e.id,`: `,e.title]}),e.description&&(0,V.jsx)(`p`,{style:{margin:`2px 0 0 0`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.description})]})]},e.id)),(!m||m.length===0)&&(0,V.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,margin:0},children:`暂无可用单元`})]}),(0,V.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`选择该课程需要关联到的单元，一个课程可以关联到多个单元`})]}),d&&(0,V.jsx)(`div`,{style:{padding:`12px`,background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,borderRadius:`8px`,marginBottom:`16px`,fontSize:`0.875rem`},children:d}),(0,V.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,justifyContent:`flex-end`,marginTop:`24px`,paddingTop:`16px`,borderTop:`1px solid var(--cg-border)`},children:[(0,V.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:r,disabled:s,children:`取消`}),(0,V.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:s,style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,V.jsx)(E,{size:16}),s?`保存中...`:`保存`]})]})]})]})})}function Oe(e){if(!e)return``;if(e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`data:`))return e;let t=e.replace(/^\/+api\/+api\/+api\/+/g,`/api/`).replace(/^\/+api\/+api\/+/g,`/api/`).replace(/^\/+api\/+/g,`/api/`);return d(t)}function ke(e){return(0,z.renderToStaticMarkup)((0,V.jsx)(`div`,{className:`markdown-export`,children:(0,V.jsx)(j,{remarkPlugins:[O,k],rehypePlugins:[A,M,N],components:{img:({src:e=``,alt:t=``,node:n,...r})=>(0,V.jsx)(`img`,{src:Oe(String(e||``)),alt:t,...r})},children:P(e)})}))}var Ae=`
  * { box-sizing: border-box; }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    max-width: 860px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.8;
    color: #334155;
    background: #ffffff;
  }
  .print-title {
    text-align: center;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 0.75rem;
    margin: 0 0 1.5rem;
    color: #0f172a;
  }
  .markdown-export {
    counter-reset: h1-counter;
    font-size: 1rem;
  }
  .markdown-export h1,
  .markdown-export h2,
  .markdown-export h3,
  .markdown-export h4,
  .markdown-export h5,
  .markdown-export h6 {
    color: #0f172a;
    line-height: 1.35;
    margin: 1.35em 0 0.65em;
    page-break-after: avoid;
  }
  .markdown-export h1 { font-size: 1.45rem; }
  .markdown-export h2 { font-size: 1.25rem; }
  .markdown-export h3 { font-size: 1.08rem; }
  .markdown-export p { margin: 0 0 0.9em; text-align: justify; }
  .markdown-export ul,
  .markdown-export ol { margin: 0 0 1em 1.35em; padding-left: 1.2em; }
  .markdown-export li { margin: 0.28em 0; }
  .markdown-export blockquote {
    border-left: 4px solid #3b82f6;
    background: #f0f7ff;
    padding: 0.75rem 1rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
  }
  .markdown-export blockquote p:last-child { margin-bottom: 0; }
  .markdown-export code {
    background: #f1f5f9;
    color: #be123c;
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 0.9em;
  }
  .markdown-export pre {
    background: #0f172a;
    color: #e2e8f0;
    border-radius: 10px;
    padding: 1rem;
    overflow-x: auto;
    white-space: pre-wrap;
    margin: 1rem 0;
  }
  .markdown-export pre code {
    background: transparent;
    color: inherit;
    padding: 0;
  }
  .markdown-export img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1rem auto;
    border-radius: 8px;
  }
  .markdown-export table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    page-break-inside: avoid;
  }
  .markdown-export th,
  .markdown-export td {
    border: 1px solid #e2e8f0;
    padding: 0.5rem 0.65rem;
    vertical-align: top;
  }
  .markdown-export th {
    background: #f8fafc;
    color: #0f172a;
    font-weight: 700;
  }
  .markdown-export hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 1.5rem 0;
  }
  @media print {
    body { padding: 0; max-width: none; }
    a { color: inherit; text-decoration: none; }
  }
`;function H(e){return typeof e.content==`string`?e.content:``}function U(e){switch(e){case`case`:return`cases`;case`resource`:return`resources`;case`practice`:return`practice`;default:return`method`}}function W(e,t){let n=e[U(t)];return Array.isArray(n)?[...n]:[]}function G(e){return e.id||e.title||e.name||``}function je(e,t,n){return W(e,t).findIndex(e=>G(e)===n)}function Me(e,t){if(typeof e==`object`&&e){let t=e;if(typeof t.response?.data?.detail==`string`)return t.response.data.detail;if(typeof t.message==`string`)return t.message}return t}function Ne(e){return typeof e==`string`?new Date(e).toLocaleString(`zh-CN`):`—`}function Pe(e){let t=G(e);return{...e,id:e.id||t,title:e.title||e.name||t}}function K(){let{unitId:e}=i(),t=a(),n=r(),[s,d]=(0,B.useState)(!1),[f,g]=(0,B.useState)(null),[v,b]=(0,B.useState)(null),[C,w]=(0,B.useState)({open:!1,contentType:`case`}),[T,E]=(0,B.useState)(!1),[D,F]=(0,B.useState)(``),[I,L]=(0,B.useState)(!1),[R,z]=(0,B.useState)(!0),[Oe,K]=(0,B.useState)(!1),[q,Fe]=(0,B.useState)(!1),[J,Y]=(0,B.useState)(!!n.state?.openSlides),[Ie,Le]=(0,B.useState)(50),X=(0,B.useRef)(!1),Z=(0,B.useRef)(null),{data:Re,isLoading:ze}=ve(e),Q=Re;Se(`image`,{unit_id:e});let Be=be(),$=ye();return ze?(0,V.jsx)(`div`,{className:`page-container`,children:(0,V.jsx)(`div`,{className:`loading`,children:`加载中...`})}):Q?(0,V.jsxs)(`div`,{className:`page-container`,children:[(0,V.jsx)(`div`,{className:`page-header`,children:(0,V.jsxs)(`div`,{className:`unit-toolbar`,children:[(0,V.jsxs)(`button`,{onClick:()=>t(Q.course_id?`/teacher/course/detail/${Q.course_id}`:`/teacher/course`),className:`toolbar-btn`,title:Q.course_id?`返回该课程的单元列表`:`返回课程管理`,children:[(0,V.jsx)(S,{size:18}),(0,V.jsx)(`span`,{children:Q.course_id?`返回单元列表`:`返回课程管理`})]}),(0,V.jsx)(`div`,{className:`toolbar-divider`}),!q&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`选择学生侧 AI 快捷按钮`,onClick:()=>t(`/teacher/course/${e}/ai-quick-actions`),children:[(0,V.jsx)(y,{size:16}),(0,V.jsx)(`span`,{children:`AI 快捷按钮`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`编排并发布学生分页学习内容`,onClick:()=>t(`/teacher/course/${e}/learning-pages`),children:[(0,V.jsx)(le,{size:16}),(0,V.jsx)(`span`,{children:`学生学习卡片`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`编排并发布教师讲授页面`,onClick:()=>t(`/teacher/course/${e}/presentation`),children:[(0,V.jsx)(ie,{size:16}),(0,V.jsx)(`span`,{children:`教师讲授页面`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`生成、上传、编辑并导出本单元 PPT 课件`,"aria-pressed":J,onClick:()=>Y(e=>!e),children:[(0,V.jsx)(ie,{size:16}),(0,V.jsx)(`span`,{children:`PPT 课件库`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`管理本单元的互动与动画`,onClick:()=>K(!0),children:[(0,V.jsx)(y,{size:16}),(0,V.jsx)(`span`,{children:`互动与动画`})]})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:q?`返回单元正文`:`管理学生可运行的代码单元`,"aria-pressed":q,onClick:()=>Fe(e=>!e),children:[q?(0,V.jsx)(S,{size:16}):(0,V.jsx)(x,{size:16}),(0,V.jsx)(`span`,{children:q?`返回正文`:`代码实践`})]}),!q&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`toolbar-divider`}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`编辑章节正文`,onClick:()=>{E(!0),F(H(Q))},children:[(0,V.jsx)(_e,{size:16}),(0,V.jsx)(`span`,{children:`编辑`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`导出为PDF`,onClick:()=>{let e=window.open(``,`_blank`);if(e){let t=e.document,n=ke(H(Q));t.head.innerHTML=``,t.body.innerHTML=``,t.title=Q.title,t.documentElement.lang=`zh-CN`;let r=t.createElement(`meta`);r.setAttribute(`charset`,`utf-8`),t.head.appendChild(r);let i=t.createElement(`style`);i.textContent=`@font-face{font-display:block;font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(/assets/KaTeX_AMS-Regular-BQhdFMY1.woff2)format("woff2"),url(/assets/KaTeX_AMS-Regular-DMm9YOAa.woff)format("woff"),url(/assets/KaTeX_AMS-Regular-DRggAlZN.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2)format("woff2"),url(/assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff)format("woff"),url(/assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2)format("woff2"),url(/assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff)format("woff"),url(/assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2)format("woff2"),url(/assets/KaTeX_Fraktur-Bold-BsDP51OF.woff)format("woff"),url(/assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2)format("woff2"),url(/assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff)format("woff"),url(/assets/KaTeX_Fraktur-Regular-CB_wures.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Main-Bold-Cx986IdX.woff2)format("woff2"),url(/assets/KaTeX_Main-Bold-Jm3AIy58.woff)format("woff"),url(/assets/KaTeX_Main-Bold-waoOVXN0.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2)format("woff2"),url(/assets/KaTeX_Main-BoldItalic-SpSLRI95.woff)format("woff"),url(/assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Main-Italic-NWA7e6Wa.woff2)format("woff2"),url(/assets/KaTeX_Main-Italic-BMLOBm91.woff)format("woff"),url(/assets/KaTeX_Main-Italic-3WenGoN9.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Main-Regular-B22Nviop.woff2)format("woff2"),url(/assets/KaTeX_Main-Regular-Dr94JaBh.woff)format("woff"),url(/assets/KaTeX_Main-Regular-ypZvNtVU.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2)format("woff2"),url(/assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff)format("woff"),url(/assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Math-Italic-t53AETM-.woff2)format("woff2"),url(/assets/KaTeX_Math-Italic-DA0__PXp.woff)format("woff"),url(/assets/KaTeX_Math-Italic-flOr_0UB.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:700;src:url(/assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2)format("woff2"),url(/assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff)format("woff"),url(/assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:italic;font-weight:400;src:url(/assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2)format("woff2"),url(/assets/KaTeX_SansSerif-Italic-DN2j7dab.woff)format("woff"),url(/assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:400;src:url(/assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2)format("woff2"),url(/assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff)format("woff"),url(/assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Script-Regular-D3wIWfF6.woff2)format("woff2"),url(/assets/KaTeX_Script-Regular-D5yQViql.woff)format("woff"),url(/assets/KaTeX_Script-Regular-C5JkGWo-.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size1-Regular-mCD8mA8B.woff2)format("woff2"),url(/assets/KaTeX_Size1-Regular-C195tn64.woff)format("woff"),url(/assets/KaTeX_Size1-Regular-Dbsnue_I.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size2-Regular-Dy4dx90m.woff2)format("woff2"),url(/assets/KaTeX_Size2-Regular-oD1tc_U0.woff)format("woff"),url(/assets/KaTeX_Size2-Regular-B7gKUWhC.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(data:font/woff2;base64,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)format("woff2"),url(/assets/KaTeX_Size3-Regular-CTq5MqoE.woff)format("woff"),url(/assets/KaTeX_Size3-Regular-DgpXs0kz.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2)format("woff2"),url(/assets/KaTeX_Size4-Regular-BF-4gkZK.woff)format("woff"),url(/assets/KaTeX_Size4-Regular-DWFBv043.ttf)format("truetype")}@font-face{font-display:block;font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2)format("woff2"),url(/assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff)format("woff"),url(/assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf)format("truetype")}.katex{text-indent:0;text-rendering:auto;font:1.21em/1.2 KaTeX_Main,Times New Roman,serif;position:relative}.katex *{border-color:currentColor;-ms-high-contrast-adjust:none!important}.katex .katex-version:after{content:"0.16.44"}.katex .katex-mathml{clip:rect(1px,1px,1px,1px);border:0;width:1px;height:1px;padding:0;position:absolute;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{white-space:nowrap;width:min-content;position:relative}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathboldfrak,.katex .textboldfrak{font-family:KaTeX_Fraktur;font-weight:700}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .mathsfit,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;table-layout:fixed;display:inline-table}.katex .vlist-r{display:table-row}.katex .vlist{vertical-align:bottom;display:table-cell;position:relative}.katex .vlist>span{height:0;display:block;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{width:0;overflow:hidden}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{vertical-align:bottom;width:2px;min-width:2px;font-size:1px;display:table-cell}.katex .vbox{flex-direction:column;align-items:baseline;display:inline-flex}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{flex-direction:row;display:inline-flex}.katex .thinbox{width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;width:100%;display:inline-block}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .smash{line-height:0;display:inline}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;width:100%;display:inline-block}.katex .hdashline{border-bottom-style:dashed;width:100%;display:inline-block}.katex .sqrt>.root{margin-left:.277778em;margin-right:-.555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.833333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.714286em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.857143em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14286em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71429em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96286em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55429em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.416667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.583333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.833333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.347222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.416667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.486111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.694444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.833333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44028em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.289352em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.347222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.405093em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.462963em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.520833em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.578704em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.694444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.833333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.289296em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.337512em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.385728em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.433944em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.578592em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.694311em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.833173em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.200965em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.241158em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.281351em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.321543em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.361736em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.401929em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.482315em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.578778em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.694534em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.833601em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{width:.12em;display:inline-block}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{min-width:1px;display:inline-block}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentColor;stroke:currentColor;height:inherit;width:100%;display:block;position:absolute}.katex svg path{stroke:none}.katex svg{fill-rule:nonzero;fill-opacity:1;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex img{border-style:none;min-width:0;max-width:none;min-height:0;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{width:50.2%;position:absolute;left:0;overflow:hidden}.katex .halfarrow-right{width:50.2%;position:absolute;right:0;overflow:hidden}.katex .brace-left{width:25.1%;position:absolute;left:0;overflow:hidden}.katex .brace-center{width:50%;position:absolute;left:25%;overflow:hidden}.katex .brace-right{width:25.1%;position:absolute;right:0;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{box-sizing:border-box;border-top:.049em solid;border-right:.049em solid;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo) ")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo) ")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{text-align:left;display:inline-block;position:absolute;right:calc(50% + .3em)}.katex .cd-label-right{text-align:right;display:inline-block;position:absolute;left:calc(50% + .3em)}.katex-display{text-align:center;margin:1em 0;display:block}.katex-display>.katex{text-align:center;white-space:nowrap;display:block}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}`+Ae,t.head.appendChild(i);let a=t.createElement(`div`),o=t.createElement(`h1`);o.className=`print-title`,o.textContent=Q.title,a.appendChild(o);let s=t.createElement(`div`);s.innerHTML=n,a.appendChild(s),t.body.appendChild(a),setTimeout(()=>{e.print()},500)}},children:[(0,V.jsx)(ne,{size:16}),(0,V.jsx)(`span`,{children:`导出PDF`})]}),(0,V.jsxs)(`button`,{className:`toolbar-btn`,title:`打印当前页面`,onClick:()=>window.print(),children:[(0,V.jsx)(re,{size:16}),(0,V.jsx)(`span`,{children:`打印`})]})]})]})}),!q&&(0,V.jsxs)(`div`,{style:{marginTop:`1.5rem`},children:[(0,V.jsx)(`h2`,{style:{textAlign:`center`,fontSize:`1.5rem`,fontWeight:600,color:`var(--cg-text)`,margin:`0 0 0.5rem 0`},children:Q.title}),(0,V.jsxs)(`div`,{style:{textAlign:`center`,fontSize:`0.82rem`,color:`var(--cg-text-muted)`,marginBottom:`1.25rem`},children:[(0,V.jsxs)(`span`,{children:[`创建时间：`,Ne(Q.created_at)]}),(0,V.jsx)(`span`,{style:{margin:`0 1rem`},children:`|`}),(0,V.jsxs)(`span`,{children:[`修改时间：`,Ne(Q.updated_at)]})]}),(0,V.jsx)(`div`,{className:`management-card card`,children:(0,V.jsx)(`div`,{className:`card-body`,children:T?(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`md-toolbar`,children:[(0,V.jsx)(`button`,{type:`button`,title:`标题1`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(0,t),i=D.slice(t,n),a=D.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);F(r.slice(0,o)+`# `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+2},0)},children:(0,V.jsx)(fe,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`标题2`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(0,t),i=D.slice(t,n),a=D.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);F(r.slice(0,o)+`## `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+3},0)},children:(0,V.jsx)(ge,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`标题3`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(0,t),i=D.slice(t,n),a=D.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);F(r.slice(0,o)+`### `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+4},0)},children:(0,V.jsx)(de,{size:15})}),(0,V.jsx)(`span`,{className:`md-toolbar-sep`}),(0,V.jsx)(`button`,{type:`button`,title:`粗体`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(t,n)||`粗体文字`;F(D.slice(0,t)+`**`+r+`**`+D.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+2,e.selectionEnd=t+2+r.length},0)},children:(0,V.jsx)(he,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`斜体`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(t,n)||`斜体文字`;F(D.slice(0,t)+`*`+r+`*`+D.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+1,e.selectionEnd=t+1+r.length},0)},children:(0,V.jsx)(ce,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`删除线`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(t,n)||`删除文字`;F(D.slice(0,t)+`~~`+r+`~~`+D.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+2,e.selectionEnd=t+2+r.length},0)},children:(0,V.jsx)(ee,{size:15})}),(0,V.jsx)(`span`,{className:`md-toolbar-sep`}),(0,V.jsx)(`button`,{type:`button`,title:`引用`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`
> 引用文字
`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+3,e.selectionEnd=t+7},0)},children:(0,V.jsx)(m,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`无序列表`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`
- 列表项
`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+3,e.selectionEnd=t+6},0)},children:(0,V.jsx)(_,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`有序列表`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`
1. 列表项
`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+4,e.selectionEnd=t+7},0)},children:(0,V.jsx)(p,{size:15})}),(0,V.jsx)(`span`,{className:`md-toolbar-sep`}),(0,V.jsx)(`button`,{type:`button`,title:`行内代码`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(t,n)||`code`;F(D.slice(0,t)+"`"+r+"`"+D.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+1,e.selectionEnd=t+1+r.length},0)},children:(0,V.jsx)(me,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`代码块`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+"\n```\n代码\n```\n"+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+5,e.selectionEnd=t+7},0)},children:(0,V.jsx)(x,{size:15})}),(0,V.jsx)(`span`,{className:`md-toolbar-sep`}),(0,V.jsx)(`button`,{type:`button`,title:`链接`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=D.slice(t,n)||`链接文字`;F(D.slice(0,t)+`[`+r+`](url)`+D.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+r.length+3,e.selectionEnd=t+r.length+6},0)},children:(0,V.jsx)(ae,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`图片`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`![描述](图片URL)`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+5,e.selectionEnd=t+9},0)},children:(0,V.jsx)(te,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`分隔线`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`

---

`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+6},0)},children:(0,V.jsx)(ue,{size:15})}),(0,V.jsx)(`button`,{type:`button`,title:`表格`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;F(D.slice(0,t)+`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 内容 | 内容 | 内容 |
`+D.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+55},0)},children:(0,V.jsx)(oe,{size:15})}),(0,V.jsx)(`div`,{style:{flex:1}}),(0,V.jsx)(`button`,{type:`button`,className:`md-toolbar-action md-toolbar-save`,disabled:I,onClick:async()=>{L(!0);try{let t={content:D};await $.mutateAsync({unitId:e,data:t}),E(!1)}catch{alert(`保存失败`)}L(!1)},children:I?`保存中...`:`✓ 保存`}),(0,V.jsx)(`button`,{type:`button`,className:`md-toolbar-action md-toolbar-cancel`,onClick:()=>E(!1),children:`✕ 取消`}),(0,V.jsx)(`span`,{className:`md-toolbar-sep`}),(0,V.jsx)(`button`,{type:`button`,title:R?`隐藏预览`:`显示预览`,onClick:()=>z(e=>!e),children:R?(0,V.jsx)(se,{size:15}):(0,V.jsx)(h,{size:15})})]}),(0,V.jsxs)(`div`,{ref:Z,style:{display:`flex`,position:`relative`},onMouseMove:e=>{if(!X.current||!Z.current)return;let t=Z.current.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;Le(Math.min(85,Math.max(25,n)))},onMouseUp:()=>{X.current=!1},onMouseLeave:()=>{X.current=!1},children:[(0,V.jsx)(`div`,{style:{width:R?`${Ie}%`:`100%`,minWidth:0},children:(0,V.jsx)(l,{id:`md-editor`,className:`unit-markdown-codemirror`,value:D,onChange:e=>F(e),extensions:[c({base:o,codeLanguages:u})],height:`600px`,style:{border:`1px solid var(--cg-border)`,borderRadius:R?`0`:`0 0 8px 8px`,borderTop:`none`,overflow:`hidden`},basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!0,highlightSelectionMatches:!0}})}),R&&(0,V.jsx)(`div`,{className:`md-splitter`,onMouseDown:e=>{e.preventDefault(),X.current=!0},children:(0,V.jsx)(pe,{size:14})}),R&&(0,V.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,V.jsx)(`div`,{className:`markdown-viewer`,style:{height:`600px`,overflowY:`auto`,padding:`16px`,border:`1px solid var(--cg-border)`,borderRadius:`0 0 8px 0`,borderTop:`none`,borderLeft:`none`,background:`var(--cg-surface)`,color:`var(--cg-text)`},children:(0,V.jsx)(j,{remarkPlugins:[O,k],rehypePlugins:[A,M,N],children:P(D)})})})]})]}):(0,V.jsx)(`div`,{className:`markdown-viewer`,style:{minHeight:`200px`,padding:`8px 0`,lineHeight:1.8,color:`var(--cg-text)`},children:H(Q)?(0,V.jsx)(j,{remarkPlugins:[O,k],rehypePlugins:[A,M,N],children:P(H(Q))}):(0,V.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontStyle:`italic`},children:`暂无正文内容，点击编辑添加`})})})})]}),q&&(0,V.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,V.jsx)(we,{unitId:e,role:`teacher`})}),Oe&&(0,V.jsx)(`div`,{className:`teacher-interactions-overlay`,onMouseDown:()=>K(!1),children:(0,V.jsxs)(`div`,{className:`teacher-interactions-dialog`,onMouseDown:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`teacher-interactions-dialog__bar`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`单元互动与动画`}),(0,V.jsx)(`span`,{children:`创建、关联、预览并插入到章节正文`})]}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`关闭互动与动画`,onClick:()=>K(!1),children:`×`})]}),(0,V.jsx)(`div`,{className:`teacher-interactions-dialog__body`,children:(0,V.jsx)(Ce,{unitId:e,onInsertTool:async t=>{if(!e||!Q)return;let n=T?D:H(Q),r=`:::tool:${t}\n:::`;if(n.includes(`:::tool:${t}`)){window.alert(`该互动已经插入章节正文。`);return}let i=`${n.trimEnd()}${n.trim()?`

`:``}${r}\n`;await $.mutateAsync({unitId:e,data:{content:i}}),T&&F(i),window.alert(`互动已插入章节正文末尾。`)}})})]})}),J&&(0,V.jsx)(`div`,{className:`teacher-interactions-overlay`,onMouseDown:()=>Y(!1),children:(0,V.jsxs)(`div`,{className:`teacher-interactions-dialog`,style:{width:`min(1220px, 96vw)`,maxHeight:`92vh`},onMouseDown:e=>e.stopPropagation(),children:[(0,V.jsxs)(`div`,{className:`teacher-interactions-dialog__bar`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`PPT 课件生成与管理`}),(0,V.jsx)(`span`,{children:`AI 大纲定制生成、上传 PPTX、单页润色编辑与多主题导出`})]}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`关闭 PPT 课件管理`,onClick:()=>Y(!1),children:`×`})]}),(0,V.jsx)(`div`,{className:`teacher-interactions-dialog__body`,style:{padding:`16px 24px`,overflowY:`auto`},children:(0,V.jsx)(xe,{unitId:e,unitTitle:Q.title,isTeacher:!0})})]})}),s&&e&&(0,V.jsx)(Te,{unitId:e,onClose:()=>d(!1),onSuccess:()=>{}}),f&&e&&Q&&(0,V.jsx)(Ee,{lesson:Pe(f.lesson),contentType:f.contentType,unitId:e,onClose:()=>g(null),onSave:async t=>{try{let n=f.contentType,r=G(f.lesson),i=je(Q,n,r);if(i===-1){g(null);return}let a=U(n),o=W(Q,n);o[i]={...o[i],id:t.id,title:t.title,description:t.description,summary:t.description,tags:t.tags};let s={[a]:o};await $.mutateAsync({unitId:e,data:s}),g(null)}catch(e){console.error(`Failed to save lesson:`,e),alert(`保存失败，请重试`)}}}),v&&e&&(0,V.jsx)(De,{lesson:Pe(v.lesson),contentType:v.contentType,unitId:e,onClose:()=>b(null),onSave:async e=>{try{let t=G(v.lesson);if(!t){alert(`课程ID不能为空`);return}await Be.mutateAsync({lesson_id:t,lesson_type:v.contentType,unit_ids:e.associated_units}),b(null)}catch(e){console.error(`Failed to save associations:`,e),alert(Me(e,`保存关联关系失败，请重试`))}}}),C.open&&e&&Q&&(0,V.jsx)(Ee,{lesson:{id:``,title:``,description:``,tags:[]},contentType:C.contentType,unitId:e,onClose:()=>w({open:!1,contentType:`case`}),onSave:async t=>{try{let n=C.contentType,r=U(n),i=W(Q,n);i.push({id:t.id||`${n}-${Date.now()}`,title:t.title,description:t.description,summary:t.description,tags:t.tags});let a={[r]:i};await $.mutateAsync({unitId:e,data:a}),w({open:!1,contentType:`case`})}catch(e){console.error(`Failed to create lesson:`,e),alert(`创建课程失败，请重试`)}}}),(0,V.jsx)(`style`,{children:`
        .unit-toolbar {
          display: flex;
          align-items: center;
          gap: 2px;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          padding: 4px;
          margin-bottom: 1rem;
        }
        .toolbar-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--cg-text-muted);
          transition: all 0.15s;
          white-space: nowrap;
        }
        .toolbar-btn:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: var(--cg-text);
        }
        .toolbar-btn:active {
          background: color-mix(in srgb, var(--cg-surface) 78%, var(--admin-primary) 22%);
        }
        .toolbar-divider {
          width: 1px;
          height: 24px;
          background: var(--cg-border);
          margin: 0 4px;
        }
        .management-card {
          padding: 1.5rem;
          margin-top: 0;
        }
        .md-toolbar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
          padding: 6px 8px;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px 8px 0 0;
          border-bottom: none;
        }
        .md-toolbar button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 28px;
          border: none;
          background: transparent;
          border-radius: 4px;
          cursor: pointer;
          color: var(--cg-text-muted);
          transition: all 0.12s;
        }
        .md-toolbar button:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: var(--cg-text);
        }
        .md-toolbar button:active {
          background: color-mix(in srgb, var(--cg-surface) 78%, var(--admin-primary) 22%);
        }
        .md-toolbar-sep {
          width: 1px;
          height: 20px;
          background: var(--cg-border);
          margin: 0 4px;
        }
        .md-toolbar-action {
          width: auto !important;
          padding: 4px 14px !important;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 6px !important;
          white-space: nowrap;
        }
        .md-toolbar-save {
          background: #4f46e5 !important;
          color: #fff !important;
        }
        .md-toolbar-save:hover {
          background: #4338ca !important;
        }
        .md-toolbar-save:disabled {
          opacity: 0.6;
          cursor: not-allowed !important;
        }
        .md-toolbar-cancel {
          background: var(--cg-surface) !important;
          color: var(--cg-text-muted) !important;
          border: 1px solid var(--cg-border) !important;
        }
        .md-toolbar-cancel:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%) !important;
          color: var(--cg-text) !important;
        }
        .md-splitter {
          width: 8px;
          cursor: col-resize;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cg-bg);
          border-top: none;
          border-bottom: 1px solid var(--cg-border);
          color: var(--cg-text-muted);
          transition: background 0.15s, color 0.15s;
          user-select: none;
          flex-shrink: 0;
        }
        .md-splitter:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          color: var(--cg-text);
        }
        .unit-markdown-codemirror .cm-editor {
          background: var(--cg-surface);
          color: var(--cg-text);
        }
        .unit-markdown-codemirror .cm-scroller {
          background: var(--cg-surface);
        }
        .unit-markdown-codemirror .cm-content {
          caret-color: var(--cg-text);
        }
        .unit-markdown-codemirror .cm-line {
          color: var(--cg-text);
        }
        .unit-markdown-codemirror .cm-gutters {
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border-right: 1px solid var(--cg-border);
        }
        .unit-markdown-codemirror .cm-activeLine,
        .unit-markdown-codemirror .cm-activeLineGutter {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
        }
        .unit-markdown-codemirror .cm-selectionBackground,
        .unit-markdown-codemirror .cm-focused .cm-selectionBackground {
          background: color-mix(in srgb, var(--admin-primary) 34%, transparent);
        }
        .unit-markdown-codemirror .cm-cursor {
          border-left-color: var(--cg-text);
        }
        .unit-markdown-codemirror .cm-placeholder {
          color: var(--cg-text-muted);
        }
        .teacher-interactions-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(2, 6, 23, 0.68);
        }
        .teacher-interactions-dialog {
          width: min(1180px, 96vw);
          max-height: 92vh;
          overflow: hidden;
          border: 1px solid var(--cg-border);
          border-radius: 16px;
          background: var(--cg-surface);
          color: var(--cg-text);
          box-shadow: 0 26px 80px rgba(0, 0, 0, 0.38);
        }
        .teacher-interactions-dialog__bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 15px 18px;
          border-bottom: 1px solid var(--cg-border);
          background: var(--cg-bg);
        }
        .teacher-interactions-dialog__bar > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 3px;
        }
        .teacher-interactions-dialog__bar span {
          color: var(--cg-text-muted);
          font-size: 0.78rem;
        }
        .teacher-interactions-dialog__bar button {
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: var(--cg-text-muted);
          cursor: pointer;
          font-size: 1.5rem;
        }
        .teacher-interactions-dialog__bar button:hover {
          background: color-mix(in srgb, var(--cg-surface) 80%, var(--cg-text) 10%);
          color: var(--cg-text);
        }
        .teacher-interactions-dialog__body {
          max-height: calc(92vh - 66px);
          overflow: auto;
          padding: 16px;
          background: var(--cg-bg);
        }
      `})]}):(0,V.jsx)(`div`,{className:`page-container`,children:(0,V.jsxs)(`div`,{className:`error-state`,children:[(0,V.jsx)(`h3`,{children:`未找到课程单元`}),(0,V.jsx)(`button`,{onClick:()=>t(`/teacher/course`),className:`btn btn-primary`,children:`返回课程管理`})]})})}export{K as UnitContentManagement};