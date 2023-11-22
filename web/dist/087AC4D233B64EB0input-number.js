/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{G as e,bZ as a,bc as l,bh as n,c_ as t,aI as r,be as u,A as s,R as i,B as o,a as c,r as m,b8 as d,I as b,bb as p,ai as v,c1 as f,a2 as N,Z as y,aW as h,o as I,c as g,a3 as V,y as x,n as S,q as A,d as w,w as E,h as B,ag as F,c$ as k,L as _,e as K,bY as C,aK as M,al as O,l as T,_ as z,ay as D,aA as P,aR as Y,M as j}from"./087AC4D233B64EB0index.js";import{v as G}from"./087AC4D233B64EB0index23.js";const R=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt("".concat(e),10)},validateEvent:{type:Boolean,default:!0}}),W={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[t]:e=>l(e)||r(e),[u]:e=>l(e)||r(e)},Z=["aria-label","onKeydown"],q=["aria-label","onKeydown"],L=s({name:"ElInputNumber"});const $=j(z(s({...L,props:R,emits:W,setup(e,{expose:a,emit:s}){const z=e,{t:j}=i(),R=o("input-number"),W=c(),L=m({currentValue:z.modelValue,userInput:null}),{formItem:$}=d(),H=b((()=>l(z.modelValue)&&z.modelValue<=z.min)),J=b((()=>l(z.modelValue)&&z.modelValue>=z.max)),Q=b((()=>{const e=ne(z.step);return p(z.precision)?Math.max(ne(z.modelValue),e):(z.precision,z.precision)})),U=b((()=>z.controls&&"right"===z.controlsPosition)),X=v(),ee=f(),ae=b((()=>{if(null!==L.userInput)return L.userInput;let e=L.currentValue;if(r(e))return"";if(l(e)){if(Number.isNaN(e))return"";p(z.precision)||(e=e.toFixed(z.precision))}return e})),le=(e,a)=>{if(p(a)&&(a=Q.value),0===a)return Math.round(e);let l=String(e);const n=l.indexOf(".");if(-1===n)return e;if(!l.replace(".","").split("")[n+a])return e;const t=l.length;return"5"===l.charAt(t-1)&&(l="".concat(l.slice(0,Math.max(0,t-1)),"6")),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(r(e))return 0;const a=e.toString(),l=a.indexOf(".");let n=0;return-1!==l&&(n=a.length-l-1),n},te=(e,a=1)=>l(e)?le(e+z.step*a):L.currentValue,re=()=>{if(z.readonly||ee.value||J.value)return;const e=Number(ae.value)||0,a=te(e);ie(a),s(t,L.currentValue)},ue=()=>{if(z.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=te(e,-1);ie(a),s(t,L.currentValue)},se=(e,a)=>{const{max:l,min:n,step:t,precision:i,stepStrictly:o,valueOnClear:c}=z;l<n&&D("InputNumber","min should not be greater than max.");let m=Number(e);if(r(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=P(c)?{min:n,max:l}[c]:c}return o&&(m=le(Math.round(m/t)*t,i)),p(i)||(m=le(m,i)),(m>l||m<n)&&(m=m>l?l:n,a&&s(u,m)),m},ie=(e,a=!0)=>{var l;const t=L.currentValue,r=se(e);a?t!==r&&(L.userInput=null,s(u,r),s(n,r,t),z.validateEvent&&(null==(l=null==$?void 0:$.validate)||l.call($,"change").catch((e=>Y()))),L.currentValue=r):s(u,r)},oe=e=>{L.userInput=e;const a=""===e?null:Number(e);s(t,a),ie(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&ie(a),L.userInput=null},me=e=>{s("focus",e)},de=e=>{var a;s("blur",e),z.validateEvent&&(null==(a=null==$?void 0:$.validate)||a.call($,"blur").catch((e=>Y())))};return N((()=>z.modelValue),(e=>{const a=se(L.userInput),n=se(e,!0);l(a)||a&&a===n||(L.currentValue=n,L.userInput=null)}),{immediate:!0}),y((()=>{var e;const{min:a,max:n,modelValue:t}=z,r=null==(e=W.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(n)?r.setAttribute("aria-valuemax",String(n)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",L.currentValue||0===L.currentValue?String(L.currentValue):""),r.setAttribute("aria-disabled",String(ee.value)),!l(t)&&null!=t){let e=Number(t);Number.isNaN(e)&&(e=null),s(u,e)}})),h((()=>{var e,a;const l=null==(e=W.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow","".concat(null!=(a=L.currentValue)?a:""))})),a({focus:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(I(),g("div",{class:S([x(R).b(),x(R).m(x(X)),x(R).is("disabled",x(ee)),x(R).is("without-controls",!e.controls),x(R).is("controls-right",x(U))]),onDragstart:a[1]||(a[1]=O((()=>{}),["prevent"]))},[e.controls?V((I(),g("span",{key:0,role:"button","aria-label":x(j)("el.inputNumber.decrease"),class:S([x(R).e("decrease"),x(R).is("disabled",x(H))]),onKeydown:A(ue,["enter"])},[w(x(_),null,{default:E((()=>[x(U)?(I(),B(x(F),{key:0})):(I(),B(x(k),{key:1}))])),_:1})],42,Z)),[[x(G),ue]]):K("v-if",!0),e.controls?V((I(),g("span",{key:1,role:"button","aria-label":x(j)("el.inputNumber.increase"),class:S([x(R).e("increase"),x(R).is("disabled",x(J))]),onKeydown:A(re,["enter"])},[w(x(_),null,{default:E((()=>[x(U)?(I(),B(x(C),{key:0})):(I(),B(x(M),{key:1}))])),_:1})],42,q)),[[x(G),re]]):K("v-if",!0),w(x(T),{id:e.id,ref_key:"input",ref:W,type:"number",step:e.step,"model-value":x(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:x(ee),size:x(X),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=O((()=>{}),["prevent"])),onKeydown:[A(O(re,["prevent"]),["up"]),A(O(ue,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{$ as E};
