(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048fd383"],{"19bf":function(e,t,r){"use strict";var c=r("7a23"),a={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function s(e,t){return Object(c["s"])(),Object(c["f"])("div",a,[Object(c["z"])(e.$slots,"default")])}const n={};n.render=s;t["a"]=n},3457:function(e,t,r){"use strict";var c=r("7a23"),a={class:"flex justify-between"},s={class:"text-3xl text-white font-bold"},n=Object(c["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},null,-1);function o(e,t,r,o,i,l){var u=Object(c["A"])("Breadcrumbs"),d=Object(c["A"])("BasePanel");return Object(c["s"])(),Object(c["f"])(d,{class:"bg-gradient-to-r from-green-600 to-green-400 dark:from-green-700 dark:to-green-500"},{default:Object(c["M"])((function(){return[Object(c["j"])("div",a,[Object(c["j"])("div",s,[Object(c["z"])(e.$slots,"default")]),e.hideMenu?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])("svg",{key:0,class:"fill-current text-white w-6 h-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:t[1]||(t[1]=function(t){return e.$emit("menu-clicked")})},[n]))]),e.links?(Object(c["s"])(),Object(c["f"])(u,{key:0,class:"mt-2",links:e.links},null,8,["links"])):Object(c["g"])("",!0)]})),_:3})}var i=r("19bf"),l=(r("b0c0"),{class:"flex items-center"}),u=Object(c["j"])("svg",{class:"ml-1 stroke-current w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(c["j"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);function d(e,t,r,a,s,n){var o=Object(c["A"])("router-link");return Object(c["s"])(),Object(c["f"])("ol",l,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.linksMinusLast,(function(e,t){return Object(c["s"])(),Object(c["f"])("li",{key:t,class:"mr-1 flex items-center text-green-200"},[Object(c["j"])(o,{to:e.url},{default:Object(c["M"])((function(){return[Object(c["i"])(Object(c["F"])(e.name),1)]})),_:2},1032,["to"]),u])})),128)),Object(c["j"])("li",null,[Object(c["j"])(o,{to:e.lastLink.url,class:"text-white"},{default:Object(c["M"])((function(){return[Object(c["i"])(Object(c["F"])(e.lastLink.name),1)]})),_:1},8,["to"])])])}r("fb6a");var b=Object(c["k"])({name:"Breadcrumbs",props:{links:{type:Array,required:!0}},computed:{lastLink:function(){return this.links[this.links.length-1]},linksMinusLast:function(){return this.links.slice(0,this.links.length-1)}}});b.render=d;var j=b,O=Object(c["k"])({name:"ColorHeader",components:{BasePanel:i["a"],Breadcrumbs:j},props:{links:{type:Array,required:!1},hideMenu:{type:Boolean,default:!1}},emits:["menu-clicked"]});O.render=o;t["a"]=O},"3a42":function(e,t,r){"use strict";var c=r("7a23");function a(e,t,r,a,s,n){return Object(c["s"])(),Object(c["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase tracking-wider":"capitalize"]},[Object(c["z"])(e.$slots,"default")],2)}var s=Object(c["k"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});s.render=a;t["a"]=s},"662f":function(e,t,r){"use strict";r("fe4b")},"8f4d":function(e,t,r){"use strict";r("b0c0");var c=r("7a23"),a={class:"transition duration-500 ease-in-out transform hover:shadow-lg active:scale-95 overflow-hidden bg-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-md w-45 h-25"},s=Object(c["j"])("img",{src:"https://cdn.pixabay.com/photo/2020/04/16/11/13/background-5050213_1280.png",alt:"Course image",class:"w-full h-20 object-cover"},null,-1),n={class:"px-4 py-3"},o=Object(c["i"])("2023 Online Class"),i={class:"text-lg truncate font-semibold"};function l(e,t,r,l,u,d){var b=Object(c["A"])("router-link"),j=Object(c["A"])("BaseLabel");return Object(c["s"])(),Object(c["f"])("div",a,[Object(c["j"])(b,{to:"/courses/".concat(e.course.id)},{default:Object(c["M"])((function(){return[s]})),_:1},8,["to"]),Object(c["j"])("div",n,[Object(c["j"])(j,{emphasis:""},{default:Object(c["M"])((function(){return[o]})),_:1}),Object(c["j"])(b,{to:"/courses/".concat(e.course.id)},{default:Object(c["M"])((function(){return[Object(c["j"])("h1",i,Object(c["F"])(e.course.name),1)]})),_:1},8,["to"])])])}var u=r("3a42"),d=Object(c["k"])({name:"CourseCard",components:{BaseLabel:u["a"]},props:{course:{type:Object,required:!0}}});d.render=l;t["a"]=d},b6b4:function(e,t,r){"use strict";var c=r("7a23"),a={class:"bg-gray-300 dark:bg-gray-700 w-full h-2 rounded-full overflow-hidden"},s={class:"text-sm mt-2"},n={class:"font-semibold"},o=Object(c["i"])("% complete ");function i(e,t,r,i,l,u){return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["j"])("div",a,[Object(c["j"])("div",{style:"width: ".concat(e.percentage,"%"),class:"bg-gradient-to-r from-green-600 to-green-400 percentage h-full rounded-full"},null,4)]),Object(c["j"])("div",s,[Object(c["j"])("span",n,Object(c["F"])(e.percentage),1),o])])}r("a9e3");var l=Object(c["k"])({name:"ProgressBar",props:{percentage:{type:Number,required:!0}}});l.render=i;t["a"]=l},df78:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),a=Object(c["P"])("data-v-49d1444e");Object(c["v"])("data-v-49d1444e");var s=Object(c["i"])("Courses"),n={class:"origin-top-right z-10 absolute right-0 -mt-24 mr-20 w-56 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700"},o={class:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},i=Object(c["i"])("Create Course"),l={class:"flex justify-between items-center border-b border-gray-300 dark:border-gray-700 -mb-3 pb-2"},u=Object(c["j"])("div",{class:"text-lg font-bold"},"Your Courses",-1),d={key:0,class:"flex items-center"},b=Object(c["j"])("svg",{class:"fill-current w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[Object(c["j"])("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm6-6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),j=Object(c["j"])("svg",{class:"fill-current w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[Object(c["j"])("path",{"fill-rule":"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),O={key:0,class:"my-3 flex justify-center items-center h-40"},f=Object(c["j"])("div",{class:"font-semibold text-xl text-gray-500"}," You don't have any courses. ",-1),g={key:1,class:"mt-6"},v={class:"grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3"},m={key:2},p={key:0,class:"divide-y divide-gray-300 dark:divide-gray-700"},k={key:1,class:"divide-y divide-gray-300 dark:divide-gray-700"};Object(c["t"])();var h=a((function(e,t,r,h,y,w){var x=Object(c["A"])("ColorHeader"),C=Object(c["A"])("router-link"),M=Object(c["A"])("ViewToggle"),B=Object(c["A"])("CoursesPageCard"),_=Object(c["A"])("CoursesPageListItem"),z=Object(c["A"])("SkeletonCourseListItem"),A=Object(c["A"])("BasePanel");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["j"])(x,{links:[{name:"Home",url:"/"},{name:"Courses",url:"/courses"}],onMenuClicked:t[1]||(t[1]=function(t){return e.isOpen=!e.isOpen}),"hide-menu":!e.hasPermission(["admin"])},{default:a((function(){return[s]})),_:1},8,["hide-menu"]),Object(c["N"])(Object(c["j"])(c["c"],{name:"dropdown-fade"},{default:a((function(){return[Object(c["j"])("div",n,[Object(c["j"])("div",o,[Object(c["j"])(C,{to:"/courses/new",class:"block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700",role:"menuitem"},{default:a((function(){return[i]})),_:1})])])]})),_:1},512),[[c["K"],e.isOpen]]),Object(c["j"])(A,{class:"mt-4 mb-0"},{default:a((function(){return[Object(c["j"])("div",l,[u,e.courses.length?(Object(c["s"])(),Object(c["f"])("div",d,[Object(c["j"])(M,{modelValue:e.viewMode,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.viewMode=t}),value:"card",class:"mr-3"},{default:a((function(){return[b]})),_:1},8,["modelValue"]),Object(c["j"])(M,{modelValue:e.viewMode,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.viewMode=t}),value:"list"},{default:a((function(){return[j]})),_:1},8,["modelValue"])])):Object(c["g"])("",!0)]),Object(c["j"])(c["c"],{name:"fade",mode:"out-in"},{default:a((function(){return[e.loaded&&!e.courses.length?(Object(c["s"])(),Object(c["f"])("div",O,[f])):"card"===e.viewMode?(Object(c["s"])(),Object(c["f"])("div",g,[Object(c["j"])("div",v,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.courses,(function(e){return Object(c["s"])(),Object(c["f"])(B,{course:e,key:e.id},null,8,["course"])})),128))])])):(Object(c["s"])(),Object(c["f"])("div",m,[Object(c["j"])("div",null,[e.loaded?(Object(c["s"])(),Object(c["f"])("div",p,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.courses,(function(e){return Object(c["s"])(),Object(c["f"])(_,{course:e,key:e.id},null,8,["course"])})),128))])):(Object(c["s"])(),Object(c["f"])("div",k,[(Object(c["s"])(),Object(c["f"])(c["a"],null,Object(c["y"])(10,(function(e){return Object(c["j"])(z,{key:e})})),64))]))])]))]})),_:1})]})),_:1})])})),y=r("19bf"),w=r("3457"),x=r("8f4d"),C=(r("b0c0"),{class:"flex justify-between items-center pt-3 mt-3"}),M={class:"flex"},B={class:"rounded overflow-hidden w-40 h-20 shadow"},_=Object(c["j"])("img",{src:"https://cdn.pixabay.com/photo/2020/04/16/11/13/background-5050213_1280.png",alt:"Course image",class:"w-full object-cover"},null,-1),z={class:"ml-3"},A=Object(c["i"])("2023 Online Class"),P={class:"w-60"};function V(e,t,r,a,s,n){var o=Object(c["A"])("router-link"),i=Object(c["A"])("BaseLabel"),l=Object(c["A"])("ProgressBar");return Object(c["s"])(),Object(c["f"])("div",C,[Object(c["j"])("div",M,[Object(c["j"])("div",B,[Object(c["j"])(o,{to:"/courses/".concat(e.course.id)},{default:Object(c["M"])((function(){return[_]})),_:1},8,["to"])]),Object(c["j"])("div",z,[Object(c["j"])(i,{emphasis:""},{default:Object(c["M"])((function(){return[A]})),_:1}),Object(c["j"])(o,{to:"/courses/".concat(e.course.id),class:"text-lg font-semibold"},{default:Object(c["M"])((function(){return[Object(c["i"])(Object(c["F"])(e.course.name),1)]})),_:1},8,["to"])])]),Object(c["j"])("div",P,[Object(c["j"])(l,{percentage:e.$store.getters.courseCompletedPercentage(e.course.id,e.$store.state.user.id)},null,8,["percentage"])])])}var L=r("3a42"),S=r("b6b4"),H=Object(c["k"])({name:"CourseListItem",components:{ProgressBar:S["a"],BaseLabel:L["a"]},props:{course:{type:Object,required:!0}}});H.render=V;var I=H,$=Object(c["h"])('<div class="flex"><div class="w-40 h-20 shadow bg-gray-400 dark:bg-gray-600 rounded"></div><div class="ml-3"><div class="w-32 h-3 bg-gray-400 dark:bg-gray-600 rounded"></div><div class="mt-2 w-40 h-3 bg-gray-400 dark:bg-gray-600 rounded"></div></div></div><div><div class="w-60 h-3 bg-gray-400 dark:bg-gray-600 rounded"></div><div class="mt-2 w-24 h-3 bg-gray-400 dark:bg-gray-600 rounded"></div></div>',2);function q(e,t,r,a,s,n){return t[1]||(Object(c["D"])(-1),t[1]=Object(c["j"])("div",{class:"flex justify-between items-center pt-3 mt-3 animate-pulse"},[$]),Object(c["D"])(1),t[1])}var F=Object(c["k"])({name:"SkeletonCourseListItem"});F.render=q;var J=F,N=r("e125"),T=r("219d"),D=Object(c["k"])({name:"CoursesPage",components:{CoursesPageCard:x["a"],BasePanel:y["a"],ColorHeader:w["a"],CoursesPageListItem:I,SkeletonCourseListItem:J,ViewToggle:N["a"]},mixins:[T["a"]],data:function(){return{isOpen:!1,viewMode:"list",loaded:!1}},computed:{courses:function(){return this.$store.getters.courses}},watch:{viewMode:function(e){localStorage.setItem("coursesPageViewState",JSON.stringify(e))}},created:function(){var e=this,t=localStorage.getItem("coursesPageViewState");t&&(this.viewMode=JSON.parse(t)),setTimeout((function(){e.loaded=!0}),500)}});r("662f");D.render=h,D.__scopeId="data-v-49d1444e";t["default"]=D},e125:function(e,t,r){"use strict";var c=r("7a23");function a(e,t,r,a,s,n){return Object(c["s"])(),Object(c["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",e.value)}),class:["focus:outline-none rounded",e.modelValue===e.value?"text-green-500":"text-gray-500"]},[Object(c["z"])(e.$slots,"default")],2)}var s=Object(c["k"])({name:"ViewToggle",props:{value:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue"]});s.render=a;t["a"]=s},fe4b:function(e,t,r){}}]);
//# sourceMappingURL=chunk-048fd383.365cde6a.js.map