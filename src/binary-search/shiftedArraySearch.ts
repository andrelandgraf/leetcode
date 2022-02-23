/**
 * Binary search from start to end (inclusive)
 * Time complexity: O(logN) where N = end - start
 * Space complexity: O(1)
 */
function binarySearch(arr: Array<number>, num: number, start: number, end: number): number {
    if (start > end || start < 0 || end >= arr.length) return -1;
    let left = start;
    let right = end;
    while (left <= right) {
        const index = left + Math.floor((right - left) / 2);
        if (arr[index] === num) {
            return index;
        }
        if (arr[index] < num) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
    return -1;
}

/**
 * Binary search to find the split between the two sorted sub-arrays
 * Time complexity: O(logN) where N = arr.length
 * Space complexity: O(1)
 * 3, 4, 1, 2, 3
 */
function findStartOfShifted(arr: Array<number>) {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        const index = left + Math.floor((right - left) / 2);
        if (index === 0 || arr[index] > arr[index + 1]) {
            return index + 1;
        }
        if (arr[index] > arr[0]) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
    return 0;
}

/**
 * Time complexity: O(logN) + O(logN) => O(logN) where N = arr.length
 * Space complexity: O(1)
 */
function shiftedArrSearch(shiftArr: Array<number>, num: number): number {
    if (!shiftArr || !shiftArr.length) return -1;
    const startOfShift = findStartOfShifted(shiftArr); // O(logN)
    if (startOfShift === 0 || num < shiftArr[0]) {
        return binarySearch(shiftArr, num, startOfShift, shiftArr.length - 1); // Worst case: O(logN)
    }
    return binarySearch(shiftArr, num, 0, startOfShift - 1); // Worst case: O(logN)
}

export { shiftedArrSearch };
