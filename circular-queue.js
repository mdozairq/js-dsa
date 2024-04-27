class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currLength = 0;
        this.front = -1;
        this.rear = -1;
    }


    isFull() {
        return this.capacity === this.currLength
    }

    isEmpty() {
        return this.currLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element
            this.currLength++
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = this.front + 1
        this.currLength -= 1
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }

    peek(){
        if (!this.isEmpty()) {
            return this.items[this.front]
        }

        return null
    }

    size() {
        return this.rear - this.front
    }

    print() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
        } 
        let i
        let str = ''

        for(i = this.front; i!==this.rear; i = (i+1) % this.capacity){
            str += this.items[i] + " "
        }
        str+= this.items[i]
        console.log(str);
    }
}

const queue = new CircularQueue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.peek())
queue.dequeue()
console.log(queue.peek())
queue.print()
