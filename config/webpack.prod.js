const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')

const cssModuleRegex = /\.module\.css$/

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [
      {
        test: cssModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
})
