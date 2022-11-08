const { merge } = require('webpack-merge');
const webpackConfigCommon = require('./config/webpack.common.js');
const webpackConfigDev = require('./config/webpack.dev.js');
const webpackConfigProd = require('./config/webpack.prod.js');

module.exports = (env) => {
    return env.mode === 'dev' ? merge(webpackConfigCommon, webpackConfigDev) : merge(webpackConfigCommon, webpackConfigProd);
}
