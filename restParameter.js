// rest parameter

const average = (...numbers) => { // 用3個點代表參數數量不定
    let sum = 0
    numbers.forEach(num => {
        sum += num
    })
    return sum / numbers.length
}


// 還有其他參數的話,在...前面用逗點隔開
const average2 = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach(num => {
        sum += num
    })
    const average = sum / numbers.length
    return `The average of ${thing} is ${average}`
}
console.log(average2('grade', 0, 50, 100))

// 多個參數
const allTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

allTeam('library', 'COACH', 'allen', 'jason', 'tony')

const team = {
    name: 'library',
    coach: 'COACH',
    players: ['allen', 'jason', 'tony']
}

// spread syntax
allTeam(team.name, team.coach, ...team.players) // 可用...展開team裡的players這個array

const cities = ['Taipei', 'Hong Kong', 'Hsinchu']
const citiesCopy = [...cities] // deep copy
const citiesCopy2 = ['Tokyo', ...cities] // array的deep copy, 在最前面加一個item

let person = {
    age: 20,
    name: 'jason',
    country: 'Taiwan'
}

let person2 = { // object的deep copy
    ...person
}

// 可在前面後面加item
let person3 = {
    city: 'taipei',
    ...person,
    gender: 'male',
    age: 30 // 後面的會覆蓋掉前面的

}


person2.age = 22
console.log(person2)
console.log(person)
console.log(person3)

citiesCopy.push('New York')

console.log(cities)
console.log(citiesCopy)
console.log(citiesCopy2)