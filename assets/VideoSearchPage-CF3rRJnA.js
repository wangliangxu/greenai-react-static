import{r as t,j as r}from"./react-vendor-DZdvhec1.js";import{a as fr}from"./vendor-axios-B9ygI19o.js";import{a as gr,c as hr}from"./index-gZIvI9UJ.js";import{v as vr,w as xr,x as br,y as yr,z as Be,A as kr,B as wr,C as _r}from"./admin-media-BcT-CjAy.js";/* empty css                   *//* empty css                        */import{C as jr}from"./CourseNavigationSidebar-D_acRu8p.js";import{A as Sr,T as F,a as Nr}from"./AdminToolbar-r8gKKq_M.js";import{T as Cr}from"./ToolbarSelect-DQhv_JzV.js";import{A as zr}from"./AdminPageLayout-C-3xdruj.js";import{A as $r,x as Le,w as me,bo as qr,v as q,a9 as Re,X as Ar,b$ as Ir,a7 as Mr}from"./ui-vendor-tV6DikQD.js";import{useNavigate as Er,useSearchParams as Br}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";function H(a){const m=a.title?.trim();if(m)return m;try{const n=new URL(a.original_url),b=n.pathname.split("/").filter(Boolean).pop();return b?`${a.source||n.hostname}-${b}`:`${a.source||n.hostname}-video`}catch{return a.original_url||"网络视频"}}function V(a,m){if(fr.isAxiosError(a)){const n=a.response?.data?.detail;if(typeof n=="string"&&n.trim())return n;if(a.message)return a.message}return a instanceof Error&&a.message?a.message:m}function W(a){const m=[a.source_label,a.extractor_key,a.source];for(const n of m){const b=n?.trim();if(b)return b}return"网络来源"}function Lr(a){const m=a?.trim();if(!m)return"";const n=m.replace(/-/g,"");return/^\d{8}$/.test(n)?`${n.slice(0,4)}-${n.slice(4,6)}-${n.slice(6,8)}`:m}function De(a){return typeof a!="number"||Number.isNaN(a)||a<0?"":a>=1e8?`${(a/1e8).toFixed(a>=1e9?1:2).replace(/\.0$/,"")}亿`:a>=1e4?`${(a/1e4).toFixed(a>=1e5?1:2).replace(/\.0$/,"")}万`:a.toLocaleString()}function Rr(a){return(a.description||"").replace(/\s+/g," ").trim()}function R(a){return a.trim().replace(/\/+$/,"")}function Dr(a){const m=new Set;for(const n of a)n.status!=="pending"&&n.status!=="processing"||(n.url&&m.add(R(n.url)),n.normalized_url&&m.add(R(n.normalized_url)));return m}function pe(a){return{borderRadius:10,background:a?"var(--admin-bg, #ffffff)":"transparent",color:a?"var(--admin-primary, #2563eb)":"var(--admin-text-secondary, #475569)",boxShadow:a?"var(--admin-shadow-sm, 0 1px 3px rgba(15, 23, 42, 0.10))":"none",fontWeight:a?600:500}}function Tr(a){return a==="high"?"高度匹配":a==="medium"?"建议参考":a==="low"?"低相关":"待评估"}function Kr(a){return a==="high"?{background:"var(--admin-success-light, #dcfce7)",color:"var(--admin-success, #166534)"}:a==="medium"?{background:"var(--admin-primary-light, #dbeafe)",color:"var(--admin-primary, #1d4ed8)"}:a==="low"?{background:"var(--admin-warning-light, #fef3c7)",color:"var(--admin-warning, #92400e)"}:{background:"var(--admin-bg-secondary, #e5e7eb)",color:"var(--admin-text-muted, #374151)"}}const Ur=["basics","intermediate","advanced"],O=30,Z=10,Te=100,Pr={basics:"认知与启蒙",intermediate:"方法与工具",advanced:"实践与探究"};function Ts(){const a=Er(),[m]=Br(),[n,b]=t.useState(""),[_,ee]=t.useState("auto"),[D,re]=t.useState(O),[k,G]=t.useState(O),[c,fe]=t.useState(""),[Ke,se]=t.useState("basics"),[Q,ge]=t.useState(!1),[ae,J]=t.useState(!0),[v,A]=t.useState([]),[h,j]=t.useState([]),[S,he]=t.useState(!1),[X,ve]=t.useState(!1),[Ue,xe]=t.useState(!1),[be,u]=t.useState(""),[Pe,ye]=t.useState(""),[te,ke]=t.useState(""),[we,g]=t.useState(""),[_e,oe]=t.useState(new Set),[je,I]=t.useState(""),[y,N]=t.useState(new Set),[T,Se]=t.useState(!1),[Fe,Ve]=t.useState([]),[C,Y]=t.useState(!1),[Oe,ne]=t.useState(0),[Ge,Ne]=t.useState(""),[Qe,Ce]=t.useState(0),[Je,Xe]=t.useState(null),{data:p}=gr(),{data:x}=hr(c||void 0),ie=m.get("entry"),d=ie==="course",w=t.useMemo(()=>{if(!x)return{title:[],keywords:[],units:[]};const e=[],s=[],o=[];if(x.title&&e.push(x.title),x.keywords&&Array.isArray(x.keywords)&&s.push(...x.keywords),x.units&&Array.isArray(x.units))for(const i of x.units)i.title&&o.push(i.title);return{title:[...new Set(e)],keywords:[...new Set(s)],units:[...new Set(o)]}},[x]),ce=t.useMemo(()=>[...w.title,...w.keywords,...w.units],[w]),f=t.useMemo(()=>[...new Set(ce.map(e=>e.trim()).filter(Boolean))],[ce]),Ye=t.useMemo(()=>Q?f:f.slice(0,10),[f,Q]),He=f.length>10,de=t.useMemo(()=>[{key:"title",label:"课程名称",items:w.title},{key:"keywords",label:"课程关键词",items:w.keywords},{key:"units",label:"章节标题",items:w.units}].filter(e=>e.items.length>0),[w]),We=t.useMemo(()=>f.length===0?"当前课程暂无可用的预设关键词":`将按当前课程预设组合执行搜索：${de.map(s=>`${s.label} ${s.items.length} 个`).join(" / ")}，共 ${f.length} 个关键词`,[de,f.length]),M=t.useMemo(()=>{const e=new Map;for(const s of Ur)e.set(s,[]);for(const s of p||[]){const o=e.has(s.category)?s.category:"other",i=e.get(o)||[];i.push({id:s.id,title:s.title}),e.set(o,i)}return e.has("other")&&e.get("other")?.length===0&&e.delete("other"),Array.from(e.entries()).filter(([,s])=>s.length>0).map(([s,o])=>({key:s,label:Pr[s]||"其他课程",items:o}))},[p]);t.useEffect(()=>{if(!c||!p)return;const e=p.find(s=>s.id===c);e&&!d&&b(e.title)},[c,p,d]),t.useEffect(()=>{ge(!1)},[c]),t.useEffect(()=>{if(!c||!p){M.length>0&&se(o=>M.some(i=>i.key===o)?o:M[0].key);return}const e=p.find(o=>o.id===c);if(!e)return;const s=M.some(o=>o.key===e.category)?e.category:"other";se(s)},[M,p,c]),t.useEffect(()=>{vr().then(e=>Ve(e.sources||[])).catch(()=>{})},[]);const z=t.useCallback(async()=>{try{const e=await xr({limit:200});oe(Dr(e.items||[]))}catch{}},[]);t.useEffect(()=>{z()},[z]),t.useEffect(()=>{if(h.length===0&&!te&&!T)return;z();const e=window.setInterval(()=>{z()},5e3);return()=>window.clearInterval(e)},[te,T,h.length,z]);const E=t.useMemo(()=>n.trim().length>=2,[n]),le=t.useCallback(e=>_e.has(R(e)),[_e]),$=t.useMemo(()=>d?h.slice(0,k):h,[d,h,k]),ue=t.useMemo(()=>d?v.length>k:E&&h.length>=D&&D<Te,[E,d,h.length,v.length,D,k]),B=t.useMemo(()=>!c||v.length===0?[]:v.slice(0,Math.min(k,v.length)),[v,c,k]),L=t.useMemo(()=>{if(!c||B.length===0)return"";const e=B.map(s=>R(s.original_url)).sort().join("|");return`${c}|${k}|${e}`},[B,c,k]);t.useEffect(()=>{if(!c||S||C||!L||L===je)return;let e=!1;return xe(!0),br(c,B).then(s=>{if(e||!s.success)return;const o=s.items||[];if(o.length===0){I(L);return}const i=v.slice(B.length);j([...o,...i]),I(L)}).catch(()=>{e||I(L)}).finally(()=>{e||xe(!1)}),()=>{e=!0}},[C,S,je,v,B,L,c]);const ze=async()=>{if(u(""),g(""),N(new Set),!E){u("请输入至少2个字符的关键词");return}const e=O;re(e),G(e),I(""),he(!0);try{const s=await Be(n.trim(),e,_);if(!s.success)A([]),j([]),u(s.error||"搜索失败");else{const o=s.items||[];A(o),j(o),s.error&&g(s.error)}}catch(s){A([]),j([]),u(V(s,"搜索失败"))}finally{he(!1)}},Ze=async e=>{if(e.original_url){ye(e.original_url),u(""),g("");try{const s=await _r({title:H(e),original_url:e.original_url,source:e.source,source_label:W(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});g(s.message||"已保存")}catch(s){u(V(s,"保存失败"))}finally{ye("")}}},er=async e=>{if(e.original_url){if(le(e.original_url)){g("该视频已在下载队列中");return}ke(e.original_url),u(""),g("");try{const s=await wr({title:H(e),original_url:e.original_url,source:e.source,source_label:W(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});oe(o=>{const i=new Set(o);return i.add(R(e.original_url)),i}),z(),g(s.message||"已创建下载任务")}catch(s){u(V(s,"下载失败"))}finally{ke("")}}},rr=e=>{N(s=>{const o=new Set(s);return o.has(e)?o.delete(e):o.add(e),o})},sr=()=>{y.size===$.length?N(new Set):N(new Set($.map(e=>e.original_url)))},ar=async()=>{if(y.size===0)return;const s=h.filter(o=>y.has(o.original_url)).filter(o=>!le(o.original_url));if(s.length===0){g("所选视频已在下载队列中");return}Se(!0),u(""),g("");try{const o=s.map(l=>({title:H(l),original_url:l.original_url,source:l.source,source_label:W(l),thumbnail_url:l.thumbnail_url,duration:l.duration,uploader:l.uploader,upload_date:l.upload_date,view_count:l.view_count,like_count:l.like_count,description:l.description,license:l.license,categories:l.categories,tags:l.tags,channel_url:l.channel_url,channel_id:l.channel_id})),i=await kr(o);oe(l=>{const K=new Set(l);for(const U of s)K.add(R(U.original_url));return K}),z(),g(`批量下载：${i.created} 个任务已创建，${i.skipped} 个跳过，${i.failed} 个失败`),N(new Set)}catch(o){u(V(o,"批量下载失败"))}finally{Se(!1)}},tr=t.useCallback(()=>{if(!c){u("请先选择课程后再执行课程搜索");return}if(f.length===0){u("当前课程暂无可用于课程搜索的关键词");return}Y(!0),ne(0),Ne(""),Ce(0),J(!1),G(O),re(O),A([]),j([]),N(new Set),u(""),g(""),I("");const e=yr({keywords:f,limit_per_keyword:5,source:"auto"},s=>{if(s.type==="progress")ne(s.percent||0),Ne(s.keyword||"");else if(s.type==="result"&&s.items){const o=s.items||[];Ce(i=>i+(s.count||0)),A(i=>[...i,...o]),j(i=>[...i,...o])}else s.type==="done"?(Y(!1),ne(100),g(`批量搜索完成！共搜索 ${s.total_keywords} 个关键词，发现 ${s.total_unique} 条独立结果`)):s.type==="error"&&(Y(!1),u(s.message||"批量搜索失败"))});Xe(e)},[f,c]),or=t.useCallback(async()=>{if(d){G(s=>Math.min(s+Z,v.length));return}if(!E||X||!ue)return;const e=Math.min(D+Z,Te);ve(!0),u("");try{const s=await Be(n.trim(),e,_);if(!s.success){u(s.error||"加载更多失败");return}const o=s.items||[];re(e),G(e),A(o),j(o),I("")}catch(s){u(V(s,"加载更多失败"))}finally{ve(!1)}},[ue,E,d,X,n,v.length,D,_]);t.useEffect(()=>{ie==="course"&&(_!=="auto"&&ee("auto"),!(!p||p.length===0)&&(c||fe(p[0].id)))},[p,ie,c,_]),t.useEffect(()=>{if(!d){J(!0);return}J(!0)},[d,c]);const nr=e=>{if(!e||e<=0)return"";const s=Math.floor(e/60),o=e%60;return s>=60?`${Math.floor(s/60)}:${(s%60).toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`:`${s}:${o.toString().padStart(2,"0")}`},ir=e=>{if(!e)return null;const s=e.toLowerCase();return s.includes("cc0")||s.includes("public domain")?{bg:"var(--admin-success-light, #d1fae5)",color:"var(--admin-success, #065f46)"}:s.includes("cc-by")||s.includes("creative commons")?{bg:"var(--admin-primary-light, #dbeafe)",color:"var(--admin-primary, #1e40af)"}:{bg:"var(--admin-bg-secondary, #f3f4f6)",color:"var(--admin-text-muted, #374151)"}},$e=y.size>0,cr=r.jsx(Sr,{selection:$e?{isSelectMode:!0,selectedCount:y.size,onCancel:()=>N(new Set),actions:r.jsx(r.Fragment,{children:r.jsx(F,{icon:T?r.jsx(q,{size:18,className:"vd-spinning"}):r.jsx(Re,{size:18}),variant:"primary",onClick:ar,disabled:T,children:T?"下载中...":`批量下载 (${y.size})`})})}:void 0,leftActions:$e?void 0:r.jsxs(r.Fragment,{children:[r.jsx(F,{icon:r.jsx($r,{size:18}),onClick:()=>a("/admin/videos"),title:"返回视频目录",children:"返回"}),r.jsx(Nr,{}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:4,borderRadius:14,background:"var(--admin-bg-secondary, #f1f5f9)",border:"1px solid var(--admin-border, #e2e8f0)"},children:[r.jsx(F,{icon:r.jsx(Le,{size:18}),onClick:()=>a("/admin/videos/search"),title:"切换到普通搜索",style:pe(!d),children:"普通搜索"}),r.jsx(F,{icon:r.jsx(me,{size:18}),onClick:()=>a("/admin/videos/search?entry=course"),title:"切换到课程搜索",style:pe(d),children:"课程搜索"}),r.jsx(F,{icon:r.jsx(qr,{size:18}),onClick:()=>a("/admin/videos/import"),title:"切换到从链接导入",style:pe(!1),children:"从链接导入"})]})]}),rightActions:void 0}),dr=e=>{b(e)},lr=e=>{fe(e)},ur=r.jsx(jr,{className:"vs-keyword-sidebar",groups:M,totalCount:p?.length||0,expandedGroupKey:Ke,selectedCourseId:c,onToggleGroup:se,onSelectCourse:lr});return r.jsxs(zr,{toolbar:cr,sidebar:ur,children:[r.jsxs("div",{className:"vs-content",children:[r.jsx("div",{className:"vs-search-bar",children:d?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"vs-course-query-box",children:[r.jsxs("div",{className:"vs-course-query-box__header",children:[r.jsx("div",{className:"vs-course-query-box__label",children:"课程预设组合"}),r.jsx("button",{type:"button",className:"vs-course-query-box__toggle",onClick:()=>J(e=>!e),title:ae?"收起课程预设关键词":"展开课程预设关键词",children:ae?"收起":"展开"})]}),r.jsx("div",{className:`vs-course-query-box__value ${f.length===0?"vs-course-query-box__value--empty":""}`,children:We})]}),!C&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:tr,disabled:f.length===0,title:"按当前课程预设组合执行搜索",children:[r.jsx(me,{size:16}),r.jsx("span",{children:"搜索"})]}),C&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--danger",onClick:()=>{Je?.abort(),Y(!1)},title:"停止当前搜索任务",children:[r.jsx(Ar,{size:16}),r.jsx("span",{children:"停止"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(Cr,{value:n,onChange:b,onSubmit:ze,placeholder:"输入关键词，例如：climate change / 温室效应 / 海平面",historyKey:"video_search_history"}),r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:ze,disabled:S||!E,title:"使用当前输入的关键词执行普通搜索",children:[S?r.jsx(q,{size:16,className:"vd-spinning"}):r.jsx(Le,{size:16}),r.jsx("span",{children:S?"搜索中...":"开始搜索"})]})]})}),!d&&r.jsxs("div",{className:"vs-source-filter",children:[r.jsx("div",{className:"vs-source-filter__label",children:"搜索来源"}),r.jsxs("div",{className:"vs-source-filter__options",children:[r.jsx("button",{type:"button",className:`vs-source-filter__option ${_==="auto"?"vs-source-filter__option--active":""}`,onClick:()=>ee("auto"),title:"按系统优先级自动选择搜索来源",children:"自动"}),Fe.map(e=>r.jsx("button",{type:"button",className:`vs-source-filter__option ${_===e.id?"vs-source-filter__option--active":""}`,onClick:()=>ee(e.id),title:`仅使用 ${e.label} 搜索`,children:e.label},e.id))]})]}),c&&ce.length>0&&(!d||ae)&&r.jsxs("div",{className:"vs-keyword-quick",children:[r.jsxs("div",{className:"vs-keyword-quick__header",children:[r.jsxs("div",{className:"vs-keyword-quick__header-main",children:[r.jsx("span",{className:"vs-keyword-quick__title",children:d?"课程预设关键词":"课程关键词"}),r.jsx("span",{className:"vs-keyword-quick__hint",children:d?"以下关键词将按课程预设组合参与搜索":"点击即可填入搜索框"})]}),!d&&He&&r.jsx("button",{type:"button",className:"vs-keyword-quick__toggle",onClick:()=>ge(e=>!e),title:Q?"收起多余关键词":"展开更多关键词",children:Q?"收起":`更多 ${f.length-10}`})]}),d?r.jsx("div",{className:"vs-keyword-sections",children:de.map(e=>r.jsxs("div",{className:"vs-keyword-section",children:[r.jsx("div",{className:"vs-keyword-section__label",children:e.label}),r.jsx("div",{className:"vs-keyword-quick__tags",children:e.items.map((s,o)=>r.jsx("button",{type:"button",className:"vs-keyword-quick__tag vs-keyword-quick__tag--active",title:`课程预设关键词「${s}」`,children:s},`batch-${e.key}-${o}-${s}`))})]},e.key))}):r.jsx("div",{className:"vs-keyword-quick__tags",children:Ye.map((e,s)=>r.jsx("button",{type:"button",className:`vs-keyword-quick__tag ${n===e?"vs-keyword-quick__tag--active":""}`,onClick:()=>{dr(e)},title:`点击搜索「${e}」`,children:e},`quick-${s}-${e}`))})]}),d&&C&&r.jsxs("div",{className:"vs-progress-bar",children:[r.jsxs("div",{className:"vs-progress-info",children:[r.jsxs("span",{children:["正在搜索：",r.jsx("strong",{children:Ge})]}),r.jsxs("span",{className:"vs-progress-stats",children:["已找到 ",Qe," 条"]})]}),r.jsx("div",{className:"vs-progress-track",children:r.jsx("div",{className:"vs-progress-fill",style:{width:`${Oe}%`}})})]}),be&&r.jsx("div",{className:"vs-message vs-message--error",children:be}),we&&r.jsx("div",{className:"vs-message vs-message--success",children:we}),h.length>0&&r.jsxs("div",{className:"vs-batch-bar",children:[r.jsxs("label",{className:"vs-batch-checkbox",children:[r.jsx("input",{type:"checkbox",checked:y.size===$.length&&$.length>0,onChange:sr}),"全选 (",y.size,"/",$.length,")"]}),r.jsx("span",{className:"vs-batch-spacer"}),r.jsxs("span",{className:"vs-result-count",children:["已显示 ",$.length," / ",h.length," 条"]}),Ue&&r.jsxs("span",{className:"vs-rerank-status",children:[r.jsx(q,{size:14,className:"vd-spinning"}),"智能推荐中"]})]}),r.jsx("div",{className:"vs-results",children:h.length===0?r.jsx("div",{className:"vs-empty",children:S||C?r.jsxs(r.Fragment,{children:[r.jsx(q,{size:20,className:"vd-spinning"})," ",d?"课程搜索中...":"搜索中..."]}):d?"请先选择课程，再执行课程预设搜索":"暂无结果，请在上方输入关键词搜索"}):r.jsx("div",{className:"vs-result-list",children:$.map(e=>{const s=Pe===e.original_url,o=te===e.original_url,i=le(e.original_url),l=o||s||i,K=y.has(e.original_url),U=ir(e.license),mr=Kr(e.recommendation_bucket),qe=H(e),Ae=W(e),Ie=Rr(e),pr=(e.tags||[]).filter(Boolean).slice(0,6),Me=(e.matched_course_points||[]).filter(Boolean).slice(0,3),Ee=(e.risk_flags||[]).filter(Boolean).slice(0,2);return r.jsxs("div",{className:`vs-result-card ${K?"vs-result-card--selected":""}`,children:[r.jsx("div",{className:"vs-result-checkbox",children:r.jsx("input",{type:"checkbox",checked:K,onChange:()=>rr(e.original_url)})}),r.jsx("div",{className:"vs-result-thumb",children:e.thumbnail_url?r.jsx("img",{src:e.thumbnail_url,alt:qe}):r.jsx("div",{className:"vs-result-thumb-placeholder"})}),r.jsxs("div",{className:"vs-result-info",children:[r.jsx("div",{className:"vs-result-title",children:qe}),typeof e.recommendation_score=="number"&&r.jsxs("div",{className:"vs-recommendation-row",children:[r.jsxs("span",{className:"vs-recommendation-badge",style:mr,children:[Tr(e.recommendation_bucket)," ",e.recommendation_score]}),typeof e.quality_score=="number"&&r.jsxs("span",{className:"vs-recommendation-quality",children:["教学质量 ",e.quality_score]})]}),r.jsx("div",{className:"vs-result-url",children:e.original_url}),r.jsxs("div",{className:"vs-result-meta",children:[Ae&&r.jsxs("span",{children:["📺 ",Ae]}),typeof e.duration=="number"&&e.duration>0&&r.jsxs("span",{children:["⏱ ",nr(e.duration)]}),e.uploader&&r.jsxs("span",{children:["👤 ",e.uploader]}),typeof e.view_count=="number"&&r.jsxs("span",{children:["👁 ",De(e.view_count)]}),typeof e.like_count=="number"&&r.jsxs("span",{children:["👍 ",De(e.like_count)]}),e.upload_date&&r.jsxs("span",{children:["📅 ",Lr(e.upload_date)]})]}),e.recommendation_reason&&r.jsxs("div",{className:"vs-recommendation-reason",children:["AI推荐：",e.recommendation_reason]}),Me.length>0&&r.jsxs("div",{className:"vs-recommendation-points",children:["匹配课程点：",Me.join(" / ")]}),Ee.length>0&&r.jsxs("div",{className:"vs-recommendation-risk",children:["注意：",Ee.join(" / ")]}),Ie&&r.jsx("div",{className:"vs-result-desc",children:Ie}),r.jsxs("div",{className:"vs-result-tags",children:[e.license&&U&&r.jsxs("span",{className:"vs-tag",style:{background:U.bg,color:U.color},children:["📄 ",e.license]}),e.categories?.map(P=>r.jsx("span",{className:"vs-tag vs-tag--category",children:P},P)),pr.map(P=>r.jsxs("span",{className:"vs-tag vs-tag--keyword",children:["#",P]},`${e.original_url}-${P}`))]})]}),r.jsxs("div",{className:"vs-result-actions",children:[r.jsxs("button",{className:"vs-action-btn vs-action-btn--primary",onClick:()=>er(e),disabled:l,title:i?"该视频已在下载队列中":"保存并下载到本地",children:[o?r.jsx(q,{size:14,className:"vd-spinning"}):r.jsx(Re,{size:14}),o||i?"下载中":"下载"]}),r.jsxs("button",{className:"vs-action-btn vs-action-btn--secondary",onClick:()=>Ze(e),disabled:s||o||i,title:"仅保存元数据（不下载视频文件）",children:[s?r.jsx(q,{size:14,className:"vd-spinning"}):r.jsx(Ir,{size:14}),s?"保存中":"收藏"]}),r.jsxs("button",{className:"vs-action-btn",onClick:()=>navigator.clipboard.writeText(e.original_url),title:"复制链接",children:[r.jsx(Mr,{size:14}),"复制"]})]})]},e.original_url)})})}),ue&&r.jsx("div",{className:"vs-load-more",children:r.jsxs("button",{type:"button",className:"vs-load-more-btn",onClick:()=>void or(),disabled:X||S||C,children:[X?r.jsx(q,{size:16,className:"vd-spinning"}):r.jsx(me,{size:16}),d?`继续阅读并推荐更多 ${Z} 条`:`加载更多 ${Z} 条`]})})]}),r.jsx("style",{children:`
        /* ── 视频搜索页内容区 ── */
        .vs-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          height: 100%;
          min-width: 0;
          color: var(--admin-text, #0f172a);
        }

        /* 搜索栏 */
        .vs-search-bar {
          flex-shrink: 0;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .vs-search-bar .admin-toolbar-search {
          max-width: 100%;
          width: 100%;
          flex: 1;
        }

        .vs-course-query-box {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid var(--admin-border, #dbeafe);
          background: var(--admin-bg-secondary, #f8fbff);
        }

        .vs-course-query-box__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .vs-course-query-box__label {
          font-size: 12px;
          font-weight: 700;
          color: var(--admin-primary, #1e3a8a);
        }

        .vs-course-query-box__toggle {
          border: 1px solid var(--admin-border, #bfdbfe);
          background: var(--admin-bg, #ffffff);
          color: var(--admin-primary, #1d4ed8);
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .vs-course-query-box__toggle:hover {
          background: var(--admin-bg-hover, #dbeafe);
        }

        .vs-course-query-box__value {
          font-size: 14px;
          color: var(--admin-text, #0f172a);
          line-height: 1.5;
          word-break: break-word;
        }

        .vs-course-query-box__value--empty {
          color: var(--admin-text-muted, #94a3b8);
        }

        .vs-source-filter {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid var(--admin-border, #dbeafe);
          background: var(--admin-bg-secondary, #f8fbff);
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }

        .vs-source-filter__label {
          font-size: 13px;
          font-weight: 600;
          color: var(--admin-text, #1e3a8a);
        }

        .vs-source-filter__options {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vs-source-filter__option {
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid var(--admin-border, #bfdbfe);
          background: var(--admin-bg, #ffffff);
          color: var(--admin-text, #1d4ed8);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-source-filter__option:hover {
          background: var(--admin-bg-hover, #dbeafe);
          border-color: var(--admin-primary, #2563eb);
          color: var(--admin-primary, #2563eb);
        }

        .vs-source-filter__option--active {
          background: var(--admin-primary, #2563eb);
          color: var(--admin-primary-text, #ffffff);
          border-color: var(--admin-primary, #2563eb);
        }

        .vs-keyword-quick {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid var(--admin-border, #dbeafe);
          background: var(--admin-bg-secondary, linear-gradient(135deg, #f8fbff 0%, #eff6ff 100%));
          flex-shrink: 0;
        }

        .vs-keyword-quick__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .vs-keyword-quick__header-main {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .vs-keyword-quick__title {
          font-size: 13px;
          font-weight: 600;
          color: var(--admin-text, #1e3a8a);
        }

        .vs-keyword-quick__hint {
          font-size: 12px;
          color: var(--admin-text-muted, #64748b);
        }

        .vs-keyword-quick__toggle {
          border: 1px solid var(--admin-border, #bfdbfe);
          background: var(--admin-bg, #ffffff);
          color: var(--admin-primary, #1d4ed8);
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .vs-keyword-quick__toggle:hover {
          background: var(--admin-bg-hover, #dbeafe);
        }

        .vs-keyword-quick__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vs-keyword-sections {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .vs-keyword-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vs-keyword-section__label {
          font-size: 12px;
          font-weight: 700;
          color: var(--admin-text-secondary, #475569);
        }

        .vs-keyword-quick__tag {
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid var(--admin-border, #bfdbfe);
          background: var(--admin-bg, #ffffff);
          color: var(--admin-text, #1d4ed8);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-keyword-quick__tag:hover {
          background: var(--admin-bg-hover, #dbeafe);
          border-color: var(--admin-primary, #2563eb);
          color: var(--admin-primary, #2563eb);
        }

        .vs-keyword-quick__tag--active {
          background: var(--admin-primary, #2563eb);
          color: var(--admin-primary-text, #ffffff);
          border-color: var(--admin-primary, #2563eb);
        }

        .vs-search-action {
          height: 42px;
          padding: 0 16px;
          border-radius: 10px;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .vs-search-action:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .vs-search-action--primary {
          background: var(--admin-primary, #3b82f6);
          color: var(--admin-primary-text, #ffffff);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.28);
        }

        .vs-search-action--primary:hover:not(:disabled) {
          background: var(--admin-primary-hover, #2563eb);
        }

        .vs-search-action--danger {
          background: var(--admin-danger-light, #fee2e2);
          color: var(--admin-danger, #dc2626);
          border: 1px solid var(--admin-danger-light, #fecaca);
        }

        .vs-search-action--danger:hover {
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .vs-search-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .vs-search-action {
            width: 100%;
            justify-content: center;
          }

          .vs-keyword-quick__header,
          .vs-keyword-quick__header-main {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* 进度条 */
        .vs-progress-bar {
          padding: 12px 14px;
          background: var(--admin-bg-secondary, #eff6ff);
          border-radius: 10px;
          border: 1px solid var(--admin-border, #93c5fd);
          flex-shrink: 0;
        }

        .vs-progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 13px;
          color: var(--admin-text, inherit);
        }

        .vs-progress-stats {
          color: var(--admin-text-muted, #64748b);
          font-size: 12px;
        }

        .vs-progress-track {
          background: var(--admin-border, #e2e8f0);
          border-radius: 4px;
          height: 6px;
          overflow: hidden;
        }

        .vs-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        /* 消息提示 */
        .vs-message {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          flex-shrink: 0;
        }

        .vs-message--error {
          background: var(--admin-danger-light, #fee2e2);
          color: var(--admin-danger, #b91c1c);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .vs-message--success {
          background: var(--admin-success-light, #d1fae5);
          color: var(--admin-success, #065f46);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        /* 批量操作栏 */
        .vs-batch-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: var(--admin-bg-secondary, #f8fafc);
          border-radius: 8px;
          border: 1px solid var(--admin-border, #e2e8f0);
          flex-shrink: 0;
          color: var(--admin-text, #0f172a);
        }

        .vs-batch-checkbox {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: var(--admin-text, #0f172a);
        }

        .vs-batch-checkbox input {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .vs-batch-spacer {
          flex: 1;
        }

        .vs-result-count {
          font-size: 12px;
          color: var(--admin-text-muted, #64748b);
        }

        .vs-rerank-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--admin-primary, #2563eb);
          white-space: nowrap;
        }

        /* 空状态 */
        .vs-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--admin-text-muted, #94a3b8);
          padding: 40px 0;
          font-size: 14px;
        }

        /* 结果列表 */
        .vs-result-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* 结果卡片 */
        .vs-result-card {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--admin-bg, white);
          border-radius: 10px;
          border: 1px solid var(--admin-border, #e2e8f0);
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .vs-result-card:hover {
          border-color: var(--admin-primary, #c7d2fe);
          box-shadow: var(--admin-shadow-md, 0 2px 8px rgba(99, 102, 241, 0.08));
        }

        .vs-result-card--selected {
          border-color: var(--admin-primary, #3b82f6) !important;
          background: var(--admin-primary-light, #f8faff);
        }

        .vs-result-checkbox {
          display: flex;
          align-items: flex-start;
          padding-top: 4px;
        }

        .vs-result-checkbox input {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .vs-result-thumb {
          width: 160px;
          flex-shrink: 0;
        }

        .vs-result-thumb img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid var(--admin-border, #e2e8f0);
        }

        .vs-result-thumb-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          background: var(--admin-bg-secondary, linear-gradient(135deg, #f1f5f9, #e2e8f0));
          border-radius: 8px;
          border: 1px solid var(--admin-border, #e2e8f0);
        }

        .vs-result-info {
          flex: 1;
          min-width: 0;
        }

        .vs-result-title {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: var(--admin-text, #0f172a);
        }

        .vs-recommendation-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .vs-recommendation-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 700;
        }

        .vs-recommendation-quality {
          font-size: 11px;
          color: var(--admin-text-muted, #475569);
        }

        .vs-result-url {
          font-size: 11px;
          color: var(--admin-text-muted, #94a3b8);
          word-break: break-all;
          max-height: 2em;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .vs-recommendation-reason,
        .vs-recommendation-points,
        .vs-recommendation-risk {
          font-size: 12px;
          line-height: 1.5;
          margin-bottom: 6px;
        }

        .vs-recommendation-reason {
          color: var(--admin-text, #0f172a);
        }

        .vs-recommendation-points {
          color: var(--admin-primary, #1d4ed8);
        }

        .vs-recommendation-risk {
          color: var(--admin-warning, #b45309);
        }

        .vs-result-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 12px;
          color: var(--admin-text-muted, #64748b);
          margin-bottom: 6px;
        }

        .vs-result-desc {
          font-size: 12px;
          line-height: 1.55;
          color: var(--admin-text-secondary, #475569);
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          white-space: pre-wrap;
        }

        .vs-result-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .vs-tag {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
        }

        .vs-tag--category {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
        }

        .vs-tag--keyword {
          background: var(--admin-primary-light, #eff6ff);
          color: var(--admin-primary, #1d4ed8);
        }

        /* 操作按钮组 */
        .vs-result-actions {
          display: flex;
          flex-direction: column;
          gap: 6px;
          justify-content: center;
          flex-shrink: 0;
          min-width: 90px;
        }

        .vs-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid var(--admin-border, #e2e8f0);
          background: var(--admin-bg, white);
          color: var(--admin-text, #0f172a);
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .vs-action-btn:hover:not(:disabled) {
          background: var(--admin-bg-hover, #f8fafc);
          border-color: var(--admin-primary, #c7d2fe);
          color: var(--admin-primary, #2563eb);
        }

        .vs-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .vs-action-btn--primary {
          background: var(--admin-primary, #3b82f6);
          color: var(--admin-primary-text, white);
          border-color: var(--admin-primary, #3b82f6);
        }

        .vs-action-btn--primary:hover:not(:disabled) {
          background: var(--admin-primary-hover, #2563eb);
          border-color: var(--admin-primary-hover, #2563eb);
        }

        .vs-action-btn--primary:disabled {
          background: var(--admin-border, #cbd5e1);
          color: var(--admin-text-muted, #475569);
          border-color: var(--admin-border, #cbd5e1);
          box-shadow: none;
        }

        .vs-action-btn--secondary {
          background: var(--admin-primary-light, #f0f9ff);
          color: var(--admin-primary, #0369a1);
          border-color: var(--admin-border, #bae6fd);
        }

        .vs-action-btn--secondary:hover:not(:disabled) {
          background: var(--admin-bg-hover, #e0f2fe);
        }

        .vs-load-more {
          display: flex;
          justify-content: center;
          padding: 4px 0 0;
        }

        .vs-load-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid var(--admin-border, #bfdbfe);
          background: var(--admin-bg-secondary, #eff6ff);
          color: var(--admin-primary, #1d4ed8);
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-load-more-btn:hover:not(:disabled) {
          background: var(--admin-primary-light, #dbeafe);
          border-color: var(--admin-primary, #93c5fd);
        }

        .vs-load-more-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── 课程导航侧边栏响应式处理 ── */
        .vs-keyword-sidebar {
          background: var(--admin-bg-secondary, #fafbfc);
          border-left: 1px solid var(--admin-border, #e2e8f0);
        }

        @media (max-width: 1024px) {
          .vs-keyword-sidebar {
            display: none;
          }
        }
      `})]})}export{Ts as VideoSearchPage};
