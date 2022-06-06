function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
     if (S.length % 2 === 0) {
        return -1;
    } else {
        let midpoint = Math.floor(S.length / 2);
        let left = S.substr(0, midpoint);
        let right = S.substr(midpoint + 1, midpoint);
        right = right.split("").reverse().join("");
        if (left === right) {
            return midpoint;
        } else {
            return -1;
        }
    }
}
console.log(solution("racecar")) // 3