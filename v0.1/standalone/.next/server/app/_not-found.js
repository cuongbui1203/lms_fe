(()=>{var e={};e.id=9165,e.ids=[9165],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6724:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>_,tree:()=>u});var s=r(50482),n=r(69108),o=r(62563),i=r.n(o),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,37)),"D:\\lap_trinh\\lms_fe_release\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],c=[],d="/_not-found",p={require:r,loadChunk:()=>Promise.resolve()},_=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7193:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},93336:(e,t,r)=>{Promise.resolve().then(r.bind(r,69697)),Promise.resolve().then(r.bind(r,12772)),Promise.resolve().then(r.bind(r,77535))},12772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,useAppContext:()=>i});var s=r(95344),n=r(3729);let o=(0,n.createContext)({user:null,setUser:()=>{},isAuthenticated:!1}),i=()=>(0,n.useContext)(o);function a({children:e}){let[t,r]=(0,n.useState)(null),i=(0,n.useCallback)(e=>{r(e),localStorage.setItem("user",JSON.stringify(e))},[r]);return(0,n.useEffect)(()=>{let e=localStorage.getItem("user");r(e?JSON.parse(e):null)},[r]),s.jsx(o.Provider,{value:{user:t,setUser:i,isAuthenticated:!!t},children:e})}},77535:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(3729);function n(){return(0,s.useEffect)(()=>{r(42525)},[]),null}},37:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,metadata:()=>h});var s=r(25036),n=r(3480),o=r.n(n),i=r(86843);let a=(0,i.createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\components\bootstrap-client.tsx`),{__esModule:l,$$typeof:u}=a,c=a.default;var d=r(27928);let p=(0,i.createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\app\app-provider.tsx`),{__esModule:_,$$typeof:P}=p,x=p.default;(0,i.createProxy)(String.raw`D:\lap_trinh\lms_fe_release\src\app\app-provider.tsx#useAppContext`);var m=r(23222);r(5023),r(47453),r(97001);let h={title:d.Z.NEXT_PUBLIC_COMPANY_NAME||"Next.js App",description:d.Z.NEXT_PUBLIC_COMPANY_DESCRIPTION};async function f({children:e}){return s.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:(0,s.jsxs)("body",{className:`${o().className} antialiased`,children:[s.jsx(x,{children:e}),s.jsx(m.Ix,{}),s.jsx(c,{})]})})}},27928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(82196);let n=s.z.object({NEXT_PUBLIC_COMPANY_NAME:s.z.string(),NEXT_PUBLIC_API_ENDPOINT:s.z.string(),NEXT_PUBLIC_COMPANY_DESCRIPTION:s.z.string()}).safeParse({NEXT_PUBLIC_COMPANY_NAME:"Giao hang GTK",NEXT_PUBLIC_API_ENDPOINT:"http://localhost:8000",NEXT_PUBLIC_COMPANY_DESCRIPTION:"Company Description"});if(!n.success)throw console.error(n.error.issues),Error("C\xe1c gi\xe1 trị khai b\xe1o trong file .env kh\xf4ng hợp lệ");let o=n.data},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,4595,5996],()=>r(6724));module.exports=s})();