/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{U as a,a as t,a2 as e,o as s,c as o,b as r,d as i,w as l,g as n,k as p,l as c,E as d}from"./087AC4D233B64EB0index.js";import{E as u}from"./087AC4D233B64EB0scrollbar.js";import{E as h}from"./087AC4D233B64EB0tree.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                      *//* empty css                     */import{e as m}from"./087AC4D233B64EB0api2.js";import"./087AC4D233B64EB0index26.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";const f={class:"sticky top-0.5 z-10 bg-white"},y={class:"tree-content"},B=Object.assign({name:"Apis"},{__name:"apis",props:{row:{default:function(){return{}},type:Object}},setup(B,{expose:v}){const E=B,C=t({children:"children",label:"description"}),b=t(""),j=t([]),A=t([]),k=t("");(async()=>{const t=(await m()).data.apis;j.value=g(t);const e=await(s={authorityId:E.row.authorityId},a({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:s}));var s;k.value=E.row.authorityId,A.value=[],e.data.paths&&e.data.paths.forEach((a=>{A.value.push("p:"+a.path+"m:"+a.method)}))})();const D=t(!1),w=()=>{D.value=!0},g=a=>{const t={};a&&a.forEach((a=>{a.onlyId="p:"+a.path+"m:"+a.method,Object.prototype.hasOwnProperty.call(t,a.apiGroup)?t[a.apiGroup].push(a):Object.assign(t,{[a.apiGroup]:[a]})}));const e=[];for(const s in t){const a={ID:s,description:s+"组",children:t[s]};e.push(a)}return e},I=t(null),x=async()=>{const t=I.value.getCheckedNodes(!0);var e=[];t&&t.forEach((a=>{var t={path:a.path,method:a.method};e.push(t)}));var s;0===(await(s={authorityId:k.value,casbinInfos:e},a({url:"/casbin/updateCasbin",method:"post",data:s}))).code&&p({type:"success",message:"api设置成功"})};v({needConfirm:D,enterAndNext:()=>{x()}});const O=(a,t)=>!a||-1!==t.description.indexOf(a);return e(b,(a=>{I.value.filter(a)})),(a,t)=>{const e=c,p=d,m=h,B=u;return s(),o("div",null,[r("div",f,[i(e,{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=a=>b.value=a),class:"w-3/5",placeholder:"筛选"},null,8,["modelValue"]),i(p,{class:"float-right",type:"primary",onClick:x},{default:l((()=>[n("确 定")])),_:1})]),r("div",y,[i(B,null,{default:l((()=>[i(m,{ref_key:"apiTree",ref:I,data:j.value,"default-checked-keys":A.value,props:C.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"","filter-node-method":O,onCheck:w},null,8,["data","default-checked-keys","props"])])),_:1})])])}}});export{B as default};
