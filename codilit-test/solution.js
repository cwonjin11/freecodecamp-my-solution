
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
        //create variable map has an empty hash
        const map = {};
        //loop through each characters to see if the letter exist from variable one
        for (let i = 0; i < S.length; i++) {
          if (one[S[i]])
        //   console.log(one[S[i]], '<<<')
        //   console.log(S[i], '<<<<')
        // if exists, add to map hash, add 1 if already the letter exist
          map[S[i]] = (map[S[i]] || 0) + 1
          console.log(map, "first map")
        //   { B: 1 }
        //   { B: 1, A: 1 }
        //   { B: 1, A: 1, O: 1 }
        //   { B: 1, A: 1, O: 2 }
        //   { B: 1, A: 1, O: 2, L: 1 }
        //   { B: 1, A: 1, O: 2, L: 2 }
        //   { B: 1, A: 1, O: 2, L: 2, N: 1 }
        //   { B: 1, A: 1, O: 2, L: 2, N: 2 }
        //   { B: 1, A: 1, O: 3, L: 2, N: 2 }
        //   { B: 1, A: 1, O: 3, L: 3, N: 2 }
        //   { B: 1, A: 1, O: 4, L: 3, N: 2 }
        //   { B: 1, A: 1, O: 4, L: 4, N: 2 }
        //   { B: 1, A: 1, O: 4, L: 4, N: 2 }
        //   { B: 2, A: 1, O: 4, L: 4, N: 2 }
        //   { B: 2, A: 2, O: 4, L: 4, N: 2 }
        //   { B: 2, A: 2, O: 4, L: 4, N: 2 }
        //   { B: 3, A: 2, O: 4, L: 4, N: 2 }
        //   { B: 3, A: 3, O: 4, L: 4, N: 2 }
        //   { B: 3, A: 3, O: 5, L: 4, N: 2 }
        //   { B: 3, A: 3, O: 6, L: 4, N: 2 }
        //   { B: 3, A: 3, O: 6, L: 5, N: 2 }
        //   { B: 3, A: 3, O: 6, L: 6, N: 2 }
        //   { B: 3, A: 3, O: 6, L: 6, N: 3 }
        //   { B: 3, A: 3, O: 6, L: 6, N: 4 }
        //   { B: 3, A: 3, O: 7, L: 6, N: 4 }
        //   { B: 3, A: 3, O: 7, L: 7, N: 4 }
        //   { B: 3, A: 3, O: 8, L: 7, N: 4 }
        //   { B: 3, A: 3, O: 8, L: 8, N: 4 }
        //   { B: 3, A: 3, O: 8, L: 8, N: 4 }
        //   { B: 4, A: 3, O: 8, L: 8, N: 4 }
        //   { B: 4, A: 4, O: 8, L: 8, N: 4 }
        //   { B: 4, A: 4, O: 8, L: 8, N: 4 }
        //   { B: 4, A: 4, O: 4, L: 4, N: 4 }
        }
        for (const key of Object.keys(one)) {
            // console.log(key)
            // console.log(Object.keys(one))
          if (!map[key]) return 0;
        //   console.log(map[key])
        }
        //bitwise : shift to right
        // to change L and O 
        map['L'] = map['L'] >> 1;
        // console.log(map['L'], ".,.,.")
        // console.log(map['L'] >> 1, "map['L']>>1")
        map['O'] = map['O'] >> 1;
        console.log(map, "final map")
        // console.log(Math.min(...Object.values(map)))
        return Math.min(...Object.values(map));
}

console.log(solution("BAOOLLNNOLOLGBAXBAOOLLNNOLLGBAX"))
// console.log(solution("QAWABAWONLQAWABAWONL"))
// console.log(solution("BAOOLLNNOLOLGBAX"))
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