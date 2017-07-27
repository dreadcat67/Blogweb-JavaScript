var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts/');
var APP_DIR = path.resolve(__dirname, 'views/components');

module.exports = {
    entry: APP_DIR+'/LoginBlock/index.jsx',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    module : {
        loaders:[
            {
                test:/\.jsx?/,
                loader: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" }
            ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

};