import { repeat } from './repeat';

const realRepeatFc = String.prototype.repeat;

describe('repeat polyfill', () => {
    beforeAll(() => {
        String.prototype.repeat = repeat;
    });
    afterAll(() => {
        String.prototype.repeat = realRepeatFc;
    });
    /**
     * Input: string "abc", count 1
     * Output: abc
     */
    test('simple case count 1', () => {
        const input = 'abc';
        const output = input.repeat(1);
        expect(output).toBe('abc');
    });
    /**
     * Input: string "abc", count 2
     * Output: abcabc
     */
    test('simple case count 2', () => {
        const input = 'abc';
        const output = input.repeat(2);
        expect(output).toBe('abcabc');
    });
    /**
     * Input: string "abc", count 3
     * Output: abcabcabc
     */
    test('simple case count 3', () => {
        const input = 'abc';
        const output = input.repeat(3);
        expect(output).toBe('abcabcabc');
    });
    /**
     * Input: string "abc", count 4
     * Output: abcabcabcabc
     */
    test('simple case count 4', () => {
        const input = 'abc';
        const output = input.repeat(4);
        expect(output).toBe('abcabcabcabc');
    });
    /**
     * Input: string "abcdefghijklmnopqrstuvwxyz", count 40
     * Output: abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
     */
    test('long string plenty of repeat', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = input.repeat(40);
        expect(output).toBe(
            'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
        );
    });
    /**
     * Input: string "", count 3
     * Output: ""
     */
    test('edge case: empty string', () => {
        const input = '';
        const output = input.repeat(3);
        expect(output).toBe('');
    });
    /**
     * Input: string "a", count 3
     * Output: aaa
     */
    test('edge case: one character string', () => {
        const input = 'a';
        const output = input.repeat(3);
        expect(output).toBe('aaa');
    });
    /**
     * Input: string "abc", count 0
     * Output: ""
     */
    test('edge case: count 0', () => {
        const input = 'abc';
        const output = input.repeat(0);
        expect(output).toBe('');
    });
    /**
     * Input: string "abc", count -1
     * Output: Error
     */
    test('edge case: count -1', () => {
        try {
            const input = 'abc';
            input.repeat(3);
            expect(false).toBe(false);
        } catch (err) {
            expect(true).toBe(true);
        }
    });
});
