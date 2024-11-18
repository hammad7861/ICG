function getAssetPath(assetType, assetName) {
  switch (assetType) {
    case "User Profile Image":
      return `../assets/images/profiles/${assetName}`;
    case "Product Banner Image":
      return `../assets/images/products/banners/${assetName}`;
    case "Product MSDS Document":
      return `../assets/documents/products/msds/${assetName}`;
    case "Product TDS Document":
      return `../assets/documents/products/tds/${assetName}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetPath;
