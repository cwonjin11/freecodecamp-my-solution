// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function(words) {
    
    console.log(words)
    let result = []
    let word1 = words[0].split("") // [...words[0]]
    console.log(word1)
    
    for(const char of word1){
        if(words.every( word => word.includes(char)) ){
            result.push(char)
            words = words.map(word => word.replace(char, ""))
        }
    }

    console.log(words)
   return result
};

console.log(commonChars(["cool","lock","cook"])) // ["c", "o"]
