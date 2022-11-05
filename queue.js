class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    push(element) {
        this.items[this.rear++] = element;
    }
    pop() {
        delete this.items[this.front++];
    }
    peek() {
        if (this.empty()) return null;
        return this.items[this.front];
    }
    empty() {
        return this.rear - this.front === 0;
    }
    size() {
        return this.items.size;
    }
}

const q = new Queue();
q.push(5);
q.push(6);
q.push(10);
console.log(q.peek());
q.pop();
q.pop();
q.pop();
console.log(q.peek());
console.log(q.empty());
