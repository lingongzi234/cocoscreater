# 第三阶段作业 - JS基础：运算符

**姓名：** ___李松_____
**成绩：** ___100_____

---

## 初级题目（1-8题）

### 题目1：算术运算符（初级）

以下代码的输出结果是什么？

```javascript
const a = 10;
const b = 3;

console.log(a + b);
console.log("10" + 3);
console.log(a - b);
console.log("10" - 3);
```

**A.** 
```
13
103
7
7
```

**B.** 
```
13
13
7
7
```

**C.** 
```
13
103
7
10-3
```

**D.** 
```
13
103
7
NaN
```

**题目1答案：** ___A_____

---

### 题目2：赋值运算符（初级）

以下代码的输出结果是什么？

```javascript
let x = 10;
let y = 5;

x += 3;
y -= 2;
x *= 2;
y /= 2;

console.log(x);
console.log(y);
```

**A.** `26` 和 `1.5`  
**B.** `26` 和 `1`  
**C.** `13` 和 `1.5`  
**D.** `13` 和 `1`

**题目2答案：** ___A_____

---

### 题目3：一元正负运算符（初级）

以下代码的输出结果是什么？

```javascript
const num = 5;
const str = "10";

console.log(+num);
console.log(-num);
console.log(+str);
console.log(-str);
```

**A.** 
```
5
-5
10
-10
```

**B.** 
```
5
-5
"10"
"-10"
```

**C.** 
```
5
-5
10
10
```

**D.** 
```
5
5
10
-10
```

**题目3答案：** ___A_____

---

### 题目4：自增与自减（初级）

以下代码的输出结果是什么？

```javascript
let a = 5;
let b = 5;

console.log(a++);
console.log(++b);
console.log(a);
console.log(b);

let c = 5;
let d = 5;

console.log(c--);
console.log(--d);
console.log(c);
console.log(d);
```

**A.** 
```
5
6
6
6
5
4
4
4
```

**B.** 
```
6
6
6
6
4
4
4
4
```

**C.** 
```
5
6
6
5
5
4
4
4
```

**D.** 
```
6
5
6
6
4
5
4
4
```

**题目4答案：** ___A_____

---

### 题目5：逻辑非运算符（初级）

以下代码的输出结果是什么？

```javascript
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!"");
```

**A.** 
```
false
true
true
true
```

**B.** 
```
false
true
false
true
```

**C.** 
```
true
false
true
true
```

**D.** 
```
false
true
true
false
```

**题目5答案：** ___A_____

---

### 题目6：逻辑与和逻辑或（初级）

以下代码的输出结果是什么？

```javascript
console.log(true && false);
console.log(false || true);
console.log(5 && 3);
console.log(0 || 3);
```

**A.** 
```
false
true
3
3
```

**B.** 
```
false
true
5
3
```

**C.** 
```
true
true
3
3
```

**D.** 
```
false
false
5
3
```

**题目6答案：** _____A___

---

### 题目7：关系运算符（初级）

以下代码的输出结果是什么？

```javascript
console.log(5 > 3);
console.log(5 >= 5);
console.log("5" > 3);
console.log("10" > "2");
```

**A.** 
```
true
true
true
false
```

**B.** 
```
true
true
true
true
```

**C.** 
```
true
false
true
false
```

**D.** 
```
false
true
true
false
```

**题目7答案：** ____A____

---

### 题目8：相等运算符（初级）

以下代码的输出结果是什么？

```javascript
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
```

**A.** 
```
true
false
false
true
```

**B.** 
```
true
true
false
true
```

**C.** 
```
false
false
true
true
```

**D.** 
```
true
false
true
false
```

**题目8答案：** ____A____

---

## 中级题目（9-10题）

### 题目9：条件运算符（中级）

分析以下代码，选择正确的输出结果：

```javascript
const age = 18;
const score = 85;

const result1 = age >= 18 ? "成年" : "未成年";
const result2 = score >= 90 ? "优秀" : score >= 60 ? "及格" : "不及格";
const result3 = age >= 18 && score >= 60 ? "通过" : "不通过";
const result4 = age < 18 || score < 60 ? "需要关注" : "正常";

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
```

**A.** 
```
成年
及格
通过
正常
```

**B.** 
```
成年
优秀
通过
正常
```

**C.** 
```
成年
及格
通过
需要关注
```

**D.** 
```
未成年
及格
不通过
正常
```

**题目9答案：** ____A___

---

### 题目10：运算符优先级（中级）

分析以下代码，选择正确的输出结果：

```javascript
let a = 2;
let b = 3;
let c = 4;

const result1 = a + b * c;
const result2 = (a + b) * c;
const result3 = a > b && b < c;
const result4 = a + b > c || b * c < 10;
const result5 = !a || b && c;
const result6 = a++ + ++b * c;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(a);
console.log(b);
```

**A.** 
```
14
20
false
true
4
18
3
4
```

**B.** 
```
14
20
false
true
4
18
2
4
```

**C.** 
```
14
20
false
false
4
18
3
4
```

**D.** 
```
20
14
false
true
4
18
3
4
```

**题目10答案：** ___A_____
