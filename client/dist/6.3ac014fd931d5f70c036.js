(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PE4B:function(e,t,i){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?b(Array.isArray(e)?[]:{},e,t):e}function c(e,t,i){return e.concat(t).map((function(e){return s(e,i)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function a(e,t){try{return t in e}catch(i){return!1}}function b(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||c,i.isMergeableObject=i.isMergeableObject||n,i.cloneUnlessOtherwiseSpecified=s;var r=Array.isArray(t);return r===Array.isArray(e)?r?i.arrayMerge(e,t,i):function(e,t,i){var n={};return i.isMergeableObject(e)&&o(e).forEach((function(t){n[t]=s(e[t],i)})),o(t).forEach((function(r){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(n[r]=a(e,r)&&i.isMergeableObject(t[r])?function(e,t){if(!t.customMerge)return b;var i=t.customMerge(e);return"function"==typeof i?i:b}(r,i)(e[r],t[r],i):s(t[r],i))})),n}(e,t,i):s(t,i)}b.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return b(e,i,t)}),{})},e.exports=b},QKHt:function(e,t,i){"use strict";i.r(t),i.d(t,"MyWorkspacesModule",(function(){return rt}));var n=i("ofXK"),r=i("tyNb"),s=i("mrSG"),c=i("quSY"),o=i("cp0P"),a=i("Mzu6"),b=i("IzEk"),l=i("vkgz"),d=i("3E0/"),u=i("nYR2"),m=i("40nA"),p=i("0IaG"),v=i("3Pt+"),f=i("itXk"),h=i("LRne"),g=i("HdQx"),k=i("PE4B");class E{static UUID(){return E.UUIDv4("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx")}static UUIDShort(){return E.UUIDv4("xxxxxxxx")}static UUIDv4(e){return e.replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}static merge(e,t){return k(e,t)}}var S=i("eIep"),w=i("fXoL"),y=i("3sFK"),P=i("N4Rb"),R=i("IYfF"),I=i("nZ6g"),x=i("bTqV"),A=i("bv9b"),O=i("+0xr"),j=i("d3UM"),C=i("FKr1"),Q=i("zkoq"),M=i("kmnG"),D=i("qFsG");function W(e,t){1&e&&(w.Pb(0),w.Mb(1,"br"),w.Mb(2,"mat-progress-bar",5),w.Mb(3,"br"),w.Ob())}function L(e,t){1&e&&(w.Rb(0,"h4",16),w.Ec(1,"You must be an administrator to change these settings"),w.Qb())}function $(e,t){1&e&&w.Mb(0,"th",17)}function F(e,t){1&e&&(w.Rb(0,"div",22),w.Ec(1,"Primary Owner"),w.Qb())}function T(e,t){if(1&e&&(w.Rb(0,"div",20),w.Rb(1,"div"),w.Ec(2),w.Qb(),w.Cc(3,F,2,0,"div",21),w.Qb()),2&e){const e=w.dc().$implicit,t=w.dc(3);w.Ab(2),w.Fc(t.userProfiles.get(e).email||"Unknown user"),w.Ab(1),w.jc("ngIf",e==t.environment.remote.owner)}}function U(e,t){if(1&e&&(w.Rb(0,"td",18),w.Cc(1,T,4,2,"div",19),w.Qb()),2&e){const e=t.$implicit,i=w.dc(3);w.Ab(1),w.jc("ngIf",i.userProfiles.has(e))}}function Z(e,t){1&e&&(w.Rb(0,"th",17),w.Ec(1,"Permission"),w.Qb())}function G(e,t){if(1&e&&(w.Rb(0,"mat-option",25),w.Ec(1),w.ec(2,"titlecase"),w.Qb()),2&e){const e=t.$implicit;w.jc("value",e.value),w.Ab(1),w.Gc(" ",w.fc(2,2,e.key)," ")}}function q(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"mat-select",23),w.Zb("valueChange",(function(t){w.rc(e);const i=w.dc().$implicit;return w.dc(3).dirtyEnvPerms[i].permission=t})),w.Cc(2,G,3,4,"mat-option",24),w.ec(3,"keyvalue"),w.Qb(),w.Ob()}if(2&e){const e=w.dc().$implicit,t=w.dc(3);w.Ab(1),w.jc("value",t.dirtyEnvPerms[e].permission),w.Ab(1),w.jc("ngForOf",w.gc(3,2,t.envPermissions,t.originalOrder))}}function N(e,t){if(1&e&&(w.Pb(0),w.Ec(1),w.ec(2,"titlecase"),w.Ob()),2&e){const e=w.dc().$implicit,t=w.dc(3);w.Ab(1),w.Gc(" ",w.fc(2,1,t.convertPermissionToString(t.dirtyEnvPerms[e].permission))," ")}}function H(e,t){if(1&e&&(w.Rb(0,"td",18),w.Cc(1,q,4,5,"ng-container",2),w.Cc(2,N,3,3,"ng-container",2),w.Qb()),2&e){const e=w.dc(3);w.Ab(1),w.jc("ngIf",e.userIsAdmin),w.Ab(1),w.jc("ngIf",!e.userIsAdmin)}}function _(e,t){1&e&&(w.Rb(0,"th",17),w.Ec(1,"Actions"),w.Qb())}function z(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"button",27),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(3).save(t)})),w.Ec(2," Save "),w.Qb(),w.Rb(3,"button",28),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(3).revoke(t)})),w.Ec(4,"Revoke"),w.Qb(),w.Ob()}if(2&e){const e=w.dc().$implicit,t=w.dc(3);w.Ab(1),w.jc("disabled",t.dirtyEnvPerms[e].permission===t.environment.remote.permissions[e].permission)}}function Y(e,t){1&e&&(w.Pb(0),w.Mb(1,"mat-progress-bar",5),w.Ob())}function K(e,t){if(1&e&&(w.Rb(0,"td",26),w.Cc(1,z,5,1,"ng-container",2),w.Cc(2,Y,2,0,"ng-container",2),w.Qb()),2&e){const e=t.$implicit,i=w.dc(3);w.Ab(1),w.jc("ngIf",!i.dirtyEnvPerms[e].saving),w.Ab(1),w.jc("ngIf",i.dirtyEnvPerms[e].saving)}}function V(e,t){1&e&&w.Mb(0,"tr",29)}function J(e,t){1&e&&w.Mb(0,"tr",30)}function X(e,t){1&e&&w.Mb(0,"th",17)}function B(e,t){if(1&e&&(w.Pb(0),w.Ec(1),w.Ob()),2&e){const e=w.dc().$implicit,t=w.dc(5);w.Ab(1),w.Gc(" ",t.userProfiles.get(e).username||t.userProfiles.get(e).email||"Unknown user"," ")}}function ee(e,t){if(1&e&&(w.Rb(0,"td",18),w.Cc(1,B,2,1,"ng-container",2),w.Qb()),2&e){const e=t.$implicit,i=w.dc(5);w.Ab(1),w.jc("ngIf",i.userProfiles.has(e))}}function te(e,t){1&e&&(w.Rb(0,"th",17),w.Ec(1,"Actions"),w.Qb())}function ie(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"button",40),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(5).resendInvite(t)})),w.Ec(2,"Resend Invite"),w.Qb(),w.Rb(3,"button",28),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(5).cancelShare(t)})),w.Ec(4,"Cancel Invite"),w.Qb(),w.Ob()}}function ne(e,t){1&e&&(w.Pb(0),w.Mb(1,"mat-progress-bar",5),w.Ob())}function re(e,t){if(1&e&&(w.Rb(0,"td",26),w.Cc(1,ie,5,0,"ng-container",2),w.Cc(2,ne,2,0,"ng-container",2),w.Qb()),2&e){const e=t.$implicit,i=w.dc(5);w.Ab(1),w.jc("ngIf",!i.dirtyEnvPerms[e].saving),w.Ab(1),w.jc("ngIf",i.dirtyEnvPerms[e].saving)}}function se(e,t){1&e&&w.Mb(0,"tr",29)}function ce(e,t){1&e&&w.Mb(0,"tr",30)}const oe=function(){return["email","actions"]};function ae(e,t){if(1&e&&(w.Pb(0),w.Rb(1,"h4",39),w.Ec(2,"Pending Invites"),w.Qb(),w.Rb(3,"table",7),w.Pb(4,8),w.Cc(5,X,1,0,"th",9),w.Cc(6,ee,2,1,"td",10),w.Ob(),w.Pb(7,12),w.Cc(8,te,2,0,"th",9),w.Cc(9,re,3,2,"td",13),w.Ob(),w.Cc(10,se,1,0,"tr",14),w.Cc(11,ce,1,0,"tr",15),w.Qb(),w.Ob()),2&e){const e=w.dc(4);w.Ab(3),w.jc("dataSource",e.getInviteIds()),w.Ab(7),w.jc("matHeaderRowDef",w.kc(3,oe)),w.Ab(1),w.jc("matRowDefColumns",w.kc(4,oe))}}function be(e,t){if(1&e&&(w.Rb(0,"mat-option",25),w.Ec(1),w.ec(2,"titlecase"),w.Qb()),2&e){const e=t.$implicit;w.jc("value",e.value),w.Ab(1),w.Gc(" ",w.fc(2,2,e.key)," ")}}function le(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Cc(1,ae,12,5,"ng-container",2),w.Rb(2,"form",31),w.Zb("submit",(function(){return w.rc(e),w.dc(3).share()})),w.Rb(3,"mat-grid-list",32),w.Rb(4,"mat-grid-tile",33),w.Rb(5,"mat-form-field"),w.Rb(6,"mat-label"),w.Ec(7,"Email"),w.Qb(),w.Mb(8,"input",34),w.Qb(),w.Qb(),w.Rb(9,"mat-grid-tile",35),w.Rb(10,"mat-form-field"),w.Rb(11,"mat-label"),w.Ec(12,"Permissions"),w.Qb(),w.Rb(13,"mat-select",36),w.Cc(14,be,3,4,"mat-option",24),w.ec(15,"keyvalue"),w.Qb(),w.Qb(),w.Qb(),w.Rb(16,"mat-grid-tile",37),w.Rb(17,"button",38),w.Ec(18,"Add"),w.Qb(),w.Qb(),w.Qb(),w.Qb(),w.Ob()}if(2&e){const e=w.dc(3);w.Ab(1),w.jc("ngIf",e.getInviteIds().length>0),w.Ab(1),w.jc("formGroup",e.form),w.Ab(12),w.jc("ngForOf",w.gc(15,3,e.envPermissions,e.originalOrder))}}const de=function(){return["email","perm","actions"]},ue=function(){return["email","perm"]};function me(e,t){if(1&e&&(w.Pb(0),w.Cc(1,L,2,0,"h4",6),w.Pb(2),w.Rb(3,"table",7),w.Pb(4,8),w.Cc(5,$,1,0,"th",9),w.Cc(6,U,2,1,"td",10),w.Ob(),w.Pb(7,11),w.Cc(8,Z,2,0,"th",9),w.Cc(9,H,3,2,"td",10),w.Ob(),w.Pb(10,12),w.Cc(11,_,2,0,"th",9),w.Cc(12,K,3,2,"td",13),w.Ob(),w.Cc(13,V,1,0,"tr",14),w.Cc(14,J,1,0,"tr",15),w.Qb(),w.Ob(),w.Cc(15,le,19,6,"ng-container",2),w.Ob()),2&e){const e=w.dc(2);w.Ab(1),w.jc("ngIf",!e.userIsAdmin),w.Ab(2),w.jc("dataSource",e.getUserWithPermIds()),w.Ab(10),w.jc("matHeaderRowDef",e.userIsAdmin?w.kc(5,de):w.kc(6,ue)),w.Ab(1),w.jc("matRowDefColumns",e.userIsAdmin?w.kc(7,de):w.kc(8,ue)),w.Ab(1),w.jc("ngIf",e.userIsAdmin)}}function pe(e,t){if(1&e&&(w.Pb(0),w.Cc(1,me,16,9,"ng-container",2),w.Ob()),2&e){const e=w.dc();w.Ab(1),w.jc("ngIf",e.environment.remote)}}let ve=(()=>{class e{constructor(e,t,i,n,r,o,a){this.fb=e,this.appEnvironmentService=t,this.workspaceService=i,this.authService=n,this.dialogService=r,this.dialogRef=o,this.data=a,this.loading=!0,this.userIsAdmin=!1,this.userProfiles=new Map,this.envPermissions=new Map([["read",g.a.Environment.EnvironmentPermissions.read],["write",g.a.Environment.EnvironmentPermissions.write],["admin",g.a.Environment.EnvironmentPermissions.admin],["owner",g.a.Environment.EnvironmentPermissions.owner]]),this.subs=new c.a,this.originalOrder=(e,t)=>0,this.publishStack=()=>Object(s.a)(this,void 0,void 0,(function*(){})),this.publishWorkspace=()=>Object(s.a)(this,void 0,void 0,(function*(){this.loading=!0,this.subs.add(this.workspaceService.publishWorkspace(this.environment.id).pipe(Object(S.a)(e=>Object(f.a)([Object(h.a)(e),this.workspaceService.userWorkspaces().pipe(Object(b.a)(1))]))).subscribe(([e,t])=>{this.environment=t.find(t=>t.id===e.id),this.setupShareSettings(),this.loading=!1},e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Error: "+(e.message||"Server error!")}),this.loading=!1}))})),this.environment=a.environment,this.environmentType=a.type,this.subs.add(this.authService.user$.subscribe(e=>{e&&(this.userId=e.uid)}))}ngOnInit(){this.environment.remote?(this.setupShareSettings(),this.loading=!1):this.publish()}run(e,t){return"stack"===this.environmentType?e():"workspace"===this.environmentType?t():void 0}setupShareSettings(){var e;return Object(s.a)(this,void 0,void 0,(function*(){this.userIsAdmin=(null===(e=this.environment.remote)||void 0===e?void 0:e.permissions[this.userId].permission)>=this.envPermissions.get("admin"),this.dirtyEnvPerms=Object.entries(E.merge(this.environment.remote.invites,this.environment.remote.permissions)).reduce((e,t)=>(e[t[0]]=Object.assign(Object.assign({},t[1]),{saving:!1}),e),{}),this.form=this.fb.group({emailToAdd:["",[v.E.required,v.E.email]],permission:[this.envPermissions.get("read"),[v.E.required]]}),yield this.getUserProfilesForEnvironment()}))}getUserProfilesForEnvironment(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.workspaceService.getUserProfilesFor(this.environment.remote.id).pipe(Object(b.a)(1)).toPromise()).forEach(e=>this.userProfiles.set(e.uid,e))}))}getUserWithPermIds(){var e;return Object.keys((null===(e=this.environment.remote)||void 0===e?void 0:e.permissions)||{}).sort((e,t)=>this.environment.remote.permissions[e].permission<=this.environment.remote.permissions[t].permission?1:-1)}getInviteIds(){var e;return Object.keys((null===(e=this.environment.remote)||void 0===e?void 0:e.invites)||{})}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close()}convertPermissionToString(e){switch(e){case g.a.Environment.EnvironmentPermissions.read:return"Read";case g.a.Environment.EnvironmentPermissions.write:return"Write";case g.a.Environment.EnvironmentPermissions.admin:return"Admin";case g.a.Environment.EnvironmentPermissions.owner:return"Owner"}}share(){this.form.disable();const{emailToAdd:e,permission:t}=this.form.getRawValue();this.workspaceService.share(this.environment.remote.id,e,t).pipe(Object(b.a)(1),Object(u.a)(()=>{this.form.enable()})).subscribe(e=>{const{userId:i}=e;this.environment.remote.invites[i]={permission:t},this.userProfiles.set(i,{username:"Loading...",email:"",uid:i}),this.dirtyEnvPerms[i]={permission:t,saving:!1},this.getUserProfilesForEnvironment(),this.form.reset()},e=>{this.dialogService.openAlertDialog({title:"Share Workspace",text:"Error while sharing"}),console.log(e)})}cancelShare(e){this.dirtyEnvPerms[e].saving=!0,this.workspaceService.cancelShare(this.environment.remote.id,e).pipe(Object(b.a)(1)).subscribe(()=>{delete this.environment.remote.invites[e],delete this.dirtyEnvPerms[e]},t=>{this.dialogService.openAlertDialog({title:"Share Workspace",text:""+(t.message||"Unknown error occurred!")}),this.dirtyEnvPerms[e].saving=!1})}resendInvite(e){this.dirtyEnvPerms[e].saving=!0,this.workspaceService.share(this.environment.remote.id,this.userProfiles.get(e).email,this.environment.remote.invites[e].permission).pipe(Object(b.a)(1)).subscribe(()=>{this.dialogService.openAlertDialog({title:"Send Invite",text:"Invite sent successfully."})},e=>{this.dialogService.openAlertDialog({title:"Send Invite",text:"Invite failed to be sent, please try again later."})},()=>{this.dirtyEnvPerms[e].saving=!1})}publish(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.run(this.publishStack,this.publishWorkspace)}))}save(e){this.dirtyEnvPerms[e].saving=!0,this.workspaceService.updateUserPermission(this.environment.remote.id,e,this.dirtyEnvPerms[e].permission).pipe(Object(b.a)(1)).toPromise().then(()=>{this.environment.remote.permissions[e].permission=this.dirtyEnvPerms[e].permission}).catch(t=>{this.dirtyEnvPerms[e].permission=this.environment.remote.permissions[e].permission,this.dialogService.openAlertDialog({title:"Sync Stack",text:""+(t.message||"Unknown error occurred!")})}).finally(()=>{this.dirtyEnvPerms[e].saving=!1})}revoke(e){e===this.environment.remote.owner?this.dialogService.openAlertDialog({title:"Revoke Access",text:"You cannot revoke the permissions of the original owner!"}):this.dialogService.openConfirmationDialog({title:"Revoke Access",text:"This will revoke all permissions from the user "+(this.userProfiles.get(e).username||this.userProfiles.get(e).email),button:{yes:"Revoke",no:"Cancel"}}).afterClosed().subscribe(t=>{!0===t&&(this.dirtyEnvPerms[e].saving=!0,this.workspaceService.revokeUserPermission(this.environment.remote.id,e).pipe(Object(b.a)(1)).toPromise().then(()=>{delete this.environment.remote.permissions[e],delete this.dirtyEnvPerms[e]}).catch(t=>{this.dialogService.openAlertDialog({title:"Revoke Access",text:"Error: "+(t.message||"Unknown error occurred!")}),this.dirtyEnvPerms[e].saving=!1}))})}}return e.\u0275fac=function(t){return new(t||e)(w.Lb(v.f),w.Lb(y.a),w.Lb(P.a),w.Lb(R.a),w.Lb(I.a),w.Lb(p.h),w.Lb(p.a))},e.\u0275cmp=w.Fb({type:e,selectors:[["new-environment-dialog"]],decls:8,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-button","","mat-dialog-close",""],["mode","indeterminate"],["class","text-grey",4,"ngIf"],["mat-table","",1,"permTable",3,"dataSource"],["matColumnDef","email"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","perm"],["matColumnDef","actions"],["mat-cell","","class","tableActions",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"text-grey"],["mat-header-cell",""],["mat-cell",""],["class","pt-1",4,"ngIf"],[1,"pt-1"],["class","text-muted text-small",4,"ngIf"],[1,"text-muted","text-small"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-cell","",1,"tableActions"],["mat-button","","mat-raised-button","","color","primary",3,"disabled","click"],["mat-button","","mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[3,"formGroup","submit"],["cols","7"],["colspan","4"],["type","email","matInput","","formControlName","emailToAdd"],["colspan","2"],["formControlName","permission"],["colspan","1"],["mat-button","","mat-raised-button","","color","primary","type","submit"],[2,"margin-top","15px","margin-bottom","0"],["mat-button","","mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(w.Rb(0,"h1",0),w.Ec(1,"Share Settings"),w.Qb(),w.Rb(2,"div",1),w.Cc(3,W,4,0,"ng-container",2),w.Cc(4,pe,2,1,"ng-container",2),w.Qb(),w.Rb(5,"div",3),w.Rb(6,"button",4),w.Ec(7,"Close"),w.Qb(),w.Qb()),2&e&&(w.Ab(3),w.jc("ngIf",t.loading),w.Ab(1),w.jc("ngIf",!t.loading),w.Ab(1),w.jc("align","end"))},directives:[p.i,p.f,n.t,p.c,x.b,p.d,A.a,O.j,O.c,O.e,O.b,O.g,O.i,O.d,O.a,j.a,n.s,C.i,O.f,O.h,v.G,v.r,v.j,Q.a,Q.c,M.c,M.g,D.a,v.c,v.q,v.i],pipes:[n.l,n.F],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%;padding:0 5px}.permTable[_ngcontent-%COMP%]{width:100%}.tableActions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:5px}"]}),e})();var fe=i("EVKI"),he=i("aSHc"),ge=i("MrDi");function ke(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",6),w.Rb(1,"div",7),w.Ec(2),w.Qb(),w.Rb(3,"file-path",8),w.Zb("onSelectedPath",(function(t){return w.rc(e),w.dc().setCodebasePath(t)})),w.Qb(),w.Qb()}if(2&e){const e=w.dc();w.Ab(2),w.Gc("Workspace path: ",e.codebasePath,""),w.Ab(1),w.jc("rootPath",e.codebasePath)("foldersOnly",!0)}}function Ee(e,t){1&e&&(w.Rb(0,"div",9),w.Rb(1,"div"),w.Ec(2,"Installing..."),w.Qb(),w.Mb(3,"mat-progress-bar",10),w.Qb())}function Se(e,t){if(1&e&&(w.Pb(0),w.Rb(1,"div",11),w.Mb(2,"i",12),w.Rb(3,"span",13),w.Ec(4),w.Qb(),w.Ec(5),w.Qb(),w.Ob()),2&e){const e=w.dc();w.Ab(4),w.Fc(e.data.workspace.name),w.Ab(1),w.Gc(" installed into ",e.codebasePath,". ")}}function we(e,t){if(1&e&&(w.Pb(0),w.Rb(1,"div",14),w.Rb(2,"div",15),w.Mb(3,"i",16),w.Ec(4," Failed to install "),w.Rb(5,"span",13),w.Ec(6),w.Qb(),w.Ec(7),w.Qb(),w.Rb(8,"div",17),w.Ec(9),w.Qb(),w.Qb(),w.Ob()),2&e){const e=w.dc();w.Ab(6),w.Fc(e.data.workspace.name),w.Ab(1),w.Gc(" into ",e.codebasePath,". Please try again later "),w.Ab(2),w.Gc(" Error: ",e.errorMessage," ")}}function ye(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"button",18),w.Ec(2,"Cancel"),w.Qb(),w.Rb(3,"button",19),w.Zb("click",(function(){return w.rc(e),w.dc().create()})),w.Ec(4,"Install"),w.Qb(),w.Ob()}if(2&e){const e=w.dc();w.Ab(3),w.jc("disabled",!e.codebasePath)}}function Pe(e,t){1&e&&(w.Pb(0),w.Rb(1,"button",18),w.Ec(2,"Close"),w.Qb(),w.Ob())}let Re=(()=>{class e{constructor(e,t,i,n,r){this.fb=e,this.appEnvironmentService=t,this.data=i,this.workspaceService=n,this.dialogRef=r,this.actionState=he.a,this.currentState=he.a.IDLE,this.subs=new c.a}ngOnInit(){}setCodebasePath(e){this.codebasePath=e}ngOnDestroy(){this.subs.unsubscribe()}close(){this.dialogRef.close({success:this.currentState===he.a.SUCCESS})}create(){this.currentState=he.a.ACQUIRING,this.workspaceService.install(this.data.workspace,this.codebasePath).pipe(Object(b.a)(1),Object(d.a)(500)).subscribe(e=>{this.currentState=he.a.SUCCESS},e=>{var t;this.errorMessage=(null===(t=e.error)||void 0===t?void 0:t.message)||"Server error!",this.currentState=he.a.FAILED})}}return e.\u0275fac=function(t){return new(t||e)(w.Lb(v.f),w.Lb(y.a),w.Lb(p.a),w.Lb(P.a),w.Lb(p.h))},e.\u0275cmp=w.Fb({type:e,selectors:[["new-environment-dialog"]],decls:12,vars:8,consts:[["mat-dialog-title",""],[1,"text-underline","text-capitalize"],["mat-dialog-content","",4,"ngIf"],["class","text-center p-2",4,"ngIf"],[4,"ngIf"],["mat-dialog-actions","",3,"align"],["mat-dialog-content",""],[1,"text-capitalize","pb-1","text-muted","text-tiny"],[3,"rootPath","foldersOnly","onSelectedPath"],[1,"text-center","p-2"],["mode","indeterminate"],[1,"text-center","p-2","text-success"],[1,"fa","fa-check","mr-2"],[1,"text-capitalize"],[1,"text-center","p-2","text-red"],[1,""],[1,"fa","fa-times-circle","mr-2"],[1,"p-2","text-small","text-muted"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(e,t){1&e&&(w.Rb(0,"h1",0),w.Ec(1,"Install "),w.Rb(2,"span",1),w.Ec(3),w.Qb(),w.Ec(4," Workspace"),w.Qb(),w.Cc(5,ke,4,3,"div",2),w.Cc(6,Ee,4,0,"div",3),w.Cc(7,Se,6,2,"ng-container",4),w.Cc(8,we,10,3,"ng-container",4),w.Rb(9,"div",5),w.Cc(10,ye,5,1,"ng-container",4),w.Cc(11,Pe,3,0,"ng-container",4),w.Qb()),2&e&&(w.Ab(3),w.Fc(t.data.workspace.name),w.Ab(2),w.jc("ngIf",t.currentState==t.actionState.IDLE),w.Ab(1),w.jc("ngIf",t.currentState===t.actionState.ACQUIRING),w.Ab(1),w.jc("ngIf",t.currentState===t.actionState.SUCCESS),w.Ab(1),w.jc("ngIf",t.currentState===t.actionState.FAILED),w.Ab(1),w.jc("align","end"),w.Ab(1),w.jc("ngIf",t.currentState===t.actionState.IDLE),w.Ab(1),w.jc("ngIf",t.currentState===t.actionState.FAILED||t.currentState===t.actionState.SUCCESS))},directives:[p.i,n.t,p.c,p.f,ge.a,A.a,x.b,p.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e})();var Ie=i("xm+p"),xe=i("k1Ex"),Ae=i("Qu3c");function Oe(e,t){1&e&&(w.Rb(0,"div",12),w.Ec(1,"No workspaces present"),w.Qb())}function je(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",15),w.Rb(1,"div",16),w.Rb(2,"div",17),w.Rb(3,"div",18),w.Rb(4,"div"),w.Ec(5),w.ec(6,"titlecase"),w.Qb(),w.Rb(7,"div",19),w.Ec(8),w.ec(9,"titlecase"),w.Qb(),w.Qb(),w.Rb(10,"div"),w.Rb(11,"button",20),w.Zb("click",(function(){w.rc(e);const i=t.$implicit;return w.dc(3).acceptInvite(i.eid)})),w.Ec(12,"Accept"),w.Qb(),w.Rb(13,"button",20),w.Zb("click",(function(){w.rc(e);const i=t.$implicit;return w.dc(3).declineInvite(i.eid)})),w.Ec(14,"Decline"),w.Qb(),w.Qb(),w.Qb(),w.Qb(),w.Qb()}if(2&e){const e=t.$implicit;w.Ab(5),w.Fc(w.fc(6,2,e.name)),w.Ab(3),w.Gc("Owner: ",w.fc(9,4,e.owner.displayName)||e.owner.email,"")}}function Ce(e,t){if(1&e&&(w.Pb(0),w.Rb(1,"div",13),w.Ec(2,"Workspace Invites"),w.Qb(),w.Cc(3,je,15,6,"div",14),w.Ob()),2&e){const e=w.dc(2);w.Ab(3),w.jc("ngForOf",e.invites)}}const Qe=function(e){return{workspaces:e}};function Me(e,t){if(1&e&&(w.Pb(0),w.Rb(1,"div",21),w.Ec(2,"Remote Workspaces"),w.Qb(),w.Mb(3,"div",11),w.Ob()),2&e){const e=w.dc(2),t=w.oc(2);w.Ab(3),w.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",w.lc(2,Qe,e.workspaceList.remote))}}const De=function(e){return[e]};function We(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"div",2),w.Rb(2,"div",3),w.Cc(3,Oe,2,0,"div",4),w.Rb(4,"div",5),w.Cc(5,Ce,4,1,"ng-container",0),w.Rb(6,"div",6),w.Rb(7,"div",7),w.Ec(8,"My Workspaces"),w.Qb(),w.Rb(9,"div",8),w.Rb(10,"button",9),w.Zb("click",(function(){return w.rc(e),w.dc().createNewWorkspace()})),w.Mb(11,"i",10),w.Ec(12," New Workspace"),w.Qb(),w.Qb(),w.Qb(),w.Mb(13,"div",11),w.Mb(14,"div",11),w.Cc(15,Me,4,4,"ng-container",0),w.Qb(),w.Qb(),w.Qb(),w.Ob()}if(2&e){const e=w.dc(),t=w.oc(2);w.Ab(3),w.jc("ngIf",0===e.workspaces.length),w.Ab(2),w.jc("ngIf",e.invites.length>0),w.Ab(8),w.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",w.lc(9,Qe,w.lc(7,De,e.workspaceList.system))),w.Ab(1),w.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",w.lc(11,Qe,e.workspaceList.local)),w.Ab(1),w.jc("ngIf",(null==e.workspaceList||null==e.workspaceList.remote?null:e.workspaceList.remote.length)>0)}}function Le(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",32),w.Rb(1,"button",30),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(2).install(t)})),w.Mb(2,"i",33),w.Qb(),w.Qb()}}function $e(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",5),w.Rb(1,"button",34),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(2).switchEnvironment(t)})),w.Mb(2,"i",35),w.Qb(),w.Qb()}if(2&e){const e=w.dc().$implicit,t=w.dc(2);w.Ab(1),w.jc("disabled",t.isCurrentEnv(e))}}function Fe(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",5),w.Rb(1,"button",37),w.Zb("click",(function(){w.rc(e);const t=w.dc(2).$implicit;return w.dc(2).publish(t)})),w.Mb(2,"i",38),w.Ec(3," Push your changes"),w.Qb(),w.Qb()}2&e&&(w.Ab(1),w.jc("title","Push Your Changes"))}function Te(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",5),w.Rb(1,"button",37),w.Zb("click",(function(){w.rc(e);const t=w.dc(2).$implicit;return w.dc(2).sync(t)})),w.Mb(2,"i",33),w.Ec(3," Pull new updates"),w.Qb(),w.Qb()}2&e&&(w.Ab(1),w.jc("title","Pull New Updates"))}function Ue(e,t){1&e&&(w.Rb(0,"div",39),w.Ec(1,"Requires merge!"),w.Qb())}function Ze(e,t){if(1&e&&(w.Pb(0),w.Cc(1,Fe,4,1,"div",25),w.Cc(2,Te,4,1,"div",25),w.Cc(3,Ue,2,0,"div",36),w.Ob()),2&e){const e=w.dc().$implicit;w.Ab(1),w.jc("ngIf",!e.remote.isClean),w.Ab(1),w.jc("ngIf",e.localVersion!=(null==e.remote?null:e.remote.version)),w.Ab(1),w.jc("ngIf",null==e.remote?null:e.remote.requiresMerge)}}function Ge(e,t){1&e&&w.Mb(0,"mat-progress-bar",40)}function qe(e,t){if(1&e){const e=w.Sb();w.Pb(0),w.Rb(1,"button",37),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(2).install(t)})),w.Mb(2,"i",33),w.Ec(3," Install Workspace "),w.Qb(),w.Ob()}2&e&&(w.Ab(1),w.jc("title","Install Workspace"))}function Ne(e,t){1&e&&(w.Rb(0,"div",52),w.Mb(1,"i",53),w.Ec(2," Shared"),w.Qb())}function He(e,t){1&e&&(w.Rb(0,"div",54),w.Mb(1,"i",55),w.Ec(2," Local"),w.Qb())}function _e(e,t){if(1&e){const e=w.Sb();w.Rb(0,"button",48),w.Zb("click",(function(){w.rc(e);const t=w.dc(2).$implicit;return w.dc(2).renameWorkspace(t)})),w.Ec(1,"Rename Workspace"),w.Qb()}if(2&e){const e=w.dc(2).$implicit;w.jc("disabled",e.remoteOnly)}}function ze(e,t){if(1&e){const e=w.Sb();w.Rb(0,"button",48),w.Zb("click",(function(){w.rc(e);const t=w.dc(2).$implicit;return w.dc(2).deleteWorkspace(t)})),w.Ec(1,"Delete Workspace"),w.Qb()}if(2&e){const e=w.dc(2).$implicit;w.jc("disabled",e.remoteOnly)}}function Ye(e,t){if(1&e){const e=w.Sb();w.Rb(0,"button",51),w.Zb("click",(function(){w.rc(e);const t=w.dc(2).$implicit;return w.dc(2).purgeWorkspace(t)})),w.Ec(1,"Purge Workspace"),w.Qb()}}function Ke(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",41),w.Rb(1,"div",15),w.Rb(2,"p",42),w.Ec(3),w.Qb(),w.Cc(4,Ne,3,0,"div",43),w.Cc(5,He,3,0,"div",44),w.Rb(6,"div",45),w.Mb(7,"i",46),w.Ec(8),w.Qb(),w.Qb(),w.Rb(9,"div",47),w.Rb(10,"button",48),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(2).switchEnvironment(t)})),w.Ec(11,"Switch To This Workspace"),w.Qb(),w.Cc(12,_e,2,1,"button",49),w.Cc(13,ze,2,1,"button",49),w.Cc(14,Ye,2,0,"button",50),w.Rb(15,"button",51),w.Zb("click",(function(){w.rc(e);const t=w.dc().$implicit;return w.dc(2).shareWorkspace(t)})),w.Rb(16,"span"),w.Ec(17,"Share Workspace "),w.Qb(),w.Qb(),w.Qb(),w.Qb()}if(2&e){const e=w.dc().$implicit,t=w.dc(2);w.Ab(3),w.Fc(e.description||"No description"),w.Ab(1),w.jc("ngIf",e.remote),w.Ab(1),w.jc("ngIf",!e.remote&&e.isLocal),w.Ab(3),w.Gc(" ",e.codebasePath,""),w.Ab(2),w.jc("disabled",t.isCurrentEnv(e)||e.remoteOnly),w.Ab(2),w.jc("ngIf",!e.isSystemWorkspace),w.Ab(1),w.jc("ngIf",!e.isSystemWorkspace),w.Ab(1),w.jc("ngIf",e.remoteOnly&&e.remote.owner===(null==t.user?null:t.user.uid))}}function Ve(e,t){if(1&e){const e=w.Sb();w.Rb(0,"div",15),w.Rb(1,"div",16),w.Rb(2,"div",22),w.Rb(3,"div",23),w.Cc(4,Le,3,0,"div",24),w.Cc(5,$e,3,1,"div",25),w.Qb(),w.Rb(6,"div",5),w.Mb(7,"i",26),w.Qb(),w.Rb(8,"div",27),w.Zb("click",(function(){w.rc(e);const i=t.$implicit;return w.dc(2).toggleItemList(i)})),w.Rb(9,"div",5),w.Ec(10),w.Qb(),w.Rb(11,"div",19),w.Ec(12),w.Qb(),w.Qb(),w.Rb(13,"div",8),w.Cc(14,Ze,4,3,"ng-container",0),w.Cc(15,Ge,1,0,"mat-progress-bar",28),w.Cc(16,qe,4,1,"ng-container",0),w.Qb(),w.Rb(17,"div",29),w.Rb(18,"button",30),w.Zb("click",(function(){w.rc(e);const i=t.$implicit;return w.dc(2).toggleItemList(i)})),w.Mb(19,"i",26),w.Qb(),w.Qb(),w.Qb(),w.Cc(20,Ke,18,8,"div",31),w.Qb(),w.Qb()}if(2&e){const e=t.$implicit,i=w.dc(2);w.Ab(2),w.Db("workspace-disabled",e.disabled),w.Ab(2),w.jc("ngIf",e.remoteOnly),w.Ab(1),w.jc("ngIf",!e.remoteOnly),w.Ab(2),w.Db("text-primary",i.isCurrentEnv(e))("text-muted",!i.isCurrentEnv(e))("fa-dice-d6",!e.isSystemWorkspace)("fa-desktop",e.isSystemWorkspace),w.Ab(1),w.Db("text-primary",i.isCurrentEnv(e)),w.Ab(2),w.Fc(e.name),w.Ab(2),w.Fc(e.codebasePath),w.Ab(2),w.jc("ngIf",!e.remoteOnly&&!!e.remote&&!i.activeRequest[e.id]),w.Ab(1),w.jc("ngIf",i.activeRequest[e.id]),w.Ab(1),w.jc("ngIf",e.remoteOnly),w.Ab(3),w.Db("fa-chevron-up",i.isItemOpen(e))("fa-chevron-down",!i.isItemOpen(e)),w.Ab(1),w.jc("ngIf",i.isItemOpen(e))}}function Je(e,t){1&e&&w.Cc(0,Ve,21,24,"div",14),2&e&&w.jc("ngForOf",t.workspaces)}const Xe=r.f.forChild([{path:"",component:(()=>{class e{constructor(e,t,i,n,r,s,o){this.appEnvironmentService=e,this.dialogService=t,this.dialog=i,this.authService=n,this.workspaceService=r,this.navigationService=s,this.myItemsService=o,this.invites=[],this.activeRequest={},this.itemList={},this.subs=new c.a}ngOnInit(){this.getEnvironments(),this.getPendingInvites(),this.subs.add(this.authService.user$.subscribe(e=>this.user=e))}toggleItemList(e){var t,i;const n=null!==(t=e.id)&&void 0!==t?t:null===(i=e.remote)||void 0===i?void 0:i.id;this.itemList[n]=!this.itemList[n]}isItemOpen(e){var t,i;return this.itemList[null!==(t=e.id)&&void 0!==t?t:null===(i=e.remote)||void 0===i?void 0:i.id]}getEnvironments(){this.workspaceService.userWorkspaces().subscribe(e=>{const t=(e,t)=>{var i,n;return(null===(i=e.name)||void 0===i?void 0:i.toLowerCase())>(null===(n=t.name)||void 0===n?void 0:n.toLowerCase())?1:-1},i=e.sort(t),n=e.find(e=>e.isSystemWorkspace),r=e.filter(e=>!e.remoteOnly&&!e.isSystemWorkspace),s=e.filter(e=>e.remoteOnly).sort(t),c=r.filter(e=>!e.disabled).sort(t),o=r.filter(e=>e.disabled).sort(t);this.workspaceList={system:n,local:[...c,...o],remote:s},this.workspaces=i}),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(e=>this.currentEnvironment=e))}goToEnvironmentHome(){this.navigationService.navigateToEnvironmentHome()}getPendingInvites(){this.subs.add(this.workspaceService.pendingInvites$.subscribe(e=>{this.invites=e}))}createNewWorkspace(){this.isLoggedIn()?this.myItemsService.createNewWorkspace().afterClosed().subscribe(()=>this.getEnvironments()):this.dialogService.openMustLoginDialog()}isLoggedIn(){return!!this.user}ngOnDestroy(){this.subs.unsubscribe()}deleteWorkspace(e){const t=this.dialog.open(a.a,{data:{title:`Delete workspace ${e.name}?`,text:"Deleting this workspace is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0});Object(o.a)([t.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([t,i])=>{!0===t&&this.workspaceService.delete(e.id).subscribe(()=>{e.id===i.id&&this.dialog.open(m.a,{data:{},disableClose:!0,position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>console.log("dialog result: ",e)),this.getEnvironments()})})}purgeWorkspace(e){const t=this.dialogService.openConfirmationDialog({title:`Purge workspace ${e.name}?`,text:"Purging this workspace will remove it from the stackjoy servers completely. This is a permanent action and cannot be undone.",button:{yes:"Purge",no:"Cancel"}});Object(o.a)([t.afterClosed(),this.appEnvironmentService.currentEnvironment$.pipe(Object(b.a)(1))]).subscribe(([t,i])=>{!1!==t&&this.workspaceService.purge(e.remote.id).subscribe(()=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:`Workspace ${e.name} purged successfully`}),this.getEnvironments()},e=>{this.dialogService.openAlertDialog({title:"Purge Workspace",text:"Something went wrong: "+(e.message||"Unknown error occurred...")})})})}isCurrentEnv(e){var t;return(null===(t=this.currentEnvironment)||void 0===t?void 0:t.id)===e.id}switchEnvironment(e){this.appEnvironmentService.switchToEnvironment(e.id).pipe(Object(l.a)(e=>this.goToEnvironmentHome())).subscribe(()=>null)}shareWorkspace(e){this.user?this.dialog.open(ve,{data:{environment:e,type:"workspace"},width:"50vw",maxWidth:"800px",minWidth:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(()=>{this.getEnvironments()}):this.dialogService.openMustLoginDialog()}renameWorkspace(e){this.dialog.open(fe.a,{data:{environment:e},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{e.success&&this.getEnvironments()})}publish(e){var t;return Object(s.a)(this,void 0,void 0,(function*(){(null===(t=e.remote)||void 0===t?void 0:t.requiresMerge)?this.dialogService.openAlertDialog({title:"Publish Workspace",text:"There are pending changes for this workspace. Please merge changes before publishing."}):(this.activeRequest[e.id]=!0,this.workspaceService.publishWorkspace(e.id).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[e.id]=!1})).subscribe(e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Workspace has been published successfully"}),this.getEnvironments()},e=>{this.dialogService.openAlertDialog({title:"Publish Workspace",text:"Error publishing: "+(e.message||"Server error!")})}))}))}sync(e){if(!e.localVersion)return this.install(e);this.activeRequest[e.id]=!0,this.workspaceService.syncWorkspace(e.id,e.remote.version).pipe(Object(b.a)(1),Object(d.a)(1e3),Object(u.a)(()=>{this.activeRequest[e.id]=!1})).subscribe(e=>{this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Stack has been synced"}),this.getEnvironments()},e=>{var t;this.dialogService.openAlertDialog({title:"Sync Workspace",text:"Error while syncing: "+((null===(t=e.error)||void 0===t?void 0:t.message)||"Server error!")})})}install(e){this.dialog.open(Re,{data:{workspace:e},width:"500px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{this.getEnvironments()})}acceptInvite(e){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.acceptInvite(e).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}declineInvite(e){return Object(s.a)(this,void 0,void 0,(function*(){this.workspaceService.declineInvite(e).pipe(Object(b.a)(1)).subscribe(()=>{this.workspaceService.fetchPendingInvites()})}))}}return e.\u0275fac=function(t){return new(t||e)(w.Lb(y.a),w.Lb(I.a),w.Lb(p.b),w.Lb(R.a),w.Lb(P.a),w.Lb(Ie.a),w.Lb(xe.a))},e.\u0275cmp=w.Fb({type:e,selectors:[["my-workspaces"]],decls:3,vars:1,consts:[[4,"ngIf"],["workspaceListTemplate",""],[1,"pt-3",2,"max-width","800px"],[1,"pl-3"],["class","text center",4,"ngIf"],[1,""],[1,"pl-2","d-flex","align-items-start"],[1,"text-bold","py-2"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"",3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"text","center"],[1,"text-bold","p-2"],["class","p-2",4,"ngFor","ngForOf"],[1,"p-2"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center","justify-content-between"],[1,"pl-3","cursor-pointer"],[1,"subheader"],["mat-raised-button","",3,"click"],[1,"text-bold","p-2","pt-4"],[1,"d-flex","align-items-center"],[1,"pr-3"],["class","","style","width:40px; height:40px;",4,"ngIf"],["class","",4,"ngIf"],[1,"fa"],[1,"pl-3","cursor-pointer",3,"click"],["mode","indeterminate",4,"ngIf"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"",2,"width","40px","height","40px"],[1,"fa","fa-download","text-muted"],["mat-button","","mat-icon-button","",3,"disabled","click"],[1,"fa","fa-exchange-alt"],["style","color: red",4,"ngIf"],["mat-button","",3,"title","click"],[1,"fa","fa-upload","text-muted"],[2,"color","red"],["mode","indeterminate"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"my-2"],["class","text-muted text-small","matTooltip","This workspace is shared with other users",4,"ngIf"],["class","text-muted text-small","matTooltip","This workspace is present only on this machine",4,"ngIf"],[1,"text-small"],[1,"fa","fa-folder-open","mr-1"],[1,"ml-auto","p-2","border-left"],["mat-button","",1,"d-block",3,"disabled","click"],["mat-button","","class","d-block",3,"disabled","click",4,"ngIf"],["mat-button","","class","d-block",3,"click",4,"ngIf"],["mat-button","",1,"d-block",3,"click"],["matTooltip","This workspace is shared with other users",1,"text-muted","text-small"],[1,"fa","fa-users","mr-1"],["matTooltip","This workspace is present only on this machine",1,"text-muted","text-small"],[1,"fa","fa-desktop","mr-1"]],template:function(e,t){1&e&&(w.Cc(0,We,16,13,"ng-container",0),w.Cc(1,Je,1,1,"ng-template",null,1,w.Dc)),2&e&&w.jc("ngIf",t.workspaces)},directives:[n.t,x.b,n.A,n.s,A.a,Ae.a],pipes:[n.F],styles:[".subheader[_ngcontent-%COMP%]{font-size:9px;line-height:9px}.workspace-disabled[_ngcontent-%COMP%]{opacity:.5}"]}),e})(),children:[]}]);var Be=i("7n/8"),et=i("STbY"),tt=i("NFeN"),it=i("QibW");let nt=(()=>{class e{}return e.\u0275mod=w.Jb({type:e}),e.\u0275inj=w.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,p.g,D.b,v.l,x.c,it.c,v.A,j.b]]}),e})(),rt=(()=>{class e{}return e.\u0275mod=w.Jb({type:e}),e.\u0275inj=w.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,Xe,x.c,Be.a,et.c,tt.b,A.b,Ae.b,nt]]}),e})()}}]);