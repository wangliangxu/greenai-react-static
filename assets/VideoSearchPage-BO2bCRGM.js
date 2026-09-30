import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,m as ee,u as i}from"./router-vendor-L3Bq1iQd.js";import{t as a}from"./vendor-axios-BvVu_ug-.js";import{Dt as o,Hr as te,Ri as ne,Sn as s,ca as re,gt as c,jn as ie,o as ae,qr as oe}from"./ui-vendor-DRemX-fT.js";import{ht as se,qt as l,yt as ce}from"./index-Dd165VW7.js";/* empty css                   */import{n as u,r as le,t as ue}from"./AdminToolbar--r4F70Nm.js";import{r as de}from"./Toolbar-nijkmpni.js";import{t as fe}from"./AdminPageLayout-BYQNl95N.js";import"./Layout-BYvT_ga5.js";/* empty css                        */import{A as pe,D as me,O as he,T as ge,_ as _e,k as ve,n as ye,v as be}from"./admin-media-avVPWqPX.js";import"./adminQueries-C-W6N3Cr.js";import{t as xe}from"./CourseNavigationSidebar-wlVeDMvV.js";var d=e(t(),1),f=n();function p(e){let t=e.title?.trim();if(t)return t;try{let t=new URL(e.original_url),n=t.pathname.split(`/`).filter(Boolean).pop();return n?`${e.source||t.hostname}-${n}`:`${e.source||t.hostname}-video`}catch{return e.original_url||`网络视频`}}function m(e,t){if(a.isAxiosError(e)){let t=e.response?.data?.detail;if(typeof t==`string`&&t.trim())return t;if(e.message)return e.message}return e instanceof Error&&e.message?e.message:t}function h(e){let t=[e.source_label,e.extractor_key,e.source];for(let e of t){let t=e?.trim();if(t)return t}return`网络来源`}function Se(e){let t=e?.trim();if(!t)return``;let n=t.replace(/-/g,``);return/^\d{8}$/.test(n)?`${n.slice(0,4)}-${n.slice(4,6)}-${n.slice(6,8)}`:t}function Ce(e){return typeof e!=`number`||Number.isNaN(e)||e<0?``:e>=1e8?`${(e/1e8).toFixed(e>=1e9?1:2).replace(/\.0$/,``)}亿`:e>=1e4?`${(e/1e4).toFixed(e>=1e5?1:2).replace(/\.0$/,``)}万`:e.toLocaleString()}function we(e){return(e.description||``).replace(/\s+/g,` `).trim()}function g(e){return e.trim().replace(/\/+$/,``)}function Te(e){let t=new Set;for(let n of e)(n.status===`pending`||n.status===`processing`)&&(n.url&&t.add(g(n.url)),n.normalized_url&&t.add(g(n.normalized_url)));return t}function Ee(e){return{borderRadius:10,background:e?`var(--admin-bg, #ffffff)`:`transparent`,color:e?`var(--admin-primary, #2563eb)`:`var(--admin-text-secondary, #475569)`,boxShadow:e?`var(--admin-shadow-sm, 0 1px 3px rgba(15, 23, 42, 0.10))`:`none`,fontWeight:e?600:500}}function De(e){return e===`high`?`高度匹配`:e===`medium`?`建议参考`:e===`low`?`低相关`:`待评估`}function Oe(e){return e===`high`?{background:`var(--admin-success-light, #dcfce7)`,color:`var(--admin-success, #166534)`}:e===`medium`?{background:`var(--admin-primary-light, #dbeafe)`,color:`var(--admin-primary, #1d4ed8)`}:e===`low`?{background:`var(--admin-warning-light, #fef3c7)`,color:`var(--admin-warning, #92400e)`}:{background:`var(--admin-bg-secondary, #e5e7eb)`,color:`var(--admin-text-muted, #374151)`}}var ke=[`basics`,`intermediate`,`advanced`],_=30,v=10,Ae=100,je={basics:`认知与启蒙`,intermediate:`方法与工具`,advanced:`实践与探究`};function y(){let e=r(),t=i(),n=t.pathname.startsWith(`/teacher`)?`/teacher/videos`:`/admin/videos`,[a]=ee(),[y,Me]=(0,d.useState)(``),[b,x]=(0,d.useState)(`auto`),[S,Ne]=(0,d.useState)(_),[C,w]=(0,d.useState)(_),[T,Pe]=(0,d.useState)(``),[Fe,Ie]=(0,d.useState)(`basics`),[E,Le]=(0,d.useState)(!1),[Re,D]=(0,d.useState)(!0),[O,k]=(0,d.useState)([]),[A,j]=(0,d.useState)([]),[M,ze]=(0,d.useState)(!1),[N,Be]=(0,d.useState)(!1),[Ve,He]=(0,d.useState)(!1),[Ue,P]=(0,d.useState)(``),[We,Ge]=(0,d.useState)(``),[F,Ke]=(0,d.useState)(``),[qe,I]=(0,d.useState)(``),[Je,Ye]=(0,d.useState)(new Set),[Xe,L]=(0,d.useState)(``),[R,z]=(0,d.useState)(new Set),[B,Ze]=(0,d.useState)(!1),[Qe,$e]=(0,d.useState)([]),[V,H]=(0,d.useState)(!1),[et,tt]=(0,d.useState)(0),[nt,rt]=(0,d.useState)(``),[it,at]=(0,d.useState)(0),[ot,st]=(0,d.useState)(null),ct=t.pathname.startsWith(`/teacher`),{data:lt}=ce(),{data:ut}=l(),U=ct?ut:lt,{data:W}=se(T||void 0),dt=a.get(`entry`),G=dt===`course`,K=(0,d.useMemo)(()=>{if(!W)return{title:[],keywords:[],units:[]};let e=[],t=[],n=[];if(W.title&&e.push(W.title),W.keywords&&Array.isArray(W.keywords)&&t.push(...W.keywords),W.units&&Array.isArray(W.units))for(let e of W.units)e.title&&n.push(e.title);return{title:[...new Set(e)],keywords:[...new Set(t)],units:[...new Set(n)]}},[W]),ft=(0,d.useMemo)(()=>[...K.title,...K.keywords,...K.units],[K]),q=(0,d.useMemo)(()=>[...new Set(ft.map(e=>e.trim()).filter(Boolean))],[ft]),pt=(0,d.useMemo)(()=>E?q:q.slice(0,10),[q,E]),mt=q.length>10,ht=(0,d.useMemo)(()=>[{key:`title`,label:`课程名称`,items:K.title},{key:`keywords`,label:`课程关键词`,items:K.keywords},{key:`units`,label:`章节标题`,items:K.units}].filter(e=>e.items.length>0),[K]),gt=(0,d.useMemo)(()=>q.length===0?`当前课程暂无可用的预设关键词`:`将按当前课程预设组合执行搜索：${ht.map(e=>`${e.label} ${e.items.length} 个`).join(` / `)}，共 ${q.length} 个关键词`,[ht,q.length]),J=(0,d.useMemo)(()=>{let e=new Map;for(let t of ke)e.set(t,[]);for(let t of U||[]){let n=e.has(t.category)?t.category:`other`,r=e.get(n)||[];r.push({id:t.id,title:t.title}),e.set(n,r)}return e.has(`other`)&&e.get(`other`)?.length===0&&e.delete(`other`),Array.from(e.entries()).filter(([,e])=>e.length>0).map(([e,t])=>({key:e,label:je[e]||`其他课程`,items:t}))},[U]);(0,d.useEffect)(()=>{if(!T||!U)return;let e=U.find(e=>e.id===T);e&&!G&&Me(e.title)},[T,U,G]),(0,d.useEffect)(()=>{Le(!1)},[T]),(0,d.useEffect)(()=>{if(!T||!U){J.length>0&&Ie(e=>J.some(t=>t.key===e)?e:J[0].key);return}let e=U.find(e=>e.id===T);if(!e)return;let t=J.some(t=>t.key===e.category)?e.category:`other`;Ie(t)},[J,U,T]),(0,d.useEffect)(()=>{be().then(e=>$e(e.sources||[])).catch(()=>{})},[]);let Y=(0,d.useCallback)(async()=>{try{let e=await _e({limit:200});Ye(Te(e.items||[]))}catch{}},[]);(0,d.useEffect)(()=>{Y()},[Y]),(0,d.useEffect)(()=>{if(A.length===0&&!F&&!B)return;Y();let e=window.setInterval(()=>{Y()},5e3);return()=>window.clearInterval(e)},[F,B,A.length,Y]);let X=(0,d.useMemo)(()=>y.trim().length>=2,[y]),_t=(0,d.useCallback)(e=>Je.has(g(e)),[Je]),Z=(0,d.useMemo)(()=>G?A.slice(0,C):A,[G,A,C]),vt=(0,d.useMemo)(()=>G?O.length>C:X&&A.length>=S&&S<Ae,[X,G,A.length,O.length,S,C]),Q=(0,d.useMemo)(()=>!T||O.length===0?[]:O.slice(0,Math.min(C,O.length)),[O,T,C]),$=(0,d.useMemo)(()=>{if(!T||Q.length===0)return``;let e=Q.map(e=>g(e.original_url)).sort().join(`|`);return`${T}|${C}|${e}`},[Q,T,C]);(0,d.useEffect)(()=>{if(!T||M||V||!$||$===Xe)return;let e=!1;return He(!0),ge(T,Q).then(t=>{if(e||!t.success)return;let n=t.items||[];if(n.length===0){L($);return}let r=O.slice(Q.length);j([...n,...r]),L($)}).catch(()=>{e||L($)}).finally(()=>{e||He(!1)}),()=>{e=!0}},[V,M,Xe,O,Q,$,T]);let yt=async()=>{if(P(``),I(``),z(new Set),!X){P(`请输入至少2个字符的关键词`);return}let e=_;Ne(e),w(e),L(``),ze(!0);try{let t=await ve(y.trim(),e,b);if(!t.success)k([]),j([]),P(t.error||`搜索失败`);else{let e=t.items||[];k(e),j(e),t.error&&I(t.error)}}catch(e){k([]),j([]),P(m(e,`搜索失败`))}finally{ze(!1)}},bt=async e=>{if(e.original_url){Ge(e.original_url),P(``),I(``);try{let t=await he({title:p(e),original_url:e.original_url,source:e.source,source_label:h(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});I(t.message||`已保存`)}catch(e){P(m(e,`保存失败`))}finally{Ge(``)}}},xt=async e=>{if(e.original_url){if(_t(e.original_url)){I(`该视频已在下载队列中`);return}Ke(e.original_url),P(``),I(``);try{let t=await me({title:p(e),original_url:e.original_url,source:e.source,source_label:h(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id});Ye(t=>{let n=new Set(t);return n.add(g(e.original_url)),n}),Y(),I(t.message||`已创建下载任务`)}catch(e){P(m(e,`下载失败`))}finally{Ke(``)}}},St=e=>{z(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},Ct=()=>{R.size===Z.length?z(new Set):z(new Set(Z.map(e=>e.original_url)))},wt=async()=>{if(R.size===0)return;let e=A.filter(e=>R.has(e.original_url)).filter(e=>!_t(e.original_url));if(e.length===0){I(`所选视频已在下载队列中`);return}Ze(!0),P(``),I(``);try{let t=e.map(e=>({title:p(e),original_url:e.original_url,source:e.source,source_label:h(e),thumbnail_url:e.thumbnail_url,duration:e.duration,uploader:e.uploader,upload_date:e.upload_date,view_count:e.view_count,like_count:e.like_count,description:e.description,license:e.license,categories:e.categories,tags:e.tags,channel_url:e.channel_url,channel_id:e.channel_id})),n=await ye(t);Ye(t=>{let n=new Set(t);for(let t of e)n.add(g(t.original_url));return n}),Y(),I(`批量下载：${n.created} 个任务已创建，${n.skipped} 个跳过，${n.failed} 个失败`),z(new Set)}catch(e){P(m(e,`批量下载失败`))}finally{Ze(!1)}},Tt=(0,d.useCallback)(()=>{if(!T){P(`请先选择课程后再执行课程搜索`);return}if(q.length===0){P(`当前课程暂无可用于课程搜索的关键词`);return}H(!0),tt(0),rt(``),at(0),D(!1),w(_),Ne(_),k([]),j([]),z(new Set),P(``),I(``),L(``);let e=pe({keywords:q,limit_per_keyword:5,source:`auto`},e=>{if(e.type===`progress`)tt(e.percent||0),rt(e.keyword||``);else if(e.type===`result`&&e.items){let t=e.items||[];at(t=>t+(e.count||0)),k(e=>[...e,...t]),j(e=>[...e,...t])}else e.type===`done`?(H(!1),tt(100),I(`批量搜索完成！共搜索 ${e.total_keywords} 个关键词，发现 ${e.total_unique} 条独立结果`)):e.type===`error`&&(H(!1),P(e.message||`批量搜索失败`))});st(e)},[q,T]),Et=(0,d.useCallback)(async()=>{if(G){w(e=>Math.min(e+v,O.length));return}if(!X||N||!vt)return;let e=Math.min(S+v,Ae);Be(!0),P(``);try{let t=await ve(y.trim(),e,b);if(!t.success){P(t.error||`加载更多失败`);return}let n=t.items||[];Ne(e),w(e),k(n),j(n),L(``)}catch(e){P(m(e,`加载更多失败`))}finally{Be(!1)}},[vt,X,G,N,y,O.length,S,b]);(0,d.useEffect)(()=>{dt===`course`&&(b!==`auto`&&x(`auto`),U&&U.length!==0&&(!T||!U.some(e=>e.id===T))&&Pe(U[0].id))},[U,dt,T,b]),(0,d.useEffect)(()=>{if(!G){D(!0);return}D(!0)},[G,T]);let Dt=e=>{if(!e||e<=0)return``;let t=Math.floor(e/60),n=e%60;return t>=60?`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`:`${t}:${n.toString().padStart(2,`0`)}`},Ot=e=>{if(!e)return null;let t=e.toLowerCase();return t.includes(`cc0`)||t.includes(`public domain`)?{bg:`var(--admin-success-light, #d1fae5)`,color:`var(--admin-success, #065f46)`}:t.includes(`cc-by`)||t.includes(`creative commons`)?{bg:`var(--admin-primary-light, #dbeafe)`,color:`var(--admin-primary, #1e40af)`}:{bg:`var(--admin-bg-secondary, #f3f4f6)`,color:`var(--admin-text-muted, #374151)`}},kt=R.size>0,At=(0,f.jsx)(ue,{selection:kt?{isSelectMode:!0,selectedCount:R.size,onCancel:()=>z(new Set),actions:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(u,{icon:B?(0,f.jsx)(s,{size:18,className:`vd-spinning`}):(0,f.jsx)(te,{size:18}),variant:`primary`,onClick:wt,disabled:B,children:B?`下载中...`:`批量下载 (${R.size})`})})}:void 0,leftActions:kt?void 0:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u,{icon:(0,f.jsx)(re,{size:18}),onClick:()=>e(n),title:`返回视频目录`,children:`返回`}),(0,f.jsx)(le,{}),(0,f.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,padding:4,borderRadius:14,background:`var(--admin-bg-secondary, #f1f5f9)`,border:`1px solid var(--admin-border, #e2e8f0)`},children:[(0,f.jsx)(u,{icon:(0,f.jsx)(c,{size:18}),onClick:()=>e(`${n}/search`),title:`切换到普通搜索`,style:Ee(!G),children:`普通搜索`}),(0,f.jsx)(u,{icon:(0,f.jsx)(o,{size:18}),onClick:()=>e(`${n}/search?entry=course`),title:`切换到课程搜索`,style:Ee(G),children:`课程搜索`}),(0,f.jsx)(u,{icon:(0,f.jsx)(ie,{size:18}),onClick:()=>e(`${n}/import`),title:`切换到从链接导入`,style:Ee(!1),children:`从链接导入`})]})]}),rightActions:void 0}),jt=e=>{Me(e)},Mt=e=>{Pe(e)},Nt=(0,d.useMemo)(()=>{if(T&&U){let e=U.find(e=>e.id===T);if(e)return e.category}return J.length>0&&!J.some(e=>e.key===Fe)?J[0].key:Fe},[T,U,J,Fe]),Pt=(0,f.jsx)(xe,{className:`vs-keyword-sidebar`,groups:J,totalCount:U?.length||0,expandedGroupKey:Nt,selectedCourseId:T,onToggleGroup:Ie,onSelectCourse:Mt});return(0,f.jsxs)(fe,{toolbar:At,sidebar:Pt,children:[(0,f.jsxs)(`div`,{className:`vs-content`,children:[(0,f.jsx)(`div`,{className:`vs-search-bar`,children:G?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`vs-course-query-box`,children:[(0,f.jsxs)(`div`,{className:`vs-course-query-box__header`,children:[(0,f.jsx)(`div`,{className:`vs-course-query-box__label`,children:`课程预设组合`}),(0,f.jsx)(`button`,{type:`button`,className:`vs-course-query-box__toggle`,onClick:()=>D(e=>!e),title:Re?`收起课程预设关键词`:`展开课程预设关键词`,children:Re?`收起`:`展开`})]}),(0,f.jsx)(`div`,{className:`vs-course-query-box__value ${q.length===0?`vs-course-query-box__value--empty`:``}`,children:gt})]}),!V&&(0,f.jsxs)(`button`,{type:`button`,className:`vs-search-action vs-search-action--primary`,onClick:Tt,disabled:q.length===0,title:`按当前课程预设组合执行搜索`,children:[(0,f.jsx)(o,{size:16}),(0,f.jsx)(`span`,{children:`搜索`})]}),V&&(0,f.jsxs)(`button`,{type:`button`,className:`vs-search-action vs-search-action--danger`,onClick:()=>{ot?.abort(),H(!1)},title:`停止当前搜索任务`,children:[(0,f.jsx)(ae,{size:16}),(0,f.jsx)(`span`,{children:`停止`})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(de,{value:y,onChange:Me,onSubmit:yt,placeholder:`输入关键词，例如：climate change / 温室效应 / 海平面`,historyKey:`video_search_history`}),(0,f.jsxs)(`button`,{type:`button`,className:`vs-search-action vs-search-action--primary`,onClick:yt,disabled:M||!X,title:`使用当前输入的关键词执行普通搜索`,children:[M?(0,f.jsx)(s,{size:16,className:`vd-spinning`}):(0,f.jsx)(c,{size:16}),(0,f.jsx)(`span`,{children:M?`搜索中...`:`开始搜索`})]})]})}),!G&&(0,f.jsxs)(`div`,{className:`vs-source-filter`,children:[(0,f.jsx)(`div`,{className:`vs-source-filter__label`,children:`搜索来源`}),(0,f.jsxs)(`div`,{className:`vs-source-filter__options`,children:[(0,f.jsx)(`button`,{type:`button`,className:`vs-source-filter__option ${b===`auto`?`vs-source-filter__option--active`:``}`,onClick:()=>x(`auto`),title:`按系统优先级自动选择搜索来源`,children:`自动`}),Qe.map(e=>(0,f.jsx)(`button`,{type:`button`,className:`vs-source-filter__option ${b===e.id?`vs-source-filter__option--active`:``}`,onClick:()=>x(e.id),title:`仅使用 ${e.label} 搜索`,children:e.label},e.id))]})]}),T&&ft.length>0&&(!G||Re)&&(0,f.jsxs)(`div`,{className:`vs-keyword-quick`,children:[(0,f.jsxs)(`div`,{className:`vs-keyword-quick__header`,children:[(0,f.jsxs)(`div`,{className:`vs-keyword-quick__header-main`,children:[(0,f.jsx)(`span`,{className:`vs-keyword-quick__title`,children:G?`课程预设关键词`:`课程关键词`}),(0,f.jsx)(`span`,{className:`vs-keyword-quick__hint`,children:G?`以下关键词将按课程预设组合参与搜索`:`点击即可填入搜索框`})]}),!G&&mt&&(0,f.jsx)(`button`,{type:`button`,className:`vs-keyword-quick__toggle`,onClick:()=>Le(e=>!e),title:E?`收起多余关键词`:`展开更多关键词`,children:E?`收起`:`更多 ${q.length-10}`})]}),G?(0,f.jsx)(`div`,{className:`vs-keyword-sections`,children:ht.map(e=>(0,f.jsxs)(`div`,{className:`vs-keyword-section`,children:[(0,f.jsx)(`div`,{className:`vs-keyword-section__label`,children:e.label}),(0,f.jsx)(`div`,{className:`vs-keyword-quick__tags`,children:e.items.map((t,n)=>(0,f.jsx)(`button`,{type:`button`,className:`vs-keyword-quick__tag vs-keyword-quick__tag--active`,title:`课程预设关键词「${t}」`,children:t},`batch-${e.key}-${n}-${t}`))})]},e.key))}):(0,f.jsx)(`div`,{className:`vs-keyword-quick__tags`,children:pt.map((e,t)=>(0,f.jsx)(`button`,{type:`button`,className:`vs-keyword-quick__tag ${y===e?`vs-keyword-quick__tag--active`:``}`,onClick:()=>{jt(e)},title:`点击搜索「${e}」`,children:e},`quick-${t}-${e}`))})]}),G&&V&&(0,f.jsxs)(`div`,{className:`vs-progress-bar`,children:[(0,f.jsxs)(`div`,{className:`vs-progress-info`,children:[(0,f.jsxs)(`span`,{children:[`正在搜索：`,(0,f.jsx)(`strong`,{children:nt})]}),(0,f.jsxs)(`span`,{className:`vs-progress-stats`,children:[`已找到 `,it,` 条`]})]}),(0,f.jsx)(`div`,{className:`vs-progress-track`,children:(0,f.jsx)(`div`,{className:`vs-progress-fill`,style:{width:`${et}%`}})})]}),Ue&&(0,f.jsx)(`div`,{className:`vs-message vs-message--error`,children:Ue}),qe&&(0,f.jsx)(`div`,{className:`vs-message vs-message--success`,children:qe}),A.length>0&&(0,f.jsxs)(`div`,{className:`vs-batch-bar`,children:[(0,f.jsxs)(`label`,{className:`vs-batch-checkbox`,children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:R.size===Z.length&&Z.length>0,onChange:Ct}),`全选 (`,R.size,`/`,Z.length,`)`]}),(0,f.jsx)(`span`,{className:`vs-batch-spacer`}),(0,f.jsxs)(`span`,{className:`vs-result-count`,children:[`已显示 `,Z.length,` / `,A.length,` 条`]}),Ve&&(0,f.jsxs)(`span`,{className:`vs-rerank-status`,children:[(0,f.jsx)(s,{size:14,className:`vd-spinning`}),`智能推荐中`]})]}),(0,f.jsx)(`div`,{className:`vs-results`,children:A.length===0?(0,f.jsx)(`div`,{className:`vs-empty`,children:M||V?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{size:20,className:`vd-spinning`}),` `,G?`课程搜索中...`:`搜索中...`]}):G?`请先选择课程，再执行课程预设搜索`:`暂无结果，请在上方输入关键词搜索`}):(0,f.jsx)(`div`,{className:`vs-result-list`,children:Z.map(e=>{let t=We===e.original_url,n=F===e.original_url,r=_t(e.original_url),ee=n||t||r,i=R.has(e.original_url),a=Ot(e.license),o=Oe(e.recommendation_bucket),re=p(e),c=h(e),ie=we(e),ae=(e.tags||[]).filter(Boolean).slice(0,6),se=(e.matched_course_points||[]).filter(Boolean).slice(0,3),l=(e.risk_flags||[]).filter(Boolean).slice(0,2);return(0,f.jsxs)(`div`,{className:`vs-result-card ${i?`vs-result-card--selected`:``}`,children:[(0,f.jsx)(`div`,{className:`vs-result-checkbox`,children:(0,f.jsx)(`input`,{type:`checkbox`,checked:i,onChange:()=>St(e.original_url)})}),(0,f.jsx)(`div`,{className:`vs-result-thumb`,children:e.thumbnail_url?(0,f.jsx)(`img`,{src:e.thumbnail_url,alt:re}):(0,f.jsx)(`div`,{className:`vs-result-thumb-placeholder`})}),(0,f.jsxs)(`div`,{className:`vs-result-info`,children:[(0,f.jsx)(`div`,{className:`vs-result-title`,children:re}),typeof e.recommendation_score==`number`&&(0,f.jsxs)(`div`,{className:`vs-recommendation-row`,children:[(0,f.jsxs)(`span`,{className:`vs-recommendation-badge`,style:o,children:[De(e.recommendation_bucket),` `,e.recommendation_score]}),typeof e.quality_score==`number`&&(0,f.jsxs)(`span`,{className:`vs-recommendation-quality`,children:[`教学质量 `,e.quality_score]})]}),(0,f.jsx)(`div`,{className:`vs-result-url`,children:e.original_url}),(0,f.jsxs)(`div`,{className:`vs-result-meta`,children:[c&&(0,f.jsxs)(`span`,{children:[`📺 `,c]}),typeof e.duration==`number`&&e.duration>0&&(0,f.jsxs)(`span`,{children:[`⏱ `,Dt(e.duration)]}),e.uploader&&(0,f.jsxs)(`span`,{children:[`👤 `,e.uploader]}),typeof e.view_count==`number`&&(0,f.jsxs)(`span`,{children:[`👁 `,Ce(e.view_count)]}),typeof e.like_count==`number`&&(0,f.jsxs)(`span`,{children:[`👍 `,Ce(e.like_count)]}),e.upload_date&&(0,f.jsxs)(`span`,{children:[`📅 `,Se(e.upload_date)]})]}),e.recommendation_reason&&(0,f.jsxs)(`div`,{className:`vs-recommendation-reason`,children:[`AI推荐：`,e.recommendation_reason]}),se.length>0&&(0,f.jsxs)(`div`,{className:`vs-recommendation-points`,children:[`匹配课程点：`,se.join(` / `)]}),l.length>0&&(0,f.jsxs)(`div`,{className:`vs-recommendation-risk`,children:[`注意：`,l.join(` / `)]}),ie&&(0,f.jsx)(`div`,{className:`vs-result-desc`,children:ie}),(0,f.jsxs)(`div`,{className:`vs-result-tags`,children:[e.license&&a&&(0,f.jsxs)(`span`,{className:`vs-tag`,style:{background:a.bg,color:a.color},children:[`📄 `,e.license]}),e.categories?.map(e=>(0,f.jsx)(`span`,{className:`vs-tag vs-tag--category`,children:e},e)),ae.map(t=>(0,f.jsxs)(`span`,{className:`vs-tag vs-tag--keyword`,children:[`#`,t]},`${e.original_url}-${t}`))]})]}),(0,f.jsxs)(`div`,{className:`vs-result-actions`,children:[(0,f.jsxs)(`button`,{className:`vs-action-btn vs-action-btn--primary`,onClick:()=>xt(e),disabled:ee,title:r?`该视频已在下载队列中`:`保存并下载到本地`,children:[n?(0,f.jsx)(s,{size:14,className:`vd-spinning`}):(0,f.jsx)(te,{size:14}),n||r?`下载中`:`下载`]}),(0,f.jsxs)(`button`,{className:`vs-action-btn vs-action-btn--secondary`,onClick:()=>bt(e),disabled:t||n||r,title:`仅保存元数据（不下载视频文件）`,children:[t?(0,f.jsx)(s,{size:14,className:`vd-spinning`}):(0,f.jsx)(ne,{size:14}),t?`保存中`:`收藏`]}),(0,f.jsxs)(`button`,{className:`vs-action-btn`,onClick:()=>navigator.clipboard.writeText(e.original_url),title:`复制链接`,children:[(0,f.jsx)(oe,{size:14}),`复制`]})]})]},e.original_url)})})}),vt&&(0,f.jsx)(`div`,{className:`vs-load-more`,children:(0,f.jsxs)(`button`,{type:`button`,className:`vs-load-more-btn`,onClick:()=>void Et(),disabled:N||M||V,children:[N?(0,f.jsx)(s,{size:16,className:`vd-spinning`}):(0,f.jsx)(o,{size:16}),G?`继续阅读并推荐更多 ${v} 条`:`加载更多 ${v} 条`]})})]}),(0,f.jsx)(`style`,{children:`
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
      `})]})}export{y as VideoSearchPage};