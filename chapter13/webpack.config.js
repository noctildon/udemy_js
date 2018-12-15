const path = require('path')

module.exports = {
    entry: './src/index.js', // 要編譯哪個js
    output: {
        path: path.resolve(__dirname, 'public/scripts'), // 這裡的output要用絕對路徑,
        // __dirname = 現在目錄, path.solve 可以適應各種OS
        // 執行 npm run webpack就會輸出js到scripts目錄, 預設的檔名是main.js
        filename: 'bundle.js' // 用filename指定輸出的檔名
    },
    module: {
        rules: [{ // 把babel包含到webpack的編譯中, 就不用執行babel那一長串的指令來適應各式瀏覽器
            test: /\.js$/,
            exclude: /node_modules/, // 除外node_modules,因為沒必要編譯它們
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'], // 可加入一些參數
                    plugin: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: { // webpack-dev-server
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: "source-map" // 可以在瀏覽器console裡面右邊看到是哪個source js執行的,而不是compile過後的js
}