const {LinkedList} = require("./linked-list")

class LinkedListStack {
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.append(value);
    }

    pop(){
        this.list.pop();
    }

    peek(){
        
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


const stackLinkedList = new LinkedListStack();
console.log(stackLinkedList.isEmpty());
stackLinkedList.push(1)
stackLinkedList.push(2)
stackLinkedList.push(3)
stackLinkedList.print()
stackLinkedList.pop()
stackLinkedList.print()
console.log(stackLinkedList.getSize());