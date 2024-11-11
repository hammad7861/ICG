const fs = require("fs");
const path = require("path");
const { errorResponse } = require("../utils");
const { CustomErrorHandler } = require("../services");

const errorHandler = (err, req, res, next) => {
  const files = req.file ? [req.file] : req.files || [];
  for (const file of files) {
    const filePath = path.resolve(__dirname, "..", file.path);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found at ${filePath}`);
      continue;
    }

    try {
      fs.unlinkSync(filePath);
      console.log(`File deleted at ${filePath}`);
    } catch (deleteError) {
      console.error(`Error deleting file at ${filePath}:`, deleteError);
    }
  }

  if (err instanceof CustomErrorHandler) {
    return errorResponse(res, err.statusCode, err.message);
  }

  return errorResponse(
    res,
    err.status || 500,
    err.message || "Internal Server Error"
  );
};

module.exports = errorHandler;
