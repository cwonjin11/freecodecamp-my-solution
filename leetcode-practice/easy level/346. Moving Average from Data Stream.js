/**
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.size = size
    this.queue = []
};
console.log(MovingAverage(3))
/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    while(this.queue.length > this.size) this.queue.shift()
    return this.queue.reduce((a,b) => {
        return a + b
    }) / Math.min(this.size, this.queue.length)
};

// console.log(new MovingAverage(3).next(1))


// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3