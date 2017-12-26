const path = require('path');

module.exports = {
  entry: { 
    login: './client/js/ui/pages/login.js',
    test: './client/js/tests/testSuite.js',
    home: './client/js/ui/pages/home.js'
  },
  watch: true,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './client/js/dist')
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
      'logic':path.join(__dirname, 'client/js/buisnessLogic'),
      'api':path.join(__dirname, 'client/js/routes/api'),
      'site':path.join(__dirname, 'client/js/routes/navigation'),
      'abstract':path.join(__dirname, 'client/js/browserAbstractions')
    }
  }
};