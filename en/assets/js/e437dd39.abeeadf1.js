"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67969],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,g=m["".concat(l,".").concat(y)]||m[y]||s[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"\u505c\u7528\u6e38\u620f\u5bf9\u8c61",slug:"/unity-overview/creating-gameplay/game-objects/deactivating-game-objects"},c="\u505c\u7528\u6e38\u620f\u5bf9\u8c61",l={unversionedId:"unity/unity-overview/creating-gameplay/game-objects/\u505c\u7528\u6e38\u620f\u5bf9\u8c61",id:"version-Unity@2022.1/unity/unity-overview/creating-gameplay/game-objects/\u505c\u7528\u6e38\u620f\u5bf9\u8c61",title:"\u505c\u7528\u6e38\u620f\u5bf9\u8c61",description:"\u53ef\u4ee5\u901a\u8fc7\u5c06\u6e38\u620f\u5bf9\u8c61\u6807\u8bb0\u4e3a\u975e\u6d3b\u52a8\u6765\u6682\u65f6\u4ece\u573a\u666f\u4e2d\u79fb\u9664\u6b64\u5bf9\u8c61\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u5bfc\u822a\u5230 Inspector \u5e76\u53d6\u6d88\u9009\u4e2d\u8be5\u6e38\u620f\u5bf9\u8c61\u540d\u79f0\u65c1\u8fb9\u7684\u590d\u9009\u6846\uff08\u8bf7\u53c2\u9605\u4e0b\u56fe\uff09\uff0c\u6216\u5728\u811a\u672c\u4e2d\u4f7f\u7528 SetActive \u65b9\u6cd5\u3002\u8981\u5728\u5bf9\u8c61\u88ab\u6807\u8bb0\u4e3a\u6d3b\u52a8\u6216\u975e\u6d3b\u52a8\u65f6\u7b7e\u5165\u811a\u672c\uff0c\u8bf7\u68c0\u67e5 activeSelf \u5c5e\u6027\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/unity-overview/creating-gameplay/game-objects/deactivating-game-objects.md",sourceDirName:"unity/unity-overview/creating-gameplay/game-objects",slug:"/unity-overview/creating-gameplay/game-objects/deactivating-game-objects",permalink:"/en/docs/unity-overview/creating-gameplay/game-objects/deactivating-game-objects",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unity-overview/creating-gameplay/game-objects/deactivating-game-objects.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u505c\u7528\u6e38\u620f\u5bf9\u8c61",slug:"/unity-overview/creating-gameplay/game-objects/deactivating-game-objects"},sidebar:"unity",previous:{title:"\u4f7f\u7528\u811a\u672c\u6765\u521b\u5efa\u7ec4\u4ef6",permalink:"/en/docs/unity-overview/creating-gameplay/game-objects/creating-components"},next:{title:"\u539f\u59cb\u5bf9\u8c61\u548c\u5360\u4f4d\u5bf9\u8c61",permalink:"/en/docs/unity-overview/creating-gameplay/game-objects/primitive-objects"}},p={},u=[{value:"\u505c\u7528\u7236\u6e38\u620f\u5bf9\u8c61",id:"\u505c\u7528\u7236\u6e38\u620f\u5bf9\u8c61",level:2}],s={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u505c\u7528\u6e38\u620f\u5bf9\u8c61"}),"\u505c\u7528\u6e38\u620f\u5bf9\u8c61"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5c06\u6e38\u620f\u5bf9\u8c61\u6807\u8bb0\u4e3a\u975e\u6d3b\u52a8\u6765\u6682\u65f6\u4ece\u573a\u666f\u4e2d\u79fb\u9664\u6b64\u5bf9\u8c61\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u5bfc\u822a\u5230 Inspector \u5e76\u53d6\u6d88\u9009\u4e2d\u8be5\u6e38\u620f\u5bf9\u8c61\u540d\u79f0\u65c1\u8fb9\u7684\u590d\u9009\u6846\uff08\u8bf7\u53c2\u9605\u4e0b\u56fe\uff09\uff0c\u6216\u5728\u811a\u672c\u4e2d\u4f7f\u7528 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GameObject.SetActive.html"}),"SetActive")," \u65b9\u6cd5\u3002\u8981\u5728\u5bf9\u8c61\u88ab\u6807\u8bb0\u4e3a\u6d3b\u52a8\u6216\u975e\u6d3b\u52a8\u65f6\u7b7e\u5165\u811a\u672c\uff0c\u8bf7\u68c0\u67e5 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/GameObject-activeSelf.html"}),"activeSelf")," \u5c5e\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/deactivating1.png",alt:"\u6e38\u620f\u5bf9\u8c61\u540d\u79f0\u65c1\u8fb9\u7684\u6fc0\u6d3b\u590d\u9009\u6846\uff0c\u5747\u5728\u7ea2\u8272\u6846\u4e2d\u7a81\u51fa\u663e\u793a"}))),(0,r.kt)("p",null,"\u6e38\u620f\u5bf9\u8c61\u540d\u79f0\u65c1\u8fb9\u7684\u6fc0\u6d3b\u590d\u9009\u6846\uff0c\u5747\u5728\u7ea2\u8272\u6846\u4e2d\u7a81\u51fa\u663e\u793a"),(0,r.kt)("h2",a({},{id:"\u505c\u7528\u7236\u6e38\u620f\u5bf9\u8c61"}),"\u505c\u7528\u7236\u6e38\u620f\u5bf9\u8c61"),(0,r.kt)("p",null,"\u505c\u7528\u7236\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u4e5f\u4f1a\u505c\u7528\u5176\u6240\u6709\u5b50\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u6b64\u505c\u7528\u4f1a\u8986\u76d6\u6240\u6709\u5b50\u6e38\u620f\u5bf9\u8c61\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"activeSelf")," \u8bbe\u7f6e\uff0c\u56e0\u6b64 Unity \u4f1a\u4f7f\u7236\u7ea7\u4e0b\u7684\u6574\u4e2a\u5c42\u7ea7\u89c6\u56fe\u5c06\u53d8\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001\u3002\u8fd9\u4e0d\u4f1a\u66f4\u6539\u5b50\u6e38\u620f\u5bf9\u8c61\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"activeSelf")," \u5c5e\u6027\u7684\u503c\uff0c\u56e0\u6b64\u91cd\u65b0\u6fc0\u6d3b\u7236\u5bf9\u8c61\u65f6\uff0c\u5b50\u5bf9\u8c61\u5c06\u6062\u590d\u5230\u5176\u539f\u59cb\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u610f\u5473\u7740\u60a8\u65e0\u6cd5\u901a\u8fc7\u8bfb\u53d6\u5b50\u6e38\u620f\u5bf9\u8c61\u7684  ",(0,r.kt)("strong",{parentName:"p"},"activeSelf"),"  \u5c5e\u6027\u6765\u786e\u5b9a\u5176\u5f53\u524d\u5728\u573a\u666f\u4e2d\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u56e0\u4e3a\u5373\u4f7f\u5b83\u662f\u8bbe\u7f6e\u4e3a\u6d3b\u52a8\u7684\uff0c\u5b83\u7684\u7236\u7ea7\u4e4b\u4e00\u4e5f\u53ef\u80fd\u662f\u8bbe\u7f6e\u4e3a\u975e\u6d3b\u52a8\u7684\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u786e\u5b9a\u5b83\u5f53\u524d\u5728\u573a\u666f\u4e2d\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u5e94\u4f7f\u7528 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/GameObject-activeInHierarchy.html"}),"activeInHierarchy")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u4f1a\u8003\u8651\u5176\u7236\u7ea7\u72b6\u6001\u4ea7\u751f\u7684\u5f71\u54cd\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/deactivating2.png",alt:"\u6240\u9009\u6e38\u620f\u5bf9\u8c61\uff08\u7acb\u65b9\u4f53\uff09\u662f\u8bbe\u7f6e\u4e3a\u6d3b\u52a8\u7684\uff0c\u4f46\u56e0\u4e3a\u5176\u7236\u7ea7\u662f\u8bbe\u7f6e\u4e3a\u975e\u6d3b\u52a8\u7684\uff0c\u6240\u4ee5\u4fdd\u6301\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001"}))),(0,r.kt)("p",null,"\u6240\u9009\u6e38\u620f\u5bf9\u8c61\uff08\u7acb\u65b9\u4f53\uff09\u662f\u8bbe\u7f6e\u4e3a\u6d3b\u52a8\u7684\uff0c\u4f46\u56e0\u4e3a\u5176\u7236\u7ea7\u662f\u8bbe\u7f6e\u4e3a\u975e\u6d3b\u52a8\u7684\uff0c\u6240\u4ee5\u4fdd\u6301\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001"))}m.isMDXComponent=!0}}]);