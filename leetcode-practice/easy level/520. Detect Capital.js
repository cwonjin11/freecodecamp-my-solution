var detectCapitalUse = function(word) {
    
    return word === word.toUpperCase() || word === word[0] + word.slice(1).toLowerCase()
     
 };

 console.log(detectCapitalUse("USA"))
 console.log(detectCapitalUse("leetcode"))
 console.log(detectCapitalUse("Google"))
 console.log(detectCapitalUse("leetCode"))
 console.log(detectCapitalUse("SuperMan"))