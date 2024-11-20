const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// TODO: 这种配置应该是要放到 .env 当中
const port = 3000;

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port,
  },
  stats: 'errors-only',
  output: {
    publicPath: '/',
    //如果是通过loader 编译的 放到scripts文件夹里 filename
    filename: 'scripts/[name].bundle.js',
    //如果是通过'asset/resource' 编译的
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '杨风移 frontend spa template',
      favicon: './public/favicon.ico',
      filename: 'index.html',
      template: resolve(__dirname, '../src/index-dev.html'),
      inject: true,
    }),
    new FriendlyErrorsWebpackPlugin({
      // 成功之后输出的消息
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + port],
        notes: ['💊 构建信息请及时关注窗口右上角'],
      },
      // 报错之后弹窗提示
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        console.log(error);
        notifier.notify({
          title: '👒 Webpack Build Error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: join(__dirname, 'icon.png'),
        });
      },
      clearConsole: true,
    }),
    // 分析包的体积, 自己使用的时候再添加
    // new BundleAnalyzerPlugin()
  ],
};
