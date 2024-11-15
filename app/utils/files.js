const fs = require("fs");
const path = require("path");

const deleteFiles = (files) => {
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
};

module.exports = deleteFiles;
