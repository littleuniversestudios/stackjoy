(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{x3qw:function(i,e,t){"use strict";t.r(e),t.d(e,"CreateAccountModule",(function(){return P}));var r=t("ofXK"),n=t("tyNb"),s=t("quSY"),o=t("aSHc"),a=t("eIep"),c=t("fXoL"),b=t("yUjA"),d=t("biaL"),u=t("xm+p"),l=t("IjCo"),p=t("3sFK"),g=t("Wp6s"),m=t("3Pt+"),v=t("kmnG"),h=t("qFsG"),f=t("bTqV"),S=t("bv9b");function w(i,e){if(1&i&&(c.Rb(0,"div",12),c.Ec(1),c.Qb()),2&i){const i=c.dc();c.Ab(1),c.Fc(i.signupForm.error)}}function C(i,e){1&i&&(c.Rb(0,"div"),c.Rb(1,"div",1),c.Mb(2,"mat-progress-bar",13),c.Qb(),c.Qb())}function E(i,e){1&i&&(c.Rb(0,"div",14),c.Rb(1,"div",15),c.Ec(2," Thanks for signing up!"),c.Qb(),c.Rb(3,"div",1),c.Mb(4,"i",16),c.Ec(5," You received one additional workspace."),c.Qb(),c.Qb())}function Q(i,e){1&i&&(c.Rb(0,"div",2),c.Mb(1,"i",20),c.Ec(2,"Password too weak. Please provide a stronger password."),c.Qb())}function R(i,e){if(1&i){const i=c.Sb();c.Rb(0,"div",2),c.Rb(1,"div",2),c.Mb(2,"i",20),c.Ec(3," Email Already in use."),c.Qb(),c.Rb(4,"div",21),c.Zb("click",(function(){return c.rc(i),c.dc(2).forgotPassword()})),c.Ec(5,"(Click here to reset password)"),c.Qb(),c.Qb()}}function F(i,e){1&i&&(c.Rb(0,"div",2),c.Mb(1,"i",20),c.Ec(2," Error Occurred."),c.Qb())}function y(i,e){if(1&i&&(c.Rb(0,"div",14),c.Pb(1,17),c.Cc(2,Q,3,0,"div",18),c.Cc(3,R,6,0,"div",18),c.Cc(4,F,3,0,"div",19),c.Ob(),c.Qb()),2&i){const i=c.dc();c.Ab(1),c.jc("ngSwitch",i.errorCode),c.Ab(1),c.jc("ngSwitchCase","auth/weak-password"),c.Ab(1),c.jc("ngSwitchCase","auth/email-already-in-use")}}function I(i,e){if(1&i){const i=c.Sb();c.Pb(0),c.Rb(1,"div",22),c.Zb("click",(function(){return c.rc(i),c.dc().forgotPassword()})),c.Ec(2,"Forgot Password"),c.Qb(),c.Rb(3,"div",23),c.Zb("click",(function(){return c.rc(i),c.dc().login()})),c.Ec(4,"Login"),c.Qb(),c.Ob()}}function k(i,e){if(1&i){const i=c.Sb();c.Pb(0),c.Rb(1,"div",24),c.Zb("click",(function(){return c.rc(i),c.dc().continue()})),c.Ec(2,"Continue "),c.Mb(3,"i",25),c.Qb(),c.Ob()}}const A=n.g.forChild([{path:"",component:(()=>{class i{constructor(i,e,t,r,n,a){this.authService=i,this.userService=e,this.route=t,this.navigationService=r,this.systemService=n,this.appEnvironmentService=a,this.signupForm={email:"",password:"",error:"",disabled:!1,inviteCode:"",displayName:""},this.subs=new s.a,this.currentState=o.a.IDLE,this.actionState=o.a}ngOnInit(){var i;this.signupForm.email=null!==(i=this.route.snapshot.queryParams.email)&&void 0!==i?i:"",this.subs.add(this.userService.user$.subscribe(i=>this.user=i)),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(i=>this.currentEnvironment=i))}ngOnDestroy(){this.subs.unsubscribe()}login(){const i={};this.signupForm.email&&(i.email=this.signupForm.email),this.navigationService.navigateTo(["login"],{queryParams:i})}forgotPassword(){const i={};this.signupForm.email&&(i.email=this.signupForm.email),this.navigationService.navigateTo(["forgot-password"],{queryParams:i})}createAccount(){this.currentState=o.a.PENDING,this.authService.createUser(this.signupForm.email,this.signupForm.password,this.signupForm.displayName).subscribe(i=>this.currentState=o.a.SUCCESS,i=>{var e,t,r;this.currentState=o.a.FAILED,this.error=i,this.errorCode=null!==(r=null===(t=null===(e=null==i?void 0:i.error)||void 0===e?void 0:e.data)||void 0===t?void 0:t.code)&&void 0!==r?r:"unknown_error",console.log("Login error Code: ",this.errorCode)})}acceptInvite(){this.systemService.acceptInvite(this.signupForm.inviteCode,this.signupForm.displayName,this.signupForm.password).toPromise().then(i=>{this.authService.login(i.data.email,this.signupForm.password)}).catch(i=>{console.error("Failed: ",i)})}logout(){this.authService.logout().pipe(Object(a.a)(i=>this.appEnvironmentService.switchToSystemWorkspace())).subscribe(i=>this.navigationService.navigateTo(["workspace"]))}continue(){this.navigationService.navigateTo([this.currentEnvironment?"workspace":"my-items"])}}return i.\u0275fac=function(e){return new(e||i)(c.Lb(b.a),c.Lb(d.a),c.Lb(n.a),c.Lb(u.a),c.Lb(l.a),c.Lb(p.a))},i.\u0275cmp=c.Fb({type:i,selectors:[["create-account"]],decls:29,vars:11,consts:[[1,"d-flex","justify-content-center","pt-4"],[1,"p-2"],[1,""],[1,"text-bold"],[1,"form",3,"ngSubmit"],["matInput","","placeholder","Email","type","email","name","email","required","",3,"ngModel","disabled","ngModelChange"],["matInput","","placeholder","Password","type","password","name","password","required","",3,"ngModel","disabled","ngModelChange"],["class","error",4,"ngIf"],["mat-raised-button","","type","submit",3,"disabled"],[4,"ngIf"],["class","pt-4 text-break","style","width: 250px;",4,"ngIf"],[1,"d-flex","p-2","pt-4"],[1,"error"],["mode","indeterminate"],[1,"pt-4","text-break",2,"width","250px"],[1,"text-center"],[1,"fa","fa-check-circle","text-success"],[3,"ngSwitch"],["class","",4,"ngSwitchCase"],["class","",4,"ngSwitchDefault"],[1,"fa","fa-exclamation-triangle","text-warning"],[1,"text-small","as-link","pt-1","cursor-pointer",3,"click"],[1,"cursor-pointer",3,"click"],[1,"cursor-pointer","ml-auto","pl-4",3,"click"],[1,"cursor-pointer","ml-auto",3,"click"],[1,"fa","fa-arrow-alt-circle-right"]],template:function(i,e){1&i&&(c.Rb(0,"div",0),c.Rb(1,"mat-card"),c.Rb(2,"div",1),c.Rb(3,"div",2),c.Pb(4),c.Rb(5,"div",3),c.Ec(6,"Create Account:"),c.Qb(),c.Rb(7,"div",1),c.Rb(8,"form",4),c.Zb("ngSubmit",(function(){return e.createAccount()})),c.Rb(9,"div",2),c.Rb(10,"mat-form-field"),c.Rb(11,"mat-label"),c.Ec(12,"Email"),c.Qb(),c.Rb(13,"input",5),c.Zb("ngModelChange",(function(i){return e.signupForm.email=i})),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",2),c.Rb(15,"mat-form-field"),c.Rb(16,"mat-label"),c.Ec(17,"Password"),c.Qb(),c.Rb(18,"input",6),c.Zb("ngModelChange",(function(i){return e.signupForm.password=i})),c.Qb(),c.Qb(),c.Qb(),c.Cc(19,w,2,1,"div",7),c.Rb(20,"button",8),c.Ec(21,"Create Account"),c.Qb(),c.Mb(22,"br"),c.Cc(23,C,3,0,"div",9),c.Qb(),c.Cc(24,E,6,0,"div",10),c.Cc(25,y,5,3,"div",10),c.Qb(),c.Ob(),c.Qb(),c.Rb(26,"div",11),c.Cc(27,I,5,0,"ng-container",9),c.Cc(28,k,4,0,"ng-container",9),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&i&&(c.Ab(13),c.jc("ngModel",e.signupForm.email)("disabled",e.signupForm.disabled),c.Ab(5),c.jc("ngModel",e.signupForm.password)("disabled",e.signupForm.disabled),c.Ab(1),c.jc("ngIf",""!==e.signupForm.error),c.Ab(1),c.jc("disabled",e.currentState===e.actionState.PENDING),c.Ab(3),c.jc("ngIf",e.currentState===e.actionState.PENDING),c.Ab(1),c.jc("ngIf",e.currentState===e.actionState.SUCCESS),c.Ab(1),c.jc("ngIf",e.currentState===e.actionState.FAILED),c.Ab(2),c.jc("ngIf",!e.user.isLoggedIn),c.Ab(1),c.jc("ngIf",e.user.isLoggedIn))},directives:[g.a,m.H,m.s,m.t,v.c,v.g,h.a,m.c,m.C,m.r,m.u,r.t,f.b,S.a,r.x,r.y,r.z],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column;flex:1}"]}),i})(),children:[]}]);let P=(()=>{class i{}return i.\u0275mod=c.Jb({type:i}),i.\u0275inj=c.Ib({factory:function(e){return new(e||i)},providers:[],imports:[[r.c,A,f.c,m.m,h.b,g.d,S.b]]}),i})()}}]);