import{r as s,j as e}from"./react-vendor-DZdvhec1.js";import{u as je,ad as we,a as ke,aq as Ne,ar as Ce,as as ze,l as _}from"./index-gZIvI9UJ.js";import{V as Se,P as Z}from"./Pagination-VzQfQi2h.js";import{R as Te}from"./ResizableSidebar-CN-_EESc.js";import{u as Ee}from"./query-vendor-CyHNoBeC.js";import{r as M,m as R,G as H,b7 as ee,az as ae,bk as re,s as te,q as K,X as b,bl as $e,x as Pe}from"./ui-vendor-tV6DikQD.js";import{useNavigate as Ae}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./useResizableSidebar-D2sNFezQ.js";const h=async(f,m)=>(await _(f,m)).json(),v=[{key:"basics",label:"认知与启蒙",icon:"📚",color:"var(--admin-primary)"},{key:"intermediate",label:"方法与工具",icon:"📖",color:"var(--admin-primary)"},{key:"advanced",label:"实践与探究",icon:"🎓",color:"var(--admin-success)"}],Ie=[{key:"beginner",label:"初级",color:"var(--admin-success)"},{key:"intermediate",label:"中级",color:"var(--admin-warning)"},{key:"advanced",label:"高级",color:"var(--admin-danger)"}];function za(){const f=Ae(),m=Ee(),{user:u}=je(),[l,q]=s.useState(""),[ie,k]=s.useState(1),N=6,[O,se]=s.useState("list"),[t,c]=s.useState(null),[ce,C]=s.useState(!1),[F,D]=s.useState(!1),[d,z]=s.useState(""),[S,G]=s.useState(!1),T=s.useRef(null),{data:o,isLoading:oe,error:E}=we(),{data:$,isLoading:ne}=ke(),y=Ne(),le=Ce(),de=ze(),me=s.useMemo(()=>{if(!$||!o)return[];const a=new Set(o.map(r=>r.id));return $.filter(r=>!a.has(r.id))},[$,o]),[j,P]=s.useState(""),Q=me.filter(a=>a.title.toLowerCase().includes(j.toLowerCase())||a.description?.toLowerCase().includes(j.toLowerCase())),pe=async a=>{if(u)try{await y.mutateAsync({courseId:a,teacherId:u.id}),m.invalidateQueries({queryKey:["teacherCourses"]})}catch{alert("添加课程失败")}},U=async(a,r)=>{if(a.stopPropagation(),!!u&&window.confirm(`确认将「${r.title}」从您的课程列表中移除？
这不会删除课程本身，仅解除关联。`))try{await le.mutateAsync({courseId:r.id,teacherId:u.id}),m.invalidateQueries({queryKey:["teacherCourses"]})}catch{alert("移除课程失败")}},W=async(a,r)=>{a.stopPropagation();try{await de.mutateAsync({courseId:r.id,data:{is_published:!r.is_published}})}catch{alert("切换课程状态失败")}},[V,ge]=s.useState([]),[J,xe]=s.useState([]),[Y,he]=s.useState([]),[B,ue]=s.useState([]),A=s.useCallback(async a=>{const[r,i,g,x]=await Promise.all([h(`/api/content/courses/${a}/classes`),h(`/api/content/courses/${a}/teachers`),h("/api/content/available-classes"),h("/api/content/available-teachers")]);ge(r),xe(i),he(g),ue(x)},[]);s.useEffect(()=>{t&&A(t.id)},[t?.id]);const be=async a=>{if(!t)return;const r=V.some(i=>i.id===a);await _(`/api/content/courses/${t.id}/classes/${a}`,{method:r?"DELETE":"POST"}),A(t.id)},ve=async a=>{if(!t)return;const r=J.some(i=>i.id===a);await _(`/api/content/courses/${t.id}/teachers/${a}`,{method:r?"DELETE":"POST"}),A(t.id)},[I,_e]=s.useState({});s.useEffect(()=>{o?.length&&o.forEach(a=>{Promise.all([h(`/api/content/courses/${a.id}/teachers`),h(`/api/content/courses/${a.id}/students`)]).then(([r,i])=>{_e(g=>({...g,[a.id]:{teachers:Array.isArray(r)?r.map(x=>x.name||x.username):[],studentCount:Array.isArray(i)?i.length:0}}))}).catch(()=>{})})},[o]);const p=(o||[]).filter(a=>!l||a.category===l),L=Math.max(1,Math.ceil(p.length/N)),w=Math.min(ie,L),X=p.slice((w-1)*N,w*N);s.useEffect(()=>{k(1)},[l]);const n=a=>v.find(r=>r.key===a)?.color||"var(--cg-text-muted)",fe=async a=>{if(!t||!a.target.files?.[0])return;const r=a.target.files[0];G(!0);try{const i=new FormData;i.append("file",r);const x=await(await _(`/api/content/courses/${t.id}/cover`,{method:"POST",credentials:"include",body:i})).json();c({...t,coverImage:x.cover_image}),m.invalidateQueries({queryKey:["courses"]})}catch(i){alert(i instanceof Error?i.message:"上传失败")}finally{G(!1)}},ye=async()=>{if(t){D(!0);try{await _(`/api/content/courses/${t.id}`,{method:"PUT",credentials:"include",body:JSON.stringify({title:t.title,subtitle:t.subtitle,description:t.description,keywords:t.keywords,level:t.level})},{includeJsonContentType:!0}),m.invalidateQueries({queryKey:["courses"]}),c(null)}catch(a){alert(a instanceof Error?a.message:"保存失败")}finally{D(!1)}}};return e.jsxs("div",{className:"page-container tcm-page",children:[e.jsxs("div",{className:"tcm-layout",children:[e.jsxs("div",{className:"tcm-content",children:[e.jsxs("div",{className:"tcm-toolbar",children:[e.jsxs("button",{className:"btn btn-primary btn-sm flex items-center gap-2",onClick:()=>C(!0),children:[e.jsx(M,{size:16}),"添加课程"]}),e.jsx("div",{className:"tcm-toolbar__actions",children:e.jsx(Se,{mode:O,onChange:a=>se(a)})})]}),oe?e.jsx("div",{className:"tcm-empty",children:"加载中..."}):E?e.jsxs("div",{className:"tcm-empty",children:[e.jsxs("p",{children:["加载失败: ",E instanceof Error?E.message:"未知错误"]}),e.jsx("button",{className:"btn btn-primary",onClick:()=>window.location.reload(),children:"重新加载"})]}):p.length===0?e.jsxs("div",{className:"tcm-empty",children:[e.jsx(R,{size:48,color:"var(--cg-text-muted)"}),e.jsx("p",{children:"没有找到匹配的教程"})]}):O==="list"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tcm-list",children:X.map(a=>e.jsxs("div",{className:"tcm-course",onClick:()=>f(`/teacher/course/detail/${a.id}`),children:[e.jsx("div",{className:"tcm-course__accent",style:{background:n(a.category)}}),a.cover_image?e.jsx("img",{src:a.cover_image,alt:"",className:"tcm-course__thumb"}):e.jsx("div",{className:"tcm-course__thumb tcm-course__thumb--placeholder",style:{background:n(a.category)+"20",color:n(a.category)},children:e.jsx(R,{size:24})}),e.jsxs("div",{className:"tcm-course__body",children:[e.jsxs("div",{className:"tcm-course__row1",children:[e.jsxs("div",{className:"tcm-course__title",children:[a.title,a.subtitle&&e.jsxs("span",{className:"tcm-course__subtitle",children:[" — ",a.subtitle]})]}),e.jsx("span",{className:"tcm-course__tag",style:{color:n(a.category),background:n(a.category)+"15"},children:v.find(r=>r.key===a.category)?.label||a.category})]}),a.description&&e.jsx("div",{className:"tcm-course__desc",children:a.description.length>40?a.description.slice(0,40)+"...":a.description}),a.keywords&&a.keywords.length>0&&e.jsx("div",{className:"tcm-course__keywords",children:a.keywords.map((r,i)=>e.jsx("span",{className:"tcm-kw-tag",children:r},i))}),e.jsxs("div",{className:"tcm-course__actions",children:[e.jsxs("div",{className:"tcm-course__meta",children:[I[a.id]?.teachers?.length?e.jsxs("span",{className:"tcm-course__meta-item",children:[e.jsx(H,{size:13})," ",I[a.id].teachers.join("、")]}):null,e.jsxs("span",{className:"tcm-course__meta-item",children:[e.jsx(ee,{size:13})," ",I[a.id]?.studentCount??0," 人选课"]})]}),e.jsxs("div",{className:"tcm-course__ops",children:[e.jsxs("button",{className:`tcm-course__publish ${a.is_published?"tcm-course__publish--on":""}`,onClick:r=>W(r,a),title:a.is_published?"点击下线（设为备课中）":"点击上线（对学生开放）",children:[a.is_published?e.jsx(ae,{size:14}):e.jsx(re,{size:14}),e.jsx("span",{children:a.is_published?"已开课":"备课中"})]}),e.jsxs("button",{className:"tcm-course__remove",onClick:r=>U(r,a),title:"移除课程",children:[e.jsx(te,{size:14})," 删除"]})]})]})]}),e.jsx(K,{size:18,className:"tcm-course__arrow"})]},a.id))}),e.jsx(Z,{current:w,total:L,onChange:k,info:`共 ${p.length} 门课程`})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tcm-grid",children:X.map(a=>e.jsxs("div",{className:"tcm-card",style:{"--card-color":n(a.category)},onClick:()=>f(`/teacher/course/detail/${a.id}`),children:[a.cover_image?e.jsx("div",{className:"tcm-card__cover",children:e.jsx("img",{src:a.cover_image,alt:a.title})}):e.jsx("div",{className:"tcm-card__top"}),e.jsxs("div",{className:"tcm-card__body",children:[e.jsxs("div",{className:"tcm-card__title",children:[a.title,a.subtitle&&e.jsx("div",{className:"tcm-card__subtitle",children:a.subtitle})]}),a.description&&e.jsx("div",{className:"tcm-card__desc",children:a.description}),e.jsxs("div",{className:"tcm-card__footer",children:[e.jsx("div",{className:"tcm-card__badge",style:{color:n(a.category),background:n(a.category)+"18"},children:v.find(r=>r.key===a.category)?.label||a.category}),e.jsxs("div",{className:"tcm-course__ops",children:[e.jsx("button",{className:`tcm-course__publish tcm-course__publish--compact ${a.is_published?"tcm-course__publish--on":""}`,onClick:r=>W(r,a),title:a.is_published?"点击下线（设为备课中）":"点击上线（对学生开放）",children:a.is_published?e.jsx(ae,{size:13}):e.jsx(re,{size:13})}),e.jsx("button",{className:"tcm-course__remove",onClick:r=>U(r,a),title:"移除课程",children:e.jsx(te,{size:14})})]})]})]})]},a.id))}),e.jsx(Z,{current:w,total:L,onChange:k,info:`共 ${p.length} 门课程`})]})]}),e.jsxs(Te,{side:"right",defaultWidth:260,minWidth:200,maxWidth:500,persistKey:"sidebar-teacher-course-mgmt",collapsedTooltip:"课程分类",collapsedIcon:e.jsx("span",{children:"📚"}),className:"tcm-sidebar",children:[e.jsx("div",{className:"tcm-sidebar__header",children:e.jsx("h3",{children:"课程分类"})}),e.jsxs("div",{className:"tcm-sidebar__list",children:[e.jsxs("div",{className:`tcm-sidebar__item ${l?"":"active"}`,onClick:()=>q(""),children:[e.jsx("div",{className:"tcm-sidebar__icon",children:"📋"}),e.jsxs("div",{className:"tcm-sidebar__info",children:[e.jsx("div",{className:"tcm-sidebar__name",children:"全部"}),e.jsxs("div",{className:"tcm-sidebar__count",children:[(o||[]).length," 门教程"]})]}),!l&&e.jsx(K,{size:16})]}),v.map(a=>{const r=(o||[]).filter(i=>i.category===a.key).length;return e.jsxs("div",{className:`tcm-sidebar__item ${l===a.key?"active":""}`,onClick:()=>q(a.key),children:[e.jsx("div",{className:"tcm-sidebar__icon",children:a.icon}),e.jsxs("div",{className:"tcm-sidebar__info",children:[e.jsx("div",{className:"tcm-sidebar__name",children:a.label}),e.jsxs("div",{className:"tcm-sidebar__count",children:[r," 门教程"]})]}),l===a.key&&e.jsx(K,{size:16})]},a.key)})]}),e.jsxs("div",{className:"tcm-sidebar__stats",children:[e.jsxs("div",{className:"tcm-sidebar__stat",children:[e.jsx("span",{children:"总教程数"}),e.jsx("span",{className:"tcm-sidebar__stat-val",children:(o||[]).length})]}),e.jsxs("div",{className:"tcm-sidebar__stat",children:[e.jsx("span",{children:"当前显示"}),e.jsx("span",{className:"tcm-sidebar__stat-val",children:p.length})]})]})]})]}),t&&e.jsx("div",{className:"tcm-modal__overlay",onClick:()=>c(null),children:e.jsxs("div",{className:"tcm-modal",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"tcm-modal__header",children:[e.jsx("h3",{children:"编辑教程信息"}),e.jsx("button",{className:"tcm-modal__close",onClick:()=>c(null),children:e.jsx(b,{size:18})})]}),e.jsxs("div",{className:"tcm-modal__body",children:[e.jsxs("div",{className:"tcm-cover-upload",children:[t.coverImage?e.jsxs("div",{className:"tcm-cover-preview",children:[e.jsx("img",{src:t.coverImage,alt:"封面"}),e.jsx("button",{className:"tcm-cover-change",onClick:()=>T.current?.click(),children:S?"上传中...":"更换封面"})]}):e.jsxs("button",{className:"tcm-cover-placeholder",onClick:()=>T.current?.click(),disabled:S,children:[e.jsx($e,{size:24}),e.jsx("span",{children:S?"上传中...":"点击上传封面图片"}),e.jsx("span",{className:"tcm-cover-hint",children:"支持 jpg/png/webp，最大 5MB"})]}),e.jsx("input",{ref:T,type:"file",accept:"image/*",style:{display:"none"},onChange:fe})]}),e.jsxs("label",{className:"tcm-modal__label",children:["教程标题",e.jsx("input",{type:"text",className:"tcm-modal__input",value:t.title,onChange:a=>c({...t,title:a.target.value}),placeholder:"输入教程标题"})]}),e.jsxs("label",{className:"tcm-modal__label",children:["副标题",e.jsx("input",{type:"text",className:"tcm-modal__input",value:t.subtitle,onChange:a=>c({...t,subtitle:a.target.value}),placeholder:"输入副标题（可选）"})]}),e.jsxs("label",{className:"tcm-modal__label",children:["课程等级",e.jsx("select",{className:"tcm-modal__input",value:t.level,onChange:a=>c({...t,level:a.target.value}),children:Ie.map(a=>e.jsx("option",{value:a.key,children:a.label},a.key))})]}),e.jsxs("label",{className:"tcm-modal__label",children:["教程简介",e.jsx("textarea",{className:"tcm-modal__textarea",value:t.description,onChange:a=>c({...t,description:a.target.value}),placeholder:"输入教程简介",rows:3})]}),e.jsxs("label",{className:"tcm-modal__label",children:["关键词",e.jsxs("div",{className:"tcm-kw-editor",children:[t.keywords.map((a,r)=>e.jsxs("span",{className:"tcm-kw-tag tcm-kw-tag--edit",children:[a,e.jsx("button",{onClick:()=>c({...t,keywords:t.keywords.filter((i,g)=>g!==r)}),className:"tcm-kw-tag__remove",children:e.jsx(b,{size:12})})]},r)),e.jsxs("div",{className:"tcm-kw-add",children:[e.jsx("input",{type:"text",className:"tcm-kw-add__input",value:d,onChange:a=>z(a.target.value),onKeyDown:a=>{a.key==="Enter"&&d.trim()&&(a.preventDefault(),t.keywords.includes(d.trim())||c({...t,keywords:[...t.keywords,d.trim()]}),z(""))},placeholder:"输入关键词后回车"}),e.jsx("button",{className:"tcm-kw-add__btn",onClick:()=>{d.trim()&&!t.keywords.includes(d.trim())&&(c({...t,keywords:[...t.keywords,d.trim()]}),z(""))},children:e.jsx(M,{size:14})})]})]})]}),e.jsxs("label",{className:"tcm-modal__label",children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(ee,{size:14})," 关联班级"]}),e.jsx("div",{className:"tcm-relation-list",children:Y.length>0?Y.map(a=>{const r=V.some(i=>i.id===a.id);return e.jsxs("button",{className:`tcm-relation-chip ${r?"tcm-relation-chip--active":""}`,onClick:()=>be(a.id),children:[a.name,a.grade?` (${a.grade})`:"",r&&e.jsx(b,{size:12})]},a.id)}):e.jsx("span",{style:{color:"var(--cg-text-muted)",fontSize:"0.85rem"},children:"暂无可用班级"})})]}),e.jsxs("label",{className:"tcm-modal__label",children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(H,{size:14})," 关联教师"]}),e.jsx("div",{className:"tcm-relation-list",children:B.length>0?B.map(a=>{const r=J.some(i=>i.id===a.id);return e.jsxs("button",{className:`tcm-relation-chip ${r?"tcm-relation-chip--active":""}`,onClick:()=>ve(a.id),children:[a.name||a.username,r&&e.jsx(b,{size:12})]},a.id)}):e.jsx("span",{style:{color:"var(--cg-text-muted)",fontSize:"0.85rem"},children:"暂无可用教师"})})]})]}),e.jsxs("div",{className:"tcm-modal__footer",children:[e.jsx("button",{className:"tcm-modal__btn tcm-modal__btn--cancel",onClick:()=>c(null),children:"取消"}),e.jsx("button",{className:"tcm-modal__btn tcm-modal__btn--save",onClick:ye,disabled:F,children:F?"保存中...":"保存"})]})]})}),e.jsx("style",{children:`
        .tcm-page {
          display: flex; flex-direction: column;
          height: calc(100vh - 56px); /* subtract top nav height */
          overflow: hidden; box-sizing: border-box;
          padding-bottom: 0;
        }
        .tcm-layout {
          display: flex; gap: 0;
          flex: 1; min-height: 0; /* critical for flex child overflow */
          align-items: stretch;
        }

        /* ── 左侧内容区 ── */
        .tcm-content {
          flex: 1; display: flex; flex-direction: column;
          background: var(--cg-surface); border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;
          min-height: 0; /* critical for nested flex scroll */
        }
        .tcm-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid var(--cg-border);
        }
        .tcm-toolbar__search {
          flex: 1; display: flex; align-items: center; gap: 0.5rem;
        }
        .tcm-search__icon { color: var(--cg-text-muted); flex-shrink: 0; }
        .tcm-search__input {
          flex: 1; border: none; outline: none;
          font-size: 0.9375rem; background: transparent;
        }
        .tcm-empty {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: var(--cg-text-muted); padding: 3rem;
        }
        .tcm-list {
          flex: 1; overflow-y: auto; padding: 0.75rem;
          display: flex; flex-direction: column; gap: 0.5rem;
          min-height: 0;
        }

        /* ── 教程行 ── */
        .tcm-course {
          display: flex; align-items: center;
          background: var(--cg-surface); border: 1px solid var(--cg-border);
          border-radius: 6px; cursor: pointer;
          transition: all 0.15s ease; overflow: hidden;
          flex-shrink: 0;
        }
        .tcm-course:hover {
          border-color: var(--cg-text-muted);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transform: translateX(2px);
        }
        .tcm-course__accent { width: 3px; align-self: stretch; flex-shrink: 0; }
        .tcm-course__body { flex: 1; padding: 0.5rem 1rem; min-width: 0; }
        .tcm-course__row1 {
          display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
        }
        .tcm-course__thumb {
          width: 56px; height: 56px; border-radius: 6px; object-fit: cover; flex-shrink: 0;
          margin: 0.5rem 0 0.5rem 0.5rem;
        }
        .tcm-course__thumb--placeholder {
          display: flex; align-items: center; justify-content: center;
        }
        .tcm-course__title { font-size: 0.9375rem; font-weight: 600; color: var(--cg-text); }
        .tcm-course__subtitle { font-weight: 400; color: var(--cg-text-muted); font-size: 0.85rem; }
        .tcm-course__tag {
          font-size: 0.75rem; font-weight: 500; padding: 2px 8px;
          border-radius: 4px; white-space: nowrap; flex-shrink: 0;
        }
        .tcm-course__desc {
          font-size: 0.8rem; color: var(--cg-text-muted); margin-top: 2px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .tcm-course__actions {
          display: flex; align-items: center; justify-content: space-between; margin-top: 2px;
        }
        .tcm-course__meta {
          display: flex; align-items: center; gap: 12px; font-size: 0.8rem; color: var(--cg-text-muted);
        }
        .tcm-course__meta-item {
          display: inline-flex; align-items: center; gap: 3px;
        }
        .tcm-course__settings {
          display: inline-flex; align-items: center; gap: 4px;
          border: none; background: transparent; color: var(--cg-text-muted);
          font-size: 0.75rem; cursor: pointer; padding: 2px 6px;
          border-radius: 4px; transition: all 0.15s; flex-shrink: 0;
        }
        .tcm-course__settings:hover { color: var(--admin-primary); background: var(--cg-bg); }
        .tcm-course__remove {
          display: inline-flex; align-items: center; gap: 4px;
          border: none; background: transparent; color: var(--cg-text-muted);
          font-size: 0.75rem; cursor: pointer; padding: 2px 6px;
          border-radius: 4px; transition: all 0.15s; flex-shrink: 0;
        }
        .tcm-course__remove:hover { color: var(--admin-danger); background: var(--cg-bg); }
        .tcm-course__ops {
          display: flex; align-items: center; gap: 4px;
        }
        .tcm-course__publish {
          display: inline-flex; align-items: center; gap: 4px;
          border: 1px solid var(--cg-border); background: var(--cg-bg); color: var(--cg-text-muted);
          font-size: 0.72rem; cursor: pointer; padding: 2px 8px;
          border-radius: 99px; transition: all 0.2s; flex-shrink: 0;
          font-weight: 500;
        }
        .tcm-course__publish:hover { border-color: var(--admin-success); color: var(--admin-success); background: var(--cg-bg); }
        .tcm-course__publish--on {
          border-color: var(--admin-success-light); background: var(--cg-bg); color: var(--admin-success);
        }
        .tcm-course__publish--on:hover { border-color: var(--admin-danger); color: var(--admin-danger); background: var(--cg-bg); }
        .tcm-course__publish--compact span { display: none; }
        .tcm-course__keywords {
          display: flex; flex-wrap: wrap; gap: 4px; flex: 1;
        }
        .tcm-course__keywords { margin-top: 2px; }
        .tcm-kw-tag {
          font-size: 0.65rem; padding: 2px 8px; border-radius: 99px;
          white-space: nowrap; font-weight: 500;
        }
        .tcm-kw-tag:nth-child(5n+1) { background: var(--admin-primary-light); color: var(--admin-primary); }
        .tcm-kw-tag:nth-child(5n+2) { background: var(--admin-danger-light); color: var(--admin-danger); }
        .tcm-kw-tag:nth-child(5n+3) { background: var(--admin-success-light); color: var(--admin-success); }
        .tcm-kw-tag:nth-child(5n+4) { background: var(--admin-warning-light); color: var(--admin-warning); }
        .tcm-kw-tag:nth-child(5n+5) { background: var(--admin-primary-light); color: var(--admin-primary); }
        .tcm-kw-tag--edit {
          display: inline-flex; align-items: center; gap: 4px;
          background: var(--cg-bg); color: var(--admin-primary);
        }
        .tcm-kw-tag__remove {
          border: none; background: none; color: var(--cg-text-muted); cursor: pointer;
          padding: 0; display: flex; line-height: 1;
        }
        .tcm-kw-tag__remove:hover { color: var(--admin-danger); }
        .tcm-relation-list {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 0.375rem;
          padding: 0.5rem; border: 1px solid var(--cg-border); border-radius: 6px;
          min-height: 40px; align-items: center;
        }
        .tcm-relation-chip {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 12px; border-radius: 16px; font-size: 0.8rem;
          border: 1px solid var(--cg-text-muted); background: var(--cg-bg); color: var(--cg-text-muted);
          cursor: pointer; transition: all 0.15s;
        }
        .tcm-relation-chip:hover { border-color: var(--admin-primary-light); background: var(--cg-bg); color: var(--admin-primary); }
        .tcm-relation-chip--active {
          background: var(--admin-primary-light); border-color: var(--admin-primary); color: var(--admin-primary); font-weight: 500;
        }
        .tcm-relation-chip--active:hover { background: var(--cg-bg); border-color: var(--admin-danger-light); color: var(--admin-danger); }
        .tcm-kw-editor {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 0.375rem;
          padding: 0.5rem; border: 1px solid var(--cg-border); border-radius: 6px;
          min-height: 40px; align-items: center;
        }
        .tcm-kw-add {
          display: flex; align-items: center; gap: 4px;
        }
        .tcm-kw-add__input {
          border: none; outline: none; font-size: 0.8rem;
          width: 120px; background: transparent; padding: 2px 0;
        }
        .tcm-kw-add__btn {
          display: flex; align-items: center; justify-content: center;
          border: none; background: var(--cg-bg); color: var(--cg-text-muted);
          width: 22px; height: 22px; border-radius: 4px; cursor: pointer;
        }
        .tcm-kw-add__btn:hover { background: var(--cg-border); color: var(--admin-primary); }

        /* ── 封面图上传 ── */
        .tcm-cover-upload { margin-bottom: 1rem; }
        .tcm-cover-preview {
          position: relative; border-radius: 8px; overflow: hidden;
          height: 140px; background: var(--cg-bg);
        }
        .tcm-cover-preview img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .tcm-cover-change {
          position: absolute; bottom: 8px; right: 8px;
          background: rgba(0,0,0,0.6); color: var(--admin-primary-text);
          border: none; padding: 4px 12px; border-radius: 4px;
          font-size: 0.75rem; cursor: pointer; transition: background 0.15s;
        }
        .tcm-cover-change:hover { background: rgba(0,0,0,0.8); }
        .tcm-cover-placeholder {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 6px; width: 100%; height: 120px; border: 2px dashed var(--cg-text-muted);
          border-radius: 8px; background: var(--cg-bg); color: var(--cg-text-muted);
          cursor: pointer; transition: all 0.15s; font-size: 0.85rem;
        }
        .tcm-cover-placeholder:hover { border-color: var(--admin-primary); color: var(--admin-primary); background: var(--cg-bg); }
        .tcm-cover-hint { font-size: 0.7rem; color: var(--cg-text-muted); }

        /* ── 卡片封面 ── */
        .tcm-card__cover {
          height: 120px; background: var(--cg-bg); overflow: hidden;
        }
        .tcm-card__cover img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .tcm-course__arrow { color: var(--cg-text-muted); flex-shrink: 0; margin-right: 1rem; }
        .tcm-course:hover .tcm-course__arrow { color: var(--cg-text-muted); }

        /* ── 卡片视图 ── */
        .tcm-grid {
          flex: 1; overflow-y: auto; padding: 0.75rem;
          display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 0.75rem; align-content: start;
        }
        .tcm-card {
          background: var(--cg-surface); border: 1px solid var(--cg-border); border-radius: 10px;
          cursor: pointer; transition: all 0.15s ease; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .tcm-card:hover {
          border-color: var(--cg-text-muted); box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .tcm-card__top {
          height: 4px; background: var(--card-color, var(--admin-primary));
        }
        .tcm-card__body { padding: 1rem 1.25rem; flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
        .tcm-card__title { font-size: 1rem; font-weight: 600; color: var(--cg-text); }
        .tcm-card__desc {
          font-size: 0.8rem; color: var(--cg-text-muted); line-height: 1.5;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .tcm-card__footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto;
        }
        .tcm-card__badge {
          font-size: 0.7rem; font-weight: 500; padding: 2px 8px;
          border-radius: 4px;
        }

        /* ── 右侧导航栏 ── */
        .tcm-sidebar {
          display: flex; flex-direction: column; overflow: hidden;
          background: var(--cg-surface);
        }
        .tcm-sidebar__header {
          padding: 1.25rem 1.25rem 1rem; border-bottom: 1px solid var(--cg-border);
        }
        .tcm-sidebar__header h3 { margin: 0; font-size: 1rem; font-weight: 600; color: var(--cg-text); }
        .tcm-sidebar__list { flex: 1; overflow-y: auto; padding: 0.5rem; }
        .tcm-sidebar__item {
          width: 100%; padding: 0.625rem 0.75rem; border: none;
          background: transparent; border-radius: 6px; cursor: pointer;
          display: flex; align-items: center; gap: 0.625rem;
          transition: all 0.15s; text-align: left; margin-bottom: 0.2rem;
        }
        .tcm-sidebar__item:hover { background: var(--cg-bg); }
        .tcm-sidebar__item.active { background: var(--cg-bg); color: var(--admin-primary); }
        .tcm-sidebar__icon { font-size: 1.15rem; flex-shrink: 0; }
        .tcm-sidebar__info { flex: 1; min-width: 0; }
        .tcm-sidebar__name { font-size: 0.875rem; font-weight: 500; color: var(--cg-text); }
        .tcm-sidebar__item.active .tcm-sidebar__name { color: var(--admin-primary); }
        .tcm-sidebar__count { font-size: 0.7rem; color: var(--cg-text-muted); }
        .tcm-sidebar__item.active .tcm-sidebar__count { color: var(--admin-primary); }
        .tcm-sidebar__stats {
          padding: 0.75rem 1.25rem; border-top: 1px solid var(--cg-border);
        }
        .tcm-sidebar__stat {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.8rem; color: var(--cg-text-muted); margin-bottom: 0.5rem;
        }
        .tcm-sidebar__stat:last-child { margin-bottom: 0; }
        .tcm-sidebar__stat-val { font-weight: 600; color: var(--admin-primary); }

        /* ── 编辑对话框 ── */
        .tcm-modal__overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000;
        }
        .tcm-modal {
          background: var(--cg-surface); border-radius: 12px; width: 480px; max-width: 90vw;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: tcm-modal-in 0.2s ease;
        }
        @keyframes tcm-modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .tcm-modal__header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--cg-border);
        }
        .tcm-modal__header h3 { margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--cg-text); }
        .tcm-modal__close {
          border: none; background: transparent; color: var(--cg-text-muted);
          cursor: pointer; padding: 4px; border-radius: 4px;
        }
        .tcm-modal__close:hover { color: var(--cg-text-muted); background: var(--cg-bg); }
        .tcm-modal__body { padding: 1.5rem; }
        .tcm-modal__label {
          display: block; font-size: 0.85rem; font-weight: 500;
          color: var(--cg-text-muted); margin-bottom: 1rem;
        }
        .tcm-modal__input, .tcm-modal__textarea {
          display: block; width: 100%; margin-top: 0.375rem;
          padding: 0.625rem 0.75rem; border: 1px solid var(--cg-border);
          border-radius: 6px; font-size: 0.9375rem; color: var(--cg-text);
          transition: border-color 0.15s; outline: none;
          font-family: inherit; box-sizing: border-box;
        }
        .tcm-modal__input:focus, .tcm-modal__textarea:focus {
          border-color: var(--admin-primary); box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .tcm-modal__textarea { resize: vertical; min-height: 80px; }
        .tcm-modal__footer {
          display: flex; justify-content: flex-end; gap: 0.75rem;
          padding: 1rem 1.5rem; border-top: 1px solid var(--cg-border);
        }
        .tcm-modal__btn {
          padding: 0.5rem 1.25rem; border-radius: 6px; font-size: 0.875rem;
          font-weight: 500; cursor: pointer; border: none; transition: all 0.15s;
        }
        .tcm-modal__btn--cancel { background: var(--cg-bg); color: var(--cg-text-muted); }
        .tcm-modal__btn--cancel:hover { background: var(--cg-border); }
        .tcm-modal__btn--save { background: var(--admin-primary); color: var(--admin-primary-text); }
        .tcm-modal__btn--save:hover { background: var(--admin-primary); }
        .tcm-modal__btn--save:disabled { opacity: 0.6; cursor: not-allowed; }




        /* ── 添加课程弹窗专用样式 ── */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          z-index: 1100; backdrop-filter: blur(4px);
        }
        .modal-content {
          background: var(--cg-surface); border-radius: 12px; width: 90%; max-width: 600px;
          display: flex; flex-direction: column; max-height: 90vh;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }
        .modal-content--wide { max-width: 800px; }
        .modal-header {
          padding: 1rem 1.5rem; border-bottom: 1px solid var(--cg-border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .modal-title { font-size: 1.125rem; font-weight: 600; color: var(--cg-text); }
        .modal-close {
          border: none; background: transparent; color: var(--cg-text-muted); cursor: pointer;
          padding: 4px; border-radius: 6px; display: flex;
        }
        .modal-close:hover { background: var(--cg-bg); color: var(--cg-text-muted); }
        .modal-body { padding: 1.5rem; overflow-y: auto; }
        .modal-footer {
          padding: 1rem 1.5rem; border-top: 1px solid var(--cg-border);
          display: flex; justify-content: flex-end; gap: 0.75rem;
        }
        .available-courses-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }
        .available-course-card {
          display: flex; align-items: center; padding: 0.75rem;
          border: 1px solid var(--cg-border); border-radius: 8px; transition: all 0.2s;
        }
        .available-course-card:hover { border-color: var(--admin-primary); background: var(--cg-bg); }
        .available-course-thumb {
          width: 4rem; height: 3rem; border-radius: 4px; object-fit: cover;
          background: var(--cg-bg); flex-shrink: 0;
        }
        .available-course-info { flex: 1; margin-left: 0.75rem; min-width: 0; }
        .available-course-title { font-weight: 500; color: var(--cg-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .available-course-cat { font-size: 0.75rem; color: var(--cg-text-muted); }
        .mb-4 { margin-bottom: 1rem; }
        .mt-4 { margin-top: 1rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .text-center { text-align: center; }
        .p-8 { padding: 2rem; }
        .text-slate-400 { color: var(--cg-text-muted); }
        .w-16 { width: 4rem; }
        .h-12 { height: 3rem; }
        .rounded { border-radius: 0.25rem; }
        .bg-slate-100 { background-color: var(--cg-bg); }
        .flex-1 { flex: 1 1 0%; }
        .ml-3 { margin-left: 0.75rem; }
        .overflow-hidden { overflow: hidden; }
        .font-medium { font-weight: 500; }
        .text-slate-700 { color: var(--cg-text); }
        .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .text-xs { font-size: 0.75rem; }
        .h-8 { height: 2rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .mr-1 { margin-right: 0.25rem; }
        .pr-2 { padding-right: 0.5rem; }
        .max-h-500px { max-height: 500px; }
        .overflow-y-auto { overflow-y: auto; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}),ce&&e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"modal-content modal-content--wide",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-title",children:"添加课程"}),e.jsx("button",{className:"modal-close",onClick:()=>{C(!1),P("")},children:e.jsx(b,{size:20})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"tcm-toolbar__search mb-4",children:[e.jsx(Pe,{size:18,className:"tcm-search__icon"}),e.jsx("input",{type:"text",placeholder:"搜索所有课程...",value:j,onChange:a=>P(a.target.value),className:"tcm-search__input",autoFocus:!0})]}),ne?e.jsx("div",{className:"p-8 text-center text-slate-400",children:"加载中..."}):Q.length===0?e.jsx("div",{className:"p-8 text-center text-slate-400",children:j?"没有找到匹配的课程":"没有更多可添加的课程"}):e.jsx("div",{className:"available-courses-grid max-h-[500px] overflow-y-auto pr-2",children:Q.map(a=>e.jsxs("div",{className:"available-course-card",children:[a.cover_image?e.jsx("img",{src:a.cover_image,alt:"",className:"available-course-thumb"}):e.jsx("div",{className:"available-course-thumb flex items-center justify-center text-slate-400",children:e.jsx(R,{size:20})}),e.jsxs("div",{className:"available-course-info",children:[e.jsx("div",{className:"available-course-title",children:a.title}),e.jsx("div",{className:"available-course-cat",children:v.find(r=>r.key===a.category)?.label||a.category})]}),e.jsx("button",{className:"btn btn-primary btn-sm px-3",disabled:y.isPending,onClick:()=>pe(a.id),children:y.isPending&&y.variables?.courseId===a.id?"添加中...":e.jsxs(e.Fragment,{children:[e.jsx(M,{size:14,className:"mr-1"}),"添加"]})})]},a.id))})]}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{className:"btn btn-secondary",onClick:()=>{C(!1),P("")},children:"取消"})})]})})]})}export{za as TeacherCourseManagement};
