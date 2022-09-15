(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4uq3":function(t,e,n){"use strict";n.r(e),n.d(e,"DataModelListModule",(function(){return q}));var i=n("ofXK"),o=n("tyNb"),a=n("Mzu6"),d=n("fXoL"),c=n("0btQ"),l=n("0IaG"),r=n("bTqV"),s=n("dTU6"),b=n("a8/g"),u=n("3Pt+"),f=n("kmnG"),m=n("qFsG");let p=(()=>{class t{constructor(t){this.fb=t,this.onChange=new d.o,this.onDelete=new d.o,this.onCancel=new d.o}ngOnInit(){this.form=this.fb.group({name:[this.dataModel.name]}),this.form.valueChanges.subscribe(t=>{})}ngOnDestroy(){}saveForm(){this.onChange.emit(this.form.value)}deleteModel(){this.onDelete.emit(this.dataModel)}cancel(){this.onCancel.emit(this.dataModel)}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(u.f))},t.\u0275cmp=d.Fb({type:t,selectors:[["model-structure-form"]],inputs:{dataModel:"dataModel"},outputs:{onChange:"onChange",onDelete:"onDelete",onCancel:"onCancel"},decls:15,vars:1,consts:[[1,"p-2","d-flex","align-items-center","border-bottom"],[1,""],[1,"ml-auto"],[1,"fa","fa-trash","cursor-pointer",3,"click"],[1,"p-2"],[3,"formGroup"],[1,"mat-form-field"],["placeholder","Model Name","matInput","","formControlName","name"],[1,"row"],[1,"col","text-right"],["mat-button","","mat-raised-button","",1,"mr-1",3,"click"],["mat-button","","mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Ec(2,"Model Settings"),d.Qb(),d.Rb(3,"div",2),d.Rb(4,"i",3),d.Zb("click",(function(){return e.deleteModel()})),d.Qb(),d.Qb(),d.Qb(),d.Rb(5,"div",4),d.Rb(6,"form",5),d.Rb(7,"mat-form-field",6),d.Mb(8,"input",7),d.Qb(),d.Qb(),d.Rb(9,"div",8),d.Rb(10,"div",9),d.Rb(11,"button",10),d.Zb("click",(function(){return e.cancel()})),d.Ec(12,"Cancel"),d.Qb(),d.Rb(13,"button",11),d.Zb("click",(function(){return e.saveForm()})),d.Ec(14,"Save"),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.Ab(6),d.jc("formGroup",e.form))},directives:[u.G,u.r,u.j,f.c,m.a,u.c,u.q,u.i,r.b],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})();var h=n("Qu3c"),M=n("dEoz");function g(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div",3),d.Rb(1,"model-structure-form",4),d.Zb("onDelete",(function(e){return d.rc(t),d.dc().deleteModel(e)}))("onCancel",(function(e){return d.rc(t),d.dc().cancelEditModel(e)}))("onChange",(function(e){return d.rc(t),d.dc().updateDataModel(e)})),d.Qb(),d.Qb()}if(2&t){const t=d.dc();d.Ab(1),d.jc("dataModel",t.dataModel)}}function v(t,e){1&t&&(d.Rb(0,"div",23),d.Ec(1,"Fields"),d.Qb())}function C(t,e){1&t&&(d.Rb(0,"span",23),d.Ec(1,"[required]"),d.Qb())}function R(t,e){1&t&&(d.Rb(0,"span",34),d.Mb(1,"i",35),d.Qb()),2&t&&d.jc("title","Primary Key")}function Q(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div",26),d.Zb("click",(function(){d.rc(t);const n=e.$implicit;return d.dc(4).editDataField(n)})),d.Rb(1,"div",17),d.Rb(2,"div",27),d.Zb("click",(function(n){d.rc(t);const i=e.$implicit;return d.dc(4).toggleVisibility(i,n)})),d.Mb(3,"i",28),d.Qb(),d.Rb(4,"div",29),d.Ec(5),d.Cc(6,C,2,0,"span",18),d.Cc(7,R,2,1,"span",30),d.Qb(),d.Rb(8,"div",31),d.Ec(9),d.Qb(),d.Rb(10,"div",32),d.Mb(11,"i",33),d.Qb(),d.Qb(),d.Qb()}if(2&t){const t=e.$implicit;d.Ab(3),d.Db("data-property-visible",t.visible)("data-property-hidden",!t.visible),d.Ab(2),d.Gc("",t.name," "),d.Ab(1),d.jc("ngIf",t.required),d.Ab(1),d.jc("ngIf",t.primary),d.Ab(2),d.Fc(t.type)}}function F(t,e){if(1&t&&(d.Rb(0,"div",3),d.Rb(1,"div",24),d.Cc(2,Q,12,8,"div",25),d.Qb(),d.Qb()),2&t){const t=d.dc(3);d.Ab(2),d.jc("ngForOf",t.dataModel.fields)}}function y(t,e){1&t&&(d.Rb(0,"div",36),d.Ec(1," Model has no fields "),d.Qb())}function D(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div"),d.Rb(1,"div",16),d.Rb(2,"div",17),d.Cc(3,v,2,0,"div",18),d.Rb(4,"div",19),d.Zb("click",(function(){return d.rc(t),d.dc(2).addNewField()})),d.Ec(5,"Add Field "),d.Mb(6,"i",20),d.Qb(),d.Qb(),d.Qb(),d.Cc(7,F,3,1,"div",21),d.Cc(8,y,2,0,"div",22),d.Qb()}if(2&t){const t=d.dc(2);d.Ab(3),d.jc("ngIf",t.dataModel.hasFields),d.Ab(4),d.jc("ngIf",t.dataModel.hasFields),d.Ab(1),d.jc("ngIf",!t.dataModel.hasFields)}}function x(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div"),d.Rb(1,"model-property-form",37),d.Zb("onDelete",(function(e){return d.rc(t),d.dc(2).deleteField(e)}))("onCancel",(function(){return d.rc(t),d.dc(2).cancelEditField()}))("onChange",(function(e){return d.rc(t),d.dc(2).updateDataField(e)})),d.Qb(),d.Qb()}if(2&t){const t=d.dc(2);d.Ab(1),d.jc("dataModelField",t.fieldToEdit)}}function k(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div",5),d.Rb(1,"div",6),d.Zb("click",(function(){d.rc(t);const e=d.dc();return e.toggleModelAuth(e.dataModel)})),d.Mb(2,"i",7),d.Qb(),d.Rb(3,"div",8),d.Ec(4),d.Qb(),d.Rb(5,"div",9),d.Zb("click",(function(){return d.rc(t),d.dc().launchConsole()})),d.Mb(6,"i",10),d.Qb(),d.Rb(7,"div",11),d.Zb("click",(function(){return d.rc(t),d.dc().editModel()})),d.Mb(8,"i",12),d.Qb(),d.Qb(),d.Rb(9,"div",13),d.Cc(10,D,9,3,"div",14),d.Cc(11,x,2,1,"ng-template",null,15,d.Dc),d.Qb()}if(2&t){const t=d.oc(12),e=d.dc();d.Ab(1),d.jc("matTooltip",(e.dataModel.authorizationRequired?"Requires":"Does not require")+" user authentication"),d.Ab(1),d.Db("fa-lock",e.dataModel.authorizationRequired)("fa-lock-open",!e.dataModel.authorizationRequired),d.Ab(2),d.Fc(e.dataModel.name),d.Ab(6),d.jc("ngIf",!e.editField)("ngIfElse",t)}}let E=(()=>{class t{constructor(t){this.appConsoleService=t,this.onChange=new d.o,this.onDelete=new d.o,this.edit=!1,this.editField=!1,this.fieldToEdit=null}ngOnInit(){this.dataModel=new s.a(this.dataMember),this.edit=!this.dataModel.name}ngOnDestroy(){}updateDataField(t){this.dataModel.updateField(this.fieldToEdit,t),this.saveModel(),this.cancelEditField()}cancelEditField(){this.fieldToEdit=null,this.editField=!1}editDataField(t){this.fieldToEdit=t,this.editField=!0}addNewField(){const t=s.a.newField();this.dataModel.addField(t),this.editDataField(t)}deleteField(t){this.dataModel.deleteField(t),this.saveModel(),this.cancelEditField()}updateDataModel(t){this.dataModel.name=t.name,this.edit=!1,this.saveModel()}saveModel(){this.onChange.emit(this.dataModel)}editModel(){this.editField=!1,this.edit=!0}deleteModel(t){this.onDelete.emit(t)}cancelEditModel(t){this.edit=!1}launchConsole(){const t=this.dataModel.toJSON();this.appConsoleService.openBluConsole({inputs:{dataModel:t},command:"generate",suggestedNames:[t.name]})}toggleVisibility(t,e){t.visible=!t.visible,e.stopPropagation(),this.saveModel()}toggleModelAuth(t){t.authorizationRequired=!t.authorizationRequired,this.saveModel()}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(b.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["data-model-object"]],inputs:{dataMember:"dataMember"},outputs:{onChange:"onChange",onDelete:"onDelete"},decls:4,vars:2,consts:[[1,"data-model"],["class","",4,"ngIf","ngIfElse"],["displayModel",""],[1,""],[3,"dataModel","onDelete","onCancel","onChange"],[1,"data-model-header","d-flex","align-items-center","border-bottom","p-2"],[1,"pt-1","pr-2","cursor-pointer","text-muted","small",3,"matTooltip","click"],[1,"fa","fa-lock"],[1,"pr-2"],[1,"console","ml-auto","mr-2","cursor-pointer",3,"click"],[1,"fa","fa-terminal","fa-sm"],[1,"cursor-pointer",3,"click"],[1,"fas","fa-cog"],[1,"data-model-body"],[4,"ngIf","ngIfElse"],["dataFields",""],[1,"data-properties-header","p-2"],[1,"d-flex","align-items-center"],["class","small text-muted",4,"ngIf"],[1,"small","cursor-pointer","ml-auto","text-muted",3,"click"],[1,"fa","fa-plus-circle","text-tiny","ml-1"],["class","",4,"ngIf"],["class","text-center p-4 text-muted small",4,"ngIf"],[1,"small","text-muted"],[1,"data-property","cursor-pointer"],["class","p-2",3,"click",4,"ngFor","ngForOf"],[1,"p-2",3,"click"],[1,"",3,"click"],[1,"far","fa-sm","fa-eye"],[1,"pl-2"],["class","text-tiny text-muted",3,"title",4,"ngIf"],[1,"text-muted","small","ml-auto"],[1,"small","pl-3"],[1,"fa","fa-cog"],[1,"text-tiny","text-muted",3,"title"],[1,"fa","fa-key","ml-1"],[1,"text-center","p-4","text-muted","small"],[3,"dataModelField","onDelete","onCancel","onChange"]],template:function(t,e){if(1&t&&(d.Rb(0,"div",0),d.Cc(1,g,2,1,"div",1),d.Cc(2,k,13,8,"ng-template",null,2,d.Dc),d.Qb()),2&t){const t=d.oc(3);d.Ab(1),d.jc("ngIf",e.edit||!e.dataModel.name)("ngIfElse",t)}},directives:[i.t,p,h.a,i.s,M.a],styles:[".data-model[_ngcontent-%COMP%]{width:300px;border-radius:3px;border:1px solid #f1f1f1}.data-model-header[_ngcontent-%COMP%]{background-color:#f1f1f1}.data-properties-header[_ngcontent-%COMP%]{border-bottom:1px solid #f1f1f1}.data-property[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.data-property-hidden[_ngcontent-%COMP%]{opacity:.2;color:#6c757d!important}.data-property-visible[_ngcontent-%COMP%]{opacity:.8;color:#6c757d!important}"]}),t})();function w(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div",4),d.Rb(1,"div",5),d.Rb(2,"data-model-object",6),d.Zb("onDelete",(function(e){return d.rc(t),d.dc().deleteModel(e)}))("onChange",(function(e){return d.rc(t),d.dc().updateDataModel(e)})),d.Qb(),d.Qb(),d.Qb()}if(2&t){const t=e.$implicit;d.Ab(2),d.jc("dataMember",t)}}const A=o.f.forChild([{path:"",component:(()=>{class t{constructor(t,e){this.dataModelService=t,this.dialog=e}ngOnInit(){this.dataModelService.getDataModels().subscribe(t=>this.dataMembers=t)}ngOnDestroy(){}newDataModel(){this.dataModelService.createDataModel().subscribe(t=>{t.success&&this.dataMembers.push(t.dataMember)})}deleteModel(t){this.dialog.open(a.a,{data:{title:"Delete Model?",text:"Deleting this model is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{if(!0===e){const e=this.dataMembers.findIndex(e=>e.id===t.dataMember.id);e>=0&&this.dataModelService.deleteDataModel(t.dataMember.id).subscribe(t=>{this.dataMembers.splice(e,1)})}})}updateDataModel(t){this.dataModelService.updateDataModel(t.dataMember.id,t.toJSON()).subscribe(t=>console.log("model updated:",t))}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(c.a),d.Lb(l.b))},t.\u0275cmp=d.Fb({type:t,selectors:[["data-model-list"]],decls:5,vars:1,consts:[["mat-button","",3,"click"],[1,"fa","fa-plus"],[1,"p-2"],["class","d-inline-block align-top m-2",4,"ngFor","ngForOf"],[1,"d-inline-block","align-top","m-2"],[1,"shadow","rounded","border"],[3,"dataMember","onDelete","onChange"]],template:function(t,e){1&t&&(d.Rb(0,"button",0),d.Zb("click",(function(){return e.newDataModel()})),d.Mb(1,"i",1),d.Ec(2," New Data Model"),d.Qb(),d.Rb(3,"div",2),d.Cc(4,w,3,1,"div",3),d.Qb()),2&t&&(d.Ab(4),d.jc("ngForOf",e.dataMembers))},directives:[r.b,i.s,E],styles:[".model-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:stretch}"]}),t})()}]);var I=n("HSNX"),O=n("QibW"),j=n("d3UM");let S=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,m.b,u.l,r.c,O.c,u.A,j.b]]}),t})(),P=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,I.a,m.b,u.A,r.c,S,h.b]]}),t})();var Z=n("lK0z");let q=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,A,P,r.c,Z.a]]}),t})()},Mzu6:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("0IaG"),o=n("fXoL"),a=n("bTqV");let d=(()=>{class t{constructor(t,e){this.data=t,this.dialogRef=e}ngOnInit(){}ngOnDestroy(){}cancel(){this.dialogRef.close(!1)}confirm(){this.dialogRef.close(!0)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i.a),o.Lb(i.h))},t.\u0275cmp=o.Fb({type:t,selectors:[["confirmation-dialog"]],decls:10,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"p-2","text-center"],["mat-dialog-actions","",3,"align"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"h1",0),o.Ec(1),o.Qb(),o.Rb(2,"div",1),o.Rb(3,"div",2),o.Ec(4),o.Qb(),o.Qb(),o.Rb(5,"div",3),o.Rb(6,"button",4),o.Zb("click",(function(){return e.cancel()})),o.Ec(7),o.Qb(),o.Rb(8,"button",4),o.Zb("click",(function(){return e.confirm()})),o.Ec(9),o.Qb(),o.Qb()),2&t&&(o.Ab(1),o.Fc(e.data.title),o.Ab(3),o.Fc(e.data.text),o.Ab(1),o.jc("align","end"),o.Ab(2),o.Fc(null!=e.data.button&&e.data.button.no?null==e.data.button?null:e.data.button.no:"No"),o.Ab(2),o.Fc(null!=e.data.button&&e.data.button.yes?null==e.data.button?null:e.data.button.yes:"Yes"))},directives:[i.i,i.f,i.c,a.b],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})()}}]);