const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        alias: {
            Images: path.resolve(__dirname, './src/assets/images/'),
            Styles: path.resolve(__dirname, './src/assets/css/'),
        }
    },
    devtool: "eval-source-map",
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './src/index.html',
            template: './src/index.html',
            chunks: ['main']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};