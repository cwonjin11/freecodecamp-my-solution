function transform(num) {
    const str = "" + num;
    let result = 0;
    for (let i = 0; i < str.length; i++) result += +str[i];
    return result
}

var getLucky = function(s, k) {
    let result = s.split("").map(char => char.charCodeAt() - 96).join("")
    while (k--) result = transform(result)    
    return result;    
};

console.log(getLucky("iiii", 1))
console.log(getLucky("leetcode", 2))
console.log(getLucky("zbax", 2))