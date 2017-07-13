const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const buildHash = process.env.NODE_ENV === "production" ? "[hash]" : "dev";

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist/app');
const ROOT_DIR  = path.resolve(__dirname);
const PUBLIC_PATH = "/dist/app";

const env = {
    NODE_ENV : JSON.stringify(process.env.NODE_ENV || 'production'),
    BROWSER  : JSON.stringify(true),
}

var config = {
    entry: {
        bundle: APP_DIR + '/client/index.jsx'
    },
    output: {
        path : BUILD_DIR,
        filename: '[name].js?v=[hash]',
        publicPath: PUBLIC_PATH
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: [path.resolve(__dirname, "node_modules")],
                use    : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 10000}
                }
            },
            {
                test: /\.json$/, 
                loader: 'json-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env': env}),
        new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false}),
        new HtmlWebPackPlugin()
    ],
    
}

module.exports = config;