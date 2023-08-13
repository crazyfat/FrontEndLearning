const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath:"xuni",
        filename: 'bundle.js',
    },
    devServer: {
        port:8083,
        static:path.resolve(__dirname, "www")
    },
    mode:"development"

};