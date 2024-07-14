"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8844],{1883:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(5893),s=i(1151);const r={},l="Overview",d={id:"modules/culling/README",title:"Overview",description:"The @math.gl/culling module provides primitives for implementing frustum culling:",source:"@site/../docs/modules/culling/README.md",sourceDirName:"modules/culling",slug:"/modules/culling/",permalink:"/math.gl/docs/modules/culling/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/website/../docs/modules/culling/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector4",permalink:"/math.gl/docs/modules/core/api-reference/vector4"},next:{title:"AxisAlignedBoundingBox",permalink:"/math.gl/docs/modules/culling/api-reference/axis-aligned-bounding-box"}},o={},c=[{value:"Classes",id:"classes",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Framework Independence",id:"framework-independence",level:2},{value:"History",id:"history",level:2},{value:"Attribution",id:"attribution",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@math.gl/culling"})," module provides primitives for implementing frustum culling:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bounding boxes and intersection logic"}),"\n",(0,t.jsx)(n.li,{children:'Fully "transformable" primitives (i.e. oriented bounding boxes as opposed to just axis-aligned bounding boxes).'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The culling module does not attempt to be a general "physics-based" collision detection library (e.g. it does not handle time-interpolated intersections like a physics library would).'}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CullingVolume"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BoundingSphere"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OrientedBoundingBox"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Plane"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create bounding volumes for your objects/geometries, and create ",(0,t.jsx)(n.code,{children:"BoundingSphere"})," or ",(0,t.jsx)(n.code,{children:"OrientedBoundingBox"})," instances."]}),"\n",(0,t.jsxs)(n.li,{children:["Extract your camera view frustum parameters and create a ",(0,t.jsx)(n.code,{children:"PerspectiveFrustum"})," instance."]}),"\n",(0,t.jsx)(n.li,{children:"You can now test your bounding volumes to see if the intersect the view frustum."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"framework-independence",children:"Framework Independence"}),"\n",(0,t.jsx)(n.p,{children:"Like all non-core math.gl modules, this library can be used without the math.gl core classes."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Any input vectors can be supplied as length 3 JavaScript ",(0,t.jsx)(n.code,{children:"Array"})," instances."]}),"\n",(0,t.jsxs)(n.li,{children:["Any result vectors can be treated as length 3 JavaScript ",(0,t.jsx)(n.code,{children:"Array"})," instances (they may be math.gl ",(0,t.jsx)(n.code,{children:"Vector3"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["The core math.gl classes inherit from JavaScript ",(0,t.jsx)(n.code,{children:"Array"})," and can be used directly as input."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"history",children:"History"}),"\n",(0,t.jsx)(n.p,{children:"This library was initially developed as a fork of the Cesium math library as part of a collaboration between Cesium and Uber to provide framework-independent, portable support for the 3D tiles specification."}),"\n",(0,t.jsx)(n.h2,{id:"attribution",children:"Attribution"}),"\n",(0,t.jsxs)(n.p,{children:["This code in was initially forked from ",(0,t.jsx)(n.a,{href:"https://github.com/AnalyticalGraphicsInc/cesium",children:"Cesium"})," under the Apache 2 License."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);