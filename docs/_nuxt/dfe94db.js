(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{544:function(t,e,n){var content=n(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("b6672e3c",content,!0,{sourceMap:!1})},623:function(t,e,n){"use strict";n(544)},624:function(t,e,n){var r=n(37)(!1);r.push([t.i,".memory span{position:relative;display:inline-block;margin-left:100px;margin-top:15px;font-size:26px;font-family:Consolas}.memory span:first-of-type{top:70px;left:150px}.memory span:nth-of-type(2){top:160px;left:180px}",""]),t.exports=r},681:function(t,e,n){"use strict";n.r(e);n(46),n(29),n(45),n(75),n(39),n(76);var r=n(30),o=(n(63),n(62));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{msg:"testing ram",f:""}},watch:{currentKey:function(t){var e=t.substring(0,1);switch(console.log(e),e){case"F":this.execF();break;case"O":this.execO();break;case"M":this.execM()}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({currentKey:function(t){return t.common.currentKey}})),mounted:function(){var t=this;this.clockInterval=setInterval((function(){t.msg="ram good",t.f="F"}),1e3)},methods:{execF:function(){this.$router.go(-1)},execO:function(){this.$router.push("/")},execM:function(){this.$router.push("/menu")}}},l=(n(623),n(10)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"gsm19t-lcd"},[n("div",{staticClass:"memory"},[n("span",[t._v(t._s(t.msg))]),t._v(" "),n("span",[t._v(t._s(t.f))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);