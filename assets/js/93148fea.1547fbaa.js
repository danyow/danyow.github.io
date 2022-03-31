"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25233],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});n(27378);var r=n(35318);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"Creating batches",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"},s="Creating batches",c={unversionedId:"unity/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/Creating batches",id:"version-Unity@2022.1/unity/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/Creating batches",title:"Creating batches",description:"BatchRendererGroup (BRG) doesn\u2019t automatically provide any instance data. This includes many properties which are normally built-in for GameObjects, such as transform matrices, light probe coefficients, and lightmap texture coordinates. This means features like ambient lighting only work if you provide instance data yourself. To do this, you add and configure batches. A batch is a collection of instances, where each instance corresponds to a single thing to render. What the instance actually represents depends on what you want to render. For example, in a prop object renderer, an instance could represent a single prop, and in a terrain renderer, it could represent a single terrain patch.",source:"@site/versioned_docs/version-Unity@2022.1/unity/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches.md",sourceDirName:"unity/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",permalink:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-Hans",tags:[],version:"Unity@2022.1",lastUpdatedBy:"danyow",lastUpdatedAt:1648742180,formattedLastUpdatedAt:"2022/3/31",frontMatter:{id:"Creating batches",slug:"/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"},sidebar:"unity",previous:{title:"Creating a renderer with BatchRendererGroup",permalink:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-a-renderer"},next:{title:"Creating draw commands",permalink:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"}},d={},l=[],u={toc:l};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"creating-batches"}),"Creating batches"),(0,r.kt)("p",null,"BatchRendererGroup (BRG) doesn\u2019t automatically provide any instance data. This includes many properties which are normally built-in for GameObjects, such as transform matrices, light probe coefficients, and lightmap texture coordinates. This means features like ambient lighting only work if you provide instance data yourself. To do this, you add and configure batches. A batch is a collection of instances, where each instance corresponds to a single thing to render. What the instance actually represents depends on what you want to render. For example, in a prop object renderer, an instance could represent a single prop, and in a terrain renderer, it could represent a single terrain patch."),(0,r.kt)("p",null,"Each batch has a set of metadata values and a single ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GraphicsBuffer.html"}),"GraphicsBuffer"),", which every instance in the batch shares. To load data for an instance, the typical process is to use the metadata values to load from the correct location in the GraphicsBuffer. The ",(0,r.kt)("inlineCode",{parentName:"p"},"UNITY_ACCESS_DOTS_INSTANCED_PROP")," family of shader macros work with this scheme (see ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/dots-instancing-shaders#accessing-dots-instanced-properties"}),"Accessing DOTS Instanced properties"),"). However, you don\u2019t need to use this per-instance data loading scheme, and you are free to implement your own scheme if you want."),(0,r.kt)("p",null,"To create a batch, use ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.AddBatch.html"}),"BatchRendererGroup.AddBatch"),". The method accepts an array of metadata values and a handle to a GraphicsBuffer. Unity passes the metadata values to the shader when it renders instances from the batch, and binds the GraphicsBuffer as ",(0,r.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData"),". For metadata values that the shader uses but you don\u2019t pass in when you create a batch, Unity sets them to zero."),(0,r.kt)("p",null,"You can\u2019t modify batch metadata values after you create them, so any metadata values you pass to the batch are final. If you need to change any metadata values, create a new batch and remove the old one. You can modify the batch\u2019s GraphicsBuffer at any time. To do this, use ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.SetBatchBuffer.html"}),"SetBatchBuffer"),". This can be useful to resize buffers and allocate a larger buffer if the existing one runs out of space."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note")," : You don\u2019t need to specify the size of a batch when you create one. Instead, you have to make sure that instances that the OnPerformCulling callback outputs are valid and able to load per-instance data when Unity renders them. This means you can allocate space for more per-instance data than you initially need so you can render more instances using the batch later."),(0,r.kt)("p",null,"See the following code sample for an example of how to create a batch with metadata values and a GraphicsBuffer of instance data. This code sample builds on the one in ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-registering-meshes-and-materials"}),"Registering meshes and materials"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'using System;\nusing Unity.Collections;\nusing Unity.Collections.LowLevel.Unsafe;\nusing Unity.Jobs;\nusing UnityEngine;\nusing UnityEngine.Rendering;\n\npublic class SimpleBRGExample : MonoBehaviour\n{\n    public Mesh mesh;\n    public Material material;\n\n    private BatchRendererGroup m_BRG;\n\n    private GraphicsBuffer m_InstanceData;\n    private BatchID m_BatchID;\n    private BatchMeshID m_MeshID;\n    private BatchMaterialID m_MaterialID;\n\n    // Some helper constants to make calculations more convenient.\n    private const int kSizeOfMatrix = sizeof(float) * 4 * 4;\n    private const int kSizeOfPackedMatrix = sizeof(float) * 4 * 3;\n    private const int kSizeOfFloat4 = sizeof(float) * 4;\n    private const int kBytesPerInstance = (kSizeOfPackedMatrix * 2) + kSizeOfFloat4;\n    private const int kExtraBytes = kSizeOfMatrix * 2;\n    private const int kNumInstances = 3;\n\n    // The PackedMatrix is a convenience type that converts matrices into\n    // the format that Unity-provided shaders expect.\n    struct PackedMatrix\n    {\n        public float c0x;\n        public float c0y;\n        public float c0z;\n        public float c1x;\n        public float c1y;\n        public float c1z;\n        public float c2x;\n        public float c2y;\n        public float c2z;\n        public float c3x;\n        public float c3y;\n        public float c3z;\n\n        public PackedMatrix(Matrix4x4 m)\n        {\n            c0x = m.m00;\n            c0y = m.m10;\n            c0z = m.m20;\n            c1x = m.m01;\n            c1y = m.m11;\n            c1z = m.m21;\n            c2x = m.m02;\n            c2y = m.m12;\n            c2z = m.m22;\n            c3x = m.m03;\n            c3y = m.m13;\n            c3z = m.m23;\n        }\n    }\n\n    private void Start()\n    {\n        m_BRG = new BatchRendererGroup(this.OnPerformCulling, IntPtr.Zero);\n        m_MeshID = m_BRG.RegisterMesh(mesh);\n        m_MaterialID = m_BRG.RegisterMaterial(material);\n\n        AllocateInstanceDateBuffer();\n        PopulateInstanceDataBuffer();\n    }\n\n    private void AllocateInstanceDateBuffer()\n    {\n        m_InstanceData = new GraphicsBuffer(GraphicsBuffer.Target.Raw,\n            BufferCountForInstances(kBytesPerInstance, kNumInstances, kExtraBytes),\n            sizeof(int));\n    }\n\n    private void PopulateInstanceDataBuffer()\n    {\n        // Place a zero matrix at the start of the instance data buffer, so loads from address 0 return zero.\n        var zero = new Matrix4x4[1] { Matrix4x4.zero };\n\n        // Create transform matrices for three example instances.\n        var matrices = new Matrix4x4[kNumInstances]\n        {\n            Matrix4x4.Translate(new Vector3(-2, 0, 0)),\n            Matrix4x4.Translate(new Vector3(0, 0, 0)),\n            Matrix4x4.Translate(new Vector3(2, 0, 0)),\n        };\n\n        // Convert the transform matrices into the packed format that the shader expects.\n        var objectToWorld = new PackedMatrix[kNumInstances]\n        {\n            new PackedMatrix(matrices[0]),\n            new PackedMatrix(matrices[1]),\n            new PackedMatrix(matrices[2]),\n        };\n\n        // Also create packed inverse matrices.\n        var worldToObject = new PackedMatrix[kNumInstances]\n        {\n            new PackedMatrix(matrices[0].inverse),\n            new PackedMatrix(matrices[1].inverse),\n            new PackedMatrix(matrices[2].inverse),\n        };\n\n        // Make all instances have unique colors.\n        var colors = new Vector4[kNumInstances]\n        {\n            new Vector4(1, 0, 0, 1),\n            new Vector4(0, 1, 0, 1),\n            new Vector4(0, 0, 1, 1),\n        };\n\n        // In this simple example, the instance data is placed into the buffer like this:\n        // Offset | Description\n        //      0 | 64 bytes of zeroes, so loads from address 0 return zeroes\n        //     64 | 32 uninitialized bytes to make working with SetData easier, otherwise unnecessary\n        //     96 | unity_ObjectToWorld, three packed float3x4 matrices\n        //    240 | unity_WorldToObject, three packed float3x4 matrices\n        //    384 | _BaseColor, three float4s\n\n        // Calculates start addresses for the different instanced properties. unity_ObjectToWorld starts\n        // at address 96 instead of 64, because the computeBufferStartIndex parameter of SetData\n        // is expressed as source array elements, so it is easier to work in multiples of sizeof(PackedMatrix).\n        uint byteAddressObjectToWorld = kSizeOfPackedMatrix * 2;\n        uint byteAddressWorldToObject = byteAddressObjectToWorld + kSizeOfPackedMatrix * kNumInstances;\n        uint byteAddressColor = byteAddressWorldToObject + kSizeOfPackedMatrix * kNumInstances;\n\n        // Upload the instance data to the GraphicsBuffer so the shader can load them.\n        m_InstanceData.SetData(zero, 0, 0, 1);\n        m_InstanceData.SetData(objectToWorld, 0, (int)(byteAddressObjectToWorld / kSizeOfPackedMatrix), objectToWorld.Length);\n        m_InstanceData.SetData(worldToObject, 0, (int)(byteAddressWorldToObject / kSizeOfPackedMatrix), worldToObject.Length);\n        m_InstanceData.SetData(colors, 0, (int)(byteAddressColor / kSizeOfFloat4), colors.Length);\n\n        // Set up metadata values to point to the instance data. Set the most significant bit 0x80000000 in each\n        // which instructs the shader that the data is an array with one value per instance, indexed by the instance index.\n        // Any metadata values that the shader uses and not set here will be zero. When such a value is used with\n        // UNITY_ACCESS_DOTS_INSTANCED_PROP (i.e. without a default), the shader interprets the\n        // 0x00000000 metadata value and loads from the start of the buffer. The start of the buffer which is\n        // is a zero matrix so this sort of load is guaranteed to return zero, which is a reasonable default value.\n        var metadata = new NativeArray&lt;MetadataValue&gt;(3, Allocator.Temp);\n        metadata[0] = new MetadataValue { NameID = Shader.PropertyToID("unity_ObjectToWorld"), Value = 0x80000000 | byteAddressObjectToWorld, };\n        metadata[1] = new MetadataValue { NameID = Shader.PropertyToID("unity_WorldToObject"), Value = 0x80000000 | byteAddressWorldToObject, };\n        metadata[2] = new MetadataValue { NameID = Shader.PropertyToID("_BaseColor"), Value = 0x80000000 | byteAddressColor, };\n\n        // Finally, create a batch for the instances, and make the batch use the GraphicsBuffer with the\n        // instance data, and the metadata values that specify where the properties are. Note that\n        // you don\'t need to pass any batch size here.\n        m_BatchID = m_BRG.AddBatch(metadata, m_InstanceData.bufferHandle);\n    }\n\n    // Raw buffers are allocated in ints. This is a utility method that calculates\n    // the required number of ints for the data.\n    int BufferCountForInstances(int bytesPerInstance, int numInstances, int extraBytes = 0)\n    {\n        // Round byte counts to int multiples\n        bytesPerInstance = (bytesPerInstance + sizeof(int) - 1) / sizeof(int) * sizeof(int);\n        extraBytes = (extraBytes + sizeof(int) - 1) / sizeof(int) * sizeof(int);\n        int totalBytes = bytesPerInstance * numInstances + extraBytes;\n        return totalBytes / sizeof(int);\n    }\n\n\n    private void OnDisable()\n    {\n        m_BRG.Dispose();\n    }\n\n    public unsafe JobHandle OnPerformCulling(\n        BatchRendererGroup rendererGroup,\n        BatchCullingContext cullingContext,\n        BatchCullingOutput cullingOutput,\n        IntPtr userContext)\n    {\n        // This simple example doesn\'t use jobs, so it can just return an empty JobHandle.\n        // Performance sensitive applications should use Burst jobs to implement\n        // culling and draw command output. In this case, this function would return a\n        // handle here that completes when those jobs have finished.\n        return new JobHandle();\n\n    }\n}\n')),(0,r.kt)("p",null,"Now that you have registered all the required resources with a BatchRendererGroup object, you can create draw commands. For more information, see the next topic, ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"}),"Creating draw commands"),"."))}h.isMDXComponent=!0}}]);