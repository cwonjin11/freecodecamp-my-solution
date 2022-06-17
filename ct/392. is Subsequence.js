var isSubsequence = function(s, t) {
    let sIndex = 0 //
    let tIndex = 0 // 

    // while(sIndex < s.length && tIndex < t.length){
    while(tIndex < t.length){

        if(s[sIndex] == t[tIndex]){
            sIndex++
        } 
        tIndex++
    }

    return s.length === sIndex
    
};

console.log(isSubsequence("abc", "ahbgdc"))