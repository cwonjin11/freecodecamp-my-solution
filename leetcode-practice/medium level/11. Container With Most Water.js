
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
// var maxArea = function(height) {

//     let result = 0
//     let left = 0
//     let right = height.length - 1

//     while( left < right) {
//             let area = (right - left) * Math.min(height[left], height[right]) // get area of rectangle
//             result = Math.max(result, area) // get maximum area for the result
//             if(height[left] > height[right]){
//                 right--
//             } else {
//                left++
//             }
//     }

//     return result
// }


//best solution
//Time: O(n)
//Space: O(1) as we do not requires extra space 
var maxArea = function(height) {
    //initialize max area to zero
    let max = 0
    //initialize left and right to extreme ends of the array
    let left = 0
    let right = height.length - 1
    // while left < right, loop
    while(left < right){
        // calculate current area and update max area
        let currArea = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(max, currArea)
        // take decision regarding which pointer to move 
        if(height[left] < height[right]) {
            left++
        } else{ 
            right--
        }
    }
    // return the maximum area
    return max
}





console.log(maxArea([1,8,6,2,5,4,8,3,7])) //=> 49
console.log(maxArea([1,1])) //=> 1




//T: O(n^2)
//S: O(1)
var maxArea = function(height) {
    // initialize max to zero
    let max = 0
    // a for loop for the left pointer
    for(let i = 0; i < height.length; i++){
        // a for loop for the right pointer
        for(let j = i+1; j < height.length; j++){
            let currArea = Math.min(height[i], height[j]) * (j - i)
             //update maximum area
            max = Math.max(max, currArea)
        }
    }
   //return the maximum area
    return max
  
};
