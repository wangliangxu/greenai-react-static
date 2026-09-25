import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{n as r,t as i}from"./vendor-monaco-editor-B68nhLFZ.js";import{t as a}from"./AISidebar-BvUKAdaK.js";import{t as o}from"./vendor--monaco-editor-loader-BqAv28Zb.js";import{t as s}from"./vendor--monaco-editor-react-Bh3saoaa.js";var c=e(t(),1),l=`/pyodide/v0.29.4/full/`;function u(e){let t=(e||l).trim();return t.endsWith(`/`)?t:`${t}/`}function d(){let[e,t]=(0,c.useState)(null),[n,r]=(0,c.useState)(!0),[i,a]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let i=!0,o=u(void 0);async function s(){try{if(window.loadPyodide){let e=await window.loadPyodide({indexURL:o});i&&(t(e),r(!1));return}let e=document.createElement(`script`);e.src=`${o}pyodide.js`,e.onload=async()=>{try{let e=await window.loadPyodide({indexURL:o});i&&(t(e),r(!1))}catch(e){i&&(a(e.message||`Failed to initialize Pyodide`),r(!1))}},e.onerror=()=>{i&&(a(`Failed to load Pyodide script from ${e.src}`),r(!1))},document.body.appendChild(e)}catch(e){i&&(a(e.message||`Failed to load Pyodide`),r(!1))}}return!e&&n&&s(),()=>{i=!1}},[]),{pyodide:e,isLoading:n,error:i}}var f=n();self.MonacoEnvironment={getWorker(){return new i}},o.config({monaco:r});var p={".png":`image/png`,".jpg":`image/jpeg`,".jpeg":`image/jpeg`,".gif":`image/gif`,".webp":`image/webp`,".svg":`image/svg+xml`},m=[{id:`hello`,name:`Hello World`,code:`print("Hello Climate Guardian!")
`},{id:`math`,name:`基础计算`,code:`# 计算摄氏度与华氏度转换
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C 等于 {fahrenheit}°F")
`},{id:`data`,name:`数据处理 (模拟)`,code:`import math

temperatures = [15.2, 16.1, 14.8, 17.5, 18.0]
mean_temp = sum(temperatures) / len(temperatures)
max_temp = max(temperatures)

print("=== 气候数据概览 ===")
print(f"记录天数: {len(temperatures)}")
print(f"平均气温: {mean_temp:.2f}°C")
print(f"最高气温: {max_temp}°C")
`},{id:`pandas`,name:`Pandas 表格分析`,code:`import pandas as pd

records = {
    "date": ["周一", "周二", "周三", "周四", "周五"],
    "temperature": [21.5, 22.1, 20.8, 23.0, 24.2],
    "humidity": [63, 58, 70, 55, 52],
}

df = pd.DataFrame(records)
print("=== 校园气象数据表 ===")
print(df)
print("\\n平均气温:", df["temperature"].mean().round(2))
print("湿度最高的一天:", df.loc[df["humidity"].idxmax(), "date"])
`},{id:`matplotlib`,name:`Matplotlib 折线图`,code:`import matplotlib.pyplot as plt

hours = [8, 10, 12, 14, 16]
temperatures = [18.5, 21.2, 24.1, 25.0, 22.8]

plt.figure(figsize=(6, 3.5))
plt.plot(hours, temperatures, marker="o", color="#2563eb")
plt.title("Campus Temperature Change")
plt.xlabel("Hour")
plt.ylabel("Temperature (°C)")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("temperature_line.png", dpi=150)
print("已生成折线图: temperature_line.png")
`}];async function h(e,t){return await e.loadPackagesFromImports(t),e.runPythonAsync(t)}var g=e=>{let t=e.toLowerCase(),n=Object.keys(p).find(e=>t.endsWith(e));return n?p[n]:null};function _(e,t=URL.createObjectURL){if(!e.FS?.cwd||!e.FS?.readdir||!e.FS?.readFile)return[];let n=e.FS.cwd();return e.FS.readdir(n).filter(e=>e!==`.`&&e!==`..`).map(r=>{let i=g(r);if(!i)return null;let a=`${n.replace(/\/$/,``)}/${r}`,o=e.FS.readFile(a,{encoding:`binary`}),s=typeof o==`string`?new TextEncoder().encode(o):o;return{filename:r,mimeType:i,url:t(new Blob([s],{type:i}))}}).filter(e=>e!==null)}function v(e){if(!e.FS?.cwd||!e.FS?.readdir||!e.FS?.unlink)return;let t=e.FS.cwd();e.FS.readdir(t).filter(e=>e!==`.`&&e!==`..`&&g(e)).forEach(n=>{e.FS.unlink(`${t.replace(/\/$/,``)}/${n}`)})}function y({showAISidebar:e=!0,onToggleAISidebar:t}){let{pyodide:n,isLoading:r,error:i}=d(),[o,l]=(0,c.useState)(()=>typeof window<`u`&&window.matchMedia(`(prefers-color-scheme: dark)`).matches);(0,c.useEffect)(()=>{let e=window.matchMedia(`(prefers-color-scheme: dark)`),t=e=>l(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let[u,p]=(0,c.useState)(m[0]),[g,y]=(0,c.useState)(m[0].code),[b,x]=(0,c.useState)([]),[S,C]=(0,c.useState)([]),[w,T]=(0,c.useState)(!1),[E,D]=(0,c.useState)(!1),[O,k]=(0,c.useState)(360),[A,j]=(0,c.useState)([`### 先运行一段 Python`,``,`运行代码后，Python 助教会根据终端输出给你提示。你可以重点看看：`,``,`- 程序有没有成功执行`,`- 输出结果说明了什么`,`- 下一步可以怎样修改代码继续探索`].join(`
`));(0,c.useEffect)(()=>()=>{S.forEach(e=>URL.revokeObjectURL(e.url))},[S]);let M=e=>{p(e),y(e.code),x([]),C([])};return(0,f.jsxs)(`div`,{className:`scwc-layout`,style:{display:`flex`,height:`100%`,minHeight:`600px`,width:`100%`,overflow:`hidden`},children:[(0,f.jsxs)(`aside`,{className:`scwc-nav`,style:{width:240,borderRight:`1px solid var(--cg-border)`,display:`flex`,flexDirection:`column`,backgroundColor:`var(--cg-surface)`},children:[(0,f.jsx)(`div`,{style:{padding:`16px`,fontWeight:`bold`,borderBottom:`1px solid var(--cg-border)`},children:`📚 示例题库`}),(0,f.jsx)(`div`,{className:`scwc-tree-list`,style:{padding:`12px`,display:`flex`,flexDirection:`column`,gap:`8px`},children:m.map(e=>(0,f.jsxs)(`div`,{onClick:()=>M(e),style:{padding:`10px`,borderRadius:`6px`,cursor:`pointer`,backgroundColor:u.id===e.id?`var(--cg-primary-light)`:`transparent`,color:u.id===e.id?`var(--cg-primary-dark)`:`var(--cg-text)`,fontWeight:u.id===e.id?600:400,transition:`background-color 0.2s`},children:[`📄 `,e.name]},e.id))})]}),(0,f.jsxs)(`div`,{className:`scwc-content`,style:{flex:1,display:`flex`,flexDirection:`column`,minWidth:0,overflow:`hidden`},children:[(0,f.jsxs)(`div`,{style:{padding:`12px 16px`,borderBottom:`1px solid var(--cg-border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,backgroundColor:`var(--cg-surface)`},children:[(0,f.jsxs)(`div`,{style:{fontWeight:`bold`,color:`var(--cg-text)`},children:[`代码编辑器 `,r&&(0,f.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--cg-text-muted)`,marginLeft:`8px`},children:`(初始化环境...)`}),i&&(0,f.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--cg-error)`,marginLeft:`8px`},children:`(环境加载失败)`})]}),(0,f.jsx)(`button`,{onClick:async()=>{if(!n)return;T(!0),x([{id:Date.now(),stream:`system`,text:`正在加载依赖并运行代码...
`}]),C([]);let e=Date.now(),t=(t,n)=>{e+=1,x(r=>[...r,{id:e,stream:t,text:n}])};n.setStdout({batched:e=>{t(`stdout`,`${e}\n`)}}),n.setStderr({batched:e=>{t(`stderr`,`${e}\n`)}});try{v(n),await h(n,g);let e=_(n);C(e),e.length>0&&t(`system`,`检测到 ${e.length} 个图像输出，可在下方预览。\n`),j([`代码执行成功！`,``,`**输出结果分析**:`,``,"你的代码成功运行并输出了结果。你可以先读一读终端里的每一行，想一想这些输出分别来自哪一句 `print()`。",``,g.includes(`pandas`)||g.includes(`pd.`)?"这段代码使用了 pandas。练习台会在运行前自动加载 `import pandas as pd` 需要的包，第一次运行可能会多等几秒。":``,g.includes(`matplotlib`)||g.includes(`plt.`)?'这段代码使用了 matplotlib。建议用 `plt.savefig("图像文件名.png")` 保存图像，方便后续查看或下载。':``,``,`**下一步可以试试**:`,``,`- 改一个变量的值，再运行一次比较输出变化。`,"- 新增一行 `print()`，用自己的话解释程序算出了什么。"].filter(Boolean).join(`
`))}catch(e){t(`stderr`,`${e.message}\n`),j([`代码运行出错了。`,``,`**错误信息**:`,``,"```",e.message.split(`
`).slice(-4).join(`
`),"```",``,`**提示**: 先检查是否有拼写错误、缩进错误，或者使用了还没有定义的变量。`].join(`
`))}finally{T(!1)}},disabled:r||w||!!i,style:{padding:`6px 16px`,backgroundColor:w?`var(--cg-text-muted)`:`var(--cg-primary)`,color:`#fff`,border:`none`,borderRadius:`4px`,cursor:r||w||i?`not-allowed`:`pointer`,fontWeight:`bold`},children:w?`正在运行...`:`▶ 运行代码`})]}),(0,f.jsx)(`div`,{style:{flex:2,position:`relative`,minHeight:`300px`,borderBottom:`1px solid var(--cg-border)`},children:(0,f.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0},children:(0,f.jsx)(s,{height:`100%`,defaultLanguage:`python`,theme:o?`vs-dark`:`vs-light`,value:g,onChange:e=>y(e||``),options:{automaticLayout:!0,minimap:{enabled:!1},fontSize:14,wordWrap:`on`,padding:{top:16}}})})}),(0,f.jsxs)(`div`,{style:{flex:1,minHeight:`200px`,backgroundColor:o?`#1e1e1e`:`#ffffff`,color:o?`#d4d4d4`:`#333333`,display:`flex`,flexDirection:`column`},children:[(0,f.jsx)(`div`,{style:{padding:`8px 16px`,borderBottom:`1px solid var(--cg-border)`,fontSize:`12px`,fontWeight:`bold`,color:`var(--cg-text-muted)`},children:`终端输出 (Terminal)`}),(0,f.jsxs)(`div`,{style:{padding:`16px`,flex:1,overflowY:`auto`,fontFamily:`monospace`,fontSize:`13px`,whiteSpace:`pre-wrap`},children:[b.length===0?(0,f.jsx)(`span`,{children:`点击 "运行代码" 查看输出结果...`}):b.map(e=>(0,f.jsx)(`span`,{style:{color:e.stream===`stderr`?`var(--cg-error)`:e.stream===`system`?`var(--cg-text-muted)`:`inherit`},children:e.text},e.id)),S.length>0&&(0,f.jsx)(`div`,{style:{marginTop:`12px`,display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`12px`,whiteSpace:`normal`,fontFamily:`inherit`},children:S.map(e=>(0,f.jsxs)(`figure`,{style:{margin:0,border:`1px solid var(--cg-border)`,borderRadius:`8px`,overflow:`hidden`,background:`var(--cg-surface)`},children:[(0,f.jsx)(`img`,{src:e.url,alt:e.filename,style:{display:`block`,width:`100%`,height:`auto`}}),(0,f.jsx)(`figcaption`,{style:{padding:`8px 10px`,fontSize:`12px`,color:`var(--cg-text-muted)`,borderTop:`1px solid var(--cg-border)`},children:e.filename})]},e.url))})]})]})]}),e&&(0,f.jsx)(a,{isCollapsed:E,onToggleCollapse:()=>{D(!E),t&&t()},width:O,onWidthChange:k,aiContent:A,contentFormat:`markdown`,title:`Python 助教`})]})}export{v as clearGeneratedImageFiles,_ as collectGeneratedImageOutputs,y as default,h as runPlaygroundPython};