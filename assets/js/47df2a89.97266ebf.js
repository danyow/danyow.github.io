"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14955],{35318:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58310:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});a(27378);var n=a(35318);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"Tilemap",slug:"/unity2d/class-tilemap/class-tilemap"},p="Tilemap",o={unversionedId:"unity/unity2d/class-tilemap/Tilemap",id:"version-Unity@2022.1/unity/unity2d/class-tilemap/Tilemap",title:"Tilemap",description:"The  Tilemap  component is a system which stores and handles Tile Assets for creating 2D levels. It transfers the required information from the Tiles placed on it to other related components such as the Tilemap Renderer and the Tilemap Collider 2D. This package is not included in the Unity Editor default installation by default, and you will need to download the  2D Tilemap Editor  package via the Package Manager.",source:"@site/versioned_docs/version-Unity@2022.1/unity/unity2d/class-tilemap/class-tilemap.md",sourceDirName:"unity/unity2d/class-tilemap",slug:"/unity2d/class-tilemap/class-tilemap",permalink:"/docs/unity2d/class-tilemap/class-tilemap",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Tilemap",slug:"/unity2d/class-tilemap/class-tilemap"},sidebar:"unity",previous:{title:"2D \u6392\u5e8f",permalink:"/docs/unity2d/2dsorting"},next:{title:"Grid",permalink:"/docs/unity2d/class-tilemap/class-grid"}},s={},m=[{value:"GitHub \u4e2d\u7684 2D Extras",id:"github-\u4e2d\u7684-2d-extras",level:2}],d={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"tilemap"}),"Tilemap"),(0,n.kt)("p",null,"The  ",(0,n.kt)("strong",{parentName:"p"},"Tilemap"),"  component is a system which stores and handles ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-tile-asset"}),"Tile Assets")," for creating 2D levels. It transfers the required information from the Tiles placed on it to other related components such as the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/class-tilemap-renderer"}),"Tilemap Renderer")," and the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-workflow/class-tilemap-collider2d"}),"Tilemap Collider 2D"),". This package is not included in the Unity Editor default installation by default, and you will need to download the  ",(0,n.kt)("strong",{parentName:"p"},"2D Tilemap Editor"),"  package via the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/Documentation/Manual/Packages.html"}),"Package Manager"),"."),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-workflow/tilemap-creating-tilemaps"}),"\u521b\u5efa\u74e6\u7247\u5730\u56fe"),"\u65f6\uff0c",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/class-grid"}),"Grid")," \u7ec4\u4ef6\u81ea\u52a8\u4f5c\u4e3a\u74e6\u7247\u5730\u56fe\u7684\u7236\u7ea7\uff0c\u5e76\u5728\u5c06\u74e6\u7247\u5e03\u7f6e\u5230\u74e6\u7247\u5730\u56fe\u4e0a\u65f6\u4f5c\u4e3a\u53c2\u7167\u3002"),(0,n.kt)("p",null,"\u8981\u521b\u5efa\u3001\u4fee\u6539\u548c\u9009\u62e9\u8981\u7ed8\u5236\u5230\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u74e6\u7247\uff0c\u8bf7\u4f7f\u7528 ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-workflow/tilemap-palette"}),"Tile Palette"),"\uff08\u83dc\u5355\uff1a ",(0,n.kt)("strong",{parentName:"p"},"Window ",">"," 2D ",">"," Tile Palette")," \uff09\u53ca\u5176\u5de5\u5177\u3002\u8bf7\u53c2\u9605\u6709\u5173 Tile Palette \u548c",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-workflow/tilemap-painting/tilemap-painting"}),"\u7ed8\u5236\u74e6\u7247\u5730\u56fe"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/tilemap-properties-2021.1.png",alt:"Tilemap property window."}))),(0,n.kt)("p",null,"Tilemap property window."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u529f\u80fd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Animation Frame Rate")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u64ad\u653e\u74e6\u7247\u52a8\u753b\u7684\u901f\u7387\u3002\u589e\u52a0\u6216\u51cf\u5c11\u6b64\u503c\u4f1a\u6839\u636e\u7b49\u6548\u56e0\u5b50\u66f4\u6539\u901f\u5ea6\uff08\u4f8b\u5982\uff0c\u5982\u679c\u5c06\u6b64\u503c\u8bbe\u7f6e\u4e3a 2\uff0cUnity \u5c06\u4ee5\u4e24\u500d\u901f\u5ea6\u64ad\u653e\u74e6\u7247\u52a8\u753b\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Color")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u4e00\u79cd\u989c\u8272\u5e94\u7528\u4e3a\u6b64\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u74e6\u7247\u7684\u8272\u8c03\u3002\u8bbe\u7f6e\u4e3a\u767d\u8272\uff08\u9ed8\u8ba4\u989c\u8272\uff09\u53ef\u4f7f Unity \u4e0d\u5e26\u8272\u8c03\u5730\u6e32\u67d3\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Tile Anchor")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8f93\u5165\u74e6\u7247\u5730\u56fe\u4e0a\u6cbf XYZ \u8f74\u504f\u79fb\u74e6\u7247\u951a\u70b9\u4f4d\u7f6e\u7684\u6570\u91cf\uff08\u4ee5\u5355\u5143\u683c\u4e3a\u5355\u4f4d\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Orientation")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u74e6\u7247\u5730\u56fe\u4e0a\u74e6\u7247\u7684\u65b9\u5411\u3002\u5982\u679c\u9700\u8981\u5728\u7279\u5b9a\u5e73\u9762\u5b9a\u4f4d\u74e6\u7247\uff0c\u8bf7\u4f7f\u7528\u6b64\u5c5e\u6027\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0XY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 XY \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0XZ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 XZ \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0YX"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 YX \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0YZ"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 YZ \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0ZX"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 ZX \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0ZY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u5728 ZY \u5e73\u9762\u4e0a\u5b9a\u4f4d\u74e6\u7247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0Custom"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u6b64\u9009\u9879\u53ef\u542f\u7528\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u65b9\u5411\u8bbe\u7f6e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Position")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u65b9\u5411\u7684\u4f4d\u7f6e\u504f\u79fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528\u6b64\u9009\u9879\uff0c\u5728 Tilemap \u7684\u65b9\u5411\u8bbe\u7f6e\u4e3a Custom \u65f6\u542f\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Rotation")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u65b9\u5411\u7684\u65cb\u8f6c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528\u6b64\u9009\u9879\uff0c\u5728 Tilemap \u7684\u65b9\u5411\u8bbe\u7f6e\u4e3a Custom \u65f6\u542f\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Scale")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u65b9\u5411\u7684\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528\u6b64\u9009\u9879\uff0c\u5728 Tilemap \u7684\u65b9\u5411\u8bbe\u7f6e\u4e3a Custom \u65f6\u542f\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Info")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expand this to show the Assets used in the Tilemap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0Tiles"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Shows a list of Tile Assets used in the Tilemap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0Sprites"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Shows a list of Sprites used in the Tilemap.")))),(0,n.kt)("h2",r({},{id:"github-\u4e2d\u7684-2d-extras"}),"GitHub \u4e2d\u7684 2D Extras"),(0,n.kt)("p",null,"\u53ef\u4ece ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/Unity-Technologies/2d-extras"}),"2D Extra")," GitHub \u4ee3\u7801\u4ed3\u5e93\u4e0b\u8f7d\u811a\u672c\u5316",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-scriptable-tiles/tilemap-scriptable-tiles"}),"\u74e6\u7247"),"\u548c",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes"}),"\u753b\u7b14"),"\u7684\u793a\u4f8b\u3002\u53ef\u4ece ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/Unity-Technologies/2d-techdemos#2d-techdemos"}),"2D Techdemos")," Github \u4ee3\u7801\u4ed3\u5e93\u83b7\u53d6\u5305\u542b\u8fd9\u4e9b\u811a\u672c\u5316\u6e38\u620f\u5bf9\u8c61\u7684\u793a\u4f8b\u9879\u76ee\u3002\u6709\u5173\u4e0d\u540c\u811a\u672c\u548c\u7528\u6cd5\u4fe1\u606f\u7684\u63cf\u8ff0\uff0c\u8bf7\u53c2\u9605\u6bcf\u4e2a\u4ee3\u7801\u4ed3\u5e93\u7684 README.md\u3002"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Page content and screenshot updated for ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2021.1/Documentation/Manual/30_search.html?q=newin20201"}),"2021.1")," NewIn20211 ","*","\u9875\u9762\u5185\u5bb9\u548c\u5c4f\u5e55\u622a\u56fe\u66f4\u65b0\u4e8e ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201"}),"2020.1")," NewIn20201"),(0,n.kt)("li",{parentName:"ul"},"2D Tilemap Editor \u4e0d\u518d\u968f Editor \u5b89\u88c5\u8fc7\u7a0b\u4e00\u8d77\u5b89\u88c5\uff0c\u800c\u662f\u5fc5\u987b\u4ece Package Manager \u4e0b\u8f7d\u3002",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2019.2/Documentation/Manual/30_search.html?q=newin20183"}),"2019.2")," NewIn20192"),(0,n.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2018.2/Documentation/Manual/30_search.html?q=newin20183"}),"2018.3")," \u4e2d\u6dfb\u52a0\u4e86\u7b49\u8ddd\u74e6\u7247\u5730\u56fe (Isometric Tilemap) \u529f\u80fd NewIn20183"),(0,n.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2018.2/Documentation/Manual/30_search.html?q=newin20182"}),"2018.2")," \u4e2d\u6dfb\u52a0\u4e86\u516d\u8fb9\u5f62\u74e6\u7247\u5730\u56fe (Hexagonal Tilemap) \u529f\u80fd NewIn20182"),(0,n.kt)("li",{parentName:"ul"},"\u5728 ",(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2017.2/Documentation/Manual/30_search.html?q=newin20172"}),"2017.2")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u74e6\u7247\u5730\u56fe NewIn20172")))}u.isMDXComponent=!0}}]);