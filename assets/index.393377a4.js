var Ue=Object.defineProperty,_e=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Ae=(e,i,u)=>i in e?Ue(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u,y=(e,i)=>{for(var u in i||(i={}))Ke.call(i,u)&&Ae(e,u,i[u]);if(De)for(var u of De(i))Qe.call(i,u)&&Ae(e,u,i[u]);return e},m=(e,i)=>_e(e,Ye(i));import{s as g,u as j,j as h,a as t,G as Xe,O as Ze,R as et,B as D,b as p,h as ke,v as pe,I as X,m as O,S as A,l as de,T as K,c as Ce,d as le,J as tt,e as it,f as Fe,r as L,E as nt,A as at,g as R,C as Z,P as ee,i as ut,D as be,k as Q,F as Ie,n as lt,M as he,o as te,p as ot,q as dt,t as rt,w as st,x as ct,y as ht,z as G,H as ft}from"./vendor.43e1a4bd.js";const gt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=u(n);fetch(n.href,o)}};gt();var vt="/report-editor/assets/logo.3489b067.png";const yt=g.div`
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #ebe0e0;
`,mt=g.div`
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
`,xt=g.div`
  font-size: 40px;
  margin-left: 40px;
`;function pt(){const e=j();return h(yt,{children:[h(mt,{onClick:()=>e("/"),children:[t("img",{src:vt,alt:"logo"}),t("span",{children:"\u62A5\u544A\u7F16\u8F91\u5668"})]}),t("div",{children:t("a",{href:"https://github.com/ansoxlu/report-editor",target:"_blank",rel:"noreferrer",children:t(xt,{children:t(Xe,{})})})})]})}const Ct=g.div`
  width: 100vw;
  height: 100vh;
`,Ft=g.div`
  margin: 0 auto;
  display: flex;
  height: calc(100vh - var(--header-h));
  justify-content: center;
`;function Me(e){return h(Ct,{children:[t(pt,{}),h(Ft,{children:[t(Ze,{}),e.children]})]})}function bt(){const e=j();return t(Me,{children:t(et,{status:"404",title:"404",subTitle:"\u6CA1\u6709\u627E\u5230\u5185\u5BB9",extra:t(D,{type:"primary",onClick:()=>e("/"),children:"\u8FD4\u56DE\u9996\u9875"})})})}const Bt=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-02-12 10:10:30",items:[{id:1,path:"author",required:!0},{id:2,path:"components[]",required:!0},{id:3,path:"description[]",required:!0},{id:4,path:"github",required:!0},{id:5,path:"status",required:!0},{id:6,path:"title",required:!0}],json:'{"title":"\u62A5\u544A\u7F16\u8F91\u5668","author":"ansoxlu","github":"https://github.com/ansoxlu/report-editor","status":"\u5F00\u53D1\u4E2D","description":["\u8BE5\u9879\u76EE\u4EE5\u52A8\u6001\u6570\u636E\u751F\u6210PDF\u62A5\u544A\u6587\u4EF6\u4E3A\u76EE\u6807","\u5141\u8BB8A4/A5\u7B49\u6807\u51C6\u6216\u81EA\u5B9A\u4E49\u7EB8\u5F20\u683C\u5F0F","\u5141\u8BB8\u81EA\u52A8\u5206\u9875/\u56FA\u5B9A\u5206\u9875/\u9875\u5934\u9875\u5C3E"],"components":["1.\u6587\u672C","2. \u56FE\u7247(\u5F85\u5B8C\u6210)","3. \u4E00\u7EF4\u7801(\u5F85\u5B8C\u6210)","4. \u4E8C\u7EF4\u7801(\u5F85\u5B8C\u6210)","5. \u8868\u683C(\u5F85\u5B8C\u6210)","6. \u81EA\u5B9A\u4E49\u8868\u683C(\u9690\u85CF\u5C5E\u6027)(\u5F85\u5B8C\u6210)"]}'}],Et=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-01-01 01:02:03",metadataId:"example",json:'{"footer":-1,"header":-1,"width":210,"height":297,"listIndexes":[],"pageIndexes":[],"styles":[{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"Ellipsis","value":false},{"definition":"Color","value":"#000"}],"layouts":[{"contents":[{"value":"${title}","id":"7d5355d7-3557-4f93-a7c5-1c43c23c0811","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"center"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":28},{"definition":"FontWeight","value":800},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":10},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":20,"left":0,"right":0,"top":30}},{"definition":"Border","value":{"bottom":{"size":3,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d22c618e-731b-4491-93c7-3c39e24e4e8e","definition":"Text"}],"id":"d22c618e-731b-4491-93c7-3c39e24e4e8e","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u4F5C\u8005\uFF1A ${author}","id":"a20f698f-7505-4ba9-b2b3-220f7e2dc3d3","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":20}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"44b12a83-452a-4b72-a1b7-e00ce6dac700","definition":"Text"}],"id":"44b12a83-452a-4b72-a1b7-e00ce6dac700","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u72B6\u6001\uFF1A${status}","id":"1294eaa1-254b-4e79-a6ce-fca2a3ad0502","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"dd1772ec-8e51-4b3b-954c-2a30beef3945","definition":"Text"}],"id":"dd1772ec-8e51-4b3b-954c-2a30beef3945","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u5730\u5740\uFF1A${github}","id":"0c451498-d2a7-4e21-b10b-654c7dadd494","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":30,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","definition":"Text"}],"id":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u8BF4\u660E\uFF1A","id":"3ef45054-252a-43b2-9a91-b5fa61e39655","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"},{"value":"${description[]}","id":"9ac80ad3-a2e2-4467-b6db-3648980d319b","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"}],"id":"617c209b-58ee-4e29-b274-81659a63a620","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u7EC4\u4EF6\uFF1A","id":"3e2953a8-480d-4e71-80e3-d3a025bf6eee","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"},{"value":"${components[]}","id":"419e6600-09b8-42b5-92f3-cd9d8aa21e11","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"}],"id":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":30}}],"definition":"Many"}]}'}],Dt={metatables:Bt,templates:Et},At=()=>{const e="RE-database",[i,u]=p.useState(()=>{const n=localStorage.getItem(e);return n?JSON.parse(n):Dt});return[i,n=>{localStorage.setItem(e,JSON.stringify(n)),u(n)}]};var U={useDatabase:At};const wt=g.div`
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
`;function Be(e){return t(wt,{children:e.children})}const Te="YYYY-MM-DD",$t="hh:mm:ss",zt=`${Te} ${$t}`,St=e=>ke(e).format(zt),kt=e=>ke(e).format(Te),It=g.div`
  padding: 15px 30px;
  border-bottom: 1px solid #ebe0e0;
`,Mt=g.div`
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
`,Tt=g.div`
  display: flex;

  > p {
    padding-left: 10px;
    width: 94px;
  }

  > textarea {
    flex: 1;
  }
