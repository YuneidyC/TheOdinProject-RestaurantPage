const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
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
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        server: 'http',
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: 'src/menu.html',
            chunks: ['menu']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/contact.html',
            chunks: ['contact']
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