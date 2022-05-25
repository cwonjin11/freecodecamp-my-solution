
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
 

//recursive
const invertBinaryTree = (root) => {
    if(root == null){
        return root
    }
    [root.left, root.right] = [invertBinaryTree(root.right), invertBinaryTree(root.left)]
    return root
}

// [4,2,7,1,3,6,9]  ==> [4,7,2,9,6,3,1]