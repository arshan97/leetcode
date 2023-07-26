/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num;
        const complementIndex = map.get(complement)
        
        if(map.has(complement)) {
            return [i, complementIndex]
        }
        
        map.set(num, i)
    }
};