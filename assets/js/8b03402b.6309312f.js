"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82928],{35318:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18003:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={id:"2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",slug:"/unity2d/physics2dreference/joints2d/class-slider-joint2d"},l="2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",p={unversionedId:"unity/unity2d/physics2dreference/joints2d/2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",id:"version-Unity@2022.1/unity/unity2d/physics2dreference/joints2d/2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",title:"2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",description:"\u6b64\u5173\u8282\u5141\u8bb8\u7531\u521a\u4f53\u7269\u7406\u7ec4\u4ef6\u63a7\u5236\u7684\u6e38\u620f\u5bf9\u8c61\u6cbf\u7740\u7a7a\u95f4\u4e2d\u7684\u4e00\u6761\u7ebf\u6ed1\u52a8\uff08\u4f8b\u5982\u6ed1\u95e8\uff09\u3002\u5bf9\u8c61\u53ef\u4ee5\u6cbf\u7740\u7ebf\u81ea\u7531\u79fb\u52a8\u4ee5\u54cd\u5e94\u78b0\u649e\u6216\u4f5c\u7528\u529b\uff0c\u6216\u8005\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7535\u52a8\u529b\u79fb\u52a8\uff0c\u5e76\u65bd\u52a0\u9650\u5236\u4ee5\u4f7f\u5176\u4f4d\u7f6e\u4fdd\u6301\u5728\u7ebf\u7684\u67d0\u4e2a\u90e8\u5206\u4e4b\u5185\u3002",source:"@site/versioned_docs/version-Unity@2022.1/unity/unity2d/physics2dreference/joints2d/class-slider-joint2d.md",sourceDirName:"unity/unity2d/physics2dreference/joints2d",slug:"/unity2d/physics2dreference/joints2d/class-slider-joint2d",permalink:"/docs/unity2d/physics2dreference/joints2d/class-slider-joint2d",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)",slug:"/unity2d/physics2dreference/joints2d/class-slider-joint2d"},sidebar:"unity",previous:{title:"2D \u76f8\u5bf9\u5173\u8282 (Relative Joint 2D)",permalink:"/docs/unity2d/physics2dreference/joints2d/class-relative-joint2d"},next:{title:"2D \u5f39\u7c27\u5173\u8282 (Spring Joint 2D)",permalink:"/docs/unity2d/physics2dreference/joints2d/class-spring-joint2d"}},d={},s=[{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],c={toc:s};function u(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"2d-\u6ed1\u52a8\u5173\u8282-slider-joint-2d"}),"2D \u6ed1\u52a8\u5173\u8282 (Slider Joint 2D)"),(0,r.kt)("p",null,"\u6b64\u5173\u8282\u5141\u8bb8\u7531\u521a\u4f53\u7269\u7406\u7ec4\u4ef6\u63a7\u5236\u7684\u6e38\u620f\u5bf9\u8c61\u6cbf\u7740\u7a7a\u95f4\u4e2d\u7684\u4e00\u6761\u7ebf\u6ed1\u52a8\uff08\u4f8b\u5982\u6ed1\u95e8\uff09\u3002\u5bf9\u8c61\u53ef\u4ee5\u6cbf\u7740\u7ebf\u81ea\u7531\u79fb\u52a8\u4ee5\u54cd\u5e94\u78b0\u649e\u6216\u4f5c\u7528\u529b\uff0c\u6216\u8005\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7535\u52a8\u529b\u79fb\u52a8\uff0c\u5e76\u65bd\u52a0\u9650\u5236\u4ee5\u4f7f\u5176\u4f4d\u7f6e\u4fdd\u6301\u5728\u7ebf\u7684\u67d0\u4e2a\u90e8\u5206\u4e4b\u5185\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",a({parentName:"p"},{src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SliderJoint2DInspector.png",alt:"SliderJoint2DInspector.png"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Enable Collision")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8fde\u63a5\u7684\u4e24\u4e2a\u5bf9\u8c61\u80fd\u5426\u76f8\u4e92\u78b0\u649e\uff1f\u9009\u4e2d\u6b64\u590d\u9009\u6846\u8868\u793a\u201c\u80fd\u201d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Connected Rigid Body")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5728\u6b64\u5904\u6307\u5b9a\u8be5\u5173\u8282\u8fde\u63a5\u5230\u7684\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002\u5982\u679c\u5c06\u6b64\u5c5e\u6027\u4fdd\u7559\u4e3a  ",(0,r.kt)("strong",{parentName:"td"},"None")," \uff0c\u6b64\u5173\u8282\u7684\u53e6\u4e00\u7aef\u5c06\u56fa\u5b9a\u5230\u7a7a\u95f4\u4e2d\u7531 ",(0,r.kt)("strong",{parentName:"td"},"Connected Anchor"),"  \u8bbe\u7f6e\u6240\u5b9a\u4e49\u7684\u70b9\u3002\u9009\u62e9\u5b57\u6bb5\u53f3\u4fa7\u7684\u5706\u5708\u53ef\u67e5\u770b\u8981\u8fde\u63a5\u5230\u7684\u5bf9\u8c61\u7684\u5217\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Auto Configure Connected Anchor")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u9009\u4e2d\u6b64\u6846\u53ef\u4e3a\u8be5\u5173\u8282\u8fde\u63a5\u5230\u7684\u53e6\u4e00\u4e2a\u5bf9\u8c61\u81ea\u52a8\u8bbe\u7f6e\u951a\u70b9\u4f4d\u7f6e\u3002\uff08\u9009\u4e2d\u6b64\u6846\u5c06\u65e0\u9700\u586b\u5199  ",(0,r.kt)("strong",{parentName:"td"},"Connected Anchor"),"  \u5b57\u6bb5\u3002\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Anchor")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The place (in terms of X, Y co-ordinates on the  ",(0,r.kt)("strong",{parentName:"td"},"RigidBody")," ) where the end point of the joint connects to ",(0,r.kt)("em",{parentName:"td"},"this")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Connected Anchor")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The place (in terms of X, Y co-ordinates on the  ",(0,r.kt)("strong",{parentName:"td"},"RigidBody")," ) where the end point of the joint connects to ",(0,r.kt)("em",{parentName:"td"},"the other")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Auto Configure Angle")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Check this box to automtically detect the angle between the two objects and set it as the angle that the joint keeps between the two objects. (By selecting this, you don\u2019t need to manually specify the angle.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Angle")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enter the the angle that the joint keeps between the two objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Use Motor")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Use the sliding motor? Check the box for yes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Motor")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Motor Speed")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Target motor speed (m/sec).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Maximum Motor Force")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The maximum force the motor can apply while attempting to reach the target speed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Use Limits")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Should there be limits to the linear (straight line) force? Check the box for yes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Translation Limits")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Lower Translation")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The minimum distance the object can be from the connected anchor point.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Upper Translation")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The maximum distance the object can be from the connected anchor point.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Break Force")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the linear (straight line) force level needed to break and so delete the joint.  ",(0,r.kt)("strong",{parentName:"td"},"Infinity"),"  means it is unbreakable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Break Torque")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the torque (rotation) level needed to break and so delete the joint.  ",(0,r.kt)("strong",{parentName:"td"},"Infinity"),"  means it is unbreakable.")))),(0,r.kt)("h2",a({},{id:"\u8be6\u7ec6\u4fe1\u606f"}),"\u8be6\u7ec6\u4fe1\u606f"),(0,r.kt)("p",null,"\uff08\u53e6\u8bf7\u53c2\u9605 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/unity2d/physics2dreference/joints2d/joints2d"}),"2D \u5173\u8282"),"\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"\u8be6\u60c5\u548c\u63d0\u793a"),"\u4ee5\u4e86\u89e3\u6240\u6709 2D \u5173\u8282\u7684\u6709\u7528\u80cc\u666f\u4fe1\u606f\u3002\uff09"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u5173\u8282\u4f7f\u5bf9\u8c61\u6ed1\u52a8\uff01\u6b64\u5173\u8282\u7684\u76ee\u7684\u662f\u5728\u53ef\u5ef6\u4f38\u5230\u65e0\u7a77\u8fdc\u7684\u4e00\u6761\u53ef\u914d\u7f6e\u7ebf\u4e0a\u4fdd\u6301\u4e24\u70b9\u7684\u4f4d\u7f6e\u3002\u8fd9\u4e24\u4e2a\u70b9\u53ef\u4ee5\u662f\u4e24\u4e2a  ",(0,r.kt)("strong",{parentName:"p"},"2D \u521a\u4f53")," \u7ec4\u4ef6\uff0c\u6216\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"2D \u521a\u4f53")," \u7ec4\u4ef6\u548c\u4e16\u754c\u4e2d\u7684\u4e00\u4e2a\u56fa\u5b9a\u4f4d\u7f6e\u3002\uff08\u5c06  ",(0,r.kt)("strong",{parentName:"p"},"Connected Rigidbody"),"  \u8bbe\u7f6e\u4e3a None\uff0c\u5373\u53ef\u8fde\u63a5\u5230\u4e16\u754c\u4e2d\u7684\u56fa\u5b9a\u4f4d\u7f6e\uff09\u3002"),(0,r.kt)("p",null,"\u6b64\u5173\u8282\u5bf9\u4e24\u4e2a\u8fde\u63a5\u521a\u4f53\u5bf9\u8c61\u65bd\u52a0\u7ebf\u6027\u529b\uff0c\u4f7f\u8fd9\u4e9b\u5bf9\u8c61\u4fdd\u6301\u5728\u8fd9\u6761\u7ebf\u4e0a\u3002\u6b64\u5173\u8282\u8fd8\u6709\u4e00\u4e2a\u6a21\u62df\u7684\u7ebf\u6027\u7535\u673a\u53ef\u65bd\u52a0\u7ebf\u6027\u529b\uff0c\u4ece\u800c\u6cbf\u7740\u8fd9\u6761\u7ebf\u79fb\u52a8\u521a\u4f53\u5bf9\u8c61\u3002\u7535\u673a\u53ef\u4ee5\u5173\u95ed\u6216\u5f00\u542f\u3002\u867d\u7136\u8fd9\u6761\u7ebf\u65e0\u9650\u957f\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Translation Limits"),"  \u9009\u9879\u6765\u4ec5\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e00\u6bb5\u7ebf\u3002"),(0,r.kt)("p",null,"\u6b64\u5173\u8282\u540c\u65f6\u6709\u4e09\u4e2a\u7ea6\u675f\u3002\u6240\u6709\u7ea6\u675f\u5747\u4e3a\u53ef\u9009\u7ea6\u675f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0e\u4e24\u4e2a\u521a\u4f53\u5bf9\u8c61\u4e0a\u4e24\u4e2a\u951a\u70b9\u4e4b\u95f4\u7684\u4e00\u6761\u6307\u5b9a\u7ebf\u4fdd\u6301\u76f8\u5bf9\u7ebf\u6027\u8ddd\u79bb\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6cbf\u7740\u6307\u5b9a\u7ebf\u5728\u4e24\u4e2a\u521a\u4f53\u5bf9\u8c61\u4e0a\u7684\u4e24\u4e2a\u951a\u70b9\u4e4b\u95f4\u4fdd\u6301\u7ebf\u901f\u5ea6\u3002\uff08\u901f\u5ea6\u53d7\u9650\u4e8e\u6700\u5927\u529b\u3002\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6cbf\u7740\u6307\u5b9a\u7ebf\u5728\u4e24\u4e2a\u70b9\u4e4b\u95f4\u4fdd\u6301\u7ebf\u6027\u8ddd\u79bb\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4f8b\u5982\uff1a")," "))),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u5173\u8282\u6784\u5efa\u7684\u7269\u7406\u5bf9\u8c61\u5c31\u597d\u50cf\u662f\u8fd9\u4e9b\u5bf9\u8c61\u5728\u4e00\u6761\u7ebf\u4e0a\u8fde\u63a5\u5728\u4e00\u8d77\u4e00\u6837\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u4ee5\u4e0a\u4e0b\u79fb\u52a8\u7684\u5e73\u53f0\u3002\u6709\u7269\u4f53\u843d\u5728\u5e73\u53f0\u4e0a\u65f6\uff0c\u5e73\u53f0\u4f1a\u5411\u4e0b\u79fb\u52a8\uff0c\u4f46\u662f\u7edd\u4e0d\u80fd\u4fa7\u5411\u79fb\u52a8\u3002\u53ef\u4f7f\u7528\u6b64\u5173\u8282\u6765\u786e\u4fdd\u5e73\u53f0\u7684\u5411\u4e0a\u6216\u5411\u4e0b\u79fb\u52a8\u7edd\u4e0d\u4f1a\u8d85\u51fa\u7279\u5b9a\u9650\u503c\u3002\u4f7f\u7528\u7535\u673a\u53ef\u5c06\u5e73\u53f0\u4e0a\u79fb\u3002")))}u.isMDXComponent=!0}}]);