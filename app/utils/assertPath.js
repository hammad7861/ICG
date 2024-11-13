function getAssetPath(assetType, assetName) {
  switch (assetType) {
    case "User Profile Image":
      return `../assets/images/profiles/${assetName}`;
    default:
      throw new Error(`Unknown asset type: ${assetType}`);
  }
}

module.exports = getAssetPath;
