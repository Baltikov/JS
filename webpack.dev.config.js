const {merge} = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
    devServer: { // новый сервер
        contentBase: './lesson6', // как папку разложить на сервере
        publicPath: '/js', //относительный путь до точки входа
        host:'localhost',
        port: '4000',
        hot: true,
    }
})