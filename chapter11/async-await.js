// async function回傳promise物件
const processData = async () => {
    // throw new Error('something is wrong')
    return 12
}

// console.log(processData()) // 印出promise物件

processData().then((data) => {
    console.log('Data:', data)
}).catch((err) => {
    console.log('Error:', err)
})



// 結合promise的用法, 先定義一個會回傳promise物件的函式
const getPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided.')
    }, 2000)
})


const getAsync_1 = async () => {
    const data = await getPromise(2) // 先等待getPromise回傳的promise物件
    return data
}

getAsync_1().then((data) => {
    console.log('Data 1:', data) // 若正確則執行此行
}).catch((err) => {
    console.log('Error:', err) // 若錯誤則執行此行
})



// 可多次呼叫promise函式
const getAsync_2 = async () => {
    let data = await getPromise(2) // 等2秒
    data = await getPromise(data) // 再等2秒
    return data
}

getAsync_2().then((data) => {
    console.log('Data 2:', data)
}).catch((err) => {
    console.log('Error:', err)
})