(this.webpackJsonpvalidateformreactapp=this.webpackJsonpvalidateformreactapp||[]).push([[0],{1:function(e,t,r){e.exports={formRegistration:"FormRegistration_formRegistration__1dtnf",item:"FormRegistration_item__2QVpP",naming:"FormRegistration_naming__3I7fh",submit:"FormRegistration_submit__359ty",field:"FormRegistration_field__1onDX",errorMessage:"FormRegistration_errorMessage__4EXQM",invalid:"FormRegistration_invalid__qipYu",complete:"FormRegistration_complete__3bXfh"}},20:function(e,t,r){e.exports=r(32)},25:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),n=r(7),o=r.n(n),s=(r(25),r(4)),l=r(14),c=r(16),m=function(e){return JSON.parse(JSON.stringify(e))},d=r(11);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={dataForm:localStorage.getItem("formData")?JSON.parse(localStorage.getItem("formData")):[{id:1,name:"name",type:"text",title:"Name",isValid:!1,errorText:"",values:""},{id:2,name:"email",type:"text",title:"Email",isValid:!1,errorText:"",values:""},{id:3,name:"password",type:"password",title:"Password",isValid:!1,errorText:"",values:""},{id:4,name:"dateOfBirth",type:"text",title:"Date of Birth",isValid:!1,errorText:"",values:""},{id:5,name:"phoneNumber",type:"text",title:"Phone number",isValid:!1,errorText:"",values:""},{id:6,name:"age",type:"number",title:"Age",isValid:!1,errorText:"",values:""}],isAccount:!1},b={dataForm:[new d.b.Entity("dataForm")]},v=Object(d.a)(p,b);p={dataForm:{entities:v.entities.dataForm||{},ids:v.result.dataForm||{}}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATAFORM_NAME":var r=m(e.dataForm),a=t.payload,i=a.id,n=a.values;return r.entities[i]=f({},e.dataForm.entities[i],{values:n}),r.ids=Object(l.a)(e.dataForm.ids),f({},e,{dataForm:r});case"SET_IS_FORM_VALID":var o=m(e.dataForm),s=t.payload,c=s.id,d=s.errorText,u=s.isValid;return o.entities[c]=f({},e.dataForm.entities[c],{errorText:d,isValid:u}),o.ids=Object(l.a)(e.dataForm.ids),f({},e,{dataForm:o});case"SET_IS_ACCOUNT_CREATED":return f({},e,{isAccount:!0});default:return e}},g=r(17),O=Object(s.combineReducers)({formData:_}),E=Object(s.createStore)(O,Object(g.devToolsEnhancer)()),F=r(5),T=r(1),y=r.n(T),h=r(9),V=r.n(h),x=r(19),j=r.n(x),N=Object(a.memo)((function(e){var t=e.title,r=e.typeOfInput,a=e.values,n=e.setValues,o=e.errorMessage,s=e.hFor,l=e.mask;return i.a.createElement("div",{className:y.a.item},i.a.createElement("label",{htmlFor:s,className:V()(y.a.naming,o&&y.a.invalid)},t),i.a.createElement(j.a,{name:t,id:s,className:y.a.field,type:r,value:a,onChange:n,mask:l}),i.a.createElement("span",{className:y.a.errorMessage},o))})),A=function(e){var t=Object(F.b)();return Object(a.useCallback)((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({type:e,payload:r})}),[t,e])},D=function(e){var t=e.title,r=e.typeOfInput,n=e.values,o=e.formValidCheck,s=e.name,l=e.id,c=e.errorMessage,m="".concat(t,"-").concat(Math.random()),d=A("SET_DATAFORM_NAME"),u=Object(a.useCallback)((function(e){var t=e.currentTarget.value;switch(d({id:l,values:t}),e.currentTarget.name){case"Name":!function(e,t,r){e.length?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+$/.test(e)?t({errorText:"",id:r,isValid:!0}):t({errorText:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b.",id:r,isValid:!1}):t({errorText:"\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c.",id:r,isValid:!1})}(t,o,l);break;case"Email":!function(e,t,r){e.length?/^([A-Za-z0-9_\-.])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(e)?t({errorText:"",id:r,isValid:!0}):t({errorText:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email.",id:r,isValid:!1}):t({errorText:"Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e.",id:r,isValid:!1})}(t,o,l);break;case"Password":!function(e,t,r){e.length<6?t({errorText:"\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439.",id:r,isValid:!1}):t({errorText:"",id:r,isValid:!0})}(t,o,l);break;case"Date of Birth":!function(e,t,r){/^\d\d-\d\d-[\d]{4}$/.test(e)?t({errorText:"",id:r,isValid:!0}):t({errorText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0414\u0414-\u041c\u041c-\u0413\u0413\u0413\u0413.",id:r,isValid:!1})}(t,o,l);break;case"Phone number":!function(e,t,r){/(\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2})/.test(e)?t({errorText:"",id:r,isValid:!0}):t({errorText:"\u041d\u043e\u043c\u0435\u0440 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 10 \u0446\u0438\u0444\u0440.",id:r,isValid:!1})}(t,o,l);break;case"Age":!function(e,t,r){t(e<18?{errorText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0441 18 \u043b\u0435\u0442.",id:r,isValid:!1}:{errorText:"",id:r,isValid:!0})}(t,o,l)}}),[d,t,o]);return i.a.createElement(N,{title:t,typeOfInput:r,values:n,setValues:u,errorMessage:c,hFor:m,mask:{dateOfBirth:"99-99-9999",phoneNumber:"+7 (999) 999-99-99"}[s]})},S=function(e){e.preventDefault()},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(F.c)((function(r){return e(r,t)}))},R=r(8),C=Object(R.a)([function(e){return e.formData.dataForm.entities}],(function(e){return e})),I=Object(R.a)([function(e){return e.formData.dataForm.ids}],(function(e){return e})),w=(Object(R.a)([function(e){return e.formData.formValid}],(function(e){return e})),Object(R.a)([function(e){return e.formData.isAccount}],(function(e){return e}))),M=function(){var e=k(C),t=k(I),r=A("SET_IS_FORM_VALID"),a=A("SET_IS_ACCOUNT_CREATED"),n=k(w),o=t.map((function(t){return i.a.createElement(D,{key:t,title:e[t].title,typeOfInput:e[t].type,values:e[t].values,formValidCheck:r,name:e[t].name,id:t,errorMessage:e[t].errorText})}));return i.a.createElement("form",{onSubmit:S,className:y.a.formRegistration},o,i.a.createElement("div",{className:y.a.item},i.a.createElement("button",{onClick:function(){!function(e,t){return t.every((function(t){return e[t].isValid}))}(e,t)?t.forEach((function(t){e[t].isValid||e[t].values.trim()||r({errorText:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",id:t,isValid:!1})})):(localStorage.setItem("formData",JSON.stringify(e)),a())},className:V()(y.a.submit,n&&y.a.complete),disabled:n},n?"\u2713":"Create my account")))},P=r(6),B=r.n(P),J=function(e){var t=e.field,r=e.dataFormItem;return i.a.createElement("div",{className:B.a.item},i.a.createElement("span",{className:B.a.naming},t,":"),i.a.createElement("div",{className:B.a.field},r))},X=function(){var e=k(C),t=k(I).map((function(t){return i.a.createElement(J,{key:t,field:e[t].title,dataFormItem:e[t].values})}));return i.a.createElement("form",{className:B.a.completedForm},t)};o.a.render(i.a.createElement(F.a,{store:E},i.a.createElement((function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M,null),i.a.createElement(X,null))}),null)),document.getElementById("root"))},6:function(e,t,r){e.exports={completedForm:"CompletedForm_completedForm__3OxOs",item:"CompletedForm_item__1GneX",naming:"CompletedForm_naming__1Bwdm",field:"CompletedForm_field__32YQX"}}},[[20,1,2]]]);
//# sourceMappingURL=main.83212f01.chunk.js.map