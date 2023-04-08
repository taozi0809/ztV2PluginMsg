(function(){var t={7153:function(t,e,i){"use strict";var n=i(277),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"header"},[e("div",{staticClass:"btn",class:{active:"PdfCanvas"===t.componentName},on:{click:function(e){return t.handleClick("PdfCanvas")}}},[t._v(" pdf转canvas渲染 ")]),e("div",{staticClass:"btn",class:{active:"ImgCard"===t.componentName},on:{click:function(e){return t.handleClick("ImgCard")}}},[t._v(" 图片渲染 ")]),e("div",{staticClass:"btn",class:{active:"ImgCanvas"===t.componentName},on:{click:function(e){return t.handleClick("ImgCanvas")}}},[t._v(" 图片转canvas渲染 ")]),t.isVip?t._e():e("div",{staticClass:"btn",on:{click:t.handleClickVip}},[t._v("成为会员")]),t.isVip?e("div",{staticClass:"txt"},[t._v("会员可查看全部")]):t._e()]),e(t.componentName,{tag:"component",attrs:{images:t.images}}),e("div",{staticClass:"pages-index"},[t._v(t._s(t.activeIndex)+"/10")])],1)},o=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ImgCcard"},t._l(t.images,(function(t){return e("div",{key:t.imgUrl,staticClass:"box"},[e("img",{attrs:{src:t.imgUrl,alt:""}})])})),0)},l=[],u={name:"ImgCard",data(){return{}},props:{images:{type:Array,default:()=>[]}},methods:{}},d=u,f=i(9766),g=(0,f.Z)(d,c,l,!1,null,"096d6908",null),p=g.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ImgCanvas"},t._l(t.images,(function(t,i){return e("div",{key:t.imageUrl,staticClass:"box"},[e("canvas",{attrs:{id:`mycanvas-${i+1}`,width:"800",height:"1200"}})])})),0)},h=[],v={name:"ImgCanvas",data(){return{}},props:{images:{type:Array,default:()=>[]}},mounted(){this.startDoDraw(this.images)},watch:{images(t,e){t!==e&&t.forEach(((t,e)=>{e>=5&&this.doDraw(t.imgUrl,"mycanvas-"+(e+1))}))}},methods:{startDoDraw(t){t.forEach(((t,e)=>{this.doDraw(t.imgUrl,"mycanvas-"+(e+1))}))},doDraw(t,e){var i=this;this.$nextTick((()=>{var n=document.getElementById(e);if(!n)return!1;var a=n.getContext("2d"),r=new Image;r.src=t,r.onload=function(){if(r.complete){r.width=620.5,r.height=877.5;var t=i.getPixelRatio(a);n.setAttribute("width",r.width),n.setAttribute("height",r.height),a.drawImage(r,0,0,r.width*t,r.height*t)}}}))},getPixelRatio(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}}},_=v,x=(0,f.Z)(_,m,h,!1,null,"2a708d2e",null),w=x.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"PdfCanvas"},[e("div",{style:{width:t.pdf_div_width,margin:"0 auto"}},t._l(t.pdf_pages,(function(t){return e("canvas",{key:t,attrs:{id:"the_canvas"+t}})})),0)])},k=[];let b=i(8528);b.GlobalWorkerOptions.workerSrc=i(4257);var y={name:"PdfCanvas",data(){return{pdf_scale:1,pdf_pages:[],pdf_div_width:"",pdf_src:"/static/pdfs/01.pdf"}},props:{images:{type:Array,default:()=>[]}},mounted(){this.get_pdfurl()},watch:{images(t,e){t!==e&&this._loadFile(this.pdf_src,t.length)}},methods:{get_pdfurl(){this._loadFile(this.pdf_src,this.images.length)},_loadFile(t,e){let i=b.getDocument(t);i.promise.then((t=>{this.pdfDoc=t,this.pdf_pages=e>5?10:e,this.$nextTick((()=>{this._renderPage(1)}))}))},_renderPage(t){const e=this;this.pdfDoc.getPage(t).then((i=>{let n=document.getElementById("the_canvas"+t),a=n.getContext("2d"),r=window.devicePixelRatio||1,s=a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1,o=r/s,c=i.getViewport({scale:this.pdf_scale});n.width=c.width*o,n.height=c.height*o,n.style.width=c.width+"px",e.pdf_div_width=c.width+"px",n.style.height=c.height+"px",a.setTransform(o,0,0,o,0,0);let l={canvasContext:a,viewport:c};i.render(l),this.pdf_pages>t&&this._renderPage(t+1)}))}}},P=y,j=(0,f.Z)(P,C,k,!1,null,"6c6fa882",null),O=j.exports,I={name:"HelloWorld",components:{ImgCard:p,ImgCanvas:w,PdfCanvas:O},data(){return{componentName:"PdfCanvas",isVip:!1,activeIndex:5,images:[{imgUrl:i(2734)},{imgUrl:i(2445)},{imgUrl:i(3187)},{imgUrl:i(410)},{imgUrl:i(5787)}],images2:[{imgUrl:i(3262)},{imgUrl:i(4434)},{imgUrl:i(8881)},{imgUrl:i(9195)},{imgUrl:i(1645)}]}},methods:{handleClick(t){this.componentName=t},handleClickVip(){this.isVip=!0,this.images=[...this.images,...this.images2],this.activeIndex=10}}},S=I,U=(0,f.Z)(S,s,o,!1,null,"a25261ea",null),R=U.exports,D={name:"App",components:{HelloWorld:R}},V=D,B=(0,f.Z)(V,a,r,!1,null,null,null),T=B.exports;const Z=i(3691),E=t=>{E.installed||(E.installed,Z.keys().forEach((e=>{const i=Z(e),n=i.default.name;t.component(n,i.default||i)})))};"undefined"!==typeof window&&window.Vue&&E(window.Vue);var N={install:E};n.ZP.config.productionTip=!1,n.ZP.use(N),new n.ZP({render:t=>t(T)}).$mount("#app")},4366:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"msg"},[t._v(t._s(t.msg))])},a=[],r={name:"zt-vue2-msg-demo",data(){return{msg:"123"}}},s=r,o=i(9766),c=(0,o.Z)(s,n,a,!1,null,null,null),l=c.exports},3691:function(t,e,i){var n={"./lib/msg/index.vue":4366};function a(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=3691},2734:function(t,e,i){"use strict";t.exports=i.p+"img/01.cfa7e19e.jpg"},2445:function(t,e,i){"use strict";t.exports=i.p+"img/02.87498f1a.jpg"},3187:function(t,e,i){"use strict";t.exports=i.p+"img/03.397ea383.jpg"},410:function(t,e,i){"use strict";t.exports=i.p+"img/04.f60eb4dc.jpg"},5787:function(t,e,i){"use strict";t.exports=i.p+"img/05.b01d1c28.jpg"},3262:function(t,e,i){"use strict";t.exports=i.p+"img/06.475e0f3f.jpg"},4434:function(t,e,i){"use strict";t.exports=i.p+"img/07.24435bc4.jpg"},8881:function(t,e,i){"use strict";t.exports=i.p+"img/08.8999a366.jpg"},9195:function(t,e,i){"use strict";t.exports=i.p+"img/09.816cfc49.jpg"},1645:function(t,e,i){"use strict";t.exports=i.p+"img/10.6c1ffe32.jpg"},9572:function(){},5229:function(){},4952:function(){},5286:function(){},9625:function(){}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,a,r){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],r=t[u][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,a,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="ztV2PluginMsg/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,s=n[0],o=n[1],c=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(c)var u=c(i)}for(e&&e(n);l<s.length;l++)r=s[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},n=self["webpackChunkvue2_plugins"]=self["webpackChunkvue2_plugins"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7153)}));n=i.O(n)})();
//# sourceMappingURL=app.cb540374.js.map