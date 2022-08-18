const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: (process.env.MIN === 'true') ? 'meshwriter.min.js' : 'meshwriter.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  optimization: {
  	minimize: (process.env.MIN === 'true')
  }
};
