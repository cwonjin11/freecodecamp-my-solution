/* Given two strings, 
write a function to determine if the second string is 
an anagram of the first. 
An anagram is a word, phrase, or name formed by 
rearranging the letters of another, such as cinema, formed from iceman. */
// Assume, they're all lowercase letter, not space, single word

// example
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// valid

function validAnagram(str1, str2){

    let hash = {}
    for(let char of str1){
        console.log(char)
    }

}

console.log(validAnagram('anagram', 'nagaram'))