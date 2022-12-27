const { merge } = require('webpack-merge');
const webpackConfigCommon = require('./config/webpack.common.js');
const webpackConfigDev = require('./config/webpack.dev.js');
const webpackConfigProd = require('./config/webpack.prod.js');

module.exports = () => {
    return process.env.NODE_ENV === 'development' ? merge(webpackConfigCommon, webpackConfigDev) : merge(webpackConfigCommon, webpackConfigProd);
}
