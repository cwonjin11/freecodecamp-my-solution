
/*
problem : create a function that takes width, length and find the perimeter of a rectangle
solve : w=6, l=7 ; 2(w+l) = perimeter of the rectangle => 26
pseudocode : 

1. create a variable with and length as w and l = 0
2. create a variable output 
3. output = add w and l and multiply by 2 
3.  return output


*/
function findPerimeterRecTangle(width, length) {
    let output = 0
    output = 2 * (width + length)
    return output
}


console.log(findPerimeterRecTangle(6,7))
console.log(findPerimeterRecTangle(2,7))


// difference between undefined vs null
// undefined => a varaible has been declared but no value has been given
// null => a variable has been declared with an empty value of it has been given
// let example 
// console.log(example)
// console.log(typeof example) // => type of undefined is undefined

// let exmaple2 = null
// console.log(exmaple2)
// console.log(typeof exmaple2) //=> the type of null is object (mistake)