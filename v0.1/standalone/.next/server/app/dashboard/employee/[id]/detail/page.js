(()=>{var e={};e.id=9429,e.ids=[9429],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},88183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>o});var a=r(50482),s=r(69108),i=r(62563),n=r.n(i),d=r(68300),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);r.d(t,l);let o=["",{children:["dashboard",{children:["employee",{children:["[id]",{children:["detail",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15901)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\employee\\[id]\\detail\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98746)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,75516)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,37)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\lap_trinh\\lms_fe_release\\src\\app\\dashboard\\employee\\[id]\\detail\\page.tsx"],u="/dashboard/employee/[id]/detail/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/employee/[id]/detail/page",pathname:"/dashboard/employee/[id]/detail",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},46928:(e,t,r)=>{Promise.resolve().then(r.bind(r,69697)),Promise.resolve().then(r.bind(r,89771))},99246:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(34132),s=r.n(a),i=r(3729),n=r(70136),d=r(28998),l=r(95344);let o=i.forwardRef(({bsPrefix:e,className:t,listProps:r={},children:a,label:i="breadcrumb",as:d="nav",...o},c)=>{let u=(0,n.vE)(e,"breadcrumb");return(0,l.jsx)(d,{"aria-label":i,className:t,ref:c,...o,children:(0,l.jsx)("ol",{...r,className:s()(u,null==r?void 0:r.className),children:a})})});o.displayName="Breadcrumb";let c=Object.assign(o,{Item:d.Z})},28998:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(34132),s=r.n(a),i=r(3729),n=r(59820),d=r(70136),l=r(95344);let o=i.forwardRef(({bsPrefix:e,active:t=!1,children:r,className:a,as:i="li",linkAs:o=n.ZP,linkProps:c={},href:u,title:m,target:p,...P},Z)=>{let h=(0,d.vE)(e,"breadcrumb-item");return(0,l.jsx)(i,{ref:Z,...P,className:s()(h,a,{active:t}),"aria-current":t?"page":void 0,children:t?r:(0,l.jsx)(o,{...c,href:u,title:m,target:p,children:r})})});o.displayName="BreadcrumbItem";let c=o},66810:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(91767),s=r(68356);let i={getInfo:(e,t)=>s.ZP.get(`api/users/${t}`,{headers:{Authorization:`Bearer ${e}`}}),getInfoClient:e=>s.ZP.get("api/users/me"),listAccountClient:e=>s.ZP.get(`api/users?pageSize=${a.Ii}&&page=${e}`),changePasswordClient:e=>s.ZP.put("api/users/change-password",e),createAccount:e=>s.ZP.post("api/users/create/employee",e),deleteAccount:e=>s.ZP.delete(`api/users/${e}`)}},84324:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var a=r(68356);let s={getProvince:()=>a.ZP.get("api/address/provinces"),getDistrict:e=>a.ZP.get(`api/address/districts?code=${e}`,{cache:"force-cache"}),getWard:e=>a.ZP.get(`api/address/wards?code=${e}`,{cache:"force-cache"})}},44601:(e,t,r)=>{"use strict";r.d(t,{T:()=>s});var a=r(68356);let s={getListOrder:(e,t)=>a.ZP.get(`api/orders?statuses=[${e}]&page=${t}`),createOrder:e=>a.ZP.post("api/orders",e),getOrderDetail:e=>a.ZP.get(`api/orders/${e}`),addGoodOrder:(e,t)=>a.ZP.post(`api/orders/${e}/multi`,t),deleteOrder:e=>a.ZP.delete(`api/orders/multi?orders=[${e}]`),getNextPosition:e=>a.ZP.get(`/api/orders/multi/next?orders=[${e}]`),sendOrder:e=>a.ZP.post("/api/orders/multi/next",e),receiveOrder:e=>a.ZP.put("/api/orders/multi/arrived",e),leaveOrder:e=>a.ZP.put("/api/orders/multi/leave",e)}},84700:(e,t,r)=>{"use strict";r.d(t,{c:()=>i});var a=r(91767),s=r(68356);let i={getWorkPlateClient:(e,t)=>s.ZP.get(`api/work-plates?pageSize=${a.ud}&&page=${e}&&type_id=${t}`),getWorkPlate:e=>s.ZP.get("api/work-plates",{headers:{Authorization:`Bearer ${e}`}}),getWorkPlateSuggestClient:e=>s.ZP.get(`api/work-plates/suggestion-wp?address_id=${e}`),createWP:e=>s.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,t)=>s.ZP.get(`api/work-plates/${t}`,{headers:{Authorization:`Bearer ${e}`}}),updateWP:(e,t)=>s.ZP.put(`api/work-plates/${e}`,t),deleteWP:e=>s.ZP.delete(`api/work-plates/${e}`)}},89771:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var a=r(95344),s=r(58510),i=r(21204),n=r(95209),d=r(60708),l=r(76344),o=r(85453),c=r(69697),u=r(11453),m=r(84700),p=r(73705),P=r(12772),Z=r(11998),h=r(616);r(46810);var g=r(19394),b=r(8428),x=r(24229);function _({employee:e,listProvince:t}){let r=(0,b.useSearchParams)(),{user:_}=(0,P.useAppContext)(),f=(0,b.useRouter)(),j=Number(r.get("fromPage")),{mutate:v}=(0,x.Ei)(j),y=_?.role?.name,{register:w,handleSubmit:k,setError:N,formState:{errors:C,isSubmitting:T},watch:$}=(0,d.cI)({resolver:(0,o.F)(l.Ym),defaultValues:{name:e?.name,email:e?.email,phone:e?.phone||"",dob:(0,u.Qe)(e?.dob),username:e?.username,address_id:e?.address.wardCode,role_id:e?.role.id,wp_id:e?.wp_id||0}});async function O(t){console.log(t);try{await g.Z.updateEmployee(t,e.id),v(),f.push(`/dashboard/employee?page=${j}`),c.toast.success("Cập nhật nh\xe2n vi\xean th\xe0nh c\xf4ng")}catch(e){(0,u.ZH)({error:e,setError:N})}}let A=$("address_id"),S=e=>m.c.getWorkPlateSuggestClient(e).then(e=>e.payload.data),{data:I,error:E,isLoading:R}=(0,Z.Z)(void 0===A||"0"===A?null:`api/work-plates/suggestion-wp?address_id=${A}`,()=>S(A)),D=I||[];return(void 0===A||"0"===A)&&(D=[]),a.jsx("div",{className:"formContainer",children:(0,a.jsxs)(s.Z,{onSubmit:k(O,function(e){console.log(e)}),children:[a.jsx(i.default,{className:"mt-2",children:a.jsx("h3",{children:"Th\xf4ng tin nh\xe2n vi\xean"})}),a.jsx(i.default,{className:"mt-2",children:a.jsx(n.default,{xs:12,md:6,children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{htmlFor:"username",children:"T\xean đăng nhập"}),a.jsx(s.Z.Control,{type:"text",id:"username",placeholder:"T\xean đăng nhập",...w("username")}),C.username&&a.jsx(s.Z.Text,{className:"text-danger",children:C.username.message})]})})}),(0,a.jsxs)(i.default,{className:"mt-2",children:[a.jsx(n.default,{xs:12,md:6,children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{children:"Họ v\xe0 t\xean"}),a.jsx(s.Z.Control,{type:"text",id:"fullName",placeholder:"Họ v\xe0 t\xean",...w("name")})]})}),a.jsx(n.default,{xs:12,md:6,children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{htmlFor:"dob",children:"Ng\xe0y sinh"}),a.jsx(s.Z.Control,{type:"date",id:"dob",...w("dob")})]})})]}),(0,a.jsxs)(i.default,{className:"mt-2",children:[a.jsx(n.default,{xs:12,md:6,children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{htmlFor:"email",children:"Địa chỉ Email"}),a.jsx(s.Z.Control,{type:"email",id:"email",placeholder:"Địa chỉ email",...w("email"),required:!0}),C.email&&a.jsx(s.Z.Text,{className:"text-danger",children:C.email.message})]})}),a.jsx(n.default,{xs:12,md:6,children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{htmlFor:"phoneNumber",children:"Số điện thoại"}),a.jsx(s.Z.Control,{type:"tel",id:"phoneNumber",placeholder:"Số điện thoại",...w("phone")})]})})]}),(0,a.jsxs)(i.default,{className:"mt-2",children:[a.jsx(s.Z.Group,{className:"col-sm-12 col-form-Form.Group",children:"Địa chỉ"}),a.jsx(h.Z,{listProvince:t,register:w,defaultValues:e?.address,fieldName:"address_id"})]}),a.jsx(i.default,{className:"mt-2",children:y&&y===p.i4.Admin&&a.jsx(n.default,{children:(0,a.jsxs)(s.Z.Group,{children:[a.jsx(s.Z.Label,{htmlFor:"role",children:"Vai tr\xf2"}),(0,a.jsxs)("select",{className:"form-select",id:"role",defaultValue:"Chọn vai tr\xf2",...w("role_id",{setValueAs:e=>parseInt(e)}),children:[a.jsx("option",{disabled:!0,children:"Chọn vai tr\xf2"}),p.Ik.map(e=>a.jsx("option",{value:e.id,children:e.name},e.id))]})]})})}),y&&"Admin"===y&&a.jsx(i.default,{className:"mt-2",children:a.jsx(n.default,{children:(0,a.jsxs)(s.Z.Group,{className:"col-sm-12 col-form-Form.Group",children:[a.jsx(s.Z.Label,{htmlFor:"workplate",children:"Địa điểm l\xe0m việc"}),(0,a.jsxs)("select",{id:"workplate",className:"form-select",value:e?.work_plate?.id,...w("wp_id"),children:[a.jsx("option",{value:0,disabled:!0,children:"Chọn địa điểm l\xe0m việc"},0),D.map(e=>(0,a.jsxs)("option",{value:e.id,children:[e.name," - ",e.address.province,", ",e.address.district,", ",e.address.ward]},e.id))]})]})})}),a.jsx(i.default,{className:"mt-2",children:a.jsx("div",{className:"mt-3 btnContainer",children:a.jsx("button",{className:"btn btnCreate",type:"submit",disabled:T,children:T?"Đang xử l\xfd...":"Cập nhật th\xf4ng tin"})})})]})})}},616:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(95344),s=r(84324),i=r(3729),n=r(95209),d=r(11998);function l({listProvince:e,register:t,defaultValues:r,fieldName:l,disabledProvince:o}){let[c,u]=(0,i.useState)(r?.provinceCode||"0"),[m,p]=(0,i.useState)(r?.districtCode||"0"),[P,Z]=(0,i.useState)(r?.wardCode||"0"),h=e=>s.y.getDistrict(e).then(e=>e.payload.data),g=e=>s.y.getWard(e).then(e=>e.payload.data),{data:b,error:x,isLoading:_}=(0,d.Z)("0"===c?null:`api/address/districts?code=${c}`,()=>h(c)),{data:f,error:j,isLoading:v}=(0,d.Z)("0"===m?null:`api/address/wards?code=${m}`,()=>g(m)),y=e=>{u(e.target.value),p("0"),Z("0")},w=e=>{p(e.target.value),Z("0")};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.default,{md:4,children:(0,a.jsxs)("select",{className:"form-select",id:"province",onChange:e=>{y(e)},value:c,disabled:o,children:[a.jsx("option",{disabled:!0,value:"0",children:"Chọn Tỉnh / TP"},"0"),e.map(e=>a.jsx("option",{value:e.code,children:e.full_name},e.code))]})}),a.jsx(n.default,{md:4,children:(0,a.jsxs)("select",{className:"form-select",onChange:e=>{w(e)},value:m,children:[a.jsx("option",{disabled:!0,value:"0",children:"Chọn Quận/ Huyện"},"0"),b?.map(e=>a.jsx("option",{value:e.code,children:e.full_name},e.code))]})}),a.jsx(n.default,{md:4,children:(0,a.jsxs)("select",{className:"form-select",value:P,...t(l,{onChange:e=>{Z(e.target.value)}}),children:[a.jsx("option",{disabled:!0,value:"0",children:"Chọn phường x\xe3"},"0"),f?.map(e=>a.jsx("option",{value:e.code,children:e.full_name},e.code))]})})]})}},91767:(e,t,r)=>{"use strict";r.d(t,{Ii:()=>a,LL:()=>i,ud:()=>s});let a=5,s=10,i=10},24229:(e,t,r)=>{"use strict";r.d(t,{An:()=>h,Ei:()=>u,Aj:()=>Z,br:()=>g,kO:()=>x,EZ:()=>f,JN:()=>p});var a=r(66810),s=r(54831),i=r(91767),n=r(84700),d=r(44601),l=r(73705),o=r(68356);let c=e=>a.Z.listAccountClient(e).then(e=>e.payload.data),u=e=>(0,s.ZP)(["api/users",i.Ii,e],()=>c(e),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),m=(e,t)=>n.c.getWorkPlateClient(e,t).then(e=>e.payload.data),p=(e,t)=>(0,s.ZP)(["api/work-plates",i.ud,e,t],()=>m(e,t),{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),P=(e,t)=>d.T.getListOrder(e,t).then(e=>e.payload.data),Z=(e,t)=>{let r=[];switch(e){case l.ZJ.Waiting:r.push(l.DR.CREATE),r.push(l.DR.AT_TRANSACTION_POINT),r.push(l.DR.AT_TRANSPORT_POINT);break;case l.ZJ.Receiving:r.push(l.DR.LEAVE_TRANSACTION_POINT),r.push(l.DR.LEAVE_TRANSPORT_POINT);break;case l.ZJ.Leave:r.push(l.DR.TO_THE_TRANSACTION_POINT),r.push(l.DR.TO_THE_TRANSPORT_POINT);break;case l.ZJ.History:r.push(l.DR.DONE)}return(0,s.ZP)(["api/orders",e,t],()=>P(r,t),{})},h=e=>d.T.getOrderDetail(e).then(e=>e.payload.data),g=e=>(0,s.ZP)(["api/orders",e],()=>h(e),{}),b=()=>o.ZP.get("api/statistical/orders").then(e=>e.payload.data.total),x=()=>(0,s.ZP)("api/statistical/orders",b,{}),_=e=>o.ZP.get(`api/statistical/work_plates?type=${e}`).then(e=>e.payload.data.total),f=e=>(0,s.ZP)(["api/statistical/work-plates",e],()=>_(e),{})},76344:(e,t,r)=>{"use strict";r.d(t,{$T:()=>l,CL:()=>m,CS:()=>d,UJ:()=>u,XU:()=>p,Xm:()=>i,Ym:()=>o,sL:()=>c,wU:()=>n});var a=r(37202),s=r(29709);let i=s.ZP.object({name:s.ZP.string().trim().min(2).max(256),username:s.ZP.string().trim().min(2).max(256),email:s.ZP.string().email(),password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine(({password_confirmation:e,password:t},r)=>{e!==t&&r.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["password_confirmation"]})}),n=s.ZP.object({username:s.ZP.string(),password:s.ZP.string().min(1,"Mật khẩu phải c\xf3 \xedt nhất 1 k\xed tự.").max(100)}).strict();s.ZP.object({success:s.ZP.boolean(),data:s.ZP.object({user:a.c2,token:s.ZP.string(),csrf_token:s.ZP.string()}),message:s.ZP.string()});let d=s.ZP.object({token:s.ZP.string(),csrf_token:s.ZP.string(),id:s.ZP.number()}),l=s.ZP.object({name:s.ZP.string().trim().min(2).max(256),dob:s.ZP.string(),email:s.ZP.string().email(),phone:s.ZP.string(),address_id:s.ZP.string(),image:s.ZP.string().optional()}),o=s.ZP.object({name:s.ZP.string(),email:s.ZP.string(),phone:s.ZP.string(),dob:s.ZP.string().nullable(),username:s.ZP.string(),address_id:s.ZP.string(),role_id:s.ZP.number(),wp_id:s.ZP.coerce.number(),img_id:s.ZP.string().optional()}),c=s.ZP.object({name:s.ZP.string(),email:s.ZP.string(),password:s.ZP.string(),phone:s.ZP.string(),dob:s.ZP.string().nullable(),username:s.ZP.string(),address_id:s.ZP.string(),role_id:s.ZP.number(),wp_id:s.ZP.string().optional(),img_id:s.ZP.string().optional()});s.ZP.object({success:s.ZP.boolean(),data:a.c2,message:s.ZP.string()}),s.ZP.object({success:s.ZP.boolean(),data:s.ZP.object({total:s.ZP.number(),currentPage:s.ZP.number(),pageSize:s.ZP.number(),data:s.ZP.array(a.c2)}),message:s.ZP.string()});let u=s.ZP.object({old_password:s.ZP.string(),new_password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),new_password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine(({new_password_confirmation:e,new_password:t},r)=>{e!==t&&r.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["new_password_confirmation"]})}),m=s.ZP.object({email:s.ZP.string().email()}),p=s.ZP.object({email:s.ZP.string().email(),token:s.ZP.string().optional(),password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)})},37202:(e,t,r)=>{"use strict";r.d(t,{$5:()=>o,Kn:()=>i,c2:()=>d});var a=r(29709);a.ZP.object({success:a.ZP.boolean(),message:a.ZP.string()}).strict();let s=a.ZP.object({provinceCode:a.ZP.string(),districtCode:a.ZP.string(),wardCode:a.ZP.string(),province:a.ZP.string(),district:a.ZP.string(),ward:a.ZP.string(),address:a.ZP.string().optional()});a.ZP.object({code:a.ZP.string(),name:a.ZP.string(),name_en:a.ZP.string(),full_name:a.ZP.string(),full_name_en:a.ZP.string(),code_name:a.ZP.string()});let i=a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),address_id:a.ZP.string(),type_id:a.ZP.number(),cap:a.ZP.number(),created_at:a.ZP.string(),updated_at:a.ZP.string(),address:s,manager:a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),address:a.ZP.string().nullable()}),type:a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),for:a.ZP.number()}),detail:a.ZP.null()}),n=a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),desc:a.ZP.string(),created_at:a.ZP.string(),updated_at:a.ZP.string()}),d=a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),email:a.ZP.string(),email_verified_at:a.ZP.string().nullable(),created_at:a.ZP.number().nullable(),updated_at:a.ZP.number().nullable(),phone:a.ZP.string().nullable(),dob:a.ZP.date().nullable(),username:a.ZP.string(),address:s,role_id:a.ZP.number(),wp_id:a.ZP.number().nullable(),img_id:a.ZP.string().nullable(),role:n,work_plate:i.nullable(),img:a.ZP.string().nullable()}),l=a.ZP.object({id:a.ZP.number(),created_at:a.ZP.string(),updated_at:a.ZP.string(),order_id:a.ZP.number(),name:a.ZP.string(),mass:a.ZP.number(),desc:a.ZP.string(),image_link:a.ZP.string().nullable()}),o=a.ZP.object({id:a.ZP.number(),sender_name:a.ZP.string(),sender_phone:a.ZP.string(),receiver_name:a.ZP.string(),receiver_phone:a.ZP.string(),created_at:a.ZP.number(),updated_at:a.ZP.number(),vehicle_id:a.ZP.number().nullable(),type_id:a.ZP.number(),status_id:a.ZP.number(),mass:a.ZP.number(),sender_address:s,receiver_address:s,type:a.ZP.object({id:a.ZP.number(),name:a.ZP.string(),for:a.ZP.number().optional()}),notifications:a.ZP.array(a.ZP.object({id:a.ZP.number(),order_id:a.ZP.number(),from_id:a.ZP.number(),to_id:a.ZP.number(),status_id:a.ZP.number(),description:a.ZP.string(),created_at:a.ZP.string(),updated_at:a.ZP.string(),from_address:s,to_address:s})),details:a.ZP.array(l),created_by:a.ZP.object({id:a.ZP.number(),name:a.ZP.string()})});a.ZP.object({success:a.ZP.boolean(),data:a.ZP.object({total:a.ZP.number()})})},70261:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var a=r(69304);let s={getProvince:()=>a.ZP.get("api/address/provinces"),getDistrict:e=>a.ZP.get(`api/address/districts?code=${e}`,{cache:"force-cache"}),getWard:e=>a.ZP.get(`api/address/wards?code=${e}`,{cache:"force-cache"})}},15901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(25036),s=r(7439);let i=(0,r(86843).createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\app\dashboard\employee\[id]\detail\employee-detail.tsx`),{__esModule:n,$$typeof:d}=i,l=i.default;var o=r(47084),c=r(69304),u=r(70261);async function m({params:e}){var t,r;let i=e.id,n=(0,s.cookies)().get("token"),d=(await (t=n?.value||"",r=i,c.ZP.get(`api/users/${r}`,{headers:{Authorization:`Bearer ${t}`}}))).payload.data,o=await u.y.getProvince();return a.jsx(l,{employee:d,listProvince:o.payload.data})}},47084:(e,t,r)=>{"use strict";r.d(t,{Ii:()=>a,ud:()=>s});let a=5,s=10},69304:(e,t,r)=>{"use strict";r.d(t,{oo:()=>n,ZP:()=>u});var a=r(27928);r(85603),r(23222),r(9327);let s=e=>e.startsWith("/")?e.slice(1):e;var i=r(867);class n extends Error{constructor({status:e,payload:t}){super("Http Error"),this.status=e,this.payload=t}}class d extends n{constructor({status:e,payload:t}){super({status:e,payload:t}),this.status=e,this.payload=t}}let l=()=>!1,o=null,c=async(e,t,r)=>{let c;r?.body instanceof FormData?c=r.body:r?.body&&(c=JSON.stringify(r.body));let u=c instanceof FormData?{}:{"Content-Type":"application/json"};if(l()){let e=localStorage.getItem("token");e&&(u.Authorization=`Bearer ${e}`)}let m=r?.baseUrl===void 0?a.Z.NEXT_PUBLIC_API_ENDPOINT:r.baseUrl,p=t.startsWith("/")?`${m}${t}`:`${m}/${t}`,P=await fetch(p,{...r,headers:{...u,...r?.headers},body:c,method:e}),Z=await P.json(),h={status:P.status,payload:Z};if(!P.ok){if(422===P.status)throw new d(h);if(401===P.status){if(l()){if(!o){o=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...u}});try{await o}catch(e){}finally{localStorage.removeItem("token"),o=null,location.href="/login"}}}else{let e=r?.headers?.Authorization.split("Bearer ")[1];(0,i.redirect)(`/logout?token=${e}`)}}else if(403===P.status)console.log("Forbidden error"),(0,i.redirect)("/");else throw new n(h)}if(l()){if("api/users/login"===s(t)){let{token:e}=Z.data;localStorage.setItem("token",e)}else"api/auth/logout"===s(t)&&localStorage.removeItem("token")}return h},u={get:(e,t)=>c("GET",e,t),post:(e,t,r)=>c("POST",e,{...r,body:t}),put:(e,t,r)=>c("PUT",e,{...r,body:t}),delete:(e,t)=>c("DELETE",e,{...t})}},46810:()=>{},5561:(e,t,r)=>{"use strict";r.d(t,{n:()=>i});var a=r(3729),s=r(28602);function i(...e){let t=(0,a.useRef)(0),[r,n]=(0,a.useState)(e[t.current]);return[r,(0,a.useCallback)(r=>{t.current="number"!=typeof r?(0,s.r)(0,e.length,t.current+1):r,n(e[t.current])},[e.length,...e])]}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,4595,5996,6747,4524,4021,3857,3007,7616,6286,2595,4731,4831,5453,5742,1998,7439,6625,3270],()=>r(88183));module.exports=a})();