var path = require('path');
const webpack = require('webpack');

//const isProd = (process.env.NODE_ENV === 'production');
//const isDev  = (process.env.NODE_ENV !== 'production');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },

    resolve: {
        alias: {
            '@src'   : path.resolve(__dirname, 'src'),
        },
        extensions: ['*', '.js', '.json']
    },

    plugins: [ ]
}