(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[7548],{10504:(e,t,i)=>{"use strict";i.d(t,{ym:()=>p,RF:()=>y,vY:()=>l,J9:()=>x,U1:()=>M,Ie:()=>C,G6:()=>z});var r=i(54704),a=i(60337);const n=(e,t,i)=>[t,i],s=(e,t,i)=>[t,i,e[2]],o=(e,t,i)=>[t,i,e[2],e[3]];function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function h({scale:e,translate:t},i){return Math.round((i-t[0])/e[0])}function c({scale:e,translate:t},i){return Math.round((t[1]-i)/e[1])}function m(e,t,i){const r=[];let a,n,s,o;for(let l=0;l<i.length;l++){const m=i[l];l>0?(s=h(e,m[0]),o=c(e,m[1]),s===a&&o===n||(r.push(t(m,s-a,o-n)),a=s,n=o)):(a=h(e,m[0]),n=c(e,m[1]),r.push(t(m,a,n)))}return r.length>0?r:null}function u({scale:e,translate:t},i){return i*e[0]+t[0]}function f({scale:e,translate:t},i){return t[1]-i*e[1]}function g(e,t,i){const r=new Array(i.length);if(!i.length)return r;const[a,n]=e.scale;let s=u(e,i[0][0]),o=f(e,i[0][1]);r[0]=t(i[0],s,o);for(let l=1;l<i.length;l++){const e=i[l];s+=e[0]*a,o-=e[1]*n,r[l]=t(e,s,o)}return r}function d(e,t,i){const r=new Array(i.length);for(let a=0;a<i.length;a++)r[a]=g(e,t,i[a]);return r}function y(e,t,i,r,a){return t.x=h(e,i.x),t.y=c(e,i.y),t!==i&&(r&&(t.z=i.z),a&&(t.m=i.m)),t}function p(e,t){return e&&t?(0,a.wp)(t)?y(e,{},t,!1,!1):(0,a.l9)(t)?function(e,t,i,r,a){const s=function(e,t,i,r){const a=[],s=n;for(let n=0;n<t.length;n++){const i=m(e,s,t[n]);i&&i.length>=2&&a.push(i)}return a.length?a:null}(e,i.paths);return s?(t.paths=s,t):null}(e,{},t):(0,a.oU)(t)?function(e,t,i,r,a){const s=function(e,t,i,r){const a=[],s=n;for(let n=0;n<t.length;n++){const i=m(e,s,t[n]);i&&i.length>=3&&a.push(i)}return a.length?a:null}(e,i.rings);return s?(t.rings=s,t):null}(e,{},t):(0,a.aW)(t)?function(e,t,i,r,a){return t.points=function(e,t,i,r){return m(e,n,t)}(e,i.points),t}(e,{},t):(0,a.YX)(t)?function(e,t,i,r,a){return t.xmin=h(e,i.xmin),t.ymin=c(e,i.ymin),t.xmax=h(e,i.xmax),t.ymax=c(e,i.ymax),t}(e,{},t):null:null}function x(e,t,i,a,l){return(0,r.pC)(i)&&(t.points=function(e,t,i,r){return g(e,i?r?o:s:r?s:n,t)}(e,i.points,a,l)),t}function M(e,t,i,a,n){return(0,r.Wi)(i)||(t.x=u(e,i.x),t.y=f(e,i.y),t!==i&&(a&&(t.z=i.z),n&&(t.m=i.m))),t}function C(e,t,i,a,l){return(0,r.pC)(i)&&(t.rings=function(e,t,i,r){return d(e,i?r?o:s:r?s:n,t)}(e,i.rings,a,l)),t}function z(e,t,i,a,l){return(0,r.pC)(i)&&(t.paths=function(e,t,i,r){return d(e,i?r?o:s:r?s:n,t)}(e,i.paths,a,l)),t}},93257:(e,t,i)=>{"use strict";i.r(t),i.d(t,{previewCIMSymbol:()=>I});var r=i(16304),a=i(85128),n=i(93668),s=i(98154),o=i(36434),l=i(60337),h=i(10206),c=i(72461);class m{constructor(){}rasterizeText(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const i=this._textRasterizationCanvas,r=i.getContext("2d");this.setFontProperties(r,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const a=this.computeTextWidth(r,t),n=this.lineHeight*this.textLines.length;i.width=a,i.height=n,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=a*t.pixelRatio,this.renderedHeight=n*t.pixelRatio,this.fillStyle=function(e){return`rgba(${e.slice(0,3).toString()},${e[3]})`}(t.color),this.haloStyle=function(e){return`rgb(${e.slice(0,3).toString()})`}(t.halo.color);const s=this.renderedLineHeight,o=this.renderedHaloSize;this.setFontProperties(r,t);const l=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this.renderedWidth)+o,h=o;let c=0,m=0;o>0&&this.renderHalo(r,l,h,c,m,t),m+=h,c+=l;for(const g of this.textLines)r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(g,c,m),r.globalCompositeOperation="source-over",r.fillStyle=this.fillStyle,r.fillText(g,c,m),m+=s;const u=r.getImageData(0,0,this.renderedWidth,this.renderedHeight),f=new Uint8Array(u.data);if(t.premultiplyColors){let e;for(let t=0;t<f.length;t+=4)e=f[t+3]/255,f[t]=f[t]*e,f[t+1]=f[t+1]*e,f[t+2]=f[t+2]*e}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}renderHalo(e,t,i,r,a,n){const s=this.renderedWidth,o=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=s,this._haloRasterizationCanvas.height=o;const l=this._haloRasterizationCanvas,h=l.getContext("2d");h.clearRect(0,0,s,o),this.setFontProperties(h,n),h.fillStyle=this.haloStyle,h.strokeStyle=this.haloStyle;const c=this.renderedHaloSize<3;h.lineJoin=c?"miter":"round",c?this.renderHaloEmulated(h,t,i):this.renderHaloNative(h,t,i),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(l,0,0,s,o,r,a,s,o),e.globalAlpha=1}renderHaloEmulated(e,t,i){const r=this.renderedLineHeight,a=this.renderedHaloSize;for(const n of this.textLines){for(const[r,s]of u)e.fillText(n,t+a*r,i+a*s);i+=r}}renderHaloNative(e,t,i){const r=this.renderedLineHeight,a=this.renderedHaloSize;for(const n of this.textLines){const s=2*a,o=5,l=.1;for(let r=0;r<o;r++)e.lineWidth=(1-(o-1)*l+r*l)*s,e.strokeText(n,t,i);i+=r}}setFontProperties(e,t){const i=t.font,r=`${i.style} ${i.weight} ${(0,a.F2)(t.size*t.pixelRatio)}px ${i.family}, sans-serif`;let n;switch(e.font=r,e.textBaseline="top",t.horizontalAlignment){case"left":n="left";break;case"right":n="right";break;case"center":n="center";break;default:n="left"}e.textAlign=n}computeTextWidth(e,t){let i=0;for(const a of this.textLines)i=Math.max(i,e.measureText(a).width);const r=t.font;return("italic"===r.style||"oblique"===r.style||"string"==typeof r.weight&&("bold"===r.weight||"bolder"===r.weight)||"number"==typeof r.weight&&r.weight>600)&&(i+=.3*e.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)}computeLineHeight(){return Math.round(1.275*this.parameters.size+2*this.parameters.halo.size)}}const u=[];{const e=16;for(let t=0;t<360;t+=360/e)u.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)])}var f,g,d=i(84991),y=i(2343),p=i(63272);(g=f||(f={})).Legend="legend",g.Preview="preview";const x=(e,t,i)=>{if(e&&e.targetSize){let r;if(i){const t=Math.max(i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin);r=e.targetSize/(0,a.F2)(t)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},M={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};function C(e,t,i,r){let a,n;return"function"==typeof e.materialHash?(a=(0,e.materialHash)(t,i,r),n=(0,h.S)(e.cim,e.materialOverrides)):(a=e.materialHash,n=e.cim),{analyzedCIM:n,hash:a}}const z=new class{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._rasterizer=new c.Z,this._textRasterizer=new m,this._pictureMarkerCache=new Map}rasterizeCIMSymbolAsync(e,t,i,a,n,s,o,h){var c=this;return(0,r.Z)(function*(){a=a||(t?null!=t.centroid?"esriGeometryPolygon":(0,l.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const r=yield c.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map(t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}))}(t.attributes):null,i,a,h);return c.rasterizeCIMSymbol(r,t,a,n,s,o)})()}analyzeCIMSymbol(e,t,i,a,n){var o=this;return(0,r.Z)(function*(){const r=[],l=t?{geometryType:a,spatialReference:o._spatialReference,fields:t}:null;let c;yield(0,h.c)(e.data,l,r,o._avoidSDF),(0,s.k_)(n);for(const e of r)"CIMPictureMarker"!==e.cim.type&&"CIMPictureFill"!==e.cim.type&&"CIMPictureStroke"!==e.cim.type||(c||(c=[]),c.push(o.fetchPictureMarkerResource(e,n))),i&&"text"===e.type&&"string"==typeof e.text&&e.text.indexOf("[")>-1&&(e.text=(0,d.Qs)(i,e.text,e.cim.textCase));return c&&(yield Promise.all(c)),r})()}fetchPictureMarkerResource(e,t){var i=this;return(0,r.Z)(function*(){const r=e.materialHash;if(!i._pictureMarkerCache.get(r)){const a=(yield(0,n.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;i._pictureMarkerCache.set(r,a)}})()}rasterizeCIMSymbol(e,t,i,r,a,n){const s=[];for(const o of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,a,n));const e=this._getRasterizedResource(o,t,i,r,a,n);if(!e)continue;let l=0,h=e.anchorX||0,c=e.anchorY||0,m=!1,u=0,f=0;if("esriGeometryPoint"===i){const e=x(r,o,null);if(u=(0,d.hf)(o.offsetX,t,a,n)*e||0,f=(0,d.hf)(o.offsetY,t,a,n)*e||0,"marker"===o.type)l=(0,d.hf)(o.rotation,t,a,n)||0,m=!!o.rotateClockwise&&o.rotateClockwise;else if("text"===o.type){if(l=(0,d.hf)(o.angle,t,a,n)||0,void 0!==o.horizontalAlignment)switch(o.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==o.verticalAlignment)switch(o.verticalAlignment){case"top":c=.5;break;case"bottom":c=-.5;break;case"baseline":c=-.25;break;default:c=0}}}null!=e&&s.push({angle:l,rotateClockWise:m,anchorX:h,anchorY:c,offsetX:u,offsetY:f,rasterizedResource:e})}return this.getSymbolImage(s)}getSymbolImage(e){const t=document.createElement("canvas"),i=t.getContext("2d");let r=0,n=0,s=0,o=0;const l=[];for(let u=0;u<e.length;u++){const t=e[u],h=t.rasterizedResource;if(!h)continue;const c=h.size,m=t.offsetX,f=t.offsetY,g=t.anchorX,d=t.anchorY,y=t.rotateClockWise||!1;let p=t.angle,x=(0,a.F2)(m)-c[0]*(.5+g),M=(0,a.F2)(f)-c[1]*(.5+d),C=x+c[0],z=M+c[1];if(p){y&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),i=x*t-M*e,r=x*e+M*t,a=x*t-z*e,n=x*e+z*t,s=C*t-z*e,o=C*e+z*t,l=C*t-M*e,h=C*e+M*t;x=Math.min(i,a,s,l),M=Math.min(r,n,o,h),C=Math.max(i,a,s,l),z=Math.max(r,n,o,h)}r=x<r?x:r,n=M<n?M:n,s=C>s?C:s,o=z>o?z:o;const I=i.createImageData(h.size[0],h.size[1]);I.data.set(new Uint8ClampedArray(h.image.buffer)),l.push({offsetX:m,offsetY:f,rotateClockwise:y,angle:p,rasterizedImage:I,anchorX:g,anchorY:d})}t.width=s-r,t.height=o-n;const h=-r,c=o;for(let u=0;u<l.length;u++){const e=l[u],t=this._imageDataToCanvas(e.rasterizedImage),r=h-e.rasterizedImage.width*(.5+e.anchorX),n=c-e.rasterizedImage.height*(.5-e.anchorY);if(e.angle){const s=(360-e.angle)*Math.PI/180;i.save(),i.translate((0,a.F2)(e.offsetX),-(0,a.F2)(e.offsetY)),i.translate(h,c),i.rotate(s),i.translate(-h,-c),i.drawImage(t,r,n),i.restore()}else i.drawImage(t,r+(0,a.F2)(e.offsetX),n-(0,a.F2)(e.offsetY))}const m=new p.Z({x:h/t.width-.5,y:c/t.height-.5});return{imageData:0!==t.width&&0!==t.height?i.getImageData(0,0,t.width,t.height):i.createImageData(1,1),anchorPosition:m}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,i=t.getContext("2d");return t.width=e.width,t.height=e.height,i.putImageData(e,0,0),t}_imageTo32Array(e,t,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const r=this._imageDataCanvas,a=r.getContext("2d");return r.width=t,r.height=i,a.drawImage(e,0,0,t,i),new Uint32Array(a.getImageData(0,0,t,i).data.buffer)}_getRasterizedResource(e,t,i,r,a,n){let s,l,h,c;if("esriGeometryPolyline"===i||"esriGeometryPolygon"===i){const c=r&&r.style?r.style:f.Legend,m="esriGeometryPolyline"===i?M.stroke[c]:M.fill[c];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const i=(0,d.hf)(e.width,t,a,n),{image:r,width:s,height:o}=this._getPictureResource(e,i);return this._rasterizePictureResource(e,r,s,o,m,i)}return null}({analyzedCIM:s,hash:h}=C(e,t,a,n)),l=this._embedCIMLayerInVectorMarker(s,m)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,d.hf)(e.offsetX,t,a,n),e.cim.offsetY=(0,d.hf)(e.offsetY,t,a,n),e.cim.rotation=(0,d.hf)(e.rotation,t,a,n),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:s}=C(e,t,a,n)),h=(0,o.hP)(JSON.stringify(s)).toString(),l=this._embedCIMLayerInVectorMarker(s,m)}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const i=e.cim.size||e.cim.height;let r,o,l;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:r,width:o,height:l}=this._getPictureResource(e,i));else{({analyzedCIM:s,hash:h}=C(e,t,a,n));const i=this._rasterizer.rasterizeJSONResource(s,1,this._avoidSDF);r=i.image,o=i.size[0],l=i.size[1]}return this._rasterizePictureResource(e,r,o,l,m,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:s,hash:h}=C(e,t,a,n)),l=this._embedCIMLayerInVectorMarker(s,m)}}}else{if("text"===e.type)return c=this._rasterizeTextResource(e,t,r,a,n),c;({analyzedCIM:s,hash:h}=C(e,t,a,n));const i=x(r,e,null);if("CIMPictureMarker"===e.cim.type){const r=(0,d.hf)(e.size,t,a,n)*i,{image:s,width:o,height:l}=this._getPictureResource(e,r);return c={image:s,size:[o,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},c}(0,y.FW)(s,i,{preserveOutlineWidth:!1}),l=s}h+=i,r&&(h+=JSON.stringify(r));const m=this._resourceCache;return m.has(h)?m.get(h):(c=this._rasterizer.rasterizeJSONResource(l,window.devicePixelRatio||1,this._avoidSDF),m.set(h,c),c)}_rasterizeTextResource(e,t,i,r,a){const n=x(i,e,null),s=(0,d.hf)(e.text,t,r,a);if(!s||0===s.length)return null;const o=(0,d.hf)(e.fontName,t,r,a),l=(0,d.hf)(e.style,t,r,a),h=(0,d.hf)(e.weight,t,r,a),c=(0,d.hf)(e.decoration,t,r,a),m=(0,d.hf)(e.size,t,r,a)*n,u=(0,d.hf)(e.horizontalAlignment,t,r,a),f=(0,d.hf)(e.verticalAlignment,t,r,a),g=(0,d.nn)((0,d.hf)(e.color,t,r,a)),y=(0,d.nn)((0,d.hf)(e.outlineColor,t,r,a)),p={color:g,size:m,horizontalAlignment:u,verticalAlignment:f,font:{family:o,style:l,weight:h,decoration:c},halo:{size:(0,d.hf)(e.outlineSize,t,r,a)||0,color:y,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,p)}_rasterizePictureResource(e,t,i,r,n,s){const o=document.createElement("canvas"),h=o.getContext("2d");o.height=(0,a.F2)(Math.max(Math.abs(n.frame.ymax-n.frame.ymin),s)),o.width=(0,a.F2)(Math.abs(n.frame.xmax-n.frame.xmin));const c=h.createImageData(i,r);c.data.set(new Uint8ClampedArray(t.buffer));const m=this._imageDataToCanvas(c),u=h.createPattern(m,"repeat"),f=Math.cos((-e.cim.rotation||0)*Math.PI/180),g=Math.sin((-e.cim.rotation||0)*Math.PI/180);u.setTransform({m11:f,m12:g,m21:-g,m22:f,m41:(0,a.F2)(e.cim.offsetX)||0,m42:(0,a.F2)(e.cim.offsetY)||0});const d=n.canvasPaths;let y,p,x;(0,l.oU)(d)?(y=d.rings,h.fillStyle=u,p=h.fill,x=["evenodd"]):(0,l.l9)(d)&&(y=d.paths,h.strokeStyle=u,h.lineWidth=s,p=h.stroke,y[0][0][1]=o.height/2,y[0][1][1]=o.height/2),h.beginPath();for(const l of y){const e=l?l.length:0;if(e>1){let t=l[0];h.moveTo((0,a.F2)(t[0]),(0,a.F2)(t[1]));for(let i=1;i<e;++i)t=l[i],h.lineTo((0,a.F2)(t[0]),(0,a.F2)(t[1]));h.closePath()}}p.apply(h,x);const M=h.getImageData(0,0,o.width,o.height),C=new Uint8Array(M.data);return{size:[o.width,o.height],image:new Uint32Array(C.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const r=i.height/i.width,n=t?r>1?(0,a.F2)(t):(0,a.F2)(t)/r:i.width,s=t?r>1?(0,a.F2)(t)*r:(0,a.F2)(t):i.height;return{image:this._imageTo32Array(i,n,s),width:n,height:s}}_embedCIMLayerInVectorMarker(e,t){const i=(0,l.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:i,symbolLayers:[e]}}]}}}(null,!0);function I(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(function*(e,t={}){const{size:i,maxSize:r,node:n,opacity:s}=t,o=t.cimOptions||t,{feature:l,fieldMap:h,geometryType:c,style:m}=o,u=(0,y.kW)(e),f=Math.min(null!=i?i:u,null!=r?r:(0,a.Wz)(120));f!==u&&(e=e.clone(),(0,y.PI)(e,f,{preserveOutlineWidth:!0}));let g=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(g=1);const d=yield z.rasterizeCIMSymbolAsync(e,l,h,c,{scaleFactor:g,style:m}),p=document.createElement("canvas");p.width=d.imageData.width,p.height=d.imageData.height,p.getContext("2d").putImageData(d.imageData,0,0);let x=p.width/g,M=p.height/g;if(null!=i&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=x/M;x=e<=1?Math.ceil(f*e):f,M=e<=1?f:Math.ceil(f/e)}const C=new Image(x,M);return C.src=p.toDataURL(),null!=s&&(C.style.opacity=`${s}`),n&&n.appendChild(C),C})).apply(this,arguments)}}}]);