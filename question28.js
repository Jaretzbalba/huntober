//12/15/22
// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// function twoSum(nums, sum) {
//   //iterate through each number in array
//   let result = [];
//   nums.forEach((el, ind, arr) => {
//     for (let i = ind + 1; i < nums.length; i++) {
//       if (el + arr[i] === sum) result.push([el, arr[i]]);
//     }
//   });
//   return result;
// }

//OR

const twoSum = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;
    //if part2 exists in store array, push part1 and part2 to pair array
    if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
    store.push(part1);
  }

  return pairs;
};

console.log(twoSum([1, 2, 2, 3, 4], 4));
