function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');


var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

//XMLHttpRequest对象的open()方法有3个参数，第一个参数指定是GET还是POST，第二个参数指定URL地址，第三个参数指定是否使用异步，默认是true，所以不用写

//调用send()方法才真正发送请求。GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。
request.open('POST', '/api/categories');


async function get(url) {
    let resp = await fetch(url);
    return resp.json();
}

// 发送异步请求:
get('/api/categories').then(data => {
    let textarea = document.getElementById('fetch-response-text');
    textarea.value = JSON.stringify(data);
});


https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API


//我们说JavaScript异步操作需要通过Promise实现，一个Promise对象在操作网络时是异步的，等到返回后再调用回调函数，执行正确就调用then()，执行错误就调用catch()，虽然异步实现了，不会让用户感觉到页面“卡住”了，但是一堆then()、catch()写起来麻烦看起来也乱。

async function get(url) {
    let resp = await fetch(url);
    return resp.json();
}

//使用async function可以定义一个异步函数，异步函数和Promise可以看作是等价的，在async function内部，用await调用另一个异步函数，写起来和同步代码没啥区别，但执行起来是异步的。

let resp = await fetch(url);


let promise = fetch(url);
promise.then((resp) => {
    // 拿到resp
})


let promise = fetch(url);
promise.then((resp) => {
    // 拿到resp
}).catch(e => {
    // 出错了
});


async function get(url) {
    try {
        let resp = await fetch(url);
        return resp.json();
    } catch (e) {
        // 出错了
    }
}

//用async定义异步函数，用await调用异步函数，写起来和同步代码差不多，但可读性大大提高。


async function get(url) {
    let resp = await fetch(url);
    return resp.json();
}

function doGet() {
    let promise = get('/api/categories');
    promise.then(data => {
        // 拿到data
        document.getElementById('test-response-text').value = JSON.stringify(data);
    });
}

doGet();



https://www.liaoxuefeng.com/wiki/1022910821149312/1536754328797217


// 如果浏览器支持HTML5，那么就可以一劳永逸地使用新的跨域策略：CORS了。

// CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。

//如果要让用户留在当前页面中，同时发出新的HTTP请求，就必须用JavaScript发送这个新请求，接收到数据后，再用JavaScript更新页面，这样一来，用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。

