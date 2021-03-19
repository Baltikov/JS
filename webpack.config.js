
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//  точка входа (переоределение) не через index.js а через файл указанный в объекте lernshop
module.exports = {
    entry: './src/mainvue.js', //точка входа
    output: {
        path: path.resolve(__dirname, "./lesson6/js"),
        filename: 'main1vue1.js',  // точка выхода
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
    module: {   
        rules: [  // правила, какой тип файлов и как загружать
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader'}
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                     loader: "css-loader",
                     options: {
                         modules: true,
                        }
                    },
                ],
            },

            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

}


