/**
 * @param {number[]} nums
 * @return {number[]}
 */

// [1, 2, 3, 4]

var productExceptSelf = function(nums) {
    let product = 1;
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = product;
        product *= nums[i];
    }
    
    product = 1;
    
    for (let j = nums.length - 1; j >=0; j--) {
        res[j] *= product;
        product *= nums[j]
    }
    
    return res;
};