`;function re(e){const[i,u]=p.useState(()=>{var n;return(n=e.value)!=null?n:{id:pe(),title:"",description:"",createdAt:"",updatedAt:""}});p.useEffect(()=>{e.value&&u(Object.assign(i,e.value))},[e.value]);const a=()=>{if(!i.title){O.error("\u8BF7\u8F93\u5165\u6807\u9898");return}const n=kt();e.onOk(m(y({},i),{createdAt:i.createdAt||n,updatedAt:n}))};return h(It,{children:[h(Mt,{children:[t("div",{children:"* \u8BF7\u8F93\u5165\u6807\u9898\uFF1A"}),t(X,{value:i.title,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",onChange:n=>u(m(y({},i),{title:n.target.value}))}),e.children,t(D,{type:"primary",onClick:()=>a(),children:e.value?"\u786E\u5B9A\u4FDD\u5B58":"\u786E\u5B9A\u65B0\u589E"}),e.value&&t(D,{type:"primary",onClick:()=>e.onCancel&&e.onCancel(),children:"\u53D6\u6D88\u4FEE\u6539"})]}),h(Tt,{children:[t("p",{children:"\u8BF7\u8F93\u5165\u8BF4\u660E:"}),t(X.TextArea,{value:i.description,onChange:n=>u(m(y({},i),{description:n.target.value})),autoSize:{minRows:2,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u8BF4\u660E"})]})]})}function Pt(){const e=j(),[i,u]=U.useDatabase(),[a,n]=p.useState(),[o,d]=p.useState(),f=r=>{var c,v;const l=o?i.metatables.find(x=>x.id===o):void 0;i.metatables.push(m(y({},r),{items:(c=l==null?void 0:l.items)!=null?c:[],json:(v=l==null?void 0:l.json)!=null?v:"{}"})),u(i),d(void 0)},s=r=>{const l=i.metatables.findIndex(c=>c.id===r.id);l!==-1&&(i.metatables.splice(l,1,r),u(i)),n(void 0)};return h("div",{children:[t(re,{onOk:f,children:t(A,{placeholder:"\u590D\u5236\u5DF2\u6709\u6570\u636E\u683C\u5F0F",allowClear:!0,style:{width:170},onChange:d,children:i.metatables.map(r=>t(A.Option,{value:r.id,children:r.title},r.id))})}),i.metatables.map(r=>(a==null?void 0:a.id)===r.id?t(re,{value:a,onOk:l=>s(l),onCancel:()=>n(void 0)},r.id):h(Be,{children:[h("div",{children:[t("div",{children:r.title}),t("div",{}),t("div",{children:r.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>n(r),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),h("div",{children:[t("div",{children:r.description}),t("div",{}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/metadata/${r.id}`),children:"\u6570\u636E\u5B9A\u4E49"})})]})]},r.id))]})}function Ot(){const e=j(),[i,u]=U.useDatabase(),[a,n]=p.useState(),[o,d]=p.useState(),[f,s]=p.useState(),r=v=>{const x=i.templates.find(S=>S.id===v);s(x.id),o||d(x.metadataId)},l=v=>{var S;if(!o){O.error("\u8BF7\u9009\u62E9\u6570\u636E\u6E90");return}const x=f?(S=i.templates.find(k=>k.id===f))==null?void 0:S.json:void 0;i.templates.push(m(y({},v),{json:x,metadataId:o})),u(i)},c=v=>{const x=i.templates.findIndex(S=>S.id===v.id);x!==-1&&(i.templates.splice(x,1,v),u(i)),n(void 0)};return h("div",{children:[h(re,{onOk:l,children:[t(A,{value:o,placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90",style:{width:170},onChange:d,children:i.metatables.map(v=>t(A.Option,{value:v.id,children:v.title},v.id))}),t(A,{placeholder:"\u590D\u5236\u5DF2\u6709\u6A21\u677F\u6570\u636E",style:{width:170},onChange:r,children:i.templates.map(v=>t(A.Option,{value:v.id,children:v.title},v.id))})]}),i.templates.map(v=>(a==null?void 0:a.id)===v.id?t(re,{value:a,onOk:x=>c(x),onCancel:()=>n(void 0)},v.id):h(Be,{children:[h("div",{children:[t("div",{children:v.title}),t("div",{}),t("div",{children:v.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>n(v),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),h("div",{children:[t("div",{children:v.description}),t("div",{}),t("div",{children:t(D,{disabled:!v.json,type:"primary",onClick:()=>e(`/preview/${v.id}`),style:{marginRight:24},children:"\u6253\u5370\u9884\u89C8"})}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/template/${v.id}`),children:"\u6A21\u677F\u5B9A\u4E49"})})]})]},v.id))]})}function jt(){const e=j(),[i]=U.useDatabase();return t("div",{children:i.templates.filter(u=>u.json).map(u=>h(Be,{children:[h("div",{children:[t("div",{children:u.title}),t("div",{}),t("div",{children:u.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/preview/${u.id}`),children:"\u9884\u89C8\u8DF3\u8F6C"})})]}),t("div",{children:t("div",{children:u.description})})]},u.id))})}const Ht=g.div`
  width: var(--content-w);
  display: flex;
  padding: 30px 0;
`,Lt=g.aside`
  width: 300px;
  margin-right: 30px;
  border-radius: 6px;
`,Rt=g.article`
  width: 900px;
  border: 1px solid #ebe0e0;
  border-radius: 6px;
`,Wt=g.div`
  font-size: 23px;
  color: chocolate;
  border-bottom: 1px solid #ebe0e0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${e=>(e.index+2)*18}px;
  background-color: ${e=>e.isActive?"peachpuff":"#f3f3f3"};
  cursor: pointer;
`,Nt=g.div`
  display: flex;
  height: 54px;
  background-color: peachpuff;
  color: chocolate;
  font-size: 20px;
  align-items: center;
  padding-left: 30px;
`,fe=[{key:"Metadata",title:"\u6570\u636E\u6A21\u677F",description:"\u6253\u5370\u6A21\u677F\u9700\u8981\u6CE8\u5165\u52A8\u6001\u6570\u636E,\u5728\u6B64\u4E4B\u524D\u4F60\u9700\u8981\u7F16\u8F91\u6570\u636E\u683C\u5F0F,\u7528\u4E8E\u9A8C\u8BC1\u6E32\u67D3\u65F6\u7684\u683C\u5F0F\u548C\u6CE8\u5165",Element:Pt},{key:"Template",title:"\u6253\u5370\u6A21\u677F",description:"\u5B8C\u6210\u6570\u636E\u683C\u5F0F\u7F16\u8F91\u540E,\u5F00\u59CB\u7F16\u8F91\u6A21\u677F, \u7F16\u8F91\u89C6\u56FE\u548C\u6548\u679C\u89C6\u56FE\u6709\u6240\u533A\u522B,\u201C\u6253\u5370\u9884\u89C8\u201D\u67E5\u770B\u6700\u7EC8\u6548\u679C",Element:Ot},{description:"\u5DF2\u5B8C\u6210\u6570\u636E\u548C\u6A21\u677F\u7F16\u8F91\u540E,\u5F00\u59CB\u67E5\u770B\u6548\u679C\u548CPDF\u751F\u6210",key:"Preview",title:"\u6253\u5370\u9884\u89C8",Element:jt}];function Jt(){const[e,i]=p.useState(fe[0].key),u=p.useMemo(()=>fe.find(a=>a.key===e),[e]);return h(Ht,{children:[t(Lt,{children:fe.map((a,n)=>t(Wt,{index:n,isActive:e===a.key,onClick:()=>i(a.key),children:a.title},a.title))}),h(Rt,{children:[t(Nt,{children:u.description}),t(u.Element,{})]})]})}const Vt=g.div`
`,qt=g.div`
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
`,Gt=g.div`
  padding: 15px 30px;
`,we={add:{color:"#87d068",title:"\u6DFB\u52A0"},delete:{color:"#f50",title:"\u5220\u9664"},update:{color:"#2db7f5",title:"\u4FEE\u6539"},normal:{color:void 0,title:"\u65E0"}};function Ut(e){const i=j(),[u,a]=p.useState([]);p.useEffect(()=>{const d={},f=(r,l)=>{if(l==null){d[r]=!1;return}if(["string","number","boolean"].includes(typeof l)){d[r]===void 0&&(d[r]=!0);return}if(Array.isArray(l)){if(l.length===0)return;if(!l[0]||typeof l[0]!="object"){d[`${r}[]`]=!0;return}l.forEach(c=>{Object.entries(c).forEach(([v,x])=>{if(x==null){d[`${r}[].${v}`]=!1;return}["string","number","boolean"].includes(typeof x)&&d[r]===void 0&&(d[r]=!0)})});return}Object.entries(l).forEach(([c,v])=>{f(`${r}${r?".":""}${c}`,v)})};f("",e.json);const s=e.value.items.map(r=>({id:r.id,path:r.path,alias:r.alias,status:d[r.path]===void 0?"delete":"normal",required:r.required}));Object.keys(d).forEach(r=>{s.find(c=>c.path===r)||s.push({path:r,status:"add",required:d[r]})}),a(de.exports.sortBy(s,"path"))},[e.json,e.value.items]);const n=()=>{var s;if(u.length===0){O.error("\u8BF7\u8F93\u5165JSON\u8FDB\u884C\u7F16\u8F91");return}let d=((s=de.exports.maxBy(u,r=>{var l;return(l=r==null?void 0:r.id)!=null?l:0}))==null?void 0:s.id)||0;const f=u.filter(r=>r.status!=="delete").map(r=>(r.id||(d+=1),{id:d,path:r.path,alias:r.alias,required:r.required}));e.onChange(m(y({},e.value),{items:f,updatedAt:St(),json:JSON.stringify(e.json)}))},o=d=>{const f=d,s=u.findIndex(l=>l.path===f.path),r=e.value.items[s];f.status!=="add"&&(f.required!==r.required||f.alias!==r.alias?f.status="update":f.status="normal"),u.splice(s,1,f),a([...u])};return h(Vt,{children:[h(qt,{children:[h("div",{children:[t("div",{children:e.value.title}),t("div",{}),t("div",{children:t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})}),t("div",{children:u.find(d=>d.status!=="normal")&&t(D,{type:"primary",onClick:n,children:"\u4FDD\u5B58"})})]}),t("div",{children:e.value.description})]}),t(Gt,{children:h(K,{dataSource:u,pagination:!1,rowKey:"path",children:[t(K.Column,{title:"\u8DEF\u5F84",dataIndex:"path"}),t(K.Column,{title:"\u522B\u540D",dataIndex:"alias",align:"center",render:(d,f)=>t(X,{value:d,onChange:s=>o(m(y({},f),{alias:s.target.value||void 0}))})}),t(K.Column,{title:"\u662F\u5426\u5FC5\u9700",dataIndex:"required",align:"center",render:(d,f)=>t(Ce,{checked:d,checkedChildren:"\u662F",unCheckedChildren:"\u5426",onChange:s=>o(m(y({},f),{required:s}))})}),t(K.Column,{title:"\u72B6\u6001\u53D8\u66F4",dataIndex:"status",align:"center",render:d=>t(le,{color:we[d].color,children:we[d].title})})]})})]})}const _t=g.div`
  display: flex;
  flex-direction: column;
  color: #000
`;function Pe(e){const i=u=>{if(!u.error){if(!u.json){e.onChange(u.jsObject||{},"{}");return}if(Array.isArray(u.jsObject)){O.error("\u6570\u636E\u4E0D\u662FJSON\u5BF9\u8C61");return}e.onChange(u.jsObject,u.json)}};return t(_t,{children:t(tt,{id:"json-editor",placeholder:e.value,onChange:u=>i(u),colors:{default:"#000",background:"#FCFDFD",background_warning:"#000",string:"#FA7921",number:"#70CE35",colon:"#49B8F7",keys:"#59A5D8",keys_whiteSpace:"#835FB6",primitive:"#386FA4",error:"#e30b0b"},locale:it,width:"100%",height:"100%"})})}const Yt=g.div`
  display: flex;
  width: 100%;
`,Kt=g.div`
  width: 45%;
  border-right: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`,Qt=g.div`
  width: 55%;
  border-left: 1px solid #eee;
  @media (max-width: 900px) {
    width: 100%;
  }
`;function Xt(){const e=j(),[i,u]=U.useDatabase(),{id:a}=Fe(),n=p.useMemo(()=>i.metatables.find(l=>l.id===a),[i]);if(!n)return O.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const o=p.useMemo(()=>`RE-editMetadata-${a}`,[a]),[d,f]=p.useState(()=>JSON.parse(localStorage.getItem(o)||n.json||"{}")),s=l=>{localStorage.setItem(o,JSON.stringify(l)),f(d)};return h(Yt,{children:[t(Kt,{children:t(Ut,{value:n,onChange:l=>{const c=i.metatables.findIndex(v=>v.id===l.id);i.metatables.splice(c,1,l),u(i),localStorage.removeItem(o)},json:d})}),t(Qt,{children:t(Pe,{value:d,onChange:l=>s(l)})})]})}const Zt=e=>`${e/100}rem`,ei=e=>e.reduce((i,u)=>Object.assign(i,u.definition.render(u.value)),{display:"flex"}),ti=["FlexDirection","JustifyContent","AlignItems","FlexGrow","MinHeight","MinWidth","MaxHeight","MaxWidth"];function ii(e){return e.reduce((i,u)=>ti.includes(u.definition.key)?Object.assign(i,u.definition.render(u.value)):i,{display:"flex"})}function ni(e,i,u){if(i.definition){const n=i;return{value:u!=null?u:n.value,definition:e.find(o=>o.key===n.definition),toJSON(){return{definition:this.definition.key,value:this.value}}}}const a=i;return{value:de.exports.cloneDeep(a.defaultValue),definition:a,toJSON(){return{definition:this.definition.key,value:u!=null?u:this.value}}}}var C={rem:Zt,render:ei,renderLayout:ii,createStyle:ni};const ai=g.div`
`,ui=g.div`
  position: relative;
  ${e=>e.focus?"z-index: 3;":""}
`,li=g.div`
  position: absolute;
  z-index: 2;
`,oi=g.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,di=g.div`
  width: 400px;
  height: calc(100vh - 60px);
  top: 60px;
  right: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  position: fixed;
  overflow: auto;
`,ri=g.div`
  font-size: 16px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,si=g.div`
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
`;function ci(e){const[i,u]=L.exports.useState(!1),[a,n]=L.exports.useState({value:"",items:[]}),o=L.exports.useRef(null),d=l=>{if(e.type==="object"){O.warn("\u8BF7\u70B9\u51FB\u6570\u636E\u6E90\u8FDB\u884C\u8F93\u5165");return}e.onChange(l)},f=l=>{const c=e.metadata.items.filter(v=>{var x;return v.path.includes(l)||((x=v.alias)==null?void 0:x.includes(l))});n({value:l,items:c})},s=()=>{u(!0)},r=l=>{var x,S,k;if(e.type==="object"){e.onChange(l.alias?`${l.alias}[${l.id}]`:l.path);return}const c=(k=(S=(x=o.current)==null?void 0:x.resizableTextArea)==null?void 0:S.textArea.selectionStart)!=null?k:0,v=`\${${l.alias?`${l.alias}[${l.id}]`:l.path}}`;if(c===0)e.onChange(`${v}${e.value}`),o.current.resizableTextArea.textArea.selectionStart=0;else if(c===e.value.length)e.onChange(`${e.value}${v}`);else{const I=e.value.substring(0,c),_=e.value.substring(c),Y=/\${[^}]+$/g.exec(I),ce=/((?!\${).)}/.exec(_);Y&&ce?e.onChange(`${I.substring(0,Y.index)}${v}${_.substring(ce.index+2)}`):e.onChange(`${I}${v}${_}`)}};return h(ai,{children:[t(ui,{focus:i,children:t(X.TextArea,{ref:l=>{o.current=l},style:{height:e.type==="object"?60:150},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",value:e.value,onChange:l=>d(l.target.value),onFocus:s})}),i&&h(li,{children:[t(oi,{onClick:()=>u(!1)}),h(di,{children:[h(ri,{onClick:()=>window.open(`/metadata/${e.metadata.id}`),children:["\u6570\u636E\u6E90",t(nt,{})]}),t(X,{allowClear:!0,value:a.value,onChange:l=>f(l.target.value),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"}),e.metadata.items.length===0||a.value&&a.items.length===0?t("div",{children:"\u65E0\u5185\u5BB9"}):null,e.metadata.items.map(l=>{var c;return h(si,{onClick:()=>r(l),children:[h("div",{children:[t(at,{content:l.path,trigger:"hover",placement:"left",children:t("p",{children:t(le,{color:"blue",children:(c=l==null?void 0:l.alias)!=null?c:l.path})})}),t("p",{}),h("p",{children:[l.required&&t(le,{color:"cyan",children:"\u5FC5\u586B"}),!l.required&&t(le,{color:"red",children:"\u9009\u586B"})]})]}),t("div",{children:t("p",{children:e.getData(`\${${l.path}}`)})})]},l.id)})]})]})]})}const hi={key:"Text",defaultValue:"",description:"\u5355\u72EC\u7684\u6587\u672C.\u7528\u4E8E\u533B\u9662\u6807\u9898,\u63D0\u793A\u4FE1\u606F\u7B49\u5185\u5BB9",title:"\u6587\u672C",Blueprint(e){return t(ci,{metadata:e.metadata,value:e.value,onChange:e.onChange,getData:e.getData})},Render(e){if(!e.result)return t("span",{style:{display:"none"}});const i=e.style.flexDirection,u=e.result.split(`
`).filter(a=>a);return i==="column"?t("div",{style:e.style,children:(u.length>1?u:Array.from(e.result)).map((a,n)=>t("div",{children:a},n))}):t("div",{style:e.style,children:t("div",{children:u.map((a,n)=>h("span",{children:[a,t("br",{})]},n))})})},Building(e){if(!e.result)return t("div",{children:e.value});const i=e.style.flexDirection,u=e.result.split(`
`).filter(a=>a);return i==="column"?t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:(u.length>1?u:Array.from(e.result)).map((a,n)=>t("div",{children:a},n))}):t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:t("div",{children:u.map((a,n)=>h("span",{children:[a,t("br",{})]},n))})})}};function fi(e){return h(A,{value:e.value,onChange:e.onChange,children:[t(A.Option,{value:"px",children:"px"}),t(A.Option,{value:"%",children:"%"})]})}const se={Blueprint(e){return t(R,{min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(y({},e.value),{size:Number(i)})),addonAfter:t(fi,{value:e.value.unit,onChange:i=>e.onChange(m(y({},e.value),{unit:i}))})})},defaultValue:{size:0,unit:"px"}},Oe=m(y({},se),{render(e){const i=e.unit==="px"?C.rem(e.size):`${e.size}${e.unit}`;return{minHeight:e.size?i:"auto"}},title:"\u6700\u5C0F\u9AD8",description:"",key:"MinHeight"}),je=m(y({},se),{render(e){const i=e.unit==="px"?C.rem(e.size):`${e.size}${e.unit}`;return{maxHeight:e.size?i:"none"}},title:"\u6700\u5927\u9AD8",description:"",key:"MaxHeight"}),gi=g.div`
  flex: auto;
`;function ie(e){return t(R,{addonBefore:e.title,min:"0",max:"999",style:{width:"100%"},value:String(e.value),onChange:i=>e.onChange(Number(i))})}const He={Blueprint(e){return h(gi,{children:[t(ie,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(y({},e.value),{top:i}))}),t(ie,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(y({},e.value),{bottom:i}))}),t(ie,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(y({},e.value),{left:i}))}),t(ie,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(y({},e.value),{right:i}))})]})},render(e){return{paddingTop:C.rem(e.top),paddingBottom:C.rem(e.bottom),paddingLeft:C.rem(e.left),paddingRight:C.rem(e.right)}},defaultValue:{bottom:0,left:0,right:0,top:0},title:"\u8FB9\u8DDD",description:"",key:"Padding"},vi=g.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  ${e=>e.isActive?"background-color: springgreen":""}
`,yi=g.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  flex: 1;
  ${e=>e.isActive?"background-color: springgreen":""}
`,$e=g.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  background-color: #ff7875;
`,J={Render(e){return t("div",{style:e.style,children:e.contents.map(i=>t(i.definition.Render,{style:C.render(i.styles),result:e.getData(i.value)},i.id))})},Building(e){return t(Z,{droppableId:e.id,direction:"horizontal",children:(i,u)=>h(vi,{style:e.style,ref:i.innerRef,isDragging:u.isDraggingOver,isActive:!!e.active&&e.id.startsWith(e.active.id),children:[e.contents.length?e.contents.map((a,n)=>t(ee,{draggableId:a.id,index:n,children:(o,d)=>{var f;return t(yi,m(y(y({ref:o.innerRef,isDragging:d.isDragging,isActive:((f=e.active)==null?void 0:f.id)===a.id},o.draggableProps),o.dragHandleProps),{style:Object.assign(o.draggableProps.style,C.renderLayout(a.styles)),children:a.value?t(a.definition.Building,{style:C.render(a.styles),value:a.value,result:e.getData(a.value)||a.value,onChangeActive:()=>e.onChangeActive(a.id)},a.id):t($e,{onClick:()=>e.onChangeActive(a.id),children:"\u672A\u914D\u7F6E\u5C5E\u6027"},a.id)}))}},a.id)):t($e,{children:"\u8BF7\u62D6\u52A8\u5185\u5BB9\u8FDB\u884C\u5143\u7D20\u6DFB\u52A0"}),i.placeholder]})})},description:"\u9875\u9762\u662F\u7AD6\u5411\u6392\u5217\uFF0C\u4F7F\u7528\u8BE5\u5E03\u5C40\u6DFB\u52A0\u6A2A\u5411\u5185\u5BB9",styles:[Oe,je,He],title:"\u7EB5\u5411\u591A\u5185\u5BB9\u6392\u5217",key:"Many"},mi={title:"\u65B9\u5411",defaultValue:"row",description:"",Blueprint(e){return t(Ce,{checked:e.value==="row",checkedChildren:"\u6A2A",unCheckedChildren:"\u7AD6",onChange:i=>e.onChange(i?"row":"column")})},render(e){return{flexDirection:e}},key:"FlexDirection"},xi={Blueprint(e){return t(R,{min:"0",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{flexGrow:e}},defaultValue:1,title:"\u4E3B\u65B9\u5411\u5360\u6BD4",description:"",key:"FlexGrow"},pi=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"},{title:"\u95F4\u8DDD\u76F8\u7B49",value:"space-between"},{title:"\u56F4\u7ED5\u95F4\u9694",value:"space-around"},{title:"\u8FB9\u8DDD\u76F8\u7B49",value:"space-evenly"}],Le={Blueprint(e){return t(A,{value:e.value,onChange:e.onChange,style:{width:190},children:pi.map(i=>t(A.Option,{value:i.value,children:i.title},i.value))})},render(e){return{justifyContent:e}},title:"\u4E3B\u65B9\u5411\u6392\u5217",defaultValue:"flex-start",description:"",key:"JustifyContent"},Ci=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"}],Fi={Blueprint(e){return t(A,{value:e.value,onChange:i=>e.onChange(i),style:{width:190},children:Ci.map(i=>t(A.Option,{value:i.value,children:i.title},i.value))})},render(e){return{alignItems:e}},title:"\u526F\u65B9\u5411\u6392\u5217",defaultValue:"center",description:"",key:"AlignItems"},Re={Blueprint(e){return t(R,{min:"12",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{fontSize:C.rem(e)}},defaultValue:14,description:"",title:"\u5B57\u4F53\u5927\u5C0F",key:"FontSize"},We={Blueprint(e){return t(A,{value:e.value,onChange:e.onChange,style:{width:190},children:[400,500,600,700,800,900].map(i=>t(A.Option,{value:i,children:i},i))})},render(e){return{fontWeight:e}},defaultValue:400,description:"",title:"\u5B57\u4F53\u7C97\u7EC6",key:"FontWeight"},bi={Blueprint(e){return t(R,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{textIndent:C.rem(e)}},defaultValue:0,description:"",title:"\u9996\u884C\u7F29\u8FDB",key:"TextIndent"},Bi={Blueprint(e){return t(R,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},defaultValue:0,description:"",key:"LetterSpacing",render(e){return{letterSpacing:e}},title:"\u6587\u5B57\u95F4\u9694"},Ei=m(y({},se),{render(e){const i=e.unit==="px"?C.rem(e.size):`${e.size}${e.unit}`;return{minWidth:e.size?i:"auto"}},title:"\u6700\u5C0F\u5BBD",description:"",key:"MinWidth"}),Di=g.div`
  display: inline-block;
  position: relative;
  width: 190px;
  height: 30px;
