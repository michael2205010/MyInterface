import{_ as t}from"./breadcrumbs-78zhgvBv.js";import{_ as e,b as r,d as n,K as a,F as s,h as i,g as u,t as l,l as o,r as c,c as d,L as f,M as h,u as m,o as v,N as p,e as $,w as g,O as y,i as b,v as x,p as M,B as w,P as D,A as _}from"./index-_PcVOIh7.js";import{g as S}from"./_commonjsHelpers-MdiGH4nz.js";var O,k={exports:{}};const T=S((O||(O=1,k.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",a="second",s="minute",i="hour",u="day",l="week",o="month",c="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},$=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:$,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),a=r%60;return(e<=0?"+":"-")+$(n,2,"0")+":"+$(a,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),a=e.clone().add(n,o),s=r-a<0,i=e.clone().add(n+(s?-1:1),o);return+(-(n+(r-a)/(s?a-i:i-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:l,d:u,D:f,h:i,m:s,s:a,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=p;var x="$isDayjsObject",M=function(t){return t instanceof S||!(!t||!t[x])},w=function t(e,r,n){var a;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();b[s]&&(a=s),r&&(b[s]=r,a=s);var i=e.split("-");if(!a&&i.length>1)return t(i[0])}else{var u=e.name;b[u]=e,a=u}return!n&&a&&(y=a),a||!n&&y},D=function(t,e){if(M(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new S(r)},_=g;_.l=w,_.i=M,_.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[x]=!0}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var a=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return _},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,e){var r=D(t);return this.startOf(e)<=r&&r<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,r){return _.u(t)?this[e]:this.set(r,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var r=this,n=!!_.u(e)||e,c=_.p(t),h=function(t,e){var a=_.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?a:a.endOf(u)},m=function(t,e){return _.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,p=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case d:return n?h(1,0):h(31,11);case o:return n?h(1,p):h(0,p+1);case l:var y=this.$locale().weekStart||0,b=(v<y?v+7:v)-y;return h(n?$-b:$+(6-b),p);case u:case f:return m(g+"Hours",0);case i:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case a:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var r,l=_.p(t),c="set"+(this.$u?"UTC":""),h=(r={},r[u]=c+"Date",r[f]=c+"Date",r[o]=c+"Month",r[d]=c+"FullYear",r[i]=c+"Hours",r[s]=c+"Minutes",r[a]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],m=l===u?this.$D+(e-this.$W):e;if(l===o||l===d){var v=this.clone().set(f,1);v.$d[h](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[_.p(t)]()},$.add=function(n,c){var f,h=this;n=Number(n);var m=_.p(c),v=function(t){var e=D(h);return _.w(e.date(e.date()+Math.round(t*n)),h)};if(m===o)return this.set(o,this.$M+n);if(m===d)return this.set(d,this.$y+n);if(m===u)return v(1);if(m===l)return v(7);var p=(f={},f[s]=e,f[i]=r,f[a]=t,f)[m]||1,$=this.$d.getTime()+n*p;return _.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=_.z(this),s=this.$H,i=this.$m,u=this.$M,l=r.weekdays,o=r.months,c=r.meridiem,d=function(t,r,a,s){return t&&(t[r]||t(e,n))||a[r].slice(0,s)},f=function(t){return _.s(s%12||12,t,"0")},m=c||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(v,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return u+1;case"MM":return _.s(u+1,2,"0");case"MMM":return d(r.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,l,2);case"ddd":return d(r.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(s);case"HH":return _.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(s,i,!0);case"A":return m(s,i,!1);case"m":return String(i);case"mm":return _.s(i,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,f,h){var m,v=this,p=_.p(f),$=D(n),g=($.utcOffset()-this.utcOffset())*e,y=this-$,b=function(){return _.m(v,$)};switch(p){case d:m=b()/12;break;case o:m=b();break;case c:m=b()/3;break;case l:m=(y-g)/6048e5;break;case u:m=(y-g)/864e5;break;case i:m=y/r;break;case s:m=y/e;break;case a:m=y/t;break;default:m=y}return h?m:_.a(m)},$.daysInMonth=function(){return this.endOf(o).$D},$.$locale=function(){return b[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},$.clone=function(){return _.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),O=S.prototype;return D.prototype=O,[["$ms",n],["$s",a],["$m",s],["$H",i],["$W",u],["$M",o],["$y",d],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=w,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=b[y],D.Ls=b,D.p={},D}()),k.exports)),H={class:"no"},Y={class:"station"},C={class:"city md:mr-2"},j={class:"money"},A=e({__name:"tableRideHistoryMonth",props:{datas:{type:Array,required:!0}},setup(t){const e=t;return(t,c)=>(r(),n(s,null,[c[4]||(c[4]=a('<h3 class="border border-green-900 bg-green-700 text-white font-extrabold p-2 mb-0" data-v-47e0b56f>搭乘紀錄</h3><div class="row header" data-v-47e0b56f><span class="no" data-v-47e0b56f>編號</span><time data-v-47e0b56f>搭乘時間</time><span class="station" data-v-47e0b56f>上/下車站點</span><span class="money" data-v-47e0b56f>交易金額</span></div>',2)),(r(!0),n(s,null,i(e.datas,((t,e)=>{return r(),n("div",{class:"row",key:e},[u("span",H,l(e+1),1),u("time",null,[c[0]||(c[0]=u("i",{class:"mdi i-mdi-calendar-month"},null,-1)),o(l((a=t.time,a?T(a).format("YYYY-MM-DD HH:mm"):"")),1)]),u("span",Y,[c[1]||(c[1]=u("i",{class:"mdi i-mdi-map-marker"},null,-1)),u("span",C,l(t.city),1),o(l(t.boarding)+" - "+l(t.getOff),1)]),u("span",j,[c[2]||(c[2]=u("i",{class:"mdi i-mdi-credit-card"},null,-1)),c[3]||(c[3]=u("div",null,"交易金額",-1)),o(" $"+l(t.amount),1)])]);var a})),128))],64))}},[["__scopeId","data-v-47e0b56f"]]),L=["onClick"],U={class:"hidden sm:inline"},W={__name:"tabTransportation",props:{datas:{type:Array,required:!0}},emits:["update:activeTab"],setup(t,{emit:e}){const a=c(""),v=e,p=t,$=d((()=>{if(0==p.datas?.length)return[];const t=p.datas.reduce(((t,{transportation:e})=>(t[e]=(t[e]||0)+1,t)),{}),e=Object.entries(t).sort(((t,e)=>e[1]-t[1])).map((([t,e])=>({transportation:t,count:e})));return a.value=e[0].transportation,e}));let g=d((()=>({"grid-cols-1":1==$.value.length,"grid-cols-2":2==$.value.length,"grid-cols-3":3==$.value.length,"grid-cols-4":4==$.value.length})));return f(a,((t,e)=>{v("update:activeTab",t)}),{immediate:!0}),(t,e)=>(r(),n("div",{role:"tablist",class:h(["tabs-bordered grid",m(g)])},[(r(!0),n(s,null,i(m($),(t=>(r(),n("a",{role:"tab",class:h(["tab-1",{"tab-active":m(a)===t.transportation}]),onClick:e=>{return r=t.transportation,void(a.value=r);var r}},[o(l(t.transportation)+" ",1),u("small",U,"("+l(t.count)+")",1)],10,L)))),256))],2))}},I={key:0,class:"w-full space-y-4"},N={class:"pt-4 flex flex-col space-y-2"},V={class:"form-row"},F=["value"],J={class:"form-row"},Z={class:"form-row"},q={key:0},z={class:"grid sm:grid-cols-[200px_1fr] gap-4 mx-auto my-4"},B={class:"flex flex-col rounded-lg bg-amber-400 p-4 text-center"},P={class:"text-4xl font-extrabold text-gray-800"},E={class:"grid grid-cols-[3fr_24px_3fr_24px_4fr] grid-rows-2 justify-center items-center rounded-lg bg-blue-400 p-4 text-center md:max-w-[440px]"},K={class:"text-4xl font-extrabold text-gray-800"},Q={class:"w-full"},R={key:1,class:"text-center"},G={key:1,class:"article"},X={__name:"rideHistory",setup(e){const a=c([]),f=c({}),h=c(""),S=c("2025"),O=c("1"),k=c([]);v((async()=>{const t=await p.getMyCard();a.value=t.data,a.value.length>0&&(f.value=a.value[0])}));const T=()=>{1===O.value.length&&(O.value="0"+O.value)},H=d((()=>k.value.filter((t=>t.transportation===h.value)))),Y=d((()=>H.value.reduce(((t,e)=>t+e.amount),0)));return(e,c)=>{const d=t,v=_("router-link");return r(),n(s,null,[$(d,{breadcrumbs:["回饋統計"]}),c[23]||(c[23]=u("h1",{class:"title-1"},"回饋統計",-1)),m(a).length>0?(r(),n("div",I,[u("div",N,[u("div",V,[c[6]||(c[6]=u("label",{for:"cardSelect"},"選擇卡片",-1)),g(u("select",{id:"cardSelect","onUpdate:modelValue":c[0]||(c[0]=t=>b(f)?f.value=t:null),class:"select"},[c[5]||(c[5]=u("option",{disabled:"",value:""},"請選擇",-1)),(r(!0),n(s,null,i(m(a),(t=>(r(),n("option",{value:t},l(t.name),9,F)))),256))],512),[[y,m(f)]])]),u("div",J,[c[9]||(c[9]=u("label",null,"時間區間",-1)),u("div",null,[g(u("input",{id:"year",type:"number",min:"2024",max:"2030",class:"input input-bordered w-14 box-content mr-1","onUpdate:modelValue":c[1]||(c[1]=t=>b(S)?S.value=t:null)},null,512),[[x,m(S)]]),c[7]||(c[7]=u("label",{for:"year"},"年",-1))]),u("div",null,[g(u("input",{id:"month",type:"number",min:"01",max:"12",class:"input input-bordered w-8 box-content mr-1","onUpdate:modelValue":c[2]||(c[2]=t=>b(O)?O.value=t:null),onBlur:T},null,544),[[x,m(O)]]),c[8]||(c[8]=u("label",{for:"month"},"月",-1))])]),u("div",Z,[u("button",{class:"btn btn-primary",onClick:c[3]||(c[3]=t=>{D.getMonth(f.value.id,S.value,O.value).then((t=>{k.value=t.data})).catch((t=>{k.value=[]}))})},"查詢")])]),m(k).length>0?(r(),n("section",q,[$(W,{datas:m(k),activeTab:m(h),"onUpdate:activeTab":c[4]||(c[4]=t=>b(h)?h.value=t:null)},null,8,["datas","activeTab"]),u("dl",z,[u("div",B,[u("div",P,l(m(H).length),1),c[10]||(c[10]=u("h3",{class:"order-last text-md font-medium text-gray-800"},"當月累積乘車次數",-1))]),u("div",E,[c[11]||(c[11]=u("div",{class:"text-3xl font-extrabold text-gray-800"},"123",-1)),c[12]||(c[12]=u("div",{class:"text-3xl"},"+",-1)),c[13]||(c[13]=u("div",{class:"text-3xl font-extrabold text-gray-800"},"100",-1)),c[14]||(c[14]=u("div",{class:"text-3xl"},"=",-1)),u("div",K,l(m(Y)),1),c[15]||(c[15]=u("div",{class:"text-sm font-medium text-gray-800"},"基本回饋",-1)),c[16]||(c[16]=u("div",null,null,-1)),c[17]||(c[17]=u("div",{class:"text-sm font-medium text-gray-800"},"早鳥加碼回饋",-1)),c[18]||(c[18]=u("div",null,null,-1)),c[19]||(c[19]=u("h3",{class:"text-sm font-medium text-gray-800"},"回饋金額",-1))])]),u("div",Q,[$(A,{datas:m(H)},null,8,["datas"]),M("",!0)])])):(r(),n("p",R,"查無資料"))])):(r(),n("p",G,[c[21]||(c[21]=o("無票卡資料，請先到「")),$(v,{to:"/backManagement/myCard"},{default:w((()=>c[20]||(c[20]=[o("我的票卡")]))),_:1}),c[22]||(c[22]=o("」新增"))]))],64)}}};export{X as default};
