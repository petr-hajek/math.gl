"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8256],{6202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var i=n(4848),r=n(8453);const d={},o="Debugging",s={id:"developer-guide/debugging",title:"Debugging",description:"This article is a work in progress.",source:"@site/../docs/developer-guide/debugging.md",sourceDirName:"developer-guide",slug:"/developer-guide/debugging",permalink:"/math.gl/docs/developer-guide/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/docs/../docs/developer-guide/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Get Started",permalink:"/math.gl/docs/developer-guide/get-started"},next:{title:"Performance",permalink:"/math.gl/docs/developer-guide/performance"}},c={},l=[{value:"About Validation and Debug Support",id:"about-validation-and-debug-support",level:2},{value:"About &quot;Printing&quot;",id:"about-printing",level:2}];function a(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"debugging",children:"Debugging"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This article is a work in progress."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"about-validation-and-debug-support",children:"About Validation and Debug Support"}),"\n",(0,i.jsx)(t.p,{children:"TBA:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Turning on an off"}),"\n",(0,i.jsx)(t.li,{children:"performance implications"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"about-printing",children:'About "Printing"'}),"\n",(0,i.jsx)(t.p,{children:"Generating a string representation of a math.gl object with desired precision and formatting."}),"\n",(0,i.jsxs)(t.p,{children:["Every math.gl object has a ",(0,i.jsx)(t.code,{children:"formatString({...opts})"})," method that allows you to stringify an object with special options set. Each object also defines the built-in JavaScript function ",(0,i.jsx)(t.code,{children:"toString()"})," to call ",(0,i.jsx)(t.code,{children:"formatString()"})," with the global printing options in the math.gl ",(0,i.jsx)(t.code,{children:"config"})," object."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"toString"})," and ",(0,i.jsx)(t.code,{children:"formatString"})," methods print with controllable precision"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Print Parameter"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"printPrecision"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"4"})}),(0,i.jsx)(t.td,{children:"Number of significant digits"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"printTypes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsxs)(t.td,{children:["Prints the name of the math.gl type (e.g. ",(0,i.jsx)(t.code,{children:"Vector3[...]"})," instead of ",(0,i.jsx)(t.code,{children:"[...]"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"printDegrees"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsxs)(t.td,{children:["Prints degrees instead of radians (e.g. for ",(0,i.jsx)(t.code,{children:"Euler"})," and ",(0,i.jsx)(t.code,{children:"SphericalCoordinates"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"printRowMajor"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsx)(t.td,{children:"Prints matrices as row major which makes them look more familiar instead of as column major (which is how they are stored internally for WebGL compatibility)."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const r={},d=i.createContext(r);function o(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);