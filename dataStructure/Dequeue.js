class QueueNode {
    value;
    prev;
    next;
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class Dequeue {
    size;
    front;
    back;
    constructor() {
        this.size = 0;
        this.front = new QueueNode(null);
        this.back = new QueueNode(null);
        this.front.next = this.back;
        this.back.prev = this.front;
    }

    size() {
        return this.size;
    }

    addFront(value) {
        this.size++;
        const newNode = new QueueNode(value, this.front, this.front.next);
        this.front.next.prev = newNode;
        this.front.next = newNode;
    }
    removeFront() {
        if (this.size === 0) return null;
        this.size--;
        const value = this.front.next.value;
        this.front.next.next.prev = this.front;
        this.front.next = this.front.next.next;
        return value;
    }
    addBack(value) {
        this.size++;
        const newNode = new QueueNode(value, this.back.prev, this.back);
        this.back.prev.next = newNode;
        this.back.prev = newNode;
    }
    removeBack() {
        if (this.size === 0) return null;
        this.size--;
        const value = this.back.prev.value;
        this.back.prev.prev.next = this.back;
        this.back.prev = this.back.prev.prev;
        return value;
    }
}

const dequeue = new Dequeue();
dequeue.addFront(1);
dequeue.addFront(2);
dequeue.addBack(3);
dequeue.addBack(4);
console.log(dequeue);
console.log(dequeue.removeFront()); // 2
console.log(dequeue.removeBack()); // 4
console.log(dequeue.size); // 2
console.log(dequeue.removeFront()); // 1
