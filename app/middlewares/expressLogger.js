const expressLogger = require("express-bunyan-logger");

const expressLoggerHandler = () =>
  expressLogger({
    excludes: [
      "headers",
      "req",
      "user-agent",
      "short-body",
      "http-version",
      "req-headers",
      "res-headers",
      "body",
      "res",
    ],
  });

module.exports = expressLoggerHandler;
