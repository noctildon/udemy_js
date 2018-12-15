// Note udemy 8-62 ~
// 查看local storage : Application => Storage => Local Storage

console.log(uuidv4())

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault() // 取消重新整理的功能
    // console.log(e.target.elements.firstName.value) // 印出輸入在input裡的內容
    e.target.elements.firstName.value = '' // 清空input
})

localStorage.setItem('location', 'Taiwan') // 設定local storage的項目
localStorage.setItem('language', 'Chinese')
console.log(localStorage.getItem('location')) // 取出local storage的項目
console.log(localStorage.getItem('language'))
localStorage.removeItem('language') // 移除 'language'
localStorage.clear() // 移除所有local storage

// setItem 僅能用string,所以要先把json轉換成string,用stringify
let person = {
    location: 'Taiwan',
    languag: 'Chinese',
    name: 'Jason'
}
const jsonperson = JSON.stringify(person) // json轉string
console.log(jsonperson)
localStorage.setItem('user', jsonperson)


// 取得剛剛存的json string
const userjson = localStorage.getItem('user')
const user = JSON.parse(userjson) //用JSON.parse把string換回json
console.log(user)