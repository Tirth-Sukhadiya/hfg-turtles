(self.webpackChunkh4g_limo=self.webpackChunkh4g_limo||[]).push([[6258],{76258:(t,e,i)=>{"use strict";i.r(e),i.d(e,{calcite_value_list:()=>h,calcite_value_list_item:()=>u});var a,n=i(16304),s=i(23131),o=i(50045),r=i(51026),l=i(35490),c=i(74831),d=i(65260),m=i(87538);i(72475),function(t){t.grip="grip"}(a||(a={}));let h=class{constructor(t){(0,s.r)(this,t),this.calciteListChange=(0,s.c)(this,"calciteListChange",7),this.calciteListOrderChange=(0,s.c)(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.mutationObserver=(0,c.c)("mutation",r.m.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectSiblingItems=r.d.bind(this),this.selectSiblings=r.s.bind(this),this.handleFilter=r.h.bind(this),this.getItemData=r.g.bind(this),this.keyDownHandler=t=>{const e=t.composedPath().find(t=>{var e;return void 0!==(null===(e=t.dataset)||void 0===e?void 0:e.jsHandle)}),i=t.composedPath().find(t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())});if(!e||!i.handleActivated)return void r.k.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:a,items:n}=this,s="ArrowDown"===t.key?1:-1,o=n.indexOf(i),c=(0,l.g)(o+s,n.length);if(c===n.length-1)a.appendChild(i);else{const t=a.children[c];a.insertBefore(i,t===i.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame(()=>e.focus()),i.handleActivated=!0}}connectedCallback(){r.i.call(this),r.a.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){r.c.call(this),this.cleanUpDragAndDrop()}calciteListItemRemoveHandler(t){r.r.call(this,t)}calciteListItemChangeHandler(t){r.b.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){r.e.call(this,t)}setUpItems(){r.f.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=o.S.create(this.el,{dataIdAttr:"id",handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map(t=>t.value);this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}getSelectedItems(){var t=this;return(0,n.Z)(function*(){return t.selectedValues})()}setFocus(t){var e=this;return(0,n.Z)(function*(){return r.j.call(e,t)})()}getIconType(){let t=null;return this.dragEnabled&&(t=a.grip),t}render(){return(0,s.h)(r.L,{onKeyDown:this.keyDownHandler,props:this})}get el(){return(0,s.g)(this)}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:10}calcite-filter{margin-bottom:1px}";const b="actions-end",p="actions-start";let u=class{constructor(t){(0,s.r)(this,t),this.calciteListItemRemove=(0,s.c)(this,"calciteListItemRemove",7),this.disabled=!1,this.disableDeselect=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid=`calcite-value-list-item-${(0,d.g)()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected}}toggleSelected(t){var e=this;return(0,n.Z)(function*(){e.pickListItem.toggleSelected(t)})()}setFocus(){var t=this;return(0,n.Z)(function*(){var e;null===(e=t.pickListItem)||void 0===e||e.setFocus()})()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return(0,m.g)(t,b)?(0,s.h)("slot",{name:b,slot:r.S.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return(0,m.g)(t,p)?(0,s.h)("slot",{name:p,slot:r.S.actionsStart}):null}renderHandle(){const{icon:t}=this;if(t===r.I.grip)return(0,s.h)("span",{"aria-pressed":this.handleActivated.toString(),class:{[r.C.handle]:!0,[r.C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},(0,s.h)("calcite-icon",{icon:"drag",scale:"s"}))}render(){return(0,s.h)(s.H,{id:this.el.id||this.guid},this.renderHandle(),(0,s.h)("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return(0,s.g)(this)}};u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);margin-bottom:1px;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);-webkit-transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}calcite-pick-list-item{-webkit-box-shadow:none;box-shadow:none;-ms-flex-positive:1;flex-grow:1;position:relative;margin:0}:host([active]),:host([selected]){-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);cursor:move;color:var(--calcite-ui-border-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}"}}]);