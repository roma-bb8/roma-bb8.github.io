'use strict';

const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/app.js',
    output: {
        path: __dirname + '/assets/',
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin('NODE_ENV'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        host: 'localhost',
        port: 8080
    }
};
