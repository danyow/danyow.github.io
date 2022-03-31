"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36099],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},46922:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});r(27378);var n=r(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"Search for files",slug:"/search-overview/search-providers/search-files"},o="Search for files",s={unversionedId:"unity/search-overview/search-providers/Search for files",id:"version-Unity@2022.1/unity/search-overview/search-providers/Search for files",title:"Search for files",description:"The File Search Provider searches the file system to find files that match a specific pattern.",source:"@site/versioned_docs/version-Unity@2022.1/unity/search-overview/search-providers/search-files.md",sourceDirName:"unity/search-overview/search-providers",slug:"/search-overview/search-providers/search-files",permalink:"/en/docs/search-overview/search-providers/search-files",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/search-overview/search-providers/search-files.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Search for files",slug:"/search-overview/search-providers/search-files"},sidebar:"unity",previous:{title:"The calculator",permalink:"/en/docs/search-overview/search-providers/search-calculator"},next:{title:"Help Search Provider",permalink:"/en/docs/search-overview/search-providers/search-help"}},c={},p=[],u={toc:p};function h(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"search-for-files"}),"Search for files"),(0,n.kt)("p",null,"The File Search Provider searches the file system to find files that match a specific pattern."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Note:"),"  This search works without using the ",(0,n.kt)("inlineCode",{parentName:"p"},"find:")," search token."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"NOTE:"),"  This search requires a search token to execute it. You cannot make it an ",(0,n.kt)("a",a({parentName:"p"},{href:"/en/docs/search-overview/search-usage/search-filters#persistent-search-filters"}),"active Search Provider"),", or combine it with other Search Providers."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",a({parentName:"strong"},{href:"/en/docs/search-overview/search-usage/search-filters#search-tokens"}),"Search token"),":"),"  ",(0,n.kt)("inlineCode",{parentName:"p"},"find:")),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",a({parentName:"strong"},{href:"/en/docs/search-overview/search-usage/search-usage#default-actions"}),"Default action"),":"),"  Select the file."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",a({parentName:"strong"},{href:"/en/docs/search-overview/search-usage/search-usage#additional-actions"}),"Context menu actions"),":")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Action:"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u529f\u80fd\uff1a"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Select")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Selects the file in the  ",(0,n.kt)("strong",{parentName:"td"},"Project"),"  window.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Open:")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Opens the file, either in Unity or an external editor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Delete:")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Deletes the file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Copy Path")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Copies the path of the file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Reimport")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Reimports the file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Reveal")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Selects the file in the operating system\u2019s file browser.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u5c5e\u6027")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Opens the file\u2019s property settings.")))),(0,n.kt)("p",null,"Your search query can contain a C# regex to perform matching or glob expressions with the following wildcards. A glob expression is converted to a normal regex using the equivalency described in the table below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Glob wildcards"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u63cf\u8ff0"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u793a\u4f8b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Matches"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Does not match"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Equivalent regex"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"*"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"matches any number of any characters including none"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Law*"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Law, Laws, Lawyer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Groklaw, La, aw"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),".","*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"matches any single character including none"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Law."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Law, Laws"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"La, aw"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),".")))),(0,n.kt)("p",null,(0,n.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-provider-file.png",alt:"asset filter"})),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"p"},"File Search Provider")))}h.isMDXComponent=!0}}]);