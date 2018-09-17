const path = require('path');

module.exports = {
    mode:'development',
    entry: {
        reactGGE: path.resolve(__dirname, '..', 'src/index')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'src'),
        publicPath: '/dist',
        disableHostCheck: true,
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '..', 'src/dist'),
        libraryTarget: 'umd',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentNames: '[local]-[hash:64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options:{
                            config:{
                                path:path.resolve(__dirname,'./postcss.config.js')
                            }
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        antd: {
            root: 'antd',
            commonjs: 'antd',
            commonjs2: 'antd',
            amd: 'antd',
        },
    }
};