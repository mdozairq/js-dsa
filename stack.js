//LIFO 


class Stack {
    constructor(size = 1){
        this.size = size;
        this.items = [];
    }

    push(item){
        return this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(index){
        return this.items[index];
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
    }

}

const stack = new Stack();
stack.push(2)
stack.push(1)
stack.push(3)
stack.pop()
stack.print()
console.log(stack.isEmpty());