/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    
    for (n of nums) {
        if(!numSet.has(n - 1)) {
            let length = 1;
            
            while (numSet.has(n + length)) {
                length +=1
            }
            
         longest = Math.max(length, longest)
        }
    }
    
    return longest
};