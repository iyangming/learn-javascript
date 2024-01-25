//JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。

//并且，JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。


'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};


function stringify(obj) {
    var result = [];
    for (var key in obj) {
        result.push(key + ': ' + JSON.stringify(obj[key]));
    }
    return '{' + result.join(', ') + '}';
}


//var s = JSON.stringify(xiaoming);
//console.log(s);

var y = JSON.stringify(xiaoming, null, '    ');
console.log(y );

JSON.stringify(xiaoming, ['name', 'skills'], '  ');


function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');



var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'


拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45


var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}

'use strict'

var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c';
$.getJSON(url, function (data) {

var info = {
    city: data.city.name,
    weather: data.list[0].weather[0].main,
    time: data.list[0].dt_txt
};
alert(JSON.stringify(info, null, '  '));
});
