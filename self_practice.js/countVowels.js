// Given a string, count the total number of vowels (a, e, i, o, u) in it. There are two methods to count total number of vowels in a string. 
// 1. Iterative 
// 2. Recursive
// Examples: 
 

// Input : abc de
// Output : 2

// Input : geeksforgeeks portal
// Output : 7


function isVowel(str) {

    let vowels = ["a", "e" ,"i" ,"o" ,"u"]
    let result = 0
    for(let i = 0; i < str.length; i++){
        str = str.toLowerCase()
        if(vowels.includes(str[i])){
            result++
        }
    }
    return result


}

console.log(isVowel("abc dEIiii"))