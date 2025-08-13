const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const fs = require('fs')

// Путь к папке со страницами
const pagesDir = path.resolve(__dirname, 'src/pages')

// Получаем массив всех HTML-файлов в папке pages
const pageFiles = fs
    .readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'))

// Создаем массив HtmlWebpackPlugin для каждой страницы
const htmlPagesPlugins = pageFiles.map(file => {
    return new HtmlWebpackPlugin({
        template: path.join(pagesDir, file),
        filename: `pages/${file}`
    })
})

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
        publicPath: '/bruschatka/' // Префикс для всех путей
    },
    mode: 'development', // или 'production'
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/bruschatka/' // маппинг dist в /bruschatka/
            },
            {
                directory: path.join(__dirname, 'src/pages'),
                publicPath: '/bruschatka/pages/'
            }
        ],
        port: 3000,
        open: ['/bruschatka/'], // откроет сразу /bruschatka/
        historyApiFallback: {
            index: '/bruschatka/index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        ...htmlPagesPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
