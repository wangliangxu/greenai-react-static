import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{n as r}from"./query-vendor-KR0ej7Li.js";import{n as i}from"./api-C6QdgyJO.js";import{Et as a,Gr as o,bn as s,ht as c,o as l,zr as u}from"./ui-vendor-BJACYxZ2.js";import{a as d,i as f}from"./markdown-vendor-g6IVHhYp.js";/* empty css                   */var p=e(t(),1),m=n(),h=()=>{let[e,t]=(0,p.useState)(null),[n,h]=(0,p.useState)([{role:`assistant`,content:`你好！我是智能数据分析助手 🤖

我可以帮你分析 weather.db 中的气象数据。你可以问我：
• 查询某个气象站的平均温度
• 分析降水量的变化趋势
• 比较不同年份的气候数据
• 生成数据统计报告

请从右侧选择一个数据表开始分析，或者直接问我问题！`,timestamp:Date.now()}]),[g,_]=(0,p.useState)(``),[v,y]=(0,p.useState)(!1),[b,x]=(0,p.useState)(null),S=(0,p.useRef)(null),C=(0,p.useRef)(null),w=(0,p.useRef)(null),{data:T,isLoading:E,refetch:D}=r({queryKey:[`data-analysis-tables`],queryFn:async()=>{let{data:e}=await i.get(`/api/data-analysis/tables`);return e},staleTime:6e5}),{data:O}=r({queryKey:[`data-analysis-table-schema`,e],queryFn:async()=>{if(!e)return null;let{data:t}=await i.get(`/api/data-analysis/tables/${e}/schema`);return t},enabled:!!e,staleTime:6e5}),k=(e,t)=>{let n=e.toLowerCase(),r={station_id:`气象站ID，唯一标识气象站`,id:`记录ID，唯一标识记录`,name:`名称`,date:`日期`,time:`时间`,year:`年份`,month:`月份`,day:`日期`,tavg:`平均温度（摄氏度）`,tmin:`最低温度（摄氏度）`,tmax:`最高温度（摄氏度）`,temp:`温度（摄氏度）`,temperature:`温度（摄氏度）`,prcp:`降水量（毫米）`,precipitation:`降水量（毫米）`,snow:`降雪量（毫米）`,wdir:`风向（度，0-360）`,wspd:`风速（米/秒）`,wpgt:`阵风风速（米/秒）`,wind:`风速（米/秒）`,pres:`气压（百帕）`,pressure:`气压（百帕）`,rhum:`相对湿度（百分比）`,humidity:`相对湿度（百分比）`,cldc:`云量（百分比）`,cloud:`云量（百分比）`,tsun:`日照时长（小时）`,sunshine:`日照时长（小时）`,latitude:`纬度（度）`,lat:`纬度（度）`,longitude:`经度（度）`,lon:`经度（度）`,lng:`经度（度）`,elevation:`海拔高度（米）`,altitude:`海拔高度（米）`,height:`高度（米）`,count:`计数`,sum:`总和`,avg:`平均值`,mean:`平均值`,min:`最小值`,max:`最大值`,std:`标准差`,variance:`方差`};if(r[n])return r[n];for(let[e,t]of Object.entries(r))if(n.includes(e)||e.includes(n))return t;return t.toLowerCase().includes(`int`)||t.toLowerCase().includes(`real`)?`数值型数据`:t.toLowerCase().includes(`text`)||t.toLowerCase().includes(`varchar`)?`文本型数据`:t.toLowerCase().includes(`date`)||t.toLowerCase().includes(`time`)?`日期时间型数据`:`数据字段`},A=(e,t)=>{let n=t.columns.filter(e=>e.pk).map(e=>e.name),r=n.length>0?`主键：${n.join(`、`)}`:``,i=`## 📊 ${e} 数据表\n\n`;if(i+=`**基本信息：**
`,i+=`- 📝 记录数：${t.row_count.toLocaleString()} 条\n`,i+=`- 📋 列数：${t.columns.length} 列\n`,r&&(i+=`- 🔑 ${r}\n`),i+=`
**字段信息：**

`,i+=`| 字段名 | 字段类型 | 字段含义 |
`,i+=`|--------|----------|----------|
`,t.columns.forEach(e=>{let t=e.name,n=e.type||`TEXT`,r=k(t,n),a=e.pk?` 🔑`:``;i+=`| \`${t}\`${a} | ${n} | ${r} |\n`}),i+=`
`,t.statistics&&Object.keys(t.statistics).length>0){i+=`**基本统计信息：**

`;let e=[],n=[],r=[];Object.entries(t.statistics).forEach(([i,a])=>{let o=t.columns.find(e=>e.name===i);if(!o)return;let s=o.type.toUpperCase();s.includes(`REAL`)||s.includes(`INTEGER`)||s.includes(`NUMERIC`)?(a.min!==void 0||a.max!==void 0||a.avg!==void 0)&&e.push({field:i,stats:a}):s.includes(`DATE`)||s.includes(`TIME`)||i.toLowerCase().includes(`date`)||i.toLowerCase().includes(`time`)||i.toLowerCase().includes(`year`)?(a.min!==void 0||a.max!==void 0)&&n.push({field:i,stats:a}):a.unique_count!==void 0&&r.push({field:i,stats:a})}),e.length>0&&(i+=`**数值字段统计：**

`,i+=`| 字段名 | 最小值 | 最大值 | 平均值 | 有效记录数 |
`,i+=`|--------|--------|--------|--------|------------|
`,e.forEach(({field:e,stats:t})=>{let n=t.min!==void 0&&t.min!==null?typeof t.min==`number`?t.min.toFixed(2):t.min:`-`,r=t.max!==void 0&&t.max!==null?typeof t.max==`number`?t.max.toFixed(2):t.max:`-`,a=t.avg!==void 0&&t.avg!==null?t.avg.toFixed(2):`-`,o=t.non_null_count===void 0?`-`:t.non_null_count.toLocaleString();i+=`| \`${e}\` | ${n} | ${r} | ${a} | ${o} |\n`}),i+=`
`),n.length>0&&(i+=`**时间范围：**

`,n.forEach(({field:e,stats:t})=>{let n=t.min||`-`,r=t.max||`-`;i+=`- \`${e}\`: ${n} 至 ${r}\n`}),i+=`
`),r.length>0&&(i+=`**文本字段统计：**

`,r.forEach(({field:e,stats:t})=>{let n=t.unique_count===void 0?`-`:t.unique_count.toLocaleString();i+=`- \`${e}\`: ${n} 个唯一值\n`}),i+=`
`)}return e.includes(`daily`)?(i+=`**推荐分析：**
`,i+=`- 📈 分析日平均温度、降水量的变化趋势
`,i+=`- 📅 比较不同年份的季节性变化
`,i+=`- 🌡️ 识别极端天气事件（高温、低温、强降水）
`,i+=`- 📊 绘制时间序列图表展示气候变化

`):e.includes(`hourly`)?(i+=`**推荐分析：**
`,i+=`- ⏰ 分析一天内的温度、湿度变化规律
`,i+=`- 🌅 研究日出日落对气象要素的影响
`,i+=`- 📊 绘制小时级数据的时间序列图

`):e.includes(`monthly`)?(i+=`**推荐分析：**
`,i+=`- 📅 分析月度平均气候特征
`,i+=`- 📈 研究长期气候变化趋势
`,i+=`- 📊 比较不同月份的差异

`):e.includes(`annual`)?(i+=`**推荐分析：**
`,i+=`- 📈 分析年度气候数据的变化趋势
`,i+=`- 📊 研究长期气候变化规律
`,i+=`- 🔍 识别异常年份和极端事件

`):e.includes(`stations`)?(i+=`**推荐分析：**
`,i+=`- 📍 分析气象站的地理分布
`,i+=`- 🌍 比较不同地区的气象站数据
`,i+=`- 📊 统计气象站的基本信息

`):(i+=`**推荐分析：**
`,i+=`- 📊 查看数据的基本统计信息
`,i+=`- 📈 分析数据的变化趋势
`,i+=`- 🔍 探索数据中的规律和异常

`),i+=`💡 **提示：** 你可以问我关于这个数据表的任何问题，比如"查询前10条数据"、"统计某个字段的平均值"等。`,i};(0,p.useEffect)(()=>{if(e&&O&&w.current!==e){w.current=e;let t=`请详细描述 ${e} 数据表的基本信息，包括：
1. 数据表的基本情况（记录数、列数等）
2. 主要字段的含义和用途（请使用表格格式展示，包含：字段名、字段类型、字段含义三列）
3. 基本统计信息（包括数值字段的最小值、最大值、平均值，日期字段的时间范围，文本字段的唯一值数量等）
4. 数据的时间范围和空间范围（如果有）
5. 推荐的数据分析方法和应用场景
6. 适合的分析问题示例

请用清晰、友好的语言进行说明，适合学生理解。字段信息和统计信息请使用 Markdown 表格格式。`,n=setTimeout(async()=>{y(!0),x(null);try{let n=await i.post(`/api/data-analysis/analyze`,{query:t,table_name:e,conversation_history:[]});if(n.data.error){let t=A(e,O);h(e=>[...e,{role:`assistant`,content:t,timestamp:Date.now()}])}else h(e=>[...e,{role:`assistant`,content:n.data.answer||`数据表信息已加载`,code:n.data.code,timestamp:Date.now()}])}catch{let t=A(e,O);h(e=>[...e,{role:`assistant`,content:t,timestamp:Date.now()}])}finally{y(!1)}},300);return()=>clearTimeout(n)}e||(w.current=null)},[e,O]),(0,p.useEffect)(()=>{S.current?.scrollIntoView({behavior:`smooth`})},[n]);let j=async()=>{if(!g.trim()||v)return;let t=g.trim();_(``),x(null);let r=[...n,{role:`user`,content:t,timestamp:Date.now()}];h(r),y(!0);try{let n=await i.post(`/api/data-analysis/analyze`,{query:t,table_name:e||void 0,conversation_history:r.slice(0,-1).map(e=>({role:e.role,content:e.content}))});n.data.error?(x(n.data.error),h([...r,{role:`assistant`,content:`抱歉，分析失败。\n\n${n.data.error}`,timestamp:Date.now()}])):h([...r,{role:`assistant`,content:n.data.answer||`分析完成`,code:n.data.code,image_path:n.data.image_path,timestamp:Date.now()}])}catch(e){let t=e.response?.data?.detail||e.message||`网络错误，请稍后重试`;x(t),h([...r,{role:`assistant`,content:`抱歉，分析失败。\n\n错误信息：${t}`,timestamp:Date.now()}])}finally{y(!1)}},M=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),j())},N=()=>{h([{role:`assistant`,content:`你好！我是智能数据分析助手 🤖

我可以帮你分析 weather.db 中的气象数据。请从右侧选择一个数据表开始分析，或者直接问我问题！`,timestamp:Date.now()}]),x(null),t(null),w.current=null},P=(0,p.useMemo)(()=>{if(!e)return[`显示所有可用的数据表`,`meteostat_daily表有多少条记录？`,`有哪些气象站的数据？`];let t=e;return[`查询${t}表的前10条数据`,`统计${t}表的总记录数`,`分析${t}表的数据分布`,`显示${t}表的列信息`]},[e]);return(0,m.jsx)(`div`,{className:`page-container inquiry-page`,children:(0,m.jsxs)(`div`,{className:`inquiry-layout`,children:[(0,m.jsxs)(`main`,{className:`inquiry-main`,children:[(0,m.jsxs)(`div`,{className:`inquiry-messages`,children:[n.map((e,t)=>(0,m.jsx)(`div`,{className:`message ${e.role}`,children:(0,m.jsx)(`div`,{className:`message-content`,children:e.role===`assistant`?(0,m.jsxs)(`div`,{className:`message-markdown`,children:[(0,m.jsx)(d,{remarkPlugins:[f],components:{code:({node:e,inline:t,className:n,children:r,...i})=>{let a=/language-(\w+)/.exec(n||``);return!t&&a?(0,m.jsxs)(`div`,{className:`code-block-wrapper`,children:[(0,m.jsxs)(`div`,{className:`code-block-header`,children:[(0,m.jsx)(o,{size:14}),(0,m.jsx)(`span`,{children:a[1]})]}),(0,m.jsx)(`pre`,{className:`code-block`,children:(0,m.jsx)(`code`,{className:n,...i,children:r})})]}):(0,m.jsx)(`code`,{className:n,...i,children:r})}},children:e.content}),e.code&&(0,m.jsxs)(`div`,{className:`generated-code`,children:[(0,m.jsxs)(`div`,{className:`code-block-header`,children:[(0,m.jsx)(o,{size:14}),(0,m.jsx)(`span`,{children:`生成的代码`})]}),(0,m.jsx)(`pre`,{className:`code-block`,children:(0,m.jsx)(`code`,{children:e.code})})]}),e.image_path&&(0,m.jsx)(`div`,{className:`generated-chart`,style:{marginTop:`12px`},children:(0,m.jsx)(`img`,{src:e.image_path,alt:`数据分析图表`,style:{maxWidth:`100%`,height:`auto`,borderRadius:`8px`,boxShadow:`0 2px 8px rgba(0, 0, 0, 0.1)`},onError:e=>{e.currentTarget.style.display=`none`}})})]}):(0,m.jsx)(`div`,{className:`message-text`,children:e.content})})},t)),v&&(0,m.jsx)(`div`,{className:`message assistant`,children:(0,m.jsxs)(`div`,{className:`message-content`,children:[(0,m.jsx)(s,{className:`animate-spin`,size:20}),(0,m.jsx)(`span`,{style:{marginLeft:`8px`},children:`正在分析数据...`})]})}),(0,m.jsx)(`div`,{ref:S})]}),P.length>0&&n.length<=1&&(0,m.jsxs)(`div`,{className:`quick-queries`,children:[(0,m.jsx)(`div`,{className:`quick-queries-label`,children:`快速查询：`}),(0,m.jsx)(`div`,{className:`quick-queries-list`,children:P.map((e,t)=>(0,m.jsx)(`button`,{className:`quick-query-btn`,onClick:()=>{_(e),C.current?.focus()},children:e},t))})]}),(0,m.jsxs)(`div`,{className:`inquiry-input-wrapper`,children:[(0,m.jsxs)(`div`,{className:`inquiry-input-container`,children:[(0,m.jsx)(`textarea`,{ref:C,className:`inquiry-input`,placeholder:e?`分析 ${e} 表的数据...`:`输入你的数据分析问题...`,value:g,onChange:e=>_(e.target.value),onKeyPress:M,rows:1,style:{resize:`none`,minHeight:`44px`,maxHeight:`120px`}}),(0,m.jsxs)(`div`,{className:`inquiry-actions`,children:[(0,m.jsx)(`button`,{className:`inquiry-btn inquiry-btn-clear`,onClick:N,title:`清空对话`,children:`清空`}),(0,m.jsx)(`button`,{className:`inquiry-btn inquiry-btn-send`,onClick:j,disabled:!g.trim()||v,title:`发送`,children:v?(0,m.jsx)(s,{className:`animate-spin`,size:18}):(0,m.jsx)(c,{size:18})})]})]}),b&&(0,m.jsx)(`div`,{className:`inquiry-error`,children:b})]})]}),(0,m.jsxs)(`aside`,{className:`inquiry-sidebar`,children:[(0,m.jsxs)(`div`,{className:`card`,children:[(0,m.jsxs)(`div`,{className:`sidebar-header`,children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flex:1},children:[(0,m.jsx)(u,{size:20}),(0,m.jsx)(`h3`,{children:`数据列表`})]}),(0,m.jsx)(`button`,{className:`refresh-btn`,onClick:()=>D(),title:`刷新数据列表`,disabled:E,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`6px`,background:`transparent`,border:`none`,borderRadius:`4px`,cursor:E?`not-allowed`:`pointer`,color:`var(--cg-text-muted)`,transition:`all 0.2s`,opacity:E?.5:1},onMouseEnter:e=>{E||(e.currentTarget.style.background=`var(--cg-surface-hover)`,e.currentTarget.style.color=`var(--cg-primary)`)},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`,e.currentTarget.style.color=`var(--cg-text-muted)`},children:(0,m.jsx)(a,{size:18,className:E?`animate-spin`:``})})]}),E?(0,m.jsxs)(`div`,{className:`loading-state`,children:[(0,m.jsx)(s,{className:`animate-spin`,size:20}),(0,m.jsx)(`span`,{children:`加载中...`})]}):T?.tables&&T.tables.length>0?(0,m.jsx)(`div`,{className:`table-list`,children:T.tables.map(n=>(0,m.jsxs)(`button`,{className:`table-item ${e===n.name?`active`:``}`,onClick:()=>{e===n.name?t(null):t(n.name)},children:[(0,m.jsxs)(`div`,{className:`table-item-header`,children:[(0,m.jsx)(`span`,{className:`table-name`,children:n.name}),e===n.name&&(0,m.jsx)(`button`,{className:`table-close-btn`,onClick:e=>{e.stopPropagation(),t(null)},title:`取消选择`,children:(0,m.jsx)(l,{size:14})})]}),(0,m.jsxs)(`div`,{className:`table-item-meta`,children:[(0,m.jsxs)(`span`,{className:`table-count`,children:[n.row_count.toLocaleString(),` 条`]}),(0,m.jsxs)(`span`,{className:`table-columns`,children:[n.columns.length,` 列`]})]})]},n.name))}):(0,m.jsx)(`div`,{className:`empty-state`,children:(0,m.jsx)(`p`,{children:`暂无数据表`})})]}),O&&(0,m.jsxs)(`div`,{className:`card`,style:{marginTop:`16px`},children:[(0,m.jsxs)(`div`,{className:`sidebar-header`,children:[(0,m.jsx)(o,{size:20}),(0,m.jsx)(`h3`,{children:`表结构`})]}),(0,m.jsxs)(`div`,{className:`table-schema`,children:[(0,m.jsxs)(`div`,{className:`schema-info`,children:[(0,m.jsx)(`span`,{className:`schema-label`,children:`表名：`}),(0,m.jsx)(`span`,{className:`schema-value`,children:O.table_name})]}),(0,m.jsxs)(`div`,{className:`schema-info`,children:[(0,m.jsx)(`span`,{className:`schema-label`,children:`记录数：`}),(0,m.jsx)(`span`,{className:`schema-value`,children:O.row_count.toLocaleString()})]}),(0,m.jsxs)(`div`,{className:`schema-columns`,children:[(0,m.jsx)(`div`,{className:`schema-label`,style:{marginBottom:`8px`},children:`列信息：`}),O.columns.map(e=>(0,m.jsxs)(`div`,{className:`schema-column-item`,children:[(0,m.jsx)(`span`,{className:`column-name`,children:e.name}),(0,m.jsx)(`span`,{className:`column-type`,children:e.type}),e.pk&&(0,m.jsx)(`span`,{className:`column-pk`,children:`PK`})]},e.name))]})]})]})]})]})})};export{h as default};