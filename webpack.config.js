const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.\[hash:8\].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port:9090,
   },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.tplt.html',
            favicon: './assents/c7n.jpg',
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'index.\[hash:8\].css',

          })
    ],
    devtool: 'cheap-module-eval-source-map',
    module:{
        rules: [
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,

                    'css-loader'
                ]
            },
            {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                         'file-loader'
                         ]
            }
        ]
    }
};