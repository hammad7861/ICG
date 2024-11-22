exports.ASSET_URL_TYPE = {
  userProfileImage: "User Profile Image",
  productBannerImage: "Product Banner Image",
  eventBannerImage: "Event Banner Image",
  mediaAndNewsBannerImage: "Media And News Banner Image",
  articleBannerImage: "Article Banner Image",
  artcileAttachmentDocument: "Article Attachment Document",
  blogBannerImage: "Blog Banner Image",
  blogFeaturedImage: "Blog Featured Image",
  productMSDSDocument: "Product MSDS Document",
  productTDSDocument: "Product TDS Document",
  brochureAttachmentImage: "Brochure Attachment Document",
};

exports.ASSET_PATH_MAPPING = {
  [exports.ASSET_URL_TYPE.userProfileImage]: "images/profiles",
  [exports.ASSET_URL_TYPE.productBannerImage]: "images/products/banners",
  [exports.ASSET_URL_TYPE.eventBannerImage]: "images/events/banners",
  [exports.ASSET_URL_TYPE.mediaAndNewsBannerImage]:
    "images/mediaAndNews/banners",
  [exports.ASSET_URL_TYPE.articleBannerImage]: "images/articles/banners",
  [exports.ASSET_URL_TYPE.artcileAttachmentDocument]:
    "documents/articles/attachments",
  [exports.ASSET_URL_TYPE.blogBannerImage]: "images/blogs/banners",
  [exports.ASSET_URL_TYPE.blogFeaturedImage]: "images/blogs/featured",
  [exports.ASSET_URL_TYPE.productMSDSDocument]: "documents/products/msds",
  [exports.ASSET_URL_TYPE.productTDSDocument]: "documents/products/tds",
  [exports.ASSET_URL_TYPE.productTDSDocument]: "documents/products/tds",
  [exports.ASSET_URL_TYPE.brochureAttachmentImage]:
    "images/brochures/attachments",
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
  featuredImage: exports.ALLOWED_FILE_TYPES.IMAGES,
  MSDS: exports.ALLOWED_FILE_TYPES.PDF,
  TDS: exports.ALLOWED_FILE_TYPES.PDF,
  articleAttachment: exports.ALLOWED_FILE_TYPES.PDF,
  brochureAttachment: exports.ALLOWED_FILE_TYPES.IMAGES,
};

exports.MEDIA_AND_NEWS_TYPES = {
  NEWS_ANNOUNCEMENT: "News Announcement",
  PRESS_RELEASE: "Press Release",
};

exports.ALLOWED_MEDIA_AND_NEWS_TYPES = [
  exports.MEDIA_AND_NEWS_TYPES.NEWS_ANNOUNCEMENT,
  exports.MEDIA_AND_NEWS_TYPES.PRESS_RELEASE,
];
