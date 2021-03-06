
//https://app.codility.com/c/feedback/V6U722-VTH/

var maxNumberOfBalloons = function(text) {

  let hash = {b:0, a:0, l:0, o:0, n:0}

    for(let char of text){
        hash[char]++
    }
  
  let lCount = Math.floor(hash["l"] / 2)
  let oCount = Math.floor(hash["o"] / 2)

  return Math.min(hash["b"], hash["a"], lCount, oCount, hash["n"])

}




console.log(maxNumberOfBalloons("BAOOLLNNOLOLGBAXBAOOLLNNOLLGBAX")) // => 3
// console.log(solution("QAWABAWONLQAWABAWONL"))
// console.log(solution("BAOOLLNNOLOLGBAX"))
// console.log(solution("aba"))
// console.log(solution("zz"))





// const maxNumberOfBalloons = function(text) {
//     let map = {B:0, A:0, L:0, O:0, N:0};
//     for(let char of text){
//         map[char]++
//     }
//   return Math.floor(Math.min(map["B"], map["A"], (map["L"])/2, (map["O"])/2, map["N"]))
// };

