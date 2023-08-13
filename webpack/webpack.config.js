const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, './dist'),
        clean:true
    },
    plugins:[
      new HtmlWebpackPlugin({
          template:'./index.html',
          inject:'body',
          filename:'hello1.html'
      })
    ],
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist'
    }

}