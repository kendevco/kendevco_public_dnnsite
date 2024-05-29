"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-be8373"],{898:(m,l,s)=>{s.d(l,{Mr:()=>g,jt:()=>c});var i=s(635),y=s(7066),u=s(5368),e=s(3184),a=s(8784),o=s(2425);const p="admin/field/",c=p+"all";let g=(()=>{class d{constructor(t,r,n){this.http=t,this.context=r,this.dnnContext=n}apiUrl(t){return this.dnnContext.$2sxc.http.apiUrl(t)}typeListRetrieve(){return this.http.get(this.apiUrl(p+"DataTypes"),{params:{appid:this.context.appId.toString()}})}getInputTypesList(){return this.http.get(this.apiUrl(p+"InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe((0,i.U)(t=>t.map(n=>({dataType:n.Type.substring(0,n.Type.indexOf("-")),inputType:n.Type,label:n.Label,description:n.Description,isDefault:n.IsDefault,isObsolete:n.IsObsolete,isRecommended:n.IsRecommended,obsoleteMessage:n.ObsoleteMessage,icon:n.IsDefault?"star":n.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.http.get(this.apiUrl(p+"ReservedNames"))}getFields(t){return this.http.get(this.apiUrl(c),{params:{appid:this.context.appId.toString(),staticName:t}}).pipe((0,i.U)(r=>{if(r)for(const n of r){if(!n.Metadata)continue;const h=n.Metadata,U=h[n.Type],_=h[n.InputType];h.merged=Object.assign(Object.assign(Object.assign({},h.All),U),_)}return r}))}reOrder(t,r){return this.http.post(this.apiUrl(p+"Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),order:JSON.stringify(t)}})}setTitle(t,r){return this.http.post(this.apiUrl(y._+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),attributeId:t.Id.toString()}})}rename(t,r,n){return this.http.post(this.apiUrl(p+"Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:r.toString(),attributeId:t.toString(),newName:n}})}delete(t,r){if(t.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl(p+"Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:r.Id.toString(),attributeId:t.Id.toString()}})}add(t,r){return this.http.post(this.apiUrl(p+"Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:r.toString(),Id:t.Id.toString(),Type:t.Type,InputType:t.InputType,StaticName:t.StaticName,IsTitle:t.IsTitle.toString(),Index:t.SortOrder.toString()}})}updateInputType(t,r,n){return this.http.post(this.apiUrl(p+"InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:t.toString(),field:r,inputType:n}})}}return d.\u0275fac=function(t){return new(t||d)(e.LFG(a.eN),e.LFG(u._),e.LFG(o._y))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac}),d})()},2409:(m,l,s)=>{s.d(l,{U:()=>y});var i=s(941);class y{static getRoutes(){const e={path:"metadata/:targetType/:keyType/:key",loadChildren:()=>Promise.all([s.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),s.e("default-projects_eav-ui_src_app_permissions_index_ts"),s.e("common"),s.e("projects_eav-ui_src_app_metadata_metadata_module_ts")]).then(s.bind(s,1901)).then(o=>o.MetadataModule),data:{title:"Metadata"}};return[e,Object.assign(Object.assign({},e),{path:`${e.path}/title/:title`}),Object.assign(Object.assign({},e),{path:`${e.path}/contentType/:contentTypeStaticName`}),Object.assign(Object.assign({},e),{path:`${e.path}/title/:title/contentType/:contentTypeStaticName`})]}static getUrl(e,a,o,p,c){let g=`metadata/${e}/${a}/${o}`;return p&&(g+=`/title/${encodeURIComponent(p)}`),c&&(g+=`/contentType/${c}`),g}static getUrlApp(e,a){return this.getUrl(i.Zy.metadata.app.targetType,i.Zy.metadata.app.keyType,e.toString(),a)}static getUrlAttribute(e,a,o){return this.getUrl(i.Zy.metadata.attribute.targetType,i.Zy.metadata.attribute.keyType,e.toString(),a,o)}static getUrlContentType(e,a){return this.getUrl(i.Zy.metadata.contentType.targetType,i.Zy.metadata.contentType.keyType,e,a)}static getUrlEntity(e,a,o){return this.getUrl(i.Zy.metadata.entity.targetType,i.Zy.metadata.entity.keyType,e,a,o)}}},325:(m,l,s)=>{s.d(l,{i:()=>y});var i=s(941);let y=(()=>{class u{static getUrl(a,o,p){return`permissions/${a}/${o}/${p}`}static getUrlApp(a){return this.getUrl(i.Zy.metadata.app.targetType,i.Zy.metadata.app.keyType,a.toString())}static getUrlAttribute(a){return this.getUrl(i.Zy.metadata.attribute.targetType,i.Zy.metadata.attribute.keyType,a.toString())}static getUrlContentType(a){return this.getUrlEntity(a)}static getUrlEntity(a){return this.getUrl(i.Zy.metadata.entity.targetType,i.Zy.metadata.entity.keyType,a)}static getUrlLanguage(a){return this.getUrl(i.Zy.metadata.language.targetType,i.Zy.metadata.language.keyType,a)}}return u.route={path:"permissions/:targetType/:keyType/:key",loadChildren:()=>s.e("projects_eav-ui_src_app_permissions_permissions_module_ts").then(s.bind(s,2965)).then(e=>e.PermissionsModule),data:{title:"Permissions"}},u})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.09.00/dist/ng-edit/projects_eav-ui_src_app_content-type-fields_services_content-types-fields_service_ts-projects-be8373.ca76587c5a09fa1d.js.map