
const spinalCase = (str) => {

    const words = []
    let word = ''

//    for(let i = 0; i < str.length; i++){
//        console.log(str[i])
//    }

    for(const char of str) {
        if(char === '_' || char === ' '){
            words.push(word)
            word = ''
        } else if ( char >= 'A' && char <= 'Z' && word.length === 0){
            word = char.toLowerCase();
        } else if (char >= 'A' && char <= 'Z' && word.length > 0) {
            words.push(word)
            word = char.toLowerCase()
        } else {
            word += char
        }
    }
    if (word.length) {
        words.push(word)
    }

    console.log(words)
    // const spinalCase = words.join('-')
    // return spinalCase;
    return words.join('-')
  }
  
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('The_Andy_Griffith_Show'))



/*
-  spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

- spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

- spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

- spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

- spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/