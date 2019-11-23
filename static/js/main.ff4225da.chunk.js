(this.webpackJsonpvalidateformreactapp=this.webpackJsonpvalidateformreactapp||[]).push([[0],{1:function(e,a,t){e.exports={completedForm:"CompletedForm_completedForm__2cWC9",item:"CompletedForm_item__3kKq5",naming:"CompletedForm_naming__3vXQb",field:"CompletedForm_field__1G2p9"}},16:function(e,a,t){e.exports=t(28)},2:function(e,a,t){e.exports={formRegistration:"FormRegistration_formRegistration__3Db97",item:"FormRegistration_item__3pWOk",naming:"FormRegistration_naming__lGP69",submit:"FormRegistration_submit__25QBC",field:"FormRegistration_field__3mwpj",errorMessage:"FormRegistration_errorMessage__Z0ylW",invalid:"FormRegistration_invalid__3h1at",complete:"FormRegistration_complete__ZETju"}},21:function(e,a,t){},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(6),i=t.n(o),m=(t(21),t(22),t(2)),s=t.n(m),c=t(15),l=t(7),d=t.n(l),u=n.a.memo((function(e){var a=e.title,t=e.typeOfInput,o=e.values,i=e.setValue,m=e.errorMessage,c=e.hFor,l=e.isFormValidCheck;return Object(r.useEffect)((function(){l(!m,a.toLocaleLowerCase())}),[o]),n.a.createElement("div",{className:s.a.item},n.a.createElement("label",{htmlFor:c,className:d()(s.a.naming,m&&s.a.invalid)},a),n.a.createElement("input",{name:a,id:c,className:s.a.field,type:t,value:o,onChange:function(e){i(e)}}),n.a.createElement("span",{className:s.a.errorMessage},m))})),p=function(e){var a=e.title,t=e.typeOfInput,o=e.values,i=e.setData,m=e.isFormValidCheck,s=Object(r.useState)(""),l=Object(c.a)(s,2),d=l[0],p=l[1],f=Object(r.useCallback)((function(e){var a=e.currentTarget.value;switch(i(a),e.currentTarget.name){case"Name":a.length?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+$/.test(a)?p(""):p("\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b."):p("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c.");break;case"Email":a.length?/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(a)?p(""):p("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email."):p("Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e.");break;case"Password":a.length<6?p("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439."):p("");break;case"Date of Birth":a.length?/^\d\d.\d\d.[\d]{4}$/.test(a)?p(""):p("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0414\u0414-\u041c\u041c-\u0413\u0413\u0413\u0413."):p("\u0414\u0430\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430.");break;case"Phone number":/(^\+7[0-9]{10}$)|(^8[0-9]{10}$)/.test(a)?p(""):p("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 +7 \u0438\u043b\u0438 8 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435\u0433\u043e 11 \u0446\u0438\u0444\u0440")}}),[o]),F="".concat(a,"-").concat(Math.random());return n.a.createElement(u,{title:a,typeOfInput:t,values:o,setValue:f,errorMessage:d,hFor:F,isFormValidCheck:m})},f=function(e){var a=e.dataForm,t=e.setDataFormName,r=e.setDataFormEmail,o=e.setDataFormPassword,i=e.setDataFormBirth,m=e.setDataFormPhone,c=e.isFormValidCheck,l=e.isFormValid,u=e.isAccountCreated,f=e.isAccount;return n.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:s.a.formRegistration},n.a.createElement(p,{title:"Name",typeOfInput:"text",values:a.name,setData:t,isFormValidCheck:c}),n.a.createElement(p,{title:"Email",typeOfInput:"email",values:a.email,setData:r,isFormValidCheck:c}),n.a.createElement(p,{title:"Password",typeOfInput:"password",values:a.password,setData:o,isFormValidCheck:c}),n.a.createElement(p,{title:"Date of Birth",typeOfInput:"text",values:a.dateOfBirth,setData:i,isFormValidCheck:c}),n.a.createElement(p,{title:"Phone number",typeOfInput:"text",values:a.phone,setData:m,isFormValidCheck:c}),n.a.createElement("div",{className:s.a.item},n.a.createElement("button",{onClick:function(){l[0].name&&l[0].email&&l[0].password&&l[0].dateOfBirth&&l[0].phone&&(localStorage.setItem("formData",JSON.stringify(a)),u())},className:d()(s.a.submit,f&&s.a.complete)},f?"\u2713":"Create my account")))},F=t(1),E=t.n(F),_=function(e){var a=e.dataForm;return n.a.createElement("form",{className:E.a.completedForm},n.a.createElement("div",{className:E.a.item},n.a.createElement("span",{className:E.a.naming},"Name:"),n.a.createElement("span",{className:E.a.field},a.name)),n.a.createElement("div",{className:E.a.item},n.a.createElement("span",{className:E.a.naming},"Email:"),n.a.createElement("span",{className:E.a.field},a.email)),n.a.createElement("div",{className:E.a.item},n.a.createElement("span",{className:E.a.naming},"Password:"),n.a.createElement("span",{className:E.a.field},a.password)),n.a.createElement("div",{className:E.a.item},n.a.createElement("span",{className:E.a.naming},"Date of Birth:"),n.a.createElement("span",{className:E.a.field},a.dateOfBirth)),n.a.createElement("div",{className:E.a.item},n.a.createElement("span",{className:E.a.naming},"Phone number:"),n.a.createElement("span",{className:E.a.field},a.phone)))},h=t(14),O=function(e){return e.formData.dataForm},D=function(e){return e.formData.isFormValid},g=function(e){return e.formData.isAccount},A=t(13);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){Object(A.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N={dataForm:localStorage.getItem("formData")?[JSON.parse(localStorage.getItem("formData"))]:[{name:"",email:"",password:"",dateOfBirth:"",phone:""}],isFormValid:[{name:!1,email:!1,password:!1,dateOfBirth:!1,phone:!1}],isAccount:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DATAFORM_NAME":return v({},e,{dataForm:e.dataForm.map((function(e){return v({},e,{name:a.name})}))});case"SET_DATAFORM_EMAIL":return v({},e,{dataForm:e.dataForm.map((function(e){return v({},e,{email:a.email})}))});case"SET_DATAFORM_PASSWORD":return v({},e,{dataForm:e.dataForm.map((function(e){return v({},e,{password:a.password})}))});case"SET_DATAFORM_DATE_OF_BIRTH":return v({},e,{dataForm:e.dataForm.map((function(e){return v({},e,{dateOfBirth:a.dateOfBirth})}))});case"SET_DATAFORM_PHONE":return v({},e,{dataForm:e.dataForm.map((function(e){return v({},e,{phone:a.phone})}))});case"SET_IS_FORM_VALID":return v({},e,{isFormValid:e.isFormValid.map((function(e){return console.log(e),"name"===a.field?v({},e,{name:a.isValid}):"email"===a.field?v({},e,{email:a.isValid}):"password"===a.field?v({},e,{password:a.isValid}):"date of birth"===a.field?v({},e,{dateOfBirth:a.isValid}):"phone number"===a.field?v({},e,{phone:a.isValid}):v({},e)}))});case"SET_IS_ACCOUNT_CREATED":return v({},e,{isAccount:!0});default:return e}},C=Object(h.a)((function(e){return{dataForm:O(e),isFormValid:D(e),isAccount:g(e)}}),{setDataFormName:function(e){return{type:"SET_DATAFORM_NAME",name:e}},setDataFormEmail:function(e){return{type:"SET_DATAFORM_EMAIL",email:e}},setDataFormPassword:function(e){return{type:"SET_DATAFORM_PASSWORD",password:e}},setDataFormBirth:function(e){return{type:"SET_DATAFORM_DATE_OF_BIRTH",dateOfBirth:e}},setDataFormPhone:function(e){return{type:"SET_DATAFORM_PHONE",phone:e}},isFormValidCheck:function(e,a){return{type:"SET_IS_FORM_VALID",isValid:e,field:a}},isAccountCreated:function(){return{type:"SET_IS_ACCOUNT_CREATED"}}})((function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{dataForm:e.dataForm[0],setDataFormName:e.setDataFormName,setDataFormEmail:e.setDataFormEmail,setDataFormPassword:e.setDataFormPassword,setDataFormBirth:e.setDataFormBirth,setDataFormPhone:e.setDataFormPhone,isFormValidCheck:e.isFormValidCheck,isFormValid:e.isFormValid,isAccountCreated:e.isAccountCreated,isAccount:e.isAccount}),n.a.createElement(_,{dataForm:e.dataForm[0]}))})),y=t(5),S=Object(y.b)({formData:T}),w=Object(y.c)(S);i.a.render(n.a.createElement(C,{store:w}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff4225da.chunk.js.map