/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const arr = []
    let prefix = 1
    
    for(let i = 0; i<nums.length; i++) {
        arr.push(prefix)
        prefix = prefix*nums[i]
    }
    
    const res = []
    let postfix = 1
    
    for(let i = nums.length - 1; i>=0; i--) {
        res.unshift(postfix*arr[i])
        postfix = postfix*nums[i]
    }
    
    return res
};