"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89875],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),y=i,b=d["".concat(u,".").concat(y)]||d[y]||c[y]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91867:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});n(27378);var r=n(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",slug:"/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline"},a="\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",u={unversionedId:"unity/unity-overview/creating-gameplay/publishing-builds/\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",id:"version-Unity@2022.1/unity/unity-overview/creating-gameplay/publishing-builds/\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",title:"\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",description:"\u5728\u6784\u5efa\u64ad\u653e\u5668\u65f6\uff0c\u6709\u65f6\u53ef\u80fd\u5e0c\u671b\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4fee\u6539\u6784\u5efa\u7684\u64ad\u653e\u5668\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u5e0c\u671b\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807\u3001\u5728\u64ad\u653e\u5668\u65c1\u8fb9\u590d\u5236\u4e00\u4e9b\u6587\u6863\u6216\u6784\u5efa\u5b89\u88c5\u7a0b\u5e8f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u5668\u811a\u672c\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u4f7f\u7528 BuildPipeline.BuildPlayer \u6765\u8fd0\u884c\u6784\u5efa\uff0c\u63a5\u7740\u4f7f\u7528\u6240\u9700\u7684\u4efb\u4f55\u540e\u671f\u5904\u7406\u4ee3\u7801\uff1a",source:"@site/versioned_docs/version-Unity@2022.1/unity/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline.md",sourceDirName:"unity/unity-overview/creating-gameplay/publishing-builds",slug:"/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline",permalink:"/en/docs/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf",slug:"/unity-overview/creating-gameplay/publishing-builds/build-player-pipeline"},sidebar:"unity",previous:{title:"\u53d1\u5e03\u6784\u5efa",permalink:"/en/docs/unity-overview/creating-gameplay/publishing-builds/publishing-builds"},next:{title:"\u51cf\u5c0f\u6784\u5efa\u7684\u6587\u4ef6\u5927\u5c0f",permalink:"/en/docs/unity-overview/creating-gameplay/publishing-builds/reducing-filesize"}},s={},p=[{value:"PostProcessBuild \u5c5e\u6027",id:"postprocessbuild-\u5c5e\u6027",level:2}],c={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf"}),"\u6784\u5efa\u64ad\u653e\u5668\u7ba1\u7ebf"),(0,r.kt)("p",null,"\u5728\u6784\u5efa\u64ad\u653e\u5668\u65f6\uff0c\u6709\u65f6\u53ef\u80fd\u5e0c\u671b\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4fee\u6539\u6784\u5efa\u7684\u64ad\u653e\u5668\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u5e0c\u671b\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807\u3001\u5728\u64ad\u653e\u5668\u65c1\u8fb9\u590d\u5236\u4e00\u4e9b\u6587\u6863\u6216\u6784\u5efa\u5b89\u88c5\u7a0b\u5e8f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u5668\u811a\u672c\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u4f7f\u7528 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/BuildPipeline.BuildPlayer.html"}),"BuildPipeline.BuildPlayer")," \u6765\u8fd0\u884c\u6784\u5efa\uff0c\u63a5\u7740\u4f7f\u7528\u6240\u9700\u7684\u4efb\u4f55\u540e\u671f\u5904\u7406\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'// C# \u793a\u4f8b\u3002\nusing UnityEditor;\nusing System.Diagnostics;\n\npublic class ScriptBatch \n{\n    [MenuItem("MyTools/Windows Build With Postprocess")]\n    public static void BuildGame ()\n    {\n        // \u83b7\u53d6\u6587\u4ef6\u540d\u3002\n        string path = EditorUtility.SaveFolderPanel("Choose Location of Built Game", "", "");\n        string[] levels = new string[] {"Assets/Scene1.unity", "Assets/Scene2.unity"};\n\n        // \u6784\u5efa\u64ad\u653e\u5668\u3002\n        BuildPipeline.BuildPlayer(levels, path +"/BuiltGame.exe", BuildTarget.StandaloneWindows, BuildOptions.None);\n\n        // \u5c06\u6587\u4ef6\u4ece\u9879\u76ee\u6587\u4ef6\u5939\u590d\u5236\u5230\u6784\u5efa\u6587\u4ef6\u5939\uff0c\u4e0e\u6784\u5efa\u7684\u6e38\u620f\u653e\u5728\u4e00\u8d77\u3002\n        FileUtil.CopyFileOrDirectory("Assets/Templates/Readme.txt", path + "Readme.txt");\n\n        // \u8fd0\u884c\u6e38\u620f\uff08System.Diagnostics \u4e2d\u7684 Process \u7c7b\uff09\u3002\n        Process proc = new Process();\n        proc.StartInfo.FileName = path +"/BuiltGame.exe";\n        proc.Start();\n    }\n}\n\n')),(0,r.kt)("h2",i({},{id:"postprocessbuild-\u5c5e\u6027"}),"PostProcessBuild \u5c5e\u6027"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Callbacks.PostProcessBuildAttribute.html"}),"PostProcessBuildAttribute")," \u7684 postprocessOrder \u53c2\u6570\u6765\u5b9a\u4e49\u6784\u5efa\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5e76\u4f7f\u7528 Process \u7c7b\u4ece\u8fd9\u4e9b\u65b9\u6cd5\u8c03\u7528\u5916\u90e8\u811a\u672c\uff0c\u5982\u4e0a\u4e00\u90e8\u5206\u6240\u793a\u3002\u6b64\u53c2\u6570\u7528\u4e8e\u5c06\u6784\u5efa\u65b9\u6cd5\u4ece\u4f4e\u5230\u9ad8\u6392\u5e8f\uff0c\u53ef\u4e3a\u5176\u5206\u914d\u4efb\u4f55\u8d1f\u503c\u6216\u6b63\u503c\u3002"))}d.isMDXComponent=!0}}]);