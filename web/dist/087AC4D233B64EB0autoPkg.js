/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{a as e,o as a,c as l,d as t,b as o,w as s,g as i,y as r,cN as p,k as d,V as m,E as u,L as c,l as n}from"./087AC4D233B64EB0index.js";import{E as B}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as f,E as g}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as b,a as C}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       *//* empty css                      */import"./087AC4D233B64EB0scrollbar.js";import"./087AC4D233B64EB0tag.js";/* empty css                     *//* empty css                      */import{i as v,d as E,j}from"./087AC4D233B64EB0autoCode.js";import{_ as A}from"./087AC4D233B64EB0warningBar.js";import{t as k}from"./087AC4D233B64EB0doc.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0isEqual.js";const D={class:"gva-table-box"},w={class:"gva-btn-list gap-3 flex items-center"},y={class:"dialog-footer"},_=Object.assign({name:"AutoPkg"},{__name:"autoPkg",setup(_){const V=e({packageName:"",label:"",desc:""}),h=e({packageName:[{required:!0,message:"请输入包名",trigger:"blur"},{validator:(e,a,l)=>{/^\d+$/.test(a[0])?l(new Error("不能够以数字开头")):l()},trigger:"blur"}]}),x=e(!1),N=()=>{x.value=!1,V.value={packageName:"",label:"",desc:""}},U=e(null),T=async()=>{U.value.validate((async e=>{if(e){0===(await v(V.value)).code&&d({type:"success",message:"添加成功",showClose:!0}),q(),N()}}))},P=e([]),q=async()=>{const e=await E();0===e.code&&(P.value=e.data.pkgs)};return q(),(e,v)=>{const E=u,_=c,I=b,O=C,F=n,L=f,$=g,z=B;return a(),l("div",null,[t(A,{href:"https://www.bilibili.com/video/BV1kv4y1g7nT?p=3",title:"此功能为开发环境使用，不建议发布到生产，具体使用效果请看视频https://www.bilibili.com/video/BV1kv4y1g7nT?p=3"}),o("div",D,[o("div",w,[t(E,{type:"primary",icon:"plus",onClick:v[0]||(v[0]=e=>{x.value=!0})},{default:s((()=>[i("新增")])),_:1}),t(_,{class:"cursor-pointer",onClick:v[1]||(v[1]=e=>r(k)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=3&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:s((()=>[t(r(p))])),_:1})]),t(O,{data:P.value},{default:s((()=>[t(I,{align:"left",label:"id",width:"60",prop:"ID"}),t(I,{align:"left",label:"包名",width:"150",prop:"packageName"}),t(I,{align:"left",label:"展示名",width:"150",prop:"label"}),t(I,{align:"left",label:"描述","min-width":"150",prop:"desc"}),t(I,{align:"left",label:"操作",width:"200"},{default:s((e=>[t(E,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{m.confirm("此操作仅删除数据库中的pkg存储，后端相应目录结构请自行删除与数据库保持一致！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await j(e)).code&&(d({type:"success",message:"删除成功!"}),q())}))})(e.row)},{default:s((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),t(z,{modelValue:x.value,"onUpdate:modelValue":v[5]||(v[5]=e=>x.value=e),"before-close":N,title:"创建Package"},{footer:s((()=>[o("div",y,[t(E,{onClick:N},{default:s((()=>[i("取 消")])),_:1}),t(E,{type:"primary",onClick:T},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[t(A,{title:"新增Pkg用于自动化代码使用"}),t($,{ref_key:"pkgForm",ref:U,model:V.value,rules:h.value,"label-width":"80px"},{default:s((()=>[t(L,{label:"包名",prop:"packageName"},{default:s((()=>[t(F,{modelValue:V.value.packageName,"onUpdate:modelValue":v[2]||(v[2]=e=>V.value.packageName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(L,{label:"展示名",prop:"label"},{default:s((()=>[t(F,{modelValue:V.value.label,"onUpdate:modelValue":v[3]||(v[3]=e=>V.value.label=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(L,{label:"描述",prop:"desc"},{default:s((()=>[t(F,{modelValue:V.value.desc,"onUpdate:modelValue":v[4]||(v[4]=e=>V.value.desc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{_ as default};
