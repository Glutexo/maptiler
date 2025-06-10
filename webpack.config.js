const path = require('path')

module.exports = {
    entry: './src/Learn the basics NPM Module.js',
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '_site/dist'),
    }
};
