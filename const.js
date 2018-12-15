// const 的用法

const person = {
    age: 18
}

// person = {} // 這會報錯,不可更改const物件
person.age = 20 // 合法,可改變其中的元件
person.name = 'jason' // 合法,可加入新的元件

console.log(person)
console.log(person.age)

let f = function f() {
    console.log('hello')
}

f = 0
console.log(typeof f)