# 第十一阶段作业 - JS基础：类与原型

**姓名：** ___李松_____
**分数：** ____100___

---

## 初级题目（1-8题）

### 题目1：类的定义与实例化（初级）

以下代码的输出结果是什么？

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("张三", 25);
console.log(person.name);
console.log(person.age);
console.log(typeof person);
```

**A.** 
```
张三
25
object
```

**B.** 
```
张三
25
Person
```

**C.** 
```
undefined
undefined
object
```

**D.** 代码报错，类定义不正确

**题目1答案：** ___A_____

---

### 题目2：类的方法定义（初级）

以下代码的输出结果是什么？

```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}

const calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));
console.log(typeof calc.add);
```

**A.** 
```
15
5
function
```

**B.** 
```
15
5
method
```

**C.** 
```
undefined
undefined
undefined
```

**D.** 代码报错，方法定义不正确

**题目2答案：** ____A____

---

### 题目3：构造函数与属性初始化（初级）

以下代码的输出结果是什么？

```javascript
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.score = 0;
    }
}

const student1 = new Student("张三", "一年级");
const student2 = new Student("李四", "二年级");

student1.score = 90;
console.log(student1.score);
console.log(student2.score);
```

**A.** 
```
90
0
```

**B.** 
```
90
90
```

**C.** 
```
0
0
```

**D.** 代码报错，不能修改属性

**题目3答案：** ___A_____

---

### 题目4：类的继承（初级）

以下代码的输出结果是什么？

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog("旺财");
console.log(dog.name);
console.log(dog.speak());
```

**A.** 
```
旺财
旺财 makes a sound
```

**B.** 
```
旺财
旺财 barks
```

**C.** 
```
undefined
undefined makes a sound
```

**D.** 代码报错，继承语法不正确

**题目4答案：** ____B___

---

### 题目5：原型与实例方法（初级）

以下代码的输出结果是什么？

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return `Hello, I'm ${this.name}`;
};

const person1 = new Person("张三");
const person2 = new Person("李四");

console.log(person1.sayHello());
console.log(person2.sayHello());
console.log(person1.sayHello === person2.sayHello);
```

**A.** 
```
Hello, I'm 张三
Hello, I'm 李四
true
```

**B.** 
```
Hello, I'm 张三
Hello, I'm 李四
false
```

**C.** 
```
undefined
undefined
false
```

**D.** 代码报错，原型方法定义不正确

**题目5答案：** _____A___

---

### 题目6：hasOwnProperty 的使用（初级）

以下代码的输出结果是什么？

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.age = 25;

const person = new Person("张三");
person.city = "北京";

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("city"));
```

**A.** 
```
true
true
true
```

**B.** 
```
true
false
true
```

**C.** 
```
false
false
false
```

**D.** 代码报错，`hasOwnProperty` 使用不正确

**题目6答案：** _____B___

---

### 题目7：instanceof 的使用（初级）

以下代码的输出结果是什么？

```javascript
class Animal {}
class Dog extends Animal {}

const dog = new Dog();
const animal = new Animal();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(animal instanceof Dog);
```

**A.** 
```
true
true
false
```

**B.** 
```
true
false
false
```

**C.** 
```
false
false
false
```

**D.** 代码报错，`instanceof` 使用不正确

**题目7答案：** _____A___

---

### 题目8：原型链的查找（初级）

以下代码的输出结果是什么？

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

const dog = new Dog("旺财");
console.log(dog.name);
console.log(dog.speak());
console.log(dog instanceof Animal);
```

**A.** 
```
旺财
旺财 barks
true
```

**B.** 
```
旺财
旺财 makes a sound
true
```

**C.** 
```
undefined
undefined makes a sound
false
```

**D.** 代码报错，原型链设置不正确

**题目8答案：** _____A___

---

## 中级题目（9-10题）

### 题目9：封装与私有属性的实现（中级）

分析以下代码，选择正确的输出结果：

```javascript
class BankAccount {
    constructor(owner, initialBalance) {
        this.owner = owner;
        this._balance = initialBalance; // 使用下划线表示私有属性（约定）
    }
    
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            return true;
        }
        return false;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return true;
        }
        return false;
    }
    
    getBalance() {
        return this._balance;
    }
}

const account = new BankAccount("张三", 1000);
account.deposit(500);
account.withdraw(200);
account._balance = 10000; // 直接修改"私有"属性

console.log(account.getBalance());
console.log(account._balance);
```

**A.** 
```
1300
1300
```

**B.** 
```
1300
10000
```

**C.** 
```
10000
10000
```

**D.** 代码报错，不能直接修改私有属性

**题目9答案：** ___C_____

---

### 题目10：多态与原型方法的覆盖（中级）

分析以下代码，这是一个图形绘制系统的设计。选择正确的输出结果：

```javascript
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return 0;
    }
    
    getInfo() {
        return `${this.name} area: ${this.getArea()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const rect = new Rectangle(5, 10);
const circle = new Circle(3);

console.log(rect.getInfo());
console.log(circle.getInfo());
console.log(rect instanceof Shape);
console.log(circle instanceof Shape);
```

**A.** 
```
Rectangle area: 50
Circle area: 28.274333882308138
true
true
```

**B.** 
```
Rectangle area: 0
Circle area: 0
true
true
```

**C.** 
```
Rectangle area: 50
Circle area: 28.274333882308138
false
false
```

**D.** 代码报错，多态实现不正确

**题目10答案：** ___A_____
