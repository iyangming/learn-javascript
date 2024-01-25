// var x = 0;
// var i;
// for (i=1; i<=10000; i++) {
//     x = x + i;
// }
// console.log(x); // 50005000


// var arr = ['Apple', 'Google', 'Microsoft'];
// var i, x;
// for (i=0; i<arr.length; i++) {
//     x = arr[i];
//     console.log(x);
// }

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}



var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}


var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500

//最后一种循环是do { ... } while()循环，它和while循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
//用do { ... } while()循环要小心，循环体会至少执行1次，而for和while循环则可能一次都不执行。
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100