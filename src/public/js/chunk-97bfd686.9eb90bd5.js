(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97bfd686"],{"19bf":function(e,t,r){"use strict";var a=r("7a23"),c={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function n(e,t){return Object(a["r"])(),Object(a["f"])("div",c,[Object(a["y"])(e.$slots,"default")])}const s={};s.render=n;t["a"]=s},3457:function(e,t,r){"use strict";var a=r("7a23"),c={class:"flex justify-between"},n={class:"text-3xl text-white font-bold"},s=Object(a["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},null,-1);function i(e,t,r,i,o,l){var u=Object(a["z"])("Breadcrumbs"),b=Object(a["z"])("BasePanel");return Object(a["r"])(),Object(a["f"])(b,{class:"bg-gradient-to-r from-green-600 to-green-400 dark:from-green-700 dark:to-green-500"},{default:Object(a["L"])((function(){return[Object(a["i"])("div",c,[Object(a["i"])("div",n,[Object(a["y"])(e.$slots,"default")]),e.hideMenu?Object(a["g"])("",!0):(Object(a["r"])(),Object(a["f"])("svg",{key:0,class:"fill-current text-white w-6 h-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:t[1]||(t[1]=function(t){return e.$emit("menu-clicked")})},[s]))]),e.links?(Object(a["r"])(),Object(a["f"])(u,{key:0,class:"mt-2",links:e.links},null,8,["links"])):Object(a["g"])("",!0)]})),_:3})}var o=r("19bf"),l=(r("b0c0"),{class:"flex items-center"}),u=Object(a["i"])("svg",{class:"ml-1 stroke-current w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);function b(e,t,r,c,n,s){var i=Object(a["z"])("router-link");return Object(a["r"])(),Object(a["f"])("ol",l,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.linksMinusLast,(function(e,t){return Object(a["r"])(),Object(a["f"])("li",{key:t,class:"mr-1 flex items-center text-green-200"},[Object(a["i"])(i,{to:e.url},{default:Object(a["L"])((function(){return[Object(a["h"])(Object(a["E"])(e.name),1)]})),_:2},1032,["to"]),u])})),128)),Object(a["i"])("li",null,[Object(a["i"])(i,{to:e.lastLink.url,class:"text-white"},{default:Object(a["L"])((function(){return[Object(a["h"])(Object(a["E"])(e.lastLink.name),1)]})),_:1},8,["to"])])])}r("fb6a");var d=Object(a["j"])({name:"Breadcrumbs",props:{links:{type:Array,required:!0}},computed:{lastLink:function(){return this.links[this.links.length-1]},linksMinusLast:function(){return this.links.slice(0,this.links.length-1)}}});d.render=b;var j=d,O=Object(a["j"])({name:"ColorHeader",components:{BasePanel:o["a"],Breadcrumbs:j},emits:["menu-clicked"],props:{links:{type:Array,required:!1},hideMenu:{type:Boolean,default:!1}}});O.render=i;t["a"]=O},"3a42":function(e,t,r){"use strict";var a=r("7a23");function c(e,t,r,c,n,s){return Object(a["r"])(),Object(a["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase":"capitalize"]},[Object(a["y"])(e.$slots,"default")],2)}var n=Object(a["j"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});n.render=c;t["a"]=n},"3e7b":function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),c=r("7b3e"),n=r.n(c),s=Object(a["O"])("data-v-04c1ef72");Object(a["u"])("data-v-04c1ef72");var i=Object(a["h"])("Courses"),o={class:"origin-top-right z-10 absolute right-0 -mt-24 mr-20 w-56 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700"},l={class:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},u=Object(a["h"])("Create Course"),b={class:"flex justify-between items-center border-b border-gray-300 dark:border-gray-700"},d=Object(a["i"])("div",{class:"text-lg font-bold mb-3"},"Your Courses",-1),j={class:"flex items-center"},O={class:"mr-3"},f=Object(a["i"])("svg",{class:"fill-current w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[Object(a["i"])("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),v=Object(a["i"])("svg",{class:"fill-current w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[Object(a["i"])("path",{"fill-rule":"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),g={key:0,class:"mt-3"},m={class:"grid grid-cols-3 gap-6 sm:grid-cols-2 md:grid-cols-3"},h={key:1},p={class:"divide-y divide-gray-300 dark:divide-gray-700"},k={class:"flex"},w={class:"rounded overflow-hidden w-40 h-20 shadow"},y=Object(a["i"])("img",{src:n.a,alt:"Course image",class:"h-full object-cover"},null,-1),x={class:"ml-3"},C=Object(a["h"])("2023T Online Class"),M={class:"w-60"};Object(a["s"])();var z=s((function(e,t,r,c,n,z){var B=Object(a["z"])("ColorHeader"),L=Object(a["z"])("router-link"),_=Object(a["z"])("CourseCard"),P=Object(a["z"])("BaseLabel"),H=Object(a["z"])("ProgressBar"),V=Object(a["z"])("BasePanel");return Object(a["r"])(),Object(a["f"])("div",null,[Object(a["i"])(B,{links:[{name:"Home",url:"/"},{name:"Courses",url:"/courses"}],onMenuClicked:t[1]||(t[1]=function(t){return e.isOpen=!e.isOpen}),hideMenu:!e.$store.getters.permissions("admin")},{default:s((function(){return[i]})),_:1},8,["hideMenu"]),Object(a["M"])(Object(a["i"])(a["c"],{"enter-active-class":"transition ease-out duration-100 transform","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75 transform","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:s((function(){return[Object(a["i"])("div",o,[Object(a["i"])("div",l,[Object(a["i"])(L,{to:"/courses/new",class:"block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700",role:"menuitem"},{default:s((function(){return[u]})),_:1})])])]})),_:1},512),[[a["J"],e.isOpen]]),Object(a["i"])(V,{class:"mt-4"},{default:s((function(){return[Object(a["i"])("div",b,[d,Object(a["i"])("div",j,[Object(a["i"])("div",O,[Object(a["i"])("button",{onClick:t[2]||(t[2]=function(t){return e.handleViewChange("card")}),class:["focus:outline-none rounded","card"===e.viewMode?"text-green-500":"text-gray-500"],title:"Card"},[f],2)]),Object(a["i"])("div",null,[Object(a["i"])("button",{onClick:t[3]||(t[3]=function(t){return e.handleViewChange("list")}),class:["focus:outline-none rounded","list"===e.viewMode?"text-green-500":"text-gray-500"],title:"List"},[v],2)])])]),Object(a["i"])(a["c"],{name:"fade",mode:"out-in"},{default:s((function(){return["card"===e.viewMode?(Object(a["r"])(),Object(a["f"])("div",g,[Object(a["i"])("div",m,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.alphabeticalCourses,(function(e){return Object(a["r"])(),Object(a["f"])("div",{key:e.id},[Object(a["i"])(_,{course:e},null,8,["course"])])})),128))])])):(Object(a["r"])(),Object(a["f"])("div",h,[Object(a["i"])("div",p,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.alphabeticalCourses,(function(t){return Object(a["r"])(),Object(a["f"])("div",{key:t.id,class:"flex justify-between items-center py-3"},[Object(a["i"])("div",k,[Object(a["i"])("div",w,[Object(a["i"])(L,{to:"/courses/".concat(t.id)},{default:s((function(){return[y]})),_:2},1032,["to"])]),Object(a["i"])("div",x,[Object(a["i"])(P,{emphasis:""},{default:s((function(){return[C]})),_:1}),Object(a["i"])(L,{to:"/courses/".concat(t.id)},{default:s((function(){return[Object(a["h"])(Object(a["E"])(t.name),1)]})),_:2},1032,["to"])])]),Object(a["i"])("div",M,[Object(a["i"])(H,{percentage:e.$store.getters.courseCompletedPercentage(t.id)},null,8,["percentage"])])])})),128))])]))]})),_:1})]})),_:1})])})),B=r("2909"),L=r("3a42"),_=r("19bf"),P=r("3457"),H=r("8f57"),V=r("b6b4"),$=Object(a["j"])({components:{CourseCard:H["a"],BasePanel:_["a"],BaseLabel:L["a"],ProgressBar:V["a"],ColorHeader:P["a"]},name:"CoursesPage",data:function(){return{isOpen:!1,viewMode:"list"}},created:function(){var e=localStorage.getItem("coursesPageViewState");e&&(this.viewMode=JSON.parse(e))},methods:{handleViewChange:function(e){this.viewMode=e,localStorage.setItem("coursesPageViewState",JSON.stringify(this.viewMode))}},computed:{courses:function(){return this.$store.getters.courses},alphabeticalCourses:function(){var e=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0};return Object(B["a"])(this.courses).sort(e)}}});r("c239");$.render=z,$.__scopeId="data-v-04c1ef72";t["default"]=$},"4df6":function(e,t,r){},"8f57":function(e,t,r){"use strict";r("b0c0");var a=r("7a23"),c=r("7b3e"),n=r.n(c),s={class:"transition duration-500 ease-in-out transform hover:shadow-lg active:scale-95 overflow-hidden bg-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-md w-45 h-25"},i=Object(a["i"])("img",{src:n.a,alt:"Course image",class:"w-full h-20 object-cover"},null,-1),o={class:"px-4 py-3"},l=Object(a["h"])("2023 Online Class"),u={class:"text-lg truncate"};function b(e,t,r,c,n,b){var d=Object(a["z"])("router-link"),j=Object(a["z"])("BaseLabel");return Object(a["r"])(),Object(a["f"])("div",s,[Object(a["i"])(d,{to:"/courses/".concat(e.course.id)},{default:Object(a["L"])((function(){return[i]})),_:1},8,["to"]),Object(a["i"])("div",o,[Object(a["i"])(j,{emphasis:""},{default:Object(a["L"])((function(){return[l]})),_:1}),Object(a["i"])(d,{to:"/courses/".concat(e.course.id)},{default:Object(a["L"])((function(){return[Object(a["i"])("h1",u,Object(a["E"])(e.course.name),1)]})),_:1},8,["to"])])])}var d=r("3a42"),j=Object(a["j"])({components:{BaseLabel:d["a"]},name:"CourseCard",props:{course:{type:Object,required:!0}}});j.render=b;t["a"]=j},b6b4:function(e,t,r){"use strict";var a=r("7a23"),c={class:"bg-gray-300 dark:bg-gray-700 w-full h-2 rounded-full overflow-hidden"},n={class:"text-sm mt-2"},s={class:"font-semibold"},i=Object(a["h"])("% complete ");function o(e,t,r,o,l,u){return Object(a["r"])(),Object(a["f"])("div",null,[Object(a["i"])("div",c,[Object(a["i"])("div",{style:"width: ".concat(e.percentage,"%"),class:"bg-gradient-to-r from-green-600 to-green-400 percentage h-full rounded-full"},null,4)]),Object(a["i"])("div",n,[Object(a["i"])("span",s,Object(a["E"])(e.percentage),1),i])])}r("a9e3");var l=Object(a["j"])({name:"ProgressBar",props:{percentage:{type:Number,required:!0}}});l.render=o;t["a"]=l},c239:function(e,t,r){"use strict";r("4df6")}}]);
//# sourceMappingURL=chunk-97bfd686.9eb90bd5.js.map