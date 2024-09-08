"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9727],{4968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const r={},s="Floating Point",a={id:"developer-guide/math/floating-point",title:"Floating Point",description:"This article is a work in progress.",source:"@site/../docs/developer-guide/math/floating-point.md",sourceDirName:"developer-guide/math",slug:"/developer-guide/math/floating-point",permalink:"/math.gl/docs/developer-guide/math/floating-point",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/docs/../docs/developer-guide/math/floating-point.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"3D Rotations",permalink:"/math.gl/docs/developer-guide/math/rotations"},next:{title:"Overview",permalink:"/math.gl/docs/modules/types/"}},l={},c=[{value:"Precision",id:"precision",level:2},{value:"About Comparisons",id:"about-comparisons",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"floating-point",children:"Floating Point"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This article is a work in progress."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"precision",children:"Precision"}),"\n",(0,o.jsx)(t.h3,{id:"about-comparisons",children:"About Comparisons"}),"\n",(0,o.jsxs)(t.p,{children:["Due to small rounding errors, exact equality is often not a reliable way to compare floating point numbers. Therefore the default ",(0,o.jsx)(t.code,{children:"equals"})," operation checks that two numbers are within a small delta."]}),"\n",(0,o.jsxs)(t.p,{children:["There is also an ",(0,o.jsx)(t.code,{children:"exactEquals"})," method that compares the floating point values directly."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Floating point comparison implementation in gl-matrix and alternatives (links)"}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://floating-point-gui.de/errors/comparison/",children:"Comparisons"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);