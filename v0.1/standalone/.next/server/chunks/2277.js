"use strict";exports.id=2277,exports.ids=[2277],exports.modules={78154:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(34132),s=a.n(r),n=a(3729),i=a(15532),d=a(70136),o=a(95344);let l=n.forwardRef(({as:e,bsPrefix:t,variant:a="primary",size:r,active:n=!1,disabled:l=!1,className:c,...P},Z)=>{let u=(0,d.vE)(t,"btn"),[g,{tagName:m}]=(0,i.useButtonProps)({tagName:e,disabled:l,...P});return(0,o.jsx)(m,{...g,...P,ref:Z,disabled:l,className:s()(c,u,n&&"active",a&&`${u}-${a}`,r&&`${u}-${r}`,P.href&&l&&"disabled")})});l.displayName="Button";let c=l},84324:(e,t,a)=>{a.d(t,{y:()=>s});var r=a(68356);let s={getProvince:()=>r.ZP.get("api/address/provinces"),getDistrict:e=>r.ZP.get(`api/address/districts?code=${e}`,{cache:"force-cache"}),getWard:e=>r.ZP.get(`api/address/wards?code=${e}`,{cache:"force-cache"})}},84700:(e,t,a)=>{a.d(t,{c:()=>n});var r=a(91767),s=a(68356);let n={getWorkPlateClient:(e,t)=>s.ZP.get(`api/work-plates?pageSize=${r.ud}&&page=${e}&&type_id=${t}`),getWorkPlate:e=>s.ZP.get("api/work-plates",{headers:{Authorization:`Bearer ${e}`}}),getWorkPlateSuggestClient:e=>s.ZP.get(`api/work-plates/suggestion-wp?address_id=${e}`),createWP:e=>s.ZP.post("api/work-plates",e),getDetailWorkPlate:(e,t)=>s.ZP.get(`api/work-plates/${t}`,{headers:{Authorization:`Bearer ${e}`}}),updateWP:(e,t)=>s.ZP.put(`api/work-plates/${e}`,t),deleteWP:e=>s.ZP.delete(`api/work-plates/${e}`)}},616:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(95344),s=a(84324),n=a(3729),i=a(95209),d=a(11998);function o({listProvince:e,register:t,defaultValues:a,fieldName:o,disabledProvince:l}){let[c,P]=(0,n.useState)(a?.provinceCode||"0"),[Z,u]=(0,n.useState)(a?.districtCode||"0"),[g,m]=(0,n.useState)(a?.wardCode||"0"),p=e=>s.y.getDistrict(e).then(e=>e.payload.data),b=e=>s.y.getWard(e).then(e=>e.payload.data),{data:h,error:_,isLoading:f}=(0,d.Z)("0"===c?null:`api/address/districts?code=${c}`,()=>p(c)),{data:v,error:j,isLoading:y}=(0,d.Z)("0"===Z?null:`api/address/wards?code=${Z}`,()=>b(Z)),w=e=>{P(e.target.value),u("0"),m("0")},$=e=>{u(e.target.value),m("0")};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(i.default,{md:4,children:(0,r.jsxs)("select",{className:"form-select",id:"province",onChange:e=>{w(e)},value:c,disabled:l,children:[r.jsx("option",{disabled:!0,value:"0",children:"Chọn Tỉnh / TP"},"0"),e.map(e=>r.jsx("option",{value:e.code,children:e.full_name},e.code))]})}),r.jsx(i.default,{md:4,children:(0,r.jsxs)("select",{className:"form-select",onChange:e=>{$(e)},value:Z,children:[r.jsx("option",{disabled:!0,value:"0",children:"Chọn Quận/ Huyện"},"0"),h?.map(e=>r.jsx("option",{value:e.code,children:e.full_name},e.code))]})}),r.jsx(i.default,{md:4,children:(0,r.jsxs)("select",{className:"form-select",value:g,...t(o,{onChange:e=>{m(e.target.value)}}),children:[r.jsx("option",{disabled:!0,value:"0",children:"Chọn phường x\xe3"},"0"),v?.map(e=>r.jsx("option",{value:e.code,children:e.full_name},e.code))]})})]})}},91767:(e,t,a)=>{a.d(t,{Ii:()=>r,LL:()=>n,ud:()=>s});let r=5,s=10,n=10},37202:(e,t,a)=>{a.d(t,{$5:()=>l,Kn:()=>n,c2:()=>d});var r=a(29709);r.ZP.object({success:r.ZP.boolean(),message:r.ZP.string()}).strict();let s=r.ZP.object({provinceCode:r.ZP.string(),districtCode:r.ZP.string(),wardCode:r.ZP.string(),province:r.ZP.string(),district:r.ZP.string(),ward:r.ZP.string(),address:r.ZP.string().optional()});r.ZP.object({code:r.ZP.string(),name:r.ZP.string(),name_en:r.ZP.string(),full_name:r.ZP.string(),full_name_en:r.ZP.string(),code_name:r.ZP.string()});let n=r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),address_id:r.ZP.string(),type_id:r.ZP.number(),cap:r.ZP.number(),created_at:r.ZP.string(),updated_at:r.ZP.string(),address:s,manager:r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),address:r.ZP.string().nullable()}),type:r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),for:r.ZP.number()}),detail:r.ZP.null()}),i=r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),desc:r.ZP.string(),created_at:r.ZP.string(),updated_at:r.ZP.string()}),d=r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),email:r.ZP.string(),email_verified_at:r.ZP.string().nullable(),created_at:r.ZP.number().nullable(),updated_at:r.ZP.number().nullable(),phone:r.ZP.string().nullable(),dob:r.ZP.date().nullable(),username:r.ZP.string(),address:s,role_id:r.ZP.number(),wp_id:r.ZP.number().nullable(),img_id:r.ZP.string().nullable(),role:i,work_plate:n.nullable(),img:r.ZP.string().nullable()}),o=r.ZP.object({id:r.ZP.number(),created_at:r.ZP.string(),updated_at:r.ZP.string(),order_id:r.ZP.number(),name:r.ZP.string(),mass:r.ZP.number(),desc:r.ZP.string(),image_link:r.ZP.string().nullable()}),l=r.ZP.object({id:r.ZP.number(),sender_name:r.ZP.string(),sender_phone:r.ZP.string(),receiver_name:r.ZP.string(),receiver_phone:r.ZP.string(),created_at:r.ZP.number(),updated_at:r.ZP.number(),vehicle_id:r.ZP.number().nullable(),type_id:r.ZP.number(),status_id:r.ZP.number(),mass:r.ZP.number(),sender_address:s,receiver_address:s,type:r.ZP.object({id:r.ZP.number(),name:r.ZP.string(),for:r.ZP.number().optional()}),notifications:r.ZP.array(r.ZP.object({id:r.ZP.number(),order_id:r.ZP.number(),from_id:r.ZP.number(),to_id:r.ZP.number(),status_id:r.ZP.number(),description:r.ZP.string(),created_at:r.ZP.string(),updated_at:r.ZP.string(),from_address:s,to_address:s})),details:r.ZP.array(o),created_by:r.ZP.object({id:r.ZP.number(),name:r.ZP.string()})});r.ZP.object({success:r.ZP.boolean(),data:r.ZP.object({total:r.ZP.number()})})},23698:(e,t,a)=>{a.d(t,{QR:()=>n});var r=a(29709),s=a(37202);r.ZP.object({success:r.ZP.boolean(),data:r.ZP.object({total:r.ZP.number(),currentPage:r.ZP.number(),pageSize:r.ZP.number(),data:r.ZP.array(s.Kn)}),message:r.ZP.string()}),r.ZP.object({success:r.ZP.boolean(),data:r.ZP.array(s.Kn),message:r.ZP.string()}),r.ZP.object({success:r.ZP.boolean(),data:s.Kn,message:r.ZP.string()});let n=r.ZP.object({name:r.ZP.string(),address_id:r.ZP.string(),address:r.ZP.string(),type_id:r.ZP.number().optional(),cap:r.ZP.coerce.number()})},70261:(e,t,a)=>{a.d(t,{y:()=>s});var r=a(69304);let s={getProvince:()=>r.ZP.get("api/address/provinces"),getDistrict:e=>r.ZP.get(`api/address/districts?code=${e}`,{cache:"force-cache"}),getWard:e=>r.ZP.get(`api/address/wards?code=${e}`,{cache:"force-cache"})}},85033:(e,t,a)=>{a.d(t,{ZJ:()=>r,qw:()=>c}),a(25036);var r,s=a(97720),n=a(20977),i=a(45332),d=a(61306),o=a(98462),l=a(74811);s.JZ9,s.JZ9,n.Jwp,d.zJl,d.zJl,s.X3C,d.zJl,d.zJl,l.la$,d.zJl,d.zJl,o.HwV,o.cFG,i.Nt_,o.HwV,d.zJl,i.bhi,i.qS3;let c={Warehouse:1,Transaction:2,Transshipment:3};!function(e){e.Waiting="waiting",e.Receiving="receiving",e.History="history",e.Leave="leave",e.All="all"}(r||(r={}))},69304:(e,t,a)=>{a.d(t,{oo:()=>i,ZP:()=>P});var r=a(27928);a(85603),a(23222),a(9327);let s=e=>e.startsWith("/")?e.slice(1):e;var n=a(867);class i extends Error{constructor({status:e,payload:t}){super("Http Error"),this.status=e,this.payload=t}}class d extends i{constructor({status:e,payload:t}){super({status:e,payload:t}),this.status=e,this.payload=t}}let o=()=>!1,l=null,c=async(e,t,a)=>{let c;a?.body instanceof FormData?c=a.body:a?.body&&(c=JSON.stringify(a.body));let P=c instanceof FormData?{}:{"Content-Type":"application/json"};if(o()){let e=localStorage.getItem("token");e&&(P.Authorization=`Bearer ${e}`)}let Z=a?.baseUrl===void 0?r.Z.NEXT_PUBLIC_API_ENDPOINT:a.baseUrl,u=t.startsWith("/")?`${Z}${t}`:`${Z}/${t}`,g=await fetch(u,{...a,headers:{...P,...a?.headers},body:c,method:e}),m=await g.json(),p={status:g.status,payload:m};if(!g.ok){if(422===g.status)throw new d(p);if(401===g.status){if(o()){if(!l){l=fetch("/api/auth/logout",{method:"POST",body:JSON.stringify({force:!0}),headers:{...P}});try{await l}catch(e){}finally{localStorage.removeItem("token"),l=null,location.href="/login"}}}else{let e=a?.headers?.Authorization.split("Bearer ")[1];(0,n.redirect)(`/logout?token=${e}`)}}else if(403===g.status)console.log("Forbidden error"),(0,n.redirect)("/");else throw new i(p)}if(o()){if("api/users/login"===s(t)){let{token:e}=m.data;localStorage.setItem("token",e)}else"api/auth/logout"===s(t)&&localStorage.removeItem("token")}return p},P={get:(e,t)=>c("GET",e,t),post:(e,t,a)=>c("POST",e,{...a,body:t}),put:(e,t,a)=>c("PUT",e,{...a,body:t}),delete:(e,t)=>c("DELETE",e,{...t})}}};