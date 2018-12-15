// HTTP request
// http://puzzle.mead.io/puzzle
// 在網誌的最後加 ?key=value 就可指定一些功能, 例如wordCount=2
// doc : https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest/readyState

const request = new XMLHttpRequest()


request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status) { // 4代表成功回傳, check status, 200表正常
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log(e.target.status)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2') // 取得這個網址的內容
request.send() // 送出 HTTP 請求

// 可至dev tools => Network查看有GET到上面的網址, 點擊puzzle後點Response會看到網頁的原始碼