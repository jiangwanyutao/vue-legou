(function(e){function t(t){for(var a,c,o=t[0],u=t[1],s=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={app:0},i={app:0},r=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-061dcb0e":"c79c65c8","chunk-0715632c":"78ee8e4d","chunk-0d5f983a":"d26c0fc7","chunk-1c43ec66":"573c8858","chunk-1df6a00a":"09451bcb","chunk-21edc035":"2fa76c89","chunk-3c70528e":"ca64d861","chunk-5c22e144":"355d0d78","chunk-5dea0225":"cd269268","chunk-73658fe6":"2694d624","chunk-f6561982":"d48471f5","chunk-5e6936af":"149a4963","chunk-6046ad07":"8cf5545f","chunk-638a7745":"8fb41682","chunk-6b25815e":"16b214aa","chunk-7a0aefe8":"8f3567d0","chunk-f3b547c0":"22e96b58"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-061dcb0e":1,"chunk-0715632c":1,"chunk-0d5f983a":1,"chunk-1c43ec66":1,"chunk-1df6a00a":1,"chunk-21edc035":1,"chunk-3c70528e":1,"chunk-5c22e144":1,"chunk-73658fe6":1,"chunk-f6561982":1,"chunk-5e6936af":1,"chunk-6046ad07":1,"chunk-638a7745":1,"chunk-6b25815e":1,"chunk-7a0aefe8":1,"chunk-f3b547c0":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-061dcb0e":"936fc630","chunk-0715632c":"9a6043c4","chunk-0d5f983a":"ad434b7f","chunk-1c43ec66":"30b98034","chunk-1df6a00a":"5429e7c9","chunk-21edc035":"d67bf54c","chunk-3c70528e":"3287ebfb","chunk-5c22e144":"cb5f26b8","chunk-5dea0225":"31d6cfe0","chunk-73658fe6":"5c826b7c","chunk-f6561982":"85e5bfd8","chunk-5e6936af":"00adb95c","chunk-6046ad07":"69f940fd","chunk-638a7745":"f3c43022","chunk-6b25815e":"99254373","chunk-7a0aefe8":"d9336f73","chunk-f3b547c0":"21a392bf"}[e]+".css",i=u.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===a||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c6d":function(e,t,n){"use strict";n("e7e5");var a,c=n("d399"),i=(n("d3b7"),n("bc3a")),r=n.n(i);a="http://shop.bufantec.com/bufan";var o,u=r.a.create({baseURL:a,timeout:5e3});u.interceptors.request.use((function(e){return o=c["a"].loading({message:"加载中...",forbidClick:!0}),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return o.clear(),e.data}),(function(e){return o.clear(),Promise.reject(e)})),t["a"]=u},1502:function(e,t,n){},"2f3b":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r}));var a=n("0c6d");function c(){return Object(a["a"])({url:"/index/index",method:"get"})}function i(e){return Object(a["a"])({url:"/brand/detailaction",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/brand/listaction",method:"get",params:e})}},"3af7":function(e,t,n){"use strict";n("1502")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isShow?n("van-tabbar",{attrs:{route:"","active-color":"#c35559"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"wap-home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",to:"/topic",icon:"orders-o"}},[e._v("专题")]),n("van-tabbar-item",{attrs:{replace:"",to:"/category",icon:"apps-o"}},[e._v("分类")]),n("van-tabbar-item",{attrs:{replace:"",to:"/cart",icon:"shopping-cart-o"}},[e._v("购物车")]),n("van-tabbar-item",{attrs:{replace:"",to:"/mine",icon:"user-circle-o"}},[e._v("我的")])],1):e._e(),n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},i=[],r=(n("caad"),n("e9c4"),{data:function(){return{isShow:!0}},watch:{$route:function(e,t){var n=["/home","/topic","/category","/cart","/mine"];n.includes(e.path)?this.isShow=!0:this.isShow=!1}},created:function(){var e={openId:"18337600696",nickName:"此生何惧畏风尘",avatarUrl:"http://1.13.23.97:5212/s/xvCO"},t=e.openId;localStorage.setItem("userInfo",JSON.stringify(e)),localStorage.setItem("openId",t)}}),o=r,u=(n("5c0b"),n("2877")),s=Object(u["a"])(o,c,i,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"sou"},[n("div",{attrs:{id:"box"}}),n("router-link",{attrs:{to:"/home/city",tag:"span"}},[e._v(e._s(e.cityText))]),n("van-search",{attrs:{placeholder:"点击搜索商品"},on:{click:e.goSearch}})],1),n("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-color":"#000",autoplay:3e3}},e._l(e.list.banner,(function(e){return n("van-swipe-item",{key:e.id},[n("img",{staticClass:"img",attrs:{src:e.image_url,alt:""}})])})),1),n("div",{staticClass:"channel"},e._l(e.list.channel,(function(t){return n("div",{key:t.id,on:{click:function(n){return e.git(t.id)}}},[n("img",{attrs:{src:t.icon_url,alt:""}}),n("p",[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"head",on:{click:e.make}},[e._v("品牌制造商直供")]),n("div",{staticClass:"contend"},e._l(e.list.brandList,(function(t){return n("div",{key:t.id,staticClass:"cont",on:{click:function(n){return e.brand(t.id)}}},[n("div",{staticClass:"tend"},[n("p",[e._v(e._s(t.name))]),n("p",[e._v(e._s(t.floor_price)+"元起")])]),n("img",{attrs:{src:t.new_pic_url,alt:""}})])})),0),n("router-link",{attrs:{to:"/home/newgoods/1"}},[n("div",{staticClass:"newgoods"},[n("div",{staticClass:"top"},[n("p",[e._v("新品首发")]),n("p",[e._v("查看全部")])])])]),n("div",{staticClass:"list"},[n("ul",e._l(e.list.newGoods,(function(t){return n("li",{key:t.id,staticClass:"lists",on:{click:function(n){return e.xiangqing(t.id)}}},[n("img",{attrs:{src:t.list_pic_url,alt:""}}),n("p",[e._v(e._s(t.name))]),n("p",[e._v(e._s(t.goods_brief))]),n("p",[e._v("￥"+e._s(t.retail_price))])])})),0)]),n("router-link",{attrs:{to:"/home/newgoods/2"}},[n("div",{staticClass:"hotgoods"},[n("div",{staticClass:"hotgoods-top"},[n("p",[e._v(" 人气推荐 "),n("span"),e._v(" 好物精选 ")]),n("p",[e._v("查看全部")])])])]),n("div",{staticClass:"list"},[n("ul",e._l(e.list.hotGoods,(function(t){return n("li",{key:t.id,staticClass:"lists",on:{click:function(n){return e.xiangqing(t.id)}}},[n("img",{attrs:{src:t.list_pic_url,alt:""}}),n("p",[e._v(e._s(t.name))]),n("p",[e._v(e._s(t.goods_brief))]),n("p",[e._v("￥"+e._s(t.retail_price))])])})),0)]),n("div",{staticClass:"topicList"},[e._m(0),n("div",{staticClass:"list"},[n("ul",e._l(e.list.topicList,(function(t){return n("li",{key:t.id,staticClass:"lis",on:{click:function(n){return e.details(t.id)}}},[n("img",{attrs:{src:t.item_pic_url,alt:""}}),n("div",{staticClass:"bot"},[n("div",[n("p",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.subtitle))])]),n("div",[e._v(e._s(t.price_info)+"元起")])])])})),0)])]),n("div",{staticClass:"newcategory"},e._l(e.list.newCategoryList,(function(t){return n("div",{key:t.id,staticClass:"lists"},[n("div",{staticClass:"lists-c"},[e._v(e._s(t.name)+"好物")]),n("div",{staticClass:"sublist"},[e._l(t.goodsList,(function(t){return n("div",{key:t.id,on:{click:function(n){return e.xiangqing(t.id)}}},[n("img",{attrs:{src:t.list_pic_url,alt:""}}),n("p",[e._v(e._s(t.name))]),n("p",[e._v("￥"+e._s(t.retail_price))])])})),n("div",{staticClass:"last",on:{click:function(n){return e.navtab(t.id)}}},[n("p",[e._v(e._s(t.name)+"好物")]),n("span",{staticClass:"icons"})])],2)])})),0)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"topicList-top"},[e._v(" 专题精选 "),n("span",{staticClass:"icon"})])}],p=(n("b0c0"),n("2f3b")),m={data:function(){return{list:{},cityText:""}},methods:{init:function(){var e=this;Object(p["b"])().then((function(t){e.list=t}))},goSearch:function(){this.$router.push("/home/search")},git:function(e){this.$router.push({path:"/category/list",query:{id:e}})},brand:function(e){this.$router.push({path:"/home/brand",query:{id:e}})},xiangqing:function(e){this.$router.push({path:"/details",query:{id:e}})},details:function(e){this.$router.push({path:"/topic/page/",query:{id:e}})},navtab:function(e){this.$router.push({path:"/category/list",query:{id:e}})},make:function(){this.$router.push("/home/brand/make")},city:function(){var e=this;if(this.$store.state.cityInfo.name){e.cityText=this.$store.state.cityInfo.name;var t=this.$store.state.cityInfo,n=new AMap.Map("box",{zoom:18,center:[t.location.lng,t.location.lat]}),a=new AMap.Marker({position:[t.location.lng,t.location.lat]});n.add(a)}else AMap.plugin("AMap.CitySearch",(function(){var t=new AMap.CitySearch;t.getLocalCity((function(t,n){"complete"===t&&"OK"===n.info&&(e.cityText=n.city)}))}))}},created:function(){this.init()},watch:{$route:function(e,t){this.city()}},mounted:function(){this.city()}},b=m,v=(n("3af7"),Object(u["a"])(b,h,f,!1,null,"1c3abd7a",null)),k=v.exports;a["a"].use(d["a"]);var _=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:k,meta:{keepAlive:!0}},{path:"/home/search",name:"home/search",component:function(){return n.e("chunk-1df6a00a").then(n.bind(null,"d2be"))},meta:{keepAlive:!1},beforeEnter:function(e,t,n){e.query.enterPath=t.path,n()}},{path:"/home/newgoods/:id",name:"newgoods",component:function(){return n.e("chunk-21edc035").then(n.bind(null,"7068"))},meta:{keepAlive:!0}},{path:"/home/city",name:"city",component:function(){return n.e("chunk-6b25815e").then(n.bind(null,"0b4c"))},meta:{keepAlive:!1}},,{path:"/home/brand",name:"brand",component:function(){return n.e("chunk-638a7745").then(n.bind(null,"02e7"))},meta:{keepAlive:!1}},,{path:"/home/brand/make",name:"make",component:function(){return Promise.all([n.e("chunk-5dea0225"),n.e("chunk-f6561982")]).then(n.bind(null,"9053"))},meta:{keepAlive:!0}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-0715632c").then(n.bind(null,"1b7b"))},meta:{keepAlive:!1}},{path:"/category",name:"category",component:function(){return n.e("chunk-6046ad07").then(n.bind(null,"a192"))},meta:{keepAlive:!0}},{path:"/category/list",name:"list/",component:function(){return n.e("chunk-5c22e144").then(n.bind(null,"a687"))},meta:{keepAlive:!1},beforeEnter:function(e,t,n){e.query.enterPath=t.path,n()}},{path:"/mine",name:"mine",component:function(){return n.e("chunk-1c43ec66").then(n.bind(null,"b5b1"))},meta:{keepAlive:!0}},{path:"/mine/collectlist",name:"collectlist",component:function(){return n.e("chunk-061dcb0e").then(n.bind(null,"e281"))},meta:{keepAlive:!0}},{path:"/mine/opinion",name:"opinion",component:function(){return n.e("chunk-f3b547c0").then(n.bind(null,"0f3f"))},meta:{keepAlive:!0}},{path:"/topic",name:"topic",component:function(){return Promise.all([n.e("chunk-5dea0225"),n.e("chunk-73658fe6")]).then(n.bind(null,"bc79"))},meta:{keepAlive:!0}},{path:"/topic/page",name:"page",component:function(){return n.e("chunk-3c70528e").then(n.bind(null,"f0b6"))},meta:{keepAlive:!0},beforeEnter:function(e,t,n){e.query.enterPath=t.path,n()}},{path:"/details",name:"details",component:function(){return n.e("chunk-7a0aefe8").then(n.bind(null,"cfeb"))},meta:{keepAlive:!1},beforeEnter:function(e,t,n){e.query.enterPath=t.path,n()}},{path:"/order",name:"order",component:function(){return n.e("chunk-5e6936af").then(n.bind(null,"634a"))},meta:{keepAlive:!1}},{path:"/address",name:"address",component:function(){return n.e("chunk-0d5f983a").then(n.bind(null,"13b6"))},meta:{keepAlive:!1},beforeEnter:function(e,t,n){e.query.enterPath=t.path,n()}}],g=new d["a"]({mode:"history",base:"",routes:_,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),y=g,C=n("2f62");a["a"].use(C["a"]);var w=new C["a"].Store({state:{cityInfo:{},totals:""},mutations:{uptCityInfo:function(e,t){e.cityInfo=t},uptotals:function(e,t){e.totals=t}},actions:{},modules:{}}),A=(n("499a"),n("5f1a"),n("a3e2")),x=(n("be7f"),n("565f")),O=(n("0653"),n("34e9")),S=(n("c194"),n("7744")),j=(n("869a"),n("6869")),P=(n("acb7"),n("67bb")),$=(n("29ea"),n("df1a")),q=(n("be39"),n("efa0")),E=(n("a909"),n("3acc")),I=(n("3c32"),n("417e")),L=(n("66b9"),n("b650")),T=(n("9cb7"),n("66fd")),M=(n("4467"),n("c36e")),N=(n("e7e5"),n("d399")),B=(n("f06a"),n("20fb")),J=(n("2cbd"),n("ab2c")),U=(n("bda7"),n("5e46")),D=(n("da3c"),n("0b33")),G=(n("a39e"),n("241e")),K=(n("570a"),n("1d36")),z=(n("2994"),n("2bdd")),F=(n("0ec5"),n("21ab")),H=(n("3df5"),n("2830")),R=(n("4d48"),n("d1e1")),Q=(n("81e6"),n("9ffb")),V=(n("c3a6"),n("ad06")),W=(n("5852"),n("d961")),X=(n("4b0a"),n("2bb1")),Y=(n("7844"),n("5596")),Z=(n("a52c"),n("2ed4")),ee=(n("537a"),n("ac28"));a["a"].use(ee["a"]),a["a"].use(Z["a"]),a["a"].use(Y["a"]),a["a"].use(X["a"]),a["a"].use(W["a"]),a["a"].use(V["a"]),a["a"].use(Q["a"]),a["a"].use(R["a"]),a["a"].use(H["a"]),a["a"].use(F["a"]),a["a"].use(z["a"]),a["a"].use(K["a"]),a["a"].use(G["a"]),a["a"].use(D["a"]),a["a"].use(U["a"]),a["a"].use(J["a"]),a["a"].use(B["a"]),a["a"].use(N["a"]),a["a"].use(M["a"]),a["a"].use(T["a"]),a["a"].use(L["a"]),a["a"].use(I["a"]),a["a"].use(E["a"]),a["a"].use(q["a"]),a["a"].use($["a"]),a["a"].use(P["a"]),a["a"].use(j["a"]),a["a"].use(S["a"]),a["a"].use(O["a"]),a["a"].use(x["a"]),a["a"].use(A["a"]),a["a"].config.productionTip=!1,new a["a"]({router:y,store:w,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.73a4f465.js.map