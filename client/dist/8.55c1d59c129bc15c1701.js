(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GWlk:function(t,i,n){"use strict";n.r(i),n.d(i,"CommunityModule",(function(){return C}));var e=n("ofXK"),c=n("tyNb"),s=n("quSY"),a=n("fXoL"),o=n("oCqB"),r=n("biaL"),b=n("3sFK"),l=n("k1Ex"),d=n("nZ6g"),p=n("a8/g"),u=n("48o/"),m=n("bTqV"),f=n("bv9b");function v(t,i){1&t&&(a.Rb(0,"div",8),a.Fc(1,"No public stacks available."),a.Qb())}function g(t,i){if(1&t&&(a.Rb(0,"p",19),a.Fc(1),a.Qb()),2&t){const t=a.dc(2).$implicit,i=a.dc(2);a.Ab(1),a.Hc("Last Updated: ",i.formatDate(t.lastUpdated),"")}}function h(t,i){if(1&t){const t=a.Sb();a.Rb(0,"p",24),a.Zb("click",(function(){a.rc(t);const i=a.dc(2).$implicit;return a.dc(2).starStack(i)})),a.Mb(1,"i",25),a.Fc(2),a.Qb()}if(2&t){const t=a.dc(2).$implicit;a.Ab(2),a.Hc(" ",null==t.metadata?null:t.metadata.stars,"")}}function k(t,i){if(1&t&&(a.Rb(0,"p",19),a.Fc(1),a.Qb()),2&t){const t=a.dc(2).$implicit,i=a.dc(2);a.Ab(1),a.Hc("Installs: ",i.formatInstallCount(t.metadata.installCount),"")}}function I(t,i){if(1&t){const t=a.Sb();a.Rb(0,"div",18),a.Rb(1,"div",1),a.Rb(2,"p",19),a.Fc(3),a.Qb(),a.Dc(4,g,2,1,"p",20),a.Dc(5,h,3,1,"p",21),a.Dc(6,k,2,1,"p",20),a.Qb(),a.Rb(7,"div",22),a.Rb(8,"button",23),a.Zb("click",(function(){a.rc(t);const i=a.dc().$implicit;return a.dc(2).installStack(i)})),a.Fc(9,"Install Into Current "),a.Rb(10,"span",2),a.Fc(11),a.Qb(),a.Qb(),a.Rb(12,"button",23),a.Zb("click",(function(){a.rc(t);const i=a.dc().$implicit;return a.dc(2).installIntoNewWorkspace(i)})),a.Fc(13,"Install Into New Workspace"),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.dc().$implicit,i=a.dc(2);a.Ab(3),a.Gc(t.description||"No description"),a.Ab(1),a.jc("ngIf",t.lastUpdated),a.Ab(1),a.jc("ngIf",(null==t.metadata?null:t.metadata.stars)>=0),a.Ab(1),a.jc("ngIf",(null==t.metadata?null:t.metadata.installCount)>=0),a.Ab(5),a.Gc(i.currentEnvironment.type)}}function S(t,i){if(1&t){const t=a.Sb();a.Rb(0,"div",9),a.Rb(1,"div",10),a.Rb(2,"div",11),a.Rb(3,"div",0),a.Mb(4,"sj-logo"),a.Qb(),a.Rb(5,"div",0),a.Fc(6),a.Qb(),a.Rb(7,"div",12),a.Rb(8,"button",13),a.Zb("click",(function(){a.rc(t);const n=i.$implicit;return a.dc(2).installStack(n)})),a.Fc(9,"Install"),a.Qb(),a.Qb(),a.Rb(10,"div",14),a.Rb(11,"button",15),a.Zb("click",(function(){a.rc(t);const n=i.$implicit;return a.dc(2).toggleItemList(n)})),a.Mb(12,"i",16),a.Qb(),a.Qb(),a.Qb(),a.Dc(13,I,14,5,"div",17),a.Qb(),a.Qb()}if(2&t){const t=i.$implicit,n=a.dc(2);a.Ab(6),a.Ic("",t.displayName," [v",t.version,"]"),a.Ab(6),a.Db("fa-chevron-up",n.isItemOpen(t))("fa-chevron-down",!n.isItemOpen(t)),a.Ab(1),a.jc("ngIf",n.isItemOpen(t))}}function Q(t,i){if(1&t&&(a.Pb(0),a.Dc(1,v,2,0,"div",5),a.Rb(2,"div",6),a.Dc(3,S,14,7,"div",7),a.Qb(),a.Ob()),2&t){const t=a.dc();a.Ab(1),a.jc("ngIf",0===t.stacks.length),a.Ab(2),a.jc("ngForOf",t.stacks)}}function R(t,i){1&t&&(a.Rb(0,"div",1),a.Mb(1,"mat-progress-bar",26),a.Qb())}const w=c.f.forChild([{path:"",component:(()=>{class t{constructor(t,i,n,e,c,a){this.stackService=t,this.userService=i,this.appEnvironmentService=n,this.myItemsService=e,this.dialogService=c,this.appConsoleService=a,this.itemList={},this.subs=new s.a}ngOnInit(){this.subs.add(this.stackService.getPublicStacks().subscribe(t=>{this.stacks=t},t=>this.stacks=[])),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t)),this.subs.add(this.userService.user$.subscribe(t=>this.isLoggedIn=t.isLoggedIn))}ngOnDestroy(){this.subs.unsubscribe()}installStack(t){this.appConsoleService.openBluConsole({command:"install "+t.displayName,extraInfo:{stack:t,source:"remote"}})}toggleItemList(t){const i=t.eid;this.itemList[i]=!this.itemList[i]}isItemOpen(t){return this.itemList[t.eid]}installIntoNewWorkspace(t){this.isLoggedIn?this.myItemsService.createNewWorkspace(t):this.dialogService.openMustLoginDialog()}formatDate(t){return new Date(t).toLocaleDateString()}formatInstallCount(t){return t<1e3?"<1k":t<1e5?t-t%1e3:t<1e6?t-t%1e4:void 0}starStack(t){this.stackService.starStack(t.eid).subscribe(i=>{t.metadata=i},console.error)}}return t.\u0275fac=function(i){return new(i||t)(a.Lb(o.a),a.Lb(r.a),a.Lb(b.a),a.Lb(l.a),a.Lb(d.a),a.Lb(p.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["community"]],decls:7,vars:2,consts:[[1,"pl-2"],[1,"p-2"],[1,"text-capitalize"],[4,"ngIf","ngIfElse"],["loading",""],["class","text-small text-muted p-2",4,"ngIf"],[1,""],["class","p-2 align-top","style","width: 600px;",4,"ngFor","ngForOf"],[1,"text-small","text-muted","p-2"],[1,"p-2","align-top",2,"width","600px"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],[1,"fa"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"my-2"],["class","my-2",4,"ngIf"],["class","my-2",3,"click",4,"ngIf"],[1,"ml-auto","p-2","border-left"],["mat-button","",1,"d-block",3,"click"],[1,"my-2",3,"click"],[1,"fa","fa-star"],["mode","indeterminate"]],template:function(t,i){if(1&t&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"h2",2),a.Fc(3,"Public Stacks"),a.Qb(),a.Qb(),a.Dc(4,Q,4,2,"ng-container",3),a.Dc(5,R,2,0,"ng-template",null,4,a.Ec),a.Qb()),2&t){const t=a.oc(6);a.Ab(4),a.jc("ngIf",i.stacks)("ngIfElse",t)}},directives:[e.t,e.s,u.a,m.b,f.a],styles:[""]}),t})(),children:[]}]);var y=n("3Pt+"),L=n("qFsG"),x=n("+0xr"),F=n("q2+V");let C=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},providers:[],imports:[[e.c,w,m.c,y.l,L.b,x.k,f.b,F.a]]}),t})()},k1Ex:function(t,i,n){"use strict";n.d(i,"a",(function(){return d}));var e=n("HdQx"),c=n("b5vT"),s=n("IzEk"),a=n("fXoL"),o=n("0IaG"),r=n("a8/g"),b=n("xm+p"),l=n("3sFK");let d=(()=>{class t{constructor(t,i,n,e){this.dialog=t,this.appConsoleService=i,this.navigationService=n,this.appEnvironmentService=e}createNewWorkspace(t){const i=this.dialog.open(c.a,{data:{type:e.a.Environment.Type.Workspace,stack:t},disableClose:!0,minWidth:"600px",position:{top:"100px"},autoFocus:!0});return i.afterClosed().subscribe(i=>{i.continue&&this.appEnvironmentService.switchToEnvironment(i.newEnvironment.id).subscribe(i=>{setTimeout(()=>{this.appConsoleService.openBluConsole({command:"install "+t.displayName,extraInfo:{stack:t}}).afterClosed().pipe(Object(s.a)(1)).subscribe(t=>this.navigationService.navigateTo(["app-environment"]))},250)})}),i}}return t.\u0275fac=function(i){return new(i||t)(a.Vb(o.b),a.Vb(r.a),a.Vb(b.a),a.Vb(l.a))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);