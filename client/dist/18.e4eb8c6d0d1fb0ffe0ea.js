(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ZxqJ:function(e,t,n){"use strict";n.r(t),n.d(t,"DataModelsModule",(function(){return a}));var s=n("ofXK"),o=n("tyNb"),l=n("quSY"),r=n("fXoL");const i=o.g.forChild([{path:"",component:(()=>{class e{constructor(){this.subs=new l.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["data-models"]],decls:2,vars:0,consts:[[1,"basic-page","flex-column","p-2"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Mb(1,"router-outlet"),r.Qb())},directives:[o.h],styles:["[_nghost-%COMP%]{display:flex;flex:1}"]}),e})(),children:[{path:"list",loadChildren:()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"PHCr")).then(e=>e.DataModelListModule)},{path:"grid",loadChildren:()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"Fl/6")).then(e=>e.DataModelGridModule)},{path:"**",redirectTo:"list"}]}]);let a=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[s.c,i]]}),e})()}}]);