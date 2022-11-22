(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1TnD":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("ZJV+"),r=a("QxDP"),n=a("lJxs"),o=a("fXoL"),c=a("biaL");let d=(()=>{class t{constructor(t,e){this.httpService=t,this.userService=e,this.ServiceAPIEndpoint=i.a.PROXY_PREFIX+"/organizations",this.userService.user$.subscribe(t=>{this.user=t})}getOrganizationsForUser(t){return this.httpService.get(`${this.ServiceAPIEndpoint}/forUser/${t}`).pipe(Object(n.a)(t=>t.map(t=>new r.a(t))))}createOrganization(t,e){return this.httpService.post(this.ServiceAPIEndpoint+"/claim",{displayName:t,prefix:e})}deleteOrganization(t){return this.httpService.delete(`${this.ServiceAPIEndpoint}/${t}`)}getMembers(t){return this.httpService.get(`${this.ServiceAPIEndpoint}/${t}/members`)}updateMemberPermission(t,e,a){return this.httpService.put(`${this.ServiceAPIEndpoint}/${t}/member/permission`,{uid:e,permission:a})}addMember(t,e,a){return this.httpService.post(`${this.ServiceAPIEndpoint}/${t}/member`,{email:e,permission:a})}revokeMember(t,e){return this.httpService.delete(`${this.ServiceAPIEndpoint}/${t}/member/${e}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Vb(i.a),o.Vb(c.a))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"46Z7":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("ofXK"),r=a("bTqV"),n=a("qFsG"),o=a("QibW"),c=a("d3UM"),d=a("3Pt+"),s=a("fXoL");let l=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,n.b,d.m,r.c,o.c,d.B,c.b]]}),t})()},ByjF:function(t,e,a){"use strict";a.d(e,"a",(function(){return Q}));var i=a("0IaG"),r=a("3Pt+"),n=a("quSY"),o=a("aSHc"),c=a("fXoL"),d=a("n2Wo"),s=a("kmnG"),l=a("d3UM"),b=a("FKr1"),m=a("ofXK"),u=a("qFsG"),f=a("bTqV");function p(t,e){if(1&t&&(c.Rb(0,"mat-option",7),c.Ec(1),c.Qb()),2&t){const t=e.$implicit;c.jc("value",t.id),c.Ab(1),c.Fc(t.name)}}function h(t,e){1&t&&(c.Rb(0,"mat-form-field",5),c.Mb(1,"input",14),c.Qb())}function v(t,e){if(1&t&&(c.Rb(0,"div",15),c.Mb(1,"i",16),c.Rb(2,"span"),c.Ec(3," Collection: "),c.Rb(4,"span",3),c.Ec(5),c.Qb(),c.Ec(6," added to stack!"),c.Qb(),c.Qb()),2&t){const t=c.dc();c.Ab(5),c.Gc(" ",t.data.collection.name," ")}}function g(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",17),c.Rb(1,"button",18),c.Ec(2,"Cancel"),c.Qb(),c.Rb(3,"button",19),c.Zb("click",(function(){return c.rc(t),c.dc().add()})),c.Ec(4,"Add"),c.Qb(),c.Qb()}if(2&t){const t=c.dc();c.Ab(3),c.jc("disabled",!t.form.valid)}}function R(t,e){1&t&&(c.Rb(0,"div",17),c.Rb(1,"button",18),c.Ec(2,"Close"),c.Qb(),c.Qb())}let Q=(()=>{class t{constructor(t,e,a,i){this.fb=t,this.stackService=e,this.data=a,this.dialogRef=i,this.actionState=o.a,this.currentState=o.a.IDLE,this.subs=new n.a,this.form=this.fb.group({stack:["",[r.F.required]],newStackName:[""]})}ngOnInit(){this.subs.add(this.stackService.getLocalStacks().subscribe(t=>this.stacks=t)),this.form.valueChanges.subscribe(t=>{this.createNewStack="create-new-stack"===t.stack,this.form.get("newStackName").setValidators(this.createNewStack?[r.F.required]:[])})}ngOnDestroy(){}close(){this.dialogRef.close(this.form.value)}add(){const t=this.stacks.find(t=>t.id=this.form.value.stack);this.addToStack(t.id,this.data.collection.name,this.data.collection.id).subscribe(t=>{this.currentState=this.actionState.SUCCESS},t=>this.currentState=this.actionState.FAILED)}addToStack(t,e,a){return this.stackService.addCollectionToStack(t,e,a)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(r.f),c.Lb(d.a),c.Lb(i.a),c.Lb(i.h))},t.\u0275cmp=c.Fb({type:t,selectors:[["add-to-stack"]],decls:23,vars:9,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"p-2"],[1,"text-bold"],[3,"formGroup"],[1,"mat-form-field"],["formControlName","stack"],[3,"value"],[1,"fa","fa-plus-circle"],[3,"value",4,"ngFor","ngForOf"],["class","mat-form-field",4,"ngIf"],["class","p-2 text-center",4,"ngIf"],["mat-dialog-actions","",3,"align"],["class","text-right",4,"ngIf"],["matInput","","placeholder","New Stack Name","formControlName","newStackName"],[1,"p-2","text-center"],[1,"fa","fa-check","text-success"],[1,"text-right"],["mat-button","","mat-dialog-close",""],["mat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(c.Rb(0,"h1",0),c.Ec(1,"Add Collection To Stack"),c.Qb(),c.Rb(2,"div",1),c.Rb(3,"div",2),c.Rb(4,"p"),c.Ec(5,"Add collection: "),c.Rb(6,"span",3),c.Ec(7),c.Qb(),c.Ec(8," to stack:"),c.Qb(),c.Qb(),c.Rb(9,"form",4),c.Rb(10,"mat-form-field",5),c.Rb(11,"mat-label"),c.Ec(12,"Select stack:"),c.Qb(),c.Rb(13,"mat-select",6),c.Rb(14,"mat-option",7),c.Mb(15,"i",8),c.Ec(16," Create New Stack"),c.Qb(),c.Cc(17,p,2,2,"mat-option",9),c.Qb(),c.Qb(),c.Cc(18,h,2,0,"mat-form-field",10),c.Qb(),c.Cc(19,v,7,1,"div",11),c.Qb(),c.Rb(20,"div",12),c.Cc(21,g,5,1,"div",13),c.Cc(22,R,3,0,"div",13),c.Qb()),2&t&&(c.Ab(7),c.Gc(" ",e.data.collection.name," "),c.Ab(2),c.jc("formGroup",e.form),c.Ab(5),c.jc("value","create-new-stack"),c.Ab(3),c.jc("ngForOf",e.stacks),c.Ab(1),c.jc("ngIf",e.createNewStack),c.Ab(1),c.jc("ngIf",e.currentState===e.actionState.SUCCESS),c.Ab(1),c.jc("align","end"),c.Ab(1),c.jc("ngIf",e.currentState!==e.actionState.SUCCESS),c.Ab(1),c.jc("ngIf",e.currentState===e.actionState.SUCCESS))},directives:[i.i,i.f,r.H,r.s,r.k,s.c,s.g,l.a,r.r,r.i,b.l,m.s,m.t,i.c,u.a,r.c,f.b,i.d],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})()},PZ8b:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var i=a("fXoL"),r=a("3Pt+"),n=a("kmnG"),o=a("qFsG"),c=a("ofXK"),d=a("d3UM"),s=a("FKr1"),l=a("QibW"),b=a("bTqV");function m(t,e){1&t&&(i.Rb(0,"mat-error"),i.Ec(1,"Input is required"),i.Qb())}function u(t,e){1&t&&(i.Rb(0,"mat-error"),i.Ec(1,"Input is required"),i.Qb())}function f(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",32),i.Rb(1,"div",33),i.Rb(2,"mat-form-field"),i.Mb(3,"input",34),i.Qb(),i.Qb(),i.Rb(4,"div",29),i.Zb("click",(function(){i.rc(t);const a=e.index;return i.dc(2).deleteItem("values",a)})),i.Mb(5,"i",35),i.Qb(),i.Qb()}if(2&t){const t=e.index;i.Ab(3),i.jc("formControlName",t)}}function p(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div"),i.Rb(1,"div",2),i.Rb(2,"div",3),i.Rb(3,"div",0),i.Rb(4,"mat-radio-group",20),i.Rb(5,"label",21),i.Ec(6,"Unique: "),i.Qb(),i.Rb(7,"span",12),i.Rb(8,"mat-radio-button",13),i.Ec(9,"True"),i.Qb(),i.Qb(),i.Rb(10,"span",12),i.Rb(11,"mat-radio-button",13),i.Ec(12,"False"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(13,"div",2),i.Rb(14,"div",3),i.Rb(15,"div",0),i.Rb(16,"mat-radio-group",22),i.Rb(17,"label",23),i.Ec(18,"Primary Key: "),i.Qb(),i.Rb(19,"span",12),i.Rb(20,"mat-radio-button",13),i.Ec(21,"True"),i.Qb(),i.Qb(),i.Rb(22,"span",12),i.Rb(23,"mat-radio-button",13),i.Ec(24,"False"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(25,"div",2),i.Rb(26,"div",3),i.Rb(27,"mat-form-field",7),i.Mb(28,"input",24),i.Qb(),i.Qb(),i.Qb(),i.Rb(29,"div",2),i.Rb(30,"div",3),i.Rb(31,"mat-form-field",7),i.Mb(32,"input",25),i.Qb(),i.Qb(),i.Qb(),i.Rb(33,"div",2),i.Rb(34,"div",3),i.Rb(35,"mat-form-field",7),i.Mb(36,"input",26),i.Qb(),i.Qb(),i.Qb(),i.Rb(37,"div",2),i.Rb(38,"div",3),i.Rb(39,"div",27),i.Rb(40,"div",28),i.Rb(41,"div"),i.Rb(42,"h6"),i.Ec(43,"Default Value(s)"),i.Qb(),i.Qb(),i.Rb(44,"div",29),i.Zb("click",(function(){return i.rc(t),i.dc().addItem("values")})),i.Mb(45,"i",30),i.Qb(),i.Qb(),i.Cc(46,f,6,1,"div",31),i.Qb(),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.dc();i.Ab(8),i.jc("value",!0),i.Ab(3),i.jc("value",!1),i.Ab(9),i.jc("value",!0),i.Ab(3),i.jc("value",!1),i.Ab(23),i.jc("ngForOf",null==t.f.values?null:t.f.values.controls)}}let h=(()=>{class t{constructor(t){this.fb=t,this.onChange=new i.o,this.onDelete=new i.o,this.onCancel=new i.o}ngOnInit(){this.form=this.fb.group({name:[this.dataModelField.name,[r.F.required]],type:[this.dataModelField.type,[r.F.required]],required:[this.dataModelField.required],unique:[this.dataModelField.unique],primary:[this.dataModelField.primary],description:[this.dataModelField.description],label:[this.dataModelField.label],validationRegex:[this.dataModelField.validationRegex],visible:[this.dataModelField.visible],values:this.fb.array(this.dataModelField.values||[])}),this.form.valueChanges.subscribe(t=>{})}get f(){return this.form.controls}addItem(t){this.f[t].push(this.fb.control(""))}deleteItem(t,e){this.f[t].removeAt(e)}ngOnDestroy(){}cancel(){this.onCancel.emit(this.dataModelField)}saveForm(){this.onChange.emit(this.form.value)}deleteField(){this.onDelete.emit(this.dataModelField)}toggleMoreOptions(){this.showMoreOptions=!this.showMoreOptions}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(r.f))},t.\u0275cmp=i.Fb({type:t,selectors:[["model-property-form"]],inputs:{dataModelField:"dataModelField"},outputs:{onChange:"onChange",onDelete:"onDelete",onCancel:"onCancel"},decls:58,vars:18,consts:[[1,""],[1,"mat-form",3,"formGroup"],[1,"form-field-item"],[1,"form-field-holder"],["appearance","outline",1,"mat-form-field"],["placeholder","Field Name","matInput","","formControlName","name","required",""],[4,"ngIf"],[1,"mat-form-field"],["formControlName","type","required",""],[3,"value"],["aria-label","Select an option","formControlName","required",1,"mat-radio-group"],["id","required-radio-group"],[1,"ml-4"],[1,"mat-radio-button",3,"value"],[1,"p-3","text-center","text-muted","cursor-pointer",3,"click"],[1,"row"],[1,"col","text-right"],[1,"p-2","pt-4"],["mat-button","","mat-raised-button","",1,"mr-2",3,"click"],["mat-button","","mat-raised-button","",3,"click"],["aria-label","Select an option","formControlName","unique",1,"mat-radio-group"],["id","unique-radio-group"],["formControlName","primary",1,"mat-radio-group"],["id","primary-radio-group"],["placeholder","Label","matInput","","formControlName","label"],["placeholder","Description","matInput","","formControlName","description"],["placeholder","Validation Regex","matInput","","formControlName","validationRegex"],["formArrayName","values",1,"form-array-group"],[1,"d-flex","align-items-center","group-header"],[1,"ml-auto","cursor-pointer",3,"click"],[1,"fa","fa-plus-circle"],["class","d-flex align-items-center",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],[1,"w-100","pr-3"],["placeholder","Value","matInput","",3,"formControlName"],[1,"fa","fa-trash"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"form",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"mat-form-field",4),i.Mb(5,"input",5),i.Cc(6,m,2,0,"mat-error",6),i.Qb(),i.Qb(),i.Qb(),i.Rb(7,"div",2),i.Rb(8,"div",3),i.Rb(9,"mat-form-field",7),i.Rb(10,"mat-label"),i.Ec(11,"Type"),i.Qb(),i.Rb(12,"mat-select",8),i.Rb(13,"mat-option",9),i.Ec(14,"String"),i.Qb(),i.Rb(15,"mat-option",9),i.Ec(16,"Int"),i.Qb(),i.Rb(17,"mat-option",9),i.Ec(18,"Boolean"),i.Qb(),i.Rb(19,"mat-option",9),i.Ec(20,"Date"),i.Qb(),i.Rb(21,"mat-option",9),i.Ec(22,"JSON"),i.Qb(),i.Rb(23,"mat-option",9),i.Ec(24,"Email"),i.Qb(),i.Rb(25,"mat-option",9),i.Ec(26,"Password"),i.Qb(),i.Rb(27,"mat-option",9),i.Ec(28,"Number"),i.Qb(),i.Rb(29,"mat-option",9),i.Ec(30,"Decimal"),i.Qb(),i.Rb(31,"mat-option",9),i.Ec(32,"List"),i.Qb(),i.Rb(33,"mat-option",9),i.Ec(34,"Array"),i.Qb(),i.Qb(),i.Cc(35,u,2,0,"mat-error",6),i.Qb(),i.Qb(),i.Qb(),i.Rb(36,"div",2),i.Rb(37,"div",3),i.Rb(38,"div",0),i.Rb(39,"mat-radio-group",10),i.Rb(40,"label",11),i.Ec(41,"Required: "),i.Qb(),i.Rb(42,"span",12),i.Rb(43,"mat-radio-button",13),i.Ec(44,"True"),i.Qb(),i.Qb(),i.Rb(45,"span",12),i.Rb(46,"mat-radio-button",13),i.Ec(47,"False"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(48,"div",14),i.Zb("click",(function(){return e.toggleMoreOptions()})),i.Ec(49),i.Qb(),i.Cc(50,p,47,5,"div",6),i.Qb(),i.Rb(51,"div",15),i.Rb(52,"div",16),i.Rb(53,"div",17),i.Rb(54,"button",18),i.Zb("click",(function(){return e.cancel()})),i.Ec(55,"Cancel"),i.Qb(),i.Rb(56,"button",19),i.Zb("click",(function(){return e.saveForm()})),i.Ec(57,"Save"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Ab(1),i.jc("formGroup",e.form),i.Ab(5),i.jc("ngIf",null==e.f.name||null==e.f.name.errors?null:e.f.name.errors.required),i.Ab(7),i.jc("value","string"),i.Ab(2),i.jc("value","int"),i.Ab(2),i.jc("value","boolean"),i.Ab(2),i.jc("value","date"),i.Ab(2),i.jc("value","json"),i.Ab(2),i.jc("value","email"),i.Ab(2),i.jc("value","password"),i.Ab(2),i.jc("value","number"),i.Ab(2),i.jc("value","decimal"),i.Ab(2),i.jc("value","list"),i.Ab(2),i.jc("value","array"),i.Ab(2),i.jc("ngIf",null==e.f.type||null==e.f.type.errors?null:e.f.type.errors.required),i.Ab(8),i.jc("value",!0),i.Ab(3),i.jc("value",!1),i.Ab(3),i.Gc(" ",e.showMoreOptions?"Show Less Options":"Show More Options"," "),i.Ab(1),i.jc("ngIf",e.showMoreOptions))},directives:[r.H,r.s,r.k,n.c,o.a,r.c,r.r,r.i,r.C,c.t,n.g,d.a,s.l,l.b,l.a,b.b,n.b,r.e,c.s],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0!important}.form-field-item[_ngcontent-%COMP%]   .form-field-holder[_ngcontent-%COMP%]{padding:10px}.form-field-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.property-form-header[_ngcontent-%COMP%]{border-bottom:1px solid #f1f1f1}.more-options[_ngcontent-%COMP%]{visibility:hidden}.show-more-options[_ngcontent-%COMP%]{visibility:visible}"]}),t})()},QxDP:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("EICP");class r extends i.SharedOrganizationModel{}},Wp6s:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return f})),a.d(e,"d",(function(){return p})),a.d(e,"e",(function(){return m})),a.d(e,"f",(function(){return b}));var i=a("R1ws"),r=a("FKr1"),n=a("fXoL");const o=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],d=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],s=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),u=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(i.a,8))},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&n.Db("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,e){1&t&&(n.ic(o),n.hc(0),n.hc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:s,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(n.ic(d),n.hc(0),n.Rb(1,"div",0),n.hc(2,1),n.Qb(),n.hc(3,2))},encapsulation:2,changeDetection:0}),t})(),p=(()=>{class t{}return t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({factory:function(e){return new(e||t)},imports:[[r.h],r.h]}),t})()},cvgN:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("fXoL"),r=a("ofXK");function n(t,e){if(1&t&&(i.Rb(0,"span",1),i.Ec(1),i.Qb()),2&t){const t=i.dc();i.Ab(1),i.Gc("@",t.prefix,"/")}}let o=(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["stack-name"]],inputs:{name:"name",prefix:"prefix"},decls:2,vars:2,consts:[["class","text-muted",4,"ngIf"],[1,"text-muted"]],template:function(t,e){1&t&&(i.Cc(0,n,2,1,"span",0),i.Ec(1)),2&t&&(i.jc("ngIf",e.prefix),i.Ab(1),i.Gc("",e.name,"\n"))},directives:[r.t],styles:[""]}),t})()},lK0z:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("ofXK"),r=a("bTqV"),n=a("0IaG"),o=a("fXoL");let c=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,n.g,r.c]]}),t})()},nixx:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("ofXK"),r=a("tyNb"),n=a("fXoL");let o=(()=>{class t{}return t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,r.f]]}),t})()},xiHB:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("fXoL"),r=a("ZJV+");let n=(()=>{class t{constructor(t){this.httpService=t}getDataModels(){return this.httpService.get("/blueprints/data/models")}createDataModel(t){return this.httpService.post("/blueprints/data/models")}updateDataModel(t,e){return this.httpService.put("/blueprints/data/models/"+t,{contents:e})}deleteDataModel(t){return this.httpService.delete("/blueprints/data/models/"+t)}}return t.\u0275fac=function(e){return new(e||t)(i.Vb(r.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ziYC:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));class i{constructor(t){var e,a,i,r,n;this.dataMember=t,this.fields=[],this.authorizationRequired=!1,this.id=t.id,this.name=null===(e=t.contents)||void 0===e?void 0:e.name,this.fields=null!==(i=null===(a=t.contents)||void 0===a?void 0:a.fields)&&void 0!==i?i:[],this.authorizationRequired=null!==(n=null===(r=t.contents)||void 0===r?void 0:r.authorizationRequired)&&void 0!==n&&n,this.setFieldDefaults()}static newField(){return{name:"",type:"string",required:!1,unique:!1,primary:!1,description:"",label:"",validationRegex:"",visible:!0,values:[],relations:[]}}setFieldDefaults(){this.fields.forEach(t=>{var e;t.relations=null!==(e=t.relations)&&void 0!==e?e:[]})}get hasFields(){return this.fields.length>0}updateField(t,e){const a=this.fields.findIndex(e=>e===t);a>=0&&(this.fields[a]=e)}addField(t){this.fields.push(t)}deleteField(t){this.fields.includes(t)&&this.fields.splice(this.fields.indexOf(t),1)}toJSON(){return{authorizationRequired:this.authorizationRequired,name:this.name,fields:[...this.fields]}}}}}]);