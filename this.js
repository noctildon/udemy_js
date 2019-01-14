function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = `Hello, I am ${identify.call(this)}`
    console.log(greeting)
}

var me = {
    name: 'allen'
}


// 要用.call才能呼叫,而call的參數就會被當作this
console.log(identify.call(me))
speak.call(me)
// me.call() // 這會出錯