import{m as e,p as t}from"./router-vendor-D8ZmRCh1.js";import{g as n}from"./editor-vendor-DNpPfJmi.js";import{Ei as r,En as i,Gn as a,g as o,ha as s}from"./ui-vendor-DstAu2i8.js";import{Yt as c,dt as l,tn as u,yt as d}from"./index-nf3oTw9A.js";import{t as f}from"./ResizableSidebar-B_ohGaYz.js";import{t as p}from"./MarkdownEditor-obBOlQnV.js";var m=n();function h(e){return Array.isArray(e)?e:[]}function g(){let{unitId:n,contentType:g,contentId:_}=e(),v=t(),y=`content`,b=g,x=g,{data:S,isLoading:C}=c(n),{data:w}=l(n,b,_),T=u(),E=d(),D=null;S&&_&&(D=h(S.cases).find(e=>String(e.id)===_)||D,D=h(S.activities).find(e=>String(e.id)===_)||D,D=h(S.method).find(e=>String(e.id)===_)||D,D=h(S.practice_tools).find(e=>String(e.id)===_)||D,D=h(S.practice).find(e=>String(e.id)===_)||D,D=h(S.resources).find(e=>String(e.id)===_)||D);let O=async e=>{n&&_&&g&&(w?await T.mutateAsync({markdownId:w.id,updates:{markdown_content:e}}):await E.mutateAsync({unit_id:n,content_type:x,content_id:_,title:D?.title||`未命名内容`,markdown_content:e}))};if(C)return(0,m.jsx)(`div`,{className:`page-container`,children:(0,m.jsx)(`div`,{className:`loading`,children:`加载中...`})});if(!S)return(0,m.jsx)(`div`,{className:`page-container`,children:(0,m.jsxs)(`div`,{className:`error-state`,children:[(0,m.jsx)(`h3`,{children:`未找到课程单元`}),(0,m.jsx)(`button`,{onClick:()=>v(`/teacher/course`),className:`btn btn-primary`,children:`返回单元目录`})]})});let k=[{key:`intro`,label:`课程简介`,icon:a},{key:`content`,label:`课程目录`,icon:i},{key:`videos`,label:`视频目录`,icon:o}];return(0,m.jsxs)(`div`,{className:`page-container unit-content-editor-page`,children:[(0,m.jsxs)(`div`,{className:`page-header unit-editor-header`,children:[(0,m.jsxs)(`button`,{onClick:()=>v(`/teacher/course/${n}`),className:`btn-link`,children:[(0,m.jsx)(s,{size:20}),` 返回单元目录`]}),(0,m.jsx)(`div`,{className:`header-content`,children:(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,m.jsx)(`span`,{className:`badge badge-${S.course_category}`,children:S.course_category===`basics`?`认知与启蒙`:S.course_category===`intermediate`?`方法与工具`:S.course_category===`advanced`?`实践与探究`:S.course_category}),(0,m.jsxs)(`h1`,{className:`page-title`,style:{margin:0},children:[(0,m.jsxs)(`span`,{style:{marginRight:`0.5rem`},children:[`单元 `,S.order]}),S.title]})]})})]}),(0,m.jsxs)(`div`,{className:`course-management-layout`,children:[(0,m.jsxs)(f,{side:`left`,defaultWidth:240,minWidth:180,maxWidth:360,persistKey:`sidebar-teacher-unit-editor`,collapsedTooltip:`课程导航`,collapsedIcon:(0,m.jsx)(`span`,{children:`📚`}),className:`course-sidebar`,children:[(0,m.jsx)(`div`,{className:`sidebar-header`,children:(0,m.jsx)(`h3`,{children:S.title})}),(0,m.jsx)(`div`,{className:`category-list`,children:k.map(e=>(0,m.jsxs)(`button`,{className:`category-item ${y===e.key?`active`:``}`,onClick:()=>v(`/teacher/course/${n}?tab=${e.key}`),children:[(0,m.jsx)(`span`,{className:`category-icon`,children:(0,m.jsx)(e.icon,{size:18})}),(0,m.jsx)(`div`,{className:`category-info`,children:(0,m.jsx)(`div`,{className:`category-name`,children:e.label})}),y===e.key&&(0,m.jsx)(r,{size:16})]},e.key))})]}),(0,m.jsx)(`div`,{className:`course-content`,children:(0,m.jsx)(`div`,{className:`card`,style:{padding:0,overflow:`hidden`,display:`flex`,flexDirection:`column`,height:`calc(100vh - 200px)`},children:(0,m.jsx)(`div`,{className:`card-body`,style:{padding:0,flex:1,overflow:`hidden`},children:(0,m.jsx)(p,{content:w?.markdown_content||``,onSave:O,placeholder:`在此输入 Markdown 内容...`,style:{height:`100%`,border:`none`,borderRadius:0}})})})})]}),(0,m.jsx)(`style`,{children:`
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