(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{PHCr:function(e,t,i){"use strict";i.r(t),i.d(t,"DataModelListModule",(function(){return N}));var n=i("ofXK"),o=i("tyNb"),a=i("Mzu6"),d=i("fXoL"),c=i("xiHB"),r=i("0IaG"),l=i("bTqV"),s=i("ziYC"),b=i("a8/g"),u=i("JzR7"),f=i("AZ65"),m=i("STbY"),p=i("3Pt+"),g=i("kmnG"),h=i("qFsG");let M=(()=>{class e{constructor(e){this.fb=e,this.onChange=new d.o,this.onDelete=new d.o,this.onCancel=new d.o}ngOnInit(){this.form=this.fb.group({name:[this.dataModel.name]}),this.form.valueChanges.subscribe(e=>{})}ngOnDestroy(){}saveForm(){this.onChange.emit(this.form.value)}deleteModel(){this.onDelete.emit(this.dataModel)}cancel(){this.onCancel.emit(this.dataModel)}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(p.f))},e.\u0275cmp=d.Fb({type:e,selectors:[["model-structure-form"]],inputs:{dataModel:"dataModel"},outputs:{onChange:"onChange",onDelete:"onDelete",onCancel:"onCancel"},decls:15,vars:1,consts:[[1,"p-2","d-flex","align-items-center","border-bottom"],[1,""],[1,"ml-auto"],[1,"fa","fa-trash","cursor-pointer",3,"click"],[1,"p-2"],[3,"formGroup"],[1,"mat-form-field"],["placeholder","Model Name","matInput","","formControlName","name"],[1,"row"],[1,"col","text-right"],["mat-button","","mat-raised-button","",1,"mr-1",3,"click"],["mat-button","","mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Ec(2,"Model Settings"),d.Qb(),d.Rb(3,"div",2),d.Rb(4,"i",3),d.Zb("click",(function(){return t.deleteModel()})),d.Qb(),d.Qb(),d.Qb(),d.Rb(5,"div",4),d.Rb(6,"form",5),d.Rb(7,"mat-form-field",6),d.Mb(8,"input",7),d.Qb(),d.Qb(),d.Rb(9,"div",8),d.Rb(10,"div",9),d.Rb(11,"button",10),d.Zb("click",(function(){return t.cancel()})),d.Ec(12,"Cancel"),d.Qb(),d.Rb(13,"button",11),d.Zb("click",(function(){return t.saveForm()})),d.Ec(14,"Save"),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.Ab(6),d.jc("formGroup",t.form))},directives:[p.H,p.s,p.k,g.c,h.a,p.c,p.r,p.i,l.b],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e})();var v=i("Qu3c"),x=i("PZ8b");function R(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",9),d.Rb(1,"model-structure-form",10),d.Zb("onDelete",(function(t){return d.rc(e),d.dc().deleteModel(t)}))("onCancel",(function(t){return d.rc(e),d.dc().cancelEditModel(t)}))("onChange",(function(t){return d.rc(e),d.dc().updateDataModel(t)})),d.Qb(),d.Qb()}if(2&e){const e=d.dc();d.Ab(1),d.jc("dataModel",e.dataModel)}}function Q(e,t){1&e&&(d.Rb(0,"div",30),d.Ec(1,"Fields"),d.Qb())}function C(e,t){1&e&&(d.Rb(0,"span",30),d.Ec(1,"[required]"),d.Qb())}function F(e,t){1&e&&(d.Rb(0,"span",41),d.Mb(1,"i",42),d.Qb()),2&e&&d.jc("title","Primary Key")}function D(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",33),d.Zb("click",(function(){d.rc(e);const i=t.$implicit;return d.dc(4).editDataField(i)})),d.Rb(1,"div",24),d.Rb(2,"div",34),d.Zb("click",(function(i){d.rc(e);const n=t.$implicit;return d.dc(4).toggleVisibility(n,i)})),d.Mb(3,"i",35),d.Qb(),d.Rb(4,"div",36),d.Ec(5),d.Cc(6,C,2,0,"span",25),d.Cc(7,F,2,1,"span",37),d.Qb(),d.Rb(8,"div",38),d.Ec(9),d.Qb(),d.Rb(10,"div",39),d.Mb(11,"i",40),d.Qb(),d.Qb(),d.Qb()}if(2&e){const e=t.$implicit;d.Ab(3),d.Db("data-property-visible",e.visible)("data-property-hidden",!e.visible),d.Ab(2),d.Gc("",e.name," "),d.Ab(1),d.jc("ngIf",e.required),d.Ab(1),d.jc("ngIf",e.primary),d.Ab(2),d.Fc(e.type)}}function y(e,t){if(1&e&&(d.Rb(0,"div",9),d.Rb(1,"div",31),d.Cc(2,D,12,8,"div",32),d.Qb(),d.Qb()),2&e){const e=d.dc(3);d.Ab(2),d.jc("ngForOf",e.dataModel.fields)}}function w(e,t){1&e&&(d.Rb(0,"div",43),d.Ec(1," Model has no fields "),d.Qb())}function k(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div"),d.Rb(1,"div",23),d.Rb(2,"div",24),d.Cc(3,Q,2,0,"div",25),d.Rb(4,"div",26),d.Zb("click",(function(){return d.rc(e),d.dc(2).addNewField()})),d.Ec(5,"Add Field "),d.Mb(6,"i",27),d.Qb(),d.Qb(),d.Qb(),d.Cc(7,y,3,1,"div",28),d.Cc(8,w,2,0,"div",29),d.Qb()}if(2&e){const e=d.dc(2);d.Ab(3),d.jc("ngIf",e.dataModel.hasFields),d.Ab(4),d.jc("ngIf",e.dataModel.hasFields),d.Ab(1),d.jc("ngIf",!e.dataModel.hasFields)}}function A(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div"),d.Rb(1,"model-property-form",44),d.Zb("onDelete",(function(t){return d.rc(e),d.dc(2).deleteField(t)}))("onCancel",(function(){return d.rc(e),d.dc(2).cancelEditField()}))("onChange",(function(t){return d.rc(e),d.dc(2).updateDataField(t)})),d.Qb(),d.Qb()}if(2&e){const e=d.dc(2);d.Ab(1),d.jc("dataModelField",e.fieldToEdit)}}function E(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",11),d.Rb(1,"div",12),d.Zb("click",(function(){d.rc(e);const t=d.dc();return t.toggleModelAuth(t.dataModel)})),d.Mb(2,"i",13),d.Qb(),d.Rb(3,"div",14),d.Ec(4),d.Qb(),d.Rb(5,"div",15),d.Mb(6,"i",16),d.Mb(7,"i",17),d.Qb(),d.Rb(8,"div",18),d.Zb("click",(function(){return d.rc(e),d.dc().editModel()})),d.Mb(9,"i",19),d.Qb(),d.Qb(),d.Rb(10,"div",20),d.Cc(11,k,9,3,"div",21),d.Cc(12,A,2,1,"ng-template",null,22,d.Dc),d.Qb()}if(2&e){const e=d.oc(13),t=d.dc(),i=d.oc(5);d.Ab(1),d.jc("matTooltip",(t.dataModel.authorizationRequired?"Requires":"Does not require")+" user authentication"),d.Ab(1),d.Db("fa-lock",t.dataModel.authorizationRequired)("fa-lock-open",!t.dataModel.authorizationRequired),d.Ab(2),d.Fc(t.dataModel.name),d.Ab(1),d.jc("matMenuTriggerFor",i),d.Ab(6),d.jc("ngIf",!t.editField)("ngIfElse",e)}}function O(e,t){if(1&e){const e=d.Sb();d.Pb(0),d.Rb(1,"div",45),d.Zb("click",(function(){d.rc(e);const i=t.$implicit;return d.dc(2).runGenerator(i)})),d.Rb(2,"div",9),d.Mb(3,"i",46),d.Qb(),d.Rb(4,"div"),d.Ec(5),d.Qb(),d.Rb(6,"div",47),d.Rb(7,"span",48),d.Ec(8),d.Qb(),d.Qb(),d.Qb(),d.Ob()}if(2&e){const e=t.$implicit,i=d.dc().$implicit;d.Ab(5),d.Gc(" ",e.name,""),d.Ab(3),d.Gc("(",i.collection.name,")")}}function I(e,t){if(1&e&&(d.Pb(0),d.Cc(1,O,9,2,"ng-container",8),d.Ob()),2&e){const e=t.$implicit;d.Ab(1),d.jc("ngForOf",e.items)}}let j=(()=>{class e{constructor(e,t,i){this.appConsoleService=e,this.bluApiService=t,this.generatorService=i,this.onChange=new d.o,this.onDelete=new d.o,this.edit=!1,this.editField=!1,this.fieldToEdit=null}ngOnInit(){this.dataModel=new s.a(this.dataMember),this.edit=!this.dataModel.name,this.bluApiService.blueprintsItems$.subscribe(e=>{this.generatorGroups=this.generatorService.groupGenerators(e)})}ngOnDestroy(){}updateDataField(e){this.dataModel.updateField(this.fieldToEdit,e),this.saveModel(),this.cancelEditField()}cancelEditField(){this.fieldToEdit=null,this.editField=!1}editDataField(e){this.fieldToEdit=e,this.editField=!0}addNewField(){const e=s.a.newField();this.dataModel.addField(e),this.editDataField(e)}deleteField(e){this.dataModel.deleteField(e),this.saveModel(),this.cancelEditField()}updateDataModel(e){this.dataModel.name=e.name,this.edit=!1,this.saveModel()}saveModel(){this.onChange.emit(this.dataModel)}editModel(){this.editField=!1,this.edit=!0}deleteModel(e){this.onDelete.emit(e)}cancelEditModel(e){this.edit=!1}launchConsole(){const e=this.dataModel.toJSON();this.appConsoleService.openBluConsole({inputs:{dataModel:e},command:"generate",suggestedNames:[e.name]})}toggleVisibility(e,t){e.visible=!e.visible,t.stopPropagation(),this.saveModel()}toggleModelAuth(e){e.authorizationRequired=!e.authorizationRequired,this.saveModel()}runGenerator(e){this.generatorService.editGenerator(e,{dataModel:this.dataModel.toJSON()})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(b.a),d.Lb(u.a),d.Lb(f.a))},e.\u0275cmp=d.Fb({type:e,selectors:[["data-model-object"]],inputs:{dataMember:"dataMember"},outputs:{onChange:"onChange",onDelete:"onDelete"},decls:11,vars:3,consts:[[1,"data-model"],["class","",4,"ngIf","ngIfElse"],["displayModel",""],["xPosition","before"],["allGenerators",""],[1,"p-2"],[1,"text-small","text-muted","p-1","border-bottom"],[1,"pt-2"],[4,"ngFor","ngForOf"],[1,""],[3,"dataModel","onDelete","onCancel","onChange"],[1,"data-model-header","d-flex","align-items-center","border-bottom","p-2"],[1,"pt-1","pr-2","cursor-pointer","text-muted","small",3,"matTooltip","click"],[1,"fa","fa-lock"],[1,"pr-2"],[1,"generator-dropdown","ml-auto","mr-2","cursor-pointer","d-flex","align-items-center",3,"matMenuTriggerFor"],[1,"far","fa-file"],[1,"fa","fa-chevron-down",2,"margin-left","3px","font-size","6px"],[1,"cursor-pointer",3,"click"],[1,"fas","fa-cog"],[1,"data-model-body"],[4,"ngIf","ngIfElse"],["dataFields",""],[1,"data-properties-header","p-2"],[1,"d-flex","align-items-center"],["class","small text-muted",4,"ngIf"],[1,"small","cursor-pointer","ml-auto","text-muted",3,"click"],[1,"fa","fa-plus-circle","text-tiny","ml-1"],["class","",4,"ngIf"],["class","text-center p-4 text-muted small",4,"ngIf"],[1,"small","text-muted"],[1,"data-property","cursor-pointer"],["class","p-2",3,"click",4,"ngFor","ngForOf"],[1,"p-2",3,"click"],[1,"",3,"click"],[1,"far","fa-sm","fa-eye"],[1,"pl-2"],["class","text-tiny text-muted",3,"title",4,"ngIf"],[1,"text-muted","small","ml-auto"],[1,"small","pl-3"],[1,"fa","fa-cog"],[1,"text-tiny","text-muted",3,"title"],[1,"fa","fa-key","ml-1"],[1,"text-center","p-4","text-muted","small"],[3,"dataModelField","onDelete","onCancel","onChange"],[1,"d-flex","align-items-center","generator-dropdown-item",3,"click"],[1,"far","fa-file","mr-1","text-muted"],[1,"ml-auto","pl-4","pr-2"],[1,"text-tiny","text-muted"]],template:function(e,t){if(1&e&&(d.Rb(0,"div",0),d.Cc(1,R,2,1,"div",1),d.Cc(2,E,14,9,"ng-template",null,2,d.Dc),d.Qb(),d.Rb(4,"mat-menu",3,4),d.Rb(6,"div",5),d.Rb(7,"div",6),d.Ec(8,"Use with generator:"),d.Qb(),d.Rb(9,"div",7),d.Cc(10,I,2,1,"ng-container",8),d.Qb(),d.Qb(),d.Qb()),2&e){const e=d.oc(3);d.Ab(1),d.jc("ngIf",t.edit||!t.dataModel.name)("ngIfElse",e),d.Ab(9),d.jc("ngForOf",t.generatorGroups)}},directives:[n.t,m.e,n.s,M,v.a,m.d,x.a],styles:[".data-model[_ngcontent-%COMP%]{width:300px;border-radius:3px;border:1px solid #f1f1f1}.data-model-header[_ngcontent-%COMP%]{background-color:#f1f1f1}.data-properties-header[_ngcontent-%COMP%]{border-bottom:1px solid #f1f1f1}.data-property[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.data-property-hidden[_ngcontent-%COMP%]{opacity:.2;color:#6c757d!important}.data-property-visible[_ngcontent-%COMP%]{opacity:.8;color:#6c757d!important}.generator-dropdown[_ngcontent-%COMP%]{padding:5px;border-radius:5px;border:1px solid transparent}.generator-dropdown[_ngcontent-%COMP%]:hover{border:1px solid hsla(0,0%,72.2%,.5)}.generator-dropdown-item[_ngcontent-%COMP%]{padding:8px;cursor:pointer}.generator-dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f1f1f1;border-radius:5px}"]}),e})();function S(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",14),d.Rb(1,"div",15),d.Ec(2,"You don't have any Data Models in this workspace."),d.Qb(),d.Rb(3,"div",16),d.Rb(4,"button",9),d.Zb("click",(function(){return d.rc(e),d.dc().newDataModel})),d.Mb(5,"i",17),d.Ec(6," Create A Data Model"),d.Qb(),d.Qb(),d.Qb()}}function P(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",18),d.Rb(1,"div",19),d.Rb(2,"data-model-object",20),d.Zb("onDelete",(function(t){return d.rc(e),d.dc().deleteModel(t)}))("onChange",(function(t){return d.rc(e),d.dc().updateDataModel(t)})),d.Qb(),d.Qb(),d.Qb()}if(2&e){const e=t.$implicit;d.Ab(2),d.jc("dataMember",e)}}const Z=o.f.forChild([{path:"",component:(()=>{class e{constructor(e,t){this.dataModelService=e,this.dialog=t}ngOnInit(){this.dataModelService.getDataModels().subscribe(e=>this.dataMembers=e)}ngOnDestroy(){}newDataModel(){this.dataModelService.createDataModel().subscribe(e=>{e.success&&this.dataMembers.push(e.dataMember)})}deleteModel(e){this.dialog.open(a.a,{data:{title:"Delete Model?",text:"Deleting this model is a permanent action and cannot be undone.",button:{yes:"Delete",no:"Cancel"}},position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{if(!0===t){const t=this.dataMembers.findIndex(t=>t.id===e.dataMember.id);t>=0&&this.dataModelService.deleteDataModel(e.dataMember.id).subscribe(e=>{this.dataMembers.splice(t,1)})}})}updateDataModel(e){this.dataModelService.updateDataModel(e.dataMember.id,e.toJSON()).subscribe(e=>console.log("model updated:",e))}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(c.a),d.Lb(r.b))},e.\u0275cmp=d.Fb({type:e,selectors:[["data-model-list"]],decls:17,vars:3,consts:[[1,"pb-2"],[1,"pb-2",2,"border-bottom","1px solid #F1F1F1"],[1,"d-flex",2,"max-width","800px"],[1,""],[1,"text-bold"],[1,"description","text-muted","text-small","as-link-hover",3,"routerLink"],[1,"fa","fa-info-circle","text-tiny","text-muted"],[1,"ml-auto","align-self-end"],[1,"d-flex","align-items-center"],["mat-button","",3,"click"],[1,"fa","fa-plus","text-muted"],[1,"pt-2"],["style","max-width: 500px; padding: 50px;","class","text-center",4,"ngIf"],["class","d-inline-block align-top m-2",4,"ngFor","ngForOf"],[1,"text-center",2,"max-width","500px","padding","50px"],[1,"text-muted"],[1,"pt-3"],[1,"fa","fa-plus","text-small","text-muted"],[1,"d-inline-block","align-top","m-2"],[1,"shadow","rounded","border"],[3,"dataMember","onDelete","onChange"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",2),d.Rb(3,"div",3),d.Rb(4,"div",4),d.Ec(5,"Data Models"),d.Qb(),d.Rb(6,"div",5),d.Ec(7,"Data Models that can be provided as inputs to generators "),d.Mb(8,"i",6),d.Qb(),d.Qb(),d.Rb(9,"div",7),d.Rb(10,"div",8),d.Rb(11,"button",9),d.Zb("click",(function(){return t.newDataModel()})),d.Mb(12,"i",10),d.Ec(13," New Data Model"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(14,"div",11),d.Cc(15,S,7,0,"div",12),d.Cc(16,P,3,1,"div",13),d.Qb()),2&e&&(d.Ab(6),d.jc("routerLink","/documentation/structure/data-models"),d.Ab(9),d.jc("ngIf",0===(null==t.dataMembers?null:t.dataMembers.length)),d.Ab(1),d.jc("ngForOf",t.dataMembers))},directives:[o.d,l.b,n.t,n.s,j],styles:[".model-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:stretch}"]}),e})()}]);var G=i("46Z7"),_=i("QibW"),q=i("d3UM");let T=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,h.b,p.m,l.c,_.c,p.B,q.b]]}),e})(),z=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,G.a,h.b,p.B,l.c,T,v.b,m.c]]}),e})();var L=i("lK0z");let N=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,Z,z,l.c,L.a]]}),e})()}}]);