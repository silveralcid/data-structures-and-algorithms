class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Get element at index
    get(index) {
        return this.data[index];
    }

    // Add element to end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Remove last element
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--
        return lastItem;
    }

    // Delete element at index and shift elements
    delete(index) {
        if (index >= this.length) return undefined;
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    // Shift items to left after deletion
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[1 + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

function testMyArray() {
    const arr = new MyArray();
    console.log('PUSHING ELEMENTS: ', arr.push(10), arr.push(20), arr.push(30));
    console.log('CURRENT ARRAY: ', arr);
    console.log('GET ELEMENT AT INDEX 1: ', arr.get(1));
    console.log('POPPED ELEMENT:', arr.pop());
    console.log('CURRENT ARRAY AFTER POP:', arr);
    console.log('DELETE ELEMENT AT INDEX 0: ', arr.delete(0));
    console.log('CURRENT ARRAY AFTER DELETE:', arr)
} 

testMyArray();