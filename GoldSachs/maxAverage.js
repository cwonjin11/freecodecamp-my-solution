

const maxAverage = (data) => {

    let hash = {}

    for(const arr of data){
        let name = arr[0]
        let grade = +arr[1]
        if(!hash[name]){
            hash[name] = []
        }
        hash[name].push(grade)
    }

    let result = []
    for(const name in hash){
        let average = hash[name].reduce((acc,curr) => acc + curr) / hash[name].length
        let floorAverage = Math.floor(average)
        result.push(floorAverage)
    }
    console.log(result)
    console.log(Math.max(...result))
}

// console.log(maxAverage([{"Bob", "87"}, {"Mike", "35"},{"Bob", "52"}, {"Jason","35"}, {"Mike", "55"}, {"Jessica", "99"}]))
console.log(maxAverage([["Bob","87"], ["Mike", "35"], ["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]]))
// console.log(maxAverage(["Bob","-87"], ["Mike", "-35"], ["Bob", "-52"], ["Jason","-35"], ["Mike", "-55"], ["Jessica", "-99"], ["Sid", "1"]))



// [[["Bob","87"], ["Mike", "35"], ["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]], 
// [["Bob","-87"], ["Mike", "-35"], ["Bob", "-52"], ["Jason","-35"], ["Mike", "-55"], ["Jessica", "-99"], ["Sid", "1"]],
// [["Bob","55"], ["Bob", "35"]],
// [["Bob","55"], ["Bob", "35"], ["Bob", "45"]],
// [["Bob","55"]],
// [["Bob","55"], ["Bob", "35"], ["Sid", "56"]],
// [["Bob","-55"], ["Bob", "-35"], ["Sid", "-56"]]
// ]