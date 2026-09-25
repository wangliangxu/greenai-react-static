import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{t as n}from"./react-vendor-A6zAEKt4.js";import{i as r,n as i,r as a,s as o,t as s}from"./editor-vendor-Ch6zc3nG.js";import{d as c,u as l}from"./router-vendor-C4C_6Mfu.js";import{l as u,n as d}from"./api-C6QdgyJO.js";import{At as f,Bn as p,Gr as m,Jn as h,K as g,Mr as ee,Nr as te,Ot as ne,Rn as re,Rt as ie,T as _,Tn as ae,Tr as oe,U as v,Vi as se,W as y,Xn as ce,Yn as le,Z as b,Zn as x,br as S,er as ue,et as C,gt as w,kn as T,o as E,ra as D,tn as de,xn as fe,xt as O}from"./ui-vendor-BJACYxZ2.js";import{Xt as pe,an as me,en as k,on as he}from"./index-CCWUv77F.js";import{a as A,i as j,t as M}from"./markdown-vendor-g6IVHhYp.js";/* empty css                        *//* empty css                   */import{t as N}from"./markdownHeadings-CZcBfcfX.js";import{G as ge,H as P,j as F}from"./admin-media-avVPWqPX.js";import"./adminQueries-C-W6N3Cr.js";import{n as I,t as L}from"./ImageCard-D5Q_WPy1.js";import{n as _e,t as ve}from"./NotebookCellsEditor-fEtFYrB8.js";var R=n(),z=e(t(),1),B=o();function ye({unitId:e,onClose:t,onSuccess:n}){let[r,i]=(0,z.useState)(``),[a,o]=(0,z.useState)(!1),{data:s,isLoading:c}=P({search:r}),l=F(),u=async t=>{try{await l.mutateAsync({resourceId:t.id,unitId:e}),n()}catch(e){console.error(`Failed to associate image:`,e),alert(`添加图片失败，请重试`)}};return a?(0,B.jsx)(I,{onClose:()=>o(!1),onSuccess:()=>{o(!1)}}):(0,B.jsx)(`div`,{className:`modal-overlay`,children:(0,B.jsxs)(`div`,{className:`modal-content`,style:{maxWidth:`900px`,width:`90%`,height:`80vh`,display:`flex`,flexDirection:`column`},children:[(0,B.jsxs)(`div`,{className:`modal-header`,children:[(0,B.jsx)(`h2`,{children:`选择图片`}),(0,B.jsx)(`button`,{className:`modal-close`,onClick:t,children:(0,B.jsx)(E,{size:24})})]}),(0,B.jsxs)(`div`,{className:`modal-body`,style:{flex:1,overflow:`hidden`,display:`flex`,flexDirection:`column`,padding:0},children:[(0,B.jsxs)(`div`,{style:{padding:`1rem`,borderBottom:`1px solid var(--cg-border)`,display:`flex`,gap:`1rem`},children:[(0,B.jsxs)(`div`,{className:`search-box`,style:{flex:1},children:[(0,B.jsx)(w,{size:18,className:`search-icon`}),(0,B.jsx)(`input`,{type:`text`,placeholder:`搜索图片...`,value:r,onChange:e=>i(e.target.value),className:`search-input`})]}),(0,B.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>o(!0),children:[(0,B.jsx)(_,{size:16}),`上传新图片`]})]}),(0,B.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`1rem`},children:c?(0,B.jsx)(`div`,{className:`loading`,children:`加载中...`}):s&&s.length>0?(0,B.jsx)(`div`,{className:`image-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`1rem`},children:s.map(e=>(0,B.jsxs)(`div`,{className:`image-selection-item`,style:{position:`relative`},children:[(0,B.jsx)(L,{image:e}),(0,B.jsx)(`div`,{className:`image-overlay`,style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s`,borderRadius:`8px`,cursor:`pointer`},onClick:()=>u(e),onMouseEnter:e=>e.currentTarget.style.opacity=`1`,onMouseLeave:e=>e.currentTarget.style.opacity=`0`,children:(0,B.jsx)(`button`,{className:`btn btn-primary btn-sm`,children:`选择此图片`})})]},e.id))}):(0,B.jsx)(`div`,{className:`empty-state`,children:(0,B.jsx)(`p`,{children:`没有找到图片`})})})]})]})})}function V({lesson:e,contentType:t,unitId:n,onClose:r,onSave:i}){let[a,o]=(0,z.useState)(e.title||``),[s,c]=(0,z.useState)(e.description||``),[l,u]=(0,z.useState)((e.tags||[]).join(`, `)),[d,f]=(0,z.useState)(e.id||``),[p,m]=(0,z.useState)(!1),[h,g]=(0,z.useState)(``);return(0,B.jsx)(`div`,{className:`modal-overlay`,onClick:r,children:(0,B.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:`600px`,maxHeight:`90vh`,overflow:`auto`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`24px`,paddingBottom:`16px`,borderBottom:`1px solid var(--cg-border)`},children:[(0,B.jsxs)(`h2`,{style:{margin:0,fontSize:`1.25rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`span`,{style:{background:`var(--admin-primary)`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`},children:(e=>({concept:`概念`,method:`原理`,app:`活动`,case:`案例`,practice:`练习`,tool:`工具`,resource:`资源`})[e]||e)(t)}),`管理课程`]}),(0,B.jsx)(`button`,{onClick:r,style:{background:`none`,border:`none`,fontSize:`1.5rem`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`4px`},children:(0,B.jsx)(E,{size:20})})]}),(0,B.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),g(``),m(!0);try{await i({...e,id:d,title:a,description:s,tags:l.split(`,`).map(e=>e.trim()).filter(Boolean)}),r()}catch(e){g(e.message||`保存失败`)}finally{m(!1)}},children:[(0,B.jsxs)(`div`,{className:`form-group`,children:[(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,B.jsx)(S,{size:16}),`课程标题 *`]}),(0,B.jsx)(`input`,{type:`text`,className:`form-input`,value:a,onChange:e=>o(e.target.value),placeholder:`输入课程标题`,required:!0})]}),(0,B.jsxs)(`div`,{className:`form-group`,children:[(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,B.jsx)(S,{size:16}),`摘要 / 描述`]}),(0,B.jsx)(`textarea`,{className:`form-input`,value:s,onChange:e=>c(e.target.value),placeholder:`输入课程摘要或描述`,rows:3,style:{resize:`vertical`}})]}),(0,B.jsxs)(`div`,{className:`form-group`,children:[(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,B.jsx)(v,{size:16}),`标签 / 关键词`]}),(0,B.jsx)(`input`,{type:`text`,className:`form-input`,value:l,onChange:e=>u(e.target.value),placeholder:`用逗号分隔，例如：温度, 测量, 科学`}),(0,B.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:`多个标签用逗号分隔`})]}),(0,B.jsxs)(`div`,{className:`form-group`,children:[(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,B.jsx)(x,{size:16}),`课程 ID`]}),(0,B.jsx)(`input`,{type:`text`,className:`form-input`,value:d,onChange:e=>f(e.target.value),placeholder:`例如：activity-01`}),(0,B.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`},children:`用于系统内部标识，建议使用英文和数字`})]}),h&&(0,B.jsx)(`div`,{style:{padding:`12px`,background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,borderRadius:`8px`,marginBottom:`16px`,fontSize:`0.875rem`},children:h}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,justifyContent:`flex-end`,marginTop:`24px`,paddingTop:`16px`,borderTop:`1px solid var(--cg-border)`},children:[(0,B.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:r,disabled:p,children:`取消`}),(0,B.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:p||!a.trim(),style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,B.jsx)(O,{size:16}),p?`保存中...`:`保存`]})]})]})]})})}function be({lesson:e,contentType:t,unitId:n,onClose:r,onSave:i}){let[a,o]=(0,z.useState)(e.associated_units||[n]),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!0),[f,p]=(0,z.useState)(``),{data:m}=k();(0,z.useEffect)(()=>{(async()=>{try{let r=e.id||e.title,i=await d.get(`/api/content/lesson/${r}/${t}/units`);i.data&&i.data.unit_ids&&i.data.unit_ids.length>0?o(i.data.unit_ids):e.associated_units||o([n])}catch(t){t.response?.status!==404&&console.error(`Failed to load associations:`,t),e.associated_units||o([n])}finally{u(!1)}})()},[e.id,e.title,t,n,e.associated_units]);let h=async e=>{e.preventDefault(),p(``),c(!0);try{if(a.length===0){p(`请至少选择一个单元`),c(!1);return}await i({associated_units:a})}catch(e){let t=e?.response?.data?.detail||e?.message||`保存失败，请重试`;p(t),console.error(`保存关联关系失败:`,e)}finally{c(!1)}},g=e=>{o(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,B.jsx)(`div`,{className:`modal-overlay`,onClick:r,children:(0,B.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:`600px`,maxHeight:`90vh`,overflow:`auto`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`24px`,paddingBottom:`16px`,borderBottom:`1px solid var(--cg-border)`},children:[(0,B.jsxs)(`h2`,{style:{margin:0,fontSize:`1.25rem`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`span`,{style:{background:`var(--admin-primary)`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`},children:(e=>({concept:`概念`,method:`原理`,app:`活动`,case:`案例`,practice:`练习`,tool:`工具`,resource:`资源`})[e]||e)(t)}),`管理单元关联`]}),(0,B.jsx)(`button`,{onClick:r,style:{background:`none`,border:`none`,fontSize:`1.5rem`,cursor:`pointer`,color:`var(--cg-text-muted)`,padding:`4px`},children:(0,B.jsx)(E,{size:20})})]}),l?(0,B.jsx)(`div`,{style:{padding:`2rem`,textAlign:`center`},children:(0,B.jsx)(`p`,{children:`加载关联关系...`})}):(0,B.jsxs)(`form`,{onSubmit:h,children:[(0,B.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,B.jsxs)(`p`,{style:{fontSize:`0.875rem`,color:`var(--cg-text-muted)`,margin:`0 0 16px 0`},children:[`当前课程：`,(0,B.jsx)(`strong`,{children:e.title})]})}),(0,B.jsxs)(`div`,{className:`form-group`,children:[(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`8px`},children:[(0,B.jsx)(T,{size:16}),`关联单元（可多选）`]}),(0,B.jsxs)(`div`,{style:{border:`1px solid var(--cg-border)`,borderRadius:`8px`,padding:`12px`,maxHeight:`300px`,overflowY:`auto`,background:`var(--cg-bg)`},children:[m?.map(e=>(0,B.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`8px`,cursor:`pointer`,borderRadius:`4px`,background:a.includes(e.id)?`var(--admin-primary-light)`:`transparent`,marginBottom:`4px`,transition:`background 0.2s`},children:[(0,B.jsx)(`input`,{type:`checkbox`,checked:a.includes(e.id),onChange:()=>g(e.id),style:{cursor:`pointer`}}),(0,B.jsxs)(`div`,{style:{flex:1},children:[(0,B.jsxs)(`span`,{style:{fontWeight:a.includes(e.id)?600:400,fontSize:`0.875rem`},children:[e.id,`: `,e.title]}),e.description&&(0,B.jsx)(`p`,{style:{margin:`2px 0 0 0`,fontSize:`0.75rem`,color:`var(--cg-text-muted)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.description})]})]},e.id)),(!m||m.length===0)&&(0,B.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,margin:0},children:`暂无可用单元`})]}),(0,B.jsx)(`p`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`选择该课程需要关联到的单元，一个课程可以关联到多个单元`})]}),f&&(0,B.jsx)(`div`,{style:{padding:`12px`,background:`var(--admin-danger-light)`,color:`var(--admin-danger)`,borderRadius:`8px`,marginBottom:`16px`,fontSize:`0.875rem`},children:f}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,justifyContent:`flex-end`,marginTop:`24px`,paddingTop:`16px`,borderTop:`1px solid var(--cg-border)`},children:[(0,B.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:r,disabled:s,children:`取消`}),(0,B.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:s,style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,B.jsx)(O,{size:16}),s?`保存中...`:`保存`]})]})]})]})})}function H(e){if(!e)return``;if(e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`data:`))return e;let t=e.replace(/^\/+api\/+api\/+api\/+/g,`/api/`).replace(/^\/+api\/+api\/+/g,`/api/`).replace(/^\/+api\/+/g,`/api/`);return u(t)}function xe(e){return(0,R.renderToStaticMarkup)((0,B.jsx)(`div`,{className:`markdown-export`,children:(0,B.jsx)(A,{remarkPlugins:[j],rehypePlugins:[M],components:{img:({src:e=``,alt:t=``,node:n,...r})=>(0,B.jsx)(`img`,{src:H(String(e||``)),alt:t,...r})},children:N(e)})}))}var Se=`
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
`;function U(e){return typeof e.content==`string`?e.content:``}function W(e){switch(e){case`case`:return`cases`;case`resource`:return`resources`;case`practice`:return`practice`;default:return`method`}}function G(e,t){let n=e[W(t)];return Array.isArray(n)?[...n]:[]}function K(e){return e.id||e.title||e.name||``}function Ce(e,t,n){return G(e,t).findIndex(e=>K(e)===n)}function we(e,t){if(typeof e==`object`&&e){let t=e;if(typeof t.response?.data?.detail==`string`)return t.response.data.detail;if(typeof t.message==`string`)return t.message}return t}function q(e){return typeof e==`string`?new Date(e).toLocaleString(`zh-CN`):`—`}function J(e){let t=K(e);return{...e,id:e.id||t,title:e.title||e.name||t}}function Y(){let{unitId:e}=c(),t=l(),[n,o]=(0,z.useState)(!1),[u,d]=(0,z.useState)(null),[_,v]=(0,z.useState)(null),[x,S]=(0,z.useState)({open:!1,contentType:`case`}),[w,E]=(0,z.useState)(!1),[O,k]=(0,z.useState)(``),[P,F]=(0,z.useState)(!1),[I,L]=(0,z.useState)(!0),[R,H]=(0,z.useState)(!1),[Y,Te]=(0,z.useState)(!1),[Ee,De]=(0,z.useState)(50),X=(0,z.useRef)(!1),Z=(0,z.useRef)(null),{data:Oe,isLoading:ke}=pe(e),Q=Oe;ge(`image`,{unit_id:e});let Ae=me(),$=he();return ke?(0,B.jsx)(`div`,{className:`page-container`,children:(0,B.jsx)(`div`,{className:`loading`,children:`加载中...`})}):Q?(0,B.jsxs)(`div`,{className:`page-container`,children:[(0,B.jsx)(`div`,{className:`page-header`,children:(0,B.jsxs)(`div`,{className:`unit-toolbar`,children:[(0,B.jsxs)(`button`,{onClick:()=>t(`/teacher/course`),className:`toolbar-btn`,title:`返回单元目录`,children:[(0,B.jsx)(D,{size:18}),(0,B.jsx)(`span`,{children:`返回`})]}),(0,B.jsx)(`div`,{className:`toolbar-divider`}),!Y&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:`选择学生侧 AI 快捷按钮`,onClick:()=>t(`/teacher/course/${e}/ai-quick-actions`),children:[(0,B.jsx)(C,{size:16}),(0,B.jsx)(`span`,{children:`AI 快捷按钮`})]}),(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:`管理本单元的互动与动画`,onClick:()=>H(!0),children:[(0,B.jsx)(C,{size:16}),(0,B.jsx)(`span`,{children:`互动与动画`})]})]}),(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:Y?`返回单元正文`:`管理学生可运行的代码单元`,"aria-pressed":Y,onClick:()=>Te(e=>!e),children:[Y?(0,B.jsx)(D,{size:16}):(0,B.jsx)(b,{size:16}),(0,B.jsx)(`span`,{children:Y?`返回正文`:`代码实践`})]}),!Y&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:`toolbar-divider`}),(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:`编辑章节正文`,onClick:()=>{E(!0),k(U(Q))},children:[(0,B.jsx)(ie,{size:16}),(0,B.jsx)(`span`,{children:`编辑`})]}),(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:`导出为PDF`,onClick:()=>{let e=window.open(``,`_blank`);if(e){let t=e.document,n=xe(U(Q));t.head.innerHTML=``,t.body.innerHTML=``,t.title=Q.title,t.documentElement.lang=`zh-CN`;let r=t.createElement(`meta`);r.setAttribute(`charset`,`utf-8`),t.head.appendChild(r);let i=t.createElement(`style`);i.textContent=Se,t.head.appendChild(i);let a=t.createElement(`div`),o=t.createElement(`h1`);o.className=`print-title`,o.textContent=Q.title,a.appendChild(o);let s=t.createElement(`div`);s.innerHTML=n,a.appendChild(s),t.body.appendChild(a),setTimeout(()=>{e.print()},500)}},children:[(0,B.jsx)(oe,{size:16}),(0,B.jsx)(`span`,{children:`导出PDF`})]}),(0,B.jsxs)(`button`,{className:`toolbar-btn`,title:`打印当前页面`,onClick:()=>window.print(),children:[(0,B.jsx)(f,{size:16}),(0,B.jsx)(`span`,{children:`打印`})]})]})]})}),!Y&&(0,B.jsxs)(`div`,{style:{marginTop:`1.5rem`},children:[(0,B.jsx)(`h2`,{style:{textAlign:`center`,fontSize:`1.5rem`,fontWeight:600,color:`var(--cg-text)`,margin:`0 0 0.5rem 0`},children:Q.title}),(0,B.jsxs)(`div`,{style:{textAlign:`center`,fontSize:`0.82rem`,color:`var(--cg-text-muted)`,marginBottom:`1.25rem`},children:[(0,B.jsxs)(`span`,{children:[`创建时间：`,q(Q.created_at)]}),(0,B.jsx)(`span`,{style:{margin:`0 1rem`},children:`|`}),(0,B.jsxs)(`span`,{children:[`修改时间：`,q(Q.updated_at)]})]}),(0,B.jsx)(`div`,{className:`management-card card`,children:(0,B.jsx)(`div`,{className:`card-body`,children:w?(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`div`,{className:`md-toolbar`,children:[(0,B.jsx)(`button`,{type:`button`,title:`标题1`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(0,t),i=O.slice(t,n),a=O.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);k(r.slice(0,o)+`# `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+2},0)},children:(0,B.jsx)(ce,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`标题2`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(0,t),i=O.slice(t,n),a=O.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);k(r.slice(0,o)+`## `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+3},0)},children:(0,B.jsx)(le,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`标题3`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(0,t),i=O.slice(t,n),a=O.slice(n),o=r.lastIndexOf(`
`)+1,s=r.slice(o);k(r.slice(0,o)+`### `+s+i+a),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+4},0)},children:(0,B.jsx)(h,{size:15})}),(0,B.jsx)(`span`,{className:`md-toolbar-sep`}),(0,B.jsx)(`button`,{type:`button`,title:`粗体`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(t,n)||`粗体文字`;k(O.slice(0,t)+`**`+r+`**`+O.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+2,e.selectionEnd=t+2+r.length},0)},children:(0,B.jsx)(se,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`斜体`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(t,n)||`斜体文字`;k(O.slice(0,t)+`*`+r+`*`+O.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+1,e.selectionEnd=t+1+r.length},0)},children:(0,B.jsx)(re,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`删除线`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(t,n)||`删除文字`;k(O.slice(0,t)+`~~`+r+`~~`+O.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+2,e.selectionEnd=t+2+r.length},0)},children:(0,B.jsx)(g,{size:15})}),(0,B.jsx)(`span`,{className:`md-toolbar-sep`}),(0,B.jsx)(`button`,{type:`button`,title:`引用`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`
> 引用文字
`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+3,e.selectionEnd=t+7},0)},children:(0,B.jsx)(ne,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`无序列表`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`
- 列表项
`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+3,e.selectionEnd=t+6},0)},children:(0,B.jsx)(fe,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`有序列表`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`
1. 列表项
`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+4,e.selectionEnd=t+7},0)},children:(0,B.jsx)(ae,{size:15})}),(0,B.jsx)(`span`,{className:`md-toolbar-sep`}),(0,B.jsx)(`button`,{type:`button`,title:`行内代码`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(t,n)||`code`;k(O.slice(0,t)+"`"+r+"`"+O.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+1,e.selectionEnd=t+1+r.length},0)},children:(0,B.jsx)(m,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`代码块`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+"\n```\n代码\n```\n"+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+5,e.selectionEnd=t+7},0)},children:(0,B.jsx)(b,{size:15})}),(0,B.jsx)(`span`,{className:`md-toolbar-sep`}),(0,B.jsx)(`button`,{type:`button`,title:`链接`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart,n=e.selectionEnd,r=O.slice(t,n)||`链接文字`;k(O.slice(0,t)+`[`+r+`](url)`+O.slice(n)),setTimeout(()=>{e.focus(),e.selectionStart=t+r.length+3,e.selectionEnd=t+r.length+6},0)},children:(0,B.jsx)(T,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`图片`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`![描述](图片URL)`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=t+5,e.selectionEnd=t+9},0)},children:(0,B.jsx)(p,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`分隔线`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`

---

`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+6},0)},children:(0,B.jsx)(de,{size:15})}),(0,B.jsx)(`button`,{type:`button`,title:`表格`,onClick:()=>{let e=document.getElementById(`md-editor`);if(!e)return;let t=e.selectionStart;k(O.slice(0,t)+`
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 内容 | 内容 | 内容 |
`+O.slice(t)),setTimeout(()=>{e.focus(),e.selectionStart=e.selectionEnd=t+55},0)},children:(0,B.jsx)(y,{size:15})}),(0,B.jsx)(`div`,{style:{flex:1}}),(0,B.jsx)(`button`,{type:`button`,className:`md-toolbar-action md-toolbar-save`,disabled:P,onClick:async()=>{F(!0);try{let t={content:O};await $.mutateAsync({unitId:e,data:t}),E(!1)}catch{alert(`保存失败`)}F(!1)},children:P?`保存中...`:`✓ 保存`}),(0,B.jsx)(`button`,{type:`button`,className:`md-toolbar-action md-toolbar-cancel`,onClick:()=>E(!1),children:`✕ 取消`}),(0,B.jsx)(`span`,{className:`md-toolbar-sep`}),(0,B.jsx)(`button`,{type:`button`,title:I?`隐藏预览`:`显示预览`,onClick:()=>L(e=>!e),children:I?(0,B.jsx)(te,{size:15}):(0,B.jsx)(ee,{size:15})})]}),(0,B.jsxs)(`div`,{ref:Z,style:{display:`flex`,position:`relative`},onMouseMove:e=>{if(!X.current||!Z.current)return;let t=Z.current.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;De(Math.min(85,Math.max(25,n)))},onMouseUp:()=>{X.current=!1},onMouseLeave:()=>{X.current=!1},children:[(0,B.jsx)(`div`,{style:{width:I?`${Ee}%`:`100%`,minWidth:0},children:(0,B.jsx)(i,{id:`md-editor`,className:`unit-markdown-codemirror`,value:O,onChange:e=>k(e),extensions:[a({base:r,codeLanguages:s})],height:`600px`,style:{border:`1px solid var(--cg-border)`,borderRadius:I?`0`:`0 0 8px 8px`,borderTop:`none`,overflow:`hidden`},basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!0,highlightSelectionMatches:!0}})}),I&&(0,B.jsx)(`div`,{className:`md-splitter`,onMouseDown:e=>{e.preventDefault(),X.current=!0},children:(0,B.jsx)(ue,{size:14})}),I&&(0,B.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,B.jsx)(`div`,{className:`markdown-viewer`,style:{height:`600px`,overflowY:`auto`,padding:`16px`,border:`1px solid var(--cg-border)`,borderRadius:`0 0 8px 0`,borderTop:`none`,borderLeft:`none`,background:`var(--cg-surface)`,color:`var(--cg-text)`},children:(0,B.jsx)(A,{remarkPlugins:[j],rehypePlugins:[M],children:N(O)})})})]})]}):(0,B.jsx)(`div`,{className:`markdown-viewer`,style:{minHeight:`200px`,padding:`8px 0`,lineHeight:1.8,color:`var(--cg-text)`},children:U(Q)?(0,B.jsx)(A,{remarkPlugins:[j],rehypePlugins:[M],children:N(U(Q))}):(0,B.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontStyle:`italic`},children:`暂无正文内容，点击编辑添加`})})})})]}),Y&&(0,B.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,B.jsx)(ve,{unitId:e,role:`teacher`})}),R&&(0,B.jsx)(`div`,{className:`teacher-interactions-overlay`,onMouseDown:()=>H(!1),children:(0,B.jsxs)(`div`,{className:`teacher-interactions-dialog`,onMouseDown:e=>e.stopPropagation(),children:[(0,B.jsxs)(`div`,{className:`teacher-interactions-dialog__bar`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`strong`,{children:`单元互动与动画`}),(0,B.jsx)(`span`,{children:`创建、关联、预览并插入到章节正文`})]}),(0,B.jsx)(`button`,{type:`button`,"aria-label":`关闭互动与动画`,onClick:()=>H(!1),children:`×`})]}),(0,B.jsx)(`div`,{className:`teacher-interactions-dialog__body`,children:(0,B.jsx)(_e,{unitId:e,onInsertTool:async t=>{if(!e||!Q)return;let n=w?O:U(Q),r=`:::tool:${t}\n:::`;if(n.includes(`:::tool:${t}`)){window.alert(`该互动已经插入章节正文。`);return}let i=`${n.trimEnd()}${n.trim()?`

`:``}${r}\n`;await $.mutateAsync({unitId:e,data:{content:i}}),w&&k(i),window.alert(`互动已插入章节正文末尾。`)}})})]})}),n&&e&&(0,B.jsx)(ye,{unitId:e,onClose:()=>o(!1),onSuccess:()=>{}}),u&&e&&Q&&(0,B.jsx)(V,{lesson:J(u.lesson),contentType:u.contentType,unitId:e,onClose:()=>d(null),onSave:async t=>{try{let n=u.contentType,r=K(u.lesson),i=Ce(Q,n,r);if(i===-1){d(null);return}let a=W(n),o=G(Q,n);o[i]={...o[i],id:t.id,title:t.title,description:t.description,summary:t.description,tags:t.tags};let s={[a]:o};await $.mutateAsync({unitId:e,data:s}),d(null)}catch(e){console.error(`Failed to save lesson:`,e),alert(`保存失败，请重试`)}}}),_&&e&&(0,B.jsx)(be,{lesson:J(_.lesson),contentType:_.contentType,unitId:e,onClose:()=>v(null),onSave:async e=>{try{let t=K(_.lesson);if(!t){alert(`课程ID不能为空`);return}await Ae.mutateAsync({lesson_id:t,lesson_type:_.contentType,unit_ids:e.associated_units}),v(null)}catch(e){console.error(`Failed to save associations:`,e),alert(we(e,`保存关联关系失败，请重试`))}}}),x.open&&e&&Q&&(0,B.jsx)(V,{lesson:{id:``,title:``,description:``,tags:[]},contentType:x.contentType,unitId:e,onClose:()=>S({open:!1,contentType:`case`}),onSave:async t=>{try{let n=x.contentType,r=W(n),i=G(Q,n);i.push({id:t.id||`${n}-${Date.now()}`,title:t.title,description:t.description,summary:t.description,tags:t.tags});let a={[r]:i};await $.mutateAsync({unitId:e,data:a}),S({open:!1,contentType:`case`})}catch(e){console.error(`Failed to create lesson:`,e),alert(`创建课程失败，请重试`)}}}),(0,B.jsx)(`style`,{children:`
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
      `})]}):(0,B.jsx)(`div`,{className:`page-container`,children:(0,B.jsxs)(`div`,{className:`error-state`,children:[(0,B.jsx)(`h3`,{children:`未找到课程单元`}),(0,B.jsx)(`button`,{onClick:()=>t(`/teacher/course`),className:`btn btn-primary`,children:`返回单元目录`})]})})}export{Y as UnitContentManagement};