(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{EAxD:function(t,n,i){"use strict";i.r(n),i.d(n,"FuncViewModule",(function(){return K}));var c=i("ofXK"),e=i("tyNb"),s=i("fXoL"),o=i("quSY"),r=function(t){return t[t.List=0]="List",t[t.View=1]="View",t[t.Create=2]="Create",t[t.Edit=3]="Edit",t[t.Delete=4]="Delete",t}({}),b=i("0KCH"),u=i("bv9b");function a(t,n){if(1&t){const t=s.Tb();s.Sb(0,"tr",12),s.ac("click",(function(){s.sc(t);const i=n.$implicit;return s.ec(3).view(i)})),s.Sb(1,"td",13),s.Ec(2),s.Rb(),s.Sb(3,"td",13),s.Ec(4),s.Rb(),s.Sb(5,"td",13),s.Ec(6),s.Rb(),s.Sb(7,"td",14),s.Sb(8,"button",15),s.ac("click",(function(i){s.sc(t);const c=n.$implicit;return s.ec(3).delete(c),i.stopPropagation()})),s.Ec(9,"Delete"),s.Rb(),s.Sb(10,"button",16),s.ac("click",(function(i){s.sc(t);const c=n.$implicit;return s.ec(3).edit(c),i.stopPropagation()})),s.Ec(11,"Edit"),s.Rb(),s.Rb(),s.Rb()}if(2&t){const t=n.$implicit;s.Bb(2),s.Fc(t.name),s.Bb(2),s.Fc(t.description),s.Bb(2),s.Fc(t.execFunc)}}function f(t,n){if(1&t&&(s.Qb(0,8),s.Sb(1,"table",9),s.Sb(2,"tr"),s.Sb(3,"th",10),s.Ec(4,"Name"),s.Rb(),s.Sb(5,"th",10),s.Ec(6,"Description"),s.Rb(),s.Sb(7,"th",10),s.Ec(8,"Function"),s.Rb(),s.Nb(9,"th",10),s.Rb(),s.Cc(10,a,12,3,"tr",11),s.Rb(),s.Pb()),2&t){const t=s.ec(2);s.Bb(10),s.kc("ngForOf",t.functionsList)}}function l(t,n){if(1&t&&(s.Sb(0,"div",8),s.Cc(1,f,11,1,"ng-container",5),s.Rb()),2&t){const t=s.ec(),n=s.pc(13);s.Bb(1),s.kc("ngIf",!t.error)("ngIfElse",n)}}function d(t,n){1&t&&(s.Sb(0,"div",17),s.Nb(1,"mat-progress-bar",18),s.Rb())}function m(t,n){1&t&&(s.Sb(0,"span"),s.Ec(1," Permission denied."),s.Rb())}function p(t,n){if(1&t&&(s.Sb(0,"span"),s.Ec(1),s.Rb()),2&t){const t=s.ec(2);s.Bb(1),s.Fc(t.error)}}function h(t,n){if(1&t&&(s.Sb(0,"div",19),s.Nb(1,"i",20),s.Sb(2,"span",21),s.Cc(3,m,2,0,"span",22),s.Cc(4,p,2,1,"span",23),s.Rb(),s.Rb()),2&t){const t=s.ec();s.Bb(2),s.kc("ngSwitch",t.error),s.Bb(1),s.kc("ngSwitchCase","permission-denied")}}let S=(()=>{class t{constructor(t,n,i){this.functionsService=t,this.router=n,this.activatedRoute=i,this.subs=new o.a}ngOnInit(){this.getList()}ngOnDestroy(){this.subs.unsubscribe()}getList(){this.acquiring=!0,this.error=null,this.functionsService.getAll().subscribe(t=>{this.acquiring=!1,this.functionsList=t},t=>{this.error=t.code,this.acquiring=!1})}view(t){this.functionsService.goToSection(r.Edit,t)}create(){this.functionsService.goToSection(r.Create,null)}edit(t){this.functionsService.goToSection(r.Edit,t)}delete(t){this.functionsService.delete(t).subscribe(t=>{this.getList()})}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(b.a),s.Mb(e.b),s.Mb(e.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions-list"]],decls:14,vars:2,consts:[[1,"breadcrumb"],[1,"breadcrumb-item","cursor-pointer"],[1,"breadcrumb-item","cursor-pointer","text-bold","text-primary"],[1,"ml-auto"],[1,"btn","btn-primary",3,"click"],["class","",4,"ngIf","ngIfElse"],["loading",""],["showError",""],[1,""],[1,"table","border-top-0"],[1,"border-top-0"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"cursor-pointer"],[1,"text-right"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-primary","mr-2",3,"click"],[1,"p-2"],["mode","indeterminate"],[1,"p-2","text-center","text-warning"],[1,"fa","fa-exclamation-triangle","text-warning"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,n){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Ec(2,"Function"),s.Rb(),s.Sb(3,"div",2),s.Ec(4,"List"),s.Rb(),s.Sb(5,"div",3),s.Sb(6,"button",4),s.ac("click",(function(){return n.create()})),s.Ec(7,"+ Add Function"),s.Rb(),s.Rb(),s.Rb(),s.Sb(8,"div"),s.Cc(9,l,2,2,"div",5),s.Rb(),s.Cc(10,d,2,0,"ng-template",null,6,s.Dc),s.Cc(12,h,5,2,"ng-template",null,7,s.Dc)),2&t){const t=s.pc(11);s.Bb(9),s.kc("ngIf",!n.acquiring)("ngIfElse",t)}},directives:[c.t,c.s,u.a,c.x,c.y,c.z],styles:[""]}),t})();var v=i("3Pt+"),g=i("kmnG"),R=i("qFsG"),k=i("1jDz");function E(t,n){1&t&&(s.Sb(0,"mat-error"),s.Ec(1,"Input is required"),s.Rb())}function w(t,n){1&t&&(s.Sb(0,"span",12),s.Nb(1,"i",13),s.Ec(2," Valid"),s.Rb())}let I=(()=>{class t{constructor(t){this.fb=t,this.model={},this.form=new s.o,this.editorOptions={language:"javascript"},this.validFunction=!1}ngOnInit(){var t,n;this.functionText=""+(null!==(n=null===(t=this.model)||void 0===t?void 0:t.execFunc)&&void 0!==n?n:""),this.initForm(),this.formGroup.valueChanges.subscribe(t=>{}),this.form.emit(this.formGroup)}initForm(){this.formGroup=this.fb.group({name:[this.model.name,[v.E.required]],description:[this.model.description,[]],execFunc:[this.model.execFunc,[v.E.required]]})}get f(){return this.formGroup.controls}addItem(t){this.f[t].push(this.fb.control(""))}deleteItem(t,n){this.f[t].removeAt(n)}ngOnDestroy(){}saveFunction(t){this.validFunction=!1;try{if("function"!=typeof eval.call(null,`({execFunc:${t}})`).execFunc)throw{message:"Must be a function"};this.validFunction=!0,this.f.execFunc.setValue(t)}catch(n){this.f.execFunc.setValue("")}}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(v.f))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions-form"]],inputs:{model:"model"},outputs:{form:"form"},decls:16,vars:6,consts:[[1,"mat-form",3,"formGroup"],[1,""],[1,"w-100"],["placeholder","Function name","type","text","matInput","","formControlName","name","required",""],[4,"ngIf"],["placeholder","Function Description","type","text","matInput","","formControlName","description"],[1,"row"],[1,"col"],[1,"pb-1","d-flex"],[1,"ml-auto"],["class","text-success",4,"ngIf"],[3,"text","editorOptions","height","onContentChange"],[1,"text-success"],[1,"fa","fa-check-circle"]],template:function(t,n){1&t&&(s.Sb(0,"form",0),s.Sb(1,"div",1),s.Sb(2,"mat-form-field",2),s.Nb(3,"input",3),s.Cc(4,E,2,0,"mat-error",4),s.Rb(),s.Rb(),s.Sb(5,"div",1),s.Sb(6,"mat-form-field",2),s.Nb(7,"textarea",5),s.Rb(),s.Rb(),s.Rb(),s.Sb(8,"div",6),s.Sb(9,"div",7),s.Sb(10,"div",8),s.Sb(11,"div"),s.Ec(12,"Javascript Function:"),s.Rb(),s.Sb(13,"div",9),s.Cc(14,w,3,0,"span",10),s.Rb(),s.Rb(),s.Sb(15,"file-editor",11),s.ac("onContentChange",(function(t){return n.saveFunction(t)})),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.kc("formGroup",n.formGroup),s.Bb(4),s.kc("ngIf",null==n.f.name||null==n.f.name.errors?null:n.f.name.errors.required),s.Bb(10),s.kc("ngIf",n.validFunction),s.Bb(1),s.kc("text",n.functionText)("editorOptions",n.editorOptions)("height","400px"))},directives:[v.G,v.r,v.j,g.c,R.a,v.c,v.q,v.i,v.B,c.t,k.a,g.b],styles:[""]}),t})();function C(t,n){1&t&&(s.Sb(0,"span"),s.Ec(1," Permission denied."),s.Rb())}function y(t,n){if(1&t&&(s.Sb(0,"span"),s.Ec(1),s.Rb()),2&t){const t=s.ec(2);s.Bb(1),s.Fc(t.error)}}function B(t,n){if(1&t&&(s.Sb(0,"div"),s.Sb(1,"div",9),s.Nb(2,"i",10),s.Sb(3,"span",11),s.Cc(4,C,2,0,"span",12),s.Cc(5,y,2,1,"span",13),s.Rb(),s.Rb(),s.Rb()),2&t){const t=s.ec();s.Bb(3),s.kc("ngSwitch",t.error),s.Bb(1),s.kc("ngSwitchCase","permission-denied")}}let F=(()=>{class t{constructor(t){this.functionsService=t,this.isInvalid=!0,this.subs=new o.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}cancel(){this.goBack()}save(){this.functionsService.create(this.form.value).subscribe(t=>{this.goBack()},t=>{this.error=t.code})}setForm(t){this.form=t,this.form.valueChanges.subscribe(t=>this.isInvalid=this.form.invalid),setTimeout(()=>{var t;return this.isInvalid=null===(t=this.form)||void 0===t?void 0:t.invalid},0)}goBack(){this.functionsService.goToSection(r.List,null)}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(b.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions-create"]],decls:13,vars:2,consts:[[1,"breadcrumb"],[1,"breadcrumb-item","cursor-pointer",3,"click"],[1,"breadcrumb-item","cursor-pointer","text-bold","text-primary"],[1,"p-2"],[3,"form"],[4,"ngIf"],[1,"pt-2"],[1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"py-2","text-warning"],[1,"fa","fa-exclamation-triangle","text-warning"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,n){1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.ac("click",(function(){return n.goBack()})),s.Ec(2,"Function"),s.Rb(),s.Sb(3,"div",2),s.Ec(4,"Create"),s.Rb(),s.Rb(),s.Sb(5,"div",3),s.Sb(6,"functions-form",4),s.ac("form",(function(t){return n.setForm(t)})),s.Rb(),s.Cc(7,B,6,2,"div",5),s.Sb(8,"div",6),s.Sb(9,"button",7),s.ac("click",(function(){return n.cancel()})),s.Ec(10,"Cancel"),s.Rb(),s.Sb(11,"button",8),s.ac("click",(function(){return n.save()})),s.Ec(12,"Save"),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(7),s.kc("ngIf",n.error),s.Bb(4),s.kc("disabled",n.isInvalid))},directives:[I,c.t,c.x,c.y,c.z],styles:[""]}),t})();function x(t,n){if(1&t){const t=s.Tb();s.Sb(0,"functions-form",11),s.ac("form",(function(n){return s.sc(t),s.ec(2).setForm(n)})),s.Rb()}if(2&t){const t=s.ec(2);s.kc("model",t.functions)}}function D(t,n){1&t&&(s.Sb(0,"span"),s.Ec(1," Permission denied."),s.Rb())}function O(t,n){if(1&t&&(s.Sb(0,"span"),s.Ec(1),s.Rb()),2&t){const t=s.ec(3);s.Bb(1),s.Fc(t.error)}}function N(t,n){if(1&t&&(s.Sb(0,"div"),s.Sb(1,"div",12),s.Nb(2,"i",13),s.Sb(3,"span",14),s.Cc(4,D,2,0,"span",15),s.Cc(5,O,2,1,"span",16),s.Rb(),s.Rb(),s.Rb()),2&t){const t=s.ec(2);s.Bb(3),s.kc("ngSwitch",t.error),s.Bb(1),s.kc("ngSwitchCase","permission-denied")}}function G(t,n){if(1&t){const t=s.Tb();s.Sb(0,"div"),s.Cc(1,x,1,1,"functions-form",6),s.Cc(2,N,6,2,"div",7),s.Sb(3,"div",8),s.Sb(4,"button",9),s.ac("click",(function(){return s.sc(t),s.ec().cancel()})),s.Ec(5,"Cancel"),s.Rb(),s.Sb(6,"button",10),s.ac("click",(function(){return s.sc(t),s.ec().save()})),s.Ec(7,"Save"),s.Rb(),s.Rb(),s.Rb()}if(2&t){const t=s.ec();s.Bb(1),s.kc("ngIf",t.functions),s.Bb(1),s.kc("ngIf",t.error),s.Bb(4),s.kc("disabled",t.isInvalid)}}function T(t,n){1&t&&(s.Sb(0,"div",3),s.Nb(1,"mat-progress-bar",17),s.Rb())}let L=(()=>{class t{constructor(t){this.functionsService=t,this.isInvalid=!0,this.subs=new o.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}getItem(){}cancel(){this.goBack()}save(){this.error=null,console.log("huh?",this.functions),this.functions.update(this.form.value),this.functionsService.update(this.functions).subscribe(t=>{this.goBack()},t=>{this.error=t.code})}setForm(t){this.form=t,this.form.valueChanges.subscribe(t=>this.isInvalid=this.form.invalid),setTimeout(()=>{var t;return this.isInvalid=null===(t=this.form)||void 0===t?void 0:t.invalid},0)}goBack(){this.functionsService.goToSection(r.List,null)}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(b.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions-edit"]],inputs:{functions:"functions"},decls:9,vars:2,consts:[[1,"breadcrumb"],[1,"breadcrumb-item","cursor-pointer",3,"click"],[1,"breadcrumb-item","cursor-pointer","text-bold","text-primary"],[1,"p-2"],[4,"ngIf","ngIfElse"],["loading",""],[3,"model","form",4,"ngIf"],[4,"ngIf"],[1,"pt-2"],[1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"],[3,"model","form"],[1,"py-2","text-warning"],[1,"fa","fa-exclamation-triangle","text-warning"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","indeterminate"]],template:function(t,n){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.ac("click",(function(){return n.goBack()})),s.Ec(2,"Function"),s.Rb(),s.Sb(3,"div",2),s.Ec(4,"Edit"),s.Rb(),s.Rb(),s.Sb(5,"div",3),s.Cc(6,G,8,3,"div",4),s.Rb(),s.Cc(7,T,2,0,"ng-template",null,5,s.Dc)),2&t){const t=s.pc(8);s.Bb(6),s.kc("ngIf",!n.acquiring)("ngIfElse",t)}},directives:[c.t,I,c.x,c.y,c.z,u.a],styles:[""]}),t})();function q(t,n){if(1&t){const t=s.Tb();s.Sb(0,"div"),s.Sb(1,"table",5),s.Sb(2,"tr"),s.Sb(3,"th"),s.Ec(4,"Property"),s.Rb(),s.Sb(5,"th"),s.Ec(6,"Value"),s.Rb(),s.Rb(),s.Sb(7,"tr"),s.Sb(8,"td"),s.Ec(9,"name"),s.Rb(),s.Sb(10,"td"),s.Ec(11),s.Rb(),s.Rb(),s.Sb(12,"tr"),s.Sb(13,"td"),s.Ec(14,"description"),s.Rb(),s.Sb(15,"td"),s.Ec(16),s.Rb(),s.Rb(),s.Sb(17,"tr"),s.Sb(18,"td"),s.Ec(19,"Function"),s.Rb(),s.Sb(20,"td"),s.Ec(21),s.Rb(),s.Rb(),s.Rb(),s.Sb(22,"div",6),s.Sb(23,"button",7),s.ac("click",(function(){return s.sc(t),s.ec().cancel()})),s.Ec(24,"Back"),s.Rb(),s.Sb(25,"button",7),s.ac("click",(function(){return s.sc(t),s.ec().delete()})),s.Ec(26,"Delete"),s.Rb(),s.Sb(27,"button",8),s.ac("click",(function(){return s.sc(t),s.ec().edit()})),s.Ec(28,"Edit"),s.Rb(),s.Rb(),s.Rb()}if(2&t){const t=s.ec();s.Bb(11),s.Fc(t.functions.name),s.Bb(5),s.Fc(t.functions.description),s.Bb(5),s.Fc(t.functions.execFunc)}}function M(t,n){1&t&&(s.Sb(0,"div",9),s.Nb(1,"mat-progress-bar",10),s.Rb())}let P=(()=>{class t{constructor(t,n,i,c){this.functionsService=t,this.router=n,this.activatedRoute=i,this.location=c}ngOnInit(){}ngOnDestroy(){}edit(){this.functionsService.goToSection(r.Edit,this.functions)}delete(){this.functionsService.delete(this.functions),this.functionsService.goToSection(r.List,null)}cancel(){this.goBack()}goBack(){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(b.a),s.Mb(e.b),s.Mb(e.a),s.Mb(c.n))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions-view"]],inputs:{functions:"functions"},decls:8,vars:2,consts:[[1,"breadcrumb"],[1,"breadcrumb-item","cursor-pointer",3,"click"],[1,"breadcrumb-item","cursor-pointer","text-bold","text-primary"],[4,"ngIf","ngIfElse"],["loading",""],[1,"table","w-100"],[1,""],[1,"btn","btn-outline-primary","mr-1",3,"click"],[1,"btn","btn-outline-primary","mr-2",3,"click"],[1,"p-2"],["mode","indeterminate"]],template:function(t,n){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.ac("click",(function(){return n.goBack()})),s.Ec(2,"Function"),s.Rb(),s.Sb(3,"div",2),s.Ec(4,"View"),s.Rb(),s.Rb(),s.Cc(5,q,29,3,"div",3),s.Cc(6,M,2,0,"ng-template",null,4,s.Dc)),2&t){const t=s.pc(7);s.Bb(5),s.kc("ngIf",!n.acquiring)("ngIfElse",t)}},directives:[c.t,u.a],styles:[""]}),t})();function V(t,n){1&t&&(s.Sb(0,"div",2),s.Nb(1,"functions-list"),s.Rb())}function $(t,n){1&t&&(s.Sb(0,"div",2),s.Nb(1,"functions-create"),s.Rb())}function z(t,n){if(1&t&&(s.Sb(0,"div",2),s.Nb(1,"functions-edit",3),s.Rb()),2&t){const t=s.ec();s.Bb(1),s.kc("functions",t.selectedItem)}}function U(t,n){if(1&t&&(s.Sb(0,"div",2),s.Nb(1,"functions-view",3),s.Rb()),2&t){const t=s.ec();s.Bb(1),s.kc("functions",t.selectedItem)}}let j=(()=>{class t{constructor(t){this.functionsService=t,this.onUpdate=new s.o,this.subs=new o.a,this.currentSection=r.List,this.sections=r}ngOnInit(){this.functionsService.setCollection(this.functions),this.functionsService.goToSection(r.List,null),this.subs.add(this.functionsService.currentSection$.subscribe(t=>{this.selectedItem=t.item,this.currentSection=t.section})),this.subs.add(this.functionsService.onUpdate$.subscribe(t=>this.onUpdate.emit(t)))}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(b.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["functions"]],inputs:{functions:"functions"},outputs:{onUpdate:"onUpdate"},decls:5,vars:4,consts:[[1,"p-2",2,"background-color","#ffffff"],["class","",4,"ngIf"],[1,""],[3,"functions"]],template:function(t,n){1&t&&(s.Sb(0,"div",0),s.Cc(1,V,2,0,"div",1),s.Cc(2,$,2,0,"div",1),s.Cc(3,z,2,1,"div",1),s.Cc(4,U,2,1,"div",1),s.Rb()),2&t&&(s.Bb(1),s.kc("ngIf",n.currentSection===n.sections.List),s.Bb(1),s.kc("ngIf",n.currentSection===n.sections.Create),s.Bb(1),s.kc("ngIf",n.currentSection===n.sections.Edit),s.Bb(1),s.kc("ngIf",n.currentSection===n.sections.View))},directives:[c.t,S,F,L,P],styles:[""]}),t})();const A=e.f.forChild([{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["func-view"]],decls:1,vars:0,template:function(t,n){1&t&&s.Nb(0,"functions")},directives:[j],styles:[""]}),t})()}]);var J=i("Pnzg");let K=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[c.c,A,J.a]]}),t})()}}]);