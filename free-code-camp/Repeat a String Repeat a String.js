// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {

    let output = ""
    for(let j = 0; j < num; j++){
      for(let i = 0; i < str.length; i++){
        output += str[i]
       }
    }
  
    return output;
  }
  
  repeatStringNumTimes("abc", 3);