"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85483],{35318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=l(n),m=i,y=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(y,a(a({ref:e},u),{},{components:n})):r.createElement(y,a({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25069:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});n(27378);var r=n(35318);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const a={id:"Unity Remote",slug:"/platform-specific/android/android-developing/android-testing-and-debugging/unity-remote5"},d="Unity Remote",p={unversionedId:"unity/platform-specific/android/android-developing/android-testing-and-debugging/Unity Remote",id:"version-Unity@2022.1/unity/platform-specific/android/android-developing/android-testing-and-debugging/Unity Remote",title:"Unity Remote",description:"Unity Remote \u662f\u53ef\u4e0b\u8f7d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e8\u5728\u5e2e\u52a9\u8fdb\u884c Android\u3001iOS \u548c tvOS \u5f00\u53d1\u3002\u4ece Unity Editor \u4ee5\u64ad\u653e\u6a21\u5f0f\u8fd0\u884c\u9879\u76ee\u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u4e0e Unity \u8fde\u63a5\u3002Editor \u7684\u53ef\u89c6\u8f93\u51fa\u5c06\u53d1\u9001\u5230\u8bbe\u5907\u7684\u5c4f\u5e55\uff0c\u800c\u5b9e\u65f6\u8f93\u5165\u5c06\u53d1\u9001\u56de Unity \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u9879\u76ee\u3002\u8fd9\u6837\uff0c\u60a8\u53ef\u4ee5\u5f88\u597d\u5730\u4e86\u89e3\u60a8\u7684\u6e38\u620f\u5728\u76ee\u6807\u8bbe\u5907\u4e0a\u7684\u771f\u5b9e\u89c6\u89c9\u6548\u679c\u548c\u5904\u7406\u65b9\u5f0f\uff0c\u800c\u53c8\u7701\u53bb\u4e86\u9488\u5bf9\u6bcf\u9879\u6d4b\u8bd5\u8fdb\u884c\u5b8c\u6574\u6784\u5efa\u7684\u9ebb\u70e6\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/android/android-developing/android-testing-and-debugging/unity-remote5.md",sourceDirName:"unity/platform-specific/android/android-developing/android-testing-and-debugging",slug:"/platform-specific/android/android-developing/android-testing-and-debugging/unity-remote5",permalink:"/docs/platform-specific/android/android-developing/android-testing-and-debugging/unity-remote5",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Unity Remote",slug:"/platform-specific/android/android-developing/android-testing-and-debugging/unity-remote5"},sidebar:"unity",previous:{title:"Android symbols",permalink:"/docs/platform-specific/android/android-developing/android-testing-and-debugging/android-symbols"},next:{title:"Android thread configuration",permalink:"/docs/platform-specific/android/android-developing/android-thread-configuration"}},l={},u=[{value:"\u8bbe\u5907\u548c\u529f\u80fd\u652f\u6301",id:"\u8bbe\u5907\u548c\u529f\u80fd\u652f\u6301",level:2},{value:"\u83b7\u53d6\u548c\u4f7f\u7528 Unity Remote",id:"\u83b7\u53d6\u548c\u4f7f\u7528-unity-remote",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u6211\u63d2\u5165\u4e86\u591a\u4e2a\u8bbe\u5907\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u8bbe\u5907\u80fd\u4e0e Unity \u914d\u5408\u4f7f\u7528",id:"\u6211\u63d2\u5165\u4e86\u591a\u4e2a\u8bbe\u5907\u4f46\u53ea\u6709\u4e00\u4e2a\u8bbe\u5907\u80fd\u4e0e-unity-\u914d\u5408\u4f7f\u7528",level:3},{value:"\u5728 Unity Remote \u4e2d\u8fd0\u884c\u6e38\u620f\u65f6\uff0c\u56fe\u5f62\u8d28\u91cf\u975e\u5e38\u5dee",id:"\u5728-unity-remote-\u4e2d\u8fd0\u884c\u6e38\u620f\u65f6\u56fe\u5f62\u8d28\u91cf\u975e\u5e38\u5dee",level:3}],c={toc:u};function s(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",i({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"unity-remote"}),"Unity Remote"),(0,r.kt)("p",null,"Unity Remote \u662f\u53ef\u4e0b\u8f7d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e8\u5728\u5e2e\u52a9\u8fdb\u884c Android\u3001iOS \u548c tvOS \u5f00\u53d1\u3002\u4ece Unity Editor \u4ee5\u64ad\u653e\u6a21\u5f0f\u8fd0\u884c\u9879\u76ee\u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u4e0e Unity \u8fde\u63a5\u3002Editor \u7684\u53ef\u89c6\u8f93\u51fa\u5c06\u53d1\u9001\u5230\u8bbe\u5907\u7684\u5c4f\u5e55\uff0c\u800c\u5b9e\u65f6\u8f93\u5165\u5c06\u53d1\u9001\u56de Unity \u4e2d\u6b63\u5728\u8fd0\u884c\u7684\u9879\u76ee\u3002\u8fd9\u6837\uff0c\u60a8\u53ef\u4ee5\u5f88\u597d\u5730\u4e86\u89e3\u60a8\u7684\u6e38\u620f\u5728\u76ee\u6807\u8bbe\u5907\u4e0a\u7684\u771f\u5b9e\u89c6\u89c9\u6548\u679c\u548c\u5904\u7406\u65b9\u5f0f\uff0c\u800c\u53c8\u7701\u53bb\u4e86\u9488\u5bf9\u6bcf\u9879\u6d4b\u8bd5\u8fdb\u884c\u5b8c\u6574\u6784\u5efa\u7684\u9ebb\u70e6\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u8981\u4f7f Unity Remote \u6b63\u5e38\u5de5\u4f5c\uff0c\u5fc5\u987b\u5728\u5f00\u53d1\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 Android SDK\u3002"),(0,r.kt)("p",null,"Unity Remote \u66ff\u6362\u4e86\u4e0e\u65e9\u671f\u7248\u672c\u4e00\u8d77\u4f7f\u7528\u7684\u72ec\u7acb iOS \u548c Android Remote \u5e94\u7528\u7a0b\u5e8f\u3002\u65e7\u7684 Remote \u5e94\u7528\u7a0b\u5e8f\u4e0d\u518d\u53d7\u652f\u6301\u3002"),(0,r.kt)("h2",i({},{id:"\u8bbe\u5907\u548c\u529f\u80fd\u652f\u6301"}),"\u8bbe\u5907\u548c\u529f\u80fd\u652f\u6301"),(0,r.kt)("p",null,"Unity Remote \u76ee\u524d\u652f\u6301 Android \u8bbe\u5907\uff08\u5728 Windows \u548c OS X \u4e0a\u901a\u8fc7 USB \u8fde\u63a5\uff09\u548c iOS \u8bbe\u5907\uff08iPhone\u3001iPad\u3001iPod touch \u548c Apple TV\uff0c\u5728 OS X \u4ee5\u53ca\u88c5\u6709 iTunes \u7684 Windows \u4e0a\u901a\u8fc7 USB\uff09\u3002"),(0,r.kt)("p",null,"\u6b63\u5728\u8fd0\u884c\u7684 Unity \u9879\u76ee\u7684 Game \u89c6\u56fe\u5728\u8bbe\u5907\u5c4f\u5e55\u4e0a\u590d\u73b0\uff0c\u4f46\u5e27\u7387\u964d\u4f4e\u3002\u6765\u81ea\u8bbe\u5907\u7684\u4ee5\u4e0b\u8f93\u5165\u6570\u636e\u4e5f\u5c06\u6d41\u5f0f\u4f20\u56de Editor\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e6\u6478\u548c\u89e6\u7b14\u8f93\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u901f\u5ea6\u8ba1"),(0,r.kt)("li",{parentName:"ul"},"\u9640\u87ba\u4eea"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u76f8\u673a\u6d41"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5357\u9488"),(0,r.kt)("li",{parentName:"ul"},"GPS"),(0,r.kt)("li",{parentName:"ul"},"\u6e38\u620f\u6746\u540d\u79f0\u548c\u8f93\u5165")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cRemote \u5e94\u7528\u7a0b\u5e8f\u53ea\u663e\u793a\u8bbe\u5907\u4e0a\u7684\u53ef\u89c6\u8f93\u51fa\u5e76\u4ece\u4e2d\u83b7\u53d6\u8f93\u5165\u3002\u6e38\u620f\u7684\u5b9e\u9645\u5904\u7406\u4ecd\u7531\u684c\u9762\u8ba1\u7b97\u673a\u4e0a\u7684 Editor \u5b8c\u6210\uff0c\u56e0\u6b64\u5176\u6027\u80fd\u5e76\u4e0d\u662f\u6784\u5efa\u540e\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u7cbe\u786e\u53cd\u6620\u3002"),(0,r.kt)("h2",i({},{id:"\u83b7\u53d6\u548c\u4f7f\u7528-unity-remote"}),"\u83b7\u53d6\u548c\u4f7f\u7528 Unity Remote"),(0,r.kt)("p",null,"\u60a8\u80fd\u591f\u4ee5\u81ea\u5df1\u6784\u5efa\u7684 Unity \u9879\u76ee\u7684\u5f62\u5f0f\u514d\u8d39\u4e0b\u8f7d Unity Remote\uff0c\u4e5f\u53ef\u4ee5\u4ece\u8bbe\u5907\u7684\u5e94\u7528\u5546\u5e97\u4e0b\u8f7d\u9884\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6765\u81ea ",(0,r.kt)("a",i({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=com.unity3d.mobileremote"}),"Google Play")," \u7684  ",(0,r.kt)("strong",{parentName:"li"},"Android \u5e94\u7528\u7a0b\u5e8f")," "),(0,r.kt)("li",{parentName:"ul"},"\u6765\u81ea ",(0,r.kt)("a",i({parentName:"li"},{href:"https://itunes.apple.com/us/app/unity-remote-4/id871767552"}),"App Store")," \u7684  ",(0,r.kt)("strong",{parentName:"li"},"iOS \u548c tvOS \u5e94\u7528\u7a0b\u5e8f")," ")),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5e94\u7528\u7a0b\u5e8f\u540e\uff0c\u8bf7\u5728\u8bbe\u5907\u4e0a\u5b89\u88c5\u5e76\u8fd0\u884c\u5b83\uff0c\u5e76\u7528 USB \u7ebf\u7f06\u5c06\u8bbe\u5907\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f Unity \u80fd\u591f\u4e0e\u60a8\u7684\u8bbe\u5907\u4e00\u8d77\u4f7f\u7528\uff0c\u8bf7\u5728 Unity \u4e2d\u6253\u5f00 ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/unity-overview/editor-features/comp-manager-group/class-editor-manager"}),"Editor")," \u8bbe\u7f6e\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Project Settings")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Editor"),"  \u7c7b\u522b\uff09\uff0c\u5e76\u4ece  ",(0,r.kt)("strong",{parentName:"p"},"Unity Remote"),"  \u90e8\u5206\u4e2d\u9009\u62e9\u8981\u4f7f\u7528\u7684\u8bbe\u5907\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UniRemoteEdSettings5.png",alt:"UniRemoteEdSettings5.png"}))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u8981\u6307\u5b9a Android SDK \u7684\u4f4d\u7f6e\uff0c\u8bf7\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Preferences"),"  (Windows) \u6216  ",(0,r.kt)("strong",{parentName:"p"},"Unity"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Preferences"),"  (Mac)\u3002"),(0,r.kt)("p",null,"\u5355\u51fb Editor \u4e2d\u7684 Play \u6309\u94ae\u53ef\u4ee5\u770b\u5230\u60a8\u7684\u6e38\u620f\u51fa\u73b0\u5728\u8bbe\u5907\u4e0a\u4ee5\u53ca Unity \u6e38\u620f\u7a97\u53e3\u4e2d\uff08\u5f53 Unity \u8fde\u63a5\u5230 Remote \u5e94\u7528\u7a0b\u5e8f\u65f6\uff09\u3002\u5f53\u6e38\u620f\u64ad\u653e\u65f6\uff0c\u6765\u81ea\u8bbe\u5907\uff08\u52a0\u901f\u5ea6\u8ba1\u7b49\uff09\u7684\u8f93\u5165\u4f1a\u53d1\u9001\u5230\u811a\u672c\uff0c\u5c31\u597d\u50cf\u5b83\u4eec\u5728\u8bbe\u5907\u672c\u8eab\u4e0a\u8fd0\u884c\u4e00\u6837\u3002"),(0,r.kt)("h2",i({},{id:"\u6545\u969c\u6392\u9664"}),"\u6545\u969c\u6392\u9664"),(0,r.kt)("h3",i({},{id:"\u6211\u63d2\u5165\u4e86\u591a\u4e2a\u8bbe\u5907\u4f46\u53ea\u6709\u4e00\u4e2a\u8bbe\u5907\u80fd\u4e0e-unity-\u914d\u5408\u4f7f\u7528"}),"\u6211\u63d2\u5165\u4e86\u591a\u4e2a\u8bbe\u5907\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u8bbe\u5907\u80fd\u4e0e Unity \u914d\u5408\u4f7f\u7528"),(0,r.kt)("p",null,"Unity Remote \u4e0d\u652f\u6301\u8fde\u63a5\u591a\u4e2a Android \u8bbe\u5907\uff0c\u4e3a\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u5b83\u4f1a\u81ea\u52a8\u9009\u62e9\u627e\u5230\u7684\u7b2c\u4e00\u4e2a\u8bbe\u5907\u3002\u4f46\u662f\uff0c\u53ef\u4ee5\u540c\u65f6\u8fde\u63a5\u591a\u4e2a iOS/tvOS \u8bbe\u5907\u548c\u4e00\u4e2a Android \u8bbe\u5907\uff0c\u56e0\u4e3a\u53ef\u4ee5\u4ece\u4e0a\u9762\u63d0\u5230\u7684 ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/unity-overview/editor-features/comp-manager-group/class-editor-manager"}),"Editor")," \u8bbe\u7f6e\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings")," \uff0c\u7136\u540e\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Editor"),"  \u7c7b\u522b\uff09\u4e2d\u9009\u62e9\u8981\u4f7f\u7528\u7684\u8bbe\u5907\u3002"),(0,r.kt)("h3",i({},{id:"\u5728-unity-remote-\u4e2d\u8fd0\u884c\u6e38\u620f\u65f6\u56fe\u5f62\u8d28\u91cf\u975e\u5e38\u5dee"}),"\u5728 Unity Remote \u4e2d\u8fd0\u884c\u6e38\u620f\u65f6\uff0c\u56fe\u5f62\u8d28\u91cf\u975e\u5e38\u5dee"),(0,r.kt)("p",null,"\u4f7f\u7528 Unity Remote \u65f6\uff0c\u6e38\u620f\u5b9e\u9645\u4e0a\u5728 Editor \u4e2d\u8fd0\u884c\uff0c\u540c\u65f6\u5176\u53ef\u89c6\u5185\u5bb9\u4e32\u6d41\u5230\u76ee\u6807\u8bbe\u5907\u3002\u7531\u4e8e Editor \u548c\u8bbe\u5907\u4e4b\u95f4\u7684\u5e26\u5bbd\u6709\u9650\uff0c\u56e0\u6b64\u5fc5\u987b\u5bf9\u4e32\u6d41\u5185\u5bb9\u8fdb\u884c\u5927\u91cf\u538b\u7f29\u4ee5\u4fbf\u8fdb\u884c\u4f20\u8f93\u3002\u8fd9\u79cd\u538b\u7f29\u4e0d\u53ef\u907f\u514d\u5730\u4f1a\u964d\u4f4e\u56fe\u50cf\u8d28\u91cf\u3002"),(0,r.kt)("p",null,"\u5728 Editor \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings")," \uff0c\u7136\u540e\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Editor"),"  \u7c7b\u522b\uff09\u7684  ",(0,r.kt)("strong",{parentName:"p"},"Unity Remote"),"  \u90e8\u5206\uff0c\u53ef\u4ee5\u5728 JPEG \u548c PNG \u4e4b\u95f4\u5207\u6362\u538b\u7f29\u65b9\u6cd5\u3002PNG \u538b\u7f29\u662f\u201c\u65e0\u635f\u201d\u538b\u7f29\uff08\u56e0\u6b64\u56fe\u50cf\u8d28\u91cf\u4e0d\u4f1a\u964d\u4f4e\uff09\uff0c\u4f46\u4f7f\u7528\u7684\u5e26\u5bbd\u6bd4 JPEG \u591a\u3002\u7f29\u5c0f\u5c3a\u5bf8\u7684\u56fe\u50cf\u7684\u5e26\u5bbd\u8981\u6c42\u6bd4\u5168\u5206\u8fa8\u7387\u56fe\u50cf\u7684\u5e26\u5bbd\u8981\u6c42\u66f4\u4f4e\u3002\u901a\u8fc7\u66f4\u6539\u8fd9\u4e9b\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5728\u56fe\u50cf\u7cbe\u5ea6\u4e0e\u5e27\u7387\u4e4b\u95f4\u8fdb\u884c\u6298\u8877\u3002\u4f7f\u7528\u8f83\u4f4e\u5206\u8fa8\u7387\u65f6\uff0c\u8bf7\u6ce8\u610f Unity Remote \u4f1a\u7f29\u5c0f\u56fe\u50cf\u5c3a\u5bf8\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u5e94\u6ce8\u610f\uff0cUnity Remote \u7684\u76ee\u7684\u4ec5\u4ec5\u662f\u5feb\u901f\u9002\u5f53\u68c0\u67e5\u6e38\u620f\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u65f6\u7684\u663e\u793a\u6548\u679c\u548c\u611f\u53d7\u3002\u8bf7\u786e\u4fdd\u5076\u5c14\u8fdb\u884c\u5b8c\u6574\u7684\u6784\u5efa\uff0c\u5e76\u6d4b\u8bd5\u201c\u771f\u6b63\u7684\u201d\u5e94\u7528\u7a0b\u5e8f\u3002"))}s.isMDXComponent=!0}}]);