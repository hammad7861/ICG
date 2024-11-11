function getAssetUrl(req, assetType, assetPath) {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  switch (assetType) {
    case "User Profile Image":
      return `${baseUrl}/assets/images/profiles/${assetPath}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetUrl;
