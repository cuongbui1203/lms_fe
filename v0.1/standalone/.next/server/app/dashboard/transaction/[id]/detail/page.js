(()=>{var e={};e.id=4737,e.ids=[4737],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},29662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>l});var r=a(50482),s=a(69108),i=a(62563),n=a.n(i),d=a(68300),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);a.d(t,o);let l=["",{children:["dashboard",{children:["transaction",{children:["[id]",{children:["detail",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,56521)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\transaction\\[id]\\detail\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,98746)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,75516)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,37)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\transaction\\[id]\\detail\\page.tsx"],p="/dashboard/transaction/[id]/detail/page",u={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/transaction/[id]/detail/page",pathname:"/dashboard/transaction/[id]/detail",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},68909:(e,t,a)=>{Promise.resolve().then(a.bind(a,69697)),Promise.resolve().then(a.bind(a,44707))},66810:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(91767),s=a(68356);let i={getInfo:(e,t)=>s.ZP.get(`api/users/${t}`,{headers:{Authorization:`Bearer ${e}`}}),getInfoClient:e=>s.ZP.get("api/users/me"),listAccountClient:e=>s.ZP.get(`api/users?pageSize=${r.Ii}&&page=${e}`),changePasswordClient:e=>s.ZP.put("api/users/change-password",e),createAccount:e=>s.ZP.post("api/users/create/employee",e),deleteAccount:e=>s.ZP.delete(`api/users/${e}`)}},44601:(e,t,a)=>{"use strict";a.d(t,{T:()=>s});var r=a(68356);let s={getListOrder:(e,t)=>r.ZP.get(`api/orders?statuses=[${e}]&page=${t}`),createOrder:e=>r.ZP.post("api/orders",e),getOrderDetail:e=>r.ZP.get(`api/orders/${e}`),addGoodOrder:(e,t)=>r.ZP.post(`api/orders/${e}/multi`,t),deleteOrder:e=>r.ZP.delete(`api/orders/multi?orders=[${e}]`),getNextPosition:e=>r.ZP.get(`/api/orders/multi/next?orders=[${e}]`),sendOrder:e=>r.ZP.post("/api/orders/multi/next",e),receiveOrder:e=>r.ZP.put("/api/orders/multi/arrived",e),leaveOrder:e=>r.ZP.put("/api/orders/multi/leave",e)}},44707:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var r=a(95344),s=a(84700),i=a(12772),n=a(616),d=a(73705),o=a(24229),l=a(11453),c=a(23698),p=a(85453),u=a(8428),h=a(58510),m=a(21204),g=a(95209),P=a(78154),x=a(60708),_=a(69697);function Z({workPlate:e,listProvince:t,type:a}){let Z=(0,u.useSearchParams)(),v=(0,u.useRouter)(),{user:f}=(0,i.useAppContext)(),y=f?.role?.name,T=Number(Z.get("fromPage")),{mutate:b}=(0,o.JN)(T,a),{register:w,handleSubmit:N,setError:j,formState:{errors:O,isSubmitting:k}}=(0,x.cI)({resolver:(0,p.F)(c.QR),defaultValues:{name:e?.name,type_id:a,address_id:e.address.wardCode,address:e.address.address,cap:e.cap}});if(y!==d.i4.Admin)return r.jsx("div",{children:"403"});async function A(t){t.type_id=a;try{await s.c.updateWP(e.id,t).then(e=>{e.payload.success&&(b(),a===d.qw.Transaction?(_.toast.success("Cập nhật điểm giao dịch th\xe0nh c\xf4ng"),v.push(`/dashboard/transaction?page=${T}`)):(_.toast.success("Cập nhật điểm trung chuyển th\xe0nh c\xf4ng"),v.push(`/dashboard/transshipment?page=${T}`)))})}catch(e){(0,l.ZH)({error:e,setError:j})}}return r.jsx("div",{className:"formContainer",children:(0,r.jsxs)(h.Z,{onSubmit:N(A),children:[r.jsx(m.default,{className:"mt-2",children:r.jsx("h3",{children:a===d.qw.Transshipment?"Th\xf4ng tin điểm trung chuyển":"Th\xf4ng tin điểm giao dịch"})}),r.jsx(m.default,{className:"mt-2",children:r.jsx(g.default,{xs:12,md:6,children:(0,r.jsxs)(h.Z.Group,{children:[r.jsx(h.Z.Label,{htmlFor:"username",children:a===d.qw.Transshipment?"T\xean điểm trung chuyển":"Th\xf4ng tin điểm giao dịch"}),r.jsx(h.Z.Control,{type:"text",id:"username",placeholder:"T\xean điểm giao dịch / trung chuyển",...w("name")})]})})}),(0,r.jsxs)(m.default,{className:"mt-2",children:[r.jsx(h.Z.Group,{className:"col-sm-12 col-form-Form.Group",children:"Địa chỉ"}),r.jsx(n.Z,{listProvince:t,register:w,fieldName:"address_id",defaultValues:e.address}),r.jsx(h.Z.Group,{className:"mt-2",children:r.jsx(h.Z.Control,{type:"text",id:"address",placeholder:"Địa điểm cụ thể",...w("address")})})]}),r.jsx(m.default,{className:"mt-2",children:r.jsx(g.default,{xs:12,md:6,children:(0,r.jsxs)(h.Z.Group,{children:[r.jsx(h.Z.Label,{htmlFor:"area",children:"Khu vực quản l\xfd"}),(0,r.jsxs)("select",{id:"area",className:"form-select",...w("cap"),children:[r.jsx("option",{disabled:!0,children:"Chọn khu vực quản l\xfd"},0),d.uN.map(e=>r.jsx("option",{value:e.id,children:e.name},e.id))]})]})})}),r.jsx(m.default,{className:"mt-2",children:r.jsx("div",{className:"mt-3 btnContainer",children:r.jsx(P.Z,{className:"btn btnCreate",type:"submit",disabled:k,children:k?"Đang xử l\xfd...":a===d.qw.Transshipment?"Cập nhật điểm trung chuyển":"Cập nhật điểm giao dịch"})})})]})})}},24229:(e,t,a)=>{"use strict";a.d(t,{An:()=>P,Ei:()=>p,Aj:()=>g,br:()=>x,kO:()=>Z,EZ:()=>f,JN:()=>h});var r=a(66810),s=a(54831),i=a(91767),n=a(84700),d=a(44601),o=a(73705),l=a(68356);let c=e=>r.Z.listAccountClient(e).then(e=>e.payload.data),p=e=>(0,s.ZP)(["api/users",i.Ii,e],()=>c(e),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),u=(e,t)=>n.c.getWorkPlateClient(e,t).then(e=>e.payload.data),h=(e,t)=>(0,s.ZP)(["api/work-plates",i.ud,e,t],()=>u(e,t),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),m=(e,t)=>d.T.getListOrder(e,t).then(e=>e.payload.data),g=(e,t)=>{let a=[];switch(e){case o.ZJ.Waiting:a.push(o.DR.CREATE),a.push(o.DR.AT_TRANSACTION_POINT),a.push(o.DR.AT_TRANSPORT_POINT);break;case o.ZJ.Receiving:a.push(o.DR.LEAVE_TRANSACTION_POINT),a.push(o.DR.LEAVE_TRANSPORT_POINT);break;case o.ZJ.Leave:a.push(o.DR.TO_THE_TRANSACTION_POINT),a.push(o.DR.TO_THE_TRANSPORT_POINT);break;case o.ZJ.History:a.push(o.DR.DONE)}return(0,s.ZP)(["api/orders",e,t],()=>m(a,t),{})},P=e=>d.T.getOrderDetail(e).then(e=>e.payload.data),x=e=>(0,s.ZP)(["api/orders",e],()=>P(e),{}),_=()=>l.ZP.get("api/statistical/orders").then(e=>e.payload.data.total),Z=()=>(0,s.ZP)("api/statistical/orders",_,{}),v=e=>l.ZP.get(`api/statistical/work_plates?type=${e}`).then(e=>e.payload.data.total),f=e=>(0,s.ZP)(["api/statistical/work-plates",e],()=>v(e),{})},69516:(e,t,a)=>{"use strict";a.d(t,{c:()=>i});var r=a(47084),s=a(69304);let i={getWorkPlateClient:(e,t)=>s.ZP.get(`api/work-plates?pageSize=${r.ud}&&page=${e}&&type_id=${t}`),getWorkPlate:e=>s.ZP.get("api/work-plates",{headers:{Authorization:`Bearer ${e}`}}),getWorkPlateSuggestClient:e=>s.ZP.get(`api/work-plates/suggestion-wp?address_id=${e}`),createWP:e=>s.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,t)=>s.ZP.get(`api/work-plates/${t}`,{headers:{Authorization:`Bearer ${e}`}}),updateWP:(e,t)=>s.ZP.put(`api/work-plates/${e}`,t),deleteWP:e=>s.ZP.delete(`api/work-plates/${e}`)}},56521:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(25036),s=a(7439),i=a(68839),n=a(69516),d=a(70261),o=a(85033);async function l({params:e}){let t=e.id,a=(0,s.cookies)().get("token"),l=(await n.c.getDetailWorkPlate(a?.value||"",t)).payload.data,c=await d.y.getProvince();return r.jsx(i.ZP,{workPlate:l,listProvince:c.payload.data,type:o.qw.Transaction})}},68839:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});let r=(0,a(86843).createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\components\dashboard\work-plate\workPlate-detail.tsx`),{__esModule:s,$$typeof:i}=r,n=r.default},47084:(e,t,a)=>{"use strict";a.d(t,{Ii:()=>r,ud:()=>s});let r=5,s=10}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[1638,4595,5996,6747,4524,4021,3857,3007,7616,6286,2595,4731,4831,5453,5742,3743,9949,1998,7439,6625,3270,2277],()=>a(29662));module.exports=r})();