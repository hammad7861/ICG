function getAssetUrl(req, assetType, assetPath) {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  switch (assetType) {
    case "User Profile Image":
      return `${baseUrl}/assets/images/profiles/${assetPath}`;
    case "Product Banner Image":
      return `${baseUrl}/assets/images/products/banners/${assetPath}`;
    case "Event Banner Image":
      return `${baseUrl}/assets/images/events/banners/${assetPath}`;
    case "Product MSDS Document":
      return `${baseUrl}/assets/documents/products/msds/${assetPath}`;
    case "Product TDS Document":
      return `${baseUrl}/assets/documents/products/tds/${assetPath}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetUrl;
