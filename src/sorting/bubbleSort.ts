/**
 * Time complexity of O(N^2)
 * Space complexity of O(1) (sorting in place)
 */
function bubbleSort(array: number[]): number[] {
    let i = 0;
    let hasBubbled = false;
    while (i < array.length - 1) {
        const current = array[i];
        const next = array[i + 1];
        if (current > next) {
            array[i] = next;
            array[i + 1] = current;
            hasBubbled = true;
        }
        i += 1;
        if (i + 1 === array.length) {
            if (hasBubbled) {
                i = 0;
                hasBubbled = false;
            } else {
                return array;
            }
        }
    }
    return array;
}

export { bubbleSort };
