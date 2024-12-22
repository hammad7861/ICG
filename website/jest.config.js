module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "^axios$": require.resolve('axios')
  }
};