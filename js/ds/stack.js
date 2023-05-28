class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default class Stack {
    constructor(){
        this.reset()
    }

    reset() {
        this.last = null
        this.length = 0
    }

    // add new value and return length
    push(value) {
        let _n = new Node(value)
        _n.next = this.last
        this.last = _n
        this.length++
        return value
    }

    // return most recently added value
    pop() {
        if(!this.last) return null
        let _t = this.last
        this.last = this.last.next
        this.length--
        return _t.value
    }

    pretty() {
        return JSON.parse(JSON.stringify(this))
    }
    
    description = `
Stacks are a data structure that store information in the form of a list.
They allow only adding and removing elements under a LIFO pattern (last in, first out).
In stacks, elements can't be added or removed out of order, they always have to follow the LIFO pattern.

bigO:-

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
        `
}
