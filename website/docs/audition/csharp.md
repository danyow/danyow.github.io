# 一问一答 (C#篇)

## 值类型与引用类型的区别?

### 值类型 `ValueType`

1. 数值类型

   1. 整型
      1. sbyte(System.SByte)
      2. short(System.Int16)
      3. int(System.Int32)
      4. long(System.Int64)
      5. byte(System.Byte)
      6. ushort(System.UInt16)
      7. uint(System.UInt32)
      8. ulong(System.UInt64)
      9. char(System.Char)
   2. 浮点型
      1. float(System.Single)，
      2. double(System.Double)。
   3. 高精度型
      1. decimal(System.Decimal)
2. 结构体

   1. struct(直接派生于System.ValueType)
3. bool型

   1. bool(System.Boolean的别名)
4. 用户定义的结构体
5. 枚举

   1. enum(派生于System.Enum)
6. 可空类型

   1. 派生于`System.Nullable<T>`泛型结构体，T实际上是`System.Nullable<T>`的别名

### 引用类型(ReferenceType):

1. 数组
2. 用户定义的类
3. 接口
4. 委托
5. object
6. 字符串
7. null类型
8. 类
9. 值类型在栈里, 引用类型故名思意存放的是一个引用地址.

[C#详解值类型和引用类型区别](https://blog.csdn.net/qiaoquan3/article/details/51202926)

## C# 中所有引用类型的基类是什么

1. 引用的基类是`System.Object`
2. 值类型的基类是`System.ValueType`
3. 值类型也隐式继承自`System.Object`

## 请简述`ArrayList`和`List<T>`的主要区别

1. `List<T>`是泛型接口, `ArrayList`是一个实现了该接口的类, 可以被实例化.
2. `ArrayList`存在不安全类型, 因为会把所有插入其中的数据都当中`Object`来处理, 同时存在费时的装箱拆箱操作.

## 简述GC(垃圾回收)产生的原因, 如何避免

`new`对象时, 当可分配的内存不足GC就会去回收未使用的对象, 倒是GC的操作时非常复杂的, 会占用很多CPU时间,
对于移动设备来说频繁的垃圾回收会严重影响性能

1. 减少`new`对象的次数, 在创建对象时会产生内存碎片, 这样会造成碎片内存不法使用
2. 使用公用的对象(静态成员, 常量), 但是不能乱用, 因为静态成员和窗帘的声明周期时整个应用程序
3. 在拼接大量字符串的时候使用StringBuilder, 但是在使用的时候注意,
   创建StringBuilder对象时要设置StringBuilder的初始大小:

```csharp
var builder = new StringBuilder(size);
```

4. 使用`object pool`对象池.

## 描述 `Interface`与抽象类`abstract`之间的不同

相同点:

1. 都可以被继承
2. 都不能被实例化
3. 都可以包含方法声明
4. 派生类必须实现未实现的方法

区别:


| 抽象类                                  | 接口                                   |
|--------------------------------------|--------------------------------------|
| 可以定义字段, 属性, 方法实现                     | 只能定义属性, 索引器, 事件, 和方法声明,<br/> 不能包含字段. |
| 一个不完整的类, 需要进一步细化                     | 一个行为规范                               |
| 只能单一继承                               | 可以被多重实现                              |
| 更多的定义在一系列紧密相关的类之间                    | 大多数是关系疏松但都实现某一功能的类中                  |
| 从一系列相关对象中抽象出来的概念,<br/> 因此反映的是事物的内部共性 | 为了满足外部调用定义的一个功能约定,<br/>因此反映的是事物的外部特性 |
| 完全具备继承相关特点                           | 不具备继承的任何特点, 它仅仅承诺了能够调用的方法            |
| 不支持回调                                | 支持回调, 因为继承并不具备这个特点                   |
| 具体方法是默认是虚的                           | 实现接口的类默认是非虚的, 但也可以声明为虚               |

## 临时对象

```csharp
var a = new string("abc"); // 这行会报错
a = (a.ToUpper() + "123").Substring(0, 2);
```

应该改为:

```csharp
var a = new string(new[]{'a', 'b', 'c'});
a = (a.ToUpper() + "123").Substring(0, 2);
```

会产生五个临时变量

## 遍历删除

```csharp
var ls = new List<int>(new[] {1, 2, 3, 4, 5});
foreach (var item in ls)
{
    Console.WriteLine(item*item);
    ls.Remove(item);
}
```

会产生运行时错误, 不能一遍遍历一遍修改. 可以使用 `for` 循环来代替, `foreach` 一般用于读取

## 关键字 `Sealed`

如果是类使用的话, 可以防止有其他类继承该类 方法的话则就是防止派生类重写该方法

## `private`, `public`, `protected`, `internal`的区别

1. `public`: 对任何类和成员都公开, 无限制访问
2. `private`: 对该类公开
3. `protected`: 对该类和其派生类公开
4. `internal`: 只能在包含该类的程序集中访问
5. `protected internal`: 包含该类的程序集中且只对该类及其派生类公开

## 反射的实现原理:

审查元数据并收集关于他的类型信息的能力, 就是得到程序集中的属性和方法

[C++反射机制的实现](https://blog.csdn.net/Scythe666/article/details/51718864)

## 字符串中 `null`和 `""`和 `string.Empty`的区别？

`string.Empty`: 相当于"", `Empty`是一个静态只读的字段.

`string str = ""`: 初始化对象并且分配一个空字符串的内存空间.

`string str = null`: 初始化对象但不会分配内存空间.

从性能和代码生成的角度来看，确实没有什么区别。在性能测试中，他们之间来回跳动，其中一个比另一个快，而且只有毫秒。

在看后面的代码，你真的没有看到任何区别。唯一的区别是在`IL`中，它`string.Empty`使用操作码`ldsfld` 而`""`使用操作码`ldstr`，但这只是因为`string.Empty`是静态的，并且两个指令都做同样的事情。如果您查看生产的组件，则完全相同。

> `C#`

```csharp
private void Test1()
{
    string test1 = string.Empty;  
    string test11 = test1;
}
private void Test2()
{
    string test2 = "";  
    string test22 = test2;
}
```

> `IL`

```il
.method private hidebysig instance void 
          Test1() cil managed
{
  // Code size       10 (0xa)
  .maxstack  1
  .locals init ([0] string test1,
                [1] string test11)
  IL_0000:  nop
  IL_0001:  ldsfld     string [mscorlib]System.String::Empty
  IL_0006:  stloc.0
  IL_0007:  ldloc.0
  IL_0008:  stloc.1
  IL_0009:  ret
} // end of method Form1::Test1
.method private hidebysig instance void 
        Test2() cil managed
{
  // Code size       10 (0xa)
  .maxstack  1
  .locals init ([0] string test2,
                [1] string test22)
  IL_0000:  nop
  IL_0001:  ldstr      ""
  IL_0006:  stloc.0
  IL_0007:  ldloc.0
  IL_0008:  stloc.1
  IL_0009:  ret
} // end of method Form1::Test2
```

> `汇编代码`

```
        string test1 = string.Empty;
0000003a  mov         eax,dword ptr ds:[022A102Ch] 
0000003f  mov         dword ptr [ebp-40h],eax 
        string test11 = test1;
00000042  mov         eax,dword ptr [ebp-40h] 
00000045  mov         dword ptr [ebp-44h],eax 
        string test2 = "";
0000003a  mov         eax,dword ptr ds:[022A202Ch] 
00000040  mov         dword ptr [ebp-40h],eax 
        string test22 = test2;
00000043  mov         eax,dword ptr [ebp-40h] 
00000046  mov         dword ptr [ebp-44h],eax 
```

所以`"""`与`Empty`在用法与性能上基本没区别, 只是后者时语法级别对前者的优化.

[C#中string.Empty和null的区别详解](https://www.jb51.net/article/67294.htm)

[在C＃中，如何使用string.Empty或String.Empty字符串？](https://cloud.tencent.com/developer/ask/26807)

## 数据大小

```csharp
byte b = 'a';   // 'a' 是char类型 错误
byte c = 1;     // 0~255 正确
byte d = "ab";  // 两个英文 错误 
byte e = '啊';  // 中文 错误
byte g = 256;   // 0~255 错误
```

$$
1 byte = 8 bit
$$

$$
1汉字 = 2byte = 16bit
$$

$$
1英文 = 1byte = 8bit
$$

其中byte取值范围在c#中是0~255, java中则是-128~127

## 

```csharp
以4(100)    7(0111)    8(1000)为例
 
4 & 3 --> 100 & 011     = 0
7 & 6 --> 0111 & 0110  != 0
8 & 7 --> 1000 & 0111   = 0
 
即 如果 m & (m - 1) == 0，则m是2的n次方。
```

