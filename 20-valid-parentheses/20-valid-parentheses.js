/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let array = [];
    for (let char of s) {
        if (bracket[char]) {
            array.push(bracket[char])
        } else {
            if (array.pop() !== char) {
                return false;
            }
        }
    }
    return (!array.length)
};