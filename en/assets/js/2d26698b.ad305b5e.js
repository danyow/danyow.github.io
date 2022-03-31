"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91370],{35318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return v}});var o=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),f=s(n),v=r,g=f["".concat(c,".").concat(v)]||f[v]||l[v]||i;return n?o.createElement(g,p(p({ref:e},u),{},{components:n})):o.createElement(g,p({ref:e},u))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,p=new Array(i);p[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:r,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96335:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});n(27378);var o=n(35318);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"Setting up app navigation from the Unity UI",slug:"/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation"},a="Setting up app navigation from the Unity UI",c={unversionedId:"unity/platform-specific/tv-os-introducing/tv-os-developing/Setting up app navigation from the Unity UI",id:"version-Unity@2022.1/unity/platform-specific/tv-os-introducing/tv-os-developing/Setting up app navigation from the Unity UI",title:"Setting up app navigation from the Unity UI",description:"You must provide custom visual resources to the Apple Game Center for its native leaderboard  UI . Here\u2019s how to set them up in Xcode:",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation.md",sourceDirName:"unity/platform-specific/tv-os-introducing/tv-os-developing",slug:"/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation",permalink:"/en/docs/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Setting up app navigation from the Unity UI",slug:"/platform-specific/tv-os-introducing/tv-os-developing/tvos-setting-up-application-navigation"},sidebar:"unity",previous:{title:"Debugging Your Application",permalink:"/en/docs/platform-specific/tv-os-introducing/tv-os-developing/tvos-debugging"},next:{title:"Supporting input devices on tvOS",permalink:"/en/docs/platform-specific/tv-os-introducing/tv-os-developing/tvos-supporting-input-devices"}},s={},u=[],l={toc:u};function f(t){var{components:e}=t,n=i(t,["components"]);return(0,o.kt)("wrapper",r({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"setting-up-app-navigation-from-the-unity-ui"}),"Setting up app navigation from the Unity UI"),(0,o.kt)("p",null,"You must provide custom visual resources to the Apple Game Center for its native leaderboard  ",(0,o.kt)("strong",{parentName:"p"},"UI")," . Here\u2019s how to set them up in Xcode:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",r({parentName:"p"},{href:"/en/docs/input/class-input-manager"}),"Input")," window in the Unity Editor. Find the first occurrence of the  ",(0,o.kt)("strong",{parentName:"p"},"Submit"),"  virtual input, expand it, and change its  ",(0,o.kt)("strong",{parentName:"p"},"Alt Positive Button"),"  to ",(0,o.kt)("a",r({parentName:"p"},{href:"unity%5Cplatform-specific%5Ciphone%5Ci-os-%E9%AB%98%E7%BA%A7%E4%B8%BB%E9%A2%98%5Ciphone-api%5Ciphone-joystick.md"})," ",(0,o.kt)("strong",{parentName:"a"},"joystick button 14")," "),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the EventSystem appObject in your  ",(0,o.kt)("strong",{parentName:"p"},"Scene")," . In the  ",(0,o.kt)("strong",{parentName:"p"},"Inspector")," , find the EventSystem component, and set a reference to the UI appObject that should receive initial focus in the  ",(0,o.kt)("strong",{parentName:"p"},"First Selected"),"  property. You might need to enable the  ",(0,o.kt)("strong",{parentName:"p"},"Force input module"),"  property in the  ",(0,o.kt)("strong",{parentName:"p"},"Standalone Input Module"),"  component.#"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note")," : Apple TV Remote navigation doesn\u2019t work while your app is running in the TV Simulator."))))}f.isMDXComponent=!0}}]);