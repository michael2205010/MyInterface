import{_ as e}from"./breadcrumbs-DZYgaiqi.js";import{_ as a,r as l,o as s,z as t,c as n,b as o,d as r,e as i,g as c,w as u,v as d,u as p,i as m,F as v,h as x,j as f,t as b,k as h}from"./index-CICC1y_b.js";const g={class:"flex flex-col justify-center overflow-x-auto md:p-8"},w={class:"form-control w-full",role:"search"},y={class:"input input-bordered flex items-center gap-2 w-full"},j={class:"join join-vertical w-full my-1"},_=["value","onClick","aria-expanded","aria-controls"],k=["id"],C={class:"collapse-content"},U={class:"article px-6"},V={__name:"index",setup(a){const V=l([]);s((async()=>{const e=await t.getList();V.value=e.data}));const z=l(""),F=l(null),I=n((()=>{if(!z.value.trim())return V.value;const e=z.value.split(", ").map((e=>e.trim()));return V.value.filter((a=>e.some((e=>a.title.includes(e)||a.text&&a.text.includes(e)))))}));return(a,l)=>{const s=e;return o(),r(v,null,[i(s,{breadcrumbs:["常客優惠方案"]}),c("section",g,[c("div",w,[c("div",y,[u(c("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>m(z)?z.value=e:null),class:"grow",placeholder:"想找些什麼呢?"},null,512),[[d,p(z)]]),c("i",{class:"mdi i-mdi-magnify text-lg",onClick:l[1]||(l[1]=(...e)=>a.search&&a.search(...e)),"aria-label":"search"})])]),c("div",j,[(o(!0),r(v,null,x(p(I),((e,a)=>(o(),r("div",{key:a,class:"collapse collapse-arrow join-item border-base-300 border rounded-none"},[u(c("input",{type:"radio","onUpdate:modelValue":l[2]||(l[2]=e=>m(F)?F.value=e:null),value:a,name:"my-accordion",onClick:e=>function(e){F.value===e?F.value=null:F.value=e}(a),"aria-expanded":a===p(F),"aria-controls":"h2-"+a},null,8,_),[[f,p(F)]]),c("h2",{class:"collapse-title text-xl text-green-800 font-extrabold",id:"h2-"+a},b(e.title),9,k),u(c("div",C,[c("p",U,b(e.text),1)],512),[[h,p(F)===a]])])))),128))])])],64)}}},z=a(V,[["__scopeId","data-v-96de4449"]]);export{z as default};
