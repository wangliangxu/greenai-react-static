import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{Cr as r,Ln as i,Ti as a,Ur as o,Vn as s,Wi as c,bi as l,mi as u,ut as d,vi as f}from"./ui-vendor-DRemX-fT.js";import{t as p}from"./SafeHtml-BW5I8Nph.js";import{i as m,n as h,r as g,t as _}from"./bilingual-BAihdQ31.js";var v=e(t(),1),y=n(),b=({metadata:e,catalog:t,title:n,publishedTime:b,modifiedTime:ee,filePath:x,fileSize:S,lang:C,onLanguageChange:w})=>{let[te,T]=(0,v.useState)(g()),E=C||te,[D,ne]=(0,v.useState)({dims:!1,coords:!0,dataVars:!0,attrs:!1}),O=e=>ne(t=>({...t,[e]:!t[e]})),k=e=>{w?w(e):T(e),m(e)},re=!!C,A=t||e.catalog||{},j=e||{},ie=e=>!!(e==null||e===``||Array.isArray(e)&&e.length===0||typeof e==`object`&&!Array.isArray(e)&&Object.keys(e).length===0),M=(()=>{let e={...j};for(let[t,n]of Object.entries(A))ie(n)||(e[t]=n);return e})(),N=M.stats&&typeof M.stats==`object`?M.stats:{},P=typeof N.file_size_bytes==`number`?`${(N.file_size_bytes/1024).toFixed(2)} KB`:null,F=h(n||j.title||((e=>!e||typeof e!=`string`?!1:/\((?:sql|csv|netcdf|hdf|parquet|json|xlsx?|geojson|tiff?|shp):?\)$/i.test(e))(A.title)?void 0:A.title),E)||(typeof A.title==`string`?A.title:null)||(E===`zh`?`无标题数据集`:`Untitled Dataset`),I=h(M.introduction||M.academic_narrative||A.introduction,E)||``,ae=h(M.abstract||A.abstract,E)||``,L=(()=>{let e=M.variables||A.variables;return e&&typeof e==`object`&&!Array.isArray(e)?Object.entries(e).map(([e,t])=>{let n=t,r=n.description;return n.zh||n.en?r=[{lang:`zh`,value:n.zh||``},{lang:`en`,value:n.en||``}]:r||=e,{name:e,type:n.type||n.dtype||void 0,description:r,unit:n.unit||n.units||void 0,dims:Array.isArray(n.dims)?n.dims:void 0}}):Array.isArray(e)&&e.length>0?e:[]})(),R=(()=>{let e=M.stats||A.stats;if(e&&typeof e==`object`&&!Array.isArray(e)){let t=e,n=t.variables;if(n&&typeof n==`object`)return n;if(Object.values(t).some(e=>e&&typeof e==`object`&&`min`in e))return t}return{}})(),z=(()=>{let e=M.stats||A.stats;if(e&&typeof e==`object`&&!Array.isArray(e))return e.global})(),B=M.records||A.records||{},V=M.schema||A.schema||{},H=A.data_sample?.coords||M.data_sample?.coords||{},U=(()=>{let e=V.dims;if(e&&typeof e==`object`&&Object.keys(e).length>0)return e;let t=new Set;for(let e of L)e.dims&&Array.isArray(e.dims)&&e.dims.forEach(e=>t.add(e));if(t.size===0)return{};let n={};for(let e of t){let t=H[e];n[e]=Array.isArray(t)?t.length:`?`}return n})(),W=V.coords||A.coords||M.coords||[],G=A.spatial_extent||M.spatial_extent,K={sourceName:M.source_name||(x?x.split(`/`).pop():``),driver:M.driver||``,container:A.container||M.container||``},q=(()=>{let e=(A.file_bundle||M.file_bundle)?.primary||K.sourceName||``;if(!e)return``;let t=e.split(`.`);return(t.length>1?t.pop():``)?.toUpperCase()||``})(),oe=_(M.tags||A.tags,E),J=h(M.author||M.creator||A.author,E)||`-`,Y=h(M.publisher||A.publisher,E)||`-`,X=h(M.doi||A.doi,E)||`-`,Z=M.license||M.rights||A.license,se=typeof(M.license||A.license)==`string`?String(M.license||A.license):h(Z,E)||`-`,Q=M.temporal_extent||M.temporal||A.temporal_extent||{},ce=`${h(Q.start,E)||`-`} - ${h(Q.end,E)||`-`}`,$={abstract:E===`zh`?`摘要`:`Abstract`,keywords:E===`zh`?`关键词`:`Keywords`,descriptor:E===`zh`?`引言`:`Introduction`,records:E===`zh`?`数据变量与结构`:`Variables & Structure`,varName:E===`zh`?`变量名称`:`Variable`,varUnit:E===`zh`?`单位`:`Unit`,varType:E===`zh`?`类型`:`Type`,varDesc:E===`zh`?`说明`:`Description`,varMissing:E===`zh`?`缺失`:`Missing`,recordsSummary:E===`zh`?`记录`:`Records`,rows:E===`zh`?`行`:`rows`,columns:E===`zh`?`列`:`cols`,basicInfo:E===`zh`?`数据基本信息`:`Basic Information`,titleZh:E===`zh`?`中文标题`:`Chinese Title`,titleEn:E===`zh`?`英文标题`:`English Title`,filePathLabel:E===`zh`?`文件路径`:`File Path`,sourceNameLabel:E===`zh`?`数据源名称`:`Source Name`,driverLabel:E===`zh`?`文件格式`:`File Format`,containerLabel:E===`zh`?`容器类型`:`Container`,fileSizeLabel:E===`zh`?`文件总大小`:`Total File Size`,recordsCount:E===`zh`?`记录数`:`Record Count`,dimsLabel:E===`zh`?`维度 (Dimensions)`:`Dimensions`,coordsLabel:E===`zh`?`坐标轴 (Coordinates)`:`Coordinates`,spatialLabel:E===`zh`?`空间范围`:`Spatial Extent`,temporalLabel:E===`zh`?`时间范围`:`Temporal Range`,fileList:E===`zh`?`文件列表`:`File List`,dataStats:E===`zh`?`数据统计`:`Data Statistics`,statsVar:E===`zh`?`变量`:`Variable`,statsMin:E===`zh`?`最小值`:`Min`,statsMax:E===`zh`?`最大值`:`Max`,statsMean:E===`zh`?`均值`:`Mean`,statsStd:E===`zh`?`标准差`:`Std`,statsUnique:E===`zh`?`唯一值`:`Unique`,completeness:E===`zh`?`数据完整度`:`Completeness`,noStats:E===`zh`?`统计信息正在生成中。`:`Statistics are being generated.`,prov:E===`zh`?`使用许可`:`License`,source:E===`zh`?`数据来源`:`Data Source`,tempSpan:E===`zh`?`时间跨度`:`Temporal Span`,license:E===`zh`?`使用条款`:`Terms of Use`,cite:E===`zh`?`引用方式`:`How to Cite`,distributed:E===`zh`?`发布于`:`Distributed by`,published:E===`zh`?`出版日期`:`Published`,placeholder:E===`zh`?`正在为此数据集生成详细的科学叙事，以便为学生和研究人员提供更深层次的背景信息。`:`Currently generating a detailed scientific narrative for this dataset to provide deeper context for students and researchers.`,noVars:E===`zh`?`变量定义正在校准中。`:`Variable definitions are currently being calibrated.`,fileBundle:E===`zh`?`文件列表`:`File List`,primaryFile:E===`zh`?`主要数据文件`:`Primary Data File`,auxiliaryFiles:E===`zh`?`附属/元数据文件`:`Auxiliary / Meta Files`,totalSize:E===`zh`?`文件包总大小`:`Total Bundle Size`,usageNote:E===`zh`?`使用说明`:`Usage Instructions`,referencesLabel:E===`zh`?`参考文献`:`References`,xarrayDetails:E===`zh`?`数据集结构 (Xarray Representation)`:`Dataset Structure (Xarray Representation)`,dataVarsLabel:E===`zh`?`数据变量 (Data Variables)`:`Data Variables`};return(0,y.jsxs)(`div`,{className:`data-portrait-paper`,children:[(0,y.jsxs)(`header`,{className:`paper-header`,children:[!re&&(0,y.jsx)(`div`,{className:`paper-journal-top`,style:{justifyContent:`flex-end`},children:(0,y.jsxs)(`div`,{className:`paper-lang-switcher`,children:[(0,y.jsx)(`button`,{className:`lang-btn ${E===`zh`?`active`:``}`,onClick:()=>k(`zh`),children:`中`}),(0,y.jsx)(`div`,{className:`lang-divider`}),(0,y.jsx)(`button`,{className:`lang-btn ${E===`en`?`active`:``}`,onClick:()=>k(`en`),children:`EN`})]})}),(0,y.jsx)(`h1`,{className:`paper-title`,children:F}),(0,y.jsxs)(`div`,{className:`paper-doi-bar`,children:[(0,y.jsxs)(`span`,{className:`date-label`,children:[E===`zh`?`发布日期`:`Published`,`:`]}),(0,y.jsx)(`span`,{className:`date-value`,children:b||`-`}),(0,y.jsx)(`span`,{className:`divider`,children:`|`}),(0,y.jsxs)(`span`,{className:`date-label`,children:[E===`zh`?`更新日期`:`Updated`,`:`]}),(0,y.jsx)(`span`,{className:`date-value`,children:ee||`-`})]}),(0,y.jsxs)(`div`,{className:`paper-abstract`,children:[(0,y.jsx)(`h3`,{children:$.abstract}),(0,y.jsx)(`p`,{children:ae})]}),(0,y.jsxs)(`div`,{className:`paper-keywords`,children:[(0,y.jsxs)(`span`,{className:`keywords-label`,children:[$.keywords,`:`]}),oe.map((e,t)=>(0,y.jsx)(`span`,{className:`keyword-pill`,children:e},t))]})]}),(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(c,{size:20}),(0,y.jsx)(`h2`,{children:$.descriptor})]}),(0,y.jsx)(`div`,{className:`narrative-content`,children:I?(0,y.jsx)(p,{html:I.replace(/\n/g,`<br/>`),className:`narrative-paragraph`}):(0,y.jsx)(`p`,{className:`narrative-placeholder`,children:$.placeholder})})]}),(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(r,{size:20}),(0,y.jsx)(`h2`,{children:$.basicInfo})]}),(0,y.jsxs)(`div`,{className:`basic-info-grid`,children:[(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.titleZh}),(0,y.jsx)(`span`,{className:`info-value`,children:h(j.title||M.title,`zh`)||`-`})]}),(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.titleEn}),(0,y.jsx)(`span`,{className:`info-value`,children:h(j.title||M.title,`en`)||`-`})]}),(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.fileSizeLabel}),(0,y.jsx)(`span`,{className:`info-value`,children:M.file_bundle?.total_size_bytes?`${(M.file_bundle.total_size_bytes/1024).toFixed(2)} KB`:P||S||`-`})]}),q&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.driverLabel}),(0,y.jsx)(`span`,{className:`info-value`,children:(0,y.jsx)(`span`,{className:`type-badge`,children:q})})]}),Q&&(Q.start||Q.end)&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.temporalLabel}),(0,y.jsx)(`span`,{className:`info-value`,children:ce})]}),(()=>{if(!G||typeof G!=`object`)return null;let e=G,t=e.bbox||e.spatial_bounds,n=e.spatial_coverage,r=M.coords,i=r&&typeof r==`object`?r.crs||r.spatial_ref:null,a=typeof i==`string`?i:i&&typeof i==`object`?String(i.value||``):``;if(!t&&!n&&!a)return null;let o=t&&t.length>=4&&t[0]===t[2]&&t[1]===t[3];return(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:E===`zh`?`空间覆盖`:`Spatial Coverage`}),(0,y.jsx)(`span`,{className:`info-value`,children:n})]}),t&&t.length>=4&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:E===`zh`?`空间范围`:`Spatial Extent`}),(0,y.jsx)(`span`,{className:`info-value`,children:o?(0,y.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,y.jsx)(`span`,{className:`type-badge`,style:{background:`#dbeafe`,color:`#2563eb`,fontSize:`0.7rem`},children:E===`zh`?`站点`:`Point`}),(0,y.jsxs)(`code`,{children:[t[1].toFixed(4),`°N, `,t[0].toFixed(4),`°E`]})]}):(0,y.jsxs)(`code`,{children:[t[1].toFixed(2),`°~`,t[3].toFixed(2),`°N, `,t[0].toFixed(2),`°~`,t[2].toFixed(2),`°E`]})})]}),a&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:E===`zh`?`坐标参考`:`CRS`}),(0,y.jsx)(`span`,{className:`info-value`,children:(0,y.jsx)(`code`,{children:a})})]})]})})(),(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.fileList}),(0,y.jsx)(`span`,{className:`info-value`,children:(()=>{if(M.file_bundle)return(0,y.jsxs)(`div`,{className:`file-pill-list`,children:[(0,y.jsx)(`span`,{className:`file-pill primary`,children:M.file_bundle.primary}),M.file_bundle.auxiliary?.map((e,t)=>(0,y.jsx)(`span`,{className:`file-pill aux`,children:e.path.split(`/`).pop()},t))]});let t=e?.metadata?.files||M.files;return t&&Array.isArray(t)&&t.length>0?(0,y.jsx)(`div`,{className:`file-pill-list`,children:t.map((e,t)=>{let n=e.role===`primary`||e.role===`main`,r=e.size_bytes?` (${(e.size_bytes/1024).toFixed(1)} KB)`:``;return(0,y.jsxs)(`span`,{className:`file-pill ${n?`primary`:`aux`}`,title:r,children:[e.name,r&&(0,y.jsx)(`span`,{style:{fontSize:`0.65rem`,opacity:.6,marginLeft:`0.25rem`},children:r})]},t)})}):(0,y.jsx)(`span`,{className:`file-pill`,children:K.sourceName})})()})]}),(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.prov}),(0,y.jsx)(`span`,{className:`info-value`,children:se})]}),(J!==`-`||Y!==`-`||X!==`-`)&&(0,y.jsxs)(`div`,{className:`info-row`,children:[(0,y.jsx)(`span`,{className:`info-label`,children:$.cite}),(0,y.jsxs)(`span`,{className:`info-value`,style:{fontSize:`0.8rem`},children:[J,`. (`,new Date().getFullYear(),`). `,(0,y.jsx)(`i`,{children:F}),`. `,$.distributed,` `,Y,`. DOI: `,X]})]})]})]}),(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(o,{size:20}),(0,y.jsx)(`h2`,{children:$.records}),!!(B.rows||B.columns)&&(0,y.jsxs)(`span`,{className:`records-badge`,children:[B.rows?.toLocaleString()||`?`,` `,$.rows,` × `,B.columns||`?`,` `,$.columns]})]}),(0,y.jsxs)(`div`,{className:`variables-table-container`,children:[V&&typeof V==`object`&&`error`in V&&typeof V.error==`object`&&V.error!==null&&(()=>{let e=V.error;return(0,y.jsxs)(`div`,{style:{padding:`24px`,background:`var(--cg-bg)`,border:`2px solid #ef4444`,borderRadius:`12px`,display:`flex`,gap:`16px`,alignItems:`flex-start`,marginTop:`16px`,boxShadow:`0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)`},children:[(0,y.jsx)(`div`,{style:{background:`#fee2e2`,padding:`12px`,borderRadius:`50%`,color:`#dc2626`},children:(0,y.jsx)(u,{size:32})}),(0,y.jsxs)(`div`,{style:{flex:1},children:[(0,y.jsxs)(`h3`,{style:{margin:`0 0 8px 0`,color:`#991b1b`,fontSize:`1.25rem`,fontWeight:700,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,y.jsx)(`span`,{style:{background:`#dc2626`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`,fontWeight:800,textTransform:`uppercase`},children:`Causality Blocker`}),`物理结构提取失败`]}),(0,y.jsxs)(`div`,{style:{background:`var(--cg-surface)`,padding:`16px`,borderRadius:`8px`,border:`1px solid #fecaca`,marginBottom:`16px`},children:[(0,y.jsx)(`p`,{style:{margin:`0 0 12px 0`,fontSize:`0.9375rem`,color:`#7f1d1d`,fontWeight:500},children:e.message||e.reason||`底层读取物理引擎在尝试解析此数据源时遭遇了不可恢复的致命错误。`}),e.traceback&&(0,y.jsxs)(`div`,{style:{background:`var(--cg-text)`,borderRadius:`6px`,overflow:`hidden`},children:[(0,y.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,padding:`6px 12px`,background:`#0f172a`,borderBottom:`1px solid var(--cg-text)`,fontWeight:600,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,y.jsx)(`span`,{children:`TRACEBACK`}),(0,y.jsx)(`span`,{style:{fontSize:`0.65rem`,background:`#ef4444`,color:`white`,padding:`2px 6px`,borderRadius:`4px`},children:`ERROR`})]}),(0,y.jsx)(`pre`,{style:{margin:0,padding:`12px`,fontSize:`0.8rem`,color:`var(--cg-bg)`,overflowX:`auto`,fontFamily:`monospace`,lineHeight:1.5},children:e.traceback})]})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,fontSize:`0.8125rem`,color:`#b91c1c`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,y.jsx)(d,{size:14}),` 语义评分已被强制归零`]}),(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,y.jsx)(s,{size:14}),` 请核查源文件或驱动参数`]})]})]})]})})(),(()=>{let e=new Set(Array.isArray(W)?W:Object.keys(W||{})),t=L.filter(t=>e.has(t.name)),n=e.size>0?L.filter(t=>!e.has(t.name)):L,r=M.data_sample,i=e=>{if(!e||e.length===0)return`...`;let t=e=>e==null?`NaN`:String(e);if(e.length<=6)return e.map(t).join(` `);let n=e.slice(0,3).map(t),r=e.slice(-2).map(t);return[...n,`...`,...r].join(` `)},a=(e,t,n)=>{let a=R[e.name],o=a?.null_rate,s=r?.[n]?.[e.name],c=e.type||(a?.dtype==null?`float64`:String(a.dtype));return(0,y.jsxs)(`li`,{className:`xr-var-item`,children:[(0,y.jsx)(`span`,{className:`xr-var-name`,children:e.name}),(0,y.jsx)(`span`,{className:`xr-var-dims`,children:e.dims&&e.dims.length>0?`(${e.dims.join(`, `)})`:``}),(0,y.jsx)(`span`,{className:`xr-var-dtype`,children:c}),(0,y.jsx)(`span`,{className:e.unit?`xr-var-unit`:`xr-var-unit-empty`,children:e.unit||``}),(0,y.jsx)(`span`,{className:`xr-var-preview`,children:s&&Array.isArray(s)?i(s):h(e.description,E)||`...`}),(0,y.jsx)(`span`,{className:o!==void 0&&o>0?`xr-var-null ${o>.1?`high`:`low`}`:`xr-var-null-empty`,children:o!==void 0&&o>0?`${(o*100).toFixed(1)}%`:``})]},t)};return(0,y.jsxs)(`div`,{className:`xr-wrap`,children:[(0,y.jsx)(`div`,{className:`xr-header`,children:K.container===`image`&&U&&typeof U==`object`?(0,y.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,Object.entries(U).map(([e,t])=>`${e}: ${t}`).join(` × `),`)`]}):!!(B.rows||B.columns)&&(0,y.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,B.rows?.toLocaleString()||`?`,` × `,B.columns||`?`,`)`]})}),U&&Object.keys(U).length>0&&(0,y.jsx)(`div`,{className:`xr-section`,children:(0,y.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`dims`),style:{cursor:`pointer`},children:[D.dims?(0,y.jsx)(l,{size:14,className:`xr-icon-toggle active`}):(0,y.jsx)(f,{size:14,className:`xr-icon-toggle`}),(0,y.jsxs)(`span`,{className:`xr-section-name`,children:[$.dimsLabel,`:`]}),(0,y.jsxs)(`div`,{className:`xr-dims-inline`,children:[`(`,Array.isArray(U)?U.map((e,t)=>(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`span`,{className:`xr-dim-name`,children:e}),t<U.length-1?`, `:``]},e)):Object.entries(U).map(([e,t],n,r)=>(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`span`,{className:`xr-dim-name`,children:e}),`: `,String(t),n<r.length-1?`, `:``]},e)),`)`]})]})}),e.size>0&&(0,y.jsxs)(`div`,{className:`xr-section`,children:[(0,y.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`coords`),style:{cursor:`pointer`},children:[D.coords?(0,y.jsx)(l,{size:14,className:`xr-icon-toggle active`}):(0,y.jsx)(f,{size:14,className:`xr-icon-toggle`}),(0,y.jsxs)(`span`,{className:`xr-section-name`,children:[$.coordsLabel,`:`]}),(0,y.jsx)(`span`,{className:`xr-dim-count`,children:e.size})]}),D.coords&&(0,y.jsx)(`div`,{className:`xr-section-details`,children:(0,y.jsx)(`ul`,{className:`xr-var-list`,children:t.length>0?t.map((e,t)=>a(e,t,`coords`)):Array.from(e).map((e,t)=>{let n=r?.coords?.[e],a=typeof W==`object`&&!Array.isArray(W)?W[e]:void 0,o=a?.type||`float64`,s=a?.dims,c=s&&s.length>0?`(${s.join(`, `)})`:s&&s.length===0?`()`:`(${e})`;return(0,y.jsxs)(`li`,{className:`xr-var-item`,children:[(0,y.jsx)(`span`,{className:`xr-var-name`,children:e}),(0,y.jsx)(`span`,{className:`xr-var-dims`,children:c}),(0,y.jsx)(`span`,{className:`xr-var-dtype`,children:o}),(0,y.jsx)(`span`,{className:`xr-var-unit-empty`}),(0,y.jsx)(`span`,{className:`xr-var-preview`,children:n&&Array.isArray(n)?i(n):`...`})]},t)})})})]}),(0,y.jsxs)(`div`,{className:`xr-section`,children:[(0,y.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`dataVars`),style:{cursor:`pointer`},children:[D.dataVars?(0,y.jsx)(l,{size:14,className:`xr-icon-toggle active`}):(0,y.jsx)(f,{size:14,className:`xr-icon-toggle`}),(0,y.jsxs)(`span`,{className:`xr-section-name`,children:[$.dataVarsLabel,`:`]}),(0,y.jsx)(`span`,{className:`xr-dim-count`,children:n.length})]}),D.dataVars&&(0,y.jsx)(`div`,{className:`xr-section-details`,children:(0,y.jsx)(`ul`,{className:`xr-var-list`,children:n.length>0?n.map((e,t)=>a(e,t,`data_vars`)):(0,y.jsx)(`li`,{className:`xr-var-item`,children:(0,y.jsx)(`span`,{className:`xr-var-preview`,children:$.noVars})})})})]}),(()=>{let e=M.attrs;if(!e||typeof e!=`object`||Object.keys(e).length===0)return null;let t=Object.entries(e);return(0,y.jsxs)(`div`,{className:`xr-section`,children:[(0,y.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`attrs`),style:{cursor:`pointer`},children:[D.attrs?(0,y.jsx)(l,{size:14,className:`xr-icon-toggle active`}):(0,y.jsx)(f,{size:14,className:`xr-icon-toggle`}),(0,y.jsx)(`span`,{className:`xr-section-name`,children:`Attributes:`}),(0,y.jsxs)(`span`,{className:`xr-dim-count`,children:[`(`,t.length,`)`]})]}),D.attrs&&(0,y.jsx)(`div`,{className:`xr-section-details`,children:(0,y.jsx)(`dl`,{className:`xr-attrs`,children:t.map(([e,t])=>(0,y.jsxs)(`div`,{className:`xr-attr-item`,children:[(0,y.jsx)(`dt`,{children:e}),(0,y.jsx)(`dd`,{children:typeof t==`object`?JSON.stringify(t):String(t)})]},e))})})]})})()]})})()]})]}),Object.values(R).some(e=>e&&typeof e==`object`&&!Array.isArray(e))&&(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(a,{size:20}),(0,y.jsx)(`h2`,{children:$.dataStats})]}),(()=>{let e=z?.completeness,t=z?.profiled_at,n=Object.keys(R).length;if(e===void 0&&!t&&n===0)return null;let r=e===void 0?null:Math.round(e*100);return(0,y.jsxs)(`div`,{className:`stats-global-card`,children:[r!==null&&(0,y.jsxs)(`div`,{className:`stats-global-item`,children:[(0,y.jsx)(`span`,{className:`stats-global-label`,children:$.completeness}),(0,y.jsxs)(`div`,{className:`stats-global-value-row`,children:[(0,y.jsxs)(`span`,{className:`stats-global-pct ${r>=90?`high`:r>=50?`mid`:`low`}`,children:[r,`%`]}),(0,y.jsx)(`div`,{className:`completeness-track-mini`,children:(0,y.jsx)(`div`,{className:`completeness-fill ${r>=90?`high`:r>=50?`mid`:`low`}`,style:{width:`${r}%`}})})]})]}),(0,y.jsxs)(`div`,{className:`stats-global-item`,children:[(0,y.jsx)(`span`,{className:`stats-global-label`,children:E===`zh`?`统计变量数`:`Variables Analyzed`}),(0,y.jsx)(`span`,{className:`stats-global-value`,children:n})]}),t&&(0,y.jsxs)(`div`,{className:`stats-global-item`,children:[(0,y.jsx)(`span`,{className:`stats-global-label`,children:E===`zh`?`分析时间`:`Profiled At`}),(0,y.jsx)(`span`,{className:`stats-global-value`,style:{fontSize:`0.8rem`},children:new Date(t).toLocaleDateString()})]})]})})(),(0,y.jsx)(`div`,{className:`variables-table-container`,children:(0,y.jsxs)(`table`,{className:`stats-paper-table`,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:$.statsVar}),(0,y.jsx)(`th`,{className:`num-col`,children:E===`zh`?`类型`:`Type`}),(0,y.jsx)(`th`,{className:`num-col`,children:$.statsMin}),(0,y.jsx)(`th`,{className:`num-col`,children:$.statsMax}),(0,y.jsx)(`th`,{className:`num-col`,children:$.statsMean}),(0,y.jsx)(`th`,{className:`num-col`,children:$.statsStd}),(0,y.jsx)(`th`,{className:`num-col`,children:E===`zh`?`中位数`:`Median`}),(0,y.jsx)(`th`,{className:`num-col`,children:E===`zh`?`缺失率`:`Null%`}),(0,y.jsx)(`th`,{className:`num-col`,children:$.statsUnique})]})}),(0,y.jsx)(`tbody`,{children:Object.entries(R).map(([e,t])=>{if(!t||typeof t!=`object`)return null;let n=e=>e==null?(0,y.jsx)(`span`,{className:`empty-cell`,children:`—`}):typeof e==`number`?Number.isInteger(e)?e.toLocaleString():e.toFixed(4):String(e),r=t.null_rate,i=t.dtype;return(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{className:`var-name`,children:(0,y.jsx)(`code`,{children:e})}),(0,y.jsx)(`td`,{className:`num-cell`,style:{fontSize:`0.7rem`,color:`#6366f1`},children:i||(0,y.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,y.jsx)(`td`,{className:`num-cell`,children:n(t.min)}),(0,y.jsx)(`td`,{className:`num-cell`,children:n(t.max)}),(0,y.jsx)(`td`,{className:`num-cell`,children:n(t.mean)}),(0,y.jsx)(`td`,{className:`num-cell`,children:n(t.std)}),(0,y.jsx)(`td`,{className:`num-cell`,children:n(t.p50)}),(0,y.jsx)(`td`,{className:`num-cell`,children:r!==void 0&&r>0?(0,y.jsxs)(`span`,{className:`null-rate-badge ${r>.5?`critical`:r>.1?`warn`:`ok`}`,children:[(r*100).toFixed(1),`%`]}):r===0?(0,y.jsx)(`span`,{className:`null-rate-badge ok`,children:`0%`}):(0,y.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,y.jsx)(`td`,{className:`num-cell`,children:t.unique_count?.toLocaleString()??(0,y.jsx)(`span`,{className:`empty-cell`,children:`—`})})]},e)})})]})})]}),(()=>{let e=M.usage_note,t=h(e,E);return t?(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(s,{size:20}),(0,y.jsx)(`h2`,{id:`usage-note-title`,children:$.usageNote})]}),(0,y.jsx)(`div`,{className:`usage-note-container`,children:(0,y.jsx)(`p`,{className:`usage-note-content`,children:t})})]}):null})(),M.file_bundle&&(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(i,{size:20}),(0,y.jsx)(`h2`,{children:$.fileBundle})]}),(0,y.jsxs)(`div`,{className:`file-bundle-container`,children:[(0,y.jsxs)(`div`,{className:`bundle-primary`,children:[(0,y.jsx)(`span`,{className:`bundle-label primary`,children:$.primaryFile}),(0,y.jsxs)(`span`,{className:`bundle-filename`,children:[(0,y.jsx)(r,{size:16}),M.file_bundle.primary]})]}),M.file_bundle.auxiliary&&M.file_bundle.auxiliary.length>0&&(0,y.jsxs)(`div`,{className:`bundle-auxiliary`,children:[(0,y.jsxs)(`div`,{className:`bundle-aux-header`,children:[$.auxiliaryFiles,` (`,M.file_bundle.auxiliary.length,`)`]}),(0,y.jsx)(`div`,{className:`bundle-aux-list`,children:M.file_bundle.auxiliary.map((e,t)=>(0,y.jsxs)(`div`,{className:`bundle-aux-item`,children:[(0,y.jsxs)(`div`,{className:`aux-info`,children:[(0,y.jsx)(`span`,{className:`aux-path`,children:e.path}),(0,y.jsx)(`span`,{className:`aux-type`,children:e.type?.replace(`shapefile_`,``).replace(`raster_`,``)})]}),(0,y.jsx)(`span`,{className:`aux-size`,children:e.size_bytes?`${(e.size_bytes/1024).toFixed(1)} KB`:`-`})]},t))})]}),M.file_bundle.total_size_bytes&&(0,y.jsxs)(`div`,{className:`bundle-total`,children:[(0,y.jsx)(`span`,{children:$.totalSize}),(0,y.jsxs)(`span`,{className:`total-value`,children:[(M.file_bundle.total_size_bytes/1024).toFixed(1),` KB`]})]})]})]}),(()=>{let e=M.references;return!Array.isArray(e)||e.length===0?null:(0,y.jsxs)(`section`,{className:`paper-section`,children:[(0,y.jsxs)(`div`,{className:`section-heading`,children:[(0,y.jsx)(c,{size:20}),(0,y.jsx)(`h2`,{children:$.referencesLabel})]}),(0,y.jsx)(`ul`,{style:{margin:0,paddingLeft:`0.5rem`,fontSize:`0.875rem`,color:`var(--cg-text)`,lineHeight:1.8,listStyle:`none`},children:e.map((e,t)=>(0,y.jsxs)(`li`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,y.jsxs)(`span`,{style:{color:`#6366f1`,fontWeight:700,flexShrink:0},children:[`[`,t+1,`]`]}),e.type===`document`&&(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`span`,{style:{background:`#dbeafe`,color:`#2563eb`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`DOC`}),e.source_name||`Unknown`]}),e.type===`literature`&&(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`span`,{style:{background:`#fef3c7`,color:`#92400e`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`LIT`}),e.title||`Ref #${e.ref_id||t+1}`]}),e.type!==`document`&&e.type!==`literature`&&(0,y.jsx)(`span`,{children:e.title||e.source_name||JSON.stringify(e)})]},t))})]})})(),(0,y.jsx)(`style`,{children:`
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
      `})]})};export{b as t};