// Note udemy 7-50 ~ 60
// const p = document.querySelector('p') // 搜尋p標籤,只會搜到第一個
// console.log(p) // 印出來看
// p.remove() // 移除

const ps = document.querySelectorAll('p') // 搜尋全部p標籤
console.log(ps)
console.log(typeof ps)
ps.forEach(function (p) { // 對所有p標籤
    console.log(p.textContent) // 取得標籤內的內容
    p.textContent = 'paragraph revised'
    // p.remove() // 移除
})


// 新增元素
const newp = document.createElement('p') // 新增一個p標籤元素
newp.textContent = 'this is a new element' // 放入內容
document.querySelector('body').appendChild(newp) // 在body標籤裡面的最後面加入


// 觸發事件
// 針對第一個button標籤,給兩個參數,第一是何種事件,第二是要觸發什麼
document.querySelector('button').addEventListener('click', function (e) { // e指event,可取得這個event的資料
    console.log('first button was clicked')
    console.log(e)
    console.log(e.target) // 印出event
    e.target.textContent = 'The button is clicked.'
})


// 使用id,用#存取
document.querySelector('#btn2').addEventListener('click', function () {
    console.log('second button was clicked')
})

// 使用class
document.querySelector('.paras').addEventListener('click', function () {
    console.log('paragraphs were clicked')
})

// 存取input裡的內容
// 按enter才會觸發change,若要每次改變內容時觸發,change換成input
document.querySelector('#input').addEventListener('change', function (e) {
    console.log(e) // 印出觸發事件所有內容
    console.log(e.target.value) // 印出輸入在input裡的內容
})


// form submit
document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault() // 取消重新整理的功能
    console.log(e.target.elements.firstName.value) // 印出輸入在input裡的內容
    e.target.elements.firstName.value = '' // 清空input
})


// checkbox
document.querySelector('#box').addEventListener('change', function (e) {
    console.log(e.target.checked) // 印出是否勾選(boolean)
})


// select options 選項
document.querySelector('#opt').addEventListener('change', function (e) {
    console.log(e.target.value) // 印出選中的選項的value值,若無則標籤內的文字
})