(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[1126],{51126:(t,e,i)=>{"use strict";i.r(e),i.d(e,{calcite_filter:()=>l});var a=i(16304),n=i(23131),r=i(87538),s=i(72475),o=i(13892);let l=class{constructor(t){(0,n.r)(this,t),this.calciteFilterChange=(0,n.c)(this,"calciteFilterChange",7),this.disabled=!1,this.filteredItems=[],this.filter=(0,s.d)(t=>{const e=new RegExp(t,"i");if(0===this.items.length)return void this.updateFiltered([]);const i=(t,e)=>{let a=!1;return(0,o.f)(t,t=>{"function"!=typeof t&&(Array.isArray(t)||"object"==typeof t&&null!==t?i(t,e)&&(a=!0):e.test(t)&&(a=!0))}),a},a=this.items.filter(t=>i(t,e));this.updateFiltered(a)},250),this.inputHandler=t=>{this.value=t.target.value},this.keyDownHandler=({key:t})=>{"Escape"===t&&this.clear()},this.clear=()=>{this.value="",this.setFocus()}}watchDataHandler(t){this.items=t}watchItemsHandler(){this.filter(this.value)}valueHandler(t){this.filter(t)}connectedCallback(){this.data&&!this.items&&(this.items=this.data)}setFocus(){var t=this;return(0,a.Z)(function*(){(0,r.f)(t.textInput)})()}updateFiltered(t){this.filteredItems.length=0,this.filteredItems=this.filteredItems.concat(t),this.calciteFilterChange.emit(t)}render(){const t="rtl"===(0,r.a)(this.el),{disabled:e}=this;return(0,n.h)(n.F,null,e?(0,n.h)("calcite-scrim",null):null,(0,n.h)("div",{class:"container"},(0,n.h)("label",{class:t?r.C.rtl:null},(0,n.h)("calcite-input",{"aria-label":this.intlLabel||"Filter",class:t?r.C.rtl:null,disabled:this.disabled,icon:"search",onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:t=>{this.textInput=t},type:"text",value:this.value})),this.value?(0,n.h)("button",{"aria-label":this.intlClear||"Clear filter",class:"clear-button",onClick:this.clear},(0,n.h)("calcite-icon",{icon:"x"})):null))}get el(){return(0,n.g)(this)}static get watchers(){return{data:["watchDataHandler"],items:["watchItemsHandler"],value:["valueHandler"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{display:-ms-flexbox;display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}"}}]);