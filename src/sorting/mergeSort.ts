/**
 * Time complexity of O(NlogN)
 * Space complexity of O(N)
 * @param array
 * @returns
 */
function mergeSort(array: number[]): number[] {
    if (array.length < 2) return array;
    const halfIndex = Math.floor(array.length / 2);
    /*
     * Depth-first recursion halfing the space every time
     * => time & space complexity through recursive calls of O(logN)
     */
    const leftSide = mergeSort(array.slice(0, halfIndex));
    const rightSide = mergeSort(array.slice(halfIndex, array.length));
    let leftIndex = 0;
    let rightIndex = 0;
    // Result will contain full copy of array at the end => space complexity of O(N)
    let result: number[] = [];
    // Traverse through whole list once => O(N) (in every recrusion) => Total time complexity O(NlogN)
    while (leftIndex < leftSide.length || rightIndex < rightSide.length) {
        if (leftIndex >= leftSide.length) {
            result.push(rightSide[rightIndex]);
            rightIndex += 1;
        } else if (rightIndex >= rightSide.length) {
            result.push(leftSide[leftIndex]);
            leftIndex += 1;
        } else if (leftSide[leftIndex] <= rightSide[rightIndex]) {
            result.push(leftSide[leftIndex]);
            leftIndex += 1;
        } else {
            result.push(rightSide[rightIndex]);
            rightIndex += 1;
        }
    }
    return result;
}

export { mergeSort };
