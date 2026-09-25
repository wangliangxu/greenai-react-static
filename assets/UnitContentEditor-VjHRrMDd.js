import{s as e}from"./editor-vendor-Ch6zc3nG.js";import{d as t,u as n}from"./router-vendor-C4C_6Mfu.js";import{g as r,pi as i,ra as a,xn as o,zn as s}from"./ui-vendor-BJACYxZ2.js";import{Xt as c,bt as l,ft as u,nn as d}from"./index-CE3QzMvF.js";import{t as f}from"./ResizableSidebar-CPE1w4ae.js";import{t as p}from"./MarkdownEditor-BVAT_GMV.js";var m=e();function h(e){return Array.isArray(e)?e:[]}function g(){let{unitId:e,contentType:g,contentId:_}=t(),v=n(),y=`content`,b=g,x=g,{data:S,isLoading:C}=c(e),{data:w}=u(e,b,_),T=d(),E=l(),D=null;S&&_&&(D=h(S.cases).find(e=>String(e.id)===_)||D,D=h(S.activities).find(e=>String(e.id)===_)||D,D=h(S.method).find(e=>String(e.id)===_)||D,D=h(S.practice_tools).find(e=>String(e.id)===_)||D,D=h(S.practice).find(e=>String(e.id)===_)||D,D=h(S.resources).find(e=>String(e.id)===_)||D);let O=async t=>{e&&_&&g&&(w?await T.mutateAsync({markdownId:w.id,updates:{markdown_content:t}}):await E.mutateAsync({unit_id:e,content_type:x,content_id:_,title:D?.title||`未命名内容`,markdown_content:t}))};if(C)return(0,m.jsx)(`div`,{className:`page-container`,children:(0,m.jsx)(`div`,{className:`loading`,children:`加载中...`})});if(!S)return(0,m.jsx)(`div`,{className:`page-container`,children:(0,m.jsxs)(`div`,{className:`error-state`,children:[(0,m.jsx)(`h3`,{children:`未找到课程单元`}),(0,m.jsx)(`button`,{onClick:()=>v(`/teacher/course`),className:`btn btn-primary`,children:`返回单元目录`})]})});let k=[{key:`intro`,label:`课程简介`,icon:s},{key:`content`,label:`课程目录`,icon:o},{key:`videos`,label:`视频目录`,icon:r}];return(0,m.jsxs)(`div`,{className:`page-container unit-content-editor-page`,children:[(0,m.jsxs)(`div`,{className:`page-header unit-editor-header`,children:[(0,m.jsxs)(`button`,{onClick:()=>v(`/teacher/course/${e}`),className:`btn-link`,children:[(0,m.jsx)(a,{size:20}),` 返回单元目录`]}),(0,m.jsx)(`div`,{className:`header-content`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,m.jsx)(`span`,{className:`badge badge-${S.course_category}`,children:S.course_category===`basics`?`认知与启蒙`:S.course_category===`intermediate`?`方法与工具`:S.course_category===`advanced`?`实践与探究`:S.course_category}),(0,m.jsxs)(`h1`,{className:`page-title`,style:{margin:0},children:[(0,m.jsxs)(`span`,{style:{marginRight:`0.5rem`},children:[`单元 `,S.order]}),S.title]})]})})]}),(0,m.jsxs)(`div`,{className:`course-management-layout`,children:[(0,m.jsxs)(f,{side:`left`,defaultWidth:240,minWidth:180,maxWidth:360,persistKey:`sidebar-teacher-unit-editor`,collapsedTooltip:`课程导航`,collapsedIcon:(0,m.jsx)(`span`,{children:`📚`}),className:`course-sidebar`,children:[(0,m.jsx)(`div`,{className:`sidebar-header`,children:(0,m.jsx)(`h3`,{children:S.title})}),(0,m.jsx)(`div`,{className:`category-list`,children:k.map(t=>(0,m.jsxs)(`button`,{className:`category-item ${y===t.key?`active`:``}`,onClick:()=>v(`/teacher/course/${e}?tab=${t.key}`),children:[(0,m.jsx)(`span`,{className:`category-icon`,children:(0,m.jsx)(t.icon,{size:18})}),(0,m.jsx)(`div`,{className:`category-info`,children:(0,m.jsx)(`div`,{className:`category-name`,children:t.label})}),y===t.key&&(0,m.jsx)(i,{size:16})]},t.key))})]}),(0,m.jsx)(`div`,{className:`course-content`,children:(0,m.jsx)(`div`,{className:`card`,style:{padding:0,overflow:`hidden`,display:`flex`,flexDirection:`column`,height:`calc(100vh - 200px)`},children:(0,m.jsx)(`div`,{className:`card-body`,style:{padding:0,flex:1,overflow:`hidden`},children:(0,m.jsx)(p,{content:w?.markdown_content||``,onSave:O,placeholder:`在此输入 Markdown 内容...`,style:{height:`100%`,border:`none`,borderRadius:0}})})})})]}),(0,m.jsx)(`style`,{children:`
        .unit-content-editor-page {
          background: var(--cg-bg);
          min-height: calc(100vh - 64px);
        }

        .unit-editor-header {
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 14px;
          padding: 12px;
        }

        .course-management-layout {
          display: flex;
          gap: 0;
          margin-top: 1.5rem;
          min-height: 600px;
          align-items: stretch;
        }

        .course-sidebar {
          background: var(--cg-surface);
          display: flex;
          flex-direction: column;
          height: fit-content;
          overflow: hidden;
        }

        .sidebar-header {
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 1.25rem;
          border-bottom: 1px solid var(--cg-border);
          background: var(--cg-bg);
        }
        
        .sidebar-header h3 {
          margin: 0;
          font-size: 1rem;
          color: var(--cg-text-main);
        }

        .category-list {
          padding: 0.5rem;
        }

        .category-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--cg-text-muted);
          text-align: left;
        }

        .category-item:hover {
          background: var(--cg-bg);
          color: var(--cg-text-main);
        }

        .category-item.active {
          background: var(--admin-primary-light);
          color: var(--cg-primary);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
        }

        .category-info {
          flex: 1;
        }

        .category-name {
          font-weight: 500;
          font-size: 0.95rem;
        }

        .course-content {
          flex: 1;
        }
        
        .btn-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding: 8px 12px;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          color: var(--cg-text-muted);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.15s;
        }

        .btn-link:hover {
          background: color-mix(in srgb, var(--cg-surface) 84%, var(--admin-primary) 16%);
          border-color: color-mix(in srgb, var(--cg-border) 55%, var(--admin-primary) 45%);
          color: var(--cg-text);
        }
      `})]})}export{g as UnitContentEditor};