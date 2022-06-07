
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

//iterative
const treeIncludes = (root, target) => {

    if(root === null) return false

    let queue = [root]

    while(queue.length > 0){
        let current = queue.shift()
        if(current.val == target) return true

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return false
}

//recursive
const treeIncludes1 = (root, target) => {

    if(root === null) return false
    if(root.val === target) return true // additional base case 

    return treeIncludes1(root.left, target) || treeIncludes1(root.right, target)

}

console.log(treeIncludes1(a, "e"))
console.log(treeIncludes1(a, "j"))