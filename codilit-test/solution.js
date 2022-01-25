
function solution(S)
{
    //object variable called 'one' that letter balloon as keys and value as number of the letter
        const one = {
          B: 1,
          A: 1,
          L: 2,
          O: 2,
          N: 1
        };
        const map = {};
        for (let i = 0; i < S.length; i++) {
          if (one[S[i]])
              map[S[i]] = (map[S[i]] || 0) + 1
        }
        for (const key of Object.keys(one)) {
          if (!map[key]) return 0;
        }
        map['L'] = map['L'] >> 1;
        map['O'] = map['O'] >> 1;
        return Math.min(...Object.values(map));

}

console.log(solution("BAOOLLNNOLOLGBAX"))
console.log(solution("QAWABAWONL"))
// console.log(solution("aba"))
// console.log(solution("zz"))



    // let result = new Set();
     
    // for(let i = 0; i <= S.length - 1; i++)
    // {
    //     let currentChar = S[i];
 
    //     if (result.has(currentChar))
    //         return currentChar;
             
    //     else
    //     result.add(currentChar);
    // }
    // return result;