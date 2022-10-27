const webpackConfigProd = require('./webpack.config.prod.js')
const webpackConfigDev = require('./webpack.config.dev.js')

module.exports = (env) => {
    return env.mode === 'dev' ? webpackConfigDev : webpackConfigProd;
}
