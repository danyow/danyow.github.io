"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92182],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),g=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=g(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=g(n),c=a,m=h["".concat(p,".").concat(c)]||h[c]||u[c]||r;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var g=2;g<r;g++)l[g]=n[g];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});n(27378);var i=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"Lightmapping using Enlighten Baked Global Illumination",slug:"/graphics/lighting-overview/lightmappers/gi-enlighten"},o="Lightmapping using Enlighten Baked Global Illumination",p={unversionedId:"unity/graphics/lighting-overview/lightmappers/Lightmapping using Enlighten Baked Global Illumination",id:"version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/Lightmapping using Enlighten Baked Global Illumination",title:"Lightmapping using Enlighten Baked Global Illumination",description:"Enlighten Baked Global Illumination relies on precomputed real-time global illumination data to generate indirect lighting. This can be an advantage, because you can produce new lightmaps fairly quickly after changing the scene\u2019s lighting. However, Enlighten Baked Global Illumination imposes more UV layout limitations than the Progressive Lightmapper.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/gi-enlighten.md",sourceDirName:"unity/graphics/lighting-overview/lightmappers",slug:"/graphics/lighting-overview/lightmappers/gi-enlighten",permalink:"/en/docs/graphics/lighting-overview/lightmappers/gi-enlighten",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/lighting-overview/lightmappers/gi-enlighten.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Lightmapping using Enlighten Baked Global Illumination",slug:"/graphics/lighting-overview/lightmappers/gi-enlighten"},sidebar:"unity",previous:{title:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",permalink:"/en/docs/graphics/lighting-overview/lightmappers/class-lightmap-parameters"},next:{title:"\u73af\u5883\u5149\u906e\u6321",permalink:"/en/docs/graphics/lighting-overview/lightmappers/lighting-baked-ambient-occlusion"}},g={},s=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301",id:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301",level:2},{value:"\u4f7f\u7528 Enlighten \u5149\u7167\u8d34\u56fe",id:"\u4f7f\u7528-enlighten-\u5149\u7167\u8d34\u56fe",level:2},{value:"Disabling the default environment contribution",id:"disabling-the-default-environment-contribution",level:2}],u={toc:s};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",a({},{id:"lightmapping-using-enlighten-baked-global-illumination"}),"Lightmapping using Enlighten Baked Global Illumination"),(0,i.kt)("p",null,"Enlighten Baked Global Illumination relies on precomputed real-time global illumination data to generate indirect lighting. This can be an advantage, because you can produce new lightmaps fairly quickly after changing the scene\u2019s lighting. However, Enlighten Baked Global Illumination imposes more UV layout limitations than the Progressive Lightmapper."),(0,i.kt)("p",null,"Enlighten Baked Global Illumination is deprecated (unlike Enlighten Realtime Global Illumination)."),(0,i.kt)("h2",a({},{id:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301"}),"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.0?subfolder=/manual/Feature-Comparison.html"}),"HDRP")," and ",(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0?subfolder=/manual/universalrp-builtin-feature-comparison.html"}),"URP")," documentation for compatibility information specific to scriptable render pipelines. Unless otherwise specified, the Built-In Render Pipeline supports all features described in this article."),(0,i.kt)("h2",a({},{id:"\u4f7f\u7528-enlighten-\u5149\u7167\u8d34\u56fe"}),"\u4f7f\u7528 Enlighten \u5149\u7167\u8d34\u56fe"),(0,i.kt)("p",null,"To use Enlighten Baked Global Illumination, go to  ",(0,i.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Rendering"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Lighting")," , navigate to  ",(0,i.kt)("strong",{parentName:"p"},"Lightmapping Settings")," , and set  ",(0,i.kt)("strong",{parentName:"p"},"Lightmapper"),"  to  ",(0,i.kt)("strong",{parentName:"p"},"Enlighten")," ."),(0,i.kt)("p",null,"You can perform many of the functions available in this window via scripts, using the ",(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/LightingSettings.html"}),"LightingSettings")," API."),(0,i.kt)("p",null,"The following properties are specific to Enlighten. To expose them, select Enlighten in the Lightmapper control."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",a({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,i.kt)("th",a({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",a({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Final Gather")),(0,i.kt)("td",a({parentName:"tr"},{align:null}),"Calculates the final global illumination light bounce of at the same resolution as the baked lightmap. This improves visual quality, but requires additional time to bake the lighting. If Final Gather is enabled, it exposes the settings Ray Count and Denoising.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",a({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Indirect Resolution")),(0,i.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528\u6b64\u8bbe\u7f6e\u6765\u6307\u5b9a\u5149\u7167\u8d34\u56fe\u7a0b\u5e8f\u7528\u4e8e\u95f4\u63a5\u5149\u7167\u8ba1\u7b97\u7684\u6837\u672c\u6570\u3002\u66f4\u9ad8\u503c\u53ef\u63d0\u9ad8\u5149\u7167\u8d34\u56fe\u7684\u8d28\u91cf\uff0c\u4f46\u4f1a\u589e\u52a0\u5b8c\u6210\u70d8\u7119\u6240\u9700\u8981\u7684\u65f6\u95f4\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,i.kt)("strong",{parentName:"td"},"Ray Count")),(0,i.kt)("td",a({parentName:"tr"},{align:null}),"Specifies the number of rays the lightmapper emits for every final gather point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",a({parentName:"tr"},{align:null}),"->  ",(0,i.kt)("strong",{parentName:"td"},"Denoising")),(0,i.kt)("td",a({parentName:"tr"},{align:null}),"Applies a denoising filter to the final gather output.")))),(0,i.kt)("h2",a({},{id:"disabling-the-default-environment-contribution"}),"Disabling the default environment contribution"),(0,i.kt)("p",null,"Unity automatically generates an ",(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/RenderSettings-ambientProbe.html"}),"ambient probe")," and a ",(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/ReflectionProbe-defaultTexture.html"}),"default Reflection Probe")," to ensure that environment lighting affects your scene and the GameObjects in it by default."),(0,i.kt)("p",null,"To disable the environment contribution in the lighting result for a scene or GameObject that does not have manually created light maps and Light Probes, disable the default Reflection Probe and the ambient probe. For more information, see ",(0,i.kt)("a",a({parentName:"p"},{href:"/en/docs/graphics/sky/using-skymanager#disabling-the-sky-manager"}),"Disabling the SkyManager"),"."))}h.isMDXComponent=!0}}]);