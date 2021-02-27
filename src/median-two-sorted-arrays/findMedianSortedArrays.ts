function mergeArrays(nums1: number[], nums2: number[]): number[] {
    return [...nums1, ...nums2].sort((a, b) => a - b);
}

function mergeArraysCustom(nums1: number[], nums2: number[]): number[] {
    const mergedNums: number[] = [];
    let nextJ = 0; // loop optimization
    for (let i = 0; i < nums1.length; i += 1) {
        let iSettled = false; // i can be last after all nums2
        for (let j = nextJ; j < nums2.length; j += 1) {
            if (nums1[i] <= nums2[j]) {
                mergedNums.push(nums1[i]);
                iSettled = true;
                break;
            } else {
                mergedNums.push(nums2[j]);
                nextJ = j + 1;
            }
        }
        if (!iSettled) {
            mergedNums.push(nums1[i]);
        }
    }
    // num2 can continue after all nums1
    for (let j = nextJ; j < nums2.length; j++) {
        mergedNums.push(nums2[j]);
    }
    return mergedNums;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const useCustom = false;
    const mergedNums = useCustom ? mergeArraysCustom(nums1, nums2) : mergeArrays(nums1, nums2);
    if (!mergedNums.length) {
        return 0;
    }
    if (mergedNums.length === 1) {
        return mergedNums[0];
    }
    const centerIndex = mergedNums.length / 2;
    if (centerIndex - Math.round(centerIndex) !== 0) {
        return mergedNums[centerIndex - 0.5];
    }
    const [i, j] = [centerIndex - 1, centerIndex];
    return (mergedNums[i] + mergedNums[j]) / 2;
}

export default findMedianSortedArrays;
