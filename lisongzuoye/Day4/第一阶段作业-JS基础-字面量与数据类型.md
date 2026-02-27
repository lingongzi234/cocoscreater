# 第一阶段作业 - JS基础：字面量、变量、常量与数据类型

**姓名：** ___李松_____
**成绩：** ___90_____

---

## 初级题目（1-8题）

### 题目1：字面量与变量声明（初级）

以下代码中，哪一个是字面量，哪一个是变量？请说明它们的区别。

```javascript
const PI = 3.14159;
let userName = "张三";
const age = 25;
const colors = ["red", "green", "blue"];
```

**A.** 都是变量，没有字面量  
**B.** `PI`、`userName`、`age` 是变量，`3.14159`、`"张三"`、`25` 是字面量  
**C.** 只有 `colors` 是字面量  
**D.** 都是字面量

**题目1答案：** ___B_____

---

### 题目2：变量声明关键字（初级）

分析以下代码，选择正确的输出结果：

```javascript
var a = 1;
let b = 2;
const c = 3;

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a, b, c);
}

console.log(a, b, c);
```

**A.** `10 20 30` 然后 `10 2 3`  
**B.** `10 20 30` 然后 `1 2 3`  
**C.** `10 20 30` 然后 `10 20 30`  
**D.** 报错：`c` 不能重新声明

**题目2答案：** ____A____

---

### 题目3：基本数据类型识别（初级）

以下代码中，变量 `data` 的数据类型是什么？

```javascript
const data = null;
console.log(typeof data);
```

**A.** `"null"`  
**B.** `"object"`  
**C.** `"undefined"`  
**D.** `null`

**题目3答案：** ____B____

---

### 题目4：typeof 操作符（初级）

执行以下代码，`result` 的值是什么？

```javascript
const arr = [1, 2, 3];
const obj = { name: "test" };
const func = function() {};
const num = 123;
const str = "hello";
const bool = true;
const undef = undefined;
const nul = null;

const result = [
    typeof arr,
    typeof obj,
    typeof func,
    typeof num,
    typeof str,
    typeof bool,
    typeof undef,
    typeof nul
];
```

**A.** `["array", "object", "function", "number", "string", "boolean", "undefined", "null"]`  
**B.** `["object", "object", "function", "number", "string", "boolean", "undefined", "object"]`  
**C.** `["array", "object", "function", "number", "string", "boolean", "undefined", "object"]`  
**D.** `["object", "object", "function", "number", "string", "boolean", "undefined", "null"]`

**题目4答案：** ____B____

---

### 题目5：字符串操作（初级）

以下代码的输出结果是什么？

```javascript
const str1 = "Hello";
const str2 = "World";
const result1 = str1 + " " + str2;
const result2 = `${str1} ${str2}`;
const result3 = str1.concat(" ", str2);
const result4 = str1.length;

console.log(result1 === result2, result2 === result3, result4);
```

**A.** `true true 5`  
**B.** `true false 5`  
**C.** `false true 5`  
**D.** `true true 10`

**题目5答案：** ____A____

---

### 题目6：数值类型转换（初级）

以下代码的输出结果是什么？

```javascript
const num1 = Number("123");
const num2 = Number("123abc");
const num3 = parseInt("123.45");
const num4 = parseFloat("123.45");
const num5 = +"456";
const num6 = Number(true);
const num7 = Number(false);

console.log(num1, num2, num3, num4, num5, num6, num7);
```

**A.** `123 NaN 123 123.45 456 1 0`  
**B.** `123 123 123 123.45 456 true false`  
**C.** `123 NaN 123.45 123.45 456 1 0`  
**D.** `123 123 123 123.45 456 1 1`

**题目6答案：** ____A____

---

### 题目7：布尔值类型转换（初级）

以下代码中，哪些值会被转换为 `true`？

```javascript
const values = [
    Boolean(1),
    Boolean(0),
    Boolean(-1),
    Boolean(""),
    Boolean("0"),
    Boolean(null),
    Boolean(undefined),
    Boolean([]),
    Boolean({})
];
```

**A.** 只有 `Boolean(1)` 和 `Boolean("0")`  
**B.** `Boolean(1)`、`Boolean(-1)`、`Boolean("0")`、`Boolean([])`、`Boolean({})`  
**C.** 所有值都是 `true`  
**D.** 只有 `Boolean(1)` 和 `Boolean(-1)`

**题目7答案：** ____B____

---

### 题目8：类型检查综合（初级）

以下代码的输出结果是什么？

```javascript
function checkType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

console.log(checkType(42));
console.log(checkType(null));
console.log(checkType([1, 2, 3]));
console.log(checkType({}));
```

**A.** 
```
number
null
array
object
```

**B.** 
```
number
object
array
object
```

**C.** 
```
number
null
object
object
```

**D.** 
```
number
null
array
array
```

**题目8答案：** ___A_____

---

## 中级题目（9-10题）

### 题目9：类型转换的综合应用（中级）

分析以下代码中类型转换的结果，选择正确的输出：

```javascript
const value1 = Number("123.45");
const value2 = Number("");
const value3 = Number(undefined);
const value4 = Number(null);
const value5 = Number({});
const value6 = Number(true);

const result = [
    value1,
    value2,
    typeof value3,
    value4,
    typeof value5,
    value6
];
```

**A.** `[123.45, 0, "number", 0, "number", 1]`  
**B.** `[123.45, 0, "undefined", 0, "number", 1]`  
**C.** `[123, 0, "number", 0, "number", 1]`  
**D.** `[123.45, NaN, "number", 0, "number", 1]`

**题目9答案：** ____C____ 本地选 A

---

### 题目10：类型转换的边界情况分析（中级）

分析以下代码中各种类型转换的结果，特别注意边界情况：

```javascript
// 字符串转换
const str1 = String(undefined);
const str2 = String(null);
const str3 = String("");
const str4 = String({});

// 布尔值转换
const bool1 = Boolean("");
const bool2 = Boolean(undefined);
const bool3 = Boolean(null);
const bool4 = Boolean({});

// 数值转换的特殊情况
const num1 = parseInt("123.45");
const num2 = parseFloat("123.45");
const num3 = Number("123abc");
const num4 = Number(" 123 ");

const result = {
    strings: [str1, str2, str3, str4],
    booleans: [bool1, bool2, bool3, bool4],
    numbers: [num1, num2, num3, num4]
};
```

以下哪个选项正确描述了转换结果？

**A.** 
- `strings`: `["undefined", "null", "", "[object Object]"]`
- `booleans`: `[false, false, false, true]`
- `numbers`: `[123, 123.45, NaN, 123]`

**B.** 
- `strings`: `["undefined", "", "", "[object Object]"]`
- `booleans`: `[false, false, false, true]`
- `numbers`: `[123, 123.45, NaN, 123]`

**C.** 
- `strings`: `["undefined", "null", "", "[object Object]"]`
- `booleans`: `[false, false, false, true]`
- `numbers`: `[123.45, 123.45, NaN, 123]`

**D.** 
- `strings`: `["undefined", "null", "", "[object Object]"]`
- `booleans`: `[true, false, false, true]`
- `numbers`: `[123, 123.45, NaN, 123]`

**题目10答案：** ____A____