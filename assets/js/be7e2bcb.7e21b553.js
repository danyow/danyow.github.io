"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44540],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),y=c(n),m=o,g=y["".concat(a,".").concat(m)]||y[m]||p[m]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=y;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},70419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});n(27378);var r=n(35318);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"\u6d88\u606f\u7cfb\u7edf",slug:"/uitoolkits/com-unity-ugui/event-system/messaging-system"},u="\u6d88\u606f\u7cfb\u7edf",a={unversionedId:"unity/uitoolkits/com-unity-ugui/event-system/\u6d88\u606f\u7cfb\u7edf",id:"version-Unity@2022.1/unity/uitoolkits/com-unity-ugui/event-system/\u6d88\u606f\u7cfb\u7edf",title:"\u6d88\u606f\u7cfb\u7edf",description:"\u65b0\u7684 UI \u7cfb\u7edf\u4f7f\u7528\u4e00\u79cd\u6d88\u606f\u7cfb\u7edf\u6765\u53d6\u4ee3 SendMessage\u3002\u8be5\u7cfb\u7edf\u662f\u7eaf C# \u7cfb\u7edf\uff0c\u65e8\u5728\u89e3\u51b3 SendMessage \u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898\u3002\u8be5\u7cfb\u7edf\u4f7f\u7528\u53ef\u5728 MonoBehaviour \u4e0a\u5b9e\u73b0\u7684\u81ea\u5b9a\u4e49\u63a5\u53e3\u6765\u6307\u793a\u7ec4\u4ef6\u80fd\u591f\u4ece\u6d88\u606f\u7cfb\u7edf\u63a5\u6536\u56de\u8c03\u3002\u8c03\u7528\u65f6\u4f1a\u6307\u5b9a\u76ee\u6807\u6e38\u620f\u5bf9\u8c61\uff1b\u8be5\u8c03\u7528\u5c06\u5728\u6e38\u620f\u5bf9\u8c61\u7684\u6240\u6709\uff08\u5b9e\u73b0\u4e86\u6307\u5b9a\u63a5\u53e3\u4ee5\u636e\u6b64\u53d1\u51fa\u8be5\u8c03\u7528\u7684\uff09\u7ec4\u4ef6\u4e0a\u53d1\u51fa\u3002\u501f\u52a9\u6d88\u606f\u7cfb\u7edf\u53ef\u4f20\u9012\u81ea\u5b9a\u4e49\u7528\u6237\u6570\u636e\uff0c\u5e76\u53ef\u6307\u5b9a\u4e8b\u4ef6\u5e94\u5728\u6e38\u620f\u5bf9\u8c61\u5c42\u7ea7\u89c6\u56fe\u4e2d\u4f20\u64ad\u7684\u8ddd\u79bb\uff1a\u5e94\u8be5\u4ec5\u4e3a\u6307\u5b9a\u7684\u6e38\u620f\u5bf9\u8c61\u6267\u884c\uff0c\u8fd8\u662f\u5e94\u8be5\u5728\u5b50\u5bf9\u8c61\u548c\u7236\u5bf9\u8c61\u4e0a\u4e5f\u6267\u884c\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6d88\u606f\u6846\u67b6\u8fd8\u63d0\u4f9b helper \u51fd\u6570\u6765\u641c\u7d22\u548c\u67e5\u627e\u5b9e\u73b0\u4e86\u7ed9\u5b9a\u6d88\u606f\u63a5\u53e3\u7684\u6e38\u620f\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/uitoolkits/com-unity-ugui/event-system/messaging-system.md",sourceDirName:"unity/uitoolkits/com-unity-ugui/event-system",slug:"/uitoolkits/com-unity-ugui/event-system/messaging-system",permalink:"/docs/uitoolkits/com-unity-ugui/event-system/messaging-system",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u6d88\u606f\u7cfb\u7edf",slug:"/uitoolkits/com-unity-ugui/event-system/messaging-system"},sidebar:"unity",previous:{title:"\u8f93\u5165\u6a21\u5757",permalink:"/docs/uitoolkits/com-unity-ugui/event-system/input-modules"},next:{title:"\u5c04\u7ebf\u6295\u5c04\u5668",permalink:"/docs/uitoolkits/com-unity-ugui/event-system/raycasters"}},c={},l=[{value:"\u5982\u4f55\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d88\u606f\uff1f",id:"\u5982\u4f55\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d88\u606f",level:2}],p={toc:l};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"\u6d88\u606f\u7cfb\u7edf"}),"\u6d88\u606f\u7cfb\u7edf"),(0,r.kt)("p",null,"\u65b0\u7684 UI \u7cfb\u7edf\u4f7f\u7528\u4e00\u79cd\u6d88\u606f\u7cfb\u7edf\u6765\u53d6\u4ee3 SendMessage\u3002\u8be5\u7cfb\u7edf\u662f\u7eaf C# \u7cfb\u7edf\uff0c\u65e8\u5728\u89e3\u51b3 SendMessage \u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898\u3002\u8be5\u7cfb\u7edf\u4f7f\u7528\u53ef\u5728 MonoBehaviour \u4e0a\u5b9e\u73b0\u7684\u81ea\u5b9a\u4e49\u63a5\u53e3\u6765\u6307\u793a\u7ec4\u4ef6\u80fd\u591f\u4ece\u6d88\u606f\u7cfb\u7edf\u63a5\u6536\u56de\u8c03\u3002\u8c03\u7528\u65f6\u4f1a\u6307\u5b9a\u76ee\u6807\u6e38\u620f\u5bf9\u8c61\uff1b\u8be5\u8c03\u7528\u5c06\u5728\u6e38\u620f\u5bf9\u8c61\u7684\u6240\u6709\uff08\u5b9e\u73b0\u4e86\u6307\u5b9a\u63a5\u53e3\u4ee5\u636e\u6b64\u53d1\u51fa\u8be5\u8c03\u7528\u7684\uff09\u7ec4\u4ef6\u4e0a\u53d1\u51fa\u3002\u501f\u52a9\u6d88\u606f\u7cfb\u7edf\u53ef\u4f20\u9012\u81ea\u5b9a\u4e49\u7528\u6237\u6570\u636e\uff0c\u5e76\u53ef\u6307\u5b9a\u4e8b\u4ef6\u5e94\u5728\u6e38\u620f\u5bf9\u8c61\u5c42\u7ea7\u89c6\u56fe\u4e2d\u4f20\u64ad\u7684\u8ddd\u79bb\uff1a\u5e94\u8be5\u4ec5\u4e3a\u6307\u5b9a\u7684\u6e38\u620f\u5bf9\u8c61\u6267\u884c\uff0c\u8fd8\u662f\u5e94\u8be5\u5728\u5b50\u5bf9\u8c61\u548c\u7236\u5bf9\u8c61\u4e0a\u4e5f\u6267\u884c\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6d88\u606f\u6846\u67b6\u8fd8\u63d0\u4f9b helper \u51fd\u6570\u6765\u641c\u7d22\u548c\u67e5\u627e\u5b9e\u73b0\u4e86\u7ed9\u5b9a\u6d88\u606f\u63a5\u53e3\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u6d88\u606f\u7cfb\u7edf\u662f\u901a\u7528\u578b\u7cfb\u7edf\uff0c\u4e0d\u4ec5\u53ef\u7528\u4e8e UI \u7cfb\u7edf\uff0c\u8fd8\u53ef\u7528\u4e8e\u4e00\u822c\u6e38\u620f\u4ee3\u7801\u3002\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6d88\u606f\u4e8b\u4ef6\u76f8\u5bf9\u7b80\u5355\uff0c\u501f\u52a9 UI \u7cfb\u7edf\u7528\u4e8e\u6240\u6709\u4e8b\u4ef6\u5904\u7406\u7684\u76f8\u540c\u6846\u67b6\u5373\u53ef\u5b9e\u73b0\u3002"),(0,r.kt)("h2",o({},{id:"\u5982\u4f55\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d88\u606f"}),"\u5982\u4f55\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d88\u606f\uff1f"),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5b9a\u4e49\u81ea\u5b9a\u4e49\u6d88\u606f\uff0c\u6b64\u8fc7\u7a0b\u76f8\u5bf9\u7b80\u5355\u3002\u5728 UnityEngine.EventSystems \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u6709\u4e00\u4e2a\u540d\u4e3a\u201cIEventSystemHandler\u201d\u7684\u57fa\u672c\u63a5\u53e3\u3002\u4ece\u6b64\u63a5\u53e3\u6269\u5c55\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u53ef\u4ee5\u89c6\u4e3a\u901a\u8fc7\u6d88\u606f\u7cfb\u7edf\u63a5\u6536\u4e8b\u4ef6\u7684\u76ee\u6807\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"public interface ICustomMessageTarget : IEventSystemHandler\n{\n    // \u53ef\u901a\u8fc7\u6d88\u606f\u7cfb\u7edf\u8c03\u7528\u7684\u51fd\u6570\n    void Message1();\n    void Message2();\n} \n")),(0,r.kt)("p",null,"\u4e00\u65e6\u5b9a\u4e49\u4e86\u6b64\u63a5\u53e3\uff0c\u5373\u53ef\u7531 MonoBehaviour \u5b9e\u73b0\u3002\u6b64\u63a5\u53e3\u5b9e\u73b0\u540e\uff0c\u5b9a\u4e49\u4e86\u5728\u9488\u5bf9\u6b64 MonoBehaviour \u6e38\u620f\u5bf9\u8c61\u53d1\u51fa\u6307\u5b9a\u6d88\u606f\u65f6\u5c06\u4f1a\u6267\u884c\u7684\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'public class CustomMessageTarget : MonoBehaviour, ICustomMessageTarget\n{\n    public void Message1()\n    {\n        Debug.Log ("Message 1 received");\n    }\n\n    public void Message2()\n    {\n        Debug.Log ("Message 2 received");\n    }\n}\n')),(0,r.kt)("p",null,"\u73b0\u5728\u6709\u4e86\u53ef\u63a5\u6536\u6d88\u606f\u7684\u811a\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u53d1\u51fa\u6d88\u606f\u3002\u901a\u5e38\uff0c\u6b64\u6d88\u606f\u7528\u4e8e\u54cd\u5e94\u53d1\u751f\u7684\u67d0\u4e2a\u677e\u6563\u8026\u5408\u4e8b\u4ef6\u3002\u4f8b\u5982\uff0c\u5728 UI \u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u4e3a PointerEnter \u548c PointerExit \u7b49\u4e8b\u4ef6\u53d1\u51fa\u4e8b\u4ef6\uff0c\u8fd8\u6709\u4e3a\u4e86\u54cd\u5e94\u7528\u6237\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u8f93\u5165\u800c\u53d1\u751f\u7684\u5404\u79cd\u5176\u4ed6\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u53d1\u9001\u6d88\u606f\uff0c\u53ef\u4f7f\u7528\u4e00\u4e2a\u9759\u6001 helper \u7c7b\u6765\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u5728\u53c2\u6570\u65b9\u9762\uff0c\u9700\u8981\u6d88\u606f\u7684\u76ee\u6807\u5bf9\u8c61\u3001\u4e00\u4e9b\u7279\u5b9a\u4e8e\u7528\u6237\u7684\u6570\u636e\u4ee5\u53ca\u4e00\u4e2a\u6620\u5c04\u5230\u6240\u9700\u76ee\u6807\u6d88\u606f\u63a5\u53e3\u4e2d\u7279\u5b9a\u51fd\u6570\u7684\u4eff\u51fd\u6570 (functor)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"ExecuteEvents.Execute&lt;ICustomMessageTarget&gt;(target, null, (x,y)=&gt;x.Message1());\n")),(0,r.kt)("p",null,"\u6b64\u4ee3\u7801\u5c06\u5728\u6e38\u620f\u5bf9\u8c61\u76ee\u6807\u4e0a\u5b9e\u73b0\u4e86 ICustomMessageTarget \u63a5\u53e3\u7684\u6240\u6709\u7ec4\u4ef6\u4e0a\u6267\u884c Message1 \u51fd\u6570\u3002ExecuteEvents \u7c7b\u7684\u811a\u672c\u6587\u6863\u4e2d\u4ecb\u7ecd\u4e86\u6267\u884c\u51fd\u6570\u7684\u5176\u4ed6\u5f62\u5f0f\uff0c\u4f8b\u5982\u5728\u5b50\u5bf9\u8c61\u6216\u7236\u5bf9\u8c61\u4e2d\u6267\u884c\u3002"))}y.isMDXComponent=!0}}]);