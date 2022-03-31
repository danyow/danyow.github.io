"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20026],{35318:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78011:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={id:"NetworkClient",slug:"/unet/unet-classes-reference/class-network-client"},i="NetworkClient",u={unversionedId:"unity/unet/unet-classes-reference/NetworkClient",id:"version-Unity@2022.1/unity/unet/unet-classes-reference/NetworkClient",title:"NetworkClient",description:"|  |",source:"@site/versioned_docs/version-Unity@2022.1/unity/unet/unet-classes-reference/class-network-client.md",sourceDirName:"unity/unet/unet-classes-reference",slug:"/unet/unet-classes-reference/class-network-client",permalink:"/docs/unet/unet-classes-reference/class-network-client",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"NetworkClient",slug:"/unet/unet-classes-reference/class-network-client"},sidebar:"unity",previous:{title:"NetworkBehaviour",permalink:"/docs/unet/unet-classes-reference/class-network-behaviour"},next:{title:"NetworkConnection",permalink:"/docs/unet/unet-classes-reference/class-network-connection"}},c={},s=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],p={toc:s};function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"networkclient"}),"NetworkClient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs-multiplayer.unity3d.com/"}),"Unity Netcode for GameObjects website"),".")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NetworkClient")," \u662f\u4e00\u4e2a",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/unet/unet-using-hlapi/unet-using-hlapi"}),"\u9ad8\u7ea7 API")," \u7c7b\uff0c\u53ef\u7528\u4e8e\u7ba1\u7406\u4ece\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u8fd8\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkClient")," \u7c7b\u8fd8\u6709\u52a9\u4e8e\u7ba1\u7406\u751f\u6210\u7684\u7f51\u7edc\u6e38\u620f\u5bf9\u8c61\uff0c\u4ee5\u53ca\u8def\u7531 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/unet/unet-using-hlapi/unet-actions-and-communication/unet-actions"}),"RPC")," \u6d88\u606f\u548c\u7f51\u7edc\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkClient.html"}),"NetworkClient")," \u811a\u672c\u53c2\u8003\u3002"),(0,r.kt)("h2",a({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"serverIP")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u7684\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"serverPort")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u7684\u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"connection")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64 ",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkClient")," \u5b9e\u4f8b\u6b63\u5728\u4f7f\u7528\u7684 NetworkConnection \u6e38\u620f\u5bf9\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"handlers")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5df2\u6ce8\u518c\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u7684\u96c6\u5408\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"numChannels")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5df2\u914d\u7f6e NetworkTransport QoS \u901a\u9053\u7684\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"isConnected")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5982\u679c\u5ba2\u6237\u7aef\u5df2\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u5219\u4e3a true\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"allClients")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6fc0\u6d3b\u72b6\u6001 NetworkClient\uff08\u9759\u6001\uff09\u7684\u5217\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"active")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5982\u679c\u4efb\u4f55 NetworkClient \u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff08\u9759\u6001\uff09\uff0c\u5219\u4e3a true\u3002")))))}d.isMDXComponent=!0}}]);