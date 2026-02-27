# 第九阶段作业 - TS基础：类型声明

**姓名：** ____李松____
**分数：** ____90___

---

## 初级题目（1-8题）

### 题目1：对象类型声明（初级）

以下代码中，哪个选项的类型声明是正确的且最精确的？

```typescript
const user = {
    name: "张三",
    age: 25,
    isActive: true
};
```

**A.** `const user: object = { name: "张三", age: 25, isActive: true };`  
**B.** `const user: { name: string; age: number; isActive: boolean; } = { name: "张三", age: 25, isActive: true };`  
**C.** `const user: { name: string; age: number } = { name: "张三", age: 25, isActive: true };`  
**D.** 不需要类型声明，TypeScript 会自动推断为 `{ name: string; age: number; isActive: boolean }`

**题目1答案：** __B______

---

### 题目2：对象类型与只读属性（初级）

以下代码中，哪个选项会编译错误？

```typescript
type User = {
    readonly id: number;
    name: string;
    age: number;
};

const user: User = {
    id: 1,
    name: "张三",
    age: 25
};
```

**A.** `user.id = 2;`  
**B.** `user.name = "李四";`  
**C.** `user.age = 30;`  
**D.** `const newUser = { ...user, name: "王五" };`

**题目2答案：** ____A____

---

### 题目3：数组类型声明（初级）

以下代码中，哪个选项的类型声明会编译错误？

```typescript
const numbers = [1, 2, 3];
const names = ["a", "b", "c"];
```

**A.** 
```typescript
const numbers: number[] = [1, 2, 3];
const names: string[] = ["a", "b", "c"];
```

**B.** 
```typescript
const numbers: Array<number> = [1, 2, 3];
const names: Array<string> = ["a", "b", "c"];
```

**C.** 
```typescript
const numbers: [number] = [1, 2, 3];
const names: [string] = ["a", "b", "c"];
```

**D.** 选项A和B都正确，选项C错误

**题目3答案：** ___C____

---

### 题目4：数组类型与对象数组（初级）

以下代码中，哪个选项的类型声明是正确的且最精确的？

```typescript
const users = [
    { name: "张三", age: 25 },
    { name: "李四", age: 30 }
];
```

**A.** `const users: object[] = [...];`  
**B.** `const users: { name: string; age: number; }[] = [...];`  
**C.** `const users: Array<object> = [...];`  
**D.** `const users: Array<{ name: string }> = [...];`

**题目4答案：** ____B____

---

### 题目5：函数类型声明（初级）

以下代码中，哪个选项的函数类型声明会编译错误？

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

**A.** `const add: (a: number, b: number) => number = function(a, b) { return a + b; };`  
**B.** `const add: (a: number, b: number) => number = (a, b) => a + b;`  
**C.** `const add: function(a: number, b: number): number = (a, b) => a + b;`  
**D.** 选项A和B都正确，选项C错误
**题目5答案：** ____C____

---

### 题目6：函数参数类型（初级）

以下代码中，哪个选项会编译错误？

```typescript
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}, age ${age}`;
    }
    return `Hello, ${name}`;
}
```

**A.** `greet("张三");`  
**B.** `greet("张三", 25);`  
**C.** `greet("张三", undefined);`  
**D.** `greet("张三", "25");`

**题目6答案：** ____D____

---

### 题目7：函数返回值类型（初级）

以下代码中，哪个选项的函数返回值类型声明是正确的？

```typescript
function getValue(): number {
    return 10;
}

function getString(): string {
    return "hello";
}

function noReturn(): void {
    console.log("test");
}
```

**A.** 三个函数的返回值类型声明都正确  
**B.** `getValue()` 和 `getString()` 正确，`noReturn()` 应该返回 `undefined`  
**C.** `getValue()` 和 `getString()` 正确，`noReturn()` 不需要返回值类型  
**D.** 只有 `getValue()` 和 `getString()` 正确

**题目7答案：** ____A____

---

### 题目8：类型推断与显式声明（初级）

以下代码中，哪个选项的类型推断结果正确？

```typescript
const arr = [1, 2, 3];
const obj = { name: "test", age: 20 };
const func = (x: number) => x * 2;
```

**A.** 
- `arr` 的类型是 `number[]`
- `obj` 的类型是 `{ name: string; age: number; }`
- `func` 的类型是 `(x: number) => number`

**B.** 
- `arr` 的类型是 `any[]`
- `obj` 的类型是 `object`
- `func` 的类型是 `Function`

**C.** 
- `arr` 的类型是 `number[]`
- `obj` 的类型是 `object`
- `func` 的类型是 `Function`

**D.** 
- `arr` 的类型是 `any[]`
- `obj` 的类型是 `{ name: string; age: number; }`
- `func` 的类型是 `(x: number) => number`

**题目8答案：** ___C_____ 此题选 A，此处考的是类型推断而不是运行时的 typeof 执行结果

---

## 中级题目（9-10题）

### 题目9：对象类型与只读属性的综合应用（中级）

分析以下代码，选择正确的类型声明：

```typescript
type Config = {
    readonly apiUrl: string;
    timeout: number;
    retry: boolean;
};

const config: Config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retry: true
};

config.timeout = 3000;
config.retry = false;
```

以下哪个选项正确描述了代码的执行结果？

**A.** 代码编译通过，可以正常修改 `timeout` 和 `retry`  
**B.** 代码编译错误，`apiUrl` 是只读属性，不能修改  
**C.** 代码编译错误，所有属性都是只读的，不能修改  
**D.** 代码编译通过，但 `timeout` 和 `retry` 不能修改

**题目9答案：** _____A___

---

### 题目10：函数类型与对象类型的组合应用（中级）

分析以下代码，选择正确的类型声明：

```typescript
type Calculator = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    value: number;
};

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    value: 0
};

const result1 = calc.add(10, 5);
const result2 = calc.subtract(10, 5);
calc.value = result1;
```

以下哪个选项正确描述了代码的执行结果？

**A.** 
- `result1` 的类型是 `number`，值为 `15`
- `result2` 的类型是 `number`，值为 `5`
- `calc.value` 被修改为 `15`
- 代码编译通过

**B.** 
- `result1` 的类型是 `any`，值为 `15`
- `result2` 的类型是 `any`，值为 `5`
- `calc.value` 被修改为 `15`
- 代码编译通过

**C.** 
- `result1` 的类型是 `number`，值为 `15`
- `result2` 的类型是 `number`，值为 `5`
- `calc.value` 不能修改，编译错误

**D.** 
- 代码编译错误，函数类型声明不正确

**题目10答案：** ___A_____
