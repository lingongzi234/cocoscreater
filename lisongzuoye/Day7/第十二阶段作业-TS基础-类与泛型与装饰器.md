# 第十二阶段作业 - TS基础：类与泛型与装饰器

**姓名：** ___李松_____
**分数：** ____100___

---

## 初级题目（1-8题）

### 题目1：TypeScript 类的基本定义（初级）

以下代码中，哪个选项的类型声明是正确的？

```typescript
class User {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User("张三", 25);
```

**A.** 代码编译通过，`user` 的类型是 `User`  
**B.** 代码编译错误，类属性必须初始化  
**C.** 代码编译错误，`constructor` 参数类型声明不正确  
**D.** 代码编译错误，不能使用 `new` 创建实例

**题目1答案：** ____A____

---

### 题目2：类的访问修饰符（初级）

以下代码中，哪个选项会编译错误？

```typescript
class Person {
    public name: string;
    private age: number;
    protected email: string;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const person = new Person("张三", 25, "zhang@example.com");
```

**A.** `console.log(person.name);`  
**B.** `console.log(person.age);`  
**C.** `person.name = "李四";`  
**D.** 所有选项都正确

**题目2答案：** ____B____

---

### 题目3：泛型的基本使用（初级）

以下代码中，哪个选项的类型声明是正确的？

```typescript
class Box<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(10);
const stringBox = new Box<string>("hello");
```

**A.** `numberBox.getValue()` 的类型是 `number`，`stringBox.getValue()` 的类型是 `string`  
**B.** `numberBox.getValue()` 的类型是 `any`，`stringBox.getValue()` 的类型是 `any`  
**C.** `numberBox.getValue()` 的类型是 `T`，`stringBox.getValue()` 的类型是 `T`  
**D.** 代码编译错误，泛型语法不正确

**题目3答案：** ___A_____

---

### 题目4：泛型约束（初级）

以下代码中，哪个选项会编译错误？

```typescript
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(item: T): number {
    return item.length;
}

const str = "hello";
const arr = [1, 2, 3];
const num = 10;
```

**A.** `getLength(str);`  
**B.** `getLength(arr);`  
**C.** `getLength(num);`  
**D.** 所有选项都正确

**题目4答案：** ____C____

---

### 题目5：方法装饰器的基础使用（初级）

以下代码的输出结果是什么？

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`调用方法: ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
const result = calc.add(10, 5);
console.log(result);
```

**A.** 
```
调用方法: add
15
```

**B.** 
```
15
```

**C.** 
```
调用方法: add
```

**D.** 代码报错，装饰器语法不正确

**题目5答案：** ___A_____

---

### 题目6：类的继承与泛型（初级）

以下代码中，哪个选项的类型声明是正确的？

```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

const dog = new Dog("旺财", "金毛");
```

**A.** `dog` 的类型是 `Dog`，`dog instanceof Animal` 为 `true`  
**B.** `dog` 的类型是 `Animal`，`dog instanceof Animal` 为 `true`  
**C.** `dog` 的类型是 `Dog`，`dog instanceof Animal` 为 `false`  
**D.** 代码编译错误，继承语法不正确

**题目6答案：** ____A____

---

### 题目7：泛型接口与类（初级）

以下代码中，哪个选项的类型声明是正确的？

```typescript
interface Container<T> {
    value: T;
    getValue(): T;
}

class Box<T> implements Container<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

const box = new Box<number>(10);
```

**A.** `box` 的类型是 `Box<number>`，`box.value` 的类型是 `number`  
**B.** `box` 的类型是 `Container<number>`，`box.value` 的类型是 `number`  
**C.** `box` 的类型是 `Box<T>`，`box.value` 的类型是 `T`  
**D.** 代码编译错误，泛型接口实现不正确

**题目7答案：** ____A____

---

### 题目8：方法装饰器访问实例属性（初级）

以下代码的输出结果是什么？

```typescript
function logCall(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`调用方法: ${propertyKey}`);
        console.log(`实例名称: ${this.name}`);
        return originalMethod.apply(this, args);
    };
}

class UserService {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    @logCall
    getUserInfo(): string {
        return `用户: ${this.name}`;
    }
}

const service = new UserService("张三");
service.getUserInfo();
```

**A.** 
```
调用方法: getUserInfo
实例名称: 张三
```

**B.** 
```
用户: 张三
```

**C.** 
```
调用方法: getUserInfo
实例名称: undefined
用户: 张三
```

**D.** 代码报错，装饰器不能访问实例属性

**题目8答案：** _____A___

---

## 中级题目（9-10题）

### 题目9：泛型在实际场景中的应用（中级）

分析以下代码，这是一个数据缓存系统的设计。选择正确的输出结果：

```typescript
interface CacheItem<T> {
    key: string;
    value: T;
    timestamp: number;
}

class Cache<T> {
    private items: Map<string, CacheItem<T>> = new Map();
    private ttl: number; // 生存时间（毫秒）
    
    constructor(ttl: number = 60000) {
        this.ttl = ttl;
    }
    
    set(key: string, value: T): void {
        this.items.set(key, {
            key,
            value,
            timestamp: Date.now()
        });
    }
    
    get(key: string): T | undefined {
        const item = this.items.get(key);
        if (!item) {
            return undefined;
        }
        
        // 检查是否过期
        if (Date.now() - item.timestamp > this.ttl) {
            this.items.delete(key);
            return undefined;
        }
        
        return item.value;
    }
}

const stringCache = new Cache<string>(5000);
const numberCache = new Cache<number>(5000);

stringCache.set("name", "张三");
numberCache.set("age", 25);

setTimeout(() => {
    console.log(stringCache.get("name"));
    console.log(numberCache.get("age"));
}, 6000);
```

**A.** 
```
张三
25
```

**B.** 
```
undefined
undefined
```

**C.** 
```
张三
undefined
```

**D.** 代码报错，泛型使用不正确

**题目9答案：** ____B____

---

### 题目10：方法装饰器在实际场景中的应用（中级）

分析以下代码，这是一个权限控制系统的设计。选择正确的输出结果：

```typescript
function requirePermission(permission: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`检查权限: ${permission}`);
            const hasPermission = this.checkPermission(permission);
            if (!hasPermission) {
                console.log("权限不足");
                return false;
            }
            return originalMethod.apply(this, args);
        };
    };
}

class AdminService {
    private permissions: string[] = ["read", "write"];
    
    checkPermission(permission: string): boolean {
        return this.permissions.includes(permission);
    }
    
    @requirePermission("read")
    viewData(): boolean {
        console.log("查看数据");
        return true;
    }
    
    @requirePermission("delete")
    deleteData(): boolean {
        console.log("删除数据");
        return true;
    }
}

const admin = new AdminService();
admin.viewData();
admin.deleteData();
```

**A.** 
```
检查权限: read
查看数据
检查权限: delete
权限不足
```

**B.** 
```
查看数据
删除数据
```

**C.** 
```
检查权限: read
查看数据
检查权限: delete
删除数据
```

**D.** 代码报错，装饰器使用不正确

**题目10答案：** _____A___
