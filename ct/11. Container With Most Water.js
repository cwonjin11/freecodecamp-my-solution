var maxArea = function(height) {
    let result = 0
    
    let left = 0
    let right = height.length - 1
    
    while( left < right){
        let area = (right-left) * Math.min(height[left], height[right])
        result = Math.max(area, result)
        height[left] > height[right] ? right -- : left++
    }
    return result
};


    // for(let l = 0; l < height.length; l++){
    //     for(let r = l + 1; r < height.length; r++){
    //         area = (r - l) * Math.min(height[l], height[r]) // get area of rectangle
    //         result = Math.max(result, area) // get maximum area for the result
    //     }
    // }

