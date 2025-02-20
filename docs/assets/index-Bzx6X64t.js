import{_ as e}from"./alertModal-BG0k2enD.js";import{l,r as s,c as t,b as n,d as r,g as u,m as i,n as o,w as d,v as p,u as c,p as m,t as b,q as f,e as v,F as x,s as y,x as h}from"./index-C3pZlGJl.js";const g={class:"flex items-center justify-center min-h-screen"},w={key:0,class:"text-red-500 mt-2"},V={key:0,class:"text-red-500 mt-2"},N={key:0,class:"text-red-500 mt-2"},k={class:"flex flex-nowrap justify-between"},T=["disabled"],q={key:0},U={key:1,class:"loading loading-spinner"},C={key:2},j={key:0,class:"text-red-500 mt-2"},z={class:"flex flex-nowrap justify-between"},A=["disabled"],X={key:0},Z={key:1,class:"loading loading-spinner"},$={key:2},I={class:"cursor-pointer flex items-center",for:"agreeTerms1"},L={class:"cursor-pointer flex items-center",for:"agreeTerms2"},_={__name:"index",setup(_){const S=l({name:"",email:"",emailVerify:"",username:"",password:"",uniformNumber:"",birthday:"",phoneNumber:"",phoneNumberVerify:"",career:"",residence:"",agreeTerms1:!1,agreeTerms2:!1}),E=y(),F=s(!1),G=l({content:""}),M=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,P=t((()=>M.test(S.email))),B=/^09\d{8}$/,D=t((()=>B.test(S.phoneNumber))),H=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,30}$/,J=t((()=>H.test(S.password))),K=/^[A-Za-z][12]\d{8}$/,O=t((()=>K.test(S.uniformNumber)));function Q(){S.agreeTerms1&&S.agreeTerms2?O?h.register(S).then((()=>{G.content="註冊成功，請重新登入!",F.value=!0,le.value="登入"})).catch((e=>{G.content=e.response.data,F.value=!0,le.value="重新註冊"})):alert("請輸入有效的身分證字號"):alert("請同意條款與隱私政策")}const R=s(!1);function W(){S.email?P.value?(console.log("發送驗證碼中..."),R.value=!0,h.getEmailVerifyCode(S.email).then((()=>{R.value=!1,G.content=a.response.data,F.value=!0,le.value="確認"})).catch((e=>{R.value=!1,G.content=e.response.data,F.value=!0,le.value="返回註冊"})),function(){if(te.value)return;te.value=!0,ne=setInterval((()=>{se.value>0?se.value--:(clearInterval(ne),te.value=!1,se.value=60)}),1e3)}()):alert("請輸入有效的信箱地址"):alert("請輸入聯絡信箱")}const Y=s(!1);function ee(){S.phoneNumber?D.value?(console.log("發送驗證碼中..."),Y.value=!0,h.getPhoneVerifyCode(S.phoneNumber).then((()=>{Y.value=!1,G.content=a.response.data,F.value=!0,le.value="確認"})).catch((e=>{Y.value=!1,G.content=e.response.data,F.value=!0,le.value="返回註冊"})),function(){if(ue.value)return;ue.value=!0,ie=setInterval((()=>{re.value>0?re.value--:(clearInterval(ie),ue.value=!1,re.value=60)}),1e3)}()):alert("請輸入有效的手機門號"):alert("請輸入聯絡電話")}const le=s("登入");function ae(){"登入"===le.value?E.push("/login"):E.push("/registration")}const se=s(60),te=s(!1);let ne=null;const re=s(60),ue=s(!1);let ie=null;return(l,a)=>{const s=e;return n(),r(x,null,[u("section",g,[u("form",{class:"px-2 sm:px-16 w-full space-y-4",onSubmit:i(Q,["prevent"])},[a[28]||(a[28]=u("h1",{class:"title-2"},"註冊",-1)),u("div",null,[a[14]||(a[14]=u("label",{class:"label",for:"username"},[u("span",{class:"label-text"},[o("帳號"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"username",type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>c(S).username=e),placeholder:"輸入帳號",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).username]])]),u("div",null,[a[15]||(a[15]=u("label",{class:"label",for:"password"},[u("span",{class:"label-text"},[o("密碼"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"password",type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c(S).password=e),placeholder:"輸入密碼",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).password]]),a[16]||(a[16]=u("span",{class:"text-xs text-gray-500 mt-1"},"請輸入12-30個字元，內容須包含英文大寫、英文小寫、數字及符號4種類型字元。",-1)),c(J)?m("",!0):(n(),r("div",w," 請輸入有效的密碼 "))]),u("div",null,[a[17]||(a[17]=u("label",{class:"label",for:"uniformNumber"},[u("span",{class:"label-text"},[o("身分證字號"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"uniformNumber",type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>c(S).uniformNumber=e),placeholder:"輸入身分證字號",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).uniformNumber]]),c(O)?m("",!0):(n(),r("div",V," 請輸入有效的身分證字號 "))]),u("div",null,[a[18]||(a[18]=u("label",{class:"label",for:"birthday"},[u("span",{class:"label-text"},[o("生日"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"birthday",type:"date","onUpdate:modelValue":a[3]||(a[3]=e=>c(S).birthday=e),class:"input input-bordered w-full",required:""},null,512),[[p,c(S).birthday]])]),u("div",null,[a[19]||(a[19]=u("label",{class:"label",for:"name"},[u("span",{class:"label-text"},[o("姓名"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"name",type:"text","onUpdate:modelValue":a[4]||(a[4]=e=>c(S).name=e),placeholder:"輸入姓名",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).name]])]),u("div",null,[a[20]||(a[20]=u("label",{class:"label",for:"email"},[u("span",{class:"label-text"},[o("信箱"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"email",type:"email","onUpdate:modelValue":a[5]||(a[5]=e=>c(S).email=e),placeholder:"輸入信箱",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).email]]),c(P)?m("",!0):(n(),r("div",N," 請輸入有效的信箱地址 ")),a[21]||(a[21]=u("label",{class:"label",for:"emailVerify"},[u("span",{class:"label-text"},[o("驗證碼"),u("span",{class:"text-red-500"},"*")])],-1)),u("div",k,[d(u("input",{id:"emailVerify",type:"text","onUpdate:modelValue":a[6]||(a[6]=e=>c(S).emailVerify=e),placeholder:"輸入驗證碼",class:"input input-bordered w-full mr-4",required:""},null,512),[[p,c(S).emailVerify]]),u("button",{onClick:i(W,["prevent"]),type:"button",class:"btn btn-primary w-auto",disabled:l.isCounting||l.isLoadingSendCode},[l.isCounting?(n(),r("span",q,b(l.timeLeft)+" 秒後可重新傳送",1)):l.isLoadingSendCode?(n(),r("span",U)):(n(),r("span",C,"取得驗證碼"))],8,T)])]),u("div",null,[a[22]||(a[22]=u("label",{class:"label",for:"phone"},[u("span",{class:"label-text"},[o("電話"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"phone",type:"phone","onUpdate:modelValue":a[7]||(a[7]=e=>c(S).phoneNumber=e),placeholder:"輸入手機號碼",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).phoneNumber]]),c(D)?m("",!0):(n(),r("div",j," 請輸入有效的手機門號 ")),a[23]||(a[23]=u("label",{class:"label",for:"phoneNumberVerify"},[u("span",{class:"label-text"},[o("驗證碼"),u("span",{class:"text-red-500"},"*")])],-1)),u("div",z,[d(u("input",{id:"phoneNumberVerify",type:"text","onUpdate:modelValue":a[8]||(a[8]=e=>c(S).phoneNumberVerify=e),placeholder:"輸入驗證碼",class:"input input-bordered w-full mr-4",required:""},null,512),[[p,c(S).phoneNumberVerify]]),u("button",{onClick:i(ee,["prevent"]),type:"button",class:"btn btn-primary w-auto",disabled:l.isCounting||c(Y)},[l.isCounting?(n(),r("span",X,b(l.timeLeft)+" 秒後可重新傳送",1)):c(Y)?(n(),r("span",Z)):(n(),r("span",$,"取得驗證碼"))],8,A)])]),u("div",null,[a[24]||(a[24]=u("label",{class:"label",for:"career"},[u("span",{class:"label-text"},[o("職業"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"career",type:"text","onUpdate:modelValue":a[9]||(a[9]=e=>c(S).career=e),placeholder:"輸入職業",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).career]])]),u("div",null,[a[25]||(a[25]=u("label",{class:"label",for:"residence"},[u("span",{class:"label-text"},[o("居住縣市"),u("span",{class:"text-red-500"},"*")])],-1)),d(u("input",{id:"residence",type:"text","onUpdate:modelValue":a[10]||(a[10]=e=>c(S).residence=e),placeholder:"居住縣市",class:"input input-bordered w-full",required:""},null,512),[[p,c(S).residence]])]),u("div",null,[u("label",I,[d(u("input",{id:"agreeTerms1",type:"checkbox","onUpdate:modelValue":a[11]||(a[11]=e=>c(S).agreeTerms1=e),class:"checkbox checkbox-primary",required:""},null,512),[[f,c(S).agreeTerms1]]),a[26]||(a[26]=u("span",{class:"label-text ml-2"},[o(" 我已閱讀並同意 "),u("a",{href:"#",class:"text-primary underline"},"條款與隱私政策")],-1))])]),u("div",null,[u("label",L,[d(u("input",{id:"agreeTerms2",type:"checkbox","onUpdate:modelValue":a[12]||(a[12]=e=>c(S).agreeTerms2=e),class:"checkbox checkbox-primary",required:""},null,512),[[f,c(S).agreeTerms2]]),a[27]||(a[27]=u("span",{class:"label-text ml-2"},[o(" XXXXX "),u("a",{href:"#",class:"text-primary underline"},"條款")],-1))])]),a[29]||(a[29]=u("button",{type:"submit",class:"btn btn-primary w-full"},"註冊",-1))],32)]),v(s,{isVisible:c(F),content:c(G).content,goToName:c(le),"onUpdate:visible":a[13]||(a[13]=e=>F.value=e),onGoTo:ae},null,8,["isVisible","content","goToName"])],64)}}};export{_ as default};
