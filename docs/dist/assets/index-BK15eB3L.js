import{m as e,r as l,c as s,b as t,d as n,g as r,n as u,l as i,w as o,v as d,u as p,p as c,t as m,q as b,e as f,F as v,s as x,x as y,y as h}from"./index-CICC1y_b.js";const g={class:"flex items-center justify-center min-h-screen"},w={key:0,class:"text-red-500 mt-2"},V={key:0,class:"text-red-500 mt-2"},N={key:0,class:"text-red-500 mt-2"},k={class:"flex flex-nowrap justify-between"},T=["disabled"],q={key:0},U={key:1,class:"loading loading-spinner"},C={key:2},z={key:0,class:"text-red-500 mt-2"},A={class:"flex flex-nowrap justify-between"},X=["disabled"],Z={key:0},$={key:1,class:"loading loading-spinner"},j={key:2},I={class:"cursor-pointer flex items-center",for:"agreeTerms1"},L={class:"cursor-pointer flex items-center",for:"agreeTerms2"},S={__name:"index",setup(S){const _=e({name:"",email:"",emailVerify:"",username:"",password:"",uniformNumber:"",birthday:"",phoneNumber:"",phoneNumberVerify:"",career:"",residence:"",agreeTerms1:!1,agreeTerms2:!1}),E=x(),F=l(!1),G=e({content:""}),P=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,B=s((()=>P.test(_.email))),D=/^09\d{8}$/,H=s((()=>D.test(_.phoneNumber))),J=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,30}$/,K=s((()=>J.test(_.password))),M=/^[A-Za-z][12]\d{8}$/,O=s((()=>M.test(_.uniformNumber)));function Q(){_.agreeTerms1&&_.agreeTerms2?O?y.register(_).then((()=>{G.content="註冊成功，請重新登入!",F.value=!0,le.value="登入"})).catch((e=>{G.content=e.response.data,F.value=!0,le.value="重新註冊"})):alert("請輸入有效的身分證字號"):alert("請同意條款與隱私政策")}const R=l(!1);function W(){_.email?B.value?(console.log("發送驗證碼中..."),R.value=!0,y.getEmailVerifyCode(_.email).then((()=>{R.value=!1,G.content=a.response.data,F.value=!0,le.value="確認"})).catch((e=>{R.value=!1,G.content=e.response.data,F.value=!0,le.value="返回註冊"})),function(){if(te.value)return;te.value=!0,ne=setInterval((()=>{se.value>0?se.value--:(clearInterval(ne),te.value=!1,se.value=60)}),1e3)}()):alert("請輸入有效的信箱地址"):alert("請輸入聯絡信箱")}const Y=l(!1);function ee(){_.phoneNumber?H.value?(console.log("發送驗證碼中..."),Y.value=!0,y.getPhoneVerifyCode(_.phoneNumber).then((()=>{Y.value=!1,G.content=a.response.data,F.value=!0,le.value="確認"})).catch((e=>{Y.value=!1,G.content=e.response.data,F.value=!0,le.value="返回註冊"})),function(){if(ue.value)return;ue.value=!0,ie=setInterval((()=>{re.value>0?re.value--:(clearInterval(ie),ue.value=!1,re.value=60)}),1e3)}()):alert("請輸入有效的手機門號"):alert("請輸入聯絡電話")}const le=l("登入");function ae(){"登入"===le.value?E.push("/login"):E.push("/registration")}const se=l(60),te=l(!1);let ne=null;const re=l(60),ue=l(!1);let ie=null;return(e,l)=>{const a=h;return t(),n(v,null,[r("section",g,[r("form",{class:"px-2 sm:px-16 w-full space-y-4",onSubmit:u(Q,["prevent"])},[l[28]||(l[28]=r("h1",{class:"title-2"},"註冊",-1)),r("div",null,[l[14]||(l[14]=r("label",{class:"label",for:"username"},[r("span",{class:"label-text"},[i("帳號"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"username",type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>p(_).username=e),placeholder:"輸入帳號",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).username]])]),r("div",null,[l[15]||(l[15]=r("label",{class:"label",for:"password"},[r("span",{class:"label-text"},[i("密碼"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"password",type:"password","onUpdate:modelValue":l[1]||(l[1]=e=>p(_).password=e),placeholder:"輸入密碼",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).password]]),l[16]||(l[16]=r("span",{class:"text-xs text-gray-500 mt-1"},"請輸入12-30個字元，內容須包含英文大寫、英文小寫、數字及符號4種類型字元。",-1)),p(K)?c("",!0):(t(),n("div",w," 請輸入有效的密碼 "))]),r("div",null,[l[17]||(l[17]=r("label",{class:"label",for:"uniformNumber"},[r("span",{class:"label-text"},[i("身分證字號"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"uniformNumber",type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>p(_).uniformNumber=e),placeholder:"輸入身分證字號",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).uniformNumber]]),p(O)?c("",!0):(t(),n("div",V," 請輸入有效的身分證字號 "))]),r("div",null,[l[18]||(l[18]=r("label",{class:"label",for:"birthday"},[r("span",{class:"label-text"},[i("生日"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"birthday",type:"date","onUpdate:modelValue":l[3]||(l[3]=e=>p(_).birthday=e),class:"input input-bordered w-full",required:""},null,512),[[d,p(_).birthday]])]),r("div",null,[l[19]||(l[19]=r("label",{class:"label",for:"name"},[r("span",{class:"label-text"},[i("姓名"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"name",type:"text","onUpdate:modelValue":l[4]||(l[4]=e=>p(_).name=e),placeholder:"輸入姓名",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).name]])]),r("div",null,[l[20]||(l[20]=r("label",{class:"label",for:"email"},[r("span",{class:"label-text"},[i("信箱"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"email",type:"email","onUpdate:modelValue":l[5]||(l[5]=e=>p(_).email=e),placeholder:"輸入信箱",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).email]]),p(B)?c("",!0):(t(),n("div",N," 請輸入有效的信箱地址 ")),l[21]||(l[21]=r("label",{class:"label",for:"emailVerify"},[r("span",{class:"label-text"},[i("驗證碼"),r("span",{class:"text-red-500"},"*")])],-1)),r("div",k,[o(r("input",{id:"emailVerify",type:"text","onUpdate:modelValue":l[6]||(l[6]=e=>p(_).emailVerify=e),placeholder:"輸入驗證碼",class:"input input-bordered w-full mr-4",required:""},null,512),[[d,p(_).emailVerify]]),r("button",{onClick:u(W,["prevent"]),type:"button",class:"btn btn-primary w-auto",disabled:e.isCounting||e.isLoadingSendCode},[e.isCounting?(t(),n("span",q,m(e.timeLeft)+" 秒後可重新傳送",1)):e.isLoadingSendCode?(t(),n("span",U)):(t(),n("span",C,"取得驗證碼"))],8,T)])]),r("div",null,[l[22]||(l[22]=r("label",{class:"label",for:"phone"},[r("span",{class:"label-text"},[i("電話"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"phone",type:"phone","onUpdate:modelValue":l[7]||(l[7]=e=>p(_).phoneNumber=e),placeholder:"輸入手機號碼",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).phoneNumber]]),p(H)?c("",!0):(t(),n("div",z," 請輸入有效的手機門號 ")),l[23]||(l[23]=r("label",{class:"label",for:"phoneNumberVerify"},[r("span",{class:"label-text"},[i("驗證碼"),r("span",{class:"text-red-500"},"*")])],-1)),r("div",A,[o(r("input",{id:"phoneNumberVerify",type:"text","onUpdate:modelValue":l[8]||(l[8]=e=>p(_).phoneNumberVerify=e),placeholder:"輸入驗證碼",class:"input input-bordered w-full mr-4",required:""},null,512),[[d,p(_).phoneNumberVerify]]),r("button",{onClick:u(ee,["prevent"]),type:"button",class:"btn btn-primary w-auto",disabled:e.isCounting||p(Y)},[e.isCounting?(t(),n("span",Z,m(e.timeLeft)+" 秒後可重新傳送",1)):p(Y)?(t(),n("span",$)):(t(),n("span",j,"取得驗證碼"))],8,X)])]),r("div",null,[l[24]||(l[24]=r("label",{class:"label",for:"career"},[r("span",{class:"label-text"},[i("職業"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"career",type:"text","onUpdate:modelValue":l[9]||(l[9]=e=>p(_).career=e),placeholder:"輸入職業",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).career]])]),r("div",null,[l[25]||(l[25]=r("label",{class:"label",for:"residence"},[r("span",{class:"label-text"},[i("居住縣市"),r("span",{class:"text-red-500"},"*")])],-1)),o(r("input",{id:"residence",type:"text","onUpdate:modelValue":l[10]||(l[10]=e=>p(_).residence=e),placeholder:"居住縣市",class:"input input-bordered w-full",required:""},null,512),[[d,p(_).residence]])]),r("div",null,[r("label",I,[o(r("input",{id:"agreeTerms1",type:"checkbox","onUpdate:modelValue":l[11]||(l[11]=e=>p(_).agreeTerms1=e),class:"checkbox checkbox-primary",required:""},null,512),[[b,p(_).agreeTerms1]]),l[26]||(l[26]=r("span",{class:"label-text ml-2"},[i(" 我已閱讀並同意 "),r("a",{href:"#",class:"text-primary underline"},"條款與隱私政策")],-1))])]),r("div",null,[r("label",L,[o(r("input",{id:"agreeTerms2",type:"checkbox","onUpdate:modelValue":l[12]||(l[12]=e=>p(_).agreeTerms2=e),class:"checkbox checkbox-primary",required:""},null,512),[[b,p(_).agreeTerms2]]),l[27]||(l[27]=r("span",{class:"label-text ml-2"},[i(" XXXXX "),r("a",{href:"#",class:"text-primary underline"},"條款")],-1))])]),l[29]||(l[29]=r("button",{type:"submit",class:"btn btn-primary w-full"},"註冊",-1))],32)]),f(a,{isVisible:p(F),content:p(G).content,goToName:p(le),"onUpdate:visible":l[13]||(l[13]=e=>F.value=e),onGoTo:ae},null,8,["isVisible","content","goToName"])],64)}}};export{S as default};
