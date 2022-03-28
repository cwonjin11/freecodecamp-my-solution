function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let specialCharacters = "!@#$%^&*()-+"
    
    let min = 6
    
    let num = false
    let lower = false
    let upper = false
    let special = false
    let count = 0
    
    for(let i = 0; i < password.length; i++){
        if(numbers.includes(password[i])){
            num = true
        }
        if(lowerCase.includes(password[i])){
        lower = true
        } 
        if(upperCase.includes(password[i])){
        upper = true
        } 
        if(specialCharacters.includes(password[i])){
        special = true
        } 
    }
    
    if(num == true) {count++}
    if(lower == true) {count++}
    if(upper == true) {count++}
    if(special == true) {count++}
    
    return Math.max(4 - count, 6 - n )
    
    
}    
console.log(minimumNumber(3, "Abi")) // 3
console.log(minimumNumber(11, "#HackerRank")) // 1

//or
// function minimumNumber(n, password) {
// let c = 0;
//     c += (password.match(/[0-9]/) || []).length;
//     c += (password.match(/[a-z]/) || []).length;
//     c += (password.match(/[A-Z]/) || []).length;
//     c += (password.match(/[\!@#\$%^&\*\(\)\-\+]/) || []).length;
//     return Math.max(4-c, 6-n);
// }
