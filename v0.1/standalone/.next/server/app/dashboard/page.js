(()=>{var e={};e.id=7702,e.ids=[7702],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},85072:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=a(50482),n=a(69108),r=a(62563),o=a.n(r),l=a(68300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);a.d(t,i);let d=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,99468)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,98746)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,75516)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,37)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\page.tsx"],u="/dashboard/page",h={require:a,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},73730:(e,t,a)=>{Promise.resolve().then(a.bind(a,83979))},53267:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let s=a(39694);a(95344),a(3729);let n=s._(a(60546));function r(e,t){let a={loading:e=>{let{error:t,isLoading:a,pastDelay:s}=e;return null}};return"function"==typeof e&&(a.loader=e),(0,n.default)({...a,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38354:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=a(63689);function n(e){let{reason:t,children:a}=e;throw new s.BailoutToCSRError(t)}},60546:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let s=a(95344),n=a(3729),r=a(38354);function o(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},i=function(e){let t={...l,...e},a=(0,n.lazy)(()=>t.loader().then(o)),i=t.loading;function d(e){let o=i?(0,s.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,s.jsx)(a,{...e}):(0,s.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(a,{...e})});return(0,s.jsx)(n.Suspense,{fallback:o,children:l})}return d.displayName="LoadableComponent",d}},83979:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var s=a(95344),n=a(3729),r=a.n(n),o=a(95209),l=a(21204),i=a(87209),d=a(23198),c=a(86236);function u({title:e,children:t,extend:a,onChange:n,disable:r}){let u=e=>{n&&n(e)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"disClick","data-is-open":!a}),(0,s.jsxs)(i.E.div,{layout:!0,transition:c.S,className:"container cardContainer","data-is-extend":a,children:[(0,s.jsxs)(l.default,{children:[s.jsx(o.default,{xs:11,children:s.jsx("h4",{children:e})}),!r&&s.jsx(o.default,{xs:1,className:"btnStatistic dropdown-center",children:(0,s.jsxs)("div",{className:"dropdown",children:[s.jsx("button",{className:"btn btn-transparent",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:s.jsx(d.FQA,{})}),(0,s.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[s.jsx("button",{className:"dropdown-item",onClick:()=>u("week"),children:"Tuần"}),s.jsx("button",{className:"dropdown-item",onClick:()=>u("month"),children:"Th\xe1ng"}),s.jsx("button",{className:"dropdown-item",onClick:()=>u("year"),children:"Năm"})]})]})})]}),s.jsx(l.default,{children:t})]})]})}a(49044);var h=a(4651),x=a(36868),p=a(19868),f=a(49921);a(30759);var m=a(73705);function g({icon:e,title:t,value:a,color:n}){return s.jsx(o.default,{xs:12,md:6,lg:3,className:"mt-2",children:(0,s.jsxs)(l.default,{children:[s.jsx(o.default,{xs:3,className:`itemContainer ${n}`,children:e}),(0,s.jsxs)(o.default,{children:[s.jsx(l.default,{className:"title",children:s.jsx("p",{children:t})}),s.jsx(l.default,{className:"statisticNumber",children:s.jsx("h5",{children:a})})]})]})})}var j=a(24229),b=a(22539);function y(){let{data:e,isLoading:t}=(0,j.kO)();return t?s.jsx(b.Z,{}):s.jsx(g,{icon:s.jsx(p.zFh,{}),title:"Tổng h\xe0ng h\xf3a",value:e||0,color:"totalPackage"})}function w({type:e}){let{data:t,isLoading:a}=(0,j.EZ)(e);return a?s.jsx(b.Z,{}):2===e?s.jsx(g,{icon:s.jsx(h.u5D,{}),title:"Số điểm giao dịch",value:t||0,color:"transPoint"}):s.jsx(g,{icon:s.jsx(x.Tld,{}),title:"Số điểm trung chuyển",value:t||0,color:"goodPoint"})}function v({role:e}){let t={totalProfit:1e6};t&&console.log(t);let a=[s.jsx(g,{icon:s.jsx(f.b1P,{}),title:"Lợi nhuận",value:t?.totalProfit?.toLocaleString("en-US")||"0",color:"profit"},"0"),s.jsx(y,{},"1")];return s.jsx(i.E.div,{children:s.jsx(u,{title:"Tổng quan",disable:!0,children:(0,s.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[e===m.i4.Admin&&(0,s.jsxs)(s.Fragment,{children:[a,s.jsx(w,{type:2}),s.jsx(w,{type:3})]}),e===m.i4.Manager&&(0,s.jsxs)(s.Fragment,{children:[s.jsx(g,{icon:s.jsx(h.u5D,{}),title:"Đang vận chuyển",value:"90",color:"transPoint"}),s.jsx(g,{icon:s.jsx(x.Tld,{}),title:"Đ\xe3 vận chuyển",value:"42",color:"goodPoint"})]}),e===m.i4.Employee&&(0,s.jsxs)(s.Fragment,{children:[s.jsx(g,{icon:s.jsx(h.u5D,{}),title:"Đang vận chuyển",value:"80",color:"transPoint"}),s.jsx(g,{icon:s.jsx(x.Tld,{}),title:"Đ\xe3 vận chuyển",value:"43",color:"goodPoint"})]})]})})})}var _=a(15803),P=a(12772),k=a(53267),T=a.n(k),D=a(78154);let F={chart:{parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Tuần 1","Tuần 2","Tuần 3","Tuần 4"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>`${e>999?`${(e/1e3).toFixed(0)}`:e}`}}},C={chart:{parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>`${e>999?`${(e/1e3).toFixed(0)}`:e}`}}};var N=a(11453);let S=T()(async()=>{},{loadableGenerated:{modules:["D:\\lap_trinh\\lms_fe_release\\src\\components\\dashboard\\statistic\\statisticTransshipment.tsx -> react-apexcharts"]},ssr:!1}),q={chart:{width:380,height:205,type:"area",parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},colors:["#3DB2FF","#E26EE5","#FFB830"],legend:{show:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tickPlacement:"on",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>`${e>999?`${(e/1e3).toFixed(0)}`:e}`}}},M={...q},A=T()(async()=>{},{loadableGenerated:{modules:["D:\\lap_trinh\\lms_fe_release\\src\\components\\dashboard\\statistic\\statisticTransaction.tsx -> react-apexcharts"]},ssr:!1}),E={chart:{width:380,height:205,type:"area",parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},colors:["#ff6178","#26e7a6"],legend:{show:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tickPlacement:"on",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>`${e>999?`${(e/1e3).toFixed(0)}`:e}`}}},O={...E,chart:{...E.chart,toolbar:{show:!0}},dataLabels:{enabled:!0},legend:{show:!0},xaxis:{...E.xaxis,labels:{show:!0},axisTicks:{show:!0},axisBorder:{show:!0}}};var $=a(63281);let B={Admin:[s.jsx(o.default,{xs:12,children:s.jsx(_.default,{showFilter:!1})},"4")],Manager:[s.jsx(o.default,{xs:12,md:4,children:s.jsx(function(){let[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)("year"),o=q;switch(a){case"year":o=C;break;case"month":o=F;break;case"week":o=q}let l=e?M:o,d=new Date,c=new Date(d),h=7;return"month"==a&&(h=31),"year"==a&&(h=365),c.setDate(d.getDate()-h+1),c=(0,N.p6)(c),d=(0,N.p6)(d),l.responsive=[{breakpoint:768,options:{chart:{height:300},xaxis:{labels:{show:!0}}}}],s.jsx(i.E.div,{children:(0,s.jsxs)(u,{title:"Điểm trung chuyển",extend:e,intervalType:a,onChange:e=>{r(e),console.log(`Interval changed to: ${e}`)},children:[s.jsx(S,{type:"area",options:l,series:[{name:"H\xe0ng đang đến",data:[31,40,28,51,42,109,100]},{name:"H\xe0ng trong kho",data:[11,32,45,32,34,52,41]},{name:"H\xe0ng đ\xe3 chuyển",data:[15,33,49,35,33,49,90]}],height:e?440:205,width:"100%"}),s.jsx(D.Z,{onClick:()=>{t(!e),console.log(e)},className:"bg-warning",children:e?"Đ\xf3ng":"Chi tiết"})]})})},{})},"2"),s.jsx(o.default,{xs:12,md:4,children:s.jsx(function(){let[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)("year"),o=E;switch(a){case"year":o=C;break;case"month":o=F;break;case"week":o=E}let l=e?O:o,d=new Date,c=new Date(d),h=7;return"month"==a&&(h=31),"year"==a&&(h=365),c.setDate(d.getDate()-h+1),c=(0,N.p6)(c),d=(0,N.p6)(d),l.responsive=[{breakpoint:768,options:{chart:{height:300},xaxis:{labels:{show:!0}}}}],s.jsx(i.E.div,{children:(0,s.jsxs)(u,{title:"Điểm giao dịch",extend:e,intervalType:a,onChange:e=>{r(e),console.log(`Interval changed to: ${e}`)},children:[s.jsx(A,{type:"area",options:l,series:[{name:"H\xe0ng đang đến",data:[31,40,28,51,42,109,100]},{name:"H\xe0ng trong kho",data:[11,32,45,32,34,52,41]},{name:"H\xe0ng đ\xe3 chuyển",data:[15,33,49,35,33,49,90]}],height:e?440:205,width:"100%"}),s.jsx(D.Z,{onClick:()=>{t(!e),console.log(e)},className:"bg-warning",children:e?"Đ\xf3ng":"Chi tiết"})]})})},{})},"3"),s.jsx(o.default,{xs:12,children:s.jsx(_.default,{showFilter:!1})},"4")],Employee:[s.jsx(o.default,{xs:12,children:s.jsx($.default,{type:m.ZJ.Waiting,showFilter:!1})},"123")]};function H(){let{user:e}=(0,P.useAppContext)(),t=e?.role.name;return t!==m.i4.User&&t?(0,s.jsxs)("div",{children:[e?.role.name===m.i4.Admin?s.jsx(l.default,{children:s.jsx(o.default,{xs:12,children:(0,s.jsxs)("h2",{children:["Ch\xe0o mừng quản trị vi\xean ",e.name]})})}):e?.work_plate?.type_id===m.qw.Transshipment?(0,s.jsxs)("h2",{children:["Điểm trung chuyển ",e?.work_plate?.name]}):(0,s.jsxs)("h2",{children:["Điểm giao dịch ",e?.work_plate?.name]}),s.jsx(l.default,{children:s.jsx(o.default,{xs:12,children:s.jsx(v,{role:t})})}),s.jsx(l.default,{children:B[t]?.map((e,t)=>s.jsx(r().Fragment,{children:e},t))})]}):s.jsx("div",{children:"Kh\xf4ng c\xf3 quyền truy cập"})}},99468:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>r,__esModule:()=>n,default:()=>o});let s=(0,a(86843).createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\app\dashboard\page.tsx`),{__esModule:n,$$typeof:r}=s,o=s.default},49044:()=>{},30759:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[1638,4595,5996,6747,4524,4021,3857,3007,7616,6286,2595,4731,4831,2821,3085,5136,4651,6625,3270,3281,7563],()=>a(85072));module.exports=s})();