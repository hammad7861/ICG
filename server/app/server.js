const app = require("./app");
const connectDataBase = require("./config/dataBaseConnection");
const appPort = require("./config").get("appPort");

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  setTimeout(() => process.exit(1), 1500);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  setTimeout(() => process.exit(1), 1500);
});

connectDataBase();

app.listen(appPort || 3000, () => {
  console.log(`ICG server running on port ${appPort} `);
});
