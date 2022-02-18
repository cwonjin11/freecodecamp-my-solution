
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    
    
    // for( let i = 0; i < nums.length; i++){
    //     if(nums[i] === target) {
    //         return i
    //     }
    // }

    // must be O(log n)


        let left = 0
        let right = nums.length -1
        
        while (left <= right) {
            let middle = Math.floor((left+right)/2)
            let potentialMatch = nums[middle]
            if (potentialMatch === target){
                return middle
            }else if (potentialMatch > target) {
                    right = middle -1
            }else if (potentialMatch < target) {
                left = middle + 1
            }
        }
        return -1
};

console.log(search([-1,0,3,5,9,12], 9)) //=>4