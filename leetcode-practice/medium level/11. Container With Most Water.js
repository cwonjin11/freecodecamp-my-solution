
//brute force
// var maxArea = function(height) {

//     let result = 0

//     for(let l = 0; l < height.length; l++){
//         for(let r = l + 1; r < height.length; r++){
//             let area = (r - l) * Math.min(height[l], height[r]) // get area of rectangle
//             result = Math.max(result, area) // get maximum area for the result
//         }
//     }
//     return result
// }

// Linear solution O(n)
var maxArea = function(height) {

    let result = 0
    let left = 0
    let right = height.length - 1

    while( left < right) {
            let area = (right - left) * Math.min(height[left], height[right]) // get area of rectangle
            result = Math.max(result, area) // get maximum area for the result
            if(height[left] > height[right]){
                right--
            } else {
               left++
            }
    }

    return result
}




console.log(maxArea([1,8,6,2,5,4,8,3,7])) //=> 49
console.log(maxArea([1,1])) //=> 1