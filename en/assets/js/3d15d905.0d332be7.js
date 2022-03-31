"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18878],{35318:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(g,l(l({ref:t},h),{},{components:n})):r.createElement(g,l({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return h}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"Mesh Renderer \u7ec4\u4ef6",slug:"/graphics/mesh/comp-mesh-group/class-mesh-renderer"},s="Mesh Renderer component",o={unversionedId:"unity/graphics/mesh/comp-mesh-group/Mesh Renderer \u7ec4\u4ef6",id:"version-Unity@2022.1/unity/graphics/mesh/comp-mesh-group/Mesh Renderer \u7ec4\u4ef6",title:"Mesh Renderer component",description:"A Mesh Renderer component renders a mesh. It works with a Mesh Filter component on the same GameObject; the Mesh Renderer renders the mesh that the Mesh Filter references.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/mesh/comp-mesh-group/class-mesh-renderer.md",sourceDirName:"unity/graphics/mesh/comp-mesh-group",slug:"/graphics/mesh/comp-mesh-group/class-mesh-renderer",permalink:"/en/docs/graphics/mesh/comp-mesh-group/class-mesh-renderer",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/mesh/comp-mesh-group/class-mesh-renderer.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Mesh Renderer \u7ec4\u4ef6",slug:"/graphics/mesh/comp-mesh-group/class-mesh-renderer"},sidebar:"unity",previous:{title:"Mesh Filter component",permalink:"/en/docs/graphics/mesh/comp-mesh-group/class-mesh-filter"},next:{title:"Skinned Mesh Renderer component",permalink:"/en/docs/graphics/mesh/comp-mesh-group/class-skinned-mesh-renderer"}},p={},h=[{value:"Mesh Renderer Inspector reference",id:"mesh-renderer-inspector-reference",level:2},{value:"\u6750\u8d28",id:"\u6750\u8d28",level:3},{value:"\u5149\u7167",id:"\u5149\u7167",level:2},{value:"Lightmapping",id:"lightmapping",level:2},{value:"Probes",id:"probes",level:3},{value:"Additional Settings",id:"additional-settings",level:3}],m={toc:h};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"mesh-renderer-component"}),"Mesh Renderer component"),(0,r.kt)("p",null,"A Mesh Renderer component renders a mesh. It works with a ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/mesh/comp-mesh-group/class-mesh-filter"}),"Mesh Filter")," component on the same GameObject; the Mesh Renderer renders the mesh that the Mesh Filter references."),(0,r.kt)("p",null,"To render a deformable mesh, use a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Manual/class-SkinnedMeshRenderer.html"}),"Skinned Mesh Renderer")," instead."),(0,r.kt)("p",null,"In C# code, the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.html"}),"MeshRenderer")," class represents a Mesh Renderer component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"MeshRenderer")," class inherits much of its functionality from the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Renderer.html"}),"Renderer")," class. As such, this component has a lot in common with other components that inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"Renderer"),", such as ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/visual-effects/visual-effects-lines-trails-billboards/class-line-renderer"}),"Line Renderer"),", and ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/visual-effects/visual-effects-lines-trails-billboards/class-trail-renderer"}),"Trail Renderer"),"."),(0,r.kt)("h2",a({},{id:"mesh-renderer-inspector-reference"}),"Mesh Renderer Inspector reference"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/class-MeshRenderer-0.png",alt:"The Mesh Renderer component as it appears in the Inspector window with Receive Global Illumination set to Light Probes."}))),(0,r.kt)("p",null,"The Mesh Renderer component as it appears in the Inspector window with Receive  ",(0,r.kt)("strong",{parentName:"p"},"Global Illumination"),"  set to  ",(0,r.kt)("strong",{parentName:"p"},"Light Probes")," ."),(0,r.kt)("p",null,"A: ",(0,r.kt)("a",a({parentName:"p"},{href:"#%E6%9D%90%E8%B4%A8"}),"Materials"),(0,r.kt)("br",null)," B: ",(0,r.kt)("a",a({parentName:"p"},{href:"#%E5%85%89%E7%85%A7"}),"Lighting"),(0,r.kt)("br",null)," C: ",(0,r.kt)("a",a({parentName:"p"},{href:"#lightmapping"}),"Lightmapping"),(0,r.kt)("br",null)," D: ",(0,r.kt)("a",a({parentName:"p"},{href:"#probes"}),"Probes"),(0,r.kt)("br",null)," E: ",(0,r.kt)("a",a({parentName:"p"},{href:"#additional-settings"}),"Additional Settings")),(0,r.kt)("h3",a({},{id:"\u6750\u8d28"}),"\u6750\u8d28"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/mesh-renderer-inspector-materials.png",alt:"The Materials section"}))),(0,r.kt)("p",null,"The Materials section"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Materials"),"  section lists all the ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/materials/class-material"}),"materials")," that this component uses."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Size")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The number of elements in the material list.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If you decrease the number of elements, Unity deletes the elements at the end of the list. If you increase the number of elements, Unity adds new elements to the end of the list. Unity populates new elements with the same material that the element at the end of the list uses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Element")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The materials in the list. You can assign a material asset to each element.",(0,r.kt)("br",null),(0,r.kt)("br",null),"By default, Unity orders the list alphabetically based on the name of the materials. This list is reorderable, and Unity updates the number of the elements automatically as you change their order.")))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  If there are more materials than there are sub-meshes, Unity renders the last sub-mesh with each of the remaining materials, one on top of the next. If the materials are not fully opaque, you can layer different materials and create interesting visual effects. However, fully opaque materials overwrite previous layers, so any additional opaque materials that Unity applies to the last sub-mesh negatively affect performance and produce no benefit."),(0,r.kt)("h2",a({},{id:"\u5149\u7167"}),"\u5149\u7167"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Lighting"),"  section contains properties that relate to lighting."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Cast Shadows")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify if and how this Renderer casts shadows when a suitable ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/lighting-light-sources/class-light/class-light"}),"Light")," shines on it.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Renderer.shadowCastingMode.html"}),"Renderer.shadowCastingMode")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"On")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"This Renderer casts a shadow when a shadow-casting Light shines on it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Off")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"This Renderer does not cast shadows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Two-sided")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"This Renderer casts two-sided shadows. This means that single-sided objects like a plane or a quad can cast shadows, even if the light source is behind the mesh.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#mixed-lighting"}),"Baked Global Illumination")," or Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," to support two-sided shadows, the material must support ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/Manual/class-Material.html"}),"Double Sided Global Illumination"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Shadows Only")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"This Renderer casts shadows, but the Renderer itself isn\u2019t visible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Receive Shadows")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify if Unity displays shadows cast onto this Renderer.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property only has an effect if you enable ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#mixed-lighting"}),"Baked Global Illumination")," or Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," for this scene.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Renderer-receiveShadows.html"}),"Renderer.receiveShadows")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Contribute Global Illumination")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Include this Renderer in global illumination calculations, which take place at bake time.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property only has an effect if you enable ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#mixed-lighting"}),"Baked Global Illumination")," or Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," for this scene.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Enabling this property enables the Contribute GI flag in the GameObject\u2019s ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/unity-overview/creating-gameplay/game-objects/static-objects"}),"Static Editor Flags"),". It corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/StaticEditorFlags.ContributeGI.html"}),"StaticEditorFlags.ContributeGI")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Receive Global Illumination")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Whether Unity provides global illumination data to this Renderer from baked lightmaps, or from runtime Light Probes.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is only editable if you enable  ",(0,r.kt)("strong",{parentName:"td"},"Contribute Global Illumination")," . It only has an effect if you enable ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#mixed-lighting"}),"Baked Global Illumination")," or Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," for this scene.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/MeshRenderer-receiveGI.html"}),"MeshRenderer.receiveGI")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Lightmaps")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Unity provides global illumination data to this Renderer from lightmaps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Light Probes")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Unity provides global illumination data to this Renderer from ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/light-probes/light-probes"}),"Light Probes")," in the scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Prioritize Illumination")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable this property to always include this Renderer in Enlighten Realtime Global Illumination calculations. This ensures that the Renderer is affected by distant emissives, even those which are normally excluded from Global Illumination calculations for performance reasons.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if  ",(0,r.kt)("strong",{parentName:"td"},"Contribute GI"),"  is enabled in the GameObject\u2019s ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/unity-overview/creating-gameplay/game-objects/static-objects"}),"Static Editor Flags"),", your project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")))),(0,r.kt)("h2",a({},{id:"lightmapping"}),"Lightmapping"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Lightmapping"),"  section contains properties relating to baked and real-time lightmaps."),(0,r.kt)("p",null,"This section is visible only if only if  ",(0,r.kt)("strong",{parentName:"p"},"Receive Global Illumination"),"  is set to  ",(0,r.kt)("strong",{parentName:"p"},"Lightmaps")," ."),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/class-MeshRenderer-1.png",alt:"class-MeshRenderer-1.png"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u529f\u80fd\uff1a")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scale in Lightmap")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the relative size of the Renderer\u2019s UVs within a lightmap.",(0,r.kt)("br",null),(0,r.kt)("br",null),"A value of 0 results in the Renderer not being lightmapped, but it still contributes to lighting other Renderers in the Scene. A value greater than 1.0 increases the number of pixels (the lightmap resolution) used for this Renderer, while a value less than 1.0 decreases it.",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can use this property to optimize lightmaps so that important and detailed areas are more accurately lit. For example, an isolated building with flat, dark walls uses a low lightmap scale (less than 1.0) while a collection of colourful motorcycles displayed close together requires a high scale value.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.scaleInLightmap.html"}),"MeshRenderer.scaleInLightmap")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Stitch Seams")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/lightmappers/lightmapping-seam-stitching"}),"Lightmap seam stitching")," for this Renderer.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.stitchLightmapSeams.html"}),"MeshRenderer.stitchLightmapSeams")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Lightmap Parameters")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Choose or create a ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/lightmappers/class-lightmap-parameters"}),"Lightmap Parameters")," asset for this Renderer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Optimize Realtime UVs")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Determine whether Unity ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/lightmappers/lighting-gi-uvs/lighting-gi-uvs"}),"merges the real-time lightmap UVs")," for this Renderer.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if your Project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Max Distance")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the maximum worldspace distance for UV chart simplification in real-time lightmaps. If charts are within this distance, Unity simplifies them.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if your Project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Max Angle")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the maximum angle in degrees between faces sharing a UV edge in real-time lightmaps. If the angle between the faces is below this value, Unity simplifies the UV charts.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if your Project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Ignore Normals")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable this option to prevent Unity from splitting the UV charts in real-time lightmaps.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if your Project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Min Chart Size")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the minimum texel size used for a UV chart in real-time lightmaps. If stitching is required, a value of 4 creates a chart of 4x4 texels to store lighting and directionality. If stitching is not required, a value of 2 reduces the texel density and provides better lighting build times and game performance.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is visible only if your Project uses the Built-in Render Pipeline, and Enlighten ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/class-lighting-settings/class-lighting-settings#realtime-lighting"}),"Realtime Global Illumination")," is enabled in your scene.")))),(0,r.kt)("p",null,"When you\u2019ve baked your lighting data (menu:  ",(0,r.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Rendering"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Lighting"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Generate Lighting"),"  ), this section also shows the baked lightmaps and real-time lightmaps in the current scene that this Renderer uses."),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/class-MeshRenderer-2.png",alt:"\u8fdb\u884c\u70d8\u7119\u540e\u5728\u573a\u666f\u4e2d\u663e\u793a\u7684\u5149\u7167\u8d34\u56fe\u793a\u4f8b\u3002"}))),(0,r.kt)("p",null,"\u8fdb\u884c\u70d8\u7119\u540e\u5728\u573a\u666f\u4e2d\u663e\u793a\u7684\u5149\u7167\u8d34\u56fe\u793a\u4f8b\u3002"),(0,r.kt)("h3",a({},{id:"probes"}),"Probes"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Probes"),"  section contains properties relating to ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/lighting-overview/light-probes/light-probes"}),"Light Probe")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/lighting-overview/reflection-probes/class-reflection-probe"}),"Reflection Probes"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Light Probes")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set how this Renderer receives light from the ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/light-probes/light-probes"}),"Light Probes")," system.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Renderer.lightProbeUsage.html"}),"Renderer.lightProbeUsage")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Off")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The Renderer doesn\u2019t use any interpolated Light Probes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Blend Probes")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The Renderer uses one interpolated Light Probe. This is the default value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Use Proxy Volume")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The Renderer uses a 3D grid of interpolated Light Probes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Custom Provided")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The Renderer extracts Light Probe shader uniform values from the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyBlock.html"}),"MaterialPropertyBlock"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Proxy Volume Override")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set a reference to another GameObject that has a Light Probe Proxy Volume component.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property is only visible when  ",(0,r.kt)("strong",{parentName:"td"},"Light Probes"),"  is set to  ",(0,r.kt)("strong",{parentName:"td"},"Use Proxy Volume")," .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Reflection Probes")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set how the Renderer receives reflections from the ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/reflection-probes/class-reflection-probe"}),"Reflection Probe")," system.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Renderer.probeAnchor.html"}),"Renderer.probeAnchor")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Off")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disables Reflection Probes. Unity uses a skybox for reflection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Blend Probes")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enables Reflection Probes. Blending occurs only between Reflection Probes. This is useful in indoor environments where the character may transition between areas with different lighting settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Blend Probes and Skybox")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enables Reflection Probes. Blending occurs between Reflection Probes, or between Reflection Probes and the default reflection. This is useful for outdoor environments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Simple")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enables Reflection Probes, but no blending occurs between Reflection Probes when there are two overlapping volumes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Anchor Override")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set the Transform that Unity uses to determine the interpolation position when using the ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/light-probes/light-probes"}),"Light Probe")," or ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/lighting-overview/reflection-probes/class-reflection-probe"}),"Reflection Probe")," systems. By default, this is the centre of the bounding box of the Renderer\u2019s geometry.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Renderer-probeAnchor.html"}),"Renderer.probeAnchor")," API.")))),(0,r.kt)("h3",a({},{id:"additional-settings"}),"Additional Settings"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Additional Settings"),"  section contains additional properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Motion Vectors")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set whether to use motion vectors to track this Renderer\u2019s per-pixel, screen-space motion from one frame to the next. You can use this information to apply post-processing effects such as motion blur.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:"),"  not all platforms support motion vectors. See ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SystemInfo.supportsMotionVectors.html"}),"SystemInfo.supportsMotionVectors")," for more information.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This property corresponds to the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Renderer.motionVectorGenerationMode.html"}),"Renderer.motionVectorGenerationMode")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Camera Motion Only")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Use only Camera movement to track motion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Per Object Motion")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Use a specific pass to track motion for this Renderer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,r.kt)("strong",{parentName:"td"},"Force No Motion")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Do not track motion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Dynamic Occlusion")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"When  ",(0,r.kt)("strong",{parentName:"td"},"Dynamic Occlusion"),"  is enabled, Unity\u2019s ",(0,r.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/cameras-overview/occlusion-culling/occlusion-culling"}),"occlusion culling")," system culls this Renderer when it is blocked from a Camera\u2019s view by a Static Occluder. Otherwise, the system does not cull this Renderer when it is blocked from a Camera\u2019s view by a Static Occluder.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Dynamic Occlusion is enabled by default. Disable it for effects such as drawing the outline of a character behind a wall.")))))}d.isMDXComponent=!0}}]);