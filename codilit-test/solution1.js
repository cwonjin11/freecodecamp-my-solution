function solution(S) {
    //loop through string S by index
    for(let i = 0; i <= S.length; i++) {
        // another for loop to compare with the previous loop
        for(let j = i+1; j <= S.length; j++) {
            // if a letter of index j matches a letter of index i
            if(S[j] == S[i]) 
                // return the letter
                return S[j];
        }
    }
    // return undefined; //return something if nothing matched
}


console.log(solution("abqwer"))
console.log(solution("zz"))