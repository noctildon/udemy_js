// function 宣告方法
// 可參考 https://blog.gtwang.org/programming/defining-javascript-functions/

let fn1 = function () {
    console.log('this is function1')
}

function fn2() {
    console.log('this is function2')
}

// 設定預設值,在參數後面加=[預設值]
function info(name = 'anonymous', age = 20) {
    console.log(name, age)
}

info('jason', 12)
info(undefined, 30) // 若想要略過第一個參數,可用undefined


////////////////////////////////////


function add(a, b) {
    console.log(arguments) // 印出所輸入的參數
}

add(11, 22, 33, 44)