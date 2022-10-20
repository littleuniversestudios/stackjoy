(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"37sK":function(t,e,n){"use strict";n.r(e),n.d(e,"DocumentationModule",(function(){return D}));var i=n("ofXK"),o=n("tyNb"),c=n("fXoL");const r=[{title:"Introduction",markdownURL:"/introduction/stackjoy.md",slug:"introduction",sections:[{title:"1. Stackjoy",markdownURL:"/introduction/1.Stackjoy.md",slug:"stackjoy",references:[{title:"BLU Language",id:"2.1",type:n("HdQx").a.Documentation.Section.ReferenceType.document}]},{title:"2. Benefits",markdownURL:"/introduction/2.Benefits.md",slug:"benefits"}]},{title:"Structure",slug:"structure",sections:[{title:"1. Workspaces",markdownURL:"/structure/workspaces.md",slug:"workspaces"},{title:"2. Stacks",markdownURL:"/structure/stacks.md",slug:"stacks"},{title:"3. Collections",markdownURL:"/structure/collections.md",slug:"collections"},{title:"4. Hierarchy",markdownURL:"/structure/hierarchy.md",slug:"hierarchy"}]},{title:"Generators",slug:"generator",sections:[{title:"1. Introduction",markdownURL:"/generator/1.Introduction.md",slug:"introduction"},{title:"2. Template Files",markdownURL:"/generator/2.Template-Files.md",slug:"template-files"},{title:"3. Inputs",markdownURL:"/generator/4.Inputs.md",slug:"inputs"},{title:"4. Destination",markdownURL:"/generator/5.Destination.md",slug:"destination"},{title:"5. Run",markdownURL:"/generator/6.Run.md",slug:"run"}]},{title:"Generator Config",slug:"generator-config",sections:[{title:"1. Introduction",markdownURL:"/generator/config/1.Introduction.md",slug:"introduction"},{title:"2. Readme",markdownURL:"/generator/config/2.Readme.md",slug:"readme"},{title:"3. Description",markdownURL:"/generator/config/3.Description.md",slug:"description"},{title:"4. Filenames",markdownURL:"/generator/config/filenames.md",slug:"filenames"},{title:"5. On Success",markdownURL:"/generator/config/4.On-Success.md",slug:"on-success"},{title:"6. Functions",markdownURL:"/generator/config/5.Functions.md",slug:"functions"},{title:"7. Variables",markdownURL:"/generator/config/6.Variables.md",slug:"variables"},{title:"8. Chains",markdownURL:"/generator/config/7.Chains.md",slug:"chains"},{title:"9. Context",markdownURL:"/generator/config/8.Context.md",slug:"context"}]},{title:"BLU Language",slug:"blu-language",sections:[{title:"1. Introduction",markdownURL:"/language/1.Introduction.md",slug:"introduction"},{title:"2. Expressions",markdownURL:"/language/2.Expressions.md",slug:"expressions"},{title:"3. Inputs",markdownURL:"/language/3.Inputs.md",slug:"inputs"},{title:"4. Functions",markdownURL:"/language/4.Functions.md",slug:"functions"},{title:"5. Transformations",markdownURL:"/language/5.Transformations.md",slug:"transformations"},{title:"6. Logic",markdownURL:"/language/6.Logic.md",slug:"logic"},{title:"7. Iterators",markdownURL:"/language/7.Iterators.md",slug:"iterators"},{title:"8. Switch",markdownURL:"/language/8.Switch.md",slug:"switch"}]}];class s{constructor(t,e){var n;this.section=t,this.parent=e,this.children=[],this.hasReferences=(null===(n=t.references)||void 0===n?void 0:n.length)>0,this.url=this.getURL()}addChild(t){this.children.push(t),this.hasChildren=!0}getURL(){return this.parent?`${this.parent.getURL()}/${this.section.slug}`:"/documentation"}}class a{constructor(t){this.sections=t,this.tree=new s({title:"Stackjoy Documentation"},null),this.list=[],this.map={},this.init()}getFirstDocument(){return this.tree.children[0].children[0]}getSectionByURL(t){return this.map[t]}init(){this.sections.forEach(t=>this.createSectionModels(t,this.tree))}createSectionModels(t,e){var n;const i=new s(t,e);let o;return this.list.push(i),this.map[i.url]=i,e.addChild(i),null===(n=t.sections)||void 0===n||n.forEach(t=>{const e=this.createSectionModels(t,i);e.previousSibling=o,o&&(o.nextSibling=e),o=e}),i}}var l=n("IzEk"),u=n("quSY"),d=n("uNRF"),g=n("xm+p"),m=n("nhot"),h=n("lR5k");const b=["markdownDiv"];function f(t,e){1&t&&c.Nb(0)}function p(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",14,15),c.Zb("load",(function(){return c.rc(t),c.dc().test()})),c.Qb()}if(2&t){const t=c.dc();c.jc("src",t.currentURL)}}function S(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",16),c.Zb("click",(function(){c.rc(t);const e=c.dc();return e.navigateToItem(null==e.currentSection?null:e.currentSection.previousSibling)})),c.Mb(1,"i",17),c.Ec(2),c.Qb()}if(2&t){const t=c.dc();c.Ab(2),c.Gc(" Previous: ",t.currentSection.previousSibling.section.title," ")}}function v(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",18),c.Zb("click",(function(){c.rc(t);const e=c.dc();return e.navigateToItem(null==e.currentSection?null:e.currentSection.nextSibling)})),c.Ec(1),c.Mb(2,"i",19),c.Qb()}if(2&t){const t=c.dc();c.Ab(1),c.Gc(" Next: ",t.currentSection.nextSibling.section.title," ")}}function R(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",23),c.Zb("click",(function(){c.rc(t);const n=e.$implicit;return c.dc(2).goToReference(n)})),c.Mb(1,"i",24),c.Ec(2),c.Qb()}if(2&t){const t=e.$implicit;c.Ab(2),c.Gc(" ",t.title," ")}}function w(t,e){if(1&t&&(c.Rb(0,"div",20),c.Rb(1,"div",21),c.Ec(2,"Some things to check out:"),c.Qb(),c.Cc(3,R,3,1,"div",22),c.Qb()),2&t){const t=c.dc();c.Ab(3),c.jc("ngForOf",t.currentSection.section.references)}}function k(t,e){if(1&t&&(c.Rb(0,"span",31),c.Ec(1),c.Qb()),2&t){const t=c.dc(2).$implicit;c.Ab(1),c.Gc("(",t.children.length,")")}}function L(t,e){if(1&t){const t=c.Sb();c.Pb(0),c.Rb(1,"div",28),c.Zb("click",(function(){c.rc(t);const e=c.dc().$implicit;return c.dc(2).toggleSection(e)})),c.Ec(2),c.Cc(3,k,2,1,"span",29),c.Mb(4,"i",30),c.Qb(),c.Ob()}if(2&t){const t=c.dc().$implicit,e=c.dc(2);c.Ab(2),c.Gc("",t.section.title," "),c.Ab(1),c.jc("ngIf",!(null!=e.documentationState&&e.documentationState.treeState[t.url])),c.Ab(1),c.Db("fa-chevron-up",null==e.documentationState?null:e.documentationState.treeState[t.url])("fa-chevron-down",!(null!=e.documentationState&&e.documentationState.treeState[t.url]))}}function I(t,e){if(1&t){const t=c.Sb();c.Pb(0),c.Rb(1,"div",32),c.Zb("click",(function(){c.rc(t);const e=c.dc().$implicit;return c.dc(2).navigateToItem(e)})),c.Ec(2),c.Qb(),c.Ob()}if(2&t){const t=c.dc().$implicit;c.Ab(2),c.Fc(t.section.title)}}function U(t,e){1&t&&c.Nb(0)}const x=function(t){return{$implicit:t,isRoot:!1}};function C(t,e){if(1&t&&(c.Rb(0,"div",34),c.Cc(1,U,1,0,"ng-container",3),c.Qb()),2&t){const t=c.dc(2).$implicit;c.dc(2);const e=c.oc(14);c.Ab(1),c.jc("ngTemplateOutlet",e)("ngTemplateOutletContext",c.lc(2,x,t.children))}}function O(t,e){if(1&t&&(c.Pb(0),c.Cc(1,C,2,4,"div",33),c.Ob()),2&t){const t=c.dc().$implicit;c.Ab(1),c.jc("ngIf",(null==t.children?null:t.children.length)>0)}}function M(t,e){if(1&t&&(c.Pb(0),c.Rb(1,"div",26),c.Cc(2,L,5,6,"ng-container",27),c.Cc(3,I,3,1,"ng-container",27),c.Qb(),c.Cc(4,O,2,1,"ng-container",27),c.Ob()),2&t){const t=e.$implicit,n=c.dc(2);c.Ab(1),c.Db("selected-section",n.currentSection===t),c.Ab(1),c.jc("ngIf",t.hasChildren),c.Ab(1),c.jc("ngIf",!t.hasChildren),c.Ab(1),c.jc("ngIf",null==n.documentationState?null:n.documentationState.treeState[t.url])}}function y(t,e){1&t&&c.Cc(0,M,5,5,"ng-container",25),2&t&&c.jc("ngForOf",e.$implicit)}const A=function(t){return{$implicit:t,isRoot:!0}};let j=(()=>{class t{constructor(t,e,n,i,o,c,s){this.appDocumentationService=t,this.activatedRoute=e,this.route=n,this.router=i,this.renderer=o,this.navigationService=c,this.appStateService=s,this.sections=r,this.relativePath="../../../assets/md/docs",this.documentationState={currentItemURL:"",treeState:{}},this.stateStorageHandle="documentationState",this.subs=new u.a}ngOnInit(){this.documentationManager=new a(this.sections),console.log("manager: ",this.documentationManager),this.subs.add(this.appStateService.appState$.pipe(Object(l.a)(1)).subscribe(t=>{var e;this.documentationState=Object.assign({},this.documentationState,null!==(e=t[this.stateStorageHandle])&&void 0!==e?e:{}),this.showItem(this.getItemByURL(this.router.url))})),this.subs.add(this.router.events.subscribe(t=>{t instanceof o.b&&this.showItem(this.getItemByURL(this.router.url))}))}ngOnDestroy(){this.subs.unsubscribe(),this.listenObj&&this.listenObj()}getItemByURL(t){return this.documentationManager.getSectionByURL(t)}saveState(){this.appStateService.setAppState(this.stateStorageHandle,this.documentationState)}navigateToItem(t){this.navigationService.navigateTo(t.url.split("/"))}showItem(t){var e;if(t)this.showSection(t);else{const t=null!==(e=this.getItemByURL(this.documentationState.currentItemURL))&&void 0!==e?e:this.documentationManager.getFirstDocument();this.showSection(t)}}showSection(t){this.currentSection=t,this.documentationState.currentItemURL=t.url,this.openAllItems(t),this.currentURL=t.section.markdownURL?this.getMarkdownUrl(t.section):null,this.saveState()}openAllItems(t){this.openSection(t),t.parent&&this.openAllItems(t.parent)}getMarkdownUrl(t){return`${this.relativePath}${t.markdownURL}`}openSection(t){this.documentationState.treeState[t.url]=!0}closeSection(t){this.documentationState.treeState[t.url]=!1}toggleSection(t){this.documentationState.treeState[t.url]?this.closeSection(t):this.openSection(t),this.saveState()}goToReference(t){const e=this.getItemByURL(t.id);this.showSection(e)}test(){const t=new RegExp("(?:^[a-z][a-z0-9+.-]*:|//)","i");this.markdownDiv&&(this.listenObj=this.renderer.listen(this.markdownDiv.element.nativeElement,"click",e=>{if(e.target&&"A"===e.target.tagName){const n=e.target,i=n.getAttribute&&n.getAttribute("href");e.preventDefault(),t.test(i)?window.open(i,"_blank"):this.router.navigate([i])}}))}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(d.a),c.Lb(o.a),c.Lb(o.a),c.Lb(o.c),c.Lb(c.F),c.Lb(g.a),c.Lb(m.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-documentation"]],viewQuery:function(t,e){var n;1&t&&c.Ic(b,!0),2&t&&c.nc(n=c.ac())&&(e.markdownDiv=n.first)},decls:15,vars:8,consts:[[1,"documentation"],[1,"d-flex",2,"height","93%"],[1,"doc-menu","border-right","p-3"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"doc-contents","flex-grow-1"],[1,"d-flex","align-items-start"],[1,"p-3","doc-text-area"],["markdown","",3,"src","load",4,"ngIf"],[1,"py-3","d-flex"],[1,""],["class","cursor-pointer",3,"click",4,"ngIf"],["class","ml-auto cursor-pointer",3,"click",4,"ngIf"],["class","p-3 doc-references",4,"ngIf"],["sectionArea",""],["markdown","",3,"src","load"],["markdownDiv",""],[1,"cursor-pointer",3,"click"],[1,"fa","fa-chevron-left","mr-1"],[1,"ml-auto","cursor-pointer",3,"click"],[1,"fa","fa-chevron-right","ml-1"],[1,"p-3","doc-references"],[1,"pb-2"],["class","pl-2 cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"pl-2","cursor-pointer",3,"click"],[1,"fa","fa-book","text-muted","text-small","mr-1"],[4,"ngFor","ngForOf"],[1,"cursor-pointer"],[4,"ngIf"],[1,"menu-title",3,"click"],["class","text-small text-muted",4,"ngIf"],[1,"fa","text-small","text-muted","section-expander"],[1,"text-small","text-muted"],[1,"doc-child-item",3,"click"],["class","pl-2 pb-2 pt-1",4,"ngIf"],[1,"pl-2","pb-2","pt-1"]],template:function(t,e){if(1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Cc(3,f,1,0,"ng-container",3),c.Qb(),c.Rb(4,"div",4),c.Rb(5,"div",5),c.Rb(6,"div",6),c.Cc(7,p,2,1,"div",7),c.Rb(8,"div",8),c.Rb(9,"div",9),c.Cc(10,S,3,1,"div",10),c.Qb(),c.Cc(11,v,3,1,"div",11),c.Qb(),c.Qb(),c.Cc(12,w,4,1,"div",12),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Cc(13,y,1,1,"ng-template",null,13,c.Dc)),2&t){const t=c.oc(14);c.Ab(3),c.jc("ngTemplateOutlet",t)("ngTemplateOutletContext",c.lc(6,A,e.documentationManager.tree.children)),c.Ab(4),c.jc("ngIf",e.currentURL),c.Ab(3),c.jc("ngIf",null==e.currentSection?null:e.currentSection.previousSibling),c.Ab(1),c.jc("ngIf",null==e.currentSection?null:e.currentSection.nextSibling),c.Ab(1),c.jc("ngIf",null==e.currentSection?null:e.currentSection.hasReferences)}},directives:[i.A,i.t,h.a,i.s],styles:[".documentation[_ngcontent-%COMP%]{overflow:hidden}.doc-references[_ngcontent-%COMP%]{min-width:300px}.doc-text-area[_ngcontent-%COMP%]{max-width:750px}.doc-menu[_ngcontent-%COMP%]{min-width:200px;overflow-y:auto}.doc-menu[_ngcontent-%COMP%]   .selected-section[_ngcontent-%COMP%]{color:#6469ff!important}.doc-menu[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{padding-top:5px;position:relative}.doc-menu[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.doc-menu[_ngcontent-%COMP%]   .section-expander[_ngcontent-%COMP%]{position:absolute;right:5px;top:5px}.doc-menu[_ngcontent-%COMP%]   .doc-child-item[_ngcontent-%COMP%]{font-size:.9rem}.doc-contents[_ngcontent-%COMP%]{overflow:auto}"]}),t})();const Q=o.f.forChild([{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["documentation"]],decls:7,vars:0,consts:[[1,"basic-page","flex-column","overflow-auto"],[1,""],[1,"text-capitalize","text-large","px-4","py-3","border-bottom"],[1,"fa","fa-book","mt-1","mr-1"],[1,"app-documentation"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Mb(3,"i",3),c.Ec(4," Documentation "),c.Qb(),c.Qb(),c.Rb(5,"div",4),c.Mb(6,"app-documentation"),c.Qb(),c.Qb())},directives:[j],styles:["[_nghost-%COMP%]{display:flex;flex:1}"]}),t})(),children:[{path:"**"}]}]);var P=n("zqKN");let D=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,Q,P.a]]}),t})()}}]);