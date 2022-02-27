var areOccurrencesEqual = function(s) {
    
    let hash = {}

    let letter = s.split("")
    
    for(const el of letter){
        if(hash[el]){
            hash[el]++
        } else {
            hash[el] = 1
        }
    }

    for(const key in hash){
        if(hash[key] !== hash[s[0]])  // check any letter from the string because all frequencies have to be the same
            return false
    }
    return true
    
};

console.log(areOccurrencesEqual("abacbc")) //true
console.log(areOccurrencesEqual("aaabc")) //false