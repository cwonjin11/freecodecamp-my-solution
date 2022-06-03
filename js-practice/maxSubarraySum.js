// /*Write a function called maxSubarraySum which 
// accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n 
// consecutive elements in the array /*

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

// solution 1: o(n^2)
function maxSubarraySum(arr, num){
    // edge case: if we have an empty array, return null
    if (num > arr.length){
        return null;
    }
    // max start at negative infinity b/c I want to account for array that has all negative and 
    // biggest sum is negative which is still smaller than 0 
    let max = -Infinity;
    // start at the array, and end at almost end of the array
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0; 
        for (let j = 0; j < num; j++){
            if (temp > max){
                max = temp;  
            }
        }
    }
}

// Solution 2:  o(n)
// input array: ([1,2,5,2,8,1,5], 2)
// add the first 3 numbers, then move to the next 3 numbers. 
// subtract the first element of the first 3 numbers and add the last element of the next set of 3 numbers
// e.x: 1+2=3, 3-1+5=7, 7-5+2= 4, 4-2+8=10, 
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    // create our first sum which is maxSum.
    //  We just going to sum the first 3 digits
    // then set it equal to maxSum. Then that's it, we stop looping
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i ++) {
        tempSum = tempSum - arr[i-num] + arr[i]; 
        maxSum = Math.max(maxSum, tempSum);
        // console.log(tempSum, maxSum)
    }
    return maxSum;
}





function maxSubarraySum(arr, windowSize){

    //base case
    if (windowSize > arr.length) return null

    let max = 0;
    let temp;

    for (let i = 0; i < windowSize; i++) {
        max += arr[i];
    }
    temp = max;
    for (let i = windowSize; i < arr.length; i ++) {
        temp = temp - arr[i-windowSize] + arr[i]
        max = Math.max(max, temp)
    }
    return max
}



function maxSubarraySum_1 (arr, windowSize) {
    if (windowSize > arr.length) return null
    let max = -Infinity;
    for (let i=0; i+windowSize-1<arr.length; i++) {
        let value = arr[i]
        for (let j=1; j<windowSize; j++) {
            value += arr[i+j]
        }
        if (max < value) {
            max = value
        }
    }
    return max
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10