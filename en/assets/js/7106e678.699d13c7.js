"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20026],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78011:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"NetworkClient",slug:"/unet/unet-classes-reference/class-network-client"},i="NetworkClient",u={unversionedId:"unity/unet/unet-classes-reference/NetworkClient",id:"version-Unity@2022.1/unity/unet/unet-classes-reference/NetworkClient",title:"NetworkClient",description:"|  |",source:"@site/versioned_docs/version-Unity@2022.1/unity/unet/unet-classes-reference/class-network-client.md",sourceDirName:"unity/unet/unet-classes-reference",slug:"/unet/unet-classes-reference/class-network-client",permalink:"/en/docs/unet/unet-classes-reference/class-network-client",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unet/unet-classes-reference/class-network-client.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"NetworkClient",slug:"/unet/unet-classes-reference/class-network-client"},sidebar:"unity",previous:{title:"NetworkBehaviour",permalink:"/en/docs/unet/unet-classes-reference/class-network-behaviour"},next:{title:"NetworkConnection",permalink:"/en/docs/unet/unet-classes-reference/class-network-connection"}},c={},s=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],p={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"networkclient"}),"NetworkClient"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs-multiplayer.unity3d.com/"}),"Unity Netcode for GameObjects website"),".")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NetworkClient")," \u662f\u4e00\u4e2a",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unet-using-hlapi"}),"\u9ad8\u7ea7 API")," \u7c7b\uff0c\u53ef\u7528\u4e8e\u7ba1\u7406\u4ece\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u8fd8\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkClient")," \u7c7b\u8fd8\u6709\u52a9\u4e8e\u7ba1\u7406\u751f\u6210\u7684\u7f51\u7edc\u6e38\u620f\u5bf9\u8c61\uff0c\u4ee5\u53ca\u8def\u7531 ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unet-actions-and-communication/unet-actions"}),"RPC")," \u6d88\u606f\u548c\u7f51\u7edc\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkClient.html"}),"NetworkClient")," \u811a\u672c\u53c2\u8003\u3002"),(0,r.kt)("h2",a({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"serverIP")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u7684\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"serverPort")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u7684\u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"connection")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6b64 ",(0,r.kt)("inlineCode",{parentName:"td"},"NetworkClient")," \u5b9e\u4f8b\u6b63\u5728\u4f7f\u7528\u7684 NetworkConnection \u6e38\u620f\u5bf9\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"handlers")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5df2\u6ce8\u518c\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u7684\u96c6\u5408\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"numChannels")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5df2\u914d\u7f6e NetworkTransport QoS \u901a\u9053\u7684\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"isConnected")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5982\u679c\u5ba2\u6237\u7aef\u5df2\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u5219\u4e3a true\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"allClients")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6fc0\u6d3b\u72b6\u6001 NetworkClient\uff08\u9759\u6001\uff09\u7684\u5217\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"active")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5982\u679c\u4efb\u4f55 NetworkClient \u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff08\u9759\u6001\uff09\uff0c\u5219\u4e3a true\u3002")))))}d.isMDXComponent=!0}}]);