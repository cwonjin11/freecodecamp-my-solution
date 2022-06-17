var trap = function(height) {

    if(!height.length) return 0
 
    let sum = 0
    let wallHeight = 0
    let maxHeight = height[0]
    let maxHeightIndex = 0  //need maxHeightIndex to seperate calculating left and right trapping water.
    
    // find the max height of bar from the left end upto an index i in the array left max
    for(let i = 0; i < height.length; i++){
        if(height[i] > maxHeight){
            maxHeight = height[i]
            maxHeightIndex = i 
        }
    }
    console.log(maxHeight, maxHeightIndex)
    
    //find left trapping water
    for(let i = 0; i <= maxHeightIndex; i++){
        if(height[i] > wallHeight){
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
            // console.log(sum)
        }
    }
    
    // reset wallHeight
    //find right side trapping water, reverse loop
    wallHeight = 0 //5
    for(let i = height.length - 1; i >= maxHeightIndex; i--){
        if(height[i] > wallHeight){
            wallHeight = height[i]
        } else {
            sum += wallHeight - height[i]
        }
    }
    
    return sum
    //loop through heights,
  
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  // 6
console.log(trap([4,2,0,3,2,5]))  // 9