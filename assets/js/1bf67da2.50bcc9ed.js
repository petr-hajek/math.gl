"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[309],{2584:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(5893),t=r(1151);const s={},o="Matrix4",c={id:"modules/core/api-reference/matrix4",title:"Matrix4",description:"A 4x4 matrix. Any arguments to Matrix4 methods can be plain JavaScript arrays or other math.gl objects.",source:"@site/../docs/modules/core/api-reference/matrix4.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/matrix4",permalink:"/math.gl/docs/modules/core/api-reference/matrix4",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/website/../docs/modules/core/api-reference/matrix4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix3",permalink:"/math.gl/docs/modules/core/api-reference/matrix3"},next:{title:"Pose",permalink:"/math.gl/docs/modules/core/api-reference/pose"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>constructor()</code>",id:"constructor",level:5},{value:"<code>identity(): this</code>",id:"identity-this",level:5},{value:"<code>set(...number): this</code>",id:"setnumber-this",level:5},{value:"<code>fromQuaternion(quaternion: Quaternion): this</code>",id:"fromquaternionquaternion-quaternion-this",level:5},{value:"<code>frustum(options: {left: number, right: number, bottom: number, top: number, near: number, far: number}): this</code>",id:"frustumoptions-left-number-right-number-bottom-number-top-number-near-number-far-number-this",level:5},{value:"<code>lookAt(options?: {eye: number, center: number, up: number}): this</code>",id:"lookatoptions-eye-number-center-number-up-number-this",level:5},{value:"<code>ortho(options: {left: number, right: number, bottom: number, top: number, near?: number, far: number}): this</code>",id:"orthooptions-left-number-right-number-bottom-number-top-number-near-number-far-number-this",level:5},{value:"<code>orthographic()</code>",id:"orthographic",level:5},{value:"<code>perspective()</code>",id:"perspective",level:5},{value:"<code>determinant(): number</code>",id:"determinant-number",level:5},{value:"<code>transpose(): this</code>",id:"transpose-this",level:5},{value:"<code>invert(): this</code>",id:"invert-this",level:5},{value:"<code>multiplyLeft(matrix: number[16]): this</code>",id:"multiplyleftmatrix-number16-this",level:5},{value:"<code>multiplyRight(matrix: number[16]): this</code>",id:"multiplyrightmatrix-number16-this",level:5},{value:"<code>rotateX(radians: number): this</code>",id:"rotatexradians-number-this",level:5},{value:"<code>rotateY(radians: number): this</code>",id:"rotateyradians-number-this",level:5},{value:"<code>rotateZ(radians: number): this</code>",id:"rotatezradians-number-this",level:5},{value:"<code>rotateXYZ(angles: [rx: number, ry: number, rz: </code>number]): this",id:"rotatexyzangles-rx-number-ry-number-rz-number-this",level:5},{value:"<code>rotateAxis(radians: number, axis: number[3]): this</code>",id:"rotateaxisradians-number-axis-number3-this",level:5},{value:"<code>scale(factor: number | number[3]): this</code>",id:"scalefactor-number--number3-this",level:5},{value:"<code>translate(scale: number[3]): this</code>",id:"translatescale-number3-this",level:5},{value:"Decomposition",id:"decomposition",level:4},{value:"<code>getRotation(result?: number[16]) : number[16]</code>",id:"getrotationresult-number16--number16",level:5},{value:"<code>getRotationMatrix3(result?: number[9]) : number[9]</code>",id:"getrotationmatrix3result-number9--number9",level:5},{value:"<code>getTranslation(result?: number[3]) : number[3]</code>",id:"gettranslationresult-number3--number3",level:5},{value:"<code>getScale(result?: number[3]) : number[3]</code>",id:"getscaleresult-number3--number3",level:5},{value:"Point Transformations",id:"point-transformations",level:4},{value:"<code>transformAsPoint(vector : number[4]) : number[4]</code>",id:"transformaspointvector--number4--number4",level:5},{value:"<code>transformAsVector(vector : number[4]) : number[4]</code>",id:"transformasvectorvector--number4--number4",level:5},{value:"Remarks",id:"remarks",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"matrix4",children:"Matrix4"}),"\n",(0,i.jsxs)(n.p,{children:["A 4x4 matrix. Any arguments to ",(0,i.jsx)(n.code,{children:"Matrix4"})," methods can be plain JavaScript arrays or other ",(0,i.jsx)(n.code,{children:"math.gl"})," objects."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {Matrix4} from `math.gl`;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Copy a matrix to a ",(0,i.jsx)(n.code,{children:"Matrix4"})," so that it can be manipulated (and mutated) with ",(0,i.jsx)(n.code,{children:"Matrix4"})," methods:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const IDENTITY = [1, 0, ..., 1];\nconst m = new Matrix4(IDENTITY).translate([1, 0, 0]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create a perspective projection matrix"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const projectionMatrix = new Matrix4().perspective({fov, aspect, near, far});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create an orthograhic projection matrix"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js"})}),"\n",(0,i.jsx)(n.p,{children:"Invert a matrix"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const inverse = matrix.invert();\n"})}),"\n",(0,i.jsx)(n.p,{children:"Transform a vector as a point (including translations)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const transform = new Matrix4();\nconst vector2 = transform.transformPoint([0, 0]);\nconst vector3 = transform.transformPoint([0, 1, 2]);\nconst vector4 = transform.transformPoint([0, 1, 2, 1]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Transform a vector as a direction (NOT including translations)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const transform = new Matrix4();\nconst vector2 = transform.transformDirection([0, 0]);\nconst vector3 = transform.transformDirection([0, 1, 2]);\nconst vector4 = transform.transformDirection([0, 1, 2, 1]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"class Matrix4 extends"})," ",(0,i.jsx)(n.a,{href:"/docs/modules/core/api-reference/matrix",children:(0,i.jsx)(n.code,{children:"Matrix"})})," ",(0,i.jsx)(n.code,{children:"extends"})," ",(0,i.jsx)(n.a,{href:"/docs/modules/core/api-reference/math-array",children:(0,i.jsx)(n.code,{children:"MathArray"})})," ",(0,i.jsx)(n.code,{children:"extends"})," ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",children:(0,i.jsx)(n.code,{children:"Array"})}),"`"]}),"\n",(0,i.jsx)(n.p,{children:"Many basic methods are inherited:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.clone()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.copy(array)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.set(...args)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.fromArray(array, offset = 0)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.toString()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.toArray(array = [], offset = 0)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.equals(array)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.exactEquals(array)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.validate(array = this)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.check(array = this)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"matrix4.normalize()"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"Matrix4"})," is a subclass of the built in JavaScript ",(0,i.jsx)(n.code,{children:"Array"})," it can be used directly as a parameter to any function expecting an ",(0,i.jsx)(n.code,{children:"Array"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h5,{id:"constructor",children:(0,i.jsx)(n.code,{children:"constructor()"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates an empty ",(0,i.jsx)(n.code,{children:"Matrix4"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"new Matrix4()"})}),"\n",(0,i.jsx)(n.h5,{id:"identity-this",children:(0,i.jsx)(n.code,{children:"identity(): this"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the matrix to the multiplicative identity matrix."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.identity()"})}),"\n",(0,i.jsx)(n.h5,{id:"setnumber-this",children:(0,i.jsx)(n.code,{children:"set(...number): this"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the elements of the matrix."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)"})}),"\n",(0,i.jsx)(n.h5,{id:"fromquaternionquaternion-quaternion-this",children:(0,i.jsx)(n.code,{children:"fromQuaternion(quaternion: Quaternion): this"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the matrix to a transformation corresponding to the rotations represented by the given quaternion."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.fromQuaternion(quaternion)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"quaternion"})," (",(0,i.jsx)(n.code,{children:"Quaternion"}),") - the quaternion to create matrix from"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"frustumoptions-left-number-right-number-bottom-number-top-number-near-number-far-number-this",children:(0,i.jsx)(n.code,{children:"frustum(options: {left: number, right: number, bottom: number, top: number, near: number, far: number}): this"})}),"\n",(0,i.jsx)(n.p,{children:"Generates a frustum matrix with the given bounds. The frustum far plane can be infinite."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.frustum({left, right, bottom, top, near, far})"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"left"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Left bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"right"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Right bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bottom"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Bottom bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"top"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Top bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"near"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Near bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"far"})," (",(0,i.jsx)(n.code,{children:"number"}),"|",(0,i.jsx)(n.code,{children:"Infinity"}),") - Far bound of the frustum"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"lookatoptions-eye-number-center-number-up-number-this",children:(0,i.jsx)(n.code,{children:"lookAt(options?: {eye: number, center: number, up: number}): this"})}),"\n",(0,i.jsx)(n.p,{children:"Generates a look-at matrix with the given eye position, focal point, and up axis"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.lookAt({eye, center, up})"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eye"})," (",(0,i.jsx)(n.code,{children:"Vector3"}),"|",(0,i.jsx)(n.code,{children:"number[3]"}),") - Position of the viewer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"center"}),"=",(0,i.jsx)(n.code,{children:"[0, 0, 0]"})," (",(0,i.jsx)(n.code,{children:"Vector3"}),"|",(0,i.jsx)(n.code,{children:"number[3]"}),") vec3 Point the viewer is looking at"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"up"}),"=",(0,i.jsx)(n.code,{children:"[0, 1, 0]"})," (",(0,i.jsx)(n.code,{children:"Vector3"}),"|",(0,i.jsx)(n.code,{children:"number[3]"}),") vec3 vec3 pointing up"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"orthooptions-left-number-right-number-bottom-number-top-number-near-number-far-number-this",children:(0,i.jsx)(n.code,{children:"ortho(options: {left: number, right: number, bottom: number, top: number, near?: number, far: number}): this"})}),"\n",(0,i.jsx)(n.p,{children:"Generates a orthogonal projection matrix with the given bounds"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.ortho({left, right, bottom, top, near = 0.1, far = 500})"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"left"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Left bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"right"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Right bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bottom"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Bottom bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"top"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Top bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"near"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Near bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"far"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Far bound of the frustum"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"orthographic",children:(0,i.jsx)(n.code,{children:"orthographic()"})}),"\n",(0,i.jsxs)(n.p,{children:["Generates an orthogonal projection matrix with the same parameters\nas a perspective matrix (plus ",(0,i.jsx)(n.code,{children:"focalDistance"}),")."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Matrix4.orthographic({fovy, aspect, focalDistance, near, far})"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fovy"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Vertical field of view in radians"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"aspect"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Aspect ratio. typically viewport width/height"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"focalDistance"})," (",(0,i.jsx)(n.code,{children:"number"}),") - selects which plane in the perspective view frustum should be used to calculate the size of the orthographic view box."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"near"}),"=",(0,i.jsx)(n.code,{children:"0.1"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Near bound of the frustum"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"far"}),"=",(0,i.jsx)(n.code,{children:"500"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Far bound of the frustum"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In applications it is not unusual to want to offer both perspective and orthographic views and this method is supplied to make this as simple as possible."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"perspective",children:(0,i.jsx)(n.code,{children:"perspective()"})}),"\n",(0,i.jsx)(n.p,{children:"Generates a perspective projection matrix with the given bounds. The frustum far plane can be infinite."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.perspective({ fovy = 45 * Math.PI - / 180, aspect = 1, near = 0.1, far = 500 })"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fovy"}),"=",(0,i.jsx)(n.code,{children:"45"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Vertical field of view in radians (default is 45 degrees specified in radians)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aspect"}),"=",(0,i.jsx)(n.code,{children:"1"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Aspect ratio. typically viewport width/height"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"near"}),"=",(0,i.jsx)(n.code,{children:"0.1"})," (",(0,i.jsx)(n.code,{children:"number"}),") - Near bound of the frustum"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"far"}),"=",(0,i.jsx)(n.code,{children:"500"})," (",(0,i.jsx)(n.code,{children:"number"}),"|",(0,i.jsx)(n.code,{children:"Infinity"}),") - Far bound of the frustum"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"determinant-number",children:(0,i.jsx)(n.code,{children:"determinant(): number"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the determinant of the matrix (does not modify the matrix)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"const determinant = matrix4.determinant()"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns (",(0,i.jsx)(n.code,{children:"number"}),") - the determinant"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the determinant is zero, the matrix is not invertible."}),"\n",(0,i.jsx)(n.li,{children:"Determinant calculation is somewhat expensive."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"transpose-this",children:(0,i.jsx)(n.code,{children:"transpose(): this"})}),"\n",(0,i.jsx)(n.p,{children:"Sets this matrix to its transpose matrix."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.transpose()"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The transpose matrix mirrors the original matrix elements in the diagonal."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"invert-this",children:(0,i.jsx)(n.code,{children:"invert(): this"})}),"\n",(0,i.jsx)(n.p,{children:"Sets this matrix to its inverse matrix."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.invert()"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The inverse matrix mirrors the original matrix elements in the diagonal."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"multiplyleftmatrix-number16-this",children:(0,i.jsx)(n.code,{children:"multiplyLeft(matrix: number[16]): this"})}),"\n",(0,i.jsx)(n.p,{children:"Multiplies in another matrix from the left"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.multiplyLeft(matrix4)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When using ",(0,i.jsx)(n.code,{children:"Matrix4"})," to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course)."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"multiplyrightmatrix-number16-this",children:(0,i.jsx)(n.code,{children:"multiplyRight(matrix: number[16]): this"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.multiplyRight(matrix4)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When using ",(0,i.jsx)(n.code,{children:"Matrix4"})," to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course)."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"rotatexradians-number-this",children:(0,i.jsx)(n.code,{children:"rotateX(radians: number): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a rotation by the given angle around the X axis. Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.rotateX(radians)"})}),"\n",(0,i.jsx)(n.h5,{id:"rotateyradians-number-this",children:(0,i.jsx)(n.code,{children:"rotateY(radians: number): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a rotation by the given angle around the Y axis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"rotateY(radians)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"rotatezradians-number-this",children:(0,i.jsx)(n.code,{children:"rotateZ(radians: number): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a rotation by the given angle around the Z axis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.rotateZ(radians)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n"]}),"\n",(0,i.jsxs)(n.h5,{id:"rotatexyzangles-rx-number-ry-number-rz-number-this",children:[(0,i.jsx)(n.code,{children:"rotateXYZ(angles: [rx: number, ry: number, rz: "}),"number]): this"]}),"\n",(0,i.jsx)(n.p,{children:"Adds successive rotations by the given angles around the X, Y and Z axis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"rotateXYZ([rx, ry, rz])"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"rotateaxisradians-number-axis-number3-this",children:(0,i.jsx)(n.code,{children:"rotateAxis(radians: number, axis: number[3]): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds successive rotations by the given angles around the X, Y and Z axis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"rotateAxis(radians, axis)"})}),"\n",(0,i.jsx)(n.p,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n",(0,i.jsx)(n.h5,{id:"scalefactor-number--number3-this",children:(0,i.jsx)(n.code,{children:"scale(factor: number | number[3]): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a scaling transform, each axis can be scaled independently."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.scale(factor)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"factor"})," (number) - scale factor to be applied to each axis."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.scale([x, y, z])"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," (number) - scale factor to be multiplied into x component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," (number) - scale factor to be multiplied into y component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"z"})," (number) - scale factor to be multiplied into z component"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"During vector transformation all coordinates will be multiplied with the given factors."}),"\n",(0,i.jsxs)(n.li,{children:["Scale with ",(0,i.jsx)(n.code,{children:"-1"})," will flip the coordinate system in that axis."]}),"\n",(0,i.jsxs)(n.li,{children:["Scale with ",(0,i.jsx)(n.code,{children:"0"})," will drop that component."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"translatescale-number3-this",children:(0,i.jsx)(n.code,{children:"translate(scale: number[3]): this"})}),"\n",(0,i.jsx)(n.p,{children:"Adds a translation to the matrix."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"matrix4.translate([x, y, z])"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," (number) - translation to be added to the x component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," (number) - translation to be added to the y component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"z"})," (number) - translation to be added to the z component"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Equivalent to right multiplying the new transform into the matrix but more performant."}),"\n",(0,i.jsx)(n.p,{children:"During vector transformation the given translation values are added to each component of the vector being transformed."}),"\n",(0,i.jsx)(n.h4,{id:"decomposition",children:"Decomposition"}),"\n",(0,i.jsx)(n.h5,{id:"getrotationresult-number16--number16",children:(0,i.jsx)(n.code,{children:"getRotation(result?: number[16]) : number[16]"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a 4x4 rotation matrix."}),"\n",(0,i.jsx)(n.h5,{id:"getrotationmatrix3result-number9--number9",children:(0,i.jsx)(n.code,{children:"getRotationMatrix3(result?: number[9]) : number[9]"})}),"\n",(0,i.jsx)(n.p,{children:"Returns a 3x3 rotation matrix."}),"\n",(0,i.jsx)(n.h5,{id:"gettranslationresult-number3--number3",children:(0,i.jsx)(n.code,{children:"getTranslation(result?: number[3]) : number[3]"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the 3-element translation vector component of the affine transform described by the matrix."}),"\n",(0,i.jsx)(n.p,{children:"For performance, an existing vector can be provided, if not a new vector will be returned."}),"\n",(0,i.jsx)(n.h5,{id:"getscaleresult-number3--number3",children:(0,i.jsx)(n.code,{children:"getScale(result?: number[3]) : number[3]"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the 3-element scale vector component of the affine transform described by the matrix."}),"\n",(0,i.jsx)(n.p,{children:"For performance, an existing vector can be provided, if not a new vector will be returned."}),"\n",(0,i.jsx)(n.h4,{id:"point-transformations",children:"Point Transformations"}),"\n",(0,i.jsx)(n.h5,{id:"transformaspointvector--number4--number4",children:(0,i.jsx)(n.code,{children:"transformAsPoint(vector : number[4]) : number[4]"})}),"\n",(0,i.jsxs)(n.p,{children:['Transforms any 2, 3 or 4 element vector as a "point" by multiplying it (from the right) with this matrix. ',(0,i.jsx)(n.code,{children:"Point"})," here means that the returned vector will include any translations in this matrix."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"const vector = matrix4.transformPoint(vector, out=)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vector"})," (",(0,i.jsx)(n.code,{children:"Array"}),"|",(0,i.jsx)(n.code,{children:"Vector2"}),"|",(0,i.jsx)(n.code,{children:"Vector3"}),"|",(0,i.jsx)(n.code,{children:"Vector4"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"out"})," - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.\nReturns ",(0,i.jsx)(n.code,{children:"out"}),", or a newly minted ",(0,i.jsx)(n.code,{children:"Vector2"}),", ",(0,i.jsx)(n.code,{children:"Vector3"})," or ",(0,i.jsx)(n.code,{children:"Vector4"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"vector"})," is specified in homogeneous coordinates, ",(0,i.jsx)(n.code,{children:"w"})," coordinate must NOT be ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"vector"})," is specified in homogeneous coordinates the returned vector will be ",(0,i.jsx)(n.code,{children:"w"})," adjusted, (i.e. ",(0,i.jsx)(n.code,{children:"w"})," coordinate will be ",(0,i.jsx)(n.code,{children:"1"}),", even if the supplied vector was not normalized)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"transformasvectorvector--number4--number4",children:(0,i.jsx)(n.code,{children:"transformAsVector(vector : number[4]) : number[4]"})}),"\n",(0,i.jsx)(n.p,{children:"Transforms any 2, 3 or 4 element vector interpreted as a direction (i.e. all vectors are based in the origin so the transformation not pick up any translations from the matrix)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"const vector = matrix4.transformDirection(vector, out)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"vector"})," is specified in homogeneous coordinates, ",(0,i.jsx)(n.code,{children:"w"})," coordinate must be ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'All transforms are effectively "right multiplied" onto the matrix (meaning that during transform they will be applied in opposite order).'}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Matrix4"})," is stored internally in column major format (per WebGL conventions). This only matters when you read out the matrix to use it with other software."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);