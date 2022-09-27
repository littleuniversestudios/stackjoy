(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{iGsW:function(t,e,i){"use strict";i.r(e),i.d(e,"AppEnvironmentModule",(function(){return X}));var n=i("ofXK"),o=i("tyNb"),c=i("quSY"),s=i("HdQx"),r=i("fXoL"),d=i("3sFK"),a=i("oCqB"),b=i("0IaG");const l=[{title:"The Console",description:"Learn about the fundamental feature of Stackjoy",tag:"beginner",link:"https://www.youtube.com/watch?v=FfJTPESCZEo",youtubeId:"FfJTPESCZEo",image:"",id:"b1.1",duration:"1 min"},{title:"Run a Generator",description:"Generate the Stackjoy Documentation.",tag:"beginner",link:"https://www.youtube.com/watch?v=Sb5d_kkQ3Aw",youtubeId:"FfJTPESCZEo",image:"",id:"b1.2",duration:"1 min"}];var u=i("jhN1"),v=i("bTqV");let p=(()=>{class t{constructor(t,e,i){this._sanitizer=t,this.data=e,this.dialogRef=i}ngOnInit(){var t;this.videoId=null!==(t=this.data.video.youtubeId)&&void 0!==t?t:"Sb5d_kkQ3Aw",this.safeURL=this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.videoId)}ngOnDestroy(){}close(){this.dialogRef.close({video:this.data.video})}onReady(t){}onStateChange(t){}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(u.b),r.Lb(b.a),r.Lb(b.h))},t.\u0275cmp=r.Fb({type:t,selectors:[["tutorial-video-dialog"]],decls:11,vars:3,consts:[["mat-dialog-content",""],[1,"video-container"],["frameborder","0","allowfullscreen","",1,"video-iframe",3,"src"],["mat-dialog-actions",""],[1,""],[1,"text-tiny","text-muted"],["mat-button","",1,"ml-auto",3,"click"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Mb(2,"iframe",2),r.Qb(),r.Qb(),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Rb(5,"div",4),r.Fc(6),r.Qb(),r.Rb(7,"div",5),r.Fc(8),r.Qb(),r.Qb(),r.Rb(9,"button",6),r.Zb("click",(function(){return e.close()})),r.Fc(10,"Close"),r.Qb(),r.Qb()),2&t&&(r.Ab(2),r.jc("src",e.safeURL,r.tc),r.Ab(4),r.Gc(e.data.video.title),r.Ab(2),r.Gc(e.data.video.description))},directives:[b.f,b.c,v.b],styles:[".video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.25%}.video-iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"]}),t})(),m=(()=>{class t{constructor(t){this.dialog=t,this.videoList=l}isFirstVideo(t){return 0===this.videoList.findIndex(e=>e.id===t)}isLastVideo(t){return this.videoList.findIndex(e=>e.id===t)===this.videoList.length-1}getVideo(t){return this.videoList.find(e=>e.id===t)}getVideoIndex(t){return this.videoList.findIndex(e=>e.id===t)}getNextVideo(t){return this.videoList[this.getVideoIndex(t)+1]}getPreviousVideo(t){return this.videoList[this.getVideoIndex(t)-1]}getNext(){return this.videoList[0]}openVideoDialog(t){return this.dialog.open(p,{data:{video:t},width:"800px",position:{top:"100px"},autoFocus:!0})}watchVideo(t){this.openVideoDialog(t).afterClosed().subscribe(t=>console.log("dialog result: ",t))}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(b.b))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=i("xm+p");function g(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div"),r.Rb(1,"div",2),r.Zb("click",(function(){return r.rc(t),r.dc().watchTutorial()})),r.Rb(2,"div",3),r.Rb(3,"div",4),r.Rb(4,"div",5),r.Mb(5,"img",6),r.Rb(6,"div",7),r.Mb(7,"i",8),r.Qb(),r.Qb(),r.Qb(),r.Rb(8,"div",9),r.Rb(9,"div",4),r.Rb(10,"span",10),r.Fc(11),r.Qb(),r.Rb(12,"span",11),r.Fc(13),r.Qb(),r.Qb(),r.Rb(14,"div",12),r.Fc(15),r.Qb(),r.Qb(),r.Rb(16,"div",13),r.Mb(17,"i",14),r.Qb(),r.Qb(),r.Qb(),r.Rb(18,"div",15),r.Rb(19,"div",16),r.Zb("click",(function(){return r.rc(t),r.dc().getPreviousVideo()})),r.Mb(20,"i",17),r.Fc(21," Previous"),r.Qb(),r.Rb(22,"div",18),r.Zb("click",(function(){return r.rc(t),r.dc().goToDocumentation()})),r.Fc(23," See All"),r.Qb(),r.Rb(24,"div",16),r.Zb("click",(function(){return r.rc(t),r.dc().getNextVideo()})),r.Fc(25," Next "),r.Mb(26,"i",19),r.Qb(),r.Qb(),r.Qb()}if(2&t){const t=r.dc();r.Ab(11),r.Ic(" ",t.currentVideoIndex,". ",t.currentVideo.title,""),r.Ab(2),r.Hc(" (",t.currentVideo.duration,")"),r.Ab(2),r.Gc(t.currentVideo.description),r.Ab(4),r.Db("disabled-item",t.videoTutorialsService.isFirstVideo(t.currentVideo.id)),r.Ab(5),r.Db("disabled-item",t.videoTutorialsService.isLastVideo(t.currentVideo.id))}}let h=(()=>{class t{constructor(t,e){this.videoTutorialsService=t,this.navigationService=e}ngOnInit(){this.setCurrentVideo(this.videoTutorialsService.getNext())}ngOnDestroy(){}watchTutorial(){this.videoTutorialsService.watchVideo(this.currentVideo)}setCurrentVideo(t){this.currentVideo=t,this.currentVideoIndex=this.videoTutorialsService.getVideoIndex(this.currentVideo.id)+1}getNextVideo(){this.videoTutorialsService.isLastVideo(this.currentVideo.id)||this.setCurrentVideo(this.videoTutorialsService.getNextVideo(this.currentVideo.id))}getPreviousVideo(){this.videoTutorialsService.isFirstVideo(this.currentVideo.id)||this.setCurrentVideo(this.videoTutorialsService.getPreviousVideo(this.currentVideo.id))}goToDocumentation(){this.navigationService.navigateTo(["documentation"])}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(m),r.Lb(f.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["video-tutorials"]],decls:2,vars:1,consts:[[1,"pt-2"],[4,"ngIf"],[1,"shadow","p-2","border","rounded","cursor-pointer",3,"click"],[1,"d-flex","align-items-start"],[1,""],[1,"video-image"],["src","assets/images/tutorial-video-image.jpg","alt","Tutorial Video"],[1,"play-icon"],[1,"fa","fa-play-circle","fa-2x"],[1,"flex-grow-1","pl-3"],[1,"text-bold"],[1,"text-tiny","text-muted","text-center","ml-1"],[1,"text-small","text-muted"],[1,"px-2",2,"align-self","center"],[1,"fas","fa-play-circle","fa-2x"],[1,"d-flex","align-items-center","pt-2","px-3","text-muted","text-tiny"],[1,"cursor-pointer",3,"click"],[1,"fa","fa-arrow-left"],[1,"flex-grow-1","text-center","cursor-pointer",3,"click"],[1,"fa","fa-arrow-right"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Dc(1,g,27,8,"div",1),r.Qb()),2&t&&(r.Ab(1),r.jc("ngIf",e.currentVideo))},directives:[n.t],styles:[".video-image[_ngcontent-%COMP%]{position:relative;cursor:pointer}.video-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;width:100px;height:auto;z-index:0}.video-image[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:22px;opacity:.8;color:#fff;z-index:2}"]}),t})();var R=i("a8/g"),Q=i("48o/"),k=i("bv9b");function y(t,e){1&t&&(r.Rb(0,"div",5),r.Fc(1,"No public stacks available."),r.Qb())}function x(t,e){if(1&t&&(r.Rb(0,"p",18),r.Fc(1),r.Qb()),2&t){const t=r.dc(2).$implicit,e=r.dc(2);r.Ab(1),r.Hc("Last Updated: ",e.formatDate(t.lastUpdated),"")}}function S(t,e){if(1&t){const t=r.Sb();r.Rb(0,"p",21),r.Zb("click",(function(){r.rc(t);const e=r.dc(2).$implicit;return r.dc(2).starStack(e)})),r.Mb(1,"i",22),r.Fc(2),r.Qb()}if(2&t){const t=r.dc(2).$implicit;r.Ab(2),r.Hc(" ",null==t.metadata?null:t.metadata.stars,"")}}function w(t,e){if(1&t&&(r.Rb(0,"p",18),r.Fc(1),r.Qb()),2&t){const t=r.dc(2).$implicit,e=r.dc(2);r.Ab(1),r.Hc("Installs: ",e.formatInstallCount(t.metadata.installCount),"")}}function I(t,e){if(1&t&&(r.Rb(0,"div",16),r.Rb(1,"div",17),r.Rb(2,"p",18),r.Fc(3),r.Qb(),r.Dc(4,x,2,1,"p",19),r.Dc(5,S,3,1,"p",20),r.Dc(6,w,2,1,"p",19),r.Qb(),r.Qb()),2&t){const t=r.dc().$implicit;r.Ab(3),r.Gc(t.description||"No description"),r.Ab(1),r.jc("ngIf",t.lastUpdated),r.Ab(1),r.jc("ngIf",(null==t.metadata?null:t.metadata.stars)>=0),r.Ab(1),r.jc("ngIf",(null==t.metadata?null:t.metadata.installCount)>=0)}}function F(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",6),r.Rb(1,"div",7),r.Rb(2,"div",8),r.Rb(3,"div",9),r.Mb(4,"sj-logo"),r.Qb(),r.Rb(5,"div",9),r.Fc(6),r.Qb(),r.Rb(7,"div",10),r.Rb(8,"button",11),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(2).installStack(i)})),r.Fc(9,"Install"),r.Qb(),r.Qb(),r.Rb(10,"div",12),r.Rb(11,"button",13),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(2).toggleItemList(i)})),r.Mb(12,"i",14),r.Qb(),r.Qb(),r.Qb(),r.Dc(13,I,7,4,"div",15),r.Qb(),r.Qb()}if(2&t){const t=e.$implicit,i=r.dc(2);r.Ab(6),r.Ic("",t.displayName," [v",t.version,"]"),r.Ab(6),r.Db("fa-chevron-up",i.isItemOpen(t))("fa-chevron-down",!i.isItemOpen(t)),r.Ab(1),r.jc("ngIf",i.isItemOpen(t))}}function C(t,e){if(1&t&&(r.Pb(0),r.Dc(1,y,2,0,"div",2),r.Rb(2,"div",3),r.Dc(3,F,14,7,"div",4),r.Qb(),r.Ob()),2&t){const t=r.dc();r.Ab(1),r.jc("ngIf",0===t.stacks.length),r.Ab(2),r.jc("ngForOf",t.stacks)}}function V(t,e){1&t&&(r.Rb(0,"div",17),r.Mb(1,"mat-progress-bar",23),r.Qb())}let A=(()=>{class t{constructor(t,e){this.stackService=t,this.appConsoleService=e,this.itemList={},this.subs=new c.a}ngOnInit(){this.subs.add(this.stackService.getPublicStacks().subscribe(t=>{this.stacks=t.filter(t=>"test"!==t.displayName).slice(0,3)},t=>this.stacks=[]))}ngOnDestroy(){this.subs.unsubscribe()}installStack(t){this.appConsoleService.openBluConsole({command:"install "+t.displayName,extraInfo:{stack:t,source:"remote"}})}toggleItemList(t){const e=t.eid;this.itemList[e]=!this.itemList[e]}isItemOpen(t){return this.itemList[t.eid]}formatDate(t){return new Date(t).toLocaleDateString()}formatInstallCount(t){return t<1e3?"<1k":t<1e5?t-t%1e3:t<1e6?t-t%1e4:void 0}starStack(t){this.stackService.starStack(t.eid).subscribe(e=>{t.metadata=e},console.error)}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(a.a),r.Lb(R.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["suggested-stacks"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],["class","text-small text-muted p-2",4,"ngIf"],[1,""],["class","py-2 align-top","style","width: 100%;",4,"ngFor","ngForOf"],[1,"text-small","text-muted","p-2"],[1,"py-2","align-top",2,"width","100%"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center"],[1,"pl-2"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],[1,"fa"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"p-2"],[1,"my-2"],["class","my-2",4,"ngIf"],["class","my-2",3,"click",4,"ngIf"],[1,"my-2",3,"click"],[1,"fa","fa-star"],["mode","indeterminate"]],template:function(t,e){if(1&t&&(r.Dc(0,C,4,2,"ng-container",0),r.Dc(1,V,2,0,"ng-template",null,1,r.Ec)),2&t){const t=r.oc(2);r.jc("ngIf",e.stacks)("ngIfElse",t)}},directives:[n.t,n.s,Q.a,v.b,k.a],styles:[""]}),t})(),O=(()=>{class t{constructor(){this.subs=new c.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["environment-home"]],decls:12,vars:0,consts:[[1,"p-3"],[1,"d-flex","align-items-start"],[1,"quick-tutorials","pr-4"],[1,"text-normal","pb-2"],[1,""],[1,"suggested-stacks","pl-4"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Fc(4,"Quick Tutorials"),r.Qb(),r.Rb(5,"div",4),r.Mb(6,"video-tutorials"),r.Qb(),r.Qb(),r.Rb(7,"div",5),r.Rb(8,"div",3),r.Fc(9,"Suggested Stacks"),r.Qb(),r.Rb(10,"div",4),r.Mb(11,"suggested-stacks"),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[h,A],styles:[".alert-list-icon[_ngcontent-%COMP%]{width:30px;text-align:center}.suggested-stack[_ngcontent-%COMP%]{background-color:#e2e3e5;border:1px solid #d3d6d8;border-radius:8px;width:200px}.suggested-stack[_ngcontent-%COMP%]   .stack-install[_ngcontent-%COMP%]{border-left:1px solid #666;background-color:#fff;text-align:center}.quick-tutorials[_ngcontent-%COMP%]{width:600px}.suggested-stacks[_ngcontent-%COMP%]{width:450px}"]}),t})();var D=i("Bqyq"),L=i("3Pt+");function M(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"div",4),r.Fc(2),r.Rb(3,"button",5),r.Zb("click",(function(){return r.rc(t),r.dc(2).editSeed=!0})),r.Fc(4,"Edit"),r.Qb(),r.Rb(5,"button",5),r.Zb("click",(function(){r.rc(t);const e=r.dc(2);return e.test(e.environment.seed)})),r.Fc(6,"test"),r.Qb(),r.Qb(),r.Ob()}if(2&t){const t=r.dc(2);r.Ab(2),r.Hc("",t.environment.seed?t.environment.seed:"none"," ")}}function P(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"div",7),r.Rb(2,"div",8),r.Rb(3,"input",9),r.Zb("ngModelChange",(function(e){return r.rc(t),r.dc(2).environment.seed=e})),r.Qb(),r.Qb(),r.Rb(4,"button",10),r.Zb("click",(function(){return r.rc(t),r.dc(2).editSeed=!1})),r.Fc(5,"Cancel"),r.Qb(),r.Rb(6,"button",11),r.Zb("click",(function(){return r.rc(t),r.dc(2).updateSeed()})),r.Fc(7,"Save"),r.Qb(),r.Qb(),r.Ob()}if(2&t){const t=r.dc(2);r.Ab(3),r.jc("ngModel",t.environment.seed),r.Ab(3),r.jc("disabled",!t.environment.seed)}}function j(t,e){if(1&t&&(r.Rb(0,"tr"),r.Rb(1,"td"),r.Rb(2,"div",4),r.Fc(3,"Seed:"),r.Qb(),r.Qb(),r.Rb(4,"td"),r.Dc(5,M,7,1,"ng-container",6),r.Dc(6,P,8,2,"ng-container",6),r.Qb(),r.Qb()),2&t){const t=r.dc();r.Ab(5),r.jc("ngIf",!t.editSeed),r.Ab(1),r.jc("ngIf",t.editSeed)}}let T=(()=>{class t{constructor(t,e,i){this.appEnvironmentService=t,this.stackService=e,this.dialog=i,this.subs=new c.a}ngOnInit(){this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.environment=t))}ngOnDestroy(){}isWorkspace(){var t;return(null===(t=this.environment)||void 0===t?void 0:t.type)===s.a.Environment.Type.Workspace}addNewCodebase(){this.dialog.open(D.a,{data:{rootPath:this.environment.codebasePath,title:"Set Codebase Path"},minWidth:"600px",minHeight:"210px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{t&&this.switchCodebase(t)})}switchCodebase(t){this.appEnvironmentService.switchCodebase(this.environment.id,t)}updateSeed(){this.appEnvironmentService.updateSeed(this.environment.id,this.environment.seed).subscribe(t=>null),this.editSeed=!1}test(t){this.stackService.installSeedIntoCurrentEnvironment(t).subscribe(t=>{},t=>{})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(d.a),r.Lb(a.a),r.Lb(b.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["environment-info"]],decls:23,vars:4,consts:[[1,"table"],[1,"border-top-0"],[1,"border-top-0",2,"width","150px"],[1,"text-bold"],[1,""],["mat-button","","mat-raised-button","",1,"ml-2",3,"click"],[4,"ngIf"],[1,"d-flex"],[1,"pr-4","w-100"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["mat-button","","mat-raised-button","",1,"ml-auto",3,"click"],["mat-button","","mat-raised-button","",1,"ml-2",3,"disabled","click"]],template:function(t,e){1&t&&(r.Rb(0,"table",0),r.Rb(1,"tr",1),r.Rb(2,"td",2),r.Fc(3," Name: "),r.Qb(),r.Rb(4,"td",1),r.Rb(5,"div",3),r.Fc(6),r.Qb(),r.Qb(),r.Qb(),r.Rb(7,"tr"),r.Rb(8,"td"),r.Fc(9,"Type:"),r.Qb(),r.Rb(10,"td"),r.Rb(11,"span",3),r.Fc(12),r.Qb(),r.Qb(),r.Qb(),r.Rb(13,"tr"),r.Rb(14,"td"),r.Rb(15,"div",4),r.Fc(16,"Codebase:"),r.Qb(),r.Qb(),r.Rb(17,"td"),r.Rb(18,"div",3),r.Fc(19),r.Rb(20,"button",5),r.Zb("click",(function(){return e.addNewCodebase()})),r.Fc(21,"Change"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Dc(22,j,7,2,"tr",6),r.Qb()),2&t&&(r.Ab(6),r.Hc(" ",e.environment.name,""),r.Ab(6),r.Gc(e.environment.type),r.Ab(7),r.Hc("",e.environment.codebasePath," "),r.Ab(3),r.jc("ngIf",!e.isWorkspace()))},directives:[v.b,n.t,L.c,L.q,L.t],styles:[""]}),t})(),E=(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["environment-readme"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Rb(0,"div"),r.Fc(1,"Component with module!"),r.Qb())},styles:[""]}),t})();function Z(t,e){1&t&&(r.Pb(0),r.Mb(1,"environment-home"),r.Ob())}function N(t,e){1&t&&(r.Pb(0),r.Mb(1,"environment-info"),r.Ob())}function _(t,e){1&t&&(r.Pb(0),r.Mb(1,"environment-readme"),r.Ob())}const J=o.f.forChild([{path:"",component:(()=>{class t{constructor(t,e,i){this.appEnvironmentService=t,this.stackService=e,this.dialog=i,this.subs=new c.a,this.selectedSection="home"}ngOnInit(){this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.environment=t))}selectSection(t){this.selectedSection=t}ngOnDestroy(){}isWorkspace(){var t;return(null===(t=this.environment)||void 0===t?void 0:t.type)===s.a.Environment.Type.Workspace}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(d.a),r.Lb(a.a),r.Lb(b.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-environment"]],decls:17,vars:13,consts:[[1,"text-capitalize","text-large","px-4","py-3"],[1,"fa","mt-1","mr-1"],[1,"fas","mt-1","mr-1"],[1,"px-2"],[1,"page-tabs"],[3,"click"],[1,"fa","fa-home"],[1,"fas","fa-info-circle"],[1,"pt-2"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"span"),r.Mb(2,"i",1),r.Mb(3,"i",2),r.Qb(),r.Fc(4),r.Qb(),r.Rb(5,"div",3),r.Rb(6,"div",4),r.Rb(7,"div",5),r.Zb("click",(function(){return e.selectSection("home")})),r.Mb(8,"i",6),r.Fc(9," Home"),r.Qb(),r.Rb(10,"div",5),r.Zb("click",(function(){return e.selectSection("info")})),r.Mb(11,"i",7),r.Fc(12," Info"),r.Qb(),r.Qb(),r.Rb(13,"div",8),r.Dc(14,Z,2,0,"ng-container",9),r.Dc(15,N,2,0,"ng-container",9),r.Dc(16,_,2,0,"ng-container",9),r.Qb(),r.Qb()),2&t&&(r.Ab(2),r.Db("fa-dice-d6",e.isWorkspace()),r.Ab(1),r.Db("fa-layer-group",!e.isWorkspace()),r.Ab(1),r.Ic(" Current ",null==e.environment?null:e.environment.type,": ",null==e.environment?null:e.environment.name,"\n"),r.Ab(3),r.Db("active","home"===e.selectedSection),r.Ab(3),r.Db("active","info"===e.selectedSection),r.Ab(4),r.jc("ngIf","home"===e.selectedSection),r.Ab(1),r.jc("ngIf","info"===e.selectedSection),r.Ab(1),r.jc("ngIf","readme"===e.selectedSection))},directives:[n.t,O,T,E],styles:[""]}),t})()}]);var H=i("lR5k"),$=i("Qu3c"),q=i("q2+V");let G=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,q.a,k.b,v.c]]}),t})(),W=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,b.g,v.c]]}),t})(),U=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,W]]}),t})(),z=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,$.b,k.b,G,U]]}),t})(),B=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,L.l,v.c]]}),t})(),K=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c]]}),t})(),X=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,J,v.c,L.l,H.b.forChild(),z,B,K]]}),t})()}}]);