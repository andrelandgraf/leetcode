import { isUnique } from './isUnique';

describe('isUnique', () => {
    /**
     * Input: "abcdefghijklmnopqrstuvwxyz"
     * Output: true
     */
    test('simple unique case', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const output = isUnique(input);
        expect(output).toBe(true);
    });
    /**
     * Input: "zyxwglmkwabcdef"
     * Output: true
     */
    test('simple non-unique case', () => {
        const input = 'zyxwglmkwabcdef';
        const output = isUnique(input);
        expect(output).toBe(false);
    });
    /**
     * Input: ""
     * Output: true
     */
    test('edge case: empty string', () => {
        const input = '';
        const output = isUnique(input);
        expect(output).toBe(true);
    });
    /**
     * Input: "L"
     * Output: true
     */
    test('edge case: one character string', () => {
        const input = 'L';
        const output = isUnique(input);
        expect(output).toBe(true);
    });
    /**
     * Input: "A6FkKs75lHqCjIac69NNSds73t0VDsRzivdc4GcTh4vMxIAR3q1mUpvZbsT6IOWhchhHAGXJRQUtCAEPz6yN33Jl6sLFzuDs6Y2n"
     * Output: false
     */
    test('complex case non-unique', () => {
        const input =
            'A6FkKs75lHqCjIac69NNSds73t0VDsRzivdc4GcTh4vMxIAR3q1mUpvZbsT6IOWhchhHAGXJRQUtCAEPz6yN33Jl6sLFzuDs6Y2n';
        const output = isUnique(input);
        expect(output).toBe(false);
    });
});
