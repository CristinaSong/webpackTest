var webpack = require('webpack');

module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,//和入口文件相同的路径
        filename: "bundle.js"
    },
    //处理css文件
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};