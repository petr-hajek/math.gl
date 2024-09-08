"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3951],{8148:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=r(4848),s=r(8453);const t={},l="Web Mercator Utility Functions",d={id:"modules/web-mercator/api-reference/web-mercator-utils",title:"Web Mercator Utility Functions",description:"lngLatToWorld(lngLat)",source:"@site/../docs/modules/web-mercator/api-reference/web-mercator-utils.md",sourceDirName:"modules/web-mercator/api-reference",slug:"/modules/web-mercator/api-reference/web-mercator-utils",permalink:"/math.gl/docs/modules/web-mercator/api-reference/web-mercator-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/math.gl/tree/master/docs/../docs/modules/web-mercator/api-reference/web-mercator-utils.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/math.gl/docs/modules/web-mercator/"},next:{title:"WebMercatorViewport",permalink:"/math.gl/docs/modules/web-mercator/api-reference/web-mercator-viewport"}},o={},c=[{value:"<code>lngLatToWorld(lngLat)</code>",id:"lnglattoworldlnglat",level:3},{value:"<code>worldToLngLat(xy, scale)</code>",id:"worldtolnglatxy-scale",level:3},{value:"<code>worldToPixels(xyz, projectionMatrix)</code>",id:"worldtopixelsxyz-projectionmatrix",level:3},{value:"<code>pixelsToWorld(xyz, unprojectionMatrix, targetZ)</code>",id:"pixelstoworldxyz-unprojectionmatrix-targetz",level:3},{value:"<code>getMeterZoom(viewport)</code>",id:"getmeterzoomviewport",level:3},{value:"<code>getDistanceScales(viewport)</code>",id:"getdistancescalesviewport",level:3},{value:"<code>addMetersToLngLat(lngLatZ, xyz)</code>",id:"addmeterstolnglatlnglatz-xyz",level:3},{value:"<code>getViewMatrix(viewport)</code>",id:"getviewmatrixviewport",level:3},{value:"<code>getProjectionMatrix(viewport)</code>",id:"getprojectionmatrixviewport",level:3},{value:"<code>getProjectionParameters({width, height, altitude, fovy, pitch, farZMultiplier}})</code>",id:"getprojectionparameterswidth-height-altitude-fovy-pitch-farzmultiplier",level:3},{value:"<code>altitudeToFovy(altitude)</code>",id:"altitudetofovyaltitude",level:3},{value:"<code>fovyToAltitude(fovy)</code>",id:"fovytoaltitudefovy",level:3},{value:"<code>fitBounds(opts)</code>",id:"fitboundsopts",level:3},{value:"<code>normalizeViewportProps(viewport)</code>",id:"normalizeviewportpropsviewport",level:3},{value:"<code>flyToViewport(startProps, endProps, t, opts)</code>",id:"flytoviewportstartprops-endprops-t-opts",level:3},{value:"<code>getFlyToDuration(startProps, endProps, opts)</code>",id:"getflytodurationstartprops-endprops-opts",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"web-mercator-utility-functions",children:"Web Mercator Utility Functions"})}),"\n",(0,n.jsx)("p",{class:"badges",children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/From-v3.1-blue.svg?style=flat-square",alt:"From-v3.1"})}),"\n",(0,n.jsx)(i.h3,{id:"lnglattoworldlnglat",children:(0,n.jsx)(i.code,{children:"lngLatToWorld(lngLat)"})}),"\n",(0,n.jsx)(i.p,{children:"Project a coordinate on sphere onto the 512x512 Web Mercator plane."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lngLat"})," (Array, required) - Specifies a point on the sphere to project. ",(0,n.jsx)(i.code,{children:"[lng,lat]"})," in degrees."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"[x, y]"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"worldtolnglatxy-scale",children:(0,n.jsx)(i.code,{children:"worldToLngLat(xy, scale)"})}),"\n",(0,n.jsx)(i.p,{children:"Unproject a coordinate from the 512x512 Web Mercator plane back to the sphere."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"xy"})," (Array, required) - Specifies a point on the Web Mercator tile to unproject. ",(0,n.jsx)(i.code,{children:"[x, y]"})," in pixels."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"[lng, lat]"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"worldtopixelsxyz-projectionmatrix",children:(0,n.jsx)(i.code,{children:"worldToPixels(xyz, projectionMatrix)"})}),"\n",(0,n.jsx)(i.p,{children:"Project a coordinate from the Web Mercator coordinate system to screen."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"xyz"})," (Array, required) - Specifies a point in the Web Mercator tile. ",(0,n.jsx)(i.code,{children:"z"})," is the elevation and optional."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"projectionMatrix"})," (Matrix4, required) - The projection matrix."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"[x, y, z]"})," - coordinates on screen, ",(0,n.jsx)(i.code,{children:"z"})," is the pixel depth."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"pixelstoworldxyz-unprojectionmatrix-targetz",children:(0,n.jsx)(i.code,{children:"pixelsToWorld(xyz, unprojectionMatrix, targetZ)"})}),"\n",(0,n.jsx)(i.p,{children:"Project a coordinate from screen to the Web Mercator coordinate system."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"xyz"})," (Array, required) - Specifies a point on screen. ",(0,n.jsx)(i.code,{children:"z"})," is the pixel depth and optional."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"unprojectionMatrix"})," (Matrix4, required) - The unprojection matrix."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"targetZ"})," (Number, optional) - If pixel depth is not specified, ",(0,n.jsx)(i.code,{children:"targetZ"})," is used as the elevation plane to unproject onto. Default ",(0,n.jsx)(i.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"[x, y, z]"})," - coordinates on the Web Mercator tile, ",(0,n.jsx)(i.code,{children:"z"})," is the elevation."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getmeterzoomviewport",children:(0,n.jsx)(i.code,{children:"getMeterZoom(viewport)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns the zoom level that gives a 1 meter pixel at a certain latitude."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," (Object) - viewport props"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.latitude"})," (Number, required)"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getdistancescalesviewport",children:(0,n.jsx)(i.code,{children:"getDistanceScales(viewport)"})}),"\n",(0,n.jsx)(i.p,{children:"Calculate linear scales for quick conversion between meters/degrees/pixels distances around the given lat/lon."}),"\n",(0,n.jsx)(i.p,{children:"In mercator projection mode, the distance scales vary significantly with latitude. The scale is only reasonably accurate locally."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," (Object) - viewport props"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.highPrecision"})," (bool, optional) - default ",(0,n.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales"})," (Object)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.unitsPerMeter"})," (Array) - world units per meter in ",(0,n.jsx)(i.code,{children:"[x, y, z]"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.metersPerUnit"})," (Array) - meters per world unit in ",(0,n.jsx)(i.code,{children:"[x, y, z]"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.unitsPerDegree"})," (Array) - world units per degree in ",(0,n.jsx)(i.code,{children:"[x, y, z]"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.degreesPerUnit"})," (Array) - degree per world unit in ",(0,n.jsx)(i.code,{children:"[x, y, z]"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.unitsPerMeter2"})," (Array) - if ",(0,n.jsx)(i.code,{children:"highPrecision"})," is ",(0,n.jsx)(i.code,{children:"true"}),", returns world units per meter adjustment in ",(0,n.jsx)(i.code,{children:"[x2, y2, z2]"}),". It offers a cheap way to compensate for the precision loss with latitude. Amends ",(0,n.jsx)(i.code,{children:"unitsPerMeter"})," by y offset (in meters): ",(0,n.jsx)(i.code,{children:"[x + x2 * dy, y + y2 * dy, z + z2 * dy]"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"distanceScales.unitsPerDegree2"})," (Array) - if ",(0,n.jsx)(i.code,{children:"highPrecision"})," is ",(0,n.jsx)(i.code,{children:"true"}),", returns world units per degree adjustment in ",(0,n.jsx)(i.code,{children:"[x2, y2, z2]"}),". It offers a cheap way to compensate for the precision loss with latitude. Amends ",(0,n.jsx)(i.code,{children:"unitsPerDegree"})," by y offset (in degrees): ",(0,n.jsx)(i.code,{children:"[x + x2 * dy, y + y2 * dy, z + z2 * dy]"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"addmeterstolnglatlnglatz-xyz",children:(0,n.jsx)(i.code,{children:"addMetersToLngLat(lngLatZ, xyz)"})}),"\n",(0,n.jsx)(i.p,{children:"Offset a spherical position by meters."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lngLatZ"})," (Array) - origin in ",(0,n.jsx)(i.code,{children:"[lng, lat, alt]"}),". Altitude is optional."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"xyz"})," (Array) - offset from the origin ",(0,n.jsx)(i.code,{children:"[x, y, z]"})," in meters. ",(0,n.jsx)(i.code,{children:"x"})," is easting and ",(0,n.jsx)(i.code,{children:"y"})," is northing. ",(0,n.jsx)(i.code,{children:"z"})," is optional."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"[lng, lat]"})," if the third component in neither argument is specified, or"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"[lng, lat, alt]"})," otherwise."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getviewmatrixviewport",children:(0,n.jsx)(i.code,{children:"getViewMatrix(viewport)"})}),"\n",(0,n.jsx)(i.p,{children:"Get a transform matrix that projects from the mercator (pixel) space into the camera (view) space. Centers the map at the given coordinates."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," (Object) - viewport props"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.pitch"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.bearing"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.scale"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.altitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.center"})," (Array, optional) - pre-calculated world position of map center using ",(0,n.jsx)(i.code,{children:"getWorldPosition"}),". Default ",(0,n.jsx)(i.code,{children:"[0, 0]"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewMatrix"})," (Array) 4x4 matrix."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getprojectionmatrixviewport",children:(0,n.jsx)(i.code,{children:"getProjectionMatrix(viewport)"})}),"\n",(0,n.jsx)(i.p,{children:"Get a transform matrix that projects from camera (view) space to clipspace."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," (Object) - viewport props"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.pitch"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.scale"})," (Number, optional) - required if ",(0,n.jsx)(i.code,{children:"center"})," is specified"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.center"})," (Number[], optional) - offset of the target, vec3 in world space"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.offset"})," (Number[], optional) - offset of the focal point, vec2 in screen space"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.fovy"})," (Number, optional) - field of view in degrees"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.altitude"})," (Number, optional) - if provided, field of view is calculated using ",(0,n.jsx)(i.code,{children:"altitudeToFovy()"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.nearZMultiplier"})," (Number, optional) - near plane multiplier. Default ",(0,n.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.farZMultiplier"})," (Number, optional) - far plane multiplier. Default ",(0,n.jsx)(i.code,{children:"1"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Notes:"}),"\n",(0,n.jsx)(i.p,{children:"To match Mapbox's z-buffer, use these parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Before 0.29:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"nearZMultiplier"}),": ",(0,n.jsx)(i.code,{children:"0.1"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"farZMultiplier"}),": ",(0,n.jsx)(i.code,{children:"1"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Starting 0.29:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"nearZMultiplier"}),": ",(0,n.jsx)(i.code,{children:"1 / viewport.height"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"farZMultiplier"}),": ",(0,n.jsx)(i.code,{children:"1.01"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"fovy"}),": ",(0,n.jsx)(i.code,{children:"altitudeToFovy(1.5)"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getprojectionparameterswidth-height-altitude-fovy-pitch-farzmultiplier",children:(0,n.jsx)(i.code,{children:"getProjectionParameters({width, height, altitude, fovy, pitch, farZMultiplier}})"})}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.pitch"})," (Number, optional) - default ",(0,n.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.scale"})," (Number, optional) - required if ",(0,n.jsx)(i.code,{children:"center"})," is specified"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.center"})," (Number[], optional) - offset of the target, vec3 in world space"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.offset"})," (Number[], optional) - offset of the focal point, vec2 in screen space"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.fovy"})," (Number, optional) - field of view in degrees"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"altitude"})," (Number, optional) - if provided, field of view is calculated using ",(0,n.jsx)(i.code,{children:"altitudeToFovy()"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"farZMultiplier"})," (Number, optional) - near plane multiplier. Default ",(0,n.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"farZMultiplier"})," (Number, optional) - far plane multiplier. Default ",(0,n.jsx)(i.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Object with ",(0,n.jsx)(i.code,{children:"{fov, aspect, focalDistance, near, far}"})," fields. Note that returned ",(0,n.jsx)(i.code,{children:"fov"})," is in radians"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"altitudetofovyaltitude",children:(0,n.jsx)(i.code,{children:"altitudeToFovy(altitude)"})}),"\n",(0,n.jsx)(i.p,{children:"Convert an altitude to field of view such that the focal distance is equal to the altitude."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"altitude"})," (Number, required) - altitude of camera in screen units"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"fovy"})," field of view in degrees"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"fovytoaltitudefovy",children:(0,n.jsx)(i.code,{children:"fovyToAltitude(fovy)"})}),"\n",(0,n.jsx)(i.p,{children:"Convert a field of view to an altitude equal to the focal distance"}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"fovy"})," (Number, required) field of view in degrees"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"altitude"})," altitude of camera in screen units"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"fitboundsopts",children:(0,n.jsx)(i.code,{children:"fitBounds(opts)"})}),"\n",(0,n.jsx)(i.p,{children:"Returns map settings (longitude, latitude and zoom) that will contain the provided corners within the provided dimensions. Only supports non-perspective mode."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts"})," (Object) - options"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.bounds"})," (Array, required) - opposite corners specified as ",(0,n.jsx)(i.code,{children:"[[lon, lat], [lon, lat]]"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.minExtent"})," (Number, optional) - If supplied, the bounds used to calculate the new map settings will be expanded if the delta width or height of the supplied ",(0,n.jsx)(i.code,{children:"bounds"})," is smaller than this value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.maxZoom"}),"=",(0,n.jsx)(i.code,{children:"24"})," (Number, optional) - The returned zoom value will be capped to this value. Avoids returning infinite ",(0,n.jsx)(i.code,{children:"zoom"})," when the supplied ",(0,n.jsx)(i.code,{children:"bounds"})," have zero width or height deltas."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.padding"}),"=",(0,n.jsx)(i.code,{children:"0"})," (Number, optional) - the amount of padding in pixels to add to the given bounds."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.offset"}),"=",(0,n.jsx)(i.code,{children:"[0,0]"})," (Array, optional) - the center of the given bounds relative to the map's center, ",(0,n.jsx)(i.code,{children:"[x, y]"})," measured in pixels."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"{longitude, latitude, zoom}"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Notes:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"minExtent"})," - Note that this value represents delta latitude/longitudes and value of ",(0,n.jsx)(i.code,{children:"0.01"})," would roughly represent 1km."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"normalizeviewportpropsviewport",children:(0,n.jsx)(i.code,{children:"normalizeViewportProps(viewport)"})}),"\n",(0,n.jsx)(i.p,{children:"This will adjust the map center and zoom so that the projected map fits into the target viewport size without white gaps."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," (Object)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.zoom"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport.pitch"})," (Number, optional)"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"viewport"})," - normalized ",(0,n.jsx)(i.code,{children:"{width, height, longitude, latitude, zoom, pitch, bearing}"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"flytoviewportstartprops-endprops-t-opts",children:(0,n.jsx)(i.code,{children:"flyToViewport(startProps, endProps, t, opts)"})}),"\n",(0,n.jsx)(i.p,{children:"While flying from one viewport to another, returns in-transition viewport props at a given time. This util function implements the algorithm described in \u201cSmooth and efficient zooming and panning.\u201d by Jarke J. van Wijk and Wim A.A. Nuij."}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps"})," (Object) - viewport to fly from"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.zoom"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps"})," (Object) - viewport to fly from"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.zoom"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"t"})," (Number) - a time factor between 0 and 1. ",(0,n.jsx)(i.code,{children:"0"})," indicates the start of the transition, ",(0,n.jsx)(i.code,{children:"1"})," indicates the end of the transition."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts"})," (Object, optional)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.curve"}),' (Number, optional, default: 1.414) - The zooming "curve" that will occur along the flight path, .']}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"{longitude, latitude, zoom}"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"getflytodurationstartprops-endprops-opts",children:(0,n.jsx)(i.code,{children:"getFlyToDuration(startProps, endProps, opts)"})}),"\n",(0,n.jsxs)(i.p,{children:["Returns time in milliseconds, that is required perform transition from one viewport to another. Time returned is proportional to the distance we are transitioning to. This util function implements mapbox-gl-js (",(0,n.jsx)(i.a,{href:"https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto",children:"https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto"}),") duration calculation."]}),"\n",(0,n.jsx)(i.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps"})," (Object) - viewport to fly from"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.width"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.height"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"startProps.zoom"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps"})," (Object) - viewport to fly from"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.longitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.latitude"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"endProps.zoom"})," (Number, required)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts"})," (Object, optional) - optional parameters that effect duration calculation."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.curve"}),' (Number, optional, default: 1.414) - The zooming "curve" that will occur along the flight path.']}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.speed"})," (Number, optional, default: 1.2) - The average speed of the animation defined in relation to ",(0,n.jsx)(i.code,{children:"options.curve"}),", it linearly affects the duration, higher speed returns smaller durations and vice versa."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.screenSpeed"})," (Number, optional) - The average speed of the animation measured in screenfuls per second. Similar to ",(0,n.jsx)(i.code,{children:"opts.speed"})," it linearly affects the duration, when specified ",(0,n.jsx)(i.code,{children:"opts.speed"})," is ignored."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"opts.maxDuration"})," (Number, optional) - Maximum duration in milliseconds, if calculated duration exceeds this value, ",(0,n.jsx)(i.code,{children:"0"})," is returned."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Returns:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"duration"})," Number, in milliseconds."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>d});var n=r(6540);const s={},t=n.createContext(s);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);