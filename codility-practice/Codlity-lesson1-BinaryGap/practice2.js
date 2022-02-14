
// const arr = [3,5,7]

// function forLoop(arr) {
    
//     for (i in arr){
//         console.log(Object.keys(arr))  // returns array of given object's own enumerable property names
//         // console.log(Object.keys('foo0'))
//         console.log(Object.values(arr))
//         console.log(Object)
//         // console.log(i)
//     }

//     // for (i of arr){
//     //     console.log(i)
//     // }
// }

// forLoop(arr)

function solution(S)
{
        const one = {
          B: 1,
          A: 1,
          L: 2,
          O: 2,
          N: 1
        };
        const map = {};
        for (let i = 0; i < S.length; i++) {
            // console.log(S[i], "--")
            // console.log(one[S[i]], "<<<")
            // console.log(map[S[i]] = (map[S[i]] || 0) + 1, "***")
          if (one[S[i]]) map[S[i]] = (map[S[i]] || 0) + 1;
        //   console.log(map)
        }
        for (const key of Object.keys(one)) {
          if (!map[key]) return 0;
        }
        map['L'] = map['L'] >> 1;
        map['O'] = map['O'] >> 1;
        return Math.min(...Object.values(map));

}

console.log(solution("BAOOLLNNOLOLGBAX"))