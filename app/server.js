const app = require("./app");
const connectDataBase = require("./config/dataBaseConnection");
const appPort = require("./config").get("appPort");

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);

  // TODO : send email to admin to notify about error
  setTimeout(() => {
    process.exit(1);
  }, 1500);
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);

  // TODO : send email to admin to notify about error
  setTimeout(() => {
    process.exit(1);
  }, 1500);
});

connectDataBase();

app.listen(appPort || 8080, () => {
  console.log(`ICG server running on port ${appPort} `);
});
