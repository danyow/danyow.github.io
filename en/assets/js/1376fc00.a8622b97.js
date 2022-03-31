"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79240],{35318:function(t,n,e){e.d(n,{Zo:function(){return l},kt:function(){return d}});var r=e(27378);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var a=r.createContext({}),s=function(t){var n=r.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},l=function(t){var n=s(t.components);return r.createElement(a.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),g=s(e),d=i,y=g["".concat(a,".").concat(d)]||g[d]||u[d]||o;return e?r.createElement(y,p(p({ref:n},l),{},{components:e})):r.createElement(y,p({ref:n},l))}));function d(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,p=new Array(o);p[0]=g;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=t,c.mdxType="string"==typeof t?t:i,p[1]=c;for(var s=2;s<o;s++)p[s]=e[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},16535:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return l}});e(27378);var r=e(35318);function i(){return i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},i.apply(this,arguments)}function o(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}const p={id:"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",slug:"/scripting-section/scripting-concepts/creating-and-using-scripts"},c="\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",a={unversionedId:"unity/scripting-section/scripting-concepts/\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",id:"version-Unity@2022.1/unity/scripting-section/scripting-concepts/\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",title:"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",description:"\u6e38\u620f\u5bf9\u8c61\u7684\u884c\u4e3a\u7531\u9644\u52a0\u7684 \u7ec4\u4ef6 \u63a7\u5236\u3002\u867d\u7136 Unity \u7684\u5185\u7f6e\u7ec4\u4ef6\u53ef\u80fd\u7528\u9014\u5f88\u5e7f\u6cdb\uff0c\u4f46\u662f\u60a8\u5f88\u5feb\u5c31\u4f1a\u53d1\u73b0\uff0c\u5fc5\u987b\u8d85\u8d8a\u7ec4\u4ef6\u53ef\u63d0\u4f9b\u7684\u529f\u80fd\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u6e38\u620f\u529f\u80fd\u3002Unity \u5141\u8bb8\u4f7f\u7528 \u811a\u672c \u6765\u81ea\u884c\u521b\u5efa\u7ec4\u4ef6\u3002\u4f7f\u7528\u811a\u672c\u53ef\u4ee5\u89e6\u53d1\u6e38\u620f\u4e8b\u4ef6\uff0c\u968f\u65f6\u4fee\u6539\u7ec4\u4ef6\u5c5e\u6027\uff0c\u5e76\u4ee5\u6240\u9700\u7684\u4efb\u4f55\u65b9\u5f0f\u54cd\u5e94\u7528\u6237\u7684\u8f93\u5165\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/scripting-section/scripting-concepts/creating-and-using-scripts.md",sourceDirName:"unity/scripting-section/scripting-concepts",slug:"/scripting-section/scripting-concepts/creating-and-using-scripts",permalink:"/en/docs/scripting-section/scripting-concepts/creating-and-using-scripts",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/scripting-section/scripting-concepts/creating-and-using-scripts.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",slug:"/scripting-section/scripting-concepts/creating-and-using-scripts"},sidebar:"unity",previous:{title:"\u534f\u7a0b",permalink:"/en/docs/scripting-section/scripting-concepts/coroutines"},next:{title:"\u4e8b\u4ef6\u51fd\u6570",permalink:"/en/docs/scripting-section/scripting-concepts/event-functions"}},s={},l=[{value:"\u521b\u5efa\u811a\u672c",id:"\u521b\u5efa\u811a\u672c",level:2},{value:"\u811a\u672c\u6587\u4ef6\u7684\u5256\u6790",id:"\u811a\u672c\u6587\u4ef6\u7684\u5256\u6790",level:2},{value:"\u63a7\u5236\u6e38\u620f\u5bf9\u8c61",id:"\u63a7\u5236\u6e38\u620f\u5bf9\u8c61",level:2}],u={toc:l};function g(t){var{components:n}=t,e=o(t,["components"]);return(0,r.kt)("wrapper",i({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c"}),"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c"),(0,r.kt)("p",null,"\u6e38\u620f\u5bf9\u8c61\u7684\u884c\u4e3a\u7531\u9644\u52a0\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")," \u63a7\u5236\u3002\u867d\u7136 Unity \u7684\u5185\u7f6e\u7ec4\u4ef6\u53ef\u80fd\u7528\u9014\u5f88\u5e7f\u6cdb\uff0c\u4f46\u662f\u60a8\u5f88\u5feb\u5c31\u4f1a\u53d1\u73b0\uff0c\u5fc5\u987b\u8d85\u8d8a\u7ec4\u4ef6\u53ef\u63d0\u4f9b\u7684\u529f\u80fd\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u6e38\u620f\u529f\u80fd\u3002Unity \u5141\u8bb8\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"\u811a\u672c")," \u6765\u81ea\u884c\u521b\u5efa\u7ec4\u4ef6\u3002\u4f7f\u7528\u811a\u672c\u53ef\u4ee5\u89e6\u53d1\u6e38\u620f\u4e8b\u4ef6\uff0c\u968f\u65f6\u4fee\u6539\u7ec4\u4ef6\u5c5e\u6027\uff0c\u5e76\u4ee5\u6240\u9700\u7684\u4efb\u4f55\u65b9\u5f0f\u54cd\u5e94\u7528\u6237\u7684\u8f93\u5165\u3002"),(0,r.kt)("p",null,"Unity \u672c\u8eab\u652f\u6301 C# \u7f16\u7a0b\u8bed\u8a00\u3002C#\uff08\u53d1\u97f3\u4e3a C-sharp\uff09\u662f\u4e00\u79cd\u7c7b\u4f3c\u4e8e Java \u6216 C++ \u7684\u884c\u4e1a\u6807\u51c6\u8bed\u8a00\u3002"),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8bb8\u591a\u5176\u4ed6 .NET \u8bed\u8a00\u53ea\u8981\u80fd\u7f16\u8bd1\u517c\u5bb9\u7684 DLL\uff0c\u5c31\u53ef\u4ee5\u7528\u4e8e Unity\uff1b\u8bf7\u53c2\u9605",(0,r.kt)("a",i({parentName:"p"},{href:"/en/docs/scripting-section/plugins/using-dll"}),"\u6b64\u5904"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,r.kt)("p",null,"\u5b66\u4e60\u7f16\u7a0b\u827a\u672f\u4ee5\u53ca\u8fd9\u4e9b\u7279\u5b9a\u8bed\u8a00\u7684\u7528\u6cd5\u8d85\u51fa\u4e86\u672c\u7b80\u4ecb\u7684\u8303\u56f4\u3002\u4f46\u662f\uff0c\u8bb8\u591a\u4e66\u7c4d\u3001\u6559\u7a0b\u548c\u5176\u4ed6\u8d44\u6e90\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Unity \u8fdb\u884c\u7f16\u7a0b\u3002\u8bf7\u53c2\u9605\u6211\u4eec\u7f51\u7ad9\u7684",(0,r.kt)("a",i({parentName:"p"},{href:"http://unity3d.com/learn"}),"\u5b66\u4e60 (Learning) \u90e8\u5206"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("h2",i({},{id:"\u521b\u5efa\u811a\u672c"}),"\u521b\u5efa\u811a\u672c"),(0,r.kt)("p",null,"\u4e0e\u5927\u591a\u6570\u5176\u4ed6\u8d44\u6e90\u4e0d\u540c\uff0c\u811a\u672c\u901a\u5e38\u76f4\u63a5\u5728 Unity \u4e2d\u521b\u5efa\u3002\u53ef\u4ee5\u4ece Project \u9762\u677f\u5de6\u4e0a\u65b9\u7684 Create \u83dc\u5355\u65b0\u5efa\u811a\u672c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ece\u4e3b\u83dc\u5355\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Assets ",">"," Create ",">"," C# Script"),"  \u6765\u65b0\u5efa\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u6b64\u64cd\u4f5c\u5c06\u5728 Project \u9762\u677f\u4e2d\u9009\u62e9\u7684\u4efb\u4f55\u6587\u4ef6\u5939\u5185\u521b\u5efa\u65b0\u811a\u672c\u3002\u65b0\u811a\u672c\u6587\u4ef6\u7684\u540d\u79f0\u5c06\u5904\u4e8e\u9009\u4e2d\u72b6\u6001\uff0c\u63d0\u793a\u8f93\u5165\u65b0\u540d\u79f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NewScriptIcon.png",alt:"NewScriptIcon.png"}))),(0,r.kt)("p",null,"\u6700\u597d\u5728\u6b64\u65f6\u8f93\u5165\u65b0\u811a\u672c\u7684\u540d\u79f0\u800c\u4e0d\u662f\u7a0d\u540e\u7f16\u8f91\u540d\u79f0\u3002\u8f93\u5165\u7684\u540d\u79f0\u5c06\u7528\u4e8e\u5728\u6587\u4ef6\u4e2d\u521b\u5efa\u521d\u59cb\u6587\u672c\uff08\u5982\u4e0b\u6240\u8ff0\uff09\u3002"),(0,r.kt)("h2",i({},{id:"\u811a\u672c\u6587\u4ef6\u7684\u5256\u6790"}),"\u811a\u672c\u6587\u4ef6\u7684\u5256\u6790"),(0,r.kt)("p",null,"\u53cc\u51fb Unity \u4e2d\u7684\u811a\u672c\u8d44\u6e90\u65f6\uff0c\u5c06\u5728\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u6b64\u811a\u672c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cUnity \u5c06\u4f7f\u7528 Visual Studio\uff0c\u4f46\u53ef\u4ece Unity \u7684\u504f\u597d\u8bbe\u7f6e\uff08\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Unity"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Preferences")," \uff09\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"External Tools"),"  \u9762\u677f\u9009\u62e9\u6240\u9700\u7684\u4efb\u4f55\u7f16\u8f91\u5668\u3002"),(0,r.kt)("p",null,"\u8be5\u6587\u4ef6\u7684\u521d\u59cb\u5185\u5bb9\u5c06\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"using UnityEngine;\nusing System.Collections;\n\npublic class NewBehaviourScript : MonoBehaviour {\n\n    // Use this for initialization\n    void Start () {\n    \n    }\n    \n    // Update is called once per frame\n    void Update () {\n    \n    }\n}\n\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u8fde\u63a5\u5230 Unity \u7684\u5185\u90e8\u67b6\u6784\uff0c\u811a\u672c\u5c06\u5b9e\u73b0\u4e00\u4e2a\u7c7b\uff0c\u6b64\u7c7b\u4ece\u79f0\u4e3a  ",(0,r.kt)("strong",{parentName:"p"},"MonoBehaviour"),"  \u7684\u5185\u7f6e\u7c7b\u6d3e\u751f\u800c\u6765\u3002\u53ef\u4ee5\u5c06\u7c7b\u89c6\u4e3a\u4e00\u79cd\u84dd\u56fe\uff0c\u7528\u4e8e\u521b\u5efa\u53ef\u9644\u52a0\u5230\u6e38\u620f\u5bf9\u8c61\u7684\u65b0\u7ec4\u4ef6\u7c7b\u578b\u3002\u6bcf\u6b21\u5c06\u811a\u672c\u7ec4\u4ef6\u9644\u52a0\u5230\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa\u8be5\u84dd\u56fe\u5b9a\u4e49\u7684\u5bf9\u8c61\u7684\u65b0\u5b9e\u4f8b\u3002\u7c7b\u7684\u540d\u79f0\u53d6\u81ea\u521b\u5efa\u6587\u4ef6\u65f6\u63d0\u4f9b\u7684\u540d\u79f0\u3002\u7c7b\u540d\u548c\u6587\u4ef6\u540d\u5fc5\u987b\u76f8\u540c\u624d\u80fd\u4f7f\u811a\u672c\u7ec4\u4ef6\u9644\u52a0\u5230\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u5fc5\u987b\u6ce8\u610f\u5728\u7c7b\u4e2d\u5b9a\u4e49\u7684\u4e24\u4e2a\u51fd\u6570\u3002 ",(0,r.kt)("strong",{parentName:"p"},"Update"),"  \u51fd\u6570\u662f\u653e\u7f6e\u4ee3\u7801\u7684\u5730\u65b9\uff0c\u7528\u4e8e\u5904\u7406\u6e38\u620f\u5bf9\u8c61\u7684\u5e27\u66f4\u65b0\u3002\u8fd9\u53ef\u80fd\u5305\u62ec\u79fb\u52a8\u3001\u89e6\u53d1\u52a8\u4f5c\u548c\u54cd\u5e94\u7528\u6237\u8f93\u5165\uff0c\u57fa\u672c\u4e0a\u6d89\u53ca\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u968f\u65f6\u95f4\u63a8\u79fb\u800c\u9700\u8981\u5904\u7406\u7684\u4efb\u4f55\u4e8b\u9879\u3002\u4e3a\u4e86\u4f7f Update \u51fd\u6570\u6b63\u5e38\u8fd0\u884c\uff0c\u5728\u8fdb\u884c\u4efb\u4f55\u6e38\u620f\u64cd\u4f5c\u4e4b\u524d\uff0c\u901a\u5e38\u9700\u8981\u786e\u4fdd\u80fd\u591f\u8bbe\u7f6e\u53d8\u91cf\u3001\u8bfb\u53d6\u504f\u597d\u8bbe\u7f6e\u4ee5\u53ca\u4e0e\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u5efa\u7acb\u8fde\u63a5\u3002\u5728\u6e38\u620f\u5f00\u59cb\u4e4b\u524d\uff08\u5373\u7b2c\u4e00\u6b21\u8c03\u7528 Update \u51fd\u6570\u4e4b\u524d\uff09\uff0cUnity \u5c06\u8c03\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Start"),"  \u51fd\u6570\uff1b\u6b64\u51fd\u6570\u662f\u8fdb\u884c\u6240\u6709\u521d\u59cb\u5316\u7684\u7406\u60f3\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6709\u7ecf\u9a8c\u7684\u7a0b\u5e8f\u5458\u53ef\u80fd\u4f1a\u60ca\u8bb6\u4e8e\u6ca1\u6709\u4f7f\u7528\u6784\u9020\u51fd\u6570\u6765\u5b8c\u6210\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u3002\u8fd9\u662f\u56e0\u4e3a\u5bf9\u8c61\u7684\u6784\u9020\u7531\u7f16\u8f91\u5668\u5904\u7406\uff0c\u4e0d\u4f1a\u50cf\u60a8\u53ef\u80fd\u671f\u671b\u7684\u90a3\u6837\u5728\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u5f00\u59cb\u65f6\u8fdb\u884c\u3002\u5982\u679c\u5c1d\u8bd5\u4e3a\u811a\u672c\u7ec4\u4ef6\u5b9a\u4e49\u6784\u9020\u51fd\u6570\uff0c\u5c06\u4f1a\u5e72\u6270 Unity \u7684\u6b63\u5e38\u8fd0\u884c\uff0c\u5e76\u53ef\u80fd\u5bfc\u81f4\u9879\u76ee\u51fa\u73b0\u91cd\u5927\u95ee\u9898\u3002"),(0,r.kt)("h2",i({},{id:"\u63a7\u5236\u6e38\u620f\u5bf9\u8c61"}),"\u63a7\u5236\u6e38\u620f\u5bf9\u8c61"),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u811a\u672c\u53ea\u5b9a\u4e49\u4e86\u7ec4\u4ef6\u7684\u84dd\u56fe\uff0c\u56e0\u6b64\u5728\u5c06\u811a\u672c\u5b9e\u4f8b\u9644\u52a0\u5230\u6e38\u620f\u5bf9\u8c61\u4e4b\u524d\uff0c\u4e0d\u4f1a\u6fc0\u6d3b\u4efb\u4f55\u4ee3\u7801\u3002\u4e3a\u4e86\u9644\u52a0\u811a\u672c\uff0c\u53ef\u5c06\u811a\u672c\u8d44\u6e90\u62d6\u52a8\u5230\u5c42\u7ea7\u89c6\u56fe\u9762\u677f\u4e2d\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u6216\u62d6\u52a8\u5230\u5f53\u524d\u9009\u5b9a\u6e38\u620f\u5bf9\u8c61\u7684\u68c0\u89c6\u9762\u677f\u3002Component \u83dc\u5355\u4e0a\u8fd8\u6709\u4e00\u4e2a Scripts \u5b50\u83dc\u5355\uff0c\u5176\u4e2d\u5305\u542b\u9879\u76ee\u4e2d\u53ef\u7528\u7684\u6240\u6709\u811a\u672c\uff0c\u5305\u62ec\u81ea\u5b9a\u4e49\u7684\u811a\u672c\u3002\u811a\u672c\u5b9e\u4f8b\u770b\u8d77\u6765\u5f88\u50cf\u68c0\u89c6\u9762\u677f\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u7ec4\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",i({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScriptInInspector.png",alt:"ScriptInInspector.png"}))),(0,r.kt)("p",null,"\u9644\u52a0\u811a\u672c\u540e\uff0c\u6309 Play \u5e76\u8fd0\u884c\u6e38\u620f\u65f6\uff0c\u811a\u672c\u5c06\u5f00\u59cb\u5de5\u4f5c\u3002\u53ef\u4ee5\u901a\u8fc7\u5728 Start \u51fd\u6570\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u6765\u68c0\u67e5\u6b64\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'// Use this for initialization\nvoid Start () \n{\n    Debug.Log("Hello world!");\n}\n\n')),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Debug.Log"),"  \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\uff0c\u53ea\u662f\u5c06\u6d88\u606f\u8f93\u51fa\u5230 Unity \u7684\u63a7\u5236\u53f0\u3002\u5982\u679c\u73b0\u5728\u6309 Play\uff0c\u5e94\u8be5\u4f1a\u5728 Unity Editor \u4e3b\u7a97\u53e3\u5e95\u90e8\u4ee5\u53ca Console \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,r.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"General"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Console")," \uff09\u4e2d\u770b\u5230\u6b64\u6d88\u606f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2018\u201303\u201319 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,r.kt)("li",{parentName:"ul"},"\u4ece 2018.1 \u5f00\u59cb\uff0cMonoDevelop \u7531 Visual Studio \u53d6\u4ee3")))}g.isMDXComponent=!0}}]);