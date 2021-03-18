class MinHeap {
    heap: number[] = [];

    constructor(array?: number[]) {
        if (array) {
            this.heap = array;
            if (array.length <= 1) {
                return;
            }
            const lastLeafI = array.length - 1;
            const lastLeafParentI = this.getParentIndex(lastLeafI);
            const firstLeafI = lastLeafParentI + 1;
            for (let i = lastLeafI; i >= firstLeafI; i -= 1) {
                this.recursiveSortHelper(i);
            }
        }
    }

    getMin() {
        if (!this.heap.length) {
            return undefined;
        }
        return this.heap[0];
    }

    removeMin() {
        const lastLeafVal = this.heap.pop();
        if (!this.heap.length || !lastLeafVal) {
            return lastLeafVal;
        }
        const minVal = this.heap[0];
        this.heap[0] = lastLeafVal;
        this.swiftDown(0);
        return minVal;
    }

    push(...values: number[]) {
        values.forEach((value) => {
            const length = this.heap.push(value);
            this.swiftUp(length - 1);
        });
    }

    private getParentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(parentIndex: number) {
        return 2 * parentIndex + 1;
    }

    private getRightChildIndex(parentIndex: number) {
        return 2 * parentIndex + 2;
    }

    private swap(i: number, j: number) {
        const swapVal = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = swapVal;
    }

    private swiftDown(index: number) {
        if (index >= this.heap.length) {
            return;
        }
        const leftChildI = this.getLeftChildIndex(index);
        const rightChildI = this.getRightChildIndex(index);
        if (leftChildI < this.heap.length && this.heap[index] > this.heap[leftChildI]) {
            this.swap(index, leftChildI);
            this.swiftDown(leftChildI);
            this.swiftDown(index);
        } else if (rightChildI < this.heap.length && this.heap[index] > this.heap[rightChildI]) {
            this.swap(index, rightChildI);
            this.swiftDown(rightChildI);
            this.swiftDown(index);
        }
    }

    private swiftUp(index: number) {
        if (index <= 0) {
            return;
        }
        const parentI = this.getParentIndex(index);
        if (parentI >= 0 && this.heap[parentI] > this.heap[index]) {
            this.swap(parentI, index);
            this.swiftUp(parentI);
            this.swiftDown(index);
        }
    }

    private recursiveSortHelper(index: number) {
        if (index <= 0) {
            return;
        }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
        }
        this.recursiveSortHelper(parentIndex);
        this.swiftDown(parentIndex);
    }
}

export default MinHeap;
