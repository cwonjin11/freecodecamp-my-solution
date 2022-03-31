const reverseLinkedList = (llist) => {

    let curr = llist
    let prev = null
    let next = null

    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev

}
