const xss = require("xss");

const arraySanitization = (arr, key, objectSanitization) => {
  arr.forEach((element, index) => {
    if (typeof element === "object" && element !== null) {
      objectSanitization(element, `${key}[${index}]`);
    } else {
      arr[index] = typeof element === "number" ? element : xss(element);
    }
  });
};

module.exports = arraySanitization;
