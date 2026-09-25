import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{d as r,u as i}from"./router-vendor-C4C_6Mfu.js";import{l as a,n as o,o as s}from"./api-C6QdgyJO.js";import{Bn as c,Et as l,Mr as u,Mt as d,Pr as f,Pt as p,X as m,Zr as h,bn as g,br as _,et as v,g as y,gt as b,li as ee,o as x,pt as te,qn as S,ra as ne,xt as re,zi as C,zn as w,zr as T,zt as E}from"./ui-vendor-BJACYxZ2.js";import{At as ie,Xt as ae,bt as D,in as O,on as oe}from"./index-CE3QzMvF.js";import{n as k,r as se,t as ce}from"./AdminToolbar-DlGMLpSD.js";import{t as le}from"./AdminSidebar-Dj_yW167.js";import{t as ue}from"./AdminPageLayout-BYQNl95N.js";import"./ToolLoader-rluJiCGC.js";import{t as A}from"./MarkdownViewer-BVKb0pTj.js";import{t as de}from"./MarkdownEditor-BVAT_GMV.js";import{n as fe,t as pe}from"./NotebookCellsEditor-Ds_e2oR0.js";var j=e(t(),1),M=n(),me=e=>{if(!e)return[];if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}return[]},he=e=>{if(!e)return``;let t=e;if(typeof e==`string`)try{t=JSON.parse(e)}catch{return e}return Array.isArray(t)?t.map(e=>{let t=`### ${e.type?`[${e.type}]`:`[思考题]`}${e.title?` ${e.title}`:``}\n${e.question||``}`;return e.hint&&(t+=`\n\n> 💡 提示：${e.hint}`),t}).join(`

---

`):String(e)},ge=e=>!e||!e.trim()?[]:e.split(/\n\s*---\s*\n/).map(e=>{let t=e.trim().split(`
`);if(t.length===0)return null;let n=`思考题`,r=``,i=``,a=``,o=t[0].trim().match(/^###\s*\[([^\]]+)\]\s*(.*)/),s=0;o&&(n=o[1].trim(),r=o[2].trim(),s=1);let c=t.slice(s),l=c.findIndex(e=>e.trim().startsWith(`> 💡 提示：`)||e.trim().startsWith(`> 提示：`));if(l!==-1){i=c.slice(0,l).join(`
`).trim();let e=c[l].trim().replace(/^>\s*(💡\s*)?提示：/,``).trim(),t=c.slice(l+1).map(e=>e.replace(/^>\s*/,``)).join(`
`).trim();a=e+(t?`
`+t:``)}else i=c.join(`
`).trim();return{type:n,title:r,question:i,hint:a}}).filter(Boolean),_e=e=>{let t=ge(e);return!t||t.length===0?null:(0,M.jsxs)(`div`,{className:`homework-preview-list`,children:[t.map((e,n)=>(0,M.jsxs)(`div`,{className:`homework-item-preview`,children:[(0,M.jsxs)(`div`,{className:`homework-item-header`,children:[(0,M.jsxs)(`span`,{className:`homework-index`,children:[n+1,`.`]}),(0,M.jsx)(`span`,{className:`homework-type`,children:e.type||`思考题`}),e.title&&(0,M.jsx)(`span`,{className:`homework-title`,children:e.title})]}),(0,M.jsx)(`div`,{className:`homework-question`,children:(0,M.jsx)(A,{content:e.question})}),e.hint&&(0,M.jsx)(`div`,{className:`homework-hint`,children:(0,M.jsx)(A,{content:`> 💡 提示：${e.hint}`})}),n<t.length-1&&(0,M.jsx)(`hr`,{className:`homework-divider`})]},n)),(0,M.jsx)(`style`,{children:`
        .homework-preview-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 8px;
        }
        .homework-item-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-weight: 600;
          color: var(--cg-text);
        }
        .homework-index {
          color: var(--admin-primary);
        }
        .homework-type {
          background: #e0e7ff;
          color: #4338ca;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        .homework-question {
          color: var(--cg-text);
          line-height: 1.6;
        }
        .homework-hint {
          margin-top: 12px;
        }
        .homework-divider {
          border: none;
          border-top: 1px dashed var(--cg-border);
          margin: 1.5rem 0;
        }

      `})]})};function ve(e,t){if(typeof e.order==`number`&&typeof t.order==`number`&&e.order!==t.order)return e.order-t.order;let n=e.id.match(/lesson-(\d+)$/),r=t.id.match(/lesson-(\d+)$/);if(n&&r){let e=parseInt(n[1],10),t=parseInt(r[1],10);if(e!==t)return e-t}return e.id.localeCompare(t.id)}function N(){let{courseId:e,unitId:t}=r(),n=i(),{data:a,isLoading:l}=ae(t),f=oe(),p=O(),h=D(),[b,N]=(0,j.useState)(``),{data:P,isFetching:F}=ie(b.includes(`lesson`)?b:``),[Se,Te]=(0,j.useState)(!1),[Ee,I]=(0,j.useState)(!1),[L,R]=(0,j.useState)({title:``,description:``,tags:[],tagsInput:``}),[De,Oe]=(0,j.useState)(!1),[z,B]=(0,j.useState)(!1),[V,H]=(0,j.useState)(``),[U,W]=(0,j.useState)(!1),[G,K]=(0,j.useState)({title:``,description:``,order:1,cover_image:``,tags:[],tagsInput:``,grade:``}),ke=(()=>{if(!a?.lessons)return 0;let e=new Set;for(let t of a.lessons){let n=t.content||``,r=/!\[[^\]]*\]\(([^)]+)\)/g,i;for(;(i=r.exec(n))!==null;)e.add(i[1])}return e.size})(),[Ae,je]=(0,j.useState)(0),[Me,Ne]=(0,j.useState)(0),[Pe,Fe]=(0,j.useState)(0),[q,J]=(0,j.useState)([]),[Ie,Le]=(0,j.useState)(!1),[Y,Re]=(0,j.useState)(!1),[ze,Be]=(0,j.useState)(!1),[X,Z]=(0,j.useState)(0),[Q,Ve]=(0,j.useState)({});(0,j.useEffect)(()=>{t&&s(`/api/content/unit/${t}/videos`).then(e=>e.json()).then(e=>{je(Array.isArray(e)?e.length:0)}).catch(()=>je(0))},[t]),(0,j.useEffect)(()=>{t&&s(`/api/content/unit/${t}/resources?resource_type=audio`).then(e=>e.json()).then(e=>{Ne(Array.isArray(e)?e.length:0)}).catch(()=>Ne(0))},[t]),(0,j.useEffect)(()=>{t&&(async()=>{try{let e=await(await s(`/api/content/unit/${t}/apps`)).json();Fe(Array.isArray(e)?e.length:0)}catch{Fe(0)}})()},[t]);let He=(0,j.useCallback)(async()=>{if(t){Le(!0);try{let{data:e}=await o.get(`/api/admin/units/${t}/ai-quick-actions`);J(Array.isArray(e)?e:[]),Z(0),Ve({}),Be(!0)}catch(e){console.error(`加载 AI 快捷按钮失败`,e),J([]),Z(0),Ve({}),Be(!0)}finally{Le(!1)}}},[t]);(0,j.useEffect)(()=>{t&&He()},[t,He]);let[Ue,We]=(0,j.useState)({title:``,description:``,order:1});a&&b===``&&a.lessons&&a.lessons.length>0&&N([...a.lessons].sort(ve)[0].id),a&&Ue.title===``&&!z&&We({title:a.title,description:a.description||``,order:a.order||1});let Ge=e=>{R({title:e.title||``,description:e.description||``,tags:e.tags||[],tagsInput:``}),I(!0)},Ke=async()=>{if(b.includes(`lesson`)){Oe(!0);try{await p.mutateAsync({lessonId:b,updates:{title:L.title,description:L.description,tags:L.tags}}),I(!1)}catch{alert(`保存失败`)}finally{Oe(!1)}}},qe=()=>{let e=L.tagsInput.trim();e&&!L.tags.includes(e)&&R(t=>({...t,tags:[...t.tags,e],tagsInput:``}))},Je=e=>{R(t=>({...t,tags:t.tags.filter(t=>t!==e)}))},$=e=>{b===``&&a?K({title:a.title,description:a.description||``,order:a.order||1,cover_image:a.cover_image||``,tags:me(a.tags),tagsInput:``,grade:a.grade||``}):H(e),B(!0)},Ye=()=>{B(!1),H(``)},Xe=e=>{let t=[],n=e;return(n.match(/```/g)||[]).length%2!=0&&t.push("检测到未闭合的代码块（```），请检查"),(n.match(/\*\*/g)||[]).length%2!=0&&t.push(`检测到未闭合的加粗标记（**），请检查`),/\[([^\]]*)\]\(\s*\)/.test(n)&&t.push(`检测到空链接，请补充链接地址`),/!\[([^\]]*)\]\(\s*\)/.test(n)&&t.push(`检测到空图片路径，请补充图片地址`),n=n.replace(/\n{3,}/g,`

`),n=n.trimStart(),{processed:n,warnings:t}},Ze=async()=>{if(!U){if(b===``&&a){if(!G.title.trim()){alert(`请输入标题`);return}W(!0);try{await f.mutateAsync({unitId:a.id,data:{title:G.title.trim(),description:G.description.trim(),order:G.order,cover_image:G.cover_image.trim()||null,tags:G.tags,grade:G.grade.trim()||null}}),B(!1)}catch{alert(`保存失败`)}finally{W(!1)}return}if(b.includes(`lesson`)){let{processed:e,warnings:t}=Xe(V);if(t.length>0){let e=t.join(`
`);if(!confirm(`内容检查发现以下问题：\n\n${e}\n\n是否继续保存？`))return}W(!0);try{await p.mutateAsync({lessonId:b,updates:{markdown_content:e}}),B(!1),H(``)}catch{alert(`保存失败`)}finally{W(!1)}}else{W(!0);try{let e={};b===`objectives`?e.objectives=V:b===`unit-content`?e.content=V:b===`unit-homework`&&(e.homework=ge(V)),await f.mutateAsync({unitId:t,data:e}),B(!1),H(``)}catch{alert(`保存失败`)}finally{W(!1)}}}},Qe=(0,j.useCallback)(async e=>{if(!a||!t)return;let n=`:::tool:${e}\n:::`,r=typeof a.content==`string`?a.content:``;if(r.includes(`:::tool:${e}`)){alert(`该互动已经插入章节正文。`);return}let i=`${r.trimEnd()}${r.trim()?`

`:``}${n}\n`;await f.mutateAsync({unitId:t,data:{content:i}}),Fe(e=>Math.max(1,e)),alert(`互动已插入章节正文末尾。你可以进入“章节正文”继续调整位置。`)},[a,t,f]),$e=async()=>{if(a){W(!0);try{let e=crypto.randomUUID?crypto.randomUUID():`lesson-${Math.random().toString(36).substr(2,8)}`,t=await h.mutateAsync({unit_id:a.id,content_type:`lesson`,content_id:e,title:`新课时`,markdown_content:`新课时的内容...`});N(t.id)}catch(e){console.error(`Failed to create lesson:`,e),alert(`添加课时失败`)}finally{W(!1)}}},et=(0,j.useMemo)(()=>{if(!a)return[];let e=[...a.lessons||[]].sort(ve),t=[{id:``,label:`基本信息`,icon:(0,M.jsx)(w,{size:16})},{id:`objectives`,label:`学习目标`,icon:(0,M.jsx)(u,{size:16})}];return a.content&&t.push({id:`unit-content`,label:`章节正文`,icon:(0,M.jsx)(C,{size:16})}),a.homework&&t.push({id:`unit-homework`,label:`课后作业`,icon:(0,M.jsx)(E,{size:16})}),t.push({id:`code-practice`,label:`代码实践`,icon:(0,M.jsx)(_,{size:16})}),t.push({id:`__section_lessons`,label:`课时列表`,isSectionTitle:!0,render:()=>(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},children:[(0,M.jsx)(`span`,{children:`课时列表`}),(0,M.jsx)(`button`,{onClick:e=>{e.stopPropagation(),$e()},title:`新建课时`,style:{background:`none`,border:`none`,color:`var(--cg-text-muted)`,cursor:`pointer`,display:`flex`,alignItems:`center`,padding:`2px 4px`,borderRadius:`4px`},onMouseOver:e=>e.currentTarget.style.color=`var(--cg-primary)`,onMouseOut:e=>e.currentTarget.style.color=`var(--cg-text-muted)`,children:(0,M.jsx)(d,{size:14})})]})}),e.length>0&&e.forEach((e,n)=>{t.push({id:e.id,label:e.title||`课时 ${n+1}`,icon:(0,M.jsx)(C,{size:14})})}),t.push({id:`resources-group`,label:`关联资源`,icon:(0,M.jsx)(c,{size:16}),expandable:!0,defaultExpanded:!0,children:[{id:`resources`,label:`图片资源`,icon:(0,M.jsx)(c,{size:14}),count:ke||void 0},{id:`videos`,label:`视频资源`,icon:(0,M.jsx)(y,{size:14}),count:Ae||void 0},{id:`podcasts`,label:`播客资源`,icon:(0,M.jsx)(S,{size:14}),count:Me||void 0},{id:`datasets`,label:`数据集`,icon:(0,M.jsx)(T,{size:14})},{id:`apps`,label:`互动与动画`,icon:(0,M.jsx)(v,{size:14}),count:Pe||void 0},{id:`ai-quick-actions`,label:`AI 快捷按钮`,icon:(0,M.jsx)(v,{size:14}),count:q.length||void 0}]}),t},[a,ke,Ae,Me,Pe,q.length]),tt=(0,j.useMemo)(()=>a?(0,M.jsx)(ce,{leftActions:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{icon:(0,M.jsx)(ne,{size:18}),onClick:()=>{n(e?`/admin/course/${e}/chapters`:`/admin/course`)},title:`返回章节管理`,children:`返回`}),(0,M.jsx)(se,{}),(0,M.jsx)(k,{icon:(0,M.jsx)(u,{size:18}),onClick:()=>{if(b.includes(`lesson`)){let e=(a.lessons||[]).findIndex(e=>e.id===b);n(`/unit/${a.id}/lesson/${e>=0?e:0}`)}else n(`/unit/${a.id}`)},title:`预览`,children:`预览`})]}),rightActions:(0,M.jsxs)(M.Fragment,{children:[b.includes(`lesson`)&&!z&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{icon:(0,M.jsx)(te,{size:18}),onClick:()=>{let e=(a.lessons||[]).find(e=>e.id===b);e&&Ge(e)},title:`课时设置`,children:`设置`}),(0,M.jsx)(k,{icon:F?(0,M.jsx)(g,{size:18,className:`spinner`}):(0,M.jsx)(m,{size:18}),variant:`primary`,disabled:F,onClick:()=>{let e=(a.lessons||[]).find(e=>e.id===b);if(e){let t=(P?.lesson_id===b||P?.id===b)&&P?.markdown_content?P.markdown_content:e.content||``;$(typeof t==`string`?t:``)}},title:`编辑课时`,children:F?`加载中`:`编辑`})]}),b===``&&!z&&(0,M.jsx)(k,{icon:(0,M.jsx)(m,{size:18}),variant:`primary`,onClick:()=>$(``),title:`编辑基本信息`,children:`编辑`}),(b===`objectives`||b===`unit-content`||b===`unit-homework`)&&!z&&(0,M.jsx)(k,{icon:(0,M.jsx)(m,{size:18}),variant:`primary`,onClick:()=>{if(b===`objectives`){let e=Array.isArray(a?.objectives)?a.objectives.join(`
`):typeof a?.objectives==`string`?a.objectives:``;$(e)}else b===`unit-content`?$(a?.content||``):b===`unit-homework`&&$(he(a?.homework))},title:`编辑`,children:`编辑`}),(b.includes(`lesson`)||b===`objectives`||b===`unit-content`||b===`unit-homework`||b===``)&&z&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{icon:(0,M.jsx)(x,{size:18}),onClick:Ye,title:`取消编辑`,children:`取消`}),(0,M.jsx)(k,{icon:U?(0,M.jsx)(g,{size:18,className:`spinner`}):(0,M.jsx)(re,{size:18}),variant:`primary`,onClick:Ze,disabled:U,title:`保存`,children:U?`保存中...`:`保存`})]})]})}):null,[a,b,z,U,e,n,Ge,$,Ye,Ze,P]),nt=(0,j.useMemo)(()=>a?(0,M.jsx)(le,{header:{title:`章节信息`,subtitle:a.id},items:et,selectedId:b,onSelect:e=>{z?window.confirm(`您当前处于编辑状态，切换可能会丢失未保存的修改。确认要切换吗？`)&&(B(!1),H(``),N(e)):N(e)},variant:`tree`,position:`right`,collapsible:!0,collapsed:Se,onToggleCollapse:()=>Te(e=>!e)}):null,[a,et,b,Se,z]);return l?(0,M.jsx)(`div`,{className:`unit-detail-layout`,children:(0,M.jsxs)(`div`,{className:`loading-state`,children:[(0,M.jsx)(g,{className:`spinner`,size:32}),(0,M.jsx)(`span`,{children:`加载中...`})]})}):a?(0,M.jsxs)(ue,{toolbar:tt,sidebar:nt,children:[Ee&&(0,M.jsx)(`div`,{className:`settings-modal-overlay`,onClick:()=>I(!1),children:(0,M.jsxs)(`div`,{className:`settings-modal`,onClick:e=>e.stopPropagation(),children:[(0,M.jsxs)(`div`,{className:`settings-modal-header`,children:[(0,M.jsx)(`h3`,{children:`课程设置`}),(0,M.jsx)(`button`,{className:`close-btn`,onClick:()=>I(!1),children:(0,M.jsx)(x,{size:20})})]}),(0,M.jsxs)(`div`,{className:`settings-modal-body`,children:[(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`课程 ID`}),(0,M.jsx)(`input`,{type:`text`,value:b,disabled:!0,className:`form-input disabled`})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`标题`}),(0,M.jsx)(`input`,{type:`text`,value:L.title,onChange:e=>R(t=>({...t,title:e.target.value})),className:`form-input`,placeholder:`输入课程标题`})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`摘要`}),(0,M.jsx)(`textarea`,{value:L.description,onChange:e=>R(t=>({...t,description:e.target.value})),className:`form-textarea`,placeholder:`输入课程摘要（简短描述）`,rows:3})]}),(0,M.jsxs)(`div`,{className:`form-group`,children:[(0,M.jsx)(`label`,{children:`标签`}),(0,M.jsxs)(`div`,{className:`tags-input-wrapper`,children:[(0,M.jsx)(`div`,{className:`tags-list`,children:L.tags.map((e,t)=>(0,M.jsxs)(`span`,{className:`tag-item`,children:[e,(0,M.jsx)(`button`,{onClick:()=>Je(e),className:`tag-remove`,children:(0,M.jsx)(x,{size:12})})]},t))}),(0,M.jsxs)(`div`,{className:`tags-input-row`,children:[(0,M.jsx)(`input`,{type:`text`,value:L.tagsInput,onChange:e=>R(t=>({...t,tagsInput:e.target.value})),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qe())},className:`form-input`,placeholder:`输入标签后按回车添加`}),(0,M.jsx)(`button`,{onClick:qe,className:`add-tag-btn`,children:`添加`})]})]})]})]}),(0,M.jsxs)(`div`,{className:`settings-modal-footer`,children:[(0,M.jsx)(`button`,{className:`cancel-btn`,onClick:()=>I(!1),children:`取消`}),(0,M.jsxs)(`button`,{className:`save-btn`,onClick:Ke,disabled:De,children:[De?(0,M.jsx)(g,{size:16,className:`spinner`}):(0,M.jsx)(re,{size:16}),`保存`]})]})]})}),(0,M.jsx)(`div`,{className:`detail-content`,children:(()=>{if(z){if(b===``)return(0,M.jsxs)(`div`,{className:`intro-view edit-mode`,children:[(0,M.jsxs)(`div`,{className:`intro-header`,children:[(0,M.jsx)(`input`,{type:`text`,className:`inline-title-input`,value:G.title,onChange:e=>K(t=>({...t,title:e.target.value})),placeholder:`请输入章节标题`,style:{fontSize:`2rem`,fontWeight:`bold`,border:`none`,borderBottom:`2px solid var(--admin-primary)`,background:`transparent`,width:`100%`,outline:`none`,color:`var(--cg-text)`}}),(0,M.jsx)(`div`,{className:`header-actions`,style:{display:`flex`,gap:`12px`,alignItems:`center`,marginTop:`12px`},children:(0,M.jsxs)(`div`,{className:`meta-badge-edit`,style:{display:`flex`,alignItems:`center`,gap:`8px`,background:`var(--cg-bg)`,padding:`4px 12px`,borderRadius:`20px`,fontSize:`0.875rem`},children:[(0,M.jsx)(`span`,{children:`序号:`}),(0,M.jsx)(`input`,{type:`number`,value:G.order,onChange:e=>K(t=>({...t,order:parseInt(e.target.value)||1})),min:1,style:{width:`50px`,border:`none`,background:`transparent`,fontWeight:600,textAlign:`center`}})]})})]}),(0,M.jsxs)(`div`,{className:`info-grid`,style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 300px`,gap:`40px`,marginTop:`32px`},children:[(0,M.jsxs)(`div`,{className:`info-main`,children:[(0,M.jsxs)(`div`,{className:`intro-section`,style:{marginBottom:`32px`},children:[(0,M.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`16px`},children:`章节描述`}),(0,M.jsx)(`textarea`,{className:`inline-textarea`,value:G.description,onChange:e=>K(t=>({...t,description:e.target.value})),placeholder:`请输入章节描述`,rows:4,style:{width:`100%`,padding:`12px`,borderRadius:`8px`,border:`1px solid var(--cg-border)`,resize:`vertical`,fontSize:`1rem`,lineHeight:`1.6`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`}})]}),(0,M.jsxs)(`div`,{className:`intro-section`,style:{marginBottom:`32px`},children:[(0,M.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`16px`},children:`章节标签`}),(0,M.jsxs)(`div`,{className:`edit-tags-container`,style:{background:`var(--cg-bg)`,padding:`16px`,borderRadius:`12px`,border:`1px solid var(--cg-border)`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginBottom:`12px`},children:[(0,M.jsx)(`input`,{type:`text`,className:`form-input`,value:G.tagsInput,onChange:e=>K(t=>({...t,tagsInput:e.target.value})),onKeyDown:e=>{if(e.key===`Enter`){e.preventDefault();let t=G.tagsInput.trim();t&&!G.tags.includes(t)&&K(e=>({...e,tags:[...e.tags,t],tagsInput:``}))}},placeholder:`输入标签后按回车添加`,style:{flex:1,padding:`10px 14px`,borderRadius:`8px`,border:`1px solid var(--cg-text-muted)`}}),(0,M.jsx)(`button`,{onClick:()=>{let e=G.tagsInput.trim();e&&!G.tags.includes(e)&&K(t=>({...t,tags:[...t.tags,e],tagsInput:``}))},disabled:!G.tagsInput.trim(),style:{padding:`0 20px`,background:G.tagsInput.trim()?`var(--admin-primary)`:`var(--cg-bg)`,color:G.tagsInput.trim()?`var(--cg-surface)`:`var(--cg-text-muted)`,border:`none`,borderRadius:`8px`,cursor:G.tagsInput.trim()?`pointer`:`not-allowed`,fontWeight:500},children:`添加`})]}),(0,M.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:G.tags.map(e=>(0,M.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`6px 14px`,background:`var(--cg-bg)`,color:`#1d4ed8`,borderRadius:`20px`,fontSize:`0.875rem`,fontWeight:500},children:[e,(0,M.jsx)(x,{size:14,style:{cursor:`pointer`,color:`var(--admin-primary)`},onClick:()=>K(t=>({...t,tags:t.tags.filter(t=>t!==e)}))})]},e))})]})]}),(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`16px`},children:`适用学段`}),(0,M.jsx)(`input`,{type:`text`,className:`inline-input`,value:G.grade,onChange:e=>K(t=>({...t,grade:e.target.value})),placeholder:`如：3-4年级`,style:{width:`100%`,padding:`12px`,borderRadius:`8px`,border:`1px solid var(--cg-border)`,fontSize:`1rem`,color:`var(--cg-text-muted)`,background:`var(--cg-bg)`}})]})]}),(0,M.jsx)(`div`,{className:`info-aside`,children:(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`var(--cg-text)`,marginBottom:`16px`},children:`封面图片`}),(0,M.jsxs)(`div`,{className:`cover-edit-area`,style:{position:`relative`,borderRadius:`12px`,overflow:`hidden`,border:`1px solid var(--cg-border)`,background:`var(--cg-bg)`},children:[G.cover_image?(0,M.jsx)(`img`,{src:G.cover_image,alt:`封面预览`,style:{width:`100%`,height:`200px`,objectFit:`cover`}}):(0,M.jsx)(`div`,{style:{height:`200px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--cg-text-muted)`},children:(0,M.jsx)(g,{size:32,className:`animate-spin`})}),(0,M.jsx)(`div`,{style:{padding:`12px`,background:`var(--cg-surface)`,borderTop:`1px solid var(--cg-border)`},children:(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,M.jsx)(`input`,{type:`text`,className:`form-input`,value:G.cover_image,onChange:e=>K(t=>({...t,cover_image:e.target.value})),placeholder:`封面图片 URL`,style:{flex:1,padding:`8px 12px`,borderRadius:`6px`,border:`1px solid var(--cg-text-muted)`,fontSize:`0.875rem`}}),G.cover_image&&(0,M.jsx)(`button`,{onClick:()=>K(e=>({...e,cover_image:``})),style:{padding:`4px 8px`,background:`var(--cg-bg)`,color:`var(--admin-danger)`,border:`1px solid var(--admin-danger-light)`,borderRadius:`6px`,cursor:`pointer`,fontSize:`0.75rem`},children:`清除`})]})})]})]})})]})]});let e=b.includes(`lesson`)?(a?.lessons||[]).find(e=>e.id===b):null,t=b===`objectives`?`学习目标`:b===`unit-content`?`章节正文`:b===`unit-homework`?`课后作业`:typeof e?.title==`string`?e.title:``;return(0,M.jsx)(`div`,{className:`lesson-editor-container`,children:(0,M.jsx)(de,{content:V,onSave:Ze,onCancel:Ye,onContentChange:H,initialEditing:!0,hideToolbar:!0,showFormatToolbar:!0,title:t,placeholder:b===`objectives`?`每行输入一个学习目标（支持 Markdown 格式）...`:`输入 Markdown 格式的内容...`,renderPreview:b===`objectives`?e=>(0,M.jsx)(`div`,{className:`objectives-preview unit-main-content`,children:(0,M.jsx)(A,{content:e})}):b===`unit-homework`?_e:e=>(0,M.jsx)(A,{content:e,preserveLeadingHeading:!0})})})}if(b===``)return(0,M.jsxs)(`div`,{className:`intro-view`,children:[(0,M.jsxs)(`div`,{className:`intro-header`,children:[(0,M.jsxs)(`h1`,{children:[a.title,` - 基本信息`]}),(0,M.jsxs)(`div`,{className:`header-actions`,children:[(0,M.jsxs)(`span`,{className:`meta-badge meta-order`,children:[`序号: `,a.order]}),(0,M.jsx)(`span`,{className:`meta-badge badge-${a.course_category}`,children:a.course_category===`basics`?`认知与启蒙`:a.course_category===`intermediate`?`方法与工具`:`实践与探究`})]})]}),(0,M.jsxs)(`div`,{className:`info-grid`,children:[(0,M.jsxs)(`div`,{className:`info-main`,children:[a.description&&(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{children:`章节描述`}),(0,M.jsx)(`p`,{className:`intro-desc`,children:a.description})]}),a.tags&&Array.isArray(a.tags)&&a.tags.length>0&&(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{children:`章节标签`}),(0,M.jsx)(`div`,{className:`tag-list`,children:a.tags.map(e=>(0,M.jsx)(`span`,{className:`info-tag`,children:e},e))})]}),a.grade&&(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{children:`适用学段`}),(0,M.jsx)(`p`,{className:`info-text`,children:a.grade})]}),(!a.lessons||a.lessons.length===0)&&!a.content&&!a.homework&&!a.objectives&&(0,M.jsxs)(`div`,{style:{marginTop:`32px`,textAlign:`center`,padding:`40px`,background:`var(--cg-bg)`,borderRadius:`12px`,border:`1px dashed var(--cg-border)`},children:[(0,M.jsx)(C,{size:48,style:{color:`var(--cg-text-muted)`,marginBottom:`16px`}}),(0,M.jsx)(`p`,{style:{color:`var(--cg-text-muted)`},children:`此章节暂无详细课程内容，请在工具栏点击“编辑”或增加课时`})]})]}),(0,M.jsx)(`div`,{className:`info-aside`,children:a.cover_image&&(0,M.jsxs)(`div`,{className:`intro-section`,children:[(0,M.jsx)(`h3`,{children:`封面图片`}),(0,M.jsx)(`div`,{className:`cover-preview`,children:(0,M.jsx)(`img`,{src:a.cover_image,alt:`封面图片`,onError:e=>{e.target.style.display=`none`}})})]})})]})]});if(b===`objectives`)return(0,M.jsxs)(`div`,{className:`intro-view`,children:[(0,M.jsx)(`div`,{className:`intro-header`,children:(0,M.jsxs)(`h1`,{children:[a.title,` - 学习目标`]})}),a.objectives&&(Array.isArray(a.objectives)?a.objectives.length>0:typeof a.objectives!=`string`||a.objectives.trim()!==``)?(0,M.jsx)(`div`,{className:`intro-section`,style:{marginBottom:`24px`},children:typeof a.objectives==`string`?(0,M.jsx)(`div`,{className:`unit-main-content`,children:(0,M.jsx)(A,{content:a.objectives})}):(0,M.jsx)(`ul`,{className:`objectives-list`,children:a.objectives.map((e,t)=>(0,M.jsx)(`li`,{children:e},t))})}):(0,M.jsx)(`div`,{className:`empty-content-box`,children:(0,M.jsx)(`p`,{children:`暂无学习目标，点击右上角“编辑”添加`})})]});if(b===`unit-content`)return(0,M.jsxs)(`div`,{className:`intro-view`,children:[(0,M.jsx)(`div`,{className:`intro-header`,children:(0,M.jsxs)(`h1`,{children:[a.title,` - 章节正文`]})}),a.content?(0,M.jsx)(`div`,{className:`intro-section`,style:{marginTop:`24px`},children:(0,M.jsx)(`div`,{className:`unit-main-content`,children:(0,M.jsx)(A,{content:typeof a.content==`string`?a.content:JSON.stringify(a.content),preserveLeadingHeading:!0})})}):(0,M.jsx)(`div`,{className:`empty-content-box`,children:(0,M.jsx)(`p`,{children:`暂无章节正文，点击右上角“编辑”添加`})})]});if(b===`unit-homework`)return(0,M.jsxs)(`div`,{className:`intro-view`,children:[(0,M.jsx)(`div`,{className:`intro-header`,children:(0,M.jsxs)(`h1`,{children:[a.title,` - 课后作业`]})}),a.homework?(0,M.jsx)(`div`,{className:`intro-section`,style:{marginTop:`24px`},children:(0,M.jsx)(`div`,{className:`unit-main-content`,children:_e(he(a.homework))||(0,M.jsx)(A,{content:typeof a.homework==`string`?a.homework:JSON.stringify(a.homework)})})}):(0,M.jsx)(`div`,{className:`empty-content-box`,children:(0,M.jsx)(`p`,{children:`暂无课后作业，点击右上角“编辑”添加`})})]});if(b===`code-practice`)return(0,M.jsx)(pe,{unitId:a.id,role:`admin`});if(b.includes(`lesson`)){let e=(a.lessons||[]).find(e=>e.id===b);if(!e)return(0,M.jsx)(`div`,{className:`empty-state`,children:`未找到该课程`});let t=(a.lessons||[]).findIndex(e=>e.id===b);return(0,M.jsx)(ye,{lesson:e,lessonIndex:t})}if(b===`resources`)return(0,M.jsx)(be,{unit:a});if(b===`videos`)return(0,M.jsx)(xe,{unitId:t||``});if(b===`podcasts`)return(0,M.jsx)(Ce,{unitId:t||``,onCountChange:Ne});if(b===`datasets`)return(0,M.jsx)(we,{unit:a});if(b===`apps`)return(0,M.jsx)(fe,{unitId:a.id,onInsertTool:Qe,onCountChange:Fe,onEditTool:e=>n(`/admin/apps/${e}`)});if(b===`ai-quick-actions`){let e=e=>{let t={},n=new Map;return e.forEach((e,r)=>{let i={},a=e.action_key.trim(),o=e.label.trim(),s=e.prompt.trim();a?/^[a-z][a-z0-9_]*$/.test(a)||(i.action_key=`action_key 需以小写字母开头，只能包含小写字母、数字和下划线`):i.action_key=`action_key 不能为空`,o||(i.label=`按钮标题不能为空`),s||(i.prompt=`Prompt 不能为空`);let c=a.toLowerCase();c&&n.set(c,[...n.get(c)||[],r]),Object.keys(i).length>0&&(t[r]=i)}),n.forEach(e=>{e.length>1&&e.forEach(e=>{t[e]={...t[e],action_key:`action_key 不能重复`}})}),Ve(t),Object.keys(t).length===0},n=(t,n)=>{J(r=>{let i=r.map((e,r)=>r===t?{...e,...n}:e);return e(i),i})},r=(e,t)=>{J(n=>{let r=e+t;if(r<0||r>=n.length)return n;let i=[...n],[a]=i.splice(e,1);return i.splice(r,0,a),i.map((e,t)=>({...e,sort_order:t}))})},i=()=>{J(t=>{let n=t.length+1,r={id:`new-${Date.now()}`,action_key:`custom_action_${n}`,label:`🆕 新按钮`,display_text:`请帮我处理这个问题`,prompt:`请根据当前章节内容，用适合七到八年级学生理解的语言回答这个问题。`,sort_order:t.length,enabled:!0,is_system_default:!1},i=[...t,r];return Z(i.length-1),e(i),i})},s=t=>{J(n=>{let r=n.filter((e,n)=>n!==t).map((e,t)=>({...e,sort_order:t}));return Z(e=>r.length===0?0:e>t?e-1:Math.min(e,r.length-1)),e(r),r})},c=async()=>{if(t){if(!e(q)){alert(`请先修正 AI 快捷按钮中的表单错误后再保存`);return}Re(!0);try{let e={items:q.map((e,t)=>({action_key:e.action_key,label:e.label,display_text:e.display_text||``,prompt:e.prompt,sort_order:t,enabled:e.enabled,is_system_default:e.is_system_default||!1}))},{data:n}=await o.put(`/api/admin/units/${t}/ai-quick-actions`,e);J(Array.isArray(n)?n:[]),Ve({}),alert(`AI 快捷按钮配置已保存`)}catch(e){console.error(`保存 AI 快捷按钮失败`,e),alert(`保存 AI 快捷按钮失败`)}finally{Re(!1)}}},l=async()=>{if(t&&confirm(`确定恢复本单元的系统默认快捷按钮配置吗？当前修改将被覆盖。`)){Re(!0);try{let{data:e}=await o.post(`/api/admin/units/${t}/ai-quick-actions/reset-defaults`);J(Array.isArray(e)?e:[]),Ve({}),alert(`已恢复系统默认快捷按钮配置`)}catch(e){console.error(`恢复默认快捷按钮失败`,e),alert(`恢复默认快捷按钮失败`)}finally{Re(!1)}}};return(0,M.jsxs)(`div`,{className:`intro-page`,children:[(0,M.jsx)(`div`,{className:`intro-header`,children:(0,M.jsxs)(`h1`,{children:[a.title,` - AI 快捷按钮`]})}),(0,M.jsx)(`div`,{className:`intro-section`,style:{marginTop:`24px`},children:(0,M.jsxs)(`div`,{className:`unit-main-content`,children:[(0,M.jsxs)(`div`,{className:`aiqa-toolbar`,children:[(0,M.jsx)(`div`,{className:`aiqa-toolbar__hint`,children:`管理员在这里维护本单元可供教师选择的 AI 快捷按钮预设。学生侧优先读取教师端选择结果，没有教师选择时再回退到这里启用的预设。`}),(0,M.jsxs)(`div`,{className:`aiqa-toolbar__actions`,children:[(0,M.jsx)(`button`,{className:`save-btn secondary`,onClick:i,disabled:Y||Ie,children:`新增按钮`}),(0,M.jsx)(`button`,{className:`save-btn secondary`,onClick:()=>void He(),disabled:Ie||Y,children:Ie?`刷新中...`:`重新加载`}),(0,M.jsx)(`button`,{className:`save-btn secondary`,onClick:()=>void l(),disabled:Y,children:`恢复默认`}),(0,M.jsx)(`button`,{className:`save-btn`,onClick:()=>void c(),disabled:Y||!ze,children:Y?`保存中...`:`保存配置`})]})]}),Ie?(0,M.jsxs)(`div`,{className:`loading-state`,style:{minHeight:180},children:[(0,M.jsx)(g,{size:24,className:`spinner`}),(0,M.jsx)(`div`,{children:`正在加载 AI 快捷按钮...`})]}):q.length===0?(0,M.jsx)(`div`,{className:`empty-content-box`,children:(0,M.jsx)(`p`,{children:`当前没有快捷按钮配置。你可以点击“恢复默认”生成系统默认配置。`})}):(0,M.jsxs)(M.Fragment,{children:[q[X]&&(0,M.jsxs)(`div`,{className:`aiqa-preview`,children:[(0,M.jsx)(`div`,{className:`aiqa-preview__header`,children:(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`实时预览`}),(0,M.jsx)(`p`,{children:`预览学生侧看到的按钮文案、用户气泡和发送给 AI 的 prompt。`})]})}),(0,M.jsxs)(`div`,{className:`aiqa-preview__body`,children:[(0,M.jsxs)(`div`,{className:`aiqa-preview__section`,children:[(0,M.jsx)(`div`,{className:`aiqa-preview__label`,children:`按钮预览`}),(0,M.jsx)(`button`,{type:`button`,className:`aiqa-preview-chip`,children:q[X].label})]}),(0,M.jsxs)(`div`,{className:`aiqa-preview__section`,children:[(0,M.jsx)(`div`,{className:`aiqa-preview__label`,children:`学生气泡文案`}),(0,M.jsx)(`div`,{className:`aiqa-preview-bubble`,children:q[X].display_text||q[X].label})]}),(0,M.jsxs)(`div`,{className:`aiqa-preview__section`,children:[(0,M.jsx)(`div`,{className:`aiqa-preview__label`,children:`实际 Prompt`}),(0,M.jsx)(`pre`,{className:`aiqa-preview-prompt`,children:q[X].prompt})]})]})]}),(0,M.jsx)(`div`,{className:`aiqa-list`,children:q.map((e,t)=>(0,M.jsxs)(`div`,{className:`aiqa-card ${X===t?`aiqa-card--active`:``}`,onClick:()=>Z(t),children:[(0,M.jsxs)(`div`,{className:`aiqa-card__header`,children:[(0,M.jsxs)(`div`,{className:`aiqa-card__title`,children:[(0,M.jsx)(`span`,{className:`aiqa-card__index`,children:t+1}),(0,M.jsx)(`span`,{children:e.action_key}),e.is_system_default?(0,M.jsx)(`span`,{className:`aiqa-badge`,children:`系统默认`}):null]}),(0,M.jsxs)(`div`,{className:`aiqa-card__actions`,children:[(0,M.jsx)(`button`,{type:`button`,className:`aiqa-move-btn`,onClick:()=>r(t,-1),disabled:t===0||Y,children:`上移`}),(0,M.jsx)(`button`,{type:`button`,className:`aiqa-move-btn`,onClick:()=>r(t,1),disabled:t===q.length-1||Y,children:`下移`}),(0,M.jsx)(`button`,{type:`button`,className:`aiqa-delete-btn`,onClick:()=>s(t),disabled:Y,children:`删除`}),(0,M.jsxs)(`label`,{className:`aiqa-toggle`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:e.enabled,onChange:e=>n(t,{enabled:e.target.checked}),disabled:Y}),`启用`]})]})]}),(0,M.jsxs)(`div`,{className:`aiqa-grid`,children:[(0,M.jsxs)(`label`,{children:[(0,M.jsx)(`span`,{children:`action_key`}),(0,M.jsx)(`input`,{value:e.action_key,onChange:e=>n(t,{action_key:e.target.value}),placeholder:`例如：summary`}),Q[t]?.action_key?(0,M.jsx)(`em`,{className:`aiqa-error`,children:Q[t]?.action_key}):null]}),(0,M.jsxs)(`label`,{children:[(0,M.jsx)(`span`,{children:`按钮标题`}),(0,M.jsx)(`input`,{value:e.label,onChange:e=>n(t,{label:e.target.value}),placeholder:`例如：📝 本章总结`}),Q[t]?.label?(0,M.jsx)(`em`,{className:`aiqa-error`,children:Q[t]?.label}):null]}),(0,M.jsxs)(`label`,{children:[(0,M.jsx)(`span`,{children:`用户显示文案`}),(0,M.jsx)(`input`,{value:e.display_text||``,onChange:e=>n(t,{display_text:e.target.value}),placeholder:`例如：请帮我总结这一章`})]})]}),(0,M.jsxs)(`label`,{className:`aiqa-prompt`,children:[(0,M.jsx)(`span`,{children:`Prompt`}),(0,M.jsx)(`textarea`,{rows:4,value:e.prompt,onChange:e=>n(t,{prompt:e.target.value}),placeholder:`填写发送给 AI 的完整提示词`}),Q[t]?.prompt?(0,M.jsx)(`em`,{className:`aiqa-error`,children:Q[t]?.prompt}):null]})]},e.id||`${e.action_key}-${t}`))})]})]})})]})}return null})()}),(0,M.jsx)(`style`,{children:`
        .aiqa-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .aiqa-toolbar__hint {
          color: #475569;
          font-size: 14px;
        }

        .aiqa-toolbar__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .save-btn.secondary {
          background: #e2e8f0;
          color: #1e293b;
        }

        .aiqa-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .aiqa-preview {
          border: 1px solid #dbeafe;
          background: linear-gradient(180deg, #f8fbff 0%, #f8fafc 100%);
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 18px;
        }

        .aiqa-preview__header h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          color: #0f172a;
        }

        .aiqa-preview__header p {
          margin: 0;
          color: #475569;
          font-size: 14px;
        }

        .aiqa-preview__body {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .aiqa-preview__section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aiqa-preview__label {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .aiqa-preview-chip {
          align-self: flex-start;
          border: 1px solid #c7d2fe;
          background: #eef2ff;
          color: #4338ca;
          border-radius: 9999px;
          padding: 8px 12px;
          font-size: 14px;
        }

        .aiqa-preview-bubble {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 16px;
          color: #0f172a;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }

        .aiqa-preview-prompt {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
          background: #0f172a;
          color: #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          font-size: 13px;
          line-height: 1.6;
          min-height: 110px;
        }

        .aiqa-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          background: #fff;
          cursor: pointer;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .aiqa-card--active {
          border-color: #818cf8;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }

        .aiqa-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .aiqa-card__title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: #0f172a;
        }

        .aiqa-card__index {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: #eef2ff;
          color: #4f46e5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .aiqa-badge {
          font-size: 12px;
          color: #065f46;
          background: #d1fae5;
          border-radius: 9999px;
          padding: 2px 8px;
        }

        .aiqa-card__actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .aiqa-move-btn {
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #fff;
          color: #334155;
          padding: 6px 10px;
          cursor: pointer;
        }

        .aiqa-move-btn:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .aiqa-delete-btn {
          border: 1px solid #fecaca;
          border-radius: 8px;
          background: #fff1f2;
          color: #be123c;
          padding: 6px 10px;
          cursor: pointer;
        }

        .aiqa-delete-btn:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .aiqa-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #334155;
          font-size: 14px;
        }

        .aiqa-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .aiqa-grid label,
        .aiqa-prompt {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .aiqa-error {
          color: #be123c;
          font-style: normal;
          font-size: 12px;
          line-height: 1.4;
        }

        .aiqa-grid span,
        .aiqa-prompt span {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .aiqa-grid input,
        .aiqa-prompt textarea {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 10px 12px;
          font-size: 14px;
          color: #0f172a;
          background: #fff;
        }

        .aiqa-prompt textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .aiqa-preview__body {
            grid-template-columns: 1fr;
          }

          .aiqa-grid {
            grid-template-columns: 1fr;
          }
        }

        .unit-detail-layout {
          display: flex;
          min-height: calc(100vh - 144px);
          background: var(--cg-bg);
          margin: 0 -16px;
        }

        .loading-state,
        .error-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--cg-text-muted);
          gap: 16px;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 右侧导航栏 */
        .unit-nav-sidebar {
          width: 280px;
          background: var(--cg-surface);
          border-left: 1px solid var(--cg-border);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: width 0.2s;
          order: 2; /* 确保在 flex 布局中排在右侧 */
        }

        .unit-nav-sidebar.collapsed {
          width: 48px;
        }
        
        .nav-sidebar-header {
          display: flex;
          align-items: center;
          flex-direction: row-reverse; /* 按钮靠左，标题靠右 */
          justify-content: space-between;
          gap: 12px;
          padding: 12px;
          border-bottom: 1px solid var(--cg-border);
          height: 48px;
          box-sizing: border-box;
        }

        .sidebar-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          color: var(--cg-text-muted);
          flex-shrink: 0;
        }

        .sidebar-toggle:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .unit-brief {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .unit-brief-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--cg-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .unit-brief-id {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          font-family: monospace;
        }

        /* 树形导航 */
        .nav-tree {
          flex: 1;
          padding: 8px;
          overflow-y: auto;
        }

        .tree-node {
          margin-bottom: 2px;
        }

        .tree-item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 12px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          text-align: left;
          transition: all 0.15s;
        }

        .tree-item:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .tree-item.active {
          background: var(--cg-bg);
          color: #2563eb;
          font-weight: 500;
        }

        .tree-group-header {
          font-weight: 500;
          color: var(--cg-text);
        }

        .tree-group-header.expanded {
          color: var(--cg-text);
        }

        .tree-chevron {
          flex-shrink: 0;
          color: var(--cg-text-muted);
          transition: transform 0.15s;
        }

        .tree-icon {
          flex-shrink: 0;
          color: var(--cg-text-muted);
        }

        .tree-item.active .tree-icon {
          color: #2563eb;
        }

        .tree-group-header .tree-icon {
          color: var(--cg-text-muted);
        }

        .tree-label {
          flex: 1;
        }

        .tree-count {
          font-size: 0.7rem;
          color: var(--cg-text-muted);
          background: var(--cg-bg);
          padding: 2px 6px;
          border-radius: 8px;
          font-weight: 500;
        }

        .tree-item.active .tree-count {
          background: var(--admin-primary-light);
          color: #2563eb;
        }

        .tree-children {
          margin-left: 12px;
          padding-left: 12px;
          border-left: 1px solid var(--cg-border);
          margin-top: 2px;
        }

        .tree-child {
          padding: 6px 10px;
          font-size: 0.8125rem;
        }

        .tree-child .tree-icon {
          width: 14px;
          height: 14px;
        }

        .tree-label-ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tree-empty {
          padding: 8px 10px;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          font-style: italic;
        }

        /* 左侧内容区 */
        .unit-detail-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          order: 1; /* 在 flex 布局中排在左侧 */
        }

        .admin-detail-toolbar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8px 20px;
          background: var(--cg-surface);
          border-bottom: 1px solid var(--cg-border);
          min-height: 54px;
          box-sizing: border-box;
          gap: 12px;
        }

        .admin-toolbar-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          min-height: 36px;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          transition: all 0.15s;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .admin-toolbar-btn:hover {
          background: var(--cg-bg);
          border-color: var(--cg-text-muted);
        }

        .admin-toolbar-btn-back {
          color: var(--cg-text-muted);
          border: none;
          background: transparent;
        }

        .admin-toolbar-btn-back:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
          border: none;
        }

        .admin-toolbar-btn-primary {
          background: var(--admin-primary);
          border-color: var(--admin-primary);
          color: #ffffff;
        }

        .admin-toolbar-btn-primary:hover {
          background: #2563eb;
          border-color: #2563eb;
        }

        .admin-toolbar-btn-danger {
          color: var(--admin-danger);
          border-color: var(--admin-danger-light);
        }

        .admin-toolbar-btn-danger:hover {
          background: var(--cg-bg);
          border-color: #fca5a5;
        }

        .detail-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          min-height: 0;
        }

        .content-section {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        /* 编辑表单 */
        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--cg-text-muted);
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 10px 12px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .form-input:disabled {
          background: var(--cg-bg);
          color: var(--cg-text-muted);
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 32px;
          margin-top: 24px;
        }

        .info-main {
          min-width: 0;
        }

        .info-aside {
          width: 300px;
        }

        .cover-preview {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--cg-border);
          aspect-ratio: 16/9;
          background: var(--cg-bg);
        }

        .cover-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .info-tag {
          font-size: 0.8125rem;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--cg-border);
          transition: all 0.2s;
        }

        .info-tag:hover {
          background: var(--cg-bg);
          border-color: var(--cg-text-muted);
        }

        .info-text {
          font-size: 0.9375rem;
          color: var(--cg-text-muted);
          margin: 0;
        }

        /* 介绍视图 */
        .intro-view {
          padding: 8px 0;
        }

        .intro-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }

        .intro-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0;
        }

        .unit-id-tag {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          background: var(--cg-bg);
          padding: 4px 10px;
          border-radius: 6px;
          font-family: monospace;
          flex-shrink: 0;
        }

        .intro-desc {
          font-size: 0.9375rem;
          color: var(--cg-text-muted);
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .intro-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .meta-badge {
          font-size: 0.8125rem;
          padding: 6px 12px;
          border-radius: 6px;
        }

        .meta-badge.badge-basics {
          background: var(--admin-primary-light);
          color: #2563eb;
        }

        .meta-badge.badge-intermediate {
          background: var(--admin-success-light);
          color: var(--admin-success);
        }

        .meta-badge.badge-advanced {
          background: var(--admin-warning-light);
          color: #d97706;
        }

        .meta-order {
          background: var(--cg-bg);
          color: var(--cg-text-muted);
        }

        .intro-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--cg-border);
        }

        .intro-section h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0 0 12px 0;
        }

        .objectives-list {
          margin: 0;
          padding-left: 20px;
          color: var(--cg-text-muted);
        }

        .objectives-list li {
          margin-bottom: 8px;
          line-height: 1.5;
        }

        /* Lesson 详情 */
        .lesson-detail {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .lesson-header {
          margin-bottom: 16px;
        }

        .lesson-number {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--admin-primary);
          background: var(--cg-bg);
          padding: 4px 10px;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .lesson-header h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0;
        }

        .lesson-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .lesson-id {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          font-family: monospace;
          background: var(--cg-bg);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .lesson-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--cg-border);
        }

        .lesson-section h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0 0 12px 0;
        }

        .lesson-markdown-content {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        .lesson-markdown-content :first-child {
          margin-top: 0;
        }

        .lesson-desc {
          color: var(--cg-text-muted);
          line-height: 1.7;
          margin: 0;
          white-space: pre-wrap;
        }

        /* 内容列表 */
        .content-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .content-list-header h2 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--cg-text);
          margin: 0;
        }

        .content-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--cg-surface);
          border-radius: 8px;
          border: 1px solid var(--cg-border);
          margin-bottom: 8px;
        }

        .item-index {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .item-text {
          flex: 1;
          font-size: 0.9375rem;
          color: var(--cg-text);
        }

        .content-card {
          background: var(--cg-surface);
          border-radius: 10px;
          border: 1px solid var(--cg-border);
          padding: 16px;
          margin-bottom: 12px;
        }

        .content-card .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .card-index {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--admin-primary);
          color: white;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .content-card h4 {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .card-desc {
          margin: 0;
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          line-height: 1.5;
        }

        .resource-type {
          display: inline-block;
          font-size: 0.75rem;
          padding: 2px 8px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border-radius: 4px;
          margin-top: 8px;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          color: var(--cg-text-muted);
          text-align: center;
          background: var(--cg-surface);
          border-radius: 12px;
          border: 1px dashed var(--cg-border);
        }

        .empty-state svg {
          margin-bottom: 12px;
          opacity: 0.5;
        }

        /* 设置模态框样式 */
        .settings-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .settings-modal {
          background: var(--cg-surface);
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .settings-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--cg-border);
        }

        .settings-modal-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .settings-modal-header .close-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: var(--cg-text-muted);
          border-radius: 4px;
        }

        .settings-modal-header .close-btn:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .settings-modal-body {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
        }

        .settings-modal-body .form-group {
          margin-bottom: 20px;
        }

        .settings-modal-body .form-group:last-child {
          margin-bottom: 0;
        }

        .settings-modal-body .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cg-text);
          margin-bottom: 6px;
        }

        .settings-modal-body .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          font-size: 0.9rem;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }

        .settings-modal-body .form-input:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .settings-modal-body .form-input.disabled {
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          cursor: not-allowed;
        }

        .settings-modal-body .form-textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          font-size: 0.9rem;
          box-sizing: border-box;
          resize: vertical;
          min-height: 80px;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .settings-modal-body .form-textarea:focus {
          outline: none;
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .tags-input-wrapper {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          padding: 12px;
        }

        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
          min-height: 32px;
        }

        .tag-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          color: var(--admin-primary);
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 16px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .tag-remove {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--admin-primary);
          display: flex;
          align-items: center;
          opacity: 0.7;
        }

        .tag-remove:hover {
          opacity: 1;
        }

        .tags-input-row {
          display: flex;
          gap: 8px;
        }

        .tags-input-row .form-input {
          flex: 1;
        }

        .add-tag-btn {
          padding: 8px 16px;
          background: var(--admin-primary);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          white-space: nowrap;
        }

        .add-tag-btn:hover {
          background: #2563eb;
        }

        .settings-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 20px;
          border-top: 1px solid var(--cg-border);
          background: var(--cg-bg);
        }

        .settings-modal-footer .cancel-btn {
          padding: 8px 20px;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .settings-modal-footer .cancel-btn:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .settings-modal-footer .save-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: var(--admin-primary);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .settings-modal-footer .save-btn:hover {
          background: #2563eb;
        }

        .settings-modal-footer .save-btn:disabled {
          background: var(--cg-text-muted);
          cursor: not-allowed;
        }

        /* 内嵌编辑器样式 */
        .lesson-editor-container {
          background: var(--cg-surface);
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .lesson-editor-container .markdown-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          border: none;
          border-radius: 0;
          min-height: 0;
        }

        .lesson-editor-container .markdown-editor-content {
          flex: 1;
          min-height: 400px;
        }

        .lesson-editor-container .markdown-editor-textarea {
          height: 100%;
          min-height: 350px;
        }

        .lesson-editor-container .markdown-editor-preview {
          height: 100%;
          min-height: 350px;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .unit-nav-sidebar {
            display: none;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .intro-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]}):(0,M.jsx)(`div`,{className:`unit-detail-layout`,children:(0,M.jsxs)(`div`,{className:`error-state`,children:[(0,M.jsx)(ee,{size:48}),(0,M.jsx)(`h2`,{children:`章节未找到`}),(0,M.jsxs)(`p`,{children:[`ID: `,t]}),(0,M.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>n(`/admin/course`),children:`返回章节列表`})]})})}function ye({lesson:e,lessonIndex:t}){let{data:n,isLoading:r,error:i}=ie(e.id),a=n?.markdown_content||e.content||``,o=n?.tags||e.tags||[],s=n?.created_at||e.created_at,c=n?.updated_at||e.updated_at;return(0,M.jsxs)(`div`,{className:`lesson-detail`,children:[(0,M.jsx)(`div`,{className:`lesson-header`,children:(0,M.jsx)(`span`,{className:`lesson-id`,children:e.id})}),r?(0,M.jsxs)(`div`,{className:`lesson-section`,style:{textAlign:`center`,padding:`40px`},children:[(0,M.jsx)(g,{size:24,className:`spinner`,style:{color:`var(--cg-text-muted)`}}),(0,M.jsx)(`p`,{style:{color:`var(--cg-text-muted)`,marginTop:`12px`},children:`加载课程内容...`})]}):a?(0,M.jsx)(`div`,{className:`lesson-section lesson-markdown-content`,children:(0,M.jsx)(A,{content:a,title:e.title,createdAt:s,updatedAt:c,tags:o,description:e.description})}):(0,M.jsxs)(M.Fragment,{children:[e.description&&(0,M.jsxs)(`div`,{className:`lesson-section`,children:[(0,M.jsx)(`h3`,{children:`课程描述`}),(0,M.jsx)(`p`,{className:`lesson-desc`,children:e.description})]}),!e.description&&(0,M.jsxs)(`div`,{className:`lesson-section`,style:{textAlign:`center`,padding:`40px`,color:`var(--cg-text-muted)`},children:[(0,M.jsx)(_,{size:40,style:{marginBottom:`12px`}}),(0,M.jsx)(`p`,{children:`暂无课程内容`}),i&&(0,M.jsxs)(`p`,{style:{fontSize:`12px`,marginTop:`8px`},children:[`加载失败: `,String(i)]})]})]})]})}function be({unit:e}){let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)(!0),[o,u]=(0,j.useState)(!1),d=(0,j.useCallback)(async()=>{if(e?.id){i(!0);try{let t=await(await s(`/api/content/unit/${e.id}/resources?resource_type=image`)).json();n(Array.isArray(t)?t:[])}catch(e){console.error(`获取图片资源失败:`,e)}finally{i(!1)}}},[e?.id]);(0,j.useEffect)(()=>{d()},[d]);let f=()=>{let t=[],n=new Set,r=(e,r,i)=>{let a=/!\[([^\]]*)\]\(([^)]+)\)/g,o;for(;(o=a.exec(e))!==null;){let e=o[1]||``,a=o[2];n.has(a)||(n.add(a),t.push({url:a,alt:e,lessonId:r,lessonTitle:i,source:`markdown`}))}},i=e?.content||``;i&&r(i,``,`章节正文`);let a=e?.lessons||[];for(let e of a){let t=e.content||``;t&&r(t,e.id,e.title||`未命名课程`)}return t},p=()=>{let e=f(),n=new Set(e.map(e=>e.url));for(let r of t){let t=r.url||r.file_path||``;t&&!n.has(t)&&(n.add(t),e.push({url:t,alt:r.title||r.description||``,lessonId:``,lessonTitle:`关联资源`,source:`api`,id:r.id}))}return e},m=async()=>{u(!0);try{let t=e?.lessons||[];for(let e of t)await s(`/api/lesson-images/sync/${e.id}`,{method:`POST`});d()}catch(e){console.error(`同步图片失败:`,e)}finally{u(!1)}},h=p(),v=e=>{if(!e)return``;if(e.startsWith(`http://`)||e.startsWith(`https://`))return e;let t=e.replace(/^\/+api\/+api\/+/g,`/api/`).replace(/^\/+api\/+/g,`/api/`);return a(t)};return r?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(g,{size:40,className:`spinner`}),(0,M.jsx)(`p`,{children:`加载图片资源中...`})]}):h.length===0?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(c,{size:40}),(0,M.jsx)(`p`,{children:`暂无图片资源`}),(0,M.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`在课程内容中使用 ![描述](图片路径) 添加图片`})]}):(0,M.jsxs)(`div`,{className:`image-resources-view`,children:[(0,M.jsxs)(`div`,{className:`content-list-header`,children:[(0,M.jsx)(`h2`,{children:`图片资源`}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,M.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.875rem`},children:[h.length,` 张图片`]}),(0,M.jsxs)(`button`,{className:`sync-images-btn`,onClick:m,disabled:o,title:`同步图片引用信息到数据库`,children:[o?(0,M.jsx)(g,{size:14,className:`spinner`}):(0,M.jsx)(l,{size:14}),`同步`]})]})]}),(0,M.jsx)(`div`,{className:`image-grid`,children:h.map((e,t)=>(0,M.jsxs)(`div`,{className:`image-card`,children:[(0,M.jsxs)(`div`,{className:`image-preview`,children:[(0,M.jsx)(`img`,{src:v(e.url),alt:e.alt,onError:e=>{e.target.src=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`}}),e.referenceCount!==void 0&&e.referenceCount>1&&(0,M.jsx)(`div`,{className:`image-ref-badge`,title:`被 ${e.referenceCount} 个课程引用`,children:e.referenceCount})]}),(0,M.jsxs)(`div`,{className:`image-info`,children:[(0,M.jsx)(`div`,{className:`image-alt`,title:e.alt,children:e.alt||`无描述`}),(0,M.jsxs)(`div`,{className:`image-lesson`,title:e.lessonTitle,children:[(0,M.jsx)(_,{size:12}),e.lessonTitle]}),(0,M.jsx)(`div`,{className:`image-url`,style:{fontSize:`0.75rem`,color:`var(--cg-text-muted)`,marginTop:`4px`,wordBreak:`break-all`},children:(0,M.jsx)(`code`,{children:e.url})})]})]},t))}),(0,M.jsx)(`style`,{children:`
        .image-resources-view {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 20px;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        
        .image-card {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .image-card:hover {
          border-color: var(--admin-primary);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }
        
        .image-preview {
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cg-bg);
          overflow: hidden;
        }
        
        .image-preview img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .image-info {
          padding: 12px;
        }
        
        .image-alt {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cg-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        
        .image-lesson {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .image-url code {
          font-size: 0.75rem;
          color: var(--cg-text-muted);
          background: var(--cg-border);
          padding: 4px 8px;
          border-radius: 4px;
          word-break: break-all;
        }
        
        /* 同步按钮 */
        .sync-images-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--cg-text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .sync-images-btn:hover:not(:disabled) {
          background: var(--cg-border);
          border-color: var(--cg-text-muted);
        }
        
        .sync-images-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        /* 引用计数标识 */
        .image-ref-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: linear-gradient(135deg, var(--admin-primary) 0%, var(--admin-primary) 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 18px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .image-preview {
          position: relative;
        }
      `})]})}var P=e=>{if(e.metadata?.[`dc:title`]){let t=e.metadata[`dc:title`],n=t.find(e=>e.lang===`zh`);if(n?.value)return n.value;let r=t.find(e=>e.lang===`en`);if(r?.value)return r.value}return e.title},F=e=>{if(e.metadata?.[`dc:description`]){let t=e.metadata[`dc:description`],n=t.find(e=>e.lang===`zh`);if(n?.value)return n.value;let r=t.find(e=>e.lang===`en`);if(r?.value)return r.value}return e.description||``};function xe({unitId:e}){let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)(!0),[o,c]=(0,j.useState)(null),[l,u]=(0,j.useState)(null);(0,j.useEffect)(()=>{e&&(async()=>{i(!0),c(null);try{let t=await(await s(`/api/content/unit/${e}/videos`)).json();n(Array.isArray(t)?t:[])}catch(e){c(e instanceof Error?e.message:`获取视频失败`)}finally{i(!1)}})()},[e]);let d=e=>e?`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`:``,m=e=>e?e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:e<1073741824?`${(e/1048576).toFixed(1)} MB`:`${(e/1073741824).toFixed(2)} GB`:``,_=e=>e?e.startsWith(`http://`)||e.startsWith(`https://`)?e:a(e):``,v=e=>e.thumbnail_url?_(e.thumbnail_url):`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><polygon points="10,8 16,12 10,16" fill="%2394a3b8"/></svg>`;return r?(0,M.jsxs)(`div`,{className:`loading-state`,children:[(0,M.jsx)(g,{size:32,className:`spinner`}),(0,M.jsx)(`span`,{children:`加载视频资源...`})]}):o?(0,M.jsxs)(`div`,{className:`error-state`,children:[(0,M.jsx)(ee,{size:32}),(0,M.jsx)(`span`,{children:o})]}):t.length===0?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(y,{size:40}),(0,M.jsx)(`p`,{children:`暂无视频资源`}),(0,M.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`可以在资源管理中为此章节添加视频`})]}):(0,M.jsxs)(`div`,{className:`video-resources-view`,children:[(0,M.jsxs)(`div`,{className:`content-list-header`,children:[(0,M.jsx)(`h2`,{children:`视频资源`}),(0,M.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.875rem`},children:[t.length,` 个视频`]})]}),(0,M.jsx)(`div`,{className:`video-grid`,children:t.map(e=>(0,M.jsxs)(`div`,{className:`video-card`,onClick:()=>u(e),children:[(0,M.jsxs)(`div`,{className:`video-thumbnail`,children:[(0,M.jsx)(`img`,{src:v(e),alt:P(e),onError:e=>{e.target.src=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="1"><rect x="2" y="4" width="20" height="16" rx="2"/><polygon points="10,8 16,12 10,16" fill="%2394a3b8"/></svg>`}}),(0,M.jsx)(`div`,{className:`play-overlay`,children:(0,M.jsx)(p,{size:32,fill:`white`})}),e.duration&&(0,M.jsx)(`span`,{className:`video-duration`,children:d(e.duration)})]}),(0,M.jsxs)(`div`,{className:`video-info`,children:[(0,M.jsx)(`div`,{className:`video-title`,title:P(e),children:P(e)}),(0,M.jsxs)(`div`,{className:`video-meta`,children:[e.file_format&&(0,M.jsx)(`span`,{children:String(e.file_format).toUpperCase()}),e.file_size&&(0,M.jsx)(`span`,{children:m(e.file_size)})]})]})]},e.id))}),l&&(0,M.jsx)(`div`,{className:`video-modal-overlay`,onClick:()=>u(null),children:(0,M.jsxs)(`div`,{className:`video-modal`,onClick:e=>e.stopPropagation(),children:[(0,M.jsxs)(`div`,{className:`video-modal-header`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:P(l)}),F(l)&&(0,M.jsx)(`p`,{className:`video-modal-desc`,children:F(l)})]}),(0,M.jsx)(`button`,{className:`close-btn`,onClick:()=>u(null),children:(0,M.jsx)(x,{size:20})})]}),(0,M.jsx)(`div`,{className:`video-modal-body`,children:l.url?(0,M.jsx)(`video`,{controls:!0,autoPlay:!0,src:_(l.url),style:{width:`100%`,maxHeight:`60vh`},children:`您的浏览器不支持视频播放`}):(0,M.jsxs)(`div`,{className:`no-video-url`,children:[(0,M.jsx)(y,{size:48}),(0,M.jsx)(`p`,{children:`视频 URL 不可用`})]})}),(0,M.jsxs)(`div`,{className:`video-modal-footer`,children:[(0,M.jsxs)(`div`,{className:`video-details`,children:[l.duration&&(0,M.jsxs)(`span`,{children:[(0,M.jsx)(h,{size:14}),` `,d(l.duration)]}),l.file_size&&(0,M.jsx)(`span`,{children:m(l.file_size)}),l.file_format&&(0,M.jsx)(`span`,{children:String(l.file_format).toUpperCase()}),l.category&&(0,M.jsx)(`span`,{className:`video-category`,children:l.category})]}),l.url&&(0,M.jsxs)(`a`,{href:_(l.url),target:`_blank`,rel:`noopener noreferrer`,className:`open-external-btn`,children:[(0,M.jsx)(f,{size:14}),`新窗口打开`]})]})]})}),(0,M.jsx)(`style`,{children:`
        .video-resources-view {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 20px;
        }
        
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 16px;
        }
        
        .video-card {
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .video-card:hover {
          border-color: var(--admin-primary);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }
        
        .video-card:hover .play-overlay {
          opacity: 1;
        }
        
        .video-thumbnail {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: var(--cg-text);
          overflow: hidden;
        }
        
        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .video-duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .video-info {
          padding: 12px;
        }
        
        .video-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--cg-text);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        
        .video-meta {
          display: flex;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--cg-text-muted);
        }
        
        /* 视频预览模态框 */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        
        .video-modal {
          background: var(--cg-text);
          border-radius: 12px;
          max-width: 90%;
          max-height: 90%;
          width: 900px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .video-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 20px;
          background: #0f172a;
        }
        
        .video-modal-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
        }
        
        .video-modal-desc {
          margin: 6px 0 0;
          font-size: 0.85rem;
          color: var(--cg-text-muted);
          max-width: 600px;
        }
        
        .video-modal-header .close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          transition: all 0.2s;
        }
        
        .video-modal-header .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .video-modal-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          min-height: 300px;
        }
        
        .no-video-url {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--cg-text-muted);
        }
        
        .video-modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: #0f172a;
        }
        
        .video-details {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.8rem;
          color: var(--cg-text-muted);
        }
        
        .video-details span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .video-category {
          background: rgba(99, 102, 241, 0.2);
          color: #818cf8;
          padding: 2px 8px;
          border-radius: 4px;
        }
        
        .open-external-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 0.8rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .open-external-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `})]})}function Se(e){let t=e.resource_details||e;return{id:String(t.id||e.resource_id||e.id||``),title:String(t.display_title||t.title||e.display_title||e.title||`未命名播客`),description:String(t.display_description||t.description||e.description||``),url:String(t.url||e.url||``),file_path:String(t.file_path||e.file_path||``),duration:Number(t.duration||e.duration||0),file_size:Number(t.file_size||e.file_size||0),category:String(t.category||e.category||``)}}function Ce({unitId:e,onCountChange:t}){let n=i(),[r,c]=(0,j.useState)([]),[u,p]=(0,j.useState)([]),[m,h]=(0,j.useState)(!0),[_,v]=(0,j.useState)(!1),[y,te]=(0,j.useState)(!1),[ne,re]=(0,j.useState)(``),[C,w]=(0,j.useState)(null),[T,E]=(0,j.useState)(null),ie=e=>e?`${Math.floor(e/60)}:${Math.round(e%60).toString().padStart(2,`0`)}`:`--:--`,ae=e=>e?e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`:``,D=(0,j.useCallback)(async()=>{if(e){h(!0),E(null);try{let n=await(await s(`/api/content/unit/${e}/resources?resource_type=audio`)).json(),r=(Array.isArray(n)?n:[]).map(e=>Se(e)).filter(e=>e.id);c(r),t?.(r.length)}catch(e){E(e instanceof Error?e.message:`获取播客资源失败`)}finally{h(!1)}}},[e,t]),O=(0,j.useCallback)(async()=>{v(!0);try{let{data:e}=await o.get(`/api/admin/audios`,{params:{search:ne||void 0,status:`active`}}),t=new Set(r.map(e=>e.id)),n=(Array.isArray(e)?e:[]).map(e=>Se(e)).filter(e=>e.id&&!t.has(e.id));p(n)}catch(e){E(e instanceof Error?e.message:`获取可引入播客失败`)}finally{v(!1)}},[r,ne]);(0,j.useEffect)(()=>{D()},[D]),(0,j.useEffect)(()=>{y&&O()},[y,O]);let oe=async t=>{w(t),E(null);try{await o.post(`/api/content/unit/${e}/resources`,{resource_id:t,resource_type:`audio`,order_index:r.length,is_recommended:!1}),await D(),p(e=>e.filter(e=>e.id!==t))}catch(e){E(e instanceof Error?e.message:`引入播客失败`)}finally{w(null)}},se=async t=>{if(window.confirm(`确定要移除这个播客关联吗？`)){w(t),E(null);try{await o.delete(`/api/content/unit/${e}/resources/${t}`),await D()}catch(e){E(e instanceof Error?e.message:`移除播客失败`)}finally{w(null)}}},ce=e=>{let t=e.url||e.file_path||``;return t&&!t.startsWith(`http`)?a(t):t};return(0,M.jsxs)(`div`,{className:`unit-podcast-admin-view`,children:[(0,M.jsxs)(`div`,{className:`content-list-header`,style:{alignItems:`center`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{children:`播客资源`}),(0,M.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.875rem`},children:[`已引入 `,r.length,` 个播客`]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,M.jsx)(k,{icon:(0,M.jsx)(l,{size:16}),onClick:()=>{D(),y&&O()},title:`刷新`}),(0,M.jsx)(k,{icon:(0,M.jsx)(d,{size:16}),onClick:()=>te(e=>!e),variant:`primary`,title:y?`收起播客选择器`:`引入播客`,children:y?`收起选择`:`引入播客`})]})]}),T&&(0,M.jsxs)(`div`,{className:`error-state`,style:{marginBottom:12},children:[(0,M.jsx)(ee,{size:20}),(0,M.jsx)(`span`,{children:T})]}),y&&(0,M.jsxs)(`div`,{className:`card`,style:{padding:12,marginBottom:16},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:10},children:[(0,M.jsx)(b,{size:16,style:{color:`var(--cg-text-muted)`}}),(0,M.jsx)(`input`,{type:`text`,value:ne,onChange:e=>re(e.target.value),placeholder:`搜索音频标题、分类或标签`,style:{flex:1,border:`1px solid var(--cg-border)`,borderRadius:8,padding:`8px 10px`,background:`var(--cg-surface)`,color:`var(--cg-text)`}}),(0,M.jsx)(k,{icon:(0,M.jsx)(b,{size:16}),onClick:()=>void O(),title:`搜索播客`})]}),_?(0,M.jsxs)(`div`,{className:`loading-state`,style:{padding:20},children:[(0,M.jsx)(g,{size:20,className:`spinner`}),(0,M.jsx)(`span`,{children:`加载可引入播客...`})]}):u.length===0?(0,M.jsxs)(`div`,{className:`empty-state`,style:{padding:24},children:[(0,M.jsx)(S,{size:32}),(0,M.jsx)(`p`,{children:`暂无可引入播客`})]}):(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(320px, 1fr))`,gap:10},children:u.map(e=>(0,M.jsxs)(`div`,{className:`card`,style:{padding:12,display:`flex`,alignItems:`center`,gap:12},children:[(0,M.jsx)(S,{size:22,style:{color:`var(--cg-primary)`,flexShrink:0}}),(0,M.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,M.jsx)(`div`,{style:{fontWeight:600,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.title}),(0,M.jsxs)(`div`,{style:{fontSize:`0.78rem`,color:`var(--cg-text-muted)`,marginTop:4},children:[ie(e.duration),` `,e.category?`· ${e.category}`:``]})]}),(0,M.jsx)(k,{icon:C===e.id?(0,M.jsx)(g,{size:14}):(0,M.jsx)(d,{size:14}),onClick:()=>void oe(e.id),loading:C===e.id,size:`sm`,variant:`primary`,title:`引入播客`,children:`引入`})]},e.id))})]}),m?(0,M.jsxs)(`div`,{className:`loading-state`,children:[(0,M.jsx)(g,{size:28,className:`spinner`}),(0,M.jsx)(`span`,{children:`加载播客资源...`})]}):r.length===0?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(S,{size:40}),(0,M.jsx)(`p`,{children:`暂无播客资源`}),(0,M.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:8},children:`点击右上角“引入播客”，把音频资源添加到当前章节`})]}):(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(360px, 1fr))`,gap:12},children:r.map(e=>(0,M.jsxs)(`div`,{className:`card`,style:{padding:14},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,M.jsx)(`div`,{style:{width:54,height:54,borderRadius:8,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`color-mix(in srgb, var(--cg-primary) 10%, var(--cg-bg))`,color:`var(--cg-primary)`,flexShrink:0},children:(0,M.jsx)(S,{size:26})}),(0,M.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,M.jsx)(`h3`,{style:{margin:0,fontSize:`1rem`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.title}),e.description&&(0,M.jsx)(`p`,{style:{margin:`6px 0 0`,color:`var(--cg-text-muted)`,fontSize:`0.82rem`,lineHeight:1.45,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},children:e.description}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:8,color:`var(--cg-text-muted)`,fontSize:`0.78rem`},children:[(0,M.jsx)(`span`,{children:ie(e.duration)}),e.file_size?(0,M.jsx)(`span`,{children:ae(e.file_size)}):null,e.category?(0,M.jsx)(`span`,{children:e.category}):null]})]})]}),ce(e)&&(0,M.jsx)(`audio`,{src:ce(e),controls:!0,style:{width:`100%`,height:38,marginTop:12}}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8,marginTop:12},children:[(0,M.jsx)(k,{icon:(0,M.jsx)(f,{size:14}),onClick:()=>n(`/admin/audios/${e.id}`),size:`sm`,title:`打开音频详情`,children:`打开`}),(0,M.jsx)(k,{icon:C===e.id?(0,M.jsx)(g,{size:14}):(0,M.jsx)(x,{size:14}),onClick:()=>void se(e.id),loading:C===e.id,size:`sm`,variant:`danger`,title:`移除关联`,children:`移除`})]})]},e.id))})]})}function we({unit:e}){let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)(!0),[a,o]=(0,j.useState)(!1),[c,l]=(0,j.useState)(null),u=(0,j.useCallback)(async()=>{if(e?.id){i(!0);try{let t=await(await s(`/api/content/unit/${e.id}/resources?resource_type=dataset`)).json();n(Array.isArray(t)?t:[])}catch(e){console.error(`获取数据集关联失败:`,e),l(`获取关联数据集失败`)}finally{i(!1)}}},[e?.id]);(0,j.useEffect)(()=>{u()},[u]);let f=async t=>{if(confirm(`确定要移除此数据集的关联吗？此操作不会删除原始数据。`))try{await s(`/api/resources/${t}/units/${e.id}`,{method:`DELETE`}),u()}catch(e){console.error(`移除关联失败:`,e),alert(`发生错误，请稍后重试`)}};return r?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(g,{size:40,className:`spinner`}),(0,M.jsx)(`p`,{children:`加载中...`})]}):(0,M.jsxs)(`div`,{className:`data-resources-view`,children:[(0,M.jsxs)(`div`,{className:`content-list-header`,children:[(0,M.jsx)(`h2`,{children:`关联数据集`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,M.jsxs)(`span`,{style:{color:`var(--cg-text-muted)`,fontSize:`0.875rem`},children:[t.length,` 个数据集`]}),(0,M.jsxs)(`button`,{className:`add-association-btn`,onClick:()=>o(!0),children:[(0,M.jsx)(d,{size:16}),`添加关联`]})]})]}),t.length===0?(0,M.jsxs)(`div`,{className:`empty-state`,children:[(0,M.jsx)(T,{size:40}),(0,M.jsx)(`p`,{children:`暂无关联数据集`}),(0,M.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`var(--cg-text-muted)`,marginTop:`8px`},children:`点击“添加关联”按钮从 Intake Catalog 中选择数据集`})]}):(0,M.jsx)(`div`,{className:`dataset-list`,children:t.map(e=>(0,M.jsxs)(`div`,{className:`dataset-item`,children:[(0,M.jsxs)(`div`,{className:`dataset-info`,children:[(0,M.jsxs)(`div`,{className:`dataset-title-row`,children:[(0,M.jsx)(T,{size:16,className:`dataset-icon`}),(0,M.jsx)(`span`,{className:`dataset-name`,children:e.title||e.id}),e.is_recommended&&(0,M.jsx)(`span`,{className:`recommended-badge`,children:`推荐`})]}),e.description&&(0,M.jsx)(`p`,{className:`dataset-description`,children:e.description}),(0,M.jsxs)(`div`,{className:`dataset-tags`,children:[(0,M.jsx)(`span`,{className:`source-tag`,children:e.id}),e.category&&(0,M.jsx)(`span`,{className:`category-tag`,children:e.category})]})]}),(0,M.jsx)(`div`,{className:`dataset-actions`,children:(0,M.jsx)(`button`,{className:`remove-btn`,onClick:()=>f(e.id),title:`移除关联`,children:(0,M.jsx)(x,{size:16})})})]},e.id))}),a&&(0,M.jsx)(Te,{unitId:e.id,onClose:()=>o(!1),onAssociated:()=>{o(!1),u()}}),(0,M.jsx)(`style`,{children:`
        .data-resources-view {
          background: var(--cg-surface);
          border-radius: 12px;
          padding: 20px;
        }

        .add-association-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: var(--admin-primary);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .add-association-btn:hover {
          background: #2563eb;
        }

        .dataset-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .dataset-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px;
          background: var(--cg-bg);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          transition: border-color 0.2s;
        }

        .dataset-item:hover {
          border-color: var(--cg-text-muted);
        }

        .dataset-info {
          flex: 1;
          min-width: 0;
        }

        .dataset-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .dataset-icon {
          color: var(--cg-text-muted);
        }

        .dataset-name {
          font-weight: 600;
          color: var(--cg-text);
        }

        .recommended-badge {
          font-size: 0.7rem;
          background: var(--admin-success-light);
          color: var(--admin-success);
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: 500;
        }

        .dataset-description {
          font-size: 0.875rem;
          color: var(--cg-text-muted);
          margin: 4px 0 8px;
          line-height: 1.5;
        }

        .dataset-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .source-tag {
          font-size: 0.75rem;
          font-family: monospace;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .category-tag {
          font-size: 0.75rem;
          background: var(--cg-bg);
          color: #2563eb;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dataset-actions .remove-btn {
          background: transparent;
          border: none;
          color: var(--cg-text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .dataset-actions .remove-btn:hover {
          background: var(--admin-danger-light);
          color: var(--admin-danger);
        }
      `})]})}function Te({unitId:e,onClose:t,onAssociated:n}){let[r,i]=(0,j.useState)(``),[a,o]=(0,j.useState)([]),[c,l]=(0,j.useState)(!1),[u,f]=(0,j.useState)(null),p=async()=>{l(!0);try{let t=await(await s(`/api/admin/units/${e}/resources/search-catalog?q=${encodeURIComponent(r)}`)).json();o(Array.isArray(t)?t:[])}catch(e){console.error(`搜索目录失败:`,e)}finally{l(!1)}};(0,j.useEffect)(()=>{p()},[r]);let m=async t=>{f(t);try{let r=await(await s(`/api/admin/units/${e}/resources/associate-dataset`,{method:`POST`,body:JSON.stringify({source_name:t})},{includeJsonContentType:!0})).json();r.success?n():alert(r.message||`关联失败`)}catch(e){console.error(`关联失败:`,e),alert(`关联操作过程中发生错误`)}finally{f(null)}};return(0,M.jsxs)(`div`,{className:`catalog-picker-overlay`,onClick:t,children:[(0,M.jsxs)(`div`,{className:`catalog-picker`,onClick:e=>e.stopPropagation(),children:[(0,M.jsxs)(`div`,{className:`picker-header`,children:[(0,M.jsx)(`h3`,{children:`查找数据集`}),(0,M.jsx)(`button`,{className:`close-btn`,onClick:t,children:(0,M.jsx)(x,{size:20})})]}),(0,M.jsxs)(`div`,{className:`picker-search`,children:[(0,M.jsxs)(`div`,{className:`search-input-wrapper`,children:[(0,M.jsx)(b,{size:18,className:`search-icon`}),(0,M.jsx)(`input`,{type:`text`,placeholder:`搜索数据源名称、描述或元数据...`,value:r,onChange:e=>i(e.target.value),onKeyDown:e=>e.key===`Enter`&&p()})]}),(0,M.jsx)(`button`,{className:`search-btn`,onClick:p,disabled:c,children:c?(0,M.jsx)(g,{size:16,className:`spinner`}):`搜索`})]}),(0,M.jsxs)(`div`,{className:`picker-results`,children:[c&&(0,M.jsxs)(`div`,{className:`loading-results`,children:[(0,M.jsx)(g,{size:32,className:`spinner`}),(0,M.jsx)(`p`,{children:`正在检索 Catalog...`})]}),!c&&a.length===0&&(0,M.jsx)(`div`,{className:`no-results`,children:(0,M.jsx)(`p`,{children:`没有找到相关数据集`})}),!c&&a.map(e=>(0,M.jsxs)(`div`,{className:`result-item`,children:[(0,M.jsxs)(`div`,{className:`result-info`,children:[(0,M.jsx)(`div`,{className:`result-name`,children:e.name}),e.description&&(0,M.jsx)(`div`,{className:`result-desc`,children:e.description})]}),(0,M.jsxs)(`button`,{className:`associate-btn`,onClick:()=>m(e.name),disabled:u===e.name,children:[u===e.name?(0,M.jsx)(g,{size:14,className:`spinner`}):(0,M.jsx)(d,{size:14}),`关联`]})]},e.name))]})]}),(0,M.jsx)(`style`,{children:`
        .catalog-picker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .catalog-picker {
          background: var(--cg-surface);
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .picker-header {
          padding: 20px;
          border-bottom: 1px solid var(--cg-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .picker-header h3 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--cg-text);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--cg-text-muted);
          cursor: pointer;
        }

        .picker-search {
          padding: 16px 20px;
          background: var(--cg-bg);
          display: flex;
          gap: 12px;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 8px;
          padding: 0 12px;
        }

        .search-icon {
          color: var(--cg-text-muted);
          margin-right: 8px;
        }

        .search-input-wrapper input {
          flex: 1;
          border: none;
          padding: 10px 0;
          outline: none;
          font-size: 0.9rem;
        }

        .search-btn {
          padding: 0 20px;
          background: var(--cg-text);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
        }

        .picker-results {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }

        .loading-results, .no-results {
          padding: 40px;
          text-align: center;
          color: var(--cg-text-muted);
        }

        .result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-bottom: 1px solid var(--cg-bg);
        }

        .result-item:hover {
          background: var(--cg-bg);
        }

        .result-info {
          flex: 1;
          min-width: 0;
        }

        .result-name {
          font-weight: 500;
          color: var(--cg-text);
          font-family: monospace;
          font-size: 0.9rem;
        }

        .result-desc {
          font-size: 0.8rem;
          color: var(--cg-text-muted);
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .associate-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--cg-bg);
          color: #2563eb;
          border: 1px solid var(--admin-primary-light);
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
        }

        .associate-btn:hover:not(:disabled) {
          background: var(--admin-primary-light);
        }

        .associate-btn:disabled {
          opacity: 0.6;
        }
      `})]})}export{N as UnitDetail};