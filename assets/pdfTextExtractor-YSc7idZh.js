import{g,G as p}from"./pdf-vendor-DkppDo-i.js";import{l as m,r as y,z as h}from"./index-CVWhNe1A.js";const l=new Map,u=new Map;function w(e){return y(e)}function P(){return Object.fromEntries(h({Accept:"application/pdf"}).entries())}async function x(e){const t=w(e),n=l.get(t);if(n)return n.slice();const a=u.get(t);if(a)return(await a).slice();const s=(async()=>{const i=await m(t,{headers:P()}),c=new Uint8Array(await i.arrayBuffer());return l.set(t,c),u.delete(t),c})().catch(i=>{throw u.delete(t),i});return u.set(t,s),(await s).slice()}p.workerSrc="/pdfjs/pdf.worker.min.mjs";async function b(e){const t=await x(e);return g({data:t}).promise}async function d(e,t){return(await(await e.getPage(t)).getTextContent()).items.map(s=>"str"in s?s.str:"").join(" ").trim()}function T(e,t){return e instanceof Error?e.message:t}async function $(e,t=1e4){try{const n=await b(e),a=n.numPages,s=[];let f=0;const i=Math.min(5,a);for(let r=1;r<=i;r++)try{const o=await d(n,r);o&&(s.push(`[第${r}页]
${o}
`),f++)}catch(o){console.warn(`提取第${r}页失败:`,o)}if(a>7)for(let r=Math.max(6,a-1);r<=a;r++)try{const o=await d(n,r);o&&(s.push(`[第${r}页]
${o}
`),f++)}catch(o){console.warn(`提取第${r}页失败:`,o)}let c=s.join(`

`);return c.length>t&&(c=c.substring(0,t)+`

...(内容已截断)`),n.destroy(),{text:c,numPages:a,extractedPages:f}}catch(n){return console.error("PDF摘要提取失败:",n),{text:"",numPages:0,extractedPages:0,error:T(n,"PDF摘要提取失败")}}}export{$ as e,x as l};
