/**
 * Brute force worse-case would be O(N^2) for array of all zeros
 * With sliding window:
 *    Time complexity: O(N)
 *    Space complexity: O(1)
 */
function moveZerosToEnd(arr: Array<number>) {
    if (!arr || !arr.length) return arr;
    let firstZero = 0;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[firstZero] !== 0) {
            firstZero += 1;
        } else if (arr[i] !== 0) {
            arr[firstZero] = arr[i];
            arr[i] = 0;
            firstZero += 1;
        }
    }
    return arr;
}

export { moveZerosToEnd };
