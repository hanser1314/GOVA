/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{W as e,u as a,a as l,r as o,o as t,c as r,b as s,d as u,w as d,g as n,k as i,l as c,E as m}from"./087AC4D233B64EB0index.js";import{a as p,E as B}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{f,c as v,u as b}from"./087AC4D233B64EB0sct2.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0sysDictionary2.js";const y={class:"gva-form-box"},C=Object.assign({name:"SctForm"},{__name:"sctForm",setup(C){const j=e(),A=a(),D=l(""),E=l({sno:"",cno:"",tno:"",grade:0}),_=o({}),V=l();(async()=>{if(j.query.id){const e=await f({ID:j.query.id});0===e.code&&(E.value=e.data.resct,D.value="update")}else D.value="create"})();const g=async()=>{var e;null==(e=V.value)||e.validate((async e=>{if(!e)return;let a;switch(D.value){case"create":default:a=await v(E.value);break;case"update":a=await b(E.value)}0===a.code&&i({type:"success",message:"创建/更改成功"})}))},h=()=>{A.go(-1)};return(e,a)=>{const l=c,o=p,i=m,f=B;return t(),r("div",null,[s("div",y,[u(f,{model:E.value,ref_key:"elFormRef",ref:V,"label-position":"right",rules:_,"label-width":"80px"},{default:d((()=>[u(o,{label:"学号:",prop:"sno"},{default:d((()=>[u(l,{modelValue:E.value.sno,"onUpdate:modelValue":a[0]||(a[0]=e=>E.value.sno=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,{label:"课程号:",prop:"cno"},{default:d((()=>[u(l,{modelValue:E.value.cno,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value.cno=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,{label:"教工号:",prop:"tno"},{default:d((()=>[u(l,{modelValue:E.value.tno,"onUpdate:modelValue":a[2]||(a[2]=e=>E.value.tno=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,{label:"成绩:",prop:"grade"},{default:d((()=>[u(l,{modelValue:E.value.grade,"onUpdate:modelValue":a[3]||(a[3]=e=>E.value.grade=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,null,{default:d((()=>[u(i,{type:"primary",onClick:g},{default:d((()=>[n("保存")])),_:1}),u(i,{type:"primary",onClick:h},{default:d((()=>[n("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{C as default};