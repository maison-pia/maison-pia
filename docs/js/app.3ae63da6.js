(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0740":function(t,e,n){"use strict";n("c8b6")},"15c9":function(t,e,n){t.exports=n.p+"img/banner.5e833e8f.webp"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"App",data:function(){return{}}},i=s,c=n("2877"),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"mt-5",attrs:{id:"home"}},[a("v-parallax",{attrs:{src:n("15c9")}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("div",[a("p",{staticClass:"title-banner"},[a("span",{staticClass:"col-8",staticStyle:{"background-color":"rgba(241, 148, 138, 0.9)"}},[t._v("Maison Pia : Colocation Senior ")])])])])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"part1"},[a("Coordonnees"),a("Intro")],1)])],1)])},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("ul",{staticClass:"data"},[n("li",{staticStyle:{"font-weight":"bold"}},[t._v("Sokphea TAN")]),n("li",{staticClass:"mt-2"},[n("v-icon",{staticClass:"mr-3"},[t._v(t._s(t.icons.mdiMapMarker))]),t._v("13 lotissement de la Lauzerdié 81110 VERDALLE ")],1),n("li",{staticClass:"mt-2"},[n("v-icon",{staticClass:"mr-3"},[t._v(t._s(t.icons.mdiCity))]),t._v("A 30 min de CASTRES ")],1),n("li",{staticClass:"mt-2"},[n("v-icon",{staticClass:"mr-3"},[t._v(t._s(t.icons.mdiPhone))]),t._v("07.70.99.63.25 ")],1),n("li",{staticClass:"mt-2"},[n("v-icon",{staticClass:"mr-3"},[t._v(t._s(t.icons.mdiEmail))]),n("a",{attrs:{href:"mailto:sokphea.tan@gmail.com"}},[t._v("sokphea.tan@gmail.com")])],1),n("li",{staticClass:"mt-2"},[t._v("A votre écoute !")])])])},v=[],b=n("94ed"),_={name:"Coordonnees",components:{},data:function(){return{icons:{mdiMapMarker:b["c"],mdiCity:b["a"],mdiPhone:b["d"],mdiEmail:b["b"]}}}},h=_,C=(n("9778"),n("6544")),g=n.n(C),y=n("132d"),w=Object(c["a"])(h,m,v,!1,null,null,null),x=w.exports;g()(w,{VIcon:y["a"]});var j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro col-lg-6 col-sm-12 col-xs-12"},[a("img",{staticStyle:{width:"50%"},attrs:{src:n("b640"),alt:"logo"}}),a("div",{staticClass:"sentences mt-5"},[a("p",[t._v("Rompre avec l'isolement")]),a("p",{staticClass:"ml-4"},[t._v("Garder son indépendance")]),a("p",{staticClass:"ml-4"},[t._v("Préserver son autonomie")])])])}],P={name:"Coordonnees",components:{},data:function(){return{}}},S=P,E=(n("0740"),Object(c["a"])(S,j,O,!1,null,null,null)),k=E.exports,M={name:"Home",components:{Coordonnees:x,Intro:k}},A=M,$=(n("cccb"),n("62ad")),T=n("8b9c"),V=n("0fd9"),R=Object(c["a"])(A,f,p,!1,null,null,null),I=R.exports;g()(R,{VCol:$["a"],VParallax:T["a"],VRow:V["a"]}),a["default"].use(d["a"]);var L=new d["a"]({routes:[{path:"/",component:I}]}),J=n("f309");a["default"].use(J["a"]);var z=new J["a"]({}),D=n("1e18");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(D["a"]),new a["default"]({vuetify:z,router:L,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},9778:function(t,e,n){"use strict";n("a5f5")},a5f5:function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.934638b8.jpg"},c8b6:function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.3ae63da6.js.map