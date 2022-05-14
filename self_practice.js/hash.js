

const hashPractice = (items) => {

    let hash = {}
    for(const item of items){
        let id = item[0]
        let score = item[1]
        if(!hash[id]){
            hash[id] = []
        } 
        hash[id].push(score)
    }
    console.log(hash)
}

console.log(hashPractice([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))

//[{ "1" : [91, 92, 60, 65, 87, 100]}