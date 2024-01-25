var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

xiaoming.name
xiaoming.birth

//访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：


var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

xiaohong["middle-school"]


console.log(xiaoming.age);

xiaoming.age = 18;
console.log(xiaoming.age);

'name' in xiaoming

console.log('toString' in xiaoming);

xiaoming.hasOwnProperty('name');

console.log(xiaoming.hasOwnProperty('toString'));


var arr = [1, 2, 3];

//arr ----> Array.prototype ----> Object.prototype ----> null
//Array.prototype定义了indexOf()、shift()等方法，因此你可以在所有的Array对象上直接调用这些方法。

function foo() {
    return 0;
}

foo ----> Function.prototype ----> Object.prototype ----> null

// 除了直接用{ ... }创建一个对象外，JavaScript还可以用一种构造函数的方法来创建对象。

function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}


var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!


// 新创建的xiaoming的原型链是：xiaoming ----> Student.prototype ----> Object.prototype ----> null

//JavaScript的原型链中，每个对象都有一个__proto__属性，指向它的原型对象。

//用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：

xiaoming.constructor === Student.prototype.constructor; // true


Student.prototype.constructor === Student; // true

Object.getPrototypeOf(xiaoming) === Student.prototype; // true

xiaoming instanceof Student; // true

//红色箭头是原型链。注意，Student.prototype指向的对象就是xiaoming、xiaohong的原型对象，这个原型对象自己还有个属性constructor，指向Student函数本身。

//另外，函数Student恰好有个属性prototype指向xiaoming、xiaohong的原型对象


function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

//用new创建基于原型的JavaScript的对象就是这么简单！
//在strict模式下，this.name = name将报错，因为this绑定为undefined
//在非strict模式下，this.name = name不报错，因为this绑定为window，于是无意间创建了全局变量name，并且返回undefined，这个结果更糟糕。


function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}


var xiaoming = createStudent({
    name: '小明'
});

xiaoming.grade; // 1

//如果创建的对象有很多属性，我们只需要传递需要的某些属性，剩下的属性可以用默认值。


// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：
function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return 'Hello, ' + this.name + '!';
};