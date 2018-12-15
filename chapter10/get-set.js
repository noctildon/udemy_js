const data = {
    locations: [],
    get location() { // 存取屬性(location)的值
        return this._location
    },
    set location(value) { // 當要定義屬性(loation)時,做一些清理的動作
        this._location = value.trim() // 移除空白
        this.locations.push(this._location) // 新增一個location到array locations
    }
}
data.location = '   Taiwan   '
data.location = '  Japan '
console.log(data.location)
console.log(data)


console.log('==============================')


// set跟get可用於class
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getbio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) { // 等價於setName(fullName)
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() { //
        return `${this.firstName} ${this.lastName}`
    }
}

const me = new Person('Allen', 'Huang', 18, ['biking', 'swimming'])
me.fullName = 'Kelvin Lin' // 要加set到class裡才能用
// 上行同於未修改方法前的 me.setName('Kelvin Lin')
console.log(me)
console.log(me.fullName) // 要加get到class裡才能用