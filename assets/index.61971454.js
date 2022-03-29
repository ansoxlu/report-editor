var Re=Object.defineProperty,Le=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var me=(e,i,n)=>i in e?Re(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,v=(e,i)=>{for(var n in i||(i={}))Je.call(i,n)&&me(e,n,i[n]);if(ye)for(var n of ye(i))We.call(i,n)&&me(e,n,i[n]);return e},m=(e,i)=>Le(e,Ne(i));import{s as f,u as $,j as c,a as t,G as Ve,O as qe,R as Ge,B as F,b as de,h as Ee,c as C,v as re,I as L,m as w,S as E,l as Z,T as P,d as se,e as Q,J as Ue,f as _e,g as ce,r as S,E as Ye,A as Ke,i as k,C as N,P as J,k as Qe,n as Xe,D as he,o as R,F as Be,p as Ze,M as ne,q as G,t as et,w as tt,x as it,y as nt,z as at,H as O,K as lt}from"./vendor.dc902cfd.js";const ut=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};ut();var ot="/assets/logo.3489b067.png";const dt=f.div`
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #ebe0e0;
`,rt=f.div`
  display: flex;

  > img {
    height: 60px;
  }

  > span {
    font-size: 28px;
    color: chocolate;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
`,st=f.div`
  font-size: 40px;
  margin-left: 40px;
`;function ct(){const e=$();return c(dt,{children:[c(rt,{onClick:()=>e("/"),children:[t("img",{src:ot,alt:"logo"}),t("span",{children:"\u62A5\u544A\u7F16\u8F91\u5668"})]}),t("div",{children:t("a",{href:"https://github.com/ansoxlu/report-editor",target:"_blank",rel:"noreferrer",children:t(st,{children:t(Ve,{})})})})]})}const ht=f.div`
  width: 100vw;
  height: 100vh;
`,ft=f.div`
  margin: 0 auto;
  display: flex;
  height: calc(100vh - var(--header-h));
  justify-content: center;
`;function De(e){return c(ht,{children:[t(ct,{}),c(ft,{children:[t(qe,{}),e.children]})]})}function gt(){const e=$();return t(De,{children:t(Ge,{status:"404",title:"404",subTitle:"\u6CA1\u6709\u627E\u5230\u5185\u5BB9",extra:t(F,{type:"primary",onClick:()=>e("/"),children:"\u8FD4\u56DE\u9996\u9875"})})})}const vt=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-02-12 10:10:30",items:[{id:1,path:"author",required:!0},{id:2,path:"components[]",required:!0},{id:3,path:"description[]",required:!0},{id:4,path:"github",required:!0},{id:5,path:"status",required:!0},{id:6,path:"title",required:!0}],json:'{"title":"\u62A5\u544A\u7F16\u8F91\u5668","author":"ansoxlu","github":"https://github.com/ansoxlu/report-editor","status":"\u5F00\u53D1\u4E2D","description":["\u8BE5\u9879\u76EE\u4EE5\u52A8\u6001\u6570\u636E\u751F\u6210PDF\u62A5\u544A\u6587\u4EF6\u4E3A\u76EE\u6807","\u5141\u8BB8A4/A5\u7B49\u6807\u51C6\u6216\u81EA\u5B9A\u4E49\u7EB8\u5F20\u683C\u5F0F","\u5141\u8BB8\u81EA\u52A8\u5206\u9875/\u56FA\u5B9A\u5206\u9875/\u9875\u5934\u9875\u5C3E"],"components":["1.\u6587\u672C","2. \u56FE\u7247(\u5F85\u5B8C\u6210)","3. \u4E00\u7EF4\u7801(\u5F85\u5B8C\u6210)","4. \u4E8C\u7EF4\u7801(\u5F85\u5B8C\u6210)","5. \u8868\u683C(\u5F85\u5B8C\u6210)","6. \u81EA\u5B9A\u4E49\u8868\u683C(\u9690\u85CF\u5C5E\u6027)(\u5F85\u5B8C\u6210)"]}'}],yt=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-01-01 01:02:03",metadataId:"example",json:'{"footer":-1,"header":-1,"width":210,"height":297,"listIndexes":[],"pageIndexes":[],"styles":[{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"Ellipsis","value":false},{"definition":"Color","value":"#000"}],"layouts":[{"contents":[{"value":"${title}","id":"7d5355d7-3557-4f93-a7c5-1c43c23c0811","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"center"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":28},{"definition":"FontWeight","value":800},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":10},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":20,"left":0,"right":0,"top":30}},{"definition":"Border","value":{"bottom":{"size":3,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d22c618e-731b-4491-93c7-3c39e24e4e8e","definition":"Text"}],"id":"d22c618e-731b-4491-93c7-3c39e24e4e8e","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u4F5C\u8005\uFF1A ${author}","id":"a20f698f-7505-4ba9-b2b3-220f7e2dc3d3","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":20}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"44b12a83-452a-4b72-a1b7-e00ce6dac700","definition":"Text"}],"id":"44b12a83-452a-4b72-a1b7-e00ce6dac700","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u72B6\u6001\uFF1A${status}","id":"1294eaa1-254b-4e79-a6ce-fca2a3ad0502","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"dd1772ec-8e51-4b3b-954c-2a30beef3945","definition":"Text"}],"id":"dd1772ec-8e51-4b3b-954c-2a30beef3945","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u5730\u5740\uFF1A${github}","id":"0c451498-d2a7-4e21-b10b-654c7dadd494","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":30,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","definition":"Text"}],"id":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u8BF4\u660E\uFF1A","id":"3ef45054-252a-43b2-9a91-b5fa61e39655","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"},{"value":"${description[]}","id":"9ac80ad3-a2e2-4467-b6db-3648980d319b","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"}],"id":"617c209b-58ee-4e29-b274-81659a63a620","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u7EC4\u4EF6\uFF1A","id":"3e2953a8-480d-4e71-80e3-d3a025bf6eee","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"},{"value":"${components[]}","id":"419e6600-09b8-42b5-92f3-cd9d8aa21e11","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"}],"id":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":30}}],"definition":"Many"}]}'}],mt={metatables:vt,templates:yt},xt=()=>{const[e,i]=de("RE-database",JSON.stringify(mt)),n=l=>{i(JSON.stringify(l))};return[JSON.parse(e),n]};var j={useDatabase:xt};const Ct=f.div`
  padding: 15px 30px;
  border-bottom: 1px solid #ebe0e0;

  > div:first-child {
    display: flex;
    flex: auto;
    margin-bottom: 8px;
    align-items: center;

    > div:nth-child(1) {
      font-size: 16px;
    }

    > div:nth-child(2) {
      flex: auto;
    }

    > div:nth-child(3) {
      padding-right: 25px;
    }
  }

  > div:last-child {
    display: flex;
    color: #bfbfbf;

    > div:nth-child(2) {
      flex: auto;
    }
  }
`;function fe(e){return t(Ct,{children:e.children})}const Ae="YYYY-MM-DD",pt="hh:mm:ss",bt=`${Ae} ${pt}`,Ft=e=>Ee(e).format(bt),Et=e=>Ee(e).format(Ae),Bt=f.div`
  padding: 15px 30px;
  border-bottom: 1px solid #ebe0e0;
