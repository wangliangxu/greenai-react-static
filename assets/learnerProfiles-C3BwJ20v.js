var e=JSON.parse(`{
  "stages": [
    {
      "id": "primary",
      "label": "小学",
      "pattern": "小学|primary|elementary|^[1-6](?:年级)?$|^[一二三四五六]年级$",
      "guidance": "从校园、家庭或自然现象出发，用短句和具体比喻解释；一次引入少量概念，少用抽象术语。先引导观察，再解释原因，给出一个可以尝试的小问题。"
    },
    {
      "id": "junior",
      "label": "初中",
      "pattern": "初中|初[一二三]|中学生|junior|middle|^[7-9](?:年级)?$|^[七八九]年级$",
      "guidance": "解释基本概念和因果关系，结合生活实例、图表或简单实验。引导比较变量、提出猜想并用观察结果解释，不跳过推理过程。"
    },
    {
      "id": "senior",
      "label": "高中",
      "pattern": "高中|高[一二三]|中学生|senior|high school|^1[0-2](?:年级)?$|^十[一二]?年级$",
      "guidance": "说明概念、模型和适用条件，结合变量、图表和必要公式推理。首次出现的符号要解释，引导用证据检验结论。"
    },
    {
      "id": "undergraduate",
      "label": "本科",
      "pattern": "本科|大学生|大学[一二三四]|大[一二三四]|undergraduate|college|university|^大学$",
      "guidance": "结合学科理论、必要推导、真实数据或代码案例进行分析。交代前置知识、方法选择和适用范围，引导独立应用并解释结果。"
    },
    {
      "id": "graduate",
      "label": "研究生",
      "pattern": "研究生|硕士|博士|\\\\bgraduate\\\\b|master|phd|postgraduate",
      "guidance": "关注研究问题、假设、方法比较、证据质量、可复现性与局限。区分事实、推断和待验证假设；不编造文献、数据或来源，缺少证据时明确说明。"
    }
  ],
  "depths": [
    {
      "id": "accessible",
      "label": "更通俗",
      "guidance": "从必需的基础概念开始，减少术语，用具体例子分步说明；保持科学准确，不因学段而拒绝基础解释。"
    },
    {
      "id": "standard",
      "label": "标准讲解",
      "guidance": "按当前基础解释必要概念和原理，再给应用示例；信息量适中，避免无关扩展。"
    },
    {
      "id": "advanced",
      "label": "深入探究",
      "guidance": "在解释前置概念后增加推导、方法比较、边界条件与可验证的问题；可补充超出默认学段的知识，不把学段当作能力上限。"
    }
  ],
  "common": "请直接对学习者说话。解释课程知识时，先用具体情境帮助理解概念，再解释原理，随后连接应用、操作和挑战。涉及操作或代码时，说明为什么尝试、观察什么、怎样比较，以及结果说明什么。若问作业，先给思考方向和必要提示，再按用户需求补充解析。学段仅作默认起点，不代表个人能力；用户本次明确要求的讲解深度优先于默认学段和历史对话。未知学段时不猜测年龄，先用清楚、准确的基础解释，按追问调整。不要每次重复学习者背景。"
}
`);function t(t){let n=(t||``).trim().toLowerCase().split(/[、,，;；/]/).flatMap(e=>{let t=e.trim(),n=t.match(/^(\d{1,2})\s*[-~至到—–]\s*(\d{1,2})(?:年级)?$/);if(!n)return[t];let r=Number(n[1]),i=Number(n[2]);return r>=1&&i<=12&&r<=i?Array.from({length:i-r+1},(e,t)=>String(r+t)):[]});return e.stages.filter(e=>n.some(t=>new RegExp(e.pattern,`i`).test(t))).map(e=>e.id)}function n(e,n){if(e.stage)return e.stage;let r=t(e.grade);if(r.length)return r.length===1?r[0]:void 0;let i=t(n);return i.length===1?i[0]:void 0}function r(t,n){let r=e.stages.find(e=>e.id===n).label,i=t.split(/[、,，;；/]/).map(e=>e.trim()).filter(Boolean);return(i.includes(r)?i.filter(e=>e!==r):[...i,r]).join(`、`)}export{n,r,e as t};