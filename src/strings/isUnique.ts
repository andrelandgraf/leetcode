/*
  Exercise: Implement an algorithm to determine if a string has all unique characters.
  What if you cannot use additional data structures?
*/

/**
 * => Best combination of space & time complexity
 * Uses look-up table
 * Time complexity: O(N) with N = str.length
 * Space complexity: most likely O(1) as
 *     O(M) with M is number of different possible characters
 *     Unicode table has constant known number of characters => O(1)
 */
function isUniqueLookupTable(str: string): boolean {
    const table: Record<string, boolean> = {};
    // Time complexity of O(N)
    for (let i = 0; i < str.length; i += 1) {
        const char = str[i];
        if (table[char]) {
            return false; // return immediately
        }
        table[char] = true;
    }
    return true;
}

/**
 * => Worst space complexity, good time complexity
 * Uses sorted string
 * Time complexity: O(N) as O(N + N + logN) => O(N)
 * Space complexity: O(N)
 */
function isUniqueSortedString(str: string): boolean {
    const strArray = Array.from(str); // Time & space complexity of O(N)
    const sortedArray = strArray.sort(); // Time complexity of O(logN)
    // Time complexity of O(N)
    for (let i = 0; i < sortedArray.length - 1; i += 1) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            return false; // return immediately
        }
    }
    return true;
}

/**
 * Helper function for isUniqueBruteForce
 */
function isCharUnique(charIndex: number, str: string) {
    // Time complexity of O(N)
    for (let i = 0; i < str.length; i += 1) {
        if (i !== charIndex && str[i] === str[charIndex]) {
            return false;
        }
    }
    return true;
}

/**
 * => Best space, worst time complexity
 * Uses no additional datastructures
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */
function isUniqueBruteForce(str: string): boolean {
    // Time complexity of O(N)
    for (let i = 0; i < str.length; i += 1) {
        if (!isCharUnique(i, str)) {
            return false;
        }
    }
    return true;
}

function isUnique(str: string): boolean {
    return isUniqueLookupTable(str);
}

export { isUnique };
