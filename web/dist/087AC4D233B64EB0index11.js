/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{_ as e}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{Z as n,a0 as l,a as r,o as c,c as t}from"./087AC4D233B64EB0index.js";const s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=(()=>{if("undefined"==typeof document)return!1;const e=s[0],n={};for(const l of s){if((null==l?void 0:l[1])in document){for(const[r,c]of l.entries())n[e[r]]=c;return n}}return!1})(),u={change:o.fullscreenchange,error:o.fullscreenerror};let a={request:(e=document.documentElement,n)=>new Promise(((l,r)=>{const c=()=>{a.off("change",c),l()};a.on("change",c);const t=e[o.requestFullscreen](n);t instanceof Promise&&t.then(c).catch(r)})),exit:()=>new Promise(((e,n)=>{if(!a.isFullscreen)return void e();const l=()=>{a.off("change",l),e()};a.on("change",l);const r=document[o.exitFullscreen]();r instanceof Promise&&r.then(l).catch(n)})),toggle:(e,n)=>a.isFullscreen?a.exit():a.request(e,n),onchange(e){a.on("change",e)},onerror(e){a.on("error",e)},on(e,n){const l=u[e];l&&document.addEventListener(l,n,!1)},off(e,n){const l=u[e];l&&document.removeEventListener(l,n,!1)},raw:o};Object.defineProperties(a,{isFullscreen:{get:()=>Boolean(document[o.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[o.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[o.fullscreenEnabled])}}),o||(a={isEnabled:!1});const i=a,f={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},m={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},d=e(Object.assign({name:"Screenfull"},{__name:"index",props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(e){n((()=>{i.isEnabled&&i.on("change",u)})),l((()=>{i.off("change")}));const s=()=>{i.isEnabled&&i.toggle()},o=r(!0),u=()=>{o.value=!i.isFullscreen};return(e,n)=>(c(),t("div",{onClick:s},[o.value?(c(),t("div",f)):(c(),t("div",m))]))}}),[["__scopeId","data-v-7e2ba8c6"]]);export{d as default};
