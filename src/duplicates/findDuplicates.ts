/**
 * find duplicates in two sorted arrays with approx the same size
 */
function findDuplicates(arr1: number[], arr2: number[]) {
    let arr1Index = 0;
    let arr2Index = 0;
    const duplicates: number[] = [];

    // step through both arrays at once by exploiting the fact that the two arrays are sorted
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] === arr2[arr2Index]) {
            duplicates.push(arr1[arr1Index]);
            arr1Index += 1;
            arr2Index += 1;
        } else if (arr1[arr1Index] < arr2[arr2Index]) {
            arr1Index += 1;
        } else {
            arr2Index += 1;
        }
    }
    return duplicates;
}

/**
 * find duplicates in two sorted arrays where arr2 >> arr1
 */
function findDuplicatesWithBinarySearch(arr1: number[], arr2: number[]) {
    const duplicates: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let low = 0;
        let high = arr2.length - 1;

        while (high >= low) {
            const mid = Math.floor((low + high) / 2);
            if (arr2[mid] === arr1[i]) {
                duplicates.push(arr1[i]);
                break;
            } else if (arr2[mid] > arr1[i]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    return duplicates;
}

export { findDuplicates, findDuplicatesWithBinarySearch };
