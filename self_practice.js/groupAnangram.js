var groupAnagrams = function(strs) {

    let hash = {}
    for(let str of strs){
        let splitted = str.split("").sort().join("")
        if(!hash[splitted]){
            hash[splitted] = []
        }
        hash[splitted].push(str)
    }
   
    let result = []
    for(let key in hash){
        result.push(hash[key])
    }
    return result
};

 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // => [["bat"],["nat","tan"],["ate","eat","tea"]]


 var groupAnagrams1 = function(strs) {

    let hash = {}
    for(let str of strs){
        let splitted = str.split("").sort().join("")
        if(!hash[splitted]){
            hash[splitted] = []
        }
        hash[splitted].push(str)
    }
   
    return Object.values(hash)
};

console.log(groupAnagrams1(["eat","tea","tan","ate","nat","bat"])) // => [["bat"],["nat","tan"],["ate","eat","tea"]]