`,Dt=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  > input {
    width: auto;
    flex: auto;
  }

  > button {
    margin-left: 15px;
  }
`,At=f.div`
  display: flex;

  > p {
    padding-left: 10px;
    width: 94px;
  }

  > textarea {
    flex: 1;
  }
`;function ee(e){const[i,n]=C.useState(()=>{var a;return(a=e.value)!=null?a:{id:re(),title:"",description:"",createdAt:"",updatedAt:""}});C.useEffect(()=>{e.value&&n(Object.assign(i,e.value))},[e.value]);const l=()=>{if(!i.title){w.error("\u8BF7\u8F93\u5165\u6807\u9898");return}const a=Et();e.onOk(m(v({},i),{createdAt:i.createdAt||a,updatedAt:a}))};return c(Bt,{children:[c(Dt,{children:[t("div",{children:"* \u8BF7\u8F93\u5165\u6807\u9898\uFF1A"}),t(L,{value:i.title,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",onChange:a=>n(m(v({},i),{title:a.target.value}))}),e.children,t(F,{type:"primary",onClick:()=>l(),children:e.value?"\u786E\u5B9A\u4FDD\u5B58":"\u786E\u5B9A\u65B0\u589E"}),e.value&&t(F,{type:"primary",onClick:()=>e.onCancel&&e.onCancel(),children:"\u53D6\u6D88\u4FEE\u6539"})]}),c(At,{children:[t("p",{children:"\u8BF7\u8F93\u5165\u8BF4\u660E:"}),t(L.TextArea,{value:i.description,onChange:a=>n(m(v({},i),{description:a.target.value})),autoSize:{minRows:2,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u8BF4\u660E"})]})]})}function wt(){const e=$(),[i,n]=j.useDatabase(),[l,a]=C.useState(),[s,d]=C.useState(),h=u=>{var y,g;const o=s?i.metatables.find(x=>x.id===s):void 0;i.metatables.push(m(v({},u),{items:(y=o==null?void 0:o.items)!=null?y:[],json:(g=o==null?void 0:o.json)!=null?g:"{}"})),n(i),d(void 0)},r=u=>{const o=i.metatables.findIndex(y=>y.id===u.id);o!==-1&&(i.metatables.splice(o,1,u),n(i)),a(void 0)};return c("div",{children:[t(ee,{onOk:h,children:t(E,{placeholder:"\u590D\u5236\u5DF2\u6709\u6570\u636E\u683C\u5F0F",allowClear:!0,style:{width:170},onChange:d,children:i.metatables.map(u=>t(E.Option,{value:u.id,children:u.title},u.id))})}),i.metatables.map(u=>(l==null?void 0:l.id)===u.id?t(ee,{value:l,onOk:o=>r(o),onCancel:()=>a(void 0)},u.id):c(fe,{children:[c("div",{children:[t("div",{children:u.title}),t("div",{}),t("div",{children:u.updatedAt}),t("div",{children:t(F,{type:"primary",onClick:()=>a(u),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),c("div",{children:[t("div",{children:u.description}),t("div",{}),t("div",{children:t(F,{type:"primary",onClick:()=>e(`/metadata/${u.id}`),children:"\u6570\u636E\u5B9A\u4E49"})})]})]},u.id))]})}function $t(){const e=$(),[i,n]=j.useDatabase(),[l,a]=C.useState(),[s,d]=C.useState(),[h,r]=C.useState(),u=g=>{const x=i.templates.find(D=>D.id===g);r(x.id),s||d(x.metadataId)},o=g=>{var D;if(!s){w.error("\u8BF7\u9009\u62E9\u6570\u636E\u6E90");return}const x=h?(D=i.templates.find(T=>T.id===h))==null?void 0:D.json:void 0;i.templates.push(m(v({},g),{json:x,metadataId:s})),n(i)},y=g=>{const x=i.templates.findIndex(D=>D.id===g.id);x!==-1&&(i.templates.splice(x,1,g),n(i)),a(void 0)};return c("div",{children:[c(ee,{onOk:o,children:[t(E,{value:s,placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90",style:{width:170},onChange:d,children:i.metatables.map(g=>t(E.Option,{value:g.id,children:g.title},g.id))}),t(E,{placeholder:"\u590D\u5236\u5DF2\u6709\u6A21\u677F\u6570\u636E",style:{width:170},onChange:u,children:i.templates.map(g=>t(E.Option,{value:g.id,children:g.title},g.id))})]}),i.templates.map(g=>(l==null?void 0:l.id)===g.id?t(ee,{value:l,onOk:x=>y(x),onCancel:()=>a(void 0)},g.id):c(fe,{children:[c("div",{children:[t("div",{children:g.title}),t("div",{}),t("div",{children:g.updatedAt}),t("div",{children:t(F,{type:"primary",onClick:()=>a(g),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),c("div",{children:[t("div",{children:g.description}),t("div",{}),t("div",{children:t(F,{disabled:!g.json,type:"primary",onClick:()=>e(`/preview/${g.id}`),style:{marginRight:24},children:"\u6253\u5370\u9884\u89C8"})}),t("div",{children:t(F,{type:"primary",onClick:()=>e(`/template/${g.id}`),children:"\u6A21\u677F\u5B9A\u4E49"})})]})]},g.id))]})}function zt(){const e=$(),[i]=j.useDatabase();return t("div",{children:i.templates.filter(n=>n.json).map(n=>c(fe,{children:[c("div",{children:[t("div",{children:n.title}),t("div",{}),t("div",{children:n.updatedAt}),t("div",{children:t(F,{type:"primary",onClick:()=>e(`/preview/${n.id}`),children:"\u9884\u89C8\u8DF3\u8F6C"})})]}),t("div",{children:t("div",{children:n.description})})]},n.id))})}const St=f.div`
  width: var(--content-w);
  display: flex;
  padding: 30px 0;
`,kt=f.aside`
  width: 300px;
  margin-right: 30px;
  border-radius: 6px;
`,It=f.article`
  width: 900px;
  border: 1px solid #ebe0e0;
  border-radius: 6px;
`,Mt=f.div`
  font-size: 23px;
  color: chocolate;
  border-bottom: 1px solid #ebe0e0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${e=>(e.index+2)*18}px;
  background-color: ${e=>e.isActive?"peachpuff":"#f3f3f3"};
  cursor: pointer;
`,Tt=f.div`
  display: flex;
  height: 54px;
  background-color: peachpuff;
  color: chocolate;
  font-size: 20px;
  align-items: center;
  padding-left: 30px;
`,ae=[{key:"Metadata",title:"\u6570\u636E\u6A21\u677F",description:"\u6253\u5370\u6A21\u677F\u9700\u8981\u6CE8\u5165\u52A8\u6001\u6570\u636E,\u5728\u6B64\u4E4B\u524D\u4F60\u9700\u8981\u7F16\u8F91\u6570\u636E\u683C\u5F0F,\u7528\u4E8E\u9A8C\u8BC1\u6E32\u67D3\u65F6\u7684\u683C\u5F0F\u548C\u6CE8\u5165",Element:wt},{key:"Template",title:"\u6253\u5370\u6A21\u677F",description:"\u5B8C\u6210\u6570\u636E\u683C\u5F0F\u7F16\u8F91\u540E,\u5F00\u59CB\u7F16\u8F91\u6A21\u677F, \u7F16\u8F91\u89C6\u56FE\u548C\u6548\u679C\u89C6\u56FE\u6709\u6240\u533A\u522B,\u201C\u6253\u5370\u9884\u89C8\u201D\u67E5\u770B\u6700\u7EC8\u6548\u679C",Element:$t},{description:"",key:"Preview",title:"\u6253\u5370\u9884\u89C8",Element:zt}];function Ot(){const[e,i]=C.useState(ae[0].key),n=C.useMemo(()=>ae.find(l=>l.key===e),[e]);return c(St,{children:[t(kt,{children:ae.map((l,a)=>t(Mt,{index:a,isActive:e===l.key,onClick:()=>i(l.key),children:l.title},l.title))}),c(It,{children:[t(Tt,{children:n.description}),t(n.Element,{})]})]})}const jt=f.div`
`,Ht=f.div`
  padding: 15px 30px;
  border-bottom: 2px solid #eee;
  background-color: #f7f7f7;

  > div:nth-child(1) {
    display: flex;
    height: 32px;

    > div:nth-child(1) {
      font-size: 18px;
    }
    > div:nth-child(2) {
      flex: auto;
    }
    > div:last-child {
      margin-left: 10px;
    }
  }

  > div:nth-child(2) {
    color: #bfbfbf;
  }
`,Pt=f.div`
  padding: 15px 30px;
`,xe={add:{color:"#87d068",title:"\u6DFB\u52A0"},delete:{color:"#f50",title:"\u5220\u9664"},update:{color:"#2db7f5",title:"\u4FEE\u6539"},normal:{color:void 0,title:"\u65E0"}};function Rt(e){const i=$(),[n,l]=C.useState([]);C.useEffect(()=>{const d={},h=(u,o)=>{if(o==null){d[u]=!1;return}if(["string","number","boolean"].includes(typeof o)){d[u]===void 0&&(d[u]=!0);return}if(Array.isArray(o)){if(o.length===0)return;if(!o[0]||typeof o[0]!="object"){d[`${u}[]`]=!0;return}o.forEach(y=>{Object.entries(y).forEach(([g,x])=>{if(x==null){d[`${u}[].${g}`]=!1;return}["string","number","boolean"].includes(typeof x)&&d[u]===void 0&&(d[u]=!0)})});return}Object.entries(o).forEach(([y,g])=>{h(`${u}${u?".":""}${y}`,g)})};h("",e.json);const r=e.value.items.map(u=>({id:u.id,path:u.path,alias:u.alias,status:d[u.path]===void 0?"delete":"normal",required:u.required}));Object.keys(d).forEach(u=>{r.find(y=>y.path===u)||r.push({path:u,status:"add",required:d[u]})}),l(Z.exports.sortBy(r,"path"))},[e.json,e.value.items]);const a=()=>{var r;if(n.length===0){w.error("\u8BF7\u8F93\u5165JSON\u8FDB\u884C\u7F16\u8F91");return}let d=((r=Z.exports.maxBy(n,u=>{var o;return(o=u==null?void 0:u.id)!=null?o:0}))==null?void 0:r.id)||0;const h=n.filter(u=>u.status!=="delete").map(u=>(u.id||(d+=1),{id:d,path:u.path,alias:u.alias,required:u.required}));e.onChange(m(v({},e.value),{items:h,updatedAt:Ft(),json:JSON.stringify(e.json)}))},s=d=>{const h=d,r=n.findIndex(o=>o.path===h.path),u=e.value.items[r];h.status!=="add"&&(h.required!==u.required||h.alias!==u.alias?h.status="update":h.status="normal"),n.splice(r,1,h),l([...n])};return c(jt,{children:[c(Ht,{children:[c("div",{children:[t("div",{children:e.value.title}),t("div",{}),t("div",{children:t(F,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})}),t("div",{children:n.find(d=>d.status!=="normal")&&t(F,{type:"primary",onClick:a,children:"\u4FDD\u5B58"})})]}),t("div",{children:e.value.description})]}),t(Pt,{children:c(P,{dataSource:n,pagination:!1,rowKey:"path",children:[t(P.Column,{title:"\u8DEF\u5F84",dataIndex:"path"}),t(P.Column,{title:"\u522B\u540D",dataIndex:"alias",align:"center",render:(d,h)=>t(L,{value:d,onChange:r=>s(m(v({},h),{alias:r.target.value||void 0}))})}),t(P.Column,{title:"\u662F\u5426\u5FC5\u9700",dataIndex:"required",align:"center",render:(d,h)=>t(se,{checked:d,checkedChildren:"\u662F",unCheckedChildren:"\u5426",onChange:r=>s(m(v({},h),{required:r}))})}),t(P.Column,{title:"\u72B6\u6001\u53D8\u66F4",dataIndex:"status",align:"center",render:d=>t(Q,{color:xe[d].color,children:xe[d].title})})]})})]})}const Lt=f.div`
  display: flex;
  flex-direction: column;
  color: #000
`;function we(e){const i=n=>{if(!n.error){if(!n.json){e.onChange("{}");return}if(Array.isArray(n.jsObject)){w.error("\u6570\u636E\u4E0D\u662FJSON\u5BF9\u8C61");return}e.onChange(n.json)}};return t(Lt,{children:t(Ue,{id:"json-editor",placeholder:e.value,onChange:n=>i(n),colors:{default:"#000",background:"#FCFDFD",background_warning:"#000",string:"#FA7921",number:"#70CE35",colon:"#49B8F7",keys:"#59A5D8",keys_whiteSpace:"#835FB6",primitive:"#386FA4",error:"#e30b0b"},locale:_e,width:"100%",height:"100%"})})}const Nt=f.div`
  display: flex;
  width: 100%;
`,Jt=f.div`
  width: 45%;
  border-right: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`,Wt=f.div`
  width: 55%;
  border-left: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`;function Vt(){const e=$(),[i,n]=j.useDatabase(),{id:l}=ce(),a=C.useMemo(()=>i.metatables.find(o=>o.id===l),[i]);if(!a)return w.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const[s,d]=de(`RE-editMetadata-${l}`,a.json),h=C.useMemo(()=>JSON.parse(s),[s]);return c(Nt,{children:[t(Jt,{children:t(Rt,{value:a,onChange:o=>{const y=i.metatables.findIndex(g=>g.id===o.id);i.metatables.splice(y,1,o),n(i)},json:h})}),t(Wt,{children:t(we,{value:h,onChange:o=>{d(o)}})})]})}const qt=e=>`${e/100}rem`,Gt=e=>e.reduce((i,n)=>Object.assign(i,n.definition.render(n.value)),{display:"flex"}),Ut=["FlexDirection","JustifyContent","AlignItems","FlexGrow","MinHeight","MinWidth","MaxHeight","MaxWidth"];function _t(e){return e.reduce((i,n)=>Ut.includes(n.definition.key)?Object.assign(i,n.definition.render(n.value)):i,{display:"flex"})}function Yt(e,i,n){if(i.definition){const a=i;return{value:n!=null?n:a.value,definition:e.find(s=>s.key===a.definition),toJSON(){return{definition:this.definition.key,value:this.value}}}}const l=i;return{value:Z.exports.cloneDeep(l.defaultValue),definition:l,toJSON(){return{definition:this.definition.key,value:n!=null?n:this.value}}}}var p={rem:qt,render:Gt,renderLayout:_t,createStyle:Yt};const Kt=f.div`
`,Qt=f.div`
  position: relative;
  ${e=>e.focus?"z-index: 3;":""}
`,Xt=f.div`
  position: absolute;
  z-index: 2;
`,Zt=f.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,ei=f.div`
  width: 400px;
  height: calc(100vh - 60px);
  top: 60px;
  right: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  position: fixed;
  overflow: auto;
`,ti=f.div`
  font-size: 16px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,ii=f.div`
  padding: 10px 15px;
  border-bottom: 1px solid #aaa;
  cursor: pointer;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  > div:nth-child(1) {
    display: flex;
    margin-bottom: 10px;

    > p:nth-child(2) {
      flex: auto;
    }

    > p:nth-child(3) {
      min-width: 70px;
      text-align: right;
    }
  }
`;function ni(e){const[i,n]=S.exports.useState(!1),[l,a]=S.exports.useState({value:"",items:[]}),s=S.exports.useRef(null),d=o=>{if(e.type==="object")return w.warn("\u8BF7\u70B9\u51FB\u6570\u636E\u6E90\u8FDB\u884C\u8F93\u5165");e.onChange(o)},h=o=>{const y=e.metadata.items.filter(g=>{var x;return g.path.includes(o)||((x=g.alias)==null?void 0:x.includes(o))});a({value:o,items:y})},r=()=>{n(!0)},u=o=>{var x,D,T;if(e.type==="object")return e.onChange(o.path);const y=(T=(D=(x=s.current)==null?void 0:x.resizableTextArea)==null?void 0:D.textArea.selectionStart)!=null?T:0,g=`\${${o.alias?`${o.alias}[${o.id}]`:o.path}}`;if(y===0)e.onChange(`${g}${e.value}`),s.current.resizableTextArea.textArea.selectionStart=0;else if(y===e.value.length)e.onChange(`${e.value}${g}`);else{const W=e.value.substring(0,y),V=e.value.substring(y),b=/\${[^}]+$/g.exec(W),B=/((?!\${).)}/.exec(V);b&&B?e.onChange(`${W.substring(0,b.index)}${g}${V.substring(B.index+2)}`):e.onChange(`${W}${g}${V}`)}};return c(Kt,{children:[t(Qt,{focus:i,children:t(L.TextArea,{ref:o=>{s.current=o},style:{height:e.type==="object"?60:150},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",value:e.value,onChange:o=>d(o.target.value),onFocus:r})}),i&&c(Xt,{children:[t(Zt,{onClick:()=>n(!1)}),c(ei,{children:[c(ti,{onClick:()=>window.open(`/metadata/${e.metadata.id}`),children:["\u6570\u636E\u6E90",t(Ye,{})]}),t(L,{allowClear:!0,value:l.value,onChange:o=>h(o.target.value),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"}),(e.metadata.items.length===0||l.value&&l.items.length===0)&&t("div",{children:"\u65E0\u5185\u5BB9"}),e.metadata.items.map((o,y)=>{var g;return c(ii,{onClick:()=>u(o),children:[c("div",{children:[t(Ke,{content:o.path,trigger:"hover",placement:"left",children:t("p",{children:t(Q,{color:"blue",children:(g=o==null?void 0:o.alias)!=null?g:o.path})})}),t("p",{}),c("p",{children:[o.required&&t(Q,{color:"cyan",children:"\u5FC5\u586B"}),!o.required&&t(Q,{color:"red",children:"\u9009\u586B"})]})]}),t("div",{children:t("p",{children:e.getData(`\${${o.path}}`)})})]},y)})]})]})]})}const ai={key:"Text",defaultValue:"",styles:[],description:"\u5355\u72EC\u7684\u6587\u672C.\u7528\u4E8E\u533B\u9662\u6807\u9898,\u63D0\u793A\u4FE1\u606F\u7B49\u5185\u5BB9",title:"\u6587\u672C",Blueprint(e){return t(ni,{metadata:e.metadata,value:e.value,onChange:e.onChange,getData:e.getData})},Render(e){if(!e.result)return t("span",{style:{display:"none"}});const i=e.style.flexDirection,n=e.result.split(`
`).filter(l=>l);return i==="column"?t("div",{style:e.style,children:(n.length>1?n:Array.from(e.result)).map((l,a)=>t("div",{children:l},String(a)))}):t("div",{style:e.style,children:t("div",{children:n.map((l,a)=>c("span",{children:[l,t("br",{})]},a))})})},Building(e){if(!e.result)return t("div",{children:e.value});const i=e.style.flexDirection,n=e.result.split(`
`).filter(l=>l);return i==="column"?t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:(n.length>1?n:Array.from(e.result)).map((l,a)=>t("div",{children:l},a))}):t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:t("div",{children:n.map((l,a)=>c("span",{children:[l,t("br",{})]},a))})})}};function li(e){return c(E,{value:e.value,onChange:e.onChange,children:[t(E.Option,{value:"px",children:"px"}),t(E.Option,{value:"%",children:"%"})]})}const te={Blueprint(e){return t(k,{min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(v({},e.value),{size:Number(i)})),addonAfter:t(li,{value:e.value.unit,onChange:i=>e.onChange(m(v({},e.value),{unit:i}))})})},defaultValue:{size:0,unit:"px"}},$e=m(v({},te),{render(e){const i=e.unit==="px"?p.rem(e.size):`${e.size}${e.unit}`;return{minHeight:e.size?i:"auto"}},title:"\u6700\u5C0F\u9AD8",description:"",key:"MinHeight"}),ze=m(v({},te),{render(e){const i=e.unit==="px"?p.rem(e.size):`${e.size}${e.unit}`;return{maxHeight:e.size?i:"none"}},title:"\u6700\u5927\u9AD8",description:"",key:"MaxHeight"}),ui=f.div`
  flex: auto;
`;function U(e){return t(k,{addonBefore:e.title,min:"0",max:"999",style:{width:"100%"},value:String(e.value),onChange:i=>e.onChange(Number(i))})}const Se={Blueprint(e){return c(ui,{children:[t(U,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(v({},e.value),{top:i}))}),t(U,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(v({},e.value),{bottom:i}))}),t(U,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(v({},e.value),{left:i}))}),t(U,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(v({},e.value),{right:i}))})]})},render(e){return{paddingTop:p.rem(e.top),paddingBottom:p.rem(e.bottom),paddingLeft:p.rem(e.left),paddingRight:p.rem(e.right)}},defaultValue:{bottom:0,left:0,right:0,top:0},title:"\u8FB9\u8DDD",description:"",key:"Padding"},oi=f.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  ${e=>e.isActive?"background-color: springgreen":""}
`,di=f.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  position: relative;
  flex: 1;
  ${e=>e.isActive?"background-color: springgreen":""}
`,Ce=f.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  background-color: #ff7875;
`,ke={Render(e){return t("div",{style:e.style,children:e.contents.map((i,n)=>t(i.definition.Render,{style:p.render(i.styles),result:e.getData(i.value)},n))})},Building(e){return t(N,{droppableId:e.id,direction:"horizontal",children:(i,n)=>c(oi,{style:e.style,ref:i.innerRef,isDragging:n.isDraggingOver,isActive:!!e.active&&e.id.startsWith(e.active.id),children:[e.contents.length?e.contents.map((l,a)=>t(J,{draggableId:l.id,index:a,children:(s,d)=>{var h,r;return t(di,{ref:s.innerRef,isDragging:d.isDragging,isActive:((h=e.active)==null?void 0:h.id)===l.id,tabIndex:(r=s.dragHandleProps)==null?void 0:r.tabIndex,style:Object.assign(s.draggableProps.style,p.renderLayout(l.styles)),children:l.value?t(l.definition.Building,{style:p.render(l.styles),value:l.value,result:e.getData(l.value)||l.value,onChangeActive:()=>e.onChangeActive(l.id)},a):t(Ce,{onClick:()=>e.onChangeActive(l.id),children:"\u672A\u914D\u7F6E\u5C5E\u6027"},a)})}},l.id)):t(Ce,{children:"\u8BF7\u62D6\u52A8\u5185\u5BB9\u8FDB\u884C\u5143\u7D20\u6DFB\u52A0"}),i.placeholder]})})},description:"\u9875\u9762\u662F\u7AD6\u5411\u6392\u5217\uFF0C\u4F7F\u7528\u8BE5\u5E03\u5C40\u6DFB\u52A0\u6A2A\u5411\u5185\u5BB9",styles:[$e,ze,Se],title:"\u7EB5\u5411\u591A\u5185\u5BB9\u6392\u5217",key:"Many"},ri={title:"\u65B9\u5411",defaultValue:"row",description:"",Blueprint(e){return t(se,{checked:e.value==="row",checkedChildren:"\u6A2A",unCheckedChildren:"\u7AD6",onChange:i=>e.onChange(i?"row":"column")})},render(e){return{flexDirection:e}},key:"FlexDirection"},si={Blueprint(e){return t(k,{min:"0",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{flexGrow:e}},defaultValue:1,title:"\u4E3B\u65B9\u5411\u5360\u6BD4",description:"",key:"FlexGrow"},ci=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"},{title:"\u95F4\u8DDD\u76F8\u7B49",value:"space-between"},{title:"\u56F4\u7ED5\u95F4\u9694",value:"space-around"},{title:"\u8FB9\u8DDD\u76F8\u7B49",value:"space-evenly"}],Ie={Blueprint(e){return t(E,{value:e.value,onChange:e.onChange,style:{width:190},children:ci.map((i,n)=>t(E.Option,{value:i.value,children:i.title},n))})},render(e){return{justifyContent:e}},title:"\u4E3B\u65B9\u5411\u6392\u5217",defaultValue:"flex-start",description:"",key:"JustifyContent"},hi=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"}],fi={Blueprint(e){return t(E,{value:e.value,onChange:i=>e.onChange(i),style:{width:190},children:hi.map(i=>t(E.Option,{value:i.value,children:i.title},i.value))})},render(e){return{alignItems:e}},title:"\u526F\u65B9\u5411\u6392\u5217",defaultValue:"center",description:"",key:"AlignItems"},Me={Blueprint(e){return t(k,{min:"12",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{fontSize:p.rem(e)}},defaultValue:14,description:"",title:"\u5B57\u4F53\u5927\u5C0F",key:"FontSize"},Te={Blueprint(e){return t(E,{value:e.value,onChange:e.onChange,style:{width:190},children:[400,500,600,700,800,900].map((i,n)=>t(E.Option,{value:i,children:i},n))})},render(e){return{fontWeight:e}},defaultValue:400,description:"",title:"\u5B57\u4F53\u7C97\u7EC6",key:"FontWeight"},gi={Blueprint(e){return t(k,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{textIndent:p.rem(e)}},defaultValue:0,description:"",title:"\u9996\u884C\u7F29\u8FDB",key:"TextIndent"},vi={Blueprint(e){return t(k,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},defaultValue:0,description:"",key:"LetterSpacing",render(e){return{letterSpacing:e}},title:"\u6587\u5B57\u95F4\u9694"},yi=m(v({},te),{render(e){const i=e.unit==="px"?p.rem(e.size):`${e.size}${e.unit}`;return{minWidth:e.size?i:"auto"}},title:"\u6700\u5C0F\u5BBD",description:"",key:"MinWidth"}),mi=f.div`
  display: inline-block;
  position: relative;
  width: 190px;
  height: 30px;
