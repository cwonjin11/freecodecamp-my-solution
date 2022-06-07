
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(15)
const f = new Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


//DFS
const treeMinValue = (root) => {

    if(root === null) return null

    let stack = [root]
    let min = Infinity // whenver we solve finding min problems, we set min as positive Infinity. 
    while(stack.length > 0){
        let current = stack.pop()
        // min = Math.min(current.val, min)
        if(current.val < min) min = current.val

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return min
}


//Recursion
const treeMinValue1 = (root) => {

    if(root === null) return Infinity

    let leftMin = treeMinValue1(root.left)
    let rightMin = treeMinValue1(root.right)

    return Math.min(root.val, leftMin, rightMin)
}


console.log(treeMinValue(a)) //3
console.log(treeMinValue1(a)) //3