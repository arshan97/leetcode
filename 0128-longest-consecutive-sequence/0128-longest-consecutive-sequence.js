/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)

    let streak = 0

    for(let num of set) {
        if(set.has(num-1)) {
            continue
        } else {
            let currentStreak = 1

            while(set.has(num+1)) {
                currentStreak++
                num++
            }

            streak = Math.max(streak, currentStreak)
        }
    }

    return streak
};