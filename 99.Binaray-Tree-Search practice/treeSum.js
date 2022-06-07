class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


//DFS
const treeSum = (root) => {
    if(root === null) return 0

    let stack = [root]
    let sum = 0
    while(stack.length > 0){
        let current = stack.pop()
        sum += current.val

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return sum
}


//BFS
const treeSum1 = (root) => {
    if(root === null) return 0

    let queue = [root]
    let sum = 0
    while(queue.length > 0){
        let current = queue.shift()
        sum += current.val

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return sum
}


//Recursion
const treeSum2 = (root) => {

    if(root === null) return 0

    return root.val + treeSum2(root.left) + treeSum2(root.right)

}

console.log(treeSum(a)) // 25
console.log(treeSum1(a)) // 25
console.log(treeSum2(a)) // 25