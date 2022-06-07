
class Node {
   constructor(val){
      this.val = val
      this.left = null
      this.right = null
   }
}

const a = new Node(4)
const b = new Node(2)
const c = new Node(1)
const e = new Node(3)
const f = new Node(7)
const g = new Node(6)
const h = new Node(9)


a.left = b
a.right = f
b.left = c
b.right = e
f.left = g
f.right = h






// var invertTree = function(root) {
//     if (root == null) return null

//     //swap the children
//      let right = invertTree(root.right)
//      let left = invertTree(root.left)
//      root.left = right
//       root.right = left
//    return root
// };




var invertTree = function(root) {
  
   if(root === null) return []

   let result = []
   const stack = [root]
   while(stack.length > 0){
      let current = stack.pop()
      if(current){
         [current.left, current.right] = [current.right, current.left]
         result.push(current.left, current.right)
      }
   }
   return result
};

console.log(invertTree(a))
  

// // DFS
// function invertTree(root) {
//   const stack = [root];

//   while (stack.length) {
//     const n = stack.pop();
//     if (n != null) {
//       [n.left, n.right] = [n.right, n.left];
//       stack.push(n.left, n.right);
//     }
//   }

//   return root;
// }