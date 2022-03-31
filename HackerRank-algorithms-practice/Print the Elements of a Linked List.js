

function printLinkedList(head) {
    
    let curr = head
    while(curr){
        console.log(curr.data)
        curr = curr.next
    }

}