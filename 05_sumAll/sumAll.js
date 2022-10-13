const sumAll = function (startNum, endNum) {
    if (
        typeof startNum != "number" ||
        typeof endNum != "number" ||
        startNum < 0 ||
        endNum < 0
    ) {
        return "ERROR";
    }

    let difference = endNum - startNum;
    if (difference < 0) {
        let tempNum = endNum;
        endNum = startNum;
        startNum = tempNum;
    }

    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
