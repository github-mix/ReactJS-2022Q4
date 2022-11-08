const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS: DEVELOPMENT',
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        open: true,
    },
}
