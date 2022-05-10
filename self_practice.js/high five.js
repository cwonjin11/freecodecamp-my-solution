const highFive = (items) => {
    let hash = {}

    for(let i = 0; i < items.length; i++){
        let id = items[i][0]
        let scores = items[i][1]
        if(!hash[id]) hash[id] = []
        hash[id].push(scores)
    }


    let result = []
    for(const key in hash){
        let average = 0
        let sorted = hash[key].sort((a,b) => b - a)
        sorted.length = 5
        average = Math.floor(sorted.reduce((curr, acc) => curr + acc ) / 5)
        result.push([key, average])
    }
    return result
}










console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))
