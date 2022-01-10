function myReplace(str, before, after) {

    // check if 'before' is capitalized or not. If capitalized, true, else, false
    const isCapitalized = before[0] >= 'A' && before[0] <= 'Z'
    console.log(isCapitalized)
    
    let caseAfter
        //if 'after' is uppercase, 
        if(isCapitalized){
            caseAfter = after[0].toUpperCase() + after.substring(1)
            console.log(caseAfter, "11")
        } else {
            caseAfter = after[0].toLowerCase() + after.substring(1)
            console.log(caseAfter, "22")
        }

    const replaceString = str.replace(before, caseAfter)
    return replaceString
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))