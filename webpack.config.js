const path = require('path')
var webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // entry: './app/scripts/main.js',
  // mode: 'production',
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: 'app.js'
  // },
  entry: ['babel-polyfill', './app/scripts/main.js'],
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    // new CopyWebpackPlugin([
    //   { from: './app/index.html', to: 'index.html' }
    // ])
    //new VueLoaderPlugin()
  ],
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      // {
      //   test: /\.s?css$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['env'],
      //     plugins: ['transform-react-jsx', 'transform-object-rest-spread', 'transform-runtime']
      //   }
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      }
    ]
  }
}

