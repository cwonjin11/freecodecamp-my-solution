// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(num){

    let reversed = num.toString().split("").reverse().join("")

    let result = parseInt(reversed) * Math.sign(num)
    console.log(result)

}

console.log(reverseInt(981))
console.log(reverseInt(-90))