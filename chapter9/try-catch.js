// 產生error, 用throw產生error, Error()用來輸出詳細訊息

const fn = (num) => {
    if (typeof num === 'number') {
        return num * .25
    } else {
        throw new Error('must be numbers')
        // throw 'must be numbers' // 簡單用法
    }
}

// 用try來進行異常處理
try {
    console.log(fn('h'))
} catch (e) {
    console.log('catch block is running')
}