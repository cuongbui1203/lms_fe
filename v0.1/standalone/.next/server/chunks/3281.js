exports.id=3281,exports.ids=[3281],exports.modules={66810:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var n=s(91767),a=s(68356);let r={getInfo:(e,t)=>a.ZP.get(`api/users/${t}`,{headers:{Authorization:`Bearer ${e}`}}),getInfoClient:e=>a.ZP.get("api/users/me"),listAccountClient:e=>a.ZP.get(`api/users?pageSize=${n.Ii}&&page=${e}`),changePasswordClient:e=>a.ZP.put("api/users/change-password",e),createAccount:e=>a.ZP.post("api/users/create/employee",e),deleteAccount:e=>a.ZP.delete(`api/users/${e}`)}},44601:(e,t,s)=>{"use strict";s.d(t,{T:()=>a});var n=s(68356);let a={getListOrder:(e,t)=>n.ZP.get(`api/orders?statuses=[${e}]&page=${t}`),createOrder:e=>n.ZP.post("api/orders",e),getOrderDetail:e=>n.ZP.get(`api/orders/${e}`),addGoodOrder:(e,t)=>n.ZP.post(`api/orders/${e}/multi`,t),deleteOrder:e=>n.ZP.delete(`api/orders/multi?orders=[${e}]`),getNextPosition:e=>n.ZP.get(`/api/orders/multi/next?orders=[${e}]`),sendOrder:e=>n.ZP.post("/api/orders/multi/next",e),receiveOrder:e=>n.ZP.put("/api/orders/multi/arrived",e),leaveOrder:e=>n.ZP.put("/api/orders/multi/leave",e)}},84700:(e,t,s)=>{"use strict";s.d(t,{c:()=>r});var n=s(91767),a=s(68356);let r={getWorkPlateClient:(e,t)=>a.ZP.get(`api/work-plates?pageSize=${n.ud}&&page=${e}&&type_id=${t}`),getWorkPlate:e=>a.ZP.get("api/work-plates",{headers:{Authorization:`Bearer ${e}`}}),getWorkPlateSuggestClient:e=>a.ZP.get(`api/work-plates/suggestion-wp?address_id=${e}`),createWP:e=>a.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,t)=>a.ZP.get(`api/work-plates/${t}`,{headers:{Authorization:`Bearer ${e}`}}),updateWP:(e,t)=>a.ZP.put(`api/work-plates/${e}`,t),deleteWP:e=>a.ZP.delete(`api/work-plates/${e}`)}},83001:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ButtonDetail:()=>P,CreateEmployee:()=>b,CreateOrder:()=>k,CreateTransaction:()=>N,CreateTransshipment:()=>v,EmployeeDelete:()=>f,SearchOrder:()=>y,WorkPlateDelete:()=>C});var n=s(95344),a=s(79639),r=s(58510),i=s(78154),c=s(98453),d=s(8428),l=s(49921),o=s(19868),h=s(36868),u=s(90981),p=s(66810),x=s(69697),g=s(3729),j=s(12772),m=s(84700),Z=s(73705);function y(){let e=(0,d.useRouter)(),t="";return(0,n.jsxs)(a.Z,{children:[n.jsx(r.Z.Control,{type:"text",id:"inputCode",name:"code",formMethod:"get",placeholder:"Nhập m\xe3 đơn h\xe0ng",className:"rounded-pill",onChange:e=>t=e.target.value}),n.jsx(i.Z,{className:"rounded-pill mx-2",onClick:()=>{""!==t.trim()&&(console.log("orderID",t),e.push(`/customer/lookup-order?query=${t}`))},children:"\uD83D\uDD0D"})]})}function b(){let e=(0,d.useRouter)();return(0,n.jsxs)(i.Z,{onClick:()=>{e.push("/dashboard/employee/create")},className:"btnCreate",children:[n.jsx(o.zy7,{size:"2em"}),"Tạo nh\xe2n vi\xean"]})}function N(){let e=(0,d.useRouter)();return n.jsx(i.Z,{onClick:()=>{e.push("/dashboard/transaction/create")},className:"btnCreate",children:"Tạo điểm giao dịch"})}function v(){let e=(0,d.useRouter)();return n.jsx(i.Z,{onClick:()=>{e.push("/dashboard/transshipment/create")},className:"btnCreate",children:"Tạo điểm trung chuyển"})}function k(){let e=(0,d.useRouter)();return(0,n.jsxs)(i.Z,{onClick:()=>{e.push("/dashboard/ordered/create")},className:"btnCreate",children:[n.jsx(h.qS3,{size:"2em"}),"Tạo đơn h\xe0ng"]})}function P({url:e}){let t=(0,d.useRouter)();return n.jsx("button",{onClick:()=>{t.push(e)},className:"btn btn-outline-warning",children:n.jsx(l.z5B,{})})}function f({id:e,refresh:t}){let[s,a]=(0,g.useState)(!1),r=()=>a(!1),d=async()=>{try{await p.Z.deleteAccount(e).then(e=>{x.toast.success("X\xf3a nh\xe2n vi\xean th\xe0nh c\xf4ng"),t(),a(!1)})}catch(e){x.toast.error("X\xf3a nh\xe2n vi\xean thất bại")}},l=j.useAppContext().user?.id===e;return(0,n.jsxs)(n.Fragment,{children:[l?n.jsx("button",{className:"btn btn-outline-danger ",disabled:!0,children:n.jsx(u.Psi,{})}):n.jsx("button",{className:"btn btn-outline-danger",onClick:()=>a(!0),children:n.jsx(u.Psi,{})}),(0,n.jsxs)(c.Z,{show:s,onHide:r,backdrop:"static",keyboard:!1,children:[n.jsx(c.Z.Header,{closeButton:!0,children:n.jsx(c.Z.Title,{children:"X\xe1c nhận x\xf3a nh\xe2n vi\xean"})}),n.jsx(c.Z.Body,{children:"Bạn c\xf3 chắc chắn muốn x\xf3a nh\xe2n vi\xean n\xe0y kh\xf4ng?"}),(0,n.jsxs)(c.Z.Footer,{children:[n.jsx(i.Z,{variant:"secondary",onClick:r,children:"Huỷ"}),n.jsx(i.Z,{variant:"primary",onClick:d,children:"X\xe1c nhận"})]})]})]})}function C({id:e,refresh:t,type:s}){let[a,r]=(0,g.useState)(!1),d=()=>r(!1),l=async()=>{try{await m.c.deleteWP(e).then(e=>{s===Z.qw.Transaction?x.toast.success("X\xf3a điểm giao dịch th\xe0nh c\xf4ng"):x.toast.success("X\xf3a điểm trung chuyển th\xe0nh c\xf4ng"),t(),r(!1)})}catch(e){s===Z.qw.Transaction?x.toast.error("X\xf3a điểm giao dịch thất bại"):x.toast.error("X\xf3a điểm trung chuyển thất bại")}},o=j.useAppContext().user?.id===e;return(0,n.jsxs)(n.Fragment,{children:[o?n.jsx("button",{className:"btn btn-outline-danger ",disabled:!0,children:n.jsx(u.Psi,{})}):n.jsx("button",{className:"btn btn-outline-danger",onClick:()=>r(!0),children:n.jsx(u.Psi,{})}),(0,n.jsxs)(c.Z,{show:a,onHide:d,backdrop:"static",keyboard:!1,children:[n.jsx(c.Z.Header,{closeButton:!0,children:n.jsx(c.Z.Title,{children:s===Z.qw.Transaction?"X\xe1c nhận xo\xe1 điểm giao dịch":"X\xe1c nhận xo\xe1 điểm trung chuyển"})}),n.jsx(c.Z.Body,{children:s===Z.qw.Transaction?"Bạn c\xf3 chắc chắn muốn x\xf3a điểm giao dịch n\xe0y kh\xf4ng?":"Bạn c\xf3 chắc chắn muốn x\xf3a điểm trung chuyển n\xe0y kh\xf4ng?"}),(0,n.jsxs)(c.Z.Footer,{children:[n.jsx(i.Z,{variant:"secondary",onClick:d,children:"Huỷ"}),n.jsx(i.Z,{variant:"primary",onClick:l,children:"X\xe1c nhận"})]})]})]})}},63281:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>O});var n=s(95344),a=s(83001),r=s(25131),i=s(8428),c=s(3729),d=s(24229),l=s(91767),o=s(94021),h=s(36868),u=s(11453),p=s(73705);s(98915);var x=s(78154),g=s(98453),j=s(21204),m=s(95209),Z=s(58510),y=s(45136);function b({listOrder:e}){return(0,n.jsxs)("table",{className:"orderTable w-100",children:[n.jsx("thead",{children:(0,n.jsxs)("tr",{children:[n.jsx("th",{scope:"col",children:"ID"}),n.jsx("th",{scope:"col",children:"Địa chỉ gửi"}),n.jsx("th",{scope:"col",children:"Địa chỉ nhận"}),n.jsx("th",{scope:"col",children:"Ng\xe0y tạo"}),n.jsx("th",{scope:"col",children:"Loại"}),n.jsx("th",{scope:"col"})]})}),n.jsx("tbody",{className:"table-group-divider",children:e?.map(e=>n.jsxs("tr",{children:[n.jsx("td",{children:e.id}),n.jsxs("td",{children:[e.sender_address.ward," - ",e.sender_address.district," - ",e.sender_address.province]}),n.jsxs("td",{children:[e.receiver_address.ward," - ",e.receiver_address.district," - ",e.receiver_address.province]}),n.jsx("td",{children:u.Ft(e.created_at)}),n.jsx("td",{children:n.jsx("span",{className:"badge rounded-pill bg-secondary p-2",children:e.type?.name})}),n.jsx("td",{className:"d-flex justify-content-center",children:n.jsx(a.ButtonDetail,{url:`/dashboard/ordered/${e.id}/detail`})})]},e.id))}),0===e.length?n.jsx("caption",{children:"Kh\xf4ng c\xf3 đơn h\xe0ng n\xe0o"}):(0,n.jsxs)("caption",{children:["Tổng số đơn h\xe0ng: ",e.length]})]})}var N=s(69697),v=s(44601);function k({listOrder:e,mutate:t}){let[s,a]=(0,c.useState)(!1),[r,i]=(0,c.useState)([]),[d,l]=(0,c.useState)(0),o=()=>a(!1),h=async()=>{if(0===e.length)N.toast.info("H\xe3y chọn \xedt nhất một đơn h\xe0ng để gửi");else{a(!0);let t=e.map(e=>e.id);console.log(t.join(",")),await v.T.getNextPosition(t.join(",")).then(e=>{if(e.payload.success){let t=e.payload.data,s=[];t.forEach(e=>{s.some(t=>t.id===e.id)||s.push(e)}),i(s)}})}},u=async()=>{try{if(0===d){N.toast.info("H\xe3y chọn địa điểm gửi h\xe0ng");return}console.log(d);let s=e.map(e=>({orderId:e.id,to_id:d}));await v.T.sendOrder({data:s}).then(e=>{e.payload.success&&(N.toast.success("Gửi h\xe0ng th\xe0nh c\xf4ng"),a(!1),t())})}catch(e){}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.Z,{onClick:h,className:"btnCreate",children:[n.jsx(y.OIQ,{size:"2em"}),"Gửi h\xe0ng"]}),(0,n.jsxs)(g.Z,{show:s,onHide:o,size:"xl",keyboard:!1,centered:!0,scrollable:!0,children:[n.jsx(g.Z.Header,{closeButton:!0,children:n.jsx(g.Z.Title,{children:"Gửi h\xe0ng"})}),(0,n.jsxs)(g.Z.Body,{children:[n.jsx(j.default,{className:"mt-2",children:n.jsx(m.default,{children:(0,n.jsxs)(Z.Z.Group,{className:"col-sm-12 col-form-Form.Group",children:[n.jsx(Z.Z.Label,{htmlFor:"workplate",children:n.jsx("h5",{children:"Chọn địa điểm gửi h\xe0ng"})}),(0,n.jsxs)("select",{id:"workplate",className:"form-select",defaultValue:"0",onChange:e=>{l(e.target.value)},children:[n.jsx("option",{disabled:!0,value:"0",children:"Chọn địa điểm gửi h\xe0ng"},0),r?.map(e=>n.jsxs("option",{value:e.id,children:[e.name," - ",e.address.province,", ",e.address.district,", ",e.address.ward]},e.id))]})]})})}),n.jsx(j.default,{className:"mt-5",children:(0,n.jsxs)(m.default,{children:[n.jsx("h5",{children:"Danh s\xe1ch h\xe0ng h\xf3a"}),n.jsx(b,{listOrder:e})]})})]}),(0,n.jsxs)(g.Z.Footer,{children:[n.jsx(x.Z,{variant:"secondary",onClick:o,children:"Huỷ"}),n.jsx(x.Z,{variant:"primary",onClick:u,children:"X\xe1c nhận"})]})]})]})}var P=s(90981);function f({id:e,refresh:t}){let[s,a]=(0,c.useState)(!1),r=()=>a(!1),i=async()=>{try{await v.T.deleteOrder(e).then(e=>{t(),a(!1)})}catch(e){N.toast.error("X\xf3a đơn h\xe0ng thất bại")}};return(0,n.jsxs)(n.Fragment,{children:[n.jsx("button",{className:"btn btn-outline-danger",onClick:()=>a(!0),children:n.jsx(P.YK6,{})}),(0,n.jsxs)(g.Z,{show:s,onHide:r,backdrop:"static",keyboard:!1,children:[n.jsx(g.Z.Header,{closeButton:!0,children:n.jsx(g.Z.Title,{children:"X\xe1c nhận x\xf3a đơn h\xe0ng"})}),n.jsx(g.Z.Body,{children:"Bạn c\xf3 chắc chắn muốn x\xf3a đơn h\xe0ng n\xe0y kh\xf4ng?"}),(0,n.jsxs)(g.Z.Footer,{children:[n.jsx(x.Z,{variant:"secondary",onClick:r,children:"Huỷ"}),n.jsx(x.Z,{variant:"primary",onClick:i,children:"X\xe1c nhận"})]})]})]})}function C({listOrder:e,mutate:t}){let s=async()=>{if(0===e.length){N.toast.info("H\xe3y chọn \xedt nhất một đơn h\xe0ng để nhận");return}try{let s=e.map(e=>({id:e.id,distance:12}));await v.T.receiveOrder({data:s}).then(e=>{e.payload.success&&(N.toast.success("Nhận h\xe0ng th\xe0nh c\xf4ng"),t())})}catch(e){}};return(0,n.jsxs)(x.Z,{onClick:s,className:"btnCreate",children:[n.jsx(y.OIQ,{size:"2em"}),"Nhận h\xe0ng"]})}var T=s(12772);function w({listOrder:e,mutate:t}){let s=async()=>{if(0===e.length){N.toast.info("H\xe3y chọn \xedt nhất một đơn h\xe0ng để chuyển đi");return}try{let s=e.map(e=>e.id);await v.T.leaveOrder({data:s}).then(e=>{e.payload.success&&(N.toast.success("Chuyển đi th\xe0nh c\xf4ng"),t())})}catch(e){}};return(0,n.jsxs)(x.Z,{onClick:s,className:"btnCreate",children:[n.jsx(y.OIQ,{size:"2em"}),"Chuyển h\xe0ng"]})}function O({type:e}){let t=(0,i.useSearchParams)(),[s,x]=(0,c.useState)(!1),[g,j]=(0,c.useState)("asc"),[m,Z]=(0,c.useState)(!1),[y,b]=(0,c.useState)([]),{user:N}=(0,T.useAppContext)(),v=N?.role.name,P=Number(t.get("page")||1),{data:O,error:_,isLoading:D,mutate:R}=(0,d.Aj)(e,P),A=O?.total||1,S=Math.floor(A/l.LL)+(A%l.LL==0?0:1),$=e=>{"id"===e&&(s?j("asc"===g?"desc":"asc"):(x(!0),j("asc")))};if(_)return n.jsx("div",{children:"Failed to load"});if(D)return n.jsx("div",{children:"Loading..."});let I=O?.data||[];s&&(I=[...I].sort((e,t)=>("asc"===g?1:-1)*(e.id-t.id)));let H=(e,t)=>{let{checked:s}=e.target;s?b([...y,t]):b(y.filter(e=>e!==t))};console.log(y.length);let B="",L=null;switch(e){case p.ZJ.Waiting:B="Danh s\xe1ch đơn h\xe0ng chờ gửi",L=n.jsx(k,{listOrder:y,mutate:R});break;case p.ZJ.Receiving:B="Danh s\xe1ch đơn h\xe0ng chờ nhận",L=n.jsx(C,{listOrder:y,mutate:R});break;case p.ZJ.Leave:B="Danh s\xe1ch đơn h\xe0ng chuyển đi",L=v===p.i4.Driver?n.jsx(w,{listOrder:y,mutate:R}):null;break;case p.ZJ.History:B="Lịch sử đơn hàng"}return(0,n.jsxs)("div",{className:"tableContainer",children:[(0,n.jsxs)("div",{className:"row",children:[n.jsx("div",{className:"col",children:n.jsx("h3",{children:B})}),n.jsx("div",{className:"col btnContainer",children:L})]}),n.jsx("div",{className:"row mt-2",children:(0,n.jsxs)("div",{className:"mt-2 flow-root",children:[n.jsx("div",{className:"inline-block min-w-full",children:n.jsx("div",{className:"rounded-lg bg-gray-50 md:pt-0 table-responsive",children:(0,n.jsxs)("table",{className:"orderTable w-100",children:[n.jsx("thead",{children:(0,n.jsxs)("tr",{children:[n.jsx("th",{scope:"col",children:n.jsx("input",{className:"form-check-input",type:"checkbox",checked:m,onChange:()=>{Z(!m),m?b([]):b([...I])}})}),(0,n.jsxs)("th",{scope:"col",onClick:()=>$("id"),children:["ID ",s?"desc"===g?n.jsx(o.ZTc,{}):n.jsx(o.NWQ,{}):n.jsx(h.sj8,{})]}),n.jsx("th",{scope:"col",children:"Địa chỉ gửi"}),n.jsx("th",{scope:"col",children:"Địa chỉ nhận"}),n.jsx("th",{scope:"col",children:"Ng\xe0y tạo"}),n.jsx("th",{scope:"col",children:"Loại"}),n.jsx("th",{scope:"col",children:"Trạng th\xe1i"}),n.jsx("th",{scope:"col"})]})}),n.jsx("tbody",{className:"table-group-divider",children:I?.map(e=>{let t=e.notifications[e.notifications.length-1].status_id,s=p.iF[t].color;return n.jsxs("tr",{children:[n.jsx("td",{scope:"row",children:n.jsx("input",{className:"form-check-input",type:"checkbox",checked:y.includes(e),onChange:t=>{H(t,e)}})}),n.jsx("td",{children:e.id}),n.jsxs("td",{children:[e.sender_address.ward," - ",e.sender_address.district," -"," ",e.sender_address.province]}),n.jsxs("td",{children:[e.receiver_address.ward," - ",e.receiver_address.district," -"," ",e.receiver_address.province]}),n.jsx("td",{children:u.Ft(e.created_at)}),n.jsx("td",{children:n.jsx("span",{className:"badge rounded-pill bg-secondary p-2",children:e.type?.name})}),n.jsx("td",{children:n.jsx("span",{className:`badge rounded-pill bg-${s} p-2`,children:p.iF[t].name})}),n.jsxs("td",{className:"d-flex justify-content-center gap-1",children:[n.jsx(a.ButtonDetail,{url:`/dashboard/ordered/${e.id}/detail`}),n.jsx(f,{id:e.id,refresh:R})]})]},e.id)})}),0===I.length?n.jsx("caption",{children:"Kh\xf4ng c\xf3 đơn h\xe0ng n\xe0o"}):(0,n.jsxs)("caption",{children:["Tổng số đơn h\xe0ng: ",A]})]})})}),n.jsx(r.Z,{totalPage:S})]})})]})}},25131:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var n=s(95344),a=s(11453),r=s(8428),i=s(56506);function c({totalPage:e}){let t=(0,r.usePathname)(),s=(0,r.useSearchParams)(),c=e=>{let n=new URLSearchParams(s);return n.set("page",e.toString()),`${t}?${n.toString()}`},d=Number(s.get("page"))||1,l=(0,a.jg)(d,e);return(0,n.jsxs)("ul",{className:"pagination d-flex justify-content-center mt-4",children:[d>1&&n.jsx("li",{className:"page-item",children:n.jsx(i.default,{className:"page-link",href:c(1),"aria-label":"Previous",style:{cursor:"pointer"},children:n.jsx("span",{"aria-hidden":"true",children:"\xab"})})}),l.map(e=>n.jsx("li",{className:"page-item",children:n.jsx(i.default,{className:e!=d?"page-link":"page-link active",href:c(e),children:e})},e)),d<e&&n.jsx("li",{className:"page-item",children:n.jsx(i.default,{href:c(d+1),className:"page-link","aria-label":"Next",style:{cursor:"pointer"},children:n.jsx("span",{"aria-hidden":"true",children:"\xbb"})})})]})}s(29776)},91767:(e,t,s)=>{"use strict";s.d(t,{Ii:()=>n,LL:()=>r,ud:()=>a});let n=5,a=10,r=10},24229:(e,t,s)=>{"use strict";s.d(t,{An:()=>j,Ei:()=>h,Aj:()=>g,br:()=>m,kO:()=>y,EZ:()=>N,JN:()=>p});var n=s(66810),a=s(54831),r=s(91767),i=s(84700),c=s(44601),d=s(73705),l=s(68356);let o=e=>n.Z.listAccountClient(e).then(e=>e.payload.data),h=e=>(0,a.ZP)(["api/users",r.Ii,e],()=>o(e),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),u=(e,t)=>i.c.getWorkPlateClient(e,t).then(e=>e.payload.data),p=(e,t)=>(0,a.ZP)(["api/work-plates",r.ud,e,t],()=>u(e,t),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),x=(e,t)=>c.T.getListOrder(e,t).then(e=>e.payload.data),g=(e,t)=>{let s=[];switch(e){case d.ZJ.Waiting:s.push(d.DR.CREATE),s.push(d.DR.AT_TRANSACTION_POINT),s.push(d.DR.AT_TRANSPORT_POINT);break;case d.ZJ.Receiving:s.push(d.DR.LEAVE_TRANSACTION_POINT),s.push(d.DR.LEAVE_TRANSPORT_POINT);break;case d.ZJ.Leave:s.push(d.DR.TO_THE_TRANSACTION_POINT),s.push(d.DR.TO_THE_TRANSPORT_POINT);break;case d.ZJ.History:s.push(d.DR.DONE)}return(0,a.ZP)(["api/orders",e,t],()=>x(s,t),{})},j=e=>c.T.getOrderDetail(e).then(e=>e.payload.data),m=e=>(0,a.ZP)(["api/orders",e],()=>j(e),{}),Z=()=>l.ZP.get("api/statistical/orders").then(e=>e.payload.data.total),y=()=>(0,a.ZP)("api/statistical/orders",Z,{}),b=e=>l.ZP.get(`api/statistical/work_plates?type=${e}`).then(e=>e.payload.data.total),N=e=>(0,a.ZP)(["api/statistical/work-plates",e],()=>b(e),{})},98915:()=>{},29776:()=>{}};