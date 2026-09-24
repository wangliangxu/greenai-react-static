import{j as e,r as d}from"./react-vendor-DZdvhec1.js";import{u as ne}from"./query-vendor-CyHNoBeC.js";import{R as le,S as de,M as ce,T as oe,U as Y,O as me,V as pe,Q as ue,W as ve}from"./admin-media-CyZSGSX7.js";import{a_ as he,r as O,l as xe}from"./index-CbIn3iXm.js";import{I as ge}from"./InlineVideoEditor-DCUdWtn4.js";import{g as be,f as fe,a as je,b as Z}from"./formatters-D5xmu4G_.js";/* empty css                        */import{j as Ne,bf as ye,v as H,U as ke,bq as Se,bY as we,bg as ze,bS as Ae,X as _e,A as J,F as Ce,a9 as Fe,s as $e,aK as Me}from"./ui-vendor-DNckc4hb.js";import{C as Ie}from"./ConfirmModal-0uu2MiZ-.js";import{S as Ee}from"./Skeleton-CJQlb5jy.js";/* empty css                   */import{useParams as Le,useNavigate as De}from"./router-vendor-BF2jFopG.js";import"./graph-elk-vendor-BGfPdLZy.js";import"./vendor-scheduler-7OC5HNn7.js";import"./vendor--tanstack-query-core-C2VoyEbk.js";import"./editor-vendor-B3rh4HCY.js";import"./vendor-crelt-C8TCjufn.js";import"./vendor--babel-runtime-C7v6W3xq.js";import"./vendor--lezer-common-JpyzRPEz.js";import"./vendor--uiw-codemirror-extensions-basic-setup-68xR3BKx.js";import"./vendor--lezer-highlight-FPVvpV3n.js";import"./vendor--lezer-markdown-B16OSW-s.js";import"./vendor--lezer-lr-89juaN5r.js";import"./vendor--lezer-cpp-DwSIdEI1.js";import"./vendor--lezer-go-clWtfgCW.js";import"./vendor--lezer-java-DQ-JI4Wy.js";import"./vendor--lezer-json-B5hcOFMk.js";import"./vendor--lezer-php-Dvkhmyfa.js";import"./vendor--lezer-python-CD9SYIWU.js";import"./vendor--lezer-rust-CnCPhwnE.js";import"./vendor--lezer-sass-BYiEDnq0.js";import"./vendor--lezer-xml-D8ZCme4n.js";import"./vendor--lezer-yaml-CGdG0mhL.js";import"./vendor--marijn-find-cluster-break-DXwl3gUT.js";import"./vendor-style-mod-Bs6eFhZE.js";import"./vendor-w3c-keyname-Vcq4gwWv.js";import"./vendor--lezer-html-DJ74gFCm.js";import"./vendor--lezer-css-DBKoNjBJ.js";import"./vendor--lezer-javascript-ddqNWqMq.js";import"./vendor-axios-B9ygI19o.js";import"./vendor-react-hot-toast-ngl4vUsk.js";import"./vendor-goober-wofAfydu.js";import"./vendor-hoist-non-react-statics-29OctJXt.js";import"./vendor-react-is-BiLN5WJ0.js";import"./vendor-clsx-B-dksMZM.js";import"./vendor-react-transition-group-BO3C8yy5.js";import"./vendor--popperjs-core-DC5wud4b.js";import"./vendor-stylis-DDa9OTMq.js";import"./vendor-motion-dom-BvxRNICd.js";import"./vendor-motion-utils-CjIqCkNq.js";import"./Modal-Cnt4ficm.js";function Q(s,i,l=""){if(Array.isArray(s))return s.find(t=>t?.lang===i)?.value||s[0]?.value||l;if(typeof s=="object"&&s!==null&&!Array.isArray(s)){const r=s;return r[i]||r.zh||l}return typeof s=="string"?s:l}function Te(s,i){if(s&&typeof s=="object"&&!Array.isArray(s)){const l=s[i];return Array.isArray(l)?l:[]}return Array.isArray(s)?s.map(String):[]}function z(s,i){return s==null||s===""?e.jsx("span",{className:"vd-text-empty",children:i}):String(s)}function Re(s){if(!s)return{};if(typeof s=="string")try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}return typeof s=="object"&&!Array.isArray(s)?s:{}}function Be({audio:s,metadata:i,displayLang:l="zh",hasScripts:r=!1}){const t=Re(i),o=t.attrs||{},y=t.stats||{},f=t["ga:audio"]||{},k=(t.variables||{}).audio_stream?.attrs||{},E=Array.isArray(t.files)?t.files:[],j=E.find(F=>F?.role==="primary")||E[0],v=Q(t.title,l)||be(s.display_title,s.title).replace("视频","音频"),h=Q(t.abstract,l)||s.display_description||s.description||"",L=Q(t.subject,l)||s.category||"",A=Te(t.tags,l),u=Array.isArray(s.tags)?s.tags.map(String):[],S=A.length>0?A:u,c=y.duration_seconds||f.duration_seconds||s.duration,_=y.file_size_bytes||f.file_size_bytes||s.file_size,C=k.sample_rate||f.sample_rate,x=k.channels||f.channels,D=k.bitrate||f.bitrate,N=k.codec||f.codec,B=o.format||j?.extension||s.file_format,$=o.language||t.language,a=l==="en"?{secDescription:"Description",secTechnical:"Audio Technical",secFiles:"Files",secLicense:"License & Source",title:"Title:",abstract:"Abstract:",subject:"Subject:",tags:"Tags:",resourceId:"Resource ID:",duration:"Duration:",fileSize:"File Size:",codec:"Codec:",sampleRate:"Sample Rate:",channels:"Channels:",bitrate:"Bitrate:",scripts:"Scripts:",format:"Format:",fileName:"File:",hash:"SHA-256:",license:"License:",creator:"Creator:",language:"Language:",provider:"Provider:",originUrl:"Source URL:",created:"Created:",updated:"Updated:",notFilled:"N/A",ready:"Ready",missing:"Missing"}:{secDescription:"📋 描述信息",secTechnical:"🎧 音频参数",secFiles:"📁 文件清单",secLicense:"©️ 许可与来源",title:"标题:",abstract:"摘要:",subject:"主题分类:",tags:"标签:",resourceId:"资源 ID:",duration:"时长:",fileSize:"文件大小:",codec:"音频编码:",sampleRate:"采样率:",channels:"声道:",bitrate:"码率:",scripts:"脚本:",format:"格式:",fileName:"文件:",hash:"SHA-256:",license:"许可证:",creator:"创建者:",language:"语言:",provider:"来源:",originUrl:"来源链接:",created:"创建日期:",updated:"修改日期:",notFilled:"未填写",ready:"已生成",missing:"未生成"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"vd-card",children:[e.jsx("div",{className:"vd-card-header",children:a.secDescription}),e.jsxs("div",{className:"vd-card-rows",children:[e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.title}),e.jsx("span",{className:"vd-value",style:{fontWeight:600},children:v})]}),h&&e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.abstract}),e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--cg-text-muted)",lineHeight:1.5},children:h})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.subject}),e.jsx("span",{className:"vd-value",children:z(L,a.notFilled)})]}),S.length>0&&e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.tags}),e.jsx("div",{className:"vd-tags",children:S.map((F,m)=>e.jsx("span",{className:"vd-tag",children:F},`${F}-${m}`))})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.resourceId}),e.jsx("span",{className:"vd-value",style:{fontFamily:"monospace",fontSize:"0.75rem"},children:s.id})]})]})]}),e.jsxs("div",{className:"vd-card",children:[e.jsx("div",{className:"vd-card-header",children:a.secTechnical}),e.jsxs("div",{className:"vd-card-rows",children:[e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.duration}),e.jsx("span",{className:"vd-value",children:fe(Number(c||0))})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.fileSize}),e.jsx("span",{className:"vd-value",children:je(Number(_||0))})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.codec}),e.jsx("span",{className:"vd-value",children:z(N,a.notFilled)})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.sampleRate}),e.jsx("span",{className:"vd-value",children:C?`${C} Hz`:e.jsx("span",{className:"vd-text-empty",children:a.notFilled})})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.channels}),e.jsx("span",{className:"vd-value",children:z(x,a.notFilled)})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.bitrate}),e.jsx("span",{className:"vd-value",children:D?`${Math.round(Number(D)/1e3)} kbps`:e.jsx("span",{className:"vd-text-empty",children:a.notFilled})})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.scripts}),e.jsx("span",{className:"vd-value",children:r?a.ready:e.jsx("span",{className:"vd-text-empty",children:a.missing})})]})]})]}),e.jsxs("div",{className:"vd-card",children:[e.jsx("div",{className:"vd-card-header",children:a.secFiles}),e.jsxs("div",{className:"vd-card-rows",children:[e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.format}),e.jsx("span",{className:"vd-value",children:z(B,a.notFilled)})]}),e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.fileName}),e.jsx("span",{className:"vd-value",style:{wordBreak:"break-all"},children:z(j?.name||s.url,a.notFilled)})]}),e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.hash}),e.jsx("span",{className:"vd-value",style:{fontFamily:"monospace",fontSize:"0.7rem",wordBreak:"break-all"},children:z(j?.sha256||s.file_hash,a.notFilled)})]})]})]}),e.jsxs("div",{className:"vd-card",children:[e.jsx("div",{className:"vd-card-header",children:a.secLicense}),e.jsxs("div",{className:"vd-card-rows",children:[e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.license}),e.jsx("span",{className:"vd-value",children:z(t.license,a.notFilled)})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.creator}),e.jsx("span",{className:"vd-value",children:z(t.creator||s.creator,a.notFilled)})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.language}),e.jsx("span",{className:"vd-value",children:z($,a.notFilled)})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.provider}),e.jsx("span",{className:"vd-value",children:z(o.provider||t.source,a.notFilled)})]}),o.origin_address&&e.jsxs("div",{className:"vd-row-start",children:[e.jsx("span",{className:"vd-label",children:a.originUrl}),e.jsx("span",{className:"vd-value",style:{wordBreak:"break-all"},children:o.origin_address})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.created}),e.jsx("span",{className:"vd-value",children:Z(String(j?.ctime||t.date_created||s.created_at||""))||e.jsx("span",{className:"vd-text-empty",children:a.notFilled})})]}),e.jsxs("div",{className:"vd-row",children:[e.jsx("span",{className:"vd-label",children:a.updated}),e.jsx("span",{className:"vd-value",children:Z(String(t.date_modified||s.updated_at||""))||e.jsx("span",{className:"vd-text-empty",children:a.notFilled})})]})]})]})]})}function Pe({audio:s,metadata:i,onSave:l,onGenerated:r,scriptJob:t,onCancelScript:o,onClearScriptJob:y,isEditing:f,setIsEditing:I,editorRef:k,hasScripts:E=!1}){const{addToast:j}=he(),[v,h]=d.useState(!1),[L,A]=d.useState(300),[u,S]=d.useState(!1),[c,_]=d.useState(!1),[C,x]=d.useState("zh"),D=d.useRef(null),N=le(),B=f!==void 0?f:c,$=I||_,a=async()=>{if(s?.id)try{await N.mutateAsync(s.id),await r?.(),j({type:"success",message:"音频元数据计算与同步已完成"})}catch(m){const M=m,w=M.response?.data?.detail||M.message||"未知错误";j({type:"error",message:`智能生成失败: ${w}`})}},F=d.useCallback(m=>{m.preventDefault(),S(!0)},[]);return d.useEffect(()=>{const m=w=>{if(!u)return;const q=Math.min(Math.max(220,window.innerWidth-w.clientX),440);A(q)},M=()=>S(!1);return u&&(document.addEventListener("mousemove",m),document.addEventListener("mouseup",M),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",M),document.body.style.cursor="",document.body.style.userSelect=""}},[u]),e.jsxs("aside",{ref:D,className:`video-sidebar ${v?"collapsed":""}`,style:{width:v?48:L},children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("button",{className:"sidebar-toggle",onClick:()=>h(!v),title:v?"展开侧边栏":"收起侧边栏",children:v?e.jsx(Ne,{size:20}):e.jsx(ye,{size:20})}),!v&&e.jsx("div",{className:"audio-sidebar-actions",children:B?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"sidebar-header-action audio-save-btn",onClick:()=>k?.current?.save(),children:"保存"}),e.jsx("button",{className:"sidebar-header-action audio-cancel-btn",onClick:()=>$(!1),children:"取消"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"sidebar-header-action smart-generate-btn",onClick:a,disabled:N.isPending,title:"根据音频脚本和描述智能生成元数据",children:[N.isPending?e.jsx(H,{size:13,className:"animate-spin"}):e.jsx(ke,{size:13}),e.jsx("span",{children:N.isPending?"生成中...":"智能生成"})]}),l&&e.jsxs("button",{className:"sidebar-header-action",onClick:()=>$(!0),title:"编辑元数据",children:[e.jsx(Se,{size:13}),e.jsx("span",{children:"编辑"})]}),e.jsxs("button",{className:"sidebar-header-action",onClick:()=>x(m=>m==="zh"?"en":"zh"),title:C==="zh"?"切换到英文显示":"切换到中文显示",children:[e.jsx(we,{size:12}),e.jsx("span",{children:C==="zh"?"EN":"中"})]})]})})]}),!v&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`sidebar-resizer ${u?"active":""}`,onMouseDown:F,children:e.jsx(ze,{size:12})}),e.jsxs("nav",{className:"video-tree-view",children:[t&&t.status!=="completed"&&e.jsxs("div",{className:"sidebar-task-section",children:[e.jsxs("div",{className:"tree-section-label audio-task-label",children:[e.jsxs("span",{children:[e.jsx(Ae,{size:12}),"正在进行任务"]}),(t.status==="failed"||t.status==="cancelled")&&y&&e.jsx("button",{onClick:y,className:"task-close-btn",children:e.jsx(_e,{size:12})})]}),e.jsxs("div",{className:"sidebar-task-card",children:[e.jsxs("div",{className:"task-info",children:[e.jsx("span",{className:"task-status",children:t.status==="failed"?"生成失败":t.job_mode==="continue"?"脚本续生成":"脚本提取"}),e.jsx("span",{className:"task-stage",children:t.stage?`[ ${t.stage} ]`:""}),e.jsx("span",{className:"task-percent",children:typeof t.progress_percentage=="number"?`${Math.round(t.progress_percentage)}%`:""})]}),e.jsx("div",{className:"task-progress-bg",children:e.jsx("div",{className:`task-progress-bar ${t.status==="failed"?"failed":""}`,style:{width:`${t.progress_percentage||0}%`}})}),e.jsxs("div",{className:"task-footer",children:[e.jsx("span",{className:"task-message",title:t.message,children:t.message||(t.status==="processing"?"正在提取中...":"准备中...")}),t.status==="processing"&&o&&e.jsx("button",{onClick:o,className:"task-action-link",children:"停止"})]})]})]}),e.jsx("div",{children:s?B?e.jsx(ge,{ref:k,video:s,mediaLabel:"音频",onSave:async m=>{l&&await l(m),$(!1)},onCancel:()=>$(!1)}):e.jsx(Be,{audio:s,metadata:i,displayLang:C,hasScripts:E}):e.jsx("div",{className:"empty-state",children:"未选中音频"})})]})]}),e.jsx("style",{children:`
        .video-sidebar {
          background: var(--cg-surface);
          border-left: 1px solid var(--cg-border);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 144px);
          overflow: hidden;
          transition: width 0.2s ease;
          flex-shrink: 0;
          position: relative;
          order: 2;
        }

        .video-sidebar.collapsed {
          width: 48px !important;
        }

        .video-sidebar .sidebar-header {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
          justify-content: space-between;
          gap: 8px;
          padding: 8px 12px;
          border-bottom: 1px solid var(--cg-border);
          height: 48px;
          box-sizing: border-box;
        }

        .video-sidebar .sidebar-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          color: var(--cg-text-muted);
          transition: all 0.2s;
        }

        .video-sidebar .sidebar-toggle:hover {
          background: var(--cg-bg);
          border-color: var(--cg-border);
          color: var(--cg-info);
        }

        .audio-sidebar-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          gap: 8px;
          min-width: 0;
        }

        .sidebar-header-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          padding: 4px 10px;
          background: var(--cg-bg);
          color: var(--cg-text-muted);
          border: 1px solid var(--cg-border);
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sidebar-header-action:hover:not(:disabled) {
          color: var(--cg-info);
          border-color: color-mix(in srgb, var(--cg-info) 35%, var(--cg-border));
        }

        .sidebar-header-action:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .smart-generate-btn {
          background: linear-gradient(135deg, var(--cg-bg) 0%, color-mix(in srgb, var(--cg-info) 15%, var(--cg-bg)) 100%);
          color: var(--cg-info);
          border-color: color-mix(in srgb, var(--cg-info) 30%, var(--cg-border));
        }

        .audio-save-btn {
          background: var(--cg-info);
          color: white;
          border-color: var(--cg-info);
          font-weight: 600;
        }

        .audio-cancel-btn {
          background: var(--cg-bg);
        }

        .video-sidebar .sidebar-resizer {
          position: absolute;
          left: 0;
          top: 48px;
          bottom: 0;
          width: 8px;
          cursor: col-resize;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s, background 0.2s;
        }

        .video-sidebar:hover .sidebar-resizer,
        .video-sidebar .sidebar-resizer.active {
          opacity: 1;
        }

        .video-sidebar .sidebar-resizer:hover,
        .video-sidebar .sidebar-resizer.active {
          background: var(--cg-border);
        }

        .video-sidebar .video-tree-view {
          flex: 1;
          padding: 8px 0;
          overflow-y: auto;
        }

        .audio-task-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .audio-task-label > span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tree-section-label {
          padding: 10px 12px 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--cg-text-muted);
          text-transform: uppercase;
          letter-spacing: 0;
        }

        .sidebar-task-section {
          padding: 0 8px 8px;
          border-bottom: 1px solid var(--cg-bg);
        }

        .sidebar-task-card {
          padding: 10px;
          border: 1px solid color-mix(in srgb, var(--cg-info) 20%, var(--cg-border));
          border-radius: 8px;
          background: color-mix(in srgb, var(--cg-info) 6%, var(--cg-surface));
        }

        .task-info,
        .task-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }

        .task-status {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--cg-text);
        }

        .task-stage,
        .task-percent,
        .task-message {
          font-size: 0.72rem;
          color: var(--cg-text-muted);
        }

        .task-percent {
          margin-left: auto;
          font-weight: 700;
        }

        .task-progress-bg {
          height: 6px;
          margin: 8px 0;
          border-radius: 999px;
          background: var(--cg-bg);
          overflow: hidden;
        }

        .task-progress-bar {
          height: 100%;
          border-radius: inherit;
          background: var(--cg-info);
          transition: width 0.2s ease;
        }

        .task-progress-bar.failed {
          background: var(--cg-error);
        }

        .task-message {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .task-action-link,
        .task-close-btn {
          border: none;
          background: transparent;
          color: var(--cg-info);
          cursor: pointer;
          font-size: 0.72rem;
          padding: 0;
        }

        .task-close-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--cg-text-muted);
        }
      `})]})}function Ue(s){if(!s?.effective_audio_model)return"";const i=(s.effective_audio_provider||"").toLowerCase();return`${{aliyun:"阿里云",openai:"OpenAI","local-sensevoice":"本地 SenseVoice","local-whisper":"本地 Whisper（旧链路）"}[i]||s.effective_audio_provider||"未知来源"} · ${s.effective_audio_model}`}function We(s){return s.split(`
`).map(i=>i.trim()).filter(i=>i&&i!=="WEBVTT"&&!i.includes("-->")&&!/^\d+$/.test(i)).join(`
`)}function qe(s){if(!s)return{};if(typeof s=="string")try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function Ge(s){if(!s||s<=0)return"";const i=Math.round(s/1e3),l=Math.floor(i/60),r=i%60;if(l>=60){const t=Math.floor(l/60),o=l%60;return`${t}小时${o}分`}return`${l}分${r.toString().padStart(2,"0")}秒`}function Ws(){const{id:s}=Le(),i=De(),l=ne(),{data:r,isLoading:t,refetch:o}=de(s),y=ce(),f=oe(),[I,k]=d.useState(!1),[E,j]=d.useState(!1),[v,h]=d.useState(""),[L,A]=d.useState(!1),[u,S]=d.useState(null),[c,_]=d.useState(null),[C,x]=d.useState(""),D=d.useRef(null),[N,B]=d.useState("zh"),[$,a]=d.useState(1),[F,m]=d.useState(!1),M=d.useRef(null),[w,q]=d.useState({zh:"",en:""}),[P,U]=d.useState(!1),[K,G]=d.useState(null),ee=Ue(c),se=qe(r?.metadata);d.useEffect(()=>{if(!r?.id)return;let n=!1;return(async()=>{const g={zh:"",en:""};for(const b of["zh","en"])try{const X=await xe(O(`/api/admin/audios/${r.id}/scripts.vtt?lang=${b}`));X.ok&&(g[b]=We(await X.text()))}catch{}if(!n){try{const b=await Y(r.id);G(b),U(b.has_scripts)}catch{G(null),U(!!(g.zh||g.en))}q(g)}})(),()=>{n=!0}},[r?.id,c?.status]),d.useEffect(()=>{if(!u)return;let n=null;const p=async()=>{try{const g=await me(u);if(_(g.job),(g.job.status==="completed"||g.job.status==="failed"||g.job.status==="cancelled")&&(n&&clearInterval(n),S(null),g.job.status==="completed")){if(await l.invalidateQueries({queryKey:["audio",r?.id]}),await o(),r?.id)try{const b=await Y(r.id);G(b),U(b.has_scripts),x(b.can_continue?"本次续生成已完成，脚本仍未到音频结尾，可继续生成。":"脚本已自动生成完毕！")}catch{U(!0),x("脚本已自动生成完毕！")}else U(!0),x("脚本已自动生成完毕！");setTimeout(()=>x(""),5e3)}}catch(g){const b=g;h(b?.response?.data?.detail||b?.message||"获取脚本任务失败"),n&&clearInterval(n)}};return p(),n=setInterval(()=>void p(),2e3),()=>{n&&clearInterval(n)}},[u,l,r?.id,o]);const ae=async()=>{if(s){k(!0);try{await y.mutateAsync(s),i("/admin/audios")}catch(n){const p=n;h(p?.response?.data?.detail||p?.message||"删除音频失败"),j(!1)}finally{k(!1)}}},te=async()=>{if(s){A(!0),h(""),x(""),_(null);try{const n=await ue(s);S(n.job_id),_(n.job)}catch(n){const p=n;h(p?.response?.data?.detail||p?.message||"生成脚本失败")}finally{A(!1)}}},ie=async()=>{if(s){A(!0),h(""),x(""),_(null);try{const n=await pe(s);S(n.job_id),_(n.job)}catch(n){const p=n;h(p?.response?.data?.detail||p?.message||"继续生成脚本失败")}finally{A(!1)}}},V=async()=>{if(u)try{await ve(u)}catch(n){const p=n;h(p?.response?.data?.detail||p?.message||"取消任务失败")}},re=async n=>{r&&(await f.mutateAsync({audioId:r.id,audioData:n}),await l.invalidateQueries({queryKey:["audio",r.id]}),await l.invalidateQueries({queryKey:["audios"]}),await l.invalidateQueries({queryKey:["resources"]}),await o(),x("元数据保存成功！"),setTimeout(()=>x(""),3e3))};if(t)return e.jsx("div",{className:"page-container",children:e.jsx(Ee,{height:400})});if(!r)return e.jsx("div",{className:"page-container",children:e.jsxs("div",{className:"card",style:{textAlign:"center",padding:"48px"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"16px"},children:"🎧"}),e.jsx("h3",{style:{marginBottom:"8px"},children:"音频不存在"}),e.jsx("p",{style:{color:"var(--cg-text-muted)",marginBottom:"24px"},children:"找不到指定的音频"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>i("/admin/audios"),children:"返回列表"})]})});let T=r.url;if(T&&!T.startsWith("http")){const n=localStorage.getItem("token");T=O(`${T}?token=${n}`)}const R=!!K?.can_continue,W=R?Ge(K?.remaining_ms):"";return e.jsxs("div",{className:"page-container audio-detail-page",children:[e.jsxs("div",{className:"video-detail-layout",children:[e.jsxs("div",{className:"detail-main",children:[e.jsxs("div",{className:"vd-toolbar",children:[e.jsxs("div",{className:"vd-toolbar-left",children:[e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-back",onClick:()=>i("/admin/audios"),children:[e.jsx(J,{size:18}),"返回列表"]}),e.jsx("span",{className:"vd-toolbar-label",children:"音频详情"})]}),e.jsxs("div",{className:"vd-toolbar-actions",children:[e.jsxs("button",{className:`vd-toolbar-btn ${P&&!R?"vd-toolbar-btn-success":""}`,onClick:()=>{if(R){ie();return}P&&!window.confirm("该音频已有脚本，确定要重新提取吗？")||te()},disabled:L||!!u,title:R?`当前脚本未到音频结尾${W?`，约剩余 ${W}`:""}，点击继续生成`:P?"该音频已有完整脚本，点击可重新生成":"自动提取中英文脚本",children:[L?e.jsx(H,{size:16,className:"vd-spinning"}):e.jsx(Ce,{size:16}),R?"继续生成":P?"✓ 已有脚本":"提取脚本"]}),e.jsxs("a",{href:T,download:!0,className:"vd-toolbar-btn",title:"下载源音频",target:"_blank",rel:"noreferrer",children:[e.jsx(Fe,{size:16}),"下载音频"]}),e.jsx("div",{className:"vd-toolbar-divider"}),e.jsxs("button",{className:"vd-toolbar-btn vd-toolbar-btn-danger",onClick:()=>j(!0),disabled:y.isPending||I,title:"删除音频",children:[y.isPending||I?e.jsx(H,{size:16,className:"vd-spinning"}):e.jsx($e,{size:16}),"删除"]})]})]}),e.jsx("div",{className:"vd-header",style:{marginBottom:"16px"},children:e.jsxs("div",{className:"vd-header-title",style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("button",{onClick:()=>i("/admin/audios"),className:"vd-back-btn",style:{display:"none"},children:e.jsx(J,{size:20})}),e.jsx(Me,{size:24,className:"text-cg-primary",style:{flexShrink:0}}),e.jsx("h1",{className:"text-2xl font-bold text-cg-text truncate",title:r.title,style:{margin:0,minWidth:0},children:r.title})]})}),v&&e.jsxs("div",{className:"vd-error-message",children:[e.jsx("span",{className:"vd-error-icon",children:"⚠️"}),v]}),C&&e.jsxs("div",{className:"vd-success-message",children:[e.jsx("span",{className:"vd-success-icon",children:"✅"}),C]}),e.jsx("div",{className:"card",style:{marginBottom:"24px"},children:e.jsxs("div",{className:"vd-player-section",children:[e.jsx("div",{className:"vd-player-toolbar",children:e.jsxs("div",{className:"vd-toolbar-left",children:[e.jsxs("span",{className:"vd-toolbar-label",children:["ID: ",r.id.substring(0,8),"..."]}),e.jsxs("span",{className:"vd-toolbar-label ml-4",children:["大小: ",((r.file_size||0)/1024/1024).toFixed(2)," MB"]})]})}),e.jsx("div",{className:"vd-player-wrapper",children:r.url?e.jsxs("audio",{ref:D,src:T,controls:!0,className:"w-full h-[54px] rounded-md bg-[var(--cg-surface-raised)]",crossOrigin:"anonymous",children:[N!=="off"&&e.jsx("track",{kind:"subtitles",src:O(`/api/admin/audios/${r.id}/scripts.vtt?lang=${N}`),srcLang:N,label:N==="zh"?"中文":"English",default:!0}),"您的浏览器不支持 HTML5 audio 标签。"]}):e.jsx("div",{className:"vd-player-placeholder",children:"音频地址无效"})}),e.jsx("div",{className:"vd-content-vertical",children:e.jsxs("div",{className:"vd-desc-block",children:[e.jsxs("div",{className:"vd-desc-label",children:["🎧 音频脚本 · Audio Scripts",R&&e.jsxs("span",{style:{marginLeft:10,color:"var(--cg-warning)",fontWeight:500},children:["未到音频结尾",W?`，约剩余 ${W}`:""]})]}),w.zh||w.en?e.jsxs("div",{className:"vd-bilingual-grid",children:[e.jsxs("div",{className:"vd-bilingual-col",children:[e.jsx("div",{className:"vd-bilingual-tag cn",children:"中文脚本"}),e.jsx("div",{className:"vd-subtitle-container",children:w.zh?e.jsx("pre",{className:"vd-subtitle-pre",children:w.zh}):e.jsx("div",{className:"vd-text-empty",style:{padding:"20px",textAlign:"center"},children:"暂无中文脚本"})})]}),e.jsxs("div",{className:"vd-bilingual-col",children:[e.jsx("div",{className:"vd-bilingual-tag en",children:"English Script"}),e.jsx("div",{className:"vd-subtitle-container",children:w.en?e.jsx("pre",{className:"vd-subtitle-pre",children:w.en}):e.jsx("div",{className:"vd-text-empty",style:{padding:"20px",textAlign:"center"},children:"No English script found."})})]})]}):e.jsxs("div",{className:"vd-empty-placeholder",children:[e.jsx("div",{className:"vd-empty-icon",children:"🎧"}),e.jsxs("div",{className:"vd-empty-text",children:["暂无脚本信息。请点击工具栏的 ",e.jsx("strong",{children:"“提取脚本”"})," 自动转换音频内容。"]})]})]})}),c&&e.jsxs("div",{className:"vd-task-panel",children:[e.jsxs("div",{className:"vd-task-header",children:[e.jsx("h3",{className:"vd-task-title",children:c.job_mode==="continue"?"脚本续生成任务状态":"脚本提取任务状态"}),e.jsx("span",{className:`vd-task-badge vd-task-badge-${c.status}`,children:c.status==="pending"?"等待中":c.status==="processing"?"处理中":c.status==="completed"?"已完成":c.status==="cancelled"?"已取消":"失败"})]}),e.jsxs("div",{className:"vd-task-body",children:[e.jsxs("div",{className:"vd-task-row",children:[e.jsx("span",{className:"vd-task-label",children:"阶段："}),e.jsx("span",{className:"vd-task-value",children:c.stage||"queued"})]}),e.jsxs("div",{className:"vd-task-row",children:[e.jsx("span",{className:"vd-task-label",children:"信息："}),e.jsx("span",{className:"vd-task-value",children:c.message||"-"})]}),c.effective_audio_provider&&e.jsxs("div",{className:"vd-task-row",children:[e.jsx("span",{className:"vd-task-label",children:"实际 ASR 引擎："}),e.jsx("span",{className:"vd-task-value text-cg-info font-medium",children:ee})]}),e.jsxs("div",{className:"vd-task-progress-container",children:[e.jsxs("div",{className:"vd-task-progress-header",children:[e.jsx("span",{children:"提取进度"}),e.jsxs("span",{children:[Math.round(c.progress_percentage||0),"%"]})]}),e.jsx("div",{className:"vd-task-progress-bar-bg",children:e.jsx("div",{className:"vd-task-progress-bar-fill",style:{width:`${c.progress_percentage||0}%`}})})]}),c.error_detail&&e.jsx("div",{className:"vd-task-error-detail",children:JSON.stringify(c.error_detail,null,2)})]}),(c.status==="pending"||c.status==="processing")&&e.jsx("div",{className:"vd-task-footer",children:e.jsx("button",{onClick:V,className:"vd-task-btn-cancel",children:"取消任务"})})]})]})})]}),e.jsx(Pe,{audio:r,metadata:se,onSave:async n=>{await re(n),m(!1)},onGenerated:async()=>{await l.invalidateQueries({queryKey:["audio",r.id]}),await o()},scriptJob:c,onCancelScript:V,onClearScriptJob:()=>S(null),isEditing:F,setIsEditing:m,editorRef:M,hasScripts:P})]}),e.jsx(Ie,{isOpen:E,onClose:()=>j(!1),onConfirm:ae,title:"删除音频",message:`确定要删除音频 "${r.title}" 吗？此操作不可恢复。`,confirmText:"立即删除",cancelText:"取消",type:"danger",isLoading:y.isPending||I}),e.jsx("style",{children:`
        .video-detail-layout {
          display: flex;
          gap: 0;
          height: calc(100vh - 144px);
          width: 100%;
          box-sizing: border-box;
          margin: 0 -16px;
        }

        .detail-main {
          flex: 1;
          overflow-y: auto;
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
        }

        .audio-detail-page .vd-toolbar {
          min-height: 48px;
          height: 48px;
          padding-top: 8px;
          padding-bottom: 8px;
        }
      `})]})}export{Ws as AudioDetail};
