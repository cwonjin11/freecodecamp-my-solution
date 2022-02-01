const solution = (arr) => {

    // const dupNum = []
    const solution = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if (arr[i] != arr[j]) {
                solution.push(arr[i])
            } 
 
        }
        return solution
    }
    return -1
}
// console.log(solution([4,5,3,3,1,1,2,2]))
console.log(solution([4, 10, 5, 4, 2, 10]))
// console.log(solution([1,4,3,3,1,2]))