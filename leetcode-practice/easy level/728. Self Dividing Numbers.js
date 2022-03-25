// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]


var selfDividingNumbers = function(left, right) {

    let arr = []
    for(let i = left; i <=right; i++){
        arr.push(i)
    }

    let output = []
    let count = 0
    for(let i = 0; i < arr.length; i++){
        let splitNum = arr[i].toString().split("")
        for(let j = 0; j < splitNum.length; j++){
            if(arr[i] % splitNum[j] == 0){
                count++
            }
            if(count == splitNum.length){
                output.push(arr[i])
            }
        }
        count = 0
    }
    return output
}

console.log(selfDividingNumbers(left = 1, right = 22)) // [1,2,3,4,5,6,7,8,9,11,12,15,22]