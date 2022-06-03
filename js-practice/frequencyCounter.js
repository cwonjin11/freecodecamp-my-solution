//https://gist.github.com/AndyOverLord

/* Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has 
it's corresponding value squared in the second array. 
The frequency of values must be the same.*/

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


const same = (arr1, arr2) => {

    if(arr1.length !== arr2.length) return false

    let hash = {}
    let hash2 = {}

    for(let num of arr1){
        !hash[num**2] ? hash[num**2] = 1  : hash[num**2]++
    }
    
    for(let num of arr2){
        !hash2[num] ? hash2[num] = 1  : hash2[num]++
    }

    for(let key in hash){
        if(!(key in hash2)) return false
        if(hash[key] !== hash2[key]) return false
    }
    return true
}


console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false
