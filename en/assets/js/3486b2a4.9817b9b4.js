"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15770],{35318:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return d}});var n=i(27378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(i),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},19736:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});i(27378);var n=i(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const a={id:"Simulated classes",slug:"/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes"},o="Simulated classes",c={unversionedId:"unity/unity-overview/using-the-editor/device-simulator/Simulated classes",id:"version-Unity@2022.1/unity/unity-overview/using-the-editor/device-simulator/Simulated classes",title:"Simulated classes",description:"The Device Simulator provides simulated classes, which you can use to test code that responds to device-specific behaviors in the Device Simulator.",source:"@site/versioned_docs/version-Unity@2022.1/unity/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes.md",sourceDirName:"unity/unity-overview/using-the-editor/device-simulator",slug:"/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes",permalink:"/en/docs/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Simulated classes",slug:"/unity-overview/using-the-editor/device-simulator/device-simulator-simulated-classes"},sidebar:"unity",previous:{title:"Extending the device simulator",permalink:"/en/docs/unity-overview/using-the-editor/device-simulator/device-simulator-plugins"},next:{title:"The Simulator view",permalink:"/en/docs/unity-overview/using-the-editor/device-simulator/device-simulator-view"}},l={},u=[{value:"Updating your scripts to use simulated classes",id:"updating-your-scripts-to-use-simulated-classes",level:2}],m={toc:u};function p(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"simulated-classes"}),"Simulated classes"),(0,n.kt)("p",null,"The Device Simulator provides simulated classes, which you can use to test code that responds to device-specific behaviors in the Device Simulator."),(0,n.kt)("p",null,"The following simulated classes are in the UnityEngine.Device namespace:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.Application.html"}),"Application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.Screen.html"}),"Screen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.SystemInfo.html"}),"SystemInfo"))),(0,n.kt)("p",null,"These simulated classes have the same members as their regular UnityEngine namespace counterparts. You can use them anywhere in your codebase where you would normally use the regular classes. There is no performance impact, and you can use them in release builds."),(0,n.kt)("p",null,"In the Editor, when the Device Simulator is ",(0,n.kt)("a",r({parentName:"p"},{href:"/en/docs/unity-overview/using-the-editor/device-simulator/device-simulator"}),"active"),", the simulated classes mimic the platform-specific behaviors of the simulated device; for example, ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Device.SystemInfo-operatingSystem.html"}),"Device.SystemInfo.operatingSystem")," returns the Android or iOS version of the simulated device."),(0,n.kt)("p",null,"In a built application, or when the Device Simulator isn\u2019t active, the simulated classes have the same behavior as their counterparts in the UnityEngine namespace."),(0,n.kt)("p",null,"Although the simulated classes have the same members as the regular classes, the Device Simulator doesn\u2019t simulate every behavior. In the UnityEditor, members that the Device Simulator doesn\u2019t simulate have the same behavior as their UnityEngine equivalent, which isn\u2019t platform-dependent. For example, the Device Simulator doesn\u2019t simulate ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Device.Screen-brightness.html"}),"Device.Screen.brightness"),". This means this member has the same in-Editor behavior as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-brightness.html"}),"UnityEngine.Screen.brightness"),", which always returns ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),". For information on which members the Device Simulator simulates, see the API documentation for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.Application.html"}),"Device.Application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.Screen.html"}),"Device.Screen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Device.SystemInfo.html"}),"Device.SystemInfo"))),(0,n.kt)("h2",r({},{id:"updating-your-scripts-to-use-simulated-classes"}),"Updating your scripts to use simulated classes"),(0,n.kt)("p",null,"If you want to convert existing code to use classes from the UnityEngine.Device namespace, it\u2019s best practice to use ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive"}),"alias directives"),". For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"using Screen = UnityEngine.Device.Screen;\nusing Application = UnityEngine.Device.Application;\nusing SystemInfo = UnityEngine.Device.SystemInfo;\n")),(0,n.kt)("p",null,"This way you can change which class the entire file uses and not change every API call."))}p.isMDXComponent=!0}}]);