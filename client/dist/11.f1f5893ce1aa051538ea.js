(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{iGsW:function(e,t,n){"use strict";n.r(t),n.d(t,"AppEnvironmentModule",(function(){return f}));var i=n("ofXK"),o=n("tyNb"),r=n("quSY"),a=n("HdQx"),c=n("fXoL"),s=n("3sFK"),d=n("oCqB"),l=n("0IaG");const b=o.g.forChild([{path:"",component:(()=>{class e{constructor(e,t,n){this.appEnvironmentService=e,this.stackService=t,this.dialog=n,this.subs=new r.a,this.selectedSection="home"}ngOnInit(){this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(e=>this.environment=e))}selectSection(e){this.selectedSection=e}ngOnDestroy(){this.subs.unsubscribe()}isWorkspace(){var e;return(null===(e=this.environment)||void 0===e?void 0:e.type)===a.a.Environment.Type.Workspace}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(s.a),c.Lb(d.a),c.Lb(l.b))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-environment"]],decls:30,vars:10,consts:[[1,"basic-page","flex-column"],[1,"d-flex","flex-grow-1"],[1,"env-nav","p-2"],[1,"env-nav-item","pl-2",3,"routerLinkActive","routerLink"],[1,"nav-icon"],[1,"fa","fa-star","text-muted"],[1,""],[1,"far","fa-file","text-muted"],[1,"fas","fa-table","text-muted"],[1,"far","fa-folder-open","text-muted"],[1,"fas","fa-sitemap","text-muted"],[1,"env-contents"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"div",3),c.Rb(4,"div",4),c.Mb(5,"i",5),c.Qb(),c.Rb(6,"div",6),c.Ec(7,"Welcome"),c.Qb(),c.Qb(),c.Rb(8,"div",3),c.Rb(9,"div",4),c.Mb(10,"i",7),c.Qb(),c.Rb(11,"div",6),c.Ec(12,"Generators"),c.Qb(),c.Qb(),c.Rb(13,"div",3),c.Rb(14,"div",4),c.Mb(15,"i",8),c.Qb(),c.Rb(16,"div",6),c.Ec(17,"Data Models"),c.Qb(),c.Qb(),c.Rb(18,"div",3),c.Rb(19,"div",4),c.Mb(20,"i",9),c.Qb(),c.Rb(21,"div",6),c.Ec(22,"Codebase"),c.Qb(),c.Qb(),c.Rb(23,"div",3),c.Rb(24,"div",4),c.Mb(25,"i",10),c.Qb(),c.Rb(26,"div",6),c.Ec(27,"Structure"),c.Qb(),c.Qb(),c.Qb(),c.Rb(28,"div",11),c.Mb(29,"router-outlet"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.Ab(3),c.jc("routerLinkActive","active")("routerLink","/workspace/welcome"),c.Ab(5),c.jc("routerLinkActive","active")("routerLink","/workspace/generators"),c.Ab(5),c.jc("routerLinkActive","active")("routerLink","/workspace/data-models"),c.Ab(5),c.jc("routerLinkActive","active")("routerLink","/workspace/codebase"),c.Ab(5),c.jc("routerLinkActive","active")("routerLink","/workspace/structure"))},directives:[o.f,o.e,o.h],styles:["[_nghost-%COMP%]{display:flex;flex:1}.env-header[_ngcontent-%COMP%]{display:flex;flex:0 0 40px;border-bottom:1px solid #f1f1f1;font-size:16px;padding-left:8px}.env-nav[_ngcontent-%COMP%]{width:150px;flex:0 0 150px}.env-contents[_ngcontent-%COMP%]{border-left:1px solid #f1f1f1;flex:1}.env-nav-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:4px;border-radius:5px;height:35px;cursor:pointer}.env-nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{width:35px;text-align:center}.env-nav-item.active[_ngcontent-%COMP%]{font-weight:700}.env-nav-item.active[_ngcontent-%COMP%], .env-nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#7378ff!important}.env-nav-item[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}"]}),e})(),children:[{path:"codebase",loadChildren:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"jmWQ")).then(e=>e.CodebaseModule)},{path:"structure",loadChildren:()=>Promise.all([n.e(2),n.e(0),n.e(12)]).then(n.bind(null,"Dulc")).then(e=>e.BlueprintsModule)},{path:"welcome",loadChildren:()=>n.e(21).then(n.bind(null,"HlET")).then(e=>e.WelcomeModule)},{path:"generators",loadChildren:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"LNgQ")).then(e=>e.GeneratorsModule)},{path:"data-models",loadChildren:()=>n.e(18).then(n.bind(null,"ZxqJ")).then(e=>e.DataModelsModule)},{path:"**",redirectTo:"generators",pathMatch:"full"}]}]);var v=n("bTqV"),u=n("3Pt+"),p=n("lR5k");let f=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[i.c,b,v.c,u.m,p.b.forChild()]]}),e})()}}]);