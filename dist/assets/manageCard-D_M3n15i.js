import{_ as e}from"./breadcrumbs-78zhgvBv.js";import{d as a,e as l,g as s,t,w as d,v as r,p as o,F as c,b as n}from"./index-_PcVOIh7.js";import{h as i}from"./helperDomain-B2JCiBPY.js";const u={class:"title-1"},b={class:"w-full space-y-4"},m={key:0,class:"modal modal-open"},p={class:"w-11/12 sm:w-2/3 h-auto bg-white rounded-lg shadow-lg flex flex-col border-2 border-gray-300"},f={class:"modal-header flex justify-between bg-primary rounded-t-lg p-3"},v={class:"text-xl font-bold text-white"},y={class:"flex-grow p-4"},x={class:"mt-4"},w=["value"],g={class:"mt-4"},h={class:"mt-4"},k={class:"mt-4"},C={class:"modal-footer mt-auto flex justify-end gap-2 p-2"},M={__name:"manageCard",setup(M){function j(){response.cardName||alert("請填寫所有欄位")}return(M,N)=>{const T=e;return M.data?(n(),a(c,{key:0},[l(T,{breadcrumbs:["我的票卡"]}),s("h1",u,"票卡管理 - "+t(M.data.name),1),s("div",b,[M.isVisible?(n(),a("div",m,[s("div",p,[s("div",f,[s("h3",v,"票卡管理 - "+t(M.data.name),1),s("button",{onClick:N[0]||(N[0]=(...e)=>M.closeModal&&M.closeModal(...e)),class:"btn btn-sm btn-ghost text-white"},"X")]),s("div",y,[s("div",x,[N[6]||(N[6]=s("label",{for:"cardType",class:"block"},"卡片類別:",-1)),s("input",{value:(V=M.card.type,i.cardType2Chinese(V)),id:"cardType",type:"text",class:"input input-bordered w-full",disabled:""},null,8,w)]),s("div",g,[N[7]||(N[7]=s("label",{for:"cardName",class:"block"},"卡片名稱:",-1)),d(s("input",{"onUpdate:modelValue":N[1]||(N[1]=e=>M.card.name=e),id:"cardName",type:"text",class:"input input-bordered w-full"},null,512),[[r,M.card.name]])]),s("div",h,[N[8]||(N[8]=s("label",{for:"returnHomeDate",class:"block"},"歸戶日期:",-1)),d(s("input",{"onUpdate:modelValue":N[2]||(N[2]=e=>M.card.createTime=e),id:"returnHomeDate",type:"text",class:"input input-bordered w-full",disabled:""},null,512),[[r,M.card.createTime]])]),s("div",k,[N[9]||(N[9]=s("label",{for:"cardNumber",class:"block"},"卡片外碼:",-1)),d(s("input",{"onUpdate:modelValue":N[3]||(N[3]=e=>M.card.number=e),id:"cardNumber",type:"text",class:"input input-bordered w-full",disabled:""},null,512),[[r,M.card.number]])])]),N[10]||(N[10]=s("div",{class:"divider"},null,-1)),s("button",{onClick:N[4]||(N[4]=(...e)=>M.closeModal&&M.closeModal(...e)),class:"btn btn-error"},"刪除"),N[11]||(N[11]=s("div",{class:"divider"},null,-1)),s("div",C,[s("button",{onClick:N[5]||(N[5]=(...e)=>M.closeModal&&M.closeModal(...e)),class:"btn btn-gray"},"返回"),s("button",{onClick:j,class:"btn btn-primary"},"儲存")])])])):o("",!0)])],64)):o("",!0);var V}}};export{M as default};
