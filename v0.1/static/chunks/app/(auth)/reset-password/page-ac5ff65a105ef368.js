(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5277],{70614:function(e,t,r){Promise.resolve().then(r.bind(r,30799))},86144:function(e,t,r){"use strict";r.d(t,{FT:function(){return i}});var n=r(2265),s=r(57437);let a=["as","disabled"];function i({tagName:e,disabled:t,href:r,target:n,rel:s,role:a,onClick:i,tabIndex:o=0,type:l}){e||(e=null!=r||null!=n||null!=s?"a":"button");let c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];let u=n=>{var s;if(!t&&("a"!==e||(s=r)&&"#"!==s.trim())||n.preventDefault(),t){n.stopPropagation();return}null==i||i(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}let o=n.forwardRef((e,t)=>{let{as:r,disabled:n}=e,o=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a),[l,{tagName:c}]=i(Object.assign({tagName:r,disabled:n},o));return(0,s.jsx)(c,Object.assign({},o,l,{ref:t}))});o.displayName="Button",t.ZP=o},66879:function(e,t,r){"use strict";var n=r(16480),s=r.n(n),a=r(2265),i=r(86144),o=r(12865),l=r(57437);let c=a.forwardRef((e,t)=>{let{as:r,bsPrefix:n,variant:a="primary",size:c,active:u=!1,disabled:d=!1,className:m,...P}=e,Z=(0,o.vE)(n,"btn"),[g,{tagName:p}]=(0,i.FT)({tagName:r,disabled:d,...P});return(0,l.jsx)(p,{...g,...P,ref:t,disabled:d,className:s()(m,Z,u&&"active",a&&"".concat(Z,"-").concat(a),c&&"".concat(Z,"-").concat(c),P.href&&d&&"disabled")})});c.displayName="Button",t.Z=c},73537:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(16480),s=r.n(n),a=r(2265),i=r(12865),o=r(66183),l=r(41805),c=r(57437);let u=a.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:a="span",...o}=e;return n=(0,i.vE)(n,"input-group-text"),(0,c.jsx)(a,{ref:t,className:s()(r,n),...o})});u.displayName="InputGroupText";let d=a.forwardRef((e,t)=>{let{bsPrefix:r,size:n,hasValidation:o,className:u,as:d="div",...m}=e;r=(0,i.vE)(r,"input-group");let P=(0,a.useMemo)(()=>({}),[]);return(0,c.jsx)(l.Z.Provider,{value:P,children:(0,c.jsx)(d,{ref:t,...m,className:s()(u,r,n&&"".concat(r,"-").concat(n),o&&"has-validation")})})});d.displayName="InputGroup";var m=Object.assign(d,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(o.Z,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(o.Z,{type:"checkbox",...e})})})},41805:function(e,t,r){"use strict";let n=r(2265).createContext(null);n.displayName="InputGroupContext",t.Z=n},65588:function(e,t,r){"use strict";var n=r(89348);t.Z={login:e=>n.ZP.post("api/users/login",e),register:e=>n.ZP.post("api/users",e),auth:e=>n.ZP.post("api/auth",e,{baseUrl:""}),logoutFromNextServerToServer:e=>n.ZP.delete("api/users/me",{headers:{Authorization:"Bearer ".concat(e)}}),logoutFromNextClientToNextServer:(e,t)=>n.ZP.post("/api/auth/logout",{force:e},{baseUrl:"",signal:t}),updateUserClient:(e,t)=>n.ZP.put("api/users/".concat(t),e),updateEmployee:(e,t)=>n.ZP.put("api/users/".concat(t),e),getCsrfTokenClient:()=>n.ZP.get("/sanctum/csrf-cookie"),forgotPassword:e=>n.ZP.post("api/users/forgot-password",e),resetPassword:e=>n.ZP.post("api/users/reset-password",e)}},30799:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(57437),s=r(71709),a=r(59853),i=r(55914),o=r(73537),l=r(66879),c=r(82670),u=r(5054),d=r(21270),m=r(65588),P=r(47907),Z=r(86123),g=r(22169),p=r(42362);function b(){let e=(0,P.useRouter)(),{register:t,handleSubmit:r,setError:b,formState:{errors:f,isSubmitting:h}}=(0,c.cI)({resolver:(0,d.F)(u.XU)}),j=(0,P.useSearchParams)();async function _(t){t.token=j.get("token")||"",console.log(t);try{(await m.Z.resetPassword(t)).payload.success&&(Z.toast.success("Reset mật khẩu th\xe0nh c\xf4ng"),e.push("/login"))}catch(e){(0,g.ZH)({error:e,setError:b,message:"Reset mật khẩu thất bại!"})}}return(0,n.jsxs)(a.Z,{onSubmit:r(_,function(e){console.log(e)}),children:[(0,n.jsx)(i.default,{className:"text-center text-light",children:(0,n.jsx)("h3",{children:"Reset Mật Khẩu"})}),(0,n.jsx)(i.default,{children:(0,n.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,n.jsx)(a.Z.Label,{htmlFor:"email",className:"text-light",children:"Email"}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(o.Z.Text,{id:"basic-addon1",children:(0,n.jsx)(p.BKo,{})}),(0,n.jsx)(a.Z.Control,{id:"email",placeholder:"Email","aria-label":"email","aria-describedby":"basic-addon1",...t("email")})]}),f.email&&(0,n.jsx)(a.Z.Text,{className:"text-danger",children:f.email.message})]})}),(0,n.jsx)(i.default,{children:(0,n.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,n.jsx)(a.Z.Label,{htmlFor:"password",className:"text-light",children:"Mật khẩu mới"}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(o.Z.Text,{id:"basic-addon1",children:(0,n.jsx)(s.oAM,{})}),(0,n.jsx)(a.Z.Control,{id:"password",placeholder:"Mật khẩu","aria-label":"Password",type:"password","aria-describedby":"basic-addon1",required:!0,...t("password")})]}),f.password&&(0,n.jsx)(a.Z.Text,{className:"text-danger",children:f.password.message})]})}),(0,n.jsx)(i.default,{children:(0,n.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,n.jsx)(a.Z.Label,{htmlFor:"password",className:"text-light",children:"X\xe1c nhận mật khẩu mới"}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(o.Z.Text,{id:"basic-addon1",children:(0,n.jsx)(s.oAM,{})}),(0,n.jsx)(a.Z.Control,{id:"password_confirmation",placeholder:"X\xe1c nhận mật khẩu","aria-label":"Confirm Password",type:"password","aria-describedby":"basic-addon1",required:!0,...t("password_confirmation")})]}),f.password_confirmation&&(0,n.jsx)(a.Z.Text,{className:"text-danger",children:f.password_confirmation.message})]})}),(0,n.jsxs)(i.default,{className:"m-1",children:[(0,n.jsx)(l.Z,{variant:"primary",size:"lg",className:"login-btn",type:"submit",disabled:h,children:h?"Đang xử l\xfd...":"Reset Mật Khẩu"}),f.root&&(0,n.jsx)(a.Z.Text,{className:"text-danger",children:f.root.message})]})]})}},2261:function(e,t,r){"use strict";var n=r(30248);let s=n.z.object({NEXT_PUBLIC_COMPANY_NAME:n.z.string(),NEXT_PUBLIC_API_ENDPOINT:n.z.string(),NEXT_PUBLIC_COMPANY_DESCRIPTION:n.z.string()}).safeParse({NEXT_PUBLIC_COMPANY_NAME:"Giao hang GTK",NEXT_PUBLIC_API_ENDPOINT:"http://localhost:8000",NEXT_PUBLIC_COMPANY_DESCRIPTION:"Company Description"});if(!s.success)throw console.error(s.error.issues),Error("C\xe1c gi\xe1 trị khai b\xe1o trong file .env kh\xf4ng hợp lệ");let a=s.data;t.Z=a},89348:function(e,t,r){"use strict";r.d(t,{Xs:function(){return l}});var n=r(2261),s=r(22169),a=r(47907),i=r(86123);class o extends Error{constructor({status:e,payload:t}){super("Http Error"),this.status=e,this.payload=t}}class l extends o{constructor({status:e,payload:t}){super({status:e,payload:t}),this.status=e,this.payload=t}}let c=()=>!0,u=null,d=async(e,t,r)=>{let d;(null==r?void 0:r.body)instanceof FormData?d=r.body:(null==r?void 0:r.body)&&(d=JSON.stringify(r.body));let m=d instanceof FormData?{}:{"Content-Type":"application/json"};if(c()){let e=localStorage.getItem("token");e&&(m.Authorization="Bearer ".concat(e))}let P=(null==r?void 0:r.baseUrl)===void 0?n.Z.NEXT_PUBLIC_API_ENDPOINT:r.baseUrl,Z=t.startsWith("/")?"".concat(P).concat(t):"".concat(P,"/").concat(t),g=await fetch(Z,{...r,headers:{...m,...null==r?void 0:r.headers},body:d,method:e}),p=await g.json(),b={status:g.status,payload:p};if(!g.ok){if(422===g.status)throw new l(b);if(401===g.status){if(c()){if(!u){u=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...m}});try{await u}catch(e){}finally{localStorage.removeItem("token"),u=null,location.href="/login"}}}else{var f;let e=null==r?void 0:null===(f=r.headers)||void 0===f?void 0:f.Authorization.split("Bearer ")[1];(0,a.redirect)("/logout?token=".concat(e))}}else if(403===g.status)console.log("Forbidden error"),location.href="/",i.toast.error("Kh\xf4ng c\xf3 quyền truy cập");else throw new o(b)}if(c()){if("api/users/login"===(0,s.AH)(t)){let{token:e}=p.data;localStorage.setItem("token",e)}else"api/auth/logout"===(0,s.AH)(t)&&localStorage.removeItem("token")}return b};t.ZP={get:(e,t)=>d("GET",e,t),post:(e,t,r)=>d("POST",e,{...r,body:t}),put:(e,t,r)=>d("PUT",e,{...r,body:t}),delete:(e,t)=>d("DELETE",e,{...t})}},22169:function(e,t,r){"use strict";r.d(t,{AH:function(){return d},Ft:function(){return g},Qe:function(){return P},Xc:function(){return p},ZH:function(){return m},jg:function(){return u},o0:function(){return Z},p6:function(){return c}});var n=r(42151),s=r.n(n),a=r(89348),i=r(86123),o=r(89539),l=r.n(o);function c(e){return new Date(s()(e).format("YYYY-MM-DD").replace(/-/g,""))}let u=(e,t)=>t<=7?Array.from({length:t},(e,t)=>t+1):e<=3?[1,2,3,"...",t-1,t]:e>=t-2?[1,2,"...",t-2,t-1,t]:[1,"...",e-1,e,e+1,"...",t],d=e=>e.startsWith("/")?e.slice(1):e,m=e=>{let{error:t,setError:r,message:n,duration:s}=e;t instanceof a.Xs&&r?t.payload.error.forEach(e=>{r(e.field,{type:"manual",message:e.message[0]})}):i.toast.error(n||t.payload.message||"Y\xeau cầu thất bại!",{autoClose:s||3e3})},P=e=>e?l()(e).format("YYYY-MM-DD"):"",Z=e=>e?l()(e).format("HH:mm DD-MM-YYYY"):"";function g(e){let t=new Date(1e3*e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}function p(e){let t=new Date(1e3*e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},5054:function(e,t,r){"use strict";r.d(t,{$T:function(){return l},CL:function(){return m},CS:function(){return o},UJ:function(){return d},XU:function(){return P},Xm:function(){return a},Ym:function(){return c},sL:function(){return u},wU:function(){return i}});var n=r(69375),s=r(30248);let a=s.ZP.object({name:s.ZP.string().trim().min(2).max(256),username:s.ZP.string().trim().min(2).max(256),email:s.ZP.string().email(),password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((e,t)=>{let{password_confirmation:r,password:n}=e;r!==n&&t.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["password_confirmation"]})}),i=s.ZP.object({username:s.ZP.string(),password:s.ZP.string().min(1,"Mật khẩu phải c\xf3 \xedt nhất 1 k\xed tự.").max(100)}).strict();s.ZP.object({success:s.ZP.boolean(),data:s.ZP.object({user:n.c2,token:s.ZP.string(),csrf_token:s.ZP.string()}),message:s.ZP.string()});let o=s.ZP.object({token:s.ZP.string(),csrf_token:s.ZP.string(),id:s.ZP.number()}),l=s.ZP.object({name:s.ZP.string().trim().min(2).max(256),dob:s.ZP.string(),email:s.ZP.string().email(),phone:s.ZP.string(),address_id:s.ZP.string(),image:s.ZP.string().optional()}),c=s.ZP.object({name:s.ZP.string(),email:s.ZP.string(),phone:s.ZP.string(),dob:s.ZP.string().nullable(),username:s.ZP.string(),address_id:s.ZP.string(),role_id:s.ZP.number(),wp_id:s.ZP.coerce.number(),img_id:s.ZP.string().optional()}),u=s.ZP.object({name:s.ZP.string(),email:s.ZP.string(),password:s.ZP.string(),phone:s.ZP.string(),dob:s.ZP.string().nullable(),username:s.ZP.string(),address_id:s.ZP.string(),role_id:s.ZP.number(),wp_id:s.ZP.string().optional(),img_id:s.ZP.string().optional()});s.ZP.object({success:s.ZP.boolean(),data:n.c2,message:s.ZP.string()}),s.ZP.object({success:s.ZP.boolean(),data:s.ZP.object({total:s.ZP.number(),currentPage:s.ZP.number(),pageSize:s.ZP.number(),data:s.ZP.array(n.c2)}),message:s.ZP.string()});let d=s.ZP.object({old_password:s.ZP.string(),new_password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),new_password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((e,t)=>{let{new_password_confirmation:r,new_password:n}=e;r!==n&&t.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["new_password_confirmation"]})}),m=s.ZP.object({email:s.ZP.string().email()}),P=s.ZP.object({email:s.ZP.string().email(),token:s.ZP.string().optional(),password:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:s.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)})},69375:function(e,t,r){"use strict";r.d(t,{$5:function(){return c},Kn:function(){return a},c2:function(){return o}});var n=r(30248);n.ZP.object({success:n.ZP.boolean(),message:n.ZP.string()}).strict();let s=n.ZP.object({provinceCode:n.ZP.string(),districtCode:n.ZP.string(),wardCode:n.ZP.string(),province:n.ZP.string(),district:n.ZP.string(),ward:n.ZP.string(),address:n.ZP.string().optional()});n.ZP.object({code:n.ZP.string(),name:n.ZP.string(),name_en:n.ZP.string(),full_name:n.ZP.string(),full_name_en:n.ZP.string(),code_name:n.ZP.string()});let a=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),address_id:n.ZP.string(),type_id:n.ZP.number(),cap:n.ZP.number(),created_at:n.ZP.string(),updated_at:n.ZP.string(),address:s,manager:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),address:n.ZP.string().nullable()}),type:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),for:n.ZP.number()}),detail:n.ZP.null()}),i=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),desc:n.ZP.string(),created_at:n.ZP.string(),updated_at:n.ZP.string()}),o=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),email:n.ZP.string(),email_verified_at:n.ZP.string().nullable(),created_at:n.ZP.number().nullable(),updated_at:n.ZP.number().nullable(),phone:n.ZP.string().nullable(),dob:n.ZP.date().nullable(),username:n.ZP.string(),address:s,role_id:n.ZP.number(),wp_id:n.ZP.number().nullable(),img_id:n.ZP.string().nullable(),role:i,work_plate:a.nullable(),img:n.ZP.string().nullable()}),l=n.ZP.object({id:n.ZP.number(),created_at:n.ZP.string(),updated_at:n.ZP.string(),order_id:n.ZP.number(),name:n.ZP.string(),mass:n.ZP.number(),desc:n.ZP.string(),image_link:n.ZP.string().nullable()}),c=n.ZP.object({id:n.ZP.number(),sender_name:n.ZP.string(),sender_phone:n.ZP.string(),receiver_name:n.ZP.string(),receiver_phone:n.ZP.string(),created_at:n.ZP.number(),updated_at:n.ZP.number(),vehicle_id:n.ZP.number().nullable(),type_id:n.ZP.number(),status_id:n.ZP.number(),mass:n.ZP.number(),sender_address:s,receiver_address:s,type:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),for:n.ZP.number().optional()}),notifications:n.ZP.array(n.ZP.object({id:n.ZP.number(),order_id:n.ZP.number(),from_id:n.ZP.number(),to_id:n.ZP.number(),status_id:n.ZP.number(),description:n.ZP.string(),created_at:n.ZP.string(),updated_at:n.ZP.string(),from_address:s,to_address:s})),details:n.ZP.array(l),created_by:n.ZP.object({id:n.ZP.number(),name:n.ZP.string()})});n.ZP.object({success:n.ZP.boolean(),data:n.ZP.object({total:n.ZP.number()})})},70158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),i=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,o({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,i),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[6990,9212,7240,248,6123,4838,571,2971,8069,1744],function(){return e(e.s=70614)}),_N_E=e.O()}]);