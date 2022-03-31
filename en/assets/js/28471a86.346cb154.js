"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8164],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"\u591a\u4eba\u6e38\u620f\u6982\u8ff0",slug:"/unet/unet-overview"},u="\u591a\u4eba\u6e38\u620f\u6982\u8ff0",o={unversionedId:"unity/unet/\u591a\u4eba\u6e38\u620f\u6982\u8ff0",id:"version-Unity@2022.1/unity/unet/\u591a\u4eba\u6e38\u620f\u6982\u8ff0",title:"\u591a\u4eba\u6e38\u620f\u6982\u8ff0",description:"|  |",source:"@site/versioned_docs/version-Unity@2022.1/unity/unet/unet-overview.md",sourceDirName:"unity/unet",slug:"/unet/unet-overview",permalink:"/en/docs/unet/unet-overview",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unet/unet-overview.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u591a\u4eba\u6e38\u620f\u6982\u8ff0",slug:"/unet/unet-overview"},sidebar:"unity",previous:{title:"\u4f7f\u7528 Network Manager",permalink:"/en/docs/unet/unet-manager"},next:{title:"Multiplayer \u7ec4\u4ef6\u53c2\u8003",permalink:"/en/docs/unet/unet-reference/unet-reference"}},p={},c=[{value:"\u9ad8\u7ea7\u811a\u672c API",id:"\u9ad8\u7ea7\u811a\u672c-api",level:2},{value:"\u5f15\u64ce\u548c Editor \u96c6\u6210",id:"\u5f15\u64ce\u548c-editor-\u96c6\u6210",level:2},{value:"\u4e92\u8054\u7f51\u670d\u52a1",id:"\u4e92\u8054\u7f51\u670d\u52a1",level:2},{value:"NetworkTransport \u5b9e\u65f6\u4f20\u8f93\u5c42",id:"networktransport-\u5b9e\u65f6\u4f20\u8f93\u5c42",level:2},{value:"\u8eab\u4efd\u9a8c\u8bc1",id:"\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",level:2}],s={toc:c};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u591a\u4eba\u6e38\u620f\u6982\u8ff0"}),"\u591a\u4eba\u6e38\u620f\u6982\u8ff0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs-multiplayer.unity3d.com/"}),"Unity Netcode for GameObjects website"),".")))),(0,r.kt)("p",null,"\u7f51\u7edc\u529f\u80fd\u6709\u4e24\u79cd\u7528\u6237\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Unity \u5f00\u53d1\u591a\u4eba\u6e38\u620f\u7684\u7528\u6237\u3002\u8fd9\u4e9b\u7528\u6237\u5e94\u8be5\u4ee5 ",(0,r.kt)("a",a({parentName:"li"},{href:"/en/docs/unet/unet-manager"}),"NetworkManager")," \u6216",(0,r.kt)("a",a({parentName:"li"},{href:"/en/docs/unet/unet-using-hlapi/unet-using-hlapi"}),"\u9ad8\u7ea7 API")," \u4e3a\u8d77\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u7f51\u7edc\u57fa\u7840\u67b6\u6784\u6216\u9ad8\u7ea7\u591a\u4eba\u6e38\u620f\u7684\u7528\u6237\u3002\u8fd9\u4e9b\u7528\u6237\u5e94\u8be5\u4ee5 ",(0,r.kt)("a",a({parentName:"li"},{href:"/en/docs/unet/unet-using-hlapi/unet-using-transport/unet-using-transport"}),"NetworkTransport API")," \u4e3a\u8d77\u70b9\u3002")),(0,r.kt)("h2",a({},{id:"\u9ad8\u7ea7\u811a\u672c-api"}),"\u9ad8\u7ea7\u811a\u672c API"),(0,r.kt)("p",null,"Unity \u7684\u7f51\u7edc\u529f\u80fd\u6709\u4e00\u4e2a\u201c\u9ad8\u7ea7\u201d\u811a\u672c API\uff08\u6211\u4eec\u79f0\u4e4b\u4e3a HLAPI\uff09\u3002\u4f7f\u7528\u6b64 API \u610f\u5473\u7740\u53ef\u4ee5\u8bbf\u95ee\u6ee1\u8db3\u591a\u7528\u6237\u6e38\u620f\u5927\u591a\u6570\u5e38\u89c1\u8981\u6c42\u7684\u547d\u4ee4\uff0c\u800c\u65e0\u9700\u62c5\u5fc3\u201c\u8f83\u4f4e\u7ea7\u522b\u201d\u7684\u5b9e\u73b0\u7ec6\u8282\u3002HLAPI \u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Network Manager \u6765\u63a7\u5236\u6e38\u620f\u7684\u8054\u7f51\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u201c\u5ba2\u6237\u7aef\u6258\u7ba1\u7684\u201d\u6e38\u620f\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u4e3b\u673a\u4e5f\u662f\u73a9\u5bb6\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u901a\u7528\u5e8f\u5217\u5316\u7a0b\u5e8f\u6765\u5e8f\u5217\u5316\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u548c\u63a5\u6536\u7f51\u7edc\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8054\u7f51\u547d\u4ee4\u4ece\u5ba2\u6237\u7aef\u53d1\u9001\u5230\u670d\u52a1\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4ece\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\u7684\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528 (RPC)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8054\u7f51\u4e8b\u4ef6\u4ece\u670d\u52a1\u5668\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u3002")),(0,r.kt)("h2",a({},{id:"\u5f15\u64ce\u548c-editor-\u96c6\u6210"}),"\u5f15\u64ce\u548c Editor \u96c6\u6210"),(0,r.kt)("p",null,"Unity \u7684\u8054\u7f51\u7cfb\u7edf\u96c6\u6210\u5728\u5f15\u64ce\u548c Editor \u4e2d\uff0c\u56e0\u6b64\u4fbf\u4e8e\u4f7f\u7528\u7ec4\u4ef6\u548c\u89c6\u89c9\u8f85\u52a9\u5de5\u5177\u6765\u6784\u5efa\u591a\u4eba\u6e38\u620f\u3002\u8be5\u7cfb\u7edf\u5177\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8054\u7f51\u5bf9\u8c61\u7684 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkIdentity.html"}),"NetworkIdentity")," \u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8054\u7f51\u811a\u672c\u7684 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkBehaviour.html"}),"NetworkBehaviour"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u7684\u5bf9\u8c61\u53d8\u6362\u81ea\u52a8\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u811a\u672c\u53d8\u91cf\u81ea\u52a8\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728 Unity \u573a\u666f\u4e2d\u653e\u7f6e\u8054\u7f51\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/en/docs/unet/unet-reference/unet-reference"}),"\u7f51\u7edc\u7ec4\u4ef6"))),(0,r.kt)("h2",a({},{id:"\u4e92\u8054\u7f51\u670d\u52a1"}),"\u4e92\u8054\u7f51\u670d\u52a1"),(0,r.kt)("p",null,"Unity \u63d0\u4f9b",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unity-multiplayer-setting-up/unity-multiplayer-setting-up"}),"\u4e92\u8054\u7f51\u670d\u52a1"),"\u4e3a\u6e38\u620f\u7684\u6574\u4e2a\u751f\u4ea7\u548c\u53d1\u5e03\u8fc7\u7a0b\u63d0\u4f9b\u652f\u6301\uff0c\u8fd9\u4e9b\u670d\u52a1\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u5bf9\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6bd4\u8d5b\u548c\u901a\u544a\u6bd4\u8d5b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5217\u51fa\u53ef\u7528\u7684\u6bd4\u8d5b\u548c\u52a0\u5165\u6bd4\u8d5b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u7ee7\u670d\u52a1\u5668 (Relay Server)"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e92\u8054\u7f51\u4f46\u65e0\u4e13\u7528\u670d\u52a1\u5668\u7684\u6e38\u620f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u8d5b\u53c2\u4e0e\u8005\u7684\u6d88\u606f\u4f20\u9001\u3002")),(0,r.kt)("h2",a({},{id:"networktransport-\u5b9e\u65f6\u4f20\u8f93\u5c42"}),"NetworkTransport \u5b9e\u65f6\u4f20\u8f93\u5c42"),(0,r.kt)("p",null,"\u6211\u4eec\u52a0\u5165\u4e86\u4e00\u4e2a\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u7684",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unet-using-transport/unet-using-transport"}),"\u5b9e\u65f6\u4f20\u8f93\u5c42"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e UDP \u7684\u4f18\u5316\u534f\u8bae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u901a\u9053\u8bbe\u8ba1\u53ef\u907f\u514d\u7ebf\u5934\u963b\u585e\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u901a\u9053\u652f\u6301\u5404\u79cd\u7ea7\u522b\u7684\u670d\u52a1\u8d28\u91cf (QoS)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u7f51\u7edc\u62d3\u6251\u53ef\u652f\u6301\u5bf9\u7b49\u67b6\u6784\u6216\u5ba2\u6237\u7aef/\u670d\u52a1\u5668\u67b6\u6784\u3002")),(0,r.kt)("h2",a({},{id:"\u8eab\u4efd\u9a8c\u8bc1"}),"\u8eab\u4efd\u9a8c\u8bc1"),(0,r.kt)("p",null,"Unity \u7684\u7f51\u7edc\u7cfb\u7edf\u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u5185\u7f6e\u8eab\u4efd\u9a8c\u8bc1\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u4e3a\u9a8c\u8bc1\u4f1a\u8bdd\u63d0\u4f9b\u4e86\u57fa\u672c\u652f\u6301\uff0c\u4f46\u5e76\u4e0d\u662f\u53ef\u9760\u7684\u8eab\u4efd\u9a8c\u8bc1\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u53ef\u9760\u7684\u8eab\u4efd\u9a8c\u8bc1\u53ef\u80fd\u662f\u5f00\u53d1\u591a\u4eba\u6e38\u620f\u9879\u76ee\u7684\u91cd\u8981\u56e0\u7d20\uff0c\u56e0\u4e3a\u5b83\u6709\u52a9\u4e8e\u9632\u6b62\u6076\u610f\u7528\u6237\u52ab\u6301\u73a9\u5bb6\u4f1a\u8bdd\u3001\u5192\u5145\u5176\u4ed6\u7528\u6237\u3001\u4f7f\u5408\u6cd5\u73a9\u5bb6\u4e0e\u6e38\u620f\u65ad\u5f00\u8fde\u63a5\u6216\u5176\u4ed6\u9488\u5bf9\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u6076\u610f\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a Unity \u4ec5\u63d0\u4f9b\u7b80\u5355\u7684\u5185\u7f6e\u8eab\u4efd\u9a8c\u8bc1\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u9700\u8981\u9488\u5bf9\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6076\u610f\u884c\u4e3a\u63d0\u4f9b\u53ef\u9760\u4fdd\u62a4\uff0c\u5219\u5e94\u4f7f\u7528\u7b2c\u4e09\u65b9\u8eab\u4efd\u9a8c\u8bc1\u548c\u52a0\u5bc6\u89e3\u51b3\u65b9\u6848\uff0c\u6216\u8005\u4f7f\u7528\u8bf8\u5982",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Unity-Technologies/UnetEncryptionExample"}),"\u6b64\u53c2\u8003\u5b9e\u73b0"),"\u4e4b\u7c7b\u7684\u63d2\u4ef6\u4ee5\u53ca ",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unet-using-transport/unet-using-transport"}),"NetworkTransport API")," \u6765\u81ea\u884c\u5b9e\u73b0\u6240\u9700\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u9879\u76ee"}),"\u793a\u4f8b\u9879\u76ee"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u6211\u4eec\u7684\u591a\u4eba\u6e38\u620f\u793a\u4f8b\u9879\u76ee\uff0c\u4e86\u89e3\u8fd9\u4e9b\u529f\u80fd\u5982\u4f55\u914d\u5408\u4f7f\u7528\u3002\u53ef\u5728",(0,r.kt)("a",a({parentName:"p"},{href:"http://forum.unity3d.com/threads/unet-sample-projects.331978/"}),"\u6b64 Unity \u8bba\u575b\u5e16\u5b50"),"\u4e2d\u627e\u5230\u4ee5\u4e0b\u793a\u4f8b\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u4eba 2D \u5766\u514b\u793a\u4f8b\u6e38\u620f"),(0,r.kt)("li",{parentName:"ul"},"\u5177\u6709\u914d\u5bf9\u529f\u80fd\u7684\u591a\u4eba\u5165\u4fb5\u8005\u6e38\u620f"),(0,r.kt)("li",{parentName:"ul"},"\u5177\u6709\u914d\u5bf9\u529f\u80fd\u7684\u591a\u4eba 2D \u592a\u7a7a\u5c04\u51fb\u6e38\u620f"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u7684\u591a\u4eba\u6e38\u620f\u9879\u76ee")))}m.isMDXComponent=!0}}]);