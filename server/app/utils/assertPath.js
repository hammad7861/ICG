const { ASSET_PATH_MAPPING } = require("../constants");

function getAssetPath(assetType, assetName) {
  const relativePath = ASSET_PATH_MAPPING[assetType];
  if (!relativePath) {
    throw new Error(`Unknown asset type: ${assetType}`);
  }
  return `../assets/${relativePath}/${assetName}`;
}

module.exports = getAssetPath;
