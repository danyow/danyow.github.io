"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28330],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(r),c=n,u=h["".concat(o,".").concat(c)]||h[c]||m[c]||i;return r?a.createElement(u,s(s({ref:t},p),{},{components:r})):a.createElement(u,s({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84753:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});r(27378);var a=r(35318);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"pragma directives in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives"},l="pragma directives in HLSL",o={unversionedId:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/pragma directives in HLSL",id:"version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/pragma directives in HLSL",title:"pragma directives in HLSL",description:"In HLSL, #pragma directives are a type of preprocessor directive. They provide additional information to the shader compiler that isn\u2019t covered by other types of preprocessor directive.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives.md",sourceDirName:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"pragma directives in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives"},sidebar:"unity",previous:{title:"Declaring and using shader keywords in HLSL",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"},next:{title:"Targeting graphics APIs and platforms in HLSL",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compilation-apis"}},d={},p=[{value:"\u4f7f\u7528 pragma \u6307\u4ee4",id:"\u4f7f\u7528-pragma-\u6307\u4ee4",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"List of supported pragma directives",id:"list-of-supported-pragma-directives",level:2},{value:"Surface Shaders",id:"surface-shaders",level:3},{value:"\u7740\u8272\u5668\u9636\u6bb5",id:"\u7740\u8272\u5668\u9636\u6bb5",level:3},{value:"\u7740\u8272\u5668\u53d8\u4f53\u548c\u5173\u952e\u5b57",id:"\u7740\u8272\u5668\u53d8\u4f53\u548c\u5173\u952e\u5b57",level:3},{value:"GPU requirements and shader model support",id:"gpu-requirements-and-shader-model-support",level:3},{value:"\u56fe\u5f62 API",id:"\u56fe\u5f62-api",level:3},{value:"\u5176\u4ed6 pragma \u6307\u4ee4",id:"\u5176\u4ed6-pragma-\u6307\u4ee4",level:3}],m={toc:p};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pragma-directives-in-hlsl"}),"pragma directives in HLSL"),(0,a.kt)("p",null,"In HLSL, ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives are a type of ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives"}),"preprocessor directive"),". They provide additional information to the shader compiler that isn\u2019t covered by other types of preprocessor directive."),(0,a.kt)("h2",n({},{id:"\u4f7f\u7528-pragma-\u6307\u4ee4"}),"\u4f7f\u7528 pragma \u6307\u4ee4"),(0,a.kt)("p",null,"You can put ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives anywhere in your HLSL code, but it is a common convention to put them at the start, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"#pragma target 3.0\n#pragma exclude_renderers vulkan\n#pragma vertex vert\n#pragma fragment frag\n\n// The rest of your HLSL code goes here\n\n")),(0,a.kt)("h2",n({},{id:"\u9650\u5236"}),"\u9650\u5236"),(0,a.kt)("p",null,"There are some limitations around the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can use ",(0,a.kt)("inlineCode",{parentName:"li"},"#pragma"),"directives inside conditional (",(0,a.kt)("inlineCode",{parentName:"li"},"#if"),") directives if the expression depends only on:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Any custom ",(0,a.kt)("inlineCode",{parentName:"li"},"#define")," directives in your own code"),(0,a.kt)("li",{parentName:"ul"},"The following platform keywords: ",(0,a.kt)("inlineCode",{parentName:"li"},"SHADER_API_MOBILE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SHADER_API_DESKTOP"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UNITY_NO_RGBM"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UNITY_USE_NATIVE_HDR"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UNITY_FRAMEBUFFER_FETCH_AVAILABLE"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"UNITY_NO_CUBEMAP_ARRAY")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"UNITY_VERSION")," macro"))),(0,a.kt)("li",{parentName:"ul"},"You can only use Unity-specific ",(0,a.kt)("inlineCode",{parentName:"li"},"#pragma")," directives in ",(0,a.kt)("inlineCode",{parentName:"li"},".shader")," files, and in files that you include with the ",(0,a.kt)("inlineCode",{parentName:"li"},"#include_with_pragmas")," directive. Unity does not support them in files that you include with the ",(0,a.kt)("inlineCode",{parentName:"li"},"#include")," directive; the compiler ignores them."),(0,a.kt)("li",{parentName:"ul"},"You can only use standard HLSL ",(0,a.kt)("inlineCode",{parentName:"li"},"#pragma")," directives in files that you include with the ",(0,a.kt)("inlineCode",{parentName:"li"},"#include")," directive. Unity does not support them in ",(0,a.kt)("inlineCode",{parentName:"li"},".shader")," files, or in files that you include with an ",(0,a.kt)("inlineCode",{parentName:"li"},"#include_with_pragmas")," directive; the compiler ignores them.")),(0,a.kt)("h2",n({},{id:"list-of-supported-pragma-directives"}),"List of supported pragma directives"),(0,a.kt)("p",null,"Unity supports all ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives that are part of standard HLSL, as long as these directives are in regular include files. For more information on these directives, see the HLSL documentation: ",(0,a.kt)("a",n({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-pragma"}),"pragma Directive"),"."),(0,a.kt)("p",null,"In addition, Unity supports the following Unity-specific ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives:"),(0,a.kt)("h3",n({},{id:"surface-shaders"}),"Surface Shaders"),(0,a.kt)("p",null,"If you are writing a ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shaders"}),"Surface Shader"),", use this directive to tell the compiler which function to use as the  ",(0,a.kt)("strong",{parentName:"p"},"surface function")," , and pass data to that function."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bed\u53e5")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma surface &lt;surface function&gt; &lt;lighting model&gt; &lt;optional parameters&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the surface shader, so that it works with the given lighting model. For more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shaders"}),"Surface Shaders"),".")))),(0,a.kt)("h3",n({},{id:"\u7740\u8272\u5668\u9636\u6bb5"}),"\u7740\u8272\u5668\u9636\u6bb5"),(0,a.kt)("p",null,"If you are writing a regular graphics shader, use these directives to tell the compiler which functions to use for different shader stages. The ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma vertex")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma fragment")," directives are required, but other stages are optional."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bed\u53e5")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma vertex &lt;name&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the vertex shader. Replace ","<","name",">"," with the function name. This directive is required in regular graphics shaders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma fragment &lt;name&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the fragment shader. Replace ","<","name",">"," with the function name. This directive is required in regular graphics shaders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma geometry &lt;name&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the geometry shader. Replace ","<","name",">"," with the function name. This option automatically turns on ",(0,a.kt)("inlineCode",{parentName:"td"},"#pragma require geometry"),"; for more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Targeting shader models and GPU features in HLSL"),".",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Note")," : Metal does not support geometry shaders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma hull &lt;name&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the DirectX 11 hull shader. Replace ","<","name",">"," with the function name. This automatically adds ",(0,a.kt)("inlineCode",{parentName:"td"},"#pragma require tessellation"),"; for more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Targeting shader models and GPU features in HLSL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma domain &lt;name&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile the function with the given name as the DirectX 11 domain shader. Replace ","<","name",">"," with the function name. This option automatically turns on ",(0,a.kt)("inlineCode",{parentName:"td"},"#pragma require tessellation"),"; for more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Targeting shader models and GPU features in HLSL"),".")))),(0,a.kt)("h3",n({},{id:"\u7740\u8272\u5668\u53d8\u4f53\u548c\u5173\u952e\u5b57"}),"\u7740\u8272\u5668\u53d8\u4f53\u548c\u5173\u952e\u5b57"),(0,a.kt)("p",null,"Use these directives to tell the shader compiler how to handle ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variants-and-keywords"}),"shader variants and keywords"),". For more information, see ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"}),"Declaring and using shader keywords in HLSL"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Directive")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma multi_compile &lt;keywords&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Declares a collection of keywords. The compiler includes all of the keywords in the build.",(0,a.kt)("br",null),(0,a.kt)("br",null),"You can use suffixes such as ",(0,a.kt)("inlineCode",{parentName:"td"},"_local")," to set additional options.",(0,a.kt)("br",null),(0,a.kt)("br",null),"For more information and a list of supported suffixes, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"}),"Declaring and using shader keywords in HLSL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma shader_feature &lt;keywords&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Declares a collection of keywords. The compiler excludes unused keywords from the build.",(0,a.kt)("br",null),(0,a.kt)("br",null),"You can use suffixes such as ",(0,a.kt)("inlineCode",{parentName:"td"},"_local")," to set additional options.",(0,a.kt)("br",null),(0,a.kt)("br",null),"For more information and a list of supported suffixes, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"}),"Declaring and using shader keywords in HLSL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma hardware_tier_variants &lt;values&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Built-in Render Pipeline only: Add keywords for  ",(0,a.kt)("strong",{parentName:"td"},"graphics tiers"),"  when compiling for a given graphics API. For more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/render-pipelines/built-in-render-pipeline/graphics-tiers"}),"Graphics tiers"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma skip_variants &lt;list of keywords&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Strip specified keywords.")))),(0,a.kt)("h3",n({},{id:"gpu-requirements-and-shader-model-support"}),"GPU requirements and shader model support"),(0,a.kt)("p",null,"Use these directives to tell the compiler that your shader requires specific GPU features."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bed\u53e5")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma target &lt;value&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The minimum shader model that this shader program is compatible with. Replace ","<","value",">"," with a valid value. For a list of valid values, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Shader compilation: Targeting shader models and GPU features in HLSL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma require &lt;value&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The minimum GPU features that this shader is compatible with. Replace ","<","value",">"," with a valid value, or multiple valid values separated by a space. For a list of valid values, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Shader compilation: Targeting shader models and GPU features in HLSL"),".")))),(0,a.kt)("h3",n({},{id:"\u56fe\u5f62-api"}),"\u56fe\u5f62 API"),(0,a.kt)("p",null,"Use these directives to tell Unity to include or exclude code for a given graphics API."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bed\u53e5")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma only_renderers &lt;value&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Compile this shader program only for given graphics APIs. Replace ","<","values",">"," with a space-delimited list of valid values. For more information and a list of valid values, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compilation-apis"}),"Targeting graphics APIs and platforms in HLSL"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma exclude_renderers &lt;value&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Do not compile this shader program for given graphics APIs. Replace ","<","value",">"," with a space-delimited list of valid values. For more information and a list of valid values, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compilation-apis"}),"Targeting graphics APIs and platforms in HLSL"),".")))),(0,a.kt)("h3",n({},{id:"\u5176\u4ed6-pragma-\u6307\u4ee4"}),"\u5176\u4ed6 pragma \u6307\u4ee4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bed\u53e5")),(0,a.kt)("th",n({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma instancing_options &lt;options&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Enable GPU instancing in this shader, with given options. For more information, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/graphics-performance-profiling/optimizing-draw-calls/gpuinstancing/gpuinstancing"}),"GPU instancing"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma once")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Put this directive in a file to ensure that the compiler includes the file only once in a shader program.",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Note:"),"  Unity only supports this directive when the ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shaders-overview/shader-compilation/shader-compilation"}),"Caching Shader Preprocessor")," is enabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma enable_d3d11_debug_symbols")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Generates shader debug symbols for supported graphics APIs, and disables optimizations for all graphics APIs. Use this for debugging shader code in an external tool.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Unity generates debug symbols for Vulkan, DirectX 11 and 12, and supported console platforms.",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"Warning:"),"  Using this results in an increased file size and reduced shader performance. When you have finished debugging your shaders and you are ready to make a final build of your application, remove this line from your shader source code and recompile the shaders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma skip_optimizations &lt;value&gt;")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Forces optimizations off for given graphics APIs. Replace ","<","values",">"," with a space-delimited list of valid values. For a list of valid values, see ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compilation-apis"}),"Targeting graphics APIs and platforms in HLSL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma hlslcc_bytecode_disassembly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u5c06\u53cd\u6c47\u7f16\u7684 HLSLcc \u5b57\u8282\u7801\u5d4c\u5165\u5230\u8f6c\u6362\u7684\u7740\u8272\u5668\u4e2d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma disable_fastmath")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u542f\u7528\u6d89\u53ca NaN \u5904\u7406\u7684\u7cbe\u786e IEEE 754 \u89c4\u5219\u3002\u5f53\u524d\u8fd9\u4ec5\u5f71\u54cd Metal \u5e73\u53f0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma editor_sync_compilation")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u5f3a\u5236\u8fdb\u884c\u540c\u6b65\u7f16\u8bd1\u3002\u8fd9\u4ec5\u5f71\u54cd Unity \u7f16\u8f91\u5668\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/graphics/shaders/shaders-overview/shader-compilation/asynchronous-shader-compilation"}),"\u5f02\u6b65\u7740\u8272\u5668\u7f16\u8bd1"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#pragma enable_cbuffer")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u4f7f\u7528 HLSLSupport \u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"CBUFFER_START(name)")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"CBUFFER_END")," \u5b8f\u65f6\uff0c\u5373\u4f7f\u5f53\u524d\u5e73\u53f0\u4e0d\u652f\u6301\u5e38\u91cf\u7f13\u51b2\u533a\uff0c\u4e5f\u8981\u53d1\u51fa ",(0,a.kt)("inlineCode",{parentName:"td"},"cbuffer(name)"),"\u3002")))))}h.isMDXComponent=!0}}]);