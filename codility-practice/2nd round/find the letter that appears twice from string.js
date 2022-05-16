

const findCharAppearsTwice = (str) => {

    let hash = {}
    
    for(const char of str){
        // if(!hash[char]){
        //     hash[char] = 1
        // } else {
        //     hash[char]++
        // }
        !hash[char] ? hash[char] = 1 : hash[char]++
    }

    for(let key in hash){
        if(hash[key] == 2){
            return key
        }
    }

    // console.log(hash)

}

console.log(findCharAppearsTwice("codility")) //=> i