`,xi=f.div`
  background-color: ${e=>e.color};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
`,Ci=f.div`
  position: absolute;
  z-index: 2;
  left: -80px;
  top: -271px
`,pi=f.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,ge={Blueprint(e){const[i,n]=S.exports.useState(!1);return c(mi,{children:[t(xi,{color:e.value,onClick:()=>n(!0)}),i&&c(Ci,{children:[t(pi,{onClick:()=>n(!1)}),t(Qe,{color:e.value,onChange:l=>e.onChange(l.hex)})]})]})},render(e){return{color:e}},defaultValue:"#000",description:"",title:"\u5B57\u4F53\u989C\u8272",key:"Color"},Oe={Blueprint(e){return t(se,{checked:e.value,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",onChange:i=>e.onChange(i)})},render(e){return{overflow:e?"hidden":"unset",textOverflow:e?"ellipsis":"unset",whiteSpace:"nowrap"}},defaultValue:!1,description:"\u914D\u7F6E\u6700\u5927\u5BBD/\u9AD8\u4F7F\u7528",title:"\u8D85\u51FA\u7701\u7565",key:"Ellipsis"},bi=m(v({},te),{render(e){const i=e.unit==="px"?p.rem(e.size):`${e.size}${e.unit}`;return{maxWidth:e.size?i:"none"}},title:"\u6700\u5927\u5BBD",description:"",key:"MaxWidth"}),Fi=f.div`
  flex: auto;
