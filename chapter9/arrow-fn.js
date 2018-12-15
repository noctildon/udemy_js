// function的另類寫法

const f0 = function (num) {
    return num * num
}
const f1 = (num) => {
    return num * num
}
const f2 = (num) => num * num // shorthand syntax, 單行return才能用
// f0和f1定義是等價的, 若只有單行return, f1可化簡成f2

console.log(f0(5), f1(5), f2(5))

////////////////////////////////////////////


const people = [{
        name: 'jason',
        age: 27
    },
    {
        name: 'allen',
        age: 31
    },
    {
        name: 'tom',
        age: 22
    }
]

const under30 = people.filter(function (person) {
    return person.age < 30
})
const under30p = people.filter((person) => person.age < 30)
// 上兩種寫法一樣

console.log('==================')
console.log(under30)
console.log(under30p)


const age22 = people.find((person) => person.age === 22)


console.log('==================')
console.log(age22)


////////////////////////////////////////////


const add = function () {
    return arguments[0] + arguments[1] // 第一個參數加第二個參數
}

const add_arrow = () => { // arrow function不吃argument
    return arguments[0] + arguments[1] // 第一個參數加第二個參數
}

console.log('====================')
console.log(add(11, 22))
// console.log(add_arrow(11, 22)) // 這個會報錯,arrow function不吃argument


////////////////////////////////////////////

const car = {
    color: 'red',
    getSummary: function () {
        return `The color of this car ${this.color}`
    },
    getSummary_arrow0: () => { // arrow function沒有this
        return `The color of this car ${this.color}`
    },
    getSummary_arrow() { // 簡短的定義方式
        return `The color of this car ${this.color}`
    }
}

console.log('===================')
console.log(car.getSummary())
console.log(car.getSummary_arrow0()) // undefined
console.log(car.getSummary_arrow())