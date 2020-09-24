function runningSum(nums) {
   let arr = [];
   let newEle;
   let prevEle;
   for (let i = 0; i < nums.length; i++) {
      if (!arr[arr.length - 1]) {
         prevEle = 0;
      } else {
         prevEle = arr[arr.length - 1];
      }
      newEle = nums[i] + prevEle;
      arr.push(newEle);
   }

   return arr;
}