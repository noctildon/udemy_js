// Callback
const getData = (callback) => {
    setTimeout(() => { // setTimeout可做延遲
        callback(undefined, 'callback data')
    }, 2000)
}

getData((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})




// Promise
// 教學 https://wcc723.github.io/life/2017/05/25/promise/
const myPromise = new Promise((resolve, reject) => { // promise吃1個函式,而這個函式有2個參數
    setTimeout(() => {
        resolve('promise data') // 成功, resolve會回傳這個字串(i.e. 'promise data')
        // reject('reject data') // 失敗, reject會回傳這個字串(i.e. 'reject data')
    }, 2000);
})

// then方法吃兩個函式, 第一個是成功會執行的函式, 第二個是失敗會執行的函式(或是用.catch(函式))
myPromise.then((value) => { // 用resolve回傳的值當參數(i.e. 'promise data')
    console.log(value)
}, (err) => { // 用reject回傳的值當參數(i.e. 'reject data')
    console.log(err)
})