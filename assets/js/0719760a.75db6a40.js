"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61257],{35318:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return g}});var l=e(27378);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,l)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,l,r=function(n,t){if(null==n)return{};var e,l,r={},o=Object.keys(n);for(l=0;l<o.length;l++)e=o[l],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(l=0;l<o.length;l++)e=o[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=l.createContext({}),p=function(n){var t=l.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},u=function(n){var t=p(n.components);return l.createElement(c.Provider,{value:t},n.children)},s={inlineCode:"code",wrapper:function(n){var t=n.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(n,t){var e=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),d=p(e),g=r,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return e?l.createElement(m,i(i({ref:t},u),{},{components:e})):l.createElement(m,i({ref:t},u))}));function g(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var o=e.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var p=2;p<o;p++)i[p]=e[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}d.displayName="MDXCreateElement"},27461:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});e(27378);var l=e(35318);function r(){return r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l])}return n},r.apply(this,arguments)}function o(n,t){if(null==n)return{};var e,l,r=function(n,t){if(null==n)return{};var e,l,r={},o=Object.keys(n);for(l=0;l<o.length;l++)e=o[l],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(l=0;l<o.length;l++)e=o[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}const i={id:"\u63a7\u4ef6",slug:"/uitoolkits/guiscripting-guide/gui-controls"},a="\u63a7\u4ef6",c={unversionedId:"unity/uitoolkits/guiscripting-guide/\u63a7\u4ef6",id:"version-Unity@2022.1/unity/uitoolkits/guiscripting-guide/\u63a7\u4ef6",title:"\u63a7\u4ef6",description:"IMGUI \u63a7\u4ef6\u7c7b\u578b",source:"@site/versioned_docs/version-Unity@2022.1/unity/uitoolkits/guiscripting-guide/gui-controls.md",sourceDirName:"unity/uitoolkits/guiscripting-guide",slug:"/uitoolkits/guiscripting-guide/gui-controls",permalink:"/docs/uitoolkits/guiscripting-guide/gui-controls",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u63a7\u4ef6",slug:"/uitoolkits/guiscripting-guide/gui-controls"},sidebar:"unity",previous:{title:"IMGUI \u57fa\u7840\u77e5\u8bc6",permalink:"/docs/uitoolkits/guiscripting-guide/gui-basics"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/docs/uitoolkits/guiscripting-guide/gui-customization"}},p={},u=[{value:"IMGUI \u63a7\u4ef6\u7c7b\u578b",id:"imgui-\u63a7\u4ef6\u7c7b\u578b",level:2},{value:"Label",id:"label",level:3},{value:"Button",id:"button",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:4},{value:"RepeatButton",id:"repeatbutton",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-1",level:4},{value:"TextField",id:"textfield",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-2",level:4},{value:"TextArea",id:"textarea",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-3",level:4},{value:"Toggle",id:"toggle",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-4",level:4},{value:"Toolbar",id:"toolbar",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-5",level:4},{value:"SelectionGrid",id:"selectiongrid",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-6",level:4},{value:"HorizontalSlider",id:"horizontalslider",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-7",level:4},{value:"VerticalSlider",id:"verticalslider",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-8",level:4},{value:"HorizontalScrollbar",id:"horizontalscrollbar",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-9",level:4},{value:"VerticalScrollbar",id:"verticalscrollbar",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-10",level:4},{value:"ScrollView",id:"scrollview",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-11",level:4},{value:"Window",id:"window",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5-12",level:4},{value:"GUI.changed",id:"guichanged",level:3}],s={toc:u};function d(n){var{components:t}=n,e=o(n,["components"]);return(0,l.kt)("wrapper",r({},s,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",r({},{id:"\u63a7\u4ef6"}),"\u63a7\u4ef6"),(0,l.kt)("h2",r({},{id:"imgui-\u63a7\u4ef6\u7c7b\u578b"}),"IMGUI \u63a7\u4ef6\u7c7b\u578b"),(0,l.kt)("p",null,"\u53ef\u4ee5\u521b\u5efa\u8bb8\u591a\u4e0d\u540c\u7684 IMGUI  ",(0,l.kt)("strong",{parentName:"p"},"\u63a7\u4ef6")," \u3002\u672c\u90e8\u5206\u5217\u51fa\u4e86\u6240\u6709\u53ef\u7528\u7684\u663e\u793a\u63a7\u4ef6\u548c\u4ea4\u4e92\u5f0f\u63a7\u4ef6\u3002\u6b64\u5916\u8fd8\u6709\u5176\u4ed6\u5f71\u54cd\u63a7\u4ef6\u5e03\u5c40\u7684 IMGUI \u51fd\u6570\uff1b\u5728\u672c\u6307\u5357\u7684",(0,l.kt)("a",r({parentName:"p"},{href:"/docs/uitoolkits/guiscripting-guide/gui-layout"}),"\u5e03\u5c40"),"\u90e8\u5206\u4ecb\u7ecd\u4e86\u8fd9\u4e9b\u51fd\u6570\u3002"),(0,l.kt)("h3",r({},{id:"label"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.Label.html"}),"Label")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Label"),"  \u4e3a\u975e\u4ea4\u4e92\u5f0f\u63a7\u4ef6\u3002\u6b64\u63a7\u4ef6\u4ec5\u7528\u4e8e\u663e\u793a\u76ee\u7684\u3002\u4e0d\u80fd\u5355\u51fb\uff0c\u4e5f\u4e0d\u80fd\u4ee5\u5176\u4ed6\u65b9\u5f0f\u8fdb\u884c\u79fb\u52a8\u3002\u6b64\u63a7\u4ef6\u6700\u9002\u5408\u4e8e\u7eaf\u7cb9\u663e\u793a\u4fe1\u606f\u4e4b\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.Label \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    void OnGUI () \n    {\n        GUI.Label (new Rect (25, 25, 100, 30), "Label");\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-LabelExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Label"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Label"),(0,l.kt)("h3",r({},{id:"button"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.Button.html"}),"Button")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Button"),"  \u662f\u5178\u578b\u7684\u4ea4\u4e92\u5f0f\u6309\u94ae\u3002\u70b9\u51fb\u6309\u94ae\u65f6\uff0c\u65e0\u8bba\u9f20\u6807\u6309\u4e0b\u591a\u4e45\uff0c\u90fd\u53ea\u4f1a\u54cd\u5e94\u4e00\u6b21\u3002\u677e\u5f00\u9f20\u6807\u6309\u952e\u540e\u4f1a\u7acb\u5373\u54cd\u5e94\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"\u5728 UnityGUI \u4e2d\uff0c\u70b9\u51fb Button \u65f6\u5c06\u8fd4\u56de  ",(0,l.kt)("strong",{parentName:"p"},"true")," \u3002\u8981\u5728\u70b9\u51fb Button \u65f6\u6267\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u5e94\u5c06 GUI.Button \u51fd\u6570\u5305\u88f9\u5728  ",(0,l.kt)("strong",{parentName:"p"},"if"),"  \u8bed\u53e5\u4e2d\u3002 ",(0,l.kt)("strong",{parentName:"p"},"if"),"  \u8bed\u53e5\u5185\u90e8\u662f\u70b9\u51fb Button \u65f6\u5c06\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.Button \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    void OnGUI () \n    {\n        if (GUI.Button (new Rect (25, 25, 100, 30), "Button")) \n        {\n            // \u70b9\u51fb Button \u65f6\u6267\u884c\u6b64\u4ee3\u7801\n        }\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-ButtonExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Button"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Button"),(0,l.kt)("h3",r({},{id:"repeatbutton"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.RepeatButton.html"}),"RepeatButton")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"RepeatButton"),"  \u662f\u5e38\u89c4  ",(0,l.kt)("strong",{parentName:"p"},"Button"),"  \u7684\u53d8\u4f53\u3002\u533a\u522b\u5728\u4e8e\uff0c ",(0,l.kt)("strong",{parentName:"p"},"RepeatButton"),"  \u5c06\u54cd\u5e94\u9f20\u6807\u6309\u952e\u4fdd\u6301\u6309\u4e0b\u72b6\u6001\u7684\u6bcf\u4e00\u5e27\u3002\u7531\u6b64\u53ef\u4ee5\u521b\u5efa\u5355\u51fb\u5e76\u4fdd\u6301\u529f\u80fd\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-1"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"\u5728 UnityGUI \u4e2d\uff0c\u70b9\u51fb RepeatButton \u7684\u6bcf\u4e00\u5e27\u90fd\u5c06\u8fd4\u56de  ",(0,l.kt)("strong",{parentName:"p"},"true")," \u3002\u8981\u5728 Button \u4fdd\u6301\u70b9\u51fb\u72b6\u6001\u65f6\u6267\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u5e94\u5c06 GUI.RepeatButton \u51fd\u6570\u5305\u88f9\u5728  ",(0,l.kt)("strong",{parentName:"p"},"if"),"  \u8bed\u53e5\u4e2d\u3002 ",(0,l.kt)("strong",{parentName:"p"},"if"),"  \u8bed\u53e5\u5185\u90e8\u662f RepeatButton \u4fdd\u6301\u70b9\u51fb\u72b6\u6001\u65f6\u5c06\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.RepeatButton \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    void OnGUI () \n    {\n        if (GUI.RepeatButton (new Rect (25, 25, 100, 30), "RepeatButton")) \n        {\n            // RepeatButton \u4fdd\u6301\u70b9\u51fb\u72b6\u6001\u65f6\u7684\u6bcf\u4e00\u5e27\u90fd\u5c06\u6267\u884c\u6b64\u4ee3\u7801\n        }\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-RepeatButtonExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Repeat Button"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Repeat Button"),(0,l.kt)("h3",r({},{id:"textfield"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.TextField.html"}),"TextField")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"TextField"),"  \u63a7\u4ef6\u662f\u4e00\u4e2a\u5305\u542b\u6587\u672c\u5b57\u7b26\u4e32\u7684\u4ea4\u4e92\u5f0f\u53ef\u7f16\u8f91\u5355\u884c\u5b57\u6bb5\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-2"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"TextField \u5c06\u59cb\u7ec8\u663e\u793a\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u5fc5\u987b\u63d0\u4f9b\u8981\u5728 TextField \u4e2d\u663e\u793a\u7684\u5b57\u7b26\u4e32\u3002\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u8f91\u65f6\uff0cTextField \u51fd\u6570\u5c06\u8fd4\u56de\u5df2\u7f16\u8f91\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.TextField \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private string textFieldString = "text field";\n    \n    void OnGUI () \n    {\n        textFieldString = GUI.TextField (new Rect (25, 25, 100, 30), textFieldString);\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-TextFieldExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 TextField"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 TextField"),(0,l.kt)("h3",r({},{id:"textarea"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.TextArea.html"}),"TextArea")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"TextArea"),"  \u63a7\u4ef6\u662f\u4e00\u4e2a\u5305\u542b\u6587\u672c\u5b57\u7b26\u4e32\u7684\u4ea4\u4e92\u5f0f\u53ef\u7f16\u8f91\u591a\u884c\u533a\u57df\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-3"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"TextArea \u5c06\u59cb\u7ec8\u663e\u793a\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u5fc5\u987b\u63d0\u4f9b\u8981\u5728 TextArea \u4e2d\u663e\u793a\u7684\u5b57\u7b26\u4e32\u3002\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u8f91\u65f6\uff0cTextArea \u51fd\u6570\u5c06\u8fd4\u56de\u5df2\u7f16\u8f91\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.TextArea \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour\n{\n                    \n    private string textAreaString = "text area";\n    \n    void OnGUI ()\n    {\n        textAreaString = GUI.TextArea (new Rect (25, 25, 100, 30), textAreaString);\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-TextAreaExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 TextArea"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 TextArea"),(0,l.kt)("h3",r({},{id:"toggle"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.Toggle.html"}),"Toggle")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Toggle"),"  \u63a7\u4ef6\u521b\u5efa\u5177\u6709\u6301\u4e45\u5f00/\u5173\u72b6\u6001\u7684\u590d\u9009\u6846\u3002\u7528\u6237\u53ef\u901a\u8fc7\u70b9\u51fb\u8be5\u590d\u9009\u6846\u6765\u66f4\u6539\u72b6\u6001\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-4"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Toggle \u5f00/\u5173\u72b6\u6001\u7531 true/false \u5e03\u5c14\u503c\u8868\u793a\u3002\u5fc5\u987b\u63d0\u4f9b\u5e03\u5c14\u503c\u4f5c\u4e3a\u53c2\u6570\u6765\u4f7f Toggle \u8868\u793a\u5b9e\u9645\u72b6\u6001\u3002\u5982\u679c\u70b9\u51fb\uff0c\u5219 Toggle \u51fd\u6570\u5c06\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5e03\u5c14\u503c\u3002\u4e3a\u4e86\u6355\u83b7\u6b64\u4ea4\u4e92\u6027\uff0c\u5fc5\u987b\u6307\u5b9a\u5e03\u5c14\u503c\u6765\u63a5\u53d7 Toggle \u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.Toggle \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n    private bool toggleBool = true;\n    \n    void OnGUI () \n    {\n        toggleBool = GUI.Toggle (new Rect (25, 25, 100, 30), toggleBool, "Toggle");\n    }\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-ToggleExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Toggle"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Toggle"),(0,l.kt)("h3",r({},{id:"toolbar"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.Toolbar.html"}),"Toolbar")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Toolbar"),"  \u63a7\u4ef6\u672c\u8d28\u4e0a\u662f\u4e00\u884c  ",(0,l.kt)("strong",{parentName:"p"},"Button")," \u3002\u5728 Toolbar \u4e0a\uff0c\u4e00\u6b21\u53ea\u80fd\u6709\u4e00\u4e2a Button \u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff0c\u5e76\u4e14\u6b64 Button \u5c06\u4e00\u76f4\u4fdd\u6301\u6fc0\u6d3b\u72b6\u6001\uff0c\u76f4\u5230\u70b9\u51fb\u5176\u4ed6 Button\u3002\u6b64\u884c\u4e3a\u6a21\u62df\u5178\u578b Toolbar \u7684\u884c\u4e3a\u3002\u5728 Toolbar \u4e0a\u53ef\u4ee5\u5b9a\u4e49\u4efb\u610f\u6570\u91cf\u7684 Button\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-5"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Toolbar \u4e2d\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u7684 Button \u901a\u8fc7\u6574\u6570\u52a0\u4ee5\u8ddf\u8e2a\u3002\u5fc5\u987b\u5728\u51fd\u6570\u4e2d\u63d0\u4f9b\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\u3002\u8981\u4f7f Toolbar \u5177\u6709\u4ea4\u4e92\u6027\uff0c\u5fc5\u987b\u5c06\u6574\u6570\u5206\u914d\u7ed9\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\u63d0\u4f9b\u7684\u5185\u5bb9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u6570\u5c06\u51b3\u5b9a Toolbar \u4e2d\u663e\u793a\u7684 Button \u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.Toolbar \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private int toolbarInt = 0;\n    private string[] toolbarStrings = {"Toolbar1", "Toolbar2", "Toolbar3"};\n    \n    void OnGUI () \n    {\n        toolbarInt = GUI.Toolbar (new Rect (25, 25, 250, 30), toolbarInt, toolbarStrings);\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-ToolbarExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Toolbar"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Toolbar"),(0,l.kt)("h3",r({},{id:"selectiongrid"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.SelectionGrid.html"}),"SelectionGrid")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"SelectionGrid"),"  \u63a7\u4ef6\u662f\u4e00\u79cd\u591a\u884c  ",(0,l.kt)("strong",{parentName:"p"},"Toolbar")," \u3002\u60a8\u53ef\u4ee5\u51b3\u5b9a\u7f51\u683c\u4e2d\u7684\u5217\u6570\u548c\u884c\u6570\u3002\u4e00\u6b21\u53ea\u80fd\u6fc0\u6d3b\u4e00\u4e2a Button\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-6"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"SelectionGrid \u4e2d\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u7684 Button \u901a\u8fc7\u6574\u6570\u52a0\u4ee5\u8ddf\u8e2a\u3002\u5fc5\u987b\u5728\u51fd\u6570\u4e2d\u63d0\u4f9b\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\u3002\u8981\u4f7f SelectionGrid \u5177\u6709\u4ea4\u4e92\u6027\uff0c\u5fc5\u987b\u5c06\u6574\u6570\u5206\u914d\u7ed9\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\u63d0\u4f9b\u7684\u5185\u5bb9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u6570\u5c06\u51b3\u5b9a SelectionGrid \u4e2d\u663e\u793a\u7684 Button \u6570\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u53c2\u6570\u6307\u5b9a\u5217\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.SelectionGrid \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private int selectionGridInt = 0;\n    private string[] selectionStrings = {"Grid 1", "Grid 2", "Grid 3", "Grid 4"};\n    \n    void OnGUI () \n    {\n        selectionGridInt = GUI.SelectionGrid (new Rect (25, 25, 300, 60), selectionGridInt, selectionStrings, 2);\n    \n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-SelectionGridExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 SelectionGrid"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 SelectionGrid"),(0,l.kt)("h3",r({},{id:"horizontalslider"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.HorizontalSlider.html"}),"HorizontalSlider")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"HorizontalSlider"),"  \u63a7\u4ef6\u662f\u4e00\u4e2a\u5178\u578b\u7684\u6c34\u5e73\u6ed1\u94ae\uff0c\u53ef\u62d6\u52a8\u8be5\u6ed1\u94ae\u6765\u66f4\u6539\u4ecb\u4e8e\u9884\u5b9a\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u4e4b\u95f4\u7684\u503c\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-7"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"\u6ed1\u94ae\u7684\u4f4d\u7f6e\u5b58\u50a8\u4e3a\u6d6e\u70b9\u6570\u3002\u8981\u663e\u793a\u6ed1\u94ae\u7684\u4f4d\u7f6e\uff0c\u8bf7\u5c06\u8be5\u6d6e\u70b9\u6570\u4f5c\u4e3a\u51fd\u6570\u4e2d\u7684\u53c2\u6570\u4e4b\u4e00\u3002\u6b64\u5916\u8fd8\u6709\u4e24\u4e2a\u503c\u7528\u4e8e\u786e\u5b9a\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002\u5982\u679c\u5e0c\u671b\u6ed1\u94ae\u53ef\u8c03\uff0c\u8bf7\u5c06\u6ed1\u52a8\u6761\u503c\u6d6e\u70b9\u6570\u6307\u5b9a\u4e3a Slider \u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"/* Horizontal Slider \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private float hSliderValue = 0.0f;\n    \n    void OnGUI () \n    {\n        hSliderValue = GUI.HorizontalSlider (new Rect (25, 25, 100, 30), hSliderValue, 0.0f, 10.0f);\n    }\n\n}\n\n\n")),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-HorizontalSliderExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Horizontal Slider"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Horizontal Slider"),(0,l.kt)("h3",r({},{id:"verticalslider"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.VerticalSlider.html"}),"VerticalSlider")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"VerticalSlider"),"  \u63a7\u4ef6\u662f\u4e00\u4e2a\u5178\u578b\u7684\u5782\u76f4\u6ed1\u94ae\uff0c\u53ef\u62d6\u52a8\u8be5\u6ed1\u94ae\u6765\u66f4\u6539\u4ecb\u4e8e\u9884\u5b9a\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u4e4b\u95f4\u7684\u503c\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-8"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"\u6ed1\u94ae\u7684\u4f4d\u7f6e\u5b58\u50a8\u4e3a\u6d6e\u70b9\u6570\u3002\u8981\u663e\u793a\u6ed1\u94ae\u7684\u4f4d\u7f6e\uff0c\u8bf7\u5c06\u8be5\u6d6e\u70b9\u6570\u4f5c\u4e3a\u51fd\u6570\u4e2d\u7684\u53c2\u6570\u4e4b\u4e00\u3002\u6b64\u5916\u8fd8\u6709\u4e24\u4e2a\u503c\u7528\u4e8e\u786e\u5b9a\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002\u5982\u679c\u5e0c\u671b\u6ed1\u94ae\u53ef\u8c03\uff0c\u8bf7\u5c06\u6ed1\u52a8\u6761\u503c\u6d6e\u70b9\u6570\u6307\u5b9a\u4e3a Slider \u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"/* Vertical Slider \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private float vSliderValue = 0.0f;\n    \n    void OnGUI () \n    {\n        vSliderValue = GUI.VerticalSlider (new Rect (25, 25, 100, 30), vSliderValue, 10.0f, 0.0f);\n    }\n\n}\n\n\n")),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-VerticalSliderExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Vertical Slider"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Vertical Slider"),(0,l.kt)("h3",r({},{id:"horizontalscrollbar"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.HorizontalScrollbar.html"}),"HorizontalScrollbar")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"HorizontalScrollbar"),"  \u63a7\u4ef6\u7c7b\u4f3c\u4e8e  ",(0,l.kt)("strong",{parentName:"p"},"Slider"),"  \u63a7\u4ef6\uff0c\u4f46\u5728\u89c6\u89c9\u4e0a\u7c7b\u4f3c\u4e8e Web \u6d4f\u89c8\u5668\u6216\u6587\u5b57\u5904\u7406\u7a0b\u5e8f\u7684\u6eda\u52a8\u5143\u7d20\u3002\u6b64\u63a7\u4ef6\u7528\u4e8e\u5bfc\u822a  ",(0,l.kt)("strong",{parentName:"p"},"ScrollView"),"  \u63a7\u4ef6\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-9"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Horizontal Scrollbar \u7684\u5b9e\u73b0\u65b9\u5f0f\u4e0e Horizontal Slider \u76f8\u540c\uff0c\u4f46\u6709\u4e00\u4e2a\u4f8b\u5916\uff1a\u8fd8\u6709\u4e00\u4e2a\u53c2\u6570\u7528\u4e8e\u63a7\u5236\u6eda\u52a8\u6761\u6ed1\u94ae\u672c\u8eab\u7684\u5bbd\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"/* Horizontal Scrollbar \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n    private float hScrollbarValue;\n    \n    void OnGUI () \n    {\n        hScrollbarValue = GUI.HorizontalScrollbar (new Rect (25, 25, 100, 30), hScrollbarValue, 1.0f, 0.0f, 10.0f);\n    }\n\n}\n\n\n")),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-HorizontalScrollbarExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Horizontal Scrollbar"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Horizontal Scrollbar"),(0,l.kt)("h3",r({},{id:"verticalscrollbar"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.VerticalScrollbar.html"}),"VerticalScrollbar")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"VerticalScrollbar"),"  \u63a7\u4ef6\u7c7b\u4f3c\u4e8e  ",(0,l.kt)("strong",{parentName:"p"},"Slider"),"  \u63a7\u4ef6\uff0c\u4f46\u5728\u89c6\u89c9\u4e0a\u7c7b\u4f3c\u4e8e Web \u6d4f\u89c8\u5668\u6216\u6587\u5b57\u5904\u7406\u7a0b\u5e8f\u7684\u6eda\u52a8\u5143\u7d20\u3002\u6b64\u63a7\u4ef6\u7528\u4e8e\u5bfc\u822a  ",(0,l.kt)("strong",{parentName:"p"},"ScrollView"),"  \u63a7\u4ef6\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-10"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Vertical Scrollbar \u7684\u5b9e\u73b0\u65b9\u5f0f\u4e0e Vertical Slider \u76f8\u540c\uff0c\u4f46\u6709\u4e00\u4e2a\u4f8b\u5916\uff1a\u8fd8\u6709\u4e00\u4e2a\u53c2\u6570\u7528\u4e8e\u63a7\u5236\u6eda\u52a8\u6761\u6ed1\u94ae\u672c\u8eab\u7684\u9ad8\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"/* Vertical Scrollbar \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour\n{\n                    \n    private float vScrollbarValue;\n    \n    void OnGUI ()\n    {\n        vScrollbarValue = GUI. VerticalScrollbar (new Rect (25, 25, 100, 30), vScrollbarValue, 1.0f, 10.0f, 0.0f);\n    }\n}\n\n\n")),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-VerticalScrollbarExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Vertical Scrollbar"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Vertical Scrollbar"),(0,l.kt)("h3",r({},{id:"scrollview"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.BeginScrollView.html"}),"ScrollView")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"ScrollView"),"  \u63a7\u4ef6\u53ef\u663e\u793a\u4e00\u4e2a\u5305\u542b\u66f4\u5927\u63a7\u4ef6\u96c6\u5408\u7684\u53ef\u89c6\u533a\u57df\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-11"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"ScrollView \u9700\u8981\u4e24\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"Rect"),"  \u4f5c\u4e3a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"Rect"),"  \u5b9a\u4e49 ScrollView \u53ef\u89c6\u533a\u57df\u5728\u5c4f\u5e55\u4e0a\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u3002\u7b2c\u4e8c\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"Rect"),"  \u5b9a\u4e49\u53ef\u89c6\u533a\u57df\u5185\u5305\u542b\u7684\u7a7a\u95f4\u5927\u5c0f\u3002\u5982\u679c\u53ef\u89c6\u533a\u57df\u5185\u7684\u7a7a\u95f4\u5927\u4e8e\u53ef\u89c6\u533a\u57df\uff0c\u5219\u4f1a\u6839\u636e\u9700\u8981\u663e\u793a\u6eda\u52a8\u6761\u3002\u8fd8\u5fc5\u987b\u5206\u914d\u5e76\u63d0\u4f9b 2D \u77e2\u91cf\uff0c\u8be5\u77e2\u91cf\u7528\u4e8e\u5b58\u50a8\u663e\u793a\u7684\u53ef\u89c6\u533a\u57df\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* ScrollView \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private Vector2 scrollViewVector = Vector2.zero;\n    private string innerText = "I am inside the ScrollView";\n    \n    void OnGUI () \n    {\n        // \u5f00\u59cb ScrollView\n        scrollViewVector = GUI.BeginScrollView (new Rect (25, 25, 100, 100), scrollViewVector, new Rect (0, 0, 400, 400));\n    \n        // \u5728 ScrollView \u4e2d\u653e\u5165\u4e00\u4e9b\u5185\u5bb9\n        innerText = GUI.TextArea (new Rect (0, 0, 400, 400), innerText);\n    \n        // \u7ed3\u675f ScrollView\n        GUI.EndScrollView();\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-ScrollViewExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 ScrollView"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 ScrollView"),(0,l.kt)("h3",r({},{id:"window"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.Window.html"}),"Window")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Window"),"  \u662f\u53ef\u62d6\u52a8\u7684\u63a7\u4ef6\u5bb9\u5668\u3002\u70b9\u51fb\u65f6\uff0cWindow \u53ef\u83b7\u5f97\u548c\u5931\u53bb\u7126\u70b9\u3002\u56e0\u6b64\uff0c\u5b9e\u73b0\u65b9\u5f0f\u4e0e\u5176\u4ed6\u63a7\u4ef6\u7565\u6709\u4e0d\u540c\u3002\u6bcf\u4e2a Window \u90fd\u6709\u4e00\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"id"),"  \u7f16\u53f7\uff0c\u5e76\u4e14\u5176\u5185\u5bb9\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u51fd\u6570\u5185\u58f0\u660e\uff0c\u8be5\u51fd\u6570\u5728 Window \u83b7\u5f97\u7126\u70b9\u65f6\u8c03\u7528\u3002"),(0,l.kt)("h4",r({},{id:"\u57fa\u672c\u7528\u6cd5-12"}),"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"Window \u662f\u552f\u4e00\u9700\u8981\u989d\u5916\u51fd\u6570\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u7684\u63a7\u4ef6\u3002\u5fc5\u987b\u4e3a Window \u63d0\u4f9b  ",(0,l.kt)("strong",{parentName:"p"},"id"),"  \u7f16\u53f7\u548c\u8981\u6267\u884c\u7684\u51fd\u6570\u540d\u79f0\u3002\u5728 Window \u51fd\u6570\u4e2d\uff0c\u53ef\u4ee5\u521b\u5efa\u5b9e\u9645\u884c\u4e3a\u6216\u5305\u542b\u7684\u63a7\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* Window \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour \n{\n                    \n    private Rect windowRect = new Rect (20, 20, 120, 50);\n    \n    void OnGUI ()\n    {\n        windowRect = GUI.Window (0, windowRect, WindowFunction, "My Window");\n    }\n    \n    void WindowFunction (int windowID) \n    {\n        // \u5728\u6b64\u5904\u7ed8\u5236\u7a97\u53e3\u5185\u7684\u4efb\u4f55\u63a7\u4ef6\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",r({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-WindowExample.png",alt:"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Window"}))),(0,l.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u7684 Window"),(0,l.kt)("h3",r({},{id:"guichanged"}),(0,l.kt)("a",r({parentName:"h3"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/GUI-changed.html"}),"GUI.changed")),(0,l.kt)("p",null,"\u8981\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5728 GUI \u4e2d\u6267\u884c\u4e86\u4efb\u4f55\u64cd\u4f5c\uff08\u70b9\u51fb\u6309\u94ae\u3001\u62d6\u52a8\u6ed1\u52a8\u6761\u7b49\uff09\uff0c\u5e94\u4ece\u811a\u672c\u4e2d\u8bfb\u53d6  ",(0,l.kt)("strong",{parentName:"p"},"GUI.changed"),"  \u503c\u3002\u5f53\u7528\u6237\u6267\u884c\u4e86\u64cd\u4f5c\u65f6\uff0c\u7ed3\u679c\u5c06\u83b7\u5f97 true\uff0c\u56e0\u6b64\u53ef\u4ee5\u8f7b\u677e\u9a8c\u8bc1\u7528\u6237\u8f93\u5165\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u60c5\u51b5\u662f Toolbar\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u5e0c\u671b\u6839\u636e Toolbar \u4e2d\u5df2\u70b9\u51fb\u7684 Button \u6765\u66f4\u6539\u7279\u5b9a\u503c\u3002\u901a\u5e38\u4e0d\u5e0c\u671b\u5728\u6bcf\u6b21\u7684\u8c03\u7528  ",(0,l.kt)("strong",{parentName:"p"},"OnGUI()"),"  \u4e2d\u90fd\u5206\u914d\u8be5\u503c\uff0c\u800c\u53ea\u5728\u70b9\u51fb\u5176\u4e2d\u4e00\u4e2a Button \u65f6\u624d\u5206\u914d\u8be5\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),'/* GUI.changed \u793a\u4f8b */\n\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour\n{\n                    \n    private int selectedToolbar = 0;\n    private string[] toolbarStrings = {"One", "Two"};\n    \n    void OnGUI () \n    {\n        // \u786e\u5b9a\u54ea\u4e2a\u6309\u94ae\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff0c\u662f\u5426\u5728\u6b64\u5e27\u8fdb\u884c\u4e86\u70b9\u51fb\n        selectedToolbar = GUI.Toolbar (new Rect (50, 10, Screen.width - 100, 30), selectedToolbar, toolbarStrings);\n    \n        // \u5982\u679c\u7528\u6237\u5728\u6b64\u5e27\u70b9\u51fb\u4e86\u65b0\u7684\u5de5\u5177\u680f\u6309\u94ae\uff0c\u6211\u4eec\u5c06\u5904\u7406\u4ed6\u4eec\u7684\u8f93\u5165\n        if (GUI.changed)\n        {\n            Debug.Log("The toolbar was clicked");\n    \n            if (0 == selectedToolbar)\n            {\n                Debug.Log("First button was clicked");\n            }\n            else\n            {\n                Debug.Log("Second button was clicked");\n            }\n        }\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u64cd\u4f5c\u4e86\u524d\u9762\u653e\u7f6e\u7684\u4efb\u4f55 GUI \u63a7\u4ef6\uff0c ",(0,l.kt)("strong",{parentName:"p"},"GUI.changed"),"  \u5c06\u8fd4\u56de true\u3002"))}d.isMDXComponent=!0}}]);