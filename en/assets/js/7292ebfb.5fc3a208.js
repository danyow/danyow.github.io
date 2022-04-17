"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8236],{5318:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7378);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=r.createContext({}),c=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(i.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,i=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),s=c(t),d=a,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||l;return t?r.createElement(m,o(o({ref:e},p),{},{components:t})):r.createElement(m,o({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=n,u.mdxType="string"==typeof n?n:a,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1340:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});t(7378);var r=t(5318);function a(){return a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}const o={},u="Lua",i={permalink:"/en/blog/2021/lua-learn",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/blog/2021/lua-learn.md",source:"@site/blog/2021/lua-learn.md",title:"Lua",description:"Lua \u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09",date:"2022-04-17T16:24:59.000Z",formattedDate:"April 17, 2022",tags:[],readingTime:4.865,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"Google Play Developer Publishing API",permalink:"/en/blog/2021/google-publishing-api"},nextItem:{title:"\u5b89\u88c5ArchWSL",permalink:"/en/blog/2021/archwsl"}},c={authorsImageUrls:[]},p=[{value:"Lua \u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09",id:"lua-\u7a0b\u5e8f\u8bbe\u8ba1\u7b2c-4-\u7248",level:2},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:3},{value:"\u6ce8\u91ca\u6280\u5de7",id:"\u6ce8\u91ca\u6280\u5de7",level:3},{value:"\u52a0\u8f7d\u6587\u4ef6",id:"\u52a0\u8f7d\u6587\u4ef6",level:3},{value:"\u5185\u5b58\u56de\u6536",id:"\u5185\u5b58\u56de\u6536",level:3},{value:"\u6d45\u6790lua\u5f02\u5e38\u6355\u83b7\u5904\u7406\u673a\u5236",id:"\u6d45\u6790lua\u5f02\u5e38\u6355\u83b7\u5904\u7406\u673a\u5236",level:3}],f={toc:p};function s(n){var{components:e}=n,t=l(n,["components"]);return(0,r.kt)("wrapper",a({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"lua-\u7a0b\u5e8f\u8bbe\u8ba1\u7b2c-4-\u7248"}),"Lua \u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09"),(0,r.kt)("h3",a({},{id:"\u8fd0\u7b97\u7b26"}),"\u8fd0\u7b97\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-lua"}),"local a = 15\nprint(a ^ 2) -- 225\n")),(0,r.kt)("h3",a({},{id:"\u6ce8\u91ca\u6280\u5de7"}),"\u6ce8\u91ca\u6280\u5de7"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-lua"}),'print("Hello world")\n\n--[[ \u52a0\u591a\u4e00\u4e2a`-`\u5c31\u53ef\u4ee5\u89e3\u5f00\u8fd9\u6bb5\u4ee3\u7801\u7684\u6ce8\u91ca\nprint("Hello world")\n--]]\n\n---[[\nprint("Hello world")\n--]]\n\n')),(0,r.kt)("h3",a({},{id:"\u52a0\u8f7d\u6587\u4ef6"}),"\u52a0\u8f7d\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-lua"}),"--- \u6253\u5f00\u6307\u5b9a\u7684\u6587\u4ef6\u5e76\u5c06\u5176\u5185\u5bb9\u4f5c\u4e3a Lua \u5757\u6267\u884c\u3002\n--- \u5f53\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\u65f6\uff0c`dofile` \u6267\u884c\u6807\u51c6\u8f93\u5165\uff08`stdin`\uff09\u7684\u5185\u5bb9\u3002\n--- \u8fd4\u56de\u5757\u8fd4\u56de\u7684\u6240\u6709\u503c\u3002\n--- \u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c`dofile` \u4f1a\u5c06\u9519\u8bef\u4f20\u64ad\u7ed9\u5b83\u7684\u8c03\u7528\u8005\uff08\u5373\uff0c`dofile` \u4e0d\u5728\u4fdd\u62a4\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff09\u3002\n---@overload fun():table\n---@param filename string\n---@return table\nfunction dofile(filename) end\n")),(0,r.kt)("h3",a({},{id:"\u5185\u5b58\u56de\u6536"}),"\u5185\u5b58\u56de\u6536"),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," \u8d4b\u503c\u7ed9\u5168\u5c40\u53d8\u91cf\u65f6, ",(0,r.kt)("inlineCode",{parentName:"p"},"Lua")," \u4f1a\u56de\u6536\u8be5\u5168\u5c40\u53d8\u91cf."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3b\u52a8\u5185\u5b58\u56de\u6536 \u8c03\u7528\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"collectgarbage()"))),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-lua"}),'---\n--- \u6b64\u51fd\u6570\u662f\u5783\u573e\u6536\u96c6\u5668\u7684\u901a\u7528\u63a5\u53e3\u3002\u5b83\u6839\u636e\u7b2c\u4e00\u4e2a\u53c2\u6570 `opt` \u6267\u884c\u4e0d\u540c\u7684\u529f\u80fd\uff1a\n---\n--- **"collect"**:      \u6267\u884c\u5b8c\u6574\u7684\u5783\u573e\u6536\u96c6\u5faa\u73af\u3002\u8fd9\u662f\u9ed8\u8ba4\u9009\u9879\u3002\n--- **"stop"**:         \u505c\u6b62\u5783\u573e\u6536\u96c6\u5668\u7684\u81ea\u52a8\u6267\u884c\u3002\u6536\u96c6\u5668\u4ec5\u5728\u663e\u5f0f\u8c03\u7528\u65f6\u8fd0\u884c\uff0c\u76f4\u5230\u8c03\u7528\u91cd\u65b0\u542f\u52a8\u5b83\u3002\n--- **"restart"**:      \u91cd\u65b0\u542f\u52a8\u5783\u573e\u6536\u96c6\u5668\u7684\u81ea\u52a8\u6267\u884c\u3002\n--- **"count"**:        \u4ee5\u5343\u5b57\u8282\u4e3a\u5355\u4f4d\u8fd4\u56de Lua \u4f7f\u7528\u7684\u603b\u5185\u5b58\u3002\n---               \u8be5\u503c\u6709\u4e00\u4e2a\u5c0f\u6570\u90e8\u5206\uff0c\u56e0\u6b64\u4e58\u4ee5 1024 \u7ed9\u51fa Lua \u4f7f\u7528\u7684\u786e\u5207\u5b57\u8282\u6570\uff08\u6ea2\u51fa\u9664\u5916\uff09\u3002\n--- **"step"**:         \u6267\u884c\u5783\u573e\u6536\u96c6\u6b65\u9aa4\u3002\u6b65\u957f\u201c\u5927\u5c0f\u201d\u7531`arg`\u63a7\u5236\u3002\n---               \u5bf9\u4e8e\u96f6\u503c\uff0c\u6536\u96c6\u5668\u5c06\u6267\u884c\u4e00\u4e2a\u57fa\u672c\uff08\u4e0d\u53ef\u5206\u5272\u7684\uff09\u6b65\u9aa4\u3002\n---               \u5bf9\u4e8e\u975e\u96f6\u503c\uff0c\u6536\u96c6\u5668\u5c06\u6267\u884c\u8be5\u5185\u5b58\u91cf\uff08\u4ee5\u5343\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u5df2\u7531 Lua \u5206\u914d\u3002\n---               \u5982\u679c\u8be5\u6b65\u9aa4\u5b8c\u6210\u4e86\u4e00\u4e2a\u6536\u96c6\u5468\u671f\uff0c\u5219\u8fd4\u56de `true`\u3002\n--- **"setpause"**:     \u5c06 `arg` \u8bbe\u7f6e\u4e3a\u6536\u96c6\u5668\u6682\u505c\u7684\u65b0\u503c\uff08\u53c2\u89c1\u7b2c 2.5 \u8282\uff09\u3002\u8fd4\u56de `pause` \u7684\u524d\u4e00\u4e2a\u503c\u3002\n--- **"incremental"**:  \u5c06\u6536\u96c6\u5668\u6a21\u5f0f\u66f4\u6539\u4e3a\u589e\u91cf\u3002\u6b64\u9009\u9879\u540e\u9762\u53ef\u4ee5\u8ddf\u4e09\u4e2a\u6570\u5b57\uff1a\u5783\u573e\u6536\u96c6\u5668\u6682\u505c\u3001\u6b65\u957f\u4e58\u6570\u548c\u6b65\u957f\u3002\n--- **"generational"**: \u5c06\u6536\u96c6\u5668\u6a21\u5f0f\u66f4\u6539\u4e3a\u5206\u4ee3\u3002\u6b64\u9009\u9879\u540e\u9762\u53ef\u4ee5\u8ddf\u4e24\u4e2a\u6570\u5b57\uff1a\u5783\u573e\u6536\u96c6\u5668\u6b21\u8981\u4e58\u6570\u548c\u4e3b\u8981\u4e58\u6570\u3002\n--- **"isrunning"**:    \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u544a\u8bc9\u6536\u96c6\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c\uff08\u5373\uff0c\u672a\u505c\u6b62\uff09\u3002\n---@overload fun():any\n---@param opt string\n---@param arg string\n---@return any\nfunction collectgarbage(opt, arg)\nend\n')),(0,r.kt)("h3",a({},{id:"\u6d45\u6790lua\u5f02\u5e38\u6355\u83b7\u5904\u7406\u673a\u5236"}),(0,r.kt)("a",a({parentName:"h3"},{href:"https://blog.csdn.net/mycwq/article/details/49256003"}),"\u6d45\u6790lua\u5f02\u5e38\u6355\u83b7\u5904\u7406\u673a\u5236")),(0,r.kt)("p",null,"lua \u6709\u4e24\u4e2a\u51fd\u6570\u53ef\u7528\u4e8e\u6355\u83b7\u5f02\u5e38\uff1apcall \u548c xpcall\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u5f88\u7c7b\u4f3c\uff0c\u90fd\u4f1a\u5728\u4fdd\u62a4\u6a21\u5f0f\u4e0b\u6267\u884c\u51fd\u6570\uff0c\u6548\u679c\u7c7b\u4f3c try-catch\uff0c\u53ef\u6355\u83b7\u5e76\u5904\u7406\u5f02\u5e38\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-lua"}),"--- \u5728\u4fdd\u62a4\u6a21\u5f0f\u4e0b\u4f7f\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u8c03\u7528\u51fd\u6570`f`\u3002\n--- \u8fd9\u610f\u5473\u7740`f` \u4e2d\u7684\u4efb\u4f55\u9519\u8bef\u90fd\u4e0d\u4f1a\u4f20\u64ad\uff1b\n--- \u76f8\u53cd\uff0c`pcall` \u4f1a\u6355\u83b7\u9519\u8bef\u5e76\u8fd4\u56de\u4e00\u4e2a\u72b6\u6001\u4ee3\u7801\u3002\n--- \u5b83\u7684\u7b2c\u4e00\u4e2a\u7ed3\u679c\u662f\u72b6\u6001\u4ee3\u7801\uff08\u4e00\u4e2a\u5e03\u5c14\u503c\uff09\uff0c\u5982\u679c\u8c03\u7528\u6210\u529f\u4e14\u6ca1\u6709\u9519\u8bef\uff0c\u5219\u4e3a\u771f\u3002\n--- \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c`pcall` \u8fd8\u4f1a\u5728\u7b2c\u4e00\u4e2a\u7ed3\u679c\u4e4b\u540e\u8fd4\u56de\u8c03\u7528\u7684\u6240\u6709\u7ed3\u679c\u3002\n--- \u5982\u679c\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\uff0c`pcall` \u8fd4\u56de false \u52a0\u4e0a\u9519\u8bef\u6d88\u606f\u3002\n---@overload fun(f:fun():any):boolean|table\n---@param f fun():any\n---@param arg1 table\n---@return boolean|table\nfunction pcall(f, arg1, ...)\nend\n\n--- \u8fd9\u4e2a\u51fd\u6570\u7c7b\u4f3c\u4e8e`pcall`\uff0c\u9664\u4e86\u5b83\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u5904\u7406\u7a0b\u5e8f`msgh`\u3002\n---@param f fun():any\n---@param msgh fun():string message handle\n---@return any\nfunction xpcall(f, msgh, arg1, ...)\nend\n")),(0,r.kt)("p",null,"\u5bf9\u6bd4\u4e24\u4e2a\u51fd\u6570\uff0cxpcall \u591a\u4e86\u4e00\u4e2a\u6d88\u606f\u5904\u7406\u53c2\u6570 msgh\u3002 \u5bf9\u4e8e pcall\uff0c\u5f02\u5e38\u5904\u7406\u5b8c\u65f6\u53ea\u7b80\u5355\u8bb0\u5f55\u9519\u8bef\u4fe1\u606f\uff0c\u7136\u540e\u91ca\u653e\u8c03\u7528\u6808\u7a7a\u95f4\uff0c \u800c\u5bf9\u4e8e xpcall\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u7528\u4e8e\u5728\u8c03\u7528\u6808\u91ca\u653e\u524d\u8ddf\u8e2a\u5230\u8fd9\u4e9b\u6570\u636e\u3002\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-Shell"}),"> f=function(...) error(...) end\n> pcall(f, 123)\nfalse   stdin:1: 123\n> xpcall(f, function(e) print(debug.traceback()) return e end, 123)\nstack traceback:\n        stdin:1: in function <stdin:1>\n        [C]: in function 'error'\n        stdin:1: in function 'f'\n        [C]: in function 'xpcall'\n        stdin:1: in main chunk\n        [C]: in ?\nfalse   stdin:1: 123\n")),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c msgh \u7684\u4f20\u5165\u53c2\u6570\u662f\u5f02\u5e38\u6570\u636e\uff0c\u51fd\u6570\u7ed3\u675f\u65f6\u5fc5\u987b\u5c06\u8fd9\u4e2a\u6570\u636e\u8fd4\u56de\uff0c\u624d\u80fd\u5b9e\u73b0\u548c pcall \u4e00\u6837\u7684\u8fd4\u56de\u503c"))}s.isMDXComponent=!0}}]);