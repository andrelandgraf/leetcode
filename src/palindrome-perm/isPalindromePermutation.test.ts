import { isPalindromePermutation } from './isPalindromePermutation';

describe('is palindrome permutation', () => {
    /*
     * Input: "Tact Coa"
     * Output: true
     */
    test('simple uneven length palindrome permutation', async () => {
        const input = 'Tact Coa';
        const output = isPalindromePermutation(input);
        expect(output).toBe(true);
    });
    /*
     * Input: "Anna"
     * Output: true
     */
    test('simple even length palindrome permutation', async () => {
        const input = 'Anna';
        const output = isPalindromePermutation(input);
        expect(output).toBe(true);
    });
    /*
     * Input: "Xavier "
     * Output: false
     */
    test('simple no palindrome permutation', async () => {
        const input = 'Xavier66';
        const output = isPalindromePermutation(input);
        expect(output).toBe(false);
    });
    /*
     * Input: ""
     * Output: true
     */
    test('edge case empty string', async () => {
        const input = '';
        const output = isPalindromePermutation(input);
        expect(output).toBe(true);
    });
    /*
     * Input: "Z"
     * Output: true
     */
    test('edge case one character string', async () => {
        const input = 'Z';
        const output = isPalindromePermutation(input);
        expect(output).toBe(true);
    });
});
