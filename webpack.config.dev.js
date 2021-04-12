const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve:{
        extensions: ['.js', '.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|jpeg|gif|svg/,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port: 8081
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/static"),
                    to: "assets/static"
                }
            ]
        })
    ],
};