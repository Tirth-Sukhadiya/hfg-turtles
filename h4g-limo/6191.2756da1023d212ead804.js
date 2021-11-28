(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[6191],{52391:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var r=a(16304),o=a(8651),i=a(93668),l=a(2747),s=a(5902),n=a(54704),u=a(67372),p=a(46942),d=(a(12131),a(47648),a(18419),a(8680)),g=a(2379),y=a(95046),b=a(35718),h=a(3523),c=a(68141),v=a(69265),m=a(37001),M=a(5052);const f={id:"0/0/0",level:0,row:0,col:0,extent:null};let w=class extends((0,c.h)((0,m.M)((0,v.Q)(h.Z)))){constructor(){super(...arguments),this.tileInfo=M.Z.create({spatialReference:g.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new y.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,g.Z.WebMercator),this.spatialReference=g.Z.WebMercator}getTileBounds(e,t,a,r){const o=r||(0,b.Ue)();return f.level=e,f.row=t,f.col=a,f.extent=o,this.tileInfo.updateTileInfo(f),f.extent=null,o}fetchTile(e,t,a,r={}){const{signal:o}=r,l=this.getTileUrl(e,t,a),s={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,i.default)(l,s).then(e=>e.data)}getTileUrl(){throw new l.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,o._)([(0,p.Cb)({type:M.Z})],w.prototype,"tileInfo",void 0),(0,o._)([(0,p.Cb)({type:["show","hide"]})],w.prototype,"listMode",void 0),(0,o._)([(0,p.Cb)({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),(0,o._)([(0,p.Cb)()],w.prototype,"fullExtent",void 0),(0,o._)([(0,p.Cb)()],w.prototype,"spatialReference",void 0),w=(0,o._)([(0,d.j)("esri.layers.BaseTileLayer")],w);var _=w,C=a(83727);const Z=new s.Xn({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let S=class extends((0,c.h)((0,C.q)((0,u.R)(_)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new M.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:g.Z.WebMercator},spatialReference:g.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return(0,n.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return Z.toJSON(this.style)}get bingLogo(){return(0,n.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then(()=>this._getMetadata()):Promise.reject(new l.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||(0,n.Wi)(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],o=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],i=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",o).replace("{quadkey}",i)}fetchAttributionData(){var e=this;return(0,r.Z)(function*(){return e.load().then(()=>(0,n.Wi)(e.bingMetadata)?null:{contributors:e.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}))}))})})()}_getMetadata(){return(0,i.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(e=>{const t=e.data;if(200!==t.statusCode)throw new l.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new l.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new l.Z("bingmapslayer:getmetadata","no bing resources")}).catch(e=>{throw new l.Z("bingmapslayer:getmetadata",e.message)})}_getPortalBingKey(){return(0,i.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new l.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new l.Z("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,a){let r="";for(let o=e;o>0;o--){let e=0;const i=1<<o-1;0!=(a&i)&&(e+=1),0!=(t&i)&&(e+=2),r+=e.toString()}return r}};(0,o._)([(0,p.Cb)({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),(0,o._)([(0,p.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),(0,o._)([(0,p.Cb)({type:M.Z})],S.prototype,"tileInfo",void 0),(0,o._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"copyright",null),(0,o._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),(0,o._)([(0,p.Cb)({type:Z.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:Z.read}}})],S.prototype,"style",void 0),(0,o._)([(0,p.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],S.prototype,"operationalLayerType",null),(0,o._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),(0,o._)([(0,p.Cb)({type:String,readOnly:!0})],S.prototype,"bingLogo",null),S=(0,o._)([(0,d.j)("esri.layers.BingMapsLayer")],S);var j=S}}]);