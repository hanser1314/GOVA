/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{W as e,u as a,m as o,v as t,a as r,a2 as s,a0 as l,ao as n,o as i,c,d as u,w as d,T as m,O as p,P as v,y as f,h as B,e as h,J as x}from"./087AC4D233B64EB0index.js";import{E}from"./087AC4D233B64EB0scrollbar.js";/* empty css                       *//* empty css                      */import g from"./087AC4D233B64EB0index8.js";import{E as j}from"./087AC4D233B64EB0index25.js";import"./087AC4D233B64EB0menuItem.js";/* empty css                     */import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0asyncSubmenu.js";import"./087AC4D233B64EB0index26.js";const k=Object.assign({name:"Aside"},{__name:"index",setup(k){const y=e(),A=a(),b=o(),C=t(),D=r({}),T=()=>{switch(b.sideMode){case"#fff":D.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":D.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};T();const _=r("");s((()=>y),(()=>{_.value=y.meta.activeName||y.name}),{deep:!0}),s((()=>b.sideMode),(()=>{T()}));const M=r(!1);(()=>{_.value=y.meta.activeName||y.name;document.body.clientWidth<1e3&&(M.value=!M.value),n.on("collapse",(e=>{M.value=e}))})(),l((()=>{n.off("collapse")}));const w=(e,a,o,t)=>{var r,s;const l={},n={};(null==(r=C.routeMap[e])?void 0:r.parameters)&&(null==(s=C.routeMap[e])||s.parameters.forEach((e=>{"query"===e.type?l[e.key]=e.value:n[e.key]=e.value}))),e!==y.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):A.push({name:e,query:l,params:n}))};return(e,a)=>{const o=j,t=E;return i(),c("div",{style:x({background:f(b).sideMode})},[u(t,{style:{height:"calc(100vh - 60px)"}},{default:d((()=>[u(m,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:d((()=>[u(o,{collapse:M.value,"collapse-transition":!1,"default-active":_.value,"background-color":D.value.background,"active-text-color":D.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:w},{default:d((()=>[(i(!0),c(p,null,v(f(C).asyncRouters[0].children,(e=>(i(),c(p,null,[e.hidden?h("",!0):(i(),B(g,{key:e.name,"is-collapse":M.value,"router-info":e,theme:D.value},null,8,["is-collapse","router-info","theme"]))],64)))),256))])),_:1},8,["collapse","default-active","background-color","active-text-color"])])),_:1})])),_:1})],4)}}});export{k as default};