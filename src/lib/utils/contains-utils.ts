export function isSubArray(array, sub_array) {
    return Object.entries(sub_array).filter(value1 => value1[1] != array[value1[0]]).length == 0;
}