`,Ai=g.div`
  background-color: ${e=>e.color};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
`,wi=g.div`
  position: absolute;
  z-index: 2;
  left: -80px;
  top: -271px
`,$i=g.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Ee={Blueprint(e){const[i,u]=L.exports.useState(!1);return h(Di,{children:[t(Ai,{color:e.value,onClick:()=>u(!0)}),i&&h(wi,{children:[t($i,{onClick:()=>u(!1)}),t(ut,{color:e.value,onChange:a=>e.onChange(a.hex)})]})]})},render(e){return{color:e}},defaultValue:"#000",description:"",title:"\u5B57\u4F53\u989C\u8272",key:"Color"},zi={Blueprint(e){return t(Ce,{checked:e.value,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",onChange:i=>e.onChange(i)})},render(e){return{overflow:e?"hidden":"unset",textOverflow:e?"ellipsis":"unset",whiteSpace:"nowrap"}},defaultValue:!1,description:"\u914D\u7F6E\u6700\u5927\u5BBD/\u9AD8\u4F7F\u7528",title:"\u8D85\u51FA\u7701\u7565",key:"Ellipsis"},Si=m(y({},se),{render(e){const i=e.unit==="px"?C.rem(e.size):`${e.size}${e.unit}`;return{maxWidth:e.size?i:"none"}},title:"\u6700\u5927\u5BBD",description:"",key:"MaxWidth"}),ki=g.div`
  flex: auto;
