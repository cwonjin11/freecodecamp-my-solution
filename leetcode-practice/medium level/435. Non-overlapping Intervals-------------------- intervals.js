// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0])
    let count = 0
    let prevEnd = intervals[0][1]
    
    for(let i = 1; i < intervals.length; i++){
        let [start, end] = intervals[i]
        if(start >= prevEnd){
            prevEnd = end
        } else {
            count++
            prevEnd = Math.min(end, prevEnd)
        }
    }
    return count
};



var eraseOverlapIntervals = function(intervals) {
    
    intervals.sort((a,b) => a[1] - b[1])
    let count = 0
    let prev = intervals[0]  // set the first interval as prev
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] < prev[1]) {
            console.log(intervals[i])
            count++ 

        } else {
         prev = intervals[i]
        }
    }
    return count
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // => [1,2][2,3][1,3][3,4] ==>1


