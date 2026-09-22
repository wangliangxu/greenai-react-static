import{j as e,r as x}from"./react-vendor-DZdvhec1.js";import{a_ as I,r as _}from"./index-gZIvI9UJ.js";import{X as M,u as A,Y as E,Z as R,_ as L}from"./admin-media-BcT-CjAy.js";import{S as P}from"./Skeleton-CJQlb5jy.js";import{a as F,b as D}from"./formatters-D5xmu4G_.js";import{g as U}from"./bilingual-BJHF5Vc6.js";import{F as W,af as G,bW as T,ap as $,ac as B,bN as O,ab as H,j as Y,bf as Z,v as X,U as q,bq as K,bg as V,as as J,bZ as Q,ai as ee,K as ae,bI as se,s as te,I as re}from"./ui-vendor-tV6DikQD.js";import{useNavigate as w,useParams as ie}from"./router-vendor-BF2jFopG.js";/* empty css                   */import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";function ne({image:s,metadata:c}){U();const a=c||s?.metadata||{},m=a.stats||a.technical||{},p=a.attrs||{},d=a.id||{},v=n=>{const l=a.abstract;return Array.isArray(l)?l.find(h=>h.lang===n)?.value||"":n==="zh"&&(a.description||s?.description)||""},o=v("zh"),r=v("en");return e.jsxs("div",{className:"video-info-cards-container",children:[(o||r)&&e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(W,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"内容摘要"})]}),e.jsxs("div",{className:"vd-value-stack",children:[o&&e.jsxs("div",{className:"vd-abstract-item",children:[e.jsx("span",{className:"vd-mini-tag-lang cn",children:"ZH"}),e.jsx("p",{className:"vd-abstract-text",style:{whiteSpace:"pre-wrap"},children:o})]}),r&&e.jsxs("div",{className:"vd-abstract-item",children:[e.jsx("span",{className:"vd-mini-tag-lang en",children:"EN"}),e.jsx("p",{className:"vd-abstract-text en",style:{whiteSpace:"pre-wrap"},children:r})]})]})]}),e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(G,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"资源识别"})]}),e.jsxs("div",{className:"vd-value-stack",children:[e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"资源 ID"}),e.jsx("code",{className:"vd-code",children:s.id})]}),(d.sha256||s.file_hash)&&e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"SHA256"}),e.jsxs("code",{className:"vd-code-sm",title:d.sha256||s.file_hash,children:[(d.sha256||s.file_hash).substring(0,12),"..."]})]})]})]}),e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(T,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"技术规格"})]}),e.jsxs("div",{className:"vd-grid-two",children:[e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"文件大小"}),e.jsx("span",{className:"vd-value",children:F(m.file_size||s.file_size)})]}),e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"格式"}),e.jsx("span",{className:"vd-value",children:(m.file_format||s.file_format||"").toUpperCase()})]}),(m.dimensions||s.dimensions)&&e.jsxs("div",{className:"vd-value-item",style:{gridColumn:"span 2"},children:[e.jsx("span",{className:"vd-sub-label",children:"尺寸"}),e.jsxs("span",{className:"vd-value",children:[(m.dimensions||s.dimensions).width," × ",(m.dimensions||s.dimensions).height," px"]})]})]})]}),(a.coverage_spatial||a.coverage_temporal)&&e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx($,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"地理与时间"})]}),e.jsxs("div",{className:"vd-value-stack",children:[a.coverage_spatial&&e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"地名 / 空间"}),e.jsxs("span",{className:"vd-value",children:["📍 ",a.coverage_spatial]})]}),a.coverage_temporal&&e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"时间范围"}),e.jsxs("span",{className:"vd-value",children:["🕒 ",a.coverage_temporal]})]})]})]}),e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(B,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"归属发布"})]}),e.jsxs("div",{className:"vd-value-stack",children:[e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"创建者"}),e.jsx("span",{className:"vd-value",children:p.author||a.creator||s.created_by||"系统"})]}),e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"发布日期"}),e.jsx("span",{className:"vd-value",children:D(p.published_date||a.date_created||s.created_at)})]})]})]}),e.jsxs("section",{className:"vd-card",children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(O,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"来源权限"})]}),e.jsxs("div",{className:"vd-value-stack",children:[e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"来源渠道"}),e.jsx("span",{className:"vd-value",children:p.provider||a.source||"本地上传"})]}),e.jsxs("div",{className:"vd-value-item",children:[e.jsx("span",{className:"vd-sub-label",children:"许可证"}),e.jsx("span",{className:"vd-value",children:a.license||"All Rights Reserved"})]})]})]}),Array.isArray(s.tags)&&s.tags.length>0&&e.jsxs("section",{className:"vd-card",style:{borderBottom:"none"},children:[e.jsxs("div",{className:"vd-label-row",children:[e.jsx(H,{size:14,className:"vd-icon"}),e.jsx("span",{className:"vd-label",children:"标签词云"})]}),e.jsx("div",{className:"vd-tag-cloud-mini",children:s.tags.slice(0,12).map((n,l)=>e.jsx("span",{className:"vd-mini-tag",children:n},l))})]}),e.jsx("style",{children:`
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
      `})]})}function de({mode:s="categories",image:c,metadata:a,onEdit:m}){const p=w(),[d,v]=x.useState(!1),[o,r]=x.useState(280),[n,l]=x.useState(!1),h=x.useRef(null),{addToast:b}=I(),g=M(),u=async()=>{if(c?.id)try{await g.mutateAsync(c.id),b({type:"success",message:"图片元数据生成与同步成功"})}catch(i){const j=i.response?.data?.detail||i.message||"未知错误";b({type:"error",message:`智能生成失败: ${j}`})}},{data:t}=A({page:1,page_size:1e3}),f=Array.isArray(t)?t:t?.items||[],k=Array.isArray(t)?t.length:t?.total||0,y=Array.from(new Set(f.map(i=>i.category).filter(Boolean))).sort(),N={};f.forEach(i=>{i.category&&(N[i.category]=(N[i.category]||0)+1)});const z=x.useCallback(i=>{i.preventDefault(),l(!0)},[]);return x.useEffect(()=>{const i=C=>{if(!n)return;const S=Math.min(Math.max(200,window.innerWidth-C.clientX),400);r(S)},j=()=>l(!1);return n&&(document.addEventListener("mousemove",i),document.addEventListener("mouseup",j)),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",j)}},[n]),e.jsxs(e.Fragment,{children:[e.jsxs("aside",{ref:h,className:`video-sidebar ${d?"collapsed":""}`,style:{width:d?48:o},children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("button",{className:"sidebar-toggle",onClick:()=>v(!d),children:d?e.jsx(Y,{size:20}):e.jsx(Z,{size:20})}),!d&&e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:1,gap:"8px"},children:[e.jsx("span",{className:"sidebar-title",style:{marginRight:"auto"},children:s==="metadata"?"":"图片主题分类"}),s==="metadata"&&e.jsxs("button",{className:"sidebar-header-action smart-generate-btn",onClick:u,disabled:g.isPending,title:"利用 LLM 大模型智能生成 Intake 规范元数据",style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"linear-gradient(135deg, var(--cg-bg) 0%, #dbeafe 100%)",color:"#1d4ed8",border:"1px solid #bfdbfe",borderRadius:"6px",cursor:g.isPending?"not-allowed":"pointer",fontWeight:500,transition:"all 0.2s ease",boxShadow:"0 1px 2px rgba(0,0,0,0.05)"},children:[g.isPending?e.jsx(X,{size:13,className:"animate-spin"}):e.jsx(q,{size:13}),e.jsx("span",{children:g.isPending?"生成中...":"智能生成"})]}),s==="metadata"&&m&&e.jsxs("button",{className:"sidebar-header-action",onClick:m,style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem",padding:"4px 10px",background:"var(--cg-bg)",color:"var(--cg-text-muted)",border:"1px solid var(--cg-border)",borderRadius:"6px",cursor:"pointer",fontWeight:500},children:[e.jsx(K,{size:13}),e.jsx("span",{children:"编辑"})]})]})]}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`sidebar-resizer ${n?"active":""}`,onMouseDown:z,children:e.jsx(V,{size:12})}),e.jsx("nav",{className:"video-tree-view",children:s==="metadata"?e.jsx("div",{style:{padding:"0"},children:c?e.jsx(ne,{image:c,metadata:a}):e.jsx("div",{className:"empty-state",children:"未选中图片"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tree-node root-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>p("/admin/images"),children:[e.jsx(J,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:"全部图片"}),e.jsx("span",{className:"tree-count",children:k})]})}),e.jsxs("div",{style:{flex:1,overflowY:"auto"},children:[e.jsx("div",{className:"tree-section-label",children:"按主题分类"}),y.length>0?y.map(i=>e.jsx("div",{className:"tree-node",children:e.jsxs("button",{className:"tree-item",onClick:()=>p(`/admin/images?category=${encodeURIComponent(i)}`),children:[e.jsx(Q,{size:16,className:"tree-icon"}),e.jsx("span",{className:"tree-label",children:i}),e.jsx("span",{className:"tree-count",children:N[i]})]})},i)):e.jsx("div",{className:"empty-state",children:"暂无主题"})]})]})})]})]}),e.jsx("style",{children:`
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
    `})]})}const le=s=>s?s.startsWith("http://")||s.startsWith("https://")?s:_(s):"";function ta(){const{id:s}=ie(),c=w(),{data:a,isLoading:m}=E(s),p=R(),d=L(),[v,o]=x.useState(!1),[r,n]=x.useState({title:"",description:"",category:"",creator:"",source:"",tags:""});if(m)return e.jsx("div",{className:"container",style:{padding:"40px"},children:e.jsx(P,{height:600})});if(!a)return e.jsxs("div",{className:"container",style:{padding:"80px",textAlign:"center"},children:[e.jsx("div",{className:"error-message",children:"⚠️ 图片资源未找到或已被移除"}),e.jsx("button",{className:"btn btn-primary",onClick:()=>c("/admin/images"),style:{marginTop:"20px"},children:"返回图片库"})]});const l=a.metadata||{},h=async()=>{if(window.confirm("确定要永久删除这张图片吗？此操作不可撤销。"))try{await p.mutateAsync(a.id),c("/admin/images")}catch(t){alert(t.response?.data?.detail||"删除失败")}},b=()=>{n({title:a.title||"",description:a.display_description||a.description||"",category:a.category||"",creator:l.attrs?.author||l.creator||a.created_by||"",source:l.attrs?.provider||l.source||"",tags:(a.tags||[]).join(", ")}),o(!0)},g=async()=>{try{const t={title:r.title,description:r.description,category:r.category,tags:r.tags.split(",").map(f=>f.trim()).filter(Boolean),metadata:{...l,title:r.title,category:r.category,creator:r.creator,source:r.source}};await d.mutateAsync({imageId:a.id,data:t}),o(!1)}catch(t){alert(t.response?.data?.detail||"更新失败")}},u=le(a.url);return e.jsxs("div",{className:"admin-media-layout",children:[e.jsxs("header",{className:"media-detail-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("button",{className:"icon-btn-back",onClick:()=>c("/admin/images"),title:"返回图片库",children:e.jsx(ee,{size:20})}),e.jsxs("div",{className:"header-title-container",children:[e.jsx("h1",{className:"media-title",children:a.title}),e.jsxs("div",{className:"media-badges",children:[e.jsx("span",{className:"badge-category",children:a.category||"未分类"}),e.jsx("span",{className:`badge-status ${a.status}`,children:a.status==="active"?"在线":"下线"})]})]})]}),e.jsxs("div",{className:"header-right",children:[e.jsxs("button",{className:"toolbar-btn primary",onClick:()=>window.open(u,"_blank"),children:[e.jsx(ae,{size:16}),e.jsx("span",{children:"查看原图"})]}),e.jsxs("button",{className:"toolbar-btn",onClick:b,children:[e.jsx(se,{size:16}),e.jsx("span",{children:"管理"})]}),e.jsxs("button",{className:"toolbar-btn danger",onClick:h,disabled:p.isPending,children:[e.jsx(te,{size:16}),e.jsx("span",{children:p.isPending?"正在删除":"删除"})]})]})]}),e.jsxs("div",{className:"media-detail-content",children:[e.jsxs("main",{className:"media-main-view",children:[e.jsx("div",{className:"image-stage",children:e.jsx("div",{className:"image-container",children:e.jsx("img",{src:u,alt:a.title,className:"main-preview-image",onError:t=>{t.target.src="/placeholder-image.png"}})})}),e.jsx("div",{className:"content-detail-container",children:e.jsxs("div",{className:"empty-secondary-view",children:[e.jsx("div",{className:"info-icon-wrapper",children:e.jsx(re,{size:24})}),e.jsx("p",{children:"更多关联数据与深度分析功能正在开发中"})]})})]}),e.jsx(de,{mode:"metadata",image:a,metadata:l,onEdit:b})]}),v&&e.jsx("div",{className:"modal-overlay",onClick:()=>o(!1),children:e.jsxs("div",{className:"modal-content",onClick:t=>t.stopPropagation(),style:{width:"560px"},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"编辑核心元数据"}),e.jsx("button",{className:"close-btn",onClick:()=>o(!1),children:"×"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"标题"}),e.jsx("input",{type:"text",value:r.title,onChange:t=>n({...r,title:t.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"描述"}),e.jsx("textarea",{rows:4,value:r.description,onChange:t=>n({...r,description:t.target.value})})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"分类"}),e.jsx("input",{type:"text",value:r.category,onChange:t=>n({...r,category:t.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"创建人"}),e.jsx("input",{type:"text",value:r.creator,onChange:t=>n({...r,creator:t.target.value})})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"来源渠道"}),e.jsx("input",{type:"text",value:r.source,onChange:t=>n({...r,source:t.target.value})})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"标签 (逗号分隔)"}),e.jsx("input",{type:"text",value:r.tags,onChange:t=>n({...r,tags:t.target.value})})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>o(!1),children:"取消"}),e.jsx("button",{className:"btn btn-primary",onClick:g,disabled:d.isPending,children:d.isPending?"保存中...":"提交更改"})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{ta as ImageDetail};
