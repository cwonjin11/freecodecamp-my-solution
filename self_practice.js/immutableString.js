

const immutableString = (a) => {

    // let stringArr = a.split("")
    // // console.log(stringArr)
    // let output = []
    
    // for(let i = 0; i < stringArr.length; i++){
      
    //     output.push(stringArr[0].toUpperCase(),stringArr.splice(1))
       
       

    // }
    // return output.join(",").split(",").join("")

    console.log(a.charAt(0).toUpperCase() + a.slice(1))
}

console.log(immutableString("hello"))