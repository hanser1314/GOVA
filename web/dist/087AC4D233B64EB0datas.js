/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{a,o as t,c as e,d as o,b as r,w as l,g as u,O as i,P as s,h as n,t as d,k as h,E as c}from"./087AC4D233B64EB0index.js";import{E as y,a as m}from"./087AC4D233B64EB0checkbox.js";/* empty css                      */import{s as f}from"./087AC4D233B64EB0authority2.js";import{_ as p}from"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";/* empty css                     */const v={class:"sticky top-0.5 z-10 bg-white my-4"},B={class:"clear-both pt-4"},A=Object.assign({name:"Datas"},{__name:"datas",props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup(A,{expose:I,emit:g}){const w=A,C=a([]),E=a(!1),j=a=>{a&&a.forEach((a=>{const t={};t.authorityId=a.authorityId,t.authorityName=a.authorityName,C.value.push(t),a.children&&a.children.length&&j(a.children)}))},D=a([]);j(w.authority),w.row.dataAuthorityId&&w.row.dataAuthorityId.forEach((a=>{const t=C.value&&C.value.filter((t=>t.authorityId===a.authorityId))&&C.value.filter((t=>t.authorityId===a.authorityId))[0];D.value.push(t)}));const _=g,b=()=>{D.value=[...C.value],_("changeRow","dataAuthorityId",D.value),E.value=!0},k=()=>{D.value=C.value.filter((a=>a.authorityId===w.row.authorityId)),_("changeRow","dataAuthorityId",D.value),E.value=!0},x=()=>{const a=[];R(w.row,a),D.value=C.value.filter((t=>a.indexOf(t.authorityId)>-1)),_("changeRow","dataAuthorityId",D.value),E.value=!0},R=(a,t)=>{t.push(a.authorityId),a.children&&a.children.forEach((a=>{R(a,t)}))},N=async()=>{0===(await f(w.row)).code&&h({type:"success",message:"资源设置成功"})},O=()=>{_("changeRow","dataAuthorityId",D.value),E.value=!0};return I({enterAndNext:()=>{N()},needConfirm:E}),(a,h)=>{const f=c,A=y,I=m;return t(),e("div",null,[o(p,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),r("div",v,[o(f,{class:"float-left",type:"primary",onClick:b},{default:l((()=>[u("全选")])),_:1}),o(f,{class:"float-left",type:"primary",onClick:k},{default:l((()=>[u("本角色")])),_:1}),o(f,{class:"float-left",type:"primary",onClick:x},{default:l((()=>[u("本角色及子角色")])),_:1}),o(f,{class:"float-right",type:"primary",onClick:N},{default:l((()=>[u("确 定")])),_:1})]),r("div",B,[o(I,{modelValue:D.value,"onUpdate:modelValue":h[0]||(h[0]=a=>D.value=a),onChange:O},{default:l((()=>[(t(!0),e(i,null,s(C.value,((a,e)=>(t(),n(A,{key:e,label:a},{default:l((()=>[u(d(a.authorityName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])])}}});export{A as default};
