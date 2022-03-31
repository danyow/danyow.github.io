"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63681],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,b=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});n(27378);var r=n(35318);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={layout:"post",title:"SSH Windows",tags:["Windows","\u7b14\u8bb0","ssh"],comments:!0,date:"2019-8-2 17:07:42 +0800",published:!0},l=void 0,s={permalink:"/en/blog/2019/ssh",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/blog/2019/ssh.mdx",source:"@site/blog/2019/ssh.mdx",title:"SSH Windows",description:"Title: Windows \u4e0b\u751f\u6210 ssh \u7528\u6765\u8fde\u63a5 git",date:"2019-08-02T17:07:42.000Z",formattedDate:"August 2, 2019",tags:[{label:"Windows",permalink:"/en/blog/tags/windows"},{label:"\u7b14\u8bb0",permalink:"/en/blog/tags/\u7b14\u8bb0"},{label:"ssh",permalink:"/en/blog/tags/ssh"}],readingTime:.395,truncated:!1,authors:[],frontMatter:{layout:"post",title:"SSH Windows",tags:["Windows","\u7b14\u8bb0","ssh"],comments:!0,date:"2019-8-2 17:07:42 +0800",published:!0},prevItem:{title:"Mac\u7684\u5305\u7ba1\u7406\u5de5\u5177brew",permalink:"/en/blog/2019/brew"},nextItem:{title:"Windows To Go",permalink:"/en/blog/2019/wtg"}},c={authorsImageUrls:[]},u=[{value:"\u751f\u6210",id:"\u751f\u6210",level:2}],p={toc:u};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Title: Windows \u4e0b\u751f\u6210 ",(0,r.kt)("em",{parentName:"p"},"ssh")," \u7528\u6765\u8fde\u63a5 ",(0,r.kt)("em",{parentName:"p"},"git")),(0,r.kt)("h2",o({},{id:"\u751f\u6210"}),"\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'ssh-keygen -t rsa -C "i.zuucol@gmail.com"')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u4ed6\u4f1a\u8be2\u95ee\u4f60\u8981\u5b58\u653e\u7684\u4f4d\u7f6e -> \u76f4\u63a5\u56de\u8f66\u5c31\u662f\u9ed8\u8ba4\u4f4d\u7f6e -> ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Users\\Danyow/.ssh/id_rsa")),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u8ba9\u4f60\u8f93\u5165\u5bc6\u7801 -> \u76f4\u63a5\u56de\u8f66\u5c31\u662f\u4e3a\u7a7a\u5373\u53ef"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u83b7\u53d6\u521a\u521a\u751f\u6210\u51fa\u6765\u7684\u516c\u94a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"cat C:\\Users\\Danyow\\.ssh\\id_rsa.pub"))))}f.isMDXComponent=!0}}]);