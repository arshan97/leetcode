/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        
    const sorted = strs.map(str => str.split('').sort().join(''))
    
    const hash = {}
    
    for (let i = 0; i < strs.length; i++) {
        if(!hash[sorted[i]]) {
            hash[sorted[i]] = [strs[i]]
        } else {
            hash[sorted[i]].push(strs[i])
        }
    }
    
    return Object.values(hash)
};