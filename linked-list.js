class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }

            temp.next = newNode
            // this.head = temp;
        }
        this.size++;
    }

    insert(index, value) {
        if (index < 0 || index >= this.size) {
            return
        }
        else if (index == 0) {
            this.prepend(value)
        }
        else if (index == this.size - 1) {
            this.append(value)
        } else {
            const newNode = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }
    }

    remove(index) {
        let temp
        if (index < 0 || index >= this.size) {
            return
        }
        else if (index == 0) {
            temp = this.head.next
            this.head = temp
            this.size--;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            temp = prev.next;
            prev.next = temp.next;
            this.size--;
        }
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

    pop() {
        if (this.isEmpty()) {
            console.log("LinkedList is Empty")
        } else {
            let curr = this.head;
            while (curr.next && curr.next.next) {
                curr = curr.next;
            }
            curr.next = null;
            this.size--;
        }
    }

    removeValue(value) {
        let temp;
        if (this.isEmpty()) {
            console.log("LinkedList is Empty")
        }
        else if (this.head.data === value) {
            this.head = this.head.next
            this.size--;
        }
        else {
            let prev = this.head;
            while (prev.next !== null && value !== prev.next.data) {
                prev = prev.next;
            }
            temp = prev.next;
            prev.next = temp && temp.next ? temp.next : null;
            this.size--;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let temp = null;
        while (curr !== null) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        this.head = prev;
    }

    search(value){
        let temp;
        if (this.isEmpty()) {
            return -1
        }
        else if (this.head.data === value) {
            return 0
        }
        else {
            let i = 0
            let prev = this.head;
            while (prev !== null ) {
                if(prev.data === value)
                    return i;
                prev = prev.next;
                i++
            }
            return -1
        }
    }
}


// const linklist = new LinkedList()
// console.log(linklist.isEmpty())
// linklist.prepend(3)
// linklist.prepend(2)
// linklist.prepend(1)
// linklist.append(4)
// linklist.prepend(0)
// linklist.prepend(-1)
// linklist.append(5)
// linklist.print()
// linklist.insert(6, 8)
// linklist.remove(4)
// linklist.removeValue(4)
// linklist.reverse()
// console.log(linklist.search(4))
// linklist.print()
// console.log(linklist.getSize())

module.exports = { LinkedList}


