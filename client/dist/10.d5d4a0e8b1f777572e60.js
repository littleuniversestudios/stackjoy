(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"h+HL":function(t,i,n){"use strict";n.r(i),n.d(i,"ForgotPasswordModule",(function(){return Q}));var e=n("ofXK"),o=n("tyNb"),r=n("mrSG"),c=n("aSHc"),a=n("fXoL"),s=n("yUjA"),l=n("xm+p"),d=n("Wp6s"),b=n("3Pt+"),u=n("kmnG"),m=n("qFsG"),f=n("bTqV");function g(t,i){if(1&t&&(a.Rb(0,"div",13),a.Ec(1),a.Qb()),2&t){const t=a.dc();a.Ab(1),a.Fc(t.loginForm.error)}}function v(t,i){if(1&t&&(a.Rb(0,"div",14),a.Mb(1,"i",15),a.Ec(2),a.Mb(3,"br"),a.Ec(4," Follow the instructions in the email to reset your password. "),a.Rb(5,"div",16),a.Mb(6,"i",17),a.Ec(7," Check your spam folder in case the email hasn't reached your inbox."),a.Qb(),a.Qb()),2&t){const t=a.dc();a.Ab(2),a.Gc(" Reset password link has been sent to ",t.loginForm.email,". ")}}function h(t,i){if(1&t&&(a.Rb(0,"div",2),a.Mb(1,"i",22),a.Ec(2," User "),a.Rb(3,"span",3),a.Ec(4),a.Qb(),a.Ec(5," not found"),a.Qb()),2&t){const t=a.dc(2);a.Ab(4),a.Fc(t.loginForm.email)}}function p(t,i){if(1&t&&(a.Rb(0,"div",2),a.Rb(1,"div",2),a.Mb(2,"i",22),a.Rb(3,"span",23),a.Ec(4),a.Qb(),a.Ec(5," is not a valid email"),a.Qb(),a.Qb()),2&t){const t=a.dc(2);a.Ab(4),a.Fc(t.loginForm.email)}}function S(t,i){1&t&&(a.Rb(0,"div",2),a.Mb(1,"i",22),a.Ec(2," Error Occurred."),a.Qb())}function w(t,i){if(1&t&&(a.Rb(0,"div",18),a.Pb(1,19),a.Cc(2,h,6,1,"div",20),a.Cc(3,p,6,1,"div",20),a.Cc(4,S,3,0,"div",21),a.Ob(),a.Qb()),2&t){const t=a.dc();a.Ab(1),a.jc("ngSwitch",t.errorCode),a.Ab(1),a.jc("ngSwitchCase","auth/user-not-found"),a.Ab(1),a.jc("ngSwitchCase","Invalid value")}}const R=o.f.forChild([{path:"",component:(()=>{class t{constructor(t,i,n){this.authService=t,this.route=i,this.navigationService=n,this.loginForm={email:"",error:"",disabled:!1},this.currentState=c.a.IDLE,this.actionState=c.a}ngOnInit(){var t;this.loginForm.email=null!==(t=this.route.snapshot.queryParams.email)&&void 0!==t?t:""}ngOnDestroy(){}createAccount(){const t={};this.loginForm.email&&(t.email=this.loginForm.email),this.navigationService.navigateTo(["create-account"],{queryParams:t})}goToLogin(){this.navigationService.navigateTo(["login"])}resetPassword(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.loginForm.email)return this.currentState=c.a.ACQUIRING,this.authService.resetPassword(this.loginForm.email).toPromise().then(()=>{this.currentState=c.a.SUCCESS}).catch(t=>{var i,n,e,o,r,a;this.currentState=c.a.FAILED,console.log("error: ",t),this.error=t,this.errorCode=null!==(a=null!==(e=null===(n=null===(i=null==t?void 0:t.error)||void 0===i?void 0:i.data)||void 0===n?void 0:n.code)&&void 0!==e?e:null===(r=null===(o=null==t?void 0:t.error)||void 0===o?void 0:o.message[0])||void 0===r?void 0:r.msg)&&void 0!==a?a:"unknown_error",console.log("Login error Code: ",this.errorCode)})}))}}return t.\u0275fac=function(i){return new(i||t)(a.Lb(s.a),a.Lb(o.a),a.Lb(l.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["forgot-password"]],decls:23,vars:6,consts:[[1,"d-flex","justify-content-center","pt-4"],[1,"p-2"],[1,""],[1,"text-bold"],[1,"form",3,"ngSubmit"],["matInput","","placeholder","Email","type","email","name","email","required","",3,"ngModel","disabled","ngModelChange"],["class","error",4,"ngIf"],["mat-raised-button","","type","submit",3,"disabled"],["class","pt-4 px-2",4,"ngIf"],["class","pt-4",4,"ngIf"],[1,"d-flex","p-2","pt-4"],[1,"cursor-pointer",3,"click"],[1,"cursor-pointer","ml-auto","pl-4",3,"click"],[1,"error"],[1,"pt-4","px-2"],[1,"fa","fa-check","text-success","mr-1"],[1,"pt-3"],[1,"fa","fa-exclamation-circle","text-warning"],[1,"pt-4"],[3,"ngSwitch"],["class","",4,"ngSwitchCase"],["class","",4,"ngSwitchDefault"],[1,"fa","fa-exclamation-triangle","text-warning"],[1,"text-bold","ml-1"]],template:function(t,i){1&t&&(a.Rb(0,"div",0),a.Rb(1,"mat-card"),a.Rb(2,"div",1),a.Rb(3,"div",2),a.Rb(4,"div",3),a.Ec(5,"Forgot Password"),a.Qb(),a.Rb(6,"div",1),a.Rb(7,"form",4),a.Zb("ngSubmit",(function(){return i.resetPassword()})),a.Rb(8,"div",2),a.Rb(9,"mat-form-field"),a.Rb(10,"mat-label"),a.Ec(11,"Email"),a.Qb(),a.Rb(12,"input",5),a.Zb("ngModelChange",(function(t){return i.loginForm.email=t})),a.Qb(),a.Qb(),a.Qb(),a.Cc(13,g,2,1,"div",6),a.Rb(14,"button",7),a.Ec(15,"Reset Password"),a.Qb(),a.Qb(),a.Cc(16,v,8,1,"div",8),a.Cc(17,w,5,3,"div",9),a.Qb(),a.Qb(),a.Rb(18,"div",10),a.Rb(19,"div",11),a.Zb("click",(function(){return i.goToLogin()})),a.Ec(20,"Log In"),a.Qb(),a.Rb(21,"div",12),a.Zb("click",(function(){return i.createAccount()})),a.Ec(22,"Create Account"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.Ab(12),a.jc("ngModel",i.loginForm.email)("disabled",i.loginForm.disabled),a.Ab(1),a.jc("ngIf",""!==i.loginForm.error),a.Ab(1),a.jc("disabled",!i.loginForm.email),a.Ab(2),a.jc("ngIf",i.currentState===i.actionState.SUCCESS),a.Ab(1),a.jc("ngIf",i.currentState===i.actionState.FAILED))},directives:[d.a,b.H,b.s,b.t,u.c,u.g,m.a,b.c,b.C,b.r,b.u,e.t,f.b,e.x,e.y,e.z],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column;flex:1}"]}),t})(),children:[]}]);let Q=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},providers:[],imports:[[e.c,R,d.d,b.m,m.b,f.c]]}),t})()},mrSG:function(t,i,n){"use strict";function e(t,i,n,e){return new(n||(n=Promise))((function(o,r){function c(t){try{s(e.next(t))}catch(i){r(i)}}function a(t){try{s(e.throw(t))}catch(i){r(i)}}function s(t){var i;t.done?o(t.value):(i=t.value,i instanceof n?i:new n((function(t){t(i)}))).then(c,a)}s((e=e.apply(t,i||[])).next())}))}n.d(i,"a",(function(){return e}))}}]);