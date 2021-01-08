(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d8c256"],{"19bf":function(e,t,n){"use strict";var r=n("7a23"),a={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function s(e,t){return Object(r["r"])(),Object(r["f"])("div",a,[Object(r["y"])(e.$slots,"default")])}const c={};c.render=s;t["a"]=c},"2faf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"mt-4"},s={class:"flex justify-between items-start"},c=Object(r["i"])("svg",{class:"fill-current w-10 h-10 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full p-2",viewBox:"0 0 20 20",fill:"currentColor"},[Object(r["i"])("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})],-1),i=Object(r["i"])("span",null," Add ",-1),l={class:"font-semibold text-lg mt-4"},d={key:0},u={key:1},o={key:0,class:"divide-y divide-gray-300 dark:divide-gray-700"};function b(e,t,n,b,f,j){var O=Object(r["z"])("BaseInput"),m=Object(r["z"])("AddStudentModal"),v=Object(r["z"])("StudentRow");return Object(r["r"])(),Object(r["f"])("div",a,[Object(r["i"])("div",s,[Object(r["i"])(O,{type:"text",modelValue:e.searchFilter,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchFilter=t}),placeholder:"Filter students"},null,8,["modelValue"]),Object(r["i"])("div",null,[Object(r["i"])("button",{onClick:t[2]||(t[2]=function(t){return e.addStudentModalOpen=!0}),class:"flex flex-col items-center focus:outline-none"},[c,i])]),(Object(r["r"])(),Object(r["f"])(r["b"],{to:"#modals"},[Object(r["M"])(Object(r["i"])(m,{courseId:e.courseId,onCloseModal:t[3]||(t[3]=function(t){return e.addStudentModalOpen=!1})},null,8,["courseId"]),[[r["J"],e.addStudentModalOpen]])]))]),Object(r["i"])("div",l,[e.searchFilter?(Object(r["r"])(),Object(r["f"])("div",d,'Search for "'+Object(r["E"])(e.searchFilter)+'"',1)):(Object(r["r"])(),Object(r["f"])("div",u,"Students Enrolled in Course"))]),e.students?(Object(r["r"])(),Object(r["f"])("div",o,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.filteredStudents,(function(e){return Object(r["r"])(),Object(r["f"])(v,{student:e,key:e.id},null,8,["student"])})),128))])):Object(r["g"])("",!0)])}n("99af"),n("4de4"),n("caad"),n("b0c0"),n("2532");var f=n("b3b3"),j={class:"fixed z-30 inset-0 overflow-y-auto"},O={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},m=Object(r["i"])("div",{class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[Object(r["i"])("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"})],-1),v=Object(r["i"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),h={class:"inline-block align-bottom text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},p={class:"flex justify-between"},y=Object(r["i"])("div",{class:"font-bold text-lg"},"Choose Students",-1),g=Object(r["i"])("svg",{class:"fill-current w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor"},[Object(r["i"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),k={class:"mt-4"},w={class:"mt-4 divide-y divide-gray-300 dark:divide-gray-700"},x={class:"inline-block"},S={class:"mt-4 flex justify-end"},C=Object(r["h"])("Add");function F(e,t,n,a,s,c){var i=Object(r["z"])("BaseInput"),l=Object(r["z"])("BaseButton"),d=Object(r["z"])("BasePanel");return Object(r["r"])(),Object(r["f"])(r["c"],{"enter-active-class":"transition ease-out duration-300 transform","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-300 transform","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Object(r["L"])((function(){return[Object(r["i"])("div",j,[Object(r["i"])("div",O,[m,v,Object(r["i"])("div",h,[Object(r["i"])(d,{class:"border-none"},{default:Object(r["L"])((function(){return[Object(r["i"])("div",p,[y,Object(r["i"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("close-modal")}),class:"focus:outline-none"},[g])]),Object(r["i"])("div",k,[Object(r["i"])(i,{type:"text",modelValue:e.searchFilter,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.searchFilter=t}),placeholder:"Search"},null,8,["modelValue"])]),Object(r["i"])("div",w,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.filteredStudents,(function(n){return Object(r["r"])(),Object(r["f"])("div",{key:n.id,class:"py-2"},[Object(r["M"])(Object(r["i"])("input",{type:"checkbox",id:e.userFullName(n),value:n.id,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.checkedNames=t})},null,8,["id","value"]),[[r["G"],e.checkedNames]]),Object(r["i"])("label",{for:e.userFullName(n),class:"ml-2"},[Object(r["i"])("div",x,Object(r["E"])(e.userFullName(n)),1)],8,["for"])])})),128))]),Object(r["i"])("div",S,[Object(r["i"])(l,{onClick:e.handleSubmit,prominent:"",disabled:!e.checkedNames.length},{default:Object(r["L"])((function(){return[C]})),_:1},8,["onClick","disabled"])])]})),_:1})])])])]})),_:1})}n("96cf");var I=n("1da1"),B=n("19bf"),M=n("82ea"),z=n("8141"),L=Object(r["j"])({components:{BasePanel:B["a"],BaseButton:M["a"],BaseInput:f["a"]},name:"AddStudentModal",emits:["close-modal"],data:function(){return{checkedNames:[],searchFilter:""}},props:{courseId:{type:String,required:!0}},methods:{userFullName:function(e){var t=e.name,n=t.first,r=t.last;return"".concat(n," ").concat(r)},handleSubmit:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={userIds:e.checkedNames,courseId:e.courseId},t.next=3,e.$store.dispatch(z["f"],n);case 3:e.$emit("close-modal");case 4:case"end":return t.stop()}}),t)})))()}},computed:{course:function(){return this.$store.getters.getCourseByID(this.courseId)},students:function(){return this.$store.getters.students},unenrolledStudents:function(){var e=this,t=function(t){return!e.course.studentsEnrolled.includes(t.id)};return this.students.filter(t)},filteredStudents:function(){var e=this;return this.unenrolledStudents.filter((function(t){var n=e.userFullName(t);return n.toLowerCase().includes(e.searchFilter.toLowerCase())}))}}});L.render=F;var N=L,V={class:"flex items-center py-4"},$={class:"ml-4"};function A(e,t,n,a,s,c){return Object(r["r"])(),Object(r["f"])("div",V,[Object(r["i"])("img",{src:e.student.avatarUrl,alt:"Avatar",class:"ml-2 w-8 h-8 object-cover rounded-full"},null,8,["src"]),Object(r["i"])("div",$,[Object(r["i"])("div",null,Object(r["E"])(e.student.name.first)+" "+Object(r["E"])(e.student.name.last),1)])])}var E=Object(r["j"])({name:"StudentRow",props:{student:{type:Object,required:!0}}});E.render=A;var R=E,U=Object(r["j"])({components:{BaseInput:f["a"],AddStudentModal:N,StudentRow:R},name:"CourseStudents",data:function(){return{searchFilter:"",addStudentModalOpen:!1}},props:{courseId:{type:String,required:!0}},computed:{students:function(){return this.$store.getters.studentsByCourse(this.courseId)},filteredStudents:function(){var e=this;return this.students.filter((function(t){var n=t.name,r=n.first,a=n.last;return"".concat(r," ").concat(a).toLowerCase().includes(e.searchFilter.toLowerCase())}))}}});U.render=b;t["default"]=U}}]);
//# sourceMappingURL=chunk-13d8c256.26cfb113.js.map