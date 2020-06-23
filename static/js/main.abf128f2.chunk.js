(this["webpackJsonppervote-web"]=this["webpackJsonppervote-web"]||[]).push([[0],{146:function(e,t,a){(function(t){e.exports=t.config={i18n:{backend_api:{url:"https://pervote-micro.herokuapp.com/"}}}}).call(this,a(104))},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n);function s(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)}s.defaultProps={hero:"defaultHero"}},35:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(){return localStorage.getItem("usertoken")},r=function(){return localStorage.getItem("email")}},371:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return w}));var n=a(50),r=a.n(n),s=a(90),o=a(56),i=a(57),l=a(59),c=a(58),u=a(60),d=a(0),m=a.n(d),p=a(130),h=a.n(p),g=a(71),f=a.n(g),b=a(35),A=a(34),v=a(372),w=(a(146),function(t){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(c.a)(a).call(this))).onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""})},e.state={points:"",gosterilecekler:[],showProgress:!0,alertText:"",showAlert:!1},e}return Object(u.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,n,s,o,i,l=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(b.b)()){t.next=5;break}this.props.history.push("/pervote-web/login"),t.next=39;break;case 5:return Object(b.a)(),t.next=8,fetch(e.config.i18n.backend_api.url+"points/personnel/"+this.props.location.state).then((function(e){return e.json()})).then((function(e){return l.setState({points:e})})).catch((function(){return l.setState({hasErrors:!0})}));case 8:if(this.state.points){t.next=13;break}this.setState({alertText:"Your personnel dont have any points for display."}),this.setState({showAlert:!0}),t.next=39;break;case 13:a=this.state.points,n=0;case 15:if(!(n<a.length)){t.next=37;break}return s=a[n],o={},t.next=20,fetch(e.config.i18n.backend_api.url+"meetings/"+s.meetingID).then((function(e){return e.json()})).then((function(e){return o=e}));case 20:return s.subject=o.subject,s.date=o.date,console.log(s),i={},t.next=26,fetch(e.config.i18n.backend_api.url+"personnels/"+s.scorerPersonnel).then((function(e){return e.json()})).then((function(e){return i=e}));case 26:console.log(i),null===i||void 0===i.photo?(s.scorerMail="kisisilinmis@pervote.com",s.photo="data:image/jpeg;base64,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"):(s.scorerMail=i.email,s.photo=i.photo),console.log(s),delete s.createdAt,delete s.meetingID,delete s.ratedPersonnel,delete s.updatedAt,delete s.__v;case 34:n++,t.next=15;break;case 37:this.setState({showProgress:!1}),this.setState({gosterilecekler:a});case 39:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.gosterilecekler.map((function(e,t){return m.a.createElement(v.a,{key:t,keyval:t,val:e})}));return m.a.createElement(A.a,null,m.a.createElement(h.a,{visible:this.state.showProgress,type:"Ball-CradleLoader",color:"#0066ff",height:200,width:200}),m.a.createElement(f.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert}),m.a.createElement("div",{styles:{overflowY:"scroll"}}," ",e))}}]),a}(d.Component))}).call(this,a(104))},372:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(56),r=a(57),s=a(59),o=a(58),i=a(60),l=a(0),c=a.n(l),u=a(564),d=a(373),m=a.n(d),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).state={personnel:""},e}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"person",key:this.props.val._id},c.a.createElement("img",{src:this.props.val.photo}),c.a.createElement("h4",null,"Meeting Subject: ",this.props.val.subject),c.a.createElement("h4",null,"Meeting Date: ",m()(this.props.val.date).format("DD-MM-YYYY HH:mm")),c.a.createElement("h4",null,"Voted Pers. Mail: ",this.props.val.scorerMail),c.a.createElement("h4",null,"Point: ",this.props.val.pointValue),c.a.createElement(u.a,{name:"half-rating-read",defaultValue:this.props.val.pointValue,precision:.1,readOnly:!0,size:"large"}),c.a.createElement("h5",null,"Description: ",this.props.val.description))}}]),t}(l.Component)},374:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return C}));var n=a(89),r=a(142),s=a(50),o=a.n(s),i=a(90),l=a(56),c=a(57),u=a(59),d=a(58),m=a(60),p=a(0),h=a.n(p),g=a(210),f=a.n(g),b=a(71),A=a.n(b),v=a(35),w=a(34),E=a(66);a(146);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={},j=[{department:""}],C=function(t){function a(){var e;return Object(l.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""})},e.state={email:"",columns:[],data:[],admin:{},loading:!0,showAlert:!1,alertText:""},e}return Object(m.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=Object(i.a)(o.a.mark((function t(){var a,n=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Object(v.b)()){t.next=5;break}this.props.history.push("/pervote-web/login"),t.next=12;break;case 5:return a=Object(v.a)(),this.setState({email:a}),t.next=9,fetch(e.config.i18n.backend_api.url+"admins/"+a).then((function(e){return e.json()})).then((function(e){return n.setState({admin:e})}));case 9:this.setState({data:this.state.admin.departments}),this.setState({loading:!1}),this.setState({columns:[{title:"Department",field:"department"}]});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addDepartment",value:function(){var e=this;if(null!==O){for(var t=this.state.data,a=0,n=0;n<t.length+1;n++){var r=t[n],s={department:""};n===t.length?s.department=O.department:s.department=r.department,j[a]=s,a++}var o={email:this.state.email,departments:j};Object(E.d)(o).then((function(t){void 0!==t.error||t.toString().toLowerCase().includes("error")?(e.setState({showAlert:!0}),e.setState({alertText:"Check your connection"})):(e.setState({showAlert:!0}),e.setState({alertText:"Department added succesfully!"}))}))}}},{key:"deleteDepartment",value:function(){var e=this;if(null!==O){for(var t=this.state.data,a=0,n=0;n<t.length;n++){var r=t[n],s={department:""};O.department!==r.department&&(console.log("ilk if"),console.log(O.department),console.log(r.department),s.department=r.department,j[a]=s,a++),console.log(j)}var o={email:this.state.email,departments:j};console.log(j),Object(E.d)(o).then((function(t){void 0!==t.error||t.toString().toLowerCase().includes("error")?(e.setState({showAlert:!0}),e.setState({alertText:"Check your connection"})):(e.setState({showAlert:!0}),e.setState({alertText:"Department deleted succesfully!"}))}))}}},{key:"render",value:function(){var e=this;return h.a.createElement(w.a,null,h.a.createElement(f.a,{title:"Department List",columns:this.state.columns,data:this.state.data,isLoading:this.state.loading,localization:{header:{actions:"Action"},toolbar:{searchPlaceholder:"Search Department"},body:{addTooltip:"Add new Department",emptyDataSourceMessage:"You dont have Department for list",filterRow:{filterTooltip:"Filter Department"},editRow:{deleteText:"Department will be delete. Are you sure that?"}}},style:{backgroundColor:"#f7f7f7"},options:{pageSizeOptions:[5,10]},editable:{onRowAdd:function(t){return new Promise((function(a,n){setTimeout((function(){if(t.submitted=!0,!t.department)return e.setState({alertText:"Department must be add!"}),e.setState({showAlert:!0}),void n();a(),e.setState((function(a){var n=Object(r.a)(a.data);return n.push(t),console.log(t),O=t,e.addDepartment(),y({},a,{data:n})}))}),500)}))},onRowDelete:function(t){return new Promise((function(a){setTimeout((function(){a(),e.setState((function(a){var n=Object(r.a)(a.data);return console.log(t),O=t,e.deleteDepartment(),n.splice(n.indexOf(t),1),y({},a,{data:n})}))}),500)}))}}}),h.a.createElement(A.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert}))}}]),a}(p.Component)}).call(this,a(104))},380:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return j}));var n=a(89),r=a(142),s=a(50),o=a.n(s),i=a(90),l=a(56),c=a(57),u=a(59),d=a(58),m=a(60),p=a(0),h=a.n(p),g=a(210),f=a.n(g),b=a(71),A=a.n(b),v=a(35),w=a(34),E=a(66);a(146);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={},j=function(t){function a(){var e;return Object(l.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""})},e.state={email:"",columns:[],data:[],users:[],hasErrors:!1,loading:!0,admin:"",showAlert:!1,alertText:""},e}return Object(m.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=Object(i.a)(o.a.mark((function t(){var a,n,r,s,i,l,c,u,d=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Object(v.b)()){t.next=5;break}this.props.history.push("/pervote-web/login"),t.next=26;break;case 5:return a=Object(v.a)(),this.setState({admin:a}),t.next=9,fetch(e.config.i18n.backend_api.url+"personnels/admin/"+a).then((function(e){return e.json()})).then((function(e){return d.setState({users:e})})).catch((function(){return d.setState({hasErrors:!0})}));case 9:n=this.state.users,r=0;case 11:if(!(r<n.length)){t.next=23;break}return s=n[r],void 0!==n[r].photo&&(n[r].photo=h.a.createElement("img",{style:{height:"100px",width:"100px"},src:s.photo})),i=[],l=0,t.next=18,fetch(e.config.i18n.backend_api.url+"points/personnel/"+n[r]._id).then((function(e){return e.json()})).then((function(e){return i=e}));case 18:for(c=0;c<i.length;c++)void 0!==(u=i[c]).pointValue&&(l+=u.pointValue);0!==l?(l/=i.length,s.rate=l.toFixed(2),console.log(s)):s.rate="-";case 20:r++,t.next=11;break;case 23:this.setState({data:n}),this.setState({loading:!1}),this.setState({columns:[{title:"Rate",field:"rate",type:"string",editable:"never",cellStyle:function(e){return{fontSize:35,fontWeight:"bold",fontStyle:"italic"}}},{title:"Photo",field:"photo",type:"string",editable:"never"},{title:"eMail",field:"email"},{title:"Name",field:"name",editable:"never"},{title:"Surname",field:"surname",editable:"never"},{title:"BirthYear",field:"birthyear",type:"numeric",editable:"never"},{title:"Department",field:"department",editable:"never"},{title:"Phone",field:"phone",type:"numeric",editable:"never"}]});case 26:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"deletePers",value:function(){if(null!==O){var e={email:O.email};Object(E.c)(e).then((function(e){console.log(e)}))}}},{key:"addPers",value:function(){if(null!==O){var e=Math.random().toString(36).slice(-8),t={email:O.email,password:e,admin:this.state.admin};console.log(t),Object(E.b)(t).then((function(e){console.log(e)}))}}},{key:"render",value:function(){var e=this;return h.a.createElement(w.a,null,h.a.createElement(f.a,{title:"Personnel List",columns:this.state.columns,data:this.state.data,isLoading:this.state.loading,localization:{header:{actions:"Action"},toolbar:{searchPlaceholder:"Search Personnel"},body:{addTooltip:"Add new Personnel",emptyDataSourceMessage:"You dont have personnels for list",filterRow:{filterTooltip:"Filter Personnel"},editRow:{deleteText:"Personnel will be delete. Are you sure that?"}}},style:{backgroundColor:"#f7f7f7"},options:{pageSizeOptions:[2,5],rowStyle:function(e){if("-"===e.rate)return{backgroundColor:"rgba(255,255,0, 0.5)"};var t=e.rate/5;return console.log(t),t<.1?{backgroundColor:"rgba(255, 0, 0, 0.5)"}:t<.2?{backgroundColor:"rgba(255, 0, 0, 0.6)"}:t<.3?{backgroundColor:"rgba(255, 0, 0, 0.7)"}:t<.4?{backgroundColor:"rgba(255, 0, 0, 0.8)"}:t<.5?{backgroundColor:"rgba(255, 0, 0, 0.9)"}:t<.6?{backgroundColor:"rgba(0, 204, 102,0.6)"}:t<.7?{backgroundColor:"rgba(0, 204, 102,0.7)"}:t<.8?{backgroundColor:"rgba(0, 204, 102,0.8)"}:t<.9?{backgroundColor:"rgba(0, 204, 102,0.9)"}:{backgroundColor:"rgba(0, 204, 102,1)"}}},editable:{onRowAdd:function(t){return new Promise((function(a,n){setTimeout((function(){return t.submitted=!0,t.email?t.email.includes("@")?(a(),e.setState({alertText:"Personnel login password will be sending to "+t.email}),e.setState({showAlert:!0}),void e.setState((function(a){var n=Object(r.a)(a.data);return n.push(t),console.log(t),O=t,e.addPers(),y({},a,{data:n})}))):(e.setState({alertText:"Personnel email must be include '@'"}),e.setState({showAlert:!0}),void n()):(e.setState({alertText:"Personnel email must be add!"}),e.setState({showAlert:!0}),void n())}),500)}))},onRowDelete:function(t){return new Promise((function(a){setTimeout((function(){a(),e.setState((function(a){var n=Object(r.a)(a.data);return console.log(t),O=t,e.deletePers(),n.splice(n.indexOf(t),1),y({},a,{data:n})}))}),500)}))}},actions:[{icon:"poll",tooltip:"Show Points Detail",onClick:function(t,a){"-"===a.rate?(console.log(a),e.setState({alertText:"Your personnel doesnt have any point for display"}),e.setState({showAlert:!0})):e.props.history.push({pathname:"/pervote-web/personnel/"+a._id,state:a._id})}}]}),h.a.createElement(A.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert}))}}]),a}(p.Component)}).call(this,a(104))},381:function(e,t,a){e.exports=a.p+"static/media/logo.4441f2b4.svg"},394:function(e,t,a){e.exports=a(546)},399:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),i=a(384),l=(a(399),a(34));function c(e){var t=e.children,a=e.title;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,a),r.a.createElement("p",null),t)}var u=a(43),d=function(){return r.a.createElement(l.a,null,r.a.createElement(c,{title:"PerVote Web"},r.a.createElement("div",{className:"divider"}),r.a.createElement("h3",null,"This web page designed for admins."),r.a.createElement("h5",null,"Admins can be add/delete personnel with using system."),r.a.createElement("h5",null,"Department information can be enter with using system."),r.a.createElement("h5",null,"Admins can be display that pointed personnel for meetings."),r.a.createElement("h4",null,"You should use Login button from here if you want to use this system."),r.a.createElement(u.b,{to:"/pervote-web/login",className:"btn-primary"},"Login Button")))},m=a(89),p=a(50),h=a.n(p),g=a(90),f=a(56),b=a(57),A=a(59),v=a(58),w=a(75),E=a(60),S=a(326),y=a(577),O=a(368),j=a.n(O),C=a(130),k=a.n(C),x=a(68),P=a(71),D=a.n(P),T=function(){return{type:"SIGN_IN_SUCCESS"}},M=function(e){return console.log(e),{type:"SAVE_EMAIL",text:e}},B=a(35),N=a(66),Q=(a(146),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(A.a)(this,Object(v.a)(t).call(this))).handleKeyPress=function(t){"Enter"===t.key&&e.login()},e.onResolved=function(){e.setState({isVerified:!0}),console.log(e.state.isVerified)},e.sendMessage=function(){e.recaptcha.execute()},e.onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""})},e.state={email:"",password:"",errors:{},warning:!1,errorMessage:"",isVerified:!1,showProgress:!1,showAlert:!1,alertText:""},e.onChange=e.onChange.bind(Object(w.a)(e)),e.onSubmit=e.onSubmit.bind(Object(w.a)(e)),e.forgetPassword=e.forgetPassword.bind(Object(w.a)(e)),e}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(B.b)()&&this.props.history.push("/pervote-web/personnel");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.recaptcha.execute(),0===this.state.password.length||0===this.state.email.length)this.setState({errorMessage:"Please fill all requirements!"});else{this.setState({showProgress:!0});var a={email:this.state.email,password:this.state.password};Object(N.a)(a).then((function(e){e&&(t.setState({showProgress:!1}),void 0!==e.error||e.toString().toLowerCase().includes("error")?void 0!==e.error?t.setState({errorMessage:e.error}):t.setState({errorMessage:"We cant react API, sorry!"}):(t.setState({errorMessage:""}),t.props.loginaction(),t.props.emailaction(t.state.email),t.props.history.push({pathname:"/pervote-web/personnel"})))}))}}},{key:"forgetPassword",value:function(e){var t=this;if(e.preventDefault(),0===this.state.email.length)this.setState({errorMessage:"Please enter your email!"});else if(this.state.email.includes("@")){this.setState({showProgress:!0});var a={email:this.state.email};Object(N.e)(a).then((function(e){e&&(console.log(e),t.setState({showProgress:!1}),void 0!==e.error?(console.log("buraya gir"),t.setState({errorMessage:e.error})):(t.setState({alertText:"Admin login password sent to "+t.state.email}),t.setState({showAlert:!0})))}))}else this.setState({errorMessage:"Email must be include '@'!"})}},{key:"render",value:function(){var e=this;return r.a.createElement(l.a,null,r.a.createElement(c,{title:"Sign IN"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},this.state.errorMessage&&r.a.createElement(y.a,{variant:"outlined",severity:"error",className:"error"},this.state.errorMessage),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement("span",null,"Don't you have an account?"," ",r.a.createElement("a",{className:"underline",onClick:function(){return e.props.history.push("/pervote-web/register")}},"Sign UP now!"))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-basic",name:"email",value:this.state.email,onChange:this.onChange,label:"e-Mail",variant:"outlined"})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",type:"password",name:"password",value:this.state.password,onChange:this.onChange,label:"Password",autoComplete:"current-password",variant:"outlined"})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn-primary",type:"submit",onClick:this.onSubmit},"Login")),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("a",{className:"underline",onClick:this.forgetPassword},"Did you forget your password?"))),r.a.createElement(j.a,{ref:function(t){return e.recaptcha=t},sitekey:"6Lf46vcUAAAAAE0FSDWracSMu-V7VN16jCaTPY94",onResolved:this.onResolved}),r.a.createElement("div",{className:"divider"}),r.a.createElement(k.a,{visible:this.state.showProgress,type:"ThreeDots",color:"#0066ff",height:50,width:50}),r.a.createElement(D.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert}))))}}]),t}(n.Component)),Y=Object(x.b)((function(e){return{isLogged:e.log}}),{loginaction:T,emailaction:M})(Q),I=function(){return r.a.createElement(l.a,null,r.a.createElement(c,{title:"404 - Page Not Found"},r.a.createElement(u.b,{to:"/pervote-web/",className:"btn-primary"},"Return Home Page")))},U=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(A.a)(this,Object(v.a)(t).call(this))).onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""}),e.props.history.push("/pervote-web/login")},e.state={email:"",password:"",passwordagain:"",errorMessage:"",showAlert:!1,alertText:""},e.onChange=e.onChange.bind(Object(w.a)(e)),e.onSubmit=e.onSubmit.bind(Object(w.a)(e)),e}return Object(E.a)(t,e),Object(b.a)(t,[{key:"onChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),0===this.state.password.length||0===this.state.email.length||0===this.state.passwordagain.length)this.setState({errorMessage:"Please fill all requirements!"});else if(this.state.password!==this.state.passwordagain)this.setState({errorMessage:"Passwords must be same!"});else if(this.state.email.includes("@")){var a={email:this.state.email,password:this.state.password};Object(N.g)(a).then((function(e){e&&(console.log(e),void 0!==e.error?t.setState({errorMessage:e.error}):(t.setState({alertText:t.state.email+" registered succesfully!Returning login page..."}),t.setState({showAlert:!0})))}))}else this.setState({errorMessage:"Email must be include '@'!"})}},{key:"render",value:function(){var e=this;return r.a.createElement(l.a,null,r.a.createElement(c,{title:"Sign UP"},r.a.createElement("div",null,r.a.createElement("span",null,"Have an account?"," ",r.a.createElement("a",{className:"underline",onClick:function(){return e.props.history.push("/pervote-web/login")}},"Sign IN now!"))),r.a.createElement("div",{className:"divider"}),this.state.errorMessage&&r.a.createElement(y.a,{variant:"outlined",severity:"error",className:"error"},this.state.errorMessage),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-basic",label:"e-Mail",variant:"outlined",onChange:this.onChange,value:this.state.mail,name:"email"})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",label:"Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:this.onChange,value:this.state.password})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",label:"Password (Again)",type:"password",name:"passwordagain",autoComplete:"current-password",variant:"outlined",onChange:this.onChange,value:this.state.passwordagain})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{onClick:this.onSubmit},r.a.createElement("button",{className:"btn-primary"},"Register")),r.a.createElement(D.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert})))}}]),t}(n.Component),R=a(371),G=function(){return r.a.createElement(l.a,null,r.a.createElement(c,{title:"PerVote Mobile App"},r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement("h5",null,"Your personnels will use here. It's open source."),r.a.createElement("span",null,r.a.createElement("a",{className:"underline",onClick:function(){return window.open("https://github.com/batuhansubasi/pervote-mobil","_blank")}},"Click for Mobile App!")))))},X=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(A.a)(this,Object(v.a)(t).call(this))).onConfirm=function(){e.setState({showAlert:!1}),e.setState({alertText:""})},e.state={email:"",password:"",passwordagain:"",newpasswordagain:"",errorMessage:"",showAlert:!1,showProgress:!1,alertText:""},e.onChange=e.onChange.bind(Object(w.a)(e)),e.onSubmit=e.onSubmit.bind(Object(w.a)(e)),e}return Object(E.a)(t,e),Object(b.a)(t,[{key:"onChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=Object(B.b)())?(t=Object(B.a)(),this.setState({email:t})):this.props.history.push("/pervote-web/login");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),0===this.state.password.length||0===this.state.newpassword.length||0===this.state.newpasswordagain.length)this.setState({errorMessage:"Please fill all requirements!"});else if(this.state.newpassword!==this.state.newpasswordagain)this.setState({errorMessage:"Passwords must be same!"});else{this.setState({errorMessage:""});var a={email:this.state.email,password:this.state.password,newpassword:this.state.newpassword};console.log(a),Object(N.f)(a).then((function(e){console.log(e),e&&(void 0!==e.error?t.setState({errorMessage:e.error}):(t.setState({alertText:"Password changed successfully!"}),t.setState({showAlert:!0})))}))}}},{key:"render",value:function(){return r.a.createElement(l.a,null,r.a.createElement(c,{title:"SETTINGS"},this.state.errorMessage&&r.a.createElement(y.a,{variant:"outlined",severity:"error",className:"error"},this.state.errorMessage),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",label:"Current Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:this.onChange,value:this.state.password})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",label:"New Password",type:"password",name:"newpassword",autoComplete:"current-password",variant:"outlined",onChange:this.onChange,value:this.state.newpassword})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement(S.a,{required:!0,id:"outlined-password-input",label:"New Password (Again)",type:"password",name:"newpasswordagain",autoComplete:"current-password",variant:"outlined",onChange:this.onChange,value:this.state.newpasswordagain})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{onClick:this.onSubmit},r.a.createElement("button",{className:"btn-primary"},"Save")),r.a.createElement(k.a,{visible:this.state.showProgress,type:"ThreeDots",color:"#0066ff",height:50,width:50}),r.a.createElement(D.a,{title:this.state.alertText,onConfirm:this.onConfirm,show:this.state.showAlert})))}}]),t}(n.Component),q=a(374),V=a(380),L=a(383),F=a(382),H=a(381),_=a.n(H);function z(e){return{display:e?"block":"none"}}var Z=function(){var e=Object(n.useState)(0),t=Object(L.a)(e,2),a=t[0],s=t[1],o=Object(x.d)((function(e){return e.isLogged})),i=Object(x.c)();return Object(B.b)()&&(o=!0),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(u.b,{to:"/pervote-web/"},r.a.createElement("img",{src:_.a,alt:"Beach Resort"})),r.a.createElement("button",{type:"button",className:"nav-btn",onClick:function(){return s(!a)}},r.a.createElement(F.a,{className:"nav-icon"}))),r.a.createElement("ul",{className:a?"nav-links show-nav":"nav-links"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/login",style:z(!o)},"Login")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/register",style:z(!o)},"Register")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/mobile",style:z(!o)},"Mobile App")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/personnel",style:z(o)},"My Personnels")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/department",style:z(o)},"My Departments")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/settings",style:z(o)},"Admin Settings")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/pervote-web/",style:z(o),onClick:function(){return i(T())}},"Logout")))))},W=a(108);var J=function(e){var t=e.auth,a=e.component,n=Object(i.a)(e,["auth","component"]);return r.a.createElement(W.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(W.a,{to:{pathname:"/"}})}}))},K=function(){var e=Object(x.d)((function(e){return e.isLogged}));return Object(B.b)()&&(e=!0),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W.d,null,r.a.createElement(W.b,{exact:!0,path:"/pervote-web/",component:d}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/login",component:Y,auth:!e}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/register",component:U,auth:!e}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/settings",component:X,auth:e}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/department",component:q.a,auth:e}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/mobile",component:G}),r.a.createElement(W.b,{exact:!0,path:"/pervote-web/personnel/:id",component:R.a,auth:e}),r.a.createElement(J,{exact:!0,path:"/pervote-web/personnel",component:V.a,auth:e}),r.a.createElement(W.b,{component:I})))},$=a(76),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_SUCCESS":return!0===e&&(localStorage.removeItem("usertoken"),localStorage.removeItem("email")),!e;default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_EMAIL":return console.log(t.text),e=t.text;default:return e}},ae=Object($.c)({isLogged:ee,isEmail:te}),ne=Object($.e)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(x.a,{store:ne},r.a.createElement(u.a,null,r.a.createElement(K,null))),document.getElementById("root"))},66:function(e,t,a){"use strict";(function(e){a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(110),r=a.n(n),s=(a(146),function(t){return r.a.post(e.config.i18n.backend_api.url+"admins/add",{email:t.email,password:t.password}).then((function(e){return e.data})).catch((function(e){return e.data}))}),o=function(t){return r.a.post(e.config.i18n.backend_api.url+"admins/forgetpassword/"+t.email,{email:t.email}).then((function(e){return e.data})).catch((function(e){return e.data}))},i=function(t){return console.log("admin email",t.email),console.log("admin pass",t.password),r.a.post(e.config.i18n.backend_api.url+"admins/login",{email:t.email,password:t.password}).then((function(e){return localStorage.setItem("usertoken",e.data),localStorage.setItem("email",t.email),e.data})).catch((function(e){return e}))},l=function(t){return r.a.delete(e.config.i18n.backend_api.url+"personnels/"+t.email).catch((function(e){return e}))},c=function(t){return r.a.post(e.config.i18n.backend_api.url+"personnels/add",{email:t.email,password:t.password,admin:t.admin}).then((function(e){return e})).catch((function(e){return e}))},u=function(t){return r.a.put(e.config.i18n.backend_api.url+"admins/changepassword",{email:t.email,password:t.password,newpassword:t.newpassword}).then((function(e){return e.data})).catch((function(e){return e.data}))},d=function(t){return r.a.put(e.config.i18n.backend_api.url+"admins/update",{email:t.email,departments:t.departments}).then((function(e){return e.data})).catch((function(e){return e.data}))}}).call(this,a(104))}},[[394,1,2]]]);
//# sourceMappingURL=main.abf128f2.chunk.js.map