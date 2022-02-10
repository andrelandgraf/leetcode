import { checkPermutation } from './checkPermutation';

describe('isUnique', () => {
    /**
     * Input: "abcdefg", "abcdefg"
     * Output: true
     */
    test('simple case same string', () => {
        const str1 = 'abcdefg';
        const str2 = 'abcdefg';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(true);
    });
    /**
     * Input: "a nice little string", "little nice a string"
     * Output: true
     */
    test('simple case a permutation', () => {
        const str1 = 'a nice little string';
        const str2 = 'little nice a string';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(true);
    });
    /**
     * Input: "a nice little string", "little nice x string"
     * Output: true
     */
    test('simple case not a permutation', () => {
        const str1 = 'a nice little string';
        const str2 = 'little nice x string';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(false);
    });
    /**
     * Input: "", ""
     * Output: true
     */
    test('edge case: empty strings', () => {
        const str1 = '';
        const str2 = '';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(true);
    });
    /**
     * Input: "a", "x"
     * Output: false
     */
    test('edge case: one character per string', () => {
        const str1 = 'a';
        const str2 = 'x';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(false);
    });
    /**
     * Input: "a", "xx"
     * Output: false
     */
    test('edge case: not same size', () => {
        const str1 = 'a';
        const str2 = 'xx';
        const output = checkPermutation(str1, str2);
        expect(output).toBe(false);
    });
});
