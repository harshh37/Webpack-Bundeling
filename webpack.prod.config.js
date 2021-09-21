const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');  // ALready included in production mode
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'final_bundle.[contenthash].js', //[contenthash]=> Browser caching
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      index:'index.html',
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' },
        ],
    },

    plugins: [
        // new TerserPlugin(), // Use for JS file minification
        new MiniCssExtractPlugin({
            //use for css extraction from main HTML
            filename: 'styles.[contenthash].css', // Browser caching
        }),
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

    mode: 'production',
};
