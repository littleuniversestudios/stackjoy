(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6ebp":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("ofXK"),n=r("kmnG"),i=r("3Pt+"),o=r("d3UM"),s=r("QibW"),c=r("qFsG"),m=r("fXoL");let l=(()=>{class e{}return e.\u0275mod=m.ac({type:e}),e.\u0275inj=m.Zb({factory:function(t){return new(t||e)},providers:[],imports:[[a.c,n.e,i.v,o.b,s.c,c.c]]}),e})()},"87dK":function(e,t,r){"use strict";r.r(t),r.d(t,"conf",(function(){return n})),r.d(t,"language",(function(){return i}));var a="undefined"==typeof monaco?self.monaco:monaco,n={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:a.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:a.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:a.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:a.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},i={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}},BoqC:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("ofXK"),n=r("kmnG"),i=r("3Pt+"),o=r("d3UM"),s=r("QibW"),c=r("qFsG"),m=r("fXoL");let l=(()=>{class e{}return e.\u0275mod=m.ac({type:e}),e.\u0275inj=m.Zb({factory:function(t){return new(t||e)},providers:[],imports:[[a.c,n.e,i.v,o.b,s.c,c.c]]}),e})()},HQ2Z:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r("fXoL"),n=r("3Pt+"),i=r("kmnG"),o=r("qFsG"),s=r("ofXK"),c=r("d3UM"),m=r("FKr1");function l(e,t){1&e&&(a.ic(0,"mat-error"),a.bd(1,"Input is required"),a.hc())}let p=(()=>{class e{constructor(e){this.fb=e,this.model={},this.form=new a.r}ngOnInit(){this.initForm(),this.formGroup.valueChanges.subscribe(e=>{}),this.form.emit(this.formGroup)}initForm(){this.formGroup=this.fb.group({id:[this.model.id,[]],name:[this.model.name,[n.x.required]],owner:[this.model.owner,[]],type:[this.model.type,[]]})}get f(){return this.formGroup.controls}addItem(e){this.f[e].push(this.fb.control(""))}deleteItem(e,t){this.f[e].removeAt(t)}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(a.cc(n.f))},e.\u0275cmp=a.Wb({type:e,selectors:[["pet-form"]],inputs:{model:"model"},outputs:{form:"form"},decls:22,vars:5,consts:[[1,"mat-form",3,"formGroup"],[1,""],["placeholder","id","type","text","matInput","","formControlName","id"],["placeholder","name","type","text","matInput","","formControlName","name","required",""],[4,"ngIf"],["placeholder","Owner's Name","type","text","matInput","","formControlName","owner"],["formControlName","type"],[3,"value"]],template:function(e,t){1&e&&(a.ic(0,"form",0),a.ic(1,"div",1),a.ic(2,"mat-form-field"),a.dc(3,"input",2),a.hc(),a.hc(),a.ic(4,"div",1),a.ic(5,"mat-form-field"),a.dc(6,"input",3),a.Zc(7,l,2,0,"mat-error",4),a.hc(),a.hc(),a.ic(8,"div",1),a.ic(9,"mat-form-field"),a.dc(10,"input",5),a.hc(),a.hc(),a.ic(11,"div",1),a.ic(12,"mat-form-field"),a.ic(13,"mat-label"),a.bd(14,"type"),a.hc(),a.ic(15,"mat-select",6),a.ic(16,"mat-option",7),a.bd(17,"cat"),a.hc(),a.ic(18,"mat-option",7),a.bd(19,"dog"),a.hc(),a.ic(20,"mat-option",7),a.bd(21,"cow"),a.hc(),a.hc(),a.hc(),a.hc(),a.hc()),2&e&&(a.Ec("formGroup",t.formGroup),a.Ob(7),a.Ec("ngIf",null==t.f.name||null==t.f.name.errors?null:t.f.name.errors.required),a.Ob(9),a.Ec("value","cat"),a.Ob(2),a.Ec("value","dog"),a.Ob(2),a.Ec("value","cow"))},directives:[n.z,n.q,n.k,i.c,o.b,n.c,n.p,n.i,n.w,s.u,i.g,c.a,m.i,i.b],styles:[""]}),e})()},IgM9:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r("fXoL"),n=r("3Pt+"),i=r("kmnG"),o=r("qFsG"),s=r("d3UM"),c=r("FKr1");let m=(()=>{class e{constructor(e){this.fb=e,this.model={},this.form=new a.r}ngOnInit(){this.initForm(),this.formGroup.valueChanges.subscribe(e=>{}),this.form.emit(this.formGroup)}initForm(){this.formGroup=this.fb.group({id:[this.model.id,[]],name:[this.model.name,[]],make:[this.model.make,[]]})}get f(){return this.formGroup.controls}addItem(e){this.f[e].push(this.fb.control(""))}deleteItem(e,t){this.f[e].removeAt(t)}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(a.cc(n.f))},e.\u0275cmp=a.Wb({type:e,selectors:[["car-form"]],inputs:{model:"model"},outputs:{form:"form"},decls:20,vars:5,consts:[[1,"mat-form",3,"formGroup"],[1,""],["placeholder","id","type","text","matInput","","formControlName","id"],["placeholder","name","type","text","matInput","","formControlName","name"],["formControlName","make"],[3,"value"]],template:function(e,t){1&e&&(a.ic(0,"form",0),a.ic(1,"div",1),a.ic(2,"mat-form-field"),a.dc(3,"input",2),a.hc(),a.hc(),a.ic(4,"div",1),a.ic(5,"mat-form-field"),a.dc(6,"input",3),a.hc(),a.hc(),a.ic(7,"div",1),a.ic(8,"mat-form-field"),a.ic(9,"mat-label"),a.bd(10,"make"),a.hc(),a.ic(11,"mat-select",4),a.ic(12,"mat-option",5),a.bd(13,"ford"),a.hc(),a.ic(14,"mat-option",5),a.bd(15,"chrysler"),a.hc(),a.ic(16,"mat-option",5),a.bd(17,"toyota"),a.hc(),a.ic(18,"mat-option",5),a.bd(19,"honda"),a.hc(),a.hc(),a.hc(),a.hc(),a.hc()),2&e&&(a.Ec("formGroup",t.formGroup),a.Ob(12),a.Ec("value","ford"),a.Ob(2),a.Ec("value","chrysler"),a.Ob(2),a.Ec("value","toyota"),a.Ob(2),a.Ec("value","honda"))},directives:[n.z,n.q,n.k,i.c,o.b,n.c,n.p,n.i,i.g,s.a,c.i],styles:[""]}),e})()},ZCF6:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r("fXoL"),n=r("3Pt+"),i=r("kmnG"),o=r("qFsG"),s=r("ofXK");function c(e,t){1&e&&(a.ic(0,"mat-error"),a.bd(1,"Input is required"),a.hc())}let m=(()=>{class e{constructor(e){this.fb=e,this.model={},this.form=new a.r}ngOnInit(){this.initForm(),this.formGroup.valueChanges.subscribe(e=>{}),this.form.emit(this.formGroup)}initForm(){this.formGroup=this.fb.group({id:[this.model.id,[]],name:[this.model.name,[n.x.required]]})}get f(){return this.formGroup.controls}addItem(e){this.f[e].push(this.fb.control(""))}deleteItem(e,t){this.f[e].removeAt(t)}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(a.cc(n.f))},e.\u0275cmp=a.Wb({type:e,selectors:[["workspace-form"]],inputs:{model:"model"},outputs:{form:"form"},decls:8,vars:2,consts:[[1,"mat-form",3,"formGroup"],[1,""],["placeholder","id","type","text","matInput","","formControlName","id"],["placeholder","Name","type","text","matInput","","formControlName","name","required",""],[4,"ngIf"]],template:function(e,t){1&e&&(a.ic(0,"form",0),a.ic(1,"div",1),a.ic(2,"mat-form-field"),a.dc(3,"input",2),a.hc(),a.hc(),a.ic(4,"div",1),a.ic(5,"mat-form-field"),a.dc(6,"input",3),a.Zc(7,c,2,0,"mat-error",4),a.hc(),a.hc(),a.hc()),2&e&&(a.Ec("formGroup",t.formGroup),a.Ob(7),a.Ec("ngIf",null==t.f.name||null==t.f.name.errors?null:t.f.name.errors.required))},directives:[n.z,n.q,n.k,i.c,o.b,n.c,n.p,n.i,n.w,s.u,i.b],styles:[""]}),e})()},bv9b:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return y}));var a=r("fXoL"),n=r("ofXK"),i=r("FKr1"),o=r("8LU1"),s=r("R1ws"),c=r("quSY"),m=r("xgIS"),l=r("pLZG");const p=["primaryValueBar"];class d{constructor(e){this._elementRef=e}}const u=Object(i.r)(d,"primary"),f=new a.w("mat-progress-bar-location",{providedIn:"root",factory:function(){const e=Object(a.gb)(n.e),t=e?e.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}});let b=0,g=(()=>{class e extends u{constructor(e,t,r,n){super(e),this._elementRef=e,this._ngZone=t,this._animationMode=r,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new a.r,this._animationEndSubscription=c.a.EMPTY,this.mode="determinate",this.progressbarId=`mat-progress-bar-${b++}`;const i=n?n.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${i}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===r}get value(){return this._value}set value(e){this._value=h(Object(o.f)(e)||0)}get bufferValue(){return this._bufferValue}set bufferValue(e){this._bufferValue=h(e||0)}_primaryTransform(){return{transform:`scaleX(${this.value/100})`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scaleX(${this.bufferValue/100})`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const e=this._primaryValueBar.nativeElement;this._animationEndSubscription=Object(m.a)(e,"transitionend").pipe(Object(l.a)(t=>t.target===e)).subscribe(()=>{"determinate"!==this.mode&&"buffer"!==this.mode||this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.cc(a.o),a.cc(a.H),a.cc(s.a,8),a.cc(f,8))},e.\u0275cmp=a.Wb({type:e,selectors:[["mat-progress-bar"]],viewQuery:function(e,t){var r;1&e&&a.gd(p,!0),2&e&&a.Mc(r=a.vc())&&(t._primaryValueBar=r.first)},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,t){2&e&&(a.Pb("aria-valuenow","indeterminate"===t.mode||"query"===t.mode?null:t.value)("mode",t.mode),a.Tb("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[a.Lb],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,t){1&e&&(a.xc(),a.ic(0,"svg",0),a.ic(1,"defs"),a.ic(2,"pattern",1),a.dc(3,"circle",2),a.hc(),a.hc(),a.dc(4,"rect",3),a.hc(),a.wc(),a.dc(5,"div",4),a.dc(6,"div",5,6),a.dc(8,"div",7)),2&e&&(a.Ob(2),a.Ec("id",t.progressbarId),a.Ob(2),a.Pb("fill",t._rectangleFillValue),a.Ob(1),a.Ec("ngStyle",t._bufferTransform()),a.Ob(1),a.Ec("ngStyle",t._primaryTransform()))},directives:[n.x],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),e})();function h(e,t=0,r=100){return Math.max(t,Math.min(r,e))}let y=(()=>{class e{}return e.\u0275mod=a.ac({type:e}),e.\u0275inj=a.Zb({factory:function(t){return new(t||e)},imports:[[n.c,i.e],i.e]}),e})()},gk9p:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("ofXK"),n=r("kmnG"),i=r("3Pt+"),o=r("d3UM"),s=r("QibW"),c=r("qFsG"),m=r("fXoL");let l=(()=>{class e{}return e.\u0275mod=m.ac({type:e}),e.\u0275inj=m.Zb({factory:function(t){return new(t||e)},providers:[],imports:[[a.c,n.e,i.v,o.b,s.c,c.c]]}),e})()},"o+A2":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{constructor(e){this.attributes=e}static createBlank(){return new a({id:null,engine:null,body:null,year:null,color:null,mileage:null})}get id(){return this.attributes.id}get engine(){return this.attributes.engine}get body(){return this.attributes.body}get year(){return this.attributes.year}get color(){return this.attributes.color}get mileage(){return this.attributes.mileage}set id(e){this.attributes.id=e}set engine(e){this.attributes.engine=e}set body(e){this.attributes.body=e}set year(e){this.attributes.year=e}set color(e){this.attributes.color=e}set mileage(e){this.attributes.mileage=e}save(){return this.attributes}}}}]);