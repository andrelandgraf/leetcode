/**
 * @param arr sorted array of distinct integers
 * @returns lowest matching index
 */
function indexEqualsValueSearch(arr: number[]): number {
    if (!arr.length) {
        return -1;
    }
    let leftBoundary = 0;
    let rightBoundary = arr.length - 1;
    let currentMinIndex = -1;
    while (leftBoundary <= rightBoundary) {
        const index = Math.floor((leftBoundary + rightBoundary) / 2);
        if (index === arr[index]) {
            // we go left
            currentMinIndex = index;
            rightBoundary = index - 1;
        } else if (index > arr[index]) {
            // we go right
            leftBoundary = index + 1;
        } else {
            // we go left
            rightBoundary = index - 1;
        }
    }
    return currentMinIndex;
}

export default indexEqualsValueSearch;
