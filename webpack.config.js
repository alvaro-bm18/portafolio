const path = require("path");
module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "main.js"
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [{
            test: /\.js|\.jsx$/,
            exclude: /node_module/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ]
    }
}