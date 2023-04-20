const path = require('path')

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
    }
}
