(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9037,9969,7331],{73194:function(e,n,t){Promise.resolve().then(t.bind(t,79096)),Promise.resolve().then(t.bind(t,50140))},38648:function(e,n,t){"use strict";t.d(n,{y1:function(){return c}});var r=t(2265);function c(e,n,t){var c=this,a=(0,r.useRef)(null),i=(0,r.useRef)(0),s=(0,r.useRef)(null),l=(0,r.useRef)([]),u=(0,r.useRef)(),o=(0,r.useRef)(),d=(0,r.useRef)(e),h=(0,r.useRef)(!0);d.current=e;var m="undefined"!=typeof window,x=!n&&0!==n&&m;if("function"!=typeof e)throw TypeError("Expected a function");n=+n||0;var f=!!(t=t||{}).leading,j=!("trailing"in t)||!!t.trailing,p="maxWait"in t,g="debounceOnServer"in t&&!!t.debounceOnServer,v=p?Math.max(+t.maxWait||0,n):null;return(0,r.useEffect)(function(){return h.current=!0,function(){h.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var n=l.current,t=u.current;return l.current=u.current=null,i.current=e,o.current=d.current.apply(t,n)},t=function(e,n){x&&cancelAnimationFrame(s.current),s.current=x?requestAnimationFrame(e):setTimeout(e,n)},r=function(e){if(!h.current)return!1;var t=e-a.current;return!a.current||t>=n||t<0||p&&e-i.current>=v},b=function(n){return s.current=null,j&&l.current?e(n):(l.current=u.current=null,o.current)},y=function e(){var c=Date.now();if(r(c))return b(c);if(h.current){var s=n-(c-a.current);t(e,p?Math.min(s,v-(c-i.current)):s)}},C=function(){if(m||g){var d=Date.now(),x=r(d);if(l.current=[].slice.call(arguments),u.current=c,a.current=d,x){if(!s.current&&h.current)return i.current=a.current,t(y,n),f?e(a.current):o.current;if(p)return t(y,n),e(a.current)}return s.current||t(y,n),o.current}};return C.cancel=function(){s.current&&(x?cancelAnimationFrame(s.current):clearTimeout(s.current)),i.current=0,l.current=a.current=u.current=s.current=null},C.isPending=function(){return!!s.current},C.flush=function(){return s.current?b(Date.now()):o.current},C},[f,p,n,v,j,x,m,g])}},27305:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s},useAppContext:function(){return i}});var r=t(57437),c=t(2265);let a=(0,c.createContext)({user:null,setUser:()=>{},isAuthenticated:!1}),i=()=>(0,c.useContext)(a);function s(e){let{children:n}=e,[t,i]=(0,c.useState)(null),s=(0,c.useCallback)(e=>{i(e),localStorage.setItem("user",JSON.stringify(e))},[i]);return(0,c.useEffect)(()=>{let e=localStorage.getItem("user");i(e?JSON.parse(e):null)},[i]),(0,r.jsx)(a.Provider,{value:{user:t,setUser:s,isAuthenticated:!!t},children:n})}},79096:function(e,n,t){"use strict";t.r(n),t.d(n,{ButtonDetail:function(){return k},CreateEmployee:function(){return b},CreateOrder:function(){return N},CreateTransaction:function(){return y},CreateTransshipment:function(){return C},EmployeeDelete:function(){return Z},SearchOrder:function(){return v},WorkPlateDelete:function(){return w}});var r=t(57437),c=t(73537),a=t(59853),i=t(66879),s=t(64561),l=t(47907),u=t(71399),o=t(26173),d=t(71709),h=t(6128),m=t(44295),x=t(86123),f=t(2265),j=t(27305),p=t(56512),g=t(9092);function v(){let e=(0,l.useRouter)(),n="";return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z.Control,{type:"text",id:"inputCode",name:"code",formMethod:"get",placeholder:"Nhập m\xe3 đơn h\xe0ng",className:"rounded-pill",onChange:e=>n=e.target.value}),(0,r.jsx)(i.Z,{className:"rounded-pill mx-2",onClick:()=>{""!==n.trim()&&(console.log("orderID",n),e.push("/customer/lookup-order?query=".concat(n)))},children:"\uD83D\uDD0D"})]})}function b(){let e=(0,l.useRouter)();return(0,r.jsxs)(i.Z,{onClick:()=>{e.push("/dashboard/employee/create")},className:"btnCreate",children:[(0,r.jsx)(o.zy7,{size:"2em"}),"Tạo nh\xe2n vi\xean"]})}function y(){let e=(0,l.useRouter)();return(0,r.jsx)(i.Z,{onClick:()=>{e.push("/dashboard/transaction/create")},className:"btnCreate",children:"Tạo điểm giao dịch"})}function C(){let e=(0,l.useRouter)();return(0,r.jsx)(i.Z,{onClick:()=>{e.push("/dashboard/transshipment/create")},className:"btnCreate",children:"Tạo điểm trung chuyển"})}function N(){let e=(0,l.useRouter)();return(0,r.jsxs)(i.Z,{onClick:()=>{e.push("/dashboard/ordered/create")},className:"btnCreate",children:[(0,r.jsx)(d.qS3,{size:"2em"}),"Tạo đơn h\xe0ng"]})}function k(e){let{url:n}=e,t=(0,l.useRouter)();return(0,r.jsx)("button",{onClick:()=>{t.push(n)},className:"btn btn-outline-warning",children:(0,r.jsx)(u.z5B,{})})}function Z(e){var n;let{id:t,refresh:c}=e,[a,l]=(0,f.useState)(!1),u=()=>l(!1),o=async()=>{try{await m.Z.deleteAccount(t).then(e=>{x.toast.success("X\xf3a nh\xe2n vi\xean th\xe0nh c\xf4ng"),c(),l(!1)})}catch(e){x.toast.error("X\xf3a nh\xe2n vi\xean thất bại")}},d=(null===(n=(0,j.useAppContext)().user)||void 0===n?void 0:n.id)===t;return(0,r.jsxs)(r.Fragment,{children:[d?(0,r.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,r.jsx)(h.Psi,{})}):(0,r.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>l(!0),children:(0,r.jsx)(h.Psi,{})}),(0,r.jsxs)(s.Z,{show:a,onHide:u,backdrop:"static",keyboard:!1,children:[(0,r.jsx)(s.Z.Header,{closeButton:!0,children:(0,r.jsx)(s.Z.Title,{children:"X\xe1c nhận x\xf3a nh\xe2n vi\xean"})}),(0,r.jsx)(s.Z.Body,{children:"Bạn c\xf3 chắc chắn muốn x\xf3a nh\xe2n vi\xean n\xe0y kh\xf4ng?"}),(0,r.jsxs)(s.Z.Footer,{children:[(0,r.jsx)(i.Z,{variant:"secondary",onClick:u,children:"Huỷ"}),(0,r.jsx)(i.Z,{variant:"primary",onClick:o,children:"X\xe1c nhận"})]})]})]})}function w(e){var n;let{id:t,refresh:c,type:a}=e,[l,u]=(0,f.useState)(!1),o=()=>u(!1),d=async()=>{try{await p.c.deleteWP(t).then(e=>{a===g.qw.Transaction?x.toast.success("X\xf3a điểm giao dịch th\xe0nh c\xf4ng"):x.toast.success("X\xf3a điểm trung chuyển th\xe0nh c\xf4ng"),c(),u(!1)})}catch(e){a===g.qw.Transaction?x.toast.error("X\xf3a điểm giao dịch thất bại"):x.toast.error("X\xf3a điểm trung chuyển thất bại")}},m=(null===(n=(0,j.useAppContext)().user)||void 0===n?void 0:n.id)===t;return(0,r.jsxs)(r.Fragment,{children:[m?(0,r.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,r.jsx)(h.Psi,{})}):(0,r.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>u(!0),children:(0,r.jsx)(h.Psi,{})}),(0,r.jsxs)(s.Z,{show:l,onHide:o,backdrop:"static",keyboard:!1,children:[(0,r.jsx)(s.Z.Header,{closeButton:!0,children:(0,r.jsx)(s.Z.Title,{children:a===g.qw.Transaction?"X\xe1c nhận xo\xe1 điểm giao dịch":"X\xe1c nhận xo\xe1 điểm trung chuyển"})}),(0,r.jsx)(s.Z.Body,{children:a===g.qw.Transaction?"Bạn c\xf3 chắc chắn muốn x\xf3a điểm giao dịch n\xe0y kh\xf4ng?":"Bạn c\xf3 chắc chắn muốn x\xf3a điểm trung chuyển n\xe0y kh\xf4ng?"}),(0,r.jsxs)(s.Z.Footer,{children:[(0,r.jsx)(i.Z,{variant:"secondary",onClick:o,children:"Huỷ"}),(0,r.jsx)(i.Z,{variant:"primary",onClick:d,children:"X\xe1c nhận"})]})]})]})}},23578:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(57437);function c(){return(0,r.jsx)("div",{className:"spinner-border d-flex justify-content",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}},50140:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(57437),c=t(79096),a=t(65453),i=t(2265),s=t(38648),l=t(47907);t(95944);var u=t(42362),o=t(71709),d=t(46701),h=t(24167),m=t(9092),x=t(23578);function f(e){let{showFilter:n}=e,t=(0,l.useSearchParams)(),f=(0,l.usePathname)(),{replace:j}=(0,l.useRouter)(),[p,g]=(0,i.useState)(!1),[v,b]=(0,i.useState)("asc"),y=Number(t.get("page")||1),{data:C,error:N,isLoading:k,mutate:Z}=(0,h.Ei)(y);t.get("created")&&Z();let w=(null==C?void 0:C.total)||1,S=Math.floor(w/d.Ii)+(w%d.Ii==0?0:1),P=e=>{"id"===e&&(p?b("asc"===v?"desc":"asc"):(g(!0),b("asc")))},R=e=>(0,s.y1)(n=>{let r=new URLSearchParams(t);n?r.set(e,n):r.delete(e),j("".concat(f,"?").concat(r.toString()))},300),T=R("name"),D=R("id"),E=R("address"),X=R("role");if(N)return(0,r.jsx)("div",{children:"Failed to load"});if(k)return(0,r.jsx)(x.Z,{});let B=(null==C?void 0:C.data)||[],I=t.get("name"),A=t.get("id"),L=t.get("address"),F=t.get("role");return I&&(B=B.filter(e=>e.name.toLowerCase().includes(I.toLowerCase()))),A&&(B=B.filter(e=>e.id===parseInt(A))),L&&(B=B.filter(e=>e.address.province.includes(L))),F&&(B=B.filter(e=>e.role.id===parseInt(F))),p&&(B=[...B].sort((e,n)=>("asc"===v?1:-1)*(e.id-n.id))),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mt-2 flow-root",children:(0,r.jsx)("div",{className:"inline-block min-w-full align-middle",children:(0,r.jsx)("div",{className:"rounded-lg bg-gray-50 md:pt-0 table-responsive",children:(0,r.jsxs)("table",{className:"employeeTable w-100",children:[(0,r.jsxs)("thead",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"col",onClick:()=>P("id"),children:["ID ",p?"desc"===v?(0,r.jsx)(u.ZTc,{}):(0,r.jsx)(u.NWQ,{}):(0,r.jsx)(o.sj8,{})]}),(0,r.jsx)("th",{scope:"col",children:"Họ v\xe0 t\xean"}),(0,r.jsx)("th",{scope:"col",children:"Địa điểm l\xe0m việc"}),(0,r.jsx)("th",{scope:"col",children:"Chức vụ"}),(0,r.jsx)("th",{scope:"col",children:"Email"}),(0,r.jsx)("th",{scope:"col"})]}),n&&(0,r.jsxs)("tr",{className:"filter",children:[(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{value:A||"",onChange:e=>D(e.target.value),placeholder:"Lọc theo ID"})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{onChange:e=>T(e.target.value),placeholder:"Lọc theo t\xean",value:I||""})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("input",{placeholder:"Lọc theo địa chỉ",value:L||"",onChange:e=>E(e.target.value)})}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsxs)("select",{value:F||0,onChange:e=>X(e.target.value),children:[(0,r.jsx)("option",{value:0,disabled:!0,children:"Chọn chức vụ"}),m.Ik.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})}),(0,r.jsx)("th",{scope:"col"}),(0,r.jsx)("th",{scope:"col",children:(0,r.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>{let e=new URLSearchParams(t);e.delete("name"),e.delete("id"),e.delete("address"),e.delete("role"),j("".concat(f,"?").concat(e.toString()))},children:"Clear all"})})]})]}),(0,r.jsx)("tbody",{className:"table-group-divider",children:B.map(e=>{var n;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null==e?void 0:e.id}),(0,r.jsx)("td",{children:e.name||"name"}),(0,r.jsx)("td",{children:(null==e?void 0:null===(n=e.work_plate)||void 0===n?void 0:n.name)||""}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:"badge rounded-pill bg-".concat("secondary"," p-2"),children:null==e?void 0:e.role.name})}),(0,r.jsx)("td",{children:(null==e?void 0:e.email)||"Kh\xf4ng c\xf3"}),(0,r.jsxs)("td",{className:"d-flex justify-content-center gap-1",children:[(0,r.jsx)(c.ButtonDetail,{url:"/dashboard/employee/".concat(null==e?void 0:e.id,"/detail?fromPage=").concat(y)}),(0,r.jsx)(c.EmployeeDelete,{id:null==e?void 0:e.id,refresh:Z})]})]},null==e?void 0:e.id)})}),B.length>0?(0,r.jsxs)("caption",{className:"mt-2",children:["Tổng số nh\xe2n vi\xean: ",w]}):(0,r.jsx)("caption",{children:"Kh\xf4ng c\xf3 nh\xe2n vi\xean n\xe0o."})]})})})}),(0,r.jsx)(a.Z,{totalPage:S})]})}},65453:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(57437),c=t(22169),a=t(47907),i=t(8792);function s(e){let{totalPage:n}=e,t=(0,a.usePathname)(),s=(0,a.useSearchParams)(),l=e=>{let n=new URLSearchParams(s);return n.set("page",e.toString()),"".concat(t,"?").concat(n.toString())},u=Number(s.get("page"))||1,o=(0,c.jg)(u,n);return(0,r.jsxs)("ul",{className:"pagination d-flex justify-content-center mt-4",children:[u>1&&(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(i.default,{className:"page-link",href:l(1),"aria-label":"Previous",style:{cursor:"pointer"},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),o.map(e=>(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(i.default,{className:e!=u?"page-link":"page-link active",href:l(e),children:e})},e)),u<n&&(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)(i.default,{href:l(u+1),className:"page-link","aria-label":"Next",style:{cursor:"pointer"},children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})}t(27034)},95944:function(){},27034:function(){}},function(e){e.O(0,[6990,9212,6051,1779,5706,2516,6305,7699,7240,7259,248,6123,4838,4898,5284,1252,4718,4993,4167,2971,8069,1744],function(){return e(e.s=73194)}),_N_E=e.O()}]);