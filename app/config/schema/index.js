const convict = require("convict");
convict.addFormat(require("convict-format-with-validator").ipaddress);

module.exports = convict({
  env: {
    doc: "The application environment, determining the configuration and behavior of the application. This can be 'production', 'development', or 'test'.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  ipAddress: {
    doc: "The IP address on which the application server will bind and listen for incoming connections. This should be a valid IPv4 or IPv6 address.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  appPort: {
    doc: "The network port number on which the application will listen. This is where the server will accept incoming HTTP requests.",
    format: "port",
    default: 8080,
    env: "APP_PORT",
    arg: "port",
  },
  dbURL: {
    doc: "The db url. This is where the application will connect to read and write data.",
    format: String,
    default: "mongodb://localhost:27017/",
    env: "DATABASE_URL",
  },
});
