(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{526:function(e,t,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("6f438b30",content,!0,{sourceMap:!1})},587:function(e,t,n){"use strict";n(526)},588:function(e,t,n){var r=n(37)(!1);r.push([e.i,".erase_2 span{position:absolute;display:inline-block;margin-left:100px;margin-top:15px;font-size:26px;font-family:Consolas}.erase_2 span:first-of-type{top:10px;left:135px}.erase_2 span:nth-of-type(2){top:50px;left:60px}.erase_2 span:nth-of-type(3){top:170px;left:420px}",""]),e.exports=r},663:function(e,t,n){"use strict";n.r(t);n(46),n(29),n(45),n(75),n(39),n(76);var r=n(30),o=(n(63),n(62));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={data:function(){return{msg:"please wait",f:"",num:0,nums:""}},watch:{currentKey:function(e){var t=e.substring(0,1);switch(console.log(t),t){case"F":this.execF();break;case"O":this.execO();break;case"M":this.execM()}}},mounted:function(){var e=this;this.clockInterval=setInterval((function(){e.num+=10,e.nums=String(e.num),e.num>=100&&(e.msg="",e.f="F",clearInterval(e.clockInterval))}),500)},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({currentKey:function(e){return e.common.currentKey}})),methods:{execF:function(){this.$router.push("/menu")},execO:function(){this.$router.push("/")},execM:function(){this.$router.push("/menu")}}},f=(n(587),n(10)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"gsm19t-lcd"},[n("div",{staticClass:"erase_2"},[n("span",[e._v(e._s(e.msg))]),e._v(" "),n("span",[e._v(e._s(Array(3-this.nums.length+1).join(0)+this.nums)+"% of memory erased")]),e._v(" "),n("span",[e._v(e._s(e.f))])])])])}),[],!1,null,null,null);t.default=component.exports}}]);