(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25e15d21"],{"19bf":function(e,t,r){"use strict";var n=r("7a23"),c={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function o(e,t){return Object(n["r"])(),Object(n["f"])("div",c,[Object(n["y"])(e.$slots,"default")])}const a={};a.render=o;t["a"]=a},3457:function(e,t,r){"use strict";var n=r("7a23"),c={class:"flex justify-between"},o={class:"text-3xl text-white font-bold"},a=Object(n["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},null,-1);function s(e,t,r,s,i,u){var l=Object(n["z"])("Breadcrumbs"),d=Object(n["z"])("BasePanel");return Object(n["r"])(),Object(n["f"])(d,{class:"bg-gradient-to-r from-green-600 to-green-400 dark:from-green-700 dark:to-green-500"},{default:Object(n["L"])((function(){return[Object(n["i"])("div",c,[Object(n["i"])("div",o,[Object(n["y"])(e.$slots,"default")]),e.hideMenu?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("svg",{key:0,class:"fill-current text-white w-6 h-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:t[1]||(t[1]=function(t){return e.$emit("menu-clicked")})},[a]))]),e.links?(Object(n["r"])(),Object(n["f"])(l,{key:0,class:"mt-2",links:e.links},null,8,["links"])):Object(n["g"])("",!0)]})),_:3})}var i=r("19bf"),u=(r("b0c0"),{class:"flex items-center"}),l=Object(n["i"])("svg",{class:"ml-1 stroke-current w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1);function d(e,t,r,c,o,a){var s=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["f"])("ol",u,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.linksMinusLast,(function(e,t){return Object(n["r"])(),Object(n["f"])("li",{key:t,class:"mr-1 flex items-center text-green-200"},[Object(n["i"])(s,{to:e.url},{default:Object(n["L"])((function(){return[Object(n["h"])(Object(n["E"])(e.name),1)]})),_:2},1032,["to"]),l])})),128)),Object(n["i"])("li",null,[Object(n["i"])(s,{to:e.lastLink.url,class:"text-white"},{default:Object(n["L"])((function(){return[Object(n["h"])(Object(n["E"])(e.lastLink.name),1)]})),_:1},8,["to"])])])}r("fb6a");var b=Object(n["j"])({name:"Breadcrumbs",props:{links:{type:Array,required:!0}},computed:{lastLink:function(){return this.links[this.links.length-1]},linksMinusLast:function(){return this.links.slice(0,this.links.length-1)}}});b.render=d;var f=b,j=Object(n["j"])({name:"ColorHeader",components:{BasePanel:i["a"],Breadcrumbs:f},emits:["menu-clicked"],props:{links:{type:Array,required:!1},hideMenu:{type:Boolean,default:!1}}});j.render=s;t["a"]=j},"3a42":function(e,t,r){"use strict";var n=r("7a23");function c(e,t,r,c,o,a){return Object(n["r"])(),Object(n["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase tracking-wider":"capitalize"]},[Object(n["y"])(e.$slots,"default")],2)}var o=Object(n["j"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});o.render=c;t["a"]=o},4181:function(e,t,r){"use strict";var n=r("7a23"),c={class:"fixed inset-0"},o={class:"flex justify-center items-center"},a=Object(n["i"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1);function s(e,t){return Object(n["r"])(),Object(n["f"])("div",c,[Object(n["i"])("div",o,[a,Object(n["y"])(e.$slots,"default")])])}const i={};i.render=s;t["a"]=i},"62a6":function(e,t,r){"use strict";r("f655")},b6b4:function(e,t,r){"use strict";var n=r("7a23"),c={class:"bg-gray-300 dark:bg-gray-700 w-full h-2 rounded-full overflow-hidden"},o={class:"text-sm mt-2"},a={class:"font-semibold"},s=Object(n["h"])("% complete ");function i(e,t,r,i,u,l){return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])("div",c,[Object(n["i"])("div",{style:"width: ".concat(e.percentage,"%"),class:"bg-gradient-to-r from-green-600 to-green-400 percentage h-full rounded-full"},null,4)]),Object(n["i"])("div",o,[Object(n["i"])("span",a,Object(n["E"])(e.percentage),1),s])])}r("a9e3");var u=Object(n["j"])({name:"ProgressBar",props:{percentage:{type:Number,required:!0}}});u.render=i;t["a"]=u},ea5f:function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a"),r("b0c0");var n=r("7a23"),c=Object(n["O"])("data-v-6f93031f");Object(n["u"])("data-v-6f93031f");var o={key:0},a={class:"origin-top-right z-10 absolute right-0 -mt-24 mr-20 w-56 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700"},s={class:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},i=Object(n["h"])("Create Exam"),u=Object(n["h"])("Edit Course"),l={class:"flex mt-4"},d={class:"flex-grow mr-4"},b={class:"flex space-x-2 text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-t-lg shadow border-b border-gray-300 dark:border-gray-700"},f=Object(n["h"])(" Overview "),j=Object(n["h"])(" Students "),O={class:"w-72"},m=Object(n["h"])("Course Progress"),g={class:"flex flex-col items-center"},p=Object(n["i"])("p",{class:"font-thin text-2xl"},"Sorry, that course cannot be found.",-1),v=Object(n["h"])("Go to courses");Object(n["s"])();var h=c((function(e,t,r,h,k,y){var x=Object(n["z"])("ColorHeader"),C=Object(n["z"])("router-link"),w=Object(n["z"])("router-view"),B=Object(n["z"])("BasePanel"),_=Object(n["z"])("AboutCourse"),z=Object(n["z"])("BaseLabel"),L=Object(n["z"])("ProgressBar"),$=Object(n["z"])("BaseButton"),P=Object(n["z"])("Center");return e.course?(Object(n["r"])(),Object(n["f"])("div",o,[Object(n["i"])(x,{links:e.links,onMenuClicked:t[1]||(t[1]=function(t){return e.menuOpen=!e.menuOpen}),hideMenu:!e.$store.getters.permissions("coordinator","admin")},{default:c((function(){return[Object(n["h"])(Object(n["E"])(e.course.name),1)]})),_:1},8,["links","hideMenu"]),Object(n["M"])(Object(n["i"])(n["c"],{"enter-active-class":"transition ease-out duration-100 transform","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75 transform","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:c((function(){return[Object(n["i"])("div",a,[Object(n["i"])("div",s,[Object(n["i"])(C,{to:"/courses/".concat(e.courseId,"/exams/new"),class:"block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700",role:"menuitem"},{default:c((function(){return[i]})),_:1},8,["to"]),Object(n["i"])(C,{to:"/courses/".concat(e.courseId,"/edit"),class:"block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700",role:"menuitem"},{default:c((function(){return[u]})),_:1},8,["to"]),Object(n["i"])("button",{onClick:t[2]||(t[2]=function(){return e.deleteCourse&&e.deleteCourse.apply(e,arguments)}),class:"block w-full text-left px-4 py-2 text-sm border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none",role:"menuitem"}," Delete Course ")])])]})),_:1},512),[[n["J"],e.menuOpen]]),Object(n["i"])("div",l,[Object(n["i"])("div",d,[Object(n["i"])("div",b,[Object(n["i"])(C,{to:"/courses/".concat(e.courseId),class:"tab"},{default:c((function(){return[f]})),_:1},8,["to"]),Object(n["i"])(C,{to:"/courses/".concat(e.courseId,"/students"),class:"tab"},{default:c((function(){return[j]})),_:1},8,["to"])]),Object(n["i"])(B,{class:"rounded-t-none pt-2 overflow-hidden"},{default:c((function(){return[Object(n["i"])(w,null,{default:c((function(e){var t=e.Component,r=e.route;return[Object(n["i"])(n["c"],{name:r.meta.transition||"fade",mode:"out-in"},{default:c((function(){return[(Object(n["r"])(),Object(n["f"])(Object(n["B"])(t)))]})),_:2},1032,["name"])]})),_:1})]})),_:1})]),Object(n["i"])("div",O,[Object(n["i"])(_,{studentCount:e.course.studentsEnrolled.length,description:e.course.description,coordinatorName:e.coordinatorName,coordinatorAvatarUrl:e.course.coordinator.avatarUrl},null,8,["studentCount","description","coordinatorName","coordinatorAvatarUrl"]),Object(n["i"])(B,{class:"mt-4"},{default:c((function(){return[Object(n["i"])(z,{emphasis:""},{default:c((function(){return[m]})),_:1}),Object(n["i"])(L,{class:"mt-2",percentage:e.$store.getters.courseCompletedPercentage(e.courseId)},null,8,["percentage"])]})),_:1})])])])):(Object(n["r"])(),Object(n["f"])(P,{key:1},{default:c((function(){return[Object(n["i"])("div",g,[p,Object(n["i"])($,{class:"mt-3",onClick:t[3]||(t[3]=function(t){return e.$router.push("/courses")}),prominent:""},{default:c((function(){return[v]})),_:1})])]})),_:1}))})),k=(r("99af"),Object(n["h"])("About course")),y={class:"text-sm"},x={class:"mt-4"},C={class:"text-sm text-gray-600 dark:text-gray-400"},w={class:"mt-4 flex items-center"},B={class:"ml-2"},_=Object(n["i"])("div",{class:"text-sm text-gray-600 dark:text-gray-400"}," Course Coordinator ",-1);function z(e,t,r,c,o,a){var s=Object(n["z"])("BaseLabel"),i=Object(n["z"])("BasePanel");return Object(n["r"])(),Object(n["f"])(i,null,{default:Object(n["L"])((function(){return[Object(n["i"])(s,{emphasis:""},{default:Object(n["L"])((function(){return[k]})),_:1}),Object(n["i"])("div",y,Object(n["E"])(e.description),1),Object(n["i"])("div",x,[Object(n["i"])("div",null,Object(n["E"])(e.studentCount),1),Object(n["i"])("div",C,Object(n["E"])(1===e.studentCount?"Student":"Students")+" Enrolled ",1)]),Object(n["i"])("div",w,[Object(n["i"])("img",{src:e.coordinatorAvatarUrl,alt:"Avatar",class:"w-10 h-10 object-cover rounded-full"},null,8,["src"]),Object(n["i"])("div",B,[Object(n["i"])("div",null,Object(n["E"])(e.coordinatorName),1),_])])]})),_:1})}r("a9e3");var L=r("3a42"),$=r("19bf"),P=Object(n["j"])({name:"AboutCourse",components:{BaseLabel:L["a"],BasePanel:$["a"]},props:{studentCount:{type:Number,required:!0},description:{type:String,required:!0},coordinatorName:{type:String,required:!0},coordinatorAvatarUrl:{type:String,required:!0}}});P.render=z;var M=P,A=r("82ea"),E=r("4181"),I=r("3457"),N=r("b6b4"),q=r("8141"),S=r("2d40"),D=Object(n["j"])({components:{BaseButton:A["a"],BasePanel:$["a"],Center:E["a"],BaseLabel:L["a"],ColorHeader:I["a"],AboutCourse:M,ProgressBar:N["a"]},name:"CoursePage",data:function(){return{menuOpen:!1}},props:{courseId:{type:String,required:!0}},mounted:function(){document.title=this.course?"".concat(this.course.name," | Proctor Vue"):"Course Not Found | Proctor Vue",this.$store.commit(S["e"],this.courseId)},computed:{links:function(){return[{name:"Home",url:"/"},{name:"Courses",url:"/courses"},{name:this.course.name,url:"/courses/".concat(this.courseId)}]},course:function(){return this.$store.getters.getCourseByID(this.courseId)},coordinatorName:function(){if(this.course.coordinator){var e=this.course.coordinator.name,t=e.first,r=e.last;return"".concat(t," ").concat(r)}return""}},methods:{deleteCourse:function(){var e=this,t={header:"Delete Course",message:"Are you sure you want to delete this course?",actionLabel:"Delete"};this.$store.commit(S["g"],t),this.$emitter.on("closedDialog",(function(t){t&&(e.$store.dispatch(q["c"],e.courseId),e.$router.push("/courses")),e.$emitter.all.clear()}))},editCourse:function(){}}});r("62a6");D.render=h,D.__scopeId="data-v-6f93031f";t["default"]=D},f655:function(e,t,r){}}]);
//# sourceMappingURL=chunk-25e15d21.553f2b01.js.map