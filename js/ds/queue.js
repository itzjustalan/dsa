class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default class Queue {
    constructor(){
        this.reset()
    }
    reset() {
        this.first = this.last = null
        this.length = 0
    }

    // add value to queue
    enque(value) {
        let _n = new Node(value)
        if(!this.first) {
            this.first = this.last = _n
        } else {
            this.last.next = _n
            this.last = _n
        }
        return ++this.length
    }

    // remove oldest value from queue
    dequeue() {
        if (!this.first) return null
        if(this.first === this.last) {
            this.last = null
        }
        let _t = this.first
        this.first = this.first.next
        this.length--
        return _t.value
    }

    pretty() {
        return JSON.parse(JSON.stringify(this))
    }

    isEmpty() {
        return this.length === 0
    }

    length() {
        return this.length
    }

    contains(value) {
        // todo
    }
}

/*
    Queue:-

    Queues work in a very similar way to stacks,
    but elements follow a different pattern for add and removal.
    Queues allow only a FIFO pattern (first in, first out).
    In queues, elements can't be added or removed out of order,
    they always have to follow the FIFO pattern.

    bigO:-

    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)
*/