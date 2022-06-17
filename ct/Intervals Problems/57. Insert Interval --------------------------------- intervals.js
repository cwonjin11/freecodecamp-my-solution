var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0] - b[0])
    let result = [intervals[0]]
   
    for(let i = 1; i < intervals.length; i++){
        let start = intervals[i][0]
        let end = intervals[i][1]
        let lastEnd = result[result.length - 1][1]
        
        if(start <= lastEnd){
            result[result.length - 1][1] = Math.max(end, lastEnd)
        } else {
            result.push(intervals[i])
        }
    }
    return result
};


console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) //=>[[1,2],[3,10],[12,16]]





var insert = function(intervals, newInterval) {
    // if( !intervals.length ) return [newInterval]

    //push newinterval and sort
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0]);
    
    // console.log(intervals) //[[1,3], [2,5], [6,9]]
    
    const result = [ intervals[0] ] //[[1,3]]
    for(let i = 1; i < intervals.length; i++){
        let [ start, end ] = intervals[i] // 2 5,  6 9
        let lastEnd = result[result.length -1][1]
        if( start <= lastEnd){
            result[result.length -1][1] = Math.max(lastEnd,end)
        } else {
            result.push(intervals[i])
        }
    }
    return result
};



//Neetcode solution
var insert = function(intervals, newInterval) {
    
    let result = []
    for(let i = 0; i < intervals.length; i++){
        if(newInterval[1] < intervals[i][0]){
            result.push(newInterval)
            result.push(...intervals.slice(i))  // add all of intervals element.
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