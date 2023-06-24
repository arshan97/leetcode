/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) {
        return false
    }
    
    const sLetters = {}
    
    for(let sChar of s) {
        if(!sLetters[sChar]) {
            sLetters[sChar] = 1
        } else {
            sLetters[sChar]++
        }
    }
    
    for(let tChar of t) {
        if(!sLetters[tChar]) {
            return false
        }
        
        if(sLetters[tChar]) {
            sLetters[tChar]--
        }
        
        if(sLetters[tChar] === 0) {
            delete sLetters[tChar]
        }
    }
    
    return Object.keys(sLetters).length === 0
};