import { reverseWords } from './sentenceReverse';

describe('sentenceReverse', () => {
    /**
     * Input: "dogs cats"
     * Output: "cats dogs"
     */
    test('simple case two words', () => {
        const input = 'dogs cats'.split('');
        const output = reverseWords(input);
        expect(output).toEqual('cats dogs'.split(''));
    });
    /**
     * Input: "practice makes perfect"
     * Output: "perfect makes practice"
     */
    test('simple case three words', () => {
        const input = 'practice makes perfect'.split('');
        const output = reverseWords(input);
        expect(output).toEqual('perfect makes practice'.split(''));
    });
    /**
     * Input: "symphony"
     * Output: "symphony"
     */
    test('edge case: one word', () => {
        const input = 'symphony'.split('');
        const output = reverseWords(input);
        expect(output).toEqual('symphony'.split(''));
    });
    /**
     * Input: ""
     * Output: ""
     */
    test('edge case: empty array', () => {
        const input: Array<string> = [];
        const output = reverseWords(input);
        expect(output).toEqual([]);
    });
    /**
     * Input: " "
     * Output: " "
     */
    test('edge case: one space', () => {
        const input: Array<string> = [' '];
        const output = reverseWords(input);
        expect(output).toEqual([' ']);
    });
    /**
     * Input: "cats  dogs"
     * Output: "dogs  cats"
     */
    test('edge case: two spaces', () => {
        const input = 'cats  dogs'.split('');
        const output = reverseWords(input);
        expect(output).toEqual('dogs  cats'.split(''));
    });
});
