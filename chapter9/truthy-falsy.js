// Truthy 跟 falsy

const products = []
const product = products[0]

// falsy : false, 0, empty string, null, undefined, NaN

if (NaN) {
    console.log('This is truthy')
} else {
    console.log('This is falsy')
}