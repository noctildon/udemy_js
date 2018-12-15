// Constructor function, prototype

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName // 用this.[propety]來定義, 相當於python的__init__
    this.lastName = lastName
    this.age = age
    this.likes = likes // 預設為empty array
}

// const me = Person() // 這樣寫會出錯, undefined
const me = new Person('allen', 'h', 18)

console.log(me)
console.log(me.age) // 用.存取
me.firstName = 'jason' // 也可重寫propety
console.log(me)


Person.prototype.getBio = function () { // 定義Person這個class裡面的方法
    return `${this.firstName} is ${this.age}`
}

Person.prototype.setName = function (fullName) { // 也可定義需要參數的方法
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

Person.prototype.getLikes = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => { // 要用arrow function,若用一般function會出錯
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

me.setName('Kelvin Lin')
console.log(me.getBio()) // 用.呼叫方法


const person1 = new Person('Sam', 'Chu', 30, ['jobbing', 'biking'])
console.log(person1.getLikes())



console.log('=====================================')

// 用另一方法定義class, 這種定義方法較好
class PersonClass {
    constructor(firstName, lastName, age, likes = []) { // 初始化, 相當於python的__init__
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    } // 不用逗號
    getbio() { // 定義這個class的方法
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => { // 要用arrow function,若用一般function會出錯
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


const person2 = new PersonClass('Allen', 'Huang', 20, ['biking', 'swimming']) // 宣告一個新的物件
console.log(person2)
console.log(person2.getbio())
person2.setName('Kelvin Lin')
console.log(person2)


console.log('=====================================')

// 定義subclass, 用extends繼承. class [subclass] extends [superclass]
// 相當於python的def [subclass]([superclass]):
class Employee extends PersonClass {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes) // superclass的constructor, 此行必寫
        this.position = position // 定義新的propetry
    }
    getBio() { // 覆蓋掉superclass的getBio()方法
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYear() { // 定義在superclass沒有的新的方法
        return 65 - this.age
    }
}

const person3 = new Employee('Allen', 'Huang', 20, 'teacher', ['biking', 'swimming']) // 宣告一個新的物件
console.log(person3)
console.log(person3.getBio())
console.log(person3.getYear())