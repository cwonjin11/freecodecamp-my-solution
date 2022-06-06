




var invertTree = function(root) {
    if (root == null) return null

    //swap the children
     let right = invertTree(root.right)
     let left = invertTree(root.left)
     root.left = right
      root.right = left
   return root
};
  