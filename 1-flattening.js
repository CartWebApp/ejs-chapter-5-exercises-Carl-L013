let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let newArray = arrays.reduce((total, nums) => total.concat(nums), []);
console.log(newArray);

// → [1, 2, 3, 4, 5, 6]