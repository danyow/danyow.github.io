"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94864],{35318:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),y=l(n),m=a,d=y["".concat(c,".").concat(m)]||y[m]||p[m]||i;return n?r.createElement(d,u(u({ref:e},s),{},{components:n})):r.createElement(d,u({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,u=new Array(i);u[0]=y;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58136:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={id:"\u72b6\u6001\u540c\u6b65",slug:"/unet/unet-using-hlapi/unet-game-objects/unet-state-sync"},o="\u72b6\u6001\u540c\u6b65",c={unversionedId:"unity/unet/unet-using-hlapi/unet-game-objects/\u72b6\u6001\u540c\u6b65",id:"version-Unity@2022.1/unity/unet/unet-using-hlapi/unet-game-objects/\u72b6\u6001\u540c\u6b65",title:"\u72b6\u6001\u540c\u6b65",description:"|  |",source:"@site/versioned_docs/version-Unity@2022.1/unity/unet/unet-using-hlapi/unet-game-objects/unet-state-sync.md",sourceDirName:"unity/unet/unet-using-hlapi/unet-game-objects",slug:"/unet/unet-using-hlapi/unet-game-objects/unet-state-sync",permalink:"/en/docs/unet/unet-using-hlapi/unet-game-objects/unet-state-sync",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unet/unet-using-hlapi/unet-game-objects/unet-state-sync.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u72b6\u6001\u540c\u6b65",slug:"/unet/unet-using-hlapi/unet-game-objects/unet-state-sync"},sidebar:"unity",previous:{title:"\u9ad8\u7ea7\u72b6\u6001\u540c\u6b65",permalink:"/en/docs/unet/unet-using-hlapi/unet-game-objects/unet-state-sync-advanced"},next:{title:"\u7f51\u7edc\u53ef\u89c1\u6027",permalink:"/en/docs/unet/unet-using-hlapi/unet-game-objects/unet-visibility"}},l={},s=[{value:"SyncVar",id:"syncvar",level:2},{value:"SyncList",id:"synclist",level:2}],p={toc:s};function y(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u72b6\u6001\u540c\u6b65"}),"\u72b6\u6001\u540c\u6b65"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs-multiplayer.unity3d.com/"}),"Unity Netcode for GameObjects website"),".")))),(0,r.kt)("p",null,"\u72b6\u6001\u540c\u6b65\u662f\u6307\u5bf9\u503c\uff08\u4f8b\u5982\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u4e0a\u7684\u811a\u672c\u5305\u542b\u7684\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5b57\u7b26\u4e32\u548c\u5e03\u5c14\u503c\uff09\u8fdb\u884c\u540c\u6b65\u3002"),(0,r.kt)("p",null,"\u72b6\u6001\u540c\u6b65\u7684\u65b9\u5411\u662f\u4ece\u670d\u52a1\u5668\u5230\u8fdc\u7a0b\u5ba2\u6237\u7aef\u3002",(0,r.kt)("em",{parentName:"p"},"\u672c\u5730"),"\u5ba2\u6237\u7aef\u6ca1\u6709\u5e8f\u5217\u5316\u7684\u6570\u636e\u3002\u672c\u5730\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5171\u4eab\u573a\u666f\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u6b64\u6570\u636e\u3002\u4f46\u662f\uff0c\u5728\u672c\u5730\u5ba2\u6237\u7aef\u4e0a\u4f1a\u8c03\u7528 SyncVar \u6302\u94a9\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u4e0d\u4f1a\u4ee5\u76f8\u53cd\u65b9\u5411\uff08\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\uff09\u540c\u6b65\u3002\u82e5\u8981\u8fdb\u884c\u6b64\u65b9\u5411\u7684\u540c\u6b65\uff0c\u9700\u8981\u4f7f\u7528",(0,r.kt)("a",a({parentName:"p"},{href:"/en/docs/unet/unet-using-hlapi/unet-actions-and-communication/unet-actions"}),"\u547d\u4ee4"),"\u3002"),(0,r.kt)("h2",a({},{id:"syncvar"}),"SyncVar"),(0,r.kt)("p",null,"SyncVar \u662f\u4ece NetworkBehaviour \u7ee7\u627f\u7684\u811a\u672c\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53d8\u91cf\u4ece\u670d\u52a1\u5668\u540c\u6b65\u5230\u5ba2\u6237\u7aef\u3002\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u6216\u8005\u65b0\u73a9\u5bb6\u52a0\u5165\u6b63\u5728\u8fdb\u884c\u7684\u6e38\u620f\u65f6\uff0c\u4f1a\u5411\u5176\u53d1\u9001\u5176\u53ef\u89c1\u7684\u8054\u7f51\u5bf9\u8c61\u4e0a\u6240\u6709 SyncVar \u7684\u6700\u65b0\u72b6\u6001\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[SyncVar]")," \u81ea\u5b9a\u4e49\u5c5e\u6027\u53ef\u6307\u5b9a\u811a\u672c\u4e2d\u8981\u540c\u6b65\u7684\u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,"class Player : NetworkBehaviour {"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"[SyncVar]\nint health;\n\npublic void TakeDamage(int amount)\n{\n    if (!isServer)\n        return;\n\n    health -= amount;\n}\n")),(0,r.kt)("p",null,"}"),(0,r.kt)("p",null,"\u5728\u8c03\u7528 OnStartClient() \u4e4b\u524d\uff0cSyncVar \u7684\u72b6\u6001\u5c06\u5e94\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0a\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64 OnStartClient() \u5185\u7684\u5bf9\u8c61\u72b6\u6001\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002"),(0,r.kt)("p",null,"SyncVar \u53ef\u4ee5\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u4f8b\u5982\u6574\u6570\u3001\u5b57\u7b26\u4e32\u548c\u6d6e\u70b9\u6570\u3002\u5b83\u4eec\u4e5f\u53ef\u4ee5\u662f Unity \u7c7b\u578b\uff0c\u4f8b\u5982 Vector3 \u548c\u7528\u6237\u5b9a\u4e49\u7684\u7ed3\u6784\uff0c\u4f46 SyncVar \u7ed3\u6784\u7684\u66f4\u65b0\u5c06\u4f5c\u4e3a\u6574\u4f53\u66f4\u65b0\u8fdb\u884c\u53d1\u9001\uff0c\u800c\u4e0d\u662f\u5728\u7ed3\u6784\u4e2d\u7684\u5b57\u6bb5\u53d1\u751f\u66f4\u6539\u7684\u60c5\u51b5\u4e0b\u53d1\u9001\u589e\u91cf\u66f4\u6539\u3002\u4e00\u4e2a NetworkBehaviour \u811a\u672c\u6700\u591a\u53ef\u5305\u542b 32 \u4e2a SyncVar\uff0c\u5305\u62ec SyncList\uff08\u8bf7\u53c2\u9605\u4e0b\u4e00\u90e8\u5206\uff09\u3002"),(0,r.kt)("p",null,"\u5f53 SyncVar \u7684\u503c\u66f4\u6539\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u81ea\u52a8\u53d1\u9001 SyncVar \u66f4\u65b0\uff0c\u56e0\u6b64\u60a8\u65e0\u9700\u8ddf\u8e2a\u5b83\u4eec\u4f55\u65f6\u66f4\u6539\u6216\u81ea\u5df1\u53d1\u9001\u6709\u5173\u66f4\u6539\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h2",a({},{id:"synclist"}),"SyncList"),(0,r.kt)("p",null,"SyncVar \u5305\u542b\u503c\uff0c\u800c SyncList \u5305\u542b\u503c\u5217\u8868\u3002SyncList \u5185\u5bb9\u4e0e SyncVar \u72b6\u6001\u4e00\u8d77\u5305\u542b\u5728\u521d\u59cb\u72b6\u6001\u66f4\u65b0\u4e2d\u3002\u7531\u4e8e SyncList \u662f\u4e00\u4e2a\u540c\u6b65\u5176\u81ea\u8eab\u5185\u5bb9\u7684\u7c7b\uff0c\u56e0\u6b64 SyncList \u4e0d\u9700\u8981 SyncVar \u5c5e\u6027\u3002\u4ee5\u4e0b\u7c7b\u578b\u7684 SyncList \u53ef\u7528\u4e8e\u57fa\u672c\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SyncListString"),(0,r.kt)("li",{parentName:"ul"},"SyncListFloat"),(0,r.kt)("li",{parentName:"ul"},"SyncListInt"),(0,r.kt)("li",{parentName:"ul"},"SyncListUInt"),(0,r.kt)("li",{parentName:"ul"},"SyncListBool")),(0,r.kt)("p",null,"\u6b64\u5916\u8fd8\u6709 SyncListStruct \u53ef\u7528\u4e8e\u540c\u6b65\u60a8\u81ea\u5df1\u7684\u7ed3\u6784\u7c7b\u578b\u7684\u5217\u8868\u3002\u4f7f\u7528 SyncListStruct \u65f6\uff0c\u9009\u62e9\u4f7f\u7528\u7684\u7ed3\u6784\u7c7b\u578b\u53ef\u4ee5\u5305\u542b\u57fa\u672c\u7c7b\u578b\u3001\u6570\u7ec4\u548c\u5e38\u89c1 Unity \u7c7b\u578b\u7684\u6210\u5458\u3002\u8fd9\u4e9b\u7ed3\u6784\u4e0d\u80fd\u5305\u542b\u590d\u6742\u7c7b\u6216\u901a\u7528\u5bb9\u5668\uff0c\u5e76\u4e14\u53ea\u5e8f\u5217\u5316\u5176\u4e2d\u7684\u516c\u5171\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"SyncList \u6709\u4e00\u4e2a\u540d\u4e3a\u201c\u56de\u8c03\u201d(Callback) \u7684 SyncListChanged \u59d4\u6258\uff0c\u53ef\u5728\u5217\u8868\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\u901a\u77e5\u5ba2\u6237\u7aef\u3002\u5e94\u4f7f\u7528\u6240\u53d1\u751f\u7684\u64cd\u4f5c\u7c7b\u578b\u4ee5\u53ca\u8be5\u64cd\u4f5c\u7684\u76ee\u6807\u9879\u7684\u7d22\u5f15\u6765\u8c03\u7528\u6b64\u59d4\u6258\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'\npublic class MyScript : NetworkBehaviour\n{\n    public struct Buf\n    {\n        public int id;\n        public string name;\n        public float timer;\n    };\n            \n    public class TestBufs : SyncListStruct&lt;Buf&gt; {}\n    TestBufs m_bufs = new TestBufs();\n    \n    void BufChanged(Operation op, int itemIndex)\n    {\n        Debug.Log("buf changed:" + op);\n    }\n    \n    void Start()\n    {\n        m_bufs.Callback = BufChanged;\n    }\n}\n')))}y.isMDXComponent=!0}}]);