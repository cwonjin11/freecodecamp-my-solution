
const findSecondLargest = (str) => {

    let arr = [...new Set(str.split(""))]
    let output = []
    for(let i = 0; i < arr.length; i++){
        let numberOnly = parseInt(arr[i])

        if(numberOnly >= 1){
            output.push(numberOnly)
        }
    }

    output.sort((a,b) => a - b)
    return output.length > 1 ? output[1] : -1
  
}






console.log(findSecondLargest("dfa13321afd"))