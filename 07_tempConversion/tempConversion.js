const ftoc = function (temperature) {
    let celcius = (temperature - 32) * 0.5556;
    return parseFloat(celcius.toFixed(1));
};

const ctof = function (temperature) {
    let farenheit = temperature * 1.8 + 32;
    return parseFloat(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
