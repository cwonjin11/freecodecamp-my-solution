// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9=> 15. The right to left diagonal = 3+5+9=>17. 
// Their absolute difference is |15-17| = 2.

function diagonalDifference(arr) {
    let n = arr.length
    let diagonal1 = 0
    let diagonal2 = 0

    for(let i = 0; i < n; i++){
        diagonal1 += arr[i][i]
        diagonal2 += arr[n-1-i][i]  // i=0;arr[2][0] //i=1; arr[1][1]  i=2; arr[0][2]
    }
    return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))  // => 2