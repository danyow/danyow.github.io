"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27934],{35318:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return m}});var r=e(27378);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=r.createContext({}),s=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},c=function(t){var n=s(t.components);return r.createElement(p.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=s(e),m=a,g=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return e?r.createElement(g,i(i({ref:n},c),{},{components:e})):r.createElement(g,i({ref:n},c))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},60338:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});e(27378);var r=e(35318);function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}function l(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}const i={id:"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",slug:"/scripting-section/scripting-concepts/instantiating-prefabs"},o="\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",p={unversionedId:"unity/scripting-section/scripting-concepts/\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",id:"version-Unity@2022.1/unity/scripting-section/scripting-concepts/\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",title:"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",description:"\u60f3\u8981\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u590d\u6742\u7684\u6e38\u620f\u5bf9\u8c61\u6216\u6e38\u620f\u5bf9\u8c61\u7684\u96c6\u5408\u65f6\uff0c\u9884\u5236\u4ef6\u975e\u5e38\u65b9\u4fbf\u3002\u4e0e\u4f7f\u7528\u4ee3\u7801\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u76f8\u6bd4\uff0c\u4f7f\u7528\u4ee3\u7801\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u6709\u8bb8\u591a\u4f18\u70b9\uff0c\u56e0\u4e3a\u60a8\u53ef\u4ee5\uff1a",source:"@site/versioned_docs/version-Unity@2022.1/unity/scripting-section/scripting-concepts/instantiating-prefabs.md",sourceDirName:"unity/scripting-section/scripting-concepts",slug:"/scripting-section/scripting-concepts/instantiating-prefabs",permalink:"/docs/scripting-section/scripting-concepts/instantiating-prefabs",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",slug:"/scripting-section/scripting-concepts/instantiating-prefabs"},sidebar:"unity",previous:{title:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",permalink:"/docs/scripting-section/scripting-concepts/execution-order"},next:{title:"\u547d\u540d\u7a7a\u95f4",permalink:"/docs/scripting-section/scripting-concepts/namespaces"}},s={},c=[{value:"\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u7684\u57fa\u7840\u77e5\u8bc6",id:"\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u7684\u57fa\u7840\u77e5\u8bc6",level:2},{value:"\u5e38\u89c1\u60c5\u51b5",id:"\u5e38\u89c1\u60c5\u51b5",level:2},{value:"\u6784\u5efa\u7ed3\u6784",id:"\u6784\u5efa\u7ed3\u6784",level:3},{value:"\u5b9e\u4f8b\u5316\u98de\u5f39\u548c\u7206\u70b8",id:"\u5b9e\u4f8b\u5316\u98de\u5f39\u548c\u7206\u70b8",level:3},{value:"\u7528\u5e03\u5a03\u5a03\u6216\u6b8b\u9ab8\u66ff\u6362\u89d2\u8272",id:"\u7528\u5e03\u5a03\u5a03\u6216\u6b8b\u9ab8\u66ff\u6362\u89d2\u8272",level:3}],u={toc:c};function k(t){var{components:n}=t,e=l(t,["components"]);return(0,r.kt)("wrapper",a({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6"}),"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6"),(0,r.kt)("p",null,"\u60f3\u8981\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u590d\u6742\u7684\u6e38\u620f\u5bf9\u8c61\u6216\u6e38\u620f\u5bf9\u8c61\u7684\u96c6\u5408\u65f6\uff0c",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/Manual/Prefabs.html"}),"\u9884\u5236\u4ef6"),"\u975e\u5e38\u65b9\u4fbf\u3002\u4e0e\u4f7f\u7528\u4ee3\u7801\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u76f8\u6bd4\uff0c\u4f7f\u7528\u4ee3\u7801\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u6709\u8bb8\u591a\u4f18\u70b9\uff0c\u56e0\u4e3a\u60a8\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u884c\u4ee3\u7801\u5b9e\u4f8b\u5316\u4e00\u4e2a\u9884\u5236\u4ef6\u3002\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u7b49\u6548\u7684\u6e38\u620f\u5bf9\u8c61\u9700\u8981\u66f4\u591a\u7684\u4ee3\u7801\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"li"},"Scene \u89c6\u56fe\u3001Hierarchy \u7a97\u53e3")," \u548c  ",(0,r.kt)("strong",{parentName:"li"},"Inspector"),"  \u5feb\u901f\u8f7b\u677e\u5730\u8bbe\u7f6e\u3001\u6d4b\u8bd5\u548c\u4fee\u6539\u9884\u5236\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u9700\u66f4\u6539\u4ee3\u7801\u5373\u53ef\u66f4\u6539\u6240\u5b9e\u4f8b\u5316\u7684\u9884\u5236\u4ef6\u3002\u65e0\u9700\u66f4\u6539\u4efb\u4f55\u4ee3\u7801\uff0c\u5373\u53ef\u5c06\u7b80\u5355\u7684\u706b\u7bad\u53d8\u6210\u589e\u538b\u706b\u7bad\u3002")),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u9875\u9762\u4e0b\u8f7d\u4e00\u4e2a\u5305\u542b\u6240\u6709\u793a\u4f8b\u7684 Unity \u9879\u76ee\uff1a"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",a({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/InstantiatingPrefabsExamples.zip"}),"InstantiatingPrefabsExamples.zip"))," "),(0,r.kt)("h2",a({},{id:"\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u7684\u57fa\u7840\u77e5\u8bc6"}),"\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u7684\u57fa\u7840\u77e5\u8bc6"),(0,r.kt)("p",null,"\u8981\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\uff0c\u4ee3\u7801\u9700\u8981\u5bf9\u8be5\u9884\u5236\u4ef6\u7684\u5f15\u7528\u3002\u8981\u8fdb\u884c\u6b64\u5e94\u7528\uff0c\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u516c\u5171\u53d8\u91cf\u6765\u4fdd\u5b58\u9884\u5236\u4ef6\u5f15\u7528\u3002\u4ee3\u7801\u4e2d\u7684\u516c\u5171\u53d8\u91cf\u5728 Inspector \u4e2d\u663e\u793a\u4e3a\u53ef\u5206\u914d\u7684\u5b57\u6bb5\u3002\u7136\u540e\uff0c\u53ef\u4ee5\u5728 Inspector \u4e2d\u5206\u914d\u8981\u4f7f\u7528\u7684\u5b9e\u9645\u9884\u5236\u4ef6\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u811a\u672c\u793a\u4f8b\u6709\u4e00\u4e2a\u516c\u5171\u53d8\u91cf ",(0,r.kt)("strong",{parentName:"p"},"\u201cmyPrefab\u201d")," \uff0c\u8fd9\u662f\u5bf9\u9884\u5236\u4ef6\u7684\u5f15\u7528\u3002\u8be5\u811a\u672c\u5728  ",(0,r.kt)("strong",{parentName:"p"},"Start()"),"  \u65b9\u6cd5\u4e2d\u521b\u5efa\u8be5\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"using UnityEngine;\npublic class InstantiationExample : MonoBehaviour \n{\n    // \u5f15\u7528\u9884\u5236\u4ef6\u3002\u5728 Inspector \u4e2d\uff0c\u5c06\u9884\u5236\u4ef6\u62d6\u52a8\u5230\u8be5\u5b57\u6bb5\u4e2d\u3002\n    public GameObject myPrefab;\n\n    // \u8be5\u811a\u672c\u5c06\u5728\u6e38\u620f\u5f00\u59cb\u65f6\u7b80\u5355\u5730\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u3002\n    void Start()\n    {\n        // \u5b9e\u4f8b\u5316\u4e3a\u4f4d\u7f6e (0, 0, 0) \u548c\u96f6\u65cb\u8f6c\u3002\n        Instantiate(myPrefab, new Vector3(0, 0, 0), Quaternion.identity);\n    }\n}\n")),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u6b64\u793a\u4f8b\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 C# \u811a\u672c\uff0c\u5e76\u5c06\u5176\u547d\u540d\u4e3a\u201cInstantiationExample\u201d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4e0a\u9762\u7684\u811a\u672c\u793a\u4f8b\u590d\u5236\u5e76\u7c98\u8d34\u5230\u65b0\u811a\u672c\u4e2d\uff0c\u7136\u540e\u4fdd\u5b58\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"GameObject ",">"," Create Empty"),"  \u83dc\u5355\u521b\u5efa\u7a7a\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5c06\u811a\u672c\u62d6\u52a8\u5230\u7a7a\u6e38\u620f\u5bf9\u8c61\u4e0a\uff0c\u5c06\u811a\u672c\u4f5c\u4e3a\u4e00\u4e2a\u7ec4\u4ef6\u6dfb\u52a0\u5230\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/unity-overview/creating-gameplay/prefabs/creating-prefabs"}),"\u521b\u5efa\u4efb\u4f55\u9884\u5236\u4ef6"),"\uff0c\u7136\u540e\u5c06\u5176\u4ece  ",(0,r.kt)("strong",{parentName:"li"},"Project \u7a97\u53e3")," \u62d6\u52a8\u5230\u811a\u672c\u7ec4\u4ef6\u7684  ",(0,r.kt)("strong",{parentName:"li"},"My Prefab"),"  \u5b57\u6bb5\u4e2d\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabDragIntoField.png",alt:"\u5c06\u4e00\u4e2a\u9884\u5236\u4ef6\u4ece Project \u7a97\u53e3\u62d6\u52a8\u5230\u811a\u672c\u7ec4\u4ef6\u7684 My Prefab \u5b57\u6bb5\u4e2d"}))),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a\u9884\u5236\u4ef6\u4ece Project \u7a97\u53e3\u62d6\u52a8\u5230\u811a\u672c\u7ec4\u4ef6\u7684 My Prefab \u5b57\u6bb5\u4e2d"),(0,r.kt)("p",null,"\u542f\u52a8\u8fd0\u884c\u6a21\u5f0f\u65f6\uff0c\u5e94\u8be5\u4f1a\u770b\u5230\u9884\u5236\u4ef6\u5728\u573a\u666f\u4e2d\u5b9e\u4f8b\u5316\u4e3a\u4f4d\u7f6e (0, 0, 0)\u3002"),(0,r.kt)("p",null,"\u53ea\u9700\u5c06\u5176\u4ed6\u9884\u5236\u4ef6\u62d6\u5230 Inspector \u7684  ",(0,r.kt)("strong",{parentName:"p"},"My Prefab"),"  \u5b57\u6bb5\u4e2d\uff0c\u5373\u53ef\u66f4\u6539\u8981\u8fdb\u884c\u5b9e\u4f8b\u5316\u7684\u9884\u5236\u4ef6\uff0c\u800c\u65e0\u9700\u66f4\u6539\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u793a\u4f8b\u975e\u5e38\u7b80\u5355\uff0c\u76f8\u6bd4\u60a8\u81ea\u5df1\u624b\u52a8\u5c06\u9884\u5236\u4ef6\u81ea\u5df1\u653e\u7f6e\u5230\u573a\u666f\u4e2d\uff0c\u4f3c\u4e4e\u5e76\u6ca1\u6709\u4efb\u4f55\u4f18\u52bf\u3002\u4f46\u662f\uff0c\u80fd\u591f\u4f7f\u7528\u4ee3\u7801\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u5c06\u5b9e\u73b0\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u5728\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u7684\u590d\u6742\u914d\u7f6e\uff0c\u5982\u4e0b\u6587\u4e2d\u7684\u793a\u4f8b\u6240\u793a\u3002"),(0,r.kt)("h2",a({},{id:"\u5e38\u89c1\u60c5\u51b5"}),"\u5e38\u89c1\u60c5\u51b5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bf4\u660e\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u7684\u4f18\u52bf\uff0c\u4e0b\u9762\u4ecb\u7ecd\u4e86\u9884\u5236\u4ef6\u975e\u5e38\u6709\u7528\u7684\u51e0\u79cd\u57fa\u672c\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5728\u4e0d\u540c\u4f4d\u7f6e\uff08\u4f8b\u5982\u5728\u7f51\u683c\u6216\u5706\u5f62\u7ed3\u6784\u4e2d\uff09\u591a\u6b21\u590d\u5236\u5355\u4e2a\u9884\u5236\u4ef6\u6765\u6784\u5efa\u4e00\u4e2a\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ece\u53d1\u5c04\u5668\u53d1\u5c04\u98de\u5f39\u9884\u5236\u4ef6\u3002\u98de\u5f39\u9884\u5236\u4ef6\u53ef\u80fd\u662f\u4e00\u4e2a\u590d\u6742\u7684\u914d\u7f6e\uff0c\u5176\u4e2d\u5305\u542b ",(0,r.kt)("strong",{parentName:"li"},"\u7f51\u683c")," \u3001 ",(0,r.kt)("strong",{parentName:"li"},"\u521a\u4f53")," \u3001 ",(0,r.kt)("strong",{parentName:"li"},"\u78b0\u649e\u4f53")," \u3001 ",(0,r.kt)("strong",{parentName:"li"},"\u97f3\u9891\u6e90")," \u3001 ",(0,r.kt)("strong",{parentName:"li"},"\u52a8\u6001\u5149\u6e90")," \u4ee5\u53ca\u4e00\u4e2a\u5177\u6709\u81ea\u5df1\u7684\u8f68\u8ff9 ",(0,r.kt)("strong",{parentName:"li"},"\u7c92\u5b50\u7cfb\u7edf")," \u7684\u5b50\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8f66\u8f86\u3001\u5efa\u7b51\u7269\u6216\u89d2\u8272\uff08\u4f8b\u5982\u673a\u5668\u4eba\uff09\u5206\u89e3\u6210\u8bb8\u591a\u90e8\u5206\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e2d\uff0c\u793a\u4f8b\u811a\u672c\u5c06\u5220\u9664\u5b8c\u6574\u6b63\u5e38\u7684\u673a\u5668\u4eba\u9884\u5236\u4ef6\uff0c\u5e76\u66ff\u6362\u4e3a\u6b8b\u9ab8\u673a\u5668\u4eba\u9884\u5236\u4ef6\u3002\u8fd9\u79cd\u6b8b\u9ab8\u9884\u5236\u4ef6\u7531\u673a\u5668\u4eba\u7684\u5355\u72ec\u7834\u788e\u90e8\u5206\u7ec4\u6210\uff0c\u6bcf\u4e2a\u90e8\u5206\u90fd\u5177\u6709\u81ea\u5df1\u7684\u521a\u4f53\u548c\u7c92\u5b50\u7cfb\u7edf\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u6cd5\uff0c\u53ea\u9700\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u5c06\u673a\u5668\u4eba\u70b8\u6210\u8bb8\u591a\u788e\u7247\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u5c06\u539f\u59cb\u6e38\u620f\u5bf9\u8c61\u66ff\u6362\u4e3a\u4e00\u4e2a\u6b8b\u9ab8\u9884\u5236\u4ef6\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u8bf4\u660e\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e9b\u60c5\u51b5\u3002"),(0,r.kt)("h3",a({},{id:"\u6784\u5efa\u7ed3\u6784"}),"\u6784\u5efa\u7ed3\u6784"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u51e0\u4e4e\u7acb\u5373\u5728\u7279\u5b9a\u914d\u7f6e\u4e2d\u521b\u5efa\u9884\u5236\u4ef6\u7684\u8bb8\u591a\u526f\u672c\u3002\u4f7f\u7528\u4ee3\u7801\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u751f\u6210\u7ed3\u6784\u7684\u8fc7\u7a0b\u79f0\u4e3a\u7a0b\u5e8f\u5316\u751f\u6210\u3002\u4ee5\u4e0b\u793a\u4f8b\u5c06\u521b\u5efa\u4e00\u5835\u5899\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u8981\u5c1d\u8bd5\u8be5\u793a\u4f8b\uff0c\u8bf7\u521b\u5efa\u4ee5\u4e0b\u811a\u672c\uff0c\u5c06\u5176\u547d\u540d\u4e3a  ",(0,r.kt)("strong",{parentName:"p"},"Wall")," \uff0c\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u573a\u666f\u4e2d\u7684\u7a7a\u6e38\u620f\u5bf9\u8c61\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"using UnityEngine;\npublic class Wall : MonoBehaviour\n{\n   public GameObject block;\n   public int width = 10;\n   public int height = 4;\n  \n   void Start()\n   {\n       for (int y=0; y&lt;height; ++y)\n       {\n           for (int x=0; x&lt;width; ++x)\n           {\n               Instantiate(block, new Vector3(x,y,0), Quaternion.identity);\n           }\n       }       \n   }\n}\n")),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u540e\uff0c\u5e94\u8be5\u4f1a\u5728 Inspector \u4e2d\u770b\u5230  ",(0,r.kt)("strong",{parentName:"p"},"Block"),"  \u53d8\u91cf\uff0c\u5b57\u6bb5\u4e2d\u5305\u542b\u6587\u5b57  ",(0,r.kt)("strong",{parentName:"p"},"None")," \u3002\u503c\u4e3a\u201cNone\u201d\u8868\u793a\u8fd8\u6ca1\u6709\u4e3a\u8be5\u53d8\u91cf\u5206\u914d\u4efb\u4f55\u9884\u5236\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/InstantiatingWallBlockNotAssigned.png",alt:"\u5c1a\u672a\u5206\u914d\u4efb\u4f55\u9884\u5236\u4ef6\u7684 Block \u53d8\u91cf"}))),(0,r.kt)("p",null,"\u5c1a\u672a\u5206\u914d\u4efb\u4f55\u9884\u5236\u4ef6\u7684  ",(0,r.kt)("strong",{parentName:"p"},"Block"),"  \u53d8\u91cf"),(0,r.kt)("p",null,"\u5728\u5c06\u9884\u5236\u4ef6\u5206\u914d\u7ed9  ",(0,r.kt)("strong",{parentName:"p"},"Block"),"  \u53d8\u91cf\u4e4b\u524d\uff0c\u4ee5\u4e0a\u793a\u4f8b\u811a\u672c\u5c06\u65e0\u6548\u3002\u8981\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 Block \u9884\u5236\u4ef6\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("p",null,"1.\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"GameObject ",">"," 3D Object ",">"," Cube")," \u3002"),(0,r.kt)("p",null,"2.\u5c06\u7acb\u65b9\u4f53\u4ece  ",(0,r.kt)("strong",{parentName:"p"},"Hierarchy"),"   ",(0,r.kt)("strong",{parentName:"p"},"\u7a97\u53e3")," \u4e2d\u62d6\u5165  ",(0,r.kt)("strong",{parentName:"p"},"Project \u7a97\u53e3")," \u4e2d\u7684  ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"  \u6587\u4ef6\u5939\u3002","*","*","*","*","\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a\u9884\u5236\u4ef6\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"3.\u5c06\u9884\u5236\u4ef6\u91cd\u547d\u540d\u4e3a\u201cBlock\u201d\u3002"),(0,r.kt)("p",null,"4.\u73b0\u5728  ",(0,r.kt)("strong",{parentName:"p"},"Block"),"  \u9884\u5236\u4ef6\u4f5c\u4e3a\u8d44\u6e90\u5b58\u5728\u4e86\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b89\u5168\u5730\u4ece\u5c42\u7ea7\u89c6\u56fe\u4e2d\u5220\u9664\u7acb\u65b9\u4f53\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u5df2\u7ecf\u521b\u5efa\u4e86 Block \u9884\u5236\u4ef6\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u5c06\u5176\u5206\u914d\u7ed9  ",(0,r.kt)("strong",{parentName:"p"},"Block"),"  \u53d8\u91cf\u3002\u9009\u62e9\u539f\u59cb\u6e38\u620f\u5bf9\u8c61\uff08\u9644\u52a0\u4e86\u201cWall\u201d\u811a\u672c\u7684\u6e38\u620f\u5bf9\u8c61\uff09\u3002\u7136\u540e\u5c06\u201cBlock\u201d\u9884\u5236\u4ef6\u4ece  ",(0,r.kt)("strong",{parentName:"p"},"Project \u7a97\u53e3"),"  \u62d6\u5165\u201cBlock\u201d\u53d8\u91cf\u5b57\u6bb5\uff08\u5176\u4e2d\u663e\u793a\u201cNone\u201d\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/InstantiatingWallBlockAssigned.png",alt:"\u5206\u914d\u4e86 Block \u9884\u5236\u4ef6\u7684 Block \u53d8\u91cf "}))),(0,r.kt)("p",null,"\u5206\u914d\u4e86 Block \u9884\u5236\u4ef6\u7684  ",(0,r.kt)("strong",{parentName:"p"},"*Block")," * \u53d8\u91cf"),(0,r.kt)("p",null,"\u5b8c\u6210\u6b64\u8bbe\u7f6e\u540e\uff0c\u5355\u51fb  ",(0,r.kt)("strong",{parentName:"p"},"Play"),"  \u5c31\u4f1a\u770b\u5230 Unity \u4f7f\u7528\u9884\u5236\u4ef6\u6765\u6784\u5efa\u4e00\u5835\u5899\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/InstantiatingWallComplete.png",alt:"\u7531 4 \u6392\uff08\u6bcf\u6392 10 \u5757\uff09\u6784\u6210\u7684\u5899\uff0c\u6309\u4ee5\u4e0a\u793a\u4f8b\u751f\u6210\u3002"}))),(0,r.kt)("p",null,"\u7531 4 \u6392\uff08\u6bcf\u6392 10 \u5757\uff09\u6784\u6210\u7684\u5899\uff0c\u6309\u4ee5\u4e0a\u793a\u4f8b\u751f\u6210\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u79cd\u53ef\u4ee5\u5728 Unity \u4e2d\u53cd\u590d\u4f7f\u7528\u7684\u7075\u6d3b\u5de5\u4f5c\u6d41\u7a0b\u6a21\u5f0f\u3002\u56e0\u4e3a\u5728\u6b64\u811a\u672c\u4e2d\u4f7f\u7528\u7684\u662f\u9884\u5236\u4ef6\uff0c\u6240\u4ee5\u65e0\u9700\u6539\u52a8\u811a\u672c\u5373\u53ef\u8f7b\u677e\u66ff\u6362\u6216\u7f16\u8f91\u9884\u5236\u4ef6\u6765\u4fee\u6539\u5899\u7684\u7816\u5757\u5c5e\u6027\u3002\u8fd8\u53ef\u4ee5\u5728\u573a\u666f\u4e2d\u7684\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u4e0a\u4f7f\u7528 Wall \u811a\u672c\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u5206\u914d\u4e0d\u540c\u7684\u9884\u5236\u4ef6\uff0c\u4ee5\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u9884\u5236\u4ef6\u6784\u5efa\u5404\u79cd\u5899\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u5c06\u6e38\u620f\u5bf9\u8c61\u653e\u7f6e\u5728\u7f51\u683c\u3001\u5706\u5f62\u56fe\u6848\u3001\u968f\u673a\u5206\u6563\u7684\u5f62\u72b6\u6216\u4efb\u4f55\u5176\u4ed6\u914d\u7f6e\u4e2d\uff08\u53ea\u8981\u60a8\u8ba4\u4e3a\u9002\u5408\u6240\u8981\u521b\u5efa\u7684\u4efb\u4f55\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\uff09\u3002\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u793a\u4f8b\uff0c\u663e\u793a\u4e86\u5982\u4f55\u4ee5\u5706\u5f62\u5f62\u5f0f\u653e\u7f6e\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"using UnityEngine;\npublic class CircleFormation : MonoBehaviour\n{\n   // \u4ee5\u5706\u5f62\u5f62\u5f0f\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\n   public GameObject prefab;\n   public int numberOfObjects = 20;\n   public float radius = 5f;\n   void Start()\n   {\n       for (int i = 0; i &lt; numberOfObjects; i++)\n       {\n           float angle = i * Mathf.PI * 2 / numberOfObjects;\n           float x = Mathf.Cos(angle) * radius;\n           float z = Mathf.Sin(angle) * radius;\n           Vector3 pos = transform.position + new Vector3(x, 0, z);\n           float angleDegrees = -angle*Mathf.Rad2Deg;\n           Quaternion rot = Quaternion.Euler(0, angleDegrees, 0);\n           Instantiate(prefab, pos, rot);\n       }\n   }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/InstantiatingCircle.png",alt:"\u5706\u5f62\u6392\u5217\u7684\u5899\u5757\uff0c\u6309\u4ee5\u4e0a\u793a\u4f8b\u751f\u6210"}))),(0,r.kt)("p",null,"\u5706\u5f62\u6392\u5217\u7684\u5899\u5757\uff0c\u6309\u4ee5\u4e0a\u793a\u4f8b\u751f\u6210"),(0,r.kt)("h3",a({},{id:"\u5b9e\u4f8b\u5316\u98de\u5f39\u548c\u7206\u70b8"}),"\u5b9e\u4f8b\u5316\u98de\u5f39\u548c\u7206\u70b8"),(0,r.kt)("p",null,"\u5728\u6b64\u60c5\u51b5\u4e2d\uff1a"),(0,r.kt)("p",null,"1.\u73a9\u5bb6\u6309\u4e0b\u53d1\u5c04\u6309\u94ae\u65f6\uff0c\u201cLauncher\u201d\u6e38\u620f\u5bf9\u8c61\u5c06\u5b9e\u4f8b\u5316\u4e00\u4e2a\u98de\u5f39\u9884\u5236\u4ef6\u3002\u8be5\u9884\u5236\u4ef6\u5305\u542b\u4e00\u4e2a\u7f51\u683c\u3001\u4e00\u4e2a\u521a\u4f53\u548c\u4e00\u4e2a\u78b0\u649e\u4f53\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u5728\u7a7a\u4e2d\u98de\u884c\u5e76\u68c0\u6d4b\u4f55\u65f6\u53d1\u751f\u78b0\u649e\u3002"),(0,r.kt)("p",null,"2.\u98de\u5f39\u4e0e\u7269\u4f53\u78b0\u649e\uff0c\u7136\u540e\u5b9e\u4f8b\u5316\u7206\u70b8\u9884\u5236\u4ef6\u3002\u7206\u70b8\u9884\u5236\u4ef6\u5305\u542b\u7c92\u5b50\u7cfb\u7edf\u6548\u679c\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5bf9\u5468\u56f4\u6e38\u620f\u5bf9\u8c61\u65bd\u529b\u7684\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u4e0e\u4e0a\u9762\u7684 Block \u9884\u5236\u4ef6\u76f8\u540c\u7684\u65b9\u5f0f\uff0c\u65e0\u8bba\u98de\u5f39\u9884\u5236\u4ef6\u6709\u591a\u590d\u6742\uff0c\u4ec5\u7528\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u5b9e\u4f8b\u5316\u98de\u5f39\u3002\u5728\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u4e4b\u540e\uff0c\u8fd8\u53ef\u4ee5\u4fee\u6539\u5b9e\u4f8b\u5316\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u4efb\u4f55\u5c5e\u6027\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u98de\u5f39\u7684\u521a\u4f53\u7684\u901f\u5ea6\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u6613\u4e8e\u4f7f\u7528\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u7a0d\u540e\u4fee\u6539\u9884\u5236\u4ef6\uff0c\u800c\u65e0\u9700\u6539\u52a8\u4ee3\u7801\u3002\u56e0\u6b64\uff0c\u5982\u679c\u98de\u5f39\u4e3a\u706b\u7bad\uff0c\u90a3\u4e48\u7a0d\u540e\u53ef\u4ee5\u6dfb\u52a0\u7c92\u5b50\u7cfb\u7edf\uff0c\u4ece\u800c\u4ea7\u751f\u4e91\u8ff9\u3002\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u6240\u6709\u5b9e\u4f8b\u5316\u7684\u706b\u7bad\u90fd\u4f1a\u5177\u6709\u7c92\u5b50\u8f68\u8ff9\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u811a\u672c\u663e\u793a\u4e86\u5982\u4f55\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Instantiate()"),"  \u51fd\u6570\u6765\u53d1\u5c04\u98de\u5f39\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'using UnityEngine;\npublic class FireProjectile : MonoBehaviour\n{\n    public Rigidbody projectile;\n    public float speed = 4;\n    void Update()\n    {\n        if (Input.GetButtonDown("Fire1"))\n        {\n            Rigidbody p = Instantiate(projectile, transform.position, transform.rotation);\n            p.velocity = transform.forward * speed;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\uff0c\u9884\u5236\u4ef6\u53d8\u91cf\u7c7b\u578b\u662f\u521a\u4f53\uff0c\u800c\u4e0d\u662f\u6e38\u620f\u5bf9\u8c61\u3002\u8fd9\u6837\u6709\u4e24\u4e2a\u6709\u7528\u7684\u6548\u679c\uff1a"),(0,r.kt)("p",null,"1.\u53ea\u80fd\u4e3a\u6b64\u53d8\u91cf\u5206\u914d\u5177\u6709\u521a\u4f53\u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u8fd9\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5b83\u6709\u52a9\u4e8e\u786e\u4fdd\u60a8\u4e3a\u53d8\u91cf\u5206\u914d\u4e86\u6b63\u786e\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"2.Instantiate \u65b9\u6cd5\u8fd4\u56de\u5bf9\u65b0\u5b9e\u4f8b\u4e0a\u7684\u521a\u4f53\u7ec4\u4ef6\u7684\u5f15\u7528\u3002\u8fd9\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u8fd9\u6837\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u5b9e\u4f8b\u5316\u521a\u4f53\u4e4b\u540e\u7acb\u5373\u8bbe\u7f6e\u521a\u4f53\u7684\u901f\u5ea6\u3002"),(0,r.kt)("p",null,"\u751f\u6210\u516c\u5171\u9884\u5236\u4ef6\u53d8\u91cf\u65f6\uff0c\u53d8\u91cf\u7c7b\u578b\u53ef\u4ee5\u662f\u6e38\u620f\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684\u7ec4\u4ef6\u7c7b\u578b\uff08\u5185\u7f6e\u7684 Unity \u7ec4\u4ef6\u6216\u60a8\u81ea\u5df1\u7684 MonoBehaviour \u811a\u672c\u4e4b\u4e00\uff09\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6e38\u620f\u5bf9\u8c61\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u5c06\u4efb\u4f55\u6e38\u620f\u5bf9\u8c61\u5206\u914d\u7ed9\u8be5\u53d8\u91cf\uff0c\u5e76\u4e14 Instantiate \u51fd\u6570\u5c06\u8fd4\u56de\u5bf9\u65b0\u6e38\u620f\u5bf9\u8c61\u5b9e\u4f8b\u7684\u5f15\u7528\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u7c7b\u578b\u53d8\u91cf\uff08\u4f8b\u5982\u521a\u4f53\u3001\u78b0\u649e\u4f53\u548c\u5149\u6e90\uff09\uff0c\u53ea\u80fd\u5c06\u8be5\u7ec4\u4ef6\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\u5206\u914d\u7ed9\u53d8\u91cf\uff0c\u5e76\u4e14 Instantiate \u51fd\u6570\u5c06\u8fd4\u56de\u65b0\u6e38\u620f\u5bf9\u8c61\u5b9e\u4f8b\u4e0a\u5bf9\u8be5\u7279\u5b9a\u7ec4\u4ef6\u7684\u5f15\u7528\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u811a\u672c\uff08\u653e\u7f6e\u5728\u98de\u5f39\u9884\u5236\u4ef6\u4e0a\uff09\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a\u5728\u98de\u5f39\u78b0\u649e\u7269\u4f53\u540e\uff0c\u5728\u98de\u5f39\u7684\u5f53\u524d\u4f4d\u7f6e\u5b9e\u4f8b\u5316\u7206\u70b8\uff0c\u7136\u540e\u5220\u9664\u98de\u5f39\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"using UnityEngine;\npublic class Projectile : MonoBehaviour\n{\n   public GameObject explosion;\n   void OnCollisionEnter()\n   {\n       Instantiate(explosion,transform.position,transform.rotation);\n       Destroy(gameObject);\n   }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsProjectileAndExplosion.gif",alt:"\u8fd9\u662f\u5b9e\u4f8b\u5316\u98de\u5f39\u9884\u5236\u4ef6\u7684\u793a\u4f8b\uff0c\u5728\u53d1\u751f\u649e\u51fb\u65f6\u66ff\u6362\u4e3a\u7206\u70b8\u9884\u5236\u4ef6"}))),(0,r.kt)("p",null,"\u8fd9\u662f\u5b9e\u4f8b\u5316\u98de\u5f39\u9884\u5236\u4ef6\u7684\u793a\u4f8b\uff0c\u5728\u53d1\u751f\u649e\u51fb\u65f6\u66ff\u6362\u4e3a\u7206\u70b8\u9884\u5236\u4ef6"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e0a\u56fe\u4e2d\u663e\u793a\u4e86\u5728\u8fd0\u884c\u6a21\u5f0f\u4e0b\u8fd0\u884c\u7684\u811a\u672c\uff0c\u5b9e\u4f8b\u5316\u7684\u6e38\u620f\u5bf9\u8c61\u51fa\u73b0\u5728\u5c42\u7ea7\u89c6\u56fe\u4e2d\uff0c\u5e76\u5728\u540d\u79f0\u540e\u9644\u52a0\u4e86\u6587\u5b57\u201c(Clone)\u201d\u3002"),(0,r.kt)("h3",a({},{id:"\u7528\u5e03\u5a03\u5a03\u6216\u6b8b\u9ab8\u66ff\u6362\u89d2\u8272"}),"\u7528\u5e03\u5a03\u5a03\u6216\u6b8b\u9ab8\u66ff\u6362\u89d2\u8272"),(0,r.kt)("p",null,"\u5728\u6e38\u620f\u4e2d\uff0c\u901a\u5e38\u53ef\u80fd\u4f1a\u5e0c\u671b\u5c06\u89d2\u8272\u3001\u8f66\u8f86\u3001\u5efa\u7b51\u7269\u6216\u5176\u4ed6\u8d44\u6e90\u4ece\u201c\u5b8c\u597d\u65e0\u635f\u201d\u72b6\u6001\u5207\u6362\u5230\u201c\u635f\u6bc1\u201d\u72b6\u6001\u3002\u901a\u5e38\u7684\u505a\u6cd5\u4e0d\u662f\u5c1d\u8bd5\u4fee\u6539\u6e38\u620f\u5bf9\u8c61\u7684\u5b8c\u597d\u65e0\u635f\u7248\u672c\uff08\u4f8b\u5982\u5220\u9664\u811a\u672c\u3001\u6dfb\u52a0\u521a\u4f53\u7ec4\u4ef6\u7b49\uff09\uff0c\u800c\u662f\u5220\u9664\u6574\u4e2a\u5b8c\u597d\u65e0\u635f\u6e38\u620f\u5bf9\u8c61\u5e76\u5c06\u5176\u66ff\u6362\u4e3a\u5b9e\u4f8b\u5316\u7684\u635f\u6bc1\u9884\u5236\u4ef6\uff0c\u8fd9\u6837\u505a\u7684\u6548\u7387\u4f1a\u66f4\u9ad8\u5f97\u591a\u3002\u8fd9\u6837\u53ef\u4ee5\u63d0\u4f9b\u5f88\u5927\u7684\u7075\u6d3b\u6027\u3002\u53ef\u4ee5\u5bf9\u635f\u6bc1\u7248\u672c\u4f7f\u7528\u5176\u4ed6\u6750\u8d28\u3001\u9644\u52a0\u5b8c\u5168\u4e0d\u540c\u7684\u811a\u672c\u6216\u8005\u5b9e\u4f8b\u5316\u67d0\u4e2a\u9884\u5236\u4ef6\uff08\u5176\u4e2d\u5305\u542b\u5206\u89e3\u4e3a\u4e0d\u540c\u90e8\u5206\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u7528\u4e8e\u6a21\u62df\u539f\u59cb\u6e38\u620f\u5bf9\u8c61\u7834\u788e\u7684\u6b8b\u9ab8\u7248\u672c\uff09\u3002\u53ea\u9700\u4e00\u6b21\u8c03\u7528 Instantiate() \u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e0a\u8ff0\u4efb\u610f\u65b9\u6848\uff0c\u4ece\u800c\u5c06\u635f\u6bc1\u7248\u672c\u5f15\u5165\u573a\u666f\u4e2d\uff0c\u540c\u65f6\u5220\u9664\u539f\u59cb\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u635f\u6bc1\u7248\u672c\uff0c\u7136\u540e\u901a\u8fc7\u4e0e\u539f\u59cb\u6e38\u620f\u5bf9\u8c61\u5b8c\u5168\u4e0d\u540c\u7684\u6e38\u620f\u5bf9\u8c61\u6765\u5bf9\u635f\u6bc1\u7248\u672c\u6267\u884c Instantiate()\u3002\u4f8b\u5982\uff0c\u8981\u521b\u5efa\u4e00\u4e2a\u53ef\u7834\u574f\u7684\u673a\u5668\u4eba\uff0c\u9700\u8981\u5bf9\u4e24\u4e2a\u7248\u672c\u8fdb\u884c\u5efa\u6a21\uff1a\u4e00\u4e2a\u7248\u672c\u5305\u542b\u5355\u4e2a\u6e38\u620f\u5bf9\u8c61\uff08\u9644\u52a0\u4e86\u7f51\u683c\u6e32\u67d3\u5668"),(0,r.kt)("p",null,"\u4ee5\u53ca\u7528\u4e8e\u673a\u5668\u4eba\u79fb\u52a8\u7684\u811a\u672c\uff09\uff0c\u53e6\u4e00\u4e2a\u7248\u672c\u5305\u542b\u591a\u4e2a\u53ef\u4ee5\u7531\u7269\u7406\u7cfb\u7edf\u5355\u72ec\u63a7\u5236\u7684\u9aa8\u9abc\u90e8\u4ef6\u3002\u4f7f\u7528\u4ec5\u5305\u542b\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u6a21\u578b\u65f6\uff0c\u6e38\u620f\u8fd0\u884c\u901f\u5ea6\u66f4\u5feb\uff0c\u56e0\u4e3a\u6a21\u578b\u5305\u542b\u7684\u4e09\u89d2\u5f62\u6570\u91cf\u8f83\u5c11\uff0c\u56e0\u6b64\u5176\u6e32\u67d3\u901f\u5ea6\u6bd4\u5177\u6709\u8bb8\u591a\u5c0f\u90e8\u4ef6\u7684\u673a\u5668\u4eba\u8981\u5feb\u3002\u6b64\u5916\uff0c\u673a\u5668\u4eba\u56db\u5904\u81ea\u7531\u8d70\u52a8\u65f6\uff0c\u6ca1\u6709\u7406\u7531\u5c06\u673a\u5668\u4eba\u62c6\u5206\u4e3a\u5355\u72ec\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u6784\u5efa\u6b8b\u9ab8\u673a\u5668\u4eba\u9884\u5236\u4ef6\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("p",null,"1.\u5728\u504f\u597d\u7684 3D \u5efa\u6a21\u8f6f\u4ef6\u4e2d\u9002\u7528\u5927\u91cf\u4e0d\u540c\u7684\u9aa8\u67b6\u90e8\u4ef6\u5bf9\u673a\u5668\u4eba\u5efa\u6a21\uff0c\u7136\u540e\u5c06\u673a\u5668\u4eba\u5bfc\u51fa\u5230 Unity \u9879\u76ee\u7684 Assets \u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,"2.\u5728 Unity Editor \u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u573a\u666f\u3002"),(0,r.kt)("p",null,"3.\u5c06\u6a21\u578b\u4ece Project \u7a97\u53e3\u62d6\u5165\u7a7a\u573a\u666f\u4e2d\u3002"),(0,r.kt)("p",null,"4.\u901a\u8fc7\u9009\u4e2d\u6240\u6709\u90e8\u4ef6\u5e76\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Component ",">"," Physics ",">"," Rigidbody")," \uff0c\u5c06\u521a\u4f53\u6dfb\u52a0\u5230\u6240\u6709\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"5.\u901a\u8fc7\u9009\u4e2d\u6240\u6709\u90e8\u4ef6\u5e76\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Component ",">"," Physics ",">"," Mesh Collider")," \uff08\u542f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Convex"),"  \u9009\u9879\u4ee5\u83b7\u5f97\u66f4\u5feb\u7684\u6027\u80fd\uff09\uff0c\u5c06\u78b0\u649e\u4f53\u6dfb\u52a0\u5230\u6240\u6709\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"6.\u786e\u4fdd\u5c06\u6b8b\u9ab8\u673a\u5668\u4eba\u7684\u6240\u6709\u90e8\u4ef6\u8bbe\u4e3a\u5355\u4e2a\u6839\u6e38\u620f\u5bf9\u8c61\u7684\u5b50\u4ee3\u3002"),(0,r.kt)("p",null,"7.\u8981\u83b7\u5f97\u989d\u5916\u7684\u7279\u6b8a\u6548\u679c\uff0c\u8bf7\u5c06\u7c7b\u4f3c\u70df\u96fe\u7684\u7c92\u5b50\u7cfb\u7edf\u6dfb\u52a0\u4e3a\u6bcf\u4e2a\u90e8\u4ef6\u7684\u5b50\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"8.\u73b0\u5728\u83b7\u5f97\u4e86\u4e00\u4e2a\u5177\u6709\u591a\u4e2a\u53ef\u7206\u70b8\u90e8\u4ef6\u7684\u673a\u5668\u4eba\u3002\u8fd9\u4e9b\u90e8\u4ef6\u53ef\u80fd\u4f1a\u6389\u843d\u5230\u5730\u9762\uff0c\u56e0\u4e3a\u5b83\u4eec\u53d7\u7269\u7406\u539f\u7406\u63a7\u5236\uff0c\u5e76\u4e14\u6bcf\u4e2a\u90e8\u4ef6\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7c92\u5b50\u8f68\u8ff9\uff08\u7531\u4e8e\u9644\u52a0\u4e86\u7c92\u5b50\u7cfb\u7edf\uff09\u3002"),(0,r.kt)("p",null,"9.\u5355\u51fb Play \u6765\u9884\u89c8\u6a21\u578b\u7684\u53cd\u5e94\u5e76\u8fdb\u884c\u4efb\u4f55\u5fc5\u8981\u7684\u8c03\u6574\u3002"),(0,r.kt)("p",null,"10.\u5c06\u6839\u6e38\u620f\u5bf9\u8c61\u62d6\u52a8\u5230  ",(0,r.kt)("strong",{parentName:"p"},"Project \u7a97\u53e3")," \u7684  ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"  \u6587\u4ef6\u5939\u5185\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u9884\u5236\u4ef6\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u5bf9\u4e0a\u8ff0\u6b65\u9aa4\u5efa\u6a21\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"using UnityEngine;\npublic class WreckOnCollision : MonoBehaviour\n{\n   public GameObject wreckedVersion;\n   // \u6bcf\u5e27\u8c03\u7528\u4e00\u6b21 Update\n   void OnCollisionEnter()\n   {\n       Destroy(gameObject);\n       Instantiate(wreckedVersion,transform.position,transform.rotation);\n   }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabWreckSwap.gif",alt:"\u6b64\u793a\u4f8b\u6f14\u793a\u4e86\u5f53\u673a\u5668\u4eba\u9884\u5236\u4ef6\u88ab\u98de\u5f39\u51fb\u4e2d\u65f6\u88ab\u66ff\u6362\u4e3a\u6b8b\u9ab8\u9884\u5236\u4ef6"}))),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u6f14\u793a\u4e86\u5f53\u673a\u5668\u4eba\u9884\u5236\u4ef6\u88ab\u98de\u5f39\u51fb\u4e2d\u65f6\u88ab\u66ff\u6362\u4e3a\u6b8b\u9ab8\u9884\u5236\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece\u6b64\u5904\u4e0b\u8f7d\u5305\u542b\u4e0a\u8ff0\u6240\u6709\u793a\u4f8b\u7684\u9879\u76ee\uff1a  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",a({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/InstantiatingPrefabsExamples.zip"}),"InstantiatingPrefabsExamples.zip"))," "))}k.isMDXComponent=!0}}]);