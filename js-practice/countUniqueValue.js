/*implements a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted*/

// solution: 
// 1. create 2 pointer (i & j), i starts at 0, j start at 1
// 2. If the the array length is 0, then return one
// 3. move i up by one if i !== j; j will automatically move forward because of the for loop
// 4. if i == j, then set i = j 
// 5. return i + 1 to get the total of unique values
// O(n)-linear time b/c we only looping once
function countUniqueValues(arr){

    let hash = {}
    for(let num of arr){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
    
    let count = 0
    for(let key in hash){
        if(hash[key] == 1){
            count++
        }
    }
    return count

}
console.log(countUniqueValues([1,2,2,5,7,7,99])) // 3
