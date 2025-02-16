let arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length)
arr.length = 7;
console.log(arr);
arr[1] = 99;
console.log(arr); 
console.log(arr[1])


//every()方法可以判断数组的所有元素是否满足测试条件。


var arr = ['Apple', 'pear', 'orange'];

console.log(arr.every(function (s) {
    return s.length > 0;
})); // true, 因为每个元素都满足s.length>0

console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
})); // false, 因为不是每个元素都全部是小写


//find()方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回undefined：

var arr = ['Apple', 'pear', 'orange'];
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
})); // 'pear', 因为pear全部是小写

console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
})); // undefined, 因为没有全部是大写的元素


//findIndex()和find()类似，也是查找符合条件的第一个元素，不同之处在于findIndex()会返回这个元素的索引，如果没有找到，返回-1：

var arr = ['Apple', 'pear', 'orange'];
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
})); // 1, 因为'pear'的索引是1

console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
})); // -1


//forEach()和map()类似，它也把每个元素依次作用于传入的函数，但不会返回新的数组。forEach()常用于遍历数组，因此，传入的函数不需要返回值：

var arr = ['Apple', 'pear', 'orange'];
arr.forEach(console.log); // 依次打印每个元素