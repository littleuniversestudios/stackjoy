(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/h+w":function(e,t,i){"use strict";i.r(t),i.d(t,"CodebaseTreeModule",(function(){return L}));var s=i("ofXK"),r=i("tyNb"),n=i("quSY"),a=i("XNiG"),c=i("Kj3r"),o=i("0IaG"),d=i("fXoL"),l=i("i4al"),b=i("bTqV");function h(e,t){if(1&e&&(d.Rb(0,"li",8),d.Fc(1),d.Qb()),2&e){const e=t.$implicit;d.Ab(1),d.Gc(e)}}let u=(()=>{class e{constructor(e,t,i){this.codebaseService=e,this.data=t,this.dialogRef=i,this.ignoreList=[]}ngOnInit(){this.ignoreList=this.data.list}ngOnDestroy(){}addToList(){this.codebaseService.addToIgnoreList(this.ignoreList),this.dialogRef.close({added:!0})}cancel(){this.dialogRef.close({added:!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(l.a),d.Lb(o.a),d.Lb(o.h))},e.\u0275cmp=d.Fb({type:e,selectors:[["ignore-list-dialog"]],decls:14,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,""],[1,"p-1"],[1,"list-unstyled"],["class","text-muted text-small",4,"ngFor","ngForOf"],["mat-dialog-actions","",1,"text-right"],["mat-button","",3,"click"],[1,"text-muted","text-small"]],template:function(e,t){1&e&&(d.Rb(0,"h1",0),d.Fc(1,"Add To Ignore List"),d.Qb(),d.Rb(2,"div",1),d.Rb(3,"div",2),d.Rb(4,"div",3),d.Fc(5,"Add following files/folders to the ignore list:"),d.Qb(),d.Rb(6,"div",3),d.Rb(7,"ul",4),d.Dc(8,h,2,1,"li",5),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(9,"div",6),d.Rb(10,"button",7),d.Zb("click",(function(){return t.cancel()})),d.Fc(11,"Cancel"),d.Qb(),d.Rb(12,"button",7),d.Zb("click",(function(){return t.addToList()})),d.Fc(13,"Add"),d.Qb(),d.Qb()),2&e&&(d.Ab(8),d.jc("ngForOf",t.ignoreList))},directives:[o.i,o.f,s.s,o.c,b.b],styles:[".mat-form-field[_ngcontent-%COMP%], .mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),e})();var m=i("33yf"),p=i("yiTJ"),f=i("Bqyq"),g=i("OnT9"),v=i("3sFK"),S=i("a8/g"),T=i("QArD");function C(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",12),d.Mb(1,"i",13),d.Fc(2),d.Rb(3,"i",14),d.Zb("click",(function(){return d.rc(e),d.dc().resetSearch()})),d.Qb(),d.Qb()}if(2&e){const e=d.dc();d.Ab(2),d.Hc(" ",e.searchTerm," ")}}function I(e,t){if(1&e&&d.Mb(0,"blu-dir-tree",15),2&e){const e=d.dc();d.jc("multiSelect",!0)("state",e.treeState)}}const x=r.f.forChild([{path:"",component:(()=>{class e{constructor(e,t,i,s){this.treeService=e,this.appEnvironmentService=t,this.appStateService=i,this.dialog=s,this.subs=new n.a,this.selectedItems=[],this.searchTerm="",this.treeSearch$=new a.a}handleKeyboardEvent(e){const t=e.key,i=1===t.length&&/^[0-9a-zA-Z\-_@.]+$/.test(t);"Backspace"===e.key?(this.searchTerm=this.searchTerm.length>0?this.searchTerm.slice(0,-1):"",this.treeSearch$.next(this.searchTerm),this.treeService.search(this.searchTerm)):i&&(this.searchTerm=this.searchTerm+t,this.treeSearch$.next(this.searchTerm))}ngOnInit(){var e;this.treeState=null!==(e=this.appEnvironmentService.currentEnvironmentState["last-codebase-state"])&&void 0!==e?e:{},this.subs.add(this.treeService.multiSelectedItems$.subscribe(e=>this.selectedItems=e)),this.subs.add(this.treeService.selectedItem$.subscribe(e=>{e.userSelected&&this.treeService.toggleCheckDir(e.item)})),this.subs.add(this.treeSearch$.pipe(Object(c.a)(250)).subscribe(e=>this.treeService.search(e))),this.subs.add(this.treeService.currentState$.subscribe(e=>{e.activeItemIndex=[0],this.appEnvironmentService.setEnvironmentState("last-codebase-state",e)})),this.subs.add(this.appStateService.bluConsoleState$.subscribe(e=>e.open?this.treeService.disallowKeyboardInput():this.treeService.allowKeyboardInput())),this.subs.add(this.appEnvironmentService.currentEnvironment$.subscribe(e=>this.environment=e))}ngOnDestroy(){this.subs.unsubscribe()}addToIgnoreList(){const e=this.getCheckedItems();this.openIgnoreListDialog(e.map(e=>e.relativePath)).afterClosed().subscribe(e=>{e.added&&this.treeService.refresh()})}openIgnoreListDialog(e){return this.dialog.open(u,{data:{list:e},maxWidth:"500px",position:{top:"100px"},autoFocus:!0})}getCheckedItems(){const e=[];return this.selectedItems.forEach(t=>{this.isParentInList(e,t)||this.treeService.allChildrenChecked(t)&&e.push(t)}),e}isParentInList(e,t){let i=!1;return e.forEach(e=>{i||(i=this.isDescendantOfParent(e,t))}),i}isDescendantOfParent(e,t){return!!t.parent&&(t.parent===e||this.isDescendantOfParent(e,t.parent))}resetSearch(){this.searchTerm="",this.treeSearch$.next(this.searchTerm)}openConvertToTemplateDialog(e){return this.dialog.open(p.a,{data:{list:e},width:"500px",maxWidth:"500px",position:{top:"100px"},autoFocus:!0})}convertToTemplate(){const e=this.getCheckedItems(),t=[];e.forEach(e=>t.push(...this.iterChildren(e,e))),this.openConvertToTemplateDialog(t).afterClosed().subscribe(e=>null)}iterChildren(e,t,i="",s=[]){return i=m.join(i,e.name),e.isDir?e.children.forEach(e=>{this.iterChildren(e,t,i,s)}):s.push({origin:e.path,destination:i,name:e.name}),s}addNewCodebase(){this.dialog.open(f.a,{data:{rootPath:this.environment.codebasePath,title:"Set Codebase Path"},minWidth:"600px",minHeight:"210px",position:{top:"100px"},autoFocus:!0}).afterClosed().subscribe(e=>{e&&this.switchCodebase(e)})}switchCodebase(e){this.appEnvironmentService.switchCodebase(this.environment.id,e)}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(g.a),d.Lb(v.a),d.Lb(S.a),d.Lb(o.b))},e.\u0275cmp=d.Fb({type:e,selectors:[["codebase-tree"]],hostBindings:function(e,t){1&e&&d.Zb("keydown",(function(e){return t.handleKeyboardEvent(e)}))},decls:18,vars:5,consts:[[1,"pt-1"],["mat-button","",3,"disabled","click"],[1,"fa","fa-plus-circle"],[1,"fa","fa-code"],[1,"d-flex","py-2","align-items-center","pl-2"],[1,""],[1,"fa","fa-folder","mr-1","text-small","text-muted"],[1,"text-bold","pl-3"],["mat-button","","mat-raised-button","",1,"ml-2",3,"click"],[1,"p-2","codebase"],["class","small search-term pb-2",4,"ngIf"],[3,"multiSelect","state",4,"ngIf"],[1,"small","search-term","pb-2"],[1,"fa","fa-sm","fa-search"],[1,"far","fa-times-circle","ml-2","cursor-pointer",3,"click"],[3,"multiSelect","state"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"button",1),d.Zb("click",(function(){return t.addToIgnoreList()})),d.Mb(2,"i",2),d.Fc(3," Add To Ignore List"),d.Qb(),d.Rb(4,"button",1),d.Zb("click",(function(){return t.convertToTemplate()})),d.Mb(5,"i",3),d.Fc(6," Convert to Template"),d.Qb(),d.Qb(),d.Rb(7,"div",4),d.Rb(8,"div",5),d.Mb(9,"i",6),d.Fc(10," Codebase Path:"),d.Qb(),d.Rb(11,"div",7),d.Fc(12),d.Rb(13,"button",8),d.Zb("click",(function(){return t.addNewCodebase()})),d.Fc(14,"Change"),d.Qb(),d.Qb(),d.Qb(),d.Rb(15,"div",9),d.Dc(16,C,4,1,"div",10),d.Dc(17,I,1,2,"blu-dir-tree",11),d.Qb()),2&e&&(d.Ab(1),d.jc("disabled",0===t.selectedItems.length),d.Ab(3),d.jc("disabled",0===t.selectedItems.length),d.Ab(8),d.Hc("",t.environment.codebasePath," "),d.Ab(4),d.jc("ngIf",!!t.searchTerm),d.Ab(1),d.jc("ngIf",t.treeState))},directives:[b.b,s.t,T.a],styles:[".tree-item[_ngcontent-%COMP%]{padding-top:.25rem}"]}),e})()}]);var y=i("0ymr");let L=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[s.c,x,y.a,b.c]]}),e})()}}]);