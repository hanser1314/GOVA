/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{a,X as e,u as s,x as t,o as c,c as l,b as i,t as o,y as r,d,w as n,g as m,O as u,P as v,h as g,J as p,z as b,L as f,p as h,i as w}from"./087AC4D233B64EB0index.js";import{E as _,a as x}from"./087AC4D233B64EB0col.js";/* empty css                     */import B from"./087AC4D233B64EB0echartsLine.js";import y from"./087AC4D233B64EB0dashboardTable.js";import{_ as C}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0github.js";import"./087AC4D233B64EB0date.js";const E=""+new URL("087AC4D233B64EB0dashboard.png",import.meta.url).href,k=a("今日晴，0℃ - 10℃，天气寒冷，注意添加衣物。"),D="8e8baa8a7317586c29ec694895de6e0a",j=async()=>{const a=await e.get("https://restapi.amap.com/v3/ip?key="+D);a.data.adcode&&A(a.data.adcode)},A=async a=>{const s=await e.get("https://restapi.amap.com/v3/weather/weatherInfo?key="+D+"&extensions=base&city="+a);if("1"===s.data.status){const a=s.data.lives[0];k.value=a.city+" 天气："+a.weather+" 温度："+a.temperature+"摄氏度 风向："+a.winddirection+" 风力："+a.windpower+"级 空气湿度："+a.humidity}},q=a=>(h("data-v-a18910a7"),a=a(),w(),a),F={class:"page"},L={class:"gva-card-box"},R={class:"gva-card gva-top-card"},H={class:"gva-top-card-left"},I=q((()=>i("div",{class:"gva-top-card-left-title"},"早安，管理员，请开始一天的工作吧",-1))),O={class:"gva-top-card-left-dot"},V={class:"flex items-center"},z={class:"flex items-center"},J={class:"flex items-center"},P=q((()=>i("div",null,[i("div",{class:"gva-top-card-left-item"},[m(" 使用教学： "),i("a",{style:{color:"#409EFF"},target:"view_window",href:"https://www.bilibili.com/video/BV1Rg411u7xH/"},"https://www.bilibili.com/video/BV1Rg411u7xH")]),i("div",{class:"gva-top-card-left-item"},[m(" 插件仓库： "),i("a",{style:{color:"#409EFF"},target:"view_window",href:"https://plugin.gin-vue-admin.com/#/layout/home"},"https://plugin.gin-vue-admin.com")])],-1))),T=q((()=>i("img",{src:E,class:"gva-top-card-right",alt:""},null,-1))),U={class:"gva-card-box"},X={class:"gva-card quick-entrance"},G=q((()=>i("div",{class:"gva-card-title"},"快捷入口",-1))),K={class:"quick-entrance-item"},M={class:"gva-card-box"},N={class:"gva-card"},Q=q((()=>i("div",{class:"gva-card-title"},"数据统计",-1))),S={class:"p-4"},W=C(Object.assign({name:"Dashboard"},{__name:"index",setup(e){const h=(j(),k),w=a([{label:"用户管理",icon:"monitor",name:"user",color:"#ff9c6e",bg:"rgba(255, 156, 110,.3)"},{label:"角色管理",icon:"setting",name:"authority",color:"#69c0ff",bg:"rgba(105, 192, 255,.3)"},{label:"菜单管理",icon:"menu",name:"menu",color:"#b37feb",bg:"rgba(179, 127, 235,.3)"},{label:"代码生成器",icon:"cpu",name:"autoCode",color:"#ffd666",bg:"rgba(255, 214, 102,.3)"},{label:"表单生成器",icon:"document-checked",name:"formCreate",color:"#ff85c0",bg:"rgba(255, 133, 192,.3)"},{label:"关于我们",icon:"user",name:"about",color:"#5cdbd3",bg:"rgba(92, 219, 211,.3)"}]),C=s();return(a,e)=>{const s=t("sort"),E=f,k=_,D=t("avatar"),j=t("comment"),A=x;return c(),l("div",F,[i("div",L,[i("div",R,[i("div",H,[I,i("div",O,o(r(h)),1),d(A,{class:"my-8 w-[500px]"},{default:n((()=>[d(k,{span:8,xs:24,sm:8},{default:n((()=>[i("div",V,[d(E,{class:"dashboard-icon"},{default:n((()=>[d(s)])),_:1}),m(" 今日流量 (1231231) ")])])),_:1}),d(k,{span:8,xs:24,sm:8},{default:n((()=>[i("div",z,[d(E,{class:"dashboard-icon"},{default:n((()=>[d(D)])),_:1}),m(" 总用户数 (24001) ")])])),_:1}),d(k,{span:8,xs:24,sm:8},{default:n((()=>[i("div",J,[d(E,{class:"dashboard-icon"},{default:n((()=>[d(j)])),_:1}),m(" 好评率 (99%) ")])])),_:1})])),_:1}),P]),T])]),i("div",U,[i("div",X,[G,d(A,{gutter:20},{default:n((()=>[(c(!0),l(u,null,v(w.value,((a,e)=>(c(),g(k,{key:e,span:4,xs:8,class:"quick-entrance-items",onClick:e=>{return s=a.name,void C.push({name:s});var s}},{default:n((()=>[i("div",K,[i("div",{class:"quick-entrance-item-icon",style:p({backgroundColor:a.bg})},[d(E,null,{default:n((()=>[(c(),g(b(a.icon),{style:p({color:a.color})},null,8,["style"]))])),_:2},1024)],4),i("p",null,o(a.label),1)])])),_:2},1032,["onClick"])))),128))])),_:1})])]),i("div",M,[i("div",N,[Q,i("div",S,[d(A,{gutter:20},{default:n((()=>[d(k,{xs:24,sm:18},{default:n((()=>[d(B)])),_:1}),d(k,{xs:24,sm:6},{default:n((()=>[d(y)])),_:1})])),_:1})])])])])}}}),[["__scopeId","data-v-a18910a7"]]);export{W as default};
