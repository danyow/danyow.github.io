"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65234],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),f=i,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5724:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});r(27378);var n=r(35318);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"\u7528\u6cd5\u548c API \u6982\u8ff0",slug:"/audio/audio-mixer/audio-mixer-usage"},u="\u7528\u6cd5\u548c API \u6982\u8ff0",c={unversionedId:"unity/audio/audio-mixer/\u7528\u6cd5\u548c API \u6982\u8ff0",id:"version-Unity@2022.1/unity/audio/audio-mixer/\u7528\u6cd5\u548c API \u6982\u8ff0",title:"\u7528\u6cd5\u548c API \u6982\u8ff0",description:"\u6df7\u97f3\u5668\u662f\u4e00\u79cd\u72ec\u7acb\u6027\u5f88\u5f3a\u7684\u8d44\u6e90\uff0c\u5177\u6709\u7b80\u5316\u7684 API\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/audio/audio-mixer/audio-mixer-usage.md",sourceDirName:"unity/audio/audio-mixer",slug:"/audio/audio-mixer/audio-mixer-usage",permalink:"/en/docs/audio/audio-mixer/audio-mixer-usage",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/audio/audio-mixer/audio-mixer-usage.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u7528\u6cd5\u548c API \u6982\u8ff0",slug:"/audio/audio-mixer/audio-mixer-usage"},sidebar:"unity",previous:{title:"AudioMixer \u7a97\u53e3\u4e0a\u7684\u5177\u4f53\u5185\u5bb9",permalink:"/en/docs/audio/audio-mixer/audio-mixer-specifics"},next:{title:"\u539f\u751f\u97f3\u9891\u63d2\u4ef6 SDK",permalink:"/en/docs/audio/audio-mixer-native-audio-plugin/audio-mixer-native-audio-plugin"}},l={},p=[{value:"\u793a\u4f8b\u7528\u6cd5",id:"\u793a\u4f8b\u7528\u6cd5",level:2}],d={toc:p};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"\u7528\u6cd5\u548c-api-\u6982\u8ff0"}),"\u7528\u6cd5\u548c API \u6982\u8ff0"),(0,n.kt)("p",null,"\u6df7\u97f3\u5668\u662f\u4e00\u79cd\u72ec\u7acb\u6027\u5f88\u5f3a\u7684\u8d44\u6e90\uff0c\u5177\u6709\u7b80\u5316\u7684 API\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5feb\u7167\u548c\u97f3\u9891\u7ec4\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ul"},"\u5207\u6362\u5feb\u7167"),(0,n.kt)("li",{parentName:"ul"},"\u6df7\u5408\u5feb\u7167\u72b6\u6001"),(0,n.kt)("li",{parentName:"ul"},"\u67e5\u627e\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u8fd0\u884c\u65f6\u91cd\u65b0\u8def\u7531")),(0,n.kt)("h2",i({},{id:"\u793a\u4f8b\u7528\u6cd5"}),"\u793a\u4f8b\u7528\u6cd5"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5728",(0,n.kt)("a",i({parentName:"p"},{href:"https://bitbucket.org/Unity-Technologies/audiodemos"}),"\u97f3\u9891\u6f14\u793a"),"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u627e\u5230\u4e00\u4e9b\u4e0e\u97f3\u4e50\u76f8\u5173\u7684\u6f14\u793a\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c",(0,n.kt)("a",i({parentName:"p"},{href:"https://bitbucket.org/Unity-Technologies/nativeaudioplugins"}),"\u539f\u751f\u97f3\u9891\u63d2\u4ef6"),"\u4ee3\u7801\u4ed3\u5e93\u63d0\u4f9b\u4e86\u7528\u4e8e\u5f00\u53d1\u81ea\u5b9a\u4e49\u6269\u5c55\u7684\u5b98\u65b9 SDK\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5f88\u591a\u76f8\u5173\u793a\u4f8b\uff0c\u8fd9\u4e9b\u793a\u4f8b\u6d89\u53ca\u5230\u5728\u6df7\u97f3\u5668\u4e2d\u8fdb\u884c\u590d\u6742\u8def\u7531\u4ee5\u53ca\u5bf9\u97f3\u9891\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406/\u751f\u6210\u3002"))}s.isMDXComponent=!0}}]);