(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{KO7F:function(c,t,i){"use strict";i.r(t),i.d(t,"StackViewModule",(function(){return b}));var e=i("ofXK"),n=i("tyNb"),s=i("fXoL"),a=i("LvdB"),r=i("bv9b");function d(c,t){if(1&c){const c=s.jc();s.ic(0,"div"),s.ic(1,"table",2),s.ic(2,"tr"),s.ic(3,"th"),s.bd(4,"Property"),s.hc(),s.ic(5,"th"),s.bd(6,"Value"),s.hc(),s.hc(),s.ic(7,"tr"),s.ic(8,"td"),s.bd(9,"id"),s.hc(),s.ic(10,"td"),s.bd(11),s.hc(),s.hc(),s.ic(12,"tr"),s.ic(13,"td"),s.bd(14,"name"),s.hc(),s.ic(15,"td"),s.bd(16),s.hc(),s.hc(),s.ic(17,"tr"),s.ic(18,"td"),s.bd(19,"isPublic"),s.hc(),s.ic(20,"td"),s.bd(21),s.hc(),s.hc(),s.ic(22,"tr"),s.ic(23,"td"),s.bd(24,"owner"),s.hc(),s.ic(25,"td"),s.bd(26),s.hc(),s.hc(),s.hc(),s.ic(27,"div",3),s.ic(28,"button",4),s.uc("click",(function(){return s.Rc(c),s.yc().cancel()})),s.bd(29,"Back"),s.hc(),s.ic(30,"button",4),s.uc("click",(function(){s.Rc(c);const t=s.yc();return t.delete(t.stack.id)})),s.bd(31,"Delete"),s.hc(),s.ic(32,"button",5),s.uc("click",(function(){s.Rc(c);const t=s.yc();return t.edit(t.stack.id)})),s.bd(33,"Edit"),s.hc(),s.hc(),s.hc()}if(2&c){const c=s.yc();s.Ob(11),s.cd(c.stack.id),s.Ob(5),s.cd(c.stack.name),s.Ob(5),s.cd(c.stack.isPublic),s.Ob(5),s.cd(c.stack.owner)}}function o(c,t){1&c&&(s.ic(0,"div",6),s.dc(1,"mat-progress-bar",7),s.hc())}const h=n.e.forChild([{path:"",component:(()=>{class c{constructor(c,t,i,e){this.stackService=c,this.router=t,this.activatedRoute=i,this.location=e}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getItem()}ngOnDestroy(){}getItem(){this.acquiring=!0,this.stackService.getById(this.id).subscribe(c=>{this.stack=c,this.acquiring=!1})}edit(c){this.router.navigate(["../../edit",`${c}`],{relativeTo:this.activatedRoute.parent})}delete(c){this.stackService.delete(c).subscribe(c=>{this.goBack()})}cancel(){this.goBack()}goBack(){this.location.back()}}return c.\u0275fac=function(t){return new(t||c)(s.cc(a.a),s.cc(n.b),s.cc(n.a),s.cc(e.o))},c.\u0275cmp=s.Wb({type:c,selectors:[["stack-view"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"table","w-100"],[1,""],[1,"btn","btn-outline-primary","mr-1",3,"click"],[1,"btn","btn-outline-primary","mr-2",3,"click"],[1,"p-2"],["mode","indeterminate"]],template:function(c,t){if(1&c&&(s.ic(0,"h5"),s.bd(1," Stack"),s.hc(),s.Zc(2,d,34,4,"div",0),s.Zc(3,o,2,0,"ng-template",null,1,s.ad)),2&c){const c=s.Nc(4);s.Ob(2),s.Ec("ngIf",!t.acquiring)("ngIfElse",c)}},directives:[e.u,r.a],styles:[""]}),c})()}]);let b=(()=>{class c{}return c.\u0275mod=s.ac({type:c}),c.\u0275inj=s.Zb({factory:function(t){return new(t||c)},providers:[],imports:[[e.c,h,r.b]]}),c})()}}]);