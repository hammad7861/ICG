const mongoose = require("mongoose");
const url = require("../config").get("dbURL");

async function connectDataBase() {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = connectDataBase;
