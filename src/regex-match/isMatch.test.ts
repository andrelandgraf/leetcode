import isMatch from './isMatch';

/**
 * '.' Matches any single character.​​​​
 * '*' Matches zero or more of the preceding element.
 */
describe('regular expression matching with * and .', () => {
    /**
     * Input: s = "aa", p = "a"
     * Output: false
     */
    test('aa does not match a', () => {
        const string = 'aa';
        const expression = 'a';
        expect(isMatch(string, expression)).toBe(false);
    });
    /**
     * Input: s = "aa", p = "a*"
     * Output: true
     */
    test('aa does match a*', () => {
        const string = 'aa';
        const expression = 'a*';
        expect(isMatch(string, expression)).toBe(true);
    });
    /**
     * Input: s = "ab", p = ".*"
     * Output: true
     */
    test('ab does match .*', () => {
        const string = 'ab';
        const expression = '.*';
        expect(isMatch(string, expression)).toBe(true);
    });
    /**
     * Input: s = "aab", p = "c*a*b"
     * Output: true
     */
    test('aab does match c*a*b', () => {
        const string = 'aab';
        const expression = 'c*a*b';
        expect(isMatch(string, expression)).toBe(true);
    });
    /**
     * Input: s = "mississippi", p = "mis*is*p*."
     * Output: false
     */
    test('mississippi does not match mis*is*p*.', () => {
        const string = 'mississippi';
        const expression = 'mis*is*p*.';
        expect(isMatch(string, expression)).toBe(false);
    });
    /**
     * Input: s = "a", p = "ab*a"
     * Output: false
     */
    test('a does not match ab*a', () => {
        const string = 'a';
        const expression = 'ab*a';
        expect(isMatch(string, expression)).toBe(false);
    });
    /**
     * Input: s = "aaa", p = "ab*a"
     * Output: false
     */
    test('a does not match ab*a', () => {
        const string = 'aaa';
        const expression = 'ab*a';
        expect(isMatch(string, expression)).toBe(false);
    });
    /**
     * Input: s = "big bang theory", p = "b.*g.*b.*g.*theory"
     * Output: true
     */
    test('a does not match ab*a', () => {
        const string = 'big bang theory';
        const expression = 'b.*g.*b.*g.*theory';
        expect(isMatch(string, expression)).toBe(true);
    });
});
