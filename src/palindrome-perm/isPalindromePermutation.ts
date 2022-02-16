/**
 *  Time complexity of O(N)
 *  Space complexity of O(N+N) => O(N) since we copy the string first into formattedStr and then sortedStrArr.
 *  The space complexity can be avoided if we want to make those checks in place (decreases code readability).
 */
function isPalindromePermutation(str: string) {
    if (!str || str.length === 1) return true;

    const formattedStr = str.toLowerCase().replace(/[^a-zA-Z_]/g, ''); // O(N+N) => O(N)
    const sortedStrArr = Array.from(formattedStr).sort(); // O(logN)

    let oneSum = false;
    let count = 0;
    let currentCharacter = sortedStrArr[0];
    /*
     * Worst case: O(N)
     */
    for (const char of sortedStrArr) {
        if (char !== currentCharacter) {
            if (count % 2 !== 0) {
                if (!oneSum) {
                    oneSum = true;
                } else {
                    return false;
                }
            }
            count = 0;
            currentCharacter = char;
        }
        count += 1;
    }
    return true;
}

export { isPalindromePermutation };
