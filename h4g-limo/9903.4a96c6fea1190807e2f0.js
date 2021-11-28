(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[9903],{78386:(e,t,r)=>{"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const a=e[i].size;"number"==typeof a&&(t+=a,r++)}return t/r}(e.stops):t}function s(e,t){if(!t)return e;const r=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:r,minSize:i}=t;return(a(r,e)+a(i,e))/2});let i=0;const s=r.length;if(0===s)return e;for(let a=0;a<s;a++)i+=r[a];const n=Math.floor(i/s);return Math.max(n,e)}function n(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const a="visualVariables"in t?s(r,t.visualVariables):r;if("simple"===t.type)return i(a,t.symbol);if("unique-value"===t.type){let e=a;return t.uniqueValueInfos.forEach(t=>{e=i(e,t.symbol)}),e}if("class-breaks"===t.type){let e=a;return t.classBreakInfos.forEach(t=>{e=i(e,t.symbol)}),e}return a}r.d(t,{k:()=>n})},29903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var i=r(16304),a=r(8651),s=r(18419),n=r(98154),o=r(46942),l=(r(12131),r(47648),r(8680)),h=r(34430),u=r(28690),p=r(67692),d=r(61789),c=r(63054),f=r(29104);let m=class extends f.Z{renderChildren(e){if(e.drawPhase!==c.jx.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some(e=>e.hasData))return;super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(16384),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};m=(0,a._)([(0,l.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],m);var y=m,g=r(13161),x=r(93729),v=r(2747),b=r(54704),w=r(17788),C=r(29009),I=r(78386),_=r(10954),M=r(91941);const P=e=>{let t=class extends e{initialize(){this.exportImageParameters=new C.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e,t){var r=this;return(0,i.Z)(function*(){const{layer:a}=r;if(!e)return Promise.reject(new v.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const s=r.get("view.scale"),o=[],l=function(){var e=(0,i.Z)(function*(e){if(e.visible&&(0===e.minScale||s<=e.minScale)&&(0===e.maxScale||s>=e.maxScale))if(e.sublayers)e.sublayers.forEach(l);else if(e.popupEnabled){const r=(0,M.V)(e,{...t,defaultPopupTemplateEnabled:!1});(0,b.pC)(r)&&o.unshift({sublayer:e,popupTemplate:r})}});return function(t){return e.apply(this,arguments)}}(),h=a.sublayers.toArray().reverse().map(l);yield Promise.all(h);const u=o.map(function(){var a=(0,i.Z)(function*({sublayer:i,popupTemplate:a}){yield i.load().catch(()=>{});const s=i.createQuery(),n=(0,b.pC)(t)?t.event:null,o=(0,I.k)({renderer:i.renderer,event:n}),l=r.createFetchPopupFeaturesQueryGeometry(e,o);s.geometry=l,s.outFields=yield(0,M.e)(i,a);const h=yield r._loadArcadeModules(a);return h&&h.arcadeUtils.hasGeometryOperations(a)||(s.maxAllowableOffset=l.width/o),(yield i.queryFeatures(s)).features});return function(e){return a.apply(this,arguments)}}());return(yield(0,n.as)(u)).reduce((e,t)=>t.value?[...e,...t.value]:e,[]).filter(e=>null!=e)})()}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return(0,_.LC)()}};return(0,a._)([(0,o.Cb)()],t.prototype,"exportImageParameters",void 0),(0,a._)([(0,o.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,a._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,a._)([(0,o.Cb)(w.qG)],t.prototype,"timeExtent",void 0),t=(0,a._)([(0,l.j)("esri.views.layers.MapImageLayerView")],t),t};var V=r(72445),q=r(49455);const E=s.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let R=class extends(P((0,V.y)((0,p.y)(x.Z)))){constructor(){super(...arguments),this._highlightGraphics=new h.ZP}hitTest(){return null}update(e){this.strategy.update(e).catch(e=>{(0,n.D_)(e)||E.error(e)})}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,a=r>=10;this._bitmapContainer=new u.c,this.container.addChild(this._bitmapContainer);const s=new d.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y(this.view.featuresTilingScheme)});this.container.addChild(s.container),this.strategy=new g.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return(0,q.K)(e,t,this.view)}doRefresh(){var e=this;return(0,i.Z)(function*(){e.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};(0,a._)([(0,o.Cb)()],R.prototype,"strategy",void 0),(0,a._)([(0,o.Cb)()],R.prototype,"updating",void 0),R=(0,a._)([(0,l.j)("esri.views.2d.layers.MapImageLayerView2D")],R);var Z=R},72445:(e,t,r)=>{"use strict";r.d(t,{y:()=>h});var i=r(8651),a=r(18419),s=r(98154),n=r(72147),o=r(46942),l=(r(12131),r(47648),r(8680));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,n.on)(this,"layer","refresh",()=>{this.doRefresh().catch(e=>{(0,s.D_)(e)||a.Z.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return(0,i._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},91941:(e,t,r)=>{"use strict";r.d(t,{V:()=>l,e:()=>n});var i=r(16304),a=r(54704),s=r(21550);function n(e){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)(function*(e,t=e.popupTemplate){if(!(0,a.pC)(t))return[];const r=yield t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=t,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:h}=e;if(r.includes("*"))return["*"];const u=i?yield(0,s.CH)(e):[],p=(0,s.Q0)(e.fieldsIndex,[...r,...u]);return o&&p.push(o),p&&n&&e.fieldsIndex.has(n)&&-1===p.indexOf(n)&&p.push(n),p&&l&&e.fieldsIndex.has(l)&&-1===p.indexOf(l)&&p.push(l),h&&h.forEach(t=>{const{keyField:r}=t;p&&r&&e.fieldsIndex.has(r)&&-1===p.indexOf(r)&&p.push(r)}),p})).apply(this,arguments)}function l(e,t){return e.popupTemplate?e.popupTemplate:(0,a.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,a.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},49455:(e,t,r)=>{"use strict";r.d(t,{K:()=>n}),r(42851);var i=r(54704),a=r(43899),s=r(95046);function n(e,t,r,n=new s.Z){let o;if("2d"===r.type)o=t*r.resolution;else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),n=r.basemapSpatialReference;o=(0,i.pC)(n)&&!n.equals(r.spatialReference)?(0,a.c9)(n)/(0,a.c9)(r.spatialReference):t*s}const l=e.x-o,h=e.y-o,u=e.x+o,p=e.y+o,{spatialReference:d}=r;return n.xmin=Math.min(l,u),n.ymin=Math.min(h,p),n.xmax=Math.max(l,u),n.ymax=Math.max(h,p),n.spatialReference=d,n}new s.Z}}]);