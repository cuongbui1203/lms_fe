(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2437],{88564:function(e,t,n){Promise.resolve().then(n.bind(n,80590)),Promise.resolve().then(n.bind(n,55914)),Promise.resolve().then(n.bind(n,86123)),Promise.resolve().then(n.bind(n,70402)),Promise.resolve().then(n.bind(n,13334))},44295:function(e,t,n){"use strict";var s=n(46701),r=n(89348);t.Z={getInfo:(e,t)=>r.ZP.get("api/users/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}),getInfoClient:e=>r.ZP.get("api/users/me"),listAccountClient:e=>r.ZP.get("api/users?pageSize=".concat(s.Ii,"&&page=").concat(e)),changePasswordClient:e=>r.ZP.put("api/users/change-password",e),createAccount:e=>r.ZP.post("api/users/create/employee",e),deleteAccount:e=>r.ZP.delete("api/users/".concat(e))}},52697:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var s=n(89348);let r={getProvince:()=>s.ZP.get("api/address/provinces"),getDistrict:e=>s.ZP.get("api/address/districts?code=".concat(e),{cache:"force-cache"}),getWard:e=>s.ZP.get("api/address/wards?code=".concat(e),{cache:"force-cache"})}},65588:function(e,t,n){"use strict";var s=n(89348);t.Z={login:e=>s.ZP.post("api/users/login",e),register:e=>s.ZP.post("api/users",e),auth:e=>s.ZP.post("api/auth",e,{baseUrl:""}),logoutFromNextServerToServer:e=>s.ZP.delete("api/users/me",{headers:{Authorization:"Bearer ".concat(e)}}),logoutFromNextClientToNextServer:(e,t)=>s.ZP.post("/api/auth/logout",{force:e},{baseUrl:"",signal:t}),updateUserClient:(e,t)=>s.ZP.put("api/users/".concat(t),e),updateEmployee:(e,t)=>s.ZP.put("api/users/".concat(t),e),getCsrfTokenClient:()=>s.ZP.get("/sanctum/csrf-cookie"),forgotPassword:e=>s.ZP.post("api/users/forgot-password",e),resetPassword:e=>s.ZP.post("api/users/reset-password",e)}},27305:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAppContext:function(){return i}});var s=n(57437),r=n(2265);let a=(0,r.createContext)({user:null,setUser:()=>{},isAuthenticated:!1}),i=()=>(0,r.useContext)(a);function o(e){let{children:t}=e,[n,i]=(0,r.useState)(null),o=(0,r.useCallback)(e=>{i(e),localStorage.setItem("user",JSON.stringify(e))},[i]);return(0,r.useEffect)(()=>{let e=localStorage.getItem("user");i(e?JSON.parse(e):null)},[i]),(0,s.jsx)(a.Provider,{value:{user:n,setUser:o,isAuthenticated:!!n},children:t})}},70402:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(57437),r=n(59853),a=n(55914),i=n(80590),o=n(73537),l=n(66879),c=n(71399),d=n(70784),u=n(27305),m=n(48796),Z=n(82670),h=n(5054),g=n(21270),P=n(65588),p=n(86123),f=n(22169),b=n(28389);function x(e){var t,n;let{listProvince:x}=e,{user:j,setUser:_}=(0,u.useAppContext)(),{register:v,handleSubmit:w,setError:C,formState:{errors:N,isSubmitting:y}}=(0,Z.cI)({resolver:(0,g.F)(h.$T),defaultValues:{name:null==j?void 0:j.name,dob:(0,f.Qe)(null==j?void 0:j.dob),email:null==j?void 0:j.email,phone:null==j?void 0:null===(t=j.phone)||void 0===t?void 0:t.toString(),address_id:null==j?void 0:null===(n=j.address)||void 0===n?void 0:n.wardCode}});async function k(e){if(j)try{let t=(await P.Z.updateUserClient(e,j.id)).payload.data;_(t),p.toast.success("Cập nhật th\xf4ng tin th\xe0nh c\xf4ng")}catch(e){(0,f.ZH)({error:e,setError:C,message:"Cập nhật th\xf4ng tin thất bại!"})}}return(0,s.jsxs)(r.Z,{className:"formContainer",onSubmit:w(k,function(e){console.log(e)}),children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("h3",{children:"Th\xf4ng tin nh\xe2n vi\xean"})}),(0,s.jsxs)(a.default,{className:"mt-2",children:[(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"name",children:[(0,s.jsx)(r.Z.Label,{children:"Họ v\xe0 t\xean"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(c.wzp,{})}),(0,s.jsx)(r.Z.Control,{type:"text",...v("name")})]}),N.name&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:N.name.message})]})}),(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"dob",children:[(0,s.jsx)(r.Z.Label,{children:"Ng\xe0y sinh"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(c.tpH,{})}),(0,s.jsx)(r.Z.Control,{type:"date",...v("dob")})]}),N.dob&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:N.dob.message})]})})]}),(0,s.jsxs)(a.default,{className:"mt-2",children:[(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"email",children:[(0,s.jsx)(r.Z.Label,{children:"Địa chỉ Email"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(d.g5G,{})}),(0,s.jsx)(r.Z.Control,{type:"email",...v("email")})]}),N.email&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:N.email.message})]})}),(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"phone",children:[(0,s.jsx)(r.Z.Label,{children:"Số điện thoại"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(m.rxo,{})}),(0,s.jsx)(r.Z.Control,{type:"tel",...v("phone")})]})]})})]}),(0,s.jsxs)(a.default,{className:"mt-2",children:[(0,s.jsx)(r.Z.Label,{className:"col-sm-12 col-form-label",children:"Địa chỉ"}),(0,s.jsx)(b.Z,{listProvince:x,register:v,defaultValues:null==j?void 0:j.address,fieldName:"address_id"})]}),(0,s.jsx)("div",{className:"mt-3 btnContainer d-flex justify-content-center",children:(0,s.jsx)(l.Z,{type:"submit",className:"btn btnCreate",disabled:y,children:y?"Đang xử l\xfd...":"Cập nhật th\xf4ng tin"})})]})}var j=n(44295),_=n(70997);function v(){let{register:e,handleSubmit:t,setError:n,formState:{errors:c,isSubmitting:u}}=(0,Z.cI)({resolver:(0,g.F)(h.UJ),defaultValues:{old_password:"",new_password:"",new_password_confirmation:""}});async function m(e){console.log(e);try{await j.Z.changePasswordClient(e),p.toast.success("Thay đổi mật khẩu th\xe0nh c\xf4ng")}catch(e){(0,f.ZH)({error:e,setError:n})}}return(0,s.jsx)("div",{className:"formContainer",children:(0,s.jsxs)(r.Z,{onSubmit:t(m,function(e){console.log(e)}),children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("h3",{children:"Thay đổi mật khẩu"})}),(0,s.jsx)(a.default,{className:"mt-2",children:(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"oldPassword",children:[(0,s.jsx)(r.Z.Label,{children:"Mật khẩu cũ"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(d.gEQ,{})}),(0,s.jsx)(r.Z.Control,{type:"password",placeholder:"Mật khẩu cũ",...e("old_password")})]}),c.old_password&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:c.old_password.message})]})})}),(0,s.jsxs)(a.default,{className:"mt-2",children:[(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"newPassword",children:[(0,s.jsx)(r.Z.Label,{children:"Mật khẩu mới"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(d.gEQ,{})}),(0,s.jsx)(r.Z.Control,{type:"password",placeholder:"Mật khẩu mới",...e("new_password")})]}),c.new_password&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:c.new_password.message})]})}),(0,s.jsx)(i.default,{md:6,children:(0,s.jsxs)(r.Z.Group,{controlId:"confirmPassword",children:[(0,s.jsx)(r.Z.Label,{children:"X\xe1c nhận mật khẩu mới"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Text,{className:"bg-light",children:(0,s.jsx)(_.z85,{})}),(0,s.jsx)(r.Z.Control,{type:"password",placeholder:"X\xe1c nhận mật khẩu mới",...e("new_password_confirmation")})]}),c.new_password_confirmation&&(0,s.jsx)(r.Z.Text,{className:"text-danger",children:c.new_password_confirmation.message})]})})]}),(0,s.jsx)("div",{className:"mt-3 btnContainer d-flex justify-content-center",children:(0,s.jsx)(l.Z,{type:"submit",className:"btn btnCreate",disabled:u,children:u?"Đang xử l\xfd...":"X\xe1c nhận"})})]})})}var w=n(2265);function C(e){let{listProvince:t}=e,[n,r]=(0,w.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{type:"button",className:"btn btn-outline-primary ".concat(n?"":"active"),onClick:()=>r(!1),children:"Th\xf4ng tin"}),(0,s.jsx)("button",{type:"button",className:"btn btn-outline-primary ms-2 ".concat(n?"active":""),onClick:()=>r(!0),children:"Bảo mật"})]}),(0,s.jsxs)("div",{className:"row mt-3",children:[!n&&(0,s.jsx)(x,{listProvince:t}),n&&(0,s.jsx)(v,{})]})]})}},28389:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(57437),r=n(52697),a=n(2265),i=n(80590),o=n(71703);function l(e){let{listProvince:t,register:n,defaultValues:l,fieldName:c,disabledProvince:d}=e,[u,m]=(0,a.useState)((null==l?void 0:l.provinceCode)||"0"),[Z,h]=(0,a.useState)((null==l?void 0:l.districtCode)||"0"),[g,P]=(0,a.useState)((null==l?void 0:l.wardCode)||"0"),p=e=>r.y.getDistrict(e).then(e=>e.payload.data),f=e=>r.y.getWard(e).then(e=>e.payload.data),{data:b,error:x,isLoading:j}=(0,o.Z)("0"===u?null:"api/address/districts?code=".concat(u),()=>p(u)),{data:_,error:v,isLoading:w}=(0,o.Z)("0"===Z?null:"api/address/wards?code=".concat(Z),()=>f(Z)),C=e=>{m(e.target.value),h("0"),P("0")},N=e=>{h(e.target.value),P("0")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{md:4,children:(0,s.jsxs)("select",{className:"form-select",id:"province",onChange:e=>{C(e)},value:u,disabled:d,children:[(0,s.jsx)("option",{disabled:!0,value:"0",children:"Chọn Tỉnh / TP"},"0"),t.map(e=>(0,s.jsx)("option",{value:e.code,children:e.full_name},e.code))]})}),(0,s.jsx)(i.default,{md:4,children:(0,s.jsxs)("select",{className:"form-select",onChange:e=>{N(e)},value:Z,children:[(0,s.jsx)("option",{disabled:!0,value:"0",children:"Chọn Quận/ Huyện"},"0"),null==b?void 0:b.map(e=>(0,s.jsx)("option",{value:e.code,children:e.full_name},e.code))]})}),(0,s.jsx)(i.default,{md:4,children:(0,s.jsxs)("select",{className:"form-select",value:g,...n(c,{onChange:e=>{P(e.target.value)}}),children:[(0,s.jsx)("option",{disabled:!0,value:"0",children:"Chọn phường x\xe3"},"0"),null==_?void 0:_.map(e=>(0,s.jsx)("option",{value:e.code,children:e.full_name},e.code))]})})]})}},13334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(57437),r=n(27305),a=n(20703);n(2265);var i=n(55914);function o(){var e;let{user:t}=(0,r.useAppContext)();return(0,s.jsxs)("div",{className:"formContainer",children:[(0,s.jsx)(i.default,{className:"d-flex justify-content-center align-items-center ",children:(0,s.jsx)(a.default,{alt:"avatar",src:"/avatar.jpg",width:320,height:320,className:"w-75 rounded-circle"})}),(0,s.jsxs)(i.default,{className:"d-flex justify-content-center align-items-center mt-3 text-center",children:["Chức vụ: ",(null==t?void 0:t.role.name)||"Kh\xf4ng x\xe1c định"]}),(0,s.jsxs)(i.default,{className:"d-flex justify-content-center align-items-center text-center",children:["Địa điểm c\xf4ng t\xe1c: ",(null==t?void 0:null===(e=t.work_plate)||void 0===e?void 0:e.name)||"Kh\xf4ng x\xe1c định"]})]})}},46701:function(e,t,n){"use strict";n.d(t,{Ii:function(){return s},LL:function(){return a},ud:function(){return r}});let s=5,r=10,a=10},2261:function(e,t,n){"use strict";var s=n(30248);let r=s.z.object({NEXT_PUBLIC_COMPANY_NAME:s.z.string(),NEXT_PUBLIC_API_ENDPOINT:s.z.string(),NEXT_PUBLIC_COMPANY_DESCRIPTION:s.z.string()}).safeParse({NEXT_PUBLIC_COMPANY_NAME:"Giao hang GTK",NEXT_PUBLIC_API_ENDPOINT:"http://localhost:8000",NEXT_PUBLIC_COMPANY_DESCRIPTION:"Company Description"});if(!r.success)throw console.error(r.error.issues),Error("C\xe1c gi\xe1 trị khai b\xe1o trong file .env kh\xf4ng hợp lệ");let a=r.data;t.Z=a},89348:function(e,t,n){"use strict";n.d(t,{Xs:function(){return l}});var s=n(2261),r=n(22169),a=n(47907),i=n(86123);class o extends Error{constructor({status:e,payload:t}){super("Http Error"),this.status=e,this.payload=t}}class l extends o{constructor({status:e,payload:t}){super({status:e,payload:t}),this.status=e,this.payload=t}}let c=()=>!0,d=null,u=async(e,t,n)=>{let u;(null==n?void 0:n.body)instanceof FormData?u=n.body:(null==n?void 0:n.body)&&(u=JSON.stringify(n.body));let m=u instanceof FormData?{}:{"Content-Type":"application/json"};if(c()){let e=localStorage.getItem("token");e&&(m.Authorization="Bearer ".concat(e))}let Z=(null==n?void 0:n.baseUrl)===void 0?s.Z.NEXT_PUBLIC_API_ENDPOINT:n.baseUrl,h=t.startsWith("/")?"".concat(Z).concat(t):"".concat(Z,"/").concat(t),g=await fetch(h,{...n,headers:{...m,...null==n?void 0:n.headers},body:u,method:e}),P=await g.json(),p={status:g.status,payload:P};if(!g.ok){if(422===g.status)throw new l(p);if(401===g.status){if(c()){if(!d){d=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...m}});try{await d}catch(e){}finally{localStorage.removeItem("token"),d=null,location.href="/login"}}}else{var f;let e=null==n?void 0:null===(f=n.headers)||void 0===f?void 0:f.Authorization.split("Bearer ")[1];(0,a.redirect)("/logout?token=".concat(e))}}else if(403===g.status)console.log("Forbidden error"),location.href="/",i.toast.error("Kh\xf4ng c\xf3 quyền truy cập");else throw new o(p)}if(c()){if("api/users/login"===(0,r.AH)(t)){let{token:e}=P.data;localStorage.setItem("token",e)}else"api/auth/logout"===(0,r.AH)(t)&&localStorage.removeItem("token")}return p};t.ZP={get:(e,t)=>u("GET",e,t),post:(e,t,n)=>u("POST",e,{...n,body:t}),put:(e,t,n)=>u("PUT",e,{...n,body:t}),delete:(e,t)=>u("DELETE",e,{...t})}},22169:function(e,t,n){"use strict";n.d(t,{AH:function(){return u},Ft:function(){return g},Qe:function(){return Z},Xc:function(){return P},ZH:function(){return m},jg:function(){return d},o0:function(){return h},p6:function(){return c}});var s=n(42151),r=n.n(s),a=n(89348),i=n(86123),o=n(89539),l=n.n(o);function c(e){return new Date(r()(e).format("YYYY-MM-DD").replace(/-/g,""))}let d=(e,t)=>t<=7?Array.from({length:t},(e,t)=>t+1):e<=3?[1,2,3,"...",t-1,t]:e>=t-2?[1,2,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t],u=e=>e.startsWith("/")?e.slice(1):e,m=e=>{let{error:t,setError:n,message:s,duration:r}=e;t instanceof a.Xs&&n?t.payload.error.forEach(e=>{n(e.field,{type:"manual",message:e.message[0]})}):i.toast.error(s||t.payload.message||"Y\xeau cầu thất bại!",{autoClose:r||3e3})},Z=e=>e?l()(e).format("YYYY-MM-DD"):"",h=e=>e?l()(e).format("HH:mm DD-MM-YYYY"):"";function g(e){let t=new Date(1e3*e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}function P(e){let t=new Date(1e3*e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},5054:function(e,t,n){"use strict";n.d(t,{$T:function(){return l},CL:function(){return m},CS:function(){return o},UJ:function(){return u},XU:function(){return Z},Xm:function(){return a},Ym:function(){return c},sL:function(){return d},wU:function(){return i}});var s=n(69375),r=n(30248);let a=r.ZP.object({name:r.ZP.string().trim().min(2).max(256),username:r.ZP.string().trim().min(2).max(256),email:r.ZP.string().email(),password:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((e,t)=>{let{password_confirmation:n,password:s}=e;n!==s&&t.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["password_confirmation"]})}),i=r.ZP.object({username:r.ZP.string(),password:r.ZP.string().min(1,"Mật khẩu phải c\xf3 \xedt nhất 1 k\xed tự.").max(100)}).strict();r.ZP.object({success:r.ZP.boolean(),data:r.ZP.object({user:s.c2,token:r.ZP.string(),csrf_token:r.ZP.string()}),message:r.ZP.string()});let o=r.ZP.object({token:r.ZP.string(),csrf_token:r.ZP.string(),id:r.ZP.number()}),l=r.ZP.object({name:r.ZP.string().trim().min(2).max(256),dob:r.ZP.string(),email:r.ZP.string().email(),phone:r.ZP.string(),address_id:r.ZP.string(),image:r.ZP.string().optional()}),c=r.ZP.object({name:r.ZP.string(),email:r.ZP.string(),phone:r.ZP.string(),dob:r.ZP.string().nullable(),username:r.ZP.string(),address_id:r.ZP.string(),role_id:r.ZP.number(),wp_id:r.ZP.coerce.number(),img_id:r.ZP.string().optional()}),d=r.ZP.object({name:r.ZP.string(),email:r.ZP.string(),password:r.ZP.string(),phone:r.ZP.string(),dob:r.ZP.string().nullable(),username:r.ZP.string(),address_id:r.ZP.string(),role_id:r.ZP.number(),wp_id:r.ZP.string().optional(),img_id:r.ZP.string().optional()});r.ZP.object({success:r.ZP.boolean(),data:s.c2,message:r.ZP.string()}),r.ZP.object({success:r.ZP.boolean(),data:r.ZP.object({total:r.ZP.number(),currentPage:r.ZP.number(),pageSize:r.ZP.number(),data:r.ZP.array(s.c2)}),message:r.ZP.string()});let u=r.ZP.object({old_password:r.ZP.string(),new_password:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),new_password_confirmation:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((e,t)=>{let{new_password_confirmation:n,new_password:s}=e;n!==s&&t.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["new_password_confirmation"]})}),m=r.ZP.object({email:r.ZP.string().email()}),Z=r.ZP.object({email:r.ZP.string().email(),token:r.ZP.string().optional(),password:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:r.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)})},69375:function(e,t,n){"use strict";n.d(t,{$5:function(){return c},Kn:function(){return a},c2:function(){return o}});var s=n(30248);s.ZP.object({success:s.ZP.boolean(),message:s.ZP.string()}).strict();let r=s.ZP.object({provinceCode:s.ZP.string(),districtCode:s.ZP.string(),wardCode:s.ZP.string(),province:s.ZP.string(),district:s.ZP.string(),ward:s.ZP.string(),address:s.ZP.string().optional()});s.ZP.object({code:s.ZP.string(),name:s.ZP.string(),name_en:s.ZP.string(),full_name:s.ZP.string(),full_name_en:s.ZP.string(),code_name:s.ZP.string()});let a=s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),address_id:s.ZP.string(),type_id:s.ZP.number(),cap:s.ZP.number(),created_at:s.ZP.string(),updated_at:s.ZP.string(),address:r,manager:s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),address:s.ZP.string().nullable()}),type:s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),for:s.ZP.number()}),detail:s.ZP.null()}),i=s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),desc:s.ZP.string(),created_at:s.ZP.string(),updated_at:s.ZP.string()}),o=s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),email:s.ZP.string(),email_verified_at:s.ZP.string().nullable(),created_at:s.ZP.number().nullable(),updated_at:s.ZP.number().nullable(),phone:s.ZP.string().nullable(),dob:s.ZP.date().nullable(),username:s.ZP.string(),address:r,role_id:s.ZP.number(),wp_id:s.ZP.number().nullable(),img_id:s.ZP.string().nullable(),role:i,work_plate:a.nullable(),img:s.ZP.string().nullable()}),l=s.ZP.object({id:s.ZP.number(),created_at:s.ZP.string(),updated_at:s.ZP.string(),order_id:s.ZP.number(),name:s.ZP.string(),mass:s.ZP.number(),desc:s.ZP.string(),image_link:s.ZP.string().nullable()}),c=s.ZP.object({id:s.ZP.number(),sender_name:s.ZP.string(),sender_phone:s.ZP.string(),receiver_name:s.ZP.string(),receiver_phone:s.ZP.string(),created_at:s.ZP.number(),updated_at:s.ZP.number(),vehicle_id:s.ZP.number().nullable(),type_id:s.ZP.number(),status_id:s.ZP.number(),mass:s.ZP.number(),sender_address:r,receiver_address:r,type:s.ZP.object({id:s.ZP.number(),name:s.ZP.string(),for:s.ZP.number().optional()}),notifications:s.ZP.array(s.ZP.object({id:s.ZP.number(),order_id:s.ZP.number(),from_id:s.ZP.number(),to_id:s.ZP.number(),status_id:s.ZP.number(),description:s.ZP.string(),created_at:s.ZP.string(),updated_at:s.ZP.string(),from_address:r,to_address:r})),details:s.ZP.array(l),created_by:s.ZP.object({id:s.ZP.number(),name:s.ZP.string()})});s.ZP.object({success:s.ZP.boolean(),data:s.ZP.object({total:s.ZP.number()})})}},function(e){e.O(0,[6990,6051,7699,522,5452,248,6123,4838,4898,571,1703,5340,2971,8069,1744],function(){return e(e.s=88564)}),_N_E=e.O()}]);