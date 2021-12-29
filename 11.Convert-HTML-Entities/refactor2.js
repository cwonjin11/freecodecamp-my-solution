const htmlDict = {
    '&':"&amp;",
    '<':"&lt;",
    '>':"&gt;",
    '"':"&quot;",
    "'":"&apos;"
}

// use map
const convertHTML = (str) => {

    let convertArray = str.split('').map(char => char in htmlDict ? htmlDict[char] : char).join('')
    return convertArray
}
  
  console.log(convertHTML("Dolce & Gabbana"));