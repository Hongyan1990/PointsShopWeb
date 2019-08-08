const path = require('path');
const createVueLoaderOptions = require('./vue-loader.config');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    target: "web",
    entry: path.join(__dirname, '../client/client-entry.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../public'),
        publicPath: 'http://127.0.0.1:8000/public/'
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                enforce: "pre"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|gif|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    }
};
module.exports = config;
