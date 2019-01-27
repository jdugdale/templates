const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const moment = require('moment');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.pug$/, loader: 'pug-plain-loader' },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader']},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery', jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            templateParameters: () => { return { version: moment().utc().format('YYYYMMDD.HHmm') }; }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
