# 第六阶段作业 - JS基础：数组

**姓名：** ____李松____
**分数：** ___100_____

---

## 初级题目（1-8题）

### 题目1：数组的创建和访问（初级）

以下代码的输出结果是什么？

```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(3);
const arr3 = [];

console.log(arr1[0]);
console.log(arr2[0]);
console.log(arr3[0]);
console.log(arr1.length);
```

**A.** 
```
1
undefined
undefined
3
```

**B.** 
```
1
3
undefined
3
```

**C.** 
```
1
undefined
undefined
4
```

**D.** 
```
0
undefined
undefined
3
```

**题目1答案：** _____A___

---

### 题目2：数组的遍历 - for 循环（初级）

以下代码的输出结果是什么？

```javascript
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
```

**A.** 
```
0 10
1 20
2 30
```

**B.** 
```
1 10
2 20
3 30
```

**C.** 
```
10
20
30
```

**D.** 
```
0
1
2
```

**题目2答案：** __A______

---

### 题目3：for-of 语句（初级）

以下代码的输出结果是什么？

```javascript
const arr = ["a", "b", "c"];

for (let item of arr) {
    console.log(item);
}
```

**A.** 
```
a
b
c
```

**B.** 
```
0
1
2
```

**C.** 
```
0 a
1 b
2 c
```

**D.** 
```
a
b
c
undefined
```

**题目3答案：** ____A____

---

### 题目4：数组方法 - push 和 pop（初级）

以下代码的输出结果是什么？

```javascript
const arr = [1, 2, 3];

arr.push(4);
arr.push(5);
const last = arr.pop();

console.log(arr);
console.log(last);
console.log(arr.length);
```

**A.** 
```
[1, 2, 3, 4]
5
4
```

**B.** 
```
[1, 2, 3, 4, 5]
5
5
```

**C.** 
```
[1, 2, 3]
4
3
```

**D.** 
```
[1, 2, 3]
5
3
```

**题目4答案：** ____A____

---

### 题目5：数组方法 - unshift 和 shift（初级）

以下代码的输出结果是什么？

```javascript
const arr = [2, 3];

arr.unshift(1);
const first = arr.shift();
arr.unshift(0);

console.log(arr);
console.log(first);
console.log(arr.length);
```

**A.** 
```
[0, 2, 3]
1
3
```

**B.** 
```
[0, 3]
1
2
```

**C.** 
```
[1, 2, 3]
1
3
```

**D.** 
```
[0, 2, 3]
0
3
```

**题目5答案：** ____A____

---

### 题目6：数组方法 - indexOf 和 includes（初级）

以下代码的输出结果是什么？

```javascript
const arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));
console.log(arr.indexOf(40));
console.log(arr.includes(20));
console.log(arr.includes(40));
```

**A.** 
```
1
-1
true
false
```

**B.** 
```
2
-1
true
false
```

**C.** 
```
1
0
true
false
```

**D.** 
```
1
-1
false
false
```

**题目6答案：** ___A_____

---

### 题目7：数组方法 - slice 和 splice（初级）

以下代码的输出结果是什么？

```javascript
const arr = [1, 2, 3, 4, 5];

const sliced = arr.slice(1, 3);
arr.splice(2, 1);

console.log(sliced);
console.log(arr);
console.log(arr.length);
```

**A.** 
```
[2, 3]
[1, 2, 4, 5]
4
```

**B.** 
```
[2, 3]
[1, 2, 3, 4, 5]
5
```

**C.** 
```
[1, 2]
[1, 2, 4, 5]
4
```

**D.** 
```
[2, 3, 4]
[1, 2, 4, 5]
4
```

**题目7答案：** ____A____

---

### 题目8：数组方法 - reverse（初级）

以下代码的输出结果是什么？

```javascript
const arr = [1, 2, 3, 4];

const reversed = arr.reverse();

console.log(arr);
console.log(reversed);
console.log(arr === reversed);
```

**A.** 
```
[4, 3, 2, 1]
[4, 3, 2, 1]
true
```

**B.** 
```
[1, 2, 3, 4]
[4, 3, 2, 1]
false
```

**C.** 
```
[4, 3, 2, 1]
[1, 2, 3, 4]
false
```

**D.** 
```
[1, 2, 3, 4]
[1, 2, 3, 4]
true
```

**题目8答案：** ____A____

---

## 中级题目（9-10题）

### 题目9：数组去重（中级）

以下代码的输出结果是什么？

```javascript
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [];

for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}

console.log(unique);
console.log(unique.length);
```

**A.** 
```
[1, 2, 3, 4]
4
```

**B.** 
```
[1, 2, 2, 3, 3, 3, 4]
7
```

**C.** 
```
[1, 2, 3, 4]
7
```

**D.** 
```
[2, 3]
2
```

**题目9答案：** ___A_____

---

### 题目10：数组方法的综合应用（中级）

以下代码的输出结果是什么？

```javascript
const arr = [5, 2, 8, 1, 9];

arr.push(3);
arr.sort();
const index = arr.indexOf(5);
arr.splice(index, 1);

console.log(arr);
console.log(arr.length);
```

**A.** 
```
[1, 2, 3, 8, 9]
5
```

**B.** 
```
[2, 8, 1, 9, 3]
5
```

**C.** 
```
[1, 2, 3, 5, 8, 9]
6
```

**D.** 
```
[1, 2, 3, 5, 8, 9]
5
```

**题目10答案：** ___A_____
