class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }
    empty() {
        return this.currentLength === 0;
    }
    full() {
        return this.currentLength === this.size;
    }
    push(element) {
        if (this.full()) {
            console.log("Full");
            return;
        }
        //insert for the first time
        if (this.front === -1) {
            this.rear = 0;
            this.front = 0;
            this.items[this.rear] = element;
        } else {
            this.rear++;
            this.rear %= this.size;
            this.items[this.rear] = element;
        }
        this.currentLength++;
    }
    top() {
        if (this.empty()) {
            console.table("Queue empty");
            return;
        }
        console.log("Front: ", this.items[this.rear]);
    }
    pop() {
        if (this.empty()) {
            console.log("Queue empty");
            return;
        }
        console.log("Rear: ", this.items[this.front]);
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
            this.front %= this.size;
        }
        this.currentLength--;
    }
}

const cq = new CircularQueue(5);
cq.push(2);
cq.push(3);
cq.push(4);
cq.push(5);
cq.pop();
cq.push(6);
cq.push(7);
cq.push(8);
cq.top();
cq.pop();
cq.pop();
cq.push(10);
cq.push(11);
cq.push(12);
cq.top();
cq.pop();
cq.pop();
cq.pop();
cq.pop();
cq.pop();
cq.pop();
