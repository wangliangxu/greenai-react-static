import{r as t,j as r}from"./react-vendor-Dq4ExT0-.js";import{a as gr}from"./vendor-axios-B9ygI19o.js";import{a as xr,c as mr}from"./index-1At_Q7mr.js";import{v as br,w as hr,x as vr,y as yr,z as Be,A as wr,B as _r,C as kr}from"./admin-media-BdGYFAdk.js";/* empty css                   *//* empty css                        */import{C as jr}from"./CourseNavigationSidebar-qh1Gqyx_.js";import{A as Sr,T as F,a as Nr}from"./AdminToolbar-Dd_JbFJi.js";import{T as zr}from"./ToolbarSelect-DmhvZG3e.js";import{A as Cr}from"./AdminPageLayout-EljMbvW1.js";import{A as $r,x as Le,w as pe,bn as qr,v as q,a9 as Re,X as Ar,bX as Ir,a7 as Mr}from"./ui-vendor-VkOKbNAO.js";import{useNavigate as Er,useSearchParams as Br}from"./router-vendor-DsxEqWhI.js";import"./graph-elk-vendor-Li36BjGE.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-BdrigI4O.js";import"./editor-vendor-LSTs8a79.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-BJGgNZpU.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-react-hot-toast-ktve15hT.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-DG9ngAKL.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";function H(o){const p=o.title?.trim();if(p)return p;try{const n=new URL(o.original_url),v=n.pathname.split("/").filter(Boolean).pop();return v?`${o.source||n.hostname}-${v}`:`${o.source||n.hostname}-video`}catch{return o.original_url||"网络视频"}}function V(o,p){if(gr.isAxiosError(o)){const n=o.response?.data?.detail;if(typeof n=="string"&&n.trim())return n;if(o.message)return o.message}return o instanceof Error&&o.message?o.message:p}function W(o){const p=[o.source_label,o.extractor_key,o.source];for(const n of p){const v=n?.trim();if(v)return v}return"网络来源"}function Lr(o){const p=o?.trim();if(!p)return"";const n=p.replace(/-/g,"");return/^\d{8}$/.test(n)?`${n.slice(0,4)}-${n.slice(4,6)}-${n.slice(6,8)}`:p}function De(o){return typeof o!="number"||Number.isNaN(o)||o<0?"":o>=1e8?`${(o/1e8).toFixed(o>=1e9?1:2).replace(/\.0$/,"")}亿`:o>=1e4?`${(o/1e4).toFixed(o>=1e5?1:2).replace(/\.0$/,"")}万`:o.toLocaleString()}function Rr(o){return(o.description||"").replace(/\s+/g," ").trim()}function R(o){return o.trim().replace(/\/+$/,"")}function Dr(o){const p=new Set;for(const n of o)n.status!=="pending"&&n.status!=="processing"||(n.url&&p.add(R(n.url)),n.normalized_url&&p.add(R(n.normalized_url)));return p}function fe(o){return{borderRadius:10,background:o?"#ffffff":"transparent",color:o?"#2563eb":"#475569",boxShadow:o?"0 1px 3px rgba(15, 23, 42, 0.10)":"none",fontWeight:o?600:500}}function Tr(o){return o==="high"?"高度匹配":o==="medium"?"建议参考":o==="low"?"低相关":"待评估"}function Kr(o){return o==="high"?{background:"#dcfce7",color:"#166534"}:o==="medium"?{background:"#dbeafe",color:"#1d4ed8"}:o==="low"?{background:"#fef3c7",color:"#92400e"}:{background:"#e5e7eb",color:"#374151"}}const Ur=["basics","intermediate","advanced"],O=30,Z=10,Te=100,Pr={basics:"认知与启蒙",intermediate:"方法与工具",advanced:"实践与探究"};function Ts(){const o=Er(),[p]=Br(),[n,v]=t.useState(""),[k,ee]=t.useState("auto"),[D,re]=t.useState(O),[w,G]=t.useState(O),[l,ge]=t.useState(""),[Ke,se]=t.useState("basics"),[Q,xe]=t.useState(!1),[oe,Y]=t.useState(!0),[b,A]=t.useState([]),[m,j]=t.useState([]),[S,me]=t.useState(!1),[J,be]=t.useState(!1),[Ue,he]=t.useState(!1),[ve,u]=t.useState(""),[Pe,ye]=t.useState(""),[te,we]=t.useState(""),[_e,x]=t.useState(""),[ke,ae]=t.useState(new Set),[je,I]=t.useState(""),[y,N]=t.useState(new Set),[T,Se]=t.useState(!1),[Fe,Ve]=t.useState([]),[z,X]=t.useState(!1),[Oe,ne]=t.useState(0),[Ge,Ne]=t.useState(""),[Qe,ze]=t.useState(0),[Ye,Je]=t.useState(null),{data:f}=xr(),{data:h}=mr(l||void 0),ie=p.get("entry"),c=ie==="course",_=t.useMemo(()=>{if(!h)return{title:[],keywords:[],units:[]};const e=[],s=[],a=[];if(h.title&&e.push(h.title),h.keywords&&Array.isArray(h.keywords)&&s.push(...h.keywords),h.units&&Array.isArray(h.units))for(const i of h.units)i.title&&a.push(i.title);return{title:[...new Set(e)],keywords:[...new Set(s)],units:[...new Set(a)]}},[h]),le=t.useMemo(()=>[..._.title,..._.keywords,..._.units],[_]),g=t.useMemo(()=>[...new Set(le.map(e=>e.trim()).filter(Boolean))],[le]),Xe=t.useMemo(()=>Q?g:g.slice(0,10),[g,Q]),He=g.length>10,ce=t.useMemo(()=>[{key:"title",label:"课程名称",items:_.title},{key:"keywords",label:"课程关键词",items:_.keywords},{key:"units",label:"章节标题",items:_.units}].filter(e=>e.items.length>0),[_]),We=t.useMemo(()=>g.length===0?"当前课程暂无可用的预设关键词":`将按当前课程预设组合执行搜索：${ce.map(s=>`${s.label} ${s.items.length} 个`).join(" / ")}，共 ${g.length} 个关键词`,[ce,g.length]),M=t.useMemo(()=>{const e=new Map;for(const s of Ur)e.set(s,[]);for(const s of f||[]){const a=e.has(s.category)?s.category:"other",i=e.get(a)||[];i.push({id:s.id,title:s.title}),e.set(a,i)}return e.has("other")&&e.get("other")?.length===0&&e.delete("other"),Array.from(e.entries()).filter(([,s])=>s.length>0).map(([s,a])=>({key:s,label:Pr[s]||"其他课程",items:a}))},[f]);t.useEffect(()=>{if(!l||!f)return;const e=f.find(s=>s.id===l);e&&!c&&v(e.title)},[l,f,c]),t.useEffect(()=>{xe(!1)},[l]),t.useEffect(()=>{if(!l||!f){M.length>0&&se(a=>M.some(i=>i.key===a)?a:M[0].key);return}const e=f.find(a=>a.id===l);if(!e)return;const s=M.some(a=>a.key===e.category)?e.category:"other";se(s)},[M,f,l]),t.useEffect(()=>{br().then(e=>Ve(e.sources||[])).catch(()=>{})},[]);const C=t.useCallback(async()=>{try{const e=await hr({limit:200});ae(Dr(e.items||[]))}catch{}},[]);t.useEffect(()=>{C()},[C]),t.useEffect(()=>{if(m.length===0&&!te&&!T)return;C();const e=window.setInterval(()=>{C()},5e3);return()=>window.clearInterval(e)},[te,T,m.length,C]);const E=t.useMemo(()=>n.trim().length>=2,[n]),de=t.useCallback(e=>ke.has(R(e)),[ke]),$=t.useMemo(()=>c?m.slice(0,w):m,[c,m,w]),ue=t.useMemo(()=>c?b.length>w:E&&m.length>=D&&D<Te,[E,c,m.length,b.length,D,w]),B=t.useMemo(()=>!l||b.length===0?[]:b.slice(0,Math.min(w,b.length)),[b,l,w]),L=t.useMemo(()=>{if(!l||B.length===0)return"";const e=B.map(s=>R(s.original_url)).sort().join("|");return`${l}|${w}|${e}`},[B,l,w]);t.useEffect(()=>{if(!l||S||z||!L||L===je)return;let e=!1;return he(!0),vr(l,B).then(s=>{if(e||!s.success)return;const a=s.items||[];if(a.length===0){I(L);return}const i=b.slice(B.length);j([...a,...i]),I(L)}).catch(()=>{e||I(L)}).finally(()=>{e||he(!1)}),()=>{e=!0}},[z,S,je,b,B,L,l]);const Ce=async()=>{if(u(""),x(""),N(new Set),!E){u("请输入至少2个字符的关键词");return}const e=O;re(e),G(e),I(""),me(!0);try{const s=await Be(n.trim(),e,k);if(!s.success)A([]),j([]),u(s.error||"搜索失败");else{const a=s.items||[];A(a),j(a),s.error&&x(s.error)}}catch(s){A([]),j([]),u(V(s,"搜索失败"))}finally{me(!1)}},Ze=async e=>{if(e.original_url){ye(e.original_url),u(""),x("");try{const s=await kr({title:H(e),original_url:e.original_url,source:e.source,source_label:W(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});x(s.message||"已保存")}catch(s){u(V(s,"保存失败"))}finally{ye("")}}},er=async e=>{if(e.original_url){if(de(e.original_url)){x("该视频已在下载队列中");return}we(e.original_url),u(""),x("");try{const s=await _r({title:H(e),original_url:e.original_url,source:e.source,source_label:W(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});ae(a=>{const i=new Set(a);return i.add(R(e.original_url)),i}),C(),x(s.message||"已创建下载任务")}catch(s){u(V(s,"下载失败"))}finally{we("")}}},rr=e=>{N(s=>{const a=new Set(s);return a.has(e)?a.delete(e):a.add(e),a})},sr=()=>{y.size===$.length?N(new Set):N(new Set($.map(e=>e.original_url)))},or=async()=>{if(y.size===0)return;const s=m.filter(a=>y.has(a.original_url)).filter(a=>!de(a.original_url));if(s.length===0){x("所选视频已在下载队列中");return}Se(!0),u(""),x("");try{const a=s.map(d=>({title:H(d),original_url:d.original_url,source:d.source,source_label:W(d),thumbnail_url:d.thumbnail_url,duration:d.duration,uploader:d.uploader,upload_date:d.upload_date,view_count:d.view_count,like_count:d.like_count,description:d.description,license:d.license,categories:d.categories,tags:d.tags,channel_url:d.channel_url,channel_id:d.channel_id})),i=await wr(a);ae(d=>{const K=new Set(d);for(const U of s)K.add(R(U.original_url));return K}),C(),x(`批量下载：${i.created} 个任务已创建，${i.skipped} 个跳过，${i.failed} 个失败`),N(new Set)}catch(a){u(V(a,"批量下载失败"))}finally{Se(!1)}},tr=t.useCallback(()=>{if(!l){u("请先选择课程后再执行课程搜索");return}if(g.length===0){u("当前课程暂无可用于课程搜索的关键词");return}X(!0),ne(0),Ne(""),ze(0),Y(!1),G(O),re(O),A([]),j([]),N(new Set),u(""),x(""),I("");const e=yr({keywords:g,limit_per_keyword:5,source:"auto"},s=>{if(s.type==="progress")ne(s.percent||0),Ne(s.keyword||"");else if(s.type==="result"&&s.items){const a=s.items||[];ze(i=>i+(s.count||0)),A(i=>[...i,...a]),j(i=>[...i,...a])}else s.type==="done"?(X(!1),ne(100),x(`批量搜索完成！共搜索 ${s.total_keywords} 个关键词，发现 ${s.total_unique} 条独立结果`)):s.type==="error"&&(X(!1),u(s.message||"批量搜索失败"))});Je(e)},[g,l]),ar=t.useCallback(async()=>{if(c){G(s=>Math.min(s+Z,b.length));return}if(!E||J||!ue)return;const e=Math.min(D+Z,Te);be(!0),u("");try{const s=await Be(n.trim(),e,k);if(!s.success){u(s.error||"加载更多失败");return}const a=s.items||[];re(e),G(e),A(a),j(a),I("")}catch(s){u(V(s,"加载更多失败"))}finally{be(!1)}},[ue,E,c,J,n,b.length,D,k]);t.useEffect(()=>{ie==="course"&&(k!=="auto"&&ee("auto"),!(!f||f.length===0)&&(l||ge(f[0].id)))},[f,ie,l,k]),t.useEffect(()=>{if(!c){Y(!0);return}Y(!0)},[c,l]);const nr=e=>{if(!e||e<=0)return"";const s=Math.floor(e/60),a=e%60;return s>=60?`${Math.floor(s/60)}:${(s%60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`:`${s}:${a.toString().padStart(2,"0")}`},ir=e=>{if(!e)return null;const s=e.toLowerCase();return s.includes("cc0")||s.includes("public domain")?{bg:"#d1fae5",color:"#065f46"}:s.includes("cc-by")||s.includes("creative commons")?{bg:"#dbeafe",color:"#1e40af"}:{bg:"#f3f4f6",color:"#374151"}},$e=y.size>0,lr=r.jsx(Sr,{selection:$e?{isSelectMode:!0,selectedCount:y.size,onCancel:()=>N(new Set),actions:r.jsx(r.Fragment,{children:r.jsx(F,{icon:T?r.jsx(q,{size:18,className:"vd-spinning"}):r.jsx(Re,{size:18}),variant:"primary",onClick:or,disabled:T,children:T?"下载中...":`批量下载 (${y.size})`})})}:void 0,leftActions:$e?void 0:r.jsxs(r.Fragment,{children:[r.jsx(F,{icon:r.jsx($r,{size:18}),onClick:()=>o("/admin/videos"),title:"返回视频目录",children:"返回"}),r.jsx(Nr,{}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:4,borderRadius:14,background:"#f1f5f9",border:"1px solid #e2e8f0"},children:[r.jsx(F,{icon:r.jsx(Le,{size:18}),onClick:()=>o("/admin/videos/search"),title:"切换到普通搜索",style:fe(!c),children:"普通搜索"}),r.jsx(F,{icon:r.jsx(pe,{size:18}),onClick:()=>o("/admin/videos/search?entry=course"),title:"切换到课程搜索",style:fe(c),children:"课程搜索"}),r.jsx(F,{icon:r.jsx(qr,{size:18}),onClick:()=>o("/admin/videos/import"),title:"切换到从链接导入",style:fe(!1),children:"从链接导入"})]})]}),rightActions:void 0}),cr=e=>{v(e)},dr=e=>{ge(e)},ur=r.jsx(jr,{className:"vs-keyword-sidebar",groups:M,totalCount:f?.length||0,expandedGroupKey:Ke,selectedCourseId:l,onToggleGroup:se,onSelectCourse:dr});return r.jsxs(Cr,{toolbar:lr,sidebar:ur,children:[r.jsxs("div",{className:"vs-content",children:[r.jsx("div",{className:"vs-search-bar",children:c?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"vs-course-query-box",children:[r.jsxs("div",{className:"vs-course-query-box__header",children:[r.jsx("div",{className:"vs-course-query-box__label",children:"课程预设组合"}),r.jsx("button",{type:"button",className:"vs-course-query-box__toggle",onClick:()=>Y(e=>!e),title:oe?"收起课程预设关键词":"展开课程预设关键词",children:oe?"收起":"展开"})]}),r.jsx("div",{className:`vs-course-query-box__value ${g.length===0?"vs-course-query-box__value--empty":""}`,children:We})]}),!z&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:tr,disabled:g.length===0,title:"按当前课程预设组合执行搜索",children:[r.jsx(pe,{size:16}),r.jsx("span",{children:"搜索"})]}),z&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--danger",onClick:()=>{Ye?.abort(),X(!1)},title:"停止当前搜索任务",children:[r.jsx(Ar,{size:16}),r.jsx("span",{children:"停止"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(zr,{value:n,onChange:v,onSubmit:Ce,placeholder:"输入关键词，例如：climate change / 温室效应 / 海平面",historyKey:"video_search_history"}),r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:Ce,disabled:S||!E,title:"使用当前输入的关键词执行普通搜索",children:[S?r.jsx(q,{size:16,className:"vd-spinning"}):r.jsx(Le,{size:16}),r.jsx("span",{children:S?"搜索中...":"开始搜索"})]})]})}),!c&&r.jsxs("div",{className:"vs-source-filter",children:[r.jsx("div",{className:"vs-source-filter__label",children:"搜索来源"}),r.jsxs("div",{className:"vs-source-filter__options",children:[r.jsx("button",{type:"button",className:`vs-source-filter__option ${k==="auto"?"vs-source-filter__option--active":""}`,onClick:()=>ee("auto"),title:"按系统优先级自动选择搜索来源",children:"自动"}),Fe.map(e=>r.jsx("button",{type:"button",className:`vs-source-filter__option ${k===e.id?"vs-source-filter__option--active":""}`,onClick:()=>ee(e.id),title:`仅使用 ${e.label} 搜索`,children:e.label},e.id))]})]}),l&&le.length>0&&(!c||oe)&&r.jsxs("div",{className:"vs-keyword-quick",children:[r.jsxs("div",{className:"vs-keyword-quick__header",children:[r.jsxs("div",{className:"vs-keyword-quick__header-main",children:[r.jsx("span",{className:"vs-keyword-quick__title",children:c?"课程预设关键词":"课程关键词"}),r.jsx("span",{className:"vs-keyword-quick__hint",children:c?"以下关键词将按课程预设组合参与搜索":"点击即可填入搜索框"})]}),!c&&He&&r.jsx("button",{type:"button",className:"vs-keyword-quick__toggle",onClick:()=>xe(e=>!e),title:Q?"收起多余关键词":"展开更多关键词",children:Q?"收起":`更多 ${g.length-10}`})]}),c?r.jsx("div",{className:"vs-keyword-sections",children:ce.map(e=>r.jsxs("div",{className:"vs-keyword-section",children:[r.jsx("div",{className:"vs-keyword-section__label",children:e.label}),r.jsx("div",{className:"vs-keyword-quick__tags",children:e.items.map((s,a)=>r.jsx("button",{type:"button",className:"vs-keyword-quick__tag vs-keyword-quick__tag--active",title:`课程预设关键词「${s}」`,children:s},`batch-${e.key}-${a}-${s}`))})]},e.key))}):r.jsx("div",{className:"vs-keyword-quick__tags",children:Xe.map((e,s)=>r.jsx("button",{type:"button",className:`vs-keyword-quick__tag ${n===e?"vs-keyword-quick__tag--active":""}`,onClick:()=>{cr(e)},title:`点击搜索「${e}」`,children:e},`quick-${s}-${e}`))})]}),c&&z&&r.jsxs("div",{className:"vs-progress-bar",children:[r.jsxs("div",{className:"vs-progress-info",children:[r.jsxs("span",{children:["正在搜索：",r.jsx("strong",{children:Ge})]}),r.jsxs("span",{className:"vs-progress-stats",children:["已找到 ",Qe," 条"]})]}),r.jsx("div",{className:"vs-progress-track",children:r.jsx("div",{className:"vs-progress-fill",style:{width:`${Oe}%`}})})]}),ve&&r.jsx("div",{className:"vs-message vs-message--error",children:ve}),_e&&r.jsx("div",{className:"vs-message vs-message--success",children:_e}),m.length>0&&r.jsxs("div",{className:"vs-batch-bar",children:[r.jsxs("label",{className:"vs-batch-checkbox",children:[r.jsx("input",{type:"checkbox",checked:y.size===$.length&&$.length>0,onChange:sr}),"全选 (",y.size,"/",$.length,")"]}),r.jsx("span",{className:"vs-batch-spacer"}),r.jsxs("span",{className:"vs-result-count",children:["已显示 ",$.length," / ",m.length," 条"]}),Ue&&r.jsxs("span",{className:"vs-rerank-status",children:[r.jsx(q,{size:14,className:"vd-spinning"}),"智能推荐中"]})]}),r.jsx("div",{className:"vs-results",children:m.length===0?r.jsx("div",{className:"vs-empty",children:S||z?r.jsxs(r.Fragment,{children:[r.jsx(q,{size:20,className:"vd-spinning"})," ",c?"课程搜索中...":"搜索中..."]}):c?"请先选择课程，再执行课程预设搜索":"暂无结果，请在上方输入关键词搜索"}):r.jsx("div",{className:"vs-result-list",children:$.map(e=>{const s=Pe===e.original_url,a=te===e.original_url,i=de(e.original_url),d=a||s||i,K=y.has(e.original_url),U=ir(e.license),pr=Kr(e.recommendation_bucket),qe=H(e),Ae=W(e),Ie=Rr(e),fr=(e.tags||[]).filter(Boolean).slice(0,6),Me=(e.matched_course_points||[]).filter(Boolean).slice(0,3),Ee=(e.risk_flags||[]).filter(Boolean).slice(0,2);return r.jsxs("div",{className:`vs-result-card ${K?"vs-result-card--selected":""}`,children:[r.jsx("div",{className:"vs-result-checkbox",children:r.jsx("input",{type:"checkbox",checked:K,onChange:()=>rr(e.original_url)})}),r.jsx("div",{className:"vs-result-thumb",children:e.thumbnail_url?r.jsx("img",{src:e.thumbnail_url,alt:qe}):r.jsx("div",{className:"vs-result-thumb-placeholder"})}),r.jsxs("div",{className:"vs-result-info",children:[r.jsx("div",{className:"vs-result-title",children:qe}),typeof e.recommendation_score=="number"&&r.jsxs("div",{className:"vs-recommendation-row",children:[r.jsxs("span",{className:"vs-recommendation-badge",style:pr,children:[Tr(e.recommendation_bucket)," ",e.recommendation_score]}),typeof e.quality_score=="number"&&r.jsxs("span",{className:"vs-recommendation-quality",children:["教学质量 ",e.quality_score]})]}),r.jsx("div",{className:"vs-result-url",children:e.original_url}),r.jsxs("div",{className:"vs-result-meta",children:[Ae&&r.jsxs("span",{children:["📺 ",Ae]}),typeof e.duration=="number"&&e.duration>0&&r.jsxs("span",{children:["⏱ ",nr(e.duration)]}),e.uploader&&r.jsxs("span",{children:["👤 ",e.uploader]}),typeof e.view_count=="number"&&r.jsxs("span",{children:["👁 ",De(e.view_count)]}),typeof e.like_count=="number"&&r.jsxs("span",{children:["👍 ",De(e.like_count)]}),e.upload_date&&r.jsxs("span",{children:["📅 ",Lr(e.upload_date)]})]}),e.recommendation_reason&&r.jsxs("div",{className:"vs-recommendation-reason",children:["AI推荐：",e.recommendation_reason]}),Me.length>0&&r.jsxs("div",{className:"vs-recommendation-points",children:["匹配课程点：",Me.join(" / ")]}),Ee.length>0&&r.jsxs("div",{className:"vs-recommendation-risk",children:["注意：",Ee.join(" / ")]}),Ie&&r.jsx("div",{className:"vs-result-desc",children:Ie}),r.jsxs("div",{className:"vs-result-tags",children:[e.license&&U&&r.jsxs("span",{className:"vs-tag",style:{background:U.bg,color:U.color},children:["📄 ",e.license]}),e.categories?.map(P=>r.jsx("span",{className:"vs-tag vs-tag--category",children:P},P)),fr.map(P=>r.jsxs("span",{className:"vs-tag vs-tag--keyword",children:["#",P]},`${e.original_url}-${P}`))]})]}),r.jsxs("div",{className:"vs-result-actions",children:[r.jsxs("button",{className:"vs-action-btn vs-action-btn--primary",onClick:()=>er(e),disabled:d,title:i?"该视频已在下载队列中":"保存并下载到本地",children:[a?r.jsx(q,{size:14,className:"vd-spinning"}):r.jsx(Re,{size:14}),a||i?"下载中":"下载"]}),r.jsxs("button",{className:"vs-action-btn vs-action-btn--secondary",onClick:()=>Ze(e),disabled:s||a||i,title:"仅保存元数据（不下载视频文件）",children:[s?r.jsx(q,{size:14,className:"vd-spinning"}):r.jsx(Ir,{size:14}),s?"保存中":"收藏"]}),r.jsxs("button",{className:"vs-action-btn",onClick:()=>navigator.clipboard.writeText(e.original_url),title:"复制链接",children:[r.jsx(Mr,{size:14}),"复制"]})]})]},e.original_url)})})}),ue&&r.jsx("div",{className:"vs-load-more",children:r.jsxs("button",{type:"button",className:"vs-load-more-btn",onClick:()=>void ar(),disabled:J||S||z,children:[J?r.jsx(q,{size:16,className:"vd-spinning"}):r.jsx(pe,{size:16}),c?`继续阅读并推荐更多 ${Z} 条`:`加载更多 ${Z} 条`]})})]}),r.jsx("style",{children:`
        .vs-sidebar-course-nav {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          border-bottom: 1px solid #e2e8f0;
          background: #ffffff;
        }

        .vs-sidebar-course-nav__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .vs-sidebar-course-nav__title-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .vs-sidebar-course-nav__count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 8px;
          border-radius: 999px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 600;
        }

        .vs-sidebar-course-nav__list {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vs-sidebar-course-nav__group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vs-sidebar-course-nav__group-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #dbeafe;
          background: #f8fbff;
          color: #1e3a8a;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-sidebar-course-nav__group-toggle:hover {
          background: #eff6ff;
          border-color: #93c5fd;
        }

        .vs-sidebar-course-nav__group-toggle--active {
          background: #dbeafe;
          border-color: #93c5fd;
        }

        .vs-sidebar-course-nav__group-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .vs-sidebar-course-nav__group-arrow--expanded {
          transform: rotate(90deg);
        }

        .vs-sidebar-course-nav__group-label {
          flex: 1;
          text-align: left;
          min-width: 0;
        }

        .vs-sidebar-course-nav__group-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          height: 22px;
          padding: 0 6px;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.12);
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .vs-sidebar-course-nav__group-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-left: 10px;
        }

        .vs-sidebar-course-nav__item {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #0f172a;
          font-size: 13px;
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .vs-sidebar-course-nav__item:hover {
          border-color: #bfdbfe;
          background: #f8fbff;
        }

        .vs-sidebar-course-nav__item--active {
          border-color: #93c5fd;
          background: #eff6ff;
          color: #1d4ed8;
          font-weight: 600;
        }

        /* ── 视频搜索页内容区 ── */
        .vs-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          height: 100%;
          min-width: 0;
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
          border: 1px solid #dbeafe;
          background: #f8fbff;
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
          color: #1e3a8a;
        }

        .vs-course-query-box__toggle {
          border: 1px solid #bfdbfe;
          background: #ffffff;
          color: #1d4ed8;
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .vs-course-query-box__toggle:hover {
          background: #dbeafe;
        }

        .vs-course-query-box__value {
          font-size: 14px;
          color: #0f172a;
          line-height: 1.5;
          word-break: break-word;
        }

        .vs-course-query-box__value--empty {
          color: #94a3b8;
        }

        .vs-source-filter {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #dbeafe;
          background: #f8fbff;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }

        .vs-source-filter__label {
          font-size: 13px;
          font-weight: 600;
          color: #1e3a8a;
        }

        .vs-source-filter__options {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vs-source-filter__option {
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #ffffff;
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-source-filter__option:hover {
          background: #dbeafe;
        }

        .vs-source-filter__option--active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .vs-keyword-quick {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #dbeafe;
          background: linear-gradient(135deg, #f8fbff 0%, #eff6ff 100%);
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
          color: #1e3a8a;
        }

        .vs-keyword-quick__hint {
          font-size: 12px;
          color: #64748b;
        }

        .vs-keyword-quick__toggle {
          border: 1px solid #bfdbfe;
          background: #ffffff;
          color: #1d4ed8;
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .vs-keyword-quick__toggle:hover {
          background: #dbeafe;
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
          color: #475569;
        }

        .vs-keyword-quick__tag {
          padding: 7px 12px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #ffffff;
          color: #1d4ed8;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-keyword-quick__tag:hover {
          background: #dbeafe;
        }

        .vs-keyword-quick__tag--active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
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
          background: #3b82f6;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.28);
        }

        .vs-search-action--primary:hover:not(:disabled) {
          background: #2563eb;
        }

        .vs-search-action--danger {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .vs-search-action--danger:hover {
          background: #fecaca;
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
          background: linear-gradient(135deg, #eff6ff, #f0f9ff);
          border-radius: 10px;
          border: 1px solid #93c5fd;
          flex-shrink: 0;
        }

        .vs-progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .vs-progress-stats {
          color: var(--cg-text-muted, #64748b);
          font-size: 12px;
        }

        .vs-progress-track {
          background: #e2e8f0;
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
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fca5a5;
        }

        .vs-message--success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }

        /* 批量操作栏 */
        .vs-batch-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: var(--cg-bg-secondary, #f8fafc);
          border-radius: 8px;
          border: 1px solid var(--cg-border, #e2e8f0);
          flex-shrink: 0;
        }

        .vs-batch-checkbox {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
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
          color: var(--cg-text-muted, #64748b);
        }

        .vs-rerank-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #2563eb;
          white-space: nowrap;
        }

        /* 空状态 */
        .vs-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--cg-text-muted, #94a3b8);
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
          background: white;
          border-radius: 10px;
          border: 1px solid var(--cg-border, #e2e8f0);
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .vs-result-card:hover {
          border-color: #c7d2fe;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
        }

        .vs-result-card--selected {
          border-color: var(--cg-primary, #3b82f6) !important;
          background: #f8faff;
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
          border: 1px solid var(--cg-border, #e2e8f0);
        }

        .vs-result-thumb-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          border-radius: 8px;
          border: 1px solid var(--cg-border, #e2e8f0);
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
          color: #475569;
        }

        .vs-result-url {
          font-size: 11px;
          color: var(--cg-text-muted, #94a3b8);
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
          color: #0f172a;
        }

        .vs-recommendation-points {
          color: #1d4ed8;
        }

        .vs-recommendation-risk {
          color: #b45309;
        }

        .vs-result-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 12px;
          color: var(--cg-text-muted, #64748b);
          margin-bottom: 6px;
        }

        .vs-result-desc {
          font-size: 12px;
          line-height: 1.55;
          color: var(--cg-text-secondary, #475569);
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
          background: #f3e8ff;
          color: #6b21a8;
        }

        .vs-tag--keyword {
          background: #eff6ff;
          color: #1d4ed8;
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
          border: 1px solid var(--cg-border, #e2e8f0);
          background: white;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .vs-action-btn:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #c7d2fe;
        }

        .vs-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .vs-action-btn--primary {
          background: var(--cg-primary, #3b82f6);
          color: white;
          border-color: var(--cg-primary, #3b82f6);
        }

        .vs-action-btn--primary:hover:not(:disabled) {
          background: #2563eb;
          border-color: #2563eb;
        }

        .vs-action-btn--primary:disabled {
          background: #cbd5e1;
          color: #475569;
          border-color: #cbd5e1;
          box-shadow: none;
        }

        .vs-action-btn--secondary {
          background: #f0f9ff;
          color: #0369a1;
          border-color: #bae6fd;
        }

        .vs-action-btn--secondary:hover:not(:disabled) {
          background: #e0f2fe;
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
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vs-load-more-btn:hover:not(:disabled) {
          background: #dbeafe;
          border-color: #93c5fd;
        }

        .vs-load-more-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── 右侧关键词侧边栏 ── */
        .vs-keyword-sidebar {
          width: 280px;
          min-width: 240px;
          flex-shrink: 0;
          background: #fafbfc;
          border-left: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .vs-keyword-sidebar__header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          border-bottom: 1px solid #e2e8f0;
          height: 48px;
          box-sizing: border-box;
          flex-shrink: 0;
          background: white;
        }

        .vs-keyword-sidebar__header svg {
          color: #6366f1;
          flex-shrink: 0;
        }

        .vs-keyword-sidebar__title {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #1e293b;
          flex: 1;
        }

        .vs-keyword-sidebar__count {
          padding: 2px 8px;
          background: linear-gradient(135deg, #eef2ff, #e0e7ff);
          color: #4f46e5;
          border-radius: 10px;
          font-size: 0.6875rem;
          font-weight: 700;
          min-width: 20px;
          text-align: center;
        }

        .vs-keyword-sidebar__empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #94a3b8;
          padding: 32px 20px;
          text-align: center;
        }

        .vs-keyword-sidebar__empty svg {
          color: #cbd5e1;
          margin-bottom: 4px;
        }

        .vs-keyword-sidebar__empty p {
          margin: 0;
          font-size: 0.8125rem;
          line-height: 1.5;
        }

        .vs-keyword-sidebar__course-name {
          padding: 10px 16px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #4f46e5;
          background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%);
          border-bottom: 1px solid #e2e8f0;
          flex-shrink: 0;
          line-height: 1.4;
        }

        .vs-keyword-sidebar__list {
          flex: 1;
          overflow-y: auto;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .vs-keyword-sidebar__list::-webkit-scrollbar {
          width: 4px;
        }
        .vs-keyword-sidebar__list::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 2px;
        }

        .vs-preset-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vs-preset-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px;
          border: 1px solid var(--cg-border, #e2e8f0);
          border-radius: 10px;
          background: white;
        }

        .vs-preset-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .vs-preset-card__title {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--cg-text, #0f172a);
        }

        .vs-preset-card__apply {
          border: none;
          border-radius: 999px;
          padding: 4px 10px;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #1d4ed8;
          background: #dbeafe;
          cursor: pointer;
        }

        .vs-preset-card__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.6875rem;
          color: #64748b;
        }

        .vs-preset-card__sources {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .vs-preset-source-tag {
          display: inline-flex;
          align-items: center;
          padding: 2px 8px;
          border-radius: 999px;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 0.6875rem;
          font-weight: 500;
        }

        /* ── 关键词分组 ── */
        .vs-keyword-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vs-keyword-group__label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #94a3b8;
          padding: 0 2px;
        }

        .vs-keyword-group__label svg {
          flex-shrink: 0;
        }

        .vs-keyword-group__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        /* ── 关键词标签 ── */
        .vs-keyword-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
          background: white;
          color: #475569;
          cursor: pointer;
          transition: all 0.18s ease;
          line-height: 1.3;
          text-align: left;
        }

        .vs-keyword-tag:hover {
          background: #eef2ff;
          border-color: #c7d2fe;
          color: #4338ca;
          box-shadow: 0 1px 3px rgba(99, 102, 241, 0.12);
          transform: translateY(-1px);
        }

        .vs-keyword-tag--title {
          background: #f5f3ff;
          border-color: #ddd6fe;
          color: #6d28d9;
          font-weight: 600;
        }

        .vs-keyword-tag--unit {
          background: #f0fdf4;
          border-color: #bbf7d0;
          color: #166534;
          font-size: 0.6875rem;
        }

        .vs-keyword-tag--preset {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #1d4ed8;
        }

        .vs-keyword-tag--active {
          background: linear-gradient(135deg, #6366f1, #4f46e5) !important;
          border-color: #4338ca !important;
          color: white !important;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
        }

        .vs-keyword-tag--active:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca) !important;
          color: white !important;
          transform: translateY(-1px);
        }

        .vs-keyword-sidebar__hint {
          padding: 10px 16px;
          font-size: 0.6875rem;
          color: #94a3b8;
          border-top: 1px solid #f1f5f9;
          text-align: center;
          flex-shrink: 0;
          background: white;
        }

        @media (max-width: 1024px) {
          .vs-keyword-sidebar {
            display: none;
          }
        }
      `})]})}export{Ts as VideoSearchPage};
