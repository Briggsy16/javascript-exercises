const removeFromArray = function (array, value) {
    const args = [];
    array = Array.from(arguments[0]);

    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    for (let i = 0; i < args.length; i++) {
        let valueToRemove = args[i];
        if (array.includes(valueToRemove)) {
            array.splice(array.indexOf(valueToRemove), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
