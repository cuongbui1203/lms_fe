(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702,9969,7331],{26430:function(e,n,t){Promise.resolve().then(t.bind(t,67661))},24930:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=t(86921);t(57437),t(2265);let a=r._(t(84795));function l(e,n){let t={loading:e=>{let{error:n,isLoading:t,pastDelay:r}=e;return null}};return"function"==typeof e&&(t.loader=e),(0,a.default)({...t,...n})}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},19721:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=t(99775);function a(e){let{reason:n,children:t}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(n);return t}},84795:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=t(57437),a=t(2265),l=t(19721);function s(e){var n;return{default:null!=(n=null==e?void 0:e.default)?n:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},o=function(e){let n={...i,...e},t=(0,a.lazy)(()=>n.loader().then(s)),o=n.loading;function c(e){let s=o?(0,r.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,i=n.ssr?(0,r.jsx)(t,{...e}):(0,r.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(t,{...e})});return(0,r.jsx)(a.Suspense,{fallback:s,children:i})}return c.displayName="LoadableComponent",c}},38648:function(e,n,t){"use strict";t.d(n,{y1:function(){return a}});var r=t(2265);function a(e,n,t){var a=this,l=(0,r.useRef)(null),s=(0,r.useRef)(0),i=(0,r.useRef)(null),o=(0,r.useRef)([]),c=(0,r.useRef)(),d=(0,r.useRef)(),u=(0,r.useRef)(e),h=(0,r.useRef)(!0);u.current=e;var x="undefined"!=typeof window,f=!n&&0!==n&&x;if("function"!=typeof e)throw TypeError("Expected a function");n=+n||0;var j=!!(t=t||{}).leading,m=!("trailing"in t)||!!t.trailing,p="maxWait"in t,v="debounceOnServer"in t&&!!t.debounceOnServer,g=p?Math.max(+t.maxWait||0,n):null;return(0,r.useEffect)(function(){return h.current=!0,function(){h.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var n=o.current,t=c.current;return o.current=c.current=null,s.current=e,d.current=u.current.apply(t,n)},t=function(e,n){f&&cancelAnimationFrame(i.current),i.current=f?requestAnimationFrame(e):setTimeout(e,n)},r=function(e){if(!h.current)return!1;var t=e-l.current;return!l.current||t>=n||t<0||p&&e-s.current>=g},b=function(n){return i.current=null,m&&o.current?e(n):(o.current=c.current=null,d.current)},w=function e(){var a=Date.now();if(r(a))return b(a);if(h.current){var i=n-(a-l.current);t(e,p?Math.min(i,g-(a-s.current)):i)}},y=function(){if(x||v){var u=Date.now(),f=r(u);if(o.current=[].slice.call(arguments),c.current=a,l.current=u,f){if(!i.current&&h.current)return s.current=l.current,t(w,n),j?e(l.current):d.current;if(p)return t(w,n),e(l.current)}return i.current||t(w,n),d.current}};return y.cancel=function(){i.current&&(f?cancelAnimationFrame(i.current):clearTimeout(i.current)),s.current=0,o.current=l.current=c.current=i.current=null},y.isPending=function(){return!!i.current},y.flush=function(){return i.current?b(Date.now()):d.current},y},[j,p,n,g,m,f,x,v])}},67661:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(57437),a=t(2265),l=t(80590),s=t(55914),i=t(13439),o=t(61975),c=t(39806);function d(e){let{title:n,children:t,extend:a,onChange:d,disable:u}=e,h=e=>{d&&d(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"disClick","data-is-open":!a}),(0,r.jsxs)(i.E.div,{layout:!0,transition:c.S,className:"container cardContainer","data-is-extend":a,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)(l.default,{xs:11,children:(0,r.jsx)("h4",{children:n})}),!u&&(0,r.jsx)(l.default,{xs:1,className:"btnStatistic dropdown-center",children:(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsx)("button",{className:"btn btn-transparent",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:(0,r.jsx)(o.FQA,{})}),(0,r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[(0,r.jsx)("button",{className:"dropdown-item",onClick:()=>h("week"),children:"Tuần"}),(0,r.jsx)("button",{className:"dropdown-item",onClick:()=>h("month"),children:"Th\xe1ng"}),(0,r.jsx)("button",{className:"dropdown-item",onClick:()=>h("year"),children:"Năm"})]})]})})]}),(0,r.jsx)(s.default,{children:t})]})]})}t(33692);var u=t(60102),h=t(71709),x=t(26173),f=t(71399);t(97908);var j=t(9092);function m(e){let{icon:n,title:t,value:a,color:i}=e;return(0,r.jsx)(l.default,{xs:12,md:6,lg:3,className:"mt-2",children:(0,r.jsxs)(s.default,{children:[(0,r.jsx)(l.default,{xs:3,className:"itemContainer ".concat(i),children:n}),(0,r.jsxs)(l.default,{children:[(0,r.jsx)(s.default,{className:"title",children:(0,r.jsx)("p",{children:t})}),(0,r.jsx)(s.default,{className:"statisticNumber",children:(0,r.jsx)("h5",{children:a})})]})]})})}var p=t(24167),v=t(23578);function g(){let{data:e,isLoading:n}=(0,p.kO)();return n?(0,r.jsx)(v.Z,{}):(0,r.jsx)(m,{icon:(0,r.jsx)(x.zFh,{}),title:"Tổng h\xe0ng h\xf3a",value:e||0,color:"totalPackage"})}function b(e){let{type:n}=e,{data:t,isLoading:a}=(0,p.EZ)(n);return a?(0,r.jsx)(v.Z,{}):2===n?(0,r.jsx)(m,{icon:(0,r.jsx)(u.u5D,{}),title:"Số điểm giao dịch",value:t||0,color:"transPoint"}):(0,r.jsx)(m,{icon:(0,r.jsx)(h.Tld,{}),title:"Số điểm trung chuyển",value:t||0,color:"goodPoint"})}function w(e){var n;let{role:t}=e,a={totalProfit:1e6};a&&console.log(a);let l=[(0,r.jsx)(m,{icon:(0,r.jsx)(f.b1P,{}),title:"Lợi nhuận",value:(null==a?void 0:null===(n=a.totalProfit)||void 0===n?void 0:n.toLocaleString("en-US"))||"0",color:"profit"},"0"),(0,r.jsx)(g,{},"1")];return(0,r.jsx)(i.E.div,{children:(0,r.jsx)(d,{title:"Tổng quan",disable:!0,children:(0,r.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[t===j.i4.Admin&&(0,r.jsxs)(r.Fragment,{children:[l,(0,r.jsx)(b,{type:2}),(0,r.jsx)(b,{type:3})]}),t===j.i4.Manager&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{icon:(0,r.jsx)(u.u5D,{}),title:"Đang vận chuyển",value:"90",color:"transPoint"}),(0,r.jsx)(m,{icon:(0,r.jsx)(h.Tld,{}),title:"Đ\xe3 vận chuyển",value:"42",color:"goodPoint"})]}),t===j.i4.Employee&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{icon:(0,r.jsx)(u.u5D,{}),title:"Đang vận chuyển",value:"80",color:"transPoint"}),(0,r.jsx)(m,{icon:(0,r.jsx)(h.Tld,{}),title:"Đ\xe3 vận chuyển",value:"43",color:"goodPoint"})]})]})})})}var y=t(50140),k=t(27305),N=t(24930),T=t.n(N),C=t(66879);let P={chart:{parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Tuần 1","Tuần 2","Tuần 3","Tuần 4"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>"".concat(e>999?"".concat((e/1e3).toFixed(0)):e)}}},S={chart:{parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>"".concat(e>999?"".concat((e/1e3).toFixed(0)):e)}}};var F=t(22169);let _=T()(()=>Promise.all([t.e(9562),t.e(981)]).then(t.bind(t,50981)),{loadableGenerated:{webpack:()=>[50981]},ssr:!1}),D={chart:{width:380,height:205,type:"area",parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},colors:["#3DB2FF","#E26EE5","#FFB830"],legend:{show:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tickPlacement:"on",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>"".concat(e>999?"".concat((e/1e3).toFixed(0)):e)}}},E={...D},O=T()(()=>Promise.all([t.e(9562),t.e(981)]).then(t.bind(t,50981)),{loadableGenerated:{webpack:()=>[50981]},ssr:!1}),L={chart:{width:380,height:205,type:"area",parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},colors:["#ff6178","#26e7a6"],legend:{show:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],tickPlacement:"on",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!0,tickAmount:4,labels:{offsetX:-17,formatter:e=>"".concat(e>999?"".concat((e/1e3).toFixed(0)):e)}}},M={...L,chart:{...L.chart,toolbar:{show:!0}},dataLabels:{enabled:!0},legend:{show:!0},xaxis:{...L.xaxis,labels:{show:!0},axisTicks:{show:!0},axisBorder:{show:!0}}};var A=t(47977);let R={Admin:[(0,r.jsx)(l.default,{xs:12,children:(0,r.jsx)(y.default,{showFilter:!1})},"4")],Manager:[(0,r.jsx)(l.default,{xs:12,md:4,children:(0,r.jsx)(function(){let[e,n]=(0,a.useState)(!1),[t,l]=(0,a.useState)("year"),s=D;switch(t){case"year":s=S;break;case"month":s=P;break;case"week":s=D}let o=e?E:s,c=new Date,u=new Date(c),h=7;return"month"==t&&(h=31),"year"==t&&(h=365),u.setDate(c.getDate()-h+1),u=(0,F.p6)(u),c=(0,F.p6)(c),o.responsive=[{breakpoint:768,options:{chart:{height:300},xaxis:{labels:{show:!0}}}}],(0,r.jsx)(i.E.div,{children:(0,r.jsxs)(d,{title:"Điểm trung chuyển",extend:e,intervalType:t,onChange:e=>{l(e),console.log("Interval changed to: ".concat(e))},children:[(0,r.jsx)(_,{type:"area",options:o,series:[{name:"H\xe0ng đang đến",data:[31,40,28,51,42,109,100]},{name:"H\xe0ng trong kho",data:[11,32,45,32,34,52,41]},{name:"H\xe0ng đ\xe3 chuyển",data:[15,33,49,35,33,49,90]}],height:e?440:205,width:"100%"}),(0,r.jsx)(C.Z,{onClick:()=>{n(!e),console.log(e)},className:"bg-warning",children:e?"Đ\xf3ng":"Chi tiết"})]})})},{})},"2"),(0,r.jsx)(l.default,{xs:12,md:4,children:(0,r.jsx)(function(){let[e,n]=(0,a.useState)(!1),[t,l]=(0,a.useState)("year"),s=L;switch(t){case"year":s=S;break;case"month":s=P;break;case"week":s=L}let o=e?M:s,c=new Date,u=new Date(c),h=7;return"month"==t&&(h=31),"year"==t&&(h=365),u.setDate(c.getDate()-h+1),u=(0,F.p6)(u),c=(0,F.p6)(c),o.responsive=[{breakpoint:768,options:{chart:{height:300},xaxis:{labels:{show:!0}}}}],(0,r.jsx)(i.E.div,{children:(0,r.jsxs)(d,{title:"Điểm giao dịch",extend:e,intervalType:t,onChange:e=>{l(e),console.log("Interval changed to: ".concat(e))},children:[(0,r.jsx)(O,{type:"area",options:o,series:[{name:"H\xe0ng đang đến",data:[31,40,28,51,42,109,100]},{name:"H\xe0ng trong kho",data:[11,32,45,32,34,52,41]},{name:"H\xe0ng đ\xe3 chuyển",data:[15,33,49,35,33,49,90]}],height:e?440:205,width:"100%"}),(0,r.jsx)(C.Z,{onClick:()=>{n(!e),console.log(e)},className:"bg-warning",children:e?"Đ\xf3ng":"Chi tiết"})]})})},{})},"3"),(0,r.jsx)(l.default,{xs:12,children:(0,r.jsx)(y.default,{showFilter:!1})},"4")],Employee:[(0,r.jsx)(l.default,{xs:12,children:(0,r.jsx)(A.default,{type:j.ZJ.Waiting,showFilter:!1})},"123")]};function B(){var e,n,t,i;let{user:o}=(0,k.useAppContext)(),c=null==o?void 0:o.role.name;return c!==j.i4.User&&c?(0,r.jsxs)("div",{children:[(null==o?void 0:o.role.name)===j.i4.Admin?(0,r.jsx)(s.default,{children:(0,r.jsx)(l.default,{xs:12,children:(0,r.jsxs)("h2",{children:["Ch\xe0o mừng quản trị vi\xean ",o.name]})})}):(null==o?void 0:null===(e=o.work_plate)||void 0===e?void 0:e.type_id)===j.qw.Transshipment?(0,r.jsxs)("h2",{children:["Điểm trung chuyển ",null==o?void 0:null===(n=o.work_plate)||void 0===n?void 0:n.name]}):(0,r.jsxs)("h2",{children:["Điểm giao dịch ",null==o?void 0:null===(t=o.work_plate)||void 0===t?void 0:t.name]}),(0,r.jsx)(s.default,{children:(0,r.jsx)(l.default,{xs:12,children:(0,r.jsx)(w,{role:c})})}),(0,r.jsx)(s.default,{children:null===(i=R[c])||void 0===i?void 0:i.map((e,n)=>(0,r.jsx)(a.Fragment,{children:e},n))})]}):(0,r.jsx)("div",{children:"Kh\xf4ng c\xf3 quyền truy cập"})}},23578:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(57437);function a(){return(0,r.jsx)("div",{className:"spinner-border d-flex justify-content",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},50140:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(57437),a=t(79096),l=t(65453),s=t(2265),i=t(38648),o=t(47907);t(95944);var c=t(42362),d=t(71709),u=t(46701),h=t(24167),x=t(9092),f=t(23578);function j(e){let{showFilter:n}=e,t=(0,o.useSearchParams)(),j=(0,o.usePathname)(),{replace:m}=(0,o.useRouter)(),[p,v]=(0,s.useState)(!1),[g,b]=(0,s.useState)("asc"),w=Number(t.get("page")||1),{data:y,error:k,isLoading:N,mutate:T}=(0,h.Ei)(w);t.get("created")&&T();let C=(null==y?void 0:y.total)||1,P=Math.floor(C/u.Ii)+(C%u.Ii==0?0:1),S=e=>{"id"===e&&(p?b("asc"===g?"desc":"asc"):(v(!0),b("asc")))},F=e=>(0,i.y1)(n=>{let r=new URLSearchParams(t);n?r.set(e,n):r.delete(e),m("".concat(j,"?").concat(r.toString()))},300),_=F("name"),D=F("id"),E=F("address"),O=F("role");if(k)return(0,r.jsx)("div",{children:"Failed to load"});if(N)return(0,r.jsx)(f.Z,{});let L=(null==y?void 0:y.data)||[],M=t.get("name"),A=t.get("id"),R=t.get("address"),B=t.get("role");return M&&(L=L.filter(e=>e.name.toLowerCase().includes(M.toLowerCase()))),A&&(L=L.filter(e=>e.id===parseInt(A))),R&&(L=L.filter(e=>e.address.province.includes(R))),B&&(L=L.filter(e=>e.role.id===parseInt(B))),p&&(L=[...L].sort((e,n)=>("asc"===g?1:-1)*(e.id-n.id))),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mt-2 flow-root",children:(0,r.jsx)("div",{className:"inline-block min-w-full align-middle",children:(0,r.jsx)("div",{className:"rounded-lg bg-gray-50 md:pt-0 table-responsive",children:(0,r.jsxs)("table",{className:"employeeTable w-100",children:[(0,r.jsxs)("thead",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"col",onClick:()=>S("id"),children:["ID ",p?"desc"===g?(0,r.jsx)(c.ZTc,{}):(0,r.jsx)(c.NWQ,{}):(0,r.jsx)(d.sj8,{})]}),(0,r.jsx)("th",{scope:"col",children:"Họ v\xe0 t\xean"}),(0,r.jsx)("th",{scope:"col",children:"Địa điểm l\xe0m việc"}),(0,r.jsx)("th",{scope:"col",children:"Chức vụ"}),(0,r.jsx)("th",{scope:"col",children:"Email"}),(0,r.jsx)("th",{scope:"col"})]}),n&&(0,r.jsxs)("tr",{className:"filter",children:[(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{value:A||"",onChange:e=>D(e.target.value),placeholder:"Lọc theo ID"})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{onChange:e=>_(e.target.value),placeholder:"Lọc theo t\xean",value:M||""})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{placeholder:"Lọc theo địa chỉ",value:R||"",onChange:e=>E(e.target.value)})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsxs)("select",{value:B||0,onChange:e=>O(e.target.value),children:[(0,r.jsx)("option",{value:0,disabled:!0,children:"Chọn chức vụ"}),x.Ik.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})}),(0,r.jsx)("th",{scope:"col"}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>{let e=new URLSearchParams(t);e.delete("name"),e.delete("id"),e.delete("address"),e.delete("role"),m("".concat(j,"?").concat(e.toString()))},children:"Clear all"})})]})]}),(0,r.jsx)("tbody",{className:"table-group-divider",children:L.map(e=>{var n;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null==e?void 0:e.id}),(0,r.jsx)("td",{children:e.name||"name"}),(0,r.jsx)("td",{children:(null==e?void 0:null===(n=e.work_plate)||void 0===n?void 0:n.name)||""}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:"badge rounded-pill bg-".concat("secondary"," p-2"),children:null==e?void 0:e.role.name})}),(0,r.jsx)("td",{children:(null==e?void 0:e.email)||"Kh\xf4ng c\xf3"}),(0,r.jsxs)("td",{className:"d-flex justify-content-center gap-1",children:[(0,r.jsx)(a.ButtonDetail,{url:"/dashboard/employee/".concat(null==e?void 0:e.id,"/detail?fromPage=").concat(w)}),(0,r.jsx)(a.EmployeeDelete,{id:null==e?void 0:e.id,refresh:T})]})]},null==e?void 0:e.id)})}),L.length>0?(0,r.jsxs)("caption",{className:"mt-2",children:["Tổng số nh\xe2n vi\xean: ",C]}):(0,r.jsx)("caption",{children:"Kh\xf4ng c\xf3 nh\xe2n vi\xean n\xe0o."})]})})})}),(0,r.jsx)(l.Z,{totalPage:P})]})}},33692:function(){},97908:function(){}},function(e){e.O(0,[6990,9212,6051,1779,5706,2516,6305,7699,7240,7259,522,6950,248,6123,4838,4898,5284,1252,4718,4993,3439,4167,7977,2971,8069,1744],function(){return e(e.s=26430)}),_N_E=e.O()}]);