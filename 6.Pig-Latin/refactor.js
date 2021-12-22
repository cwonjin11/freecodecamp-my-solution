const translatePigLatin = (str) => {

    const VOWELS = ['a', 'e', 'i', 'o', 'u']

  
    // if first character starts with vowels //algorithm
    if (VOWELS.includes(str[0])) {
        return str + 'way'
    }
   
    // str does not include vowels
    if (str.split('').every(char => !VOWELS.includes(char))){
        return str + 'ay'
    }
    
  
  
    let consonantCluster = ''
    let firstVowelIndex = 0
    for (let i = 0; i<str.length; i++){
      const c = str[i]
      if(VOWELS.includes(c)){
        firstVowelIndex = i
        break
      }
      consonantCluster += c
    }
    return str.substring(firstVowelIndex) + consonantCluster + 'ay'
  }
    
  
    console.log(translatePigLatin("consonant"));
    console.log(translatePigLatin("algorithm"));
    console.log(translatePigLatin("rhythm"));
    console.log(translatePigLatin("shy"));
  
    //california => aliforniacay
    //phrase => asephray
    //one => oneway
    //algorithm => algorithmway
  
  
    //create a variable as