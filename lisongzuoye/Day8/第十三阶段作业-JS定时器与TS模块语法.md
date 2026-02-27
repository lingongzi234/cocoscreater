# 第十三阶段作业 - JS定时器与TS模块语法

**姓名：** ___李松_____
**分数：** ___100_____

---

## 初级题目（1-4题）

### 题目1：setTimeout 的基础使用（初级）

以下代码的输出结果是什么？

```javascript
console.log("开始");

setTimeout(() => {
    console.log("延迟执行");
}, 1000);

console.log("结束");
```

**A.** 
```
开始
延迟执行
结束
```

**B.** 
```
开始
结束
延迟执行
```

**C.** 
```
延迟执行
开始
结束
```

**D.** 代码报错，`setTimeout` 使用不正确

**题目1答案：** ____B____

---

### 题目2：setInterval 和关闭定时器（初级）

以下代码的输出结果是什么？

```javascript
let count = 0;
const timerId = setInterval(() => {
    count++;
    console.log(count);
    if (count >= 3) {
        clearInterval(timerId);
    }
}, 500);
```

**A.** 
```
1
2
3
```

**B.** 
```
1
2
3
4
```

**C.** 
```
0
1
2
3
```

**D.** 代码报错，`clearInterval` 使用不正确

**题目2答案：** ____A____

---

### 题目3：定时器回调函数传参（初级）

以下代码的输出结果是什么？

```javascript
function greet(name, age) {
    console.log(`姓名: ${name}, 年龄: ${age}`);
}

setTimeout(() => {
    greet("张三", 25);
}, 1000);
```

**A.** 
```
姓名: 张三, 年龄: 25
```

**B.** 
```
姓名: undefined, 年龄: undefined
```

**C.** 
```
姓名: name, 年龄: age
```

**D.** 代码报错，匿名函数不能传参

**题目3答案：** ____A____

---

### 题目4：ES 模块的导入导出（初级）

以下代码中，哪个选项的导入语句是正确的？

```typescript
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export const PI = 3.14;

// main.ts
```

**A.** `import { add, PI } from "./math";`  
**B.** `import add, PI from "./math";`  
**C.** `import * as math from "./math";` 然后使用 `math.add()`  
**D.** 选项A和C都正确，选项B错误

**题目4答案：** ____D____

---

## 中级题目（5题）

### 题目5：定时器与模块的综合应用（中级）

分析以下代码，这是一个倒计时功能模块的设计。选择正确的输出结果：

```typescript
// countdown.ts
export class Countdown {
    private timerId: number | null = null;
    private count: number;
    
    constructor(initialCount: number) {
        this.count = initialCount;
    }
    
    start(callback: (count: number) => void): void {
        this.timerId = setInterval(() => {
            this.count--;
            callback(this.count);
            if (this.count <= 0) {
                this.stop();
            }
        }, 1000);
    }
    
    stop(): void {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
}

// main.ts
import { Countdown } from "./countdown";

const countdown = new Countdown(3);
const results: number[] = [];

countdown.start((count) => {
    results.push(count);
    console.log(count);
});

setTimeout(() => {
    console.log("最终结果:", results);
}, 3500);
```

**A.** 
```
2
1
0
最终结果: [2, 1, 0]
```

**B.** 
```
2
1
0
最终结果: [2, 1, 0, -1]
```

**C.** 
```
3
2
1
0
最终结果: [3, 2, 1, 0]
```

**D.** 代码报错，模块导入不正确

**题目5答案：** ____A____
