// generate an arrray of n elements
const array = [...Array(5 * 10).keys()];

// regex
// export const phoneNumberRegex = new RegExp("/d{9}/");
export const phoneNumberRegex = /^\d{0,9}$/;

// Find max in an array
const numbers = [1, 2, 104, 44, 92];
const maxNumber = Math.max.apply(null, numbers);

// Club 2 arrays using apply
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
arr1.push.apply(arr1, arr2);
// arr1 before push can be any array,
// .apply(arr1,arr3) => here arr1 is the context, where elements will be added,
// arr2 is the array passed as parament to apply
// so arr2 elements one by one gets pushed to arr1
