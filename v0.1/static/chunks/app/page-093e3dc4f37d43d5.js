(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{1692:function(e,n,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,80590)),Promise.resolve().then(r.bind(r,97753)),Promise.resolve().then(r.bind(r,68647)),Promise.resolve().then(r.bind(r,54581)),Promise.resolve().then(r.bind(r,5967)),Promise.resolve().then(r.bind(r,68093)),Promise.resolve().then(r.bind(r,44426)),Promise.resolve().then(r.bind(r,26143)),Promise.resolve().then(r.bind(r,40529)),Promise.resolve().then(r.bind(r,2920)),Promise.resolve().then(r.bind(r,1269)),Promise.resolve().then(r.bind(r,31314)),Promise.resolve().then(r.bind(r,55914)),Promise.resolve().then(r.bind(r,79096)),Promise.resolve().then(r.bind(r,53824)),Promise.resolve().then(r.t.bind(r,48412,23)),Promise.resolve().then(r.t.bind(r,3654,23))},31314:function(e,n,r){"use strict";r.r(n),r.d(n,{propTypes:function(){return u}});var a=r(16480),t=r.n(a),i=r(2265),o=r(74404),s=r.n(o),c=r(12865),d=r(57437);let u={bsPrefix:s().string,fluid:s().bool,rounded:s().bool,roundedCircle:s().bool,thumbnail:s().bool},l=i.forwardRef((e,n)=>{let{bsPrefix:r,className:a,fluid:i=!1,rounded:o=!1,roundedCircle:s=!1,thumbnail:u=!1,...l}=e;return r=(0,c.vE)(r,"img"),(0,d.jsx)("img",{ref:n,...l,className:t()(a,i&&"".concat(r,"-fluid"),o&&"rounded",s&&"rounded-circle",u&&"".concat(r,"-thumbnail"))})});l.displayName="Image",n.default=l},44295:function(e,n,r){"use strict";var a=r(46701),t=r(89348);n.Z={getInfo:(e,n)=>t.ZP.get("api/users/".concat(n),{headers:{Authorization:"Bearer ".concat(e)}}),getInfoClient:e=>t.ZP.get("api/users/me"),listAccountClient:e=>t.ZP.get("api/users?pageSize=".concat(a.Ii,"&&page=").concat(e)),changePasswordClient:e=>t.ZP.put("api/users/change-password",e),createAccount:e=>t.ZP.post("api/users/create/employee",e),deleteAccount:e=>t.ZP.delete("api/users/".concat(e))}},56512:function(e,n,r){"use strict";r.d(n,{c:function(){return i}});var a=r(46701),t=r(89348);let i={getWorkPlateClient:(e,n)=>t.ZP.get("api/work-plates?pageSize=".concat(a.ud,"&&page=").concat(e,"&&type_id=").concat(n)),getWorkPlate:e=>t.ZP.get("api/work-plates",{headers:{Authorization:"Bearer ".concat(e)}}),getWorkPlateSuggestClient:e=>t.ZP.get("api/work-plates/suggestion-wp?address_id=".concat(e)),createWP:e=>t.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,n)=>t.ZP.get("api/work-plates/".concat(n),{headers:{Authorization:"Bearer ".concat(e)}}),updateWP:(e,n)=>t.ZP.put("api/work-plates/".concat(e),n),deleteWP:e=>t.ZP.delete("api/work-plates/".concat(e))}},79096:function(e,n,r){"use strict";r.r(n),r.d(n,{ButtonDetail:function(){return j},CreateEmployee:function(){return T},CreateOrder:function(){return y},CreateTransaction:function(){return f},CreateTransshipment:function(){return P},EmployeeDelete:function(){return C},SearchOrder:function(){return x},WorkPlateDelete:function(){return k}});var a=r(57437),t=r(73537),i=r(59853),o=r(66879),s=r(64561),c=r(47907),d=r(71399),u=r(26173),l=r(71709),h=r(6128),m=r(44295),g=r(86123),p=r(2265),b=r(27305),v=r(56512),_=r(9092);function x(){let e=(0,c.useRouter)(),n="";return(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(i.Z.Control,{type:"text",id:"inputCode",name:"code",formMethod:"get",placeholder:"Nhập m\xe3 đơn h\xe0ng",className:"rounded-pill",onChange:e=>n=e.target.value}),(0,a.jsx)(o.Z,{className:"rounded-pill mx-2",onClick:()=>{""!==n.trim()&&(console.log("orderID",n),e.push("/customer/lookup-order?query=".concat(n)))},children:"\uD83D\uDD0D"})]})}function T(){let e=(0,c.useRouter)();return(0,a.jsxs)(o.Z,{onClick:()=>{e.push("/dashboard/employee/create")},className:"btnCreate",children:[(0,a.jsx)(u.zy7,{size:"2em"}),"Tạo nh\xe2n vi\xean"]})}function f(){let e=(0,c.useRouter)();return(0,a.jsx)(o.Z,{onClick:()=>{e.push("/dashboard/transaction/create")},className:"btnCreate",children:"Tạo điểm giao dịch"})}function P(){let e=(0,c.useRouter)();return(0,a.jsx)(o.Z,{onClick:()=>{e.push("/dashboard/transshipment/create")},className:"btnCreate",children:"Tạo điểm trung chuyển"})}function y(){let e=(0,c.useRouter)();return(0,a.jsxs)(o.Z,{onClick:()=>{e.push("/dashboard/ordered/create")},className:"btnCreate",children:[(0,a.jsx)(l.qS3,{size:"2em"}),"Tạo đơn h\xe0ng"]})}function j(e){let{url:n}=e,r=(0,c.useRouter)();return(0,a.jsx)("button",{onClick:()=>{r.push(n)},className:"btn btn-outline-warning",children:(0,a.jsx)(d.z5B,{})})}function C(e){var n;let{id:r,refresh:t}=e,[i,c]=(0,p.useState)(!1),d=()=>c(!1),u=async()=>{try{await m.Z.deleteAccount(r).then(e=>{g.toast.success("X\xf3a nh\xe2n vi\xean th\xe0nh c\xf4ng"),t(),c(!1)})}catch(e){g.toast.error("X\xf3a nh\xe2n vi\xean thất bại")}},l=(null===(n=(0,b.useAppContext)().user)||void 0===n?void 0:n.id)===r;return(0,a.jsxs)(a.Fragment,{children:[l?(0,a.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,a.jsx)(h.Psi,{})}):(0,a.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>c(!0),children:(0,a.jsx)(h.Psi,{})}),(0,a.jsxs)(s.Z,{show:i,onHide:d,backdrop:"static",keyboard:!1,children:[(0,a.jsx)(s.Z.Header,{closeButton:!0,children:(0,a.jsx)(s.Z.Title,{children:"X\xe1c nhận x\xf3a nh\xe2n vi\xean"})}),(0,a.jsx)(s.Z.Body,{children:"Bạn c\xf3 chắc chắn muốn x\xf3a nh\xe2n vi\xean n\xe0y kh\xf4ng?"}),(0,a.jsxs)(s.Z.Footer,{children:[(0,a.jsx)(o.Z,{variant:"secondary",onClick:d,children:"Huỷ"}),(0,a.jsx)(o.Z,{variant:"primary",onClick:u,children:"X\xe1c nhận"})]})]})]})}function k(e){var n;let{id:r,refresh:t,type:i}=e,[c,d]=(0,p.useState)(!1),u=()=>d(!1),l=async()=>{try{await v.c.deleteWP(r).then(e=>{i===_.qw.Transaction?g.toast.success("X\xf3a điểm giao dịch th\xe0nh c\xf4ng"):g.toast.success("X\xf3a điểm trung chuyển th\xe0nh c\xf4ng"),t(),d(!1)})}catch(e){i===_.qw.Transaction?g.toast.error("X\xf3a điểm giao dịch thất bại"):g.toast.error("X\xf3a điểm trung chuyển thất bại")}},m=(null===(n=(0,b.useAppContext)().user)||void 0===n?void 0:n.id)===r;return(0,a.jsxs)(a.Fragment,{children:[m?(0,a.jsx)("button",{className:"btn btn-outline-danger ",disabled:!0,children:(0,a.jsx)(h.Psi,{})}):(0,a.jsx)("button",{className:"btn btn-outline-danger",onClick:()=>d(!0),children:(0,a.jsx)(h.Psi,{})}),(0,a.jsxs)(s.Z,{show:c,onHide:u,backdrop:"static",keyboard:!1,children:[(0,a.jsx)(s.Z.Header,{closeButton:!0,children:(0,a.jsx)(s.Z.Title,{children:i===_.qw.Transaction?"X\xe1c nhận xo\xe1 điểm giao dịch":"X\xe1c nhận xo\xe1 điểm trung chuyển"})}),(0,a.jsx)(s.Z.Body,{children:i===_.qw.Transaction?"Bạn c\xf3 chắc chắn muốn x\xf3a điểm giao dịch n\xe0y kh\xf4ng?":"Bạn c\xf3 chắc chắn muốn x\xf3a điểm trung chuyển n\xe0y kh\xf4ng?"}),(0,a.jsxs)(s.Z.Footer,{children:[(0,a.jsx)(o.Z,{variant:"secondary",onClick:u,children:"Huỷ"}),(0,a.jsx)(o.Z,{variant:"primary",onClick:l,children:"X\xe1c nhận"})]})]})]})}},9092:function(e,n,r){"use strict";r.d(n,{CJ:function(){return T},DR:function(){return _},Ik:function(){return m},ZJ:function(){return t},i4:function(){return h},iF:function(){return x},ix:function(){return b},qw:function(){return v},uN:function(){return p},uU:function(){return g}});var a,t,i=r(57437),o=r(70784),s=r(52840),c=r(71709),d=r(56733),u=r(57252),l=r(61975);let h={Admin:"Admin",User:"User",Driver:"Driver",Employee:"Employee",Manager:"Manager",Shipper:"Shipper"},m=[{id:1,name:"Admin"},{id:3,name:"Driver"},{id:4,name:"Employee"},{id:5,name:"Manager"},{id:6,name:"Shipper"}],g={Admin:{id:1,name:"Quản trị vi\xean",tabs:["dashboard","manageTransshipment","manageTransactions","manageEmployees"]},Manager:{id:5,name:"Quản l\xed",tabs:["dashboard","manageEmployees","manageWaitingOrders","manageReceivingOrders","historyOrders","createOrder"]},Driver:{id:3,name:"T\xe0i xế",tabs:["dashboard","leavingOrders"]},Employee:{id:4,name:"Nh\xe2n vi\xean",tabs:["dashboard","createOrder","manageWaitingOrders","manageReceivingOrders","historyOrders"]},Shipper:{id:6,name:"Shipper",tabs:["dashboard","manageOrders"]}},p=[{id:1,name:"Tỉnh / Th\xe0nh phố"},{id:2,name:"Quận / Huyện"},{id:3,name:"Phường / X\xe3"}],b={dashboard:{url:"/dashboard",name:"Trang ch\xednh",icon:(0,i.jsx)(o.JZ9,{size:"2em"})},information:{url:"/dashboard/information",name:"Th\xf4ng tin",icon:(0,i.jsx)(o.JZ9,{size:"2em"})},manageEmployees:{url:"/dashboard/employee",name:"Nh\xe2n vi\xean",icon:(0,i.jsx)(s.Jwp,{size:"2em"})},detailEmployee:{url:"/dashboard/employee/[id]/detail",name:"Th\xf4ng tin nh\xe2n vi\xean",icon:(0,i.jsx)(d.zJl,{size:"2em"})},createEmployee:{url:"/dashboard/employee/create",name:"Tạo t\xe0i khoản nh\xe2n vi\xean",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageTransshipment:{url:"/dashboard/transshipment",name:"Điểm trung chuyển",icon:(0,i.jsx)(o.X3C,{size:"2em"})},createTransshipment:{url:"/dashboard/transshipment/create",name:"Tạo điểm trung chuyển",icon:(0,i.jsx)(d.zJl,{size:"2em"})},detailTransshipment:{url:"/dashboard/transshipment/[id]/detail",name:"Chi tiết điểm trung chuyển",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageTransactions:{url:"/dashboard/transaction",name:"Điểm giao dịch",icon:(0,i.jsx)(l.la$,{size:"2em"})},createTransaction:{url:"/dashboard/transaction/create",name:"Tạo điểm giao dịch",icon:(0,i.jsx)(d.zJl,{size:"2em"})},detailTransaction:{url:"/dashboard/transaction/[id]/detail",name:"Chi tiết điểm giao dịch",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageWaitingOrders:{url:"/dashboard/ordered/waiting",name:"H\xe0ng chờ gửi",icon:(0,i.jsx)(u.HwV,{size:"2em"})},manageReceivingOrders:{url:"/dashboard/ordered/receiving",name:"H\xe0ng chờ nhận",icon:(0,i.jsx)(u.cFG,{size:"2em"})},historyOrders:{url:"/dashboard/ordered/history",name:"Lịch sử đơn h\xe0ng",icon:(0,i.jsx)(c.Nt_,{size:"2em"})},leavingOrders:{url:"/dashboard/ordered/leave",name:"H\xe0ng chờ chuyển đi",icon:(0,i.jsx)(u.HwV,{size:"2em"})},detailOrder:{url:"/dashboard/ordered/[id]/detail",name:"Chi tiết đơn h\xe0ng",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageOrders:{url:"/dashboard/ordered",name:"Đơn h\xe0ng",icon:(0,i.jsx)(c.bhi,{size:"2em"})},createOrder:{url:"/dashboard/ordered/create",name:"Tạo đơn h\xe0ng",icon:(0,i.jsx)(c.qS3,{size:"2em"})}},v={Warehouse:1,Transaction:2,Transshipment:3},_={WAIT_F_DELIVERY:1,R_DELIVERY:2,DONE:3,LEAVE_TRANSPORT_POINT:4,AT_TRANSPORT_POINT:5,AT_TRANSACTION_POINT:13,LEAVE_TRANSACTION_POINT:14,SHIPPING:6,TO_THE_TRANSPORT_POINT:7,TO_THE_TRANSACTION_POINT:8,RETURN:9,CREATE:10,COMPLETE:11,FAIL:12},x={1:{name:"Chờ gửi",color:"warning"},2:{name:"Đang vận chuyển",color:"info"},3:{name:"Ho\xe0n th\xe0nh",color:"success"},4:{name:"Rời đi điểm trung chuyển",color:"info"},5:{name:"Tại điểm trung chuyển",color:"info"},13:{name:"Tại điểm giao dịch",color:"info"},14:{name:"Rời đi điểm giao dịch",color:"info"},6:{name:"Đang vận chuyển",color:"info"},7:{name:"Đến điểm trung chuyển",color:"info"},8:{name:"Đến điểm giao dịch",color:"info"},9:{name:"Ho\xe0n trả",color:"info"},10:{name:"Tạo mới",color:"primary"},11:{name:"Ho\xe0n th\xe0nh",color:"success"},12:{name:"Thất bại",color:"danger"}},T={NORMAL:{name:"B\xecnh thường",value:10},fragile:{name:"Dễ vỡ",value:9},oversized:{name:"Qu\xe1 khổ",value:11},hazardous:{name:"Nguy hiểm",value:12}};(a=t||(t={})).Waiting="waiting",a.Receiving="receiving",a.History="history",a.Leave="leave",a.All="all"},46701:function(e,n,r){"use strict";r.d(n,{Ii:function(){return a},LL:function(){return i},ud:function(){return t}});let a=5,t=10,i=10},48412:function(e){e.exports={homePageContainer:"home_homePageContainer__Hn6Ia",banner:"home_banner__nmXh5",bannerItemContainer:"home_bannerItemContainer__WOhB7",lookup:"home_lookup__mm2bv",lookupContainer:"home_lookupContainer__wzw80",lookupItem:"home_lookupItem__hiVFL",service:"home_service__d0tXo",serviceTitle:"home_serviceTitle__hcA9V",serviceContainer:"home_serviceContainer__SiENt",serviceItem:"home_serviceItem___feOC",aboutUs:"home_aboutUs__nMtum",aboutUsTitle:"home_aboutUsTitle__x8mAb",aboutUsWrapperItem:"home_aboutUsWrapperItem__bMAaq",aboutUsItem:"home_aboutUsItem__Ykj0_"}}},function(e){e.O(0,[6990,9212,6051,1779,5706,2516,6305,7699,7240,7259,248,6123,4838,5284,4718,4993,3439,2124,6855,2971,8069,1744],function(){return e(e.s=1692)}),_N_E=e.O()}]);