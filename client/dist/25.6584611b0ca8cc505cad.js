(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{QKHt:function(t,e,i){"use strict";i.r(e),i.d(e,"MyWorkspacesModule",(function(){return vt}));var n=i("ofXK"),c=i("tyNb"),s=i("mrSG"),o=i("quSY"),r=i("cp0P"),a=i("Mzu6"),b=i("IzEk"),l=i("vkgz"),d=i("3E0/"),u=i("nYR2"),p=i("40nA"),m=i("5Trv"),v=i("EVKI"),f=i("0IaG"),g=i("aSHc"),h=i("fXoL"),k=i("3Pt+"),S=i("3sFK"),w=i("N4Rb"),E=i("MrDi"),I=i("bv9b"),R=i("bTqV");function x(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",6),h.Rb(1,"div",7),h.Ec(2),h.Qb(),h.Rb(3,"file-path",8),h.Zb("onSelectedPath",(function(e){return h.rc(t),h.dc().setCodebasePath(e)})),h.Qb(),h.Qb()}if(2&t){const t=h.dc();h.Ab(2),h.Gc("Workspace path: ",t.codebasePath,""),h.Ab(1),h.jc("rootPath",t.codebasePath)("foldersOnly",!0)}}function Q(t,e){1&t&&(h.Rb(0,"div",9),h.Rb(1,"div"),h.Ec(2,"Installing..."),h.Qb(),h.Mb(3,"mat-progress-bar",10),h.Qb())}function C(t,e){if(1&t&&(h.Pb(0),h.Rb(1,"div",11),h.Mb(2,"i",12),h.Rb(3,"span",13),h.Ec(4),h.Qb(),h.Ec(5),h.Qb(),h.Ob()),2&t){const t=h.dc();h.Ab(4),h.Fc(t.data.workspace.name),h.Ab(1),h.Gc(" installed into ",t.codebasePath,". ")}}function A(t,e){if(1&t&&(h.Pb(0),h.Rb(1,"div",14),h.Rb(2,"div",15),h.Mb(3,"i",16),h.Ec(4," Failed to install "),h.Rb(5,"span",13),h.Ec(6),h.Qb(),h.Ec(7),h.Qb(),h.Rb(8,"div",17),h.Ec(9),h.Qb(),h.Qb(),h.Ob()),2&t){const t=h.dc();h.Ab(6),h.Fc(t.data.workspace.name),h.Ab(1),h.Gc(" into ",t.codebasePath,". Please try again later "),h.Ab(2),h.Gc(" Error: ",t.errorMessage," ")}}function y(t,e){if(1&t){const t=h.Sb();h.Pb(0),h.Rb(1,"button",18),h.Ec(2,"Cancel"),h.Qb(),h.Rb(3,"button",19),h.Zb("click",(function(){return h.rc(t),h.dc().create()})),h.Ec(4,"Install"),h.Qb(),h.Ob()}if(2&t){const t=h.dc();h.Ab(3),h.jc("disabled",!t.codebasePath)}}function O(t,e){1&t&&(h.Pb(0),h.Rb(1,"button",18),h.Ec(2,"Close"),h.Qb(),h.Ob())}let j=(()=>{class t{constructor(t,e,i,n,c){this.fb=t,this.appEnvironmentService=e,this.data=i,this.workspaceService=n,this.dialogRef=c,this.actionState=g.a,this.currentState=g.a.IDLE,this.subs=new o.a}ngOnInit(){}setCodebasePath(t){this.codebasePath=t}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close({success:this.currentState===g.a.SUCCESS})}create(){this.currentState=g.a.ACQUIRING,this.workspaceService.install(this.data.workspace,this.codebasePath).pipe(Object(b.a)(1),Object(d.a)(500)).subscribe(t=>{this.currentState=g.a.SUCCESS},t=>{var e;this.errorMessage=(null===(e=t.error)||void 0===e?void 0:e.message)||"Server error!",this.currentState=g.a.FAILED})}}return t.\u0275fac=function(e){return new(e||t)(h.Lb(k.f),h.Lb(S.a),h.Lb(f.a),h.Lb(w.a),h.Lb(f.h))},t.\u0275cmp=h.Fb({type:t,selectors:[["new-environment-dialog"]],decls:12,vars:8,consts:[["mat-dialog-title",""],[1,"text-underline","text-capitalize"],["mat-dialog-content","",4,"ngIf"],["class","text-center p-2",4,"ngIf"],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-dialog-content",""],[1,"text-capitalize","pb-1","text-muted","text-tiny"],[3,"rootPath","foldersOnly","onSelectedPath"],[1,"text-center","p-2"],["mode","indeterminate"],[1,"text-center","p-2","text-success"],[1,"fa","fa-check","mr-2"],[1,"text-capitalize"],[1,"text-center","p-2","text-red"],[1,""],[1,"fa","fa-times-circle","mr-2"],[1,"p-2","text-small","text-muted"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(h.Rb(0,"h1",0),h.Ec(1,"Install "),h.Rb(2,"span",1),h.Ec(3),h.Qb(),h.Ec(4," Workspace"),h.Qb(),h.Cc(5,x,4,3,"div",2),h.Cc(6,Q,4,0,"div",3),h.Cc(7,C,6,2,"ng-container",4),h.Cc(8,A,10,3,"ng-container",4),h.Rb(9,"div",5),h.Cc(10,y,5,1,"ng-container",4),h.Cc(11,O,3,0,"ng-container",4),h.Qb()),2&t&&(h.Ab(3),h.Fc(e.data.workspace.name),h.Ab(2),h.jc("ngIf",e.currentState==e.actionState.IDLE),h.Ab(1),h.jc("ngIf",e.currentState===e.actionState.ACQUIRING),h.Ab(1),h.jc("ngIf",e.currentState===e.actionState.SUCCESS),h.Ab(1),h.jc("ngIf",e.currentState===e.actionState.FAILED),h.Ab(1),h.jc("align","end"),h.Ab(1),h.jc("ngIf",e.currentState===e.actionState.IDLE),h.Ab(1),h.jc("ngIf",e.currentState===e.actionState.FAILED||e.currentState===e.actionState.SUCCESS))},directives:[f.i,n.t,f.c,f.f,E.a,I.a,R.b,f.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})();var P=i("nZ6g"),W=i("biaL"),L=i("xm+p"),M=i("k1Ex"),D=i("Qu3c");function $(t,e){1&t&&(h.Rb(0,"div",13),h.Ec(1,"No workspaces present"),h.Qb())}function T(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",16),h.Rb(1,"div",17),h.Rb(2,"div",18),h.Rb(3,"div",19),h.Rb(4,"div"),h.Ec(5),h.ec(6,"titlecase"),h.Qb(),h.Rb(7,"div",20),h.Ec(8),h.ec(9,"titlecase"),h.Qb(),h.Qb(),h.Rb(10,"div"),h.Rb(11,"button",21),h.Zb("click",(function(){h.rc(t);const i=e.$implicit;return h.dc(3).acceptInvite(i.eid)})),h.Ec(12,"Accept"),h.Qb(),h.Rb(13,"button",21),h.Zb("click",(function(){h.rc(t);const i=e.$implicit;return h.dc(3).declineInvite(i.eid)})),h.Ec(14,"Decline"),h.Qb(),h.Qb(),h.Qb(),h.Qb(),h.Qb()}if(2&t){const t=e.$implicit;h.Ab(5),h.Fc(h.fc(6,2,t.name)),h.Ab(3),h.Gc("Owner: ",h.fc(9,4,t.owner.displayName)||t.owner.email,"")}}function F(t,e){if(1&t&&(h.Pb(0),h.Rb(1,"div",14),h.Ec(2,"Workspace Invites"),h.Qb(),h.Cc(3,T,15,6,"div",15),h.Ob()),2&t){const t=h.dc(2);h.Ab(3),h.jc("ngForOf",t.invites)}}function Z(t,e){if(1&t&&(h.Rb(0,"span",22),h.Ec(1),h.Qb()),2&t){const t=h.dc(2);h.Ab(1),h.Hc("(",t.totalLocalWorkspaces," / ",t.user.maxWorkspaces,")")}}const N=function(t){return{workspaces:t}};function q(t,e){if(1&t&&(h.Pb(0),h.Rb(1,"div",23),h.Ec(2,"Remote Workspaces"),h.Qb(),h.Mb(3,"div",12),h.Ob()),2&t){const t=h.dc(2),e=h.oc(2);h.Ab(3),h.jc("ngTemplateOutlet",e)("ngTemplateOutletContext",h.lc(2,N,t.workspaceList.remote))}}const G=function(t){return[t]};function U(t,e){if(1&t){const t=h.Sb();h.Pb(0),h.Rb(1,"div",2),h.Rb(2,"div",3),h.Cc(3,$,2,0,"div",4),h.Rb(4,"div",5),h.Cc(5,F,4,1,"ng-container",0),h.Rb(6,"div",6),h.Rb(7,"div",7),h.Ec(8,"My Workspaces "),h.Cc(9,Z,2,2,"span",8),h.Qb(),h.Rb(10,"div",9),h.Rb(11,"button",10),h.Zb("click",(function(){return h.rc(t),h.dc().createNewWorkspace()})),h.Mb(12,"i",11),h.Ec(13," New Workspace"),h.Qb(),h.Qb(),h.Qb(),h.Mb(14,"div",12),h.Mb(15,"div",12),h.Cc(16,q,4,4,"ng-container",0),h.Qb(),h.Qb(),h.Qb(),h.Ob()}if(2&t){const t=h.dc(),e=h.oc(2);h.Ab(3),h.jc("ngIf",0===t.workspaces.length),h.Ab(2),h.jc("ngIf",t.invites.length>0),h.Ab(4),h.jc("ngIf",t.user.isLoggedIn),h.Ab(5),h.jc("ngTemplateOutlet",e)("ngTemplateOutletContext",h.lc(10,N,h.lc(8,G,t.workspaceList.system))),h.Ab(1),h.jc("ngTemplateOutlet",e)("ngTemplateOutletContext",h.lc(12,N,t.workspaceList.local)),h.Ab(1),h.jc("ngIf",(null==t.workspaceList||null==t.workspaceList.remote?null:t.workspaceList.remote.length)>0)}}function z(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",34),h.Rb(1,"button",32),h.Zb("click",(function(){h.rc(t);const e=h.dc().$implicit;return h.dc(2).install(e)})),h.Mb(2,"i",35),h.Qb(),h.Qb()}}function H(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",5),h.Rb(1,"button",36),h.Zb("click",(function(){h.rc(t);const e=h.dc().$implicit;return h.dc(2).switchEnvironment(e)})),h.Mb(2,"i",37),h.Qb(),h.Qb()}if(2&t){const t=h.dc().$implicit,e=h.dc(2);h.Ab(1),h.jc("disabled",e.isCurrentEnv(t))}}function _(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",5),h.Rb(1,"button",39),h.Zb("click",(function(){h.rc(t);const e=h.dc(2).$implicit;return h.dc(2).publish(e)})),h.Mb(2,"i",40),h.Ec(3," Push your changes"),h.Qb(),h.Qb()}2&t&&(h.Ab(1),h.jc("title","Push Your Changes"))}function J(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",5),h.Rb(1,"button",39),h.Zb("click",(function(){h.rc(t);const e=h.dc(2).$implicit;return h.dc(2).sync(e)})),h.Mb(2,"i",35),h.Ec(3," Pull new updates"),h.Qb(),h.Qb()}2&t&&(h.Ab(1),h.jc("title","Pull New Updates"))}function K(t,e){1&t&&(h.Rb(0,"div",41),h.Ec(1,"Requires merge!"),h.Qb())}function V(t,e){if(1&t&&(h.Pb(0),h.Cc(1,_,4,1,"div",27),h.Cc(2,J,4,1,"div",27),h.Cc(3,K,2,0,"div",38),h.Ob()),2&t){const t=h.dc().$implicit;h.Ab(1),h.jc("ngIf",!t.remote.isClean),h.Ab(1),h.jc("ngIf",t.localVersion!=(null==t.remote?null:t.remote.version)),h.Ab(1),h.jc("ngIf",null==t.remote?null:t.remote.requiresMerge)}}function Y(t,e){1&t&&h.Mb(0,"mat-progress-bar",42)}function X(t,e){if(1&t){const t=h.Sb();h.Pb(0),h.Rb(1,"button",39),h.Zb("click",(function(){h.rc(t);const e=h.dc().$implicit;return h.dc(2).install(e)})),h.Mb(2,"i",35),h.Ec(3," Install Workspace "),h.Qb(),h.Ob()}2&t&&(h.Ab(1),h.jc("title","Install Workspace"))}function B(t,e){1&t&&(h.Rb(0,"div",54),h.Mb(1,"i",55),h.Ec(2," Shared"),h.Qb())}function tt(t,e){1&t&&(h.Rb(0,"div",56),h.Mb(1,"i",57),h.Ec(2," Local"),h.Qb())}function et(t,e){if(1&t){const t=h.Sb();h.Rb(0,"button",50),h.Zb("click",(function(){h.rc(t);const e=h.dc(2).$implicit;return h.dc(2).renameWorkspace(e)})),h.Ec(1,"Rename Workspace"),h.Qb()}if(2&t){const t=h.dc(2).$implicit;h.jc("disabled",t.remoteOnly)}}function it(t,e){if(1&t){const t=h.Sb();h.Rb(0,"button",50),h.Zb("click",(function(){h.rc(t);const e=h.dc(2).$implicit;return h.dc(2).deleteWorkspace(e)})),h.Ec(1,"Delete Workspace"),h.Qb()}if(2&t){const t=h.dc(2).$implicit;h.jc("disabled",t.remoteOnly)}}function nt(t,e){if(1&t){const t=h.Sb();h.Rb(0,"button",53),h.Zb("click",(function(){h.rc(t);const e=h.dc(2).$implicit;return h.dc(2).purgeWorkspace(e)})),h.Ec(1,"Purge Workspace"),h.Qb()}}function ct(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",43),h.Rb(1,"div",16),h.Rb(2,"p",44),h.Ec(3),h.Qb(),h.Cc(4,B,3,0,"div",45),h.Cc(5,tt,3,0,"div",46),h.Rb(6,"div",47),h.Mb(7,"i",48),h.Ec(8),h.Qb(),h.Qb(),h.Rb(9,"div",49),h.Rb(10,"button",50),h.Zb("click",(function(){h.rc(t);const e=h.dc().$implicit;return h.dc(2).switchEnvironment(e)})),h.Ec(11,"Switch To This Workspace"),h.Qb(),h.Cc(12,et,2,1,"button",51),h.Cc(13,it,2,1,"button",51),h.Cc(14,nt,2,0,"button",52),h.Rb(15,"button",53),h.Zb("click",(function(){h.rc(t);const e=h.dc().$implicit;return h.dc(2).shareWorkspace(e)})),h.Rb(16,"span"),h.Ec(17,"Share Workspace "),h.Qb(),h.Qb(),h.Qb(),h.Qb()}if(2&t){const t=h.dc().$implicit,e=h.dc(2);h.Ab(3),h.Fc(t.description||"No description"),h.Ab(1),h.jc("ngIf",t.remote),h.Ab(1),h.jc("ngIf",!t.remote&&t.isLocal),h.Ab(3),h.Gc(" ",t.codebasePath,""),h.Ab(2),h.jc("disabled",e.isCurrentEnv(t)||t.remoteOnly),h.Ab(2),h.jc("ngIf",!t.isSystemWorkspace),h.Ab(1),h.jc("ngIf",!t.isSystemWorkspace),h.Ab(1),h.jc("ngIf",t.remoteOnly&&t.remote.owner===(null==e.user?null:e.user.uid))}}function st(t,e){if(1&t){const t=h.Sb();h.Rb(0,"div",16),h.Rb(1,"div",17),h.Rb(2,"div",24),h.Rb(3,"div",25),h.Cc(4,z,3,0,"div",26),h.Cc(5,H,3,1,"div",27),h.Qb(),h.Rb(6,"div",5),h.Mb(7,"i",28),h.Qb(),h.Rb(8,"div",29),h.Zb("click",(function(){h.rc(t);const i=e.$implicit;return h.dc(2).toggleItemList(i)})),h.Rb(9,"div",5),h.Ec(10),h.Qb(),h.Rb(11,"div",20),h.Ec(12),h.Qb(),h.Qb(),h.Rb(13,"div",9),h.Cc(14,V,4,3,"ng-container",0),h.Cc(15,Y,1,0,"mat-progress-bar",30),h.Cc(16,X,4,1,"ng-container",0),h.Qb(),h.Rb(17,"div",31),h.Rb(18,"button",32),h.Zb("click",(function(){h.rc(t);const i=e.$implicit;return h.dc(2).toggleItemList(i)})),h.Mb(19,"i",28),h.Qb(),h.Qb(),h.Qb(),h.Cc(20,ct,18,8,"div",33),h.Qb(),h.Qb()}if(2&t){const t=e.$implicit,i=h.dc(2);h.Ab(2),h.Db("workspace-disabled",t.disabled),h.Ab(2),h.jc("ngIf",t.remoteOnly),h.Ab(1),h.jc("ngIf",!t.remoteOnly),h.Ab(2),h.Db("text-primary",i.isCurrentEnv(t))("text-muted",!i.isCurrentEnv(t))("fa-dice-d6",!t.isSystemWorkspace)("fa-desktop",t.isSystemWorkspace),h.Ab(1),h.Db("text-primary",i.isCurrentEnv(t)),h.Ab(2),h.Fc(t.name),h.Ab(2),h.Fc(t.codebasePath),h.Ab(2),h.jc("ngIf",!t.remoteOnly&&!!t.remote&&!i.activeRequest[t.id]),h.Ab(1),h.jc("ngIf",i.activeRequest[t.id]),h.Ab(1),h.jc("ngIf",t.remoteOnly),h.Ab(3),h.Db("fa-chevron-up",i.isItemOpen(t))("fa-chevron-down",!i.isItemOpen(t)),h.Ab(1),h.jc("ngIf",i.isItemOpen(t))}}function ot(t,e){1&t&&h.Cc(0,st,21,24,"div",15),2&t&&h.jc("ngForOf",e.workspaces)}const rt=c.f.forChild([{path:"",component:(()=>{class t{constructor(t,e,i,n,c,s,r){this.appEnvironmentService=t,this.dialogService=e,this.dialog=i,this.userService=n,this.workspaceService=c,this.navigationService=s,this.myItemsService=r,this.invites=[],this.activeRequest={},this.itemList={},this.subs=new o.a}ngOnInit(){this.getEnvironments(),this.getPendingInvites(),this.subs.add(this.userService.user$.subscribe(t=>this.user=t))}toggleItemList(t){var e,i;const n=null!==(e=t.id)&&void 0!==e?e:null===(i=t.remote)||void 0===i?void 0:i.id;this.itemList[n]=!this.itemList[n]}isItemOpen(t){var e,i;return this.itemList[null!==(e=t.id)&&void 0!==e?e:null===(i=t.remote)||void 0===i?void 0:i.id]}getEnvironments(){this.workspaceService.userWorkspaces().subscribe(t=>{const e=(t,e)=>{var i,n;return(null===(i=t.name)||void 0===i?void 0:i.toLowerCase())>(null===(n=e.name)||void 0===n?void 0:n.toLowerCase())?1:-1},i=t.sort(e),n=t.find(t=>t.isSystemWorkspace),c=t.filter(t=>!t.remoteOnly&&!t.isSystemWorkspace),s=t.filter(t=>t.remoteOnly).sort(e),o=c.filter(t=>!t.disabled).sort(e),r=c.filter(t=>t.disabled).sort(e);this.workspaceList={system:n,local:[...o,...r],remote:s},this.totalLocalWorkspaces=this.workspaceList.local.length,this.workspaces=i}),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t))}goToEnvironmentHome(){this.navigationService.navigateToEnvironmentHome()}getPendingInvites(){this.subs.add(this.workspaceService.pendingInvites$.subscribe(t=>{this.invites=t}))}createNewWorkspace(){this.isLoggedIn()?this.myItemsService.createNewWorkspace().afterClosed().subscribe(()=>this.getEnvironments()):this.dialogService.openMustLoginDialog()}isLoggedIn(){return this.user.isLoggedIn}ngOnDestroy(){this.subs.unsubscribe()}deleteWorkspace(t){const e=this.dialog.open(a.a,{data:{title:`Delete workspace ${t.name}?`,text:"Deleting this workspace is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0});Object(r.a)([e.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([e,i])=>{!0===e&&this.workspaceService.delete(t.id).subscribe(()=>{t.id===i.id&&this.dialog.open(p.a,{data:{},disableClose:!0,position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>console.log("dialog result: ",t)),this.getEnvironments()})})}purgeWorkspace(t){const e=this.dialogService.openConfirmationDialog({title:`Purge workspace ${t.name}?`,text:"Purging this workspace will remove it from the stackjoy servers completely. This is a permanent action and cannot be undone.",button:{yes:"Purge",no:"Cancel"}});Object(r.a)([e.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([e,i])=>{!1!==e&&this.workspaceService.purge(t.remote.id).subscribe(()=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:`Workspace ${t.name} purged successfully`}),this.getEnvironments()},t=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:"Something went wrong: "+(t.message||"Unknown error occurred...")})})})}isCurrentEnv(t){var e;return(null===(e=this.currentEnvironment)||void 0===e?void 0:e.id)===t.id}switchEnvironment(t){this.appEnvironmentService.switchToEnvironment(t.id).pipe(Object(l.a)(t=>this.goToEnvironmentHome())).subscribe(()=>null)}shareWorkspace(t){this.user?this.dialog.open(m.a,{data:{environment:t,type:"workspace"},width:"50vw",maxWidth:"800px",minWidth:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(()=>{this.getEnvironments()}):this.dialogService.openMustLoginDialog()}renameWorkspace(t){this.dialog.open(v.a,{data:{environment:t},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{t.success&&this.getEnvironments()})}publish(t){var e;return Object(s.a)(this,void 0,void 0,(function*(){(null===(e=t.remote)||void 0===e?void 0:e.requiresMerge)?this.dialogService.openAlertDialog({title:"Publish Workspace",text:"There are pending changes for this workspace. Please merge changes before publishing."}):(this.activeRequest[t.id]=!0,this.workspaceService.publishWorkspace(t.id).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[t.id]=!1})).subscribe(t=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Workspace has been published successfully"}),this.getEnvironments()},t=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Error publishing: "+(t.message||"Server error!")})}))}))}sync(t){if(!t.localVersion)return this.install(t);this.activeRequest[t.id]=!0,this.workspaceService.syncWorkspace(t.id,t.remote.version).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[t.id]=!1})).subscribe(t=>{this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Stack has been synced"}),this.getEnvironments()},t=>{var e;this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Error while syncing: "+((null===(e=t.error)||void 0===e?void 0:e.message)||"Server error!")})})}install(t){this.dialog.open(j,{data:{workspace:t},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{this.getEnvironments()})}acceptInvite(t){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.acceptInvite(t).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}declineInvite(t){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.declineInvite(t).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}}return t.\u0275fac=function(e){return new(e||t)(h.Lb(S.a),h.Lb(P.a),h.Lb(f.b),h.Lb(W.a),h.Lb(w.a),h.Lb(L.a),h.Lb(M.a))},t.\u0275cmp=h.Fb({type:t,selectors:[["my-workspaces"]],decls:3,vars:1,consts:[[4,"ngIf"],["workspaceListTemplate",""],[1,"pt-3",2,"max-width","800px"],[1,"pl-3"],["class","text center",4,"ngIf"],[1,""],[1,"pl-2","d-flex","align-items-start"],[1,"text-bold","py-2"],["class","text-tiny text-muted",4,"ngIf"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"text","center"],[1,"text-bold","p-2"],["class","p-2",4,"ngFor","ngForOf"],[1,"p-2"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center","justify-content-between"],[1,"pl-3","cursor-pointer"],[1,"subheader"],["mat-raised-button","",3,"click"],[1,"text-tiny","text-muted"],[1,"text-bold","p-2","pt-4"],[1,"d-flex","align-items-center"],[1,"pr-3"],["class","","style","width:40px; height:40px;",4,"ngIf"],["class","",4,"ngIf"],[1,"fa"],[1,"pl-3","cursor-pointer",3,"click"],["mode","indeterminate",4,"ngIf"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"",2,"width","40px","height","40px"],[1,"fa","fa-download","text-muted"],["mat-button","","mat-icon-button","",3,"disabled","click"],[1,"fa","fa-exchange-alt"],["style","color: red",4,"ngIf"],["mat-button","",3,"title","click"],[1,"fa","fa-upload","text-muted"],[2,"color","red"],["mode","indeterminate"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"my-2"],["class","text-muted text-small","matTooltip","This workspace is shared with other users",4,"ngIf"],["class","text-muted text-small","matTooltip","This workspace is present only on this machine",4,"ngIf"],[1,"text-small"],[1,"fa","fa-folder-open","mr-1"],[1,"ml-auto","p-2","border-left"],["mat-button","",1,"d-block",3,"disabled","click"],["mat-button","","class","d-block",3,"disabled","click",4,"ngIf"],["mat-button","","class","d-block",3,"click",4,"ngIf"],["mat-button","",1,"d-block",3,"click"],["matTooltip","This workspace is shared with other users",1,"text-muted","text-small"],[1,"fa","fa-users","mr-1"],["matTooltip","This workspace is present only on this machine",1,"text-muted","text-small"],[1,"fa","fa-desktop","mr-1"]],template:function(t,e){1&t&&(h.Cc(0,U,17,14,"ng-container",0),h.Cc(1,ot,1,1,"ng-template",null,1,h.Dc)),2&t&&h.jc("ngIf",e.workspaces)},directives:[n.t,R.b,n.A,n.s,I.a,D.a],pipes:[n.F],styles:[".subheader[_ngcontent-%COMP%]{font-size:9px;line-height:9px}.workspace-disabled[_ngcontent-%COMP%]{opacity:.5}"]}),t})(),children:[]}]);var at=i("7n/8"),bt=i("STbY"),lt=i("NFeN"),dt=i("qFsG"),ut=i("QibW"),pt=i("d3UM");let mt=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,f.g,dt.b,k.l,R.c,ut.c,k.A,pt.b]]}),t})(),vt=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,rt,R.c,at.a,bt.c,lt.b,I.b,D.b,mt]]}),t})()}}]);