`,Ii=g.div`
  display: flex;

  > div:last-child {
    width: 58px;

    > div:nth-child(2) {
      left: -212px;
      top: -279px;
    }
  }
`;function Mi(e){return h(A,{value:e.value,onChange:e.onChange,children:[t(A.Option,{value:"solid",children:"\u5B9E\u7EBF"}),t(A.Option,{value:"double",children:"\u53CC\u5B9E"}),t(A.Option,{value:"dotted",children:"\u70B9\u7EBF"})]})}function ne(e){return h(Ii,{children:[t(R,{addonBefore:e.title,min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(y({},e.value),{size:Number(i)})),addonAfter:t(Mi,{value:e.value.style,onChange:i=>e.onChange(m(y({},e.value),{style:i}))})}),t(Ee.Blueprint,{value:e.value.color,onChange:i=>e.onChange(m(y({},e.value),{color:i}))})]})}const Ti={Blueprint(e){return h(ki,{children:[t(ne,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(y({},e.value),{top:i}))}),t(ne,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(y({},e.value),{bottom:i}))}),t(ne,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(y({},e.value),{left:i}))}),t(ne,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(y({},e.value),{right:i}))})]})},render(e){return{borderTop:`${C.rem(e.top.size)} ${e.top.style} ${e.top.color}`,borderBottom:`${C.rem(e.bottom.size)} ${e.bottom.style} ${e.bottom.color}`,borderLeft:`${C.rem(e.left.size)} ${e.left.style} ${e.left.color}`,borderRight:`${C.rem(e.right.size)} ${e.right.style} ${e.right.color}`}},defaultValue:{bottom:{size:0,color:"#000",style:"solid"},left:{size:0,color:"#000",style:"solid"},right:{size:0,color:"#000",style:"solid"},top:{size:0,color:"#000",style:"solid"}},description:"",title:"\u8FB9\u8DDD\u7EBF",key:"Border"},Pi=g.div`
  width: 100%;
  ${e=>e.isActive?"background-color: springgreen":""}
