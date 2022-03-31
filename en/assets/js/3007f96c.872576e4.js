"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67351],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});n(27378);var a=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"Gradle templates",slug:"/platform-specific/android/android-building-and-delivering/gradle-templates"},d="Gradle templates",o={unversionedId:"unity/platform-specific/android/android-building-and-delivering/Gradle templates",id:"version-Unity@2022.1/unity/platform-specific/android/android-building-and-delivering/Gradle templates",title:"Gradle templates",description:"Gradle templates configure how to build an Android application using Gradle. Each Gradle template represents a single Gradle project. Gradle projects can include, and depend on, other Gradle projects.",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/android/android-building-and-delivering/gradle-templates.md",sourceDirName:"unity/platform-specific/android/android-building-and-delivering",slug:"/platform-specific/android/android-building-and-delivering/gradle-templates",permalink:"/en/docs/platform-specific/android/android-building-and-delivering/gradle-templates",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/platform-specific/android/android-building-and-delivering/gradle-templates.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Gradle templates",slug:"/platform-specific/android/android-building-and-delivering/gradle-templates"},sidebar:"unity",previous:{title:"Exporting an Android project",permalink:"/en/docs/platform-specific/android/android-building-and-delivering/android-export-process"},next:{title:"Override the Android App Manifest",permalink:"/en/docs/platform-specific/android/android-building-and-delivering/overriding-android-manifest"}},p={},s=[{value:"Gradle template files",id:"gradle-template-files",level:2},{value:"Using a custom Gradle template",id:"using-a-custom-gradle-template",level:2},{value:"build.gradle",id:"buildgradle",level:3},{value:"Template variables",id:"template-variables",level:4},{value:"settings.gradle",id:"settingsgradle",level:3},{value:"Modifying the exported Gradle project using C#",id:"modifying-the-exported-gradle-project-using-c",level:2}],u={toc:s};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"gradle-templates"}),"Gradle templates"),(0,a.kt)("p",null,"Gradle templates configure how to build an Android application using ",(0,a.kt)("a",r({parentName:"p"},{href:"/en/docs/platform-specific/android/android-introducing/android-gradle-overview"}),"Gradle"),". Each Gradle template represents a single Gradle project. Gradle projects can include, and depend on, other Gradle projects."),(0,a.kt)("h2",r({},{id:"gradle-template-files"}),"Gradle template files"),(0,a.kt)("p",null,"Gradle \u6a21\u677f\u5305\u542b\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"File"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u6240\u5728\u5730"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5305\u542b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"baseProjectTemplate.gradle")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u5bfc\u51fa\u7684\u9879\u76ee\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"root/build.gradle")," \u6587\u4ef6\u5939"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Configuration information that affects all modules in the final Gradle project. It specifies which Android Gradle Plugin version to use and locations of java plugins. The locations are a combination of online repositories and java plugins inside of this project.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"launcherTemplate.gradle_")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"In the exported project, ",(0,a.kt)("inlineCode",{parentName:"td"},"root/launcher/build.gradle")," folder"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Instructions on how to build the Android application. This includes bundling, signing, and whether to split the apk. It depends on the unityLibrary project and outputs either an .apk file or an app bundle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mainTemplate.gradle")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u5bfc\u51fa\u7684\u9879\u76ee\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"root/unityLibrary/build.gradle")," \u6587\u4ef6\u5939"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Instructions on how to build Unity as a Library. This outputs an .aar file. You can override the Unity template with a custom template in the Unity Editor. See the Providing a custom Gradle build template section on this page for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"libTemplate.gradle")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u56e0\u60c5\u51b5\u800c\u5f02"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"If an ",(0,a.kt)("a",r({parentName:"td"},{href:"/en/docs/platform-specific/android/android-developing/plugins-for-android/android-aarplugins"}),"Android Library Project")," plug-in doesn\u2019t include a ",(0,a.kt)("inlineCode",{parentName:"td"},"build.gradle")," file, Unity uses the ",(0,a.kt)("inlineCode",{parentName:"td"},"libTemplate.gradle")," file as a template to generate one. After Unity generates the ",(0,a.kt)("inlineCode",{parentName:"td"},"build.gradle")," file, or if one already exists in the plug-in\u2019s directory, Unity copies the plug-in into the Gradle project.")))),(0,a.kt)("h2",r({},{id:"using-a-custom-gradle-template"}),"Using a custom Gradle template"),(0,a.kt)("p",null,"There are two ",(0,a.kt)("inlineCode",{parentName:"p"},".gradle")," files that control the Gradle build process for the unityLibrary module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle"),": Specifies build instructions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"settings.gradle"),": Contains the names of modules that the Gradle build system should include when it builds the project.project components that the instructions in the ",(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle")," file use in the build process.")),(0,a.kt)("h3",r({},{id:"buildgradle"}),"build.gradle"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file contains template variables that specify build instructions."),(0,a.kt)("p",null,"By default, Unity uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTemplate.gradle")," file from the Unity install directory to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file for the ",(0,a.kt)("a",r({parentName:"p"},{href:"/en/docs/platform-specific/android/android-introducing/android-gradle-overview#unity-library-module"}),"unityLibrary module"),". To create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTemplate.gradle")," file:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the Project Settings window (menu:  ",(0,a.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"li"},"Project Settings")," )."),(0,a.kt)("li",{parentName:"ol"},"Select the  ",(0,a.kt)("strong",{parentName:"li"},"Player"),"  tab then open ",(0,a.kt)("a",r({parentName:"li"},{href:"/en/docs/platform-specific/android/android-getting-started/class-player-settings-android"}),"Android Player Settings"),":",(0,a.kt)("br",null),(0,a.kt)("img",r({parentName:"li"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-player-settings-tab.png",alt:"android-player-settings-tab.png"}))),(0,a.kt)("li",{parentName:"ol"},"In the  ",(0,a.kt)("strong",{parentName:"li"},"Publishing Settings"),"  section, enable  ",(0,a.kt)("strong",{parentName:"li"},"Custom Main Gradle Template")," . This creates a Gradle template file called ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTemplate.gradle")," and displays the path to the file. Unity now uses this ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTemplate.gradle")," file to create the ",(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle")," file. For a list of template variables and a description of what each does, see ",(0,a.kt)("a",r({parentName:"li"},{href:"#template-variables"}),"Template variables"),".")),(0,a.kt)("h4",r({},{id:"template-variables"}),"Template variables"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mainTemplate.gradle")," \u6587\u4ef6\u53ef\u4ee5\u5305\u542b\u4ee5\u4e0b\u53d8\u91cf\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u53ef\u53d8")),(0,a.kt)("th",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"DEPS")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The list of project dependencies. This is the list of libraries that the project uses.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"APIVERSION")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The API version to build for. Unity sets the and  ",(0,a.kt)("strong",{parentName:"td"},"TARGETSDKVERSION"),"  to the same value ( ",(0,a.kt)("strong",{parentName:"td"},"Target API Level"),"  in the ",(0,a.kt)("a",r({parentName:"td"},{href:"/en/docs/platform-specific/android/android-getting-started/class-player-settings-android"}),"Android Player Settings"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"MINSDKVERSION")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The minimum API version that supports the application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"BUILDTOOLS")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The SDK build tools to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"TARGETSDKVERSION")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The API version to target. Unity sets the and  ",(0,a.kt)("strong",{parentName:"td"},"APIVERSION"),"  to the same value ( ",(0,a.kt)("strong",{parentName:"td"},"Target API Level"),"  in the ",(0,a.kt)("a",r({parentName:"td"},{href:"/en/docs/platform-specific/android/android-getting-started/class-player-settings-android"}),"Android Player Settings"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"APPLICATIONID")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Android Application ID. For example, com.mycompany.myapp.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"MINIFY","_","DEBUG")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indicates whether to minify debug builds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"PROGUARD","_","DEBUG")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indicates whether to use ProGuard for minification in debug builds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"MINIFY","_","RELEASE")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indicates whether to minify release builds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"PROGUARD","_","RELEASE")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indicates whether to use ProGuard for minification in release builds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"USER","_","PROGUARD")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Specifies a custom ProGuard file to use for minification.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"SIGN")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Complete the signingConfigs section if this build is signed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"SIGNCONFIG")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Indicates whether the build is signed. If this property is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"signingConfig.release"),", the build is signed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"DIR","_","GRADLEPROJECT")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Unity \u521b\u5efa Gradle \u9879\u76ee\u7684\u76ee\u5f55\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"DIR","_","UNITYPROJECT")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The directory of your Unity project.")))),(0,a.kt)("h3",r({},{id:"settingsgradle"}),"settings.gradle"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file contains project components used in the build process."),(0,a.kt)("p",null,"By default, Unity uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"settingsTemplate.gradle")," file from the Unity install directory to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file for your build. To create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"settingsTemplate.gradle")," file, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"settingsTemplate.gradle")," file in your project\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/Plugins/Android/")," folder. This overrides the default template."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"I")," f you create a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file, be aware of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unity creates the ",(0,a.kt)("inlineCode",{parentName:"li"},"launcher")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"unityLibrary")," components by default and you must include them in your ",(0,a.kt)("inlineCode",{parentName:"li"},"settingsTemplate.gradle")," file. To do this, add ",(0,a.kt)("inlineCode",{parentName:"li"},"include ':launcher', ':unityLibrary'")," as an entry to your ",(0,a.kt)("inlineCode",{parentName:"li"},"settingsTemplate.gradle"),"."),(0,a.kt)("li",{parentName:"ul"},"If you use Android Library plug-ins, Unity includes them in the final ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.gradle")," file by replacing the ",(0,a.kt)("inlineCode",{parentName:"li"},"**INCLUDES**")," entry. This means you must add ",(0,a.kt)("inlineCode",{parentName:"li"},"**INCLUDES**")," as an entry to your ",(0,a.kt)("inlineCode",{parentName:"li"},"settingsTemplate.gradle"),".")),(0,a.kt)("h2",r({},{id:"modifying-the-exported-gradle-project-using-c"}),"Modifying the exported Gradle project using C#"),(0,a.kt)("p",null,"To modify the Gradle project after Unity assembles it, create a class that inherits from ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Android.IPostGenerateGradleAndroidProject.html"}),"IPostGenerateGradleAndroidProject")," and override the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Android.IPostGenerateGradleAndroidProject.OnPostGenerateGradleAndroidProject.html"}),"OnPostGenerateGradleAndroidProject")," function. This function receives the path to the unityLibrary module as a parameter and you can use it to reach the application\u2019s manifest and resources through C# scripting."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Warning")," : Unity now uses an incremental build pipeline which means Unity reuses the same Gradle project for consecutive builds. This means that any modifications you do using this API accumulate since Unity no longer creates a new Gradle project for every build. For example, if you use this API to add an additional file to the Gradle project, the first build works as expected, but during the second build the file already exists. A second example is if you use this API to add a permission to a particular file. Each successive build adds another entry for the permission. It is crucial to make sure that modifications you want to make aren\u2019t already present in the build."))}m.isMDXComponent=!0}}]);