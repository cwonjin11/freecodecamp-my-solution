


const canAttends = (intervals) => {

    //sortedArray 

    const sorted = intervals.sort((a,b) => a[0] - b[0])
    
    for(let i = 0; i < sorted.length - 1; i++){
        if(sorted[i][1] > sorted[i+1][0]){
            return false
        }
    }
    return true
}

console.log(canAttends([[0,30],[5,10],[15,20]])) // false []
console.log(canAttends([[5,10],[0,30],[15,20]])) // false []
console.log(canAttends([[7,10],[2,4]])) //true