`,Ne={Building(e){var n,o;const i=e.contents[0],u=((n=e.active)==null?void 0:n.id)===i.id||((o=e.active)==null?void 0:o.id)===e.id,a=()=>{e.onChangeActive(i.id)};return t(Pi,{isActive:u,style:C.renderLayout(i.styles),onClick:()=>a(),children:t(i.definition.Building,{style:C.render(i.styles),value:i.value,result:e.getData(i.value)||i.value,onChangeActive:a})})},Render(e){const i=e.contents[0];return t(i.definition.Render,{style:C.render(i.styles),result:e.getData(i.value)})},description:"\u5185\u5BB9\u5217\u8868\u53EA\u6709\u4E00\u4E2A\uFF0C\u4E14\u4E0D\u5141\u8BB8\u4E3A\u7A7A",key:"Single",styles:[],title:""},Oi=g.div`
  width: 100%;
  text-align: center;
  padding: 5px 0;
  background: #f3f3f3;
  border: 1px solid #ddd;
`,ji={title:"\u5206\u9875\u7EBF",defaultValue:"",description:"\u63D2\u5165\u56FA\u5B9A\u5206\u9875",key:"PageLine",layout:Ne,styles:[],Blueprint(){return t("div",{})},Building(){return t(Oi,{children:"\u5206\u9875\u7EBF"})},Render(){return t("br",{})}},Je=[mi,Le,Fi,xi,Re,We,bi,Bi,Ee,zi,Oe,Ei,je,Si,He,Ti],Hi=[Re,We,Ee].map(e=>C.createStyle(Je,e)),Li=[hi,ji],Ri=[J,Ne],Wi=[{title:"A5",width:148,height:210},{title:"A4",width:210,height:297}];var P={paperSizes:Wi,layouts:Ri,contents:Li,pageStyles:Hi,styles:Je};const Ni=(e,i,u)=>{const a=i.styles?i.styles:P.styles;return{id:pe(),layout:e,definition:i,styles:a.map(n=>{var o;return C.createStyle(P.styles,n,(o=u.find(d=>n.key===d.definition.key))==null?void 0:o.value)}),toJSON(){return{id:this.id,styles:this.styles.map(o=>o.toJSON()),value:this.value,definition:this.definition.key,layout:this.layout.id}},value:de.exports.cloneDeep(i.defaultValue)}};var Ve={createContent:Ni};const Ji=e=>{const i=P.layouts.find(a=>a.key===e.definition);if(!i)throw new Error(`createByLayoutSerialize: ${e.definition} is not found`);const u={id:e.id,styles:e.styles.map(a=>C.createStyle(P.styles,a)),definition:i,contents:[],toJSON(){return{contents:this.contents.map(n=>n.toJSON()),id:this.id,styles:this.styles.map(n=>n.toJSON()),definition:this.definition.key}}};return u.contents=e.contents.map(a=>({id:a.id,styles:a.styles.map(n=>C.createStyle(P.styles,n)),value:a.value,definition:P.contents.find(n=>n.key===a.definition),layout:u,toJSON(){return{value:this.value,id:this.id,styles:this.styles.map(o=>o.toJSON()),layout:this.layout.id,definition:this.definition.key}}})),u},qe=(e,i)=>({id:pe(),styles:e.styles.map(u=>{var a;return C.createStyle(e.styles,u,(a=i.find(n=>u.key===n.definition.key))==null?void 0:a.value)}),contents:[],definition:e,toJSON(){return m(y({},this),{definition:this.definition.key})}}),Vi=(e,i)=>{var n;const u=qe((n=e==null?void 0:e.layout)!=null?n:J,i),a=Ve.createContent(u,e,i);return u.contents.push(a),u},qi=(e,i)=>e.Blueprint?Vi(e,i):e.definition?Ji(e):qe(e,i);var me={createLayout:qi};const Gi=e=>{const i={},u=(a,n)=>{n&&typeof n=="object"?Array.isArray(n)?i[`${a}[]`]=n:Object.entries(n).forEach(([o,d])=>{u(a?`${a}.${o}`:o,d)}):a&&(i[a]=n)};return u("",e),i},ze=(e,i,u)=>{var o;const a=e.trim(),n=/\[([0-9]+)]$/.exec(a);if(n){const d=(o=i.items.find(f=>f.id===Number(n[1])))==null?void 0:o.path;if(d)return u[d]}return i.items.some(d=>d.path===a)?u[a]:void 0},Ui=(e,i,u)=>{if(!e)return"";const a=Array.isArray(e),n=(a?e:[e]).map(o=>o.includes("${")?o.replace(/\${([^}]+)}/g,(d,f)=>{const s=ze(f,i,u);return Array.isArray(s)&&["string","number","boolean","undefined"].includes(typeof s[0])?`
${s.filter(r=>r).join(`
`)}
`:s||""}):ze(o,i,u)||o);return a?n:n[0]},_i=e=>{const i=typeof e=="string"?JSON.parse(e):e;return{footer:i.footer,header:i.header,width:i.width,height:i.height,styles:i.styles.length?i.styles.map(u=>C.createStyle(P.styles,u)):P.pageStyles,layouts:i.layouts.map(u=>me.createLayout(u))}};var V={flattenData:Gi,getRenderData:Ui,deserializePage:_i};const Yi=g.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  height: 100%;
`,Ki=g.div`
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
`;function Qi(e){const i=a=>{const{destination:n,source:o}=a;if(!n)return;const d=e.value,f=n.index>0&&o.index>n.index?n.index-1:0,s=d[o.index];d.splice(o.index,1),d.splice(n.index-f,0,s),e.onChange(d)},u=a=>{const n=e.value.findIndex(o=>o.id===a);e.value.splice(n,1),e.onChange([...e.value])};return t(be,{onDragEnd:i,children:t(Z,{droppableId:"layout-contents",children:(a,n)=>h(Yi,m(y(m(y({},a.droppableProps),{ref:a.innerRef,isDragging:n.isDraggingOver}),a.droppableProps),{children:[e.value.map((o,d)=>t(ee,{draggableId:o.id,index:d,children:(f,s)=>h(Ki,m(y({ref:f.innerRef,style:f.draggableProps.style,isDragging:s.isDragging},f.draggableProps),{children:[t("div",m(y({},f.dragHandleProps),{children:d+1})),h("div",{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>u(o.id),children:t(D,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(D,{type:"primary",onClick:()=>e.onChangeActive(o.id),children:"\u7F16\u8F91"})]})]}))},o.id)),a.placeholder]}))})})}const Xi=g.div`
  padding: 10px 15px;

`,Zi=g.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  height: 100%;
`,en=g.div`
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
`;function tn(e){const i=a=>{const{destination:n,source:o}=a;if(!n)return;const{layouts:d}=e.value,f=n.index>0&&o.index>n.index?n.index-1:0,s=d[o.index];d.splice(o.index,1),d.splice(n.index-f,0,s),e.onChange(m(y({},e.value),{layouts:[...d]}))},u=a=>{const{layouts:n}=e.value,o=n.findIndex(d=>d.id===a);n.splice(o,1),e.onChange(m(y({},e.value),{layouts:[...n]}))};return h("div",{children:[h(Xi,{children:[t("h3",{children:"\u5206\u9875\u8BF4\u660E"}),t("p",{children:"1.\u5185\u5BB9\u8D85\u51FA\u9875\u9762\u5C3A\u5BF8\u4F1A\u81EA\u52A8\u5206\u9875;"}),t("p",{children:"2.\u53EF\u4EE5\u5728\u6307\u5B9A\u5143\u7D20\u540E\u9762\u5206\u9875\uFF0C\u5143\u7D20\u5220\u9664\u5206\u9875\u5220\u9664;"}),t("h3",{children:"\u9875\u5934\u9875\u5C3E\u8BF4\u660E"}),t("p",{children:"1.\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u4F5C\u4E3A\u9875\u5934\u9875\u5C3E;"}),t("p",{children:"2.\u9875\u5934\u9875\u5C3E\u8BBE\u7F6E\u540E\u65E0\u6CD5\u7F16\u8F91\uFF0C\u5982\u9700\u7F16\u8F91\u8BF7\u53D6\u6D88\u540E\u518D\u91CD\u65B0\u8BBE\u7F6E;"})]}),t(be,{onDragEnd:i,children:t(Z,{droppableId:"page-layouts",children:(a,n)=>h(Zi,m(y({ref:a.innerRef,isDragging:n.isDraggingOver},a.droppableProps),{children:[e.value.layouts.map((o,d)=>t(ee,{draggableId:o.id,index:d,children:(f,s)=>h(Ie,{children:[d===e.value.footer&&t("div",{children:"\u53D6\u6D88\u9875\u5C3E"}),h(en,{ref:f.innerRef,style:f.draggableProps.style,isDragging:s.isDragging,children:[t("div",m(y({},f.dragHandleProps),{children:d+1})),h("div",{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>u(o.id),children:t(D,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(lt,{overlay:h(he,{children:[t(he.Item,{onClick:()=>e.onChange(m(y({},e.value),{header:d})),children:"\u9875\u5934"}),t(he.Item,{onClick:()=>e.onChange(m(y({},e.value),{footer:d})),children:"\u9875\u5C3E"})]}),disabled:d<=e.value.header||d>=e.value.footer&&e.value.footer>0,children:t(D,{type:"primary",children:"\u8BBE\u7F6E"})}),t(D,{type:"primary",onClick:()=>e.onChangeActive(o.id),children:"\u7F16\u8F91"})]})]}),d===e.value.header&&t("div",{children:"\u53D6\u6D88\u9875\u5934"})]})},o.id)),a.placeholder]}))})})]})}const nn=g.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`,Se=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,an=g.span`
  display: inline-block;
  width: 80px;
`,un=g.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  background-color: #ff7875;
  font-size: 32px;
  height: 88px;
