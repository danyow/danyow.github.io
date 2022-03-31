"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45464],{35318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49195:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={id:"Gradle for Android",slug:"/platform-specific/android/android-introducing/android-gradle-overview"},d="Gradle for Android",l={unversionedId:"unity/platform-specific/android/android-introducing/Gradle for Android",id:"version-Unity@2022.1/unity/platform-specific/android/android-introducing/Gradle for Android",title:"Gradle for Android",description:"Gradle is a build system that automates a number of build processes and prevents many common build errors. Unity uses Gradle for all Android builds. You can either build the output package (.apk, .aab) in Unity, or export a Gradle project from Unity, and then build it with an external tool such as Android Studio.",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/android/android-introducing/android-gradle-overview.md",sourceDirName:"unity/platform-specific/android/android-introducing",slug:"/platform-specific/android/android-introducing/android-gradle-overview",permalink:"/docs/platform-specific/android/android-introducing/android-gradle-overview",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Gradle for Android",slug:"/platform-specific/android/android-introducing/android-gradle-overview"},sidebar:"unity",previous:{title:"Introducing Android",permalink:"/docs/platform-specific/android/android-introducing/android-introducing"},next:{title:"Unity Launcher Manifest",permalink:"/docs/platform-specific/android/android-introducing/android-launcher-manifest"}},s={},p=[{value:"Version compatibility",id:"version-compatibility",level:2},{value:"Gradle project structure",id:"gradle-project-structure",level:2}],u={toc:p};function c(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"gradle-for-android"}),"Gradle for Android"),(0,r.kt)("p",null,"Gradle is a build system that automates a number of build processes and prevents many common build errors. Unity uses Gradle for all Android builds. You can either build the output package (.apk, .aab) in Unity, or export a Gradle project from Unity, and then build it with an external tool such as Android Studio."),(0,r.kt)("p",null,"For more information about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gradle: See the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/userguide.html#getting-started"}),"Gradle user manual")," and ",(0,r.kt)("a",a({parentName:"li"},{href:"https://developer.android.com/reference/tools/gradle-api"}),"Android Gradle plugin documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Exporting a Unity project as a Gradle project: See ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/platform-specific/android/android-building-and-delivering/android-export-process"}),"Exporting an Android Project"),"."),(0,r.kt)("li",{parentName:"ul"},"Building an output package (.apk): See Unity documentation on ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/platform-specific/android/android-building-and-delivering/android-build-process"}),"Building apps for Android")," and Android developer documentation on ",(0,r.kt)("a",a({parentName:"li"},{href:"https://developer.android.com/studio/build/index.html"}),"configuring your build"),"."),(0,r.kt)("li",{parentName:"ul"},"Building an output package (.aab): See Unity documentation on ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/platform-specific/android/android-developing/play-asset-delivery"}),"Play Asset Delivery")," and Android developer documentation on ",(0,r.kt)("a",a({parentName:"li"},{href:"https://developer.android.com/guide/app-bundle/"}),"Android app bundles"),".")),(0,r.kt)("h2",a({},{id:"version-compatibility"}),"Version compatibility"),(0,r.kt)("p",null,"The following table shows compatibility between Gradle version and Unity version."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Unity version"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Gradle version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2022.1",(0,r.kt)("br",null),"2021.2",(0,r.kt)("br",null),"2021.1 starting from 2021.1.16f1",(0,r.kt)("br",null),"2020.3 starting from 2020.3.15f1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"6.1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2021.1 up to and including 2021.1.15f1",(0,r.kt)("br",null),"2020.1, 2020.2, 2020.3 up to and including 2020.3.14f1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5.6.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2019.4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5.1.1")))),(0,r.kt)("p",null,"If you want to use a custom Gradle or Android Gradle plugin version, it\u2019s important to know the version compatibility between Gradle and the Android Gradle plugin. For information on this, see ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.android.com/studio/releases/gradle-plugin?buildsystem=ndk-build#updating-gradle"}),"Update Gradle"),"."),(0,r.kt)("h2",a({},{id:"gradle-project-structure"}),"Gradle project structure"),(0,r.kt)("p",null,"If you export your Unity project as a Gradle project, Unity creates a Gradle project with two modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UnityLibrary module: Contains the Unity runtime and project data. This module is a library that you can integrate into any other Gradle project. You can use it to embed Unity into existing Android applications."),(0,r.kt)("li",{parentName:"ul"},"Launcher module: Contains the application\u2019s name and all of its icons. This is a simple Android application module that launches Unity. You can replace it with your own application.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6587\u4ef6")),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"build.gradle"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The base Gradle file that affects all modules in the Gradle project. It specifies which Android Gradle Plugin version to use and locations of java plugins. The locations are a combination of online repositories and java plugins inside of this project. To influence the contents of this file, provide a custom ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Base Gradle Template"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"gradle.properties"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Gradle project file that configures how to build the application. Unity also adds the names of assets inside the ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/asset-workflow/scripting-assets/streaming-assets"}),"Streaming Assets")," directory and specifies that these assets should be in the final application and Gradle shouldn\u2019t compress them. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To influence the contents of this file, provide a custom ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Gradle Properties Template"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"For information on the properties this file can contain, see ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.android.com/studio/build#properties-files"}),"Gradle property files"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"launcher"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A directory that contains the ",(0,r.kt)("a",a({parentName:"td"},{href:"#launcher-module"}),"launcher module")," and everything related to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0build.gradle"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Gradle project build.gradle file that describes how to build the launcher module and includes a list of dependencies to include in the build. In Unity, the launcher module depends on the ",(0,r.kt)("a",a({parentName:"td"},{href:"#unity-library-module"}),"unityLibrary")," module which means unityLibrary is built and included in the final result when building the launcher module. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To influence the contents of this file, provide a custom ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Launcher Gradle Template"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0src"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains the launcher module\u2019s source code and resources. Unity places the source code and resources in the ",(0,r.kt)("inlineCode",{parentName:"td"},"main")," subdirectory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0main"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains the launcher module\u2019s source code and resources. Unity only supports the main source set. For more information about source sets, see ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.android.com/studio/build/build-variants#sourcesets"}),"Create source sets"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0AndroidManifest.xml"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project file that Unity merges into the final ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-introducing/android-manifest"}),"Android App Manifest"),". It contains settings specific to the launcher module. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Important")," : If multiple manifest files specify different values for the same setting, the manifest merging process fails and you must fix it manually. You can specify rules for the manifest merger to automatically decide how to solve merge conflicts. For information on how to do this, see ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.android.com/studio/build/manage-manifests"}),"Manage manifest files"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"For information on how to influence the contents of this file, see the ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-building-and-delivering/overriding-android-manifest"}),"Override the Android App Manifest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0jniLibs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains native code libraries that the launcher module uses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0res"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains resources to include in the final application. The resources are application icons, text that the application accesses at runtime, and application style descriptions. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To specify the resources in this directory, set application icons and the project name in the ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android"}),"Android Player Settings"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"local.properties"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project file that configures the environment of the build system. Unity specifies the path to SDK and NDK here so that by default, the exported Gradle project uses the same SDK and NDK that the Unity Editor used. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"For information on the properties this file can contain, see ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.android.com/studio/build#properties-files"}),"Gradle property files"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"settings.gradle"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project file that specifies all of the modules that make up this Android Gradle project. In projects that Unity exports, this usually only specifies the  ",(0,r.kt)("strong",{parentName:"td"},"launcher"),"  and  ",(0,r.kt)("strong",{parentName:"td"},"unityLibrary"),"  modules. However, if the Unity project uses Play Asset Delivery","]","(play-asset-delivery.html), each asset pack is a separate module, so this file lists them too. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To influence the contents of this file, copy the ",(0,r.kt)("inlineCode",{parentName:"td"},"settingsTemplate.gradle")," file in the ",(0,r.kt)("inlineCode",{parentName:"td"},"PlaybackEngines/AndroidPlayer/Tools/GradleTemplates/"),"directory into ",(0,r.kt)("inlineCode",{parentName:"td"},"Assets/Plugins/Android")," in your Unity project. You can then append your custom modifications to this file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"unityLibrary"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A directory that contains the ",(0,r.kt)("a",a({parentName:"td"},{href:"#unity-library-module"}),"unityLibrary module")," and everything related to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0build.gradle"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Gradle project build.gradle file that describes how to build the unityLibrary module and includes a list of dependencies to include in the build. In Unity, the unityLibrary module depends on all of the ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-developing/plugins-for-android/plugins-for-android"}),"plug-ins")," in the Unity project. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To influence the contents of this file, provide a custom ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Main Gradle Template"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0libs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A common Android Gradle project directory that stores ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-developing/plugins-for-android/android-aarplugins"}),"Android Archive")," (.aar) and ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-developing/plugins-for-android/android-jarplugins"}),"Java Archive")," (.jar) plug-ins for the unityLibrary module. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"For exported Unity projects, this contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"unity-classes.jar")," as well as all .jar and .aar plugins in the Unity project. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note")," : This directory does not contain ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-developing/plugins-for-android/android-aarplugins"}),"Android Library Projects")," plug-ins. Instead, Unity copies these into the Gradle project as separate modules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0unity-classes.jar"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A Unity-specific java plugin that contains java code that the Unity engine uses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0proguard-unity.txt"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A Unity-specific file that contains ProGuard configurations for Unity java code (code in unity-classes.jar plugin). Configurations are effective when Minification is enabled in Player settings (or if it is enabled by manually modifying gradle build files).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0src"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains the unityLibrary module\u2019s source code and resources. Unity places the source code and resources in the ",(0,r.kt)("inlineCode",{parentName:"td"},"main")," subdirectory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0main"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains the unityLibrary module\u2019s source code and resources. Unity only supports the main source set. For more information about source sets, see ",(0,r.kt)("a",a({parentName:"td"},{href:"https://developer.android.com/studio/build/build-variants#sourcesets"}),"Create source sets"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0AndroidManifest.xml"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project file that Unity merges into the final ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-introducing/android-manifest"}),"Android App Manifest"),". It contains settings specific to the unityLibrary module. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To influence the contents of this file, provide a custom ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Custom Main Manifest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0assets"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle directory that contains project assets. Unity places the Unity project\u2019s resources in the ",(0,r.kt)("inlineCode",{parentName:"td"},"bin")," subdirectory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0bin"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that Unity adds all of the Unity project\u2019s resources to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0java"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains uncompiled java source files for the unityLibrary module. Unity only uses this directory to store the UnityPlayerActivity source file. For information on how to extend UnityPlayerActivity, see ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-developing/plugins-for-android/android-unity-player-activity"}),"Extending the UnityPlayerActivity Java Code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0jniLibs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains native code libraries that the unityLibrary module uses. Unity places the ",(0,r.kt)("inlineCode",{parentName:"td"},"libil2cpp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"libmain"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"libunity")," Unity engine libraries in this directory. Unity also places any ","[","Native (C++) plug-ins(AndroidNativePlugins) in this directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\xa0\xa0\xa0\xa0\xa0\xa0res"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A standard Android Gradle project directory that contains resources to include in the final application. For exported Unity projects, the ",(0,r.kt)("inlineCode",{parentName:"td"},"res")," directory for the unityLibrary module only contains style descriptions that the unityLibrary module uses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"proguard-user.txt"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"This is a Unity project specific file which contains ProGuard configurations for the project\u2019s java code and 3rd party java plug-ins. Just like ",(0,r.kt)("inlineCode",{parentName:"td"},"ProGuard-unity.txt")," Gradle uses it if you enable minification. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"To create this file, enable  ",(0,r.kt)("strong",{parentName:"td"},"Custom Proguard File"),"  in the ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/platform-specific/android/android-getting-started/class-player-settings-android#publishing-settings"}),"Android Player Settings"),".")))))}c.isMDXComponent=!0}}]);