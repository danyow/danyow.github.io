"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{35318:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(27378);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=a(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||p;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var a=2;a<p;a++)o[a]=t[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77252:function(e,r,t){t.r(r),t.d(r,{assets:function(){return a},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});t(27378);var n=t(35318);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",slug:"/graphics/render-pipelines/srp-custom/srp-custom"},s="\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",c={unversionedId:"unity/graphics/render-pipelines/srp-custom/\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",id:"version-Unity@2022.1/unity/graphics/render-pipelines/srp-custom/\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",title:"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",description:"Unity \u63d0\u4f9b\u4e24\u79cd\u6839\u636e\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (SRP) \u9884\u6784\u5efa\u7684\u6e32\u67d3\u7ba1\u7ebf\uff1a\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP) \u548c\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)\u3002HDRP \u548c URP \u63d0\u4f9b\u5e7f\u6cdb\u7684\u5b9a\u5236\u9009\u9879\uff1b\u4f46\u662f\uff0c\u5982\u679c\u9700\u8981\u66f4\u591a\u5730\u63a7\u5236\u6e32\u67d3\u7ba1\u7ebf\uff0c\u53ef\u4ee5\u57fa\u4e8e SRP \u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/render-pipelines/srp-custom/srp-custom.md",sourceDirName:"unity/graphics/render-pipelines/srp-custom",slug:"/graphics/render-pipelines/srp-custom/srp-custom",permalink:"/docs/graphics/render-pipelines/srp-custom/srp-custom",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf",slug:"/graphics/render-pipelines/srp-custom/srp-custom"},sidebar:"unity",previous:{title:"\u5728\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u8c03\u5ea6\u548c\u6267\u884c\u6e32\u67d3\u547d\u4ee4",permalink:"/docs/graphics/render-pipelines/scriptable-render-pipeline/srp-using-scriptable-render-context"},next:{title:"\u5728\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u521b\u5efa\u6e32\u67d3\u7ba1\u7ebf\u8d44\u6e90\u548c\u6e32\u67d3\u7ba1\u7ebf\u5b9e\u4f8b",permalink:"/docs/graphics/render-pipelines/srp-custom/srp-creating-render-pipeline-asset-and-render-pipeline-instance"}},a={},u=[],l={toc:u};function d(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",i({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf"}),"\u521b\u5efa\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf"),(0,n.kt)("p",null,"Unity \u63d0\u4f9b\u4e24\u79cd\u6839\u636e\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (SRP) \u9884\u6784\u5efa\u7684\u6e32\u67d3\u7ba1\u7ebf\uff1a\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP) \u548c\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)\u3002HDRP \u548c URP \u63d0\u4f9b\u5e7f\u6cdb\u7684\u5b9a\u5236\u9009\u9879\uff1b\u4f46\u662f\uff0c\u5982\u679c\u9700\u8981\u66f4\u591a\u5730\u63a7\u5236\u6e32\u67d3\u7ba1\u7ebf\uff0c\u53ef\u4ee5\u57fa\u4e8e SRP \u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u8981\u521b\u5efa\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49 SRP\uff0c\u8981\u521b\u5efa URP \u6216 HDRP \u7684\u81ea\u5b9a\u4e49\u7248\u672c\uff0c\u6216\u8005\u8981\u6df1\u5165\u4e86\u89e3 SRP \u7684\u5de5\u4f5c\u539f\u7406\uff0c\u8bf7\u9605\u8bfb\u672c\u6587\u6863\u3002"),(0,n.kt)("p",null,"\u672c\u8282\u5305\u542b\u4ee5\u4e0b\u9875\u9762\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/graphics/render-pipelines/srp-custom/srp-custom-getting-started"}),"\u5f00\u59cb\u4f7f\u7528\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/graphics/render-pipelines/srp-custom/srp-creating-render-pipeline-asset-and-render-pipeline-instance"}),"\u521b\u5efa\u6e32\u67d3\u7ba1\u7ebf\u8d44\u6e90\u548c\u6e32\u67d3\u7ba1\u7ebf\u5b9e\u4f8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/graphics/render-pipelines/srp-custom/srp-creating-simple-render-loop"}),"\u5728\u81ea\u5b9a\u4e49\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u521b\u5efa\u7b80\u5355\u6e32\u67d3\u5faa\u73af"))))}d.isMDXComponent=!0}}]);