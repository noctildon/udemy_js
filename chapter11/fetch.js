// fetch可以有2個參數,第二個可以省略, 會回傳promise物件, 是否連結的上網頁
fetch('http://puzzle.mead.io/puzzle').then((response) => { // 正確時觸發
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => { // 錯誤時觸發
    console.log(error)
})