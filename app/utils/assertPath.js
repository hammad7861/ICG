const { ASSET_URL_TYPE } = require("../constants");

function getAssetPath(assetType, assetName) {
  switch (assetType) {
    case ASSET_URL_TYPE.userProfileImage:
      return `../assets/images/profiles/${assetName}`;
    case ASSET_URL_TYPE.productBannerImage:
      return `../assets/images/products/banners/${assetName}`;
    case ASSET_URL_TYPE.eventBannerImage:
      return `../assets/images/events/banners/${assetName}`;
    case ASSET_URL_TYPE.mediaAndNewsBannerImage:
      return `../assets/images/mediaAndNews/banners/${assetName}`;
    case ASSET_URL_TYPE.productMSDSDocument:
      return `../assets/documents/products/msds/${assetName}`;
    case ASSET_URL_TYPE.productTDSDocument:
      return `../assets/documents/products/tds/${assetName}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetPath;
