const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const paths = require('./paths')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[hash].[ext]?[query]',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                corejs: { version: 3, proposals: true },
                useBuiltIns: 'usage',
                shippedProposals: true,
                targets: {
                  browsers: ['>= 1%, not dead'],
                },
              },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            isDevelopment && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
        exclude: /node_modules/,
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(ico|png|jpe?g|gif|jpeg|svg|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: paths.public + '/index.html',
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html',
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: paths.public,
      generate: (seed, files) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)
        return {
          files: manifestFiles,
        }
      },
    }),
    isDevelopment && new RefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'css'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
