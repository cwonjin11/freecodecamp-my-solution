function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length === 0 || K === 0) return A

    let count = 0
    while(count < K){
        count++
        let popped = A.pop()
        A.unshift(popped)
    }
    return A
}

console.log(solution([],0))
console.log(solution([1,2,3,4,5,],3))