/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for (num of nums) {
        if(numsSet.has(num)) {
            return true
        }
        numsSet.add(num)
    }
    return false
};