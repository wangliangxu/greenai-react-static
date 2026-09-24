import{j as e,r as x}from"./react-vendor-DZdvhec1.js";import{b as K,u as oe,a as I,c as Ce}from"./query-vendor-CyHNoBeC.js";import{k as M,l as B}from"./index-CO7uzfl_.js";import{A as ke}from"./AdminSidebar-pC8Gwqed.js";import{A as Se,a as le,T as E}from"./AdminToolbar-CJGy2wW-.js";import"./ToolbarSelect-CkkfYHLH.js";import{A as $e}from"./AdminPageLayout-C-3xdruj.js";/* empty css                        */import{V as Ae,bd as Y,az as Te,aV as ze,cn as Le,a9 as Re,w as O,x as Ue}from"./ui-vendor-DNckc4hb.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./router-vendor-BF2jFopG.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./useResizableSidebar-D2sNFezQ.js";function W(a){const d=a==="station"?"/api/admin/meteostat/station-statistics":`/api/admin/meteostat/${a}-statistics`;return K({queryKey:["admin","meteostat",`${a}-statistics`],queryFn:()=>M.get(d).then(t=>t.data)})}const r=({label:a,value:d,highlight:t,detail:s})=>{const l=d??"N/A";return e.jsxs("div",{className:`stat-card ${t?`highlight-${t}`:""}`,children:[e.jsx("div",{className:"stat-label",children:a}),e.jsx("div",{className:"stat-value",children:typeof l=="number"?l.toLocaleString():l}),s&&e.jsx("div",{className:"stat-detail",children:s})]})},N=({title:a,icon:d,children:t,gridCols:s})=>e.jsxs("div",{className:"stats-section",children:[e.jsxs("h4",{children:[d&&`${d} `,a]}),e.jsx("div",{className:"stats-grid",style:s?{gridTemplateColumns:`repeat(${s}, 1fr)`}:void 0,children:t})]}),R=({region:a,icon:d,timeLabel:t="year"})=>{if(!a||a.station_count===0)return e.jsxs("div",{className:"stats-section",children:[e.jsxs("h4",{children:[d," ",a?.name||"区域"]}),e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无数据"})})]});let s,l,p,h;switch(t){case"period":s="最早参考期",l="最新参考期",p=a.earliest_period,h=a.latest_period;break;case"time":s="最早时间",l="最新时间",p=a.earliest_time,h=a.latest_time;break;case"date":s="最早日期",l="最新日期",p=a.earliest_date,h=a.latest_date;break;default:s="开始年份",l="结束年份",p=a.earliest_year,h=a.latest_year}return e.jsxs("div",{className:"stats-section",children:[e.jsxs("h4",{children:[d," ",a.name]}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(r,{label:"站点数量",value:a.station_count}),e.jsx(r,{label:"记录数",value:a.record_count}),e.jsx(r,{label:s,value:p}),e.jsx(r,{label:l,value:h})]}),a.valid_elements&&a.valid_elements.length>0&&e.jsxs("div",{style:{marginTop:"0.75rem",padding:"0.5rem 0.75rem",background:"var(--cg-bg)",border:"1px solid var(--cg-border)",borderRadius:"0.375rem",fontSize:"0.875rem",color:"var(--cg-text)"},children:[e.jsx("strong",{children:"有效观测要素："}),e.jsx("span",{style:{marginLeft:"0.5rem",color:"var(--cg-text-muted)"},children:a.valid_elements.join(", ")})]})]})},De=()=>{const{data:a,isLoading:d}=W("daily");if(d)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载统计信息中..."})});if(!a?.statistics)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无统计信息"})});const t=a.statistics;return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"基本信息",icon:"📊",children:[e.jsx(r,{label:"气象站数量",value:t.basic?.station_count}),e.jsx(r,{label:"总记录数",value:t.basic?.total_records}),e.jsx(r,{label:"最早日期",value:t.basic?.earliest_date}),e.jsx(r,{label:"最新日期",value:t.basic?.latest_date})]}),e.jsxs(N,{title:"温度统计 (°C)",icon:"🌡️",children:[e.jsx(r,{label:"最低平均温度",value:t.temperature?.min_avg}),e.jsx(r,{label:"最高平均温度",value:t.temperature?.max_avg}),e.jsx(r,{label:"平均温度",value:t.temperature?.avg_avg}),e.jsx(r,{label:"历史最低温度",value:t.temperature?.min_min,highlight:"cold"}),e.jsx(r,{label:"历史最高温度",value:t.temperature?.max_max,highlight:"warm"})]}),e.jsxs(N,{title:"降水统计 (mm)",icon:"🌧️",children:[e.jsx(r,{label:"最小降水量",value:t.precipitation?.min}),e.jsx(r,{label:"最大降水量",value:t.precipitation?.max}),e.jsx(r,{label:"平均降水量",value:t.precipitation?.avg}),e.jsx(r,{label:"降雨天数",value:t.precipitation?.rainy_days})]}),e.jsxs(N,{title:"风速统计 (km/h)",icon:"💨",children:[e.jsx(r,{label:"最小风速",value:t.wind?.min}),e.jsx(r,{label:"最大风速",value:t.wind?.max}),e.jsx(r,{label:"平均风速",value:t.wind?.avg})]}),e.jsxs(N,{title:"气压统计 (hPa)",icon:"🔘",children:[e.jsx(r,{label:"最小气压",value:t.pressure?.min}),e.jsx(r,{label:"最大气压",value:t.pressure?.max}),e.jsx(r,{label:"平均气压",value:t.pressure?.avg})]}),t.extremes&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🏆 极值记录"}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(r,{label:"平均气温最高站点",value:t.extremes.hottest_station?.station_id,highlight:"warm",detail:`平均 ${t.extremes.hottest_station?.avg_temp??"N/A"}°C`}),e.jsx(r,{label:"平均气温最低站点",value:t.extremes.coldest_station?.station_id,highlight:"cold",detail:`平均 ${t.extremes.coldest_station?.avg_temp??"N/A"}°C`}),e.jsx(r,{label:"历史最高温度",value:`${t.extremes.max_temperature_record?.temperature??"N/A"}°C`,highlight:"warm",detail:`${t.extremes.max_temperature_record?.date||"N/A"} · ${t.extremes.max_temperature_record?.station_id||"N/A"}`}),e.jsx(r,{label:"历史最低温度",value:`${t.extremes.min_temperature_record?.temperature??"N/A"}°C`,highlight:"cold",detail:`${t.extremes.min_temperature_record?.date||"N/A"} · ${t.extremes.min_temperature_record?.station_id||"N/A"}`})]})]}),e.jsx(R,{region:t.shanghai,icon:"📍",timeLabel:"date"}),e.jsx(R,{region:t.china_cities,icon:"🇨🇳",timeLabel:"date"}),e.jsx(R,{region:t.world_cities,icon:"🌍",timeLabel:"date"}),t.by_station&&t.by_station.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📍 按站点统计"}),e.jsx("div",{className:"station-stats-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"站点ID"}),e.jsx("th",{children:"记录数"}),e.jsx("th",{children:"最早日期"}),e.jsx("th",{children:"最新日期"}),e.jsx("th",{children:"温度范围"})]})}),e.jsx("tbody",{children:t.by_station.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.station_id}),e.jsx("td",{children:s.record_count?.toLocaleString()}),e.jsx("td",{children:s.earliest_date||"N/A"}),e.jsx("td",{children:s.latest_date||"N/A"}),e.jsxs("td",{children:[s.temperature?.min??"N/A","°C ~ ",s.temperature?.max??"N/A","°C (均",s.temperature?.avg??"N/A","°C)"]})]},s.station_id))})]})})]})]})},Me=()=>{const{data:a,isLoading:d}=W("hourly");if(d)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载逐小时统计信息中..."})});const t=a?.statistics||{};return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"基本信息",icon:"📊",children:[e.jsx(r,{label:"气象站数量",value:t.basic?.station_count}),e.jsx(r,{label:"总记录数",value:t.basic?.total_records}),e.jsx(r,{label:"最早时间",value:t.basic?.earliest_time}),e.jsx(r,{label:"最新时间",value:t.basic?.latest_time})]}),e.jsxs(N,{title:"温度统计 (°C)",icon:"🌡️",children:[e.jsx(r,{label:"最低温度",value:t.temperature?.min}),e.jsx(r,{label:"最高温度",value:t.temperature?.max}),e.jsx(r,{label:"平均温度",value:t.temperature?.avg?.toFixed(1)})]}),e.jsxs(N,{title:"湿度统计 (%)",icon:"💧",children:[e.jsx(r,{label:"最低湿度",value:t.humidity?.min}),e.jsx(r,{label:"最高湿度",value:t.humidity?.max}),e.jsx(r,{label:"平均湿度",value:t.humidity?.avg?.toFixed(1)})]}),e.jsxs(N,{title:"降水统计 (mm)",icon:"🌧️",children:[e.jsx(r,{label:"最大小时降水",value:t.precipitation?.max}),e.jsx(r,{label:"平均降水",value:t.precipitation?.avg?.toFixed(2)}),e.jsx(r,{label:"有降水小时数",value:t.precipitation?.rainy_hours})]}),e.jsxs(N,{title:"风速统计 (km/h)",icon:"💨",children:[e.jsx(r,{label:"最小风速",value:t.wind?.min}),e.jsx(r,{label:"最大风速",value:t.wind?.max}),e.jsx(r,{label:"平均风速",value:t.wind?.avg?.toFixed(1)}),e.jsx(r,{label:"最大阵风",value:t.wind?.max_gust})]}),e.jsxs(N,{title:"气压统计 (hPa)",icon:"🔘",children:[e.jsx(r,{label:"最低气压",value:t.pressure?.min}),e.jsx(r,{label:"最高气压",value:t.pressure?.max}),e.jsx(r,{label:"平均气压",value:t.pressure?.avg?.toFixed(1)})]}),e.jsx(R,{region:t.shanghai,icon:"📍",timeLabel:"time"}),e.jsx(R,{region:t.china_cities,icon:"🇨🇳",timeLabel:"time"}),e.jsx(R,{region:t.world_cities,icon:"🌍",timeLabel:"time"}),t.by_station&&t.by_station.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📍 按站点统计"}),e.jsx("div",{className:"station-stats-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"站点ID"}),e.jsx("th",{children:"记录数"}),e.jsx("th",{children:"最早时间"}),e.jsx("th",{children:"最新时间"}),e.jsx("th",{children:"温度范围"})]})}),e.jsx("tbody",{children:t.by_station.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.station_id}),e.jsx("td",{children:s.record_count?.toLocaleString()}),e.jsx("td",{children:s.earliest_time||"N/A"}),e.jsx("td",{children:s.latest_time||"N/A"}),e.jsxs("td",{children:[s.temperature?.min??"N/A","°C ~ ",s.temperature?.max??"N/A","°C"]})]},s.station_id))})]})})]})]})},Ee=()=>{const{data:a,isLoading:d}=W("monthly");if(d)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载月度统计信息中..."})});const t=a?.statistics||{};return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"基本信息",icon:"📊",children:[e.jsx(r,{label:"气象站数量",value:t.basic?.station_count}),e.jsx(r,{label:"总记录数",value:t.basic?.total_records}),e.jsx(r,{label:"最早日期",value:t.basic?.earliest_date}),e.jsx(r,{label:"最新日期",value:t.basic?.latest_date})]}),t.elements&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🌡️ 要素统计"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"#fef3c7",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"温度 (°C)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#78350f"},children:[e.jsxs("div",{children:["最低: ",t.elements.temperature?.tmin_min??"N/A"]}),e.jsxs("div",{children:["最高: ",t.elements.temperature?.tmax_max??"N/A"]}),e.jsxs("div",{children:["平均: ",t.elements.temperature?.avg??"N/A"]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"降水 (mm)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#1e40af"},children:[e.jsxs("div",{children:["最小: ",t.elements.precipitation?.min??"N/A"]}),e.jsxs("div",{children:["最大: ",t.elements.precipitation?.max??"N/A"]}),e.jsxs("div",{children:["平均: ",t.elements.precipitation?.avg??"N/A"]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#dcfce7",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"风速 (km/h)"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#166534"},children:e.jsxs("div",{children:["平均: ",t.elements.wind?.avg??"N/A"]})})]}),e.jsxs("div",{style:{padding:"1rem",background:"#e0e7ff",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"气压 (hPa)"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#3730a3"},children:e.jsxs("div",{children:["平均: ",t.elements.pressure?.avg??"N/A"]})})]})]})]}),e.jsx(R,{region:t.shanghai,icon:"📍",timeLabel:"date"}),e.jsx(R,{region:t.china_cities,icon:"🇨🇳",timeLabel:"date"}),e.jsx(R,{region:t.world_cities,icon:"🌍",timeLabel:"date"}),t.by_station&&t.by_station.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📍 按站点统计"}),e.jsx("div",{className:"station-stats-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"站点ID"}),e.jsx("th",{children:"记录数"}),e.jsx("th",{children:"最早日期"}),e.jsx("th",{children:"最新日期"}),e.jsx("th",{children:"温度范围"})]})}),e.jsx("tbody",{children:t.by_station.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.station_id}),e.jsx("td",{children:s.record_count?.toLocaleString()}),e.jsx("td",{children:s.earliest_date||"N/A"}),e.jsx("td",{children:s.latest_date||"N/A"}),e.jsxs("td",{children:[s.temperature?.min??"N/A","°C ~ ",s.temperature?.max??"N/A","°C (均",s.temperature?.avg??"N/A","°C)"]})]},s.station_id))})]})})]})]})},Oe=()=>{const{data:a,isLoading:d}=W("annual");if(d)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载年度统计信息中..."})});const t=a?.statistics||{};return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"基本统计",icon:"📊",children:[e.jsx(r,{label:"气象站数量",value:t.basic?.station_count}),e.jsx(r,{label:"总记录数",value:t.basic?.total_records}),e.jsx(r,{label:"最早年份",value:t.basic?.earliest_year}),e.jsx(r,{label:"最新年份",value:t.basic?.latest_year})]}),e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🌡️ 要素统计"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"#fef3c7",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"温度 (°C)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#78350f"},children:[e.jsxs("div",{children:["最低: ",t.elements?.temperature?.tmin_min??"N/A"]}),e.jsxs("div",{children:["最高: ",t.elements?.temperature?.tmax_max??"N/A"]}),e.jsxs("div",{children:["平均: ",t.elements?.temperature?.tavg_avg??"N/A"]}),t.elements?.temperature?.txmn_min&&e.jsxs("div",{children:["极端最低: ",t.elements.temperature.txmn_min]}),t.elements?.temperature?.txmx_max&&e.jsxs("div",{children:["极端最高: ",t.elements.temperature.txmx_max]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"年降水 (mm)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#1e40af"},children:[e.jsxs("div",{children:["最小: ",t.elements?.precipitation?.min??"N/A"]}),e.jsxs("div",{children:["最大: ",t.elements?.precipitation?.max??"N/A"]}),e.jsxs("div",{children:["平均: ",t.elements?.precipitation?.avg??"N/A"]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#e0e7ff",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"其他要素"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#3730a3"},children:[e.jsxs("div",{children:["风速平均: ",t.elements?.other?.wspd_avg??"N/A"," km/h"]}),e.jsxs("div",{children:["气压平均: ",t.elements?.other?.pres_avg??"N/A"," hPa"]})]})]})]})]}),e.jsx(R,{region:t.shanghai,icon:"📍",timeLabel:"year"}),e.jsx(R,{region:t.china_cities,icon:"🇨🇳",timeLabel:"year"}),e.jsx(R,{region:t.world_cities,icon:"🌍",timeLabel:"year"}),t.by_station&&t.by_station.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📍 按站点统计"}),e.jsx("div",{className:"station-stats-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"站点ID"}),e.jsx("th",{children:"记录数"}),e.jsx("th",{children:"最早年份"}),e.jsx("th",{children:"最新年份"}),e.jsx("th",{children:"温度范围"})]})}),e.jsx("tbody",{children:t.by_station.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.station_id}),e.jsx("td",{children:s.record_count?.toLocaleString()}),e.jsx("td",{children:s.earliest_year||"N/A"}),e.jsx("td",{children:s.latest_year||"N/A"}),e.jsxs("td",{children:[s.temperature?.min??"N/A","°C ~ ",s.temperature?.max??"N/A","°C (均",s.temperature?.avg??"N/A","°C)"]})]},s.station_id))})]})})]})]})},Pe=()=>{const{data:a,isLoading:d}=W("normal");if(d)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载气候常态统计信息中..."})});const t=a?.statistics||{};return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"基本统计",icon:"📊",children:[e.jsx(r,{label:"气象站数量",value:t.basic?.station_count}),e.jsx(r,{label:"总记录数",value:t.basic?.total_records})]}),t.basic?.periods&&t.basic.periods.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📅 参考期分布"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:t.basic.periods.map(s=>e.jsxs("div",{style:{padding:"0.25rem 0.75rem",background:"#e0f2fe",borderRadius:"1rem",fontSize:"0.875rem",color:"#0369a1"},children:[s.period," (",s.station_count,"站/",s.record_count,"条)"]},s.period))})]}),e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🌡️ 要素统计"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"#fef3c7",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"温度 (°C)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#78350f"},children:[e.jsxs("div",{children:["月均最低: ",t.elements?.temperature?.tmin_min??"N/A"]}),e.jsxs("div",{children:["月均最高: ",t.elements?.temperature?.tmax_max??"N/A"]}),e.jsxs("div",{children:["月均温度: ",t.elements?.temperature?.tavg_avg??"N/A"]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#dbeafe",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"月降水 (mm)"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#1e40af"},children:[e.jsxs("div",{children:["最小: ",t.elements?.precipitation?.min??"N/A"]}),e.jsxs("div",{children:["最大: ",t.elements?.precipitation?.max??"N/A"]}),e.jsxs("div",{children:["平均: ",t.elements?.precipitation?.avg??"N/A"]})]})]}),e.jsxs("div",{style:{padding:"1rem",background:"#e0e7ff",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"其他要素"}),e.jsxs("div",{style:{fontSize:"0.875rem",color:"#3730a3"},children:[e.jsxs("div",{children:["风速平均: ",t.elements?.other?.wspd_avg??"N/A"," km/h"]}),e.jsxs("div",{children:["气压平均: ",t.elements?.other?.pres_avg??"N/A"," hPa"]})]})]})]})]}),e.jsx(R,{region:t.shanghai,icon:"📍",timeLabel:"period"}),e.jsx(R,{region:t.china_cities,icon:"🇨🇳",timeLabel:"period"}),e.jsx(R,{region:t.world_cities,icon:"🌍",timeLabel:"period"})]})},Fe=({tableRowCount:a})=>{const{data:d,isLoading:t}=W("station");if(t)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载站点统计信息中..."})});const s=d?.total_stations||a||0,l=d?.countries||[],p=d?.top_countries||[],h=d?.china_provinces||[],m=d?.china_cn_stats||{total:0,with_cn_name:0};return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"全球站点概览",icon:"📊",children:[e.jsx(r,{label:"总站点数",value:s}),e.jsx(r,{label:"国家/地区数",value:l.length}),m.total>0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"中国站点",value:m.total}),e.jsx(r,{label:"已本地化",value:`${m.with_cn_name}/${m.total}`})]})]}),p.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🌍 站点分布 Top 20"}),e.jsx("div",{className:"country-list",children:p.map((b,i)=>e.jsxs("div",{className:"country-item",children:[e.jsxs("span",{className:"country-rank",children:["#",i+1]}),e.jsx("span",{className:"country-name",children:b.country}),e.jsxs("span",{className:"country-count",children:[b.count.toLocaleString()," 站"]})]},i))})]}),h.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🇨🇳 中国省份分布"}),e.jsx("div",{className:"country-list",children:h.map((b,i)=>e.jsxs("div",{className:"country-item",children:[e.jsxs("span",{className:"country-rank",children:["#",i+1]}),e.jsx("span",{className:"country-name",children:b.province}),e.jsxs("span",{className:"country-count",children:[b.count.toLocaleString()," 站"]})]},i))})]})]})};function Be(){return K({queryKey:["admin","shanghai-weather","daily-statistics"],queryFn:()=>M.get("/api/admin/shanghai-weather/daily-statistics").then(a=>a.data)})}const We=()=>{const{data:a,isLoading:d,error:t,refetch:s}=Be();if(d)return e.jsxs("div",{className:"empty-state",style:{padding:"3rem 1rem"},children:[e.jsx("div",{className:"spinner",style:{width:"32px",height:"32px",border:"3px solid rgba(59, 130, 246, 0.2)",borderTopColor:"var(--admin-primary, #3b82f6)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 1rem"}}),e.jsx("p",{style:{color:"var(--cg-text-muted)"},children:"正在统计上海逐日气象数据 (22,646 条记录)..."})]});if(t||!a?.success)return e.jsxs("div",{className:"empty-state",style:{padding:"3rem 1rem"},children:[e.jsx("p",{style:{color:"var(--admin-danger, #ef4444)",marginBottom:"1rem"},children:"获取上海逐日气象统计失败"}),e.jsx("button",{className:"btn-secondary",onClick:()=>s(),style:{padding:"0.4rem 1rem",borderRadius:"4px",cursor:"pointer"},children:"重试"})]});const{station:l,basic:p,temperature:h,precipitation:m,wind:b,pressure:i,humidity_evaporation:u,extremes:n,decades:v}=a;return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"台站与观测基础信息",icon:"🏢",children:[e.jsx(r,{label:"观测台站",value:l?.station_name||"上海徐家汇国家基准气候站",detail:`站号: ${l?.station_id||"58367"} · 海拔 ${l?.elevation||"4.0m"}`}),e.jsx(r,{label:"总观测天数",value:p?.total_records,detail:`跨度约 ${p?.years_covered||62} 年`}),e.jsx(r,{label:"观测起始日期",value:p?.earliest_date}),e.jsx(r,{label:"观测截止日期",value:p?.latest_date})]}),e.jsxs(N,{title:"气温要素统计 (°C)",icon:"🌡️",children:[e.jsx(r,{label:"年日均气温",value:h?.avg_tavg}),e.jsx(r,{label:"历史极端最高温",value:h?.max_tmax?`${h.max_tmax}°C`:"N/A",highlight:"warm",detail:n?.max_temp_record?.date?`发生于 ${n.max_temp_record.date}`:void 0}),e.jsx(r,{label:"历史极端最低温",value:h?.min_tmin?`${h.min_tmin}°C`:"N/A",highlight:"cold",detail:n?.min_temp_record?.date?`发生于 ${n.min_temp_record.date}`:void 0}),e.jsx(r,{label:"高温日数 (≥35°C)",value:h?.hot_days,detail:"年均约 10.3 天"}),e.jsx(r,{label:"酷暑日数 (≥37°C)",value:h?.severe_hot_days,detail:"历史罕见强热浪"}),e.jsx(r,{label:"冰冻日数 (≤0°C)",value:h?.freezing_days,detail:"冬季结冰严寒日"})]}),e.jsxs(N,{title:"降水要素统计 (mm)",icon:"🌧️",children:[e.jsx(r,{label:"极端单日最大降水",value:m?.max_prcp?`${m.max_prcp} mm`:"N/A",highlight:"warm",detail:n?.max_prcp_record?.date?`发生于 ${n.max_prcp_record.date}`:void 0}),e.jsx(r,{label:"日平均降水量",value:m?.avg_prcp?`${m.avg_prcp} mm`:"N/A"}),e.jsx(r,{label:"降水总天数",value:m?.rainy_days,detail:`降水频率 ${m?.rainy_day_pct??"N/A"}%`}),e.jsx(r,{label:"暴雨日数 (≥50mm)",value:m?.heavy_rain_days,detail:"强降水事件总数"}),e.jsx(r,{label:"大暴雨日数 (≥100mm)",value:m?.storm_rain_days,detail:"极端台风暴雨事件"})]}),e.jsxs(N,{title:"风速与气压统计",icon:"💨",children:[e.jsx(r,{label:"日平均风速",value:b?.avg_wspd?`${b.avg_wspd} m/s`:"N/A"}),e.jsx(r,{label:"最大日均风速",value:b?.max_wmax?`${b.max_wmax} m/s`:"N/A"}),e.jsx(r,{label:"极大瞬时风速",value:b?.max_gust?`${b.max_gust} m/s`:"N/A",detail:n?.max_gust_record?.date?`发生于 ${n.max_gust_record.date}`:void 0}),e.jsx(r,{label:"平均本站气压",value:i?.avg_pres?`${i.avg_pres} hPa`:"N/A"}),e.jsx(r,{label:"极端最低气压",value:i?.min_pres?`${i.min_pres} hPa`:"N/A",detail:"强台风过境低压"}),e.jsx(r,{label:"极端最高气压",value:i?.max_pres?`${i.max_pres} hPa`:"N/A",detail:"冬季冷高压控制"})]}),e.jsxs(N,{title:"湿度与蒸发统计",icon:"💧",children:[e.jsx(r,{label:"平均相对湿度",value:u?.avg_rhum?`${u.avg_rhum}%`:"N/A"}),e.jsx(r,{label:"历史最小相对湿度",value:u?.min_rhum?`${u.min_rhum}%`:"N/A",detail:"极干燥天气记录"}),e.jsx(r,{label:"小型蒸发皿日均蒸发",value:u?.avg_evap?`${u.avg_evap} mm`:"N/A"})]}),n&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"🏆 历史气象极值事件"}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(r,{label:"历史极端最高气温",value:n.max_temp_record?.temperature?`${n.max_temp_record.temperature}°C`:"N/A",highlight:"warm",detail:`${n.max_temp_record?.date||""} · ${n.max_temp_record?.description||"热浪峰值"}`}),e.jsx(r,{label:"历史极端最低气温",value:n.min_temp_record?.temperature?`${n.min_temp_record.temperature}°C`:"N/A",highlight:"cold",detail:`${n.min_temp_record?.date||""} · ${n.min_temp_record?.description||"极寒冰冻"}`}),e.jsx(r,{label:"单日特大暴雨记录",value:n.max_prcp_record?.precipitation?`${n.max_prcp_record.precipitation} mm`:"N/A",highlight:"warm",detail:`${n.max_prcp_record?.date||""} · ${n.max_prcp_record?.description||"暴雨记录"}`}),e.jsx(r,{label:"台风极大瞬时风速",value:n.max_gust_record?.gust?`${n.max_gust_record.gust} m/s`:"N/A",detail:`${n.max_gust_record?.date||""} · ${n.max_gust_record?.description||"狂风阵风"}`})]})]}),v&&v.length>0&&e.jsxs("div",{className:"stats-section",children:[e.jsx("h4",{children:"📈 气候增暖演变特征（按年代统计）"}),e.jsx("div",{className:"table-wrapper",style:{marginTop:"0.75rem"},children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"年代"}),e.jsx("th",{children:"记录天数"}),e.jsx("th",{children:"平均气温 (°C)"}),e.jsx("th",{children:"平均最高气温 (°C)"}),e.jsx("th",{children:"平均最低气温 (°C)"}),e.jsx("th",{children:"高温日数 (≥35°C)"}),e.jsx("th",{children:"暴雨日数 (≥50mm)"}),e.jsx("th",{children:"年代累计降水 (mm)"})]})}),e.jsx("tbody",{children:v.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:c.decade})}),e.jsx("td",{children:c.days?.toLocaleString()}),e.jsx("td",{style:{color:c.avg_temp>=17?"var(--admin-warning, #f59e0b)":"var(--cg-text)",fontWeight:600},children:c.avg_temp??"N/A"}),e.jsx("td",{children:c.avg_tmax??"N/A"}),e.jsx("td",{children:c.avg_tmin??"N/A"}),e.jsx("td",{style:{color:c.hot_days>100?"var(--admin-danger, #ef4444)":"var(--cg-text)",fontWeight:c.hot_days>100?600:"normal"},children:c.hot_days}),e.jsx("td",{children:c.heavy_rain_days}),e.jsx("td",{children:c.total_prcp?.toLocaleString()})]},c.decade))})]})})]})]})};function qe(a,d){return K({queryKey:["admin","databases",a,"tables",d,"statistics"],queryFn:()=>M.get(`/api/admin/databases/${a}/tables/${d}/statistics`).then(t=>t.data),enabled:!!a&&!!d})}const Ie=({dbName:a,tableName:d,tableInfo:t})=>{const{data:s,isLoading:l}=qe(a,d),p=s?.basic?.row_count??t?.row_count??0,h=s?.basic?.column_count??t?.column_count??0;return e.jsxs("div",{className:"statistics-view",children:[e.jsxs(N,{title:"数据表基础概览",icon:"📊",children:[e.jsx(r,{label:"总记录行数",value:p}),e.jsx(r,{label:"总字段列数",value:h}),s?.temporal&&Object.entries(s.temporal).map(([m,b])=>e.jsx(r,{label:`时间跨度 (${m})`,value:b.min&&b.max?`${b.min} ~ ${b.max}`:"无",detail:"根据时间字段自动探测"},m))]}),l&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"var(--cg-text-muted)",margin:"1rem 0"},children:[e.jsx("div",{className:"spinner",style:{width:"16px",height:"16px",border:"2px solid rgba(59, 130, 246, 0.2)",borderTopColor:"var(--admin-primary, #3b82f6)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),e.jsx("span",{children:"正在计算列分布与极值统计..."})]}),s?.columns&&s.columns.length>0&&e.jsxs("div",{className:"stats-section",style:{marginTop:"1.5rem"},children:[e.jsx("h4",{children:"🔢 数值列聚合指标"}),e.jsx("div",{className:"table-wrapper",style:{marginTop:"0.75rem"},children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字段名称"}),e.jsx("th",{children:"最小值 (Min)"}),e.jsx("th",{children:"最大值 (Max)"}),e.jsx("th",{children:"平均值 (Avg)"}),e.jsx("th",{children:"有效记录数"}),e.jsx("th",{children:"缺失记录数"})]})}),e.jsx("tbody",{children:s.columns.map(m=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:m.column_name})}),e.jsx("td",{children:m.min!==null?m.min.toLocaleString():"-"}),e.jsx("td",{children:m.max!==null?m.max.toLocaleString():"-"}),e.jsx("td",{children:m.avg!==null?m.avg.toLocaleString():"-"}),e.jsx("td",{children:m.non_null.toLocaleString()}),e.jsx("td",{style:{color:m.null_count>0?"var(--admin-warning, #f59e0b)":"var(--cg-text)"},children:m.null_count.toLocaleString()})]},m.column_name))})]})})]})]})},Ke=({isOpen:a,onClose:d})=>{const[t,s]=x.useState({shanghai:!1,chinaCities:!1,worldCities:!1}),[l,p]=x.useState({current:0,total:0,message:"",isUpdating:!1,isComplete:!1});if(!a)return null;const h=async()=>{if(Object.values(t).filter(Boolean).length===0){alert("请至少选择一个更新选项");return}if(!confirm("确定要更新选中的数据吗？这可能需要较长时间。"))return;const u={shanghai:t.shanghai,china_cities:t.chinaCities,world_cities:t.worldCities,force_full:!1};p({current:0,total:100,message:"准备开始更新...",isUpdating:!0,isComplete:!1});try{const v=(await B("/api/admin/meteostat/update-daily",{method:"POST",body:JSON.stringify(u)},{includeJsonContentType:!0})).body?.getReader(),c=new TextDecoder;if(!v)throw new Error("No reader available");let y="";for(;;){const{done:$,value:A}=await v.read();if($)break;y+=c.decode(A,{stream:!0});const U=y.split(`
`);y=U.pop()||"";for(const z of U)if(z.trim())try{const j=JSON.parse(z);j.type==="start"?p(g=>({...g,total:j.total??g.total,message:j.message??g.message})):j.type==="progress"?p(g=>({...g,current:j.current??g.current,total:j.total??g.total,message:j.message??g.message})):j.type==="complete"?p(g=>({...g,isComplete:!0,message:j.message??"更新完成",stats:j.statistics})):j.type==="error"&&(console.error("Update error:",j.message),p(g=>({...g,error:j.message??"更新失败"})))}catch(j){console.error("Error parsing JSON chunk",j)}}}catch(n){const v=n instanceof Error?n.message:"未知错误";p(c=>({...c,error:v,isUpdating:!1})),alert(`更新出错: ${v}`)}finally{l.isComplete||p(n=>({...n,isUpdating:!1}))}},m=()=>{l.isComplete&&(s({shanghai:!1,chinaCities:!1,worldCities:!1}),p({current:0,total:0,message:"",isUpdating:!1,isComplete:!1})),d()},b=l.total>0?Math.round(l.current/l.total*100):0;return e.jsx("div",{className:"update-dialog-overlay",onClick:()=>!l.isUpdating&&m(),children:e.jsxs("div",{className:"update-dialog",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"update-dialog-header",children:[e.jsx("h3",{children:"更新逐日数据"}),e.jsx("button",{className:"close-btn",onClick:m,disabled:l.isUpdating&&!l.isComplete,children:"×"})]}),e.jsx("div",{className:"update-dialog-content",children:!l.isUpdating&&!l.isComplete?e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"var(--cg-text-muted)"},children:"请选择要更新的数据（可多选）。将更新所有有效年份的数据，可能需要较长时间："}),e.jsxs("div",{className:"update-options",children:[e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.shanghai,onChange:i=>s({...t,shanghai:i.target.checked})}),e.jsx("span",{children:"更新上海数据（58367）"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.chinaCities,onChange:i=>s({...t,chinaCities:i.target.checked})}),e.jsx("span",{children:"更新中国主要城市"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.worldCities,onChange:i=>s({...t,worldCities:i.target.checked})}),e.jsx("span",{children:"更新世界主要城市"})]})]})]}):e.jsxs("div",{className:"progress-container",style:{padding:"20px 0"},children:[e.jsxs("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:l.message}),e.jsxs("span",{children:[b,"%"]})]}),e.jsx("div",{style:{height:"10px",background:"var(--cg-border)",borderRadius:"5px",overflow:"hidden"},children:e.jsx("div",{style:{height:"100%",background:l.error?"#ef4444":l.isComplete?"#22c55e":"#3b82f6",width:`${b}%`,transition:"width 0.3s ease"}})}),l.isComplete&&e.jsx("div",{style:{marginTop:"15px",padding:"10px",background:"var(--cg-bg)",borderRadius:"4px",color:"#166534"},children:"✅ 更新完成！"}),l.error&&e.jsxs("div",{style:{marginTop:"15px",padding:"10px",background:"var(--cg-bg)",borderRadius:"4px",color:"#991b1b"},children:["❌ ",l.error]})]})}),e.jsx("div",{className:"update-dialog-footer",children:!l.isUpdating&&!l.isComplete?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn btn-secondary",onClick:m,children:"取消"}),e.jsx("button",{className:"btn btn-primary",onClick:h,disabled:Object.values(t).every(i=>!i),children:"开始更新"})]}):e.jsx("button",{className:"btn btn-primary",onClick:m,disabled:!l.isComplete&&!l.error,children:l.isComplete?"完成":"关闭"})})]})})},Qe=({isOpen:a,onClose:d,onUpdate:t})=>{const[s,l]=x.useState("shanghai"),[p,h]=x.useState(""),[m,b]=x.useState(""),[i,u]=x.useState(null),[n,v]=x.useState(!1),[c,y]=x.useState(!1),[$,A]=x.useState(null);x.useEffect(()=>{a&&(A(null),U())},[a]),x.useEffect(()=>{A(null)},[s]);const U=async()=>{v(!0);try{const w=await(await B("/api/admin/city-settings")).json();u(w),w.china_cities&&w.china_cities.length>0&&h(w.china_cities[0].wmo_id);const C=Object.values(w.global_cities||{}).flat();C.length>0&&b(C[0])}catch(g){console.error("Failed to fetch city settings:",g)}finally{v(!1)}},z=async()=>{y(!0),A(null);try{const w=await B("/api/admin/meteostat/update-hourly",{method:"POST",body:JSON.stringify({shanghai:s==="shanghai",china_city_id:s==="china_city"?p:null,world_city_id:s==="world_city"?m:null})},{includeJsonContentType:!0}),C=await w.json();w.ok?(A({success:C.success,message:C.message}),C.success&&t&&t()):A({success:!1,message:C.detail||"更新失败"})}catch(g){A({success:!1,message:`请求失败: ${g}`})}finally{y(!1)}};if(!a)return null;const j=i?Object.values(i.global_cities||{}).flat():[];return e.jsx("div",{className:"update-dialog-overlay",onClick:()=>!c&&d(),children:e.jsxs("div",{className:"update-dialog",onClick:g=>g.stopPropagation(),children:[e.jsxs("div",{className:"update-dialog-header",children:[e.jsx("h3",{children:"更新逐小时数据"}),e.jsx("button",{className:"close-btn",onClick:d,disabled:c,children:"×"})]}),e.jsx("div",{className:"update-dialog-content",children:n?e.jsx("p",{children:"加载城市列表中..."}):e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"var(--cg-text-muted)"},children:"请选择要更新的数据（数据范围：2020年至今）："}),e.jsxs("div",{className:"update-options",children:[e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"radio",name:"updateMode",checked:s==="shanghai",onChange:()=>l("shanghai"),disabled:c}),e.jsx("span",{children:"更新上海数据 (58367)"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"radio",name:"updateMode",checked:s==="china_city",onChange:()=>l("china_city"),disabled:c}),e.jsx("span",{children:"更新指定中国城市"})]}),s==="china_city"&&i&&e.jsx("div",{style:{marginLeft:"2rem",marginTop:"0.5rem"},children:e.jsx("select",{value:p,onChange:g=>h(g.target.value),disabled:c,style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid var(--cg-border)"},children:i.china_cities.map(g=>e.jsxs("option",{value:g.wmo_id,children:[g.name_cn||g.name," (",g.wmo_id,")"]},g.wmo_id))})}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"radio",name:"updateMode",checked:s==="world_city",onChange:()=>l("world_city"),disabled:c}),e.jsx("span",{children:"更新指定世界城市"})]}),s==="world_city"&&e.jsx("div",{style:{marginLeft:"2rem",marginTop:"0.5rem"},children:e.jsx("select",{value:m,onChange:g=>b(g.target.value),disabled:c,style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid var(--cg-border)"},children:j.map(g=>{const w=i?.global_cities_details?.[g],C=w?.name_cn||w?.name||g;return e.jsxs("option",{value:g,children:[C," (",g,")"]},g)})})})]}),c&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem",border:"1px solid #bae6fd"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("div",{className:"spinner",style:{width:"16px",height:"16px",border:"2px solid #3b82f6",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),e.jsx("span",{style:{color:"#0369a1",fontWeight:500},children:"正在更新数据..."})]}),e.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--cg-text-muted)",margin:0},children:["正在下载 2020-",new Date().getFullYear()," 年的小时数据，请耐心等待"]}),e.jsx("div",{style:{width:"100%",height:"4px",background:"var(--cg-border)",borderRadius:"2px",marginTop:"0.5rem",overflow:"hidden"},children:e.jsx("div",{style:{width:"30%",height:"100%",background:"linear-gradient(90deg, #3b82f6, #60a5fa)",borderRadius:"2px",animation:"indeterminate 1.5s ease-in-out infinite"}})}),e.jsx("style",{children:`
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                    @keyframes indeterminate {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(400%); }
                    }
                  `})]}),$&&e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",borderRadius:"4px",backgroundColor:$.success?"#dcfce7":"#fee2e2",color:$.success?"#166534":"#991b1b"},children:$.message})]})}),e.jsxs("div",{className:"update-dialog-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:d,disabled:c,children:$?"关闭":"取消"}),!$&&e.jsx("button",{className:"btn btn-primary",onClick:z,disabled:c||n,children:c?"更新中...":"开始更新"})]})]})})},Je=({isOpen:a,onClose:d,monthlyStationCounts:t,onUpdate:s,isUpdating:l,progress:p})=>{const[h,m]=x.useState({shanghai:!1,chinaCities:!1,worldCities:!1});if(!a)return null;const b=()=>{const i=[];if(h.shanghai&&i.push("shanghai"),h.chinaCities&&i.push("china_cities"),h.worldCities&&i.push("world_cities"),i.length===0){alert("请至少选择一个更新选项");return}const u=t?.counts||{};let n=0;h.shanghai&&(n+=u.shanghai||1),h.chinaCities&&(n+=u.china_cities||0),h.worldCities&&(n+=u.world_cities||0),confirm(`确定要更新选中的月度数据吗？
