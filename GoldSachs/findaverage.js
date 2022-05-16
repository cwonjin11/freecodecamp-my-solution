//given 2d string array, contains studentname and grade,
//return max average grade amongst all students

const maxAverage = (arr) => {

    let hash = {}
    let output = []
    for(let i = 0; i < arr.length; i++){
        let name = arr[i][0]
        let grade = Number(arr[i][1])
        if(!(hash[name])){
            hash[name] = []
        }
        hash[name].push(grade)
    }

    let array = []
    for(const name in hash){
        let average = hash[name].reduce((acc,curr) => acc + curr) / hash[name].length
        array.push(average)
       
    }
    return Math.max(...array)

}
console.log(maxAverage([["Rachel", "100"], ["Pheobe", "80"], ["Monica", "95"], ["Rachel", "50"], ["Pheobe", "60"]]))
console.log(maxAverage([["Rachel", "100"], ["Pheobe", "95"], ["Monica", "95"], ["Rachel", "50"], ["Pheobe", "95"], ["Pheobe", "100"]]))