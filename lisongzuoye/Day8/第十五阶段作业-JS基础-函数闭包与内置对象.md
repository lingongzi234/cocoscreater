# 第十五阶段作业 - JS基础：函数闭包与内置对象

**姓名：** ___李松_____
**分数：** ___100_____

---

## 初级题目（1-8题）

### 题目1：函数作为参数（初级）

以下代码的输出结果是什么？

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiply));
```

**A.** 
```
8
15
```

**B.** 
```
15
8
```

**C.** 
```
undefined
undefined
```

**D.** 代码报错，函数不能作为参数

**题目1答案：** ___A_____

---

### 题目2：函数作为返回值（初级）

以下代码的输出结果是什么？

```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

**A.** 
```
10
15
```

**B.** 
```
5
5
```

**C.** 
```
2
3
```

**D.** 代码报错，函数不能作为返回值

**题目2答案：** ____A____

---

### 题目3：闭包的基础使用（初级）

以下代码的输出结果是什么？

```javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
```

**A.** 
```
1
2
1
```

**B.** 
```
1
2
3
```

**C.** 
```
0
1
2
```

**D.** 代码报错，闭包使用不正确

**题目3答案：** ____A____

---

### 题目4：闭包的原理（初级）

以下代码的输出结果是什么？

```javascript
function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    x = 20;
    return inner;
}

const fn = outer();
fn();
```

**A.** `10`  
**B.** `20`  
**C.** `undefined`  
**D.** 代码报错，闭包使用不正确

**题目4答案：** ____B____

---

### 题目5：call 方法的使用（初级）

以下代码的输出结果是什么？

```javascript
const person1 = {
    name: "张三",
    greet: function() {
        return `你好，我是${this.name}`;
    }
};

const person2 = {
    name: "李四"
};

console.log(person1.greet.call(person2));
```

**A.** `你好，我是张三`  
**B.** `你好，我是李四`  
**C.** `你好，我是undefined`  
**D.** 代码报错，call 使用不正确

**题目5答案：** ___B_____

---

### 题目6：bind 方法的使用（初级）

以下代码的输出结果是什么？

```javascript
const person = {
    name: "张三",
    greet: function() {
        return `你好，我是${this.name}`;
    }
};

const anotherPerson = { 
    name: "李四",
    greet: person.greet.bind(person)
};

console.log(anotherPerson.greet());
```

**A.** `你好，我是张三`  
**B.** `你好，我是李四`  
**C.** `你好，我是undefined`  
**D.** 代码报错，bind 使用不正确

**题目6答案：** ___A_____

---

### 题目7：Math 对象的使用（初级）

以下代码的输出结果是什么？

```javascript
console.log(Math.floor(3.7));
console.log(Math.ceil(3.2));
console.log(Math.round(3.5));
console.log(Math.max(1, 5, 3));
```

**A.** 
```
3
4
4
5
```

**B.** 
```
4
3
3
5
```

**C.** 
```
3
3
4
5
```

**D.** 代码报错，Math 对象使用不正确

**题目7答案：** ___A_____

---

### 题目8：Date 对象的使用（初级）

以下代码的输出结果是什么？

```javascript
const date1 = new Date(2024, 0, 1);
const date2 = new Date(2024, 1, 1);

console.log(date1.getMonth());
console.log(date2.getMonth());
console.log(date1.getDate());
```

**A.** 
```
0
1
1
```

**B.** 
```
1
2
1
```

**C.** 
```
0
1
0
```

**D.** 代码报错，Date 对象使用不正确

**题目8答案：** ____A____

---

## 中级题目（9-10题）

### 题目9：闭包与 bind 在实际场景中的应用（中级）

分析以下代码，这是一个事件监听系统的设计。系统需要支持绑定回调函数的 `this` 上下文。选择正确的输出结果：

```javascript
class EventEmitter {
    constructor() {
        this.callbacks = [];
    }
    
    on(callback, thisArg) {
        if (thisArg) {
            callback = callback.bind(thisArg);
        }
        this.callbacks.push(callback);
    }
    
    emit(data) {
        for (let i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](data);
        }
    }
}

const emitter = new EventEmitter();
const results = [];

const handler1 = {
    id: "A",
    handle: function(data) {
        results.push(`${this.id}:${data}`);
    }
};

const handler2 = {
    id: "B",
    handle: function(data) {
        results.push(`${this.id}:${data}`);
    }
};

emitter.on(handler1.handle, handler1);
emitter.on(handler2.handle, handler2);

emitter.emit("消息1");
emitter.emit("消息2");

console.log(results);
```

**A.** 
```
['A:消息1', 'B:消息1', 'A:消息2', 'B:消息2']
```

