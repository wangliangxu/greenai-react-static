import{r as t,j as r}from"./react-vendor-DZdvhec1.js";import{a as yr}from"./vendor-axios-B9ygI19o.js";import{a as kr,ad as wr,c as _r}from"./index-CO7uzfl_.js";import{v as jr,w as Sr,x as Nr,y as Cr,z as Te,A as zr,B as $r,C as qr}from"./admin-media-DPJYtpHG.js";/* empty css                   *//* empty css                        */import{C as Ar}from"./CourseNavigationSidebar-Bfze_oco.js";import{A as Ir,T as V,a as Mr}from"./AdminToolbar-CJGy2wW-.js";import{T as Er}from"./ToolbarSelect-CkkfYHLH.js";import{A as Br}from"./AdminPageLayout-C-3xdruj.js";import{A as Lr,x as De,w as ge,bo as Rr,v as I,a9 as Ke,X as Tr,b$ as Dr,a7 as Kr}from"./ui-vendor-DNckc4hb.js";import{useNavigate as Pr,useLocation as Ur,useSearchParams as Fr}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./query-vendor-CyHNoBeC.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";function H(a){const u=a.title?.trim();if(u)return u;try{const c=new URL(a.original_url),_=c.pathname.split("/").filter(Boolean).pop();return _?`${a.source||c.hostname}-${_}`:`${a.source||c.hostname}-video`}catch{return a.original_url||"网络视频"}}function O(a,u){if(yr.isAxiosError(a)){const c=a.response?.data?.detail;if(typeof c=="string"&&c.trim())return c;if(a.message)return a.message}return a instanceof Error&&a.message?a.message:u}function Z(a){const u=[a.source_label,a.extractor_key,a.source];for(const c of u){const _=c?.trim();if(_)return _}return"网络来源"}function Vr(a){const u=a?.trim();if(!u)return"";const c=u.replace(/-/g,"");return/^\d{8}$/.test(c)?`${c.slice(0,4)}-${c.slice(4,6)}-${c.slice(6,8)}`:u}function Pe(a){return typeof a!="number"||Number.isNaN(a)||a<0?"":a>=1e8?`${(a/1e8).toFixed(a>=1e9?1:2).replace(/\.0$/,"")}亿`:a>=1e4?`${(a/1e4).toFixed(a>=1e5?1:2).replace(/\.0$/,"")}万`:a.toLocaleString()}function Or(a){return(a.description||"").replace(/\s+/g," ").trim()}function T(a){return a.trim().replace(/\/+$/,"")}function Gr(a){const u=new Set;for(const c of a)c.status!=="pending"&&c.status!=="processing"||(c.url&&u.add(T(c.url)),c.normalized_url&&u.add(T(c.normalized_url)));return u}function he(a){return{borderRadius:10,background:a?"var(--admin-bg, #ffffff)":"transparent",color:a?"var(--admin-primary, #2563eb)":"var(--admin-text-secondary, #475569)",boxShadow:a?"var(--admin-shadow-sm, 0 1px 3px rgba(15, 23, 42, 0.10))":"none",fontWeight:a?600:500}}function Qr(a){return a==="high"?"高度匹配":a==="medium"?"建议参考":a==="low"?"低相关":"待评估"}function Jr(a){return a==="high"?{background:"var(--admin-success-light, #dcfce7)",color:"var(--admin-success, #166534)"}:a==="medium"?{background:"var(--admin-primary-light, #dbeafe)",color:"var(--admin-primary, #1d4ed8)"}:a==="low"?{background:"var(--admin-warning-light, #fef3c7)",color:"var(--admin-warning, #92400e)"}:{background:"var(--admin-bg-secondary, #e5e7eb)",color:"var(--admin-text-muted, #374151)"}}const Wr=["basics","intermediate","advanced"],G=30,ee=10,Ue=100,Xr={basics:"认知与启蒙",intermediate:"方法与工具",advanced:"实践与探究"};function Qs(){const a=Pr(),u=Ur(),c=u.pathname.startsWith("/teacher")?"/teacher/videos":"/admin/videos",[_]=Fr(),[j,re]=t.useState(""),[S,se]=t.useState("auto"),[D,ae]=t.useState(G),[k,Q]=t.useState(G),[i,ve]=t.useState(""),[te,oe]=t.useState("basics"),[J,xe]=t.useState(!1),[ne,W]=t.useState(!0),[v,M]=t.useState([]),[h,N]=t.useState([]),[C,be]=t.useState(!1),[X,ye]=t.useState(!1),[Fe,ke]=t.useState(!1),[we,m]=t.useState(""),[Ve,_e]=t.useState(""),[ie,je]=t.useState(""),[Se,g]=t.useState(""),[Ne,ce]=t.useState(new Set),[Ce,E]=t.useState(""),[y,z]=t.useState(new Set),[K,ze]=t.useState(!1),[Oe,Ge]=t.useState([]),[$,Y]=t.useState(!1),[Qe,de]=t.useState(0),[Je,$e]=t.useState(""),[We,qe]=t.useState(0),[Xe,Ye]=t.useState(null),He=u.pathname.startsWith("/teacher"),{data:Ze}=kr(),{data:er}=wr(),p=He?er:Ze,{data:x}=_r(i||void 0),le=_.get("entry"),d=le==="course",w=t.useMemo(()=>{if(!x)return{title:[],keywords:[],units:[]};const e=[],s=[],o=[];if(x.title&&e.push(x.title),x.keywords&&Array.isArray(x.keywords)&&s.push(...x.keywords),x.units&&Array.isArray(x.units))for(const n of x.units)n.title&&o.push(n.title);return{title:[...new Set(e)],keywords:[...new Set(s)],units:[...new Set(o)]}},[x]),ue=t.useMemo(()=>[...w.title,...w.keywords,...w.units],[w]),f=t.useMemo(()=>[...new Set(ue.map(e=>e.trim()).filter(Boolean))],[ue]),rr=t.useMemo(()=>J?f:f.slice(0,10),[f,J]),sr=f.length>10,me=t.useMemo(()=>[{key:"title",label:"课程名称",items:w.title},{key:"keywords",label:"课程关键词",items:w.keywords},{key:"units",label:"章节标题",items:w.units}].filter(e=>e.items.length>0),[w]),ar=t.useMemo(()=>f.length===0?"当前课程暂无可用的预设关键词":`将按当前课程预设组合执行搜索：${me.map(s=>`${s.label} ${s.items.length} 个`).join(" / ")}，共 ${f.length} 个关键词`,[me,f.length]),b=t.useMemo(()=>{const e=new Map;for(const s of Wr)e.set(s,[]);for(const s of p||[]){const o=e.has(s.category)?s.category:"other",n=e.get(o)||[];n.push({id:s.id,title:s.title}),e.set(o,n)}return e.has("other")&&e.get("other")?.length===0&&e.delete("other"),Array.from(e.entries()).filter(([,s])=>s.length>0).map(([s,o])=>({key:s,label:Xr[s]||"其他课程",items:o}))},[p]);t.useEffect(()=>{if(!i||!p)return;const e=p.find(s=>s.id===i);e&&!d&&re(e.title)},[i,p,d]),t.useEffect(()=>{xe(!1)},[i]),t.useEffect(()=>{if(!i||!p){b.length>0&&oe(o=>b.some(n=>n.key===o)?o:b[0].key);return}const e=p.find(o=>o.id===i);if(!e)return;const s=b.some(o=>o.key===e.category)?e.category:"other";oe(s)},[b,p,i]),t.useEffect(()=>{jr().then(e=>Ge(e.sources||[])).catch(()=>{})},[]);const q=t.useCallback(async()=>{try{const e=await Sr({limit:200});ce(Gr(e.items||[]))}catch{}},[]);t.useEffect(()=>{q()},[q]),t.useEffect(()=>{if(h.length===0&&!ie&&!K)return;q();const e=window.setInterval(()=>{q()},5e3);return()=>window.clearInterval(e)},[ie,K,h.length,q]);const B=t.useMemo(()=>j.trim().length>=2,[j]),pe=t.useCallback(e=>Ne.has(T(e)),[Ne]),A=t.useMemo(()=>d?h.slice(0,k):h,[d,h,k]),fe=t.useMemo(()=>d?v.length>k:B&&h.length>=D&&D<Ue,[B,d,h.length,v.length,D,k]),L=t.useMemo(()=>!i||v.length===0?[]:v.slice(0,Math.min(k,v.length)),[v,i,k]),R=t.useMemo(()=>{if(!i||L.length===0)return"";const e=L.map(s=>T(s.original_url)).sort().join("|");return`${i}|${k}|${e}`},[L,i,k]);t.useEffect(()=>{if(!i||C||$||!R||R===Ce)return;let e=!1;return ke(!0),Nr(i,L).then(s=>{if(e||!s.success)return;const o=s.items||[];if(o.length===0){E(R);return}const n=v.slice(L.length);N([...o,...n]),E(R)}).catch(()=>{e||E(R)}).finally(()=>{e||ke(!1)}),()=>{e=!0}},[$,C,Ce,v,L,R,i]);const Ae=async()=>{if(m(""),g(""),z(new Set),!B){m("请输入至少2个字符的关键词");return}const e=G;ae(e),Q(e),E(""),be(!0);try{const s=await Te(j.trim(),e,S);if(!s.success)M([]),N([]),m(s.error||"搜索失败");else{const o=s.items||[];M(o),N(o),s.error&&g(s.error)}}catch(s){M([]),N([]),m(O(s,"搜索失败"))}finally{be(!1)}},tr=async e=>{if(e.original_url){_e(e.original_url),m(""),g("");try{const s=await qr({title:H(e),original_url:e.original_url,source:e.source,source_label:Z(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});g(s.message||"已保存")}catch(s){m(O(s,"保存失败"))}finally{_e("")}}},or=async e=>{if(e.original_url){if(pe(e.original_url)){g("该视频已在下载队列中");return}je(e.original_url),m(""),g("");try{const s=await $r({title:H(e),original_url:e.original_url,source:e.source,source_label:Z(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});ce(o=>{const n=new Set(o);return n.add(T(e.original_url)),n}),q(),g(s.message||"已创建下载任务")}catch(s){m(O(s,"下载失败"))}finally{je("")}}},nr=e=>{z(s=>{const o=new Set(s);return o.has(e)?o.delete(e):o.add(e),o})},ir=()=>{y.size===A.length?z(new Set):z(new Set(A.map(e=>e.original_url)))},cr=async()=>{if(y.size===0)return;const s=h.filter(o=>y.has(o.original_url)).filter(o=>!pe(o.original_url));if(s.length===0){g("所选视频已在下载队列中");return}ze(!0),m(""),g("");try{const o=s.map(l=>({title:H(l),original_url:l.original_url,source:l.source,source_label:Z(l),thumbnail_url:l.thumbnail_url,duration:l.duration,uploader:l.uploader,upload_date:l.upload_date,view_count:l.view_count,like_count:l.like_count,description:l.description,license:l.license,categories:l.categories,tags:l.tags,channel_url:l.channel_url,channel_id:l.channel_id})),n=await zr(o);ce(l=>{const P=new Set(l);for(const U of s)P.add(T(U.original_url));return P}),q(),g(`批量下载：${n.created} 个任务已创建，${n.skipped} 个跳过，${n.failed} 个失败`),z(new Set)}catch(o){m(O(o,"批量下载失败"))}finally{ze(!1)}},dr=t.useCallback(()=>{if(!i){m("请先选择课程后再执行课程搜索");return}if(f.length===0){m("当前课程暂无可用于课程搜索的关键词");return}Y(!0),de(0),$e(""),qe(0),W(!1),Q(G),ae(G),M([]),N([]),z(new Set),m(""),g(""),E("");const e=Cr({keywords:f,limit_per_keyword:5,source:"auto"},s=>{if(s.type==="progress")de(s.percent||0),$e(s.keyword||"");else if(s.type==="result"&&s.items){const o=s.items||[];qe(n=>n+(s.count||0)),M(n=>[...n,...o]),N(n=>[...n,...o])}else s.type==="done"?(Y(!1),de(100),g(`批量搜索完成！共搜索 ${s.total_keywords} 个关键词，发现 ${s.total_unique} 条独立结果`)):s.type==="error"&&(Y(!1),m(s.message||"批量搜索失败"))});Ye(e)},[f,i]),lr=t.useCallback(async()=>{if(d){Q(s=>Math.min(s+ee,v.length));return}if(!B||X||!fe)return;const e=Math.min(D+ee,Ue);ye(!0),m("");try{const s=await Te(j.trim(),e,S);if(!s.success){m(s.error||"加载更多失败");return}const o=s.items||[];ae(e),Q(e),M(o),N(o),E("")}catch(s){m(O(s,"加载更多失败"))}finally{ye(!1)}},[fe,B,d,X,j,v.length,D,S]);t.useEffect(()=>{le==="course"&&(S!=="auto"&&se("auto"),!(!p||p.length===0)&&(!i||!p.some(e=>e.id===i))&&ve(p[0].id))},[p,le,i,S]),t.useEffect(()=>{if(!d){W(!0);return}W(!0)},[d,i]);const ur=e=>{if(!e||e<=0)return"";const s=Math.floor(e/60),o=e%60;return s>=60?`${Math.floor(s/60)}:${(s%60).toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`:`${s}:${o.toString().padStart(2,"0")}`},mr=e=>{if(!e)return null;const s=e.toLowerCase();return s.includes("cc0")||s.includes("public domain")?{bg:"var(--admin-success-light, #d1fae5)",color:"var(--admin-success, #065f46)"}:s.includes("cc-by")||s.includes("creative commons")?{bg:"var(--admin-primary-light, #dbeafe)",color:"var(--admin-primary, #1e40af)"}:{bg:"var(--admin-bg-secondary, #f3f4f6)",color:"var(--admin-text-muted, #374151)"}},Ie=y.size>0,pr=r.jsx(Ir,{selection:Ie?{isSelectMode:!0,selectedCount:y.size,onCancel:()=>z(new Set),actions:r.jsx(r.Fragment,{children:r.jsx(V,{icon:K?r.jsx(I,{size:18,className:"vd-spinning"}):r.jsx(Ke,{size:18}),variant:"primary",onClick:cr,disabled:K,children:K?"下载中...":`批量下载 (${y.size})`})})}:void 0,leftActions:Ie?void 0:r.jsxs(r.Fragment,{children:[r.jsx(V,{icon:r.jsx(Lr,{size:18}),onClick:()=>a(c),title:"返回视频目录",children:"返回"}),r.jsx(Mr,{}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,padding:4,borderRadius:14,background:"var(--admin-bg-secondary, #f1f5f9)",border:"1px solid var(--admin-border, #e2e8f0)"},children:[r.jsx(V,{icon:r.jsx(De,{size:18}),onClick:()=>a(`${c}/search`),title:"切换到普通搜索",style:he(!d),children:"普通搜索"}),r.jsx(V,{icon:r.jsx(ge,{size:18}),onClick:()=>a(`${c}/search?entry=course`),title:"切换到课程搜索",style:he(d),children:"课程搜索"}),r.jsx(V,{icon:r.jsx(Rr,{size:18}),onClick:()=>a(`${c}/import`),title:"切换到从链接导入",style:he(!1),children:"从链接导入"})]})]}),rightActions:void 0}),fr=e=>{re(e)},gr=e=>{ve(e)},hr=t.useMemo(()=>{if(i&&p){const e=p.find(s=>s.id===i);if(e)return e.category}return b.length>0&&!b.some(e=>e.key===te)?b[0].key:te},[i,p,b,te]),vr=r.jsx(Ar,{className:"vs-keyword-sidebar",groups:b,totalCount:p?.length||0,expandedGroupKey:hr,selectedCourseId:i,onToggleGroup:oe,onSelectCourse:gr});return r.jsxs(Br,{toolbar:pr,sidebar:vr,children:[r.jsxs("div",{className:"vs-content",children:[r.jsx("div",{className:"vs-search-bar",children:d?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"vs-course-query-box",children:[r.jsxs("div",{className:"vs-course-query-box__header",children:[r.jsx("div",{className:"vs-course-query-box__label",children:"课程预设组合"}),r.jsx("button",{type:"button",className:"vs-course-query-box__toggle",onClick:()=>W(e=>!e),title:ne?"收起课程预设关键词":"展开课程预设关键词",children:ne?"收起":"展开"})]}),r.jsx("div",{className:`vs-course-query-box__value ${f.length===0?"vs-course-query-box__value--empty":""}`,children:ar})]}),!$&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:dr,disabled:f.length===0,title:"按当前课程预设组合执行搜索",children:[r.jsx(ge,{size:16}),r.jsx("span",{children:"搜索"})]}),$&&r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--danger",onClick:()=>{Xe?.abort(),Y(!1)},title:"停止当前搜索任务",children:[r.jsx(Tr,{size:16}),r.jsx("span",{children:"停止"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(Er,{value:j,onChange:re,onSubmit:Ae,placeholder:"输入关键词，例如：climate change / 温室效应 / 海平面",historyKey:"video_search_history"}),r.jsxs("button",{type:"button",className:"vs-search-action vs-search-action--primary",onClick:Ae,disabled:C||!B,title:"使用当前输入的关键词执行普通搜索",children:[C?r.jsx(I,{size:16,className:"vd-spinning"}):r.jsx(De,{size:16}),r.jsx("span",{children:C?"搜索中...":"开始搜索"})]})]})}),!d&&r.jsxs("div",{className:"vs-source-filter",children:[r.jsx("div",{className:"vs-source-filter__label",children:"搜索来源"}),r.jsxs("div",{className:"vs-source-filter__options",children:[r.jsx("button",{type:"button",className:`vs-source-filter__option ${S==="auto"?"vs-source-filter__option--active":""}`,onClick:()=>se("auto"),title:"按系统优先级自动选择搜索来源",children:"自动"}),Oe.map(e=>r.jsx("button",{type:"button",className:`vs-source-filter__option ${S===e.id?"vs-source-filter__option--active":""}`,onClick:()=>se(e.id),title:`仅使用 ${e.label} 搜索`,children:e.label},e.id))]})]}),i&&ue.length>0&&(!d||ne)&&r.jsxs("div",{className:"vs-keyword-quick",children:[r.jsxs("div",{className:"vs-keyword-quick__header",children:[r.jsxs("div",{className:"vs-keyword-quick__header-main",children:[r.jsx("span",{className:"vs-keyword-quick__title",children:d?"课程预设关键词":"课程关键词"}),r.jsx("span",{className:"vs-keyword-quick__hint",children:d?"以下关键词将按课程预设组合参与搜索":"点击即可填入搜索框"})]}),!d&&sr&&r.jsx("button",{type:"button",className:"vs-keyword-quick__toggle",onClick:()=>xe(e=>!e),title:J?"收起多余关键词":"展开更多关键词",children:J?"收起":`更多 ${f.length-10}`})]}),d?r.jsx("div",{className:"vs-keyword-sections",children:me.map(e=>r.jsxs("div",{className:"vs-keyword-section",children:[r.jsx("div",{className:"vs-keyword-section__label",children:e.label}),r.jsx("div",{className:"vs-keyword-quick__tags",children:e.items.map((s,o)=>r.jsx("button",{type:"button",className:"vs-keyword-quick__tag vs-keyword-quick__tag--active",title:`课程预设关键词「${s}」`,children:s},`batch-${e.key}-${o}-${s}`))})]},e.key))}):r.jsx("div",{className:"vs-keyword-quick__tags",children:rr.map((e,s)=>r.jsx("button",{type:"button",className:`vs-keyword-quick__tag ${j===e?"vs-keyword-quick__tag--active":""}`,onClick:()=>{fr(e)},title:`点击搜索「${e}」`,children:e},`quick-${s}-${e}`))})]}),d&&$&&r.jsxs("div",{className:"vs-progress-bar",children:[r.jsxs("div",{className:"vs-progress-info",children:[r.jsxs("span",{children:["正在搜索：",r.jsx("strong",{children:Je})]}),r.jsxs("span",{className:"vs-progress-stats",children:["已找到 ",We," 条"]})]}),r.jsx("div",{className:"vs-progress-track",children:r.jsx("div",{className:"vs-progress-fill",style:{width:`${Qe}%`}})})]}),we&&r.jsx("div",{className:"vs-message vs-message--error",children:we}),Se&&r.jsx("div",{className:"vs-message vs-message--success",children:Se}),h.length>0&&r.jsxs("div",{className:"vs-batch-bar",children:[r.jsxs("label",{className:"vs-batch-checkbox",children:[r.jsx("input",{type:"checkbox",checked:y.size===A.length&&A.length>0,onChange:ir}),"全选 (",y.size,"/",A.length,")"]}),r.jsx("span",{className:"vs-batch-spacer"}),r.jsxs("span",{className:"vs-result-count",children:["已显示 ",A.length," / ",h.length," 条"]}),Fe&&r.jsxs("span",{className:"vs-rerank-status",children:[r.jsx(I,{size:14,className:"vd-spinning"}),"智能推荐中"]})]}),r.jsx("div",{className:"vs-results",children:h.length===0?r.jsx("div",{className:"vs-empty",children:C||$?r.jsxs(r.Fragment,{children:[r.jsx(I,{size:20,className:"vd-spinning"})," ",d?"课程搜索中...":"搜索中..."]}):d?"请先选择课程，再执行课程预设搜索":"暂无结果，请在上方输入关键词搜索"}):r.jsx("div",{className:"vs-result-list",children:A.map(e=>{const s=Ve===e.original_url,o=ie===e.original_url,n=pe(e.original_url),l=o||s||n,P=y.has(e.original_url),U=mr(e.license),xr=Jr(e.recommendation_bucket),Me=H(e),Ee=Z(e),Be=Or(e),br=(e.tags||[]).filter(Boolean).slice(0,6),Le=(e.matched_course_points||[]).filter(Boolean).slice(0,3),Re=(e.risk_flags||[]).filter(Boolean).slice(0,2);return r.jsxs("div",{className:`vs-result-card ${P?"vs-result-card--selected":""}`,children:[r.jsx("div",{className:"vs-result-checkbox",children:r.jsx("input",{type:"checkbox",checked:P,onChange:()=>nr(e.original_url)})}),r.jsx("div",{className:"vs-result-thumb",children:e.thumbnail_url?r.jsx("img",{src:e.thumbnail_url,alt:Me}):r.jsx("div",{className:"vs-result-thumb-placeholder"})}),r.jsxs("div",{className:"vs-result-info",children:[r.jsx("div",{className:"vs-result-title",children:Me}),typeof e.recommendation_score=="number"&&r.jsxs("div",{className:"vs-recommendation-row",children:[r.jsxs("span",{className:"vs-recommendation-badge",style:xr,children:[Qr(e.recommendation_bucket)," ",e.recommendation_score]}),typeof e.quality_score=="number"&&r.jsxs("span",{className:"vs-recommendation-quality",children:["教学质量 ",e.quality_score]})]}),r.jsx("div",{className:"vs-result-url",children:e.original_url}),r.jsxs("div",{className:"vs-result-meta",children:[Ee&&r.jsxs("span",{children:["📺 ",Ee]}),typeof e.duration=="number"&&e.duration>0&&r.jsxs("span",{children:["⏱ ",ur(e.duration)]}),e.uploader&&r.jsxs("span",{children:["👤 ",e.uploader]}),typeof e.view_count=="number"&&r.jsxs("span",{children:["👁 ",Pe(e.view_count)]}),typeof e.like_count=="number"&&r.jsxs("span",{children:["👍 ",Pe(e.like_count)]}),e.upload_date&&r.jsxs("span",{children:["📅 ",Vr(e.upload_date)]})]}),e.recommendation_reason&&r.jsxs("div",{className:"vs-recommendation-reason",children:["AI推荐：",e.recommendation_reason]}),Le.length>0&&r.jsxs("div",{className:"vs-recommendation-points",children:["匹配课程点：",Le.join(" / ")]}),Re.length>0&&r.jsxs("div",{className:"vs-recommendation-risk",children:["注意：",Re.join(" / ")]}),Be&&r.jsx("div",{className:"vs-result-desc",children:Be}),r.jsxs("div",{className:"vs-result-tags",children:[e.license&&U&&r.jsxs("span",{className:"vs-tag",style:{background:U.bg,color:U.color},children:["📄 ",e.license]}),e.categories?.map(F=>r.jsx("span",{className:"vs-tag vs-tag--category",children:F},F)),br.map(F=>r.jsxs("span",{className:"vs-tag vs-tag--keyword",children:["#",F]},`${e.original_url}-${F}`))]})]}),r.jsxs("div",{className:"vs-result-actions",children:[r.jsxs("button",{className:"vs-action-btn vs-action-btn--primary",onClick:()=>or(e),disabled:l,title:n?"该视频已在下载队列中":"保存并下载到本地",children:[o?r.jsx(I,{size:14,className:"vd-spinning"}):r.jsx(Ke,{size:14}),o||n?"下载中":"下载"]}),r.jsxs("button",{className:"vs-action-btn vs-action-btn--secondary",onClick:()=>tr(e),disabled:s||o||n,title:"仅保存元数据（不下载视频文件）",children:[s?r.jsx(I,{size:14,className:"vd-spinning"}):r.jsx(Dr,{size:14}),s?"保存中":"收藏"]}),r.jsxs("button",{className:"vs-action-btn",onClick:()=>navigator.clipboard.writeText(e.original_url),title:"复制链接",children:[r.jsx(Kr,{size:14}),"复制"]})]})]},e.original_url)})})}),fe&&r.jsx("div",{className:"vs-load-more",children:r.jsxs("button",{type:"button",className:"vs-load-more-btn",onClick:()=>void lr(),disabled:X||C||$,children:[X?r.jsx(I,{size:16,className:"vd-spinning"}):r.jsx(ge,{size:16}),d?`继续阅读并推荐更多 ${ee} 条`:`加载更多 ${ee} 条`]})})]}),r.jsx("style",{children:`
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
      `})]})}export{Qs as VideoSearchPage};
