const repeatString = function (str, num) {
  let phrase = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
        phrase += str;
      }
      return phrase;
  } else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = repeatString;
