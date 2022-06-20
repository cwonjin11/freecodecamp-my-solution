
/* Three ways of performing a shallow copy of an array */

let array = ["🍔", "🍕", "🍗", "🌮", "🌭"]


let spreadOperator = [...array]
let slice = array.slice()
let arrFrom = Array.from(array)


console.log(spreadOperator) //=> [ '🍔', '🍕', '🍗', '🌮', '🌭' ]
console.log(slice)          //=> [ '🍔', '🍕', '🍗', '🌮', '🌭' ]
console.log(arrFrom)        //=> [ '🍔', '🍕', '🍗', '🌮', '🌭' ]

