"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50920],{35318:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return h}});var i=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return t?i.createElement(g,a(a({ref:n},o),{},{components:t})):i.createElement(g,a({ref:n},o))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<l;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return o}});t(27378);var i=t(35318);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const a={id:"How to get, set, and configure the active render pipeline",slug:"/graphics/render-pipelines/srp-setting-render-pipeline-asset"},p="How to get, set, and configure the active render pipeline",s={unversionedId:"unity/graphics/render-pipelines/How to get, set, and configure the active render pipeline",id:"version-Unity@2022.1/unity/graphics/render-pipelines/How to get, set, and configure the active render pipeline",title:"How to get, set, and configure the active render pipeline",description:"This page contains information on how to get, set, and configure the render pipeline that Unity is currently using. The render pipeline that Unity is currently using is called the active render pipeline.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/render-pipelines/srp-setting-render-pipeline-asset.md",sourceDirName:"unity/graphics/render-pipelines",slug:"/graphics/render-pipelines/srp-setting-render-pipeline-asset",permalink:"/en/docs/graphics/render-pipelines/srp-setting-render-pipeline-asset",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/graphics/render-pipelines/srp-setting-render-pipeline-asset.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"How to get, set, and configure the active render pipeline",slug:"/graphics/render-pipelines/srp-setting-render-pipeline-asset"},sidebar:"unity",previous:{title:"\u57fa\u4e8e\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",permalink:"/en/docs/graphics/render-pipelines/srp-custom/srp-custom-getting-started"},next:{title:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",permalink:"/en/docs/graphics/render-pipelines/universal-render-pipeline"}},d={},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Determining the active render pipeline",id:"determining-the-active-render-pipeline",level:2},{value:"How to get and set the active render pipeline in the Editor UI",id:"how-to-get-and-set-the-active-render-pipeline-in-the-editor-ui",level:2},{value:"Getting the active render pipeline",id:"getting-the-active-render-pipeline",level:3},{value:"Activating the Built-in Render Pipeline",id:"activating-the-built-in-render-pipeline",level:3},{value:"Activating URP, HDRP, or a custom render pipeline based on SRP",id:"activating-urp-hdrp-or-a-custom-render-pipeline-based-on-srp",level:3},{value:"How to get and set the active render pipeline in C# scripts",id:"how-to-get-and-set-the-active-render-pipeline-in-c-scripts",level:2}],c={toc:o};function u(e){var{components:n}=e,t=l(e,["components"]);return(0,i.kt)("wrapper",r({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",r({},{id:"how-to-get-set-and-configure-the-active-render-pipeline"}),"How to get, set, and configure the active render pipeline"),(0,i.kt)("p",null,"This page contains information on how to get, set, and configure the render pipeline that Unity is currently using. The render pipeline that Unity is currently using is called the active render pipeline."),(0,i.kt)("h2",r({},{id:"\u6982\u8ff0"}),"\u6982\u8ff0"),(0,i.kt)("p",null,"To render content, Unity can either use the Built-in Render Pipeline or a render pipeline based on the ",(0,i.kt)("a",r({parentName:"p"},{href:"/en/docs/graphics/render-pipelines/scriptable-render-pipeline/scriptable-render-pipeline"}),"Scriptable Render Pipeline")," (SRP), which includes the Universal Render Pipeline (URP) and the High Definition Render Pipeline (HDRP)."),(0,i.kt)("p",null,"To specify which Scriptable Render Pipeline Unity uses, you use Render Pipeline Assets. A Render Pipeline Asset tells Unity which SRP to use, and how to configure it. If you don\u2019t specify a Render Pipeline Asset, Unity uses the Built-in Render Pipeline."),(0,i.kt)("p",null,"You can create multiple Render Pipeline Assets that use the same render pipeline, but with different configurations; for example, you can use different Render Pipeline Assets for different hardware quality levels. For a general introduction to Render Pipeline Assets, see ",(0,i.kt)("a",r({parentName:"p"},{href:"/en/docs/graphics/render-pipelines/scriptable-render-pipeline/scriptable-render-pipeline-introduction"}),"Scriptable Render Pipeline introduction"),". For information onURP\u2019s Render Pipeline Asset, see ",(0,i.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/manual/universalrp-asset.html"}),"The Universal Render Pipeline Asset"),", and for HDRP\u2019s Render Pipeline Asset, see ",(0,i.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest/index.html?subfolder=/manual/HDRP-Asset.html"}),"The High Definition Render Pipeline Asset"),"."),(0,i.kt)("p",null,"As soon as you change the active render pipeline in the Unity Editor or at runtime, Unity uses the new active render pipeline to render content. If you are in the Unity Editor, this includes the Game view, the Scene view, and previews for Materials in the Project panel and the Inspector."),(0,i.kt)("p",null,"When you change the active render pipeline, you must ensure that the assets and code in your project are compatible with the new render pipeline; otherwise, you might experience errors or unintended visual effects."),(0,i.kt)("h2",r({},{id:"determining-the-active-render-pipeline"}),"Determining the active render pipeline"),(0,i.kt)("p",null,"Settings in both ",(0,i.kt)("a",r({parentName:"p"},{href:"/en/docs/unity-overview/editor-features/comp-manager-group/class-graphics-settings"}),"Graphics Settings")," and ",(0,i.kt)("a",r({parentName:"p"},{href:"/en/docs/unity-overview/editor-features/comp-manager-group/class-quality-settings"}),"Quality Settings")," determine the active render pipeline. In Graphics Settings, you configure the render pipeline that Unity uses by default. In Quality Settings, you can override the default render pipeline for a given quality level."),(0,i.kt)("p",null,"To get or set the default render pipeline, use Graphics Settings ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Scriptable Render Pipeline Setting"),"  (or its equivalent API, ",(0,i.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Rendering.GraphicsSettings-renderPipelineAsset.html"}),"GraphicsSettings.defaultRenderPipeline"),"). To get or set the render pipeline that overrides the default for a given quality level, Quality Settings ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Render Pipeline"),"  (or its equivalent API, ",(0,i.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/QualitySettings-renderPipeline.html"}),"QualitySettings.renderPipeline"),")."),(0,i.kt)("p",null,"Unity determines the active render pipeline like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the current Quality Settings level ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Render Pipeline"),"  references a Render Pipeline Asset, Unity uses that value."),(0,i.kt)("li",{parentName:"ul"},"Otherwise:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If Graphics Settings ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Scriptable Render Pipeline Setting"),"  references a Render Pipeline Asset, Unity uses that value."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, Unity uses the Built-in Render Pipeline.")))),(0,i.kt)("h2",r({},{id:"how-to-get-and-set-the-active-render-pipeline-in-the-editor-ui"}),"How to get and set the active render pipeline in the Editor UI"),(0,i.kt)("h3",r({},{id:"getting-the-active-render-pipeline"}),"Getting the active render pipeline"),(0,i.kt)("p",null,"To get the active render pipeline in the Editor UI, you must check both the Graphics Settings and Quality Settings windows. For information on how to use these values to determine the active render pipeline, see ",(0,i.kt)("a",r({parentName:"p"},{href:"#determining-the-active-render-pipeline"}),"Determining the active render pipeline"),"."),(0,i.kt)("h3",r({},{id:"activating-the-built-in-render-pipeline"}),"Activating the Built-in Render Pipeline"),(0,i.kt)("p",null,"To set the active render pipeline to the Built-in Render Pipeline, remove any Render Pipeline Assets from Graphics Settings and Quality Settings."),(0,i.kt)("p",null,"\u4e3a\u6b64\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Quality")," ."),(0,i.kt)("li",{parentName:"ol"},"For each quality level, if a Render Pipeline Asset is assigned to the  ",(0,i.kt)("strong",{parentName:"li"},"Render Pipeline"),"  field, unassign it."),(0,i.kt)("li",{parentName:"ol"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Graphics")," ."),(0,i.kt)("li",{parentName:"ol"},"If a Render Pipeline Asset is assigned to the  ",(0,i.kt)("strong",{parentName:"li"},"Scriptable Render Pipeline Setting"),"  field, unassign it.")),(0,i.kt)("h3",r({},{id:"activating-urp-hdrp-or-a-custom-render-pipeline-based-on-srp"}),"Activating URP, HDRP, or a custom render pipeline based on SRP"),(0,i.kt)("p",null,"To set the active render pipeline to one that is based on SRP, tell Unity which Render Pipeline Asset to use as the default active render pipeline, and optionally which Render Pipeline Assets to use for each quality level."),(0,i.kt)("p",null,"\u4e3a\u6b64\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In your Project folder, locate the Render Pipeline Asset(s) that you want to use."),(0,i.kt)("li",{parentName:"ol"},"Set the default render pipeline, which Unity uses when there is no override for a given quality level. If you do not set this, Unity uses the Built-in Render Pipeline when no override applies.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Graphics")," ."),(0,i.kt)("li",{parentName:"ol"},"Drag the Render Pipeline Asset on to the  ",(0,i.kt)("strong",{parentName:"li"},"Scriptable Render Pipeline Setting"),"  field."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Optional")," : Set override Render Pipeline Assets for different quality levels."),(0,i.kt)("li",{parentName:"ol"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Quality")," ."),(0,i.kt)("li",{parentName:"ol"},"Drag the Render Pipeline Asset on to the  ",(0,i.kt)("strong",{parentName:"li"},"Render Pipeline"),"  field.")),(0,i.kt)("h2",r({},{id:"how-to-get-and-set-the-active-render-pipeline-in-c-scripts"}),"How to get and set the active render pipeline in C# scripts"),(0,i.kt)("p",null,"In C# scripts, you can get and set the active render pipeline and receive a callback when the active render pipeline changes. You can do this in Edit Mode or Play Mode in the Unity Editor, or at runtime in your application."),(0,i.kt)("p",null,"\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b API\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are several ways to get the active render pipeline:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To get a reference to the Render Pipeline Asset that defines the active render pipeline, use ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsSettings.currentRenderPipeline.html"}),"GraphicsSettings.currentRenderPipeline"),"."),(0,i.kt)("li",{parentName:"ul"},"To get a reference to the Render Pipeline Asset that defines the active render pipeline and to determine whether Unity is using the default value or an override value, get the values of ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsSettings.defaultRenderPipeline.html"}),"GraphicsSettings.defaultRenderPipeline")," and ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/QualitySettings.renderPipeline.html"}),"QualitySettings.renderPipeline"),". For information on how to use these values, see ",(0,i.kt)("a",r({parentName:"li"},{href:"#determining-the-active-render-pipeline"}),"Determining the active render pipeline")," or the following code sample."),(0,i.kt)("li",{parentName:"ul"},"To get the ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.RenderPipeline.html"}),"RenderPipeline")," instance for the active render pipeline, use ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/RenderPipelineManager.currentPipeline.html"}),"RenderPipelineManager.currentPipeline"),".  ",(0,i.kt)("strong",{parentName:"li"},"Note:"),"  Unity updates this property only after it has rendered at least one frame with the active render pipeline."))),(0,i.kt)("li",{parentName:"ul"},"To set the active render pipeline, set the values of ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsSettings.defaultRenderPipeline.html"}),"GraphicsSettings.defaultRenderPipeline")," and ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/QualitySettings.renderPipeline.html"}),"QualitySettings.renderPipeline"),". For information on how to use these values, see ",(0,i.kt)("a",r({parentName:"li"},{href:"#determining-the-active-render-pipeline"}),"Determining the active render pipeline")," or the following code sample."),(0,i.kt)("li",{parentName:"ul"},"To detect and execute code when the type of the active render pipeline changes, use ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.RenderPipeiineManager.activeRenderPipelineTypeChanged.html"}),"RenderPipelineManager.activeRenderPipelineTypeChanged"),".")),(0,i.kt)("p",null,"The following example code shows how to use these APIs:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),'using UnityEngine;\nusing UnityEngine.Rendering;\n \npublic class ActiveRenderPipelineExample : MonoBehaviour\n{\n    // In the Inspector, assign a Render Pipeline Asset to each of these fields\n    public RenderPipelineAsset defaultRenderPipelineAsset;\n    public RenderPipelineAsset overrideRenderPipelineAsset;\n \n    void Start()\n    {\n        GraphicsSettings.defaultRenderPipeline = defaultRenderPipelineAsset;\n        QualitySettings.renderPipeline = overrideRenderPipelineAsset;\n\n        DisplayCurrentRenderPipeline();\n    }\n\n    void Update()\n    {\n        // When the user presses the left shift key, switch the default render pipeline\n        if (Input.GetKeyDown(KeyCode.LeftShift)) {\n            SwitchDefaultRenderPipeline();\n            DisplayCurrentRenderPipeline();\n        }\n        // When the user presses the right shift key, switch the override render pipeline\n        else if (Input.GetKeyDown(KeyCode.RightShift)) {\n            SwitchOverrideRenderPipeline();\n            DisplayCurrentRenderPipeline();\n        }\n    }\n\n    // Switch the default render pipeline between null,\n    // and the render pipeline defined in defaultRenderPipelineAsset\n    void SwitchDefaultRenderPipeline()\n    {\n        if (GraphicsSettings.defaultRenderPipeline == defaultRenderPipelineAsset)\n        {\n            GraphicsSettings.defaultRenderPipeline = null;\n        }\n        else\n        {\n            GraphicsSettings.defaultRenderPipeline = defaultRenderPipelineAsset;\n        }\n    }\n\n    // Switch the override render pipeline between null,\n    // and the render pipeline defined in overrideRenderPipelineAsset\n    void SwitchOverrideRenderPipeline()\n    {\n        if (QualitySettings.renderPipeline == overrideRenderPipelineAsset)\n        {\n            QualitySettings.renderPipeline = null;\n        }\n        else\n        {\n           QualitySettings.renderPipeline = overrideRenderPipelineAsset;\n        }\n    }\n\n    // Print the current render pipeline information to the console\n    void DisplayCurrentRenderPipeline()\n    {\n        // GraphicsSettings.defaultRenderPipeline determines the default render pipeline\n        // If it is null, the default is the Built-in Render Pipeline\n        if (GraphicsSettings.defaultRenderPipeline != null)\n        {\n            Debug.Log("The default render pipeline is defined by " + GraphicsSettings.defaultRenderPipeline.name);\n        }\n        else\n        {\n            Debug.Log("The default render pipeline is the Built-in Render Pipeline");\n        }\n\n        // QualitySettings.renderPipeline determines the override render pipeline for the current quality level\n        // If it is null, no override exists for the current quality level\n        if (QualitySettings.renderPipeline != null)\n        {\n            Debug.Log("The override render pipeline for the current quality level is defined by " + QualitySettings.renderPipeline.name);\n        }\n        else\n        {\n            Debug.Log("No override render pipeline exists for the current quality level");\n        }\n\n        // If an override render pipeline is defined, Unity uses that\n        // Otherwise, it falls back to the default value\n        if (QualitySettings.renderPipeline != null)\n        {\n            Debug.Log("The active render pipeline is the override render pipeline");\n        }\n        else\n        {\n            Debug.Log("The active render pipeline is the default render pipeline");\n        }\n\n        // To get a reference to the Render Pipeline Asset that defines the active render pipeline,\n        // without knowing if it is the default or an override, use GraphicsSettings.currentRenderPipeline\n        if (GraphicsSettings.currentRenderPipeline != null)\n        {\n            Debug.Log("The active render pipeline is defined by " +GraphicsSettings.currentRenderPipeline.name);\n        }\n        else\n        {\n            Debug.Log("The active render pipeline is the Built-in Render Pipeline");\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);