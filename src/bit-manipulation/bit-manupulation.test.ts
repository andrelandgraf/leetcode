describe('bit manipulations', () => {
    test('& operator', () => {
        // odd numbers (except zero) have an ending 1 bit
        // even numbers (and zero) have no ending 1 bit
        expect(0 & 1).toBe(0);
        expect(1 & 1).toBe(1);
        expect(2 & 1).toBe(0);
        expect(3 & 1).toBe(1);
        expect(4 & 1).toBe(0);
        expect(533 & 1).toBe(1);
    });
    test('<< operator', () => {
        // (A << B) => A * (2 ** B) => A * Math.pow(2, B)
        // shifting to left by one bit doubles the value
        expect(0 << 1).toBe(0);
        expect(1 << 1).toBe(2);
        expect(2 << 1).toBe(4);
        expect(3 << 1).toBe(6);
        expect(4 << 1).toBe(8);
        expect(533 << 1).toBe(1066);
    });
    test('>> operator', () => {
        // (A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))
        // shifting to right by one bit halfs the value
        expect(0 >> 1).toBe(0);
        expect(1 >> 1).toBe(0);
        expect(2 >> 1).toBe(1);
        expect(3 >> 1).toBe(1);
        expect(4 >> 1).toBe(2);
        expect(533 >> 1).toBe(266);
    });
});
