(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{QKHt:function(e,t,i){"use strict";i.r(t),i.d(t,"MyWorkspacesModule",(function(){return Qe}));var n=i("ofXK"),c=i("tyNb"),s=i("mrSG"),o=i("quSY"),r=i("cp0P"),a=i("Mzu6"),b=i("IzEk"),l=i("vkgz"),d=i("3E0/"),u=i("nYR2"),p=i("40nA"),m=i("0IaG"),v=i("itXk"),h=i("LRne"),g=i("HdQx"),f=i("eIep"),k=i("fXoL"),S=i("3Pt+"),R=i("n2Wo"),E=i("3sFK"),I=i("N4Rb"),w=i("biaL"),x=i("nZ6g"),Q=i("bTqV"),A=i("bv9b"),C=i("s/2f"),O=g.a.Environment.EnvironmentPermissions;function y(e,t){1&e&&(k.Pb(0),k.Mb(1,"br"),k.Mb(2,"mat-progress-bar",6),k.Mb(3,"br"),k.Ob())}function j(e,t){if(1&e&&(k.Pb(0),k.Mb(1,"share-environment-settings",7),k.Ob()),2&e){const e=k.dc();k.Ab(1),k.jc("environment",e.environment)("userIsAdmin",e.userIsAdmin)("userId",e.userId)}}let L=(()=>{class e{constructor(e,t,i,n,c,r,a,l,d){this.fb=e,this.dialog=t,this.stackService=i,this.appEnvironmentService=n,this.workspaceService=c,this.userService=r,this.dialogService=a,this.dialogRef=l,this.data=d,this.loading=!0,this.userIsAdmin=!1,this.subs=new o.a,this.publishWorkspace=()=>Object(s.a)(this,void 0,void 0,(function*(){this.loading=!0,this.subs.add(this.workspaceService.publishWorkspace(this.environment.id).pipe(Object(f.a)(e=>Object(v.a)([Object(h.a)(e),this.workspaceService.userWorkspaces().pipe(Object(b.a)(1))]))).subscribe(([e,t])=>{this.environment=t.find(t=>t.id===e.id),this.setupShareSettings(),this.loading=!1},e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Error: "+(e.message||"Server error!")}),this.loading=!1}))})),this.environment=d.environment,this.environmentType=d.type,this.subs.add(this.userService.user$.subscribe(e=>{e&&(this.userId=e.uid)}))}ngOnInit(){this.environment.remote?(this.setupShareSettings(),this.loading=!1):this.publishWorkspace()}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close()}setupShareSettings(){var e;this.userIsAdmin=(null===(e=this.environment.remote)||void 0===e?void 0:e.permissions[this.userId].permission)>=O.admin}}return e.\u0275fac=function(t){return new(t||e)(k.Lb(S.f),k.Lb(m.b),k.Lb(R.a),k.Lb(E.a),k.Lb(I.a),k.Lb(w.a),k.Lb(x.a),k.Lb(m.h),k.Lb(m.a))},e.\u0275cmp=k.Fb({type:e,selectors:[["new-environment-dialog"]],decls:10,vars:4,consts:[[1,"text-large"],[1,"text-muted","text-small"],["mat-dialog-content",""],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-button","","mat-dialog-close",""],["mode","indeterminate"],[3,"environment","userIsAdmin","userId"]],template:function(e,t){1&e&&(k.Rb(0,"div",0),k.Ec(1,"Share Settings"),k.Qb(),k.Rb(2,"div",1),k.Ec(3),k.Qb(),k.Rb(4,"div",2),k.Cc(5,y,4,0,"ng-container",3),k.Cc(6,j,2,3,"ng-container",3),k.Qb(),k.Rb(7,"div",4),k.Rb(8,"button",5),k.Ec(9,"Close"),k.Qb(),k.Qb()),2&e&&(k.Ab(3),k.Fc(t.environment.name),k.Ab(2),k.jc("ngIf",t.loading),k.Ab(1),k.jc("ngIf",!t.loading&&t.environment.remote),k.Ab(1),k.jc("align","end"))},directives:[m.f,n.t,m.c,Q.b,m.d,A.a,C.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%;padding:0 5px}.permTable[_ngcontent-%COMP%]{width:100%}.tableActions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:5px}"]}),e})();var P=i("kmnG"),W=i("qFsG");let M=(()=>{class e{constructor(e,t,i,n,c){var s;this.fb=e,this.appEnvironmentService=t,this.dialogService=i,this.data=n,this.dialogRef=c,this.form=this.fb.group({name:[null===(s=this.data.environment)||void 0===s?void 0:s.name,[S.F.required]]})}ngOnInit(){}ngOnDestroy(){}close(){this.dialogRef.close(this.form.value)}save(){var e,t;this.appEnvironmentService.rename(this.data.environment.id||(null===(t=null===(e=this.data.environment)||void 0===e?void 0:e.remote)||void 0===t?void 0:t.id),this.form.controls.name.value).subscribe(e=>{this.dialogRef.close({success:!0})},e=>this.dialogService.alertUnknownErrorTryAgain())}}return e.\u0275fac=function(t){return new(t||e)(k.Lb(S.f),k.Lb(E.a),k.Lb(x.a),k.Lb(m.a),k.Lb(m.h))},e.\u0275cmp=k.Fb({type:e,selectors:[["rename-environment-dialog"]],decls:13,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"mat-form-field"],["placeholder","Text Input","matInput","","formControlName","name"],["mat-dialog-actions","",3,"align"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(e,t){1&e&&(k.Rb(0,"h1",0),k.Ec(1),k.Rb(2,"span"),k.Ec(3),k.Qb(),k.Qb(),k.Rb(4,"div",1),k.Rb(5,"form",2),k.Rb(6,"mat-form-field",3),k.Mb(7,"input",4),k.Qb(),k.Qb(),k.Qb(),k.Rb(8,"div",5),k.Rb(9,"button",6),k.Ec(10,"Cancel"),k.Qb(),k.Rb(11,"button",7),k.Zb("click",(function(){return t.save()})),k.Ec(12,"Rename"),k.Qb(),k.Qb()),2&e&&(k.Ab(1),k.Gc("Rename ",t.data.environment.name," "),k.Ab(2),k.Fc(t.data.environment.type),k.Ab(2),k.jc("formGroup",t.form),k.Ab(3),k.jc("align","end"),k.Ab(3),k.jc("disabled",t.form.invalid))},directives:[m.i,m.f,S.H,S.s,S.k,P.c,W.a,S.c,S.r,S.i,m.c,Q.b,m.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e})();var D=i("aSHc"),F=i("MrDi");function T(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",6),k.Rb(1,"div",7),k.Ec(2),k.Qb(),k.Rb(3,"file-path",8),k.Zb("onSelectedPath",(function(t){return k.rc(e),k.dc().setCodebasePath(t)})),k.Qb(),k.Qb()}if(2&e){const e=k.dc();k.Ab(2),k.Gc("Workspace path: ",e.codebasePath,""),k.Ab(1),k.jc("rootPath",e.codebasePath)("foldersOnly",!0)}}function $(e,t){1&e&&(k.Rb(0,"div",9),k.Rb(1,"div"),k.Ec(2,"Installing..."),k.Qb(),k.Mb(3,"mat-progress-bar",10),k.Qb())}function Z(e,t){if(1&e&&(k.Pb(0),k.Rb(1,"div",11),k.Mb(2,"i",12),k.Rb(3,"span",13),k.Ec(4),k.Qb(),k.Ec(5),k.Qb(),k.Ob()),2&e){const e=k.dc();k.Ab(4),k.Fc(e.data.workspace.name),k.Ab(1),k.Gc(" installed into ",e.codebasePath,". ")}}function G(e,t){if(1&e&&(k.Pb(0),k.Rb(1,"div",14),k.Rb(2,"div",15),k.Mb(3,"i",16),k.Ec(4," Failed to install "),k.Rb(5,"span",13),k.Ec(6),k.Qb(),k.Ec(7),k.Qb(),k.Rb(8,"div",17),k.Ec(9),k.Qb(),k.Qb(),k.Ob()),2&e){const e=k.dc();k.Ab(6),k.Fc(e.data.workspace.name),k.Ab(1),k.Gc(" into ",e.codebasePath,". Please try again later "),k.Ab(2),k.Gc(" Error: ",e.errorMessage," ")}}function N(e,t){if(1&e){const e=k.Sb();k.Pb(0),k.Rb(1,"button",18),k.Ec(2,"Cancel"),k.Qb(),k.Rb(3,"button",19),k.Zb("click",(function(){return k.rc(e),k.dc().create()})),k.Ec(4,"Install"),k.Qb(),k.Ob()}if(2&e){const e=k.dc();k.Ab(3),k.jc("disabled",!e.codebasePath)}}function q(e,t){1&e&&(k.Pb(0),k.Rb(1,"button",18),k.Ec(2,"Close"),k.Qb(),k.Ob())}let _=(()=>{class e{constructor(e,t,i,n,c){this.fb=e,this.appEnvironmentService=t,this.data=i,this.workspaceService=n,this.dialogRef=c,this.actionState=D.a,this.currentState=D.a.IDLE,this.subs=new o.a}ngOnInit(){}setCodebasePath(e){this.codebasePath=e}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close({success:this.currentState===D.a.SUCCESS})}create(){this.currentState=D.a.ACQUIRING,this.workspaceService.install(this.data.workspace,this.codebasePath).pipe(Object(b.a)(1),Object(d.a)(500)).subscribe(e=>{this.currentState=D.a.SUCCESS},e=>{var t;this.errorMessage=(null===(t=e.error)||void 0===t?void 0:t.message)||"Server error!",this.currentState=D.a.FAILED})}}return e.\u0275fac=function(t){return new(t||e)(k.Lb(S.f),k.Lb(E.a),k.Lb(m.a),k.Lb(I.a),k.Lb(m.h))},e.\u0275cmp=k.Fb({type:e,selectors:[["new-environment-dialog"]],decls:12,vars:8,consts:[["mat-dialog-title",""],[1,"text-underline","text-capitalize"],["mat-dialog-content","",4,"ngIf"],["class","text-center p-2",4,"ngIf"],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-dialog-content",""],[1,"text-capitalize","pb-1","text-muted","text-tiny"],[3,"rootPath","foldersOnly","onSelectedPath"],[1,"text-center","p-2"],["mode","indeterminate"],[1,"text-center","p-2","text-success"],[1,"fa","fa-check","mr-2"],[1,"text-capitalize"],[1,"text-center","p-2","text-red"],[1,""],[1,"fa","fa-times-circle","mr-2"],[1,"p-2","text-small","text-muted"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(e,t){1&e&&(k.Rb(0,"h1",0),k.Ec(1,"Install "),k.Rb(2,"span",1),k.Ec(3),k.Qb(),k.Ec(4," Workspace"),k.Qb(),k.Cc(5,T,4,3,"div",2),k.Cc(6,$,4,0,"div",3),k.Cc(7,Z,6,2,"ng-container",4),k.Cc(8,G,10,3,"ng-container",4),k.Rb(9,"div",5),k.Cc(10,N,5,1,"ng-container",4),k.Cc(11,q,3,0,"ng-container",4),k.Qb()),2&e&&(k.Ab(3),k.Fc(t.data.workspace.name),k.Ab(2),k.jc("ngIf",t.currentState==t.actionState.IDLE),k.Ab(1),k.jc("ngIf",t.currentState===t.actionState.ACQUIRING),k.Ab(1),k.jc("ngIf",t.currentState===t.actionState.SUCCESS),k.Ab(1),k.jc("ngIf",t.currentState===t.actionState.FAILED),k.Ab(1),k.jc("align","end"),k.Ab(1),k.jc("ngIf",t.currentState===t.actionState.IDLE),k.Ab(1),k.jc("ngIf",t.currentState===t.actionState.FAILED||t.currentState===t.actionState.SUCCESS))},directives:[m.i,n.t,m.c,m.f,F.a,A.a,Q.b,m.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e})();var U=i("OAzE"),z=i("xm+p"),H=i("k1Ex"),J=i("Qu3c");function Y(e,t){1&e&&(k.Rb(0,"div",14),k.Ec(1,"No workspaces present"),k.Qb())}function K(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",17),k.Rb(1,"div",18),k.Rb(2,"div",19),k.Rb(3,"div",20),k.Rb(4,"div"),k.Ec(5),k.ec(6,"titlecase"),k.Qb(),k.Rb(7,"div",21),k.Ec(8),k.ec(9,"titlecase"),k.Qb(),k.Qb(),k.Rb(10,"div"),k.Rb(11,"button",22),k.Zb("click",(function(){k.rc(e);const i=t.$implicit;return k.dc(3).acceptInvite(i.eid)})),k.Ec(12,"Accept"),k.Qb(),k.Rb(13,"button",22),k.Zb("click",(function(){k.rc(e);const i=t.$implicit;return k.dc(3).declineInvite(i.eid)})),k.Ec(14,"Decline"),k.Qb(),k.Qb(),k.Qb(),k.Qb(),k.Qb()}if(2&e){const e=t.$implicit;k.Ab(5),k.Fc(k.fc(6,2,e.name)),k.Ab(3),k.Gc("Invited By: ",k.fc(9,4,e.inviter.displayName)||e.inviter.email,"")}}function V(e,t){if(1&e&&(k.Pb(0),k.Rb(1,"div",15),k.Ec(2,"Workspace Invites"),k.Qb(),k.Cc(3,K,15,6,"div",16),k.Ob()),2&e){const e=k.dc(2);k.Ab(3),k.jc("ngForOf",e.invites)}}function X(e,t){if(1&e&&(k.Rb(0,"span",23),k.Ec(1),k.Qb()),2&e){const e=k.dc(2);k.Ab(1),k.Hc("(",e.totalLocalWorkspaces," / ",e.user.maxWorkspaces,")")}}const B=function(e){return{workspaces:e}};function ee(e,t){if(1&e&&(k.Pb(0),k.Rb(1,"div",24),k.Ec(2,"Remote Workspaces"),k.Qb(),k.Mb(3,"div",13),k.Ob()),2&e){const e=k.dc(2),t=k.oc(2);k.Ab(3),k.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",k.lc(2,B,e.workspaceList.remote))}}const te=function(e){return[e]};function ie(e,t){if(1&e){const e=k.Sb();k.Pb(0),k.Rb(1,"div",2),k.Rb(2,"div",3),k.Rb(3,"div",4),k.Cc(4,Y,2,0,"div",5),k.Rb(5,"div",6),k.Cc(6,V,4,1,"ng-container",0),k.Rb(7,"div",7),k.Rb(8,"div",8),k.Ec(9,"My Workspaces "),k.Cc(10,X,2,2,"span",9),k.Qb(),k.Rb(11,"div",10),k.Rb(12,"button",11),k.Zb("click",(function(){return k.rc(e),k.dc().createNewWorkspace()})),k.Mb(13,"i",12),k.Ec(14," New Workspace"),k.Qb(),k.Qb(),k.Qb(),k.Mb(15,"div",13),k.Mb(16,"div",13),k.Cc(17,ee,4,4,"ng-container",0),k.Qb(),k.Qb(),k.Qb(),k.Qb(),k.Ob()}if(2&e){const e=k.dc(),t=k.oc(2);k.Ab(4),k.jc("ngIf",0===e.workspaces.length),k.Ab(2),k.jc("ngIf",e.invites.length>0),k.Ab(4),k.jc("ngIf",e.user.isLoggedIn),k.Ab(5),k.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",k.lc(10,B,k.lc(8,te,e.workspaceList.system))),k.Ab(1),k.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",k.lc(12,B,e.workspaceList.local)),k.Ab(1),k.jc("ngIf",(null==e.workspaceList||null==e.workspaceList.remote?null:e.workspaceList.remote.length)>0)}}function ne(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",36),k.Rb(1,"button",34),k.Zb("click",(function(){k.rc(e);const t=k.dc().$implicit;return k.dc(2).install(t)})),k.Mb(2,"i",37),k.Qb(),k.Qb()}}function ce(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",6),k.Rb(1,"button",38),k.Zb("click",(function(){k.rc(e);const t=k.dc().$implicit;return k.dc(2).switchEnvironment(t)})),k.Mb(2,"i",39),k.Qb(),k.Qb()}if(2&e){const e=k.dc().$implicit,t=k.dc(2);k.Ab(1),k.jc("disabled",t.isCurrentEnv(e))}}function se(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",6),k.Rb(1,"button",41),k.Zb("click",(function(){k.rc(e);const t=k.dc(2).$implicit;return k.dc(2).publish(t)})),k.Mb(2,"i",42),k.Ec(3," Push your changes"),k.Qb(),k.Qb()}2&e&&(k.Ab(1),k.jc("title","Push Your Changes"))}function oe(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",6),k.Rb(1,"button",41),k.Zb("click",(function(){k.rc(e);const t=k.dc(2).$implicit;return k.dc(2).sync(t)})),k.Mb(2,"i",37),k.Ec(3," Pull new updates"),k.Qb(),k.Qb()}2&e&&(k.Ab(1),k.jc("title","Pull New Updates"))}function re(e,t){1&e&&(k.Rb(0,"div",43),k.Ec(1,"Requires merge!"),k.Qb())}function ae(e,t){if(1&e&&(k.Pb(0),k.Cc(1,se,4,1,"div",28),k.Cc(2,oe,4,1,"div",28),k.Cc(3,re,2,0,"div",40),k.Ob()),2&e){const e=k.dc().$implicit;k.Ab(1),k.jc("ngIf",!e.remote.isClean),k.Ab(1),k.jc("ngIf",e.localVersion!=(null==e.remote?null:e.remote.version)),k.Ab(1),k.jc("ngIf",null==e.remote?null:e.remote.requiresMerge)}}function be(e,t){1&e&&k.Mb(0,"mat-progress-bar",44)}function le(e,t){if(1&e){const e=k.Sb();k.Pb(0),k.Rb(1,"button",41),k.Zb("click",(function(){k.rc(e);const t=k.dc().$implicit;return k.dc(2).install(t)})),k.Mb(2,"i",37),k.Ec(3," Install Workspace "),k.Qb(),k.Ob()}2&e&&(k.Ab(1),k.jc("title","Install Workspace"))}function de(e,t){1&e&&(k.Rb(0,"div",56),k.Mb(1,"i",57),k.Ec(2," Shared"),k.Qb())}function ue(e,t){1&e&&(k.Rb(0,"div",58),k.Mb(1,"i",59),k.Ec(2," Local"),k.Qb())}function pe(e,t){if(1&e){const e=k.Sb();k.Rb(0,"button",52),k.Zb("click",(function(){k.rc(e);const t=k.dc(2).$implicit;return k.dc(2).renameWorkspace(t)})),k.Ec(1,"Rename Workspace"),k.Qb()}if(2&e){const e=k.dc(2).$implicit;k.jc("disabled",e.remoteOnly)}}function me(e,t){if(1&e){const e=k.Sb();k.Rb(0,"button",52),k.Zb("click",(function(){k.rc(e);const t=k.dc(2).$implicit;return k.dc(2).deleteWorkspace(t)})),k.Ec(1,"Delete Workspace"),k.Qb()}if(2&e){const e=k.dc(2).$implicit;k.jc("disabled",e.remoteOnly)}}function ve(e,t){if(1&e){const e=k.Sb();k.Rb(0,"button",55),k.Zb("click",(function(){k.rc(e);const t=k.dc(2).$implicit;return k.dc(2).purgeWorkspace(t)})),k.Ec(1,"Purge Workspace"),k.Qb()}}function he(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",45),k.Rb(1,"div",17),k.Rb(2,"p",46),k.Ec(3),k.Qb(),k.Cc(4,de,3,0,"div",47),k.Cc(5,ue,3,0,"div",48),k.Rb(6,"div",49),k.Mb(7,"i",50),k.Ec(8),k.Qb(),k.Qb(),k.Rb(9,"div",51),k.Rb(10,"button",52),k.Zb("click",(function(){k.rc(e);const t=k.dc().$implicit;return k.dc(2).switchEnvironment(t)})),k.Ec(11,"Switch To This Workspace"),k.Qb(),k.Cc(12,pe,2,1,"button",53),k.Cc(13,me,2,1,"button",53),k.Cc(14,ve,2,0,"button",54),k.Rb(15,"button",55),k.Zb("click",(function(){k.rc(e);const t=k.dc().$implicit;return k.dc(2).shareWorkspace(t)})),k.Rb(16,"span"),k.Ec(17,"Share Workspace "),k.Qb(),k.Qb(),k.Qb(),k.Qb()}if(2&e){const e=k.dc().$implicit,t=k.dc(2);k.Ab(3),k.Fc(e.description||"No description"),k.Ab(1),k.jc("ngIf",e.remote),k.Ab(1),k.jc("ngIf",!e.remote&&e.isLocal),k.Ab(3),k.Gc(" ",e.codebasePath,""),k.Ab(2),k.jc("disabled",t.isCurrentEnv(e)||e.remoteOnly),k.Ab(2),k.jc("ngIf",!e.isSystemWorkspace),k.Ab(1),k.jc("ngIf",!e.isSystemWorkspace),k.Ab(1),k.jc("ngIf",e.remoteOnly&&t.isOwner(e,t.user.uid))}}function ge(e,t){if(1&e){const e=k.Sb();k.Rb(0,"div",17),k.Rb(1,"div",18),k.Rb(2,"div",25),k.Rb(3,"div",26),k.Cc(4,ne,3,0,"div",27),k.Cc(5,ce,3,1,"div",28),k.Qb(),k.Rb(6,"div",6),k.Mb(7,"i",29),k.Qb(),k.Rb(8,"div",30),k.Zb("click",(function(){k.rc(e);const i=t.$implicit;return k.dc(2).toggleItemList(i)})),k.Rb(9,"div",6),k.Ec(10),k.Qb(),k.Rb(11,"div",31),k.Ec(12),k.Qb(),k.Qb(),k.Rb(13,"div",10),k.Cc(14,ae,4,3,"ng-container",0),k.Cc(15,be,1,0,"mat-progress-bar",32),k.Cc(16,le,4,1,"ng-container",0),k.Qb(),k.Rb(17,"div",33),k.Rb(18,"button",34),k.Zb("click",(function(){k.rc(e);const i=t.$implicit;return k.dc(2).toggleItemList(i)})),k.Mb(19,"i",29),k.Qb(),k.Qb(),k.Qb(),k.Cc(20,he,18,8,"div",35),k.Qb(),k.Qb()}if(2&e){const e=t.$implicit,i=k.dc(2);k.Ab(2),k.Db("workspace-disabled",e.disabled),k.Ab(2),k.jc("ngIf",e.remoteOnly),k.Ab(1),k.jc("ngIf",!e.remoteOnly),k.Ab(2),k.Db("text-primary",i.isCurrentEnv(e))("text-muted",!i.isCurrentEnv(e))("fa-dice-d6",!e.isSystemWorkspace)("fa-desktop",e.isSystemWorkspace),k.Ab(1),k.Db("text-primary",i.isCurrentEnv(e)),k.Ab(2),k.Fc(e.name),k.Ab(2),k.Fc(e.codebasePath),k.Ab(2),k.jc("ngIf",!e.remoteOnly&&!!e.remote&&!i.activeRequest[e.id]),k.Ab(1),k.jc("ngIf",i.activeRequest[e.id]),k.Ab(1),k.jc("ngIf",e.remoteOnly),k.Ab(3),k.Db("fa-chevron-up",i.isItemOpen(e))("fa-chevron-down",!i.isItemOpen(e)),k.Ab(1),k.jc("ngIf",i.isItemOpen(e))}}function fe(e,t){1&e&&k.Cc(0,ge,21,24,"div",16),2&e&&k.jc("ngForOf",t.workspaces)}const ke=c.f.forChild([{path:"",component:(()=>{class e{constructor(e,t,i,n,c,s,r){this.appEnvironmentService=e,this.dialogService=t,this.dialog=i,this.userService=n,this.workspaceService=c,this.navigationService=s,this.myItemsService=r,this.invites=[],this.activeRequest={},this.itemList={},this.subs=new o.a}ngOnInit(){this.getEnvironments(),this.getPendingInvites(),this.subs.add(this.userService.user$.subscribe(e=>this.user=e))}toggleItemList(e){var t,i;const n=null!==(t=e.id)&&void 0!==t?t:null===(i=e.remote)||void 0===i?void 0:i.id;this.itemList[n]=!this.itemList[n]}isItemOpen(e){var t,i;return this.itemList[null!==(t=e.id)&&void 0!==t?t:null===(i=e.remote)||void 0===i?void 0:i.id]}getEnvironments(){this.workspaceService.userWorkspaces().subscribe(e=>{const t=(e,t)=>{var i,n;return(null===(i=e.name)||void 0===i?void 0:i.toLowerCase())>(null===(n=t.name)||void 0===n?void 0:n.toLowerCase())?1:-1},i=e.sort(t),n=e.find(e=>e.isSystemWorkspace),c=e.filter(e=>!e.remoteOnly&&!e.isSystemWorkspace),s=e.filter(e=>e.remoteOnly).sort(t),o=c.filter(e=>!e.disabled).sort(t),r=c.filter(e=>e.disabled).sort(t);this.workspaceList={system:n,local:[...o,...r],remote:s},this.totalLocalWorkspaces=this.workspaceList.local.length,this.workspaces=i}),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(e=>this.currentEnvironment=e))}goToEnvironmentHome(){this.navigationService.navigateToEnvironmentHome()}getPendingInvites(){this.subs.add(this.workspaceService.pendingInvites$.subscribe(e=>{this.invites=e}))}createNewWorkspace(){this.isLoggedIn()?this.myItemsService.createNewWorkspace().afterClosed().subscribe(()=>this.getEnvironments()):this.dialogService.openMustLoginDialog()}isLoggedIn(){return this.user.isLoggedIn}ngOnDestroy(){this.subs.unsubscribe()}deleteWorkspace(e){const t=this.dialog.open(a.a,{data:{title:`Delete workspace ${e.name}?`,text:"Deleting this workspace is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0});Object(r.a)([t.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([t,i])=>{!0===t&&this.workspaceService.delete(e.id).subscribe(()=>{e.id===i.id&&this.dialog.open(p.a,{data:{},disableClose:!0,position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>console.log("dialog result: ",e)),this.getEnvironments()})})}purgeWorkspace(e){const t=this.dialogService.openConfirmationDialog({title:`Purge workspace ${e.name}?`,text:"Purging this workspace will remove it from the stackjoy servers completely. This is a permanent action and cannot be undone.",button:{yes:"Purge",no:"Cancel"}});Object(r.a)([t.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([t,i])=>{!1!==t&&this.workspaceService.purge(e.remote.id).subscribe(()=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:`Workspace ${e.name} purged successfully`}),this.getEnvironments()},e=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:"Something went wrong: "+(e.message||"Unknown error occurred...")})})})}isCurrentEnv(e){var t;return(null===(t=this.currentEnvironment)||void 0===t?void 0:t.id)===e.id}switchEnvironment(e){this.appEnvironmentService.switchToEnvironment(e.id).pipe(Object(l.a)(e=>this.goToEnvironmentHome())).subscribe(()=>null)}shareWorkspace(e){this.user?this.dialog.open(L,{data:{environment:e,type:"workspace"},width:"50vw",maxWidth:"800px",minWidth:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(()=>{this.getEnvironments()}):this.dialogService.openMustLoginDialog()}renameWorkspace(e){this.dialog.open(M,{data:{environment:e},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{e.success&&this.getEnvironments()})}publish(e){var t;return Object(s.a)(this,void 0,void 0,(function*(){(null===(t=e.remote)||void 0===t?void 0:t.requiresMerge)?this.dialogService.openAlertDialog({title:"Publish Workspace",text:"There are pending changes for this workspace. Please merge changes before publishing."}):(this.activeRequest[e.id]=!0,this.workspaceService.publishWorkspace(e.id).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[e.id]=!1})).subscribe(e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Workspace has been published successfully"}),this.getEnvironments()},e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Error publishing: "+(e.message||"Server error!")})}))}))}sync(e){if(!e.localVersion)return this.install(e);this.activeRequest[e.id]=!0,this.workspaceService.syncWorkspace(e.id,e.remote.version).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[e.id]=!1})).subscribe(e=>{this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Stack has been synced"}),this.getEnvironments()},e=>{var t;this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Error while syncing: "+((null===(t=e.error)||void 0===t?void 0:t.message)||"Server error!")})})}install(e){this.dialog.open(_,{data:{workspace:e},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{this.getEnvironments()})}acceptInvite(e){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.acceptInvite(e).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}declineInvite(e){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.declineInvite(e).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}isOwner(e,t){var i,n;return(null===(n=null===(i=e.remote)||void 0===i?void 0:i.permissions[t])||void 0===n?void 0:n.permission)>=U.EnvironmentPermissions.owner}}return e.\u0275fac=function(t){return new(t||e)(k.Lb(E.a),k.Lb(x.a),k.Lb(m.b),k.Lb(w.a),k.Lb(I.a),k.Lb(z.a),k.Lb(H.a))},e.\u0275cmp=k.Fb({type:e,selectors:[["my-workspaces"]],decls:3,vars:1,consts:[[4,"ngIf"],["workspaceListTemplate",""],[1,"basic-page","flex-column"],[1,"pt-3",2,"max-width","800px"],[1,"pl-3"],["class","text center",4,"ngIf"],[1,""],[1,"pl-2","d-flex","align-items-start"],[1,"text-bold","py-2"],["class","text-tiny text-muted",4,"ngIf"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"text","center"],[1,"text-bold","p-2"],["class","p-2",4,"ngFor","ngForOf"],[1,"p-2"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center","justify-content-between"],[1,"pl-3","cursor-pointer"],[1,"subheader","text-small","text-muted"],["mat-raised-button","",3,"click"],[1,"text-tiny","text-muted"],[1,"text-bold","p-2","pt-4"],[1,"d-flex","align-items-center"],[1,"pr-3"],["class","","style","width:40px; height:40px;",4,"ngIf"],["class","",4,"ngIf"],[1,"fa"],[1,"pl-3","cursor-pointer",3,"click"],[1,"subheader","text-muted"],["mode","indeterminate",4,"ngIf"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"",2,"width","40px","height","40px"],[1,"fa","fa-download","text-muted"],["mat-button","","mat-icon-button","",3,"disabled","click"],[1,"fa","fa-exchange-alt"],["style","color: red",4,"ngIf"],["mat-button","",3,"title","click"],[1,"fa","fa-upload","text-muted"],[2,"color","red"],["mode","indeterminate"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"my-2"],["class","text-muted text-small","matTooltip","This workspace is shared with other users",4,"ngIf"],["class","text-muted text-small","matTooltip","This workspace is present only on this machine",4,"ngIf"],[1,"text-small"],[1,"fa","fa-folder-open","mr-1"],[1,"ml-auto","p-2","border-left"],["mat-button","",1,"d-block",3,"disabled","click"],["mat-button","","class","d-block",3,"disabled","click",4,"ngIf"],["mat-button","","class","d-block",3,"click",4,"ngIf"],["mat-button","",1,"d-block",3,"click"],["matTooltip","This workspace is shared with other users",1,"text-muted","text-small"],[1,"fa","fa-users","mr-1"],["matTooltip","This workspace is present only on this machine",1,"text-muted","text-small"],[1,"fa","fa-desktop","mr-1"]],template:function(e,t){1&e&&(k.Cc(0,ie,18,14,"ng-container",0),k.Cc(1,fe,1,1,"ng-template",null,1,k.Dc)),2&e&&k.jc("ngIf",t.workspaces)},directives:[n.t,Q.b,n.A,n.s,A.a,J.a],pipes:[n.F],styles:["[_nghost-%COMP%]{display:flex;flex:1}.subheader[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.2}.workspace-disabled[_ngcontent-%COMP%]{opacity:.5}"]}),e})(),children:[]}]);var Se=i("7n/8"),Re=i("STbY"),Ee=i("NFeN"),Ie=i("QibW"),we=i("d3UM");let xe=(()=>{class e{}return e.\u0275mod=k.Jb({type:e}),e.\u0275inj=k.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,m.g,W.b,S.m,Q.c,Ie.c,S.B,we.b]]}),e})(),Qe=(()=>{class e{}return e.\u0275mod=k.Jb({type:e}),e.\u0275inj=k.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,ke,Q.c,Se.a,Re.c,Ee.b,A.b,J.b,xe]]}),e})()}}]);