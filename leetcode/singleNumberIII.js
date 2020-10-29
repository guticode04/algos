// Given an integer array nums, in which exactly two elements appear only 
// once and all the other elements appear exactly twice.Find the two 
// elements that appear only once.You can return the answer in any order.

// Sample Inputs

// Input: nums = [1, 2, 1, 3, 2, 5]
// Output: [3, 5]
// Explanation: [5, 3] is also a valid answer.

// Input: nums = [-1, 0]
// Output: [-1, 0]

// Input: nums = [0, 1]
// Output: [1, 0]


function singleNumber(nums) {
   let numEles = {};
   let result = [];
   let numsLength = nums.length;
   
   for (let i = 0; i < numsLength; i++) {
      const num = nums[i];
      if (!numEles[num]) numEles[num] = 0;
      numEles[num] += 1
   }

   for (num in numEles) {
      if (numEles[num] === 1) result.push(num);
   }
   return result;
}