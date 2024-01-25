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
