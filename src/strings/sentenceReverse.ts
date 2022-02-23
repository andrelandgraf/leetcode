/**
 * Reverts part of an array including start and end indexes
 * Time complexity: O((end-start)/2)
 * Space complexity: O(1)
 */
function revertInPlace(arr: Array<string>, start: number, end: number) {
    if (start >= end || start < 0 || end >= arr.length) return arr;
    let left = start;
    let right = end;
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left += 1;
        right -= 1;
    }
}

/**
 * Reverts order of words in sentence
 * Time complexity: O(N^2) for worst case: only one big word, so we have to reverse array twice
 * Space complexity: O(1)
 */
function reverseWords(arr: Array<string>) {
    if (!arr) return [];
    // Revert whole array => Time complexity: O(N/2) => O(N)
    revertInPlace(arr, 0, arr.length - 1);
    // Revert each word individually => Time complexity: O(N*N/2) => O(N^2)
    let wordStart = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (i + 1 === arr.length || arr[i + 1] === ' ') {
            revertInPlace(arr, wordStart, i);
            wordStart = i + 2;
        }
    }

    return arr;
}

export { reverseWords };
