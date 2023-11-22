/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{b6 as e,a7 as l,I as t,aH as a,b7 as o,b1 as n,a2 as s,y as i,a8 as r,_ as u,A as p,B as d,Q as c,r as v,aS as h,ah as m,$ as b,a3 as f,a4 as g,o as y,c as C,F as O,b as S,t as x,n as T,al as L,a as w,Z as I,aE as E,J as M,R as V,ax as B,Y as D,b8 as P,b9 as A,ai as k,aR as K,aU as z,ba as q,b4 as W,bb as F,bc as H,bd as R,aa as _,be as j,aA as N,bf as Q,bg as $,bh as G,l as U,L as J,bi as Y,H as Z,bj as X,ag as ee,C as le,bk as te,x as ae,bl as oe,d as ne,w as se,h as ie,T as re,O as ue,P as pe,e as de,q as ce,an as ve,aj as he,z as me,M as be,N as fe}from"./087AC4D233B64EB0index.js";import{E as ge,u as ye,a as Ce}from"./087AC4D233B64EB0index21.js";import{E as Oe}from"./087AC4D233B64EB0scrollbar.js";import{E as Se,t as xe}from"./087AC4D233B64EB0index22.js";import{e as Te}from"./087AC4D233B64EB0strings.js";import{i as Le}from"./087AC4D233B64EB0isEqual.js";import{t as we,d as Ie}from"./087AC4D233B64EB0debounce.js";import{b as Ee,C as Me}from"./087AC4D233B64EB0tag.js";var Ve=1/0,Be=17976931348623157e292;function De(e){var l=function(e){return e?(e=we(e))===Ve||e===-Ve?(e<0?-1:1)*Be:e==e?e:0:0===e?e:0}(e),t=l%1;return l==l?t?l-t:l:0}var Pe=Math.max,Ae=Math.min;const ke=Symbol("ElSelectGroup"),Ke=Symbol("ElSelect");const ze=p({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const u=d("select"),p=c(),f=t((()=>[u.be("dropdown","item"),u.is("disabled",i(O)),{selected:i(C),hover:i(L)}])),g=v({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:y,itemSelected:C,isDisabled:O,select:S,hoverItem:x}=function(e,u){const p=l(Ke),d=l(ke,{disabled:!1}),c=t((()=>a(e.value))),v=t((()=>p.props.multiple?y(p.props.modelValue,e.value):C(e.value,p.props.modelValue))),h=t((()=>{if(p.props.multiple){const e=p.props.modelValue||[];return!v.value&&e.length>=p.props.multipleLimit&&p.props.multipleLimit>0}return!1})),m=t((()=>e.label||(c.value?"":e.value))),b=t((()=>e.value||e.label||"")),f=t((()=>e.disabled||u.groupDisabled||h.value)),g=r(),y=(e=[],l)=>{if(c.value){const t=p.props.valueKey;return e&&e.some((e=>o(n(e,t))===n(l,t)))}return e&&e.includes(l)},C=(e,l)=>{if(c.value){const{valueKey:t}=p.props;return n(e,t)===n(l,t)}return e===l};s((()=>m.value),(()=>{e.created||p.props.remote||p.setSelected()})),s((()=>e.value),((l,t)=>{const{remote:o,valueKey:n}=p.props;if(Object.is(l,t)||(p.onOptionDestroy(t,g.proxy),p.onOptionCreate(g.proxy)),!e.created&&!o){if(n&&a(l)&&a(t)&&l[n]===t[n])return;p.setSelected()}})),s((()=>d.disabled),(()=>{u.groupDisabled=d.disabled}),{immediate:!0});const{queryChange:O}=o(p);return s(O,(l=>{const{query:t}=i(l),a=new RegExp(Te(t),"i");u.visible=a.test(m.value)||e.created,u.visible||p.filteredOptionsCount--}),{immediate:!0}),{select:p,currentLabel:m,currentValue:b,itemSelected:v,isDisabled:f,hoverItem:()=>{e.disabled||d.disabled||(p.hoverIndex=p.optionsArray.indexOf(g.proxy))}}}(e,g),{visible:T,hover:L}=h(g),w=r().proxy;return S.onOptionCreate(w),m((()=>{const e=w.value,{selected:l}=S,t=(S.props.multiple?l:[l]).some((e=>e.value===w.value));b((()=>{S.cachedOptions.get(e)!==w||t||S.cachedOptions.delete(e)})),S.onOptionDestroy(e,w)})),{ns:u,id:p,containerKls:f,currentLabel:y,itemSelected:C,isDisabled:O,select:S,hoverItem:x,visible:T,hover:L,selectOptionClick:function(){!0!==e.disabled&&!0!==g.groupDisabled&&S.handleOptionSelect(w)},states:g}}}),qe=["id","aria-disabled","aria-selected"];var We=u(ze,[["render",function(e,l,t,a,o,n){return f((y(),C("li",{id:e.id,class:T(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=L(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[O(e.$slots,"default",{},(()=>[S("span",null,x(e.currentLabel),1)]))],42,qe)),[[g,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);var Fe=u(p({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=l(Ke),a=d("select"),o=t((()=>e.props.popperClass)),n=t((()=>e.props.multiple)),s=t((()=>e.props.fitInputWidth)),i=w("");function r(){var l;i.value="".concat(null==(l=e.selectWrapper)?void 0:l.offsetWidth,"px")}return I((()=>{r(),E(e.selectWrapper,r)})),{ns:a,minWidth:i,popperClass:o,isMultiple:n,isFitInputWidth:s}}}),[["render",function(e,l,t,a,o,n){return y(),C("div",{class:T([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:M({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[O(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);const He=(l,r,u)=>{const{t:p}=V(),c=d("select");B({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},t((()=>!1===l.suffixTransition)));const v=w(null),h=w(null),m=w(null),f=w(null),g=w(null),y=w(null),C=w(null),O=w(null),S=w(),x=D({query:""}),T=D(""),L=w([]);let I=0;const{form:E,formItem:M}=P(),U=t((()=>!l.filterable||l.multiple||!r.visible)),J=t((()=>l.disabled||(null==E?void 0:E.disabled))),Y=t((()=>{const e=l.multiple?Array.isArray(l.modelValue)&&l.modelValue.length>0:void 0!==l.modelValue&&null!==l.modelValue&&""!==l.modelValue;return l.clearable&&!J.value&&r.inputHovering&&e})),Z=t((()=>l.remote&&l.filterable&&!l.remoteShowSuffix?"":l.suffixIcon)),X=t((()=>c.is("reverse",Z.value&&r.visible&&l.suffixTransition))),ee=t((()=>(null==E?void 0:E.statusIcon)&&(null==M?void 0:M.validateState)&&A[null==M?void 0:M.validateState])),le=t((()=>l.remote?300:0)),te=t((()=>l.loading?l.loadingText||p("el.select.loading"):(!l.remote||""!==r.query||0!==r.options.size)&&(l.filterable&&r.query&&r.options.size>0&&0===r.filteredOptionsCount?l.noMatchText||p("el.select.noMatch"):0===r.options.size?l.noDataText||p("el.select.noData"):null))),ae=t((()=>{const e=Array.from(r.options.values()),l=[];return L.value.forEach((t=>{const a=e.findIndex((e=>e.currentLabel===t));a>-1&&l.push(e[a])})),l.length>=e.length?l:e})),oe=t((()=>Array.from(r.cachedOptions.values()))),ne=t((()=>{const e=ae.value.filter((e=>!e.created)).some((e=>e.currentLabel===r.query));return l.filterable&&l.allowCreate&&""!==r.query&&!e})),se=k(),ie=t((()=>["small"].includes(se.value)?"small":"default")),re=t({get:()=>r.visible&&!1!==te.value,set(e){r.visible=e}});s([()=>J.value,()=>se.value,()=>null==E?void 0:E.size],(()=>{b((()=>{ue()}))})),s((()=>l.placeholder),(e=>{r.cachedPlaceHolder=r.currentPlaceholder=e;l.multiple&&Array.isArray(l.modelValue)&&l.modelValue.length>0&&(r.currentPlaceholder="")})),s((()=>l.modelValue),((e,t)=>{l.multiple&&(ue(),e&&e.length>0||h.value&&""!==r.query?r.currentPlaceholder="":r.currentPlaceholder=r.cachedPlaceHolder,l.filterable&&!l.reserveKeyword&&(r.query="",pe(r.query))),ve(),l.filterable&&!l.multiple&&(r.inputLength=20),!Le(e,t)&&l.validateEvent&&(null==M||M.validate("change").catch((e=>K())))}),{flush:"post",deep:!0}),s((()=>r.visible),(e=>{var t,a,o,n,s;e?(null==(a=null==(t=f.value)?void 0:t.updatePopper)||a.call(t),l.filterable&&(r.filteredOptionsCount=r.optionsCount,r.query=l.remote?"":r.selectedLabel,null==(n=null==(o=m.value)?void 0:o.focus)||n.call(o),l.multiple?null==(s=h.value)||s.focus():r.selectedLabel&&(r.currentPlaceholder="".concat(r.selectedLabel),r.selectedLabel=""),pe(r.query),l.multiple||l.remote||(x.value.query="",q(x),q(T)))):(l.filterable&&(z(l.filterMethod)&&l.filterMethod(""),z(l.remoteMethod)&&l.remoteMethod("")),r.query="",r.previousQuery=null,r.selectedLabel="",r.inputLength=20,r.menuVisibleOnFocus=!1,me(),b((()=>{h.value&&""===h.value.value&&0===r.selected.length&&(r.currentPlaceholder=r.cachedPlaceHolder)})),l.multiple||(r.selected&&(l.filterable&&l.allowCreate&&r.createdSelected&&r.createdLabel?r.selectedLabel=r.createdLabel:r.selectedLabel=r.selected.currentLabel,l.filterable&&(r.query=r.selectedLabel)),l.filterable&&(r.currentPlaceholder=r.cachedPlaceHolder))),u.emit("visible-change",e)})),s((()=>r.options.entries()),(()=>{var e,t,a;if(!W)return;null==(t=null==(e=f.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&ue();const o=(null==(a=C.value)?void 0:a.querySelectorAll("input"))||[];(l.filterable||l.defaultFirstOption||F(l.modelValue))&&Array.from(o).includes(document.activeElement)||ve(),l.defaultFirstOption&&(l.filterable||l.remote)&&r.filteredOptionsCount&&ce()}),{flush:"post"}),s((()=>r.hoverIndex),(e=>{H(e)&&e>-1?S.value=ae.value[e]||{}:S.value={},ae.value.forEach((e=>{e.hover=S.value===e}))}));const ue=()=>{b((()=>{var l,t;if(!v.value)return;const a=v.value.$el.querySelector("input");I=I||(a.clientHeight>0?a.clientHeight+2:0);const o=y.value,n=getComputedStyle(a).getPropertyValue(c.cssVarName("input-height")),s=Number.parseFloat(n)||(i=se.value||(null==E?void 0:E.size),e[i||"default"]);var i;const u=se.value||s===I||I<=0?s:I;!(null===a.offsetParent)&&(a.style.height="".concat((0===r.selected.length?u:Math.max(o?o.clientHeight+(o.clientHeight>u?6:0):0,u))-2,"px")),r.visible&&!1!==te.value&&(null==(t=null==(l=f.value)?void 0:l.updatePopper)||t.call(l))}))},pe=async e=>{r.previousQuery===e||r.isOnComposition||(null!==r.previousQuery||!z(l.filterMethod)&&!z(l.remoteMethod)?(r.previousQuery=e,b((()=>{var e,l;r.visible&&(null==(l=null==(e=f.value)?void 0:e.updatePopper)||l.call(e))})),r.hoverIndex=-1,l.multiple&&l.filterable&&b((()=>{if(!J.value){const e=15*h.value.value.length+20;r.inputLength=l.collapseTags?Math.min(50,e):e,de()}ue()})),l.remote&&z(l.remoteMethod)?(r.hoverIndex=-1,l.remoteMethod(e)):z(l.filterMethod)?(l.filterMethod(e),q(T)):(r.filteredOptionsCount=r.optionsCount,x.value.query=e,q(x),q(T)),l.defaultFirstOption&&(l.filterable||l.remote)&&r.filteredOptionsCount&&(await b(),ce())):r.previousQuery=e)},de=()=>{""!==r.currentPlaceholder&&(r.currentPlaceholder=h.value.value?"":r.cachedPlaceHolder)},ce=()=>{const e=ae.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0];r.hoverIndex=Te(ae.value,l||t)},ve=()=>{var e;if(!l.multiple){const t=he(l.modelValue);return(null==(e=t.props)?void 0:e.created)?(r.createdLabel=t.props.value,r.createdSelected=!0):r.createdSelected=!1,r.selectedLabel=t.currentLabel,r.selected=t,void(l.filterable&&(r.query=r.selectedLabel))}r.selectedLabel="";const t=[];Array.isArray(l.modelValue)&&l.modelValue.forEach((e=>{t.push(he(e))})),r.selected=t,b((()=>{ue()}))},he=e=>{let t;const a="object"===R(e).toLowerCase(),o="null"===R(e).toLowerCase(),s="undefined"===R(e).toLowerCase();for(let u=r.cachedOptions.size-1;u>=0;u--){const o=oe.value[u];if(a?n(o.value,l.valueKey)===n(e,l.valueKey):o.value===e){t={value:e,currentLabel:o.currentLabel,isDisabled:o.isDisabled};break}}if(t)return t;const i={value:e,currentLabel:a?e.label:o||s?"":e};return l.multiple&&(i.hitState=!1),i},me=()=>{setTimeout((()=>{const e=l.valueKey;l.multiple?r.selected.length>0?r.hoverIndex=Math.min.apply(null,r.selected.map((l=>ae.value.findIndex((t=>n(t,e)===n(l,e)))))):r.hoverIndex=-1:r.hoverIndex=ae.value.findIndex((e=>ze(e)===ze(r.selected)))}),300)},be=()=>{var e;r.inputWidth=null==(e=v.value)?void 0:e.$el.offsetWidth},fe=Ie((()=>{l.filterable&&r.query!==r.selectedLabel&&(r.query=r.selectedLabel,pe(r.query))}),le.value),ge=Ie((e=>{pe(e.target.value)}),le.value),ye=e=>{Le(l.modelValue,e)||u.emit(G,e)},Ce=e=>function(e,l,t){var a=null==e?0:e.length;if(!a)return-1;var o=a-1;return void 0!==t&&(o=De(t),o=t<0?Pe(a+o,0):Ae(o,a-1)),function(e,l,t,a){for(var o=e.length,n=t+(a?1:-1);a?n--:++n<o;)if(l(e[n],n,e))return n;return-1}(e,Ee(l),o,!0)}(e,(e=>!r.disabledOptions.has(e))),Oe=(e,t)=>{const a=r.selected.indexOf(t);if(a>-1&&!J.value){const e=l.modelValue.slice();e.splice(a,1),u.emit(j,e),ye(e),u.emit("remove-tag",t.value)}e.stopPropagation(),Be()},Se=e=>{e.stopPropagation();const t=l.multiple?[]:"";if(!N(t))for(const l of r.selected)l.isDisabled&&t.push(l.value);u.emit(j,t),ye(t),r.hoverIndex=-1,r.visible=!1,u.emit("clear"),Be()},xe=e=>{var t;if(l.multiple){const a=(l.modelValue||[]).slice(),o=Te(a,e.value);o>-1?a.splice(o,1):(l.multipleLimit<=0||a.length<l.multipleLimit)&&a.push(e.value),u.emit(j,a),ye(a),e.created&&(r.query="",pe(""),r.inputLength=20),l.filterable&&(null==(t=h.value)||t.focus())}else u.emit(j,e.value),ye(e.value),r.visible=!1;we(),r.visible||b((()=>{Me(e)}))},Te=(e=[],t)=>{if(!a(t))return e.indexOf(t);const s=l.valueKey;let i=-1;return e.some(((e,l)=>o(n(e,s))===n(t,s)&&(i=l,!0))),i},we=()=>{const e=h.value||v.value;e&&(null==e||e.focus())},Me=e=>{var l,t,a,o,n;const s=Array.isArray(e)?e[0]:e;let i=null;if(null==s?void 0:s.value){const e=ae.value.filter((e=>e.value===s.value));e.length>0&&(i=e[0].$el)}if(f.value&&i){const e=null==(o=null==(a=null==(t=null==(l=f.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:a.querySelector)?void 0:o.call(a,".".concat(c.be("dropdown","wrap")));e&&Q(e,i)}null==(n=O.value)||n.handleScroll()},Ve=e=>{if(!Array.isArray(r.selected))return;const l=Ce(r.selected.map((e=>e.value))),t=r.selected[l];return t?!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState):void 0},Be=()=>{var e,l;r.visible?null==(e=h.value||v.value)||e.focus():null==(l=v.value)||l.focus()},ke=()=>{r.visible=!1},Ke=e=>{e&&!r.mouseEnter||J.value||(r.menuVisibleOnFocus?r.menuVisibleOnFocus=!1:f.value&&f.value.isFocusInsideContent()||(r.visible=!r.visible),Be())},ze=e=>a(e.value)?n(e.value,l.valueKey):e.value,qe=t((()=>ae.value.filter((e=>e.visible)).every((e=>e.disabled)))),We=t((()=>l.multiple?r.selected.slice(0,l.maxCollapseTags):[])),Fe=t((()=>l.multiple?r.selected.slice(l.maxCollapseTags):[])),He=e=>{if(r.visible){if(0!==r.options.size&&0!==r.filteredOptionsCount&&!r.isOnComposition&&!qe.value){"next"===e?(r.hoverIndex++,r.hoverIndex===r.options.size&&(r.hoverIndex=0)):"prev"===e&&(r.hoverIndex--,r.hoverIndex<0&&(r.hoverIndex=r.options.size-1));const l=ae.value[r.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||He(e),b((()=>Me(S.value)))}}else r.visible=!0},Re=t((()=>({maxWidth:"".concat(i(r.inputWidth)-32-(ee.value?22:0),"px"),width:"100%"})));return{optionList:L,optionsArray:ae,hoverOption:S,selectSize:se,handleResize:()=>{var e,t;be(),null==(t=null==(e=f.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&ue()},debouncedOnInputChange:fe,debouncedQueryChange:ge,deletePrevTag:e=>{if(e.code!==_.delete){if(e.target.value.length<=0&&!Ve()){const e=l.modelValue.slice(),t=Ce(e);if(t<0)return;e.splice(t,1),u.emit(j,e),ye(e)}1===e.target.value.length&&0===l.modelValue.length&&(r.currentPlaceholder=r.cachedPlaceHolder)}},deleteTag:Oe,deleteSelected:Se,handleOptionSelect:xe,scrollToOption:Me,readonly:U,resetInputHeight:ue,showClose:Y,iconComponent:Z,iconReverse:X,showNewOption:ne,collapseTagSize:ie,setSelected:ve,managePlaceholder:de,selectDisabled:J,emptyText:te,toggleLastOptionHitState:Ve,resetInputState:e=>{e.code!==_.backspace&&Ve(!1),r.inputLength=15*h.value.value.length+20,ue()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)r.isOnComposition=!1,b((()=>pe(l)));else{const e=l[l.length-1]||"";r.isOnComposition=!$(e)}},onOptionCreate:e=>{r.optionsCount++,r.filteredOptionsCount++,r.options.set(e.value,e),r.cachedOptions.set(e.value,e),e.disabled&&r.disabledOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{r.options.get(e)===l&&(r.optionsCount--,r.filteredOptionsCount--,r.options.delete(e))},handleMenuEnter:()=>{b((()=>Me(r.selected)))},handleFocus:e=>{r.focused||((l.automaticDropdown||l.filterable)&&(l.filterable&&!r.visible&&(r.menuVisibleOnFocus=!0),r.visible=!0),r.focused=!0,u.emit("focus",e))},focus:Be,blur:()=>{var e,l,t;r.visible=!1,null==(e=v.value)||e.blur(),null==(t=null==(l=m.value)?void 0:l.blur)||t.call(l)},handleBlur:e=>{var l,t,a;(null==(l=f.value)?void 0:l.isFocusInsideContent(e))||(null==(t=g.value)?void 0:t.isFocusInsideContent(e))||(null==(a=C.value)?void 0:a.contains(e.relatedTarget))||(r.visible&&ke(),r.focused=!1,u.emit("blur",e))},handleClearClick:e=>{Se(e)},handleClose:ke,handleKeydownEscape:e=>{r.visible&&(e.preventDefault(),e.stopPropagation(),r.visible=!1)},toggleMenu:Ke,selectOption:()=>{r.visible?ae.value[r.hoverIndex]&&xe(ae.value[r.hoverIndex]):Ke()},getValueKey:ze,navigateOptions:He,handleDeleteTooltipTag:(e,l)=>{var t,a;Oe(e,l),null==(a=null==(t=g.value)?void 0:t.updatePopper)||a.call(t)},dropMenuVisible:re,queryChange:x,groupQueryChange:T,showTagList:We,collapseTagList:Fe,selectTagsStyle:Re,reference:v,input:h,iOSInput:m,tooltipRef:f,tagTooltipRef:g,tags:y,selectWrapper:C,scrollbar:O,handleMouseEnter:()=>{r.mouseEnter=!0},handleMouseLeave:()=>{r.mouseEnter=!1}}};var Re=p({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:t}){let a=[];return()=>{var e,o;const n=null==(e=l.default)?void 0:e.call(l),s=[];return n.length&&function e(l){Array.isArray(l)&&l.forEach((l=>{var t,a,o,n;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(N(l.children)||Array.isArray(l.children)||!z(null==(a=l.children)?void 0:a.default)?l.children:null==(o=l.children)?void 0:o.default()):"ElOption"===i?s.push(null==(n=l.props)?void 0:n.label):Array.isArray(l.children)&&e(l.children)}))}(null==(o=n[0])?void 0:o.children),function(e,l){if(e.length!==l.length)return!1;for(const[t]of e.entries())if(e[t]!=l[t])return!1;return!0}(s,a)||(a=s,t("update-options",s)),n}}});const _e="ElSelect",je=p({name:_e,componentName:_e,components:{ElInput:U,ElSelectMenu:Fe,ElOption:We,ElOptions:Re,ElTag:Se,ElScrollbar:Oe,ElTooltip:ge,ElIcon:J},directives:{ClickOutside:Me},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Y},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:ye.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Z,default:X},fitInputWidth:Boolean,suffixIcon:{type:Z,default:ee},tagType:{...xe.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Ce,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[j,G,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const a=d("select"),o=d("input"),{t:n}=V(),s=c(),r=function(e){const{t:l}=V();return v({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}(e),{optionList:u,optionsArray:p,hoverOption:m,selectSize:f,readonly:g,handleResize:y,collapseTagSize:C,debouncedOnInputChange:O,debouncedQueryChange:S,deletePrevTag:x,deleteTag:T,deleteSelected:L,handleOptionSelect:w,scrollToOption:M,setSelected:B,resetInputHeight:D,managePlaceholder:P,showClose:A,selectDisabled:k,iconComponent:K,iconReverse:z,showNewOption:q,emptyText:W,toggleLastOptionHitState:F,resetInputState:H,handleComposition:R,onOptionCreate:_,onOptionDestroy:N,handleMenuEnter:Q,handleFocus:$,focus:G,blur:U,handleBlur:J,handleClearClick:Y,handleClose:Z,handleKeydownEscape:X,toggleMenu:ee,selectOption:ae,getValueKey:oe,navigateOptions:ne,handleDeleteTooltipTag:se,dropMenuVisible:ie,reference:re,input:ue,iOSInput:pe,tooltipRef:de,tagTooltipRef:ce,tags:ve,selectWrapper:he,scrollbar:me,queryChange:be,groupQueryChange:fe,handleMouseEnter:ge,handleMouseLeave:ye,showTagList:Ce,collapseTagList:Oe,selectTagsStyle:Se}=He(e,r,l),{inputWidth:xe,selected:Te,inputLength:Le,filteredOptionsCount:we,visible:Ie,selectedLabel:Ee,hoverIndex:Me,query:Ve,inputHovering:Be,currentPlaceholder:De,menuVisibleOnFocus:Pe,isOnComposition:Ae,options:ke,cachedOptions:ze,optionsCount:qe,prefixWidth:We}=h(r),Fe=t((()=>{const l=[a.b()],t=i(f);return t&&l.push(a.m(t)),e.disabled&&l.push(a.m("disabled")),l})),Re=t((()=>[a.e("tags"),a.is("disabled",i(k))])),_e=t((()=>[a.b("tags-wrapper"),{"has-prefix":i(We)&&i(Te).length}])),je=t((()=>[a.e("input"),a.is(i(f)),a.is("disabled",i(k))])),Ne=t((()=>[a.e("input"),a.is(i(f)),a.em("input","iOS")])),Qe=t((()=>[a.is("empty",!e.allowCreate&&Boolean(i(Ve))&&0===i(we))])),$e=t((()=>{const e=i(xe)>123?i(xe)-123:i(xe)-75;return{maxWidth:"".concat(e,"px")}})),Ge=t((()=>({marginLeft:"".concat(i(We),"px"),flexGrow:1,width:"".concat(i(Le)/(i(xe)-32),"%"),maxWidth:"".concat(i(xe)-42,"px")})));le(Ke,v({props:e,options:ke,optionsArray:p,cachedOptions:ze,optionsCount:qe,filteredOptionsCount:we,hoverIndex:Me,handleOptionSelect:w,onOptionCreate:_,onOptionDestroy:N,selectWrapper:he,selected:Te,setSelected:B,queryChange:be,groupQueryChange:fe})),I((()=>{r.cachedPlaceHolder=De.value=e.placeholder||(()=>n("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(De.value=""),E(he,y),e.remote&&e.multiple&&D(),b((()=>{const e=re.value&&re.value.$el;if(e&&(xe.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(".".concat(o.e("prefix")));We.value=Math.max(l.getBoundingClientRect().width+11,30)}})),B()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(j,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(j,"");const Ue=t((()=>{var e,l;return null==(l=null==(e=de.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{isIOS:te,onOptionsRendered:e=>{u.value=e},prefixWidth:We,selectSize:f,readonly:g,handleResize:y,collapseTagSize:C,debouncedOnInputChange:O,debouncedQueryChange:S,deletePrevTag:x,deleteTag:T,handleDeleteTooltipTag:se,deleteSelected:L,handleOptionSelect:w,scrollToOption:M,inputWidth:xe,selected:Te,inputLength:Le,filteredOptionsCount:we,visible:Ie,selectedLabel:Ee,hoverIndex:Me,query:Ve,inputHovering:Be,currentPlaceholder:De,menuVisibleOnFocus:Pe,isOnComposition:Ae,options:ke,resetInputHeight:D,managePlaceholder:P,showClose:A,selectDisabled:k,iconComponent:K,iconReverse:z,showNewOption:q,emptyText:W,toggleLastOptionHitState:F,resetInputState:H,handleComposition:R,handleMenuEnter:Q,handleFocus:$,focus:G,blur:U,handleBlur:J,handleClearClick:Y,handleClose:Z,handleKeydownEscape:X,toggleMenu:ee,selectOption:ae,getValueKey:oe,navigateOptions:ne,dropMenuVisible:ie,reference:re,input:ue,iOSInput:pe,tooltipRef:de,popperPaneRef:Ue,tags:ve,selectWrapper:he,scrollbar:me,wrapperKls:Fe,tagsKls:Re,tagWrapperKls:_e,inputKls:je,iOSInputKls:Ne,scrollbarKls:Qe,selectTagsStyle:Se,nsSelect:a,tagTextStyle:$e,inputStyle:Ge,handleMouseEnter:ge,handleMouseLeave:ye,showTagList:Ce,collapseTagList:Oe,tagTooltipRef:ce,contentId:s,hoverOption:m}}}),Ne=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Qe=["disabled"],$e={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var Ge=u(je,[["render",function(e,l,t,a,o,n){const s=ae("el-tag"),i=ae("el-tooltip"),r=ae("el-icon"),u=ae("el-input"),p=ae("el-option"),d=ae("el-options"),c=ae("el-scrollbar"),v=ae("el-select-menu"),h=oe("click-outside");return f((y(),C("div",{ref:"selectWrapper",class:T(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...l)=>e.handleMouseEnter&&e.handleMouseEnter(...l)),onMouseleave:l[23]||(l[23]=(...l)=>e.handleMouseLeave&&e.handleMouseLeave(...l)),onClick:l[24]||(l[24]=L(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[ne(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:"".concat(e.nsSelect.namespace.value,"-zoom-in-top"),"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:se((()=>{var t,a;return[S("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=l=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=l=>e.inputHovering=!1)},[e.multiple?(y(),C("div",{key:0,ref:"tags",tabindex:"-1",class:T(e.tagsKls),style:M(e.selectTagsStyle),onClick:l[15]||(l[15]=(...l)=>e.focus&&e.focus(...l))},[e.collapseTags&&e.selected.length?(y(),ie(re,{key:0,onAfterLeave:e.resetInputHeight},{default:se((()=>[S("span",{class:T(e.tagWrapperKls)},[(y(!0),C(ue,null,pe(e.showTagList,(l=>(y(),ie(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:se((()=>[S("span",{class:T(e.nsSelect.e("tags-text")),style:M(e.tagTextStyle)},x(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128)),e.selected.length>e.maxCollapseTags?(y(),ie(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:se((()=>[e.collapseTagsTooltip?(y(),ie(i,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:se((()=>[S("span",{class:T(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3)])),content:se((()=>[S("div",{class:T(e.nsSelect.e("collapse-tags"))},[(y(!0),C(ue,null,pe(e.collapseTagList,(l=>(y(),C("div",{key:e.getValueKey(l),class:T(e.nsSelect.e("collapse-tag"))},[ne(s,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.handleDeleteTooltipTag(t,l)},{default:se((()=>[S("span",{class:T(e.nsSelect.e("tags-text")),style:M({maxWidth:e.inputWidth-75+"px"})},x(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(y(),C("span",{key:1,class:T(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3))])),_:1},8,["size","type"])):de("v-if",!0)],2)])),_:1},8,["onAfterLeave"])):de("v-if",!0),e.collapseTags?de("v-if",!0):(y(),ie(re,{key:1,onAfterLeave:e.resetInputHeight},{default:se((()=>[S("span",{class:T(e.tagWrapperKls),style:M(e.prefixWidth&&e.selected.length?{marginLeft:"".concat(e.prefixWidth,"px")}:"")},[(y(!0),C(ue,null,pe(e.selected,(l=>(y(),ie(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:se((()=>[S("span",{class:T(e.nsSelect.e("tags-text")),style:M({maxWidth:e.inputWidth-75+"px"})},x(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],6)])),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?f((y(),C("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=l=>e.query=l),type:"text",class:T(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:M(e.inputStyle),role:"combobox","aria-activedescendant":(null==(t=e.hoverOption)?void 0:t.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[2]||(l[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[3]||(l[3]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[4]||(l[4]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[5]||(l[5]=ce(L((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[6]||(l[6]=ce(L((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[7]||(l[7]=ce(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[8]||(l[8]=ce(L(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[9]||(l[9]=ce(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[10]||(l[10]=ce((l=>e.visible=!1),["tab"]))],onCompositionstart:l[11]||(l[11]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[14]||(l[14]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,Ne)),[[ve,e.query]]):de("v-if",!0)],6)):de("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(y(),C("input",{key:1,ref:"iOSInput",class:T(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Qe)):de("v-if",!0),ne(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=l=>e.selectedLabel=l),type:"text",placeholder:"function"==typeof e.currentPlaceholder?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:T([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":(null==(a=e.hoverOption)?void 0:a.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=ce(L((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[18]||(l[18]=ce(L((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ce(L(e.selectOption,["stop","prevent"]),["enter"]),ce(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=ce((l=>e.visible=!1),["tab"]))]},he({suffix:se((()=>[e.iconComponent&&!e.showClose?(y(),ie(r,{key:0,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:se((()=>[(y(),ie(me(e.iconComponent)))])),_:1},8,["class"])):de("v-if",!0),e.showClose&&e.clearIcon?(y(),ie(r,{key:1,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:se((()=>[(y(),ie(me(e.clearIcon)))])),_:1},8,["class","onClick"])):de("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:se((()=>[S("div",$e,[O(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]})),content:se((()=>[ne(v,null,{default:se((()=>[f(ne(c,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:T(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:se((()=>[e.showNewOption?(y(),ie(p,{key:0,value:e.query,created:!0},null,8,["value"])):de("v-if",!0),ne(d,{onUpdateOptions:e.onOptionsRendered},{default:se((()=>[O(e.$slots,"default")])),_:3},8,["onUpdateOptions"])])),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[g,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(y(),C(ue,{key:0},[e.$slots.empty?O(e.$slots,"empty",{key:0}):(y(),C("p",{key:1,class:T(e.nsSelect.be("dropdown","empty"))},x(e.emptyText),3))],64)):de("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var Ue=u(p({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const t=d("select"),a=w(!0),n=r(),i=w([]);le(ke,v({...h(e)}));const u=l(Ke);I((()=>{i.value=p(n.subTree)}));const p=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...p(e))})),l},{groupQueryChange:c}=o(u);return s(c,(()=>{a.value=i.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:a,ns:t}}}),[["render",function(e,l,t,a,o,n){return f((y(),C("ul",{class:T(e.ns.be("group","wrap"))},[S("li",{class:T(e.ns.be("group","title"))},x(e.label),3),S("li",null,[S("ul",{class:T(e.ns.b("group"))},[O(e.$slots,"default")],2)])],2)),[[g,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Je=be(Ge,{Option:We,OptionGroup:Ue}),Ye=fe(We);fe(Ue);export{Ye as E,Je as a};
