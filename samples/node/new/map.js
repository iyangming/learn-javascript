'use strict';
var m = new Map();
var s = new Set();
console.log('你的浏览器支持Map和Set！');

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); 


var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined


var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3


var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}


s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}


var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}