(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2,5,6,7,9],{289:function(t,e,r){var content=r(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("2d70d279",content,!0,{sourceMap:!1})},292:function(t,e,r){"use strict";r(289)},293:function(t,e,r){var n=r(64)(!1);n.push([t.i,".center[data-v-6a14db8c]{text-align:center}.mail[data-v-6a14db8c]{color:#000}.bold[data-v-6a14db8c]{font-weight:600}.image-s[data-v-6a14db8c]{height:380px;border-radius:10px}.card-image[data-v-6a14db8c]{height:365.9px}.marg[data-v-6a14db8c]{margin:10px}",""]),t.exports=n},298:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("7b39ea90",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r.r(e);var n={name:"StaticCardComponent",props:{image:{type:String,required:!0},title:{type:String,required:!1,default:null},footer:{type:String,required:!1,default:null}}},o=(r(292),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center"},[t.title?e("h2",{staticClass:"bold"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"image-s center marg"},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.image),alt:"".concat(t.title,"-img")}})]),t._v(" "),e("h2",[t.footer?e("a",{staticClass:"mail"},[t._v(t._s(t.footer))]):t._e()])])}),[],!1,null,"6a14db8c",null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);var n={props:{items:{type:Array,required:!0}}},o=(r(304),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("h6",t._l(t.items,(function(r,n){return e("span",{key:n,staticClass:"crumb"},[e("NuxtLink",{attrs:{to:r.url}},[e("span",[t._v(t._s(r.label))])])],1)})),0)}),[],!1,null,"0aea9082",null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);r(26);var n={name:"TechnologyComponent",props:{image:{type:String,required:!0},name:{type:String,required:!0}}},o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("img",{attrs:{height:"80px",width:"80px",src:t.image,alt:"image - ".concat(t.name),title:t.name}})])])}),[],!1,null,"04fd50eb",null);e.default=component.exports},303:function(t,e,r){"use strict";r.r(e);r(26),r(32),r(48);var n={name:"TitleDescription",props:{name:{type:String,required:!1},description:{type:String,required:!0}}},o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"header"},[t._v(t._s(t.name))]),t._v(" "),e("p",{staticClass:"snippet"},[t._v("\n    "+t._s(t.description)+"\n  ")])])}),[],!1,null,"440c5def",null);e.default=component.exports},304:function(t,e,r){"use strict";r(298)},305:function(t,e,r){var n=r(64)(!1);n.push([t.i,".crumb[data-v-0aea9082]{display:inline-block;padding:10px 15px;margin-right:2px;background:#3a85a6;-webkit-clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%);clip-path:polygon(0 0,92% 0,100% 50%,92% 100%,0 100%,8% 50%)}.crumb[data-v-0aea9082]:hover{background:#296078}.crumb span[data-v-0aea9082]{color:#fff}",""]),t.exports=n},307:function(t,e,r){"use strict";r.r(e);r(26),r(32),r(48);var n={name:"TopWorkDescriptionComponent",props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0}}},o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 order-lg-1 order-2"},[e("StaticCardComponent",{attrs:{image:t.image}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 order-lg-2 order-1"},[e("TitleDescription",{attrs:{name:t.name,description:t.description}})],1)])])}),[],!1,null,"5dd4fefc",null);e.default=component.exports;installComponents(component,{StaticCardComponent:r(300).default,TitleDescription:r(303).default})},315:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("5b845e65",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(315)},327:function(t,e,r){var n=r(64)(!1);n.push([t.i,".sub-sub-title[data-v-e18789dc]{font-weight:600}.button[data-v-e18789dc]{background-color:#a65a3a;color:#fff;width:22rem;transition:.5s}.button[data-v-e18789dc],.button-deactivated[data-v-e18789dc]{padding:1rem 4rem;border-radius:100rem;font-weight:600}.button-deactivated[data-v-e18789dc]{background-color:#b8acbe;color:#000;width:24rem}.button[data-v-e18789dc]:hover{width:25.5rem}.center[data-v-e18789dc]{text-align:center}",""]),t.exports=n},337:function(t,e,r){"use strict";r.r(e);r(26),r(32),r(48);var n=r(10),o=(r(66),r(301)),c=r(302),l={name:"SingleGeospatialWork",components:{BreadCrump:o.default,TechnologyComponent:c.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,data,l,i,code,d,element;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.$axios,o=r.params.id,e.next=4,n.get("/api/machineLearning-work/"+o);case 4:for(c=e.sent,data=c.data,l=[],i=0;i<data.technologies.length;i++)code=data.technologies[i].codeTech,d=data.technologies[i].name,element=data.technologies[i].image,l.push({id:code,name:d,image:element});return e.abrupt("return",{work:{id:data.codeWork,name:data.name,image:data.image,description:data.description,technologies:l,url:data.url,finished:data.finished,short:data.shortName}});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{path:"all-places"}},head:function(){return{title:" ".concat(this.work.short," | Machine Learning"),meta:[{hid:"descriptionSingleML",name:"description",content:"specific ML work and its related info: Name, description, image, technologies and related link"},{hid:"keywordsSingleML",name:"keywords",content:["Machine Learning","Data analysis","Mapflap",this.work.short,this.work.technologies]}]}},computed:{breadcrumps:function(){return[{label:"Machine Learning",url:"/machine-learning"}]}}},d=(r(326),r(25)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("BreadCrump",{attrs:{items:t.breadcrumps}}),t._v(" "),e("TopWorkDescription",{attrs:{image:t.work.image,name:t.work.name,description:t.work.description}}),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col center"},[e("p",{staticClass:"subtitle"},[t._v("Used technologies")]),t._v(" "),e("div",{staticClass:"row justify-content-center"},t._l(t.work.technologies,(function(t){return e("TechnologyComponent",{key:t.id,staticClass:"col m-2",attrs:{image:t.image,name:t.name}})})),1)]),t._v(" "),e("div",{staticClass:"col center"},[e("p",{staticClass:"subtitle"},[t._v("Reach the project")]),t._v(" "),1==t.work.finished?e("div",{staticClass:"center"},[e("a",{attrs:{href:t.work.url}},[e("div",{staticClass:"button btn mt-3"},[t._v("Have a look!")])])]):t._e(),t._v(" "),0==t.work.finished?e("div",{staticClass:"center"},[e("div",{staticClass:"button-deactivated btn mt-3"},[t._v("Still working on it ...")])]):t._e()])])],1)}),[],!1,null,"e18789dc",null);e.default=component.exports;installComponents(component,{BreadCrump:r(301).default,TopWorkDescription:r(307).default,TechnologyComponent:r(302).default})}}]);