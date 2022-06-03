


function solution(str){

    let hash = {}
    for(const char of str){
        !hash[char] ? hash[char] = 1 : hash[char]++
    }
    
    for(let key in hash){
        if(hash[key] == 2){
            return key
        }
    }
    
    return -1

}

console.log(solution("abacdefg"))