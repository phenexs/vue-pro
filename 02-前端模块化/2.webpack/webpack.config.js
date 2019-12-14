const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 复制src目录下的index.html文件到项目根目录文件下，打开ip端口就能显示主页面
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin,new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16941' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    }
};
