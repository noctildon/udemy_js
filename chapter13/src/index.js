// import './utilities.js' // 從另一個js檔案import
// import './utilities' // 等價於上行


// default匯入不需要用{}包住
import otherSquare, { // 從特定js檔匯入特定物件
    add,
    name
} from './utilities'

import { // 從另一個js匯入
    scream
} from "./scream";

console.log(name)
console.log('index.js')
console.log(add(3, 2))
console.log(scream('abc'))
console.log(otherSquare(5))