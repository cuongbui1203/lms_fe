(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{10193:function(e,n,t){Promise.resolve().then(t.bind(t,86123)),Promise.resolve().then(t.bind(t,79096)),Promise.resolve().then(t.bind(t,7254))},38648:function(e,n,t){"use strict";t.d(n,{y1:function(){return c}});var r=t(2265);function c(e,n,t){var c=this,a=(0,r.useRef)(null),s=(0,r.useRef)(0),i=(0,r.useRef)(null),l=(0,r.useRef)([]),u=(0,r.useRef)(),o=(0,r.useRef)(),d=(0,r.useRef)(e),h=(0,r.useRef)(!0);d.current=e;var m="undefined"!=typeof window,x=!n&&0!==n&&m;if("function"!=typeof e)throw TypeError("Expected a function");n=+n||0;var f=!!(t=t||{}).leading,j=!("trailing"in t)||!!t.trailing,p="maxWait"in t,g="debounceOnServer"in t&&!!t.debounceOnServer,v=p?Math.max(+t.maxWait||0,n):null;return(0,r.useEffect)(function(){return h.current=!0,function(){h.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var n=l.current,t=u.current;return l.current=u.current=null,s.current=e,o.current=d.current.apply(t,n)},t=function(e,n){x&&cancelAnimationFrame(i.current),i.current=x?requestAnimationFrame(e):setTimeout(e,n)},r=function(e){if(!h.current)return!1;var t=e-a.current;return!a.current||t>=n||t<0||p&&e-s.current>=v},b=function(n){return i.current=null,j&&l.current?e(n):(l.current=u.current=null,o.current)},y=function e(){var c=Date.now();if(r(c))return b(c);if(h.current){var i=n-(c-a.current);t(e,p?Math.min(i,v-(c-s.current)):i)}},C=function(){if(m||g){var d=Date.now(),x=r(d);if(l.current=[].slice.call(arguments),u.current=c,a.current=d,x){if(!i.current&&h.current)return s.current=a.current,t(y,n),f?e(a.current):o.current;if(p)return t(y,n),e(a.current)}return i.current||t(y,n),o.current}};return C.cancel=function(){i.current&&(x?cancelAnimationFrame(i.current):clearTimeout(i.current)),s.current=0,l.current=a.current=u.current=i.current=null},C.isPending=function(){return!!i.current},C.flush=function(){return i.current?b(Date.now()):o.current},C},[f,p,n,v,j,x,m,g])}},27305:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i},useAppContext:function(){return s}});var r=t(57437),c=t(2265);let a=(0,c.createContext)({user:null,setUser:()=>{},isAuthenticated:!1}),s=()=>(0,c.useContext)(a);function i(e){let{children:n}=e,[t,s]=(0,c.useState)(null),i=(0,c.useCallback)(e=>{s(e),localStorage.setItem("user",JSON.stringify(e))},[s]);return(0,c.useEffect)(()=>{let e=localStorage.getItem("user");s(e?JSON.parse(e):null)},[s]),(0,r.jsx)(a.Provider,{value:{user:t,setUser:i,isAuthenticated:!!t},children:n})}},79096:function(e,n,t){"use strict";t.r(n),t.d(n,{ButtonDetail:function(){return k},CreateEmployee:function(){return b},CreateOrder:function(){return N},CreateTransaction:function(){return y},CreateTransshipment:function(){return C},EmployeeDelete:function(){return w},SearchOrder:function(){return v},WorkPlateDelete:function(){return Z}});var r=t(57437),c=t(73537),a=t(59853),s=t(66879),i=t(64561),l=t(47907),u=t(71399),o=t(26173),d=t(71709),h=t(6128),m=t(44295),x=t(86123),f=t(2265),j=t(27305),p=t(56512),g=t(9092);function v(){let e=(0,l.useRouter)(),n="";return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z.Control,{type:"text",id:"inputCode",name:"code",formMethod:"get",placeholder:"Nhập m\xe3 đơn h\xe0ng",className:"rounded-pill",onChange:e=>n=e.target.value}),(0,r.jsx)(s.Z,{className:"rounded-pill mx-2",onClick:()=>{""!==n.trim()&&(console.log("orderID",n),e.push("/customer/lookup-order?query=".concat(n)))},children:"\uD83D\uDD0D"})]})}function b(){let e=(0,l.useRouter)();return(0,r.jsxs)(s.Z,{onClick:()=>{e.push("/dashboard/employee/create")},className:"btnCreate",children:[(0,r.jsx)(o.zy7,{size:"2em"}),"Tạo nh\xe2n vi\xean"]})}function y(){let e=(0,l.useRouter)();return(0,r.jsx)(s.Z,{onClick:()=>{e.push("/dashboard/transaction/create")},className:"btnCreate",children:"Tạo điểm giao dịch"})}function C(){let e=(0,l.useRouter)();return(0,r.jsx)(s.Z,{onClick:()=>{e.push("/dashboard/transshipment/create")},className:"btnCreate",children:"Tạo điểm trung chuyển"})}function N(){let e=(0,l.useRouter)();return(0,r.jsxs)(s.Z,{onClick:()=>{e.push("/dashboard/ordered/create")},className:"btnCreate",children:[(0,r.jsx)(d.qS3,{size:"2em"}),"Tạo đơn h\xe0ng"]})}function k(e){let{url:n}=e,t=(0,l.useRouter)();return(0,r.jsx)("button",{onClick:()=>{t.push(n)},className:"btn btn-outline-warning",children:(0,r.jsx)(u.z5B,{})})}function w(e){var n;let{id:t,refresh:c}=e,[a,l]=(0,f.useState)(!1),u=()=>l(!1),o=async()=>{try{await m.Z.deleteAccount(t).then(e=>{x.toast.success("X\xf3a nh\xe2n vi\xean th\xe0nh c\xf4ng"),c(),l(!1)})}catch(e){x.toast.error("X\xf3a nh\xe2n vi\xean thất bại")}},d=(null===(n=(0,j.useAppContext)().user)||void 0===n?void 0:n.id)===t;return(0,r.jsxs)(r.Fragment,{children:[d?(0,r.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,r.jsx)(h.Psi,{})}):(0,r.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>l(!0),children:(0,r.jsx)(h.Psi,{})}),(0,r.jsxs)(i.Z,{show:a,onHide:u,backdrop:"static",keyboard:!1,children:[(0,r.jsx)(i.Z.Header,{closeButton:!0,children:(0,r.jsx)(i.Z.Title,{children:"X\xe1c nhận x\xf3a nh\xe2n vi\xean"})}),(0,r.jsx)(i.Z.Body,{children:"Bạn c\xf3 chắc chắn muốn x\xf3a nh\xe2n vi\xean n\xe0y kh\xf4ng?"}),(0,r.jsxs)(i.Z.Footer,{children:[(0,r.jsx)(s.Z,{variant:"secondary",onClick:u,children:"Huỷ"}),(0,r.jsx)(s.Z,{variant:"primary",onClick:o,children:"X\xe1c nhận"})]})]})]})}function Z(e){var n;let{id:t,refresh:c,type:a}=e,[l,u]=(0,f.useState)(!1),o=()=>u(!1),d=async()=>{try{await p.c.deleteWP(t).then(e=>{a===g.qw.Transaction?x.toast.success("X\xf3a điểm giao dịch th\xe0nh c\xf4ng"):x.toast.success("X\xf3a điểm trung chuyển th\xe0nh c\xf4ng"),c(),u(!1)})}catch(e){a===g.qw.Transaction?x.toast.error("X\xf3a điểm giao dịch thất bại"):x.toast.error("X\xf3a điểm trung chuyển thất bại")}},m=(null===(n=(0,j.useAppContext)().user)||void 0===n?void 0:n.id)===t;return(0,r.jsxs)(r.Fragment,{children:[m?(0,r.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,r.jsx)(h.Psi,{})}):(0,r.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>u(!0),children:(0,r.jsx)(h.Psi,{})}),(0,r.jsxs)(i.Z,{show:l,onHide:o,backdrop:"static",keyboard:!1,children:[(0,r.jsx)(i.Z.Header,{closeButton:!0,children:(0,r.jsx)(i.Z.Title,{children:a===g.qw.Transaction?"X\xe1c nhận xo\xe1 điểm giao dịch":"X\xe1c nhận xo\xe1 điểm trung chuyển"})}),(0,r.jsx)(i.Z.Body,{children:a===g.qw.Transaction?"Bạn c\xf3 chắc chắn muốn x\xf3a điểm giao dịch n\xe0y kh\xf4ng?":"Bạn c\xf3 chắc chắn muốn x\xf3a điểm trung chuyển n\xe0y kh\xf4ng?"}),(0,r.jsxs)(i.Z.Footer,{children:[(0,r.jsx)(s.Z,{variant:"secondary",onClick:o,children:"Huỷ"}),(0,r.jsx)(s.Z,{variant:"primary",onClick:d,children:"X\xe1c nhận"})]})]})]})}},23578:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(57437);function c(){return(0,r.jsx)("div",{className:"spinner-border d-flex justify-content",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},65453:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(57437),c=t(22169),a=t(47907),s=t(8792);function i(e){let{totalPage:n}=e,t=(0,a.usePathname)(),i=(0,a.useSearchParams)(),l=e=>{let n=new URLSearchParams(i);return n.set("page",e.toString()),"".concat(t,"?").concat(n.toString())},u=Number(i.get("page"))||1,o=(0,c.jg)(u,n);return(0,r.jsxs)("ul",{className:"pagination d-flex justify-content-center mt-4",children:[u>1&&(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(s.default,{className:"page-link",href:l(1),"aria-label":"Previous",style:{cursor:"pointer"},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),o.map(e=>(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(s.default,{className:e!=u?"page-link":"page-link active",href:l(e),children:e})},e)),u<n&&(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(s.default,{href:l(u+1),className:"page-link","aria-label":"Next",style:{cursor:"pointer"},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})}t(27034)},7254:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(57437),c=t(47907),a=t(65453);t(95944);var s=t(79096),i=t(24167),l=t(2265),u=t(46701),o=t(42362),d=t(71709),h=t(38648),m=t(23578);function x(e){let{page:n,type:t,listProvince:x}=e,f=(0,c.useSearchParams)(),j=(0,c.usePathname)(),{replace:p}=(0,c.useRouter)(),[g,v]=(0,l.useState)(!1),[b,y]=(0,l.useState)("asc"),{data:C,error:N,isLoading:k,mutate:w}=(0,i.JN)(n,t),Z=2===t?"/dashboard/transaction":"/dashboard/transshipment";f.get("created")&&w();let P=(null==C?void 0:C.total)||1,S=Math.floor(P/u.ud)+(P%u.ud==0?0:1),T=e=>{"id"===e&&(g?y("asc"===b?"desc":"asc"):(v(!0),y("asc")))},R=e=>(0,h.y1)(n=>{let t=new URLSearchParams(f);n?t.set(e,n):t.delete(e),p("".concat(j,"?").concat(t.toString()))},300),D=R("id"),L=R("name"),X=R("manager"),B=R("address");if(N)return(0,r.jsx)("div",{children:"Failed to load"});if(k)return(0,r.jsx)(m.Z,{});let A=(null==C?void 0:C.data)||[],E=f.get("name"),F=f.get("id"),q=f.get("address"),H=f.get("manager");return E&&(A=A.filter(e=>e.name.toLowerCase().includes(E.toLowerCase()))),F&&(A=A.filter(e=>e.id===parseInt(F))),q&&(A=A.filter(e=>e.address.provinceCode===q)),H&&(A=A.filter(e=>{var n;return null===(n=e.manager)||void 0===n?void 0:n.name.toLowerCase().includes(H.toLowerCase())})),g&&(A=[...A].sort((e,n)=>("asc"===b?1:-1)*(e.id-n.id))),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mt-2 flow-root",children:(0,r.jsx)("div",{className:"inline-block min-w-full align-middle",children:(0,r.jsx)("div",{className:"rounded-lg bg-gray-50 md:pt-0 table-responsive text-nowrap",children:(0,r.jsxs)("table",{className:"transactionTable w-100",children:[(0,r.jsxs)("thead",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"col",className:"col-sm-1",onClick:()=>T("id"),children:["ID ",g?"desc"===b?(0,r.jsx)(o.ZTc,{}):(0,r.jsx)(o.NWQ,{}):(0,r.jsx)(d.sj8,{})]}),(0,r.jsx)("th",{scope:"col",className:"col-sm-2",children:"T\xean điểm"}),(0,r.jsx)("th",{scope:"col",className:"col-sm-2",children:"Trưởng điểm"}),(0,r.jsx)("th",{scope:"col",className:"col-sm-6",children:"Địa chỉ"}),(0,r.jsx)("th",{scope:"col"})]}),(0,r.jsxs)("tr",{className:"filter",children:[(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{value:F||"",onChange:e=>D(e.target.value),placeholder:"Lọc theo ID"})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{value:E||"",onChange:e=>L(e.target.value),placeholder:"Lọc theo t\xean điểm"})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{value:H||"",onChange:e=>X(e.target.value),placeholder:"Lọc theo t\xean trưởng điểm"})}),(0,r.jsx)("th",{scope:"col",className:"col-sm-6",children:(0,r.jsxs)("select",{onChange:e=>B(e.target.value),value:q||"0",className:"w-100",children:[(0,r.jsx)("option",{value:"0",disabled:!0,children:"Chọn địa chỉ"}),null==x?void 0:x.map(e=>(0,r.jsx)("option",{value:e.code,children:e.name},e.code))]})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>{let e=new URLSearchParams(f);e.delete("name"),e.delete("id"),e.delete("manager"),e.delete("address"),p("".concat(j,"?").concat(e.toString()))},children:"Clear all"})})]})]}),(0,r.jsx)("tbody",{className:"table-group-divider",children:null==A?void 0:A.map(e=>{var c;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.id}),(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:null===(c=e.manager)||void 0===c?void 0:c.name}),(0,r.jsxs)("td",{children:[e.address.ward,", ",e.address.district,", ",e.address.province]}),(0,r.jsxs)("td",{className:"d-flex justify-content-center gap-1",children:[(0,r.jsx)(s.ButtonDetail,{url:"".concat(Z,"/").concat(null==e?void 0:e.id,"/detail?fromPage=").concat(n)}),(0,r.jsx)(s.WorkPlateDelete,{id:null==e?void 0:e.id,refresh:w,type:t})]})]},e.id)})})]})})})}),A.length>0?(0,r.jsxs)("div",{className:"mt-2",children:["Tổng số điểm: ",P]}):(0,r.jsx)("div",{children:"Kh\xf4ng c\xf3 điểm n\xe0o."}),(0,r.jsx)(a.Z,{totalPage:S})]})}},95944:function(){},27034:function(){}}]);