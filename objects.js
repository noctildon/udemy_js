// object的用法
const _ = require('lodash')

let person = {
    name: 'jason',
    age: 18,
    method1: function (city) { // 也可在object裡定義function
        return `You live in ${city}`
    },
    method2: function () {
        console.log(this) // 用this代表所在的object,會印出這整個object(person)
    },
    method3: function () { // 用.存取這個object(person)裡的元件
        console.log(`NAME is ${this.name}, and AGE is ${this.age}`)
    }
}

console.log(person.age) // object裡的元件用點.存取
console.log(person.method1('taipei')) // function一樣用.存取
person.method2()
person.method3()



console.log('============')

function f1() { // 可放在函式做回傳
    return {
        ob1: 1,
        ob2: 2
    }
}

console.log(f1())

console.log('=============')
// object的相等性

let ob1 = {
    name: 'allen',
    age: 20
}
let ob2 = {
    name: 'allen',
    age: 20
}

console.log(Object.is(ob1, ob2))
console.log(ob1 == ob2)
console.log(_.isEqual(ob1, ob2))