"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[445],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(l),c=r,k=d["".concat(o,".").concat(c)]||d[c]||y[c]||a;return l?n.createElement(k,i(i({ref:t},u),{},{components:l})):n.createElement(k,i({ref:t},u))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},98991:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=l(87462),r=(l(67294),l(3905));const a={},i="Purge User Messages",s={type:"api",id:"purge-user-messages",unversionedId:"purge-user-messages",title:"Purge User Messages",description:"",slug:"/purge-user-messages",frontMatter:{},api:{tags:["admin"],operationId:"purge_user_messages_api_v1_admin_purge_user__user_id__messages_post",parameters:[{required:!0,schema:{title:"User Id",type:"string",format:"uuid"},name:"user_id",in:"path"},{required:!1,schema:{title:"Purge Initial Prompts",type:"boolean",default:!1},name:"purge_initial_prompts",in:"query"},{required:!1,schema:{title:"Min Date",type:"string",format:"date-time"},name:"min_date",in:"query"},{required:!1,schema:{title:"Max Date",type:"string",format:"date-time"},name:"max_date",in:"query"},{required:!1,schema:{title:"Preview",type:"boolean",default:!0},name:"preview",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"PurgeResultModel",required:["before","after","preview","duration"],type:"object",properties:{before:{title:"SystemStats",type:"object",properties:{all:{title:"All",type:"integer",default:0},active:{title:"Active",type:"integer",default:0},deleted:{title:"Deleted",type:"integer",default:0},message_trees:{title:"Message Trees",type:"integer",default:0}}},after:{title:"SystemStats",type:"object",properties:{all:{title:"All",type:"integer",default:0},active:{title:"Active",type:"integer",default:0},deleted:{title:"Deleted",type:"integer",default:0},message_trees:{title:"Message Trees",type:"integer",default:0}}},preview:{title:"Preview",type:"boolean"},duration:{title:"Duration",type:"number"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Purge User Messages",method:"post",path:"/api/v1/admin/purge_user/{user_id}/messages",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Purge User Messages",description:{type:"text/plain"},url:{path:["api","v1","admin","purge_user",":user_id","messages"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"purge_initial_prompts",value:"false"},{description:{content:"",type:"text/plain"},key:"min_date",value:"<dateTime>"},{description:{content:"",type:"text/plain"},key:"max_date",value:"<dateTime>"},{description:{content:"",type:"text/plain"},key:"preview",value:"true"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"user_id"}]},method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/purge-user-messages",previous:{title:"Purge User",permalink:"/Open-Assistant/api/purge-user"},next:{title:"Auth Check",permalink:"/Open-Assistant/api/auth-check"}},o=[],p={toc:o},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"purge-user-messages"},"Purge User Messages"),(0,r.kt)("p",null,"Purge User Messages"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"purge_initial_prompts"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Purge Initial Prompts"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"min_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"max_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"preview"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Preview"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"before"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"all"),(0,r.kt)("span",{style:{opacity:"0.6"}}," All"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"active"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Active"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message_trees"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message Trees"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"after"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"all"),(0,r.kt)("span",{style:{opacity:"0.6"}}," All"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"active"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Active"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Deleted"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message_trees"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message Trees"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"preview"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Preview"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"duration"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Duration"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);