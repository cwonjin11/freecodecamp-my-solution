function inOrder(root) { 
    let nodes = []
    if(root){
        inOrder(root.left)
        inOrder(root.right)
        nodes.push(root.val)
    }
    return nodes

 } 

 console.log(inOrder([1,null,2,3]))