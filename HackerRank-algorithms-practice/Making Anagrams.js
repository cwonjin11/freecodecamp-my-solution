function makingAnagrams(s1, s2) {
    // Write your code here
    let hash = {}
    
    for(const char of s1){
        hash[char] = (hash[char]||0) + 1;
    }

    for(const char of s2){
        hash[char] = (hash[char]||0) - 1
    }

    let total = 0
    for(let key in hash){
        if(hash[key] !== 0){
            total += Math.abs(hash[key])
        }
        //same as
        // if(hash.hasOwnProperty(key)){
        //     total += Math.abs(hash[key]);
        // }
    }
    return total
}