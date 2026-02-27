# 第十四阶段作业 - JS基础：异步编程

**姓名：** ___李松_____
**分数：** ___100_____

---

## 初级题目（1-4题）

### 题目1：Promise 构造函数和 then（初级）

以下代码的输出结果是什么？

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功");
    }, 1000);
});

promise.then((value) => {
    console.log(value);
});

console.log("开始");
```

**A.** 
```
开始
成功
```

**B.** 
```
成功
开始
```

**C.** 
```
开始
```

**D.** 代码报错，Promise 使用不正确

**题目1答案：** ____A____

---

### 题目2：Promise.resolve 和 Promise.reject（初级）

以下代码的输出结果是什么？

```javascript
Promise.resolve("成功").then((value) => {
    console.log(value);
});

Promise.reject("失败").catch((error) => {
    console.log(error);
});

console.log("执行中");
```

**A.** 
```
执行中
成功
失败
```

**B.** 
```
成功
失败
执行中
```

**C.** 
```
执行中
成功
```

**D.** 代码报错，Promise.reject 使用不正确

**题目2答案：** ____A____

---

### 题目3：async 和 await（初级）

以下代码的输出结果是什么？

```javascript
async function fetchData() {
    return "数据";
}

async function main() {
    console.log("开始");
    const result = await fetchData();
    console.log(result);
    console.log("结束");
}

main();
```

**A.** 
```
开始
数据
结束
```

**B.** 
```
开始
结束
数据
```

**C.** 
```
数据
开始
结束
```

**D.** 代码报错，async/await 使用不正确

**题目3答案：** ____A____

---

### 题目4：Promise.all 方法（初级）

以下代码的输出结果是什么？

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
```

**A.** `[1, 2, 3]`  
**B.** `[3, 2, 1]`  
**C.** `1`  
**D.** 代码报错，Promise.all 使用不正确

**题目4答案：** __A______

---

## 中级题目（5题）

### 题目5：Promise、async、await 的综合应用（中级）

分析以下代码，这是一个数据预加载系统的设计。系统需要并行加载多个数据源，等待所有数据加载完成后进行处理。选择正确的输出结果：

```javascript
// 模拟数据加载函数
function fetchResource(source, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ source, data: `数据来自${source}` });
        }, delay);
    });
}

// 数据预加载管理器
class DataPreloader {
    constructor() {
        this.cache = {};
    }
    
    // 并行加载多个数据源
    async loadAll(sources) {
        console.log("开始加载数据");
        
        // 创建所有加载任务
        const loadTasks = [];
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];
            const delay = source === "A" ? 100 : source === "B" ? 150 : 200;
            loadTasks.push(fetchResource(source, delay));
        }
        
        // 并行执行所有加载任务
        const results = await Promise.all(loadTasks);
        
        // 处理加载结果
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            this.cache[result.source] = result.data;
            console.log(`加载完成: ${result.source}`);
        }
        
        console.log("所有数据加载完成");
        return this.cache;
    }
    
    // 获取已加载的数据
    getData(source) {
        return this.cache[source] || null;
    }
}

// 使用示例
const preloader = new DataPreloader();
preloader.loadAll(["A", "B", "C"]).then((data) => {
    console.log("最终数据:", data);
});
```

**A.** 
```
开始加载数据
加载完成: A
加载完成: B
加载完成: C
所有数据加载完成
最终数据: { A: '数据来自A', B: '数据来自B', C: '数据来自C' }
```

**B.** 
```
开始加载数据
所有数据加载完成
加载完成: A
加载完成: B
加载完成: C
最终数据: { A: '数据来自A', B: '数据来自B', C: '数据来自C' }
```

**C.** 
```
开始加载数据
加载完成: A
加载完成: B
加载完成: C
所有数据加载完成
最终数据: {}
```

**D.** 代码报错，Promise.all 使用不正确

**题目5答案：** ____A____
