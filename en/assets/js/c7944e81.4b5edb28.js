"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79309],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(27378);var r=n(35318);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={layout:"post",title:"Python\u9ad8\u624b\u4e4b\u8def",tags:["\u7b14\u8bb0","python"],comments:!0,date:"2019-06-09 11:28:32 +0800",published:!0},l=void 0,p={permalink:"/en/blog/2019/python/inspect",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/blog/2019/python/inspect.mdx",source:"@site/blog/2019/python/inspect.mdx",title:"Python\u9ad8\u624b\u4e4b\u8def",description:"Title: \u7b2c\u4e09\u7248",date:"2019-06-09T11:28:32.000Z",formattedDate:"June 9, 2019",tags:[{label:"\u7b14\u8bb0",permalink:"/en/blog/tags/\u7b14\u8bb0"},{label:"python",permalink:"/en/blog/tags/python"}],readingTime:.34,truncated:!1,authors:[],frontMatter:{layout:"post",title:"Python\u9ad8\u624b\u4e4b\u8def",tags:["\u7b14\u8bb0","python"],comments:!0,date:"2019-06-09 11:28:32 +0800",published:!0},prevItem:{title:"\u65c5\u884c\u8005\u4e00\u53f7",permalink:"/en/blog/2019/voyager"},nextItem:{title:"\u5bf9\u5bf9\u5b50",permalink:"/en/blog/2019/poetry"}},c={authorsImageUrls:[]},u=[],s={toc:u};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Title: \u7b2c\u4e09\u7248"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10.1 \u751f\u6210\u5668")),(0,r.kt)("p",null,"\u67e5\u770b\u4e00\u4e2a\u51fd\u6570\u662f\u5426\u662f\u751f\u6210\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"isgeneratorfunction()")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-python"}),"import inspect\n\ninspect.isgeneratorfunction(foo)\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u751f\u6210\u5668\u7684\u5f53\u524d\u72b6\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"getgeneratorstate()")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GEN_CREATED"),"    \u7b49\u5f85\u88ab\u7b2c\u4e00\u6b21\u6267\u884c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GEN_RUNNING"),"    \u6b63\u5728\u88ab\u6267\u884c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GEN_SUSPENDED"),"  \u7b49\u5f85\u88ab ",(0,r.kt)("inlineCode",{parentName:"li"},"next()")," \u8c03\u7528"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GEN_CLOSED"),"     \u7ed3\u675f\u8fd0\u884c")))}f.isMDXComponent=!0}}]);