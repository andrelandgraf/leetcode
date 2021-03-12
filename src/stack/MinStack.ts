export default class MinStack {
    stack: number[];
    currentMin: number | undefined;
    constructor() {
        this.stack = [];
        this.currentMin = undefined;
    }

    push(x: number): void {
        this.stack.push(x);
        // check for undefined specifically to avoid false positive test for 0
        if (this.currentMin === undefined || this.currentMin > x) {
            this.currentMin = x;
        }
    }

    pop(): void {
        const element = this.stack.pop();
        if (!this.stack.length) {
            this.currentMin = undefined;
        } else if (element === this.currentMin) {
            // this way we only have to run search for min if last min is removed
            this.currentMin = Math.min(...this.stack);
        }
    }

    top(): number | undefined {
        if (!this.stack.length) {
            return undefined;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin(): number | undefined {
        return this.currentMin;
    }
}
