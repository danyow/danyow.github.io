"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96069],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=i.createContext({}),p=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=o,u=m["".concat(a,".").concat(g)]||m[g]||d[g]||r;return t?i.createElement(u,s(s({ref:n},c),{},{components:t})):i.createElement(u,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57515:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c}});t(27378);var i=t(35318);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"Server configuration code samples",slug:"/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples"},l="Server configuration code samples",a={unversionedId:"unity/platform-specific/webgl/webgl-building-distribution/Server configuration code samples",id:"version-Unity@2022.1/unity/platform-specific/webgl/webgl-building-distribution/Server configuration code samples",title:"Server configuration code samples",description:"The code samples below show how to configure your server when working with WebGL. The following samples apply to Nginx, Apache, and IIS servers. For further information on WebGL server configuration, see WebGL: Compressed builds and server configuration.",source:"@site/versioned_docs/version-Unity@2022.1/unity/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples.md",sourceDirName:"unity/platform-specific/webgl/webgl-building-distribution",slug:"/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples",permalink:"/en/docs/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples",editUrl:"https://github.com/danyow/danyow.github.io/edit/main/docs/unity/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples.md",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"Server configuration code samples",slug:"/platform-specific/webgl/webgl-building-distribution/webgl-server-configuration-code-samples"},sidebar:"unity",previous:{title:"Compressed builds and server configuration",permalink:"/en/docs/platform-specific/webgl/webgl-building-distribution/webgl-deploying"},next:{title:"WebGL templates",permalink:"/en/docs/platform-specific/webgl/webgl-building-distribution/webgl-templates"}},p={},c=[{value:"Server configuration for WebGL builds (Nginx)",id:"server-configuration-for-webgl-builds-nginx",level:2},{value:"WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (Apache)",id:"webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-apache",level:2},{value:"\u65e0\u89e3\u538b\u7f29\u56de\u9000\u7684\u538b\u7f29 WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (IIS)",id:"\u65e0\u89e3\u538b\u7f29\u56de\u9000\u7684\u538b\u7f29-webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-iis",level:2},{value:"\u672a\u538b\u7f29 WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (IIS)",id:"\u672a\u538b\u7f29-webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-iis",level:2}],d={toc:c};function m(e){var{components:n}=e,t=r(e,["components"]);return(0,i.kt)("wrapper",o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"server-configuration-code-samples"}),"Server configuration code samples"),(0,i.kt)("p",null,"The code samples below show how to configure your server when working with WebGL. The following samples apply to Nginx, Apache, and IIS servers. For further information on WebGL server configuration, see ",(0,i.kt)("a",o({parentName:"p"},{href:"/en/docs/platform-specific/webgl/webgl-building-distribution/webgl-deploying"}),"WebGL: Compressed builds and server configuration"),"."),(0,i.kt)("h2",o({},{id:"server-configuration-for-webgl-builds-nginx"}),"Server configuration for WebGL builds (Nginx)"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),"http {\n# ...\n\nserver {\n# Add the following config within http server configuration\n# ...\n \n# On-disk Brotli-precompressed data files should be served with compression enabled:\nlocation ~ .+\\.(data|symbols\\.json)\\.br$ {\n    # Because this file is already pre-compressed on disk, disable the on-demand compression on it.\n    # Otherwise nginx would attempt double compression.\n    gzip off;\n    add_header Content-Encoding br;\n    default_type application/octet-stream;\n}\n\n# On-disk Brotli-precompressed JavaScript code files:\nlocation ~ .+\\.js\\.br$ {\n    gzip off; # Do not attempt dynamic gzip compression on an already compressed file\n    add_header Content-Encoding br;\n    default_type application/javascript;\n}\n\n# On-disk Brotli-precompressed WebAssembly files:\nlocation ~ .+\\.wasm\\.br$ {\n    gzip off; # Do not attempt dynamic gzip compression on an already compressed file\n    add_header Content-Encoding br;\n    # Enable streaming WebAssembly compilation by specifying the correct MIME type for\n    # Wasm files.\n    default_type application/wasm;\n}\n\n# On-disk gzip-precompressed data files should be served with compression enabled:\nlocation ~ .+\\.(data|symbols\\.json)\\.gz$ {\n    gzip off; # Do not attempt dynamic gzip compression on an already compressed file\n    add_header Content-Encoding gzip;\n    default_type application/octet-stream;\n}\n\n# On-disk gzip-precompressed JavaScript code files:\nlocation ~ .+\\.js\\.gz$ {\n    gzip off; # Do not attempt dynamic gzip compression on an already compressed file\n    add_header Content-Encoding gzip;\n    default_type application/javascript;\n}\n\n# On-disk gzip-precompressed WebAssembly files:\nlocation ~ .+\\.wasm\\.gz$ {\n    gzip off; # Do not attempt dynamic gzip compression on an already compressed file\n    add_header Content-Encoding gzip;\n    # Enable streaming WebAssembly compilation by specifying the correct MIME type for\n    # Wasm files.\n    default_type application/wasm;\n}\n}\n}\n")),(0,i.kt)("h2",o({},{id:"webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-apache"}),"WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (Apache)"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'# This configuration file should be uploaded to the server as "&lt;Application Folder&gt;/Build/.htaccess"\n# NOTE: "mod_mime" Apache module must be enabled for this configuration to work.\n&lt;IfModule mod_mime.c&gt;\n\n# The following lines are required for builds without decompression fallback, compressed with gzip\nRemoveType .gz\nAddEncoding gzip .gz\nAddType application/octet-stream .data.gz\nAddType application/wasm .wasm.gz\nAddType application/javascript .js.gz\nAddType application/octet-stream .symbols.json.gz\n\n# The following lines are required for builds without decompression fallback, compressed with Brotli\nRemoveType .br\nRemoveLanguage .br\nAddEncoding br .br\nAddType application/octet-stream .data.br\nAddType application/wasm .wasm.br\nAddType application/javascript .js.br\nAddType application/octet-stream .symbols.json.br\n\n# The following line improves loading performance for uncompressed builds\nAddType application/wasm .wasm\n\n# Uncomment the following line to improve loading performance for gzip-compressed builds with decompression fallback\n# AddEncoding gzip .unityweb\n\n# Uncomment the following line to improve loading performance for brotli-compressed builds with decompression fallback\n# AddEncoding br .unityweb\n\n&lt;/IfModule&gt;\n')),(0,i.kt)("h2",o({},{id:"\u65e0\u89e3\u538b\u7f29\u56de\u9000\u7684\u538b\u7f29-webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-iis"}),"\u65e0\u89e3\u538b\u7f29\u56de\u9000\u7684\u538b\u7f29 WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (IIS)"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'&lt;?xml version="1.0" encoding="UTF-8"?&gt;\n&lt;!--\n The following server configuration can be used for compressed WebGL builds without decompression fallback.\n This configuration file should be uploaded to the server as "&lt;Application Folder&gt;/Build/web.config".\n\nNOTE: To host compressed WebGL builds without decompression fallback, you need to install the "URL Rewrite" IIS module on the server.\nOtherwise, IIS will throw an exception when using this configuration file.\nThis module is available at https://www.iis.net/downloads/microsoft/url-rewrite.\n--&gt;\n\n\n&lt;configuration&gt;\n &lt;system.webServer&gt;\n   &lt;!--\n     Compressed Unity builds without decompression fallback can\'t be properly hosted on a server which\n     has static compression enabled because this might result in the build files being compressed twice.\n     The following line disables static server compression.\n   --&gt;\n   &lt;urlCompression doStaticCompression="false" /&gt;\n   &lt;!-- To host compressed Unity builds, the correct mimeType should be set for the compressed build files. --&gt;\n   &lt;staticContent&gt;\n     &lt;!--\n       NOTE: IIS will throw an exception if a mimeType is specified multiple times for the same extension.\n       To avoid possible conflicts with configurations that are already on the server, you should remove the mimeType for the corresponding extension using the &lt;remove&gt; element,\n       before adding mimeType using the &lt;mimeMap&gt; element.\n     --&gt;\n     &lt;!-- The following lines are required for builds compressed with gzip, which don\'t include decompression fallback. --&gt;\n     &lt;remove fileExtension=".data.gz" /&gt;\n     &lt;mimeMap fileExtension=".data.gz" mimeType="application/octet-stream" /&gt;\n     &lt;remove fileExtension=".wasm.gz" /&gt;\n     &lt;mimeMap fileExtension=".wasm.gz" mimeType="application/wasm" /&gt;\n     &lt;remove fileExtension=".js.gz" /&gt;\n     &lt;mimeMap fileExtension=".js.gz" mimeType="application/javascript" /&gt;\n     &lt;remove fileExtension=".symbols.json.gz" /&gt;\n     &lt;mimeMap fileExtension=".symbols.json.gz" mimeType="application/octet-stream" /&gt;\n     &lt;!-- The following lines are required for builds compressed with Brotli, which don\'t include decompression fallback. --&gt;\n     &lt;remove fileExtension=".data.br" /&gt;\n     &lt;mimeMap fileExtension=".data.br" mimeType="application/octet-stream" /&gt;\n     &lt;remove fileExtension=".wasm.br" /&gt;\n     &lt;mimeMap fileExtension=".wasm.br" mimeType="application/wasm" /&gt;\n     &lt;remove fileExtension=".js.br" /&gt;\n     &lt;mimeMap fileExtension=".js.br" mimeType="application/javascript" /&gt;\n     &lt;remove fileExtension=".symbols.json.br" /&gt;\n     &lt;mimeMap fileExtension=".symbols.json.br" mimeType="application/octet-stream" /&gt;\n   &lt;/staticContent&gt;\n\n   &lt;!--\n     Hosting compressed Unity builds without decompression fallback relies on native browser decompression,\n     therefore a proper "Content-Encoding" response header should be added for the compressed build files.\n     NOTE: IIS will throw an exception if the following section is used without the "URL Rewrite" module installed.\n     Download the "URL Rewrite" module from https://www.iis.net/downloads/microsoft/url-rewrite\n   --&gt;\n   &lt;rewrite&gt;\n     &lt;outboundRules&gt;\n       &lt;!--\n         NOTE: IIS will throw an exception if the same rule name is used multiple times.\n         To avoid possible conflicts with configurations that are already on the server, you should remove the mimeType for the corresponding extension using the &lt;remove&gt; element,\n       before adding mimeType using the &lt;mimeMap&gt; element.\n       --&gt;\n       &lt;!-- The following section is required for builds compressed with gzip, which don\'t include decompression fallback. --&gt;\n       &lt;remove name="Append gzip Content-Encoding header" /&gt;\n       &lt;rule name="Append gzip Content-Encoding header"&gt;\n         &lt;match serverVariable="RESPONSE_Content-Encoding" pattern=".*" /&gt;\n         &lt;conditions&gt;\n           &lt;add input="{REQUEST_FILENAME}" pattern="\\.gz$" /&gt;\n         &lt;/conditions&gt;\n         &lt;action type="Rewrite" value="gzip" /&gt;\n       &lt;/rule&gt;\n       &lt;!-- The following section is required for builds compressed with Brotli, which don\'t include decompression fallback. --&gt;\n       &lt;remove name="Append brotli Content-Encoding header" /&gt;\n       &lt;rule name="Append brotli Content-Encoding header"&gt;\n         &lt;match serverVariable="RESPONSE_Content-Encoding" pattern=".*" /&gt;\n         &lt;conditions&gt;\n           &lt;add input="{REQUEST_FILENAME}" pattern="\\.br$" /&gt;\n         &lt;/conditions&gt;\n         &lt;action type="Rewrite" value="br" /&gt;\n       &lt;/rule&gt;\n     &lt;/outboundRules&gt;\n   &lt;/rewrite&gt;\n &lt;/system.webServer&gt;\n&lt;/configuration&gt;\n')),(0,i.kt)("h2",o({},{id:"\u672a\u538b\u7f29-webgl-\u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e-iis"}),"\u672a\u538b\u7f29 WebGL \u6784\u5efa\u7684\u670d\u52a1\u5668\u914d\u7f6e (IIS)"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{}),'&lt;?xml version="1.0" encoding="UTF-8"?&gt;\n&lt;!--\n The following server configuration can be used for uncompressed WebGL builds.\n This configuration file should be uploaded to the server as "&lt;Application Folder&gt;/Build/web.config"\n--&gt;\n&lt;configuration&gt;\n &lt;system.webServer&gt;\n   &lt;!--\n     IIS does not provide default handlers for .data and .wasm files (and in some cases .json files),\n     therefore these files won\u2019t be served unless their mimeType is explicitly specified.\n   --&gt;\n   &lt;staticContent&gt;\n     &lt;!--\n       NOTE: IIS will throw an exception if a mimeType is specified multiple times for the same extension.\n       To avoid possible conflicts with configurations that are already on the server, you should remove the mimeType for the corresponding extension using the &lt;remove&gt; element,\n       before adding mimeType using the &lt;mimeMap&gt; element.\n     --&gt;\n     &lt;remove fileExtension=".data" /&gt;\n     &lt;mimeMap fileExtension=".data" mimeType="application/octet-stream" /&gt;\n     &lt;remove fileExtension=".wasm" /&gt;\n     &lt;mimeMap fileExtension=".wasm" mimeType="application/wasm" /&gt;\n     &lt;remove fileExtension=".symbols.json" /&gt;\n     &lt;mimeMap fileExtension=".symbols.json" mimeType="application/octet-stream" /&gt;\n   &lt;/staticContent&gt;\n &lt;/system.webServer&gt;\n&lt;/configuration&gt;\n')),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);