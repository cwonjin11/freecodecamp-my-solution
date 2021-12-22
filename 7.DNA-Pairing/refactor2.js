
const obj = {
    'C':'G',
    'G':'C',
    'A':'T',
    'T':'A'
}
const pairElement = (str) => { 

    const output = []

    for(const c of str){
        output.push([c, obj[c]])
    }
    return output


}

console.log(pairElement("CTCTA"))