var Ue=Object.defineProperty,_e=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var Ae=(e,i,n)=>i in e?Ue(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,y=(e,i)=>{for(var n in i||(i={}))Ke.call(i,n)&&Ae(e,n,i[n]);if(De)for(var n of De(i))Qe.call(i,n)&&Ae(e,n,i[n]);return e},m=(e,i)=>_e(e,Ye(i));import{s as g,u as j,j as h,a as t,G as Xe,O as Ze,R as et,B as D,b as p,h as ke,v as pe,I as X,m as O,S as A,l as de,T as K,c as Ce,d as oe,J as tt,e as it,f as be,r as R,E as nt,A as at,g as L,C as Z,P as ee,i as lt,D as Fe,k as Q,F as Ie,n as ot,M as he,o as te,p as ut,q as dt,t as rt,w as st,x as ct,y as ht,z as G,H as ft}from"./vendor.43e1a4bd.js";const gt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerpolicy&&(u.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?u.credentials="include":a.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}};gt();var vt="/report-editor/assets/logo.3489b067.png";const yt=g.div`
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
`,bt=g.div`
  margin: 0 auto;
  display: flex;
  height: calc(100vh - var(--header-h));
  justify-content: center;
`;function Me(e){return h(Ct,{children:[t(pt,{}),h(bt,{children:[t(Ze,{}),e.children]})]})}function Ft(){const e=j();return t(Me,{children:t(et,{status:"404",title:"404",subTitle:"\u6CA1\u6709\u627E\u5230\u5185\u5BB9",extra:t(D,{type:"primary",onClick:()=>e("/"),children:"\u8FD4\u56DE\u9996\u9875"})})})}const Bt=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-02-12 10:10:30",items:[{id:1,path:"author",required:!0},{id:2,path:"components[]",required:!0},{id:3,path:"description[]",required:!0},{id:4,path:"github",required:!0},{id:5,path:"status",required:!0},{id:6,path:"title",required:!0}],json:'{"title":"\u62A5\u544A\u7F16\u8F91\u5668","author":"ansoxlu","github":"https://github.com/ansoxlu/report-editor","status":"\u5F00\u53D1\u4E2D","description":["\u8BE5\u9879\u76EE\u4EE5\u52A8\u6001\u6570\u636E\u751F\u6210PDF\u62A5\u544A\u6587\u4EF6\u4E3A\u76EE\u6807","\u5141\u8BB8A4/A5\u7B49\u6807\u51C6\u6216\u81EA\u5B9A\u4E49\u7EB8\u5F20\u683C\u5F0F","\u5141\u8BB8\u81EA\u52A8\u5206\u9875/\u56FA\u5B9A\u5206\u9875/\u9875\u5934\u9875\u5C3E"],"components":["1.\u6587\u672C","2. \u56FE\u7247(\u5F85\u5B8C\u6210)","3. \u4E00\u7EF4\u7801(\u5F85\u5B8C\u6210)","4. \u4E8C\u7EF4\u7801(\u5F85\u5B8C\u6210)","5. \u8868\u683C(\u5F85\u5B8C\u6210)","6. \u81EA\u5B9A\u4E49\u8868\u683C(\u9690\u85CF\u5C5E\u6027)(\u5F85\u5B8C\u6210)"]}'}],Et=[{id:"example",title:"\u9879\u76EE\u7B80\u4ECB",description:"\u6682\u65E0\u8BF4\u660E",createdAt:"2022-01-01 01:02:03",updatedAt:"2022-01-01 01:02:03",metadataId:"example",json:'{"footer":-1,"header":-1,"width":210,"height":297,"listIndexes":[],"pageIndexes":[],"styles":[{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"Ellipsis","value":false},{"definition":"Color","value":"#000"}],"layouts":[{"contents":[{"value":"${title}","id":"7d5355d7-3557-4f93-a7c5-1c43c23c0811","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"center"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":28},{"definition":"FontWeight","value":800},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":10},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":20,"left":0,"right":0,"top":30}},{"definition":"Border","value":{"bottom":{"size":3,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d22c618e-731b-4491-93c7-3c39e24e4e8e","definition":"Text"}],"id":"d22c618e-731b-4491-93c7-3c39e24e4e8e","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u4F5C\u8005\uFF1A ${author}","id":"a20f698f-7505-4ba9-b2b3-220f7e2dc3d3","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":20}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"44b12a83-452a-4b72-a1b7-e00ce6dac700","definition":"Text"}],"id":"44b12a83-452a-4b72-a1b7-e00ce6dac700","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u72B6\u6001\uFF1A${status}","id":"1294eaa1-254b-4e79-a6ce-fca2a3ad0502","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"dd1772ec-8e51-4b3b-954c-2a30beef3945","definition":"Text"}],"id":"dd1772ec-8e51-4b3b-954c-2a30beef3945","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u5730\u5740\uFF1A${github}","id":"0c451498-d2a7-4e21-b10b-654c7dadd494","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":30,"left":50,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","definition":"Text"}],"id":"28cd69a5-c2e7-4190-9def-0ed2bc2871ab","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u8BF4\u660E\uFF1A","id":"3ef45054-252a-43b2-9a91-b5fa61e39655","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"},{"value":"${description[]}","id":"9ac80ad3-a2e2-4467-b6db-3648980d319b","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"617c209b-58ee-4e29-b274-81659a63a620","definition":"Text"}],"id":"617c209b-58ee-4e29-b274-81659a63a620","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}}],"definition":"Many"},{"contents":[{"value":"\u7EC4\u4EF6\uFF1A","id":"3e2953a8-480d-4e71-80e3-d3a025bf6eee","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-end"},{"definition":"AlignItems","value":"flex-start"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":100,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"},{"value":"${components[]}","id":"419e6600-09b8-42b5-92f3-cd9d8aa21e11","styles":[{"definition":"FlexDirection","value":"row"},{"definition":"JustifyContent","value":"flex-start"},{"definition":"AlignItems","value":"center"},{"definition":"FlexGrow","value":1},{"definition":"FontSize","value":18},{"definition":"FontWeight","value":400},{"definition":"TextIndent","value":0},{"definition":"LetterSpacing","value":0},{"definition":"Color","value":"#000"},{"definition":"Ellipsis","value":false},{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MinWidth","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxWidth","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":0}},{"definition":"Border","value":{"bottom":{"size":0,"color":"#000","style":"solid"},"left":{"size":0,"color":"#000","style":"solid"},"right":{"size":0,"color":"#000","style":"solid"},"top":{"size":0,"color":"#000","style":"solid"}}}],"layout":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","definition":"Text"}],"id":"d7eaccbd-0c72-411a-afa4-286a0a5d951f","styles":[{"definition":"MinHeight","value":{"size":0,"unit":"px"}},{"definition":"MaxHeight","value":{"size":0,"unit":"px"}},{"definition":"Padding","value":{"bottom":0,"left":0,"right":0,"top":30}}],"definition":"Many"}]}'}],Dt={metatables:Bt,templates:Et},At=()=>{const e="RE-database",[i,n]=p.useState(()=>{const a=localStorage.getItem(e);return a?JSON.parse(a):Dt});return[i,a=>{localStorage.setItem(e,JSON.stringify(a)),n(a)}]};var U={useDatabase:At};const wt=g.div`
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
`;function re(e){const[i,n]=p.useState(()=>{var a;return(a=e.value)!=null?a:{id:pe(),title:"",description:"",createdAt:"",updatedAt:""}});p.useEffect(()=>{e.value&&n(Object.assign(i,e.value))},[e.value]);const l=()=>{if(!i.title){O.error("\u8BF7\u8F93\u5165\u6807\u9898");return}const a=kt();e.onOk(m(y({},i),{createdAt:i.createdAt||a,updatedAt:a}))};return h(It,{children:[h(Mt,{children:[t("div",{children:"* \u8BF7\u8F93\u5165\u6807\u9898\uFF1A"}),t(X,{value:i.title,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",onChange:a=>n(m(y({},i),{title:a.target.value}))}),e.children,t(D,{type:"primary",onClick:()=>l(),children:e.value?"\u786E\u5B9A\u4FDD\u5B58":"\u786E\u5B9A\u65B0\u589E"}),e.value&&t(D,{type:"primary",onClick:()=>e.onCancel&&e.onCancel(),children:"\u53D6\u6D88\u4FEE\u6539"})]}),h(Tt,{children:[t("p",{children:"\u8BF7\u8F93\u5165\u8BF4\u660E:"}),t(X.TextArea,{value:i.description,onChange:a=>n(m(y({},i),{description:a.target.value})),autoSize:{minRows:2,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u8BF4\u660E"})]})]})}function Pt(){const e=j(),[i,n]=U.useDatabase(),[l,a]=p.useState(),[u,d]=p.useState(),f=r=>{var s,v;const o=u?i.metatables.find(x=>x.id===u):void 0;i.metatables.push(m(y({},r),{items:(s=o==null?void 0:o.items)!=null?s:[],json:(v=o==null?void 0:o.json)!=null?v:"{}"})),n(i),d(void 0)},c=r=>{const o=i.metatables.findIndex(s=>s.id===r.id);o!==-1&&(i.metatables.splice(o,1,r),n(i)),a(void 0)};return h("div",{children:[t(re,{onOk:f,children:t(A,{placeholder:"\u590D\u5236\u5DF2\u6709\u6570\u636E\u683C\u5F0F",allowClear:!0,style:{width:170},onChange:d,children:i.metatables.map(r=>t(A.Option,{value:r.id,children:r.title},r.id))})}),i.metatables.map(r=>(l==null?void 0:l.id)===r.id?t(re,{value:l,onOk:o=>c(o),onCancel:()=>a(void 0)},r.id):h(Be,{children:[h("div",{children:[t("div",{children:r.title}),t("div",{}),t("div",{children:r.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>a(r),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),h("div",{children:[t("div",{children:r.description}),t("div",{}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/metadata/${r.id}`),children:"\u6570\u636E\u5B9A\u4E49"})})]})]},r.id))]})}function Ot(){const e=j(),[i,n]=U.useDatabase(),[l,a]=p.useState(),[u,d]=p.useState(),[f,c]=p.useState(),r=v=>{const x=i.templates.find(S=>S.id===v);c(x.id),u||d(x.metadataId)},o=v=>{var S;if(!u){O.error("\u8BF7\u9009\u62E9\u6570\u636E\u6E90");return}const x=f?(S=i.templates.find(k=>k.id===f))==null?void 0:S.json:void 0;i.templates.push(m(y({},v),{json:x,metadataId:u})),n(i)},s=v=>{const x=i.templates.findIndex(S=>S.id===v.id);x!==-1&&(i.templates.splice(x,1,v),n(i)),a(void 0)};return h("div",{children:[h(re,{onOk:o,children:[t(A,{value:u,placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u6E90",style:{width:170},onChange:d,children:i.metatables.map(v=>t(A.Option,{value:v.id,children:v.title},v.id))}),t(A,{placeholder:"\u590D\u5236\u5DF2\u6709\u6A21\u677F\u6570\u636E",style:{width:170},onChange:r,children:i.templates.map(v=>t(A.Option,{value:v.id,children:v.title},v.id))})]}),i.templates.map(v=>(l==null?void 0:l.id)===v.id?t(re,{value:l,onOk:x=>s(x),onCancel:()=>a(void 0)},v.id):h(Be,{children:[h("div",{children:[t("div",{children:v.title}),t("div",{}),t("div",{children:v.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>a(v),children:"\u4FE1\u606F\u7F16\u8F91"})})]}),h("div",{children:[t("div",{children:v.description}),t("div",{}),t("div",{children:t(D,{disabled:!v.json,type:"primary",onClick:()=>e(`/preview/${v.id}`),style:{marginRight:24},children:"\u6253\u5370\u9884\u89C8"})}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/template/${v.id}`),children:"\u6A21\u677F\u5B9A\u4E49"})})]})]},v.id))]})}function jt(){const e=j(),[i]=U.useDatabase();return t("div",{children:i.templates.filter(n=>n.json).map(n=>h(Be,{children:[h("div",{children:[t("div",{children:n.title}),t("div",{}),t("div",{children:n.updatedAt}),t("div",{children:t(D,{type:"primary",onClick:()=>e(`/preview/${n.id}`),children:"\u9884\u89C8\u8DF3\u8F6C"})})]}),t("div",{children:t("div",{children:n.description})})]},n.id))})}const Ht=g.div`
  width: var(--content-w);
  display: flex;
  padding: 30px 0;
`,Rt=g.aside`
  width: 300px;
  margin-right: 30px;
  border-radius: 6px;
`,Lt=g.article`
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
`,fe=[{key:"Metadata",title:"\u6570\u636E\u6A21\u677F",description:"\u6253\u5370\u6A21\u677F\u9700\u8981\u6CE8\u5165\u52A8\u6001\u6570\u636E,\u5728\u6B64\u4E4B\u524D\u4F60\u9700\u8981\u7F16\u8F91\u6570\u636E\u683C\u5F0F,\u7528\u4E8E\u9A8C\u8BC1\u6E32\u67D3\u65F6\u7684\u683C\u5F0F\u548C\u6CE8\u5165",Element:Pt},{key:"Template",title:"\u6253\u5370\u6A21\u677F",description:"\u5B8C\u6210\u6570\u636E\u683C\u5F0F\u7F16\u8F91\u540E,\u5F00\u59CB\u7F16\u8F91\u6A21\u677F, \u7F16\u8F91\u89C6\u56FE\u548C\u6548\u679C\u89C6\u56FE\u6709\u6240\u533A\u522B,\u201C\u6253\u5370\u9884\u89C8\u201D\u67E5\u770B\u6700\u7EC8\u6548\u679C",Element:Ot},{description:"",key:"Preview",title:"\u6253\u5370\u9884\u89C8",Element:jt}];function Jt(){const[e,i]=p.useState(fe[0].key),n=p.useMemo(()=>fe.find(l=>l.key===e),[e]);return h(Ht,{children:[t(Rt,{children:fe.map((l,a)=>t(Wt,{index:a,isActive:e===l.key,onClick:()=>i(l.key),children:l.title},l.title))}),h(Lt,{children:[t(Nt,{children:n.description}),t(n.Element,{})]})]})}const Vt=g.div`
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
`,we={add:{color:"#87d068",title:"\u6DFB\u52A0"},delete:{color:"#f50",title:"\u5220\u9664"},update:{color:"#2db7f5",title:"\u4FEE\u6539"},normal:{color:void 0,title:"\u65E0"}};function Ut(e){const i=j(),[n,l]=p.useState([]);p.useEffect(()=>{const d={},f=(r,o)=>{if(o==null){d[r]=!1;return}if(["string","number","boolean"].includes(typeof o)){d[r]===void 0&&(d[r]=!0);return}if(Array.isArray(o)){if(o.length===0)return;if(!o[0]||typeof o[0]!="object"){d[`${r}[]`]=!0;return}o.forEach(s=>{Object.entries(s).forEach(([v,x])=>{if(x==null){d[`${r}[].${v}`]=!1;return}["string","number","boolean"].includes(typeof x)&&d[r]===void 0&&(d[r]=!0)})});return}Object.entries(o).forEach(([s,v])=>{f(`${r}${r?".":""}${s}`,v)})};f("",e.json);const c=e.value.items.map(r=>({id:r.id,path:r.path,alias:r.alias,status:d[r.path]===void 0?"delete":"normal",required:r.required}));Object.keys(d).forEach(r=>{c.find(s=>s.path===r)||c.push({path:r,status:"add",required:d[r]})}),l(de.exports.sortBy(c,"path"))},[e.json,e.value.items]);const a=()=>{var c;if(n.length===0){O.error("\u8BF7\u8F93\u5165JSON\u8FDB\u884C\u7F16\u8F91");return}let d=((c=de.exports.maxBy(n,r=>{var o;return(o=r==null?void 0:r.id)!=null?o:0}))==null?void 0:c.id)||0;const f=n.filter(r=>r.status!=="delete").map(r=>(r.id||(d+=1),{id:d,path:r.path,alias:r.alias,required:r.required}));e.onChange(m(y({},e.value),{items:f,updatedAt:St(),json:JSON.stringify(e.json)}))},u=d=>{const f=d,c=n.findIndex(o=>o.path===f.path),r=e.value.items[c];f.status!=="add"&&(f.required!==r.required||f.alias!==r.alias?f.status="update":f.status="normal"),n.splice(c,1,f),l([...n])};return h(Vt,{children:[h(qt,{children:[h("div",{children:[t("div",{children:e.value.title}),t("div",{}),t("div",{children:t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})}),t("div",{children:n.find(d=>d.status!=="normal")&&t(D,{type:"primary",onClick:a,children:"\u4FDD\u5B58"})})]}),t("div",{children:e.value.description})]}),t(Gt,{children:h(K,{dataSource:n,pagination:!1,rowKey:"path",children:[t(K.Column,{title:"\u8DEF\u5F84",dataIndex:"path"}),t(K.Column,{title:"\u522B\u540D",dataIndex:"alias",align:"center",render:(d,f)=>t(X,{value:d,onChange:c=>u(m(y({},f),{alias:c.target.value||void 0}))})}),t(K.Column,{title:"\u662F\u5426\u5FC5\u9700",dataIndex:"required",align:"center",render:(d,f)=>t(Ce,{checked:d,checkedChildren:"\u662F",unCheckedChildren:"\u5426",onChange:c=>u(m(y({},f),{required:c}))})}),t(K.Column,{title:"\u72B6\u6001\u53D8\u66F4",dataIndex:"status",align:"center",render:d=>t(oe,{color:we[d].color,children:we[d].title})})]})})]})}const _t=g.div`
  display: flex;
  flex-direction: column;
  color: #000
`;function Pe(e){const i=n=>{if(!n.error){if(!n.json){e.onChange(n.jsObject||{},"{}");return}if(Array.isArray(n.jsObject)){O.error("\u6570\u636E\u4E0D\u662FJSON\u5BF9\u8C61");return}e.onChange(n.jsObject,n.json)}};return t(_t,{children:t(tt,{id:"json-editor",placeholder:e.value,onChange:n=>i(n),colors:{default:"#000",background:"#FCFDFD",background_warning:"#000",string:"#FA7921",number:"#70CE35",colon:"#49B8F7",keys:"#59A5D8",keys_whiteSpace:"#835FB6",primitive:"#386FA4",error:"#e30b0b"},locale:it,width:"100%",height:"100%"})})}const Yt=g.div`
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
`;function Xt(){const e=j(),[i,n]=U.useDatabase(),{id:l}=be(),a=p.useMemo(()=>i.metatables.find(o=>o.id===l),[i]);if(!a)return O.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const u=p.useMemo(()=>`RE-editMetadata-${l}`,[l]),[d,f]=p.useState(()=>JSON.parse(localStorage.getItem(u)||a.json||"{}")),c=o=>{localStorage.setItem(u,JSON.stringify(o)),f(d)};return h(Yt,{children:[t(Kt,{children:t(Ut,{value:a,onChange:o=>{const s=i.metatables.findIndex(v=>v.id===o.id);i.metatables.splice(s,1,o),n(i),localStorage.removeItem(u)},json:d})}),t(Qt,{children:t(Pe,{value:d,onChange:o=>c(o)})})]})}const Zt=e=>`${e/100}rem`,ei=e=>e.reduce((i,n)=>Object.assign(i,n.definition.render(n.value)),{display:"flex"}),ti=["FlexDirection","JustifyContent","AlignItems","FlexGrow","MinHeight","MinWidth","MaxHeight","MaxWidth"];function ii(e){return e.reduce((i,n)=>ti.includes(n.definition.key)?Object.assign(i,n.definition.render(n.value)):i,{display:"flex"})}function ni(e,i,n){if(i.definition){const a=i;return{value:n!=null?n:a.value,definition:e.find(u=>u.key===a.definition),toJSON(){return{definition:this.definition.key,value:this.value}}}}const l=i;return{value:de.exports.cloneDeep(l.defaultValue),definition:l,toJSON(){return{definition:this.definition.key,value:n!=null?n:this.value}}}}var B={rem:Zt,render:ei,renderLayout:ii,createStyle:ni};const ai=g.div`
`,li=g.div`
  position: relative;
  ${e=>e.focus?"z-index: 3;":""}
`,oi=g.div`
  position: absolute;
  z-index: 2;
`,ui=g.div`
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
`;function ci(e){const[i,n]=R.exports.useState(!1),[l,a]=R.exports.useState({value:"",items:[]}),u=R.exports.useRef(null),d=o=>{if(e.type==="object")return O.warn("\u8BF7\u70B9\u51FB\u6570\u636E\u6E90\u8FDB\u884C\u8F93\u5165");e.onChange(o)},f=o=>{const s=e.metadata.items.filter(v=>{var x;return v.path.includes(o)||((x=v.alias)==null?void 0:x.includes(o))});a({value:o,items:s})},c=()=>{n(!0)},r=o=>{var x,S,k;if(e.type==="object")return e.onChange(o.path);const s=(k=(S=(x=u.current)==null?void 0:x.resizableTextArea)==null?void 0:S.textArea.selectionStart)!=null?k:0,v=`\${${o.alias?`${o.alias}[${o.id}]`:o.path}}`;if(s===0)e.onChange(`${v}${e.value}`),u.current.resizableTextArea.textArea.selectionStart=0;else if(s===e.value.length)e.onChange(`${e.value}${v}`);else{const I=e.value.substring(0,s),_=e.value.substring(s),Y=/\${[^}]+$/g.exec(I),ce=/((?!\${).)}/.exec(_);Y&&ce?e.onChange(`${I.substring(0,Y.index)}${v}${_.substring(ce.index+2)}`):e.onChange(`${I}${v}${_}`)}};return h(ai,{children:[t(li,{focus:i,children:t(X.TextArea,{ref:o=>{u.current=o},style:{height:e.type==="object"?60:150},placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",value:e.value,onChange:o=>d(o.target.value),onFocus:c})}),i&&h(oi,{children:[t(ui,{onClick:()=>n(!1)}),h(di,{children:[h(ri,{onClick:()=>window.open(`/metadata/${e.metadata.id}`),children:["\u6570\u636E\u6E90",t(nt,{})]}),t(X,{allowClear:!0,value:l.value,onChange:o=>f(o.target.value),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"}),(e.metadata.items.length===0||l.value&&l.items.length===0)&&t("div",{children:"\u65E0\u5185\u5BB9"}),e.metadata.items.map((o,s)=>{var v;return h(si,{onClick:()=>r(o),children:[h("div",{children:[t(at,{content:o.path,trigger:"hover",placement:"left",children:t("p",{children:t(oe,{color:"blue",children:(v=o==null?void 0:o.alias)!=null?v:o.path})})}),t("p",{}),h("p",{children:[o.required&&t(oe,{color:"cyan",children:"\u5FC5\u586B"}),!o.required&&t(oe,{color:"red",children:"\u9009\u586B"})]})]}),t("div",{children:t("p",{children:e.getData(`\${${o.path}}`)})})]},s)})]})]})]})}const hi={key:"Text",defaultValue:"",styles:[],description:"\u5355\u72EC\u7684\u6587\u672C.\u7528\u4E8E\u533B\u9662\u6807\u9898,\u63D0\u793A\u4FE1\u606F\u7B49\u5185\u5BB9",title:"\u6587\u672C",Blueprint(e){return t(ci,{metadata:e.metadata,value:e.value,onChange:e.onChange,getData:e.getData})},Render(e){if(!e.result)return t("span",{style:{display:"none"}});const i=e.style.flexDirection,n=e.result.split(`
`).filter(l=>l);return i==="column"?t("div",{style:e.style,children:(n.length>1?n:Array.from(e.result)).map((l,a)=>t("div",{children:l},String(a)))}):t("div",{style:e.style,children:t("div",{children:n.map((l,a)=>h("span",{children:[l,t("br",{})]},a))})})},Building(e){if(!e.result)return t("div",{children:e.value});const i=e.style.flexDirection,n=e.result.split(`
`).filter(l=>l);return i==="column"?t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:(n.length>1?n:Array.from(e.result)).map((l,a)=>t("div",{children:l},a))}):t("div",{style:e.style,onClick:()=>e.onChangeActive(),children:t("div",{children:n.map((l,a)=>h("span",{children:[l,t("br",{})]},a))})})}};function fi(e){return h(A,{value:e.value,onChange:e.onChange,children:[t(A.Option,{value:"px",children:"px"}),t(A.Option,{value:"%",children:"%"})]})}const se={Blueprint(e){return t(L,{min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(y({},e.value),{size:Number(i)})),addonAfter:t(fi,{value:e.value.unit,onChange:i=>e.onChange(m(y({},e.value),{unit:i}))})})},defaultValue:{size:0,unit:"px"}},Oe=m(y({},se),{render(e){const i=e.unit==="px"?B.rem(e.size):`${e.size}${e.unit}`;return{minHeight:e.size?i:"auto"}},title:"\u6700\u5C0F\u9AD8",description:"",key:"MinHeight"}),je=m(y({},se),{render(e){const i=e.unit==="px"?B.rem(e.size):`${e.size}${e.unit}`;return{maxHeight:e.size?i:"none"}},title:"\u6700\u5927\u9AD8",description:"",key:"MaxHeight"}),gi=g.div`
  flex: auto;
`;function ie(e){return t(L,{addonBefore:e.title,min:"0",max:"999",style:{width:"100%"},value:String(e.value),onChange:i=>e.onChange(Number(i))})}const He={Blueprint(e){return h(gi,{children:[t(ie,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(y({},e.value),{top:i}))}),t(ie,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(y({},e.value),{bottom:i}))}),t(ie,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(y({},e.value),{left:i}))}),t(ie,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(y({},e.value),{right:i}))})]})},render(e){return{paddingTop:B.rem(e.top),paddingBottom:B.rem(e.bottom),paddingLeft:B.rem(e.left),paddingRight:B.rem(e.right)}},defaultValue:{bottom:0,left:0,right:0,top:0},title:"\u8FB9\u8DDD",description:"",key:"Padding"},vi=g.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  ${e=>e.isActive?"background-color: springgreen":""}
`,yi=g.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  position: relative;
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
`,J={Render(e){return t("div",{style:e.style,children:e.contents.map((i,n)=>t(i.definition.Render,{style:B.render(i.styles),result:e.getData(i.value)},n))})},Building(e){return t(Z,{droppableId:e.id,direction:"horizontal",children:(i,n)=>h(vi,{style:e.style,ref:i.innerRef,isDragging:n.isDraggingOver,isActive:!!e.active&&e.id.startsWith(e.active.id),children:[e.contents.length?e.contents.map((l,a)=>t(ee,{draggableId:l.id,index:a,children:(u,d)=>{var f;return t(yi,m(y(y({ref:u.innerRef,isDragging:d.isDragging,isActive:((f=e.active)==null?void 0:f.id)===l.id},u.draggableProps),u.dragHandleProps),{style:Object.assign(u.draggableProps.style,B.renderLayout(l.styles)),children:l.value?t(l.definition.Building,{style:B.render(l.styles),value:l.value,result:e.getData(l.value)||l.value,onChangeActive:()=>e.onChangeActive(l.id)},a):t($e,{onClick:()=>e.onChangeActive(l.id),children:"\u672A\u914D\u7F6E\u5C5E\u6027"},a)}))}},l.id)):t($e,{children:"\u8BF7\u62D6\u52A8\u5185\u5BB9\u8FDB\u884C\u5143\u7D20\u6DFB\u52A0"}),i.placeholder]})})},description:"\u9875\u9762\u662F\u7AD6\u5411\u6392\u5217\uFF0C\u4F7F\u7528\u8BE5\u5E03\u5C40\u6DFB\u52A0\u6A2A\u5411\u5185\u5BB9",styles:[Oe,je,He],title:"\u7EB5\u5411\u591A\u5185\u5BB9\u6392\u5217",key:"Many"},mi={title:"\u65B9\u5411",defaultValue:"row",description:"",Blueprint(e){return t(Ce,{checked:e.value==="row",checkedChildren:"\u6A2A",unCheckedChildren:"\u7AD6",onChange:i=>e.onChange(i?"row":"column")})},render(e){return{flexDirection:e}},key:"FlexDirection"},xi={Blueprint(e){return t(L,{min:"0",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{flexGrow:e}},defaultValue:1,title:"\u4E3B\u65B9\u5411\u5360\u6BD4",description:"",key:"FlexGrow"},pi=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"},{title:"\u95F4\u8DDD\u76F8\u7B49",value:"space-between"},{title:"\u56F4\u7ED5\u95F4\u9694",value:"space-around"},{title:"\u8FB9\u8DDD\u76F8\u7B49",value:"space-evenly"}],Re={Blueprint(e){return t(A,{value:e.value,onChange:e.onChange,style:{width:190},children:pi.map((i,n)=>t(A.Option,{value:i.value,children:i.title},n))})},render(e){return{justifyContent:e}},title:"\u4E3B\u65B9\u5411\u6392\u5217",defaultValue:"flex-start",description:"",key:"JustifyContent"},Ci=[{title:"\u5F00\u59CB",value:"flex-start"},{title:"\u5C45\u4E2D",value:"center"},{title:"\u7ED3\u675F",value:"flex-end"}],bi={Blueprint(e){return t(A,{value:e.value,onChange:i=>e.onChange(i),style:{width:190},children:Ci.map(i=>t(A.Option,{value:i.value,children:i.title},i.value))})},render(e){return{alignItems:e}},title:"\u526F\u65B9\u5411\u6392\u5217",defaultValue:"center",description:"",key:"AlignItems"},Le={Blueprint(e){return t(L,{min:"12",max:"99",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{fontSize:B.rem(e)}},defaultValue:14,description:"",title:"\u5B57\u4F53\u5927\u5C0F",key:"FontSize"},We={Blueprint(e){return t(A,{value:e.value,onChange:e.onChange,style:{width:190},children:[400,500,600,700,800,900].map((i,n)=>t(A.Option,{value:i,children:i},n))})},render(e){return{fontWeight:e}},defaultValue:400,description:"",title:"\u5B57\u4F53\u7C97\u7EC6",key:"FontWeight"},Fi={Blueprint(e){return t(L,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},render(e){return{textIndent:B.rem(e)}},defaultValue:0,description:"",title:"\u9996\u884C\u7F29\u8FDB",key:"TextIndent"},Bi={Blueprint(e){return t(L,{min:"0",max:"999",style:{width:190},value:String(e.value),onChange:i=>e.onChange(Number(i))})},defaultValue:0,description:"",key:"LetterSpacing",render(e){return{letterSpacing:e}},title:"\u6587\u5B57\u95F4\u9694"},Ei=m(y({},se),{render(e){const i=e.unit==="px"?B.rem(e.size):`${e.size}${e.unit}`;return{minWidth:e.size?i:"auto"}},title:"\u6700\u5C0F\u5BBD",description:"",key:"MinWidth"}),Di=g.div`
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
`,Ee={Blueprint(e){const[i,n]=R.exports.useState(!1);return h(Di,{children:[t(Ai,{color:e.value,onClick:()=>n(!0)}),i&&h(wi,{children:[t($i,{onClick:()=>n(!1)}),t(lt,{color:e.value,onChange:l=>e.onChange(l.hex)})]})]})},render(e){return{color:e}},defaultValue:"#000",description:"",title:"\u5B57\u4F53\u989C\u8272",key:"Color"},Ne={Blueprint(e){return t(Ce,{checked:e.value,checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",onChange:i=>e.onChange(i)})},render(e){return{overflow:e?"hidden":"unset",textOverflow:e?"ellipsis":"unset",whiteSpace:"nowrap"}},defaultValue:!1,description:"\u914D\u7F6E\u6700\u5927\u5BBD/\u9AD8\u4F7F\u7528",title:"\u8D85\u51FA\u7701\u7565",key:"Ellipsis"},zi=m(y({},se),{render(e){const i=e.unit==="px"?B.rem(e.size):`${e.size}${e.unit}`;return{maxWidth:e.size?i:"none"}},title:"\u6700\u5927\u5BBD",description:"",key:"MaxWidth"}),Si=g.div`
  flex: auto;
`,ki=g.div`
  display: flex;

  > div:last-child {
    width: 58px;

    > div:nth-child(2) {
      left: -212px;
      top: -279px;
    }
  }
`;function Ii(e){return h(A,{value:e.value,onChange:e.onChange,children:[t(A.Option,{value:"solid",children:"\u5B9E\u7EBF"}),t(A.Option,{value:"double",children:"\u53CC\u5B9E"}),t(A.Option,{value:"dotted",children:"\u70B9\u7EBF"})]})}function ne(e){return h(ki,{children:[t(L,{addonBefore:e.title,min:"0",max:"999",style:{width:190},value:String(e.value.size),onChange:i=>e.onChange(m(y({},e.value),{size:Number(i)})),addonAfter:t(Ii,{value:e.value.style,onChange:i=>e.onChange(m(y({},e.value),{style:i}))})}),t(Ee.Blueprint,{value:e.value.color,onChange:i=>e.onChange(m(y({},e.value),{color:i}))})]})}const Mi={Blueprint(e){return h(Si,{children:[t(ne,{title:"\u4E0A",value:e.value.top,onChange:i=>e.onChange(m(y({},e.value),{top:i}))}),t(ne,{title:"\u4E0B",value:e.value.bottom,onChange:i=>e.onChange(m(y({},e.value),{bottom:i}))}),t(ne,{title:"\u5DE6",value:e.value.left,onChange:i=>e.onChange(m(y({},e.value),{left:i}))}),t(ne,{title:"\u53F3",value:e.value.right,onChange:i=>e.onChange(m(y({},e.value),{right:i}))})]})},render(e){return{borderTop:`${B.rem(e.top.size)} ${e.top.style} ${e.top.color}`,borderBottom:`${B.rem(e.bottom.size)} ${e.bottom.style} ${e.bottom.color}`,borderLeft:`${B.rem(e.left.size)} ${e.left.style} ${e.left.color}`,borderRight:`${B.rem(e.right.size)} ${e.right.style} ${e.right.color}`}},defaultValue:{bottom:{size:0,color:"#000",style:"solid"},left:{size:0,color:"#000",style:"solid"},right:{size:0,color:"#000",style:"solid"},top:{size:0,color:"#000",style:"solid"}},description:"",title:"\u8FB9\u8DDD\u7EBF",key:"Border"},Je=[mi,Re,bi,xi,Le,We,Fi,Bi,Ee,Ne,Oe,Ei,je,zi,He,Mi],Ti=[Le,We,Ne,Ee].map(e=>B.createStyle(Je,e)),Pi=[hi],Oi=[J],ji=[{title:"A5",width:148,height:210},{title:"A4",width:210,height:297}];var M={paperSizes:ji,layouts:Oi,contents:Pi,pageStyles:Ti,styles:Je};const Hi=(e,i,n)=>({id:pe(),layout:e,definition:i,styles:(i.styles.length!==0,M.styles).map(l=>{var a;return B.createStyle(M.styles,l,(a=n.find(u=>l.key===u.definition.key))==null?void 0:a.value)}),toJSON(){return{id:this.id,styles:this.styles.map(a=>a.toJSON()),value:this.value,definition:this.definition.key,layout:this.layout.id}},value:de.exports.cloneDeep(i.defaultValue)});var Ve={createContent:Hi};const Ri=e=>{const i={id:e.id,styles:e.styles.map(n=>B.createStyle(M.styles,n)),definition:M.layouts.find(n=>n.key===e.definition),contents:[],toJSON(){return{contents:this.contents.map(l=>l.toJSON()),id:this.id,styles:this.styles.map(l=>l.toJSON()),definition:this.definition.key}}};return i.contents=e.contents.map(n=>({id:n.id,styles:n.styles.map(l=>B.createStyle(M.styles,l)),value:n.value,definition:M.contents.find(l=>l.key===n.definition),layout:i,toJSON(){return{value:this.value,id:this.id,styles:this.styles.map(a=>a.toJSON()),layout:this.layout.id,definition:this.definition.key}}})),i},qe=(e,i)=>({id:pe(),styles:e.styles.map(n=>{var l;return B.createStyle(e.styles,n,(l=i.find(a=>n.key===a.definition.key))==null?void 0:l.value)}),contents:[],definition:e,toJSON(){return m(y({},this),{definition:this.definition.key})}}),Li=(e,i)=>{var a;const n=qe((a=e==null?void 0:e.layout)!=null?a:J,i),l=Ve.createContent(n,e,i);return n.contents.push(l),n},Wi=(e,i)=>e.Blueprint?Li(e,i):e.definition?Ri(e):qe(e,i);var me={createLayout:Wi};const Ni=e=>{const i={},n=(l,a)=>{a&&typeof a=="object"?Array.isArray(a)?i[`${l}[]`]=a:Object.entries(a).forEach(([u,d])=>{n(l?`${l}.${u}`:u,d)}):l&&(i[l]=a)};return n("",e),i},ze=(e,i,n)=>{var u;const l=e.trim(),a=/\[([0-9]+)]$/.exec(l);if(a){const d=(u=i.items.find(f=>f.id===Number(a[1])))==null?void 0:u.path;if(d)return n[d]}return n[l]},Ji=(e,i,n)=>{const l=Array.isArray(e),a=(l?e:[e]).map(u=>u.includes("${")?u.replace(/\${([^}]+)}/g,(d,f)=>{const c=ze(f,i,n);return Array.isArray(c)&&["string","number","boolean","undefined"].includes(typeof c[0])?`
${c.filter(r=>r).join(`
`)}
`:c||""}):ze(u,i,n));return l?a:a[0]},Vi=e=>{const i=typeof e=="string"?JSON.parse(e):e;return{footer:i.footer,header:i.header,width:i.width,height:i.height,styles:i.styles.length?i.styles.map(n=>B.createStyle(M.styles,n)):M.pageStyles,layouts:i.layouts.map(n=>me.createLayout(n))}};var V={flattenData:Ni,getRenderData:Ji,deserializePage:Vi};const qi=g.div`
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
  height: 100%;
`,Gi=g.div`
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
`;function Ui(e){const i=l=>{const{destination:a,source:u}=l;if(!a)return;const d=e.value,f=a.index>0&&u.index>a.index?a.index-1:0,c=d[u.index];d.splice(u.index,1),d.splice(a.index-f,0,c),e.onChange(d)},n=l=>{const a=e.value.findIndex(u=>u.id===l);e.value.splice(a,1),e.onChange([...e.value])};return t(Fe,{onDragEnd:i,children:t(Z,{droppableId:"layout-contents",children:(l,a)=>h(qi,m(y(m(y({},l.droppableProps),{ref:l.innerRef,isDragging:a.isDraggingOver}),l.droppableProps),{children:[e.value.map((u,d)=>t(ee,{draggableId:u.id,index:d,children:(f,c)=>h(Gi,m(y({ref:f.innerRef,style:f.draggableProps.style,isDragging:c.isDragging},f.draggableProps),{children:[t("div",m(y({},f.dragHandleProps),{children:d+1})),h("div",{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n(u.id),children:t(D,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(D,{type:"primary",onClick:()=>e.onChangeActive(u.id),children:"\u7F16\u8F91"})]})]}))},u.id)),l.placeholder]}))})})}const _i=g.div`
  padding: 10px 15px;

`,Yi=g.div`
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
`;function Qi(e){const i=l=>{const{destination:a,source:u}=l;if(!a)return;const{layouts:d}=e.value,f=a.index>0&&u.index>a.index?a.index-1:0,c=d[u.index];d.splice(u.index,1),d.splice(a.index-f,0,c),e.onChange(m(y({},e.value),{layouts:[...d]}))},n=l=>{const{layouts:a}=e.value,u=a.findIndex(d=>d.id===l);a.splice(u,1),e.onChange(m(y({},e.value),{layouts:[...a]}))};return h("div",{children:[h(_i,{children:[t("h3",{children:"\u5206\u9875\u8BF4\u660E"}),t("p",{children:"1.\u5185\u5BB9\u8D85\u51FA\u9875\u9762\u5C3A\u5BF8\u4F1A\u81EA\u52A8\u5206\u9875;"}),t("p",{children:"2.\u53EF\u4EE5\u5728\u6307\u5B9A\u5143\u7D20\u540E\u9762\u5206\u9875\uFF0C\u5143\u7D20\u5220\u9664\u5206\u9875\u5220\u9664;"}),t("h3",{children:"\u9875\u5934\u9875\u5C3E\u8BF4\u660E"}),t("p",{children:"1.\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u4F5C\u4E3A\u9875\u5934\u9875\u5C3E;"}),t("p",{children:"2.\u9875\u5934\u9875\u5C3E\u8BBE\u7F6E\u540E\u65E0\u6CD5\u7F16\u8F91\uFF0C\u5982\u9700\u7F16\u8F91\u8BF7\u53D6\u6D88\u540E\u518D\u91CD\u65B0\u8BBE\u7F6E;"})]}),t(Fe,{onDragEnd:i,children:t(Z,{droppableId:"page-layouts",children:(l,a)=>h(Yi,m(y({ref:l.innerRef,isDragging:a.isDraggingOver},l.droppableProps),{children:[e.value.layouts.map((u,d)=>t(ee,{draggableId:u.id,index:d,children:(f,c)=>h(Ie,{children:[d===e.value.footer&&t("div",{children:"\u53D6\u6D88\u9875\u5C3E"}),h(Ki,{ref:f.innerRef,style:f.draggableProps.style,isDragging:c.isDragging,children:[t("div",m(y({},f.dragHandleProps),{children:d+1})),h("div",{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n(u.id),children:t(D,{type:"primary",danger:!0,children:"\u5220\u9664"})}),t(ot,{overlay:h(he,{children:[t(he.Item,{onClick:()=>e.onChange(m(y({},e.value),{header:d})),children:"\u9875\u5934"}),t(he.Item,{onClick:()=>e.onChange(m(y({},e.value),{footer:d})),children:"\u9875\u5C3E"})]}),disabled:d<=e.value.header||d>=e.value.footer&&e.value.footer>0,children:t(D,{type:"primary",children:"\u8BBE\u7F6E"})}),t(D,{type:"primary",onClick:()=>e.onChangeActive(u.id),children:"\u7F16\u8F91"})]})]}),d===e.value.header&&t("div",{children:"\u53D6\u6D88\u9875\u5934"})]})},u.id)),l.placeholder]}))})})]})}const Xi=g.aside`
  width: 300px;
  display: flex;
  flex-direction: column;
`,Se=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,Zi=g.span`
  display: inline-block;
  width: 80px;
`,en=g.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  background-color: #ff7875;
  font-size: 32px;
  height: 88px;
`;function tn(e){const[i,n]=R.exports.useState(0),l=c=>{e.onChangeActiveValue(m(y({},e.active),{value:c}))},a=c=>{e.onChangeActiveValue(m(y({},e.active),{contents:c}))},u=(c,r)=>{const{styles:o}=e.active,s=o.findIndex(x=>x.definition.key===c),v=o[s];v.value=r,o.splice(s,1,v),e.onChangeActiveValue(m(y({},e.active),{styles:o}))},d=()=>{var r;if((r=e.active)!=null&&r.contents){const o=e.active;return o.contents.length?t(Ui,{value:o.contents,onChange:a,onChangeActive:s=>e.onChangeActive(o.id,s)}):t(en,{children:"\u8BF7\u6DFB\u52A0\u5185\u5BB9"})}const c=e.active;return t(c.definition.Blueprint,{value:c.value,onChange:l,metadata:e.metadata,getData:e.getData})},f=()=>{var c;if((c=e.active)!=null&&c.contents){const r=e.value.layouts.findIndex(o=>o.id===e.active.id);e.value.layouts.splice(r,1)}else{const r=e.active,o=r.layout.contents.findIndex(v=>v.id===r.id);r.layout.contents.splice(o,1);const s=e.value.layouts.findIndex(v=>v.id===r.layout.id);r.layout.contents.length===0?e.value.layouts.splice(s,1):e.value.layouts.splice(s,1,r.layout)}e.onChange(y({},e.value))};return t(Xi,{children:h(te,{activeKey:String(i),onChange:c=>n(Number(c)),centered:!0,size:"large",style:{height:"100%"},children:[t(te.TabPane,{tab:!e.active||e.active.contents?"\u5143\u7D20":"\u5C5E\u6027",children:i===0&&!!e.active&&d()},"0"),t(te.TabPane,{tab:"\u6837\u5F0F",children:i===1&&!!e.active&&[t(Se,{style:{justifyContent:"center"},children:t(D,{type:"primary",danger:!0,onClick:f,children:"\u5220\u9664"})},"button"),e.active.styles.map((c,r)=>h(Se,{children:[t(Zi,{children:c.definition.title}),t(c.definition.Blueprint,{value:c.value,onChange:o=>u(c.definition.key,o)})]},r))]},"1"),t(te.TabPane,{tab:"\u9875\u9762\u5143\u7D20",children:i===3&&t(Qi,{value:e.value,onChange:e.onChange,onChangeActive:c=>{e.onChangeActive(c),n(0)}})},"3")]})})}var W=(e=>(e.Building="Building",e.Material="Material",e))(W||{}),N=(e=>(e.Layout="layout",e.Content="content",e))(N||{});const nn=g.section`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  flex: auto;
`,an=g.div`
  background: #f3f3f3;
  flex: auto;
  display: flex;
  justify-content: center;
`,ln=g.article`
  background: #fff;
  box-shadow: 0 4px 12px #ebedf0;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px ${e=>e.isDragging?"dashed #4099ff":"solid #ddd"};
`,on=g.div`
  display: flex;
  ${e=>e.isDragging?"border: 1px dashed #4099ff;":""}
  position: relative;
`,un=g.div`
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
`,dn=g.div`
  display: flex;
  flex: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  background-color: #ff7875;
`;function rn(e){return t(nn,{children:t(an,{children:!e.value.width&&!e.value.height?null:t(Z,{droppableId:W.Building,children:(i,n)=>h(ln,m(y({ref:i.innerRef,isDragging:n.isDraggingOver},i.droppableProps),{style:y({width:`${e.value.width}mm`,height:`${e.value.height}mm`},B.render(e.value.styles)),children:[e.value.layouts.length?e.value.layouts.map((l,a)=>t(ee,{draggableId:`${l.id}_${N.Layout}`,index:a,children:(u,d)=>{var f;return h(on,m(y({ref:u.innerRef,isDragging:d.isDragging},u.draggableProps),{style:(f=n.draggingOverWith)!=null&&f.endsWith(N.Layout)?u.draggableProps.style:void 0,children:[t(un,m(y({},u.dragHandleProps),{onClick:()=>e.onChangeActive(l.id),index:a,children:t("div",{children:a+1})})),t(l.definition.Building,{getData:e.getData,active:e.active,contents:l.contents,id:`${l.id}_${N.Content}`,style:B.render(l.styles),onChangeActive:c=>e.onChangeActive(l.id,c)},l.id)]}))}},l.id)):t(dn,{children:"\u8BF7\u62D6\u52A8\u5E03\u5C40\u6216\u5185\u5BB9\u8FDB\u884C\u7F16\u8F91"}),i.placeholder]}))})})})}const ae=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,le=g.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`;function sn(e){const i=o=>{var v;const s=M.paperSizes.find(x=>x.width===o.width&&x.height===o.height||x.width===o.height&&x.height===o.width);return(v=s==null?void 0:s.title)!=null?v:"\u81EA\u5B9A\u4E49"},[n,l]=p.useState(()=>({width:e.value.width,height:e.value.height,title:i(e.value)})),a=()=>{if(!n.height){O.error("\u65B9\u5411\u5207\u6362\u5931\u8D25,\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)");return}l({title:n.title,width:n.height,height:n.width}),e.onChange(m(y({},e.value),{width:n.height,height:n.width}))},u=(o,s)=>{const v=e.value.styles.findIndex(S=>S.definition.key===o),x=e.value.styles[v];x.value=s,e.value.styles.splice(v,1,x),e.onChange(y({},e.value))},d=o=>{l({width:n.width,height:o,title:i({width:n.width,height:o})})},f=o=>{l({width:o,height:n.height,title:i({width:o,height:n.height})})},c=o=>{const s=M.paperSizes.find(v=>v.title===o);s&&(l(s),e.onChange(m(y({},e.value),{width:s.width,height:s.height})))},r=()=>{if(!n.width){O.error("\u4FEE\u6539\u5931\u8D25,\u5BBD\u9700\u8981\u4E0D\u80FD\u4E3A0(\u65E0\u9650)"),l({width:e.value.width,height:e.value.height,title:i(e.value)});return}e.onChange(m(y({},e.value),{width:e.value.width,height:e.value.height}))};return h("div",{children:[h(ae,{children:[t(le,{children:"\u5C3A\u5BF8"}),h(A,{value:n.title,style:{width:112},onChange:c,children:[t(A.Option,{value:"",children:"\u81EA\u5B9A\u4E49"}),M.paperSizes.map((o,s)=>t(A.Option,{value:o.title,children:o.title},s))]}),t(D,{type:"primary",onClick:a,children:t(ut,{})})]}),h(ae,{children:[t(le,{children:"\u5BBD\u5EA6"}),t(L,{value:n.width,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:f,onBlur:()=>r()})]}),h(ae,{children:[t(le,{children:"\u9AD8\u5EA6"}),t(L,{value:n.height,min:0,max:999,style:{width:165},addonAfter:"\u6BEB\u7C73",onChange:d,onBlur:()=>r()})]}),e.value.styles.map((o,s)=>h(ae,{children:[t(le,{children:o.definition.key===Re.key?"\u7AD6\u5411\u6392\u5217":o.definition.title}),t(o.definition.Blueprint,{value:o.value,onChange:v=>u(o.definition.key,v)})]},s))]})}const cn=g.aside`
  width: 250px;
  color: #333;
  padding-top: 12px;
`,ge=g.div`
  border-bottom: 1px solid #aaa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`,hn=g.div`
`,fn=g.div`
  padding-right: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  width: 60px;
`,gn=g.ul`
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

`,vn=g(Ge)`
  + div {
    display: none !important;
  }
`;function yn(e){const i=j(),n=()=>{e.onSave(),i("/")};return t(Z,{droppableId:W.Material,isDropDisabled:!0,children:l=>h(cn,{ref:l.innerRef,children:[h(ge,{children:[t(hn,{children:e.template.title}),t("div",{style:{flex:"auto"}}),e.updated&&t(Q,{placement:"topRight",title:"\u662F\u5426\u4FDD\u5B58\u540E\u8FD4\u56DE\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>n,onCancel:()=>i("/"),children:t(D,{type:"primary",children:"\u8FD4\u56DE\u9996\u9875"})}),!e.updated&&t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),e.updated&&h(ge,{children:[t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u653E\u5F03\u4FEE\u6539\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:e.onCancel,children:t(D,{type:"primary",danger:!0,children:"\u653E\u5F03\u4FEE\u6539"})}),t("div",{style:{flex:"auto"}}),t(Q,{placement:"topRight",title:"\u662F\u5426\u786E\u5B9A\u4FDD\u5B58\uFF1F",okText:"\u662F",cancelText:"\u5426",onConfirm:()=>e.onSave(),children:t(D,{type:"primary",children:"\u786E\u5B9A\u4FDD\u5B58"})})]}),h(ge,{children:[t(fn,{children:"\u5185\u5BB9"}),t(gn,{children:M.contents.map((a,u)=>t(ee,{draggableId:a.key,index:u,children:(d,f)=>h(Ie,{children:[t(Ge,m(y(y({ref:d.innerRef},d.draggableProps),d.dragHandleProps),{isDragging:f.isDragging,style:f.isDragging?d.draggableProps.style:{},children:a.title})),f.isDragging&&t(vn,{children:a.title})]})},a.key))})]}),t(sn,{value:e.value,onChange:e.onChange}),l.placeholder]})})}const mn=g.div`
  display: flex;
  width: 100%;
`;function xn(){const e=j(),[i,n]=U.useDatabase(),{id:l}=be(),a=p.useMemo(()=>i.templates.find(b=>b.id===l),[i]);if(!a)return O.error("\u7F16\u8F91\u5185\u5BB9\u5DF2\u88AB\u5220\u9664"),e("/"),null;const u=p.useMemo(()=>`RE-editTemplate-${l}`,[l]),[d,f]=p.useState(!1),c=p.useMemo(()=>i.metatables.find(b=>b.id===a.metadataId),[i]),r=p.useMemo(()=>V.flattenData(JSON.parse(c.json)),[c]),o=()=>{const b=localStorage.getItem(u)||a.json;return V.deserializePage(b||{footer:-1,header:-1,width:210,height:297,layouts:[],styles:[]})},[s,v]=p.useState(o),x=()=>{localStorage.removeItem(u),f(!1),v(o())},[S,k]=p.useState(),I=b=>{f(!0),v(b),localStorage.setItem(u,JSON.stringify(b))},_=()=>{const b=i.templates.findIndex(C=>C.id===a.id);a.json=JSON.stringify(s),i.templates.splice(b,1,a),n(i),x()},Y=(b,C)=>{const T=s.layouts.find($=>$.id===b);if(C){const $=T.contents.find(z=>z.id===C);k($)}else k(T)};return h(mn,{children:[h(Fe,{onDragEnd:b=>{const{destination:C,source:T,draggableId:$}=b,z=C==null?void 0:C.droppableId,H=T.droppableId;if(!(!C||!z||z===W.Material)){if(H===W.Material){const E=M.contents.find(F=>F.key===$);if(z===W.Building){const F=me.createLayout(E,s.styles);s.layouts.splice(C.index,0,F),I(s),k(F.contents[0]);return}const w=s.layouts.find(F=>z.startsWith(F.id)),P=Ve.createContent(w,E,s.styles);if(w.definition!==J)return;w.contents.splice(C.index,0,P),k(P),I(s);return}if(H===z){const E=C.index>0&&T.index>C.index?C.index-1:0;if(H===W.Building){const q=s.layouts[T.index];s.layouts.splice(T.index,1),s.layouts.splice(C.index-E,0,q),k(q),I(s);return}const w=s.layouts.find(q=>z.startsWith(q.id)),{contents:P}=w,F=P[T.index];P.splice(T.index,1),P.splice(C.index-E,0,F),F.layout=w,k(F),I(s);return}if($.endsWith(N.Layout)&&z.endsWith(N.Content)){const E=s.layouts.findIndex(F=>$.startsWith(F.id));if(E===-1||s.layouts[E].definition!==J)return;const w=s.layouts.find(F=>z.startsWith(F.id));if(!w||w.definition!==J)return;const{contents:P}=s.layouts[E];w.contents.splice(C.index,0,...P),s.layouts.splice(E,1),I(s)}if(!$.endsWith(N.Layout)&&!$.endsWith(N.Content)){const E=s.layouts.find(F=>H.startsWith(F.id)),w=E.contents.find(F=>F.id===$),P=s.layouts.find(F=>z.startsWith(F.id));if(z===W.Building){const F=me.createLayout(J);F.contents.push(w),s.layouts.splice(C.index,0,F),w.layout=F}else if(P&&P.definition===J)P.contents.splice(C.index,0,w),w.layout=P,k(w);else return;if(E.contents.splice(T.index,1),!E.contents.length){const F=s.layouts.findIndex(q=>H.startsWith(q.id));s.layouts.splice(F,1)}I(s)}}},children:[t(yn,{value:s,onChange:I,updated:d,onSave:_,onCancel:x,template:a}),t(rn,{value:s,getData:b=>V.getRenderData(b,c,r),onChangeActive:Y,active:S})]}),t(tn,{active:S,onChangeActiveValue:b=>{k(b);let C=s.layouts.findIndex(E=>E.id===b.id);if(C!==-1){const E=s.layouts[C];E.contents=b.contents,E.styles=b.styles,E.contents.length===0?s.layouts.splice(C,1):s.layouts.splice(C,1,E),I(s);return}const T=b;if(C=s.layouts.findIndex(E=>E.id===T.layout.id),C===-1){k(void 0),O.error("\u65E0\u6548\u7684\u4FEE\u6539,\u7F16\u8F91\u7684\u5185\u5BB9\u5DF2\u8FC7\u671F");return}const $=s.layouts[C],z=$.contents.findIndex(E=>E.id===T.id),H=$.contents[z];H.value=b.value,H.styles=b.styles,$.contents.splice(z,1,H),s.layouts.splice(C,1,$),I(s)},onChangeActive:Y,value:s,onChange:I,metadata:c,getData:b=>V.getRenderData(b,c,r)})]})}const ve="re-iframe",ue=3,xe=async(e,i,n)=>{const l=document.getElementById(ve);l&&document.body.removeChild(l);const a=document.createElement("iframe");a.id=ve,a.style.visibility="hidden",a.style.position="absolute",a.style.top="0px",a.srcdoc=`<!DOCTYPE html>
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
    `,document.body.appendChild(a),await new Promise(f=>{const c=setInterval(()=>{a.contentDocument&&a.contentDocument.getElementById("app")&&(clearInterval(c),f(void 0))},100)});const u=await dt(a.contentDocument.getElementById("app")),d=document.getElementById(ve);return d&&document.body.removeChild(d),Promise.resolve(u)},pn=async(e,i,n)=>{const l=e.offsetHeight;if(l>=e.scrollHeight||n===0)return xe(e.innerHTML,i,n).then(f=>[f]);const a=[""];let u=l;for(let f=0;f<e.children.length;f+=1){const c=e.children[f],r=c.scrollHeight;if(c.nodeName==="BR"){const o=a.length-1,s=`${a[o]}<div style="page-break-after:always;">`;a.splice(o,1,s),a.push("")}else if(c.nodeName!=="TABLE")if(r>u||r>=l)u=l-r,a.push(c.innerHTML);else{u-=r;const o=a.length-1,s=`${a[o]}${c.outerHTML}<div style="page-break-after:always;">`;a.splice(o,1,s)}}const d=[];for(const f of a.filter(c=>c)){const c=await xe(f,i,n);d.push(c)}return d},Cn=(e,i,n)=>{if(e.length===0)return;const l=new rt({unit:"mm",format:[i,n]});for(let a=0;a<e.length;a+=1){const d=e[a].toDataURL("image/jpeg",1);a!==0&&l.addPage(),l.setPage(a+1),l.addImage(d,"JPEG",0,0,i,n)}l.save("report.pdf")},bn=(e,i,n)=>{const l=window.open("","print"),a=`${i}mm`;l.document.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>report print</title>
          <style>
          * { padding: 0; margin: 0; overflow: auto; }
          html { font-size: ${ue*100}px }
          body { width: ${a}; height: ${n*e.length}mm; overflow: hidden; display: flex; flex-direction: column; }
          img { width: ${a}; height: ${n?`${n}mm`:"auto"}; }
          </style>
        </head>
        <body>
          ${e.map(u=>`<img src="${u.toDataURL("image/jpeg")}" alt="" />`).join("")}
        </body>
      </html>
    `),setTimeout(()=>{l.print()},200)};var ye={htmlToCanvas:xe,elementToCanvas:pn,downloadPDF:Cn,print:bn};const Fn=g.div`
  width: ${e=>e.width}mm;
  border-right: 1px solid #ebe0e0;
  background-color: beige;
  box-sizing: content-box;
`,Bn=g.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
`,En=g.div`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  overflow: auto;
  background-color: antiquewhite;
  visibility: hidden;
  position: absolute;
  top: 0;
`,Dn=g.img`
  width: ${e=>e.width}mm;
  height: ${e=>e.height?`${e.height}mm`:"auto"};
  margin: 15px 0;
`,An=3;function wn(e){const i=j(),n=V.flattenData(e.data),l=R.exports.useRef(null),[a,u]=R.exports.useState([]);R.exports.useEffect(()=>{!l.current||ye.elementToCanvas(l.current,e.page.width,e.page.height).then(r=>{u(r)})},[e.data]);const d=r=>V.getRenderData(r,e.metadata,n),f=()=>{ye.downloadPDF(a,e.page.width,e.page.height)},c=()=>{ye.print(a,e.page.width,e.page.height)};return h(Fn,{width:e.page.width,children:[h(Bn,{children:[t(D,{type:"primary",onClick:()=>f(),children:"PDF\u4E0B\u8F7D"}),t(D,{type:"primary",onClick:()=>c(),children:"\u6253\u5370"}),t(D,{type:"primary",onClick:()=>i("/"),children:"\u8FD4\u56DE\u9996\u9875"})]}),a.map((r,o)=>t(Dn,{src:r.toDataURL("image/jpeg",1/An),alt:"",width:e.page.width,height:e.page.height},o)),t(En,{ref:r=>{l.current=r},width:e.page.width,height:e.page.height,children:e.page.layouts.map((r,o)=>t(r.definition.Render,{style:B.render(r.styles),contents:r.contents,getData:d},o))})]})}const $n=g.div`
  display: flex;
  flex: auto;
`;function zn(){const e=j(),[i]=U.useDatabase(),{id:n}=be(),l=i.templates.find(c=>c.id===n);if(!l)return O.error("\u6253\u5370\u6A21\u677F\u5DF2\u8FC7\u671F"),e("/"),null;if(!l.json)return O.error("\u8BF7\u5148\u7F16\u8F91\u6A21\u677F\u540E\u9884\u89C8"),e("/"),null;const a=p.useMemo(()=>V.deserializePage(l.json),[]),u=p.useMemo(()=>i.metatables.find(c=>c.id===l.metadataId),[]),[d,f]=R.exports.useState(()=>JSON.parse(u.json));return h($n,{children:[t(wn,{page:a,data:d,metadata:u}),t(Pe,{value:d,onChange:c=>f(c||JSON.parse(u.json))})]})}function Sn(){const e=p.useRef();e.current==null&&(e.current=st({window}));const i=e.current,[n,l]=p.useState({action:i.action,location:i.location});return p.useLayoutEffect(()=>i.listen(l),[i]),t(ct,{basename:"report-editor",location:n.location,navigationType:n.action,navigator:i,children:h(ht,{children:[h(G,{path:"/",element:t(Me,{}),children:[t(G,{path:"/metadata/:id",element:t(Xt,{})}),t(G,{path:"/template/:id",element:t(xn,{})}),t(G,{path:"/preview/:id",element:t(zn,{})}),t(G,{path:"/",element:t(Jt,{})})]}),t(G,{path:"*",element:t(Ft,{})})]})})}function kn(){return t(Sn,{})}ft.render(t(p.StrictMode,{children:t(kn,{})}),document.getElementById("root"));
