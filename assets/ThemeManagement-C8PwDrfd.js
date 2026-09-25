import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{u as r}from"./router-vendor-C4C_6Mfu.js";import{F as i,Mt as a,Rt as o,bn as s,li as c,lt as l,ra as u}from"./ui-vendor-BJACYxZ2.js";import{t as d}from"./Modal-CfKwmEAE.js";import{n as f,t as p}from"./AdminToolbar-DlGMLpSD.js";import"./Toolbar-B1CAJCx3.js";import{f as m,i as h,r as g,t as _}from"./adminQueries-C-W6N3Cr.js";var v=e(t(),1),y=n(),b=()=>{let e=r(),{data:t,isLoading:n}=_(),b=g(),x=m(),S=h(),[C,w]=(0,v.useState)(null),[T,E]=(0,v.useState)(!1),D=()=>{w({theme_key:``,name:``,icon:`📄`,description:``}),E(!0)},O=e=>{w(e),E(!0)},k=async e=>{if(e.is_system){alert(`系统主题无法删除`);return}if(window.confirm(`确定要删除主题 "${e.name}" 吗？这可能导致关联数据失去分类。`))try{await S.mutateAsync(e.id),alert(`主题已删除`)}catch(e){alert(`删除失败: ${e.message}`)}};return(0,y.jsxs)(`div`,{className:`page-container`,children:[(0,y.jsx)(p,{leftActions:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{icon:(0,y.jsx)(u,{size:18}),variant:`secondary`,onClick:()=>e(`/admin/data`),children:`返回`}),(0,y.jsx)(f,{icon:(0,y.jsx)(a,{size:18}),variant:`primary`,onClick:D,children:`新增主题`})]})}),(0,y.jsx)(`div`,{className:`glass-panel`,style:{marginTop:`1rem`,padding:`2rem`,borderRadius:`24px`,background:`var(--cg-surface)`,minHeight:`calc(100vh - 250px)`},children:n?(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`5rem 0`,gap:`1rem`},children:[(0,y.jsx)(s,{size:40,className:`spinning`,style:{color:`var(--admin-primary)`}}),(0,y.jsx)(`p`,{style:{color:`var(--admin-primary)`,fontWeight:700},children:`正在加载分类体系...`})]}):(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(350px, 1fr))`,gap:`1.5rem`},children:t?.map(e=>(0,y.jsxs)(`div`,{style:{backgroundColor:`var(--cg-surface)`,border:`1px solid var(--cg-bg)`,borderRadius:`16px`,padding:`1.25rem`,display:`flex`,alignItems:`flex-start`,gap:`1rem`,transition:`all 0.2s`,position:`relative`,boxShadow:`0 1px 3px rgba(0,0,0,0.05)`},className:`theme-card-hover`,children:[(0,y.jsx)(`div`,{style:{fontSize:`2rem`,padding:`0.75rem`,backgroundColor:`var(--cg-bg)`,borderRadius:`12px`},children:e.icon||`📄`}),(0,y.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginBottom:`0.25rem`},children:[(0,y.jsx)(`h3`,{style:{fontWeight:800,color:`var(--cg-text)`,fontSize:`1rem`,margin:0},children:e.name}),e.is_system===1&&(0,y.jsx)(l,{size:14,color:`var(--admin-primary)`})]}),(0,y.jsx)(`code`,{style:{fontSize:`10px`,color:`var(--admin-primary)`,fontWeight:800,backgroundColor:`var(--admin-primary-light)`,padding:`0.125rem 0.5rem`,borderRadius:`100px`,display:`inline-block`,marginBottom:`0.5rem`},children:e.theme_key}),(0,y.jsx)(`p`,{style:{fontSize:`0.8125rem`,color:`var(--cg-text-muted)`,lineHeight:1.5,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`,margin:0},children:e.description||`暂无详细描述`})]}),(0,y.jsxs)(`div`,{className:`theme-card-actions`,style:{display:`flex`,flexDirection:`column`,gap:`0.625rem`},children:[(0,y.jsx)(`button`,{onClick:()=>O(e),className:`action-btn edit-btn`,title:`编辑内容`,children:(0,y.jsx)(o,{size:16})}),(0,y.jsx)(`button`,{onClick:()=>k(e),className:`action-btn delete-btn ${e.is_system?`disabled`:``}`,disabled:e.is_system===1,title:e.is_system?`系统保护：禁止删除`:`彻底移除主题`,children:(0,y.jsx)(i,{size:16})})]})]},e.id))})}),(0,y.jsx)(d,{isOpen:T,onClose:()=>E(!1),title:C?.id?`修订科学主题`:`开辟新科学主题`,width:`500px`,children:(0,y.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,y.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!C?.theme_key||!C?.name){alert(`主键和名称为必填项`);return}try{C.id?(await x.mutateAsync({themeId:C.id,themeData:C}),alert(`主题已更新`)):(await b.mutateAsync(C),alert(`主题已创建`)),E(!1),w(null)}catch(e){alert(`保存失败: ${e.message}`)}},style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(`label`,{style:{fontSize:`0.875rem`,fontWeight:700,color:`var(--cg-text)`},children:`主题标识符 (Theme Key)`}),(0,y.jsx)(`input`,{disabled:!!C?.id,value:C?.theme_key,onChange:e=>w({...C,theme_key:e.target.value}),placeholder:`例如: polar_ice_core`,style:{padding:`0.75rem 1rem`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,fontSize:`0.875rem`,fontFamily:`monospace`,backgroundColor:C?.id?`var(--cg-bg)`:`var(--cg-surface)`,outline:`none`}}),!C?.id&&(0,y.jsx)(`p`,{style:{fontSize:`10px`,color:`var(--cg-text-muted)`},children:`创建后不可修改，建议使用小写字母与下划线`})]}),(0,y.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`3fr 1fr`,gap:`1rem`},children:[(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(`label`,{style:{fontSize:`0.875rem`,fontWeight:700,color:`var(--cg-text)`},children:`显示名称`}),(0,y.jsx)(`input`,{disabled:C?.is_system===1,value:C?.name,onChange:e=>w({...C,name:e.target.value}),placeholder:`请输入主题名称`,style:{padding:`0.75rem 1rem`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,fontSize:`0.875rem`,outline:`none`}})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(`label`,{style:{fontSize:`0.875rem`,fontWeight:700,color:`var(--cg-text)`},children:`图标`}),(0,y.jsx)(`input`,{value:C?.icon,onChange:e=>w({...C,icon:e.target.value}),placeholder:`Emoji`,style:{padding:`0.75rem`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,fontSize:`1.25rem`,textAlign:`center`,outline:`none`}})]})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(`label`,{style:{fontSize:`0.875rem`,fontWeight:700,color:`var(--cg-text)`},children:`科学描述`}),(0,y.jsx)(`textarea`,{value:C?.description,onChange:e=>w({...C,description:e.target.value}),placeholder:`概括该科学主题覆盖的具体范畴...`,rows:4,style:{padding:`0.75rem 1rem`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,fontSize:`0.875rem`,outline:`none`,resize:`none`}})]}),C?.is_system===1&&(0,y.jsxs)(`div`,{style:{padding:`0.75rem 1rem`,backgroundColor:`var(--admin-warning-light)`,border:`1px solid #ffedd5`,borderRadius:`12px`,display:`flex`,gap:`0.5rem`,color:`#c2410c`},children:[(0,y.jsx)(c,{size:16,style:{flexShrink:0}}),(0,y.jsx)(`p`,{style:{fontSize:`10px`,lineHeight:1.5,margin:0},children:`系统内置主题受物理锁保护，名称不可编辑。`})]}),(0,y.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`1rem`,marginTop:`1rem`},children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>E(!1),style:{padding:`0.625rem 1.25rem`,border:`1px solid var(--cg-border)`,borderRadius:`10px`,backgroundColor:`var(--cg-surface)`,cursor:`pointer`,fontWeight:600,fontSize:`0.875rem`},children:`取消`}),(0,y.jsx)(`button`,{type:`submit`,className:`btn-premium`,style:{padding:`0.625rem 1.5rem`,background:`var(--brand-gradient)`,color:`white`,border:`none`,borderRadius:`10px`,fontWeight:700,cursor:`pointer`,fontSize:`0.875rem`},children:`确认保存`})]})]})})}),(0,y.jsx)(`style`,{children:`
        .theme-card-hover:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          transform: translateY(-2px);
          border-color: #e0e7ff !important;
        }
        .theme-card-hover .theme-card-actions {
          opacity: 1; /* 始终可见 */
          transition: transform 0.2s ease;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          background: var(--cg-surface);
        }

        .edit-btn {
          color: #4f46e5;
          border: 1px solid #e0e7ff;
        }

        .edit-btn:hover {
          background: var(--cg-bg);
          border-color: #c4b5fd;
          transform: scale(1.05);
        }

        .delete-btn {
          color: var(--admin-danger);
          border: 1px solid var(--admin-danger-light);
        }

        .delete-btn:hover:not(.disabled) {
          background: var(--cg-bg);
          border-color: var(--admin-danger-light);
          transform: scale(1.05);
        }

        .delete-btn.disabled {
          color: var(--cg-text-muted);
          border-color: var(--cg-bg);
          background-color: var(--cg-bg);
          cursor: not-allowed;
          opacity: 0.6;
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})};export{b as default};