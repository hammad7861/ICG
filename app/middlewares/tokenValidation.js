const { CustomErrorHandler, JwtServices } = require("../services");

const tokenValidation = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token = null;

  if (authHeader) token = authHeader.split(" ")[1];

  try {
    if (!token) throw CustomErrorHandler.notAuthorized();
    const tokenPayload = JwtServices.verify(token);

    req.tokenPayload = tokenPayload;
    next();
  } catch (err) {
    next(CustomErrorHandler.notAuthorized());
  }
};

module.exports = tokenValidation;
