function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set(A)

    let i = 1
    while(set.has(i)){
        i++
    }

    return i
}