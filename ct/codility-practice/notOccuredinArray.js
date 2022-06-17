// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = [...new Set(A)]
    set.sort((a,b) => a - b)
    let setSum = set.reduce((acc, curr) => acc + curr)
    let iSum = 0
    for(let i = 1; i <= A.length; i++){
      iSum += i
      if(A[i-1] <= 0) return 1
    }
    if(iSum == setSum) return A.length + 1
    
    return iSum - setSum
}


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set()
    for(let num of A){
        if(num > 0){
            set.add(num)
        }
    }
    
    for(let i = 1; i <= A.length + 1; i++){
        if(!set.has(i)) return i
    }
}