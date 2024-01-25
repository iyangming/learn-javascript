/* HTML表单的输入控件主要有以下几种：

文本框，对应的<input type="text">，用于输入文本；

口令框，对应的<input type="password">，用于输入口令；

单选框，对应的<input type="radio">，用于选择一项；

复选框，对应的<input type="checkbox">，用于选择多项；

下拉框，对应的<select>，用于选择一项；

隐藏文本，对应的<input type="hidden">，用户不可见，但表单提交时会把隐藏文本发送到服务器。 */



// <input type="text" id="email">
var input = document.getElementById('email');
input.value; // '用户输入的值'


// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // '1'
tue.value; // '2'
mon.checked; // true或者false
tue.checked; // true或者false

//方式一是通过<form>元素的submit()方法提交一个表单，例如，响应一个<button>的click事件，在JavaScript代码中提交表单：



{/* <form id="test-form">
    <input type="text" name="test">
    <button type="button" onclick="doSubmitForm()">Submit</button>
</form>

<script>
function doSubmitForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 提交form:
    form.submit();
}
</script>
 */}



/*  <!-- HTML -->
<form id="test-form" onsubmit="return checkForm()">
    <input type="text" name="test">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
</script> */


/* 
利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：

用户名必须是3-10位英文字母或数字；

口令必须是6-20位；

两次输入口令必须一致。 */