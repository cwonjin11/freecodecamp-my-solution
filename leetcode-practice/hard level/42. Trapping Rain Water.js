
var trap = function(height) {

    if(height.length === 0 || height == null) return 0

    let left = 0
    let right = height.length - 1
    let leftMax = height[left]
    let rightMax = height[right]
    let result = 0

    while(left < right){
        if(leftMax < rightMax){ // going to shift the one that has the smaller max value
            left++ 
            leftMax = Math.max(leftMax, height[left])
            result += leftMax - height[left]
        } else {
            right--
            rightMax = Math.max(rightMax, height[right])
            result += rightMax - height[right]
        }
    }
    return result

}





var trap1 = function(height) {

    if(!height.length) return 0

    let sum = 0
    let wallHeight = 0  //current height of the wall
    let maxHeight = height[0]
    let maxHeightIndex = 0  // index of the max height of the array


    //find the index of the highest height in height array
    for(let i = 0; i < height.length; i++){
        if(height[i] > maxHeight){
            maxHeight = height[i]  // 3
            maxHeightIndex = i     // 7
        }
    }
    console.log(maxHeight,maxHeightIndex)


    //loop over heights until the highest index
    // if current height which is height[i] is taller than wallHeight, wallHeight = height[i]
    // at each index, find the difference between the current height( height[i]) and the wallHeight

    for(let i = 0 ; i <= maxHeightIndex; i++){
        if(height[i] > wallHeight){
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }
    console.log(sum, "sum")

    //reset wallHeight
    //repeat the above loop in opposite direction until you reach the highest index
    wallHeight = 0
    for(let i = height.length - 1; i >= maxHeightIndex; i-- ){
        if(height[i] > wallHeight){
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        } 
    }
    return sum
}
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap1([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap1([4,2,0,3,2,5])) // 9