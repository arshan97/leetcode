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
        
        if(map.has(complement)) {
            return [i, map.get(complement)]
        }
        
        map.set(num, i)
    }
};