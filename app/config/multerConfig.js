const multer = require("multer");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const { ALLOWED_MIME_TYPES } = require("../constants");

const createMulterConfig = (uploadPaths) => {
  Object.values(uploadPaths).forEach((uploadPath) => {
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
  });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = uploadPaths[file.fieldname];
      if (uploadPath) {
        cb(null, uploadPath);
      } else {
        cb(
          new Error(`No upload path defined for fieldname: ${file.fieldname}`)
        );
      }
    },
    filename: (req, file, cb) => {
      const fileName =
        `${file.fieldname}${moment().unix()}${path.extname(file.originalname)}`.replace(
          /[^a-zA-Z0-9-_.]/g,
          "-"
        );
      cb(null, fileName);
    },
  });

  const fileFilter = (req, file, cb) => {
    const validMimes = ALLOWED_MIME_TYPES[file.fieldname];
    if (validMimes && validMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type for field: ${file.fieldname}`), false);
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  });
};

module.exports = createMulterConfig;
