const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/scripts/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'MyLib',
    libraryTarget: 'var'
  }
};
