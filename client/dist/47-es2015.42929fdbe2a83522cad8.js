(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{X8BT:function(c,t,i){"use strict";i.r(t),i.d(t,"CarViewModule",(function(){return o}));var e=i("ofXK"),r=i("tyNb"),n=i("fXoL"),a=i("Ya8i");const d=r.e.forChild([{path:"",component:(()=>{class c{constructor(c,t,i,e){this.carService=c,this.router=t,this.activatedRoute=i,this.location=e}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getItem()}ngOnDestroy(){}getItem(){this.carService.getById(this.id).subscribe(c=>{this.car=c})}edit(c){this.router.navigate(["../../edit",`${c}`],{relativeTo:this.activatedRoute.parent})}delete(c){this.carService.delete(c).subscribe(c=>{this.goBack()})}cancel(){this.goBack()}goBack(){this.location.back()}}return c.\u0275fac=function(t){return new(t||c)(n.cc(a.a),n.cc(r.b),n.cc(r.a),n.cc(e.o))},c.\u0275cmp=n.Wb({type:c,selectors:[["car-view"]],decls:31,vars:3,consts:[[1,"table","w-100"],[1,""],[1,"btn","btn-outline-primary","mr-1",3,"click"],[1,"btn","btn-outline-primary","mr-2",3,"click"]],template:function(c,t){1&c&&(n.ic(0,"h5"),n.bd(1," Car"),n.hc(),n.ic(2,"div"),n.ic(3,"table",0),n.ic(4,"tr"),n.ic(5,"th"),n.bd(6,"Property"),n.hc(),n.ic(7,"th"),n.bd(8,"Value"),n.hc(),n.hc(),n.ic(9,"tr"),n.ic(10,"td"),n.bd(11,"id"),n.hc(),n.ic(12,"td"),n.bd(13),n.hc(),n.hc(),n.ic(14,"tr"),n.ic(15,"td"),n.bd(16,"name"),n.hc(),n.ic(17,"td"),n.bd(18),n.hc(),n.hc(),n.ic(19,"tr"),n.ic(20,"td"),n.bd(21,"make"),n.hc(),n.ic(22,"td"),n.bd(23),n.hc(),n.hc(),n.hc(),n.ic(24,"div",1),n.ic(25,"button",2),n.uc("click",(function(){return t.cancel()})),n.bd(26,"Back"),n.hc(),n.ic(27,"button",2),n.uc("click",(function(){return t.delete(t.car.id)})),n.bd(28,"Delete"),n.hc(),n.ic(29,"button",3),n.uc("click",(function(){return t.edit(t.car.id)})),n.bd(30,"Edit"),n.hc(),n.hc(),n.hc()),2&c&&(n.Ob(13),n.cd(t.car.id),n.Ob(5),n.cd(t.car.name),n.Ob(5),n.cd(t.car.make))},styles:[""]}),c})()}]);let o=(()=>{class c{}return c.\u0275mod=n.ac({type:c}),c.\u0275inj=n.Zb({factory:function(t){return new(t||c)},providers:[],imports:[[e.c,d]]}),c})()}}]);