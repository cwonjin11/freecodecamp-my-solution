const htmlDict = {
    '&':"&amp;",
    '<':"&lt;",
    '>':"&gt;",
    '"':"&quot;",
    "'":"&apos;"
}


const convertHTML = (str) => {

    let output = ''

    for(const char of str){
        //using ternary operator
        // if char in htmlDict is true, then append html dict add key char, if not append char itself
        output += char in htmlDict ? htmlDict[char] : char


        // if(char in htmlDict){
        //     output += htmlDict[char]
        // }else {
        //     output += char
        // }
    }
    return output
}
  
  console.log(convertHTML("Dolce & Gabbana"));