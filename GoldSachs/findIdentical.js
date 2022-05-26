//Suppose I have "abbbccda" then it should return [1, 3]. 
//Because it starts from index 1 and is 3 characters long. 
// If the input string is empty then return [-1, 0].

const findIdentical = (str) => {

    if(str.length == 0) return [-1, 0]
    if(str.length == 1) return [0, 1]

    let idx = 0
    let maxCharCount = 0
    let count = 1

    for(i = 1; i < str.length; i++){
        if(str[i] == str[i-1]){
            count++
        } else {
            if(count > maxCharCount){
                maxCharCount = count
                idx = i - count
            }
            count = 1
        }
    }
 
   return [idx, maxCharCount]

}

console.log(findIdentical("")) // [2,5]
console.log(findIdentical("1")) 
console.log(findIdentical("aabbbbbccddb")) 
console.log(findIdentical("10000111")) 
console.log(findIdentical("aabbbbbCdAA")) 
console.log(findIdentical("abaababaab")) 