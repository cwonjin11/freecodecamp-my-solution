
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// refer to the link above. refer to "Use a Stack" 

const steamrollArray= (arr) => {
    const stack = [...arr];
    // console.log(stack.length)
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      console.log(next)
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // // reverse to restore input order
    return res.reverse();
}
  


console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([[["a"]], [["b"]]])) //should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) //should return [1, {}, 3, 4].