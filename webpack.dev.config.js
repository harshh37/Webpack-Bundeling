const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'final_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            { test: /\.(png|jpg|jpeg)$/, use: 'file-loader' },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(), // It cleans dist folder for every new build so that we can get rid of untidy Md5 hashes files.
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            template: 'app/components/index.hbs',
            description: 'Hello webpack Description',
            //  meta:{
            //    viewport:'width=device-width, initial-scale=1.5',
            //  }
        }), //It will generate HtML file for you or you can customize the stuff inside it.
    ],

    mode: 'development',
};
