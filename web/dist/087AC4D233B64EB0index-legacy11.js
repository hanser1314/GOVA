/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,u,o,c=[],i=!0,a=!1;try{if(u=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;i=!1}else for(;!(i=(t=u.call(r)).done)&&(c.push(t.value),c.length!==n);i=!0);}catch(e){a=!0,l=e}finally{try{if(!i&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(a)throw l}}return c}}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var l=0,u=function(){};return{s:u,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw o}}}}function r(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0index-legacy.js"],(function(r,t){"use strict";var l,u,o,c,i,a;return{setters:[function(e){l=e._},function(e){u=e.Z,o=e.a0,c=e.a,i=e.o,a=e.c}],execute:function(){var t=document.createElement("style");t.textContent=".screenfull-svg[data-v-7e2ba8c6]{width:16px;height:16px;cursor:pointer;vertical-align:middle;margin-right:32px;fill:rgba(0,0,0,.45)}\n",document.head.appendChild(t);var f=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=function(){if("undefined"==typeof document)return!1;for(var r=f[0],t={},l=0,u=f;l<u.length;l++){var o=u[l];if((null==o?void 0:o[1])in document){var c,i=n(o.entries());try{for(i.s();!(c=i.n()).done;){var a=e(c.value,2),s=a[0],d=a[1];t[r[s]]=d}}catch(m){i.e(m)}finally{i.f()}return t}}return!1}(),d={change:s.fullscreenchange,error:s.fullscreenerror},m={request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(r,t){var l=function e(){m.off("change",e),r()};m.on("change",l);var u=e[s.requestFullscreen](n);u instanceof Promise&&u.then(l).catch(t)}))},exit:function(){return new Promise((function(e,n){if(m.isFullscreen){var r=function n(){m.off("change",n),e()};m.on("change",r);var t=document[s.exitFullscreen]();t instanceof Promise&&t.then(r).catch(n)}else e()}))},toggle:function(e,n){return m.isFullscreen?m.exit():m.request(e,n)},onchange:function(e){m.on("change",e)},onerror:function(e){m.on("error",e)},on:function(e,n){var r=d[e];r&&document.addEventListener(r,n,!1)},off:function(e,n){var r=d[e];r&&document.removeEventListener(r,n,!1)},raw:s};Object.defineProperties(m,{isFullscreen:{get:function(){return Boolean(document[s.fullscreenElement])}},element:{enumerable:!0,get:function(){var e;return null!==(e=document[s.fullscreenElement])&&void 0!==e?e:void 0}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[s.fullscreenEnabled])}}}),s||(m={isEnabled:!1});var v=m,g={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},h={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"};r("default",l(Object.assign({name:"Screenfull"},{__name:"index",props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup:function(e){u((function(){v.isEnabled&&v.on("change",t)})),o((function(){v.off("change")}));var n=function(){v.isEnabled&&v.toggle()},r=c(!0),t=function(){r.value=!v.isFullscreen};return function(e,t){return i(),a("div",{onClick:n},[r.value?(i(),a("div",g)):(i(),a("div",h))])}}}),[["__scopeId","data-v-7e2ba8c6"]]))}}}))}();