共 ${n} 个站点，这可能需要较长时间。

数据将进行增量更新（只更新新数据）。`)&&s(i,()=>{d(),m({shanghai:!1,chinaCities:!1,worldCities:!1})})};return e.jsx("div",{className:"update-dialog-overlay",onClick:()=>!l&&d(),children:e.jsxs("div",{className:"update-dialog",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"update-dialog-header",children:[e.jsx("h3",{children:"更新月度数据"}),e.jsx("button",{className:"close-btn",onClick:d,disabled:l,children:"×"})]}),e.jsxs("div",{className:"update-dialog-content",children:[e.jsx("p",{style:{marginBottom:"1rem",color:"var(--cg-text-muted)"},children:"请选择要更新的数据（可多选）。数据将进行增量更新（只下载新数据）："}),e.jsxs("div",{className:"update-options",children:[e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:h.shanghai,onChange:i=>m({...h,shanghai:i.target.checked}),disabled:l}),e.jsxs("span",{children:["更新上海浦东数据（",t?.counts?.shanghai||1," 个站点）"]})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:h.chinaCities,onChange:i=>m({...h,chinaCities:i.target.checked}),disabled:l}),e.jsxs("span",{children:["更新中国主要城市（",t?.counts?.china_cities||0," 个站点）"]})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:h.worldCities,onChange:i=>m({...h,worldCities:i.target.checked}),disabled:l}),e.jsxs("span",{children:["更新世界主要城市（",t?.counts?.world_cities||0," 个站点）"]})]})]}),p&&e.jsxs("div",{className:"update-progress",style:{marginTop:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[e.jsx("span",{children:"更新进度"}),e.jsxs("span",{children:[p.current,"/",p.total]})]}),e.jsx("div",{style:{width:"100%",height:"8px",background:"var(--cg-border)",borderRadius:"4px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${p.total>0?p.current/p.total*100:0}%`,height:"100%",background:"#3b82f6",transition:"width 0.3s"}})}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"var(--cg-text-muted)"},children:p.message})]})]}),e.jsxs("div",{className:"update-dialog-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:d,disabled:l,children:"取消"}),e.jsx("button",{className:"btn btn-primary",onClick:b,disabled:l||Object.values(h).every(i=>!i),children:l?"更新中...":"开始更新"})]})]})})},Ve=({isOpen:a,onClose:d})=>{const[t,s]=x.useState({shanghai:!1,chinaCities:!1,worldCities:!1}),[l,p]=x.useState(!1),[h,m]=x.useState(null);if(!a)return null;const b=async()=>{if(!t.shanghai&&!t.chinaCities&&!t.worldCities){alert("请至少选择一个更新选项");return}if(confirm(`确定要聚合年度数据吗？

这将从月度数据计算所有年份的统计值。`)){p(!0),m(null);try{const i=await B("/api/admin/meteostat/update-annual",{method:"POST",body:JSON.stringify({shanghai:t.shanghai,china_cities:t.chinaCities,world_cities:t.worldCities})},{includeJsonContentType:!0}),u=await i.json();i.ok?m({success:!0,message:u.message||`成功聚合 ${u.result?.stations_updated||0} 个站点的年度数据`}):m({success:!1,message:u.detail||"聚合失败"})}catch(i){m({success:!1,message:`请求失败: ${i}`})}finally{p(!1)}}};return e.jsx("div",{className:"update-dialog-overlay",onClick:()=>!l&&d(),children:e.jsxs("div",{className:"update-dialog",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"update-dialog-header",children:[e.jsx("h3",{children:"更新年度数据"}),e.jsx("button",{className:"close-btn",onClick:d,disabled:l,children:"×"})]}),e.jsxs("div",{className:"update-dialog-content",children:[e.jsx("p",{style:{marginBottom:"1rem",color:"var(--cg-text-muted)"},children:"从月度数据更新生成年度统计（不从网络下载）："}),e.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem",border:"1px solid #bae6fd",fontSize:"0.875rem"},children:[e.jsx("strong",{children:"更新规则："}),e.jsxs("ul",{style:{margin:"0.5rem 0 0 1.5rem",padding:0},children:[e.jsx("li",{children:"年均温度 = 12个月平均温度的均值"}),e.jsx("li",{children:"年最低温 = 12个月最低中的最小值"}),e.jsx("li",{children:"年最高温 = 12个月最高中的最大值"}),e.jsx("li",{children:"年降水量 = 12个月降水量总和"})]})]}),e.jsxs("div",{className:"update-options",children:[e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.shanghai,onChange:i=>s({...t,shanghai:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新上海浦东数据"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.chinaCities,onChange:i=>s({...t,chinaCities:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新中国主要城市"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.worldCities,onChange:i=>s({...t,worldCities:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新世界主要城市"})]})]}),l&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem",border:"1px solid #bae6fd"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #3b82f6",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),e.jsx("span",{style:{color:"#0369a1",fontWeight:500},children:"正在更新年度数据..."})]}),e.jsx("style",{children:`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `})]}),h&&e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",borderRadius:"4px",backgroundColor:h.success?"#dcfce7":"#fee2e2",color:h.success?"#166534":"#991b1b"},children:h.message})]}),e.jsxs("div",{className:"update-dialog-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:d,disabled:l,children:"关闭"}),e.jsx("button",{className:"btn btn-primary",onClick:b,disabled:l||Object.values(t).every(i=>!i),children:l?"更新中...":"开始更新"})]})]})})},Ge=({isOpen:a,onClose:d})=>{const[t,s]=x.useState({shanghai:!1,chinaCities:!1,worldCities:!1}),[l,p]=x.useState(!1),[h,m]=x.useState(null);if(!a)return null;const b=async()=>{if(!t.shanghai&&!t.chinaCities&&!t.worldCities){alert("请至少选择一个更新选项");return}if(confirm(`确定要更新 Normals 数据吗？

Normals 是30年气候平均值，包含多个参考期的月度统计。`)){p(!0),m(null);try{const i=await B("/api/admin/meteostat/update-normal",{method:"POST",body:JSON.stringify({shanghai:t.shanghai,china_cities:t.chinaCities,world_cities:t.worldCities})},{includeJsonContentType:!0}),u=await i.json();i.ok?m({success:!0,message:u.message||`成功更新 ${u.result?.stations_updated||0} 个站点`}):m({success:!1,message:u.detail||"更新失败"})}catch(i){m({success:!1,message:`请求失败: ${i}`})}finally{p(!1)}}};return e.jsx("div",{className:"update-dialog-overlay",onClick:()=>!l&&d(),children:e.jsxs("div",{className:"update-dialog",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"update-dialog-header",children:[e.jsx("h3",{children:"更新 Normals 数据"}),e.jsx("button",{className:"close-btn",onClick:d,disabled:l,children:"×"})]}),e.jsxs("div",{className:"update-dialog-content",children:[e.jsx("p",{style:{marginBottom:"1rem",color:"var(--cg-text-muted)"},children:"从 Meteostat 下载30年气候平均值（Normals）数据："}),e.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem",border:"1px solid #bae6fd",fontSize:"0.875rem"},children:[e.jsx("strong",{children:"数据说明："}),e.jsxs("ul",{style:{margin:"0.5rem 0 0 1.5rem",padding:0},children:[e.jsx("li",{children:"包含多个参考期（如1961-1990, 1991-2020）"}),e.jsx("li",{children:"每个参考期有12条月度记录"}),e.jsx("li",{children:"字段：tmin, tmax, tavg, prcp, wspd, pres, tsun"})]})]}),e.jsxs("div",{className:"update-options",children:[e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.shanghai,onChange:i=>s({...t,shanghai:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新上海浦东数据"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.chinaCities,onChange:i=>s({...t,chinaCities:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新中国主要城市"})]}),e.jsxs("label",{className:"update-option",children:[e.jsx("input",{type:"checkbox",checked:t.worldCities,onChange:i=>s({...t,worldCities:i.target.checked}),disabled:l}),e.jsx("span",{children:"更新世界主要城市"})]})]}),l&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--cg-bg)",borderRadius:"0.5rem",border:"1px solid #bae6fd"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:"16px",height:"16px",border:"2px solid #3b82f6",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}),e.jsx("span",{style:{color:"#0369a1",fontWeight:500},children:"正在下载 Normals 数据..."})]}),e.jsx("style",{children:`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `})]}),h&&e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",borderRadius:"4px",backgroundColor:h.success?"#dcfce7":"#fee2e2",color:h.success?"#166534":"#991b1b"},children:h.message})]}),e.jsxs("div",{className:"update-dialog-footer",children:[e.jsx("button",{className:"btn btn-secondary",onClick:d,disabled:l,children:"关闭"}),e.jsx("button",{className:"btn btn-primary",onClick:b,disabled:l||Object.values(t).every(i=>!i),children:l?"更新中...":"开始更新"})]})]})})};function de(a){if(typeof a=="object"&&a!==null){const d=a;return d.response?.data?.detail||d.message||"请求失败"}return"请求失败"}const He=a=>{const d=oe(),[t,s]=x.useState(!1),[l,p]=x.useState(null),h=I({mutationFn:async i=>(s(!0),(await M.post("/api/admin/meteostat/update-hourly",{options:i})).data),onSuccess:(i,u)=>{const n=i.results||{},v=[],c=[];u.shanghai&&n.shanghai&&(n.shanghai.updated&&n.shanghai.records>0?v.push(`上海: ${n.shanghai.message}`):c.push(`上海: ${n.shanghai.message||"更新失败"}`)),u.huoshaoliao&&n.huoshaoliao&&(n.huoshaoliao.updated&&n.huoshaoliao.records>0?v.push(`火烧寮: ${n.huoshaoliao.message}`):c.push(`火烧寮: ${n.huoshaoliao.message||"更新失败"}`)),u.chinaCities&&n.chinaCities&&(n.chinaCities.updated&&n.chinaCities.records>0?v.push(`中国主要城市: ${n.chinaCities.message}`):c.push(`中国主要城市: ${n.chinaCities.message||"更新失败，可能所有站点都失败或无数据"}`)),u.worldCities&&n.worldCities&&(n.worldCities.updated&&n.worldCities.records>0?v.push(`世界主要城市: ${n.worldCities.message}`):c.push(`世界主要城市: ${n.worldCities.message||"更新失败"}`));let y="";v.length>0&&(y+=`✅ 更新成功:
`+v.join(`
`)),c.length>0&&(y&&(y+=`

`),y+=`❌ 更新失败:
`+c.join(`
`)),alert(y||i.message||"更新完成，但未检测到实际更新"),d.invalidateQueries({queryKey:["admin","meteostat","hourly-statistics"]}),d.invalidateQueries({queryKey:["admin","databases",a,"tables"]})},onError:i=>{alert(`更新失败: ${de(i)}`)},onSettled:()=>{s(!1)}}),m=I({mutationFn:async i=>(s(!0),(await M.post("/api/admin/meteostat/update-daily",i)).data),onSuccess:(i,u)=>{const n=i.results||{},v=[],c=[];u.shanghai&&n.shanghai&&(n.shanghai.updated&&n.shanghai.records>0?v.push(`上海: ${n.shanghai.message}`):c.push(`上海: ${n.shanghai.message||"更新失败"}`)),u.chinaCities&&n.chinaCities&&(n.chinaCities.updated&&n.chinaCities.records>0?v.push(`中国主要城市: ${n.chinaCities.message}`):c.push(`中国主要城市: ${n.chinaCities.message||"更新失败"}`)),u.worldCities&&n.worldCities&&(n.worldCities.updated&&n.worldCities.records>0?v.push(`世界主要城市: ${n.worldCities.message}`):c.push(`世界主要城市: ${n.worldCities.message||"更新失败"}`));let y="";v.length>0&&(y=`✅ 更新成功:
${v.join(`
`)}`),c.length>0&&(y&&(y+=`

`),y+=`⚠️ 未更新:
${c.join(`
`)}`),alert(y||"更新完成"),d.invalidateQueries({queryKey:["admin","meteostat","statistics"]}),d.invalidateQueries({queryKey:["admin","databases",a,"tables"]})},onError:i=>{alert(`更新失败: ${de(i)}`)},onSettled:()=>{s(!1)}});return{isUpdating:t,monthlyProgress:l,updateHourlyMutation:h,updateDailyMutation:m,updateMonthly:(i,u)=>{s(!0),p({current:0,total:100,message:"准备更新..."});const n=new AbortController,v=c=>{if(c.type==="start"){p({current:0,total:Number(c.total)||0,message:"开始更新..."});return}if(c.type==="progress"){p({current:Number(c.current)||0,total:Number(c.total)||0,message:`正在更新: ${String(c.station||"")} (${Number(c.current)||0}/${Number(c.total)||0})`});return}if(c.type==="complete"){s(!1),p(null);const y=c.results||{},$=[];for(const[A,U]of Object.entries(y)){const z=(U.success||0)+(U.failed||0);$.push(`${A}: ${U.success||0}/${z} 个站点，${U.records||0} 条记录`)}alert(`更新完成！
共 ${Number(c.total_success)||0}/${Number(c.total)||0} 个站点，${Number(c.total_records)||0} 条月度记录

${$.join(`
`)}`),d.invalidateQueries({queryKey:["admin","meteostat","monthly-statistics"]}),d.invalidateQueries({queryKey:["admin","databases",a,"tables"]}),u()}};return(async()=>{try{const y=(await B(`/api/meteostat/bulk/update-monthly-stream?targets=${i.join(",")}`,{signal:n.signal})).body?.getReader();if(!y)throw new Error("未收到月度更新流");const $=new TextDecoder;let A="";for(;;){const{done:U,value:z}=await y.read();if(U)break;A+=$.decode(z,{stream:!0});const j=A.split(`

`);A=j.pop()||"";for(const g of j){const w=g.split(`
`).find(C=>C.startsWith("data: "));if(w)try{v(JSON.parse(w.slice(6)))}catch(C){console.error("SSE parse error:",C)}}}}catch(c){n.signal.aborted||(s(!1),p(null),alert(c instanceof Error?c.message:"更新过程中发生错误"))}})(),()=>{n.abort()}},setIsUpdating:s}},Xe=(a,d)=>{if(a==null)return"-";if(["created_at","updated_at","time","date","start","end"].includes(d)||d.endsWith("_time")||d.endsWith("_at")||d.endsWith("_date"))try{if(typeof a=="number"&&a>1e9&&a<1e10)return new Date(a*1e3).toLocaleString("zh-CN");if(typeof a=="string"&&(a.includes("T")||a.includes("-")||a.includes(":"))){const t=new Date(a);if(!isNaN(t.getTime()))return t.toLocaleString("zh-CN")}}catch{return String(a)}return typeof a=="boolean"?a?"是":"否":typeof a=="object"?JSON.stringify(a):String(a)},Z=[{dbName:"data"},{dbName:"geo"}],Ye=30,J=a=>{const d=(a||"").toLowerCase();return d==="data"?1:d==="geo"?2:3},Ze=(a,d)=>{const t=(a||"").toLowerCase();return t==="data"?`DATA (${d})`:t==="geo"?`GEO (${d})`:`${(a||"").toUpperCase()} (${d})`};function Gt(){const[a,d]=x.useState(null),[t,s]=x.useState("data"),[l,p]=x.useState(""),[h,m]=x.useState(1),[b,i]=x.useState(!1),[u,n]=x.useState(!1),[v,c]=x.useState(!1),[y,$]=x.useState(!1),[A,U]=x.useState(!1),[z,j]=x.useState(null),[g,w]=x.useState(null),[C,Q]=x.useState(null),P=oe(),V=Ce({queries:Z.map(o=>({queryKey:["admin","databases",o.dbName,"tables"],queryFn:()=>M.get(`/api/admin/databases/${o.dbName}/tables`).then(f=>f.data),retry:!1}))}),F=x.useMemo(()=>{const o=[];return V.forEach((f,S)=>{if(f.data?.tables){const _=Z[S].dbName;f.data.tables.forEach(k=>{o.some(L=>L.name===k.name&&L.dbName===_)||o.push({...k,dbName:_})})}}),o.filter(f=>f.name.toLowerCase().includes(l.toLowerCase())).sort((f,S)=>{const _=J(f.dbName),k=J(S.dbName);return _!==k?_-k:f.name.localeCompare(S.name)})},[V,l]),ce=x.useMemo(()=>{const o={};F.forEach(_=>{const k=_.dbName||"other";o[k]||(o[k]=[]),o[k].push(_)});const f=Object.keys(o).sort((_,k)=>{const L=J(_),ne=J(k);return L!==ne?L-ne:_.localeCompare(k)}),S=[];return f.forEach(_=>{const k=o[_];k.length!==0&&(S.push({id:`_section_${_}`,label:Ze(_,k.length),isSectionTitle:!0}),k.forEach(L=>{S.push({id:L.name,label:L.name,count:L.row_count,icon:L.name.includes("video")||L.name==="resources"?e.jsx(Ae,{size:14}):e.jsx(Y,{size:14})})}))}),S},[F]),q=V.some(o=>o.isLoading),G=F.find(o=>o.name===a),T=G?.dbName;x.useEffect(()=>{!a&&F.length>0&&!l&&!q&&d(F[0].name)},[a,F,l,q]);const{isUpdating:D,monthlyProgress:me,updateDailyMutation:he,updateMonthly:pe,setIsUpdating:ee}=He(T),{data:te,isLoading:ae,refetch:se}=K({queryKey:["admin","databases",T,"tables",a,"data",h],queryFn:async()=>(await M.get(`/api/admin/databases/${T}/tables/${a}/data`,{params:{page:h,page_size:Ye}})).data,enabled:!!T&&!!a&&t==="data"}),ie=G,{data:ge}=K({queryKey:["admin","meteostat","monthly-stations"],queryFn:()=>M.get("/api/meteostat/bulk/monthly-stations").then(o=>o.data),enabled:a==="meteostat_monthly"}),re=()=>{Z.forEach(o=>{P.invalidateQueries({queryKey:["admin","databases",o.dbName,"tables"]})}),T&&a&&(P.invalidateQueries({queryKey:["admin","databases",T,"tables",a,"data"]}),se())};x.useEffect(()=>{let o;return g&&T&&(o=setInterval(()=>{M.get(`/api/admin/databases/${T}/backup/status/${g}`).then(f=>{const S=f.data;Q(S),S.status==="success"?(clearInterval(o),j({type:"success",message:S.message}),P.invalidateQueries({queryKey:["admin","databases",T,"backups"]}),setTimeout(()=>{j(null),w(null),Q(null)},3e3)):S.status==="error"&&(clearInterval(o),j({type:"error",message:S.message}),setTimeout(()=>{j(null),w(null),Q(null)},3e3))}).catch(f=>{clearInterval(o),w(null),Q(null),j({type:"error",message:"获取备份进度失败"})})},500)),()=>{o&&clearInterval(o)}},[g,T,P]);const H=I({mutationFn:()=>{if(!T)throw new Error("No dbName selected");return M.post(`/api/admin/databases/${T}/backup`).then(o=>o.data)},onSuccess:o=>{o.task_id?w(o.task_id):(j({type:"success",message:o.message}),setTimeout(()=>j(null),3e3))},onError:o=>{j({type:"error",message:o.response?.data?.detail||"备份失败"})}}),X=I({mutationFn:()=>{if(!T)throw new Error("No dbName selected");return M.post(`/api/admin/databases/${T}/vacuum`).then(o=>o.data)},onSuccess:o=>{j({type:"success",message:`${o.message}，节省空间：${o.saved}`}),setTimeout(()=>j(null),5e3)},onError:o=>{j({type:"error",message:o.response?.data?.detail||"优化失败"})}}),ue=I({mutationFn:async()=>(await M.post("/api/admin/sync-stations")).data,onSuccess:o=>{const f=o.statistics||{};alert(`${o.message||"同步完成!"}

新增站点: ${f.added||0}
更新站点: ${f.updated||0}
来自Meteostat: ${f.total_from_meteostat||0}`),P.invalidateQueries({queryKey:["admin","station-stats"]}),P.invalidateQueries({queryKey:["admin","databases",T,"tables"]}),se()},onError:o=>{alert(`同步失败: ${o.response?.data?.detail||o.message}`)}}),xe=()=>{confirm("确定要同步全球气象站元数据吗？这可能需要几分钟时间。")&&(ee(!0),ue.mutate(void 0,{onSettled:()=>{ee(!1)}}))},be=o=>{o!==a&&(d(o),s("data"),m(1))},je=()=>a?e.jsxs("div",{className:"table-detail",children:[z&&e.jsx("div",{className:`status-alert ${z.type}`,style:{margin:"0 1.5rem 1rem",padding:"0.75rem 1rem",borderRadius:"6px",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:(z.type==="success","var(--cg-bg)"),color:z.type==="success"?"var(--admin-success)":"var(--admin-danger)",border:`1px solid ${z.type==="success"?"#bbf7d0":"var(--admin-danger-light)"}`},children:z.message}),C&&C.status==="running"&&e.jsxs("div",{className:"status-alert info backup-progress-container",style:{margin:"0 1.5rem 1rem",display:"flex",flexDirection:"column",gap:"8px",padding:"12px 16px",borderLeft:"4px solid var(--admin-primary)",backgroundColor:"var(--cg-bg)",borderRadius:"4px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontWeight:500,color:"var(--admin-primary)",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{className:"spinner placeholder",style:{width:"16px",height:"16px",border:"2px solid rgba(59, 130, 246, 0.3)",borderTopColor:"var(--admin-primary)",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"全量备份进行中"]}),e.jsxs("span",{style:{fontSize:"13px",fontWeight:600,color:"#2563eb",fontFamily:"monospace"},children:[C.progress,"%"]})]}),e.jsx("div",{style:{width:"100%",height:"6px",backgroundColor:"var(--admin-primary)",borderRadius:"3px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${C.progress}%`,height:"100%",backgroundColor:"#2563eb",transition:"width 0.3s ease"}})}),e.jsx("div",{style:{fontSize:"12px",color:"#60a5fa",marginTop:"2px",fontFamily:"monospace"},children:C.message})]}),e.jsxs("div",{className:"table-detail-content",children:[t==="data"&&ve(),t==="structure"&&fe(),t==="statistics"&&ye()]}),e.jsx(Qe,{isOpen:b,onClose:()=>i(!1),onUpdate:()=>P.invalidateQueries({queryKey:["meteostat-hourly-stats"]})}),e.jsx(Ke,{isOpen:u,onClose:()=>n(!1),updateMutation:he}),e.jsx(Je,{isOpen:v,onClose:()=>c(!1),monthlyStationCounts:ge,onUpdate:pe,isUpdating:D,progress:me}),e.jsx(Ve,{isOpen:y,onClose:()=>$(!1)}),e.jsx(Ge,{isOpen:A,onClose:()=>U(!1)})]}):null,ve=()=>{if(ae)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载中..."})});const o=te?.rows||[],f=te?.total_pages||1;if(o.length===0)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无数据"})});const S=Object.keys(o[0]);return e.jsxs("div",{className:"data-view",children:[e.jsx("div",{className:"table-wrapper",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:S.map(_=>e.jsx("th",{children:_},_))})}),e.jsx("tbody",{children:o.map((_,k)=>e.jsx("tr",{children:S.map(L=>e.jsx("td",{children:Xe(_[L],L)},L))},k))})]})}),f>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"btn btn-sm",disabled:h===1,onClick:()=>m(_=>_-1),children:"上一页"}),e.jsxs("span",{children:["第 ",h," / ",f," 页"]}),e.jsx("button",{className:"btn btn-sm",disabled:h>=f,onClick:()=>m(_=>_+1),children:"下一页"})]})]})},fe=()=>{if(!ie)return e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无表信息"})});const o=ie.columns||[];return o.length===0?e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无列信息"})}):e.jsx("div",{className:"structure-view",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"列名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"非空"}),e.jsx("th",{children:"主键"})]})}),e.jsx("tbody",{children:o.map(f=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:f.name})}),e.jsx("td",{children:e.jsx("code",{children:f.type})}),e.jsx("td",{children:f.not_null?"✓":""}),e.jsx("td",{children:f.primary_key?"✓":""})]},f.id))})]})})},ye=()=>{const o=G;return q?e.jsxs("div",{className:"empty-state",style:{padding:"3rem 1rem"},children:[e.jsx("div",{className:"spinner",style:{width:"32px",height:"32px",border:"3px solid rgba(59, 130, 246, 0.2)",borderTopColor:"var(--admin-primary, #3b82f6)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 1rem"}}),e.jsx("p",{children:"加载数据表信息中..."})]}):!o&&!a?e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"暂无统计信息"})}):a==="shanghai_weather_daily"?e.jsx(We,{}):a==="meteostat_daily"?e.jsx(De,{}):a==="meteostat_hourly"?e.jsx(Me,{}):a==="meteostat_stations"?e.jsx(Fe,{tableRowCount:o?.row_count||0}):a==="meteostat_monthly"?e.jsx(Ee,{}):a==="meteostat_annual"?e.jsx(Oe,{}):a==="meteostat_normal"?e.jsx(Pe,{}):e.jsx(Ie,{dbName:T||"data",tableName:a,tableInfo:o})},_e=()=>q?e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"加载中..."})}):a?je():e.jsxs("div",{className:"empty-state",style:{padding:"4rem 2rem"},children:[e.jsx(Y,{size:48,style:{opacity:.3}}),e.jsx("h3",{children:"选择数据表"}),e.jsx("p",{className:"empty-hint",children:"从右侧面板选择一个数据表查看详情"})]}),Ne=e.jsx(Se,{visible:!0,leftActions:a?null:e.jsx(e.Fragment,{children:e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:re,loading:q,title:"刷新 (F5)"})}),rightActions:a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"header-tab-group",children:[e.jsxs("button",{className:`header-tab-btn ${t==="data"?"active":""}`,onClick:()=>s("data"),title:"数据",children:[e.jsx(Te,{size:15}),e.jsx("span",{children:"数据"})]}),e.jsxs("button",{className:`header-tab-btn ${t==="structure"?"active":""}`,onClick:()=>s("structure"),title:"结构",children:[e.jsx(Y,{size:15}),e.jsx("span",{children:"结构"})]}),e.jsxs("button",{className:`header-tab-btn ${t==="statistics"?"active":""}`,onClick:()=>s("statistics"),title:"统计",children:[e.jsx(ze,{size:15}),e.jsx("span",{children:"统计"})]})]}),e.jsx(le,{}),e.jsx(E,{icon:e.jsx(Le,{size:18}),onClick:()=>X.mutate(),loading:X.isPending,disabled:X.isPending,title:"优化选中的数据库空间",children:"优化"}),e.jsx(E,{icon:e.jsx(Re,{size:18}),onClick:()=>H.mutate(),loading:H.isPending||!!g,disabled:!!g||H.isPending,title:"备份选中的专题数据库",variant:"primary",children:g?"备份中...":"备份"}),e.jsx(le,{}),e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:re,loading:ae,title:"刷新",children:"刷新"}),a==="meteostat_daily"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:()=>n(!0),disabled:D,variant:"success",title:"更新逐日数据",children:D?"更新中...":"更新"}),a==="meteostat_hourly"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:()=>i(!0),disabled:D,variant:"success",title:"更新逐小时数据",children:"更新"}),a==="meteostat_stations"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:xe,disabled:D,variant:"success",title:"同步气象站元数据",children:D?"同步中...":"同步"}),a==="meteostat_monthly"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:()=>c(!0),disabled:D,variant:"success",title:"更新月度数据",children:D?"更新中...":"更新"}),a==="meteostat_annual"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:()=>$(!0),disabled:D,variant:"success",title:"从月度数据更新年度统计",children:D?"更新中...":"更新"}),a==="meteostat_normal"&&e.jsx(E,{icon:e.jsx(O,{size:18}),onClick:()=>U(!0),disabled:D,variant:"success",title:"下载30年气候平均值数据",children:D?"更新中...":"更新"})]}):null}),we=e.jsx(ke,{header:{title:"表",count:F.length,actions:e.jsxs("div",{className:"sidebar-search-container",children:[e.jsx(Ue,{size:14,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"搜索数据表...",value:l,onChange:o=>p(o.target.value),className:"search-input"})]})},items:ce,selectedId:a,onSelect:o=>be(o),position:"right",resizable:!0,width:280,minWidth:200,maxWidth:400,variant:"compact"});return e.jsxs($e,{toolbar:Ne,sidebar:we,children:[e.jsxs("div",{className:"special-db-content",children:[a&&e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 0 14px"},children:e.jsx("span",{className:"admin-toolbar__table-name",children:a})}),_e()]}),e.jsx("style",{children:`
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
      `})]})}export{Gt as SpecialDatabase};
