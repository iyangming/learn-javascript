let s = `你好, ${name}, 你今年${age}岁了!`;
console.log(s);

'use strict';

let name = '小明';
let age = 20;


const email = "test@example.com";
const password = 'hello123';

function sql(strings, ...exps) {
    console.log(`SQL: ${strings.join('?')}`);
    console.log(`SQL parameters: ${JSON.stringify(exps)}`);
    return {
        name: '小明',
        age: 20
    };
}

const result = sql`SELECT * FROM users WHERE email=${email} AND password=${password}`;

console.log(JSON.stringify(result));


//标签函数和普通函数的定义区别仅仅在于参数，如果我们想对数据库进行修改，完全可以定义一个标签函数如下：

function update(strings, ...exps) {
    let sql = strings.join('?');
    // 执行数据库更新
    // TODO:
}