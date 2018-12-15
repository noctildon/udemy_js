// 3.10 ~ 3.11 如何宣告變數

let name = 'allen' // 用let進行宣告
let n = 5 - -1 // 5 - (-1) => 5 + 1
let m = 3 * 4 // 乘法用 *
let k = 2 / 3 // 除法用 /

console.log(name)
console.log(n)
console.log(m)
console.log(k)

console.log('=============')

let str = 'city'
// let str = 'town' // 這會報錯
str = 'town' // 重新定義
console.log(str)

console.log('=============')

// 變數命名規則 : 必須英文字母或_或$開頭
let abc = 'pure abc'
let _abc = 'underscore abc'
let $abc = 'dollar sign abc'
let _ = 'pure underscore'
let $ = 'pure dollar sign'

console.log(abc)
console.log(_abc)
console.log($abc)
console.log(_)
console.log($)

console.log('=============')

// === equal, !== not equal
// < less than, <= less than or equal to
// > greater than, >= greater than or equal to
// && : AND
// || : OR