# 第七阶段作业 - JS基础：排序算法

**姓名：** ___李松_____
**分数：** ___100_____

---

## 初级题目（1-4题）

### 题目1：冒泡排序的基本原理（初级）

以下代码实现了冒泡排序，分析代码执行过程，选择正确的输出结果：

```javascript
const arr = [3, 1, 4, 2];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);
```

**A.** `[1, 2, 3, 4]`  
**B.** `[3, 1, 4, 2]`  
**C.** `[4, 3, 2, 1]`  
**D.** `[1, 3, 2, 4]`

**题目1答案：** ____A____

---

### 题目2：冒泡排序的循环次数（初级）

分析以下冒泡排序代码，第一轮外层循环结束后，数组的状态是什么？

```javascript
const arr = [5, 2, 8, 1];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    if (i === 0) {
        break;
    }
}

console.log(arr);
```

**A.** `[2, 5, 1, 8]`  
**B.** `[2, 5, 8, 1]`  
**C.** `[5, 2, 8, 1]`  
**D.** `[1, 2, 5, 8]`

**题目2答案：** ____A____

---

### 题目3：选择排序的基本原理（初级）

以下代码实现了选择排序，分析代码执行过程，选择正确的输出结果：

```javascript
const arr = [4, 2, 3, 1];

for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

console.log(arr);
```

**A.** `[1, 2, 3, 4]`  
**B.** `[4, 2, 3, 1]`  
**C.** `[1, 4, 3, 2]`  
**D.** `[2, 3, 4, 1]`

**题目3答案：** ____A____

---

### 题目4：选择排序的查找最小值（初级）

分析以下选择排序代码，第一轮外层循环中，找到的最小值索引是多少？

```javascript
const arr = [5, 2, 8, 1, 3];

let minIndex = 0;
for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
        minIndex = j;
    }
}

console.log(minIndex);
console.log(arr[minIndex]);
```

**A.** 
```
3
1
```

**B.** 
```
0
5
```

**C.** 
```
2
8
```

**D.** 
```
1
2
```

**题目4答案：** ___A_____

---

## 中级题目（5题）

### 题目5：实际项目需求 - 商品价格排序（中级）

**项目背景**：
你正在开发一个电商系统的商品列表页面。产品经理要求实现商品价格从低到高的排序功能，用于帮助用户快速找到价格最低的商品。

**需求描述**：
1. 给定一个商品价格数组，需要按价格从低到高进行排序
2. 可以使用冒泡排序或选择排序中的任意一种算法实现
3. 排序后的结果需要直接修改原数组（不需要返回新数组）

**测试数据**：
```javascript
const prices = [299, 199, 399, 149, 249];
```

**预期结果**：
排序后的数组应该是：`[149, 199, 249, 299, 399]`

**编程要求**：
请选择使用**冒泡排序**或**选择排序**中的一种，编写完整的排序代码。

**代码模板**（请在此处编写你的代码）：
```javascript
const prices = [299, 199, 399, 149, 249];
//冒泡排序
for(let i=0;i<prices.length;i++){
    let swap=false;
    for(let j=0;j<prices.length-i-1;j++){
        if(prices[j]>prices[j+1]){
            let temp=prices[j];
            prices[j]=prices[j+1];
            prices[j+1]=temp;
            swap=true;
        }
    }
    if(!swap)break;
    
}
//快排
function quickSort(arr,left=0,right=arr.length-1){
        if(left>=right) return;
        const key=partition(arr,left,right);
        quickSort(arr,left,key-1);
        quickSort(arr,key+1,right);
       
}
function partition(arr,left,right)
{
    const p=arr[left];
    let i=left+1;
    let j=right;
    
    while(i<=j){
        while (i <= j && arr[i] <= p) i++;
        while (i <= j && arr[j] > p) j--;
        if(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        
    }
         let temp=arr[left];
            arr[left]=arr[j];
            arr[j]=temp;
            return j;
}

// 请在此处编写排序代码
// 可以使用冒泡排序或选择排序

console.log(prices); // 应该输出 [149, 199, 249, 299, 399]
```