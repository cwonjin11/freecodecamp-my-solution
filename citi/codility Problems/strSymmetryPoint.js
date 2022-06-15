function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
     if (S.length % 2 === 0) {
        return -1;
    } else {
        let midpoint = Math.floor(S.length / 2);
        let left = S.substr(0, midpoint); //start,end ; end not included
        let right = S.substr(midpoint + 1);  /// check this line again 
        console.log(right)
        right = right.split("").reverse().join("");
        console.log(right)
        if (left === right) {
            return midpoint;
        } else {
            return -1;
        }
    }
}
console.log(solution("racecar")) // 3
console.log(solution("abcdeeedcba")) // 5