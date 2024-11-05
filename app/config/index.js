const schema = require("./schema");

let env = schema.get("env");
if (env === "development" || env === "test") {
  schema.loadFile(__dirname + "/environments/" + env + ".json");
}

schema.validate({ allowed: "strict" });

module.exports = schema;
