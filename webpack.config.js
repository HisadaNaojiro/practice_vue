const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    // エントリーポイント(メインのjsファイル)
    entry: path.resolve('src'),
    // ファイルの出力設定
    output: {
        // 出力先(絶対パスでの指定必須)
        path: path.resolve(__dirname, 'dist/js'),
        // 出力ファイル名
        filename: "bundle.js"
    },
    mode: "development",
    // ソースマップ有効
    devtool: 'source-map',
    // ローダーの設定
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                // ローダーの対象 // 拡張子 .js の場合
                test: /\.js$/,
                // ローダーの処理対象から外すディレクトリ
                exclude: /node_modules/,
                // Babel を利用する
                loader: "babel-loader",
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2019 を ES5 に変換
                        "@babel/preset-env"
                    ]
                }
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        // Webpackで利用するときの設定
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
        // Vueを読み込めるようにするため
        new VueLoaderPlugin()
    ],

};