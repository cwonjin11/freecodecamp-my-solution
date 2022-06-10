
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node("1")
const b = new Node("2")
const c = new Node("2")
const d = new Node("1")

a.next = b
b.next = c
c.next = d


// convert to arr and check palindrome
const isPalindrome = (head) => {
   
    let arr = []
    let curr = head
    while(curr !== null){
        arr.push(curr.val)
        curr = curr.next
    }
    
    let left = 0, right = arr.length - 1
    while(left < right){
        if(arr[left] !== arr[right]){
            return false
        } else {
            left++
            right--
        }
    }

    return true

}

console.log(isPalindrome(a))



// use reverse linked list funtion with slow, fast pointers

const reverse = (head) => {
    let curr = head
    let prev = null
    while(curr){
        let tempNext = curr.next
        curr.next = prev
        prev = curr
        curr = tempNext
    }
    return prev
}

const isPalindrome1 = (head) => {

    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let half = reverse(slow)
    while(half){
        if(head.val !== half.val){
            return false
        }
        head = head.next
        half = half.next
    }
    return true
} 


console.log(isPalindrome1(a))