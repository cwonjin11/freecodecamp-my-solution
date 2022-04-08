const array = [1,2,3,4,5,6,7,8,9,10,11,13,15,16,18]

let newArray = []
let filter = array.forEach( el => {
    newArray.push(el+2)
})

console.log(filter)
console.log(newArray)
