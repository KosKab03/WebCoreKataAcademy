const path  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const jsLoaders = () => {
   const loaders = [{
     loader: 'babel-loader',
     options: babelOptions()
   }];
 
   if (isDev) {
     loaders.push('eslint-loader');
   }
 
   return loaders;
};

const babelOptions = preset => {
   const opts = {
     presets: [
       '@babel/preset-env'
     ],
     plugins: [
       '@babel/plugin-proposal-class-properties'
     ]
   };
 
   if (preset) {
     opts.presets.push(preset);
   }
 
   return opts;
 };

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   
   devtool: 'source-map',

   entry: {
      main: ['@babel/polyfill','./js/index.js']
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },

   plugins: [
      new HTMLWebpackPlugin( {
         template: './index.html'
      }),

      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin( {
         filename: '[name].css'
      }),

      new CopyPlugin({
         patterns: [
           { from: "./assets/img", to: "img" },
         ],
       }),

   ],

   module: {
      rules: [ {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
          }, 
            'css-loader']
      },
      {
         test: /\.scss$/,
         use: [
           MiniCssExtractPlugin.loader, // Extract css to separate file
           'css-loader', // translates CSS into CommonJS
           'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
           'sass-loader', // compiles Sass to CSS, using Node Sass by default
         ],
       },
      {
         test: /\.(jpe?g|png|gif|svg|ico)$/,
         type: 'asset/resource',
         generator: {
           filename: 'img/[name][ext]'
         } 
       },
       {
         test: /\.(woff|woff2|ttf|otf|eot)$/,
         type: 'asset/resource',
         generator: {
           filename: 'fonts/[name][ext]'
         } 
       },
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use:jsLoaders()
       },
   ]}
}