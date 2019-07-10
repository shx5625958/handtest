const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV;
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
    mode: env, //'development' // production
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
            },
            {
                test: /.js$/,
                exclude: path.resolve('node_modules'),
                loader: 'babel-loader',
                options: {
                  presets: ['env'], // babel-preset-env
                  plugins: ['syntax-dynamic-import'],
                },
              },
        ]
    }
};