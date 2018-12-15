// if else另類寫法

const age = 20
// let message
// if (age > 18) {
//     message = 'adult'
// } else {
//     message = 'not adult'
// }
// if else 寫法等價於用conditional operator

// 條件 ? True執行 : False執行
const message = age > 18 ? 'adult' : 'not adult'
console.log(message)

////////////////////////////////////////


function yes() {
    console.log('You are adult')
}

function no() {
    console.log('You are not adult')
}

// 簡化後的if else寫法
age > 18 ? yes() : no()


//////////////////////////


const team = ['jason', 'allen']

teamMessage = team.length > 1 ? 'not single team' : 'single team'
console.log(teamMessage)