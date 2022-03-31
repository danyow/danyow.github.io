"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39740],{35318:function(e,r,a){a.d(r,{Zo:function(){return h},kt:function(){return m}});var t=a(27378);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),l=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},h=function(e){var r=l(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=l(a),m=i,u=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return a?t.createElement(u,s(s({ref:r},h),{},{components:a})):t.createElement(u,s({ref:r},h))}));function m(e,r){var a=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=c;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41142:function(e,r,a){a.r(r),a.d(r,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});a(27378);var t=a(35318);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function n(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={id:"Declaring and using shader keywords in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"},o="Declaring and using shader keywords in HLSL",d={unversionedId:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/Declaring and using shader keywords in HLSL",id:"version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/Declaring and using shader keywords in HLSL",title:"Declaring and using shader keywords in HLSL",description:"This page contains information on working with shader keywords in HLSL code. For a general introduction to shader keywords, see Shader keywords. For information on declaring and using shader keywords in Shader Graph, see Keywords.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants.md",sourceDirName:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Declaring and using shader keywords in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"},sidebar:"unity",previous:{title:"include and include\\_with\\_pragmas directives in HLSL",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-include-directives"},next:{title:"pragma directives in HLSL",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives"}},l={},h=[{value:"Declaring shader keywords",id:"declaring-shader-keywords",level:2},{value:"pragma directives for declaring shader keywords",id:"pragma-directives-for-declaring-shader-keywords",level:3},{value:"Declaring a set of keywords",id:"declaring-a-set-of-keywords",level:3},{value:"Declaring multiple sets of keywords",id:"declaring-multiple-sets-of-keywords",level:3},{value:"Creating variants where none of the keywords are defined",id:"creating-variants-where-none-of-the-keywords-are-defined",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:3},{value:"Making behavior conditional with shader keywords",id:"making-behavior-conditional-with-shader-keywords",level:2},{value:"multi_compile shortcuts",id:"multi_compile-shortcuts",level:2}],p={toc:h};function c(e){var{components:r}=e,a=n(e,["components"]);return(0,t.kt)("wrapper",i({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",i({},{id:"declaring-and-using-shader-keywords-in-hlsl"}),"Declaring and using shader keywords in HLSL"),(0,t.kt)("p",null,"This page contains information on working with shader keywords in HLSL code. For a general introduction to shader keywords, see ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords"}),"Shader keywords"),". For information on declaring and using shader keywords in Shader Graph, see ",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@latest?subfolder=/manual/Keywords.html"}),"Keywords"),"."),(0,t.kt)("p",null,"\u672c\u9875\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#declaring-shader-keywords"}),"Declaring shader keywords"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#pragma-directives-for-declaring-shader-keywords"}),"pragma directives for declaring shader keywords")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#declaring-a-set-of-keywords"}),"Declaring a set of keywords")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#declaring-multiple-sets-of-keywords"}),"Declaring multiple sets of keywords")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#creating-variants-where-none-of-the-keywords-are-defined"}),"Creating variants where none of the keywords from a set are defined")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#%E9%99%90%E5%88%B6"}),"Limitations")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#making-behavior-conditional-with-shader-keywords"}),"Making behavior conditional with shader keywords")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"#multi_compile-shortcuts"}),"multi","_","compile shortcuts"))),(0,t.kt)("h2",i({},{id:"declaring-shader-keywords"}),"Declaring shader keywords"),(0,t.kt)("p",null,"In your HLSL code, use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma")," directives to declare shader keywords. You can declare shader keywords in regular graphics shaders (including ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shaders"}),"Surface Shaders"),") and ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/class-compute-shader"}),"compute shaders"),"."),(0,t.kt)("h3",i({},{id:"pragma-directives-for-declaring-shader-keywords"}),"pragma directives for declaring shader keywords"),(0,t.kt)("p",null,"To declare shader keywords, use one of the following ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma")," directives in the HLSL code:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",i({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"th"},"Directive")),(0,t.kt)("th",i({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"#pragma dynamic_branch")),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"Declares a set of keywords for use with dynamic branching.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"#pragma multi_compile")),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"Declares a set of keywords for use with shader variants.",(0,t.kt)("br",null),(0,t.kt)("br",null),"By default, these keywords have global scope and affect all shader stages.",(0,t.kt)("br",null),(0,t.kt)("br",null),"The build process includes all keywords from this set.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"#pragma shader_feature")),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"Declares a set of keywords for use with shader variants, and also instructs the compiler to compile variants where none of these keywords are enabled.",(0,t.kt)("br",null),(0,t.kt)("br",null),"By default, these keywords have global scope and affect all shader stages.",(0,t.kt)("br",null),(0,t.kt)("br",null),"The build process includes keywords from this set that are in use at build time.")))),(0,t.kt)("p",null,"For more information on the difference between these options, and guidance on when to use which one, see ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords#definition-type-%E2%80%9Cmulti-compile%E2%80%9D-%E2%80%9Cshader-feature%E2%80%9D-or-%E2%80%9Cdynamic-branch%E2%80%9D"}),"Shader keywords"),"."),(0,t.kt)("p",null," ",(0,t.kt)("strong",{parentName:"p"},"Note:"),"  If you add a shader to the list of ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/unity-overview/editor-features/comp-manager-group/class-graphics-settings#always-included-shaders"})," ",(0,t.kt)("strong",{parentName:"a"},"Always Included Shaders")," ")," in the Graphics settings window, Unity includes all keywords from all sets in the build, even if they were declared with ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma shader_feature"),"."),(0,t.kt)("p",null,"You can also add suffixes to these directives to modify their behavior:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Add ",(0,t.kt)("inlineCode",{parentName:"li"},"_local")," to indicate that a set of keywords has local scope and cannot be overridden by global keywords; otherwise, the keywords have global scope and can be overridden by global keywords.",(0,t.kt)("br",null),(0,t.kt)("br",null),"You can add this suffix to ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma dynamic_branch"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma multi_compile"),", or ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma shader_feature")," directives; for example, ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma dynamic_branch_local"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma multi_compile_local"),", or ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma shader_feature_local"),"."),(0,t.kt)("li",{parentName:"ul"},"Add ",(0,t.kt)("inlineCode",{parentName:"li"},"_vertex"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"_fragment"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"_hull"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"_domain"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"_geometry"),", or ",(0,t.kt)("inlineCode",{parentName:"li"},"_raytracing")," to indicate that a set of keywords only affects a given shader stage, which can reduce the number of unneeded shader variants. For more information, see ",(0,t.kt)("a",i({parentName:"li"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords#stage-specific-keywords"}),"Shader keywords: Stage-specific keywords"),".",(0,t.kt)("br",null),(0,t.kt)("br",null),"You can add these suffixes to ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma multi_compile")," or ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma shader_feature")," directives, either standalone or after a ",(0,t.kt)("inlineCode",{parentName:"li"},"_local")," modifier; for example, ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma multi_compile_vertex")," or ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma shader_feature_local_fragment"),". This does not work with ",(0,t.kt)("inlineCode",{parentName:"li"},"#pragma dynamic_branch"),".")),(0,t.kt)("p",null,"Additionally, there are some \u201cshortcut\u201d variations of ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma multi_compile")," that add predefined sets of keywords. For more information on these, see ",(0,t.kt)("a",i({parentName:"p"},{href:"#multi_compile-shortcuts"}),"multi","_","compile shortcuts"),"."),(0,t.kt)("h3",i({},{id:"declaring-a-set-of-keywords"}),"Declaring a set of keywords"),(0,t.kt)("p",null,"You declare keywords in sets. A set contains mutually exclusive keywords."),(0,t.kt)("p",null,"To declare a set of keywords, use the appropriate ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma")," directive, followed by a space-delimited list of keywords."),(0,t.kt)("p",null,"This example demonstrates how to declare a set of four keywords:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"#pragma multi_compile QUALITY_LOW QUALITY_MEDIUM QUALITY_HIGH QUALITY_ULTRA\n")),(0,t.kt)("p",null,"What happens internally depends on whether you declare these keywords for use with shader variants or with dynamic branching."),(0,t.kt)("p",null,"When you use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma multi_compile")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma shader_feature")," to use the keywords with shader variants, Unity uses the keywords to create ",(0,t.kt)("inlineCode",{parentName:"p"},"#define")," directives. In the above example, when Unity compiles the shader, it generates four variants: one where QUALITY","_","LOW is defined, one where QUALITY","_","MEDIUM is defined, one where QUALITY","_","HIGH is defined, and one where QUALITY","_","ULTRA is defined."),(0,t.kt)("p",null,"When you use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma dynamic_branch")," to use the keywords with dynamic branching, Unity uses the keywords to create uniform variables. If the above example used ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma dynamic_branch"),", when Unity compiles the shader, it would create four uniform variables with boolean state: one called QUALITY","_","LOW, one called QUALITY","_","MEDIUM, and so on."),(0,t.kt)("h3",i({},{id:"declaring-multiple-sets-of-keywords"}),"Declaring multiple sets of keywords"),(0,t.kt)("p",null,"You can declare multiple sets of keywords to represent different features. To do this, use multiple ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma")," directives."),(0,t.kt)("p",null,"This example demonstrates how to declare one set of four keywords, and another set of three keywords:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"#pragma multi_compile QUALITY_LOW QUALITY_MEDIUM QUALITY_HIGH QUALITY_ULTRA\n#pragma multi_compile COLOR_RED COLOR_GREEN COLOR_BLUE\n")),(0,t.kt)("h3",i({},{id:"creating-variants-where-none-of-the-keywords-are-defined"}),"Creating variants where none of the keywords are defined"),(0,t.kt)("p",null,"When you use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma shader_feature")," to declare a set of keywords, Unity also compiles a variant where none of the keywords in that set are defined. This allows you to define behavior without using an additional keyword. Reducing the number of keywords is beneficial in a few ways: it can reduce the total number of variants that Unity compiles, which improves both build times and runtime performance; it reduces the total number of keywords that a shader uses, which prevents it from hitting ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords#shader-keyword-limits"}),"shader keyword limits"),"; and it makes it simpler to ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords"}),"manage keyword state from C# scripts"),", because there are fewer keywords to enable and disable."),(0,t.kt)("p",null,"This example demonstrates how to declare a set that contains only a single keyword:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"#pragma shader_feature EXAMPLE_ON\n")),(0,t.kt)("p",null,"You can also instruct Unity to do this when you use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma multi_compile"),". To do so, add a \u201cblank\u201d keyword to the set, with a name that is one or more underscores (",(0,t.kt)("inlineCode",{parentName:"p"},"_"),"), like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"#pragma multi_compile __ EXAMPLE_ON\n")),(0,t.kt)("h3",i({},{id:"\u9650\u5236"}),"\u9650\u5236"),(0,t.kt)("p",null,"There are some limitations to how you declare sets of keywords:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"If you declare the same keyword for use with dynamic branching and shader variants, Unity prioritizes dynamic branching and the shader keyword will not work with variants."),(0,t.kt)("li",{parentName:"ul"},"You cannot include the same keyword more than once in the same set; however, you can declare the same keyword in different sets."),(0,t.kt)("li",{parentName:"ul"},"You cannot declare the same set of keywords more than once in a shader program."),(0,t.kt)("li",{parentName:"ul"},"There is a limit to the number of keywords that a shader can use. Every keyword declared in the shader source file and its dependencies count towards this limit. For more information, see ",(0,t.kt)("a",i({parentName:"li"},{href:"/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords#shader-keyword-limits"}),"Shader keyword limits"),".")),(0,t.kt)("h2",i({},{id:"making-behavior-conditional-with-shader-keywords"}),"Making behavior conditional with shader keywords"),(0,t.kt)("p",null,"To mark parts of your shader code as conditional based on whether a given shader keyword is enabled or disabled, use ",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-if"}),"an HLSL ",(0,t.kt)("inlineCode",{parentName:"a"},"if")," statement"),"."),(0,t.kt)("p",null,"This works for both variant keywords and dynamic branching keywords, and means that you can use the same syntax for both. This makes it easy to maintain your code, and also easy to change the way that you use keywords if required. For example, if you find that you need to reduce the number of variants in your application, you can convert a set of keywords to use dynamic branching simply by changing the declaration; you don\u2019t need to also change the conditionals."),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"// Declare a set of keywords\n#pragma multi_compile QUALITY_LOW QUALITY_MEDIUM QUALITY_HIGH QUALITY_ULTRA\n\n\nif (QUALITY_ULTRA)\n{\n// If the keywords work with shader variants, the shader compiler recognises this code as a static branch and compiles it only for the needed variants\n// If the keywords work with dynamic branching, the shader compiler compiles this code as a regular dynamic branch\n}\n")),(0,t.kt)("p",null,"This works because Unity\u2019s shader compiler represents disabled shader variant keywords as constant variables with a value of ",(0,t.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,t.kt)("p",null,"Note: You can also use ","[","#if, #elif, #else, and #endif preprocessor directives","]","(",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-if"}),"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-if"),"), and ","[","#ifdef and #ifndef preprocessor directives","]","(",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-ifdef"}),"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-ifdef"),") with keywords that use shader variants; however, if you do this, it will be more difficult to convert your code to work with dynamic branching in the future."),(0,t.kt)("p",null,"Additionally, the ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma require")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma target")," directives can take keywords as parameters, so that they only apply to variants where given keywords are enabled. For more information, see ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Targeting shader models and GPU features in HLSL"),"."),(0,t.kt)("h2",i({},{id:"multi_compile-shortcuts"}),"multi","_","compile shortcuts"),(0,t.kt)("p",null,"Unity provides several \u201cshortcut\u201d notations for declaring shader keywords that result in certain shader variants."),(0,t.kt)("p",null,"The following shortcuts relate to light, shadow and lightmapping in the Built-in Render Pipeline:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fwdbase")," adds this set of keywords: DIRECTIONAL LIGHTMAP","_","ON DIRLIGHTMAP","_","COMBINED DYNAMICLIGHTMAP","_","ON SHADOWS","_","SCREEN SHADOWS","_","SHADOWMASK LIGHTMAP","_","SHADOW","_","MIXING LIGHTPROBE","_","SH. These variants are needed by ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.ForwardBase.html"}),"PassType.ForwardBase"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fwdbasealpha")," adds this set of keywords: DIRECTIONAL LIGHTMAP","_","ON DIRLIGHTMAP","_","COMBINED DYNAMICLIGHTMAP","_","ON LIGHTMAP","_","SHADOW","_","MIXING VERTEXLIGHT","_","ON LIGHTPROBE","_","SH. These variants are needed by ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.ForwardBase.html"}),"PassType.ForwardBase"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fwdadd")," adds this set of keywords: POINT DIRECTIONAL SPOT POINT","_","COOKIE DIRECTIONAL","_","COOKIE. These variants are needed by ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.ForwardAdd.html"}),"PassType.ForwardAdd"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fwdadd_fullshadows")," adds this set of keywords: POINT DIRECTIONAL SPOT POINT","_","COOKIE DIRECTIONAL","_","COOKIE SHADOWS","_","DEPTH SHADOWS","_","SCREEN SHADOWS","_","CUBE SHADOWS","_","SOFT SHADOWS","_","SHADOWMASK LIGHTMAP","_","SHADOW","_","MIXING. This is the same as ",(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fwdadd"),", but this adds the ability for the lights to have real-time shadows."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_lightpass")," adds this set of keywords: POINT DIRECTIONAL SPOT POINT","_","COOKIE DIRECTIONAL","_","COOKIE SHADOWS","_","DEPTH SHADOWS","_","SCREEN SHADOWS","_","CUBE SHADOWS","_","SOFT SHADOWS","_","SHADOWMASK LIGHTMAP","_","SHADOW","_","MIXING. This is effectively a catch-all shortcut for all functionality related to real-time light and shadows, other than Light Probes."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_shadowcaster")," adds this set of keywords: SHADOWS","_","DEPTH SHADOWS","_","CUBE. These variants are needed by ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.ShadowCaster.html"}),"PassType.ShadowCaster"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_shadowcollector")," adds this set of keywords: SHADOWS","_","SPLIT","_","SPHERES SHADOWS","_","SINGLE","_","CASCADE. It also compiles variants without any of these keywords. These variants are needed for screen-space shadows."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_prepassfinal")," adds this set of keywords: LIGHTMAP","_","ON DIRLIGHTMAP","_","COMBINED DYNAMICLIGHTMAP","_","ON UNITY","_","HDR","_","ON SHADOWS","_","SHADOWMASK LIGHTPROBE","_","SH. It also compiles variants without any of these keywords. These variants are needed by ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.LightPrePassFinal.html"}),"PassType.LightPrePassFinal")," and ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.Deferred.html"}),"PassType.Deferred"),".")),(0,t.kt)("p",null,"The following shortcuts relate to other settings:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_particles")," adds this keyword relating to the Built-in particle system: SOFTPARTICLES","_","ON. It also compiles variants without this keyword. For more information, see ",(0,t.kt)("a",i({parentName:"li"},{href:"/docs/graphics/visual-effects/particle-systems/built-in-particle-system/built-in-particle-system"}),"Built-in Particle System"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_fog")," adds this set of keywords relating to fog: FOG","_","LINEAR, FOG","_","EXP, FOG","_","EXP2. It also compiles variants without any of these keywords. You can control this behavior in the ",(0,t.kt)("a",i({parentName:"li"},{href:"/docs/unity-overview/editor-features/comp-manager-group/class-graphics-settings"}),"Graphics settings")," window."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"multi_compile_instancing")," adds keywords relating to instancing. If the shader uses procedural instancing, it adds this set of keywords: INSTANCING","_","ON PROCEDURAL","_","ON. Otherwise, it adds this keyword: INSTANCING","_","ON. It also compiles variants without any of these keywords. You can control this behavior in the ",(0,t.kt)("a",i({parentName:"li"},{href:"/docs/unity-overview/editor-features/comp-manager-group/class-graphics-settings"}),"Graphics settings")," window.")),(0,t.kt)("p",null,"Most of these shortcuts contain multiple keywords. if you know the project doesn\u2019t need them, you can use ",(0,t.kt)("inlineCode",{parentName:"p"},"#pragma skip_variants")," to remove some of them. For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"# pragma multi_compile_fwdadd\n# pragma skip_variants POINT POINT_COOKIE\n")),(0,t.kt)("p",null,"This tells the compiler to remove the keywords ",(0,t.kt)("inlineCode",{parentName:"p"},"POINT")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"POINT_COOKIE")," from other directives."))}c.isMDXComponent=!0}}]);