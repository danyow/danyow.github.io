"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80004],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(n),c=a,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"Grass and other details",slug:"/creating-environments/script-terrain/terrain-grass"},o="Grass and other details",l={unversionedId:"unity/creating-environments/script-terrain/Grass and other details",id:"version-Unity@2022.1/unity/creating-environments/script-terrain/Grass and other details",title:"Grass and other details",description:"A Terrain might have grass clumps and other small objects (such as rocks) covering its surface. Unity renders these objects using textured quads or full meshes, depending on the level of detail and performance you require.",source:"@site/versioned_docs/version-Unity@2022.1/unity/creating-environments/script-terrain/terrain-grass.md",sourceDirName:"unity/creating-environments/script-terrain",slug:"/creating-environments/script-terrain/terrain-grass",permalink:"/docs/creating-environments/script-terrain/terrain-grass",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Grass and other details",slug:"/creating-environments/script-terrain/terrain-grass"},sidebar:"unity",previous:{title:"Create Neighbor Terrains",permalink:"/docs/creating-environments/script-terrain/terrain-create-neighbor-terrains"},next:{title:"\u4f7f\u7528\u9ad8\u5ea6\u8d34\u56fe",permalink:"/docs/creating-environments/script-terrain/terrain-heightmaps"}},d={},p=[{value:"Paint Details",id:"paint-details",level:2},{value:"Add Detail Mesh",id:"add-detail-mesh",level:3},{value:"Use GPU Instancing",id:"use-gpu-instancing",level:4},{value:"Add Grass Texture",id:"add-grass-texture",level:3},{value:"Remove details",id:"remove-details",level:2}],u={toc:p};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"grass-and-other-details"}),"Grass and other details"),(0,r.kt)("p",null,"A Terrain might have grass clumps and other small objects (such as rocks) covering its surface. Unity renders these objects using textured quads or full meshes, depending on the level of detail and performance you require."),(0,r.kt)("p",null,"Prior to 2021.2, grass and other details only worked in the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Manual/built-in-render-pipeline.html"}),"built-in render pipeline")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Manual/universal-render-pipeline.html"}),"Universal Render Pipeline")," (URP). In 2021.2, Unity introduced instancing details that work with all render pipelines, including the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Manual/high-definition-render-pipeline.html"}),"High Definition Render Pipeline")," (HDRP)."),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TerrainWithGrass.png",alt:"Terrain with grass"}))),(0,r.kt)("p",null,"Terrain with grass"),(0,r.kt)("p",null,"Terrain details are available in several modes, where each mode has a different use during game development."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Mode")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Instanced mesh"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Unity recommends you use this mode because it\u2019s best suited for most scenarios that require the placement of any number of arbitrary meshes on Terrain.",(0,r.kt)("br",null),(0,r.kt)("br",null),"To add an instanced mesh, select  ",(0,r.kt)("strong",{parentName:"td"},"Add Detail Mesh"),"  and enable the  ",(0,r.kt)("strong",{parentName:"td"},"Use GPU Instancing"),"  option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vertex Lit mesh"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Doesn\u2019t use GPU instancing for rendering. Instead, it combines all detail instances into one mesh, which results in simple shading and limitations to the number of instances you can achieve.",(0,r.kt)("br",null),(0,r.kt)("br",null),"To add a Vertex Lit mesh, select  ",(0,r.kt)("strong",{parentName:"td"},"Add Detail Mesh"),"  and set the  ",(0,r.kt)("strong",{parentName:"td"},"Render Mode"),"  to  ",(0,r.kt)("strong",{parentName:"td"},"Vertex Lit")," .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Grass mesh"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Works similar to the vertex list mesh, but Unity treats these meshes as grass so they always have up-facing normals and move in the wind.",(0,r.kt)("br",null),(0,r.kt)("br",null),"To add a grass mesh, select  ",(0,r.kt)("strong",{parentName:"td"},"Add Detail Mesh"),"  and set the  ",(0,r.kt)("strong",{parentName:"td"},"Render Mode"),"  to  ",(0,r.kt)("strong",{parentName:"td"},"Grass")," .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Grass Texture"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Lets you create grass quad meshes directly from Texture, which move in the wind. You don\u2019t need to specify any custom meshes, and there\u2019s also an option you can enable to make grass quads always face the camera for a billboard effect.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Select  ",(0,r.kt)("strong",{parentName:"td"},"Add Grass Texture"),"  for this option.")))),(0,r.kt)("h2",a({},{id:"paint-details"}),"Paint Details"),(0,r.kt)("p",null,"To enable grass and detail painting, select the  ",(0,r.kt)("strong",{parentName:"p"},"Paint Details"),"  button on the Terrain Inspector toolbar."),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TerrainDetailsPaintTool.png",alt:"Terrain Inspector \u4e2d\u7684 Paint Details \u6309\u94ae"}))),(0,r.kt)("p",null,"Terrain Inspector \u4e2d\u7684 Paint Details \u6309\u94ae"),(0,r.kt)("p",null,"Initially, a Terrain has no grass or details available. In the Inspector, click the  ",(0,r.kt)("strong",{parentName:"p"},"Edit Details"),"  button to display a menu with the  ",(0,r.kt)("strong",{parentName:"p"},"Add Detail Mesh"),"  and  ",(0,r.kt)("strong",{parentName:"p"},"Add Grass Texture"),"  options. Click either option to bring up a window that lets you choose  ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"  to add to the Terrain for painting."),(0,r.kt)("h3",a({},{id:"add-detail-mesh"}),"Add Detail Mesh"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TerrainDetailAddWindow.png",alt:"Add Detail Mesh \u7a97\u53e3"}))),(0,r.kt)("p",null,"Add Detail Mesh \u7a97\u53e3"),(0,r.kt)("p",null,"Use the  ",(0,r.kt)("strong",{parentName:"p"},"Detail Prefab"),"  field to select a Prefab from your Project. To create an authentic look, each mesh is affected by a random factor to determine the size and color. Unity uses the Perlin noise algorithm to generate such random factors."),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Min Width")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Max Width")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Min Height")," , and  ",(0,r.kt)("strong",{parentName:"p"},"Max Height"),"  values specify the upper and lower scalings along the X and Y axes with which the meshes are randomly generated."),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Noise Seed"),"  setting sets the random number generator seed. Each seed value represents a unique generation. If you set the same seed for two types of details, the generated instances become identical. The  ",(0,r.kt)("strong",{parentName:"p"},"Noise Spread"),"  value refers to the scaling of the noise pattern over the X-Z plane, with higher values indicating more variations within a given area."),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Hole Edge Padding (%)"),"  setting controls how far away detail objects are from the edge of the hole area. For more information, see ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/2021.2/Documentation/ScriptReference/DetailPrototype-holeEdgePadding.html"}),"DetailPrototype.holeEdgePadding"),"."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Healthy Color"),"  and  ",(0,r.kt)("strong",{parentName:"p"},"Dry Color"),"  settings control the color variation. Unity performs linear interpolation between the healthy and dry colors, and selects a color based on the size of the mesh. For example, the system considers bigger-sized meshes to be healthier, thus the linear interpolation results for such meshes lean more towards the  ",(0,r.kt)("strong",{parentName:"p"},"Healthy Color"),"  tint. These color settings disappear when you select  ",(0,r.kt)("strong",{parentName:"p"},"Use GPU Instancing"),"  because they have no effect on instanced meshes."),(0,r.kt)("p",null,"You can set the  ",(0,r.kt)("strong",{parentName:"p"},"Render Mode"),"  to  ",(0,r.kt)("strong",{parentName:"p"},"Vertex Lit"),"  or  ",(0,r.kt)("strong",{parentName:"p"},"Grass")," ."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Render Mode")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Vertex Lit")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Renders detail meshes as solid, vertex lit GameObjects in the scene, which don\u2019t move in the wind.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Grass")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Renders detail meshes in the scene with simplified lighting similar to Grass Textures, and do move in the wind.")))),(0,r.kt)("h4",a({},{id:"use-gpu-instancing"}),"Use GPU Instancing"),(0,r.kt)("p",null,"In addition, you can specify if you want to use GPU instancing to render your detail meshes. With GPU instancing, Unity uses the material and the shader specified on the prefab for rendering. This lets you perform more customization in the shader, and potentially use ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@latest"}),"Shader Graph"),"."),(0,r.kt)("p",null,"Unity still applies the Width and Height noise to each instance, but disables the  ",(0,r.kt)("strong",{parentName:"p"},"Healthy Color")," / ",(0,r.kt)("strong",{parentName:"p"},"Dry Color"),"  noise. You can use your own color variation technique, along with many other randomizations, in the shader."),(0,r.kt)("p",null,"Under the hood, some of the Unity ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/graphics-performance-profiling/optimizing-draw-calls/gpuinstancing/gpuinstancing"}),"GPU instancing")," limitations do affect rendering. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your target platform needs to support GPU instancing."),(0,r.kt)("li",{parentName:"ul"},"Your shader must support GPU instancing. (Most shaders do support it.)"),(0,r.kt)("li",{parentName:"ul"},"Objects are rendered in batches of 1,023 or fewer."),(0,r.kt)("li",{parentName:"ul"},"Instanced light probe lighting or lightmap lighting are not supported.")),(0,r.kt)("p",null,"Unlike regular instancing where Unity dynamically builds up the instancing constant buffer every frame, instancing details have persistent constant buffers for better CPU and GPU performance when the target hardware allows for it, at the cost of moderately increased GPU memory usage."),(0,r.kt)("p",null,"If you select  ",(0,r.kt)("strong",{parentName:"p"},"Use GPU Instancing")," , the  ",(0,r.kt)("strong",{parentName:"p"},"Render Mode"),"  setting becomes grayed out and unavailable."),(0,r.kt)("h3",a({},{id:"add-grass-texture"}),"Add Grass Texture"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TerrainGrassAddWindow.png",alt:"Add Grass Texture \u7a97\u53e3"}))),(0,r.kt)("p",null,"Add Grass Texture \u7a97\u53e3"),(0,r.kt)("p",null,"The Add Grass Texture window"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Detail Texture"),"  is the Texture that represents the grass. You can download Textures from the Asset Store, or create your own Textures. A Texture is a small image with alpha set to zero for the empty areas. Note that \u201cGrass\u201d is a generic term; it is possible for a Texture to represent flowers or man-made objects such as barbed wire coils."),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Min Width")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Max Width")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Min Height")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Max Height")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Noise Seed")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Noise Spread")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Hole Edge Padding (%)")," ,  ",(0,r.kt)("strong",{parentName:"p"},"Healthy Color")," , and  ",(0,r.kt)("strong",{parentName:"p"},"Dry Color"),"  settings work the same as they do for meshes, and are described in the Add Detail Mesh section above."),(0,r.kt)("p",null,"Finally, when you enable the  ",(0,r.kt)("strong",{parentName:"p"},"Billboard"),"  option, the grass images rotate so that they always face the Camera. This is useful when you want to show a dense field of grass because clumps are two-dimensional, and not visible from the side. However, with sparse grass, the rotations of individual clumps might become apparent to the viewer, creating a strange effect."),(0,r.kt)("h2",a({},{id:"remove-details"}),"Remove details"),(0,r.kt)("p",null,"To remove a detail, select the detail to remove, click the  ",(0,r.kt)("strong",{parentName:"p"},"Edit Details"),"  button, then select  ",(0,r.kt)("strong",{parentName:"p"},"Remove")," . When you remove a detail, Unity clears the data that represents the Terrain area on which you scattered that detail."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2021\u201311\u201324 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,r.kt)("li",{parentName:"ul"},"Added information about instancing details")))}h.isMDXComponent=!0}}]);