(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{jmWQ:function(t,n,e){"use strict";e.r(n),e.d(n,"CodebaseModule",(function(){return C}));var o=e("ofXK"),i=e("tyNb"),r=e("quSY"),a=e("Bqyq"),c=e("fXoL"),s=e("3sFK"),b=e("0IaG"),d=e("bTqV");function l(t,n){if(1&t&&(c.Pb(0),c.Rb(1,"div",4),c.Ec(2),c.Qb(),c.Ob()),2&t){const t=n.$implicit;c.Ab(1),c.jc("routerLink",t.url),c.Ab(1),c.Gc(" ",t.name," ")}}let u=(()=>{class t{constructor(){this.subs=new r.a}ngOnInit(){}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["router-tabs"]],inputs:{tabs:"tabs"},decls:4,vars:1,consts:[[1,"tab-navigation-holder"],[1,"tab-navigation","align-items-end"],[4,"ngFor","ngForOf"],[1,"tab-navigation-border"],["routerLinkActive","tab-selected",1,"tab-navigation-item","d-flex","align-items-center","justify-content-center",3,"routerLink"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Cc(2,l,3,2,"ng-container",2),c.Qb(),c.Qb(),c.Mb(3,"div",3)),2&t&&(c.Ab(2),c.jc("ngForOf",n.tabs))},directives:[o.s,i.e,i.d],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 100%;width:100%}.tab-navigation-holder[_ngcontent-%COMP%]{display:flex;flex:1 1 40px;width:100%;height:40px}.tab-navigation-border[_ngcontent-%COMP%]{height:2px;background-color:#7378ff;border-radius:1px;opacity:.5;width:100%}.tab-navigation[_ngcontent-%COMP%]{display:flex;flex:0 0 100%;border-radius:5px 5px 0 0;padding-right:5px}.tab-navigation-item[_ngcontent-%COMP%]{min-width:120px;padding:0 20px;background-color:#fff;border:2px solid #eaeded;border-bottom:0 solid transparent;text-align:center;height:100%;margin-right:4px;border-radius:5px 5px 0 0;cursor:pointer}.tab-navigation-item[_ngcontent-%COMP%]   .nav-counter[_ngcontent-%COMP%]{color:#6c757d}.tab-navigation-item.error-nav[_ngcontent-%COMP%]{margin-left:60px;background-color:#f08080;color:#fff}.tab-navigation-item[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], .tab-navigation-item[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{display:none}.tab-navigation-item.has-errors[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], .tab-navigation-item.has-no-errors[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{display:block;color:#f08080}.tab-navigation-item.tab-selected[_ngcontent-%COMP%]{background-color:#7378ff!important;border:2px solid #7378ff;border-bottom:0 solid transparent;color:#fff!important}.tab-navigation-item.tab-selected[_ngcontent-%COMP%]   .tab-counter[_ngcontent-%COMP%], .tab-navigation-item.tab-selected[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#fff!important}"]}),t})();const p=function(){return["./tree"]},g=function(t){return{name:"Files",url:t}},f=function(){return["./ignore-list"]},h=function(t){return{name:"Ignore List",url:t}},m=function(t,n){return[t,n]},v=i.f.forChild([{path:"",component:(()=>{class t{constructor(t,n){this.appEnvironmentService=t,this.dialog=n,this.subs=new r.a}ngOnInit(){this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(t=>this.environment=t))}ngOnDestroy(){this.subs.unsubscribe()}addNewCodebase(){this.dialog.open(a.a,{data:{rootPath:this.environment.codebasePath,title:"Set Codebase Path"},minWidth:"600px",minHeight:"210px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(t=>{t&&this.switchCodebase(t)})}switchCodebase(t){this.appEnvironmentService.switchCodebase(this.environment.id,t)}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(s.a),c.Lb(b.b))},t.\u0275cmp=c.Fb({type:t,selectors:[["codebase"]],decls:18,vars:12,consts:[[1,"workspace-page"],[1,"pb-2",2,"border-bottom","1px solid #F1F1F1"],[1,"text-bold"],[1,"description","text-muted","text-small","as-link-hover",3,"routerLink"],[1,"fa","fa-info-circle","text-tiny","text-muted"],[1,"pt-4"],[1,"d-flex","align-items-center","pb-4"],[1,"pr-1"],[1,"fa","fa-folder","mr-1","text-small","text-muted"],["mat-button","","mat-raised-button","",2,"margin-left","40px",3,"click"],[1,"pt-2"],[3,"tabs"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Ec(3,"Codebase"),c.Qb(),c.Rb(4,"div",3),c.Ec(5,"Your project codebase associated with this workspace "),c.Mb(6,"i",4),c.Qb(),c.Qb(),c.Rb(7,"div",5),c.Rb(8,"div",6),c.Rb(9,"div",7),c.Mb(10,"i",8),c.Qb(),c.Rb(11,"div",2),c.Ec(12),c.Rb(13,"button",9),c.Zb("click",(function(){return n.addNewCodebase()})),c.Ec(14,"Change"),c.Qb(),c.Qb(),c.Qb(),c.Rb(15,"div",10),c.Mb(16,"router-tabs",11),c.Mb(17,"router-outlet"),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Ab(4),c.jc("routerLink","/documentation/structure/codebase"),c.Ab(8),c.Gc("",n.environment.codebasePath," "),c.Ab(4),c.jc("tabs",c.mc(9,m,c.lc(4,g,c.kc(3,p)),c.lc(7,h,c.kc(6,f)))))},directives:[i.d,d.b,u,i.g],styles:[".codebase-holder[_ngcontent-%COMP%]{padding:14px;border:2px solid #eaeded;border-radius:5px}"]}),t})(),children:[{path:"ignore-list",loadChildren:()=>e.e(14).then(e.bind(null,"VUKj")).then(t=>t.CodebaseIgnoreListModule)},{path:"tree",loadChildren:()=>e.e(15).then(e.bind(null,"/h+w")).then(t=>t.CodebaseTreeModule)},{path:"",redirectTo:"tree",pathMatch:"full"}]}]);var x=e("nixx");let C=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},providers:[],imports:[[o.c,v,x.a,d.c]]}),t})()}}]);