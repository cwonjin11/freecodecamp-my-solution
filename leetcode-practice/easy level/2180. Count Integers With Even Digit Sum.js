// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

 

// Example 1:

// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    
// Example 2:

// Input: num = 30
// Output: 14
// Explanation:
// The 14 integers less than or equal to 30 whose digit sums are even are
// 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.


const countEven = (num) => {

    let count = 0
        for(let i = 1; i <= num; i++){
            if(digitSum(i) % 2 === 0){
                count++
            }
        }
    return count
}

const digitSum = (num) => {
    let sum = 0
    while(num){
        sum += num % 10
        num = Math.trunc(num / 10) // return only the integer part of a number by removing any fractional digits
    }
    return sum
}
console.log(digitSum(11))
console.log(digitSum(12))
console.log(digitSum(13))
console.log(digitSum(14))
console.log(digitSum(15))

console.log(countEven(30))