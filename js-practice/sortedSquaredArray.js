/* Write a function that takes in a non-empty array of integers 
that are sorted in ascending order and return a new array of the same 
length with the squares of the original integers also sorted in ascending order.*/

// sample: array =[1, 2, 3, 5, 6, 8, 9]
// sample output: [1, 4, 9, 25, 36, 64, 81]

/* first, sort the array in ascending order.
Then, square each element of the array. 
Then return a new a array. */ 
// solution 1: 
function sortedSquaredArray(array) {

    let squared = array.map(el => Math.pow(el, 2))
    return squared.sort((a,b)=> a - b)

}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) // [1, 4, 9, 25, 36, 64, 81]
console.log(sortedSquaredArray([-4,-1,0,3,10])) // [0,1,9,16,100]