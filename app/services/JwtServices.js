const jwt = require("jsonwebtoken");
const jwtKey = require("../config").get("jwtKey");

class JwtServices {
  static sign(payload, secret = jwtKey, expiry = "170000s") {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static verify(token, secret = jwtKey) {
    return jwt.verify(token, secret);
  }
}

module.exports = JwtServices;
