(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4745296"],{"19bf":function(e,t,r){"use strict";var n=r("7a23"),c={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function o(e,t){return Object(n["r"])(),Object(n["f"])("div",c,[Object(n["y"])(e.$slots,"default")])}const s={};s.render=o;t["a"]=s},"3a42":function(e,t,r){"use strict";var n=r("7a23");function c(e,t,r,c,o,s){return Object(n["r"])(),Object(n["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase":"capitalize"]},[Object(n["y"])(e.$slots,"default")],2)}var o=Object(n["j"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});o.render=c;t["a"]=o},"8f57":function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),c=r("7b3e"),o=r.n(c),s={class:"transition duration-500 ease-in-out transform hover:shadow-lg active:scale-95 overflow-hidden bg-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow-md w-45 h-25"},a=Object(n["i"])("img",{src:o.a,alt:"Course image",class:"w-full h-20 object-cover"},null,-1),i={class:"px-4 py-3"},u=Object(n["h"])("2023 Online Class"),b={class:"text-lg truncate"};function d(e,t,r,c,o,d){var l=Object(n["z"])("router-link"),j=Object(n["z"])("BaseLabel");return Object(n["r"])(),Object(n["f"])("div",s,[Object(n["i"])(l,{to:"/courses/".concat(e.course.id)},{default:Object(n["L"])((function(){return[a]})),_:1},8,["to"]),Object(n["i"])("div",i,[Object(n["i"])(j,{emphasis:""},{default:Object(n["L"])((function(){return[u]})),_:1}),Object(n["i"])(l,{to:"/courses/".concat(e.course.id)},{default:Object(n["L"])((function(){return[Object(n["i"])("h1",b,Object(n["E"])(e.course.name),1)]})),_:1},8,["to"])])])}var l=r("3a42"),j=Object(n["j"])({components:{BaseLabel:l["a"]},name:"CourseCard",props:{course:{type:Object,required:!0}}});j.render=d;t["a"]=j},bb51:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=Object(n["i"])("div",{class:"text-3xl font-bold text-green-600 dark:text-white"},"Home",-1),o={class:"mt-8"},s=Object(n["h"])(" Shortcuts"),a={class:"mt-4 flex space-x-4"},i=Object(n["h"])("Students"),u=Object(n["h"])("Courses"),b=Object(n["h"])("Settings"),d={class:"mt-8"};function l(e,t,r,l,j,O){var f=Object(n["z"])("BaseLabel"),g=Object(n["z"])("NavCard"),v=Object(n["z"])("RecentCourses");return Object(n["r"])(),Object(n["f"])("div",null,[c,Object(n["i"])("div",o,[Object(n["i"])(f,{class:"pb-2 border-b border-gray-300 dark:border-gray-700",emphasis:""},{default:Object(n["L"])((function(){return[s]})),_:1}),Object(n["i"])("div",a,[Object(n["M"])(Object(n["i"])(g,{icon:e.icon1,url:"/students",quantity:e.$store.getters.students.length},{default:Object(n["L"])((function(){return[i]})),_:1},8,["icon","quantity"]),[[n["J"],e.$store.getters.permissions("coordinator","admin")]]),Object(n["i"])(g,{icon:e.icon2,url:"/courses",quantity:e.$store.getters.courses.length},{default:Object(n["L"])((function(){return[u]})),_:1},8,["icon","quantity"]),Object(n["i"])(g,{icon:e.icon3,url:"/settings"},{default:Object(n["L"])((function(){return[b]})),_:1},8,["icon"])])]),Object(n["i"])("div",d,[Object(n["i"])(v)])])}var j=Object(n["h"])("Recent Courses"),O={class:"grid grid-cols-3 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3"};function f(e,t,r,c,o,s){var a=Object(n["z"])("BaseLabel"),i=Object(n["z"])("CourseCard");return Object(n["M"])((Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(a,{class:"pb-2 border-b border-gray-300 dark:border-gray-700",emphasis:""},{default:Object(n["L"])((function(){return[j]})),_:1}),Object(n["i"])("div",O,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.recentCourses,(function(e){return Object(n["r"])(),Object(n["f"])("div",{key:e.id},[Object(n["i"])(i,{course:e},null,8,["course"])])})),128))])],512)),[[n["J"],e.recentCourses.length>0]])}var g=r("8f57"),v=r("3a42"),p=Object(n["j"])({components:{CourseCard:g["a"],BaseLabel:v["a"]},name:"RecentCourses",computed:{recentCourses:function(){return this.$store.getters.getRecentCourses}}});p.render=f;var h=p,m={class:"text-sm mt-2 text-green-100 group-hover:text-white"},k={key:0,class:"absolute right-0 top-0 -mt-2 -mr-2 rounded-full bg-gradient-to-tr from-red-600 to-red-400 p-1 text-xs w-6 h-6 text-center"};function y(e,t,r,c,o,s){var a=Object(n["z"])("BasePanel");return Object(n["r"])(),Object(n["f"])(a,{class:"group pb-4 transition duration-500 ease-in-out transform bg-green-500 dark:bg-green-500 hover:shadow-lg hover:bg-green-400 dark:hover:bg-green-400 active:scale-95 flex flex-col items-center cursor-pointer w-50 h-50",onClick:t[1]||(t[1]=function(t){return e.$router.push(e.url||"#")})},{default:Object(n["L"])((function(){return[Object(n["i"])("div",{innerHTML:e.icon,class:"stroke-current text-green-200 group-hover:text-white w-8 h-8"},null,8,["innerHTML"]),Object(n["i"])("div",m,[Object(n["y"])(e.$slots,"default")]),e.quantity?(Object(n["r"])(),Object(n["f"])("span",k,Object(n["E"])(e.quantity),1)):Object(n["g"])("",!0)]})),_:3})}r("a9e3");var C=r("19bf"),w=Object(n["j"])({components:{BasePanel:C["a"]},name:"NavCard",props:{icon:{type:String,required:!0},url:{type:String,required:!1},quantity:{type:Number,required:!1}}});w.render=y;var x=w,L=Object(n["j"])({components:{RecentCourses:h,NavCard:x,BaseLabel:v["a"]},name:"Home",data:function(){return{icon1:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',icon2:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',icon3:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'}}});L.render=l;t["default"]=L}}]);
//# sourceMappingURL=chunk-f4745296.fb6115fd.js.map