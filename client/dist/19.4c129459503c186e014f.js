(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{d7ui:function(t,i,s){"use strict";s.r(i),s.d(i,"SuggestedGeneratorsModule",(function(){return O}));var c=s("ofXK"),n=s("tyNb"),e=s("quSY"),a=s("fXoL"),o=s("oCqB"),r=s("a8/g"),d=s("N4Rb"),l=s("3sFK"),b=s("bTqV"),u=s("48o/"),p=s("cvgN"),m=s("bv9b");function f(t,i){1&t&&(a.Rb(0,"div",7),a.Ec(1,"No public stacks available."),a.Qb())}function g(t,i){if(1&t){const t=a.Sb();a.Rb(0,"button",8),a.Zb("click",(function(){a.rc(t);const s=i.$implicit;return a.dc(2).toggleTag(s)})),a.Ec(1),a.ec(2,"titlecase"),a.Qb()}if(2&t){const t=i.$implicit,s=a.dc(2);a.jc("color",s.hiddenTags.has(t)?void 0:"primary"),a.Ab(1),a.Fc(a.fc(2,2,t))}}function h(t,i){if(1&t&&(a.Rb(0,"span",22),a.Ec(1),a.ec(2,"titlecase"),a.Qb()),2&t){const t=i.$implicit;a.Ab(1),a.Fc(a.fc(2,1,t))}}function v(t,i){if(1&t&&(a.Rb(0,"p",25),a.Ec(1),a.Qb()),2&t){const t=a.dc(3).$implicit,i=a.dc(2);a.Ab(1),a.Gc("Last Updated: ",i.formatDate(t.lastUpdated),"")}}function k(t,i){if(1&t){const t=a.Sb();a.Rb(0,"p",28),a.Zb("click",(function(){a.rc(t);const i=a.dc(3).$implicit;return a.dc(2).starStack(i)})),a.Mb(1,"i",29),a.Ec(2),a.Qb()}if(2&t){const t=a.dc(3).$implicit;a.Ab(2),a.Gc(" ",null==t.metadata?null:t.metadata.stars,"")}}function I(t,i){if(1&t&&(a.Rb(0,"p",25),a.Ec(1),a.Qb()),2&t){const t=a.dc(3).$implicit,i=a.dc(2);a.Ab(1),a.Gc("Installs: ",i.formatInstallCount(t.metadata.installCount),"")}}function S(t,i){if(1&t&&(a.Rb(0,"div",23),a.Rb(1,"div",24),a.Rb(2,"p",25),a.Ec(3),a.Qb(),a.Cc(4,v,2,1,"p",26),a.Cc(5,k,3,1,"p",27),a.Cc(6,I,2,1,"p",26),a.Qb(),a.Qb()),2&t){const t=a.dc(2).$implicit;a.Ab(3),a.Fc(t.description||"No description"),a.Ab(1),a.jc("ngIf",t.lastUpdated),a.Ab(1),a.jc("ngIf",(null==t.metadata?null:t.metadata.stars)>=0),a.Ab(1),a.jc("ngIf",(null==t.metadata?null:t.metadata.installCount)>=0)}}function y(t,i){if(1&t){const t=a.Sb();a.Rb(0,"div",11),a.Rb(1,"div",12),a.Rb(2,"div",13),a.Mb(3,"sj-logo"),a.Qb(),a.Rb(4,"div",13),a.Mb(5,"stack-name",14),a.Ec(6),a.Qb(),a.Rb(7,"div",15),a.Cc(8,h,3,3,"span",16),a.Rb(9,"button",17),a.Zb("click",(function(){a.rc(t);const i=a.dc().$implicit;return a.dc(2).installStack(i)})),a.Ec(10,"Install"),a.Qb(),a.Qb(),a.Rb(11,"div",18),a.Rb(12,"button",19),a.Zb("click",(function(){a.rc(t);const i=a.dc().$implicit;return a.dc(2).toggleItemList(i)})),a.Mb(13,"i",20),a.Qb(),a.Qb(),a.Qb(),a.Cc(14,S,7,4,"div",21),a.Qb()}if(2&t){const t=a.dc().$implicit,i=a.dc(2);a.Ab(5),a.jc("name",t.displayName)("prefix",null==t.organization?null:t.organization.prefix),a.Ab(1),a.Gc(" [v",t.version,"]"),a.Ab(2),a.jc("ngForOf",t.matchedTags),a.Ab(5),a.Db("fa-chevron-up",i.isItemOpen(t))("fa-chevron-down",!i.isItemOpen(t)),a.Ab(1),a.jc("ngIf",i.isItemOpen(t))}}function w(t,i){if(1&t&&(a.Rb(0,"div",9),a.Cc(1,y,15,9,"div",10),a.Qb()),2&t){const t=i.$implicit,s=a.dc(2);a.Ab(1),a.jc("ngIf",s.shouldShowStack(t))}}function R(t,i){if(1&t&&(a.Pb(0),a.Cc(1,f,2,0,"div",2),a.Rb(2,"div",3),a.Rb(3,"div",4),a.Cc(4,g,3,4,"button",5),a.Qb(),a.Cc(5,w,2,1,"div",6),a.Qb(),a.Ob()),2&t){const t=a.dc();a.Ab(1),a.jc("ngIf",0===t.stacks.length),a.Ab(3),a.jc("ngForOf",t.autoDetectedTags),a.Ab(1),a.jc("ngForOf",t.stacks)}}function Q(t,i){1&t&&(a.Rb(0,"div",24),a.Mb(1,"mat-progress-bar",30),a.Qb())}let C=(()=>{class t{constructor(t,i,s,c){this.stackService=t,this.appConsoleService=i,this.workspaceService=s,this.appEnvironmentService=c,this.stacks=[],this.autoDetectedTags=[],this.hiddenTags=new Set,this.itemList={},this.subs=new e.a}ngOnInit(){this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>{this.subs.add(this.workspaceService.getSuggestedStacks(t.id).subscribe(t=>{this.stacks=t.stacks,this.autoDetectedTags=t.tags,this.hiddenTags=new Set}))}))}ngOnDestroy(){this.subs.unsubscribe()}installStack(t){this.appConsoleService.openBluConsole({command:"install "+t.displayName,extraInfo:{stack:t,source:"remote"}})}toggleItemList(t){const i=t.eid;this.itemList[i]=!this.itemList[i]}isItemOpen(t){return this.itemList[t.eid]}formatDate(t){return new Date(t).toLocaleDateString()}formatInstallCount(t){return t<1e3?"<1k":t<1e5?t-t%1e3:t<1e6?t-t%1e4:void 0}starStack(t){this.stackService.starStack(t.eid).subscribe(i=>{t.metadata=i},console.error)}toggleTag(t){this.hiddenTags.has(t)?this.hiddenTags.delete(t):this.hiddenTags.add(t)}shouldShowStack(t){return t.matchedTags.filter(t=>!this.hiddenTags.has(t)).length>0}}return t.\u0275fac=function(i){return new(i||t)(a.Lb(o.a),a.Lb(r.a),a.Lb(d.a),a.Lb(l.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["suggested-stacks"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],["class","text-small text-muted p-2",4,"ngIf"],[1,""],[1,"py-2","align-top"],["mat-button","","mat-raised-button","","class","mr-2",3,"color","click",4,"ngFor","ngForOf"],["class","py-2 align-top","style","width: 100%;",4,"ngFor","ngForOf"],[1,"text-small","text-muted","p-2"],["mat-button","","mat-raised-button","",1,"mr-2",3,"color","click"],[1,"py-2","align-top",2,"width","100%"],["class","shadow p-2 border rounded",4,"ngIf"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center"],[1,"pl-2"],[3,"name","prefix"],[1,"ml-auto"],["class","text-tiny opacity-75 ml-2",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],[1,"fa"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"text-tiny","opacity-75","ml-2"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"p-2"],[1,"my-2"],["class","my-2",4,"ngIf"],["class","my-2",3,"click",4,"ngIf"],[1,"my-2",3,"click"],[1,"fa","fa-star"],["mode","indeterminate"]],template:function(t,i){if(1&t&&(a.Cc(0,R,6,3,"ng-container",0),a.Cc(1,Q,2,0,"ng-template",null,1,a.Dc)),2&t){const t=a.oc(2);a.jc("ngIf",i.stacks)("ngIfElse",t)}},directives:[c.t,c.s,b.b,u.a,p.a,m.a],pipes:[c.F],styles:[""]}),t})();const A=n.f.forChild([{path:"",component:(()=>{class t{constructor(){this.subs=new e.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["suggested-generators"]],decls:3,vars:0,consts:[[2,"padding","20px 10px"],[1,"",2,"max-width","600px"]],template:function(t,i){1&t&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Mb(2,"suggested-stacks"),a.Qb(),a.Qb())},directives:[C],styles:[""]}),t})(),children:[]}]);var x=s("q2+V"),F=s("bKa3");let j=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},providers:[],imports:[[c.c,x.a,m.b,b.c,F.a]]}),t})(),O=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},providers:[],imports:[[c.c,A,j]]}),t})()}}]);