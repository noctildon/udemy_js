const todo = {
    id: 'asdf654',
    text: 'pay the bill',
    complete: false
}

// destructure object

// const text = todo.text
// const complete = todo.complete
// 上兩行等價於下一行
// const {
//     text,
//     complete
// } = todo

// console.log(text)
// console.log(complete)

console.log('========================')


const {
    text: todoText, // 若想要改變property名稱,可用冒號
    complete, // 對應到原本的property; const complete = todo.complete
    unde, // 這會是undefined
    details = 'no details', // 用等號令一個新的property
    ...others // 剩下沒定義到的
} = todo

console.log(todoText)
console.log(others)


console.log('======================')

// destructure array
const age = [10, 20, 65, 35]
const [firstAge, secondAge, , lastAge, otherAge = 88] = age // 第一位對應到第一個,第2對到第2個item, 然後用等號特別指定
const [oneAge, ...otherages] = age // 用...代表剩下的
console.log(firstAge)
console.log(secondAge)
console.log(lastAge)
console.log(otherAge)

console.log(otherages)


console.log('============================')

// destrcuture function arguments
const printTodo = ({
    text,
    complete
}) => {
    console.log(`${text} is ${complete}`)
}
printTodo(todo)

const person = {
    age: 20,
    name: 'jason',
    country: 'Taiwan'
}