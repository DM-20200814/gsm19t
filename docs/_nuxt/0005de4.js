(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{547:function(t,e,n){var content=n(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("75484904",content,!0,{sourceMap:!1})},629:function(t,e,n){"use strict";n(547)},630:function(t,e,n){var o=n(37)(!1);o.push([t.i,".noise span{position:relative;display:inline-block;font-size:26px;font-family:Consolas}.noise span:first-of-type{top:50px;left:100px}.noise span:nth-of-type(2){position:absolute;top:130px;left:100px}",""]),t.exports=o},685:function(t,e,n){"use strict";n.r(e);n(46),n(29),n(45),n(75),n(39),n(76);var o=n(30),r=(n(63),n(62));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{noise:"99"}},watch:{currentKey:function(t){var e=t.substring(0,1);switch(console.log(e),e){case"F":this.execF();break;case"O":this.execO();break;case"M":this.execM()}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({currentKey:function(t){return t.common.currentKey}})),mounted:function(){var t=this;this.clockInterval=setInterval((function(){t.noise=String(85+Math.round(15*Math.random()-1))}),500)},methods:{execF:function(){this.$router.go(-1)},execO:function(){this.$router.push("/")},execM:function(){this.$router.push("/menu")}}},f=(n(629),n(10)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"gsm19t-lcd"},[n("div",{staticClass:"noise"},[n("span",[t._v("lower00"+t._s(t.noise))]),t._v(" "),n("span",[t._v("F-ok")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);