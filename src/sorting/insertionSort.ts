/**
 * Time complexity of O(N^2)
 * Space complexity of O(1) (sorting in place)
 * @param array
 * @returns
 */
function insertionSort(array: number[]): number[] {
    for (let i = 1; i < array.length; i += 1) {
        const currentVal = array[i];
        let currentIndex = i;
        for (let j = i - 1; j >= 0; j -= 1) {
            const sortedVal = array[j];
            if (currentVal < sortedVal) {
                array[j] = currentVal;
                array[currentIndex] = sortedVal;
                currentIndex = j;
            }
        }
    }
    return array;
}

export { insertionSort };
