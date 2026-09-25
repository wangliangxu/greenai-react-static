import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{Fn as r,bi as i,br as a,hi as o,li as s,pi as c,ut as l,zi as u,zn as d,zr as f}from"./ui-vendor-BJACYxZ2.js";import{t as ee}from"./SafeHtml-BW5I8Nph.js";import{i as te,n as p,r as m,t as h}from"./bilingual-BAihdQ31.js";var g=e(t(),1),_=n(),v=({metadata:e,catalog:t,title:n,publishedTime:v,modifiedTime:ne,filePath:y,fileSize:re,lang:b,onLanguageChange:x})=>{let[S,C]=(0,g.useState)(m()),w=b||S,[T,E]=(0,g.useState)({dims:!1,coords:!0,dataVars:!0,attrs:!1}),D=e=>E(t=>({...t,[e]:!t[e]})),O=e=>{x?x(e):C(e),te(e)},k=!!b,A=t||e.catalog||{},j=e||{},M=e=>!!(e==null||e===``||Array.isArray(e)&&e.length===0||typeof e==`object`&&!Array.isArray(e)&&Object.keys(e).length===0),N=(()=>{let e={...j};for(let[t,n]of Object.entries(A))M(n)||(e[t]=n);return e})(),P=N.stats&&typeof N.stats==`object`?N.stats:{},F=typeof P.file_size_bytes==`number`?`${(P.file_size_bytes/1024).toFixed(2)} KB`:null,I=p(n||j.title||((e=>!e||typeof e!=`string`?!1:/\((?:sql|csv|netcdf|hdf|parquet|json|xlsx?|geojson|tiff?|shp):?\)$/i.test(e))(A.title)?void 0:A.title),w)||(typeof A.title==`string`?A.title:null)||(w===`zh`?`无标题数据集`:`Untitled Dataset`),L=p(N.introduction||N.academic_narrative||A.introduction,w)||``,ie=p(N.abstract||A.abstract,w)||``,R=(()=>{let e=N.variables||A.variables;return e&&typeof e==`object`&&!Array.isArray(e)?Object.entries(e).map(([e,t])=>{let n=t,r=n.description;return n.zh||n.en?r=[{lang:`zh`,value:n.zh||``},{lang:`en`,value:n.en||``}]:r||=e,{name:e,type:n.type||n.dtype||void 0,description:r,unit:n.unit||n.units||void 0,dims:Array.isArray(n.dims)?n.dims:void 0}}):Array.isArray(e)&&e.length>0?e:[]})(),z=(()=>{let e=N.stats||A.stats;if(e&&typeof e==`object`&&!Array.isArray(e)){let t=e,n=t.variables;if(n&&typeof n==`object`)return n;if(Object.values(t).some(e=>e&&typeof e==`object`&&`min`in e))return t}return{}})(),B=(()=>{let e=N.stats||A.stats;if(e&&typeof e==`object`&&!Array.isArray(e))return e.global})(),V=N.records||A.records||{},H=N.schema||A.schema||{},U=A.data_sample?.coords||N.data_sample?.coords||{},W=(()=>{let e=H.dims;if(e&&typeof e==`object`&&Object.keys(e).length>0)return e;let t=new Set;for(let e of R)e.dims&&Array.isArray(e.dims)&&e.dims.forEach(e=>t.add(e));if(t.size===0)return{};let n={};for(let e of t){let t=U[e];n[e]=Array.isArray(t)?t.length:`?`}return n})(),G=H.coords||A.coords||N.coords||[],K=A.spatial_extent||N.spatial_extent,q={sourceName:N.source_name||(y?y.split(`/`).pop():``),driver:N.driver||``,container:A.container||N.container||``},J=(()=>{let e=(A.file_bundle||N.file_bundle)?.primary||q.sourceName||``;if(!e)return``;let t=e.split(`.`);return(t.length>1?t.pop():``)?.toUpperCase()||``})(),ae=h(N.tags||A.tags,w),Y=p(N.author||N.creator||A.author,w)||`-`,X=p(N.publisher||A.publisher,w)||`-`,Z=p(N.doi||A.doi,w)||`-`,oe=N.license||N.rights||A.license,se=typeof(N.license||A.license)==`string`?String(N.license||A.license):p(oe,w)||`-`,Q=N.temporal_extent||N.temporal||A.temporal_extent||{},ce=`${p(Q.start,w)||`-`} - ${p(Q.end,w)||`-`}`,$={abstract:w===`zh`?`摘要`:`Abstract`,keywords:w===`zh`?`关键词`:`Keywords`,descriptor:w===`zh`?`引言`:`Introduction`,records:w===`zh`?`数据变量与结构`:`Variables & Structure`,varName:w===`zh`?`变量名称`:`Variable`,varUnit:w===`zh`?`单位`:`Unit`,varType:w===`zh`?`类型`:`Type`,varDesc:w===`zh`?`说明`:`Description`,varMissing:w===`zh`?`缺失`:`Missing`,recordsSummary:w===`zh`?`记录`:`Records`,rows:w===`zh`?`行`:`rows`,columns:w===`zh`?`列`:`cols`,basicInfo:w===`zh`?`数据基本信息`:`Basic Information`,titleZh:w===`zh`?`中文标题`:`Chinese Title`,titleEn:w===`zh`?`英文标题`:`English Title`,filePathLabel:w===`zh`?`文件路径`:`File Path`,sourceNameLabel:w===`zh`?`数据源名称`:`Source Name`,driverLabel:w===`zh`?`文件格式`:`File Format`,containerLabel:w===`zh`?`容器类型`:`Container`,fileSizeLabel:w===`zh`?`文件总大小`:`Total File Size`,recordsCount:w===`zh`?`记录数`:`Record Count`,dimsLabel:w===`zh`?`维度 (Dimensions)`:`Dimensions`,coordsLabel:w===`zh`?`坐标轴 (Coordinates)`:`Coordinates`,spatialLabel:w===`zh`?`空间范围`:`Spatial Extent`,temporalLabel:w===`zh`?`时间范围`:`Temporal Range`,fileList:w===`zh`?`文件列表`:`File List`,dataStats:w===`zh`?`数据统计`:`Data Statistics`,statsVar:w===`zh`?`变量`:`Variable`,statsMin:w===`zh`?`最小值`:`Min`,statsMax:w===`zh`?`最大值`:`Max`,statsMean:w===`zh`?`均值`:`Mean`,statsStd:w===`zh`?`标准差`:`Std`,statsUnique:w===`zh`?`唯一值`:`Unique`,completeness:w===`zh`?`数据完整度`:`Completeness`,noStats:w===`zh`?`统计信息正在生成中。`:`Statistics are being generated.`,prov:w===`zh`?`使用许可`:`License`,source:w===`zh`?`数据来源`:`Data Source`,tempSpan:w===`zh`?`时间跨度`:`Temporal Span`,license:w===`zh`?`使用条款`:`Terms of Use`,cite:w===`zh`?`引用方式`:`How to Cite`,distributed:w===`zh`?`发布于`:`Distributed by`,published:w===`zh`?`出版日期`:`Published`,placeholder:w===`zh`?`正在为此数据集生成详细的科学叙事，以便为学生和研究人员提供更深层次的背景信息。`:`Currently generating a detailed scientific narrative for this dataset to provide deeper context for students and researchers.`,noVars:w===`zh`?`变量定义正在校准中。`:`Variable definitions are currently being calibrated.`,fileBundle:w===`zh`?`文件列表`:`File List`,primaryFile:w===`zh`?`主要数据文件`:`Primary Data File`,auxiliaryFiles:w===`zh`?`附属/元数据文件`:`Auxiliary / Meta Files`,totalSize:w===`zh`?`文件包总大小`:`Total Bundle Size`,usageNote:w===`zh`?`使用说明`:`Usage Instructions`,referencesLabel:w===`zh`?`参考文献`:`References`,xarrayDetails:w===`zh`?`数据集结构 (Xarray Representation)`:`Dataset Structure (Xarray Representation)`,dataVarsLabel:w===`zh`?`数据变量 (Data Variables)`:`Data Variables`};return(0,_.jsxs)(`div`,{className:`data-portrait-paper`,children:[(0,_.jsxs)(`header`,{className:`paper-header`,children:[!k&&(0,_.jsx)(`div`,{className:`paper-journal-top`,style:{justifyContent:`flex-end`},children:(0,_.jsxs)(`div`,{className:`paper-lang-switcher`,children:[(0,_.jsx)(`button`,{className:`lang-btn ${w===`zh`?`active`:``}`,onClick:()=>O(`zh`),children:`中`}),(0,_.jsx)(`div`,{className:`lang-divider`}),(0,_.jsx)(`button`,{className:`lang-btn ${w===`en`?`active`:``}`,onClick:()=>O(`en`),children:`EN`})]})}),(0,_.jsx)(`h1`,{className:`paper-title`,children:I}),(0,_.jsxs)(`div`,{className:`paper-doi-bar`,children:[(0,_.jsxs)(`span`,{className:`date-label`,children:[w===`zh`?`发布日期`:`Published`,`:`]}),(0,_.jsx)(`span`,{className:`date-value`,children:v||`-`}),(0,_.jsx)(`span`,{className:`divider`,children:`|`}),(0,_.jsxs)(`span`,{className:`date-label`,children:[w===`zh`?`更新日期`:`Updated`,`:`]}),(0,_.jsx)(`span`,{className:`date-value`,children:ne||`-`})]}),(0,_.jsxs)(`div`,{className:`paper-abstract`,children:[(0,_.jsx)(`h3`,{children:$.abstract}),(0,_.jsx)(`p`,{children:ie})]}),(0,_.jsxs)(`div`,{className:`paper-keywords`,children:[(0,_.jsxs)(`span`,{className:`keywords-label`,children:[$.keywords,`:`]}),ae.map((e,t)=>(0,_.jsx)(`span`,{className:`keyword-pill`,children:e},t))]})]}),(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(u,{size:20}),(0,_.jsx)(`h2`,{children:$.descriptor})]}),(0,_.jsx)(`div`,{className:`narrative-content`,children:L?(0,_.jsx)(ee,{html:L.replace(/\n/g,`<br/>`),className:`narrative-paragraph`}):(0,_.jsx)(`p`,{className:`narrative-placeholder`,children:$.placeholder})})]}),(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(a,{size:20}),(0,_.jsx)(`h2`,{children:$.basicInfo})]}),(0,_.jsxs)(`div`,{className:`basic-info-grid`,children:[(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.titleZh}),(0,_.jsx)(`span`,{className:`info-value`,children:p(j.title||N.title,`zh`)||`-`})]}),(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.titleEn}),(0,_.jsx)(`span`,{className:`info-value`,children:p(j.title||N.title,`en`)||`-`})]}),(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.fileSizeLabel}),(0,_.jsx)(`span`,{className:`info-value`,children:N.file_bundle?.total_size_bytes?`${(N.file_bundle.total_size_bytes/1024).toFixed(2)} KB`:F||re||`-`})]}),J&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.driverLabel}),(0,_.jsx)(`span`,{className:`info-value`,children:(0,_.jsx)(`span`,{className:`type-badge`,children:J})})]}),Q&&(Q.start||Q.end)&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.temporalLabel}),(0,_.jsx)(`span`,{className:`info-value`,children:ce})]}),(()=>{if(!K||typeof K!=`object`)return null;let e=K,t=e.bbox||e.spatial_bounds,n=e.spatial_coverage,r=N.coords,i=r&&typeof r==`object`?r.crs||r.spatial_ref:null,a=typeof i==`string`?i:i&&typeof i==`object`?String(i.value||``):``;if(!t&&!n&&!a)return null;let o=t&&t.length>=4&&t[0]===t[2]&&t[1]===t[3];return(0,_.jsxs)(_.Fragment,{children:[n&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:w===`zh`?`空间覆盖`:`Spatial Coverage`}),(0,_.jsx)(`span`,{className:`info-value`,children:n})]}),t&&t.length>=4&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:w===`zh`?`空间范围`:`Spatial Extent`}),(0,_.jsx)(`span`,{className:`info-value`,children:o?(0,_.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,_.jsx)(`span`,{className:`type-badge`,style:{background:`#dbeafe`,color:`#2563eb`,fontSize:`0.7rem`},children:w===`zh`?`站点`:`Point`}),(0,_.jsxs)(`code`,{children:[t[1].toFixed(4),`°N, `,t[0].toFixed(4),`°E`]})]}):(0,_.jsxs)(`code`,{children:[t[1].toFixed(2),`°~`,t[3].toFixed(2),`°N, `,t[0].toFixed(2),`°~`,t[2].toFixed(2),`°E`]})})]}),a&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:w===`zh`?`坐标参考`:`CRS`}),(0,_.jsx)(`span`,{className:`info-value`,children:(0,_.jsx)(`code`,{children:a})})]})]})})(),(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.fileList}),(0,_.jsx)(`span`,{className:`info-value`,children:(()=>{if(N.file_bundle)return(0,_.jsxs)(`div`,{className:`file-pill-list`,children:[(0,_.jsx)(`span`,{className:`file-pill primary`,children:N.file_bundle.primary}),N.file_bundle.auxiliary?.map((e,t)=>(0,_.jsx)(`span`,{className:`file-pill aux`,children:e.path.split(`/`).pop()},t))]});let t=e?.metadata?.files||N.files;return t&&Array.isArray(t)&&t.length>0?(0,_.jsx)(`div`,{className:`file-pill-list`,children:t.map((e,t)=>{let n=e.role===`primary`||e.role===`main`,r=e.size_bytes?` (${(e.size_bytes/1024).toFixed(1)} KB)`:``;return(0,_.jsxs)(`span`,{className:`file-pill ${n?`primary`:`aux`}`,title:r,children:[e.name,r&&(0,_.jsx)(`span`,{style:{fontSize:`0.65rem`,opacity:.6,marginLeft:`0.25rem`},children:r})]},t)})}):(0,_.jsx)(`span`,{className:`file-pill`,children:q.sourceName})})()})]}),(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.prov}),(0,_.jsx)(`span`,{className:`info-value`,children:se})]}),(Y!==`-`||X!==`-`||Z!==`-`)&&(0,_.jsxs)(`div`,{className:`info-row`,children:[(0,_.jsx)(`span`,{className:`info-label`,children:$.cite}),(0,_.jsxs)(`span`,{className:`info-value`,style:{fontSize:`0.8rem`},children:[Y,`. (`,new Date().getFullYear(),`). `,(0,_.jsx)(`i`,{children:I}),`. `,$.distributed,` `,X,`. DOI: `,Z]})]})]})]}),(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(f,{size:20}),(0,_.jsx)(`h2`,{children:$.records}),!!(V.rows||V.columns)&&(0,_.jsxs)(`span`,{className:`records-badge`,children:[V.rows?.toLocaleString()||`?`,` `,$.rows,` × `,V.columns||`?`,` `,$.columns]})]}),(0,_.jsxs)(`div`,{className:`variables-table-container`,children:[H&&typeof H==`object`&&`error`in H&&typeof H.error==`object`&&H.error!==null&&(()=>{let e=H.error;return(0,_.jsxs)(`div`,{style:{padding:`24px`,background:`var(--cg-bg)`,border:`2px solid #ef4444`,borderRadius:`12px`,display:`flex`,gap:`16px`,alignItems:`flex-start`,marginTop:`16px`,boxShadow:`0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)`},children:[(0,_.jsx)(`div`,{style:{background:`#fee2e2`,padding:`12px`,borderRadius:`50%`,color:`#dc2626`},children:(0,_.jsx)(s,{size:32})}),(0,_.jsxs)(`div`,{style:{flex:1},children:[(0,_.jsxs)(`h3`,{style:{margin:`0 0 8px 0`,color:`#991b1b`,fontSize:`1.25rem`,fontWeight:700,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,_.jsx)(`span`,{style:{background:`#dc2626`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`,fontWeight:800,textTransform:`uppercase`},children:`Causality Blocker`}),`物理结构提取失败`]}),(0,_.jsxs)(`div`,{style:{background:`var(--cg-surface)`,padding:`16px`,borderRadius:`8px`,border:`1px solid #fecaca`,marginBottom:`16px`},children:[(0,_.jsx)(`p`,{style:{margin:`0 0 12px 0`,fontSize:`0.9375rem`,color:`#7f1d1d`,fontWeight:500},children:e.message||e.reason||`底层读取物理引擎在尝试解析此数据源时遭遇了不可恢复的致命错误。`}),e.traceback&&(0,_.jsxs)(`div`,{style:{background:`var(--cg-text)`,borderRadius:`6px`,overflow:`hidden`},children:[(0,_.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,padding:`6px 12px`,background:`#0f172a`,borderBottom:`1px solid var(--cg-text)`,fontWeight:600,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,_.jsx)(`span`,{children:`TRACEBACK`}),(0,_.jsx)(`span`,{style:{fontSize:`0.65rem`,background:`#ef4444`,color:`white`,padding:`2px 6px`,borderRadius:`4px`},children:`ERROR`})]}),(0,_.jsx)(`pre`,{style:{margin:0,padding:`12px`,fontSize:`0.8rem`,color:`var(--cg-bg)`,overflowX:`auto`,fontFamily:`monospace`,lineHeight:1.5},children:e.traceback})]})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,fontSize:`0.8125rem`,color:`#b91c1c`},children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,_.jsx)(l,{size:14}),` 语义评分已被强制归零`]}),(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,_.jsx)(d,{size:14}),` 请核查源文件或驱动参数`]})]})]})]})})(),(()=>{let e=new Set(Array.isArray(G)?G:Object.keys(G||{})),t=R.filter(t=>e.has(t.name)),n=e.size>0?R.filter(t=>!e.has(t.name)):R,r=N.data_sample,i=e=>{if(!e||e.length===0)return`...`;let t=e=>e==null?`NaN`:String(e);if(e.length<=6)return e.map(t).join(` `);let n=e.slice(0,3).map(t),r=e.slice(-2).map(t);return[...n,`...`,...r].join(` `)},a=(e,t,n)=>{let a=z[e.name],o=a?.null_rate,s=r?.[n]?.[e.name],c=e.type||(a?.dtype==null?`float64`:String(a.dtype));return(0,_.jsxs)(`li`,{className:`xr-var-item`,children:[(0,_.jsx)(`span`,{className:`xr-var-name`,children:e.name}),(0,_.jsx)(`span`,{className:`xr-var-dims`,children:e.dims&&e.dims.length>0?`(${e.dims.join(`, `)})`:``}),(0,_.jsx)(`span`,{className:`xr-var-dtype`,children:c}),(0,_.jsx)(`span`,{className:e.unit?`xr-var-unit`:`xr-var-unit-empty`,children:e.unit||``}),(0,_.jsx)(`span`,{className:`xr-var-preview`,children:s&&Array.isArray(s)?i(s):p(e.description,w)||`...`}),(0,_.jsx)(`span`,{className:o!==void 0&&o>0?`xr-var-null ${o>.1?`high`:`low`}`:`xr-var-null-empty`,children:o!==void 0&&o>0?`${(o*100).toFixed(1)}%`:``})]},t)};return(0,_.jsxs)(`div`,{className:`xr-wrap`,children:[(0,_.jsx)(`div`,{className:`xr-header`,children:q.container===`image`&&W&&typeof W==`object`?(0,_.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,Object.entries(W).map(([e,t])=>`${e}: ${t}`).join(` × `),`)`]}):!!(V.rows||V.columns)&&(0,_.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,V.rows?.toLocaleString()||`?`,` × `,V.columns||`?`,`)`]})}),W&&Object.keys(W).length>0&&(0,_.jsx)(`div`,{className:`xr-section`,children:(0,_.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>D(`dims`),style:{cursor:`pointer`},children:[T.dims?(0,_.jsx)(o,{size:14,className:`xr-icon-toggle active`}):(0,_.jsx)(c,{size:14,className:`xr-icon-toggle`}),(0,_.jsxs)(`span`,{className:`xr-section-name`,children:[$.dimsLabel,`:`]}),(0,_.jsxs)(`div`,{className:`xr-dims-inline`,children:[`(`,Array.isArray(W)?W.map((e,t)=>(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{className:`xr-dim-name`,children:e}),t<W.length-1?`, `:``]},e)):Object.entries(W).map(([e,t],n,r)=>(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{className:`xr-dim-name`,children:e}),`: `,String(t),n<r.length-1?`, `:``]},e)),`)`]})]})}),e.size>0&&(0,_.jsxs)(`div`,{className:`xr-section`,children:[(0,_.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>D(`coords`),style:{cursor:`pointer`},children:[T.coords?(0,_.jsx)(o,{size:14,className:`xr-icon-toggle active`}):(0,_.jsx)(c,{size:14,className:`xr-icon-toggle`}),(0,_.jsxs)(`span`,{className:`xr-section-name`,children:[$.coordsLabel,`:`]}),(0,_.jsx)(`span`,{className:`xr-dim-count`,children:e.size})]}),T.coords&&(0,_.jsx)(`div`,{className:`xr-section-details`,children:(0,_.jsx)(`ul`,{className:`xr-var-list`,children:t.length>0?t.map((e,t)=>a(e,t,`coords`)):Array.from(e).map((e,t)=>{let n=r?.coords?.[e],a=typeof G==`object`&&!Array.isArray(G)?G[e]:void 0,o=a?.type||`float64`,s=a?.dims,c=s&&s.length>0?`(${s.join(`, `)})`:s&&s.length===0?`()`:`(${e})`;return(0,_.jsxs)(`li`,{className:`xr-var-item`,children:[(0,_.jsx)(`span`,{className:`xr-var-name`,children:e}),(0,_.jsx)(`span`,{className:`xr-var-dims`,children:c}),(0,_.jsx)(`span`,{className:`xr-var-dtype`,children:o}),(0,_.jsx)(`span`,{className:`xr-var-unit-empty`}),(0,_.jsx)(`span`,{className:`xr-var-preview`,children:n&&Array.isArray(n)?i(n):`...`})]},t)})})})]}),(0,_.jsxs)(`div`,{className:`xr-section`,children:[(0,_.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>D(`dataVars`),style:{cursor:`pointer`},children:[T.dataVars?(0,_.jsx)(o,{size:14,className:`xr-icon-toggle active`}):(0,_.jsx)(c,{size:14,className:`xr-icon-toggle`}),(0,_.jsxs)(`span`,{className:`xr-section-name`,children:[$.dataVarsLabel,`:`]}),(0,_.jsx)(`span`,{className:`xr-dim-count`,children:n.length})]}),T.dataVars&&(0,_.jsx)(`div`,{className:`xr-section-details`,children:(0,_.jsx)(`ul`,{className:`xr-var-list`,children:n.length>0?n.map((e,t)=>a(e,t,`data_vars`)):(0,_.jsx)(`li`,{className:`xr-var-item`,children:(0,_.jsx)(`span`,{className:`xr-var-preview`,children:$.noVars})})})})]}),(()=>{let e=N.attrs;if(!e||typeof e!=`object`||Object.keys(e).length===0)return null;let t=Object.entries(e);return(0,_.jsxs)(`div`,{className:`xr-section`,children:[(0,_.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>D(`attrs`),style:{cursor:`pointer`},children:[T.attrs?(0,_.jsx)(o,{size:14,className:`xr-icon-toggle active`}):(0,_.jsx)(c,{size:14,className:`xr-icon-toggle`}),(0,_.jsx)(`span`,{className:`xr-section-name`,children:`Attributes:`}),(0,_.jsxs)(`span`,{className:`xr-dim-count`,children:[`(`,t.length,`)`]})]}),T.attrs&&(0,_.jsx)(`div`,{className:`xr-section-details`,children:(0,_.jsx)(`dl`,{className:`xr-attrs`,children:t.map(([e,t])=>(0,_.jsxs)(`div`,{className:`xr-attr-item`,children:[(0,_.jsx)(`dt`,{children:e}),(0,_.jsx)(`dd`,{children:typeof t==`object`?JSON.stringify(t):String(t)})]},e))})})]})})()]})})()]})]}),Object.values(z).some(e=>e&&typeof e==`object`&&!Array.isArray(e))&&(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(i,{size:20}),(0,_.jsx)(`h2`,{children:$.dataStats})]}),(()=>{let e=B?.completeness,t=B?.profiled_at,n=Object.keys(z).length;if(e===void 0&&!t&&n===0)return null;let r=e===void 0?null:Math.round(e*100);return(0,_.jsxs)(`div`,{className:`stats-global-card`,children:[r!==null&&(0,_.jsxs)(`div`,{className:`stats-global-item`,children:[(0,_.jsx)(`span`,{className:`stats-global-label`,children:$.completeness}),(0,_.jsxs)(`div`,{className:`stats-global-value-row`,children:[(0,_.jsxs)(`span`,{className:`stats-global-pct ${r>=90?`high`:r>=50?`mid`:`low`}`,children:[r,`%`]}),(0,_.jsx)(`div`,{className:`completeness-track-mini`,children:(0,_.jsx)(`div`,{className:`completeness-fill ${r>=90?`high`:r>=50?`mid`:`low`}`,style:{width:`${r}%`}})})]})]}),(0,_.jsxs)(`div`,{className:`stats-global-item`,children:[(0,_.jsx)(`span`,{className:`stats-global-label`,children:w===`zh`?`统计变量数`:`Variables Analyzed`}),(0,_.jsx)(`span`,{className:`stats-global-value`,children:n})]}),t&&(0,_.jsxs)(`div`,{className:`stats-global-item`,children:[(0,_.jsx)(`span`,{className:`stats-global-label`,children:w===`zh`?`分析时间`:`Profiled At`}),(0,_.jsx)(`span`,{className:`stats-global-value`,style:{fontSize:`0.8rem`},children:new Date(t).toLocaleDateString()})]})]})})(),(0,_.jsx)(`div`,{className:`variables-table-container`,children:(0,_.jsxs)(`table`,{className:`stats-paper-table`,children:[(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{children:$.statsVar}),(0,_.jsx)(`th`,{className:`num-col`,children:w===`zh`?`类型`:`Type`}),(0,_.jsx)(`th`,{className:`num-col`,children:$.statsMin}),(0,_.jsx)(`th`,{className:`num-col`,children:$.statsMax}),(0,_.jsx)(`th`,{className:`num-col`,children:$.statsMean}),(0,_.jsx)(`th`,{className:`num-col`,children:$.statsStd}),(0,_.jsx)(`th`,{className:`num-col`,children:w===`zh`?`中位数`:`Median`}),(0,_.jsx)(`th`,{className:`num-col`,children:w===`zh`?`缺失率`:`Null%`}),(0,_.jsx)(`th`,{className:`num-col`,children:$.statsUnique})]})}),(0,_.jsx)(`tbody`,{children:Object.entries(z).map(([e,t])=>{if(!t||typeof t!=`object`)return null;let n=e=>e==null?(0,_.jsx)(`span`,{className:`empty-cell`,children:`—`}):typeof e==`number`?Number.isInteger(e)?e.toLocaleString():e.toFixed(4):String(e),r=t.null_rate,i=t.dtype;return(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{className:`var-name`,children:(0,_.jsx)(`code`,{children:e})}),(0,_.jsx)(`td`,{className:`num-cell`,style:{fontSize:`0.7rem`,color:`#6366f1`},children:i||(0,_.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,_.jsx)(`td`,{className:`num-cell`,children:n(t.min)}),(0,_.jsx)(`td`,{className:`num-cell`,children:n(t.max)}),(0,_.jsx)(`td`,{className:`num-cell`,children:n(t.mean)}),(0,_.jsx)(`td`,{className:`num-cell`,children:n(t.std)}),(0,_.jsx)(`td`,{className:`num-cell`,children:n(t.p50)}),(0,_.jsx)(`td`,{className:`num-cell`,children:r!==void 0&&r>0?(0,_.jsxs)(`span`,{className:`null-rate-badge ${r>.5?`critical`:r>.1?`warn`:`ok`}`,children:[(r*100).toFixed(1),`%`]}):r===0?(0,_.jsx)(`span`,{className:`null-rate-badge ok`,children:`0%`}):(0,_.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,_.jsx)(`td`,{className:`num-cell`,children:t.unique_count?.toLocaleString()??(0,_.jsx)(`span`,{className:`empty-cell`,children:`—`})})]},e)})})]})})]}),(()=>{let e=N.usage_note,t=p(e,w);return t?(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(d,{size:20}),(0,_.jsx)(`h2`,{id:`usage-note-title`,children:$.usageNote})]}),(0,_.jsx)(`div`,{className:`usage-note-container`,children:(0,_.jsx)(`p`,{className:`usage-note-content`,children:t})})]}):null})(),N.file_bundle&&(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(r,{size:20}),(0,_.jsx)(`h2`,{children:$.fileBundle})]}),(0,_.jsxs)(`div`,{className:`file-bundle-container`,children:[(0,_.jsxs)(`div`,{className:`bundle-primary`,children:[(0,_.jsx)(`span`,{className:`bundle-label primary`,children:$.primaryFile}),(0,_.jsxs)(`span`,{className:`bundle-filename`,children:[(0,_.jsx)(a,{size:16}),N.file_bundle.primary]})]}),N.file_bundle.auxiliary&&N.file_bundle.auxiliary.length>0&&(0,_.jsxs)(`div`,{className:`bundle-auxiliary`,children:[(0,_.jsxs)(`div`,{className:`bundle-aux-header`,children:[$.auxiliaryFiles,` (`,N.file_bundle.auxiliary.length,`)`]}),(0,_.jsx)(`div`,{className:`bundle-aux-list`,children:N.file_bundle.auxiliary.map((e,t)=>(0,_.jsxs)(`div`,{className:`bundle-aux-item`,children:[(0,_.jsxs)(`div`,{className:`aux-info`,children:[(0,_.jsx)(`span`,{className:`aux-path`,children:e.path}),(0,_.jsx)(`span`,{className:`aux-type`,children:e.type?.replace(`shapefile_`,``).replace(`raster_`,``)})]}),(0,_.jsx)(`span`,{className:`aux-size`,children:e.size_bytes?`${(e.size_bytes/1024).toFixed(1)} KB`:`-`})]},t))})]}),N.file_bundle.total_size_bytes&&(0,_.jsxs)(`div`,{className:`bundle-total`,children:[(0,_.jsx)(`span`,{children:$.totalSize}),(0,_.jsxs)(`span`,{className:`total-value`,children:[(N.file_bundle.total_size_bytes/1024).toFixed(1),` KB`]})]})]})]}),(()=>{let e=N.references;return!Array.isArray(e)||e.length===0?null:(0,_.jsxs)(`section`,{className:`paper-section`,children:[(0,_.jsxs)(`div`,{className:`section-heading`,children:[(0,_.jsx)(u,{size:20}),(0,_.jsx)(`h2`,{children:$.referencesLabel})]}),(0,_.jsx)(`ul`,{style:{margin:0,paddingLeft:`0.5rem`,fontSize:`0.875rem`,color:`var(--cg-text)`,lineHeight:1.8,listStyle:`none`},children:e.map((e,t)=>(0,_.jsxs)(`li`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,_.jsxs)(`span`,{style:{color:`#6366f1`,fontWeight:700,flexShrink:0},children:[`[`,t+1,`]`]}),e.type===`document`&&(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{style:{background:`#dbeafe`,color:`#2563eb`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`DOC`}),e.source_name||`Unknown`]}),e.type===`literature`&&(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{style:{background:`#fef3c7`,color:`#92400e`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`LIT`}),e.title||`Ref #${e.ref_id||t+1}`]}),e.type!==`document`&&e.type!==`literature`&&(0,_.jsx)(`span`,{children:e.title||e.source_name||JSON.stringify(e)})]},t))})]})})(),(0,_.jsx)(`style`,{children:`
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
      `})]})};export{v as t};