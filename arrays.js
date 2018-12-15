// array 的用法

let names = ['Taipei', 'Hsinchu', 'New York']

// forEach: 對每個item都執行function
// 對每個item,可以有3種參數,第1個是item本身,第2個是item的index,第3個是整個array
names.forEach(function (item, index, itself) {
    console.log(item, index, itself)
})

console.log('============')
console.log(names)