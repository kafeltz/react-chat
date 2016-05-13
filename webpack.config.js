'use strict';

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
    },
    module: {
        loaders: [
            {
                // tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    externals: {
        // don't bundle the 'react' npm package with our bundle.js
        // but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
