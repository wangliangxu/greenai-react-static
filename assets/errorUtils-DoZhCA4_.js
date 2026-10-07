function s(t,e="操作失败"){if(t instanceof Error){const r=t;return r.response?.data?.detail?r.response.data.detail:t.message||e}return typeof t=="string"?t:e}export{s as e};
