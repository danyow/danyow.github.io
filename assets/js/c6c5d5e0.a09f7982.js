"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74051],{35318:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48984:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});n(27378);var r=n(35318);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const o={id:"Requirements and compatibility",slug:"/platform-specific/android/android-introducing/android-requirements-and-compatibility"},s="Requirements and compatibility",p={unversionedId:"unity/platform-specific/android/android-introducing/Requirements and compatibility",id:"version-Unity@2022.1/unity/platform-specific/android/android-introducing/Requirements and compatibility",title:"Requirements and compatibility",description:"This page contains system requirements and compatibility information for Android development in Unity.",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/android/android-introducing/android-requirements-and-compatibility.md",sourceDirName:"unity/platform-specific/android/android-introducing",slug:"/platform-specific/android/android-introducing/android-requirements-and-compatibility",permalink:"/docs/platform-specific/android/android-introducing/android-requirements-and-compatibility",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Requirements and compatibility",slug:"/platform-specific/android/android-introducing/android-requirements-and-compatibility"},sidebar:"unity",previous:{title:"Android App Manifest",permalink:"/docs/platform-specific/android/android-introducing/android-manifest"},next:{title:"How Unity builds Android applications",permalink:"/docs/platform-specific/android/android-introducing/how-unity-builds-android-applications"}},l={},d=[{value:"Android support",id:"android-support",level:2},{value:"Graphics API support",id:"graphics-api-support",level:2},{value:"OpenGL ES 2.0",id:"opengl-es-20",level:3},{value:"Manifest element attributes",id:"manifest-element-attributes",level:2},{value:"\u7eb9\u7406\u538b\u7f29",id:"\u7eb9\u7406\u538b\u7f29",level:2},{value:"Playing video files",id:"playing-video-files",level:2}],u={toc:d};function c(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"requirements-and-compatibility"}),"Requirements and compatibility"),(0,r.kt)("p",null,"This page contains system requirements and compatibility information for Android development in Unity."),(0,r.kt)("h2",i({},{id:"android-support"}),"Android support"),(0,r.kt)("p",null,"Unity supports Android 5.1 \u201cLollipop\u201d (API level 22) and above. For more information, see ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AndroidSdkVersions.html"}),"AndroidSdkVersions"),"."),(0,r.kt)("h2",i({},{id:"graphics-api-support"}),"Graphics API support"),(0,r.kt)("p",null,"Android devices support ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developer.android.com/ndk/guides/graphics"}),"Vulkan")," and ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developer.android.com/guide/topics/graphics/opengl"}),"OpenGL ES"),". This section contains information about the graphics APIs Unity supports for Android."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u56fe\u5f62 API")),(0,r.kt)("th",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u652f\u6301")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Vulkan")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 1.0")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 1.1")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 2.0")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f (1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 3.0")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 3.1")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"OpenGL ES 3.2")),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"\u662f")))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"New Unity Projects don\u2019t support OpenGL ES 2.0 by default. For information on how to add support for OpenGL ES 2.0, see ",(0,r.kt)("a",i({parentName:"li"},{href:"#open-gl-es-2-0"}),"OpenGL ES 2.0"),".")),(0,r.kt)("h3",i({},{id:"opengl-es-20"}),"OpenGL ES 2.0"),(0,r.kt)("p",null,"Unity doesn\u2019t include OpenGL ES 2.0 in its built-in set of graphics APIs for Android by default. To add support for OpenGL ES 2.0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to  ",(0,r.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings"),"  and select  ",(0,r.kt)("strong",{parentName:"li"},"Player")," ."),(0,r.kt)("li",{parentName:"ol"},"Select the Android tab.",(0,r.kt)("br",null)," ",(0,r.kt)("img",i({parentName:"li"},{src:"https://lh6.googleusercontent.com/0nX-QizcmdsH7PlbmooKyc4_ZKQY8hav-FJa3asW_POLWVSxhSmDwQ6vASN7o1kZcRIr213cfisTM-4y5Tt2p70nU_Jj1at5JZYfk4t1N4vO2V8s9kh83SQoySEgVnp2ZOn4hJYd=s0",alt:"img"}))),(0,r.kt)("li",{parentName:"ol"},"Open the  ",(0,r.kt)("strong",{parentName:"li"},"Other Settings"),"  fold-out. In the  ",(0,r.kt)("strong",{parentName:"li"},"Rendering"),"  section, disable  ",(0,r.kt)("strong",{parentName:"li"},"Auto Graphics API")," . This makes the  ",(0,r.kt)("strong",{parentName:"li"},"Graphics APIs"),"  list appear."),(0,r.kt)("li",{parentName:"ol"},"To add support for OpenGL ES 2.0, select  ",(0,r.kt)("strong",{parentName:"li"},"Add (+)"),"  and choose  ",(0,r.kt)("strong",{parentName:"li"},"OpenGLES2")," .")),(0,r.kt)("p",null,"If you upgrade an old project that uses  ",(0,r.kt)("strong",{parentName:"p"},"Auto Graphics API"),"  to a Unity version that doesn\u2019t include OpenGL ES 2.0 by default, then Unity disables  ",(0,r.kt)("strong",{parentName:"p"},"Auto Graphics API"),"  and manually adds OpenGL ES 2.0 to the list."),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/manifest-settings.html"}))),(0,r.kt)("h2",i({},{id:"manifest-element-attributes"}),"Manifest element attributes"),(0,r.kt)("p",null,"This section contains compatibility information on ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developer.android.com/guide/topics/manifest/manifest-intro#reference"}),"Android App Manifest element")," attributes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("a",i({parentName:"li"},{href:"https://developer.android.com/guide/topics/manifest/activity-element.html"}),"<","Activity",">")," element, Unity only supports the ",(0,r.kt)("inlineCode",{parentName:"li"},"singleTask")," ",(0,r.kt)("a",i({parentName:"li"},{href:"https://developer.android.com/guide/topics/manifest/activity-element.html#lmode"}),"launchMode"),".")),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/Manual/texture-compression.html"}))),(0,r.kt)("h2",i({},{id:"\u7eb9\u7406\u538b\u7f29"}),"\u7eb9\u7406\u538b\u7f29"),(0,r.kt)("p",null,"The standard texture compression formats on Android are ",(0,r.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Ericsson_Texture_Compression"}),"Ericsson Texture Compression (ETC)")," and ",(0,r.kt)("a",i({parentName:"p"},{href:"https://www.khronos.org/opengl/wiki/ASTC_Texture_Compression"}),"Adaptable Scalable Texture Compression (ASTC)"),". To target the widest range of Android devices, use one of these texture compression formats. Unity\u2019s default texture compression format is ASTC. If an Android device doesn\u2019t support the texture compression format you use for a texture, Unity decompresses the texture at runtime. This increases memory usage and decreases rendering speed."),(0,r.kt)("p",null,"A subset of Android devices support the DXT and PVRTC texture compression formats. These formats support textures with an alpha channel as well as high compression rates or high image quality. For digital distribution services that filter content based on texture compression format, it is best practice to create separate builds of your application for each texture compression format."),(0,r.kt)("p",null,"There are two ways to change the default texture compression format for your application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android"}),"Android Player Settings")," with the  ",(0,r.kt)("strong",{parentName:"li"},"Texture compression format"),"  setting."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/platform-specific/android/android-building-and-delivering/android-build-settings"}),"Android Build Settings")," with the  ",(0,r.kt)("strong",{parentName:"li"},"Texture Compression"),"  setting. The default value for this is  ",(0,r.kt)("strong",{parentName:"li"},"Use Player Settings")," .")),(0,r.kt)("p",null,"The value you set in Build Settings has priority over the one you set in Player Settings. Use it to change the texture compression format for a particular build."),(0,r.kt)("p",null,"You can also customize the texture compression format for individual textures. The value you set for an individual texture overrides the default texture compression format value. For information on how to change the texture format of individual textures, see ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/graphics/textures/importing-textures/class-texture-importer/class-texture-importer"}),"Texture Importer"),"."),(0,r.kt)("h2",i({},{id:"playing-video-files"}),"Playing video files"),(0,r.kt)("p",null,"This section provides additional information for playing video files on Android:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To play video files on Android, use the ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/video-player/video-player"}),"Video Player")," component. If your application tries to play a video file that the device doesn\u2019t support, Unity doesn\u2019t play the video."),(0,r.kt)("li",{parentName:"ul"},"You can use any resolution or number of audio channels so long as the target device supports them.  ",(0,r.kt)("strong",{parentName:"li"},"Note")," : Not all devices support resolutions greater than 640 \xd7 360."),(0,r.kt)("li",{parentName:"ul"},"Unity supports playback from uncompressed asset bundles. For ",(0,r.kt)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Android_Pie"}),"Android Pie")," and above, Unity supports playback from compressed asset bundles."),(0,r.kt)("li",{parentName:"ul"},"Unity doesn\u2019t support native webM/VP8 transparency. To play VP8-encoded webM clips with transparency, transcode the clips to a supported format."),(0,r.kt)("li",{parentName:"ul"},"In Android versions prior to ",(0,r.kt)("inlineCode",{parentName:"li"},"6.0.1"),", videos with transparency that have a higher resolution than the device support render pixels outside the supported resolution as white."),(0,r.kt)("li",{parentName:"ul"},"Unity reports format compatibility issues in the ",(0,r.kt)("inlineCode",{parentName:"li"},"adb logcat")," output and prefixes them with ",(0,r.kt)("inlineCode",{parentName:"li"},"AndroidVideoMedia"),". This file might display other device-specific error messages near the video format issues Unity reports. These device-specific errors aren\u2019t visible to Unity and often explain what the compatibility issue is.")))}c.isMDXComponent=!0}}]);