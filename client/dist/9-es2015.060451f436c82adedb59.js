(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{H9HA:function(e,c,i){"use strict";i.r(c),i.d(c,"VehicleCreateEditModule",(function(){return a}));var t=i("ofXK"),n=i("tyNb"),o=i("o+A2"),h=i("fXoL"),l=i("rUR3"),r=i("3Pt+");function s(e,c){if(1&e){const e=h.jc();h.ic(0,"table"),h.ic(1,"tr"),h.ic(2,"td"),h.bd(3,"Engine"),h.hc(),h.ic(4,"td"),h.ic(5,"input",2),h.uc("ngModelChange",(function(c){return h.Rc(e),h.yc().vehicle.engine=c})),h.hc(),h.hc(),h.hc(),h.ic(6,"tr"),h.ic(7,"td"),h.bd(8,"Body"),h.hc(),h.ic(9,"td"),h.ic(10,"input",2),h.uc("ngModelChange",(function(c){return h.Rc(e),h.yc().vehicle.body=c})),h.hc(),h.hc(),h.hc(),h.ic(11,"tr"),h.ic(12,"td"),h.bd(13,"Year"),h.hc(),h.ic(14,"td"),h.ic(15,"input",2),h.uc("ngModelChange",(function(c){return h.Rc(e),h.yc().vehicle.year=c})),h.hc(),h.hc(),h.hc(),h.ic(16,"tr"),h.ic(17,"td"),h.bd(18,"Color"),h.hc(),h.ic(19,"td"),h.ic(20,"input",2),h.uc("ngModelChange",(function(c){return h.Rc(e),h.yc().vehicle.color=c})),h.hc(),h.hc(),h.hc(),h.ic(21,"tr"),h.ic(22,"td"),h.bd(23,"Mileage"),h.hc(),h.ic(24,"td"),h.ic(25,"input",2),h.uc("ngModelChange",(function(c){return h.Rc(e),h.yc().vehicle.mileage=c})),h.hc(),h.hc(),h.hc(),h.hc()}if(2&e){const e=h.yc();h.Ob(5),h.Ec("ngModel",e.vehicle.engine),h.Ob(5),h.Ec("ngModel",e.vehicle.body),h.Ob(5),h.Ec("ngModel",e.vehicle.year),h.Ob(5),h.Ec("ngModel",e.vehicle.color),h.Ob(5),h.Ec("ngModel",e.vehicle.mileage)}}const d=n.e.forChild([{path:"",component:(()=>{class e{constructor(e,c,i){this.vehicleService=e,this.route=c,this.location=i,this.isEditMode=!0}ngOnInit(){const e=this.route.snapshot.paramMap.get("vehicleId");e?(this.vehicleId=parseInt(e),this.getVehicle()):(this.isEditMode=!1,this.vehicle=o.a.createBlank()),console.log("vehicle??",this.vehicle)}ngOnDestroy(){}getVehicle(){this.vehicleService.getById(this.vehicleId).subscribe(e=>{this.vehicle=new o.a(e),console.log("vehicle??",this.vehicle)})}cancel(){this.goBack()}save(){this.isEditMode?this.vehicleService.update(this.vehicle.save()).subscribe(e=>{this.goBack()},e=>console.log("error",e)):this.vehicleService.create(this.vehicle.save()).subscribe(e=>{this.goBack()},e=>console.log("error",e))}goBack(){this.location.back()}}return e.\u0275fac=function(c){return new(c||e)(h.cc(l.a),h.cc(n.a),h.cc(t.o))},e.\u0275cmp=h.Wb({type:e,selectors:[["vehicle-create-edit"]],decls:7,vars:2,consts:[[4,"ngIf"],[3,"click"],["type","text",3,"ngModel","ngModelChange"]],template:function(e,c){1&e&&(h.ic(0,"div"),h.bd(1),h.hc(),h.Zc(2,s,26,5,"table",0),h.ic(3,"button",1),h.uc("click",(function(){return c.cancel()})),h.bd(4,"Cancel"),h.hc(),h.ic(5,"button",1),h.uc("click",(function(){return c.save()})),h.bd(6,"Save"),h.hc()),2&e&&(h.Ob(1),h.cd(c.isEditMode?"Edit Vehicle":"Create new Vehicle"),h.Ob(1),h.Ec("ngIf",c.vehicle))},directives:[t.u,r.c,r.p,r.s],styles:[""]}),e})()}]);let a=(()=>{class e{}return e.\u0275mod=h.ac({type:e}),e.\u0275inj=h.Zb({factory:function(c){return new(c||e)},providers:[],imports:[[t.c,d,r.l]]}),e})()}}]);