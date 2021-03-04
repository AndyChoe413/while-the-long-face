function numberDoubler(num) {
    // Your code here
    while (num < 100) {
       num *= 2
    }
    return num
}

function stringRepeater(str) {
    // Your code here
    let newStr = str;
    while (newStr.length < 10) {
    newStr += str
    }
    return newStr
}


function makeDivisible(x, y) {
    // Your code here
    let result = x;
    while (result % y !== 0) {
        result++
    }
    return result
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};