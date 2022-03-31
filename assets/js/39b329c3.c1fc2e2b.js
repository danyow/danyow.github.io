"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73650],{35318:function(e,t,i){i.d(t,{Zo:function(){return g},kt:function(){return c}});var r=i(27378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},g=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(i),c=n,u=m["".concat(l,".").concat(c)]||m[c]||h[c]||a;return i?r.createElement(u,o(o({ref:t},g),{},{components:i})):r.createElement(u,o({ref:t},g))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},24267:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return g}});i(27378);var r=i(35318);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}const o={id:"\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",slug:"/graphics/lighting-overview/lightmappers/progressive-lightmapper/gpuprogressive-lightmapper"},s="\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",l={unversionedId:"unity/graphics/lighting-overview/lightmappers/progressive-lightmapper/\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",id:"version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/progressive-lightmapper/\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",title:"\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",description:"\u6ce8\u610f\uff1a \u8fd9\u662f\u4e00\u4e2a\u9884\u89c8\u529f\u80fd\uff0c\u5c06\u6765\u53ef\u80fd\u4f1a\u66f4\u6539\u3002\u5982\u679c\u6709\u4f7f\u7528\u6b64\u529f\u80fd\u7684\u573a\u666f\uff0c\u53ef\u80fd\u9700\u8981\u5728\u4ee5\u540e\u7684\u53d1\u884c\u7248\u4e2d\u66f4\u65b0\u8fd9\u4e9b\u573a\u666f\u3002\u5728\u8be5\u529f\u80fd\u5c1a\u672a\u6b63\u5f0f\u53d1\u5e03\u4e4b\u524d\uff0c\u8bf7\u52ff\u5728\u5927\u89c4\u6a21\u751f\u4ea7\u73af\u5883\u4e2d\u4f9d\u8d56\u6b64\u529f\u80fd\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/progressive-lightmapper/gpuprogressive-lightmapper.md",sourceDirName:"unity/graphics/lighting-overview/lightmappers/progressive-lightmapper",slug:"/graphics/lighting-overview/lightmappers/progressive-lightmapper/gpuprogressive-lightmapper",permalink:"/docs/graphics/lighting-overview/lightmappers/progressive-lightmapper/gpuprogressive-lightmapper",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09",slug:"/graphics/lighting-overview/lightmappers/progressive-lightmapper/gpuprogressive-lightmapper"},sidebar:"unity",previous:{title:"\u6e10\u8fdb\u5149\u7167\u8d34\u56fe\u7a0b\u5e8f",permalink:"/docs/graphics/lighting-overview/lightmappers/progressive-lightmapper/progressive-lightmapper"},next:{title:"\u81ea\u5b9a\u4e49\u8870\u51cf",permalink:"/docs/graphics/lighting-overview/lightmappers/progressive-lightmapper-custom-fall-off"}},p={},g=[{value:"\u786c\u4ef6\u548c\u8f6f\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u548c\u8f6f\u4ef6\u8981\u6c42",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2},{value:"Preventing baking speed slowdowns caused by lightmapper tiling",id:"preventing-baking-speed-slowdowns-caused-by-lightmapper-tiling",level:2},{value:"Platform-specific limitations",id:"platform-specific-limitations",level:2},{value:"\u5982\u4f55\u4f18\u5316\u70d8\u7119\u901f\u5ea6",id:"\u5982\u4f55\u4f18\u5316\u70d8\u7119\u901f\u5ea6",level:2},{value:"Configure GPU selection",id:"configure-gpu-selection",level:2}],h={toc:g};function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",n({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"\u6e10\u8fdb-gpu-\u5149\u7167\u8d34\u56fe-progressive-gpu-lightmapper\u9884\u89c8"}),"\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe (Progressive GPU Lightmapper)\uff08\u9884\u89c8\uff09"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u8fd9\u662f\u4e00\u4e2a\u9884\u89c8\u529f\u80fd\uff0c\u5c06\u6765\u53ef\u80fd\u4f1a\u66f4\u6539\u3002\u5982\u679c\u6709\u4f7f\u7528\u6b64\u529f\u80fd\u7684\u573a\u666f\uff0c\u53ef\u80fd\u9700\u8981\u5728\u4ee5\u540e\u7684\u53d1\u884c\u7248\u4e2d\u66f4\u65b0\u8fd9\u4e9b\u573a\u666f\u3002\u5728\u8be5\u529f\u80fd\u5c1a\u672a\u6b63\u5f0f\u53d1\u5e03\u4e4b\u524d\uff0c\u8bf7\u52ff\u5728\u5927\u89c4\u6a21\u751f\u4ea7\u73af\u5883\u4e2d\u4f9d\u8d56\u6b64\u529f\u80fd\u3002"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Progressive GPU Lightmapper"),"  is a backend for the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/graphics/lighting-overview/lightmappers/progressive-lightmapper/progressive-lightmapper"}),"Progressive Lightmapper")," which uses your computer\u2019s GPU and Dedicated Video Ram (VRAM) to generate baked  ",(0,r.kt)("strong",{parentName:"p"},"lightmaps"),"  and  ",(0,r.kt)("strong",{parentName:"p"},"Light Probes")," ."),(0,r.kt)("h2",n({},{id:"\u786c\u4ef6\u548c\u8f6f\u4ef6\u8981\u6c42"}),"\u786c\u4ef6\u548c\u8f6f\u4ef6\u8981\u6c42"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u6e10\u8fdb GPU \u5149\u7167\u8d34\u56fe\uff0c\u60a8\u7684\u8ba1\u7b97\u673a\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u6700\u4f4e\u89c4\u683c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u4e00\u4e2a\u652f\u6301 OpenCL 1.2 \u7684 GPU"),(0,r.kt)("li",{parentName:"ul"},"At least 4GB of VRAM dedicated to that GPU"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u652f\u6301 SSE4.1 \u6307\u4ee4\u7684 CPU")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u70d8\u7119\u7684\u573a\u666f\u6240\u9700\u7684 VRAM \u591a\u4e8e\u6307\u5b9a GPU \u4e0a\u53ef\u7528 VRAM\uff0c\u5219\u70d8\u7119\u65f6\u95f4\u4f1a\u663e\u8457\u589e\u52a0\u3002\u6709\u5173\u53ef\u5e2e\u52a9\u60a8\u51cf\u5c11\u70d8\u7119\u573a\u666f\u6240\u9700\u65f6\u95f4\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6027\u80fd\u3002"),(0,r.kt)("p",null,"The Progressive GPU Lightmapper does not support CPU OpenCL devices."),(0,r.kt)("h2",n({},{id:"\u6027\u80fd"}),"\u6027\u80fd"),(0,r.kt)("p",null,"The Progressive GPU Lightmapper bakes faster than the Progressive CPU Lightmapper, unless lightmapper tiling is active."),(0,r.kt)("p",null,"However, the specifications of the GPU you use to bake and the amount of VRAM dedicated to that GPU both influence your experience of the lightmapper\u2019s performance."),(0,r.kt)("p",null,"Other applications competing for GPU resources also have an impact on baking performance. Depending on your hardware vendor, reductions in the amount of VRAM available to Unity can slow down the bake, cause it to fail, or even result in the Progressive GPU Lightmapper falling back to the CPU if the GPU cannot meet minimum memory requirements. Closing other applications while you are working with this functionality can improve stability and performance."),(0,r.kt)("p",null,"In order to achieve results of the same quality as the Progressive CPU Lightmapper, the Progressive GPU Lightmapper needs up to four times more indirect light samples. The Progressive CPU Lightmapper uses an approach called branched path tracing, which launches more light rays at each bounce. The branched path tracing approach is not suitable for GPUs."),(0,r.kt)("p",null,"Unity provides a spreadsheet to help you determine how much memory the Progressive GPU Lightmapper needs to bake your scene. For more information see the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/GPULightmapperMemoryTool.zip"}),"Progressive GPU Lightmapper Memory Spreadsheet")," ."),(0,r.kt)("h2",n({},{id:"preventing-baking-speed-slowdowns-caused-by-lightmapper-tiling"}),"Preventing baking speed slowdowns caused by lightmapper tiling"),(0,r.kt)("p",null,"The Progressive GPU Lightmapper includes a feature called lightmapper tiling. Lightmapper tiling prevents the Progressive GPU Lightmapper from falling back to the Progressive CPU Lightmapper when Unity has used up its GPU memory allocation. Instead, Unity allocates some temporary memory on the CPU, then bakes your lighting in tiles that are sized to match the amount of GPU memory available. Lightmapper tiling is active only when Unity can\u2019t access enough GPU memory to bake the entire lightmap. The Progressive CPU Lightmapper does not include a tiling feature."),(0,r.kt)("p",null,"When lightmapper tiling is active, progressive updates cease in the Scene view and the baking process. However, the  ",(0,r.kt)("strong",{parentName:"p"},"Progressive updates"),"  setting in the Lighting window does not visibly deactivate. Baking a scene when lightmapper tiling is active is slower than baking the same scene without tiling."),(0,r.kt)("p",null,"It is not possible to disable tiling. However, you can reduce the likelihood of its activation by using the following strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increase the amount of GPU memory available for Unity to use."),(0,r.kt)("li",{parentName:"ul"},"Disable ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/graphics/lighting-overview/lightmappers/lighting-baked-ambient-occlusion"}),"ambient occlusion"),". Open the Lighting window (menu:  ",(0,r.kt)("strong",{parentName:"li"},"Window ",">"," Rendering ",">"," Lighting")," ). In the Lightmapping Settings interface, disable  ",(0,r.kt)("strong",{parentName:"li"},"Ambient Occlusion")," ."),(0,r.kt)("li",{parentName:"ul"},"Bake only indirect light. Set all your light sources to  ",(0,r.kt)("strong",{parentName:"li"},"Realtime"),"  or  ",(0,r.kt)("strong",{parentName:"li"},"Mixed")," . Make sure that no light sources are set to  ",(0,r.kt)("strong",{parentName:"li"},"Baked")," . If you use the mixed approach, set  ",(0,r.kt)("strong",{parentName:"li"},"Lighting ",">"," Mixed Lighting ",">"," Lighting mode"),"  to  ",(0,r.kt)("strong",{parentName:"li"},"Baked Indirect")," ."),(0,r.kt)("li",{parentName:"ul"},"Reduce the level of ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/Manual/class-QualitySettings.html#antialias"}),"anti-aliasing")," in your project. Navigate to  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",n({parentName:"strong"},{href:"https://docs.unity3d.com/2021.2/Documentation/Manual/class-QualitySettings.html"}),"Quality")),"  and choose an option that takes fewer samples. For example, you might switch from  ",(0,r.kt)("strong",{parentName:"li"},"8x Multi Sampling"),"  to  ",(0,r.kt)("strong",{parentName:"li"},"2x Multi Sampling")," ."),(0,r.kt)("li",{parentName:"ul"},"Reduce the quality of your lightmaps in your ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/2021.2/Documentation/Manual/class-LightmapParameters.html"}),"Lightmap Parameters Asset"),". Open the ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/Manual/lighting-window.html"}),"Lighting window"),", expand  ",(0,r.kt)("strong",{parentName:"li"},"Lightmapping settings")," , and select a lower-resolution option for  ",(0,r.kt)("strong",{parentName:"li"},"Lightmap parameters")," ."),(0,r.kt)("li",{parentName:"ul"},"Reduce your lightmap resolution."),(0,r.kt)("li",{parentName:"ul"},"Use a CPU-based denoiser. To choose a denoiser, open the ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/Manual/lighting-window.html"}),"Lighting window"),", expand  ",(0,r.kt)("strong",{parentName:"li"},"Lightmapping settings")," , set  ",(0,r.kt)("strong",{parentName:"li"},"Filtering"),"  to  ",(0,r.kt)("strong",{parentName:"li"},"Advanced"),"  and then select the denoiser for each type of lightmap target ( ",(0,r.kt)("strong",{parentName:"li"},"Direct"),"  and  ",(0,r.kt)("strong",{parentName:"li"},"Indirect")," ). Only  ",(0,r.kt)("strong",{parentName:"li"},"OpenImageDenoise"),"  is CPU-based.  ",(0,r.kt)("strong",{parentName:"li"},"RadeonPro"),"  and  ",(0,r.kt)("strong",{parentName:"li"},"Optix"),"  are GPU-based, but  ",(0,r.kt)("strong",{parentName:"li"},"RadeonPro"),"  uses a lot more GPU memory.")),(0,r.kt)("h2",n({},{id:"platform-specific-limitations"}),"Platform-specific limitations"),(0,r.kt)("p",null,"On macOS it is more difficult to determine how much memory is available. As a result, fallback to CPU is more likely on this platform and it is a best practice to follow instructions for optimizing your bake speed."),(0,r.kt)("h2",n({},{id:"\u5982\u4f55\u4f18\u5316\u70d8\u7119\u901f\u5ea6"}),"\u5982\u4f55\u4f18\u5316\u70d8\u7119\u901f\u5ea6"),(0,r.kt)("p",null,"\u6709\u591a\u79cd\u65b9\u6cd5\u53ef\u4ee5\u51cf\u5c11\u70d8\u7119\u65f6\u95f4\u5e76\u907f\u514d\u70d8\u7119\u8d85\u8fc7\u6307\u5b9a\u7ed9 GPU \u7528\u4e8e\u70d8\u7119\u7684 VRAM \u7684\u60c5\u51b5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Close other GPU-accelerated applications. GPU-accelerated 2D image editing and 3D modelling software uses VRAM. Turn off accelerated graphics functionality or quit these applications."),(0,r.kt)("li",{parentName:"ul"},"Switch to a CPU-based denoiser. GPU-based denoisers also use VRAM capacity. Switch to a CPU-based option, like ",(0,r.kt)("a",n({parentName:"li"},{href:"https://www.openimagedenoise.org/"}),"Intel Open Image"),", which uses system RAM instead."),(0,r.kt)("li",{parentName:"ul"},"Use Light Probes for smaller GameObjects. GameObjects such as debris or small props use up space in lightmaps but might not contribute significantly to the look of a scene. To optimize bake speed, ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/2020.2/Documentation/Manual/class-MeshRenderer.html#Lighting"}),"disable  ",(0,r.kt)("strong",{parentName:"a"},"Contribute Global Illumination"),"  for these GameObjects\u2019 Mesh Renderers")," and light them with ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/Manual/LightProbes.html"}),"Light Probes")," instead."),(0,r.kt)("li",{parentName:"ul"},"Designate separate GPUs for rendering and baking. If your computer has more than one GPU, you can designate one for rendering and one for baking. See Configure GPU selection below."),(0,r.kt)("li",{parentName:"ul"},"Use a lower number of  ",(0,r.kt)("strong",{parentName:"li"},"Anti-aliasing samples")," . The default value for this setting in the ",(0,r.kt)("a",n({parentName:"li"},{href:"https://docs.unity3d.com/2020.2/Documentation/Manual/class-LightmapParameters.html"}),"Lightmap Parameters Asset")," is 8. When you increase it, Unity uses more VRAM. When you are using a lightmap size of 4096 or above, this can quickly exceed the memory of many consumer GPUs.")),(0,r.kt)("h2",n({},{id:"configure-gpu-selection"}),"Configure GPU selection"),(0,r.kt)("p",null,"If you have at least two GPUs, you can specify one GPU for rendering the Scene and another for baking lighting. This might be desirable in cases where there is insufficient VRAM available for the default GPU to both render your scene and bake it using the Progressive GPU Lightmapper. ",(0,r.kt)("br",null)," To change which GPU Unity uses for baking: ",(0,r.kt)("br",null)," 1. Open the  ",(0,r.kt)("strong",{parentName:"p"},"Lighting"),"  window (menu:  ",(0,r.kt)("strong",{parentName:"p"},"Window ",">"," Rendering ",">"," Lighting")," ).",(0,r.kt)("br",null)," 2. Navigate to the  ",(0,r.kt)("strong",{parentName:"p"},"Workflow Settings"),"  section.",(0,r.kt)("br",null)," 3. Use the  ",(0,r.kt)("strong",{parentName:"p"},"GPU Baking Device"),"  drop-down menu to select a GPU.",(0,r.kt)("br",null)))}m.isMDXComponent=!0}}]);