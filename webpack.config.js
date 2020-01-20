const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': ['./src/pages/ts/index.ts'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src/pages/dist')
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
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    }
}