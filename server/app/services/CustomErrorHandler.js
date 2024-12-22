class CustomErrorHandler extends Error {
  constructor(statusCode, msg) {
    super();
    this.statusCode = statusCode;
    this.message = msg;
  }

  static wrongCredentials(message = "Invalid Credentials") {
    return new CustomErrorHandler(401, message);
  }

  static forbidden(message = "Access to resource is forbidden") {
    return new CustomErrorHandler(403, message);
  }

  static notAuthorized(message = "Not authorized") {
    return new CustomErrorHandler(401, message);
  }

  static notFound(resource = "Resource") {
    const message = `${resource} not found`;
    return new CustomErrorHandler(404, message);
  }

  static customClientMessage(message) {
    return new CustomErrorHandler(400, message);
  }
}

module.exports = CustomErrorHandler;
