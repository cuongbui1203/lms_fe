"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4167],{44295:function(e,a,t){var n=t(46701),r=t(89348);a.Z={getInfo:(e,a)=>r.ZP.get("api/users/".concat(a),{headers:{Authorization:"Bearer ".concat(e)}}),getInfoClient:e=>r.ZP.get("api/users/me"),listAccountClient:e=>r.ZP.get("api/users?pageSize=".concat(n.Ii,"&&page=").concat(e)),changePasswordClient:e=>r.ZP.put("api/users/change-password",e),createAccount:e=>r.ZP.post("api/users/create/employee",e),deleteAccount:e=>r.ZP.delete("api/users/".concat(e))}},7434:function(e,a,t){t.d(a,{T:function(){return r}});var n=t(89348);let r={getListOrder:(e,a)=>n.ZP.get("api/orders?statuses=[".concat(e,"]&page=").concat(a)),createOrder:e=>n.ZP.post("api/orders",e),getOrderDetail:e=>n.ZP.get("api/orders/".concat(e)),addGoodOrder:(e,a)=>n.ZP.post("api/orders/".concat(e,"/multi"),a),deleteOrder:e=>n.ZP.delete("api/orders/multi?orders=[".concat(e,"]")),getNextPosition:e=>n.ZP.get("/api/orders/multi/next?orders=[".concat(e,"]")),sendOrder:e=>n.ZP.post("/api/orders/multi/next",e),receiveOrder:e=>n.ZP.put("/api/orders/multi/arrived",e),leaveOrder:e=>n.ZP.put("/api/orders/multi/leave",e)}},56512:function(e,a,t){t.d(a,{c:function(){return i}});var n=t(46701),r=t(89348);let i={getWorkPlateClient:(e,a)=>r.ZP.get("api/work-plates?pageSize=".concat(n.ud,"&&page=").concat(e,"&&type_id=").concat(a)),getWorkPlate:e=>r.ZP.get("api/work-plates",{headers:{Authorization:"Bearer ".concat(e)}}),getWorkPlateSuggestClient:e=>r.ZP.get("api/work-plates/suggestion-wp?address_id=".concat(e)),createWP:e=>r.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,a)=>r.ZP.get("api/work-plates/".concat(a),{headers:{Authorization:"Bearer ".concat(e)}}),updateWP:(e,a)=>r.ZP.put("api/work-plates/".concat(e),a),deleteWP:e=>r.ZP.delete("api/work-plates/".concat(e))}},9092:function(e,a,t){t.d(a,{CJ:function(){return N},DR:function(){return P},Ik:function(){return m},ZJ:function(){return r},i4:function(){return h},iF:function(){return O},ix:function(){return T},qw:function(){return f},uN:function(){return p},uU:function(){return g}});var n,r,i=t(57437),o=t(70784),s=t(52840),c=t(71709),d=t(56733),l=t(57252),u=t(61975);let h={Admin:"Admin",User:"User",Driver:"Driver",Employee:"Employee",Manager:"Manager",Shipper:"Shipper"},m=[{id:1,name:"Admin"},{id:3,name:"Driver"},{id:4,name:"Employee"},{id:5,name:"Manager"},{id:6,name:"Shipper"}],g={Admin:{id:1,name:"Quản trị vi\xean",tabs:["dashboard","manageTransshipment","manageTransactions","manageEmployees"]},Manager:{id:5,name:"Quản l\xed",tabs:["dashboard","manageEmployees","manageWaitingOrders","manageReceivingOrders","historyOrders","createOrder"]},Driver:{id:3,name:"T\xe0i xế",tabs:["dashboard","leavingOrders"]},Employee:{id:4,name:"Nh\xe2n vi\xean",tabs:["dashboard","createOrder","manageWaitingOrders","manageReceivingOrders","historyOrders"]},Shipper:{id:6,name:"Shipper",tabs:["dashboard","manageOrders"]}},p=[{id:1,name:"Tỉnh / Th\xe0nh phố"},{id:2,name:"Quận / Huyện"},{id:3,name:"Phường / X\xe3"}],T={dashboard:{url:"/dashboard",name:"Trang ch\xednh",icon:(0,i.jsx)(o.JZ9,{size:"2em"})},information:{url:"/dashboard/information",name:"Th\xf4ng tin",icon:(0,i.jsx)(o.JZ9,{size:"2em"})},manageEmployees:{url:"/dashboard/employee",name:"Nh\xe2n vi\xean",icon:(0,i.jsx)(s.Jwp,{size:"2em"})},detailEmployee:{url:"/dashboard/employee/[id]/detail",name:"Th\xf4ng tin nh\xe2n vi\xean",icon:(0,i.jsx)(d.zJl,{size:"2em"})},createEmployee:{url:"/dashboard/employee/create",name:"Tạo t\xe0i khoản nh\xe2n vi\xean",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageTransshipment:{url:"/dashboard/transshipment",name:"Điểm trung chuyển",icon:(0,i.jsx)(o.X3C,{size:"2em"})},createTransshipment:{url:"/dashboard/transshipment/create",name:"Tạo điểm trung chuyển",icon:(0,i.jsx)(d.zJl,{size:"2em"})},detailTransshipment:{url:"/dashboard/transshipment/[id]/detail",name:"Chi tiết điểm trung chuyển",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageTransactions:{url:"/dashboard/transaction",name:"Điểm giao dịch",icon:(0,i.jsx)(u.la$,{size:"2em"})},createTransaction:{url:"/dashboard/transaction/create",name:"Tạo điểm giao dịch",icon:(0,i.jsx)(d.zJl,{size:"2em"})},detailTransaction:{url:"/dashboard/transaction/[id]/detail",name:"Chi tiết điểm giao dịch",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageWaitingOrders:{url:"/dashboard/ordered/waiting",name:"H\xe0ng chờ gửi",icon:(0,i.jsx)(l.HwV,{size:"2em"})},manageReceivingOrders:{url:"/dashboard/ordered/receiving",name:"H\xe0ng chờ nhận",icon:(0,i.jsx)(l.cFG,{size:"2em"})},historyOrders:{url:"/dashboard/ordered/history",name:"Lịch sử đơn h\xe0ng",icon:(0,i.jsx)(c.Nt_,{size:"2em"})},leavingOrders:{url:"/dashboard/ordered/leave",name:"H\xe0ng chờ chuyển đi",icon:(0,i.jsx)(l.HwV,{size:"2em"})},detailOrder:{url:"/dashboard/ordered/[id]/detail",name:"Chi tiết đơn h\xe0ng",icon:(0,i.jsx)(d.zJl,{size:"2em"})},manageOrders:{url:"/dashboard/ordered",name:"Đơn h\xe0ng",icon:(0,i.jsx)(c.bhi,{size:"2em"})},createOrder:{url:"/dashboard/ordered/create",name:"Tạo đơn h\xe0ng",icon:(0,i.jsx)(c.qS3,{size:"2em"})}},f={Warehouse:1,Transaction:2,Transshipment:3},P={WAIT_F_DELIVERY:1,R_DELIVERY:2,DONE:3,LEAVE_TRANSPORT_POINT:4,AT_TRANSPORT_POINT:5,AT_TRANSACTION_POINT:13,LEAVE_TRANSACTION_POINT:14,SHIPPING:6,TO_THE_TRANSPORT_POINT:7,TO_THE_TRANSACTION_POINT:8,RETURN:9,CREATE:10,COMPLETE:11,FAIL:12},O={1:{name:"Chờ gửi",color:"warning"},2:{name:"Đang vận chuyển",color:"info"},3:{name:"Ho\xe0n th\xe0nh",color:"success"},4:{name:"Rời đi điểm trung chuyển",color:"info"},5:{name:"Tại điểm trung chuyển",color:"info"},13:{name:"Tại điểm giao dịch",color:"info"},14:{name:"Rời đi điểm giao dịch",color:"info"},6:{name:"Đang vận chuyển",color:"info"},7:{name:"Đến điểm trung chuyển",color:"info"},8:{name:"Đến điểm giao dịch",color:"info"},9:{name:"Ho\xe0n trả",color:"info"},10:{name:"Tạo mới",color:"primary"},11:{name:"Ho\xe0n th\xe0nh",color:"success"},12:{name:"Thất bại",color:"danger"}},N={NORMAL:{name:"B\xecnh thường",value:10},fragile:{name:"Dễ vỡ",value:9},oversized:{name:"Qu\xe1 khổ",value:11},hazardous:{name:"Nguy hiểm",value:12}};(n=r||(r={})).Waiting="waiting",n.Receiving="receiving",n.History="history",n.Leave="leave",n.All="all"},46701:function(e,a,t){t.d(a,{Ii:function(){return n},LL:function(){return i},ud:function(){return r}});let n=5,r=10,i=10},2261:function(e,a,t){var n=t(30248);let r=n.z.object({NEXT_PUBLIC_COMPANY_NAME:n.z.string(),NEXT_PUBLIC_API_ENDPOINT:n.z.string(),NEXT_PUBLIC_COMPANY_DESCRIPTION:n.z.string()}).safeParse({NEXT_PUBLIC_COMPANY_NAME:"Giao hang GTK",NEXT_PUBLIC_API_ENDPOINT:"http://localhost:8000",NEXT_PUBLIC_COMPANY_DESCRIPTION:"Company Description"});if(!r.success)throw console.error(r.error.issues),Error("C\xe1c gi\xe1 trị khai b\xe1o trong file .env kh\xf4ng hợp lệ");let i=r.data;a.Z=i},24167:function(e,a,t){t.d(a,{An:function(){return T},Ei:function(){return u},Aj:function(){return p},br:function(){return f},kO:function(){return O},EZ:function(){return v},JN:function(){return m}});var n=t(44295),r=t(81252),i=t(46701),o=t(56512),s=t(7434),c=t(9092),d=t(89348);let l=e=>n.Z.listAccountClient(e).then(e=>e.payload.data),u=e=>(0,r.ZP)(["api/users",i.Ii,e],()=>l(e),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),h=(e,a)=>o.c.getWorkPlateClient(e,a).then(e=>e.payload.data),m=(e,a)=>(0,r.ZP)(["api/work-plates",i.ud,e,a],()=>h(e,a),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),g=(e,a)=>s.T.getListOrder(e,a).then(e=>e.payload.data),p=(e,a)=>{let t=[];switch(e){case c.ZJ.Waiting:t.push(c.DR.CREATE),t.push(c.DR.AT_TRANSACTION_POINT),t.push(c.DR.AT_TRANSPORT_POINT);break;case c.ZJ.Receiving:t.push(c.DR.LEAVE_TRANSACTION_POINT),t.push(c.DR.LEAVE_TRANSPORT_POINT);break;case c.ZJ.Leave:t.push(c.DR.TO_THE_TRANSACTION_POINT),t.push(c.DR.TO_THE_TRANSPORT_POINT);break;case c.ZJ.History:t.push(c.DR.DONE)}return(0,r.ZP)(["api/orders",e,a],()=>g(t,a),{})},T=e=>s.T.getOrderDetail(e).then(e=>e.payload.data),f=e=>(0,r.ZP)(["api/orders",e],()=>T(e),{}),P=()=>d.ZP.get("api/statistical/orders").then(e=>e.payload.data.total),O=()=>(0,r.ZP)("api/statistical/orders",P,{}),N=e=>d.ZP.get("api/statistical/work_plates?type=".concat(e)).then(e=>e.payload.data.total),v=e=>(0,r.ZP)(["api/statistical/work-plates",e],()=>N(e),{})},89348:function(e,a,t){t.d(a,{Xs:function(){return c}});var n=t(2261),r=t(22169),i=t(47907),o=t(86123);class s extends Error{constructor({status:e,payload:a}){super("Http Error"),this.status=e,this.payload=a}}class c extends s{constructor({status:e,payload:a}){super({status:e,payload:a}),this.status=e,this.payload=a}}let d=()=>!0,l=null,u=async(e,a,t)=>{let u;(null==t?void 0:t.body)instanceof FormData?u=t.body:(null==t?void 0:t.body)&&(u=JSON.stringify(t.body));let h=u instanceof FormData?{}:{"Content-Type":"application/json"};if(d()){let e=localStorage.getItem("token");e&&(h.Authorization="Bearer ".concat(e))}let m=(null==t?void 0:t.baseUrl)===void 0?n.Z.NEXT_PUBLIC_API_ENDPOINT:t.baseUrl,g=a.startsWith("/")?"".concat(m).concat(a):"".concat(m,"/").concat(a),p=await fetch(g,{...t,headers:{...h,...null==t?void 0:t.headers},body:u,method:e}),T=await p.json(),f={status:p.status,payload:T};if(!p.ok){if(422===p.status)throw new c(f);if(401===p.status){if(d()){if(!l){l=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...h}});try{await l}catch(e){}finally{localStorage.removeItem("token"),l=null,location.href="/login"}}}else{var P;let e=null==t?void 0:null===(P=t.headers)||void 0===P?void 0:P.Authorization.split("Bearer ")[1];(0,i.redirect)("/logout?token=".concat(e))}}else if(403===p.status)console.log("Forbidden error"),location.href="/",o.toast.error("Kh\xf4ng c\xf3 quyền truy cập");else throw new s(f)}if(d()){if("api/users/login"===(0,r.AH)(a)){let{token:e}=T.data;localStorage.setItem("token",e)}else"api/auth/logout"===(0,r.AH)(a)&&localStorage.removeItem("token")}return f};a.ZP={get:(e,a)=>u("GET",e,a),post:(e,a,t)=>u("POST",e,{...t,body:a}),put:(e,a,t)=>u("PUT",e,{...t,body:a}),delete:(e,a)=>u("DELETE",e,{...a})}},22169:function(e,a,t){t.d(a,{AH:function(){return u},Ft:function(){return p},Qe:function(){return m},Xc:function(){return T},ZH:function(){return h},jg:function(){return l},o0:function(){return g},p6:function(){return d}});var n=t(42151),r=t.n(n),i=t(89348),o=t(86123),s=t(89539),c=t.n(s);function d(e){return new Date(r()(e).format("YYYY-MM-DD").replace(/-/g,""))}let l=(e,a)=>a<=7?Array.from({length:a},(e,a)=>a+1):e<=3?[1,2,3,"...",a-1,a]:e>=a-2?[1,2,"...",a-2,a-1,a]:[1,"...",e-1,e,e+1,"...",a],u=e=>e.startsWith("/")?e.slice(1):e,h=e=>{let{error:a,setError:t,message:n,duration:r}=e;a instanceof i.Xs&&t?a.payload.error.forEach(e=>{t(e.field,{type:"manual",message:e.message[0]})}):o.toast.error(n||a.payload.message||"Y\xeau cầu thất bại!",{autoClose:r||3e3})},m=e=>e?c()(e).format("YYYY-MM-DD"):"",g=e=>e?c()(e).format("HH:mm DD-MM-YYYY"):"";function p(e){let a=new Date(1e3*e);return"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear())}function T(e){let a=new Date(1e3*e);return"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()," ").concat(a.getHours(),":").concat(a.getMinutes())}}}]);