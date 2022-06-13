/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

// see the matrix for your reference from leetcode website below
// leetcode url: https://leetcode.com/problems/search-a-2d-matrix/ 



var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        let start = matrix[i][0]
        let end = matrix[i][matrix[i].length - 1]
        
        if(start <= target && end >= target){
            let left = 0
            let right = matrix[i].length - 1
        
            while(left <= right){
                let mid = Math.floor((left+right)/2)
                if(target == matrix[i][mid]) return true
                else if(target < matrix[i][mid]) right = mid - 1
                else left = mid + 1
            }
        }
    }
    return false
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) //true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) //false
