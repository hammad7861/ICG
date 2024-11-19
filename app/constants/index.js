exports.ASSET_URL_TYPE = {
  userProfileImage: "User Profile Image",
  productBannerImage: "Product Banner Image",
  eventBannerImage: "Event Banner Image",
  productMSDSDocument: "Product MSDS Document",
  productTDSDocument: "Product TDS Document",
};

exports.FILE_TYPES = {
  JPEG: "image/jpeg",
  PNG: "image/png",
  GIF: "image/gif",
  WEBP: "image/webp",
  BMP: "image/bmp",
  TIFF: "image/tiff",
  SVG: "image/svg+xml",
  PDF: "application/pdf",
};

exports.ALLOWED_FILE_TYPES = {
  IMAGES: [
    exports.FILE_TYPES.JPEG,
    exports.FILE_TYPES.PNG,
    exports.FILE_TYPES.GIF,
    exports.FILE_TYPES.WEBP,
    exports.FILE_TYPES.BMP,
    exports.FILE_TYPES.TIFF,
    exports.FILE_TYPES.SVG,
  ],
  PDF: [exports.FILE_TYPES.PDF],
};

exports.ALLOWED_MIME_TYPES = {
  profileImage: exports.ALLOWED_FILE_TYPES.IMAGES,
  bannerImage: exports.ALLOWED_FILE_TYPES.IMAGES,
  MSDS: exports.ALLOWED_FILE_TYPES.PDF,
  TDS: exports.ALLOWED_FILE_TYPES.PDF,
};
