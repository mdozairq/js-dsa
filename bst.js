const Queue = require("./queue.js")

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    search(root, value) {
        if (!root) {
            return false
        }
        if (root.data === value) {
            return true
        } else if (root.data > value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.data);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }

    }

    min(root) {
        if (!root.left) {
            return root.data
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.data;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(3)
console.log(bst.search(bst.root, 7))
console.log(bst.search(bst.root, 4))
//dfs
bst.preOrder(bst.root)
bst.inOrder(bst.root)
bst.postOrder(bst.root)
//bfs
bst.levelOrder(bst.root)
//minimum 
console.log("minimum:", bst.min(bst.root), "maximum: ", bst.max(bst.root))
