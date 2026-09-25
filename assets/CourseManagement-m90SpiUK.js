import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{u as r}from"./router-vendor-C4C_6Mfu.js";import{a as i}from"./query-vendor-KR0ej7Li.js";import{o as a}from"./api-C6QdgyJO.js";import{n as ee}from"./AuthContext-B_imQj8L.js";import{F as o,Mr as s,Mt as c,Nr as l,Vn as te,b as u,gt as ne,o as d,pi as f,tr as p,zi as m}from"./ui-vendor-BJACYxZ2.js";import{Kt as re,Ut as ie,nt as ae,rn as oe,vt as se}from"./index-CE3QzMvF.js";import{t as ce}from"./ResizableSidebar-CPE1w4ae.js";import{n as le,t as h}from"./Pagination-DV4CfB8n.js";var g=e(t(),1),_=n(),v=async(e,t)=>(await a(e,t)).json(),y=[{key:`basics`,label:`认知与启蒙`,icon:`📚`,color:`var(--admin-primary)`},{key:`intermediate`,label:`方法与工具`,icon:`📖`,color:`var(--admin-primary)`},{key:`advanced`,label:`实践与探究`,icon:`🎓`,color:`var(--admin-success)`}],ue=[{key:`beginner`,label:`初级`,color:`var(--admin-success)`},{key:`intermediate`,label:`中级`,color:`var(--admin-warning)`},{key:`advanced`,label:`高级`,color:`var(--admin-danger)`}];function b(){let e=r(),t=i(),{user:n}=ee(),[b,x]=(0,g.useState)(``),[de,S]=(0,g.useState)(1),[C,fe]=(0,g.useState)(`list`),[w,T]=(0,g.useState)(null),[pe,E]=(0,g.useState)(!1),[D,O]=(0,g.useState)(!1),[k,A]=(0,g.useState)(``),[j,M]=(0,g.useState)(!1),N=(0,g.useRef)(null),{data:P,isLoading:me,error:F}=re(),{data:I,isLoading:he}=se(),L=ae(),ge=ie(),_e=oe(),ve=(0,g.useMemo)(()=>{if(!I||!P)return[];let e=new Set(P.map(e=>e.id));return I.filter(t=>!e.has(t.id))},[I,P]),[R,z]=(0,g.useState)(``),B=ve.filter(e=>e.title.toLowerCase().includes(R.toLowerCase())||e.description?.toLowerCase().includes(R.toLowerCase())),ye=async e=>{if(n)try{await L.mutateAsync({courseId:e,teacherId:n.id}),t.invalidateQueries({queryKey:[`teacherCourses`]})}catch{alert(`添加课程失败`)}},V=async(e,r)=>{if(e.stopPropagation(),n&&window.confirm(`确认将「${r.title}」从您的课程列表中移除？\n这不会删除课程本身，仅解除关联。`))try{await ge.mutateAsync({courseId:r.id,teacherId:n.id}),t.invalidateQueries({queryKey:[`teacherCourses`]})}catch{alert(`移除课程失败`)}},H=async(e,t)=>{e.stopPropagation();try{await _e.mutateAsync({courseId:t.id,data:{is_published:!t.is_published}})}catch{alert(`切换课程状态失败`)}},[U,be]=(0,g.useState)([]),[W,xe]=(0,g.useState)([]),[G,Se]=(0,g.useState)([]),[K,Ce]=(0,g.useState)([]),q=(0,g.useCallback)(async e=>{let[t,n,r,i]=await Promise.all([v(`/api/content/courses/${e}/classes`),v(`/api/content/courses/${e}/teachers`),v(`/api/content/available-classes`),v(`/api/content/available-teachers`)]);be(t),xe(n),Se(r),Ce(i)},[]);(0,g.useEffect)(()=>{w&&q(w.id)},[w?.id]);let we=async e=>{if(!w)return;let t=U.some(t=>t.id===e);await a(`/api/content/courses/${w.id}/classes/${e}`,{method:t?`DELETE`:`POST`}),q(w.id)},Te=async e=>{if(!w)return;let t=W.some(t=>t.id===e);await a(`/api/content/courses/${w.id}/teachers/${e}`,{method:t?`DELETE`:`POST`}),q(w.id)},[J,Ee]=(0,g.useState)({});(0,g.useEffect)(()=>{P?.length&&P.forEach(e=>{Promise.all([v(`/api/content/courses/${e.id}/teachers`),v(`/api/content/courses/${e.id}/students`)]).then(([t,n])=>{Ee(r=>({...r,[e.id]:{teachers:Array.isArray(t)?t.map(e=>e.name||e.username):[],studentCount:Array.isArray(n)?n.length:0}}))}).catch(()=>{})})},[P]);let Y=(P||[]).filter(e=>!b||e.category===b),X=Math.max(1,Math.ceil(Y.length/6)),Z=Math.min(de,X),Q=Y.slice((Z-1)*6,Z*6);(0,g.useEffect)(()=>{S(1)},[b]);let $=e=>y.find(t=>t.key===e)?.color||`var(--cg-text-muted)`;return(0,_.jsxs)(`div`,{className:`page-container tcm-page`,children:[(0,_.jsxs)(`div`,{className:`tcm-layout`,children:[(0,_.jsxs)(`div`,{className:`tcm-content`,children:[(0,_.jsxs)(`div`,{className:`tcm-toolbar`,children:[(0,_.jsxs)(`button`,{className:`btn btn-primary btn-sm flex items-center gap-2`,onClick:()=>E(!0),children:[(0,_.jsx)(c,{size:16}),`添加课程`]}),(0,_.jsx)(`div`,{className:`tcm-toolbar__actions`,children:(0,_.jsx)(le,{mode:C,onChange:e=>fe(e)})})]}),me?(0,_.jsx)(`div`,{className:`tcm-empty`,children:`加载中...`}):F?(0,_.jsxs)(`div`,{className:`tcm-empty`,children:[(0,_.jsxs)(`p`,{children:[`加载失败: `,F instanceof Error?F.message:`未知错误`]}),(0,_.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>window.location.reload(),children:`重新加载`})]}):Y.length===0?(0,_.jsxs)(`div`,{className:`tcm-empty`,children:[(0,_.jsx)(m,{size:48,color:`var(--cg-text-muted)`}),(0,_.jsx)(`p`,{children:`没有找到匹配的教程`})]}):C===`list`?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{className:`tcm-list`,children:Q.map(t=>(0,_.jsxs)(`div`,{className:`tcm-course`,onClick:()=>e(`/teacher/course/detail/${t.id}`),children:[(0,_.jsx)(`div`,{className:`tcm-course__accent`,style:{background:$(t.category)}}),t.cover_image?(0,_.jsx)(`img`,{src:t.cover_image,alt:``,className:`tcm-course__thumb`}):(0,_.jsx)(`div`,{className:`tcm-course__thumb tcm-course__thumb--placeholder`,style:{background:$(t.category)+`20`,color:$(t.category)},children:(0,_.jsx)(m,{size:24})}),(0,_.jsxs)(`div`,{className:`tcm-course__body`,children:[(0,_.jsxs)(`div`,{className:`tcm-course__row1`,children:[(0,_.jsxs)(`div`,{className:`tcm-course__title`,children:[t.title,t.subtitle&&(0,_.jsxs)(`span`,{className:`tcm-course__subtitle`,children:[` — `,t.subtitle]})]}),(0,_.jsx)(`span`,{className:`tcm-course__tag`,style:{color:$(t.category),background:$(t.category)+`15`},children:y.find(e=>e.key===t.category)?.label||t.category})]}),t.description&&(0,_.jsx)(`div`,{className:`tcm-course__desc`,children:t.description.length>40?t.description.slice(0,40)+`...`:t.description}),t.keywords&&t.keywords.length>0&&(0,_.jsx)(`div`,{className:`tcm-course__keywords`,children:t.keywords.map((e,t)=>(0,_.jsx)(`span`,{className:`tcm-kw-tag`,children:e},t))}),(0,_.jsxs)(`div`,{className:`tcm-course__actions`,children:[(0,_.jsxs)(`div`,{className:`tcm-course__meta`,children:[J[t.id]?.teachers?.length?(0,_.jsxs)(`span`,{className:`tcm-course__meta-item`,children:[(0,_.jsx)(p,{size:13}),` `,J[t.id].teachers.join(`、`)]}):null,(0,_.jsxs)(`span`,{className:`tcm-course__meta-item`,children:[(0,_.jsx)(u,{size:13}),` `,J[t.id]?.studentCount??0,` 人选课`]})]}),(0,_.jsxs)(`div`,{className:`tcm-course__ops`,children:[(0,_.jsxs)(`button`,{className:`tcm-course__publish ${t.is_published?`tcm-course__publish--on`:``}`,onClick:e=>H(e,t),title:t.is_published?`点击下线（设为备课中）`:`点击上线（对学生开放）`,children:[t.is_published?(0,_.jsx)(s,{size:14}):(0,_.jsx)(l,{size:14}),(0,_.jsx)(`span`,{children:t.is_published?`已开课`:`备课中`})]}),(0,_.jsxs)(`button`,{className:`tcm-course__remove`,onClick:e=>V(e,t),title:`移除课程`,children:[(0,_.jsx)(o,{size:14}),` 删除`]})]})]})]}),(0,_.jsx)(f,{size:18,className:`tcm-course__arrow`})]},t.id))}),(0,_.jsx)(h,{current:Z,total:X,onChange:S,info:`共 ${Y.length} 门课程`})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{className:`tcm-grid`,children:Q.map(t=>(0,_.jsxs)(`div`,{className:`tcm-card`,style:{"--card-color":$(t.category)},onClick:()=>e(`/teacher/course/detail/${t.id}`),children:[t.cover_image?(0,_.jsx)(`div`,{className:`tcm-card__cover`,children:(0,_.jsx)(`img`,{src:t.cover_image,alt:t.title})}):(0,_.jsx)(`div`,{className:`tcm-card__top`}),(0,_.jsxs)(`div`,{className:`tcm-card__body`,children:[(0,_.jsxs)(`div`,{className:`tcm-card__title`,children:[t.title,t.subtitle&&(0,_.jsx)(`div`,{className:`tcm-card__subtitle`,children:t.subtitle})]}),t.description&&(0,_.jsx)(`div`,{className:`tcm-card__desc`,children:t.description}),(0,_.jsxs)(`div`,{className:`tcm-card__footer`,children:[(0,_.jsx)(`div`,{className:`tcm-card__badge`,style:{color:$(t.category),background:$(t.category)+`18`},children:y.find(e=>e.key===t.category)?.label||t.category}),(0,_.jsxs)(`div`,{className:`tcm-course__ops`,children:[(0,_.jsx)(`button`,{className:`tcm-course__publish tcm-course__publish--compact ${t.is_published?`tcm-course__publish--on`:``}`,onClick:e=>H(e,t),title:t.is_published?`点击下线（设为备课中）`:`点击上线（对学生开放）`,children:t.is_published?(0,_.jsx)(s,{size:13}):(0,_.jsx)(l,{size:13})}),(0,_.jsx)(`button`,{className:`tcm-course__remove`,onClick:e=>V(e,t),title:`移除课程`,children:(0,_.jsx)(o,{size:14})})]})]})]})]},t.id))}),(0,_.jsx)(h,{current:Z,total:X,onChange:S,info:`共 ${Y.length} 门课程`})]})]}),(0,_.jsxs)(ce,{side:`right`,defaultWidth:260,minWidth:200,maxWidth:500,persistKey:`sidebar-teacher-course-mgmt`,collapsedTooltip:`课程分类`,collapsedIcon:(0,_.jsx)(`span`,{children:`📚`}),className:`tcm-sidebar`,children:[(0,_.jsx)(`div`,{className:`tcm-sidebar__header`,children:(0,_.jsx)(`h3`,{children:`课程分类`})}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__list`,children:[(0,_.jsxs)(`div`,{className:`tcm-sidebar__item ${b?``:`active`}`,onClick:()=>x(``),children:[(0,_.jsx)(`div`,{className:`tcm-sidebar__icon`,children:`📋`}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__info`,children:[(0,_.jsx)(`div`,{className:`tcm-sidebar__name`,children:`全部`}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__count`,children:[(P||[]).length,` 门教程`]})]}),!b&&(0,_.jsx)(f,{size:16})]}),y.map(e=>{let t=(P||[]).filter(t=>t.category===e.key).length;return(0,_.jsxs)(`div`,{className:`tcm-sidebar__item ${b===e.key?`active`:``}`,onClick:()=>x(e.key),children:[(0,_.jsx)(`div`,{className:`tcm-sidebar__icon`,children:e.icon}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__info`,children:[(0,_.jsx)(`div`,{className:`tcm-sidebar__name`,children:e.label}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__count`,children:[t,` 门教程`]})]}),b===e.key&&(0,_.jsx)(f,{size:16})]},e.key)})]}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__stats`,children:[(0,_.jsxs)(`div`,{className:`tcm-sidebar__stat`,children:[(0,_.jsx)(`span`,{children:`总教程数`}),(0,_.jsx)(`span`,{className:`tcm-sidebar__stat-val`,children:(P||[]).length})]}),(0,_.jsxs)(`div`,{className:`tcm-sidebar__stat`,children:[(0,_.jsx)(`span`,{children:`当前显示`}),(0,_.jsx)(`span`,{className:`tcm-sidebar__stat-val`,children:Y.length})]})]})]})]}),w&&(0,_.jsx)(`div`,{className:`tcm-modal__overlay`,onClick:()=>T(null),children:(0,_.jsxs)(`div`,{className:`tcm-modal`,onClick:e=>e.stopPropagation(),children:[(0,_.jsxs)(`div`,{className:`tcm-modal__header`,children:[(0,_.jsx)(`h3`,{children:`编辑教程信息`}),(0,_.jsx)(`button`,{className:`tcm-modal__close`,onClick:()=>T(null),children:(0,_.jsx)(d,{size:18})})]}),(0,_.jsxs)(`div`,{className:`tcm-modal__body`,children:[(0,_.jsxs)(`div`,{className:`tcm-cover-upload`,children:[w.coverImage?(0,_.jsxs)(`div`,{className:`tcm-cover-preview`,children:[(0,_.jsx)(`img`,{src:w.coverImage,alt:`封面`}),(0,_.jsx)(`button`,{className:`tcm-cover-change`,onClick:()=>N.current?.click(),children:j?`上传中...`:`更换封面`})]}):(0,_.jsxs)(`button`,{className:`tcm-cover-placeholder`,onClick:()=>N.current?.click(),disabled:j,children:[(0,_.jsx)(te,{size:24}),(0,_.jsx)(`span`,{children:j?`上传中...`:`点击上传封面图片`}),(0,_.jsx)(`span`,{className:`tcm-cover-hint`,children:`支持 jpg/png/webp，最大 5MB`})]}),(0,_.jsx)(`input`,{ref:N,type:`file`,accept:`image/*`,style:{display:`none`},onChange:async e=>{if(!w||!e.target.files?.[0])return;let n=e.target.files[0];M(!0);try{let e=new FormData;e.append(`file`,n);let r=await(await a(`/api/content/courses/${w.id}/cover`,{method:`POST`,credentials:`include`,body:e})).json();T({...w,coverImage:r.cover_image}),t.invalidateQueries({queryKey:[`courses`]})}catch(e){alert(e instanceof Error?e.message:`上传失败`)}finally{M(!1)}}})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[`教程标题`,(0,_.jsx)(`input`,{type:`text`,className:`tcm-modal__input`,value:w.title,onChange:e=>T({...w,title:e.target.value}),placeholder:`输入教程标题`})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[`副标题`,(0,_.jsx)(`input`,{type:`text`,className:`tcm-modal__input`,value:w.subtitle,onChange:e=>T({...w,subtitle:e.target.value}),placeholder:`输入副标题（可选）`})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[`课程等级`,(0,_.jsx)(`select`,{className:`tcm-modal__input`,value:w.level,onChange:e=>T({...w,level:e.target.value}),children:ue.map(e=>(0,_.jsx)(`option`,{value:e.key,children:e.label},e.key))})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[`教程简介`,(0,_.jsx)(`textarea`,{className:`tcm-modal__textarea`,value:w.description,onChange:e=>T({...w,description:e.target.value}),placeholder:`输入教程简介`,rows:3})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[`关键词`,(0,_.jsxs)(`div`,{className:`tcm-kw-editor`,children:[w.keywords.map((e,t)=>(0,_.jsxs)(`span`,{className:`tcm-kw-tag tcm-kw-tag--edit`,children:[e,(0,_.jsx)(`button`,{onClick:()=>T({...w,keywords:w.keywords.filter((e,n)=>n!==t)}),className:`tcm-kw-tag__remove`,children:(0,_.jsx)(d,{size:12})})]},t)),(0,_.jsxs)(`div`,{className:`tcm-kw-add`,children:[(0,_.jsx)(`input`,{type:`text`,className:`tcm-kw-add__input`,value:k,onChange:e=>A(e.target.value),onKeyDown:e=>{e.key===`Enter`&&k.trim()&&(e.preventDefault(),w.keywords.includes(k.trim())||T({...w,keywords:[...w.keywords,k.trim()]}),A(``))},placeholder:`输入关键词后回车`}),(0,_.jsx)(`button`,{className:`tcm-kw-add__btn`,onClick:()=>{k.trim()&&!w.keywords.includes(k.trim())&&(T({...w,keywords:[...w.keywords,k.trim()]}),A(``))},children:(0,_.jsx)(c,{size:14})})]})]})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[(0,_.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,_.jsx)(u,{size:14}),` 关联班级`]}),(0,_.jsx)(`div`,{className:`tcm-relation-list`,children:G.length>0?G.map(e=>{let t=U.some(t=>t.id===e.id);return(0,_.jsxs)(`button`,{className:`tcm-relation-chip ${t?`tcm-relation-chip--active`:``}`,onClick:()=>we(e.id),children:[e.name,e.grade?` (${e.grade})`:``,t&&(0,_.jsx)(d,{size:12})]},e.id)}):(0,_.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.85rem`},children:`暂无可用班级`})})]}),(0,_.jsxs)(`label`,{className:`tcm-modal__label`,children:[(0,_.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,_.jsx)(p,{size:14}),` 关联教师`]}),(0,_.jsx)(`div`,{className:`tcm-relation-list`,children:K.length>0?K.map(e=>{let t=W.some(t=>t.id===e.id);return(0,_.jsxs)(`button`,{className:`tcm-relation-chip ${t?`tcm-relation-chip--active`:``}`,onClick:()=>Te(e.id),children:[e.name||e.username,t&&(0,_.jsx)(d,{size:12})]},e.id)}):(0,_.jsx)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.85rem`},children:`暂无可用教师`})})]})]}),(0,_.jsxs)(`div`,{className:`tcm-modal__footer`,children:[(0,_.jsx)(`button`,{className:`tcm-modal__btn tcm-modal__btn--cancel`,onClick:()=>T(null),children:`取消`}),(0,_.jsx)(`button`,{className:`tcm-modal__btn tcm-modal__btn--save`,onClick:async()=>{if(w){O(!0);try{await a(`/api/content/courses/${w.id}`,{method:`PUT`,credentials:`include`,body:JSON.stringify({title:w.title,subtitle:w.subtitle,description:w.description,keywords:w.keywords,level:w.level})},{includeJsonContentType:!0}),t.invalidateQueries({queryKey:[`courses`]}),T(null)}catch(e){alert(e instanceof Error?e.message:`保存失败`)}finally{O(!1)}}},disabled:D,children:D?`保存中...`:`保存`})]})]})}),(0,_.jsx)(`style`,{children:`
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
      `}),pe&&(0,_.jsx)(`div`,{className:`modal-overlay`,children:(0,_.jsxs)(`div`,{className:`modal-content modal-content--wide`,children:[(0,_.jsxs)(`div`,{className:`modal-header`,children:[(0,_.jsx)(`div`,{className:`modal-title`,children:`添加课程`}),(0,_.jsx)(`button`,{className:`modal-close`,onClick:()=>{E(!1),z(``)},children:(0,_.jsx)(d,{size:20})})]}),(0,_.jsxs)(`div`,{className:`modal-body`,children:[(0,_.jsxs)(`div`,{className:`tcm-toolbar__search mb-4`,children:[(0,_.jsx)(ne,{size:18,className:`tcm-search__icon`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`搜索所有课程...`,value:R,onChange:e=>z(e.target.value),className:`tcm-search__input`,autoFocus:!0})]}),he?(0,_.jsx)(`div`,{className:`p-8 text-center text-slate-400`,children:`加载中...`}):B.length===0?(0,_.jsx)(`div`,{className:`p-8 text-center text-slate-400`,children:R?`没有找到匹配的课程`:`没有更多可添加的课程`}):(0,_.jsx)(`div`,{className:`available-courses-grid max-h-[500px] overflow-y-auto pr-2`,children:B.map(e=>(0,_.jsxs)(`div`,{className:`available-course-card`,children:[e.cover_image?(0,_.jsx)(`img`,{src:e.cover_image,alt:``,className:`available-course-thumb`}):(0,_.jsx)(`div`,{className:`available-course-thumb flex items-center justify-center text-slate-400`,children:(0,_.jsx)(m,{size:20})}),(0,_.jsxs)(`div`,{className:`available-course-info`,children:[(0,_.jsx)(`div`,{className:`available-course-title`,children:e.title}),(0,_.jsx)(`div`,{className:`available-course-cat`,children:y.find(t=>t.key===e.category)?.label||e.category})]}),(0,_.jsx)(`button`,{className:`btn btn-primary btn-sm px-3`,disabled:L.isPending,onClick:()=>ye(e.id),children:L.isPending&&L.variables?.courseId===e.id?`添加中...`:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{size:14,className:`mr-1`}),`添加`]})})]},e.id))})]}),(0,_.jsx)(`div`,{className:`modal-footer`,children:(0,_.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>{E(!1),z(``)},children:`取消`})})]})})]})}export{b as TeacherCourseManagement};