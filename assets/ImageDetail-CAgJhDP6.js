import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,u as i}from"./router-vendor-C4C_6Mfu.js";import{l as a}from"./api-C6QdgyJO.js";import{F as o,Gt as s,Pr as c,Rt as l,U as u,Wt as d,Zn as f,bn as p,br as m,er as h,et as g,lr as _,lt as v,mi as y,nr as b,pn as x,pt as S,sr as C,x as w,zn as T}from"./ui-vendor-BJACYxZ2.js";import{hn as E}from"./index-CE3QzMvF.js";import{t as D}from"./Skeleton-DFVLJhLY.js";import{r as O}from"./bilingual-BAihdQ31.js";/* empty css                   */import{H as k,V as A,X as j,q as M,z as N}from"./admin-media-avVPWqPX.js";import{r as P,t as F}from"./formatters-BG0XNSDQ.js";import"./adminQueries-C-W6N3Cr.js";var I=e(t(),1),L=n();function R({image:e,metadata:t}){O();let n=t||e?.metadata||{},r=n.stats||n.technical||{},i=n.attrs||{},a=n.id||{},o=t=>{let r=n.abstract;return Array.isArray(r)?r.find(e=>e.lang===t)?.value||``:t===`zh`&&(n.description||e?.description)||``},s=o(`zh`),c=o(`en`);return(0,L.jsxs)(`div`,{className:`video-info-cards-container`,children:[(s||c)&&(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(m,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`内容摘要`})]}),(0,L.jsxs)(`div`,{className:`vd-value-stack`,children:[s&&(0,L.jsxs)(`div`,{className:`vd-abstract-item`,children:[(0,L.jsx)(`span`,{className:`vd-mini-tag-lang cn`,children:`ZH`}),(0,L.jsx)(`p`,{className:`vd-abstract-text`,style:{whiteSpace:`pre-wrap`},children:s})]}),c&&(0,L.jsxs)(`div`,{className:`vd-abstract-item`,children:[(0,L.jsx)(`span`,{className:`vd-mini-tag-lang en`,children:`EN`}),(0,L.jsx)(`p`,{className:`vd-abstract-text en`,style:{whiteSpace:`pre-wrap`},children:c})]})]})]}),(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(f,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`资源识别`})]}),(0,L.jsxs)(`div`,{className:`vd-value-stack`,children:[(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`资源 ID`}),(0,L.jsx)(`code`,{className:`vd-code`,children:e.id})]}),(a.sha256||e.file_hash)&&(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`SHA256`}),(0,L.jsxs)(`code`,{className:`vd-code-sm`,title:a.sha256||e.file_hash,children:[(a.sha256||e.file_hash).substring(0,12),`...`]})]})]})]}),(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(x,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`技术规格`})]}),(0,L.jsxs)(`div`,{className:`vd-grid-two`,children:[(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`文件大小`}),(0,L.jsx)(`span`,{className:`vd-value`,children:P(r.file_size||e.file_size)})]}),(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`格式`}),(0,L.jsx)(`span`,{className:`vd-value`,children:(r.file_format||e.file_format||``).toUpperCase()})]}),(r.dimensions||e.dimensions)&&(0,L.jsxs)(`div`,{className:`vd-value-item`,style:{gridColumn:`span 2`},children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`尺寸`}),(0,L.jsxs)(`span`,{className:`vd-value`,children:[(r.dimensions||e.dimensions).width,` × `,(r.dimensions||e.dimensions).height,` px`]})]})]})]}),(n.coverage_spatial||n.coverage_temporal)&&(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(b,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`地理与时间`})]}),(0,L.jsxs)(`div`,{className:`vd-value-stack`,children:[n.coverage_spatial&&(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`地名 / 空间`}),(0,L.jsxs)(`span`,{className:`vd-value`,children:[`📍 `,n.coverage_spatial]})]}),n.coverage_temporal&&(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`时间范围`}),(0,L.jsxs)(`span`,{className:`vd-value`,children:[`🕒 `,n.coverage_temporal]})]})]})]}),(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(w,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`归属发布`})]}),(0,L.jsxs)(`div`,{className:`vd-value-stack`,children:[(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`创建者`}),(0,L.jsx)(`span`,{className:`vd-value`,children:i.author||n.creator||e.created_by||`系统`})]}),(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`发布日期`}),(0,L.jsx)(`span`,{className:`vd-value`,children:F(i.published_date||n.date_created||e.created_at)})]})]})]}),(0,L.jsxs)(`section`,{className:`vd-card`,children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(v,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`来源权限`})]}),(0,L.jsxs)(`div`,{className:`vd-value-stack`,children:[(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`来源渠道`}),(0,L.jsx)(`span`,{className:`vd-value`,children:i.provider||n.source||`本地上传`})]}),(0,L.jsxs)(`div`,{className:`vd-value-item`,children:[(0,L.jsx)(`span`,{className:`vd-sub-label`,children:`许可证`}),(0,L.jsx)(`span`,{className:`vd-value`,children:n.license||`All Rights Reserved`})]})]})]}),Array.isArray(e.tags)&&e.tags.length>0&&(0,L.jsxs)(`section`,{className:`vd-card`,style:{borderBottom:`none`},children:[(0,L.jsxs)(`div`,{className:`vd-label-row`,children:[(0,L.jsx)(u,{size:14,className:`vd-icon`}),(0,L.jsx)(`span`,{className:`vd-label`,children:`标签词云`})]}),(0,L.jsx)(`div`,{className:`vd-tag-cloud-mini`,children:e.tags.slice(0,12).map((e,t)=>(0,L.jsx)(`span`,{className:`vd-mini-tag`,children:e},t))})]}),(0,L.jsx)(`style`,{children:`
        .video-info-cards-container {
          display: flex;
          flex-direction: column;
        }
        .vd-card {
          padding: 14px 16px;
          border-bottom: 1px solid var(--cg-bg);
        }
        .vd-label-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }
        .vd-icon {
          color: var(--cg-text-muted);
        }
        .vd-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        .vd-value-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vd-abstract-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          background: var(--cg-bg);
          padding: 8px;
          border-radius: 6px;
        }
        .vd-mini-tag-lang {
          font-size: 0.6rem;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .vd-mini-tag-lang.cn { background: #fee2e2; color: #ef4444; }
        .vd-mini-tag-lang.en { background: #dbeafe; color: #3b82f6; }
        .vd-abstract-text {
          margin: 0;
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--cg-text);
        }
        .vd-abstract-text.en {
          font-style: italic;
          color: var(--cg-text-muted);
        }
        .vd-grid-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .vd-value-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vd-sub-label {
          font-size: 0.7rem;
          color: var(--cg-text-muted);
        }
        .vd-value {
          font-size: 0.8125rem;
          color: var(--cg-text);
          font-weight: 500;
        }
        .vd-code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.75rem;
          background: var(--cg-bg);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--cg-text-muted);
          width: fit-content;
        }
        .vd-code-sm {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.65rem;
          color: var(--cg-text-muted);
        }
        .vd-tag-cloud-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 4px;
        }
        .vd-mini-tag {
          font-size: 0.7rem;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          color: var(--cg-text-muted);
          padding: 1px 6px;
          border-radius: 4px;
        }
      `})]})}function z({mode:e=`categories`,image:t,metadata:n,onEdit:r}){let a=i(),[o,c]=(0,I.useState)(!1),[u,f]=(0,I.useState)(280),[m,v]=(0,I.useState)(!1),y=(0,I.useRef)(null),{addToast:b}=E(),x=M(),S=async()=>{if(t?.id)try{await x.mutateAsync(t.id),b({type:`success`,message:`图片元数据生成与同步成功`})}catch(e){let t=e.response?.data?.detail||e.message||`未知错误`;b({type:`error`,message:`智能生成失败: ${t}`})}},{data:w}=k({page:1,page_size:1e3}),T=Array.isArray(w)?w:w?.items||[],D=Array.isArray(w)?w.length:w?.total||0,O=Array.from(new Set(T.map(e=>e.category).filter(Boolean))).sort(),A={};T.forEach(e=>{e.category&&(A[e.category]=(A[e.category]||0)+1)});let j=(0,I.useCallback)(e=>{e.preventDefault(),v(!0)},[]);return(0,I.useEffect)(()=>{let e=e=>{if(!m)return;let t=Math.min(Math.max(200,window.innerWidth-e.clientX),400);f(t)},t=()=>v(!1);return m&&(document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t)),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[m]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`aside`,{ref:y,className:`video-sidebar ${o?`collapsed`:``}`,style:{width:o?48:u},children:[(0,L.jsxs)(`div`,{className:`sidebar-header`,children:[(0,L.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>c(!o),children:o?(0,L.jsx)(s,{size:20}):(0,L.jsx)(d,{size:20})}),!o&&(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`flex-end`,flex:1,gap:`8px`},children:[(0,L.jsx)(`span`,{className:`sidebar-title`,style:{marginRight:`auto`},children:e===`metadata`?``:`图片主题分类`}),e===`metadata`&&(0,L.jsxs)(`button`,{className:`sidebar-header-action smart-generate-btn`,onClick:S,disabled:x.isPending,title:`利用 LLM 大模型智能生成 Intake 规范元数据`,style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 10px`,background:`linear-gradient(135deg, var(--cg-bg) 0%, #dbeafe 100%)`,color:`#1d4ed8`,border:`1px solid #bfdbfe`,borderRadius:`6px`,cursor:x.isPending?`not-allowed`:`pointer`,fontWeight:500,transition:`all 0.2s ease`,boxShadow:`0 1px 2px rgba(0,0,0,0.05)`},children:[x.isPending?(0,L.jsx)(p,{size:13,className:`animate-spin`}):(0,L.jsx)(g,{size:13}),(0,L.jsx)(`span`,{children:x.isPending?`生成中...`:`智能生成`})]}),e===`metadata`&&r&&(0,L.jsxs)(`button`,{className:`sidebar-header-action`,onClick:r,style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.75rem`,padding:`4px 10px`,background:`var(--cg-bg)`,color:`var(--cg-text-muted)`,border:`1px solid var(--cg-border)`,borderRadius:`6px`,cursor:`pointer`,fontWeight:500},children:[(0,L.jsx)(l,{size:13}),(0,L.jsx)(`span`,{children:`编辑`})]})]})]}),!o&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:`sidebar-resizer ${m?`active`:``}`,onMouseDown:j,children:(0,L.jsx)(h,{size:12})}),(0,L.jsx)(`nav`,{className:`video-tree-view`,children:e===`metadata`?(0,L.jsx)(`div`,{style:{padding:`0`},children:t?(0,L.jsx)(R,{image:t,metadata:n}):(0,L.jsx)(`div`,{className:`empty-state`,children:`未选中图片`})}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:`tree-node root-node`,children:(0,L.jsxs)(`button`,{className:`tree-item`,onClick:()=>a(`/admin/images`),children:[(0,L.jsx)(_,{size:16,className:`tree-icon`}),(0,L.jsx)(`span`,{className:`tree-label`,children:`全部图片`}),(0,L.jsx)(`span`,{className:`tree-count`,children:D})]})}),(0,L.jsxs)(`div`,{style:{flex:1,overflowY:`auto`},children:[(0,L.jsx)(`div`,{className:`tree-section-label`,children:`按主题分类`}),O.length>0?O.map(e=>(0,L.jsx)(`div`,{className:`tree-node`,children:(0,L.jsxs)(`button`,{className:`tree-item`,onClick:()=>a(`/admin/images?category=${encodeURIComponent(e)}`),children:[(0,L.jsx)(C,{size:16,className:`tree-icon`}),(0,L.jsx)(`span`,{className:`tree-label`,children:e}),(0,L.jsx)(`span`,{className:`tree-count`,children:A[e]})]})},e)):(0,L.jsx)(`div`,{className:`empty-state`,children:`暂无主题`})]})]})})]})]}),(0,L.jsx)(`style`,{children:`
      .video-sidebar {
        background: var(--cg-surface);
        border-left: 1px solid var(--cg-border);
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: calc(100vh - 144px);
        transition: width 0.2s ease;
        flex-shrink: 0;
        position: relative;
        order: 2;
      }
      .video-sidebar.collapsed { width: 48px !important; }
      .sidebar-header {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--cg-border);
        height: 48px;
      }
      .sidebar-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--cg-text-muted);
      }
      .sidebar-title { font-size: 0.875rem; font-weight: 600; color: var(--cg-text); }
      .sidebar-resizer {
        position: absolute;
        left: 0;
        top: 48px;
        bottom: 0;
        width: 4px;
        cursor: col-resize;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
      }
      .video-sidebar:hover .sidebar-resizer, .sidebar-resizer.active { opacity: 1; background: var(--cg-border); }
      .video-tree-view { flex: 1; padding: 8px 0; overflow-y: auto; }
      .tree-item {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 10px 12px;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 0.875rem;
        color: var(--cg-text-muted);
        text-align: left;
      }
      .tree-item:hover { background: var(--cg-bg); color: var(--cg-text); }
      .tree-count {
        padding: 2px 8px;
        background: var(--cg-bg);
        border-radius: 10px;
        font-size: 0.75rem;
        color: var(--cg-text-muted);
      }
      .tree-section-label {
        padding: 12px 12px 6px;
        font-size: 0.6875rem;
        font-weight: 600;
        color: var(--cg-text-muted);
        text-transform: uppercase;
      }
      .empty-state { padding: 20px 12px; text-align: center; color: var(--cg-text-muted); font-size: 0.8125rem; }
      .smart-generate-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15); }
    `})]})}var B=e=>e?e.startsWith(`http://`)||e.startsWith(`https://`)?e:a(e):``;function V(){let{id:e}=r(),t=i(),{data:n,isLoading:a}=A(e),s=N(),l=j(),[u,d]=(0,I.useState)(!1),[f,p]=(0,I.useState)({title:``,description:``,category:``,creator:``,source:``,tags:``});if(a)return(0,L.jsx)(`div`,{className:`container`,style:{padding:`40px`},children:(0,L.jsx)(D,{height:600})});if(!n)return(0,L.jsxs)(`div`,{className:`container`,style:{padding:`80px`,textAlign:`center`},children:[(0,L.jsx)(`div`,{className:`error-message`,children:`⚠️ 图片资源未找到或已被移除`}),(0,L.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>t(`/admin/images`),style:{marginTop:`20px`},children:`返回图片库`})]});let m=n.metadata||{},h=async()=>{if(window.confirm(`确定要永久删除这张图片吗？此操作不可撤销。`))try{await s.mutateAsync(n.id),t(`/admin/images`)}catch(e){alert(e.response?.data?.detail||`删除失败`)}},g=()=>{p({title:n.title||``,description:n.display_description||n.description||``,category:n.category||``,creator:m.attrs?.author||m.creator||n.created_by||``,source:m.attrs?.provider||m.source||``,tags:(n.tags||[]).join(`, `)}),d(!0)},_=async()=>{try{let e={title:f.title,description:f.description,category:f.category,tags:f.tags.split(`,`).map(e=>e.trim()).filter(Boolean),metadata:{...m,title:f.title,category:f.category,creator:f.creator,source:f.source}};await l.mutateAsync({imageId:n.id,data:e}),d(!1)}catch(e){alert(e.response?.data?.detail||`更新失败`)}},v=B(n.url);return(0,L.jsxs)(`div`,{className:`admin-media-layout`,children:[(0,L.jsxs)(`header`,{className:`media-detail-header`,children:[(0,L.jsxs)(`div`,{className:`header-left`,children:[(0,L.jsx)(`button`,{className:`icon-btn-back`,onClick:()=>t(`/admin/images`),title:`返回图片库`,children:(0,L.jsx)(y,{size:20})}),(0,L.jsxs)(`div`,{className:`header-title-container`,children:[(0,L.jsx)(`h1`,{className:`media-title`,children:n.title}),(0,L.jsxs)(`div`,{className:`media-badges`,children:[(0,L.jsx)(`span`,{className:`badge-category`,children:n.category||`未分类`}),(0,L.jsx)(`span`,{className:`badge-status ${n.status}`,children:n.status===`active`?`在线`:`下线`})]})]})]}),(0,L.jsxs)(`div`,{className:`header-right`,children:[(0,L.jsxs)(`button`,{className:`toolbar-btn primary`,onClick:()=>window.open(v,`_blank`),children:[(0,L.jsx)(c,{size:16}),(0,L.jsx)(`span`,{children:`查看原图`})]}),(0,L.jsxs)(`button`,{className:`toolbar-btn`,onClick:g,children:[(0,L.jsx)(S,{size:16}),(0,L.jsx)(`span`,{children:`管理`})]}),(0,L.jsxs)(`button`,{className:`toolbar-btn danger`,onClick:h,disabled:s.isPending,children:[(0,L.jsx)(o,{size:16}),(0,L.jsx)(`span`,{children:s.isPending?`正在删除`:`删除`})]})]})]}),(0,L.jsxs)(`div`,{className:`media-detail-content`,children:[(0,L.jsxs)(`main`,{className:`media-main-view`,children:[(0,L.jsx)(`div`,{className:`image-stage`,children:(0,L.jsx)(`div`,{className:`image-container`,children:(0,L.jsx)(`img`,{src:v,alt:n.title,className:`main-preview-image`,onError:e=>{e.target.src=`/placeholder-image.png`}})})}),(0,L.jsx)(`div`,{className:`content-detail-container`,children:(0,L.jsxs)(`div`,{className:`empty-secondary-view`,children:[(0,L.jsx)(`div`,{className:`info-icon-wrapper`,children:(0,L.jsx)(T,{size:24})}),(0,L.jsx)(`p`,{children:`更多关联数据与深度分析功能正在开发中`})]})})]}),(0,L.jsx)(z,{mode:`metadata`,image:n,metadata:m,onEdit:g})]}),u&&(0,L.jsx)(`div`,{className:`modal-overlay`,onClick:()=>d(!1),children:(0,L.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{width:`560px`},children:[(0,L.jsxs)(`div`,{className:`modal-header`,children:[(0,L.jsx)(`h2`,{children:`编辑核心元数据`}),(0,L.jsx)(`button`,{className:`close-btn`,onClick:()=>d(!1),children:`×`})]}),(0,L.jsxs)(`div`,{className:`modal-body`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`标题`}),(0,L.jsx)(`input`,{type:`text`,value:f.title,onChange:e=>p({...f,title:e.target.value})})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`描述`}),(0,L.jsx)(`textarea`,{rows:4,value:f.description,onChange:e=>p({...f,description:e.target.value})})]}),(0,L.jsxs)(`div`,{className:`form-row`,children:[(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`分类`}),(0,L.jsx)(`input`,{type:`text`,value:f.category,onChange:e=>p({...f,category:e.target.value})})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`创建人`}),(0,L.jsx)(`input`,{type:`text`,value:f.creator,onChange:e=>p({...f,creator:e.target.value})})]})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`来源渠道`}),(0,L.jsx)(`input`,{type:`text`,value:f.source,onChange:e=>p({...f,source:e.target.value})})]}),(0,L.jsxs)(`div`,{className:`form-group`,children:[(0,L.jsx)(`label`,{children:`标签 (逗号分隔)`}),(0,L.jsx)(`input`,{type:`text`,value:f.tags,onChange:e=>p({...f,tags:e.target.value})})]})]}),(0,L.jsxs)(`div`,{className:`modal-footer`,children:[(0,L.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>d(!1),children:`取消`}),(0,L.jsx)(`button`,{className:`btn btn-primary`,onClick:_,disabled:l.isPending,children:l.isPending?`保存中...`:`提交更改`})]})]})}),(0,L.jsx)(`style`,{children:`
        .admin-media-layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: var(--cg-bg);
        }
        .media-detail-header {
          height: 64px;
          background: var(--cg-surface);
          border-bottom: 1px solid var(--cg-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          z-index: 10;
        }
        .header-left { display: flex; align-items: center; gap: 16px; min-width: 0; }
        .header-title-container { min-width: 0; }
        .media-title { font-size: 1.125rem; font-weight: 600; margin: 0; color: var(--cg-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .media-badges { display: flex; gap: 8px; margin-top: 2px; }
        .badge-category { font-size: 0.75rem; background: var(--cg-bg); color: var(--admin-primary); padding: 1px 8px; border-radius: 4px; font-weight: 500; }
        .badge-status.active { font-size: 0.75rem; background: #ecfdf5; color: var(--admin-success); padding: 1px 8px; border-radius: 4px; font-weight: 500; }
        
        .header-right { display: flex; gap: 12px; }
        .toolbar-btn { display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 16px; border-radius: 8px; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.2s; border: 1px solid var(--cg-border); background: var(--cg-surface); color: var(--cg-text-muted); }
        .toolbar-btn:hover { background: var(--cg-bg); }
        .toolbar-btn.primary { background: var(--admin-primary); color: white; border: none; }
        .toolbar-btn.primary:hover { background: #2563eb; }
        .toolbar-btn.danger:hover { color: var(--admin-danger); border-color: var(--admin-danger-light); background: var(--cg-bg); }

        .media-detail-content { display: flex; flex: 1; overflow: hidden; }
        .media-main-view { flex: 1; overflow-y: auto; background: var(--cg-bg); position: relative; display: flex; flex-direction: column; }
        
        .image-stage { flex: 0 0 auto; min-height: 480px; padding: 24px; display: flex; align-items: center; justify-content: center; background: var(--cg-text); position: relative; }
        .image-container { max-width: 100%; max-height: 70vh; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border-radius: 4px; overflow: hidden; }
        .main-preview-image { max-width: 100%; max-height: 70vh; display: block; object-fit: contain; }

        .content-detail-container { flex: 1; background: var(--cg-surface); border-top: 1px solid var(--cg-border); padding: 32px 40px; }
        .detail-tabs { display: flex; border-bottom: 2px solid var(--cg-bg); margin-bottom: 24px; }
        .detail-tab { padding: 12px 0; margin-right: 32px; font-size: 0.875rem; font-weight: 600; color: var(--cg-text-muted); cursor: pointer; position: relative; }
        .detail-tab.active { color: var(--admin-primary); }
        .detail-tab.active::after { content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: var(--admin-primary); }

        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px); }
        .modal-content { background: var(--cg-surface); border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .modal-header { padding: 20px 24px; border-bottom: 1px solid var(--cg-bg); display: flex; justify-content: space-between; align-items: center; }
        .modal-header h2 { margin: 0; font-size: 1.25rem; font-weight: 700; color: var(--cg-text); }
        .modal-body { padding: 24px; display: flex; flex-direction: column; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group label { font-size: 0.8125rem; font-weight: 600; color: var(--cg-text-muted); }
        .form-group input, .form-group textarea { padding: 10px 14px; border: 1px solid var(--cg-border); border-radius: 8px; font-size: 0.9375rem; color: var(--cg-text); outline: none; transition: all 0.2s; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--admin-primary); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
        .modal-footer { padding: 16px 24px; background: var(--cg-bg); border-top: 1px solid var(--cg-bg); display: flex; justify-content: flex-end; gap: 12px; }
        
        .icon-btn-back { width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--cg-border); display: flex; align-items: center; justify-content: center; color: var(--cg-text-muted); cursor: pointer; transition: all 0.2s; background: var(--cg-surface); }
        .icon-btn-back:hover { background: var(--cg-bg); color: var(--admin-primary); border-color: var(--admin-primary); }
      `})]})}export{V as ImageDetail};