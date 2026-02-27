# 第五阶段作业 - JS基础：对象

**姓名：** ___李松_____
**分数：** ___100_____

---

## 初级题目（1-8题）

### 题目1：对象字面量（初级）

以下代码的输出结果是什么？

```javascript
const user = {
    name: "张三",
    age: 25,
    isActive: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isActive);
console.log(user.email);
```

**A.** 
```
张三
25
true
undefined
```

**B.** 
```
张三
25
true
null
```

**C.** 
```
张三
25
true
报错
```

**D.** 
```
张三
25
true
""
```

**题目1答案：** ____A____

---

### 题目2：对象属性访问（初级）

以下代码的输出结果是什么？

```javascript
const obj = {
    "user-name": "test",
    age: 20,
    123: "数字键"
};

console.log(obj["user-name"]);
console.log(obj.age);
console.log(obj[123]);
console.log(obj.user-name);
```

**A.** 
```
test
20
数字键
报错：name is not defined
```

**B.** 
```
test
20
数字键
test
```

**C.** 
```
test
20
undefined
报错
```

**D.** 
```
undefined
20
数字键
报错
```

**题目2答案：** __A______

---

### 题目3：添加和修改对象属性（初级）

以下代码的输出结果是什么？


```javascript
const user = {
    name: "张三"
};

user.age = 25;
user.name = "李四";
user["email"] = "lisi@example.com";

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.city);
```

**A.** 
```
李四
25
lisi@example.com
undefined
```

**B.** 
```
张三
25
lisi@example.com
undefined
```

**C.** 
```
李四
25
lisi@example.com
null
```

**D.** 
```
李四
25
lisi@example.com
报错
```

**题目3答案：** ___A____

---

### 题目4：删除对象属性（初级）

以下代码的输出结果是什么？

```javascript
const user = {
    name: "张三",
    age: 25,
    email: "zhangsan@example.com"
};

delete user.age;
delete user.city;

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.city);
```

**A.** 
```
张三
undefined
zhangsan@example.com
undefined
```

**B.** 
```
张三
25
zhangsan@example.com
undefined
```

**C.** 
```
张三
null
zhangsan@example.com
undefined
```

**D.** 
```
张三
报错
zhangsan@example.com
undefined
```

**题目4答案：** ____A____

---

### 题目5：枚举对象属性 - for...in（初级）

以下代码的输出结果是什么？

```javascript
const user = {
    name: "张三",
    age: 25,
    email: "zhangsan@example.com"
};

for (let key in user) {
    console.log(key, user[key]);
}
```

**A.** 
```
name 张三
age 25
email zhangsan@example.com
```

**B.** 
```
张三
25
zhangsan@example.com
```

**C.** 
```
0 name
1 age
2 email
```

**D.** 
```
name
age
email
```

**题目5答案：** ___A_____

---

### 题目6：变量类型检测（初级）

以下代码的输出结果是什么？

```javascript
const obj = { name: "test" };
const arr = [1, 2, 3];
const num = 123;
const nul = null;

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof num);
console.log(typeof nul);
```

**A.** 
```
object
object
number
object
```

**B.** 
```
object
array
number
null
```

**C.** 
```
object
object
number
null
```

**D.** 
```
object
array
number
object
```

**题目6答案：** ___A_____

---

### 题目7：对象引用和可变性（初级）

以下代码的输出结果是什么？

```javascript
const user1 = {
    name: "张三",
    age: 25
};

const user2 = user1;
user2.age = 30;

console.log(user1.age);
console.log(user2.age);
console.log(user1 === user2);
```

**A.** 
```
25
30
false
```

**B.** 
```
30
30
true
```

**C.** 
```
25
25
true
```

**D.** 
```
30
30
false
```

**题目7答案：** ____B____

---

### 题目8：修改变量和修改对象（初级）

以下代码的输出结果是什么？

```javascript
let a = 10;
let b = a;
b = 20;

const obj1 = { value: 10 };
const obj2 = obj1;
obj2.value = 20;

console.log(a);
console.log(b);
console.log(obj1.value);
console.log(obj2.value);
```

**A.** 
```
10
20
20
20
```

**B.** 
```
10
20
10
20
```

**C.** 
```
20
20
20
20
```

**D.** 
```
10
20
10
10
```

**题目8答案：** ___A_____

---

## 中级题目（9-10题）

### 题目9：对象属性枚举的综合应用（中级）

以下代码的输出结果是什么？

```javascript
const user = {
    name: "张三",
    age: 25,
    email: "zhangsan@example.com"
};

user.city = "北京";
delete user.email;

let result = "";
let count = 0;

for (let key in user) {
    result += key + ":" + user[key] + " ";
    count++;
}

console.log(result);
console.log(count);
```

**A.** 
```
name:张三 age:25 city:北京 
3
```

**B.** 
```
name:张三 age:25 email:zhangsan@example.com city:北京 
4
```

**C.** 
```
name:张三 age:25 
2
```

**D.** 
```
name:张三 age:25 city:北京 email:undefined 
4
```

**题目9答案：** _____A___

---

### 题目10：对象引用和嵌套对象（中级）

以下代码的输出结果是什么？

```javascript
const user1 = {
    name: "张三",
    info: {
        age: 25,
        city: "北京"
    }
};

const user2 = user1;
user2.name = "李四";
user2.info.age = 30;

const user3 = {
    name: user1.name,
    info: user1.info
};
user3.name = "王五";
user3.info.city = "上海";

console.log(user1.name);
console.log(user1.info.age);
console.log(user1.info.city);
console.log(user3.name);
```

**A.** 
```
李四
30
上海
王五
```

**B.** 
```
张三
25
北京
王五
```

**C.** 
```
李四
30
上海
李四
```

**D.** 
```
张三
25
北京
王五
```

**题目10答案：** ____A____