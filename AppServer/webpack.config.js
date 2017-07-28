var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts/');
var APP_DIR = path.resolve(__dirname, 'views/components');

module.exports = {
    entry: APP_DIR + '/LoginBlock/index.jsx',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
        ],
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

};