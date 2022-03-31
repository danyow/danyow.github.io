"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58919],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),f=r,d=g["".concat(l,".").concat(f)]||g[f]||p[f]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});n(27378);var i=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={id:"Plug-ins",slug:"/scripting-section/plugins/plugins"},s="Plug-ins",l={unversionedId:"unity/scripting-section/plugins/Plug-ins",id:"version-Unity@2022.1/unity/scripting-section/plugins/Plug-ins",title:"Plug-ins",description:"In Unity, you normally use  scripts  to create functionality, but you can also include code created outside Unity in the form of a  plug-in . You can use two different kinds of plug-in in Unity:",source:"@site/versioned_docs/version-Unity@2022.1/unity/scripting-section/plugins/plugins.md",sourceDirName:"unity/scripting-section/plugins",slug:"/scripting-section/plugins/plugins",permalink:"/docs/scripting-section/plugins/plugins",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Plug-ins",slug:"/scripting-section/plugins/plugins"},sidebar:"unity",previous:{title:"C# \u4f5c\u4e1a\u7cfb\u7edf\u63d0\u793a\u548c\u6545\u969c\u6392\u9664",permalink:"/docs/scripting-section/job-system/job-system-troubleshooting"},next:{title:"Low-level native plug-in interface",permalink:"/docs/scripting-section/plugins/native-plugin-interface/native-plugin-interface"}},c={},u=[],p={toc:u};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",r({},{id:"plug-ins"}),"Plug-ins"),(0,i.kt)("p",null,"In Unity, you normally use  ",(0,i.kt)("strong",{parentName:"p"},"scripts"),"  to create functionality, but you can also include code created outside Unity in the form of a  ",(0,i.kt)("strong",{parentName:"p"},"plug-in")," . You can use two different kinds of plug-in in Unity:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Managed plug-ins")," : ",(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/unity-architecture/overview-of-dot-net-in-unity/dotnet-profile-support"}),"managed .NET assemblies")," you can create with tools like Visual Studio. They only contain .NET code, which means they can\u2019t access any features that the .NET libraries do not support. For more information, see ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/standard/managed-code"}),"Microsoft\u2019s documentation of managed code"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Native plug-ins")," : platform-specific native code libraries. They can access features like operating system calls and third-party code libraries that would otherwise be unavailable to Unity.")),(0,i.kt)("p",null,"Managed code is accessible to the standard .NET tools that Unity uses to compile scripts. The only difference between managed plug-in code and Unity script code is that the plug-ins are compiled outside of Unity and so Unity might not be able to access the source. When using native plug-ins, Unity\u2019s tools can\u2019t access third-party code libraries in the same way that they can access the managed libraries. For example, if you forget to add a managed plug-in file to the project, you will get standard compiler error messages. Whereas, if you forget to add a native plug-in file to the project, you will only see an error report when you try to run the project."),(0,i.kt)("p",null,"The following pages explain how to create and use plug-ins in your Unity Projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/plugins/plugin-inspector"}),"Import and configure plug-ins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/plugins/using-dll"}),"\u6258\u7ba1\u63d2\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/plugins/native-plugins"}),"Native plug-ins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/plugins/plugins-for-desktop"}),"\u6784\u5efa\u9002\u7528\u4e8e\u684c\u9762\u5e73\u53f0\u7684\u63d2\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",r({parentName:"li"},{href:"/docs/scripting-section/plugins/native-plugin-interface/native-plugin-interface"}),"\u4f4e\u7ea7\u539f\u751f\u63d2\u4ef6\u63a5\u53e3"))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2018\u201303\u201319 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,i.kt)("li",{parentName:"ul"},"\u4ece 2018.1 \u5f00\u59cb\uff0cMonoDevelop \u7531 Visual Studio \u53d6\u4ee3")))}g.isMDXComponent=!0}}]);