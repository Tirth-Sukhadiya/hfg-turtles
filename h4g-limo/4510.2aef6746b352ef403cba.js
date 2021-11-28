(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[4510],{41186:(e,t,i)=>{"use strict";i.d(t,{KC:()=>f,QI:()=>y,wF:()=>C,K:()=>S,Yx:()=>c,nb:()=>R,BH:()=>m,NL:()=>h,Tg:()=>d});var s=i(5902),r=i(54704),a=i(22332),l=i(70713);const n=new Map;n.set("meter-per-second",1),n.set("kilometer-per-hour",.277778),n.set("knots",.514444),n.set("feet-per-second",.3048),n.set("mile-per-hour",.44704);const o=180/Math.PI,h=new s.Xn({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function c(e,t){return n.get(e)/n.get(t)||1}function u(e){return(450-e)%360}function d(e,t="geographic"){const[i,s]=e,r=Math.sqrt(i*i+s*s);let a=Math.atan2(s,i)*o;return a=(360+a)%360,"geographic"===t&&(a=u(a)),[r,a]}function p(e,t="geographic"){let i=e[1];"geographic"===t&&(i=u(i)),i%=360;const s=e[0];return[s*Math.cos(i/o),s*Math.sin(i/o)]}function f(e,t,i="geographic",s=1){if(!(0,l.nk)(e))return e;const{pixels:r,width:n,height:o}=e,h=n*o,c=r[0],u=r[1],f=a.Z.createEmptyBand(e.pixelType,h),y=a.Z.createEmptyBand(e.pixelType,h);let m=0;for(let a=0;a<o;a++)for(let e=0;e<n;e++)"vector-uv"===t?([f[m],y[m]]=d([c[m],u[m]],i),f[m]*=s):([f[m],y[m]]=p([c[m],u[m]],i),f[m]*=s,y[m]*=s),m++;const g=new a.Z({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:[f,y]});return g.updateStatistics(),g}function y(e,t,i=1){if(1===i||!(0,l.nk)(e))return e;const s=e.clone(),{pixels:r,width:a,height:n}=s,o=r[0],h=r[1];let c=0;for(let l=0;l<n;l++)for(let e=0;e<a;e++)"vector-uv"===t?(o[c]*=i,h[c]*=i):o[c]*=i,c++;return s.updateStatistics(),s}function m(e,t,i,s,a){if(!(0,r.pC)(a)||!a.spatialReference.equals(e.spatialReference))return{extent:e,width:t,height:i,resolution:e.width/t};const l=a.xmin,n=a.ymax;s=Math.max(s||0,30);const o=Math.ceil(t*(1/s)),h=Math.ceil(i*(1/s)),c=((e.xmax-e.xmin)/o+(e.ymax-e.ymin)/h)/2;return e.xmin=l+Math.floor((e.xmin-l)/c)*c,e.xmax=l+Math.ceil((e.xmax-l)/c)*c,e.ymin=n+Math.floor((e.ymin-n)/c)*c,e.ymax=n+Math.ceil((e.ymax-n)/c)*c,{extent:e,width:Math.round(e.width/c),height:Math.round(e.height/c),resolution:c}}const g=function(e=0,t=0,i=Math.PI,s=!0){s&&(i=(2*Math.PI-i)%(2*Math.PI));const r=s?-1:1,a=13*r,l=-7*r,n=-2*r,o=-16*r,h=29,[c,u]=_(0,t+a,i,h),[d,p]=_(e-5.5,t+l,i,h),[f,y]=_(e+5.5,t+l,i,h),[m,g]=_(e-1.5,t+n,i,h),[b,v]=_(e+1.5,t+n,i,h),[w,x]=_(e-1.5,t+o,i,h),[P,T]=_(e+1.5,t+o,i,h);return[c,u,d,p,m,g,b,v,f,y,w,x,P,T]}(0,0,0);function b(e=0,t=Math.PI,i=!0){i&&(t=(2*Math.PI-t)%(2*Math.PI));const s=i?-1:1,r=5*s,a=20*s,l=25*s,n=45,o=2*s;let[h,c]=[5,0-a],[u,d]=[h+2,c],[p,f]=[u-0,d+o],[y,m]=[-5,0-l],[g,b]=[y+0,m-o],v=Math.ceil(e/5),w=Math.floor(v/10);v-=8*w;const x=[],P=[];for(let M=0;M<v/2;M++,w--){w<=0&&v%2==1&&M===(v-1)/2&&(y=0,g=y+0,m=(m+c)/2,b=m-o);const[e,i]=_(y,m,t,n);if(w>0){const[s,r]=_(u,m,t,n),[a,l]=_(h,c,t,n);x.push(s),x.push(r),x.push(e),x.push(i),x.push(a),x.push(l)}else{const[s,r]=_(u,d,t,n),[a,l]=_(p,f,t,n),[o,h]=_(g,b,t,n);P.push(e),P.push(i),P.push(o),P.push(h),P.push(a),P.push(l),P.push(s),P.push(r)}m+=r,c+=r,d+=r,f+=r,b+=r}const[T,I]=_(5,0+a,t,n),[S,C]=_(7,0+a,t,n),[R,k]=_(5,0-l,t,n),[z,D]=_(7,0-l,t,n);return{pennants:x,barbs:P,shaft:[T,I,S,C,R,k,z,D]}}function _(e,t,i,s=1){const r=Math.sqrt(e*e+t*t)/s,a=(2*Math.PI+Math.atan2(t,e))%(2*Math.PI);return[r,(2*Math.PI+a-i)%(2*Math.PI)]}const v=[0,1,3,6,10,16,21,27,33,40,47,55,63],w=[0,.5,1,1.5,2],x=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function P(e,t,i,s){const r=c(s||"knots",i);let a;for(a=1;a<t.length;a++)if(a===t.length-1){if(e<t[a]*r)break}else if(e<=t[a]*r)break;return Math.min(a-1,t.length-2)}function T(e,t,i,s,r){let a=0;switch(t){case"beaufort_kn":a=P(e,v,"knots",i);break;case"beaufort_km":a=P(e,v,"kilometer-per-hour",i);break;case"beaufort_ft":a=P(e,v,"feet-per-second",i);break;case"beaufort_m":a=P(e,v,"meter-per-second",i);break;case"classified_arrow":a=P(e,r,s,i);break;case"ocean_current_m":a=P(e,w,"meter-per-second",i);break;case"ocean_current_kn":a=P(e,x,"knots",i)}return a}const I=[];function S(e,t){let i=0,s=0;const{width:r,height:a,mask:l}=e,n=e.pixels[0],o=[],h=[],c="wind_speed"===t.style?5:Number.MAX_VALUE;for(let u=0;u<a;u++)for(let e=0;e<r;e++){const t=u*r+e;if((!l||l[u*r+e])&&n[t]<c){for(let s=0;s<4;s++)o[i++]=(e+.5)/r,o[i++]=(u+.5)/a,o[i++]=s<2?-.5:.5,o[i++]=s%2==0?-.5:.5,o[i++]=0,o[i++]=n[t];const l=4*(i/24-1);h[s++]=l,h[s++]=l+1,h[s++]=l+2,h[s++]=l+1,h[s++]=l+2,h[s++]=l+3}}return{vertexData:new Float32Array(o),indexData:new Uint32Array(h)}}function C(e,t){return"simple_scalar"===t.style?S(e,t):"wind_speed"===t.style?function(e,t){if(0===I.length)for(let h=0;h<30;h++)I.push(b(5*h,0));const i=c(h.fromJSON(t.inputUnit),"knots"),{width:s,height:r,mask:a}=e,l=e.pixels[0],n=e.pixels[1],o=[],u=[];let d=0,p=0;for(let h=0;h<r;h++)for(let e=0;e<s;e++){const t=h*s+e,c=l[t]*i;if((!a||a[h*s+e])&&c>=5){var f;const i=null!=(f=(n[t]+360)%360/180*Math.PI)?f:2*Math.PI*Math.random(),{pennants:a,barbs:l,shaft:y}=I[Math.min(Math.floor(c/5),29)];if(a.length+l.length===0)continue;let m=o.length/6;const g=(e+.5)/s,b=(h+.5)/r;for(let e=0;e<a.length;e+=2)o[d++]=g,o[d++]=b,o[d++]=a[e],o[d++]=a[e+1]+i,o[d++]=0,o[d++]=c;for(let e=0;e<l.length;e+=2)o[d++]=g,o[d++]=b,o[d++]=l[e],o[d++]=l[e+1]+i,o[d++]=0,o[d++]=c;for(let e=0;e<y.length;e+=2)o[d++]=g,o[d++]=b,o[d++]=y[e],o[d++]=y[e+1]+i,o[d++]=0,o[d++]=c;for(let e=0;e<a.length/6;e++)u[p++]=m,u[p++]=m+1,u[p++]=m+2,m+=3;for(let e=0;e<l.length/8;e++)u[p++]=m,u[p++]=m+1,u[p++]=m+2,u[p++]=m+1,u[p++]=m+2,u[p++]=m+3,m+=4;u[p++]=m+0,u[p++]=m+1,u[p++]=m+2,u[p++]=m+1,u[p++]=m+3,u[p++]=m+2,m+=4}}return{vertexData:new Float32Array(o),indexData:new Uint32Array(u)}}(e,t):function(e,t){const{style:i,inputUnit:s,outputUnit:r,breakValues:a}=t,l=h.fromJSON(s),n=h.fromJSON(r);let o=0,c=0;const{width:u,height:d,mask:p}=e,f=e.pixels[0],y=e.pixels[1],m=p?p.filter(e=>e>0).length:u*d,b=new Float32Array(42*m),_=new Uint32Array(15*m);for(let h=0;h<d;h++)for(let e=0;e<u;e++){const t=h*u+e;if(!p||p[h*u+e]){var v;const s=null!=(v=(y[t]+360)%360/180*Math.PI)?v:2*Math.PI*Math.random(),r=T(f[t],i,l,n,a);for(let i=0;i<g.length;i+=2)b[o++]=(e+.5)/u,b[o++]=(h+.5)/d,b[o++]=g[i],b[o++]=g[i+1]+s,b[o++]=r,b[o++]=f[t];const p=7*(o/42-1);_[c++]=p,_[c++]=p+1,_[c++]=p+2,_[c++]=p+0,_[c++]=p+4,_[c++]=p+3,_[c++]=p+0,_[c++]=p+2,_[c++]=p+3,_[c++]=p+2,_[c++]=p+5,_[c++]=p+3,_[c++]=p+5,_[c++]=p+6,_[c++]=p+3}}return{vertexData:b,indexData:_}}(e,t)}function R(e,t,i,s=[0,0],r=.5){const{width:l,height:n,mask:o}=e,[h,c]=e.pixels,[u,f]=s,y=Math.round((l-u)/i),m=Math.round((n-f)/i),g=y*m,b=new Float32Array(g),_=new Float32Array(g),v=new Uint8Array(g),w="vector-uv"===t;for(let a=0;a<m;a++)for(let e=0;e<y;e++){let t=0;const s=a*y+e,m=Math.max(0,a*i+f),g=Math.max(0,e*i+u),x=Math.min(n,m+i),P=Math.min(l,g+i);for(let e=m;e<x;e++)for(let i=g;i<P;i++){const r=e*l+i;if(!o||o[r]){t++;const e=w?[h[r],c[r]]:[h[r],(360+c[r])%360],[i,a]=w?e:p(e);b[s]+=i,_[s]+=a}}if(t>=(x-m)*(P-g)*(1-r)){v[s]=1;const[e,i]=d([b[s]/t,_[s]/t]);b[s]=e,_[s]=i}else v[s]=0,b[s]=0,_[s]=0}const x=new a.Z({width:y,height:m,pixels:[b,_],mask:v});return x.updateStatistics(),x}},37882:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var s=i(12131),r=i(63054),a=i(30071),l=i(14045),n=i(81916);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[n.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[l.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},50877:(e,t,i)=>{"use strict";i.d(t,{I:()=>l});var s=i(93883),r=i(66863),a=i(55757);class l extends r.s{constructor(e,t,i,s,r,l=s,n=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a.Z(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=l,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,l]=e.toScreenNoRotation([0,0],[this.x,this.y]);(0,s.s)(r,this.width/this.rangeX*i,0,0,0,this.height/this.rangeY*i,0,a,l,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,r)}}},64510:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>le});var s=i(16304),r=i(8651),a=(i(42851),i(4706)),l=i(18419),n=i(54704),o=i(98154),h=i(85128),c=i(72147),u=i(46942),d=(i(12131),i(47648),i(8680)),p=i(5052),f=i(2410),y=i(70713),m=i(98694),g=i(67692),b=i(35718),_=i(6843),v=i(54709),w=i(45910),x=i(59647),P=i(50877);class T extends P.I{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.bitmap=new x.br(a,null,null),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:(0,w.c)(),tileMat3:(0,w.c)()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}var I=i(63054),S=i(37882);class C extends S.Z{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e),[i,s]=this._tileInfoView.tileInfo.size;return new T(e,t[0],t[3],i,s)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (tile)",brushes:[v.U.raster],target:()=>this.children.map(e=>e.bitmap),drawPhase:I.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===I.jx.MAP&&super.doRender(e)}_getTileBounds(e){const t=this._tileInfoView.getTileBounds((0,b.Ue)(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:i}=this._tileInfoView,s=(0,_.ut)(i.spatialReference);if(s){const{resolution:r}=i.lodAt(e.level),a=s/r%i.size[0],l=a?(i.size[0]-a)*r:0;t[0]-=l*e.world,t[2]-=l*e.world}}return t}}var R=i(55328),k=i(22332);let z=class extends R.Z{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this.container=null,this.layer=null,this.tileSize=null,this.useWebGLForProcessing=!0}fetchTile(e,t){return this.layer.fetchTile(e.level,e.row,e.col,t)}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this.tileSize.join(",");if(t&&(0,n.pC)(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this.tileSize;const[i,s]=e,r=new k.Z({width:i,height:s,pixels:[new Uint8Array(i*s)],mask:new Uint8Array(i*s),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=r),r}};(0,r._)([(0,u.Cb)()],z.prototype,"container",void 0),(0,r._)([(0,u.Cb)()],z.prototype,"layer",void 0),(0,r._)([(0,u.Cb)()],z.prototype,"tileSize",void 0),(0,r._)([(0,u.Cb)()],z.prototype,"type",void 0),(0,r._)([(0,u.Cb)()],z.prototype,"useWebGLForProcessing",void 0),z=(0,r._)([(0,d.j)("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],z);let D=class extends z{constructor(){super(...arguments),this.container=null,this.layer=null,this.tileSize=null,this.type="raster",this.useWebGLForProcessing=!0}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}fetchTile(e,t){return this.layer.fetchTile(e.level,e.row,e.col,t)}updateTileSource(e,t){var i=this;return(0,s.Z)(function*(){const{bandIds:s}=i.layer,r=i._getLayerInterpolation(),a=i.canUseWebGLForProcessing(),{source:l,symbolizerParams:o,globalSymbolizerParams:h,suspended:c,coords:u,resolution:d}=t,{bitmap:p}=e;if([p.x,p.y]=u,p.resolution=d,l&&(0,n.pC)(l)&&(0,n.pC)(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};if(p.rawPixelData=e,a)p.source=l.pixelBlock,p.isRendereredSource=!1;else{const t=yield i.layer.applyRenderer(e,"stretch"===(null==h?void 0:h.type)?h:null);p.source=t,p.isRendereredSource=!0}p.symbolizerParameters=a?o:null,a?p.transformGrid||(p.transformGrid=l.transformGrid):p.transformGrid=null}else{const e=i.createEmptyTilePixelBlock();p.source=e,p.symbolizerParameters=a?o:null,p.transformGrid=null}p.bandIds=a?s:null,p.width=i.tileSize[0],p.height=i.tileSize[1],p.interpolation=r,p.suspended=c,p.invalidateTexture()})()}updateTileSymbolizerParameters(e,t){var i=this;return(0,s.Z)(function*(){const{local:s,global:r}=t,{bandIds:a}=i.layer,l=i._getLayerInterpolation(),o=i.canUseWebGLForProcessing(),{bitmap:h}=e,{rawPixelData:c}=h;!o&&(0,n.pC)(c)?(h.source=yield i.layer.applyRenderer(c,"stretch"===(null==r?void 0:r.type)?r:null),h.isRendereredSource=!0):(h.isRendereredSource&&(0,n.pC)(c)&&(h.source=c.pixelBlock),h.isRendereredSource=!1),h.symbolizerParameters=o?r||s:null,h.bandIds=o?a:null,h.interpolation=l,h.suspended=!1})()}install(e,t){this.container=new C(t.tileInfoView),this.container.isCustomTilingScheme=t.isCustomTilingScheme,e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this.container.remove()}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:i,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=i||"u8"===s||"s8"===s)}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:t}=this.layer,{renderer:i}=this.layer;return"raster-stretch"===i.type&&null!=i.colorRamp?"bilinear"===t||"cubic"===t?"bilinear":"nearest":t}};(0,r._)([(0,u.Cb)()],D.prototype,"container",void 0),(0,r._)([(0,u.Cb)()],D.prototype,"layer",void 0),(0,r._)([(0,u.Cb)()],D.prototype,"tileSize",void 0),(0,r._)([(0,u.Cb)()],D.prototype,"type",void 0),(0,r._)([(0,u.Cb)()],D.prototype,"useWebGLForProcessing",void 0),D=(0,r._)([(0,d.j)("esri.views.2d.layers.imagery.ImageryTileView2D")],D);var M=D,F=i(41186),V=i(93883),U=i(98248),L=(i(8485),i(6532),i(86712),i(17757),i(40766),i(28989),i(13811)),A=i(66863),Z=i(49289);class B extends A.s{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e}destroy(){var e,t;(0,n.pC)(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(t=this.vaoData.scalar)||t.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var e,t;!this._vaoInvalidated&&(0,n.pC)(this.vaoData)&&(null==(e=this.vaoData.magdir)||e.vao.dispose(),null==(t=this.vaoData.scalar)||t.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,(0,n.pC)(this.source)&&!(0,n.pC)(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=(0,F.wF)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:i}}break;case"simple_scalar":{const t=(0,F.K)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,t);this.vaoData={scalar:i}}break;case"wind_speed":{const t=(0,F.wF)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,t),s=(0,F.K)(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(e.context,s);this.vaoData={magdir:i,scalar:r}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:(0,w.c)()}}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:i,indexData:s}=t,r=U.Z.createVertex(e,35044,new Float32Array(i)),a=U.Z.createIndex(e,35044,new Uint32Array(s)),l=(0,Z.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return{vao:new L.Z(e,l.attributes,l.bufferLayouts,{geometry:r},a),elementCount:s.length}}}class O extends P.I{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.tileData=new B(a),this.tileData.coordScale=[s,r],this.tileData.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(e){this.tileData.stencilRef=e}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:(0,w.c)(),tileMat3:(0,w.c)()}}setTransform(e,t){super.setTransform(e,t);const i=t/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[r,a]=this.tileData.offset,l=[this.x+r*t,this.y-a*t],[n,o]=e.toScreenNoRotation([0,0],l),{symbolTileSize:h}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/h)*h,u=Math.round((this.height-this.tileData.offset[1])/h)*h;(0,V.s)(s,c/this.rangeX*i,0,0,0,u/this.rangeY*i,0,n,o,1),(0,V.m)(this.transforms.dvs,e.displayViewMat3,s),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}var G=i(11730);class E extends S.Z{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(e){const t=this._tileInfoView.getTileBounds((0,b.Ue)(),e),[i,s]=this._tileInfoView.tileInfo.size;return new O(e,t[0],t[3],i,s)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf tile)",brushes:[G.Z],target:()=>this.children.map(e=>e.tileData),drawPhase:I.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===I.jx.MAP&&this.symbolTypes.forEach(t=>{e.renderPass=t,super.doRender(e)})}}let q=class extends z{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.tileSize=null,this.type="rasterVF",this.useWebGLForProcessing=!0}canUseWebGLForProcessing(){return!1}fetchTile(e,t){var i=this;return(0,s.Z)(function*(){const s=yield i.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===i.layer.rasterInfo.dataType&&null!=s&&s.pixelBlock&&(s.pixelBlock=yield i.layer.convertVectorFieldData(s.pixelBlock,t)),s})()}updateTileSource(e,t){const i=t.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this.tileSize[0],s.height=this.tileSize[1];const{symbolTileSize:r}=i,{source:a}=t;if(s.offset=this._getTileSymbolOffset(s.key,r),(0,n.pC)(a)&&(0,n.pC)(a.pixelBlock))s.rawPixelData={extent:a.extent,pixelBlock:a.pixelBlock},s.source=this._sampleVectorFieldData(a.pixelBlock,i,s.offset),s.symbolizerParameters=i;else{const e=[Math.round((this.tileSize[0]-s.offset[0])/r),Math.round((this.tileSize[1]-s.offset[1])/r)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=i}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,t){var i;const s=t.local,{symbolTileSize:r}=s,{tileData:a}=e;a.offset=this._getTileSymbolOffset(a.key,r);const l=a.symbolizerParameters.symbolTileSize;return a.symbolizerParameters=s,(0,n.pC)(null==(i=a.rawPixelData)?void 0:i.pixelBlock)&&l!==r&&(a.source=this._sampleVectorFieldData(a.rawPixelData.pixelBlock,a.symbolizerParameters,a.offset)),Promise.resolve(null)}install(e,t){this.container=new E(t.tileInfoView),this.container.isCustomTilingScheme=t.isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",e=>this._updateSymbolType(e)),e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove()}_getTileSymbolOffset(e,t){const i=e.col*this.tileSize[0]%t,s=e.row*this.tileSize[1]%t;return[i>t/2?t-i:-i,s>t/2?t-s:-s]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:s}=t;return(0,F.nb)(e,"vector-uv",s,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};(0,r._)([(0,u.Cb)()],q.prototype,"container",void 0),(0,r._)([(0,u.Cb)()],q.prototype,"layer",void 0),(0,r._)([(0,u.Cb)()],q.prototype,"tileSize",void 0),(0,r._)([(0,u.Cb)()],q.prototype,"type",void 0),(0,r._)([(0,u.Cb)()],q.prototype,"useWebGLForProcessing",void 0),q=(0,r._)([(0,d.j)("esri.views.2d.layers.imagery.VectorFieldTileView2D")],q);var j=q,W=i(60573),N=i(59269),Q=i(82998),H=i(2747),J=i(91941);const K=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}fetchPopupFeatures(e,t){var i=this;return(0,s.Z)(function*(){const{layer:s}=i;if(!e)return Promise.reject(new H.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:r}=s,l=(0,J.V)(s,t);if(!r||!(0,n.pC)(l))throw new H.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:l});const o=[],{value:h,magdirValue:c}=yield s.identify(e);let u="";if(h&&h.length){var d,p;u="imagery-tile"===s.type&&s.hasStandardTime()&&null!=h[0]?h.map(e=>s.getStandardTimeValue(e)).join(", "):h.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]=i._formatAttributeValue(u,t);const r=null==(d=s.rasterInfo)||null==(p=d.attributeTable)?void 0:p.features;if(r&&r.length>0){const t=r.filter(e=>String(e.attributes.value||e.attributes.Value||e.attributes.VALUE)===u);if(t.length>0){const s=t[0];if(s)for(const t in s.attributes)if(s.attributes.hasOwnProperty(t)){const r=i._rasterFieldPrefix+t;e[r]=i._formatAttributeValue(s.attributes[t],r)}}}const l=s.rasterInfo.dataType;"vector-magdir"!==l&&"vector-uv"!==l||(e["Raster.Magnitude"]=null==c?void 0:c[0],e["Raster.Direction"]=null==c?void 0:c[1]);const n=new a.Z(i.fullExtent.clone(),null,e);n.layer=s,n.sourceLayer=n.layer,o.push(n)}return o})()}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new H.Z("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const i=(0,m._D)(this.layer.fullExtent,this.view.spatialReference,!1),s=(0,m.tB)(this.layer.fullExtent,this.view.spatialReference,i);return null==s&&(t=new H.Z("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",s),this.datumTransformation||(this.datumTransformation=(0,m._D)(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const i=this._getFieldInfo(this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,t),s=i&&i.format;if(s){let t,i;return e.trim().indexOf(",")>-1?(t=",",i=t+" ",this._formatDelimitedString(e,t,i,s)):e.trim().indexOf(" ")>-1?(t=i=" ",this._formatDelimitedString(e,t,i,s)):this._formatNumberFromString(e,s)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const i=t.toLowerCase();let s;return e.some(e=>!(!e.fieldName||e.fieldName.toLowerCase()!==i&&e.fieldName.toLowerCase()!==i.replace(/ /g,"_")||(s=e,0))),s}_formatDelimitedString(e,t,i,s){return e&&t&&i&&s?e.trim().split(t).map(e=>this._formatNumberFromString(e,s)).join(i):e}_formatNumberFromString(e,t){if(!e||!t)return e;const i=Number(e);return isNaN(i)?e:t.format(i)}};return(0,r._)([(0,u.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,u.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,u.Cb)()],t.prototype,"fullExtent",void 0),(0,r._)([(0,u.Cb)()],t.prototype,"tileInfo",void 0),(0,r._)([(0,u.Cb)({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=(0,r._)([(0,d.j)("esri.views.layers.ImageryTileLayerView")],t),t};var X=i(93729),Y=i(72445),$=i(49455),ee=i(81153),te=i(95046),ie=i(38975);const se=l.Z.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),re=[0,0];let ae=class extends(K((0,Y.y)((0,g.y)(X.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this._isCustomTilingScheme=!1,this.subview=null,this._redrawOrRefetch=(0,o.Ds)((e,t)=>e?this.doRefresh():this._redrawImage(t))}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this.subview&&(this.subview.useWebGLForProcessing=e),this._set("useWebGLForProcessing",e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){var t;this._tileStrategy.destroy(),null==(t=this.subview)||t.container.removeAllChildren();const i=this._getCacheSize(e);this._tileStrategy=new Q.Z({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:i,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate()}}hitTest(e,t){if(this.suspended)return Promise.resolve(null);const i=this.view.toMap((0,h.vW)(e,t));return Promise.resolve(new a.Z({attributes:{},geometry:i}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:te.Z.fromJSON(t);(0,f.Vx)(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(a=this._previousLOD)?void 0:a.level)!==r.level&&(this._previousLOD=r,null==this._symbolizerParams||this.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}this.notifyChange("updating")}attach(){this.layer.increaseRasterJobHandlerUsage(),(0,ee.Z)().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new W.Z(this.tileInfo,this.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new N.Z({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this.fetchTile(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new Q.Z({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updatesubview(),this.handles.add([(0,c.YP)(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],(e,t,i)=>{const s="multidimensionalDefinition"===i,r="interpolation"===i&&("majority"===e||"majority"===t)&&this._canUseMajorityInterpolationOnDataSource(),a="renderer"===i&&"vector-field"===t.type!=("vector-field"===t.type);a&&this._updatesubview(),this._redrawOrRefetch(s||r||a).catch(e=>{(0,o.D_)(e)||se.error(e)})}),(0,c.S1)(this,["layer.blendMode"],e=>{this.subview&&(this.subview.container.blendMode=e)},!0),(0,c.S1)(this,["layer.effect"],e=>{this.subview&&(this.subview.container.effect=e)},!0)],"attach"),this._updateBlockCacheRegistry()}detach(){var e;this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),null==(e=this.subview)||e.uninstall(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,(0,f.ET)(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=(0,o.yi)(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then(()=>{this._globalUpdateRequested=!1,this.requestUpdate()}));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,$.K)(e,t,this.view)}doRefresh(){var e=this;return(0,s.Z)(function*(){if(e.suspended)return;yield e.layer.updateRenderer(),e._updateSymbolizerParams(),e._updateBlockCacheRegistry(!0),e._fetchQueue.reset();const t=[];e._tileStrategy.tiles.forEach(i=>t.push(e._enqueueTileFetch(i))),yield(0,o.as)(t),e.notifyChange("updating")})()}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this.subview.container.createTile(e);return this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){var t;this._fetchQueue.abort(e.key.id),null==(t=this.subview)||t.container.removeChild(e),e.once("detach",()=>{e.destroy(),this.requestUpdate()}),this.requestUpdate()}fetchTile(e,t){const i=!(0,n.Wi)(t)&&t.signal,s=this.subview.canUseWebGLForProcessing(),r={allowPartialFill:!0,tileInfo:this.tileInfo,signal:(0,n.Wg)(i),registryId:this._blockCacheRegistryId,requestRawData:s,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:s?"nearest":this.layer.interpolation};return this.subview.fetchTile(e,r)}_updatesubview(){const e=this._isVectorField()?"rasterVF":"raster";if(this.subview){if(this.subview.type===e)return;this.subview.uninstall()}const{layer:t}=this,i=new("rasterVF"===e?j:M)({layer:t,tileSize:this.tileInfo.size,useWebGLForProcessing:this.useWebGLForProcessing});i.install(this.container,{tileInfoView:this._tileInfoView,isCustomTilingScheme:this._isCustomTilingScheme}),i.container.blendMode=t.blendMode,i.container.effect=t.effect,this.subview=i}_isVectorField(){return"vector-field"===this.layer.renderer.type}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.view.spatialReference,t=new ie.Z({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=(0,m.vF)(this.layer.rasterInfo,e),a=p.Z.create({spatialReference:e,size:512,scales:i});(0===a.origin.x||a.origin.x>t.x)&&(a.origin=t),this._isCustomTilingScheme=r,this._set("tileInfo",a),this._srcResolutions=null!=s?s:[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}_enqueueTileFetch(e,t){var i=this;return(0,s.Z)(function*(){if(!i._fetchQueue.has(e.key.id)){try{const t=yield i._fetchQueue.push(e.key),{bandIds:s}=i.layer;let r=!i.useProgressiveUpdate||i.hasTilingEffects&&!i._globalSymbolizerParams;if(i._globalUpdateRequested&&!i.moving&&0===i._fetchQueue.length){r=!1;try{yield i._redrawImage(i._abortController&&i._abortController.signal)}catch(T){(0,o.D_)(T)&&se.error(T)}i._globalUpdateRequested=!1}!i.subview.canUseWebGLForProcessing()&&!i._isVectorField()||i.hasTilingEffects||null!=i._symbolizerParams||i._updateSymbolizerParams();const a=i._tileInfoView.getTileCoords(re,e.key),l=i._tileInfoView.getTileResolution(e.key);yield i.subview.updateTileSource(e,{source:t,symbolizerParams:i._symbolizerParams,globalSymbolizerParams:i._globalSymbolizerParams,suspended:r,bandIds:s,coords:a,resolution:l}),e.once("attach",()=>i.requestUpdate()),i.subview.container.addChild(e)}catch(T){(0,o.D_)(T)||se.error(T)}i.requestUpdate()}})()}_redrawImage(e){var t=this;return(0,s.Z)(function*(){if(0===t.subview.container.children.length)return;yield t.layer.updateRenderer(),t.hasTilingEffects?yield t._updateGlobalSymbolizerParams(e):(t._updateSymbolizerParams(),t._globalSymbolizerParams=null);const i=t.subview.container.children.map(function(){var e=(0,s.Z)(function*(e){return t.subview.updateTileSymbolizerParameters(e,{local:t._symbolizerParams,global:t._globalSymbolizerParams})});return function(t){return e.apply(this,arguments)}}());yield(0,o.as)(i),t.container.requestRender()})()}_updateGlobalSymbolizerParams(e){var t=this;return(0,s.Z)(function*(){const i={srcResolution:t._srcResolutions[t._previousLOD.level],registryId:t._blockCacheRegistryId,signal:e},s=yield t.layer.fetchPixels(t.view.extent,t.view.width,t.view.height,i);if(!s||!s.pixelBlock)return;const r=t.layer.symbolizer.generateWebGLParameters({pixelBlock:(0,y.qF)(s.pixelBlock,t.layer.bandIds),isGCS:t.view.spatialReference.isGeographic,resolution:{x:t._previousLOD.resolution,y:t._previousLOD.resolution},bandIds:t.layer.bandIds});!t.subview.canUseWebGLForProcessing()&&r&&"stretch"===r.type&&t.layer.renderer&&"raster-stretch"===t.layer.renderer.type&&(r.factor=r.factor.map(e=>255*e),r.outMin=Math.round(255*r.outMin),r.outMax=Math.round(255*r.outMax)),t._globalSymbolizerParams=r})()}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,multidimensionalDefinition:s,raster:r}=this.layer,a=null!=i&&i.multidimensionalInfo?r.getSliceIndex(s):null,l=(0,f.Rq)(t,a);if(l!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&(0,f.ET)(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=(0,f.z2)(l,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.view.scale);(0,f.Vx)(l,this._blockCacheRegistryId,this.view.extent,this.view.resolution,this._srcResolutions[e.level],this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=l}}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:i,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=i||"u8"===s||"s8"===s)}};(0,r._)([(0,u.Cb)()],ae.prototype,"subview",void 0),(0,r._)([(0,u.Cb)()],ae.prototype,"useWebGLForProcessing",null),(0,r._)([(0,u.Cb)()],ae.prototype,"useProgressiveUpdate",null),ae=(0,r._)([(0,d.j)("esri.views.2d.layers.ImageryTileLayerView2D")],ae);var le=ae},72445:(e,t,i)=>{"use strict";i.d(t,{y:()=>h});var s=i(8651),r=i(18419),a=i(98154),l=i(72147),n=i(46942),o=(i(12131),i(47648),i(8680));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,l.on)(this,"layer","refresh",()=>{this.doRefresh().catch(e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,o.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},91941:(e,t,i)=>{"use strict";i.d(t,{V:()=>o,e:()=>l});var s=i(16304),r=i(54704),a=i(21550);function l(e){return n.apply(this,arguments)}function n(){return(n=(0,s.Z)(function*(e,t=e.popupTemplate){if(!(0,r.pC)(t))return[];const i=yield t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:l,typeIdField:n,globalIdField:o,relationships:h}=e;if(i.includes("*"))return["*"];const c=s?yield(0,a.CH)(e):[],u=(0,a.Q0)(e.fieldsIndex,[...i,...c]);return n&&u.push(n),u&&l&&e.fieldsIndex.has(l)&&-1===u.indexOf(l)&&u.push(l),u&&o&&e.fieldsIndex.has(o)&&-1===u.indexOf(o)&&u.push(o),h&&h.forEach(t=>{const{keyField:i}=t;u&&i&&e.fieldsIndex.has(i)&&-1===u.indexOf(i)&&u.push(i)}),u})).apply(this,arguments)}function o(e,t){return e.popupTemplate?e.popupTemplate:(0,r.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,r.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},49455:(e,t,i)=>{"use strict";i.d(t,{K:()=>l}),i(42851);var s=i(54704),r=i(43899),a=i(95046);function l(e,t,i,l=new a.Z){let n;if("2d"===i.type)n=t*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(e),l=i.basemapSpatialReference;n=(0,s.pC)(l)&&!l.equals(i.spatialReference)?(0,r.c9)(l)/(0,r.c9)(i.spatialReference):t*a}const o=e.x-n,h=e.y-n,c=e.x+n,u=e.y+n,{spatialReference:d}=i;return l.xmin=Math.min(o,c),l.ymin=Math.min(h,u),l.xmax=Math.max(o,c),l.ymax=Math.max(h,u),l.spatialReference=d,l}new a.Z}}]);