module.exports = {
     entry: './js/index.js',
     output: {
         path: './js',
         filename: 'app.js',
     },
     module: {
             loaders: [
                 { test: /\.css$/, loader: "style-loader!css-loader" }
             ]
    }
 }
