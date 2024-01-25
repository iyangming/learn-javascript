'use strict';
var a = [1, 2, 3];
for (var x of a) {
}
console.log('你的浏览器支持for ... of');




var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

for (var x of a) { // 遍历Array
    console.log(x);
}

for (var x of s) { // 遍历Set
    console.log(x);
}

for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}


var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}

// for ... in循环将把name包括在内，但Array的length属性却不包括在内。

// for ... of循环则完全修复了这些问题，它只循环集合本身的元素：

var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x of a) {
    console.log(x); // 'A', 'B', 'C'
}

'use strict';
var a = ['A', 'B', 'C'];

a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});


var s = new Set(['A', 'B', 'C']);

s.forEach(function (element, sameElement, set) {
    console.log(element);
});


var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});


var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});


var a = ['a','b','c'];
a.forEach(function(element, index, a){
    console.log(element, index, a);
});