`;function ln(e){const[i,u]=L.exports.useState(0),a=s=>{e.onChangeActiveValue(m(y({},e.active),{value:s}))},n=s=>{e.onChangeActiveValue(m(y({},e.active),{contents:s}))},o=(s,r)=>{const{styles:l}=e.active,c=l.findIndex(x=>x.definition.key===s),v=l[c];v.value=r,l.splice(c,1,v),e.onChangeActiveValue(m(y({},e.active),{styles:l}))},d=()=>{var r;if((r=e.active)!=null&&r.contents){const l=e.active;return l.contents.length?t(Qi,{value:l.contents,onChange:n,onChangeActive:c=>e.onChangeActive(l.id,c)}):t(un,{children:"\u8BF7\u6DFB\u52A0\u5185\u5BB9"})}const s=e.active;return t(s.definition.Blueprint,{value:s.value,onChange:a,metadata:e.metadata,getData:e.getData})},f=()=>{var s;if((s=e.active)!=null&&s.contents){const r=e.value.layouts.findIndex(l=>l.id===e.active.id);e.value.layouts.splice(r,1)}else{const r=e.active,l=r.layout.contents.findIndex(v=>v.id===r.id);r.layout.contents.splice(l,1);const c=e.value.layouts.findIndex(v=>v.id===r.layout.id);r.layout.contents.length===0?e.value.layouts.splice(c,1):e.value.layouts.splice(c,1,r.layout)}e.onChange(y({},e.value))};return t(nn,{children:h(te,{activeKey:String(i),onChange:s=>u(Number(s)),centered:!0,size:"large",style:{height:"100%"},children:[t(te.TabPane,{tab:!e.active||e.active.contents?"\u5143\u7D20":"\u5C5E\u6027",children:i===0&&!!e.active&&d()},"0"),t(te.TabPane,{tab:"\u6837\u5F0F",children:i===1&&!!e.active&&[t(Se,{style:{justifyContent:"center"},children:t(D,{type:"primary",danger:!0,onClick:f,children:"\u5220\u9664"})},"button"),e.active.styles.map(s=>h(Se,{children:[t(an,{children:s.definition.title}),t(s.definition.Blueprint,{value:s.value,onChange:r=>o(s.definition.key,r)})]},s.definition.key))]},"1"),t(te.TabPane,{tab:"\u9875\u9762\u5143\u7D20",children:i===3&&t(tn,{value:e.value,onChange:e.onChange,onChangeActive:s=>{e.onChangeActive(s),u(0)}})},"3")]})})}var W=(e=>(e.Building="Building",e.Material="Material",e))(W||{}),N=(e=>(e.Layout="layout",e.Content="content",e))(N||{});const on=g.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`,dn=g.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`,rn=g.article`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto !important;
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
`,sn=g.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  position: relative;
`,cn=g.div`
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
`,hn=g.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  background-color: #ff7875;
`;function fn(e){return t(on,{children:t(dn,{children:!e.value.width&&!e.value.height?null:t(Z,{droppableId:W.Building,children:(i,u)=>h(rn,m(y({ref:i.innerRef,isDragging:u.isDraggingOver},i.droppableProps),{style:y({width:`${e.value.width}mm`,height:`${e.value.height}mm`},C.render(e.value.styles)),children:[e.value.layouts.length?e.value.layouts.map((a,n)=>t(ee,{draggableId:`${a.id}_${N.Layout}`,index:n,children:(o,d)=>{var f;return h(sn,m(y({ref:o.innerRef,isDragging:d.isDragging},o.draggableProps),{style:(f=u.draggingOverWith)!=null&&f.endsWith(N.Layout)?o.draggableProps.style:void 0,children:[t(cn,m(y({},o.dragHandleProps),{onClick:()=>e.onChangeActive(a.id),index:n,children:t("div",{children:n+1})})),t(a.definition.Building,{getData:e.getData,active:e.active,contents:a.contents,id:`${a.id}_${N.Content}`,style:C.render(a.styles),onChangeActive:s=>e.onChangeActive(a.id,s)},a.id)]}))}},a.id)):t(hn,{children:"\u8BF7\u62D6\u52A8\u5E03\u5C40\u6216\u5185\u5BB9\u8FDB\u884C\u7F16\u8F91"}),i.placeholder]}))})})})}const ae=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,ue=g.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`;function gn(e){const i=l=>{var v;const c=P.paperSizes.find(x=>x.width===l.width&&x.height===l.height||x.width===l.height&&x.height===l.width);return(v=c==null?void 0:c.title)!=null?v:"\u81EA\u5B9A\u4E49"},[u,a]=p.useState(()=>({width:e.value.width,height:e.value.height,title:i(e.value)})),n=()=>{if(!u.height){O.error("\u65B9\u5411\u5207\u6362\u5931\u8D25,\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)");return}a({title:u.title,width:u.height,height:u.width}),e.onChange(m(y({},e.value),{width:u.height,height:u.width}))},o=(l,c)=>{const v=e.value.styles.findIndex(S=>S.definition.key===l),x=e.value.styles[v];x.value=c,e.value.styles.splice(v,1,x),e.onChange(y({},e.value))},d=l=>{a({width:u.width,height:l,title:i({width:u.width,height:l})})},f=l=>{a({width:l,height:u.height,title:i({width:l,height:u.height})})},s=l=>{const c=P.paperSizes.find(v=>v.title===l);c&&(a(c),e.onChange(m(y({},e.value),{width:c.width,height:c.height})))},r=()=>{if(!u.width){O.error("\u4FEE\u6539\u5931\u8D25,\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)"),a({width:e.value.width,height:e.value.height,title:i(e.value)});return}e.onChange(m(y({},e.value),{width:e.value.width,height:e.value.height}))};return h("div",{children:[h(ae,{children:[t(ue,{children:"\u5C3A\u5BF8"}),h(A,{value:u.title,style:{width:112},onChange:s,children:[t(A.Option,{value:"",children:"\u81EA\u5B9A\u4E49"}),P.paperSizes.map(l=>t(A.Option,{value:l.title,children:l.title},l.title))]}),t(D,{type:"primary",onClick:n,children:t(ot,{})})]}),h(ae,{children:[t(ue,{children:"\u5BBD\u5EA6"}),t(R,{value:u.width,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:f,onBlur:()=>r()})]}),h(ae,{children:[t(ue,{children:"\u9AD8\u5EA6"}),t(R,{value:u.height,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:d,onBlur:()=>r()})]}),e.value.styles.map(l=>h(ae,{children:[t(ue,{children:l.definition.key===Le.key?"\u7AD6\u5411\u6392\u5217":l.definition.title}),t(l.definition.Blueprint,{value:l.value,onChange:c=>o(l.definition.key,c)})]},l.definition.key))]})}const vn=g.aside`
  width: 250px;
  color: #333;
  padding-top: 12px;
`,ge=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,yn=g.div`
`,mn=g.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`,xn=g.ul`
  padding: 10px 12px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
