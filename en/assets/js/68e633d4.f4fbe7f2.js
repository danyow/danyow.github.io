"use strict";(self.webpackChunkdanyow_github_io=self.webpackChunkdanyow_github_io||[]).push([[1843],{8762:function(e,t,a){a.r(t),t.default={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"}},7676:function(e,t,a){a.r(t),t.default={sectionTitle:"sectionTitle_gpPX",list:"list_H0en",listItem:"listItem_KhP1",version:"version_eAdG",name:"name_omfq"}},3304:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const l=a(655),u=l.__importDefault(a(7294)),n=l.__importDefault(a(2295)),d=l.__importDefault(a(1596)),r=l.__importDefault(a(8762));function c({to:e,children:t}){return u.default.createElement(d.default,{className:r.default.navlink,isNavLink:!0,to:e,exact:!0,activeStyle:{backgroundColor:"#363739"}},t)}t.default=function({children:e}){return u.default.createElement(u.default.Fragment,null,u.default.createElement(n.default,null,u.default.createElement("html",{lang:"en"}),u.default.createElement("title",null,"Docusaurus debug panel")),u.default.createElement("div",null,u.default.createElement("nav",{className:r.default.nav},u.default.createElement(c,{to:"/__docusaurus/debug"},"Config"),u.default.createElement(c,{to:"/__docusaurus/debug/metadata"},"Metadata"),u.default.createElement(c,{to:"/__docusaurus/debug/registry"},"Registry"),u.default.createElement(c,{to:"/__docusaurus/debug/routes"},"Routes"),u.default.createElement(c,{to:"/__docusaurus/debug/content"},"Content"),u.default.createElement(c,{to:"/__docusaurus/debug/globalData"},"Global data")),u.default.createElement("main",{className:r.default.container},e)))}},3521:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});const l=a(655),u=l.__importDefault(a(7294)),n=l.__importDefault(a(3304)),d=l.__importDefault(a(397)),r=l.__importDefault(a(7676));t.default=function(){const{siteMetadata:e}=(0,d.default)();return u.default.createElement(n.default,null,u.default.createElement("h2",null,"Site Metadata"),u.default.createElement("div",null,"Docusaurus Version: ",u.default.createElement("code",null,e.docusaurusVersion)),u.default.createElement("div",null,"Site Version:"," ",u.default.createElement("code",null,e.siteVersion||"No version specified")),u.default.createElement("h3",{className:r.default.sectionTitle},"Plugins and themes"),u.default.createElement("ul",{className:r.default.list},Object.entries(e.pluginVersions).map((([e,t])=>u.default.createElement("li",{key:e,className:r.default.listItem},"package"===t.type&&t.version&&u.default.createElement("div",{className:r.default.version},u.default.createElement("code",null,t.version)),u.default.createElement("div",{className:r.default.name},e),u.default.createElement("div",null,"Type: ",t.type))))))}}}]);