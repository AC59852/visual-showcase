(function(e){function t(t){for(var a,n,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"35b44645","chunk-67c5fbf6":"a9ab0a1d"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-67c5fbf6":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-67c5fbf6":"ffa54171"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],p.parentNode.removeChild(p),r(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"07a9":function(e,t,r){},1301:function(e,t,r){"use strict";r("07a9")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=r("2877"),i={},c=Object(s["a"])(i,n,o,!1,null,null,null),l=c.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"lbCon"},[r("div",{staticClass:"lbWrapper"},[r("div",{staticClass:"lbText"},[r("h2",[e._v(e._s(e.currentProject.name))]),r("p",{staticClass:"lbPara1"},[e._v(e._s(e.currentProject.desc1))]),r("p",{staticClass:"lbPara2"},[e._v(e._s(e.currentProject.desc2))]),r("div",{staticClass:"lbBtn"},[r("router-link",{attrs:{to:e.currentProject.link}},[e._v("View Project")])],1)]),r("div",{staticClass:"lbImg",style:{backgroundImage:"url("+e.currentProject.image+")"}},[r("span",{on:{click:function(t){return e.closeLb()}}},[e._v("X")])])])]),r("Navigation",{staticClass:"navigation"}),r("div",{staticClass:"homeContent"},[r("div",{staticClass:"contentCon"},e._l(e.projects,(function(t){return r("MainContent",{key:t.id,attrs:{project:t},nativeOn:{click:function(r){e.lbContent(t),e.revealLb()}}})})),1)])],1)},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"navTop"},[r("h1",[e._v("Web Visual Showcase")]),r("div",{on:{click:function(t){return e.hideNav()}}},[e._v("hide nav")]),e._m(0)]),e._m(1)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"socialsCon"},[r("div",{staticClass:"socialItem"},[e._v("S1")]),r("div",{staticClass:"socialItem"},[e._v("S2")]),r("div",{staticClass:"socialItem"},[e._v("S3")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navContent"},[r("h2",[e._v("What is This?")]),r("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta aut ad voluptas iste pariatur minima, itaque dolorem exercitationem dolor dolores quaerat, blanditiis labore in maiores non harum libero omnis!")]),r("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium veniam commodi voluptas dolorem ratione vero doloribus natus atque, eos mollitia nulla. Cupiditate quos facere fuga? Corporis eligendi consequatur aliquam.")])])}],f={props:["project","id"],methods:{hideNav(){let e=document.querySelector(".navigation"),t=document.querySelector(".contentCon"),r=document.querySelectorAll(".project");e.classList.add("hideNav"),t.classList.add("homeStretch"),r.forEach(e=>{e.classList.add("shrinkProject")})}}},v=f,b=Object(s["a"])(v,m,h,!1,null,null,null),j=b.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.project.class,style:{backgroundImage:"url("+e.project.image+")"}},[r("div",{staticClass:"text"},[r("h2",[e._v(e._s(e.project.name))])])])},y=[],C={props:["project","id"]},_=C,k=(r("1301"),Object(s["a"])(_,g,y,!1,null,null,null)),S=k.exports,L={name:"Home",mounted(){},data(){return{projects:[{id:1,name:"project1",desc1:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,",desc2:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",image:"./images/canada.jpg",link:"project1",class:"project project1"},{id:2,name:"project2",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/ireland.jpg",link:"project1",class:"project project2"},{id:3,name:"project3",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/japan.jpg",link:"project1",class:"project project3"},{id:4,name:"project4",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/france.jpg",link:"project1",class:"project project4"},{id:5,name:"project5",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/ireland.jpg",link:"project1",class:"project project5"},{id:6,name:"project6",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/japan.jpg",link:"project1",class:"project project6"},{id:7,name:"project7",desc1:"this is a description for project 1",desc2:"this is a description for project 1",image:"./images/canada.jpg",link:"project1",class:"project project7"}],currentProject:{}}},methods:{lbContent(e){this.currentProject=e},revealLb(){let e=document.querySelector(".lbCon"),t=document.querySelector(".lbCon h2"),r=document.querySelector(".lbPara1"),a=document.querySelector(".lbPara2"),n=document.querySelector(".lbImg span"),o=document.querySelector(".lbBtn");e.classList.contains("lbScale")||(e.classList.add("scale-in-center"),setTimeout(()=>{e.classList.remove("scale-in-center"),e.classList.add("lbScale"),t.classList.add("revealTitle"),n.classList.add("revealClose"),r.classList.add("revealPara1"),o.classList.add("revealBtn")},600),setTimeout(()=>{a.classList.add("revealPara2")},800))},closeLb(){let e=document.querySelector(".lbCon"),t=document.querySelector(".lbCon h2"),r=document.querySelector(".lbPara1"),a=document.querySelector(".lbPara2"),n=document.querySelector(".lbImg span"),o=document.querySelector(".lbBtn");t.classList.remove("revealTitle"),r.classList.remove("revealPara1"),o.classList.remove("revealBtn"),setTimeout(()=>{a.classList.remove("revealPara2"),n.classList.remove("revealClose")},300),setTimeout(()=>{e.classList.add("scale-out-center")},1500),e.addEventListener("animationend",()=>{e.classList.remove("scale-out-center"),e.classList.remove("lbScale")})}},components:{Navigation:j,MainContent:S}},w=L,P=(r("cccb"),Object(s["a"])(w,d,p,!1,null,null,null)),q=P.exports;a["a"].use(u["a"]);const x=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/project1",name:"Project Example 1",component:()=>r.e("chunk-67c5fbf6").then(r.bind(null,"27d4"))}],E=new u["a"]({routes:x});var O=E;a["a"].config.productionTip=!1,new a["a"]({router:O,render:e=>e(l)}).$mount("#app")},"5ced":function(e,t,r){},cccb:function(e,t,r){"use strict";r("5ced")}});
//# sourceMappingURL=app.f9e67334.js.map