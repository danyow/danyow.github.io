"use strict";(self.webpackChunkdanyow_github_io=self.webpackChunkdanyow_github_io||[]).push([[9514,9864],{4847:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var a=n(7294),r=n(8790),l=n(8990),o=n(9235),c=n(6010),i=n(15);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e){return a.createElement("svg",s({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=n(7692),m="collapseSidebarButton_FykI",p="collapseSidebarButtonIcon_DTRl";function b({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",m),onClick:e},a.createElement(d,{className:p}))}var f=n(1596),h=n(5606),v=n(9543),g="menuHtmlItem_fVIQ",E="menuExternalLink_tcZa",_=n(980);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e){var{item:t}=e,n=y(e,["item"]);switch(t.type){case"category":return a.createElement(C,k({item:t},n));case"html":return a.createElement(I,k({item:t},n));default:return a.createElement(N,k({item:t},n))}}function C(e){var{item:t,onItemClick:n,activePath:r,level:l,index:i}=e,s=y(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:p,className:b,href:h}=t,v=function(e){const t=(0,_.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0),[e,t])}(t),g=(0,o._F)(t,r),E=(0,o.Mg)(h,r),{collapsed:S,setCollapsed:C}=(0,o.uR)({initialState:()=>!!p&&(!g&&t.collapsed)});!function({isActive:e,collapsed:t,setCollapsed:n}){const r=(0,o.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:S,setCollapsed:C});const{expandedItem:I,setExpandedItem:N}=(0,o.fP)();function T(e=!S){N(e?null:i),C(e)}const{autoCollapseSidebarCategories:O}=(0,o.LU)();return(0,a.useEffect)((()=>{p&&I&&I!==i&&O&&C(!0)}),[p,I,i,C,O]),a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},b)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},a.createElement(f.default,k({className:(0,c.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h,"menu__link--active":g}),onClick:p?e=>{null==n||n(t),h?T(!1):(e.preventDefault(),T())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":p?!S:void 0,href:p?null!=v?v:"#":v},s),m),h&&p&&a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),a.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(x,{items:d,tabIndex:S?-1:0,onItemClick:n,activePath:r,level:l+1})))}function I({item:e,level:t,index:n}){const{value:r,defaultStyle:l,className:i}=e;return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(t),l&&`${g} menu__list-item`,i),key:n,dangerouslySetInnerHTML:{__html:r}})}function N(e){var{item:t,onItemClick:n,activePath:r,level:l,index:i}=e,s=y(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:u,className:m}=t,p=(0,o._F)(t,r),b=(0,h.Z)(d);return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(f.default,k({className:(0,c.Z)("menu__link",!b&&E,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:d},b&&{onClick:n?()=>n(t):void 0},s),u,!b&&a.createElement(v.Z,null)))}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e){var{items:t}=e,n=O(e,["items"]);return a.createElement(o.D_,null,t.map(((e,t)=>a.createElement(S,T({key:t,item:e,index:t},n)))))}var x=(0,a.memo)(M),Z="menu_izAj",w="menuWithAnnouncementBar_l2a_";function P({path:e,sidebar:t,className:n}){const r=function(){const{isActive:e}=(0,o.nT)(),[t,n]=(0,a.useState)(e);return(0,o.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",Z,r&&w,n)},a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:t,activePath:e,level:1})))}var A=n(6775);function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}function j(){return a.createElement("div",{style:{border:"solid thin red",padding:10,textAlign:"center"}},"Sidebar Ad")}function F(e){const{pathname:t}=(0,A.TH)(),n=t.includes("/tests/");return a.createElement(a.Fragment,null,n&&a.createElement(j,null),a.createElement(P,L({},e)),n&&a.createElement(j,null))}var B="sidebar_RiAD",D="sidebarWithHideableNavbar_d0QC",H="sidebarHidden_Lg_2",R="sidebarLogo_YUvz";function W({path:e,sidebar:t,onCollapse:n,isHidden:r}){const{navbar:{hideOnScroll:l},hideableSidebar:s}=(0,o.LU)();return a.createElement("div",{className:(0,c.Z)(B,l&&D,r&&H)},l&&a.createElement(i.Z,{tabIndex:-1,className:R}),a.createElement(F,{path:e,sidebar:t}),s&&a.createElement(b,{onClick:n}))}var z=a.memo(W);const Y=({sidebar:e,path:t})=>{const n=(0,o.el)();return a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function q(e){return a.createElement(o.Zo,{component:Y,props:e})}var U=a.memo(q);function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},V.apply(this,arguments)}function G(e){const t=(0,o.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(z,V({},e)),r&&a.createElement(U,V({},e)))}var K=n(9e3),Q="backToTopButton_RiI4",X="backToTopButtonShow_ssHd";function $(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.call(e)}}}function J(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:r,cancelScrollToTop:l}=$();return(0,o.RF)((({scrollY:e},a)=>{const r=null==a?void 0:a.scrollY;if(!r)return;if(n.current)return void(n.current=!1);const o=e<r;if(o||l(),e<300)t(!1);else if(o){const n=document.documentElement.scrollHeight;e+window.innerHeight<n&&t(!0)}else t(!1)})),(0,o.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",o.kM.common.backToTopButton,Q,e&&X),type:"button",onClick:()=>r()})}var ee={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},te=n(7368);function ne({currentDocRoute:e,versionMetadata:t,children:n,sidebarName:r}){const i=(0,o.Vq)(),{pluginId:s,version:m}=t,[p,b]=(0,a.useState)(!1),[f,h]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{f&&h(!1),b((e=>!e))}),[f]);return a.createElement(a.Fragment,null,a.createElement(te.Z,{version:m,tag:(0,o.os)(s,m)}),a.createElement(l.Z,null,a.createElement("div",{className:ee.docPage},a.createElement(J,null),i&&a.createElement("aside",{className:(0,c.Z)(o.kM.docs.docSidebarContainer,ee.docSidebarContainer,p&&ee.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ee.docSidebarContainer)&&p&&h(!0)}},a.createElement(G,{key:r,sidebar:i,path:e.path,onCollapse:v,isHidden:f}),f&&a.createElement("div",{className:ee.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(d,{className:ee.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(ee.docMainContainer,(p||!i)&&ee.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ee.docItemWrapper,p&&ee.docItemWrapperEnhanced)},n)))))}function ae(e){const{route:{routes:t},versionMetadata:n,location:l}=e,i=t.find((e=>(0,A.LX)(l.pathname,e)));if(!i)return a.createElement(K.default,null);const s=i.sidebar,d=s?n.docsSidebars[s]:null;return a.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.docsPages,o.kM.page.docsDocPage,n.className)},a.createElement(o.qu,{version:n},a.createElement(o.bT,{sidebar:null!=d?d:null},a.createElement(ne,{currentDocRoute:i,versionMetadata:n,sidebarName:s},(0,r.H)(t,{versionMetadata:n})))))}},9e3:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(8990),l=n(7692),o=n(9235);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);