(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[2904],{48626:(e,t,r)=>{"use strict";r.d(t,{ly:()=>d,oS:()=>E,o7:()=>k,Jj:()=>q,Hz:()=>F,gK:()=>B,ey:()=>m,bj:()=>b,O1:()=>T,av:()=>v,Nu:()=>P,D_:()=>S,Eu:()=>l,q6:()=>g,or:()=>D,wA:()=>$,Vs:()=>R,TS:()=>x,qt:()=>C,xA:()=>O,ct:()=>h,fP:()=>A,n1:()=>W,PP:()=>j,P_:()=>U,mw:()=>N,G5:()=>I,ne:()=>L,ek:()=>p,Cd:()=>w,zO:()=>z,TN:()=>H,ir:()=>Y,v6:()=>M,hu:()=>V,mc:()=>_});class s{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===s&&(s=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<9;s++)t[s]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<9;s++)this.typedBuffer[r++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let u=0;u<9;++u)s[f++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class n{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===s&&(s=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<16;s++)t[s]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let s=0;s<16;s++)this.typedBuffer[r++]=t[s]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let u=0;u<16;++u)s[f++]=n[i++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class f{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(49882);class u{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===s&&(s=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return(0,i.s)(t,this.typedBuffer[e*=this.typedBufferStride],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var c=r(32589);class o{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===s&&(s=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return(0,c.s)(t,this.typedBuffer[e*=this.typedBufferStride],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var y=r(10538);class a{constructor(e,t,r=0,s,n){this.TypedArrayConstructor=e,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===s&&(s=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==n?new f(t,i):new f(t,i,(n-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=n}copyFrom(e,t,r){const s=this.typedBuffer,n=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;s[f++]=n[i++],s[f++]=n[i++],s[f++]=n[i++],s[f]=n[i]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class d extends f{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class l extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class h extends o{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends a{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class B extends s{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class m extends s{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class b extends n{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class T extends n{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class E extends f{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class g extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends o{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class w extends a{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="f64";class S extends f{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class O extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class L extends o{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class _ extends a{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class v extends f{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u16";class x extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class N extends o{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u16";class M extends a{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class P extends f{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class C extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class I extends o{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class V extends a{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="u32";class F extends f{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class R extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="i8";class U extends o{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class Y extends a{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class k extends f{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class D extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class W extends o{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i16";class z extends a{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class q extends f{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class $ extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32";class j extends o{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i32";class H extends a{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},61863:(e,t,r)=>{"use strict";function s(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function n(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function f(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{n1:()=>s,U:()=>f,B3:()=>n,Op:()=>i}),r(12131)},45077:(e,t,r)=>{"use strict";r.r(t),r.d(t,{work:()=>H,wrappedWork:()=>$});var s=r(16304),n=r(4078);function f(e,t,r){const s=t/3,n=new Uint32Array(r+1),f=new Uint32Array(r+1),i=(e,t)=>{e<t?n[e+1]++:f[t+1]++};for(let m=0;m<s;m++){const t=e[3*m],r=e[3*m+1],s=e[3*m+2];i(t,r),i(r,s),i(s,t)}let u=0,c=0;for(let m=0;m<r;m++){const e=n[m+1],t=f[m+1];n[m+1]=u,f[m+1]=c,u+=e,c+=t}const o=new Uint32Array(6*s),y=n[r],a=(e,t,r)=>{if(e<t){const s=n[e+1]++;o[2*s]=t,o[2*s+1]=r}else{const s=f[t+1]++;o[2*y+2*s]=e,o[2*y+2*s+1]=r}};for(let m=0;m<s;m++){const t=e[3*m],r=e[3*m+1],s=e[3*m+2];a(t,r,m),a(r,s,m),a(s,t,m)}const d=(e,t)=>{const r=2*e,s=t-e;for(let n=1;n<s;n++){const e=o[r+2*n],t=o[r+2*n+1];let s=n-1;for(;s>=0&&o[r+2*s]>e;s--)o[r+2*s+2]=o[r+2*s],o[r+2*s+3]=o[r+2*s+1];o[r+2*s+2]=e,o[r+2*s+3]=t}};for(let m=0;m<r;m++)d(n[m],n[m+1]),d(y+f[m],y+f[m+1]);const l=new Int32Array(3*s),h=(t,r)=>t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1,p=(e,t)=>{const r=h(e,t);l[3*t+r]=-1},B=(e,t,r,s)=>{const n=h(e,t);l[3*t+n]=s;const f=h(r,s);l[3*s+f]=t};for(let m=0;m<r;m++){let e=n[m];const t=n[m+1];let r=f[m];const s=f[m+1];for(;e<t&&r<s;){const t=o[2*e],s=o[2*y+2*r];t===s?(B(m,o[2*e+1],s,o[2*y+2*r+1]),e++,r++):t<s?(p(m,o[2*e+1]),e++):(p(s,o[2*y+2*r+1]),r++)}for(;e<t;)p(m,o[2*e+1]),e++;for(;r<s;)p(o[2*y+2*r],o[2*y+2*r+1]),r++}return l}var i=r(48626),u=r(75735);function c(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:o(e.layout)}}function o(e){const t=new Array;return e.fields.forEach((e,r)=>{const s={...e,constructor:a(e.constructor)};t.push([r,s])}),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const y=[i.ly,i.Eu,i.ct,i.ek,i.gK,i.bj,i.oS,i.q6,i.fP,i.Cd,i.ey,i.O1,i.D_,i.xA,i.ne,i.mc,i.av,i.TS,i.mw,i.v6,i.Nu,i.qt,i.G5,i.hu,i.Hz,i.Vs,i.P_,i.ir,i.o7,i.or,i.n1,i.zO,i.Jj,i.wA,i.PP,i.TN];function a(e){return`${e.ElementType}_${e.ElementCount}`}const d=new Map;function l(e,t=0){const r=e.stride;return e.fieldNames.filter(t=>{const r=e.fields.get(t).optional;return!(r&&r.glPadding)}).map(s=>{const n=e.fields.get(s),f=n.constructor.ElementCount,i=h(n.constructor.ElementType);return{name:s,stride:r,count:f,type:i,offset:n.offset,normalized:!(!n.optional||!n.optional.glNormalized),divisor:t}})}function h(e){const t=p[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}y.forEach(e=>d.set(a(e),e));const p={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},B=(0,u.U$)().vec3f("position").u16("componentIndex").u16("u16padding"),m=(l((0,u.U$)().vec2u8("sideness")),(0,u.U$)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0})),b=m.clone().vec3f("normal"),T=m.clone().vec3f("normalA").vec3f("normalB");new Map([["position0",0],["position1",1],["componentIndex",2],["variantOffset",3],["variantStroke",4],["variantExtension",5],["normal",6],["normalA",6],["normalB",7],["sideness",8]]);var E=r(73505),g=r(32589),A=r(61001);class w{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?v:_}write(e,t,r){const s=this.edgeHashFunction(r);C.seed=s;const n=C.getIntRange(0,255),f=C.getIntRange(0,this.settings.variants-1),i=C.getFloat(),u=255*(.5*function(e,t){const r=e<0?-1:1;return Math.abs(e)**1.2*r}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,n),e.variantStroke.set(t,f),e.variantExtension.set(t,u)}trim(e,t){return e.slice(0,t)}}const S=new Float32Array(6),O=new Uint32Array(S.buffer),L=new Uint32Array(1);function _(e){const t=S;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],L[0]=5381;for(let r=0;r<O.length;r++)L[0]=31*L[0]+O[r];return L[0]}function v(e){const t=S;t[0]=x(e.position0[0]),t[1]=x(e.position0[1]),t[2]=x(e.position0[2]),t[3]=x(e.position1[0]),t[4]=x(e.position1[1]),t[5]=x(e.position1[2]),L[0]=5381;for(let r=0;r<O.length;r++)L[0]=31*L[0]+O[r];return L[0]}function x(e){return Math.round(1e4*e)/1e4}class N{constructor(){this.commonWriter=new w}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return b.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),(0,g.b)(P,r.faceNormal0,r.faceNormal1),(0,g.n)(P,P),e.normal.setVec(t,P)}trim(e,t){return this.commonWriter.trim(e,t)}}N.Layout=b,N.glLayout=l(b,1);class M{constructor(){this.commonWriter=new w}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return T.createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}M.Layout=T,M.glLayout=l(T,1);const P=(0,A.c)(),C=new E.Z;var I=r(93476),V=r(53934),F=r(68575);const R=-1;function U(e,t){return e.cosAngle<t}function Y(e,t){return e.cosAngle>t}function k(e,t){const r=(0,V.ZF)(e.cosAngle),s=W.fwd,n=W.ortho;return(0,g.r)(s,e.position1,e.position0),r*((0,g.d)((0,g.c)(n,e.faceNormal0,e.faceNormal1),s)>0?-1:1)>t}function D(e){const t=e.faces.length/3,r=e.vertices.position,s=e.faces,n=z.v0,f=z.v1,i=z.v2,u=new Float32Array(3*t);for(let c=0;c<t;c++){const e=s[3*c+1],t=s[3*c+2];r.getVec(s[3*c+0],n),r.getVec(e,f),r.getVec(t,i),(0,g.f)(f,f,n),(0,g.f)(i,i,n),(0,g.c)(n,f,i),(0,g.n)(n,n),u[3*c+0]=n[0],u[3*c+1]=n[1],u[3*c+2]=n[2]}return u}const W={edge:{position0:(0,A.c)(),position1:(0,A.c)(),faceNormal0:(0,A.c)(),faceNormal1:(0,A.c)(),componentIndex:0,cosAngle:0},ortho:(0,A.c)(),fwd:(0,A.c)()},z={v0:(0,A.c)(),v1:(0,A.c)(),v2:(0,A.c)()},q={anglePlanar:4,angleSignificantEdge:35};function $(e){return j.apply(this,arguments)}function j(){return(j=(0,s.Z)(function*(e){const t=G(e),r=H(t),s=[t.data.buffer];return{result:Z(r,s),transferList:s}})).apply(this,arguments)}function H(e){const t=J(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return K.updateSettings(e.writerSettings),Q.updateSettings(e.writerSettings),function(e,t,r,s=q){const n=e.vertices.position,f=e.vertices.componentIndex,i=(0,V.Vl)(s.anglePlanar),u=(0,V.Vl)(s.angleSignificantEdge),c=Math.cos(u),o=Math.cos(i),y=W.edge,a=y.position0,d=y.position1,l=y.faceNormal0,h=y.faceNormal1,p=D(e),B=function(e){const t=e.faces.length/3,r=e.faces,s=e.neighbors;let n=0;for(let u=0;u<t;u++){const e=r[3*u+0],t=r[3*u+1],f=r[3*u+2];n+=s[3*u+0]===R||e<t?1:0,n+=s[3*u+1]===R||t<f?1:0,n+=s[3*u+2]===R||f<e?1:0}const f=new Int32Array(4*n);let i=0;for(let u=0;u<t;u++){const e=s[3*u+0],t=s[3*u+1],n=s[3*u+2],c=r[3*u+0],o=r[3*u+1],y=r[3*u+2];(e===R||c<o)&&(f[i++]=c,f[i++]=o,f[i++]=u,f[i++]=e),(t===R||o<y)&&(f[i++]=o,f[i++]=y,f[i++]=u,f[i++]=t),(n===R||y<c)&&(f[i++]=y,f[i++]=c,f[i++]=u,f[i++]=n)}return f}(e),m=B.length/4,b=t.allocate(m);let T=0;const E=r.allocate(m);let A=0,w=0,S=0;const O=(0,I.w6)(0,m),L=new Float32Array(m);(0,F.Ed)(L,(e,t,r)=>{n.getVec(B[4*t+0],a),n.getVec(B[4*t+1],d),r[t]=(0,g.i)(a,d)}),O.sort((e,t)=>L[t]-L[e]);const _=new Array,v=new Array;for(let M=0;M<m;M++){const e=O[M],s=L[e],u=B[4*e+0],m=B[4*e+1],x=B[4*e+2],N=B[4*e+3],P=N===R;if(n.getVec(u,a),n.getVec(m,d),P)(0,g.s)(l,p[3*x+0],p[3*x+1],p[3*x+2]),(0,g.g)(h,l),y.componentIndex=f.get(u),y.cosAngle=(0,g.d)(l,h);else{if((0,g.s)(l,p[3*x+0],p[3*x+1],p[3*x+2]),(0,g.s)(h,p[3*N+0],p[3*N+1],p[3*N+2]),y.componentIndex=f.get(u),y.cosAngle=(0,g.d)(l,h),Y(y,o))continue;y.cosAngle<-.9999&&(0,g.g)(h,l)}w+=s,S++,P||U(y,c)?(t.write(b,T++,y),_.push(s)):k(y,i)&&(r.write(E,A++,y),v.push(s))}const x=new Float32Array(_.reverse()),N=new Float32Array(v.reverse());return{regular:{instancesData:t.trim(b,T),lodInfo:{lengths:x}},silhouette:{instancesData:r.trim(E,A),lodInfo:{lengths:N}},averageEdgeLength:w/S}}(t,K,Q)}function G(e){return{data:B.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function Z(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:c(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:c(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function J(e,t,r,s){if(t)return{faces:r,facesLength:s,neighbors:f(r,s,e.count),vertices:e};const i=(0,n.d)(e.buffer,e.stride/4,{originalIndices:r,originalIndicesLength:s}),u=f(i.indices,s,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:u,vertices:B.createView(i.buffer)}}const K=new N,Q=new M}}]);