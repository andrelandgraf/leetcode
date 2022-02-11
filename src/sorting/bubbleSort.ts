/**
 * Time complexity of O(N^2)
 * Space complexity of O(1) (sorting in place)
 */
function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i += 1) {
        let hasBubbled = false;
        for (let j = 0; j < array.length - i - 1; j += 1) {
            const current = array[j];
            const next = array[j + 1];
            if (current > next) {
                array[j] = next;
                array[j + 1] = current;
                hasBubbled = true;
            }
        }
        if (!hasBubbled) {
            return array;
        }
    }
    return array;
}

export { bubbleSort };
