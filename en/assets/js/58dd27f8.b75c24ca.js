"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96085],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,y=m["".concat(l,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});n(27378);var r=n(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",slug:"/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project"},p="Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",l={unversionedId:"unity/platform-specific/iphone/iphone-getting-started/Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",id:"version-Unity@2022.1/unity/platform-specific/iphone/iphone-getting-started/Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",title:"Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",description:"\u4e3a iOS \u5e73\u53f0\u6784\u5efa Unity \u9879\u76ee\u65f6\uff0cUnity \u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b Xcode \u9879\u76ee\u7684\u6587\u4ef6\u5939\u3002\u4e3a\u4e86\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230\u8bbe\u5907\u4e0a\u4e4b\u524d\u5bf9\u6b64\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u7f16\u8bd1\u548c\u7b7e\u540d\uff0c\u60a8\u9700\u8981\u8be5\u9879\u76ee\u3002\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u4f7f\u7528\u8be5\u9879\u76ee\u6765\u51c6\u5907\u548c\u6346\u7ed1\u6e38\u620f\uff0c\u4ee5\u4fbf\u5206\u53d1\u5230 App Store \u4e0a\u3002\u81ea Unity 2019.3 \u8d77\uff0cXcode \u9879\u76ee\u7ed3\u6784\u5df2\u66f4\u6539\uff0c\u65e8\u5728\u652f\u6301\u901a\u8fc7 Unity \u7528\u4f5c\u5e93\u5c06 Unity \u96c6\u6210\u5230\u539f\u751f iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project.md",sourceDirName:"unity/platform-specific/iphone/iphone-getting-started",slug:"/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project",permalink:"/en/docs/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784",slug:"/platform-specific/iphone/iphone-getting-started/structure-of-xcode-project"},sidebar:"unity",previous:{title:"Inside the iOS build process",permalink:"/en/docs/platform-specific/iphone/iphone-getting-started/iphone-build-process"},next:{title:"\u5728 iOS \u8bbe\u5907\u4e0a\u8fdb\u884c\u6545\u969c\u6392\u9664",permalink:"/en/docs/platform-specific/iphone/trouble-shooting-iphone"}},c={},u=[{value:"\u9879\u76ee\u76ee\u6807",id:"\u9879\u76ee\u76ee\u6807",level:2},{value:"Classes \u6587\u4ef6\u5939",id:"classes-\u6587\u4ef6\u5939",level:2},{value:"Data \u6587\u4ef6\u5939",id:"data-\u6587\u4ef6\u5939",level:2},{value:"Libraries \u6587\u4ef6\u5939",id:"libraries-\u6587\u4ef6\u5939",level:2},{value:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939",id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939",level:2},{value:"\u56fe\u5f62\u6587\u4ef6",id:"\u56fe\u5f62\u6587\u4ef6",level:2},{value:"\u5c5e\u6027\u5217\u8868 (.plist) \u6587\u4ef6",id:"\u5c5e\u6027\u5217\u8868-plist-\u6587\u4ef6",level:2},{value:"\u5176\u4ed6\u6587\u4ef6",id:"\u5176\u4ed6\u6587\u4ef6",level:2},{value:"\u901a\u8fc7 xcodebuild \u6784\u5efa Xcode \u9879\u76ee",id:"\u901a\u8fc7-xcodebuild-\u6784\u5efa-xcode-\u9879\u76ee",level:4},{value:"\u4fee\u6539 Xcode \u9879\u76ee",id:"\u4fee\u6539-xcode-\u9879\u76ee",level:4},{value:"\u9879\u76ee\u76ee\u6807",id:"\u9879\u76ee\u76ee\u6807-1",level:2}],d={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"unity-xcode-\u9879\u76ee\u7684\u7ed3\u6784"}),"Unity Xcode \u9879\u76ee\u7684\u7ed3\u6784"),(0,r.kt)("p",null,"\u4e3a iOS \u5e73\u53f0\u6784\u5efa Unity \u9879\u76ee\u65f6\uff0cUnity \u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b Xcode \u9879\u76ee\u7684\u6587\u4ef6\u5939\u3002\u4e3a\u4e86\u5728\u5c06\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5230\u8bbe\u5907\u4e0a\u4e4b\u524d\u5bf9\u6b64\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u7f16\u8bd1\u548c\u7b7e\u540d\uff0c\u60a8\u9700\u8981\u8be5\u9879\u76ee\u3002\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u4f7f\u7528\u8be5\u9879\u76ee\u6765\u51c6\u5907\u548c\u6346\u7ed1\u6e38\u620f\uff0c\u4ee5\u4fbf\u5206\u53d1\u5230 App Store \u4e0a\u3002\u81ea Unity 2019.3 \u8d77\uff0cXcode \u9879\u76ee\u7ed3\u6784\u5df2\u66f4\u6539\uff0c\u65e8\u5728\u652f\u6301\u901a\u8fc7 ",(0,r.kt)("a",i({parentName:"p"},{href:"/en/docs/platform-specific/iphone/unityasa-library-i-os"}),"Unity \u7528\u4f5c\u5e93"),"\u5c06 Unity \u96c6\u6210\u5230\u539f\u751f iOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"),(0,r.kt)("p",null,"\u6784\u5efa iOS \u9879\u76ee\u4e4b\u524d\uff0c\u52a1\u5fc5\u5728 iOS ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/PlayerSettingsiOS-Other.html"})," ",(0,r.kt)("strong",{parentName:"a"},"Player Settings")," "),"*","*","*","*","\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings ",">"," Player Settings")," \uff09\u4e2d\u8bbe\u7f6e  ",(0,r.kt)("strong",{parentName:"p"},"Bundle Identifier")," \u3002\u8fd8\u53ef\u4ee5\u9009\u62e9\u5e94\u7528\u7a0b\u5e8f\u7684\u76ee\u6807\u662f\u6a21\u62df\u5668\u8fd8\u662f\u5b9e\u9645\u8bbe\u5907\u3002\u4e3a\u6b64\uff0c\u8bf7\u66f4\u6539  ",(0,r.kt)("strong",{parentName:"p"},"SDK version"),"  \u5b57\u6bb5\u3002"),(0,r.kt)("h2",i({},{id:"\u9879\u76ee\u76ee\u6807"}),"\u9879\u76ee\u76ee\u6807"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u751f\u6210\u7684 Unity iOS Xcode \u9879\u76ee\u90fd\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784\u548c\u76ee\u6807\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Unity-iPhone-Project-Folder.png",alt:"Unity-iPhone-Project-Folder.png"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UnityFramework")," \uff1a ",(0,r.kt)("strong",{parentName:"li"},"UnityFramework"),"  \u76ee\u6807\u4e2d\u7684\u4e00\u4e2a\u5e93\u90e8\u5206\u3002\u6b64\u90e8\u5206\u5305\u62ec ",(0,r.kt)("em",{parentName:"li"},"Classes"),"\u3001",(0,r.kt)("em",{parentName:"li"},"UnityFramework")," \u548c ",(0,r.kt)("em",{parentName:"li"},"Libraries")," \u6587\u4ef6\u5939\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u6846\u67b6\u3002\u53e6\u5916\uff0cXcode \u5c06\u6b64\u90e8\u5206\u7528\u4e8e\u6784\u5efa ",(0,r.kt)("em",{parentName:"li"},"UnityFramework.framework")," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unity-iPhone")," \uff1a ",(0,r.kt)("strong",{parentName:"li"},"Unity-iPhone"),"  \u76ee\u6807\u4e2d\u7684\u4e00\u4e2a\u7626\u542f\u52a8\u5668\u90e8\u5206\u3002\u6b64\u90e8\u5206\u5305\u62ec ",(0,r.kt)("em",{parentName:"li"},"MainApp")," \u6587\u4ef6\u5939\u548c\u5e94\u7528\u7a0b\u5e8f\u8868\u73b0\u6570\u636e\uff08\u4f8b\u5982\u542f\u52a8\u5c4f\u5e55\u3001",(0,r.kt)("em",{parentName:"li"},".xib")," \u6587\u4ef6\u3001\u56fe\u6807\u3001\u6570\u636e\u548c ",(0,r.kt)("em",{parentName:"li"},"/Info.plist")," \u6587\u4ef6\uff09\uff0c\u5e76\u53ef\u8fd0\u884c\u8be5\u5e93\u3002 ",(0,r.kt)("strong",{parentName:"li"},"Unity-iPhone"),"  \u76ee\u6807\u5bf9  ",(0,r.kt)("strong",{parentName:"li"},"UnityFramework"),"  \u76ee\u6807\u5177\u6709\u5355\u4e00\u4f9d\u8d56\u5173\u7cfb\u3002")),(0,r.kt)("h2",i({},{id:"classes-\u6587\u4ef6\u5939"}),"Classes \u6587\u4ef6\u5939"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Classes")," \u6587\u4ef6\u5939\u5305\u542b\u7528\u4e8e\u96c6\u6210 Unity Runtime \u548c Objective-C \u7684\u4ee3\u7801\u3002Unity \u5c06\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\u5b58\u50a8\u5728\u6b64\u6587\u4ef6\u5939\u5185\u7684 ",(0,r.kt)("em",{parentName:"p"},"main.mm")," \u548c ",(0,r.kt)("em",{parentName:"p"},"UnityAppController.mm/h")," \u6587\u4ef6\u4e2d\u3002\u60a8\u53ef\u4ee5\u81ea\u884c\u521b\u5efa\u6d3e\u751f\u81ea UnityAppController \u7684 AppDelegate\uff0c\u6216\u8005\u5982\u679c\u60a8\u7684\u4efb\u4f55\u63d2\u4ef6\u5305\u542b ",(0,r.kt)("em",{parentName:"p"},"AppController.h","_","\uff0c\u5219\u60a8\u53ef\u4ee5\u6539\u4e3a\u5305\u542b")," UnityAppController.h",(0,r.kt)("em",{parentName:"p"},"\u3002\u5982\u679c")," Plugins/iOS","_"," \u6587\u4ef6\u5939\u5305\u542b ","_","AppController.mm/h","_","\uff0c\u53ef\u4ee5\u5bf9\u5b83\u4eec\u8fdb\u884c\u5408\u5e76\u548c\u91cd\u547d\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"InternalProfiler.h")," \u6587\u4ef6\u8fd8\u5b9a\u4e49\u4e00\u4e2a\u6761\u4ef6\u7f16\u8bd1\u5668\u6765\u542f\u7528\u5185\u90e8\u6027\u80fd\u5206\u6790\u5668\u3002\u6b64\u6587\u4ef6\u5939\u4e2d\u7684\u4ee3\u7801\u4e0d\u4f1a\u7ecf\u5e38\u66f4\u6539\uff0c\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u653e\u7f6e\u81ea\u5b9a\u4e49\u7c7b\u3002\u5982\u679c\u60a8\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Append"),"  \u6a21\u5f0f\uff0cXcode \u4f1a\u5728\u4e0d\u540c\u6784\u5efa\u4e2d\u4fdd\u7559\u5bf9\u6b64\u6587\u4ef6\u5939\u7684\u66f4\u6539\u3002\u4f46\u662f\uff0c\u6b64\u529f\u80fd\u4e0d\u652f\u6301\u591a\u4e2a\u6784\u5efa\u76ee\u6807\uff0c\u5e76\u4e14\u9700\u8981\u56fa\u5b9a\u7ed3\u6784\u7684 ",(0,r.kt)("em",{parentName:"p"},"Libraries")," \u6587\u4ef6\u5939\u3002"),(0,r.kt)("p",null,"Unity \u7684\u5185\u90e8\u6027\u80fd\u5206\u6790\u5668\u5177\u6709\u5feb\u901f\u4e14\u4e0d\u6613\u5bdf\u89c9\u7684\u7279\u70b9\uff0c\u5e76\u63d0\u4f9b\u4ee5\u4e0b\u76f8\u5173\u57fa\u672c\u4fe1\u606f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u54ea\u4e2a\u5b50\u7cfb\u7edf\u5360\u7528\u6700\u591a\u7684\u5e27\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},".NET \u5806\u5927\u5c0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"GC \u4e8b\u4ef6\u8ba1\u6570\u548c\u6301\u7eed\u65f6\u95f4\u3002")),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",i({parentName:"p"},{href:"unity%5Cplatform-specific%5Ciphone%5Ci-os-%E9%AB%98%E7%BA%A7%E4%B8%BB%E9%A2%98%5Ciphone-performance%5Ciphone-internal-profiler.md"}),"\u5185\u7f6e\u6027\u80fd\u5206\u6790\u5668"),"\u7684\u76f8\u5173\u6587\u6863\u3002"),(0,r.kt)("h2",i({},{id:"data-\u6587\u4ef6\u5939"}),"Data \u6587\u4ef6\u5939"),(0,r.kt)("p",null,"\u6b64\u6587\u4ef6\u5939\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u7684\u5e8f\u5217\u5316\u8d44\u6e90\u4ee5\u53ca .NET \u7a0b\u5e8f\u96c6\uff08.dll \u6216 .dat \u6587\u4ef6\uff09\uff0c\u5176\u5f62\u5f0f\u4e3a\u5b8c\u6574\u4ee3\u7801\u6216\u5143\u6570\u636e\uff08\u53d6\u51b3\u4e8e\u4ee3\u7801\u5265\u79bb\u8bbe\u7f6e\uff09\u3002",(0,r.kt)("em",{parentName:"p"},"machine.config")," \u6587\u4ef6\u53ef\u4ee5\u8bbe\u7f6e\u5404\u79cd .NET \u670d\u52a1\uff08\u4f8b\u5982\u5b89\u5168\u6027\u548c WebRequest\uff09\u3002Xcode \u5728\u6bcf\u6b21\u6784\u5efa\u65f6\u90fd\u4f1a\u5237\u65b0\u6b64\u6587\u4ef6\u5939\u7684\u5185\u5bb9\u3002\u60a8\u4e0d\u5e94\u5bf9\u5176\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c","_","Data","_"," \u6587\u4ef6\u5939\u7684  ",(0,r.kt)("strong",{parentName:"p"},"Target Membership"),"  \u8bbe\u7f6e\u4e3a  ",(0,r.kt)("strong",{parentName:"p"},"Unity-iPhone"),"  \u76ee\u6807\uff0c\u5e76\u4e14 Unity Runtime \u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mainBundle")," \u4e2d\u641c\u7d22\u8be5\u6587\u4ef6\u5939\u3002\u8981\u66f4\u6539 Unity Runtime \u7528\u4e8e\u67e5\u627e ",(0,r.kt)("em",{parentName:"p"},"Data")," \u6587\u4ef6\u5939\u7684\u9ed8\u8ba4\u6346\u7ed1\u5305\uff0c\u8bf7\u5728 UnityFramework \u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},'setDataBundleId: "com.my.product"'),"\uff0c\u7136\u540e\u8c03\u7528\u8fd0\u884c\u51fd\u6570\u4e4b\u4e00\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u62e5\u6709 ",(0,r.kt)("em",{parentName:"p"},"Data")," \u4ee5\u53ca UnityFramework \u8c03\u7528\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},'setDataBundleId: "com.unity3d.framework"')," \u5e76\u5c06  ",(0,r.kt)("strong",{parentName:"p"},"Target Membership"),"  \u8bbe\u7f6e\u4e3a  ",(0,r.kt)("strong",{parentName:"p"},"UnityFramework")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Xcode-Data-Folder.png",alt:"Xcode-Data-Folder.png"}))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4ec5\u5f53 ",(0,r.kt)("em",{parentName:"p"},"Data")," \u6587\u4ef6\u5939\u662f\u5e94\u7528\u7a0b\u5e8f\u76ee\u6807\u7684\u4e00\u90e8\u5206\u800c\u4e0d\u662f UnityFramework \u76ee\u6807\u7684\u4e00\u90e8\u5206\u65f6\uff0c\u624d\u652f\u6301\u6309\u9700\u52a0\u8f7d\u8d44\u6e90 (On-Demand Resources)\u3002"),(0,r.kt)("h2",i({},{id:"libraries-\u6587\u4ef6\u5939"}),"Libraries \u6587\u4ef6\u5939"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Libraries")," \u6587\u4ef6\u5939\u5305\u542b\u7528\u4e8e IL2CPP \u7684 ",(0,r.kt)("em",{parentName:"p"},"libil2cpp.a"),"\u3002",(0,r.kt)("em",{parentName:"p"},"libiPhone-lib.a")," \u6587\u4ef6\u662f Unity Runtime \u9759\u6001\u5e93\uff0c","_","RegisterMonoModules.cpp","_"," \u5c06 Unity \u539f\u751f\u4ee3\u7801\u4e0e .NET \u7ed1\u5b9a\u3002Xcode \u5728\u6bcf\u6b21\u6784\u5efa\u65f6\u90fd\u4f1a\u5237\u65b0\u6b64\u6587\u4ef6\u5939\u7684\u5185\u5bb9\u3002\u60a8\u4e0d\u5e94\u5bf9\u5176\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002"),(0,r.kt)("h2",i({},{id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939"}),"\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u6587\u4ef6\u653e\u7f6e\u4e8e\u6b64\u3002"),(0,r.kt)("h2",i({},{id:"\u56fe\u5f62\u6587\u4ef6"}),"\u56fe\u5f62\u6587\u4ef6"),(0,r.kt)("p",null,"\u56fe\u6807\u548c\u542f\u52a8\u753b\u9762\uff08.png \u6587\u4ef6\uff09\u4f4d\u4e8e ",(0,r.kt)("em",{parentName:"p"},"Unity-iPhone")," \u6587\u4ef6\u5939\u4e2d\u7684\u8d44\u6e90\u76ee\u5f55\u4e2d\u3002Unity \u81ea\u52a8\u7ba1\u7406\u8fd9\u4e9b\u6587\u4ef6\u3002\u542f\u52a8\u5c4f\u5e55\u3001\u5b83\u4eec\u7684 XML \u63a5\u53e3\u6784\u5efa\u5668\uff08.xib \u6587\u4ef6\uff09\u548c Storyboard \u6587\u4ef6\u5b58\u50a8\u5728\u9879\u76ee\u7684\u6839\u6587\u4ef6\u5939\u4e2d\u3002\u8981\u5728 Unity \u4e2d\u8bbe\u7f6e\u5b83\u4eec\uff0c\u8bf7\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Player"),"   ",(0,r.kt)("strong",{parentName:"p"},"Settings"),"  \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings ",">"," Player Settings")," \uff09\u3002\u521b\u5efa\u81ea\u5b9a\u4e49\u542f\u52a8\u56fe\u50cf\u65f6\uff0c\u8bf7\u786e\u4fdd\u56fe\u50cf\u9075\u5b88 Apple \u7684",(0,r.kt)("a",i({parentName:"p"},{href:"https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/launch-screen/"}),"\u4eba\u673a\u63a5\u53e3\u6307\u5357"),"\u3002"),(0,r.kt)("h2",i({},{id:"\u5c5e\u6027\u5217\u8868-plist-\u6587\u4ef6"}),"\u5c5e\u6027\u5217\u8868 (.plist) \u6587\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ece Unity \u7684  ",(0,r.kt)("strong",{parentName:"p"},"Player Settings")," \uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings ",">"," Player Settings")," \uff0c\u7136\u540e\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Other"),"  \u90e8\u5206\u5e76\u5411\u4e0b\u6eda\u52a8\u5230  ",(0,r.kt)("strong",{parentName:"p"},"Identification"),"  \u90e8\u5206\uff1b\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/2019.3/Documentation/Manual/PlayerSettingsiOS-Other.html#Identification"}),"iOS Player \u8bbe\u7f6e - Identification")," \u7684\u76f8\u5173\u6587\u6863\uff09\u4e2d\u7ba1\u7406 Unity-iPhone \u76ee\u6807\u5185\u7684 ",(0,r.kt)("em",{parentName:"p"},"/Info.plist")," \u6587\u4ef6\uff08\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"mainBundle")," \u8fdb\u884c\u8bbf\u95ee\uff09\u3002Unity \u5728\u6784\u5efa\u64ad\u653e\u5668\u65f6\u4f1a\u66f4\u65b0\u6b64\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u8fdb\u884c\u66ff\u6362\u3002\u9664\u975e\u8feb\u4e0d\u5f97\u5df2\uff0c\u5426\u5219\u4e0d\u8981\u5bf9\u5176\u8fdb\u884c\u66f4\u6539\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"/UnityFramework/Info.plist")," \u6587\u4ef6\uff08\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},'bundleWithIdentifier:@"com.unity3d.framework"')," \u8fdb\u884c\u8bbf\u95ee\uff09\u662f UnityFramework \u7684\u4e00\u90e8\u5206\u3002\u60a8\u53ef\u4ee5\u5c06\u4e00\u4e9b\u503c\u4fdd\u7559\u5728\u6b64\u5904\uff0c\u800c\u4e0d\u662f mainBundle \u7684 ",(0,r.kt)("em",{parentName:"p"},"/Info.plist")," \u6587\u4ef6\u4e2d\uff0c\u8fd9\u6837\u80fd\u786e\u4fdd\u5982\u679c\u5c06 UnityFramework \u79fb\u81f3\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u83b7\u53d6\u8fd9\u4e9b\u503c\u3002"),(0,r.kt)("h2",i({},{id:"\u5176\u4ed6\u6587\u4ef6"}),"\u5176\u4ed6\u6587\u4ef6"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6587\u4ef6\u5305\u62ec Xcode \u9879\u76ee\u6587\u4ef6\uff08",(0,r.kt)("em",{parentName:"p"},".xcodeproj")," \u6587\u4ef6\uff09\u4ee5\u53ca\u4ec5\u5728  ",(0,r.kt)("strong",{parentName:"p"},"Project Navigator"),"  \u4e2d\u663e\u793a\u7684\u6846\u67b6\u94fe\u63a5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Xcode-Other-Files.png",alt:"Xcode-Other-Files.png"}))),(0,r.kt)("h4",i({},{id:"\u901a\u8fc7-xcodebuild-\u6784\u5efa-xcode-\u9879\u76ee"}),"\u901a\u8fc7 xcodebuild \u6784\u5efa Xcode \u9879\u76ee"),(0,r.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\u6765\u6307\u5b9a\u6784\u5efa\u8bbe\u7f6e\u65f6\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u6240\u6709 Xcode \u9879\u76ee\u76ee\u6807\u3002\u4e3a\u4e86\u9632\u6b62\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u67d0\u4e9b\u6784\u5efa\u8bbe\u7f6e\u5177\u6709\u540e\u7f00\u7248\u672c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u540e\u7f00\u7248\u672c\u6765\u6307\u5b9a\u6784\u5efa\u8bbe\u7f6e\u5f71\u54cd\u7684\u76ee\u6807\u3002\u8fd9\u662f\u901a\u8fc7\u7528\u6237\u5b9a\u4e49\u7684\u8bbe\u7f6e\u6765\u5b9e\u73b0\u7684\uff08\\ **APP \u540e\u7f00\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u76ee\u6807\uff0c","*","* FRAMEWORK \u540e\u7f00\u7528\u4e8e\u6846\u67b6\u76ee\u6807\uff09\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 xcodebuild \u8fdb\u884c\u6784\u5efa\u65f6\uff0c\u8bf7\u5c06\u540e\u7f00\u7248\u672c\u7528\u4e8e\uff1a"),(0,r.kt)("p",null,"PRODUCT","_","NAME -",">"," PRODUCT","_","NAME","_","APP"),(0,r.kt)("p",null,"PROVISIONING","_","PROFILE -",">"," PROVISIONING","_","PROFILE","_","APP"),(0,r.kt)("p",null,"PROVISIONING","_","PROFILE","_","SPECIFIER -",">"," PROVISIONING","_","PROFILE","_","SPECIFIER","_","APP"),(0,r.kt)("p",null,"OTHER","_","LDFLAGS -",">"," OTHER","_","LDFLAGS","_","FRAMEWORK"),(0,r.kt)("p",null,"\u6839\u636e\u60a8\u7684\u81ea\u5b9a\u4e49\u6784\u5efa\u7ba1\u7ebf\uff0c\u60a8\u53ef\u4ee5\u6269\u5c55\u6b64\u5217\u8868\u4ee5\u6db5\u76d6\u5176\u4ed6\u8bbe\u7f6e\u3002"),(0,r.kt)("h4",i({},{id:"\u4fee\u6539-xcode-\u9879\u76ee"}),"\u4fee\u6539 Xcode \u9879\u76ee"),(0,r.kt)("p",null,"\u8981\u4fee\u6539\u751f\u6210\u7684 Xcode \u9879\u76ee\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/iOS.Xcode.PBXProject.html"}),"Xcode.PBXProject"),"\u3002"),(0,r.kt)("h2",i({},{id:"\u9879\u76ee\u76ee\u6807-1"}),"\u9879\u76ee\u76ee\u6807"),(0,r.kt)("p",null,"\u4ece Unity 2019.3 \u5f00\u59cb\uff0c\u5df2\u5f03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PBXProject.GetUnityTargetName")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},'pbxProject-&gt;TargetGuidByName("Unity-iPhone")'),"\u3002\u63a5\u4e0b\u6765\u53ef\u4ee5\u6539\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pbxProject-&gt;GetUnityFrameworkTargetGuid()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"pbxProject-&gt;GetUnityMainTargetGuid()"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'// \u5df2\u5f03\u7528\nstring targetGuid = proj.TargetGuidByName("Unity-iPhone");\nstring targetGuid = proj.TargetGuidByName(PBXProject.GetUnityTargetName());\n\n// \u6539\u4e3a\u4ee5\u4e0b\u8c03\u7528\u4e4b\u4e00\nstring targetGuid = proj.GetUnityFrameworkTargetGuid(); \nstring targetGuid = proj.GetUnityMainTargetGuid();\n')),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u5305\u6216\u81ea\u5b9a\u4e49\u6784\u5efa\u540e\u5904\u7406\u5668\u4e2d\u540c\u65f6\u652f\u6301\u65b0\u65e7\u4ee3\u7801\u8def\u5f84\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,"1.\u5c3d\u53ef\u80fd\u4f9d\u9760\u63d2\u4ef6\u5bfc\u5165\u5668\u529f\u80fd\uff08\u4f8b\u5982\uff0c\u7528\u4e8e\u6307\u5b9a\u5176\u4ed6\u6846\u67b6\uff09\u3002 2.\u4f7f\u7528\u53cd\u5c04\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'string mainTargetGuid;\nstring unityFrameworkTargetGuid;\n        \nvar unityMainTargetGuidMethod = proj.GetType().GetMethod("GetUnityMainTargetGuid");\nvar unityFrameworkTargetGuidMethod = proj.GetType().GetMethod("GetUnityFrameworkTargetGuid");\n                \nif (unityMainTargetGuidMethod != null && unityFrameworkTargetGuidMethod != null)\n{\n    mainTargetGuid = (string)unityMainTargetGuidMethod.Invoke(proj, null);\n    unityFrameworkTargetGuid = (string)unityFrameworkTargetGuidMethod.Invoke(proj, null);\n}\nelse\n{\n    mainTargetGuid = proj.TargetGuidByName ("Unity-iPhone");\n    unityFrameworkTargetGuid = mainTargetGuid;\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("a",i({parentName:"li"},{href:"https://docs.unity3d.com/Manual/30_search.html?q=newin20193"}),"2019.3")," \u4e2d\u6dfb\u52a0\u4e86\u201cUnity \u7528\u4f5c iOS \u5e93\u201d\u3002NewIn20193")))}m.isMDXComponent=!0}}]);