import MinStack from './MinStack';

describe('min stack', () => {
    test('simple push pop top getMin', () => {
        const stack = new MinStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        const top = stack.top();
        expect(top).toBe(stack.top());
        expect(top).toBe(3);
        expect(stack.getMin()).toBe(1);
        stack.pop();
        stack.pop();
        expect(stack.getMin()).toBe(1);
        expect(stack.top()).toBe(1);
        stack.push(0);
        expect(stack.getMin()).toBe(0);
        expect(stack.top()).toBe(0);
    });
    test('lots of numbers', () => {
        const stack = new MinStack();
        for (let i = 0; i < 2000; i += 1) {
            stack.push(i);
        }
        expect(stack.getMin()).toBe(0);
    });
    test('edge case empty stack', () => {
        const stack = new MinStack();
        expect(stack.getMin()).toBeUndefined();
        expect(stack.top()).toBeUndefined();
        try {
            stack.pop();
            expect(true).toBe(true);
        } catch (err) {
            expect(true).toBe(false);
        }
    });
});
