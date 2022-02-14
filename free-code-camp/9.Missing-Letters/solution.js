


const fearNotLetter = (str) => {

    let output = ''

    for(let i=0; i<str.length-1; i++){
    const currentCharCode = str.charCodeAt(i) 
    const nextCharCode = str.charCodeAt(i + 1)

        if (nextCharCode - currentCharCode !== 1){
            output = String.fromCharCode(currentCharCode + 1);
            console.log(String)
           break;
        }
    }

    if (output === ''){
        return undefined
    }

    return output
}
  
// console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));