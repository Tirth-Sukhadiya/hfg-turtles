(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[9182],{99182:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(16304),a=r(2747),u=r(18419),s=r(54704),i=r(98154),o=r(73507),l=r(41801),y=r(86163),p=r(95876),c=r(24233),_=r(90935),d=r(81987),g=r(77050),h=r(37405);class f{constructor(){var e=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var t=(0,n.Z)(function*(t){const{objectIdField:r}=e._queryEngine,n=yield(0,g.Bm)(e._getFeatureUrl,e._featureType.typeName,e._getFeatureOutputFormat,{customParameters:e._customParameters,dateFields:e._queryEngine.fieldsIndex.dateFields.map(e=>e.name),signal:t});yield(0,_.O3)(n),(0,i.k_)(t);const a=(0,_.lG)(n,{geometryType:e._queryEngine.geometryType,hasZ:!1,objectIdField:r});if(!(0,o.fS)(e._queryEngine.spatialReference,o.Zn))for(const i of a)(0,s.pC)(i.geometry)&&(i.geometry=(0,l.GH)((0,p.iV)((0,l.di)(i.geometry,e._queryEngine.geometryType,!1,!1),o.Zn,e._queryEngine.spatialReference)));let u=1;for(const s of a){const t={};(0,d.O0)(e._fieldsIndex,t,s.attributes,null,!0),s.attributes=t,null==s.attributes[r]&&(s.objectId=s.attributes[r]=u++)}return a});return function(e){return t.apply(this,arguments)}}()}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}load(e,t){var r=this;return(0,n.Z)(function*(){const{getFeatureUrl:n,getFeatureOutputFormat:a,spatialReference:u,fields:o,geometryType:l,featureType:p,objectIdField:_,customParameters:d}=e;r._featureType=p,r._customParameters=d,r._getFeatureUrl=n,r._getFeatureOutputFormat=a,r._fieldsIndex=new h.Z(o),yield r._checkProjection(u),(0,i.k_)(t),r._queryEngine=new c.Z({fields:o,geometryType:l,hasM:!1,hasZ:!1,objectIdField:_,spatialReference:u,timeInfo:null,featureStore:new y.Z({geometryType:l,hasM:!1,hasZ:!1})});const g=yield r._snapshotFeatures((0,s.Wg)(t.signal));return r._queryEngine.featureStore.addMany(g),{extent:r._queryEngine.fullExtent}})()}applyEdits(){return(0,n.Z)(function*(){throw new a.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(e={},t={}){var r=this;return(0,n.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQuery(e,t.signal)})()}queryFeatureCount(e={},t={}){var r=this;return(0,n.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForCount(e,t.signal)})()}queryObjectIds(e={},t={}){var r=this;return(0,n.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForIds(e,t.signal)})()}queryExtent(e={},t={}){var r=this;return(0,n.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForExtent(e,t.signal)})()}querySnapping(e,t={}){var r=this;return(0,n.Z)(function*(){return yield r._waitSnapshotComplete(),r._queryEngine.executeQueryForSnapping(e,t.signal)})()}setCustomParameters(e){this._customParameters=e}refresh(){var e=this;return(0,n.Z)(function*(){var t;return null==(t=e._snapshotTask)||t.abort(),e._snapshotTask=(0,i.vr)(e._snapshotFeatures),e._snapshotTask.promise.then(t=>{e._queryEngine.featureStore.clear(),t&&e._queryEngine.featureStore.addMany(t)},t=>{e._queryEngine.featureStore.clear(),(0,i.D_)(t)||u.Z.getLogger("esri.layers.WFSLayer").error(new a.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:t}))}),yield e._waitSnapshotComplete(),{extent:e._queryEngine.fullExtent}})()}_waitSnapshotComplete(){var e=this;return(0,n.Z)(function*(){if(e._snapshotTask&&!e._snapshotTask.finished){try{yield e._snapshotTask.promise}catch{}return e._waitSnapshotComplete()}})()}_checkProjection(e){return(0,n.Z)(function*(){try{yield(0,p._W)(o.Zn,e)}catch{throw new a.Z("unsupported-projection","Projection not supported",{spatialReference:e})}})()}}}}]);