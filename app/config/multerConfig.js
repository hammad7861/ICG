const multer = require("multer");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const createMulterConfig = (uploadPath) => {
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
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
    const allowedMimes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/bmp",
      "image/tiff",
      "image/svg+xml",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB
    },
  });
};

module.exports = createMulterConfig;
