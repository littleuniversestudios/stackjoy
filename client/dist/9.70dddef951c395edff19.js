(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"h+HL":function(t,i,o){"use strict";o.r(i),o.d(i,"ForgotPasswordModule",(function(){return F}));var e=o("ofXK"),n=o("tyNb"),r=o("mrSG"),c=o("aSHc"),a=o("fXoL"),s=o("IYfF"),l=o("xm+p"),b=o("Wp6s"),d=o("3Pt+"),u=o("kmnG"),m=o("qFsG"),g=o("bTqV");function v(t,i){if(1&t&&(a.Rb(0,"div",12),a.Ec(1),a.Qb()),2&t){const t=a.dc();a.Ab(1),a.Fc(t.loginForm.error)}}function f(t,i){if(1&t&&(a.Rb(0,"div",13),a.Mb(1,"i",14),a.Ec(2),a.Mb(3,"br"),a.Ec(4," Please check your email and follow the instructions to reset your password. "),a.Qb()),2&t){const t=a.dc();a.Ab(2),a.Gc(" Reset password link has been sent to ",t.loginForm.email,". ")}}function h(t,i){if(1&t&&(a.Rb(0,"div",2),a.Mb(1,"i",18),a.Ec(2," User "),a.Rb(3,"span",3),a.Ec(4),a.Qb(),a.Ec(5," not found"),a.Qb()),2&t){const t=a.dc(2);a.Ab(4),a.Fc(t.loginForm.email)}}function p(t,i){if(1&t&&(a.Rb(0,"div",2),a.Rb(1,"div",2),a.Mb(2,"i",18),a.Rb(3,"span",19),a.Ec(4),a.Qb(),a.Ec(5," is not a valid email"),a.Qb(),a.Qb()),2&t){const t=a.dc(2);a.Ab(4),a.Fc(t.loginForm.email)}}function S(t,i){1&t&&(a.Rb(0,"div",2),a.Mb(1,"i",18),a.Ec(2," Error Occurred."),a.Qb())}function R(t,i){if(1&t&&(a.Rb(0,"div",13),a.Pb(1,15),a.Cc(2,h,6,1,"div",16),a.Cc(3,p,6,1,"div",16),a.Cc(4,S,3,0,"div",17),a.Ob(),a.Qb()),2&t){const t=a.dc();a.Ab(1),a.jc("ngSwitch",t.errorCode),a.Ab(1),a.jc("ngSwitchCase","auth/user-not-found"),a.Ab(1),a.jc("ngSwitchCase","Invalid value")}}const w=n.f.forChild([{path:"",component:(()=>{class t{constructor(t,i,o){this.authService=t,this.route=i,this.navigationService=o,this.loginForm={email:"",error:"",disabled:!1},this.currentState=c.a.IDLE,this.actionState=c.a}ngOnInit(){var t;this.loginForm.email=null!==(t=this.route.snapshot.queryParams.email)&&void 0!==t?t:""}ngOnDestroy(){}createAccount(){const t={};this.loginForm.email&&(t.email=this.loginForm.email),this.navigationService.navigateTo(["create-account"],{queryParams:t})}goToLogin(){this.navigationService.navigateTo(["login"])}resetPassword(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.loginForm.email)return this.currentState=c.a.ACQUIRING,this.authService.resetPassword(this.loginForm.email).toPromise().then(()=>{this.currentState=c.a.SUCCESS}).catch(t=>{var i,o,e,n,r,a;this.currentState=c.a.FAILED,console.log("error: ",t),this.error=t,this.errorCode=null!==(a=null!==(e=null===(o=null===(i=null==t?void 0:t.error)||void 0===i?void 0:i.data)||void 0===o?void 0:o.code)&&void 0!==e?e:null===(r=null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message[0])||void 0===r?void 0:r.msg)&&void 0!==a?a:"unknown_error",console.log("Login error Code: ",this.errorCode)})}))}}return t.\u0275fac=function(i){return new(i||t)(a.Lb(s.a),a.Lb(n.a),a.Lb(l.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["forgot-password"]],decls:23,vars:6,consts:[[1,"d-flex","justify-content-center","pt-4"],[1,"p-2"],[1,""],[1,"text-bold"],[1,"form",3,"ngSubmit"],["matInput","","placeholder","Email","type","email","name","email","required","",3,"ngModel","disabled","ngModelChange"],["class","error",4,"ngIf"],["mat-raised-button","","type","submit",3,"disabled"],["class","pt-4",4,"ngIf"],[1,"d-flex","p-2","pt-4"],[1,"cursor-pointer",3,"click"],[1,"cursor-pointer","ml-auto","pl-4",3,"click"],[1,"error"],[1,"pt-4"],[1,"fa","fa-check","text-success"],[3,"ngSwitch"],["class","",4,"ngSwitchCase"],["class","",4,"ngSwitchDefault"],[1,"fa","fa-exclamation-triangle","text-warning"],[1,"text-bold","ml-1"]],template:function(t,i){1&t&&(a.Rb(0,"div",0),a.Rb(1,"mat-card"),a.Rb(2,"div",1),a.Rb(3,"div",2),a.Rb(4,"div",3),a.Ec(5,"Forgot Password"),a.Qb(),a.Rb(6,"div",1),a.Rb(7,"form",4),a.Zb("ngSubmit",(function(){return i.resetPassword()})),a.Rb(8,"div",2),a.Rb(9,"mat-form-field"),a.Rb(10,"mat-label"),a.Ec(11,"Email"),a.Qb(),a.Rb(12,"input",5),a.Zb("ngModelChange",(function(t){return i.loginForm.email=t})),a.Qb(),a.Qb(),a.Qb(),a.Cc(13,v,2,1,"div",6),a.Rb(14,"button",7),a.Ec(15,"Reset Password"),a.Qb(),a.Qb(),a.Cc(16,f,5,1,"div",8),a.Cc(17,R,5,3,"div",8),a.Qb(),a.Qb(),a.Rb(18,"div",9),a.Rb(19,"div",10),a.Zb("click",(function(){return i.goToLogin()})),a.Ec(20,"Log In"),a.Qb(),a.Rb(21,"div",11),a.Zb("click",(function(){return i.createAccount()})),a.Ec(22,"Create Account"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.Ab(12),a.jc("ngModel",i.loginForm.email)("disabled",i.loginForm.disabled),a.Ab(1),a.jc("ngIf",""!==i.loginForm.error),a.Ab(1),a.jc("disabled",!i.loginForm.email),a.Ab(2),a.jc("ngIf",i.currentState===i.actionState.SUCCESS),a.Ab(1),a.jc("ngIf",i.currentState===i.actionState.FAILED))},directives:[b.a,d.G,d.r,d.s,u.c,u.g,m.a,d.c,d.B,d.q,d.t,e.t,g.b,e.x,e.y,e.z],styles:[""]}),t})(),children:[]}]);let F=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},providers:[],imports:[[e.c,w,b.b,d.l,m.b,g.c]]}),t})()}}]);