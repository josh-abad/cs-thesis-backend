(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4745296"],{"19bf":function(e,t,r){"use strict";var c=r("7a23"),n={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function o(e,t){return Object(c["r"])(),Object(c["f"])("div",n,[Object(c["y"])(e.$slots,"default")])}const a={};a.render=o;t["a"]=a},"3a42":function(e,t,r){"use strict";var c=r("7a23");function n(e,t,r,n,o,a){return Object(c["r"])(),Object(c["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase tracking-wider":"capitalize"]},[Object(c["y"])(e.$slots,"default")],2)}var o=Object(c["j"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});o.render=n;t["a"]=o},"8f57":function(e,t,r){"use strict";r("b0c0");var c=r("7a23"),n={class:"transition duration-500 ease-in-out transform hover:shadow-lg active:scale-95 overflow-hidden bg-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-md w-45 h-25"},o=Object(c["i"])("img",{src:"https://cdn.pixabay.com/photo/2020/04/16/11/13/background-5050213_1280.png",alt:"Course image",class:"w-full h-20 object-cover"},null,-1),a={class:"px-4 py-3"},s=Object(c["h"])("2023 Online Class"),i={class:"text-lg truncate font-semibold"};function u(e,t,r,u,b,d){var l=Object(c["z"])("router-link"),j=Object(c["z"])("BaseLabel");return Object(c["r"])(),Object(c["f"])("div",n,[Object(c["i"])(l,{to:"/courses/".concat(e.course.id)},{default:Object(c["L"])((function(){return[o]})),_:1},8,["to"]),Object(c["i"])("div",a,[Object(c["i"])(j,{emphasis:""},{default:Object(c["L"])((function(){return[s]})),_:1}),Object(c["i"])(l,{to:"/courses/".concat(e.course.id)},{default:Object(c["L"])((function(){return[Object(c["i"])("h1",i,Object(c["E"])(e.course.name),1)]})),_:1},8,["to"])])])}var b=r("3a42"),d=Object(c["j"])({components:{BaseLabel:b["a"]},name:"CourseCard",props:{course:{type:Object,required:!0}}});d.render=u;t["a"]=d},bb51:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n=Object(c["i"])("div",{class:"text-3xl font-bold text-gray-900 dark:text-white"},"Home",-1),o={class:"mt-8"},a=Object(c["h"])(" Shortcuts"),s={class:"mt-4 flex space-x-4"},i=Object(c["h"])("Students"),u=Object(c["h"])("Courses"),b=Object(c["h"])("Settings"),d={key:0,class:"mt-8"},l={key:1,class:"mt-8"};function j(e,t,r,j,O,f){var g=Object(c["z"])("BaseLabel"),v=Object(c["z"])("NavCard"),p=Object(c["z"])("RecentCourses"),h=Object(c["z"])("BasePanel");return Object(c["r"])(),Object(c["f"])("div",null,[Object(c["i"])(h,null,{default:Object(c["L"])((function(){return[n,Object(c["i"])("div",o,[Object(c["i"])(g,{class:"pb-2 border-b border-gray-300 dark:border-gray-700",emphasis:""},{default:Object(c["L"])((function(){return[a]})),_:1}),Object(c["i"])("div",s,[e.$store.getters.permissions("coordinator","admin")?(Object(c["r"])(),Object(c["f"])(v,{key:0,icon:e.icon1,url:"/students"},{default:Object(c["L"])((function(){return[i]})),_:1},8,["icon"])):Object(c["g"])("",!0),Object(c["i"])(v,{icon:e.icon2,url:"/courses"},{default:Object(c["L"])((function(){return[u]})),_:1},8,["icon"]),Object(c["i"])(v,{icon:e.icon3,url:"/settings"},{default:Object(c["L"])((function(){return[b]})),_:1},8,["icon"])])]),e.$store.state.user.verified?Object(c["g"])("",!0):(Object(c["r"])(),Object(c["f"])("div",d," You are not yet verified ")),e.$store.state.recentCourses.length?(Object(c["r"])(),Object(c["f"])("div",l,[Object(c["i"])(p)])):Object(c["g"])("",!0)]})),_:1})])}var O=Object(c["h"])("Recent Courses"),f={class:"grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3"};function g(e,t,r,n,o,a){var s=Object(c["z"])("BaseLabel"),i=Object(c["z"])("CourseCard");return Object(c["r"])(),Object(c["f"])("div",null,[Object(c["i"])(s,{class:"pb-2 border-b border-gray-300 dark:border-gray-700",emphasis:""},{default:Object(c["L"])((function(){return[O]})),_:1}),Object(c["i"])("div",f,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.recentCourses,(function(e){return Object(c["r"])(),Object(c["f"])(i,{course:e,key:e.id},null,8,["course"])})),128))])])}var v=r("8f57"),p=r("3a42"),h=Object(c["j"])({components:{CourseCard:v["a"],BaseLabel:p["a"]},name:"RecentCourses",computed:{recentCourses:function(){return this.$store.getters.getRecentCourses}}});h.render=g;var m=h,k={class:"text-sm mt-2 text-green-100 group-hover:text-white"};function C(e,t,r,n,o,a){var s=Object(c["z"])("BasePanel");return Object(c["r"])(),Object(c["f"])(s,{class:"group pb-4 transition duration-500 ease-in-out transform bg-green-500 dark:bg-green-500 hover:shadow-lg hover:bg-green-400 dark:hover:bg-green-400 active:scale-95 flex flex-col items-center cursor-pointer w-50 h-50",onClick:t[1]||(t[1]=function(t){return e.$router.push(e.url||"#")})},{default:Object(c["L"])((function(){return[Object(c["i"])("div",{innerHTML:e.icon,class:"stroke-current text-green-200 group-hover:text-white w-8 h-8"},null,8,["innerHTML"]),Object(c["i"])("div",k,[Object(c["y"])(e.$slots,"default")])]})),_:3})}r("a9e3");var w=r("19bf"),y=Object(c["j"])({components:{BasePanel:w["a"]},name:"NavCard",props:{icon:{type:String,required:!0},url:{type:String,required:!1},quantity:{type:Number,required:!1}}});y.render=C;var x=y,L=Object(c["j"])({components:{RecentCourses:m,NavCard:x,BaseLabel:p["a"],BasePanel:w["a"]},name:"Home",data:function(){return{icon1:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',icon2:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',icon3:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'}}});L.render=j;t["default"]=L}}]);
//# sourceMappingURL=chunk-f4745296.e74fddad.js.map