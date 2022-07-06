/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    var pre = nums;
    if(nums.length == 1){
        return nums[0];
    }
   for(i = nums.length - 1; i > 0; i--){
       let cur = new Array(i).fill(0);
       for(j = 0; j < i; j++) {
           cur[j] = (pre[j] + pre[j + 1]) % 10;
       }
       pre = cur;
   }
   return pre[0];
};
console.log(triangularSum([1, 2, 3, 4, 5]));
