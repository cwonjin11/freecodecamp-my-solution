



const pop = (arr) => {

    let output = []
    let sorted = arr.sort()
    for(let i = 0; i < sorted.length + 2; i++){
        
        output.push(sorted.pop())
        output.push(sorted.shift())

    }

    return output

}

console.log(pop([1, 2, 3, 4, 5,6,7]))