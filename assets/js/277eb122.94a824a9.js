"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85017],{35318:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(27378);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),l=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=i,m=s["".concat(o,".").concat(f)]||s[f]||d[f]||p;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=s;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<p;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},14119:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});r(27378);var t=r(35318);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",slug:"/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context"},c="\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",o={unversionedId:"unity/graphics/render-pipelines/scriptable-render-pipeline/\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",id:"version-Unity@2022.1/unity/graphics/render-pipelines/scriptable-render-pipeline/\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",title:"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",description:"\u672c\u9875\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u4f7f\u7528 CommandBuffers \u6216\u901a\u8fc7\u5bf9 ScriptableRenderContext \u8fdb\u884c\u76f4\u63a5 API \u8c03\u7528\uff0c\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (SRP) \u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4\u3002\u672c\u9875\u9762\u4e0a\u7684\u4fe1\u606f\u9002\u7528\u4e8e\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)\u3001\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP) \u548c\u57fa\u4e8e SRP \u7684\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context.md",sourceDirName:"unity/graphics/render-pipelines/scriptable-render-pipeline",slug:"/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context",permalink:"/docs/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",slug:"/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context"},sidebar:"unity",previous:{title:"\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u7b80\u4ecb",permalink:"/docs/graphics/render-pipelines/scriptable-render-pipeline/scriptable-render-pipeline-introduction"},next:{title:"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",permalink:"/docs/graphics/render-pipelines/srp-custom/srp-custom"}},l={},u=[{value:"\u4f7f\u7528 ScriptableRenderContext API",id:"\u4f7f\u7528-scriptablerendercontext-api",level:2},{value:"\u7acb\u5373\u6267\u884c CommandBuffers",id:"\u7acb\u5373\u6267\u884c-commandbuffers",level:2},{value:"\u5176\u4ed6\u4fe1\u606f",id:"\u5176\u4ed6\u4fe1\u606f",level:2}],d={toc:u};function s(e){var{components:n}=e,r=p(e,["components"]);return(0,t.kt)("wrapper",i({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",i({},{id:"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4"}),"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4"),(0,t.kt)("p",null,"\u672c\u9875\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u4f7f\u7528 CommandBuffers \u6216\u901a\u8fc7\u5bf9 ScriptableRenderContext \u8fdb\u884c\u76f4\u63a5 API \u8c03\u7528\uff0c\u5728",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/graphics/render-pipelines/scriptable-render-pipeline/scriptable-render-pipeline"}),"\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (SRP)")," \u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4\u3002\u672c\u9875\u9762\u4e0a\u7684\u4fe1\u606f\u9002\u7528\u4e8e\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)\u3001\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP) \u548c\u57fa\u4e8e SRP \u7684\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u3002"),(0,t.kt)("p",null,"\u5728 SRP \u4e2d\uff0c\u5e94\u4f7f\u7528 C# \u811a\u672c\u6765\u914d\u7f6e\u548c\u8c03\u5ea6\u6e32\u67d3\u547d\u4ee4\u3002\u7136\u540e\uff0c\u9700\u8981\u544a\u8bc9 Unity \u7684\u4f4e\u7ea7\u56fe\u5f62\u67b6\u6784\u6267\u884c\u8fd9\u4e9b\u547d\u4ee4\uff0c\u6b64\u8fc7\u7a0b\u4f1a\u5c06\u6307\u4ee4\u53d1\u9001\u5230\u56fe\u5f62 API\u3002"),(0,t.kt)("p",null,"\u4e3b\u8981\u505a\u6cd5\u662f\u5bf9 ScriptableRenderContext \u8fdb\u884c API \u8c03\u7528\uff0c\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u7acb\u5373\u6267\u884c CommandBuffers\u3002"),(0,t.kt)("h2",i({},{id:"\u4f7f\u7528-scriptablerendercontext-api"}),"\u4f7f\u7528 ScriptableRenderContext API"),(0,t.kt)("p",null,"\u5728 SRP \u4e2d\uff0cScriptableRenderContext \u7c7b\u7528\u4f5c C# \u6e32\u67d3\u7ba1\u7ebf\u4ee3\u7801\u4e0e Unity \u7684\u4f4e\u7ea7\u56fe\u5f62\u4ee3\u7801\u4e4b\u95f4\u7684\u63a5\u53e3\u3002SRP \u4f7f\u7528\u5ef6\u8fdf\u6267\u884c\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u6e32\u67d3\uff1b\u60a8\u9700\u8981\u4f7f\u7528 ScriptableRenderContext \u6765\u6784\u5efa\u6e32\u67d3\u547d\u4ee4\u5217\u8868\uff0c\u7136\u540e\u544a\u8bc9 Unity \u6267\u884c\u8fd9\u4e9b\u547d\u4ee4\u3002Unity \u7684\u4f4e\u7ea7\u56fe\u5f62\u67b6\u6784\u968f\u540e\u5c06\u6307\u4ee4\u53d1\u9001\u5230\u56fe\u5f62 API\u3002"),(0,t.kt)("p",null,"\u8981\u8c03\u5ea6\u6e32\u67d3\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.ScriptableRenderContext.ExecuteCommandBuffer.html"}),"ScriptableRenderContext.ExecuteCommandBuffer")," \u5c06 ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.CommandBuffer.html"}),"CommandBuffers")," \u4f20\u9012\u5230 ScriptableRenderContext"),(0,t.kt)("li",{parentName:"ul"},"\u5bf9\u53ef\u7f16\u7a0b\u6e32\u67d3\u4e0a\u4e0b\u6587\u8fdb\u884c\u76f4\u63a5 API \u8c03\u7528\uff08\u4f8b\u5982 ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.ScriptableRenderContext.Cull.html"}),"ScriptableRenderContext.Cull")," \u6216 ",(0,t.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.ScriptableRenderContext.DrawRenderers.html"}),"ScriptableRenderContext.DrawRenderers"),"\uff09")),(0,t.kt)("p",null,"\u4e3a\u4e86\u544a\u8bc9 Unity \u6267\u884c\u60a8\u6240\u8c03\u5ea6\u7684\u547d\u4ee4\uff0c\u8bf7\u8c03\u7528 ",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.ScriptableRenderContext.Submit.html"}),"ScriptableRenderContext.Submit"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528\u7684\u662f CommandBuffer \u8fd8\u662f\u901a\u8fc7\u8c03\u7528 API \u6765\u8c03\u5ea6\u547d\u4ee4\uff0c\u8fd9\u5e76\u4e0d\u91cd\u8981\uff1bUnity \u4ee5\u76f8\u540c\u65b9\u5f0f\u5728 ScriptableRenderContext \u4e2d\u8c03\u5ea6\u6240\u6709\u6e32\u67d3\u547d\u4ee4\uff0c\u5e76\u4e14\u5728\u8c03\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"Submit()")," \u4e4b\u524d\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u8fd9\u4e9b\u547d\u4ee4\u3002"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u5982\u4f55\u4f7f\u7528 CommandBuffer \u6765\u8c03\u5ea6\u548c\u6267\u884c\u547d\u4ee4\u4ee5\u6e05\u9664\u5f53\u524d\u6e32\u67d3\u76ee\u6807\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"using UnityEngine;\nusing UnityEngine.Rendering;\n\npublic class ExampleRenderPipeline : RenderPipeline\n{\n        public ExampleRenderPipeline() {\n        }\n\n    protected override void Render(ScriptableRenderContext context, Camera[] cameras) {\n        // \u521b\u5efa\u5e76\u8c03\u5ea6\u547d\u4ee4\u4ee5\u6e05\u9664\u5f53\u524d\u6e32\u67d3\u76ee\u6807\n        var cmd = new CommandBuffer();\n        cmd.ClearRenderTarget(true, true, Color.red);\n        context.ExecuteCommandBuffer(cmd);\n        cmd.Release();\n\n         // \u6307\u793a\u53ef\u7f16\u7a0b\u6e32\u67d3\u4e0a\u4e0b\u6587\u544a\u8bc9\u56fe\u5f62 API \u6267\u884c\u8c03\u5ea6\u7684\u547d\u4ee4\n        context.Submit();\n    }\n}\n")),(0,t.kt)("h2",i({},{id:"\u7acb\u5373\u6267\u884c-commandbuffers"}),"\u7acb\u5373\u6267\u884c CommandBuffers"),(0,t.kt)("p",null,"\u53ef\u901a\u8fc7\u8c03\u7528 ",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.ExecuteCommandBuffer.html"}),"Graphics.ExecuteCommandBuffer")," \u6765\u7acb\u5373\u6267\u884c CommandBuffers\uff0c\u800c\u4e0d\u4f7f\u7528 ScriptableRenderContext\u3002\u5bf9\u8be5 API \u7684\u8c03\u7528\u53d1\u751f\u5728\u6e32\u67d3\u7ba1\u7ebf\u4e4b\u5916\u3002"),(0,t.kt)("h2",i({},{id:"\u5176\u4ed6\u4fe1\u606f"}),"\u5176\u4ed6\u4fe1\u606f"),(0,t.kt)("p",null,"\u6709\u5173\u53ef\u4ee5\u4f7f\u7528 CommandBuffers \u6765\u8c03\u5ea6\u7684\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,t.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.CommandBuffer.html"}),"CommandBuffers API \u6587\u6863"),"\u3002"))}s.isMDXComponent=!0}}]);