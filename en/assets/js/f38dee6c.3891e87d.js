"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74205],{35318:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return u}});var a=t(27378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),p=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return a.createElement(d.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,m=c["".concat(d,".").concat(u)]||c[u]||h[u]||i;return t?a.createElement(m,s(s({ref:r},l),{},{components:t})):a.createElement(m,s({ref:r},l))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},80197:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});t(27378);var a=t(35318);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"Shader variant stripping",slug:"/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping"},o="Shader variant stripping",d={unversionedId:"unity/graphics/shaders/shaders-overview/shader-variants-and-keywords/Shader variant stripping",id:"version-Unity@2022.1/unity/graphics/shaders/shaders-overview/shader-variants-and-keywords/Shader variant stripping",title:"Shader variant stripping",description:"You can prevent shader variants from being compiled. This is called  stripping . Stripping unneeded variants can greatly reduce build times, file size, shader loading times, and runtime memory usage. In larger projects, or projects with complex shaders, this is a very important consideration.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping.md",sourceDirName:"unity/graphics/shaders/shaders-overview/shader-variants-and-keywords",slug:"/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping",permalink:"/en/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Shader variant stripping",slug:"/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-stripping"},sidebar:"unity",previous:{title:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",permalink:"/en/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-collections"},next:{title:"Shader variants, also sometimes called shader permutations, are one way of introducing [conditional behavior](shader-conditional-code) into shader code.",permalink:"/en/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variants"}},p={},l=[{value:"Limiting shader variants when you declare shader keywords",id:"limiting-shader-variants-when-you-declare-shader-keywords",level:3},{value:"Stripping shader variants in the Editor UI",id:"stripping-shader-variants-in-the-editor-ui",level:3},{value:"Stripping shader variants using Editor scripts",id:"stripping-shader-variants-using-editor-scripts",level:3}],h={toc:l};function c(e){var{components:r}=e,t=i(e,["components"]);return(0,a.kt)("wrapper",n({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"shader-variant-stripping"}),"Shader variant stripping"),(0,a.kt)("p",null,"You can prevent ",(0,a.kt)("a",n({parentName:"p"},{href:"/en/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variants"}),"shader variants")," from being compiled. This is called  ",(0,a.kt)("strong",{parentName:"p"},"stripping")," . Stripping unneeded variants can greatly reduce build times, file size, shader loading times, and runtime memory usage. In larger projects, or projects with complex shaders, this is a very important consideration."),(0,a.kt)("h3",n({},{id:"limiting-shader-variants-when-you-declare-shader-keywords"}),"Limiting shader variants when you declare shader keywords"),(0,a.kt)("p",null,"The way that you declare shader keywords can limit the number of variants that they produce:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"shader_feature")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"multi_compile")," where possible."),(0,a.kt)("li",{parentName:"ul"},"Ensure that you don\u2019t define unused keywords with ",(0,a.kt)("inlineCode",{parentName:"li"},"multi_compile"),"."),(0,a.kt)("li",{parentName:"ul"},"Indicate when shader keywords only affect a given shader stage.")),(0,a.kt)("p",null,"For information on doing this in hand-coded shaders, see ",(0,a.kt)("a",n({parentName:"p"},{href:"/en/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/sl-multiple-program-variants"}),"Declaring and using shader keywords in HLSL"),". For information on doing this in Shader Graph, see ",(0,a.kt)("a",n({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@latest?subfolder=/manual/Blackboard.html"}),"Shader Graph: Blackboard"),"."),(0,a.kt)("h3",n({},{id:"stripping-shader-variants-in-the-editor-ui"}),"Stripping shader variants in the Editor UI"),(0,a.kt)("p",null,"There are several places in the Unity Editor UI where you can configure shader stripping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("a",n({parentName:"li"},{href:"/en/docs/unity-overview/editor-features/comp-manager-group/class-graphics-settings#shader-stripping"}),"Graphics Settings window"),", configure the settings in the  ",(0,a.kt)("strong",{parentName:"li"},"Shader stripping"),"  section:"),(0,a.kt)("li",{parentName:"ul"},"Ensure that no unneeded shaders are included in the  ",(0,a.kt)("strong",{parentName:"li"},"Always-included shaders"),"  setting."),(0,a.kt)("li",{parentName:"ul"},"Strip variants relating to GPU instancing, lightmapping, and fog."),(0,a.kt)("li",{parentName:"ul"},"In the Built-in Render Pipeline, if it is not important that your Tier settings are different, ensure that they are identical to each other. For more information, see ",(0,a.kt)("a",n({parentName:"li"},{href:"/en/docs/graphics/render-pipelines/built-in-render-pipeline/graphics-tiers"}),"Graphics tiers"),"."),(0,a.kt)("li",{parentName:"ul"},"In the Universal Render Pipeline (URP), disable unused features in the URP Asset. For more information, see ",(0,a.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest?subfolder=/manual/shader-stripping.html"}),"Shader stripping"),".")),(0,a.kt)("h3",n({},{id:"stripping-shader-variants-using-editor-scripts"}),"Stripping shader variants using Editor scripts"),(0,a.kt)("p",null,"For shader variants that you can\u2019t strip in other ways, you can use the following APIs in an Editor script to perform build-time stripping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Build.IPreprocessShaders.OnProcessShader.html"}),"IPreprocessShaders.OnProcessShader"),": receive a callback before Unity compiles a graphics shader Pass into a build."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Build.IPreprocessComputeShaders.html"}),"IPreprocessComputeShaders.OnProcessComputeShader"),": receive a callback before Unity compiles a compute shader into a build.")),(0,a.kt)("p",null,"For more information on this subject, see the Unity blog post ",(0,a.kt)("a",n({parentName:"p"},{href:"https://blogs.unity3d.com/2018/05/14/stripping-scriptable-shader-variants/"}),"Stripping scriptable shader variants")))}c.isMDXComponent=!0}}]);