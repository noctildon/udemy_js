console.log('utilities.js')

const add = (a, b) => a + b // 輸出這個js檔案內的函式
const name = 'Allen'

const square = (x) => x * x
// export default square // export default只能有一個

// 另一個方法export
export {
    add,
    name,
    square as
    default
}