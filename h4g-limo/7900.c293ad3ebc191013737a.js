(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[7900],{47900:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var i=r(16304),o=r(8651),s=r(82772),n=(r(67929),r(48548),r(10767),r(77167),r(34438),r(28079),r(88292),r(59719),r(87765)),a=r(93668),l=r(2747),p=r(18419),d=r(54704),y=r(67372),u=r(98154),c=r(57319),h=r(72147),f=r(46942),g=(r(12131),r(26511)),b=(r(47648),r(41460)),m=r(8680),v=r(3523),I=r(10165),_=r(43839),w=r(83727),L=r(20174),C=r(37001),F=r(27818),S=r(94330),j=r(17788),E=r(32801),O=r(31879),T=r(16890),P=r(74474),x=r(37405),A=r(21550),Z=r(33250),D=r(43628),R=r(52067),U=r(64937),q=r(49533);let Q=class extends q.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,o._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"name",void 0),(0,o._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],Q.prototype,"field",void 0),(0,o._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"currentRangeExtent",void 0),(0,o._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],Q.prototype,"fullRangeExtent",void 0),(0,o._)([(0,f.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Q.prototype,"type",void 0),Q=(0,o._)([(0,m.j)("esri.layers.support.RangeInfo")],Q);var N=Q,k=r(58986),V=r(65669),G=r(524),W=r(12881);const K=["3DObject","Point"],M=p.Z.getLogger("esri.layers.SceneLayer"),Y=(0,P.v)();let $=class extends((0,F.V)((0,_.Y)((0,w.q)((0,L.I)((0,C.M)((0,y.R)((0,I.V)(v.Z)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,o,s;const n=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return n&&"inherited"!==n.type?n:null!=(o=null==(s=this.getField(e))?void 0:s.domain)?o:null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new x.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:Z.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return H[this.profile]||"mesh"}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:S.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:o,supportsReturnServiceEditsInSourceSpatialReference:s},data:{supportsZ:n,supportsM:a,isVersioned:l,supportsAttachment:p},operations:{supportsEditing:y,supportsUpdate:u,supportsQuery:c,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:s,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:p,supportsZ:n,supportsM:a,isVersioned:l},operations:{supportsQuery:c,supportsQueryAttachments:h,supportsEditing:y&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:u&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,d.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e)),e||void 0}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&z[r]?z[r]:(M.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>(0,k.y)(this,{origin:"service"},t)).then(()=>(0,A.YN)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new V.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(M.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,G.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,i.Z)(function*(){if(yield e.load(),(0,d.Wi)(e.associatedLayer))throw new l.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(t){throw new l.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:t})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(t=>t.name===e)}queryCachedStatistics(e,t){var r=this;return(0,i.Z)(function*(){if(yield r.load(t),!r.statisticsInfo)throw new l.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=r.fieldsIndex.get(e);if(!i)throw new l.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of r.statisticsInfo)if(e.name===i.name){const i=(0,c.v_)(r.parsedUrl.path,e.href);return(0,a.default)(i,{query:{f:"json",token:r.apiKey},responseType:"json",signal:t?t.signal:null}).then(e=>e.data)}throw new l.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,t){var r=this;return(0,i.Z)(function*(){return r._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>r._getTypeKeywords(),portalItemLayerType:"scene"},e)})()}save(){var e=this;return(0,i.Z)(function*(){const t={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(0,t)})()}applyEdits(e,t){var o=this;return(0,i.Z)(function*(){const i=yield r.e(1392).then(r.bind(r,61392));if(yield o.load(),(0,d.Wi)(o.associatedLayer))throw new l.Z(`${o.type}-layer:not-editable`,"Service is not editable");return yield o.associatedLayer.load(),i.applyEdits(o,o.associatedLayer.source,e,t)})()}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===K.indexOf(e.layerType))throw new l.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=o;break;case"vertex-reference-frame":r=!0,i=!o;break;default:r=!1}}if(!r)throw new l.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new l.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new l.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(t=>t.name===e.name)),r=!!((0,d.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(t=>t&&e.name===t.name));this._fieldUsageInfo[e.name]={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,d.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,d.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,g.vw)(this);for(let r=0;r<e.length;r++){const i=e[r],o=this.originIdOf(i),s=this.associatedLayer.originIdOf(i);o<s&&(2===s||3===s)&&t.setAtOrigin(i,this.associatedLayer[i],s)}}_setAssociatedFeatureLayer(e){var t=this;return(0,i.Z)(function*(){if(-1===["mesh-pyramids","points"].indexOf(t.profile))return;const r=new T.W(t.parsedUrl,t.portalItem,t.apiKey,e);try{t.associatedLayer=yield r.fetch()}catch(i){(0,u.D_)(i)||t._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){(0,h.tH)(this,["popupTemplate","popupEnabled"],()=>this.popupEnabled&&null!=this.popupTemplate).then(()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?M.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):M.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)})}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&M.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&M.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,o._)([(0,f.Cb)({types:{key:"type",base:E.Z,typeMap:{selection:O.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],$.prototype,"featureReduction",void 0),(0,o._)([(0,f.Cb)({type:[N],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],$.prototype,"rangeInfos",void 0),(0,o._)([(0,f.Cb)({json:{read:!1}})],$.prototype,"associatedLayer",void 0),(0,o._)([(0,f.Cb)({type:["show","hide"]})],$.prototype,"listMode",void 0),(0,o._)([(0,f.Cb)({type:["ArcGISSceneServiceLayer"]})],$.prototype,"operationalLayerType",void 0),(0,o._)([(0,f.Cb)({json:{read:!1},readOnly:!0})],$.prototype,"type",void 0),(0,o._)([(0,f.Cb)({...Y.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],$.prototype,"fields",void 0),(0,o._)([(0,f.Cb)()],$.prototype,"types",null),(0,o._)([(0,f.Cb)()],$.prototype,"typeIdField",null),(0,o._)([(0,f.Cb)()],$.prototype,"formTemplate",null),(0,o._)([(0,f.Cb)({readOnly:!0})],$.prototype,"fieldsIndex",null),(0,o._)([(0,f.Cb)({type:U.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],$.prototype,"floorInfo",void 0),(0,o._)([(0,f.Cb)(Y.outFields)],$.prototype,"outFields",void 0),(0,o._)([(0,f.Cb)({type:Z.U4,readOnly:!0,json:{read:!1}})],$.prototype,"nodePages",void 0),(0,o._)([(0,b.r)("service","nodePages",["nodePages","pointNodePages"])],$.prototype,"readNodePages",null),(0,o._)([(0,f.Cb)({type:[Z.QI],readOnly:!0})],$.prototype,"materialDefinitions",void 0),(0,o._)([(0,f.Cb)({type:[Z.Yh],readOnly:!0})],$.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,f.Cb)({type:[Z.H3],readOnly:!0})],$.prototype,"geometryDefinitions",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],$.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],$.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],$.prototype,"statisticsInfo",void 0),(0,o._)([(0,f.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),(0,o._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],$.prototype,"path",void 0),(0,o._)([(0,f.Cb)(j.PV)],$.prototype,"elevationInfo",null),(0,o._)([(0,f.Cb)({type:String})],$.prototype,"geometryType",null),(0,o._)([(0,f.Cb)(j.iR)],$.prototype,"labelsVisible",void 0),(0,o._)([(0,f.Cb)({type:[D.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:R.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:R.r},write:!0}})],$.prototype,"labelingInfo",void 0),(0,o._)([(0,f.Cb)(j.rn)],$.prototype,"legendEnabled",void 0),(0,o._)([(0,f.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,i;if("number"==typeof e&&e>=0&&e<=1)return e;const o=null==(r=t.layerDefinition)||null==(i=r.drawingInfo)?void 0:i.transparency;return void 0!==o?(0,W.b)(o):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],$.prototype,"opacity",void 0),(0,o._)([(0,f.Cb)({types:n.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],$.prototype,"renderer",null),(0,o._)([(0,f.Cb)({json:{read:!1}})],$.prototype,"cachedDrawingInfo",void 0),(0,o._)([(0,b.r)("service","cachedDrawingInfo")],$.prototype,"readCachedDrawingInfo",null),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"capabilities",null),(0,o._)([(0,f.Cb)({type:Boolean,json:{read:!1}})],$.prototype,"editingEnabled",null),(0,o._)([(0,f.Cb)(j.C_)],$.prototype,"popupEnabled",void 0),(0,o._)([(0,f.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],$.prototype,"popupTemplate",void 0),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"defaultPopupTemplate",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],$.prototype,"objectIdField",void 0),(0,o._)([(0,b.r)("service","objectIdField",["objectIdField","fields"])],$.prototype,"readObjectIdField",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],$.prototype,"globalIdField",void 0),(0,o._)([(0,b.r)("service","globalIdField",["globalIdField","fields"])],$.prototype,"readGlobalIdField",null),(0,o._)([(0,f.Cb)({readOnly:!0,type:String,json:{read:!1}})],$.prototype,"displayField",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],$.prototype,"profile",void 0),(0,o._)([(0,b.r)("service","profile",["store.profile"])],$.prototype,"readProfile",null),(0,o._)([(0,f.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],$.prototype,"normalReferenceFrame",void 0),(0,o._)([(0,f.Cb)(j.YI)],$.prototype,"screenSizePerspectiveEnabled",void 0),$=(0,o._)([(0,m.j)("esri.layers.SceneLayer")],$);const z={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},H={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};var B=$}}]);