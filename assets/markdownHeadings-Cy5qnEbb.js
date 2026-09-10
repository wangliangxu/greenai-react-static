const i=/^(?:第?[一二三四五六七八九十百零]+[、.．]\s*|[（(][一二三四五六七八九十百零]+[)）]\s*|\d+(?:[.．、]\d+)*[.．、）)]?\s*)/,r=t=>t.replace(i,"").trim(),e=t=>t.trim()?t.replace(/^(#{1,3}\s+)(?:第?[一二三四五六七八九十百零]+[、.．]\s*|[（(][一二三四五六七八九十百零]+[)）]\s*|\d+(?:[.．、]\d+)*[.．、）)]?\s*)(.+)$/gm,"$1$2"):t,a=t=>t.trim()?t.split(`
`).map(s=>s.startsWith("## ")&&!s.startsWith("### ")?`## ${r(s.slice(3))}`:s.startsWith("### ")?`### ${r(s.slice(4))}`:s).join(`
`):t;export{a,e as n};
