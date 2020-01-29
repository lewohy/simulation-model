const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': ['./src/pages/ts/index.ts', './src/pages/scss/index.scss'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src/pages/dist')
    },
    resolve: {
        extensions: [".ts", ".vue", ".js", ".json"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        host : '127.0.0.1',
        contentBase: path.join(__dirname, "./"),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            appendTsxSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
    ]
}