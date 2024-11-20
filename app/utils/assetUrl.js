const { ASSET_URL_TYPE } = require("../constants");

function getAssetUrl(req, assetType, assetPath) {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  switch (assetType) {
    case ASSET_URL_TYPE.userProfileImage:
      return `${baseUrl}/assets/images/profiles/${assetPath}`;
    case ASSET_URL_TYPE.productBannerImage:
      return `${baseUrl}/assets/images/products/banners/${assetPath}`;
    case ASSET_URL_TYPE.eventBannerImage:
      return `${baseUrl}/assets/images/events/banners/${assetPath}`;
    case ASSET_URL_TYPE.mediaAndNewsBannerImage:
      return `${baseUrl}/assets/images/mediaAndNews/banners/${assetPath}`;
    case ASSET_URL_TYPE.productMSDSDocument:
      return `${baseUrl}/assets/documents/products/msds/${assetPath}`;
    case ASSET_URL_TYPE.productTDSDocument:
      return `${baseUrl}/assets/documents/products/tds/${assetPath}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetUrl;