`,Ge=g.li`
  display: flex;
  height: 30px;
  width: 170px;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  user-select: none;
  margin-bottom: 8px;

`,pn=g(Ge)`
  + div {
    display: none !important;
  }
`;function Cn(e){const i=j(),u=()=>{e.onSave(),i("/")};return t(Z,{droppableId:W.Material,isDropDisabled:!0,children:a=>h(vn,{ref:a.innerRef,children:[h(ge,{children:[t(yn,{children:e.template.title}),t("div",{style:{flex:"auto"}}),e.updated&&t(Q,{placement:"topRight",title:"\u662F\u5426\u4FDD\u5B58\u540E\u8FD4\u56DE\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>u,onCancel:()=>i("/"),children:t(D,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})}),!e.updated&&t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),e.updated&&h(ge,{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u653E\u5F03\u4FEE\u6539\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:e.onCancel,children:t(D,{type:"primary",danger:!0,children:"\u653E\u5F03\u4FEE\u6539"})}),t("div",{style:{flex:"auto"}}),t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u4FDD\u5B58\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>e.onSave(),children:t(D,{type:"primary",children:"\u786E\u5B9A\u4FDD\u5B58"})})]}),h(ge,{children:[t(mn,{children:"\u5185\u5BB9"}),t(xn,{children:P.contents.map((n,o)=>t(ee,{draggableId:n.key,index:o,children:(d,f)=>h(Ie,{children:[t(Ge,m(y(y({ref:d.innerRef},d.draggableProps),d.dragHandleProps),{isDragging:f.isDragging,style:f.isDragging?d.draggableProps.style:{},children:n.title})),f.isDragging&&t(pn,{children:n.title})]})},n.key))})]}),t(gn,{value:e.value,onChange:e.onChange}),a.placeholder]})})}const Fn=g.div`
  display: flex;
  width: 100%;
