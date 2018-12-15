// for loop 的用法

// if (初始值;結束條件;迭代方式). 從初始值開始執行,直到結束條件變成false,以迭代方式進行迭代
// i++ 同義於 i = i + 1, i-- 同義於 i = i - 1
for (let count = 0; count <= 2; count++) { // 從0開始,每次+1,直到(count <= 2)變成false為止
    console.log(count)
}

console.log('==============')

a = ['a', 'b', 'c']
for (let index = 0; index < a.length; index++) {
    a[index] = index
}
console.log(a)