`,Ei=f.div`
  display: flex;

  > div:last-child {
    width: 58px;

    > div:nth-child(2) {
      left: -212px;
      top: -279px;
    }
  }
`;function Bi(e){return c(E,{value:e.value,onChange:e.onChange,children:[t(E.Option,{value:"solid",children:"\u5B9E\u7EBF"}),t(E.Option,{value:"double",children:"\u53CC\u5B9E"}),t(E.Option,{value:"dotted",children:"\u70B9\u7EBF"})]})}function _(e){return c(Ei,{children:[t(k,{addonBefore:e.title,min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(v({},e.value),{size:Number(i)})),addonAfter:t(Bi,{value:e.value.style,onChange:i=>e.onChange(m(v({},e.value),{style:i}))})}),t(ge.Blueprint,{value:e.value.color,onChange:i=>e.onChange(m(v({},e.value),{color:i}))})]})}const Di={Blueprint(e){return c(Fi,{children:[t(_,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(v({},e.value),{top:i}))}),t(_,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(v({},e.value),{bottom:i}))}),t(_,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(v({},e.value),{left:i}))}),t(_,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(v({},e.value),{right:i}))})]})},render(e){return{borderTop:`${p.rem(e.top.size)} ${e.top.style} ${e.top.color}`,borderBottom:`${p.rem(e.bottom.size)} ${e.bottom.style} ${e.bottom.color}`,borderLeft:`${p.rem(e.left.size)} ${e.left.style} ${e.left.color}`,borderRight:`${p.rem(e.right.size)} ${e.right.style} ${e.right.color}`}},defaultValue:{bottom:{size:0,color:"#000",style:"solid"},left:{size:0,color:"#000",style:"solid"},right:{size:0,color:"#000",style:"solid"},top:{size:0,color:"#000",style:"solid"}},description:"",title:"\u8FB9\u8DDD\u7EBF",key:"Border"},je=[ri,Ie,fi,si,Me,Te,gi,vi,ge,Oe,$e,yi,ze,bi,Se,Di],Ai=[Me,Te,Oe,ge].map(e=>p.createStyle(je,e)),wi=[ai],$i=[ke],zi=[{title:"A5",width:148,height:210},{title:"A4",width:210,height:297}];var A={paperSizes:zi,layouts:$i,contents:wi,pageStyles:Ai,styles:je};const Si=(e,i,n)=>({id:re(),layout:e,definition:i,styles:(i.styles.length!==0,A.styles).map(l=>{var a;return p.createStyle(A.styles,l,(a=n.find(s=>l.key===s.definition.key))==null?void 0:a.value)}),toJSON(){return{id:this.id,styles:this.styles.map(a=>a.toJSON()),value:this.value,definition:this.definition.key,layout:this.layout.id}},value:Z.exports.cloneDeep(i.defaultValue)});var ki={createContent:Si};const Ii=e=>{const i={id:e.id,styles:e.styles.map(n=>p.createStyle(A.styles,n)),definition:A.layouts.find(n=>n.key===e.definition),contents:[],toJSON(){return{contents:this.contents.map(l=>l.toJSON()),id:this.id,styles:this.styles.map(l=>l.toJSON()),definition:this.definition.key}}};return i.contents=e.contents.map(n=>({id:n.id,styles:n.styles.map(l=>p.createStyle(A.styles,l)),value:n.value,definition:A.contents.find(l=>l.key===n.definition),layout:i,toJSON(){return{value:this.value,id:this.id,styles:this.styles.map(a=>a.toJSON()),layout:this.layout.id,definition:this.definition.key}}})),i},He=(e,i)=>({id:re(),styles:e.styles.map(n=>{var l;return p.createStyle(e.styles,n,(l=i.find(a=>n.key===a.definition.key))==null?void 0:l.value)}),contents:[],definition:e,toJSON(){return m(v({},this),{definition:this.definition.key})}}),Mi=(e,i)=>{var a;const n=He((a=e==null?void 0:e.layout)!=null?a:ke,i),l=ki.createContent(n,e,i);return n.contents.push(l),n},Ti=(e,i)=>e.Blueprint?Mi(e,i):e.definition?Ii(e):He(e,i);var Oi={createLayout:Ti};const ji=e=>{const i={},n=(l,a)=>{a&&typeof a=="object"?Array.isArray(a)?i[`${l}[]`]=a:Object.entries(a).forEach(([s,d])=>{n(l?`${l}.${s}`:s,d)}):l&&(i[l]=a)};return n("",e),i},Hi=(e,i,n)=>{const l=Array.isArray(e),a=(l?e:[e]).map(s=>{if(s.includes("${"))return s.replace(/\${([^}]+)}/g,(u,o)=>{const y=o.trim(),g=/\[([0-9]+)]$/.exec(y),x=n[g?g[1]:y];return Array.isArray(x)&&["string","number","boolean","undefined"].includes(typeof x[0])?`
${x.filter(D=>D).join(`
`)}
`:x||""});const d=s.trim(),h=/\[([0-9]+)]$/.exec(d);return i.items.find(u=>h?u.id===Number(h[1]):u.path===d)?n[h?h[1]:d]:h?void 0:s});return l?a:a[0]},Pi=e=>{const i=typeof e=="string"?JSON.parse(e):e;return{footer:i.footer,header:i.header,width:i.width,height:i.height,styles:i.styles.length?i.styles.map(n=>p.createStyle(A.styles,n)):A.pageStyles,layouts:i.layouts.map(n=>Oi.createLayout(n))}},le="re-iframe",ue=3,pe=async(e,i,n)=>{const l=document.getElementById(le);l&&document.body.removeChild(l);const a=document.createElement("iframe");a.id=le,a.style.visibility="hidden",a.style.position="absolute",a.style.top="0px",a.srcdoc=`<!DOCTYPE html>
      <html lang="en" style="font-size: ${ue*100}px">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style> * { padding: 0; margin: 0; } </style>
        </head>
        <body>
          <div id="app" style="width: ${i*ue}mm; height: ${n*ue}mm">${e}</div>
        </body>
      </html>
    `,document.body.appendChild(a),await new Promise(h=>{const r=setInterval(()=>{a.contentDocument&&a.contentDocument.getElementById("app")&&(clearInterval(r),h(void 0))},100)});const s=await Xe(a.contentDocument.getElementById("app")),d=document.getElementById(le);return d&&document.body.removeChild(d),Promise.resolve(s)},Ri=async(e,i,n)=>{const l=e.offsetHeight;if(l<=e.scrollHeight||n===0)return pe(e.innerHTML,i,n).then(d=>[d]);const a=[""];let s=l;for(let d=0;d<e.children.length;d+=1){const h=e.children[d],r=h.scrollHeight;if(h.nodeName!=="TABLE")if(r>s)s=l-r,a.push(h.innerHTML);else{s-=r;const u=a.length-1,o=`${a[u]}${h.outerHTML}`;a.splice(u,1,o)}}return Promise.all(a.map(d=>pe(d,i,n)))};var M={elementToCanvas:Ri,flattenData:ji,getRenderData:Hi,deserializePage:Pi};const Li=f.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  height: 100%;
`,Ni=f.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  margin: 15px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background: #f3f3f3;
  display: flex;

  > div:first-child {
    flex: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function Ji(e){const i=l=>{const{destination:a,source:s}=l;if(!a)return;const d=e.value,h=a.index>0&&s.index>a.index?a.index-1:0,r=d[s.index];d.splice(s.index,1),d.splice(a.index-h,0,r),e.onChange(d)},n=l=>{const a=e.value.findIndex(s=>s.id===l);e.value.splice(a,1),e.onChange([...e.value])};return t(he,{onDragEnd:i,children:t(N,{droppableId:"layout-contents",children:(l,a)=>c(Li,m(v({},l.droppableProps),{ref:l.innerRef,isDragging:a.isDraggingOver,children:[e.value.map((s,d)=>t(J,{draggableId:s.id,index:d,children:(h,r)=>{var u;return c(Ni,{ref:h.innerRef,style:h.draggableProps.style,isDragging:r.isDragging,children:[t("div",{tabIndex:(u=h.dragHandleProps)==null?void 0:u.tabIndex,children:d+1}),c("div",{children:[t(R,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n(s.id),children:t(F,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(F,{type:"primary",onClick:()=>e.onChangeActive(s.id),children:"\u7F16\u8F91"})]})]})}},s.id)),l.placeholder]}))})})}const Wi=f.div`
  padding: 10px 15px;

`,Vi=f.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  height: 100%;
`,qi=f.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  margin: 15px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background: #f3f3f3;
  display: flex;

  > div:first-child {
    flex: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function Gi(e){const i=l=>{const{destination:a,source:s}=l;if(!a)return;const{layouts:d}=e.value,h=a.index>0&&s.index>a.index?a.index-1:0,r=d[s.index];d.splice(s.index,1),d.splice(a.index-h,0,r),e.onChange(m(v({},e.value),{layouts:[...d]}))},n=l=>{const{layouts:a}=e.value,s=a.findIndex(d=>d.id===l);a.splice(s,1),e.onChange(m(v({},e.value),{layouts:[...a]}))};return c("div",{children:[c(Wi,{children:[t("h3",{children:"\u5206\u9875\u8BF4\u660E"}),t("p",{children:"1.\u5185\u5BB9\u8D85\u51FA\u9875\u9762\u5C3A\u5BF8\u4F1A\u81EA\u52A8\u5206\u9875;"}),t("p",{children:"2.\u53EF\u4EE5\u5728\u6307\u5B9A\u5143\u7D20\u540E\u9762\u5206\u9875\uFF0C\u5143\u7D20\u5220\u9664\u5206\u9875\u5220\u9664;"}),t("h3",{children:"\u9875\u5934\u9875\u5C3E\u8BF4\u660E"}),t("p",{children:"1.\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u4F5C\u4E3A\u9875\u5934\u9875\u5C3E;"}),t("p",{children:"2.\u9875\u5934\u9875\u5C3E\u8BBE\u7F6E\u540E\u65E0\u6CD5\u7F16\u8F91\uFF0C\u5982\u9700\u7F16\u8F91\u8BF7\u53D6\u6D88\u540E\u518D\u91CD\u65B0\u8BBE\u7F6E;"})]}),t(he,{onDragEnd:i,children:t(N,{droppableId:"page-layouts",children:(l,a)=>c(Vi,{ref:l.innerRef,isDragging:a.isDraggingOver,children:[e.value.layouts.map((s,d)=>t(J,{draggableId:s.id,index:d,children:(h,r)=>{var u;return c(Be,{children:[d===e.value.footer&&t("div",{children:"\u53D6\u6D88\u9875\u5C3E"}),c(qi,{ref:h.innerRef,style:h.draggableProps.style,isDragging:r.isDragging,children:[t("div",{tabIndex:(u=h.dragHandleProps)==null?void 0:u.tabIndex,children:d+1}),c("div",{children:[t(R,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n(s.id),children:t(F,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(Ze,{overlay:c(ne,{children:[t(ne.Item,{onClick:()=>e.onChange(m(v({},e.value),{header:d})),children:"\u9875\u5934"}),t(ne.Item,{onClick:()=>e.onChange(m(v({},e.value),{footer:d})),children:"\u9875\u5C3E"})]}),disabled:d<=e.value.header||d>=e.value.footer&&e.value.footer>0,children:t(F,{type:"primary",children:"\u8BBE\u7F6E"})}),t(F,{type:"primary",onClick:()=>e.onChangeActive(s.id),children:"\u7F16\u8F91"})]})]}),d===e.value.header&&t("div",{children:"\u53D6\u6D88\u9875\u5934"})]})}},s.id)),l.placeholder]})})})]})}const Ui=f.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`,be=f.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,_i=f.span`
  display: inline-block;
  width: 80px;
`,Yi=f.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  background-color: #ff7875;
  font-size: 32px;
  height: 88px;
`;function Ki(e){const[i,n]=S.exports.useState(0),l=r=>{e.onChangeActiveValue(m(v({},e.active),{value:r}))},a=r=>{e.onChangeActiveValue(m(v({},e.active),{contents:r}))},s=(r,u)=>{const{styles:o}=e.active,y=o.findIndex(x=>x.definition.key===r),g=o[y];g.value=u,o.splice(y,1,g),e.onChangeActiveValue(m(v({},e.active),{styles:o}))},d=()=>{var u;if((u=e.active)!=null&&u.contents){const o=e.active;return o.contents.length?t(Ji,{value:o.contents,onChange:a,onChangeActive:y=>e.onChangeActive(o.id,y)}):t(Yi,{children:"\u8BF7\u6DFB\u52A0\u5185\u5BB9"})}const r=e.active;return t(r.definition.Blueprint,{value:r.value,onChange:l,metadata:e.metadata,getData:e.getData})},h=()=>{var r;if((r=e.active)!=null&&r.contents){const u=e.value.layouts.findIndex(o=>o.id===e.active.id);e.value.layouts.splice(u,1)}else{const u=e.active,o=u.layout.contents.findIndex(g=>g.id===u.id);u.layout.contents.splice(o,1);const y=e.value.layouts.findIndex(g=>g.id===u.layout.id);u.layout.contents.length===0?e.value.layouts.splice(y,1):e.value.layouts.splice(y,1,u.layout)}e.onChange(v({},e.value))};return t(Ui,{children:c(G,{activeKey:String(i),onChange:r=>n(Number(r)),centered:!0,size:"large",style:{height:"100%"},children:[t(G.TabPane,{tab:!e.active||e.active.contents?"\u5143\u7D20":"\u5C5E\u6027",children:i===0&&!!e.active&&d()},"0"),t(G.TabPane,{tab:"\u6837\u5F0F",children:i===1&&!!e.active&&[t(be,{style:{justifyContent:"center"},children:t(F,{type:"primary",danger:!0,onClick:h,children:"\u5220\u9664"})},"button"),e.active.styles.map((r,u)=>c(be,{children:[t(_i,{children:r.definition.title}),t(r.definition.Blueprint,{value:r.value,onChange:o=>s(r.definition.key,o)})]},u))]},"1"),t(G.TabPane,{tab:"\u9875\u9762\u5143\u7D20",children:i===3&&t(Gi,{value:e.value,onChange:e.onChange,onChangeActive:r=>{e.onChangeActive(r),n(0)}})},"3")]})})}var ve=(e=>(e.Building="Building",e.Material="Material",e))(ve||{}),X=(e=>(e.Layout="layout",e.Content="content",e))(X||{});const Qi=f.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`,Xi=f.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`,Zi=f.article`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
`,en=f.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  position: relative;
`,tn=f.div`
  user-select: none;
  position: absolute;
  width: 40px;
  height: 1px;
  left: -${e=>e.index%2===0?40:27}px;
  background-color: aquamarine;

  > div {
    width: 40px;
    height: 30px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    position: absolute;
    left: -${e=>e.index%2===0?40:27}px;
    background-color: #1890ff;
  }
`,nn=f.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  background-color: #ff7875;
`;function an(e){return t(Qi,{children:t(Xi,{children:!e.value.width&&!e.value.height?null:t(N,{droppableId:ve.Building,children:(i,n)=>c(Zi,{ref:i.innerRef,isDragging:n.isDraggingOver,style:v({width:`${e.value.width}mm`,height:`${e.value.height}mm`},p.render(e.value.styles)),children:[e.value.layouts.length?e.value.layouts.map((l,a)=>t(J,{draggableId:`${l.id}_${X.Layout}`,index:a,children:(s,d)=>{var h,r;return c(en,{ref:s.innerRef,isDragging:d.isDragging,style:(h=n.draggingOverWith)!=null&&h.endsWith(X.Layout)?s.draggableProps.style:void 0,children:[t(tn,{tabIndex:(r=s.dragHandleProps)==null?void 0:r.tabIndex,onClick:()=>e.onChangeActive(l.id),index:a,children:t("div",{children:a+1})}),t(l.definition.Building,{getData:e.getData,active:e.active,contents:l.contents,id:`${l.id}_${X.Content}`,style:p.render(l.styles),onChangeActive:u=>e.onChangeActive(l.id,u)},l.id)]})}},l.id)):t(nn,{children:"\u8BF7\u62D6\u52A8\u5E03\u5C40\u6216\u5185\u5BB9\u8FDB\u884C\u7F16\u8F91"}),i.placeholder]})})})})}const Y=f.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,K=f.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`;function ln(e){const[i,n]=C.useState({width:e.value.width,height:e.value.height,title:""});C.useEffect(()=>{var u;const r=A.paperSizes.find(o=>o.width===i.width&&o.height===i.height||o.width===i.height&&o.height===i.width);n(m(v({},i),{title:(u=r==null?void 0:r.title)!=null?u:"\u81EA\u5B9A\u4E49"}))},[e.value.width,e.value.height,i.width,i.height]);const l=()=>{if(!i.height){w.error("\u65B9\u5411\u5207\u6362\u5931\u8D25,\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)");return}e.onChange(m(v({},e.value),{width:i.height,height:i.width}))},a=(r,u)=>{const o=e.value.styles.findIndex(g=>g.definition.key===r),y=e.value.styles[o];y.value=u,e.value.styles.splice(o,1,y),e.onChange(v({},e.value))},s=r=>{n(m(v({},i),{height:r})),e.onChange(m(v({},e.value),{height:r}))},d=r=>{if(n(m(v({},i),{width:r})),!r){w.error("\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)");return}e.onChange(m(v({},e.value),{width:r}))},h=r=>{const u=A.paperSizes.find(o=>o.title===r);u&&e.onChange(m(v({},e.value),{width:u.width,height:u.height}))};return c("div",{children:[c(Y,{children:[t(K,{children:"\u5C3A\u5BF8"}),c(E,{value:i.title,style:{width:112},onChange:h,children:[t(E.Option,{value:"",children:"\u81EA\u5B9A\u4E49"}),A.paperSizes.map((r,u)=>t(E.Option,{value:r.title,children:r.title},u))]}),t(F,{type:"primary",onClick:l,children:t(et,{})})]}),c(Y,{children:[t(K,{children:"\u5BBD\u5EA6"}),t(k,{value:i.width,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:d,onBlur:()=>d(i.width||e.value.width)})]}),c(Y,{children:[t(K,{children:"\u9AD8\u5EA6"}),t(k,{value:i.height,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:s})]}),e.value.styles.map((r,u)=>c(Y,{children:[t(K,{children:r.definition.key===Ie.key?"\u7AD6\u5411\u6392\u5217":r.definition.title}),t(r.definition.Blueprint,{value:r.value,onChange:o=>a(r.definition.key,o)})]},u))]})}const un=f.aside`
  width: 250px;
  color: #333;
  padding-top: 12px;
`,oe=f.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,on=f.div`
`,dn=f.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`,rn=f.ul`
  padding: 10px 12px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
`,Pe=f.li`
  display: flex;
  height: 30px;
  width: 170px;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  user-select: none;
  margin-bottom: 8px;

`,sn=f(Pe)`
  + div {
    display: none !important;
  }
`;function cn(e){const i=$(),n=()=>{e.onSave(),i("/")};return t(N,{droppableId:ve.Material,isDropDisabled:!0,children:l=>c(un,{ref:l.innerRef,children:[c(oe,{children:[t(on,{children:e.template.title}),t("div",{style:{flex:"auto"}}),e.updating&&t(R,{placement:"topRight",title:"\u662F\u5426\u4FDD\u5B58\u540E\u8FD4\u56DE\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n,onCancel:()=>i("/"),children:t(F,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})}),!e.updating&&t(F,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),e.updating&&c(oe,{children:[t(R,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u653E\u5F03\u4FEE\u6539\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:e.onCancel,children:t(F,{type:"primary",danger:!0,children:"\u653E\u5F03\u4FEE\u6539"})}),t("div",{style:{flex:"auto"}}),t(R,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u4FDD\u5B58\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>e.onSave(),children:t(F,{type:"primary",children:"\u786E\u5B9A\u4FDD\u5B58"})})]}),c(oe,{children:[t(dn,{children:"\u5185\u5BB9"}),t(rn,{children:A.contents.map((a,s)=>t(J,{draggableId:a.key,index:s,children:(d,h)=>{var r;return c(Be,{children:[t(Pe,{ref:d.innerRef,tabIndex:(r=d.dragHandleProps)==null?void 0:r.tabIndex,isDragging:h.isDragging,style:h.isDragging?d.draggableProps.style:{},children:a.title}),h.isDragging&&t(sn,{children:a.title})]})}},a.key))})]}),t(ln,{value:e.value,onChange:e.onChange}),l.placeholder]})})}function hn(){const e=$(),[i,n]=j.useDatabase(),{id:l}=ce(),a=C.useMemo(()=>i.templates.find(b=>b.id===l),[i]);if(!a)return w.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const s=C.useMemo(()=>i.metatables.find(b=>b.id===a.metadataId),[i]),d=C.useMemo(()=>M.flattenData(JSON.parse(s.json)),[s]),[h,r]=de(`RE-editTemplate-${l}`),u=()=>localStorage.removeItem(`RE-editTemplate-${l}`),o=C.useMemo(()=>M.deserializePage(h||a.json||{footer:-1,header:-1,width:210,height:297,layouts:[],styles:[]}),[h,a]),[y,g]=C.useState(),x=b=>{r(JSON.stringify(b))},D=()=>{if(!h)return;const b=i.templates.findIndex(B=>B.id===a.id);a.json=h,i.templates.splice(b,1,a),n(i)},T=(b,B)=>{const H=o.layouts.find(I=>I.id===b);if(B){const I=H.contents.find(q=>q.id===B);g(I)}else g(H)};return c("div",{children:[c(he,{onDragEnd:b=>{},children:[t(cn,{value:o,onChange:x,updating:!!h,onSave:D,onCancel:u,template:a}),t(an,{value:o,getData:b=>M.getRenderData(b,s,d),onChangeActive:T,active:y})]}),t(Ki,{active:y,onChangeActiveValue:b=>{g(b);let B=o.layouts.findIndex(z=>z.id===b.id);if(B!==-1){const z=o.layouts[B];z.contents=b.contents,z.styles=b.styles,z.contents.length===0?o.layouts.splice(B,1):o.layouts.splice(B,1,z),x(o);return}const H=b;if(B=o.layouts.findIndex(z=>z.id===H.layout.id),B===-1){g(void 0),w.error("\u65E0\u6548\u7684\u4FEE\u6539,\u7F16\u8F91\u7684\u5185\u5BB9\u5DF2\u8FC7\u671F");return}const I=o.layouts[B],q=I.contents.findIndex(z=>z.id===H.id),ie=I.contents[q];ie.value=b.value,ie.styles=b.styles,I.contents.splice(q,1,ie),o.layouts.splice(B,1,I),x(o)},onChangeActive:T,value:o,onChange:x,metadata:s,getData:b=>M.getRenderData(b,s,d)})]})}const fn=f.div`
  width: ${e=>e.width}mm;
  border-right: 1px solid #ebe0e0;
  background-color: beige;
  box-sizing: content-box;
`,gn=f.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
`,vn=f.div`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  overflow: auto;
  background-color: antiquewhite;
  visibility: hidden;
  position: absolute;
  top: 0;
`,yn=f.img`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  margin: 15px 0;
`,Fe=3;function mn(e){const i=$(),n=M.flattenData(e.data),l=S.exports.useRef(null),[a,s]=S.exports.useState([]),d=()=>{if(a.length===0)return;const u=new tt({unit:"mm",format:[e.page.width,e.page.height]});for(let o=0;o<a.length;o+=1){const g=a[o].toDataURL("image/jpeg",1);o!==0&&u.addPage(),u.setPage(o+1),u.addImage(g,"JPEG",0,0,e.page.width,e.page.height)}u.save("report.pdf")};S.exports.useEffect(()=>{!l.current||M.elementToCanvas(l.current,e.page.width,e.page.height).then(u=>{s(u)})},[e.data]);const h=u=>M.getRenderData(u,e.metadata,n),r=()=>{const u=window.open("","print"),o=`${e.page.width}mm`;u.document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; overflow: auto; }
          html { font-size: ${Fe*100}px }
          body { width: ${o}; height: ${e.page.height*a.length}mm; overflow: hidden; display: flex; flex-direction: column; }
          img { width: ${o}; height: ${e.page.height?`${e.page.height}mm`:"auto"}; }
          </style>
        </head>
        <body>
          ${a.map(y=>`<img src="${y.toDataURL("image/jpeg")}" alt="" />`).join("")}
        </body>
      </html>
    `),setTimeout(()=>{u.print(),u.close()},200)};return c(fn,{width:e.page.width,children:[c(gn,{children:[t(F,{type:"primary",onClick:()=>d(),children:"PDF\u4E0B\u8F7D"}),t(F,{type:"primary",onClick:()=>r(),children:"\u6253\u5370"}),t(F,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),a.map((u,o)=>t(yn,{src:u.toDataURL("image/jpeg",1/Fe),alt:"",width:e.page.width,height:e.page.height},o)),c(vn,{ref:u=>{l.current=u},width:e.page.width,height:e.page.height,children:[e.page.layouts.map((u,o)=>t(u.definition.Render,{style:p.render(u.styles),contents:u.contents,getData:h},o)),c("table",{children:[t("thead",{children:t("tr",{children:t("th",{children:"th"})})}),t("tbody",{children:t("tr",{children:t("td",{children:"td"})})})]})]})]})}const xn=f.div`
  display: flex;
  flex: auto;
`;function Cn(){const e=$(),[i]=j.useDatabase(),{id:n}=ce(),l=i.templates.find(r=>r.id===n);if(!l)return w.error("\u6253\u5370\u6A21\u677F\u5DF2\u8FC7\u671F"),e("/"),null;if(!l.json)return w.error("\u8BF7\u5148\u7F16\u8F91\u6A21\u677F\u540E\u9884\u89C8"),e("/"),null;const a=C.useMemo(()=>M.deserializePage(l.json),[]),s=C.useMemo(()=>i.metatables.find(r=>r.id===l.metadataId),[]),[d,h]=S.exports.useState(()=>JSON.parse(s.json));return c(xn,{children:[t(mn,{page:a,data:d,metadata:s}),t(we,{value:d,onChange:r=>h(r||JSON.parse(s.json))})]})}function pn(){const e=C.useRef();e.current==null&&(e.current=it({window}));const i=e.current,[n,l]=C.useState({action:i.action,location:i.location});return C.useLayoutEffect(()=>i.listen(l),[i]),t(nt,{basename:"report-editor",location:n.location,navigationType:n.action,navigator:i,children:c(at,{children:[c(O,{path:"/",element:t(De,{}),children:[t(O,{path:"/metadata/:id",element:t(Vt,{})}),t(O,{path:"/template/:id",element:t(hn,{})}),t(O,{path:"/preview/:id",element:t(Cn,{})}),t(O,{path:"/",element:t(Ot,{})})]}),t(O,{path:"*",element:t(gt,{})})]})})}function bn(){return t(pn,{})}lt.render(t(C.StrictMode,{children:t(bn,{})}),document.getElementById("root"));
