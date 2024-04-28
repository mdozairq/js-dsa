class Queue {
    constructor(){
        this.items = {};
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    size(){
        return this.rear - this.front 
    }

    print(){
        console.log(this.items);
    }

    peek(){
        return this.items[this.front]
    }

}

// const queue = new Queue()
// console.log(queue.size())
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.size())
// queue.print()
// queue.dequeue()
// queue.print()

module.exports = Queue