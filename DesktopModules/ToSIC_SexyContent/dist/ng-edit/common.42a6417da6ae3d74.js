"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["common"],{4144:(O,u,t)=>{t.d(u,{O:()=>m});var e=t(6465),g=t(9673),d=t(3184),v=t(2528),c=t(1130),M=t(2376);let m=(()=>{class h{constructor(l){this.snackBar=l}agInit(l){this.value=l.value}refresh(l){return!0}copy(l){var f;l=null!==(f=e.iX.tryParse(l))&&void 0!==f?f:l,(0,g.v)(l),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}return h.\u0275fac=function(l){return new(l||h)(d.Y36(v.ux))},h.\u0275cmp=d.Xpm({type:h,selectors:[["app-analyze-settings-value"]],decls:3,vars:2,consts:[["matRipple","",1,"value-box","highlight",3,"tippy","click"],[1,"value"]],template:function(l,f){1&l&&(d.TgZ(0,"div",0),d.NdJ("click",function(){return f.copy(f.value)}),d.TgZ(1,"span",1),d._uU(2),d.qZA()()),2&l&&(d.Q6J("tippy",f.value),d.xp6(2),d.Oqu(f.value))},directives:[c.wG,M.$],styles:[".value-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.value-box[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{width:100%;text-overflow:ellipsis;overflow:hidden}"]}),h})()},3232:(O,u,t)=>{t.r(u),t.d(u,{ContentExportModule:()=>n});var e=t(6362),g=t(587),d=t(7317),v=t(5758),c=t(5590),M=t(4683),m=t(8390),h=t(1434),i=t(722),l=t(7066),f=t(5368),S=t(3135),a=t(2977),x=t(6167),y=t(4929);const D={name:"EXPORT_CONTENT_TYPE_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent(){return(0,y.mG)(this,void 0,void 0,function*(){const{ContentExportComponent:o}=yield t.e("projects_eav-ui_src_app_content-export_content-export_component_ts").then(t.bind(t,3810));return o})}};var T=t(3184);const F=[{path:"",component:x.r,data:{dialog:D}}];let r=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=T.oAB({type:o}),o.\u0275inj=T.cJS({imports:[[a.Bz.forChild(F)],a.Bz]}),o})();var C=t(2188);let n=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=T.oAB({type:o}),o.\u0275inj=T.cJS({providers:[f._,C.i,i.K,l.s],imports:[[e.ez,r,S.q,v.Is,d.ot,c.Ps,g.u5,M.c,h.LD,m.Fk]]}),o})()},7561:(O,u,t)=>{t.r(u),t.d(u,{ContentImportModule:()=>C});var e=t(6362),g=t(587),d=t(7317),v=t(5758),c=t(5590),M=t(4683),m=t(8390),h=t(722),i=t(7066),l=t(5368),f=t(3135),S=t(2977),a=t(6167),x=t(4929);const y={name:"IMPORT_CONTENT_TYPE_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,x.mG)(this,void 0,void 0,function*(){const{ContentImportComponent:n}=yield t.e("projects_eav-ui_src_app_content-import_content-import_component_ts").then(t.bind(t,9010));return n})}};var D=t(3184);const T=[{path:"",component:a.r,data:{dialog:y}}];let F=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=D.oAB({type:n}),n.\u0275inj=D.cJS({imports:[[S.Bz.forChild(T)],S.Bz]}),n})();var r=t(3799);let C=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=D.oAB({type:n}),n.\u0275inj=D.cJS({providers:[l._,r.B,h.K,i.s],imports:[[e.ez,F,f.q,v.Is,d.ot,c.Ps,g.u5,M.c,m.Fk]]}),n})()},3799:(O,u,t)=>{t.d(u,{B:()=>l});var e=t(7400),g=t(2673),d=t(635),v=t(4856),c=t(9934),M=t(5368),m=t(3184),h=t(8784),i=t(2425);let l=(()=>{class f{constructor(a,x,y){this.http=a,this.context=x,this.dnnContext=y}evaluateContent(a){return(0,e.D)((0,c.s)(a.file)).pipe((0,g.w)(x=>{const y={AppId:this.context.appId.toString(),DefaultLanguage:a.defaultLanguage,ContentType:a.contentType,ContentBase64:x,ResourcesReferences:a.resourcesReferences,ClearEntities:a.clearEntities};return this.http.post(this.dnnContext.$2sxc.http.apiUrl(v.Uo+"XmlPreview"),y).pipe((0,d.U)(D=>(D.Success||(D.Errors=D.Detail,delete D.Detail),D)))}))}importContent(a){return(0,e.D)((0,c.s)(a.file)).pipe((0,g.w)(x=>{const y={AppId:this.context.appId.toString(),DefaultLanguage:a.defaultLanguage,ContentType:a.contentType,ContentBase64:x,ResourcesReferences:a.resourcesReferences,ClearEntities:a.clearEntities};return this.http.post(this.dnnContext.$2sxc.http.apiUrl(v.Uo+"XmlUpload"),y)}))}}return f.\u0275fac=function(a){return new(a||f)(m.LFG(h.eN),m.LFG(M._),m.LFG(i._y))},f.\u0275prov=m.Yz7({token:f,factory:f.\u0275fac}),f})()},3519:(O,u,t)=>{t.r(u),t.d(u,{ContentItemsModule:()=>L});var e=t(6362),g=t(587),d=t(178),v=t(7317),c=t(1130),M=t(5758),m=t(5590),h=t(4683),i=t(2796),l=t(8390),f=t(1434),S=t(6623),a=t(2528),x=t(7066),y=t(2188),D=t(3077),T=t(5368),F=t(3135),r=t(2977),C=t(2649),n=t(2409),o=t(6167),p=t(4929);const s={name:"IMPORT_CONTENT_ITEM_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,p.mG)(this,void 0,void 0,function*(){const{ContentItemImportComponent:E}=yield t.e("projects_eav-ui_src_app_content-items_content-item-import_content-item-import_component_ts").then(t.bind(t,3603));return E})}},P={name:"CONTENT_ITEMS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,p.mG)(this,void 0,void 0,function*(){const{ContentItemsComponent:E}=yield Promise.all([t.e("default-projects_eav-ui_src_app_app-administration_services_index_ts"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_content-items_component_ts")]).then(t.bind(t,766));return E})}};var A=t(3184);const R=[{path:"",component:o.r,data:{dialog:P},children:[...n.U.getRoutes(),{path:"export/:contentTypeStaticName",loadChildren:()=>Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_services_app-dialog-config_service_ts-_ce590")]).then(t.bind(t,3232)).then(E=>E.ContentExportModule)},{path:"export/:contentTypeStaticName/:selectedIds",loadChildren:()=>Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_services_app-dialog-config_service_ts-_ce590")]).then(t.bind(t,3232)).then(E=>E.ContentExportModule)},{path:"import",component:o.r,data:{dialog:s}},{path:":contentTypeStaticName/import",loadChildren:()=>Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_services_app-dialog-config_service_ts-_ce591")]).then(t.bind(t,7561)).then(E=>E.ContentImportModule),data:{title:"Import Items"}},{matcher:C.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-90acdb1")]).then(t.bind(t,1595)).then(E=>E.EditModule)},{matcher:C.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(E=>E.RefreshEditModule)}]}];let j=(()=>{class E{}return E.\u0275fac=function(z){return new(z||E)},E.\u0275mod=A.oAB({type:E}),E.\u0275inj=A.cJS({imports:[[r.Bz.forChild(R)],r.Bz]}),E})();var I=t(8812),B=t(4272);let L=(()=>{class E{}return E.\u0275fac=function(z){return new(z||E)},E.\u0275mod=A.oAB({type:E}),E.\u0275inj=A.cJS({providers:[T._,I.l,B.g,y.i,x.s],imports:[[e.ez,j,F.q,M.Is,v.ot,m.Ps,D.o,g.u5,l.Fk,h.c,f.LD,c.si,a.ZX,i.Tx,g.UX,S.rP,d.g]]}),E})()},1282:(O,u,t)=>{t.d(u,{C:()=>d,x:()=>g});var e=t(6386);function g(v){var c;return null!==(c={[e.Q.Boolean]:"toggle_on",[e.Q.Custom]:"extension",[e.Q.DateTime]:"today",[e.Q.Empty]:"crop_free",[e.Q.Entity]:"share",[e.Q.Hyperlink]:"link",[e.Q.Number]:"dialpad",[e.Q.String]:"text_fields"}[v])&&void 0!==c?c:"device_unknown"}function d(v){var c;return null!==(c={[e.Q.Boolean]:"Boolean (yes/no)",[e.Q.Custom]:"Custom - ui-tools or custom types",[e.Q.DateTime]:"Date and/or time",[e.Q.Empty]:"Empty - for form-titles etc.",[e.Q.Entity]:"Entity (other content-items)",[e.Q.Hyperlink]:"Link / file reference",[e.Q.Number]:"Number",[e.Q.String]:"Text / string"}[v])&&void 0!==c?c:"device_unknown"}},2489:(O,u,t)=>{t.r(u),t.d(u,{ContentTypeFieldsModule:()=>j});var e=t(6362),g=t(587),d=t(178),v=t(7317),c=t(1130),M=t(5758),m=t(5590),h=t(4683),i=t(2796),l=t(1434),f=t(2528),S=t(7066),a=t(3077),x=t(5368),y=t(3135),D=t(2977),T=t(2649),F=t(2409),r=t(325),C=t(6167),n=t(4929);const o={name:"CONTENT_TYPE_FIELDS_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,n.mG)(this,void 0,void 0,function*(){const{ContentTypeFieldsComponent:I}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_content-type-fields_content-type-fields_component_ts")]).then(t.bind(t,8785));return I})}},p={name:"EDIT_CONTENT_TYPE_FIELDS_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,n.mG)(this,void 0,void 0,function*(){const{EditContentTypeFieldsComponent:I}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_content-type-fields_edit-content-type-fields_edit-content-type-fields-f4d799")]).then(t.bind(t,7305));return I})}};var s=t(3184);const P=[{path:"",component:C.r,data:{dialog:o},children:[{path:"add/:contentTypeStaticName",component:C.r,data:{dialog:p}},{path:"update/:contentTypeStaticName/:id/:editMode",component:C.r,data:{dialog:p}},...F.U.getRoutes(),r.i.route,{matcher:T.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-48a7641")]).then(t.bind(t,1595)).then(I=>I.EditModule)},{matcher:T.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(I=>I.RefreshEditModule)}]}];let A=(()=>{class I{}return I.\u0275fac=function(L){return new(L||I)},I.\u0275mod=s.oAB({type:I}),I.\u0275inj=s.cJS({imports:[[D.Bz.forChild(P)],D.Bz]}),I})();var R=t(898);let j=(()=>{class I{}return I.\u0275fac=function(L){return new(L||I)},I.\u0275mod=s.oAB({type:I}),I.\u0275inj=s.cJS({providers:[x._,S.s,R.Mr],imports:[[e.ez,A,y.q,M.Is,v.ot,m.Ps,a.o,g.u5,h.c,l.LD,c.si,f.ZX,i.Tx,d.g]]}),I})()},6066:(O,u,t)=>{t.r(u),t.d(u,{ImportAppModule:()=>S});var e=t(6362),g=t(5368),d=t(3135),v=t(2977),c=t(6167),M=t(4929);const m={name:"IMPORT_APP_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ImportAppComponent:a}=yield t.e("projects_eav-ui_src_app_import-app_import-app_component_ts").then(t.bind(t,4452));return a})}};var h=t(3184);const i=[{path:"",component:c.r,data:{dialog:m}}];let l=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[[v.Bz.forChild(i)],v.Bz]}),a})();var f=t(9322);let S=(()=>{class a{}return a.\u0275fac=function(y){return new(y||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({providers:[g._,f.a],imports:[[e.ez,l,d.q]]}),a})()},9989:(O,u,t)=>{t.d(u,{e:()=>M});var e=t(5368),g=t(3184),d=t(8784),v=t(2425);const c="cms/contentgroup/";let M=(()=>{class m{constructor(i,l,f){this.http=i,this.context=l,this.dnnContext=f}getItems(i){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(c+"replace"),{params:{appId:this.context.appId.toString(),guid:i.guid,part:i.part,index:i.index.toString()}})}saveItem(i){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(c+"replace"),{},{params:{guid:i.guid,part:i.part,index:i.index.toString(),entityId:i.id.toString(),add:`${i.add}`}})}removeItem(i,l){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl("cms/list/delete"),{params:{index:l,parent:i.guid,fields:i.part}})}getList(i){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(c+"itemlist"),{params:{appId:this.context.appId.toString(),guid:i.guid,part:i.part}})}saveList(i,l){return this.http.post(this.dnnContext.$2sxc.http.apiUrl(c+"itemlist"),l,{params:{appId:this.context.appId.toString(),guid:i.guid,part:i.part}})}getHeader(i){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(c+"header"),{params:{appId:this.context.appId.toString(),guid:i.guid}})}}return m.\u0275fac=function(i){return new(i||m)(g.LFG(d.eN),g.LFG(e._),g.LFG(v._y))},m.\u0275prov=g.Yz7({token:m,factory:m.\u0275fac}),m})()},6766:(O,u,t)=>{t.r(u),t.d(u,{ReplaceContentModule:()=>p});var e=t(9051),g=t(6362),d=t(587),v=t(3188),c=t(7317),M=t(5758),m=t(4770),h=t(5590),i=t(4683),l=t(1434),f=t(2528),S=t(9989),a=t(5368),x=t(3135),y=t(2977),D=t(2649),T=t(6167),F=t(4929);const r={name:"REPLACE_CONTENT_DIALOG",initContext:!0,panelSize:"medium",panelClass:null,getComponent(){return(0,F.mG)(this,void 0,void 0,function*(){const{ReplaceContentComponent:s}=yield t.e("projects_eav-ui_src_app_replace-content_replace-content_component_ts").then(t.bind(t,3429));return s})}};var C=t(3184);const n=[{path:"",component:T.r,data:{dialog:r},children:[{matcher:D.eP,loadChildren:()=>Promise.all([t.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("default-node_modules_angular_material_fesm2015_badge_mjs-node_modules_angular_material_fesm20-df7c03"),t.e("common"),t.e("projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-48a7640")]).then(t.bind(t,1595)).then(s=>s.EditModule),data:{history:!1}}]}];let o=(()=>{class s{}return s.\u0275fac=function(A){return new(A||s)},s.\u0275mod=C.oAB({type:s}),s.\u0275inj=C.cJS({imports:[[y.Bz.forChild(n)],y.Bz]}),s})(),p=(()=>{class s{}return s.\u0275fac=function(A){return new(A||s)},s.\u0275mod=C.oAB({type:s}),s.\u0275inj=C.cJS({providers:[a._,S.e],imports:[[g.ez,o,x.q,M.Is,c.ot,h.Ps,m.lN,l.LD,d.u5,f.ZX,v.Bb,i.c,e.Cl]]}),s})()},2270:(O,u,t)=>{t.d(u,{G:()=>e});const e="DROPDOWN_INSERT_VALUE"},4240:(O,u,t)=>{t.d(u,{d:()=>g});var e=t(3184);let g=(()=>{class d{onMousedown(c){c.stopPropagation()}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275dir=e.lG2({type:d,selectors:[["","appMousedownStopPropagation",""]],hostBindings:function(c,M){1&c&&e.NdJ("mousedown",function(h){return M.onMousedown(h)})}}),d})()},4251:(O,u,t)=>{function e(g,d,v=0){const M=g.length===v+1?d:e.bind(this,g,d,v+1),m=g[v],h="string"==typeof m.test?m.test:null,i="function"==typeof m.test?m.test:null,l=window;null!=h&&l[h]||null!=i&&i()?d():window.require([m.src],f=>{f&&!l[h]&&(l[h]=f),M()})}t.d(u,{y:()=>e})},7465:(O,u,t)=>{t.d(u,{Lp:()=>y,W7:()=>D,YI:()=>T,jb:()=>F});var e=t(3184),g=t(7317),d=t(6362),v=t(3280),c=t(1640),M=t(9295);function m(r,C){1&r&&e.Hsn(0,0,["*ngIf","miniFabVisible"])}const h=[[["","mat-mini-fab",""]]],i=["[mat-mini-fab]"],l=[[["eco-fab-speed-dial-trigger"]],[["eco-fab-speed-dial-actions"]]],f=["eco-fab-speed-dial-trigger","eco-fab-speed-dial-actions"],S=[[["","mat-fab",""]]],a=["[mat-fab]"];let y=(()=>{class r{constructor(n,o){this.renderer=o,this.miniFabVisible=!1,this.hideMiniFab=null,this._parent=n.get(D)}ngAfterContentInit(){this._buttons.changes.subscribe(()=>{this.initButtonStates(),this._parent.setActionsVisibility()}),this.initButtonStates()}initButtonStates(){this._buttons.forEach((n,o)=>{this.renderer.addClass(n._getHostElement(),"eco-fab-action-item"),this.changeElementStyle(n._getHostElement(),"z-index",""+(23-o))})}show(){!this._buttons||(this.resetAnimationState(),this.miniFabVisible=!0,this.showMiniFabAnimation=setTimeout(()=>{this._buttons.forEach((n,o)=>{let s,p=0;"scale"===this._parent.animationMode?(p=3+65*o,s="scale(1)"):s=this.getTranslateFunction("0");const P=n._getHostElement();this.changeElementStyle(P,"transition-delay",p+"ms"),this.changeElementStyle(P,"opacity","1"),this.changeElementStyle(P,"transform",s)})},50))}resetAnimationState(){clearTimeout(this.showMiniFabAnimation),this.hideMiniFab&&(this.hideMiniFab.unsubscribe(),this.hideMiniFab=null)}hide(){if(!this._buttons)return;this.resetAnimationState();const n=this._buttons.map((o,p)=>{let A,s="1",P=0;"scale"===this._parent.animationMode?(P=3-65*p,A="scale(0)",s="0"):A=this.getTranslateFunction(55*(p+1)-5*p+"px");const R=o._getHostElement();return this.changeElementStyle(R,"transition-delay",P+"ms"),this.changeElementStyle(R,"opacity",s),this.changeElementStyle(R,"transform",A),(0,v.R)(R,"transitionend").pipe((0,M.q)(1))});this.hideMiniFab=(0,c.D)(n).subscribe(()=>this.miniFabVisible=!1)}getTranslateFunction(n){const o=this._parent.direction;return("up"===o||"down"===o?"translateY":"translateX")+"("+("down"===o||"right"===o?"-":"")+n+")"}changeElementStyle(n,o,p){this.renderer.setStyle(n,o,p)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.zs3),e.Y36(e.Qsj))},r.\u0275cmp=e.Xpm({type:r,selectors:[["eco-fab-speed-dial-actions"]],contentQueries:function(n,o,p){if(1&n&&e.Suo(p,g.lW,4),2&n){let s;e.iGM(s=e.CRH())&&(o._buttons=s)}},ngContentSelectors:i,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(n,o){1&n&&(e.F$t(h),e.YNc(0,m,1,0,"ng-content",0)),2&n&&e.Q6J("ngIf",o.miniFabVisible)},directives:[d.O5],encapsulation:2}),r})(),D=(()=>{class r{constructor(n,o,p){this.elementRef=n,this.renderer=o,this.document=p,this.isInitialized=!1,this._direction="up",this._open=!1,this._animationMode="fling",this._fixed=!1,this._documentClickUnlistener=null,this.openChange=new e.vpe}get fixed(){return this._fixed}set fixed(n){this._fixed=n,this._processOutsideClickState()}get open(){return this._open}set open(n){const o=this._open;this._open=n,o!==this._open&&(this.openChange.emit(this._open),this.isInitialized&&this.setActionsVisibility())}get direction(){return this._direction}set direction(n){const o=this._direction;this._direction=n,o!==this.direction&&(this._setElementClass(o,!1),this._setElementClass(this.direction,!0),this.isInitialized&&this.setActionsVisibility())}get animationMode(){return this._animationMode}set animationMode(n){const o=this._animationMode;this._animationMode=n,o!==this._animationMode&&(this._setElementClass(o,!1),this._setElementClass(this.animationMode,!0),this.isInitialized&&Promise.resolve(null).then(()=>this.open=!1))}ngAfterContentInit(){this.isInitialized=!0,this.setActionsVisibility(),this._setElementClass(this.direction,!0),this._setElementClass(this.animationMode,!0)}ngOnDestroy(){this._unsetDocumentClickListener()}toggle(){this.open=!this.open}_onClick(){!this.fixed&&this.open&&(this.open=!1)}setActionsVisibility(){!this._childActions||(this.open?this._childActions.show():this._childActions.hide(),this._processOutsideClickState())}_setElementClass(n,o){const p=`eco-${n}`;o?this.renderer.addClass(this.elementRef.nativeElement,p):this.renderer.removeClass(this.elementRef.nativeElement,p)}_processOutsideClickState(){!this.fixed&&this.open?this._setDocumentClickListener():this._unsetDocumentClickListener()}_setDocumentClickListener(){this._documentClickUnlistener||(this._documentClickUnlistener=this.renderer.listen(this.document,"click",()=>{this.open=!1}))}_unsetDocumentClickListener(){this._documentClickUnlistener&&(this._documentClickUnlistener(),this._documentClickUnlistener=null)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(d.K0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["eco-fab-speed-dial"]],contentQueries:function(n,o,p){if(1&n&&e.Suo(p,y,5),2&n){let s;e.iGM(s=e.CRH())&&(o._childActions=s.first)}},hostVars:2,hostBindings:function(n,o){1&n&&e.NdJ("click",function(){return o._onClick()}),2&n&&e.ekj("eco-opened",o.open)},inputs:{fixed:"fixed",open:"open",direction:"direction",animationMode:"animationMode"},outputs:{openChange:"openChange"},ngContentSelectors:f,decls:3,vars:0,consts:[[1,"eco-fab-speed-dial-container"]],template:function(n,o){1&n&&(e.F$t(l),e.TgZ(0,"div",0),e.Hsn(1),e.Hsn(2,1),e.qZA())},styles:["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(360deg)}eco-fab-speed-dial .eco-fab-speed-dial-container{position:relative;display:flex;align-items:center;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;position:absolute;height:0;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{top:2px;left:7px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{top:7px;left:2px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{top:7px;right:2px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}\n"],encapsulation:2}),r})(),T=(()=>{class r{constructor(n){this.spin=!1,this._parent=n.get(D)}get sp(){return this.spin}_onClick(n){this._parent.fixed||(this._parent.toggle(),n.stopPropagation())}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.zs3))},r.\u0275cmp=e.Xpm({type:r,selectors:[["eco-fab-speed-dial-trigger"]],hostVars:2,hostBindings:function(n,o){1&n&&e.NdJ("click",function(s){return o._onClick(s)}),2&n&&e.ekj("eco-spin",o.sp)},inputs:{spin:"spin"},ngContentSelectors:a,decls:1,vars:0,template:function(n,o){1&n&&(e.F$t(S),e.Hsn(0))},encapsulation:2}),r})(),F=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.ez]]}),r})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.09.00/dist/ng-edit/common.42a6417da6ae3d74.js.map