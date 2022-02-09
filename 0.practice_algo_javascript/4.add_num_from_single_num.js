
function addNumbers(arg) {

    let output = 0
    for (let i = 1; i <= arg; i++){
        output += i
    }
    return output

}

console.log(addNumbers(4))
console.log(addNumbers(10))
// 1+2+3+4 => 10