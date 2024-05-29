"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts"],{1038:($,f,e)=>{e.r(f),e.d(f,{EditContentTypeComponent:()=>X});var p=e(6317),v=e(6562),l=e(635),T=e(745),r=e(2270),y=e(941);const Z=/(^[A-Za-z][A-Za-z0-9]+$)|(^@[A-Za-z][A-Za-z0-9-]*$)/;var E=e(7066),t=e(3184),N=e(5758),A=e(2977),b=e(2528),C=e(6362),d=e(587),x=e(4770),O=e(4683),M=e(8352),u=e(6531),k=e(1434),J=e(1130),U=e(7317),I=e(2376),Q=e(5590),D=e(7294);function P(o,c){1&o&&(t.TgZ(0,"app-field-hint",23),t._uU(1,"This field is required"),t.qZA()),2&o&&t.Q6J("isError",!0)}function j(o,c){if(1&o&&(t.TgZ(0,"app-field-hint",23),t._uU(1),t.qZA()),2&o){const n=t.oxw(4);t.Q6J("isError",!0),t.xp6(1),t.Oqu(n.contentTypeNameError)}}function B(o,c){if(1&o&&(t.ynx(0),t.YNc(1,P,2,1,"app-field-hint",22),t.YNc(2,j,2,2,"app-field-hint",22),t.BQk()),2&o){t.oxw();const n=t.MAs(8);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern)}}function Y(o,c){if(1&o&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&o){const n=c.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.name," ")}}function w(o,c){if(1&o&&(t.TgZ(0,"div",7)(1,"h3"),t._uU(2,"Shared Content Type (Ghost)"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Note: this can't be edited in the UI, for now if you really know what you're doing, do it in the DB"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()),2&o){const n=t.oxw(2).ngIf;t.xp6(6),t.hij("Uses Type Definition of: ",n.contentType.SharedDefId,"")}}function H(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("ngSubmit",function(){return t.CHM(n),t.oxw(2).save()}),t.TgZ(2,"div",6)(3,"div",7)(4,"mat-form-field",8)(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"input",9,10),t.NdJ("ngModelChange",function(i){return t.CHM(n),t.oxw(2).changeContentTypeName(i)}),t.qZA()(),t.YNc(9,B,3,2,"ng-container",2),t.qZA(),t.TgZ(10,"mat-accordion")(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t._uU(14,"Advanced"),t.qZA(),t._UZ(15,"mat-panel-description"),t.qZA(),t.TgZ(16,"div",7)(17,"mat-form-field",8)(18,"mat-label"),t._uU(19,"Scope"),t.qZA(),t.TgZ(20,"mat-select",11),t.NdJ("ngModelChange",function(i){return t.CHM(n),t.oxw(2).changeScope(i)}),t.YNc(21,Y,2,2,"mat-option",12),t.TgZ(22,"mat-option",13),t._uU(23,"Other..."),t.qZA()(),t.TgZ(24,"button",14)(25,"mat-icon",15),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).unlockScope()}),t._uU(26),t.qZA()()(),t.TgZ(27,"app-field-hint"),t._uU(28," The scope should almost never be changed - "),t.TgZ(29,"a",16),t._uU(30,"see help"),t.qZA()()(),t.TgZ(31,"div",7)(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Static Name"),t.qZA(),t._UZ(35,"input",17),t.qZA()(),t.YNc(36,w,7,1,"div",18),t.qZA()()(),t.TgZ(37,"div",19)(38,"button",20),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).closeDialog()}),t._uU(39,"Cancel"),t.qZA(),t.TgZ(40,"button",21),t._uU(41," Save "),t.qZA()()()}if(2&o){const n=t.MAs(1),a=t.MAs(8),i=t.oxw().ngIf,s=t.oxw();t.xp6(7),t.Q6J("pattern",s.contentTypeNamePattern)("ngModel",i.contentType.Name),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(1),t.Q6J("@.disabled",i.disableAnimation),t.xp6(10),t.Q6J("ngModel",i.contentType.Scope)("disabled",i.lockScope),t.xp6(1),t.Q6J("ngForOf",i.scopeOptions),t.xp6(1),t.Q6J("value",s.dropdownInsertValue),t.xp6(2),t.Q6J("tippy",i.lockScope?"Unlock":"Lock"),t.xp6(2),t.hij(" ",i.lockScope?"lock":"lock_open"," "),t.xp6(9),t.Q6J("ngModel",i.contentType.StaticName),t.xp6(1),t.Q6J("ngIf",i.contentType.SharedDefId),t.xp6(4),t.Q6J("disabled",!n.form.valid||i.loading)}}function F(o,c){if(1&o&&(t.ynx(0),t.YNc(1,H,42,13,"form",3),t.BQk()),2&o){const n=c.ngIf;t.xp6(1),t.Q6J("ngIf",n.contentType)}}let X=(()=>{class o{constructor(n,a,i,s){this.dialogRef=n,this.route=a,this.contentTypesService=i,this.snackBar=s,this.hostClass="dialog-component",this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName"),this.contentTypeNamePattern=Z,this.contentTypeNameError="Standard letters and numbers are allowed. Must start with a letter.",this.dropdownInsertValue=r.G,this.contentType$=new p.X(null),this.lockScope$=new p.X(!0),this.scopeOptions$=new p.X(null),this.disableAnimation$=new p.X(!0),this.loading$=new p.X(!1),this.viewModel$=(0,v.a)([this.contentType$,this.lockScope$,this.scopeOptions$,this.disableAnimation$,this.loading$]).pipe((0,l.U)(([h,g,m,S,z])=>({contentType:h,lockScope:g,scopeOptions:m,disableAnimation:S,loading:z}))),this.scope=this.route.snapshot.parent.paramMap.get("scope")}ngOnInit(){const n=this.contentTypeStaticName?this.contentTypesService.retrieveContentType(this.contentTypeStaticName).pipe((0,l.U)(i=>Object.assign(Object.assign({},i),{ChangeStaticName:!1,NewStaticName:i.StaticName}))):(0,T.of)({StaticName:"",Name:"",Description:"",Scope:this.scope,ChangeStaticName:!1,NewStaticName:""}),a=this.contentTypesService.getScopes();(0,v.a)([n,a]).subscribe(([i,s])=>{var h;this.contentType$.next(i);const g=[...null!==(h=this.scopeOptions$.value)&&void 0!==h?h:[]];s.forEach(m=>{g.some(S=>S.value===m.value)||g.push(m)}),g.some(m=>m.value===this.scope)||g.push({name:this.scope,value:this.scope}),this.scopeOptions$.next(g)})}ngOnDestroy(){this.contentType$.complete(),this.lockScope$.complete(),this.scopeOptions$.complete(),this.disableAnimation$.complete(),this.loading$.complete()}ngAfterViewInit(){setTimeout(()=>this.disableAnimation$.next(!1))}closeDialog(){this.dialogRef.close()}changeContentTypeName(n){this.contentType$.next(Object.assign(Object.assign({},this.contentType$.value),{Name:n}))}changeScope(n){n!==r.G||(n=prompt("This is an advanced feature to show content-types of another scope. Don't use this if you don't know what you're doing, as content-types of other scopes are usually hidden for a good reason.")||y.Zy.scopes.default.value,this.scopeOptions$.value.some(a=>a.value===n))||this.scopeOptions$.next([{name:n,value:n},...this.scopeOptions$.value]),this.contentType$.next(Object.assign(Object.assign({},this.contentType$.value),{Scope:n}))}unlockScope(){this.lockScope$.next(!this.lockScope$.value),this.lockScope$.value&&this.contentType$.next(Object.assign(Object.assign({},this.contentType$.value),{Scope:this.scope}))}save(){this.loading$.next(!0),this.snackBar.open("Saving..."),this.contentTypesService.save(this.contentType$.value).subscribe(n=>{this.loading$.next(!1),this.snackBar.open("Saved",null,{duration:2e3}),this.closeDialog()}),document.activeElement instanceof HTMLElement&&document.activeElement.blur()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(N.so),t.Y36(A.gz),t.Y36(E.s),t.Y36(b.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-content-type"]],hostVars:1,hostBindings:function(n,a){2&n&&t.Ikx("className",a.hostClass)},decls:5,vars:4,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],[4,"ngIf"],["class","dialog-form",3,"ngSubmit",4,"ngIf"],[1,"dialog-form",3,"ngSubmit"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],[1,"edit-input"],["appearance","standard","color","accent"],["matInput","","type","text","required","","name","Name",3,"pattern","ngModel","ngModelChange"],["name","ngModel"],["name","Scope",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-icon-button","","type","button","matSuffix","",3,"tippy"],["appClickStopPropagation","",3,"click"],["href","https://2sxc.org/help?tag=scope","target","_blank","appClickStopPropagation",""],["matInput","","type","text","name","StaticName","disabled","",3,"ngModel"],["class","edit-input",4,"ngIf"],[1,"dialog-form-actions"],["mat-raised-button","","type","button",3,"click"],["mat-raised-button","","type","submit","color","accent",3,"disabled"],[3,"isError",4,"ngIf"],[3,"isError"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.qZA()(),t.YNc(3,F,2,1,"ng-container",2),t.ALo(4,"async")),2&n&&(t.xp6(2),t.Oqu(a.contentTypeStaticName?"Edit Content Type":"New Content Type"),t.xp6(1),t.Q6J("ngIf",t.lcZ(4,2,a.viewModel$)))},directives:[N.uh,C.O5,d._Y,d.JL,d.F,x.KE,x.hX,O.Nt,d.Fj,d.Q7,d.c5,d.JJ,d.On,M.Y,u.pp,u.ib,u.yz,u.yK,u.u4,k.gD,C.sg,J.ey,U.lW,x.R9,I.$,Q.Hw,D.E],pipes:[C.Ov],styles:[".edit-input[_ngcontent-%COMP%]{padding-bottom:8px}.mat-accordion[_ngcontent-%COMP%]{padding-bottom:8px;display:block}"]}),o})()},7294:($,f,e)=>{e.d(f,{E:()=>v});var p=e(3184);let v=(()=>{class l{onClick(r){r.stopPropagation()}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275dir=p.lG2({type:l,selectors:[["","appClickStopPropagation",""]],hostBindings:function(r,y){1&r&&p.NdJ("click",function(_){return y.onClick(_)})}}),l})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.09.00/dist/ng-edit/projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4.54eba3c60263a419.js.map