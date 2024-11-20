const { merge } = require('webpack-merge');
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ThemedProgressPlugin } = require('themed-progress-plugin');

const argv = require('yargs-parser')(process.argv.slice(2));

const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const _modeflag = _mode === 'production' ? true : false;

const webpackBaseConfig = {
  // [!NOTE]: Webpack 不能默认以 index.tsx 为入口。
  // 添加入口文件配置
  entry: {
    main: resolve('./src/index.tsx')
  },
  output: {
    path: resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader"
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)/i,
        // 静态自用的默认的类型
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'node_modules')
        ],
        // loader从后往前执行，先解析css里面的内容，然后解析css
        // 解析完有两种方案插入到页面
        // 1. style-loader 可以把css插入到页面的<style /> 当中
        // 2. MiniCssExtractPlugin.loader 把CSS单独提取出来
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  // 支持的类型
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],  // 添加文件扩展名解析
    alias: {
      '@': resolve('src/'),
      '@components': resolve('src/components'),
      '@hooks': resolve('src/hooks'),
      '@pages': resolve('src/pages'),
      '@layouts': resolve('src/layouts'),
      '@assets': resolve('src/assets'),
      '@routes': resolve('src/routes'),
      '@states': resolve('src/states'),
      '@service': resolve('src/service'),
      '@utils': resolve('src/utils'),
      '@lib': resolve('src/lib'),
      '@constants': resolve('src/constants'),
      '@connectors': resolve('src/connectors'),
      '@abis': resolve('src/abis'),
      '@types': resolve('src/types')
    }
  },
  plugins: [
    // 清空dist，需要防盗最上面
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      chunkFilename: _modeflag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      ignoreOrder: false,
    }),
    new Dotenv(),
    new ThemedProgressPlugin(),
  ]
};

module.exports = merge(webpackBaseConfig, _mergeConfig);
