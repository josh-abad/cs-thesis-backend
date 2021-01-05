(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13dbe3b9"],{"19bf":function(e,t,r){"use strict";var a=r("7a23");function n(e,t,r,n,c,s){return Object(a["r"])(),Object(a["f"])("div",{class:["bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg",e.vibrancy?"bg-opacity-50 dark:bg-opacity-75 backdrop-blur border border-gray-300 dark:border-gray-700":""]},[Object(a["y"])(e.$slots,"default")],2)}var c=Object(a["j"])({name:"BasePanel",props:{vibrancy:{type:Boolean,default:!1}}});c.render=n;t["a"]=c},"9d2c":function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),n=r("cb15"),c=r.n(n),s={class:"mt-4"},i={class:"flex justify-between items-start"},l=Object(a["i"])("svg",{class:"fill-current w-10 h-10 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full p-2",viewBox:"0 0 20 20",fill:"currentColor"},[Object(a["i"])("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})],-1),d=Object(a["i"])("span",null," Add ",-1),o={class:"font-semibold text-lg mt-4"},u={key:0},b={key:1},f={key:0,class:"divide-y divide-gray-300 dark:divide-gray-700"},j=Object(a["i"])("img",{src:c.a,alt:"Avatar",class:"ml-2 w-8 h-8 object-cover rounded-full"},null,-1),O={class:"ml-4"},m={class:"text-sm text-gray-600 dark:text-gray-400"};function v(e,t,r,n,c,v){var h=Object(a["z"])("BaseInput"),p=Object(a["z"])("AddStudentModal");return Object(a["r"])(),Object(a["f"])("div",s,[Object(a["i"])("div",i,[Object(a["i"])(h,{type:"text",modelValue:e.searchFilter,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchFilter=t}),placeholder:"Filter students"},null,8,["modelValue"]),Object(a["i"])("div",null,[Object(a["i"])("button",{onClick:t[2]||(t[2]=function(t){return e.addStudentModalOpen=!0}),class:"flex flex-col items-center focus:outline-none"},[l,d])]),(Object(a["r"])(),Object(a["f"])(a["b"],{to:"#modals"},[Object(a["M"])(Object(a["i"])(p,{courseId:e.courseId,onCloseModal:t[3]||(t[3]=function(t){return e.addStudentModalOpen=!1})},null,8,["courseId"]),[[a["J"],e.addStudentModalOpen]])]))]),Object(a["i"])("div",o,[e.searchFilter?(Object(a["r"])(),Object(a["f"])("div",u,'Search for "'+Object(a["E"])(e.searchFilter)+'"',1)):(Object(a["r"])(),Object(a["f"])("div",b,"Students Enrolled in Course"))]),e.students?(Object(a["r"])(),Object(a["f"])("div",f,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.filteredStudents,(function(e){return Object(a["r"])(),Object(a["f"])("div",{key:e.id,class:"flex items-center py-4"},[j,Object(a["i"])("div",O,[Object(a["i"])("div",null,Object(a["E"])(e.name.first)+" "+Object(a["E"])(e.name.last),1),Object(a["i"])("div",m," @"+Object(a["E"])(e.username),1)])])})),128))])):Object(a["g"])("",!0)])}r("99af"),r("4de4"),r("caad"),r("2532");var h=r("b3b3"),p={class:"fixed z-30 inset-0 overflow-y-auto"},y={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},g=Object(a["i"])("div",{class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[Object(a["i"])("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"})],-1),k=Object(a["i"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),x={class:"inline-block align-bottom text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},w={class:"flex justify-between"},S=Object(a["i"])("div",{class:"font-bold text-lg"},"Choose Students",-1),B=Object(a["i"])("svg",{class:"fill-current w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor"},[Object(a["i"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),C={class:"mt-4"},F={class:"mt-4 divide-y divide-gray-300 dark:divide-gray-700"},I={class:"inline-block"},M={class:"ml-2 inline-block text-sm text-gray-400 dark:text-gray-600"},L={class:"mt-4 flex justify-end"},z=Object(a["h"])("Add");function N(e,t,r,n,c,s){var i=Object(a["z"])("BaseInput"),l=Object(a["z"])("BaseButton"),d=Object(a["z"])("BasePanel");return Object(a["r"])(),Object(a["f"])(a["c"],{"enter-active-class":"transition ease-out duration-300 transform","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-300 transform","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Object(a["L"])((function(){return[Object(a["i"])("div",p,[Object(a["i"])("div",y,[g,k,Object(a["i"])("div",x,[Object(a["i"])(d,{vibrancy:"",class:"border-none"},{default:Object(a["L"])((function(){return[Object(a["i"])("div",w,[S,Object(a["i"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("close-modal")}),class:"focus:outline-none"},[B])]),Object(a["i"])("div",C,[Object(a["i"])(i,{type:"text",modelValue:e.searchFilter,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.searchFilter=t}),placeholder:"Search"},null,8,["modelValue"])]),Object(a["i"])("div",F,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(e.filteredStudents,(function(r){return Object(a["r"])(),Object(a["f"])("div",{key:r.id,class:"py-2"},[Object(a["M"])(Object(a["i"])("input",{type:"checkbox",id:e.userFullName(r),value:r.id,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.checkedNames=t})},null,8,["id","value"]),[[a["G"],e.checkedNames]]),Object(a["i"])("label",{for:e.userFullName(r),class:"ml-2"},[Object(a["i"])("div",I,Object(a["E"])(e.userFullName(r)),1),Object(a["i"])("div",M," @"+Object(a["E"])(r.username),1)],8,["for"])])})),128))]),Object(a["i"])("div",L,[Object(a["i"])(l,{onClick:e.handleSubmit,prominent:"",disabled:!e.checkedNames.length},{default:Object(a["L"])((function(){return[z]})),_:1},8,["onClick","disabled"])])]})),_:1})])])])]})),_:1})}r("96cf");var E=r("1da1"),V=r("19bf"),$=r("82ea"),A=r("8141"),J=Object(a["j"])({components:{BasePanel:V["a"],BaseButton:$["a"],BaseInput:h["a"]},name:"AddStudentModal",emits:["close-modal"],data:function(){return{checkedNames:[],searchFilter:""}},props:{courseId:{type:String,required:!0}},methods:{userFullName:function(e){var t=e.name,r=t.first,a=t.last;return"".concat(r," ").concat(a)},handleSubmit:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={userIds:e.checkedNames,courseId:e.courseId},t.next=3,e.$store.dispatch(A["f"],r);case 3:e.$emit("close-modal");case 4:case"end":return t.stop()}}),t)})))()}},computed:{course:function(){return this.$store.getters.getCourseByID(this.courseId)},students:function(){return this.$store.getters.students},unenrolledStudents:function(){var e=this,t=function(t){return!e.course.studentsEnrolled.includes(t.id)};return this.students.filter(t)},filteredStudents:function(){var e=this;return this.unenrolledStudents.filter((function(t){var r=e.userFullName(t);return r.toLowerCase().includes(e.searchFilter.toLowerCase())}))}}});J.render=N;var P=J,U=Object(a["j"])({components:{BaseInput:h["a"],AddStudentModal:P},name:"CourseStudents",data:function(){return{searchFilter:"",addStudentModalOpen:!1}},props:{courseId:{type:String,required:!0}},computed:{students:function(){return this.$store.getters.studentsByCourse(this.courseId,!0)},filteredStudents:function(){var e=this;return this.students.filter((function(t){var r=t.name,a=r.first,n=r.last;return"".concat(a," ").concat(n).toLowerCase().includes(e.searchFilter.toLowerCase())}))}}});U.render=v;t["default"]=U}}]);
//# sourceMappingURL=chunk-13dbe3b9.0bdaca5a.js.map