/*! 
 Build based on gin-vue-admin 
 Time : 1700123686000 */
import{A as e,B as a,C as t,D as s,F as l,G as i,H as o,I as r,o as n,c as m,b as u,n as d,y as p,J as f,h as c,w as g,z as h,L as v,e as _,t as y,_ as b,M as B,N as E,a as k,d as C,g as A,O as D,P as j,E as w,p as x,i as T}from"./087AC4D233B64EB0index.js";/* empty css                      */import{E as M}from"./087AC4D233B64EB0card.js";import{E as S,a as I}from"./087AC4D233B64EB0col.js";import{E as $}from"./087AC4D233B64EB0divider.js";import{_ as z}from"./087AC4D233B64EB0logo.js";import{C as L,M as F}from"./087AC4D233B64EB0github.js";import{f as O}from"./087AC4D233B64EB0date.js";import{_ as G}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";const H=e({name:"ElTimeline",setup(e,{slots:i}){const o=a("timeline");return t("timeline",i),()=>s("ul",{class:[o.b()]},[l(i,"default")])}}),J=i({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:o},hollow:{type:Boolean,default:!1}}),N=e({name:"ElTimelineItem"});var P=b(e({...N,props:J,setup(e){const t=e,s=a("timeline-item"),i=r((()=>[s.e("node"),s.em("node",t.size||""),s.em("node",t.type||""),s.is("hollow",t.hollow)]));return(e,a)=>(n(),m("li",{class:d([p(s).b(),{[p(s).e("center")]:e.center}])},[u("div",{class:d(p(s).e("tail"))},null,2),e.$slots.dot?_("v-if",!0):(n(),m("div",{key:0,class:d(p(i)),style:f({backgroundColor:e.color})},[e.icon?(n(),c(p(v),{key:0,class:d(p(s).e("icon"))},{default:g((()=>[(n(),c(h(e.icon)))])),_:1},8,["class"])):_("v-if",!0)],6)),e.$slots.dot?(n(),m("div",{key:1,class:d(p(s).e("dot"))},[l(e.$slots,"dot")],2)):_("v-if",!0),u("div",{class:d(p(s).e("wrapper"))},[e.hideTimestamp||"top"!==e.placement?_("v-if",!0):(n(),m("div",{key:0,class:d([p(s).e("timestamp"),p(s).is("top")])},y(e.timestamp),3)),u("div",{class:d(p(s).e("content"))},[l(e.$slots,"default")],2),e.hideTimestamp||"bottom"!==e.placement?_("v-if",!0):(n(),m("div",{key:1,class:d([p(s).e("timestamp"),p(s).is("bottom")])},y(e.timestamp),3))],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const R=B(H,{TimelineItem:P}),U=E(P),W=""+new URL("087AC4D233B64EB0flipped-aurora.png",import.meta.url).href,q=e=>(x("data-v-74511b43"),e=e(),T(),e),K=q((()=>u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"org-img dom-center",src:z,alt:"gin-vue-admin"})],-1))),Q=q((()=>u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/watchers/flipped-aurora/gin-vue-admin.svg?label=Watch",alt:""})],-1))),V=q((()=>u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/stars/flipped-aurora/gin-vue-admin.svg?style=social",alt:""})],-1))),X=q((()=>u("a",{href:"https://github.com/flipped-aurora/gin-vue-admin"},[u("img",{class:"dom-center",src:"https://img.shields.io/github/forks/flipped-aurora/gin-vue-admin.svg?label=Fork",alt:""})],-1))),Y=q((()=>u("div",null,"flipped-aurora团队",-1))),Z=q((()=>u("a",{href:"https://github.com/flipped-aurora"},[u("img",{class:"org-img dom-center",src:W,alt:"flipped-aurora"})],-1))),ee=["href"],ae=["src"],te={class:"author-name",style:{}},se=q((()=>u("div",null,"提交记录",-1))),le=G(Object.assign({name:"About"},{__name:"index",setup(e){const a=k(0),t=()=>{a.value++,l()},s=k([]),l=()=>{L(a.value).then((({data:e})=>{e.forEach((e=>{e.commit.message&&s.value.push({from:O(e.commit.author.date,"yyyy-MM-dd"),title:e.commit.author.name,showDayAndMonth:!0,message:e.commit.message})}))}))},i=k([]);return l(),F().then((({data:e})=>{i.value=e,i.value.sort()})),(e,a)=>{const l=$,o=S,r=I,d=M,p=U,f=R,h=w;return n(),m("div",null,[C(r,{gutter:10},{default:g((()=>[C(o,{span:12},{default:g((()=>[C(d,null,{header:g((()=>[C(l,null,{default:g((()=>[A("gin-vue-admin")])),_:1})])),default:g((()=>[u("div",null,[C(r,null,{default:g((()=>[C(o,{span:8,offset:8},{default:g((()=>[K])),_:1})])),_:1}),C(r,{gutter:10},{default:g((()=>[C(o,{span:8},{default:g((()=>[Q])),_:1}),C(o,{span:8},{default:g((()=>[V])),_:1}),C(o,{span:8},{default:g((()=>[X])),_:1})])),_:1})])])),_:1}),C(d,{style:{"margin-top":"20px"}},{header:g((()=>[Y])),default:g((()=>[u("div",null,[C(r,null,{default:g((()=>[C(o,{span:8,offset:8},{default:g((()=>[Z])),_:1})])),_:1}),C(r,{style:{"margin-left":"40px"},gutter:20},{default:g((()=>[(n(!0),m(D,null,j(i.value,((e,a)=>(n(),c(o,{key:a,span:8},{default:g((()=>[u("a",{href:e.html_url},[u("img",{class:"avatar-img",src:e.avatar_url},null,8,ae),u("a",te,y(e.login),1)],8,ee)])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1}),C(o,{span:12},{default:g((()=>[C(d,null,{header:g((()=>[se])),default:g((()=>[u("div",null,[C(f,null,{default:g((()=>[(n(!0),m(D,null,j(s.value,((e,a)=>(n(),c(p,{key:a,timestamp:e.from,placement:"top"},{default:g((()=>[C(d,null,{default:g((()=>[u("h4",null,y(e.title),1),u("p",null,y(e.message),1)])),_:2},1024)])),_:2},1032,["timestamp"])))),128))])),_:1})]),C(h,{class:"load-more",type:"primary",link:"",onClick:t},{default:g((()=>[A("Load more")])),_:1})])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-74511b43"]]);export{le as default};
