import{_ as s}from"./breadcrumbs-DZYgaiqi.js";import{_ as a,r as t,o as e,H as r,d as l,e as o,g as i,u as c,t as n,l as p,p as m,B as d,A as u,b}from"./index-CICC1y_b.js";import{V as f}from"./VueMarkdown-y5eVgbcJ.js";import"./_commonjsHelpers-MdiGH4nz.js";const x={class:"flex flex-col items-center gap-2 mb-6"},_={key:0,class:"px-4 pb-8"},g={class:"title-3"},j={class:"text-gray-600 py-2"},v=a({__name:"detail",props:{id:String},setup(a){const v=a,y=t("");return e((async()=>{const s=await r.getDetail(v.id);y.value=s.data})),(a,t)=>{const e=s,r=u("router-link");return b(),l("div",null,[o(e,{breadcrumbs:["最新消息"]}),i("section",x,[c(y).text?(b(),l("div",_,[i("h1",g,n(c(y).title),1),i("p",j,[t[0]||(t[0]=p(" 📅 ")),i("time",null,n(new Date(c(y).createTime).toLocaleString("sv")),1)]),o(c(f),{class:"px-6 pt-2 md-article",source:c(y).text},null,8,["source"])])):m("",!0),o(r,{to:"/",class:"btn btn-primary btn-wide"},{default:d((()=>t[1]||(t[1]=[p(" 返回 ")]))),_:1})])])}}},[["__scopeId","data-v-7a56e04f"]]);export{v as default};
