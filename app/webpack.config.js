var webpack = require('webpack');

module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,//和入口文件相同的路径
        filename: "bundle.js"
    },
    //处理css文件
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style-loader!css-loader" }
    //     ]
    // },
    module: {
        rules: [
          {
            test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            // test 符合此正则规则的文件，运用 loader 去进行处理，除了exclude 中指定的内容
          }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};