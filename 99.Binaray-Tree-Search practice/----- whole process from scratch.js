class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/*
        a
       / \
      b   c
     / \   \
    d   e    f

    a -> b -> d -> e -> c -> f
 */  


//iterative
var preorderTraversal = function(root) {
    if(root === null) return []  // base edge case
    
    let result = []
    let stack = [root]  // [[1, null, 2, 3]]
    while(stack.length > 0){
        let current = stack.pop()
        result.push(current.val)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)

    }
    return result
};
console.log(preorderTraversal(a)) //a -> b -> d -> e -> c -> f


// recursively
var preorderTraversal1 = function(root) {

    if(root === null) return []

    let leftValues = preorderTraversal1(root.left)
    let rightValues = preorderTraversal1(root.right)
    return [root.val, ...leftValues, ...rightValues]

};
 
console.log(preorderTraversal1(a)) //a -> b -> d -> e -> c -> f