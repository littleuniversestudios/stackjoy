(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"20/g":function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return ye}));var r,i,o,a,u,c,s,d=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e}))},e}();!function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e;return Q.objectLiteral(n)&&Q.number(n.line)&&Q.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,i){if(Q.number(e)&&Q.number(n)&&Q.number(t)&&Q.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")},e.is=function(e){var n=e;return Q.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(i||(i={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.string(n.uri)||Q.undefined(n.uri))}}(o||(o={})),function(e){e.create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},e.is=function(e){var n=e;return Q.defined(n)&&i.is(n.targetRange)&&Q.string(n.targetUri)&&(i.is(n.targetSelectionRange)||Q.undefined(n.targetSelectionRange))&&(i.is(n.originSelectionRange)||Q.undefined(n.originSelectionRange))}}(a||(a={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return Q.number(n.red)&&Q.number(n.green)&&Q.number(n.blue)&&Q.number(n.alpha)}}(u||(u={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return i.is(n.range)&&u.is(n.color)}}(c||(c={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return Q.string(n.label)&&(Q.undefined(n.textEdit)||v.is(n))&&(Q.undefined(n.additionalTextEdits)||Q.typedArray(n.additionalTextEdits,v.is))}}(s||(s={}));var f,l,g,h,m,v,p,b,y,_,k,w,x,I,C,S,T,E,R,M,P,A,F,D,L,O,N,j,W=function(e){return e.Comment="comment",e.Imports="imports",e.Region="region",e}({});!function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return Q.defined(t)&&(o.startCharacter=t),Q.defined(r)&&(o.endCharacter=r),Q.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return Q.number(n.startLine)&&Q.number(n.startLine)&&(Q.undefined(n.startCharacter)||Q.number(n.startCharacter))&&(Q.undefined(n.endCharacter)||Q.number(n.endCharacter))&&(Q.undefined(n.kind)||Q.string(n.kind))}}(f||(f={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return Q.defined(n)&&o.is(n.location)&&Q.string(n.message)}}(l||(l={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(g||(g={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return Q.defined(t)&&(a.severity=t),Q.defined(r)&&(a.code=r),Q.defined(i)&&(a.source=i),Q.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n=e;return Q.defined(n)&&i.is(n.range)&&Q.string(n.message)&&(Q.number(n.severity)||Q.undefined(n.severity))&&(Q.number(n.code)||Q.string(n.code)||Q.undefined(n.code))&&(Q.string(n.source)||Q.undefined(n.source))&&(Q.undefined(n.relatedInformation)||Q.typedArray(n.relatedInformation,l.is))}}(h||(h={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return Q.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return Q.defined(n)&&Q.string(n.title)&&Q.string(n.command)}}(m||(m={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return Q.objectLiteral(n)&&Q.string(n.newText)&&i.is(n.range)}}(v||(v={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return Q.defined(n)&&x.is(n.textDocument)&&Array.isArray(n.edits)}}(p||(p={})),function(e){e.create=function(e,n){var t={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"create"===n.kind&&Q.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||Q.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||Q.boolean(n.options.ignoreIfExists)))}}(b||(b={})),function(e){e.create=function(e,n,t){var r={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r},e.is=function(e){var n=e;return n&&"rename"===n.kind&&Q.string(n.oldUri)&&Q.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||Q.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||Q.boolean(n.options.ignoreIfExists)))}}(y||(y={})),function(e){e.create=function(e,n){var t={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"delete"===n.kind&&Q.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||Q.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||Q.boolean(n.options.ignoreIfNotExists)))}}(_||(_={})),function(e){e.is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every((function(e){return Q.string(e.kind)?b.is(e)||y.is(e)||_.is(e):p.is(e)})))}}(k||(k={})),function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return Q.defined(n)&&Q.string(n.uri)}}(w||(w={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&(null===n.version||Q.number(n.version))}}(x||(x={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&Q.string(n.languageId)&&Q.number(n.version)&&Q.string(n.text)}}(I||(I={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(C||(C={})),function(e){e.is=function(n){return n===e.PlainText||n===e.Markdown}}(C||(C={})),function(e){e.is=function(e){var n=e;return Q.objectLiteral(e)&&C.is(n.kind)&&Q.string(n.value)}}(S||(S={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(T||(T={})),function(e){e.PlainText=1,e.Snippet=2}(E||(E={})),function(e){e.create=function(e){return{label:e}}}(R||(R={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(M||(M={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return Q.string(n)||Q.objectLiteral(n)&&Q.string(n.language)&&Q.string(n.value)}}(P||(P={})),function(e){e.is=function(e){var n=e;return!!n&&Q.objectLiteral(n)&&(S.is(n.contents)||P.is(n.contents)||Q.typedArray(n.contents,P.is))&&(void 0===e.range||i.is(e.range))}}(A||(A={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(F||(F={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return Q.defined(n)&&(i.documentation=n),i.parameters=Q.defined(t)?t:[],i}}(D||(D={})),function(e){e.Text=1,e.Read=2,e.Write=3}(L||(L={})),function(e){e.create=function(e,n){var t={range:e};return Q.number(n)&&(t.kind=n),t}}(O||(O={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(N||(N={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(j||(j={}));var U,H,K,V,z,B=function(){return function(){}}();!function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&Q.string(n.name)&&Q.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.detail||Q.string(n.detail))&&(void 0===n.deprecated||Q.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(B||(B={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(U||(U={})),function(e){e.create=function(e,n){var t={diagnostics:e};return null!=n&&(t.only=n),t},e.is=function(e){var n=e;return Q.defined(n)&&Q.typedArray(n.diagnostics,h.is)&&(void 0===n.only||Q.typedArray(n.only,Q.string))}}(H||(H={})),function(e){e.create=function(e,n,t){var r={title:e};return m.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&Q.string(n.title)&&(void 0===n.diagnostics||Q.typedArray(n.diagnostics,h.is))&&(void 0===n.kind||Q.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||m.is(n.command))&&(void 0===n.edit||k.is(n.edit))}}(K||(K={})),function(e){e.create=function(e,n){var t={range:e};return Q.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.command)||m.is(n.command))}}(V||(V={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return Q.defined(n)&&Q.number(n.tabSize)&&Q.boolean(n.insertSpaces)}}(z||(z={}));var J,$,q=function(){return function(){}}();!function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.target)||Q.string(n.target))}}(q||(q={})),function(e){e.create=function(e,n,t,r){return new G(e,n,t,r)},e.is=function(e){var n=e;return!!(Q.defined(n)&&Q.string(n.uri)&&(Q.undefined(n.languageId)||Q.string(n.languageId))&&Q.number(n.lineCount)&&Q.func(n.getText)&&Q.func(n.positionAt)&&Q.func(n.offsetAt))},e.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n;var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r);e(i,t),e(o,t);for(var a=0,u=0,c=0;a<i.length&&u<o.length;){var s=t(i[a],o[u]);n[c++]=s<=0?i[a++]:o[u++]}for(;a<i.length;)n[c++]=i[a++];for(;u<o.length;)n[c++]=o[u++];return n}(n,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),i=t.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Overlapping edit");t=t.substring(0,u)+a.newText+t.substring(c,t.length),i=u}return t}}(J||(J={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}($||($={}));var Q,G=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line];return Math.max(Math.min(t+e.character,e.line+1<n.length?n[e.line+1]:this._content.length),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(Q||(Q={}));var X=monaco.Uri,Y=monaco.Range,Z=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(n),n=setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model)}))),t.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(o(e),i(e))}))})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(e){return t="number"==typeof(n=e).code?String(n.code):n.code,{severity:ee(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source};var n,t})),i=monaco.editor.getModel(e);i.getModeId()===n&&monaco.editor.setModelMarkers(i,n,r)})).then(void 0,(function(e){console.error(e)}))},e}();function ee(e){switch(e){case g.Error:return monaco.MarkerSeverity.Error;case g.Warning:return monaco.MarkerSeverity.Warning;case g.Information:return monaco.MarkerSeverity.Info;case g.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function ne(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function te(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function re(e){var n=monaco.languages.CompletionItemKind;switch(e){case T.Text:return n.Text;case T.Method:return n.Method;case T.Function:return n.Function;case T.Constructor:return n.Constructor;case T.Field:return n.Field;case T.Variable:return n.Variable;case T.Class:return n.Class;case T.Interface:return n.Interface;case T.Module:return n.Module;case T.Property:return n.Property;case T.Unit:return n.Unit;case T.Value:return n.Value;case T.Enum:return n.Enum;case T.Keyword:return n.Keyword;case T.Snippet:return n.Snippet;case T.Color:return n.Color;case T.File:return n.File;case T.Reference:return n.Reference}return n.Property}function ie(e){if(e)return{range:te(e.range),text:e.newText}}var oe=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),ne(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new Y(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:i,kind:re(e.kind)};return e.textEdit&&(n.range=te(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(ie)),e.insertTextFormat===E.Snippet&&(n.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))},e}();function ae(e){return"string"==typeof e?{value:e}:(n=e)&&"object"==typeof n&&"string"==typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function ue(e){if(e)return Array.isArray(e)?e.map(ae):[ae(e)]}var ce=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),ne(n))})).then((function(e){if(e)return{range:te(e.range),contents:ue(e.contents)}}))},e}();function se(e){switch(e){case L.Read:return monaco.languages.DocumentHighlightKind.Read;case L.Write:return monaco.languages.DocumentHighlightKind.Write;case L.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}var de=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),ne(n))})).then((function(e){if(e)return e.map((function(e){return{range:te(e.range),kind:se(e.kind)}}))}))},e}();function fe(e){return{uri:X.parse(e.uri),range:te(e.range)}}var le=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),ne(n))})).then((function(e){if(e)return[fe(e)]}))},e}(),ge=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),ne(n))})).then((function(e){if(e)return e.map(fe)}))},e}(),he=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),ne(n),t)})).then((function(e){return function(e){if(e&&e.changes){var n=[];for(var t in e.changes){for(var r=[],i=0,o=e.changes[t];i<o.length;i++){var a=o[i];r.push({range:te(a.range),text:a.newText})}n.push({resource:X.parse(t),edits:r})}return{edits:n}}}(e)}))},e}();function me(e){var n=monaco.languages.SymbolKind;switch(e){case N.File:return n.Array;case N.Module:return n.Module;case N.Namespace:return n.Namespace;case N.Package:return n.Package;case N.Class:return n.Class;case N.Method:return n.Method;case N.Property:return n.Property;case N.Field:return n.Field;case N.Constructor:return n.Constructor;case N.Enum:return n.Enum;case N.Interface:return n.Interface;case N.Function:return n.Function;case N.Variable:return n.Variable;case N.Constant:return n.Constant;case N.String:return n.String;case N.Number:return n.Number;case N.Boolean:return n.Boolean;case N.Array:return n.Array}return n.Function}var ve=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:me(e.kind),tags:[],range:te(e.location.range),selectionRange:te(e.location.range)}}))}))},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:te(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=ie(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(ie)),n}))}))},e}(),be=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.provideFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=function(e){switch(e){case W.Comment:return monaco.languages.FoldingRangeKind.Comment;case W.Imports:return monaco.languages.FoldingRangeKind.Imports;case W.Region:return monaco.languages.FoldingRangeKind.Region}}(e.kind)),n}))}))},e}();function ye(e){var n=new d(e),t=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.getLanguageServiceWorker.apply(n,[e].concat(t))},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new oe(t)),monaco.languages.registerHoverProvider(r,new ce(t)),monaco.languages.registerDocumentHighlightProvider(r,new de(t)),monaco.languages.registerDefinitionProvider(r,new le(t)),monaco.languages.registerReferenceProvider(r,new ge(t)),monaco.languages.registerDocumentSymbolProvider(r,new ve(t)),monaco.languages.registerRenameProvider(r,new he(t)),monaco.languages.registerColorProvider(r,new pe(t)),monaco.languages.registerFoldingRangeProvider(r,new be(t)),new Z(r,t,e)}}}]);