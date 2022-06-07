class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(3)
const b = new Node(9)
const c = new Node(20)
const e = new Node(15)
const f = new Node(7)


a.left = b
a.right = c
c.left = e
c.right = f




//recursion
const maxDepthBinaryTree1 = (root) => {

    //base case
    if(root === null) return 0

    return 1 + Math.max(maxDepthBinaryTree1(root.left), maxDepthBinaryTree1(root.right))
}

console.log(maxDepthBinaryTree1(a)) //3




//iterative, not the best solution
const maxDepthBinaryTree = (root) => {
    if(root === null) return 0
    
    let count = 0

    let queue = [root]

    while(queue.length > 0){
        let len = queue.length
        for(let i = 0; i < len; i++){
            let current = queue.shift()
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        count++
    }
    return count
}
console.log(maxDepthBinaryTree(a)) //3 
