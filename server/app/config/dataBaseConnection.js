const mongoose = require("mongoose");
const url = require("../config").get("dbURL");

async function connectDataBase() {
  try {
    await mongoose.connect(url, {
      // Important configuration options
      authSource: "admin", // If using authentication
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
      socketTimeoutMS: 45000, // Socket timeout
      family: 4, // Use IPv4, sometimes helps with connection issues
    });
    console.log("🟢 Database Connected Successfully");

    // Add error and disconnection event listeners
    mongoose.connection.on("error", (err) => {
      console.error("🔴 Mongoose Connection Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("🟠 Lost MongoDB Connection");
    });
  } catch (error) {
    console.error("🔴 Database Connection Failed:", error);
    // Optionally exit the process
    process.exit(1);
  }
}

module.exports = connectDataBase;
