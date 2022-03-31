"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32544],{35318:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return d}});var r=e(27378);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),l=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(s.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(e),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return e?r.createElement(f,i(i({ref:n},p),{},{components:e})):r.createElement(f,i({ref:n},p))}));function d(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var o=e.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=e[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},40682:function(t,n,e){e.r(n),e.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});e(27378);var r=e(35318);function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a.apply(this,arguments)}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}const i={id:"\u5b50\u72b6\u6001\u673a",slug:"/animation-section/animator-controllers/animation-state-machines/nested-state-machines"},c="\u5b50\u72b6\u6001\u673a",s={unversionedId:"unity/animation-section/animator-controllers/animation-state-machines/\u5b50\u72b6\u6001\u673a",id:"version-Unity@2022.1/unity/animation-section/animator-controllers/animation-state-machines/\u5b50\u72b6\u6001\u673a",title:"\u5b50\u72b6\u6001\u673a",description:"\u89d2\u8272\u901a\u5e38\u5177\u6709\u5305\u542b\u82e5\u5e72\u9636\u6bb5\u7684\u590d\u6742\u52a8\u4f5c\u3002\u5408\u7406\u7684\u505a\u6cd5\u662f\u8bc6\u522b\u5355\u72ec\u9636\u6bb5\u5e76\u5c06\u5355\u72ec\u72b6\u6001\u7528\u4e8e\u6bcf\u4e2a\u9636\u6bb5\uff0c\u800c\u4e0d\u662f\u7528\u5355\u4e2a\u72b6\u6001\u6765\u5904\u7406\u6574\u4e2a\u52a8\u4f5c\u3002\u4f8b\u5982\uff0c\u89d2\u8272\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a\u540d\u4e3a\u201cTrickshot\u201d\uff08\u82b1\u5f0f\u5c04\u51fb\uff09\u7684\u52a8\u4f5c\uff1b\u5728\u6b64\u52a8\u4f5c\u4e2d\uff0c\u89d2\u8272\u4f1a\u8e72\u4e0b\u6765\u7a33\u5b9a\u7784\u51c6\uff0c\u5c04\u51fb\uff0c\u7136\u540e\u518d\u7ad9\u8d77\u6765\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/animation-section/animator-controllers/animation-state-machines/nested-state-machines.md",sourceDirName:"unity/animation-section/animator-controllers/animation-state-machines",slug:"/animation-section/animator-controllers/animation-state-machines/nested-state-machines",permalink:"/docs/animation-section/animator-controllers/animation-state-machines/nested-state-machines",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u5b50\u72b6\u6001\u673a",slug:"/animation-section/animator-controllers/animation-state-machines/nested-state-machines"},sidebar:"unity",previous:{title:"\u53cd\u5411\u52a8\u529b\u5b66",permalink:"/docs/animation-section/animator-controllers/animation-state-machines/inverse-kinematics"},next:{title:"\u6839\u8fd0\u52a8 - \u5de5\u4f5c\u539f\u7406",permalink:"/docs/animation-section/animator-controllers/animation-state-machines/root-motion/root-motion"}},l={},p=[{value:"\u5916\u90e8\u8fc7\u6e21",id:"\u5916\u90e8\u8fc7\u6e21",level:2}],u={toc:p};function m(t){var{components:n}=t,e=o(t,["components"]);return(0,r.kt)("wrapper",a({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u5b50\u72b6\u6001\u673a"}),"\u5b50\u72b6\u6001\u673a"),(0,r.kt)("p",null,"\u89d2\u8272\u901a\u5e38\u5177\u6709\u5305\u542b\u82e5\u5e72\u9636\u6bb5\u7684\u590d\u6742\u52a8\u4f5c\u3002\u5408\u7406\u7684\u505a\u6cd5\u662f\u8bc6\u522b\u5355\u72ec\u9636\u6bb5\u5e76\u5c06\u5355\u72ec\u72b6\u6001\u7528\u4e8e\u6bcf\u4e2a\u9636\u6bb5\uff0c\u800c\u4e0d\u662f\u7528\u5355\u4e2a\u72b6\u6001\u6765\u5904\u7406\u6574\u4e2a\u52a8\u4f5c\u3002\u4f8b\u5982\uff0c\u89d2\u8272\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a\u540d\u4e3a\u201cTrickshot\u201d\uff08\u82b1\u5f0f\u5c04\u51fb\uff09\u7684\u52a8\u4f5c\uff1b\u5728\u6b64\u52a8\u4f5c\u4e2d\uff0c\u89d2\u8272\u4f1a\u8e72\u4e0b\u6765\u7a33\u5b9a\u7784\u51c6\uff0c\u5c04\u51fb\uff0c\u7136\u540e\u518d\u7ad9\u8d77\u6765\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimStateExcerpt.png",alt:"Trickshot\u52a8\u4f5c\u4e2d\u7684\u72b6\u6001\u5e8f\u5217"}))),(0,r.kt)("p",null,"\u201cTrickshot\u201d\u52a8\u4f5c\u4e2d\u7684\u72b6\u6001\u5e8f\u5217"),(0,r.kt)("p",null,"\u867d\u7136\u8fd9\u5bf9\u4e8e\u63a7\u5236\u76ee\u7684\u5f88\u6709\u7528\uff0c\u4f46\u7f3a\u70b9\u662f\u968f\u7740\u6dfb\u52a0\u66f4\u591a\u7684\u6b64\u7c7b\u590d\u6742\u52a8\u4f5c\uff0c\u72b6\u6001\u673a\u5c06\u53d8\u5f97\u5e9e\u5927\u800c\u7b28\u62d9\u3002\u5728\u7f16\u8f91\u5668\u4e2d\u7528\u7a7a\u767d\u7a7a\u95f4\u5728\u89c6\u89c9\u4e0a\u5bf9\u72b6\u6001\u7ec4\u8fdb\u884c\u5206\u9694\uff0c\u53ef\u7565\u5fae\u5316\u7b80\u4e00\u4e0b\u3002\u4f46\u662f\uff0cMecanim \u6bd4\u8fd9\u66f4\u8fdb\u4e00\u6b65\uff0c\u5141\u8bb8\u60a8\u5c06\u4e00\u7ec4\u72b6\u6001\u6298\u53e0\u4e3a\u72b6\u6001\u673a\u56fe\u4e2d\u7684\u5355\u4e2a\u6307\u5b9a\u9879\u3002\u8fd9\u4e9b\u6298\u53e0\u7684\u72b6\u6001\u7ec4\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u72b6\u6001\u673a")," \u3002"),(0,r.kt)("p",null,"\u82e5\u8981\u521b\u5efa\u5b50\u72b6\u6001\u673a\uff0c\u53ef\u53f3\u952e\u5355\u51fb  ",(0,r.kt)("strong",{parentName:"p"},"Animator Controller"),"  \u7a97\u53e3\u4e2d\u7684\u7a7a\u767d\u7a7a\u95f4\uff0c\u5e76\u4ece\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Create Sub-State Machine")," \u3002\u5b50\u72b6\u6001\u673a\u5728\u7f16\u8f91\u5668\u4e2d\u7528\u7ec6\u957f\u516d\u8fb9\u5f62\u8868\u793a\u4ee5\u533a\u522b\u4e8e\u6b63\u5e38\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimSubStateMachine.png",alt:"\u5b50\u72b6\u6001\u673a"}))),(0,r.kt)("p",null,"\u5b50\u72b6\u6001\u673a"),(0,r.kt)("p",null,"\u53cc\u51fb\u516d\u8fb9\u5f62\u65f6\u5c06\u6e05\u7406\u7f16\u8f91\u5668\uff0c\u8ba9\u60a8\u7f16\u8f91\u5b50\u72b6\u6001\u673a\uff0c\u597d\u50cf\u5b83\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u5b8c\u5168\u72ec\u7acb\u7684\u72b6\u6001\u673a\u3002\u7a97\u53e3\u9876\u680f\u4f1a\u663e\u793a\u201c\u793a\u8e2a\u5bfc\u822a\u8def\u5f84\u201d\u4ee5\u6307\u793a\u5f53\u524d\u6b63\u5728\u7f16\u8f91\u7684\u5b50\u72b6\u6001\u673a\uff08\u6ce8\u610f\uff0c\u53ef\u5728\u5176\u4ed6\u5b50\u72b6\u6001\u673a\u5185\u521b\u5efa\u5b50\u72b6\u6001\u673a\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff09\u3002\u5355\u51fb\u8ddf\u8e2a\u8def\u5f84\u4e2d\u7684\u67d0\u9879\u5c06\u4f7f\u7f16\u8f91\u5668\u805a\u7126\u4e8e\u8be5\u7279\u5b9a\u5b50\u72b6\u6001\u673a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimStateMachineCrumbs.png",alt:"\u793a\u8e2a\u5bfc\u822a\u8def\u5f84"}))),(0,r.kt)("p",null,"\u201c\u793a\u8e2a\u5bfc\u822a\u8def\u5f84\u201d"),(0,r.kt)("h2",a({},{id:"\u5916\u90e8\u8fc7\u6e21"}),"\u5916\u90e8\u8fc7\u6e21"),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u5b50\u72b6\u6001\u673a\u53ea\u662f\u4e00\u79cd\u5728\u7f16\u8f91\u5668\u4e2d\u76f4\u89c2\u5730\u6298\u53e0\u4e00\u7ec4\u72b6\u6001\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u5728\u8fc7\u6e21\u5230\u5b50\u72b6\u6001\u673a\u65f6\uff0c\u5fc5\u987b\u9009\u62e9\u8981\u8fde\u63a5\u5230\u5b50\u72b6\u6001\u673a\u7684\u54ea\u4e2a\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimSelectSubState.png",alt:"\u5728Trickshot\u5b50\u72b6\u6001\u673a\u5185\u9009\u62e9\u76ee\u6807\u72b6\u6001"}))),(0,r.kt)("p",null,"\u5728\u201cTrickshot\u201d\u5b50\u72b6\u6001\u673a\u5185\u9009\u62e9\u76ee\u6807\u72b6\u6001"),(0,r.kt)("p",null,"\u60a8\u5c06\u6ce8\u610f\u5230\u5b50\u72b6\u6001\u673a\u4e2d\u6709\u4e00\u4e2a\u540d\u79f0\u4ee5 ",(0,r.kt)("em",{parentName:"p"},"Up")," \u5f00\u5934\u7684\u989d\u5916\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimSubStateUp.png",alt:"Up\u72b6\u6001"}))),(0,r.kt)("p",null,"\u201cUp\u201d\u72b6\u6001"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Up")," \u72b6\u6001\u8868\u793a\u201c\u5916\u90e8\u4e16\u754c\u201d\uff0c\u8fd9\u662f\u5728\u89c6\u56fe\u4e2d\u5305\u542b\u5b50\u72b6\u6001\u673a\u7684\u72b6\u6001\u673a\u3002\u5982\u679c\u6dfb\u52a0\u4ece\u5b50\u72b6\u6001\u673a\u4e2d\u7684\u72b6\u6001\u5230 ",(0,r.kt)("em",{parentName:"p"},"Up")," \u72b6\u6001\u7684\u8fc7\u6e21\uff0c\u7cfb\u7edf\u5c06\u63d0\u793a\u60a8\u9009\u62e9\u8981\u8fde\u63a5\u5230\u95ed\u5305\u72b6\u6001\u673a\u7684\u54ea\u4e2a\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimSubStateExternal.png",alt:"\u8fde\u63a5\u5230\u95ed\u5305\u72b6\u6001\u673a\u4e2d\u7684\u72b6\u6001"}))),(0,r.kt)("p",null,"\u8fde\u63a5\u5230\u95ed\u5305\u72b6\u6001\u673a\u4e2d\u7684\u72b6\u6001"))}m.isMDXComponent=!0}}]);