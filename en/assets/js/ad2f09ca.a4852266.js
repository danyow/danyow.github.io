"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66518],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},80148:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});a(27378);var n=a(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"DOTS Instancing shaders",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders"},o="DOTS Instancing shaders",l={unversionedId:"unity/graphics/graphics-performance-profiling/batch-renderer-group/DOTS Instancing shaders",id:"version-Unity@2022.1/unity/graphics/graphics-performance-profiling/batch-renderer-group/DOTS Instancing shaders",title:"DOTS Instancing shaders",description:"To render large instance counts efficiently, BRG uses a new shader instancing mode called DOTS Instancing. Every shader that BRG uses must support DOTS Instancing. In traditional instanced shaders, the shader is passed an array for each instanced property in a constant or uniform buffer, such that each element in each array contains the property value for a single instance in the draw. In DOTS Instanced shaders, Unity passes one 32-bit integer to the shader for each DOTS Instanced property. This 32-bit integer is called a metadata value. This integer can represent anything you want, but typically you use it to pass a buffer offset from where the shader can then load the property value for the instance it is rendering.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders.md",sourceDirName:"unity/graphics/graphics-performance-profiling/batch-renderer-group",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders",permalink:"/en/docs/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"DOTS Instancing shaders",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders"},sidebar:"unity",previous:{title:"How BatchRendererGroup works",permalink:"/en/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-how"},next:{title:"The Frame Debugger window",permalink:"/en/docs/graphics/graphics-performance-profiling/frame-debugger"}},c={},d=[{value:"Supporting DOTS Instancing",id:"supporting-dots-instancing",level:2},{value:"Declaring DOTS Instanced properties",id:"declaring-dots-instanced-properties",level:2},{value:"Accessing DOTS Instanced properties",id:"accessing-dots-instanced-properties",level:2},{value:"Access macro examples",id:"access-macro-examples",level:3},{value:"Per-instance",id:"per-instance",level:4},{value:"Constant",id:"constant",level:4},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],p={toc:d};function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"dots-instancing-shaders"}),"DOTS Instancing shaders"),(0,n.kt)("p",null,"To render large instance counts efficiently, BRG uses a new shader instancing mode called DOTS Instancing. Every shader that BRG uses must support DOTS Instancing. In traditional instanced shaders, the shader is passed an array for each instanced property in a constant or uniform buffer, such that each element in each array contains the property value for a single instance in the draw. In DOTS Instanced shaders, Unity passes one 32-bit integer to the shader for each DOTS Instanced property. This 32-bit integer is called a metadata value. This integer can represent anything you want, but typically you use it to pass a buffer offset from where the shader can then load the property value for the instance it is rendering."),(0,n.kt)("p",null,"DOTS Instancing brings many advantages compared to traditional instancing, including the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The instance data is stored in a GraphicsBuffer and remains persistent on the GPU, which means that Unity doesn\u2019t need to set it up again each time it renders the instance. Setting up the data only when it actually changes can bring very large performance increases in cases where the data changes only rarely or doesn\u2019t change at all. This is compared to traditional instancing which sets up all data for every instance every frame."),(0,n.kt)("li",{parentName:"ul"},"The process for setting up instance data is separate from setting up the draw call, which allows the draw call setup to be very lightweight and efficient. To achieve this, BRG uses a special fast path of the SRP Batcher which only does a minimal amount of work for each draw call."),(0,n.kt)("li",{parentName:"ul"},"The size of the draw call is no longer limited by how much instance data can fit in a constant or uniform buffer. This allows BRG to render larger instance counts with a single draw call. The number of instance indices still limits the draw call, but they take a lot less space than a full set of instanced properties, so many more can fit inside a constant or uniform buffer."),(0,n.kt)("li",{parentName:"ul"},"If every instance uses the same value for a given property, it is possible to have all instances load the value from the same place in memory. This saves memory and the resource intensity of the setup associated with duplicating the value for each instance.")),(0,n.kt)("h2",r({},{id:"supporting-dots-instancing"}),"Supporting DOTS Instancing"),(0,n.kt)("p",null,"To support DOTS Instancing, a shader needs to do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use shader model 4.5 or newer, so it must specify ",(0,n.kt)("inlineCode",{parentName:"p"},"#pragma target 4.5")," or higher.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support the ",(0,n.kt)("inlineCode",{parentName:"p"},"DOTS_INSTANCING_ON")," keyword. To declare this, use ",(0,n.kt)("inlineCode",{parentName:"p"},"#pragma multi_compile _ DOTS_INSTANCING_ON"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Declare at least one block of DOTS Instanced properties with at least one property. For more information, see ",(0,n.kt)("a",r({parentName:"p"},{href:"#declaring-dots-instanced-properties"}),"Declaring DOTS Instanced properties"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Note")," : Shader Graphs and shaders that Unity provides in URP and HDRP support DOTS Instancing."))),(0,n.kt)("h2",r({},{id:"declaring-dots-instanced-properties"}),"Declaring DOTS Instanced properties"),(0,n.kt)("p",null,"To load instance data such as transform matrices, the shader needs to define DOTS Instanced properties. Below is an example of a simple DOTS Instanced property block:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"UNITY_DOTS_INSTANCING_START(MaterialPropertyMetadata)\n    UNITY_DOTS_INSTANCED_PROP(float4, Color)\nUNITY_DOTS_INSTANCING_END(MaterialPropertyMetadata)\n")),(0,n.kt)("p",null,"To mark the beginning and the end of the property block, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"UNITY_DOTS_INSTANCING_START")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"UNITY_DOTS_INSTANCING_END")," macros followed by the name of the block. The above example uses ",(0,n.kt)("inlineCode",{parentName:"p"},"MaterialPropertyMetadata")," as the name. There are three allowed names:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BuiltinPropertyMetadata"),(0,n.kt)("li",{parentName:"ul"},"MaterialPropertyMetadata"),(0,n.kt)("li",{parentName:"ul"},"UserPropertyMetadata")),(0,n.kt)("p",null,"The shader can declare up to one of each, so a DOTS Instanced shader can have between 1 and 3 of such blocks. The block names don\u2019t affect functionality directly. Unity-defined shader code doesn\u2019t use UserPropertyMetadata so this name is guaranteed to be free for you to use. URP and HDRP define BuiltinPropertyMetadata for every shader they provide and define MaterialPropertyMetadata for most of them too. Your custom shaders can use all three."),(0,n.kt)("p",null,"The block can contain any number of DOTS Instanced property definitions formatted like:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"UNITY_DOTS_INSTANCED_PROP(PropertyType, PropertyName)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PropertyType")," can be any HLSL built-in type (like uint, float4, float4x4, or int2x4) except a bool vector, and ",(0,n.kt)("inlineCode",{parentName:"p"},"PropertyName")," is the name of the DOTS Instanced property. DOTS Instanced properties are completely separate from regular material properties, and you can give them the same name as another regular material property. This is possible because the ",(0,n.kt)("inlineCode",{parentName:"p"},"UNITY_DOTS_INSTANCED_PROP")," macro generates special constant names which Unity recognizes, but don\u2019t conflict with other property names. Shaders that Unity provides use the convention where DOTS Instanced properties have the same names as regular material properties, but you don\u2019t need to follow this convention."),(0,n.kt)("p",null,"Internally, Unity provides the shader with a 32-bit integer metadata value for every DOTS Instanced property the shader declares. Unity sets the metadata value when your code makes a ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.AddBatch.html"}),"BatchRendererGroup.AddBatch")," call to create the batch associated with the draw. The metadata value defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," if Unity doesn\u2019t set it. The shader also has access to ",(0,n.kt)("inlineCode",{parentName:"p"},"ByteAddressBuffer unity_DOTSInstanceData")," which Unity sets to the GraphicsBuffer your code uses as the argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"BatchRendererGroup.AddBatch"),". This is typically where the shader loads the instance data from. Different batches can use different GraphicsBuffers for ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData"),", or multiple batches can share a single GraphicsBuffer."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Note")," : Unity doesn\u2019t provide any DOTS Instanced data automatically. It\u2019s your responsibility to make sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData")," buffer of each batch contains the correct data. This includes many properties which are normally built-in properties for GameObjects, such as transform matrices, light probe coefficients, and lightmap texture coordinates."),(0,n.kt)("h2",r({},{id:"accessing-dots-instanced-properties"}),"Accessing DOTS Instanced properties"),(0,n.kt)("p",null,"To access DOTS Instanced properties, your shader can use one of the access macros that Unity provides. The access macros assume that the layout of instance data in ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData")," uses the following layout:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The 31 least significant bits of the metadata value contain the byte address inside ",(0,n.kt)("inlineCode",{parentName:"li"},"unity_DOTSInstanceData")," that stores the value for instance index zero."),(0,n.kt)("li",{parentName:"ul"},"If the most significant bit of the metadata value is ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),", every instance uses the value from instance index zero. They load directly from the byte address in the metadata value. In this case, the buffer only needs to store a single value, instead of one value per instance."),(0,n.kt)("li",{parentName:"ul"},"If the most significant bit of the metadata value is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", the address should contain an array where you can find the value for instance index ",(0,n.kt)("inlineCode",{parentName:"li"},"instanceID")," using ",(0,n.kt)("inlineCode",{parentName:"li"},"AddressOfInstance0 + sizeof(PropertyType) * instanceID"),". In this case, you should ensure that every rendered instance index has valid data inside the buffer. Otherwise, out-of-bounds access and undefined behavior can occur.")),(0,n.kt)("p",null,"You can also use the metadata value directly which is useful if you want to use a custom data source that doesn\u2019t use the above layout, such as a texture."),(0,n.kt)("p",null,"Unity provides the following access macros:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Access macro")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_ACCESS_DOTS_INSTANCED_PROP(PropertyType, PropertyName)")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the value loaded from ",(0,n.kt)("inlineCode",{parentName:"td"},"unity_DOTSInstanceData")," using the layout described above. Shaders that Unity provides use this version for DOTS Instanced built-in properties that don\u2019t have a default value to fall back on.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_DEFAULT(PropertyType, PropertyName)")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the same as ",(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_ACCESS_DOTS_INSTANCED_PROP"),", except if the most significant bit of the metadata value is zero, it returns a default value. The default value is the value of the regular material property with the same name as the DOTS Instanced property, which is why Shaders that Unity provides use the convention where DOTS Instanced properties have the same name as regular material properties. In this case, the access macro doesn\u2019t access ",(0,n.kt)("inlineCode",{parentName:"td"},"unity_DOTSInstanceData")," at all. Shaders that Unity provides use this version for DOTS Instanced material properties, so the loads fall back to the value set on the material.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_CUSTOM_DEFAULT(PropertyType, PropertyName, DefaultValue)")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the same as ",(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_ACCESS_DOTS_INSTANCED_PROP"),", except if the most significant bit of the metadata value is zero, it returns ",(0,n.kt)("inlineCode",{parentName:"td"},"DefaultValue")," instead, and doesn\u2019t access ",(0,n.kt)("inlineCode",{parentName:"td"},"unity_DOTSInstanceData"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UNITY_DOTS_INSTANCED_METADATA_NAME(PropertyType, PropertyName)")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the metadata value directly without accessing anything. This is useful for custom instance data loading schemes.")))),(0,n.kt)("p",null,"For an example of how to use these macros, see ",(0,n.kt)("a",r({parentName:"p"},{href:"#access-macro-examples"}),"Access macro example"),"."),(0,n.kt)("p",null,"Alongside the access macros, Unity provides shader functions that load the values of built-in constants directly from the draw command data. Shaders that Unity provides use these functions to load the values of the corresponding built-ins."),(0,n.kt)("p",null,"Unity provides the following shader functions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Shader function")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LoadDOTSInstancedData_RenderingLayer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the ",(0,n.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Rendering.BatchFilterSettings-renderingLayerMask.html"}),"renderingLayerMask")," for the draw command.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LoadDOTSInstancedData_MotionVectorsParams")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the ",(0,n.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Rendering.BatchFilterSettings-motionMode.html"}),"motion vector generation mode")," for the draw command. This is formatted as a float4, which is what Unity shaders expect.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LoadDOTSInstancedData_WorldTransformParams")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns whether to draw the instance with a flipped triangle winding. See ",(0,n.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchDrawCommandFlags.FlipWinding.html"}),"FlipWinding"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LoadDOTSInstancedData_LightData")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns whether the scene\u2019s main light is active for the instance. The main light can be deactivated for multiple reasons, for example if it\u2019s already included in light maps.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LoadDOTSInstancedData_LODFade")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Returns the 8 bit crossfade value you set if the ",(0,n.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchDrawCommandFlags.LODCrossFade.html"}),"LODCrossFade flag")," is set. If the flag is not set, the return value is undefined.")))),(0,n.kt)("h3",r({},{id:"access-macro-examples"}),"Access macro examples"),(0,n.kt)("p",null,"This section contains examples of the access macros that Unity provides. There\u2019s an example of how to use them to access per-instance data and access constant data."),(0,n.kt)("h4",r({},{id:"per-instance"}),"Per-instance"),(0,n.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The metadata value for ",(0,n.kt)("inlineCode",{parentName:"li"},"Color")," is ",(0,n.kt)("inlineCode",{parentName:"li"},"0x80001000"),"."),(0,n.kt)("li",{parentName:"ul"},"The instance index is ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},"Data for instance 0 starts at address 0x1000."),(0,n.kt)("li",{parentName:"ul"},"Data for instance 5 is at address 0x1000 + 5 ","*"," sizeof(float4) = 0x1050")),(0,n.kt)("p",null,"Since the most significant bit is set, the accessor macros don\u2019t load defaults. This means that ",(0,n.kt)("inlineCode",{parentName:"p"},"c0"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"c1"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"c2")," will all have the same value, loaded from ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData")," address ",(0,n.kt)("inlineCode",{parentName:"p"},"0x1050"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"void ExamplePerInstance()\n{\n    // rawMetadataValue will contain 0x80001000\n    uint rawMetadataValue = UNITY_DOTS_INSTANCED_METADATA_NAME(float4, Color);\n\n    float4 c0 = UNITY_ACCESS_DOTS_INSTANCED_PROP(float4, Color);\n    float4 c1 = UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_DEFAULT(float4, Color);\n    float4 c2 = UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_CUSTOM_DEFAULT(float4, Color, float4(1, 2, 3, 4));\n}\n")),(0,n.kt)("h4",r({},{id:"constant"}),"Constant"),(0,n.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The metadata value for ",(0,n.kt)("inlineCode",{parentName:"li"},"Color")," is ",(0,n.kt)("inlineCode",{parentName:"li"},"0x00001000"),"."),(0,n.kt)("li",{parentName:"ul"},"The instance index is ",(0,n.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,n.kt)("li",{parentName:"ul"},"Data for instance 0 starts at address 0x1000."),(0,n.kt)("li",{parentName:"ul"},"The most significant bit is not set so data for instance 5 is at the same address as instance 0.")),(0,n.kt)("p",null,"Since the most significant bit is not set, the accessor macros that fall back to defaults don\u2019t access ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData"),". This means that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"c0")," will contain the value from ",(0,n.kt)("inlineCode",{parentName:"li"},"unity_DOTSInstanceData")," address ",(0,n.kt)("inlineCode",{parentName:"li"},"0x1000"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"c1")," will contain the value of the regular material property  ",(0,n.kt)("strong",{parentName:"li"},"Color")," , and cause a compile error if the Color property doesn\u2019t exist."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"c2")," will contain ",(0,n.kt)("inlineCode",{parentName:"li"},"(1, 2, 3, 4)")," since that was passed as the explicit default value.")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"void ExampleConstant()\n{\n    // rawMetadataValue will contain 0x00001000\n    uint rawMetadataValue = UNITY_DOTS_INSTANCED_METADATA_NAME(float4, Color);\n    float4 c0 = UNITY_ACCESS_DOTS_INSTANCED_PROP(float4, Color);\n    float4 c1 = UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_DEFAULT(float4, Color);\n    float4 c2 = UNITY_ACCESS_DOTS_INSTANCED_PROP_WITH_CUSTOM_DEFAULT(float4, Color, float4(1, 2, 3, 4));\n}\n")),(0,n.kt)("h2",r({},{id:"\u8be6\u7ec6\u4fe1\u606f"}),"\u8be6\u7ec6\u4fe1\u606f"),(0,n.kt)("p",null,"It is best practice to initialize the first 64 bytes of all ",(0,n.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData")," buffers to zero and leave them unused. This is because the default metadata value that Unity uses for all metadata values not specified during batch creation is zero. When a shader loads the zero metadata value from the ",(0,n.kt)("inlineCode",{parentName:"p"},"UNITY_ACCESS_DOTS_INSTANCED_PROP")," macro specifically, it loads the value from the address zero since the instance index will be disregarded. Ensuring that the first 64 bytes, which is the size of the largest value type (a float4x4 matrix), are zeroes guarantees that such loads predictably return a result of zero. Otherwise, the shader could load something unpredictable, depending on what happens to be located at address zero."),(0,n.kt)("p",null,"When using DOTS Instancing, Shader Graphs and Shaders that Unity provides use a special convention for transform. To save GPU memory and bandwidth, they store these matrices using only 12 floats instead of the full 16, since four floats are always constant. The format these shaders expect is such that the x, y, and z of each column of the matrix are stored in order. In other words, the first three floats are the x, y, and z of the first column, the next three floats are the x, y, and z of the second column, and so on. They don\u2019t store the w element of each column. The transform matrices this affects are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unity_ObjectToWorld")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unity_WorldToObject")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unity_MatrixPreviousM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unity_MatrixPreviousMI"))),(0,n.kt)("p",null,"The following code sample contains a convenient struct that converts regular four-by-four matrices into the 12 floats convention."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"struct PackedMatrix\n{\n    public float c0x;\n    public float c0y;\n    public float c0z;\n    public float c1x;\n    public float c1y;\n    public float c1z;\n    public float c2x;\n    public float c2y;\n    public float c2z;\n    public float c3x;\n    public float c3y;\n    public float c3z;\n\n    public PackedMatrix(Matrix4x4 m)\n    {\n        c0x = m.m00;\n        c0y = m.m10;\n        c0z = m.m20;\n        c1x = m.m01;\n        c1y = m.m11;\n        c1z = m.m21;\n        c2x = m.m02;\n        c2y = m.m12;\n        c2z = m.m22;\n        c3x = m.m03;\n        c3y = m.m13;\n        c3z = m.m23;\n    }\n}\n")))}h.isMDXComponent=!0}}]);