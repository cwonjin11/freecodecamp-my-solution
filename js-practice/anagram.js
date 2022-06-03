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

    if(str1.length !== str2.length) return false 

    let hash = {}
    for(let char of str1){
       !hash[char] ? hash[char] = 1 : hash[char]++
    }

    for(let char of str2){
        if(hash[char]){
            hash[char]--
        } else {
            return false
        }
    }
    return true


}

console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('awesome', 'awesom')) //false
console.log(validAnagram('qwerty', 'qeywrt'))//true
console.log(validAnagram('', '')) //true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram("rat","car")) //false