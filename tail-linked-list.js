class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedListWihTail {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("LinkedList is Empty")
        } else {
            let str = "";
            let temp = this.head;
            while (temp) {
                str += temp.data + " -> "
                temp = temp.next;
            }
            console.log(str);
        }
    }

    shift() {
        if (this.isEmpty()) {
            console.log("LinkedList is Empty")
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

    pop(){
        if (this.isEmpty()) {
            console.log("LinkedList is Empty")
        } else if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
         else {
            let curr = this.head;
            while (curr.next && curr.next.next) {
                curr = curr.next;
            }
            this.tail = curr
            curr.next = null;
            this.size--;
            // return value
        }
    }
}

const linklist = new LinkedListWihTail()
console.log(linklist.isEmpty())
linklist.prepend(3)
linklist.prepend(2)
linklist.append(1)
linklist.shift()
linklist.print()