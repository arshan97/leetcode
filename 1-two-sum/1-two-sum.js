/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
       const num = nums[i];
        const complement = target - num;
        
        if(map[complement] !== undefined) {
            res.push(map[complement])
            res.push(i);
        }
            
            map[num] = i;
    }
        
        return res;
    
};