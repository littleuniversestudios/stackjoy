function _classCallCheck(c,t){if(!(c instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function _createClass(c,t,e){return t&&_defineProperties(c.prototype,t),e&&_defineProperties(c,e),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{KO7F:function(c,t,e){"use strict";e.r(t),e.d(t,"StackViewModule",(function(){return b}));var i=e("ofXK"),n=e("tyNb"),a=e("fXoL"),r=e("LvdB"),o=e("bv9b");function s(c,t){if(1&c){var e=a.jc();a.ic(0,"div"),a.ic(1,"table",2),a.ic(2,"tr"),a.ic(3,"th"),a.bd(4,"Property"),a.hc(),a.ic(5,"th"),a.bd(6,"Value"),a.hc(),a.hc(),a.ic(7,"tr"),a.ic(8,"td"),a.bd(9,"id"),a.hc(),a.ic(10,"td"),a.bd(11),a.hc(),a.hc(),a.ic(12,"tr"),a.ic(13,"td"),a.bd(14,"name"),a.hc(),a.ic(15,"td"),a.bd(16),a.hc(),a.hc(),a.ic(17,"tr"),a.ic(18,"td"),a.bd(19,"isPublic"),a.hc(),a.ic(20,"td"),a.bd(21),a.hc(),a.hc(),a.ic(22,"tr"),a.ic(23,"td"),a.bd(24,"owner"),a.hc(),a.ic(25,"td"),a.bd(26),a.hc(),a.hc(),a.hc(),a.ic(27,"div",3),a.ic(28,"button",4),a.uc("click",(function(){return a.Rc(e),a.yc().cancel()})),a.bd(29,"Back"),a.hc(),a.ic(30,"button",4),a.uc("click",(function(){a.Rc(e);var c=a.yc();return c.delete(c.stack.id)})),a.bd(31,"Delete"),a.hc(),a.ic(32,"button",5),a.uc("click",(function(){a.Rc(e);var c=a.yc();return c.edit(c.stack.id)})),a.bd(33,"Edit"),a.hc(),a.hc(),a.hc()}if(2&c){var i=a.yc();a.Ob(11),a.cd(i.stack.id),a.Ob(5),a.cd(i.stack.name),a.Ob(5),a.cd(i.stack.isPublic),a.Ob(5),a.cd(i.stack.owner)}}function u(c,t){1&c&&(a.ic(0,"div",6),a.dc(1,"mat-progress-bar",7),a.hc())}var d,l,h=n.e.forChild([{path:"",component:(d=function(){function c(t,e,i,n){_classCallCheck(this,c),this.stackService=t,this.router=e,this.activatedRoute=i,this.location=n}return _createClass(c,[{key:"ngOnInit",value:function(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getItem()}},{key:"ngOnDestroy",value:function(){}},{key:"getItem",value:function(){var c=this;this.acquiring=!0,this.stackService.getById(this.id).subscribe((function(t){c.stack=t,c.acquiring=!1}))}},{key:"edit",value:function(c){this.router.navigate(["../../edit","".concat(c)],{relativeTo:this.activatedRoute.parent})}},{key:"delete",value:function(c){var t=this;this.stackService.delete(c).subscribe((function(c){t.goBack()}))}},{key:"cancel",value:function(){this.goBack()}},{key:"goBack",value:function(){this.location.back()}}]),c}(),d.\u0275fac=function(c){return new(c||d)(a.cc(r.a),a.cc(n.b),a.cc(n.a),a.cc(i.o))},d.\u0275cmp=a.Wb({type:d,selectors:[["stack-view"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"table","w-100"],[1,""],[1,"btn","btn-outline-primary","mr-1",3,"click"],[1,"btn","btn-outline-primary","mr-2",3,"click"],[1,"p-2"],["mode","indeterminate"]],template:function(c,t){if(1&c&&(a.ic(0,"h5"),a.bd(1," Stack"),a.hc(),a.Zc(2,s,34,4,"div",0),a.Zc(3,u,2,0,"ng-template",null,1,a.ad)),2&c){var e=a.Nc(4);a.Ob(2),a.Ec("ngIf",!t.acquiring)("ngIfElse",e)}},directives:[i.u,o.a],styles:[""]}),d)}]),b=((l=function c(){_classCallCheck(this,c)}).\u0275mod=a.ac({type:l}),l.\u0275inj=a.Zb({factory:function(c){return new(c||l)},providers:[],imports:[[i.c,h,o.b]]}),l)}}]);