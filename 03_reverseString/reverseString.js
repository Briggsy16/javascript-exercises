const reverseString = function (str) {
    let length = str.length;
    let reversedString = "";
    for (let i = 1; i <= length; i++) {
        reversedString += str.charAt(length - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
