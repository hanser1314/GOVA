/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{G as e,H as o,a5 as l,be as a,aQ as n,bx as t,Q as s,a as u,cl as c,cm as r,I as d,S as i,cn as p,a2 as f,$ as y,Z as v,a8 as m,aB as B,b4 as C}from"./087AC4D233B64EB0index.js";import{i as b}from"./087AC4D233B64EB0isUndefined.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},S=e({...g,appendToBody:Boolean,beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),x={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},A=(e,o)=>{var l;const n=m().emit,{nextZIndex:g}=t();let D="";const S=s(),x=s(),A=u(!1),F=u(!1),I=u(!1),h=u(null!=(l=e.zIndex)?l:g());let O,k;const w=c("namespace",r),E=d((()=>{const o={},l="--".concat(w.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=i(e.width))),o})),z=d((()=>e.alignCenter?{display:"flex"}:{}));function L(){null==k||k(),null==O||O(),e.openDelay&&e.openDelay>0?({stop:O}=B((()=>P()),e.openDelay)):P()}function N(){null==O||O(),null==k||k(),e.closeDelay&&e.closeDelay>0?({stop:k}=B((()=>V()),e.closeDelay)):V()}function M(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,A.value=!1)})):N()}function P(){C&&(A.value=!0)}function V(){A.value=!1}return e.lockScroll&&p(A),f((()=>e.modelValue),(l=>{l?(F.value=!1,L(),I.value=!0,h.value=b(e.zIndex)?g():h.value++,y((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):A.value&&N()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),v((()=>{e.modelValue&&(A.value=!0,I.value=!0,L())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){n("close")},handleClose:M,onModalClick:function(){e.closeOnClickModal&&M()},close:N,doClose:V,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&M()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:S,bodyId:x,closed:F,style:E,overlayDialogStyle:z,rendered:I,visible:A,zIndex:h}};export{D as a,S as b,x as c,g as d,A as u};