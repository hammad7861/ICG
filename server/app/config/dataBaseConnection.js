const mongoose = require("mongoose");
const { User } = require("../models");
const url = require("../config").get("dbURL");
const bcrypt = require("bcrypt");

async function connectDataBase() {
  try {
    await mongoose.connect(url, {
      authSource: "admin",
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    console.log("🟢 Database Connected Successfully");

    mongoose.connection.on("error", (err) => {
      console.error("🔴 Mongoose Connection Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("🟠 Lost MongoDB Connection");
    });

    const userEmail = "admin@icg.com";
    const userName = "ICG Admin";
    const userPassword = "12345678";

    const user = await User.findOne({
      email: userEmail,
      archived: false,
      deletedAt: null,
    });

    if (user) {
      console.log("User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(userPassword, 10);

      const newUser = new User({
        name: userName,
        email: userEmail,
        password: hashedPassword,
      });

      await newUser.save();
      console.log("🟢 New user created");
    }
  } catch (error) {
    console.error("🔴 Database Connection Failed:", error);
    process.exit(1);
  }
}

module.exports = connectDataBase;