**B.** 
```
['A:消息1', 'A:消息2', 'B:消息1', 'B:消息2']
```

**C.** 
```
['undefined:消息1', 'undefined:消息1', 'undefined:消息2', 'undefined:消息2']
```

**D.** 代码报错，bind 使用不正确

**题目9答案：** _____A___

---

### 题目10：Math 和 Date 对象的综合应用（中级，编程题）

**场景描述：**

你正在开发一个游戏每日签到奖励系统。系统需要实现以下功能：

1. **生成唯一奖励ID**：使用时间戳和随机数生成唯一的奖励ID
2. **随机生成奖励**：从奖励池中随机选择一个奖励
3. **记录领取时间**：记录玩家领取奖励的时间
4. **计算冷却时间**：计算距离下次可以领取的时间（24小时后）

**需求：**

实现 `DailyReward` 类的以下方法：

1. `generateRewardId()`：生成唯一奖励ID
   - 格式：`"reward_" + 时间戳 + "_" + 随机数（0-9999）`
   - 使用 `Date.now()` 获取时间戳
   - 使用 `Math.floor(Math.random() * 10000)` 生成随机数

2. `getRandomReward(rewards)`：从奖励数组中随机选择一个奖励
   - 使用 `Math.random()` 和 `Math.floor()` 生成随机索引
   - 返回随机选中的奖励

3. `claimReward(rewards)`：领取奖励
   - **首先检查冷却时间**：如果 `this.lastClaimTime` 存在，调用 `getCooldownTime(this.lastClaimTime)` 检查是否还在冷却中
   - **如果冷却时间未到**（返回值大于0），返回错误信息对象：`{ success: false, message: "冷却时间未到，请稍后再试" }`
   - **如果冷却时间已到或首次领取**（返回值为0或 `lastClaimTime` 为 `null`），执行以下操作：
     - 生成唯一奖励ID
     - 随机选择一个奖励
     - 记录当前领取时间（使用 `Date.now()`）
     - 返回成功信息对象：`{ success: true, id, reward, claimTime }`

4. `getCooldownTime(claimTime)`：计算冷却时间（毫秒）
   - 参数 `claimTime` 是上次领取时间（时间戳）
   - 计算距离下次可以领取的时间（24小时后）
   - 如果已经超过24小时，返回 `0`
   - 使用 `Date.now()` 获取当前时间
   - 使用 `Math.max()` 确保返回值不为负数

**奖励池数据：**

```javascript
const rewards = ["金币100", "钻石50", "经验200", "道具包"];
```

**代码模板：**

```javascript
class DailyReward {
    constructor() {
        this.lastClaimTime = null;
    }
    
    // 生成唯一奖励ID
    generateRewardId() {
    let sjc=Date.now();
    let sjs=Math.floor(Math.random() * 10000);
    let rewardId=`reward_${sjc}_${sjs}`;
    return rewardId;
        // 请在此处编写你的代码
    }
    
    // 从奖励数组中随机选择一个
    getRandomReward(rewards) {
      return rewards[ Math.floor(Math.random() * rewards.length)];
        // 请在此处编写你的代码
    }
    
    // 领取奖励
   
    claimReward(rewards) {
        if(this.lastClaimTime!==null&&this.lastClaimTime){
           if( this.getCooldownTime(this.lastClaimTime)>0){
            return {
      success: false,
      message: "冷却时间未到，请稍后再试"
             };
           }
        }
        let id= this.generateRewardId();
        let reward=this.getRandomReward(rewards);
        let claimTime=Date.now();
        this.lastClaimTime=claimTime;
        return {
            success: true, id, reward, claimTime

        }

        // 请在此处编写你的代码
    }
   
    // 计算冷却时间（毫秒）
    getCooldownTime(claimTime) {
     let diff=claimTime+25 * 60 * 60 * 1000-Date.now();
     return Math.max(0,diff);

        // 请在此处编写你的代码
    }
}

// 测试代码
const dailyReward = new DailyReward();
const rewards = ["金币100", "钻石50", "经验200", "道具包"];

// 第一次领取
const result1 = dailyReward.claimReward(rewards);
console.log(result1);
// 请根据 result1.success 的值判断是否领取成功，并输出相应的信息
// 如果成功，输出奖励ID、奖励内容、领取时间
// 如果失败，输出提示信息

// 立即再次领取（应该被阻止，冷却时间检查在 claimReward 函数内部自动执行）
const result2 = dailyReward.claimReward(rewards);
console.log(result2);
// 请根据 result2.success 的值判断是否领取成功，并输出相应的信息
// 如果成功，输出奖励ID、奖励内容
// 如果失败，输出提示信息（例如："冷却时间未到，请稍后再试"）
```