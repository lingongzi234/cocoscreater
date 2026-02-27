# 第八阶段作业 - JS基础：函数

**姓名：** ____李松____
**分数：** ___90_____

---

## 初级题目（1-8题）

### 题目1：函数的创建方式（初级）

以下代码的输出结果是什么？

```javascript
function sayHello() {
    console.log("Hello");
}

const sayHi = function() {
    console.log("Hi");
};

const sayHey = () => {
    console.log("Hey");
};

sayHello();
sayHi();
sayHey();
```

**A.** 
```
Hello
Hi
Hey
```

**B.** 
```
Hello
Hi
```

**C.** 
```
报错
```

**D.** 
```
Hello
```

**题目1答案：** ___A_____

---

### 题目2：函数参数（初级）

以下代码的输出结果是什么？

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(1));
console.log(add(1, 2, 3));
```

**A.** 
```
3
NaN
3
```

**B.** 
```
3
1
6
```

**C.** 
```
3
undefined
3
```

**D.** 
```
报错
```

**题目2答案：** _____A___

---

### 题目3：箭头函数的参数（初级）

以下代码的输出结果是什么？

```javascript
const add1 = (a, b) => a + b;
const add2 = a => a + 10;
const add3 = () => 100;

console.log(add1(5, 3));
console.log(add2(5));
console.log(add3());
```

**A.** 
```
8
15
100
```

**B.** 
```
8
5
100
```

**C.** 
```
8
15
undefined
```

**D.** 
```
报错
```

**题目3答案：** ___A_____

---

### 题目4：参数默认值（初级）

以下代码的输出结果是什么？

```javascript
function greet(name, message = "Hello") {
    return message + " " + name;
}

console.log(greet("张三"));
console.log(greet("李四", "Hi"));
console.log(greet("王五", undefined));
```

**A.** 
```
Hello 张三
Hi 李四
Hello 王五
```

**B.** 
```
Hello 张三
Hi 李四
undefined 王五
```

**C.** 
```
Hello 张三
Hi 李四
报错
```

**D.** 
```
张三
Hi 李四
王五
```

**题目4答案：** _____A___

---

### 题目5：函数作为对象的方法（初级）

以下代码的输出结果是什么？

```javascript
const user = {
    name: "张三",
    age: 25,
    getName: function() {
        return this.name;
    },
    getAge: () => {
        return this.age;
    }
};

console.log(user.getName());
console.log(user.getAge());
```

**A.** 
```
张三
25
```

**B.** 
```
张三
undefined
```

**C.** 
```
undefined
25
```

**D.** 
```
报错
```

**题目5答案：** ___A_____ 此题选 B

---

### 题目6：使用对象作为参数（初级）

以下代码的输出结果是什么？

```javascript
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
}

const person = {
    name: "张三",
    age: 25
};

printUser(person);
printUser({ name: "李四", age: 30 });
```

**A.** 
```
张三
25
李四
30
```

**B.** 
```
张三
25
```

**C.** 
```
undefined
undefined
```

**D.** 
```
报错
```

**题目6答案：** _____A___

---

### 题目7：函数的返回值（初级）

以下代码的输出结果是什么？

```javascript
function func1() {
    return 10;
}

function func2() {
    return;
}

function func3() {
}

console.log(func1());
console.log(func2());
console.log(func3());
```

**A.** 
```
10
undefined
undefined
```

**B.** 
```
10
null
null
```

**C.** 
```
10
undefined
null
```

**D.** 
```
10
报错
```

**题目7答案：** ____A____

---

### 题目8：全局作用域与局部作用域（初级）

以下代码的输出结果是什么？

```javascript
let globalVar = "global";

function test() {
    let localVar = "local";
    console.log(globalVar);
    console.log(localVar);
}

test();
console.log(globalVar);
console.log(localVar);
```

**A.** 
```
global
local
global
local
```

**B.** 
```
global
local
global
报错
```

**C.** 
```
global
local
global
undefined
```

**D.** 
```
报错
```

**题目8答案：** ___B_____

---

## 中级题目（9-10题）

### 题目9：作用域链和 this（中级）

以下代码的输出结果是什么？

```javascript
const obj = {
    name: "张三",
    getName: function() {
        return this.name;
    },
    getNameArrow: () => {
        return this.name;
    },
    getInfo: function() {
        const innerFunc = function() {
            return this.name;
        };
        return innerFunc();
    },
    getInfoArrow: function() {
        const innerFunc = () => {
            return this.name;
        };
        return innerFunc();
    }
};

console.log(obj.getName());
console.log(obj.getNameArrow());
console.log(obj.getInfo());
console.log(obj.getInfoArrow());
```

**A.** 
```
张三
undefined
undefined
张三
```

**B.** 
```
张三
张三
张三
张三
```

**C.** 
```
张三
undefined
张三
张三
```

**D.** 
```
报错
```

**题目9答案：** ____A____

---

### 题目10：函数作为参数和 this 的综合应用（中级）

以下代码的输出结果是什么？

```javascript
const calculator = {
    value: 10,
    add: function(num) {
        return this.value + num;
    },
    multiply: function(num) {
        return this.value * num;
    },
    calculate: function(operation, num) {
        return operation(num);
    }
};

const result1 = calculator.calculate(calculator.add, 5);
const result2 = calculator.calculate(calculator.multiply, 3);

console.log(result1);
console.log(result2);
```

**A.** 
```
15
30
```

**B.** 
```
NaN
NaN
```

**C.** 
```
15
NaN
```

**D.** 
```
报错
```

**题目10答案：** ___B_____
