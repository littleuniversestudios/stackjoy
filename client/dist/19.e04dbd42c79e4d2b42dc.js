(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6ikm":function(t,e,n){"use strict";n.r(e),n.d(e,"MyItemsListModule",(function(){return ht}));var c=n("ofXK"),i=n("tyNb"),s=n("HdQx"),r=n("quSY"),a=n("0IaG"),o=n("3Pt+"),b=n("IzEk"),u=n("aSHc"),l=n("fXoL"),d=n("ErrC"),p=n("kmnG"),m=n("qFsG"),h=n("MrDi"),f=n("bv9b"),S=n("bTqV");function v(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"div",10),l.Ec(2),l.Rb(),l.Sb(3,"file-path",11),l.ac("onSelectedPath",(function(e){return l.sc(t),l.ec().setCodebasePath(e)})),l.Rb(),l.Pb()}if(2&t){const t=l.ec();l.Bb(2),l.Gc("",t.data.type," path:"),l.Bb(1),l.kc("rootPath",t.codebasePath)("foldersOnly",!0)}}function k(t,e){1&t&&(l.Sb(0,"div",12),l.Nb(1,"mat-progress-bar",13),l.Rb())}function g(t,e){if(1&t&&(l.Sb(0,"div",14),l.Nb(1,"i",15),l.Sb(2,"span",1),l.Ec(3),l.Rb(),l.Ec(4," created."),l.Rb()),2&t){const t=l.ec();l.Bb(3),l.Fc(t.data.type)}}function E(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"button",16),l.Ec(2,"Cancel"),l.Rb(),l.Sb(3,"button",17),l.ac("click",(function(){return l.sc(t),l.ec().create()})),l.Ec(4,"Create "),l.Sb(5,"span",1),l.Ec(6),l.Rb(),l.Rb(),l.Pb()}if(2&t){const t=l.ec();l.Bb(3),l.kc("disabled",t.form.invalid),l.Bb(3),l.Fc(t.data.type)}}function R(t,e){1&t&&(l.Qb(0),l.Sb(1,"button",16),l.Ec(2,"Close"),l.Rb(),l.Pb())}let y=(()=>{class t{constructor(t,e,n,c){this.fb=t,this.appEnvironmentService=e,this.data=n,this.dialogRef=c,this.actionState=u.a,this.currentState=u.a.IDLE,this.subs=new r.a,this.isWorkspace()&&(this.form=this.fb.group({environmentName:["",[o.E.required]],codebasePath:["",[o.E.required]]})),this.isWorkspace()||(this.form=this.fb.group({environmentName:["",[o.E.required]]}))}ngOnInit(){this.envLabel=this.data.type===s.a.Environment.Type.Workspace?"Workspace Name":"Stack Name",this.isWorkspace()&&this.subs.add(this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1)).subscribe(t=>{this.codebasePath=t.codebasePath,this.setCodebasePath(this.codebasePath)})),this.subs.add(this.form.valueChanges.subscribe(t=>{console.log("form data",t)}))}setCodebasePath(t){this.form.controls.codebasePath.setValue(t)}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close()}create(){this.currentState=u.a.ACQUIRING;const t=this.isWorkspace()?this.form.value.codebasePath:null;this.appEnvironmentService.createLocalEnvironment(this.form.value.environmentName,t,this.data.type).subscribe(t=>{this.currentState=u.a.SUCCESS,console.log("created: ",t)})}isWorkspace(){return this.data.type===s.a.Environment.Type.Workspace}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(o.f),l.Mb(d.a),l.Mb(a.a),l.Mb(a.h))},t.\u0275cmp=l.Gb({type:t,selectors:[["new-environment-dialog"]],decls:14,vars:9,consts:[["mat-dialog-title",""],[1,"text-capitalize"],["mat-dialog-content",""],[3,"formGroup"],[1,"mat-form-field"],["matInput","","formControlName","environmentName",3,"placeholder"],[4,"ngIf"],["class","text-center p-2",4,"ngIf"],["class","text-center p-2 text-success",4,"ngIf"],["mat-dialog-actions","",3,"align"],[1,"text-capitalize","pb-1","text-muted","text-tiny"],[3,"rootPath","foldersOnly","onSelectedPath"],[1,"text-center","p-2"],["mode","indeterminate"],[1,"text-center","p-2","text-success"],[1,"fa","fa-check","mr-2"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(l.Sb(0,"h1",0),l.Ec(1,"Create New "),l.Sb(2,"span",1),l.Ec(3),l.Rb(),l.Rb(),l.Sb(4,"div",2),l.Sb(5,"form",3),l.Sb(6,"mat-form-field",4),l.Nb(7,"input",5),l.Rb(),l.Rb(),l.Cc(8,v,4,3,"ng-container",6),l.Rb(),l.Cc(9,k,2,0,"div",7),l.Cc(10,g,5,1,"div",8),l.Sb(11,"div",9),l.Cc(12,E,7,2,"ng-container",6),l.Cc(13,R,3,0,"ng-container",6),l.Rb()),2&t&&(l.Bb(3),l.Fc(e.data.type),l.Bb(2),l.kc("formGroup",e.form),l.Bb(2),l.kc("placeholder",e.envLabel),l.Bb(1),l.kc("ngIf",e.isWorkspace()),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.ACQUIRING),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.SUCCESS),l.Bb(1),l.kc("align","end"),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.IDLE),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.SUCCESS))},directives:[a.i,a.f,o.G,o.r,o.j,p.c,m.a,o.c,o.q,o.i,c.t,a.c,h.a,f.a,S.b,a.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})();var C=n("VaEd"),w=n("bB17"),I=n("thzI"),x=n("I/3d"),B=n("STbY"),N=n("NFeN");function P(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"button",1),l.ac("click",(function(){return l.sc(t),l.ec().downloadRemoteStack()})),l.Nb(2,"i",2),l.Ec(3," Download Remote Stack"),l.Rb(),l.Pb()}}function M(t,e){1&t&&(l.Qb(0),l.Sb(1,"div",3),l.Nb(2,"mat-progress-bar",4),l.Sb(3,"div",5),l.Ec(4,"downloading stack"),l.Rb(),l.Rb(),l.Pb())}function T(t,e){if(1&t&&(l.Qb(0),l.Sb(1,"div",6),l.Nb(2,"i",7),l.Ec(3),l.Rb(),l.Pb()),2&t){const t=l.ec();l.Bb(3),l.Gc(" Error Downloading Stack ",t.stack.name,"")}}let W=(()=>{class t{constructor(t){this.stackService=t,this.onFinished=new l.o,this.actionState=u.a,this.currentState=u.a.IDLE,this.subs=new r.a}ngOnInit(){}ngOnDestroy(){}downloadRemoteStack(){this.currentState=this.actionState.ACQUIRING,this.stackService.downloadStack(this.stack.remote.id,this.stack.name).subscribe(t=>{this.currentState=this.actionState.SUCCESS,this.onFinished.emit(!0),console.log("download resp:",t)})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(w.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["download-remote-stack"]],inputs:{stack:"stack"},outputs:{onFinished:"onFinished"},decls:3,vars:3,consts:[[4,"ngIf"],["mat-button","",3,"click"],[1,"fa","fa-download","text-muted"],[1,"text-center"],["mode","buffer"],[1,"text-small"],[1,"text-warning"],[1,"fa","fa-exclamation-triangle"]],template:function(t,e){1&t&&(l.Cc(0,P,4,0,"ng-container",0),l.Cc(1,M,5,0,"ng-container",0),l.Cc(2,T,4,1,"ng-container",0)),2&t&&(l.kc("ngIf",e.currentState===e.actionState.IDLE),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.ACQUIRING),l.Bb(1),l.kc("ngIf",e.currentState===e.actionState.FAILED))},directives:[c.t,S.b,f.a],styles:[""]}),t})();function O(t,e){1&t&&(l.Sb(0,"div",11),l.Ec(1,"No stacks present"),l.Rb())}function F(t,e){if(1&t){const t=l.Tb();l.Sb(0,"div",17),l.Sb(1,"button",23),l.ac("click",(function(){l.sc(t);const e=l.ec(2).$implicit;return l.ec(3).publishStack(e)})),l.Nb(2,"i",24),l.Ec(3," Publish Stack"),l.Rb(),l.Rb()}2&t&&(l.Bb(1),l.kc("title","Publish Stack"))}function G(t,e){1&t&&(l.Sb(0,"div",27),l.Ec(1,"Requires merge!"),l.Rb())}function D(t,e){if(1&t){const t=l.Tb();l.Sb(0,"div",17),l.Sb(1,"div",17),l.Sb(2,"button",23),l.ac("click",(function(){l.sc(t);const e=l.ec(2).$implicit;return l.ec(3).publishStack(e)})),l.Nb(3,"i",24),l.Ec(4," Push your changes"),l.Rb(),l.Rb(),l.Sb(5,"div",17),l.Sb(6,"button",23),l.ac("click",(function(){l.sc(t);const e=l.ec(2).$implicit;return l.ec(3).syncStack(e)})),l.Nb(7,"i",25),l.Ec(8," Pull new updates"),l.Rb(),l.Rb(),l.Cc(9,G,2,0,"div",26),l.Rb()}if(2&t){const t=l.ec(2).$implicit;l.Bb(2),l.kc("title","Push Your Changes"),l.Bb(4),l.kc("title","Pull New Updates"),l.Bb(3),l.kc("ngIf",null==t.remote?null:t.remote.requiresMerge)}}function Q(t,e){if(1&t&&(l.Qb(0),l.Cc(1,F,4,1,"div",22),l.Cc(2,D,10,3,"div",22),l.Pb()),2&t){const t=l.ec().$implicit;l.Bb(1),l.kc("ngIf",t.isLocal),l.Bb(1),l.kc("ngIf",t.remote)}}function $(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"download-remote-stack",28),l.ac("onFinished",(function(){return l.sc(t),l.ec(4).getEnvironments()})),l.Rb(),l.Pb()}if(2&t){const t=l.ec().$implicit;l.Bb(1),l.kc("stack",t)}}const U=function(t){return{stack:t}};function L(t,e){if(1&t&&(l.Sb(0,"tr"),l.Sb(1,"td",15),l.Nb(2,"i",16),l.Rb(),l.Sb(3,"td",17),l.Sb(4,"div",17),l.Ec(5),l.Sb(6,"span",18),l.Ec(7),l.Rb(),l.Rb(),l.Rb(),l.Sb(8,"td",19),l.Cc(9,Q,3,2,"ng-container",0),l.Cc(10,$,2,1,"ng-container",0),l.Rb(),l.Sb(11,"td",17),l.Sb(12,"div",20),l.Sb(13,"mat-icon",21),l.Ec(14,"more_vert"),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t){const t=e.$implicit,n=l.ec(3),c=l.pc(2);l.Bb(2),l.Eb("text-primary",n.isCurrentEnv(t))("text-muted",!n.isCurrentEnv(t)),l.Bb(3),l.Gc(" ",t.name," "),l.Bb(2),l.Gc("[",t.type,"]"),l.Bb(2),l.kc("ngIf",!t.remoteOnly),l.Bb(1),l.kc("ngIf",t.remoteOnly),l.Bb(3),l.kc("inline",!0)("matMenuTriggerFor",c)("matMenuTriggerData",l.mc(11,U,t))}}function j(t,e){if(1&t&&(l.Sb(0,"table",12),l.Sb(1,"tr"),l.Sb(2,"th",13),l.Ec(3,"My Stacks"),l.Rb(),l.Sb(4,"th"),l.Ec(5,"Status"),l.Rb(),l.Sb(6,"th"),l.Ec(7,"Actions"),l.Rb(),l.Rb(),l.Cc(8,L,15,13,"tr",14),l.Rb()),2&t){const t=l.ec(2);l.Bb(8),l.kc("ngForOf",t.stacks)}}function q(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"div",4),l.Sb(2,"button",5),l.ac("click",(function(){return l.sc(t),l.ec().createNewStack()})),l.Nb(3,"i",6),l.Ec(4," New Stack"),l.Rb(),l.Sb(5,"button",5),l.ac("click",(function(){return l.sc(t),l.ec().test()})),l.Nb(6,"i",7),l.Ec(7," Test"),l.Rb(),l.Sb(8,"div",8),l.Cc(9,O,2,0,"div",9),l.Cc(10,j,9,1,"table",10),l.Rb(),l.Rb(),l.Pb()}if(2&t){const t=l.ec();l.Bb(9),l.kc("ngIf",0===t.stacks.length),l.Bb(1),l.kc("ngIf",t.stacks.length>0)}}function z(t,e){if(1&t){const t=l.Tb();l.Sb(0,"button",30),l.ac("click",(function(){l.sc(t);const e=l.ec().stack;return l.ec().switchEnvironment(e)})),l.Ec(1,"Switch Environment To This Stack"),l.Rb()}if(2&t){const t=l.ec().stack,e=l.ec();l.kc("disabled",e.isCurrentEnv(t))}}function A(t,e){1&t&&(l.Sb(0,"button",34),l.Sb(1,"span"),l.Ec(2,"Share With User(s) "),l.Rb(),l.Rb())}function J(t,e){1&t&&(l.Sb(0,"button",34),l.Sb(1,"span"),l.Ec(2,"Duplicate Stack"),l.Rb(),l.Rb())}function K(t,e){if(1&t){const t=l.Tb();l.Cc(0,z,2,1,"button",29),l.Sb(1,"button",30),l.ac("click",(function(){l.sc(t);const n=e.stack;return l.ec().installIntoCurrentEnvironment(n)})),l.Ec(2,"Install Into Current "),l.Sb(3,"span",31),l.Ec(4),l.Rb(),l.Rb(),l.Cc(5,A,3,0,"button",32),l.Cc(6,J,3,0,"button",32),l.Sb(7,"button",33),l.ac("click",(function(){l.sc(t);const n=e.stack;return l.ec().deleteStack(n)})),l.Sb(8,"span"),l.Ec(9,"Delete Stack"),l.Rb(),l.Rb()}if(2&t){const t=e.stack,n=l.ec();l.kc("ngIf",!t.remoteOnly),l.Bb(1),l.kc("disabled",n.isCurrentEnv(t)),l.Bb(3),l.Fc(n.currentEnvironment.type),l.Bb(1),l.kc("ngIf",t.remote),l.Bb(1),l.kc("ngIf",!t.remoteOnly)}}let _=(()=>{class t{constructor(t,e,n,c,i,a){this.appEnvironmentService=t,this.dialog=e,this.authService=n,this.stacksService=c,this.appStateService=i,this.db=a,this.envType=s.a.Environment.Type,this.subs=new r.a}ngOnInit(){this.getEnvironments(),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t))}getEnvironments(){this.stacksService.getUserStacks().subscribe(t=>{this.stacks=t,console.log("combined stacks:",this.stacks)})}createNewStack(){this.dialog.open(y,{data:{type:s.a.Environment.Type.Stack},minWidth:"600px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getEnvironments())}ngOnDestroy(){}isCurrentEnv(t){return this.currentEnvironment.id===t.id}switchEnvironment(t){this.appEnvironmentService.switchToEnvironment(t.id)}publishStack(t){var e;(null===(e=t.remote)||void 0===e?void 0:e.requiresMerge)&&!confirm("Confirm you have merged the changes before proceeding?")||this.stacksService.publishStack(t.id).subscribe(t=>{this.getEnvironments(),alert("Published!")},t=>alert(t.message||"Server error!"))}syncStack(t){this.stacksService.syncStack(t.id).subscribe(t=>{this.getEnvironments(),alert("Synced!")},t=>alert(t.message||"Server error!"))}deleteStack(t){this.stacksService.deleteStack(t.id).subscribe(t=>{this.getEnvironments()})}test(){this.stacksService.installIntoCurrentEnvironment("UIkhUmgApyOKEKtEridz").subscribe(t=>{this.getEnvironments()},t=>{console.log("errr:",t.error)})}installIntoCurrentEnvironment(t){var e,n;const c=null!==(n=null===(e=t.remote)||void 0===e?void 0:e.id)&&void 0!==n?n:t.id;this.appStateService.openBluConsole({command:"sj install "+c})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(d.a),l.Mb(a.b),l.Mb(C.a),l.Mb(w.a),l.Mb(I.a),l.Mb(x.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["my-stacks"]],decls:4,vars:1,consts:[[4,"ngIf"],["yPosition","below"],["stackMenu","matMenu"],["matMenuContent",""],[1,"pt-1"],["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"fa","fa-check"],[1,"p-3"],["class","text center",4,"ngIf"],["class","table",4,"ngIf"],[1,"text","center"],[1,"table"],["colspan","2",1,"text-capitalize"],[4,"ngFor","ngForOf"],[1,"",2,"width","10px"],[1,"fa","fa-th-large","mt-2"],[1,""],[1,"text-muted","text-tiny"],[1,"text-center"],[1,"p-2","cursor-pointer"],[1,"item-menu",3,"inline","matMenuTriggerFor","matMenuTriggerData"],["class","",4,"ngIf"],["mat-button","",3,"title","click"],[1,"fa","fa-upload","text-muted"],[1,"fa","fa-download","text-muted"],["style","color: red",4,"ngIf"],[2,"color","red"],[3,"stack","onFinished"],["mat-menu-item","",3,"disabled","click",4,"ngIf"],["mat-menu-item","",3,"disabled","click"],[1,"text-capitalize"],["mat-menu-item","",4,"ngIf"],["mat-menu-item","",3,"click"],["mat-menu-item",""]],template:function(t,e){1&t&&(l.Cc(0,q,11,2,"ng-container",0),l.Sb(1,"mat-menu",1,2),l.Cc(3,K,10,5,"ng-template",3),l.Rb()),2&t&&l.kc("ngIf",e.stacks)},directives:[c.t,B.e,B.a,S.b,c.s,N.a,B.d,W,B.b],styles:[".codebase-path[_ngcontent-%COMP%]{font-size:9px;line-height:9px}"]}),t})();var V=n("LRne"),Y=n("eIep"),H=n("lJxs"),X=n("6qWh"),Z=n("ZJV+");let tt=(()=>{class t{constructor(t,e,n,c){this.authService=t,this.httpService=e,this.appEnvironmentService=n,this.db=c}getUserWorkspaces(){return this.authService.user$.pipe(Object(Y.a)(t=>t?this.db.collection("workspaces",e=>e.where("owner","==",t.uid)).get().pipe(Object(H.a)(t=>X.a.extractCollectionDocs(t))):Object(V.a)([])),Object(Y.a)(t=>this.appEnvironmentService.getWorkspaces().pipe(Object(H.a)(e=>this.combineWorkspaces(t,e)))))}combineWorkspaces(t,e){return[...t,...e]}shareWorkspace(t){return this.httpService.put("/app/environment/publish",{id:t},{needsAuth:!0})}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(C.a),l.Wb(Z.a),l.Wb(d.a),l.Wb(x.a))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function et(t,e){1&t&&(l.Sb(0,"div",7),l.Ec(1,"No stacks present"),l.Rb())}function nt(t,e){if(1&t){const t=l.Tb();l.Sb(0,"div",13),l.Sb(1,"div",20),l.Ec(2,"not shared"),l.Rb(),l.Sb(3,"button",21),l.ac("click",(function(){l.sc(t);const e=l.ec().$implicit;return l.ec(3).shareWorkspace(e)})),l.Nb(4,"i",22),l.Ec(5," Share"),l.Rb(),l.Rb()}2&t&&(l.Bb(3),l.kc("title","Share"))}function ct(t,e){if(1&t){const t=l.Tb();l.Sb(0,"div",13),l.Sb(1,"div",23),l.Ec(2),l.Rb(),l.Sb(3,"button",21),l.ac("click",(function(){l.sc(t);const e=l.ec().$implicit;return l.ec(3).shareWorkspace(e)})),l.Ec(4,"Update"),l.Rb(),l.Rb()}if(2&t){const t=l.ec().$implicit;l.Bb(2),l.Gc("Version: ",t.remote.version,""),l.Bb(1),l.kc("title","Publish Stack")}}function it(t,e){if(1&t){const t=l.Tb();l.Sb(0,"tr"),l.Sb(1,"td",11),l.Nb(2,"i",12),l.Rb(),l.Sb(3,"td",13),l.Sb(4,"div",13),l.Ec(5),l.Sb(6,"span",14),l.Ec(7),l.Rb(),l.Rb(),l.Sb(8,"div",15),l.Ec(9),l.Rb(),l.Rb(),l.Sb(10,"td",13),l.Sb(11,"button",16),l.ac("click",(function(){l.sc(t);const n=e.$implicit;return l.ec(3).switchEnvironment(n)})),l.Nb(12,"i",17),l.Rb(),l.Rb(),l.Sb(13,"td",18),l.Cc(14,nt,6,1,"div",19),l.Cc(15,ct,5,2,"div",19),l.Rb(),l.Rb()}if(2&t){const t=e.$implicit,n=l.ec(3);l.Bb(2),l.Eb("text-primary",n.isCurrentEnv(t))("text-muted",!n.isCurrentEnv(t)),l.Bb(3),l.Gc(" ",t.name," "),l.Bb(2),l.Gc("[",t.type,"]"),l.Bb(2),l.Fc(t.codebasePath),l.Bb(2),l.kc("disabled",n.isCurrentEnv(t))("title","Switch to this stack"),l.Bb(3),l.kc("ngIf",!t.remote),l.Bb(1),l.kc("ngIf",t.remote)}}function st(t,e){if(1&t&&(l.Sb(0,"table",8),l.Sb(1,"tr"),l.Sb(2,"th",9),l.Ec(3,"Stacks"),l.Rb(),l.Sb(4,"th"),l.Ec(5,"Switch Workspace"),l.Rb(),l.Sb(6,"th"),l.Ec(7,"Share"),l.Rb(),l.Rb(),l.Cc(8,it,16,11,"tr",10),l.Rb()),2&t){const t=l.ec(2);l.Bb(8),l.kc("ngForOf",t.workspaces)}}function rt(t,e){if(1&t){const t=l.Tb();l.Qb(0),l.Sb(1,"div",1),l.Sb(2,"button",2),l.ac("click",(function(){return l.sc(t),l.ec().createNewWorkspace()})),l.Nb(3,"i",3),l.Ec(4," New Stack"),l.Rb(),l.Sb(5,"div",4),l.Cc(6,et,2,0,"div",5),l.Cc(7,st,9,1,"table",6),l.Rb(),l.Rb(),l.Pb()}if(2&t){const t=l.ec();l.Bb(6),l.kc("ngIf",0===t.workspaces.length),l.Bb(1),l.kc("ngIf",t.workspaces.length>0)}}let at=(()=>{class t{constructor(t,e,n,c,i){this.appEnvironmentService=t,this.dialog=e,this.authService=n,this.workspaceService=c,this.db=i,this.envType=s.a.Environment.Type,this.subs=new r.a}ngOnInit(){this.getEnvironments()}getEnvironments(){this.workspaceService.getUserWorkspaces().subscribe(t=>{this.workspaces=t,console.log("combined worskpaces:",this.workspaces)}),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t))}createNewWorkspace(){this.dialog.open(y,{data:{type:s.a.Environment.Type.Workspace},minWidth:"600px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getEnvironments())}ngOnDestroy(){}isCurrentEnv(t){return this.currentEnvironment.id===t.id}switchEnvironment(t){this.appEnvironmentService.switchToEnvironment(t.id)}shareWorkspace(t){this.workspaceService.shareWorkspace(t.id).subscribe(t=>this.getEnvironments(),t=>alert(t.message||"Server error!"))}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(d.a),l.Mb(a.b),l.Mb(C.a),l.Mb(tt),l.Mb(x.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["my-workspaces"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"pt-1"],["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"p-3"],["class","text center",4,"ngIf"],["class","table",4,"ngIf"],[1,"text","center"],[1,"table"],["colspan","2",1,"text-capitalize"],[4,"ngFor","ngForOf"],[1,"",2,"width","10px"],[1,"fa","fa-th-large","mt-2"],[1,""],[1,"text-muted","text-tiny"],[1,"codebase-path","text-muted"],["mat-icon-button","",3,"disabled","title","click"],[1,"fa","fa-exchange-alt","text-muted"],[1,"text-center"],["class","",4,"ngIf"],[1,"text-small","text-muted"],["mat-raised-button","",3,"title","click"],[1,"fa","fa-upload","text-muted"],[1,"text-small"]],template:function(t,e){1&t&&l.Cc(0,rt,8,2,"ng-container",0),2&t&&l.kc("ngIf",e.workspaces)},directives:[c.t,S.b,c.s],styles:[".codebase-path[_ngcontent-%COMP%]{font-size:9px;line-height:9px}"]}),t})();function ot(t,e){1&t&&(l.Qb(0),l.Nb(1,"my-stacks"),l.Pb())}function bt(t,e){1&t&&(l.Qb(0),l.Nb(1,"my-workspaces"),l.Pb())}function ut(t,e){if(1&t&&(l.Qb(0),l.Cc(1,ot,2,0,"ng-container",7),l.Cc(2,bt,2,0,"ng-container",7),l.Pb()),2&t){const t=l.ec();l.Bb(1),l.kc("ngIf","stacks"===t.selectedSection),l.Bb(1),l.kc("ngIf","workspaces"===t.selectedSection)}}const lt=i.f.forChild([{path:"",component:(()=>{class t{constructor(t,e){this.appEnvironmentService=t,this.dialog=e,this.selectedSection="stacks",this.envType=s.a.Environment.Type,this.subs=new r.a}ngOnInit(){this.getEnvironments()}getEnvironments(){this.subs.add(this.appEnvironmentService.getAllEnvironments().subscribe(t=>this.environments=t)),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t))}createNewEnvironment(t){this.dialog.open(y,{data:{type:"workspaces"===t?s.a.Environment.Type.Workspace:s.a.Environment.Type.Stack},minWidth:"600px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getEnvironments())}ngOnDestroy(){}isCurrentEnv(t){return this.currentEnvironment.id===t.id}isWorkspace(t){return t.type===s.a.Environment.Type.Workspace}selectSection(t){this.selectedSection=t}switchEnvironment(t){this.appEnvironmentService.switchToEnvironment(t.id)}getEnvTypeLabel(t){return"workspaces"===t?"Workspace":"Stack"}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(d.a),l.Mb(a.b))},t.\u0275cmp=l.Gb({type:t,selectors:[["my-items-list"]],decls:12,vars:5,consts:[[1,"p-2"],[1,"text-capitalize"],[1,"fa","fa-layer-group","mt-1","mr-1"],[1,"page-tabs"],[3,"click"],[1,"fa","fa-dice-d6"],[1,"fa","fa-th-large"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"h2",1),l.Nb(2,"i",2),l.Ec(3," My Items "),l.Rb(),l.Sb(4,"div",3),l.Sb(5,"div",4),l.ac("click",(function(){return e.selectSection("workspaces")})),l.Nb(6,"i",5),l.Ec(7," My Workspaces"),l.Rb(),l.Sb(8,"div",4),l.ac("click",(function(){return e.selectSection("stacks")})),l.Nb(9,"i",6),l.Ec(10," My Stacks"),l.Rb(),l.Rb(),l.Cc(11,ut,3,2,"ng-container",7),l.Rb()),2&t&&(l.Bb(5),l.Eb("active","workspaces"===e.selectedSection),l.Bb(3),l.Eb("active","stacks"===e.selectedSection),l.Bb(3),l.kc("ngIf",e.environments))},directives:[c.t,_,at],styles:[""]}),t})(),children:[]}]);let dt=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[c.c,S.c,f.b]]}),t})(),pt=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[c.c,S.c,B.c,N.b,dt]]}),t})(),mt=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[c.c,S.c]]}),t})(),ht=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[c.c,lt,pt,S.c,mt]]}),t})()}}]);