/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let consecutiveCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            currentCount++;
        } else {
            currentCount = 0;
        }
        
        consecutiveCount = Math.max(consecutiveCount, currentCount)
    }
    
    return consecutiveCount;
};