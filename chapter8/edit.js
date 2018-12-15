console.log('testing')
// location.assign('./edit.html#abc1234') // 重新導向另一個html
// 在網址最後面加#[數字或字母],例如 #abc1234
console.log(location.hash) // 印出hash值(#abc1234)
console.log(window.document === document) // true

// 只要點網頁視窗的任一部份,就會觸發
// window.addEventListener('click', function (e) {
//     console.log('clicked')
// })


document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault() // 取消重新整理的功能
    console.log(e.target.elements.firstName.value) // 印出輸入在input裡的內容
    localStorage.setItem('Name', e.target.elements.firstName.value)
    e.target.elements.firstName.value = '' // 清空input
})

// 只要storage的資料有變,就觸發
window.addEventListener('storage', function (e) {
    console.log('some data change')
})



// 存取時間
// const now = new Date() //現在的時間
// const now = new Date('January 21 2010 6:23:06') // 可指定時間

// console.log(now.toString()) // 印出目前的時間
// console.log(`Year: ${now.getFullYear()}`) // 印出幾年
// console.log(`Month: ${now.getMonth()+1}`) // 印出幾月,記得要+1
// console.log(`Date: ${now.getDate()}`) // 印出幾日

// console.log(now.getTime()) // 印出時間戳
// const timestamp = now.getTime()
// const myDate = new Date(timestamp) // 可使用getTime來指定新的時間點



// 用moment來產生時間物件
const now = moment()
console.log(now.toString()) // 存取現在的時間
// now.minute(1) // 設定分鐘為1
console.log(now.minute()) // 存取分鐘
now.add(1, 'year').subtract(20, 'days') // 加1年減20天
console.log(now.toString())


console.log(now.format('MMMM Do, YYYY')) // 格式化輸出 格式: December 3rd, 2018
console.log(now.fromNow()) // 計算與今天的時距