(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[3913],{63913:(t,a,e)=>{"use strict";e.r(a),e.d(a,{calcite_flow:()=>o});var i=e(16304),n=e(23131),r=e(74831);let o=class{constructor(t){(0,n.r)(this,t),this.panelCount=0,this.flowDirection=null,this.panels=[],this.getFlowDirection=(t,a)=>t&&a>1||t>1?a<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{panels:t}=this,a=Array.from(this.el.querySelectorAll("calcite-panel")),e=t.length,i=a.length,n=a[i-1],r=a[i-2];if(i&&n&&a.forEach(t=>{t.showBackButton=i>1,t.hidden=t!==n}),r&&(r.menuOpen=!1),this.panels=a,e!==i){const t=this.getFlowDirection(e,i);this.panelCount=i,this.flowDirection=t}},this.panelItemMutationObserver=(0,r.c)("mutation",this.updateFlowProps)}back(){var t=this;return(0,i.Z)(function*(){const a=t.el.querySelector("calcite-panel:last-child");if(a)return(a.beforeBack?a.beforeBack:()=>Promise.resolve()).call(a).then(()=>(a.remove(),a))})()}connectedCallback(){var t;null===(t=this.panelItemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){var t;null===(t=this.panelItemMutationObserver)||void 0===t||t.disconnect()}handleCalcitePanelBackClick(){this.back()}render(){const{flowDirection:t,panelCount:a}=this;return(0,n.h)("div",{class:{frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t},key:a},(0,n.h)("slot",null))}get el(){return(0,n.g)(this)}};o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;width:100%;overflow:hidden;position:relative}:host .frame{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;-ms-flex-direction:column;flex-direction:column;position:relative}:host ::slotted(calcite-panel){height:100%}:host ::slotted(.calcite-match-height:last-child){display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}:host .frame--advancing{-webkit-animation:calcite-frame-advance 150ms ease-in-out;animation:calcite-frame-advance 150ms ease-in-out}:host .frame--retreating{-webkit-animation:calcite-frame-retreat 150ms ease-in-out;animation:calcite-frame-retreat 150ms ease-in-out}@-webkit-keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}"},74831:(t,a,e)=>{"use strict";function i(t,a,e){return new(function(t){return"intersection"===t?IntersectionObserver:"mutation"===t?MutationObserver:ResizeObserver}(t))(a,e)}e.d(a,{c:()=>i})}}]);