/**
 * Time complexity of O(N^2)
 * Space complexity of O(1) (sorting in place)
 * @param array
 * @returns
 */
function selectionSort(array: number[]): number[] {
    // visit every item: O(N)
    for (let i = 0; i < array.length; i += 1) {
        const currentVal = array[i];
        let minIndex = i;
        /**
         * for first item, visit N-1 other items
         * for second item, visit N-2 other items
         * ...
         * for last item, visit no other items
         * => ca. O(N-1)/2 => O(N)
         */
        for (let j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            array[i] = array[minIndex];
            array[minIndex] = currentVal;
        }
    }
    return array;
}

export { selectionSort };
