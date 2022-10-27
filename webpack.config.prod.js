const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, './distProd'),
        filename: '[name].[hash].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS: Webpack',
            heading: `PRODUCTION`,
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    }
}
