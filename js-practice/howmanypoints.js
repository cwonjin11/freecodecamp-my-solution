
// how many intervals has the point

const solution = (intervals, point) => {

    let counter = 0

    for(let arr of intervals){
        if(arr[0] <= point && arr[1] >= point){
            counter++
        }
    }
    return counter


}
console.log(solution([[1,5], [2,6], [1,4], [8,15]], 4))
// console.log(solution([[1,5], [2,6], [1,4], [8,15]], 1))


