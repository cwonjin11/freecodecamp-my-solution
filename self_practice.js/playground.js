
// insert meeting room problem related technic.

const slicePractice = (arr) => {

    let result = []
    for(let i = 0; i < arr.length; i++){
        let sliced = arr.slice(i)
       result.push(...sliced)
       return result  // if we not return here, it will keep slicing
    }
}

console.log(slicePractice([1,2,3,4,5]))


var insert = function(intervals, newInterval) {
    
    let result = []
    for(let i = 0; i < intervals.length; i++){
        if(newInterval[1] < intervals[i][0]){ // if new interval is samller than the first intervalsp[i], we just push the new interval to our result and push all intervas
            result.push(newInterval)
            result.push(...intervals.slice(i)) // push all elements in intervals array to the result array and then return so we not go through other slice loop
            return result
        } else if(newInterval[0] > intervals[i][1]){
            result.push(intervals[i])
        } else {
            newInterval = [ Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1]) ]
        }
    }
    
    result.push(newInterval)
    return result
};