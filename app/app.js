const express = require("express");
const helment = require("helmet");
const {
  errorHandler,
  routeNotFoundHandler,
  expressLoggerHandler,
} = require("./middlewares");
require("./models");
const cors = require("cors");
const app = express();
const router = require("./routes");

// For parsing the data
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));

// To change to the frontend url then
app.use(cors());

//for security
app.use(helment());

// logger
app.use(expressLoggerHandler);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

// Route
app.use("/api", router);

// catch 404
app.use(routeNotFoundHandler);

// error handling
app.use(errorHandler);

module.exports = app;
