////////////////////////////////////////////////////////////////////////////
var main = require('./app/main'),

var $message = $("#message");
//全局消息输出
var sequence = 1;
global.$log = function(data) {
    $message.append('<p>' + (sequence++) + "：" +data + '</p>')
    $message.scrollTop(2000)
}

var $button = $("button") 

$button.on("click",function(){
    var inputVal = $("input").val();
    main.exec(inputVal)
})

