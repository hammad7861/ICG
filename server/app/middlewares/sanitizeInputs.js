const xss = require("xss");
const { objectSanitization } = require("../services");

const sanitizeInputs = (excludeFields = []) => {
  return (req, res, next) => {
    if (req.body && Object.keys(req.body).length > 0) {
      req.sanitizedBody = { ...req.body };
      objectSanitization(req.sanitizedBody, excludeFields);
    }

    if (req.query && Object.keys(req.query).length > 0) {
      req.sanitizedQuery = { ...req.query };
      for (const [key, value] of Object.entries(req.sanitizedQuery)) {
        if (!excludeFields.includes(key)) {
          req.sanitizedQuery[key] = xss(value);
        }
      }
    }

    if (req.params && Object.keys(req.params).length > 0) {
      req.sanitizedParams = { ...req.params };
      for (const [key, value] of Object.entries(req.sanitizedParams)) {
        if (!excludeFields.includes(key)) {
          req.sanitizedParams[key] = xss(value);
        }
      }
    }

    next();
  };
};

module.exports = sanitizeInputs;
