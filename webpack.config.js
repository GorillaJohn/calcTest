const path = require('path')
/*const { CleanWebpackPlugin } = require('clean-webpack-plugin')*/

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'calc.js'
    },
    /*plugins: [
        new CleanWebpackPlugin()
    ],*/
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json,', '.jsx'],
    }

};