`;function bn(){const e=j(),[i,u]=U.useDatabase(),{id:a}=Fe(),n=p.useMemo(()=>i.templates.find(b=>b.id===a),[i]);if(!n)return O.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const o=p.useMemo(()=>`RE-editTemplate-${a}`,[a]),[d,f]=p.useState(!1),s=p.useMemo(()=>i.metatables.find(b=>b.id===n.metadataId),[i]),r=p.useMemo(()=>V.flattenData(JSON.parse(s.json)),[s]),l=()=>{const b=localStorage.getItem(o)||n.json;return V.deserializePage(b||{footer:-1,header:-1,width:210,height:297,layouts:[],styles:[]})},[c,v]=p.useState(l),x=()=>{localStorage.removeItem(o),f(!1),v(l())},[S,k]=p.useState(),I=b=>{f(!0),v(b),localStorage.setItem(o,JSON.stringify(b))},_=()=>{const b=i.templates.findIndex(F=>F.id===n.id);n.json=JSON.stringify(c),i.templates.splice(b,1,n),u(i),x()},Y=(b,F)=>{const M=c.layouts.find($=>$.id===b);if(F){const $=M.contents.find(z=>z.id===F);k($)}else k(M)};return h(Fn,{children:[h(be,{onDragEnd:b=>{const{destination:F,source:M,draggableId:$}=b,z=F==null?void 0:F.droppableId,H=M.droppableId;if(!(!F||!z||z===W.Material)){if(H===W.Material){const E=P.contents.find(B=>B.key===$);if(z===W.Building){const B=me.createLayout(E,c.styles);c.layouts.splice(F.index,0,B),I(c),k(B.contents[0]);return}const w=c.layouts.find(B=>z.startsWith(B.id)),T=Ve.createContent(w,E,c.styles);if(w.definition!==J)return;w.contents.splice(F.index,0,T),k(T),I(c);return}if(H===z){const E=F.index>0&&M.index>F.index?F.index-1:0;if(H===W.Building){const q=c.layouts[M.index];c.layouts.splice(M.index,1),c.layouts.splice(F.index-E,0,q),k(q),I(c);return}const w=c.layouts.find(q=>z.startsWith(q.id)),{contents:T}=w,B=T[M.index];T.splice(M.index,1),T.splice(F.index-E,0,B),B.layout=w,k(B),I(c);return}if($.endsWith(N.Layout)&&z.endsWith(N.Content)){const E=c.layouts.findIndex(B=>$.startsWith(B.id));if(E===-1||c.layouts[E].definition!==J)return;const w=c.layouts.find(B=>z.startsWith(B.id));if(!w||w.definition!==J)return;const{contents:T}=c.layouts[E];w.contents.splice(F.index,0,...T),c.layouts.splice(E,1),I(c)}if(!$.endsWith(N.Layout)&&!$.endsWith(N.Content)){const E=c.layouts.find(B=>H.startsWith(B.id)),w=E.contents.find(B=>B.id===$),T=c.layouts.find(B=>z.startsWith(B.id));if(z===W.Building){const B=me.createLayout(J);B.contents.push(w),c.layouts.splice(F.index,0,B),w.layout=B}else if(T&&T.definition===J)T.contents.splice(F.index,0,w),w.layout=T,k(w);else return;if(E.contents.splice(M.index,1),!E.contents.length){const B=c.layouts.findIndex(q=>H.startsWith(q.id));c.layouts.splice(B,1)}I(c)}}},children:[t(Cn,{value:c,onChange:I,updated:d,onSave:_,onCancel:x,template:n}),t(fn,{value:c,getData:b=>V.getRenderData(b,s,r),onChangeActive:Y,active:S})]}),t(ln,{active:S,onChangeActiveValue:b=>{k(b);let F=c.layouts.findIndex(E=>E.id===b.id);if(F!==-1){const E=c.layouts[F];E.contents=b.contents,E.styles=b.styles,E.contents.length===0?c.layouts.splice(F,1):c.layouts.splice(F,1,E),I(c);return}const M=b;if(F=c.layouts.findIndex(E=>E.id===M.layout.id),F===-1){k(void 0),O.error("\u65E0\u6548\u7684\u4FEE\u6539,\u7F16\u8F91\u7684\u5185\u5BB9\u5DF2\u8FC7\u671F");return}const $=c.layouts[F],z=$.contents.findIndex(E=>E.id===M.id),H=$.contents[z];H.value=b.value,H.styles=b.styles,$.contents.splice(z,1,H),c.layouts.splice(F,1,$),I(c)},onChangeActive:Y,value:c,onChange:I,metadata:s,getData:b=>V.getRenderData(b,s,r)})]})}const ve="re-iframe",oe=3,xe=async(e,i,u)=>{const a=document.getElementById(ve);a&&document.body.removeChild(a);const n=document.createElement("iframe");n.id=ve,n.style.visibility="hidden",n.style.position="absolute",n.style.top="0px",n.srcdoc=`<!DOCTYPE html>
      <html lang="en" style="font-size: ${oe*100}px">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style> * { padding: 0; margin: 0; } </style>
        </head>
        <body>
          <div id="app" style="width: ${i*oe}mm; height: ${u*oe}mm">${e}</div>
        </body>
      </html>
    `,document.body.appendChild(n),await new Promise(f=>{const s=setInterval(()=>{n.contentDocument&&n.contentDocument.getElementById("app")&&(clearInterval(s),f(void 0))},100)});const o=await dt(n.contentDocument.getElementById("app")),d=document.getElementById(ve);return d&&document.body.removeChild(d),Promise.resolve(o)},Bn=async(e,i,u)=>{const a=e.offsetHeight;if(u===0)return xe(e.innerHTML,i,u).then(f=>[f]);const n=[""];let o=a;for(let f=0;f<e.children.length;f+=1){const s=e.children[f],r=s.scrollHeight;if(s.nodeName==="BR")n.push("");else if(s.nodeName!=="TABLE")if(r>o)o=a-r,n.push(s.outerHTML);else if(r>=a)n.push(s.outerHTML),o=a;else{o-=r;const l=n.length-1,c=`${n[l]}${s.outerHTML}`;n.splice(l,1,c)}}const d=[];for(const f of n.filter(s=>s)){const s=await xe(f,i,u);d.push(s)}return d},En=(e,i,u)=>{if(e.length===0)return;const a=new rt({unit:"mm",format:[i,u]});for(let n=0;n<e.length;n+=1){const d=e[n].toDataURL("image/jpeg",1);n!==0&&a.addPage(),a.setPage(n+1),a.addImage(d,"JPEG",0,0,i,u)}a.save("report.pdf")},Dn=(e,i,u)=>{const a=window.open("","print"),n=`${i}mm`;a.document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; overflow: auto; }
          html { font-size: ${oe*100}px }
          body { width: ${n}; height: ${u*e.length}mm; overflow: hidden; display: flex; flex-direction: column; }
          img { width: ${n}; height: ${u?`${u}mm`:"auto"}; }
          </style>
        </head>
        <body>
          ${e.map(o=>`<img src="${o.toDataURL("image/jpeg")}" alt="" />`).join("")}
        </body>
      </html>
    `),setTimeout(()=>{a.print(),a.close()},200)};var ye={htmlToCanvas:xe,elementToCanvas:Bn,downloadPDF:En,print:Dn};const An=g.div`
  width: ${e=>e.width}mm;
  border-right: 1px solid #ebe0e0;
  background-color: beige;
  box-sizing: content-box;
`,wn=g.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
`,$n=g.div`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  overflow: auto;
  background-color: antiquewhite;
  visibility: hidden;
  position: absolute;
  top: 0;
`,zn=g.img`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  margin: 15px 0;
`,Sn=3;function kn(e){const i=j(),u=V.flattenData(e.data),a=L.exports.useRef(null),[n,o]=L.exports.useState([]);L.exports.useEffect(()=>{!a.current||ye.elementToCanvas(a.current,e.page.width,e.page.height).then(r=>{o(r)})},[e.data]);const d=r=>V.getRenderData(r,e.metadata,u),f=()=>{ye.downloadPDF(n,e.page.width,e.page.height)},s=()=>{ye.print(n,e.page.width,e.page.height)};return h(An,{width:e.page.width,children:[h(wn,{children:[t(D,{type:"primary",onClick:()=>f(),children:"PDF\u4E0B\u8F7D"}),t(D,{type:"primary",onClick:()=>s(),children:"\u6253\u5370"}),t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),n.map((r,l)=>t(zn,{src:r.toDataURL("image/jpeg",1/Sn),alt:"",width:e.page.width,height:e.page.height},l)),t($n,{ref:r=>{a.current=r},width:e.page.width,height:e.page.height,children:e.page.layouts.map(r=>t(r.definition.Render,{style:C.render(r.styles),contents:r.contents,getData:d},r.id))})]})}const In=g.div`
  display: flex;
  flex: auto;
`;function Mn(){const e=j(),[i]=U.useDatabase(),{id:u}=Fe(),a=i.templates.find(s=>s.id===u);if(!a)return O.error("\u6253\u5370\u6A21\u677F\u5DF2\u8FC7\u671F"),e("/"),null;if(!a.json)return O.error("\u8BF7\u5148\u7F16\u8F91\u6A21\u677F\u540E\u9884\u89C8"),e("/"),null;const n=p.useMemo(()=>V.deserializePage(a.json),[]),o=p.useMemo(()=>i.metatables.find(s=>s.id===a.metadataId),[]),[d,f]=L.exports.useState(()=>JSON.parse(o.json));return h(In,{children:[t(kn,{page:n,data:d,metadata:o}),t(Pe,{value:d,onChange:s=>f(s||JSON.parse(o.json))})]})}function Tn(){const e=p.useRef();e.current==null&&(e.current=st({window}));const i=e.current,[u,a]=p.useState({action:i.action,location:i.location});return p.useLayoutEffect(()=>i.listen(a),[i]),t(ct,{basename:"report-editor",location:u.location,navigationType:u.action,navigator:i,children:h(ht,{children:[h(G,{path:"/",element:t(Me,{}),children:[t(G,{path:"/metadata/:id",element:t(Xt,{})}),t(G,{path:"/template/:id",element:t(bn,{})}),t(G,{path:"/preview/:id",element:t(Mn,{})}),t(G,{path:"/",element:t(Jt,{})})]}),t(G,{path:"*",element:t(bt,{})})]})})}function Pn(){return t(Tn,{})}ft.render(t(p.StrictMode,{children:t(Pn,{})}),document.getElementById("root"));
