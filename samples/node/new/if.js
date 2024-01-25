// var age = 20;
// if (age >= 18) { // 如果age >= 18为true，则执行if语句块
//     console.log('adult');
// } else { // 否则执行else语句块
//     console.log('teenager');
// }


var age = 3;
if (age >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}

//请注意，if...else...语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了。