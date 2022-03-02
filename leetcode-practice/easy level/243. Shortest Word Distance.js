var shortestDistance = function(wordsDict, word1, word2) {
    let idxWord1 = -1 , idxWord2 = -1
    let minDistance = wordsDict.length
    
    for(let i = 0; i < wordsDict.length; i++){
        if(word1 === wordsDict[i]){
            idxWord1 = i
        } else if(word2 === wordsDict[i])
            idxWord2 = i
        if (idxWord1 != -1 && idxWord2 != -1){
         minDistance = Math.min(minDistance, Math.abs(idxWord1 - idxWord2))
            }
    }
    return minDistance
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice")) //3
console.log(shortestDistance(wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding")) //1