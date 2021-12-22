
const obj = {
    'C':'G',
    'G':'C',
    'A':'T',
    'T':'A'
}
// console.log(obj)

const pairElement = (str) => { 

    const output = []

    for(const c of str){
        if (c === 'C'){
            output.push([c, obj[c]])
        }else if (c === 'G'){
            output.push([c, obj[c]])
        }else if (c === 'A'){
            output.push([c, obj[c]])
        }else if (c === 'T'){
            output.push([c, obj[c]])
        }
    }
    return output


}

console.log(pairElement("CTCTA"))