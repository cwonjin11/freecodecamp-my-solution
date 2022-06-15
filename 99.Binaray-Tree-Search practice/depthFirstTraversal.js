


// Depth first travelsal algorith : Stack

class Node{
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
*/


const dfs = (root) => {

    if(root === null) return []

    let stack = [root]
    let result = []
    while(stack.length > 0){
        const current = stack.pop()
        result.push(current.val)

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return result

}
// console.log(dfs(a))


const dfs1 = (root) => {

    if(root === null) return []

    let leftSide = dfs1(root.left)
    let rightSide = dfs1(root.right)

    return [root.val, ...leftSide, ...rightSide]
}
console.log(dfs1(a)) // ['a', 'b', 'd', 'e', 'c', 'f' ]