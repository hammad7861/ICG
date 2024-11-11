const successResponse = (res, statusCode, message, data = null) => {
  const response = { status: statusCode, success: true, message };

  if (data !== null) {
    response.data = data;
  }

  res.status(statusCode).json(response);
};

const errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: statusCode,
    success: false,
    message: message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
