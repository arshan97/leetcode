/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = cleanup(s)
    return isPal(str)
};

function cleanup(s) {
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
    let str = ''
    
    for(let i=0; i<s.length; i++) {
        if(char.indexOf(s[i].toLowerCase()) !== -1) {
            str += s[i].toLowerCase()
        }
    }
    
    return str
}

function isPal(str) {
    let left = 0;
    let right = str.length - 1;
    
    while(left<right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    
    return true
}