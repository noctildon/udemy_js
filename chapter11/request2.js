// this is exercise

const countryCode = "US" // 這對應到alpha2Code
const request2 = new XMLHttpRequest()
request2.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status) { // 4代表成功回傳, check status, 200表正常
        const data = JSON.parse(e.target.responseText)
        const countryData = data.find(c => c.alpha2Code === countryCode)
        console.log(countryData)
        console.log(`The country is ${countryData.name}`)
    } else if (e.target.readyState === 4) {
        console.log('it fails')
    }
})

request2.open('GET', 'https://restcountries.eu/rest/v2/all')
request2.send()