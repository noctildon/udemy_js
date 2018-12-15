const fn = () => {
    const mes = 'this is message'
    const printmes = () => {
        console.log(mes)
    }
    return printmes
}

const mymessage = fn()
mymessage()



console.log('==================================')




const createCount = () => {
    let count = 0 // 只能使用return裡面的方法改變count的值
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCount()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0 // 這不會改變createCount裡面的count, 所以counter.get()還是一樣
console.log(counter.get()) // 得到createCount裡的count值
console.log(counter)




console.log('==================================')



const createadd = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createadd(10)
console.log(add10(-2))

const add100 = createadd(100)
console.log(add100(-90))




console.log('==================================')