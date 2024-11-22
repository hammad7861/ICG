const { ASSET_PATH_MAPPING } = require("../constants");

function getAssetUrl(req, assetType, assetPath) {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const relativePath = ASSET_PATH_MAPPING[assetType];

  if (!relativePath) {
    throw new Error(`Unknown asset type: ${assetType}`);
  }

  return `${baseUrl}/assets/${relativePath}/${assetPath}`;
}

module.exports = getAssetUrl;
