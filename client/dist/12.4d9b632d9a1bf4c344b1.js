(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Dulc:function(t,e,i){"use strict";i.r(e),i.d(e,"BlueprintsModule",(function(){return re}));var n=i("ofXK"),c=i("tyNb"),o=i("usgQ"),s=i("quSY"),r=i("fXoL"),a=i("JzR7"),l=i("GV7L"),b=i("XNiG"),m=i("Uve4"),d=i("0IaG"),u=i("3sFK");let p=(()=>{class t{constructor(t,e){this.dialog=t,this.appEnvironmentService=e,this.onBlueprintsUpdated=new b.a,this.loadState()}get selectedItem(){return this.state.selectedItem.item}get selectedItemId(){return this.state.selectedItem.id}saveState(){this.appEnvironmentService.setEnvironmentState("blueprints-tree-state",this.state)}loadState(){var t;this.state=null!==(t=this.appEnvironmentService.currentEnvironmentState["blueprints-tree-state"])&&void 0!==t?t:this.defaultState}getLastSelectedItem(t){return this.findItem(this.selectedItemId,t)}createTemplate(t){this.dialog.open(m.a,{data:{blueprints:this.blueprints,type:"create",collection:t,itemType:l.a.Item.Type.Template},width:"50%",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.updateBlueprints())}createCollection(){this.dialog.open(o.a,{data:{blueprints:this.blueprints,type:"create"},width:"50%",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{this.updateBlueprints()})}updateBlueprints(){this.onBlueprintsUpdated.next(!0)}findItem(t,e){let i;return e.item.id===t?i=e.item:(e.collections.forEach(e=>{e.item.id===t?i=e.item:e.templates.forEach(e=>{e.id===t&&(i=e)})}),i||e.stacks.forEach(e=>{i||(i=this.findItem(t,e))})),i}get defaultState(){return{tree:{},selectedItem:{id:null,item:null}}}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(d.b),r.Vb(u.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac}),t})();function f(t,e){1&t&&r.Nb(0)}const g=function(t){return{$implicit:t,isRoot:!0}};function h(t,e){if(1&t&&(r.Rb(0,"div"),r.Cc(1,f,1,0,"ng-container",2),r.Qb()),2&t){const t=r.dc(),e=r.oc(2);r.Ab(1),r.jc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.lc(2,g,t.root))}}function v(t,e){if(1&t&&(r.Pb(0),r.Rb(1,"span",9),r.Ec(2),r.Qb(),r.Rb(3,"span",10),r.Ec(4),r.Qb(),r.Ob()),2&t){const t=r.dc().$implicit;r.Ab(2),r.Fc(t.item.type),r.Ab(2),r.Gc("[",t.item.name,"]")}}function C(t,e){if(1&t&&(r.Pb(0),r.Rb(1,"span"),r.Ec(2),r.Qb(),r.Ob()),2&t){const t=r.dc().$implicit;r.Ab(2),r.Fc(t.item.name)}}function I(t,e){1&t&&(r.Rb(0,"div",3),r.Rb(1,"div",20),r.Ec(2,"(empty)"),r.Qb(),r.Qb())}function S(t,e){1&t&&(r.Rb(0,"div",3),r.Rb(1,"div",20),r.Ec(2,"(empty)"),r.Qb(),r.Qb())}function R(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"div",23),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(6).selectItem(i)})),r.Mb(2,"div",13),r.Rb(3,"div",6),r.Mb(4,"i",24),r.Qb(),r.Rb(5,"div",25),r.Rb(6,"span"),r.Ec(7),r.Qb(),r.Qb(),r.Qb(),r.Ob()}if(2&t){const t=e.$implicit,i=r.dc(6);r.Ab(1),r.Db("item-selected",i.isSelected(t.id)),r.Ab(6),r.Fc(t.name)}}function Q(t,e){if(1&t&&(r.Rb(0,"div",11),r.Cc(1,S,3,0,"div",18),r.Cc(2,R,8,3,"ng-container",19),r.Qb()),2&t){const t=r.dc().$implicit;r.Ab(1),r.jc("ngIf",0===(null==t.templates?null:t.templates.length)),r.Ab(1),r.jc("ngForOf",t.templates)}}function P(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"div",3),r.Rb(2,"div",4),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(4).toggleItem(i.item.id)})),r.Mb(3,"i",5),r.Qb(),r.Rb(4,"div",21),r.Zb("click",(function(){r.rc(t);const i=e.$implicit,n=r.dc(4);return n.openItem(i.item.id),n.selectItem(i.item)})),r.Mb(5,"i",22),r.Qb(),r.Rb(6,"div",7),r.Zb("click",(function(){r.rc(t);const i=e.$implicit,n=r.dc(4);return n.openItem(i.item.id),n.selectItem(i.item)})),r.Rb(7,"span"),r.Ec(8),r.Qb(),r.Qb(),r.Rb(9,"div",16),r.Zb("click",(function(i){r.rc(t);const n=e.$implicit;return r.dc(4).createTemplate(n.item),i.stopPropagation()})),r.Mb(10,"i",17),r.Qb(),r.Qb(),r.Cc(11,Q,3,2,"div",8),r.Ob()}if(2&t){const t=e.$implicit,i=r.dc(4);r.Ab(1),r.Db("item-selected",i.isSelected(t.item.id)),r.Ab(2),r.Db("fa-caret-down",i.isOpen(t.item.id))("fa-caret-right",!i.isOpen(t.item.id)),r.Ab(5),r.Fc(t.item.name),r.Ab(3),r.jc("ngIf",i.isOpen(t.item.id))}}function y(t,e){if(1&t&&(r.Rb(0,"div",11),r.Cc(1,I,3,0,"div",18),r.Cc(2,P,12,8,"ng-container",19),r.Qb()),2&t){const t=r.dc(2).$implicit;r.Ab(1),r.jc("ngIf",0===(null==t.collections?null:t.collections.length)),r.Ab(1),r.jc("ngForOf",t.collections)}}function A(t,e){1&t&&(r.Rb(0,"div",3),r.Rb(1,"div",20),r.Ec(2,"(empty)"),r.Qb(),r.Qb())}function O(t,e){1&t&&r.Nb(0)}const M=function(t){return{$implicit:t,isRoot:!1}};function x(t,e){if(1&t&&(r.Pb(0),r.Cc(1,O,1,0,"ng-container",2),r.Ob()),2&t){const t=e.$implicit;r.dc(5);const i=r.oc(2);r.Ab(1),r.jc("ngTemplateOutlet",i)("ngTemplateOutletContext",r.lc(2,M,t))}}function k(t,e){if(1&t&&(r.Rb(0,"div",11),r.Cc(1,A,3,0,"div",18),r.Cc(2,x,2,4,"ng-container",19),r.Qb()),2&t){const t=r.dc(3).$implicit;r.Ab(1),r.jc("ngIf",0===(null==t.stacks?null:t.stacks.length)),r.Ab(1),r.jc("ngForOf",t.stacks)}}function w(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"div",12),r.Zb("click",(function(){r.rc(t);const e=r.dc(2).$implicit;return r.dc().toggleItem(e.item.id+".stacks")})),r.Rb(2,"div",13),r.Mb(3,"i",5),r.Qb(),r.Rb(4,"div",6),r.Mb(5,"i",14),r.Qb(),r.Rb(6,"div",15),r.Rb(7,"span"),r.Ec(8,"Stacks"),r.Qb(),r.Qb(),r.Qb(),r.Cc(9,k,3,2,"div",8),r.Ob()}if(2&t){const t=r.dc(2).$implicit,e=r.dc();r.Ab(3),r.Db("fa-caret-down",e.isOpen(t.item.id+".stacks"))("fa-caret-right",!e.isOpen(t.item.id+".stacks")),r.Ab(6),r.jc("ngIf",e.isOpen(t.item.id+".stacks"))}}function j(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",11),r.Rb(1,"div",12),r.Zb("click",(function(){r.rc(t);const e=r.dc().$implicit;return r.dc().toggleItem(e.item.id+".collections")})),r.Rb(2,"div",13),r.Mb(3,"i",5),r.Qb(),r.Rb(4,"div",6),r.Mb(5,"i",14),r.Qb(),r.Rb(6,"div",15),r.Rb(7,"span"),r.Ec(8,"Collections"),r.Qb(),r.Qb(),r.Rb(9,"div",16),r.Zb("click",(function(e){r.rc(t);const i=r.dc().$implicit;return r.dc().createCollection(i.item),e.stopPropagation()})),r.Mb(10,"i",17),r.Qb(),r.Qb(),r.Cc(11,y,3,2,"div",8),r.Cc(12,w,10,5,"ng-container",0),r.Qb()}if(2&t){const t=r.dc().$implicit,e=r.dc();r.Ab(3),r.Db("fa-caret-down",e.isOpen(t.item.id+".collections"))("fa-caret-right",!e.isOpen(t.item.id+".collections")),r.Ab(8),r.jc("ngIf",e.isOpen(t.item.id+".collections")),r.Ab(1),r.jc("ngIf",(null==t.stacks?null:t.stacks.length)>0)}}function T(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",3),r.Rb(1,"div",4),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc().toggleItem(i.item.id)})),r.Mb(2,"i",5),r.Qb(),r.Rb(3,"div",6),r.Mb(4,"i",5),r.Qb(),r.Rb(5,"div",7),r.Zb("click",(function(){r.rc(t);const i=e.$implicit,n=r.dc();return n.openItem(i.item.id),n.selectItem(i.item)})),r.Cc(6,v,5,2,"ng-container",0),r.Cc(7,C,3,1,"ng-container",0),r.Qb(),r.Qb(),r.Cc(8,j,13,6,"div",8)}if(2&t){const t=e.$implicit,i=e.isRoot,n=r.dc();r.Db("item-selected",n.isSelected(t.item.id)),r.Ab(2),r.Db("fa-caret-down",n.isOpen(t.item.id))("fa-caret-right",!n.isOpen(t.item.id)),r.Ab(2),r.Db("fa-dice-d6","workspace"===t.item.type)("fa-layer-group","stack"===t.item.type),r.Ab(2),r.jc("ngIf",i),r.Ab(1),r.jc("ngIf",!i),r.Ab(1),r.jc("ngIf",n.isOpen(t.item.id))}}let E=(()=>{class t{constructor(t){this.blueprintsTreeService=t,this.onItemSelect=new r.o,this.state=this.blueprintsTreeService.state}ngOnInit(){var t;this.selectedItem=null!==(t=this.selectedItem)&&void 0!==t?t:this.root.item,this.selectItem(this.selectedItem),this.state.tree[this.root.item.id]={open:!0}}ngOnChanges(t){var e,i;(null===(e=t.selectedItem)||void 0===e?void 0:e.currentValue)&&this.selectItem(null===(i=t.selectedItem)||void 0===i?void 0:i.currentValue)}selectItem(t){this.state.selectedItem.item=t,this.state.selectedItem.id=t.id,this.onItemSelect.emit(t),this.saveState()}openItem(t){this.state.tree[t]={open:!0},this.saveState()}toggleItem(t){this.state.tree[t]?this.state.tree[t].open=!this.state.tree[t].open:this.state.tree[t]={open:!0},this.saveState()}isOpen(t){var e;return null===(e=this.state.tree[t])||void 0===e?void 0:e.open}saveState(){this.blueprintsTreeService.saveState()}ngOnDestroy(){}isSelected(t){return this.state.selectedItem.id===t}createCollection(t){this.blueprintsTreeService.createCollection()}createTemplate(t){this.blueprintsTreeService.createTemplate(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(p))},t.\u0275cmp=r.Fb({type:t,selectors:[["blueprints-tree"]],inputs:{root:"root",selectedItem:"selectedItem"},outputs:{onItemSelect:"onItemSelect"},features:[r.zb([]),r.yb],decls:3,vars:1,consts:[[4,"ngIf"],["workspace",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"tree-item"],[1,"item-pointer",3,"click"],[1,"fa"],[1,"item-icon"],[1,"item-name","ellipsis",3,"click"],["class","sub-dir",4,"ngIf"],[1,"text-capitalize"],[1,"text-small","text-muted","ml-1"],[1,"sub-dir"],[1,"tree-item",3,"click"],[1,"item-pointer"],[1,"fa","fa-folder"],[1,"item-name"],[1,"item-command-icon",3,"click"],[1,"far","fa-plus-square"],["class","tree-item",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-muted","text-tiny","empty-dir"],[1,"item-icon",3,"click"],[1,"fa","fa-cog"],[1,"tree-item","pt-1",3,"click"],[1,"far","fa-file"],[1,"item-name","ellipsis"]],template:function(t,e){1&t&&(r.Cc(0,h,2,4,"div",0),r.Cc(1,T,9,13,"ng-template",null,1,r.Dc)),2&t&&r.jc("ngIf",e.root)},directives:[n.t,n.A,n.s],styles:[".tree-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding-top:.25rem}.tree-item[_ngcontent-%COMP%]:hover{background-color:#f9fafe}.tree-item[_ngcontent-%COMP%]   .empty-dir[_ngcontent-%COMP%]{padding-left:25px}.tree-item[_ngcontent-%COMP%]   .item-pointer[_ngcontent-%COMP%]{width:20px;text-align:center;cursor:pointer}.tree-item.item-selected[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .tree-item.item-selected[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{color:#6469ff!important}.tree-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{width:20px;text-align:center}.tree-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#b3b4b3}.tree-item[_ngcontent-%COMP%]   .item-command-icon[_ngcontent-%COMP%]{width:20px;text-align:center;align-self:center;cursor:pointer}.tree-item[_ngcontent-%COMP%]   .item-command-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#b3b4b3!important}.tree-item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{padding:0 .25rem;cursor:pointer}.tree-item[_ngcontent-%COMP%]   .item-name.active[_ngcontent-%COMP%]{background:#555;box-shadow:inset 0 0 1px #999;border-radius:2px}.tree-item[_ngcontent-%COMP%]   .relative-path[_ngcontent-%COMP%]{padding-left:.25rem;color:#b3b4b3}.sub-dir[_ngcontent-%COMP%]{padding-left:20px}"]}),t})();var F=i("ByjF"),D=i("Mzu6"),_=i("OFkr"),B=i("nZ6g"),Z=i("biaL"),$=i("STbY"),G=i("Qu3c"),L=i("NFeN"),z=i("DuVo"),J=i("3EJP"),V=i("mjoc"),N=i("6uKQ"),q=i("h6DH");function U(t,e){1&t&&(r.Rb(0,"div",26),r.Mb(1,"i",27),r.Qb())}function H(t,e){if(1&t){const t=r.Sb();r.Pb(0,7),r.Rb(1,"div",24),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(3).selectPathItem(i.item)})),r.Ec(2),r.Qb(),r.Cc(3,U,2,0,"div",25),r.Ob()}if(2&t){const t=e.$implicit,i=e.index,n=r.dc(3);r.Ab(1),r.jc("matTooltip",t.item.type),r.Ab(1),r.Fc(t.item.name),r.Ab(1),r.jc("ngIf",i<(null==n.itemPath?null:n.itemPath.length)-1)}}function K(t,e){if(1&t&&(r.Pb(0),r.Rb(1,"div",22),r.Cc(2,H,4,3,"ng-container",23),r.Qb(),r.Ob()),2&t){const t=r.dc(2);r.Ab(2),r.jc("ngForOf",t.itemPath)}}const W=function(t){return{collection:t}};function X(t,e){if(1&t&&(r.Rb(0,"div",28),r.Ec(1," More Actions "),r.Rb(2,"mat-icon",29),r.Ec(3,"more_vert"),r.Qb(),r.Qb()),2&t){const t=r.dc(2),e=r.oc(2);r.jc("matMenuTriggerFor",e)("matMenuTriggerData",r.lc(3,W,t.collection)),r.Ab(2),r.jc("inline",!0)}}const Y=function(t){return{env:t}};function tt(t,e){if(1&t&&(r.Rb(0,"div",28),r.Ec(1," More Actions "),r.Rb(2,"mat-icon",29),r.Ec(3,"more_vert"),r.Qb(),r.Qb()),2&t){const t=r.dc(2),e=r.oc(5);r.jc("matMenuTriggerFor",e)("matMenuTriggerData",r.lc(3,Y,t.collection)),r.Ab(2),r.jc("inline",!0)}}function et(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-info",30),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.collection)}}function it(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-filenames",30),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.collection)}}function nt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-functions",30),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.collection)}}function ct(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-variables",30),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.collection)}}function ot(t,e){1&t&&(r.Pb(0),r.Mb(1,"config-links"),r.Ob())}function st(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div"),r.Rb(1,"div",5),r.Rb(2,"div",6),r.Rb(3,"div",7),r.Rb(4,"span",8),r.Ec(5),r.Qb(),r.Rb(6,"span",9),r.Ec(7),r.Qb(),r.Qb(),r.Cc(8,K,3,1,"ng-container",0),r.Qb(),r.Cc(9,X,4,5,"div",10),r.Cc(10,tt,4,5,"div",10),r.Qb(),r.Rb(11,"div",11),r.Rb(12,"div",12),r.Rb(13,"div",13),r.Rb(14,"div",14),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("readme")})),r.Mb(15,"i",15),r.Ec(16,"Readme"),r.Qb(),r.Rb(17,"div",14),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("filenames")})),r.Mb(18,"i",16),r.Ec(19,"Filenames"),r.Qb(),r.Rb(20,"div",14),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("functions")})),r.Mb(21,"i",17),r.Ec(22,"Functions"),r.Qb(),r.Rb(23,"div",14),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("variables")})),r.Mb(24,"i",18),r.Ec(25,"Variables"),r.Qb(),r.Qb(),r.Qb(),r.Rb(26,"div",19),r.Pb(27,20),r.Cc(28,et,2,1,"ng-container",21),r.Cc(29,it,2,1,"ng-container",21),r.Cc(30,nt,2,1,"ng-container",21),r.Cc(31,ct,2,1,"ng-container",21),r.Cc(32,ot,2,0,"ng-container",21),r.Ob(),r.Qb(),r.Qb(),r.Qb()}if(2&t){const t=r.dc();r.Ab(5),r.Fc(t.collection.name),r.Ab(2),r.Gc("[",t.collection.type,"]"),r.Ab(1),r.jc("ngIf",(null==t.itemPath?null:t.itemPath.length)>1),r.Ab(1),r.jc("ngIf",t.collection.type===t.itemTypes.Collection),r.Ab(1),r.jc("ngIf",t.collection.type!==t.itemTypes.Collection),r.Ab(4),r.Db("text-primary","readme"===t.selectedSection),r.Ab(3),r.Db("text-primary","filenames"===t.selectedSection),r.Ab(3),r.Db("text-primary","functions"===t.selectedSection),r.Ab(3),r.Db("text-primary","variables"===t.selectedSection),r.Ab(4),r.jc("ngSwitch",t.selectedSection),r.Ab(1),r.jc("ngSwitchCase","readme"),r.Ab(1),r.jc("ngSwitchCase","filenames"),r.Ab(1),r.jc("ngSwitchCase","functions"),r.Ab(1),r.jc("ngSwitchCase","variables"),r.Ab(1),r.jc("ngSwitchCase","links")}}function rt(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",31),r.Ec(1,"Collection: "),r.Rb(2,"span",32),r.Ec(3),r.Qb(),r.Qb(),r.Rb(4,"button",33),r.Zb("click",(function(){r.rc(t);const i=e.collection;return r.dc().createTemplate(i)})),r.Rb(5,"span"),r.Ec(6,"Create New Template"),r.Qb(),r.Qb(),r.Rb(7,"button",33),r.Zb("click",(function(){r.rc(t);const i=e.collection;return r.dc().renameCollection(i)})),r.Rb(8,"span"),r.Ec(9,"Rename Collection"),r.Qb(),r.Qb(),r.Rb(10,"button",33),r.Zb("click",(function(){r.rc(t);const i=e.collection;return r.dc().addToStack(i)})),r.Rb(11,"span"),r.Ec(12,"Add Collection To Stack"),r.Qb(),r.Qb(),r.Rb(13,"button",33),r.Zb("click",(function(){r.rc(t);const i=e.collection;return r.dc().deleteCollection(i)})),r.Rb(14,"span"),r.Ec(15,"Delete Collection"),r.Qb(),r.Qb()}if(2&t){const t=e.collection;r.Ab(3),r.Fc(t.name)}}function at(t,e){if(1&t){const t=r.Sb();r.Rb(0,"button",33),r.Zb("click",(function(){r.rc(t);const e=r.dc().env;return r.dc().deleteStack(e)})),r.Rb(1,"span"),r.Ec(2,"Delete "),r.Rb(3,"span",34),r.Ec(4),r.Qb(),r.Qb(),r.Qb()}if(2&t){const t=r.dc().env;r.Ab(4),r.Fc(t.type)}}function lt(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",31),r.Rb(1,"span",34),r.Ec(2),r.Qb(),r.Ec(3," : "),r.Rb(4,"span",32),r.Ec(5),r.Qb(),r.Qb(),r.Rb(6,"button",33),r.Zb("click",(function(){return r.rc(t),r.dc().createCollection()})),r.Rb(7,"span"),r.Ec(8,"Create New Collection"),r.Qb(),r.Qb(),r.Cc(9,at,5,1,"button",35)}if(2&t){const t=e.env,i=r.dc();r.Ab(2),r.Fc(t.type),r.Ab(3),r.Fc(t.name),r.Ab(4),r.jc("ngIf",t.type!==i.itemTypes.Workspace)}}let bt=(()=>{class t{constructor(t,e,i,n,c){this.bluService=t,this.collectionService=e,this.dialogService=i,this.userService=n,this.dialog=c,this.onGetBlueprints=new r.o,this.onPathItemSelected=new r.o,this.selectedSection="readme",this.itemTypes=l.a.Item.Type,this.subs=new s.a}ngOnInit(){this.subs.add(this.userService.user$.subscribe(t=>this.isLoggedIn=t.isLoggedIn))}ngOnChanges(t){this.refreshItem()}ngOnDestroy(){this.subs.unsubscribe()}refreshItem(){const t=this.collection;this.collection=null,setTimeout(()=>{this.collection=t,this.updateItemPath()})}updateItemPath(){this.itemPath=this.getItemPath(this.collection)}selectConfig(t){this.selectedSection=t}addToStack(t){this.isLoggedIn?this.dialog.open(F.a,{data:{collection:t},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>console.log("dialog result: ",t)):this.dialogService.openMustLoginDialog()}deleteCollection(t){this.dialog.open(D.a,{data:{title:`Delete collection ${t.name}?`,text:"Deleting this collection is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{!0===e&&this.collectionService.deleteCollection(t.id).subscribe(t=>this.getBlueprints())})}createCollection(){this.dialog.open(o.a,{data:{blueprints:this.blueprints,type:"create"},width:"30%",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{this.getBlueprints()})}renameCollection(t){this.dialog.open(o.a,{data:{blueprints:this.blueprints,type:"rename",collection:t},width:"30%",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{this.getBlueprints()})}createTemplate(t){this.dialog.open(m.a,{data:{blueprints:this.blueprints,type:"create",collection:t,itemType:l.a.Item.Type.Template},width:"300px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getBlueprints())}getBlueprints(){this.onGetBlueprints.emit(!0)}getItemPath(t,e=[]){return e.unshift({item:t}),t.parent?this.getItemPath(t.parent,e):e}selectPathItem(t){this.onPathItemSelected.emit(t)}deleteStack(t){this.dialog.open(D.a,{data:{title:`Delete stack ${t.name}?`,text:"Deleting this stack is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{!0===e&&this.bluService.deleteStack(t.id).subscribe(t=>this.getBlueprints())})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(a.a),r.Lb(_.a),r.Lb(B.a),r.Lb(Z.a),r.Lb(d.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["blueprints-collection"]],inputs:{collection:"collection",blueprints:"blueprints"},outputs:{onGetBlueprints:"onGetBlueprints",onPathItemSelected:"onPathItemSelected"},features:[r.yb],decls:7,vars:3,consts:[[4,"ngIf"],[3,"overlapTrigger"],["collectionMenu","matMenu"],["matMenuContent",""],["environmentMenu","matMenu"],[1,"border-bottom","d-flex","align-items-center","item-header",2,"background-color","#F9FAFE","border-bottom-width","5px !important"],[1,"pl-3","py-2"],[1,""],[2,"font-size","1rem"],[1,"text-muted","text-small","ml-1"],["class","ml-auto cursor-pointer",3,"matMenuTriggerFor","matMenuTriggerData",4,"ngIf"],[1,"d-flex","pl-3","pt-3"],[1,"",2,"width","120px"],[1,"pl-1"],[1,"cursor-pointer","config-icon",3,"click"],[1,"fab","fa-readme","mr-2","fa-sm"],[1,"fa","fa-file-alt","mr-2","fa-sm"],[1,"fa","fa-magic","mr-2","fa-sm"],[1,"fa","fa-equals","mr-2","fa-sm"],[1,"flex-grow-1","px-2",2,"borderz","1px solid red"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"d-flex","align-items-center","text-small","text-muted","pr-3"],["class","",4,"ngFor","ngForOf"],[1,"as-link","cursor-pointer",3,"matTooltip","click"],["class","px-2",4,"ngIf"],[1,"px-2"],[1,"fa","fa-chevron-right"],[1,"ml-auto","cursor-pointer",3,"matMenuTriggerFor","matMenuTriggerData"],[1,"item-menu",3,"inline"],[3,"item"],[1,"p-2","text-center","border-bottom"],[1,"text-bold"],["mat-menu-item","",3,"click"],[1,"text-capitalize"],["mat-menu-item","",3,"click",4,"ngIf"]],template:function(t,e){1&t&&(r.Cc(0,st,33,19,"div",0),r.Rb(1,"mat-menu",1,2),r.Cc(3,rt,16,1,"ng-template",3),r.Qb(),r.Rb(4,"mat-menu",1,4),r.Cc(6,lt,10,3,"ng-template",3),r.Qb()),2&t&&(r.jc("ngIf",e.collection),r.Ab(1),r.jc("overlapTrigger",!0),r.Ab(3),r.jc("overlapTrigger",!0))},directives:[n.t,$.e,$.a,n.x,n.y,n.s,G.a,$.d,L.a,z.a,J.a,V.a,N.a,q.a,$.b],styles:[".config-list[_ngcontent-%COMP%]{position:relative;width:100%}.config-list[_ngcontent-%COMP%]   .config-title[_ngcontent-%COMP%], .config-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:26px}.config-list[_ngcontent-%COMP%]   .config-icon[_ngcontent-%COMP%]{left:10px;top:6px;position:absolute;font-size:.6rem;opacity:.8}"]}),t})();var mt=i("NE5U"),dt=i("a8/g"),ut=i("xm+p"),pt=i("oFHb"),ft=i("bTqV"),gt=i("m/dn"),ht=i("ty4e"),vt=i("GiAs");function Ct(t,e){1&t&&(r.Rb(0,"div"),r.Rb(1,"div",4),r.Rb(2,"div"),r.Mb(3,"i",5),r.Qb(),r.Qb(),r.Qb())}function It(t,e){1&t&&(r.Rb(0,"div",37),r.Mb(1,"i",38),r.Qb())}function St(t,e){if(1&t){const t=r.Sb();r.Pb(0,16),r.Rb(1,"div",35),r.Zb("click",(function(){r.rc(t);const i=e.$implicit;return r.dc(2).selectPathItem(i.item)})),r.Ec(2),r.Qb(),r.Cc(3,It,2,0,"div",36),r.Ob()}if(2&t){const t=e.$implicit,i=e.index,n=r.dc(2);r.Ab(1),r.jc("matTooltip",t.item.type),r.Ab(1),r.Fc(t.item.name),r.Ab(1),r.jc("ngIf",i<(null==n.itemPath?null:n.itemPath.length)-1)}}function Rt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-info",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function Qt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-description",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function Pt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-filenames",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function yt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-on-success",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function At(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-commands",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function Ot(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-functions",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function Mt(t,e){if(1&t&&(r.Pb(0),r.Mb(1,"config-variables",39),r.Ob()),2&t){const t=r.dc(2);r.Ab(1),r.jc("item",t.item)}}function xt(t,e){1&t&&(r.Pb(0),r.Mb(1,"config-links"),r.Ob())}const kt=function(t){return{item:t}};function wt(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div"),r.Rb(1,"div",6),r.Rb(2,"div",7),r.Rb(3,"div",8),r.Rb(4,"div",9),r.Ec(5),r.Rb(6,"span",10),r.Ec(7),r.Qb(),r.Qb(),r.Rb(8,"div",11),r.Cc(9,St,4,3,"ng-container",12),r.Qb(),r.Qb(),r.Rb(10,"div",13),r.Rb(11,"div",14),r.Zb("click",(function(){r.rc(t);const e=r.dc();return e.launchConsole(e.item)})),r.Mb(12,"i",15),r.Qb(),r.Qb(),r.Rb(13,"div",16),r.Rb(14,"button",17),r.Zb("click",(function(){r.rc(t);const e=r.dc();return e.editTemplate(e.item)})),r.Ec(15,"Edit"),r.Qb(),r.Qb(),r.Rb(16,"div",18),r.Rb(17,"button",19),r.Rb(18,"mat-icon",20),r.Ec(19,"more_vert"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(20,"div",21),r.Rb(21,"div",22),r.Rb(22,"div",23),r.Rb(23,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("readme")})),r.Mb(24,"i",25),r.Ec(25,"Readme"),r.Qb(),r.Rb(26,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("description")})),r.Mb(27,"i",26),r.Ec(28,"Description"),r.Qb(),r.Rb(29,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("onSuccess")})),r.Mb(30,"i",27),r.Ec(31,"On Success"),r.Qb(),r.Rb(32,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("filenames")})),r.Mb(33,"i",28),r.Ec(34,"Filenames"),r.Qb(),r.Rb(35,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("functions")})),r.Mb(36,"i",29),r.Ec(37,"Functions"),r.Qb(),r.Rb(38,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("variables")})),r.Mb(39,"i",30),r.Ec(40,"Variables"),r.Qb(),r.Rb(41,"div",24),r.Zb("click",(function(){return r.rc(t),r.dc().selectConfig("commands")})),r.Mb(42,"i",31),r.Ec(43,"Chain"),r.Qb(),r.Qb(),r.Qb(),r.Rb(44,"div",32),r.Pb(45,33),r.Cc(46,Rt,2,1,"ng-container",34),r.Cc(47,Qt,2,1,"ng-container",34),r.Cc(48,Pt,2,1,"ng-container",34),r.Cc(49,yt,2,1,"ng-container",34),r.Cc(50,At,2,1,"ng-container",34),r.Cc(51,Ot,2,1,"ng-container",34),r.Cc(52,Mt,2,1,"ng-container",34),r.Cc(53,xt,2,0,"ng-container",34),r.Ob(),r.Qb(),r.Qb(),r.Qb()}if(2&t){const t=r.dc(),e=r.oc(3);r.Ab(5),r.Gc("",t.item.name," "),r.Ab(2),r.Gc("[",t.item.type,"]"),r.Ab(2),r.jc("ngForOf",t.itemPath),r.Ab(7),r.jc("matMenuTriggerFor",e)("matMenuTriggerData",r.lc(29,kt,t.item)),r.Ab(2),r.jc("inline",!0),r.Ab(5),r.Db("text-primary","readme"===t.selectedSection),r.Ab(3),r.Db("text-primary","description"===t.selectedSection),r.Ab(3),r.Db("text-primary","onSuccess"===t.selectedSection),r.Ab(3),r.Db("text-primary","filenames"===t.selectedSection),r.Ab(3),r.Db("text-primary","functions"===t.selectedSection),r.Ab(3),r.Db("text-primary","variables"===t.selectedSection),r.Ab(3),r.Db("text-primary","commands"===t.selectedSection),r.Ab(4),r.jc("ngSwitch",t.selectedSection),r.Ab(1),r.jc("ngSwitchCase","readme"),r.Ab(1),r.jc("ngSwitchCase","description"),r.Ab(1),r.jc("ngSwitchCase","filenames"),r.Ab(1),r.jc("ngSwitchCase","onSuccess"),r.Ab(1),r.jc("ngSwitchCase","commands"),r.Ab(1),r.jc("ngSwitchCase","functions"),r.Ab(1),r.jc("ngSwitchCase","variables"),r.Ab(1),r.jc("ngSwitchCase","links")}}function jt(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",40),r.Rb(1,"span",41),r.Ec(2),r.Qb(),r.Rb(3,"span",42),r.Ec(4),r.Qb(),r.Qb(),r.Rb(5,"button",43),r.Zb("click",(function(){r.rc(t);const i=e.item;return r.dc().editTemplate(i)})),r.Ec(6,"Edit "),r.Rb(7,"span",41),r.Ec(8),r.Qb(),r.Qb(),r.Rb(9,"button",43),r.Zb("click",(function(){r.rc(t);const i=e.item;return r.dc().rename(i)})),r.Ec(10,"Rename "),r.Rb(11,"span",41),r.Ec(12),r.Qb(),r.Qb(),r.Rb(13,"button",43),r.Zb("click",(function(){r.rc(t);const i=e.item;return r.dc().duplicate(i)})),r.Ec(14,"Duplicate "),r.Rb(15,"span",41),r.Ec(16),r.Qb(),r.Qb(),r.Rb(17,"button",43),r.Zb("click",(function(){r.rc(t);const i=e.item;return r.dc().copyItem(i)})),r.Ec(18,"Copy "),r.Rb(19,"span",41),r.Ec(20),r.Qb(),r.Ec(21," To ..."),r.Qb(),r.Rb(22,"button",43),r.Zb("click",(function(){r.rc(t);const i=e.item;return r.dc().delete(i)})),r.Ec(23,"Delete "),r.Rb(24,"span",41),r.Ec(25),r.Qb(),r.Qb()}if(2&t){const t=e.item;r.Ab(2),r.Gc("",t.type,": "),r.Ab(2),r.Hc("",t.parent.name,".",t.name,""),r.Ab(4),r.Fc(t.type),r.Ab(4),r.Fc(t.type),r.Ab(4),r.Fc(t.type),r.Ab(4),r.Fc(t.type),r.Ab(5),r.Fc(t.type)}}let Tt=(()=>{class t{constructor(t,e,i,n,c){this.bluService=t,this.appStateService=e,this.navigationService=i,this.templateService=n,this.dialog=c,this.onGetBlueprints=new r.o,this.onPathItemSelected=new r.o,this.selectedSection="readme"}ngOnInit(){}ngOnChanges(t){this.refreshItem()}ngOnDestroy(){}refreshItem(){const t=this.item;this.item=null,setTimeout(()=>{this.item=t,this.updateItemPath()},0)}updateItemPath(){this.itemPath=this.getItemPath(this.item)}selectConfig(t){this.selectedSection=t}renameTemplate(t,e){this.dialog.open(m.a,{data:{blueprints:this.blueprints,type:"rename",collection:t,item:e,itemType:l.a.Item.Type.Template},width:"300px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getBlueprints())}copyItem(t){this.dialog.open(mt.a,{data:{item:t},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>this.getBlueprints())}rename(t){this.renameTemplate(t.parent,t)}delete(t){this.deleteTemplate(t)}deleteTemplate(t){this.dialog.open(D.a,{data:{title:`Delete template ${t.name}?`,text:"Deleting this template is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{!0===e&&this.templateService.deleteTemplate(t.id).subscribe(t=>this.getBlueprints())})}duplicate(t){this.duplicateTemplate(t)}duplicateTemplate(t){this.templateService.duplicateTemplate(t.id).subscribe(t=>this.getBlueprints())}editTemplate(t){this.navigationService.navigateTo(["editor"],{queryParams:{itemId:t.id,rootDestination:"./",inputs:JSON.stringify({name:"stackjoy"})}})}getBlueprints(){this.onGetBlueprints.emit(!0)}launchConsole(t){this.appStateService.openBluConsole({inputs:{},command:`generate "${t.namespace}"`,extraInfo:{itemId:t.id}})}getItemPath(t,e=[]){return e.unshift({item:t}),t.parent?this.getItemPath(t.parent,e):e}selectPathItem(t){this.onPathItemSelected.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(a.a),r.Lb(dt.a),r.Lb(ut.a),r.Lb(pt.a),r.Lb(d.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["blueprints-item"]],inputs:{item:"item",blueprints:"blueprints"},outputs:{onGetBlueprints:"onGetBlueprints",onPathItemSelected:"onPathItemSelected"},features:[r.yb],decls:5,vars:2,consts:[[4,"ngIf"],["yPosition","below"],["itemMenu","matMenu"],["matMenuContent",""],[1,"border-bottom","d-flex","align-items-center","p-2","item-header",2,"background-color","#F9FAFE"],[1,"fa","fa-spinner","fa-spin"],[1,"border-bottom","item-header",2,"background-color","#F9FAFE","border-bottom-width","5px !important"],[1,"d-flex","align-items-center"],[1,"pl-3","py-2"],[2,"font-size","1rem"],[1,"text-muted","text-small","ml-1"],[1,"d-flex","align-items-center","text-small","text-muted","pr-3"],["class","",4,"ngFor","ngForOf"],[1,"ml-auto"],[1,"console","mr-2","cursor-pointer",3,"click"],[1,"fa","fa-terminal","fa-sm"],[1,""],["mat-button","",3,"click"],[1,"cursor-pointer",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-button","","mat-icon-button",""],[1,"item-menu",3,"inline"],[1,"d-flex","pl-3","pt-3"],[1,"",2,"width","120px"],[1,"pl-1"],[1,"cursor-pointer","config-icon",3,"click"],[1,"fab","fa-readme","mr-2","fa-sm"],[1,"fa","fa-info","mr-2","fa-sm"],[1,"fa","fa-check","mr-2","fa-sm"],[1,"fa","fa-file-alt","mr-2","fa-sm"],[1,"fa","fa-magic","mr-2","fa-sm"],[1,"fa","fa-equals","mr-2","fa-sm"],[1,"fa","fa-list","mr-2","fa-sm"],[1,"flex-grow-1","px-2",2,"borderz","1px solid red"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"as-link","cursor-pointer",3,"matTooltip","click"],["class","px-2",4,"ngIf"],[1,"px-2"],[1,"fa","fa-chevron-right"],[3,"item"],[1,"p-2","text-center","border-bottom"],[1,"text-capitalize"],[1,"text-bold"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(r.Cc(0,Ct,4,0,"div",0),r.Cc(1,wt,54,31,"div",0),r.Rb(2,"mat-menu",1,2),r.Cc(4,jt,26,8,"ng-template",3),r.Qb()),2&t&&(r.jc("ngIf",!e.item),r.Ab(1),r.jc("ngIf",e.item))},directives:[n.t,$.e,$.a,n.s,ft.b,$.d,L.a,n.x,n.y,G.a,z.a,gt.a,J.a,ht.a,vt.a,V.a,N.a,q.a,$.b],styles:[".config-list[_ngcontent-%COMP%]{position:relative;width:100%}.config-list[_ngcontent-%COMP%]   .config-title[_ngcontent-%COMP%], .config-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:26px}.config-list[_ngcontent-%COMP%]   .config-icon[_ngcontent-%COMP%]{left:10px;top:6px;position:absolute;font-size:.6rem;opacity:.8}"]}),t})();function Et(t,e){if(1&t){const t=r.Sb();r.Rb(0,"blueprints-tree",7),r.Zb("onItemSelect",(function(e){return r.rc(t),r.dc().selectItem(e)})),r.Qb()}if(2&t){const t=r.dc();r.jc("root",t.tree)("selectedItem",t.lastSelectedItem)}}function Ft(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"blueprints-collection",8),r.Zb("onGetBlueprints",(function(){return r.rc(t),r.dc().getBlueprints()}))("onPathItemSelected",(function(e){return r.rc(t),r.dc().selectItem(e)})),r.Qb(),r.Ob()}if(2&t){const t=r.dc();r.Ab(1),r.jc("blueprints",t.blueprints)("collection",t.selectedItem)}}function Dt(t,e){if(1&t){const t=r.Sb();r.Pb(0),r.Rb(1,"blueprints-item",9),r.Zb("onGetBlueprints",(function(){return r.rc(t),r.dc().getBlueprints()}))("onPathItemSelected",(function(e){return r.rc(t),r.dc().selectItem(e)})),r.Qb(),r.Ob()}if(2&t){const t=r.dc();r.Ab(1),r.jc("blueprints",t.blueprints)("item",t.selectedItem)}}const _t=function(){return["collection","workspace","stack"]},Bt=function(){return["template"]},Zt=c.g.forChild([{path:"",component:(()=>{class t{constructor(t,e,i){this.bluService=t,this.blueprintsTreeService=e,this.dialog=i,this.state={},this.subs=new s.a}ngOnInit(){this.getBlueprints(),this.subs.add(this.blueprintsTreeService.onBlueprintsUpdated.subscribe(t=>this.getBlueprints()))}getBlueprints(){this.bluService.getBlueprintsTree().subscribe(t=>{var e;this.lastSelectedItem=null!==(e=this.blueprintsTreeService.getLastSelectedItem(t))&&void 0!==e?e:t.item,this.tree=t})}ngOnDestroy(){this.subs.unsubscribe()}toggleSectionState(t,e){this.state[t][e]=!this.state[t][e]}createCollection(){this.dialog.open(o.a,{data:{blueprints:this.blueprints,type:"create"},width:"30%",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{this.getBlueprints()})}selectItem(t){this.selectedItem=t,this.lastSelectedItem=t,this.selectedItemPath=this.getItemPath(this.selectedItem)}getItemPath(t,e=[]){return e.unshift({item:t}),t.parent?this.getItemPath(t.parent,e):e}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(a.a),r.Lb(p),r.Lb(d.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["blueprints"]],decls:8,vars:6,consts:[[1,""],[1,"d-flex"],[1,"border-right","p-2",2,"width","300px"],[3,"root","selectedItem","onItemSelect",4,"ngIf"],[1,"p-0","flex-grow-1"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"root","selectedItem","onItemSelect"],[3,"blueprints","collection","onGetBlueprints","onPathItemSelected"],[3,"blueprints","item","onGetBlueprints","onPathItemSelected"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Cc(3,Et,1,2,"blueprints-tree",3),r.Qb(),r.Rb(4,"div",4),r.Pb(5,5),r.Cc(6,Ft,2,2,"ng-container",6),r.Cc(7,Dt,2,2,"ng-container",6),r.Ob(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.Ab(3),r.jc("ngIf",e.tree),r.Ab(2),r.jc("ngSwitch",null==e.selectedItem?null:e.selectedItem.type),r.Ab(1),r.jc("ngSwitchCase",r.kc(4,_t).includes(null==e.selectedItem?null:e.selectedItem.type)?e.selectedItem.type:""),r.Ab(1),r.jc("ngSwitchCase",r.kc(5,Bt).includes(null==e.selectedItem?null:e.selectedItem.type)?e.selectedItem.type:""))},directives:[n.t,n.x,n.y,E,bt,Tt],styles:[""]}),t})()}]);var $t=i("qFsG"),Gt=i("QibW"),Lt=i("d3UM"),zt=i("3Pt+"),Jt=i("kmnG");let Vt=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,Jt.e,zt.B,Lt.b,Gt.c,$t.b]]}),t})(),Nt=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,d.g,$t.b,zt.m,ft.c,Gt.c,zt.B,Lt.b,Vt]]}),t})();var qt=i("lK0z"),Ut=i("3V0h"),Ht=i("SWd6"),Kt=i("95yg"),Wt=i("y2UV"),Xt=i("CaBZ"),Yt=i("f4ua");let te=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,L.b,$.c,Ut.a,Kt.a,Wt.a,Xt.a,Yt.a,G.b]]}),t})();var ee=i("aH/c"),ie=i("9R0s");let ne=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,d.g,$t.b,zt.m,ft.c,Gt.c,zt.B,Lt.b]]}),t})(),ce=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,L.b,$.c,Ut.a,Kt.a,Wt.a,Xt.a,Yt.a,Ht.a,ee.a,ie.a,G.b,ft.c,ne]]}),t})(),oe=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[n.c]]}),t})();var se=i("R0Pe");let re=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[p],imports:[[n.c,Zt,$.c,L.b,ft.c,Nt,qt.a,se.a,Ut.a,Ht.a,Kt.a,Wt.a,Xt.a,Yt.a,te,ce,G.b,oe]]}),t})()}}]);