const tokenValidation = require("./tokenValidation");
const userRetrieval = require("./userRetrieval");

const authMiddleware = [tokenValidation, userRetrieval];

module.exports = authMiddleware;
