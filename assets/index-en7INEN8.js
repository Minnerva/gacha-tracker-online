import{u as S,c as me,o as u,a as d,b as r,d as p,t as B,e as V,g as ce,G as Te,s as Ve,f as Ye,h as x,i as Fe,j as Ee,k as Y,l as Ge,r as $e,m as f,F as z,n as W,p as je,q as qe,v as Le,w as Ke,x as ze,y as We,z as be,A as Je,B as Ze,D as Qe,E as Xe,H as et,I as tt,J as ue,K as J,L,M as P,N as Be,O as de,P as Ce,Q as pe,R as Ae,S as st,T as at,U as nt,V as ot}from"./vendor-BQVWAgHc.js";import{C as ke}from"./chart.js-ddEKr6i1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const it="/gacha-tracker-online/assets/logo-QuR3q7Cb.png",rt={class:"w-full h-12 bg-white shadow md:px-4 sm:px-6 px-4 sticky top-0"},lt={class:"flex h-full items-center"},ct={class:"flex-none w-14"},ut=["src"],dt={class:"flex-1 flex justify-end items-center"},_t=["title"],mt={class:"w-20"},pt={__name:"Nav",setup(e){const t=S(),s=me(()=>t.state.user),a=()=>{const o=ce(),i=new Te;Ve(o,i).then(c=>{}).catch(c=>{console.log(c)})},n=()=>{const o=ce();Ye(o).then(i=>{}).catch(i=>{console.log(i)})};return(o,i)=>(u(),d("div",rt,[r("div",lt,[r("div",ct,[r("img",{src:p(it)},null,8,ut)]),r("div",dt,[s.value?(u(),d("span",{key:0,class:"mr-3 truncate max-w-52",title:s.value.ign},B(s.value.ign),9,_t)):V("",!0),r("div",mt,[s.value?(u(),d("button",{key:1,onClick:n,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(u(),d("button",{key:0,onClick:a,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])])]))}},ft={__name:"App",setup(e){x.extend(Fe);const t=S(),a=Ee({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"}),n=ce(a);return Y(a),Ge(a),n.onAuthStateChanged(async o=>{if(!o&&t.state.user)window.location.reload();else if(!o)t.commit("setUser",!1);else{t.commit("setUID",o.uid);let i={};const c=x.utc().format("YYYY-MM-DD HH:mm:ss");t.dispatch("setUserListen",l=>{t.state.user||(l?(i={...l},i.last_signed_in_at=c):i={ign:"",active:!1,created_at:c,last_signed_in_at:c},t.dispatch("saveUser",i)),l&&t.commit("setUser",l)})}}),(o,i)=>{const c=$e("router-view");return u(),d(z,null,[f(pt),f(c)],64)}}},ht=e=>(e&&e[0]==="/"&&(e=e.substring(1)),`/gacha-tracker-online/${e||""}`),yt=(e,t)=>{let s=-1;const a=Object.keys(t);return e.forEach((n,o)=>{const i=[];if(a.forEach(c=>{n[c]===t[c]&&i.push(!0)}),i.length===a.length)return s=o,o}),s},gt=(e,t)=>e.filter(s=>{let a=[];for(let n in t)a.push(t[n]===s[n]);return a.every(n=>n)}),bt=(e,t)=>{const s=[];for(let a in e)s.push(e[a]);return gt(s,t)},De=(e,t)=>{const s=yt(e,t);return s>-1?e[s]:!1},R=e=>x(`${e} 00:00:00`),j=({pyroxene:e,free_pull:t})=>Math.floor(e/120)+t,kt=e=>Math.floor(e/200),we=e=>new Intl.NumberFormat("en-US",{}).format(e),wt=async e=>{const t=Y();try{const a=(await qe(je(W(t),e))).val();return a||!1}catch(s){console.error(s)}},vt=(e,t)=>{const s=Y(),a=W(s,e);Le(a,n=>{const o=n.val();t(o)})},q=(e,t)=>{const s=Y();Ke(W(s,e),t)},E=(e,t,s={})=>{s.filters||(s.filters=[]);const a=Y(),n=[];let o=null;switch(s.order){case"child":n.push(We(s.order_key));break;case"key":n.push(ze());break;case"value":n.push(orderByValue(s.order_key));break}s.filters.forEach(i=>{switch(i.type){case"first":n.push(Xe(i.value));break;case"last":n.push(Qe(i.value));break;case"between":s.order==="key"&&(n.push(be(i.start)),n.push(Ze(i.end)));break;case"endBefore":s.order==="key"&&n.push(Je(i.value));break;case"startAt":s.order==="key"&&n.push(be(i.value));break}}),o=et(W(a,e),...n),Le(o,i=>t(i.val()))},xt={namespaced:!0,state:{DB_PATH_BA_BANNER_PULL:"/ba-banner-pull",banner_pull:!1,listGetUpcomingListener:!1},mutations:{setBannerPull(e,t){e.banner_pull=t?{...t}:!1}},getters:{find:e=>t=>{const s=e.banner_pull[t];return s||null}},actions:{save({state:e,rootState:t},{key:s,data:a}){q(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${s}`,a)},delete({state:e,rootState:t},s){q(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${s}`,null)},setGetUpcomingRecordsListen({state:e,rootState:t},s){const{listGetUpcomingListener:a}=e;a&&(a.off(),e.listGetUpcomingListener=!1),e.listLatestListener=E(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}`,s,{order:"key",filters:[{type:"startAt",value:"2023-12-00"}]})}}},$t={namespaced:!0,state:{DB_PATH_BA_CURRENCY_OWN:"/ba-currency-own",listGetListener:!1,listLatestListener:!1,listLatestBeforeMonthListener:!1},actions:{save({state:e,rootState:t},{key:s,data:a}){q(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}/${s}`,a)},setGetRecordsListen({state:e,rootState:t},{year:s,month:a,callback:n}){const{listGetListener:o}=e;o&&(o.off(),e.listGetListener=!1),e.listLatestListener=E(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"between",start:`${s}-${a}-00`,end:`${s}-${a}-99`}]})},setGetLatestRecordListen({state:e,rootState:t},s){const{listLatestListener:a}=e;a&&(a.off(),e.listLatestListener=!1),e.listLatestListener=E(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,s,{filters:[{type:"last",value:1}]})},setGetLatestBeforeMonthListener({state:e,rootState:t},{year:s,month:a,callback:n}){const{listLatestBeforeMonthListener:o}=e;o&&(o.off(),e.listLatestBeforeMonthListener=!1),e.listLatestBeforeMonthListener=E(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,n,{order:"key",filters:[{type:"endBefore",value:`${s}-${a}-00`},{type:"last",value:1}]})}}},Lt={"ba-banner-pull":xt,"ba-currency-own":$t},Bt=tt({state:{DB_PATH_USER:"/users",DB_PATH_BLUE_ARCHIVE_CURRENCY:"/blue-archive-currencies",user:!1,uid:!1},mutations:{setUser(e,t){e.user=t?{...t}:!1},setUID(e,t){e.uid=t||!1}},actions:{findUser({state:e}){return wt(`${e.DB_PATH_USER}/${e.uid}`)},setUserListen({state:e},t){vt(`${e.DB_PATH_USER}/${e.uid}`,s=>t(s))},async saveUser({state:e},t){await q(`${e.DB_PATH_USER}/${e.uid}`,t)}},modules:Lt}),Me=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},Ct={},At={class:"relative shadow bg-white rounded-sm"},Dt={class:"p-3"};function Mt(e,t){return u(),d("div",At,[ue(e.$slots,"cover"),r("div",Dt,[ue(e.$slots,"body")])])}const G=Me(Ct,[["render",Mt]]),Pt={class:"relative"},Rt=["src","title"],St=["placeholder","type","value"],Ut={__name:"Base",props:{icon:{},iconTitle:{},modelValue:{},type:{default:"text"},placeholder:{default:""},onChange:{type:Function,default(){return()=>{}}}},emits:["update:modelValue"],setup(e){return(t,s)=>(u(),d("div",Pt,[e.icon?(u(),d("img",{key:0,class:"absolute w-8 max-h-5 inset-y-0 m-auto z-10",src:e.icon,title:e.iconTitle},null,8,Rt)):V("",!0),r("input",{class:J(["w-full h-7 border-primary border-2 drop-shadow-sm focus:outline-0",{"pl-4":!e.icon,"pl-9":e.icon}]),placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:s[0]||(s[0]=a=>t.$emit("update:modelValue",a.target.value)),onChange:s[1]||(s[1]=(...a)=>e.onChange&&e.onChange(...a))},null,42,St)]))}},T=Me(Ut,[["__scopeId","data-v-df7366c4"]]),Pe={__name:"Base",props:{primary:Boolean,onClick:Function},setup(e){const t=e,s={"border-2":!t.primary,"text-white":t.primary,"bg-primary":t.primary};return(a,n)=>(u(),d("button",{class:J(["rounded w-full h-8 select-none",s]),onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},[ue(a.$slots,"default")]))}},It={class:"w-full py-3 md:px-8 sm:px-6 px-4"},Nt={key:0},Ht={class:"grid grid-cols-2 gap-4"},Ot={class:"col-span-full md:col-span-1"},Tt={key:1},Vt={__name:"Main",setup(e){const t=S(),s=me(()=>t.state.user),a=L(""),n=()=>{const{user:o}=t.state;o.ign=a,t.dispatch("saveUser",o)};return(o,i)=>{const c=$e("router-view");return u(),d("div",It,[s.value?(u(),d(z,{key:0},[s.value.ign?s.value.active?(u(),Be(c,{key:2})):(u(),d("div",Tt,"Please contact Minnerva to activate your account.")):(u(),d("div",Nt,[f(G,null,{body:P(()=>[r("div",Ht,[r("label",Ot,[de(" Input your IGN or Discord Name: "),f(T,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=l=>a.value=l)},null,8,["modelValue"])]),f(Pe,{class:"col-span-full md:col-start-1 md:col-end-2","on-click":n,primary:""},{default:P(()=>[de("Submit")]),_:1})])]),_:1})]))],64)):V("",!0)])}}},Yt="/gacha-tracker-online/assets/akane-bunny-icon-gfOjhgOr.webp",Ft="/gacha-tracker-online/assets/asuna-bunny-icon-oF1effRe.webp",Et="/gacha-tracker-online/assets/hanako-swimsuit-icon-s2k28dzI.webp",Gt="/gacha-tracker-online/assets/hare-camp-icon-xHKeVTgU.webp",jt="/gacha-tracker-online/assets/haruna-tracksuit-icon-C3yJc6jX.webp",qt="/gacha-tracker-online/assets/himari-icon-NnOzyjRg.webp",Kt="/gacha-tracker-online/assets/hina-swimsuit-icon-3-IoiTOU.webp",zt="/gacha-tracker-online/assets/hinata-swimsuit-icon-Vx2yAU8s.webp",Wt="/gacha-tracker-online/assets/iori-swimsuit-icon-5HfIKnaa.webp",Jt="/gacha-tracker-online/assets/karin-bunny-icon-z90yfVlX.webp",Zt="/gacha-tracker-online/assets/kayoko-new-year-icon-lEZ08tqZ.webp",Qt="/gacha-tracker-online/assets/kikyou-icon-OCtBoToh.webp",Xt="/gacha-tracker-online/assets/kotama-camp-icon-j0Rln9bx.webp",es="/gacha-tracker-online/assets/mari-tracksuit-icon-IfCWZ2Vl.webp",ts="/gacha-tracker-online/assets/mimori-swimsuit-icon-ICDRkuj4.webp",ss="/gacha-tracker-online/assets/misaka-mikoto-icon-t-m5DYfT.webp",as="/gacha-tracker-online/assets/miyako-swimsuit-icon-9NTUwO2x.webp",ns="/gacha-tracker-online/assets/neru-bunny-icon-QPIKLGG6.webp",os="/gacha-tracker-online/assets/nonomi-swimsuit-icon-Yyj40vp2.webp",is="/gacha-tracker-online/assets/renge-icon-nMq9xxcQ.webp",rs="/gacha-tracker-online/assets/saki-swimsuit-icon-y07xpALf.webp",ls="/gacha-tracker-online/assets/shiroko-swimsuit-icon-gmc76iBJ.webp",cs="/gacha-tracker-online/assets/shokuhou-misaki-icon-r8ShdIbR.webp",us="/gacha-tracker-online/assets/ui-swimsuit-icon-Y8SkXBci.webp",ds="/gacha-tracker-online/assets/wakamo-swimsuit-icon-aFL8264u.webp",_s="/gacha-tracker-online/assets/yukari-icon-lJbTFHeZ.webp",ms="/gacha-tracker-online/assets/yuuka-tracksuit-icon-obYhk5gg.webp";let _e=[{name:"Akane",alter:"Bunny"},{name:"Asuna",alter:"Bunny"},{name:"Hanako",alter:"Swimsuit"},{name:"Hare",alter:"Camp"},{name:"Haruna",alter:"Tracksuit"},{name:"Himari",alter:""},{name:"Hina",alter:"Swimsuit"},{name:"Hinata",alter:"Swimsuit"},{name:"Iori",alter:"Swimsuit"},{name:"Karin",alter:"Bunny"},{name:"Kayoko",alter:"New Year"},{name:"Kikyou",alter:""},{name:"Kotama",alter:"Camp"},{name:"Mari",alter:"Tracksuit"},{name:"Mimori",alter:"Swimsuit"},{name:"Misaka Mikoto",alter:""},{name:"Miyako",alter:"Swimsuit"},{name:"Neru",alter:"Bunny"},{name:"Nonomi",alter:"Swimsuit"},{name:"Renge",alter:""},{name:"Saki",alter:"Swimsuit"},{name:"Shiroko",alter:"Swimsuit"},{name:"Shokuhou Misaki",alter:""},{name:"Ui",alter:"Swimsuit"},{name:"Wakamo",alter:"Swimsuit"},{name:"Yukari",alter:""},{name:"Yuuka",alter:"Tracksuit"}];_e=_e.map(e=>(e.full_name=e.alter?`${e.name} (${e.alter})`:e.name,e.key=e.full_name.replace(/[()]/g,"").replace(/\s/g,"-").toLocaleLowerCase(),e.icon=new URL(Object.assign({"/src/assets/students/akane-bunny-icon.webp":Yt,"/src/assets/students/asuna-bunny-icon.webp":Ft,"/src/assets/students/hanako-swimsuit-icon.webp":Et,"/src/assets/students/hare-camp-icon.webp":Gt,"/src/assets/students/haruna-tracksuit-icon.webp":jt,"/src/assets/students/himari-icon.webp":qt,"/src/assets/students/hina-swimsuit-icon.webp":Kt,"/src/assets/students/hinata-swimsuit-icon.webp":zt,"/src/assets/students/iori-swimsuit-icon.webp":Wt,"/src/assets/students/karin-bunny-icon.webp":Jt,"/src/assets/students/kayoko-new-year-icon.webp":Zt,"/src/assets/students/kikyou-icon.webp":Qt,"/src/assets/students/kotama-camp-icon.webp":Xt,"/src/assets/students/mari-tracksuit-icon.webp":es,"/src/assets/students/mimori-swimsuit-icon.webp":ts,"/src/assets/students/misaka-mikoto-icon.webp":ss,"/src/assets/students/miyako-swimsuit-icon.webp":as,"/src/assets/students/neru-bunny-icon.webp":ns,"/src/assets/students/nonomi-swimsuit-icon.webp":os,"/src/assets/students/renge-icon.webp":is,"/src/assets/students/saki-swimsuit-icon.webp":rs,"/src/assets/students/shiroko-swimsuit-icon.webp":ls,"/src/assets/students/shokuhou-misaki-icon.webp":cs,"/src/assets/students/ui-swimsuit-icon.webp":us,"/src/assets/students/wakamo-swimsuit-icon.webp":ds,"/src/assets/students/yukari-icon.webp":_s,"/src/assets/students/yuuka-tracksuit-icon.webp":ms})[`/src/assets/students/${e.key}-icon.webp`],import.meta.url).href,e));const Re=_e,Se="/gacha-tracker-online/assets/pyroxene-gBHgCIjf.webp",Ue="/gacha-tracker-online/assets/recruitment-ticket-NiO_EDI9.webp",ve="chart",ps={__name:"LineChart",props:{labels:{type:Array,required:!0},data:{type:Array,required:!0},pullBanners:{type:Array,default(){return[]}}},setup(e,{expose:t}){const s=e;let a=null;const n={};Ce(s,()=>{o()}),ke.register({id:"default",afterDatasetsDraw(c){const l=c.getDatasetMeta(0).data;if(l.length>0){const{ctx:y}=c,g=14*c.currentDevicePixelRatio,U=16*c.currentDevicePixelRatio;l.forEach(({$context:Z},$)=>{const I=c.getDatasetMeta(1).data[$],A=Z.raw,Q=I.$context.raw;if((A||Q)&&s.pullBanners[$]){const X=A?l[$].x:I.x,ee=A?l[$].y:I.y;s.pullBanners[$].forEach((_,m)=>{const h=De(Re,{key:_.student_key});if(h){if(!n[h.key]){const w=new Image(g,U);w.src=h.icon,n[h.key]=w}y.drawImage(n[h.key],X-g/2,ee-(-10+m*-1*U),g,U)}})}})}}});const o=()=>{a.data.labels=s.labels,s.data.forEach((c,l)=>{a.data.datasets[l].data=c}),a.update()},i=()=>{a=new ke(document.querySelector(`#${ve}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},animation:{},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return pe(()=>{i()}),t({updateChart:o}),(c,l)=>(u(),d("canvas",{id:ve}))}},fs={class:"flex items-center"},hs=["src","title"],F={__name:"HistorySub",props:{icon:{required:!0},iconTitle:{},own:{required:!0},diff:{}},setup(e){const t=a=>{if(a>0)return"text-success";if(a<0)return"text-danger"},s=a=>`(${a>0?"+":""}${we(a)})`;return(a,n)=>(u(),d("div",fs,[r("img",{class:"w-8 mr-2",src:e.icon,title:e.iconTitle},null,8,hs),r("span",null,B(p(we)(e.own)),1),e.diff&&e.diff!==0?(u(),d("span",{key:0,class:J(["ml-1 text-xs",t(e.diff)])},B(s(e.diff)),3)):V("",!0)]))}},Ie="/gacha-tracker-online/assets/icon-pulls-PmRtrI9p.png",ys="/gacha-tracker-online/assets/icon-3-stars-unit-G8a83jjO.png",gs={class:"grid grid-cols-2 gap-3"},bs={class:"col-span-1 border-r"},ks={class:"col-span-1"},ws={__name:"History",props:{item:{required:!0}},setup(e){const t=L(x()),s=a=>a===t.value.format("YYYY-MM-DD")?["text-primary","font-bold"]:[];return(a,n)=>(u(),d("div",gs,[r("div",{class:J(["col-span-2",s(e.item.date)])},B(e.item.date),3),r("div",bs,[f(F,{icon:p(Se),"icon-title":"Pyroxene",own:e.item.pyroxene,diff:e.item.diff_pyroxene},null,8,["icon","own","diff"]),f(F,{icon:p(Ue),"icon-title":"Pull Ticket",own:e.item.free_pull,diff:e.item.diff_free_pull},null,8,["icon","own","diff"])]),r("div",ks,[f(F,{icon:p(Ie),"icon-title":"Total Pull",own:p(j)(e.item)},null,8,["icon","own"]),f(F,{icon:p(ys),"icon-title":"Spark",own:p(kt)(p(j)(e.item))},null,8,["icon","own"])])]))}},vs={class:"flow-root"},xs={class:"divide-y divide-gray-200 dark:divide-gray-700"},$s={key:0,class:"py-3 sm:py-4"},Ls={__name:"History",props:{items:{required:!0}},setup(e){return(t,s)=>(u(),d("div",vs,[r("ul",xs,[!e.items||e.items.length<=0?(u(),d("li",$s,"No record found.")):(u(!0),d(z,{key:1},Ae(e.items,a=>(u(),d("li",{key:a.date,class:"py-3 sm:py-4"},[f(ws,{item:a},null,8,["item"])]))),128))])]))}};let K=[{date:"2023-09-26",duration:7,student_key:"kayoko-new-year"},{date:"2024-01-09",duration:7,student_key:"hina-swimsuit"},{date:"2024-01-09",duration:7,student_key:"iori-swimsuit"},{date:"2023-12-26",duration:14,student_key:"miyako-swimsuit"},{date:"2023-12-26",duration:14,student_key:"saki-swimsuit"},{date:"2024-01-16",duration:7,student_key:"shiroko-swimsuit"},{date:"2024-01-16",duration:7,student_key:"nonomi-swimsuit"},{date:"2024-01-16",duration:7,student_key:"wakamo-swimsuit"},{date:"2024-01-23",duration:9,student_key:"ui-swimsuit"},{date:"2024-01-23",duration:9,student_key:"hinata-swimsuit"},{date:"2024-02-01",duration:7,student_key:"hanako-swimsuit"},{date:"2024-02-15",duration:7,student_key:"mimori-swimsuit"},{date:"2024-03-16",duration:12,student_key:"haruna-tracksuit"},{date:"2024-03-16",duration:12,student_key:"yuuka-tracksuit"},{date:"2024-03-16",duration:12,student_key:"mari-tracksuit"},{date:"2024-04-18",duration:14,student_key:"misaka-mikoto"},{date:"2024-04-18",duration:14,student_key:"shokuhou-misaki"},{date:"2024-05-02",duration:8,student_key:"yukari"},{date:"2024-05-16",duration:14,student_key:"renge"},{date:"2024-05-16",duration:14,student_key:"kikyou"},{date:"2024-05-30",duration:7,student_key:"himari"},{date:"2024-06-13",duration:7,student_key:"karin-bunny"},{date:"2024-06-13",duration:7,student_key:"neru-bunny"},{date:"2024-06-13",duration:7,student_key:"akane-bunny"},{date:"2024-06-13",duration:7,student_key:"asuna-bunny"},{date:"2024-06-20",duration:14,student_key:"hare-camp"},{date:"2024-06-20",duration:14,student_key:"kotama-camp"}];K=K.map(e=>(e.key=`${e.date}-${e.student_key}`,e));K.sort((e,t)=>e.date>t.date?1:e.date<t.date?-1:0);const Bs=K,Cs={class:"grid grid-cols-10 gap-3 md:items-center"},As={class:"col-span-2 lg:col-span-2"},Ds=["src","title"],Ms={class:"col-span-8 lg:col-span-8"},Ps={__name:"Banner",props:{item:{required:!0},bannerPull:{}},setup(e){const t=e,s=S(),a=L(null),n=De(Re,{key:t.item.student_key});Ce(t,()=>{o()});const o=()=>{const l=s.getters["ba-banner-pull/find"](t.item.key);a.value=l?l.pull:null},i=()=>t.item.diff<=0?" - Live":` - ${t.item.diff} days`,c=()=>{const{item:l}=t,y=l.key;!a.value||a.value<=0?(s.dispatch("ba-banner-pull/delete",y),a.value=null):s.dispatch("ba-banner-pull/save",{key:y,data:{date:l.date,student_key:l.student_key,pull:a.value}})};return pe(()=>{o()}),(l,y)=>(u(),d("div",Cs,[r("div",As,[r("img",{src:p(n).icon,title:p(n).full_name},null,8,Ds)]),r("div",Ms,[r("div",null,B(e.item.date)+B(i()),1),r("div",null,B(p(n).full_name),1),r("div",null,[f(T,{modelValue:a.value,"onUpdate:modelValue":y[0]||(y[0]=g=>a.value=g),modelModifiers:{number:!0},placeholder:"200",icon:p(Ie),"icon-title":"Pull",type:"number","on-change":c},null,8,["modelValue","icon"])])])]))}},Rs={class:"flow-root"},Ss={class:"divide-y divide-gray-200 dark:divide-gray-700"},Us={key:0,class:"py-3 sm:py-4"},Is={__name:"Banner",setup(e){const t=S(),s=me(()=>t.state["ba-banner-pull"].banner_pull),a=R(x().format("YYYY-MM-DD")),n=Bs.map(o=>{const i=R(o.date);return o.diff=i.diff(a,"day"),o}).filter(o=>o.diff>o.duration*-1);return(o,i)=>(u(),d("div",Rs,[r("ul",Ss,[p(n).length<=0?(u(),d("li",Us,"No banner found.")):(u(!0),d(z,{key:1},Ae(p(n),c=>(u(),d("li",{key:c.key,class:"py-3 sm:py-4"},[f(Ps,{item:c,"banner-pull":s.value[c.key]},null,8,["item","banner-pull"])]))),128))])]))}},Ns="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-left?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M9.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l192%20192c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L77.3%20256%20246.6%2086.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-192%20192z'/%3e%3c/svg%3e",Hs="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-right?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z'/%3e%3c/svg%3e",Os="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/calendar?f=classic&s=regular&pc=%252300d8fb%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%2300d8fb'%20d='M152%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H64C28.7%2064%200%2092.7%200%20128v16%2048V448c0%2035.3%2028.7%2064%2064%2064H384c35.3%200%2064-28.7%2064-64V192%20144%20128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H152V24zM48%20192H400V448c0%208.8-7.2%2016-16%2016H64c-8.8%200-16-7.2-16-16V192z'/%3e%3c/svg%3e",Ts="/gacha-tracker-online/assets/arona-head-5uMSPBb2.png",Vs="/gacha-tracker-online/assets/mika-portrait-iOc64siT.webp",Ys={class:"grid grid-cols-7 gap-4"},Fs={class:"col-span-full md:col-span-5"},Es={class:"flex justify-center text-center"},Gs=["src"],js={class:"mx-4 text-xl md:text-3xl font-bold"},qs=["src"],Ks={class:"flex justify-center"},zs={class:"w-full h-72"},Ws=r("div",{class:"mb-3 text-md md:text-xl font-bold"},"Add",-1),Js={class:"grid grid-cols-4 gap-4"},Zs={class:"col-span-full"},Qs={class:"col-span-2"},Xs={class:"col-span-2"},ea={class:"col-span-full md:col-start-2 md:col-end-4 mt-4"},ta=["src"],sa=r("div",{class:"text-md0 md:text-xl font-bold"},"History",-1),aa=r("div",{class:"text-md0 md:text-xl font-bold"},"Upcoming Banners",-1),na={class:"col-span-full md:col-span-1 xl:col-span-2 grid items-center content-end"},oa={class:"text-center"},ia=["src"],xe=12e3/30,ra={__name:"Index",setup(e){const t=S(),s=L(x()),a=L([]),n=L([]),o=x().year(),i=x().month()+1,c=x().date(),l=L({date:"",pyroxene:0,free_pull:0}),y=st({day:`${o}-${i}-${c}`,pyroxene:void 0,free_pull:void 0}),g=L({labels:[],data:[],pull_banners:[]}),U=()=>{t.dispatch("ba-currency-own/setGetLatestRecordListen",_=>{if(_){const m=Object.keys(_);m.length>0&&(l.value={date:m[0],..._[m[0]]})}})},Z=(_,m)=>{t.dispatch("ba-currency-own/setGetLatestBeforeMonthListener",{year:_,month:m,callback:h=>{const w=[];let b=[],N=0;a.value&&(b=Object.keys(a.value),b.reverse(),N=b.length);for(let k=0;k<N;k++){const C=a.value[b[k]];let v=a.value[b[k+1]];const D={date:b[k],pyroxene:C.pyroxene,free_pull:C.free_pull,diff_pyroxene:null,diff_free_pull:null};!v&&h&&(v=h[Object.keys(h)[0]]),v&&(D.diff_pyroxene=C.pyroxene-v.pyroxene,D.diff_free_pull=C.free_pull-v.free_pull),w.push(D)}n.value=w}})},$=(_,m)=>{t.dispatch("ba-currency-own/setGetRecordsListen",{year:_,month:m,callback:h=>{a.value=h,te(),Z(_,m)}})},I=()=>{t.dispatch("ba-banner-pull/setGetUpcomingRecordsListen",_=>{t.commit("ba-banner-pull/setBannerPull",_)})},A=_=>{s.value=_,$(_.year(),_.month()+1)},Q=()=>{const _=s.value.add(-1,"month").startOf("month");A(_)},X=()=>{const _=s.value.add(1,"month").startOf("month");A(_)},ee=async()=>{const _=R(y.day),m={pyroxene:y.pyroxene,free_pull:y.free_pull};isNaN(m.pyroxene)&&(m.pyroxene=l.value?l.value.pyroxene:0),isNaN(m.free_pull)&&(m.free_pull=l.value?l.value.free_pull:0),t.dispatch("ba-currency-own/save",{key:_.format("YYYY-MM-DD"),data:m}),y.pyroxene=void 0,y.free_pull=void 0,te()},te=()=>{const _=[],m=[],h=[],w=l.value?R(l.value.date):!1,b=t.state["ba-banner-pull"].banner_pull,N=Object.keys(b);let k=!1,C=!1;const v=[],D=s.value.startOf("month"),Ne=s.value.endOf("month"),He=D.diff(Ne,"day")*-1+1;for(let se=0;se<He;se++){const H=D.add(se,"day"),ae=H.format("YYYY-MM-DD"),ne=a.value?a.value[ae]:!1;let fe=null,he=null;if(ne&&(fe=j({pyroxene:ne.pyroxene,free_pull:ne.free_pull})),w){const ye=w.diff(H,"day");ye<=0&&(k===!1?k=ye*-1*xe+l.value.pyroxene:k+=xe,b&&(C||(N.forEach(oe=>{const O=b[oe],M=R(O.date),ie=M.diff(w,"day"),re=M.startOf("month"),le=H.startOf("month"),Oe=re.diff(le,"month");ie>0&&Oe<0&&(k-=O.pull*120)}),C=!0),N.forEach(oe=>{const O=b[oe],M=R(O.date),ie=M.diff(w,"day"),re=M.diff(H,"day"),le=M.diff(H,"month");ie>0&&le===0&&re===0&&(k-=O.pull*120)})),he=j({pyroxene:k,free_pull:l.value.free_pull}));const ge=bt(b,{date:ae});ge.length<=0?v.push(null):v.push(ge)}_.push(ae),m.push(fe),h.push(he)}g.value.labels=_,g.value.data=[m,h],g.value.pull_banners=v};return pe(()=>{U(),I(),$(o,i)}),(_,m)=>(u(),d("div",Ys,[r("div",Fs,[r("div",Es,[r("img",{src:p(Ns),class:"cursor-pointer select-none",onClick:Q},null,8,Gs),r("span",js,B(s.value.format("YYYY-MM")),1),r("img",{src:p(Hs),class:"cursor-pointer select-none",onClick:X},null,8,qs)]),r("div",Ks,[r("div",zs,[g.value.labels?(u(),Be(ps,{key:0,labels:g.value.labels,data:g.value.data,"pull-banners":g.value.pull_banners},null,8,["labels","data","pull-banners"])):V("",!0)])])]),f(G,{class:"col-span-full md:col-span-2"},{body:P(()=>[Ws,r("div",Js,[r("div",Zs,[f(T,{modelValue:y.day,"onUpdate:modelValue":m[0]||(m[0]=h=>y.day=h),icon:p(Os),"icon-title":"Date",type:"date"},null,8,["modelValue","icon"])]),r("div",Qs,[f(T,{modelValue:y.pyroxene,"onUpdate:modelValue":m[1]||(m[1]=h=>y.pyroxene=h),modelModifiers:{number:!0},placeholder:l.value.pyroxene,icon:p(Se),"icon-title":"Pyroxene",type:"number"},null,8,["modelValue","placeholder","icon"])]),r("div",Xs,[f(T,{modelValue:y.free_pull,"onUpdate:modelValue":m[2]||(m[2]=h=>y.free_pull=h),modelModifiers:{number:!0},placeholder:l.value.free_pull,icon:p(Ue),"icon-title":"Free Pull",type:"number"},null,8,["modelValue","placeholder","icon"])]),r("div",ea,[f(Pe,{"on-click":ee,primary:""},{default:P(()=>[de(" Save ")]),_:1})])]),r("img",{src:p(Ts),class:"h-32 mt-4 md:mt-0 md:absolute bottom-0 inset-x-0 m-auto"},null,8,ta)]),_:1}),f(G,{class:"h-72 col-span-full overflow-auto md:col-span-3"},{body:P(()=>[sa,f(Ls,{items:n.value},null,8,["items"])]),_:1}),f(G,{class:"max-h-72 col-span-full overflow-auto md:col-span-3 xl:col-span-2"},{body:P(()=>[aa,f(Is)]),_:1}),r("div",na,[r("div",oa,[r("img",{class:"inline-block max-w-36",src:p(Vs),title:"My Wife!!!"},null,8,ia)])])]))}},la=at({history:nt(),routes:[{path:ht(""),component:Vt,children:[{path:"",component:ra}]}]});ot(ft).use(Bt).use(la).mount("#app");
