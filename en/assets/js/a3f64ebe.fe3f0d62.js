"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54795],{35318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75048:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});n(27378);var a=n(35318);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const l={id:"Audio in WebGL",slug:"/platform-specific/webgl/webgl-intro/webgl-audio"},i="Audio in WebGL",p={unversionedId:"unity/platform-specific/webgl/webgl-intro/Audio in WebGL",id:"version-Unity@2022.1/unity/platform-specific/webgl/webgl-intro/Audio in WebGL",title:"Audio in WebGL",description:"This page only provides information about audio capabilities in WebGL. To learn how to use audio in your Unity project, see the Audio Overview.",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/webgl/webgl-intro/webgl-audio.md",sourceDirName:"unity/platform-specific/webgl/webgl-intro",slug:"/platform-specific/webgl/webgl-intro/webgl-audio",permalink:"/en/docs/platform-specific/webgl/webgl-intro/webgl-audio",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/platform-specific/webgl/webgl-intro/webgl-audio.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Audio in WebGL",slug:"/platform-specific/webgl/webgl-intro/webgl-audio"},sidebar:"unity",previous:{title:"Introduction to WebGL",permalink:"/en/docs/platform-specific/webgl/webgl-intro/webgl-intro"},next:{title:"WebGL browser compatibility",permalink:"/en/docs/platform-specific/webgl/webgl-intro/webgl-browsercompatibility"}},d={},u=[{value:"\u652f\u6301\u7684\u7c7b",id:"\u652f\u6301\u7684\u7c7b",level:2},{value:"AudioSource",id:"audiosource",level:2},{value:"AudioClip",id:"audioclip",level:2},{value:"\u538b\u7f29\u97f3\u9891",id:"\u538b\u7f29\u97f3\u9891",level:2},{value:"\u97f3\u9891\u64ad\u653e\u548c\u6d4f\u89c8\u5668\u5b89\u5168",id:"\u97f3\u9891\u64ad\u653e\u548c\u6d4f\u89c8\u5668\u5b89\u5168",level:2}],m={toc:u};function c(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"audio-in-webgl"}),"Audio in WebGL"),(0,a.kt)("p",null,"This page only provides information about audio capabilities in WebGL. To learn how to use audio in your Unity project, see the ",(0,a.kt)("a",r({parentName:"p"},{href:"/en/docs/audio/audio-overview"}),"Audio Overview"),"."),(0,a.kt)("p",null,"Because Unity uses ",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.fmod.com"}),"FMOD")," to manage audio for platforms, Unity WebGL supports limited audio functionality, which only includes the basic features. FMOD relies on threads, which WebGL doesn\u2019t support. For this reason, Unity uses an implementation based on the internal Web Audio API, which enables the browser to handle audio playback and mixing."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"  Google Chrome\u2019s new Autoplay policy prevents autoplay of audio and video under certain conditions. For example, while your game might be set to autoplay some background music soon after the game loads, it won\u2019t play automatically unless you click or tap on the website. For more information on how to enable or disable this policy, see Google Chrome\u2019s documentation on ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.chrome.com/blog/autoplay/"}),"Autoplay policy in Chrome"),"."),(0,a.kt)("h2",r({},{id:"\u652f\u6301\u7684\u7c7b"}),"\u652f\u6301\u7684\u7c7b"),(0,a.kt)("p",null,"Unity WebGL \u652f\u6301\u4ee5\u4e0b API \u7c7b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u7c7b")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"WebGL \u652f\u6301\u72b6\u6001")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.html"}),"AudioSource"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"WebGL \u652f\u6301\u90e8\u5206 API\u3002\u6709\u5173\u7279\u5b9a\u652f\u6301\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/anchor.html"}),"AudioSource"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioListener.html"}),"AudioListener"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u652f\u6301\u6240\u6709 API\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioClip.html"}),"AudioClip"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"WebGL \u652f\u6301\u90e8\u5206 API\u3002\u6709\u5173\u7279\u5b9a\u652f\u6301\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",r({parentName:"td"},{href:"#audio-clip"}),"AudioClip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/Device.SystemInfo-supportsAudio.html"}),"SystemInfo.supportsAudio"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6d4f\u89c8\u5668\u4e3a WebGL \u63d0\u4f9b\u97f3\u9891\u652f\u6301\u3002\u56e0\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"SystemInfo.supportsAudio")," \u59cb\u7ec8\u4e3a true\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Microphone.html"}),"Microphone"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0d\u652f\u6301\u3002")))),(0,a.kt)("h2",r({},{id:"audiosource"}),"AudioSource"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.html"}),"AudioSource")," API \u652f\u6301\u57fa\u672c\u4f4d\u7f6e\u97f3\u9891\u56de\u653e\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6682\u505c\u548c\u6062\u590d ","*","\u5e73\u79fb"),(0,a.kt)("li",{parentName:"ul"},"\u8870\u51cf"),(0,a.kt)("li",{parentName:"ul"},"\u97f3\u9ad8\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u666e\u52d2\u6548\u5e94\u652f\u6301")),(0,a.kt)("p",null,"Unity WebGL \u652f\u6301\u4ee5\u4e0b AudioSource API\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u7ed3")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-clip.html"}),"Clip"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u786e\u5b9a\u4e0b\u4e00\u4e2a\u64ad\u653e\u7684\u97f3\u9891\u526a\u8f91\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-dopplerLevel.html"}),"dopplerLevel"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8be5 AudioSource \u7684\u591a\u666e\u52d2\u7f29\u653e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-ignoreListenerPause.html"}),"ignoreListenerPause"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fd0\u884c AudioSource \u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioListener.pause")," \u5e76\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-ignoreListenerVolume.html"}),"ignoreListenerVolume"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5ffd\u7565\u7ec8\u7aef\u7528\u6237\u7684 AudioSource \u97f3\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-isPlaying.html"}),"isPlaying"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5982\u679c AudioSource.clip \u6b63\u5728\u64ad\u653e\uff0c\u5219\u8fd4\u56de true\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-loop.html"}),"loop"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u5faa\u73af\u64ad\u653e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-maxDistance.html"}),"maxDistance"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip")," \u505c\u6b62\u8870\u51cf\u6216\u542c\u4e0d\u5230\u7684\u6700\u5927\u8ddd\u79bb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-minDistance.html"}),"minDistance"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip")," \u97f3\u91cf\u4e0d\u518d\u589e\u5927\u7684\u6700\u5c0f\u8ddd\u79bb\u3002\u8d85\u8fc7\u6700\u5c0f\u8ddd\u79bb\uff0c\u97f3\u91cf\u5f00\u59cb\u8870\u51cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-mute.html"}),"mute"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"AudioSource \u9759\u97f3\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-pitch.html"}),"pitch"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip")," \u7684\u97f3\u9ad8\u3002WebGL \u4ec5\u652f\u6301\u6b63\u97f3\u9ad8\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-playOnAwake.html"}),"playOnAwake"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5524\u9192\u65f6\u64ad\u653e AudioSource\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-rollofMode.html"}),"rolloffMode"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e AudioSource \u968f\u8ddd\u79bb\u8870\u51cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-time.html"}),"time"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u64ad\u653e\u4f4d\u7f6e\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-timeSamples.html"}),"timeSamples"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8109\u51b2\u7f16\u7801\u8c03\u5236 (PCM) \u6837\u672c\u4e2d\u7684\u64ad\u653e\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-velocityUpdateMode.html"}),"velocityUpdateMode"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4ee5\u56fa\u5b9a\u8fd8\u662f\u52a8\u6001\u5faa\u73af\u65b9\u5f0f\u66f4\u65b0 AudioSource\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-volume.html"}),"volume"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e AudioSource \u7684\u97f3\u91cf\uff080.0 \u5230 1.0\uff09\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u65b9\u6cd5")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u7ed3")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.Pause.html"}),"Pause"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6682\u505c ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.Play.html"}),"Play"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u64ad\u653e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.PlayDelayed.html"}),"PlayDelayed"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4ee5\u6307\u5b9a\u7684\u5ef6\u8fdf\u64ad\u653e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.PlayOneShot.html"}),"PlayOneShot"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u64ad\u653e ",(0,a.kt)("a",r({parentName:"td"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioSource-clip.html"}),"AudioClip"),"\uff0c\u5e76\u6839\u636e volumeScale \u8c03\u6574 AudioSource \u7684\u97f3\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.PlayScheduled.html"}),"PlayScheduled"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u64ad\u653e AudioSource\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.SetScheduledEndTime.html"}),"SetScheduledEndTime"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8ba1\u5212\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip")," \u7ed3\u675f\u7684\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.SetScheduledStartTime.html"}),"SetScheduledStartTime"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8ba1\u5212\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip")," \u5f00\u59cb\u7684\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.Stop.html"}),"Stop"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u505c\u6b62\u64ad\u653e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.UnPause.html"}),"UnPause"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e3\u9664\u6682\u505c\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioSource.PlayClipAtPoint.html"}),"PlayClipAtPoint"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u4e16\u754c\u7a7a\u95f4\u4e2d\u7684\u7ed9\u5b9a\u4f4d\u7f6e\u64ad\u653e ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioSource.clip"),"\u3002")))),(0,a.kt)("h2",r({},{id:"audioclip"}),"AudioClip"),(0,a.kt)("p",null,"Unity WebGL \u4ee5 AAC \u683c\u5f0f\u5bfc\u5165 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/2021.1/Documentation/ScriptReference/AudioClip.html"}),"AudioClip")," \u6587\u4ef6\uff0c\u8fd9\u662f\u6d4f\u89c8\u5668\u5e7f\u6cdb\u652f\u6301\u7684\u683c\u5f0f\u3002Unity WebGL \u652f\u6301\u4ee5\u4e0b AudioClip API\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u7ed3")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioClip-length.html"}),"length"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"AudioClip \u7684\u957f\u5ea6\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioClip-loadState.html"}),"loadState"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8fd4\u56de\u4e0e AudioClip \u5173\u8054\u7684\u97f3\u9891\u6570\u636e\u7684\u5f53\u524d\u52a0\u8f7d\u72b6\u6001\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioClip-samples.html"}),"samples"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6837\u672c\u4e2d AudioClip \u7684\u957f\u5ea6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/AudioClip-loadType.html"}),"loadType"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u526a\u8f91\u7684\u52a0\u8f7d\u7c7b\u578b\u3002\u60a8\u53ef\u4ee5\u5728 Inspector \u4e2d\u8bbe\u7f6e AudioClip \u7684\u52a0\u8f7d\u7c7b\u578b\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u65b9\u6cd5")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u603b\u7ed3")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5176\u4ed6\u4fe1\u606f")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioClip.Create.html"}),"AudioClip.Create"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4f7f\u7528\u60a8\u6307\u5b9a\u7684\u540d\u79f0\u548c\u957f\u5ea6\u521b\u5efa\u4e00\u4e2a AudioClip\u3002"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unity WebGL \u90e8\u5206\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioClip.Create"),"\u3002\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u52a8\u6001\u4e32\u6d41\uff0c\u56e0\u6b64\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioClip.Create")," \u5c06 Stream \u8bbe\u7f6e\u4e3a false\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",r({parentName:"strong"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AudioClip.SetData.html"}),"AudioClip.SetData"))),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728 AudioSource.clip. \u4e2d\u8bbe\u7f6e\u6837\u672c\u6570\u636e\u3002"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unity WebGL \u90e8\u5206\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"td"},"AudioClip.SetData"),"\u3002\u53ea\u80fd\u4f7f\u7528\u6b64\u65b9\u6cd5\u66ff\u6362 AudioClip \u7684\u5185\u5bb9\u3002\u5728 WebGL \u4e0a\uff0cUnity \u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"td"},"offsetSample")," \u53c2\u6570\u3002")))),(0,a.kt)("h2",r({},{id:"\u538b\u7f29\u97f3\u9891"}),"\u538b\u7f29\u97f3\u9891"),(0,a.kt)("p",null,"To use compressed audio with WebGL in Unity, set the AudioClip ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/2021.1/Documentation/ScriptReference/AudioClip-loadType.html"}),"loadType")," to one of the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2021.1/Documentation/ScriptReference/AudioClipLoadType.CompressedInMemory.html"}),"CompressedInMemory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://docs.unity3d.com/2021.1/Documentation/ScriptReference/AudioClipLoadType.DecompressOnLoad.html"}),"DecompressOnLoad"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Compression method")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Considerations")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"CompressedInMemory")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Use this to compress the audio on disk and have it remain compressed after it loads into your application memory."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Compressed audio can cause latency and is less precise when it comes to audio playback. However, compressed audio uses less memory in your application than decompressed audio. It is best practise to use ",(0,a.kt)("inlineCode",{parentName:"td"},"CompressedInMemory")," for audio that is unaffected by precision for example, background music.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"DecompressOnLoad")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Use this to compress the audio on disk, similar to CompressedInMemory, and decompress when it loads into your application memory."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Decompressed audio uses a significant amount of memory compared to compressed audio but has lower latency and more audio flexibility. Use ",(0,a.kt)("inlineCode",{parentName:"td"},"DecompressedOnLoad")," for audio that is affected by precision (for example, character dialog or sound effects).")))),(0,a.kt)("h2",r({},{id:"\u97f3\u9891\u64ad\u653e\u548c\u6d4f\u89c8\u5668\u5b89\u5168"}),"\u97f3\u9891\u64ad\u653e\u548c\u6d4f\u89c8\u5668\u5b89\u5168"),(0,a.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u97f3\u9891\u64ad\u653e\uff0c\u76f4\u5230\u7ec8\u7aef\u7528\u6237\u901a\u8fc7\u9f20\u6807\u70b9\u51fb\u3001\u89e6\u6478\u4e8b\u4ef6\u6216\u6309\u952e\u4e0e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7f51\u9875\u8fdb\u884c\u4ea4\u4e92\u3002\u4f7f\u7528\u52a0\u8f7d\u5c4f\u5e55\u5141\u8bb8\u7ec8\u7aef\u7528\u6237\u4e0e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\uff0c\u5e76\u5728\u60a8\u7684\u4e3b\u8981\u5185\u5bb9\u5f00\u59cb\u4e4b\u524d\u5f00\u59cb\u97f3\u9891\u64ad\u653e\u3002"))}c.isMDXComponent=!0}}]);