const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS: PRODUCTION',
            template: path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html',
        }),
    ],
}
