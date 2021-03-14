/**
 * optimized for space performance
 * reuses and alters nums parameter
 */
// function threeSum(nums: number[]): number[][] {
//     if (!nums.length || nums.length < 3) {
//         return [];
//     }
//     nums.sort((a, b) => a - b);
//     const triplets: Record<string, number[]> = {};
//     let breakIndex: undefined | number = undefined;
//     let currentNum: undefined | number = undefined;
//     let counter = 0;
//     for (let i = 0; i < nums.length; i += 1) {
//         if (currentNum === nums[i]) {
//             counter += 1;
//             if (counter > 2 || currentNum === 0) {
//                 nums.splice(i, 1);
//                 i -= 1;
//             }
//             if (counter === 3 && currentNum === 0) {
//                 triplets[[0, 0, 0].toString()] = [0, 0, 0];
//             }
//         } else {
//             if (nums[i] === 0 || (currentNum && currentNum < 0 && nums[i] > 0)) {
//                 breakIndex = i;
//             }
//             counter = 1;
//             currentNum = nums[i];
//         }
//     }
//     for (let i = 0; breakIndex && i < nums.length && nums[i] < 0; i += 1) {
//         for (let j = nums.length - 1; j >= breakIndex; j -= 1) {
//             for (let k = i + 1; k < j; k += 1) {
//                 if (nums[i] + nums[k] + nums[j] > 0) {
//                     break;
//                 }
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//                     if (!triplets[triplet.toString()]) {
//                         triplets[triplet.toString()] = triplet;
//                     }
//                 }
//             }
//         }
//     }
//     return Object.values(triplets);
// }

function threeSum(nums: number[]): number[][] {
    if (!nums.length || nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const triplets: Record<string, number[]> = {};
    let breakIndex: undefined | number = undefined;
    let currentNum: undefined | number = undefined;
    let counter = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (currentNum === nums[i]) {
            counter += 1;
            if (counter > 2 || currentNum === 0) {
                nums.splice(i, 1);
                i -= 1;
            }
            if (counter === 3 && currentNum === 0) {
                triplets[[0, 0, 0].toString()] = [0, 0, 0];
            }
        } else {
            if (nums[i] === 0 || (currentNum && currentNum < 0 && nums[i] > 0)) {
                breakIndex = i;
            }
            counter = 1;
            currentNum = nums[i];
        }
    }
    for (let i = 0; breakIndex && i < nums.length && nums[i] < 0; i += 1) {
        for (let j = nums.length - 1; j >= breakIndex; j -= 1) {
            // binary search through bounded array
            let upperBound = j - 1;
            let lowerBound = i + 1;
            while (lowerBound <= upperBound) {
                const midIndex = Math.floor((lowerBound + upperBound) / 2);
                if (nums[i] + nums[midIndex] + nums[j] > 0) {
                    upperBound = midIndex - 1;
                }
                if (nums[i] + nums[midIndex] + nums[j] < 0) {
                    lowerBound = midIndex + 1;
                }
                if (nums[i] + nums[midIndex] + nums[j] === 0) {
                    const triplet = [nums[i], nums[midIndex], nums[j]]; // sorted by default
                    if (!triplets[triplet.toString()]) {
                        triplets[triplet.toString()] = triplet;
                    }
                    break;
                }
            }
        }
    }
    return Object.values(triplets);
}

export default threeSum;
