// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5

/** 
var repeatedNTimes = function(nums) {

    let set = new Set()

    for(const num of nums){
        if(set.has(num)){
            console.log(num, "if set has num")
            return(num)
        }
        set.add(num)
    }

}
*/

var repeatedNTimes = function(nums) {

    let hash = {}

    for(const num of nums){
        // if(hash[num]) hash[num]++
        // else hash[num] = 1
        hash[num] ? hash[num]++ : hash[num] = 1 
    }
    console.log(hash)

    for(let key in hash){
        if(hash[key] > 1) {
            return key
        }
    }


}


console.log(repeatedNTimes([1,2,3,3])) // 3
// console.log(repeatedNTimes([2,1,2,5,3,2])) // 2
// console.log(repeatedNTimes([5,1,5,2,5,3,5,4])) // 5