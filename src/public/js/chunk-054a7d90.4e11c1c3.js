(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-054a7d90"],{"19bf":function(e,t,a){"use strict";var n=a("7a23"),r={class:"bg-gray-100 dark:bg-gray-800 shadow p-6 rounded-lg"};function c(e,t){return Object(n["r"])(),Object(n["f"])("div",r,[Object(n["y"])(e.$slots,"default")])}const u={};u.render=c;t["a"]=u},"3a42":function(e,t,a){"use strict";var n=a("7a23");function r(e,t,a,r,c,u){return Object(n["r"])(),Object(n["f"])("div",{class:["text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1",e.emphasis?"uppercase tracking-wider":"capitalize"]},[Object(n["y"])(e.$slots,"default")],2)}var c=Object(n["j"])({name:"BaseLabel",props:{emphasis:{type:Boolean,default:!1}}});c.render=r;t["a"]=c},b12e:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),r={class:"text-xl"},c={class:"flex mt-3 divide-x divide-gray-300 dark:divide-gray-700"},u=Object(n["h"])("Name"),i={class:"ml-6 pl-6"},l=Object(n["h"])("Duration"),s=Object(n["h"])(" min "),o={class:"ml-6"},d=Object(n["h"])("Attempts"),b={class:"ml-6"},m=Object(n["h"])("Week"),j={class:"mt-4"},O={class:"border-b border-gray-300 dark:border-gray-700"},f=Object(n["h"])("Exam Items"),x={class:"divide-y divide-gray-300 dark:divide-gray-700"},p={class:"p-3 text-gray-500 font-thin"},v={class:"p-3 flex-grow"},h={class:"flex items-center justify-between"},w={for:"question"},g=Object(n["h"])("Question"),y=Object(n["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"fill-current w-5 h-5"},[Object(n["i"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),k={class:"mt-4"},I=Object(n["h"])("Answer"),L={class:"flex justify-between"},E=Object(n["h"])("Add Exam Item"),V={class:"ml-2"},B=Object(n["h"])("Save Exam");function q(e,t,a,q,C,_){var M=Object(n["z"])("BaseLabel"),U=Object(n["z"])("BaseInput"),A=Object(n["z"])("BaseButton"),$=Object(n["z"])("BasePanel");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])($,null,{default:Object(n["L"])((function(){return[Object(n["i"])("div",r,"Create New Exam for "+Object(n["E"])(e.course.name),1),Object(n["i"])("div",c,[Object(n["i"])("div",null,[Object(n["i"])("label",null,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[u]})),_:1}),Object(n["i"])(U,{modelValue:e.examName,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.examName=t}),type:"text"},null,8,["modelValue"])])]),Object(n["i"])("div",i,[Object(n["i"])("label",null,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[l]})),_:1}),Object(n["M"])(Object(n["i"])("input",{class:"dark:bg-gray-800 rounded w-16",type:"number",name:"",id:"hours",min:"0",max:"2","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.examHours=t}),placeholder:"0"},null,512),[[n["I"],e.examHours,void 0,{number:!0}]]),Object(n["h"])(" "+Object(n["E"])(e.hour),1)]),Object(n["i"])("label",null,[Object(n["M"])(Object(n["i"])("input",{class:"dark:bg-gray-800 rounded ml-3 w-16",type:"number",name:"",id:"minutes",min:"0",max:"59","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.examMinutes=t}),placeholder:"0"},null,512),[[n["I"],e.examMinutes,void 0,{number:!0}]]),s])]),Object(n["i"])("div",o,[Object(n["i"])("label",null,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[d]})),_:1}),Object(n["M"])(Object(n["i"])("input",{class:"dark:bg-gray-800 rounded w-16",type:"number",name:"",id:"minutes",min:"1",max:"5","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.maxAttempts=t})},null,512),[[n["I"],e.maxAttempts,void 0,{number:!0}]])])]),Object(n["i"])("div",b,[Object(n["i"])("label",null,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[m]})),_:1}),Object(n["M"])(Object(n["i"])("input",{class:"dark:bg-gray-800 rounded w-16",type:"number",id:"week",min:"1",max:e.course.weeks,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.week=t})},null,8,["max"]),[[n["I"],e.week,void 0,{number:!0}]])])])]),Object(n["i"])("div",j,[Object(n["i"])("div",O,[Object(n["i"])(M,{emphasis:""},{default:Object(n["L"])((function(){return[f]})),_:1})]),Object(n["i"])("div",x,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.examItems,(function(t,a){return Object(n["r"])(),Object(n["f"])("div",{key:a,class:"flex mb-4"},[Object(n["i"])("div",p,Object(n["E"])(a+1),1),Object(n["i"])("div",v,[Object(n["i"])("div",null,[Object(n["i"])("div",h,[Object(n["i"])("label",w,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[g]})),_:1})]),Object(n["i"])("button",{class:"focus:outline-none text-gray-500 dark:hover:text-white mb-1",onClick:function(t){return e.removeExamItem(a)}},[y],8,["onClick"])]),Object(n["i"])(U,{id:"question",class:"w-full",modelValue:t.question,"onUpdate:modelValue":function(e){return t.question=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]),Object(n["i"])("div",k,[Object(n["i"])("label",null,[Object(n["i"])(M,null,{default:Object(n["L"])((function(){return[I]})),_:1}),Object(n["i"])(U,{class:"w-full",modelValue:t.answer,"onUpdate:modelValue":function(e){return t.answer=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])])])])])})),128))]),Object(n["i"])("div",L,[Object(n["i"])("div",null,[Object(n["i"])(A,{onClick:e.addExamItem},{default:Object(n["L"])((function(){return[E]})),_:1},8,["onClick"])]),Object(n["i"])("div",V,[Object(n["i"])(A,{onClick:e.saveExam,prominent:""},{default:Object(n["L"])((function(){return[B]})),_:1},8,["onClick"])])])])]})),_:1})])}a("4de4"),a("96cf");var C=a("1da1"),_=a("82ea"),M=a("b3b3"),U=a("3a42"),A=a("19bf"),$=a("d5e7"),z=a("8141"),N=a("2d40"),H=Object(n["j"])({components:{BaseInput:M["a"],BaseButton:_["a"],BasePanel:A["a"],BaseLabel:U["a"]},name:"ExamCreationPage",data:function(){return{examName:"",examHours:1,examMinutes:0,maxAttempts:3,week:1,examItems:[{question:"",questionType:"text",answer:"",choices:[]}],questionTypes:[{text:"Text",value:"text"}]}},props:{courseId:{type:String,required:!0}},computed:{hour:function(){return 1===this.examHours?"hour":"hours"},course:function(){return this.$store.getters.getCourseByID(this.courseId)},examDurationInSeconds:function(){return 3600*this.examHours+60*this.examMinutes}},methods:{addExamItem:function(){this.examItems.push({question:"",questionType:"text",answer:"",choices:[]})},removeExamItem:function(e){this.examItems=this.examItems.filter((function(t,a){return a!==e}))},saveExam:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={label:e.examName,random:!1,length:e.examItems.length,duration:e.examDurationInSeconds,courseId:e.courseId,maxAttempts:e.maxAttempts,examItems:e.examItems,week:e.week},t.next=4,$["a"].create(a);case 4:n=t.sent,e.$store.commit(N["c"],n),e.$store.dispatch(z["a"],"Exam successfully created"),e.$router.push("/courses/".concat(e.courseId)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$store.dispatch(z["a"],t.t0.response.data.error);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}});H.render=q;t["default"]=H}}]);
//# sourceMappingURL=chunk-054a7d90.4e11c1c3.js.map