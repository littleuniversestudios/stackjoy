(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"sQa+":function(t,n,i){"use strict";i.r(n),i.d(n,"StackjoyModule",(function(){return R}));var e=i("ofXK"),c=i("tyNb"),s=i("quSY"),o=i("fXoL"),b=i("oCqB"),a=i("3sFK"),r=i("k1Ex"),l=i("a8/g");let d=(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["sj-logo"]],decls:9,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 51.72 59.29",2,"width","1.2rem"],["id","f1bb2710-77d4-487b-b3d6-66a264c303f0","data-name","Layer 2"],["id","bcd33a99-29c3-45c2-9a67-7af26df60dc6","data-name","Layer 1"],["d","M43.51,33.15,23.6,47.59a3.73,3.73,0,0,1-4.08,0L.84,34a1.72,1.72,0,0,1,0-3L8.11,25.8s7.36,5.43,9.69,7c.77.53,3.47-.4,4.19-.66a3.51,3.51,0,0,0,2.19-.61l10.61-7.7.08.06,8.64,6.26A1.72,1.72,0,0,1,43.51,33.15Z",2,"fill","#b3b4b3"],["d","M42.63,45.51,24,58.65a4.06,4.06,0,0,1-4.37,0L.9,45.51a1.77,1.77,0,0,1,0-3.08L4.43,40,19.58,50.62a4.06,4.06,0,0,0,4.37,0L39.11,40l3.52,2.48A1.77,1.77,0,0,1,42.63,45.51Z",2,"fill","#b3b4b3"],["d","M45.59,41.25l-4-2.72,5.67-4.83,4,2.59c.79.47.68,1.89-.41,2.74l-2.21,1.83A2.6,2.6,0,0,1,45.59,41.25Z",2,"fill","#b3b4b3"],["d","M44.09,17.13,36.83,22.4s-7.12-5.31-10.44-7.58c-1.09-.74-3.52,1-3.72,1.2a3.56,3.56,0,0,1,2.15.61l10,7.24-10.61,7.7a3.51,3.51,0,0,1-2.19.61,3.41,3.41,0,0,1-1.86-.61l-10-7.23h0L10,24.2,1.43,18a1.72,1.72,0,0,1,0-2.95L21.34.61a3.71,3.71,0,0,1,4.07,0L44.09,14.17A1.72,1.72,0,0,1,44.09,17.13Z",2,"fill","#b3b4b3"]],template:function(t,n){1&t&&(o.dc(),o.Sb(0,"svg",0),o.Sb(1,"title"),o.Ec(2,"sj-logo-icon-v1"),o.Rb(),o.Sb(3,"g",1),o.Sb(4,"g",2),o.Nb(5,"path",3),o.Nb(6,"path",4),o.Nb(7,"path",5),o.Nb(8,"path",6),o.Rb(),o.Rb(),o.Rb())},styles:[""]}),t})();var p=i("bTqV"),u=i("bv9b");function m(t,n){if(1&t){const t=o.Tb();o.Sb(0,"div",15),o.Sb(1,"div",1),o.Sb(2,"p",16),o.Ec(3),o.Rb(),o.Rb(),o.Sb(4,"div",17),o.Sb(5,"button",18),o.ac("click",(function(){o.sc(t);const n=o.ec().$implicit;return o.ec(2).installStack(n)})),o.Ec(6,"Install Into Current "),o.Sb(7,"span",2),o.Ec(8),o.Rb(),o.Rb(),o.Sb(9,"button",18),o.ac("click",(function(){o.sc(t);const n=o.ec().$implicit;return o.ec(2).installIntoNewWorkspace(n)})),o.Ec(10,"Install Into New Workspace"),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.ec().$implicit,n=o.ec(2);o.Bb(3),o.Fc(t.description||"No description"),o.Bb(5),o.Fc(n.currentEnvironment.type)}}function f(t,n){if(1&t){const t=o.Tb();o.Sb(0,"div",6),o.Sb(1,"div",7),o.Sb(2,"div",8),o.Sb(3,"div",0),o.Nb(4,"sj-logo"),o.Rb(),o.Sb(5,"div",0),o.Ec(6),o.Rb(),o.Sb(7,"div",9),o.Sb(8,"button",10),o.ac("click",(function(){o.sc(t);const i=n.$implicit;return o.ec(2).installStack(i)})),o.Ec(9,"Install"),o.Rb(),o.Rb(),o.Sb(10,"div",11),o.Sb(11,"button",12),o.ac("click",(function(){o.sc(t);const i=n.$implicit;return o.ec(2).toggleItemList(i)})),o.Nb(12,"i",13),o.Rb(),o.Rb(),o.Rb(),o.Cc(13,m,11,2,"div",14),o.Rb(),o.Rb()}if(2&t){const t=n.$implicit,i=o.ec(2);o.Bb(6),o.Fc(t.name),o.Bb(6),o.Eb("fa-chevron-up",i.isItemOpen(t))("fa-chevron-down",!i.isItemOpen(t)),o.Bb(1),o.kc("ngIf",i.isItemOpen(t))}}function v(t,n){if(1&t&&(o.Qb(0),o.Cc(1,f,14,6,"div",5),o.Pb()),2&t){const t=o.ec();o.Bb(1),o.kc("ngForOf",t.stacks)}}function g(t,n){1&t&&(o.Sb(0,"div",1),o.Nb(1,"mat-progress-bar",19),o.Rb())}const S=c.f.forChild([{path:"",component:(()=>{class t{constructor(t,n,i,e){this.stackService=t,this.appEnvironmentService=n,this.myItemsService=i,this.appStateService=e,this.itemList={},this.subs=new s.a}ngOnInit(){this.subs.add(this.stackService.getPublicStacks().subscribe(t=>this.stacks=t)),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.currentEnvironment=t))}ngOnDestroy(){this.subs.unsubscribe()}installStack(t){this.appStateService.openBluConsole({command:"install "+t.name,extraInfo:{stack:t,source:"remote"}})}toggleItemList(t){var n,i;const e=null!==(n=t.id)&&void 0!==n?n:null===(i=t.remote)||void 0===i?void 0:i.id;this.itemList[e]=!this.itemList[e]}isItemOpen(t){var n,i;return this.itemList[null!==(n=t.id)&&void 0!==n?n:null===(i=t.remote)||void 0===i?void 0:i.id]}installIntoNewWorkspace(t){this.myItemsService.createNewWorkspace(t)}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(b.a),o.Mb(a.a),o.Mb(r.a),o.Mb(l.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["stackjoy"]],decls:7,vars:2,consts:[[1,"pl-2"],[1,"p-2"],[1,"text-capitalize"],[4,"ngIf","ngIfElse"],["loading",""],["class","p-2 d-inline-block align-top","style","min-width: 600px;",4,"ngFor","ngForOf"],[1,"p-2","d-inline-block","align-top",2,"min-width","600px"],[1,"shadow","p-2","border","rounded"],[1,"d-flex","align-items-center"],[1,"ml-auto"],["mat-button","",3,"click"],[1,"ml-1"],["mat-button","","mat-icon-button","",3,"click"],[1,"fa"],["class","border-top p-2 d-flex align-items-start",4,"ngIf"],[1,"border-top","p-2","d-flex","align-items-start"],[1,"my-2"],[1,"ml-auto","p-2","border-left"],["mat-button","",1,"d-block",3,"click"],["mode","indeterminate"]],template:function(t,n){if(1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"h2",2),o.Ec(3,"Public Stacks"),o.Rb(),o.Rb(),o.Cc(4,v,2,1,"ng-container",3),o.Cc(5,g,2,0,"ng-template",null,4,o.Dc),o.Rb()),2&t){const t=o.pc(6);o.Bb(4),o.kc("ngIf",n.stacks)("ngIfElse",t)}},directives:[e.t,e.s,d,p.b,u.a],styles:[".form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:80%}.form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#d24747;padding-bottom:15px}.stackTable[_ngcontent-%COMP%]{width:100%;margin:10px 0}"]}),t})()}]);var h=i("3Pt+"),k=i("qFsG"),w=i("+0xr");let I=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[e.c]]}),t})(),R=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[e.c,S,p.c,h.l,k.b,w.k,u.b,I]]}),t})()}}]);