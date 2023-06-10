/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set(nums);
    const isEqual = numsSet.size !== nums.length;
    return isEqual;
};