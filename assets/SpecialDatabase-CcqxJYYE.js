import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{Y as t}from"./chart-vendor-C5Vqh4H_.js";import{s as n}from"./editor-vendor-Ch6zc3nG.js";import{a as r,n as i,r as a,t as o}from"./query-vendor-KR0ej7Li.js";import{n as s,o as c}from"./api-C6QdgyJO.js";import{Et as l,Mr as u,Rr as d,W as f,a as p,bi as m,g as h,gt as g}from"./ui-vendor-BJACYxZ2.js";import"./index-CE3QzMvF.js";import{n as _,r as v,t as y}from"./AdminToolbar-DlGMLpSD.js";import"./Toolbar-B1CAJCx3.js";import{t as ee}from"./AdminSidebar-Dj_yW167.js";import"./Sidebar-D4eOJeZB.js";import{t as te}from"./AdminPageLayout-BYQNl95N.js";import"./Layout-BYvT_ga5.js";/* empty css                        */var b=e(t(),1);function x(e){let t=e===`station`?`/api/admin/meteostat/station-statistics`:`/api/admin/meteostat/${e}-statistics`;return i({queryKey:[`admin`,`meteostat`,`${e}-statistics`],queryFn:()=>s.get(t).then(e=>e.data)})}var S=n(),C=({label:e,value:t,highlight:n,detail:r})=>{let i=t??`N/A`;return(0,S.jsxs)(`div`,{className:`stat-card ${n?`highlight-${n}`:``}`,children:[(0,S.jsx)(`div`,{className:`stat-label`,children:e}),(0,S.jsx)(`div`,{className:`stat-value`,children:typeof i==`number`?i.toLocaleString():i}),r&&(0,S.jsx)(`div`,{className:`stat-detail`,children:r})]})},w=({title:e,icon:t,children:n,gridCols:r})=>(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsxs)(`h4`,{children:[t&&`${t} `,e]}),(0,S.jsx)(`div`,{className:`stats-grid`,style:r?{gridTemplateColumns:`repeat(${r}, 1fr)`}:void 0,children:n})]}),T=({region:e,icon:t,timeLabel:n=`year`})=>{if(!e||e.station_count===0)return(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsxs)(`h4`,{children:[t,` `,e?.name||`区域`]}),(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无数据`})})]});let r,i,a,o;switch(n){case`period`:r=`最早参考期`,i=`最新参考期`,a=e.earliest_period,o=e.latest_period;break;case`time`:r=`最早时间`,i=`最新时间`,a=e.earliest_time,o=e.latest_time;break;case`date`:r=`最早日期`,i=`最新日期`,a=e.earliest_date,o=e.latest_date;break;default:r=`开始年份`,i=`结束年份`,a=e.earliest_year,o=e.latest_year}return(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsxs)(`h4`,{children:[t,` `,e.name]}),(0,S.jsxs)(`div`,{className:`stats-grid`,children:[(0,S.jsx)(C,{label:`站点数量`,value:e.station_count}),(0,S.jsx)(C,{label:`记录数`,value:e.record_count}),(0,S.jsx)(C,{label:r,value:a}),(0,S.jsx)(C,{label:i,value:o})]}),e.valid_elements&&e.valid_elements.length>0&&(0,S.jsxs)(`div`,{style:{marginTop:`0.75rem`,padding:`0.5rem 0.75rem`,background:`var(--cg-bg)`,border:`1px solid var(--cg-border)`,borderRadius:`0.375rem`,fontSize:`0.875rem`,color:`var(--cg-text)`},children:[(0,S.jsx)(`strong`,{children:`有效观测要素：`}),(0,S.jsx)(`span`,{style:{marginLeft:`0.5rem`,color:`var(--cg-text-muted)`},children:e.valid_elements.join(`, `)})]})]})},ne=()=>{let{data:e,isLoading:t}=x(`daily`);if(t)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载统计信息中...`})});if(!e?.statistics)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无统计信息`})});let n=e.statistics;return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`基本信息`,icon:`📊`,children:[(0,S.jsx)(C,{label:`气象站数量`,value:n.basic?.station_count}),(0,S.jsx)(C,{label:`总记录数`,value:n.basic?.total_records}),(0,S.jsx)(C,{label:`最早日期`,value:n.basic?.earliest_date}),(0,S.jsx)(C,{label:`最新日期`,value:n.basic?.latest_date})]}),(0,S.jsxs)(w,{title:`温度统计 (°C)`,icon:`🌡️`,children:[(0,S.jsx)(C,{label:`最低平均温度`,value:n.temperature?.min_avg}),(0,S.jsx)(C,{label:`最高平均温度`,value:n.temperature?.max_avg}),(0,S.jsx)(C,{label:`平均温度`,value:n.temperature?.avg_avg}),(0,S.jsx)(C,{label:`历史最低温度`,value:n.temperature?.min_min,highlight:`cold`}),(0,S.jsx)(C,{label:`历史最高温度`,value:n.temperature?.max_max,highlight:`warm`})]}),(0,S.jsxs)(w,{title:`降水统计 (mm)`,icon:`🌧️`,children:[(0,S.jsx)(C,{label:`最小降水量`,value:n.precipitation?.min}),(0,S.jsx)(C,{label:`最大降水量`,value:n.precipitation?.max}),(0,S.jsx)(C,{label:`平均降水量`,value:n.precipitation?.avg}),(0,S.jsx)(C,{label:`降雨天数`,value:n.precipitation?.rainy_days})]}),(0,S.jsxs)(w,{title:`风速统计 (km/h)`,icon:`💨`,children:[(0,S.jsx)(C,{label:`最小风速`,value:n.wind?.min}),(0,S.jsx)(C,{label:`最大风速`,value:n.wind?.max}),(0,S.jsx)(C,{label:`平均风速`,value:n.wind?.avg})]}),(0,S.jsxs)(w,{title:`气压统计 (hPa)`,icon:`🔘`,children:[(0,S.jsx)(C,{label:`最小气压`,value:n.pressure?.min}),(0,S.jsx)(C,{label:`最大气压`,value:n.pressure?.max}),(0,S.jsx)(C,{label:`平均气压`,value:n.pressure?.avg})]}),n.extremes&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🏆 极值记录`}),(0,S.jsxs)(`div`,{className:`stats-grid`,children:[(0,S.jsx)(C,{label:`平均气温最高站点`,value:n.extremes.hottest_station?.station_id,highlight:`warm`,detail:`平均 ${n.extremes.hottest_station?.avg_temp??`N/A`}°C`}),(0,S.jsx)(C,{label:`平均气温最低站点`,value:n.extremes.coldest_station?.station_id,highlight:`cold`,detail:`平均 ${n.extremes.coldest_station?.avg_temp??`N/A`}°C`}),(0,S.jsx)(C,{label:`历史最高温度`,value:`${n.extremes.max_temperature_record?.temperature??`N/A`}°C`,highlight:`warm`,detail:`${n.extremes.max_temperature_record?.date||`N/A`} · ${n.extremes.max_temperature_record?.station_id||`N/A`}`}),(0,S.jsx)(C,{label:`历史最低温度`,value:`${n.extremes.min_temperature_record?.temperature??`N/A`}°C`,highlight:`cold`,detail:`${n.extremes.min_temperature_record?.date||`N/A`} · ${n.extremes.min_temperature_record?.station_id||`N/A`}`})]})]}),(0,S.jsx)(T,{region:n.shanghai,icon:`📍`,timeLabel:`date`}),(0,S.jsx)(T,{region:n.china_cities,icon:`🇨🇳`,timeLabel:`date`}),(0,S.jsx)(T,{region:n.world_cities,icon:`🌍`,timeLabel:`date`}),n.by_station&&n.by_station.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📍 按站点统计`}),(0,S.jsx)(`div`,{className:`station-stats-table`,children:(0,S.jsxs)(`table`,{children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`站点ID`}),(0,S.jsx)(`th`,{children:`记录数`}),(0,S.jsx)(`th`,{children:`最早日期`}),(0,S.jsx)(`th`,{children:`最新日期`}),(0,S.jsx)(`th`,{children:`温度范围`})]})}),(0,S.jsx)(`tbody`,{children:n.by_station.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:e.station_id}),(0,S.jsx)(`td`,{children:e.record_count?.toLocaleString()}),(0,S.jsx)(`td`,{children:e.earliest_date||`N/A`}),(0,S.jsx)(`td`,{children:e.latest_date||`N/A`}),(0,S.jsxs)(`td`,{children:[e.temperature?.min??`N/A`,`°C ~ `,e.temperature?.max??`N/A`,`°C (均`,e.temperature?.avg??`N/A`,`°C)`]})]},e.station_id))})]})})]})]})},re=()=>{let{data:e,isLoading:t}=x(`hourly`);if(t)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载逐小时统计信息中...`})});let n=e?.statistics||{};return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`基本信息`,icon:`📊`,children:[(0,S.jsx)(C,{label:`气象站数量`,value:n.basic?.station_count}),(0,S.jsx)(C,{label:`总记录数`,value:n.basic?.total_records}),(0,S.jsx)(C,{label:`最早时间`,value:n.basic?.earliest_time}),(0,S.jsx)(C,{label:`最新时间`,value:n.basic?.latest_time})]}),(0,S.jsxs)(w,{title:`温度统计 (°C)`,icon:`🌡️`,children:[(0,S.jsx)(C,{label:`最低温度`,value:n.temperature?.min}),(0,S.jsx)(C,{label:`最高温度`,value:n.temperature?.max}),(0,S.jsx)(C,{label:`平均温度`,value:n.temperature?.avg?.toFixed(1)})]}),(0,S.jsxs)(w,{title:`湿度统计 (%)`,icon:`💧`,children:[(0,S.jsx)(C,{label:`最低湿度`,value:n.humidity?.min}),(0,S.jsx)(C,{label:`最高湿度`,value:n.humidity?.max}),(0,S.jsx)(C,{label:`平均湿度`,value:n.humidity?.avg?.toFixed(1)})]}),(0,S.jsxs)(w,{title:`降水统计 (mm)`,icon:`🌧️`,children:[(0,S.jsx)(C,{label:`最大小时降水`,value:n.precipitation?.max}),(0,S.jsx)(C,{label:`平均降水`,value:n.precipitation?.avg?.toFixed(2)}),(0,S.jsx)(C,{label:`有降水小时数`,value:n.precipitation?.rainy_hours})]}),(0,S.jsxs)(w,{title:`风速统计 (km/h)`,icon:`💨`,children:[(0,S.jsx)(C,{label:`最小风速`,value:n.wind?.min}),(0,S.jsx)(C,{label:`最大风速`,value:n.wind?.max}),(0,S.jsx)(C,{label:`平均风速`,value:n.wind?.avg?.toFixed(1)}),(0,S.jsx)(C,{label:`最大阵风`,value:n.wind?.max_gust})]}),(0,S.jsxs)(w,{title:`气压统计 (hPa)`,icon:`🔘`,children:[(0,S.jsx)(C,{label:`最低气压`,value:n.pressure?.min}),(0,S.jsx)(C,{label:`最高气压`,value:n.pressure?.max}),(0,S.jsx)(C,{label:`平均气压`,value:n.pressure?.avg?.toFixed(1)})]}),(0,S.jsx)(T,{region:n.shanghai,icon:`📍`,timeLabel:`time`}),(0,S.jsx)(T,{region:n.china_cities,icon:`🇨🇳`,timeLabel:`time`}),(0,S.jsx)(T,{region:n.world_cities,icon:`🌍`,timeLabel:`time`}),n.by_station&&n.by_station.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📍 按站点统计`}),(0,S.jsx)(`div`,{className:`station-stats-table`,children:(0,S.jsxs)(`table`,{children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`站点ID`}),(0,S.jsx)(`th`,{children:`记录数`}),(0,S.jsx)(`th`,{children:`最早时间`}),(0,S.jsx)(`th`,{children:`最新时间`}),(0,S.jsx)(`th`,{children:`温度范围`})]})}),(0,S.jsx)(`tbody`,{children:n.by_station.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:e.station_id}),(0,S.jsx)(`td`,{children:e.record_count?.toLocaleString()}),(0,S.jsx)(`td`,{children:e.earliest_time||`N/A`}),(0,S.jsx)(`td`,{children:e.latest_time||`N/A`}),(0,S.jsxs)(`td`,{children:[e.temperature?.min??`N/A`,`°C ~ `,e.temperature?.max??`N/A`,`°C`]})]},e.station_id))})]})})]})]})},ie=()=>{let{data:e,isLoading:t}=x(`monthly`);if(t)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载月度统计信息中...`})});let n=e?.statistics||{};return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`基本信息`,icon:`📊`,children:[(0,S.jsx)(C,{label:`气象站数量`,value:n.basic?.station_count}),(0,S.jsx)(C,{label:`总记录数`,value:n.basic?.total_records}),(0,S.jsx)(C,{label:`最早日期`,value:n.basic?.earliest_date}),(0,S.jsx)(C,{label:`最新日期`,value:n.basic?.latest_date})]}),n.elements&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🌡️ 要素统计`}),(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:`1rem`},children:[(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#fef3c7`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`温度 (°C)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#78350f`},children:[(0,S.jsxs)(`div`,{children:[`最低: `,n.elements.temperature?.tmin_min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`最高: `,n.elements.temperature?.tmax_max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`平均: `,n.elements.temperature?.avg??`N/A`]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#dbeafe`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`降水 (mm)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#1e40af`},children:[(0,S.jsxs)(`div`,{children:[`最小: `,n.elements.precipitation?.min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`最大: `,n.elements.precipitation?.max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`平均: `,n.elements.precipitation?.avg??`N/A`]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#dcfce7`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`风速 (km/h)`}),(0,S.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#166534`},children:(0,S.jsxs)(`div`,{children:[`平均: `,n.elements.wind?.avg??`N/A`]})})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#e0e7ff`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`气压 (hPa)`}),(0,S.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#3730a3`},children:(0,S.jsxs)(`div`,{children:[`平均: `,n.elements.pressure?.avg??`N/A`]})})]})]})]}),(0,S.jsx)(T,{region:n.shanghai,icon:`📍`,timeLabel:`date`}),(0,S.jsx)(T,{region:n.china_cities,icon:`🇨🇳`,timeLabel:`date`}),(0,S.jsx)(T,{region:n.world_cities,icon:`🌍`,timeLabel:`date`}),n.by_station&&n.by_station.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📍 按站点统计`}),(0,S.jsx)(`div`,{className:`station-stats-table`,children:(0,S.jsxs)(`table`,{children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`站点ID`}),(0,S.jsx)(`th`,{children:`记录数`}),(0,S.jsx)(`th`,{children:`最早日期`}),(0,S.jsx)(`th`,{children:`最新日期`}),(0,S.jsx)(`th`,{children:`温度范围`})]})}),(0,S.jsx)(`tbody`,{children:n.by_station.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:e.station_id}),(0,S.jsx)(`td`,{children:e.record_count?.toLocaleString()}),(0,S.jsx)(`td`,{children:e.earliest_date||`N/A`}),(0,S.jsx)(`td`,{children:e.latest_date||`N/A`}),(0,S.jsxs)(`td`,{children:[e.temperature?.min??`N/A`,`°C ~ `,e.temperature?.max??`N/A`,`°C (均`,e.temperature?.avg??`N/A`,`°C)`]})]},e.station_id))})]})})]})]})},ae=()=>{let{data:e,isLoading:t}=x(`annual`);if(t)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载年度统计信息中...`})});let n=e?.statistics||{};return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`基本统计`,icon:`📊`,children:[(0,S.jsx)(C,{label:`气象站数量`,value:n.basic?.station_count}),(0,S.jsx)(C,{label:`总记录数`,value:n.basic?.total_records}),(0,S.jsx)(C,{label:`最早年份`,value:n.basic?.earliest_year}),(0,S.jsx)(C,{label:`最新年份`,value:n.basic?.latest_year})]}),(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🌡️ 要素统计`}),(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`},children:[(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#fef3c7`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`温度 (°C)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#78350f`},children:[(0,S.jsxs)(`div`,{children:[`最低: `,n.elements?.temperature?.tmin_min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`最高: `,n.elements?.temperature?.tmax_max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`平均: `,n.elements?.temperature?.tavg_avg??`N/A`]}),n.elements?.temperature?.txmn_min&&(0,S.jsxs)(`div`,{children:[`极端最低: `,n.elements.temperature.txmn_min]}),n.elements?.temperature?.txmx_max&&(0,S.jsxs)(`div`,{children:[`极端最高: `,n.elements.temperature.txmx_max]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#dbeafe`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`年降水 (mm)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#1e40af`},children:[(0,S.jsxs)(`div`,{children:[`最小: `,n.elements?.precipitation?.min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`最大: `,n.elements?.precipitation?.max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`平均: `,n.elements?.precipitation?.avg??`N/A`]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#e0e7ff`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`其他要素`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#3730a3`},children:[(0,S.jsxs)(`div`,{children:[`风速平均: `,n.elements?.other?.wspd_avg??`N/A`,` km/h`]}),(0,S.jsxs)(`div`,{children:[`气压平均: `,n.elements?.other?.pres_avg??`N/A`,` hPa`]})]})]})]})]}),(0,S.jsx)(T,{region:n.shanghai,icon:`📍`,timeLabel:`year`}),(0,S.jsx)(T,{region:n.china_cities,icon:`🇨🇳`,timeLabel:`year`}),(0,S.jsx)(T,{region:n.world_cities,icon:`🌍`,timeLabel:`year`}),n.by_station&&n.by_station.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📍 按站点统计`}),(0,S.jsx)(`div`,{className:`station-stats-table`,children:(0,S.jsxs)(`table`,{children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`站点ID`}),(0,S.jsx)(`th`,{children:`记录数`}),(0,S.jsx)(`th`,{children:`最早年份`}),(0,S.jsx)(`th`,{children:`最新年份`}),(0,S.jsx)(`th`,{children:`温度范围`})]})}),(0,S.jsx)(`tbody`,{children:n.by_station.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:e.station_id}),(0,S.jsx)(`td`,{children:e.record_count?.toLocaleString()}),(0,S.jsx)(`td`,{children:e.earliest_year||`N/A`}),(0,S.jsx)(`td`,{children:e.latest_year||`N/A`}),(0,S.jsxs)(`td`,{children:[e.temperature?.min??`N/A`,`°C ~ `,e.temperature?.max??`N/A`,`°C (均`,e.temperature?.avg??`N/A`,`°C)`]})]},e.station_id))})]})})]})]})},oe=()=>{let{data:e,isLoading:t}=x(`normal`);if(t)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载气候常态统计信息中...`})});let n=e?.statistics||{};return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`基本统计`,icon:`📊`,children:[(0,S.jsx)(C,{label:`气象站数量`,value:n.basic?.station_count}),(0,S.jsx)(C,{label:`总记录数`,value:n.basic?.total_records})]}),n.basic?.periods&&n.basic.periods.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📅 参考期分布`}),(0,S.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.5rem`},children:n.basic.periods.map(e=>(0,S.jsxs)(`div`,{style:{padding:`0.25rem 0.75rem`,background:`#e0f2fe`,borderRadius:`1rem`,fontSize:`0.875rem`,color:`#0369a1`},children:[e.period,` (`,e.station_count,`站/`,e.record_count,`条)`]},e.period))})]}),(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🌡️ 要素统计`}),(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`},children:[(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#fef3c7`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`温度 (°C)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#78350f`},children:[(0,S.jsxs)(`div`,{children:[`月均最低: `,n.elements?.temperature?.tmin_min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`月均最高: `,n.elements?.temperature?.tmax_max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`月均温度: `,n.elements?.temperature?.tavg_avg??`N/A`]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#dbeafe`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`月降水 (mm)`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#1e40af`},children:[(0,S.jsxs)(`div`,{children:[`最小: `,n.elements?.precipitation?.min??`N/A`]}),(0,S.jsxs)(`div`,{children:[`最大: `,n.elements?.precipitation?.max??`N/A`]}),(0,S.jsxs)(`div`,{children:[`平均: `,n.elements?.precipitation?.avg??`N/A`]})]})]}),(0,S.jsxs)(`div`,{style:{padding:`1rem`,background:`#e0e7ff`,borderRadius:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{fontWeight:600,marginBottom:`0.5rem`},children:`其他要素`}),(0,S.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`#3730a3`},children:[(0,S.jsxs)(`div`,{children:[`风速平均: `,n.elements?.other?.wspd_avg??`N/A`,` km/h`]}),(0,S.jsxs)(`div`,{children:[`气压平均: `,n.elements?.other?.pres_avg??`N/A`,` hPa`]})]})]})]})]}),(0,S.jsx)(T,{region:n.shanghai,icon:`📍`,timeLabel:`period`}),(0,S.jsx)(T,{region:n.china_cities,icon:`🇨🇳`,timeLabel:`period`}),(0,S.jsx)(T,{region:n.world_cities,icon:`🌍`,timeLabel:`period`})]})},se=({tableRowCount:e})=>{let{data:t,isLoading:n}=x(`station`);if(n)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载站点统计信息中...`})});let r=t?.total_stations||e||0,i=t?.countries||[],a=t?.top_countries||[],o=t?.china_provinces||[],s=t?.china_cn_stats||{total:0,with_cn_name:0};return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`全球站点概览`,icon:`📊`,children:[(0,S.jsx)(C,{label:`总站点数`,value:r}),(0,S.jsx)(C,{label:`国家/地区数`,value:i.length}),s.total>0&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C,{label:`中国站点`,value:s.total}),(0,S.jsx)(C,{label:`已本地化`,value:`${s.with_cn_name}/${s.total}`})]})]}),a.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🌍 站点分布 Top 20`}),(0,S.jsx)(`div`,{className:`country-list`,children:a.map((e,t)=>(0,S.jsxs)(`div`,{className:`country-item`,children:[(0,S.jsxs)(`span`,{className:`country-rank`,children:[`#`,t+1]}),(0,S.jsx)(`span`,{className:`country-name`,children:e.country}),(0,S.jsxs)(`span`,{className:`country-count`,children:[e.count.toLocaleString(),` 站`]})]},t))})]}),o.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🇨🇳 中国省份分布`}),(0,S.jsx)(`div`,{className:`country-list`,children:o.map((e,t)=>(0,S.jsxs)(`div`,{className:`country-item`,children:[(0,S.jsxs)(`span`,{className:`country-rank`,children:[`#`,t+1]}),(0,S.jsx)(`span`,{className:`country-name`,children:e.province}),(0,S.jsxs)(`span`,{className:`country-count`,children:[e.count.toLocaleString(),` 站`]})]},t))})]})]})};function E(){return i({queryKey:[`admin`,`shanghai-weather`,`daily-statistics`],queryFn:()=>s.get(`/api/admin/shanghai-weather/daily-statistics`).then(e=>e.data)})}var ce=()=>{let{data:e,isLoading:t,error:n,refetch:r}=E();if(t)return(0,S.jsxs)(`div`,{className:`empty-state`,style:{padding:`3rem 1rem`},children:[(0,S.jsx)(`div`,{className:`spinner`,style:{width:`32px`,height:`32px`,border:`3px solid rgba(59, 130, 246, 0.2)`,borderTopColor:`var(--admin-primary, #3b82f6)`,borderRadius:`50%`,animation:`spin 1s linear infinite`,margin:`0 auto 1rem`}}),(0,S.jsx)(`p`,{style:{color:`var(--cg-text-muted)`},children:`正在统计上海逐日气象数据 (22,646 条记录)...`})]});if(n||!e?.success)return(0,S.jsxs)(`div`,{className:`empty-state`,style:{padding:`3rem 1rem`},children:[(0,S.jsx)(`p`,{style:{color:`var(--admin-danger, #ef4444)`,marginBottom:`1rem`},children:`获取上海逐日气象统计失败`}),(0,S.jsx)(`button`,{className:`btn-secondary`,onClick:()=>r(),style:{padding:`0.4rem 1rem`,borderRadius:`4px`,cursor:`pointer`},children:`重试`})]});let{station:i,basic:a,temperature:o,precipitation:s,wind:c,pressure:l,humidity_evaporation:u,extremes:d,decades:f}=e;return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`台站与观测基础信息`,icon:`🏢`,children:[(0,S.jsx)(C,{label:`观测台站`,value:i?.station_name||`上海徐家汇国家基准气候站`,detail:`站号: ${i?.station_id||`58367`} · 海拔 ${i?.elevation||`4.0m`}`}),(0,S.jsx)(C,{label:`总观测天数`,value:a?.total_records,detail:`跨度约 ${a?.years_covered||62} 年`}),(0,S.jsx)(C,{label:`观测起始日期`,value:a?.earliest_date}),(0,S.jsx)(C,{label:`观测截止日期`,value:a?.latest_date})]}),(0,S.jsxs)(w,{title:`气温要素统计 (°C)`,icon:`🌡️`,children:[(0,S.jsx)(C,{label:`年日均气温`,value:o?.avg_tavg}),(0,S.jsx)(C,{label:`历史极端最高温`,value:o?.max_tmax?`${o.max_tmax}°C`:`N/A`,highlight:`warm`,detail:d?.max_temp_record?.date?`发生于 ${d.max_temp_record.date}`:void 0}),(0,S.jsx)(C,{label:`历史极端最低温`,value:o?.min_tmin?`${o.min_tmin}°C`:`N/A`,highlight:`cold`,detail:d?.min_temp_record?.date?`发生于 ${d.min_temp_record.date}`:void 0}),(0,S.jsx)(C,{label:`高温日数 (≥35°C)`,value:o?.hot_days,detail:`年均约 10.3 天`}),(0,S.jsx)(C,{label:`酷暑日数 (≥37°C)`,value:o?.severe_hot_days,detail:`历史罕见强热浪`}),(0,S.jsx)(C,{label:`冰冻日数 (≤0°C)`,value:o?.freezing_days,detail:`冬季结冰严寒日`})]}),(0,S.jsxs)(w,{title:`降水要素统计 (mm)`,icon:`🌧️`,children:[(0,S.jsx)(C,{label:`极端单日最大降水`,value:s?.max_prcp?`${s.max_prcp} mm`:`N/A`,highlight:`warm`,detail:d?.max_prcp_record?.date?`发生于 ${d.max_prcp_record.date}`:void 0}),(0,S.jsx)(C,{label:`日平均降水量`,value:s?.avg_prcp?`${s.avg_prcp} mm`:`N/A`}),(0,S.jsx)(C,{label:`降水总天数`,value:s?.rainy_days,detail:`降水频率 ${s?.rainy_day_pct??`N/A`}%`}),(0,S.jsx)(C,{label:`暴雨日数 (≥50mm)`,value:s?.heavy_rain_days,detail:`强降水事件总数`}),(0,S.jsx)(C,{label:`大暴雨日数 (≥100mm)`,value:s?.storm_rain_days,detail:`极端台风暴雨事件`})]}),(0,S.jsxs)(w,{title:`风速与气压统计`,icon:`💨`,children:[(0,S.jsx)(C,{label:`日平均风速`,value:c?.avg_wspd?`${c.avg_wspd} m/s`:`N/A`}),(0,S.jsx)(C,{label:`最大日均风速`,value:c?.max_wmax?`${c.max_wmax} m/s`:`N/A`}),(0,S.jsx)(C,{label:`极大瞬时风速`,value:c?.max_gust?`${c.max_gust} m/s`:`N/A`,detail:d?.max_gust_record?.date?`发生于 ${d.max_gust_record.date}`:void 0}),(0,S.jsx)(C,{label:`平均本站气压`,value:l?.avg_pres?`${l.avg_pres} hPa`:`N/A`}),(0,S.jsx)(C,{label:`极端最低气压`,value:l?.min_pres?`${l.min_pres} hPa`:`N/A`,detail:`强台风过境低压`}),(0,S.jsx)(C,{label:`极端最高气压`,value:l?.max_pres?`${l.max_pres} hPa`:`N/A`,detail:`冬季冷高压控制`})]}),(0,S.jsxs)(w,{title:`湿度与蒸发统计`,icon:`💧`,children:[(0,S.jsx)(C,{label:`平均相对湿度`,value:u?.avg_rhum?`${u.avg_rhum}%`:`N/A`}),(0,S.jsx)(C,{label:`历史最小相对湿度`,value:u?.min_rhum?`${u.min_rhum}%`:`N/A`,detail:`极干燥天气记录`}),(0,S.jsx)(C,{label:`小型蒸发皿日均蒸发`,value:u?.avg_evap?`${u.avg_evap} mm`:`N/A`})]}),d&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`🏆 历史气象极值事件`}),(0,S.jsxs)(`div`,{className:`stats-grid`,children:[(0,S.jsx)(C,{label:`历史极端最高气温`,value:d.max_temp_record?.temperature?`${d.max_temp_record.temperature}°C`:`N/A`,highlight:`warm`,detail:`${d.max_temp_record?.date||``} · ${d.max_temp_record?.description||`热浪峰值`}`}),(0,S.jsx)(C,{label:`历史极端最低气温`,value:d.min_temp_record?.temperature?`${d.min_temp_record.temperature}°C`:`N/A`,highlight:`cold`,detail:`${d.min_temp_record?.date||``} · ${d.min_temp_record?.description||`极寒冰冻`}`}),(0,S.jsx)(C,{label:`单日特大暴雨记录`,value:d.max_prcp_record?.precipitation?`${d.max_prcp_record.precipitation} mm`:`N/A`,highlight:`warm`,detail:`${d.max_prcp_record?.date||``} · ${d.max_prcp_record?.description||`暴雨记录`}`}),(0,S.jsx)(C,{label:`台风极大瞬时风速`,value:d.max_gust_record?.gust?`${d.max_gust_record.gust} m/s`:`N/A`,detail:`${d.max_gust_record?.date||``} · ${d.max_gust_record?.description||`狂风阵风`}`})]})]}),f&&f.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,children:[(0,S.jsx)(`h4`,{children:`📈 气候增暖演变特征（按年代统计）`}),(0,S.jsx)(`div`,{className:`table-wrapper`,style:{marginTop:`0.75rem`},children:(0,S.jsxs)(`table`,{className:`data-table`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`年代`}),(0,S.jsx)(`th`,{children:`记录天数`}),(0,S.jsx)(`th`,{children:`平均气温 (°C)`}),(0,S.jsx)(`th`,{children:`平均最高气温 (°C)`}),(0,S.jsx)(`th`,{children:`平均最低气温 (°C)`}),(0,S.jsx)(`th`,{children:`高温日数 (≥35°C)`}),(0,S.jsx)(`th`,{children:`暴雨日数 (≥50mm)`}),(0,S.jsx)(`th`,{children:`年代累计降水 (mm)`})]})}),(0,S.jsx)(`tbody`,{children:f.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(`strong`,{children:e.decade})}),(0,S.jsx)(`td`,{children:e.days?.toLocaleString()}),(0,S.jsx)(`td`,{style:{color:e.avg_temp>=17?`var(--admin-warning, #f59e0b)`:`var(--cg-text)`,fontWeight:600},children:e.avg_temp??`N/A`}),(0,S.jsx)(`td`,{children:e.avg_tmax??`N/A`}),(0,S.jsx)(`td`,{children:e.avg_tmin??`N/A`}),(0,S.jsx)(`td`,{style:{color:e.hot_days>100?`var(--admin-danger, #ef4444)`:`var(--cg-text)`,fontWeight:e.hot_days>100?600:`normal`},children:e.hot_days}),(0,S.jsx)(`td`,{children:e.heavy_rain_days}),(0,S.jsx)(`td`,{children:e.total_prcp?.toLocaleString()})]},e.decade))})]})})]})]})};function D(e,t){return i({queryKey:[`admin`,`databases`,e,`tables`,t,`statistics`],queryFn:()=>s.get(`/api/admin/databases/${e}/tables/${t}/statistics`).then(e=>e.data),enabled:!!e&&!!t})}var le=({dbName:e,tableName:t,tableInfo:n})=>{let{data:r,isLoading:i}=D(e,t),a=r?.basic?.row_count??n?.row_count??0,o=r?.basic?.column_count??n?.column_count??0;return(0,S.jsxs)(`div`,{className:`statistics-view`,children:[(0,S.jsxs)(w,{title:`数据表基础概览`,icon:`📊`,children:[(0,S.jsx)(C,{label:`总记录行数`,value:a}),(0,S.jsx)(C,{label:`总字段列数`,value:o}),r?.temporal&&Object.entries(r.temporal).map(([e,t])=>(0,S.jsx)(C,{label:`时间跨度 (${e})`,value:t.min&&t.max?`${t.min} ~ ${t.max}`:`无`,detail:`根据时间字段自动探测`},e))]}),i&&(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,color:`var(--cg-text-muted)`,margin:`1rem 0`},children:[(0,S.jsx)(`div`,{className:`spinner`,style:{width:`16px`,height:`16px`,border:`2px solid rgba(59, 130, 246, 0.2)`,borderTopColor:`var(--admin-primary, #3b82f6)`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),(0,S.jsx)(`span`,{children:`正在计算列分布与极值统计...`})]}),r?.columns&&r.columns.length>0&&(0,S.jsxs)(`div`,{className:`stats-section`,style:{marginTop:`1.5rem`},children:[(0,S.jsx)(`h4`,{children:`🔢 数值列聚合指标`}),(0,S.jsx)(`div`,{className:`table-wrapper`,style:{marginTop:`0.75rem`},children:(0,S.jsxs)(`table`,{className:`data-table`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`字段名称`}),(0,S.jsx)(`th`,{children:`最小值 (Min)`}),(0,S.jsx)(`th`,{children:`最大值 (Max)`}),(0,S.jsx)(`th`,{children:`平均值 (Avg)`}),(0,S.jsx)(`th`,{children:`有效记录数`}),(0,S.jsx)(`th`,{children:`缺失记录数`})]})}),(0,S.jsx)(`tbody`,{children:r.columns.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(`strong`,{children:e.column_name})}),(0,S.jsx)(`td`,{children:e.min===null?`-`:e.min.toLocaleString()}),(0,S.jsx)(`td`,{children:e.max===null?`-`:e.max.toLocaleString()}),(0,S.jsx)(`td`,{children:e.avg===null?`-`:e.avg.toLocaleString()}),(0,S.jsx)(`td`,{children:e.non_null.toLocaleString()}),(0,S.jsx)(`td`,{style:{color:e.null_count>0?`var(--admin-warning, #f59e0b)`:`var(--cg-text)`},children:e.null_count.toLocaleString()})]},e.column_name))})]})})]})]})},ue=({isOpen:e,onClose:t})=>{let[n,r]=(0,b.useState)({shanghai:!1,chinaCities:!1,worldCities:!1}),[i,a]=(0,b.useState)({current:0,total:0,message:``,isUpdating:!1,isComplete:!1});if(!e)return null;let o=async()=>{if(Object.values(n).filter(Boolean).length===0){alert(`请至少选择一个更新选项`);return}if(!confirm(`确定要更新选中的数据吗？这可能需要较长时间。`))return;let e={shanghai:n.shanghai,china_cities:n.chinaCities,world_cities:n.worldCities,force_full:!1};a({current:0,total:100,message:`准备开始更新...`,isUpdating:!0,isComplete:!1});try{let t=(await c(`/api/admin/meteostat/update-daily`,{method:`POST`,body:JSON.stringify(e)},{includeJsonContentType:!0})).body?.getReader(),n=new TextDecoder;if(!t)throw Error(`No reader available`);let r=``;for(;;){let{done:e,value:i}=await t.read();if(e)break;r+=n.decode(i,{stream:!0});let o=r.split(`
`);r=o.pop()||``;for(let e of o)if(e.trim())try{let t=JSON.parse(e);t.type===`start`?a(e=>({...e,total:t.total??e.total,message:t.message??e.message})):t.type===`progress`?a(e=>({...e,current:t.current??e.current,total:t.total??e.total,message:t.message??e.message})):t.type===`complete`?a(e=>({...e,isComplete:!0,message:t.message??`更新完成`,stats:t.statistics})):t.type===`error`&&(console.error(`Update error:`,t.message),a(e=>({...e,error:t.message??`更新失败`})))}catch(e){console.error(`Error parsing JSON chunk`,e)}}}catch(e){let t=e instanceof Error?e.message:`未知错误`;a(e=>({...e,error:t,isUpdating:!1})),alert(`更新出错: ${t}`)}finally{i.isComplete||a(e=>({...e,isUpdating:!1}))}},s=()=>{i.isComplete&&(r({shanghai:!1,chinaCities:!1,worldCities:!1}),a({current:0,total:0,message:``,isUpdating:!1,isComplete:!1})),t()},l=i.total>0?Math.round(i.current/i.total*100):0;return(0,S.jsx)(`div`,{className:`update-dialog-overlay`,onClick:()=>!i.isUpdating&&s(),children:(0,S.jsxs)(`div`,{className:`update-dialog`,onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:`update-dialog-header`,children:[(0,S.jsx)(`h3`,{children:`更新逐日数据`}),(0,S.jsx)(`button`,{className:`close-btn`,onClick:s,disabled:i.isUpdating&&!i.isComplete,children:`×`})]}),(0,S.jsx)(`div`,{className:`update-dialog-content`,children:!i.isUpdating&&!i.isComplete?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{style:{marginBottom:`1rem`,color:`var(--cg-text-muted)`},children:`请选择要更新的数据（可多选）。将更新所有有效年份的数据，可能需要较长时间：`}),(0,S.jsxs)(`div`,{className:`update-options`,children:[(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.shanghai,onChange:e=>r({...n,shanghai:e.target.checked})}),(0,S.jsx)(`span`,{children:`更新上海数据（58367）`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.chinaCities,onChange:e=>r({...n,chinaCities:e.target.checked})}),(0,S.jsx)(`span`,{children:`更新中国主要城市`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.worldCities,onChange:e=>r({...n,worldCities:e.target.checked})}),(0,S.jsx)(`span`,{children:`更新世界主要城市`})]})]})]}):(0,S.jsxs)(`div`,{className:`progress-container`,style:{padding:`20px 0`},children:[(0,S.jsxs)(`div`,{style:{marginBottom:`10px`,display:`flex`,justifyContent:`space-between`},children:[(0,S.jsx)(`span`,{children:i.message}),(0,S.jsxs)(`span`,{children:[l,`%`]})]}),(0,S.jsx)(`div`,{style:{height:`10px`,background:`var(--cg-border)`,borderRadius:`5px`,overflow:`hidden`},children:(0,S.jsx)(`div`,{style:{height:`100%`,background:i.error?`#ef4444`:i.isComplete?`#22c55e`:`#3b82f6`,width:`${l}%`,transition:`width 0.3s ease`}})}),i.isComplete&&(0,S.jsx)(`div`,{style:{marginTop:`15px`,padding:`10px`,background:`var(--cg-bg)`,borderRadius:`4px`,color:`#166534`},children:`✅ 更新完成！`}),i.error&&(0,S.jsxs)(`div`,{style:{marginTop:`15px`,padding:`10px`,background:`var(--cg-bg)`,borderRadius:`4px`,color:`#991b1b`},children:[`❌ `,i.error]})]})}),(0,S.jsx)(`div`,{className:`update-dialog-footer`,children:!i.isUpdating&&!i.isComplete?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`button`,{className:`btn btn-secondary`,onClick:s,children:`取消`}),(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:o,disabled:Object.values(n).every(e=>!e),children:`开始更新`})]}):(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:s,disabled:!i.isComplete&&!i.error,children:i.isComplete?`完成`:`关闭`})})]})})},de=({isOpen:e,onClose:t,onUpdate:n})=>{let[r,i]=(0,b.useState)(`shanghai`),[a,o]=(0,b.useState)(``),[s,l]=(0,b.useState)(``),[u,d]=(0,b.useState)(null),[f,p]=(0,b.useState)(!1),[m,h]=(0,b.useState)(!1),[g,_]=(0,b.useState)(null);(0,b.useEffect)(()=>{e&&(_(null),v())},[e]),(0,b.useEffect)(()=>{_(null)},[r]);let v=async()=>{p(!0);try{let e=await(await c(`/api/admin/city-settings`)).json();d(e),e.china_cities&&e.china_cities.length>0&&o(e.china_cities[0].wmo_id);let t=Object.values(e.global_cities||{}).flat();t.length>0&&l(t[0])}catch(e){console.error(`Failed to fetch city settings:`,e)}finally{p(!1)}},y=async()=>{h(!0),_(null);try{let e=await c(`/api/admin/meteostat/update-hourly`,{method:`POST`,body:JSON.stringify({shanghai:r===`shanghai`,china_city_id:r===`china_city`?a:null,world_city_id:r===`world_city`?s:null})},{includeJsonContentType:!0}),t=await e.json();e.ok?(_({success:t.success,message:t.message}),t.success&&n&&n()):_({success:!1,message:t.detail||`更新失败`})}catch(e){_({success:!1,message:`请求失败: ${e}`})}finally{h(!1)}};if(!e)return null;let ee=u?Object.values(u.global_cities||{}).flat():[];return(0,S.jsx)(`div`,{className:`update-dialog-overlay`,onClick:()=>!m&&t(),children:(0,S.jsxs)(`div`,{className:`update-dialog`,onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:`update-dialog-header`,children:[(0,S.jsx)(`h3`,{children:`更新逐小时数据`}),(0,S.jsx)(`button`,{className:`close-btn`,onClick:t,disabled:m,children:`×`})]}),(0,S.jsx)(`div`,{className:`update-dialog-content`,children:f?(0,S.jsx)(`p`,{children:`加载城市列表中...`}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{style:{marginBottom:`1rem`,color:`var(--cg-text-muted)`},children:`请选择要更新的数据（数据范围：2020年至今）：`}),(0,S.jsxs)(`div`,{className:`update-options`,children:[(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`radio`,name:`updateMode`,checked:r===`shanghai`,onChange:()=>i(`shanghai`),disabled:m}),(0,S.jsx)(`span`,{children:`更新上海数据 (58367)`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`radio`,name:`updateMode`,checked:r===`china_city`,onChange:()=>i(`china_city`),disabled:m}),(0,S.jsx)(`span`,{children:`更新指定中国城市`})]}),r===`china_city`&&u&&(0,S.jsx)(`div`,{style:{marginLeft:`2rem`,marginTop:`0.5rem`},children:(0,S.jsx)(`select`,{value:a,onChange:e=>o(e.target.value),disabled:m,style:{width:`100%`,padding:`0.5rem`,borderRadius:`4px`,border:`1px solid var(--cg-border)`},children:u.china_cities.map(e=>(0,S.jsxs)(`option`,{value:e.wmo_id,children:[e.name_cn||e.name,` (`,e.wmo_id,`)`]},e.wmo_id))})}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`radio`,name:`updateMode`,checked:r===`world_city`,onChange:()=>i(`world_city`),disabled:m}),(0,S.jsx)(`span`,{children:`更新指定世界城市`})]}),r===`world_city`&&(0,S.jsx)(`div`,{style:{marginLeft:`2rem`,marginTop:`0.5rem`},children:(0,S.jsx)(`select`,{value:s,onChange:e=>l(e.target.value),disabled:m,style:{width:`100%`,padding:`0.5rem`,borderRadius:`4px`,border:`1px solid var(--cg-border)`},children:ee.map(e=>{let t=u?.global_cities_details?.[e],n=t?.name_cn||t?.name||e;return(0,S.jsxs)(`option`,{value:e,children:[n,` (`,e,`)`]},e)})})})]}),m&&(0,S.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`,border:`1px solid #bae6fd`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginBottom:`0.5rem`},children:[(0,S.jsx)(`div`,{className:`spinner`,style:{width:`16px`,height:`16px`,border:`2px solid #3b82f6`,borderTopColor:`transparent`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),(0,S.jsx)(`span`,{style:{color:`#0369a1`,fontWeight:500},children:`正在更新数据...`})]}),(0,S.jsxs)(`p`,{style:{fontSize:`0.875rem`,color:`var(--cg-text-muted)`,margin:0},children:[`正在下载 2020-`,new Date().getFullYear(),` 年的小时数据，请耐心等待`]}),(0,S.jsx)(`div`,{style:{width:`100%`,height:`4px`,background:`var(--cg-border)`,borderRadius:`2px`,marginTop:`0.5rem`,overflow:`hidden`},children:(0,S.jsx)(`div`,{style:{width:`30%`,height:`100%`,background:`linear-gradient(90deg, #3b82f6, #60a5fa)`,borderRadius:`2px`,animation:`indeterminate 1.5s ease-in-out infinite`}})}),(0,S.jsx)(`style`,{children:`
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                    @keyframes indeterminate {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(400%); }
                    }
                  `})]}),g&&(0,S.jsx)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,borderRadius:`4px`,backgroundColor:g.success?`#dcfce7`:`#fee2e2`,color:g.success?`#166534`:`#991b1b`},children:g.message})]})}),(0,S.jsxs)(`div`,{className:`update-dialog-footer`,children:[(0,S.jsx)(`button`,{className:`btn btn-secondary`,onClick:t,disabled:m,children:g?`关闭`:`取消`}),!g&&(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:y,disabled:m||f,children:m?`更新中...`:`开始更新`})]})]})})},fe=({isOpen:e,onClose:t,monthlyStationCounts:n,onUpdate:r,isUpdating:i,progress:a})=>{let[o,s]=(0,b.useState)({shanghai:!1,chinaCities:!1,worldCities:!1});return e?(0,S.jsx)(`div`,{className:`update-dialog-overlay`,onClick:()=>!i&&t(),children:(0,S.jsxs)(`div`,{className:`update-dialog`,onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:`update-dialog-header`,children:[(0,S.jsx)(`h3`,{children:`更新月度数据`}),(0,S.jsx)(`button`,{className:`close-btn`,onClick:t,disabled:i,children:`×`})]}),(0,S.jsxs)(`div`,{className:`update-dialog-content`,children:[(0,S.jsx)(`p`,{style:{marginBottom:`1rem`,color:`var(--cg-text-muted)`},children:`请选择要更新的数据（可多选）。数据将进行增量更新（只下载新数据）：`}),(0,S.jsxs)(`div`,{className:`update-options`,children:[(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:o.shanghai,onChange:e=>s({...o,shanghai:e.target.checked}),disabled:i}),(0,S.jsxs)(`span`,{children:[`更新上海浦东数据（`,n?.counts?.shanghai||1,` 个站点）`]})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:o.chinaCities,onChange:e=>s({...o,chinaCities:e.target.checked}),disabled:i}),(0,S.jsxs)(`span`,{children:[`更新中国主要城市（`,n?.counts?.china_cities||0,` 个站点）`]})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:o.worldCities,onChange:e=>s({...o,worldCities:e.target.checked}),disabled:i}),(0,S.jsxs)(`span`,{children:[`更新世界主要城市（`,n?.counts?.world_cities||0,` 个站点）`]})]})]}),a&&(0,S.jsxs)(`div`,{className:`update-progress`,style:{marginTop:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`0.5rem`},children:[(0,S.jsx)(`span`,{children:`更新进度`}),(0,S.jsxs)(`span`,{children:[a.current,`/`,a.total]})]}),(0,S.jsx)(`div`,{style:{width:`100%`,height:`8px`,background:`var(--cg-border)`,borderRadius:`4px`,overflow:`hidden`},children:(0,S.jsx)(`div`,{style:{width:`${a.total>0?a.current/a.total*100:0}%`,height:`100%`,background:`#3b82f6`,transition:`width 0.3s`}})}),(0,S.jsx)(`p`,{style:{marginTop:`0.5rem`,fontSize:`0.875rem`,color:`var(--cg-text-muted)`},children:a.message})]})]}),(0,S.jsxs)(`div`,{className:`update-dialog-footer`,children:[(0,S.jsx)(`button`,{className:`btn btn-secondary`,onClick:t,disabled:i,children:`取消`}),(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>{let e=[];if(o.shanghai&&e.push(`shanghai`),o.chinaCities&&e.push(`china_cities`),o.worldCities&&e.push(`world_cities`),e.length===0){alert(`请至少选择一个更新选项`);return}let i=n?.counts||{},a=0;o.shanghai&&(a+=i.shanghai||1),o.chinaCities&&(a+=i.china_cities||0),o.worldCities&&(a+=i.world_cities||0),confirm(`确定要更新选中的月度数据吗？\n共 ${a} 个站点，这可能需要较长时间。\n\n数据将进行增量更新（只更新新数据）。`)&&r(e,()=>{t(),s({shanghai:!1,chinaCities:!1,worldCities:!1})})},disabled:i||Object.values(o).every(e=>!e),children:i?`更新中...`:`开始更新`})]})]})}):null},pe=({isOpen:e,onClose:t})=>{let[n,r]=(0,b.useState)({shanghai:!1,chinaCities:!1,worldCities:!1}),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(null);return e?(0,S.jsx)(`div`,{className:`update-dialog-overlay`,onClick:()=>!i&&t(),children:(0,S.jsxs)(`div`,{className:`update-dialog`,onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:`update-dialog-header`,children:[(0,S.jsx)(`h3`,{children:`更新年度数据`}),(0,S.jsx)(`button`,{className:`close-btn`,onClick:t,disabled:i,children:`×`})]}),(0,S.jsxs)(`div`,{className:`update-dialog-content`,children:[(0,S.jsx)(`p`,{style:{marginBottom:`1rem`,color:`var(--cg-text-muted)`},children:`从月度数据更新生成年度统计（不从网络下载）：`}),(0,S.jsxs)(`div`,{style:{marginBottom:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`,border:`1px solid #bae6fd`,fontSize:`0.875rem`},children:[(0,S.jsx)(`strong`,{children:`更新规则：`}),(0,S.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1.5rem`,padding:0},children:[(0,S.jsx)(`li`,{children:`年均温度 = 12个月平均温度的均值`}),(0,S.jsx)(`li`,{children:`年最低温 = 12个月最低中的最小值`}),(0,S.jsx)(`li`,{children:`年最高温 = 12个月最高中的最大值`}),(0,S.jsx)(`li`,{children:`年降水量 = 12个月降水量总和`})]})]}),(0,S.jsxs)(`div`,{className:`update-options`,children:[(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.shanghai,onChange:e=>r({...n,shanghai:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新上海浦东数据`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.chinaCities,onChange:e=>r({...n,chinaCities:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新中国主要城市`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.worldCities,onChange:e=>r({...n,worldCities:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新世界主要城市`})]})]}),i&&(0,S.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`,border:`1px solid #bae6fd`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{width:`16px`,height:`16px`,border:`2px solid #3b82f6`,borderTopColor:`transparent`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),(0,S.jsx)(`span`,{style:{color:`#0369a1`,fontWeight:500},children:`正在更新年度数据...`})]}),(0,S.jsx)(`style`,{children:`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `})]}),o&&(0,S.jsx)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,borderRadius:`4px`,backgroundColor:o.success?`#dcfce7`:`#fee2e2`,color:o.success?`#166534`:`#991b1b`},children:o.message})]}),(0,S.jsxs)(`div`,{className:`update-dialog-footer`,children:[(0,S.jsx)(`button`,{className:`btn btn-secondary`,onClick:t,disabled:i,children:`关闭`}),(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:async()=>{if(!n.shanghai&&!n.chinaCities&&!n.worldCities){alert(`请至少选择一个更新选项`);return}if(confirm(`确定要聚合年度数据吗？

这将从月度数据计算所有年份的统计值。`)){a(!0),s(null);try{let e=await c(`/api/admin/meteostat/update-annual`,{method:`POST`,body:JSON.stringify({shanghai:n.shanghai,china_cities:n.chinaCities,world_cities:n.worldCities})},{includeJsonContentType:!0}),t=await e.json();e.ok?s({success:!0,message:t.message||`成功聚合 ${t.result?.stations_updated||0} 个站点的年度数据`}):s({success:!1,message:t.detail||`聚合失败`})}catch(e){s({success:!1,message:`请求失败: ${e}`})}finally{a(!1)}}},disabled:i||Object.values(n).every(e=>!e),children:i?`更新中...`:`开始更新`})]})]})}):null},me=({isOpen:e,onClose:t})=>{let[n,r]=(0,b.useState)({shanghai:!1,chinaCities:!1,worldCities:!1}),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(null);return e?(0,S.jsx)(`div`,{className:`update-dialog-overlay`,onClick:()=>!i&&t(),children:(0,S.jsxs)(`div`,{className:`update-dialog`,onClick:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:`update-dialog-header`,children:[(0,S.jsx)(`h3`,{children:`更新 Normals 数据`}),(0,S.jsx)(`button`,{className:`close-btn`,onClick:t,disabled:i,children:`×`})]}),(0,S.jsxs)(`div`,{className:`update-dialog-content`,children:[(0,S.jsx)(`p`,{style:{marginBottom:`1rem`,color:`var(--cg-text-muted)`},children:`从 Meteostat 下载30年气候平均值（Normals）数据：`}),(0,S.jsxs)(`div`,{style:{marginBottom:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`,border:`1px solid #bae6fd`,fontSize:`0.875rem`},children:[(0,S.jsx)(`strong`,{children:`数据说明：`}),(0,S.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1.5rem`,padding:0},children:[(0,S.jsx)(`li`,{children:`包含多个参考期（如1961-1990, 1991-2020）`}),(0,S.jsx)(`li`,{children:`每个参考期有12条月度记录`}),(0,S.jsx)(`li`,{children:`字段：tmin, tmax, tavg, prcp, wspd, pres, tsun`})]})]}),(0,S.jsxs)(`div`,{className:`update-options`,children:[(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.shanghai,onChange:e=>r({...n,shanghai:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新上海浦东数据`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.chinaCities,onChange:e=>r({...n,chinaCities:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新中国主要城市`})]}),(0,S.jsxs)(`label`,{className:`update-option`,children:[(0,S.jsx)(`input`,{type:`checkbox`,checked:n.worldCities,onChange:e=>r({...n,worldCities:e.target.checked}),disabled:i}),(0,S.jsx)(`span`,{children:`更新世界主要城市`})]})]}),i&&(0,S.jsxs)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,background:`var(--cg-bg)`,borderRadius:`0.5rem`,border:`1px solid #bae6fd`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,S.jsx)(`div`,{style:{width:`16px`,height:`16px`,border:`2px solid #3b82f6`,borderTopColor:`transparent`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),(0,S.jsx)(`span`,{style:{color:`#0369a1`,fontWeight:500},children:`正在下载 Normals 数据...`})]}),(0,S.jsx)(`style`,{children:`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `})]}),o&&(0,S.jsx)(`div`,{style:{marginTop:`1rem`,padding:`0.75rem`,borderRadius:`4px`,backgroundColor:o.success?`#dcfce7`:`#fee2e2`,color:o.success?`#166534`:`#991b1b`},children:o.message})]}),(0,S.jsxs)(`div`,{className:`update-dialog-footer`,children:[(0,S.jsx)(`button`,{className:`btn btn-secondary`,onClick:t,disabled:i,children:`关闭`}),(0,S.jsx)(`button`,{className:`btn btn-primary`,onClick:async()=>{if(!n.shanghai&&!n.chinaCities&&!n.worldCities){alert(`请至少选择一个更新选项`);return}if(confirm(`确定要更新 Normals 数据吗？

Normals 是30年气候平均值，包含多个参考期的月度统计。`)){a(!0),s(null);try{let e=await c(`/api/admin/meteostat/update-normal`,{method:`POST`,body:JSON.stringify({shanghai:n.shanghai,china_cities:n.chinaCities,world_cities:n.worldCities})},{includeJsonContentType:!0}),t=await e.json();e.ok?s({success:!0,message:t.message||`成功更新 ${t.result?.stations_updated||0} 个站点`}):s({success:!1,message:t.detail||`更新失败`})}catch(e){s({success:!1,message:`请求失败: ${e}`})}finally{a(!1)}}},disabled:i||Object.values(n).every(e=>!e),children:i?`更新中...`:`开始更新`})]})]})}):null};function O(e){if(typeof e==`object`&&e){let t=e;return t.response?.data?.detail||t.message||`请求失败`}return`请求失败`}var he=e=>{let t=r(),[n,i]=(0,b.useState)(!1),[a,l]=(0,b.useState)(null);return{isUpdating:n,monthlyProgress:a,updateHourlyMutation:o({mutationFn:async e=>(i(!0),(await s.post(`/api/admin/meteostat/update-hourly`,{options:e})).data),onSuccess:(n,r)=>{let i=n.results||{},a=[],o=[];r.shanghai&&i.shanghai&&(i.shanghai.updated&&i.shanghai.records>0?a.push(`上海: ${i.shanghai.message}`):o.push(`上海: ${i.shanghai.message||`更新失败`}`)),r.huoshaoliao&&i.huoshaoliao&&(i.huoshaoliao.updated&&i.huoshaoliao.records>0?a.push(`火烧寮: ${i.huoshaoliao.message}`):o.push(`火烧寮: ${i.huoshaoliao.message||`更新失败`}`)),r.chinaCities&&i.chinaCities&&(i.chinaCities.updated&&i.chinaCities.records>0?a.push(`中国主要城市: ${i.chinaCities.message}`):o.push(`中国主要城市: ${i.chinaCities.message||`更新失败，可能所有站点都失败或无数据`}`)),r.worldCities&&i.worldCities&&(i.worldCities.updated&&i.worldCities.records>0?a.push(`世界主要城市: ${i.worldCities.message}`):o.push(`世界主要城市: ${i.worldCities.message||`更新失败`}`));let s=``;a.length>0&&(s+=`✅ 更新成功:
`+a.join(`
`)),o.length>0&&(s&&(s+=`

`),s+=`❌ 更新失败:
`+o.join(`
`)),alert(s||n.message||`更新完成，但未检测到实际更新`),t.invalidateQueries({queryKey:[`admin`,`meteostat`,`hourly-statistics`]}),t.invalidateQueries({queryKey:[`admin`,`databases`,e,`tables`]})},onError:e=>{alert(`更新失败: ${O(e)}`)},onSettled:()=>{i(!1)}}),updateDailyMutation:o({mutationFn:async e=>(i(!0),(await s.post(`/api/admin/meteostat/update-daily`,e)).data),onSuccess:(n,r)=>{let i=n.results||{},a=[],o=[];r.shanghai&&i.shanghai&&(i.shanghai.updated&&i.shanghai.records>0?a.push(`上海: ${i.shanghai.message}`):o.push(`上海: ${i.shanghai.message||`更新失败`}`)),r.chinaCities&&i.chinaCities&&(i.chinaCities.updated&&i.chinaCities.records>0?a.push(`中国主要城市: ${i.chinaCities.message}`):o.push(`中国主要城市: ${i.chinaCities.message||`更新失败`}`)),r.worldCities&&i.worldCities&&(i.worldCities.updated&&i.worldCities.records>0?a.push(`世界主要城市: ${i.worldCities.message}`):o.push(`世界主要城市: ${i.worldCities.message||`更新失败`}`));let s=``;a.length>0&&(s=`✅ 更新成功:\n${a.join(`
`)}`),o.length>0&&(s&&(s+=`

`),s+=`⚠️ 未更新:\n${o.join(`
`)}`),alert(s||`更新完成`),t.invalidateQueries({queryKey:[`admin`,`meteostat`,`statistics`]}),t.invalidateQueries({queryKey:[`admin`,`databases`,e,`tables`]})},onError:e=>{alert(`更新失败: ${O(e)}`)},onSettled:()=>{i(!1)}}),updateMonthly:(n,r)=>{i(!0),l({current:0,total:100,message:`准备更新...`});let a=new AbortController,o=n=>{if(n.type===`start`){l({current:0,total:Number(n.total)||0,message:`开始更新...`});return}if(n.type===`progress`){l({current:Number(n.current)||0,total:Number(n.total)||0,message:`正在更新: ${String(n.station||``)} (${Number(n.current)||0}/${Number(n.total)||0})`});return}if(n.type===`complete`){i(!1),l(null);let a=n.results||{},o=[];for(let[e,t]of Object.entries(a)){let n=(t.success||0)+(t.failed||0);o.push(`${e}: ${t.success||0}/${n} 个站点，${t.records||0} 条记录`)}alert(`更新完成！\n共 ${Number(n.total_success)||0}/${Number(n.total)||0} 个站点，${Number(n.total_records)||0} 条月度记录\n\n${o.join(`
`)}`),t.invalidateQueries({queryKey:[`admin`,`meteostat`,`monthly-statistics`]}),t.invalidateQueries({queryKey:[`admin`,`databases`,e,`tables`]}),r()}};return(async()=>{try{let e=(await c(`/api/meteostat/bulk/update-monthly-stream?targets=${n.join(`,`)}`,{signal:a.signal})).body?.getReader();if(!e)throw Error(`未收到月度更新流`);let t=new TextDecoder,r=``;for(;;){let{done:n,value:i}=await e.read();if(n)break;r+=t.decode(i,{stream:!0});let a=r.split(`

`);r=a.pop()||``;for(let e of a){let t=e.split(`
`).find(e=>e.startsWith(`data: `));if(t)try{o(JSON.parse(t.slice(6)))}catch(e){console.error(`SSE parse error:`,e)}}}}catch(e){a.signal.aborted||(i(!1),l(null),alert(e instanceof Error?e.message:`更新过程中发生错误`))}})(),()=>{a.abort()}},setIsUpdating:i}},ge=(e,t)=>{if(e==null)return`-`;if([`created_at`,`updated_at`,`time`,`date`,`start`,`end`].includes(t)||t.endsWith(`_time`)||t.endsWith(`_at`)||t.endsWith(`_date`))try{if(typeof e==`number`&&e>1e9&&e<1e10)return new Date(e*1e3).toLocaleString(`zh-CN`);if(typeof e==`string`&&(e.includes(`T`)||e.includes(`-`)||e.includes(`:`))){let t=new Date(e);if(!isNaN(t.getTime()))return t.toLocaleString(`zh-CN`)}}catch{return String(e)}return typeof e==`boolean`?e?`是`:`否`:typeof e==`object`?JSON.stringify(e):String(e)},k=[{dbName:`data`},{dbName:`geo`}],_e=30,A=e=>{let t=(e||``).toLowerCase();return t===`data`?1:t===`geo`?2:3},ve=(e,t)=>{let n=(e||``).toLowerCase();return n===`data`?`DATA (${t})`:n===`geo`?`GEO (${t})`:`${(e||``).toUpperCase()} (${t})`};function j(){let[e,t]=(0,b.useState)(null),[n,c]=(0,b.useState)(`data`),[x,C]=(0,b.useState)(``),[w,T]=(0,b.useState)(1),[E,D]=(0,b.useState)(!1),[O,j]=(0,b.useState)(!1),[ye,M]=(0,b.useState)(!1),[be,N]=(0,b.useState)(!1),[xe,P]=(0,b.useState)(!1),[F,I]=(0,b.useState)(null),[L,R]=(0,b.useState)(null),[z,B]=(0,b.useState)(null),V=r(),H=a({queries:k.map(e=>({queryKey:[`admin`,`databases`,e.dbName,`tables`],queryFn:()=>s.get(`/api/admin/databases/${e.dbName}/tables`).then(e=>e.data),retry:!1}))}),U=(0,b.useMemo)(()=>{let e=[];return H.forEach((t,n)=>{if(t.data?.tables){let r=k[n].dbName;t.data.tables.forEach(t=>{e.some(e=>e.name===t.name&&e.dbName===r)||e.push({...t,dbName:r})})}}),e.filter(e=>e.name.toLowerCase().includes(x.toLowerCase())).sort((e,t)=>{let n=A(e.dbName),r=A(t.dbName);return n===r?e.name.localeCompare(t.name):n-r})},[H,x]),Se=(0,b.useMemo)(()=>{let e={};U.forEach(t=>{let n=t.dbName||`other`;e[n]||(e[n]=[]),e[n].push(t)});let t=Object.keys(e).sort((e,t)=>{let n=A(e),r=A(t);return n===r?e.localeCompare(t):n-r}),n=[];return t.forEach(t=>{let r=e[t];r.length!==0&&(n.push({id:`_section_${t}`,label:ve(t,r.length),isSectionTitle:!0}),r.forEach(e=>{n.push({id:e.name,label:e.name,count:e.row_count,icon:e.name.includes(`video`)||e.name===`resources`?(0,S.jsx)(h,{size:14}):(0,S.jsx)(f,{size:14})})}))}),n},[U]),W=H.some(e=>e.isLoading),G=U.find(t=>t.name===e),K=G?.dbName;(0,b.useEffect)(()=>{!e&&U.length>0&&!x&&!W&&t(U[0].name)},[e,U,x,W]);let{isUpdating:q,monthlyProgress:Ce,updateDailyMutation:we,updateMonthly:Te,setIsUpdating:J}=he(K),{data:Y,isLoading:Ee,refetch:X}=i({queryKey:[`admin`,`databases`,K,`tables`,e,`data`,w],queryFn:async()=>(await s.get(`/api/admin/databases/${K}/tables/${e}/data`,{params:{page:w,page_size:_e}})).data,enabled:!!K&&!!e&&n===`data`}),De=G,{data:Oe}=i({queryKey:[`admin`,`meteostat`,`monthly-stations`],queryFn:()=>s.get(`/api/meteostat/bulk/monthly-stations`).then(e=>e.data),enabled:e===`meteostat_monthly`}),Z=()=>{k.forEach(e=>{V.invalidateQueries({queryKey:[`admin`,`databases`,e.dbName,`tables`]})}),K&&e&&(V.invalidateQueries({queryKey:[`admin`,`databases`,K,`tables`,e,`data`]}),X())};(0,b.useEffect)(()=>{let e;return L&&K&&(e=setInterval(()=>{s.get(`/api/admin/databases/${K}/backup/status/${L}`).then(t=>{let n=t.data;B(n),n.status===`success`?(clearInterval(e),I({type:`success`,message:n.message}),V.invalidateQueries({queryKey:[`admin`,`databases`,K,`backups`]}),setTimeout(()=>{I(null),R(null),B(null)},3e3)):n.status===`error`&&(clearInterval(e),I({type:`error`,message:n.message}),setTimeout(()=>{I(null),R(null),B(null)},3e3))}).catch(t=>{clearInterval(e),R(null),B(null),I({type:`error`,message:`获取备份进度失败`})})},500)),()=>{e&&clearInterval(e)}},[L,K,V]);let Q=o({mutationFn:()=>{if(!K)throw Error(`No dbName selected`);return s.post(`/api/admin/databases/${K}/backup`).then(e=>e.data)},onSuccess:e=>{e.task_id?R(e.task_id):(I({type:`success`,message:e.message}),setTimeout(()=>I(null),3e3))},onError:e=>{I({type:`error`,message:e.response?.data?.detail||`备份失败`})}}),$=o({mutationFn:()=>{if(!K)throw Error(`No dbName selected`);return s.post(`/api/admin/databases/${K}/vacuum`).then(e=>e.data)},onSuccess:e=>{I({type:`success`,message:`${e.message}，节省空间：${e.saved}`}),setTimeout(()=>I(null),5e3)},onError:e=>{I({type:`error`,message:e.response?.data?.detail||`优化失败`})}}),ke=o({mutationFn:async()=>(await s.post(`/api/admin/sync-stations`)).data,onSuccess:e=>{let t=e.statistics||{};alert(`${e.message||`同步完成!`}\n\n新增站点: ${t.added||0}\n更新站点: ${t.updated||0}\n来自Meteostat: ${t.total_from_meteostat||0}`),V.invalidateQueries({queryKey:[`admin`,`station-stats`]}),V.invalidateQueries({queryKey:[`admin`,`databases`,K,`tables`]}),X()},onError:e=>{alert(`同步失败: ${e.response?.data?.detail||e.message}`)}}),Ae=()=>{confirm(`确定要同步全球气象站元数据吗？这可能需要几分钟时间。`)&&(J(!0),ke.mutate(void 0,{onSettled:()=>{J(!1)}}))},je=n=>{n!==e&&(t(n),c(`data`),T(1))},Me=()=>e?(0,S.jsxs)(`div`,{className:`table-detail`,children:[F&&(0,S.jsx)(`div`,{className:`status-alert ${F.type}`,style:{margin:`0 1.5rem 1rem`,padding:`0.75rem 1rem`,borderRadius:`6px`,fontSize:`0.875rem`,display:`flex`,alignItems:`center`,gap:`0.5rem`,backgroundColor:(F.type,`var(--cg-bg)`),color:F.type===`success`?`var(--admin-success)`:`var(--admin-danger)`,border:`1px solid ${F.type===`success`?`#bbf7d0`:`var(--admin-danger-light)`}`},children:F.message}),z&&z.status===`running`&&(0,S.jsxs)(`div`,{className:`status-alert info backup-progress-container`,style:{margin:`0 1.5rem 1rem`,display:`flex`,flexDirection:`column`,gap:`8px`,padding:`12px 16px`,borderLeft:`4px solid var(--admin-primary)`,backgroundColor:`var(--cg-bg)`,borderRadius:`4px`,boxShadow:`0 1px 3px rgba(0,0,0,0.05)`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,S.jsxs)(`span`,{style:{fontWeight:500,color:`var(--admin-primary)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,S.jsx)(`div`,{className:`spinner placeholder`,style:{width:`16px`,height:`16px`,border:`2px solid rgba(59, 130, 246, 0.3)`,borderTopColor:`var(--admin-primary)`,borderRadius:`50%`,animation:`spin 1s linear infinite`}}),`全量备份进行中`]}),(0,S.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#2563eb`,fontFamily:`monospace`},children:[z.progress,`%`]})]}),(0,S.jsx)(`div`,{style:{width:`100%`,height:`6px`,backgroundColor:`var(--admin-primary)`,borderRadius:`3px`,overflow:`hidden`},children:(0,S.jsx)(`div`,{style:{width:`${z.progress}%`,height:`100%`,backgroundColor:`#2563eb`,transition:`width 0.3s ease`}})}),(0,S.jsx)(`div`,{style:{fontSize:`12px`,color:`#60a5fa`,marginTop:`2px`,fontFamily:`monospace`},children:z.message})]}),(0,S.jsxs)(`div`,{className:`table-detail-content`,children:[n===`data`&&Ne(),n===`structure`&&Pe(),n===`statistics`&&Fe()]}),(0,S.jsx)(de,{isOpen:E,onClose:()=>D(!1),onUpdate:()=>V.invalidateQueries({queryKey:[`meteostat-hourly-stats`]})}),(0,S.jsx)(ue,{isOpen:O,onClose:()=>j(!1),updateMutation:we}),(0,S.jsx)(fe,{isOpen:ye,onClose:()=>M(!1),monthlyStationCounts:Oe,onUpdate:Te,isUpdating:q,progress:Ce}),(0,S.jsx)(pe,{isOpen:be,onClose:()=>N(!1)}),(0,S.jsx)(me,{isOpen:xe,onClose:()=>P(!1)})]}):null,Ne=()=>{if(Ee)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载中...`})});let e=Y?.rows||[],t=Y?.total_pages||1;if(e.length===0)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无数据`})});let n=Object.keys(e[0]);return(0,S.jsxs)(`div`,{className:`data-view`,children:[(0,S.jsx)(`div`,{className:`table-wrapper`,children:(0,S.jsxs)(`table`,{className:`data-table`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsx)(`tr`,{children:n.map(e=>(0,S.jsx)(`th`,{children:e},e))})}),(0,S.jsx)(`tbody`,{children:e.map((e,t)=>(0,S.jsx)(`tr`,{children:n.map(t=>(0,S.jsx)(`td`,{children:ge(e[t],t)},t))},t))})]})}),t>1&&(0,S.jsxs)(`div`,{className:`pagination`,children:[(0,S.jsx)(`button`,{className:`btn btn-sm`,disabled:w===1,onClick:()=>T(e=>e-1),children:`上一页`}),(0,S.jsxs)(`span`,{children:[`第 `,w,` / `,t,` 页`]}),(0,S.jsx)(`button`,{className:`btn btn-sm`,disabled:w>=t,onClick:()=>T(e=>e+1),children:`下一页`})]})]})},Pe=()=>{if(!De)return(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无表信息`})});let e=De.columns||[];return e.length===0?(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无列信息`})}):(0,S.jsx)(`div`,{className:`structure-view`,children:(0,S.jsxs)(`table`,{className:`data-table`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{children:`列名`}),(0,S.jsx)(`th`,{children:`类型`}),(0,S.jsx)(`th`,{children:`非空`}),(0,S.jsx)(`th`,{children:`主键`})]})}),(0,S.jsx)(`tbody`,{children:e.map(e=>(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(`strong`,{children:e.name})}),(0,S.jsx)(`td`,{children:(0,S.jsx)(`code`,{children:e.type})}),(0,S.jsx)(`td`,{children:e.not_null?`✓`:``}),(0,S.jsx)(`td`,{children:e.primary_key?`✓`:``})]},e.id))})]})})},Fe=()=>{let t=G;return W?(0,S.jsxs)(`div`,{className:`empty-state`,style:{padding:`3rem 1rem`},children:[(0,S.jsx)(`div`,{className:`spinner`,style:{width:`32px`,height:`32px`,border:`3px solid rgba(59, 130, 246, 0.2)`,borderTopColor:`var(--admin-primary, #3b82f6)`,borderRadius:`50%`,animation:`spin 1s linear infinite`,margin:`0 auto 1rem`}}),(0,S.jsx)(`p`,{children:`加载数据表信息中...`})]}):!t&&!e?(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`暂无统计信息`})}):e===`shanghai_weather_daily`?(0,S.jsx)(ce,{}):e===`meteostat_daily`?(0,S.jsx)(ne,{}):e===`meteostat_hourly`?(0,S.jsx)(re,{}):e===`meteostat_stations`?(0,S.jsx)(se,{tableRowCount:t?.row_count||0}):e===`meteostat_monthly`?(0,S.jsx)(ie,{}):e===`meteostat_annual`?(0,S.jsx)(ae,{}):e===`meteostat_normal`?(0,S.jsx)(oe,{}):(0,S.jsx)(le,{dbName:K||`data`,tableName:e,tableInfo:t})},Ie=()=>W?(0,S.jsx)(`div`,{className:`empty-state`,children:(0,S.jsx)(`p`,{children:`加载中...`})}):e?Me():(0,S.jsxs)(`div`,{className:`empty-state`,style:{padding:`4rem 2rem`},children:[(0,S.jsx)(f,{size:48,style:{opacity:.3}}),(0,S.jsx)(`h3`,{children:`选择数据表`}),(0,S.jsx)(`p`,{className:`empty-hint`,children:`从右侧面板选择一个数据表查看详情`})]}),Le=(0,S.jsx)(y,{visible:!0,leftActions:e?null:(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:Z,loading:W,title:`刷新 (F5)`})}),rightActions:e?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{className:`header-tab-group`,children:[(0,S.jsxs)(`button`,{className:`header-tab-btn ${n===`data`?`active`:``}`,onClick:()=>c(`data`),title:`数据`,children:[(0,S.jsx)(u,{size:15}),(0,S.jsx)(`span`,{children:`数据`})]}),(0,S.jsxs)(`button`,{className:`header-tab-btn ${n===`structure`?`active`:``}`,onClick:()=>c(`structure`),title:`结构`,children:[(0,S.jsx)(f,{size:15}),(0,S.jsx)(`span`,{children:`结构`})]}),(0,S.jsxs)(`button`,{className:`header-tab-btn ${n===`statistics`?`active`:``}`,onClick:()=>c(`statistics`),title:`统计`,children:[(0,S.jsx)(m,{size:15}),(0,S.jsx)(`span`,{children:`统计`})]})]}),(0,S.jsx)(v,{}),(0,S.jsx)(_,{icon:(0,S.jsx)(p,{size:18}),onClick:()=>$.mutate(),loading:$.isPending,disabled:$.isPending,title:`优化选中的数据库空间`,children:`优化`}),(0,S.jsx)(_,{icon:(0,S.jsx)(d,{size:18}),onClick:()=>Q.mutate(),loading:Q.isPending||!!L,disabled:!!L||Q.isPending,title:`备份选中的专题数据库`,variant:`primary`,children:L?`备份中...`:`备份`}),(0,S.jsx)(v,{}),(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:Z,loading:Ee,title:`刷新`,children:`刷新`}),e===`meteostat_daily`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:()=>j(!0),disabled:q,variant:`success`,title:`更新逐日数据`,children:q?`更新中...`:`更新`}),e===`meteostat_hourly`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:()=>D(!0),disabled:q,variant:`success`,title:`更新逐小时数据`,children:`更新`}),e===`meteostat_stations`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:Ae,disabled:q,variant:`success`,title:`同步气象站元数据`,children:q?`同步中...`:`同步`}),e===`meteostat_monthly`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:()=>M(!0),disabled:q,variant:`success`,title:`更新月度数据`,children:q?`更新中...`:`更新`}),e===`meteostat_annual`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:()=>N(!0),disabled:q,variant:`success`,title:`从月度数据更新年度统计`,children:q?`更新中...`:`更新`}),e===`meteostat_normal`&&(0,S.jsx)(_,{icon:(0,S.jsx)(l,{size:18}),onClick:()=>P(!0),disabled:q,variant:`success`,title:`下载30年气候平均值数据`,children:q?`更新中...`:`更新`})]}):null}),Re=(0,S.jsx)(ee,{header:{title:`表`,count:U.length,actions:(0,S.jsxs)(`div`,{className:`sidebar-search-container`,children:[(0,S.jsx)(g,{size:14,className:`search-icon`}),(0,S.jsx)(`input`,{type:`text`,placeholder:`搜索数据表...`,value:x,onChange:e=>C(e.target.value),className:`search-input`})]})},items:Se,selectedId:e,onSelect:e=>je(e),position:`right`,resizable:!0,width:280,minWidth:200,maxWidth:400,variant:`compact`});return(0,S.jsxs)(te,{toolbar:Le,sidebar:Re,children:[(0,S.jsxs)(`div`,{className:`special-db-content`,children:[e&&(0,S.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,padding:`6px 0 14px`},children:(0,S.jsx)(`span`,{className:`admin-toolbar__table-name`,children:e})}),Ie()]}),(0,S.jsx)(`style`,{children:`
        .sidebar-header {
          padding: 0.875rem 1.125rem;
          border-bottom: 1px solid var(--cg-border);
          background: var(--cg-bg);
          height: 3rem;
          display: flex;
          align-items: center;
        }

        .sidebar-header h3 {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--cg-text);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .sidebar-search-container {
          margin-left: 1rem;
          position: relative;
          display: flex;
          align-items: center;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          padding: 0 0.5rem;
          height: 1.875rem;
          flex: 1;
          min-width: 0;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar-search-container:focus-within {
          border-color: var(--admin-primary);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .search-icon {
          color: var(--cg-text-muted);
          margin-right: 0.375rem;
          flex-shrink: 0;
        }

        .search-input {
          border: none;
          background: transparent;
          font-size: 0.75rem;
          color: var(--cg-text);
          width: 100%;
          outline: none;
          padding: 0;
        }

        .search-input::placeholder {
          color: var(--cg-text-muted);
        }

        .tree-nav {
          flex: 1;
          overflow-y: auto;
          padding: 0.5rem;
        }

        .tree-item {
          margin-bottom: 0.25rem;
        }

        .tree-node {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--cg-text-muted);
        }

        .tree-node:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .tree-node.active {
          background: var(--admin-primary);
          color: white;
          font-weight: 500;
        }

        .category-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .category-name {
          flex: 1;
          font-size: 0.9375rem;
        }

        .special-db-content {
          background: var(--cg-surface);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          min-height: 100%;
        }

        .category-content {
          height: 100%;
        }

        .category-header {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
          min-height: 0;
          display: flex;
          align-items: center;
        }

        .category-header h2 {
          margin: 0;
          font-size: 1.25rem;
          color: var(--cg-text);
          font-weight: 600;
        }

        .weather-tables {
          margin-top: 0;
        }

        .content-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.875rem 1.125rem;
          background: linear-gradient(to bottom, var(--cg-bg), var(--cg-bg));
          border-radius: 6px;
          margin-bottom: 1rem;
          border: 1px solid var(--cg-border);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          height: 3rem;
        }

        .toolbar-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--cg-text);
          letter-spacing: 0.01em;
        }

        .view-toggle {
          display: flex;
          gap: 0.25rem;
          background: var(--cg-surface);
          padding: 0.25rem;
          border-radius: 6px;
          border: 1px solid var(--cg-border);
        }

        .view-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--cg-text-muted);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-btn:hover {
          background: var(--cg-bg);
          color: var(--cg-text);
        }

        .view-btn.active {
          background: var(--admin-primary);
          color: white;
        }

        .tables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.875rem;
        }

        .tables-list {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .table-card {
          display: flex;
          flex-direction: column;
          padding: 1.125rem 1rem;
          border: 2px solid var(--cg-border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          background: var(--cg-surface);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .table-card-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .table-card:hover {
          border-color: var(--admin-primary);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
          transform: translateY(-1px);
        }

        .table-card.active {
          border-color: var(--admin-primary);
          background: var(--cg-bg);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .table-card.schema-open {
          border-color: #93c5fd;
        }

        .table-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--cg-bg);
          border-radius: 8px;
          color: var(--cg-text-muted);
          flex-shrink: 0;
        }

        .table-card.active .table-card-icon {
          background: var(--admin-primary);
          color: white;
        }

        .table-card-info h4 {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .table-card-info .table-meta {
          margin: 0.25rem 0 0;
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
        }

        /* Schema Preview */
        .schema-preview {
          width: 100%;
        }

        .schema-toggle {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem 0.625rem;
          margin-top: 0.625rem;
          border: 1px solid var(--cg-border);
          border-radius: 5px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.15s ease;
          width: 100%;
          justify-content: center;
        }

        .schema-toggle:hover {
          background: var(--admin-primary-light);
          border-color: #a5b4fc;
          color: #4f46e5;
        }

        .schema-chevron {
          transition: transform 0.2s ease;
          margin-left: auto;
        }

        .schema-chevron.rotated {
          transform: rotate(180deg);
        }

        .schema-columns {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-top: 0.5rem;
          padding: 0.625rem;
          background: var(--cg-bg);
          border-radius: 6px;
          border: 1px solid var(--cg-border);
          animation: schemaFadeIn 0.2s ease;
        }

        @keyframes schemaFadeIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 600px; }
        }

        .schema-col {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: var(--cg-surface);
          border: 1px solid var(--cg-border);
          border-radius: 4px;
          font-size: 0.6875rem;
          line-height: 1.4;
          transition: all 0.1s;
        }

        .schema-col:hover {
          border-color: #93c5fd;
          background: var(--cg-bg);
        }

        .schema-col-name {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .schema-pk-icon {
          color: var(--admin-warning);
          flex-shrink: 0;
        }

        .schema-col-type {
          color: var(--admin-primary);
          font-family: 'SF Mono', 'Menlo', monospace;
          font-size: 0.625rem;
        }

        .schema-col-nn {
          font-size: 0.5625rem;
          font-weight: 700;
          color: var(--admin-danger);
          background: var(--cg-bg);
          padding: 0 0.2rem;
          border-radius: 2px;
          line-height: 1.5;
        }

        .table-list-item {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.125rem;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
          background: var(--cg-surface);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .table-list-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .table-list-item:hover {
          border-color: var(--admin-primary);
          background: var(--cg-bg);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
          transform: translateX(2px);
        }

        .table-list-item.active {
          border-color: var(--admin-primary);
          background: var(--cg-bg);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
        }

        .table-list-item.schema-open {
          border-color: #93c5fd;
        }

        .table-list-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--cg-bg);
          border-radius: 6px;
          color: var(--cg-text-muted);
          flex-shrink: 0;
        }

        .table-list-item.active .table-list-icon {
          background: var(--admin-primary);
          color: white;
        }

        .table-list-info {
          flex: 1;
          min-width: 0;
        }

        .table-list-info h4 {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--cg-text);
        }

        .table-list-info .table-meta {
          margin: 0.25rem 0 0;
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
        }

        .table-detail {
          margin-top: 0;
        }

        .table-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding: 0.875rem 1.125rem;
          background: linear-gradient(to bottom, var(--cg-bg), var(--cg-bg));
          border-radius: 6px;
          border: 1px solid var(--cg-border);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          height: 3rem;
        }

        .table-detail-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: var(--cg-text);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-btn:hover {
          border-color: var(--admin-primary);
          background: var(--cg-bg);
          color: var(--admin-primary);
        }

        .detail-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          background: var(--cg-surface);
          color: var(--cg-text-muted);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          border-color: var(--admin-primary);
          color: var(--admin-primary);
        }

        .tab-btn.active {
          border-color: var(--admin-primary);
          background: var(--admin-primary);
          color: white;
        }

        .update-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.875rem;
          border: 1px solid var(--admin-success);
          border-radius: 6px;
          background: var(--cg-surface);
          color: var(--admin-success);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
        }

        .update-btn:hover {
          background: var(--admin-success);
          color: white;
        }

        .update-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        .table-detail-content {
          min-height: 300px;
        }

        .data-view, .structure-view, .statistics-view {
          width: 100%;
          color: var(--cg-text);
        }

        .table-wrapper {
          overflow-x: auto;
          margin-bottom: 1rem;
          border-radius: 8px;
          border: 1px solid var(--cg-border);
          background: var(--cg-surface);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
          color: var(--cg-text);
        }

        .data-table th {
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          color: var(--cg-text);
          background: var(--cg-bg);
          border-bottom: 1px solid var(--cg-border);
          white-space: nowrap;
        }

        .data-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--cg-border);
          color: var(--cg-text);
        }

        .data-table tbody tr:last-child td {
          border-bottom: none;
        }

        .data-table tbody tr:hover {
          background: var(--admin-primary-light, rgba(59, 130, 246, 0.08));
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stats-section {
          margin-bottom: 2rem;
        }

        .stats-section h4 {
          margin: 0 0 1rem 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--cg-text);
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--cg-border);
        }

        .stats-section:last-child {
          margin-bottom: 0;
        }

        .stat-card {
          padding: 1.25rem 1.5rem;
          background: var(--cg-bg);
          border-radius: 8px;
          border: 1px solid var(--cg-border);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stat-card:hover {
          border-color: var(--admin-primary, #3b82f6);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cg-text-muted);
          margin-bottom: 0.375rem;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--cg-text);
          margin-top: 0.25rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .stat-detail {
          font-size: 0.8125rem;
          color: var(--cg-text-muted);
          margin-top: 0.5rem;
          line-height: 1.4;
        }

        /* 亮色模式高亮卡片 */
        .stat-card.highlight-warm {
          background: linear-gradient(135deg, rgba(254, 243, 199, 0.65) 0%, rgba(255, 237, 213, 0.85) 100%);
          border-color: #f59e0b;
        }

        .stat-card.highlight-warm .stat-label {
          color: #9a3412;
        }

        .stat-card.highlight-warm .stat-value {
          color: #c2410c;
        }

        .stat-card.highlight-warm .stat-detail {
          color: #9a3412;
        }

        .stat-card.highlight-cold {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.75) 0%, rgba(219, 234, 254, 0.85) 100%);
          border-color: #60a5fa;
        }

        .stat-card.highlight-cold .stat-label {
          color: #1e40af;
        }

        .stat-card.highlight-cold .stat-value {
          color: #1d4ed8;
        }

        .stat-card.highlight-cold .stat-detail {
          color: #1e40af;
        }

        /* 暗色模式高亮卡片适配 */
        [data-theme="dark"] .stat-card.highlight-warm,
        [data-theme="high-contrast"] .stat-card.highlight-warm {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(180, 83, 9, 0.26) 100%);
          border-color: rgba(245, 158, 11, 0.5);
        }

        [data-theme="dark"] .stat-card.highlight-warm .stat-label,
        [data-theme="high-contrast"] .stat-card.highlight-warm .stat-label {
          color: #fdba74;
        }

        [data-theme="dark"] .stat-card.highlight-warm .stat-value,
        [data-theme="high-contrast"] .stat-card.highlight-warm .stat-value {
          color: #fbbf24;
        }

        [data-theme="dark"] .stat-card.highlight-warm .stat-detail,
        [data-theme="high-contrast"] .stat-card.highlight-warm .stat-detail {
          color: #fed7aa;
        }

        [data-theme="dark"] .stat-card.highlight-cold,
        [data-theme="high-contrast"] .stat-card.highlight-cold {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.16) 0%, rgba(30, 58, 138, 0.28) 100%);
          border-color: rgba(96, 165, 250, 0.5);
        }

        [data-theme="dark"] .stat-card.highlight-cold .stat-label,
        [data-theme="high-contrast"] .stat-card.highlight-cold .stat-label {
          color: #93c5fd;
        }

        [data-theme="dark"] .stat-card.highlight-cold .stat-value,
        [data-theme="high-contrast"] .stat-card.highlight-cold .stat-value {
          color: #60a5fa;
        }

        [data-theme="dark"] .stat-card.highlight-cold .stat-detail,
        [data-theme="high-contrast"] .stat-card.highlight-cold .stat-detail {
          color: #bfdbfe;
        }

        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .stat-card.highlight-warm {
            background: linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(180, 83, 9, 0.26) 100%);
            border-color: rgba(245, 158, 11, 0.5);
          }

          :root:not([data-theme="light"]) .stat-card.highlight-warm .stat-label {
            color: #fdba74;
          }

          :root:not([data-theme="light"]) .stat-card.highlight-warm .stat-value {
            color: #fbbf24;
          }

          :root:not([data-theme="light"]) .stat-card.highlight-warm .stat-detail {
            color: #fed7aa;
          }

          :root:not([data-theme="light"]) .stat-card.highlight-cold {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.16) 0%, rgba(30, 58, 138, 0.28) 100%);
            border-color: rgba(96, 165, 250, 0.5);
          }

          :root:not([data-theme="light"]) .stat-card.highlight-cold .stat-label {
            color: #93c5fd;
          }

          :root:not([data-theme="light"]) .stat-card.highlight-cold .stat-value {
            color: #60a5fa;
          }

          :root:not([data-theme="light"]) .stat-card.highlight-cold .stat-detail {
            color: #bfdbfe;
          }
        }

        @media (max-width: 768px) {
          .special-db-layout {
            flex-direction: column;
            height: auto;
          }

          .special-db-sidebar {
            width: 100%;
          }

          .tree-nav {
            max-height: 300px;
          }

          .tables-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{j as SpecialDatabase};