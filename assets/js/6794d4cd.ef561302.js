"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3102],{2812:function(e,t,a){a.r(t),t.default={container:"container_LJlz",nav:"nav_ZFRq",navlink:"navlink_VL2M",active:"active_L_yI"}},357:function(e,t,a){a.r(t),t.default={list:"list_UgWZ",listItem:"listItem_NMpz"}},7574:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const l=a(9312),u=l.__importDefault(a(7378)),n=l.__importDefault(a(1060)),d=l.__importDefault(a(4938)),r=l.__importDefault(a(2812));function c({to:e,children:t}){return u.default.createElement(d.default,{className:r.default.navlink,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},t)}t.default=function({children:e}){return u.default.createElement(u.default.Fragment,null,u.default.createElement(n.default,null,u.default.createElement("html",{lang:"en"}),u.default.createElement("title",null,"Docusaurus debug panel")),u.default.createElement("div",null,u.default.createElement("nav",{className:r.default.nav},u.default.createElement(c,{to:"/__docusaurus/debug"},"Config"),u.default.createElement(c,{to:"/__docusaurus/debug/metadata"},"Metadata"),u.default.createElement(c,{to:"/__docusaurus/debug/registry"},"Registry"),u.default.createElement(c,{to:"/__docusaurus/debug/routes"},"Routes"),u.default.createElement(c,{to:"/__docusaurus/debug/content"},"Content"),u.default.createElement(c,{to:"/__docusaurus/debug/globalData"},"Global data")),u.default.createElement("main",{className:r.default.container},e)))}},5230:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const l=a(9312),u=l.__importDefault(a(7378)),n=l.__importDefault(a(7574)),d=l.__importDefault(a(6696)),r=l.__importDefault(a(357));t.default=function(){return u.default.createElement(n.default,null,u.default.createElement("h2",null,"Registry"),u.default.createElement("ul",{className:r.default.list},Object.values(d.default).map((([,e,t])=>u.default.createElement("li",{key:e,className:r.default.listItem},u.default.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",u.default.createElement("code",null,e)),u.default.createElement("div",null,"Resolved Path: ",u.default.createElement("code",null,t)))))))}}}]);