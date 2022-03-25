var minimumSum = function(num) {
    let sorted = num.toString().split("").sort((a,b) => a-b)

    return Number(sorted[0] + sorted[2]) + Number(sorted[1] + sorted[3])

};