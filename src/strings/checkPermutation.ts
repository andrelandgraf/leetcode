/*
    Given two strings, write a method to decide if one is a permutation of the other
 */
function initChar(table: Record<string, number>, char: string) {
    if (!table[char]) {
        table[char] = 0;
    }
}

/**
 * Time complexity: O(N + M) => O(N) where
 *  N = str1.length = str2.length and
 *  M = number of possible characters, e.g. unicode +100,000, but known constant => O(1)
 * Space complexity: O(M) => O(1)
 */
function checkPermutation(str1: string, str2: string) {
    if (str1.length !== str2.length) {
        return false;
    }
    const table: Record<string, number> = {};
    for (let i = 0; i < str1.length; i += 1) {
        const char1 = str1[i];
        const char2 = str2[i];
        initChar(table, char1);
        initChar(table, char2);
        table[char1] += 1;
        table[char2] -= 1;
    }
    return !Object.values(table).find((v) => v !== 0);
}

export { checkPermutation };
