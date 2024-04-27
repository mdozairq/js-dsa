const {LinkedList} = require("./linked-list")

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        this.list.remove(0);
    }

    peek(){
        return this.list.head.data
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        this.list.print()
    }
}


const stackLinkedList = new LinkedListQueue();
console.log(stackLinkedList.isEmpty());
stackLinkedList.enqueue(1)
stackLinkedList.enqueue(2)
stackLinkedList.enqueue(3)
stackLinkedList.print()
stackLinkedList.dequeue()
stackLinkedList.print()
console.log(stackLinkedList.getSize());