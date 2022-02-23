// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 
// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function(numRows) {
    
    let pascal = []
    for(let i = 0; i < numRows; i++ ){
        pascal[i] = []
        pascal[i][0] = 1
        // console.log(pascal)
            for(let j = 1; j < i; j++){
                pascal[i][j] =  pascal[i-1][j-1] + pascal[i-1][j]
            }
        pascal[i][i] = 1;
    }
    return pascal;
};

console.log(generate(4))
// var generate = function(numRows) {
//     var pascal = [];
//     for (var i = 0; i < numRows; i++) {
//         pascal[i] = [];
//         pascal[i][0] = 1;
//         for (var j = 1; j < i; j++) {
//             pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
//         }
//         pascal[i][i] = 1;
//     }
//     return pascal;
// };
    
    /*
    n = 1; [[1]]
    n = 2; [[1], [1,1]]
    n = 3; [[1], [1,1], [1,2,1] ]
    n = 4; [ [1], [1,1], [1,2,1], [1,3,3,1] ]
    n = 5; [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
    
    nth ;  [ [1],   arr[0]+arr[1],   arr[1]+arr[2],   arr[2]+arr[3],   [1]   ] 
                
    */

// 