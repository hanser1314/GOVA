/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{W as e,u as a,a as l,r as s,o as t,c as o,b as u,d as r,w as d,g as n,k as m,l as p,E as i}from"./087AC4D233B64EB0index.js";import{a as c,E as B}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{f,c as v,u as b}from"./087AC4D233B64EB0student2.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0sysDictionary2.js";const y={class:"gva-form-box"},C=Object.assign({name:"StudentForm"},{__name:"studentForm",setup(C){const V=e(),_=a(),j=l(""),A=l({sno:"",sname:"",ssex:"",sage:0,sdept:""}),D=s({}),E=l();(async()=>{if(V.query.id){const e=await f({ID:V.query.id});0===e.code&&(A.value=e.data.restudent,j.value="update")}else j.value="create"})();const g=async()=>{var e;null==(e=E.value)||e.validate((async e=>{if(!e)return;let a;switch(j.value){case"create":default:a=await v(A.value);break;case"update":a=await b(A.value)}0===a.code&&m({type:"success",message:"创建/更改成功"})}))},x=()=>{_.go(-1)};return(e,a)=>{const l=p,s=c,m=i,f=B;return t(),o("div",null,[u("div",y,[r(f,{model:A.value,ref_key:"elFormRef",ref:E,"label-position":"right",rules:D,"label-width":"80px"},{default:d((()=>[r(s,{label:"sno字段:",prop:"sno"},{default:d((()=>[r(l,{modelValue:A.value.sno,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value.sno=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),r(s,{label:"sname字段:",prop:"sname"},{default:d((()=>[r(l,{modelValue:A.value.sname,"onUpdate:modelValue":a[1]||(a[1]=e=>A.value.sname=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),r(s,{label:"ssex字段:",prop:"ssex"},{default:d((()=>[r(l,{modelValue:A.value.ssex,"onUpdate:modelValue":a[2]||(a[2]=e=>A.value.ssex=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),r(s,{label:"sage字段:",prop:"sage"},{default:d((()=>[r(l,{modelValue:A.value.sage,"onUpdate:modelValue":a[3]||(a[3]=e=>A.value.sage=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),r(s,{label:"sdept字段:",prop:"sdept"},{default:d((()=>[r(l,{modelValue:A.value.sdept,"onUpdate:modelValue":a[4]||(a[4]=e=>A.value.sdept=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),r(s,null,{default:d((()=>[r(m,{type:"primary",onClick:g},{default:d((()=>[n("保存")])),_:1}),r(m,{type:"primary",onClick:x},{default:d((()=>[n("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{C as default};
