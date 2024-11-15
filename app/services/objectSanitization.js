const arraySanitization = require("./arraySanitization");
const xss = require("xss");

const objectSanitization = (obj, excludeFields = []) => {
  for (const key in obj) {
    if (!excludeFields.includes(key)) {
      if (Array.isArray(obj[key])) {
        arraySanitization(obj[key], key, objectSanitization);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        objectSanitization(obj[key]);
      } else if (typeof obj[key] === "string") {
        obj[key] = xss(obj[key]);
      }
    }
  }
};

module.exports = objectSanitization;
