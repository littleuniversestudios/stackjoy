(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{VUKj:function(e,t,i){"use strict";i.r(t),i.d(t,"CodebaseIgnoreListModule",(function(){return a}));var n=i("ofXK"),o=i("tyNb"),s=i("fXoL"),r=i("i4al");function c(e,t){if(1&e){const e=s.Sb();s.Rb(0,"tr"),s.Rb(1,"td",4),s.Ec(2),s.Qb(),s.Rb(3,"td",5),s.Rb(4,"i",6),s.Zb("click",(function(){s.rc(e);const i=t.$implicit;return s.dc().removePath(i)})),s.Qb(),s.Qb(),s.Qb()}if(2&e){const e=t.$implicit;s.Ab(2),s.Fc(e)}}const b=o.f.forChild([{path:"",component:(()=>{class e{constructor(e){this.codebaseService=e,this.ignoreList=[]}ngOnInit(){this.getIgnoreList()}ngOnDestroy(){}getIgnoreList(){this.ignoreList=this.codebaseService.getIgnoreList()}removePath(e){this.codebaseService.removeFromIgnoreList(e),this.getIgnoreList()}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(r.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["codebase-ignore-list"]],decls:6,vars:1,consts:[[1,"",2,"padding","10px 20px"],[1,"text-small","text-muted","py-2"],[1,"p-2"],[4,"ngFor","ngForOf"],[1,"p-1"],[1,"pl-4"],[1,"fa","fa-trash-alt","cursor-pointer","text-muted",3,"click"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Rb(1,"p",1),s.Ec(2," Files and folders in the ignore list will not be shown in the codebase or in the console when generating templates speeding up the search process when looking for files or directories. "),s.Qb(),s.Rb(3,"div",2),s.Rb(4,"table"),s.Cc(5,c,5,1,"tr",3),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.Ab(5),s.jc("ngForOf",t.ignoreList))},directives:[n.s],styles:[""]}),e})()}]);let a=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,b]]}),e})()}}]);