import{r as W,j as e}from"./react-vendor-DZdvhec1.js";import{S as ge}from"./SafeHtml-DM0fz1a6.js";import{g as he,a as g,b as ue,s as fe}from"./bilingual-BJHF5Vc6.js";import{m as H,F as J,D as be,g as ve,bd as je,I as G,ah as F,q as _,aV as ye,$ as Ne}from"./ui-vendor-BI9eDmWL.js";const Me=({metadata:C,catalog:X,title:Z,publishedTime:Y,modifiedTime:Q,filePath:V,fileSize:ee,lang:D,onLanguageChange:O})=>{const[ae,re]=W.useState(he()),s=D||ae,[y,se]=W.useState({dims:!1,coords:!0,dataVars:!0,attrs:!1}),z=a=>se(r=>({...r,[a]:!r[a]})),I=a=>{O?O(a):re(a),fe(a)},te=!!D,d=X||C.catalog||{},k=C||{},ie=a=>!!(a==null||a===""||Array.isArray(a)&&a.length===0||typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0),t=(()=>{const a={...k};for(const[r,o]of Object.entries(d))ie(o)||(a[r]=o);return a})(),$=t.stats&&typeof t.stats=="object"?t.stats:{},ne=typeof $.file_size_bytes=="number"?`${($.file_size_bytes/1024).toFixed(2)} KB`:null,oe=a=>!a||typeof a!="string"?!1:/\((?:sql|csv|netcdf|hdf|parquet|json|xlsx?|geojson|tiff?|shp):?\)$/i.test(a),B=g(Z||k.title||(oe(d.title)?void 0:d.title),s)||(typeof d.title=="string"?d.title:null)||(s==="zh"?"无标题数据集":"Untitled Dataset"),E=g(t.introduction||t.academic_narrative||d.introduction,s)||"",le=g(t.abstract||d.abstract,s)||"",S=(()=>{const a=t.variables||d.variables;return a&&typeof a=="object"&&!Array.isArray(a)?Object.entries(a).map(([r,o])=>{const i=o;let c=i.description;return i.zh||i.en?c=[{lang:"zh",value:i.zh||""},{lang:"en",value:i.en||""}]:c||(c=r),{name:r,type:i.type||i.dtype||void 0,description:c,unit:i.unit||i.units||void 0,dims:Array.isArray(i.dims)?i.dims:void 0}}):Array.isArray(a)&&a.length>0?a:[]})(),M=(()=>{const a=t.stats||d.stats;if(a&&typeof a=="object"&&!Array.isArray(a)){const r=a,o=r.variables;if(o&&typeof o=="object")return o;if(Object.values(r).some(c=>c&&typeof c=="object"&&"min"in c))return r}return{}})(),T=(()=>{const a=t.stats||d.stats;if(a&&typeof a=="object"&&!Array.isArray(a))return a.global})(),v=t.records||d.records||{},j=t.schema||d.schema||{},ce=d.data_sample?.coords||t.data_sample?.coords||{},f=(()=>{const a=j.dims;if(a&&typeof a=="object"&&Object.keys(a).length>0)return a;const r=new Set;for(const i of S)i.dims&&Array.isArray(i.dims)&&i.dims.forEach(c=>r.add(c));if(r.size===0)return{};const o={};for(const i of r){const c=ce[i];Array.isArray(c)?o[i]=c.length:o[i]="?"}return o})(),N=j.coords||d.coords||t.coords||[],A=d.spatial_extent||t.spatial_extent,R={sourceName:t.source_name||(V?V.split("/").pop():""),container:d.container||t.container||""},P=(()=>{const r=(d.file_bundle||t.file_bundle)?.primary||R.sourceName||"";if(!r)return"";const o=r.split(".");return(o.length>1?o.pop():"")?.toUpperCase()||""})(),de=ue(t.tags||d.tags,s),U=g(t.author||t.creator||d.author,s)||"-",q=g(t.publisher||d.publisher,s)||"-",K=g(t.doi||d.doi,s)||"-",pe=t.license||t.rights||d.license,me=typeof(t.license||d.license)=="string"?String(t.license||d.license):g(pe,s)||"-",w=t.temporal_extent||t.temporal||d.temporal_extent||{},xe=`${g(w.start,s)||"-"} - ${g(w.end,s)||"-"}`,l={abstract:s==="zh"?"摘要":"Abstract",keywords:s==="zh"?"关键词":"Keywords",descriptor:s==="zh"?"引言":"Introduction",records:s==="zh"?"数据变量与结构":"Variables & Structure",rows:s==="zh"?"行":"rows",columns:s==="zh"?"列":"cols",basicInfo:s==="zh"?"数据基本信息":"Basic Information",titleZh:s==="zh"?"中文标题":"Chinese Title",titleEn:s==="zh"?"英文标题":"English Title",driverLabel:s==="zh"?"文件格式":"File Format",fileSizeLabel:s==="zh"?"文件总大小":"Total File Size",dimsLabel:s==="zh"?"维度 (Dimensions)":"Dimensions",coordsLabel:s==="zh"?"坐标轴 (Coordinates)":"Coordinates",temporalLabel:s==="zh"?"时间范围":"Temporal Range",fileList:s==="zh"?"文件列表":"File List",dataStats:s==="zh"?"数据统计":"Data Statistics",statsVar:s==="zh"?"变量":"Variable",statsMin:s==="zh"?"最小值":"Min",statsMax:s==="zh"?"最大值":"Max",statsMean:s==="zh"?"均值":"Mean",statsStd:s==="zh"?"标准差":"Std",statsUnique:s==="zh"?"唯一值":"Unique",completeness:s==="zh"?"数据完整度":"Completeness",prov:s==="zh"?"使用许可":"License",cite:s==="zh"?"引用方式":"How to Cite",distributed:s==="zh"?"发布于":"Distributed by",placeholder:s==="zh"?"正在为此数据集生成详细的科学叙事，以便为学生和研究人员提供更深层次的背景信息。":"Currently generating a detailed scientific narrative for this dataset to provide deeper context for students and researchers.",noVars:s==="zh"?"变量定义正在校准中。":"Variable definitions are currently being calibrated.",fileBundle:s==="zh"?"文件列表":"File List",primaryFile:s==="zh"?"主要数据文件":"Primary Data File",auxiliaryFiles:s==="zh"?"附属/元数据文件":"Auxiliary / Meta Files",totalSize:s==="zh"?"文件包总大小":"Total Bundle Size",usageNote:s==="zh"?"使用说明":"Usage Instructions",referencesLabel:s==="zh"?"参考文献":"References",dataVarsLabel:s==="zh"?"数据变量 (Data Variables)":"Data Variables"};return e.jsxs("div",{className:"data-portrait-paper",children:[e.jsxs("header",{className:"paper-header",children:[!te&&e.jsx("div",{className:"paper-journal-top",style:{justifyContent:"flex-end"},children:e.jsxs("div",{className:"paper-lang-switcher",children:[e.jsx("button",{className:`lang-btn ${s==="zh"?"active":""}`,onClick:()=>I("zh"),children:"中"}),e.jsx("div",{className:"lang-divider"}),e.jsx("button",{className:`lang-btn ${s==="en"?"active":""}`,onClick:()=>I("en"),children:"EN"})]})}),e.jsx("h1",{className:"paper-title",children:B}),e.jsxs("div",{className:"paper-doi-bar",children:[e.jsxs("span",{className:"date-label",children:[s==="zh"?"发布日期":"Published",":"]}),e.jsx("span",{className:"date-value",children:Y||"-"}),e.jsx("span",{className:"divider",children:"|"}),e.jsxs("span",{className:"date-label",children:[s==="zh"?"更新日期":"Updated",":"]}),e.jsx("span",{className:"date-value",children:Q||"-"})]}),e.jsxs("div",{className:"paper-abstract",children:[e.jsx("h3",{children:l.abstract}),e.jsx("p",{children:le})]}),e.jsxs("div",{className:"paper-keywords",children:[e.jsxs("span",{className:"keywords-label",children:[l.keywords,":"]}),de.map((a,r)=>e.jsx("span",{className:"keyword-pill",children:a},r))]})]}),e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(H,{size:20}),e.jsx("h2",{children:l.descriptor})]}),e.jsx("div",{className:"narrative-content",children:E?e.jsx(ge,{html:E.replace(/\n/g,"<br/>"),className:"narrative-paragraph"}):e.jsx("p",{className:"narrative-placeholder",children:l.placeholder})})]}),e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(J,{size:20}),e.jsx("h2",{children:l.basicInfo})]}),e.jsxs("div",{className:"basic-info-grid",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.titleZh}),e.jsx("span",{className:"info-value",children:g(k.title||t.title,"zh")||"-"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.titleEn}),e.jsx("span",{className:"info-value",children:g(k.title||t.title,"en")||"-"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.fileSizeLabel}),e.jsx("span",{className:"info-value",children:t.file_bundle?.total_size_bytes?`${(t.file_bundle.total_size_bytes/1024).toFixed(2)} KB`:ne||ee||"-"})]}),P&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.driverLabel}),e.jsx("span",{className:"info-value",children:e.jsx("span",{className:"type-badge",children:P})})]}),w&&(w.start||w.end)&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.temporalLabel}),e.jsx("span",{className:"info-value",children:xe})]}),(()=>{if(!A||typeof A!="object")return null;const a=A,r=a.bbox||a.spatial_bounds,o=a.spatial_coverage,i=t.coords,c=i&&typeof i=="object"?i.crs||i.spatial_ref:null,m=typeof c=="string"?c:c&&typeof c=="object"?String(c.value||""):"";if(!r&&!o&&!m)return null;const n=r&&r.length>=4&&r[0]===r[2]&&r[1]===r[3];return e.jsxs(e.Fragment,{children:[o&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s==="zh"?"空间覆盖":"Spatial Coverage"}),e.jsx("span",{className:"info-value",children:o})]}),r&&r.length>=4&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s==="zh"?"空间范围":"Spatial Extent"}),e.jsx("span",{className:"info-value",children:n?e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{className:"type-badge",style:{background:"#dbeafe",color:"#2563eb",fontSize:"0.7rem"},children:s==="zh"?"站点":"Point"}),e.jsxs("code",{children:[r[1].toFixed(4),"°N, ",r[0].toFixed(4),"°E"]})]}):e.jsxs("code",{children:[r[1].toFixed(2),"°~",r[3].toFixed(2),"°N, ",r[0].toFixed(2),"°~",r[2].toFixed(2),"°E"]})})]}),m&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s==="zh"?"坐标参考":"CRS"}),e.jsx("span",{className:"info-value",children:e.jsx("code",{children:m})})]})]})})(),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.fileList}),e.jsx("span",{className:"info-value",children:(()=>{if(t.file_bundle)return e.jsxs("div",{className:"file-pill-list",children:[e.jsx("span",{className:"file-pill primary",children:t.file_bundle.primary}),t.file_bundle.auxiliary?.map((o,i)=>e.jsx("span",{className:"file-pill aux",children:o.path.split("/").pop()},i))]});const r=C?.metadata?.files||t.files;return r&&Array.isArray(r)&&r.length>0?e.jsx("div",{className:"file-pill-list",children:r.map((o,i)=>{const c=o.role==="primary"||o.role==="main",m=o.size_bytes?` (${(o.size_bytes/1024).toFixed(1)} KB)`:"";return e.jsxs("span",{className:`file-pill ${c?"primary":"aux"}`,title:m,children:[o.name,m&&e.jsx("span",{style:{fontSize:"0.65rem",opacity:.6,marginLeft:"0.25rem"},children:m})]},i)})}):e.jsx("span",{className:"file-pill",children:R.sourceName})})()})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.prov}),e.jsx("span",{className:"info-value",children:me})]}),(U!=="-"||q!=="-"||K!=="-")&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:l.cite}),e.jsxs("span",{className:"info-value",style:{fontSize:"0.8rem"},children:[U,". (",new Date().getFullYear(),"). ",e.jsx("i",{children:B}),". ",l.distributed," ",q,". DOI: ",K]})]})]})]}),e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(be,{size:20}),e.jsx("h2",{children:l.records}),!!(v.rows||v.columns)&&e.jsxs("span",{className:"records-badge",children:[v.rows?.toLocaleString()||"?"," ",l.rows," × ",v.columns||"?"," ",l.columns]})]}),e.jsxs("div",{className:"variables-table-container",children:[j&&typeof j=="object"&&"error"in j&&typeof j.error=="object"&&j.error!==null&&(()=>{const a=j.error;return e.jsxs("div",{style:{padding:"24px",background:"var(--cg-bg)",border:"2px solid #ef4444",borderRadius:"12px",display:"flex",gap:"16px",alignItems:"flex-start",marginTop:"16px",boxShadow:"0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)"},children:[e.jsx("div",{style:{background:"#fee2e2",padding:"12px",borderRadius:"50%",color:"#dc2626"},children:e.jsx(ve,{size:32})}),e.jsxs("div",{style:{flex:1},children:[e.jsxs("h3",{style:{margin:"0 0 8px 0",color:"#991b1b",fontSize:"1.25rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{background:"#dc2626",color:"white",padding:"2px 8px",borderRadius:"4px",fontSize:"0.75rem",fontWeight:800,textTransform:"uppercase"},children:"Causality Blocker"}),"物理结构提取失败"]}),e.jsxs("div",{style:{background:"var(--cg-surface)",padding:"16px",borderRadius:"8px",border:"1px solid #fecaca",marginBottom:"16px"},children:[e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"0.9375rem",color:"#7f1d1d",fontWeight:500},children:a.message||a.reason||"底层读取物理引擎在尝试解析此数据源时遭遇了不可恢复的致命错误。"}),a.traceback&&e.jsxs("div",{style:{background:"var(--cg-text)",borderRadius:"6px",overflow:"hidden"},children:[e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--cg-text-muted)",padding:"6px 12px",background:"#0f172a",borderBottom:"1px solid var(--cg-text)",fontWeight:600,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"TRACEBACK"}),e.jsx("span",{style:{fontSize:"0.65rem",background:"#ef4444",color:"white",padding:"2px 6px",borderRadius:"4px"},children:"ERROR"})]}),e.jsx("pre",{style:{margin:0,padding:"12px",fontSize:"0.8rem",color:"var(--cg-bg)",overflowX:"auto",fontFamily:"monospace",lineHeight:1.5},children:a.traceback})]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",fontSize:"0.8125rem",color:"#b91c1c"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"#fee2e2",padding:"6px 12px",borderRadius:"6px"},children:[e.jsx(je,{size:14})," 语义评分已被强制归零"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"#fee2e2",padding:"6px 12px",borderRadius:"6px"},children:[e.jsx(G,{size:14})," 请核查源文件或驱动参数"]})]})]})]})})(),(()=>{const a=new Set(Array.isArray(N)?N:Object.keys(N||{})),r=S.filter(n=>a.has(n.name)),o=a.size>0?S.filter(n=>!a.has(n.name)):S,i=t.data_sample,c=n=>{if(!n||n.length===0)return"...";const p=u=>u==null?"NaN":String(u);if(n.length<=6)return n.map(p).join(" ");const h=n.slice(0,3).map(p),x=n.slice(-2).map(p);return[...h,"...",...x].join(" ")},m=(n,p,h)=>{const x=M[n.name],u=x?.null_rate,b=i?.[h]?.[n.name],L=n.type||(x?.dtype!=null?String(x.dtype):"float64");return e.jsxs("li",{className:"xr-var-item",children:[e.jsx("span",{className:"xr-var-name",children:n.name}),e.jsx("span",{className:"xr-var-dims",children:n.dims&&n.dims.length>0?`(${n.dims.join(", ")})`:""}),e.jsx("span",{className:"xr-var-dtype",children:L}),e.jsx("span",{className:n.unit?"xr-var-unit":"xr-var-unit-empty",children:n.unit||""}),e.jsx("span",{className:"xr-var-preview",children:b&&Array.isArray(b)?c(b):g(n.description,s)||"..."}),e.jsx("span",{className:u!==void 0&&u>0?`xr-var-null ${u>.1?"high":"low"}`:"xr-var-null-empty",children:u!==void 0&&u>0?`${(u*100).toFixed(1)}%`:""})]},p)};return e.jsxs("div",{className:"xr-wrap",children:[e.jsx("div",{className:"xr-header",children:R.container==="image"&&f&&typeof f=="object"?e.jsxs("span",{className:"xr-obj-dims",children:["(",Object.entries(f).map(([n,p])=>`${n}: ${p}`).join(" × "),")"]}):!!(v.rows||v.columns)&&e.jsxs("span",{className:"xr-obj-dims",children:["(",v.rows?.toLocaleString()||"?"," × ",v.columns||"?",")"]})}),f&&Object.keys(f).length>0&&e.jsx("div",{className:"xr-section",children:e.jsxs("div",{className:"xr-section-summary",onClick:()=>z("dims"),style:{cursor:"pointer"},children:[y.dims?e.jsx(F,{size:14,className:"xr-icon-toggle active"}):e.jsx(_,{size:14,className:"xr-icon-toggle"}),e.jsxs("span",{className:"xr-section-name",children:[l.dimsLabel,":"]}),e.jsxs("div",{className:"xr-dims-inline",children:["(",Array.isArray(f)?f.map((n,p)=>e.jsxs("span",{children:[e.jsx("span",{className:"xr-dim-name",children:n}),p<f.length-1?", ":""]},n)):Object.entries(f).map(([n,p],h,x)=>e.jsxs("span",{children:[e.jsx("span",{className:"xr-dim-name",children:n}),": ",String(p),h<x.length-1?", ":""]},n)),")"]})]})}),a.size>0&&e.jsxs("div",{className:"xr-section",children:[e.jsxs("div",{className:"xr-section-summary",onClick:()=>z("coords"),style:{cursor:"pointer"},children:[y.coords?e.jsx(F,{size:14,className:"xr-icon-toggle active"}):e.jsx(_,{size:14,className:"xr-icon-toggle"}),e.jsxs("span",{className:"xr-section-name",children:[l.coordsLabel,":"]}),e.jsx("span",{className:"xr-dim-count",children:a.size})]}),y.coords&&e.jsx("div",{className:"xr-section-details",children:e.jsx("ul",{className:"xr-var-list",children:r.length>0?r.map((n,p)=>m(n,p,"coords")):Array.from(a).map((n,p)=>{const h=i?.coords?.[n],x=typeof N=="object"&&!Array.isArray(N)?N[n]:void 0,u=x?.type||"float64",b=x?.dims,L=b&&b.length>0?`(${b.join(", ")})`:b&&b.length===0?"()":`(${n})`;return e.jsxs("li",{className:"xr-var-item",children:[e.jsx("span",{className:"xr-var-name",children:n}),e.jsx("span",{className:"xr-var-dims",children:L}),e.jsx("span",{className:"xr-var-dtype",children:u}),e.jsx("span",{className:"xr-var-unit-empty"}),e.jsx("span",{className:"xr-var-preview",children:h&&Array.isArray(h)?c(h):"..."})]},p)})})})]}),e.jsxs("div",{className:"xr-section",children:[e.jsxs("div",{className:"xr-section-summary",onClick:()=>z("dataVars"),style:{cursor:"pointer"},children:[y.dataVars?e.jsx(F,{size:14,className:"xr-icon-toggle active"}):e.jsx(_,{size:14,className:"xr-icon-toggle"}),e.jsxs("span",{className:"xr-section-name",children:[l.dataVarsLabel,":"]}),e.jsx("span",{className:"xr-dim-count",children:o.length})]}),y.dataVars&&e.jsx("div",{className:"xr-section-details",children:e.jsx("ul",{className:"xr-var-list",children:o.length>0?o.map((n,p)=>m(n,p,"data_vars")):e.jsx("li",{className:"xr-var-item",children:e.jsx("span",{className:"xr-var-preview",children:l.noVars})})})})]}),(()=>{const n=t.attrs;if(!n||typeof n!="object"||Object.keys(n).length===0)return null;const p=Object.entries(n);return e.jsxs("div",{className:"xr-section",children:[e.jsxs("div",{className:"xr-section-summary",onClick:()=>z("attrs"),style:{cursor:"pointer"},children:[y.attrs?e.jsx(F,{size:14,className:"xr-icon-toggle active"}):e.jsx(_,{size:14,className:"xr-icon-toggle"}),e.jsx("span",{className:"xr-section-name",children:"Attributes:"}),e.jsxs("span",{className:"xr-dim-count",children:["(",p.length,")"]})]}),y.attrs&&e.jsx("div",{className:"xr-section-details",children:e.jsx("dl",{className:"xr-attrs",children:p.map(([h,x])=>e.jsxs("div",{className:"xr-attr-item",children:[e.jsx("dt",{children:h}),e.jsx("dd",{children:typeof x=="object"?JSON.stringify(x):String(x)})]},h))})})]})})()]})})()]})]}),Object.values(M).some(a=>a&&typeof a=="object"&&!Array.isArray(a))&&e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(ye,{size:20}),e.jsx("h2",{children:l.dataStats})]}),(()=>{const a=T?.completeness,r=T?.profiled_at,o=Object.keys(M).length;if(a===void 0&&!r&&o===0)return null;const i=a!==void 0?Math.round(a*100):null;return e.jsxs("div",{className:"stats-global-card",children:[i!==null&&e.jsxs("div",{className:"stats-global-item",children:[e.jsx("span",{className:"stats-global-label",children:l.completeness}),e.jsxs("div",{className:"stats-global-value-row",children:[e.jsxs("span",{className:`stats-global-pct ${i>=90?"high":i>=50?"mid":"low"}`,children:[i,"%"]}),e.jsx("div",{className:"completeness-track-mini",children:e.jsx("div",{className:`completeness-fill ${i>=90?"high":i>=50?"mid":"low"}`,style:{width:`${i}%`}})})]})]}),e.jsxs("div",{className:"stats-global-item",children:[e.jsx("span",{className:"stats-global-label",children:s==="zh"?"统计变量数":"Variables Analyzed"}),e.jsx("span",{className:"stats-global-value",children:o})]}),r&&e.jsxs("div",{className:"stats-global-item",children:[e.jsx("span",{className:"stats-global-label",children:s==="zh"?"分析时间":"Profiled At"}),e.jsx("span",{className:"stats-global-value",style:{fontSize:"0.8rem"},children:new Date(r).toLocaleDateString()})]})]})})(),e.jsx("div",{className:"variables-table-container",children:e.jsxs("table",{className:"stats-paper-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:l.statsVar}),e.jsx("th",{className:"num-col",children:s==="zh"?"类型":"Type"}),e.jsx("th",{className:"num-col",children:l.statsMin}),e.jsx("th",{className:"num-col",children:l.statsMax}),e.jsx("th",{className:"num-col",children:l.statsMean}),e.jsx("th",{className:"num-col",children:l.statsStd}),e.jsx("th",{className:"num-col",children:s==="zh"?"中位数":"Median"}),e.jsx("th",{className:"num-col",children:s==="zh"?"缺失率":"Null%"}),e.jsx("th",{className:"num-col",children:l.statsUnique})]})}),e.jsx("tbody",{children:Object.entries(M).map(([a,r])=>{if(!r||typeof r!="object")return null;const o=m=>m==null?e.jsx("span",{className:"empty-cell",children:"—"}):typeof m=="number"?Number.isInteger(m)?m.toLocaleString():m.toFixed(4):String(m),i=r.null_rate,c=r.dtype;return e.jsxs("tr",{children:[e.jsx("td",{className:"var-name",children:e.jsx("code",{children:a})}),e.jsx("td",{className:"num-cell",style:{fontSize:"0.7rem",color:"#6366f1"},children:c||e.jsx("span",{className:"empty-cell",children:"—"})}),e.jsx("td",{className:"num-cell",children:o(r.min)}),e.jsx("td",{className:"num-cell",children:o(r.max)}),e.jsx("td",{className:"num-cell",children:o(r.mean)}),e.jsx("td",{className:"num-cell",children:o(r.std)}),e.jsx("td",{className:"num-cell",children:o(r.p50)}),e.jsx("td",{className:"num-cell",children:i!==void 0&&i>0?e.jsxs("span",{className:`null-rate-badge ${i>.5?"critical":i>.1?"warn":"ok"}`,children:[(i*100).toFixed(1),"%"]}):i===0?e.jsx("span",{className:"null-rate-badge ok",children:"0%"}):e.jsx("span",{className:"empty-cell",children:"—"})}),e.jsx("td",{className:"num-cell",children:r.unique_count?.toLocaleString()??e.jsx("span",{className:"empty-cell",children:"—"})})]},a)})})]})})]}),(()=>{const a=t.usage_note,r=g(a,s);return r?e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(G,{size:20}),e.jsx("h2",{id:"usage-note-title",children:l.usageNote})]}),e.jsx("div",{className:"usage-note-container",children:e.jsx("p",{className:"usage-note-content",children:r})})]}):null})(),t.file_bundle&&e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(Ne,{size:20}),e.jsx("h2",{children:l.fileBundle})]}),e.jsxs("div",{className:"file-bundle-container",children:[e.jsxs("div",{className:"bundle-primary",children:[e.jsx("span",{className:"bundle-label primary",children:l.primaryFile}),e.jsxs("span",{className:"bundle-filename",children:[e.jsx(J,{size:16}),t.file_bundle.primary]})]}),t.file_bundle.auxiliary&&t.file_bundle.auxiliary.length>0&&e.jsxs("div",{className:"bundle-auxiliary",children:[e.jsxs("div",{className:"bundle-aux-header",children:[l.auxiliaryFiles," (",t.file_bundle.auxiliary.length,")"]}),e.jsx("div",{className:"bundle-aux-list",children:t.file_bundle.auxiliary.map((a,r)=>e.jsxs("div",{className:"bundle-aux-item",children:[e.jsxs("div",{className:"aux-info",children:[e.jsx("span",{className:"aux-path",children:a.path}),e.jsx("span",{className:"aux-type",children:a.type?.replace("shapefile_","").replace("raster_","")})]}),e.jsx("span",{className:"aux-size",children:a.size_bytes?`${(a.size_bytes/1024).toFixed(1)} KB`:"-"})]},r))})]}),t.file_bundle.total_size_bytes&&e.jsxs("div",{className:"bundle-total",children:[e.jsx("span",{children:l.totalSize}),e.jsxs("span",{className:"total-value",children:[(t.file_bundle.total_size_bytes/1024).toFixed(1)," KB"]})]})]})]}),(()=>{const a=t.references;return!Array.isArray(a)||a.length===0?null:e.jsxs("section",{className:"paper-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx(H,{size:20}),e.jsx("h2",{children:l.referencesLabel})]}),e.jsx("ul",{style:{margin:0,paddingLeft:"0.5rem",fontSize:"0.875rem",color:"var(--cg-text)",lineHeight:1.8,listStyle:"none"},children:a.map((r,o)=>e.jsxs("li",{style:{display:"flex",gap:"0.5rem"},children:[e.jsxs("span",{style:{color:"#6366f1",fontWeight:700,flexShrink:0},children:["[",o+1,"]"]}),r.type==="document"&&e.jsxs("span",{children:[e.jsx("span",{style:{background:"#dbeafe",color:"#2563eb",padding:"1px 6px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:600,marginRight:"0.5rem"},children:"DOC"}),r.source_name||"Unknown"]}),r.type==="literature"&&e.jsxs("span",{children:[e.jsx("span",{style:{background:"#fef3c7",color:"#92400e",padding:"1px 6px",borderRadius:"3px",fontSize:"0.75rem",fontWeight:600,marginRight:"0.5rem"},children:"LIT"}),r.title||`Ref #${r.ref_id||o+1}`]}),r.type!=="document"&&r.type!=="literature"&&e.jsx("span",{children:r.title||r.source_name||JSON.stringify(r)})]},o))})]})})(),e.jsx("style",{children:`
        .data-portrait-paper {
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--cg-text);
          line-height: 1.6;
          max-width: none;
          margin: 0;
          background: var(--cg-surface);
          padding: 2.5rem;
          box-shadow: 0 0 40px rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        
        .paper-header {
          border-bottom: 2px solid var(--cg-text);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
        }

        .paper-journal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        
        .paper-journal-info {
          display: flex;
          gap: 1.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .journal-tag {
          color: #6366f1;
        }

        .paper-lang-switcher {
          display: flex;
          align-items: center;
          background: #e0e7ff;
          padding: 3px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .lang-btn {
          border: none;
          background: transparent;
          padding: 5px 14px;
          border-radius: 6px;
          cursor: pointer;
          color: #6366f1;
          transition: all 0.2s;
        }

        .lang-btn:hover {
          background: rgba(99, 102, 241, 0.1);
        }

        .lang-btn.active {
          background: #6366f1;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.35);
        }

        .lang-divider {
          width: 1px;
          height: 12px;
          background: var(--cg-border);
          margin: 0 2px;
        }
        
        .paper-title {
          font-size: 1.875rem;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          text-align: center;
        }
        
        .paper-authors {
          font-size: 0.9375rem;
          margin-bottom: 0.75rem;
        }
        
        .author-name {
          font-weight: 700;
          text-decoration: underline;
        }
        
        .paper-doi-bar {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        
        .doi-link {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }
        
        .paper-abstract {
          background: var(--cg-bg);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        
        .paper-abstract h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
        }
        
        .paper-abstract p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.75;
          color: var(--cg-text-muted);
          font-style: italic;
        }
        
        .paper-keywords {
          font-size: 0.8125rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .keyword-pill {
          background: var(--cg-bg);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          color: var(--cg-text-muted);
        }
        
        .paper-section {
          margin-bottom: 2rem;
        }
        
        .section-heading {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          color: var(--cg-text);
        }
        
        .section-heading h2 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .narrative-paragraph {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--cg-text);
          text-align: justify;
        }
        
        .records-badge {
          margin-left: auto;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6366f1;
          background: #eef2ff;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
        }

        .variables-paper-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8125rem;
        }
        
        .variables-paper-table th {
          text-align: left;
          padding: 0.75rem 0.625rem;
          background: var(--cg-bg);
          border-top: 2px solid #000;
          border-bottom: 1px solid var(--cg-border);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--cg-text-muted);
        }
        
        .variables-paper-table td {
          padding: 0.625rem;
          border-bottom: 1px solid var(--cg-bg);
          vertical-align: middle;
        }

        .variables-paper-table tbody tr:hover {
          background: var(--cg-bg);
        }
        
        .var-name {
          font-weight: 700;
          white-space: nowrap;
        }
        
        .var-name code {
          background: var(--cg-bg);
          color: #1d4ed8;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.8125rem;
        }

        .col-unit, .col-type, .col-missing {
          text-align: center;
          width: 80px;
        }

        .var-unit-cell, .var-type-cell, .var-missing-cell {
          text-align: center;
          white-space: nowrap;
        }

        .unit-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0e7490;
          background: #ecfeff;
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #cffafe;
        }

        .type-badge {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #7c3aed;
          background: var(--cg-bg);
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #ede9fe;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .empty-cell {
          color: #cbd5e1;
        }

        .missing-indicator {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.2;
        }

        .missing-rate {
          font-weight: 700;
          font-size: 0.8125rem;
        }

        .missing-count {
          font-size: 0.625rem;
          color: var(--cg-text-muted);
        }

        .missing-indicator.zero .missing-rate {
          color: #22c55e;
        }

        .missing-indicator.low .missing-rate {
          color: #f59e0b;
        }

        .missing-indicator.high .missing-rate {
          color: #ef4444;
        }

        .var-desc {
          color: var(--cg-text-muted);
          line-height: 1.4;
          max-width: 300px;
        }

        /* Data Statistics Section */
        /* Basic Data Info Section */
        .basic-info-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .info-row {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--cg-bg);
          font-size: 0.8125rem;
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .info-label {
          flex: 0 0 120px;
          font-weight: 600;
          color: var(--cg-text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .info-value {
          flex: 1;
          color: var(--cg-text);
        }

        .info-value code {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          background: var(--cg-bg);
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          word-break: break-all;
        }

        /* Structure info cards */
        .structure-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px dashed var(--cg-border);
        }

        .structure-card {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          padding: 0.875rem 1rem;
        }

        .structure-card-label {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--cg-text-muted);
          margin-bottom: 0.625rem;
          padding-bottom: 0.375rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .structure-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .dim-item, .coord-item, .spatial-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.8125rem;
        }

        .dim-item code, .coord-item code, .spatial-item code {
          font-size: 0.75rem;
          color: #6366f1;
          background: #eef2ff;
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
        }

        .dim-size {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .coord-range {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .coord-size {
          margin-left: 0.25rem;
          color: var(--cg-text-muted);
          font-size: 0.6875rem;
        }

        .spatial-key {
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          min-width: 60px;
        }

        .spatial-bounds {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }

        .completeness-section {
          margin-bottom: 1.25rem;
        }

        .completeness-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.375rem;
        }

        .completeness-label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--cg-text-muted);
        }

        .completeness-value {
          font-size: 0.875rem;
          font-weight: 800;
        }

        .completeness-value.high { color: #16a34a; }
        .completeness-value.mid  { color: #f59e0b; }
        .completeness-value.low  { color: #ef4444; }

        .completeness-track {
          height: 8px;
          background: var(--cg-bg);
          border-radius: 99px;
          overflow: hidden;
        }

        .completeness-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 0.6s ease;
        }

        .completeness-fill.high { background: linear-gradient(90deg, #22c55e, #16a34a); }
        .completeness-fill.mid  { background: linear-gradient(90deg, #fbbf24, #f59e0b); }
        .completeness-fill.low  { background: linear-gradient(90deg, #f87171, #ef4444); }

        .stats-global-card {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 1.25rem;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .stats-global-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stats-global-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stats-global-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--cg-text);
        }
        .stats-global-value-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .stats-global-pct {
          font-size: 1.1rem;
          font-weight: 800;
          min-width: 3rem;
        }
        .stats-global-pct.high { color: #16a34a; }
        .stats-global-pct.mid  { color: #f59e0b; }
        .stats-global-pct.low  { color: #ef4444; }
        .completeness-track-mini {
          width: 80px;
          height: 6px;
          background: var(--cg-border);
          border-radius: 3px;
          overflow: hidden;
        }

        .null-rate-badge {
          display: inline-block;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: ui-monospace, monospace;
        }
        .null-rate-badge.ok { background: #dcfce7; color: #16a34a; }
        .null-rate-badge.warn { background: #fef3c7; color: #d97706; }
        .null-rate-badge.critical { background: #fee2e2; color: #dc2626; }

        .stats-paper-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8125rem;
          table-layout: fixed; /* 强制固定布局，防止长内容撑开表格 */
        }

        .stats-paper-table th {
          text-align: left;
          padding: 0.625rem;
          background: var(--cg-bg);
          border-top: 2px solid var(--cg-text);
          border-bottom: 1px solid var(--cg-border);
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--cg-text-muted);
          white-space: nowrap; /* 防止表头文字换行 */
        }

        .stats-paper-table td {
          padding: 0.5rem 0.625rem;
          border-bottom: 1px solid var(--cg-bg);
          vertical-align: middle;
        }

        .stats-paper-table tbody tr:nth-child(even) {
          background: var(--cg-bg);
        }

        .stats-paper-table tbody tr:hover {
          background: color-mix(in srgb, var(--cg-bg) 80%, var(--cg-border));
        }

        .num-col {
          text-align: right;
          width: 9%;
        }
        
        .stats-paper-table th:first-child,
        .stats-paper-table td:first-child {
          width: 22%;
        }

        .num-cell {
          text-align: right;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.8125rem;
          color: var(--cg-text);
          white-space: nowrap;
        }

        /* Refined Xarray Representation Styles (Jupyter High-Fidelity) */
        .xr-wrap {
          font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.4;
          color: var(--cg-text);
          background: var(--cg-surface);
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          padding: 8px 0;
          margin-bottom: 1.5rem;
        }

        .xr-header {
          padding-bottom: 8px;
          border-bottom: 1px solid #eee;
          margin-bottom: 8px;
        }

        .xr-obj-type {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-weight: 600;
          color: var(--cg-text-muted);
          font-size: 14px;
        }

        .xr-section {
          margin-bottom: 4px;
        }

        .xr-section-summary {
          display: flex;
          align-items: center;
          padding: 4px 8px;
          cursor: pointer;
        }

        .xr-section-summary:hover {
          background: var(--cg-bg);
        }

        .xr-icon-toggle {
          color: var(--cg-text-muted);
          margin-right: 6px;
          transition: transform 0.1s ease;
        }

        .xr-icon-toggle.active {
          transform: rotate(0deg);
        }

        .xr-section-name {
          font-weight: 600;
          margin-right: 8px;
          min-width: 100px;
        }

        .xr-dims-inline {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: var(--cg-text);
        }

        .xr-dim-name {
          font-weight: bold;
        }

        .xr-section-details {
          padding: 0;
        }

        .xr-var-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .xr-var-item {
          display: grid;
          grid-template-columns: 240px 180px 50px 55px 1fr auto;
          align-items: baseline;
          justify-items: start;
          padding: 4px 8px 4px 28px;
          column-gap: 12px;
        }

        .xr-var-item:nth-child(even) {
          background: var(--cg-bg);
        }

        .xr-var-item:hover {
          background: color-mix(in srgb, var(--cg-bg) 80%, var(--cg-border));
        }

        .xr-var-name {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-weight: 700;
          color: var(--cg-text);
          word-break: break-all;
          overflow-wrap: break-word;
          line-height: 1.4;
          font-size: 12px;
        }

        .xr-var-dims {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: var(--cg-text);
          font-size: 12px;
        }

        .xr-var-dtype {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          color: var(--cg-text-muted);
          font-size: 12px;
        }

        .xr-var-preview {
          color: var(--cg-text-muted);
          font-size: 12px;
          white-space: normal;
          word-break: break-all;
          padding-right: 12px;
          max-width: 300px;
        }

        .xr-var-icons {
          display: flex;
          gap: 8px;
          color: var(--cg-text-muted);
          justify-self: end;
        }

        .xr-var-unit {
          font-size: 10px;
          color: #7c3aed;
          background: var(--cg-bg);
          padding: 1px 5px;
          border-radius: 3px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          white-space: nowrap;
          width: fit-content;
          max-width: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .xr-var-null {
          font-size: 11px;
          padding: 1px 6px;
          border-radius: 4px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        .xr-var-null.low { color: #d97706; background: var(--cg-bg); }
        .xr-var-null.high { color: #dc2626; background: var(--cg-bg); font-weight: 600; }

        /* Grid placeholders — occupy cell space when content is absent */
        .xr-var-unit-empty,
        .xr-var-null-empty {
          display: block;
        }

        .xr-attrs {
          margin: 0;
          padding: 0 8px 4px 28px;
        }
        .xr-attr-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 8px;
          padding: 2px 0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
        }
        .xr-attr-item dt {
          font-weight: 600;
          color: var(--cg-text);
        }
        .xr-attr-item dd {
          margin: 0;
          color: var(--cg-text-muted);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .xr-obj-dims {
          font-size: 12px;
          color: var(--cg-text-muted);
          margin-left: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .xr-dim-count {
          font-size: 11px;
          color: var(--cg-text-muted);
          background: var(--cg-bg);
          padding: 1px 6px;
          border-radius: 4px;
          margin-left: 4px;
        }

        /* Data Sample Preview */
        .data-sample-preview {
          margin-top: 16px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          overflow: hidden;
        }

        .sample-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: var(--cg-bg);
          border-bottom: 1px solid var(--cg-border);
          font-size: 12px;
          font-weight: 600;
          color: var(--cg-text-muted);
        }

        .sample-truncated {
          font-size: 11px;
          color: var(--cg-text-muted);
          font-weight: 400;
        }

        .sample-table-wrapper {
          overflow-x: auto;
          max-height: 320px;
          overflow-y: auto;
        }

        .sample-table {
          width: 100%;
          border-collapse: collapse;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11.5px;
          line-height: 1.5;
        }

        .sample-table thead th {
          position: sticky;
          top: 0;
          background: var(--cg-bg);
          padding: 6px 10px;
          text-align: left;
          font-weight: 700;
          font-size: 11px;
          color: var(--cg-text);
          border-bottom: 2px solid #cbd5e1;
          white-space: nowrap;
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sample-table tbody td {
          padding: 4px 10px;
          border-bottom: 1px solid var(--cg-bg);
          color: var(--cg-text);
          white-space: nowrap;
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sample-table tbody tr:hover {
          background: var(--cg-bg);
        }

        .sample-table .row-idx {
          color: var(--cg-text-muted);
          font-size: 10px;
          width: 32px;
          text-align: right;
          padding-right: 8px;
        }

        .sample-table .tail-row {
          background: var(--cg-bg);
        }

        .sample-table .sentinel-val {
          color: #dc2626;
          font-weight: 700;
          background: var(--cg-bg);
        }
        
        .paper-grid-2col {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 2rem;
          border-top: 1px dashed var(--cg-border);
          padding-top: 1.5rem;
        }
        
        .provenance-list {
          margin: 0;
        }
        
        .prov-item {
          margin-bottom: 1rem;
        }
        
        .prov-item dt {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--cg-text-muted);
        }
        
        .prov-item dd {
          margin: 0;
          font-weight: 600;
        }
        
        .citation-box {
          background: #fdf4ff;
          padding: 1.5rem;
          border-left: 3px solid #a855f7;
          border-radius: 4px;
          font-size: 0.875rem;
        }
        
        /* File Bundle Styles */
        .file-bundle-container {
          background: var(--cg-bg);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #e9d5ff;
        }
        
        .bundle-primary {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e9d5ff;
          margin-bottom: 1rem;
        }
        
        .bundle-label {
          font-size: 0.625rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        
        .bundle-label.primary {
          background: #7c3aed;
          color: white;
        }
        
        .bundle-filename {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
          color: #5b21b6;
          font-weight: 600;
        }
        
        .bundle-auxiliary {
          margin-bottom: 1rem;
        }
        
        .bundle-aux-header {
          font-size: 0.75rem;
          font-weight: 700;
          color: #7c3aed;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        
        .bundle-aux-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .bundle-aux-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--cg-surface);
          padding: 0.625rem 0.875rem;
          border-radius: 8px;
          font-size: 0.8125rem;
        }
        
        .aux-info {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }
        
        .aux-path {
          font-family: ui-monospace, monospace;
          color: #6b21a8;
        }
        
        .aux-type {
          font-size: 0.625rem;
          padding: 0.125rem 0.375rem;
          background: #e9d5ff;
          color: #7c3aed;
          border-radius: 4px;
          font-weight: 600;
        }
        
        .aux-size {
          font-size: 0.75rem;
          color: #a78bfa;
        }
        
        .bundle-total {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #e9d5ff;
          font-size: 0.875rem;
          font-weight: 600;
          color: #7c3aed;
        }
        
        .bundle-total .total-value {
          color: #5b21b6;
          font-weight: 700;
        }
        .stats-paper-table .var-name code {
          background: var(--cg-bg) !important;
          color: #2563eb !important;
          padding: 0.2rem 0.4rem !important;
          border-radius: 4px !important;
          font-weight: 600 !important;
          display: block !important; /* 改为 block 以支持换行 */
          word-break: break-all !important; /* 强制长单词换行 */
          white-space: normal !important; /* 允许正常折行 */
          overflow-wrap: break-word !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .stat-param-tag {
          color: #7c3aed !important;
          margin-left: 0.25rem !important;
          font-weight: 800 !important;
        }

        .file-pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .file-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          background: var(--cg-bg);
          color: var(--cg-text);
          border: 1px solid var(--cg-border);
        }
        
        .file-pill.primary {
          background: var(--cg-bg);
          color: #2563eb;
          border-color: #bfdbfe;
          font-weight: 600;
        }
        
        .file-pill.aux {
          background: var(--cg-bg);
          color: #7c3aed;
          border-color: #ddd6fe;
        }

        .usage-note-container {
          background: var(--cg-bg);
          border: 1px solid #fef3c7;
          border-radius: 8px;
          padding: 1.25rem;
          margin-top: 0.5rem;
        }
        
        .usage-note-content {
          font-size: 0.875rem;
          color: #92400e;
          margin: 0;
          white-space: pre-wrap;
        }
      `})]})};export{Me as D};
