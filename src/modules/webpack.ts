import { exec } from "child_process"
const webpack = `
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = {
    // 本番にデプロイするときはモード値を production に設定
    // development に設定すると元のファイルとの関連性がわかるソースマップと一緒に出力される
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: outputPath
    },
    // entry
    entry: {
        index: './src/js/index.js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                'css-loader'
            ]
        }, {
            test: /\.scss$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'compressed',
                        }
                    },
                },
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', //loader名
                options: { //Babelの設定
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        })
    ],
};
Object.keys(webpackConfig.entry).forEach((key) => {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: (key === 'index') ? './src/html/index.html' : './src/html/' + key + '.html', // Source
            filename: (key === 'index') ? './index.html' : key + '.html', // Dist
            inject: true,
            hash: true,
            chunks: [key], // insert to the root of output folder
        })
    );
})
module.exports = webpackConfig
`
export default (push: string): void =>
{
    exec(`echo "${webpack}" >> ${push}/webpack.config.js`, (error, stdout, stderr): void =>
    {
        if (error)
        {
            console.log(stderr);
            return
        }
        console.log(stdout);
    })
}