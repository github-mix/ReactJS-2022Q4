const path = require('path')

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        allowedHosts: ['.preview.csb.app'],
        disableHostCheck: true,
    },
}
