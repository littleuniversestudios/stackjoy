(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{ZOSQ:function(t,i,e){"use strict";e.r(i),e.d(i,"PetEditModule",(function(){return h}));var c=e("ofXK"),n=e("tyNb"),s=e("fXoL"),o=e("CTRI"),r=e("HQ2Z");function a(t,i){if(1&t){const t=s.jc();s.ic(0,"pet-form",5),s.uc("form",(function(i){return s.Rc(t),s.yc().setForm(i)})),s.hc()}if(2&t){const t=s.yc();s.Ec("model",t.pet)}}const u=n.e.forChild([{path:"",component:(()=>{class t{constructor(t,i,e){this.petService=t,this.route=i,this.location=e,this.isInvalid=!0}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}ngOnDestroy(){}getItem(){this.petService.getById(this.id).subscribe(t=>{this.pet=t})}cancel(){this.goBack()}save(){this.pet.update(this.form.value),this.petService.update(this.pet).subscribe(t=>{this.goBack()},t=>console.log("error",t))}setForm(t){this.form=t,this.form.valueChanges.subscribe(t=>this.isInvalid=this.form.invalid),setTimeout(()=>{var t;return this.isInvalid=null===(t=this.form)||void 0===t?void 0:t.invalid},0)}goBack(){this.location.back()}}return t.\u0275fac=function(i){return new(i||t)(s.cc(o.a),s.cc(n.a),s.cc(c.o))},t.\u0275cmp=s.Wb({type:t,selectors:[["pet-edit"]],decls:9,vars:2,consts:[[1,"p-2"],[3,"model","form",4,"ngIf"],[1,"pt-2"],[1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"],[3,"model","form"]],template:function(t,i){1&t&&(s.ic(0,"h5"),s.bd(1,"Edit Pet"),s.hc(),s.ic(2,"div",0),s.Zc(3,a,1,1,"pet-form",1),s.ic(4,"div",2),s.ic(5,"button",3),s.uc("click",(function(){return i.cancel()})),s.bd(6,"Cancel"),s.hc(),s.ic(7,"button",4),s.uc("click",(function(){return i.save()})),s.bd(8,"Save"),s.hc(),s.hc(),s.hc()),2&t&&(s.Ob(3),s.Ec("ngIf",i.pet),s.Ob(4),s.Ec("disabled",i.isInvalid))},directives:[c.u,r.a],styles:[""]}),t})()}]);var d=e("3Pt+"),l=e("gk9p");let h=(()=>{class t{}return t.\u0275mod=s.ac({type:t}),t.\u0275inj=s.Zb({factory:function(i){return new(i||t)},providers:[],imports:[[c.c,u,d.l,l.a]]}),t})()}}]);