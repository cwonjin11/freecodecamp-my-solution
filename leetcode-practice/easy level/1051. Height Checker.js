var heightChecker = function(heights) {

    let original = [...heights]
    
    let sorted = heights.sort((a,b) => a-b)
   
    let count = 0
    for(let i=0; i < original.length; i++){
        if(original[i] !== sorted[i]){
            count++
            }
    }
    return count
};