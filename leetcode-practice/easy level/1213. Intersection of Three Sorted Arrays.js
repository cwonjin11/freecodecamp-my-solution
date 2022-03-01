// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.


// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.
// Example 2:

// Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
// Output: []
 





var arraysIntersection = function(arr1, arr2, arr3) {
    
    let hash = {}
    
    for(const num of arr1){
        hash[num] = 1
    }
   
    
    for(const num of arr2){
        if(hash[num]){
            hash[num]++
        }
    }
    
    for(const num of arr3){
        if(hash[num]){
            hash[num]++
        }
    }
    
    let output = []
    for(const key in hash){
        if(hash[key]  === 3) {
            output.push(key)
        }
    }
    return output
    
};