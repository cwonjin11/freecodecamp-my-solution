var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
      let [start, end] = intervals[i]
      let lastEnd = res[res.length - 1][1]; 
      
      if (start <= lastEnd) {
        res[res.length - 1][1] = Math.max(lastEnd, end);
      } else {
        res.push(intervals[i])
      }
    }
    
    return res;
}


console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // => [[1,6],[8,10],[15,18]]