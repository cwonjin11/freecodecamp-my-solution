
function solution(A, B) {
    // determine shorter and longer
    const [shorter, longer] = [A, B].sort((a, b) => a - b);
    
    // notice: if there's a stick that's at least 4 times as long as the next one, you could return the length of the longer one divided by 4;
    if (longer / shorter >= 4) {
        return Math.floor(longer / 4);
    }

    // if there's a stick that's at least 3 times as long as the next one, you could return the length of the shorter one.
    if (longer / shorter >= 3) {
        return Math.floor(shorter);
    }

    // if larger stick is at least 1.5 times as long as the shorter, we can divide the larger one into 3 parts and cut the excess from the shorter one.
    if (longer / shorter >= 1.5) {
        return Math.floor(longer / 3);
    }

    // Lastly, if larger is 1-1.5 times as long as the shorter,
    // Return half the length of the shorter stick.
    return Math.floor(shorter / 2);
}

console.log(solution(10,21))
// console.log(solution(13,))