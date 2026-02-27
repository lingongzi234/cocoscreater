# 第十阶段作业 - JS基础：对象复制与展开运算符

**姓名：** ____李松____
**分数：** ____80___

---

## 初级题目（1-4题）

### 题目1：对象直接赋值（初级）

以下代码的输出结果是什么？

```javascript
const obj1 = { name: "张三", age: 25 };
const obj2 = obj1;
obj2.name = "李四";

console.log(obj1.name); 
console.log(obj2.name);
```

**A.** 
```
张三
李四
```

**B.** 
```
李四
李四
```

**C.** 
```
张三
张三
```

**D.** 代码报错，不能修改 `const` 声明的对象

**题目1答案：** ____B____

---

### 题目2：展开运算符复制对象（初级）

以下代码的输出结果是什么？

```javascript
const obj1 = { name: "张三", age: 25 };
const obj2 = { ...obj1 };
obj2.name = "李四";

console.log(obj1.name);
console.log(obj2.name);
```

**A.** 
```
张三
李四
```

**B.** 
```
李四
李四
```

**C.** 
```
张三
张三
```

**D.** 代码报错，展开运算符不能用于对象复制

**题目2答案：** ____A____

---

### 题目3：浅拷贝与嵌套对象（初级）

以下代码的输出结果是什么？

```javascript
const obj1 = {
    name: "张三",
    address: {
        city: "北京",
        street: "中关村"
    }
};
const obj2 = { ...obj1 };
obj2.address.city = "上海";

console.log(obj1.address.city);
console.log(obj2.address.city);
```

**A.** 
```
北京
上海
```

**B.** 
```
上海
上海
```

**C.** 
```
北京
北京
```

**D.** 代码报错，不能修改嵌套对象

**题目3答案：** ____B____

---

### 题目4：JSON.parse 和 JSON.stringify 深拷贝（初级）

以下代码的输出结果是什么？

```javascript
const obj1 = {
    name: "张三",
    age: 25,
    address: {
        city: "北京",
        street: "中关村"
    },
    hobbies: ["读书", "游泳"]
};
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "李四";
obj2.address.city = "上海";
obj2.hobbies[0] = "编程";

console.log(obj1.name);
console.log(obj1.address.city);
console.log(obj1.hobbies[0]);
```

**A.** 
```
张三
北京
读书
```

**B.** 
```
李四
上海
编程
```

**C.** 
```
张三
上海
编程
```

**D.** 代码报错，`JSON.parse` 和 `JSON.stringify` 不能用于深拷贝

**题目4答案：** ____A____

---

## 中级题目（5题）

### 题目5：递归深拷贝函数实现（中级，编程题）

**场景描述：**

你正在开发一个数据备份功能模块。系统需要将用户配置数据完整复制一份，以便在用户误操作后能够恢复。配置数据可能包含多层嵌套的对象和数组，需要确保复制后的数据与原数据完全独立，修改复制数据不会影响原数据。

**需求：**

实现一个 `deepCopy` 函数，能够对任意对象或数组进行深拷贝。函数需要满足以下要求：

1. 能够处理基本数据类型（number、string、boolean、null、undefined）
2. 能够处理对象（包括嵌套对象）
3. 能够处理数组（包括嵌套数组）
4. 能够处理对象和数组的混合嵌套结构
5. 深拷贝后的对象与原对象完全独立，修改拷贝对象不会影响原对象

**测试数据：**

```javascript
const original = {
    name: "张三",
    age: 25,
    isActive: true,
    address: {
        city: "北京",
        street: "中关村",
        coordinates: {
            lat: 39.9,
            lng: 116.4
        }
    },
    hobbies: ["读书", "游泳", "编程"],
    tags: [
        { id: 1, name: "前端" },
        { id: 2, name: "JavaScript" }
    ]
};
```

**代码模板：** 

```javascript
function deepCopy(obj) {
    //运行报错，unll is not defined，写完代码后起码要运行看看啊
    if(typeof obj==='object'&&obj!==null){
        let res=Array.isArray(obj)?[]:{};
        for(let k in obj){
            if(obj.hasOwnProperty(k)){
               res[k]= deepCopy(obj[k]);
            }
        }
        return res;

    }else{
        return obj
    }
    // 请在此处编写你的代码
}

// 测试代码
const copied = deepCopy(original);

// 修改拷贝对象
copied.name = "李四";
copied.age = 30;
copied.address.city = "上海";
copied.address.coordinates.lat = 31.2;
copied.hobbies[0] = "跑步";
copied.tags[0].name = "后端";

// 验证原对象未被修改
console.log(original.name);        // 应该输出: 张三
console.log(original.age);         // 应该输出: 25
console.log(original.address.city); // 应该输出: 北京
console.log(original.address.coordinates.lat); // 应该输出: 39.9
console.log(original.hobbies[0]);  // 应该输出: 读书
console.log(original.tags[0].name); // 应该输出: 前端
```