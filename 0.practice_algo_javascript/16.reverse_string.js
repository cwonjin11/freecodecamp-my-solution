// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str){

    let reversed = ""

    for(let i = str.length - 1; i > -1; i--){
        reversed += str[i]
    }
    return reversed

}

console.log(reverse('apple'))
console.log(reverse('hello'))
console.log(reverse('Greetings!'))