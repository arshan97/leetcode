/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set(nums);
    const isDuplicate = numsSet.size !== nums.length;
    return isDuplicate;
};