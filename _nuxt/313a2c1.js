(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,8],{288:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("57312461",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(288)},291:function(t,e,n){var r=n(64)(!1);r.push([t.i,".container[data-v-23c10200]{margin-top:4rem;margin-bottom:4rem}.tags[data-v-23c10200]{font-size:1.8rem;font-weight:800}.mycontent-left[data-v-23c10200]{border-right:1px solid #9c9c9c}@media screen and (max-width:1200px){.only-big[data-v-23c10200]{display:none}}",""]),t.exports=r},294:function(t,e,n){"use strict";var r=n(11),o=n(5),c=n(3),l=n(112),d=n(17),f=n(12),m=n(198),h=n(40),v=n(83),_=n(197),y=n(4),w=n(84).f,C=n(33).f,x=n(16).f,k=n(295),N=n(296).trim,I="Number",T=o.Number,S=T.prototype,M=o.TypeError,E=c("".slice),L=c("".charCodeAt),A=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,o,c,l,d,code,f=_(t,"number");if(v(f))throw M("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=L(f,0))||45===e){if(88===(n=L(f,2))||120===n)return NaN}else if(48===e){switch(L(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=E(f,2)).length,d=0;d<l;d++)if((code=L(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(I,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var O,G=function(t){var e=arguments.length<1?0:T(A(t)),n=this;return h(S,n)&&y((function(){k(n)}))?m(Object(e),n,G):e},F=r?w(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;F.length>P;P++)f(T,O=F[P])&&!f(G,O)&&x(G,O,C(T,O));G.prototype=S,S.constructor=G,d(o,I,G,{constructor:!0})}},295:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},296:function(t,e,n){var r=n(3),o=n(24),c=n(13),l=n(297),d=r("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},297:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},299:function(t,e,n){"use strict";n.r(e);n(26),n(32),n(48),n(67),n(82);var r={name:"TopPageGeneric",props:{name:{type:String,required:!0},description:{type:String,required:!0},tags:{type:Array,required:!0},src_lottie:{type:String,required:!1},src_lottie_player:{type:String,required:!1}},data:function(){return{dynTags:this.tags}},mounted:function(){var t=this;window.setInterval((function(){t.pollTag()}),1e3)},methods:{pollTag:function(){var t=this.dynTags.shift();this.dynTags=this.dynTags.concat(t)}}},o=(n(290),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md"},[e("h1",{staticClass:"header"},[t._v(t._s(t.name))])]),t._v(" "),e("div",{staticClass:"col-md"},[e("p",{staticClass:"snippet"},[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 align-self-center mycontent-left p-0 only-big"},[e("script",{attrs:{src:t.src_lottie}}),t._v(" "),e("lottie-player",{staticClass:"p-0 m-0",staticStyle:{width:"90px",height:"90px",padding:"none",margin:"none"},attrs:{src:t.src_lottie_player,background:"transparent",speed:"1",loop:"",autoplay:""}})],1),t._v(" "),e("div",{staticClass:"col-lg tags align-self-center margin-tags"},[t._v("\n        # "+t._s(t.dynTags[0])+"\n      ")])])])])}),[],!1,null,"23c10200",null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);n(82),n(26),n(294);var r={name:"CardComponent",props:{path:{type:String,required:!1},id:{type:Number,required:!1},name:{type:String,required:!0},image:{type:String,required:!0}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("NuxtLink",{staticClass:"card-container",attrs:{to:"/".concat(t.path,"/").concat(t.id)}},[e("div",{staticClass:"external"},[e("div",[e("img",{staticClass:"card-image",attrs:{src:t.image,alt:"".concat(t.name,"-image")}})]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.name))])])])}),[],!1,null,"232231a2",null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);n(26),n(32),n(48);var r=n(10),o=(n(66),n(15),n(34),n(85),{name:"GeospatialPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.get("/api/machineLearning-works");case 3:return r=e.sent,data=r.data,o=["ML","AI","Data"],data.forEach((function(t){o.push(t.shortName)})),e.abrupt("return",{works:data,tags:o});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{header:{name:"Machine Learning",description:"Inside this section it is possible to find some simple data analysis performed with a focus on the machine learning world. Here I will upload experiments with different kind of Machine Learning algorithms."},pathToMachineLearning:"machine-learning",animation:{src_lottie:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",src_lottie_player:"https://assets7.lottiefiles.com/private_files/lf30_8npirptd.json"}}},head:function(){return{title:"Mapflap | Machine Learning",meta:[{hid:"descriptionML",name:"description",content:"in the current page all the available works for the Machine Learning section are shown. A brief introductory description of the page is also provided"},{hid:"keywordsML",name:"keywords",content:[this.tags.toString(),"Machine Learning","Data Analysis"]}]}}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("TopPageGeneric",{attrs:{name:t.header.name,description:t.header.description,tags:t.tags,src_lottie:t.animation.src_lottie,src_lottie_player:t.animation.src_lottie_player}}),t._v(" "),e("hr"),t._v(" "),0==t.works.length?e("div",{staticClass:"row"},[e("div",{staticClass:"col-md align-self-center"},[e("script",{attrs:{src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}}),t._v(" "),e("lottie-player",{staticStyle:{height:"500px"},attrs:{src:"https://assets6.lottiefiles.com/packages/lf20_fQij9m.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),t._v(" "),t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"row mt-4"},t._l(t.works,(function(n){return e("CardComponent",{key:n.codeWork,staticClass:"col-xl-6 p-2",attrs:{id:n.codeWork,name:n.name,image:n.image,path:t.pathToMachineLearning}})})),1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col align-self-center",staticStyle:{"text-align":"center"}},[t("p",{staticClass:"header"},[this._v("Work in progress ... ")])])}],!1,null,"10bfa8f0",null);e.default=component.exports;installComponents(component,{TopPageGeneric:n(299).default,CardComponent:n(306).default})}}]);