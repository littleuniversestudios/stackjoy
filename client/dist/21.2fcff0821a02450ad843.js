(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3BI3":function(e,t,n){"use strict";n.r(t),n.d(t,"WorkspaceGeneratorsModule",(function(){return O}));var o=n("ofXK"),c=n("tyNb"),i=n("quSY"),r=n("fXoL"),b=n("JzR7"),l=n("xm+p"),a=n("vof4"),s=n("AZ65"),u=n("bTqV"),g=n("STbY"),d=n("48o/"),m=n("NFeN");function p(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",19),r.Rb(1,"div",20),r.Ec(2,"You don't have any generators in this workspace. You can:"),r.Qb(),r.Rb(3,"div",21),r.Rb(4,"button",9),r.Zb("click",(function(){return r.rc(e),r.dc().generatorService.createGenerator()})),r.Mb(5,"i",10),r.Ec(6," Create A New Generator"),r.Qb(),r.Qb(),r.Rb(7,"div",20),r.Ec(8,"or"),r.Qb(),r.Rb(9,"div",3),r.Rb(10,"button",9),r.Zb("click",(function(){return r.rc(e),r.dc().goToCommunity()})),r.Mb(11,"sj-logo"),r.Ec(12," Get Generators From The Community "),r.Qb(),r.Qb(),r.Qb()}}function f(e,t){if(1&e&&(r.Rb(0,"span",32),r.Ec(1),r.Qb()),2&e){const e=r.dc().$implicit;r.Ab(1),r.Gc("(",null==e.items?null:e.items.length,")")}}const v=function(e){return{item:e}};function x(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",35),r.Rb(1,"div",36),r.Zb("click",(function(){r.rc(e);const n=t.$implicit;return r.dc(4).generatorService.editGenerator(n)})),r.Mb(2,"i",37),r.Qb(),r.Rb(3,"div",38),r.Zb("click",(function(){r.rc(e);const n=t.$implicit;return r.dc(4).generatorService.editGenerator(n)})),r.Rb(4,"div",3),r.Ec(5),r.Qb(),r.Rb(6,"div",39),r.Ec(7),r.Qb(),r.Qb(),r.Rb(8,"div",40),r.Rb(9,"mat-icon",29),r.Ec(10,"more_vert"),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=t.$implicit;r.dc(4);const n=r.oc(21);r.Ab(5),r.Fc(e.name),r.Ab(2),r.Fc(e.description),r.Ab(1),r.jc("matMenuTriggerFor",n)("matMenuTriggerData",r.lc(5,v,e)),r.Ab(1),r.jc("inline",!0)}}function R(e,t){if(1&e&&(r.Pb(0),r.Rb(1,"div",33),r.Cc(2,x,11,7,"div",34),r.Qb(),r.Ob()),2&e){const e=r.dc().$implicit;r.Ab(2),r.jc("ngForOf",e.items)}}const Q=function(e){return{collection:e}};function h(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",3),r.Rb(1,"div",23),r.Rb(2,"div",24),r.Mb(3,"i",25),r.Qb(),r.Rb(4,"div",26),r.Zb("click",(function(){r.rc(e);const n=t.$implicit;return r.dc(2).toggleGroup(n)})),r.Ec(5),r.Cc(6,f,2,1,"span",27),r.Qb(),r.Rb(7,"div",28),r.Rb(8,"mat-icon",29),r.Ec(9,"more_vert"),r.Qb(),r.Qb(),r.Rb(10,"div",30),r.Zb("click",(function(){r.rc(e);const n=t.$implicit;return r.dc(2).toggleGroup(n)})),r.Mb(11,"i",31),r.Qb(),r.Qb(),r.Cc(12,R,3,1,"ng-container",13),r.Qb()}if(2&e){const e=t.$implicit,n=r.dc(2),o=r.oc(24);r.Ab(5),r.Gc(" ",e.collection.name," "),r.Ab(1),r.jc("ngIf",!n.groupState[e.collection.id]),r.Ab(1),r.jc("matMenuTriggerFor",o)("matMenuTriggerData",r.lc(10,Q,e.collection)),r.Ab(1),r.jc("inline",!0),r.Ab(3),r.Db("fa-chevron-down",!n.groupState[e.collection.id])("fa-chevron-up",n.groupState[e.collection.id]),r.Ab(1),r.jc("ngIf",n.groupState[e.collection.id])}}function C(e,t){if(1&e&&(r.Rb(0,"div",3),r.Rb(1,"div",23),r.Rb(2,"div",24),r.Mb(3,"i",25),r.Qb(),r.Rb(4,"div",41),r.Ec(5),r.Rb(6,"span",42),r.Ec(7,"(empty)"),r.Qb(),r.Qb(),r.Rb(8,"div",28),r.Rb(9,"mat-icon",29),r.Ec(10,"more_vert"),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e){const e=t.$implicit;r.dc(2);const n=r.oc(24);r.Ab(5),r.Gc(" ",e.item.name," "),r.Ab(3),r.jc("matMenuTriggerFor",n)("matMenuTriggerData",r.lc(4,Q,e.item)),r.Ab(1),r.jc("inline",!0)}}function M(e,t){if(1&e&&(r.Pb(0),r.Cc(1,h,13,12,"div",22),r.Cc(2,C,11,6,"div",22),r.Ob()),2&e){const e=r.dc();r.Ab(1),r.jc("ngForOf",e.generatorGroups),r.Ab(1),r.jc("ngForOf",e.emptyCollections)}}function k(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",43),r.Rb(1,"span",4),r.Ec(2),r.Qb(),r.Qb(),r.Rb(3,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.item;return r.dc().generatorService.renameGenerator(n)})),r.Ec(4,"Rename Generator"),r.Qb(),r.Rb(5,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.item;return r.dc().generatorService.duplicateGenerator(n)})),r.Ec(6,"Duplicate Generator"),r.Qb(),r.Rb(7,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.item;return r.dc().generatorService.copyGenerator(n)})),r.Ec(8,"Copy Generator To ..."),r.Qb(),r.Rb(9,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.item;return r.dc().generatorService.deleteGenerator(n)})),r.Ec(10,"Delete Generator"),r.Qb()}if(2&e){const e=t.item;r.Ab(2),r.Hc("",e.parent.name,".",e.name,"")}}function S(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",45),r.Ec(1,"Collection: "),r.Rb(2,"span",4),r.Ec(3),r.Qb(),r.Qb(),r.Rb(4,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.collection;return r.dc().collectionService.createGenerator(n)})),r.Rb(5,"span"),r.Ec(6,"Create New Generator"),r.Qb(),r.Qb(),r.Rb(7,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.collection;return r.dc().collectionService.renameCollection(n)})),r.Rb(8,"span"),r.Ec(9,"Rename Collection"),r.Qb(),r.Qb(),r.Rb(10,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.collection;return r.dc().collectionService.addToStack(n)})),r.Rb(11,"span"),r.Ec(12,"Add Collection To Stack"),r.Qb(),r.Qb(),r.Rb(13,"button",44),r.Zb("click",(function(){r.rc(e);const n=t.collection;return r.dc().collectionService.deleteCollection(n)})),r.Rb(14,"span"),r.Ec(15,"Delete Collection"),r.Qb(),r.Qb()}if(2&e){const e=t.collection;r.Ab(3),r.Fc(e.name)}}const G=c.f.forChild([{path:"",component:(()=>{class e{constructor(e,t,n,o){this.bluService=e,this.navigationService=t,this.collectionService=n,this.generatorService=o,this.groupState={},this.subs=new i.a}ngOnInit(){this.bluService.refreshItems(),this.subs.add(this.bluService.blueprints$.subscribe(e=>{this.generatorGroups=this.generatorService.groupGenerators(e.items),this.emptyCollections=e.collections.filter(e=>0===e.children.length),console.log("==>",this.emptyCollections),this.generatorGroups.forEach(e=>this.groupState[e.collection.id]=!0)}))}ngOnDestroy(){this.subs.unsubscribe()}toggleGroup(e){this.groupState[e.collection.id]=!this.groupState[e.collection.id]}goToCommunity(){this.navigationService.navigateTo(["community"])}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(b.a),r.Lb(l.a),r.Lb(a.a),r.Lb(s.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["workspace-generators"]],decls:26,vars:4,consts:[[1,"pb-2"],[1,"pb-2",2,"border-bottom","1px solid #F1F1F1"],[1,"d-flex",2,"max-width","800px"],[1,""],[1,"text-bold"],[1,"description","text-muted","text-small","as-link-hover",3,"routerLink"],[1,"fa","fa-info-circle","text-tiny","text-muted"],[1,"ml-auto","align-self-end"],[1,"d-flex","align-items-center"],["mat-button","",3,"click"],[1,"fa","fa-plus","text-small","text-muted"],[1,"generators"],["style","max-width: 500px; padding: 50px;","class","text-center",4,"ngIf"],[4,"ngIf"],["yPosition","below"],["itemMenu","matMenu"],["matMenuContent",""],[3,"overlapTrigger"],["collectionMenu","matMenu"],[1,"text-center",2,"max-width","500px","padding","50px"],[1,"text-muted"],[1,"pt-3"],["class","",4,"ngFor","ngForOf"],[1,"collection-item","d-flex","align-items-center","generator-group"],[1,"pr-1"],[1,"fa","fa-folder","text-small",2,"color","#b3b4b3"],[1,"flex-grow-1","flex-shrink-1","cursor-pointer","text-bold",3,"click"],["class","text-small",4,"ngIf"],[1,"ml-auto","flex-shrink-0","text-normal","collection-menu","pr-3","align-self-center",3,"matMenuTriggerFor","matMenuTriggerData"],[1,"item-menu",3,"inline"],[1,"flex-shrink-0","collection-menu","cursor-pointer",3,"click"],[1,"fa","text-muted","pr-2"],[1,"text-small"],[1,"generator-list"],["class","generator-item d-flex align-items-start",4,"ngFor","ngForOf"],[1,"generator-item","d-flex","align-items-start"],[1,"flex-shrink-0","px-2",3,"click"],[1,"far","fa-file","text-muted"],[1,"flex-grow-1","flex-shrink-1","pl-1","ellipsis",3,"click"],[1,"text-small","text-muted","pt-1"],[1,"flex-shrink-0","text-normal","generator-item-menu","pr-2","align-self-center",3,"matMenuTriggerFor","matMenuTriggerData"],[1,"flex-grow-1","flex-shrink-1","cursor-pointer","text-bold"],[1,"text-small","text-muted"],[1,"p-2","text-center","border-bottom","px-4"],["mat-menu-item","",3,"click"],[1,"p-2","text-center","border-bottom"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Ec(5,"Workspace Generators"),r.Qb(),r.Rb(6,"div",5),r.Ec(7,"List of generators that create code for your project "),r.Mb(8,"i",6),r.Qb(),r.Qb(),r.Rb(9,"div",7),r.Rb(10,"div",8),r.Rb(11,"button",9),r.Zb("click",(function(){return t.generatorService.createGenerator()})),r.Mb(12,"i",10),r.Ec(13," New Generator"),r.Qb(),r.Rb(14,"button",9),r.Zb("click",(function(){return t.collectionService.createCollection()})),r.Mb(15,"i",10),r.Ec(16," New Collection"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(17,"div",11),r.Cc(18,p,13,0,"div",12),r.Cc(19,M,3,2,"ng-container",13),r.Qb(),r.Rb(20,"mat-menu",14,15),r.Cc(22,k,11,2,"ng-template",16),r.Qb(),r.Rb(23,"mat-menu",17,18),r.Cc(25,S,16,1,"ng-template",16),r.Qb()),2&e&&(r.Ab(6),r.jc("routerLink","/documentation/generator/introduction"),r.Ab(12),r.jc("ngIf",0===t.generatorGroups.length),r.Ab(1),r.jc("ngIf",t.generatorGroups.length>0),r.Ab(4),r.jc("overlapTrigger",!0))},directives:[c.d,u.b,o.t,g.e,g.a,d.a,o.s,g.d,m.a,g.b],styles:["[_nghost-%COMP%]{display:flex;flex:1;flex-direction:column}.generators[_ngcontent-%COMP%]{width:600px}.generators[_ngcontent-%COMP%]   .generator-group[_ngcontent-%COMP%]{padding:6px;border-radius:.25rem}.generators[_ngcontent-%COMP%]   .generator-group[_ngcontent-%COMP%]   .collection-menu[_ngcontent-%COMP%]{visibility:hidden;cursor:pointer}.generators[_ngcontent-%COMP%]   .generator-group[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.generators[_ngcontent-%COMP%]   .generator-group[_ngcontent-%COMP%]:hover   .collection-menu[_ngcontent-%COMP%]{visibility:visible}.generator-list[_ngcontent-%COMP%]{padding-left:12px}.generator-item[_ngcontent-%COMP%]{padding:4px;border-radius:.25rem;margin:2px 0;cursor:pointer}.generator-item[_ngcontent-%COMP%]   .item-menu[_ngcontent-%COMP%]{visibility:hidden;padding:0 10px 0 20px}.generator-item[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.generator-item[_ngcontent-%COMP%]:hover   .item-menu[_ngcontent-%COMP%]{visibility:visible}"]}),e})(),children:[]}]);var E=n("q2+V");let O=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[o.c,G,m.b,g.c,u.c,E.a]]}),e})()}}]);