import { flattenDictionary } from './flattenDictionary';

describe('flattenDictionary', () => {
    /**
     * Input: { ... }
     * Output: { ... }
     */
    test('simple case', () => {
        const input = {
            Key1: '1',
            Key2: {
                a: '2',
                b: '3',
                c: {
                    d: '3',
                    e: {
                        '': '1',
                    },
                },
            },
        };
        const output = flattenDictionary(input);
        expect(output).toEqual({
            Key1: '1',
            'Key2.a': '2',
            'Key2.b': '3',
            'Key2.c.d': '3',
            'Key2.c.e': '1',
        });
    });
    /**
     * Input: {}
     * Output: {}
     */
    test('edge case: empty dictionary', () => {
        const input = {};
        const output = flattenDictionary(input);
        expect(output).toEqual({});
    });
    /**
     * Input: { "a": "1" }
     * Output: { "a": "1" }
     */
    test('edge case: single key value pair', () => {
        const input = { a: '1' };
        const output = flattenDictionary(input);
        expect(output).toEqual({ a: '1' });
    });
    /**
     * Input: { "": "1" }
     * Output: {}
     */
    test('edge case: empty key', () => {
        const input = { '': '1' };
        const output = flattenDictionary(input);
        expect(output).toEqual({ '': '1' });
    });
    /**
     * Input: { "a": { "b": { "": "1"} } }
     * Output: { "a.b": "1" }
     */
    test('edge case: nested empty key', () => {
        const input = { a: { b: { '': '1' } } };
        const output = flattenDictionary(input);
        expect(output).toEqual({ 'a.b': '1' });
    });
});
