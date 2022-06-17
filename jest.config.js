const path = require('path');

module.exports = {
  rootDir: './src',
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(png|jpg|gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: [
    path.resolve('jest/setupEnzyme.js')
  ]
}
