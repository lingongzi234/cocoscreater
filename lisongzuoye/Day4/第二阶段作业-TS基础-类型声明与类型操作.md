# 第二阶段作业 - TS基础：类型声明与类型操作

**姓名：** ___李松_____

**成绩：** ___90_____

---

## 初级题目（1-8题）

### 题目1：基本类型声明（初级）

以下哪个是正确的 TypeScript 类型声明？

```typescript
let age: number = 25;
let name: string = "张三";
let isActive: boolean = true;
```

**A.** 语法错误，TypeScript 不需要类型声明  
**B.** 语法正确，这是 TypeScript 的基本类型声明方式  
**C.** 语法错误，应该使用 `const` 而不是 `let`  
**D.** 语法错误，类型声明应该在变量名后面用 `as` 关键字

**题目1答案：** _____B___

---

### 题目2：类型推断（初级）

分析以下代码，变量 `result` 的类型是什么？

```typescript
const num = 100;
const str = "hello";
const result = num + str;
```

**A.** `number`  
**B.** `string`  
**C.** `number | string`  
**D.** `any`

**题目2答案：** ____B____

---

### 题目3：数组类型声明（初级）

以下哪个是正确的数组类型声明方式？

```typescript
// 选项A
let arr1: number[] = [1, 2, 3];

// 选项B
let arr2: Array<number> = [1, 2, 3];

// 选项C
let arr3: [number] = [1, 2, 3];
```

**A.** 只有选项A正确  
**B.** 只有选项B正确  
**C.** 选项A和B都正确，选项C错误  
**D.** 三个选项都正确

**题目3答案：** ___C_____

---

### 题目4：对象类型声明（初级）

以下代码中，变量 `user` 的类型是什么？

```typescript
const user = {
    name: "张三",
    age: 25,
    isActive: true
};
```

**A.** `any`  
**B.** `object`  
**C.** `{ name: string; age: number; isActive: boolean; }`  
**D.** `{ name: string, age: number, isActive: boolean }`

**题目1答案：** ________

**题目4答案：** ___B_____ 本题选 C

---

### 题目5：联合类型（初级）

以下代码中，变量 `value` 可以接受哪些类型的值？

```typescript
let value: string | number;
value = "hello";
value = 123;
```

**A.** 只能接受 `string` 类型  
**B.** 只能接受 `number` 类型  
**C.** 可以接受 `string` 或 `number` 类型  
**D.** 可以接受任何类型

**题目1答案：** ________

**题目5答案：** _____C___

---

### 题目6：交叉类型（初级）

分析以下代码，变量 `combined` 的类型是什么？

```typescript
type A = { name: string };
type B = { age: number };
type Combined = A & B;

const combined: Combined = {
    name: "张三",
    age: 25
};
```

**A.** `A`  
**B.** `B`  
**C.** `A & B`（包含 `name` 和 `age` 属性）  
**D.** `A | B`（只包含 `name` 或 `age` 属性）

**题目1答案：** ________

**题目6答案：** ___C_____

---

### 题目7：typeof 操作符（初级）

分析以下代码，`TypeA` 的类型是什么？

```typescript
const obj = {
    name: "test",
    age: 20
};

type TypeA = typeof obj;
```

**A.** `object`  
**B.** `any`  
**C.** `{ name: string; age: number; }`  
**D.** `typeof obj`

**题目1答案：** ________

**题目7答案：** ____C____

---

### 题目8：keyof 操作符（初级）

分析以下代码，`Keys` 的类型是什么？

```typescript
type User = {
    name: string;
    age: number;
    isActive: boolean;
};

type Keys = keyof User;
```

**A.** `string`  
**B.** `"name" | "age" | "isActive"`  
**C.** `string | number | boolean`  
**D.** `User`

**题目1答案：** ________

**题目8答案：** ____B____

---

## 中级题目（9-10题）

### 题目9：类型操作的综合应用（中级）

分析以下代码，选择正确的类型推断结果：

```typescript
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retry: true
};

type ConfigType = typeof config;
type ConfigKeys = keyof ConfigType;
type ApiUrlType = ConfigType["apiUrl"];
type TimeoutType = ConfigType["timeout"];
```

以下哪个选项正确描述了这些类型？

**A.** 
- `ConfigType`: `{ apiUrl: string; timeout: number; retry: boolean; }`
- `ConfigKeys`: `"apiUrl" | "timeout" | "retry"`
- `ApiUrlType`: `string`
- `TimeoutType`: `number`

**B.** 
- `ConfigType`: `typeof config`
- `ConfigKeys`: `string`
- `ApiUrlType`: `any`
- `TimeoutType`: `any`

**C.** 
- `ConfigType`: `{ apiUrl: string; timeout: number; retry: boolean; }`
- `ConfigKeys`: `string | number | boolean`
- `ApiUrlType`: `string`
- `TimeoutType`: `number`

**D.** 
- `ConfigType`: `object`
- `ConfigKeys`: `"apiUrl" | "timeout" | "retry"`
- `ApiUrlType`: `string`
- `TimeoutType`: `number`

**题目9答案：** ____A____

---

### 题目10：联合类型与交叉类型的组合应用（中级）

分析以下代码，选择正确的类型推断结果：

```typescript
type BaseInfo = {
    id: number;
    name: string;
};

type UserInfo = BaseInfo & {
    email: string;
    age: number;
};

type AdminInfo = BaseInfo & {
    role: string;
    permissions: string[];
};

type UserOrAdmin = UserInfo | AdminInfo;

const user: UserOrAdmin = {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    age: 25
};
```

以下哪个选项正确描述了类型关系？

**A.** 
- `UserInfo` 包含：`id`, `name`, `email`, `age`
- `AdminInfo` 包含：`id`, `name`, `role`, `permissions`
- `UserOrAdmin` 可以是 `UserInfo` 或 `AdminInfo`
- `user` 变量必须同时包含 `UserInfo` 和 `AdminInfo` 的所有属性

**B.** 
- `UserInfo` 包含：`id`, `name`, `email`, `age`
- `AdminInfo` 包含：`id`, `name`, `role`, `permissions`
- `UserOrAdmin` 可以是 `UserInfo` 或 `AdminInfo`
- `user` 变量只需要包含 `UserInfo` 的所有属性即可

**C.** 
- `UserInfo` 包含：`id`, `name`, `email`, `age`
- `AdminInfo` 包含：`id`, `name`, `role`, `permissions`
- `UserOrAdmin` 必须同时包含 `UserInfo` 和 `AdminInfo` 的所有属性
- `user` 变量需要包含所有属性

**D.** 
- `UserInfo` 包含：`id`, `name`, `email`, `age`
- `AdminInfo` 包含：`id`, `name`, `role`, `permissions`
- `UserOrAdmin` 只包含 `BaseInfo` 的属性
- `user` 变量只需要包含 `BaseInfo` 的属性

**题目10答案：** ____B____