"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80104],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",slug:"/graphics/shaders/shader-writing/sl-shader-programs/sl-data-types-and-precision"},p="\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",o={unversionedId:"unity/graphics/shaders/shader-writing/sl-shader-programs/\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",id:"version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",title:"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",description:"Unity \u4e2d\u7684\u6807\u51c6\u7740\u8272\u5668\u8bed\u8a00\u4e3a HLSL\uff0c\u652f\u6301\u4e00\u822c HLSL \u6570\u636e\u7c7b\u578b\u3002\u4f46\u662f\uff0cUnity \u5bf9 HLSL \u7c7b\u578b\u6709\u4e00\u4e9b\u8865\u5145\uff0c\u7279\u522b\u662f\u4e3a\u4e86\u5728\u79fb\u52a8\u5e73\u53f0\u4e0a\u63d0\u4f9b\u66f4\u597d\u7684\u652f\u6301\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/shaders/shader-writing/sl-shader-programs/sl-data-types-and-precision.md",sourceDirName:"unity/graphics/shaders/shader-writing/sl-shader-programs",slug:"/graphics/shaders/shader-writing/sl-shader-programs/sl-data-types-and-precision",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-data-types-and-precision",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",slug:"/graphics/shaders/shader-writing/sl-shader-programs/sl-data-types-and-precision"},sidebar:"unity",previous:{title:"\u5185\u7f6e\u5b8f",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-builtin-macros"},next:{title:"\u4f7f\u7528 Cg/HLSL \u8bbf\u95ee\u7740\u8272\u5668\u5c5e\u6027",permalink:"/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-properties-in-programs"}},d={},s=[{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:2},{value:"\u9ad8\u7cbe\u5ea6\uff1a<code>float</code>",id:"\u9ad8\u7cbe\u5ea6float",level:4},{value:"\u4e2d\u7b49\u7cbe\u5ea6\uff1a<code>half</code>",id:"\u4e2d\u7b49\u7cbe\u5ea6half",level:4},{value:"\u4f4e\u7cbe\u5ea6\uff1a<code>fixed</code>",id:"\u4f4e\u7cbe\u5ea6fixed",level:4},{value:"\u6574\u6570\u6570\u636e\u7c7b\u578b",id:"\u6574\u6570\u6570\u636e\u7c7b\u578b",level:4},{value:"\u590d\u5408\u77e2\u91cf/\u77e9\u9635\u7c7b\u578b",id:"\u590d\u5408\u77e2\u91cf\u77e9\u9635\u7c7b\u578b",level:2},{value:"\u7eb9\u7406/\u91c7\u6837\u5668\u7c7b\u578b",id:"\u7eb9\u7406\u91c7\u6837\u5668\u7c7b\u578b",level:2},{value:"\u7cbe\u5ea6\u3001\u786c\u4ef6\u652f\u6301\u548c\u6027\u80fd",id:"\u7cbe\u5ea6\u786c\u4ef6\u652f\u6301\u548c\u6027\u80fd",level:2},{value:"\u652f\u6301\u65e0\u7a77\u5927\u3001\u975e\u6570\u5b57\u548c\u5176\u4ed6\u7279\u6b8a\u6d6e\u70b9\u503c",id:"\u652f\u6301\u65e0\u7a77\u5927\u975e\u6570\u5b57\u548c\u5176\u4ed6\u7279\u6b8a\u6d6e\u70b9\u503c",level:4},{value:"\u5916\u90e8 GPU \u6587\u6863",id:"\u5916\u90e8-gpu-\u6587\u6863",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"\u53e6\u8bf7\u53c2\u9605",level:2}],u={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6"}),"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6"),(0,r.kt)("p",null,"Unity \u4e2d\u7684\u6807\u51c6\u7740\u8272\u5668\u8bed\u8a00\u4e3a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-shader-programs"}),"HLSL"),"\uff0c\u652f\u6301\u4e00\u822c HLSL \u6570\u636e\u7c7b\u578b\u3002\u4f46\u662f\uff0cUnity \u5bf9 HLSL \u7c7b\u578b\u6709\u4e00\u4e9b\u8865\u5145\uff0c\u7279\u522b\u662f\u4e3a\u4e86\u5728\u79fb\u52a8\u5e73\u53f0\u4e0a\u63d0\u4f9b\u66f4\u597d\u7684\u652f\u6301\u3002"),(0,r.kt)("h2",a({},{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"}),"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"\u7740\u8272\u5668\u4e2d\u7684\u5927\u591a\u6570\u8ba1\u7b97\u662f\u5bf9\u6d6e\u70b9\u6570\uff08\u5728 C# \u7b49\u5e38\u89c4\u7f16\u7a0b\u8bed\u8a00\u4e2d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\uff09\u8fdb\u884c\u7684\u3002\u6d6e\u70b9\u7c7b\u578b\u6709\u51e0\u79cd\u53d8\u4f53\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"half")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed"),"\uff08\u4ee5\u53ca\u5b83\u4eec\u7684\u77e2\u91cf/\u77e9\u9635\u53d8\u4f53\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"half3")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"float4x4"),"\uff09\u3002\u8fd9\u4e9b\u7c7b\u578b\u7684\u7cbe\u5ea6\u4e0d\u540c\uff08\u56e0\u6b64\u6027\u80fd\u6216\u529f\u8017\u4e5f\u4e0d\u540c\uff09\uff1a"),(0,r.kt)("h4",a({},{id:"\u9ad8\u7cbe\u5ea6float"}),"\u9ad8\u7cbe\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"float")),(0,r.kt)("p",null,"\u6700\u9ad8\u7cbe\u5ea6\u6d6e\u70b9\u503c\uff1b\u4e00\u822c\u662f 32 \u4f4d\uff08\u5c31\u50cf\u5e38\u89c4\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\uff09\u3002"),(0,r.kt)("p",null,"\u5b8c\u6574\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," \u7cbe\u5ea6\u901a\u5e38\u7528\u4e8e\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u3001\u7eb9\u7406\u5750\u6807\u6216\u6d89\u53ca\u590d\u6742\u51fd\u6570\uff08\u5982\u4e09\u89d2\u51fd\u6570\u6216\u5e42/\u53d6\u5e42\uff09\u7684\u6807\u91cf\u8ba1\u7b97\u3002"),(0,r.kt)("h4",a({},{id:"\u4e2d\u7b49\u7cbe\u5ea6half"}),"\u4e2d\u7b49\u7cbe\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"half")),(0,r.kt)("p",null,"\u4e2d\u7b49\u7cbe\u5ea6\u6d6e\u70b9\u503c\uff1b\u901a\u5e38\u4e3a 16 \u4f4d\uff08\u8303\u56f4\u4e3a \u201360000 \u81f3 +60000\uff0c\u7cbe\u5ea6\u7ea6\u4e3a 3 \u4f4d\u5c0f\u6570\uff09\u3002"),(0,r.kt)("p",null,"\u534a\u7cbe\u5ea6\u5bf9\u4e8e\u77ed\u77e2\u91cf\u3001\u65b9\u5411\u3001\u5bf9\u8c61\u7a7a\u95f4\u4f4d\u7f6e\u3001\u9ad8\u52a8\u6001\u8303\u56f4\u989c\u8272\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("h4",a({},{id:"\u4f4e\u7cbe\u5ea6fixed"}),"\u4f4e\u7cbe\u5ea6\uff1a",(0,r.kt)("inlineCode",{parentName:"h4"},"fixed")),(0,r.kt)("p",null,"\u6700\u4f4e\u7cbe\u5ea6\u7684\u5b9a\u70b9\u503c\u3002\u901a\u5e38\u662f 11 \u4f4d\uff0c\u8303\u56f4\u4ece \u20132.0 \u5230 +2.0\uff0c\u7cbe\u5ea6\u4e3a 1/256\u3002"),(0,r.kt)("p",null,"\u56fa\u5b9a\u7cbe\u5ea6\u5bf9\u4e8e\u5e38\u89c4\u989c\u8272\uff08\u901a\u5e38\u5b58\u50a8\u5728\u5e38\u89c4\u7eb9\u7406\u4e2d\uff09\u4ee5\u53ca\u5bf9\u5b83\u4eec\u6267\u884c\u7b80\u5355\u8fd0\u7b97\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("h4",a({},{id:"\u6574\u6570\u6570\u636e\u7c7b\u578b"}),"\u6574\u6570\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,"\u6574\u6570\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"int")," \u6570\u636e\u7c7b\u578b\uff09\u901a\u5e38\u7528\u4f5c\u5faa\u73af\u8ba1\u6570\u5668\u6216\u6570\u7ec4\u7d22\u5f15\u3002\u4e3a\u6b64\uff0c\u5b83\u4eec\u901a\u5e38\u53ef\u4ee5\u5728\u5404\u79cd\u5e73\u53f0\u4e0a\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u5e73\u53f0\u7684\u4e0d\u540c\uff0cGPU \u53ef\u80fd\u4e0d\u652f\u6301\u6574\u6570\u7c7b\u578b\u3002\u4f8b\u5982\uff0cDirect3D 9 \u548c OpenGL ES 2.0 GPU \u4ec5\u5bf9\u6d6e\u70b9\u6570\u636e\u8fdb\u884c\u8fd0\u7b97\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u76f8\u5f53\u590d\u6742\u7684\u6d6e\u70b9\u6570\u5b66\u6307\u4ee4\u6765\u6a21\u62df\u7b80\u5355\u7684\u6574\u6570\u8868\u8fbe\u5f0f\uff08\u6d89\u53ca\u4f4d\u8fd0\u7b97\u6216\u903b\u8f91\u8fd0\u7b97\uff09\u3002"),(0,r.kt)("p",null,"Direct3D 11\u3001OpenGL ES 3\u3001Metal \u548c\u5176\u4ed6\u73b0\u4ee3\u5e73\u53f0\u90fd\u5bf9\u6574\u6570\u6570\u636e\u7c7b\u578b\u6709\u9002\u5f53\u7684\u652f\u6301\uff0c\u56e0\u6b64\u4f7f\u7528\u4f4d\u79fb\u4f4d\u548c\u4f4d\u5c4f\u853d\u53ef\u4ee5\u6309\u9884\u671f\u5de5\u4f5c\u3002"),(0,r.kt)("h2",a({},{id:"\u590d\u5408\u77e2\u91cf\u77e9\u9635\u7c7b\u578b"}),"\u590d\u5408\u77e2\u91cf/\u77e9\u9635\u7c7b\u578b"),(0,r.kt)("p",null,"HLSL \u5177\u6709\u4ece\u57fa\u672c\u7c7b\u578b\u521b\u5efa\u7684\u5185\u7f6e\u77e2\u91cf\u548c\u77e9\u9635\u7c7b\u578b\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"float3")," \u662f\u4e00\u4e2a 3D \u77e2\u91cf\uff0c\u5177\u6709\u5206\u91cf .x\u3001.y \u548c .z\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"half4")," \u662f\u4e00\u4e2a\u4e2d\u7b49\u7cbe\u5ea6 4D \u77e2\u91cf\uff0c\u5177\u6709\u5206\u91cf .x\u3001.y\u3001.z \u548c .w\u3002\u6216\u8005\uff0c\u53ef\u4f7f\u7528 .r\u3001.g\u3001.b \u548c .a \u5206\u91cf\u6765\u5bf9\u77e2\u91cf\u7f16\u5236\u7d22\u5f15\uff0c\u8fd9\u5728\u5904\u7406\u989c\u8272\u65f6\u5f88\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u77e9\u9635\u7c7b\u578b\u4ee5\u7c7b\u4f3c\u7684\u65b9\u5f0f\u6784\u5efa\uff1b\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"float4x4")," \u662f\u4e00\u4e2a 4x4 \u53d8\u6362\u77e9\u9635\u3002\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u5e73\u53f0\u4ec5\u652f\u6301\u65b9\u5f62\u77e9\u9635\uff0c\u6700\u4e3b\u8981\u7684\u662f OpenGL ES 2.0\u3002"),(0,r.kt)("h2",a({},{id:"\u7eb9\u7406\u91c7\u6837\u5668\u7c7b\u578b"}),"\u7eb9\u7406/\u91c7\u6837\u5668\u7c7b\u578b"),(0,r.kt)("p",null,"\u901a\u5e38\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u5728 HLSL \u4ee3\u7801\u4e2d\u58f0\u660e\u7eb9\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"sampler2D _MainTex;\nsamplerCUBE _Cubemap;\n")),(0,r.kt)("p",null,"For mobile platforms, these translate into \u201clow precision samplers\u201d, i.e. the textures are expected to have low precision data in them. You can change the the default sampler precision for the whole Unity project in the Player Settings using the ",(0,r.kt)("em",{parentName:"p"},"Shader precision model")," dropdown. If you know your texture contains HDR colors, you might want to use half precision sampler:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"sampler2D_half _MainTex;\nsamplerCUBE_half _Cubemap;\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u5982\u679c\u7eb9\u7406\u5305\u542b\u5b8c\u6574\u6d6e\u70b9\u7cbe\u5ea6\u6570\u636e\uff08\u4f8b\u5982",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/cameras-overview/sl-camera-depth-texture"}),"\u6df1\u5ea6\u7eb9\u7406"),"\uff09\uff0c\u8bf7\u4f7f\u7528\u5b8c\u6574\u7cbe\u5ea6\u91c7\u6837\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"sampler2D_float _MainTex;\nsamplerCUBE_float _Cubemap;\n")),(0,r.kt)("h2",a({},{id:"\u7cbe\u5ea6\u786c\u4ef6\u652f\u6301\u548c\u6027\u80fd"}),"\u7cbe\u5ea6\u3001\u786c\u4ef6\u652f\u6301\u548c\u6027\u80fd"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"half"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," \u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e2a\u96be\u9898\u662f\uff1aPC GPU  ",(0,r.kt)("strong",{parentName:"p"},"\u59cb\u7ec8")," \u4e3a\u9ad8\u7cbe\u5ea6\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u6240\u6709 PC (Windows/Mac/Linux) GPU\uff0c\u5728\u7740\u8272\u5668\u4e2d\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"half")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," \u6570\u636e\u7c7b\u578b\u90fd\u65e0\u5173\u7d27\u8981\u3002\u8fd9\u4e9b GPU \u5c06\u59cb\u7ec8\u4ee5 32 \u4f4d\u6d6e\u70b9\u7cbe\u5ea6\u6765\u8ba1\u7b97\u6240\u6709\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4ec5\u5f53\u76ee\u6807\u5e73\u53f0\u662f\u79fb\u52a8\u7aef GPU \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"half")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," \u7c7b\u578b\u624d\u53d8\u5f97\u91cd\u8981\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u7c7b\u578b\u4e3b\u8981\u9762\u4e34\u529f\u8017\uff08\u6709\u65f6\u5019\u662f\u6027\u80fd\uff09\u7ea6\u675f\u3002\u8bf7\u8bb0\u4f4f\uff0c\u8981\u786e\u8ba4\u662f\u5426\u9047\u5230\u7cbe\u5ea6/\u6570\u503c\u95ee\u9898\uff0c\u5fc5\u987b\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u6d4b\u8bd5\u7740\u8272\u5668\u3002"),(0,r.kt)("p",null,"\u5373\u4f7f\u5728\u79fb\u52a8\u7aef GPU \u4e0a\uff0c\u4e0d\u540c\u7684\u7cbe\u5ea6\u652f\u6301\u4e5f\u4f1a\u56e0 GPU \u4ea7\u54c1\u7cfb\u5217\u800c\u5f02\u3002\u4e0b\u9762\u6982\u8ff0\u4e86\u4e2a\u6bcf\u4e2a\u79fb\u52a8\u7aef GPU \u4ea7\u54c1\u7cfb\u5217\u5982\u4f55\u5904\u7406\u6bcf\u4e2a\u6d6e\u70b9\u7c7b\u578b\uff08\u4ee5\u7528\u4e8e\u8be5\u4ea7\u54c1\u7cfb\u5217\u7684\u4f4d\u6570\u6765\u8868\u793a\uff09\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"GPU \u4ea7\u54c1\u7cfb\u5217"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u6d6e\u70b9\u7cbe\u5ea6"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u534a\u7cbe\u5ea6"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u56fa\u5b9a\u7cbe\u5ea6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"PowerVR \u7cfb\u5217 6/7"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"PowerVR SGX 5xx"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Qualcomm Adreno 4xx/3xx"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Qualcomm Adreno 2xx"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32 \u9876\u70b9\uff0c24 \u7247\u5143"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ARM Mali T6xx/7xx"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ARM Mali 400/450"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32 \u9876\u70b9\uff0c16 \u7247\u5143"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NVIDIA X1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NVIDIA K1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NVIDIA Tegra 3/4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"\u5927\u591a\u6570\u73b0\u4ee3\u79fb\u52a8\u7aef GPU \u5b9e\u9645\u4e0a\u53ea\u652f\u6301 32 \u4f4d\u6570\u5b57\uff08\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," \u7c7b\u578b\uff09\u6216 16 \u4f4d\u6570\u5b57\uff08\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"half")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed")," \u7c7b\u578b\uff09\u3002\u4e00\u4e9b\u8f83\u65e7\u7684 GPU \u5bf9\u9876\u70b9\u7740\u8272\u5668\u548c\u7247\u5143\u7740\u8272\u5668\u8ba1\u7b97\u5177\u6709\u4e0d\u540c\u7684\u7cbe\u5ea6\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u8f83\u4f4e\u7684\u7cbe\u5ea6\u901a\u5e38\u53ef\u4ee5\u66f4\u5feb\uff0c\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u6539\u8fdb\u7684 GPU \u5bc4\u5b58\u5668\u5206\u914d\uff0c\u6216\u662f\u7531\u4e8e\u67d0\u4e9b\u4f4e\u7cbe\u5ea6\u6570\u5b66\u8fd0\u7b97\u7684\u7279\u6b8a\u201c\u5feb\u901f\u8def\u5f84\u201d\u6267\u884c\u5355\u5143\u3002\u5373\u4f7f\u6ca1\u6709\u539f\u59cb\u6027\u80fd\u4f18\u52bf\uff0c\u4f7f\u7528\u8f83\u4f4e\u7684\u7cbe\u5ea6\u901a\u5e38\u4e5f\u4f1a\u964d\u4f4e GPU \u7684\u529f\u8017\uff0c\u4ece\u800c\u5ef6\u957f\u7535\u6c60\u7eed\u822a\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u7ecf\u9a8c\u6cd5\u5219\u662f\u5168\u90e8\u90fd\u4ece\u534a\u7cbe\u5ea6\u5f00\u59cb\uff08\u4f46\u4f4d\u7f6e\u548c\u7eb9\u7406\u5750\u6807\u9664\u5916\uff09\u3002\u4ec5\u5f53\u534a\u7cbe\u5ea6\u5bf9\u4e8e\u8ba1\u7b97\u7684\u67d0\u4e9b\u90e8\u5206\u4e0d\u8db3\u65f6\uff0c\u624d\u589e\u52a0\u7cbe\u5ea6\u3002"),(0,r.kt)("h4",a({},{id:"\u652f\u6301\u65e0\u7a77\u5927\u975e\u6570\u5b57\u548c\u5176\u4ed6\u7279\u6b8a\u6d6e\u70b9\u503c"}),"\u652f\u6301\u65e0\u7a77\u5927\u3001\u975e\u6570\u5b57\u548c\u5176\u4ed6\u7279\u6b8a\u6d6e\u70b9\u503c"),(0,r.kt)("p",null,"\u5bf9\u7279\u6b8a\u6d6e\u70b9\u503c\u7684\u652f\u6301\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8fd0\u884c\u7684 GPU \u4ea7\u54c1\u7cfb\u5217\uff08\u4e3b\u8981\u662f\u79fb\u52a8\u7aef\uff09\u3002"),(0,r.kt)("p",null,"\u652f\u6301 Direct3D 10 \u7684\u6240\u6709 PC GPU \u90fd\u652f\u6301\u975e\u5e38\u660e\u786e\u7684 IEEE 754 \u6d6e\u70b9\u6807\u51c6\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5728 CPU \u4e0a\uff0c\u6d6e\u70b9\u6570\u7684\u884c\u4e3a\u4e0e\u5e38\u89c4\u7f16\u7a0b\u8bed\u8a00\u5b8c\u5168\u76f8\u540c\u3002"),(0,r.kt)("p",null,"\u79fb\u52a8\u7aef GPU \u7684\u652f\u6301\u7a0b\u5ea6\u53ef\u80fd\u7a0d\u6709\u4e0d\u540c\u3002\u5728\u67d0\u4e9b\u79fb\u52a8\u7aef GPU \u4e2d\uff0c\u5c06\u96f6\u9664\u4ee5\u96f6\u53ef\u80fd\u4f1a\u5bfc\u81f4 NaN\uff08\u201c\u975e\u6570\u5b57\u201d\uff09\uff1b\u5728\u5176\u4ed6\u79fb\u52a8\u7aef GPU \u4e0a\uff0c\u5b83\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65e0\u7a77\u5927\u3001\u96f6\u6216\u4efb\u4f55\u5176\u4ed6\u4e0d\u660e\u503c\u3002\u52a1\u5fc5\u5728\u76ee\u6807\u8bbe\u5907\u4e0a\u6d4b\u8bd5\u7740\u8272\u5668\u4ee5\u68c0\u67e5\u7740\u8272\u5668\u662f\u5426\u53d7\u652f\u6301\u3002"),(0,r.kt)("h2",a({},{id:"\u5916\u90e8-gpu-\u6587\u6863"}),"\u5916\u90e8 GPU \u6587\u6863"),(0,r.kt)("p",null,"GPU \u4f9b\u5e94\u5546\u4f1a\u63d0\u4f9b\u6709\u5173\u5176 GPU \u6027\u80fd\u548c\u529f\u80fd\u7684\u6df1\u5165\u6307\u5357\u3002\u8bf7\u53c2\u9605\u4e0b\u6587\u4ee5\u4e86\u89e3\u8be6\u60c5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"https://developer.arm.com/docs/101897/0200"}),"ARM Mali GPU \u6700\u4f73\u5b9e\u8df5\u5f00\u53d1\u8005\u6307\u5357 (ARM Mali GPU Best Practices Developer Guide)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"https://developer.qualcomm.com/software/adreno-gpu-sdk/tools"}),"Qualcomm Adreno OpenGL ES \u5f00\u53d1\u8005\u6307\u5357 (Qualcomm Adreno OpenGL ES Developer Guide)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"https://community.imgtec.com/developers/powervr/documentation/"}),"PowerVR \u67b6\u6784\u6307\u5357 (PowerVR Architecture Guides)"))),(0,r.kt)("h2",a({},{id:"\u53e6\u8bf7\u53c2\u9605"}),"\u53e6\u8bf7\u53c2\u9605"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/graphics/shaders/shader-writing/sl-platform-differences"}),"\u5e73\u53f0\u7279\u5b9a\u7684\u6e32\u67d3\u5dee\u5f02")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/graphics/shaders/shader-performance-debugging/sl-shader-performance"}),"\u7740\u8272\u5668\u6027\u80fd\u63d0\u793a"))))}m.isMDXComponent=!0}}]);