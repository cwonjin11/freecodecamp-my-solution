// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

const minimumAbsDifference = (arr) => {
    let result = []
    arr.sort((a,b) => a -b)
    let minNum = Infinity // Number. MAX_SAFE_INTEGER

    for(let i = 0; i < arr.length - 1; i++){
        let diff = arr[i+1] - arr[i]
        if( diff < minNum){
            result = [ arr[i], arr[i+1] ]
            minNum = diff
        } else if(diff === minNum) {
            result.push([arr[i], arr[i+1]])
        }
    }
    return result
}
console.log(minimumAbsDifference([4,2,1,3])) //[[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1,3,6,10,15])) // [[1,3]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) //[[-14,-10],[19,23],[23,27]]