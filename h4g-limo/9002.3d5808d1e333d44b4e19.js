(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[9002],{29002:(t,e,n)=>{"use strict";n.r(e),n.d(e,{calcite_action_menu:()=>d});var i=n(16304),o=n(23131),a=n(11142),s=n(87538),r=n(35490),l=n(65260),c=n(74831);const u=["ArrowUp","ArrowDown"],m=["ArrowUp","ArrowDown","End","Home"];let d=class{constructor(t){(0,o.r)(this,t),this.calciteActionMenuOpenChange=(0,o.c)(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.actionElements=[],this.mutationObserver=(0,c.c)("mutation",()=>this.getActions()),this.guid=`calcite-action-menu-${(0,l.g)()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.activeMenuItemIndex=-1,this.connectMenuButtonEl=()=>{const{el:t,menuButtonId:e,menuId:n,open:i,label:o}=this,r=(0,s.g)(t,a.S.trigger)||this.defaultMenuButtonEl;this.menuButtonEl!==r&&(this.disconnectMenuButtonEl(),this.menuButtonEl=r,this.setTooltipReferenceElement(),r&&(r.active=i,r.setAttribute("aria-controls",n),r.setAttribute("aria-expanded",i.toString()),r.setAttribute("aria-haspopup","true"),r.id||(r.id=e),r.label||(r.label=o),r.text||(r.text=o),r.addEventListener("click",this.menuButtonClick),r.addEventListener("keydown",this.menuButtonKeyDown),r.addEventListener("keyup",this.menuButtonKeyUp)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("click",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown),t.removeEventListener("keyup",this.menuButtonKeyUp))},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.setTooltipReferenceElement=()=>{const{el:t,expanded:e,menuButtonEl:n}=this,i=(0,s.g)(t,a.S.tooltip),o="SLOT"===(null==i?void 0:i.tagName)?i.assignedElements()[0]:i;"CALCITE-TOOLTIP"===(null==o?void 0:o.tagName)&&(o.referenceElement=e?null:n)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:i}=this,o=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=o),t.active=e===i},this.updateActions=t=>{null==t||t.forEach(this.updateAction)},this.getActions=()=>{const{el:t}=this,e=this.getAssignedElements().filter(t=>"CALCITE-ACTION"===t.tagName&&"trigger"!==t.slot),n=e.length?e:Array.from(t.querySelectorAll("calcite-action:not([slot=trigger])"));this.updateActions(n),this.actionElements=n,this.connectMenuButtonEl()},this.menuButtonKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;this.isValidKey(e,u)&&(t.preventDefault(),n.length&&(this.toggleOpen(!0),this.handleActionNavigation(e,n)))},this.menuButtonKeyDown=t=>{const{key:e}=t;this.isValidKey(e,u)&&t.preventDefault()},this.menuActionsContainerKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:i}=this;if("Tab"!==e)if(" "!==e&&"Enter"!==e)this.isValidKey(e,m)&&t.preventDefault();else{t.preventDefault();const e=n[i];e?e.click():this.toggleOpen(!1)}else this.open=!1},this.menuActionsContainerKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;"Escape"!==e?this.isValidKey(e,m)&&(t.preventDefault(),n.length&&this.handleActionNavigation(e,n)):this.toggleOpen(!1)},this.handleActionNavigation=(t,e)=>{const n=this.activeMenuItemIndex;"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=e.length-1),"ArrowUp"===t&&(this.activeMenuItemIndex=(0,r.g)(Math.max(n-1,-1),e.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=(0,r.g)(n+1,e.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t}}connectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.getActions()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpenChange.emit(t)}closeCalciteActionMenuOnClick(t){t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}setFocus(){var t=this;return(0,i.Z)(function*(){(0,s.f)(t.open?t.menuEl:t.menuButtonEl)})()}renderMenuButton(){const{el:t,label:e,scale:n}=this,i=(0,o.h)("slot",{name:a.S.trigger},(0,o.h)("calcite-action",{class:a.C.defaultTrigger,icon:a.I.menu,ref:this.setDefaultMenuButtonEl,scale:n,text:e}));return(0,s.g)(t,a.S.tooltip)?(0,o.h)("calcite-tooltip-manager",null,i):i}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:n,menuId:i,menuButtonEl:s,label:r,placement:l,overlayPositioning:c}=this,u=t[e];return(0,o.h)("calcite-popover",{disablePointer:!0,label:r,offsetDistance:0,open:n,overlayPositioning:c,placement:l,referenceElement:s},(0,o.h)("div",{"aria-activedescendant":(null==u?void 0:u.id)||null,"aria-labelledby":null==s?void 0:s.id,class:a.C.menu,id:i,onClick:this.handleCalciteActionClick,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:t=>this.menuEl=t,role:"menu",tabIndex:-1},(0,o.h)("slot",null)))}render(){return(0,o.h)(o.F,null,this.renderMenuButton(),this.renderMenuItems(),(0,o.h)("slot",{name:a.S.tooltip}))}getAssignedElements(){return Array.from(this.el.querySelectorAll("slot")).map(t=>t.assignedElements({flatten:!0})).reduce((t,e)=>t.concat(e),[])}isValidKey(t,e){return!!e.find(e=>e===t)}get el(){return(0,o.g)(this)}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size-1)}.menu ::slotted(calcite-action){display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;margin:0.125rem}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:0px}.default-trigger{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}"},87538:(t,e,n)=>{"use strict";n.d(e,{C:()=>a,T:()=>s,a:()=>u,b:()=>c,c:()=>g,d:()=>m,e:()=>r,f:()=>v,g:()=>k,h:()=>f,i:()=>y,j:()=>w,k:()=>x,n:()=>l,q:()=>p,s:()=>E});var i=n(16304),o=n(65260);const a={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},s={loading:"Loading"};function r(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,o.g)()}`:""}function l(t){return Array.isArray(t)?t:Array.from(t)}function c(t){return g(t,`.${a.darkTheme}`)?"dark":"light"}function u(t){const e=g(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function m(t,e,n){const i=t.closest(`[${e}]`);return i?i.getAttribute(e):n}function d(t){return t.getRootNode()}function h(t){return t.host||null}function f(t,e){return function t(n,i){if(!n)return i;n.assignedSlot&&(n=n.assignedSlot);const o=d(n),a=Array.from(o.querySelectorAll(e)).filter(t=>!i.includes(t));i=[...i,...a];const s=h(o);return s?t(s,i):i}(t,[])}function p(t,e){return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const i=d(n),o=i.querySelector(e),a=h(i);return o||(a?t(a):null)}(t)}function g(t,e){return function t(n){return n?n.closest(e)||t(h(d(n))):null}(t)}function y(t){return"function"==typeof(null==t?void 0:t.setFocus)}function v(t){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(function*(t){if(t)return y(t)?t.setFocus():t.focus()})).apply(this,arguments)}function k(t,e,n){const i=`[slot="${e}"]`;return(null==n?void 0:n.all)?function(t,e,n){let i=Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter(e=>e.parentElement===t);const o=null==n?void 0:n.selector;return o?i.map(t=>Array.from(t.querySelectorAll(o))).reduce((t,e)=>[...t,...e],[]).filter(t=>!!t):i}(t,i,n):function(t,e,n){let i=t.querySelector(e);i=n&&!1===n.direct||(null==i?void 0:i.parentElement)===t?i:null;const o=null==n?void 0:n.selector;return o?i.querySelector(o):i}(t,i,n)}function x(t,e){return Array.from(t.children).filter(t=>t.matches(e))}function E(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function w(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},65260:(t,e,n)=>{"use strict";n.d(e,{g:()=>i});const i=()=>[2,1,1,1,3].map(t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e}).join("-")},74831:(t,e,n)=>{"use strict";function i(t,e,n){return new(function(t){return"intersection"===t?IntersectionObserver:"mutation"===t?MutationObserver:ResizeObserver}(t))(e,n)}n.d(e,{c:()=>i})}}]);