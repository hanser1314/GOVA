/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{G as e,a5 as a,aC as s,be as l,bh as t,bc as o,a as i,a2 as n,C as c,B as d,I as r,A as u,o as m,c as p,F as v,n as b,y as C,_ as f,a7 as h,b as y,g as A,t as K,d as g,w as k,az as B,L as x,q as N,al as I,a3 as E,a4 as w,M as _,N as j}from"./087AC4D233B64EB0index.js";import{c as D}from"./087AC4D233B64EB0castArray.js";import{_ as F}from"./087AC4D233B64EB0index26.js";import{g as H}from"./087AC4D233B64EB0rand.js";const S=e=>typeof o(e),V=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),$={[l]:S,[t]:S},W=Symbol("collapseContextKey"),q=u({name:"ElCollapse"});var z=f(u({...q,props:V,emits:$,setup(e,{expose:a,emit:s}){const o=e,{activeNames:u,setActiveNames:f}=((e,a)=>{const s=i(D(e.modelValue)),o=o=>{s.value=o;const i=e.accordion?s.value[0]:s.value;a(l,i),a(t,i)};return n((()=>e.modelValue),(()=>s.value=D(e.modelValue)),{deep:!0}),c(W,{activeNames:s,handleItemClick:a=>{if(e.accordion)o([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),o(e)}}}),{activeNames:s,setActiveNames:o}})(o,s),{rootKls:h}=(()=>{const e=d("collapse");return{rootKls:r((()=>e.b()))}})();return a({activeNames:u,setActiveNames:f}),(e,a)=>(m(),p("div",{class:b(C(h))},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const G=e({title:{type:String,default:""},name:{type:a([String,Number]),default:()=>H()},disabled:Boolean}),L=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],M=["id","aria-hidden","aria-labelledby"],O=u({name:"ElCollapseItem"});var T=f(u({...O,props:G,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:o,handleFocus:n,handleHeaderClick:c,handleEnterClick:u}=(e=>{const a=h(W),s=i(!1),l=i(!1),t=i(H()),o=r((()=>null==a?void 0:a.activeNames.value.includes(e.name)));return{focusing:s,id:t,isActive:o,handleFocus:()=>{setTimeout((()=>{l.value?l.value=!1:s.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(e.name),s.value=!1,l.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(e.name)}}})(s),{arrowKls:f,headKls:_,rootKls:j,itemWrapperKls:D,itemContentKls:S,scopedContentId:V,scopedHeadId:$}=((e,{focusing:a,isActive:s,id:l})=>{const t=d("collapse"),o=r((()=>[t.b("item"),t.is("active",C(s)),t.is("disabled",e.disabled)])),i=r((()=>[t.be("item","header"),t.is("active",C(s)),{focusing:C(a)&&!e.disabled}]));return{arrowKls:r((()=>[t.be("item","arrow"),t.is("active",C(s))])),headKls:i,rootKls:o,itemWrapperKls:r((()=>t.be("item","wrap"))),itemContentKls:r((()=>t.be("item","content"))),scopedContentId:r((()=>t.b("content-".concat(C(l))))),scopedHeadId:r((()=>t.b("head-".concat(C(l)))))}})(s,{focusing:l,isActive:o,id:t});return a({isActive:o}),(e,a)=>(m(),p("div",{class:b(C(j))},[y("button",{id:C($),class:b(C(_)),"aria-expanded":C(o),"aria-controls":C(V),"aria-describedby":C(V),tabindex:e.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...e)=>C(c)&&C(c)(...e)),onKeydown:a[1]||(a[1]=N(I(((...e)=>C(u)&&C(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>C(n)&&C(n)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[v(e.$slots,"title",{},(()=>[A(K(e.title),1)])),g(C(x),{class:b(C(f))},{default:k((()=>[g(C(B))])),_:1},8,["class"])],42,L),g(C(F),null,{default:k((()=>[E(y("div",{id:C(V),role:"region",class:b(C(D)),"aria-hidden":!C(o),"aria-labelledby":C($)},[y("div",{class:b(C(S))},[v(e.$slots,"default")],2)],10,M),[[w,C(o)]])])),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const J=_(z,{CollapseItem:T}),P=j(T);export{P as E,J as a};
