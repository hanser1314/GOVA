/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function r(r){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?e(Object(l),!0).forEach((function(e){t(r,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}))}return r}function t(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,r||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0overlay-legacy.js"],(function(e,t){"use strict";var a,l,o,n,i,d,s,f,c,u,p,b,w,v,m,y,g,h,x,_,k,C,O,S,j,E,z,R,A,P,B,L,D,I;return{setters:[function(e){a=e.G,l=e._,o=e.A,n=e.cj,i=e.by,d=e.L,s=e.bC,f=e.ax,c=e.I,u=e.a,p=e.B,b=e.R,w=e.S,v=e.x,m=e.o,y=e.h,g=e.d,h=e.w,x=e.a3,_=e.b,k=e.ak,C=e.al,O=e.n,S=e.c,j=e.F,E=e.t,z=e.e,R=e.a4,A=e.T,P=e.bz,B=e.M},function(e){L=e.b,D=e.c,I=e.u}],execute:function(){var t=document.createElement("style");t.textContent=".el-drawer{--el-drawer-bg-color: var(--el-dialog-bg-color, var(--el-bg-color));--el-drawer-padding-primary: var(--el-dialog-padding-primary, 20px);position:absolute;box-sizing:border-box;background-color:var(--el-drawer-bg-color);display:flex;flex-direction:column;box-shadow:var(--el-box-shadow-dark);overflow:hidden;transition:all var(--el-transition-duration)}.el-drawer .rtl,.el-drawer .ltr,.el-drawer .ttb,.el-drawer .btt{transform:translate(0)}.el-drawer__sr-focus:focus{outline:none!important}.el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:var(--el-drawer-padding-primary);padding-bottom:0}.el-drawer__header>:first-child{flex:1}.el-drawer__title{margin:0;flex:1;line-height:inherit;font-size:1rem}.el-drawer__footer{padding:var(--el-drawer-padding-primary);padding-top:10px;text-align:right}.el-drawer__close-btn{display:inline-flex;border:none;cursor:pointer;font-size:var(--el-font-size-extra-large);color:inherit;background-color:transparent;outline:none}.el-drawer__close-btn:focus i,.el-drawer__close-btn:hover i{color:var(--el-color-primary)}.el-drawer__body{flex:1;padding:var(--el-drawer-padding-primary);overflow:auto}.el-drawer__body>*{box-sizing:border-box}.el-drawer.ltr,.el-drawer.rtl{height:100%;top:0;bottom:0}.el-drawer.ttb,.el-drawer.btt{width:100%;left:0;right:0}.el-drawer.ltr{left:0}.el-drawer.rtl{right:0}.el-drawer.ttb{top:0}.el-drawer.btt{bottom:0}.el-drawer-fade-enter-active,.el-drawer-fade-leave-active{transition:all var(--el-transition-duration)}.el-drawer-fade-enter-from,.el-drawer-fade-enter-active,.el-drawer-fade-enter-to,.el-drawer-fade-leave-from,.el-drawer-fade-leave-active,.el-drawer-fade-leave-to{overflow:hidden!important}.el-drawer-fade-enter-from,.el-drawer-fade-leave-to{opacity:0}.el-drawer-fade-enter-to,.el-drawer-fade-leave-from{opacity:1}.el-drawer-fade-enter-from .rtl,.el-drawer-fade-leave-to .rtl{transform:translate(100%)}.el-drawer-fade-enter-from .ltr,.el-drawer-fade-leave-to .ltr{transform:translate(-100%)}.el-drawer-fade-enter-from .ttb,.el-drawer-fade-leave-to .ttb{transform:translateY(-100%)}.el-drawer-fade-enter-from .btt,.el-drawer-fade-leave-to .btt{transform:translateY(100%)}\n",document.head.appendChild(t);var $=a(r(r({},L),{},{direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}})),T=o({name:"ElDrawer",components:{ElOverlay:n,ElFocusTrap:i,ElIcon:d,Close:s},inheritAttrs:!1,props:$,emits:D,setup:function(e,t){var a=t.slots;f({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},c((function(){return!!a.title}))),f({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},c((function(){return!!e.customClass})));var l=u(),o=u(),n=p("drawer"),i=b().t,d=c((function(){return"rtl"===e.direction||"ltr"===e.direction})),s=c((function(){return w(e.size)}));return r(r({},I(e,l)),{},{drawerRef:l,focusStartRef:o,isHorizontal:d,drawerSize:s,ns:n,t:i})}}),H=["aria-label","aria-labelledby","aria-describedby"],q=["id","aria-level"],F=["aria-label"],M=["id"];var N=l(T,[["render",function(e,r,t,a,l,o){var n=v("close"),i=v("el-icon"),d=v("el-focus-trap"),s=v("el-overlay");return m(),y(P,{to:"body",disabled:!e.appendToBody},[g(A,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:h((function(){return[x(g(s,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:h((function(){return[g(d,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h((function(){return[_("div",k({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:r[1]||(r[1]=C((function(){}),["stop"]))}),[_("span",{ref:"focusStartRef",class:O(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(m(),S("header",{key:0,class:O(e.ns.e("header"))},[e.$slots.title?j(e.$slots,"title",{key:1},(function(){return[z(" DEPRECATED SLOT ")]})):j(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(function(){return[e.$slots.title?z("v-if",!0):(m(),S("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:O(e.ns.e("title"))},E(e.title),11,q))]})),e.showClose?(m(),S("button",{key:2,"aria-label":e.t("el.drawer.close"),class:O(e.ns.e("close-btn")),type:"button",onClick:r[0]||(r[0]=function(){return e.handleClose&&e.handleClose.apply(e,arguments)})},[g(i,{class:O(e.ns.e("close"))},{default:h((function(){return[g(n)]})),_:1},8,["class"])],10,F)):z("v-if",!0)],2)):z("v-if",!0),e.rendered?(m(),S("div",{key:1,id:e.bodyId,class:O(e.ns.e("body"))},[j(e.$slots,"default")],10,M)):z("v-if",!0),e.$slots.footer?(m(),S("div",{key:2,class:O(e.ns.e("footer"))},[j(e.$slots,"footer")],2)):z("v-if",!0)],16,H)]})),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]})),_:3},8,["mask","overlay-class","z-index","onClick"]),[[R,e.visible]])]})),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);e("E",B(N))}}}))}();