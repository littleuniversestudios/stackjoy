(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{Jb2C:function(c,i,t){"use strict";t.r(i),t.d(i,"WorkspaceEditModule",(function(){return b}));var e=t("ofXK"),n=t("3Pt+"),s=t("bv9b"),o=t("tyNb"),r=t("fXoL"),a=t("nnd+"),d=t("ZCF6");function u(c,i){if(1&c){const c=r.jc();r.ic(0,"workspace-form",7),r.uc("form",(function(i){return r.Rc(c),r.yc(2).setForm(i)})),r.hc()}if(2&c){const c=r.yc(2);r.Ec("model",c.workspace)}}function l(c,i){if(1&c){const c=r.jc();r.ic(0,"div"),r.Zc(1,u,1,1,"workspace-form",3),r.ic(2,"div",4),r.ic(3,"button",5),r.uc("click",(function(){return r.Rc(c),r.yc().cancel()})),r.bd(4,"Cancel"),r.hc(),r.ic(5,"button",6),r.uc("click",(function(){return r.Rc(c),r.yc().save()})),r.bd(6,"Save"),r.hc(),r.hc(),r.hc()}if(2&c){const c=r.yc();r.Ob(1),r.Ec("ngIf",c.workspace),r.Ob(4),r.Ec("disabled",c.isInvalid)}}function h(c,i){1&c&&(r.ic(0,"div",0),r.dc(1,"mat-progress-bar",8),r.hc())}const f=o.e.forChild([{path:"",component:(()=>{class c{constructor(c,i,t){this.workspaceService=c,this.route=i,this.location=t,this.isInvalid=!0}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}ngOnDestroy(){}getItem(){this.acquiring=!0,this.workspaceService.getById(this.id).subscribe(c=>{this.workspace=c,this.acquiring=!1})}cancel(){this.goBack()}save(){this.workspace.update(this.form.value),this.workspaceService.update(this.workspace).subscribe(c=>{this.goBack()},c=>console.log("error",c))}setForm(c){this.form=c,this.form.valueChanges.subscribe(c=>this.isInvalid=this.form.invalid),setTimeout(()=>{var c;return this.isInvalid=null===(c=this.form)||void 0===c?void 0:c.invalid},0)}goBack(){this.location.back()}}return c.\u0275fac=function(i){return new(i||c)(r.cc(a.a),r.cc(o.a),r.cc(e.o))},c.\u0275cmp=r.Wb({type:c,selectors:[["workspace-edit"]],decls:6,vars:2,consts:[[1,"p-2"],[4,"ngIf","ngIfElse"],["loading",""],[3,"model","form",4,"ngIf"],[1,"pt-2"],[1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"],[3,"model","form"],["mode","indeterminate"]],template:function(c,i){if(1&c&&(r.ic(0,"h5"),r.bd(1,"Edit Workspace"),r.hc(),r.ic(2,"div",0),r.Zc(3,l,7,2,"div",1),r.hc(),r.Zc(4,h,2,0,"ng-template",null,2,r.ad)),2&c){const c=r.Nc(5);r.Ob(3),r.Ec("ngIf",!i.acquiring)("ngIfElse",c)}},directives:[e.u,d.a,s.a],styles:[""]}),c})()}]);var p=t("BoqC");let b=(()=>{class c{}return c.\u0275mod=r.ac({type:c}),c.\u0275inj=r.Zb({factory:function(i){return new(i||c)},providers:[],imports:[[e.c,f,n.l,p.a,s.b]]}),c})()}}]);