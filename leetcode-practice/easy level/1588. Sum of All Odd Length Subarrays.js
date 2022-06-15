// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    
    let count=0;
    
    for(let i=0;i<arr.length;i++){ // helping in selecting the starting point
        
        for(let j=i;j<arr.length;j++){  // helping in selecting the endpoint point
		
            if((i-j)%2==0){  // so that it only count the subarrays which have odd length
			
				for(let k=i;k<=j;k++){ // looping from start point to end point and adding them
					count+=arr[k];
				}
            }
        }
    }
    return count;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3])) // 58