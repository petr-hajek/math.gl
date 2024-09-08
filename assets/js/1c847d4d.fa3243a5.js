"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1286],{9462:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=r(4848),s=r(8453);const o={},d="BoundingSphere",t={id:"modules/culling/api-reference/bounding-sphere",title:"BoundingSphere",description:"A bounding sphere with a center and a radius.",source:"@site/../docs/modules/culling/api-reference/bounding-sphere.md",sourceDirName:"modules/culling/api-reference",slug:"/modules/culling/api-reference/bounding-sphere",permalink:"/math.gl/docs/modules/culling/api-reference/bounding-sphere",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/docs/../docs/modules/culling/api-reference/bounding-sphere.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"AxisAlignedBoundingBox",permalink:"/math.gl/docs/modules/culling/api-reference/axis-aligned-bounding-box"},next:{title:"BoundingVolume (Interface)",permalink:"/math.gl/docs/modules/culling/api-reference/bounding-volume"}},h={},c=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Global Functions",id:"global-functions",level:2},{value:"<code>makeBoundingSphereFromPoints(positions : iterator, result? : </code>BoundingSphere) : BoundingSphere",id:"makeboundingspherefrompointspositions--iterator-result--boundingsphere--boundingsphere",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>center : Vector3</code>",id:"center--vector3",level:3},{value:"<code>radius : Number</code>",id:"radius--number",level:3},{value:"Members",id:"members",level:2},{value:"<code>constructor(center : Number[3], radius : Number)</code>",id:"constructorcenter--number3-radius--number",level:3},{value:"<code>fromCenterRadius(center : Number[3], radius : Number) : BoundingSphere</code>",id:"fromcenterradiuscenter--number3-radius--number--boundingsphere",level:3},{value:"<code>fromCornerPoints(corner : Number[3], oppositeCorner : Number[3], result? : </code>BoundingSphere) : BoundingSphere",id:"fromcornerpointscorner--number3-oppositecorner--number3-result--boundingsphere--boundingsphere",level:3},{value:"<code>fromBoundingSpheres(boundingSpheres : BoundingSphere[]) : BoundingSphere</code>",id:"fromboundingspheresboundingspheres--boundingsphere--boundingsphere",level:3},{value:"<code>clone()</code>",id:"clone",level:3},{value:"<code>equals(right : BoundingSphere) Boolean</code>",id:"equalsright--boundingsphere-boolean",level:3},{value:"<code>union(right : BoundingSphere) : BoundingSphere</code>",id:"unionright--boundingsphere--boundingsphere",level:3},{value:"<code>expand(point : Number[3]) : BoundingSphere</code>",id:"expandpoint--number3--boundingsphere",level:3},{value:"<code>intersectPlane(plane : Plane) : INTERSECTION</code>",id:"intersectplaneplane--plane--intersection",level:3},{value:"<code>transform(transform : Number[16]) : BoundingSphere</code>",id:"transformtransform--number16--boundingsphere",level:3},{value:"<code>distanceSquaredTo(point) : Number</code>",id:"distancesquaredtopoint--number",level:3},{value:"<code>transformWithoutScale(sphere, transform, result)</code>",id:"transformwithoutscalesphere-transform-result",level:3},{value:"<code>computePlaneDistances (sphere, position, direction, result)</code>",id:"computeplanedistances-sphere-position-direction-result",level:3},{value:"<code>projectTo2D(sphere, projection, result)</code>",id:"projectto2dsphere-projection-result",level:3},{value:"Attribution",id:"attribution",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"boundingsphere",children:"BoundingSphere"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bounding_sphere",children:"bounding sphere"})," with a center and a radius."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Create a bounding sphere around the unit cube"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {BoundingSphere} from '@math.gl/culling';\ncont sphere = new BoundingSphere().fromCornerPoints(\n  [-0.5, -0.5, -0.5],\n  [0.5, 0.5, 0.5]\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sort bounding spheres from back to front"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {BoundingSphere} from '@math.gl/culling';\nconst spheres = [new BoundingSphere(...), new BoundingSphere(...), ...];\nconst cameraPosWC = ...;\nspheres.sort(\n  (a, b) => b.distanceSquaredTo(b, cameraPosWC) - a.distanceSquaredTo(a.cameraPosWC)\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"class BoundingSphere implements"})," ",(0,i.jsx)(n.a,{href:"./bounding-volume",children:(0,i.jsx)(n.code,{children:"BoundingVolume"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"global-functions",children:"Global Functions"}),"\n",(0,i.jsxs)(n.h3,{id:"makeboundingspherefrompointspositions--iterator-result--boundingsphere--boundingsphere",children:[(0,i.jsx)(n.code,{children:"makeBoundingSphereFromPoints(positions : iterator, result? : "}),"BoundingSphere) : BoundingSphere"]}),"\n",(0,i.jsx)(n.p,{children:"Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points. The bounding sphere is computed by running two algorithms, a naive algorithm and Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"positions"})," An iterable (e.g. array) of points that the bounding sphere will enclose. Each point must have ",(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"}),", and ",(0,i.jsx)(n.code,{children:"z"})," properties."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"result"})," Optional object onto which to store the result."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The modified ",(0,i.jsx)(n.code,{children:"result"})," parameter or a new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance if one was not provided."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/",children:"Bounding Sphere computation article"})]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.h3,{id:"center--vector3",children:(0,i.jsx)(n.code,{children:"center : Vector3"})}),"\n",(0,i.jsx)(n.p,{children:"The center point of the sphere."}),"\n",(0,i.jsx)(n.h3,{id:"radius--number",children:(0,i.jsx)(n.code,{children:"radius : Number"})}),"\n",(0,i.jsx)(n.p,{children:"The radius of the sphere."}),"\n",(0,i.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,i.jsx)(n.h3,{id:"constructorcenter--number3-radius--number",children:(0,i.jsx)(n.code,{children:"constructor(center : Number[3], radius : Number)"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates a new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"center"}),"=",(0,i.jsx)(n.code,{children:"[0, 0, 0]"})," The center of the bounding sphere."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"radius"}),"=",(0,i.jsx)(n.code,{children:"0.0"})," The radius of the bounding sphere."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fromcenterradiuscenter--number3-radius--number--boundingsphere",children:(0,i.jsx)(n.code,{children:"fromCenterRadius(center : Number[3], radius : Number) : BoundingSphere"})}),"\n",(0,i.jsxs)(n.p,{children:["Sets the ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," from center and radius"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"center"}),"=",(0,i.jsx)(n.code,{children:"[0, 0, 0]"})," The center of the bounding sphere."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"radius"}),"=",(0,i.jsx)(n.code,{children:"0.0"})," The radius of the bounding sphere."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"fromcornerpointscorner--number3-oppositecorner--number3-result--boundingsphere--boundingsphere",children:[(0,i.jsx)(n.code,{children:"fromCornerPoints(corner : Number[3], oppositeCorner : Number[3], result? : "}),"BoundingSphere) : BoundingSphere"]}),"\n",(0,i.jsx)(n.p,{children:"Computes a bounding sphere from the two corner points of an axis-aligned bounding box. The sphere tighly and fully encompases the box."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"corner"})," The minimum height over the rectangle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"oppositeCorner"})," The maximum height over the rectangle."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fromboundingspheresboundingspheres--boundingsphere--boundingsphere",children:(0,i.jsx)(n.code,{children:"fromBoundingSpheres(boundingSpheres : BoundingSphere[]) : BoundingSphere"})}),"\n",(0,i.jsx)(n.p,{children:"Computes a tight-fitting bounding sphere enclosing the provided array of bounding spheres."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundingSpheres"})," The array of bounding spheres."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The modified ",(0,i.jsx)(n.code,{children:"result"})," parameter or a new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance if none was provided."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"clone",children:(0,i.jsx)(n.code,{children:"clone()"})}),"\n",(0,i.jsxs)(n.p,{children:["Duplicates a ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance."]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"equalsright--boundingsphere-boolean",children:(0,i.jsx)(n.code,{children:"equals(right : BoundingSphere) Boolean"})}),"\n",(0,i.jsxs)(n.p,{children:["Compares the provided ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," componentwise and returns ",(0,i.jsx)(n.code,{children:"true"})," if they are equal, ",(0,i.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"right"})," The second ",(0,i.jsx)(n.code,{children:"BoundingSphere"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"})," if left and right are equal, ",(0,i.jsx)(n.code,{children:"false"})," otherwise."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unionright--boundingsphere--boundingsphere",children:(0,i.jsx)(n.code,{children:"union(right : BoundingSphere) : BoundingSphere"})}),"\n",(0,i.jsxs)(n.p,{children:["Computes a bounding sphere that contains both the this and the ",(0,i.jsx)(n.code,{children:"right"})," bounding spheres."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"right"})," The second ",(0,i.jsx)(n.code,{children:"BoundingSphere"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"expandpoint--number3--boundingsphere",children:(0,i.jsx)(n.code,{children:"expand(point : Number[3]) : BoundingSphere"})}),"\n",(0,i.jsx)(n.p,{children:"Computes a bounding sphere by enlarging the provided sphere to contain the provided point."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"point"})," A point to enclose in a bounding sphere."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"intersectplaneplane--plane--intersection",children:(0,i.jsx)(n.code,{children:"intersectPlane(plane : Plane) : INTERSECTION"})}),"\n",(0,i.jsx)(n.p,{children:"Determines which side of a plane a sphere is located."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"plane"})," The plane to test against.\nReturns"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INTERSECTION.INSIDE"})," if the entire sphere is on the side of the plane the normal is pointing"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INTERSECTION.OUTSIDE"})," if the entire sphere is on the opposite side"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INTERSECTION.INTERSECTING"})," if the sphere intersects the plane."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"transformtransform--number16--boundingsphere",children:(0,i.jsx)(n.code,{children:"transform(transform : Number[16]) : BoundingSphere"})}),"\n",(0,i.jsx)(n.p,{children:"Applies a 4x4 affine transformation matrix to a bounding sphere."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"transform"})," The transformation matrix to apply to the bounding sphere."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"distancesquaredtopoint--number",children:(0,i.jsx)(n.code,{children:"distanceSquaredTo(point) : Number"})}),"\n",(0,i.jsx)(n.p,{children:"Computes the estimated distance squared from the closest point on a bounding sphere to a point."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"point"})," The point"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The estimated distance squared from the bounding sphere to the point."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"transformwithoutscalesphere-transform-result",children:(0,i.jsx)(n.code,{children:"transformWithoutScale(sphere, transform, result)"})}),"\n",(0,i.jsx)(n.p,{children:"Applies a 4x4 affine transformation matrix to a bounding sphere where there is no scale\nThe transformation matrix is not verified to have a uniform scale of 1.\nThis method is faster than computing the general bounding sphere transform using BoundingSphere.transform."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"BoundingSphere sphere The bounding sphere to apply the transformation to."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Matrix4 transform The transformation matrix to apply to the bounding sphere."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"})," Optional object onto which to store the result."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The modified ",(0,i.jsx)(n.code,{children:"result"})," parameter or a new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance if none was provided."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"@example\nvar modelMatrix = Transforms.eastNorthUpToFixedFrame(positionOnEllipsoid);\nvar boundingSphere = new BoundingSphere();\nvar newBoundingSphere = BoundingSphere.transformWithoutScale(boundingSphere, modelMatrix);"}),"\n",(0,i.jsx)(n.h3,{id:"computeplanedistances-sphere-position-direction-result",children:(0,i.jsx)(n.code,{children:"computePlaneDistances (sphere, position, direction, result)"})}),"\n",(0,i.jsx)(n.p,{children:"The distances calculated by the vector from the center of the bounding sphere to position projected onto direction plus/minus the radius of the bounding sphere."}),"\n",(0,i.jsx)(n.p,{children:"If you imagine the infinite number of planes with normal direction, this computes the smallest distance to the closest and farthest planes from position that intersect the bounding sphere."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BoundingSphere"})," ",(0,i.jsx)(n.code,{children:"sphere"})," The bounding sphere to calculate the distance to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Cartesian3"})," ",(0,i.jsx)(n.code,{children:"position"})," The position to calculate the distance from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Cartesian3"})," ",(0,i.jsx)(n.code,{children:"direction"})," The direction from position."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Interval"})," [result] A Interval to store the nearest and farthest distances."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"Interval"}),"- The nearest and farthest distances on the bounding sphere from position in direction."]}),"\n",(0,i.jsx)(n.h3,{id:"projectto2dsphere-projection-result",children:(0,i.jsx)(n.code,{children:"projectTo2D(sphere, projection, result)"})}),"\n",(0,i.jsx)(n.p,{children:"Creates a bounding sphere in 2D from a bounding sphere in 3D world coordinates."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BoundingSphere"})," sphere The bounding sphere to transform to 2D."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Object"})," [projection=GeographicProjection] The projection to 2D."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"})," Optional object onto which to store the result."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The modified ",(0,i.jsx)(n.code,{children:"result"})," parameter or a new ",(0,i.jsx)(n.code,{children:"BoundingSphere"})," instance if none was provided."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"attribution",children:"Attribution"}),"\n",(0,i.jsxs)(n.p,{children:["This class was ported from ",(0,i.jsx)(n.a,{href:"https://github.com/AnalyticalGraphicsInc/cesium",children:"Cesium"})," under the Apache 2 License."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var i=r(6540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);