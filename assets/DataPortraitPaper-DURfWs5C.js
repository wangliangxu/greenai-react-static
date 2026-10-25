import{s as e}from"./rolldown-runtime-Bjp52BOI.js";import{Yt as t}from"./chart-vendor-CaAGlfls.js";import{g as n}from"./editor-vendor-DNpPfJmi.js";import{$i as r,Bn as i,Ci as a,Di as o,Dr as s,Fi as c,Gn as l,Yr as u,ct as d,ki as f}from"./ui-vendor-DMKiJq3S.js";import{t as ee}from"./SafeHtml-DDLEhnGl.js";import{i as p,n as m,r as h,t as g}from"./bilingual-BAihdQ31.js";var _=e(t(),1),v=n(),y=({metadata:e,catalog:t,title:n,publishedTime:y,modifiedTime:te,filePath:b,fileSize:ne,lang:x,onLanguageChange:S})=>{let[C,w]=(0,_.useState)(h()),T=x||C,[E,D]=(0,_.useState)({dims:!1,coords:!0,dataVars:!0,attrs:!1}),O=e=>D(t=>({...t,[e]:!t[e]})),k=e=>{S?S(e):w(e),p(e)},A=!!x,j=t||e.catalog||{},M=e||{},N=e=>!!(e==null||e===``||Array.isArray(e)&&e.length===0||typeof e==`object`&&!Array.isArray(e)&&Object.keys(e).length===0),P=(()=>{let e={...M};for(let[t,n]of Object.entries(j))N(n)||(e[t]=n);return e})(),F=P.stats&&typeof P.stats==`object`?P.stats:{},re=typeof F.file_size_bytes==`number`?`${(F.file_size_bytes/1024).toFixed(2)} KB`:null,I=m(n||M.title||((e=>!e||typeof e!=`string`?!1:/\((?:sql|csv|netcdf|hdf|parquet|json|xlsx?|geojson|tiff?|shp):?\)$/i.test(e))(j.title)?void 0:j.title),T)||(typeof j.title==`string`?j.title:null)||(T===`zh`?`无标题数据集`:`Untitled Dataset`),L=m(P.introduction||P.academic_narrative||j.introduction,T)||``,ie=m(P.abstract||j.abstract,T)||``,R=(()=>{let e=P.variables||j.variables;return e&&typeof e==`object`&&!Array.isArray(e)?Object.entries(e).map(([e,t])=>{let n=t,r=n.description;return n.zh||n.en?r=[{lang:`zh`,value:n.zh||``},{lang:`en`,value:n.en||``}]:r||=e,{name:e,type:n.type||n.dtype||void 0,description:r,unit:n.unit||n.units||void 0,dims:Array.isArray(n.dims)?n.dims:void 0}}):Array.isArray(e)&&e.length>0?e:[]})(),z=(()=>{let e=P.stats||j.stats;if(e&&typeof e==`object`&&!Array.isArray(e)){let t=e,n=t.variables;if(n&&typeof n==`object`)return n;if(Object.values(t).some(e=>e&&typeof e==`object`&&`min`in e))return t}return{}})(),B=(()=>{let e=P.stats||j.stats;if(e&&typeof e==`object`&&!Array.isArray(e))return e.global})(),V=P.records||j.records||{},H=P.schema||j.schema||{},U=j.data_sample?.coords||P.data_sample?.coords||{},W=(()=>{let e=H.dims;if(e&&typeof e==`object`&&Object.keys(e).length>0)return e;let t=new Set;for(let e of R)e.dims&&Array.isArray(e.dims)&&e.dims.forEach(e=>t.add(e));if(t.size===0)return{};let n={};for(let e of t){let t=U[e];n[e]=Array.isArray(t)?t.length:`?`}return n})(),G=H.coords||j.coords||P.coords||[],K=j.spatial_extent||P.spatial_extent,q={sourceName:P.source_name||(b?b.split(`/`).pop():``),driver:P.driver||``,container:j.container||P.container||``},J=(()=>{let e=(j.file_bundle||P.file_bundle)?.primary||q.sourceName||``;if(!e)return``;let t=e.split(`.`);return(t.length>1?t.pop():``)?.toUpperCase()||``})(),ae=g(P.tags||j.tags,T),Y=m(P.author||P.creator||j.author,T)||`-`,X=m(P.publisher||j.publisher,T)||`-`,Z=m(P.doi||j.doi,T)||`-`,oe=P.license||P.rights||j.license,se=typeof(P.license||j.license)==`string`?String(P.license||j.license):m(oe,T)||`-`,Q=P.temporal_extent||P.temporal||j.temporal_extent||{},ce=`${m(Q.start,T)||`-`} - ${m(Q.end,T)||`-`}`,$={abstract:T===`zh`?`摘要`:`Abstract`,keywords:T===`zh`?`关键词`:`Keywords`,descriptor:T===`zh`?`引言`:`Introduction`,records:T===`zh`?`数据变量与结构`:`Variables & Structure`,varName:T===`zh`?`变量名称`:`Variable`,varUnit:T===`zh`?`单位`:`Unit`,varType:T===`zh`?`类型`:`Type`,varDesc:T===`zh`?`说明`:`Description`,varMissing:T===`zh`?`缺失`:`Missing`,recordsSummary:T===`zh`?`记录`:`Records`,rows:T===`zh`?`行`:`rows`,columns:T===`zh`?`列`:`cols`,basicInfo:T===`zh`?`数据基本信息`:`Basic Information`,titleZh:T===`zh`?`中文标题`:`Chinese Title`,titleEn:T===`zh`?`英文标题`:`English Title`,filePathLabel:T===`zh`?`文件路径`:`File Path`,sourceNameLabel:T===`zh`?`数据源名称`:`Source Name`,driverLabel:T===`zh`?`文件格式`:`File Format`,containerLabel:T===`zh`?`容器类型`:`Container`,fileSizeLabel:T===`zh`?`文件总大小`:`Total File Size`,recordsCount:T===`zh`?`记录数`:`Record Count`,dimsLabel:T===`zh`?`维度 (Dimensions)`:`Dimensions`,coordsLabel:T===`zh`?`坐标轴 (Coordinates)`:`Coordinates`,spatialLabel:T===`zh`?`空间范围`:`Spatial Extent`,temporalLabel:T===`zh`?`时间范围`:`Temporal Range`,fileList:T===`zh`?`文件列表`:`File List`,dataStats:T===`zh`?`数据统计`:`Data Statistics`,statsVar:T===`zh`?`变量`:`Variable`,statsMin:T===`zh`?`最小值`:`Min`,statsMax:T===`zh`?`最大值`:`Max`,statsMean:T===`zh`?`均值`:`Mean`,statsStd:T===`zh`?`标准差`:`Std`,statsUnique:T===`zh`?`唯一值`:`Unique`,completeness:T===`zh`?`数据完整度`:`Completeness`,noStats:T===`zh`?`统计信息正在生成中。`:`Statistics are being generated.`,prov:T===`zh`?`使用许可`:`License`,source:T===`zh`?`数据来源`:`Data Source`,tempSpan:T===`zh`?`时间跨度`:`Temporal Span`,license:T===`zh`?`使用条款`:`Terms of Use`,cite:T===`zh`?`引用方式`:`How to Cite`,distributed:T===`zh`?`发布于`:`Distributed by`,published:T===`zh`?`出版日期`:`Published`,placeholder:T===`zh`?`正在为此数据集生成详细的科学叙事，以便为学生和研究人员提供更深层次的背景信息。`:`Currently generating a detailed scientific narrative for this dataset to provide deeper context for students and researchers.`,noVars:T===`zh`?`变量定义正在校准中。`:`Variable definitions are currently being calibrated.`,fileBundle:T===`zh`?`文件列表`:`File List`,primaryFile:T===`zh`?`主要数据文件`:`Primary Data File`,auxiliaryFiles:T===`zh`?`附属/元数据文件`:`Auxiliary / Meta Files`,totalSize:T===`zh`?`文件包总大小`:`Total Bundle Size`,usageNote:T===`zh`?`使用说明`:`Usage Instructions`,referencesLabel:T===`zh`?`参考文献`:`References`,xarrayDetails:T===`zh`?`数据集结构 (Xarray Representation)`:`Dataset Structure (Xarray Representation)`,dataVarsLabel:T===`zh`?`数据变量 (Data Variables)`:`Data Variables`};return(0,v.jsxs)(`div`,{className:`data-portrait-paper`,children:[(0,v.jsxs)(`header`,{className:`paper-header`,children:[!A&&(0,v.jsx)(`div`,{className:`paper-journal-top`,style:{justifyContent:`flex-end`},children:(0,v.jsxs)(`div`,{className:`paper-lang-switcher`,children:[(0,v.jsx)(`button`,{className:`lang-btn ${T===`zh`?`active`:``}`,onClick:()=>k(`zh`),children:`中`}),(0,v.jsx)(`div`,{className:`lang-divider`}),(0,v.jsx)(`button`,{className:`lang-btn ${T===`en`?`active`:``}`,onClick:()=>k(`en`),children:`EN`})]})}),(0,v.jsx)(`h1`,{className:`paper-title`,children:I}),(0,v.jsxs)(`div`,{className:`paper-doi-bar`,children:[(0,v.jsxs)(`span`,{className:`date-label`,children:[T===`zh`?`发布日期`:`Published`,`:`]}),(0,v.jsx)(`span`,{className:`date-value`,children:y||`-`}),(0,v.jsx)(`span`,{className:`divider`,children:`|`}),(0,v.jsxs)(`span`,{className:`date-label`,children:[T===`zh`?`更新日期`:`Updated`,`:`]}),(0,v.jsx)(`span`,{className:`date-value`,children:te||`-`})]}),(0,v.jsxs)(`div`,{className:`paper-abstract`,children:[(0,v.jsx)(`h3`,{children:$.abstract}),(0,v.jsx)(`p`,{children:ie})]}),(0,v.jsxs)(`div`,{className:`paper-keywords`,children:[(0,v.jsxs)(`span`,{className:`keywords-label`,children:[$.keywords,`:`]}),ae.map((e,t)=>(0,v.jsx)(`span`,{className:`keyword-pill`,children:e},t))]})]}),(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(r,{size:20}),(0,v.jsx)(`h2`,{children:$.descriptor})]}),(0,v.jsx)(`div`,{className:`narrative-content`,children:L?(0,v.jsx)(ee,{html:L.replace(/\n/g,`<br/>`),className:`narrative-paragraph`}):(0,v.jsx)(`p`,{className:`narrative-placeholder`,children:$.placeholder})})]}),(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(s,{size:20}),(0,v.jsx)(`h2`,{children:$.basicInfo})]}),(0,v.jsxs)(`div`,{className:`basic-info-grid`,children:[(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.titleZh}),(0,v.jsx)(`span`,{className:`info-value`,children:m(M.title||P.title,`zh`)||`-`})]}),(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.titleEn}),(0,v.jsx)(`span`,{className:`info-value`,children:m(M.title||P.title,`en`)||`-`})]}),(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.fileSizeLabel}),(0,v.jsx)(`span`,{className:`info-value`,children:P.file_bundle?.total_size_bytes?`${(P.file_bundle.total_size_bytes/1024).toFixed(2)} KB`:re||ne||`-`})]}),J&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.driverLabel}),(0,v.jsx)(`span`,{className:`info-value`,children:(0,v.jsx)(`span`,{className:`type-badge`,children:J})})]}),Q&&(Q.start||Q.end)&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.temporalLabel}),(0,v.jsx)(`span`,{className:`info-value`,children:ce})]}),(()=>{if(!K||typeof K!=`object`)return null;let e=K,t=e.bbox||e.spatial_bounds,n=e.spatial_coverage,r=P.coords,i=r&&typeof r==`object`?r.crs||r.spatial_ref:null,a=typeof i==`string`?i:i&&typeof i==`object`?String(i.value||``):``;if(!t&&!n&&!a)return null;let o=t&&t.length>=4&&t[0]===t[2]&&t[1]===t[3];return(0,v.jsxs)(v.Fragment,{children:[n&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:T===`zh`?`空间覆盖`:`Spatial Coverage`}),(0,v.jsx)(`span`,{className:`info-value`,children:n})]}),t&&t.length>=4&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:T===`zh`?`空间范围`:`Spatial Extent`}),(0,v.jsx)(`span`,{className:`info-value`,children:o?(0,v.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,v.jsx)(`span`,{className:`type-badge`,style:{background:`#dbeafe`,color:`#2563eb`,fontSize:`0.7rem`},children:T===`zh`?`站点`:`Point`}),(0,v.jsxs)(`code`,{children:[t[1].toFixed(4),`°N, `,t[0].toFixed(4),`°E`]})]}):(0,v.jsxs)(`code`,{children:[t[1].toFixed(2),`°~`,t[3].toFixed(2),`°N, `,t[0].toFixed(2),`°~`,t[2].toFixed(2),`°E`]})})]}),a&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:T===`zh`?`坐标参考`:`CRS`}),(0,v.jsx)(`span`,{className:`info-value`,children:(0,v.jsx)(`code`,{children:a})})]})]})})(),(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.fileList}),(0,v.jsx)(`span`,{className:`info-value`,children:(()=>{if(P.file_bundle)return(0,v.jsxs)(`div`,{className:`file-pill-list`,children:[(0,v.jsx)(`span`,{className:`file-pill primary`,children:P.file_bundle.primary}),P.file_bundle.auxiliary?.map((e,t)=>(0,v.jsx)(`span`,{className:`file-pill aux`,children:e.path.split(`/`).pop()},t))]});let t=e?.metadata?.files||P.files;return t&&Array.isArray(t)&&t.length>0?(0,v.jsx)(`div`,{className:`file-pill-list`,children:t.map((e,t)=>{let n=e.role===`primary`||e.role===`main`,r=e.size_bytes?` (${(e.size_bytes/1024).toFixed(1)} KB)`:``;return(0,v.jsxs)(`span`,{className:`file-pill ${n?`primary`:`aux`}`,title:r,children:[e.name,r&&(0,v.jsx)(`span`,{style:{fontSize:`0.65rem`,opacity:.6,marginLeft:`0.25rem`},children:r})]},t)})}):(0,v.jsx)(`span`,{className:`file-pill`,children:q.sourceName})})()})]}),(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.prov}),(0,v.jsx)(`span`,{className:`info-value`,children:se})]}),(Y!==`-`||X!==`-`||Z!==`-`)&&(0,v.jsxs)(`div`,{className:`info-row`,children:[(0,v.jsx)(`span`,{className:`info-label`,children:$.cite}),(0,v.jsxs)(`span`,{className:`info-value`,style:{fontSize:`0.8rem`},children:[Y,`. (`,new Date().getFullYear(),`). `,(0,v.jsx)(`i`,{children:I}),`. `,$.distributed,` `,X,`. DOI: `,Z]})]})]})]}),(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(u,{size:20}),(0,v.jsx)(`h2`,{children:$.records}),!!(V.rows||V.columns)&&(0,v.jsxs)(`span`,{className:`records-badge`,children:[V.rows?.toLocaleString()||`?`,` `,$.rows,` × `,V.columns||`?`,` `,$.columns]})]}),(0,v.jsxs)(`div`,{className:`variables-table-container`,children:[H&&typeof H==`object`&&`error`in H&&typeof H.error==`object`&&H.error!==null&&(()=>{let e=H.error;return(0,v.jsxs)(`div`,{style:{padding:`24px`,background:`var(--cg-bg)`,border:`2px solid #ef4444`,borderRadius:`12px`,display:`flex`,gap:`16px`,alignItems:`flex-start`,marginTop:`16px`,boxShadow:`0 4px 6px -1px rgba(239, 68, 68, 0.1), 0 2px 4px -1px rgba(239, 68, 68, 0.06)`},children:[(0,v.jsx)(`div`,{style:{background:`#fee2e2`,padding:`12px`,borderRadius:`50%`,color:`#dc2626`},children:(0,v.jsx)(a,{size:32})}),(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsxs)(`h3`,{style:{margin:`0 0 8px 0`,color:`#991b1b`,fontSize:`1.25rem`,fontWeight:700,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,v.jsx)(`span`,{style:{background:`#dc2626`,color:`white`,padding:`2px 8px`,borderRadius:`4px`,fontSize:`0.75rem`,fontWeight:800,textTransform:`uppercase`},children:`Causality Blocker`}),`物理结构提取失败`]}),(0,v.jsxs)(`div`,{style:{background:`var(--cg-surface)`,padding:`16px`,borderRadius:`8px`,border:`1px solid #fecaca`,marginBottom:`16px`},children:[(0,v.jsx)(`p`,{style:{margin:`0 0 12px 0`,fontSize:`0.9375rem`,color:`#7f1d1d`,fontWeight:500},children:e.message||e.reason||`底层读取物理引擎在尝试解析此数据源时遭遇了不可恢复的致命错误。`}),e.traceback&&(0,v.jsxs)(`div`,{style:{background:`var(--cg-text)`,borderRadius:`6px`,overflow:`hidden`},children:[(0,v.jsxs)(`div`,{style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,padding:`6px 12px`,background:`#0f172a`,borderBottom:`1px solid var(--cg-text)`,fontWeight:600,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,v.jsx)(`span`,{children:`TRACEBACK`}),(0,v.jsx)(`span`,{style:{fontSize:`0.65rem`,background:`#ef4444`,color:`white`,padding:`2px 6px`,borderRadius:`4px`},children:`ERROR`})]}),(0,v.jsx)(`pre`,{style:{margin:0,padding:`12px`,fontSize:`0.8rem`,color:`var(--cg-bg)`,overflowX:`auto`,fontFamily:`monospace`,lineHeight:1.5},children:e.traceback})]})]}),(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,fontSize:`0.8125rem`,color:`#b91c1c`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,v.jsx)(d,{size:14}),` 语义评分已被强制归零`]}),(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,background:`#fee2e2`,padding:`6px 12px`,borderRadius:`6px`},children:[(0,v.jsx)(l,{size:14}),` 请核查源文件或驱动参数`]})]})]})]})})(),(()=>{let e=new Set(Array.isArray(G)?G:Object.keys(G||{})),t=R.filter(t=>e.has(t.name)),n=e.size>0?R.filter(t=>!e.has(t.name)):R,r=P.data_sample,i=e=>{if(!e||e.length===0)return`...`;let t=e=>e==null?`NaN`:String(e);if(e.length<=6)return e.map(t).join(` `);let n=e.slice(0,3).map(t),r=e.slice(-2).map(t);return[...n,`...`,...r].join(` `)},a=(e,t,n)=>{let a=z[e.name],o=a?.null_rate,s=r?.[n]?.[e.name],c=e.type||(a?.dtype==null?`float64`:String(a.dtype));return(0,v.jsxs)(`li`,{className:`xr-var-item`,children:[(0,v.jsx)(`span`,{className:`xr-var-name`,children:e.name}),(0,v.jsx)(`span`,{className:`xr-var-dims`,children:e.dims&&e.dims.length>0?`(${e.dims.join(`, `)})`:``}),(0,v.jsx)(`span`,{className:`xr-var-dtype`,children:c}),(0,v.jsx)(`span`,{className:e.unit?`xr-var-unit`:`xr-var-unit-empty`,children:e.unit||``}),(0,v.jsx)(`span`,{className:`xr-var-preview`,children:s&&Array.isArray(s)?i(s):m(e.description,T)||`...`}),(0,v.jsx)(`span`,{className:o!==void 0&&o>0?`xr-var-null ${o>.1?`high`:`low`}`:`xr-var-null-empty`,children:o!==void 0&&o>0?`${(o*100).toFixed(1)}%`:``})]},t)};return(0,v.jsxs)(`div`,{className:`xr-wrap`,children:[(0,v.jsx)(`div`,{className:`xr-header`,children:q.container===`image`&&W&&typeof W==`object`?(0,v.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,Object.entries(W).map(([e,t])=>`${e}: ${t}`).join(` × `),`)`]}):!!(V.rows||V.columns)&&(0,v.jsxs)(`span`,{className:`xr-obj-dims`,children:[`(`,V.rows?.toLocaleString()||`?`,` × `,V.columns||`?`,`)`]})}),W&&Object.keys(W).length>0&&(0,v.jsx)(`div`,{className:`xr-section`,children:(0,v.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`dims`),style:{cursor:`pointer`},children:[E.dims?(0,v.jsx)(f,{size:14,className:`xr-icon-toggle active`}):(0,v.jsx)(o,{size:14,className:`xr-icon-toggle`}),(0,v.jsxs)(`span`,{className:`xr-section-name`,children:[$.dimsLabel,`:`]}),(0,v.jsxs)(`div`,{className:`xr-dims-inline`,children:[`(`,Array.isArray(W)?W.map((e,t)=>(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`xr-dim-name`,children:e}),t<W.length-1?`, `:``]},e)):Object.entries(W).map(([e,t],n,r)=>(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`xr-dim-name`,children:e}),`: `,String(t),n<r.length-1?`, `:``]},e)),`)`]})]})}),e.size>0&&(0,v.jsxs)(`div`,{className:`xr-section`,children:[(0,v.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`coords`),style:{cursor:`pointer`},children:[E.coords?(0,v.jsx)(f,{size:14,className:`xr-icon-toggle active`}):(0,v.jsx)(o,{size:14,className:`xr-icon-toggle`}),(0,v.jsxs)(`span`,{className:`xr-section-name`,children:[$.coordsLabel,`:`]}),(0,v.jsx)(`span`,{className:`xr-dim-count`,children:e.size})]}),E.coords&&(0,v.jsx)(`div`,{className:`xr-section-details`,children:(0,v.jsx)(`ul`,{className:`xr-var-list`,children:t.length>0?t.map((e,t)=>a(e,t,`coords`)):Array.from(e).map((e,t)=>{let n=r?.coords?.[e],a=typeof G==`object`&&!Array.isArray(G)?G[e]:void 0,o=a?.type||`float64`,s=a?.dims,c=s&&s.length>0?`(${s.join(`, `)})`:s&&s.length===0?`()`:`(${e})`;return(0,v.jsxs)(`li`,{className:`xr-var-item`,children:[(0,v.jsx)(`span`,{className:`xr-var-name`,children:e}),(0,v.jsx)(`span`,{className:`xr-var-dims`,children:c}),(0,v.jsx)(`span`,{className:`xr-var-dtype`,children:o}),(0,v.jsx)(`span`,{className:`xr-var-unit-empty`}),(0,v.jsx)(`span`,{className:`xr-var-preview`,children:n&&Array.isArray(n)?i(n):`...`})]},t)})})})]}),(0,v.jsxs)(`div`,{className:`xr-section`,children:[(0,v.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`dataVars`),style:{cursor:`pointer`},children:[E.dataVars?(0,v.jsx)(f,{size:14,className:`xr-icon-toggle active`}):(0,v.jsx)(o,{size:14,className:`xr-icon-toggle`}),(0,v.jsxs)(`span`,{className:`xr-section-name`,children:[$.dataVarsLabel,`:`]}),(0,v.jsx)(`span`,{className:`xr-dim-count`,children:n.length})]}),E.dataVars&&(0,v.jsx)(`div`,{className:`xr-section-details`,children:(0,v.jsx)(`ul`,{className:`xr-var-list`,children:n.length>0?n.map((e,t)=>a(e,t,`data_vars`)):(0,v.jsx)(`li`,{className:`xr-var-item`,children:(0,v.jsx)(`span`,{className:`xr-var-preview`,children:$.noVars})})})})]}),(()=>{let e=P.attrs;if(!e||typeof e!=`object`||Object.keys(e).length===0)return null;let t=Object.entries(e);return(0,v.jsxs)(`div`,{className:`xr-section`,children:[(0,v.jsxs)(`div`,{className:`xr-section-summary`,onClick:()=>O(`attrs`),style:{cursor:`pointer`},children:[E.attrs?(0,v.jsx)(f,{size:14,className:`xr-icon-toggle active`}):(0,v.jsx)(o,{size:14,className:`xr-icon-toggle`}),(0,v.jsx)(`span`,{className:`xr-section-name`,children:`Attributes:`}),(0,v.jsxs)(`span`,{className:`xr-dim-count`,children:[`(`,t.length,`)`]})]}),E.attrs&&(0,v.jsx)(`div`,{className:`xr-section-details`,children:(0,v.jsx)(`dl`,{className:`xr-attrs`,children:t.map(([e,t])=>(0,v.jsxs)(`div`,{className:`xr-attr-item`,children:[(0,v.jsx)(`dt`,{children:e}),(0,v.jsx)(`dd`,{children:typeof t==`object`?JSON.stringify(t):String(t)})]},e))})})]})})()]})})()]})]}),Object.values(z).some(e=>e&&typeof e==`object`&&!Array.isArray(e))&&(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(c,{size:20}),(0,v.jsx)(`h2`,{children:$.dataStats})]}),(()=>{let e=B?.completeness,t=B?.profiled_at,n=Object.keys(z).length;if(e===void 0&&!t&&n===0)return null;let r=e===void 0?null:Math.round(e*100);return(0,v.jsxs)(`div`,{className:`stats-global-card`,children:[r!==null&&(0,v.jsxs)(`div`,{className:`stats-global-item`,children:[(0,v.jsx)(`span`,{className:`stats-global-label`,children:$.completeness}),(0,v.jsxs)(`div`,{className:`stats-global-value-row`,children:[(0,v.jsxs)(`span`,{className:`stats-global-pct ${r>=90?`high`:r>=50?`mid`:`low`}`,children:[r,`%`]}),(0,v.jsx)(`div`,{className:`completeness-track-mini`,children:(0,v.jsx)(`div`,{className:`completeness-fill ${r>=90?`high`:r>=50?`mid`:`low`}`,style:{width:`${r}%`}})})]})]}),(0,v.jsxs)(`div`,{className:`stats-global-item`,children:[(0,v.jsx)(`span`,{className:`stats-global-label`,children:T===`zh`?`统计变量数`:`Variables Analyzed`}),(0,v.jsx)(`span`,{className:`stats-global-value`,children:n})]}),t&&(0,v.jsxs)(`div`,{className:`stats-global-item`,children:[(0,v.jsx)(`span`,{className:`stats-global-label`,children:T===`zh`?`分析时间`:`Profiled At`}),(0,v.jsx)(`span`,{className:`stats-global-value`,style:{fontSize:`0.8rem`},children:new Date(t).toLocaleDateString()})]})]})})(),(0,v.jsx)(`div`,{className:`variables-table-container`,children:(0,v.jsxs)(`table`,{className:`stats-paper-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:$.statsVar}),(0,v.jsx)(`th`,{className:`num-col`,children:T===`zh`?`类型`:`Type`}),(0,v.jsx)(`th`,{className:`num-col`,children:$.statsMin}),(0,v.jsx)(`th`,{className:`num-col`,children:$.statsMax}),(0,v.jsx)(`th`,{className:`num-col`,children:$.statsMean}),(0,v.jsx)(`th`,{className:`num-col`,children:$.statsStd}),(0,v.jsx)(`th`,{className:`num-col`,children:T===`zh`?`中位数`:`Median`}),(0,v.jsx)(`th`,{className:`num-col`,children:T===`zh`?`缺失率`:`Null%`}),(0,v.jsx)(`th`,{className:`num-col`,children:$.statsUnique})]})}),(0,v.jsx)(`tbody`,{children:Object.entries(z).map(([e,t])=>{if(!t||typeof t!=`object`)return null;let n=e=>e==null?(0,v.jsx)(`span`,{className:`empty-cell`,children:`—`}):typeof e==`number`?Number.isInteger(e)?e.toLocaleString():e.toFixed(4):String(e),r=t.null_rate,i=t.dtype;return(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`var-name`,children:(0,v.jsx)(`code`,{children:e})}),(0,v.jsx)(`td`,{className:`num-cell`,style:{fontSize:`0.7rem`,color:`#6366f1`},children:i||(0,v.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,v.jsx)(`td`,{className:`num-cell`,children:n(t.min)}),(0,v.jsx)(`td`,{className:`num-cell`,children:n(t.max)}),(0,v.jsx)(`td`,{className:`num-cell`,children:n(t.mean)}),(0,v.jsx)(`td`,{className:`num-cell`,children:n(t.std)}),(0,v.jsx)(`td`,{className:`num-cell`,children:n(t.p50)}),(0,v.jsx)(`td`,{className:`num-cell`,children:r!==void 0&&r>0?(0,v.jsxs)(`span`,{className:`null-rate-badge ${r>.5?`critical`:r>.1?`warn`:`ok`}`,children:[(r*100).toFixed(1),`%`]}):r===0?(0,v.jsx)(`span`,{className:`null-rate-badge ok`,children:`0%`}):(0,v.jsx)(`span`,{className:`empty-cell`,children:`—`})}),(0,v.jsx)(`td`,{className:`num-cell`,children:t.unique_count?.toLocaleString()??(0,v.jsx)(`span`,{className:`empty-cell`,children:`—`})})]},e)})})]})})]}),(()=>{let e=P.usage_note,t=m(e,T);return t?(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(l,{size:20}),(0,v.jsx)(`h2`,{id:`usage-note-title`,children:$.usageNote})]}),(0,v.jsx)(`div`,{className:`usage-note-container`,children:(0,v.jsx)(`p`,{className:`usage-note-content`,children:t})})]}):null})(),P.file_bundle&&(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(i,{size:20}),(0,v.jsx)(`h2`,{children:$.fileBundle})]}),(0,v.jsxs)(`div`,{className:`file-bundle-container`,children:[(0,v.jsxs)(`div`,{className:`bundle-primary`,children:[(0,v.jsx)(`span`,{className:`bundle-label primary`,children:$.primaryFile}),(0,v.jsxs)(`span`,{className:`bundle-filename`,children:[(0,v.jsx)(s,{size:16}),P.file_bundle.primary]})]}),P.file_bundle.auxiliary&&P.file_bundle.auxiliary.length>0&&(0,v.jsxs)(`div`,{className:`bundle-auxiliary`,children:[(0,v.jsxs)(`div`,{className:`bundle-aux-header`,children:[$.auxiliaryFiles,` (`,P.file_bundle.auxiliary.length,`)`]}),(0,v.jsx)(`div`,{className:`bundle-aux-list`,children:P.file_bundle.auxiliary.map((e,t)=>(0,v.jsxs)(`div`,{className:`bundle-aux-item`,children:[(0,v.jsxs)(`div`,{className:`aux-info`,children:[(0,v.jsx)(`span`,{className:`aux-path`,children:e.path}),(0,v.jsx)(`span`,{className:`aux-type`,children:e.type?.replace(`shapefile_`,``).replace(`raster_`,``)})]}),(0,v.jsx)(`span`,{className:`aux-size`,children:e.size_bytes?`${(e.size_bytes/1024).toFixed(1)} KB`:`-`})]},t))})]}),P.file_bundle.total_size_bytes&&(0,v.jsxs)(`div`,{className:`bundle-total`,children:[(0,v.jsx)(`span`,{children:$.totalSize}),(0,v.jsxs)(`span`,{className:`total-value`,children:[(P.file_bundle.total_size_bytes/1024).toFixed(1),` KB`]})]})]})]}),(()=>{let e=P.references;return!Array.isArray(e)||e.length===0?null:(0,v.jsxs)(`section`,{className:`paper-section`,children:[(0,v.jsxs)(`div`,{className:`section-heading`,children:[(0,v.jsx)(r,{size:20}),(0,v.jsx)(`h2`,{children:$.referencesLabel})]}),(0,v.jsx)(`ul`,{style:{margin:0,paddingLeft:`0.5rem`,fontSize:`0.875rem`,color:`var(--cg-text)`,lineHeight:1.8,listStyle:`none`},children:e.map((e,t)=>(0,v.jsxs)(`li`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,v.jsxs)(`span`,{style:{color:`#6366f1`,fontWeight:700,flexShrink:0},children:[`[`,t+1,`]`]}),e.type===`document`&&(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{style:{background:`#dbeafe`,color:`#2563eb`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`DOC`}),e.source_name||`Unknown`]}),e.type===`literature`&&(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{style:{background:`#fef3c7`,color:`#92400e`,padding:`1px 6px`,borderRadius:`3px`,fontSize:`0.75rem`,fontWeight:600,marginRight:`0.5rem`},children:`LIT`}),e.title||`Ref #${e.ref_id||t+1}`]}),e.type!==`document`&&e.type!==`literature`&&(0,v.jsx)(`span`,{children:e.title||e.source_name||JSON.stringify(e)})]},t))})]})})(),(0,v.jsx)(`style`,{children:`
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
      `})]})};export{y as t};