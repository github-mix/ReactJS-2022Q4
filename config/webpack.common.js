const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.jsx'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ReactJS: ' + process.env.NODE_ENV,
            template: path.resolve(__dirname, '../src/index.html'),
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
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            // Asset Modules
            {
                test: /\.(gif|png|jpg?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    'image-webpack-loader'
                ],
                generator: {
                    filename: 'img/[name].[hash][ext]',
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash][ext]',
                },
            },
        ]
    }
}

