// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive intergers,
// find out if the two numbers have the same frequency of digits.

// Solution Requirements
//      - Time Complexity: O(n)

function sameFrequency(int1, int2) {

    let hash = {}
    let arr1 = int1.toString().split("")
    let arr2 = int2.toString().split("")
    // console.log(arr1, arr2)

    for(let digit of arr1){
        !hash[digit] ? hash[digit] = 1 : hash[digit]++
    }
   
    for(let digit of arr2){
        if(hash[digit]){
            hash[digit]--
        } else {
            return false
        }
    }
    return true
}


 console.log(sameFrequency(182, 281)) // true
 console.log(sameFrequency(34, 14)) // false
 console.log(sameFrequency(3589578, 5879385)) // true
 console.log(sameFrequency(22, 222)) // false