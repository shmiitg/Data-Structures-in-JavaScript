// application: call stack in js runtime
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop(element) {
        this.items.pop();
    }
    top() {
        return this.items.slice(-1);
    }
    empty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        return this.items.toString();
    }
}

const stk = new Stack();
stk.push(3);
stk.push(4);
stk.push(5);
console.log(stk.top());
console.log(!stk.empty());
console.log(stk.size());
console.log(stk.print());
stk.pop();
console.log(stk.print());
