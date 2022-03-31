"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24313],{35318:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var s=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=s.createContext({}),d=function(e){var r=s.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return s.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},h=s.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(t),u=a,g=h["".concat(p,".").concat(u)]||h[u]||l[u]||n;return t?s.createElement(g,i(i({ref:r},c),{},{components:t})):s.createElement(g,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=h;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<n;d++)i[d]=t[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},41650:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});t(27378);var s=t(35318);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},a.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"Preprocessor directives in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives"},o="Preprocessor directives in HLSL",p={unversionedId:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/Preprocessor directives in HLSL",id:"version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/Preprocessor directives in HLSL",title:"Preprocessor directives in HLSL",description:"Internally, shader compilation has multiple stages. The first stage is  preprocessing , where a program called the preprocessor prepares the code for compilation.  Preprocessor directives  are instructions for the preprocessor.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives.md",sourceDirName:"unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives",permalink:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Preprocessor directives in HLSL",slug:"/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives"},sidebar:"unity",previous:{title:"Unity \u4e2d\u7684 HLSL",permalink:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-shader-programs"},next:{title:"include and include\\_with\\_pragmas directives in HLSL",permalink:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-include-directives"}},d={},c=[],l={toc:c};function h(e){var{components:r}=e,t=n(e,["components"]);return(0,s.kt)("wrapper",a({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",a({},{id:"preprocessor-directives-in-hlsl"}),"Preprocessor directives in HLSL"),(0,s.kt)("p",null,"Internally, ",(0,s.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/shaders/shaders-overview/shader-compilation/shader-compilation"}),"shader compilation")," has multiple stages. The first stage is  ",(0,s.kt)("strong",{parentName:"p"},"preprocessing")," , where a program called the preprocessor prepares the code for compilation.  ",(0,s.kt)("strong",{parentName:"p"},"Preprocessor directives"),"  are instructions for the preprocessor."),(0,s.kt)("p",null,"This section of the manual contains information on Unity-specific ways of working with HLSL preprocessor directives, and HLSL preprocessor directives that are unique to Unity. It does not contain exhaustive documentation on all the preprocessor directives that HLSL supports, or general information on working with preprocessor directives in HLSL. For that information, see the HLSL documentation: ",(0,s.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-preprocessor"}),"Preprocessor directives (HLSL)"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",a({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,s.kt)("th",a({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",a({parentName:"tr"},{align:null}),(0,s.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-include-directives"}),"include and include","_","with","_","pragmas directives in HLSL")),(0,s.kt)("td",a({parentName:"tr"},{align:null}),"Working with ",(0,s.kt)("inlineCode",{parentName:"td"},"#include")," and the Unity-specific ",(0,s.kt)("inlineCode",{parentName:"td"},"#include_with_pragmas")," directives in HLSL in Unity.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",a({parentName:"tr"},{align:null}),(0,s.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-pragma-directives"}),"pragma directives in HLSL")),(0,s.kt)("td",a({parentName:"tr"},{align:null}),"Working with ",(0,s.kt)("inlineCode",{parentName:"td"},"#pragma")," directives in HLSL in Unity.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",a({parentName:"tr"},{align:null}),(0,s.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compile-targets"}),"Targeting shader models and GPU features in HLSL")),(0,s.kt)("td",a({parentName:"tr"},{align:null}),"Using ",(0,s.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to indicate that your shader requires certain GPU features.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",a({parentName:"tr"},{align:null}),(0,s.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-shader-compilation-apis"}),"Targeting graphics APIs and platforms in HLSL")),(0,s.kt)("td",a({parentName:"tr"},{align:null}),"Using ",(0,s.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to target specific graphics API and platforms.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",a({parentName:"tr"},{align:null}),(0,s.kt)("a",a({parentName:"td"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"}),"Declaring and using shader keywords in HLSL")),(0,s.kt)("td",a({parentName:"tr"},{align:null}),"Using ",(0,s.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to declare shader keywords and ",(0,s.kt)("inlineCode",{parentName:"td"},"#if")," directives to indicate that code depends on the state of shader keywords.")))))}h.isMDXComponent=!0}}]);