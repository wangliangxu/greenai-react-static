var e=/<!--\s*notebook-cell:\s*([A-Za-z0-9_-]+)\s*-->/g;function t(e){let t=[],n=[],r=null,i=!1;for(let a of e.split(`
`)){let e=a.trim();!r&&e.startsWith(`:::tool:`)?i=!0:i&&e===`:::`&&(i=!1);let o=a.match(/^\s*(`{3,}|~{3,})/);if(o&&!i){let e=o[1][0];r=r===null?e:r===e?null:r}!e&&!r&&!i?(n.join(`
`).trim()&&t.push(n.join(`
`).trim()),n=[]):n.push(a)}n.join(`
`).trim()&&t.push(n.join(`
`).trim());let a=[],o=[];for(let e of t)e.split(`
`).filter(e=>e.trim()).every(e=>/^#{1,6}[ \t]+[^\n]+$/.test(e.trim()))?o.push(e):(a.push([...o,e].join(`

`)),o=[]);return o.length&&(a.length?a[a.length-1]+=`\n\n${o.join(`

`)}`:a.push(o.join(`

`))),a}function n(e){let t=2166136261;for(let n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function r(e){return/概念|什么是|认识|了解/.test(e)?`认识概念`:/原理|为什么|如何|方法/.test(e)?`理解原理`:/观察|比较|案例|看一看|辨析/.test(e)?`观察比较`:/练习|尝试|运行|实践|实验|制作|操作/.test(e)?`动手实践`:/总结|回顾|反思|说一说/.test(e)?`解释与反思`:`探索学习`}function i(t,i,a,o,s=!1){let c=[];t.trim()&&c.push({id:`objectives`,title:`学习目标`,stage:`开始学习`,kind:`objectives`,markdown:t});let l=[],u={title:`先看一看`,body:``},d=null,f=0;for(let e of i.split(`
`)){let t=e.match(/^\s*(`{3,}|~{3,})/);if(t){let e=t[1][0];d?d===e&&(d=null):d=e}let n=d?null:e.match(/^(#{1,3})[ \t]+(.+?)\s*$/);if(n){let t=n[1].length,r=u.body.split(`
`).every(e=>!e.trim()||/^#{1,6}[ \t]+[^\n]+$/.test(e.trim()));if(f>0&&t>f&&r){u.body+=`${e}\n`,f=t;continue}u.body.trim()&&l.push(u),u={title:n[2].replace(/\s+#+$/,``),body:``},f=t}else u.body+=`${e}\n`}u.body.trim()&&l.push(u);let p=new Set,m=new Set((o?.cells||[]).map(e=>e.id)),h=new Map;for(let t of l){let i=h.get(t.title)||0;h.set(t.title,i+1);let a=`section-${n(t.title)}-${i}`,s=0,l=0;e.lastIndex=0;let u;for(;u=e.exec(t.body);){let e=t.body.slice(s,u.index).trim();e&&c.push({id:`${a}-${l++}`,title:t.title,stage:r(t.title),kind:`reading`,markdown:e}),m.has(u[1])&&(p.add(u[1]),c.push({id:`notebook-${u[1]}`,title:o?.cells.find(e=>e.id===u[1])?.title||`运行代码`,stage:`动手实践`,kind:`notebook`,cellId:u[1]})),s=u.index+u[0].length}let d=t.body.slice(s).trim();d&&c.push({id:`${a}-${l}`,title:t.title,stage:r(t.title),kind:`reading`,markdown:d})}for(let e of o?.cells||[])p.has(e.id)||c.push({id:`notebook-${e.id}`,title:e.title,stage:`动手实践`,kind:`notebook`,cellId:e.id});return s&&c.push({id:`quiz`,title:`试着回答`,stage:`检查理解`,kind:`quiz`}),a.trim()&&c.push({id:`homework`,title:`课后思考`,stage:`应用与挑战`,kind:`homework`,markdown:a}),c}export{t as n,i as t};