const translatePigLatin = (str) => {

  const VOWELS = ['a', 'e', 'i', 'o', 'u']

  const firstCharacter = str[0]

  // if first character starts with vowels //algorithm
  if (VOWELS.includes(firstCharacter)) {
    return str + 'way'
  }
 

  let hasNoVowels = true
  for(const c of str) {
    if(VOWELS.includes(c)){
      hasNoVowels = false
      break
    }
  }
  if (hasNoVowels) {
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

  //california => aliforniacay
  //phrase => asephray
  //one => oneway
  //algorithm => algorithmway


  //create a variable as