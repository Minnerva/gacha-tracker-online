import{u as I,c as me,o as c,a as u,b as r,d as f,t as L,e as Y,g as ce,G as Te,s as Ve,f as Ye,h as x,i as Fe,j as Ee,k as F,l as Ge,r as Be,m as h,F as Z,n as Q,p as je,q as qe,v as Ce,w as Ke,x as ze,y as We,z as we,A as Je,B as Ze,D as Qe,E as Xe,H as et,I as tt,J as ue,K as X,L as $,M as P,N as Ae,O as de,P as De,Q as pe,R as Me,S as st,T as nt,U as at,V as ot}from"./vendor-BQVWAgHc.js";import{C as ve}from"./chart.js-ddEKr6i1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const it="/gacha-tracker-online/assets/logo-QuR3q7Cb.png",rt={class:"w-full h-12 bg-white shadow md:px-4 sm:px-6 px-4 sticky top-0"},lt={class:"flex h-full items-center"},ct={class:"flex-none w-14"},ut=["src"],dt={class:"flex-1 flex justify-end items-center"},_t=["title"],mt={class:"w-20"},pt={__name:"Nav",setup(e){const t=I(),s=me(()=>t.state.user),n=()=>{const o=ce(),i=new Te;Ve(o,i).then(p=>{}).catch(p=>{console.log(p)})},a=()=>{const o=ce();Ye(o).then(i=>{}).catch(i=>{console.log(i)})};return(o,i)=>(c(),u("div",rt,[r("div",lt,[r("div",ct,[r("img",{src:f(it)},null,8,ut)]),r("div",dt,[s.value?(c(),u("span",{key:0,class:"mr-3 truncate max-w-52",title:s.value.ign},L(s.value.ign),9,_t)):Y("",!0),r("div",mt,[s.value?(c(),u("button",{key:1,onClick:a,class:"bg-white w-full p-1 border rounded-lg"},"Sign Out")):(c(),u("button",{key:0,onClick:n,class:"bg-white w-full p-1 border rounded-lg"},"Sign In"))])])])]))}},ft={__name:"App",setup(e){x.extend(Fe);const t=I(),n=Ee({apiKey:"AIzaSyB8hRY_mV19i_4K-Mno7Sn8FpOJGEIvDKM",authDomain:"gacha-tracker-online.firebaseapp.com",projectId:"gacha-tracker-online",storageBucket:"gacha-tracker-online.appspot.com",messagingSenderId:"395636017581",appId:"1:395636017581:web:2f03e7f80569c9a537b924",measurementId:"G-HW1B3NSFH8",databaseURL:"https://gacha-tracker-online-default-rtdb.asia-southeast1.firebasedatabase.app/"}),a=ce(n);return F(n),Ge(n),a.onAuthStateChanged(async o=>{if(!o&&t.state.user)window.location.reload();else if(!o)t.commit("setUser",!1);else{t.commit("setUID",o.uid);let i={};const p=x.utc().format("YYYY-MM-DD HH:mm:ss");t.dispatch("setUserListen",l=>{t.state.user||(l?(i={...l},i.last_signed_in_at=p):i={ign:"",active:!1,created_at:p,last_signed_in_at:p},t.dispatch("saveUser",i)),l&&t.commit("setUser",l)})}}),(o,i)=>{const p=Be("router-view");return c(),u(Z,null,[h(pt),h(p)],64)}}},ht=e=>(e&&e[0]==="/"&&(e=e.substring(1)),`/gacha-tracker-online/${e||""}`),yt=(e,t)=>{let s=-1;const n=Object.keys(t);return e.forEach((a,o)=>{const i=[];if(n.forEach(p=>{a[p]===t[p]&&i.push(!0)}),i.length===n.length)return s=o,o}),s},gt=(e,t)=>e.filter(s=>{let n=[];for(let a in t)n.push(t[a]===s[a]);return n.every(a=>a)}),bt=(e,t)=>{const s=[];for(let n in e)s.push(e[n]);return gt(s,t)},Pe=(e,t)=>{const s=yt(e,t);return s>-1?e[s]:!1},R=e=>x(`${e} 00:00:00`),z=({pyroxene:e,free_pull:t})=>Math.floor(e/120)+t,kt=e=>Math.floor(e/200),xe=e=>new Intl.NumberFormat("en-US",{}).format(e),wt=async e=>{const t=F();try{const n=(await qe(je(Q(t),e))).val();return n||!1}catch(s){console.error(s)}},vt=(e,t)=>{const s=F(),n=Q(s,e);Ce(n,a=>{const o=a.val();t(o)})},W=(e,t)=>{const s=F();Ke(Q(s,e),t)},q=(e,t,s={})=>{s.filters||(s.filters=[]);const n=F(),a=[];let o=null;switch(s.order){case"child":a.push(We(s.order_key));break;case"key":a.push(ze());break;case"value":a.push(orderByValue(s.order_key));break}s.filters.forEach(i=>{switch(i.type){case"first":a.push(Xe(i.value));break;case"last":a.push(Qe(i.value));break;case"between":s.order==="key"&&(a.push(we(i.start)),a.push(Ze(i.end)));break;case"endBefore":s.order==="key"&&a.push(Je(i.value));break;case"startAt":s.order==="key"&&a.push(we(i.value));break}}),o=et(Q(n,e),...a),Ce(o,i=>t(i.val()))},xt={namespaced:!0,state:{DB_PATH_BA_BANNER_PULL:"/ba-banner-pull",banner_pull:!1,listGetUpcomingListener:!1},mutations:{setBannerPull(e,t){e.banner_pull=t?{...t}:!1}},getters:{find:e=>t=>{const s=e.banner_pull[t];return s||null}},actions:{save({state:e,rootState:t},{key:s,data:n}){W(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${s}`,n)},delete({state:e,rootState:t},s){W(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}/${s}`,null)},setGetUpcomingRecordsListen({state:e,rootState:t},s){const{listGetUpcomingListener:n}=e;n&&(n.off(),e.listGetUpcomingListener=!1),e.listLatestListener=q(`${e.DB_PATH_BA_BANNER_PULL}/${t.uid}`,s,{order:"key",filters:[{type:"startAt",value:"2023-12-00"}]})}}},$t={namespaced:!0,state:{DB_PATH_BA_CURRENCY_OWN:"/ba-currency-own",listGetListener:!1,listLatestListener:!1,listLatestBeforeMonthListener:!1},actions:{save({state:e,rootState:t},{key:s,data:n}){W(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}/${s}`,n)},setGetRecordsListen({state:e,rootState:t},{year:s,month:n,callback:a}){const{listGetListener:o}=e;o&&(o.off(),e.listGetListener=!1),e.listLatestListener=q(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,a,{order:"key",filters:[{type:"between",start:`${s}-${n}-00`,end:`${s}-${n}-99`}]})},setGetLatestRecordListen({state:e,rootState:t},s){const{listLatestListener:n}=e;n&&(n.off(),e.listLatestListener=!1),e.listLatestListener=q(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,s,{filters:[{type:"last",value:1}]})},setGetLatestBeforeMonthListener({state:e,rootState:t},{year:s,month:n,callback:a}){const{listLatestBeforeMonthListener:o}=e;o&&(o.off(),e.listLatestBeforeMonthListener=!1),e.listLatestBeforeMonthListener=q(`${e.DB_PATH_BA_CURRENCY_OWN}/${t.uid}`,a,{order:"key",filters:[{type:"endBefore",value:`${s}-${n}-00`},{type:"last",value:1}]})}}},Lt={"ba-banner-pull":xt,"ba-currency-own":$t},Bt=tt({state:{DB_PATH_USER:"/users",DB_PATH_BLUE_ARCHIVE_CURRENCY:"/blue-archive-currencies",user:!1,uid:!1},mutations:{setUser(e,t){e.user=t?{...t}:!1},setUID(e,t){e.uid=t||!1}},actions:{findUser({state:e}){return wt(`${e.DB_PATH_USER}/${e.uid}`)},setUserListen({state:e},t){vt(`${e.DB_PATH_USER}/${e.uid}`,s=>t(s))},async saveUser({state:e},t){await W(`${e.DB_PATH_USER}/${e.uid}`,t)}},modules:Lt}),Re=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},Ct={},At={class:"relative shadow bg-white rounded-sm"},Dt={class:"p-3"};function Mt(e,t){return c(),u("div",At,[ue(e.$slots,"cover"),r("div",Dt,[ue(e.$slots,"body")])])}const K=Re(Ct,[["render",Mt]]),Pt={class:"relative"},Rt=["src","title"],It=["placeholder","type","value"],St={__name:"Base",props:{icon:{},iconTitle:{},modelValue:{},type:{default:"text"},placeholder:{default:""},onChange:{type:Function,default(){return()=>{}}}},emits:["update:modelValue"],setup(e){return(t,s)=>(c(),u("div",Pt,[e.icon?(c(),u("img",{key:0,class:"absolute w-8 max-h-5 inset-y-0 m-auto z-10",src:e.icon,title:e.iconTitle},null,8,Rt)):Y("",!0),r("input",{class:X(["w-full h-7 border-primary border-2 drop-shadow-sm focus:outline-0",{"pl-4":!e.icon,"pl-9":e.icon}]),placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:s[0]||(s[0]=n=>t.$emit("update:modelValue",n.target.value)),onChange:s[1]||(s[1]=(...n)=>e.onChange&&e.onChange(...n))},null,42,It)]))}},V=Re(St,[["__scopeId","data-v-df7366c4"]]),Ie={__name:"Base",props:{primary:Boolean,onClick:Function},setup(e){const t=e,s={"border-2":!t.primary,"text-white":t.primary,"bg-primary":t.primary};return(n,a)=>(c(),u("button",{class:X(["rounded w-full h-8 select-none",s]),onClick:a[0]||(a[0]=(...o)=>e.onClick&&e.onClick(...o))},[ue(n.$slots,"default")]))}},Ut={class:"w-full py-3 md:px-8 sm:px-6 px-4"},Nt={key:0},Ht={class:"grid grid-cols-2 gap-4"},Ot={class:"col-span-full md:col-span-1"},Tt={key:1},Vt={__name:"Main",setup(e){const t=I(),s=me(()=>t.state.user),n=$(""),a=()=>{const{user:o}=t.state;o.ign=n,t.dispatch("saveUser",o)};return(o,i)=>{const p=Be("router-view");return c(),u("div",Ut,[s.value?(c(),u(Z,{key:0},[s.value.ign?s.value.active?(c(),Ae(p,{key:2})):(c(),u("div",Tt,"Please contact Minnerva to activate your account.")):(c(),u("div",Nt,[h(K,null,{body:P(()=>[r("div",Ht,[r("label",Ot,[de(" Input your IGN or Discord Name: "),h(V,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l)},null,8,["modelValue"])]),h(Ie,{class:"col-span-full md:col-start-1 md:col-end-2","on-click":a,primary:""},{default:P(()=>[de("Submit")]),_:1})])]),_:1})]))],64)):Y("",!0)])}}},Yt="/gacha-tracker-online/assets/akane-bunny-icon-gfOjhgOr.webp",Ft="/gacha-tracker-online/assets/asuna-bunny-icon-oF1effRe.webp",Et="/gacha-tracker-online/assets/hanako-swimsuit-icon-s2k28dzI.webp",Gt="/gacha-tracker-online/assets/hare-camp-icon-xHKeVTgU.webp",jt="/gacha-tracker-online/assets/haruna-tracksuit-icon-C3yJc6jX.webp",qt="/gacha-tracker-online/assets/himari-icon-NnOzyjRg.webp",Kt="/gacha-tracker-online/assets/hina-swimsuit-icon-3-IoiTOU.webp",zt="/gacha-tracker-online/assets/hinata-swimsuit-icon-Vx2yAU8s.webp",Wt="/gacha-tracker-online/assets/iori-swimsuit-icon-5HfIKnaa.webp",Jt="/gacha-tracker-online/assets/karin-bunny-icon-z90yfVlX.webp",Zt="/gacha-tracker-online/assets/kayoko-new-year-icon-lEZ08tqZ.webp",Qt="/gacha-tracker-online/assets/kikyou-icon-OCtBoToh.webp",Xt="/gacha-tracker-online/assets/kotama-camp-icon-j0Rln9bx.webp",es="/gacha-tracker-online/assets/mari-tracksuit-icon-IfCWZ2Vl.webp",ts="/gacha-tracker-online/assets/mimori-swimsuit-icon-ICDRkuj4.webp",ss="/gacha-tracker-online/assets/misaka-mikoto-icon-t-m5DYfT.webp",ns="/gacha-tracker-online/assets/miyako-swimsuit-icon-9NTUwO2x.webp",as="/gacha-tracker-online/assets/neru-bunny-icon-QPIKLGG6.webp",os="/gacha-tracker-online/assets/nonomi-swimsuit-icon-Yyj40vp2.webp",is="/gacha-tracker-online/assets/renge-icon-nMq9xxcQ.webp",rs="/gacha-tracker-online/assets/saki-swimsuit-icon-y07xpALf.webp",ls="/gacha-tracker-online/assets/shiroko-swimsuit-icon-gmc76iBJ.webp",cs="/gacha-tracker-online/assets/shokuhou-misaki-icon-r8ShdIbR.webp",us="/gacha-tracker-online/assets/ui-swimsuit-icon-Y8SkXBci.webp",ds="/gacha-tracker-online/assets/wakamo-swimsuit-icon-aFL8264u.webp",_s="/gacha-tracker-online/assets/yukari-icon-lJbTFHeZ.webp",ms="/gacha-tracker-online/assets/yuuka-tracksuit-icon-obYhk5gg.webp";let _e=[{name:"Akane",alter:"Bunny"},{name:"Asuna",alter:"Bunny"},{name:"Hanako",alter:"Swimsuit"},{name:"Hare",alter:"Camp"},{name:"Haruna",alter:"Tracksuit"},{name:"Himari",alter:""},{name:"Hina",alter:"Swimsuit"},{name:"Hinata",alter:"Swimsuit"},{name:"Iori",alter:"Swimsuit"},{name:"Karin",alter:"Bunny"},{name:"Kayoko",alter:"New Year"},{name:"Kikyou",alter:""},{name:"Kotama",alter:"Camp"},{name:"Mari",alter:"Tracksuit"},{name:"Mimori",alter:"Swimsuit"},{name:"Misaka Mikoto",alter:""},{name:"Miyako",alter:"Swimsuit"},{name:"Neru",alter:"Bunny"},{name:"Nonomi",alter:"Swimsuit"},{name:"Renge",alter:""},{name:"Saki",alter:"Swimsuit"},{name:"Shiroko",alter:"Swimsuit"},{name:"Shokuhou Misaki",alter:""},{name:"Ui",alter:"Swimsuit"},{name:"Wakamo",alter:"Swimsuit"},{name:"Yukari",alter:""},{name:"Yuuka",alter:"Tracksuit"}];_e=_e.map(e=>(e.full_name=e.alter?`${e.name} (${e.alter})`:e.name,e.key=e.full_name.replace(/[()]/g,"").replace(/\s/g,"-").toLocaleLowerCase(),e.icon=new URL(Object.assign({"/src/assets/students/akane-bunny-icon.webp":Yt,"/src/assets/students/asuna-bunny-icon.webp":Ft,"/src/assets/students/hanako-swimsuit-icon.webp":Et,"/src/assets/students/hare-camp-icon.webp":Gt,"/src/assets/students/haruna-tracksuit-icon.webp":jt,"/src/assets/students/himari-icon.webp":qt,"/src/assets/students/hina-swimsuit-icon.webp":Kt,"/src/assets/students/hinata-swimsuit-icon.webp":zt,"/src/assets/students/iori-swimsuit-icon.webp":Wt,"/src/assets/students/karin-bunny-icon.webp":Jt,"/src/assets/students/kayoko-new-year-icon.webp":Zt,"/src/assets/students/kikyou-icon.webp":Qt,"/src/assets/students/kotama-camp-icon.webp":Xt,"/src/assets/students/mari-tracksuit-icon.webp":es,"/src/assets/students/mimori-swimsuit-icon.webp":ts,"/src/assets/students/misaka-mikoto-icon.webp":ss,"/src/assets/students/miyako-swimsuit-icon.webp":ns,"/src/assets/students/neru-bunny-icon.webp":as,"/src/assets/students/nonomi-swimsuit-icon.webp":os,"/src/assets/students/renge-icon.webp":is,"/src/assets/students/saki-swimsuit-icon.webp":rs,"/src/assets/students/shiroko-swimsuit-icon.webp":ls,"/src/assets/students/shokuhou-misaki-icon.webp":cs,"/src/assets/students/ui-swimsuit-icon.webp":us,"/src/assets/students/wakamo-swimsuit-icon.webp":ds,"/src/assets/students/yukari-icon.webp":_s,"/src/assets/students/yuuka-tracksuit-icon.webp":ms})[`/src/assets/students/${e.key}-icon.webp`],import.meta.url).href,e));const Se=_e,fe="/gacha-tracker-online/assets/pyroxene-gBHgCIjf.webp",he="/gacha-tracker-online/assets/recruitment-ticket-NiO_EDI9.webp",$e="chart",ps={__name:"LineChart",props:{labels:{type:Array,required:!0},data:{type:Array,required:!0},pullBanners:{type:Array,default(){return[]}}},setup(e,{expose:t}){const s=e;let n=null;De(s,()=>{i()});const a=new Image;a.src=fe,a.width=15,a.height=15;const o=new Image;o.src=he,o.width=15,o.height=15,ve.register({id:"default",afterDatasetsDraw(l){const _=l.getDatasetMeta(0).data;if(_.length>0){const{ctx:k}=l,S=14*l.currentDevicePixelRatio,U=16*l.currentDevicePixelRatio;_.forEach(({$context:E},B)=>{const A=l.getDatasetMeta(1).data[B],N=E.raw,ee=A.$context.raw;if((N||ee)&&s.pullBanners[B]){const te=N?_[B].x:A.x,G=N?_[B].y:A.y;s.pullBanners[B].forEach((d,g)=>{const w=Pe(Se,{key:d.student_key});if(w){const y=new Image;y.src=w.icon,y.width=S,y.height=U,y.onload=()=>{k.drawImage(y,te-S/2,G-(-10+g*-1*U),S,U)}}})}})}}});const i=()=>{n.data.labels=s.labels,s.data.forEach((l,_)=>{n.data.datasets[_].data=l}),n.update()},p=()=>{n=new ve(document.querySelector(`#${$e}`),{type:"line",data:{labels:[],datasets:[{data:[],borderColor:"#00D8FB",backgroundColor:"#FFFFFF"},{data:[],borderColor:"#FFE9F2",backgroundColor:"#FFFFFF"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},animation:{},scales:{x:{ticks:{autoSkip:!0,maxTicksLimit:10}},y:{beginAtZero:!0}}}})};return pe(()=>{p()}),t({updateChart:i}),(l,_)=>(c(),u("canvas",{id:$e}))}},fs={class:"flex items-center"},hs=["src","title"],j={__name:"HistorySub",props:{icon:{required:!0},iconTitle:{},own:{required:!0},diff:{}},setup(e){const t=n=>{if(n>0)return"text-success";if(n<0)return"text-danger"},s=n=>`(${n>0?"+":""}${xe(n)})`;return(n,a)=>(c(),u("div",fs,[r("img",{class:"w-8 mr-2",src:e.icon,title:e.iconTitle},null,8,hs),r("span",null,L(f(xe)(e.own)),1),e.diff&&e.diff!==0?(c(),u("span",{key:0,class:X(["ml-1 text-xs",t(e.diff)])},L(s(e.diff)),3)):Y("",!0)]))}},Ue="/gacha-tracker-online/assets/icon-pulls-PmRtrI9p.png",ys="/gacha-tracker-online/assets/icon-3-stars-unit-G8a83jjO.png",gs={class:"grid grid-cols-2 gap-3"},bs={class:"col-span-1 border-r"},ks={class:"col-span-1"},ws={__name:"History",props:{item:{required:!0}},setup(e){const t=$(x()),s=n=>n===t.value.format("YYYY-MM-DD")?["text-primary","font-bold"]:[];return(n,a)=>(c(),u("div",gs,[r("div",{class:X(["col-span-2",s(e.item.date)])},L(e.item.date),3),r("div",bs,[h(j,{icon:f(fe),"icon-title":"Pyroxene",own:e.item.pyroxene,diff:e.item.diff_pyroxene},null,8,["icon","own","diff"]),h(j,{icon:f(he),"icon-title":"Pull Ticket",own:e.item.free_pull,diff:e.item.diff_free_pull},null,8,["icon","own","diff"])]),r("div",ks,[h(j,{icon:f(Ue),"icon-title":"Total Pull",own:f(z)(e.item)},null,8,["icon","own"]),h(j,{icon:f(ys),"icon-title":"Spark",own:f(kt)(f(z)(e.item))},null,8,["icon","own"])])]))}},vs={class:"flow-root"},xs={class:"divide-y divide-gray-200 dark:divide-gray-700"},$s={key:0,class:"py-3 sm:py-4"},Ls={__name:"History",props:{items:{required:!0}},setup(e){return(t,s)=>(c(),u("div",vs,[r("ul",xs,[!e.items||e.items.length<=0?(c(),u("li",$s,"No record found.")):(c(!0),u(Z,{key:1},Me(e.items,n=>(c(),u("li",{key:n.date,class:"py-3 sm:py-4"},[h(ws,{item:n},null,8,["item"])]))),128))])]))}};let J=[{date:"2023-09-26",duration:7,student_key:"kayoko-new-year"},{date:"2024-01-09",duration:7,student_key:"hina-swimsuit"},{date:"2024-01-09",duration:7,student_key:"iori-swimsuit"},{date:"2023-12-26",duration:14,student_key:"miyako-swimsuit"},{date:"2023-12-26",duration:14,student_key:"saki-swimsuit"},{date:"2024-01-16",duration:7,student_key:"shiroko-swimsuit"},{date:"2024-01-16",duration:7,student_key:"nonomi-swimsuit"},{date:"2024-01-16",duration:7,student_key:"wakamo-swimsuit"},{date:"2024-01-23",duration:9,student_key:"ui-swimsuit"},{date:"2024-01-23",duration:9,student_key:"hinata-swimsuit"},{date:"2024-02-01",duration:7,student_key:"hanako-swimsuit"},{date:"2024-02-15",duration:7,student_key:"mimori-swimsuit"},{date:"2024-03-16",duration:12,student_key:"haruna-tracksuit"},{date:"2024-03-16",duration:12,student_key:"yuuka-tracksuit"},{date:"2024-03-16",duration:12,student_key:"mari-tracksuit"},{date:"2024-04-18",duration:14,student_key:"misaka-mikoto"},{date:"2024-04-18",duration:14,student_key:"shokuhou-misaki"},{date:"2024-05-02",duration:8,student_key:"yukari"},{date:"2024-05-16",duration:14,student_key:"renge"},{date:"2024-05-16",duration:14,student_key:"kikyou"},{date:"2024-05-30",duration:7,student_key:"himari"},{date:"2024-06-13",duration:7,student_key:"karin-bunny"},{date:"2024-06-13",duration:7,student_key:"neru-bunny"},{date:"2024-06-13",duration:7,student_key:"akane-bunny"},{date:"2024-06-13",duration:7,student_key:"asuna-bunny"},{date:"2024-06-20",duration:14,student_key:"hare-camp"},{date:"2024-06-20",duration:14,student_key:"kotama-camp"}];J=J.map(e=>(e.key=`${e.date}-${e.student_key}`,e));J.sort((e,t)=>e.date>t.date?1:e.date<t.date?-1:0);const Bs=J,Cs={class:"grid grid-cols-10 gap-3 md:items-center"},As={class:"col-span-2 lg:col-span-2"},Ds=["src","title"],Ms={class:"col-span-8 lg:col-span-8"},Ps={__name:"Banner",props:{item:{required:!0},bannerPull:{}},setup(e){const t=e,s=I(),n=$(null),a=Pe(Se,{key:t.item.student_key});De(t,()=>{o()});const o=()=>{const l=s.getters["ba-banner-pull/find"](t.item.key);n.value=l?l.pull:null},i=()=>t.item.diff<=0?" - Live":` - ${t.item.diff} days`,p=()=>{const{item:l}=t,_=l.key;!n.value||n.value<=0?(s.dispatch("ba-banner-pull/delete",_),n.value=null):s.dispatch("ba-banner-pull/save",{key:_,data:{date:l.date,student_key:l.student_key,pull:n.value}})};return pe(()=>{o()}),(l,_)=>(c(),u("div",Cs,[r("div",As,[r("img",{src:f(a).icon,title:f(a).full_name},null,8,Ds)]),r("div",Ms,[r("div",null,L(e.item.date)+L(i()),1),r("div",null,L(f(a).full_name),1),r("div",null,[h(V,{modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=k=>n.value=k),modelModifiers:{number:!0},placeholder:"200",icon:f(Ue),"icon-title":"Pull",type:"number","on-change":p},null,8,["modelValue","icon"])])])]))}},Rs={class:"flow-root"},Is={class:"divide-y divide-gray-200 dark:divide-gray-700"},Ss={key:0,class:"py-3 sm:py-4"},Us={__name:"Banner",setup(e){const t=I(),s=me(()=>t.state["ba-banner-pull"].banner_pull),n=R(x().format("YYYY-MM-DD")),a=Bs.map(o=>{const i=R(o.date);return o.diff=i.diff(n,"day"),o}).filter(o=>o.diff>o.duration*-1);return(o,i)=>(c(),u("div",Rs,[r("ul",Is,[f(a).length<=0?(c(),u("li",Ss,"No banner found.")):(c(!0),u(Z,{key:1},Me(f(a),p=>(c(),u("li",{key:p.key,class:"py-3 sm:py-4"},[h(Ps,{item:p,"banner-pull":s.value[p.key]},null,8,["item","banner-pull"])]))),128))])]))}},Ns="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-left?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M9.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l192%20192c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L77.3%20256%20246.6%2086.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-192%20192z'/%3e%3c/svg%3e",Hs="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/chevron-right?f=classic&s=solid%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20d='M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z'/%3e%3c/svg%3e",Os="data:image/svg+xml,%3c!--%20https://fontawesome.com/icons/calendar?f=classic&s=regular&pc=%252300d8fb%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%2300d8fb'%20d='M152%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H64C28.7%2064%200%2092.7%200%20128v16%2048V448c0%2035.3%2028.7%2064%2064%2064H384c35.3%200%2064-28.7%2064-64V192%20144%20128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24%2010.7-24%2024V64H152V24zM48%20192H400V448c0%208.8-7.2%2016-16%2016H64c-8.8%200-16-7.2-16-16V192z'/%3e%3c/svg%3e",Ts="/gacha-tracker-online/assets/arona-head-5uMSPBb2.png",Vs="/gacha-tracker-online/assets/mika-portrait-iOc64siT.webp",Ys={class:"grid grid-cols-7 gap-4"},Fs={class:"col-span-full md:col-span-5"},Es={class:"flex justify-center text-center"},Gs=["src"],js={class:"mx-4 text-xl md:text-3xl font-bold"},qs=["src"],Ks={class:"flex justify-center"},zs={class:"w-full h-72"},Ws=r("div",{class:"mb-3 text-md md:text-xl font-bold"},"Add",-1),Js={class:"grid grid-cols-4 gap-4"},Zs={class:"col-span-full"},Qs={class:"col-span-2"},Xs={class:"col-span-2"},en={class:"col-span-full md:col-start-2 md:col-end-4 mt-4"},tn=["src"],sn=r("div",{class:"text-md0 md:text-xl font-bold"},"History",-1),nn=r("div",{class:"text-md0 md:text-xl font-bold"},"Upcoming Banners",-1),an={class:"col-span-full md:col-span-1 xl:col-span-2 grid items-center content-end"},on={class:"text-center"},rn=["src"],Le=12e3/30,ln={__name:"Index",setup(e){const t=I(),s=$(x()),n=$([]),a=$([]),o=x().year(),i=x().month()+1,p=x().date(),l=$({date:"",pyroxene:0,free_pull:0}),_=st({day:`${o}-${i}-${p}`,pyroxene:void 0,free_pull:void 0}),k=$({labels:[],data:[],pull_banners:[]}),S=()=>{t.dispatch("ba-currency-own/setGetLatestRecordListen",m=>{if(m){const d=Object.keys(m);d.length>0&&(l.value={date:d[0],...m[d[0]]})}})},U=(m,d)=>{t.dispatch("ba-currency-own/setGetLatestBeforeMonthListener",{year:m,month:d,callback:g=>{const w=[];let y=[],H=0;n.value&&(y=Object.keys(n.value),y.reverse(),H=y.length);for(let b=0;b<H;b++){const C=n.value[y[b]];let v=n.value[y[b+1]];const D={date:y[b],pyroxene:C.pyroxene,free_pull:C.free_pull,diff_pyroxene:null,diff_free_pull:null};!v&&g&&(v=g[Object.keys(g)[0]]),v&&(D.diff_pyroxene=C.pyroxene-v.pyroxene,D.diff_free_pull=C.free_pull-v.free_pull),w.push(D)}a.value=w}})},E=(m,d)=>{t.dispatch("ba-currency-own/setGetRecordsListen",{year:m,month:d,callback:g=>{n.value=g,G(),U(m,d)}})},B=()=>{t.dispatch("ba-banner-pull/setGetUpcomingRecordsListen",m=>{t.commit("ba-banner-pull/setBannerPull",m)})},A=m=>{s.value=m,E(m.year(),m.month()+1)},N=()=>{const m=s.value.add(-1,"month").startOf("month");A(m)},ee=()=>{const m=s.value.add(1,"month").startOf("month");A(m)},te=async()=>{const m=R(_.day),d={pyroxene:_.pyroxene,free_pull:_.free_pull};isNaN(d.pyroxene)&&(d.pyroxene=l.value?l.value.pyroxene:0),isNaN(d.free_pull)&&(d.free_pull=l.value?l.value.free_pull:0),t.dispatch("ba-currency-own/save",{key:m.format("YYYY-MM-DD"),data:d}),_.pyroxene=void 0,_.free_pull=void 0,G()},G=()=>{const m=[],d=[],g=[],w=l.value?R(l.value.date):!1,y=t.state["ba-banner-pull"].banner_pull,H=Object.keys(y);let b=!1,C=!1;const v=[],D=s.value.startOf("month"),Ne=s.value.endOf("month"),He=D.diff(Ne,"day")*-1+1;for(let se=0;se<He;se++){const O=D.add(se,"day"),ne=O.format("YYYY-MM-DD"),ae=n.value?n.value[ne]:!1;let ye=null,ge=null;if(ae&&(ye=z({pyroxene:ae.pyroxene,free_pull:ae.free_pull})),w){const be=w.diff(O,"day");be<=0&&(b===!1?b=be*-1*Le+l.value.pyroxene:b+=Le,y&&(C||(H.forEach(oe=>{const T=y[oe],M=R(T.date),ie=M.diff(w,"day"),re=M.startOf("month"),le=O.startOf("month"),Oe=re.diff(le,"month");ie>0&&Oe<0&&(b-=T.pull*120)}),C=!0),H.forEach(oe=>{const T=y[oe],M=R(T.date),ie=M.diff(w,"day"),re=M.diff(O,"day"),le=M.diff(O,"month");ie>0&&le===0&&re===0&&(b-=T.pull*120)})),ge=z({pyroxene:b,free_pull:l.value.free_pull}));const ke=bt(y,{date:ne});ke.length<=0?v.push(null):v.push(ke)}m.push(ne),d.push(ye),g.push(ge)}k.value.labels=m,k.value.data=[d,g],k.value.pull_banners=v};return pe(()=>{S(),B(),E(o,i)}),(m,d)=>(c(),u("div",Ys,[r("div",Fs,[r("div",Es,[r("img",{src:f(Ns),class:"cursor-pointer select-none",onClick:N},null,8,Gs),r("span",js,L(s.value.format("YYYY-MM")),1),r("img",{src:f(Hs),class:"cursor-pointer select-none",onClick:ee},null,8,qs)]),r("div",Ks,[r("div",zs,[k.value.labels?(c(),Ae(ps,{key:0,labels:k.value.labels,data:k.value.data,"pull-banners":k.value.pull_banners},null,8,["labels","data","pull-banners"])):Y("",!0)])])]),h(K,{class:"col-span-full md:col-span-2"},{body:P(()=>[Ws,r("div",Js,[r("div",Zs,[h(V,{modelValue:_.day,"onUpdate:modelValue":d[0]||(d[0]=g=>_.day=g),icon:f(Os),"icon-title":"Date",type:"date"},null,8,["modelValue","icon"])]),r("div",Qs,[h(V,{modelValue:_.pyroxene,"onUpdate:modelValue":d[1]||(d[1]=g=>_.pyroxene=g),modelModifiers:{number:!0},placeholder:l.value.pyroxene,icon:f(fe),"icon-title":"Pyroxene",type:"number"},null,8,["modelValue","placeholder","icon"])]),r("div",Xs,[h(V,{modelValue:_.free_pull,"onUpdate:modelValue":d[2]||(d[2]=g=>_.free_pull=g),modelModifiers:{number:!0},placeholder:l.value.free_pull,icon:f(he),"icon-title":"Free Pull",type:"number"},null,8,["modelValue","placeholder","icon"])]),r("div",en,[h(Ie,{"on-click":te,primary:""},{default:P(()=>[de(" Save ")]),_:1})])]),r("img",{src:f(Ts),class:"h-32 mt-4 md:mt-0 md:absolute bottom-0 inset-x-0 m-auto"},null,8,tn)]),_:1}),h(K,{class:"h-72 col-span-full overflow-auto md:col-span-3"},{body:P(()=>[sn,h(Ls,{items:a.value},null,8,["items"])]),_:1}),h(K,{class:"max-h-72 col-span-full overflow-auto md:col-span-3 xl:col-span-2"},{body:P(()=>[nn,h(Us)]),_:1}),r("div",an,[r("div",on,[r("img",{class:"inline-block max-w-36",src:f(Vs),title:"My Wife!!!"},null,8,rn)])])]))}},cn=nt({history:at(),routes:[{path:ht(""),component:Vt,children:[{path:"",component:ln}]}]});ot(ft).use(Bt).use(cn).mount("#app");