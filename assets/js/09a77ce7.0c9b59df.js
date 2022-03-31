"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10038],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});n(27378);var a=n(35318);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"Lightmapping and shaders",slug:"/graphics/lighting-overview/lightmappers/meta-pass"},o="Lightmapping and shaders",l={unversionedId:"unity/graphics/lighting-overview/lightmappers/Lightmapping and shaders",id:"version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/Lightmapping and shaders",title:"Lightmapping and shaders",description:"This page contains information about how to make shaders compatible with Unity\u2019s lightmappers.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/lighting-overview/lightmappers/meta-pass.md",sourceDirName:"unity/graphics/lighting-overview/lightmappers",slug:"/graphics/lighting-overview/lightmappers/meta-pass",permalink:"/docs/graphics/lighting-overview/lightmappers/meta-pass",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Lightmapping and shaders",slug:"/graphics/lighting-overview/lightmappers/meta-pass"},sidebar:"unity",previous:{title:"\u5149\u7167\u8d34\u56fe\u548c LOD",permalink:"/docs/graphics/lighting-overview/lightmappers/lodfor-baked-gi"},next:{title:"\u6e10\u8fdb\u5149\u7167\u8d34\u56fe\u7a0b\u5e8f",permalink:"/docs/graphics/lighting-overview/lightmappers/progressive-lightmapper/progressive-lightmapper"}},p={},u=[{value:"The Meta Pass",id:"the-meta-pass",level:2},{value:"Example Shader with a Meta pass",id:"example-shader-with-a-meta-pass",level:3},{value:"Meta Pass technical information",id:"meta-pass-technical-information",level:3},{value:"Custom RGB transparency",id:"custom-rgb-transparency",level:2}],h={toc:u};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"lightmapping-and-shaders"}),"Lightmapping and shaders"),(0,a.kt)("p",null,"This page contains information about how to make shaders compatible with Unity\u2019s lightmappers."),(0,a.kt)("h2",r({},{id:"the-meta-pass"}),"The Meta Pass"),(0,a.kt)("p",null,"A Meta Pass is a Shader pass that provides albedo and emission values to the Global Illumination system. These values are separate from those used in real-time rendering, meaning that you can use the Meta Pass to control how a GameObject looks from the point of view of the lighting baking system without affecting its appearance at runtime."),(0,a.kt)("p",null,"An example of when this would be useful is if you wanted the green moss on a cliff to generate exaggerated green indirect light in your lightmaps, but you didn\u2019t want to recolor the terrain in the real-time pass of shader."),(0,a.kt)("p",null,"Unity \u7684\u6240\u6709\u5185\u7f6e\u6750\u8d28\u90fd\u5177\u6709 Meta Pass\uff0c\u5e76\u4e14\u6807\u51c6\u7740\u8272\u5668\u4e5f\u5305\u542b Meta Pass\u3002\u5982\u679c\u4f7f\u7528\u4e86\u5b83\u4eec\uff0c\u5219\u65e0\u9700\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u4fbf\u4f1a\u542f\u7528 Meta Pass\u3002\u5982\u679c\u4f7f\u7528\u7684\u662f\u81ea\u5b9a\u4e49\u7740\u8272\u5668\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5df1\u7684 Meta Pass\u3002"),(0,a.kt)("h3",r({},{id:"example-shader-with-a-meta-pass"}),"Example Shader with a Meta pass"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u7740\u8272\u5668\uff0c\u53ef\u4ee5\u6307\u5b9a\u4ec5\u7531\u5149\u7167\u70d8\u7119\u7cfb\u7edf\u4f7f\u7528\u7684\u53cd\u7167\u7387\u989c\u8272\u548c\u53cd\u7167\u7387\u7eb9\u7406\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u8fd0\u884c\u65f6\u7684\u6750\u8d28\u5916\u89c2\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u53d1\u5149\u662f\u4ece UV \u4e2d\u83b7\u53d6\u7684\uff1b\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u503c\u6765\u63a7\u5236\u53d1\u5149\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'Shader "Custom/metaPassShader"{\n\n    Properties {\n        _Color ("Color", Color)=(1,1,1,1)\n        _MainTex ("Albedo (RGB)",2D)="white"{}\n        _Glossiness ("Smoothness", Range(0,1))=0.5\n        _Metallic ("Metallic", Range(0,1))=0.0\n\n        _GIAlbedoColor ("Color Albedo (GI)", Color)=(1,1,1,1)\n        _GIAlbedoTex ("Albedo (GI)",2D)="white"{}\n    }\n\n    SubShader {\n    // ------------------------------------------------------------------\n    // Extracts information for lightmapping, GI (emission, albedo, ...)\n    // This pass is not used during regular rendering.\n        Pass\n        {\n            Name "META"\n            Tags {"LightMode"="Meta"}\n            Cull Off\n            CGPROGRAM\n\n            #include"UnityStandardMeta.cginc"\n\n            sampler2D _GIAlbedoTex;\n            fixed4 _GIAlbedoColor;\n            float4 frag_meta2 (v2f_meta i): SV_Target\n            {\n                // We\'re interested in diffuse & specular colors\n                // and surface roughness to produce final albedo.\n\n                FragmentCommonData data = UNITY_SETUP_BRDF_INPUT (i.uv);\n                UnityMetaInput o;\n                UNITY_INITIALIZE_OUTPUT(UnityMetaInput, o);\n                fixed4 c = tex2D (_GIAlbedoTex, i.uv);\n                o.Albedo = fixed3(c.rgb * _GIAlbedoColor.rgb);\n                o.Emission = Emission(i.uv.xy);\n                return UnityMetaFragment(o);\n            }\n\n            #pragma vertex vert_meta\n            #pragma fragment frag_meta2\n            #pragma shader_feature _EMISSION\n            #pragma shader_feature _METALLICGLOSSMAP\n            #pragma shader_feature ___ _DETAIL_MULX2\n            ENDCG\n        }\n\n        Tags {"RenderType"="Opaque"}\n        LOD 200\n\n        CGPROGRAM\n        // Physically-based Standard lighting model, and enable shadows on all light types\n        #pragma surface surf Standard fullforwardshadows nometa\n        // Use Shader model 3.0 target, to get nicer looking lighting\n        #pragma target 3.0\n\n        sampler2D _MainTex;\n\n        struct Input {\n            float2 uv_MainTex;\n        };\n\n        half _Glossiness;\n        half _Metallic;\n        fixed4 _Color;\n\n        void surf (Input IN,inout SurfaceOutputStandard o){\n            // Albedo comes from a texture tinted by color\n            fixed4 c = tex2D (_MainTex, IN.uv_MainTex)* _Color;\n            o.Albedo = c.rgb;\n            // Metallic and smoothness come from slider variables\n            o.Metallic = _Metallic;\n            o.Smoothness = _Glossiness;\n            o.Alpha = c.a;\n        }\n        ENDCG\n    }\n\n    FallBack "Diffuse"\n}\n')),(0,a.kt)("h3",r({},{id:"meta-pass-technical-information"}),"Meta Pass technical information"),(0,a.kt)("p",null,"Enlighten Realtime Global Illumination and lightmapping use Unity\u2019s Meta Pass to extract albedo values from surfaces and handle diffuse transport themselves by using surface albedo on each bounce."),(0,a.kt)("p",null,"Metallic surfaces with a black (or almost black) albedo bounce very little light diffusely. Because the lightmappers handle only diffuse light transport, this means that you may see very little bounced light from these types of surfaces. Unity\u2019s built-in Meta Passes account for this by providing a boosted version of the metal hue color instead of a physically correct albedo. This means that you get some bounce even from metallic materials. If you want a different behaviour, you can create a custom meta pass."),(0,a.kt)("p",null,"The built-in Meta Passes do not handle spectral specular reflectance."),(0,a.kt)("p",null,"Note: If you are using Enlighten Realtime Global Illumination, the Meta pass in the Player is not as fast as ",(0,a.kt)("a",r({parentName:"p"},{href:"http://docs.unity3d.com/ScriptReference/DynamicGI.SetEmissive.html"}),"DynamicGI.SetEmissive"),", but it is more flexible because you are not limited to a single color."),(0,a.kt)("h2",r({},{id:"custom-rgb-transparency"}),"Custom RGB transparency"),(0,a.kt)("p",null,"By default, shaders in Unity use monochrome transparency. This means that Unity uses the alpha channel of the material color or albedo texture to evaluate light transmission through the material."),(0,a.kt)("p",null,"During lightmapping, you can use custom RGB transparency instead. This means that Unity uses the values of a given texture to evaluate light transmission through the material. This is useful when you want color-based transparency that is independent of the material color or albedo texture; for example, if you want to bake lighting that simulates the behavior of a light shining through a stained glass window."),(0,a.kt)("p",null,"To use custom RGB transparency during lightmapping, add the following line to your ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-reference/sl-reference"}),"ShaderLab")," code:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'_TransparencyLM ("Transmissive Texture", 2D) = "white" {}')),(0,a.kt)("p",null,"This creates a ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/graphics/shaders/shader-writing/sl-reference/sl-shader/sl-properties"}),"material property")," that appears in the Material Inspector with the name \u201cTransmissive Texture\u201d. Assign the desired texture to this field."))}c.isMDXComponent=!0}}]);