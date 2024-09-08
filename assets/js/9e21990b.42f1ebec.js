"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9094],{8276:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var t=r(4848),o=r(8453);const i={},s="Matrix",c={id:"modules/core/api-reference/matrix",title:"Matrix",description:"Matrix is a base class for Matrix3 and Matrix4, providing common methods to those classes.",source:"@site/../docs/modules/core/api-reference/matrix.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/matrix",permalink:"/math.gl/docs/modules/core/api-reference/matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/docs/../docs/modules/core/api-reference/matrix.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MathArray",permalink:"/math.gl/docs/modules/core/api-reference/math-array"},next:{title:"Matrix3",permalink:"/math.gl/docs/modules/core/api-reference/matrix3"}},l={},m=[{value:"Methods",id:"methods",level:2},{value:"toString()",id:"tostring",level:3},{value:"setElement(): this",id:"setelement-this",level:3},{value:"getElement(): number",id:"getelement-number",level:3},{value:"getColumn(columnIndex: number [ , result: number[3]]): number[3]",id:"getcolumncolumnindex-number---result-number3-number3",level:3},{value:"setColumn(columnIndex: number, columnVector: number[3]): Matrix",id:"setcolumncolumnindex-number-columnvector-number3-matrix",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"matrix",children:"Matrix"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Matrix"})," is a base class for ",(0,t.jsx)(n.a,{href:"./docs/modules/core/api-reference/vector3",children:(0,t.jsx)(n.code,{children:"Matrix3"})})," and ",(0,t.jsx)(n.a,{href:"./docs/modules/core/api-reference/vector4",children:(0,t.jsx)(n.code,{children:"Matrix4"})}),", providing common methods to those classes."]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"tostring",children:"toString()"}),"\n",(0,t.jsx)(n.p,{children:"Returns a string representation of the matrix"}),"\n",(0,t.jsx)(n.h3,{id:"setelement-this",children:"setElement(): this"}),"\n",(0,t.jsxs)(n.p,{children:['Sets the element at "conceptual position" ',(0,t.jsx)(n.code,{children:"M[i][j]"}),", row major indices by default"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"matrix3.set(i, j, value, columnMajor = false)"})}),"\n",(0,t.jsx)(n.h3,{id:"getelement-number",children:"getElement(): number"}),"\n",(0,t.jsxs)(n.p,{children:['Gets the element at "conceptual position" ',(0,t.jsx)(n.code,{children:"M[i][j]"}),", row major indices by default"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"matrix3.get(i, j, columnMajor = false)"})}),"\n",(0,t.jsx)(n.h3,{id:"getcolumncolumnindex-number---result-number3-number3",children:"getColumn(columnIndex: number [ , result: number[3]]): number[3]"}),"\n",(0,t.jsx)(n.p,{children:"Extracts a column from the matrix"}),"\n",(0,t.jsx)(n.h3,{id:"setcolumncolumnindex-number-columnvector-number3-matrix",children:"setColumn(columnIndex: number, columnVector: number[3]): Matrix"}),"\n",(0,t.jsx)(n.p,{children:"Copies a column into the matrix"})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(6540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);