const pairElement = (str) => {

    let output = []

    for(let i=0; i<str.length; i++){
      if (str[i] === 'C') {
          output.push([str[i], 'G'])
      }else if (str[i] === 'G') {
        output.push([str[i], 'C'])
      }else if (str[i] === 'A') {
        output.push([str[i], 'T'])
      }else if (str[i] === 'T') {
        output.push([str[i], 'A'])
      } 
    }
    return output
}
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));



  // create a output variable as an empty array.
  // Loop through each character of str
  // if character equals to C
//  push to output array with another array like [char, "G"]