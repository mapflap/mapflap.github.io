(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,6],{288:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("2d70d279",content,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r(288)},291:function(t,e,r){var n=r(64)(!1);n.push([t.i,".center[data-v-6a14db8c]{text-align:center}.mail[data-v-6a14db8c]{color:#000}.bold[data-v-6a14db8c]{font-weight:600}.image-s[data-v-6a14db8c]{height:380px;border-radius:10px}.card-image[data-v-6a14db8c]{height:365.9px}.marg[data-v-6a14db8c]{margin:10px}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);var n={name:"StaticCardComponent",props:{image:{type:String,required:!0},title:{type:String,required:!1,default:null},footer:{type:String,required:!1,default:null}}},c=(r(290),r(25)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"center"},[t.title?e("h2",{staticClass:"bold"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"image-s center marg"},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.image),alt:"".concat(t.title,"-img")}})]),t._v(" "),e("h2",[t.footer?e("a",{staticClass:"mail"},[t._v(t._s(t.footer))]):t._e()])])}),[],!1,null,"6a14db8c",null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);r(26),r(32),r(48);var n={name:"TitleDescription",props:{name:{type:String,required:!1},description:{type:String,required:!0}}},c=r(25),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"header"},[t._v(t._s(t.name))]),t._v(" "),e("p",{staticClass:"snippet"},[t._v("\n    "+t._s(t.description)+"\n  ")])])}),[],!1,null,"440c5def",null);e.default=component.exports},307:function(t,e,r){"use strict";r.r(e);r(26),r(32),r(48);var n={name:"TopWorkDescriptionComponent",props:{image:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0}}},c=r(25),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 order-lg-1 order-2"},[e("StaticCardComponent",{attrs:{image:t.image}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 order-lg-2 order-1"},[e("TitleDescription",{attrs:{name:t.name,description:t.description}})],1)])])}),[],!1,null,"5dd4fefc",null);e.default=component.exports;installComponents(component,{StaticCardComponent:r(293).default,TitleDescription:r(299).default})}}]);