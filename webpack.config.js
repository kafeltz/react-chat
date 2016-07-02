'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'eval',
    module: {
        // right to left
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        // don't bundle the 'react' npm package with our bundle.js
        // but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
