(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9985],{34748:function(t,e,r){Promise.resolve().then(r.bind(r,44811))},86144:function(t,e,r){"use strict";r.d(e,{FT:function(){return s}});var n=r(2265),i=r(57437);let a=["as","disabled"];function s({tagName:t,disabled:e,href:r,target:n,rel:i,role:a,onClick:s,tabIndex:o=0,type:l}){t||(t=null!=r||null!=n||null!=i?"a":"button");let c={tagName:t};if("button"===t)return[{type:l||"button",disabled:e},c];let u=n=>{var i;if(!e&&("a"!==t||(i=r)&&"#"!==i.trim())||n.preventDefault(),e){n.stopPropagation();return}null==s||s(n)};return"a"===t&&(r||(r="#"),e&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:e?void 0:o,href:r,target:"a"===t?n:void 0,"aria-disabled":e||void 0,rel:"a"===t?i:void 0,onClick:u,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),u(t))}},c]}let o=n.forwardRef((t,e)=>{let{as:r,disabled:n}=t,o=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,a),[l,{tagName:c}]=s(Object.assign({tagName:r,disabled:n},o));return(0,i.jsx)(c,Object.assign({},o,l,{ref:e}))});o.displayName="Button",e.ZP=o},66879:function(t,e,r){"use strict";var n=r(16480),i=r.n(n),a=r(2265),s=r(86144),o=r(12865),l=r(57437);let c=a.forwardRef((t,e)=>{let{as:r,bsPrefix:n,variant:a="primary",size:c,active:u=!1,disabled:d=!1,className:P,...m}=t,g=(0,o.vE)(n,"btn"),[Z,{tagName:b}]=(0,s.FT)({tagName:r,disabled:d,...m});return(0,l.jsx)(b,{...Z,...m,ref:e,disabled:d,className:i()(P,g,u&&"active",a&&"".concat(g,"-").concat(a),c&&"".concat(g,"-").concat(c),m.href&&d&&"disabled")})});c.displayName="Button",e.Z=c},73537:function(t,e,r){"use strict";r.d(e,{Z:function(){return P}});var n=r(16480),i=r.n(n),a=r(2265),s=r(12865),o=r(66183),l=r(41805),c=r(57437);let u=a.forwardRef((t,e)=>{let{className:r,bsPrefix:n,as:a="span",...o}=t;return n=(0,s.vE)(n,"input-group-text"),(0,c.jsx)(a,{ref:e,className:i()(r,n),...o})});u.displayName="InputGroupText";let d=a.forwardRef((t,e)=>{let{bsPrefix:r,size:n,hasValidation:o,className:u,as:d="div",...P}=t;r=(0,s.vE)(r,"input-group");let m=(0,a.useMemo)(()=>({}),[]);return(0,c.jsx)(l.Z.Provider,{value:m,children:(0,c.jsx)(d,{ref:e,...P,className:i()(u,r,n&&"".concat(r,"-").concat(n),o&&"has-validation")})})});d.displayName="InputGroup";var P=Object.assign(d,{Text:u,Radio:t=>(0,c.jsx)(u,{children:(0,c.jsx)(o.Z,{type:"radio",...t})}),Checkbox:t=>(0,c.jsx)(u,{children:(0,c.jsx)(o.Z,{type:"checkbox",...t})})})},41805:function(t,e,r){"use strict";let n=r(2265).createContext(null);n.displayName="InputGroupContext",e.Z=n},65588:function(t,e,r){"use strict";var n=r(89348);e.Z={login:t=>n.ZP.post("api/users/login",t),register:t=>n.ZP.post("api/users",t),auth:t=>n.ZP.post("api/auth",t,{baseUrl:""}),logoutFromNextServerToServer:t=>n.ZP.delete("api/users/me",{headers:{Authorization:"Bearer ".concat(t)}}),logoutFromNextClientToNextServer:(t,e)=>n.ZP.post("/api/auth/logout",{force:t},{baseUrl:"",signal:e}),updateUserClient:(t,e)=>n.ZP.put("api/users/".concat(e),t),updateEmployee:(t,e)=>n.ZP.put("api/users/".concat(e),t),getCsrfTokenClient:()=>n.ZP.get("/sanctum/csrf-cookie"),forgotPassword:t=>n.ZP.post("api/users/forgot-password",t),resetPassword:t=>n.ZP.post("api/users/reset-password",t)}},44811:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var n=r(57437),i=r(59853),a=r(55914),s=r(73537),o=r(66879),l=r(21270),c=r(82670),u=r(5054),d=r(65588),P=r(86123),m=r(22169),g=r(42362);function Z(){let{register:t,handleSubmit:e,setError:r,formState:{errors:Z,isSubmitting:b}}=(0,c.cI)({resolver:(0,l.F)(u.CL)});async function p(t){try{(await d.Z.forgotPassword(t)).payload.success&&P.toast.success("Vui l\xf2ng kiểm tra email để lấy lại mật khẩu")}catch(t){(0,m.ZH)({error:t,setError:r,message:"Gửi y\xeau cầu thất bại!"})}}return(0,n.jsxs)(i.Z,{onSubmit:e(p,function(t){console.log(t)}),children:[(0,n.jsx)(a.default,{className:"text-center text-light",children:(0,n.jsx)("h3",{children:"Qu\xean mật khẩu"})}),(0,n.jsx)(a.default,{children:(0,n.jsxs)(i.Z.Group,{className:"mb-3",children:[(0,n.jsx)(i.Z.Label,{htmlFor:"email",className:"text-light",children:"Email"}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(s.Z.Text,{id:"basic-addon1",children:(0,n.jsx)(g.BKo,{})}),(0,n.jsx)(i.Z.Control,{id:"email",placeholder:"Email","aria-label":"email","aria-describedby":"basic-addon1",...t("email")})]}),Z.email&&(0,n.jsx)(i.Z.Text,{className:"text-danger",children:Z.email.message})]})}),(0,n.jsxs)(a.default,{className:"m-1",children:[(0,n.jsx)(o.Z,{variant:"primary",size:"lg",className:"login-btn",type:"submit",disabled:b,children:b?"Đang xử l\xfd...":"Gửi y\xeau cầu"}),Z.root&&(0,n.jsx)(i.Z.Text,{className:"text-danger",children:Z.root.message})]})]})}},2261:function(t,e,r){"use strict";var n=r(30248);let i=n.z.object({NEXT_PUBLIC_COMPANY_NAME:n.z.string(),NEXT_PUBLIC_API_ENDPOINT:n.z.string(),NEXT_PUBLIC_COMPANY_DESCRIPTION:n.z.string()}).safeParse({NEXT_PUBLIC_COMPANY_NAME:"Giao hang GTK",NEXT_PUBLIC_API_ENDPOINT:"http://localhost:8000",NEXT_PUBLIC_COMPANY_DESCRIPTION:"Company Description"});if(!i.success)throw console.error(i.error.issues),Error("C\xe1c gi\xe1 trị khai b\xe1o trong file .env kh\xf4ng hợp lệ");let a=i.data;e.Z=a},89348:function(t,e,r){"use strict";r.d(e,{Xs:function(){return l}});var n=r(2261),i=r(22169),a=r(47907),s=r(86123);class o extends Error{constructor({status:t,payload:e}){super("Http Error"),this.status=t,this.payload=e}}class l extends o{constructor({status:t,payload:e}){super({status:t,payload:e}),this.status=t,this.payload=e}}let c=()=>!0,u=null,d=async(t,e,r)=>{let d;(null==r?void 0:r.body)instanceof FormData?d=r.body:(null==r?void 0:r.body)&&(d=JSON.stringify(r.body));let P=d instanceof FormData?{}:{"Content-Type":"application/json"};if(c()){let t=localStorage.getItem("token");t&&(P.Authorization="Bearer ".concat(t))}let m=(null==r?void 0:r.baseUrl)===void 0?n.Z.NEXT_PUBLIC_API_ENDPOINT:r.baseUrl,g=e.startsWith("/")?"".concat(m).concat(e):"".concat(m,"/").concat(e),Z=await fetch(g,{...r,headers:{...P,...null==r?void 0:r.headers},body:d,method:t}),b=await Z.json(),p={status:Z.status,payload:b};if(!Z.ok){if(422===Z.status)throw new l(p);if(401===Z.status){if(c()){if(!u){u=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...P}});try{await u}catch(t){}finally{localStorage.removeItem("token"),u=null,location.href="/login"}}}else{var f;let t=null==r?void 0:null===(f=r.headers)||void 0===f?void 0:f.Authorization.split("Bearer ")[1];(0,a.redirect)("/logout?token=".concat(t))}}else if(403===Z.status)console.log("Forbidden error"),location.href="/",s.toast.error("Kh\xf4ng c\xf3 quyền truy cập");else throw new o(p)}if(c()){if("api/users/login"===(0,i.AH)(e)){let{token:t}=b.data;localStorage.setItem("token",t)}else"api/auth/logout"===(0,i.AH)(e)&&localStorage.removeItem("token")}return p};e.ZP={get:(t,e)=>d("GET",t,e),post:(t,e,r)=>d("POST",t,{...r,body:e}),put:(t,e,r)=>d("PUT",t,{...r,body:e}),delete:(t,e)=>d("DELETE",t,{...e})}},22169:function(t,e,r){"use strict";r.d(e,{AH:function(){return d},Ft:function(){return Z},Qe:function(){return m},Xc:function(){return b},ZH:function(){return P},jg:function(){return u},o0:function(){return g},p6:function(){return c}});var n=r(42151),i=r.n(n),a=r(89348),s=r(86123),o=r(89539),l=r.n(o);function c(t){return new Date(i()(t).format("YYYY-MM-DD").replace(/-/g,""))}let u=(t,e)=>e<=7?Array.from({length:e},(t,e)=>e+1):t<=3?[1,2,3,"...",e-1,e]:t>=e-2?[1,2,"...",e-2,e-1,e]:[1,"...",t-1,t,t+1,"...",e],d=t=>t.startsWith("/")?t.slice(1):t,P=t=>{let{error:e,setError:r,message:n,duration:i}=t;e instanceof a.Xs&&r?e.payload.error.forEach(t=>{r(t.field,{type:"manual",message:t.message[0]})}):s.toast.error(n||e.payload.message||"Y\xeau cầu thất bại!",{autoClose:i||3e3})},m=t=>t?l()(t).format("YYYY-MM-DD"):"",g=t=>t?l()(t).format("HH:mm DD-MM-YYYY"):"";function Z(t){let e=new Date(1e3*t);return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}function b(t){let e=new Date(1e3*t);return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes())}},5054:function(t,e,r){"use strict";r.d(e,{$T:function(){return l},CL:function(){return P},CS:function(){return o},UJ:function(){return d},XU:function(){return m},Xm:function(){return a},Ym:function(){return c},sL:function(){return u},wU:function(){return s}});var n=r(69375),i=r(30248);let a=i.ZP.object({name:i.ZP.string().trim().min(2).max(256),username:i.ZP.string().trim().min(2).max(256),email:i.ZP.string().email(),password:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((t,e)=>{let{password_confirmation:r,password:n}=t;r!==n&&e.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["password_confirmation"]})}),s=i.ZP.object({username:i.ZP.string(),password:i.ZP.string().min(1,"Mật khẩu phải c\xf3 \xedt nhất 1 k\xed tự.").max(100)}).strict();i.ZP.object({success:i.ZP.boolean(),data:i.ZP.object({user:n.c2,token:i.ZP.string(),csrf_token:i.ZP.string()}),message:i.ZP.string()});let o=i.ZP.object({token:i.ZP.string(),csrf_token:i.ZP.string(),id:i.ZP.number()}),l=i.ZP.object({name:i.ZP.string().trim().min(2).max(256),dob:i.ZP.string(),email:i.ZP.string().email(),phone:i.ZP.string(),address_id:i.ZP.string(),image:i.ZP.string().optional()}),c=i.ZP.object({name:i.ZP.string(),email:i.ZP.string(),phone:i.ZP.string(),dob:i.ZP.string().nullable(),username:i.ZP.string(),address_id:i.ZP.string(),role_id:i.ZP.number(),wp_id:i.ZP.coerce.number(),img_id:i.ZP.string().optional()}),u=i.ZP.object({name:i.ZP.string(),email:i.ZP.string(),password:i.ZP.string(),phone:i.ZP.string(),dob:i.ZP.string().nullable(),username:i.ZP.string(),address_id:i.ZP.string(),role_id:i.ZP.number(),wp_id:i.ZP.string().optional(),img_id:i.ZP.string().optional()});i.ZP.object({success:i.ZP.boolean(),data:n.c2,message:i.ZP.string()}),i.ZP.object({success:i.ZP.boolean(),data:i.ZP.object({total:i.ZP.number(),currentPage:i.ZP.number(),pageSize:i.ZP.number(),data:i.ZP.array(n.c2)}),message:i.ZP.string()});let d=i.ZP.object({old_password:i.ZP.string(),new_password:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),new_password_confirmation:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)}).strict().superRefine((t,e)=>{let{new_password_confirmation:r,new_password:n}=t;r!==n&&e.addIssue({code:"custom",message:"Mật khẩu kh\xf4ng khớp",path:["new_password_confirmation"]})}),P=i.ZP.object({email:i.ZP.string().email()}),m=i.ZP.object({email:i.ZP.string().email(),token:i.ZP.string().optional(),password:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100),password_confirmation:i.ZP.string().min(6,"Mật khẩu phải c\xf3 độ d\xe0i tối thiểu l\xe0 6").max(100)})},69375:function(t,e,r){"use strict";r.d(e,{$5:function(){return c},Kn:function(){return a},c2:function(){return o}});var n=r(30248);n.ZP.object({success:n.ZP.boolean(),message:n.ZP.string()}).strict();let i=n.ZP.object({provinceCode:n.ZP.string(),districtCode:n.ZP.string(),wardCode:n.ZP.string(),province:n.ZP.string(),district:n.ZP.string(),ward:n.ZP.string(),address:n.ZP.string().optional()});n.ZP.object({code:n.ZP.string(),name:n.ZP.string(),name_en:n.ZP.string(),full_name:n.ZP.string(),full_name_en:n.ZP.string(),code_name:n.ZP.string()});let a=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),address_id:n.ZP.string(),type_id:n.ZP.number(),cap:n.ZP.number(),created_at:n.ZP.string(),updated_at:n.ZP.string(),address:i,manager:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),address:n.ZP.string().nullable()}),type:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),for:n.ZP.number()}),detail:n.ZP.null()}),s=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),desc:n.ZP.string(),created_at:n.ZP.string(),updated_at:n.ZP.string()}),o=n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),email:n.ZP.string(),email_verified_at:n.ZP.string().nullable(),created_at:n.ZP.number().nullable(),updated_at:n.ZP.number().nullable(),phone:n.ZP.string().nullable(),dob:n.ZP.date().nullable(),username:n.ZP.string(),address:i,role_id:n.ZP.number(),wp_id:n.ZP.number().nullable(),img_id:n.ZP.string().nullable(),role:s,work_plate:a.nullable(),img:n.ZP.string().nullable()}),l=n.ZP.object({id:n.ZP.number(),created_at:n.ZP.string(),updated_at:n.ZP.string(),order_id:n.ZP.number(),name:n.ZP.string(),mass:n.ZP.number(),desc:n.ZP.string(),image_link:n.ZP.string().nullable()}),c=n.ZP.object({id:n.ZP.number(),sender_name:n.ZP.string(),sender_phone:n.ZP.string(),receiver_name:n.ZP.string(),receiver_phone:n.ZP.string(),created_at:n.ZP.number(),updated_at:n.ZP.number(),vehicle_id:n.ZP.number().nullable(),type_id:n.ZP.number(),status_id:n.ZP.number(),mass:n.ZP.number(),sender_address:i,receiver_address:i,type:n.ZP.object({id:n.ZP.number(),name:n.ZP.string(),for:n.ZP.number().optional()}),notifications:n.ZP.array(n.ZP.object({id:n.ZP.number(),order_id:n.ZP.number(),from_id:n.ZP.number(),to_id:n.ZP.number(),status_id:n.ZP.number(),description:n.ZP.string(),created_at:n.ZP.string(),updated_at:n.ZP.string(),from_address:i,to_address:i})),details:n.ZP.array(l),created_by:n.ZP.object({id:n.ZP.number(),name:n.ZP.string()})});n.ZP.object({success:n.ZP.boolean(),data:n.ZP.object({total:n.ZP.number()})})},70158:function(t,e,r){"use strict";r.d(e,{w_:function(){return u}});var n=r(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),s=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){var n,i;n=e,i=r[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function u(t){return e=>n.createElement(d,o({attr:c({},t.attr)},e),function t(e){return e&&e.map((e,r)=>n.createElement(e.tag,c({key:r},e.attr),t(e.child)))}(t.child))}function d(t){var e=e=>{var r,{attr:i,size:a,title:l}=t,u=function(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}(t,s),d=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,u,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==a?n.createElement(a.Consumer,null,t=>e(t)):e(i)}}},function(t){t.O(0,[6990,7240,248,6123,4838,571,2971,8069,1744],function(){return t(t.s=34748)}),_N_E=t.O()}]);