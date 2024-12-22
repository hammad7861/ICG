const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const {
  errorHandler,
  routeNotFoundHandler,
  expressLoggerHandler,
} = require("./middlewares");
const router = require("./routes");
require("./models");

const app = express();

// Serve static assets (images) from the "assets" folder and its subdirectories
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

// Middleware setup
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(helmet());
app.use(expressLoggerHandler);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

// API routes
app.use("/api", router);

// 404 and error handling
app.use(routeNotFoundHandler);
app.use(errorHandler);

module.exports = app;
