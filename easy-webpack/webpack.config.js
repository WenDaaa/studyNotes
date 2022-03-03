const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/react.dispathAction.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
       new  HtmlWebpackPlugin({template:'./template.html'})
    ],
    devServer:{
        hot:true
    }
}